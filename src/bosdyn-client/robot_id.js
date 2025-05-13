'use strict';

const robotIdPb = require('../bosdyn/api/robot_id_pb');
const { RobotIdServiceClient } = require('../bosdyn/api/robot_id_service_grpc_pb');
const { BaseClient, commonHeaderErrors } = require('../bosdyn-client/common');

function _getEntryValue(response) {
  return response.getRobotId();
}

/**
 * Client to access robot info.
 * @extends {BaseClient<RobotIdServiceClient>}
 */
class RobotIdClient extends BaseClient {
  static defaultServiceName = 'robot-id';
  static serviceType = 'bosdyn.api.RobotIdService';

  constructor() {
    super(RobotIdServiceClient);
  }

  /**
   * Get the robot's robot/id.proto.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robotIdPb.RobotId>}
   */
  getId(args) {
    const req = new robotIdPb.RobotIdRequest();
    return this.call(this._stub.getRobotId, req, _getEntryValue, commonHeaderErrors, args);
  }
}

/**
 * Return the version as an array for easy comparisons
 * @param {robotIdPb.SoftwareVersion} version The representation of version in proto format.
 * @returns {number[]}
 */
function toVersionArray(version) {
  return [version.getMajorVersion(), version.getMinorVersion(), version.getPatchLevel()];
}

module.exports = {
  RobotIdClient,
  toVersionArray,
};
