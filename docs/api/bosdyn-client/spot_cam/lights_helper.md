# bosdyn-client/spot_cam/lights_helper

Flashes the LEDs of the Spot CAM, like the LightsHelper context manager of Python.

```js
const { LightsHelper } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`LightsHelper`](#lightshelper) | Class | Flashes Spot CAM LEDs between start() and stop(), like the Python context manager: |

## LightsHelper

```ts
class LightsHelper
```

Flashes Spot CAM LEDs between start() and stop(), like the Python context manager:

  const lights = new LightsHelper(frequency, brightness);
  await lights.init(robot);
  lights.start();
  // Lights will flash here
  await lights.stop();
  // Lights are off here.

### new LightsHelper

```ts
constructor(frequency: number, brightness: number)
```

| Parameter | Type | Description |
|---|---|---|
| `frequency` | `number` | The frequency |
| `brightness` | `number` | The brightness |

### Properties

| Property | Type | Description |
|---|---|---|
| `freq` | `number` |  |
| `brightness` | `number` |  |
| `thread` | `Promise<void> \| null` | The flashing loop, while it runs. |
| `stopEvent` | `Event` |  |
| `lightingClient` | `LightingClient \| undefined` |  |

### init

```ts
init(robot: any): Promise<void>
```

| Parameter | Type | Description |
|---|---|---|
| `robot` | `any` |  |

**Returns** `Promise<void>`

### start

```ts
start(): void
```

Start flashing the lights (Python's __enter__).

**Returns** `void`

### stop

```ts
stop(): Promise<void>
```

Stop flashing the lights (Python's __exit__).

**Returns** `Promise<void>`: Resolves once the loop has ended and the lights are off, like Python's join().

### setLightsWithFreqAndBrightness

```ts
setLightsWithFreqAndBrightness(lightingClient: LightingClient, frequency: number, brightness: number): Promise<void>
```

Given the threading event, lighting client, desired light frequency and brightness,
this helper will blink the Spot CAM lights until threading event is set to stop. This
function must be used within a thread to prevent it from running forever.

| Parameter | Type | Description |
|---|---|---|
| `lightingClient` | `LightingClient` | Lighting client |
| `frequency` | `number` | Desired frequency (Hz) for flashing the Spot CAM lights |
| `brightness` | `number` | Desired brightness [0, 1] for the Spot CAM lights |

**Returns** `Promise<void>`

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

**Returns** `Promise<void>`
