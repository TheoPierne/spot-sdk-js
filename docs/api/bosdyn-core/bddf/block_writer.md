# bosdyn-core/bddf/block_writer

BlockWriter writes basic data structures in the bddf file.

```js
const { BlockWriter } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`BlockWriter`](#blockwriter) | Class | Writes data structures in the data file. |

## BlockWriter

```ts
class BlockWriter
```

Writes data structures in the data file.

### new BlockWriter

```ts
constructor(outfile: WriteStream)
```

| Parameter | Type | Description |
|---|---|---|
| `outfile` | `WriteStream` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `closed` | `boolean` | Check if the write stream is closed Read-only. |

### bytesWritten

```ts
bytesWritten(): number
```

Number of bytes written

**Returns** `number`

### writeDescriptorBlock

```ts
writeDescriptorBlock(block: bddf_pb.DescriptorBlock): void
```

Write a DescriptorBlock to the file.

| Parameter | Type | Description |
|---|---|---|
| `block` | `bddf_pb.DescriptorBlock` |  |

**Returns** `void`

### writeDataBlock

```ts
writeDataBlock(block: bddf_pb.DataDescriptor, data: Buffer): void
```

Write a block of data to the file.

| Parameter | Type | Description |
|---|---|---|
| `block` | `bddf_pb.DataDescriptor` |  |
| `data` | `Buffer` |  |

**Returns** `void`

### drain

```ts
drain(): Promise<void>
```

Wait until the stream has written its buffered data (the backpressure): the writes do not wait, like the file
writes of Python, and a stream buffers all of them in memory.

**Returns** `Promise<void>`

**Throws**

- `Error` The error of the stream.

### close

```ts
close(): Promise<void>
```

Close the write stream

**Returns** `Promise<void>`

**Throws**

- `Error` The error of the stream.

### writeHeader

```ts
writeHeader(annotations: Object): void
```

Write the header of the data file, including annotations.

| Parameter | Type | Description |
|---|---|---|
| `annotations` | `Object` | An object of annotation ex: { spot: 'aaa' } |

**Returns** `void`

### writeFileEnd

```ts
writeFileEnd(indexOffset: number): void
```

Write the end of the data file.

| Parameter | Type | Description |
|---|---|---|
| `indexOffset` | `number` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `bddf_pb` | `spot-sdk-js/src/bosdyn/api/bddf_pb` |
