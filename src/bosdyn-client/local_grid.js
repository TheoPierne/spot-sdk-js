'use strict';

const localGridPb = require('../bosdyn/api/local_grid_pb.js');
const { LocalGridServiceClient } = require('../bosdyn/api/local_grid_service_grpc_pb.js');
const { BaseClient, commonHeaderErrors } = require('../bosdyn-client/common.js');

/**
 * Client to access local grid local_grids from the robot.
 * @extends {BaseClient<LocalGridServiceClient>}
 */
class LocalGridClient extends BaseClient {
  static defaultServiceName = 'local-grid-service';
  static serviceType = 'bosdyn.api.LocalGridService';

  constructor() {
    super(LocalGridServiceClient);
  }

  /**
   * Get a list of the local_grid types available from the robot.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<localGridPb.LocalGridType[]>} A list of the different types of local grids.
   * @throws {RpcError} Problem communicating with the robot.
   */
  getLocalGridTypes(args) {
    const request = new localGridPb.GetLocalGridTypesRequest();
    return this.call(
      this._stub.getLocalGridTypes,
      request,
      res => res.getLocalGridTypeList(),
      commonHeaderErrors,
      args,
    );
  }

  /**
   * Get a selection of local_grids of specified types.
   * @param {string[]} localGridTypeNames List of strings specifying types local_grids to request.
   * Available local_grid types may be requested using get_local_grid_types().
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<localGridPb.LocalGridResponse[]>} A list of LocalGridResponseProtos,
   * each containing a local_grid or an error status code.
   * @throws {RpcError} Problem communicating with the robot.
   */
  getLocalGrids(localGridTypeNames, args) {
    const request = new localGridPb.GetLocalGridsRequest();
    for (const localGridTypeName of localGridTypeNames) {
      request.addLocalGridRequests(new localGridPb.LocalGrid().setLocalGridTypeName(localGridTypeName));
    }
    return this.call(
      this._stub.getLocalGrids,
      request,
      res => res.getLocalGridResponsesList(),
      commonHeaderErrors,
      args,
    );
  }
}

module.exports = {
  LocalGridClient,
};
