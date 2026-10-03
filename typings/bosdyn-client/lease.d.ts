export type InternalServerError = import("./exceptions").InternalServerError;
export type LeaseUseError = import("./exceptions").LeaseUseError;
/** General class of errors for LeaseResponseError service. */
export class LeaseResponseError extends ResponseError {
}
/** The provided lease is invalid. */
export class InvalidLeaseError extends LeaseResponseError {
}
/** Lease is older than the current lease. */
export class DisplacedLeaseError extends LeaseResponseError {
}
/** Resource is not known to the LeaseService. */
export class InvalidResourceError extends LeaseResponseError {
}
/** LeaseService is not authoritative so Acquire should not work. */
export class NotAuthoritativeServiceError extends LeaseResponseError {
}
/** Use TakeLease method to forcefully grab the already claimed lease. */
export class ResourceAlreadyClaimedError extends LeaseResponseError {
}
/** Lease is stale because the lease-holder did not check in regularly enough. */
export class RevokedLeaseError extends LeaseResponseError {
}
/** LeaseService does not manage this resource. */
export class UnmanagedResourceError extends LeaseResponseError {
}
/** Lease is for the wrong epoch. */
export class WrongEpochError extends LeaseResponseError {
}
/** Lease is not the active lease. */
export class NotActiveLeaseError extends LeaseResponseError {
}
/**
 * The requested lease does not exist.
 */
export class NoSuchLease extends Error {
    constructor(resource: any);
    resource: any;
}
/**
 * The lease is not owned by the wallet.
 */
export class LeaseNotOwnedByWallet extends Error {
    constructor(resource: any, leaseState: any);
    resource: any;
    leaseState: any;
}
/**
 * Leases are used to coordinate access to shared resources on a Boston Dynamics robot.
 * A service will grant access to the shared resource if the lease which accompanies a request is
 * "more recent" than any previously seen leases. Recency is determined using a sequence of
 * monotonically increasing numbers, similar to a Lamport logical clock.
 */
export class Lease {
    /**
     * Enum for comparison results between two leases.
     * @enum
     * @static
     */
    static CompareResult: {
        SAME: number;
        SUPER_LEASE: number;
        SUB_LEASE: number;
        OLDER: number;
        NEWER: number;
        DIFFERENT_RESOURCES: number;
        DIFFERENT_EPOCHS: number;
    };
    /**
     * Checks whether this lease is valid.
     * @param {leasePb.Lease} leaseProto The lease proto to check validity
     * @returns {boolean}
     */
    static isValidProto(leaseProto: leasePb.Lease): boolean;
    /**
     * Determines the comparable LeaseUseResult.Status enum value based on the CompareResult enum.
     * @param {number} compareResult The result value to be compared.
     * @param {boolean} allowSuperLeases If true, a super lease will still be considered as "ok"
     * newer when compared to the active lease.
     * @returns {number}
     * @throws {Error} Throwed if there is an unknown compare result enum value.
     */
    static compareResultToLeaseUseResultStatus(compareResult: number, allowSuperLeases: boolean): number;
    constructor(leaseProto: any, ignoreIsValidCheck?: boolean);
    /** @type {leasePb.Lease} */
    leaseProto: leasePb.Lease;
    /**
     * Compare two different lease objects.
     * @param {Lease} otherLease The lease to compare this lease with.
     * @param {boolean} ignoreResources Bypass resources checking
     * @returns {number}
     */
    compare(otherLease: Lease, ignoreResources?: boolean): number;
    /**
     * Creates a new Lease which is newer than this Lease.
     * @returns {Lease}
     */
    createNewer(): Lease;
    /**
     * Creates a sublease of this lease.
     * @param {string} clientName Optional argument to pass a client name to be appended to
     * the new lease's set of clients which have used it.
     * @returns {Lease}
     */
    createSublease(clientName?: string): Lease;
    /**
     * Non static version of is_valid_proto
     * @returns {boolean}
     */
    isValidLease(): boolean;
}
/**
 * State of lease ownership in the wallet.
 */
export class LeaseState {
    static Status: {
        STATUS_UNOWNED: number;
        STATUS_REVOKED: number;
        STATUS_SELF_OWNER: number;
        STATUS_OTHER_OWNER: number;
        STATUS_NOT_MANAGED: number;
    };
    constructor(leaseStatus: any, leaseOwner?: null, lease?: null, leaseCurrent?: null, clientName?: null);
    /** @type {number} */
    leaseStatus: number;
    /** @type {leasePb.LeaseOwner} */
    leaseOwner: leasePb.LeaseOwner;
    /** @type {Lease} */
    leaseOriginal: Lease;
    /** @type {string} */
    clientName: string;
    /** @type {Lease} */
    leaseCurrent: Lease;
    /**
     * Create newer version of the Lease.
     * @returns {LeaseState}
     */
    createNewer(): LeaseState;
    /**
     * Update internal instance of LeaseState from given lease.
     * @param {leasePb.LeaseUseResult} leaseUseResult LeaseUseResult from the server.
     * @returns {LeaseState}
     */
    updateFromLeaseUseResult(leaseUseResult: leasePb.LeaseUseResult): LeaseState;
}
/**
 * Storage for Leases.
 */
export class LeaseWallet {
    /** @type {Object<string, LeaseState>} */
    _leaseStateMap: {
        [x: string]: LeaseState;
    };
    clientName: string | null;
    /**
     * Add lease in the wallet.
     * @param {Lease} lease Lease to add in the wallet.
     */
    add(lease: Lease): void;
    /**
     * Remove lease from the wallet.
     * @param {Lease} lease Lease to remove from the wallet.
     */
    remove(lease: Lease): void;
    /**
     * Advance the lease for a specific resource.
     * @param {string} resource The resource that the Lease is for.
     * @returns {Lease}
     * @throws {LeaseNotOwnedByWallet} The lease is not owned by the wallet.
     */
    advance(resource?: string): Lease;
    /**
     * Get the lease for a specific resource.
     * @param {string} resource The resource that the Lease is for.
     * @returns {Lease}
     * @throws {LeaseNotOwnedByWallet} The lease is not owned by the wallet.
     */
    getLease(resource?: string): Lease;
    /**
     * Get the lease state for a specific resource.
     * @param {string} resource The resource that the Lease is for.
     * @returns {LeaseState}
     * @throws {NoSuchLease} The requested lease does not exist.
     */
    getLeaseState(resource?: string): LeaseState;
    /**
     * Get the lease for a specific resource or raise an LeaseNotOwnedByWallet exception if lease is not found.
     * @param {string} resource The resource that the Lease is for.
     * @returns {LeaseState}
     * @throws {LeaseNotOwnedByWallet} The lease is not owned by the wallet.
     */
    _getOwnedLeaseState(resource: string): LeaseState;
    /**
     * Update the lease state based on result of using the lease.
     * @param {leasePb.LeaseUseResult} leaseUseResult LeaseUseResult from the server.
     * @param {string} resource Resource to update, e.g. 'body'. Default to None to use the resource specified
     * by the lease_use_result.
     */
    onLeaseUseResult(leaseUseResult: leasePb.LeaseUseResult, resource?: string): void;
    /**
     * Set the client name that will be issuing the leases.
     * @param {string} clientName The client name.
     */
    setClientName(clientName: string): void;
}
/**
 * Client to the lease service.
 * @extends {BaseClient<LeaseServiceClient>}
 */
export class LeaseClient extends BaseClient<LeaseServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    static _makeAcquireRequest(resource: any): leasePb.AcquireLeaseRequest;
    static _makeTakeRequest(resource: any): leasePb.TakeLeaseRequest;
    static _makeReturnRequest(lease: any): leasePb.ReturnLeaseRequest;
    static _makeRetainRequest(lease: any): leasePb.RetainLeaseRequest;
    static _makeListLeasesRequest(includeFullLeaseInfo: any): leasePb.ListLeasesRequest;
    /**
     * @param {?LeaseWallet} leaseWallet An instance of LeaseWallet
     */
    constructor(leaseWallet?: LeaseWallet | null);
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
    acquire(resource?: string, args?: Object): Promise<Lease>;
    /**
     * Take the lease for the given resource.
     * @param {string} resource Resource for the lease.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<Lease>}
     * @throws {InvalidResourceError} Resource is not known to the LeaseService.
     * @throws {NotAuthoritativeServiceError} LeaseService is not authoritative so Acquire should not work.
     */
    take(resource?: string, args?: Object): Promise<Lease>;
    /**
     * Return an acquired lease.
     * @param {Lease} lease Lease to return. This should be a Lease class object, and not the proto.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<leasePb.ReturnLeaseResponse>}
     * @throws {InvalidResourceError} Resource is not known to the LeaseService.
     * @throws {NotActiveLeaseError} Lease is not the active lease.
     * @throws {NotAuthoritativeServiceError} LeaseService is not authoritative so Acquire should not work.
     */
    returnLease(lease: Lease, args?: Object): Promise<leasePb.ReturnLeaseResponse>;
    /**
     * Retain the lease.
     * @param {Lease} lease Lease to retain.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<leasePb.RetainLeaseResponse>}
     * @throws {InternalServerError} Service experienced an unexpected error state.
     * @throws {LeaseUseError} Request was rejected due to using an invalid lease.
     */
    retainLease(lease: Lease, args?: Object): Promise<leasePb.RetainLeaseResponse>;
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
    listLeases(includeFullLeaseInfo?: boolean, args?: Object): Promise<leasePb.LeaseResource[]>;
    /**
     * Get a list of the leases.
     * @param {boolean} includeFullLeaseInfo Whether the returned list of LeaseResources should include
     * all of the available information about the last lease used.
     * Defaults to False.
     * @param {Object} [args] Passed to underlying RPC.
     * @returns {Promise<leasePb.ListLeasesResponse>}
     */
    listLeasesFull(includeFullLeaseInfo?: boolean, args?: Object): Promise<leasePb.ListLeasesResponse>;
    _handleAcquireSuccess(response: any): Lease;
    _listLeasesSuccess(response: any): any;
}
/**
 * LeaseWalletRequestProcessor adds a lease from a wallet to a request.
 */
export class LeaseWalletRequestProcessor {
    /**
     * Returns an array of ("are there multiple leases in request?", "are they set already?")
     * @param {any} request The lease request
     * @returns {{multipleLeases: ?boolean, skipMutation: boolean }}
     */
    static getLeaseState(request: any): {
        multipleLeases: boolean | null;
        skipMutation: boolean;
    };
    constructor(leaseWallet: any, resourceList?: null);
    /**
     * The LeaseWallet to read leases from.
     * @type {LeaseWallet}
     */
    leaseWallet: LeaseWallet;
    /**
     * List of resources this processor should add to requests.
     * @type {string[]}
     */
    resourceList: string[];
    logger: import("winston").Logger;
    /**
     * Add the leases for the necessary resources if no leases have been specified yet.
     * @param {any} request The lease request
     * @param {string[]} resourceList The resource list
     */
    mutate(request: any, resourceList?: string[]): void;
}
/**
 * LeaseWalletResponseProcessor updates the wallet with a LeaseUseResult.
 */
export class LeaseWalletResponseProcessor {
    constructor(leaseWallet: any);
    /**
     * Lease wallet to use.
     * @type {LeaseWallet}
     */
    leaseWallet: LeaseWallet;
    /**
     * Update the wallet if a response has a lease_use_result.
     * @param {any} response The lease response
     */
    mutate(response: any): void;
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
export function addLeaseWalletProcessors(client: BaseClient<any>, leaseWallet: LeaseWallet, resourceList?: string[] | null): void;
export class LeaseKeepAlive {
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
    constructor(leaseClient: LeaseClient, options?: {
        leaseWallet?: LeaseWallet | undefined;
        resource?: string | undefined;
        rpcIntervalMs?: number | undefined;
        keepRunningCb?: Function | undefined;
        hostName?: string | undefined;
        onFailureCallback?: Function | undefined;
        warnings?: boolean | undefined;
        mustAcquire?: boolean | undefined;
        returnAtExit?: boolean | undefined;
    });
    hostName: any;
    printWarnings: any;
    returnAtExit: any;
    /** @type {LeaseClient} */
    leaseClient: LeaseClient;
    /** @type {LeaseWallet} */
    leaseWallet: LeaseWallet;
    resource: any;
    rpcIntervalMs: any;
    keepRunning: any;
    retainLeaseFailedCb: any;
    logger: import("winston").Logger;
    /**
     * Aborted to stop the check-in loop, including the wait between two check-ins.
     * @type {AbortController}
     * @private
     */
    private _stopController;
    /**
     * The running check-in loop, null when it is not running.
     * @type {?Promise<void>}
     * @private
     */
    private _loopPromise;
    donePromise: Promise<any>;
    resolveDonePromise: (value: any) => void;
    intitializationPromise: Promise<void>;
    initializeLease(mustAcquire: any): Promise<void>;
    /**
     * Start the check-in loop, if it is not running already.
     */
    startPeriodicCheckIn(): void;
    /**
     * Periodically check in and retain the lease, like Python's thread: the first check-in is immediate,
     * and a check-in never starts before the previous one is done (a setInterval would pile up the
     * RetainLease calls on a slow link).
     * @private
     */
    private _periodicCheckIn;
    /**
     * Stop the check-in loop. A check-in in progress finishes: await waitUntilDone() for it.
     */
    stopPeriodicCheckIn(): void;
    /**
     * Retain lease associated with the resource in this class.
     */
    checkIn(): Promise<void>;
    ok(): void;
    /**
     * Stop the liveness checks, and return the lease if returnAtExit. Can be called multiple times.
     * Like Python, the check-in in progress ends before the lease is returned.
     */
    shutdown(): Promise<void>;
    isAlive(): boolean;
    /**
     * Waits until the check-in loop exits.
     *
     * Most client code stops the loop with shutdown(), or with the keepRunningCb option of the constructor. However, this
     * can be useful in unit tests for ensuring exits.
     */
    waitUntilDone(): Promise<void>;
    waitForInitialization(): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
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
export function testActiveLease(incomingLeaseProto: leasePb.Lease, activeLease: Lease, subleaseName?: string | null, allowSuperLeases?: boolean): [leasePb.LeaseUseResult, Lease];
export const DEFAULT_RESOURCES: any[];
import { ResponseError } from "./exceptions";
import leasePb = require("../../src/bosdyn/api/lease_pb");
import { LeaseServiceClient } from "../../src/bosdyn/api/lease_service_grpc_pb";
import { BaseClient } from "./common";
