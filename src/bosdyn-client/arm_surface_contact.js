'use strict';

const { BaseClient } = require('./common');
const { addLeaseWalletProcessors } = require('./lease');
const { NoTimeSyncError, _TimeConverter, _editProto } = require('./robot_command');
const { ArmSurfaceContactServiceClient } = require('../bosdyn/api/arm_surface_contact_service_grpc_pb');

const EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME = {
  request: {
    poseTrajectoryInTask: {
      referenceTime: null,
    },
    gripperCommand: {
      trajectory: {
        referenceTime: null,
      },
    },
  },
};

/**
 * Client for the ArmSurfaceContact service.
 * @extends {BaseClient<ArmSurfaceContactServiceClient>}
 */
class ArmSurfaceContactClient extends BaseClient {
  static defaultServiceName = 'arm-surface-contact';
  static serviceType = 'bosdyn.api.ArmSurfaceContactService';

  constructor() {
    super(ArmSurfaceContactServiceClient);
    this._timesyncEndpoint = null;
  }

  /**
   * Update instance from another object.
   * @param {Object} other The object where to copy from.
   * @returns {Promise<void>}
   */
  async updateFrom(other) {
    super.updateFrom(other);
    if (this.lease_wallet) addLeaseWalletProcessors(this, this.leaseWallet);

    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Set or convert fields of the command proto that need timestamps in the robot's clock.
   * @param {arm_surface_contact_pb.ArmSurfaceContactRequest} command Command message to update.
   * @returns {void}
   * @private
   */
  _updateCommandTimestamps(command) {
    if (this._timesyncEndpoint === null) throw new NoTimeSyncError();

    const converter = new _TimeConverter(this, this._timesyncEndpoint);

    function _toRobotTime(key, proto) {
      if (!(key in proto)) return;
      const timestamp = proto[key];
      converter.convertTimestampFromLocalToRobot(timestamp);
    }

    _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _toRobotTime);
  }

  /**
   * Issue an arm surface contact command to the robot.
   * @param {arm_surface_contact_pb.ArmSurfaceContactRequest} request The command request.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<arm_surface_contact_pb.ArmSurfaceContactResponse>} The full arm surface contact response message.
   */
  armSurfaceContactCommand(request, args) {
    this._updateCommandTimestamps(request);
    return this.call(this._stub.armSurfaceContact, request, null, null, true, args);
  }
}

module.exports = {
  ArmSurfaceContactClient,
  EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME,
};
