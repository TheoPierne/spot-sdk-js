# bosdyn-client/server_util

Helper functions and classes for creating and running a gRPC service.

```js
const { GrpcServiceRunner, ResponseContext, populateResponseHeader, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`GrpcServiceRunner`](#grpcservicerunner) | Class | A runner to start a gRPC server and allow easy cleanup, like GrpcServiceRunner of Python (it was missing). |
| [`ResponseContext`](#responsecontext) | Class | Helper to log gRPC request and response message to the data buffer for a service. |
| [`populateResponseHeader`](#populateresponseheader) | Function | Sets the ResponseHeader header in the response. |
| [`stripLargeBytesFields`](#striplargebytesfields) | Function | Removes any large bytes fields from a protobuf message depending on the proto type. |
| [`getBytesFieldAllowlist`](#getbytesfieldallowlist) | Function | Creates set of protos which will have bytes fields removed. |
| [`stripImageResponse`](#stripimageresponse) | Function | Removes bytes from the ImageResponse proto (its image data only, like Python). |
| [`stripGetImageResponse`](#stripgetimageresponse) | Function | Removes bytes from the GetImageResponse proto. |
| [`stripLocalGridResponses`](#striplocalgridresponses) | Function | Removes bytes from the GetLocalGridsResponse proto. |
| [`stripStoreImageRequest`](#stripstoreimagerequest) | Function | Removes bytes from the StoreImageRequest proto. |
| [`stripStoreDataRequest`](#stripstoredatarequest) | Function | Removes bytes from the StoreDataRequest proto. |
| [`stripRecordSignalTick`](#striprecordsignaltick) | Function | Removes bytes from the RecordSignalTicksRequest proto. |
| [`stripRecordDataBlob`](#striprecorddatablob) | Function | Removes bytes from the RecordDataBlobsRequest proto. |

## GrpcServiceRunner

```ts
class GrpcServiceRunner
```

A runner to start a gRPC server and allow easy cleanup, like GrpcServiceRunner of Python (it was missing).

The server starts at construction, like Python, but grpc-js binds its port asynchronously: await waitForStart()
for the port. Python's `with GrpcServiceRunner(...)` is `await using` (Symbol.asyncDispose stops the server).

### new GrpcServiceRunner

```ts
constructor(serviceServicer: Object, addServicerToServerFn: grpc.ServiceDefinition | ((arg0: Object, arg1: grpc.Server) => void), port?: number, maxWorkers?: number, maxSendMessageLength?: number | null, maxReceiveMessageLength?: number | null, timeoutSecs?: number, forceSigintCapture?: boolean, logger?: Object | null, host?: string)
```

| Parameter | Type | Description |
|---|---|---|
| `serviceServicer` | `Object` | Servicer that defines server behavior: the implementation of the service. |
| `addServicerToServerFn` | `grpc.ServiceDefinition \| ((arg0: Object, arg1: grpc.Server) => void)` | The definition of the service to add (e.g. ImageServiceService), or a function that attaches the servicer to the gRPC server, like the add_ImageServiceServicer_to_server() generated for Python. |
| `port` | `number` | The port number the service can be accessed through on the host system. Defaults to 0, which will assign an ephemeral port. (*Optional*, default `0`) |
| `maxWorkers` | `number` | Not used: Node.js runs the handlers on its event loop (a thread pool in Python). (*Optional*, default `4`) |
| `maxSendMessageLength` | `number \| null` | Max message length (bytes) allowed for messages sent. (*Optional*, default `null`) |
| `maxReceiveMessageLength` | `number \| null` | Max message length (bytes) allowed for messages received. (*Optional*, default `null`) |
| `timeoutSecs` | `number` | Number of seconds to wait for a clean server shutdown (not used: the shutdown of grpc-js is immediate). (*Optional*, default `3`) |
| `forceSigintCapture` | `boolean` | Stop runUntilInterrupt() on SIGTERM and SIGQUIT (e.g. docker stop) too, not only on SIGINT. (*Optional*, default `true`) |
| `logger` | `Object \| null` | Logger to log with. (*Optional*, default `null`) |
| `host` | `string` | '] The address to listen on, all the interfaces by default like Python (not in Python). (*Optional*, default `'[::`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `logger` | `Object` |  |
| `maxWorkers` | `number` |  |
| `timeoutSecs` | `number` |  |
| `forceSigintCapture` | `boolean` |  |
| `serverTypeName` | `string` |  |
| `server` | `grpc.Server` |  |
| `port` | `number \| null` |  |

### waitForStart

```ts
waitForStart(): Promise<number>
```

**Returns** `Promise<number>`: The port of the server, once it is started.

### stop

```ts
stop(): Promise<void>
```

Shuts the gRPC server down: the RPCs in progress are cancelled, like stop(None) in Python.

**Returns** `Promise<void>`

### runUntilInterrupt

```ts
runUntilInterrupt(): Promise<void>
```

Wait until a SIGINT, SIGTERM, or SIGQUIT is received (only SIGINT without forceSigintCapture) and then shut
down cleanly. SIGQUIT does not exist on Windows.

**Returns** `Promise<void>`

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

**Returns** `Promise<void>`

## ResponseContext

```ts
class ResponseContext
```

Helper to log gRPC request and response message to the data buffer for a service.

Python's `with ResponseContext(response, request, rpc_logger):` around the handling of an RPC, as run():

  await new ResponseContext(response, request, rpcLogger).run(async () =&gt; {
    // Fill the response.
  });

It logs the request and response to the data buffer, and mutates the headers to add additional information
before logging.

### new ResponseContext

```ts
constructor(response: Message, request: Message, rpcLogger?: DataBufferClient | null, channelPrefix?: string | null, excCallback?: ((arg0: Error) => void) | null)
```

| Parameter | Type | Description |
|---|---|---|
| `response` | `Message` | Any gRPC response message with a bosdyn.api.ResponseHeader proto. |
| `request` | `Message` | Any gRPC request message with a bosdyn.api.RequestHeader proto. |
| `rpcLogger` | `DataBufferClient \| null` | Optional data buffer client to log the messages; if not provided, only the headers will be mutated and nothing will be logged. (*Optional*, default `null`) |
| `channelPrefix` | `string \| null` | The prefix you want this req / resp pair logged under. (*Optional*, default `null`) |
| `excCallback` | `((arg0: Error) => void) \| null` | Called with the error thrown in the context, if any. (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `response` | `import("google-protobuf").Message` |  |
| `request` | `import("google-protobuf").Message` |  |
| `rpcLogger` | `import("./data_buffer").DataBufferClient \| null` |  |
| `channelPrefix` | `string \| null` |  |
| `excCallback` | `((arg0: Error) => void) \| null` |  |

### enter

```ts
enter(): Message
```

Adds a start timestamp to the response header and logs the request RPC (Python's __enter__).

**Returns** `Message`: The response.

### exit

```ts
exit(error?: Error | null): void
```

Updates the header code if unset and logs the response RPC (Python's __exit__).

| Parameter | Type | Description |
|---|---|---|
| `error` | `Error \| null` | The error thrown in the context, if any. (*Optional*, default `null`) |

**Returns** `void`

### run

```ts
run<T>(fn: (arg0: Message) => (T | Promise<T>)): Promise<T>
```

Run fn in the context, like the body of Python's with statement: the error thrown by fn, if any, is thrown again
once the context is exited.

| Parameter | Type | Description |
|---|---|---|
| `fn` | `(arg0: Message) => (T \| Promise<T>)` | Fills the response. |

**Returns** `Promise<T>`

## populateResponseHeader

```ts
export function populateResponseHeader(response: Message, request: Message, errorCode?: headerPb.CommonError.Code, errorMsg?: string): void
```

Sets the ResponseHeader header in the response.

| Parameter | Type | Description |
|---|---|---|
| `response` | `Message` | The GRPC response message to be populated. |
| `request` | `Message` | The header from the request is added to the response. |
| `errorCode` | `headerPb.CommonError.Code` | The status for the RPC response. (*Optional*) |
| `errorMsg` | `string` | An optional error message describing a bad header status failure. (*Optional*) |

**Returns** `void`: Mutates the response message's header to be fully populated.

## stripLargeBytesFields

```ts
export function stripLargeBytesFields(protoMessage: Message): void
```

Removes any large bytes fields from a protobuf message depending on the proto type.

| Parameter | Type | Description |
|---|---|---|
| `protoMessage` | `Message` | The message, modified. |

**Returns** `void`

## getBytesFieldAllowlist

```ts
export function getBytesFieldAllowlist(): Map<Function, (arg0: Message) => void>
```

Creates set of protos which will have bytes fields removed.

**Returns** `Map<Function, (arg0: Message) => void>`: By message type: a Map, since the keys of an object would be the (identical) source code of the constructors.

## stripImageResponse

```ts
export function stripImageResponse(protoMessage: any): void
```

Removes bytes from the ImageResponse proto (its image data only, like Python).

| Parameter | Type | Description |
|---|---|---|
| `protoMessage` | `any` |  |

## stripGetImageResponse

```ts
export function stripGetImageResponse(protoMessage: any): void
```

Removes bytes from the GetImageResponse proto.

| Parameter | Type | Description |
|---|---|---|
| `protoMessage` | `any` |  |

## stripLocalGridResponses

```ts
export function stripLocalGridResponses(protoMessage: any): void
```

Removes bytes from the GetLocalGridsResponse proto.

| Parameter | Type | Description |
|---|---|---|
| `protoMessage` | `any` |  |

## stripStoreImageRequest

```ts
export function stripStoreImageRequest(protoMessage: any): void
```

Removes bytes from the StoreImageRequest proto.

| Parameter | Type | Description |
|---|---|---|
| `protoMessage` | `any` |  |

## stripStoreDataRequest

```ts
export function stripStoreDataRequest(protoMessage: any): void
```

Removes bytes from the StoreDataRequest proto.

| Parameter | Type | Description |
|---|---|---|
| `protoMessage` | `any` |  |

## stripRecordSignalTick

```ts
export function stripRecordSignalTick(protoMessage: any): void
```

Removes bytes from the RecordSignalTicksRequest proto.

| Parameter | Type | Description |
|---|---|---|
| `protoMessage` | `any` |  |

## stripRecordDataBlob

```ts
export function stripRecordDataBlob(protoMessage: any): void
```

Removes bytes from the RecordDataBlobsRequest proto.

| Parameter | Type | Description |
|---|---|---|
| `protoMessage` | `any` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `headerPb` | `spot-sdk-js/src/bosdyn/api/header_pb` |
