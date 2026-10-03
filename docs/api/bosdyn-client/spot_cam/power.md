# bosdyn-client/spot_cam/power

For clients to the Spot CAM Power service.

```js
const { PowerClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`PowerClient`](#powerclient) | Class | A client calling Spot CAM Power service. |

## PowerClient

```ts
class PowerClient extends BaseClient<PowerServiceClient>
```

A client calling Spot CAM Power service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-power'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.PowerService'`. |

### getPowerStatus

```ts
getPowerStatus(args?: Object): Promise<powerPb.PowerStatus>
```

Retrieve on/off state of device.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<powerPb.PowerStatus>`

### setPowerStatus

```ts
setPowerStatus(ptz?: boolean, aux1?: boolean, aux2?: boolean, externalMic?: boolean, args?: Object): Promise<powerPb.PowerStatus>
```

Turn on/off the desire device.
Should not be used on PTZ for non-IR units as it can cause the stream to crash.
If the intent is to reset the PTZ autofocus, try PtzClient.initializeLens instead.
If the intent is to recover the PTZ stream in another way, you may need to power cycle the robot.

| Parameter | Type | Description |
|---|---|---|
| `ptz` | `boolean` | Turn on/off ptz (*Optional*) |
| `aux1` | `boolean` | Turn on/off aux1 (*Optional*) |
| `aux2` | `boolean` | Turn on/off aux2 (*Optional*) |
| `externalMic` | `boolean` | Turn on/off external mic (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<powerPb.PowerStatus>`

### cyclePower

```ts
cyclePower(ptz?: boolean, aux1?: boolean, aux2?: boolean, externalMic?: boolean, args?: Object): Promise<powerPb.PowerStatus>
```

Turn power off then back on for the desired devices.
Should not be used on PTZ for non-IR units as it can cause the stream to crash.
If the intent is to reset the PTZ autofocus, try PtzClient.initializeLens instead.
If the intent is to recover the PTZ stream in another way, you may need to power cycle the robot.

| Parameter | Type | Description |
|---|---|---|
| `ptz` | `boolean` | Turn on/off ptz (*Optional*) |
| `aux1` | `boolean` | Turn on/off aux1 (*Optional*) |
| `aux2` | `boolean` | Turn on/off aux2 (*Optional*) |
| `externalMic` | `boolean` | Turn on/off external mic (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<powerPb.PowerStatus>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `powerPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/power_pb` |
