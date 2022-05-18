'use strict';

const { BaseClient, error_pair } = require('./common');
const { ResponseError, UnsetStatusError } = require('./exceptions');

const network_compute_bridge_pb = require('../bosdyn/api/network_compute_bridge_pb');
const network_compute_bridge_service_grpc_pb = require('../bosdyn/api/network_compute_bridge_service_grpc_pb');

class ExternalServiceNotFoundError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'ExternalServiceNotFoundError';
  }
}

class ExternalServerError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'ExternalServerError';
  }
}

class NetworkComputeRotationError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'NetworkComputeRotationError';
  }
}

/**
 * Client to either the NetworkComputeBridgeService or the NetworkComputeBridgeWorkerService.
 * @class NetworkComputeBridgeClient
 * @extends BaseClient
 */
class NetworkComputeBridgeClient extends BaseClient {
  static default_service_name = 'network-compute-bridge';
  static service_type = 'bosdyn.api.NetworkComputeBridge';

  /**
   * Create an instance of NetworkComputeBridgeClient's class.
   * @param {string} [name=null] The BaseClient's name.
   */
  constructor(name = null) {
    super(network_compute_bridge_service_grpc_pb.NetworkComputeBridgeClient, name);
  }

  /**
   * List all available models that the service knows.
   * @param {string} service_name The service to query for models.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<network_compute_bridge_pb.ListAvailableModelsResponse>} The full ListAvailableModelsResponse,
   * which contains any models the service or worker service advertise.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
   * in the robot's directory.
   * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
   * the set of all models.
   */
  list_available_models(service_name, args) {
    const req = new network_compute_bridge_pb.ListAvailableModelsRequest().setServerConfig(
      new network_compute_bridge_pb.NetworkComputeServerConfiguration().setServiceName(service_name),
    );
    return this.list_available_models_command(req, args);
  }

  /**
   * Async version of list_available_models()
   * @param {string} service_name The service to query for models.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<network_compute_bridge_pb.ListAvailableModelsResponse>} The full ListAvailableModelsResponse,
   * which contains any models the service or worker service advertise.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
   * in the robot's directory.
   * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
   * the set of all models.
   */
  list_available_models_async(service_name, args) {
    const req = new network_compute_bridge_pb.ListAvailableModelsRequest().setServerConfig(
      new network_compute_bridge_pb.NetworkComputeServerConfiguration().setServiceName(service_name),
    );
    return this.list_available_models_command_async(req, args);
  }

  /**
   * List all available models that the service knows.
   * @param {network_compute_bridge_pb.ListAvailableModelsRequest} list_request The request to list all models.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {network_compute_bridge_pb.ListAvailableModelsResponse} The full ListAvailableModelsResponse,
   * which contains any models the service or worker service advertise.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
   * in the robot's directory.
   * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
   * the set of all models.
   */
  list_available_models_command(list_request, args) {
    return this.call(this._stub.listAvailableModels, list_request, null, _list_available_models_error, args);
  }

  /**
   * Async version of list_available_models_command().
   * @param {network_compute_bridge_pb.ListAvailableModelsRequest} list_request The request to list all models.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {network_compute_bridge_pb.ListAvailableModelsResponse} The full ListAvailableModelsResponse,
   * which contains any models the service or worker service advertise.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
   * in the robot's directory.
   * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
   * the set of all models.
   */
  list_available_models_command_async(list_request, args) {
    return this.call_async(this._stub.listAvailableModels, list_request, null, _list_available_models_error, args);
  }

  /**
   * Issue the main network compute bridge request to run a model on specific, requested data.
   * @param {network_compute_bridge_pb.NetworkComputeRequest} network_compute_request The request which contains what
   * type of data should be processed, and which model the server should run.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<network_compute_bridge_pb.NetworkComputeResponse>} The full NetworkComputeResponse,
   * which contains the processed data.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
   * in the robot's directory.
   * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
   * the set of all models.
   * @throws {NetworkComputeRotationError} For processed image data, the robot was unable to rotate the
   * image as requested.
   */
  network_compute_bridge_command(network_compute_request, args) {
    return this.call(this._stub.networkCompute, network_compute_request, null, _network_compute_error, args);
  }

  /**
   * Async version of network_compute_bridge_command().
   * @param {network_compute_bridge_pb.NetworkComputeRequest} network_compute_request The request which contains what
   * type of data should be processed, and which model the server should run.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<network_compute_bridge_pb.NetworkComputeResponse>} The full NetworkComputeResponse,
   * which contains the processed data.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ExternalServiceNotFoundError} The network compute bridge worker service was not found
   * in the robot's directory.
   * @throws {ExternalServerError} Either the service or worker service threw an error when responding with
   * the set of all models.
   * @throws {NetworkComputeRotationError} For processed image data, the robot was unable to rotate the
   * image as requested.
   */
  network_compute_bridge_command_async(network_compute_request, args) {
    return this.call_async(this._stub.networkCompute, network_compute_request, null, _network_compute_error, args);
  }
}

const _NETWORK_COMPUTE_STATUS_TO_ERROR = {
  NETWORK_COMPUTE_STATUS_SUCCESS: [null, null],
  NETWORK_COMPUTE_STATUS_UNKNOWN: error_pair(UnsetStatusError),
  NETWORK_COMPUTE_STATUS_EXTERNAL_SERVICE_NOT_FOUND: [
    ExternalServiceNotFoundError,
    'The requested service for external computation was not found in the directory.',
  ],
  NETWORK_COMPUTE_STATUS_EXTERNAL_SERVER_ERROR: [ExternalServerError, null],
  NETWORK_COMPUTE_STATUS_ROTATION_ERROR: [NetworkComputeRotationError, null],
};

const _LIST_AVAILABLE_MODELS_STATUS_TO_ERROR = {
  LIST_AVAILABLE_MODELS_STATUS_SUCCESS: [null, null],
  LIST_AVAILABLE_MODELS_STATUS_UNKNOWN: error_pair(UnsetStatusError),
  LIST_AVAILABLE_MODELS_STATUS_EXTERNAL_SERVICE_NOT_FOUND: [
    ExternalServiceNotFoundError,
    'The requested service for external computation was not found in the directory.',
  ],
  LIST_AVAILABLE_MODELS_STATUS_EXTERNAL_SERVER_ERROR: [ExternalServerError, null],
};

function _network_compute_error(response) {
  const [error_type, message] = _NETWORK_COMPUTE_STATUS_TO_ERROR[response.getStatus()];
  if (error_type === null) return null;
  return new error_type(message);
}

function _list_available_models_error(response) {
  const [error_type, message] = _LIST_AVAILABLE_MODELS_STATUS_TO_ERROR[response.getStatus()];
  if (error_type === null) return null;
  return new error_type(message);
}

module.exports = {
  NetworkComputeBridgeClient,
  ExternalServiceNotFoundError,
  ExternalServerError,
  NetworkComputeRotationError,
};
