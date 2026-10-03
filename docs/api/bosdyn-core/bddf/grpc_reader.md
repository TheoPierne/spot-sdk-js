# bosdyn-core/bddf/grpc_reader

A class for reading GRPC data from a DataFile.

```js
const { GrpcReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`GrpcReader`](#grpcreader) | Class | A class for reading GRPC data from a DataFile. |

## GrpcReader

```ts
class GrpcReader
```

A class for reading GRPC data from a DataFile.

Methods throw ParseError if there is a problem with the format of the file.

### new GrpcReader

```ts
constructor(dataReader: any)
```

| Parameter | Type | Description |
|---|---|---|
| `dataReader` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `dataReader` | `any` | Return underlying DataReader this object is using. Read-only. |

### GrpcReader.create

```ts
static create<T extends new (...args: any[]) => any>(this: T, dataReader: import("./data_reader").DataReader, protobufClasses: any[]): Promise<InstanceType<T>>
```

| Parameter | Type | Description |
|---|---|---|
| `this` | `T` |  |
| `dataReader` | `import("./data_reader").DataReader` |  |
| `protobufClasses` | `any[]` |  |

**Returns** `Promise<InstanceType<T>>`

### getProtoReader

```ts
getProtoReader(protoName: string): import("./grpc_proto_reader").GrpcProtoReader
```

Return the GrpcProtoReader for protobuf messages with the specified type name.

| Parameter | Type | Description |
|---|---|---|
| `protoName` | `string` |  |

**Returns** `import("./grpc_proto_reader").GrpcProtoReader`

### getMessage

```ts
getMessage(seriesIndex: any, indexInSeries: any): any
```

Return a deserialized protobuf from bytes stored in the file.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `any` |  |
| `indexInSeries` | `any` |  |

**Returns** `any`
