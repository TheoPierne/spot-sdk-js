# bosdyn-client/sdk

Sdk is a repository for settings typically common to a single developer and/or robot fleet.

```js
const { Sdk, generateClientName, createStandardSdk, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`Sdk`](#sdk) | Class | Repository for settings typically common to a single developer and/or robot fleet. |
| [`generateClientName`](#generateclientname) | Function | Returns a descriptive client name for API clients with an optional prefix. |
| [`createStandardSdk`](#createstandardsdk) | Function | Return an Sdk with the most common configuration. |
| [`BOSDYN_RESOURCE_ROOT`](#constants) | Constant |  |
| [`BOSDYN_CA_CERT_ENV`](#constants) | Constant | Environment variable with the path (or glob) of the certificates to trust instead of the Boston Dynamics robot certificate, e.g. |
| [`SdkError`](#sdkerror) | Class | General class of errors to handle non-response non-rpc errors. |
| [`UnsetAppTokenError`](#unsetapptokenerror) | Class | Path to app token not set. |
| [`UnableToLoadAppTokenError`](#unabletoloadapptokenerror) | Class | Cannot load the provided app token path. |

## Sdk

```ts
class Sdk
```

Repository for settings typically common to a single developer and/or robot fleet.
See also Robot for robot-specific settings.

### new Sdk

```ts
constructor(name?: string)
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | Name to identify the client when communicating with the robot. (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `cert` | `Buffer<ArrayBuffer> \| NonSharedBuffer \| null` |  |
| `clientName` | `string` |  |
| `logger` | `import("winston").Logger` |  |
| `requestProcessors` | `Function[]` |  |
| `responseProcessors` | `Function[]` |  |
| `serviceClientFactoriesByType` | `{}` |  |
| `serviceTypeByName` | `{}` |  |
| `robots` | `{ [x: string]: Robot; }` | Robots created by this Sdk, keyed by address. |
| `maxSendMessageLength` | `number` | Set default max message length for sending. |
| `maxReceiveMessageLength` | `number` | Set default max message length for receiving. |
| `executor` | `any` |  |

### createRobot

```ts
createRobot(address: string, name?: string): Robot
```

Get a Robot initialized with this Sdk, creating it if it does not yet exist.

| Parameter | Type | Description |
|---|---|---|
| `address` | `string` | Network-resolvable address of the robot, e.g. '192.168.80.3' |
| `name` | `string` | A unique identifier for the robot, e.g. 'My First Robot'. Default null to use the address as the name. (*Optional*, default `null`) |

**Returns** `Robot`: robot A Robot initialized with the current Sdk settings.

### setMaxMessageLength

```ts
setMaxMessageLength(maxMessageLength: number): void
```

Updates the send and receive max message length values in all the clients/channels created from this point on.

| Parameter | Type | Description |
|---|---|---|
| `maxMessageLength` | `number` | Max message length value to use for sending and receiving messages. |

**Returns** `void`

### registerServiceClient

```ts
registerServiceClient(creationFunc: typeof import("./common").BaseClient, serviceType?: string, serviceName?: string): void
```

Tell the Sdk how to create a specific type of service client.

| Parameter | Type | Description |
|---|---|---|
| `creationFunc` | `typeof import("./common").BaseClient` | Callable that returns a client. Typically just the class. |
| `serviceType` | `string` | Type of the service. If null (default), will try to get the name from creation_func. (*Optional*, default `null`) |
| `serviceName` | `string` | Name of the service. If null (default), will try to get the name from creation_func. (*Optional*, default `null`) |

**Returns** `void`

### loadRobotCert

```ts
loadRobotCert(resourcePathGlob?: string | null): void
```

Load the SSL certificate for the robot.

| Parameter | Type | Description |
|---|---|---|
| `resourcePathGlob` | `string \| null` | Optional path to certificate resource(s): a file, a directory or a glob expression to match certificates. If null, the path in the BOSDYN_CA_CERT environment variable, if set (e.g. the CA of a mock robot), else the robot certificate of the 'resources' package (Boston Dynamics Root CA), like Python. (*Optional*, default `null`) |

**Returns** `void`

**Throws**

- `RangeError` No certificate matches the path.

### clearRobots

```ts
clearRobots(): void
```

Remove all cached Robot instances.
Subsequent calls to createRobot() will return newly created Robots.
Existing robot instances will continue to work, but their time sync and token refresh
threads will be stopped.

## SdkError

```ts
class SdkError extends BosdynError
```

General class of errors to handle non-response non-rpc errors.

## UnsetAppTokenError

```ts
class UnsetAppTokenError extends SdkError
```

Path to app token not set.

## UnableToLoadAppTokenError

```ts
class UnableToLoadAppTokenError extends SdkError
```

Cannot load the provided app token path.

## generateClientName

```ts
export function generateClientName(prefix?: string): string
```

Returns a descriptive client name for API clients with an optional prefix.

| Parameter | Type | Description |
|---|---|---|
| `prefix` | `string` | (*Optional*) |

**Returns** `string`

## createStandardSdk

```ts
export function createStandardSdk(clientNamePrefix: string, serviceClients?: any[] | null, certResourceGlob?: string | null): Sdk
```

Return an Sdk with the most common configuration.

| Parameter | Type | Description |
|---|---|---|
| `clientNamePrefix` | `string` | Prefix to pass to generate_client_name() |
| `serviceClients` | `any[] \| null` | List of service client classes to register in addition to the defaults. (*Optional*, default `null`) |
| `certResourceGlob` | `string \| null` | Glob expression matching robot certificate(s). Default null to use distributed certificate. (*Optional*, default `null`) |

**Returns** `Sdk`

**Throws**

- `RangeError` Robot cert could not be loaded.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `BOSDYN_RESOURCE_ROOT` | `'C:\Users\theop\.bosdyn'` |  |
| `BOSDYN_CA_CERT_ENV` | `'BOSDYN_CA_CERT'` | Environment variable with the path (or glob) of the certificates to trust instead of the Boston Dynamics robot certificate, e.g. the CA of a mock robot. Used by loadRobotCert() when it gets no path. |
