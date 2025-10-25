'use strict';

const process = require('node:process');

const duration_pb = require('google-protobuf/google/protobuf/duration_pb');
const time_pb = require('google-protobuf/google/protobuf/timestamp_pb');
const moment = require('moment');

const THOUSAND = 10 ** 3;
const MILLION = 10 ** 6;
const BILLION = 10 ** 9;

const NSEC_PER_SEC = BILLION;

let _clockSourceFn = Date.now;

function setClockSource(clockFn) {
  _clockSourceFn = clockFn;
}

const TIME_FORMAT_DESC = `
Time values have one of these formats:
- yyyymmdd_hhmmss  (e.g., 20200120_120000)
- yyyymmdd         (e.g., 20200120)
-  {n}d    {n} days ago     (e.g., 2d)
-  {n}h    {n} hours ago
-  {n}m    {n} minutes ago
-  {n}s    {n} seconds ago
- nnnnnnnnnn[.nn]       (e.g., 1581869515.256)  Seconds since epoch
- nnnnnnnnnnnnnnnnnnnn  Nanoseconds since epoch`;

function sum(arr) {
  const numOr0 = n => (isNaN(n) ? 0 : n);
  return arr.reduce((a, b) => numOr0(a) + numOr0(b), 0);
}

function accumulate(values, initial = null) {
  let arr = [];
  let amount = initial ? initial : 0;
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      amount += values[i];
      arr.push(amount);
    }
  }
  return arr;
}

function durationStr(duration) {
  const sign = duration.getSeconds() < 0 || duration.getNanos() < 0 ? '-' : '';
  const seconds = Math.abs(duration.getSeconds());
  const nanos = Math.abs(duration.getNanos());
  if (seconds === 0) {
    if (nanos < THOUSAND) {
      return `${sign}${Math.floor(nanos)} nsec`;
    }
    if (nanos < MILLION) {
      return `${sign}${Math.floor(nanos / THOUSAND)} usec`;
    }
    return `${sign}${Math.floor(nanos / MILLION)} msec`;
  }
  return `${sign}${Math.floor(seconds)}.${Math.floor(nanos / MILLION)} sec`;
}

function durationToSeconds(duration) {
  return duration.getSeconds() + duration.getNanos() / NSEC_PER_SEC;
}

function secondsToDuration(seconds) {
  const durationSeconds = parseInt(seconds);
  const durationNanos = parseInt((seconds - durationSeconds) * NSEC_PER_SEC);
  return new duration_pb.Duration().setSeconds(durationSeconds).setNanos(durationNanos);
}

function secondsToTimestamp(seconds) {
  const timestampSeconds = parseInt(seconds);
  const timestampNanos = parseInt((seconds - timestampSeconds) * NSEC_PER_SEC);
  return new time_pb.Timestamp().setSeconds(timestampSeconds).setNanos(timestampNanos);
}

function timestampStr(timestamp) {
  return `${timestamp.getSeconds() < 0 || timestamp.getNanos() < 0 ? '-' : ''}${Math.abs(
    timestamp.getSeconds(),
  )}.${Math.abs(timestamp.getNanos())}`;
}

function secToNsec(secs) {
  return secs * NSEC_PER_SEC;
}

function nsecToSec(secs) {
  return parseFloat(secs) / NSEC_PER_SEC;
}

function nowNsec() {
  return secToNsec(Date.now() / 1000);
}

function nowSec() {
  return _clockSourceFn();
}

function setTimestampFromNow(timestamp_proto) {
  setTimestampFromNsec(timestamp_proto, nowNsec());
}

function setTimestampFromNsec(timestampProto, timeNsec) {
  timestampProto.setSeconds(parseInt(timeNsec / NSEC_PER_SEC));
  timestampProto.setNanos(parseInt(timeNsec % NSEC_PER_SEC));
}

function nowTimestamp() {
  const now = nowNsec();
  const timestampProto = new time_pb.Timestamp();
  setTimestampFromNsec(timestampProto, now);
  return timestampProto;
}

function nsecToTimestamp(timeNsec) {
  const timestampProto = new time_pb.Timestamp();
  setTimestampFromNsec(timestampProto, timeNsec);
  return timestampProto;
}

function setTimestampFromDatetime(timestampProto, dateTime) {
  setTimestampFromNsec(timestampProto, parseInt(dateTime.getTime()));
}

function getNanoSecTime() {
  const hrTime = process.hrtime();
  return hrTime[0] * 1000000000 + hrTime[1];
}

function timestampToSec(t) {
  return t.getSeconds() + t.getNanos() / NSEC_PER_SEC;
}

function timestampToNsec(t) {
  return t.getSeconds() * BILLION + t.getNanos();
}

function timestampToDatetime(t = { getSeconds: () => Date.now() / 1000 }, useNanos = true) {
  const ms = useNanos && typeof t.getNanos === 'function'
    ? (t.getSeconds() * 1000) + (t.getNanos() / 1e6)
    : (t.getSeconds() * 1000);
  return new Date(ms).toLocaleString();
}

function secsToHms(seconds) {
  const isecs = Number(seconds);
  seconds = Math.floor(isecs % 60);
  const minutes = Math.floor((isecs / 60) % 60);
  const hours = Math.floor(isecs / 3600);
  return `${hours}:${minutes === 0 ? '00' : minutes}:${seconds === 0 ? '00' : seconds}`;
}

function distanceStr(meters) {
  if (meters < 1000) return `${Number.parseFloat(meters).toFixed(2)} m`;
  return `${Number.parseFloat(meters).toFixed(2) / 1000} km`;
}

class DatetimeParseError extends Error {}

function nowUnixSeconds() {
  return Date.now() / 1000;
}

function parseYYYYMMDD_HHmmss(s) {
  // s = "YYYYMMDD_HHmmss"
  const y = +s.slice(0, 4);
  const M = +s.slice(4, 6) - 1; // 0-based
  const d = +s.slice(6, 8);
  const hh = +s.slice(9, 11);
  const mm = +s.slice(11, 13);
  const ss = +s.slice(13, 15);
  return new Date(y, M, d, hh, mm, ss).getTime() / 1000;
}

function parseYYYYMMDD(s) {
  // s = "YYYYMMDD" -> minuit local
  const y = +s.slice(0, 4);
  const M = +s.slice(4, 6) - 1;
  const d = +s.slice(6, 8);
  return new Date(y, M, d, 0, 0, 0).getTime() / 1000;
}

function parseRelative(val, unit) {
  const n = parseInt(val.slice(0, -1), 10);
  const seconds = unit === 'd' ? n * 86400
                : unit === 'h' ? n * 3600
                : unit === 'm' ? n * 60
                : n;
  return nowUnixSeconds() - seconds;
}

function parseNanosecondsEpoch(val) {
  const ns = BigInt(val);
  const s = Number(ns / BigInt(1e9));
  const rem = Number(ns % BigInt(1e9)) / 1e9;
  return s + rem;
}

const TIME_FORMATS = [
  [/^\d{8}_\d{6}$/, v => parseYYYYMMDD_HHmmss(v)],
  [/^\d{8}$/, v => parseYYYYMMDD(v)],
  [/^\d+[dD]$/, v => parseRelative(v.toLowerCase(), 'd')],
  [/^\d+[hH]$/, v => parseRelative(v.toLowerCase(), 'h')],
  [/^\d+[mM]$/, v => parseRelative(v.toLowerCase(), 'm')],
  [/^\d+[sS]$/, v => parseRelative(v.toLowerCase(), 's')],
  [/^\d{10}$/, v => parseInt(v, 10)],
  [/^\d{10}\.\d+$/, v => parseFloat(v)],
  [/^\d{13}$/, v => parseInt(v, 10) / 1000],
  [/^\d{19,20}$/, v => parseNanosecondsEpoch(v)],
];

/**
 * Parse datetime from string
 * @param {string} val string with format like as described by TIME_FORMAT_DESC.
 * @returns {number}
 */
function parseDatetime(val) {
  for (const [fmt, fn] of TIME_FORMATS) {
    if (fmt.test(val)) {
      return fn(val);
    }
  }
  throw new DatetimeParseError(`Could not parse time from ${val}`);
}

/**
 * Parse a timespan spec of the form {from-time}[-{to-time}]
 * @param {string} timespanSpec string with format {spec} or {spec}-{spec} where {spec} is a string
 * with a format as described by TIME_FORMAT_DESC.
 * @returns {Array<string>}
 */
function parseTimespan(timespanSpec) {
  const dashIdx = timespanSpec.indexOf('-');
  if (dashIdx < 0) {
    return [parseDatetime(timespanSpec), null];
  }
  return [parseDatetime(timespanSpec.substring(0, dashIdx)), parseDatetime(timespanSpec.substring(dashIdx + 1))];
}

/**
 * Converts times in the local system clock to times in the robot clock.
 * Conversions are made given an estimate of clock skew from the local clock to the robot clock.
 */
class RobotTimeConverter {
  constructor(robotClockSkewNsec) {
    this._clockSkewNsec = robotClockSkewNsec;
  }

  /**
   * Returns a robot-clock Timestamp proto for a local time in nanoseconds.
   * @param {number} localTimeNsecs Local system time, in integer of nanoseconds from the unix epoch.
   * @returns {time_pb.Timestamp}
   */
  robotTimestampFromLocalNsecs(localTimeNsecs) {
    return nsecToTimestamp(localTimeNsecs + this._clockSkewNsec);
  }

  /**
   * Returns a robot-clock Timestamp proto for a local time in seconds.
   * @param {number} localTimeSecs Local system time, in seconds from the unix epoch.
   * @returns {time_pb.Timestamp}
   */
  robotTimestampFromLocalSecs(localTimeSecs) {
    return this.robotTimestampFromLocalNsecs(secToNsec(localTimeSecs));
  }

  /**
   * Takes a Timestamp proto is local time and returns one in robot time.
   * @param {time_pb.Timestamp} localTimestampProto Timestamp in system clock
   * @returns {time_pb.Timestamp}
   */
  robotTimestampFromLocal(localTimestampProto) {
    const localNsecs = timestampToNsec(localTimestampProto);
    return this.robotTimestampFromLocalNsecs(localNsecs);
  }

  /**
   * Edits timestamp_proto in place to convert it from the local clock to the robot_clock.
   * @param {time_pb.Timestamp} timestampProto Local system time
   * @returns {void}
   */
  convertTimestampFromLocalToRobot(timestampProto) {
    const time = this.robotTimestampFromLocal(timestampProto);
    timestampProto.setSeconds(time.getSeconds());
    timestampProto.setNanos(time.getNanos());
  }

  /**
   * Returns the robot time in seconds from a local time in seconds.
   * @param {number} localTimeSecs Local system time, in seconds from the unix epoch.
   * @returns {number}
   */
  robotSecondsFromLocalSeconds(localTimeSecs) {
    return localTimeSecs + nsecToSec(this._clockSkewNsec);
  }

  /**
   * Returns the local time in seconds from a robot-clock Timestamp proto.
   * @param {number} robotTimestamp Local system time, in seconds from the unix epoch.
   * @returns {number}
   */
  localSecondsFromRobotTimestamp(robotTimestamp) {
    return nsecToSec(timestampToNsec(robotTimestamp) - this._clockSkewNsec);
  }
}
class slice {
  constructor(start, stop, step) {
    if (stop === undefined && step === undefined) {
      [start, stop] = [stop, start];
    }
    this.start = start === null ? start : parseInt(start, 10);
    this.stop = stop === null ? stop : parseInt(stop, 10);
    this.step = step === null ? step : parseInt(step, 10);
  }

  indices(array) {
    const start = this.start < 0 ? this.start + array.length : this.start;
    const stop = this.stop < 0 ? this.stop + array.length : this.stop;

    const step = this.step === null ? 1 : this.step;
    if (step === 0) {
      throw new Error('slice step cannot be zero');
    }

    let currentIndex;
    let indexIsValid;
    if (step > 0) {
      currentIndex = start === null ? 0 : Math.max(start, 0);
      const maximumPossibleIndex = stop === null ? array.length - 1 : stop - 1;
      indexIsValid = index => index <= maximumPossibleIndex;
    } else {
      currentIndex = start === null ? array.length - 1 : Math.min(start, array.length - 1);
      const minimumPossibleIndex = stop === null ? 0 : stop + 1;
      indexIsValid = index => index >= minimumPossibleIndex;
    }

    const indices = [];
    while (indexIsValid(currentIndex)) {
      if (currentIndex >= 0 && currentIndex < array.length) {
        indices.push(currentIndex);
      }
      currentIndex += step;
    }

    return indices;
  }

  get(array) {
    return this.indices(array).map(index => array[index]);
  }

  set(array, values) {
    const indices = this.indices(array);
    if (indices.length !== values.length) {
      throw new Error(
        `attempt to assign sequence of size ${values.length} to extended slice of size ${indices.length}`,
      );
    }
    this.indices(array).forEach((arrayIndex, valuesIndex) => {
      array[arrayIndex] = values[valuesIndex];
    });
    return true;
  }
}

module.exports = {
  TIME_FORMAT_DESC,
  RobotTimeConverter,
  distanceStr,
  secsToHms,
  timestampToDatetime,
  timestampToNsec,
  timestampToSec,
  getNanoSecTime,
  nsecToTimestamp,
  nowTimestamp,
  setTimestampFromDatetime,
  setTimestampFromNsec,
  setTimestampFromNow,
  setClockSource,
  nowNsec,
  nowSec,
  secToNsec,
  nsecToSec,
  timestampStr,
  durationToSeconds,
  durationStr,
  sum,
  accumulate,
  slice,
  secondsToDuration,
  secondsToTimestamp,
  parseTimespan,
  parseDatetime,
  DatetimeParseError,
};
