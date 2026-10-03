/**
 * @file Common utilities: conversions of times, protobuf Timestamps and Durations, clocks, and formatting helpers.
 */

'use strict';

const { performance } = require('node:perf_hooks');
const process = require('node:process');

const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const THOUSAND = 10 ** 3;
const MILLION = 10 ** 6;
const BILLION = 10 ** 9;

const MSEC_PER_SEC = THOUSAND;
const NSEC_PER_SEC = BILLION;
const NSEC_PER_SEC_BIGINT = 1_000_000_000n;

// The system time minus the monotonic clock of performance.now(), in milliseconds.
let _monotonicToSystemMs = performance.timeOrigin;

/**
 * The system time in seconds since the epoch, like time.time() in Python. Date.now() only has milliseconds (the
 * nanoseconds of the timestamps were multiples of 1 ms): the monotonic clock of performance.now() gives the fractions.
 * The time follows the system clock: it is realigned on Date.now() when they differ by more than a millisecond.
 * @returns {number}
 */
function systemTimeSec() {
  const perfMs = performance.now();
  const wallMs = Date.now();
  let timeMs = _monotonicToSystemMs + perfMs;
  // Date.now() is the time rounded down to the millisecond.
  if (timeMs < wallMs - 1 || timeMs > wallMs + 2) {
    _monotonicToSystemMs = wallMs + 0.5 - perfMs;
    timeMs = _monotonicToSystemMs + perfMs;
  }
  return timeMs / THOUSAND;
}

let _clockSourceFn = systemTimeSec;

/**
 * Set the clock source to use the input clock source, like set_clock_source() in Python.
 * @param {function(): number} clockFn Returns the time in seconds since the epoch, like time.time() in Python (it
 * returned milliseconds, like Date.now()); systemTimeSec by default.
 */
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
  const arr = [];
  let amount = initial ? initial : 0;
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      amount += values[i];
      arr.push(amount);
    }
  }
  return arr;
}

/**
 * Return a formatted string for a duration proto.
 */
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
  // The milliseconds on 3 digits, like '{:03d}' in Python (1.05 s was '1.50 sec').
  return `${sign}${Math.floor(seconds)}.${String(Math.floor(nanos / MILLION)).padStart(3, '0')} sec`;
}

/**
 * Returns a number of seconds, as a float, based on Duration protobuf fields.
 */
function durationToSeconds(duration) {
  return duration.getSeconds() + duration.getNanos() / NSEC_PER_SEC;
}

/**
 * Return a protobuf Duration from number of seconds, as a float.
 */
function secondsToDuration(seconds) {
  // Math.trunc like Python's int(): parseInt goes through a string, and parseInt(1e-7) is 1.
  // Seconds and nanos keep the same sign, as a Duration requires.
  const durationSeconds = Math.trunc(seconds);
  const durationNanos = Math.trunc((seconds - durationSeconds) * NSEC_PER_SEC);
  return new Duration().setSeconds(durationSeconds).setNanos(durationNanos);
}

/**
 * Return a protobuf Timestamps from number of seconds, as a float.
 */
function secondsToTimestamp(seconds) {
  let timestampSeconds = Math.trunc(seconds);
  let timestampNanos = Math.trunc((seconds - timestampSeconds) * NSEC_PER_SEC);
  // A Timestamp needs nanos in [0, 1e9), also before the epoch.
  if (timestampNanos < 0) {
    timestampSeconds -= 1;
    timestampNanos += NSEC_PER_SEC;
  }
  return new Timestamp().setSeconds(timestampSeconds).setNanos(timestampNanos);
}

/**
 * A formatted string for a timestamp or a duration proto, '{seconds}.{nanoseconds}' like Python.
 * @param {Timestamp|Duration} timestamp
 * @returns {string}
 */
function timestampStr(timestamp) {
  const sign = timestamp.getSeconds() < 0 || timestamp.getNanos() < 0 ? '-' : '';
  // The nanoseconds on 9 digits, like '{:09d}' in Python (1 s + 5 ns was '1.5').
  return `${sign}${Math.abs(timestamp.getSeconds())}.${String(Math.abs(timestamp.getNanos())).padStart(9, '0')}`;
}

/**
 * Converts a time in seconds to a timestamp in nanoseconds.
 */
function secToNsec(secs) {
  return secs * NSEC_PER_SEC;
}

/**
 * Convert time in nanoseconds to a timestamp in seconds.
 */
function nsecToSec(secs) {
  return Number(secs) / NSEC_PER_SEC;
}

function secToMsec(secs) {
  return secs * MSEC_PER_SEC;
}

function msecToSec(msecs) {
  return msecs / MSEC_PER_SEC;
}

/**
 * Returns nanoseconds from dawn of unix epoch until when this is called.
 */
function nowNsec() {
  return secToNsec(nowSec());
}

function nowMsec() {
  return secToMsec(nowSec());
}

/** @returns {number} The seconds since the epoch, of the clock source (see setClockSource()). */
function nowSec() {
  return _clockSourceFn();
}

/**
 * Sets google.protobuf.Timestamp to point to the current time on the system clock.
 */
function setTimestampFromNow(timestampProto) {
  setTimestampFromNsec(timestampProto, nowNsec());
}

/**
 * Set a Timestamp from nanoseconds since the epoch.
 * @param {Timestamp} timestampProto
 * @param {number|bigint|string} timeNsec A BigInt (or its decimal string) is exact, like the integers of Python; a
 * number is exact up to 2^53 ns (104 days): the times since the epoch are rounded to 256 ns.
 */
function setTimestampFromNsec(timestampProto, timeNsec) {
  if (typeof timeNsec === 'bigint' || typeof timeNsec === 'string') {
    const nsec = BigInt(timeNsec);
    const nanos = ((nsec % NSEC_PER_SEC_BIGINT) + NSEC_PER_SEC_BIGINT) % NSEC_PER_SEC_BIGINT;
    timestampProto.setSeconds(Number((nsec - nanos) / NSEC_PER_SEC_BIGINT));
    timestampProto.setNanos(Number(nanos));
    return;
  }
  // Canonical Timestamp, nanos in [0, 1e9): -1.5e9 ns is -2 s + 5e8 ns (not -2 s - 5e8 ns).
  const nanos = ((timeNsec % NSEC_PER_SEC) + NSEC_PER_SEC) % NSEC_PER_SEC;
  const seconds = Math.round((timeNsec - nanos) / NSEC_PER_SEC);
  timestampProto.setSeconds(seconds);
  timestampProto.setNanos(Math.floor(nanos));
}

/**
 * Returns a google.protobuf.Timestamp set to the current time on the system clock.
 */
function nowTimestamp() {
  const timestampProto = new Timestamp();
  setTimestampFromNsec(timestampProto, nowNsec());
  return timestampProto;
}

/**
 * Returns a google.protobuf.Timestamp for an integer value of nanoseconds since the unix epoch.
 */
function nsecToTimestamp(timeNsec) {
  const timestampProto = new Timestamp();
  setTimestampFromNsec(timestampProto, timeNsec);
  return timestampProto;
}

/**
 * Sets a Timestamp protobuf from a Date.
 */
function setTimestampFromDatetime(timestampProto, dateTime) {
  setTimestampFromNsec(timestampProto, Math.floor(dateTime.getTime() * 1_000_000));
}

function getNanoSecTime() {
  const hrTime = process.hrtime();
  return hrTime[0] * 1000000000 + hrTime[1];
}

/**
 * From a Timestamp proto, return a floating point value of seconds from the unix epoch.
 */
function timestampToSec(t) {
  return t.getSeconds() + t.getNanos() / NSEC_PER_SEC;
}

/**
 * From a Timestamp proto, return an integer of nanoseconds from the unix epoch.
 */
function timestampToNsec(t) {
  return t.getSeconds() * BILLION + t.getNanos();
}

/**
 * The nanoseconds since the epoch of a Timestamp, exact like timestamp_to_nsec() in Python (timestampToNsec() gives a
 * number, rounded to 256 ns).
 * @param {Timestamp} t
 * @returns {bigint}
 */
function timestampToNsecBigInt(t) {
  return BigInt(t.getSeconds()) * NSEC_PER_SEC_BIGINT + BigInt(t.getNanos());
}

/**
 * The decimal string of a 64 bits integer, for the fields generated with [jstype = JS_STRING] (JS_STRING_FIELDS of
 * build.js): jspb writes 0 for a number given to them.
 * @param {number|bigint|string} value An integer (a number is exact up to 2^53).
 * @param {boolean} [signed=false] Whether it is an int64 (else an uint64).
 * @returns {string}
 * @throws {RangeError} The value is not a 64 bits integer.
 */
function toInt64String(value, signed = false) {
  const integer = BigInt(value);
  const [min, max] = signed ? [-(2n ** 63n), 2n ** 63n - 1n] : [0n, 2n ** 64n - 1n];
  if (integer < min || integer > max) {
    throw new RangeError(`${value} is not an ${signed ? 'int64' : 'uint64'}`);
  }
  return integer.toString();
}

/**
 * The decimal string of an uint64, for the fields generated with [jstype = JS_STRING]: see toInt64String().
 * @param {number|bigint|string} value
 * @returns {string}
 */
function toUint64String(value) {
  return toInt64String(value, false);
}

/**
 * Convert a google.protobuf.Timestamp to a Date, like timestamp_to_datetime() in Python (it returned a locale string).
 * @param {Timestamp} timestamp input time
 * @param {boolean} [useNanos=true] use fractional seconds in proto
 * @returns {Date}
 */
function timestampToDatetime(timestamp, useNanos = true) {
  const nanos = useNanos ? timestamp.getNanos() : 0;
  return new Date(timestamp.getSeconds() * 1_000 + nanos / MILLION);
}

/**
 * Format a time in seconds as 'H:MM:SS', like Python (3909 s was '1:5:9').
 * @param {number} seconds number of seconds (will be truncated to integer value)
 * @returns {string}
 */
function secsToHms(seconds) {
  const isecs = Math.trunc(Number(seconds));
  const minutes = Math.floor(isecs / 60) % 60;
  const hours = Math.floor(isecs / 3600);
  return `${hours}:${String(minutes).padStart(2, '0')}:${String(isecs % 60).padStart(2, '0')}`;
}

/**
 * Convert a distance in meters to either xxx.xx m or xxx.xx km, like Python (the kilometers divided the string of
 * the meters: 1234.5 m was '1.2345 km').
 * @param {number} meters distance in meters
 * @returns {string}
 */
function distanceStr(meters) {
  if (meters < 1000) return `${formatFixed(meters, 2)} m`;
  return `${formatFixed(Number(meters) / 1_000, 2)} km`;
}

/**
 * A number with a fixed number of decimals, like '{:.{digits}f}'.format(value) in Python: the exact ties are rounded
 * to the even digit, where toFixed() rounds them away from zero (0.125 gave '0.13', not '0.12').
 * @param {number} value
 * @param {number} digits The number of digits after the decimal point.
 * @returns {string}
 */
function formatFixed(value, digits) {
  const number = Number(value);
  if (Number.isNaN(number)) return 'nan';
  if (!Number.isFinite(number)) return number > 0 ? 'inf' : '-inf';
  // |number| = mantissa * 2^exponent, exactly.
  const view = new DataView(new ArrayBuffer(8));
  view.setFloat64(0, Math.abs(number));
  const bits = view.getBigUint64(0);
  const biasedExponent = Number(bits >> 52n);
  let mantissa = bits & ((1n << 52n) - 1n);
  let exponent = -1074;
  if (biasedExponent !== 0) {
    mantissa |= 1n << 52n;
    exponent = biasedExponent - 1075;
  }
  const scale = 10n ** BigInt(digits);
  let rounded;
  if (exponent >= 0) {
    rounded = (mantissa << BigInt(exponent)) * scale;
  } else {
    const numerator = mantissa * scale;
    const denominator = 1n << BigInt(-exponent);
    rounded = numerator / denominator;
    const twiceRemainder = (numerator % denominator) * 2n;
    if (twiceRemainder > denominator || (twiceRemainder === denominator && rounded % 2n === 1n)) rounded += 1n;
  }
  const text = rounded.toString().padStart(digits + 1, '0');
  const fraction = digits > 0 ? `.${text.slice(text.length - digits)}` : '';
  // Like Python, the sign stays when the value is rounded to zero ('-0.00').
  const sign = number < 0 || Object.is(number, -0) ? '-' : '';
  return `${sign}${text.slice(0, text.length - digits)}${fraction}`;
}

/**
 * A string representing a metric (a bosdyn.api.Parameter), like format_metric() in Python (it was missing).
 * @param {import('../bosdyn/api/parameter_pb').Parameter} metric metric description
 * @returns {string}
 */
function formatMetric(metric) {
  const label = metric.getLabel().padEnd(20);
  if (metric.hasFloatValue()) {
    if (metric.getUnits() === 'm') return `${label} ${distanceStr(metric.getFloatValue())}`;
    return `${label} ${formatFixed(metric.getFloatValue(), 2)} ${metric.getUnits()}`;
  }
  if (metric.hasIntValue()) return `${label} ${metric.getIntValue()} ${metric.getUnits()}`;
  if (metric.hasBoolValue()) return `${label} ${metric.getBoolValue() ? 'True' : 'False'} ${metric.getUnits()}`;
  if (metric.hasDuration()) return `${label} ${secsToHms(metric.getDuration().getSeconds())}`;
  if (metric.hasStringValue()) return `${label} ${metric.getStringValue()}`;
  return `${label}  ${metric.getUnits()}`;
}

/**
 * Set the process name, like set_process_name() in Python 5.2.0. Name must be a max of 16 bytes.
 *
 * Through process.title: on Linux, it calls prctl(PR_SET_NAME) like Python, and also changes the command line shown
 * by ps. Nothing on Windows, like Python (process.title is the title of the console there).
 * @param {string} name The name of the process.
 * @returns {void}
 */
function setProcessName(name) {
  if (process.platform !== 'win32') {
    process.title = name;
  }
}

/** Failed to parse any datetime formats known to parseDatetime() */
class DatetimeParseError extends Error {}

function nowUnixSeconds() {
  return Math.floor(Date.now() / 1_000);
}

function parseYYYYMMDD_HHmmss(s) {
  // s = "YYYYMMDD_HHmmss"
  const y = +s.slice(0, 4);
  // 0-based.
  const M = +s.slice(4, 6) - 1;
  const d = +s.slice(6, 8);
  const hh = +s.slice(9, 11);
  const mm = +s.slice(11, 13);
  const ss = +s.slice(13, 15);
  return Math.floor(new Date(y, M, d, hh, mm, ss).getTime() / 1_000);
}

function parseYYYYMMDD(s) {
  // s = "YYYYMMDD" -> minuit local
  const y = +s.slice(0, 4);
  const M = +s.slice(4, 6) - 1;
  const d = +s.slice(6, 8);
  return Math.floor(new Date(y, M, d, 0, 0, 0).getTime() / 1_000);
}

function parseRelative(val, unit) {
  const n = parseInt(val.slice(0, -1), 10);
  const seconds = unit === 'd' ? n * 86400 : unit === 'h' ? n * 3600 : unit === 'm' ? n * 60 : n;
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
  [/^\d{13}$/, v => Math.floor(parseInt(v, 10) / 1_000)],
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
   * @returns {Timestamp}
   */
  robotTimestampFromLocalNsecs(localTimeNsecs) {
    return nsecToTimestamp(localTimeNsecs + this._clockSkewNsec);
  }

  /**
   * Returns a robot-clock Timestamp proto for a local time in seconds.
   * @param {number} localTimeSecs Local system time, in seconds from the unix epoch.
   * @returns {Timestamp}
   */
  robotTimestampFromLocalSecs(localTimeSecs) {
    return this.robotTimestampFromLocalNsecs(secToNsec(localTimeSecs));
  }

  /**
   * Takes a Timestamp proto is local time and returns one in robot time.
   * @param {Timestamp} localTimestampProto Timestamp in system clock
   * @returns {Timestamp}
   */
  robotTimestampFromLocal(localTimestampProto) {
    const localNsecs = timestampToNsec(localTimestampProto);
    return this.robotTimestampFromLocalNsecs(localNsecs);
  }

  /**
   * Edits timestamp_proto in place to convert it from the local clock to the robot_clock.
   * @param {Timestamp} timestampProto Local system time
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
  formatFixed,
  formatMetric,
  setProcessName,
  secsToHms,
  timestampToDatetime,
  timestampToNsec,
  timestampToNsecBigInt,
  timestampToSec,
  toInt64String,
  toUint64String,
  getNanoSecTime,
  nsecToTimestamp,
  nowTimestamp,
  setTimestampFromDatetime,
  setTimestampFromNsec,
  setTimestampFromNow,
  setClockSource,
  systemTimeSec,
  nowNsec,
  nowMsec,
  nowSec,
  secToNsec,
  nsecToSec,
  secToMsec,
  msecToSec,
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
