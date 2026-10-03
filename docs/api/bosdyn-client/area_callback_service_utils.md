# bosdyn-client/area_callback_service_utils

The configuration of an area callback service, and the service faults it triggers while the services it needs
are unavailable, like bosdyn.client.area_callback_service_utils in Python.

```js
const { AreaCallbackServiceConfig, handleServiceFaults } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AreaCallbackServiceConfig`](#areacallbackserviceconfig) | Class | Config data required to run a area callback service. |
| [`handleServiceFaults`](#handleservicefaults) | Function | Helper to raise service faults when other services are unavailable: every 0.5 second, the service is faulted when one of the prerequisite services is not registered or is faulted, and its fault is cleared when they are all back. |

## AreaCallbackServiceConfig

```ts
class AreaCallbackServiceConfig
```

Config data required to run a area callback service.

### new AreaCallbackServiceConfig

```ts
constructor(serviceName: string, requiredLeaseResources?: string[], logBeginCallbackData?: boolean, areaCallbackInformation?: AreaCallbackInformation | null)
```

| Parameter | Type | Description |
|---|---|---|
| `serviceName` | `string` | The name of the service, for registering with directory. |
| `requiredLeaseResources` | `string[]` | ] List of required lease resources. (*Optional*, default `[`) |
| `logBeginCallbackData` | `boolean` | Log the data field of the begin callback request. (*Optional*, default `false`) |
| `areaCallbackInformation` | `AreaCallbackInformation \| null` | Information describing the area callback. (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `serviceName` | `string` |  |
| `requiredLeaseResources` | `string[]` |  |
| `logBeginCallbackData` | `boolean` |  |
| `areaCallbackInformation` | `AreaCallbackInformation` |  |

### parseParams

```ts
parseParams(params: DictParam): Object
```

Parse params and validate they agree with the spec stored in areaCallbackInformation.

| Parameter | Type | Description |
|---|---|---|
| `params` | `DictParam` | The parameters being validated. |

**Returns** `Object`: The values of the parameters.

**Throws**

- `InvalidCustomParamValueError` The parameters do not agree with the spec.

## handleServiceFaults

```ts
export function handleServiceFaults(faultClient: FaultClient, robotStateClient: RobotStateClient, directoryClient: DirectoryClient, serviceName: string, prereqServices: string[], { signal }?: {
    signal?: AbortSignal | null | undefined;
}): Promise<void>
```

Helper to raise service faults when other services are unavailable: every 0.5 second, the service is faulted when
one of the prerequisite services is not registered or is faulted, and its fault is cleared when they are all back.

Python runs this endless loop in a daemon thread: here its waits do not keep the process alive, and a signal can
stop it (not in Python).

| Parameter | Type | Description |
|---|---|---|
| `faultClient` | `FaultClient` |  |
| `robotStateClient` | `RobotStateClient` |  |
| `directoryClient` | `DirectoryClient` |  |
| `serviceName` | `string` | The service to fault, and the name of its fault. |
| `prereqServices` | `string[]` | The services it needs. |
| `options` | `{ signal?: AbortSignal \| null \| undefined; }` | (*Optional*) |
| `options.signal` | `?AbortSignal` | Stops the loop. (*Optional*, default `null`) |

**Returns** `Promise<void>`: Resolves when the signal is aborted, rejects with an error which is not an error of the SDK (the errors of the SDK are logged).
