/**
 * Sets header fields common to all bosdyn.api requests.
 */
export class AddRequestHeader {
    /**
     * @param {Function} clientNameFunc Function to get client's name.
     */
    constructor(clientNameFunc: Function);
    getClientName: Function;
    /**
     * Mutate request such that its header contains a client name and a timestamp.
     * Headers are not required for third party proto requests/responses.
     *
     * Like Python 5.2.0, the other fields of the header (e.g. disable_rpc_logging) are kept: the header was replaced.
     * @param {*} request Request to apply the header.
     * @returns {void}
     */
    mutate(request: any): void;
}
/**
 * Processor that logs every protobuf message to the robot's data buffer.
 */
export class DataBufferLoggingProcessor {
    static LOG_THROTTLE_SECONDS: number;
    constructor(dataBufferClient: any);
    /**
     * @type {import('./data_buffer').DataBufferClient}
     */
    dataBufferClient: import("./data_buffer").DataBufferClient;
    logger: import("winston").Logger;
    _lastErrorLogTime: number | null;
    /**
     * Logs the protobuf message to the data buffer, without waiting for it, like add_protobuf_async() in Python
     * (whose errors are ignored): a failure is logged. It was an unhandled rejection, which ends the Node.js process
     * (lease and E-Stop keep-alives included), and a synchronous error failed the RPC being logged.
     * @param {*} proto The protobuf request or response to log.
     */
    mutate(proto: any): void;
    /**
     * @param {Error} err
     * @private
     */
    private _logError;
}
/**
 * Attach a DataBufferLoggingProcessor to log all RPC requests and responses for the given client.
 * @param {import('./common').BaseClient} client
 * @param {import('./data_buffer').DataBufferClient} dataBufferClient
 */
export function logAllRpcs(client: import("./common").BaseClient<any>, dataBufferClient: import("./data_buffer").DataBufferClient): void;
