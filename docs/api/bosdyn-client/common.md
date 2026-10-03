# bosdyn-client/common

Contains elements common to all service clients.

```js
const { BaseClient, commonHeaderErrors, streamingCommonHeaderErrors, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`BaseClient`](#baseclient) | Class | Helper base class for all clients to Boston Dynamics services. |
| [`commonHeaderErrors`](#commonheadererrors) | Function | Return an exception based on common response header. |
| [`streamingCommonHeaderErrors`](#streamingcommonheadererrors) | Function | Return an error based on common response header for a streaming response iterator. |
| [`commonLeaseErrors`](#commonleaseerrors) | Function | Return an error based on lease use result. |
| [`streamingCommonLeaseErrors`](#streamingcommonleaseerrors) | Function | Return an error based on lease use result for a streaming response iterator. |
| [`customParamsError`](#customparamserror) | Function | Return an error based on having a custom parameter status and message. |
| [`errorFactory`](#errorfactory) | Function | Return an error based on the status field of the given response. |
| [`commonLicenseErrors`](#commonlicenseerrors) | Function | Return an error based on license status. |
| [`handleUnsetStatusError`](#handleunsetstatuserror) | Function | Decorate "error from response" functions to handle unset status field errors. |
| [`handleCommonHeaderErrors`](#handlecommonheadererrors) | Function | Decorate "error from response" functions to handle typical header errors. |
| [`handleLeaseUseResultErrors`](#handleleaseuseresulterrors) | Function | Decorate "error from response" functions to handle typical lease errors. |
| [`handleCustomParamsErrors`](#handlecustomparamserrors) | Function | Decorate "error from response" functions to handle custom param errors. |
| [`handleLicenseErrors`](#handlelicenseerrors) | Function | Decorate "error from response" functions to handle typical license errors. |
| [`handleLicenseErrorsIfPresent`](#handlelicenseerrorsifpresent) | Function | Decorate "error from response" functions to handle typical license errors. |
| [`getSelfIp`](#getselfip) | Function | Get the IP address of the ethernet or WiFi interface used to talk to the robot. |
| [`DEFAULT_RPC_TIMEOUT`](#constants) | Constant |  |
| [`RPC_METHOD`](#constants) | Constant | The key of the path of the gRPC method in the infos of the logs of the RPCs, e.g. |
| [`stubCreationFunc`](#stubcreationfunc) | Type |  |

## BaseClient

```ts
class BaseClient
```

Helper base class for all clients to Boston Dynamics services.

### new BaseClient

```ts
constructor(stubCreationFunc: stubCreationFunc, name?: string)
```

| Parameter | Type | Description |
|---|---|---|
| `stubCreationFunc` | `stubCreationFunc` | A constructor function for a class that extends `grpc.Client`, used to create the gRPC stub for this client. |
| `name` | `string` | Optional name for this client. (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `logger` | `WinstonLogger` | The logger used for logging messages. Defaults to `console`. |
| `requestProcessors` | `Function[]` | List of processors that modify requests before sending them. |
| `responseProcessors` | `Function[]` | List of processors that modify responses after receiving them. |
| `leaseWallet` | `LeaseWallet \| null` | A wallet containing lease information for the client. |
| `clientName` | `string \| null` | The name of the client. |
| `executor` | `any` |  |
| `channel` | `GrpcChannel` |  |

### updateFrom

```ts
updateFrom(other: Robot): void
```

Adopt key objects like processors, logger, and wallet from other.

| Parameter | Type | Description |
|---|---|---|
| `other` | `Robot` | Update object form another service. |

### updateRequestIterator

```ts
updateRequestIterator(requestIterator: any, logger: any, rpcMethod: any, isBlocking: any, copyRequest?: boolean): AsyncGenerator<any, void, unknown>
```

| Parameter | Type | Description |
|---|---|---|
| `requestIterator` | `any` |  |
| `logger` | `any` |  |
| `rpcMethod` | `any` |  |
| `isBlocking` | `any` |  |
| `copyRequest` | `boolean` | (*Optional*) |

**Returns** `AsyncGenerator<any, void, unknown>`

### updateResponseIterator

```ts
updateResponseIterator(responseIterator: any, logger: any, rpcMethod: any, isBlocking: any): import("google-protobuf").Message[]
```

| Parameter | Type | Description |
|---|---|---|
| `responseIterator` | `any` |  |
| `logger` | `any` |  |
| `rpcMethod` | `any` |  |
| `isBlocking` | `any` |  |

**Returns** `import("google-protobuf").Message[]`

### call

```ts
call(rpcMethod: import("@grpc/grpc-js").MethodDefinition<any, any>, request: import("google-protobuf").Message | import("google-protobuf").Message[], valueFromResponse?: Function | null, errorFromResponse?: Function | null, copyRequest?: boolean, args?: Object): Promise<any>
```

Returns result of calling rpcMethod(request, args) after running processors.

| Parameter | Type | Description |
|---|---|---|
| `rpcMethod` | `import("@grpc/grpc-js").MethodDefinition<any, any>` | The gRPC stub method. |
| `request` | `import("google-protobuf").Message \| import("google-protobuf").Message[]` | The request message, or an (async) iterable of messages for client streaming. |
| `valueFromResponse` | `Function \| null` | Converts the response to the returned value. (*Optional*, default `null`) |
| `errorFromResponse` | `Function \| null` | Returns the error to throw for a response, or null. (*Optional*, default `null`) |
| `copyRequest` | `boolean` | Apply the request processors to a copy of the request. (*Optional*, default `true`) |
| `args` | `Object` | Call options, not modified: `timeout` in milliseconds (30 s if not given, no deadline if null like None in Python), `metadata` and `waitForReady`, and the other options of grpc-js (e.g. `credentials`). `assembleType` is the message class to assemble from a stream of DataChunks, like Python's `assemble_type`: the handlers then receive that single message. (*Optional*, default `{}`) |

**Returns** `Promise<any>`

### handleResponse

```ts
handleResponse(response: any, errorFromResponse: any, valueFromResponse: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` |  |
| `errorFromResponse` | `any` |  |
| `valueFromResponse` | `any` |  |

**Returns** `any`

### handleResponseStreaming

```ts
handleResponseStreaming(response: any, errorFromResponse: any, valueFromResponse: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` |  |
| `errorFromResponse` | `any` |  |
| `valueFromResponse` | `any` |  |

**Returns** `any`

## commonHeaderErrors

```ts
export function commonHeaderErrors(response: JspbMessage): ResponseError | InvalidRequestError | InternalServerError | UnsetStatusError | null
```

Return an exception based on common response header. None if no error.

| Parameter | Type | Description |
|---|---|---|
| `response` | `JspbMessage` | The response from spot |

**Returns** `ResponseError \| InvalidRequestError \| InternalServerError \| UnsetStatusError \| null`

## streamingCommonHeaderErrors

```ts
export function streamingCommonHeaderErrors(responseIterator: any): ResponseError | null
```

Return an error based on common response header for a streaming response iterator. null if no error.

| Parameter | Type | Description |
|---|---|---|
| `responseIterator` | `any` |  |

**Returns** `ResponseError \| null`

## commonLeaseErrors

```ts
export function commonLeaseErrors(response: any): InternalServerError | LeaseUseError | null
```

Return an error based on lease use result. null if no error.

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` |  |

**Returns** `InternalServerError \| LeaseUseError \| null`

## streamingCommonLeaseErrors

```ts
export function streamingCommonLeaseErrors(responseIterator: any): InternalServerError | LeaseUseError | null
```

Return an error based on lease use result for a streaming response iterator. null if no error.

| Parameter | Type | Description |
|---|---|---|
| `responseIterator` | `any` |  |

**Returns** `InternalServerError \| LeaseUseError \| null`

## customParamsError

```ts
export function customParamsError(response: any, statusValue?: null, statusFieldName?: string, errorFieldName?: string, totalResponse?: null): CustomParamError | null
```

Return an error based on having a custom parameter status and message. null if no error.

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` |  |
| `statusValue` | `null` | (*Optional*) |
| `statusFieldName` | `string` | (*Optional*) |
| `errorFieldName` | `string` | (*Optional*) |
| `totalResponse` | `null` | (*Optional*) |

**Returns** `CustomParamError \| null`

## errorFactory

```ts
export function errorFactory(response: JspbMessage | JspbMessage[], status: number, statusToString: any, statusToError: Map<any, any>): ResponseError | null
```

Return an error based on the status field of the given response.
Since most callers of this function are "response to error" callbacks, any exceptions
raised by this function are a considered a serious problem. Strongly consider using
collections.defaultdict for the status_to_error mapping, and/or wrapping calls to this
function in try/except blocks.

| Parameter | Type | Description |
|---|---|---|
| `response` | `JspbMessage \| JspbMessage[]` | Protobuf message to examine or an iterator of protobuf responses. |
| `status` | `number` | Status from the protobuf message. |
| `statusToString` | `any` | Function that converts numeric status value to string. May raise ValueError, in which case just the numeric code is included in a default error message. |
| `statusToError` | `Map<any, any>` | mapping of status -&gt; [error_constructor, error_message] error_constructor must take arguments "response" and "error_message". (and ideally will subclass from ResponseError.) |

**Returns** `ResponseError \| null`: The error, or null.

## commonLicenseErrors

```ts
export function commonLicenseErrors(response: any, allowUnset?: boolean): LicenseError | null
```

Return an error based on license status.

null if no error.

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` |  |
| `allowUnset` | `boolean` | (*Optional*) |

**Returns** `LicenseError \| null`

## handleUnsetStatusError

```ts
export function handleUnsetStatusError(unset: any, field?: string, statusobj?: null): (func: any) => (...args: any[]) => any
```

Decorate "error from response" functions to handle unset status field errors.

| Parameter | Type | Description |
|---|---|---|
| `unset` | `any` |  |
| `field` | `string` | (*Optional*) |
| `statusobj` | `null` | (*Optional*) |

**Returns** `(func: any) => (...args: any[]) => any`

## handleCommonHeaderErrors

```ts
export function handleCommonHeaderErrors(func: any): (...args: any[]) => any
```

Decorate "error from response" functions to handle typical header errors.

| Parameter | Type | Description |
|---|---|---|
| `func` | `any` |  |

**Returns** `(...args: any[]) => any`

## handleLeaseUseResultErrors

```ts
export function handleLeaseUseResultErrors(func: any): (...args: any[]) => any
```

Decorate "error from response" functions to handle typical lease errors.

| Parameter | Type | Description |
|---|---|---|
| `func` | `any` |  |

**Returns** `(...args: any[]) => any`

## handleCustomParamsErrors

```ts
export function handleCustomParamsErrors(funcOrOptions: any, maybeOptions?: {}): (...args: any[]) => any
```

Decorate "error from response" functions to handle custom param errors.

| Parameter | Type | Description |
|---|---|---|
| `funcOrOptions` | `any` |  |
| `maybeOptions` | `{}` | (*Optional*) |

**Returns** `(...args: any[]) => any`

## handleLicenseErrors

```ts
export function handleLicenseErrors(func: any): (...args: any[]) => any
```

Decorate "error from response" functions to handle typical license errors.

| Parameter | Type | Description |
|---|---|---|
| `func` | `any` |  |

**Returns** `(...args: any[]) => any`

## handleLicenseErrorsIfPresent

```ts
export function handleLicenseErrorsIfPresent(func: any): (...args: any[]) => any
```

Decorate "error from response" functions to handle typical license errors. Does not throw an error for
STATUS_UNKNOWN. Use for responses that may only sometimes fill out the license status.

| Parameter | Type | Description |
|---|---|---|
| `func` | `any` |  |

**Returns** `(...args: any[]) => any`

## getSelfIp

```ts
export function getSelfIp(robotHostname: any): Promise<any>
```

Get the IP address of the ethernet or WiFi interface used to talk to the robot.

| Parameter | Type | Description |
|---|---|---|
| `robotHostname` | `any` |  |

**Returns** `Promise<any>`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `DEFAULT_RPC_TIMEOUT` | `30000` |  |
| `RPC_METHOD` | `unique symbol` | The key of the path of the gRPC method in the infos of the logs of the RPCs, e.g. '/bosdyn.api.DataBufferService/RecordTextMessages': the filters of the LoggingHandler of data_buffer recognize them (Python checks the name of the logger, or the module and the function of the records). |

## Types

### stubCreationFunc

```ts
export type stubCreationFunc = new (address: string, credentials: import("@grpc/grpc-js").ChannelCredentials, options?: import("@grpc/grpc-js").ClientOptions) => import("@grpc/grpc-js").Client
```
