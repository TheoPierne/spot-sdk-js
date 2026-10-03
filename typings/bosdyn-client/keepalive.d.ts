/**
 * Helper class for API Policy.
 */
export class Policy {
    constructor(proto?: null);
    policyProto: keepalivePb.Policy;
    set name(value: string);
    /**
     * Get or set the name of the Policy
     */
    get name(): string;
    addAssociatedLease(lease: any): void;
    /**
     * Add a 'controlled motors off' action that triggers after specified time (seconds).
     * @param {number} after The time (seconds) after which the action should be triggered.
     * @returns {void}
     */
    addControlledMotorsOffAction(after: number): void;
    /**
     * Add an 'immediate robot off' action that triggers after specified time (seconds).
     * @param {number} after The time (seconds) after which the action should be triggered.
     * @returns {void}
     */
    addImmediateRobotOffAction(after: number): void;
    /**
     * Add a 'record event' action that triggers after specified time (seconds).
     * @param {Array} events List of event names
     * @param {number} after Time (seconds) after which the action should be triggered.
     * @returns {void}
     */
    addRecordEventAction(events: any[], after: number): void;
    /**
     * Add an 'auto return' action that triggers after specified time (seconds).
     * @param {Array} leases List of leases
     * @param {any} params The parameters to set on the action
     * @param {number} after Time (seconds) after which the action should be triggered.
     * @returns {void}
     */
    addAutoReturnAction(leases: any[], params: any, after: number): void;
    /**
     * Add a 'mark lease stale' action that triggers after specified time (seconds).
     * @param {Array} leases List of leases
     * @param {number} after Time (in seconds) after which the action should be executed.
     */
    addLeaseStaleAction(leases: any[], after: number): void;
    /**
     * Get the shortest delay on an action, or None if no actions are set.
     * @example
     * const pol = new Policy();
     * pol.addControlledMotorsOffAction(2.5);
     * pol.addImmediateRobotOffAction(1.2);
     * console.log(pol.shortestActionDelay() === 1.2);
     * @returns {?number}
     */
    shortestActionDelay(): number | null;
    /**
     * Helper function to reduce boilerplate of adding an action.
     * @param {number} after Time (in seconds) after which the action should be executed.
     * @param {Function} setAction The action to set.
     * @returns {void}
     * @private
     */
    private _configureAction;
}
/**
 * A client for the Keepalive service.
 * This client is in BETA and may undergo changes in future releases.
 * @extends {BaseClient<KeepaliveServiceClient>}
 */
export class KeepaliveClient extends BaseClient<KeepaliveServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    _timesyncEndpoint: any;
    /**
     * Add given policy and remove policies with given ids.
     * @param {Policy} toAdd List of policies to add
     * @param {Array<string|bigint|number>} policyIdsToRemove List of policies id to remove (uint64: the ids are
     * strings, exact beyond 2^53)
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<keepalivePb.ModifyPolicyResponse>}
     */
    modifyPolicy(toAdd?: Policy, policyIdsToRemove?: Array<string | bigint | number>, args?: Object): Promise<keepalivePb.ModifyPolicyResponse>;
    /**
     * Check in for given policy_id, refreshing that policy's timer.
     * @param {string|bigint|number} policyId Policy id
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<keepalivePb.CheckInResponse>}
     */
    checkIn(policyId: string | bigint | number, args?: Object): Promise<keepalivePb.CheckInResponse>;
    /**
     * Get status on all policies.
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<keepalivePb.GetStatusResponse>}
     */
    getStatus(args?: Object): Promise<keepalivePb.GetStatusResponse>;
    _modifyPolicyRequest(toAdd: any, policyIdsToRemove: any): keepalivePb.ModifyPolicyRequest;
    _checkInRequest(policyId: any): keepalivePb.CheckInRequest;
}
/**
 * Specify a keepalive Policy that should be held to.
 */
export class PolicyKeepalive {
    /**
     * @param {KeepaliveClient} client
     * @param {Policy} policy
     * @param {?number} [rpcTimeoutSeconds=null] Timeout of the check-ins, in seconds.
     * @param {?number} [rpcIntervalSeconds=null] Interval of the check-ins, in seconds (a third of the shortest delay
     * of the actions of the policy by default).
     * @param {?Object} [logger=null]
     * @param {boolean} [removePolicyOnExit=false] Whether shutdown() removes the policy.
     * @param {number} [initialRetrySeconds=1.0] First wait of the retries with exponential back-off, in seconds.
     */
    constructor(client: KeepaliveClient, policy: Policy, rpcTimeoutSeconds?: number | null, rpcIntervalSeconds?: number | null, logger?: Object | null, removePolicyOnExit?: boolean, initialRetrySeconds?: number);
    logger: Object;
    removePolicyOnExit: boolean;
    /** @type {KeepaliveClient} */
    _client: KeepaliveClient;
    _policy: Policy;
    _policyId: string | null;
    _rpcIntervalSeconds: number;
    _rpcTimeoutSeconds: number | null;
    _initialRetrySeconds: number;
    /**
     * Optional callback called when a check-in fails with an error which is not a RetryableRpcError, like Python:
     * it returns (or resolves to) an ErrorCallbackResult. Without callback, such an error stops the check-ins, and
     * the robot then applies the actions of the policy (they were retried forever).
     * @type {?function(Error): (number|Promise<number>)}
     */
    keepaliveErrorCallback: ((arg0: Error) => (number | Promise<number>)) | null;
    /**
     * Aborted to stop the check-in loop, including the wait between two check-ins.
     * @type {AbortController}
     * @private
     */
    private _stopController;
    /**
     * The running check-in loop.
     * @type {?Promise<void>}
     * @private
     */
    private _task;
    /**
     * Starts the check-ins.
     */
    start(): Promise<this>;
    /**
     * Stop the check-ins, and remove the policy if removePolicyOnExit. Like Python's join, the check-in in
     * progress ends before the policy is removed.
     */
    shutdown(): Promise<void>;
    /**
     * Remove this instance's policy, if it did manage to add one.
     * @returns {Promise<void>}
     */
    removePolicy(): Promise<void>;
    _checkIn(): Promise<void>;
    /**
     * Check in periodically, like the thread of Python (whose first check-in waits an interval; here it is immediate):
     * the retryable RPC errors are logged, the other errors go to keepaliveErrorCallback, or end the check-ins.
     * @private
     */
    private _periodicCheckIn;
    [Symbol.asyncDispose](): Promise<void>;
}
/**
 * Remove all policies on the robot.
 * Optionally do this over a few attempts, in case other things are also removing policies.
 * @param {KeepaliveClient} keepaliveClient The keepalive client
 * @param {number} attempts The number of attempts to remove
 */
export function removeAllPolicies(keepaliveClient: KeepaliveClient, attempts?: number): Promise<void>;
/** Error in Keepalive RPC */
export class KeepaliveResponseError extends ResponseError {
}
/** A policy's associated lease was not the same, super, or sub lease of the active lease. */
export class InvalidLeaseError extends KeepaliveResponseError {
}
/** The specified policy ID was not valid. */
export class InvalidPolicyError extends KeepaliveResponseError {
}
import keepalivePb = require("../../src/bosdyn/api/keepalive/keepalive_pb");
import { KeepaliveServiceClient } from "../../src/bosdyn/api/keepalive/keepalive_service_grpc_pb";
import { BaseClient } from "./common";
import { ResponseError } from "./exceptions";
