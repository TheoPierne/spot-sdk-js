# bosdyn-client/exceptions

The errors of the SDK: BosdynError, the errors of the responses (ResponseError) and the errors of the RPCs
(RpcError).

```js
const { BosdynError, ValueError, ResponseError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`BosdynError`](#bosdynerror) | Class | Base exception that all public api exceptions are derived from (Python's bosdyn.client.exceptions.Error). |
| [`ValueError`](#valueerror) | Class |  |
| [`ResponseError`](#responseerror) | Class | Error triggered by a server response whose rpc succeeded. |
| [`InvalidRequestError`](#invalidrequesterror) | Class | The provided request arguments are ill-formed or invalid, independent of the system state. |
| [`LeaseUseError`](#leaseuseerror) | Class | Request was rejected due to using an invalid lease. |
| [`LicenseError`](#licenseerror) | Class | Request was rejected due to using an invalid license. |
| [`ServerError`](#servererror) | Class | Service encountered an unrecoverable error. |
| [`InternalServerError`](#internalservererror) | Class | Service experienced an unexpected error state. |
| [`UnsetStatusError`](#unsetstatuserror) | Class | Response's status field (in either message or common header) was UNKNOWN value. |
| [`RpcError`](#rpcerror) | Class | An error occurred trying to reach a service on the robot. |
| [`RetryableRpcError`](#retryablerpcerror) | Class | An RpcError that denotes the same request may succeed if retried. |
| [`PersistentRpcError`](#persistentrpcerror) | Class | An RpcError that will almost certainly continue to keep failing if retried |
| [`ClientCancelledOperationError`](#clientcancelledoperationerror) | Class | The user cancelled the rpc request. |
| [`InvalidClientCertificateError`](#invalidclientcertificateerror) | Class | The provided client certificate is invalid. |
| [`NonexistentAuthorityError`](#nonexistentauthorityerror) | Class | The app token's authority field names a nonexistent service. |
| [`PermissionDeniedError`](#permissiondeniederror) | Class | The rpc request was denied access. |
| [`ProxyConnectionError`](#proxyconnectionerror) | Class | The proxy on the robot could not be reached. |
| [`ResponseTooLargeError`](#responsetoolargeerror) | Class | The rpc response was larger than allowed max size. |
| [`ServiceUnavailableError`](#serviceunavailableerror) | Class | The proxy could not find the (possibly unregistered) service. |
| [`TooManyRequestsError`](#toomanyrequestserror) | Class | The remote procedure call did not go through the proxy due to rate limiting. |
| [`ServiceFailedDuringExecutionError`](#servicefailedduringexecutionerror) | Class | The service encountered an unexpected failure. |
| [`TimedOutError`](#timedouterror) | Class | The remote procedure call did not terminate within the allotted time. |
| [`UnableToConnectToRobotError`](#unabletoconnecttoroboterror) | Class | The robot may be offline or otherwise unreachable. |
| [`RetryableUnavailableError`](#retryableunavailableerror) | Class | Service unavailable or channel reset. |
| [`ConnectionResetError`](#connectionreseterror) | Class | The connection was reset by the remote host. |
| [`UnauthenticatedError`](#unauthenticatederror) | Class | The user needs to authenticate or does not have permission to access requested service. |
| [`UnknownDnsNameError`](#unknowndnsnameerror) | Class | The system is unable to translate the domain name. |
| [`NotFoundError`](#notfounderror) | Class | The backend system could not be found. |
| [`UnimplementedError`](#unimplementederror) | Class | The API does not recognize the request and is unable to complete the request. |
| [`TransientFailureError`](#transientfailureerror) | Class | The channel is in state TRANSIENT_FAILURE, often caused by a connection failure. |
| [`InternalDeserializationError`](#internaldeserializationerror) | Class | GRPC deserialization failed, indicating corrupted channel state. |
| [`TimeSyncRequired`](#timesyncrequired) | Class | Time synchronization is required but none seems to be established. |
| [`CustomParamError`](#customparamerror) | Class | A custom parameter that was provided did not match the specification |

## BosdynError

```ts
class BosdynError extends Error
```

Base exception that all public api exceptions are derived from (Python's bosdyn.client.exceptions.Error).

### new BosdynError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## ValueError

```ts
class ValueError extends Error
```

### new ValueError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## ResponseError

```ts
class ResponseError extends BosdynError
```

Error triggered by a server response whose rpc succeeded.

### new ResponseError

```ts
constructor(response?: import("google-protobuf").Message | null, errorMessage?: string | null)
```

| Parameter | Type | Description |
|---|---|---|
| `response` | `import("google-protobuf").Message \| null` | The response of the RPC. (*Optional*, default `null`) |
| `errorMessage` | `string \| null` | The message of the error (the error message of the header of the response if null). (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `response` | `import("google-protobuf").Message \| null` |  |

## InvalidRequestError

```ts
class InvalidRequestError extends ResponseError
```

The provided request arguments are ill-formed or invalid, independent of the system state.

## LeaseUseError

```ts
class LeaseUseError extends ResponseError
```

Request was rejected due to using an invalid lease.

### new LeaseUseError

```ts
constructor(response: any, leaseUseResult: any)
```

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` |  |
| `leaseUseResult` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `leaseUseResult` | `any` |  |

## LicenseError

```ts
class LicenseError extends ResponseError
```

Request was rejected due to using an invalid license.

## ServerError

```ts
class ServerError extends ResponseError
```

Service encountered an unrecoverable error.

## InternalServerError

```ts
class InternalServerError extends ServerError
```

Service experienced an unexpected error state.

## UnsetStatusError

```ts
class UnsetStatusError extends ServerError
```

Response's status field (in either message or common header) was UNKNOWN value.

## RpcError

```ts
class RpcError extends BosdynError
```

An error occurred trying to reach a service on the robot.

### new RpcError

```ts
constructor(originalError: any, errorMessage?: string | null)
```

| Parameter | Type | Description |
|---|---|---|
| `originalError` | `any` | The error of the RPC (usually a gRPC error). |
| `errorMessage` | `string \| null` | The message of the error (the text of the original error if null). (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `error` | `any` |  |

## RetryableRpcError

```ts
class RetryableRpcError extends RpcError
```

An RpcError that denotes the same request may succeed if retried.

## PersistentRpcError

```ts
class PersistentRpcError extends RpcError
```

An RpcError that will almost certainly continue to keep failing if retried

## ClientCancelledOperationError

```ts
class ClientCancelledOperationError extends PersistentRpcError
```

The user cancelled the rpc request.

## InvalidClientCertificateError

```ts
class InvalidClientCertificateError extends PersistentRpcError
```

The provided client certificate is invalid.

## NonexistentAuthorityError

```ts
class NonexistentAuthorityError extends PersistentRpcError
```

The app token's authority field names a nonexistent service.

## PermissionDeniedError

```ts
class PermissionDeniedError extends PersistentRpcError
```

The rpc request was denied access.

## ProxyConnectionError

```ts
class ProxyConnectionError extends RetryableRpcError
```

The proxy on the robot could not be reached.

## ResponseTooLargeError

```ts
class ResponseTooLargeError extends RetryableRpcError
```

The rpc response was larger than allowed max size.

## ServiceUnavailableError

```ts
class ServiceUnavailableError extends RetryableRpcError
```

The proxy could not find the (possibly unregistered) service.

## TooManyRequestsError

```ts
class TooManyRequestsError extends RetryableRpcError
```

The remote procedure call did not go through the proxy due to rate limiting.

## ServiceFailedDuringExecutionError

```ts
class ServiceFailedDuringExecutionError extends RetryableRpcError
```

The service encountered an unexpected failure.

## TimedOutError

```ts
class TimedOutError extends RetryableRpcError
```

The remote procedure call did not terminate within the allotted time.

## UnableToConnectToRobotError

```ts
class UnableToConnectToRobotError extends RetryableRpcError
```

The robot may be offline or otherwise unreachable.

## RetryableUnavailableError

```ts
class RetryableUnavailableError extends UnableToConnectToRobotError
```

Service unavailable or channel reset. Likely transient and can be resolved by retrying.

## ConnectionResetError

```ts
class ConnectionResetError extends RetryableUnavailableError
```

The connection was reset by the remote host. Likely transient and can be resolved by retrying.

## UnauthenticatedError

```ts
class UnauthenticatedError extends PersistentRpcError
```

The user needs to authenticate or does not have permission to access requested service.

## UnknownDnsNameError

```ts
class UnknownDnsNameError extends PersistentRpcError
```

The system is unable to translate the domain name.

## NotFoundError

```ts
class NotFoundError extends PersistentRpcError
```

The backend system could not be found.

## UnimplementedError

```ts
class UnimplementedError extends PersistentRpcError
```

The API does not recognize the request and is unable to complete the request.

## TransientFailureError

```ts
class TransientFailureError extends RetryableRpcError
```

The channel is in state TRANSIENT_FAILURE, often caused by a connection failure.

## InternalDeserializationError

```ts
class InternalDeserializationError extends RetryableUnavailableError
```

GRPC deserialization failed, indicating corrupted channel state. The channel has been reset automatically;
retrying the RPC should succeed.

## TimeSyncRequired

```ts
class TimeSyncRequired extends BosdynError
```

Time synchronization is required but none seems to be established.

## CustomParamError

```ts
class CustomParamError extends ResponseError
```

A custom parameter that was provided did not match the specification

### new CustomParamError

```ts
constructor(response: any, customParamError: any)
```

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` |  |
| `customParamError` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `customParamError` | `any` |  |
