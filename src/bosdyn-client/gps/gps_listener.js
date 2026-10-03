/**
 * @file Reads GPS data from a tcp/udp stream, and sends to aggregator service.
 */

'use strict';

const { Buffer } = require('node:buffer');
const process = require('node:process');

const { NMEAParser } = require('./NMEAParser');
const { AggregatorClient } = require('./aggregator_client');
const { NtripClient } = require('./ntrip_client');

const gpsPb = require('../../bosdyn/api/gps/gps_pb');
const { Event } = require('../../bosdyn-core/event');
const { nowSec } = require('../../bosdyn-core/util');
const { ProxyConnectionError } = require('../exceptions');
const { UnregisteredServiceNameError } = require('../robot');

/**
 * @typedef {import('../logger_util').Logger} Logger
 * @typedef {import('../math_helpers').SE3Pose} SE3Pose
 * @typedef {import('../robot').Robot} Robot
 * @typedef {import('../../bosdyn-core/util').RobotTimeConverter} RobotTimeConverter
 */

// Like Python's str(raw_data, 'utf-8'), which raises on invalid data (Buffer.toString() replaces it).
const _UTF8 = new TextDecoder('utf-8', { fatal: true });

/**
 * Nothing was read from the GPS stream in time, like Python's socket.timeout.
 */
class StreamTimeoutError extends Error {
  constructor(message = 'Timed out while reading the GPS stream.') {
    super(message);
    this.name = 'StreamTimeoutError';
  }
}

/**
 * Reads the lines of a Node.js readable stream (TCP socket, serial port...), like Python's readline().
 */
class _LineReader {
  /**
   * @param {import('node:stream').Readable} stream The stream.
   */
  constructor(stream) {
    this._stream = stream;

    /**
     * Complete lines received, with their '\n'.
     * @type {Buffer[]}
     */
    this._lines = [];

    /**
     * Data received after the last complete line.
     * @type {Buffer}
     */
    this._pending = Buffer.alloc(0);

    this._ended = false;
    /** @type {?Error} */
    this._error = null;
    this._interrupted = false;

    /**
     * Set when something happens on the stream.
     * @type {Event}
     */
    this._changed = new Event();

    this._listeners = {
      data: chunk => this._onData(typeof chunk === 'string' ? Buffer.from(chunk) : chunk),
      end: () => this._onEnd(),
      close: () => this._onEnd(),
      error: error => {
        this._error ??= error;
        this._changed.set();
      },
    };
    for (const [name, listener] of Object.entries(this._listeners)) stream.on(name, listener);
  }

  /**
   * Read the next line.
   * @param {?number} timeoutMs Maximum time to wait, in milliseconds. null waits until a line is received.
   * @returns {Promise<?Buffer>} The line with its '\n' (the last line of the stream may have none), or null if
   * interrupted.
   * @throws {StreamTimeoutError} No line was received in time.
   * @throws {Error} The stream failed or ended.
   */
  async readline(timeoutMs) {
    const end = timeoutMs === null ? Infinity : Date.now() + timeoutMs;

    while (!this._lines.length && !this._interrupted && this._error === null && !this._ended) {
      const left = end - Date.now();
      if (left <= 0) throw new StreamTimeoutError();
      this._changed.clear();
      await this._changed.wait(left === Infinity ? null : left);
    }

    if (this._interrupted) {
      this._interrupted = false;
      return null;
    }
    if (this._lines.length) return this._lines.shift();
    if (this._error) throw this._error;
    // Like Python's readline() at the end of a file: the last line, even without '\n'.
    if (this._pending.length) {
      const last = this._pending;
      this._pending = Buffer.alloc(0);
      return last;
    }
    throw new Error('The GPS stream ended.');
  }

  /**
   * End the pending readline(), which returns null (or the next one, if none is pending).
   * @returns {void}
   */
  interrupt() {
    this._interrupted = true;
    this._changed.set();
  }

  /**
   * Stop reading the stream: remove the listeners and pause it.
   * @returns {void}
   */
  close() {
    for (const [name, listener] of Object.entries(this._listeners)) this._stream.off(name, listener);
    // A flowing stream without 'data' listener would drop its data.
    this._stream.pause?.();
  }

  _onData(chunk) {
    let data = this._pending.length ? Buffer.concat([this._pending, chunk]) : chunk;
    for (let end = data.indexOf(0x0a); end >= 0; end = data.indexOf(0x0a)) {
      this._lines.push(data.subarray(0, end + 1));
      data = data.subarray(end + 1);
    }
    this._pending = data;
    this._changed.set();
  }

  _onEnd() {
    this._ended = true;
    this._changed.set();
  }
}

class NMEAStreamReader {
  /**
   * The amount of time (in seconds) to wait before logging another decode error.
   * @type {number}
   */
  static LOG_THROTTLE_TIME = 2.0;

  /**
   * @param {Logger} logger Object to log with.
   * @param {import('node:stream').Readable|{readline: Function}} stream The GPS data: a readable stream, like a TCP
   * socket or a serial port, or an object with a readline() method that returns a line or a promise of one, like the
   * Python streams. Reading a socket times out after its timeout (socket.setTimeout()), like Python's settimeout().
   * @param {SE3Pose} bodyTformGps Pose of the GPS in the body frame.
   * @param {boolean} [verbose=false] Log the NMEA messages received.
   */
  constructor(logger, stream, bodyTformGps, verbose = false) {
    this.logger = logger;
    this.stream = stream;
    this.parser = new NMEAParser(logger);
    this.bodyTformGps = bodyTformGps.toProto();
    this.lastFailedReadLogTime = null;
    this.verbose = verbose;

    /**
     * Reader of the lines of the stream, while it is read.
     * @type {?_LineReader}
     * @private
     */
    this._lineReader = null;
  }

  /**
   * This function returns an array of new GpsDataPoints.
   * @param {?RobotTimeConverter} timeConverter Converter to robot time, null if the clocks are synchronized.
   * @returns {Promise<?gpsPb.GpsDataPoint[]>} null if the line read is not NMEA, or if interrupt() was called.
   * @throws {StreamTimeoutError} Nothing was received in time.
   * @throws {Error} The stream failed or ended.
   */
  async readData(timeConverter) {
    const line = await this._readline();
    if (line === null) {
      return null;
    }

    let rawData;
    try {
      // If the raw data is a bytes object, decode it into a string.
      rawData = typeof line === 'string' ? line : _UTF8.decode(line);
    } catch (err) {
      // Throttle the logs.
      const now = nowSec();
      if (
        this.lastFailedReadLogTime === null ||
        now - this.lastFailedReadLogTime > NMEAStreamReader.LOG_THROTTLE_TIME
      ) {
        this.logger.error('Failed to decode NMEA message. Is it not Unicode?');
        this.lastFailedReadLogTime = now;
      }
      return null;
    }

    if (!rawData.includes('$')) {
      // Not NMEA
      return null;
    }

    // Trim any leading characters before the NMEA sentence.
    rawData = rawData.substring(rawData.indexOf('$'));

    // If we are being verbose, print the message we received.
    if (this.verbose) {
      this.logger.info(`Read: ${rawData}`);
    }

    // Parse the received message.
    const newPoints = this.parser.parse(rawData, timeConverter, false);

    // Offset for the GPS
    for (const dataPoint of newPoints) {
      dataPoint.setBodyTformGps(this.bodyTformGps.clone());
    }

    return newPoints;
  }

  getLatestGga() {
    return this.parser.getLatestGga();
  }

  /**
   * End the pending readData(), which returns null. A stream with a readline() method can not be interrupted.
   * @returns {void}
   */
  interrupt() {
    this._lineReader?.interrupt();
  }

  /**
   * Stop reading the stream until the next readData().
   * @returns {void}
   */
  close() {
    this._lineReader?.close();
    this._lineReader = null;
  }

  async _readline() {
    if (typeof this.stream.readline === 'function') {
      const line = await this.stream.readline();
      // Python's readline() returns an empty line at the end of the stream: reading it again would loop forever.
      if (line === null || line === undefined || line.length === 0) {
        throw new Error('The GPS stream ended.');
      }
      return line;
    }

    this._lineReader ??= new _LineReader(this.stream);
    const { timeout } = this.stream;
    return this._lineReader.readline(Number.isFinite(timeout) && timeout > 0 ? timeout : null);
  }
}

class GpsListener {
  /**
   * Number of attempts to create the aggregator service client: the payload can come up faster than the service.
   * @type {number}
   */
  static MAX_ATTEMPTS = 45;

  /**
   * Time between two of these attempts, in seconds.
   * @type {number}
   */
  static SECS_PER_ATTEMPT = 2;

  /**
   * @param {Robot} robot The robot, used to create the aggregator service client.
   * @param {?RobotTimeConverter} timeConverter Converter to robot time, null if the clocks are synchronized by some
   * other method, such as NTP.
   * @param {import('node:stream').Duplex} stream The GPS stream, see NMEAStreamReader. The NTRIP client writes the
   * corrections to it.
   * @param {string} name The name of the GPS device.
   * @param {SE3Pose} bodyTformGps Pose of the GPS in the body frame.
   * @param {Logger} logger Object to log with.
   * @param {boolean} [verbose=false] Log the NMEA messages received.
   */
  constructor(robot, timeConverter, stream, name, bodyTformGps, logger, verbose = false) {
    this.logger = logger;
    this.robot = robot;
    this.timeConverter = timeConverter;
    this.stream = stream;
    this.reader = new NMEAStreamReader(logger, stream, bodyTformGps, verbose);
    this.gpsDevice = new gpsPb.GpsDevice();
    this.gpsDevice.setName(name);
    this.aggregatorClient = null;
    this.ntripClient = null;

    /**
     * Set by stop() to end run(), while it runs.
     * @type {?Event}
     * @private
     */
    this._stopEvent = null;

    /**
     * @type {?number}
     * @private
     */
    this._lastRpcErrorLogTime = null;
  }

  runNtripClient(ntripParams) {
    this.ntripClient = new NtripClient(this.stream, ntripParams, this.logger);
    this.ntripClient.startStream();
  }

  /**
   * Stop the NTRIP client, if any.
   * @returns {Promise<void>} Resolves once it has stopped.
   */
  stopNtripClient() {
    if (this.ntripClient === null) {
      return Promise.resolve();
    }

    const stopped = this.ntripClient.stopStream();
    this.ntripClient = null;
    return stopped;
  }

  /**
   * End run(), like the KeyboardInterrupt (Ctrl+C) that ends it in Python.
   * @returns {void}
   */
  stop() {
    this._stopEvent?.set();
    this.reader.interrupt();
  }

  /**
   * Send the GPS data read from the stream to the robot, until stop() is called or a SIGINT (Ctrl+C) is received.
   * Once stopped, the NTRIP client is stopped too.
   * @returns {Promise<boolean>} False if the aggregator service is not available, or if reading the stream failed.
   */
  async run() {
    if (this._stopEvent !== null) {
      throw new Error('GpsListener.run() is already running.');
    }
    const stopEvent = new Event();
    this._stopEvent = stopEvent;
    // Like Python, which makes sure that a SIGINT raises KeyboardInterrupt: Ctrl+C ends run().
    const onSigint = () => this.stop();
    process.on('SIGINT', onSigint);
    try {
      const ok = await this._run(stopEvent);
      if (stopEvent.isSet()) {
        // Just in case there is an NTRIP client still running, stop it here.
        await this.stopNtripClient();
      } else if (this.ntripClient !== null) {
        // A failure: the stream of the NTRIP client is stopped (it kept the process alive, unlike the daemon thread
        // of Python), but the client is kept: a new run() restarts its stream, like Python.
        await this.ntripClient.stopStream();
      }
      return ok;
    } finally {
      process.off('SIGINT', onSigint);
      this.reader.close();
      this._stopEvent = null;
    }
  }

  /**
   * @param {Event} stopEvent Set to stop.
   * @returns {Promise<boolean>} True once stopped, false on failure.
   * @private
   */
  async _run(stopEvent) {
    // It is possible for a payload to come up faster than the service. Loop a few times to give it time to come up.
    let numAttempts = 0;

    while (this.aggregatorClient === null && numAttempts < GpsListener.MAX_ATTEMPTS && !stopEvent.isSet()) {
      numAttempts += 1;
      try {
        /** @type {AggregatorClient} */
        this.aggregatorClient = await this.robot.ensureClient(AggregatorClient.defaultServiceName);
      } catch (err) {
        if (err instanceof UnregisteredServiceNameError || err instanceof ProxyConnectionError) {
          this.logger.info('Waiting for the Aggregator Service');
        } else {
          this.logger.error(`Unexpected exception while waiting for the Aggregator Service: ${err?.stack ?? err}`);
        }
        await stopEvent.wait(GpsListener.SECS_PER_ATTEMPT * 1_000);
      }
    }

    if (stopEvent.isSet()) {
      return true;
    }
    if (this.aggregatorClient === null) {
      this.logger.error('Failed to connect to the Aggregator Service!');
      return false;
    }

    // Continue to send an empty GPS data request if connected to a device without GPS signal.
    // These variables control the frequency with which these empty messages are sent.
    const everyXSeconds = 5;
    let timePassedSinceLastRpc = 0;
    let timestampOfLastRpc = 0;

    let accumulatedData = [];
    // Like the future of Python's new_gps_data_async(): one request at a time, the data received in the meantime is
    // sent with the next one.
    let aggInProgress = false;
    const sendGpsData = dataPoints => {
      aggInProgress = true;
      this.aggregatorClient
        .newGpsData(dataPoints, this.gpsDevice)
        .catch(err => this._logRpcError(err))
        .finally(() => {
          aggInProgress = false;
        });
    };

    // Attach and run until stopped.
    this.logger.info('Listening for GPS data.');
    while (!stopEvent.isSet()) {
      let newData;
      try {
        newData = await this.reader.readData(this.timeConverter);
      } catch (err) {
        if (err instanceof StreamTimeoutError) {
          this.logger.warn(
            'Socket timed out while reading GPS data. This may be normal, there could be a problem with the GPS ' +
              'receiver, or there may be a loose hardware connection.',
          );
        } else {
          this.logger.error(`Caught exception while attempting to read from GPS stream: ${err?.stack ?? err}`);
        }
        return false;
      }

      if (newData === null) {
        continue;
      }

      accumulatedData.push(...newData);

      if (accumulatedData.length > 0) {
        if (!aggInProgress) {
          sendGpsData(accumulatedData);
          accumulatedData = [];
          timestampOfLastRpc = nowSec();
          timePassedSinceLastRpc = 0;
        }
      } else if (timePassedSinceLastRpc > everyXSeconds) {
        if (!aggInProgress) {
          sendGpsData([]);
        }
        timestampOfLastRpc = nowSec();
        timePassedSinceLastRpc = 0;
      } else {
        timePassedSinceLastRpc = nowSec() - timestampOfLastRpc;
      }

      // If we are running an NTRIP client, pass it the latest GGA message.
      if (this.ntripClient !== null) {
        // If the NTRIP Client's stream has been closed, restart it.
        if (!this.ntripClient.isStreaming()) {
          this.logger.info('Restarting NTRIP Client!');
          this.ntripClient.startStream();
        }

        const latestGga = this.reader.getLatestGga();
        if (latestGga !== null) {
          this.ntripClient.handleNmeaGga(latestGga);
        }
      }
    }

    return true;
  }

  /**
   * Log an error of a NewGpsData request, at most once per LOG_THROTTLE_TIME. Python ignores them.
   * @param {Error} err The error.
   * @private
   */
  _logRpcError(err) {
    const now = nowSec();
    if (this._lastRpcErrorLogTime === null || now - this._lastRpcErrorLogTime > NMEAStreamReader.LOG_THROTTLE_TIME) {
      this.logger.warn(`Failed to send GPS data to the robot: ${err?.message ?? err}`);
      this._lastRpcErrorLogTime = now;
    }
  }
}

module.exports = {
  NMEAStreamReader,
  GpsListener,
  StreamTimeoutError,
};
