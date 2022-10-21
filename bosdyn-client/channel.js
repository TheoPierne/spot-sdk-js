'use strict';

const process = require('node:process');
const { Buffer } = require('node:buffer');

const grpc = require('@grpc/grpc-js');

const {
  ClientCancelledOperationError,
  InvalidAppTokenError,
  InvalidClientCertificateError,
  NonexistentAuthorityError,
  NotFoundError,
  PermissionDeniedError,
  ProxyConnectionError,
  ResponseTooLargeError,
  RetryableUnavailableError,
  RpcError,
  ServiceFailedDuringExecutionError,
  ServiceUnavailableError,
  TimedOutError,
  TooManyRequestsError,
  TransientFailureError,
  UnableToConnectToRobotError,
  UnauthenticatedError,
  UnimplementedError,
  UnknownDnsNameError,
} = require('./exceptions');

/**
 * Set default max message length for sending and receiving to 100MB. This value is used when
 * creating channels in the Robot class.
 * @constant
 * @type {number}
 * @default
 */
const DEFAULT_MAX_MESSAGE_LENGTH = 100 * 1024 ** 2;

/**
 * Plugin to refresh access token.
 * @param {Function} token_cb Callable that returns an Object<app_token, user_token>
 * @param {boolean} [add_app_token] Deprecated.
 * @returns {Function}
 */
function RefreshingAccessTokenAuthMetadataPlugin(token_cb, add_app_token = null) {
  const _token_cb = token_cb;
  if (add_app_token !== null) {
    process.emitWarning('add_app_token is deprecated for RefreshingAccessTokenAuthMetadataPlugin.', 'Do not set it');
  }

  return function (context, callback) {
    const { user_token } = _token_cb();
    const metadata = new grpc.Metadata();
    metadata.set('authorization', `Bearer ${user_token}`);
    callback(null, metadata);
  };
}

/**
 * Returns credentials for establishing a secure channel. Uses previously set values on the linked Sdk and this.
 * @param {Buffer} cert The certificate to create channel credentials.
 * @param {Function} token_cb Callable that returns an Object<app_token, user_token>
 * @param {boolean} add_app_token Deprecated.
 * @returns {Object}
 */
function create_secure_channel_creds(cert, token_cb, add_app_token = null) {
  if (add_app_token !== null) {
    process.emitWarning('add_app_token is deprecated for create_secure_channel_creds.', 'Do not set it');
  }

  let transport_creds;
  if(process.env.NODE_ENV !== 'production') {
    const { readFileSync } = require('node:fs');
    const path = require('node:path');

    transport_creds = grpc.credentials.createSsl(cert, 
    readFileSync(path.join(__dirname, 'resources', 'client.key')),
    readFileSync(path.join(__dirname, 'resources', 'client.crt'))
    );
  } else {
    transport_creds = grpc.credentials.createSsl(cert);
  }

  const plugin = RefreshingAccessTokenAuthMetadataPlugin(token_cb, add_app_token);
  const auth_creds = grpc.credentials.createFromMetadataGenerator(plugin);
  return grpc.credentials.combineChannelCredentials(transport_creds, auth_creds);
}

/**
 * Create a secure channel to given host:port.
 * @param {string} address Connection host address.
 * @param {string|number} port Connection port.
 * @param {Object} creds A ChannelCredentials instance.
 * @param {Object} authority Authority option for the channel.
 * @param {Object} [options={}] A list of additional parameters for the GRPC channel.
 * @returns {grpc.Channel} A secure channel.
 */
function create_secure_channel(address, port, creds, authority, options = {}) {
  const socket = `${address}:${port}`;
  let complete_options = { 'grpc.ssl_target_name_override': authority, 'grpc.default_authority': authority };
  complete_options = Object.assign({}, complete_options, options);
  return new grpc.Channel(socket, creds, complete_options);
}

/**
* Create an insecure channel to given host and port.

* This method is only used for testing purposes. Applications must use secure channels to
* communicate with services running on Spot.
* @param {string} address Connection host address.
* @param {string|number} port Connection port.
* @param {Object} authority Authority option for the channel.
* @param {Object} [options={}] A list of additional parameters for the GRPC channel.
* @returns {grpc.Channel} A secure channel.
*/
function create_insecure_channel(address, port, authority = null, options = {}) {
  const socket = `${address}:${port}`;
  let complete_options = {};
  const creds = grpc.credentials.createInsecure();
  if (authority) complete_options = { 'grpc.ssl_target_name_override': authority, 'grpc.default_authority': authority };
  if (Object.keys(options).length) complete_options = Object.assign({}, complete_options, options);
  return new grpc.Channel(socket, creds, complete_options);
}

/**
* Generate the array of options to specify in the creation of a client channel or server.

* The list contains the values for max allowed message length for both sending and
* receiving. If no values are provided, the default values of 100 MB are used.
* @param {?number} [max_send_message_length=104_857_600] Max message length allowed for message to send.
* @param {?number} [max_receive_message_length=104_857_600] Max message length allowed for message to receive.
* @returns {Object} Object with values for channel options.
*/
function generate_channel_options(max_send_message_length = null, max_receive_message_length = null) {
  return {
    'grpc.max_send_message_length': max_send_message_length || DEFAULT_MAX_MESSAGE_LENGTH,
    'grpc.max_receive_message_length': max_receive_message_length || DEFAULT_MAX_MESSAGE_LENGTH,
  };
}

/**
 * Translated a GRPC error into an SDK RpcError.
 * @param {Object|Error} rpc_error RPC error to translate.
 * @returns {Error} Specific sub-type of RpcError.
 */
function translate_exception(rpc_error) {
  const code = rpc_error.code;
  const msg = rpc_error.details;

  if (code === grpc.status.CANCELLED) {
    if (msg.includes('401')) {
      return new UnauthenticatedError(msg);
    } else if (msg.includes('403')) {
      return new InvalidAppTokenError(msg);
    } else if (msg.includes('404')) {
      return new NotFoundError(msg);
    } else if (msg.includes('502')) {
      return new ServiceUnavailableError(msg);
    } else if (msg.includes('504')) {
      return new TimedOutError(msg);
    }

    return new ClientCancelledOperationError(msg);
  } else if (code === grpc.status.DEADLINE_EXCEEDED) {
    return new TimedOutError(msg);
  } else if (code === grpc.status.UNIMPLEMENTED) {
    return new UnimplementedError(msg);
  } else if (code === grpc.status.PERMISSION_DENIED) {
    return new PermissionDeniedError(msg);
  } else if (code === grpc.status.RESOURCE_EXHAUSTED) {
    if (msg.includes('Received message larger than max')) return new ResponseTooLargeError(msg);
  } else if (code === grpc.status.UNAUTHENTICATED) {
    return new UnauthenticatedError(msg);
  }

  if (msg.includes('is not in peer certificate')) {
    return new NonexistentAuthorityError(msg);
  } else if (msg.includes('Failed to connect to remote host') || msg.includes('Failed to create subchannel')) {
    return new ProxyConnectionError(msg);
  } else if (msg.includes('Exception calling application')) {
    return new ServiceFailedDuringExecutionError(msg);
  } else if (msg.includes('Handshake failed')) {
    return new InvalidClientCertificateError(msg);
  } else if (msg.includes('Name resolution failure')) {
    return new UnknownDnsNameError(msg);
  } else if (msg.includes('channel is in state TRANSIENT_FAILURE')) {
    return new TransientFailureError(msg);
  } else if (msg.includes('Connect Failed')) {
    return new UnableToConnectToRobotError(msg);
  }

  if (code === grpc.status.UNAVAILABLE) {
    if (msg.includes('Socket closed') || msg.includes('Connection reset by peer')) {
      return new RetryableUnavailableError(msg);
    }
    if (msg.includes(502)) {
      return new ServiceUnavailableError(msg);
    }
    if (msg.includes(429)) {
      return new TooManyRequestsError(msg);
    }
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
  translate_exception,
};
