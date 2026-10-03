export type Logger = import("./logger_util").Logger;
/**
 * @typedef {import('./logger_util').Logger} Logger
 */
/** General class of errors for directory registration responses. */
export class DirectoryRegistrationResponseError extends ResponseError {
}
/** The service already exists on the robot. */
export class ServiceAlreadyExistsError extends DirectoryRegistrationResponseError {
}
/** The specified service does not exist on the robot. */
export class ServiceDoesNotExistError extends DirectoryRegistrationResponseError {
}
/**
 * Write off-robot services and modify their information.
 * @extends {BaseClient<DirectoryRegistrationServiceClient>}
 */
export class DirectoryRegistrationClient extends BaseClient<DirectoryRegistrationServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Register a service routing with the robot.
     *
     * If service name already registered, no change will be applied and will throw ServiceAlreadyExistsError.
     * Every request received by the robot will serve as a heartbeat and update the service last_update field.
     * @param {string} name The name of the service. Must be unique.
     * @param {string} serviceType The GRPC service definition defining the calls to/from this service.
     * (authority, service_type) must be unique in the directory.
     * @param {string} authority The authority used to direct calls to this service.
     * (authority, service_type) must be unique in the directory.
     * @param {string} hostIp The ip address of the system that the service is being hosted on.
     * @param {number} port The port number the service can be accessed through on the host system.
     * @param {boolean} userTokenRequired If a user token should be verified to access the service.
     * @param {number} livenessTimeoutSecs Number of seconds without directory heartbeat before timeout fault.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<directoryRegistrationPb.RegisterServiceResponse>}
     */
    register(name: string, serviceType: string, authority: string, hostIp: string, port: number, userTokenRequired?: boolean, livenessTimeoutSecs?: number, args?: Object): Promise<directoryRegistrationPb.RegisterServiceResponse>;
    /**
     * Update a service definition of an existing service that matches the service name.
     *
     * If service name is not registered, will throw ServiceDoesNotExistError.
     * Every request received by the robot will serve as a heartbeat and update the service last_update field.
     * @param {string} name The name of the service to be updated.
     * @param {string} serviceType The GRPC service definition defining the calls to/from this service.
     * (authority, service_type) must be unique in the directory.
     * @param {string} authority The authority used to direct calls to this service.
     * (authority, service_type) must be unique in the directory.
     * @param {string} hostIp The ip address of the system that the service is being hosted on.
     * @param {number} port The port number the service can be accessed through on the host system.
     * @param {boolean} userTokenRequired If a user token should be verified to access the service.
     * @param {number} livenessTimeoutSecs Number of seconds without directory heartbeat before timeout fault.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<directoryRegistrationPb.UpdateServiceResponse>}
     */
    update(name: string, serviceType: string, authority: string, hostIp: string, port: number, userTokenRequired?: boolean, livenessTimeoutSecs?: number, args?: Object): Promise<directoryRegistrationPb.UpdateServiceResponse>;
    /**
     * Remove a service routing with the robot.
     * @param {string} name The name of the service to be removed.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<directoryRegistrationPb.UnregisterServiceResponse>}
     */
    unregister(name: string, args?: Object): Promise<directoryRegistrationPb.UnregisterServiceResponse>;
}
/**
 * Helper class to keep a directory entry updated.
 *
 * Assuming the directory itself is hosted on the robot, and the service being registered in the
 * directory is on a payload, use of this class streamlines the following cases:
 *
 * 1) The payload, or the payload-hosted service, is restarted.
 * 2) The robot is restarted.
 * 3) On-robot processes clear out the directory. This can happen in rare cases.
 *
 * This class will also maintain liveness status with the robot directory, if enabled for this
 * service, by sending a registration/update request at the specified interval.
 */
export class DirectoryRegistrationKeepAlive {
    /**
     * @param {DirectoryRegistrationClient} dirRegClient Client to the directory registration service.
     * @param {Object} [options] Optional configuration options.
     * @param {?Logger} [options.logger=null] Object to log with. Defaults to null, in which case one with the
     * class name is acquired.
     * @param {?number} [options.rpcTimeoutSeconds=null] Number of seconds to wait for a dirRegClient RPC. Defaults
     * to null, for the default RPC timeout.
     * @param {number} [options.rpcIntervalSeconds=30] Interval in seconds at which to request service registrations.
     * @param {number} [options.initialRetrySeconds=1] Initial number of seconds to wait before retrying a failed
     * registration request.
     */
    constructor(dirRegClient: DirectoryRegistrationClient, { logger, rpcTimeoutSeconds, rpcIntervalSeconds, initialRetrySeconds }?: {
        logger?: import("./logger_util").Logger | null | undefined;
        rpcTimeoutSeconds?: number | null | undefined;
        rpcIntervalSeconds?: number | undefined;
        initialRetrySeconds?: number | undefined;
    });
    /** @type {string|null} */
    authority: string | null;
    /** @type {string|null} */
    directoryName: string | null;
    /** @type {string|null} */
    host: string | null;
    /** @type {string|null} */
    port: string | null;
    /** @type {string|null} */
    serviceType: string | null;
    logger: import("./logger_util").Logger;
    /**
     * Client to the directory registration service.
     * @type {DirectoryRegistrationClient}
     */
    dirRegClient: DirectoryRegistrationClient;
    /**
     * Optional callback called when an RPC error occurs in the re-registration loop. It returns an
     * ErrorCallbackResult, or a promise of one, telling the loop what to do.
     * @type {?function(Error): (number|Promise<number>)}
     */
    reregistrationErrorCallback: ((arg0: Error) => (number | Promise<number>)) | null;
    _endReregisterSignal: Event;
    _rpcTimeout: number | null;
    _reregisterPeriod: number;
    _initialRetrySeconds: number;
    _started: boolean;
    /**
     * The re-registration loop, while it runs.
     * @type {?Promise<void>}
     * @private
     */
    private _task;
    /**
     * Register, optionally update, and then kick off the re-registration loop.
     * Can not be restarted with this method after a shutdown.
     *
     * @param {string} directoryName Unique name in the directory.
     * @param {string} serviceType Service type.
     * @param {string} authority gRPC authority/scope.
     * @param {string} host Service host (IP or name).
     * @param {number} port Service port.
     * @param {number|null} [livenessTimeoutSecs=null] Directory liveness TTL. Defaults to 2.5 × `rpcIntervalSeconds`.
     * @param {boolean} [userTokenRequired=true] Whether a user token is required for this service.
     * @param {boolean} [resetService=true] Fully reset the registration before starting the loop.
     * @returns {Promise<this>}
     * @throws {Error} If already started.
     * @throws {RpcError} Problem communicating with the robot.
     */
    start(directoryName: string, serviceType: string, authority: string, host: string, port: number, livenessTimeoutSecs?: number | null, userTokenRequired?: boolean, resetService?: boolean): Promise<this>;
    livenessTimeoutSecs: number | undefined;
    userTokenRequired: boolean | undefined;
    /**
     * Are we still periodically re-registering?
     * @returns {boolean}
     */
    isAlive(): boolean;
    /**
     * Stop the re-registration loop (idempotent).
     * Does NOT automatically call `unregister()`—use it separately if needed.
     * @returns {Promise<void>} Resolves once the loop has ended, like Python's join().
     */
    shutdown(): Promise<void>;
    /**
     * Unregister the service from the directory. First stops the loop, which would register it again.
     * @returns {Promise<directoryRegistrationPb.UnregisterServiceResponse>}
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {ServiceDoesNotExistError} The service does not exist.
     */
    unregister(): Promise<directoryRegistrationPb.UnregisterServiceResponse>;
    /**
     * Options of the RPCs: rpcTimeoutSeconds is in seconds like in Python, but call() takes milliseconds.
     * @private
     * @returns {{timeout: ?number}}
     */
    private _rpcArgs;
    /**
     * Logs an error of a re-registration.
     * @param {Error} err The error.
     * @returns {Promise<ErrorCallbackResult>} What to do next: the result of reregistrationErrorCallback for an RpcError,
     * else resume the normal operation.
     * @private
     */
    private _handleReregistrationError;
    /**
     * Main re-registration loop: handles an accidental removal of the service from the directory, with
     * immediate retry, exponential backoff, and normal cadence.
     * @private
     * @returns {Promise<void>}
     */
    private _periodicReregister;
    [Symbol.asyncDispose](): Promise<void>;
}
/**
 * Reset a service registration by unregistering the service and then re-registering it.
 *
 * This is useful when a program wants to register a new service but there may be an old entry
 * in the robot directory from a previous instance of the program. If the service
 * does not already exist, the exception will be suppressed and a new registration will
 * still be performed. Unregistering the service has the advantage of clearing all service
 * faults, if any existed.
 * @param {DirectoryRegistrationClient} directoryRegistrationClient A directory registration instance
 * @param {string} name The name of the service to be reset.
 * @param {string} serviceType The GRPC service definition defining the calls to/from this service.
 * (authority, service_type) must be unique in the directory.
 * @param {string} authority The authority used to direct calls to this service.
 * (authority, service_type) must be unique in the directory.
 * @param {string} hostIp The ip address of the system that the service is being hosted on.
 * @param {string|number} port The port number the service can be accessed through on the host system.
 * @param {boolean} userTokenRequired If a user token should be verified to access the service.
 * @param {number} livenessTimeoutSecs Number of seconds without directory heartbeat before timeout fault.
 */
export function resetServiceRegistration(directoryRegistrationClient: DirectoryRegistrationClient, name: string, serviceType: string, authority: string, hostIp: string, port: string | number, userTokenRequired?: boolean, livenessTimeoutSecs?: number): Promise<void>;
import { ResponseError } from "./exceptions";
import { DirectoryRegistrationServiceClient } from "../../src/bosdyn/api/directory_registration_service_grpc_pb";
import { BaseClient } from "./common";
import directoryRegistrationPb = require("../../src/bosdyn/api/directory_registration_pb");
import { Event } from "../bosdyn-core/event";
