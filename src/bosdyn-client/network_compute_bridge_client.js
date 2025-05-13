'use strict';

const { BaseClient, handleCommonHeaderErrors, handleCustomParamsErrors } = require('./common');
const { ResponseError, UnsetStatusError } = require('./exceptions');
const { DefaultDict } = require('./util');

const networkComputeBridgePb = require('../bosdyn/api/network_compute_bridge_pb');
const networkComputeBridgeServiceGrpcPb = require('../bosdyn/api/network_compute_bridge_service_grpc_pb');

class ExternalServiceNotFoundError extends ResponseError {}
class ExternalServerError extends ResponseError {}
class NetworkComputeRotationError extends ResponseError {}
class NetworkComputeAnalysisFailedError extends ResponseError {}

/**
 * Client to either the NetworkComputeBridgeService or the NetworkComputeBridgeWorkerService.
 * @extends {BaseClient<networkComputeBridgeServiceGrpcPb.NetworkComputeBridgeClient>}
 */
class NetworkComputeBridgeClient extends BaseClient {
  static defaultServiceName = 'network-compute-bridge';
  static serviceType = 'bosdyn.api.NetworkComputeBridge';

  constructor() {
    super(networkComputeBridgeServiceGrpcPb.NetworkComputeBridgeClient);
  }

  /**
   * List all available models that the service knows.
   * @param {string} serviceName The service to query for models.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<networkComputeBridgePb.ListAvailableModelsResponse>} The full ListAvailableModelsResponse,
   * which contains any models the service or worker service advertise.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
   * in the robot's directory.
   * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
   * the set of all models.
   */
  listAvailableModels(serviceName, args) {
    const req = new networkComputeBridgePb.ListAvailableModelsRequest().setServerConfig(
      new networkComputeBridgePb.NetworkComputeServerConfiguration().setServiceName(serviceName),
    );
    return this.listAvailableModelsCommand(req, args);
  }

  /**
   * List all available models that the service knows.
   * @param {networkComputeBridgePb.ListAvailableModelsRequest} listRequest The request to list all models.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {networkComputeBridgePb.ListAvailableModelsResponse} The full ListAvailableModelsResponse,
   * which contains any models the service or worker service advertise.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
   * in the robot's directory.
   * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
   * the set of all models.
   */
  listAvailableModelsCommand(listRequest, args) {
    return this.call(this._stub.listAvailableModels, listRequest, null, _listAvailableModelsError, args);
  }

  /**
   * Issue the main network compute bridge request to run a model on specific, requested data.
   * @param {networkComputeBridgePb.NetworkComputeRequest} networkComputeRequest The request which contains what
   * type of data should be processed, and which model the server should run.
   * @param {Object} args Extra arguments for controlling RPC details.
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
  networkComputeBridgeCommand(networkComputeRequest, args) {
    return this.call(this._stub.networkCompute, networkComputeRequest, null, _networkComputeError, args);
  }
}

const _NETWORK_COMPUTE_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_NETWORK_COMPUTE_STATUS_TO_ERROR.set(networkComputeBridgePb.NetworkComputeStatus.NETWORK_COMPUTE_STATUS_SUCCESS, [
  null,
  null,
]);
_NETWORK_COMPUTE_STATUS_TO_ERROR.set(networkComputeBridgePb.NetworkComputeStatus.NETWORK_COMPUTE_STATUS_UNKNOWN, [
  UnsetStatusError,
  "Response's status field (in either message or common header) was UNKNOWN value.",
]);
_NETWORK_COMPUTE_STATUS_TO_ERROR.set(
  networkComputeBridgePb.NetworkComputeStatus.NETWORK_COMPUTE_STATUS_EXTERNAL_SERVICE_NOT_FOUND,
  [ExternalServiceNotFoundError, 'The requested service for external computation was not found in the directory.'],
);
_NETWORK_COMPUTE_STATUS_TO_ERROR.set(
  networkComputeBridgePb.NetworkComputeStatus.NETWORK_COMPUTE_STATUS_EXTERNAL_SERVER_ERROR,
  [ExternalServerError, 'The call to the external server did not complete successfully.'],
);
_NETWORK_COMPUTE_STATUS_TO_ERROR.set(
  networkComputeBridgePb.NetworkComputeStatus.NETWORK_COMPUTE_STATUS_ROTATION_ERROR,
  [NetworkComputeRotationError, 'The robot failed to rotate the image as requested.'],
);
_NETWORK_COMPUTE_STATUS_TO_ERROR.set(
  networkComputeBridgePb.NetworkComputeStatus.NETWORK_COMPUTE_STATUS_ANALYSIS_FAILED,
  [NetworkComputeAnalysisFailedError, 'The model failed to analyze the set of input images, but a retry might work.'],
);

const _LIST_AVAILABLE_MODELS_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_LIST_AVAILABLE_MODELS_STATUS_TO_ERROR.set(
  networkComputeBridgePb.ListAvailableModelsStatus.LIST_AVAILABLE_MODELS_STATUS_SUCCESS,
  [null, null],
);
_LIST_AVAILABLE_MODELS_STATUS_TO_ERROR.set(
  networkComputeBridgePb.ListAvailableModelsStatus.LIST_AVAILABLE_MODELS_STATUS_UNKNOWN,
  [UnsetStatusError, "Response's status field (in either message or common header) was UNKNOWN value."],
);
_LIST_AVAILABLE_MODELS_STATUS_TO_ERROR.set(
  networkComputeBridgePb.ListAvailableModelsStatus.LIST_AVAILABLE_MODELS_STATUS_EXTERNAL_SERVICE_NOT_FOUND,
  [ExternalServiceNotFoundError, 'The requested service for external computation was not found in the directory.'],
);
_LIST_AVAILABLE_MODELS_STATUS_TO_ERROR.set(
  networkComputeBridgePb.ListAvailableModelsStatus.LIST_AVAILABLE_MODELS_STATUS_EXTERNAL_SERVER_ERROR,
  [ExternalServerError, 'The call to the external server did not complete successfully.'],
);

const _networkComputeError = handleCommonHeaderErrors(
  handleCustomParamsErrors(response => {
    const [errorType, message] = _NETWORK_COMPUTE_STATUS_TO_ERROR.get(response.getStatus());
    if (errorType === null) return null;
    return new errorType(response, message);
  }),
);

const _listAvailableModelsError = handleCommonHeaderErrors(response => {
  const [errorType, message] = _LIST_AVAILABLE_MODELS_STATUS_TO_ERROR.get(response.getStatus());
  if (errorType === null) return null;
  return new errorType(response, message);
});

module.exports = {
  NetworkComputeBridgeClient,
};
