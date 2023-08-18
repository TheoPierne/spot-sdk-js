'use strict';

const { setTimeout: sleep } = require('node:timers/promises');
const Event = require('node-threading-event');

const { BaseClient, common_header_errors, error_factory } = require('./common');
const { ResponseError } = require('./exceptions');
const { Lease } = require('./lease');
const { LoggerUtil } = require('./loggerUtil');
const keepalive_pb = require('../bosdyn/api/keepalive/keepalive_pb');
const keepalive_pb_grpc = require('../bosdyn/api/keepalive/keepalive_pb_grpc');
const { duration_to_seconds, seconds_to_duration } = require('../bosdyn-core/util');

class KeepaliveResponseError extends ResponseError {
  constructor(response, msg) {
    super(response, msg);
    this.name = 'KeepaliveResponseError';
  }
}

class InvalidLeaseError extends KeepaliveResponseError {
  constructor(response, msg) {
    super(response, msg);
    this.name = 'InvalidLeaseError';
  }
}

class InvalidPolicyError extends KeepaliveResponseError {
  constructor(response, msg) {
    super(response, msg);
    this.name = 'InvalidPolicyError';
  }
}

class Policy {
  constructor(proto = null) {
    this.policy_proto = proto || new keepalive_pb.Policy();
  }

  get name() {
    return this.policy_proto.getName();
  }

  set name(value) {
    this.policy_proto.setName(value);
  }

  add_associated_lease(lease) {
    if (lease instanceof Lease) {
      this.policy_proto.addAssociatedLeases(lease.lease_proto);
    } else {
      this.policy_proto.addAssociatedLeases(lease);
    }
  }

  /**
   * Add a 'controlled motors off' action that triggers after specified time (seconds).
   * @param {number} after The time (seconds) after which the action should be triggered.
   * @returns {void}
   */
  add_controlled_motors_off_action(after) {
    this._configure_action(after, action => action.controlled_motors_off.SetInParent());
  }

  /**
   * Add an 'immediate robot off' action that triggers after specified time (seconds).
   * @param {number} after The time (seconds) after which the action should be triggered.
   * @returns {void}
   */
  add_immediate_robot_off_action(after) {
    this._configure_action(after, action => action.immediate_robot_off.SetInParent());
  }

  /**
   * Add a 'record event' action that triggers after specified time (seconds).
   * @param {Array} events List of event names
   * @param {number} after Time (seconds) after which the action should be triggered.
   * @returns {void}
   */
  add_record_event_action(events, after) {
    function copy_events(action) {
      for (const event of events) {
        action.getRecordEvent().addEvents(event);
      }
    }

    this._configure_action(after, copy_events);
  }

  /**
   * Add an 'auto return' action that triggers after specified time (seconds).
   * @param {Array} leases List of leases
   * @param {any} params The parameters to set on the action
   * @param {number} after Time (seconds) after which the action should be triggered.
   * @returns {void}
   */
  add_auto_return_action(leases, params, after) {
    function copy_params_and_leases(action) {
      leases.forEach(lease => action.getAutoReturn().addLease(lease));
      action.getAutoReturn().setParams(params);
    }

    this._configure_action(after, copy_params_and_leases);
  }

  /**
   * Add a 'mark lease stale' action that triggers after specified time (seconds).
   * @param {Array} leases List of leases
   * @param {number} after Time (in seconds) after which the action should be executed.
   */
  add_lease_stale_action(leases, after) {
    function copy_leases(action) {
      leases.forEach(lease => action.getLeaseStale().addLeases(lease.lease_proto));
    }

    this._configure_action(after, copy_leases);
  }

  /**
   * Get the shortest delay on an action, or None if no actions are set.
   * @example
   * const pol = new Policy();
   * pol.add_controlled_motors_off_action(2.5);
   * pol.add_immediate_robot_off_action(1.2);
   * console.log(pol.shortest_action_delay() === 1.2);
   * @returns {?number}
   */
  shortest_action_delay() {
    let delay = null;
    for (const actionafter of this.policy_proto.getActionsList()) {
      const tmp = duration_to_seconds(actionafter.getAfter());
      if (delay || tmp < delay) {
        delay = tmp;
      }
    }
    return delay;
  }

  /**
   * Helper function to reduce boilerplate of adding an action.
   * @param {number} after Time (in seconds) after which the action should be executed.
   * @param {Function} set_action The action to set.
   * @returns {void}
   * @private
   */
  _configure_action(after, set_action) {
    const action = this.policy_proto.addActions();
    action.setAfter(seconds_to_duration(after));
    set_action(action);
  }
}

class KeepaliveClient extends BaseClient {
  static default_service_name = 'keepalive';
  static service_type = 'bosdyn.api.keepalive.KeepaliveService';

  constructor() {
    super(keepalive_pb_grpc.KeepaliveServiceClient);
    this._timesync_endpoint = null;
  }

  /**
   * Add given policy and remove policies with given ids.
   * @param {Array<Policy>} to_add List of policies to add
   * @param {Array<number>} policy_ids_to_remove List of policies id to remove
   * @param {Object} args Extra arguments to pass to the service.
   * @returns {Promise<any>}
   */
  modify_policy(to_add = null, policy_ids_to_remove = null, args) {
    const request = this._modify_policy_request(to_add, policy_ids_to_remove);
    return this.call(this._stub.modifyPolicy, request, null, modify_policy_error, args);
  }

  /**
   * Check in for given policy_id, refreshing that policy's timer.
   * @param {number} policy_id Policy id
   * @param {Object} args Extra arguments to pass to the service.
   * @returns {Promise<any>}
   */
  check_in(policy_id, args) {
    const request = this._check_in_request(policy_id);
    return this.call(this._stub.checkIn, request, null, check_in_error, args);
  }

  /**
   * Get status on all policies.
   * @param {Object} args Extra arguments to pass to the service.
   * @returns {Promise<any>}
   */
  get_status(args) {
    const request = new keepalive_pb.GetStatusRequest();
    return this.call(this._stub.getStatus, request, null, common_header_errors, args);
  }

  _modify_policy_request(to_add, policy_ids_to_remove) {
    let request = new keepalive_pb.ModifyPolicyRequest();
    if (to_add instanceof Policy) {
      request.setToAdd(to_add.policy_proto).addPolicyIdsToRemove(policy_ids_to_remove);
    } else {
      request.setToAdd(to_add).addPolicyIdsToRemove(policy_ids_to_remove);
    }
    return request;
  }

  _check_in_request(policy_id) {
    return new keepalive_pb.CheckInRequest().setPolicyId(policy_id);
  }
}

const _MODIFY_POLICY_STATUS_TO_ERROR = {
  [keepalive_pb.ModifyPolicyResponse.Status.STATUS_INVALID_LEASE]: [
    InvalidLeaseError,
    "A policy's associated lease was not the same, super, or sub lease of the active lease.",
  ],
  [keepalive_pb.ModifyPolicyResponse.Status.STATUS_INVALID_POLICY_ID]: [
    InvalidPolicyError,
    'The specified policy ID was not valid.',
  ],
};

const _CHECK_IN_STATUS_TO_ERROR = {
  [keepalive_pb.CheckInResponse.Status.STATUS_INVALID_POLICY_ID]: [
    InvalidPolicyError,
    'The specified policy ID was not valid.',
  ],
};

function modify_policy_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(keepalive_pb.ModifyPolicyResponse.Status),
    _MODIFY_POLICY_STATUS_TO_ERROR,
  );
}

function check_in_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(keepalive_pb.CheckInResponse.Status),
    _CHECK_IN_STATUS_TO_ERROR,
  );
}

class PolicyKeepalive {
  constructor(
    client,
    policy,
    rpc_timeout_seconds = null,
    rpc_interval_seconds = null,
    logger = null,
    remove_policy_on_exit = false,
  ) {
    this.logger = logger || LoggerUtil.getLogger('PolicyKeepalive');
    this.remove_policy_on_exit = remove_policy_on_exit;

    this._client = client;
    this._policy = policy;
    this._policy_id = null;
    this._rpc_interval_seconds = rpc_interval_seconds || policy.shortest_action_delay() / 3;
    this._rpc_timeout_seconds = rpc_timeout_seconds;
    this._end_check_in_signal = new Event();
  }

  async start() {
    this._policy_id = (await this._client.modify_policy(this._policy)).getAddedPolicy().getPolicyId();
    this._periodic_check_in();
  }

  shutdown() {
    this._end_check_in_signal.set();
    if (this.remove_policy_on_exit) {
      this.remove_policy();
    }
  }

  /**
   * Remove this instance's policy, if it did manage to add one.
   * @returns {Promise<void>}
   */
  async remove_policy() {
    if (this._policy_id) {
      await this._client.modify_policy(null, [this._policy_id]);
      this._policy_id = null;
    }
  }

  async _check_in() {
    await this._client.check_in(this._policy_id, { timeout: this._rpc_timeout_seconds });
  }

  async _periodic_check_in() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const exec_start = Date.now();

      try {
        // eslint-disable-next-line no-await-in-loop
        await this._check_in();
      } catch (err) {
        this.logger.warning(`exception during check-in:\n${err}\n`);
        this.logger.info('continuing check-in');
      }

      const exec_seconds = Date.now() - exec_start;

      // eslint-disable-next-line no-await-in-loop
      if (await this._end_check_in_signal.wait(this._rpc_interval_seconds - exec_seconds)) {
        break;
      }
    }
    this.logger.debug('Policy check-in stopped');
  }
}

/**
 * Remove all policies on the robot.
 * Optionally do this over a few attempts, in case other things are also removing policies.
 * @param {KeepaliveClient} keepalive_client The keepalive client
 * @param {number} attempts The number of attempts to remove
 */
async function remove_all_policies(keepalive_client, attempts = 1) {
  let last_exc = null;
  for (let i = 0; i < attempts; i++) {
    if (last_exc) {
      // eslint-disable-next-line no-await-in-loop
      await sleep(500);
      last_exc = null;
    }

    // eslint-disable-next-line no-await-in-loop
    const all_policy_ids = (await keepalive_client.get_status().getStatusList()).map(p => p.getPolicyId());
    if (all_policy_ids) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await keepalive_client.modify_policy(undefined, all_policy_ids);
        break;
      } catch (e) {
        last_exc = e;
      }
    } else {
      break;
    }
  }
  if (last_exc) {
    throw last_exc;
  }
}

module.exports = {
  Policy,
  KeepaliveClient,
  PolicyKeepalive,
  remove_all_policies,
};
