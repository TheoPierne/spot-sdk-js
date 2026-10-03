# bosdyn-client/robot

Settings common to a user's access to one robot.

```js
const { Robot, RobotError, UnregisteredServiceError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`Robot`](#robot) | Class | Settings common to one user's access to one robot. |
| [`RobotError`](#roboterror) | Class | General class of errors to handle non-response non-grpc errors. |
| [`UnregisteredServiceError`](#unregisteredserviceerror) | Class | Full service definition has not been registered in the robot instance. |
| [`UnregisteredServiceNameError`](#unregisteredservicenameerror) | Class | Service name has not been registered in the robot instance. |
| [`UnregisteredServiceTypeError`](#unregisteredservicetypeerror) | Class | Service type has not been registered in the robot instance. |

## RobotError

```ts
class RobotError extends BosdynError
```

General class of errors to handle non-response non-grpc errors.

## UnregisteredServiceError

```ts
class UnregisteredServiceError extends RobotError
```

Full service definition has not been registered in the robot instance.

## UnregisteredServiceNameError

```ts
class UnregisteredServiceNameError extends UnregisteredServiceError
```

Service name has not been registered in the robot instance.

### Properties

| Property | Type | Description |
|---|---|---|
| `serviceName` | `any` |  |

## UnregisteredServiceTypeError

```ts
class UnregisteredServiceTypeError extends UnregisteredServiceError
```

Service type has not been registered in the robot instance.

### Properties

| Property | Type | Description |
|---|---|---|
| `serviceType` | `any` |  |

## Robot

```ts
class Robot
```

Settings common to one user's access to one robot.
This is the main point of access to all client functionality.
The ensureClient member is used to get any client to a service exposed on the robot.
Additionally, many helpers are exposed to provide commonly used functionality without
explicitly accessing a particular client object.
Note that any rpc call made to the robot can raise an RpcError subclass if there are
errors communicating with the robot.
Additionally, ResponseErrors will be raised if there was an error acting on the request itself.
An InvalidRequestError indicates a programming error, where the request was malformed in some way.
InvalidRequestErrors will never be thrown except in the case of client bugs.
See also Sdk and BaseClient

### new Robot

```ts
constructor(name?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `clientName` | `string \| null` | The client name associated with the robot. |
| `address` | `string \| null` | The address of the robot, typically an IP or hostname. |
| `serialNumber` | `string \| null` | The serial number of the robot. |
| `logger` | `import("winston").Logger` | The logger instance used for logging robot-related activities. |
| `userToken` | `string \| null` | The user token used for authenticating requests to the robot. |
| `tokenCache` | `TokenCache` | The token cache used to store and manage user tokens. |
| `tokenRefreshErrorCallback` | `Function \| null` | Optional callback invoked when an error occurs in the token refresh loop, like Python's token_refresh_error_callback: (error) =&gt; ErrorCallbackResult (or a promise of it). |
| `serviceClientsByName` | `{ [x: string]: import("./common").BaseClient<any>; }` | An object of service clients by their names. |
| `channelsByAuthority` | `{ [x: string]: import("@grpc/grpc-js").Channel; }` | An object of gRPC channels by authority (host). |
| `authoritiesByName` | `{ [x: string]: string; }` | An object of authorities by service name. |
| `serviceClientFactoriesByType` | `{ [x: string]: import("./common").BaseClient<any>; }` | Service client factories indexed by type. |
| `serviceTypeByName` | `{ [x: string]: string; }` | Service types indexed by name. |
| `requestProcessors` | `Array<Function>` | Processors to handle outgoing requests. |
| `responseProcessors` | `Array<Function>` | Processors to handle incoming responses. |
| `appToken` | `string \| null` | The application token used to authenticate the SDK with the robot. |
| `cert` | `string \| null` | The certificate used for secure communication with the robot. |
| `leaseWallet` | `LeaseWallet` | The lease wallet used to manage leases for the robot. |
| `executor` | `any` |  |
| `maxSendMessageLength` | `number` | The maximum message length for sending requests over a gRPC channel. |
| `maxReceiveMessageLength` | `number` | The maximum message length for receiving responses over a gRPC channel. |
| `host` | `string \| null` | Get the robot name Read-only. |
| `timeSync` | `Promise<TimeSyncThread \| null>` | Accessor for the time-sync thread. Creates and starts thread if not already started. Read-only. |

### setupTokenCache

```ts
setupTokenCache(tokenCache?: TokenCache | null, uniqueId?: string | null): Promise<void>
```

Instantiates a token cache to persist the user token.
If the user provides a cache, it will be saved in the robot object for convenience.

| Parameter | Type | Description |
|---|---|---|
| `tokenCache` | `TokenCache \| null` | An optional instance of `TokenCache` used to store the user token. If not provided, the existing token cache will be used. (*Optional*) |
| `uniqueId` | `string \| null` | An optional unique identifier (e.g., serial number) for the robot. If not provided, the existing `serialNumber` will be used, or it will be fetched from the robot if necessary. (*Optional*) |

**Returns** `Promise<void>`

### updateFrom

```ts
updateFrom(other: import("./sdk").Sdk): void
```

Adds to this object's processors, etc. based on other

| Parameter | Type | Description |
|---|---|---|
| `other` | `import("./sdk").Sdk` | The other `Robot` instance from which to copy properties. |

### ensureClient

```ts
ensureClient<T extends BaseClient = any>(serviceName: string, channelToEnsure?: GrpcChannel | null, options?: any[], serviceEndpoint?: string | null): Promise<T>
```

Ensure a Client for a given service.

Note: If a new service has been registered with the directory service, this may raise
UnregisteredServiceNameError when trying to connect to it until sync_with_directory() is
called.

| Parameter | Type | Description |
|---|---|---|
| `serviceName` | `string` | The name of the service. |
| `channelToEnsure` | `GrpcChannel \| null` | gRPC channel object to use. Default None, in which case the Sdk data is used to generate a channel. The channel will become associated with the client. (*Optional*) |
| `options` | `any[]` | Any options to pass to the gRPC Channel creation (*Optional*) |
| `serviceEndpoint` | `string \| null` | Endpoint of the service. (*Optional*) |

**Returns** `Promise<T>`

### shutdown

```ts
shutdown(): void
```

Closes the gRPC channels of the robot, like shutdown() in Python. The background tasks of the time sync and of
the token refresh are stopped when the robot is disposed (`using robot = sdk.createRobot(...)`), or by
stopTimeSync() for the time sync.

### getCachedRobotId

```ts
getCachedRobotId(timeout?: number | null): Promise<import("spot-sdk-js/src/bosdyn/api/robot_id_pb").RobotId>
```

Return the RobotId proto for this robot, querying it from the robot if not yet cached.

| Parameter | Type | Description |
|---|---|---|
| `timeout` | `number \| null` | The timeout for this request. (*Optional*, default `null`) |

**Returns** `Promise<import("spot-sdk-js/src/bosdyn/api/robot_id_pb").RobotId>`

### getCachedHardwareHardwareConfiguration

```ts
getCachedHardwareHardwareConfiguration(timeout?: number | null): Promise<import("spot-sdk-js/src/bosdyn/api/robot_state_pb").HardwareConfiguration>
```

Return the HardwareConfiguration proto for this robot, querying it from the robot if not yet cached.

| Parameter | Type | Description |
|---|---|---|
| `timeout` | `number \| null` | The timeout for this request. (*Optional*, default `null`) |

**Returns** `Promise<import("spot-sdk-js/src/bosdyn/api/robot_state_pb").HardwareConfiguration>`

### ensureChannel

```ts
ensureChannel(serviceName: string, secure?: boolean, options?: any[], serviceEndpoint?: string): Promise<GrpcChannel>
```

Verify the right information exists before calling the ensureSecureChannel method.

| Parameter | Type | Description |
|---|---|---|
| `serviceName` | `string` | Name of the service in the directory. |
| `secure` | `boolean` | Create a secure channel or not. (*Optional*, default `true`) |
| `options` | `any[]` | Options of the grpc channel. (*Optional*) |
| `serviceEndpoint` | `string` | Endpoint of the service. (*Optional*) |

**Returns** `Promise<GrpcChannel>`: Existing channel if found, or newly created channel if not found.

### ensureSecureChannel

```ts
ensureSecureChannel(authority: string, options?: Object): GrpcChannel
```

Get the channel to access the given authority, creating it if it doesn't exist.

| Parameter | Type | Description |
|---|---|---|
| `authority` | `string` | The authority to access |
| `options` | `Object` | Options of the channel (*Optional*) |

**Returns** `GrpcChannel`

### ensureInsecureChannel

```ts
ensureInsecureChannel(authority: string, options?: any): GrpcChannel
```

Get the channel to access the given authority, creating it if it doesn't exist.

| Parameter | Type | Description |
|---|---|---|
| `authority` | `string` | The authority to access |
| `options` | `any` | (*Optional*) |

**Returns** `GrpcChannel`

### authenticate

```ts
authenticate(username: string, password: string, timeout?: number | null): Promise<void>
```

Authenticate to this Robot with the username/password at the given service.

| Parameter | Type | Description |
|---|---|---|
| `username` | `string` | Username on the robot. |
| `password` | `string` | Password for the username on the robot. |
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<void>`

### authenticateWithToken

```ts
authenticateWithToken(token: string, timeout?: number | null): Promise<void>
```

Authenticate to this Robot with the token at the given service.

| Parameter | Type | Description |
|---|---|---|
| `token` | `string` | Token used to authenticate |
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<void>`

### authenticateFromCache

```ts
authenticateFromCache(username: string, timeout?: number | null): Promise<void>
```

Authenticate to this Robot with a cached token at the given service.

| Parameter | Type | Description |
|---|---|---|
| `username` | `string` | Username used to authenticate from cache |
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<void>`

### authenticateFromPayloadCredentials

```ts
authenticateFromPayloadCredentials(guid: string, secret: string, payloadRegistrationClient?: PayloadRegistrationClient | null, timeout?: number | null, retryInterval?: number): Promise<void>
```

Authenticate to this Robot with the guid/secret of the hosting payload.

This call is used to authenticate to a robot using payload credentials. If a payload is
not yet authorized, it will block until the payload is authorized by an operator in the
robot web page.

| Parameter | Type | Description |
|---|---|---|
| `guid` | `string` | The GUID of the registered payload requesting the token. |
| `secret` | `string` | The secret of the registered payload requesting the token. |
| `payloadRegistrationClient` | `PayloadRegistrationClient \| null` | Instance of PayloadRegistrationClient (*Optional*) |
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |
| `retryInterval` | `number` | (*Optional*) |

**Returns** `Promise<void>`

### updateUserToken

```ts
updateUserToken(userToken: string, username?: string | null): void
```

Update this Robot with a user token.

| Parameter | Type | Description |
|---|---|---|
| `userToken` | `string` | User token |
| `username` | `string \| null` | Username (*Optional*) |

### getCachedUsernames

```ts
getCachedUsernames(): string[]
```

Return an ordered list of usernames queryable from the cache.

**Returns** `string[]`

### getId

```ts
getId(idServiceName?: string): Promise<RobotId>
```

Get all the information that identifies the robot.

| Parameter | Type | Description |
|---|---|---|
| `idServiceName` | `string` | The id service name (*Optional*) |

**Returns** `Promise<RobotId>`

### listServices

```ts
listServices(): Promise<ServiceEntry[]>
```

Get all the available services on the robot.

**Returns** `Promise<ServiceEntry[]>`

### syncWithDirectory

```ts
syncWithDirectory(): Promise<{
    [x: string]: string;
}>
```

Update local state with all available services on the robot.

**Returns** `Promise<{ [x: string]: string; }>`

### syncWithServicesList

```ts
syncWithServicesList(servicesList: ServiceEntry[]): {
    [x: string]: string;
}
```

Alternate version of syncWithDirectory() that takes the list of services directly and does not perform any rpcs.

| Parameter | Type | Description |
|---|---|---|
| `servicesList` | `ServiceEntry[]` | The services list to sync with. |

**Returns** `{ [x: string]: string; }`

### registerPayloadAndAuthenticate

```ts
registerPayloadAndAuthenticate(payload: Payload, secret: string, timeout?: number | null, authRetryInterval?: number): Promise<void>
```

Register a payload with the robot and request a userToken.
This method will block until the payload is authorized by an operator in the robot webpage.

| Parameter | Type | Description |
|---|---|---|
| `payload` | `Payload` | The payload object to be registered with the robot. |
| `secret` | `string` | The secret key associated with the payload, used for authentication. |
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |
| `authRetryInterval` | `number` | (*Optional*) |

**Returns** `Promise<void>`

### startTimeSync

```ts
startTimeSync(timeSyncIntervalSec?: number | null): Promise<void>
```

Start time sync thread if needed.

| Parameter | Type | Description |
|---|---|---|
| `timeSyncIntervalSec` | `number \| null` | The interval (in seconds) that the time-sync estimate should be updated. (*Optional*) |

**Returns** `Promise<void>`

### stopTimeSync

```ts
stopTimeSync(): void
```

Stop the time sync thread if needed.

### timeSec

```ts
timeSec(): Promise<number>
```

Get current robot time, seconds. Kicks off background time sync thread if not started.

**Returns** `Promise<number>`

### operatorComment

```ts
operatorComment(comment: string, timestampSecs?: number | null, timeout?: number | null): Promise<void>
```

Send an operator comment to the robot for the robot's log files.

| Parameter | Type | Description |
|---|---|---|
| `comment` | `string` | Operator comment text to be added to the log. |
| `timestampSecs` | `number \| null` | Comment time in seconds since the unix epoch (client clock). If set, this is converted to robot time when sent to the robot. If null and time sync is available, the current time is converted to robot time and sent as the comment timestamp. If null and time sync is unavailable, the logged timestamp will be the time the robot receives this message. (*Optional*) |
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<void>`

### logEvent

```ts
logEvent(eventType: string, level: dataBufferProtos.Event.Level, description: string, startTimestampSecs: number, endTimestampSecs?: number | null, idStr?: string | null, parameters?: Parameter[] | null, logPreserveHint?: dataBufferProtos.Event.LogPreserveHint): Promise<dataBufferProtos.RecordEventsResponse>
```

Add an Event to the Data Buffer.

| Parameter | Type | Description |
|---|---|---|
| `eventType` | `string` | The type of event. |
| `level` | `dataBufferProtos.Event.Level` | The relative importance of the event. |
| `description` | `string` | A human-readable description of the event. |
| `startTimestampSecs` | `number` | Start of the event, in local time. |
| `endTimestampSecs` | `number \| null` | End of the event. startTimestampSecs is used if null. (*Optional*) |
| `idStr` | `string \| null` | Unique id for event. A uuid is generated if null. (*Optional*) |
| `parameters` | `Parameter[] \| null` | Parameters to attach to the event. (*Optional*) |
| `logPreserveHint` | `dataBufferProtos.Event.LogPreserveHint` | A value from the enum (*Optional*) |

**Returns** `Promise<dataBufferProtos.RecordEventsResponse>`

### powerOn

```ts
powerOn(timeoutMsec?: number, updateFrequency?: number, timeout?: number | null): Promise<void>
```

Power on robot. This function blocks until robot powers on.

| Parameter | Type | Description |
|---|---|---|
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*) |
| `updateFrequency` | `number` | Frequency at which power status is checked. (*Optional*) |
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<void>`

### powerOff

```ts
powerOff(cutImmediately?: boolean, timeoutMsec?: number, updateFrequency?: number, timeout?: number | null): Promise<void>
```

Power off robot. This function blocks until robot powers off. By default, this will
attempt to put the robot in a safe state before cutting power.

| Parameter | Type | Description |
|---|---|---|
| `cutImmediately` | `boolean` | True to cut power to the robot immediately. False to issue a safe power off command to the robot. (*Optional*) |
| `timeoutMsec` | `number` | Max time this function will block for. (*Optional*) |
| `updateFrequency` | `number` | Frequency at which power status is checked. (*Optional*) |
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<void>`

### isPoweredOn

```ts
isPoweredOn(timeout?: number | null): Promise<boolean>
```

Check the power state of the robot.

| Parameter | Type | Description |
|---|---|---|
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<boolean>`

### isEstopped

```ts
isEstopped(timeout?: number | null): Promise<boolean>
```

Check if the robot is estopped, usually indicating if an external application has not
registered and held an estop endpoint.

| Parameter | Type | Description |
|---|---|---|
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<boolean>`

### getFrameTreeSnapshot

```ts
getFrameTreeSnapshot(timeout?: number | null): Promise<FrameTreeSnapshot>
```

Get the current frame tree snapshot from the robot state client.

| Parameter | Type | Description |
|---|---|---|
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<FrameTreeSnapshot>`

### hasArm

```ts
hasArm(timeout?: number | null): Promise<boolean>
```

Check if the robot has an arm attached.

| Parameter | Type | Description |
|---|---|---|
| `timeout` | `number \| null` | An optional timeout value for the operation. (*Optional*) |

**Returns** `Promise<boolean>`

### updateSecureChannelPort

```ts
updateSecureChannelPort(secureChannelPort: number): void
```

Update the port used for creating secure channels, instead of using the default 443.

Calling this method does not change existing channels. It only affects secure channels
created after this method is called.

| Parameter | Type | Description |
|---|---|---|
| `secureChannelPort` | `number` | The new secure channel port |

### [Symbol.dispose]

```ts
[Symbol.dispose](): void
```

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dataBufferProtos` | `spot-sdk-js/src/bosdyn/api/data_buffer_pb` |
