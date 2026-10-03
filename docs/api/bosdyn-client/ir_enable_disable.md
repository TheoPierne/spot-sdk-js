# bosdyn-client/ir_enable_disable

A client for the ir-enable-disable service.

```js
const { IREnableDisableServiceClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`IREnableDisableServiceClient`](#irenabledisableserviceclient) | Class | Client to enable and/or disable the robot's IR light emitters in the body and hand sensors. |

## IREnableDisableServiceClient

```ts
class IREnableDisableServiceClient extends BaseClient<irEnableDisableServiceGrpcPb.IREnableDisableServiceClient>
```

Client to enable and/or disable the robot's IR light emitters in the body and hand sensors.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'ir-enable-disable-service'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.IREnableDisableService'`. |

### setIrEnabled

```ts
setIrEnabled(enable: boolean, args?: Object): Promise<irEnableDisablePb.IREnableDisableResponse>
```

Enable and/or disable the robot's IR light emitters.

| Parameter | Type | Description |
|---|---|---|
| `enable` | `boolean` | Whether or not to enable the emitters. |
| `args` | `Object` | Args to be send with the gRPC request (*Optional*) |

**Returns** `Promise<irEnableDisablePb.IREnableDisableResponse>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `irEnableDisableServiceGrpcPb` | `spot-sdk-js/src/bosdyn/api/ir_enable_disable_service_grpc_pb` |
| `irEnableDisablePb` | `spot-sdk-js/src/bosdyn/api/ir_enable_disable_pb` |
