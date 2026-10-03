/**
 * The callback reports the that path/area it's trying to traverse is blocked and the robot should take another route or
 * action.
 */
export class PathBlocked extends Error {
    constructor(msg: any);
}
/**
 * Error thrown by calling a helper function incorrectly.
 *
 * Thrown when a call would block forever or has otherwise been used in an incorrect manner. This error is not intended
 * to be caught, but indicates a programming error.
 */
export class IncorrectUsage extends Error {
    constructor(msg: any);
}
/**
 * Error base class for errors thrown from the internals of the AreaCallbackRegionHandlerBase.
 *
 * This error is thrown when the shutdown event is set, or can be thrown by the user to signal an error. A wrapper
 * around the run implementation catches this error and reports back to a client an UpdateCallbackResponse error.
 */
export class HandlerError extends Error {
    constructor(msg: any);
}
/**
 * The callback has already been stopped, via an EndCallback call.
 */
export class CallbackEnded extends HandlerError {
}
/**
 * The callback has already been stopped, via passing the end time. If caught, it should be rethrown to make sure the
 * response is set correctly.
 */
export class CallbackTimedOutError extends HandlerError {
}
/**
 * Options for how the helper class should respond to a route change.
 */
export class RouteChangedResult {
    rerunIfStopped: boolean;
}
/**
 * Base class for implementing an AreaCallbackRegionHandler.
 *
 * An AreaCallbackRegionHandler is an object responsible for running a single instance of an AreaCallback. The
 * AreaCallbackServiceServicer constructs an AreaCallbackRegionHandler object each time GraphNav starts an Area Callback
 * region. The servicer runs its run() method as an asynchronous task and reads its updateResponse to send status back
 * to the client. After EndCallback, this object is discarded and a new AreaCallbackRegionHandlerBase is constructed to
 * handle the next region.
 */
export class AreaCallbackRegionHandlerBase {
    constructor(config: any, robot: any);
    /**
     * @type {UpdateCallbackResponse}
     */
    _updateResponse: UpdateCallbackResponse;
    /**
     * @type {Event}
     */
    _shutdownEvent: Event;
    /**
     * @type {Event}
     */
    _leaseEvent: Event;
    /**
     * @type {number|null}
     */
    _endTime: number | null;
    /**
     * @type {import('./robot').Robot}
     */
    robot: import("./robot").Robot;
    _config: any;
    /**
     * @type {number}
     * @private
     */
    private _stage;
    /**
     * @type {boolean}
     * @private
     */
    private _beginComplete;
    /**
     * Validates that configuration passed to BeginCallback is valid.
     * @param {import('../../src/bosdyn/api/graph_nav/area_callback_pb').BeginCallbackRequest} request The request of
     * BeginCallback, with the configuration of the region.
     * @returns {number|Promise<number>} The status of the BeginCallbackResponse (STATUS_OK to accept the region).
     */
    begin(request: import("../../src/bosdyn/api/graph_nav/area_callback_pb").BeginCallbackRequest): number | Promise<number>;
    /**
     * Runs the callback, as an asynchronous task, after BeginCallback is called.
     * @returns {void|Promise<void>}
     */
    run(): void | Promise<void>;
    /**
     * This function is called after run() has finished and the client calls EndCallback.
     * @returns {void|Promise<void>}
     */
    end(): void | Promise<void>;
    /**
     * This function is called when Graph Nav re-routes inside the callback region.
     * In most cases, the callback does not need to do anything for this case and can leave the
     * default implementation.
     * @param {import('../../src/bosdyn/api/graph_nav/area_callback_pb').RouteChangeRequest} request The request.
     * @returns {RouteChangedResult}
     */
    routeChanged(request: import("../../src/bosdyn/api/graph_nav/area_callback_pb").RouteChangeRequest): RouteChangedResult;
    /**
     * Get areaCallbackPb.AreaCallbackInformation.
     */
    get areaCallbackInformation(): any;
    /**
     * Get AreaCallbackServiceConfig
     */
    get config(): any;
    /**
     * The policy of the update response, created if the response is complete or failed (policy, error and
     * complete are a oneof), like Python when a policy field is assigned.
     * @returns {UpdateCallbackResponse.NavPolicy}
     * @private
     */
    private _policy;
    /**
     * Tell graph nav that it should wait at the start of the region.
     */
    stopAtStart(): void;
    /**
     * Tell graph nav that it should continue on past the start of the region.
     */
    continuePastStart(): void;
    /**
     * Tell graph nav that it transfer control at the start of the region.
     */
    controlAtStart(): void;
    /**
     * Tell graph nav that it should wait at the end of the region.
     */
    stopAtEnd(): void;
    /**
     * Tell graph nav that it should continue on past the ends of the region.
     */
    continuePastEnd(): void;
    /**
     * Tell graph nav that it should transfer control at the end of the region.
     */
    controlAtEnd(): void;
    setComplete(): void;
    /**
     * Set the localization hint to the end of the callback region, indicating that graph nav
     * that navigation should continue from this point.
     * Robot control is required to set this. It should be called after walking to the end of
     * the region, but before ceding control.
     */
    setLocalizationAtEnd(): void;
    /**
     * Block waiting for the robot to pass the sublease to this callback.
     */
    blockUntilControl(): Promise<void>;
    /**
     * Check in a non-blocking way if the callback has been given a sublease.
     * @returns {boolean}
     */
    hasControl(): boolean;
    /**
     * Block until the robot arrives at the start of the area callback.
     * If the robot is already past the start, this will return immediately.
     * @returns {Promise<boolean>}
     */
    blockUntilArrivedAtStart(): Promise<boolean>;
    /**
     * Block until the robot arrives at the end of the area callback.
     */
    blockUntilArrivedAtEnd(): Promise<void>;
    /**
     * Check the current stage of traversal in a non-blocking way.
     */
    get stage(): number;
    /**
     * Run impl should use this sleep function to make sure thread does not hang.
     * @param {number} sleepTimeMsecs Time to sleep, in mseconds.
     */
    safeSleep(sleepTimeMsecs: number): Promise<void>;
    /**
     * Check if callback shutdown has been requested via client call to EndCallback or passing
     * the end time.
     */
    check(): Promise<void>;
    /**
     * Get current UpdateCallbackResponse.
     * @returns {UpdateCallbackResponse}
     */
    get updateResponse(): UpdateCallbackResponse;
    /**
     * Determine if the current policy and stage mean that the callback will eventually be
     * given control without any further action on its part
     * @returns {boolean}
     */
    willGetControl(): boolean;
    /**
     * The handler finished BeginCallback and is ready to start run().
     * Blocking calls may now be used.
     */
    internalBeginComplete(): void;
    /**
     * Update the stage via an incoming UpdateCallbackRequest.
     * @param {number} stage The new stage
     */
    internalSetStage(stage: number): void;
    /**
     * Update the end time from an incoming request.
     * @param {number} endTime The new end time
     */
    internalSetEndTime(endTime: number): void;
    /**
     * Set Event indicating region handler has been given control. Lease is available in wallet.
     */
    internalGiveControl(): void;
    /**
     * Wrapper around the run function which catches exceptions and set update response.
     * @param {Event} shutdownEvent Event that signals the run thread to shutdown.
     * @returns {Promise<void>} Resolves once run() has ended.
     * @throws {IncorrectUsage} run() used the helper functions incorrectly.
     */
    internalRunWrapper(shutdownEvent: Event): Promise<void>;
}
import { UpdateCallbackResponse } from "../../src/bosdyn/api/graph_nav/area_callback_pb";
import { Event } from "../bosdyn-core/event";
