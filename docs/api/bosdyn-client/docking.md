# bosdyn-client/docking

A client for the docking service.

```js
const { DockingClient, blockingDockRobot, blockingGoToPrepPose, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DockingClient`](#dockingclient) | Class | A client for the docking service to help issue DockingCommand and get state. |
| [`blockingDockRobot`](#blockingdockrobot) | Function | Blocking helper that takes control of the robot and docks it. |
| [`blockingGoToPrepPose`](#blockinggotopreppose) | Function | Blocking helper that takes control of the robot and takes it to the prep pose only. |
| [`blockingUndock`](#blockingundock) | Function | Blocking helper that undocks the robot from the currently docked dock. |
| [`getDockId`](#getdockid) | Function | Blocking helper to get dock ID that robot is currently docked at, Null if not docked. |

## DockingClient

```ts
class DockingClient extends BaseClient<DockingServiceClient>
```

A client for the docking service to help issue DockingCommand and get state.
Clients are expected to issue a single DockingCommand and then periodically
check the status of its execution.
This service requires ownership over the robot, in the form of a lease and timesync.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'docking'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.docking.DockingService'`. |

### dockingCommand

```ts
dockingCommand(stationId: number, clockIdentifier: string, endTime: Timestamp, prepPoseBehavior?: dockingPb.PrepPoseBehavior, lease?: Lease, args?: Object): Promise<number>
```

Issue a DockingCommandRequest to the robot.

| Parameter | Type | Description |
|---|---|---|
| `stationId` | `number` | The ID of the docking station to dock at. |
| `clockIdentifier` | `string` | Identifier provided by the time sync service. |
| `endTime` | `Timestamp` | Expiry time of the command in robot time. |
| `prepPoseBehavior` | `dockingPb.PrepPoseBehavior` | How and if to use the pre-dock pose. (*Optional*, default `null`) |
| `lease` | `Lease` | Leave empty to have the lease filled in by the LeaseWallet (*Optional*, default `null`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`

### dockingCommandFull

```ts
dockingCommandFull(stationId: number, clockIdentifier: string, endTime: Timestamp, prepPoseBehavior?: dockingPb.PrepPoseBehavior, lease?: Lease, requireFiducial?: boolean, args?: Object): Promise<dockingPb.DockingCommandResponse>
```

Identical to dockingCommand(), except will return the full DockingCommandResponse.

| Parameter | Type | Description |
|---|---|---|
| `stationId` | `number` | The ID of the docking station to dock at. |
| `clockIdentifier` | `string` | Identifier provided by the time sync service. |
| `endTime` | `Timestamp` | Expiry time of the command in robot time. |
| `prepPoseBehavior` | `dockingPb.PrepPoseBehavior` | How and if to use the pre-dock pose. (*Optional*, default `null`) |
| `lease` | `Lease` | Leave empty to have the lease filled in by the LeaseWallet (*Optional*, default `null`) |
| `requireFiducial` | `boolean` | Whether to require fiducial. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dockingPb.DockingCommandResponse>`

### dockingCommandFeedbackFull

```ts
dockingCommandFeedbackFull(commandId: number, endTime?: Timestamp, args?: Object): Promise<dockingPb.DockingCommandFeedbackResponse>
```

Check the status of a previously issued docking command.

| Parameter | Type | Description |
|---|---|---|
| `commandId` | `number` | The ID returned from a previous docking_command call. |
| `endTime` | `Timestamp` | Expiry time of the command in robot time. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dockingPb.DockingCommandFeedbackResponse>`

### getDockingConfig

```ts
getDockingConfig(args?: Object): Promise<dockingPb.ConfigRange>
```

Get the docking config stored on the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dockingPb.ConfigRange>`

### getDockingState

```ts
getDockingState(args?: Object): Promise<dockingPb.DockState>
```

Get docking state from the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dockingPb.DockState>`

## blockingDockRobot

```ts
export function blockingDockRobot(robot: Robot, dockId: number, numRetries?: number, timeoutMsec?: number): Promise<number>
```

Blocking helper that takes control of the robot and docks it.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | The instance of the robot to control. |
| `dockId` | `number` | The ID of the dock to dock at. |
| `numRetries` | `number` | Optional, number of attempts. (*Optional*, default `4`) |
| `timeoutMsec` | `number` | (*Optional*, default `30_000`) |

**Returns** `Promise<number>`: The number of retries required

## blockingGoToPrepPose

```ts
export function blockingGoToPrepPose(robot: Robot, dockId: number, timeout?: number): Promise<void>
```

Blocking helper that takes control of the robot and takes it to the prep pose only.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | The instance of the robot to control. |
| `dockId` | `number` | The ID of the dock to use. |
| `timeout` | `number` | Timeout in milliseconds (*Optional*, default `20_000`) |

**Returns** `Promise<void>`

## blockingUndock

```ts
export function blockingUndock(robot: Robot, timeout?: number): Promise<void>
```

Blocking helper that undocks the robot from the currently docked dock.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | The instance of the robot to control. |
| `timeout` | `number` | Timeout in milliseconds (*Optional*, default `20_000`) |

**Returns** `Promise<void>`

## getDockId

```ts
export function getDockId(robot: Robot): Promise<number | null>
```

Blocking helper to get dock ID that robot is currently docked at, Null if not docked.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | The instance of the robot to get dock id. |

**Returns** `Promise<number \| null>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dockingPb` | `spot-sdk-js/src/bosdyn/api/docking/docking_pb` |
