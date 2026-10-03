export type Logger = import("../logger_util").Logger;
export type SE3Pose = import("../math_helpers").SE3Pose;
export type Robot = import("../robot").Robot;
export type RobotTimeConverter = import("../../bosdyn-core/util").RobotTimeConverter;
export class NMEAStreamReader {
    /**
     * The amount of time (in seconds) to wait before logging another decode error.
     * @type {number}
     */
    static LOG_THROTTLE_TIME: number;
    /**
     * @param {Logger} logger Object to log with.
     * @param {import('node:stream').Readable|{readline: Function}} stream The GPS data: a readable stream, like a TCP
     * socket or a serial port, or an object with a readline() method that returns a line or a promise of one, like the
     * Python streams. Reading a socket times out after its timeout (socket.setTimeout()), like Python's settimeout().
     * @param {SE3Pose} bodyTformGps Pose of the GPS in the body frame.
     * @param {boolean} [verbose=false] Log the NMEA messages received.
     */
    constructor(logger: Logger, stream: import("node:stream").Readable | {
        readline: Function;
    }, bodyTformGps: SE3Pose, verbose?: boolean);
    logger: import("../logger_util").Logger;
    stream: import("stream").Readable | {
        readline: Function;
    };
    parser: NMEAParser;
    bodyTformGps: import("../../../src/bosdyn/api/geometry_pb").SE3Pose;
    lastFailedReadLogTime: number | null;
    verbose: boolean;
    /**
     * Reader of the lines of the stream, while it is read.
     * @type {?_LineReader}
     * @private
     */
    private _lineReader;
    /**
     * This function returns an array of new GpsDataPoints.
     * @param {?RobotTimeConverter} timeConverter Converter to robot time, null if the clocks are synchronized.
     * @returns {Promise<?gpsPb.GpsDataPoint[]>} null if the line read is not NMEA, or if interrupt() was called.
     * @throws {StreamTimeoutError} Nothing was received in time.
     * @throws {Error} The stream failed or ended.
     */
    readData(timeConverter: RobotTimeConverter | null): Promise<gpsPb.GpsDataPoint[] | null>;
    getLatestGga(): string | null;
    /**
     * End the pending readData(), which returns null. A stream with a readline() method can not be interrupted.
     * @returns {void}
     */
    interrupt(): void;
    /**
     * Stop reading the stream until the next readData().
     * @returns {void}
     */
    close(): void;
    _readline(): Promise<any>;
}
export class GpsListener {
    /**
     * Number of attempts to create the aggregator service client: the payload can come up faster than the service.
     * @type {number}
     */
    static MAX_ATTEMPTS: number;
    /**
     * Time between two of these attempts, in seconds.
     * @type {number}
     */
    static SECS_PER_ATTEMPT: number;
    /**
     * @param {Robot} robot The robot, used to create the aggregator service client.
     * @param {?RobotTimeConverter} timeConverter Converter to robot time, null if the clocks are synchronized by some
     * other method, such as NTP.
     * @param {import('node:stream').Duplex} stream The GPS stream, see NMEAStreamReader. The NTRIP client writes the
     * corrections to it.
     * @param {string} name The name of the GPS device.
     * @param {SE3Pose} bodyTformGps Pose of the GPS in the body frame.
     * @param {Logger} logger Object to log with.
     * @param {boolean} [verbose=false] Log the NMEA messages received.
     */
    constructor(robot: Robot, timeConverter: RobotTimeConverter | null, stream: import("node:stream").Duplex, name: string, bodyTformGps: SE3Pose, logger: Logger, verbose?: boolean);
    logger: import("../logger_util").Logger;
    robot: import("../robot").Robot;
    timeConverter: import("../../bosdyn-core/util").RobotTimeConverter | null;
    stream: import("stream").Duplex;
    reader: NMEAStreamReader;
    gpsDevice: gpsPb.GpsDevice;
    aggregatorClient: AggregatorClient;
    ntripClient: NtripClient | null;
    /**
     * Set by stop() to end run(), while it runs.
     * @type {?Event}
     * @private
     */
    private _stopEvent;
    /**
     * @type {?number}
     * @private
     */
    private _lastRpcErrorLogTime;
    runNtripClient(ntripParams: any): void;
    /**
     * Stop the NTRIP client, if any.
     * @returns {Promise<void>} Resolves once it has stopped.
     */
    stopNtripClient(): Promise<void>;
    /**
     * End run(), like the KeyboardInterrupt (Ctrl+C) that ends it in Python.
     * @returns {void}
     */
    stop(): void;
    /**
     * Send the GPS data read from the stream to the robot, until stop() is called or a SIGINT (Ctrl+C) is received.
     * Once stopped, the NTRIP client is stopped too.
     * @returns {Promise<boolean>} False if the aggregator service is not available, or if reading the stream failed.
     */
    run(): Promise<boolean>;
    /**
     * @param {Event} stopEvent Set to stop.
     * @returns {Promise<boolean>} True once stopped, false on failure.
     * @private
     */
    private _run;
    /**
     * Log an error of a NewGpsData request, at most once per LOG_THROTTLE_TIME. Python ignores them.
     * @param {Error} err The error.
     * @private
     */
    private _logRpcError;
}
/**
 * Nothing was read from the GPS stream in time, like Python's socket.timeout.
 */
export class StreamTimeoutError extends Error {
    constructor(message?: string);
}
import { NMEAParser } from "./NMEAParser";
import gpsPb = require("../../../src/bosdyn/api/gps/gps_pb");
import { AggregatorClient } from "./aggregator_client";
import { NtripClient } from "./ntrip_client";
