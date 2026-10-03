# bosdyn-core/bddf/data_writer

DataWriter is a class for writing data to a file.

```js
const { DataWriter } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DataWriter`](#datawriter) | Class | Class for writing data to a file. |

## DataWriter

```ts
class DataWriter
```

Class for writing data to a file.

### new DataWriter

```ts
constructor(outfile: any, annotations?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `outfile` | `any` |  |
| `annotations` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `fileIndex` | `FileIndex` | Get the FileIndex proto used which describes how to access data in the file. Read-only. |

### addMessageSeries

```ts
addMessageSeries(seriesType: string, seriesSpec: Object, contentType: string, typeName: string, isMetadata?: boolean, annotations?: Object | null, additionalIndexNames?: string[] | null): number
```

Add a new series for storing message data. Message data is variable-sized binary data.

| Parameter | Type | Description |
|---|---|---|
| `seriesType` | `string` |  |
| `seriesSpec` | `Object` |  |
| `contentType` | `string` |  |
| `typeName` | `string` |  |
| `isMetadata` | `boolean` | (*Optional*) |
| `annotations` | `Object \| null` | (*Optional*) |
| `additionalIndexNames` | `string[] \| null` | (*Optional*) |

**Returns** `number`

### addPodSeries

```ts
addPodSeries(seriesType: string, seriesSpec: Object, typeEnum: PodTypeEnum, dimension?: number[] | null, annotations?: Object | null): number
```

Add a new series for storing data POD data.

| Parameter | Type | Description |
|---|---|---|
| `seriesType` | `string` |  |
| `seriesSpec` | `Object` |  |
| `typeEnum` | `PodTypeEnum` |  |
| `dimension` | `number[] \| null` | (*Optional*) |
| `annotations` | `Object \| null` | (*Optional*) |

**Returns** `number`

### addSeries

```ts
addSeries(seriesType: string, seriesSpec: Object, messageType?: MessageTypeDescriptor | null, podType?: PodTypeDescriptor | null, annotations?: Object | null, additionalIndexNames?: string[] | null): number
```

Register a new series for messages.

| Parameter | Type | Description |
|---|---|---|
| `seriesType` | `string` |  |
| `seriesSpec` | `Object` |  |
| `messageType` | `MessageTypeDescriptor \| null` | (*Optional*) |
| `podType` | `PodTypeDescriptor \| null` | (*Optional*) |
| `annotations` | `Object \| null` | (*Optional*) |
| `additionalIndexNames` | `string[] \| null` | (*Optional*) |

**Returns** `number`

### writeData

```ts
writeData(seriesIndex: number, timestampNsec: bigint | number | string, data: Buffer, additionalIndexes?: Array<bigint | number | string> | null): void
```

Store binary data into the file, under a previously-defined channel.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |
| `timestampNsec` | `bigint \| number \| string` | Nanoseconds since the epoch: exact as a BigInt, rounded to 256 ns as a number. |
| `data` | `Buffer` |  |
| `additionalIndexes` | `Array<bigint \| number \| string> \| null` | The values of the additional indexes of the series (int64, often timestamps in nanoseconds): exact as BigInts or strings, rounded as numbers above 2^53. (*Optional*) |

**Returns** `void`

**Throws**

- `DataFormatError` The additional indexes are not valid for this series.

### runOnClose

```ts
runOnClose(thunk: Function): void
```

Register a function to be called when file is closed, before index is written.

| Parameter | Type | Description |
|---|---|---|
| `thunk` | `Function` |  |

**Returns** `void`

### drain

```ts
drain(): Promise<void>
```

Wait until the file has written its buffered data: see BlockWriter.drain().

**Returns** `Promise<void>`

### close

```ts
close(): Promise<void>
```

Close data writer: the index is written once (two concurrent close() wrote it twice, after the end).

**Returns** `Promise<void>`

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

Closes the writer at the end of `await using`, like the `with DataWriter(...)` of Python.

**Returns** `Promise<void>`
