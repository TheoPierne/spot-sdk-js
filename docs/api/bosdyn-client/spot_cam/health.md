# bosdyn-client/spot_cam/health

For clients to the Spot CAM Health service.

```js
const { HealthClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`HealthClient`](#healthclient) | Class | A client calling Spot CAM Health service. |

## HealthClient

```ts
class HealthClient extends BaseClient<HealthServiceClient>
```

A client calling Spot CAM Health service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-health'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.HealthService'`. |

### clearBitEvents

```ts
clearBitEvents(args?: Object): Promise<void>
```

Clear out the events list of the BITStatus structure.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`

### getBitStatus

```ts
getBitStatus(args?: Object): Promise<{
    events: SystemFault[];
    degradations: healthPb.GetBITStatusResponse.Degradation[];
}>
```

Retrieve (system events, degradations) as an object of two lists.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<{ events: SystemFault[]; degradations: healthPb.GetBITStatusResponse.Degradation[]; }>`

### getTemperature

```ts
getTemperature(args?: Object): Promise<healthPb.Temperature[]>
```

Retrieve a list of thermometers measuring the temperature (mC) of corresponding on-board devices.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<healthPb.Temperature[]>`

### getSystemLog

```ts
getSystemLog(args?: Object): Promise<any[]>
```

Retrieve a list of thermometers measuring the temperature (mC) of corresponding on-board devices.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<any[]>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `healthPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/health_pb` |
