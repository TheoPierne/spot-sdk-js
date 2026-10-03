export type RpcError = import("./exceptions").RpcError;
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 */
/** The requested service for external computation was not found in the directory. */
export class ExternalServiceNotFoundError extends ResponseError {
}
/** The call to the external server did not complete successfully. */
export class ExternalServerError extends ResponseError {
}
/** The robot failed to rotate the image as requested. */
export class NetworkComputeRotationError extends ResponseError {
}
/** The model failed to analyze the set of input images, but a retry might work. */
export class NetworkComputeAnalysisFailedError extends ResponseError {
}
/**
 * Client to either the NetworkComputeBridgeService or the NetworkComputeBridgeWorkerService.
 * @extends {BaseClient<networkComputeBridgeServiceGrpcPb.NetworkComputeBridgeClient>}
 */
export class NetworkComputeBridgeClient extends BaseClient<networkComputeBridgeServiceGrpcPb.NetworkComputeBridgeClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * List all available models that the service knows.
     * @param {string} serviceName The service to query for models.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<networkComputeBridgePb.ListAvailableModelsResponse>} The full ListAvailableModelsResponse,
     * which contains any models the service or worker service advertise.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
     * in the robot's directory.
     * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
     * the set of all models.
     */
    listAvailableModels(serviceName: string, args?: Object): Promise<networkComputeBridgePb.ListAvailableModelsResponse>;
    /**
     * List all available models that the service knows.
     * @param {networkComputeBridgePb.ListAvailableModelsRequest} listRequest The request to list all models.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {networkComputeBridgePb.ListAvailableModelsResponse} The full ListAvailableModelsResponse,
     * which contains any models the service or worker service advertise.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
     * in the robot's directory.
     * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
     * the set of all models.
     */
    listAvailableModelsCommand(listRequest: networkComputeBridgePb.ListAvailableModelsRequest, args?: Object): networkComputeBridgePb.ListAvailableModelsResponse;
    /**
     * Issue the main network compute bridge request to run a model on specific, requested data.
     * @param {networkComputeBridgePb.NetworkComputeRequest} networkComputeRequest The request which contains what
     * type of data should be processed, and which model the server should run.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<networkComputeBridgePb.NetworkComputeResponse>} The full NetworkComputeResponse,
     * which contains the processed data.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
     * in the robot's directory.
     * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
     * the set of all models.
     * @throws {NetworkComputeRotationError} For processed image data, the robot was unable to rotate the
     * image as requested.
     */
    networkComputeBridgeCommand(networkComputeRequest: networkComputeBridgePb.NetworkComputeRequest, args?: Object): Promise<networkComputeBridgePb.NetworkComputeResponse>;
}
import { ResponseError } from "./exceptions";
import networkComputeBridgeServiceGrpcPb = require("../../src/bosdyn/api/network_compute_bridge_service_grpc_pb");
import { BaseClient } from "./common";
import networkComputeBridgePb = require("../../src/bosdyn/api/network_compute_bridge_pb");
