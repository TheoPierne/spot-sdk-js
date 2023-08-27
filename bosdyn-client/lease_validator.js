'use strict';

const assert = require('node:assert/strict');

const { LeaseClient, Lease } = require('./lease');
const { ResourceHierarchy } = require('./lease_resource_hierarchy');
const { LoggerUtil } = require('./loggerUtil');

const lease_pb = require('../bosdyn/api/lease_pb');

const _LOGGER = LoggerUtil.getLogger('LeaseValidator');

class LeaseValidator {
  #robot;
  #initPromise;

  constructor(robot) {
    this.active_lease_map = {};
    this.hierarchy = null;

    this.#robot = robot;
  }

  #init() {
    if (!this.#initPromise) {
      this.#initPromise = this.#doInit();
    }

    return this.#initPromise;
  }

  async #doInit() {
    if (this.#robot) {
      let list_leases_response,
        isCatch = false;
      try {
        const lease_client = this.#robot.ensure_client(LeaseClient.default_service_name);
        list_leases_response = await lease_client.list_leases_full();
      } catch (e) {
        isCatch = true;
        _LOGGER.error(`Unable to set the resource hierarchy for robot ${this.#robot.host}'s LeaseValidator.`);
      }

      if (!isCatch) {
        this.hierarchy = new ResourceHierarchy(list_leases_response.getResourceTree());
      }
    }
  }

  async get_active_lease(resource) {
    await this.#init();

    if (this.hierarchy && !this.hierarchy.has_resource(resource)) {
      return null;
    }
    if (!(resource in this.active_lease_map)) {
      return null;
    }
    return this.active_lease_map[resource];
  }

  async test_active_lease(incoming_lease, allow_super_leases, allow_different_epoch = false) {
    await this.#init();
    const lease_use_results = new lease_pb.LeaseUseResult();
    const [status, previous_lease] = this._test_active_lease_helper(
      incoming_lease,
      allow_super_leases,
      allow_different_epoch,
    );
    lease_use_results.setStatus(status);
    this._populate_base_lease_use_results(incoming_lease, previous_lease, lease_use_results);
    return lease_use_results;
  }

  async test_and_set_active_lease(incoming_lease, allow_super_leases, allow_different_epoch = false) {
    await this.#init();
    const lease_use_results = new lease_pb.LeaseUseResult();
    const [status, previous_lease] = this._test_active_lease_helper(
      incoming_lease,
      allow_super_leases,
      allow_different_epoch,
    );
    if (status === lease_pb.LeaseUseResult.Status.STATUS_OK) {
      this._set_active_lease(incoming_lease);
    }
    lease_use_results.setStatus(status);
    this._populate_base_lease_use_results(incoming_lease, previous_lease, lease_use_results);
    return lease_use_results;
  }

  _get_active_lease(resource) {
    if (this.hierarchy !== null && !this.hierarchy.has_resource(resource)) {
      return null;
    }
    if (!(resource in this.active_lease_map)) {
      return null;
    }
    return this.active_lease_map[resource];
  }

  _test_active_lease_helper(incoming_lease, allow_super_lease, allow_different_epoch = false) {
    // Convert the lease into a Lease class object.
    if (incoming_lease instanceof lease_pb.Lease) {
      if (Lease.is_valid_proto(incoming_lease)) {
        return [lease_pb.LeaseUseResult.Status.STATUS_INVALID_LEASE, null];
      }
      incoming_lease = new Lease(incoming_lease);
    } else if (!incoming_lease.is_valid_lease()) {
      return [lease_pb.LeaseUseResult.Status.STATUS_INVALID_LEASE, null];
    }

    // Check if the lease resource is in the hierarchy.
    const resc_of_interest = incoming_lease.lease_proto.getResource();
    let current_lease;
    if (this.hierarchy !== null) {
      if (!this.hierarchy.has_resource(resc_of_interest)) {
        return [lease_pb.LeaseUseResult.Status.STATUS_UNMANAGED, null];
      }

      // Determine the latest maximum lease.
      const current_lease_proto = this._maximum_lease(this.hierarchy.get_hierarchy(resc_of_interest));
      if (!Lease.is_valid_proto(current_lease_proto)) {
        // If the current lease proto is invalid/empty, then we will accept the incoming lease so mark it as ok!
        return [lease_pb.LeaseUseResult.Status.STATUS_OK, null];
      }
      current_lease = new Lease(current_lease_proto);
    } else {
      // If for some reason we don't have the hierarchy, then fall back on just the active lease map.
      if (!(resc_of_interest in this.active_lease_map)) {
        // If the current lease proto is invalid/empty, then we will accept the incoming lease so mark it as ok!
        return [lease_pb.LeaseUseResult.Status.STATUS_OK, null];
      }
      current_lease = this.active_lease_map[resc_of_interest];
    }

    const compare_result = incoming_lease.compare(current_lease);
    assert.notStrictEqual(
      compare_result,
      Lease.CompareResult.DIFFERENT_RESOURCES,
      `Mismatched resources (${incoming_lease.lease_proto.getResource()} vs ${current_lease.lease_proto.getResource()}) when comparing leases in the LeaseValidator.`,
    );
    if (compare_result === Lease.CompareResult.DIFFERENT_EPOCHS) {
      if (allow_different_epoch) {
        return [lease_pb.LeaseUseResult.Status.STATUS_OK, current_lease];
      } else {
        return [lease_pb.LeaseUseResult.Status.STATUS_WRONG_EPOCH, current_lease];
      }
    } else if (compare_result === Lease.CompareResult.SUPER_LEASE) {
      if (allow_super_lease) {
        return [lease_pb.LeaseUseResult.Status.STATUS_OK, current_lease];
      } else {
        // If super leases are not allowed, then mark this as older.
        return [lease_pb.LeaseUseResult.Status.STATUS_OLDER, current_lease];
      }
    } else if (compare_result === Lease.CompareResult.OLDER) {
      return [lease_pb.LeaseUseResult.Status.STATUS_OLDER, current_lease];
    } else if (
      [Lease.CompareResult.SUB_LEASE, Lease.CompareResult.SAME, Lease.CompareResult.NEWER].includes(compare_result)
    ) {
      return [lease_pb.LeaseUseResult.Status.STATUS_OK, current_lease];
    }

    // We should not end up here since all compare results should be enumerated.
    throw new Error(`The compare_result case [${compare_result}] is unhandled by the LeaseValidator.`);
  }

  _set_active_lease(incoming_lease) {
    // Convert the lease into a Lease class object.
    if (incoming_lease instanceof lease_pb.Lease) {
      incoming_lease = new Lease(incoming_lease);
    }
    this.active_lease_map[incoming_lease.lease_proto.getResource()] = incoming_lease;
    if (this.hierarchy) {
      for (const leaf of this.hierarchy.leaf_resources()) {
        const leaf_lease_proto = incoming_lease.lease_proto.clone();
        leaf_lease_proto.setResource(leaf);
        this.active_lease_map[leaf] = new Lease(leaf_lease_proto);
      }
    }
  }

  _populate_base_lease_use_results(attempted_lease, previous_lease, mutable_lease_use_results) {
    if (attempted_lease instanceof Lease) {
      attempted_lease = attempted_lease.lease_proto;
    }

    mutable_lease_use_results.setAttemptedLease(attempted_lease);

    if (previous_lease) {
      mutable_lease_use_results.setPreviousLease(previous_lease?.lease_proto);
    }

    const latest_known_lease = this._get_active_lease(attempted_lease.resource);
    if (latest_known_lease) {
      mutable_lease_use_results.setLatestKnownLease(latest_known_lease?.lease_proto);
    }

    if (this.hierarchy) {
      for (const leaf of this.hierarchy.leaf_resources()) {
        if (leaf in this.active_lease_map) {
          mutable_lease_use_results.setLatestResourcesList([this.active_lease_map[leaf].lease_proto]);
        }
      }
    }
  }

  _maximum_lease(hierarchy) {
    const lease_proto = new lease_pb.Lease().setResource(hierarchy.get_resource());

    // Determine the epoch for the maximum lease proto.
    for (const leaf of hierarchy.leaf_resources()) {
      if (leaf in this.active_lease_map) {
        const leaf_lease = this.active_lease_map[leaf];
        if (!leaf_lease.is_valid_lease()) {
          continue;
        }
        // Set the epoch if it is not yet set.
        if (lease_proto.getEpoch() === '') {
          lease_proto.setEpoch(leaf_lease.lease_proto.getEpoch());
        }

        const result = new Lease(lease_proto, true).compare(leaf_lease, true);

        if ([Lease.CompareResult.OLDER, Lease.CompareResult.SUPER_LEASE].includes(result)) {
          lease_proto.setClientNamesList(leaf_lease.lease_proto.getClientNamesList());
          lease_proto.setSequenceList(leaf_lease.lease_proto.getSequenceList());
        }
      }
    }
    return lease_proto;
  }
}

class LeaseValidatorResponseProcessor {
  constructor(lease_validator) {
    this.lease_validator = lease_validator;
  }

  async mutate(response) {
    let lease_use_results;
    try {
      lease_use_results = [response.getLeaseUseResult()];
    } catch (_) {
      try {
        lease_use_results = response.getLeaseUseResult();
      } catch (e) {
        return;
      }
    }

    const promises = [];
    for (const result of lease_use_results) {
      if (result.getStatus() === lease_pb.LeaseUseResult.Status.STATUS_UNKNOWN) {
        continue;
      }

      promises.push(this.lease_validator.test_and_set_active_lease(result.getLatestKnownLease(), false));
    }

    await Promise.allSettled(promises);
  }
}

module.exports = {
  LeaseValidator,
  LeaseValidatorResponseProcessor,
};
