# bosdyn-client/data_chunk

Splits serialized messages into DataChunk messages for the streaming RPCs, and assembles them back.

```js
const { splitSerialized, chunkSerialized, chunkMessage, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`splitSerialized`](#splitserialized) | Function | Split a byte string into appropriately-sized chunks. |
| [`chunkSerialized`](#chunkserialized) | Function | Yield DataChunks for the given bytes. |
| [`chunkMessage`](#chunkmessage) | Function | Take a message, and split it into data chunks |
| [`parseFromChunks`](#parsefromchunks) | Function | Parse out a message from chunks. |
| [`serializedFromChunks`](#serializedfromchunks) | Function | Assemble from data chunks directly without wrapper messages. |
| [`serializedFromMessages`](#serializedfrommessages) | Function | Assemble from messages that define a DataChunk chunk field. |
| [`serializedFromStrings`](#serializedfromstrings) | Function | Concatenate bytes together, like serialized_from_strings() in Python. |

## splitSerialized

```ts
export function splitSerialized(serialized: Buffer | any[] | string, dataChunkByteSize: number): Generator<string | any[] | Buffer<ArrayBuffer>, void, unknown>
```

Split a byte string into appropriately-sized chunks.

| Parameter | Type | Description |
|---|---|---|
| `serialized` | `Buffer \| any[] \| string` | Data to split into chunks |
| `dataChunkByteSize` | `number` | The chunk size in bytes |

**Returns** `Generator<string \| any[] \| Buffer<ArrayBuffer>, void, unknown>`

## chunkSerialized

```ts
export function chunkSerialized(serialized: Buffer | any[] | string, dataChunkByteSize: number): Generator<dataChunkPb.DataChunk, void, unknown>
```

Yield DataChunks for the given bytes.

| Parameter | Type | Description |
|---|---|---|
| `serialized` | `Buffer \| any[] \| string` | Data to split into chunks |
| `dataChunkByteSize` | `number` | The chunk size in bytes |

**Returns** `Generator<dataChunkPb.DataChunk, void, unknown>`

## chunkMessage

```ts
export function chunkMessage(message: any, dataChunkByteSize: number): Generator<dataChunkPb.DataChunk>
```

Take a message, and split it into data chunks

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` | A GRPC message |
| `dataChunkByteSize` | `number` | Max size of each streamed message |

**Returns** `Generator<dataChunkPb.DataChunk>`

## parseFromChunks

```ts
export function parseFromChunks<M>(iterableChunks: Iterable<any>, outMsg: M): M
```

Parse out a message from chunks.

| Parameter | Type | Description |
|---|---|---|
| `iterableChunks` | `Iterable<any>` | DataChunks, or messages with a DataChunk `chunk` field. |
| `outMsg` | `M` | The message class to create, or a message instance to fill (like Python's parse_from_chunks). |

**Returns** `M`

## serializedFromChunks

```ts
export function serializedFromChunks(iterableChunks: Iterable<any>): Buffer
```

Assemble from data chunks directly without wrapper messages.

| Parameter | Type | Description |
|---|---|---|
| `iterableChunks` | `Iterable<any>` | A GRPC message |

**Returns** `Buffer`

## serializedFromMessages

```ts
export function serializedFromMessages(iterableMessages: Iterable<any>): Buffer
```

Assemble from messages that define a DataChunk chunk field.

| Parameter | Type | Description |
|---|---|---|
| `iterableMessages` | `Iterable<any>` | A GRPC message |

**Returns** `Buffer`

## serializedFromStrings

```ts
export function serializedFromStrings(iterableStrings: Iterable<Uint8Array | string>): Buffer
```

Concatenate bytes together, like serialized_from_strings() in Python.

| Parameter | Type | Description |
|---|---|---|
| `iterableStrings` | `Iterable<Uint8Array \| string>` | The bytes, e.g. the data of DataChunks: any iterable, like Python (it had to be an array). A string is the base64 of bytes, like the bytes fields of jspb (it was read as UTF-8). |

**Returns** `Buffer`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dataChunkPb` | `spot-sdk-js/src/bosdyn/api/data_chunk_pb` |
