# bosdyn-core/descriptor_pool

The descriptors of the protobuf messages of the SDK (loaded from src/bosdyn/descriptor_set.pb), used by the
text and JSON formats, and mergeFrom(), like MergeFrom() in Python.

```js
const { Descriptor, DescriptorPool, EnumDescriptor, ... } = require('spot-sdk-js').descriptorPool;
```

| Export | Kind | Description |
|---|---|---|
| [`Descriptor`](#descriptor) | Class | Descriptor of a message. |
| [`DescriptorPool`](#descriptorpool) | Class | The descriptors of a FileDescriptorSet, indexed by full name. |
| [`EnumDescriptor`](#enumdescriptor) | Class | Descriptor of an enum. |
| [`FieldDescriptor`](#fielddescriptor) | Class | Descriptor of a field of a message. |
| [`defaultPool`](#defaultpool) | Function | The pool of the descriptors of the SDK (loaded at the first call). |
| [`mergeFrom`](#mergefrom) | Function | Merge a message into another one of the same type, like MergeFrom() in Python: the singular fields set in the source overwrite the ones of the target (the sub-messages are merged recursively, and a oneof member replaces the others), the repeated fields are appended, and the map entries replace the ones with the same key. |
| [`DESCRIPTOR_SET_PATH`](#constants) | Constant |  |
| [`FieldType`](#constants) | Constant | The types of FieldDescriptorProto.Type. |

## Descriptor

```ts
class Descriptor
```

Descriptor of a message.

### new Descriptor

```ts
constructor(pool: any, fullName: any, proto: any, file: any, containingType: any)
```

| Parameter | Type | Description |
|---|---|---|
| `pool` | `any` |  |
| `fullName` | `any` |  |
| `proto` | `any` |  |
| `file` | `any` |  |
| `containingType` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `fullName` | `any` |  |
| `name` | `any` |  |
| `file` | `any` |  |
| `containingType` | `any` |  |
| `isMapEntry` | `boolean` |  |
| `isExtendable` | `boolean` |  |
| `oneofs` | `any` |  |
| `fields` | `any` |  |
| `fieldsByName` | `Map<any, any>` |  |
| `fieldsByNumber` | `Map<any, any>` |  |
| `fieldsInNumberOrder` | `any[]` |  |

## DescriptorPool

```ts
class DescriptorPool
```

The descriptors of a FileDescriptorSet, indexed by full name.

### new DescriptorPool

```ts
constructor(serializedFileDescriptorSet: Uint8Array)
```

| Parameter | Type | Description |
|---|---|---|
| `serializedFileDescriptorSet` | `Uint8Array` |  |

### messageTypes

```ts
messageTypes(): IterableIterator<Descriptor>
```

**Returns** `IterableIterator<Descriptor>`

### findMessageTypeByName

```ts
findMessageTypeByName(fullName: string): Descriptor | null
```

| Parameter | Type | Description |
|---|---|---|
| `fullName` | `string` | e.g. 'bosdyn.api.SE3Pose'. |

**Returns** `Descriptor \| null`

### findEnumTypeByName

```ts
findEnumTypeByName(fullName: string): EnumDescriptor | null
```

| Parameter | Type | Description |
|---|---|---|
| `fullName` | `string` |  |

**Returns** `EnumDescriptor \| null`

### messageClass

```ts
messageClass(descriptor: Descriptor): Function
```

The generated class of a message type, whose module is loaded if it was not.

| Parameter | Type | Description |
|---|---|---|
| `descriptor` | `Descriptor` |  |

**Returns** `Function`

### descriptorOf

```ts
descriptorOf(message: import("google-protobuf").Message): Descriptor
```

The descriptor of a message of a generated class.

| Parameter | Type | Description |
|---|---|---|
| `message` | `import("google-protobuf").Message` |  |

**Returns** `Descriptor`

**Throws**

- `TypeError` The message is not of a class of the descriptor set.

## EnumDescriptor

```ts
class EnumDescriptor
```

Descriptor of an enum.

### new EnumDescriptor

```ts
constructor(fullName: any, proto: any, file: any)
```

| Parameter | Type | Description |
|---|---|---|
| `fullName` | `any` |  |
| `proto` | `any` |  |
| `file` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `fullName` | `any` |  |
| `name` | `any` |  |
| `file` | `any` |  |
| `values` | `any` |  |
| `valuesByName` | `Map<any, any>` |  |
| `valuesByNumber` | `Map<any, any>` |  |
| `isClosed` | `boolean` |  |

## FieldDescriptor

```ts
class FieldDescriptor
```

Descriptor of a field of a message.

### new FieldDescriptor

```ts
constructor(pool: any, proto: any, index: any, containingType: any)
```

| Parameter | Type | Description |
|---|---|---|
| `pool` | `any` |  |
| `proto` | `any` |  |
| `index` | `any` |  |
| `containingType` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `name` | `any` |  |
| `fullName` | `string` |  |
| `jsonName` | `any` |  |
| `number` | `any` |  |
| `index` | `any` |  |
| `type` | `any` |  |
| `isRepeated` | `boolean` |  |
| `typeName` | `any` |  |
| `containingType` | `any` |  |
| `containingOneof` | `any` |  |
| `isMessage` | `boolean` |  |
| `hasPresence` | `any` |  |
| `isJsString` | `boolean` |  |
| `messageType` | `Descriptor \| null` | The type of a message field. Read-only. |
| `enumType` | `EnumDescriptor \| null` | The type of an enum field. Read-only. |
| `isMap` | `boolean` | Whether the field is a map. Read-only. |
| `accessors` | `{ get: string; getU8: string; set: string; add: string; has: string; clear: string; }` | The names of the jspb accessors of the field: get (the getter, of the list or the map for a repeated field), getU8 (the getter of the bytes as Uint8Array), set, add (for a repeated field), has and clear. Read-only. |

## defaultPool

```ts
export function defaultPool(): DescriptorPool
```

The pool of the descriptors of the SDK (loaded at the first call).

**Returns** `DescriptorPool`

## mergeFrom

```ts
export function mergeFrom(target: import("google-protobuf").Message, source: import("google-protobuf").Message, pool?: DescriptorPool): import("google-protobuf").Message
```

Merge a message into another one of the same type, like MergeFrom() in Python: the singular fields set in the source
overwrite the ones of the target (the sub-messages are merged recursively, and a oneof member replaces the others),
the repeated fields are appended, and the map entries replace the ones with the same key. jspb has no merge (parsing
concatenated messages replaces the sub-messages). The source is not modified, and shares nothing with the target.

| Parameter | Type | Description |
|---|---|---|
| `target` | `import("google-protobuf").Message` |  |
| `source` | `import("google-protobuf").Message` |  |
| `pool` | `DescriptorPool` | (*Optional*, default `defaultPool()`) |

**Returns** `import("google-protobuf").Message`: The target.

**Throws**

- `TypeError` The messages are not of the same type.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `DESCRIPTOR_SET_PATH` | `'C:\Users\theop\Desktop\project\spot-sdk\spot-sdk-js\src\bosdyn\descriptor_set.pb'` |  |
| `FieldType` | `{ DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18 }` | The types of FieldDescriptorProto.Type. |
