# bosdyn-core/bddf/file_indexer

A FileIndexer is an object which keeps an index of series and blocks within series

```js
const { FileIndexer } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`FileIndexer`](#fileindexer) | Class | An object which keeps an index of series and blocks within series. |

## FileIndexer

```ts
class FileIndexer
```

An object which keeps an index of series and blocks within series.
It can write a block index at the end of a data file.

### Properties

| Property | Type | Description |
|---|---|---|
| `fileIndex` | `FileIndex` | Get the FileIndex proto used which describes how to access data in the file. Read-only. |
| `descriptorIndex` | `DescriptorBlock` | Get the Descriptor proto containing the FileIndex. Read-only. |
| `seriesBlockIndexes` | `SeriesBlockIndex[]` | Returns the current array of SeriesBlockIndexes: seriesIndex -&gt; SeriesBlockIndex. Read-only. |

### FileIndexer.seriesIdentifierToHash

```ts
static seriesIdentifierToHash(seriesIdentifier: SeriesIdentifier): string
```

Given a SeriesIdentifier, return a 64-bit hash.

| Parameter | Type | Description |
|---|---|---|
| `seriesIdentifier` | `SeriesIdentifier` |  |

**Returns** `string`

### seriesDescriptor

```ts
seriesDescriptor(seriesIndex: number): SeriesDescriptor
```

Return SeriesDescriptor for given series index

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |

**Returns** `SeriesDescriptor`

### addSeriesDescriptor

```ts
addSeriesDescriptor(seriesDescriptor: SeriesDescriptor, seriesBlockFileOffset: number): void
```

Add the given series_descriptor to the index, with the given file offset.

| Parameter | Type | Description |
|---|---|---|
| `seriesDescriptor` | `SeriesDescriptor` | SeriesDescriptor to add to the index |
| `seriesBlockFileOffset` | `number` | Location in file where SeriesDescriptor will be written, or was read from. |

### addSeries

```ts
addSeries(seriesType: string, seriesSpec: Object, messageType: MessageTypeDescriptor, podType: PodTypeDescriptor, annotations: Object, additionalIndexNames: string[], writer: BlockWriter): number
```

Register a new series for messages for a DataWriter.

| Parameter | Type | Description |
|---|---|---|
| `seriesType` | `string` |  |
| `seriesSpec` | `Object` |  |
| `messageType` | `MessageTypeDescriptor` |  |
| `podType` | `PodTypeDescriptor` |  |
| `annotations` | `Object` |  |
| `additionalIndexNames` | `string[]` |  |
| `writer` | `BlockWriter` |  |

**Returns** `number`

### indexDataBlock

```ts
indexDataBlock(seriesIndex: number, timestampNsec: bigint | number | string, fileOffset: number, nbytes: number, additionalIndexes: string[] | null): void
```

Add an entry to the data block index of the series identified by seriesIndex.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |
| `timestampNsec` | `bigint \| number \| string` | Exact as a BigInt. |
| `fileOffset` | `number` |  |
| `nbytes` | `number` |  |
| `additionalIndexes` | `string[] \| null` | The decimal strings of the int64 values (see makeDataDescriptor()). |

**Returns** `void`

### makeDataDescriptor

```ts
makeDataDescriptor(seriesIndex: number, timestampNsec: bigint | number | string, additionalIndexes: Array<bigint | number | string> | null): DataDescriptor
```

Return DataDescriptor for writing a data block.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |
| `timestampNsec` | `bigint \| number \| string` | Exact as a BigInt. |
| `additionalIndexes` | `Array<bigint \| number \| string> \| null` | The int64 values of the additional indexes of the series, exact as BigInts or strings (the descriptor holds their decimal strings, like the other 64 bits fields). |

**Returns** `DataDescriptor`

**Throws**

- `DataFormatError` The number or a value of the additional indexes is not valid for the series.

### writeIndex

```ts
writeIndex(blockWriter: BlockWriter): void
```

Write all the indexes of the data file, and the file end.

| Parameter | Type | Description |
|---|---|---|
| `blockWriter` | `BlockWriter` |  |
