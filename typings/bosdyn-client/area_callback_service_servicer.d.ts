export type AreaCallbackServiceConfig = import("./area_callback_service_utils").AreaCallbackServiceConfig;
export type Robot = import("./robot").Robot;
export type BeginCallbackRequest = import("../../src/bosdyn/api/graph_nav/area_callback_pb").BeginCallbackRequest;
/**
 * Implementation of area callback service: add it to a gRPC server with AreaCallbackServiceService (e.g. with
 * runService() of area_callback_service_runner).
 *
 * The RPCs wait for the clients of the robot (await ready): the constructor of Python creates them.
 */
export class AreaCallbackServiceServicer {
    static SERVICE_TYPE: string;
    /**
     * @param {Robot} robot The Robot object used to create service clients.
     * @param {AreaCallbackServiceConfig} config The AreaCallbackServiceConfig defining the data for the
     * AreaCallbackInformation response.
     * @param {function(new: AreaCallbackRegionHandlerBase, AreaCallbackServiceConfig, Robot)|
     * function(AreaCallbackServiceConfig, Robot): AreaCallbackRegionHandlerBase} areaCallbackBuilderFn Class or
     * function to create the AreaCallbackRegionHandlerBase subclass that implements the details of the callback.
     * Usually this will simply be the class itself.
     */
    constructor(robot: Robot, config: AreaCallbackServiceConfig, areaCallbackBuilderFn: (new (arg1: AreaCallbackServiceConfig, arg2: Robot) => AreaCallbackRegionHandlerBase) | ((arg0: AreaCallbackServiceConfig, arg1: Robot) => AreaCallbackRegionHandlerBase));
    areaCallbackServiceConfig: import("./area_callback_service_utils").AreaCallbackServiceConfig;
    areaCallbackBuilderFn: (new (arg1: AreaCallbackServiceConfig, arg2: Robot) => AreaCallbackRegionHandlerBase) | ((arg0: AreaCallbackServiceConfig, arg1: Robot) => AreaCallbackRegionHandlerBase);
    /** @type {?AreaCallbackRegionHandlerBase} */
    areaCallbackRegionHandler: AreaCallbackRegionHandlerBase | null;
    /** @type {?_RunThread} */
    areaCallbackActiveThread: _RunThread | null;
    /** @type {?Event} */
    areaCallbackActiveThreadEvent: Event | null;
    robot: import("./robot").Robot;
    paramValidator: (arg0: DictParam) => import("../../src/bosdyn/api/service_customization_pb").CustomParamError | null;
    _lock: Lock;
    _nextCommandId: number;
    _activeCommandId: number | null;
    _rpcLogger: any;
    _leaseValidator: LeaseValidator;
    _shutdownTimeout: number;
    /**
     * Resolves once the clients of the robot are created.
     * @type {Promise<void>}
     */
    ready: Promise<void>;
    _init(): Promise<void>;
    /**
     * Handles an RPC: the response of handler, or its error.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call
     * @param {Function} callback
     * @param {function(*): Promise<*>} handler Returns the response for the request.
     * @returns {Promise<void>}
     * @private
     */
    private _handle;
    /**
     * Return the configured AreaCallbackInformation.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the AreaCallbackInformationRequest.
     * @param {Function} callback Receives the AreaCallbackInformationResponse.
     */
    areaCallbackInformation(call: any, callback: Function): Promise<void>;
    /**
     * Begin the callback in a new region.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the BeginCallbackRequest.
     * @param {Function} callback Receives the BeginCallbackResponse.
     */
    beginCallback(call: any, callback: Function): Promise<void>;
    /**
     * @param {BeginCallbackRequest} request
     * @param {BeginCallbackResponse} response
     * @returns {Promise<void>}
     * @private
     */
    private _beginCallbackRegionHandler;
    /**
     * The region handler of areaCallbackBuilderFn: a class (a Python class is a function), or a function.
     * @returns {AreaCallbackRegionHandlerBase}
     * @private
     */
    private _buildRegionHandler;
    /**
     * Start run() of the region handler, like the thread of Python.
     * @private
     */
    private _startActiveThread;
    /**
     * Receive robot control from GraphNav.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the BeginControlRequest.
     * @param {Function} callback Receives the BeginControlResponse.
     */
    beginControl(call: any, callback: Function): Promise<void>;
    /**
     * Regular updates from GraphNav, with responses to update the policy.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the UpdateCallbackRequest.
     * @param {Function} callback Receives the UpdateCallbackResponse.
     */
    updateCallback(call: any, callback: Function): Promise<void>;
    /**
     * Terminate handling of this region.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the EndCallbackRequest.
     * @param {Function} callback Receives the EndCallbackResponse.
     */
    endCallback(call: any, callback: Function): Promise<void>;
    /**
     * Called when we re-route within the callback. Most callbacks do not need to know about changes in the route, and
     * can ignore this.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the RouteChangeRequest.
     * @param {Function} callback Receives the RouteChangeResponse.
     */
    routeChange(call: any, callback: Function): Promise<void>;
    /**
     * @param {?Timestamp} endTime
     * @returns {Promise<boolean>} Whether the end time is before the current robot time.
     * @private
     */
    private _isExpired;
    /** @private */
    private _isActiveCommandId;
    /**
     * Check if all the required leases are supplied and valid, and add them to the lease wallet.
     * @param {leasePb.Lease[]} leases
     * @param {BeginControlResponse} response Gets the status and the lease use results.
     * @returns {boolean}
     * @private
     */
    private _testAndForwardLeases;
    /** @private */
    private _clearLeaseWallet;
    /**
     * Call to force run thread to terminate.
     * @param {number} [timeout=5] Time allowed to run thread to shut down, in seconds.
     * @returns {Promise<boolean>} True if the thread correctly shut down within the allowed time.
     */
    shutdown(timeout?: number): Promise<boolean>;
}
import { AreaCallbackRegionHandlerBase } from "./area_callback_region_handler_base";
/**
 * The run() of a region handler, like the thread of Python: it starts at once, and is alive until run() returns.
 * @private
 */
declare class _RunThread {
    /**
     * @param {AreaCallbackRegionHandlerBase} handler
     * @param {Event} shutdownEvent Event that signals run() to shut down.
     */
    constructor(handler: AreaCallbackRegionHandlerBase, shutdownEvent: Event);
    _finished: Event;
    /** @type {Promise<void>} Resolves once run() has returned. */
    done: Promise<void>;
    /** @returns {boolean} True until run() has returned. */
    isAlive(): boolean;
    /**
     * Wait until run() returns, like the join(timeout) of Python.
     * @param {?number} [timeout=null] Maximum time to wait in seconds, null for no limit.
     * @returns {Promise<void>}
     */
    join(timeout?: number | null): Promise<void>;
}
import { Event } from "../bosdyn-core/event";
import { DictParam } from "../../src/bosdyn/api/service_customization_pb";
import { Lock } from "../bosdyn-core/lock";
import { LeaseValidator } from "./lease_validator";
export {};
