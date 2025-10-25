'use strict';

const assert = require('node:assert/strict');

const { LeaseClient, Lease } = require('./lease');
const { ResourceHierarchy } = require('./lease_resource_hierarchy');
const { LoggerUtil } = require('./loggerUtil');

const leasePb = require('../bosdyn/api/lease_pb');

const _LOGGER = LoggerUtil.getLogger('LeaseValidator');

/**
 * Lease validator tracks lease usage in intermediate services.
 * Track the most recent leases seen for each lease resource and test incoming leases against this
 * state.
 */
class LeaseValidator {
  /**
   * @param {Robot} robot The robot object for which leases are associated to.
   */
  constructor(robot) {
    /** @type {Object<string, Lease>} */
    this.activeLeaseMap = {};
    this.hierarchy = null;

    this.robot = robot;
  }

  async initialize() {
    if (this.robot) {
      await this.#initializeHierarchy(this.robot);
    }
  }

  async #initializeHierarchy(robot) {
    try {
      /** @type {LeaseClient} */
      const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
      const listLeasesResponse = await leaseClient.listLeasesFull();
      this.hierarchy = new ResourceHierarchy(listLeasesResponse.getResourceTree());
    } catch (err) {
      _LOGGER.error(`Unable to set the resource hierarchy for robot ${robot.host}'s LeaseValidator.`);
    }
  }

  /**
   * Get the latest active lease.
   * @param {string} resource the resource for the specific lease to be returned.
   * @returns {Lease|null}
   */
  getActiveLease(resource) {
    if (this.hierarchy && !this.hierarchy.hasResource(resource)) {
      return null;
    }
    if (!(resource in this.activeLeaseMap)) {
      return null;
    }
    return this.activeLeaseMap[resource];
  }

  /**
   * Helper function to validate the lease and compare it to the active lease.
   * @param {Lease|leasePb.Lease} incomingLease The incoming lease to test.
   * @param {boolean} allowSuperLeases Should the comparison function consider a super lease as
   * ok.
   * @param {boolean} allowDifferentEpoch Should the comparison function consider a different epoch as ok.
   * @returns {leasePb.LeaseUseResult}
   */
  testActiveLease(incomingLease, allowSuperLeases, allowDifferentEpoch = false) {
    const leaseUseResults = new leasePb.LeaseUseResult();
    const [status, previousLease] = this._testActiveLeaseHelper(incomingLease, allowSuperLeases, allowDifferentEpoch);
    leaseUseResults.setStatus(status);
    this._populateBaseLeaseUseResults(incomingLease, previousLease, leaseUseResults);
    return leaseUseResults;
  }

  /**
   * Compare an incoming lease to the latest active lease, and if it is ok then set it as
   * the latest lease.
   * @param {Lease|leasePb.Lease} incomingLease The incoming lease to test.
   * @param {boolean} allowSuperLeases Should the comparison function consider a super lease as
   * ok.
   * @param {boolean} allowDifferentEpoch Should the comparison function consider a different epoch as ok.
   * @returns {leasePb.LeaseUseResult}
   */
  testAndSetActiveLease(incomingLease, allowSuperLeases, allowDifferentEpoch = false) {
    const leaseUseResults = new leasePb.LeaseUseResult();
    const [status, previousLease] = this._testActiveLeaseHelper(incomingLease, allowSuperLeases, allowDifferentEpoch);
    if (status === leasePb.LeaseUseResult.Status.STATUS_OK) {
      this._setActiveLease(incomingLease);
    }
    leaseUseResults.setStatus(status);
    this._populateBaseLeaseUseResults(incomingLease, previousLease, leaseUseResults);
    return leaseUseResults;
  }

  /**
   * Get the active lease for a resource.
   * @param {string} resource the resource for the specific lease to be returned.
   * @returns {Lease|null}
   */
  _getActiveLease(resource) {
    if (this.hierarchy !== null && !this.hierarchy.hasResource(resource)) {
      return null;
    }
    if (!(resource in this.activeLeaseMap)) {
      return null;
    }
    return this.activeLeaseMap[resource];
  }

  /**
   * Helper function to validate the lease and compare it to the active lease.
   * @param {Lease|leasePb.Lease} incomingLease The incoming lease to test.
   * @param {boolean} allowSuperLease Should the comparison function consider a super lease as
   * ok.
   * @param {boolean} allowDifferentEpoch Should the comparison function consider a different epoch as ok.
   * @returns {any[]}
   */
  _testActiveLeaseHelper(incomingLease, allowSuperLease, allowDifferentEpoch = false) {
    // Convert the lease into a Lease class object.
    if (incomingLease instanceof leasePb.Lease) {
      if (!Lease.isValidProto(incomingLease)) {
        return [leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE, null];
      }
      incomingLease = new Lease(incomingLease);
    } else if (!incomingLease.isValidLease()) {
      return [leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE, null];
    }

    // Check if the lease resource is in the hierarchy.
    const rescOfInterest = incomingLease.leaseProto.getResource();
    let currentLease;
    if (this.hierarchy !== null) {
      if (!this.hierarchy.hasResource(rescOfInterest)) {
        return [leasePb.LeaseUseResult.Status.STATUS_UNMANAGED, null];
      }

      // Determine the latest maximum lease.
      const currentLeaseProto = this._maximumLease(this.hierarchy.getHierarchy(rescOfInterest));
      if (!Lease.isValidProto(currentLeaseProto)) {
        // If the current lease proto is invalid/empty, then we will accept the incoming lease so mark it as ok!
        return [leasePb.LeaseUseResult.Status.STATUS_OK, null];
      }
      currentLease = new Lease(currentLeaseProto);
    } else {
      // If for some reason we don't have the hierarchy, then fall back on just the active lease map.
      if (!(rescOfInterest in this.activeLeaseMap)) {
        // If the current lease proto is invalid/empty, then we will accept the incoming lease so mark it as ok!
        return [leasePb.LeaseUseResult.Status.STATUS_OK, null];
      }
      currentLease = this.activeLeaseMap[rescOfInterest];
    }

    const compareResult = incomingLease.compare(currentLease);
    assert.notStrictEqual(
      compareResult,
      Lease.CompareResult.DIFFERENT_RESOURCES,
      // eslint-disable-next-line max-len
      `Mismatched resources (${incomingLease.leaseProto.getResource()} vs ${currentLease.leaseProto.getResource()}) when comparing leases in the LeaseValidator.`,
    );
    if (compareResult === Lease.CompareResult.DIFFERENT_EPOCHS) {
      if (allowDifferentEpoch) {
        return [leasePb.LeaseUseResult.Status.STATUS_OK, currentLease];
      } else {
        return [leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH, currentLease];
      }
    } else if (compareResult === Lease.CompareResult.SUPER_LEASE) {
      if (allowSuperLease) {
        return [leasePb.LeaseUseResult.Status.STATUS_OK, currentLease];
      } else {
        // If super leases are not allowed, then mark this as older.
        return [leasePb.LeaseUseResult.Status.STATUS_OLDER, currentLease];
      }
    } else if (compareResult === Lease.CompareResult.OLDER) {
      return [leasePb.LeaseUseResult.Status.STATUS_OLDER, currentLease];
    } else if (
      [Lease.CompareResult.SUB_LEASE, Lease.CompareResult.SAME, Lease.CompareResult.NEWER].includes(compareResult)
    ) {
      return [leasePb.LeaseUseResult.Status.STATUS_OK, currentLease];
    }

    // We should not end up here since all compare results should be enumerated.
    throw new Error(`The compare_result case [${compareResult}] is unhandled by the LeaseValidator.`);
  }

  /**
   * Helper set the active lease tracked for the specific lease resource.
   * @param {Lease|leasePb.Lease} incomingLease The incoming lease to set.
   */
  _setActiveLease(incomingLease) {
    // Convert the lease into a Lease class object.
    if (incomingLease instanceof leasePb.Lease) {
      incomingLease = new Lease(incomingLease);
    }
    this.activeLeaseMap[incomingLease.leaseProto.getResource()] = incomingLease;
    if (this.hierarchy) {
      for (const leaf of this.hierarchy.leafResources()) {
        const leafLeaseProto = incomingLease.leaseProto.clone();
        leafLeaseProto.setResource(leaf);
        this.activeLeaseMap[leaf] = new Lease(leafLeaseProto);
      }
    }
  }

  /**
   * Updates a mutable copy of the LeaseUseResult to fill out the debug fields.
   * @param {Lease} attemptedLease The incoming/requested lease.
   * @param {Lease} previousLease Optional previous lease that was last considered
   * the latest active lease.
   * @param {leasePb.LeaseUseResult} mutableLeaseUseResults The LeaseUseResult to populate
   */
  _populateBaseLeaseUseResults(attemptedLease, previousLease, mutableLeaseUseResults) {
    if (attemptedLease instanceof Lease) {
      attemptedLease = attemptedLease.leaseProto;
    }

    mutableLeaseUseResults.setAttemptedLease(attemptedLease.clone());

    if (previousLease && previousLease.leaseProto) {
      mutableLeaseUseResults.setPreviousLease(previousLease.leaseProto);
    }

    const latestKnownLease = this._getActiveLease(attemptedLease.getResource());
    if (latestKnownLease && latestKnownLease.leaseProto) {
      mutableLeaseUseResults.setLatestKnownLease(latestKnownLease.leaseProto);
    }

    if (this.hierarchy) {
      for (const leaf of this.hierarchy.leafResources()) {
        if (leaf in this.activeLeaseMap) {
          mutableLeaseUseResults.setLatestResourcesList([this.activeLeaseMap[leaf].leaseProto]);
        }
      }
    }
  }

  /**
   * Determine the latest maximum lease.
   * @param {ResourceHierarchy} hierarchy The resurce hierarchy
   * @returns {leasePb.Lease}
   */
  _maximumLease(hierarchy) {
    const leaseProto = new leasePb.Lease().setResource(hierarchy.getResource());

    // Determine the epoch for the maximum lease proto.
    for (const leaf of hierarchy.leafResources()) {
      if (leaf in this.activeLeaseMap) {
        const leafLease = this.activeLeaseMap[leaf];
        if (!leafLease.isValidLease()) {
          continue;
        }
        // Set the epoch if it is not yet set.
        if (!leaseProto.getEpoch()) {
          leaseProto.setEpoch(leafLease.leaseProto.getEpoch());
        }

        const result = new Lease(leaseProto, true).compare(leafLease, true);

        if ([Lease.CompareResult.OLDER, Lease.CompareResult.SUPER_LEASE].includes(result)) {
          leaseProto.setClientNamesList(leafLease.leaseProto.getClientNamesList());
          leaseProto.setSequenceList(leafLease.leaseProto.getSequenceList());
        }
      }
    }
    return leaseProto;
  }
}

/**
 * LeaseValidatorResponseProcessor updates the lease validator using the
 * latest_known_lease from the response's LeaseUseResult.
 */
class LeaseValidatorResponseProcessor {
  /**
   * @param {LeaseValidator} leaseValidator validator for a specific robot to be updated.
   */
  constructor(leaseValidator) {
    /** @type {LeaseValidator} */
    this.leaseValidator = leaseValidator;
  }

  /**
   * Update the lease validator if a response has a lease_use_result.
   * @param {any} response The request mutate
   * @returns {void}
   */
  mutate(response) {
    let leaseUseResults;
    try {
      leaseUseResults = [response.getLeaseUseResult()];
    } catch (_) {
      try {
        leaseUseResults = response.getLeaseUseResultsList();
      } catch (e) {
        return;
      }
    }

    for (const result of leaseUseResults) {
      if (result.getStatus() === leasePb.LeaseUseResult.Status.STATUS_UNKNOWN) {
        continue;
      }

      this.leaseValidator.testAndSetActiveLease(result.getLatestKnownLease(), false);
    }
  }
}

module.exports = {
  LeaseValidator,
  LeaseValidatorResponseProcessor,
};
