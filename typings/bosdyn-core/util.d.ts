export const TIME_FORMAT_DESC: "\nTime values have one of these formats:\n- yyyymmdd_hhmmss  (e.g., 20200120_120000)\n- yyyymmdd         (e.g., 20200120)\n-  {n}d    {n} days ago     (e.g., 2d)\n-  {n}h    {n} hours ago\n-  {n}m    {n} minutes ago\n-  {n}s    {n} seconds ago\n- nnnnnnnnnn[.nn]       (e.g., 1581869515.256)  Seconds since epoch\n- nnnnnnnnnnnnnnnnnnnn  Nanoseconds since epoch";
/**
 * Converts times in the local system clock to times in the robot clock.
 * Conversions are made given an estimate of clock skew from the local clock to the robot clock.
 */
export class RobotTimeConverter {
    constructor(robotClockSkewNsec: any);
    _clockSkewNsec: any;
    /**
     * Returns a robot-clock Timestamp proto for a local time in nanoseconds.
     * @param {number} localTimeNsecs Local system time, in integer of nanoseconds from the unix epoch.
     * @returns {Timestamp}
     */
    robotTimestampFromLocalNsecs(localTimeNsecs: number): Timestamp;
    /**
     * Returns a robot-clock Timestamp proto for a local time in seconds.
     * @param {number} localTimeSecs Local system time, in seconds from the unix epoch.
     * @returns {Timestamp}
     */
    robotTimestampFromLocalSecs(localTimeSecs: number): Timestamp;
    /**
     * Takes a Timestamp proto is local time and returns one in robot time.
     * @param {Timestamp} localTimestampProto Timestamp in system clock
     * @returns {Timestamp}
     */
    robotTimestampFromLocal(localTimestampProto: Timestamp): Timestamp;
    /**
     * Edits timestamp_proto in place to convert it from the local clock to the robot_clock.
     * @param {Timestamp} timestampProto Local system time
     * @returns {void}
     */
    convertTimestampFromLocalToRobot(timestampProto: Timestamp): void;
    /**
     * Returns the robot time in seconds from a local time in seconds.
     * @param {number} localTimeSecs Local system time, in seconds from the unix epoch.
     * @returns {number}
     */
    robotSecondsFromLocalSeconds(localTimeSecs: number): number;
    /**
     * Returns the local time in seconds from a robot-clock Timestamp proto.
     * @param {number} robotTimestamp Local system time, in seconds from the unix epoch.
     * @returns {number}
     */
    localSecondsFromRobotTimestamp(robotTimestamp: number): number;
}
/**
 * Convert a distance in meters to either xxx.xx m or xxx.xx km, like Python (the kilometers divided the string of
 * the meters: 1234.5 m was '1.2345 km').
 * @param {number} meters distance in meters
 * @returns {string}
 */
export function distanceStr(meters: number): string;
/**
 * A number with a fixed number of decimals, like '{:.{digits}f}'.format(value) in Python: the exact ties are rounded
 * to the even digit, where toFixed() rounds them away from zero (0.125 gave '0.13', not '0.12').
 * @param {number} value
 * @param {number} digits The number of digits after the decimal point.
 * @returns {string}
 */
export function formatFixed(value: number, digits: number): string;
/**
 * A string representing a metric (a bosdyn.api.Parameter), like format_metric() in Python (it was missing).
 * @param {import('../../src/bosdyn/api/parameter_pb').Parameter} metric metric description
 * @returns {string}
 */
export function formatMetric(metric: import("../../src/bosdyn/api/parameter_pb").Parameter): string;
/**
 * Set the process name, like set_process_name() in Python 5.2.0. Name must be a max of 16 bytes.
 *
 * Through process.title: on Linux, it calls prctl(PR_SET_NAME) like Python, and also changes the command line shown
 * by ps. Nothing on Windows, like Python (process.title is the title of the console there).
 * @param {string} name The name of the process.
 * @returns {void}
 */
export function setProcessName(name: string): void;
/**
 * Format a time in seconds as 'H:MM:SS', like Python (3909 s was '1:5:9').
 * @param {number} seconds number of seconds (will be truncated to integer value)
 * @returns {string}
 */
export function secsToHms(seconds: number): string;
/**
 * Convert a google.protobuf.Timestamp to a Date, like timestamp_to_datetime() in Python (it returned a locale string).
 * @param {Timestamp} timestamp input time
 * @param {boolean} [useNanos=true] use fractional seconds in proto
 * @returns {Date}
 */
export function timestampToDatetime(timestamp: Timestamp, useNanos?: boolean): Date;
/**
 * From a Timestamp proto, return an integer of nanoseconds from the unix epoch.
 */
export function timestampToNsec(t: any): any;
/**
 * The nanoseconds since the epoch of a Timestamp, exact like timestamp_to_nsec() in Python (timestampToNsec() gives a
 * number, rounded to 256 ns).
 * @param {Timestamp} t
 * @returns {bigint}
 */
export function timestampToNsecBigInt(t: Timestamp): bigint;
/**
 * From a Timestamp proto, return a floating point value of seconds from the unix epoch.
 */
export function timestampToSec(t: any): any;
/**
 * The decimal string of a 64 bits integer, for the fields generated with [jstype = JS_STRING] (JS_STRING_FIELDS of
 * build.js): jspb writes 0 for a number given to them.
 * @param {number|bigint|string} value An integer (a number is exact up to 2^53).
 * @param {boolean} [signed=false] Whether it is an int64 (else an uint64).
 * @returns {string}
 * @throws {RangeError} The value is not a 64 bits integer.
 */
export function toInt64String(value: number | bigint | string, signed?: boolean): string;
/**
 * The decimal string of an uint64, for the fields generated with [jstype = JS_STRING]: see toInt64String().
 * @param {number|bigint|string} value
 * @returns {string}
 */
export function toUint64String(value: number | bigint | string): string;
export function getNanoSecTime(): number;
/**
 * Returns a google.protobuf.Timestamp for an integer value of nanoseconds since the unix epoch.
 */
export function nsecToTimestamp(timeNsec: any): Timestamp;
/**
 * Returns a google.protobuf.Timestamp set to the current time on the system clock.
 */
export function nowTimestamp(): Timestamp;
/**
 * Sets a Timestamp protobuf from a Date.
 */
export function setTimestampFromDatetime(timestampProto: any, dateTime: any): void;
/**
 * Set a Timestamp from nanoseconds since the epoch.
 * @param {Timestamp} timestampProto
 * @param {number|bigint|string} timeNsec A BigInt (or its decimal string) is exact, like the integers of Python; a
 * number is exact up to 2^53 ns (104 days): the times since the epoch are rounded to 256 ns.
 */
export function setTimestampFromNsec(timestampProto: Timestamp, timeNsec: number | bigint | string): void;
/**
 * Sets google.protobuf.Timestamp to point to the current time on the system clock.
 */
export function setTimestampFromNow(timestampProto: any): void;
/**
 * Set the clock source to use the input clock source, like set_clock_source() in Python.
 * @param {function(): number} clockFn Returns the time in seconds since the epoch, like time.time() in Python (it
 * returned milliseconds, like Date.now()); systemTimeSec by default.
 */
export function setClockSource(clockFn: () => number): void;
/**
 * The system time in seconds since the epoch, like time.time() in Python. Date.now() only has milliseconds (the
 * nanoseconds of the timestamps were multiples of 1 ms): the monotonic clock of performance.now() gives the fractions.
 * The time follows the system clock: it is realigned on Date.now() when they differ by more than a millisecond.
 * @returns {number}
 */
export function systemTimeSec(): number;
/**
 * Returns nanoseconds from dawn of unix epoch until when this is called.
 */
export function nowNsec(): number;
export function nowMsec(): number;
/** @returns {number} The seconds since the epoch, of the clock source (see setClockSource()). */
export function nowSec(): number;
/**
 * Converts a time in seconds to a timestamp in nanoseconds.
 */
export function secToNsec(secs: any): number;
/**
 * Convert time in nanoseconds to a timestamp in seconds.
 */
export function nsecToSec(secs: any): number;
export function secToMsec(secs: any): number;
export function msecToSec(msecs: any): number;
/**
 * A formatted string for a timestamp or a duration proto, '{seconds}.{nanoseconds}' like Python.
 * @param {Timestamp|Duration} timestamp
 * @returns {string}
 */
export function timestampStr(timestamp: Timestamp | Duration): string;
/**
 * Returns a number of seconds, as a float, based on Duration protobuf fields.
 */
export function durationToSeconds(duration: any): any;
/**
 * Return a formatted string for a duration proto.
 */
export function durationStr(duration: any): string;
export function sum(arr: any): any;
export function accumulate(values: any, initial?: null): number[];
export class slice {
    constructor(start: any, stop: any, step: any);
    start: any;
    stop: any;
    step: any;
    indices(array: any): number[];
    get(array: any): any[];
    set(array: any, values: any): boolean;
}
/**
 * Return a protobuf Duration from number of seconds, as a float.
 */
export function secondsToDuration(seconds: any): Duration;
/**
 * Return a protobuf Timestamps from number of seconds, as a float.
 */
export function secondsToTimestamp(seconds: any): Timestamp;
/**
 * Parse a timespan spec of the form {from-time}[-{to-time}]
 * @param {string} timespanSpec string with format {spec} or {spec}-{spec} where {spec} is a string
 * with a format as described by TIME_FORMAT_DESC.
 * @returns {Array<string>}
 */
export function parseTimespan(timespanSpec: string): Array<string>;
/**
 * Parse datetime from string
 * @param {string} val string with format like as described by TIME_FORMAT_DESC.
 * @returns {number}
 */
export function parseDatetime(val: string): number;
/** Failed to parse any datetime formats known to parseDatetime() */
export class DatetimeParseError extends Error {
}
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";
