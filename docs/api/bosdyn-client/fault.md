# bosdyn-client/fault

For clients to use the fault service.

```js
const { FaultClient, FaultResponseError, ServiceFaultAlreadyExistsError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`FaultClient`](#faultclient) | Class | Client for the Fault service. |
| [`FaultResponseError`](#faultresponseerror) | Class | General class of errors for the Fault service. |
| [`ServiceFaultAlreadyExistsError`](#servicefaultalreadyexistserror) | Class | The specified service fault id already exists as an active fault on the robot. |
| [`ServiceFaultDoesNotExistError`](#servicefaultdoesnotexisterror) | Class | The specified service fault id does not match any active service faults on the robot. |

## FaultClient

```ts
class FaultClient extends BaseClient<FaultServiceClient>
```

Client for the Fault service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'fault'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.FaultService'`. |

### triggerServiceFault

```ts
triggerServiceFault(serviceFault: serviceFaultPb.ServiceFault, args?: Object): Promise<serviceFaultPb.TriggerServiceFaultResponse>
```

Broadcast a new service fault through the robot.

| Parameter | Type | Description |
|---|---|---|
| `serviceFault` | `serviceFaultPb.ServiceFault` | Populated fault message to broadcast. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<serviceFaultPb.TriggerServiceFaultResponse>`: An instance of bosdyn.api.TriggerServiceFaultResponse

**Throws**

- `RpcError` Problem communicating with the robot.
- `ServiceFaultAlreadyExistsError` The service fault already exists.
- `FaultResponseError` Something went wrong during the fault trigger.

### clearServiceFault

```ts
clearServiceFault(serviceFaultId: serviceFaultPb.ServiceFaultId, clearAllServiceFaults?: boolean, clearAllPayloadFaults?: boolean, args?: Object): Promise<serviceFaultPb.ClearServiceFaultResponse>
```

Clear a service fault from the robot state.

| Parameter | Type | Description |
|---|---|---|
| `serviceFaultId` | `serviceFaultPb.ServiceFaultId` | ServiceFault to clear. |
| `clearAllServiceFaults` | `boolean` | Clear all faults associated with the service name. (*Optional*, default `false`) |
| `clearAllPayloadFaults` | `boolean` | Clear all faults associated with the payload guid. (*Optional*, default `false`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<serviceFaultPb.ClearServiceFaultResponse>`: An instance of bosdyn.api.ClearServiceFaultResponse

**Throws**

- `RpcError` Problem communicating with the robot.
- `ServiceFaultDoesNotExistError` The service fault does not exist in active service faults.
- `FaultResponseError` Something went wrong during the fault clear.

## FaultResponseError

```ts
class FaultResponseError extends ResponseError
```

General class of errors for the Fault service.

## ServiceFaultAlreadyExistsError

```ts
class ServiceFaultAlreadyExistsError extends FaultResponseError
```

The specified service fault id already exists as an active fault on the robot.

## ServiceFaultDoesNotExistError

```ts
class ServiceFaultDoesNotExistError extends FaultResponseError
```

The specified service fault id does not match any active service faults on the robot.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `serviceFaultPb` | `spot-sdk-js/src/bosdyn/api/service_fault_pb` |
