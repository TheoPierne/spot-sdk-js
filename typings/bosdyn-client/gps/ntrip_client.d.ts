/**
 * Client used to connect to an NTRIP server to download GPS corrections. These corrections are then forwarded on to the
 * GPS device using the given stream.
 */
export class NtripClient {
    constructor(device: any, params: any, logger: any);
    device: any;
    host: any;
    port: any;
    user: any;
    password: any;
    mountPoint: any;
    tls: any;
    reconnectSecs: any;
    streaming: boolean;
    /**
     * The socket connected to the NTRIP server, available for sending GGA.
     * @type {?import('node:net').Socket}
     */
    sock: import("node:net").Socket | null;
    logger: any;
    /**
     * Reader of the connection in progress.
     * @type {?_SocketReader}
     * @private
     */
    private _reader;
    /**
     * Set to stop the current worker.
     * @type {Event}
     * @private
     */
    private _stopEvent;
    /**
     * The worker, which connects to the server, streams the data and reconnects.
     * @type {Promise<void>}
     * @private
     */
    private _worker;
    /**
     * Make a connection request to an NTRIP server.
     * @returns {Buffer}
     */
    makeRequest(): Buffer;
    /**
     * Start streaming data from an NTRIP server to a GPS receiver.
     * @returns {void}
     */
    startStream(): void;
    /**
     * Stop streaming NTRIP data.
     * @returns {Promise<void>} Resolves once the worker has ended, like Python's join().
     */
    stopStream(): Promise<void>;
    /**
     * Determine if we are streaming NTRIP data.
     */
    isStreaming(): boolean;
    /**
     * Given a GPGGA message, send it to the NTRIP server. This helps the NTRIP server send corrections that are
     * applicable to the area in which the receiver is operating.
     * @param {string} gga The GGA sentence.
     * @returns {boolean} False if not connected.
     */
    sendGGA(gga: string): boolean;
    /**
     * NTRIP Rev1 uses Shoutcast (ICY). Create an ICY session to stream RTCM data.
     * @param {Event} [stopEvent] Set to stop the session.
     * @returns {Promise<boolean>} True if the session was created: this.sock can send GGA sentences.
     */
    createIcySession(stopEvent?: Event): Promise<boolean>;
    /**
     * Stream NTRIP data from a connected server and send it to a GPS receiver.
     * @param {Event} [stopEvent] Set to stop streaming.
     * @returns {Promise<void>} Resolves once the connection has ended.
     */
    streamData(stopEvent?: Event): Promise<void>;
    /**
     * NTRIP client worker.
     * @param {Event} [stopEvent] Set to stop the worker.
     * @returns {Promise<void>}
     * @private
     */
    private _streamDataWorker;
    /**
     * Callback for handling NTRIP data.
     */
    handleNtripData(data: any): void;
    /**
     * Process an NMEA-GGA sentence passed in as a string.
     */
    handleNmeaGga(sentence: any): void;
}
/**
 * Class for storing parameters for connecting an NTRIP client to an NTRIP server.
 */
export class NtripClientParams {
    constructor(server?: string, port?: number, user?: string, password?: string, mountPoint?: string, useTls?: boolean, reconnectSecs?: number);
    server: string;
    port: number;
    user: string;
    password: string;
    mountPoint: string;
    tls: boolean;
    reconnectSecs: number;
}
export const SERVER_RECONNECT_DELAY: 60;
export const SOCKET_TIMEOUT: 10;
export const SOCKET_MAX_RECV_TIMEOUTS: 12;
export const DEFAULT_NTRIP_SERVER: "";
export const DEFAULT_NTRIP_PORT: 2101;
export const DEFAULT_NTRIP_TLS_PORT: 2102;
import { Buffer } from "buffer";
import { Event } from "../../bosdyn-core/event";
