# bosdyn-client/area_callback

Client for the area callback services: the services GraphNav calls when the robot crosses an area callback
region of a map.

```js
const { AreaCallbackClient, AreaCallbackResponseError, InvalidCommandIdError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AreaCallbackClient`](#areacallbackclient) | Class |  |
| [`AreaCallbackResponseError`](#areacallbackresponseerror) | Class | General class of errors for AreaCallback service. |
| [`InvalidCommandIdError`](#invalidcommandiderror) | Class | Provided command id does not match the current command id. |
| [`InvalidConfigError`](#invalidconfigerror) | Class | The provided configuration does not provide the necessary data. |
| [`ExpiredEndTimeError`](#expiredendtimeerror) | Class | The provided end time has already expired. |
| [`MissingLeaseResourcesError`](#missingleaseresourceserror) | Class | A required lease resource was not provided. |
| [`ShutdownCallbackFailedError`](#shutdowncallbackfailederror) | Class | The callback failed to shut down properly. |

## AreaCallbackClient

```ts
class AreaCallbackClient extends BaseClient<AreaCallbackServiceClient>
```

### Properties

| Property | Type | Description |
|---|---|---|
| `serviceType` | `string` | Static. Value: `'bosdyn.api.graph_nav.AreaCallbackService'`. |
| `defaultServiceName` | `null` | Static. |

### areaCallbackInformation

```ts
areaCallbackInformation(request: null | undefined, args: any): Promise<any>
```

| Parameter | Type | Description |
|---|---|---|
| `request` | `null \| undefined` |  |
| `args` | `any` |  |

**Returns** `Promise<any>`

### beginCallback

```ts
beginCallback(request: any, args: any): Promise<any>
```

| Parameter | Type | Description |
|---|---|---|
| `request` | `any` |  |
| `args` | `any` |  |

**Returns** `Promise<any>`

### beginControl

```ts
beginControl(request: any, args: any): Promise<any>
```

| Parameter | Type | Description |
|---|---|---|
| `request` | `any` |  |
| `args` | `any` |  |

**Returns** `Promise<any>`

### beginControll

```ts
beginControll(request: any, args: any): Promise<any>
```

> [!WARNING]
> **Deprecated.** Misspelled: use beginControl().

| Parameter | Type | Description |
|---|---|---|
| `request` | `any` |  |
| `args` | `any` |  |

**Returns** `Promise<any>`

### updateCallback

```ts
updateCallback(request: any, args: any): Promise<any>
```

| Parameter | Type | Description |
|---|---|---|
| `request` | `any` |  |
| `args` | `any` |  |

**Returns** `Promise<any>`

### endCallback

```ts
endCallback(request: any, args: any): Promise<any>
```

| Parameter | Type | Description |
|---|---|---|
| `request` | `any` |  |
| `args` | `any` |  |

**Returns** `Promise<any>`

## AreaCallbackResponseError

```ts
class AreaCallbackResponseError extends ResponseError
```

General class of errors for AreaCallback service.

## InvalidCommandIdError

```ts
class InvalidCommandIdError extends AreaCallbackResponseError
```

Provided command id does not match the current command id.

## InvalidConfigError

```ts
class InvalidConfigError extends AreaCallbackResponseError
```

The provided configuration does not provide the necessary data.

## ExpiredEndTimeError

```ts
class ExpiredEndTimeError extends AreaCallbackResponseError
```

The provided end time has already expired.

## MissingLeaseResourcesError

```ts
class MissingLeaseResourcesError extends AreaCallbackResponseError
```

A required lease resource was not provided.

## ShutdownCallbackFailedError

```ts
class ShutdownCallbackFailedError extends AreaCallbackResponseError
```

The callback failed to shut down properly.
