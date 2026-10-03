# bosdyn-client/door

For clients to the door service.

```js
const { DoorClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DoorClient`](#doorclient) | Class | Client for the door service. |

## DoorClient

```ts
class DoorClient extends BaseClient<DoorServiceClient>
```

Client for the door service.

### new DoorClient

```ts
constructor(name?: string | null)
```

Create an instance of DoorClient's class.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string \| null` | Name of the Class. (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'door'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot.DoorService'`. |

### openDoor

```ts
openDoor(request: OpenDoorCommandRequest, args?: Object): Promise<OpenDoorCommandResponse>
```

Issue a open door command to the robot.

| Parameter | Type | Description |
|---|---|---|
| `request` | `OpenDoorCommandRequest` | The door command. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<OpenDoorCommandResponse>`: The full OpenDoorCommandResponse message, which includes a command id for feedback.

**Throws**

- `RpcError` Problem communicating with the robot.
- `LeaseUseError` The lease for the request failed.

### openDoorFeedback

```ts
openDoorFeedback(request: OpenDoorFeedbackRequest, args?: Object): Promise<OpenDoorFeedbackResponse>
```

Get feedback from the robot on a specific door command.

| Parameter | Type | Description |
|---|---|---|
| `request` | `OpenDoorFeedbackRequest` | The request for feedback of the door command. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<OpenDoorFeedbackResponse>`: The full OpenDoorFeedbackResponse message.

**Throws**

- `RpcError` Problem communicating with the robot.
