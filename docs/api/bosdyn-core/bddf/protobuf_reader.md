# bosdyn-core/bddf/protobuf_reader

A class for reading Protobuf data from a DataFile.

```js
const { ProtobufReader } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`ProtobufReader`](#protobufreader) | Class | A class for reading Protobuf data from a DataFile. |

## ProtobufReader

```ts
class ProtobufReader extends MessageReader
```

A class for reading Protobuf data from a DataFile.

Methods throw ParseError if there is a problem with the format of the file.

### ProtobufReader.create

```ts
static create<T extends new (...args: any[]) => any>(this: T, dataReader: import("./data_reader").DataReader): Promise<InstanceType<T>>
```

Create a reader of the protobuf series of a DataReader, like ProtobufReader(data_reader) in Python.

| Parameter | Type | Description |
|---|---|---|
| `this` | `T` |  |
| `dataReader` | `import("./data_reader").DataReader` |  |

**Returns** `Promise<InstanceType<T>>`

### getMessage

```ts
getMessage(seriesIndex: any, protobufType: any, indexInSeries: any): Promise<any[]>
```

Return a deserialized protobuf from bytes stored in the file.

| Parameter | Type | Description |
|---|---|---|
| `seriesIndex` | `any` |  |
| `protobufType` | `any` |  |
| `indexInSeries` | `any` |  |

**Returns** `Promise<any[]>`
