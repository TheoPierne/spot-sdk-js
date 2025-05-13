'use strict';

const { Console } = require('node:console');

const nmea = require('nmea-simple');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const gpsPb = require('../../bosdyn/api/gps/gps_pb');

let hasWarnedNoZda = false;

class NMEAParser {

  /**
   * The amount of time (in seconds) to wait before logging another decode error.
   * @type {number}
   */
  static LOG_THROTTLE_TIME = 2_000;

  constructor(logger = console) {
    this.data = '';
    this.fullLines = [];
    this.logger = logger;
    this.groupingTimeout = 0.025;
    this.lastFailedReadLogTime = null;
  }

  /**
   * Convert a NMEA message group with the same UTC timestamp to a GpsDataPoint.
   * @param {Array<[string, string, number]>} nmeaMessages 
   * @param {RobotTimeConverter} time_converter 
   * @returns {gpsPb.GpsDataPoint}
   */
  nmeaMessageGroupToGpsDataPoint(nmeaMessages, timeConverter) {
    const dataPoint = new gpsPb.GpsDataPoint();

    let hasTimestamp = false;

    for (const [data,,clientTimestamp] of nmeaMessages) {
      const { sentence_type } = data;

      if (sentence_type === 'GGA') {
        const { latitude, longitude, altitude, num_sats, gps_qual } = data;
        if (latitude && longitude && altitude) {
          dataPoint.setLlh(new gpsPb.LLH().setLatitude(latitude).setLongitude(longitude).setHeight(altitude));
        }

        if (num_sats && parseInt(num_sats) > 0) {
          const numSats = parseInt(num_sats);
          for (let i = 0; i < numSats; i++) {
            dataPoint.addSatellites();
          }
        }

        // GPS Quality indicator:
        // 0: Fix not valid
        // 1: GPS fix
        // 2: Differential GPS fix, OmniSTAR VBS
        // 4: Real-Time Kinematic, fixed integers
        // 5: Real-Time Kinematic, float integers, OmniSTAR XP/HP or Location RTK
        if (gps_qual) {
          dataPoint.setMode(new gpsPb.GpsDataPoint.FixMode().setValue(gps_qual));
        }

        if (!hasTimestamp) {
          const gps_timestamp = 
        }
      } else if (sentence_type === 'GST') {
        const { std_dev_latitude, std_dev_longitude, std_dev_altitude } = data;
        if (std_dev_latitude) {
          // Horizontal Root Mean Squared. Note we are not using "twice distance rms" or "2drms".
          const hrms = Math.sqrt(((Math.pow(std_dev_latitude, 2) + Math.pow(std_dev_longitude, 2)) / 2));
          const accuracy = new gpsPb.GpsDataPoint.Accuracy().setHorizontal(hrms).setVertical(std_dev_altitude);
          dataPoint.setAccuracy(accuracy);
        }
      } else if (sentence_type === 'ZDA') {
        const gps_timestamp = new Date(data.datetime);
        // Protobuf timestamp does not use timezone aware timestamps.
        const gps_timestamp_no_tz = new Date(gps_timestamp.getTime() - (gps_timestamp.getTimezoneOffset() * 60000));
        const timestamp = Timestamp.fromDate(gps_timestamp_no_tz);
        dataPoint.setTimestampGps(timestamp);
        hasTimestamp = true;
      }

      // Populate client and robot timestamps.
      dataPoint.setTimestampClient(secondsToTimestamp(clientTimestamp));
      if (timeConverter) {
        dataPoint.setTimestampRobot(timeConverter.robot_timestamp_from_local_secs(clientTimestamp));
      } else {
        dataPoint.setTimestampRobot(nowTimestamp());
      }
    }

    if (!hasTimestamp && !hasWarnedNoZda) {
      if (this.logger instanceof Console) {
        this.logger.warn("GPS data does not include ZDA. Timestamp may be inaccurate.");
      } else {
        this.logger.warning("GPS data does not include ZDA. Timestamp may be inaccurate.");
      }
      hasWarnedNoZda = true;
    }

    return dataPoint;
  }

  /**
   * 
   * @param {string} newData 
   * @param {RobotTimeConverter} timeConverter 
   */
  parse(newData, timeConverter) {
    this.data += newData;
    const timestamp = Date.now() / 1000;

    if (!this.data.length) {
      return [];
    }

    const lines = this.data.split(/\r?\n/);
    this.data = lines.pop();
    const lenLines = lines.length;

    for (let idx = 0; idx < lenLines; idx++) {
      const line = lines[idx];

      if (idx === lenLines - 1 && !line.endsWith('\n')) {
        break;
      }

      const stripped = line.trim();
      let nmeaMsg;

      try {
        nmeaMsg = nmea.parseNmeaSentence(stripped);
      } catch (err) {
        const now = Date.now() / 1000;
        if (
          this.lastFailedReadLogTime === null ||
          (now - this.lastFailedReadLogTime) > NMEAParser.LOG_THROTTLE_TIME
        ) {
          this.logger.exception(`Failed to parse ${stripped}. Is it NMEA?`);
          this.lastFailedReadLogTime = now;
        }
        continue;
      }

      // if the message does not contain a time attribute, abandon the rest of the logic
      // and go to the beginning of the loop
      if (!('time' in nmeaMsg)) {
        continue;
      }

      // Only use NMEA messages that have a timestamp.
      // For example, GSA and GST messages are not supported.
      if (nmeaMsg.time instanceof Date) {
        this.fullLines.push([nmeaMsg, stripped, timestamp]);
      } else if (typeof nmeaMsg.time.toString() === 'Invalid Date') {
          // nmea will set the timestamp to the string '.' when GPS
          // spits out: "$GPZDA,.,,,,,00*66".Silently ignore.
          continue;
      } else if (nmeaMsg.time !== null):
      this.logger.error(`Invalid timestamp for "${stripped}"`);
      continue;
    }

    let found = true;
    let foundSubsets = [];

    while (found) {
      if (this.fullLines.length < 2) {
        break;
      }

      const firstTime = this.fullLines[0][0].time;
      found = false;

      for (let idx = 1; idx < this.fullLines.length; idx++) {
        const datetime1 = new Date(firstTime * 1000);
        const datetime2 = new Date(this.fullLines[idx][0].timestamp * 1000);

        // Mod the total seconds by 3600 so that checking 23:59:59.99 and 00:00:00.00
        // evaluate as close to each other.
        const timeElapsed = (datetime2 - datetime1) / 1000 % 3600;

        if (timeElapsed < 0 || timeElapsed > this.groupingTimeout) {
          const subset = this.fullLines.splice(0, idx);
          this.fullLines = this.fullLines.slice(idx);
          foundSubsets.push(subset);
          found = true;
          break;
        }
      }
    }

    return foundSubsets.map(x => this.nmeaMessageGroupToGpsDataPoint(x, timeConverter));
  }
}

module.exports = {
  NMEAParser,
};
