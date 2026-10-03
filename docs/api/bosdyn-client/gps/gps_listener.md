# bosdyn-client/gps/gps_listener

Reads GPS data from a tcp/udp stream, and sends to aggregator service.

```js
const { NMEAStreamReader, GpsListener, StreamTimeoutError } = require('spot-sdk-js').gps;
```

| Export | Kind | Description |
|---|---|---|
| [`NMEAStreamReader`](#nmeastreamreader) | Class |  |
| [`GpsListener`](#gpslistener) | Class |  |
| [`StreamTimeoutError`](#streamtimeouterror) | Class | Nothing was read from the GPS stream in time, like Python's socket.timeout. |

## NMEAStreamReader

```ts
class NMEAStreamReader
```

### new NMEAStreamReader

```ts
constructor(logger: Logger, stream: import("node:stream").Readable | {
    readline: Function;
}, bodyTformGps: SE3Pose, verbose?: boolean)
```

| Parameter | Type | Description |
|---|---|---|
| `logger` | `Logger` | Object to log with. |
| `stream` | `import("node:stream").Readable \| { readline: Function; }` | The GPS data: a readable stream, like a TCP socket or a serial port, or an object with a readline() method that returns a line or a promise of one, like the Python streams. Reading a socket times out after its timeout (socket.setTimeout()), like Python's settimeout(). |
| `bodyTformGps` | `SE3Pose` | Pose of the GPS in the body frame. |
| `verbose` | `boolean` | Log the NMEA messages received. (*Optional*, default `false`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `LOG_THROTTLE_TIME` | `number` | The amount of time (in seconds) to wait before logging another decode error. Static. Value: `2`. |
| `logger` | `import("../logger_util").Logger` |  |
| `stream` | `import("stream").Readable \| { readline: Function; }` |  |
| `parser` | `NMEAParser` |  |
| `bodyTformGps` | `import("spot-sdk-js/src/bosdyn/api/geometry_pb").SE3Pose` |  |
| `lastFailedReadLogTime` | `number \| null` |  |
| `verbose` | `boolean` |  |

### readData

```ts
readData(timeConverter: RobotTimeConverter | null): Promise<gpsPb.GpsDataPoint[] | null>
```

This function returns an array of new GpsDataPoints.

| Parameter | Type | Description |
|---|---|---|
| `timeConverter` | `RobotTimeConverter \| null` | Converter to robot time, null if the clocks are synchronized. |

**Returns** `Promise<gpsPb.GpsDataPoint[] \| null>`: null if the line read is not NMEA, or if interrupt() was called.

**Throws**

- `StreamTimeoutError` Nothing was received in time.
- `Error` The stream failed or ended.

### getLatestGga

```ts
getLatestGga(): string | null
```

**Returns** `string \| null`

### interrupt

```ts
interrupt(): void
```

End the pending readData(), which returns null. A stream with a readline() method can not be interrupted.

**Returns** `void`

### close

```ts
close(): void
```

Stop reading the stream until the next readData().

**Returns** `void`

## GpsListener

```ts
class GpsListener
```

### new GpsListener

```ts
constructor(robot: Robot, timeConverter: RobotTimeConverter | null, stream: import("node:stream").Duplex, name: string, bodyTformGps: SE3Pose, logger: Logger, verbose?: boolean)
```

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | The robot, used to create the aggregator service client. |
| `timeConverter` | `RobotTimeConverter \| null` | Converter to robot time, null if the clocks are synchronized by some other method, such as NTP. |
| `stream` | `import("node:stream").Duplex` | The GPS stream, see NMEAStreamReader. The NTRIP client writes the corrections to it. |
| `name` | `string` | The name of the GPS device. |
| `bodyTformGps` | `SE3Pose` | Pose of the GPS in the body frame. |
| `logger` | `Logger` | Object to log with. |
| `verbose` | `boolean` | Log the NMEA messages received. (*Optional*, default `false`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `MAX_ATTEMPTS` | `number` | Number of attempts to create the aggregator service client: the payload can come up faster than the service. Static. Value: `45`. |
| `SECS_PER_ATTEMPT` | `number` | Time between two of these attempts, in seconds. Static. Value: `2`. |
| `logger` | `import("../logger_util").Logger` |  |
| `robot` | `import("../robot").Robot` |  |
| `timeConverter` | `import("../../bosdyn-core/util").RobotTimeConverter \| null` |  |
| `stream` | `import("stream").Duplex` |  |
| `reader` | `NMEAStreamReader` |  |
| `gpsDevice` | `gpsPb.GpsDevice` |  |
| `aggregatorClient` | `AggregatorClient` |  |
| `ntripClient` | `NtripClient \| null` |  |

### runNtripClient

```ts
runNtripClient(ntripParams: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `ntripParams` | `any` |  |

### stopNtripClient

```ts
stopNtripClient(): Promise<void>
```

Stop the NTRIP client, if any.

**Returns** `Promise<void>`: Resolves once it has stopped.

### stop

```ts
stop(): void
```

End run(), like the KeyboardInterrupt (Ctrl+C) that ends it in Python.

**Returns** `void`

### run

```ts
run(): Promise<boolean>
```

Send the GPS data read from the stream to the robot, until stop() is called or a SIGINT (Ctrl+C) is received.
Once stopped, the NTRIP client is stopped too.

**Returns** `Promise<boolean>`: False if the aggregator service is not available, or if reading the stream failed.

## StreamTimeoutError

```ts
class StreamTimeoutError extends Error
```

Nothing was read from the GPS stream in time, like Python's socket.timeout.

### new StreamTimeoutError

```ts
constructor(message?: string)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | (*Optional*) |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `gpsPb` | `spot-sdk-js/src/bosdyn/api/gps/gps_pb` |
