# bosdyn-client/manipulation_api_client

For clients to the Manipulation API service.

```js
const { ManipulationApiClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`ManipulationApiClient`](#manipulationapiclient) | Class | Client for the ManipulationAPI service. |

## ManipulationApiClient

```ts
class ManipulationApiClient extends BaseClient<ManipulationApiServiceClient>
```

Client for the ManipulationAPI service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'manipulation'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.ManipulationApiService'`. |

### manipulationApiCommand

```ts
manipulationApiCommand(manipulationApiRequest: ManipulationApiRequest, args?: Object): Promise<ManipulationApiResponse>
```

Issue a manipulation api command to the robot.

| Parameter | Type | Description |
|---|---|---|
| `manipulationApiRequest` | `ManipulationApiRequest` | The command request for a manipulation task. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<ManipulationApiResponse>`: The full ManipulationApiResponse message, which includes a command id for feedback.

### manipulationApiFeedbackCommand

```ts
manipulationApiFeedbackCommand(manipulationApiFeedbackRequest: ManipulationApiFeedbackRequest, args?: Object): Promise<ManipulationApiFeedbackResponse>
```

Issue a manipulation api feedback request to the robot.

| Parameter | Type | Description |
|---|---|---|
| `manipulationApiFeedbackRequest` | `ManipulationApiFeedbackRequest` | The request for feedback for a specific manipulation command. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<ManipulationApiFeedbackResponse>`: The full ManipulationApiFeedbackResponse message.

### graspOverrideCommand

```ts
graspOverrideCommand(graspOverrideRequest: ApiGraspOverrideRequest, args?: Object): Promise<ApiGraspOverrideResponse>
```

Issue a grasp override command to the robot.

| Parameter | Type | Description |
|---|---|---|
| `graspOverrideRequest` | `ApiGraspOverrideRequest` | he command request for a grasp override. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<ApiGraspOverrideResponse>`
