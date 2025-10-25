'use strict';

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { NMEAParser } = require('./NMEAParser');
const { AggregatorClient } = require('./aggregator_client');

const gpsPb = require('../../bosdyn/api/gps/gps_pb');
const { ProxyConnectionError } = require('../exceptions');
const { UnregisteredServiceNameError } = require('../robot');
const { NtripClient } = require('./ntrip_client');

class NMEAStreamReader {
  static LOG_THROTTLE_TIME = 2_000;

  constructor(logger, stream, bodyTformGps) {
    this.logger = logger;
    this.stream = stream;
    this.parser = new NMEAParser(logger);
    this.bodyTformGps = bodyTformGps.toProto();
    this.lastFailedReadLogTime = null;
  }

  /**
   * This function returns an array of new GpsDataPoints.
   * @param {RobotTimeConverter} timeConverter An instance of RobotTimeConverter
   * @returns {gpsPb.GpsDataPoint[]}
   */
  readData(timeConverter) {
    let rawData;
    try {
      rawData = this.stream.readline();
    } catch (err) {
      const now = Date.now();
      if (this.lastFailedReadLogTime || now - this.lastFailedReadLogTime > this.LOG_THROTTLE_TIME) {
        this.logger.exception('Failed to decode NMEA message. Is it not Unicode?');
        this.lastFailedReadLogTime = now;
        return null;
      }
    }

    if (!rawData.includes('$')) {
      return null;
    }

    rawData = rawData.substring(rawData.index('$'));
    this.logger.info(`Read: ${rawData}`);
    const newPoints = this.parser.parse(rawData, timeConverter);

    for (const dataPoint of newPoints) {
      dataPoint.setBodyTformGps(this.bodyTformGps);
    }

    return newPoints;
  }
}

class GpsListener {
  constructor(robot, timeConverter, stream, name, bodyTformGps, logger) {
    this.logger = logger;
    this.robot = robot;
    this.timeConverter = timeConverter;
    this.stream = stream
    this.reader = new NMEAStreamReader(logger, stream, bodyTformGps);
    this.gpsDevice = new gpsPb.GpsDevice();
    this.gpsDevice.setName(name);
    this.aggregatorClient = null;
    this.ntripClient = null;
  }
  
  runNtripClient(ntripParams) {
    this.ntripClient = new NtripClient(this.stream, ntripParams, this.logger);
    this.ntripClient.startStream();
  }
  
  stopNtripClient() {
    if (this.ntripClient === null) {
      return;
    }
    
    this.ntripClient.stopStream();
    this.ntripClient = null;
  }

  async run() {
    const MAX_ATTEMPTS = 45;
    const SECS_PER_ATTEMPT = 2_000;
    let numAttempts = 0;

    while (this.aggregatorClient && numAttempts < MAX_ATTEMPTS) {
      numAttempts += 1;
      try {
        /** @type {AggregatorClient} */
        // eslint-disable-next-line no-await-in-loop
        this.aggregatorClient = await this.robot.ensureClient(AggregatorClient.defaultServiceName);
      } catch (err) {
        if (err instanceof UnregisteredServiceNameError || err instanceof ProxyConnectionError) {
          this.logger.info('Waiting for the Aggregator Service');
          // eslint-disable-next-line no-await-in-loop
          await sleep(SECS_PER_ATTEMPT);
        } else {
          this.logger.exception('Unexpected exception while waiting for the Aggregator Service');
          // eslint-disable-next-line no-await-in-loop
          await sleep(SECS_PER_ATTEMPT);
        }
      }
    }

    if (numAttempts === MAX_ATTEMPTS) {
      this.logger.error('Failed to connect to the Aggregator Service!');
      return;
    }

    let everyXSeconds = 5;
    let timePassedSinceLastRpc = 0;
    let timestampOfLastRpc = 0;

    // Ensure that KeyboardInterrupt is raised on a SIGINT.
    process.on('SIGINT', () => process.exit(0));

    let accumulatedData = [];
    let agg = null;

    this.logger.info('Listening for GPS data.');
    try {
      for (;;) {
        let newData;
        try {
          newData = this.reader.readData(this.timeConverter);
        } catch (err) {
          this.logger.warn(
            // eslint-disable-next-line max-len
            `Socket timed out while reading GPS data. This may be normal, there could be a problem with the GPS receiver, or there may be a loose hardware connection.`,
          );
          return;
        }

        if (!newData) {
          continue;
        }

        accumulatedData.push(...newData);

        if (accumulatedData.length > 0) {
          if (!agg) {
            // eslint-disable-next-line no-await-in-loop
            agg = await this.aggregatorClient.newGpsData(accumulatedData, this.gpsDevice);
            accumulatedData = [];
            timestampOfLastRpc = Date.now();
            timePassedSinceLastRpc = 0;
          }
        } else if (timePassedSinceLastRpc > everyXSeconds) {
          if (!agg) {
            // eslint-disable-next-line no-await-in-loop
            agg = await this.aggregatorClient.newGpsData([], this.gpsDevice);
            timestampOfLastRpc = Date.now();
            timePassedSinceLastRpc = 0;
          }
        } else {
          timePassedSinceLastRpc = Date.now() - timestampOfLastRpc;
        }
        
        if (this.ntripClient !== null) {
          if (!this.ntripClient.isStreaming()) {
            this.logger.info('Restarting NTRIP Client !');
            this.ntripClient.startStream();
          }
          
          const latestGga = this.reader.getLatestGga();
          if (latestGga) {
            this.ntripClient.handleNmeaGga(latestGga);
          }
        }        
      }
    } catch (err) {
      console.log();
      process.exit(0);
    } finally {
      this.stopNtripClient();
    }
  }
}

module.exports = {
  NMEAStreamReader,
  GpsListener,
};
