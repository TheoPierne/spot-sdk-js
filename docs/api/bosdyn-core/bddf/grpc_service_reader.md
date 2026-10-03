# bosdyn-core/bddf/grpc_service_reader

A container for the GrpcProtoReaders associated with a given service in a bddf file.

```js
const { GrpcServiceReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`GrpcServiceReader`](#grpcservicereader) | Class | A container for the GrpcProtoReaders associated with a given service in a bddf file. |

## GrpcServiceReader

```ts
class GrpcServiceReader
```

A container for the GrpcProtoReaders associated with a given service in a bddf file.

### new GrpcServiceReader

```ts
constructor(grpcReader: any, serviceName: any)
```

| Parameter | Type | Description |
|---|---|---|
| `grpcReader` | `any` |  |
| `serviceName` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `dataReader` | `any` | Accessor for the DataReader used by this object. Read-only. |

### getProtoReader

```ts
getProtoReader(typeName: any): any
```

Returns a GrpcProtoReader for messages with the specified protobuf type name.

| Parameter | Type | Description |
|---|---|---|
| `typeName` | `any` |  |

**Returns** `any`

### addProtoReader

```ts
addProtoReader(seriesIndex: any, protoType: any, seriesType: any, seriesDescriptor: any): GrpcProtoReader
```

Create and return a GrpcProtoReader for the given series in the bddf file.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `any` |  |
| `protoType` | `any` |  |
| `seriesType` | `any` |  |
| `seriesDescriptor` | `any` |  |

**Returns** `GrpcProtoReader`
