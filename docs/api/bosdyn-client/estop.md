# bosdyn-client/estop

For clients to the emergency stop (estop) service.

```js
const { EstopClient, EstopEndpoint, EstopKeepAlive, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`EstopClient`](#estopclient) | Class | Client to the estop service. |
| [`EstopEndpoint`](#estopendpoint) | Class | Endpoint in the software estop system. |
| [`EstopKeepAlive`](#estopkeepalive) | Class | Wraps an EstopEndpoint to do periodic check-ins, keeping software estop from timing out. |
| [`isEstopped`](#isestopped) | Function | Returns true if robot is estopped, false otherwise. |
| [`responseFromChallenge`](#responsefromchallenge) | Function |  |
| [`StopLevel`](#constants) | Constant |  |
| [`EstopResponseError`](#estopresponseerror) | Class | General class of errors for Estop service. |
| [`EndpointUnknownError`](#endpointunknownerror) | Class | The endpoint specified in the request is not registered. |
| [`IncorrectChallengeResponseError`](#incorrectchallengeresponseerror) | Class | The challenge and/or response was incorrect. |
| [`EndpointMismatchError`](#endpointmismatcherror) | Class | Target endpoint did not match. |
| [`ConfigMismatchError`](#configmismatcherror) | Class | Registered to the wrong configuration. |
| [`InvalidEndpointError`](#invalidendpointerror) | Class | New endpoint was invalid. |
| [`InvalidIdError`](#invalididerror) | Class | Tried to replace a EstopConfig, but provided bad ID. |
| [`MotorsOnError`](#motorsonerror) | Class | The operation is not allowed while motors are on. |

## EstopResponseError

```ts
class EstopResponseError extends ResponseError
```

General class of errors for Estop service.

## EndpointUnknownError

```ts
class EndpointUnknownError extends EstopResponseError
```

The endpoint specified in the request is not registered.

## IncorrectChallengeResponseError

```ts
class IncorrectChallengeResponseError extends EstopResponseError
```

The challenge and/or response was incorrect.

## EndpointMismatchError

```ts
class EndpointMismatchError extends EstopResponseError
```

Target endpoint did not match.

## ConfigMismatchError

```ts
class ConfigMismatchError extends EstopResponseError
```

Registered to the wrong configuration.

## InvalidEndpointError

```ts
class InvalidEndpointError extends EstopResponseError
```

New endpoint was invalid.

## InvalidIdError

```ts
class InvalidIdError extends EstopResponseError
```

Tried to replace a EstopConfig, but provided bad ID.

## MotorsOnError

```ts
class MotorsOnError extends EstopResponseError
```

The operation is not allowed while motors are on.

## EstopClient

```ts
class EstopClient extends BaseClient<EstopServiceClient>
```

Client to the estop service.

### new EstopClient

```ts
constructor(name?: string)
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'estop'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.EstopService'`. |

### register

```ts
register(targetConfigId: string, endpoint: EstopEndpoint, args?: Object): Promise<estopPb.EstopEndpoint>
```

Register the endpoint in the target configuration.

| Parameter | Type | Description |
|---|---|---|
| `targetConfigId` | `string` | The identification of the current configuration on the robot. |
| `endpoint` | `EstopEndpoint` | Estop endpoint. |
| `args` | `Object` | Passed to underlying RPC. Example: { timeout: 5000 } to cancel the RPC after 5 seconds. (*Optional*) |

**Returns** `Promise<estopPb.EstopEndpoint>`

### deregister

```ts
deregister(targetConfigId: string, endpoint: EstopEndpoint, args?: Object): Promise<estopPb.DeregisterEstopEndpointResponse>
```

Deregister the endpoint in the target configuration.

| Parameter | Type | Description |
|---|---|---|
| `targetConfigId` | `string` | The identification of the current configuration on the robot. |
| `endpoint` | `EstopEndpoint` | Estop endpoint. |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<estopPb.DeregisterEstopEndpointResponse>`

### getConfig

```ts
getConfig(args?: Object): Promise<estopPb.EstopConfig>
```

Return the estop configuration of the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<estopPb.EstopConfig>`

### setConfig

```ts
setConfig(config: estopPb.EstopConfig, targetConfigId: string, args?: Object): Promise<estopPb.EstopConfig>
```

Change the estop configuration of the robot.

| Parameter | Type | Description |
|---|---|---|
| `config` | `estopPb.EstopConfig` | New configuration to set. |
| `targetConfigId` | `string` | The identification of the current configuration on the robot. |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<estopPb.EstopConfig>`

### getStatus

```ts
getStatus(args?: Object): Promise<estopPb.EstopSystemStatus>
```

Return the estop status of the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<estopPb.EstopSystemStatus>`

### checkIn

```ts
checkIn(stopLevel: estopPb.EstopStopLevel, endpoint: EstopEndpoint, challenge: (string | bigint | number) | null, response: (string | bigint | number) | null, suppressIncorrect?: boolean, args?: Object): Promise<string>
```

Check in with the estop system.

| Parameter | Type | Description |
|---|---|---|
| `stopLevel` | `estopPb.EstopStopLevel` | Number representing desired stop level. See StopLevel enum. |
| `endpoint` | `EstopEndpoint` | The endpoint asserting the stop level. |
| `challenge` | `(string \| bigint \| number) \| null` | A previously received challenge from the server (an uint64: the challenges are strings, exact beyond 2^53). |
| `response` | `(string \| bigint \| number) \| null` | A response to the 'challenge' argument. |
| `suppressIncorrect` | `boolean` | Set True to prevent an IncorrectChallengeResponseError from being raised when STATUS_INVALID is returned. Useful for the first check-in, before a challenge has been sent by the server. (*Optional*) |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<string>`: The new challenge.

## EstopEndpoint

```ts
class EstopEndpoint
```

Endpoint in the software estop system.

### new EstopEndpoint

```ts
constructor(client: EstopClient, name: string, estopTimeout: number, role?: string, firstCheckin?: boolean, estopCutPowerTimeout?: number | null)
```

| Parameter | Type | Description |
|---|---|---|
| `client` | `EstopClient` | The client of the estop service. |
| `name` | `string` | Name of the endpoint. |
| `estopTimeout` | `number` | Timeout of the endpoint, in seconds like Python (not in milliseconds like the timeouts of the RPCs): the robot is stopped when it gets no valid check-in during this time. |
| `role` | `string` | Role of the endpoint. (*Optional*, default `EstopEndpoint.REQUIRED_ROLE`) |
| `firstCheckin` | `boolean` | Whether the first check-in does not have a challenge to answer yet. (*Optional*, default `true`) |
| `estopCutPowerTimeout` | `number \| null` | Timeout of the cut power of the endpoint, in seconds. (*Optional*, default `null`) |

**Throws**

- `ValueError` The timeout is not a positive number.

### Properties

| Property | Type | Description |
|---|---|---|
| `REQUIRED_ROLE` | `string` | This is an estop role required in every configuration. Static. Read-only. Value: `'PDB_rooted'`. |
| `client` | `EstopClient` |  |
| `role` | `string` |  |
| `estopTimeout` | `number` |  |
| `estopCutPowerTimeout` | `number \| null` |  |
| `logger` | `import("winston").Logger` |  |
| `uniqueId` | `string \| null` | The unique id of the endpoint. Should be used as read-only. Read-only. |
| `lastSetLevel` | `number \| null` | Read-only. |

### toString

```ts
toString(): string
```

**Returns** `string`

### firstCheckin

```ts
firstCheckin(): boolean
```

**Returns** `boolean`

### setFirstCheckin

```ts
setFirstCheckin(val: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `val` | `any` |  |

### setChallenge

```ts
setChallenge(challenge: any): void
```

Sets the challenge of the endpoint.

| Parameter | Type | Description |
|---|---|---|
| `challenge` | `any` |  |

### getChallenge

```ts
getChallenge(): any
```

The challenge of the endpoint.

**Returns** `any`

### forceSimpleSetup

```ts
forceSimpleSetup(): Promise<void>
```

Replaces the existing estop configuration with a single-endpoint configuration.

**Returns** `Promise<void>`

### stop

```ts
stop(args?: Object): Promise<void>
```

Issue a CUT stop level command to the robot, cutting motor power immediately.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<void>`

### settleThenCut

```ts
settleThenCut(args?: Object): Promise<void>
```

Issue a SETTLE_THEN_CUT stop level. The robot will attempt to sit before cutting motor power.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<void>`

### allow

```ts
allow(args?: Object): Promise<void>
```

Issue a NONE stop level command to the robot, allowing motor power.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<void>`

### checkInAtLevel

```ts
checkInAtLevel(level: number, args?: Object): Promise<void>
```

Check in at a specified level.
Meant for internal use, but may be helpful for higher-level wrappers.

| Parameter | Type | Description |
|---|---|---|
| `level` | `number` | Number representing desired stop level. See StopLevel enum. |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<void>`

### deregister

```ts
deregister(args?: Object): Promise<void>
```

Deregister this endpoint from the configuration.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<void>`

### register

```ts
register(targetConfigId: string, args?: Object): Promise<void>
```

Register this endpoint to the given configuration.

| Parameter | Type | Description |
|---|---|---|
| `targetConfigId` | `string` | The identification of the current configuration on the robot. |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<void>`

### fromProto

```ts
fromProto(proto: estopPb.EstopEndpoint): void
```

Set member variables based on given estopPb.EstopEndpoint.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `estopPb.EstopEndpoint` | The source proto |

### toProto

```ts
toProto(): estopPb.EstopEndpoint
```

Return estopPb.EstopEndpoint based on current member variables.

**Returns** `estopPb.EstopEndpoint`

## EstopKeepAlive

```ts
class EstopKeepAlive
```

Wraps an EstopEndpoint to do periodic check-ins, keeping software estop from timing out.
This is intended to be the common implementation of both periodic checking-in and one-time
check-ins. See the command line utility and the "Big Red Button" application for examples.
You should not access any of the "private" members, or the wrapped endpoint.

### new EstopKeepAlive

```ts
constructor(endpoint: EstopEndpoint, rpcTimeoutSeconds?: number | null, rpcIntervalSeconds?: number | null, keepRunningCb?: (() => boolean) | null, maxStatusQueueSize?: number)
```

| Parameter | Type | Description |
|---|---|---|
| `endpoint` | `EstopEndpoint` | The endpoint to check in with. |
| `rpcTimeoutSeconds` | `number \| null` | Timeout of the check-in RPCs, in seconds (the estop timeout of the endpoint if null). (*Optional*, default `null`) |
| `rpcIntervalSeconds` | `number \| null` | Interval between the check-ins, in seconds (a third of the estop timeout of the endpoint if null). (*Optional*, default `null`) |
| `keepRunningCb` | `(() => boolean) \| null` | Called before each check-in: the check-ins stop when it returns false. (*Optional*, default `null`) |
| `maxStatusQueueSize` | `number` | The maximum number of statuses kept in statusQueue. (*Optional*, default `20`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `KeepAliveStatus` | `{ OK: number; ERROR: number; DISABLED: number; }` | Static. |
| `statusQueue` | `Queue` |  |
| `logger` | `import("winston").Logger` | Read-only. |
| `lastSetLevel` | `number \| null` | The last stop level set by a check-in of the endpoint (null before the first one), like Python. Read-only. |
| `endpoint` | `EstopEndpoint` | The endpoint of the keep-alive. Should be used as read-only. Read-only. |
| `client` | `EstopClient` | The client of the endpoint. Should be used as read-only. Read-only. |

### waitForInitialCheckIn

```ts
waitForInitialCheckIn(): Promise<void>
```

Resolves once the initial check-in is done (successful or not). Python's constructor blocks on it:
await this before powering on the motors.

**Returns** `Promise<void>`

### shutdown

```ts
shutdown(): Promise<void>
```

Stop the periodic check-ins. The returned promise resolves once the check-in loop has exited,
like Python's shutdown() which joins the thread.

**Returns** `Promise<void>`

### allow

```ts
allow(): Promise<void>
```

**Returns** `Promise<void>`

### settleThenCut

```ts
settleThenCut(): Promise<void>
```

**Returns** `Promise<void>`

### stop

```ts
stop(): Promise<void>
```

**Returns** `Promise<void>`

### [Symbol.dispose]

```ts
[Symbol.dispose](): void
```

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

**Returns** `Promise<void>`

## isEstopped

```ts
export function isEstopped(estopClient: EstopClient, args?: Object): Promise<boolean>
```

Returns true if robot is estopped, false otherwise.

| Parameter | Type | Description |
|---|---|---|
| `estopClient` | `EstopClient` | The EstopClient |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<boolean>`

## responseFromChallenge

```ts
export function responseFromChallenge(challenge: any): string
```

| Parameter | Type | Description |
|---|---|---|
| `challenge` | `any` |  |

**Returns** `string`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `StopLevel` | `typeof estopPb.EstopStopLevel` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `estopPb` | `spot-sdk-js/src/bosdyn/api/estop_pb` |
