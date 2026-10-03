/**
 * @file For clients to the robot id service.
 */

'use strict';

const { BaseClient, commonHeaderErrors } = require('./common');
const robotIdPb = require('../bosdyn/api/robot_id_pb');
const { RobotIdServiceClient } = require('../bosdyn/api/robot_id_service_grpc_pb');

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
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<robotIdPb.RobotId>}
   */
  getId(args) {
    const req = new robotIdPb.RobotIdRequest();
    return this.call(this._stub.getRobotId, req, _getEntryValue, commonHeaderErrors, false, args);
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

/**
 * Compares two versions like the tuples of version_tuple() in Python, e.g. `version_tuple(v) >= (1, 2, 0)`: the
 * arrays of JS are compared as strings by `<` and `>=` ([1, 10, 0] < [1, 9, 0]).
 * @param {number[]} a A version, e.g. toVersionArray(version).
 * @param {number[]} b Another version, e.g. [1, 2, 0].
 * @returns {number} -1 if a is older, 0 if equal, 1 if newer (a prefix is older, like a shorter tuple).
 */
function compareVersions(a, b) {
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return Math.sign(a.length - b.length);
}

module.exports = {
  RobotIdClient,
  compareVersions,
  toVersionArray,
  // The name of Python.
  versionTuple: toVersionArray,
};
