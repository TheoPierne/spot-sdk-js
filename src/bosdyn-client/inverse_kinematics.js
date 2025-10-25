'use strict';

const { BaseClient, commonHeaderErrors } = require('./common');
const { InverseKinematicsServiceClient } = require('../bosdyn/api/spot/inverse_kinematics_service_grpc_pb');

/**
 * Client to request inverse kinematics solutions.
 * @extends {BaseClient<InverseKinematicsServiceClient>}
 */
class InverseKinematicsClient extends BaseClient {
  static defaultServiceName = 'inverse-kinematics';
  static serviceType = 'bosdyn.api.spot.InverseKinematicsService';

  constructor() {
    super(InverseKinematicsServiceClient);
  }

  /**
   * Request an IK solution.
   * @param {inverseKinematicsPb.InverseKinematicsRequest} request Request to issue
   * @param {Object} args Extra arguments
   * @returns {Promise<any>}
   */
  inverseKinematics(request, args) {
    return this.call(this._stub.inverseKinematics, request, null, commonHeaderErrors, true, args);
  }
}

module.exports = {
  InverseKinematicsClient,
};
