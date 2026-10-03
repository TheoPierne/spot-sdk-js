# bosdyn-client/spot_cam/compositor

For clients to the Spot CAM Compositor service.

```js
const { CompositorClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`CompositorClient`](#compositorclient) | Class | A client calling Spot CAM Compositor services. |

## CompositorClient

```ts
class CompositorClient extends BaseClient<CompositorServiceClient>
```

A client calling Spot CAM Compositor services.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-compositor'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.CompositorService'`. |

### setScreen

```ts
setScreen(name: string, args?: Object): Promise<string>
```

Change the current view that is being streamed over the network

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The screen name |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<string>`

### getScreen

```ts
getScreen(args?: Object): Promise<string>
```

Get the currently selected screen

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<string>`

### listScreens

```ts
listScreens(args?: Object): Promise<compositorPb.ScreenDescription[]>
```

List available screens

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<compositorPb.ScreenDescription[]>`

### getVisibleCameras

```ts
getVisibleCameras(args?: Object): Promise<compositorPb.GetVisibleCamerasResponse.Stream[]>
```

List cameras on Spot CAM

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<compositorPb.GetVisibleCamerasResponse.Stream[]>`

### setIrColormap

```ts
setIrColormap(colormap: compositorPb.IrColorMap.ColorMap, minTemp: number, maxTemp: number, autoScale: boolean, args?: Object): Promise<compositorPb.SetIrColormapResponse>
```

Set IR colormap to use on Spot CAM

| Parameter | Type | Description |
|---|---|---|
| `colormap` | `compositorPb.IrColorMap.ColorMap` | IR display colormap |
| `minTemp` | `number` | minimum temperature on the temperature scale |
| `maxTemp` | `number` | maximum temperature on the temperature scale |
| `autoScale` | `boolean` | Auto-scale the color map. This is the most human-understandable option. minTemp and maxTemp are ignored if this is set to true |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<compositorPb.SetIrColormapResponse>`

### setIrColorMap

```ts
setIrColorMap(colormap: any, minTemp: any, maxTemp: any, autoScale: any, args: any): Promise<compositorPb.SetIrColormapResponse>
```

> [!WARNING]
> **Deprecated.** Use setIrColormap() (like getIrColormap() and Python's set_ir_colormap()).

Set IR colormap to use on Spot CAM

| Parameter | Type | Description |
|---|---|---|
| `colormap` | `any` |  |
| `minTemp` | `any` |  |
| `maxTemp` | `any` |  |
| `autoScale` | `any` |  |
| `args` | `any` |  |

**Returns** `Promise<compositorPb.SetIrColormapResponse>`

### getIrColormap

```ts
getIrColormap(args?: Object): Promise<compositorPb.IrColorMap>
```

Get currently selected IR colormap on Spot CAM

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<compositorPb.IrColorMap>`

### setIrMeterOverlay

```ts
setIrMeterOverlay(x: number, y: number, enable: boolean, unit: compositorPb.IrMeterOverlay.TempUnit, args?: Object): Promise<compositorPb.SetIrMeterOverlayResponse>
```

Set IR reticle position to use on Spot CAM IR

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | horizontal coordinate of reticle |
| `y` | `number` | vertical coordinate of reticle |
| `enable` | `boolean` | Enable the reticle on the display |
| `unit` | `compositorPb.IrMeterOverlay.TempUnit` | Temperature unit to display |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<compositorPb.SetIrMeterOverlayResponse>`

### setMultiIrMeterOverlay

```ts
setMultiIrMeterOverlay(coords: Array<[number, number]>, enable: boolean, unit: compositorPb.IrMeterOverlay.TempUnit, args?: Object): Promise<compositorPb.SetIrMeterOverlayResponse>
```

Set multiple IR reticle positions to use on Spot CAM IR

| Parameter | Type | Description |
|---|---|---|
| `coords` | `Array<[number, number]>` | List of [x, y] reticle coordinates in range [0,1] e.g. [[0.1, 0.2], [0.2, 0.4], [0.7, 0.7]] |
| `enable` | `boolean` | Enable the reticles on the display |
| `unit` | `compositorPb.IrMeterOverlay.TempUnit` | Temperature unit to display |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<compositorPb.SetIrMeterOverlayResponse>`

### getIrMeterOverlay

```ts
getIrMeterOverlay(args?: Object): Promise<compositorPb.GetIrMeterOverlayResponse>
```

Get current IR reticle positions

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<compositorPb.GetIrMeterOverlayResponse>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `compositorPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/compositor_pb` |
