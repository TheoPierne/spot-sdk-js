# bosdyn-client/robot_state

For clients to use the robot state service.

```js
const { RobotStateClient, RobotStateStreamingClient, hasArm } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`RobotStateClient`](#robotstateclient) | Class | Client for the RobotState service. |
| [`RobotStateStreamingClient`](#robotstatestreamingclient) | Class | Client for the RobotState service. |
| [`hasArm`](#hasarm) | Function | Check if the robot has an arm attached. |

## RobotStateClient

```ts
class RobotStateClient extends BaseClient<RobotStateServiceClient>
```

Client for the RobotState service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'robot-state'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.RobotStateService'`. |

### getRobotState

```ts
getRobotState(args?: Object): Promise<robotStatePb.RobotState>
```

Obtain current state of the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<robotStatePb.RobotState>`: The current robot state.

**Throws**

- `RpcError` Problem communicating with the robot.

### getRobotMetrics

```ts
getRobotMetrics(args?: Object): Promise<robotStatePb.RobotMetrics>
```

Obtain robot metrics, such as distance traveled or time powered on.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<robotStatePb.RobotMetrics>`: All of the current robot metrics.

**Throws**

- `RpcError` Problem communicating with the robot.

### getRobotHardwareConfiguration

```ts
getRobotHardwareConfiguration(args?: Object): Promise<robotStatePb.HardwareConfiguration>
```

Obtain current hardware configuration of robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<robotStatePb.HardwareConfiguration>`: The hardware configuration, which includes the link names.

**Throws**

- `RpcError` Problem communicating with the robot.

### getRobotLinkModel

```ts
getRobotLinkModel(linkName: string, args?: Object): Promise<robotStatePb.Skeleton.Link.ObjModel>
```

Obtain link model OBJ for a specific link.

| Parameter | Type | Description |
|---|---|---|
| `linkName` | `string` | Name of the link to get the model. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<robotStatePb.Skeleton.Link.ObjModel>`: The bosdyn.api.Skeleton.Link.ObjModel for the specified link.

**Throws**

- `RpcError` Problem communicating with the robot.

### getHardwareConfigWithLinkInfo

```ts
getHardwareConfigWithLinkInfo(): Promise<robotStatePb.HardwareConfiguration>
```

Convenience function which first requests a robots hardware configuration followed by
requests to get link models for all robot links.

**Returns** `Promise<robotStatePb.HardwareConfiguration>`: robot_state_pb.HardwareConfiguration with all link models filled out.

## RobotStateStreamingClient

```ts
class RobotStateStreamingClient extends BaseClient<RobotStateStreamingServiceClient>
```

Client for the RobotState service.

This client is in BETA and may undergo changes in future releases.

### new RobotStateStreamingClient

```ts
constructor(name?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'robot-state-streaming'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.RobotStateStreamingService'`. |

### getRobotStateStream

```ts
getRobotStateStream(): any
```

Returns an iterator providing current state updates of the robot.

**Returns** `any`

## hasArm

```ts
export function hasArm(stateClient: RobotStateClient, timeout?: number | null): Promise<boolean>
```

Check if the robot has an arm attached.

| Parameter | Type | Description |
|---|---|---|
| `stateClient` | `RobotStateClient` | RobotStateClient to query for robot state. |
| `timeout` | `number \| null` | Timeout of the RPC in milliseconds (no deadline if null, like None in Python). (*Optional*, default `null`) |

**Returns** `Promise<boolean>`: Returns true if robot has an arm, false otherwise.

**Throws**

- `RpcError` A problem occurred trying to communicate with the robot.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `robotStatePb` | `spot-sdk-js/src/bosdyn/api/robot_state_pb.js` |
