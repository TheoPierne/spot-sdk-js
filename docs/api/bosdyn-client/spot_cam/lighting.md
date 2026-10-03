# bosdyn-client/spot_cam/lighting

For clients to the Spot CAM Lighting service.

```js
const { LightingClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`LightingClient`](#lightingclient) | Class | A client calling Spot CAM Lighting service. |

## LightingClient

```ts
class LightingClient extends BaseClient<LightingServiceClient>
```

A client calling Spot CAM Lighting service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-lighting'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.LightingService'`. |

### getLedBrightness

```ts
getLedBrightness(args?: Object): Promise<number[]>
```

Retrieve the brightness value [0, 1] of each LED at indices [0, max).

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<number[]>`

### setLedBrightness

```ts
setLedBrightness(brightnesses: number[], args?: Object): Promise<void>
```

Set the brightness value [0, 1] of each LED at indices [0, max).

| Parameter | Type | Description |
|---|---|---|
| `brightnesses` | `number[]` | An array of number representing brightnesses |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`
