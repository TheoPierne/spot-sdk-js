/**
 * @file Client implementation of the Keepalive service.
 */

'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const {
  BaseClient,
  commonHeaderErrors,
  errorFactory,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
} = require('./common');
const { ErrorCallbackResult } = require('./error_callback_result');
const { ResponseError, RetryableRpcError, ValueError } = require('./exceptions');
const { Lease } = require('./lease');
const { LoggerUtil } = require('./logger_util');
const { DefaultDict } = require('./util');

const keepalivePb = require('../bosdyn/api/keepalive/keepalive_pb');
const { KeepaliveServiceClient } = require('../bosdyn/api/keepalive/keepalive_service_grpc_pb');
const { durationToSeconds, secondsToDuration, nowSec, toUint64String } = require('../bosdyn-core/util');

/** Error in Keepalive RPC */
class KeepaliveResponseError extends ResponseError {}
/** A policy's associated lease was not the same, super, or sub lease of the active lease. */
class InvalidLeaseError extends KeepaliveResponseError {}
/** The specified policy ID was not valid. */
class InvalidPolicyError extends KeepaliveResponseError {}

/**
 * Helper class for API Policy.
 */
class Policy {
  constructor(proto = null) {
    this.policyProto = proto || new keepalivePb.Policy();
  }

  /**
   * Get or set the name of the Policy
   */
  get name() {
    return this.policyProto.getName();
  }

  set name(value) {
    this.policyProto.setName(value);
  }

  addAssociatedLease(lease) {
    if (lease instanceof Lease) {
      this.policyProto.addAssociatedLeases(lease.leaseProto);
    } else {
      this.policyProto.addAssociatedLeases(lease);
    }
  }

  /**
   * Add a 'controlled motors off' action that triggers after specified time (seconds).
   * @param {number} after The time (seconds) after which the action should be triggered.
   * @returns {void}
   */
  addControlledMotorsOffAction(after) {
    this._configureAction(after, action =>
      action.setControlledMotorsOff(new keepalivePb.ActionAfter.ControlledMotorsOff()),
    );
  }

  /**
   * Add an 'immediate robot off' action that triggers after specified time (seconds).
   * @param {number} after The time (seconds) after which the action should be triggered.
   * @returns {void}
   */
  addImmediateRobotOffAction(after) {
    this._configureAction(after, action =>
      action.setImmediateRobotOff(new keepalivePb.ActionAfter.ImmediateRobotOff()),
    );
  }

  /**
   * Add a 'record event' action that triggers after specified time (seconds).
   * @param {Array} events List of event names
   * @param {number} after Time (seconds) after which the action should be triggered.
   * @returns {void}
   */
  addRecordEventAction(events, after) {
    // jspb does not create sub-messages on access, unlike Python's `action.record_event.events`.
    function copyEvents(action) {
      const recordEvent = new keepalivePb.ActionAfter.RecordEvent();
      for (const event of events) {
        recordEvent.addEvents(event);
      }
      action.setRecordEvent(recordEvent);
    }

    this._configureAction(after, copyEvents);
  }

  /**
   * Add an 'auto return' action that triggers after specified time (seconds).
   * @param {Array} leases List of leases
   * @param {any} params The parameters to set on the action
   * @param {number} after Time (seconds) after which the action should be triggered.
   * @returns {void}
   */
  addAutoReturnAction(leases, params, after) {
    function copyParamsAndLeases(action) {
      action.setAutoReturn(new keepalivePb.ActionAfter.AutoReturn());
      leases.forEach(lease => action.getAutoReturn().addLeases(lease.leaseProto));
      action.getAutoReturn().setParams(params);
    }

    this._configureAction(after, copyParamsAndLeases);
  }

  /**
   * Add a 'mark lease stale' action that triggers after specified time (seconds).
   * @param {Array} leases List of leases
   * @param {number} after Time (in seconds) after which the action should be executed.
   */
  addLeaseStaleAction(leases, after) {
    function copyLeases(action) {
      const leaseStale = new keepalivePb.ActionAfter.LeaseStale();
      leases.forEach(lease => leaseStale.addLeases(lease.leaseProto));
      action.setLeaseStale(leaseStale);
    }

    this._configureAction(after, copyLeases);
  }

  /**
   * Get the shortest delay on an action, or None if no actions are set.
   * @example
   * const pol = new Policy();
   * pol.addControlledMotorsOffAction(2.5);
   * pol.addImmediateRobotOffAction(1.2);
   * console.log(pol.shortestActionDelay() === 1.2);
   * @returns {?number}
   */
  shortestActionDelay() {
    let delay = null;
    for (const actionafter of this.policyProto.getActionsList()) {
      const tmp = durationToSeconds(actionafter.getAfter());
      if (delay === null || tmp < delay) {
        delay = tmp;
      }
    }
    return delay;
  }

  /**
   * Helper function to reduce boilerplate of adding an action.
   * @param {number} after Time (in seconds) after which the action should be executed.
   * @param {Function} setAction The action to set.
   * @returns {void}
   * @private
   */
  _configureAction(after, setAction) {
    const action = this.policyProto.addActions();
    action.setAfter(secondsToDuration(after));
    setAction(action);
  }
}

/**
 * A client for the Keepalive service.
 * This client is in BETA and may undergo changes in future releases.
 * @extends {BaseClient<KeepaliveServiceClient>}
 */
class KeepaliveClient extends BaseClient {
  static defaultServiceName = 'keepalive';
  static serviceType = 'bosdyn.api.keepalive.KeepaliveService';

  constructor() {
    super(KeepaliveServiceClient);
    this._timesyncEndpoint = null;
  }

  /**
   * Add given policy and remove policies with given ids.
   * @param {Policy} toAdd List of policies to add
   * @param {Array<string|bigint|number>} policyIdsToRemove List of policies id to remove (uint64: the ids are
   * strings, exact beyond 2^53)
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<keepalivePb.ModifyPolicyResponse>}
   */
  modifyPolicy(toAdd = null, policyIdsToRemove = null, args) {
    const request = this._modifyPolicyRequest(toAdd, policyIdsToRemove);
    return this.call(this._stub.modifyPolicy, request, null, modifyPolicyError, false, args);
  }

  /**
   * Check in for given policy_id, refreshing that policy's timer.
   * @param {string|bigint|number} policyId Policy id
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<keepalivePb.CheckInResponse>}
   */
  checkIn(policyId, args) {
    const request = this._checkInRequest(policyId);
    return this.call(this._stub.checkIn, request, null, checkInError, false, args);
  }

  /**
   * Get status on all policies.
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<keepalivePb.GetStatusResponse>}
   */
  getStatus(args) {
    const request = new keepalivePb.GetStatusRequest();
    return this.call(this._stub.getStatus, request, null, commonHeaderErrors, false, args);
  }

  _modifyPolicyRequest(toAdd, policyIdsToRemove) {
    const request = new keepalivePb.ModifyPolicyRequest();
    if (toAdd) {
      request.setToAdd(toAdd instanceof Policy ? toAdd.policyProto : toAdd);
    }
    // A list of ids: addPolicyIdsToRemove() would add the whole array (or null) as a single id.
    if (policyIdsToRemove?.length) {
      // uint64 strings ([jstype = JS_STRING]): jspb writes 0 for a number.
      request.setPolicyIdsToRemoveList(Array.from(policyIdsToRemove, toUint64String));
    }
    return request;
  }

  _checkInRequest(policyId) {
    return new keepalivePb.CheckInRequest().setPolicyId(toUint64String(policyId));
  }
}

const _MODIFY_POLICY_STATUS_TO_ERROR = DefaultDict(() => [null, null]);
_MODIFY_POLICY_STATUS_TO_ERROR.set(keepalivePb.ModifyPolicyResponse.Status.STATUS_INVALID_LEASE, [
  InvalidLeaseError,
  "A policy's associated lease was not the same, super, or sub lease of the active lease.",
]);
_MODIFY_POLICY_STATUS_TO_ERROR.set(keepalivePb.ModifyPolicyResponse.Status.STATUS_INVALID_POLICY_ID, [
  InvalidPolicyError,
  'The specified policy ID was not valid.',
]);

const _CHECK_IN_STATUS_TO_ERROR = DefaultDict(() => [null, null]);
_CHECK_IN_STATUS_TO_ERROR.set(keepalivePb.CheckInResponse.Status.STATUS_INVALID_POLICY_ID, [
  InvalidPolicyError,
  'The specified policy ID was not valid.',
]);

const modifyPolicyError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      keepalivePb.ModifyPolicyResponse.Status,
      _MODIFY_POLICY_STATUS_TO_ERROR,
    ),
  ),
);

const checkInError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), keepalivePb.CheckInResponse.Status, _CHECK_IN_STATUS_TO_ERROR),
  ),
);

/**
 * Specify a keepalive Policy that should be held to.
 */
class PolicyKeepalive {
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
  constructor(
    client,
    policy,
    rpcTimeoutSeconds = null,
    rpcIntervalSeconds = null,
    logger = null,
    removePolicyOnExit = false,
    initialRetrySeconds = 1.0,
  ) {
    this.logger = logger || LoggerUtil.getLogger('PolicyKeepalive');
    this.removePolicyOnExit = removePolicyOnExit;

    /** @type {KeepaliveClient} */
    this._client = client;
    this._policy = policy;
    this._policyId = null;
    this._rpcIntervalSeconds = rpcIntervalSeconds || policy.shortestActionDelay() / 3;
    if (!(this._rpcIntervalSeconds > 0)) {
      // A policy without action has no delay: the check-ins would run without any pause.
      throw new ValueError('rpcIntervalSeconds must be > 0: give it, or add an action to the policy');
    }
    this._rpcTimeoutSeconds = rpcTimeoutSeconds;
    this._initialRetrySeconds = initialRetrySeconds;

    /**
     * Optional callback called when a check-in fails with an error which is not a RetryableRpcError, like Python:
     * it returns (or resolves to) an ErrorCallbackResult. Without callback, such an error stops the check-ins, and
     * the robot then applies the actions of the policy (they were retried forever).
     * @type {?function(Error): (number|Promise<number>)}
     */
    this.keepaliveErrorCallback = null;

    /**
     * Aborted to stop the check-in loop, including the wait between two check-ins.
     * @type {AbortController}
     * @private
     */
    this._stopController = new AbortController();

    /**
     * The running check-in loop.
     * @type {?Promise<void>}
     * @private
     */
    this._task = null;
  }

  /**
   * Starts the check-ins.
   */
  async start() {
    if (this._task) throw new Error('PolicyKeepalive is already running.');
    this._policyId = (await this._client.modifyPolicy(this._policy)).getAddedPolicy().getPolicyId();
    this._task = this._periodicCheckIn().catch(err => {
      this.logger.error(`Policy check-in stopped by an error: ${err?.message ?? err}`);
    });
    return this;
  }

  /**
   * Stop the check-ins, and remove the policy if removePolicyOnExit. Like Python's join, the check-in in
   * progress ends before the policy is removed.
   */
  async shutdown() {
    this._stopController.abort();
    await this._task;
    if (this.removePolicyOnExit) {
      await this.removePolicy();
    }
  }

  async [Symbol.asyncDispose]() {
    await this.shutdown();
  }

  /**
   * Remove this instance's policy, if it did manage to add one.
   * @returns {Promise<void>}
   */
  async removePolicy() {
    // A string: '0' is no policy, like the 0 of Python.
    if (this._policyId && this._policyId !== '0') {
      await this._client.modifyPolicy(undefined, [this._policyId]);
      this._policyId = null;
    }
  }

  async _checkIn() {
    // rpcTimeoutSeconds is in seconds like in Python, but call() takes milliseconds. None in Python: no deadline.
    const timeout = this._rpcTimeoutSeconds == null ? null : this._rpcTimeoutSeconds * 1000;
    await this._client.checkIn(this._policyId, { timeout });
  }

  /**
   * Check in periodically, like the thread of Python (whose first check-in waits an interval; here it is immediate):
   * the retryable RPC errors are logged, the other errors go to keepaliveErrorCallback, or end the check-ins.
   * @private
   */
  async _periodicCheckIn() {
    const { signal } = this._stopController;
    let retryInterval = this._initialRetrySeconds;

    while (!signal.aborted) {
      const execStart = nowSec();
      let action = ErrorCallbackResult.RESUME_NORMAL_OPERATION;

      try {
        await this._checkIn();
      } catch (err) {
        if (err instanceof RetryableRpcError) {
          this.logger.warn(`exception during check-in: ${err?.message ?? err} (continuing check-in)`);
        } else if (this.keepaliveErrorCallback !== null) {
          action = ErrorCallbackResult.DEFAULT_ACTION;
          try {
            action = await this.keepaliveErrorCallback(err);
          } catch (callbackError) {
            this.logger.error(
              `Exception thrown in the provided keepalive error callback: ${callbackError?.message ?? callbackError}`,
            );
          }
        } else {
          throw err;
        }
      }

      // How long did the RPC and processing of said RPC take?
      const execSeconds = nowSec() - execStart;
      let waitSeconds;
      if (action === ErrorCallbackResult.ABORT) {
        this.logger.warn('Callback directed the keepalive thread to exit.');
        break;
      } else if (action === ErrorCallbackResult.RETRY_IMMEDIATELY) {
        waitSeconds = 0;
      } else if (action === ErrorCallbackResult.RETRY_WITH_EXPONENTIAL_BACK_OFF) {
        waitSeconds = retryInterval - execSeconds;
        retryInterval = Math.min(2 * retryInterval, this._rpcIntervalSeconds);
      } else {
        // Success path, or default action (resume normal operation)
        waitSeconds = this._rpcIntervalSeconds - execSeconds;
        retryInterval = this._initialRetrySeconds;
      }

      // The interval is in seconds: wait for the rest of it in milliseconds, interrupted by shutdown().
      const waitMs = waitSeconds * 1000;
      if (waitMs > 0) {
        try {
          await sleep(waitMs, undefined, { signal });
        } catch (e) {
          break;
        }
      }
    }

    this.logger.debug('Policy check-in stopped');
  }
}

/**
 * Remove all policies on the robot.
 * Optionally do this over a few attempts, in case other things are also removing policies.
 * @param {KeepaliveClient} keepaliveClient The keepalive client
 * @param {number} attempts The number of attempts to remove
 */
async function removeAllPolicies(keepaliveClient, attempts = 1) {
  let lastExc = null;
  for (let i = 0; i < attempts; i++) {
    if (lastExc) {
      await sleep(500);
      lastExc = null;
    }

    const allPolicyIds = (await keepaliveClient.getStatus()).getStatusList().map(p => p.getPolicyId());
    if (allPolicyIds.length) {
      try {
        await keepaliveClient.modifyPolicy(undefined, allPolicyIds);
        break;
      } catch (e) {
        // Like Python, only retry when another client removed a policy meanwhile.
        if (!(e instanceof InvalidPolicyError)) throw e;
        lastExc = e;
      }
    } else {
      break;
    }
  }
  if (lastExc) {
    throw lastExc;
  }
}

module.exports = {
  Policy,
  KeepaliveClient,
  PolicyKeepalive,
  removeAllPolicies,
  KeepaliveResponseError,
  InvalidLeaseError,
  InvalidPolicyError,
};
