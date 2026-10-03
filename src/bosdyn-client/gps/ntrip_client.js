/**
 * @file An NTRIP client: it downloads the GPS corrections of an NTRIP caster and forwards them to the GPS device.
 */

'use strict';

const { Buffer } = require('node:buffer');
const net = require('node:net');
const tls = require('node:tls');

const { Event } = require('../../bosdyn-core/event');

// Seconds of delay before retry after server error.
const SERVER_RECONNECT_DELAY = 60;
// Socket timeout in seconds.
const SOCKET_TIMEOUT = 10;
// Number of timeouts before reconnecting.
const SOCKET_MAX_RECV_TIMEOUTS = 12;

const DEFAULT_NTRIP_SERVER = '';
const DEFAULT_NTRIP_PORT = 2101;
const DEFAULT_NTRIP_TLS_PORT = 2102;

/**
 * Class for storing parameters for connecting an NTRIP client to an NTRIP server.
 */
class NtripClientParams {
  constructor(
    server = DEFAULT_NTRIP_SERVER,
    port = DEFAULT_NTRIP_PORT,
    user = '',
    password = '',
    mountPoint = '',
    useTls = false,
    reconnectSecs = SERVER_RECONNECT_DELAY,
  ) {
    this.server = server;
    this.port = port;
    this.user = user;
    this.password = password;
    this.mountPoint = mountPoint;
    this.tls = useTls;
    this.reconnectSecs = reconnectSecs;
  }
}

/**
 * Reads a socket like Python's socket.recv() with a timeout.
 *
 * Its listeners are added once for the life of the socket, and removed by close(): listeners added for each read
 * stay attached when the read ends by another event.
 */
class _SocketReader {
  /**
   * @param {import('node:net').Socket} sock The socket, just created.
   * @param {string} connectEvent The event emitted once connected: 'connect', or 'secureConnect' for TLS.
   */
  constructor(sock, connectEvent) {
    this.sock = sock;
    this.connected = false;
    this.closed = false;
    /** @type {?Error} */
    this.error = null;

    /**
     * Data received and not read yet.
     * @type {Buffer[]}
     * @private
     */
    this._chunks = [];

    /**
     * Set when something happens on the socket.
     * @type {Event}
     * @private
     */
    this._changed = new Event();

    this._listeners = {
      [connectEvent]: () => {
        this.connected = true;
        this._changed.set();
      },
      data: chunk => {
        this._chunks.push(chunk);
        this._changed.set();
      },
      end: () => this._setClosed(),
      close: () => this._setClosed(),
      error: error => {
        this.error ??= error;
        this._changed.set();
      },
    };
    for (const [name, listener] of Object.entries(this._listeners)) sock.on(name, listener);
  }

  /**
   * Wait until the socket is connected.
   * @param {number} timeoutMs Maximum time to wait, in milliseconds.
   * @returns {Promise<boolean>} False if the socket failed or did not connect in time.
   */
  async waitConnected(timeoutMs) {
    await this._waitFor(() => this.connected, timeoutMs);
    return this.connected;
  }

  /**
   * Read the data received, waiting for some if there is none.
   * @param {number} timeoutMs Maximum time to wait, in milliseconds.
   * @returns {Promise<?Buffer>} The data, an empty buffer once the connection is closed (like Python's recv()),
   * or null if nothing was received in time.
   * @throws {Error} The socket failed.
   */
  async recv(timeoutMs) {
    await this._waitFor(() => this._chunks.length > 0, timeoutMs);
    if (this._chunks.length) return Buffer.concat(this._chunks.splice(0));
    if (this.error) throw this.error;
    return this.closed ? Buffer.alloc(0) : null;
  }

  /**
   * Close the socket and remove the listeners.
   * @returns {void}
   */
  close() {
    if (this._listeners === null) return;
    this.sock.destroy();
    for (const [name, listener] of Object.entries(this._listeners)) this.sock.off(name, listener);
    this._listeners = null;
    // A destroyed socket emits no more errors, but an 'error' event without listener would end the process.
    this.sock.on('error', () => {});
    // Wake up a pending wait.
    this._setClosed();
  }

  _setClosed() {
    this.closed = true;
    this._changed.set();
  }

  async _waitFor(ready, timeoutMs) {
    const end = Date.now() + timeoutMs;

    while (!ready() && !this.closed && this.error === null && Date.now() < end) {
      this._changed.clear();
      await this._changed.wait(end - Date.now());
    }
  }
}

/**
 * Client used to connect to an NTRIP server to download GPS corrections. These corrections are then forwarded on to the
 * GPS device using the given stream.
 */
class NtripClient {
  constructor(device, params, logger) {
    this.device = device;
    this.host = params.server;
    this.port = params.port;
    this.user = params.user;
    this.password = params.password;
    this.mountPoint = params.mountPoint;
    this.tls = params.tls;
    this.reconnectSecs = params.reconnectSecs;

    this.streaming = false;

    /**
     * The socket connected to the NTRIP server, available for sending GGA.
     * @type {?import('node:net').Socket}
     */
    this.sock = null;

    this.logger = logger;

    /**
     * Reader of the connection in progress.
     * @type {?_SocketReader}
     * @private
     */
    this._reader = null;

    /**
     * Set to stop the current worker.
     * @type {Event}
     * @private
     */
    this._stopEvent = new Event();

    /**
     * The worker, which connects to the server, streams the data and reconnects.
     * @type {Promise<void>}
     * @private
     */
    this._worker = Promise.resolve();
  }

  /**
   * Make a connection request to an NTRIP server.
   * @returns {Buffer}
   */
  makeRequest() {
    const authStr = Buffer.from(`${this.user}:${this.password}`, 'utf-8').toString('base64');

    const lines = [
      `GET /${this.mountPoint} HTTP/1.1`,
      `Host: ${this.host}:${this.port}`,
      'User-Agent: NTRIP Node.js Client',
      'Accept: */*',
      `Authorization: Basic ${authStr}`,
      'Connection: close',
      '',
      '',
    ];

    const request = lines.join('\r\n');

    return Buffer.from(request, 'utf8');
  }

  /**
   * Start streaming data from an NTRIP server to a GPS receiver.
   * @returns {void}
   */
  startStream() {
    if (this.streaming) {
      this.stopStream();
    }

    const stopEvent = new Event();
    this._stopEvent = stopEvent;
    this.streaming = true;

    // Like Python, where stop_stream() joins the worker thread: the new worker starts once the previous one has
    // ended, so that a single connection forwards corrections to the receiver.
    this._worker = this._worker
      .then(() => this._streamDataWorker(stopEvent))
      .catch(e => {
        this.logger.error(`NTRIP client stopped by an error: ${e?.stack ?? e}`);
        // Not streaming anymore: the GPS listener restarts the client.
        if (this._stopEvent === stopEvent) this.streaming = false;
      });
  }

  /**
   * Stop streaming NTRIP data.
   * @returns {Promise<void>} Resolves once the worker has ended, like Python's join().
   */
  stopStream() {
    this.streaming = false;
    this._stopEvent.set();
    // End the connection in progress now, instead of at the next data or timeout.
    this._reader?.close();
    return this._worker;
  }

  /**
   * Determine if we are streaming NTRIP data.
   */
  isStreaming() {
    return this.streaming;
  }

  /**
   * Given a GPGGA message, send it to the NTRIP server. This helps the NTRIP server send corrections that are
   * applicable to the area in which the receiver is operating.
   * @param {string} gga The GGA sentence.
   * @returns {boolean} False if not connected.
   */
  sendGGA(gga) {
    if (!this.sock || this.sock.destroyed) return false;
    try {
      this.sock.write(Buffer.from(gga, 'utf-8'));
      return true;
    } catch (err) {
      this.logger.warn('Error sending GGA');
      return false;
    }
  }

  /**
   * NTRIP Rev1 uses Shoutcast (ICY). Create an ICY session to stream RTCM data.
   * @param {Event} [stopEvent] Set to stop the session.
   * @returns {Promise<boolean>} True if the session was created: this.sock can send GGA sentences.
   */
  async createIcySession(stopEvent = this._stopEvent) {
    // Create a socket connection to the host and port.
    /** @type {import('node:net').Socket} */
    let sock;
    if (this.tls) {
      this.logger.info('Using secure connection');
      sock = tls.connect({ host: this.host, port: this.port, servername: this.host });
    } else {
      sock = net.createConnection({ host: this.host, port: this.port });
    }
    const reader = new _SocketReader(sock, this.tls ? 'secureConnect' : 'connect');
    this._reader = reader;
    const fail = () => {
      reader.close();
      if (this._reader === reader) this._reader = null;
      return false;
    };

    if (!(await reader.waitConnected(SOCKET_TIMEOUT * 1000))) {
      if (reader.error) {
        this.logger.warn(`Connection error to ${this.host}:${this.port}`, reader.error);
      } else if (!stopEvent.isSet()) {
        this.logger.warn('Connection timeout');
      }
      return fail();
    }
    if (stopEvent.isSet()) return fail();
    this.logger.info(this.tls ? 'Connected to NTRIP Server (TLS).' : 'Connected to NTRIP Server.');

    // Send the request, then read a chunk of data, expecting to get the status line and headers.
    this.logger.info('Sending NTRIP Request.');
    sock.write(this.makeRequest());
    let response;
    try {
      response = await reader.recv(SOCKET_TIMEOUT * 1000);
    } catch (err) {
      if (!stopEvent.isSet()) this.logger.warn(`Connection error to ${this.host}:${this.port}`, err);
      return fail();
    }
    if (stopEvent.isSet()) return fail();
    if (response === null) {
      this.logger.warn('Connection timeout');
      return fail();
    }

    const parts = response.toString('binary').split('\r\n');
    if (parts.length < 2) {
      this.logger.error('Invalid response from server:', response);
      return fail();
    }

    const statusLine = parts.shift();
    this.logger.info(statusLine);
    const statusCode = statusLine.split(' ')[1];
    if (statusCode !== '200') {
      this.logger.error(`HTTP Error: ${statusLine}, retrying in ${this.reconnectSecs}s`);
      fail();
      await stopEvent.wait(this.reconnectSecs * 1000);
      return false;
    }
    this.logger.info('NTRIP Request Response received.');

    // The rest of the response, after the empty line that ends the headers, contains data.
    const idx = parts.indexOf('');
    const body = idx >= 0 ? Buffer.from(parts.slice(idx + 1).join('\r\n'), 'binary') : Buffer.alloc(0);

    if (body.length) {
      this.handleNtripData(body);
    }

    // Make the socket available for sending GGA.
    this.sock = sock;
    return true;
  }

  /**
   * Stream NTRIP data from a connected server and send it to a GPS receiver.
   * @param {Event} [stopEvent] Set to stop streaming.
   * @returns {Promise<void>} Resolves once the connection has ended.
   */
  async streamData(stopEvent = this._stopEvent) {
    // NTRIP Rev1 uses Shoutcast (ICY), which looks a lot like HTTP but isn't quite the same.
    // Create an ICY session here to talk to an NTRIP Rev1 caster.
    const ok = await this.createIcySession(stopEvent);

    if (!ok) {
      if (!stopEvent.isSet()) this.logger.error('Failed to create NTRIP Rev1 ICY session.');
      return;
    }
    const reader = this._reader;

    let timeouts = 0;
    let hasData = false;

    while (!stopEvent.isSet() && timeouts < SOCKET_MAX_RECV_TIMEOUTS) {
      let response;
      try {
        response = await reader.recv(SOCKET_TIMEOUT * 1000);
      } catch (err) {
        // The socket is closed after an error: reconnect.
        if (!stopEvent.isSet()) this.logger.warn(`Error receiving data: ${err.message}`);
        break;
      }
      if (stopEvent.isSet()) break;

      if (response === null) {
        this.logger.error('Socket timeout.');
        timeouts++;
      } else if (response.length) {
        timeouts = 0;
        this.handleNtripData(response);
        if (!hasData) {
          this.logger.info('Received NTRIP data.');
          hasData = true;
        }
      } else {
        this.logger.warn('Connection closed by server');
        break;
      }
    }

    this.logger.info('NTRIP stream closed. Closing socket.');
    reader.close();
    if (this._reader === reader) this._reader = null;
    this.sock = null;
    this.logger.info('NTRIP client finished.');
  }

  /**
   * NTRIP client worker.
   * @param {Event} [stopEvent] Set to stop the worker.
   * @returns {Promise<void>}
   * @private
   */
  async _streamDataWorker(stopEvent = this._stopEvent) {
    while (!stopEvent.isSet()) {
      await this.streamData(stopEvent);

      // streamData() lasts as long as the connection. If it returns while we are still expecting to be
      // streaming, it means the server disconnected from us. Wait for a delay before attempting to reconnect to
      // avoid spamming the server.
      if (!stopEvent.isSet()) {
        this.logger.info(`Attempting to reconnect to NTRIP server in ${this.reconnectSecs} seconds.`);
        await stopEvent.wait(this.reconnectSecs * 1000);
      }
    }
  }

  /**
   * Callback for handling NTRIP data.
   */
  handleNtripData(data) {
    // Forward to the device
    try {
      this.device.write(data);
    } catch (e) {
      this.logger.error('Error forwarding NTRIP data to device', e);
    }
  }

  /**
   * Process an NMEA-GGA sentence passed in as a string.
   */
  handleNmeaGga(sentence) {
    const fields = sentence.split(',');
    if (fields.length < 7) return;
    const quality = parseInt(fields[6] || '0', 10);
    // Send the position, unless there is no fix (0) or it is estimated (6).
    if (![0, 6].includes(quality)) {
      const ok = this.sendGGA(`${sentence}\r\n`);
      // Something went wrong, restart the stream. Not while the worker connects or waits to reconnect: it is
      // already restarting (Python's restart waits for it, stop_stream() joins the thread), and restarting it at
      // each GGA sentence would open a new connection each second.
      if (!ok && !this.streaming) {
        this.startStream();
      }
    }
  }
}

module.exports = {
  NtripClient,
  NtripClientParams,
  // The constants of the module in Python (they were not exported).
  SERVER_RECONNECT_DELAY,
  SOCKET_TIMEOUT,
  SOCKET_MAX_RECV_TIMEOUTS,
  DEFAULT_NTRIP_SERVER,
  DEFAULT_NTRIP_PORT,
  DEFAULT_NTRIP_TLS_PORT,
};
