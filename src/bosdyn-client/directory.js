'use strict';

const {
  BaseClient,
  commonHeaderErrors,
  errorFactory,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
} = require('./common');
const { ResponseError } = require('./exceptions');
const { DefaultDict } = require('./util');

const directoryPb = require('../bosdyn/api/directory_pb');
const { DirectoryServiceClient } = require('../bosdyn/api/directory_service_grpc_pb');

class DirectoryResponseError extends ResponseError {}
class NonexistentServiceError extends DirectoryResponseError {}

const _STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_STATUS_TO_ERROR.set(directoryPb.GetServiceEntryResponse.Status.STATUS_OK, [null, null]);
_STATUS_TO_ERROR.set(directoryPb.GetServiceEntryResponse.Status.STATUS_NONEXISTENT_SERVICE, [
  NonexistentServiceError,
  'The requested service name does not exist.',
]);

const _errorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(directoryPb.GetServiceEntryResponse.Status),
      _STATUS_TO_ERROR,
    ),
  ),
);

function _listValue(response) {
  return response.getServiceEntriesList();
}

function _getEntryValue(response) {
  return response.getServiceEntry();
}

/**
 * List robot services and get information on them.
 * @extends {BaseClient<DirectoryServiceClient>}
 */
class DirectoryClient extends BaseClient {
  static defaultServiceName = 'directory';
  static serviceType = 'bosdyn.api.DirectoryService';

  constructor() {
    super(DirectoryServiceClient);
  }

  /**
   * List all services present on the robot.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<directoryPb.ServiceEntry[]>} A list of the proto message definitions of all registered services
   * @throws {RpcError} Problem communicating with the robot.
   */
  list(args) {
    const req = new directoryPb.ListServiceEntriesRequest();
    return this.call(this._stub.listServiceEntries, req, _listValue, commonHeaderErrors, args);
  }

  /**
   * Get the service entry for one particular service specified by name.
   * @param {string} serviceName The name of the service to retrieve.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<directoryPb.ServiceEntry>} The proto message definition of the service entry
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {NonexistentServiceError} The service was not found.
   * @throws {DirectoryResponseError} Something went wrong during the directory access.
   */
  getEntry(serviceName, args) {
    const req = new directoryPb.GetServiceEntryRequest().setServiceName(serviceName);
    return this.call(this._stub.getServiceEntry, req, _getEntryValue, _errorFromResponse, args);
  }
}

module.exports = {
  DirectoryResponseError,
  NonexistentServiceError,
  DirectoryClient,
};
