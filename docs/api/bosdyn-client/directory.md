# bosdyn-client/directory

Client for the directory service.

A DirectoryClient allows a client to look-up information about other API services available on a robot.

```js
const { DirectoryClient, DirectoryResponseError, NonexistentServiceError } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DirectoryClient`](#directoryclient) | Class | List robot services and get information on them. |
| [`DirectoryResponseError`](#directoryresponseerror) | Class | General class of errors for Directory service. |
| [`NonexistentServiceError`](#nonexistentserviceerror) | Class | The requested service name does not exist. |

## DirectoryResponseError

```ts
class DirectoryResponseError extends ResponseError
```

General class of errors for Directory service.

## NonexistentServiceError

```ts
class NonexistentServiceError extends DirectoryResponseError
```

The requested service name does not exist.

## DirectoryClient

```ts
class DirectoryClient extends BaseClient<DirectoryServiceClient>
```

List robot services and get information on them.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'directory'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.DirectoryService'`. |

### list

```ts
list(args?: Object): Promise<directoryPb.ServiceEntry[]>
```

List all services present on the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<directoryPb.ServiceEntry[]>`: A list of the proto message definitions of all registered services

**Throws**

- `RpcError` Problem communicating with the robot.

### getEntry

```ts
getEntry(serviceName: string, args?: Object): Promise<directoryPb.ServiceEntry>
```

Get the service entry for one particular service specified by name.

| Parameter | Type | Description |
|---|---|---|
| `serviceName` | `string` | The name of the service to retrieve. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<directoryPb.ServiceEntry>`: The proto message definition of the service entry

**Throws**

- `RpcError` Problem communicating with the robot.
- `NonexistentServiceError` The service was not found.
- `DirectoryResponseError` Something went wrong during the directory access.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `directoryPb` | `spot-sdk-js/src/bosdyn/api/directory_pb` |
