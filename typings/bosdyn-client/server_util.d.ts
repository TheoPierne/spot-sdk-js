export type DataBufferClient = import("./data_buffer").DataBufferClient;
export type Message = import("google-protobuf").Message;
/**
 * A runner to start a gRPC server and allow easy cleanup, like GrpcServiceRunner of Python (it was missing).
 *
 * The server starts at construction, like Python, but grpc-js binds its port asynchronously: await waitForStart()
 * for the port. Python's `with GrpcServiceRunner(...)` is `await using` (Symbol.asyncDispose stops the server).
 */
export class GrpcServiceRunner {
    /**
     * @param {Object} serviceServicer Servicer that defines server behavior: the implementation of the service.
     * @param {grpc.ServiceDefinition|function(Object, grpc.Server): void} addServicerToServerFn The definition of the
     * service to add (e.g. ImageServiceService), or a function that attaches the servicer to the gRPC server, like the
     * add_ImageServiceServicer_to_server() generated for Python.
     * @param {number} [port=0] The port number the service can be accessed through on the host system. Defaults to 0,
     * which will assign an ephemeral port.
     * @param {number} [maxWorkers=4] Not used: Node.js runs the handlers on its event loop (a thread pool in Python).
     * @param {?number} [maxSendMessageLength=null] Max message length (bytes) allowed for messages sent.
     * @param {?number} [maxReceiveMessageLength=null] Max message length (bytes) allowed for messages received.
     * @param {number} [timeoutSecs=3] Number of seconds to wait for a clean server shutdown (not used: the shutdown of
     * grpc-js is immediate).
     * @param {boolean} [forceSigintCapture=true] Stop runUntilInterrupt() on SIGTERM and SIGQUIT (e.g. docker stop) too,
     * not only on SIGINT.
     * @param {?Object} [logger=null] Logger to log with.
     * @param {string} [host='[::]'] The address to listen on, all the interfaces by default like Python (not in Python).
     */
    constructor(serviceServicer: Object, addServicerToServerFn: grpc.ServiceDefinition | ((arg0: Object, arg1: grpc.Server) => void), port?: number, maxWorkers?: number, maxSendMessageLength?: number | null, maxReceiveMessageLength?: number | null, timeoutSecs?: number, forceSigintCapture?: boolean, logger?: Object | null, host?: string);
    logger: Object;
    maxWorkers: number;
    timeoutSecs: number;
    forceSigintCapture: boolean;
    serverTypeName: string;
    server: grpc.Server;
    /** @type {?number} The bound port, once started. */
    port: number | null;
    _started: Promise<any>;
    /**
     * @returns {Promise<number>} The port of the server, once it is started.
     */
    waitForStart(): Promise<number>;
    /**
     * Shuts the gRPC server down: the RPCs in progress are cancelled, like stop(None) in Python.
     * @returns {Promise<void>}
     */
    stop(): Promise<void>;
    /**
     * Wait until a SIGINT, SIGTERM, or SIGQUIT is received (only SIGINT without forceSigintCapture) and then shut
     * down cleanly. SIGQUIT does not exist on Windows.
     * @returns {Promise<void>}
     */
    runUntilInterrupt(): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
}
/**
 * @typedef {import('./data_buffer').DataBufferClient} DataBufferClient
 * @typedef {import('google-protobuf').Message} Message
 */
/**
 * Helper to log gRPC request and response message to the data buffer for a service.
 *
 * Python's `with ResponseContext(response, request, rpc_logger):` around the handling of an RPC, as run():
 *
 *   await new ResponseContext(response, request, rpcLogger).run(async () => {
 *     // Fill the response.
 *   });
 *
 * It logs the request and response to the data buffer, and mutates the headers to add additional information
 * before logging.
 */
export class ResponseContext {
    /**
     * @param {Message} response Any gRPC response message with a bosdyn.api.ResponseHeader proto.
     * @param {Message} request Any gRPC request message with a bosdyn.api.RequestHeader proto.
     * @param {?DataBufferClient} [rpcLogger=null] Optional data buffer client to log the messages; if not provided,
     * only the headers will be mutated and nothing will be logged.
     * @param {?string} [channelPrefix=null] The prefix you want this req / resp pair logged under.
     * @param {?function(Error): void} [excCallback=null] Called with the error thrown in the context, if any.
     */
    constructor(response: Message, request: Message, rpcLogger?: DataBufferClient | null, channelPrefix?: string | null, excCallback?: ((arg0: Error) => void) | null);
    response: import("google-protobuf").Message;
    request: import("google-protobuf").Message;
    rpcLogger: import("./data_buffer").DataBufferClient | null;
    channelPrefix: string | null;
    excCallback: ((arg0: Error) => void) | null;
    /**
     * Adds a start timestamp to the response header and logs the request RPC (Python's __enter__).
     * @returns {Message} The response.
     */
    enter(): Message;
    /**
     * Updates the header code if unset and logs the response RPC (Python's __exit__).
     * @param {?Error} [error=null] The error thrown in the context, if any.
     * @returns {void}
     */
    exit(error?: Error | null): void;
    /**
     * Run fn in the context, like the body of Python's with statement: the error thrown by fn, if any, is thrown again
     * once the context is exited.
     * @template T
     * @param {function(Message): (T|Promise<T>)} fn Fills the response.
     * @returns {Promise<T>}
     */
    run<T>(fn: (arg0: Message) => (T | Promise<T>)): Promise<T>;
    _log(message: any): void;
}
/**
 * Sets the ResponseHeader header in the response.
 * @param {Message} response The GRPC response message to be populated.
 * @param {Message} request The header from the request is added to the response.
 * @param {headerPb.CommonError.Code} [errorCode] The status for the RPC response.
 * @param {string} [errorMsg] An optional error message describing a bad header status failure.
 * @returns {void} Mutates the response message's header to be fully populated.
 */
export function populateResponseHeader(response: Message, request: Message, errorCode?: headerPb.CommonError.Code, errorMsg?: string): void;
/**
 * Removes any large bytes fields from a protobuf message depending on the proto type.
 * @param {Message} protoMessage The message, modified.
 * @returns {void}
 */
export function stripLargeBytesFields(protoMessage: Message): void;
/**
 * Creates set of protos which will have bytes fields removed.
 * @returns {Map<Function, function(Message): void>} By message type: a Map, since the keys of an object would be
 * the (identical) source code of the constructors.
 */
export function getBytesFieldAllowlist(): Map<Function, (arg0: Message) => void>;
/** Removes bytes from the ImageResponse proto (its image data only, like Python). */
export function stripImageResponse(protoMessage: any): void;
/** Removes bytes from the GetImageResponse proto. */
export function stripGetImageResponse(protoMessage: any): void;
/** Removes bytes from the GetLocalGridsResponse proto. */
export function stripLocalGridResponses(protoMessage: any): void;
/** Removes bytes from the StoreImageRequest proto. */
export function stripStoreImageRequest(protoMessage: any): void;
/** Removes bytes from the StoreDataRequest proto. */
export function stripStoreDataRequest(protoMessage: any): void;
/** Removes bytes from the RecordSignalTicksRequest proto. */
export function stripRecordSignalTick(protoMessage: any): void;
/** Removes bytes from the RecordDataBlobsRequest proto. */
export function stripRecordDataBlob(protoMessage: any): void;
import grpc = require("@grpc/grpc-js");
import headerPb = require("../../src/bosdyn/api/header_pb");
