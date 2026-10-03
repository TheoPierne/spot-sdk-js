# bosdyn-core/bddf/pod_series_writer

Assists with writing POD data values into a series, within a DataWriter.

```js
const { PodSeriesWriter } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`PodSeriesWriter`](#podserieswriter) | Class | A class to assist with writing POD data values into a series, within a DataWriter. |

## PodSeriesWriter

```ts
class PodSeriesWriter
```

A class to assist with writing POD data values into a series, within a DataWriter.

### new PodSeriesWriter

```ts
constructor(dataWriter: any, seriesType: any, seriesSpec: any, podType: any, dimensions?: null, annotations?: null, dataBlockSize?: number)
```

| Parameter | Type | Description |
|---|---|---|
| `dataWriter` | `any` |  |
| `seriesType` | `any` |  |
| `seriesSpec` | `any` |  |
| `podType` | `any` |  |
| `dimensions` | `null` | (*Optional*) |
| `annotations` | `null` | (*Optional*) |
| `dataBlockSize` | `number` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `seriesType` | `string` | Return the seriesType (string) with which the series was registered. Read-only. |
| `seriesSpec` | `any` | Return the seriesSpec ({key -&gt; value}) with which the series was registered. Read-only. |

### write

```ts
write(timestampNsec: bigint | number | string, sample: number | bigint | any[] | ArrayBufferView): void
```

Add sample to data block, and write block if block is full.

| Parameter | Type | Description |
|---|---|---|
| `timestampNsec` | `bigint \| number \| string` | nsec since unix epoch to timestamp the data |
| `sample` | `number \| bigint \| any[] \| ArrayBufferView` | The values of the sample (nested arrays for several dimensions), a single value for a series without dimension. |

**Throws**

- `DataFormatError` The sample does not have the values of the series.

### finishBlock

```ts
finishBlock(): void
```

If there are samples which haven't been written to the file, write them now.
