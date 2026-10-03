# bosdyn-core/bddf/pod_series_reader

A class for reading a series of POD data from a DataFile.

```js
const { PodSeriesReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`PodSeriesReader`](#podseriesreader) | Class | A class for reading a series of POD data from a DataFile. |

## PodSeriesReader

```ts
class PodSeriesReader
```

A class for reading a series of POD data from a DataFile.

Methods throw ParseError if there is a problem with the format of the file.

### new PodSeriesReader

```ts
constructor(dataReader: import("./data_reader").DataReader)
```

| Parameter | Type | Description |
|---|---|---|
| `dataReader` | `import("./data_reader").DataReader` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `podType` | `any` | Return the PodTypeDescriptor for the series. Read-only. |
| `seriesDescriptor` | `any` | Return the SeriesDescriptor for the series. Read-only. |
| `numDataBlocks` | `Promise<number>` | Number of data blocks in this series. Read-only. |

### PodSeriesReader.create

```ts
static create<T extends new (...args: any[]) => any>(this: T, dataReader: import("./data_reader").DataReader, seriesSpec: {
    [x: string]: string;
}): Promise<InstanceType<T>>
```

| Parameter | Type | Description |
|---|---|---|
| `this` | `T` |  |
| `dataReader` | `import("./data_reader").DataReader` |  |
| `seriesSpec` | `{ [x: string]: string; }` |  |

**Returns** `Promise<InstanceType<T>>`

### readSamples

```ts
readSamples(indexInSeries: number): Promise<[bigint, any[]]>
```

Return the POD data values from the data block of the given index.

| Parameter | Type | Description |
|---|---|---|
| `indexInSeries` | `number` |  |

**Returns** `Promise<[bigint, any[]]>`: The nanoseconds since the epoch, and the values of the samples (BigInt for the 64 bits integers).
