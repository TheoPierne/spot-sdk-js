# bosdyn-client/time_sync

A client for the time-sync service.

The time-sync service helps track the difference between the robot's system clock and the system clock of clients,
and sends an estimate of this difference to the client. The client uses this information when it needs to send a
timestamp to the robot in a request proto. Timestamps in request protos generally need to be specified relative to
the robot's system clock.

```js
const { TimeSyncClient, TimeSyncEndpoint, TimeSyncThread, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { TimedOutError } = require('spot-sdk-js/src/bosdyn-client/time_sync');
```

| Export | Kind | Description |
|---|---|---|
| [`TimeSyncClient`](#timesyncclient) | Class | A client for establishing time-sync with a server/robot. |
| [`TimeSyncEndpoint`](#timesyncendpoint) | Class | A wrapper that uses a TimeSyncClient object to establish and maintain timesync with a robot. |
| [`TimeSyncThread`](#timesyncthread) | Class | Background for achieving and maintaining time-sync to the robot. |
| [`timespecToRobotTimespan`](#timespectorobottimespan) | Function | Generate timespan as TimeRange proto, in robot time. |
| [`robotTimeRangeFromDatetimes`](#robottimerangefromdatetimes) | Function | Generate timespan as a TimeRange proto, in robot time. |
| [`robotTimeRangeFromNanoseconds`](#robottimerangefromnanoseconds) | Function | Generate timespan as a TimeRange proto, in robot time. |
| [`updateTimeFilter`](#updatetimefilter) | Function | Set or convert fields of the proto that need timestamps in the robot's clock. |
| [`updateTimestampFilter`](#updatetimestampfilter) | Function | Set or convert fields of the proto that need timestamps in the robot's clock. |
| [`TimeSyncError`](#timesyncerror) | Class | General class of errors for TimeSync non-response / non-grpc errors. |
| [`NotEstablishedError`](#notestablishederror) | Class | Client has not established time-sync with the robot. |
| [`TimedOutError`](#timedouterror) | Class | Exceeded deadline to achieve time-sync. |
| [`InactiveThreadError`](#inactivethreaderror) | Class | Time-sync thread is no longer running. |

## TimeSyncError

```ts
class TimeSyncError extends BosdynError
```

General class of errors for TimeSync non-response / non-grpc errors.

## NotEstablishedError

```ts
class NotEstablishedError extends TimeSyncError
```

Client has not established time-sync with the robot.

## TimedOutError

```ts
class TimedOutError extends TimeSyncError
```

Exceeded deadline to achieve time-sync.

## InactiveThreadError

```ts
class InactiveThreadError extends TimeSyncError
```

Time-sync thread is no longer running.

## TimeSyncClient

```ts
class TimeSyncClient extends BaseClient<TimeSyncServiceClient>
```

A client for establishing time-sync with a server/robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'time-sync'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.TimeSyncService'`. |

### getTimeSyncUpdate

```ts
getTimeSyncUpdate(previousRoundTrip: timeSyncPb.TimeSyncRoundTrip, clockIdentifier: string, args?: Object): Promise<timeSyncPb.TimeSyncUpdateResponse>
```

Obtain an initial or updated timesync estimate with server.

| Parameter | Type | Description |
|---|---|---|
| `previousRoundTrip` | `timeSyncPb.TimeSyncRoundTrip` | Null on first rpc call, then fill out with previous response from server. |
| `clockIdentifier` | `string` | Empty on first call, assigned by server in first response. |
| `args` | `Object` | The GRPC options to send over the GRPC request (*Optional*) |

**Returns** `Promise<timeSyncPb.TimeSyncUpdateResponse>`

## TimeSyncEndpoint

```ts
class TimeSyncEndpoint
```

A wrapper that uses a TimeSyncClient object to establish and maintain timesync with a robot.
This class manages internal state, including a clock identifier and previous best time sync
estimates. This class automatically builds requests passed to the TimeSyncClient, so users
don't have to worry about the details of establishing and maintaining timesync.

### new TimeSyncEndpoint

```ts
constructor(timeSyncClient: TimeSyncClient)
```

| Parameter | Type | Description |
|---|---|---|
| `timeSyncClient` | `TimeSyncClient` | TimeSyncClient instance |

### Properties

| Property | Type | Description |
|---|---|---|
| `response` | `timeSyncPb.TimeSyncUpdateResponse \| null` | The last response message from the time-sync service. Read-only. |
| `hasEstablishedTimeSync` | `boolean` | Checks if the client has successfully established time-sync with the robot. Read-only. |
| `roundTripTime` | `Duration \| null` | The previous round trip time. Read-only. |
| `clockIdentifier` | `string` | The clock identifier for the instance of the time-sync client. Read-only. |
| `clockSkew` | `Duration` | The best current estimate of clock skew from the time-sync service. Read-only. |

### establishTimesync

```ts
establishTimesync(maxSamples?: number, breakOnSuccess?: boolean): Promise<boolean>
```

Perform time-synchronization until time sync established.

| Parameter | Type | Description |
|---|---|---|
| `maxSamples` | `number` | The maximum number of times to attempt to establish time-sync through time-synchronization. (*Optional*) |
| `breakOnSuccess` | `boolean` | If true, stop performing the time-synchronization after time-sync is established. (*Optional*) |

**Returns** `Promise<boolean>`

### getNewEstimate

```ts
getNewEstimate(): Promise<boolean>
```

Perform an update-cycle toward achieving time-synchronization.

**Returns** `Promise<boolean>`

### getRobotTimeConverter

```ts
getRobotTimeConverter(): RobotTimeConverter
```

Get a RobotTimeConverter for current estimate for robot clock skew from local time.

**Returns** `RobotTimeConverter`

**Throws**

- `NotEstablishedError` If time sync has not yet been established.

### robotTimestampFromLocalSecs

```ts
robotTimestampFromLocalSecs(localTimeSecs: number): Timestamp
```

Convert a local time in seconds to a timestamp proto in robot time.

| Parameter | Type | Description |
|---|---|---|
| `localTimeSecs` | `number` | Timestamp in seconds since the unix epoch (e.g. nowSec(), not Date.now()). |

**Returns** `Timestamp`

**Throws**

- `NotEstablishedError` Time sync has not yet been established.

## TimeSyncThread

```ts
class TimeSyncThread
```

Background for achieving and maintaining time-sync to the robot.

### new TimeSyncThread

```ts
constructor(timeSyncClient: TimeSyncClient, timeSyncEndpoint?: TimeSyncEndpoint | null)
```

| Parameter | Type | Description |
|---|---|---|
| `timeSyncClient` | `TimeSyncClient` | An instance of TimeSyncClient |
| `timeSyncEndpoint` | `TimeSyncEndpoint \| null` | An optional instance of TimeSyncEndpoint (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `DEFAULT_TIME_SYNC_INTERVAL_MS` | `number` | After achieving time sync, update estimate every minute. |
| `TIME_SYNC_SERVICE_NOT_READY_INTERVAL_MS` | `number` | When time-sync service is not yet ready, poll it at this interval |
| `logger` | `import("winston").Logger` |  |
| `timeSyncIntervalSec` | `number` | Get the time sync interval in seconds |
| `shouldExit` | `boolean` | Return true if all sync operations should stop Read-only. |
| `hasEstablishedTimeSync` | `boolean` | Checks if the client has successfully established time-sync with the robot. Read-only. |
| `stopped` | `boolean` | Returns true if thread is no longer running. Read-only. |
| `exception` | `Error \| null` | Read-only. |
| `endpoint` | `TimeSyncEndpoint` | Return the TimeSyncEndpoint used by this thread. Read-only. |

### start

```ts
start(): void
```

Start time sync with robot

**Returns** `void`

### stop

```ts
stop(): Promise<void>
```

Stop time sync with robot. Like Python's join, the returned promise resolves once the update in
progress (if any) is done.

**Returns** `Promise<void>`

### waitForSync

```ts
waitForSync(timeoutSec?: number): Promise<void>
```

Wait for up to the given timeout for time-sync to be achieved

| Parameter | Type | Description |
|---|---|---|
| `timeoutSec` | `number` | Maximum time (seconds) to wait for time-sync to be achieved. (*Optional*) |

**Returns** `Promise<void>`

### getRobotClockSkew

```ts
getRobotClockSkew(timesyncTimeoutSec?: number): Promise<Duration>
```

Get current estimate for robot clock skew from local time.

| Parameter | Type | Description |
|---|---|---|
| `timesyncTimeoutSec` | `number` | Time to wait for timesync before doing conversion. (*Optional*) |

**Returns** `Promise<Duration>`

### getRobotTimeConverter

```ts
getRobotTimeConverter(timesyncTimeoutSec?: number): Promise<RobotTimeConverter>
```

Get a RobotTimeConverter for current estimate for robot clock skew from local time.

| Parameter | Type | Description |
|---|---|---|
| `timesyncTimeoutSec` | `number` | Time to wait for timesync before doing conversion. (*Optional*) |

**Returns** `Promise<RobotTimeConverter>`

### robotTimestampFromLocalSecs

```ts
robotTimestampFromLocalSecs(localTimeSecs: number, timesyncTimeoutSec?: number): Promise<time.Timestamp | null>
```

Convert a local time in seconds to a timestamp proto in robot time.

| Parameter | Type | Description |
|---|---|---|
| `localTimeSecs` | `number` | Timestamp in seconds since the unix epoch (e.g. nowSec(), not Date.now()). |
| `timesyncTimeoutSec` | `number` | Time to wait for timesync before doing conversion. (*Optional*) |

**Returns** `Promise<time.Timestamp \| null>`

## timespecToRobotTimespan

```ts
export function timespecToRobotTimespan(timespanSpec: string, timeSyncEndpoint?: TimeSyncEndpoint | null): timeRangePb.TimeRange
```

Generate timespan as TimeRange proto, in robot time.
If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
be converted to robot_time.
If the input times are already in the robot clock, do not specify timeSyncEndpoint and
the times will not be converted.

| Parameter | Type | Description |
|---|---|---|
| `timespanSpec` | `string` | '{val}-{val}' or '{val}' time spec string |
| `timeSyncEndpoint` | `TimeSyncEndpoint \| null` | Either TimeSyncEndpoint or null. (*Optional*) |

**Returns** `timeRangePb.TimeRange`

## robotTimeRangeFromDatetimes

```ts
export function robotTimeRangeFromDatetimes(startDatetime: Date | number | null, endDatetime: Date | number | null, timeSyncEndpoint?: TimeSyncEndpoint | null): timeRangePb.TimeRange
```

Generate timespan as a TimeRange proto, in robot time.
If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
be converted to robot_time.
If the input times are already in the robot clock, do not specify timeSyncEndpoint and
the times will not be converted.

| Parameter | Type | Description |
|---|---|---|
| `startDatetime` | `Date \| number \| null` | A Date, milliseconds since the Unix epoch (e.g. Date.now()), or null |
| `endDatetime` | `Date \| number \| null` | A Date, milliseconds since the Unix epoch (e.g. Date.now()), or null |
| `timeSyncEndpoint` | `TimeSyncEndpoint \| null` | Either TimeSyncEndpoint or null. (*Optional*) |

**Returns** `timeRangePb.TimeRange`

## robotTimeRangeFromNanoseconds

```ts
export function robotTimeRangeFromNanoseconds(startNsec: number | null, endNsec: number | null, timeSyncEndpoint?: TimeSyncEndpoint | null): timeRangePb.TimeRange
```

Generate timespan as a TimeRange proto, in robot time.
If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
be converted to robot_time.
If the input times are already in the robot clock, do not specify timeSyncEndpoint and
the times will not be converted.

| Parameter | Type | Description |
|---|---|---|
| `startNsec` | `number \| null` | nanoseconds since the Unix epoch or null |
| `endNsec` | `number \| null` | nanoseconds since the Unix epoch or null |
| `timeSyncEndpoint` | `TimeSyncEndpoint \| null` | Either TimeSyncEndpoint or None. (*Optional*) |

**Returns** `timeRangePb.TimeRange`

## updateTimeFilter

```ts
export function updateTimeFilter(client: RobotCommandClient, timestamp: number, timesyncEndpoint: TimeSyncEndpoint): Timestamp
```

Set or convert fields of the proto that need timestamps in the robot's clock.

| Parameter | Type | Description |
|---|---|---|
| `client` | `RobotCommandClient` | Robot command client instance. |
| `timestamp` | `number` | Client time in seconds since the Unix epoch, e.g. nowSec() (not Date.now()). |
| `timesyncEndpoint` | `TimeSyncEndpoint` | A timesync endpoint associated with the robot object. |

**Returns** `Timestamp`

## updateTimestampFilter

```ts
export function updateTimestampFilter(client: RobotCommandClient, timestamp: Timestamp, timesyncEndpoint: TimeSyncEndpoint): Timestamp
```

Set or convert fields of the proto that need timestamps in the robot's clock.

| Parameter | Type | Description |
|---|---|---|
| `client` | `RobotCommandClient` | Robot command client instance. |
| `timestamp` | `Timestamp` | Client time. |
| `timesyncEndpoint` | `TimeSyncEndpoint` | A timesync endpoint associated with the robot object. |

**Returns** `Timestamp`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `timeSyncPb` | `spot-sdk-js/src/bosdyn/api/time_sync_pb` |
| `timeRangePb` | `spot-sdk-js/src/bosdyn/api/time_range_pb` |
