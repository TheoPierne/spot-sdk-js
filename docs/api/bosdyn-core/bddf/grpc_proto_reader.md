# bosdyn-core/bddf/grpc_proto_reader

Reads a particular series of GRPC request or response messages from a bddf file.

```js
const { GrpcProtoReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`GrpcProtoReader`](#grpcprotoreader) | Class | Reads a particular series of GRPC request or response messages from a bddf file. |

## GrpcProtoReader

```ts
class GrpcProtoReader
```

Reads a particular series of GRPC request or response messages from a bddf file.

### new GrpcProtoReader

```ts
constructor(serviceReader: GrpcServiceReader, seriesIndex: number, seriesType: string, protoType: Message, seriesDescriptor: SeriesDescriptor)
```

| Parameter | Type | Description |
|---|---|---|
| `serviceReader` | `GrpcServiceReader` |  |
| `seriesIndex` | `number` |  |
| `seriesType` | `string` |  |
| `protoType` | `Message` |  |
| `seriesDescriptor` | `SeriesDescriptor` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `numMessages` | `Promise<number>` | Number of messages in of the given type. Read-only. |

### getMessage

```ts
getMessage(indexInSeries: number): Promise<[number, Message]>
```

Get a message from the series by its index number in the series.

| Parameter | Type | Description |
|---|---|---|
| `indexInSeries` | `number` |  |

**Returns** `Promise<[number, Message]>`
