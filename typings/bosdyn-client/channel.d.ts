/**
 * Set default max message length for sending and receiving to 100MB. This value is used when
 * creating channels in the Robot class.
 * @constant
 * @type {number}
 * @readonly
 */
export const DEFAULT_MAX_MESSAGE_LENGTH: number;
/**
 * Period in milliseconds after which a keepalive ping is sent on the transport.
 * @constant
 * @type {number}
 * @readonly
 */
export const DEFAULT_KEEP_ALIVE_TIME_MS: number;
/**
 * Useful for clients to ensure there is enough room left in a message for other fields like headers
 * @constant
 * @type {number}
 * @readonly
 */
export const DEFAULT_HEADER_BUFFER_LENGTH: number;
/**
 * Plugin to refresh access token.
 * @param {Function} tokenCb Callable that returns an Object<appToken, userToken>
 * @returns {Function}
 */
export function refreshingAccessTokenAuthMetadataPlugin(tokenCb: Function): Function;
/**
 * Returns credentials for establishing a secure channel. Uses previously set values on the linked Sdk and this.
 * @param {Buffer} cert The certificate to create channel credentials.
 * @param {Function} tokenCb Callable that returns an Object<appToken, userToken>
 * @returns {grpc.ChannelCredentials}
 */
export function createSecureChannelCreds(cert: Buffer, tokenCb: Function): grpc.ChannelCredentials;
/**
 * Create a secure channel to given host:port.
 * @param {string} address Connection host address.
 * @param {string|number} port Connection port.
 * @param {grpc.ChannelCredentials} creds A ChannelCredentials instance.
 * @param {Object} authority Authority option for the channel.
 * @param {Object} [options={}] A list of additional parameters for the GRPC channel.
 * @returns {grpc.Channel} A secure channel.
 */
export function createSecureChannel(address: string, port: string | number, creds: grpc.ChannelCredentials, authority: Object, options?: Object): grpc.Channel;
/**
 * Create an insecure channel to given host and port.
 * This method is only used for testing purposes. Applications must use secure channels to
 * communicate with services running on Spot.
 * @param {string} address Connection host address.
 * @param {string|number} port Connection port.
 * @param {string} authority Authority option for the channel.
 * @param {Object} [options={}] A list of additional parameters for the GRPC channel.
 * @returns {grpc.Channel} An insecure channel.
 */
export function createInsecureChannel(address: string, port: string | number, authority?: string, options?: Object): grpc.Channel;
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
export function generateChannelOptions(maxSendMessageLength?: number | null, maxReceiveMessageLength?: number | null, keepAlivePingTimeMs?: number | null): Object;
/**
 * Translated a GRPC error into an SDK RpcError.
 * @param {Error} rpcError RPC error to translate.
 * @returns {Error} Specific sub-type of RpcError.
 */
export function translateException(rpcError: Error): Error;
import grpc = require("@grpc/grpc-js");
