# bosdyn-core/util

Common utilities: conversions of times, protobuf Timestamps and Durations, clocks, and formatting helpers.

```js
const { RobotTimeConverter, slice, distanceStr, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`RobotTimeConverter`](#robottimeconverter) | Class | Converts times in the local system clock to times in the robot clock. |
| [`slice`](#slice) | Class |  |
| [`distanceStr`](#distancestr) | Function | Convert a distance in meters to either xxx.xx m or xxx.xx km, like Python (the kilometers divided the string of the meters: 1234.5 m was '1.2345 km'). |
| [`formatFixed`](#formatfixed) | Function | A number with a fixed number of decimals, like '{:.{digits}f}'.format(value) in Python: the exact ties are rounded to the even digit, where toFixed() rounds them away from zero (0.125 gave '0.13', not '0.12'). |
| [`formatMetric`](#formatmetric) | Function | A string representing a metric (a bosdyn.api.Parameter), like format_metric() in Python (it was missing). |
| [`setProcessName`](#setprocessname) | Function | Set the process name, like set_process_name() in Python 5.2.0. |
| [`secsToHms`](#secstohms) | Function | Format a time in seconds as 'H:MM:SS', like Python (3909 s was '1:5:9'). |
| [`timestampToDatetime`](#timestamptodatetime) | Function | Convert a google.protobuf.Timestamp to a Date, like timestamp_to_datetime() in Python (it returned a locale string). |
| [`timestampToNsec`](#timestamptonsec) | Function | From a Timestamp proto, return an integer of nanoseconds from the unix epoch. |
| [`timestampToNsecBigInt`](#timestamptonsecbigint) | Function | The nanoseconds since the epoch of a Timestamp, exact like timestamp_to_nsec() in Python (timestampToNsec() gives a number, rounded to 256 ns). |
| [`timestampToSec`](#timestamptosec) | Function | From a Timestamp proto, return a floating point value of seconds from the unix epoch. |
| [`toInt64String`](#toint64string) | Function | The decimal string of a 64 bits integer, for the fields generated with [jstype = JS_STRING] (JS_STRING_FIELDS of build.js): jspb writes 0 for a number given to them. |
| [`toUint64String`](#touint64string) | Function | The decimal string of an uint64, for the fields generated with [jstype = JS_STRING]: see toInt64String(). |
| [`getNanoSecTime`](#getnanosectime) | Function |  |
| [`nsecToTimestamp`](#nsectotimestamp) | Function | Returns a google.protobuf.Timestamp for an integer value of nanoseconds since the unix epoch. |
| [`nowTimestamp`](#nowtimestamp) | Function | Returns a google.protobuf.Timestamp set to the current time on the system clock. |
| [`setTimestampFromDatetime`](#settimestampfromdatetime) | Function | Sets a Timestamp protobuf from a Date. |
| [`setTimestampFromNsec`](#settimestampfromnsec) | Function | Set a Timestamp from nanoseconds since the epoch. |
| [`setTimestampFromNow`](#settimestampfromnow) | Function | Sets google.protobuf.Timestamp to point to the current time on the system clock. |
| [`setClockSource`](#setclocksource) | Function | Set the clock source to use the input clock source, like set_clock_source() in Python. |
| [`systemTimeSec`](#systemtimesec) | Function | The system time in seconds since the epoch, like time.time() in Python. |
| [`nowNsec`](#nownsec) | Function | Returns nanoseconds from dawn of unix epoch until when this is called. |
| [`nowMsec`](#nowmsec) | Function |  |
| [`nowSec`](#nowsec) | Function |  |
| [`secToNsec`](#sectonsec) | Function | Converts a time in seconds to a timestamp in nanoseconds. |
| [`nsecToSec`](#nsectosec) | Function | Convert time in nanoseconds to a timestamp in seconds. |
| [`secToMsec`](#sectomsec) | Function |  |
| [`msecToSec`](#msectosec) | Function |  |
| [`timestampStr`](#timestampstr) | Function | A formatted string for a timestamp or a duration proto, '{seconds}.{nanoseconds}' like Python. |
| [`durationToSeconds`](#durationtoseconds) | Function | Returns a number of seconds, as a float, based on Duration protobuf fields. |
| [`durationStr`](#durationstr) | Function | Return a formatted string for a duration proto. |
| [`sum`](#sum) | Function |  |
| [`accumulate`](#accumulate) | Function |  |
| [`secondsToDuration`](#secondstoduration) | Function | Return a protobuf Duration from number of seconds, as a float. |
| [`secondsToTimestamp`](#secondstotimestamp) | Function | Return a protobuf Timestamps from number of seconds, as a float. |
| [`parseTimespan`](#parsetimespan) | Function | Parse a timespan spec of the form {from-time}[-{to-time}] |
| [`parseDatetime`](#parsedatetime) | Function | Parse datetime from string |
| [`TIME_FORMAT_DESC`](#constants) | Constant |  |
| [`DatetimeParseError`](#datetimeparseerror) | Class | Failed to parse any datetime formats known to parseDatetime() |

## RobotTimeConverter

```ts
class RobotTimeConverter
```

Converts times in the local system clock to times in the robot clock.
Conversions are made given an estimate of clock skew from the local clock to the robot clock.

### new RobotTimeConverter

```ts
constructor(robotClockSkewNsec: any)
```

| Parameter | Type | Description |
|---|---|---|
| `robotClockSkewNsec` | `any` |  |

### robotTimestampFromLocalNsecs

```ts
robotTimestampFromLocalNsecs(localTimeNsecs: number): Timestamp
```

Returns a robot-clock Timestamp proto for a local time in nanoseconds.

| Parameter | Type | Description |
|---|---|---|
| `localTimeNsecs` | `number` | Local system time, in integer of nanoseconds from the unix epoch. |

**Returns** `Timestamp`

### robotTimestampFromLocalSecs

```ts
robotTimestampFromLocalSecs(localTimeSecs: number): Timestamp
```

Returns a robot-clock Timestamp proto for a local time in seconds.

| Parameter | Type | Description |
|---|---|---|
| `localTimeSecs` | `number` | Local system time, in seconds from the unix epoch. |

**Returns** `Timestamp`

### robotTimestampFromLocal

```ts
robotTimestampFromLocal(localTimestampProto: Timestamp): Timestamp
```

Takes a Timestamp proto is local time and returns one in robot time.

| Parameter | Type | Description |
|---|---|---|
| `localTimestampProto` | `Timestamp` | Timestamp in system clock |

**Returns** `Timestamp`

### convertTimestampFromLocalToRobot

```ts
convertTimestampFromLocalToRobot(timestampProto: Timestamp): void
```

Edits timestamp_proto in place to convert it from the local clock to the robot_clock.

| Parameter | Type | Description |
|---|---|---|
| `timestampProto` | `Timestamp` | Local system time |

**Returns** `void`

### robotSecondsFromLocalSeconds

```ts
robotSecondsFromLocalSeconds(localTimeSecs: number): number
```

Returns the robot time in seconds from a local time in seconds.

| Parameter | Type | Description |
|---|---|---|
| `localTimeSecs` | `number` | Local system time, in seconds from the unix epoch. |

**Returns** `number`

### localSecondsFromRobotTimestamp

```ts
localSecondsFromRobotTimestamp(robotTimestamp: number): number
```

Returns the local time in seconds from a robot-clock Timestamp proto.

| Parameter | Type | Description |
|---|---|---|
| `robotTimestamp` | `number` | Local system time, in seconds from the unix epoch. |

**Returns** `number`

## slice

```ts
class slice
```

### new slice

```ts
constructor(start: any, stop: any, step: any)
```

| Parameter | Type | Description |
|---|---|---|
| `start` | `any` |  |
| `stop` | `any` |  |
| `step` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `start` | `any` |  |
| `stop` | `any` |  |
| `step` | `any` |  |

### indices

```ts
indices(array: any): number[]
```

| Parameter | Type | Description |
|---|---|---|
| `array` | `any` |  |

**Returns** `number[]`

### get

```ts
get(array: any): any[]
```

| Parameter | Type | Description |
|---|---|---|
| `array` | `any` |  |

**Returns** `any[]`

### set

```ts
set(array: any, values: any): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `array` | `any` |  |
| `values` | `any` |  |

**Returns** `boolean`

## DatetimeParseError

```ts
class DatetimeParseError extends Error
```

Failed to parse any datetime formats known to parseDatetime()

## distanceStr

```ts
export function distanceStr(meters: number): string
```

Convert a distance in meters to either xxx.xx m or xxx.xx km, like Python (the kilometers divided the string of
the meters: 1234.5 m was '1.2345 km').

| Parameter | Type | Description |
|---|---|---|
| `meters` | `number` | distance in meters |

**Returns** `string`

## formatFixed

```ts
export function formatFixed(value: number, digits: number): string
```

A number with a fixed number of decimals, like '{:.{digits}f}'.format(value) in Python: the exact ties are rounded
to the even digit, where toFixed() rounds them away from zero (0.125 gave '0.13', not '0.12').

| Parameter | Type | Description |
|---|---|---|
| `value` | `number` |  |
| `digits` | `number` | The number of digits after the decimal point. |

**Returns** `string`

## formatMetric

```ts
export function formatMetric(metric: import("spot-sdk-js/src/bosdyn/api/parameter_pb").Parameter): string
```

A string representing a metric (a bosdyn.api.Parameter), like format_metric() in Python (it was missing).

| Parameter | Type | Description |
|---|---|---|
| `metric` | `import("spot-sdk-js/src/bosdyn/api/parameter_pb").Parameter` | metric description |

**Returns** `string`

## setProcessName

```ts
export function setProcessName(name: string): void
```

Set the process name, like set_process_name() in Python 5.2.0. Name must be a max of 16 bytes.

Through process.title: on Linux, it calls prctl(PR_SET_NAME) like Python, and also changes the command line shown
by ps. Nothing on Windows, like Python (process.title is the title of the console there).

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the process. |

**Returns** `void`

## secsToHms

```ts
export function secsToHms(seconds: number): string
```

Format a time in seconds as 'H:MM:SS', like Python (3909 s was '1:5:9').

| Parameter | Type | Description |
|---|---|---|
| `seconds` | `number` | number of seconds (will be truncated to integer value) |

**Returns** `string`

## timestampToDatetime

```ts
export function timestampToDatetime(timestamp: Timestamp, useNanos?: boolean): Date
```

Convert a google.protobuf.Timestamp to a Date, like timestamp_to_datetime() in Python (it returned a locale string).

| Parameter | Type | Description |
|---|---|---|
| `timestamp` | `Timestamp` | input time |
| `useNanos` | `boolean` | use fractional seconds in proto (*Optional*, default `true`) |

**Returns** `Date`

## timestampToNsec

```ts
export function timestampToNsec(t: any): any
```

From a Timestamp proto, return an integer of nanoseconds from the unix epoch.

| Parameter | Type | Description |
|---|---|---|
| `t` | `any` |  |

**Returns** `any`

## timestampToNsecBigInt

```ts
export function timestampToNsecBigInt(t: Timestamp): bigint
```

The nanoseconds since the epoch of a Timestamp, exact like timestamp_to_nsec() in Python (timestampToNsec() gives a
number, rounded to 256 ns).

| Parameter | Type | Description |
|---|---|---|
| `t` | `Timestamp` |  |

**Returns** `bigint`

## timestampToSec

```ts
export function timestampToSec(t: any): any
```

From a Timestamp proto, return a floating point value of seconds from the unix epoch.

| Parameter | Type | Description |
|---|---|---|
| `t` | `any` |  |

**Returns** `any`

## toInt64String

```ts
export function toInt64String(value: number | bigint | string, signed?: boolean): string
```

The decimal string of a 64 bits integer, for the fields generated with [jstype = JS_STRING] (JS_STRING_FIELDS of
build.js): jspb writes 0 for a number given to them.

| Parameter | Type | Description |
|---|---|---|
| `value` | `number \| bigint \| string` | An integer (a number is exact up to 2^53). |
| `signed` | `boolean` | Whether it is an int64 (else an uint64). (*Optional*, default `false`) |

**Returns** `string`

**Throws**

- `RangeError` The value is not a 64 bits integer.

## toUint64String

```ts
export function toUint64String(value: number | bigint | string): string
```

The decimal string of an uint64, for the fields generated with [jstype = JS_STRING]: see toInt64String().

| Parameter | Type | Description |
|---|---|---|
| `value` | `number \| bigint \| string` |  |

**Returns** `string`

## getNanoSecTime

```ts
export function getNanoSecTime(): number
```

**Returns** `number`

## nsecToTimestamp

```ts
export function nsecToTimestamp(timeNsec: any): Timestamp
```

Returns a google.protobuf.Timestamp for an integer value of nanoseconds since the unix epoch.

| Parameter | Type | Description |
|---|---|---|
| `timeNsec` | `any` |  |

**Returns** `Timestamp`

## nowTimestamp

```ts
export function nowTimestamp(): Timestamp
```

Returns a google.protobuf.Timestamp set to the current time on the system clock.

**Returns** `Timestamp`

## setTimestampFromDatetime

```ts
export function setTimestampFromDatetime(timestampProto: any, dateTime: any): void
```

Sets a Timestamp protobuf from a Date.

| Parameter | Type | Description |
|---|---|---|
| `timestampProto` | `any` |  |
| `dateTime` | `any` |  |

## setTimestampFromNsec

```ts
export function setTimestampFromNsec(timestampProto: Timestamp, timeNsec: number | bigint | string): void
```

Set a Timestamp from nanoseconds since the epoch.

| Parameter | Type | Description |
|---|---|---|
| `timestampProto` | `Timestamp` |  |
| `timeNsec` | `number \| bigint \| string` | A BigInt (or its decimal string) is exact, like the integers of Python; a number is exact up to 2^53 ns (104 days): the times since the epoch are rounded to 256 ns. |

## setTimestampFromNow

```ts
export function setTimestampFromNow(timestampProto: any): void
```

Sets google.protobuf.Timestamp to point to the current time on the system clock.

| Parameter | Type | Description |
|---|---|---|
| `timestampProto` | `any` |  |

## setClockSource

```ts
export function setClockSource(clockFn: () => number): void
```

Set the clock source to use the input clock source, like set_clock_source() in Python.

| Parameter | Type | Description |
|---|---|---|
| `clockFn` | `() => number` | Returns the time in seconds since the epoch, like time.time() in Python (it returned milliseconds, like Date.now()); systemTimeSec by default. |

## systemTimeSec

```ts
export function systemTimeSec(): number
```

The system time in seconds since the epoch, like time.time() in Python. Date.now() only has milliseconds (the
nanoseconds of the timestamps were multiples of 1 ms): the monotonic clock of performance.now() gives the fractions.
The time follows the system clock: it is realigned on Date.now() when they differ by more than a millisecond.

**Returns** `number`

## nowNsec

```ts
export function nowNsec(): number
```

Returns nanoseconds from dawn of unix epoch until when this is called.

**Returns** `number`

## nowMsec

```ts
export function nowMsec(): number
```

**Returns** `number`

## nowSec

```ts
export function nowSec(): number
```

**Returns** `number`: The seconds since the epoch, of the clock source (see setClockSource()).

## secToNsec

```ts
export function secToNsec(secs: any): number
```

Converts a time in seconds to a timestamp in nanoseconds.

| Parameter | Type | Description |
|---|---|---|
| `secs` | `any` |  |

**Returns** `number`

## nsecToSec

```ts
export function nsecToSec(secs: any): number
```

Convert time in nanoseconds to a timestamp in seconds.

| Parameter | Type | Description |
|---|---|---|
| `secs` | `any` |  |

**Returns** `number`

## secToMsec

```ts
export function secToMsec(secs: any): number
```

| Parameter | Type | Description |
|---|---|---|
| `secs` | `any` |  |

**Returns** `number`

## msecToSec

```ts
export function msecToSec(msecs: any): number
```

| Parameter | Type | Description |
|---|---|---|
| `msecs` | `any` |  |

**Returns** `number`

## timestampStr

```ts
export function timestampStr(timestamp: Timestamp | Duration): string
```

A formatted string for a timestamp or a duration proto, '{seconds}.{nanoseconds}' like Python.

| Parameter | Type | Description |
|---|---|---|
| `timestamp` | `Timestamp \| Duration` |  |

**Returns** `string`

## durationToSeconds

```ts
export function durationToSeconds(duration: any): any
```

Returns a number of seconds, as a float, based on Duration protobuf fields.

| Parameter | Type | Description |
|---|---|---|
| `duration` | `any` |  |

**Returns** `any`

## durationStr

```ts
export function durationStr(duration: any): string
```

Return a formatted string for a duration proto.

| Parameter | Type | Description |
|---|---|---|
| `duration` | `any` |  |

**Returns** `string`

## sum

```ts
export function sum(arr: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `arr` | `any` |  |

**Returns** `any`

## accumulate

```ts
export function accumulate(values: any, initial?: null): number[]
```

| Parameter | Type | Description |
|---|---|---|
| `values` | `any` |  |
| `initial` | `null` | (*Optional*) |

**Returns** `number[]`

## secondsToDuration

```ts
export function secondsToDuration(seconds: any): Duration
```

Return a protobuf Duration from number of seconds, as a float.

| Parameter | Type | Description |
|---|---|---|
| `seconds` | `any` |  |

**Returns** `Duration`

## secondsToTimestamp

```ts
export function secondsToTimestamp(seconds: any): Timestamp
```

Return a protobuf Timestamps from number of seconds, as a float.

| Parameter | Type | Description |
|---|---|---|
| `seconds` | `any` |  |

**Returns** `Timestamp`

## parseTimespan

```ts
export function parseTimespan(timespanSpec: string): Array<string>
```

Parse a timespan spec of the form {from-time}[-{to-time}]

| Parameter | Type | Description |
|---|---|---|
| `timespanSpec` | `string` | string with format {spec} or {spec}-{spec} where {spec} is a string with a format as described by TIME_FORMAT_DESC. |

**Returns** `Array<string>`

## parseDatetime

```ts
export function parseDatetime(val: string): number
```

Parse datetime from string

| Parameter | Type | Description |
|---|---|---|
| `val` | `string` | string with format like as described by TIME_FORMAT_DESC. |

**Returns** `number`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `TIME_FORMAT_DESC` | `' Time values have one of these formats: - yyyymmdd_hhmmss  (e.g., 20200120_120000) - yyyymmdd         (e.g., 20200120) -  {n}d    {n} days ago     (e.g., 2d) -  {n}h    {n} hours ago -  {n}m    {n} minutes ago -  {n}s    {n} seconds ago - nnnnnnnnnn[.nn]       (e.g., 1581869515.256)  Seconds since epoch - nnnnnnnnnnnnnnnnnnnn  Nanoseconds since epoch'` |  |
