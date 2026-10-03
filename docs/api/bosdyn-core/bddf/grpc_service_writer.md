# bosdyn-core/bddf/grpc_service_writer

GrpcSeriesWriter is a class for registering a series which stores GRPC request/response pairs.

```js
const { GrpcServiceWriter } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`GrpcServiceWriter`](#grpcservicewriter) | Class | A class for logging GRPC request and response messages. |

## GrpcServiceWriter

```ts
class GrpcServiceWriter
```

A class for logging GRPC request and response messages.

### new GrpcServiceWriter

```ts
constructor(dataWriter: any, serviceName: any)
```

| Parameter | Type | Description |
|---|---|---|
| `dataWriter` | `any` |  |
| `serviceName` | `any` |  |

### logRequest

```ts
logRequest(protobuf: any): void
```

Store request protobuf in the file.

| Parameter | Type | Description |
|---|---|---|
| `protobuf` | `any` |  |

### logResponse

```ts
logResponse(protobuf: any): void
```

Store response protobuf in the file.

| Parameter | Type | Description |
|---|---|---|
| `protobuf` | `any` |  |
