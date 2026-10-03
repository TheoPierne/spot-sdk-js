# bosdyn-client/arm_surface_contact

Client for the arm surface contact service: arm commands that press the hand on a surface.

```js
const { ArmSurfaceContactClient } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME } = require('spot-sdk-js/src/bosdyn-client/arm_surface_contact');
```

| Export | Kind | Description |
|---|---|---|
| [`ArmSurfaceContactClient`](#armsurfacecontactclient) | Class | Client for the ArmSurfaceContact service. |
| [`EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME`](#constants) | Constant |  |

## ArmSurfaceContactClient

```ts
class ArmSurfaceContactClient extends BaseClient<ArmSurfaceContactServiceClient>
```

Client for the ArmSurfaceContact service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'arm-surface-contact'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.ArmSurfaceContactService'`. |

### updateFrom

```ts
updateFrom(other: import("./robot").Robot): Promise<void>
```

Update instance from another object.

| Parameter | Type | Description |
|---|---|---|
| `other` | `import("./robot").Robot` | The object where to copy from. |

**Returns** `Promise<void>`

### armSurfaceContactCommand

```ts
armSurfaceContactCommand(request: ArmSurfaceContactRequest, args?: Object): Promise<ArmSurfaceContactResponse>
```

Issue an arm surface contact command to the robot.

| Parameter | Type | Description |
|---|---|---|
| `request` | `ArmSurfaceContactRequest` | The command request. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<ArmSurfaceContactResponse>`: The full arm surface contact response message.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME` | `object` |  |
