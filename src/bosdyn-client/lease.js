/**
 * @file Clients and helpers for the lease service: LeaseClient, the LeaseWallet, LeaseKeepAlive and the lease errors.
 */

'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const {
  BaseClient,
  commonLeaseErrors,
  commonHeaderErrors,
  errorFactory,
  handleCommonHeaderErrors,
} = require('./common');
const { ResponseError, ValueError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { DefaultDict, checkOptions } = require('./util');

const leasePb = require('../bosdyn/api/lease_pb');
const { LeaseServiceClient } = require('../bosdyn/api/lease_service_grpc_pb');

/**
 * @typedef {import('./exceptions').InternalServerError} InternalServerError
 * @typedef {import('./exceptions').LeaseUseError} LeaseUseError
 */

const _RESOURCE_BODY = 'body';

/** General class of errors for LeaseResponseError service. */
class LeaseResponseError extends ResponseError {}
/** The provided lease is invalid. */
class InvalidLeaseError extends LeaseResponseError {}
/** Lease is older than the current lease. */
class DisplacedLeaseError extends LeaseResponseError {}
/** Resource is not known to the LeaseService. */
class InvalidResourceError extends LeaseResponseError {}
/** LeaseService is not authoritative so Acquire should not work. */
class NotAuthoritativeServiceError extends LeaseResponseError {}
/** Use TakeLease method to forcefully grab the already claimed lease. */
class ResourceAlreadyClaimedError extends LeaseResponseError {}
/** Lease is stale because the lease-holder did not check in regularly enough. */
class RevokedLeaseError extends LeaseResponseError {}
/** LeaseService does not manage this resource. */
class UnmanagedResourceError extends LeaseResponseError {}
/** Lease is for the wrong epoch. */
class WrongEpochError extends LeaseResponseError {}
/** Lease is not the active lease. */
class NotActiveLeaseError extends LeaseResponseError {}

/**
 * The requested lease does not exist.
 */
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

/**
 * The lease is not owned by the wallet.
 */
class LeaseNotOwnedByWallet extends Error {
  constructor(resource, leaseState) {
    super(`Lease on "${resource}" has state (${leaseState?.leaseStatus ? leaseState.leaseStatus : '<unknown>'})`);
    this.name = 'LeaseNotOwnedByWallet';
    this.resource = resource;
    this.leaseState = leaseState;
  }

  toString() {
    let state;
    try {
      state = this.leaseState.leaseStatus;
    } catch (e) {
      state = '<unknown>';
    }
    return `Lease on "${this.resource}" has state (${state})`;
  }
}

const _ACQUIRE_LEASE_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_ACQUIRE_LEASE_STATUS_TO_ERROR.set(leasePb.AcquireLeaseResponse.Status.STATUS_OK, [null, null]);
_ACQUIRE_LEASE_STATUS_TO_ERROR.set(leasePb.AcquireLeaseResponse.Status.STATUS_RESOURCE_ALREADY_CLAIMED, [
  ResourceAlreadyClaimedError,
  'Use TakeLease method to forcefully grab the already claimed lease.',
]);
_ACQUIRE_LEASE_STATUS_TO_ERROR.set(leasePb.AcquireLeaseResponse.Status.STATUS_INVALID_RESOURCE, [
  InvalidResourceError,
  'Resource is not known to the LeaseService.',
]);
_ACQUIRE_LEASE_STATUS_TO_ERROR.set(leasePb.AcquireLeaseResponse.Status.STATUS_NOT_AUTHORITATIVE_SERVICE, [
  NotAuthoritativeServiceError,
  'LeaseService is not authoritative so Acquire should not work.',
]);

const _TAKE_LEASE_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_TAKE_LEASE_STATUS_TO_ERROR.set(leasePb.TakeLeaseResponse.Status.STATUS_OK, [null, null]);
_TAKE_LEASE_STATUS_TO_ERROR.set(leasePb.TakeLeaseResponse.Status.STATUS_INVALID_RESOURCE, [
  InvalidResourceError,
  'Resource is not known to the LeaseService.',
]);
_TAKE_LEASE_STATUS_TO_ERROR.set(leasePb.TakeLeaseResponse.Status.STATUS_NOT_AUTHORITATIVE_SERVICE, [
  NotAuthoritativeServiceError,
  'LeaseService is not authoritative so Acquire should not work.',
]);

const _RETURN_LEASE_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_RETURN_LEASE_STATUS_TO_ERROR.set(leasePb.ReturnLeaseResponse.Status.STATUS_OK, [null, null]);
_RETURN_LEASE_STATUS_TO_ERROR.set(leasePb.ReturnLeaseResponse.Status.STATUS_INVALID_RESOURCE, [
  InvalidResourceError,
  'Resource is not known to the LeaseService.',
]);
_RETURN_LEASE_STATUS_TO_ERROR.set(leasePb.ReturnLeaseResponse.Status.STATUS_NOT_ACTIVE_LEASE, [
  NotActiveLeaseError,
  'Lease is not the active lease.',
]);
_RETURN_LEASE_STATUS_TO_ERROR.set(leasePb.ReturnLeaseResponse.Status.STATUS_NOT_AUTHORITATIVE_SERVICE, [
  NotAuthoritativeServiceError,
  'LeaseService is not authoritative so Acquire should not work.',
]);

const _handleAcquireErrors = handleCommonHeaderErrors(response =>
  errorFactory(response, response.getStatus(), leasePb.AcquireLeaseResponse.Status, _ACQUIRE_LEASE_STATUS_TO_ERROR),
);

const _handleTakeErrors = handleCommonHeaderErrors(response =>
  errorFactory(response, response.getStatus(), leasePb.TakeLeaseResponse.Status, _TAKE_LEASE_STATUS_TO_ERROR),
);

const _handleReturnErrors = handleCommonHeaderErrors(response =>
  errorFactory(response, response.getStatus(), leasePb.ReturnLeaseResponse.Status, _RETURN_LEASE_STATUS_TO_ERROR),
);

/**
 * Leases are used to coordinate access to shared resources on a Boston Dynamics robot.
 * A service will grant access to the shared resource if the lease which accompanies a request is
 * "more recent" than any previously seen leases. Recency is determined using a sequence of
 * monotonically increasing numbers, similar to a Lamport logical clock.
 */
class Lease {
  /**
   * Enum for comparison results between two leases.
   * @enum
   * @static
   */
  static CompareResult = {
    SAME: 1,
    SUPER_LEASE: 2,
    SUB_LEASE: 3,
    OLDER: 4,
    NEWER: 5,
    DIFFERENT_RESOURCES: 6,
    DIFFERENT_EPOCHS: 7,
  };

  constructor(leaseProto, ignoreIsValidCheck = false) {
    if (!ignoreIsValidCheck && !Lease.isValidProto(leaseProto)) {
      throw new ValueError(`invalid lease_proto: ${JSON.stringify(!leaseProto ? null : leaseProto.toObject())}`);
    }

    /** @type {leasePb.Lease} */
    this.leaseProto = leaseProto;
  }

  /**
   * Compare two different lease objects.
   * @param {Lease} otherLease The lease to compare this lease with.
   * @param {boolean} ignoreResources Bypass resources checking
   * @returns {number}
   */
  compare(otherLease, ignoreResources = false) {
    if (this.leaseProto.getResource() !== otherLease.leaseProto.getResource() && !ignoreResources) {
      return Lease.CompareResult.DIFFERENT_RESOURCES;
    }

    if (this.leaseProto.getEpoch() !== otherLease.leaseProto.getEpoch()) {
      return Lease.CompareResult.DIFFERENT_EPOCHS;
    }

    const sequenceSize = this.leaseProto.getSequenceList().length;
    const otherSequenceSize = otherLease.leaseProto.getSequenceList().length;
    const commonSequenceSize = Math.min(sequenceSize, otherSequenceSize);

    for (let i = 0; i < commonSequenceSize; i++) {
      const sequenceNum = this.leaseProto.getSequenceList()[i];
      const otherSequenceNum = otherLease.leaseProto.getSequenceList()[i];
      if (sequenceNum < otherSequenceNum) {
        return Lease.CompareResult.OLDER;
      } else if (sequenceNum > otherSequenceNum) {
        return Lease.CompareResult.NEWER;
      }
    }

    if (sequenceSize < otherSequenceSize) {
      return Lease.CompareResult.SUPER_LEASE;
    } else if (sequenceSize > otherSequenceSize) {
      return Lease.CompareResult.SUB_LEASE;
    }

    return Lease.CompareResult.SAME;
  }

  /**
   * Creates a new Lease which is newer than this Lease.
   * @returns {Lease}
   */
  createNewer() {
    const incrLeaseProto = this.leaseProto.clone();
    const list = incrLeaseProto.getSequenceList();
    list[list.length - 1] = this.leaseProto.getSequenceList()[this.leaseProto.getSequenceList().length - 1] + 1;
    incrLeaseProto.setSequenceList(list);
    return new Lease(incrLeaseProto);
  }

  /**
   * Creates a sublease of this lease.
   * @param {string} clientName Optional argument to pass a client name to be appended to
   * the new lease's set of clients which have used it.
   * @returns {Lease}
   */
  createSublease(clientName = null) {
    const subLeaseProto = this.leaseProto.clone();
    subLeaseProto.addSequence(0);
    if (clientName !== null) subLeaseProto.addClientNames(clientName);
    return new Lease(subLeaseProto);
  }

  /**
   * Checks whether this lease is valid.
   * @param {leasePb.Lease} leaseProto The lease proto to check validity
   * @returns {boolean}
   */
  static isValidProto(leaseProto) {
    return leaseProto && leaseProto.getResource().length > 0 && leaseProto.getSequenceList().length > 0;
  }

  /**
   * Non static version of is_valid_proto
   * @returns {boolean}
   */
  isValidLease() {
    return Lease.isValidProto(this.leaseProto);
  }

  /**
   * Determines the comparable LeaseUseResult.Status enum value based on the CompareResult enum.
   * @param {number} compareResult The result value to be compared.
   * @param {boolean} allowSuperLeases If true, a super lease will still be considered as "ok"
   * newer when compared to the active lease.
   * @returns {number}
   * @throws {Error} Throwed if there is an unknown compare result enum value.
   */
  static compareResultToLeaseUseResultStatus(compareResult, allowSuperLeases) {
    if (compareResult === Lease.CompareResult.DIFFERENT_EPOCHS) {
      return leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH;
    } else if (compareResult === Lease.CompareResult.DIFFERENT_RESOURCES) {
      return leasePb.LeaseUseResult.Status.STATUS_UNMANAGED;
    } else if (compareResult === Lease.CompareResult.SUPER_LEASE) {
      if (allowSuperLeases) return leasePb.LeaseUseResult.Status.STATUS_OK;
      return leasePb.LeaseUseResult.Status.STATUS_OLDER;
    } else if (compareResult === Lease.CompareResult.OLDER) {
      return leasePb.LeaseUseResult.Status.STATUS_OLDER;
    } else if (
      compareResult === Lease.CompareResult.SAME ||
      compareResult === Lease.CompareResult.SUB_LEASE ||
      compareResult === Lease.CompareResult.NEWER
    ) {
      return leasePb.LeaseUseResult.Status.STATUS_OK;
    } else {
      throw new Error('The comparison result of the leases is unknown/unaccounted for.');
    }
  }
}

/**
 * State of lease ownership in the wallet.
 */
class LeaseState {
  static Status = {
    STATUS_UNOWNED: 0,
    STATUS_REVOKED: 1,
    STATUS_SELF_OWNER: 2,
    STATUS_OTHER_OWNER: 3,
    STATUS_NOT_MANAGED: 4,
  };

  constructor(leaseStatus, leaseOwner = null, lease = null, leaseCurrent = null, clientName = null) {
    /** @type {number} */
    this.leaseStatus = leaseStatus;

    /** @type {leasePb.LeaseOwner} */
    this.leaseOwner = leaseOwner;

    /** @type {Lease} */
    this.leaseOriginal = lease;

    /** @type {string} */
    this.clientName = clientName;
    if (leaseCurrent) {
      /** @type {Lease} */
      this.leaseCurrent = leaseCurrent;
    } else if (lease) {
      /** @type {Lease} */
      this.leaseCurrent = this.leaseOriginal.createSublease(this.clientName);
    } else {
      /** @type {null} */
      this.leaseCurrent = null;
    }
  }

  /**
   * Create newer version of the Lease.
   * @returns {LeaseState}
   */
  createNewer() {
    if (!this.leaseCurrent) return this;
    return new LeaseState(this.leaseStatus, this.leaseOwner, this.leaseOriginal, this.leaseCurrent.createNewer());
  }

  /**
   * Update internal instance of LeaseState from given lease.
   * @param {leasePb.LeaseUseResult} leaseUseResult LeaseUseResult from the server.
   * @returns {LeaseState}
   */
  updateFromLeaseUseResult(leaseUseResult) {
    if (leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OLDER) {
      if (this.leaseCurrent) {
        const latestKnownLease = new Lease(leaseUseResult.getLatestKnownLease());
        if (latestKnownLease.isValidLease()) {
          const cmp = this.leaseCurrent.compare(latestKnownLease);
          if (cmp === Lease.CompareResult.NEWER || cmp === Lease.CompareResult.SAME) {
            return this;
          }
        }
        return new LeaseState(LeaseState.Status.STATUS_OTHER_OWNER, leaseUseResult.getOwner());
      }
    } else if (leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH) {
      if (this.leaseCurrent) {
        const attemptedLease = new Lease(leaseUseResult.getAttemptedLease());
        if (attemptedLease.compare(this.leaseCurrent) === Lease.CompareResult.SAME) {
          return new LeaseState(LeaseState.Status.STATUS_UNOWNED);
        }
      }
    } else if (leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_REVOKED) {
      if (this.leaseCurrent) {
        const attemptedLease = new Lease(leaseUseResult.getAttemptedLease());
        if (attemptedLease.compare(this.leaseCurrent) === Lease.CompareResult.SAME) {
          return new LeaseState(LeaseState.Status.STATUS_REVOKED);
        }
      }
    }
    return this;
  }
}

/**
 * Storage for Leases.
 */
class LeaseWallet {
  constructor() {
    /** @type {Object<string, LeaseState>} */
    // Without prototype: getLease('constructor') found Object.
    this._leaseStateMap = Object.create(null);
    this.clientName = null;
  }

  /**
   * Add lease in the wallet.
   * @param {Lease} lease Lease to add in the wallet.
   */
  add(lease) {
    const resource = lease.leaseProto.getResource();
    this._leaseStateMap[resource] = new LeaseState(
      LeaseState.Status.STATUS_SELF_OWNER,
      null,
      lease,
      null,
      this.clientName,
    );
  }

  /**
   * Remove lease from the wallet.
   * @param {Lease} lease Lease to remove from the wallet.
   */
  remove(lease) {
    delete this._leaseStateMap[lease.leaseProto.getResource()];
  }

  /**
   * Advance the lease for a specific resource.
   * @param {string} resource The resource that the Lease is for.
   * @returns {Lease}
   * @throws {LeaseNotOwnedByWallet} The lease is not owned by the wallet.
   */
  advance(resource = _RESOURCE_BODY) {
    const leaseState = this._getOwnedLeaseState(resource);
    const newLease = leaseState.createNewer();
    this._leaseStateMap[resource] = newLease;
    return newLease.leaseCurrent;
  }

  /**
   * Get the lease for a specific resource.
   * @param {string} resource The resource that the Lease is for.
   * @returns {Lease}
   * @throws {LeaseNotOwnedByWallet} The lease is not owned by the wallet.
   */
  getLease(resource = _RESOURCE_BODY) {
    return this._getOwnedLeaseState(resource).leaseCurrent;
  }

  /**
   * Get the lease state for a specific resource.
   * @param {string} resource The resource that the Lease is for.
   * @returns {LeaseState}
   * @throws {NoSuchLease} The requested lease does not exist.
   */
  getLeaseState(resource = _RESOURCE_BODY) {
    const leaseState = this._leaseStateMap[resource];

    if (!leaseState) {
      throw new NoSuchLease(resource);
    }

    return leaseState;
  }

  /**
   * Get the lease for a specific resource or raise an LeaseNotOwnedByWallet exception if lease is not found.
   * @param {string} resource The resource that the Lease is for.
   * @returns {LeaseState}
   * @throws {LeaseNotOwnedByWallet} The lease is not owned by the wallet.
   */
  _getOwnedLeaseState(resource) {
    const leaseState = this.getLeaseState(resource);
    if (leaseState.leaseStatus !== LeaseState.Status.STATUS_SELF_OWNER) {
      throw new LeaseNotOwnedByWallet(resource, leaseState);
    }
    return leaseState;
  }

  /**
   * Update the lease state based on result of using the lease.
   * @param {leasePb.LeaseUseResult} leaseUseResult LeaseUseResult from the server.
   * @param {string} resource Resource to update, e.g. 'body'. Default to None to use the resource specified
   * by the lease_use_result.
   */
  onLeaseUseResult(leaseUseResult, resource = null) {
    // An unset attempted lease reads as an empty resource, like the default proto in Python.
    resource = resource || (leaseUseResult.getAttemptedLease()?.getResource() ?? '');
    const leaseState = this._leaseStateMap[resource];
    if (!leaseState) return;
    const newLeaseState = leaseState.updateFromLeaseUseResult(leaseUseResult);
    this._leaseStateMap[resource] = newLeaseState;
  }

  /**
   * Set the client name that will be issuing the leases.
   * @param {string} clientName The client name.
   */
  setClientName(clientName) {
    this.clientName = clientName;
  }
}

/**
 * Client to the lease service.
 * @extends {BaseClient<LeaseServiceClient>}
 */
class LeaseClient extends BaseClient {
  static defaultServiceName = 'lease';
  static serviceType = 'bosdyn.api.LeaseService';

  /**
   * @param {?LeaseWallet} leaseWallet An instance of LeaseWallet
   */
  constructor(leaseWallet = null) {
    super(LeaseServiceClient);

    /**
     * @type {?LeaseWallet}
     */
    this.leaseWallet = leaseWallet;
  }

  /**
   * Acquire a lease for the given resource.
   * @param {string} resource Resource for the lease.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<Lease>}
   * @throws {ResourceAlreadyClaimedError} Use TakeLease method to forcefully grab the already
   * claimed lease.
   * @throws {InvalidResourceError} Resource is not known to the LeaseService.
   * @throws {NotAuthoritativeServiceError} LeaseService is not authoritative so Acquire should not work.
   */
  acquire(resource = _RESOURCE_BODY, args) {
    const req = LeaseClient._makeAcquireRequest(resource);
    return this.call(
      this._stub.acquireLease,
      req,
      this._handleAcquireSuccess.bind(this),
      _handleAcquireErrors,
      false,
      args,
    );
  }

  /**
   * Take the lease for the given resource.
   * @param {string} resource Resource for the lease.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<Lease>}
   * @throws {InvalidResourceError} Resource is not known to the LeaseService.
   * @throws {NotAuthoritativeServiceError} LeaseService is not authoritative so Acquire should not work.
   */
  take(resource = _RESOURCE_BODY, args) {
    const req = LeaseClient._makeTakeRequest(resource);
    return this.call(this._stub.takeLease, req, this._handleAcquireSuccess.bind(this), _handleTakeErrors, false, args);
  }

  /**
   * Return an acquired lease.
   * @param {Lease} lease Lease to return. This should be a Lease class object, and not the proto.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<leasePb.ReturnLeaseResponse>}
   * @throws {InvalidResourceError} Resource is not known to the LeaseService.
   * @throws {NotActiveLeaseError} Lease is not the active lease.
   * @throws {NotAuthoritativeServiceError} LeaseService is not authoritative so Acquire should not work.
   */
  returnLease(lease, args) {
    if (this.leaseWallet) this.leaseWallet.remove(lease);
    const req = LeaseClient._makeReturnRequest(lease);
    return this.call(this._stub.returnLease, req, null, _handleReturnErrors, false, args);
  }

  /**
   * Retain the lease.
   * @param {Lease} lease Lease to retain.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<leasePb.RetainLeaseResponse>}
   * @throws {InternalServerError} Service experienced an unexpected error state.
   * @throws {LeaseUseError} Request was rejected due to using an invalid lease.
   */
  retainLease(lease, args) {
    const req = LeaseClient._makeRetainRequest(lease);
    return this.call(this._stub.retainLease, req, null, commonLeaseErrors, false, args);
  }

  /**
   * Get a list of the leases.
   * @param {boolean} includeFullLeaseInfo Whether the returned list of LeaseResources should include
   * all of the available information about the last lease used.
   * Defaults to False.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<leasePb.LeaseResource[]>}
   * @throws {InternalServerError} Service experienced an unexpected error state.
   * @throws {LeaseUseError} Request was rejected due to using an invalid lease.
   */
  listLeases(includeFullLeaseInfo = false, args) {
    const req = LeaseClient._makeListLeasesRequest(includeFullLeaseInfo);
    return this.call(this._stub.listLeases, req, this._listLeasesSuccess, commonHeaderErrors, false, args);
  }

  /**
   * Get a list of the leases.
   * @param {boolean} includeFullLeaseInfo Whether the returned list of LeaseResources should include
   * all of the available information about the last lease used.
   * Defaults to False.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<leasePb.ListLeasesResponse>}
   */
  listLeasesFull(includeFullLeaseInfo = false, args) {
    const req = LeaseClient._makeListLeasesRequest(includeFullLeaseInfo);
    return this.call(this._stub.listLeases, req, null, commonHeaderErrors, false, args);
  }

  static _makeAcquireRequest(resource) {
    return new leasePb.AcquireLeaseRequest().setResource(resource);
  }

  _handleAcquireSuccess(response) {
    const lease = new Lease(response.getLease());
    if (this.leaseWallet) this.leaseWallet.add(lease);
    return lease;
  }

  static _makeTakeRequest(resource) {
    return new leasePb.TakeLeaseRequest().setResource(resource);
  }

  static _makeReturnRequest(lease) {
    return new leasePb.ReturnLeaseRequest().setLease(lease.leaseProto);
  }

  static _makeRetainRequest(lease) {
    return new leasePb.RetainLeaseRequest().setLease(lease.leaseProto);
  }

  static _makeListLeasesRequest(includeFullLeaseInfo) {
    return new leasePb.ListLeasesRequest().setIncludeFullLeaseInfo(includeFullLeaseInfo);
  }

  _listLeasesSuccess(response) {
    return response.getResourcesList();
  }
}

const DEFAULT_RESOURCES = [];

/**
 * LeaseWalletRequestProcessor adds a lease from a wallet to a request.
 */
class LeaseWalletRequestProcessor {
  constructor(leaseWallet, resourceList = null) {
    /**
     * The LeaseWallet to read leases from.
     * @type {LeaseWallet}
     */
    this.leaseWallet = leaseWallet;

    /**
     * List of resources this processor should add to requests.
     * @type {string[]}
     */
    this.resourceList = resourceList || [_RESOURCE_BODY];
    this.logger = LoggerUtil.getLogger('LeaseWalletRequestProcessor');
  }

  /**
   * Add the leases for the necessary resources if no leases have been specified yet.
   * @param {any} request The lease request
   * @param {string[]} resourceList The resource list
   */
  mutate(request, resourceList = DEFAULT_RESOURCES) {
    const { multipleLeases, skipMutation } = LeaseWalletRequestProcessor.getLeaseState(request);

    if (skipMutation) return;

    if (resourceList === DEFAULT_RESOURCES) {
      resourceList = this.resourceList;
    }

    if (multipleLeases && resourceList.length <= 1) {
      // Pass
    } else if (!multipleLeases && resourceList.length > 1) {
      this.logger.error('LeaseWalletRequestProcessor assigned multiple leases, but request only wants one.');
    }

    // Copies, like Python's CopyFrom: changing the request must not change the lease of the wallet.
    if (multipleLeases) {
      for (const resource of resourceList) {
        const lease = this.leaseWallet.advance(resource);
        request.addLeases(lease.leaseProto.clone());
      }
    } else {
      const lease = this.leaseWallet.advance(resourceList[0]);
      request.setLease(lease.leaseProto.clone());
    }
  }

  /**
   * Returns an array of ("are there multiple leases in request?", "are they set already?")
   * @param {any} request The lease request
   * @returns {{multipleLeases: ?boolean, skipMutation: boolean }}
   */
  static getLeaseState(request) {
    if (typeof request.hasLease === 'function') {
      return { multipleLeases: false, skipMutation: request.hasLease() };
    }
    if (typeof request.getLeasesList === 'function') {
      return { multipleLeases: true, skipMutation: request.getLeasesList().length > 0 };
    }
    // No lease fields in the request, skip mutation.
    return { multipleLeases: null, skipMutation: true };
  }
}

/**
 * LeaseWalletResponseProcessor updates the wallet with a LeaseUseResult.
 */
class LeaseWalletResponseProcessor {
  constructor(leaseWallet) {
    /**
     * Lease wallet to use.
     * @type {LeaseWallet}
     */
    this.leaseWallet = leaseWallet;
  }

  /**
   * Update the wallet if a response has a lease_use_result.
   * @param {any} response The lease response
   */
  mutate(response) {
    let leaseUseResults;
    if (typeof response.getLeaseUseResult === 'function') {
      // The field may exist without being filled out: nothing to update then.
      leaseUseResults = response.hasLeaseUseResult() ? [response.getLeaseUseResult()] : [];
    } else if (typeof response.getLeaseUseResultsList === 'function') {
      // Responses with several leases, e.g. NavigateTo, missions or choreography.
      leaseUseResults = response.getLeaseUseResultsList();
    } else {
      return;
    }

    for (const result of leaseUseResults) {
      this.leaseWallet.onLeaseUseResult(result);
    }
  }
}

/**
 * Adds LeaseWallet related processors to a gRPC client.
 * For services which use leases for access control, this does two things:
 * Advance the lease from the LeaseWallet and attach to a request.
 * Handle the LeaseUseResult from a response and update LeaseWallet.
 * @param {BaseClient} client BaseClient derived class for a single service.
 * @param {LeaseWallet} leaseWallet The LeaseWallet to track from, must be non-None.
 * @param {string[]|null} resourceList List of resources these processors should add to requests. Default null
 * to use a default resource.
 */
function addLeaseWalletProcessors(client, leaseWallet, resourceList = null) {
  client.requestProcessors.push(new LeaseWalletRequestProcessor(leaseWallet, resourceList));
  client.responseProcessors.push(new LeaseWalletResponseProcessor(leaseWallet));
}

/**
 * LeaseKeepAlive issues lease liveness checks on a background thread.
 * The robot's lease system expects lease-holders to check in at a regular
 * cadence. If the check-ins do not happen, the robot will treat it as a
 * communications loss. Typically this will result in the robot stopping,
 * powering off, and the lease-holder getting their lease revoked.
 *
 * Using a LeaseKeepAlive object hides most of the details of issuing the
 * lease liveness check. Developers can also manage liveness checks directly
 * by using the retain_lease methods on the LeaseClient object.
 */
const _LEASE_KEEP_ALIVE_OPTIONS = [
  'leaseWallet',
  'resource',
  'rpcIntervalMs',
  'keepRunningCb',
  'hostName',
  'onFailureCallback',
  'warnings',
  'mustAcquire',
  'returnAtExit',
];

class LeaseKeepAlive {
  /**
   * LeaseKeepAlive issues lease liveness checks on a background interval.
   * @param {LeaseClient} leaseClient The LeaseClient object to issue requests on.
   * @param {Object} [options] Optional parameters.
   * @param {LeaseWallet} [options.leaseWallet=null] The LeaseWallet to retrieve current leases from.
   * @param {string} [options.resource='body'] The resource to do liveness checks for.
   * @param {number} [options.rpcIntervalMs=2000] Duration in milliseconds between liveness checks.
   * @param {Function} [options.keepRunningCb=null] Callable object to determine if checks should proceed.
   * @param {string} [options.hostName=''] Host name for logging purposes.
   * @param {Function} [options.onFailureCallback=null] Callable function for handling failures.
   * @param {boolean} [options.warnings=true] Determine if errors should be printed.
   * @param {boolean} [options.mustAcquire=false] If true, exceptions when acquiring the lease are not caught.
   * @param {boolean} [options.returnAtExit=false] If true, return the lease when shutting down.
   */
  constructor(leaseClient, options) {
    // Unknown options are refused like the keyword arguments of Python: e.g. must_acquire and return_at_exit were
    // silently ignored (the lease was neither acquired as required nor returned).
    const {
      leaseWallet = null,
      resource = _RESOURCE_BODY,
      rpcIntervalMs = 2000,
      keepRunningCb = null,
      hostName = '',
      onFailureCallback = null,
      warnings = true,
      mustAcquire = false,
      returnAtExit = false,
    } = checkOptions(options, _LEASE_KEEP_ALIVE_OPTIONS, 'LeaseKeepAlive');
    if (!leaseClient) {
      throw new Error('leaseClient must be set');
    }
    this.hostName = hostName;
    this.printWarnings = warnings;
    this.returnAtExit = returnAtExit;
    /** @type {LeaseClient} */
    this.leaseClient = leaseClient;
    /** @type {LeaseWallet} */
    this.leaseWallet = leaseWallet || leaseClient.leaseWallet;
    if (!this.leaseWallet) {
      throw new Error('leaseWallet must be set');
    }
    if (!resource) {
      throw new Error('resource must be set');
    }
    this.resource = resource;
    this.rpcIntervalMs =
      rpcIntervalMs > 0
        ? rpcIntervalMs
        : (() => {
            throw new Error('rpcIntervalMs must be > 0');
          })();

    this.keepRunning = keepRunningCb || (() => true);
    this.retainLeaseFailedCb =
      onFailureCallback ||
      (() => {
        /* empty */
      });
    this.logger = LoggerUtil.getLogger('LeaseKeepAlive');

    /**
     * Aborted to stop the check-in loop, including the wait between two check-ins.
     * @type {AbortController}
     * @private
     */
    this._stopController = new AbortController();

    /**
     * The running check-in loop, null when it is not running.
     * @type {?Promise<void>}
     * @private
     */
    this._loopPromise = null;

    this.donePromise = new Promise(resolve => {
      this.resolveDonePromise = resolve;
    });

    // Like Python's constructor: acquire the lease if needed, then start checking in. With mustAcquire,
    // waitForInitialization() rejects with the acquire error, and no check-in is done.
    this.intitializationPromise = this.initializeLease(mustAcquire).then(() => {
      if (!this._stopController.signal.aborted) this.startPeriodicCheckIn();
    });
    // Nobody may await the initialization: report its failure instead of an unhandled rejection.
    this.intitializationPromise.catch(error => {
      this.logger.error(`Failed to initialize lease in LeaseKeepAlive: ${error?.message ?? error}`);
      this.resolveDonePromise();
    });
  }

  async [Symbol.asyncDispose]() {
    await this.shutdown();
  }

  async initializeLease(mustAcquire) {
    try {
      this.leaseWallet.getLease(this.resource);
    } catch (error) {
      try {
        await this.leaseClient.acquire(this.resource);
      } catch (acquireError) {
        if (mustAcquire) {
          throw acquireError;
        }
        this.logger.error('Failed to acquire the lease in LeaseKeepAlive:', acquireError);
      }
    }
  }

  /**
   * Start the check-in loop, if it is not running already.
   */
  startPeriodicCheckIn() {
    if (this._loopPromise !== null || this._stopController.signal.aborted) return;
    this._loopPromise = this._periodicCheckIn().finally(() => {
      this._loopPromise = null;
      this.resolveDonePromise();
    });
  }

  /**
   * Periodically check in and retain the lease, like Python's thread: the first check-in is immediate,
   * and a check-in never starts before the previous one is done (a setInterval would pile up the
   * RetainLease calls on a slow link).
   * @private
   */
  async _periodicCheckIn() {
    this.logger.info('Starting lease check-in');
    const { signal } = this._stopController;
    while (!signal.aborted) {
      const execStart = Date.now();
      if (!this.keepRunning()) break;
      try {
        await this.checkIn();
        this.ok();
      } catch (error) {
        if (this.printWarnings) {
          this.logger.warn(
            `Generic exception for ${this.hostName} during check-in: ${error?.message ?? error} (resuming check-in)`,
          );
        }
        try {
          await this.retainLeaseFailedCb(error);
        } catch (callbackError) {
          this.logger.error(`Lease check-in failure callback failed: ${callbackError?.message ?? callbackError}`);
        }
      }
      const waitMs = this.rpcIntervalMs - (Date.now() - execStart);
      if (waitMs > 0) {
        try {
          await sleep(waitMs, undefined, { signal });
        } catch (e) {
          // Aborted by stopPeriodicCheckIn().
          break;
        }
      }
    }
    this.logger.info('Lease check-in stopped');
  }

  /**
   * Stop the check-in loop. A check-in in progress finishes: await waitUntilDone() for it.
   */
  stopPeriodicCheckIn() {
    this.logger.debug('Stopping check-in');
    this._stopController.abort();
    // The loop resolves the done promise when it ends; if it is not running, nothing else would.
    if (this._loopPromise === null) this.resolveDonePromise();
  }

  /**
   * Retain lease associated with the resource in this class.
   */
  async checkIn() {
    const lease = this.leaseWallet.getLease(this.resource);
    if (!lease) {
      throw new Error('No lease available');
    }
    await this.leaseClient.retainLease(lease);
  }

  ok() {
    this.logger.debug('Check-in successful');
  }

  /**
   * Stop the liveness checks, and return the lease if returnAtExit. Can be called multiple times.
   * Like Python, the check-in in progress ends before the lease is returned.
   */
  async shutdown() {
    this.logger.debug('Shutting down');
    this.stopPeriodicCheckIn();
    // An acquire in progress ends first, so that its lease is returned: it was acquired after the shutdown, and
    // kept by the wallet without check-ins.
    await Promise.allSettled([this.intitializationPromise]);
    await this.waitUntilDone();
    if (this.returnAtExit) {
      try {
        await this.leaseClient.returnLease(this.leaseWallet.getLease(this.resource), { timeout: 2000 });
      } catch (error) {
        // These all mean that we don't own the lease anymore, which is fine.
        if (!(
          error instanceof LeaseResponseError ||
          error instanceof NoSuchLease ||
          error instanceof LeaseNotOwnedByWallet
        )) {
          this.logger.error(`Failed to return the lease at the end: ${error?.message ?? error}`);
        }
      }
    }
  }

  isAlive() {
    return this._loopPromise !== null;
  }

  /**
   * Waits until the check-in loop exits.
   *
   * Most client code stops the loop with shutdown(), or with the keepRunningCb option of the constructor. However, this
   * can be useful in unit tests for ensuring exits.
   */
  async waitUntilDone() {
    await this.donePromise;
  }

  async waitForInitialization() {
    await this.intitializationPromise;
  }
}

/**
 * Check if an incoming lease is newer than the current lease.
 * @param {leasePb.Lease} incomingLeaseProto The incoming lease proto.
 * @param {Lease} activeLease A lease object representing the most recent/newest known lease
 * that the incoming lease should be compared against.
 * @param {string|null} subleaseName If not NoneType, a sublease of the incoming lease will be
 * created (with sublease_name as the client name) and used to compare to
 * the active lease.
 * @param {boolean} allowSuperLeases If true, a super lease will still be considered as "ok"/
 * newer when compared to the active lease.
 * @returns {[ leasePb.LeaseUseResult, Lease ]}
 */
function testActiveLease(incomingLeaseProto, activeLease, subleaseName = null, allowSuperLeases = false) {
  const leaseUseResult = new leasePb.LeaseUseResult();
  leaseUseResult.setAttemptedLease(incomingLeaseProto.clone());

  /** @type {Lease|undefined} */
  let incomingLease;

  try {
    incomingLease = new Lease(incomingLeaseProto);
    if (subleaseName !== null) {
      incomingLease = incomingLease.createSublease(subleaseName);
    }
  } catch (e) {
    leaseUseResult.setStatus(leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE);
    return [leaseUseResult, null];
  }

  if (activeLease === null) {
    leaseUseResult.setLatestKnownLease(incomingLease.leaseProto.clone());
    leaseUseResult.setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
    return [leaseUseResult, incomingLease];
  }

  if (!activeLease.isValidLease()) {
    throw new Error('The active lease object is invalid.');
  }

  leaseUseResult.setPreviousLease(activeLease.leaseProto.clone());
  leaseUseResult.setLatestKnownLease(activeLease.leaseProto.clone());

  const compareResult = incomingLease.compare(activeLease);
  leaseUseResult.setStatus(Lease.compareResultToLeaseUseResultStatus(compareResult, allowSuperLeases));
  if (
    leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK &&
    compareResult !== Lease.CompareResult.SUPER_LEASE
  ) {
    leaseUseResult.setLatestKnownLease(incomingLease.leaseProto.clone());
  }
  return [leaseUseResult, incomingLease];
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
  addLeaseWalletProcessors,
  LeaseKeepAlive,
  testActiveLease,
  DEFAULT_RESOURCES,
};
