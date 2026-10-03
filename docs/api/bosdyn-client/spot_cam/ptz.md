# bosdyn-client/spot_cam/ptz

For clients to the Spot CAM Ptz service.

```js
const { PtzClient, createFocusState, shiftPanAngle } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`PtzClient`](#ptzclient) | Class | A client calling Spot CAM Ptz service. |
| [`createFocusState`](#createfocusstate) | Function | Generate a focus state proto. |
| [`shiftPanAngle`](#shiftpanangle) | Function | Shift the pan angle (degrees) so that it is in the [0,360] range. |

## PtzClient

```ts
class PtzClient extends BaseClient<PtzServiceClient>
```

A client calling Spot CAM Ptz service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-ptz'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.PtzService'`. |

### listPtz

```ts
listPtz(args?: Object): Promise<ptzPb.PtzDescription[]>
```

List all the available ptzs

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<ptzPb.PtzDescription[]>`

### getPtzPosition

```ts
getPtzPosition(ptzDesc: ptzPb.PtzDescription, args?: Object): Promise<ptzPb.PtzPosition>
```

Position of the specified ptz

| Parameter | Type | Description |
|---|---|---|
| `ptzDesc` | `ptzPb.PtzDescription` | The ptz from which to retrieve the position |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<ptzPb.PtzPosition>`

### getPtzVelocity

```ts
getPtzVelocity(ptzDesc: ptzPb.PtzDescription, args?: Object): Promise<ptzPb.PtzVelocity>
```

Velocity of the specified ptz

| Parameter | Type | Description |
|---|---|---|
| `ptzDesc` | `ptzPb.PtzDescription` | The ptz from which to retrieve the velocity |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<ptzPb.PtzVelocity>`

### setPtzPosition

```ts
setPtzPosition(ptzDesc: ptzPb.PtzDescription, pan: number, tilt: number, zoom: number, args?: Object): Promise<ptzPb.PtzPosition>
```

Set position of the specified ptz in PTZ-space

| Parameter | Type | Description |
|---|---|---|
| `ptzDesc` | `ptzPb.PtzDescription` | The ptz from which to apply the position |
| `pan` | `number` | The new pan value for the position |
| `tilt` | `number` | The new tilt value for the position |
| `zoom` | `number` | The new zoom value for the position |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<ptzPb.PtzPosition>`

### setPtzVelocity

```ts
setPtzVelocity(ptzDesc: ptzPb.PtzDescription, pan: number, tilt: number, zoom: number, args?: Object): Promise<ptzPb.PtzVelocity>
```

Set velocity of the specified ptz in PTZ-space

| Parameter | Type | Description |
|---|---|---|
| `ptzDesc` | `ptzPb.PtzDescription` | The ptz from which to apply the position |
| `pan` | `number` | The new pan value for the velocity |
| `tilt` | `number` | The new tilt value for the velocity |
| `zoom` | `number` | The new zoom value for the velocity |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<ptzPb.PtzVelocity>`

### initializeLens

```ts
initializeLens(args?: Object): Promise<ptzPb.InitializeLensResponse>
```

Initializes the PTZ autofocus or resets it if already initialized

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<ptzPb.InitializeLensResponse>`

### getPtzFocusState

```ts
getPtzFocusState(args?: Object): Promise<ptzPb.PtzFocusState>
```

Retrieve focus of the mechanical ptz

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<ptzPb.PtzFocusState>`

### setPtzFocusState

```ts
setPtzFocusState(focusMode: ptzPb.PtzFocusState.PtzFocusMode, distance?: number, focusPosition?: number, args?: Object): Promise<ptzPb.SetPtzFocusStateResponse>
```

Set focus of the mechanical ptz

| Parameter | Type | Description |
|---|---|---|
| `focusMode` | `ptzPb.PtzFocusState.PtzFocusMode` | Enum indicating whether to autofocus or manually focus |
| `distance` | `number` | Approximate distance to focus on, most accurate between 1.2m and 20m, only settable in PTZ_FOCUS_MANUAL mode (*Optional*) |
| `focusPosition` | `number` | Precise lens position for the camera for repeatable operations, overrides distance if specified, only settable in PTZ_FOCUS_MANUAL mode (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<ptzPb.SetPtzFocusStateResponse>`

## createFocusState

```ts
export function createFocusState(focusMode: ptzPb.PtzFocusState.PtzFocusMode, distance?: number | null, focusPosition?: number | null): ptzPb.PtzFocusState
```

Generate a focus state proto.

| Parameter | Type | Description |
|---|---|---|
| `focusMode` | `ptzPb.PtzFocusState.PtzFocusMode` | Enum indicating whether to autofocus or manually focus. |
| `distance` | `number \| null` | Approximate distance to focus on, only used in PTZ_FOCUS_MANUAL mode. (*Optional*, default `null`) |
| `focusPosition` | `number \| null` | Precise lens position for the camera, overrides distance if specified, only used in PTZ_FOCUS_MANUAL mode. (*Optional*, default `null`) |

**Returns** `ptzPb.PtzFocusState`

**Throws**

- `ValueError` In PTZ_FOCUS_MANUAL mode, neither distance nor focusPosition is given.

## shiftPanAngle

```ts
export function shiftPanAngle(pan: number): number
```

Shift the pan angle (degrees) so that it is in the [0,360] range.

| Parameter | Type | Description |
|---|---|---|
| `pan` | `number` | The angle in degrees to be shift. |

**Returns** `number`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `ptzPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/ptz_pb` |
