# bosdyn-client/payload_registration

Client for the payload service.

This allows client code to write to the robot payload registry.

```js
const { PayloadRegistrationClient, PayloadRegistrationKeepAlive, PayloadRegistrationResponseError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`PayloadRegistrationClient`](#payloadregistrationclient) | Class | A client registering payload configs onto the robot. |
| [`PayloadRegistrationKeepAlive`](#payloadregistrationkeepalive) | Class | Helper class to keep a payload entry registered. |
| [`PayloadRegistrationResponseError`](#payloadregistrationresponseerror) | Class | General class of errors for PayloadRegistration service. |
| [`InvalidPayloadCredentialsError`](#invalidpayloadcredentialserror) | Class | The payload credentials do not match any payload registered to the robot. |
| [`PayloadNotAuthorizedError`](#payloadnotauthorizederror) | Class | The payload is not authorized. |
| [`PayloadAlreadyExistsError`](#payloadalreadyexistserror) | Class | A payload with this GUID is already registered on the robot. |
| [`PayloadDoesNotExistError`](#payloaddoesnotexisterror) | Class | A payload with this GUID is not registered on the robot. |

## PayloadRegistrationResponseError

```ts
class PayloadRegistrationResponseError extends ResponseError
```

General class of errors for PayloadRegistration service.

## InvalidPayloadCredentialsError

```ts
class InvalidPayloadCredentialsError extends PayloadRegistrationResponseError
```

The payload credentials do not match any payload registered to the robot.

## PayloadNotAuthorizedError

```ts
class PayloadNotAuthorizedError extends PayloadRegistrationResponseError
```

The payload is not authorized.

## PayloadAlreadyExistsError

```ts
class PayloadAlreadyExistsError extends PayloadRegistrationResponseError
```

A payload with this GUID is already registered on the robot.

## PayloadDoesNotExistError

```ts
class PayloadDoesNotExistError extends PayloadRegistrationResponseError
```

A payload with this GUID is not registered on the robot.

## PayloadRegistrationClient

```ts
class PayloadRegistrationClient extends BaseClient<PayloadRegistrationServiceClient>
```

A client registering payload configs onto the robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'payload-registration'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.PayloadRegistrationService'`. |

### registerPayload

```ts
registerPayload(payload: Payload, secret: string, args?: Object): Promise<payloadRegistrationProtos.RegisterPayloadResponse>
```

Register a payload to the robot.

| Parameter | Type | Description |
|---|---|---|
| `payload` | `Payload` | The payload protobuf message to register. |
| `secret` | `string` | Unique string to verify payload. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<payloadRegistrationProtos.RegisterPayloadResponse>`

### updatePayloadVersion

```ts
updatePayloadVersion(guid: string, secret: string, updatedVersion: any, args?: Object): Promise<payloadRegistrationProtos.UpdatePayloadVersionResponse>
```

Update an existing payload's version on the robot.

| Parameter | Type | Description |
|---|---|---|
| `guid` | `string` | The GUID of the payload to update. |
| `secret` | `string` | Secret of the payload to update. |
| `updatedVersion` | `any` | The new version to set this payload to. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<payloadRegistrationProtos.UpdatePayloadVersionResponse>`

### getPayloadAuthToken

```ts
getPayloadAuthToken(guid: string, secret: string, args?: Object): Promise<string>
```

Request a limited-access auth token for a payload.
Getting the auth token requires payload to be authorized via the web console.

| Parameter | Type | Description |
|---|---|---|
| `guid` | `string` | The GUID of the registered payload requesting the token. |
| `secret` | `string` | The secret of the registered payload requesting the token. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<string>`

### attachPayload

```ts
attachPayload(guid: string, secret: string, args?: Object): Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>
```

Attach a payload to the robot.

| Parameter | Type | Description |
|---|---|---|
| `guid` | `string` | The GUID of the payload to attach. |
| `secret` | `string` | Secret of the payload to attach. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>`

### detachPayload

```ts
detachPayload(guid: string, secret: string, args?: Object): Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>
```

Detach a payload from the robot.

| Parameter | Type | Description |
|---|---|---|
| `guid` | `string` | The GUID of the payload to detach. |
| `secret` | `string` | Secret of the payload to detach. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>`

## PayloadRegistrationKeepAlive

```ts
class PayloadRegistrationKeepAlive
```

Helper class to keep a payload entry registered.

Using a payload keep alive will ensure that a payload automatically re-registers itself with
the robot if it is ever forgotten. However, payload registrations on Spot are persistent
across power cycles and updates, so in most cases there is no need to send a payload
registration request after the first successful payload registration. The use of a payload
registration keep alive should only be used when a payload is expected to be regularly
reconfigured by forgetting & re-authorizing the payload in the web page.

### new PayloadRegistrationKeepAlive

```ts
constructor(payRegClient: PayloadRegistrationClient, payload: Payload, secret: string, registrationInterval?: number, logger?: Logger, rpcTimeout?: number, initialRetry?: number)
```

| Parameter | Type | Description |
|---|---|---|
| `payRegClient` | `PayloadRegistrationClient` | Client to the payload registration service. |
| `payload` | `Payload` | Object that defines the payload to register. |
| `secret` | `string` | String secret for the payload. |
| `registrationInterval` | `number` | Number of milliseconds between payload registration requests. (*Optional*) |
| `logger` | `Logger` | Object to log with. Defaults to null, in which case one with the class name is acquired. (*Optional*) |
| `rpcTimeout` | `number` | Number of milliseconds to wait for a payRegClient RPC. Defaults to null, for the default RPC timeout. (*Optional*) |
| `initialRetry` | `number` | Number of milliseconds to wait before retrying a registration that failed due to unhandled errors including RPC transport issues. (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `payRegClient` | `PayloadRegistrationClient` | The payload registration client |
| `payload` | `Payload` | Object that defines the payload to register. |
| `secret` | `string` | String secret for the payload. |
| `logger` | `Logger` | Object to log with. Defaults to null, in which case one with the class name is acquired. |
| `reregistrationErrorCallback` | `((arg0: Error) => (number \| Promise<number>)) \| null` | Optional callback called when an error occurs in the re-registration loop. It returns an ErrorCallbackResult, or a promise of one, telling the loop what to do. |

### start

```ts
start(): Promise<PayloadRegistrationKeepAlive>
```

Register and then kick off the re-registration loop.
Can not be restarted with this method after a shutdown.

**Returns** `Promise<PayloadRegistrationKeepAlive>`

**Throws**

- `RpcError` Problem communicating with the robot.
- `Error` The keep-alive was started more than once.

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

Stop the background thread.

**Returns** `Promise<void>`: Resolves once the loop has ended, like Python's join().

### [Symbol.dispose]

```ts
[Symbol.dispose](): void
```

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

**Returns** `Promise<void>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `payloadRegistrationProtos` | `spot-sdk-js/src/bosdyn/api/payload_registration_pb` |
