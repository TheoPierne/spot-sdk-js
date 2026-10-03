# bosdyn-client/processors

Common message processors.

```js
const { AddRequestHeader, DataBufferLoggingProcessor, logAllRpcs } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AddRequestHeader`](#addrequestheader) | Class | Sets header fields common to all bosdyn.api requests. |
| [`DataBufferLoggingProcessor`](#databufferloggingprocessor) | Class | Processor that logs every protobuf message to the robot's data buffer. |
| [`logAllRpcs`](#logallrpcs) | Function | Attach a DataBufferLoggingProcessor to log all RPC requests and responses for the given client. |

## AddRequestHeader

```ts
class AddRequestHeader
```

Sets header fields common to all bosdyn.api requests.

### new AddRequestHeader

```ts
constructor(clientNameFunc: Function)
```

| Parameter | Type | Description |
|---|---|---|
| `clientNameFunc` | `Function` | Function to get client's name. |

### Properties

| Property | Type | Description |
|---|---|---|
| `getClientName` | `Function` |  |

### mutate

```ts
mutate(request: any): void
```

Mutate request such that its header contains a client name and a timestamp.
Headers are not required for third party proto requests/responses.

Like Python 5.2.0, the other fields of the header (e.g. disable_rpc_logging) are kept: the header was replaced.

| Parameter | Type | Description |
|---|---|---|
| `request` | `any` | Request to apply the header. |

**Returns** `void`

## DataBufferLoggingProcessor

```ts
class DataBufferLoggingProcessor
```

Processor that logs every protobuf message to the robot's data buffer.

### new DataBufferLoggingProcessor

```ts
constructor(dataBufferClient: any)
```

| Parameter | Type | Description |
|---|---|---|
| `dataBufferClient` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `LOG_THROTTLE_SECONDS` | `number` | Static. Value: `10`. |
| `dataBufferClient` | `import("./data_buffer").DataBufferClient` |  |
| `logger` | `import("winston").Logger` |  |

### mutate

```ts
mutate(proto: any): void
```

Logs the protobuf message to the data buffer, without waiting for it, like add_protobuf_async() in Python
(whose errors are ignored): a failure is logged. It was an unhandled rejection, which ends the Node.js process
(lease and E-Stop keep-alives included), and a synchronous error failed the RPC being logged.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` | The protobuf request or response to log. |

## logAllRpcs

```ts
export function logAllRpcs(client: import("./common").BaseClient<any>, dataBufferClient: import("./data_buffer").DataBufferClient): void
```

Attach a DataBufferLoggingProcessor to log all RPC requests and responses for the given client.

| Parameter | Type | Description |
|---|---|---|
| `client` | `import("./common").BaseClient<any>` |  |
| `dataBufferClient` | `import("./data_buffer").DataBufferClient` |  |
