# bosdyn-mission/exceptions

The errors of the compilation and of the validation of missions.

```js
const { CompileError, UnknownType, MissingParameterError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { ValidationError } = require('spot-sdk-js/src/bosdyn-mission/exceptions');
```

| Export | Kind | Description |
|---|---|---|
| [`CompileError`](#compileerror) | Class |  |
| [`UnknownType`](#unknowntype) | Class |  |
| [`ValidationError`](#validationerror) | Class |  |
| [`MissingParameterError`](#missingparametererror) | Class |  |
| [`InaccessibleParameterError`](#inaccessibleparametererror) | Class |  |
| [`MessageOverrideError`](#messageoverrideerror) | Class |  |
| [`NodeUnreferenceableError`](#nodeunreferenceableerror) | Class |  |

## CompileError

```ts
class CompileError extends Error
```

### new CompileError

```ts
constructor(msg?: string, nodeProto?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `string` | (*Optional*) |
| `nodeProto` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `nodeProto` | `any` |  |

### nodeName

```ts
nodeName(): any
```

**Returns** `any`

### nodeImpl

```ts
nodeImpl(): any
```

**Returns** `any`

### getNodeDetails

```ts
getNodeDetails(): string
```

**Returns** `string`

## UnknownType

```ts
class UnknownType extends CompileError
```

### new UnknownType

```ts
constructor(msg: any, nodeProto: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |
| `nodeProto` | `any` |  |

## ValidationError

```ts
class ValidationError extends Error
```

### new ValidationError

```ts
constructor(msg: any, tree: any, errors: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |
| `tree` | `any` |  |
| `errors` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `tree` | `any` |  |
| `errors` | `any` |  |

## MissingParameterError

```ts
class MissingParameterError extends CompileError
```

### new MissingParameterError

```ts
constructor(msg: any, targetName: any, targetPbType: any, storedPbType: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |
| `targetName` | `any` |  |
| `targetPbType` | `any` |  |
| `storedPbType` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `targetName` | `any` |  |
| `targetPbType` | `any` |  |
| `storedPbType` | `any` |  |

## InaccessibleParameterError

```ts
class InaccessibleParameterError extends MissingParameterError
```

## MessageOverrideError

```ts
class MessageOverrideError extends CompileError
```

### new MessageOverrideError

```ts
constructor(msg: any, overridingMessage: any, fieldName: any, fieldType: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |
| `overridingMessage` | `any` |  |
| `fieldName` | `any` |  |
| `fieldType` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `overridingMessage` | `any` |  |
| `fieldName` | `any` |  |
| `fieldType` | `any` |  |

## NodeUnreferenceableError

```ts
class NodeUnreferenceableError extends Error
```

### new NodeUnreferenceableError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |
