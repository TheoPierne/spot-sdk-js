# bosdyn-client/inverse_kinematics

A client for the inverse-kinematics service.

```js
const { InverseKinematicsClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`InverseKinematicsClient`](#inversekinematicsclient) | Class | Client to request inverse kinematics solutions. |

## InverseKinematicsClient

```ts
class InverseKinematicsClient extends BaseClient<InverseKinematicsServiceClient>
```

Client to request inverse kinematics solutions.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'inverse-kinematics'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot.InverseKinematicsService'`. |

### inverseKinematics

```ts
inverseKinematics(request: InverseKinematicsRequest, args?: Object): Promise<any>
```

Request an IK solution.

| Parameter | Type | Description |
|---|---|---|
| `request` | `InverseKinematicsRequest` | Request to issue |
| `args` | `Object` | Extra arguments (*Optional*) |

**Returns** `Promise<any>`
