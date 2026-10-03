# bosdyn-client/network_compute_bridge_client

For clients to the network compute bridge service.

```js
const { NetworkComputeBridgeClient, ExternalServiceNotFoundError, ExternalServerError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`NetworkComputeBridgeClient`](#networkcomputebridgeclient) | Class | Client to either the NetworkComputeBridgeService or the NetworkComputeBridgeWorkerService. |
| [`ExternalServiceNotFoundError`](#externalservicenotfounderror) | Class | The requested service for external computation was not found in the directory. |
| [`ExternalServerError`](#externalservererror) | Class | The call to the external server did not complete successfully. |
| [`NetworkComputeRotationError`](#networkcomputerotationerror) | Class | The robot failed to rotate the image as requested. |
| [`NetworkComputeAnalysisFailedError`](#networkcomputeanalysisfailederror) | Class | The model failed to analyze the set of input images, but a retry might work. |

## ExternalServiceNotFoundError

```ts
class ExternalServiceNotFoundError extends ResponseError
```

The requested service for external computation was not found in the directory.

## ExternalServerError

```ts
class ExternalServerError extends ResponseError
```

The call to the external server did not complete successfully.

## NetworkComputeRotationError

```ts
class NetworkComputeRotationError extends ResponseError
```

The robot failed to rotate the image as requested.

## NetworkComputeAnalysisFailedError

```ts
class NetworkComputeAnalysisFailedError extends ResponseError
```

The model failed to analyze the set of input images, but a retry might work.

## NetworkComputeBridgeClient

```ts
class NetworkComputeBridgeClient extends BaseClient<networkComputeBridgeServiceGrpcPb.NetworkComputeBridgeClient>
```

Client to either the NetworkComputeBridgeService or the NetworkComputeBridgeWorkerService.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'network-compute-bridge'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.NetworkComputeBridge'`. |

### listAvailableModels

```ts
listAvailableModels(serviceName: string, args?: Object): Promise<networkComputeBridgePb.ListAvailableModelsResponse>
```

List all available models that the service knows.

| Parameter | Type | Description |
|---|---|---|
| `serviceName` | `string` | The service to query for models. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<networkComputeBridgePb.ListAvailableModelsResponse>`: The full ListAvailableModelsResponse, which contains any models the service or worker service advertise.

**Throws**

- `RpcError` Problem communicating with the robot.
- `ExternalServiceNotFoundError` The network compute bridge worker service was not found in the robot's directory.
- `ExternalServerError` Either the service or worker service threw an error when responding with the set of all models.

### listAvailableModelsCommand

```ts
listAvailableModelsCommand(listRequest: networkComputeBridgePb.ListAvailableModelsRequest, args?: Object): networkComputeBridgePb.ListAvailableModelsResponse
```

List all available models that the service knows.

| Parameter | Type | Description |
|---|---|---|
| `listRequest` | `networkComputeBridgePb.ListAvailableModelsRequest` | The request to list all models. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `networkComputeBridgePb.ListAvailableModelsResponse`: The full ListAvailableModelsResponse, which contains any models the service or worker service advertise.

**Throws**

- `RpcError` Problem communicating with the robot.
- `ExternalServiceNotFoundError` The network compute bridge worker service was not found in the robot's directory.
- `ExternalServerError` Either the service or worker service threw an error when responding with the set of all models.

### networkComputeBridgeCommand

```ts
networkComputeBridgeCommand(networkComputeRequest: networkComputeBridgePb.NetworkComputeRequest, args?: Object): Promise<networkComputeBridgePb.NetworkComputeResponse>
```

Issue the main network compute bridge request to run a model on specific, requested data.

| Parameter | Type | Description |
|---|---|---|
| `networkComputeRequest` | `networkComputeBridgePb.NetworkComputeRequest` | The request which contains what type of data should be processed, and which model the server should run. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<networkComputeBridgePb.NetworkComputeResponse>`: The full NetworkComputeResponse, which contains the processed data.

**Throws**

- `RpcError` Problem communicating with the robot.
- `ExternalServiceNotFoundError` The network compute bridge worker service was not found in the robot's directory.
- `ExternalServerError` Either the service or worker service threw an error when responding with the set of all models.
- `NetworkComputeRotationError` For processed image data, the robot was unable to rotate the image as requested.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `networkComputeBridgeServiceGrpcPb` | `spot-sdk-js/src/bosdyn/api/network_compute_bridge_service_grpc_pb` |
| `networkComputeBridgePb` | `spot-sdk-js/src/bosdyn/api/network_compute_bridge_pb` |
