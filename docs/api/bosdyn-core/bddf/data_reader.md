# bosdyn-core/bddf/data_reader

Class for reading data from a file-like object which is seekable.

```js
const { DataReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DataReader`](#datareader) | Class | Class for reading data from a file-like object which is seekable. |

## DataReader

```ts
class DataReader extends BaseDataReader
```

Class for reading data from a file-like object which is seekable.

### new DataReader

```ts
constructor(infile?: null, filename?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `infile` | `null` | (*Optional*) |
| `filename` | `null` | (*Optional*) |

### DataReader.create

```ts
static create<T extends new (...args: any[]) => any>(this: T, { infile, filename }?: {
    infile?: import("node:fs/promises").FileHandle | null;
    filename?: string | null;
}): Promise<InstanceType<T>>
```

Create a DataReader and load the file index.

| Parameter | Type | Description |
|---|---|---|
| `this` | `T` |  |
| `options` | `{ infile?: import("node:fs/promises").FileHandle \| null; filename?: string \| null; }` | (*Optional*) |

**Returns** `Promise<InstanceType<T>>`

### seriesDescriptor

```ts
seriesDescriptor(seriesIndex: number): Promise<SeriesDescriptor>
```

Return SeriesDescriptor for given series index, loading it if necessary.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |

**Returns** `Promise<SeriesDescriptor>`

### numDataBlocks

```ts
numDataBlocks(seriesIndex: number): Promise<number>
```

Returns the number of data blocks for a given series in the file.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |

**Returns** `Promise<number>`

### totalBytes

```ts
totalBytes(seriesIndex: number): Promise<number>
```

Returns the total number of bytes for data in a given series in the file.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |

**Returns** `Promise<number>`

### read

```ts
read(seriesIndex: number, indexInSeries: number): Promise<[DataDescriptor, bigint, Buffer]>
```

Retrieves a message and related information from the file.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` | Selecting from which series to read the message. |
| `indexInSeries` | `number` | The index number of the message within the channel. |

**Returns** `Promise<[DataDescriptor, bigint, Buffer]>`: The nanoseconds since the epoch are exact, like the integers of Python (a number was rounded to 256 ns).

### seriesBlockIndex

```ts
seriesBlockIndex(seriesIndex: number): Promise<SeriesBlockIndex>
```

Returns the SeriesBlockIndexes for the given series_index, loading it as needed.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |

**Returns** `Promise<SeriesBlockIndex>`
