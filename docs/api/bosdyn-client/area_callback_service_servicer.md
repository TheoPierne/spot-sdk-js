# bosdyn-client/area_callback_service_servicer

The implementation of the area callback service: it answers the requests of GraphNav with a new region handler
for each area callback region, like bosdyn.client.area_callback_service_servicer in Python.

```js
const { AreaCallbackServiceServicer } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AreaCallbackServiceServicer`](#areacallbackserviceservicer) | Class | Implementation of area callback service: add it to a gRPC server with AreaCallbackServiceService (e.g. |

## AreaCallbackServiceServicer

```ts
class AreaCallbackServiceServicer
```

Implementation of area callback service: add it to a gRPC server with AreaCallbackServiceService (e.g. with
runService() of area_callback_service_runner).

The RPCs wait for the clients of the robot (await ready): the constructor of Python creates them.

### new AreaCallbackServiceServicer

```ts
constructor(robot: Robot, config: AreaCallbackServiceConfig, areaCallbackBuilderFn: (new (arg1: AreaCallbackServiceConfig, arg2: Robot) => AreaCallbackRegionHandlerBase) | ((arg0: AreaCallbackServiceConfig, arg1: Robot) => AreaCallbackRegionHandlerBase))
```

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | The Robot object used to create service clients. |
| `config` | `AreaCallbackServiceConfig` | The AreaCallbackServiceConfig defining the data for the AreaCallbackInformation response. |
| `areaCallbackBuilderFn` | `(new (arg1: AreaCallbackServiceConfig, arg2: Robot) => AreaCallbackRegionHandlerBase) \| ((arg0: AreaCallbackServiceConfig, arg1: Robot) => AreaCallbackRegionHandlerBase)` | Class or function to create the AreaCallbackRegionHandlerBase subclass that implements the details of the callback. Usually this will simply be the class itself. |

### Properties

| Property | Type | Description |
|---|---|---|
| `SERVICE_TYPE` | `string` | Static. Value: `'bosdyn.api.graph_nav.AreaCallbackService'`. |
| `areaCallbackServiceConfig` | `import("./area_callback_service_utils").AreaCallbackServiceConfig` |  |
| `areaCallbackBuilderFn` | `(new (arg1: AreaCallbackServiceConfig, arg2: Robot) => AreaCallbackRegionHandlerBase) \| ((arg0: AreaCallbackServiceConfig, arg1: Robot) => AreaCallbackRegionHandlerBase)` |  |
| `areaCallbackRegionHandler` | `AreaCallbackRegionHandlerBase \| null` |  |
| `areaCallbackActiveThread` | `_RunThread \| null` |  |
| `areaCallbackActiveThreadEvent` | `Event \| null` |  |
| `robot` | `import("./robot").Robot` |  |
| `paramValidator` | `(arg0: DictParam) => import("spot-sdk-js/src/bosdyn/api/service_customization_pb").CustomParamError \| null` |  |
| `ready` | `Promise<void>` | Resolves once the clients of the robot are created. |

### areaCallbackInformation

```ts
areaCallbackInformation(call: any, callback: Function): Promise<void>
```

Return the configured AreaCallbackInformation.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the AreaCallbackInformationRequest. |
| `callback` | `Function` | Receives the AreaCallbackInformationResponse. |

**Returns** `Promise<void>`

### beginCallback

```ts
beginCallback(call: any, callback: Function): Promise<void>
```

Begin the callback in a new region.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the BeginCallbackRequest. |
| `callback` | `Function` | Receives the BeginCallbackResponse. |

**Returns** `Promise<void>`

### beginControl

```ts
beginControl(call: any, callback: Function): Promise<void>
```

Receive robot control from GraphNav.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the BeginControlRequest. |
| `callback` | `Function` | Receives the BeginControlResponse. |

**Returns** `Promise<void>`

### updateCallback

```ts
updateCallback(call: any, callback: Function): Promise<void>
```

Regular updates from GraphNav, with responses to update the policy.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the UpdateCallbackRequest. |
| `callback` | `Function` | Receives the UpdateCallbackResponse. |

**Returns** `Promise<void>`

### endCallback

```ts
endCallback(call: any, callback: Function): Promise<void>
```

Terminate handling of this region.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the EndCallbackRequest. |
| `callback` | `Function` | Receives the EndCallbackResponse. |

**Returns** `Promise<void>`

### routeChange

```ts
routeChange(call: any, callback: Function): Promise<void>
```

Called when we re-route within the callback. Most callbacks do not need to know about changes in the route, and
can ignore this.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the RouteChangeRequest. |
| `callback` | `Function` | Receives the RouteChangeResponse. |

**Returns** `Promise<void>`

### shutdown

```ts
shutdown(timeout?: number): Promise<boolean>
```

Call to force run thread to terminate.

| Parameter | Type | Description |
|---|---|---|
| `timeout` | `number` | Time allowed to run thread to shut down, in seconds. (*Optional*, default `5`) |

**Returns** `Promise<boolean>`: True if the thread correctly shut down within the allowed time.
