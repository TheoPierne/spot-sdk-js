export type RpcError = import("./exceptions").RpcError;
export type Lease = import("./lease").Lease;
export type Walk = import("../../src/bosdyn/api/autowalk/walks_pb").Walk;
/**
 * Client for the Autowalk service.
 * @extends {BaseClient<AutowalkServiceClient>}
 */
export class AutowalkClient extends BaseClient<AutowalkServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    /**
     * Compile autowalk request generator
     * @param {Walk} walk A walks_pb.Walk input to be loaded onto the robot by the autowalk service
     * @private
     * @returns {autowalkPb.CompileAutowalkRequest}
     */
    private static _compileAutowalkRequest;
    /**
     * Load autowalk request generator
     * @param {Walk} walk A walks_pb.Walk input to be loaded onto the robot by the autowalk service
     * @param {Lease[]} leases Leases the autowalk service will need to use. Unlike other clients, these MUST
     * be specified.
     * @returns {autowalkPb.LoadAutowalkRequest}
     */
    static _loadAutowalkRequest(walk: Walk, leases: Lease[]): autowalkPb.LoadAutowalkRequest;
    constructor();
    /**
     * Update instance from another object.
     * @param {Object} other The object where to copy from.
     */
    updateFrom(other: Object): void;
    /**
     * Send the input walk file to the autowalk service for compilation.
     * @param {Walk} walk A walks_pb.Walk input to be compiled by the autowalk service
     * @param {number} dataChunkTypeByte max size of each streamed message
     * @param {Object} [args] The arguments that can be send with the RPC request
     * @returns {Promise<autowalkPb.CompileAutowalkResponse>}
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {CompilationError} The walk failed to compile because it was malformed.
     * @throws {ValidationError} The walk failed to validate because some part of it was unable to initialize.
     */
    compileAutowalk(walk: Walk, dataChunkTypeByte?: number, args?: Object): Promise<autowalkPb.CompileAutowalkResponse>;
    /**
     * Send the input walk file to the autowalk service for compilation and
     * load resulting mission to the Mission Service on the robot.
     * @param {Walk} walk A walks_pb.Walk input to be loaded onto the robot by the autowalk service
     * @param {Lease[]} leases Leases the autowalk service will need to use. Unlike other clients, these MUST
     * be specified.
     * @param {number} dataChunkByteSize max size of each streamed message
     * @param {Object} [args] The arguments that can be send with the RPC request
     * @returns {Promise<autowalkPb.LoadAutowalkResponse>}
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {CompilationError} The walk failed to compile because it was malformed.
     * @throws {ValidationError} The walk failed to validate because some part of it was unable to initialize.
     */
    loadAutowalk(walk: Walk, leases?: Lease[], dataChunkByteSize?: number, args?: Object): Promise<autowalkPb.LoadAutowalkResponse>;
}
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./lease').Lease} Lease
 * @typedef {import('../../src/bosdyn/api/autowalk/walks_pb').Walk} Walk
 */
/** General class of errors for autowalk service. */
export class AutowalkResponseError extends ResponseError {
}
/** Provided Walk could not be compiled because the Walk was malformed. */
export class CompilationError extends AutowalkResponseError {
}
/** Provided Walk could not be validated because some part of the Walk was unable to initialize. */
export class ValidationError extends AutowalkResponseError {
}
import { AutowalkServiceClient } from "../../src/bosdyn/api/autowalk/autowalk_service_grpc_pb";
import { BaseClient } from "./common";
import autowalkPb = require("../../src/bosdyn/api/autowalk/autowalk_pb");
import { ResponseError } from "./exceptions";
