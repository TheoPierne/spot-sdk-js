# bosdyn-client/power

For clients to the power command service.

```js
const { PowerClient, powerOn, powerOff, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { CommandTimedOutError } = require('spot-sdk-js/src/bosdyn-client/power');
```

| Export | Kind | Description |
|---|---|---|
| [`PowerClient`](#powerclient) | Class | A client for enabling / disabling robot motor power. |
| [`powerOn`](#poweron) | Function | Power on robot motors. |
| [`powerOff`](#poweroff) | Function | Power off the robot motors. |
| [`powerOnMotors`](#poweronmotors) | Function | Power on the robot motors. |
| [`powerOffMotors`](#poweroffmotors) | Function | Power off the robot motors. |
| [`safePowerOffRobot`](#safepoweroffrobot) | Function | Power off the robot motors and then the robot computers safely. |
| [`safePowerOffMotors`](#safepoweroffmotors) | Function | Power off robot motors safely. |
| [`powerOffRobot`](#poweroffrobot) | Function | Fully power off the robot. |
| [`safePowerCycleRobot`](#safepowercyclerobot) | Function | Power cycle the robot safely. |
| [`powerCycleRobot`](#powercyclerobot) | Function | Power cycle the robot. |
| [`safeSoftRebootRobot`](#safesoftrebootrobot) | Function | Soft reboot the robot safely. |
| [`softRebootRobot`](#softrebootrobot) | Function | Soft reboot the robot. |
| [`powerOffPayloadPorts`](#poweroffpayloadports) | Function | Power off the robot payload ports. |
| [`powerOnPayloadPorts`](#poweronpayloadports) | Function | Power on the robot payload ports. |
| [`powerOffWifiRadio`](#poweroffwifiradio) | Function | Power off the robot Wi-Fi radio. |
| [`powerOnWifiRadio`](#poweronwifiradio) | Function | Power on the robot Wi-Fi radio. |
| [`isPoweredOn`](#ispoweredon) | Function | Returns true if robot is powered on, false otherwise. |
| [`PowerResponseError`](#powerresponseerror) | Class | General class of errors for Power service. |
| [`ShorePowerConnectedError`](#shorepowerconnectederror) | Class | Robot cannot be powered on while on wall power. |
| [`BatteryMissingError`](#batterymissingerror) | Class | Battery not inserted into robot. |
| [`CommandInProgressError`](#commandinprogresserror) | Class | Power command cannot be overwritten. |
| [`EstoppedError`](#estoppederror) | Class | Cannot power on while estopped; inspect EStopState for more info. |
| [`OverriddenError`](#overriddenerror) | Class | The command was overridden and is no longer valid. |
| [`KeepaliveMotorsOffError`](#keepalivemotorsofferror) | Class | Cannot power on while Keepalive requests motors off. |
| [`FaultedError`](#faultederror) | Class | Cannot power on due to a fault; inspect FaultState for more info. |
| [`FanControlTemperatureError`](#fancontroltemperatureerror) | Class | Current measured robot temperatures are too high to accept user fan command. |
| [`SafetyStopIncompatibleHardwareError`](#safetystopincompatiblehardwareerror) | Class | SafetyStop command invalid because robot is not configured for SRSF. |
| [`SafetyStopFailedError`](#safetystopfailederror) | Class | SafetyStop command executed and failed. |
| [`SafetyStopUnknownStopTypeError`](#safetystopunknownstoptypeerror) | Class | SafetyStop command failed due to unknown stop type. |
| [`PowerError`](#powererror) | Class | General class of errors to handle non-response non-grpc errors. |
| [`CommandTimedOutError`](#commandtimedouterror) | Class | Timed out waiting for SUCCESS response from power command. |

## PowerResponseError

```ts
class PowerResponseError extends ResponseError
```

General class of errors for Power service.

## ShorePowerConnectedError

```ts
class ShorePowerConnectedError extends PowerResponseError
```

Robot cannot be powered on while on wall power.

## BatteryMissingError

```ts
class BatteryMissingError extends PowerResponseError
```

Battery not inserted into robot.

## CommandInProgressError

```ts
class CommandInProgressError extends PowerResponseError
```

Power command cannot be overwritten.

## EstoppedError

```ts
class EstoppedError extends PowerResponseError
```

Cannot power on while estopped; inspect EStopState for more info.

## OverriddenError

```ts
class OverriddenError extends PowerResponseError
```

The command was overridden and is no longer valid.

## KeepaliveMotorsOffError

```ts
class KeepaliveMotorsOffError extends PowerResponseError
```

Cannot power on while Keepalive requests motors off.

## FaultedError

```ts
class FaultedError extends PowerResponseError
```

Cannot power on due to a fault; inspect FaultState for more info.

## FanControlTemperatureError

```ts
class FanControlTemperatureError extends PowerResponseError
```

Current measured robot temperatures are too high to accept user fan command.

## SafetyStopIncompatibleHardwareError

```ts
class SafetyStopIncompatibleHardwareError extends PowerResponseError
```

SafetyStop command invalid because robot is not configured for SRSF.

## SafetyStopFailedError

```ts
class SafetyStopFailedError extends PowerResponseError
```

SafetyStop command executed and failed.

## SafetyStopUnknownStopTypeError

```ts
class SafetyStopUnknownStopTypeError extends PowerResponseError
```

SafetyStop command failed due to unknown stop type.

## PowerError

```ts
class PowerError extends BosdynError
```

General class of errors to handle non-response non-grpc errors.

## CommandTimedOutError

```ts
class CommandTimedOutError extends PowerError
```

Timed out waiting for SUCCESS response from power command.

## PowerClient

```ts
class PowerClient extends BaseClient<PowerServiceClient>
```

A client for enabling / disabling robot motor power.
Commands are non blocking. Clients are expected to issue a power command and then periodically
check the status of this command.
This service requires ownership over the robot, in the form of a lease.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'power'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.PowerService'`. |

### powerCommand

```ts
powerCommand(request: powerPb.PowerCommandRequest.Request, lease?: Lease, args?: Object): Promise<powerPb.PowerCommandResponse>
```

Issue a power request to the robot.

| Parameter | Type | Description |
|---|---|---|
| `request` | `powerPb.PowerCommandRequest.Request` | The power request to send |
| `lease` | `Lease` | The lease to send (*Optional*) |
| `args` | `Object` | The option to send with the rpc request (*Optional*) |

**Returns** `Promise<powerPb.PowerCommandResponse>`

### powerCommandFeedback

```ts
powerCommandFeedback(powerCommandId: number, args?: Object): Promise<powerPb.PowerCommandStatus>
```

Check the status of a previously issued power command.

| Parameter | Type | Description |
|---|---|---|
| `powerCommandId` | `number` | The power command identifier |
| `args` | `Object` | The option to send with the rpc request (*Optional*) |

**Returns** `Promise<powerPb.PowerCommandStatus>`

### fanPowerCommand

```ts
fanPowerCommand(percentPower: number, duration: number, lease?: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease, args?: Object): Promise<powerPb.FanPowerCommandResponse>
```

Issue a fan power command request to the robot.

| Parameter | Type | Description |
|---|---|---|
| `percentPower` | `number` | The power percent to apply |
| `duration` | `number` | The duration of the command, in whole seconds (Duration.seconds, like Python). |
| `lease` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease` | The lease proto (*Optional*) |
| `args` | `Object` | The option to send with the rpc request (*Optional*) |

**Returns** `Promise<powerPb.FanPowerCommandResponse>`

### getFanInfo

```ts
getFanInfo(args?: Object): Promise<powerPb.GetFanInformationResponse>
```

Get fan information.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | The option to send with the rpc request (*Optional*) |

**Returns** `Promise<powerPb.GetFanInformationResponse>`

### fanPowerCommandFeedback

```ts
fanPowerCommandFeedback(commandId: number, args?: Object): Promise<powerPb.FanPowerCommandFeedbackResponse>
```

Check the status of a previously issued fan command

| Parameter | Type | Description |
|---|---|---|
| `commandId` | `number` | The command id |
| `args` | `Object` | The option to send with the rpc request (*Optional*) |

**Returns** `Promise<powerPb.FanPowerCommandFeedbackResponse>`

### resetSafetyStop

```ts
resetSafetyStop(safetyStopType: powerPb.ResetSafetyStopRequest.SafetyStopType, lease?: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease | null, args?: Object): Promise<powerPb.ResetSafetyStopRequest>
```

Issue a reset safety stop request to the robot.

| Parameter | Type | Description |
|---|---|---|
| `safetyStopType` | `powerPb.ResetSafetyStopRequest.SafetyStopType` | The safety stop type to send |
| `lease` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease \| null` | The lease proto (*Optional*) |
| `args` | `Object` | The option to send with the rpc request (*Optional*) |

**Returns** `Promise<powerPb.ResetSafetyStopRequest>`

## powerOn

```ts
export function powerOn(powerClient: any, timeoutMsec: number | undefined, updateFrequency: number | undefined, args: any): Promise<void>
```

Power on robot motors.

See powerOnMotors().

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `any` |  |
| `timeoutMsec` | `number \| undefined` |  |
| `updateFrequency` | `number \| undefined` |  |
| `args` | `any` |  |

**Returns** `Promise<void>`

## powerOff

```ts
export function powerOff(powerClient: any, timeoutMsec: number | undefined, updateFrequency: number | undefined, args: any): Promise<void>
```

Power off the robot motors.

See powerOffMotors().

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `any` |  |
| `timeoutMsec` | `number \| undefined` |  |
| `updateFrequency` | `number \| undefined` |  |
| `args` | `any` |  |

**Returns** `Promise<void>`

## powerOnMotors

```ts
export function powerOnMotors(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power on the robot motors. This function blocks until the command returns success.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## powerOffMotors

```ts
export function powerOffMotors(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power off the robot motors.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeout_msec.
- `PowerResponseError` Something went wrong during the power off sequence.

## safePowerOffRobot

```ts
export function safePowerOffRobot(commandClient: RobotCommandClient, stateClient: RobotStateClient, powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power off the robot motors and then the robot computers safely. This function blocks until
robot safely powers off. This means the robot will attempt to sit before powering motors off.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | Client for calling RobotCommandService safe power off. |
| `stateClient` | `RobotStateClient` | Client for monitoring power state. |
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec
- `RobotCommandResponseError` Something went wrong with the safe power off.

## safePowerOffMotors

```ts
export function safePowerOffMotors(commandClient: RobotCommandClient, stateClient: RobotStateClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power off robot motors safely. This function blocks until robot safely powers off. This
means the robot will attempt to sit before powering motors off.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | Client for calling RobotCommandService safe power off. |
| `stateClient` | `RobotStateClient` | Client for monitoring power state. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeout_sec.
- `RobotCommandResponseError` Something went wrong during the power off sequence.

## powerOffRobot

```ts
export function powerOffRobot(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Fully power off the robot. Powering off the robot will stop API comms.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## safePowerCycleRobot

```ts
export function safePowerCycleRobot(commandClient: RobotCommandClient, stateClient: RobotStateClient, powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power cycle the robot safely. This function blocks until robot safely powers off. The robot
will attempt to sit before powering cycling.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | Client for calling RobotCommandService safe power off. |
| `stateClient` | `RobotStateClient` | Client for monitoring power state. |
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## powerCycleRobot

```ts
export function powerCycleRobot(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power cycle the robot. Power cycling the robot will stop API comms.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## safeSoftRebootRobot

```ts
export function safeSoftRebootRobot(commandClient: RobotCommandClient, stateClient: RobotStateClient, powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Soft reboot the robot safely. This function blocks until robot safely powers off. The robot
will attempt to sit before soft rebooting.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | Client for calling RobotCommandService safe power off. |
| `stateClient` | `RobotStateClient` | Client for monitoring power state. |
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `RobotCommandResponseError` Something went wrong with the safe power off.

## softRebootRobot

```ts
export function softRebootRobot(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Soft reboot the robot. Rebooting the robot will stop API comms.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## powerOffPayloadPorts

```ts
export function powerOffPayloadPorts(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power off the robot payload ports.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## powerOnPayloadPorts

```ts
export function powerOnPayloadPorts(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power on the robot payload ports.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## powerOffWifiRadio

```ts
export function powerOffWifiRadio(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power off the robot Wi-Fi radio.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## powerOnWifiRadio

```ts
export function powerOnWifiRadio(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>
```

Power on the robot Wi-Fi radio.

| Parameter | Type | Description |
|---|---|---|
| `powerClient` | `PowerClient` | Client for calling power service. |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*, default `30000`) |
| `updateFrequency` | `number` | The frequency with which the robot should check if the command has succeeded. (*Optional*, default `1.0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `CommandTimedOutError` Did not power off within timeoutMsec.
- `PowerResponseError` Something went wrong during the power off sequence.

## isPoweredOn

```ts
export function isPoweredOn(stateClient: RobotStateClient, args?: Object): Promise<boolean>
```

Returns true if robot is powered on, false otherwise.

| Parameter | Type | Description |
|---|---|---|
| `stateClient` | `RobotStateClient` | Robot state client instance. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<boolean>`

**Throws**

- `RpcError` Problem communicating with the robot

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `powerPb` | `spot-sdk-js/src/bosdyn/api/power_pb` |
