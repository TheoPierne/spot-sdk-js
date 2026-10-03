# bosdyn-client/robot_id

For clients to the robot id service.

```js
const { RobotIdClient, compareVersions, toVersionArray, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`RobotIdClient`](#robotidclient) | Class | Client to access robot info. |
| [`compareVersions`](#compareversions) | Function | Compares two versions like the tuples of version_tuple() in Python, e.g. |
| [`toVersionArray`](#toversionarray) | Function | Return the version as an array for easy comparisons |
| [`versionTuple`](#aliases) | Alias | Alias of `toVersionArray`. |

## RobotIdClient

```ts
class RobotIdClient extends BaseClient<RobotIdServiceClient>
```

Client to access robot info.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'robot-id'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.RobotIdService'`. |

### getId

```ts
getId(args?: Object): Promise<robotIdPb.RobotId>
```

Get the robot's robot/id.proto.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<robotIdPb.RobotId>`

## compareVersions

```ts
export function compareVersions(a: number[], b: number[]): number
```

Compares two versions like the tuples of version_tuple() in Python, e.g. `version_tuple(v) >= (1, 2, 0)`: the
arrays of JS are compared as strings by `<` and `>=` ([1, 10, 0] &lt; [1, 9, 0]).

| Parameter | Type | Description |
|---|---|---|
| `a` | `number[]` | A version, e.g. toVersionArray(version). |
| `b` | `number[]` | Another version, e.g. [1, 2, 0]. |

**Returns** `number`: -1 if a is older, 0 if equal, 1 if newer (a prefix is older, like a shorter tuple).

## toVersionArray

```ts
export function toVersionArray(version: robotIdPb.SoftwareVersion): number[]
```

Return the version as an array for easy comparisons

| Parameter | Type | Description |
|---|---|---|
| `version` | `robotIdPb.SoftwareVersion` | The representation of version in proto format. |

**Returns** `number[]`

## Aliases

| Alias | Of |
|---|---|
| `versionTuple` | [`toVersionArray`](#toversionarray) |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `robotIdPb` | `spot-sdk-js/src/bosdyn/api/robot_id_pb` |
