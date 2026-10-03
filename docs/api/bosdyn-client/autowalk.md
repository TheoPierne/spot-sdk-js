# bosdyn-client/autowalk

For clients to the Autowalk service.

```js
const { AutowalkClient, AutowalkResponseError, CompilationError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AutowalkClient`](#autowalkclient) | Class | Client for the Autowalk service. |
| [`AutowalkResponseError`](#autowalkresponseerror) | Class | General class of errors for autowalk service. |
| [`CompilationError`](#compilationerror) | Class | Provided Walk could not be compiled because the Walk was malformed. |
| [`ValidationError`](#validationerror) | Class | Provided Walk could not be validated because some part of the Walk was unable to initialize. |

## AutowalkClient

```ts
class AutowalkClient extends BaseClient<AutowalkServiceClient>
```

Client for the Autowalk service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'autowalk-service'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.autowalk.AutowalkService'`. |

### updateFrom

```ts
updateFrom(other: Object): void
```

Update instance from another object.

| Parameter | Type | Description |
|---|---|---|
| `other` | `Object` | The object where to copy from. |

### compileAutowalk

```ts
compileAutowalk(walk: Walk, dataChunkTypeByte?: number, args?: Object): Promise<autowalkPb.CompileAutowalkResponse>
```

Send the input walk file to the autowalk service for compilation.

| Parameter | Type | Description |
|---|---|---|
| `walk` | `Walk` | A walks_pb.Walk input to be compiled by the autowalk service |
| `dataChunkTypeByte` | `number` | max size of each streamed message (*Optional*) |
| `args` | `Object` | The arguments that can be send with the RPC request (*Optional*) |

**Returns** `Promise<autowalkPb.CompileAutowalkResponse>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CompilationError` The walk failed to compile because it was malformed.
- `ValidationError` The walk failed to validate because some part of it was unable to initialize.

### loadAutowalk

```ts
loadAutowalk(walk: Walk, leases?: Lease[], dataChunkByteSize?: number, args?: Object): Promise<autowalkPb.LoadAutowalkResponse>
```

Send the input walk file to the autowalk service for compilation and
load resulting mission to the Mission Service on the robot.

| Parameter | Type | Description |
|---|---|---|
| `walk` | `Walk` | A walks_pb.Walk input to be loaded onto the robot by the autowalk service |
| `leases` | `Lease[]` | Leases the autowalk service will need to use. Unlike other clients, these MUST be specified. (*Optional*) |
| `dataChunkByteSize` | `number` | max size of each streamed message (*Optional*) |
| `args` | `Object` | The arguments that can be send with the RPC request (*Optional*) |

**Returns** `Promise<autowalkPb.LoadAutowalkResponse>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CompilationError` The walk failed to compile because it was malformed.
- `ValidationError` The walk failed to validate because some part of it was unable to initialize.

## AutowalkResponseError

```ts
class AutowalkResponseError extends ResponseError
```

General class of errors for autowalk service.

## CompilationError

```ts
class CompilationError extends AutowalkResponseError
```

Provided Walk could not be compiled because the Walk was malformed.

## ValidationError

```ts
class ValidationError extends AutowalkResponseError
```

Provided Walk could not be validated because some part of the Walk was unable to initialize.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `autowalkPb` | `spot-sdk-js/src/bosdyn/api/autowalk/autowalk_pb` |
