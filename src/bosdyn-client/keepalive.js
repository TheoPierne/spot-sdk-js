'use strict';

const { setTimeout: sleep } = require('node:timers/promises');
const Event = require('node-threading-event');

const {
  BaseClient,
  commonHeaderErrors,
  errorFactory,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
} = require('./common');
const { ResponseError } = require('./exceptions');
const { Lease } = require('./lease');
const { LoggerUtil } = require('./loggerUtil');
const { DefaultDict } = require('./util');

const keepalivePb = require('../bosdyn/api/keepalive/keepalive_pb');
const { KeepaliveServiceClient } = require('../bosdyn/api/keepalive/keepalive_service_grpc_pb');
const { durationToSeconds, secondsToDuration } = require('../bosdyn-core/util');

class KeepaliveResponseError extends ResponseError {}
class InvalidLeaseError extends KeepaliveResponseError {}
class InvalidPolicyError extends KeepaliveResponseError {}

/**
 * Helper class for API Policy.
 */
class Policy {
  constructor(proto = null) {
    this.policyProto = proto || new keepalivePb.Policy();
  }

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
    function copyEvents(action) {
      for (const event of events) {
        action.getRecordEvent().addEvents(event);
      }
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
      leases.forEach(lease => action.getLeaseStale().addLeases(lease.leaseProto));
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
   * @param {Array<number>} policyIdsToRemove List of policies id to remove
   * @param {Object} args Extra arguments to pass to the service.
   * @returns {Promise<keepalivePb.ModifyPolicyResponse>}
   */
  modifyPolicy(toAdd = null, policyIdsToRemove = null, args) {
    const request = this._modifyPolicyRequest(toAdd, policyIdsToRemove);
    return this.call(this._stub.modifyPolicy, request, null, modifyPolicyError, false, args);
  }

  /**
   * Check in for given policy_id, refreshing that policy's timer.
   * @param {number} policyId Policy id
   * @param {Object} args Extra arguments to pass to the service.
   * @returns {Promise<keepalivePb.CheckInResponse>}
   */
  checkIn(policyId, args) {
    const request = this._checkInRequest(policyId);
    return this.call(this._stub.checkIn, request, null, checkInError, false, args);
  }

  /**
   * Get status on all policies.
   * @param {Object} args Extra arguments to pass to the service.
   * @returns {Promise<keepalivePb.GetStatusResponse>}
   */
  getStatus(args) {
    const request = new keepalivePb.GetStatusRequest();
    return this.call(this._stub.getStatus, request, null, commonHeaderErrors, false, args);
  }

  _modifyPolicyRequest(toAdd, policyIdsToRemove) {
    let request = new keepalivePb.ModifyPolicyRequest();
    if (toAdd instanceof Policy) {
      request.setToAdd(toAdd.policyProto).addPolicyIdsToRemove(policyIdsToRemove);
    } else {
      request.setToAdd(toAdd).addPolicyIdsToRemove(policyIdsToRemove);
    }
    return request;
  }

  _checkInRequest(policyId) {
    return new keepalivePb.CheckInRequest().setPolicyId(policyId);
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
      Object.keys(keepalivePb.ModifyPolicyResponse.Status),
      _MODIFY_POLICY_STATUS_TO_ERROR,
    ),
  ),
);

const checkInError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(keepalivePb.CheckInResponse.Status),
      _CHECK_IN_STATUS_TO_ERROR,
    ),
  ),
);

/**
 * Specify a keepalive Policy that should be held to.
 */
class PolicyKeepalive {
  constructor(
    client,
    policy,
    rpcTimeoutSeconds = null,
    rpcIntervalSeconds = null,
    logger = null,
    removePolicyOnExit = false,
  ) {
    this.logger = logger || LoggerUtil.getLogger('PolicyKeepalive');
    this.removePolicyOnExit = removePolicyOnExit;

    /** @type {KeepaliveClient} */
    this._client = client;
    this._policy = policy;
    this._policyId = null;
    this._rpcIntervalSeconds = rpcIntervalSeconds || policy.shortestActionDelay() / 3;
    this._rpcTimeoutSeconds = rpcTimeoutSeconds;
    this._endCheckInSignal = new Event();
  }

  async start() {
    this._policyId = (await this._client.modifyPolicy(this._policy)).getAddedPolicy().getPolicyId();
    this._periodicCheckIn();
  }

  async shutdown() {
    this._endCheckInSignal.set();
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
    if (this._policyId) {
      await this._client.modifyPolicy(undefined, [this._policyId]);
      this._policyId = null;
    }
  }

  async _checkIn() {
    await this._client.checkIn(this._policyId, { timeout: this._rpcTimeoutSeconds });
  }

  async _periodicCheckIn() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const execStart = Date.now();

      try {
        // eslint-disable-next-line no-await-in-loop
        await this._checkIn();
      } catch (err) {
        this.logger.warning(`exception during check-in:\n${err}\n`);
        this.logger.info('continuing check-in');
      }

      const execSeconds = Date.now() - execStart;

      // eslint-disable-next-line no-await-in-loop
      if (await this._endCheckInSignal.wait(this._rpcIntervalSeconds - execSeconds)) {
        break;
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
      // eslint-disable-next-line no-await-in-loop
      await sleep(500);
      lastExc = null;
    }

    // eslint-disable-next-line no-await-in-loop
    const allPolicyIds = (await keepaliveClient.getStatus()).getStatusList().map(p => p.getPolicyId());
    if (allPolicyIds) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await keepaliveClient.modifyPolicy(undefined, allPolicyIds);
        break;
      } catch (e) {
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
  InvalidLeaseError,
};
