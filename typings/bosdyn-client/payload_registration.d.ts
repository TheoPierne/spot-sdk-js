export type RpcError = import("./exceptions").RpcError;
export type Logger = import("./logger_util").Logger;
export type Payload = import("../../src/bosdyn/api/payload_pb").Payload;
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./logger_util').Logger} Logger
 */
/** General class of errors for PayloadRegistration service. */
export class PayloadRegistrationResponseError extends ResponseError {
}
/** The payload credentials do not match any payload registered to the robot. */
export class InvalidPayloadCredentialsError extends PayloadRegistrationResponseError {
}
/** The payload is not authorized. */
export class PayloadNotAuthorizedError extends PayloadRegistrationResponseError {
}
/** A payload with this GUID is already registered on the robot. */
export class PayloadAlreadyExistsError extends PayloadRegistrationResponseError {
}
/** A payload with this GUID is not registered on the robot. */
export class PayloadDoesNotExistError extends PayloadRegistrationResponseError {
}
/**
 * @typedef {import('../../src/bosdyn/api/payload_pb').Payload} Payload
 */
/**
 * A client registering payload configs onto the robot.
 * @extends {BaseClient<PayloadRegistrationServiceClient>}
 */
export class PayloadRegistrationClient extends BaseClient<PayloadRegistrationServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Register a payload to the robot.
     * @param {Payload} payload The payload protobuf message to register.
     * @param {string} secret Unique string to verify payload.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<payloadRegistrationProtos.RegisterPayloadResponse>}
     */
    registerPayload(payload: Payload, secret: string, args?: Object): Promise<payloadRegistrationProtos.RegisterPayloadResponse>;
    /**
     * Update an existing payload's version on the robot.
     * @param {string} guid The GUID of the payload to update.
     * @param {string} secret Secret of the payload to update.
     * @param {*} updatedVersion The new version to set this payload to.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<payloadRegistrationProtos.UpdatePayloadVersionResponse>}
     */
    updatePayloadVersion(guid: string, secret: string, updatedVersion: any, args?: Object): Promise<payloadRegistrationProtos.UpdatePayloadVersionResponse>;
    /**
     * Request a limited-access auth token for a payload.
     * Getting the auth token requires payload to be authorized via the web console.
     * @param {string} guid The GUID of the registered payload requesting the token.
     * @param {string} secret The secret of the registered payload requesting the token.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<string>}
     */
    getPayloadAuthToken(guid: string, secret: string, args?: Object): Promise<string>;
    /**
     * Attach a payload to the robot.
     * @param {string} guid The GUID of the payload to attach.
     * @param {string} secret Secret of the payload to attach.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>}
     */
    attachPayload(guid: string, secret: string, args?: Object): Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>;
    /**
     * Detach a payload from the robot.
     * @param {string} guid The GUID of the payload to detach.
     * @param {string} secret Secret of the payload to detach.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>}
     */
    detachPayload(guid: string, secret: string, args?: Object): Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>;
}
/**
 * Helper class to keep a payload entry registered.
 *
 * Using a payload keep alive will ensure that a payload automatically re-registers itself with
 * the robot if it is ever forgotten. However, payload registrations on Spot are persistent
 * across power cycles and updates, so in most cases there is no need to send a payload
 * registration request after the first successful payload registration. The use of a payload
 * registration keep alive should only be used when a payload is expected to be regularly
 * reconfigured by forgetting & re-authorizing the payload in the web page.
 */
export class PayloadRegistrationKeepAlive {
    /**
     * @param {PayloadRegistrationClient} payRegClient Client to the payload registration service.
     * @param {Payload} payload Object that defines the payload to register.
     * @param {string} secret String secret for the payload.
     * @param {number} registrationInterval Number of milliseconds between payload registration requests.
     * @param {Logger} logger Object to log with. Defaults to null, in which case one with the
     * class name is acquired.
     * @param {number} rpcTimeout Number of milliseconds to wait for a payRegClient RPC. Defaults to null,
     * for the default RPC timeout.
     * @param {number} initialRetry Number of milliseconds to wait before retrying a registration that failed
     * due to unhandled errors including RPC transport issues.
     */
    constructor(payRegClient: PayloadRegistrationClient, payload: Payload, secret: string, registrationInterval?: number, logger?: Logger, rpcTimeout?: number, initialRetry?: number);
    /**
     * The payload registration client
     * @type {PayloadRegistrationClient}
     */
    payRegClient: PayloadRegistrationClient;
    /**
     * Object that defines the payload to register.
     * @type {Payload}
     */
    payload: Payload;
    /**
     * String secret for the payload.
     * @type {string}
     */
    secret: string;
    /**
     * Number of milliseconds between payload registration requests.
     * @type {number}
     */
    _registrationInterval: number;
    /**
     * Object to log with. Defaults to null, in which case one with the
     * class name is acquired.
     * @type {Logger}
     */
    logger: Logger;
    /**
     * Number of milliseconds to wait for a payRegClient RPC. Defaults to null,
     * for the default RPC timeout.
     * @type {number}
     */
    _rpcTimeout: number;
    /**
     * Number of milliseconds to wait before retrying a failed registration.
     * @type {number}
     */
    _initialRetry: number;
    /**
     * Optional callback called when an error occurs in the re-registration loop. It returns an
     * ErrorCallbackResult, or a promise of one, telling the loop what to do.
     * @type {?function(Error): (number|Promise<number>)}
     */
    reregistrationErrorCallback: ((arg0: Error) => (number | Promise<number>)) | null;
    /**
     * End registration signal
     * @type {Event}
     * @private
     */
    private _endReregisterSignal;
    /**
     * @type {boolean}
     * @private
     */
    private _started;
    /**
     * The re-registration loop, while it runs.
     * @type {?Promise<void>}
     * @private
     */
    private _task;
    /**
     * Register and then kick off the re-registration loop.
     * Can not be restarted with this method after a shutdown.
     * @returns {Promise<PayloadRegistrationKeepAlive>}
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {Error} The keep-alive was started more than once.
     */
    start(): Promise<PayloadRegistrationKeepAlive>;
    /**
     * Are we still periodically re-registering?
     * @returns {boolean}
     */
    isAlive(): boolean;
    /**
     * Stop the background thread.
     * @returns {Promise<void>} Resolves once the loop has ended, like Python's join().
     */
    shutdown(): Promise<void>;
    /**
     * Handles a removal of the payload from the robot payload page while still connected.
     * @private
     */
    private _periodicReregister;
    [Symbol.dispose](): void;
    [Symbol.asyncDispose](): Promise<void>;
}
export const _payloadRegistrationError: (...args: any[]) => any;
import { ResponseError } from "./exceptions";
import { PayloadRegistrationServiceClient } from "../../src/bosdyn/api/payload_registration_service_grpc_pb";
import { BaseClient } from "./common";
import payloadRegistrationProtos = require("../../src/bosdyn/api/payload_registration_pb");
