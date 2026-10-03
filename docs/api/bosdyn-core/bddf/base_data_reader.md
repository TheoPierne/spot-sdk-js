# bosdyn-core/bddf/base_data_reader

BaseDataReader is a shared parent class for DataReader and StreamedDataReader.

```js
const { BaseDataReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`BaseDataReader`](#basedatareader) | Class | Shared parent class for DataReader and StreamedDataReader. |

## BaseDataReader

```ts
class BaseDataReader
```

Shared parent class for DataReader and StreamedDataReader.

### new BaseDataReader

```ts
constructor(fileHandle?: import("node:fs/promises").FileHandle | null, filename?: string | null)
```

| Parameter | Type | Description |
|---|---|---|
| `fileHandle` | `import("node:fs/promises").FileHandle \| null` | (*Optional*) |
| `filename` | `string \| null` | path of input file, if applicable. (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `filename` | `string \| null` | Return input file name, if specified, or null if not. Read-only. |
| `fileDescriptor` | `FileFormatDescriptor \| null` | Return the file descriptor from the start of the file/stream. Read-only. |
| `version` | `FileFormatVersion` | Return file version as a bosdyn.api.FileFormatVersion proto. Read-only. |
| `annotations` | `Map<string, string>` | Return Map{key -&gt; value} for file annotations. Read-only. |
| `fileIndex` | `FileIndex \| null` | Get the FileIndex proto used which describes how to access data in the file. Read-only. |
| `checksum` | `Buffer \| null` | 160-bit checksum read from the end of the file, or null if not yet read. Read-only. |
| `readChecksum` | `Buffer \| null` | Override to compute checksum on reading, in stream-readers. Read-only. |

### BaseDataReader.create

```ts
static create<T extends new (...args: any[]) => any>(this: T, { infile, filename }: {
    infile?: import("node:fs/promises").FileHandle | null;
    filename?: string | null;
}): Promise<InstanceType<T>>
```

| Parameter | Type | Description |
|---|---|---|
| `this` | `T` |  |
| `options` | `{ infile?: import("node:fs/promises").FileHandle \| null; filename?: string \| null; }` |  |

**Returns** `Promise<InstanceType<T>>`

### seriesSpecToIndex

```ts
seriesSpecToIndex(seriesSpec: Object): number
```

Given a series spec (object {key: value}), return the series index for that series.

| Parameter | Type | Description |
|---|---|---|
| `seriesSpec` | `Object` |  |

**Returns** `number`

**Throws**

- `ValueError` Throw ValueError if no such series exists.

### close

```ts
close(): Promise<void>
```

Close data reader file handler

**Returns** `Promise<void>`

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

Closes the reader at the end of `await using`, like the `with DataReader(...)` of Python.

**Returns** `Promise<void>`
