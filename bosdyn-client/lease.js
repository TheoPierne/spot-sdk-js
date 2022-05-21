'use strict';

const process = require('node:process');
const { setImmediate, clearImmediate } = require('node:timers');
const { setTimeout: sleep } = require('node:timers/promises');

const { cloneDeep } = require('lodash');

const { BaseClient, common_lease_errors, common_header_errors, error_factory } = require('./common');
const { ResponseError, ValueError, RpcError } = require('./exceptions');

const lease_pb = require('../bosdyn/api/lease_pb');
const lease_service_grpc_pb = require('../bosdyn/api/lease_service_grpc_pb');

const _RESOURCE_BODY = 'body';

class LeaseResponseError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'LeaseResponseError';
  }
}

class InvalidLeaseError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidLeaseError';
  }
}

class DisplacedLeaseError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'DisplacedLeaseError';
  }
}

class InvalidResourceError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidResourceError';
  }
}

class NotAuthoritativeServiceError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'NotAuthoritativeServiceError';
  }
}

class ResourceAlreadyClaimedError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'ResourceAlreadyClaimedError';
  }
}

class RevokedLeaseError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RevokedLeaseError';
  }
}

class UnmanagedResourceError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'UnmanagedResourceError';
  }
}

class WrongEpochError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'WrongEpochError';
  }
}

class NotActiveLeaseError extends LeaseResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'NotActiveLeaseError';
  }
}

class NoSuchLease extends Error {
  constructor(resource) {
    super(`No lease for resource "${resource}"`);
    this.name = 'NoSuchLease';
    this.resource = resource;
  }

  toString() {
    return `No lease for resource "${this.resource}"`;
  }
}

class LeaseNotOwnedByWallet extends Error {
  constructor(resource, lease_state) {
    super(`Lease on "${resource}" has state (${lease_state?.lease_status ? lease_state.lease_status : '<unknown>'})`);
    this.name = 'LeaseNotOwnedByWallet';
    this.resource = resource;
    this.lease_state = lease_state;
  }

  toString() {
    let state;
    try {
      state = this.lease_state.lease_status;
    } catch (e) {
      state = '<unknown>';
    }
    return `Lease on "${this.resource}" has state (${state})`;
  }
}

const _ACQUIRE_LEASE_STATUS_TO_ERROR = {
  [lease_pb.AcquireLeaseResponse.Status.STATUS_OK]: [null, null],
  [lease_pb.AcquireLeaseResponse.Status.STATUS_RESOURCE_ALREADY_CLAIMED]: [
    ResourceAlreadyClaimedError,
    'Use TakeLease method to forcefully grab the already claimed lease.',
  ],
  [lease_pb.AcquireLeaseResponse.Status.STATUS_INVALID_RESOURCE]: [
    InvalidResourceError,
    'Resource is not known to the LeaseService.',
  ],
  [lease_pb.AcquireLeaseResponse.Status.STATUS_NOT_AUTHORITATIVE_SERVICE]: [
    NotAuthoritativeServiceError,
    'LeaseService is not authoritative so Acquire should not work.',
  ],
};

const _TAKE_LEASE_STATUS_TO_ERROR = {
  [lease_pb.TakeLeaseResponse.Status.STATUS_OK]: [null, null],
  [lease_pb.TakeLeaseResponse.Status.STATUS_INVALID_RESOURCE]: [
    InvalidResourceError,
    'Resource is not known to the LeaseService.',
  ],
  [lease_pb.TakeLeaseResponse.Status.STATUS_NOT_AUTHORITATIVE_SERVICE]: [
    NotAuthoritativeServiceError,
    'LeaseService is not authoritative so Acquire should not work.',
  ],
};

const _RETURN_LEASE_STATUS_TO_ERROR = {
  [lease_pb.ReturnLeaseResponse.Status.STATUS_OK]: [null, null],
  [lease_pb.ReturnLeaseResponse.Status.STATUS_INVALID_RESOURCE]: [
    InvalidResourceError,
    'Resource is not known to the LeaseService.',
  ],
  [lease_pb.ReturnLeaseResponse.Status.STATUS_NOT_ACTIVE_LEASE]: [
    NotActiveLeaseError,
    'Lease is not the active lease.',
  ],
  [lease_pb.ReturnLeaseResponse.Status.STATUS_NOT_AUTHORITATIVE_SERVICE]: [
    NotAuthoritativeServiceError,
    'LeaseService is not authoritative so Acquire should not work.',
  ],
};

class Lease {
  static CompareResult = {
    SAME: 1,
    SUPER_LEASE: 2,
    SUB_LEASE: 3,
    OLDER: 4,
    NEWER: 5,
    DIFFERENT_RESOURCES: 6,
    DIFFERENT_EPOCHS: 7,
  };

  constructor(lease_proto, ignore_is_valid_check = false) {
    if (!ignore_is_valid_check && !Lease.is_valid_proto(lease_proto)) {
      throw new ValueError(`invalid lease_proto: ${JSON.stringify(lease_proto.toObject())}`);
    }
    this.lease_proto = lease_proto;
  }

  compare(other_lease) {
    if (this.lease_proto.getResource() !== other_lease.lease_proto.getResource()) {
      return this.CompareResult.DIFFERENT_RESOURCES;
    }
    if (this.lease_proto.getEpoch() !== other_lease.lease_proto.getEpoch()) return this.CompareResult.DIFFERENT_EPOCHS;

    const sequence_size = this.lease_proto.getSequenceList().length;
    const other_sequence_size = other_lease.lease_proto.getSequenceList().length;
    const common_sequence_size = Math.min(sequence_size, other_sequence_size);
    for (let i = 0; i < common_sequence_size; i++) {
      const sequence_num = this.lease_proto.getSequenceList()[i];
      const other_sequence_num = other_lease.lease_proto.getSequenceList()[i];
      if (sequence_num < other_sequence_num) {
        return this.CompareResult.OLDER;
      } else if (sequence_num > other_sequence_num) {
        return this.CompareResult.NEWER;
      }
    }

    if (sequence_size < other_sequence_size) {
      return this.CompareResult.SUPER_LEASE;
    } else if (sequence_size > other_sequence_size) {
      return this.CompareResult.SUB_LEASE;
    }

    return this.CompareResult.SAME;
  }

  create_newer() {
    const incr_lease_proto = cloneDeep(this.lease_proto);
    const list = incr_lease_proto.getSequenceList();
    list[list.length - 1] = this.lease_proto.getSequenceList()[this.lease_proto.getSequenceList().length - 1] + 1;
    incr_lease_proto.setSequenceList(list);
    return new Lease(incr_lease_proto);
  }

  create_sublease(client_name = null) {
    let sub_lease_proto = new lease_pb.Lease();
    sub_lease_proto = cloneDeep(this.lease_proto);
    sub_lease_proto.addSequence(0);
    if (client_name !== null) sub_lease_proto.addClientNames(client_name);
    return new Lease(sub_lease_proto);
  }

  static is_valid_proto(lease_proto) {
    return lease_proto && lease_proto.getResource().length > 0 && lease_proto.getSequenceList().length > 0;
  }

  is_valid_lease() {
    return Lease.is_valid_proto(this.lease_proto);
  }

  static compare_result_to_lease_use_result_status(compare_result, allow_super_leases) {
    if (compare_result === Lease.CompareResult.DIFFERENT_EPOCHS) {
      return lease_pb.LeaseUseResult.Status.STATUS_WRONG_EPOCH;
    } else if (compare_result === Lease.CompareResult.DIFFERENT_RESOURCES) {
      return lease_pb.LeaseUseResult.Status.STATUS_UNMANAGED;
    } else if (compare_result === Lease.CompareResult.SUPER_LEASE) {
      if (allow_super_leases) return lease_pb.LeaseUseResult.Status.STATUS_OK;
      return lease_pb.LeaseUseResult.Status.STATUS_OLDER;
    } else if (compare_result === Lease.CompareResult.OLDER) {
      return lease_pb.LeaseUseResult.Status.STATUS_OLDER;
    } else if (
      compare_result === Lease.CompareResult.SAME ||
      compare_result === Lease.CompareResult.SUB_LEASE ||
      compare_result === Lease.CompareResult.NEWER
    ) {
      return lease_pb.LeaseUseResult.Status.STATUS_OK;
    } else {
      throw new Error('The comparison result of the leases is unknown/unaccounted for.');
    }
  }
}

class LeaseState {
  static Status = {
    STATUS_UNOWNED: 0,
    STATUS_REVOKED: 1,
    STATUS_SELF_OWNER: 2,
    STATUS_OTHER_OWNER: 3,
    STATUS_NOT_MANAGED: 4,
  };

  constructor(lease_status, lease_owner = null, lease = null, lease_current = null, client_name = null) {
    this.lease_status = lease_status;
    this.lease_owner = lease_owner;
    this.lease_original = lease;
    this.client_name = client_name;
    if (lease_current) {
      this.lease_current = lease_current;
    } else if (lease) {
      this.lease_current = this.lease_original.create_sublease(this.client_name);
    } else {
      this.lease_current = null;
    }
  }

  create_newer() {
    if (!this.lease_current) return this;
    return new LeaseState(this.lease_status, this.lease_owner, this.lease_original, this.lease_current.create_newer());
  }

  update_from_lease_use_result(lease_use_result) {
    if (lease_use_result.getStatus() === lease_pb.LeaseUseResult.Status.STATUS_OLDER) {
      if (this.lease_current) {
        const attempted_lease = new Lease(lease_use_result.getAttemptedLease());
        if (attempted_lease.compare(this.lease_current) === Lease.CompareResult.SAME) {
          return new LeaseState(LeaseState.Status.STATUS_OTHER_OWNER, lease_use_result.getOwner());
        }
      }
    } else if (lease_use_result.getStatus() === lease_pb.LeaseUseResult.Status.STATUS_WRONG_EPOCH) {
      if (this.lease_current) {
        const attempted_lease = new Lease(lease_use_result.getAttemptedLease());
        if (attempted_lease.compare(this.lease_current) === Lease.CompareResult.SAME) {
          return new LeaseState(LeaseState.Status.STATUS_UNOWNED);
        }
      }
    } else if (lease_use_result.getStatus() === lease_pb.LeaseUseResult.Status.STATUS_REVOKED) {
      if (this.lease_current) {
        const attempted_lease = new Lease(lease_use_result.getAttemptedLease());
        if (attempted_lease.compare(this.lease_current) === Lease.CompareResult.SAME) {
          return new LeaseState(LeaseState.Status.STATUS_REVOKED);
        }
      }
    }
    return this;
  }
}

class LeaseWallet {
  constructor() {
    this._lease_state_map = {};
    this.client_name = null;
  }

  add(lease) {
    const resource = lease.lease_proto.getResource();
    this._lease_state_map[resource] = new LeaseState(
      LeaseState.Status.STATUS_SELF_OWNER,
      null,
      lease,
      null,
      this.client_name,
    );
  }

  remove(lease) {
    delete this._lease_state_map[lease.lease_proto.getResource()];
  }

  advance(resource = _RESOURCE_BODY) {
    const lease_state = this._get_owned_lease_state_locked(resource);
    const new_lease = lease_state.create_newer();
    this._lease_state_map[resource] = new_lease;
    return new_lease.lease_current;
  }

  get_lease(resource = _RESOURCE_BODY) {
    return this._get_owned_lease_state_locked(resource).lease_current;
  }

  get_lease_state(resource = _RESOURCE_BODY) {
    return this._get_lease_state_locked(resource);
  }

  _get_lease_state_locked(resource) {
    try {
      return this._lease_state_map[resource];
    } catch (e) {
      throw new NoSuchLease(resource);
    }
  }

  _get_owned_lease_state_locked(resource) {
    const lease_state = this._get_lease_state_locked(resource);
    if (lease_state.lease_status !== LeaseState.Status.STATUS_SELF_OWNER) {
      throw new LeaseNotOwnedByWallet(resource, lease_state);
    }
    return lease_state;
  }

  on_lease_use_result(lease_use_result, resource = null) {
    resource = resource || lease_use_result.getAttemptedLease().getResource();
    const lease_state = this._lease_state_map[resource];
    if (!lease_state) return;
    const new_lease_state = lease_state.update_from_lease_use_result(lease_use_result);
    this._lease_state_map[resource] = new_lease_state;
  }

  set_client_name(client_name) {
    this.client_name = client_name;
  }
}

class LeaseClient extends BaseClient {
  static default_service_name = 'lease';
  static service_type = 'bosdyn.api.LeaseService';

  constructor(lease_wallet = null) {
    super(lease_service_grpc_pb.LeaseServiceClient);
    this.lease_wallet = lease_wallet;
  }

  acquire(resource = _RESOURCE_BODY, args) {
    const req = LeaseClient._make_acquire_request(resource);
    return this.call(
      this._stub.acquireLease,
      req,
      this._handle_acquire_success.bind(this),
      this._handle_acquire_errors,
      args,
    );
  }

  take(resource = _RESOURCE_BODY, args) {
    const req = LeaseClient._make_take_request(resource);
    return this.call(
      this._stub.takeLease,
      req,
      this._handle_acquire_success.bind(this),
      this._handle_take_errors,
      args,
    );
  }

  return_lease(lease, args) {
    if (this.lease_wallet) this.lease_wallet.remove(lease);
    const req = LeaseClient._make_return_request(lease);
    return this.call(this._stub.returnLease, req, null, this._handle_return_errors, args);
  }

  retain_lease(lease, args) {
    const req = LeaseClient._make_retain_request(lease);
    return this.call(this._stub.retainLease, req, null, common_lease_errors, args);
  }

  list_leases(args) {
    const req = LeaseClient._make_list_leases_request();
    return this.call(this._stub.listLeases, req, this._list_leases_success, common_header_errors, args);
  }

  list_leases_full(include_full_lease_info = false, args) {
    const req = LeaseClient._make_list_leases_request(include_full_lease_info);
    return this.call(this._stub.listLeases, req, null, common_header_errors, args);
  }

  static _make_acquire_request(resource) {
    return new lease_pb.AcquireLeaseRequest().setResource(resource);
  }

  _handle_acquire_success(response) {
    const lease = new Lease(response.getLease());
    if (this.lease_wallet) this.lease_wallet.add(lease);
    return lease;
  }

  _handle_acquire_errors(response) {
    return error_factory(
      response,
      response.getStatus(),
      Object.keys(lease_pb.AcquireLeaseResponse.Status),
      _ACQUIRE_LEASE_STATUS_TO_ERROR,
    );
  }

  static _make_take_request(resource) {
    return new lease_pb.TakeLeaseRequest().setResource(resource);
  }

  _handle_take_errors(response) {
    return error_factory(
      response,
      response.getStatus(),
      Object.keys(lease_pb.TakeLeaseResponse.Status),
      _TAKE_LEASE_STATUS_TO_ERROR,
    );
  }

  static _make_return_request(lease) {
    return new lease_pb.ReturnLeaseRequest().setLease(lease.lease_proto);
  }

  _handle_return_errors(response) {
    return error_factory(
      response,
      response.getStatus(),
      Object.keys(lease_pb.ReturnLeaseResponse.Status),
      _RETURN_LEASE_STATUS_TO_ERROR,
    );
  }

  static _make_retain_request(lease) {
    return new lease_pb.RetainLeaseRequest().setLease(lease.lease_proto);
  }

  static _make_list_leases_request(include_full_lease_info) {
    return new lease_pb.ListLeasesRequest().setIncludeFullLeaseInfo(include_full_lease_info);
  }

  _list_leases_success(response) {
    return response.getResources();
  }
}

class LeaseWalletRequestProcessor {
  constructor(lease_wallet, resource_list = null) {
    this.lease_wallet = lease_wallet;
    this.resource_list = resource_list || [_RESOURCE_BODY];
    this.logger = console;
  }

  mutate(request) {
    const [multiple_leases, skip_mutation] = LeaseWalletRequestProcessor.get_lease_state(request);

    if (skip_mutation) return;

    if (multiple_leases && this.resource_list.length <= 1) {
      // Pass
    } else if (!multiple_leases && this.resource_list.length > 1) {
      this.logger.error('[LEASE] LeaseWalletRequestProcessor assigned multiple leases, but request only wants one.');
    }

    if (multiple_leases) {
      for (const resource of this.resource_list) {
        const lease = this.lease_wallet.advance(resource);
        request.leases.add(lease.getLease());
      }
    } else {
      const lease = this.lease_wallet.advance(this.resource_list[0]);
      request.setLease(lease.lease_proto);
    }
  }

  static get_lease_state(request) {
    let skip_mutation = false;
    let multiple_leases = null;

    let isCatchFirst = false;

    try {
      skip_mutation = request.hasLease();
    } catch (err) {
      let isCatchSecond = false;
      isCatchFirst = true;
      try {
        skip_mutation = request.getLease().length > 0;
      } catch (err2) {
        isCatchSecond = true;
        skip_mutation = true;
      }

      if (!isCatchSecond) multiple_leases = true;
    }

    if (!isCatchFirst) multiple_leases = false;

    return [multiple_leases, skip_mutation];
  }
}

class LeaseWalletResponseProcessor {
  constructor(lease_wallet) {
    this.lease_wallet = lease_wallet;
  }

  mutate(response) {
    let lease_use_results = null;
    try {
      lease_use_results = [response.getLeaseUseResult()];
    } catch (err) {
      try {
        lease_use_results = response.getLeaseUseResult();
      } catch (err2) {
        return;
      }
    }

    for (const result of lease_use_results) {
      this.lease_wallet.on_lease_use_result(result);
    }
  }
}

function add_lease_wallet_processors(client, lease_wallet, resource_list = null) {
  client.request_processors.push(new LeaseWalletRequestProcessor(lease_wallet, resource_list));
  client.response_processors.push(new LeaseWalletResponseProcessor(lease_wallet));
}

class LeaseKeepAlive {
  constructor(
    lease_client,
    lease_wallet = null,
    resource = _RESOURCE_BODY,
    rpc_interval_seconds = 2,
    keep_running_cb = null,
    host_name = '',
    on_failure_callback = null,
    warnings = true,
    must_acquire = false,
    return_at_exit = false,
  ) {
    this.host_name = host_name;
    this.print_warnings = warnings;
    this._must_acquire = must_acquire;
    this._return_at_exit = return_at_exit;
    if (!lease_client) throw new ValueError('lease_client must be set');
    this._lease_client = lease_client;

    if (!lease_wallet) lease_wallet = lease_client.lease_wallet;
    if (!lease_wallet) throw new ValueError('lease_wallet must be set');
    this._lease_wallet = lease_wallet;

    if (!resource) throw new ValueError('resource must be set');
    this._resource = resource;

    if (rpc_interval_seconds <= 0.0) {
      throw new ValueError(`rpc_interval_seconds must be > 0, was ${rpc_interval_seconds}`);
    }
    this._rpc_interval_seconds = rpc_interval_seconds;

    this.logger = console;

    this._keep_running = keep_running_cb || (() => true);
    this._retain_lease_failed_cb = on_failure_callback || (() => null);
    this._end_check_in_signal = false;

    process.on('beforeExit', async () => {
      if (this._return_at_exit) {
        await this.shutdown.bind(this)();
      } else {
        this.shutdown.bind(this)();
      }
      process.exit(0);
    });
  }

  async init(must_acquire) {
    try {
      await this._lease_wallet.get_lease(this._resource);
    } catch (e) {
      try {
        await this._lease_client.acquire(this._resource);
      } catch (err) {
        if (must_acquire || this._must_acquire) {
          throw new Error();
        }
        console.error(`Failed to acquire the lease in LeaseKeepAlive`, err);
      }
    }
    this._thread = setImmediate(this._periodic_check_in.bind(this)).unref();
  }

  async shutdown() {
    this.logger.debug('Shutting down');
    this._end_periodic_check_in();
    this.wait_until_done();
    if (this._return_at_exit) {
      try {
        await this._lease_client.return_lease(this.lease_wallet.get_lease(this._resource), { timeout: 2_000 });
      } catch (e) {
        if (e instanceof RpcError) {
          console.error(`Failed to return the lease at the end:`, e);
        }
      }
    }
  }

  is_alive() {
    return false;
  }

  get lease_wallet() {
    return this._lease_wallet;
  }

  wait_until_done() {
    // This._thread.join();
  }

  _end_periodic_check_in() {
    this.logger.debug('Stopping check-in');
    this._end_check_in_signal = true;
    clearImmediate(this._thread);
  }

  _ok() {
    this.logger.debug('Check-in successful');
  }

  _check_in() {
    const lease = this._lease_wallet.get_lease(this._resource);
    if (!lease) return null;
    return this._lease_client.retain_lease(lease);
  }

  async _periodic_check_in() {
    this.logger.info('Starting lease check-in');
    /* eslint-disable no-constant-condition, no-await-in-loop */
    while (true) {
      const exec_start = Date.now();

      if (!this._keep_running()) break;

      let isCatch = false;

      try {
        await this._check_in();
      } catch (e) {
        isCatch = true;
        if (this.print_warnings) {
          this.logger.warn(`Generic exception during check-in:\n${e}\n(resuming check-in)`);
        }
        this._retain_lease_failed_cb(e);
      }

      if (!isCatch) {
        this._ok();
      }

      const exec = Date.now() - exec_start;

      if (await sleep(this._rpc_interval_seconds * 1000 - exec, this._end_check_in_signal)) break;
    }
    this.logger.info('Lease check-in stopped');
  }
}

function test_active_lease(incoming_lease_proto, active_lease, sublease_name = null, allow_super_leases = false) {
  const lease_use_result = new lease_pb.LeaseUseResult();
  lease_use_result.setAttemptedLease(incoming_lease_proto.clone());

  let incoming_lease;

  try {
    incoming_lease = new Lease(incoming_lease_proto);
    if (sublease_name !== null) {
      incoming_lease = incoming_lease.create_sublease(sublease_name);
    }
  } catch (e) {
    lease_use_result.setStatus(lease_pb.LeaseUseResult.Status.STATUS_INVALID_LEASE);
    return [lease_use_result, null];
  }

  if (active_lease === null) {
    lease_use_result.setLatestKnownLease(incoming_lease.lease_proto.clone());
    lease_use_result.setStatus(lease_pb.LeaseUseResult.Status.STATUS_OK);
    return [lease_use_result, incoming_lease];
  }

  if (!active_lease.is_valid_lease()) {
    throw new Error('The active lease object is invalid.');
  }

  lease_use_result.setPreviousLease(active_lease.lease_proto.clone());
  lease_use_result.setLatestKnownLease(active_lease.lease_proto.clone());

  const compare_result = incoming_lease.compare(active_lease);
  lease_use_result.setStatus(Lease.compare_result_to_lease_use_result_status(compare_result, allow_super_leases));
  if (
    lease_use_result.getStatus() === lease_pb.LeaseUseResult.Status.STATUS_OK &&
    compare_result !== Lease.CompareResult.SUPER_LEASE
  ) {
    lease_use_result.setLatestKnownLease(incoming_lease.lease_proto.clone());
  }
  return [lease_use_result, incoming_lease];
}

module.exports = {
  LeaseResponseError,
  InvalidLeaseError,
  DisplacedLeaseError,
  InvalidResourceError,
  NotAuthoritativeServiceError,
  ResourceAlreadyClaimedError,
  RevokedLeaseError,
  UnmanagedResourceError,
  WrongEpochError,
  NotActiveLeaseError,
  NoSuchLease,
  LeaseNotOwnedByWallet,
  Lease,
  LeaseState,
  LeaseWallet,
  LeaseClient,
  LeaseWalletRequestProcessor,
  LeaseWalletResponseProcessor,
  add_lease_wallet_processors,
  LeaseKeepAlive,
  test_active_lease,
};
