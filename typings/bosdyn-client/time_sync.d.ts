export type Timestamp = import("google-protobuf/google/protobuf/timestamp_pb").Timestamp;
export type RobotCommandClient = import("./robot_command").RobotCommandClient;
/**
 * @typedef {import('./robot_command').RobotCommandClient} RobotCommandClient
 */
/** General class of errors for TimeSync non-response / non-grpc errors. */
export class TimeSyncError extends BosdynError {
}
/** Client has not established time-sync with the robot. */
export class NotEstablishedError extends TimeSyncError {
}
/** Exceeded deadline to achieve time-sync. */
export class TimedOutError extends TimeSyncError {
}
/** Time-sync thread is no longer running. */
export class InactiveThreadError extends TimeSyncError {
}
/**
 * A client for establishing time-sync with a server/robot.
 * @extends {BaseClient<TimeSyncServiceClient>}
 */
export class TimeSyncClient extends BaseClient<TimeSyncServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Obtain an initial or updated timesync estimate with server.
     * @param {timeSyncPb.TimeSyncRoundTrip} previousRoundTrip Null on first rpc call, then
     * fill out with previous response from server.
     * @param {string} clockIdentifier Empty on first call, assigned by server in first response.
     * @param {Object} [args] The GRPC options to send over the GRPC request
     * @returns {Promise<timeSyncPb.TimeSyncUpdateResponse>}
     */
    getTimeSyncUpdate(previousRoundTrip: timeSyncPb.TimeSyncRoundTrip, clockIdentifier: string, args?: Object): Promise<timeSyncPb.TimeSyncUpdateResponse>;
    /**
     * Get time sync update request generator
     * @param {timeSyncPb.TimeSyncRoundTrip} previousRoundTrip Null on first rpc call, then
     * fill out with previous response from server.
     * @param {string} clockIdentifier Empty on first call, assigned by server in first response.
     * @returns {timeSyncPb.TimeSyncUpdateRequest}
     * @private
     */
    private _getTimeSyncUpdateRequest;
}
/**
 * A wrapper that uses a TimeSyncClient object to establish and maintain timesync with a robot.
 * This class manages internal state, including a clock identifier and previous best time sync
 * estimates. This class automatically builds requests passed to the TimeSyncClient, so users
 * don't have to worry about the details of establishing and maintaining timesync.
 */
export class TimeSyncEndpoint {
    /**
     * @param {TimeSyncClient} timeSyncClient TimeSyncClient instance
     */
    constructor(timeSyncClient: TimeSyncClient);
    /** @type {TimeSyncClient}*/
    _client: TimeSyncClient;
    _previousRoundTrip: timeSyncPb.TimeSyncRoundTrip | null;
    _previousResponse: timeSyncPb.TimeSyncUpdateResponse | null;
    _clockIdentifier: string;
    /**
     * The last response message from the time-sync service.
     * @returns {?timeSyncPb.TimeSyncUpdateResponse}
     */
    get response(): timeSyncPb.TimeSyncUpdateResponse | null;
    /**
     * Checks if the client has successfully established time-sync with the robot.
     * @returns {boolean}
     */
    get hasEstablishedTimeSync(): boolean;
    /**
     * The previous round trip time.
     * @returns {Duration|null}
     */
    get roundTripTime(): Duration | null;
    /**
     * The clock identifier for the instance of the time-sync client.
     * @returns {string}
     */
    get clockIdentifier(): string;
    /**
     * The best current estimate of clock skew from the time-sync service.
     * @returns {Duration}
     * @throws {NotEstablishedError} Time sync has not yet been established.
     */
    get clockSkew(): Duration;
    /**
     * Perform time-synchronization until time sync established.
     * @param {number} maxSamples The maximum number of times to attempt to establish time-sync
     * through time-synchronization.
     * @param {boolean} breakOnSuccess If true, stop performing the time-synchronization after
     * time-sync is established.
     * @returns {Promise<boolean>}
     */
    establishTimesync(maxSamples?: number, breakOnSuccess?: boolean): Promise<boolean>;
    /**
     * Retreive update
     * @returns {Promise<timeSyncPb.TimeSyncUpdateResponse>}
     * @private
     */
    private _getUpdate;
    /**
     * Perform an update-cycle toward achieving time-synchronization.
     * @returns {Promise<boolean>}
     */
    getNewEstimate(): Promise<boolean>;
    /**
     * Get a RobotTimeConverter for current estimate for robot clock skew from local time.
     * @returns {RobotTimeConverter}
     * @throws {NotEstablishedError} If time sync has not yet been established.
     */
    getRobotTimeConverter(): RobotTimeConverter;
    /**
     * Convert a local time in seconds to a timestamp proto in robot time.
     * @param {number} localTimeSecs Timestamp in seconds since the unix epoch (e.g. nowSec(), not Date.now()).
     * @returns {Timestamp}
     * @throws {NotEstablishedError} Time sync has not yet been established.
     */
    robotTimestampFromLocalSecs(localTimeSecs: number): Timestamp;
}
/**
 * Background for achieving and maintaining time-sync to the robot.
 */
export class TimeSyncThread {
    /**
     * @param {TimeSyncClient} timeSyncClient An instance of TimeSyncClient
     * @param {?TimeSyncEndpoint} timeSyncEndpoint An optional instance of TimeSyncEndpoint
     */
    constructor(timeSyncClient: TimeSyncClient, timeSyncEndpoint?: TimeSyncEndpoint | null);
    /**
     * After achieving time sync, update estimate every minute.
     * @type {number}
     */
    DEFAULT_TIME_SYNC_INTERVAL_MS: number;
    /**
     * When time-sync service is not yet ready, poll it at this interval
     * @type {number}
     */
    TIME_SYNC_SERVICE_NOT_READY_INTERVAL_MS: number;
    /**
     * An instance of TimeSyncClient
     * @type {TimeSyncEndpoint}
     * @private
     */
    private _timeSyncEndpoint;
    /**
     * The interval between two request
     * @type {number}
     * @private
     */
    private _timeSyncIntervalMs;
    _task: any;
    _running: boolean;
    /**
     * Boolean that control the loop
     * @type {boolean}
     * @private
     */
    private _shouldExit;
    /**
     * Error that been catch when trying to get new estimate
     * @type {?Error}
     * @private
     */
    private _exception;
    /**
     * Wait for the next time-sync update, interrupted when the thread should exit or the interval changes.
     * @type {Event}
     * @private
     */
    private _event;
    logger: import("winston").Logger;
    /**
     * Start time sync with robot
     * @returns {void}
     */
    start(): void;
    /**
     * Stop time sync with robot. Like Python's join, the returned promise resolves once the update in
     * progress (if any) is done.
     * @returns {Promise<void>}
     */
    stop(): Promise<void>;
    /**
     * Set the time sync interval in seconds
     * @param {number} val The interval in seconds
     */
    set timeSyncIntervalSec(val: number);
    /**
     * Get the time sync interval in seconds
     * @type {number}
     */
    get timeSyncIntervalSec(): number;
    /**
     * Return true if all sync operations should stop
     * @type {boolean}
     */
    get shouldExit(): boolean;
    /**
     * Wait for up to the given timeout for time-sync to be achieved
     * @param {number} timeoutSec Maximum time (seconds) to wait for time-sync to be achieved.
     * @returns {Promise<void>}
     */
    waitForSync(timeoutSec?: number): Promise<void>;
    /**
     * Checks if the client has successfully established time-sync with the robot.
     * @returns {boolean}
     */
    get hasEstablishedTimeSync(): boolean;
    /**
     * Returns true if thread is no longer running.
     */
    get stopped(): boolean;
    get exception(): Error | null;
    /**
     * Return the TimeSyncEndpoint used by this thread.
     */
    get endpoint(): TimeSyncEndpoint;
    /**
     * Get current estimate for robot clock skew from local time.
     * @param {number} timesyncTimeoutSec Time to wait for timesync before doing conversion.
     * @returns {Promise<Duration>}
     */
    getRobotClockSkew(timesyncTimeoutSec?: number): Promise<Duration>;
    /**
     * Get a RobotTimeConverter for current estimate for robot clock skew from local time.
     * @param {number} timesyncTimeoutSec Time to wait for timesync before doing conversion.
     * @returns {Promise<RobotTimeConverter>}
     */
    getRobotTimeConverter(timesyncTimeoutSec?: number): Promise<RobotTimeConverter>;
    /**
     * Convert a local time in seconds to a timestamp proto in robot time.
     * @param {number} localTimeSecs Timestamp in seconds since the unix epoch (e.g. nowSec(), not Date.now()).
     * @param {number} timesyncTimeoutSec Time to wait for timesync before doing conversion.
     * @returns {Promise<time.Timestamp|null>}
     */
    robotTimestampFromLocalSecs(localTimeSecs: number, timesyncTimeoutSec?: number): Promise<time.Timestamp | null>;
    /**
     * Background which communicates with the time-sync service on robot.
     * The purpose of this method is to achieve and maintain time-sync, which is an estimate
     * of the difference between the robot's and client's system clocks.
     * @private
     */
    private _timesyncThread;
}
/**
 * Generate timespan as TimeRange proto, in robot time.
 * If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
 * be converted to robot_time.
 * If the input times are already in the robot clock, do not specify timeSyncEndpoint and
 * the times will not be converted.
 * @param {string} timespanSpec '{val}-{val}' or '{val}' time spec string
 * @param {TimeSyncEndpoint|null} timeSyncEndpoint Either TimeSyncEndpoint or null.
 * @returns {timeRangePb.TimeRange}
 */
export function timespecToRobotTimespan(timespanSpec: string, timeSyncEndpoint?: TimeSyncEndpoint | null): timeRangePb.TimeRange;
/**
 * Generate timespan as a TimeRange proto, in robot time.
 * If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
 * be converted to robot_time.
 * If the input times are already in the robot clock, do not specify timeSyncEndpoint and
 * the times will not be converted.
 * @param {Date|number|null} startDatetime A Date, milliseconds since the Unix epoch (e.g. Date.now()), or null
 * @param {Date|number|null} endDatetime A Date, milliseconds since the Unix epoch (e.g. Date.now()), or null
 * @param {TimeSyncEndpoint|null} timeSyncEndpoint Either TimeSyncEndpoint or null.
 * @returns {timeRangePb.TimeRange}
 */
export function robotTimeRangeFromDatetimes(startDatetime: Date | number | null, endDatetime: Date | number | null, timeSyncEndpoint?: TimeSyncEndpoint | null): timeRangePb.TimeRange;
/**
 * Generate timespan as a TimeRange proto, in robot time.
 * If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
 * be converted to robot_time.
 * If the input times are already in the robot clock, do not specify timeSyncEndpoint and
 * the times will not be converted.
 * @param {?number} startNsec nanoseconds since the Unix epoch or null
 * @param {?number} endNsec nanoseconds since the Unix epoch or null
 * @param {?TimeSyncEndpoint} timeSyncEndpoint Either TimeSyncEndpoint or None.
 * @returns {timeRangePb.TimeRange}
 */
export function robotTimeRangeFromNanoseconds(startNsec: number | null, endNsec: number | null, timeSyncEndpoint?: TimeSyncEndpoint | null): timeRangePb.TimeRange;
/** @typedef {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} Timestamp */
/**
 * Set or convert fields of the proto that need timestamps in the robot's clock.
 * @param {RobotCommandClient} client Robot command client instance.
 * @param {number} timestamp Client time in seconds since the Unix epoch, e.g. nowSec() (not Date.now()).
 * @param {TimeSyncEndpoint} timesyncEndpoint A timesync endpoint associated with the robot object.
 * @returns {Timestamp}
 */
export function updateTimeFilter(client: RobotCommandClient, timestamp: number, timesyncEndpoint: TimeSyncEndpoint): Timestamp;
/**
 * Set or convert fields of the proto that need timestamps in the robot's clock.
 * @param {RobotCommandClient} client Robot command client instance.
 * @param {Timestamp} timestamp Client time.
 * @param {TimeSyncEndpoint} timesyncEndpoint A timesync endpoint associated with the robot object.
 * @returns {Timestamp}
 */
export function updateTimestampFilter(client: RobotCommandClient, timestamp: Timestamp, timesyncEndpoint: TimeSyncEndpoint): Timestamp;
import { BosdynError } from "./exceptions";
import { TimeSyncServiceClient } from "../../src/bosdyn/api/time_sync_service_grpc_pb";
import { BaseClient } from "./common";
import timeSyncPb = require("../../src/bosdyn/api/time_sync_pb");
import { Duration } from "google-protobuf/google/protobuf/duration_pb";
import { RobotTimeConverter } from "../bosdyn-core/util";
import time = require("google-protobuf/google/protobuf/timestamp_pb");
import timeRangePb = require("../../src/bosdyn/api/time_range_pb");
