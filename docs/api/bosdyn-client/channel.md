# bosdyn-client/channel

The gRPC channels to the robot: secure channels with the certificate of the robot and the refreshed user token,
the channel options, and the translation of the gRPC errors into the errors of the SDK.

```js
const { refreshingAccessTokenAuthMetadataPlugin, createSecureChannelCreds, createSecureChannel, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`refreshingAccessTokenAuthMetadataPlugin`](#refreshingaccesstokenauthmetadataplugin) | Function | Plugin to refresh access token. |
| [`createSecureChannelCreds`](#createsecurechannelcreds) | Function | Returns credentials for establishing a secure channel. |
| [`createSecureChannel`](#createsecurechannel) | Function | Create a secure channel to given host:port. |
| [`createInsecureChannel`](#createinsecurechannel) | Function | Create an insecure channel to given host and port. |
| [`generateChannelOptions`](#generatechanneloptions) | Function | Generate the array of options to specify in the creation of a client channel or server. |
| [`translateException`](#translateexception) | Function | Translated a GRPC error into an SDK RpcError. |
| [`DEFAULT_MAX_MESSAGE_LENGTH`](#constants) | Constant | Set default max message length for sending and receiving to 100MB. |
| [`DEFAULT_KEEP_ALIVE_TIME_MS`](#constants) | Constant | Period in milliseconds after which a keepalive ping is sent on the transport. |
| [`DEFAULT_HEADER_BUFFER_LENGTH`](#constants) | Constant | Useful for clients to ensure there is enough room left in a message for other fields like headers |

## refreshingAccessTokenAuthMetadataPlugin

```ts
export function refreshingAccessTokenAuthMetadataPlugin(tokenCb: Function): Function
```

Plugin to refresh access token.

| Parameter | Type | Description |
|---|---|---|
| `tokenCb` | `Function` | Callable that returns an Object&lt;appToken, userToken&gt; |

**Returns** `Function`

## createSecureChannelCreds

```ts
export function createSecureChannelCreds(cert: Buffer, tokenCb: Function): grpc.ChannelCredentials
```

Returns credentials for establishing a secure channel. Uses previously set values on the linked Sdk and this.

| Parameter | Type | Description |
|---|---|---|
| `cert` | `Buffer` | The certificate to create channel credentials. |
| `tokenCb` | `Function` | Callable that returns an Object&lt;appToken, userToken&gt; |

**Returns** `grpc.ChannelCredentials`

## createSecureChannel

```ts
export function createSecureChannel(address: string, port: string | number, creds: grpc.ChannelCredentials, authority: Object, options?: Object): grpc.Channel
```

Create a secure channel to given host:port.

| Parameter | Type | Description |
|---|---|---|
| `address` | `string` | Connection host address. |
| `port` | `string \| number` | Connection port. |
| `creds` | `grpc.ChannelCredentials` | A ChannelCredentials instance. |
| `authority` | `Object` | Authority option for the channel. |
| `options` | `Object` | A list of additional parameters for the GRPC channel. (*Optional*, default `{}`) |

**Returns** `grpc.Channel`: A secure channel.

## createInsecureChannel

```ts
export function createInsecureChannel(address: string, port: string | number, authority?: string, options?: Object): grpc.Channel
```

Create an insecure channel to given host and port.
This method is only used for testing purposes. Applications must use secure channels to
communicate with services running on Spot.

| Parameter | Type | Description |
|---|---|---|
| `address` | `string` | Connection host address. |
| `port` | `string \| number` | Connection port. |
| `authority` | `string` | Authority option for the channel. (*Optional*) |
| `options` | `Object` | A list of additional parameters for the GRPC channel. (*Optional*, default `{}`) |

**Returns** `grpc.Channel`: An insecure channel.

## generateChannelOptions

```ts
export function generateChannelOptions(maxSendMessageLength?: number | null, maxReceiveMessageLength?: number | null, keepAlivePingTimeMs?: number | null): Object
```

Generate the array of options to specify in the creation of a client channel or server.

The list contains the values for max allowed message length for both sending and
receiving. If no values are provided, the default values of 100 MB are used.

| Parameter | Type | Description |
|---|---|---|
| `maxSendMessageLength` | `number \| null` | Max message length allowed for message to send. (*Optional*, default `104_857_600`) |
| `maxReceiveMessageLength` | `number \| null` | Max message length allowed for message to receive. (*Optional*, default `104_857_600`) |
| `keepAlivePingTimeMs` | `number \| null` | Period in milliseconds after which a keepalive ping is sent on the transport. (*Optional*) |

**Returns** `Object`: Object with values for channel options.

## translateException

```ts
export function translateException(rpcError: Error): Error
```

Translated a GRPC error into an SDK RpcError.

| Parameter | Type | Description |
|---|---|---|
| `rpcError` | `Error` | RPC error to translate. |

**Returns** `Error`: Specific sub-type of RpcError.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `DEFAULT_MAX_MESSAGE_LENGTH` | `104857600` | Set default max message length for sending and receiving to 100MB. This value is used when creating channels in the Robot class. |
| `DEFAULT_KEEP_ALIVE_TIME_MS` | `5000` | Period in milliseconds after which a keepalive ping is sent on the transport. |
| `DEFAULT_HEADER_BUFFER_LENGTH` | `4194304` | Useful for clients to ensure there is enough room left in a message for other fields like headers |
