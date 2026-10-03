# bosdyn-client/spot_cam/index

The clients of the Spot CAM services, and registerAllServiceClients() to register them in a Robot.

```js
const { registerAllServiceClients, AudioClient, CompositorClient, ... } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`registerAllServiceClients`](#registerallserviceclients) | Function | Registers the clients of the Spot CAM services in an Sdk, so that robot.ensureClient() can create them. |
| [`AudioClient`](#constants) | Constant |  |
| [`CompositorClient`](#constants) | Constant |  |
| [`HealthClient`](#constants) | Constant |  |
| [`LightingClient`](#constants) | Constant |  |
| [`LightsHelper`](#constants) | Constant |  |
| [`MediaLogClient`](#constants) | Constant |  |
| [`NetworkClient`](#constants) | Constant |  |
| [`PowerClient`](#constants) | Constant |  |
| [`PtzClient`](#constants) | Constant |  |
| [`createFocusState`](#constants) | Constant |  |
| [`shiftPanAngle`](#constants) | Constant |  |
| [`StreamQualityClient`](#constants) | Constant |  |
| [`VersionClient`](#constants) | Constant |  |
| [`IMAGE_SERVICE_NAME`](#constants) | Constant | The name of the image service of the Spot CAM. |
| [`CLIENTS`](#constants) | Constant |  |

## registerAllServiceClients

```ts
export function registerAllServiceClients(sdk: import("../sdk").Sdk): void
```

Registers the clients of the Spot CAM services in an Sdk, so that robot.ensureClient() can create them.

| Parameter | Type | Description |
|---|---|---|
| `sdk` | `import("../sdk").Sdk` |  |

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `AudioClient` | `typeof audio.AudioClient` |  |
| `CompositorClient` | `typeof compositor.CompositorClient` |  |
| `HealthClient` | `typeof health.HealthClient` |  |
| `LightingClient` | `typeof lighting.LightingClient` |  |
| `LightsHelper` | `typeof lightsHelper.LightsHelper` |  |
| `MediaLogClient` | `typeof mediaLog.MediaLogClient` |  |
| `NetworkClient` | `typeof network.NetworkClient` |  |
| `PowerClient` | `typeof power.PowerClient` |  |
| `PtzClient` | `typeof ptz.PtzClient` |  |
| `createFocusState` | `typeof ptz.createFocusState` |  |
| `shiftPanAngle` | `typeof ptz.shiftPanAngle` |  |
| `StreamQualityClient` | `typeof streamquality.StreamQualityClient` |  |
| `VersionClient` | `typeof version.VersionClient` |  |
| `IMAGE_SERVICE_NAME` | `'spot-cam-image'` | The name of the image service of the Spot CAM. |
| `CLIENTS` | `(typeof audio.AudioClient \| typeof compositor.CompositorClient \| typeof health.HealthClient \| typeof lighting.LightingClient \| typeof mediaLog.MediaLogClient \| typeof network.NetworkClient \| typeof power.PowerClient \| typeof ptz.PtzClient \| typeof streamquality.StreamQualityClient \| typeof version.VersionClient)[]` |  |
