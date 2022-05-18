'use strict';

const { BaseClient, common_header_errors } = require('../bosdyn-client/common.js');
const local_grid_pb = require('../bosdyn/api/local_grid_pb.js');
const local_grid_service_grpc_pb = require('../bosdyn/api/local_grid_service_grpc_pb.js');

/**
 * Client to access local grid local_grids from the robot.
 * @extends {BaseClient}
 */
class LocalGridClient extends BaseClient {
  static default_service_name = 'local-grid-service';
  static service_type = 'bosdyn.api.LocalGridService';

  /**
   * Create an instance of LocalGridClient's class.
   * @param {string} [name=null] Name of the Class.
   */
  constructor(name = null) {
    super(local_grid_service_grpc_pb.LocalGridServiceClient, name);
  }

  /**
   * Get a list of the local_grid types available from the robot.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<Array<local_grid_pb.LocalGridType>>} A list of the different types of local grids.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_local_grid_types(args) {
    const request = new local_grid_pb.GetLocalGridTypesRequest();
    return this.call(
      this._stub.getLocalGridTypes,
      request,
      res => res.getLocalGridTypeList(),
      common_header_errors,
      args,
    );
  }

  /**
   * Get a list of the local_grid types available from the robot asynchronously.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<Array<local_grid_pb.LocalGridType>>} A list of the different types of local grids.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_local_grid_types_async(args) {
    const request = new local_grid_pb.GetLocalGridTypesRequest();
    return this.call_async(
      this._stub.getLocalGridTypes,
      request,
      res => res.getLocalGridTypeList(),
      common_header_errors,
      args,
    );
  }

  /**
   * Get a selection of local_grids of specified types.
   * @param {Array<string>} local_grid_type_names List of strings specifying types local_grids to request.
   * Available local_grid types may be requested using get_local_grid_types().
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<Array<local_grid_pb.LocalGridResponse>>} A list of LocalGridResponseProtos,
   * each containing a local_grid or an error status code.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_local_grids(local_grid_type_names, args) {
    const request = new local_grid_pb.GetLocalGridsRequest();
    for (const local_grid_type_name of local_grid_type_names) {
      request.addLocalGridRequests(local_grid_type_name);
    }
    return this.call(
      this._stub.getLocalGrids,
      request,
      res => res.getLocalGridResponsesList(),
      common_header_errors,
      args,
    );
  }

  /**
   * Get a selection of local_grids of specified types asynchronously.
   * @param {Array<string>} local_grid_type_names List of strings specifying types local_grids to request.
   * Available local_grid types may be requested using get_local_grid_types().
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<Array<local_grid_pb.LocalGridResponse>>} A list of LocalGridResponseProtos,
   * each containing a local_grid or an error status code.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_local_grids_async(local_grid_type_names, args) {
    const request = new local_grid_pb.GetLocalGridsRequest();
    for (const local_grid_type_name of local_grid_type_names) {
      request.addLocalGridRequests(local_grid_type_name);
    }
    return this.call_async(
      this._stub.getLocalGrids,
      request,
      res => res.getLocalGridResponsesList(),
      common_header_errors,
      args,
    );
  }
}

module.exports = {
  LocalGridClient,
};
