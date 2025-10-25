'use strict';

const { BaseClient, errorFactory, commonHeaderErrors, handleCommonHeaderErrors } = require('./common');
const { ResponseError, UnsetStatusError } = require('./exceptions');
const { DefaultDict } = require('./util');

const pointCloudProtos = require('../bosdyn/api/point_cloud_pb');
const { PointCloudServiceClient } = require('../bosdyn/api/point_cloud_service_grpc_pb');

class PointCloudResponseError extends ResponseError {}
class UnknownPointCloudSourceError extends PointCloudResponseError {}
class SourceDataError extends PointCloudResponseError {}
class PointCloudDataError extends PointCloudResponseError {}

const _STATUS_TO_ERROR = DefaultDict(() => [PointCloudResponseError, null]);
_STATUS_TO_ERROR.set(pointCloudProtos.PointCloudResponse.Status.STATUS_OK, [null, null]);
_STATUS_TO_ERROR.set(pointCloudProtos.PointCloudResponse.Status.STATUS_UNKNOWN_SOURCE, [
  UnknownPointCloudSourceError,
  'System cannot find the requested point cloud source name.',
]);
_STATUS_TO_ERROR.set(pointCloudProtos.PointCloudResponse.Status.STATUS_SOURCE_DATA_ERROR, [
  SourceDataError,
  'System cannot generate the PointCloudSource at this time.',
]);
_STATUS_TO_ERROR.set(pointCloudProtos.PointCloudResponse.Status.STATUS_UNKNOWN, [
  UnsetStatusError,
  "Response's status field (in either message or common header) was UNKNOWN value.",
]);
_STATUS_TO_ERROR.set(pointCloudProtos.PointCloudResponse.Status.STATUS_POINT_CLOUD_DATA_ERROR, [
  PointCloudDataError,
  'System cannot generate point cloud data at this time.',
]);

const _errorFromResponse = handleCommonHeaderErrors(response => {
  for (const pointCloudResponse of response.getPointCloudResponses()) {
    const result = errorFactory(
      response,
      pointCloudResponse.getStatus(),
      Object.keys(pointCloudProtos.PointCloudResponse.Status),
      _STATUS_TO_ERROR,
    );
    if (result !== null) return result;
  }
  return null;
});

/**
 * Client to authenticate to the robot.
 * @extends {BaseClient<PointCloudServiceClient>}
 */
class PointCloudClient extends BaseClient {
  static defaultServiceName = 'point-cloud';
  static serviceType = 'bosdyn.api.PointCloudService';

  constructor() {
    super(PointCloudServiceClient);
  }

  /**
   * Obtain the list of PointCloudSources.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<pointCloudProtos.PointCloudSource[]>} A list of the different point cloud
   * sources as strings.
   * @throws {RpcError} Problem communicating with the robot.
   */
  listPointCloudSources(args) {
    const req = PointCloudClient._getListPointCloudSourceRequest();
    return this.call(this._stub.listPointCloudSources, req, _listPointCloudSourcesValue, commonHeaderErrors, false, args);
  }

  /**
   * Obtain point clouds from sources using default parameters.
   * @param {string[]} pointCloudSources The source names to request point clouds from.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Array} A list of point cloud responses for each of the requested sources.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {UnknownPointCloudSourceError} Provided point cloud source was invalid or not found.
   * @throws {point_cloud.SourceDataError} Failed to fill out PointCloudSource. All other fields are not filled.
   * @throws {UnsetStatusError} An internal PointCloudService issue has happened.
   * @throws {PointCloudDataError} Problem with the point cloud data. Only PointCloudSource is filled.
   */
  getPointCloudFromSources(pointCloudSources, args) {
    return this.getPointCloud(
      pointCloudSources.map(src => buildPcRequest(src)),
      args,
    );
  }

  /**
   * Get the most recent point cloud.
   * @param {Array<pointCloudProtos.PointCloudRequest>} pointCloudRequests A list of PointCloudRequest protobuf
   * messages which specify which point clouds to collect
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<pointCloudProtos.PointCloudResponse[]>} A list of point cloud responses
   * for each of the requested sources.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {UnknownPointCloudSourceError} Provided point cloud source was invalid or not found.
   * @throws {point_cloud.SourceDataError} Failed to fill out PointCloudSource. All other fields are not filled.
   * @throws {UnsetStatusError} An internal PointCloudService issue has happened.
   * @throws {PointCloudDataError} Problem with the point cloud data. Only PointCloudSource is filled.
   */
  getPointCloud(pointCloudRequests, args) {
    const req = PointCloudClient._getPointCloudRequest(pointCloudRequests);
    return this.call(this._stub.getPointCloud, req, _getPointCloudValue, _errorFromResponse, true, args);
  }

  static _getPointCloudRequest(point_cloud_requests) {
    return new pointCloudProtos.GetPointCloudRequest().setPointCloudRequestsList(point_cloud_requests);
  }

  static _getListPointCloudSourceRequest() {
    return new pointCloudProtos.ListPointCloudSourcesRequest();
  }
}

/**
 * Helper function which builds an PointCloudRequest from an point cloud source name.
 * @param {string} pointCloudSourceName The point cloud source to query.
 * @returns {pointCloudProtos.PointCloudRequest} The PointCloudRequest protobuf message for the given parameters.
 */
function buildPcRequest(pointCloudSourceName) {
  return new pointCloudProtos.PointCloudRequest().setPointCloudSourceName(pointCloudSourceName);
}

function _listPointCloudSourcesValue(response) {
  return response.getPointCloudSourcesList();
}

function _getPointCloudValue(response) {
  return response.getPointCloudResponsesList();
}

module.exports = {
  PointCloudClient,
  buildPcRequest,
  PointCloudResponseError,
  UnknownPointCloudSourceError,
  SourceDataError,
  PointCloudDataError,
};
