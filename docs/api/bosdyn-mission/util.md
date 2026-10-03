# bosdyn-mission/util

Helpers for missions: conversions between protobuf values and JavaScript values, the Result constants, and
string representations of the nodes.

```js
const { ResultFromProto, treeToString, typeToFieldName, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { safePbEnumToString } = require('spot-sdk-js/src/bosdyn-mission/util');
```

| Export | Kind | Description |
|---|---|---|
| [`ResultFromProto`](#resultfromproto) | Class |  |
| [`treeToString`](#treetostring) | Function | Get a string representation of a Node, interpreted as a tree. |
| [`typeToFieldName`](#typetofieldname) | Function | Use type name to reconstruct field name of bosdyn.api.mission.Node.type. |
| [`protoFromObject`](#protofromobject) | Function | Return a bosdyn.api.mission Node from an object. |
| [`jsVarToValue`](#jsvartovalue) | Function | Returns a ConstantValue with the appropriate oneof set. |
| [`jsTypeToPbType`](#jstypetopbtype) | Function | Returns the protobuf-schema variable type that corresponds to the given variable. |
| [`jsTypeToVariableDeclInfo`](#jstypetovariabledeclinfo) | Function | The type of a variable, and the sub type of its items for a list or a dict. |
| [`jsVarToVariableDecl`](#jsvartovariabledecl) | Function | A VariableDeclaration of the type of the variable. |
| [`severityToLogLevel`](#severitytologlevel) | Function | Converts alert data severity enum to a logger level for printing purposes. |
| [`isStringIdentifier`](#isstringidentifier) | Function |  |
| [`fieldDescToPbType`](#fielddesctopbtype) | Function | Returns the protobuf-schema variable type that corresponds to the given descriptor. |
| [`safePbTypeToString`](#safepbtypetostring) | Function | Return the stringified VariableDeclaration.Type, or "&lt;unknown&gt;" if the type is invalid. |
| [`oneLineStr`](#onelinestr) | Function |  |
| [`nodeSpecToShortString`](#nodespectoshortstring) | Function |  |
| [`protoEnumToResultConstant`](#protoenumtoresultconstant) | Function | Returns a Result enum from a utilPb.Result, or throws InvalidConversion error. |
| [`resultConstantToProtoEnum`](#resultconstanttoprotoenum) | Function | Returns a protobuf version of the Result enum, RESULT_UNKNOWN on error. |
| [`mostRestrictiveTravelParams`](#mostrestrictivetravelparams) | Function |  |
| [`getValueFromConstantValueMessage`](#getvaluefromconstantvaluemessage) | Function |  |
| [`getValueFromValueMessage`](#getvaluefromvaluemessage) | Function |  |
| [`safePbEnumToString`](#safepbenumtostring) | Function | Safe wrapper to convert a protobuf enum object to its string representation. |
| [`createValue`](#createvalue) | Function | Returns a Value message containing a ConstantValue with the appropriate oneof set. |
| [`defineBlackboard`](#defineblackboard) | Function | Returns a DefineBlackboard protobuf message for the key-value pairs in `values`. |
| [`setBlackboard`](#setblackboard) | Function | Returns a SetBlackboard protobuf message for the key-value pairs in `values`. |
| [`DUMMY_MESSAGE`](#constants) | Constant |  |
| [`InvalidConversion`](#invalidconversion) | Class | Could not convert the provided value to the destination type. |

## InvalidConversion

```ts
class InvalidConversion extends Error
```

Could not convert the provided value to the destination type.

### new InvalidConversion

```ts
constructor(originalValue: any, destinationTypename: any)
```

| Parameter | Type | Description |
|---|---|---|
| `originalValue` | `any` |  |
| `destinationTypename` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `originalValue` | `any` |  |
| `destinationTypename` | `any` |  |

## ResultFromProto

```ts
class ResultFromProto
```

### Properties

| Property | Type | Description |
|---|---|---|
| `resultsFromProto` | `{ 1: number; 2: number; 3: number; 4: number; }` | Static. |
| `protoFromResults` | `{ [k: string]: number; }` | Static. |

## treeToString

```ts
export function treeToString(root: nodesPb.Node, startLevel?: number, includeStatus?: boolean): string
```

Get a string representation of a Node, interpreted as a tree.

| Parameter | Type | Description |
|---|---|---|
| `root` | `nodesPb.Node` |  |
| `startLevel` | `number` | (*Optional*) |
| `includeStatus` | `boolean` | (*Optional*) |

**Returns** `string`

## typeToFieldName

```ts
export function typeToFieldName(typeName: string): string
```

Use type name to reconstruct field name of bosdyn.api.mission.Node.type.
Example: SimpleParallel becomes simple_parallel.

| Parameter | Type | Description |
|---|---|---|
| `typeName` | `string` | Name of the type, e.g. 'bosdyn.api.mission.SimpleParallel' or 'SimpleParallel'. |

**Returns** `string`

**Throws**

- `ValueError` The field is not in the type oneof of Node.

## protoFromObject

```ts
export function protoFromObject(options: {
    nameOrObject: string | Object;
    innerProto: nodesPb.Sequence;
    children: any[];
}, packNodes?: boolean): nodesPb.Node
```

Return a bosdyn.api.mission Node from an object. EXPERIMENTAL.
Would make a Sequence named 'do-A-then-B' that always restarted, executing some Command
named 'A' followed by the Command named 'B'. NOTE: The "List of children tuples" will only
work if the parent node has 'child' or 'children' attributes. See tests/testUtil.js for a
longer example.

| Parameter | Type | Description |
|---|---|---|
| `options` | `{ nameOrObject: string \| Object; innerProto: nodesPb.Sequence; children: any[]; }` | (Name of node, Instantiated implementation of node protobuf, List of children tuples) |
| `options.nameOrObject` | `string\|Object` | Name of node |
| `options.innerProto` | `nodesPb.Sequence` | Instantiated implementation of node protobuf |
| `options.children` | `any[]` | Array of children array |
| `packNodes` | `boolean` | If should pack nodes in Any (*Optional*) |

**Returns** `nodesPb.Node`

```js
{
 nameOrObject: 'do-A-then-B',
 innerProto: bosdyn.api.mission.nodesPb.Sequence(),
 children: [
   { nameOrObject: 'A', innerProto: foo.bar.Command(...), children: [] },
   { nameOrObject: 'B', innerProto: foo.bar.Command(...), children: [] },
 ]
}
```

## jsVarToValue

```ts
export function jsVarToValue(val: any): utilPb.ConstantValue
```

Returns a ConstantValue with the appropriate oneof set.

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` | Value to convert to a ConstantValue proto |

**Returns** `utilPb.ConstantValue`

## jsTypeToPbType

```ts
export function jsTypeToPbType(val: any): utilPb.VariableDeclaration.Type
```

Returns the protobuf-schema variable type that corresponds to the given variable.

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` | Value to convert to a ConstantValue proto |

**Returns** `utilPb.VariableDeclaration.Type`

## jsTypeToVariableDeclInfo

```ts
export function jsTypeToVariableDeclInfo(val: any): [number, utilPb.VariableDeclaration.SubType | null]
```

The type of a variable, and the sub type of its items for a list or a dict.

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` | A value. |

**Returns** `[number, utilPb.VariableDeclaration.SubType \| null]`

## jsVarToVariableDecl

```ts
export function jsVarToVariableDecl(val: any, name?: string | null): utilPb.VariableDeclaration
```

A VariableDeclaration of the type of the variable.

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` | A value. |
| `name` | `string \| null` | Name of the variable. (*Optional*, default `null`) |

**Returns** `utilPb.VariableDeclaration`

## severityToLogLevel

```ts
export function severityToLogLevel(textLevel: number): string
```

Converts alert data severity enum to a logger level for printing purposes.

| Parameter | Type | Description |
|---|---|---|
| `textLevel` | `number` | An AlertData.SeverityLevel. |

**Returns** `string`: The level of a winston logger: 'info', 'warn' or 'error'.

## isStringIdentifier

```ts
export function isStringIdentifier(string: any): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `string` | `any` |  |

**Returns** `boolean`

## fieldDescToPbType

```ts
export function fieldDescToPbType(field_desc: any): utilPb.VariableDeclaration.Type.TYPE_FLOAT | utilPb.VariableDeclaration.Type.TYPE_STRING | utilPb.VariableDeclaration.Type.TYPE_INT | utilPb.VariableDeclaration.Type.TYPE_BOOL | utilPb.VariableDeclaration.Type.TYPE_MESSAGE
```

Returns the protobuf-schema variable type that corresponds to the given descriptor.

| Parameter | Type | Description |
|---|---|---|
| `field_desc` | `any` |  |

**Returns** `utilPb.VariableDeclaration.Type.TYPE_FLOAT \| utilPb.VariableDeclaration.Type.TYPE_STRING \| utilPb.VariableDeclaration.Type.TYPE_INT \| utilPb.VariableDeclaration.Type.TYPE_BOOL \| utilPb.VariableDeclaration.Type.TYPE_MESSAGE`

## safePbTypeToString

```ts
export function safePbTypeToString(pbType: any): string
```

Return the stringified VariableDeclaration.Type, or "&lt;unknown&gt;" if the type is invalid.

| Parameter | Type | Description |
|---|---|---|
| `pbType` | `any` |  |

**Returns** `string`

## oneLineStr

```ts
export function oneLineStr(msg: any): string
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

**Returns** `string`

## nodeSpecToShortString

```ts
export function nodeSpecToShortString(node_spec: any, maxlen?: number): any
```

| Parameter | Type | Description |
|---|---|---|
| `node_spec` | `any` |  |
| `maxlen` | `number` | (*Optional*) |

**Returns** `any`

## protoEnumToResultConstant

```ts
export function protoEnumToResultConstant(proto_msg: any): any
```

Returns a Result enum from a utilPb.Result, or throws InvalidConversion error.

| Parameter | Type | Description |
|---|---|---|
| `proto_msg` | `any` |  |

**Returns** `any`

## resultConstantToProtoEnum

```ts
export function resultConstantToProtoEnum(result: any): number
```

Returns a protobuf version of the Result enum, RESULT_UNKNOWN on error.

| Parameter | Type | Description |
|---|---|---|
| `result` | `any` |  |

**Returns** `number`

## mostRestrictiveTravelParams

```ts
export function mostRestrictiveTravelParams(travel_params: any, vel_limit?: null, disable_directed_exploration?: boolean, disable_alternate_route_finding?: boolean, path_following_mode?: null, ground_clutter_mode?: null): any
```

| Parameter | Type | Description |
|---|---|---|
| `travel_params` | `any` |  |
| `vel_limit` | `null` | (*Optional*) |
| `disable_directed_exploration` | `boolean` | (*Optional*) |
| `disable_alternate_route_finding` | `boolean` | (*Optional*) |
| `path_following_mode` | `null` | (*Optional*) |
| `ground_clutter_mode` | `null` | (*Optional*) |

**Returns** `any`

## getValueFromConstantValueMessage

```ts
export function getValueFromConstantValueMessage(const_proto: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `const_proto` | `any` |  |

**Returns** `any`

## getValueFromValueMessage

```ts
export function getValueFromValueMessage(node: any, blackboard: any, value_msg: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `node` | `any` |  |
| `blackboard` | `any` |  |
| `value_msg` | `any` |  |

**Returns** `any`

## safePbEnumToString

```ts
export function safePbEnumToString(value: any, pbEnumObj: any): string
```

Safe wrapper to convert a protobuf enum object to its string representation. Avoids throwing an error if the status
is unknown by the enum object.

| Parameter | Type | Description |
|---|---|---|
| `value` | `any` |  |
| `pbEnumObj` | `any` |  |

**Returns** `string`

## createValue

```ts
export function createValue(val: any): utilPb.Value
```

Returns a Value message containing a ConstantValue with the appropriate oneof set.

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` | A value |

**Returns** `utilPb.Value`

## defineBlackboard

```ts
export function defineBlackboard(values: any): nodesPb.DefineBlackboard
```

Returns a DefineBlackboard protobuf message for the key-value pairs in `values`.

| Parameter | Type | Description |
|---|---|---|
| `values` | `any` | An object of values |

**Returns** `nodesPb.DefineBlackboard`

## setBlackboard

```ts
export function setBlackboard(values: any): nodesPb.SetBlackboard
```

Returns a SetBlackboard protobuf message for the key-value pairs in `values`.

| Parameter | Type | Description |
|---|---|---|
| `values` | `any` | An object of values |

**Returns** `nodesPb.SetBlackboard`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `DUMMY_MESSAGE` | `nodesPb.Node` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `nodesPb` | `spot-sdk-js/src/bosdyn/api/mission/nodes_pb` |
| `utilPb` | `spot-sdk-js/src/bosdyn/api/mission/util_pb` |
