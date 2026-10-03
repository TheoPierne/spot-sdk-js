/**
 * Returns a descriptive client name for API clients with an optional prefix.
 */
export function generateClientName(prefix?: string): string;
/**
 * Return an Sdk with the most common configuration.
 *
 * @param {string} clientNamePrefix Prefix to pass to generate_client_name()
 * @param {any[]|null} [serviceClients=null] List of service client classes to register in addition to the defaults.
 * @param {?string} [certResourceGlob=null] Glob expression matching robot certificate(s). Default null to
 * use distributed certificate.
 * @returns {Sdk}
 * @throws {RangeError} Robot cert could not be loaded.
 */
export function createStandardSdk(clientNamePrefix: string, serviceClients?: any[] | null, certResourceGlob?: string | null): Sdk;
export const BOSDYN_RESOURCE_ROOT: string;
/**
 * Environment variable with the path (or glob) of the certificates to trust instead of the Boston Dynamics robot
 * certificate, e.g. the CA of a mock robot. Used by loadRobotCert() when it gets no path.
 * @type {string}
 */
export const BOSDYN_CA_CERT_ENV: string;
/**
 * Repository for settings typically common to a single developer and/or robot fleet.
 * See also Robot for robot-specific settings.
 */
export class Sdk {
    /**
     * @param {string} [name=null] Name to identify the client when communicating with the robot.
     */
    constructor(name?: string);
    cert: Buffer<ArrayBuffer> | NonSharedBuffer | null;
    clientName: string;
    logger: import("winston").Logger;
    /** @type {Function[]} */
    requestProcessors: Function[];
    /** @type {Function[]} */
    responseProcessors: Function[];
    serviceClientFactoriesByType: {};
    serviceTypeByName: {};
    /**
     * Robots created by this Sdk, keyed by address.
     * @type {Object<string, Robot>}
     */
    robots: {
        [x: string]: Robot;
    };
    /**
     * Set default max message length for sending.
     * @type {number}
     */
    maxSendMessageLength: number;
    /**
     * Set default max message length for receiving.
     * @type {number}
     */
    maxReceiveMessageLength: number;
    executor: any;
    /**
     * Get a Robot initialized with this Sdk, creating it if it does not yet exist.
     * @param {string} address Network-resolvable address of the robot, e.g. '192.168.80.3'
     * @param {string} [name=null] A unique identifier for the robot, e.g. 'My First Robot'.
     * Default null to use the address as the name.
     * @returns {Robot} robot A Robot initialized with the current Sdk settings.
     */
    createRobot(address: string, name?: string): Robot;
    /**
     * Updates the send and receive max message length values in all the clients/channels created from this point on.
     * @param {number} maxMessageLength Max message length value to use for sending and receiving messages.
     * @returns {void}
     */
    setMaxMessageLength(maxMessageLength: number): void;
    /**
     * Tell the Sdk how to create a specific type of service client.
     * @param {typeof import('./common').BaseClient} creationFunc Callable that returns a client. Typically just the
     * class.
     * @param {string} [serviceType=null] Type of the service. If null (default), will try to get
     * the name from creation_func.
     * @param {string} [serviceName=null] Name of the service. If null (default), will try to get
     * the name from creation_func.
     * @returns {void}
     */
    registerServiceClient(creationFunc: typeof import("./common").BaseClient, serviceType?: string, serviceName?: string): void;
    /**
     * Load the SSL certificate for the robot.
     * @param {?string} [resourcePathGlob=null] Optional path to certificate resource(s): a file, a directory or a glob
     * expression to match certificates. If null, the path in the BOSDYN_CA_CERT environment variable, if set (e.g. the
     * CA of a mock robot), else the robot certificate of the 'resources' package (Boston Dynamics Root CA), like Python.
     * @returns {void}
     * @throws {RangeError} No certificate matches the path.
     */
    loadRobotCert(resourcePathGlob?: string | null): void;
    /**
     * Remove all cached Robot instances.
     * Subsequent calls to createRobot() will return newly created Robots.
     * Existing robot instances will continue to work, but their time sync and token refresh
     * threads will be stopped.
     */
    clearRobots(): void;
}
/** General class of errors to handle non-response non-rpc errors. */
export class SdkError extends BosdynError {
}
/** Path to app token not set. */
export class UnsetAppTokenError extends SdkError {
}
/** Cannot load the provided app token path. */
export class UnableToLoadAppTokenError extends SdkError {
}
import { Buffer } from "buffer";
import { Robot } from "./robot";
import { BosdynError } from "./exceptions";
