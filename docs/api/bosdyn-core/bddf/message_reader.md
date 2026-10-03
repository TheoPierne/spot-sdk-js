# bosdyn-core/bddf/message_reader

A class for reading message data from a DataFile.

```js
const { MessageReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`MessageReader`](#messagereader) | Class | A class for reading message data from a DataFile. |

## MessageReader

```ts
class MessageReader
```

A class for reading message data from a DataFile.

Methods throw ParseError if there is a problem with the format of the file.

### new MessageReader

```ts
constructor(dataReader: any)
```

| Parameter | Type | Description |
|---|---|---|
| `dataReader` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `dataReader` | `import("./data_reader").DataReader` | Return underlying DataReader this object is using. Read-only. |
| `channelNameToSeriesDescriptor` | `{}` | Return a mapping of {channel name -&gt; series descriptor} for message series. Read-only. |

### MessageReader.create

```ts
static create<T extends new (...args: any[]) => any>(this: T, dataReader: import("./data_reader").DataReader, requireProtobuf?: boolean): Promise<InstanceType<T>>
```

| Parameter | Type | Description |
|---|---|---|
| `this` | `T` |  |
| `dataReader` | `import("./data_reader").DataReader` |  |
| `requireProtobuf` | `boolean` | (*Optional*) |

**Returns** `Promise<InstanceType<T>>`

### seriesIndex

```ts
seriesIndex(channelName: any, messageType?: null): Promise<any>
```

Return series index (int) to access SeriesDescriptors and messages.

| Parameter | Type | Description |
|---|---|---|
| `channelName` | `any` |  |
| `messageType` | `null` | (*Optional*) |

**Returns** `Promise<any>`

### seriesIndexToDescriptor

```ts
seriesIndexToDescriptor(seriesIndex: number): Promise<import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesDescriptor>
```

Given a series index, return the associated SeriesDescriptor. Python reads file_index.series_descriptor, which does
not exist (an AttributeError): the SeriesDescriptor of the DataReader, as documented (the SeriesIdentifier was
returned).

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` | index from the seriesIndex() call |

**Returns** `Promise<import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesDescriptor>`

### getBlob

```ts
getBlob(seriesIndex: any, indexInSeries: any): Promise<[import("spot-sdk-js/src/bosdyn/api/bddf_pb").DataDescriptor, bigint, Buffer<ArrayBufferLike>]>
```

Return binary data from message stored in the file.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `any` |  |
| `indexInSeries` | `any` |  |

**Returns** `Promise<[import("spot-sdk-js/src/bosdyn/api/bddf_pb").DataDescriptor, bigint, Buffer<ArrayBufferLike>]>`
