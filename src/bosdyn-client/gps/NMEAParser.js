/**
 * @file Parses the NMEA sentences of a GPS device into GpsDataPoint messages.
 */

'use strict';

const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const nmea = require('nmea-simple');

const gpsPb = require('../../bosdyn/api/gps/gps_pb');
const { nowSec, secondsToTimestamp } = require('../../bosdyn-core/util');

/**
 * @typedef {import('../../bosdyn-core/util').RobotTimeConverter} RobotTimeConverter
 */

let hasWarnedNoZda = false;

// The line boundaries of str.splitlines() in Python: \r\n, \n, \r (alone too) and a few other separators.
// eslint-disable-next-line no-control-regex
const _LINE_BOUNDARY = /\r\n|[\n\r\v\f\x1c-\x1e\x85\u2028\u2029]/g;

/**
 * The lines of a text with their ends, like text.splitlines(True) in Python.
 * @param {string} text
 * @returns {string[]}
 */
function _splitLinesKeepEnds(text) {
  const lines = [];
  let start = 0;
  for (const match of text.matchAll(_LINE_BOUNDARY)) {
    const end = match.index + match[0].length;
    lines.push(text.slice(start, end));
    start = end;
  }
  if (start < text.length) lines.push(text.slice(start));
  return lines;
}

/**
 * Parse an NMEA sentence like pynmea2.parse(): a wrong checksum is always an error, a missing one only if check is
 * true.
 * @param {string} sentence The NMEA sentence.
 * @param {boolean} check Reject the sentence if it has no checksum.
 * @returns {Object} The nmea-simple packet.
 */
function _parseSentence(sentence, check) {
  if (sentence.includes('*')) return nmea.parseNmeaSentence(sentence);
  if (check) throw new Error('strict checking requested but checksum missing');
  return nmea.parseUnsafeNmeaSentence(sentence);
}

/**
 * The UTC time of an NMEA packet: 'time' for most sentences, 'datetime' for ZDA (pynmea2's 'timestamp').
 * @param {Object} packet The nmea-simple packet.
 * @returns {Date|undefined}
 */
function _packetTime(packet) {
  return packet.time ?? packet.datetime;
}

/**
 * Seconds since midnight (UTC) of a time.
 * @param {Date} time The time.
 * @returns {number}
 */
function _secondsOfDay(time) {
  return (
    time.getUTCHours() * 3_600 + time.getUTCMinutes() * 60 + time.getUTCSeconds() + time.getUTCMilliseconds() / 1_000
  );
}

/**
 * Whether a field of an NMEA sentence is set: nmea-simple reads an empty field as 0, pynmea2 as None.
 * @param {string[]} fields The fields of the sentence.
 * @param {number} index The index of the field.
 * @returns {boolean}
 */
function _hasField(fields, index) {
  return fields[index] !== undefined && fields[index] !== '';
}

class NMEAParser {
  /**
   * The amount of time (in seconds) to wait before logging another decode error.
   * @type {number}
   */
  static LOG_THROTTLE_TIME = 2.0;

  constructor(logger = console) {
    this.data = '';
    /**
     * The NMEA messages with a timestamp, not grouped yet: [packet, sentence, client timestamp in seconds].
     * @type {Array<[Object, string, number]>}
     */
    this.fullLines = [];
    this.logger = logger;
    // NMEA strings come in in "groups" we are just trying to figure out which group each message belongs to. We do
    // this by checking if their times are near to one another.
    //
    // If your GPS outputs data at 20 Hz, this constant must be less than 0.050 seconds.
    this.groupingTimeout = 0.025;
    this.lastFailedReadLogTime = null;
    this.lastGGA = null;
  }

  /**
   * Convert a NMEA message group with the same UTC timestamp to a GpsDataPoint.
   * @param {Array<[Object, string, number]>} nmeaMessages The messages: [packet, sentence, client timestamp].
   * @param {?RobotTimeConverter} timeConverter Converter to robot time, null if the clocks are synchronized.
   * @returns {gpsPb.GpsDataPoint}
   */
  nmeaMessageGroupToGpsDataPoint(nmeaMessages, timeConverter) {
    const dataPoint = new gpsPb.GpsDataPoint();
    let hasTimestamp = false;

    // The NMEA message group should at least have a ZDA message.
    // Parse each message depending on the NMEA sentence type.
    for (const [data, rawNmeaMsg, clientTimestamp] of nmeaMessages) {
      const fields = rawNmeaMsg.split('*')[0].split(',');

      if (data.sentenceId === 'GGA') {
        this.lastGGA = rawNmeaMsg;
        // Like pynmea2, whose latitude and longitude are 0 when not set, but not the altitude.
        if (_hasField(fields, 9)) {
          dataPoint.setLlh(
            new gpsPb.LLH().setLatitude(data.latitude).setLongitude(data.longitude).setHeight(data.altitudeMeters),
          );
        }

        if (_hasField(fields, 7) && data.satellitesInView > 0) {
          for (let i = 0; i < data.satellitesInView; i++) {
            dataPoint.addSatellites();
          }
        }

        // GPS Quality indicator:
        // 0: Fix not valid
        // 1: GPS fix
        // 2: Differential GPS fix, OmniSTAR VBS
        // 4: Real-Time Kinematic, fixed integers
        // 5: Real-Time Kinematic, float integers, OmniSTAR XP/HP or Location RTK
        if (_hasField(fields, 6)) {
          dataPoint.setMode(new gpsPb.GpsDataPoint.FixMode().setValue(parseInt(fields[6], 10)));
        }

        if (!hasTimestamp) {
          // If there is no ZDA message to provide a date, assume today's date (nmea-simple uses today's UTC date).
          dataPoint.setTimestampGps(Timestamp.fromDate(data.time));
        }
      } else if (data.sentenceId === 'GST') {
        if (_hasField(fields, 6)) {
          // Horizontal Root Mean Squared. Note we are not using "twice distance rms" or "2drms".
          const hrms = Math.sqrt((data.latitudeError ** 2 + data.longitudeError ** 2) / 2);
          dataPoint.setAccuracy(new gpsPb.GpsDataPoint.Accuracy().setHorizontal(hrms).setVertical(data.altitudeError));
        }
      } else if (data.sentenceId === 'ZDA') {
        const gpsTimestamp = data.datetime;
        if (!(gpsTimestamp instanceof Date) || Number.isNaN(gpsTimestamp.getTime())) {
          this.logger.error('Failed to extract datetime from ZDA message.');
          continue;
        }
        // nmea-simple gives the time in UTC, like the protobuf timestamp: no time zone to remove.
        dataPoint.setTimestampGps(Timestamp.fromDate(gpsTimestamp));
        hasTimestamp = true;
      }

      // Populate client and robot timestamps. If we are not using TimeSync, the robot timestamp will be the same as
      // the client timestamp.
      dataPoint.setTimestampClient(secondsToTimestamp(clientTimestamp));
      if (timeConverter) {
        dataPoint.setTimestampRobot(timeConverter.robotTimestampFromLocalSecs(clientTimestamp));
      } else {
        dataPoint.setTimestampRobot(secondsToTimestamp(clientTimestamp));
      }
    }

    if (!hasTimestamp && !hasWarnedNoZda) {
      this.logger.warn('GPS data does not include ZDA. Timestamp may be inaccurate.');
      hasWarnedNoZda = true;
    }

    return dataPoint;
  }

  /**
   * Parse NMEA data, and return the GPS data points of the message groups it completes.
   * @param {string} newData New NMEA data: lines, possibly with an incomplete last line kept for the next call.
   * @param {?RobotTimeConverter} timeConverter Converter to robot time, null if the clocks are synchronized.
   * @param {boolean} [check=true] Reject the sentences without checksum. A wrong checksum is always rejected.
   * @returns {gpsPb.GpsDataPoint[]}
   */
  parse(newData, timeConverter, check = true) {
    // Client timestamp when received.
    const timestamp = nowSec();
    this.data += newData;

    if (!this.data.length) {
      return [];
    }

    // The lines of splitlines() in Python: a lone '\r' ends a line too (the two sentences were parsed as one). The
    // last line is complete only if it ends with a '\n': else it is kept until the next data.
    const lines = _splitLinesKeepEnds(this.data);
    this.data = lines.at(-1);
    if (this.data.endsWith('\n')) {
      this.data = '';
    } else {
      lines.pop();
    }

    // Parse each line.
    for (const line of lines) {
      const stripped = line.trim();
      let nmeaMsg;

      try {
        nmeaMsg = _parseSentence(stripped, check);
      } catch (err) {
        // Parsing error, log and skip.
        // Throttle the logs.
        const now = nowSec();
        if (this.lastFailedReadLogTime === null || now - this.lastFailedReadLogTime > NMEAParser.LOG_THROTTLE_TIME) {
          this.logger.error(`Failed to parse ${stripped}. Is it NMEA? ${err.message}`);
          this.lastFailedReadLogTime = now;
        }
        continue;
      }

      // Only use NMEA messages that have a timestamp. For example, GSA messages are not supported.
      // nmea-simple gives an invalid date for the time '.' (e.g. "$GPZDA,.,,,,,00*66") and the epoch for an empty
      // time: silently ignore them, like pynmea2's '.' and None.
      const time = _packetTime(nmeaMsg);
      if (!(time instanceof Date) || Number.isNaN(time.getTime()) || time.getTime() === 0) {
        continue;
      }
      this.fullLines.push([nmeaMsg, stripped, timestamp]);
    }

    let found = true;
    const foundSubsets = [];
    // Group a subset of NMEA messages based on timestamp.
    while (found) {
      if (this.fullLines.length < 2) {
        break;
      }

      const firstTime = _secondsOfDay(_packetTime(this.fullLines[0][0]));
      found = false;

      for (let idx = 1; idx < this.fullLines.length; idx++) {
        // Compare the times of day. Mod the difference by 3600 (with a positive result, like Python) so that
        // checking 23:59:59.99 and 00:00:00.00 evaluate as close to each other.
        const difference = _secondsOfDay(_packetTime(this.fullLines[idx][0])) - firstTime;
        const timeElapsed = ((difference % 3_600) + 3_600) % 3_600;

        if (timeElapsed > this.groupingTimeout) {
          foundSubsets.push(this.fullLines.splice(0, idx));
          found = true;
          break;
        }
      }
    }

    return foundSubsets.map(subset => this.nmeaMessageGroupToGpsDataPoint(subset, timeConverter));
  }

  /**
   * @returns {?string} The last GGA sentence of the data points returned by parse().
   */
  getLatestGga() {
    return this.lastGGA;
  }

  getLastGGA() {
    return this.getLatestGga();
  }
}

module.exports = {
  NMEAParser,
};
