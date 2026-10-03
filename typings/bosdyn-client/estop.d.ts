export const StopLevel: typeof estopPb.EstopStopLevel;
/** General class of errors for Estop service. */
export class EstopResponseError extends ResponseError {
}
/** The endpoint specified in the request is not registered. */
export class EndpointUnknownError extends EstopResponseError {
}
/** The challenge and/or response was incorrect. */
export class IncorrectChallengeResponseError extends EstopResponseError {
}
/** Target endpoint did not match. */
export class EndpointMismatchError extends EstopResponseError {
}
/** Registered to the wrong configuration. */
export class ConfigMismatchError extends EstopResponseError {
}
/** New endpoint was invalid. */
export class InvalidEndpointError extends EstopResponseError {
}
/** Tried to replace a EstopConfig, but provided bad ID. */
export class InvalidIdError extends EstopResponseError {
}
/** The operation is not allowed while motors are on. */
export class MotorsOnError extends EstopResponseError {
}
/**
 * Client to the estop service.
 * @extends {BaseClient<EstopServiceClient>}
 */
export class EstopClient extends BaseClient<EstopServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    /**
     * Check in request generator
     * @param {estopPb.EstopStopLevel} stopLevel Number representing desired stop level. See StopLevel enum.
     * @param {EstopEndpoint} endpoint The endpoint asserting the stop level.
     * @param {?(string|bigint|number)} challenge A previously received challenge from the server.
     * @param {?(string|bigint|number)} response A response to the 'challenge' argument.
     * @returns {estopPb.EstopCheckInRequest}
     * @private
     * @static
     */
    private static _buildCheckInRequest;
    /**
     * Register request generator
     * @param {string} targetConfigId The identification of the current configuration on the robot.
     * @param {EstopEndpoint} endpoint Estop endpoint.
     * @returns {estopPb.RegisterEstopEndpointRequest}
     * @private
     * @static
     */
    private static _buildRegisterRequest;
    /**
     * Deregister request generator
     * @param {string} targetConfigId The identification of the current configuration on the robot.
     * @param {EstopEndpoint} endpoint Estop endpoint.
     * @returns {estopPb.DeregisterEstopEndpointRequest}
     * @private
     * @static
     */
    private static _buildDeregisterRequest;
    /**
     * Whether to choose between two error handlers function
     * @param {boolean} suppressIncorrect Set True to prevent an IncorrectChallengeResponseError from being
     * raised when STATUS_INVALID is returned. Useful for the first check-in, before a
     * challenge has been sent by the server.
     * @returns {Function}
     * @private
     * @static
     */
    private static _chooseCheckInErrFunc;
    constructor(name?: string);
    /**
     * Register the endpoint in the target configuration.
     * @param {string} targetConfigId The identification of the current configuration on the robot.
     * @param {EstopEndpoint} endpoint Estop endpoint.
     * @param {Object} [args] Passed to underlying RPC. Example: { timeout: 5000 } to cancel the RPC after 5 seconds.
     * @returns {Promise<estopPb.EstopEndpoint>}
     */
    register(targetConfigId: string, endpoint: EstopEndpoint, args?: Object): Promise<estopPb.EstopEndpoint>;
    /**
     * Deregister the endpoint in the target configuration.
     * @param {string} targetConfigId The identification of the current configuration on the robot.
     * @param {EstopEndpoint} endpoint Estop endpoint.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<estopPb.DeregisterEstopEndpointResponse>}
     */
    deregister(targetConfigId: string, endpoint: EstopEndpoint, args?: Object): Promise<estopPb.DeregisterEstopEndpointResponse>;
    /**
     * Return the estop configuration of the robot.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<estopPb.EstopConfig>}
     */
    getConfig(args?: Object): Promise<estopPb.EstopConfig>;
    /**
     * Change the estop configuration of the robot.
     * @param {estopPb.EstopConfig} config New configuration to set.
     * @param {string} targetConfigId The identification of the current configuration on the robot.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<estopPb.EstopConfig>}
     */
    setConfig(config: estopPb.EstopConfig, targetConfigId: string, args?: Object): Promise<estopPb.EstopConfig>;
    /**
     * Return the estop status of the robot.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<estopPb.EstopSystemStatus>}
     */
    getStatus(args?: Object): Promise<estopPb.EstopSystemStatus>;
    /**
     * Check in with the estop system.
     * @param {estopPb.EstopStopLevel} stopLevel Number representing desired stop level. See StopLevel enum.
     * @param {EstopEndpoint} endpoint The endpoint asserting the stop level.
     * @param {?(string|bigint|number)} challenge A previously received challenge from the server (an uint64: the
     * challenges are strings, exact beyond 2^53).
     * @param {?(string|bigint|number)} response A response to the 'challenge' argument.
     * @param {boolean} suppressIncorrect Set True to prevent an IncorrectChallengeResponseError from being
     * raised when STATUS_INVALID is returned. Useful for the first check-in, before a
     * challenge has been sent by the server.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<string>} The new challenge.
     */
    checkIn(stopLevel: estopPb.EstopStopLevel, endpoint: EstopEndpoint, challenge: (string | bigint | number) | null, response: (string | bigint | number) | null, suppressIncorrect?: boolean, args?: Object): Promise<string>;
}
/**
 * Endpoint in the software estop system.
 */
export class EstopEndpoint {
    /**
     * This is an estop role required in every configuration.
     * @type {string}
     * @static
     * @readonly
     */
    static readonly REQUIRED_ROLE: string;
    /**
     * @param {EstopClient} client The client of the estop service.
     * @param {string} name Name of the endpoint.
     * @param {number} estopTimeout Timeout of the endpoint, in seconds like Python (not in milliseconds like the
     * timeouts of the RPCs): the robot is stopped when it gets no valid check-in during this time.
     * @param {string} [role=EstopEndpoint.REQUIRED_ROLE] Role of the endpoint.
     * @param {boolean} [firstCheckin=true] Whether the first check-in does not have a challenge to answer yet.
     * @param {?number} [estopCutPowerTimeout=null] Timeout of the cut power of the endpoint, in seconds.
     * @throws {ValueError} The timeout is not a positive number.
     */
    constructor(client: EstopClient, name: string, estopTimeout: number, role?: string, firstCheckin?: boolean, estopCutPowerTimeout?: number | null);
    /** @type {EstopClient} */
    client: EstopClient;
    role: string;
    estopTimeout: number;
    estopCutPowerTimeout: number | null;
    _lastSetLevel: number | null;
    _challenge: any;
    _name: string;
    _uniqueId: string | null;
    _configId: string | null;
    _firstCheckin: boolean;
    logger: import("winston").Logger;
    toString(): string;
    firstCheckin(): boolean;
    setFirstCheckin(val: any): void;
    /**
     * Sets the challenge of the endpoint.
     */
    setChallenge(challenge: any): void;
    /**
     * The challenge of the endpoint.
     */
    getChallenge(): any;
    /**
     * Replaces the existing estop configuration with a single-endpoint configuration.
     */
    forceSimpleSetup(): Promise<void>;
    /**
     * Issue a CUT stop level command to the robot, cutting motor power immediately.
     * @param {Object} [args] Passed to underlying RPC.
     */
    stop(args?: Object): Promise<void>;
    /**
     * Issue a SETTLE_THEN_CUT stop level. The robot will attempt to sit before cutting motor power.
     * @param {Object} [args] Passed to underlying RPC.
     */
    settleThenCut(args?: Object): Promise<void>;
    /**
     * Issue a NONE stop level command to the robot, allowing motor power.
     * @param {Object} [args] Passed to underlying RPC.
     */
    allow(args?: Object): Promise<void>;
    /**
     * Check in at a specified level.
     * Meant for internal use, but may be helpful for higher-level wrappers.
     * @param {number} level Number representing desired stop level. See StopLevel enum.
     * @param {Object} [args] Passed to underlying RPC.
     */
    checkInAtLevel(level: number, args?: Object): Promise<void>;
    /**
     * Deregister this endpoint from the configuration.
     * @param {Object} [args] Passed to underlying RPC.
     */
    deregister(args?: Object): Promise<void>;
    /**
     * Register this endpoint to the given configuration.
     * @param {string} targetConfigId The identification of the current configuration on the robot.
     * @param {Object} [args] Passed to underlying RPC.
     */
    register(targetConfigId: string, args?: Object): Promise<void>;
    /**
     * Set member variables based on given estopPb.EstopEndpoint.
     * @param {estopPb.EstopEndpoint} proto The source proto
     */
    fromProto(proto: estopPb.EstopEndpoint): void;
    /**
     * Return estopPb.EstopEndpoint based on current member variables.
     * @returns {estopPb.EstopEndpoint}
     */
    toProto(): estopPb.EstopEndpoint;
    /**
     * Generate a response for this._challenge.
     * @returns {string|null}
     */
    _response(): string | null;
    /**
     * The unique id of the endpoint. Should be used as read-only.
     */
    get uniqueId(): string | null;
    get lastSetLevel(): number | null;
}
/**
 * Wraps an EstopEndpoint to do periodic check-ins, keeping software estop from timing out.
 * This is intended to be the common implementation of both periodic checking-in and one-time
 * check-ins. See the command line utility and the "Big Red Button" application for examples.
 * You should not access any of the "private" members, or the wrapped endpoint.
 */
export class EstopKeepAlive {
    static KeepAliveStatus: {
        OK: number;
        ERROR: number;
        DISABLED: number;
    };
    /**
     * @param {EstopEndpoint} endpoint The endpoint to check in with.
     * @param {?number} [rpcTimeoutSeconds=null] Timeout of the check-in RPCs, in seconds (the estop timeout of the
     * endpoint if null).
     * @param {?number} [rpcIntervalSeconds=null] Interval between the check-ins, in seconds (a third of the estop
     * timeout of the endpoint if null).
     * @param {?function(): boolean} [keepRunningCb=null] Called before each check-in: the check-ins stop when it returns
     * false.
     * @param {number} [maxStatusQueueSize=20] The maximum number of statuses kept in statusQueue.
     */
    constructor(endpoint: EstopEndpoint, rpcTimeoutSeconds?: number | null, rpcIntervalSeconds?: number | null, keepRunningCb?: (() => boolean) | null, maxStatusQueueSize?: number);
    /** @type {EstopEndpoint} */
    _endpoint: EstopEndpoint;
    _endCheckInSignal: boolean;
    _desiredStopLevel: estopPb.EstopStopLevel;
    _rpcTimeout: number;
    _checkInPeriod: number;
    _keepRunning: () => boolean;
    statusQueue: Queue;
    /**
     * Tail of the queue of check-ins: like Python's lock, check-ins run one at a time so that each
     * one sends the challenge returned by the previous one. Two concurrent check-ins would send the
     * same challenge, and the robot would reject the second one (e.g. a stop()).
     * @type {Promise<void>}
     * @private
     */
    private _lock;
    /**
     * Aborted to stop the check-in loop, including the wait between two check-ins.
     * @type {AbortController}
     * @private
     */
    private _stopController;
    _initialCheckIn: Promise<void>;
    _task: Promise<void>;
    /**
     * Resolves once the initial check-in is done (successful or not). Python's constructor blocks on it:
     * await this before powering on the motors.
     * @returns {Promise<void>}
     */
    waitForInitialCheckIn(): Promise<void>;
    /**
     * Stop the periodic check-ins. The returned promise resolves once the check-in loop has exited,
     * like Python's shutdown() which joins the thread.
     * @returns {Promise<void>}
     */
    shutdown(): Promise<void>;
    get logger(): import("winston").Logger;
    allow(): Promise<void>;
    settleThenCut(): Promise<void>;
    stop(): Promise<void>;
    /**
     * Stop checking into the robot estop system.
     */
    _endPeriodicCheckIn(): void;
    /**
     * Handle an error message; optionally disable the application.
     * GUI applications should override this function, to make sure the error_msg gets to the GUI.
     * @param {string} msg The error message
     * @param {boolean} disable Stop the check in
     */
    _error(msg: string, disable?: boolean): void;
    /**
     * Handle an ok message.
     * GUI applications should override this function, to make sure the error_msg gets to the GUI.
     */
    _ok(): void;
    /**
     * Update the estop_keep_alive status by populating the queue, clearing old entries if the queue is full.
     * Note: this method is not thread safe because if called by multiple different threads it could
     * create a race condition which will raise a FullQueue exception. The EstopKeepAlive only uses
     * this in a single background thread for the _periodicCheckIn method.
     * @param {number} status The update status
     * @param {string} msg The update message
     */
    _updateStatus(status: number, msg?: string): void;
    /**
     * Check in, optionally specifying a non-standard RPC timeout.
     * @param {number} rpcTimeoutSec A timeout in seconds.
     */
    _checkIn(rpcTimeoutSec?: number): Promise<void>;
    /**
     * Send estop API CheckIn messages to robot estop system in loop.
     */
    _periodicCheckIn(): Promise<void>;
    /**
     * The last stop level set by a check-in of the endpoint (null before the first one), like Python.
     * @type {?number}
     */
    get lastSetLevel(): number | null;
    /**
     * The endpoint of the keep-alive. Should be used as read-only.
     * @type {EstopEndpoint}
     */
    get endpoint(): EstopEndpoint;
    /**
     * The client of the endpoint. Should be used as read-only.
     * @type {EstopClient}
     */
    get client(): EstopClient;
    [Symbol.dispose](): void;
    [Symbol.asyncDispose](): Promise<void>;
}
/**
 * Returns true if robot is estopped, false otherwise.
 * @param {EstopClient} estopClient The EstopClient
 * @param {Object} [args] Passed to underlying RPC.
 * @returns {Promise<boolean>}
 */
export function isEstopped(estopClient: EstopClient, args?: Object): Promise<boolean>;
export function responseFromChallenge(challenge: any): string;
import estopPb = require("../../src/bosdyn/api/estop_pb");
import { ResponseError } from "./exceptions";
import { EstopServiceClient } from "../../src/bosdyn/api/estop_service_grpc_pb";
import { BaseClient } from "./common";
import { Queue } from "../bosdyn-core/queue";
