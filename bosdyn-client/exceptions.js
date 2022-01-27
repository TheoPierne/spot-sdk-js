class ValueError extends Error {
	constructor(msg){
		super(msg);
		this.name = 'ValueError';
	}
};

class ResponseError extends Error {
	constructor(response = null, error_message = null){
		if(error_message != null){
			super(error_message);
		}else if(response != null){
			super(response.getHeader().getError().getMessage());
		}else{
			super();
		}
		this.name = 'ResponseError';
		this.response = response;
	}

	toString(){
		if(this.response != null){
			full_classname = this.response.DESCRIPTOR.full_name
		}else{
			full_classname = "Error"
		}
		return `${full_classname} (${this.constructor.name}): ${this.message}`;
	}
};

class InvalidRequestError extends ResponseError {
	constructor(response, msg){
		super(response, msg);
		this.name = 'InvalidRequestError';
	}
};

class LeaseUseError extends ResponseError {
	constructor(response, msg){
		super(response, msg);
		this.name = 'LeaseUseError';
	}
};

class LicenseError extends ResponseError {
	constructor(response, msg){
		super(response, msg);
		this.name = 'LicenseError';
	}
};

class ServerError extends ResponseError {
	constructor(response, msg){
		super(response, msg);
		this.name = 'ServerError';
	}
};

class InternalServerError extends ServerError {
	constructor(response, msg){
		super(response, msg);
		this.name = 'InternalServerError';
	}
};

class UnsetStatusError extends ServerError {
	constructor(response, msg){
		super(response, msg);
		this.name = 'UnsetStatusError';
	}
};

class RpcError extends Error {
	constructor(msg){
		super();
		this.name = 'RpcError';
		this.message = msg;
	}

	toString(){
		return `${this.constructor.name}: ${this.message}`;
	}
};

class ClientCancelledOperationError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'ClientCancelledOperationError';
	}
};

class InvalidAppTokenError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'InvalidAppTokenError';
	}
};

class InvalidClientCertificateError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'InvalidClientCertificateError';
	}
};

class NonexistentAuthorityError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'NonexistentAuthorityError';
	}
};

class PermissionDeniedError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'PermissionDeniedError';
	}
};

class ProxyConnectionError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'ProxyConnectionError';
	}
};

class ResponseTooLargeError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'ResponseTooLargeError';
	}
};

class ServiceUnavailableError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'ServiceUnavailableError';
	}
};

class ServiceFailedDuringExecutionError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'ServiceFailedDuringExecutionError';
	}
};

class TimedOutError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'TimedOutError';
	}
};

class UnableToConnectToRobotError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'UnableToConnectToRobotError';
	}
};

class UnauthenticatedError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'UnauthenticatedError';
	}
};

class UnknownDnsNameError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'UnknownDnsNameError';
	}
};

class NotFoundError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'NotFoundError';
	}
};

class UnimplementedError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'UnimplementedError';
	}
};

class TransientFailureError extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'TransientFailureError';
	}
};

class TimeSyncRequired extends RpcError {
	constructor(msg){
		super(msg);
		this.name = 'TimeSyncRequired';
	}
};

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
	ClientCancelledOperationError,
	InvalidAppTokenError,
	InvalidClientCertificateError,
	NonexistentAuthorityError,
	PermissionDeniedError,
	ProxyConnectionError,
	ResponseTooLargeError,
	ServiceUnavailableError,
	ServiceFailedDuringExecutionError,
	TimedOutError,
	UnableToConnectToRobotError,
	UnauthenticatedError,
	UnknownDnsNameError,
	NotFoundError,
	UnimplementedError,
	TransientFailureError,
	TimeSyncRequired
};