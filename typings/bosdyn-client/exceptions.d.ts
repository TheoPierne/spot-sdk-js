/**
 * Base exception that all public api exceptions are derived from (Python's bosdyn.client.exceptions.Error).
 */
export class BosdynError extends Error {
    constructor(msg: any);
}
export class ValueError extends Error {
    constructor(msg: any);
}
/**
 * Error triggered by a server response whose rpc succeeded.
 */
export class ResponseError extends BosdynError {
    /**
     * @param {?import('google-protobuf').Message} [response=null] The response of the RPC.
     * @param {?string} [errorMessage=null] The message of the error (the error message of the header of the response if
     * null).
     */
    constructor(response?: import("google-protobuf").Message | null, errorMessage?: string | null);
    response: import("google-protobuf").Message | null;
}
/** The provided request arguments are ill-formed or invalid, independent of the system state. */
export class InvalidRequestError extends ResponseError {
}
/**
 * Request was rejected due to using an invalid lease.
 */
export class LeaseUseError extends ResponseError {
    constructor(response: any, leaseUseResult: any);
    leaseUseResult: any;
}
/** Request was rejected due to using an invalid license. */
export class LicenseError extends ResponseError {
}
/** Service encountered an unrecoverable error. */
export class ServerError extends ResponseError {
}
/** Service experienced an unexpected error state. */
export class InternalServerError extends ServerError {
}
/** Response's status field (in either message or common header) was UNKNOWN value. */
export class UnsetStatusError extends ServerError {
}
/**
 * An error occurred trying to reach a service on the robot.
 */
export class RpcError extends BosdynError {
    /**
     * @param {*} originalError The error of the RPC (usually a gRPC error).
     * @param {?string} [errorMessage=null] The message of the error (the text of the original error if null).
     */
    constructor(originalError: any, errorMessage?: string | null);
    error: any;
}
/** An RpcError that denotes the same request may succeed if retried. */
export class RetryableRpcError extends RpcError {
}
/** An RpcError that will almost certainly continue to keep failing if retried */
export class PersistentRpcError extends RpcError {
}
/** The user cancelled the rpc request. */
export class ClientCancelledOperationError extends PersistentRpcError {
}
/** The provided client certificate is invalid. */
export class InvalidClientCertificateError extends PersistentRpcError {
}
/** The app token's authority field names a nonexistent service. */
export class NonexistentAuthorityError extends PersistentRpcError {
}
/** The rpc request was denied access. */
export class PermissionDeniedError extends PersistentRpcError {
}
/** The proxy on the robot could not be reached. */
export class ProxyConnectionError extends RetryableRpcError {
}
/** The rpc response was larger than allowed max size. */
export class ResponseTooLargeError extends RetryableRpcError {
}
/** The proxy could not find the (possibly unregistered) service. */
export class ServiceUnavailableError extends RetryableRpcError {
}
/** The remote procedure call did not go through the proxy due to rate limiting. */
export class TooManyRequestsError extends RetryableRpcError {
}
/** The service encountered an unexpected failure. */
export class ServiceFailedDuringExecutionError extends RetryableRpcError {
}
/** The remote procedure call did not terminate within the allotted time. */
export class TimedOutError extends RetryableRpcError {
}
/** The robot may be offline or otherwise unreachable. */
export class UnableToConnectToRobotError extends RetryableRpcError {
}
/** Service unavailable or channel reset. Likely transient and can be resolved by retrying. */
export class RetryableUnavailableError extends UnableToConnectToRobotError {
}
/** The connection was reset by the remote host. Likely transient and can be resolved by retrying. */
export class ConnectionResetError extends RetryableUnavailableError {
}
/** The user needs to authenticate or does not have permission to access requested service. */
export class UnauthenticatedError extends PersistentRpcError {
}
/** The system is unable to translate the domain name. */
export class UnknownDnsNameError extends PersistentRpcError {
}
/** The backend system could not be found. */
export class NotFoundError extends PersistentRpcError {
}
/** The API does not recognize the request and is unable to complete the request. */
export class UnimplementedError extends PersistentRpcError {
}
/** The channel is in state TRANSIENT_FAILURE, often caused by a connection failure. */
export class TransientFailureError extends RetryableRpcError {
}
/**
 * GRPC deserialization failed, indicating corrupted channel state. The channel has been reset automatically;
 * retrying the RPC should succeed.
 */
export class InternalDeserializationError extends RetryableUnavailableError {
}
/** Time synchronization is required but none seems to be established. */
export class TimeSyncRequired extends BosdynError {
}
/**
 * A custom parameter that was provided did not match the specification
 */
export class CustomParamError extends ResponseError {
    constructor(response: any, customParamError: any);
    customParamError: any;
}
