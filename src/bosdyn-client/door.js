'use strict';

const { BaseClient, handleCommonHeaderErrors, handleLeaseUseResultErrors } = require('./common');
const { addLeaseWalletProcessors } = require('./lease');
const { DoorServiceClient } = require('../bosdyn/api/spot/door_service_grpc_pb');

/**
 * Client for the door service.
 * @extends {BaseClient<DoorServiceClient>}
 */
class DoorClient extends BaseClient {
  static defaultServiceName = 'door';
  static serviceType = 'bosdyn.api.spot.DoorService';

  /**
   * Create an instance of DoorClient's class.
   * @param {?string} name Name of the Class.
   */
  constructor(name = null) {
    super(DoorServiceClient, name);
  }

  /**
   * Update instance from another object.
   * @param {Object} other The object where to copy from.
   * @returns {void}
   */
  updateFrom(other) {
    super.updateFrom(other);
    if (this.leaseWallet) addLeaseWalletProcessors(this, this.leaseWallet);
  }

  /**
   * Issue a open door command to the robot.
   * @param {doorPb.OpenDoorCommandRequest} request The door command.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<doorPb.OpenDoorCommandResponse>} The full OpenDoorCommandResponse message,
   * which includes a command id for feedback.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {LeaseUseError} The lease for the request failed.
   */
  openDoor(request, args) {
    return this.call(this._stub.openDoor, request, null, _openDoorErrorHandler, args);
  }

  /**
   * Get feedback from the robot on a specific door command.
   * @param {doorPb.OpenDoorFeedbackRequest} request The request for feedback of the door command.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<doorPb.OpenDoorFeedbackResponse>} The full OpenDoorFeedbackResponse message.
   * @throws {RpcError} Problem communicating with the robot.
   */
  openDoorFeedback(request, args) {
    return this.call(this._stub.openDoorFeedback, request, null, _openDoorFeedbackErrorHandler, args);
  }
}

const _openDoorErrorHandler = handleCommonHeaderErrors(handleLeaseUseResultErrors(() => null));

const _openDoorFeedbackErrorHandler = handleCommonHeaderErrors(() => null);

module.exports = {
  DoorClient,
};
