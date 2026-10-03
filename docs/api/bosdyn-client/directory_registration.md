# bosdyn-client/directory_registration

Client for the directory registration service.

A DirectoryRegistrationClient allows a client to modify information about other API services available on a robot.

```js
const { DirectoryRegistrationClient, DirectoryRegistrationKeepAlive, resetServiceRegistration, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DirectoryRegistrationClient`](#directoryregistrationclient) | Class | Write off-robot services and modify their information. |
| [`DirectoryRegistrationKeepAlive`](#directoryregistrationkeepalive) | Class | Helper class to keep a directory entry updated. |
| [`resetServiceRegistration`](#resetserviceregistration) | Function | Reset a service registration by unregistering the service and then re-registering it. |
| [`DirectoryRegistrationResponseError`](#directoryregistrationresponseerror) | Class | General class of errors for directory registration responses. |
| [`ServiceAlreadyExistsError`](#servicealreadyexistserror) | Class | The service already exists on the robot. |
| [`ServiceDoesNotExistError`](#servicedoesnotexisterror) | Class | The specified service does not exist on the robot. |

## DirectoryRegistrationResponseError

```ts
class DirectoryRegistrationResponseError extends ResponseError
```

General class of errors for directory registration responses.

## ServiceAlreadyExistsError

```ts
class ServiceAlreadyExistsError extends DirectoryRegistrationResponseError
```

The service already exists on the robot.

## ServiceDoesNotExistError

```ts
class ServiceDoesNotExistError extends DirectoryRegistrationResponseError
```

The specified service does not exist on the robot.

## DirectoryRegistrationClient

```ts
class DirectoryRegistrationClient extends BaseClient<DirectoryRegistrationServiceClient>
```

Write off-robot services and modify their information.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'directory-registration'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.DirectoryRegistrationService'`. |

### register

```ts
register(name: string, serviceType: string, authority: string, hostIp: string, port: number, userTokenRequired?: boolean, livenessTimeoutSecs?: number, args?: Object): Promise<directoryRegistrationPb.RegisterServiceResponse>
```

Register a service routing with the robot.

If service name already registered, no change will be applied and will throw ServiceAlreadyExistsError.
Every request received by the robot will serve as a heartbeat and update the service last_update field.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the service. Must be unique. |
| `serviceType` | `string` | The GRPC service definition defining the calls to/from this service. (authority, service_type) must be unique in the directory. |
| `authority` | `string` | The authority used to direct calls to this service. (authority, service_type) must be unique in the directory. |
| `hostIp` | `string` | The ip address of the system that the service is being hosted on. |
| `port` | `number` | The port number the service can be accessed through on the host system. |
| `userTokenRequired` | `boolean` | If a user token should be verified to access the service. (*Optional*) |
| `livenessTimeoutSecs` | `number` | Number of seconds without directory heartbeat before timeout fault. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<directoryRegistrationPb.RegisterServiceResponse>`

### update

```ts
update(name: string, serviceType: string, authority: string, hostIp: string, port: number, userTokenRequired?: boolean, livenessTimeoutSecs?: number, args?: Object): Promise<directoryRegistrationPb.UpdateServiceResponse>
```

Update a service definition of an existing service that matches the service name.

If service name is not registered, will throw ServiceDoesNotExistError.
Every request received by the robot will serve as a heartbeat and update the service last_update field.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the service to be updated. |
| `serviceType` | `string` | The GRPC service definition defining the calls to/from this service. (authority, service_type) must be unique in the directory. |
| `authority` | `string` | The authority used to direct calls to this service. (authority, service_type) must be unique in the directory. |
| `hostIp` | `string` | The ip address of the system that the service is being hosted on. |
| `port` | `number` | The port number the service can be accessed through on the host system. |
| `userTokenRequired` | `boolean` | If a user token should be verified to access the service. (*Optional*) |
| `livenessTimeoutSecs` | `number` | Number of seconds without directory heartbeat before timeout fault. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<directoryRegistrationPb.UpdateServiceResponse>`

### unregister

```ts
unregister(name: string, args?: Object): Promise<directoryRegistrationPb.UnregisterServiceResponse>
```

Remove a service routing with the robot.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the service to be removed. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<directoryRegistrationPb.UnregisterServiceResponse>`

## DirectoryRegistrationKeepAlive

```ts
class DirectoryRegistrationKeepAlive
```

Helper class to keep a directory entry updated.

Assuming the directory itself is hosted on the robot, and the service being registered in the
directory is on a payload, use of this class streamlines the following cases:

1) The payload, or the payload-hosted service, is restarted.
2) The robot is restarted.
3) On-robot processes clear out the directory. This can happen in rare cases.

This class will also maintain liveness status with the robot directory, if enabled for this
service, by sending a registration/update request at the specified interval.

### new DirectoryRegistrationKeepAlive

```ts
constructor(dirRegClient: DirectoryRegistrationClient, { logger, rpcTimeoutSeconds, rpcIntervalSeconds, initialRetrySeconds }?: {
    logger?: import("./logger_util").Logger | null | undefined;
    rpcTimeoutSeconds?: number | null | undefined;
    rpcIntervalSeconds?: number | undefined;
    initialRetrySeconds?: number | undefined;
})
```

| Parameter | Type | Description |
|---|---|---|
| `dirRegClient` | `DirectoryRegistrationClient` | Client to the directory registration service. |
| `options` | `{ logger?: import("./logger_util").Logger \| null \| undefined; rpcTimeoutSeconds?: number \| null \| undefined; rpcIntervalSeconds?: number \| undefined; initialRetrySeconds?: number \| undefined; }` | Optional configuration options. (*Optional*) |
| `options.logger` | `?Logger` | Object to log with. Defaults to null, in which case one with the class name is acquired. (*Optional*, default `null`) |
| `options.rpcTimeoutSeconds` | `?number` | Number of seconds to wait for a dirRegClient RPC. Defaults to null, for the default RPC timeout. (*Optional*, default `null`) |
| `options.rpcIntervalSeconds` | `number` | Interval in seconds at which to request service registrations. (*Optional*, default `30`) |
| `options.initialRetrySeconds` | `number` | Initial number of seconds to wait before retrying a failed registration request. (*Optional*, default `1`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `authority` | `string \| null` |  |
| `directoryName` | `string \| null` |  |
| `host` | `string \| null` |  |
| `port` | `string \| null` |  |
| `serviceType` | `string \| null` |  |
| `logger` | `import("./logger_util").Logger` |  |
| `dirRegClient` | `DirectoryRegistrationClient` | Client to the directory registration service. |
| `reregistrationErrorCallback` | `((arg0: Error) => (number \| Promise<number>)) \| null` | Optional callback called when an RPC error occurs in the re-registration loop. It returns an ErrorCallbackResult, or a promise of one, telling the loop what to do. |
| `livenessTimeoutSecs` | `number \| undefined` |  |
| `userTokenRequired` | `boolean \| undefined` |  |

### start

```ts
start(directoryName: string, serviceType: string, authority: string, host: string, port: number, livenessTimeoutSecs?: number | null, userTokenRequired?: boolean, resetService?: boolean): Promise<this>
```

Register, optionally update, and then kick off the re-registration loop.
Can not be restarted with this method after a shutdown.

| Parameter | Type | Description |
|---|---|---|
| `directoryName` | `string` | Unique name in the directory. |
| `serviceType` | `string` | Service type. |
| `authority` | `string` | gRPC authority/scope. |
| `host` | `string` | Service host (IP or name). |
| `port` | `number` | Service port. |
| `livenessTimeoutSecs` | `number \| null` | Directory liveness TTL. Defaults to 2.5 × `rpcIntervalSeconds`. (*Optional*, default `null`) |
| `userTokenRequired` | `boolean` | Whether a user token is required for this service. (*Optional*, default `true`) |
| `resetService` | `boolean` | Fully reset the registration before starting the loop. (*Optional*, default `true`) |

**Returns** `Promise<this>`

**Throws**

- `Error` If already started.
- `RpcError` Problem communicating with the robot.

### isAlive

```ts
isAlive(): boolean
```

Are we still periodically re-registering?

**Returns** `boolean`

### shutdown

```ts
shutdown(): Promise<void>
```

Stop the re-registration loop (idempotent).
Does NOT automatically call `unregister()`—use it separately if needed.

**Returns** `Promise<void>`: Resolves once the loop has ended, like Python's join().

### unregister

```ts
unregister(): Promise<directoryRegistrationPb.UnregisterServiceResponse>
```

Unregister the service from the directory. First stops the loop, which would register it again.

**Returns** `Promise<directoryRegistrationPb.UnregisterServiceResponse>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `ServiceDoesNotExistError` The service does not exist.

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

**Returns** `Promise<void>`

## resetServiceRegistration

```ts
export function resetServiceRegistration(directoryRegistrationClient: DirectoryRegistrationClient, name: string, serviceType: string, authority: string, hostIp: string, port: string | number, userTokenRequired?: boolean, livenessTimeoutSecs?: number): Promise<void>
```

Reset a service registration by unregistering the service and then re-registering it.

This is useful when a program wants to register a new service but there may be an old entry
in the robot directory from a previous instance of the program. If the service
does not already exist, the exception will be suppressed and a new registration will
still be performed. Unregistering the service has the advantage of clearing all service
faults, if any existed.

| Parameter | Type | Description |
|---|---|---|
| `directoryRegistrationClient` | `DirectoryRegistrationClient` | A directory registration instance |
| `name` | `string` | The name of the service to be reset. |
| `serviceType` | `string` | The GRPC service definition defining the calls to/from this service. (authority, service_type) must be unique in the directory. |
| `authority` | `string` | The authority used to direct calls to this service. (authority, service_type) must be unique in the directory. |
| `hostIp` | `string` | The ip address of the system that the service is being hosted on. |
| `port` | `string \| number` | The port number the service can be accessed through on the host system. |
| `userTokenRequired` | `boolean` | If a user token should be verified to access the service. (*Optional*) |
| `livenessTimeoutSecs` | `number` | Number of seconds without directory heartbeat before timeout fault. (*Optional*) |

**Returns** `Promise<void>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `directoryRegistrationPb` | `spot-sdk-js/src/bosdyn/api/directory_registration_pb` |
