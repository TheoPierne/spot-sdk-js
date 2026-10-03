/**
 * @file The errors of the SDK: BosdynError, the errors of the responses (ResponseError) and the errors of the RPCs
 * (RpcError).
 */

'use strict';

class ValueError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, ValueError);
  }
}

/**
 * Base exception that all public api exceptions are derived from (Python's bosdyn.client.exceptions.Error).
 */
class BosdynError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

/**
 * Fully qualified type name of a protobuf message, e.g. 'bosdyn.api.RobotCommandResponse'.
 * @param {*} message A protobuf message.
 * @returns {string}
 */
function _messageTypeName(message) {
  try {
    // Lazy require: util.js is not needed to load the exceptions.
    const { protoTypeName } = require('./util');
    return protoTypeName(message) ?? (message?.constructor?.name || 'Error');
  } catch (e) {
    return 'Error';
  }
}

/**
 * Error triggered by a server response whose rpc succeeded.
 */
class ResponseError extends BosdynError {
  /**
   * @param {?import('google-protobuf').Message} [response=null] The response of the RPC.
   * @param {?string} [errorMessage=null] The message of the error (the error message of the header of the response if
   * null).
   */
  constructor(response = null, errorMessage = null) {
    if (errorMessage !== null) {
      super(errorMessage);
    } else {
      // Like Python, an unset header or error reads as an empty message.
      super(response?.getHeader?.()?.getError()?.getMessage() ?? '');
    }
    this.response = response;
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, ResponseError);
  }

  toString() {
    const fullClassname =
      this.response !== null && this.response !== undefined ? _messageTypeName(this.response) : 'Error';
    return `${fullClassname} (${this.constructor.name}): ${this.message}`;
  }
}

/** The provided request arguments are ill-formed or invalid, independent of the system state. */
class InvalidRequestError extends ResponseError {}

/**
 * Request was rejected due to using an invalid lease.
 */
class LeaseUseError extends ResponseError {
  constructor(response, leaseUseResult) {
    super(response);
    this.leaseUseResult = leaseUseResult;
  }
}

/** Request was rejected due to using an invalid license. */
class LicenseError extends ResponseError {}
/** Service encountered an unrecoverable error. */
class ServerError extends ResponseError {}
/** Service experienced an unexpected error state. */
class InternalServerError extends ServerError {}
/** Response's status field (in either message or common header) was UNKNOWN value. */
class UnsetStatusError extends ServerError {}

/**
 * An error occurred trying to reach a service on the robot.
 */
class RpcError extends BosdynError {
  /**
   * @param {*} originalError The error of the RPC (usually a gRPC error).
   * @param {?string} [errorMessage=null] The message of the error (the text of the original error if null).
   */
  constructor(originalError, errorMessage = null) {
    super();
    this.name = this.constructor.name;
    this.error = originalError;
    this.message = errorMessage || String(originalError);
    Error.captureStackTrace?.(this, RpcError);
  }

  toString() {
    return `${this.constructor.name}: ${this.message}`;
  }
}

/** An RpcError that denotes the same request may succeed if retried. */
class RetryableRpcError extends RpcError {}
/** An RpcError that will almost certainly continue to keep failing if retried */
class PersistentRpcError extends RpcError {}
/** The user cancelled the rpc request. */
class ClientCancelledOperationError extends PersistentRpcError {}
/** The provided client certificate is invalid. */
class InvalidClientCertificateError extends PersistentRpcError {}
/** The app token's authority field names a nonexistent service. */
class NonexistentAuthorityError extends PersistentRpcError {}
/** The rpc request was denied access. */
class PermissionDeniedError extends PersistentRpcError {}
/** The proxy on the robot could not be reached. */
class ProxyConnectionError extends RetryableRpcError {}
/** The rpc response was larger than allowed max size. */
class ResponseTooLargeError extends RetryableRpcError {}
/** The proxy could not find the (possibly unregistered) service. */
class ServiceUnavailableError extends RetryableRpcError {}
/** The remote procedure call did not go through the proxy due to rate limiting. */
class TooManyRequestsError extends RetryableRpcError {}
/** The service encountered an unexpected failure. */
class ServiceFailedDuringExecutionError extends RetryableRpcError {}
/** The remote procedure call did not terminate within the allotted time. */
class TimedOutError extends RetryableRpcError {}
/** The robot may be offline or otherwise unreachable. */
class UnableToConnectToRobotError extends RetryableRpcError {}
/** Service unavailable or channel reset. Likely transient and can be resolved by retrying. */
class RetryableUnavailableError extends UnableToConnectToRobotError {}
/** The connection was reset by the remote host. Likely transient and can be resolved by retrying. */
class ConnectionResetError extends RetryableUnavailableError {}
/** The user needs to authenticate or does not have permission to access requested service. */
class UnauthenticatedError extends PersistentRpcError {}
/** The system is unable to translate the domain name. */
class UnknownDnsNameError extends PersistentRpcError {}
/** The backend system could not be found. */
class NotFoundError extends PersistentRpcError {}
/** The API does not recognize the request and is unable to complete the request. */
class UnimplementedError extends PersistentRpcError {}
/** The channel is in state TRANSIENT_FAILURE, often caused by a connection failure. */
// Same hierarchy as Python: retrying can help for a transient failure; TimeSyncRequired is not an RPC error.
class TransientFailureError extends RetryableRpcError {}
/**
 * GRPC deserialization failed, indicating corrupted channel state. The channel has been reset automatically;
 * retrying the RPC should succeed.
 */
class InternalDeserializationError extends RetryableUnavailableError {}
/** Time synchronization is required but none seems to be established. */
class TimeSyncRequired extends BosdynError {}

/**
 * A custom parameter that was provided did not match the specification
 */
class CustomParamError extends ResponseError {
  constructor(response, customParamError) {
    super(response);
    this.name = this.constructor.name;
    this.customParamError = customParamError;
  }

  toString() {
    const fullClassname = this.response ? _messageTypeName(this.response) : 'Error';
    const errorMessages = this.customParamError?.getErrorMessagesList?.() ?? [];
    return `${fullClassname} (${this.constructor.name}): Parameter Errors\n\n${errorMessages.join('\n')}`;
  }
}

module.exports = {
  BosdynError,
  ValueError,
  ResponseError,
  InvalidRequestError,
  LeaseUseError,
  LicenseError,
  ServerError,
  InternalServerError,
  UnsetStatusError,
  RpcError,
  RetryableRpcError,
  PersistentRpcError,
  ClientCancelledOperationError,
  InvalidClientCertificateError,
  NonexistentAuthorityError,
  PermissionDeniedError,
  ProxyConnectionError,
  ResponseTooLargeError,
  ServiceUnavailableError,
  TooManyRequestsError,
  ServiceFailedDuringExecutionError,
  TimedOutError,
  UnableToConnectToRobotError,
  RetryableUnavailableError,
  ConnectionResetError,
  UnauthenticatedError,
  UnknownDnsNameError,
  NotFoundError,
  UnimplementedError,
  TransientFailureError,
  InternalDeserializationError,
  TimeSyncRequired,
  CustomParamError,
};
