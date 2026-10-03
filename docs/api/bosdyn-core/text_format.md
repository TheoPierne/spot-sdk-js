# bosdyn-core/text_format

The text format of the protobuf messages, like google.protobuf.text_format in Python: printing and parsing.

```js
const { Tokenizer, cEscape, cUnescape, ... } = require('spot-sdk-js').textFormat;
```

| Export | Kind | Description |
|---|---|---|
| [`Tokenizer`](#tokenizer) | Class | Protocol buffer text representation tokenizer, like the Tokenizer of Python. |
| [`cEscape`](#cescape) | Function | Escapes a string or bytes for a text protocol buffer, like text_encoding.CEscape(). |
| [`cUnescape`](#cunescape) | Function | Unescapes a text string with C-style escape sequences to UTF-8 bytes, like text_encoding.CUnescape(): the escapes are decoded in the same passes, with the same errors. |
| [`merge`](#merge) | Function | Parses a text representation of a protocol message into a message, like parse() but allows repeated values for a non-repeated field, and uses the last one. |
| [`mergeLines`](#mergelines) | Function | Merges the lines of a text representation of a protocol message into a message: see merge(). |
| [`messageToString`](#messagetostring) | Function | Converts a protobuf message to text format. |
| [`parse`](#parse) | Function | Parses a text representation of a protocol message into a message. |
| [`parseBool`](#parsebool) | Function | Parses a boolean value. |
| [`parseEnum`](#parseenum) | Function | Parses an enum value: its number or its name. |
| [`parseFloat`](#parsefloat) | Function | Parses a floating point number: also inf, infinity, nan and the '1.0f' format. |
| [`parseInteger`](#parseinteger) | Function | Parses an integer. |
| [`parseLines`](#parselines) | Function | Parses the lines of a text representation of a protocol message into a message: see parse(). |
| [`ParseError`](#parseerror) | Class | Thrown in case of text parsing or tokenizing error. |
| [`TextFormatError`](#textformaterror) | Class | Top-level module error for text_format. |

## ParseError

```ts
class ParseError extends TextFormatError
```

Thrown in case of text parsing or tokenizing error.

### new ParseError

```ts
constructor(message?: string | null, line?: number | null, column?: number | null)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `string \| null` | (*Optional*, default `null`) |
| `line` | `number \| null` | The line of the error, from 1. (*Optional*, default `null`) |
| `column` | `number \| null` | The column of the error, from 1. (*Optional*, default `null`) |

### getLine

```ts
getLine(): number | null
```

**Returns** `number \| null`

### getColumn

```ts
getColumn(): number | null
```

**Returns** `number \| null`

## TextFormatError

```ts
class TextFormatError extends Error
```

Top-level module error for text_format.

### new TextFormatError

```ts
constructor(message: any)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

## Tokenizer

```ts
class Tokenizer
```

Protocol buffer text representation tokenizer, like the Tokenizer of Python.

### new Tokenizer

```ts
constructor(lines: Iterable<string>)
```

| Parameter | Type | Description |
|---|---|---|
| `lines` | `Iterable<string>` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `token` | `string` |  |

### lookingAt

```ts
lookingAt(token: any): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `token` | `any` |  |

**Returns** `boolean`

### atEnd

```ts
atEnd(): boolean
```

**Returns** `boolean`: Whether the end of the text was reached.

### tryConsume

```ts
tryConsume(token: any): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `token` | `any` |  |

**Returns** `boolean`

### consume

```ts
consume(token: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `token` | `any` |  |

### tryConsumeIdentifier

```ts
tryConsumeIdentifier(): boolean
```

**Returns** `boolean`

### consumeIdentifier

```ts
consumeIdentifier(): string
```

**Returns** `string`

### tryConsumeIdentifierOrNumber

```ts
tryConsumeIdentifierOrNumber(): boolean
```

**Returns** `boolean`

### consumeIdentifierOrNumber

```ts
consumeIdentifierOrNumber(): string
```

**Returns** `string`

### tryConsumeInteger

```ts
tryConsumeInteger(): boolean
```

**Returns** `boolean`

### consumeInteger

```ts
consumeInteger(): bigint
```

**Returns** `bigint`

### tryConsumeFloat

```ts
tryConsumeFloat(): boolean
```

**Returns** `boolean`

### consumeFloat

```ts
consumeFloat(): number
```

**Returns** `number`

### consumeBool

```ts
consumeBool(): boolean
```

**Returns** `boolean`

### tryConsumeByteString

```ts
tryConsumeByteString(): boolean
```

**Returns** `boolean`

### consumeString

```ts
consumeString(): string
```

**Returns** `string`

### consumeByteString

```ts
consumeByteString(): Buffer
```

Consumes a byte array value: adjacent string literals are concatenated.

**Returns** `Buffer`

### consumeEnum

```ts
consumeEnum(field: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `field` | `any` |  |

**Returns** `any`

### parseErrorPreviousToken

```ts
parseErrorPreviousToken(message: any): ParseError
```

Creates and *returns* a ParseError for the previously read token.

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

**Returns** `ParseError`

### parseError

```ts
parseError(message: any): ParseError
```

Creates and *returns* a ParseError for the current token.

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

**Returns** `ParseError`

### nextToken

```ts
nextToken(): void
```

Reads the next meaningful token.

## cEscape

```ts
export function cEscape(text: string | Uint8Array, asUtf8: boolean): string
```

Escapes a string or bytes for a text protocol buffer, like text_encoding.CEscape().

| Parameter | Type | Description |
|---|---|---|
| `text` | `string \| Uint8Array` |  |
| `asUtf8` | `boolean` | For a string: whether the non-ASCII characters are kept (else their UTF-8 bytes are escaped). |

**Returns** `string`

## cUnescape

```ts
export function cUnescape(text: string): Buffer
```

Unescapes a text string with C-style escape sequences to UTF-8 bytes, like text_encoding.CUnescape(): the escapes
are decoded in the same passes, with the same errors.

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` |  |

**Returns** `Buffer`

## merge

```ts
export function merge<T extends import("google-protobuf").Message>(text: string | Uint8Array, message: T, options?: Object): T
```

Parses a text representation of a protocol message into a message, like parse() but allows repeated values for a
non-repeated field, and uses the last one.

| Parameter | Type | Description |
|---|---|---|
| `text` | `string \| Uint8Array` | Message text representation. |
| `message` | `T` | A protocol buffer message to merge into. |
| `options` | `Object` | The options of parse(). (*Optional*) |

**Returns** `T`: The same message passed as argument.

**Throws**

- `ParseError` On text parsing problems.

## mergeLines

```ts
export function mergeLines<T extends import("google-protobuf").Message>(lines: Iterable<string>, message: T, options?: Object): T
```

Merges the lines of a text representation of a protocol message into a message: see merge().

| Parameter | Type | Description |
|---|---|---|
| `lines` | `Iterable<string>` |  |
| `message` | `T` |  |
| `options` | `Object` | The options of parse(). (*Optional*) |

**Returns** `T`

## messageToString

```ts
export function messageToString(message: import("google-protobuf").Message, { asUtf8, asOneLine, useShortRepeatedPrimitives, pointyBrackets, useIndexOrder, floatFormat, doubleFormat, useFieldNumber, indent, messageFormatter, forceColon, }?: {
    asUtf8?: boolean | undefined;
    asOneLine?: boolean | undefined;
    useShortRepeatedPrimitives?: boolean | undefined;
    pointyBrackets?: boolean | undefined;
    useIndexOrder?: boolean | undefined;
    floatFormat?: ((arg0: number) => string) | null | undefined;
    doubleFormat?: ((arg0: number) => string) | null | undefined;
    useFieldNumber?: boolean | undefined;
    indent?: number | undefined;
    messageFormatter?: ((arg0: Object, arg1: number, arg2: boolean) => string | null) | null | undefined;
    forceColon?: boolean | undefined;
}): string
```

Converts a protobuf message to text format.

| Parameter | Type | Description |
|---|---|---|
| `message` | `import("google-protobuf").Message` | The protocol buffers message. |
| `options` | `{ asUtf8?: boolean \| undefined; asOneLine?: boolean \| undefined; useShortRepeatedPrimitives?: boolean \| undefined; pointyBrackets?: boolean \| undefined; useIndexOrder?: boolean \| undefined; floatFormat?: ((arg0: number) => string) \| null \| undefined; doubleFormat?: ((arg0: number) => string) \| null \| undefined; useFieldNumber?: boolean \| undefined; indent?: number \| undefined; messageFormatter?: ((arg0: Object, arg1: number, arg2: boolean) => string \| null) \| null \| undefined; forceColon?: boolean \| undefined; }` | (*Optional*) |
| `options.asUtf8` | `boolean` | Keep the non-ASCII characters of the strings unescaped. (*Optional*, default `true`) |
| `options.asOneLine` | `boolean` | Don't introduce newlines between fields. (*Optional*, default `false`) |
| `options.useShortRepeatedPrimitives` | `boolean` | Use short repeated format for primitives. (*Optional*, default `false`) |
| `options.pointyBrackets` | `boolean` | Use angle brackets instead of curly braces for nesting. (*Optional*, default `false`) |
| `options.useIndexOrder` | `boolean` | Print the fields in the order of the .proto file instead of the order of their numbers. (*Optional*, default `false`) |
| `options.floatFormat` | `?function(number): string` | Formats the float fields (and the double fields if doubleFormat is not set); otherwise, the shortest float that has same value in wire is printed. (*Optional*, default `null`) |
| `options.doubleFormat` | `?function(number): string` | Formats the double fields; otherwise, their repr() of Python is printed. (*Optional*, default `null`) |
| `options.useFieldNumber` | `boolean` | Print field numbers instead of names. (*Optional*, default `false`) |
| `options.indent` | `number` | The initial indent level, in terms of spaces, for pretty print. (*Optional*, default `0`) |
| `options.messageFormatter` | `?function(Object, number, boolean): ?string` | Custom formatter for selected sub-messages (usually based on message type): (message, indent, asOneLine) =&gt; text or null. (*Optional*, default `null`) |
| `options.forceColon` | `boolean` | Add a colon after the field name even if the field is a proto message. (*Optional*, default `false`) |

**Returns** `string`: The text formatted protocol buffer message.

## parse

```ts
export function parse<T extends import("google-protobuf").Message>(text: string | Uint8Array, message: T, options?: {
    allowUnknownExtension?: boolean | undefined;
    allowFieldNumber?: boolean | undefined;
    allowUnknownField?: boolean | undefined;
}): T
```

Parses a text representation of a protocol message into a message.

NOTE: for historical reasons this function does not clear the input message. If text contains a field already set
in message, the value is appended if the field is repeated. Otherwise, an error is thrown.

| Parameter | Type | Description |
|---|---|---|
| `text` | `string \| Uint8Array` | Message text representation. |
| `message` | `T` | A protocol buffer message to merge into. |
| `options` | `{ allowUnknownExtension?: boolean \| undefined; allowFieldNumber?: boolean \| undefined; allowUnknownField?: boolean \| undefined; }` | (*Optional*) |
| `options.allowUnknownExtension` | `boolean` | Skip over missing extensions and keep parsing. (*Optional*, default `false`) |
| `options.allowFieldNumber` | `boolean` | Both field number and field name are allowed. (*Optional*, default `false`) |
| `options.allowUnknownField` | `boolean` | Skip over unknown field and keep parsing. Avoid to use this option if possible: it may hide some errors (e.g. spelling error on field name). (*Optional*, default `false`) |

**Returns** `T`: The same message passed as argument.

**Throws**

- `ParseError` On text parsing problems.

## parseBool

```ts
export function parseBool(text: string): boolean
```

Parses a boolean value.

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` |  |

**Returns** `boolean`

## parseEnum

```ts
export function parseEnum(field: import("./descriptor_pool").FieldDescriptor, value: string): number
```

Parses an enum value: its number or its name.

| Parameter | Type | Description |
|---|---|---|
| `field` | `import("./descriptor_pool").FieldDescriptor` |  |
| `value` | `string` |  |

**Returns** `number`

## parseFloat

```ts
export function parseFloat(text: string): number
```

Parses a floating point number: also inf, infinity, nan and the '1.0f' format.

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` |  |

**Returns** `number`

## parseInteger

```ts
export function parseInteger(text: string, isSigned?: boolean, isLong?: boolean): bigint
```

Parses an integer.

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` | The text to parse. |
| `isSigned` | `boolean` | True if a signed integer must be parsed. (*Optional*, default `false`) |
| `isLong` | `boolean` | True if a long integer must be parsed. (*Optional*, default `false`) |

**Returns** `bigint`

## parseLines

```ts
export function parseLines<T extends import("google-protobuf").Message>(lines: Iterable<string>, message: T, options?: Object): T
```

Parses the lines of a text representation of a protocol message into a message: see parse().

| Parameter | Type | Description |
|---|---|---|
| `lines` | `Iterable<string>` |  |
| `message` | `T` |  |
| `options` | `Object` | The options of parse(). (*Optional*) |

**Returns** `T`
