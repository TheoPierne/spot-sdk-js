# bosdyn-client/data_buffer

Client for the data-buffer service.

This allows client code to log the following to the robot's data buffer: text-messages, operator comments, blobs,
signal ticks, and protobuf messages.

```js
const { DataBufferClient, LoggingHandler, isNotRpc, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { InvalidArgument } = require('spot-sdk-js/src/bosdyn-client/data_buffer');
```

| Export | Kind | Description |
|---|---|---|
| [`DataBufferClient`](#databufferclient) | Class | A client for adding to robot data buffer. |
| [`LoggingHandler`](#logginghandler) | Class | A winston transport that will publish the logs as text messages to the data-buffer service (Python's LoggingHandler, a logging.Handler): add it to a logger, e.g. |
| [`isNotRpc`](#isnotrpc) | Function | Identify the logs of the RPCs (their requests and responses) to be able to strip them out (Python checks the module and the function of the records: common.call and common.call_async). |
| [`isNotTextLog`](#isnottextlog) | Function | Filter out the RecordTextMessages calls that the handler sends so that we do not go into an infinite loop (Python checks the name of the logger of the records, which ends with .DataBufferService.RecordTextMessages). |
| [`logEvent`](#logevent) | Function | Add an Event to the Data Buffer. |
| [`makeParameter`](#makeparameter) | Function | Create a parameter proto from a label and the parameter value, like make_parameter() in Python. |
| [`InvalidArgument`](#invalidargument) | Class | A given argument could not be used. |

## DataBufferClient

```ts
class DataBufferClient extends BaseClient<DataBufferServiceClient>
```

A client for adding to robot data buffer.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'data-buffer'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.DataBufferService'`. |
| `logTickSchemas` | `{}` |  |

### updateFrom

```ts
updateFrom(other: Robot): Promise<void>
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `Robot` |  |

**Returns** `Promise<void>`

### addTextMessages

```ts
addTextMessages(textMessages: dataBufferProtos.TextMessage[], args?: Object): Promise<dataBufferProtos.RecordTextMessagesResponse>
```

Log text messages to the robot.

| Parameter | Type | Description |
|---|---|---|
| `textMessages` | `dataBufferProtos.TextMessage[]` | Sequence of TextMessage protos. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataBufferProtos.RecordTextMessagesResponse>`

### addOperatorComment

```ts
addOperatorComment(msg: string, robotTimestamp?: Timestamp | null, args?: Object): Promise<dataBufferProtos.RecordOperatorCommentsResponse>
```

Add an operator comment to the robot log.

| Parameter | Type | Description |
|---|---|---|
| `msg` | `string` | Text of user comment to log. |
| `robotTimestamp` | `Timestamp \| null` | Time of messages, in robot time. If not set, timestamp will be when the robot receives the message. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataBufferProtos.RecordOperatorCommentsResponse>`

### addBlob

```ts
addBlob(data: Uint8Array, typeId: string, channel?: string | null, robotTimestamp?: Timestamp | null, writeSync?: boolean, args?: Object): Promise<dataBufferProtos.RecordDataBlobsResponse>
```

Log blob messages to the data buffer.

| Parameter | Type | Description |
|---|---|---|
| `data` | `Uint8Array` | Binary data of one blob. |
| `typeId` | `string` | Type of binary data of blob. For example, this could be the full name of a protobuf message type. |
| `channel` | `string \| null` | The name by which messages are typically queried: often the same as typeId, or of the form '{prefix}/{typeId}'. (*Optional*) |
| `robotTimestamp` | `Timestamp \| null` | Time of messages, in robot time. (*Optional*) |
| `writeSync` | `boolean` | When set to true, the data blob is committed to the log synchronously. The RPC does not return until the data is written. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataBufferProtos.RecordDataBlobsResponse>`

### addProtobuf

```ts
addProtobuf(proto: import("google-protobuf").Message, channel?: string, robotTimestamp?: Timestamp | null, writeSync?: boolean, args?: Object): Promise<dataBufferProtos.RecordDataBlobsResponse>
```

Log protobuf messages to the data buffer.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `import("google-protobuf").Message` | Serializable protobuf to log. |
| `channel` | `string` | Name of channel for data. If not set defaults to proto type name. (*Optional*) |
| `robotTimestamp` | `Timestamp \| null` | Time of proto, in robot time. (*Optional*) |
| `writeSync` | `boolean` | When set to true, the data blob is committed to the log synchronously. The RPC does not return until the data is written. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataBufferProtos.RecordDataBlobsResponse>`

### addEvents

```ts
addEvents(events: dataBufferProtos.Event[], args?: Object): Promise<dataBufferProtos.RecordEventsResponse>
```

Log event messages to the robot.

| Parameter | Type | Description |
|---|---|---|
| `events` | `dataBufferProtos.Event[]` | Sequence of Event protos. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataBufferProtos.RecordEventsResponse>`

### registerSignalSchema

```ts
registerSignalSchema(variables: dataBufferProtos.SignalSchema.Variable[], schemaName: string, args?: Object): Promise<string>
```

Log signal schema to the robot.

| Parameter | Type | Description |
|---|---|---|
| `variables` | `dataBufferProtos.SignalSchema.Variable[]` | Array of SignalSchema variables defining what is in tick. |
| `schemaName` | `string` | Name of schema (defined previously by client). |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<string>`: The id of the schema (an uint64: a string, exact beyond 2^53).

### addSignalTick

```ts
addSignalTick(data: Uint8Array | string, schemaId: string | bigint | number, encoding?: dataBufferProtos.SignalTick.Encoding, sequenceId?: number, source?: string, args?: Object): Promise<dataBufferProtos.RecordSignalTicksResponse>
```

Log signal data to the robot data buffer.
Schema should be sent before any ticks.

| Parameter | Type | Description |
|---|---|---|
| `data` | `Uint8Array \| string` | Single hunk of binary data. |
| `schemaId` | `string \| bigint \| number` | ID name of schema (obtained from a previous schema registration) |
| `encoding` | `dataBufferProtos.SignalTick.Encoding` | Encoding of the data (*Optional*) |
| `sequenceId` | `number` | Index of which sequence tick this is (*Optional*) |
| `source` | `string` | String name representing client (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataBufferProtos.RecordSignalTicksResponse>`

### nowInRobotBasis

```ts
nowInRobotBasis(msgType?: string, proto?: import("google-protobuf").Message): Timestamp
```

Get current time in robot clock basis if possible, null otherwise.

| Parameter | Type | Description |
|---|---|---|
| `msgType` | `string` | * (*Optional*) |
| `proto` | `import("google-protobuf").Message` | * (*Optional*) |

**Returns** `Timestamp`

## InvalidArgument

```ts
class InvalidArgument extends BosdynError
```

A given argument could not be used.

## LoggingHandler

```ts
class LoggingHandler
```

A winston transport that will publish the logs as text messages to the data-buffer service (Python's
LoggingHandler, a logging.Handler): add it to a logger, e.g. `robot.logger.add(handler)`. The messages are queued,
and a background loop sends them in batches.

Unlike Python, log() is the emit() of Python (emit() is the one of the streams), the filename and line_number of the
messages are not set (winston does not know where a message is logged), and close() is async.

### new LoggingHandler

```ts
constructor(service: string, dataBufferClient: DataBufferClient, { level, timeSyncEndpoint, rpcTimeout, msgNumLimit, msgAgeLimit, skipRpcs, ...transportOptions }?: {
    level?: string | null | undefined;
    timeSyncEndpoint?: import("./time_sync").TimeSyncEndpoint | null | undefined;
    rpcTimeout?: number | null | undefined;
    msgNumLimit?: number | undefined;
    msgAgeLimit?: number | undefined;
    skipRpcs?: boolean | undefined;
})
```

| Parameter | Type | Description |
|---|---|---|
| `service` | `string` | Name of the service. See LogAnnotationTextMessage. |
| `dataBufferClient` | `DataBufferClient` | API client that will send log messages. |
| `options` | `{ level?: string \| null \| undefined; timeSyncEndpoint?: import("./time_sync").TimeSyncEndpoint \| null \| undefined; rpcTimeout?: number \| null \| undefined; msgNumLimit?: number \| undefined; msgAgeLimit?: number \| undefined; skipRpcs?: boolean \| undefined; }` | The options below, and the ones of the winston transports (e.g. format). (*Optional*) |
| `options.level` | `?string` | Level of the transport; null for the level of the logger, like the NOTSET of Python. (*Optional*, default `null`) |
| `options.timeSyncEndpoint` | `?TimeSyncEndpoint` | A TimeSyncEndpoint, already synchronized to the remote clock. (*Optional*, default `null`) |
| `options.rpcTimeout` | `?number` | Timeout on RPCs made by dataBufferClient, in seconds. (*Optional*, default `1`) |
| `options.msgNumLimit` | `number` | If number of messages reaches this number, send data with dataBufferClient. (*Optional*, default `10`) |
| `options.msgAgeLimit` | `number` | If messages have been sitting locally for this many seconds, send data with dataBufferClient. (*Optional*, default `1`) |
| `options.skipRpcs` | `boolean` | Do not log any messages for RPC sending. (*Optional*, default `false`) |

**Throws**

- `InvalidArgument` The TimeSyncEndpoint is not valid.

### Properties

| Property | Type | Description |
|---|---|---|
| `filters` | `Array<(arg0: Object) => boolean \| { filter: (arg0: Object) => boolean; }>` | The filters of the infos (the Filterer of Python): functions, or objects with a filter(info) method. |
| `msgAgeLimit` | `number` |  |
| `msgNumLimit` | `number` |  |
| `rpcTimeout` | `number \| null` |  |
| `service` | `string` |  |
| `timeSyncEndpoint` | `import("./time_sync").TimeSyncEndpoint \| null` |  |

### LoggingHandler.recordLevelToProtoLevel

```ts
static recordLevelToProtoLevel(recordLevel: string, levels?: {
    [x: string]: number;
}): dataBufferProtos.TextMessage.Level
```

Convert a winston level to a TextMessage proto level (Python's record_level_to_proto_level()).

| Parameter | Type | Description |
|---|---|---|
| `recordLevel` | `string` | A level, e.g. 'warn'. |
| `levels` | `{ [x: string]: number; }` | The levels of the logger: the lower, the more severe. (*Optional*, default `LoggerUtil.levels`) |

**Returns** `dataBufferProtos.TextMessage.Level`

### log

```ts
log(info: Object, callback: () => void): void
```

Queue a message: called by winston for the infos of the level of the transport (Python's emit()).

| Parameter | Type | Description |
|---|---|---|
| `info` | `Object` | A winston info. |
| `callback` | `() => void` |  |

### filter

```ts
filter(info: Object): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `info` | `Object` | A winston info. |

**Returns** `boolean`: Whether the info passes all the filters (Python's Filterer.filter()).

### addFilter

```ts
addFilter(filter: (arg0: Object) => boolean | {
    filter: (arg0: Object) => boolean;
}): void
```

| Parameter | Type | Description |
|---|---|---|
| `filter` | `(arg0: Object) => boolean \| { filter: (arg0: Object) => boolean; }` | A filter of the infos. |

### removeFilter

```ts
removeFilter(filter: (arg0: Object) => boolean | {
    filter: (arg0: Object) => boolean;
}): void
```

| Parameter | Type | Description |
|---|---|---|
| `filter` | `(arg0: Object) => boolean \| { filter: (arg0: Object) => boolean; }` | A filter of the infos. |

### flush

```ts
flush(): void
```

Send the queued messages without waiting for the limits.

### close

```ts
close(): Promise<void>
```

Stop the send loop, and make one last attempt to send the queued messages (the ones which cannot be sent are
dumped to stderr). Winston calls it when the transport is removed from its logger.

**Returns** `Promise<void>`: It never rejects: Python raises the errors which are not errors of the SDK.

### isThreadAlive

```ts
isThreadAlive(): boolean
```

**Returns** `boolean`: True if the send loop is running (Python's send thread).

### restart

```ts
restart(dataBufferClient: DataBufferClient): void
```

Restart the send loop.

| Parameter | Type | Description |
|---|---|---|
| `dataBufferClient` | `DataBufferClient` | API client that will send log messages. |

**Throws**

- `assert.AssertionError` The send loop is still running.

### fallbackLog

```ts
fallbackLog(msg: string | dataBufferProtos.TextMessage): void
```

Handle log messages that were failed to be sent by printing to the console (stderr).

| Parameter | Type | Description |
|---|---|---|
| `msg` | `string \| dataBufferProtos.TextMessage` |  |

### recordToMsg

```ts
recordToMsg(info: Object): dataBufferProtos.TextMessage
```

Convert a winston info to a TextMessage proto (Python's record_to_msg()).

| Parameter | Type | Description |
|---|---|---|
| `info` | `Object` | A winston info. |

**Returns** `dataBufferProtos.TextMessage`

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

To ensure all messages have been sent to the best of our ability (`await using`), like the context manager of
Python.

**Returns** `Promise<void>`

## isNotRpc

```ts
export function isNotRpc(info: Object): boolean
```

Identify the logs of the RPCs (their requests and responses) to be able to strip them out (Python checks the module
and the function of the records: common.call and common.call_async).

| Parameter | Type | Description |
|---|---|---|
| `info` | `Object` | A winston info. |

**Returns** `boolean`

## isNotTextLog

```ts
export function isNotTextLog(info: Object): boolean
```

Filter out the RecordTextMessages calls that the handler sends so that we do not go into an infinite loop (Python
checks the name of the logger of the records, which ends with .DataBufferService.RecordTextMessages).

| Parameter | Type | Description |
|---|---|---|
| `info` | `Object` | A winston info. |

**Returns** `boolean`

## logEvent

```ts
export function logEvent(robot: Robot, eventType: string, level: dataBufferProtos.Event.Level, description: string, startTimestampSecs: number | Date, endTimestampSecs?: number | Date, idStr?: string, parameters?: parameterPb.Parameter[], logPreserveHint?: dataBufferProtos.Event.LogPreserveHint): Promise<dataBufferProtos.RecordEventsResponse>
```

Add an Event to the Data Buffer.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | A Robot object. |
| `eventType` | `string` | The type of event. |
| `level` | `dataBufferProtos.Event.Level` | The relative importance of the event. |
| `description` | `string` | A human-readable description of the event. |
| `startTimestampSecs` | `number \| Date` | Start of the event, in local time. |
| `endTimestampSecs` | `number \| Date` | End of the event.  start_timestamp_secs is used if None. (*Optional*) |
| `idStr` | `string` | Unique id for event.  A uuid is generated if None. (*Optional*) |
| `parameters` | `parameterPb.Parameter[]` | Parameters to attach to the event. (*Optional*) |
| `logPreserveHint` | `dataBufferProtos.Event.LogPreserveHint` | Whether event should try to preserve log data. (*Optional*) |

**Returns** `Promise<dataBufferProtos.RecordEventsResponse>`

## makeParameter

```ts
export function makeParameter(label: string, value: boolean | number | bigint | Timestamp | Duration | string, units?: string, notes?: string): parameterPb.Parameter | null
```

Create a parameter proto from a label and the parameter value, like make_parameter() in Python.

| Parameter | Type | Description |
|---|---|---|
| `label` | `string` |  |
| `value` | `boolean \| number \| bigint \| Timestamp \| Duration \| string` | An integer number or a BigInt is an int_value (a JS number cannot be a float of Python like 2.0: it is the integer 2), another number a float_value. |
| `units` | `string` | (*Optional*, default `''`) |
| `notes` | `string` | (*Optional*, default `''`) |

**Returns** `parameterPb.Parameter \| null`: null for another type of value.

**Throws**

- `RangeError` A BigInt beyond 2^53: the int_value of jspb is a number (a BigInt was not a value).

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dataBufferProtos` | `spot-sdk-js/src/bosdyn/api/data_buffer_pb` |
| `parameterPb` | `spot-sdk-js/src/bosdyn/api/parameter_pb` |
