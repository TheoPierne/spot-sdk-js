# bosdyn-core/json_format

Converts protobuf messages to JSON and to plain objects, like google.protobuf.json_format in Python.

```js
const { messageToDict, messageToJson, JsonFormatError, ... } = require('spot-sdk-js').jsonFormat;
```

| Export | Kind | Description |
|---|---|---|
| [`messageToDict`](#messagetodict) | Function | Converts a protobuf message to a plain object, like MessageToDict() in Python: once encoded to JSON, it conforms to the proto3 JSON specification. |
| [`messageToJson`](#messagetojson) | Function | Converts a protobuf message to JSON format, like MessageToJson() in Python. |
| [`JsonFormatError`](#jsonformaterror) | Class | Top-level module error for json_format. |
| [`SerializeToJsonError`](#serializetojsonerror) | Class | Thrown if serialization to JSON fails. |

## JsonFormatError

```ts
class JsonFormatError extends Error
```

Top-level module error for json_format.

### new JsonFormatError

```ts
constructor(message: any)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

## SerializeToJsonError

```ts
class SerializeToJsonError extends JsonFormatError
```

Thrown if serialization to JSON fails.

## messageToDict

```ts
export function messageToDict(message: import("google-protobuf").Message, { alwaysPrintFieldsWithNoPresence, preservingProtoFieldName, useIntegersForEnums, floatPrecision, }?: {
    alwaysPrintFieldsWithNoPresence?: boolean | undefined;
    preservingProtoFieldName?: boolean | undefined;
    useIntegersForEnums?: boolean | undefined;
    floatPrecision?: number | null | undefined;
}): Object
```

Converts a protobuf message to a plain object, like MessageToDict() in Python: once encoded to JSON, it conforms
to the proto3 JSON specification.

| Parameter | Type | Description |
|---|---|---|
| `message` | `import("google-protobuf").Message` | The protocol buffers message instance to serialize. |
| `options` | `{ alwaysPrintFieldsWithNoPresence?: boolean \| undefined; preservingProtoFieldName?: boolean \| undefined; useIntegersForEnums?: boolean \| undefined; floatPrecision?: number \| null \| undefined; }` | (*Optional*) |
| `options.alwaysPrintFieldsWithNoPresence` | `boolean` | See messageToJson(). (*Optional*, default `false`) |
| `options.preservingProtoFieldName` | `boolean` | See messageToJson(). (*Optional*, default `false`) |
| `options.useIntegersForEnums` | `boolean` | See messageToJson(). (*Optional*, default `false`) |
| `options.floatPrecision` | `?number` | See messageToJson(). (*Optional*, default `null`) |

**Returns** `Object`: A plain object representation of the protocol buffer message.

**Throws**

- `SerializeToJsonError` A field cannot be converted.

## messageToJson

```ts
export function messageToJson(message: import("google-protobuf").Message, { preservingProtoFieldName, indent, sortKeys, useIntegersForEnums, floatPrecision, ensureAscii, alwaysPrintFieldsWithNoPresence, }?: {
    preservingProtoFieldName?: boolean | undefined;
    indent?: string | number | null | undefined;
    sortKeys?: boolean | undefined;
    useIntegersForEnums?: boolean | undefined;
    floatPrecision?: number | null | undefined;
    ensureAscii?: boolean | undefined;
    alwaysPrintFieldsWithNoPresence?: boolean | undefined;
}): string
```

Converts a protobuf message to JSON format, like MessageToJson() in Python.

| Parameter | Type | Description |
|---|---|---|
| `message` | `import("google-protobuf").Message` | The protocol buffers message instance to serialize. |
| `options` | `{ preservingProtoFieldName?: boolean \| undefined; indent?: string \| number \| null \| undefined; sortKeys?: boolean \| undefined; useIntegersForEnums?: boolean \| undefined; floatPrecision?: number \| null \| undefined; ensureAscii?: boolean \| undefined; alwaysPrintFieldsWithNoPresence?: boolean \| undefined; }` | (*Optional*) |
| `options.preservingProtoFieldName` | `boolean` | Use the original proto field names as defined in the .proto file, instead of their lowerCamelCase names. (*Optional*, default `false`) |
| `options.indent` | `?(number\|string)` | The JSON object is pretty-printed with this indent level. An indent level of 0 or negative only inserts newlines. If null, no newlines are inserted. (*Optional*, default `2`) |
| `options.sortKeys` | `boolean` | Sort the output by field names. (*Optional*, default `false`) |
| `options.useIntegersForEnums` | `boolean` | Print integers instead of enum names. (*Optional*, default `false`) |
| `options.floatPrecision` | `?number` | The number of significant digits of the float fields. (*Optional*, default `null`) |
| `options.ensureAscii` | `boolean` | Escape the non-ASCII characters of the strings. (*Optional*, default `true`) |
| `options.alwaysPrintFieldsWithNoPresence` | `boolean` | Always serialize the fields without presence (implicit presence scalars, repeated fields, and map fields). (*Optional*, default `false`) |

**Returns** `string`: The JSON formatted protocol buffer message.

**Throws**

- `SerializeToJsonError` A field cannot be converted.
