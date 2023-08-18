'use strict';

const { BaseClient, common_header_errors } = require('./common');
const inverse_kinematics_service_grpc_pb = require('../bosdyn/api/spot/inverse_kinematics_service_grpc_pb');

class InverseKinematicsClient extends BaseClient {
  static default_service_name = 'inverse-kinematics';
  static service_type = 'bosdyn.api.spot.InverseKinematicsService';

  constructor() {
    super(inverse_kinematics_service_grpc_pb.InverseKinematicsServiceClient);
  }

  /**
   * Request an IK solution.
   * @param {inverse_kinematics_pb.InverseKinematicsRequest} request Request to issue
   * @param {Object} args Extra arguments
   * @returns {Promise<any>}
   */
  inverse_kinematics(request, args) {
    return this.call(this._stub.InverseKinematics, request, null, common_header_errors, args);
  }
}

module.exports = {
  InverseKinematicsClient,
};
