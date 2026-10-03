# bosdyn-core/bddf/protobuf_channel_reader

A class for reading a single channel of Protobuf data from a DataFile.

```js
const { ProtobufChannelReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`ProtobufChannelReader`](#protobufchannelreader) | Class | A class for reading a single channel of Protobuf data from a DataFile. |

## ProtobufChannelReader

```ts
class ProtobufChannelReader
```

A class for reading a single channel of Protobuf data from a DataFile.

### new ProtobufChannelReader

```ts
constructor(protobufReader: any, protobufType: any, channelName?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `protobufReader` | `any` |  |
| `protobufType` | `any` |  |
| `channelName` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `seriesDescriptor` | `Promise<import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesDescriptor>` | The SeriesDescriptor of the channel. Read-only. |
| `numMessages` | `Promise<number>` | Number of messages in this series. Read-only. |

### ProtobufChannelReader.create

```ts
static create<T extends new (...args: any[]) => any>(this: T, protobufReader: import("./protobuf_reader").ProtobufReader, protobufType: Function, channelName?: string | null): Promise<InstanceType<T>>
```

| Parameter | Type | Description |
|---|---|---|
| `this` | `T` |  |
| `protobufReader` | `import("./protobuf_reader").ProtobufReader` |  |
| `protobufType` | `Function` | The class of the messages. |
| `channelName` | `string \| null` | The full name of the type by default. (*Optional*) |

**Returns** `Promise<InstanceType<T>>`

### getMessage

```ts
getMessage(indexInSeries: any): Promise<any[]>
```

Get the specified message in the series, as a deserialized protobuf.

| Parameter | Type | Description |
|---|---|---|
| `indexInSeries` | `any` |  |

**Returns** `Promise<any[]>`

### iterate

```ts
iterate(): Iterator
```

**Returns** `Iterator`

### [Symbol.asyncIterator]

```ts
[Symbol.asyncIterator](): AsyncGenerator<any[], void, unknown>
```

The [timestamp, message] of the channel: for await (const [timestamp, message] of channelReader).

**Returns** `AsyncGenerator<any[], void, unknown>`
