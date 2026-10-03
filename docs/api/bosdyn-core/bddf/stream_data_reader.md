# bosdyn-core/bddf/stream_data_reader

Data reader which reads the file format from a stream, without seeking.

```js
const { StreamDataReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`StreamDataReader`](#streamdatareader) | Class | Data reader which reads the file format from a stream, without seeking: a FileHandle, a Readable (e.g. |

## StreamDataReader

```ts
class StreamDataReader extends BaseDataReader
```

Data reader which reads the file format from a stream, without seeking: a FileHandle, a Readable (e.g. the body of
an HTTP response) or an async iterable of chunks (the reads were at positions of a FileHandle only).

### new StreamDataReader

```ts
constructor(outfile: any)
```

| Parameter | Type | Description |
|---|---|---|
| `outfile` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `streamFileIndex` | `import("spot-sdk-js/src/bosdyn/api/bddf_pb").FileIndex` | Return the file index as parsed from the stream. Read-only. |
| `seriesBlockIndexes` | `import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesBlockIndex[]` | Returns the current list of SeriesBlockIndexes: seriesIndex -&gt; SeriesBlockIndex. Read-only. |
| `eof` | `boolean` | Returns true if all blocks in the file have been read. Read-only. |

### seriesDescriptor

```ts
seriesDescriptor(seriesIndex: any): import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesDescriptor
```

Return SeriesDescriptor for given series index.

Returns KeyError if no such series exists.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `any` |  |

**Returns** `import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesDescriptor`

### readDataBlock

```ts
readDataBlock(): Promise<(boolean | Buffer<ArrayBufferLike> | import("spot-sdk-js/src/bosdyn/api/bddf_pb").DataDescriptor | import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesDescriptor | import("spot-sdk-js/src/bosdyn/api/bddf_pb").DescriptorBlock)[]>
```

Read and return next data block.

**Returns** `Promise<(boolean \| Buffer<ArrayBufferLike> \| import("spot-sdk-js/src/bosdyn/api/bddf_pb").DataDescriptor \| import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesDescriptor \| import("spot-sdk-js/src/bosdyn/api/bddf_pb").DescriptorBlock)[]>`

### readNextBlock

```ts
readNextBlock(): Promise<(boolean | Buffer<ArrayBufferLike> | import("spot-sdk-js/src/bosdyn/api/bddf_pb").DataDescriptor | import("spot-sdk-js/src/bosdyn/api/bddf_pb").DescriptorBlock)[]>
```

Read and return next block.

**Returns** `Promise<(boolean \| Buffer<ArrayBufferLike> \| import("spot-sdk-js/src/bosdyn/api/bddf_pb").DataDescriptor \| import("spot-sdk-js/src/bosdyn/api/bddf_pb").DescriptorBlock)[]>`

### seriesBlockIndex

```ts
seriesBlockIndex(seriesIndex: number): import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesBlockIndex
```

Returns the SeriesBlockIndexes for the given seriesIndex.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `number` |  |

**Returns** `import("spot-sdk-js/src/bosdyn/api/bddf_pb").SeriesBlockIndex`
