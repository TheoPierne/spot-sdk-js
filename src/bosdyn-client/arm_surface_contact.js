/**
 * @file Client for the arm surface contact service: arm commands that press the hand on a surface.
 */

'use strict';

const camelCase = require('lodash/camelCase');

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
 * @typedef {import('../bosdyn/api/arm_surface_contact_pb').ArmSurfaceContact.Request} ArmSurfaceContactRequest
 */

/**
 * @typedef {import('../bosdyn/api/arm_surface_contact_service_pb').ArmSurfaceContactResponse} ArmSurfaceContactResponse
 */

/**
 * Client for the ArmSurfaceContact service.
 * @extends {BaseClient<ArmSurfaceContactServiceClient>}
 */
class ArmSurfaceContactClient extends BaseClient {
  static defaultServiceName = 'arm-surface-contact';
  static serviceType = 'bosdyn.api.ArmSurfaceContactService';

  constructor() {
    super(ArmSurfaceContactServiceClient);
    /**
     * @type {import('./time_sync').TimeSyncEndpoint|null}
     */
    this._timesyncEndpoint = null;
  }

  /**
   * Update instance from another object.
   * @param {import('./robot').Robot} other The object where to copy from.
   * @returns {Promise<void>}
   */
  async updateFrom(other) {
    super.updateFrom(other);
    if (this.leaseWallet) addLeaseWalletProcessors(this, this.leaseWallet);

    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Set or convert fields of the command proto that need timestamps in the robot's clock.
   * @param {ArmSurfaceContactRequest} command Command message to update.
   * @returns {void}
   * @private
   */
  _updateCommandTimestamps(command) {
    if (this._timesyncEndpoint === null) throw new NoTimeSyncError();

    const converter = new _TimeConverter(this, this._timesyncEndpoint);

    // jspb messages have no field properties: use the generated has/get methods of the field.
    function _toRobotTime(key, proto) {
      const has = proto[camelCase(`has_${key}`)];
      // No such field in proto, or field does not contain a timestamp.
      if (typeof has !== 'function' || !has.call(proto)) return;
      converter.convertTimestampFromLocalToRobot(proto[camelCase(`get_${key}`)]());
    }

    _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _toRobotTime);
  }

  /**
   * Issue an arm surface contact command to the robot.
   * @param {ArmSurfaceContactRequest} request The command request.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<ArmSurfaceContactResponse>} The full arm surface contact response message.
   */
  async armSurfaceContactCommand(request, args) {
    this._updateCommandTimestamps(request);
    return this.call(this._stub.armSurfaceContact, request, null, null, true, args);
  }
}

module.exports = {
  ArmSurfaceContactClient,
  EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME,
};
