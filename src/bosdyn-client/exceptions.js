'use strict';

class ValueError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, ValueError);
  }
}

class ResponseError extends Error {
  constructor(response = null, errorMessage = null) {
    if (errorMessage !== null) {
      super(errorMessage);
    } else if (response !== null && response.getHeader()) {
      super(response.getHeader().getError().getMessage());
    } else {
      super('');
    }
    this.response = response;
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, ResponseError);
  }

  toString() {
    let fullClassname = '';
    if (this.response !== null) {
      fullClassname = this.response.DESCRIPTOR.full_name;
    } else {
      fullClassname = 'Error';
    }
    return `${fullClassname} (${this.constructor.name}): ${this.message}`;
  }
}

class InvalidRequestError extends ResponseError {}

class LeaseUseError extends ResponseError {
  constructor(response, leaseUseResult) {
    super(response);
    this.leaseUseResult = leaseUseResult;
  }
}

class LicenseError extends ResponseError {}
class ServerError extends ResponseError {}
class InternalServerError extends ServerError {}
class UnsetStatusError extends ServerError {}

class RpcError extends Error {
  constructor(originalError, errorMessage = null) {
    super();
    this.name = this.constructor.name;
    this.error = originalError;
    this.message = errorMessage || originalError.toString();
    Error.captureStackTrace?.(this, RpcError);
  }

  toString() {
    return `${this.constructor.name}: ${this.message}`;
  }
}

class RetryableRpcError extends RpcError {}
class PersistentRpcError extends RpcError {}
class ClientCancelledOperationError extends PersistentRpcError {}
class InvalidClientCertificateError extends PersistentRpcError {}
class NonexistentAuthorityError extends PersistentRpcError {}
class PermissionDeniedError extends PersistentRpcError {}
class ProxyConnectionError extends RetryableRpcError {}
class ResponseTooLargeError extends RetryableRpcError {}
class ServiceUnavailableError extends RetryableRpcError {}
class TooManyRequestsError extends RetryableRpcError {}
class ServiceFailedDuringExecutionError extends RetryableRpcError {}
class TimedOutError extends RetryableRpcError {}
class UnableToConnectToRobotError extends RetryableRpcError {}
class RetryableUnavailableError extends UnableToConnectToRobotError {}
class UnauthenticatedError extends PersistentRpcError {}
class UnknownDnsNameError extends PersistentRpcError {}
class NotFoundError extends PersistentRpcError {}
class UnimplementedError extends PersistentRpcError {}
class TransientFailureError extends RpcError {}
class TimeSyncRequired extends RpcError {}

class CustomParamError extends ResponseError {
  constructor(response, customParamError) {
    super(response);
    this.name = this.constructor.name;
    this.customParamError = customParamError;
  }

  toString() {
    const fullClassname = this.response ? this.response.toObject() : 'Error';
    return `${fullClassname} (${this.constructor.name}): Parameter Errors\n\n${this.customParamError
      .getErrorMessages()
      .join('\n')}`;
  }
}

module.exports = {
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
  UnauthenticatedError,
  UnknownDnsNameError,
  NotFoundError,
  UnimplementedError,
  TransientFailureError,
  TimeSyncRequired,
  CustomParamError,
};
