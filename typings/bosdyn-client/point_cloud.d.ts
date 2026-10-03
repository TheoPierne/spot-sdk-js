export type RpcError = import("./exceptions").RpcError;
/**
 * Client to authenticate to the robot.
 * @extends {BaseClient<PointCloudServiceClient>}
 */
export class PointCloudClient extends BaseClient<PointCloudServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    static _getPointCloudRequest(point_cloud_requests: any): pointCloudProtos.GetPointCloudRequest;
    static _getListPointCloudSourceRequest(): pointCloudProtos.ListPointCloudSourcesRequest;
    constructor();
    /**
     * Obtain the list of PointCloudSources.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<pointCloudProtos.PointCloudSource[]>} A list of the different point cloud
     * sources as strings.
     * @throws {RpcError} Problem communicating with the robot.
     */
    listPointCloudSources(args?: Object): Promise<pointCloudProtos.PointCloudSource[]>;
    /**
     * Obtain point clouds from sources using default parameters.
     * @param {string[]} pointCloudSources The source names to request point clouds from.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<pointCloudProtos.PointCloudResponse[]>} A list of point cloud responses for each of the
     * requested sources.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {UnknownPointCloudSourceError} Provided point cloud source was invalid or not found.
     * @throws {SourceDataError} Failed to fill out PointCloudSource. All other fields are not filled.
     * @throws {UnsetStatusError} An internal PointCloudService issue has happened.
     * @throws {PointCloudDataError} Problem with the point cloud data. Only PointCloudSource is filled.
     */
    getPointCloudFromSources(pointCloudSources: string[], args?: Object): Promise<pointCloudProtos.PointCloudResponse[]>;
    /**
     * Get the most recent point cloud.
     * @param {Array<pointCloudProtos.PointCloudRequest>} pointCloudRequests A list of PointCloudRequest protobuf
     * messages which specify which point clouds to collect
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<pointCloudProtos.PointCloudResponse[]>} A list of point cloud responses
     * for each of the requested sources.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {UnknownPointCloudSourceError} Provided point cloud source was invalid or not found.
     * @throws {SourceDataError} Failed to fill out PointCloudSource. All other fields are not filled.
     * @throws {UnsetStatusError} An internal PointCloudService issue has happened.
     * @throws {PointCloudDataError} Problem with the point cloud data. Only PointCloudSource is filled.
     */
    getPointCloud(pointCloudRequests: Array<pointCloudProtos.PointCloudRequest>, args?: Object): Promise<pointCloudProtos.PointCloudResponse[]>;
}
/**
 * Helper function which builds an PointCloudRequest from an point cloud source name.
 * @param {string} pointCloudSourceName The point cloud source to query.
 * @returns {pointCloudProtos.PointCloudRequest} The PointCloudRequest protobuf message for the given parameters.
 */
export function buildPcRequest(pointCloudSourceName: string): pointCloudProtos.PointCloudRequest;
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 */
/** General class of errors for PointCloud service. */
export class PointCloudResponseError extends ResponseError {
}
/** System cannot find the requested point cloud source name. */
export class UnknownPointCloudSourceError extends PointCloudResponseError {
}
/** System cannot generate the PointCloudSource at this time. */
export class SourceDataError extends PointCloudResponseError {
}
/** System cannot generate point cloud data at this time. */
export class PointCloudDataError extends PointCloudResponseError {
}
/** System cannot generate point cloud with the request cloud_type. */
export class PointCloudTypeError extends PointCloudResponseError {
}
import { PointCloudServiceClient } from "../../src/bosdyn/api/point_cloud_service_grpc_pb";
import { BaseClient } from "./common";
import pointCloudProtos = require("../../src/bosdyn/api/point_cloud_pb");
import { ResponseError } from "./exceptions";
