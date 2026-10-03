# bosdyn-core/bddf/protobuf_series_writer

Class for registering a series which stores protobuf messages in a message series.

```js
const { ProtobufSeriesWriter } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`ProtobufSeriesWriter`](#protobufserieswriter) | Class | A class for registering a series which stores protobuf messages in a message series. |

## ProtobufSeriesWriter

```ts
class ProtobufSeriesWriter
```

A class for registering a series which stores protobuf messages in a message series.

The series is named by a 'channel_name' which defaults to the full type name of the protobuf type.

### new ProtobufSeriesWriter

```ts
constructor(dataWriter: any, protobufType: any, channelName?: null, isMetadata?: boolean, annotations?: null, additionalIndexNames?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `dataWriter` | `any` |  |
| `protobufType` | `any` |  |
| `channelName` | `null` | (*Optional*) |
| `isMetadata` | `boolean` | (*Optional*) |
| `annotations` | `null` | (*Optional*) |
| `additionalIndexNames` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `seriesType` | `string` | Return the series type string. Read-only. |
| `seriesSpec` | `{ 'bosdyn:channel': string; }` | Return the seriesSpec for the series. Read-only. |

### write

```ts
write(timestampNsec: bigint | number | string, protobuf: import("google-protobuf").Message, additionalIndexes?: Array<bigint | number | string> | null): void
```

Store protobuf in the file.

| Parameter | Type | Description |
|---|---|---|
| `timestampNsec` | `bigint \| number \| string` | Nanoseconds since the Unix epoch: exact as a BigInt. |
| `protobuf` | `import("google-protobuf").Message` | A protobuf message, not serialized. |
| `additionalIndexes` | `Array<bigint \| number \| string> \| null` | The values of the additional indexes of the series (int64, e.g. other timestamps in nanoseconds): exact as BigInts or strings. (*Optional*, default `null`) |

**Throws**

- `import('./common').DataFormatError` The additional indexes are not valid for this series.
