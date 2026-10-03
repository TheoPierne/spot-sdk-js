# bosdyn-client/auto_return

Client implementation of the AutoReturn service.

```js
const { AutoReturnClient, AutoReturnResponseError, InvalidParameterError } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AutoReturnClient`](#autoreturnclient) | Class | A client for configuring automatic AutoReturn behavior. |
| [`AutoReturnResponseError`](#autoreturnresponseerror) | Class | Error in Auto Return RPC |
| [`InvalidParameterError`](#invalidparametererror) | Class | One or more parameters were invalid. |

## AutoReturnClient

```ts
class AutoReturnClient extends BaseClient<AutoReturnServiceClient>
```

A client for configuring automatic AutoReturn behavior.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'auto-return'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.auto_return.AutoReturnService'`. |

### configure

```ts
configure(params: autoReturnPb.Params, leases: Lease[], clearBuffer?: boolean, args?: Object): Promise<autoReturnPb.ConfigureResponse>
```

Set the configuration of the AutoReturn system.

| Parameter | Type | Description |
|---|---|---|
| `params` | `autoReturnPb.Params` | Parameters to use. |
| `leases` | `Lease[]` | An array of leases. |
| `clearBuffer` | `boolean` | Set True to forget any currently buffered locations. (*Optional*) |
| `args` | `Object` | Arguments that can be passed to the RPC request. (*Optional*) |

**Returns** `Promise<autoReturnPb.ConfigureResponse>`

**Throws**

- `InvalidParameterError` An invalid request was received by the service.
- `RpcError` Problem communicating with the service.

### getConfiguration

```ts
getConfiguration(args?: Object): Promise<autoReturnPb.GetConfigurationResponse>
```

Get the configuration of the AutoReturn system.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Arguments that can be passed to the RPC request. (*Optional*) |

**Returns** `Promise<autoReturnPb.GetConfigurationResponse>`

**Throws**

- `RpcError` Problem communicating with the service.

### start

```ts
start(params?: autoReturnPb.Params, leases?: Lease[], args?: Object): Promise<autoReturnPb.StartResponse>
```

Start AutoReturn now.

| Parameter | Type | Description |
|---|---|---|
| `params` | `autoReturnPb.Params` | Parameters to use. (*Optional*, default `null`) |
| `leases` | `Lease[]` | ] Leases to be included in the request. (*Optional*, default `[`) |
| `args` | `Object` | Arguments that can be passed to the RPC request. (*Optional*) |

**Returns** `Promise<autoReturnPb.StartResponse>`

**Throws**

- `InvalidParameterError` An invalid request was received by the service.
- `RpcError` Problem communicating with the service.

## AutoReturnResponseError

```ts
class AutoReturnResponseError extends ResponseError
```

Error in Auto Return RPC

## InvalidParameterError

```ts
class InvalidParameterError extends AutoReturnResponseError
```

One or more parameters were invalid.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `autoReturnPb` | `spot-sdk-js/src/bosdyn/api/auto_return/auto_return_pb` |
