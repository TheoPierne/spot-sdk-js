'use strict';

const { BaseClient, handleCommonHeaderErrors, handleLeaseUseResultErrors } = require('./common');
const { addLeaseWalletProcessors } = require('./lease');
const { ManipulationApiServiceClient } = require('../bosdyn/api/manipulation_api_service_grpc_pb');

/**
 * Client for the ManipulationAPI service.
 * @extends {BaseClient<ManipulationApiServiceClient>}
 */
class ManipulationApiClient extends BaseClient {
  static defaultServiceName = 'manipulation';
  static serviceType = 'bosdyn.api.ManipulationApiService';

  constructor() {
    super(ManipulationApiServiceClient);
  }

  /**
   * Update instance from another object.
   * @param {BaseClient} other The object where to copy from.
   * @returns {void}
   */
  updateFrom(other) {
    super.updateFrom(other);
    if (this.leaseWallet) addLeaseWalletProcessors(this, this.leaseWallet);
  }

  /**
   * Issue a manipulation api command to the robot.
   * @param {manipulationApiPb.ManipulationApiRequest} manipulationApiRequest The command request
   * for a manipulation task.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<manipulationApiPb.ManipulationApiResponse>} The full ManipulationApiResponse message,
   * which includes a command id for feedback.
   */
  manipulationApiCommand(manipulationApiRequest, args) {
    return this.call(
      this._stub.manipulationApi,
      manipulationApiRequest,
      null,
      _manipulationApiCommandErrorFromResponse,
      args,
    );
  }

  /**
   * Issue a manipulation api feedback request to the robot.
   * @param {manipulationApiPb.ManipulationApiFeedbackRequest} manipulationApiFeedbackRequest The request for
   * feedback for a specific manipulation command.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<manipulationApiPb.ManipulationApiFeedbackResponse>} The full ManipulationApiFeedbackResponse
   * message.
   */
  manipulationApiFeedbackCommand(manipulationApiFeedbackRequest, args) {
    return this.call(
      this._stub.manipulationApiFeedback,
      manipulationApiFeedbackRequest,
      null,
      _manipulationApiFeedbackErrorFromResponse,
      args,
    );
  }

  /**
   * Issue a grasp override command to the robot.
   * @param {manipulationApiPb.ApiGraspOverrideRequest} graspOverrideRequest he command request
   * for a grasp override.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<manipulationApiPb.ApiGraspOverrideResponse>}
   */
  graspOverrideCommand(graspOverrideRequest, args) {
    return this.call(
      this._stub.overrideGrasp,
      graspOverrideRequest,
      null,
      _graspOverrideCommandErrorFromResponse,
      args,
    );
  }
}

const _manipulationApiCommandErrorFromResponse = handleCommonHeaderErrors(handleLeaseUseResultErrors(() => null));
const _manipulationApiFeedbackErrorFromResponse = handleCommonHeaderErrors(() => null);
const _graspOverrideCommandErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  ManipulationApiClient,
};
