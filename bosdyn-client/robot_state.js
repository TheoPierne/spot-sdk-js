'use strict';

const { BaseClient, common_header_errors } = require('./common.js');
const robot_state_pb = require('../bosdyn/api/robot_state_pb.js');
const robot_state_service_grpc_pb = require('../bosdyn/api/robot_state_service_grpc_pb');

/**
 * Client for the RobotState service.
 * @class RobotStateClient
 * @extends BaseClient
 */
class RobotStateClient extends BaseClient {
  static default_service_name = 'robot-state';
  static service_type = 'bosdyn.api.RobotStateService';

  /**
   * Create an instance of RobotStateClient's class.
   * @param {?string} name BaseClient's name.
   */
  constructor(name = null) {
    super(robot_state_service_grpc_pb.RobotStateServiceClient, name);
  }

  /**
   * Obtain current state of the robot.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robot_state_pb.RobotStateResponse>} The current robot state.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_robot_state(args) {
    const req = RobotStateClient._get_robot_state_request();
    return this.call(this._stub.getRobotState, req, _get_robot_state_value, common_header_errors, args);
  }

  /**
   * Obtain current state of the robot asynchronously.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robot_state_pb.RobotStateResponse>} The current robot state.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_robot_state_async(args) {
    const req = RobotStateClient._get_robot_state_request();
    return this.call_async(this._stub.getRobotState, req, _get_robot_state_value, common_header_errors, args);
  }

  /**
   * Obtain robot metrics, such as distance traveled or time powered on.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robot_state_pb.RobotMetricsResponse>} All of the current robot metrics.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_robot_metrics(args) {
    const req = RobotStateClient._get_robot_metrics_request();
    return this.call(this._stub.getRobotMetrics, req, _get_robot_metrics_value, common_header_errors, args);
  }

  /**
   * Async version of get_robot_metrics()
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robot_state_pb.RobotMetricsResponse>} All of the current robot metrics.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_robot_metrics_async(args) {
    const req = RobotStateClient._get_robot_metrics_request();
    return this.call_async(this._stub.getRobotMetrics, req, _get_robot_metrics_value, common_header_errors, args);
  }

  /**
   * Obtain current hardware configuration of robot.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robot_state_pb.RobotHardwareConfigurationResponse>} The hardware configuration,
   * which includes the link names.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_robot_hardware_configuration(args) {
    const req = RobotStateClient._get_robot_hardware_configuration_request();
    return this.call(
      this._stub.getRobotHardwareConfiguration,
      req,
      _get_robot_hardware_configuration_value,
      common_header_errors,
      args,
    );
  }

  /**
   * Async version of get_robot_hardware_configuration()
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robot_state_pb.RobotHardwareConfigurationResponse>} The hardware configuration,
   * which includes the link names.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_robot_hardware_configuration_async(args) {
    const req = RobotStateClient._get_robot_hardware_configuration_request();
    return this.call_async(
      this._stub.getRobotHardwareConfiguration,
      req,
      _get_robot_hardware_configuration_value,
      common_header_errors,
      args,
    );
  }

  /**
   * Obtain link model OBJ for a specific link.
   * @param {string} link_name Name of the link to get the model.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robot_state_pb.Skeleton.Link.ObjModel>} The bosdyn.api.Skeleton.Link.ObjModel for
   * the specified link.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_robot_link_model(link_name, args) {
    const req = RobotStateClient._get_robot_link_model_request(link_name);
    return this.call(this._stub.getRobotLinkModel, req, _get_robot_link_model_value, common_header_errors, args);
  }

  /**
   * Async version of get_robot_joint_model_async()
   * @param {string} link_name Name of the link to get the model.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<robot_state_pb.Skeleton.Link.ObjModel>} The bosdyn.api.Skeleton.Link.ObjModel for
   * the specified link.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_robot_link_model_async(link_name, args) {
    const req = RobotStateClient._get_robot_link_model_request(link_name);
    return this.call_async(this._stub.getRobotLinkModel, req, _get_robot_link_model_value, common_header_errors, args);
  }

  /**
   * Convenience function which first requests a robots hardware configuration followed by
   * requests to get link models for all robot links.
   * @returns {robot_state_pb.HardwareConfiguration} robot_state_pb.HardwareConfiguration with
   * all link models filled out.
   */
  async get_hardware_config_with_link_info() {
    const hardware_configuration = await this.get_robot_hardware_configuration();
    for (const link of hardware_configuration.getSkeleton().getLinksList()) {
      // eslint-disable-next-line no-await-in-loop
      const obj_model = await this.get_robot_link_model(link.getName());
      link.setObjModel(obj_model);
    }
    return hardware_configuration;
  }

  static _get_robot_state_request() {
    return new robot_state_pb.RobotStateRequest();
  }

  static _get_robot_metrics_request() {
    return new robot_state_pb.RobotMetricsRequest();
  }

  static _get_robot_hardware_configuration_request() {
    return new robot_state_pb.RobotHardwareConfigurationRequest();
  }

  static _get_robot_link_model_request(link_name) {
    return new robot_state_pb.RobotLinkModelRequest().setLinkName(link_name);
  }
}

const _get_robot_state_value = response => response.getRobotState();

const _get_robot_metrics_value = response => response.getRobotMetrics();

const _get_robot_hardware_configuration_value = response => response.getHardwareConfiguration();

const _get_robot_link_model_value = response => response.getLinkModel();

/**
 * Convenience function which first requests a robots hardware configuration followed by
 * requests to get link models for all robot links.
 * @param {RobotStateClient} state_client RobotStateClient to query for robot state.
 * @param {?number} timeout Timeout for the command in milliseconds.
 * @returns {boolean} Returns true if robot has an arm, false otherwise.
 */
async function has_arm(state_client, timeout = null) {
  const state = await state_client.get_robot_state({ timeout });
  return state.getManipulatorState();
}

module.exports = {
  RobotStateClient,
  has_arm,
};
