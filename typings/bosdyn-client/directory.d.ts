export type RpcError = import("./exceptions").RpcError;
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 */
/** General class of errors for Directory service. */
export class DirectoryResponseError extends ResponseError {
}
/** The requested service name does not exist. */
export class NonexistentServiceError extends DirectoryResponseError {
}
/**
 * List robot services and get information on them.
 * @extends {BaseClient<DirectoryServiceClient>}
 */
export class DirectoryClient extends BaseClient<DirectoryServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * List all services present on the robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<directoryPb.ServiceEntry[]>} A list of the proto message definitions of all registered services
     * @throws {RpcError} Problem communicating with the robot.
     */
    list(args?: Object): Promise<directoryPb.ServiceEntry[]>;
    /**
     * Get the service entry for one particular service specified by name.
     * @param {string} serviceName The name of the service to retrieve.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<directoryPb.ServiceEntry>} The proto message definition of the service entry
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {NonexistentServiceError} The service was not found.
     * @throws {DirectoryResponseError} Something went wrong during the directory access.
     */
    getEntry(serviceName: string, args?: Object): Promise<directoryPb.ServiceEntry>;
}
import { ResponseError } from "./exceptions";
import { DirectoryServiceClient } from "../../src/bosdyn/api/directory_service_grpc_pb";
import { BaseClient } from "./common";
import directoryPb = require("../../src/bosdyn/api/directory_pb");
