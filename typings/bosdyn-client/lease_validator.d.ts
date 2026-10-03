export type Robot = import("./robot").Robot;
/**
 * Lease validator tracks lease usage in intermediate services.
 * Track the most recent leases seen for each lease resource and test incoming leases against this
 * state.
 */
export class LeaseValidator {
    /**
     * Await initialize() before use: it reads the resource hierarchy of the robot (the constructor of Python does it).
     * @param {Robot} robot The robot object for which leases are associated to.
     */
    constructor(robot: Robot);
    /** @type {Object<string, Lease>} */
    activeLeaseMap: {
        [x: string]: Lease;
    };
    hierarchy: ResourceHierarchy | null;
    robot: import("./robot").Robot;
    initialize(): Promise<void>;
    /**
     * Get the latest active lease.
     * @param {string} resource the resource for the specific lease to be returned.
     * @returns {Lease|null}
     */
    getActiveLease(resource: string): Lease | null;
    /**
     * Helper function to validate the lease and compare it to the active lease.
     * @param {Lease|leasePb.Lease} incomingLease The incoming lease to test.
     * @param {boolean} allowSuperLeases Should the comparison function consider a super lease as
     * ok.
     * @param {boolean} allowDifferentEpoch Should the comparison function consider a different epoch as ok.
     * @returns {leasePb.LeaseUseResult}
     */
    testActiveLease(incomingLease: Lease | leasePb.Lease, allowSuperLeases: boolean, allowDifferentEpoch?: boolean): leasePb.LeaseUseResult;
    /**
     * Compare an incoming lease to the latest active lease, and if it is ok then set it as
     * the latest lease.
     * @param {Lease|leasePb.Lease} incomingLease The incoming lease to test.
     * @param {boolean} allowSuperLeases Should the comparison function consider a super lease as
     * ok.
     * @param {boolean} allowDifferentEpoch Should the comparison function consider a different epoch as ok.
     * @returns {leasePb.LeaseUseResult}
     */
    testAndSetActiveLease(incomingLease: Lease | leasePb.Lease, allowSuperLeases: boolean, allowDifferentEpoch?: boolean): leasePb.LeaseUseResult;
    /**
     * Get the active lease for a resource.
     * @param {string} resource the resource for the specific lease to be returned.
     * @returns {Lease|null}
     */
    _getActiveLease(resource: string): Lease | null;
    /**
     * Helper function to validate the lease and compare it to the active lease.
     * @param {Lease|leasePb.Lease} incomingLease The incoming lease to test.
     * @param {boolean} allowSuperLease Should the comparison function consider a super lease as
     * ok.
     * @param {boolean} allowDifferentEpoch Should the comparison function consider a different epoch as ok.
     * @returns {any[]}
     */
    _testActiveLeaseHelper(incomingLease: Lease | leasePb.Lease, allowSuperLease: boolean, allowDifferentEpoch?: boolean): any[];
    /**
     * Helper set the active lease tracked for the specific lease resource.
     * @param {Lease|leasePb.Lease} incomingLease The incoming lease to set.
     */
    _setActiveLease(incomingLease: Lease | leasePb.Lease): void;
    /**
     * Updates a mutable copy of the LeaseUseResult to fill out the debug fields.
     * @param {Lease} attemptedLease The incoming/requested lease.
     * @param {Lease} previousLease Optional previous lease that was last considered
     * the latest active lease.
     * @param {leasePb.LeaseUseResult} mutableLeaseUseResults The LeaseUseResult to populate
     */
    _populateBaseLeaseUseResults(attemptedLease: Lease, previousLease: Lease, mutableLeaseUseResults: leasePb.LeaseUseResult): void;
    /**
     * Determine the latest maximum lease.
     * @param {ResourceHierarchy} hierarchy The resurce hierarchy
     * @returns {leasePb.Lease}
     */
    _maximumLease(hierarchy: ResourceHierarchy): leasePb.Lease;
    #private;
}
/**
 * LeaseValidatorResponseProcessor updates the lease validator using the
 * latest_known_lease from the response's LeaseUseResult.
 */
export class LeaseValidatorResponseProcessor {
    /**
     * @param {LeaseValidator} leaseValidator validator for a specific robot to be updated.
     */
    constructor(leaseValidator: LeaseValidator);
    /** @type {LeaseValidator} */
    leaseValidator: LeaseValidator;
    /**
     * Update the lease validator if a response has a lease_use_result.
     * @param {any} response The request mutate
     * @returns {void}
     */
    mutate(response: any): void;
}
import { Lease } from "./lease";
import { ResourceHierarchy } from "./lease_resource_hierarchy";
import leasePb = require("../../src/bosdyn/api/lease_pb");
