export type JspbMessage = import("google-protobuf").Message;
export type Robot = import("./robot").Robot;
export type LeaseWallet = import("./lease").LeaseWallet;
export type stubCreationFunc = new (address: string, credentials: import("@grpc/grpc-js").ChannelCredentials, options?: import("@grpc/grpc-js").ClientOptions) => import("@grpc/grpc-js").Client;
export type GrpcChannel = import("@grpc/grpc-js").Channel;
export type WinstonLogger = import("winston").Logger;
export const DEFAULT_RPC_TIMEOUT: 30000;
/**
 * The key of the path of the gRPC method in the infos of the logs of the RPCs, e.g.
 * '/bosdyn.api.DataBufferService/RecordTextMessages': the filters of the LoggingHandler of data_buffer recognize
 * them (Python checks the name of the logger, or the module and the function of the records).
 */
export const RPC_METHOD: unique symbol;
/**
 * @typedef {new (
 * address: string,
 * credentials: import('@grpc/grpc-js').ChannelCredentials,
 * options?: import('@grpc/grpc-js').ClientOptions
 * ) => import('@grpc/grpc-js').Client} stubCreationFunc
 */
/**
 * @typedef {import('@grpc/grpc-js').Channel} GrpcChannel
 */
/**
 * @typedef {import('winston').Logger} WinstonLogger
 */
/**
 * Helper base class for all clients to Boston Dynamics services.
 * @template {import('@grpc/grpc-js').Client} Stub
 */
export class BaseClient<Stub extends import("@grpc/grpc-js").Client> {
    /**
     * Delimiter used to split the service type.
     * @type {string}
     * @private
     */
    private static _SPLIT_SERVICE;
    /**
     * Delimiter used to split the method type.
     * @type {string}
     * @private
     */
    private static _SPLIT_METHOD;
    /**
     * @param {stubCreationFunc} stubCreationFunc A constructor function for a class that
     * extends `grpc.Client`, used to create the gRPC stub for this client.
     * @param {string} [name=null] Optional name for this client.
     */
    constructor(stubCreationFunc: stubCreationFunc, name?: string);
    /**
     * The short form of the service type derived from the service type of the client class.
     * @type {string}
     * @private
     */
    private _serviceTypeShort;
    /**
     * The gRPC channel used for communication with the service.
     * @type {?GrpcChannel}
     * @private
     */
    private _channel;
    /**
     * Optional name of the client.
     * @type {?string}
     * @private
     */
    private _name;
    /**
     * The gRPC stub used to communicate with the Boston Dynamics service.
     * This stub is created using the `stubCreationFunc` provided in the constructor.
     * @type {?Stub}
     * @private
     */
    private _stub;
    /**
     * The constructor function used to create the gRPC stub.
     * This function is expected to be a class that extends `grpc.Client`.
     * @type {stubCreationFunc}
     * @private
     */
    private _stubCreationFunc;
    /**
     * The logger used for logging messages. Defaults to `console`.
     * @type {WinstonLogger}
     */
    logger: WinstonLogger;
    /**
     * List of processors that modify requests before sending them.
     * @type {Function[]}
     */
    requestProcessors: Function[];
    /**
     * List of processors that modify responses after receiving them.
     * @type {Function[]}
     */
    responseProcessors: Function[];
    /**
     * A wallet containing lease information for the client.
     * @type {?LeaseWallet}
     */
    leaseWallet: LeaseWallet | null;
    /**
     * The name of the client.
     * @type {?string}
     */
    clientName: string | null;
    executor: any;
    /**
     * Returns a new channel for the client after an InternalDeserializationError (set by Robot.ensureClient(), like
     * Python 5.2.0), or null.
     * @type {?function(): Promise<GrpcChannel>}
     * @private
     */
    private _channelResetFn;
    /**
     * @param {GrpcChannel} channel The channel to add to the stub creation function
     */
    set channel(channel: GrpcChannel);
    get channel(): GrpcChannel;
    /**
     * Adopt key objects like processors, logger, and wallet from other.
     * @param {Robot} other Update object form another service.
     */
    updateFrom(other: Robot): void;
    updateRequestIterator(requestIterator: any, logger: any, rpcMethod: any, isBlocking: any, copyRequest?: boolean): AsyncGenerator<any, void, unknown>;
    updateResponseIterator(responseIterator: any, logger: any, rpcMethod: any, isBlocking: any): import("google-protobuf").Message[];
    /**
     * Returns result of calling rpcMethod(request, args) after running processors.
     * @param {import('@grpc/grpc-js').MethodDefinition} rpcMethod The gRPC stub method.
     * @param {import('google-protobuf').Message|import('google-protobuf').Message[]} request The request message, or an
     * (async) iterable of messages for client streaming.
     * @param {?Function} [valueFromResponse=null] Converts the response to the returned value.
     * @param {?Function} [errorFromResponse=null] Returns the error to throw for a response, or null.
     * @param {boolean} [copyRequest=true] Apply the request processors to a copy of the request.
     * @param {Object} [args={}] Call options, not modified: `timeout` in milliseconds (30 s if not given, no deadline if
     * null like None in Python), `metadata` and `waitForReady`, and the other options of grpc-js (e.g. `credentials`).
     * `assembleType` is the message class to assemble from a stream of DataChunks, like Python's
     * `assemble_type`: the handlers then receive that single message.
     * @returns {Promise<*>}
     */
    call(rpcMethod: import("@grpc/grpc-js").MethodDefinition<any, any>, request: import("google-protobuf").Message | import("google-protobuf").Message[], valueFromResponse?: Function | null, errorFromResponse?: Function | null, copyRequest?: boolean, args?: Object): Promise<any>;
    handleResponse(response: any, errorFromResponse: any, valueFromResponse: any): any;
    handleResponseStreaming(response: any, errorFromResponse: any, valueFromResponse: any): any;
    /**
     * Apply request processors
     * @param {JspbMessage} request The grpc request to mutate
     * @param {boolean} copyRequest Make a clone of the request
     * @returns {JspbMessage}
     * @private
     */
    private _applyRequestProcessors;
    /**
     * Apply response processors
     * @param {JspbMessage} response The grpc response to mutate
     * @returns {JspbMessage}
     * @private
     */
    private _applyResponseProcessors;
    _getLogger(rpcMethod: any): object;
    #private;
}
/**
 * @typedef {import('google-protobuf').Message} JspbMessage
 */
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * @typedef {import('./lease').LeaseWallet} LeaseWallet
 */
/**
 * Return an exception based on common response header. None if no error.
 * @param {JspbMessage} response The response from spot
 * @returns {ResponseError|InvalidRequestError|InternalServerError|UnsetStatusError|null}
 */
export function commonHeaderErrors(response: JspbMessage): ResponseError | InvalidRequestError | InternalServerError | UnsetStatusError | null;
/**
 * Return an error based on common response header for a streaming response iterator. null if no error.
 */
export function streamingCommonHeaderErrors(responseIterator: any): ResponseError | null;
/**
 * Return an error based on lease use result. null if no error.
 */
export function commonLeaseErrors(response: any): InternalServerError | LeaseUseError | null;
/**
 * Return an error based on lease use result for a streaming response iterator. null if no error.
 */
export function streamingCommonLeaseErrors(responseIterator: any): InternalServerError | LeaseUseError | null;
/**
 * Return an error based on having a custom parameter status and message. null if no error.
 */
export function customParamsError(response: any, statusValue?: null, statusFieldName?: string, errorFieldName?: string, totalResponse?: null): CustomParamError | null;
/**
 * Return an error based on the status field of the given response.
 * Since most callers of this function are "response to error" callbacks, any exceptions
 * raised by this function are a considered a serious problem. Strongly consider using
 * collections.defaultdict for the status_to_error mapping, and/or wrapping calls to this
 * function in try/except blocks.
 * @param {JspbMessage|JspbMessage[]} response Protobuf message to examine or an iterator of protobuf responses.
 * @param {number} status Status from the protobuf message.
 * @param {*} statusToString Function that converts numeric status value to string. May raise
 * ValueError, in which case just the numeric code is included in a default
 * error message.
 * @param {Map} statusToError mapping of status -> [error_constructor, error_message]
 * error_constructor must take arguments "response" and "error_message".
 * (and ideally will subclass from ResponseError.)
 * @returns {?ResponseError} The error, or null.
 */
export function errorFactory(response: JspbMessage | JspbMessage[], status: number, statusToString: any, statusToError: Map<any, any>): ResponseError | null;
/**
 * Return an error based on license status.
 *
 * null if no error.
 */
export function commonLicenseErrors(response: any, allowUnset?: boolean): LicenseError | null;
/**
 * Decorate "error from response" functions to handle unset status field errors.
 */
export function handleUnsetStatusError(unset: any, field?: string, statusobj?: null): (func: any) => (...args: any[]) => any;
/**
 * Decorate "error from response" functions to handle typical header errors.
 */
export function handleCommonHeaderErrors(func: any): (...args: any[]) => any;
/**
 * Decorate "error from response" functions to handle typical lease errors.
 */
export function handleLeaseUseResultErrors(func: any): (...args: any[]) => any;
/**
 * Decorate "error from response" functions to handle custom param errors.
 */
export function handleCustomParamsErrors(funcOrOptions: any, maybeOptions?: {}): (...args: any[]) => any;
/**
 * Decorate "error from response" functions to handle typical license errors.
 */
export function handleLicenseErrors(func: any): (...args: any[]) => any;
/**
 * Decorate "error from response" functions to handle typical license errors. Does not throw an error for
 * STATUS_UNKNOWN. Use for responses that may only sometimes fill out the license status.
 */
export function handleLicenseErrorsIfPresent(func: any): (...args: any[]) => any;
/**
 * Get the IP address of the ethernet or WiFi interface used to talk to the robot.
 */
export function getSelfIp(robotHostname: any): Promise<any>;
import { ResponseError } from "./exceptions";
import { InvalidRequestError } from "./exceptions";
import { InternalServerError } from "./exceptions";
import { UnsetStatusError } from "./exceptions";
import { LeaseUseError } from "./exceptions";
import { CustomParamError } from "./exceptions";
import { LicenseError } from "./exceptions";
