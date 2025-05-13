'use strict';

const process = require('node:process');

const grpc = require('@grpc/grpc-js');

const {
  ClientCancelledOperationError,
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
 * @readonly
 */
const DEFAULT_MAX_MESSAGE_LENGTH = 100 * 1024 ** 2;

/**
 * Useful for clients to ensure there is enough room left in a message for other fields like headers
 * @constant
 * @type {number}
 * @readonly
 */
const DEFAULT_HEADER_BUFFER_LENGTH = 4 * 1024 ** 2;

/**
 * Period in milliseconds after which a keepalive ping is sent on the transport.
 * @constant
 * @type {number}
 * @readonly
 */
const DEFAULT_KEEP_ALIVE_TIME_MS = 5_000;

/**
 * Plugin to refresh access token.
 * @param {Function} tokenCb Callable that returns an Object<appToken, userToken>
 * @returns {Function}
 */
function refreshingAccessTokenAuthMetadataPlugin(tokenCb) {
  const _tokenCb = tokenCb;

  return function metadata(context, callback) {
    const userToken = _tokenCb();
    const grpcMetadata = new grpc.Metadata();
    grpcMetadata.set('authorization', `Bearer ${userToken}`);
    callback(null, grpcMetadata);
  };
}

/**
 * Returns credentials for establishing a secure channel. Uses previously set values on the linked Sdk and this.
 * @param {Buffer} cert The certificate to create channel credentials.
 * @param {Function} tokenCb Callable that returns an Object<appToken, userToken>
 * @returns {grpc.ChannelCredentials}
 */
function createSecureChannelCreds(cert, tokenCb) {
  let transportCreds;
  if (process.env.NODE_ENV !== 'production') {
    const { readFileSync } = require('node:fs');
    const path = require('node:path');

    transportCreds = grpc.credentials.createSsl(
      cert,
      readFileSync(path.join(__dirname, 'resources', 'client.key')),
      readFileSync(path.join(__dirname, 'resources', 'client.crt')),
    );
  } else {
    transportCreds = grpc.credentials.createSsl(cert);
  }

  const plugin = refreshingAccessTokenAuthMetadataPlugin(tokenCb);
  const authCreds = grpc.credentials.createFromMetadataGenerator(plugin);
  return grpc.credentials.combineChannelCredentials(transportCreds, authCreds);
}

/**
 * Create a secure channel to given host:port.
 * @param {string} address Connection host address.
 * @param {string|number} port Connection port.
 * @param {grpc.ChannelCredentials} creds A ChannelCredentials instance.
 * @param {Object} authority Authority option for the channel.
 * @param {Object} [options={}] A list of additional parameters for the GRPC channel.
 * @returns {grpc.Channel} A secure channel.
 */
function createSecureChannel(address, port, creds, authority, options = {}) {
  const socket = `${address}:${port}`;
  const completeOptions = {
    'grpc.ssl_target_name_override': authority,
    'grpc.secondary_user_agent': ` spot-sdk-js (v${require('../../package.json').version})`,
    ...options,
  };
  return new grpc.Channel(socket, creds, completeOptions);
}

/**
 * Create an insecure channel to given host and port.
 * This method is only used for testing purposes. Applications must use secure channels to
 * communicate with services running on Spot.
 * @param {string} address Connection host address.
 * @param {string|number} port Connection port.
 * @param {Object} authority Authority option for the channel.
 * @param {Object} [options={}] A list of additional parameters for the GRPC channel.
 * @returns {grpc.Channel} An insecure channel.
 */
function createInsecureChannel(address, port, authority = null, options = {}) {
  const socket = `${address}:${port}`;
  let completeOptions = {
    'grpc.secondary_user_agent': ` spot-sdk-js (v${require('../../package.json').version})`,
    ...options,
  };
  const creds = grpc.credentials.createInsecure();
  if (authority) completeOptions = { 'grpc.ssl_target_name_override': authority, ...completeOptions };
  return new grpc.Channel(socket, creds, completeOptions);
}

/**
 * Generate the array of options to specify in the creation of a client channel or server.

 * The list contains the values for max allowed message length for both sending and
 * receiving. If no values are provided, the default values of 100 MB are used.
 * @param {?number} [maxSendMessageLength=104_857_600] Max message length allowed for message to send.
 * @param {?number} [maxReceiveMessageLength=104_857_600] Max message length allowed for message to receive.
 * @param {?number} [keepAlivePingTimeMs] Period in milliseconds after which a keepalive ping is
 * sent on the transport.
 * @returns {Object} Object with values for channel options.
 */
function generateChannelOptions(
  maxSendMessageLength = null,
  maxReceiveMessageLength = null,
  keepAlivePingTimeMs = null,
) {
  return {
    'grpc.max_send_message_length': maxSendMessageLength || DEFAULT_MAX_MESSAGE_LENGTH,
    'grpc.max_receive_message_length': maxReceiveMessageLength || DEFAULT_MAX_MESSAGE_LENGTH,
    'grpc.keepalive_time_ms': keepAlivePingTimeMs || DEFAULT_KEEP_ALIVE_TIME_MS,
    'grpc.secondary_user_agent': ` spot-sdk-js (v${require('../../package.json').version})`,
  };
}

/**
 * Translated a GRPC error into an SDK RpcError.
 * @param {Error} rpcError RPC error to translate.
 * @returns {Error} Specific sub-type of RpcError.
 */
function translateException(rpcError) {
  const code = rpcError.code;
  const msg = rpcError.details || rpcError.message;

  if (code === grpc.status.CANCELLED) {
    if (msg.includes('401')) {
      return new UnauthenticatedError(
        rpcError,
        'The user needs to authenticate or does not have permission to access requested service.',
      );
    } else if (msg.includes('404')) {
      return new NotFoundError(rpcError, 'The backend system could not be found.');
    } else if (msg.includes('429')) {
      return new TooManyRequestsError(
        rpcError,
        'The remote procedure call did not go through the proxy due to rate limiting.',
      );
    } else if (msg.includes('502')) {
      return new ServiceUnavailableError(rpcError, 'The proxy could not find the (possibly unregistered) service.');
    } else if (msg.includes('504')) {
      return new TimedOutError(rpcError, 'The remote procedure call did not terminate within the allotted time.');
    }

    return new ClientCancelledOperationError(rpcError, msg);
  } else if (code === grpc.status.DEADLINE_EXCEEDED) {
    return new TimedOutError(rpcError, 'The remote procedure call did not terminate within the allotted time.');
  } else if (code === grpc.status.UNIMPLEMENTED) {
    return new UnimplementedError(
      rpcError,
      'The API does not recognize the request and is unable to complete the request.',
    );
  } else if (code === grpc.status.PERMISSION_DENIED) {
    return new PermissionDeniedError(rpcError, 'The rpc request was denied access.');
  } else if (code === grpc.status.RESOURCE_EXHAUSTED) {
    if (msg.includes('Received message larger than max')) {
      return new ResponseTooLargeError(rpcError, 'The rpc response was larger than allowed max size.');
    }
  } else if (code === grpc.status.UNAUTHENTICATED) {
    return new UnauthenticatedError(
      rpcError,
      'The user needs to authenticate or does not have permission to access requested service.',
    );
  }

  if (msg.includes('is not in peer certificate')) {
    return new NonexistentAuthorityError(rpcError, "The app token's authority field names a nonexistent service.");
  } else if (msg.includes('Failed to connect to remote host') || msg.includes('Failed to create subchannel')) {
    return new ProxyConnectionError(rpcError, 'The proxy on the robot could not be reached.');
  } else if (msg.includes('Exception calling application')) {
    return new ServiceFailedDuringExecutionError(rpcError, 'The service encountered an unexpected failure.');
  } else if (msg.includes('Handshake failed')) {
    return new InvalidClientCertificateError(rpcError, 'The provided client certificate is invalid.');
  } else if (msg.includes('Name resolution failure')) {
    return new UnknownDnsNameError(rpcError, 'The system is unable to translate the domain name.');
  } else if (msg.includes('channel is in state TRANSIENT_FAILURE')) {
    return new TransientFailureError(
      rpcError,
      'The channel is in state TRANSIENT_FAILURE, often caused by a connection failure.',
    );
  } else if (msg.includes('Connect Failed') || msg.includes('Failed to pick subchannel')) {
    return new UnableToConnectToRobotError(rpcError, 'The robot may be offline or otherwise unreachable.');
  }

  if (code === grpc.status.UNAVAILABLE) {
    if (msg.includes('Socket closed') || msg.includes('Connection reset by peer')) {
      return new RetryableUnavailableError(
        rpcError,
        'Service unavailable or channel reset. Likely transient and can be resolved by retrying.',
      );
    }
    if (msg.includes(502)) {
      return new ServiceUnavailableError(rpcError, 'The proxy could not find the (possibly unregistered) service.');
    }
    if (msg.includes(429)) {
      return new TooManyRequestsError(
        rpcError,
        'The remote procedure call did not go through the proxy due to rate limiting.',
      );
    }
    return new UnableToConnectToRobotError(rpcError, 'The robot may be offline or otherwise unreachable.');
  }

  console.warn(`Unclassified exception: ${rpcError}`);

  return new RpcError(rpcError, 'An error occurred trying to reach a service on the robot.');
}

module.exports = {
  DEFAULT_MAX_MESSAGE_LENGTH,
  DEFAULT_KEEP_ALIVE_TIME_MS,
  DEFAULT_HEADER_BUFFER_LENGTH,
  refreshingAccessTokenAuthMetadataPlugin,
  createSecureChannelCreds,
  createSecureChannel,
  createInsecureChannel,
  generateChannelOptions,
  translateException,
};
