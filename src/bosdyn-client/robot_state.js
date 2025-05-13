'use strict';

const { BaseClient, commonHeaderErrors } = require('./common.js');
const robotStatePb = require('../bosdyn/api/robot_state_pb.js');
const {
  RobotStateServiceClient,
  RobotStateStreamingServiceClient,
} = require('../bosdyn/api/robot_state_service_grpc_pb');

/**
 * Client for the RobotState service.
 * @extends {BaseClient<RobotStateServiceClient>}
 */
class RobotStateClient extends BaseClient {
  static defaultServiceName = 'robot-state';
  static serviceType = 'bosdyn.api.RobotStateService';

  constructor() {
    super(RobotStateServiceClient);
  }

  /**
   * Obtain current state of the robot.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robotStatePb.RobotState>} The current robot state.
   * @throws {RpcError} Problem communicating with the robot.
   */
  getRobotState(args) {
    const req = RobotStateClient._getRobotStateRequest();
    return this.call(this._stub.getRobotState, req, _getRobotStateValue, commonHeaderErrors, args);
  }

  /**
   * Obtain robot metrics, such as distance traveled or time powered on.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robotStatePb.RobotMetrics>} All of the current robot metrics.
   * @throws {RpcError} Problem communicating with the robot.
   */
  getRobotMetrics(args) {
    const req = RobotStateClient._getRobotMetricsRequest();
    return this.call(this._stub.getRobotMetrics, req, _getRobotMetricsValue, commonHeaderErrors, args);
  }

  /**
   * Obtain current hardware configuration of robot.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robotStatePb.HardwareConfiguration>} The hardware configuration,
   * which includes the link names.
   * @throws {RpcError} Problem communicating with the robot.
   */
  getRobotHardwareConfiguration(args) {
    const req = RobotStateClient._getRobotHardwareConfigurationRequest();
    return this.call(
      this._stub.getRobotHardwareConfiguration,
      req,
      _getRobotHardwareConfigurationValue,
      commonHeaderErrors,
      args,
    );
  }

  /**
   * Obtain link model OBJ for a specific link.
   * @param {string} linkName Name of the link to get the model.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robotStatePb.Skeleton.Link.ObjModel>} The bosdyn.api.Skeleton.Link.ObjModel for
   * the specified link.
   * @throws {RpcError} Problem communicating with the robot.
   */
  getRobotLinkModel(linkName, args) {
    const req = RobotStateClient._getRobotLinkModelRequest(linkName);
    return this.call(this._stub.getRobotLinkModel, req, _getRobotLinkModelValue, commonHeaderErrors, args);
  }

  /**
   * Convenience function which first requests a robots hardware configuration followed by
   * requests to get link models for all robot links.
   * @returns {Promise<robotStatePb.HardwareConfiguration>} robot_state_pb.HardwareConfiguration with
   * all link models filled out.
   */
  async getHardwareConfigWithLinkInfo() {
    const hardwareConfiguration = await this.getRobotHardwareConfiguration();
    const links = hardwareConfiguration.getSkeleton().getLinksList();

    await Promise.all(
      links.map(async link => {
        const objModel = await this.getRobotLinkModel(link.getName());
        link.setObjModel(objModel);
      }),
    );
    return hardwareConfiguration;
  }

  static _getRobotStateRequest() {
    return new robotStatePb.RobotStateRequest();
  }

  static _getRobotMetricsRequest() {
    return new robotStatePb.RobotMetricsRequest();
  }

  static _getRobotHardwareConfigurationRequest() {
    return new robotStatePb.RobotHardwareConfigurationRequest();
  }

  static _getRobotLinkModelRequest(linkName) {
    return new robotStatePb.RobotLinkModelRequest().setLinkName(linkName);
  }
}

/**
 * @extends {BaseClient<RobotStateStreamingServiceClient>}
 */
class RobotStateStreamingClient extends BaseClient {
  static defaultServiceName = 'robot-state-streaming';
  static serviceType = 'bosdyn.api.RobotStateStreamingService';

  constructor(name = null) {
    super(RobotStateStreamingServiceClient, name);
  }

  /**
   * Returns an iterator providing current state updates of the robot.
   * @returns {any}
   */
  getRobotStateStream() {
    const req = new robotStatePb.RobotStateStreamRequest();
    return this._stub.getRobotStateStream(req);
  }
}

const _getRobotStateValue = response => response.getRobotState();

const _getRobotMetricsValue = response => response.getRobotMetrics();

const _getRobotHardwareConfigurationValue = response => response.getHardwareConfiguration();

const _getRobotLinkModelValue = response => response.getLinkModel();

/**
 * Convenience function which first requests a robots hardware configuration followed by
 * requests to get link models for all robot links.
 * @param {RobotStateClient} stateClient RobotStateClient to query for robot state.
 * @param {?number} timeout Timeout for the command in milliseconds.
 * @returns {Promise<boolean>} Returns true if robot has an arm, false otherwise.
 */
async function hasArm(stateClient, timeout = null) {
  const state = await stateClient.getRobotState({ timeout });
  return state.hasManipulatorState();
}

module.exports = {
  RobotStateClient,
  RobotStateStreamingClient,
  hasArm,
};
