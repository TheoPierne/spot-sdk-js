'use strict';

const grpc = require('@grpc/grpc-js');

const {
	RpcError, ClientCancelledOperationError, InvalidAppTokenError, 
	InvalidClientCertificateError, NonexistentAuthorityError, NotFoundError,
	PermissionDeniedError, ProxyConnectionError, ResponseTooLargeError,
	ServiceFailedDuringExecutionError, ServiceUnavailableError, TimedOutError,
	UnableToConnectToRobotError, UnauthenticatedError, UnknownDnsNameError,
	UnimplementedError, TransientFailureError
} = require('./exceptions.js');

/** 
* Set default max message length for sending and receiving to 100MB. This value is used when
* creating channels in the Robot class.
* @constant
* @type {number}
* @default
*/
const DEFAULT_MAX_MESSAGE_LENGTH = 100 * (1024 ** 2);

/**
* Plugin to refresh access token.
* @param {function} token_cb Callable that returns an Object<app_token, user_token>
* @param {boolean} add_app_token Whether to include an app token in the metadata. This is necessary for compatibility with old robot software.
* @return {function} 
*/
function RefreshingAccessTokenAuthMetadataPlugin(token_cb, add_app_token){
	var _token_cb = token_cb;
	var _add_app_token = add_app_token;

	return function(context, callback){
		var {app_token, user_token} = _token_cb();
		var metadata = new grpc.Metadata();
		if(_add_app_token){
			metadata.set('authorization', `Bearer ${user_token}`);
			metadata.set('x-bosdyn-apptoken', app_token);
		}else{
			metadata.set('authorization', `Bearer ${user_token}`);
		}
		return callback(null, metadata);
	};
}

/**
* Returns credentials for establishing a secure channel. Uses previously set values on the linked Sdk and this.
* @param {string|Buffer} cert The certificate to create channel credentials.
* @param {function} token_cb Callable that returns an Object<app_token, user_token>
* @param {boolean} add_app_token Whether to include an app token in the metadata. This is necessary for compatibility with old robot software.
* @return {object} 
*/
function create_secure_channel_creds(cert, token_cb, add_app_token){
	cert = Buffer.concat([Buffer.from(cert), Buffer.from('\0')]);
	const transport_creds = grpc.credentials.createSsl(cert);
	const plugin = RefreshingAccessTokenAuthMetadataPlugin(token_cb, add_app_token);
	const auth_creds = grpc.credentials.createFromMetadataGenerator(plugin);
	return grpc.credentials.combineChannelCredentials(transport_creds, auth_creds);
}

/**
* Create a secure channel to given host:port.
* @param {string} address Connection host address.
* @param {string|number} port Connection port.
* @param {object} creds A ChannelCredentials instance.
* @param {object} authority Authority option for the channel.
* @param {object} [options={}] A list of additional parameters for the GRPC channel.
* @return {grpc.Channel} A secure channel.
*/
function create_secure_channel(address, port, creds, authority, options = {}){
	const socket = `${address}:${port}`;
	let complete_options = {'grpc.ssl_target_name_override': authority};
	complete_options = Object.assign({}, complete_options, options);
	return new grpc.Channel(socket, creds, complete_options);
}

/**
* Create an insecure channel to given host and port.

* This method is only used for testing purposes. Applications must use secure channels to
* communicate with services running on Spot.
* @param {string} address Connection host address.
* @param {string|number} port Connection port.
* @param {object} authority Authority option for the channel.
* @param {object} [options={}] A list of additional parameters for the GRPC channel.
* @return {grpc.Channel} A secure channel.
*/
function create_insecure_channel(address, port, authority = null, options = {}){
	const socket = `${address}:${port}`;
	let complete_options = {};
	const creds = grpc.credentials.createInsecure();
	if(authority) complete_options = {'grpc.ssl_target_name_override': authority};
	if(Object.keys(options).length) complete_options = Object.assign({}, complete_options, options);
	return new grpc.Channel(socket, creds, complete_options);
}

/**
* Generate the array of options to specify in the creation of a client channel or server.

* The list contains the values for max allowed message length for both sending and
* receiving. If no values are provided, the default values of 100 MB are used.
* @param {?number} [max_send_message_length=104857600] Max message length allowed for message to send.
* @param {?number} [max_receive_message_length=104857600] Max message length allowed for message to receive.
* @return {object} Object with values for channel options.
*/
function generate_channel_options(max_send_message_length = null, max_receive_message_length = null){
	return {
		'grpc.max_send_message_length':  max_send_message_length || DEFAULT_MAX_MESSAGE_LENGTH, 
		'grpc.max_receive_message_length': max_receive_message_length || DEFAULT_MAX_MESSAGE_LENGTH
	};
}

/**
* Translated a GRPC error into an SDK RpcError.
* @param {object|Error} rpc_error RPC error to translate.
* @return Specific sub-type of RpcError.
*/
function translate_exception(rpc_error){
	const code = rpc_error.code;
	const msg = rpc_error.details;

	if(code == grpc.status.CANCELLED){
		if(msg.includes('401')){
			return new UnauthenticatedError(msg);
		}else if(msg.includes('403')){
			return new InvalidAppTokenError(msg);
		}else if(msg.includes('404')){
			return new NotFoundError(msg);
		}else if(msg.includes('502')){
			return new ServiceUnavailableError(msg);
		}else if(msg.includes('504')){
			return new TimedOutError(msg);
		}

		return new ClientCancelledOperationError(msg);
	}else if(code == grpc.status.DEADLINE_EXCEEDED){
		return new TimedOutError(msg);
	}else if(code == grpc.status.UNIMPLEMENTED){
		return new UnimplementedError(msg);
	}else if(code == grpc.status.PERMISSION_DENIED){
		return new PermissionDeniedError(msg);
	}else if(code == grpc.status.RESOURCE_EXHAUSTED){
		if(msg.includes('Received message larger than max')) return new ResponseTooLargeError(msg);
	}else if(code == grpc.status.UNAUTHENTICATED){
		return new UnauthenticatedError(msg);
	}

	if(msg.includes('is not in peer certificate')){
		return new NonexistentAuthorityError(msg);
	}else if(msg.includes('Failed to connect to remote host') || msg.includes('Failed to create subchannel')){
		return new ProxyConnectionError(msg);
	}else if(msg.includes('Exception calling application')){
		return new ServiceFailedDuringExecutionError(msg);
	}else if(msg.includes('Handshake failed')){
		return new InvalidClientCertificateError(msg);
	}else if(msg.includes('Name resolution failure')){
		return new UnknownDnsNameError(msg);
	}else if(msg.includes('channel is in state TRANSIENT_FAILURE')){
		return new TransientFailureError(msg);
	}else if(msg.includes('Connect Failed')){
		return new UnableToConnectToRobotError(msg);
	}

	if(code == grpc.status.UNAVAILABLE){
		return new UnableToConnectToRobotError(msg);
	}

	console.warn(`Unclassified exception: ${msg}`);

	return new RpcError(msg);
}

module.exports = {
	DEFAULT_MAX_MESSAGE_LENGTH,
	RefreshingAccessTokenAuthMetadataPlugin,
	create_secure_channel_creds,
	create_secure_channel,
	create_insecure_channel,
	generate_channel_options,
	translate_exception
};