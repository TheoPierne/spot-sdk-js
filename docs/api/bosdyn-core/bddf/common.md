# bosdyn-core/bddf/common

Basic constants and structures for parsing/writing bddf.

```js
const { SeriesIdentifier, packPodValues, unpackPodValues, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { ParseError } = require('spot-sdk-js/src/bosdyn-core/bddf/common');
```

| Export | Kind | Description |
|---|---|---|
| [`SeriesIdentifier`](#seriesidentifier) | Class | Base class for series identifier names. |
| [`packPodValues`](#packpodvalues) | Function | The little-endian bytes of POD values, like struct.pack() in Python. |
| [`unpackPodValues`](#unpackpodvalues) | Function | The POD values of little-endian bytes, like struct.unpack() in Python. |
| [`MAGIC`](#constants) | Constant | These are the first 4 bytes at the start of the file. |
| [`END_MAGIC`](#constants) | Constant | These are the last 4 bytes at the end of the file. |
| [`BLOCK_HEADER_SIZE_MASK`](#constants) | Constant |  |
| [`BLOCK_HEADER_TYPE_MASK`](#constants) | Constant |  |
| [`DATA_BLOCK_TYPE`](#constants) | Constant | First 4 bits of the block-header for a data block |
| [`DESCRIPTOR_BLOCK_TYPE`](#constants) | Constant | First 4 bits of the block-header for a descriptor block |
| [`END_BLOCK_TYPE`](#constants) | Constant | First 4 bits of the block-header for end-of-file material |
| [`PROTOBUF_CONTENT_TYPE`](#constants) | Constant |  |
| [`SHA1_DIGEST_NBYTES`](#constants) | Constant |  |
| [`INDEX_OFFSET_OFFSET`](#constants) | Constant |  |
| [`LOGGER`](#constants) | Constant |  |
| [`POD_TYPE_TO_STRUCT`](#constants) | Constant |  |
| [`POD_TYPE_TO_NUM_BYTES`](#constants) | Constant |  |
| [`DataError`](#dataerror) | Class | Exception raised for errors in the input: the parent of ChecksumError, DataFormatError and ParseError. |
| [`AddSeriesError`](#addserieserror) | Class | Errors related to registering a series in a DataWriter. |
| [`SeriesNotUniqueError`](#seriesnotuniqueerror) | Class | The seriesSpec is not unique within the file. |
| [`ChecksumError`](#checksumerror) | Class | The file checksum does not match the computed value. |
| [`DataFormatError`](#dataformaterror) | Class | Data to be stored has the wrong format. |
| [`EOFError`](#eoferror) | Class | The end of the file (normal, or unexpected), like EOFError in Python (it was a TypeError). |
| [`ParseError`](#parseerror) | Class | Data file has incorrect format. |

## DataError

```ts
class DataError extends Error
```

Exception raised for errors in the input: the parent of ChecksumError, DataFormatError and ParseError.

### new DataError

```ts
constructor(message: any)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

## AddSeriesError

```ts
class AddSeriesError extends Error
```

Errors related to registering a series in a DataWriter.

### new AddSeriesError

```ts
constructor(message: any)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

## SeriesNotUniqueError

```ts
class SeriesNotUniqueError extends AddSeriesError
```

The seriesSpec is not unique within the file.

## ChecksumError

```ts
class ChecksumError extends DataError
```

The file checksum does not match the computed value.

## DataFormatError

```ts
class DataFormatError extends DataError
```

Data to be stored has the wrong format.

## EOFError

```ts
class EOFError extends Error
```

The end of the file (normal, or unexpected), like EOFError in Python (it was a TypeError).

### new EOFError

```ts
constructor(message: any)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

## ParseError

```ts
class ParseError extends DataError
```

Data file has incorrect format.

## SeriesIdentifier

```ts
class SeriesIdentifier
```

Base class for series identifier names.

### Properties

| Property | Type | Description |
|---|---|---|
| `SERIES_TYPE` | `string` | Static. Value: `''`. |
| `KEYS` | `any[]` | Static. |

## packPodValues

```ts
export function packPodValues(podType: bddf_pb.PodTypeEnum, values: Array<number | bigint>): Buffer
```

The little-endian bytes of POD values, like struct.pack() in Python.

| Parameter | Type | Description |
|---|---|---|
| `podType` | `bddf_pb.PodTypeEnum` |  |
| `values` | `Array<number \| bigint>` |  |

**Returns** `Buffer`

**Throws**

- `RangeError` A value is not an integer of the type (the struct.error of Python).

## unpackPodValues

```ts
export function unpackPodValues(podType: bddf_pb.PodTypeEnum, data: Uint8Array): Array<number | bigint>
```

The POD values of little-endian bytes, like struct.unpack() in Python.

| Parameter | Type | Description |
|---|---|---|
| `podType` | `bddf_pb.PodTypeEnum` |  |
| `data` | `Uint8Array` |  |

**Returns** `Array<number \| bigint>`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `MAGIC` | `Buffer` | These are the first 4 bytes at the start of the file. |
| `END_MAGIC` | `Buffer` | These are the last 4 bytes at the end of the file. The little-endian 8 byte offset of the FileIndex Descriptor Block is written immediately before this (-12 byte offset from the end of the file). |
| `BLOCK_HEADER_SIZE_MASK` | `Long` |  |
| `BLOCK_HEADER_TYPE_MASK` | `Long` |  |
| `DATA_BLOCK_TYPE` | `0` | First 4 bits of the block-header for a data block |
| `DESCRIPTOR_BLOCK_TYPE` | `1` | First 4 bits of the block-header for a descriptor block |
| `END_BLOCK_TYPE` | `2` | First 4 bits of the block-header for end-of-file material |
| `PROTOBUF_CONTENT_TYPE` | `'application/protobuf'` |  |
| `SHA1_DIGEST_NBYTES` | `20` |  |
| `INDEX_OFFSET_OFFSET` | `32` |  |
| `LOGGER` | `import("winston").Logger` |  |
| `POD_TYPE_TO_STRUCT` | `{ 1: 'b', 2: 'h', 3: 'i', 4: 'q', 5: 'B', 6: 'H', 7: 'I', 8: 'Q', 9: 'f', 10: 'd' }` |  |
| `POD_TYPE_TO_NUM_BYTES` | `{ 1: 1, 2: 2, 3: 4, 4: 8, 5: 1, 6: 2, 7: 4, 8: 8, 9: 4, 10: 8 }` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `bddf_pb` | `spot-sdk-js/src/bosdyn/api/bddf_pb` |
