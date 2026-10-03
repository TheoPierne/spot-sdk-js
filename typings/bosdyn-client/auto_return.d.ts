export type RpcError = import("./exceptions").RpcError;
export type Lease = import("./lease").Lease;
/**
 * A client for configuring automatic AutoReturn behavior.
 * @extends {BaseClient<AutoReturnServiceClient>}
 */
export class AutoReturnClient extends BaseClient<AutoReturnServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    _timesyncEndpoint: any;
    /**
     * Set the configuration of the AutoReturn system.
     * @param {autoReturnPb.Params} params Parameters to use.
     * @param {Lease[]} leases An array of leases.
     * @param {boolean} clearBuffer Set True to forget any currently buffered locations.
     * @param {Object} [args] Arguments that can be passed to the RPC request.
     * @returns {Promise<autoReturnPb.ConfigureResponse>}
     * @throws {InvalidParameterError} An invalid request was received by the service.
     * @throws {RpcError} Problem communicating with the service.
     */
    configure(params: autoReturnPb.Params, leases: Lease[], clearBuffer?: boolean, args?: Object): Promise<autoReturnPb.ConfigureResponse>;
    /**
     * Get the configuration of the AutoReturn system.
     * @param {Object} [args] Arguments that can be passed to the RPC request.
     * @returns {Promise<autoReturnPb.GetConfigurationResponse>}
     * @throws {RpcError} Problem communicating with the service.
     */
    getConfiguration(args?: Object): Promise<autoReturnPb.GetConfigurationResponse>;
    /**
     * Start AutoReturn now.
     * @param {autoReturnPb.Params} [params=null] Parameters to use.
     * @param {Lease[]} [leases=[]] Leases to be included in the request.
     * @param {Object} [args] Arguments that can be passed to the RPC request.
     * @returns {Promise<autoReturnPb.StartResponse>}
     * @throws {InvalidParameterError} An invalid request was received by the service.
     * @throws {RpcError} Problem communicating with the service.
     */
    start(params?: autoReturnPb.Params, leases?: Lease[], args?: Object): Promise<autoReturnPb.StartResponse>;
    /**
     * Configure request generator
     * @param {autoReturnPb.Params} params Parameters to use.
     * @param {Lease[]} leases Leases to be included in the request.
     * @param {boolean} clearBuffer Set True to forget any currently buffered locations.
     * @returns {autoReturnPb.ConfigureRequest}
     * @private
     */
    private _configureRequest;
    /**
     * Start request generator
     * @param {autoReturnPb.Params} params Parameters to use.
     * @param {Lease[]} leases Leases to be included in the request.
     * @returns {autoReturnPb.StartRequest}
     * @private
     */
    private _startRequest;
}
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./lease').Lease} Lease
 */
/** Error in Auto Return RPC */
export class AutoReturnResponseError extends ResponseError {
}
/** One or more parameters were invalid. */
export class InvalidParameterError extends AutoReturnResponseError {
}
import { AutoReturnServiceClient } from "../../src/bosdyn/api/auto_return/auto_return_service_grpc_pb";
import { BaseClient } from "./common";
import autoReturnPb = require("../../src/bosdyn/api/auto_return/auto_return_pb");
import { ResponseError } from "./exceptions";
