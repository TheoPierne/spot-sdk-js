/**
 * @file Client for the gripper camera parameter service: the settings of the camera of the gripper.
 */

'use strict';

const { BaseClient, commonHeaderErrors } = require('./common');

const { GripperCameraParamServiceClient } = require('../bosdyn/api/gripper_camera_param_service_grpc_pb');

/**
 * @typedef {import('../bosdyn/api/gripper_camera_param_pb').GripperCameraParamRequest} GripperCameraParamRequest
 * @typedef {import('../bosdyn/api/gripper_camera_param_pb').GripperCameraParamResponse} GripperCameraParamResponse
 * @typedef {import('../bosdyn/api/gripper_camera_param_pb').GripperCameraGetParamRequest} GripperCameraGetParamRequest
 * @typedef {import('../bosdyn/api/gripper_camera_param_pb').GripperCameraGetParamResponse} GripperCameraGetParamResponse
 * @typedef {import('../bosdyn/api/gripper_camera_param_pb').SetGripperCameraCalibrationRequest} SetGripperCameraCalibrationRequest
 * @typedef {import('../bosdyn/api/gripper_camera_param_pb').SetGripperCameraCalibrationResponse} SetGripperCameraCalibrationResponse
 * @typedef {import('../bosdyn/api/gripper_camera_param_pb').GetGripperCameraCalibrationRequest} GetGripperCameraCalibrationRequest
 * @typedef {import('../bosdyn/api/gripper_camera_param_pb').GetGripperCameraCalibrationResponse} GetGripperCameraCalibrationResponse
 */

/**
 * Client for the Gripper Camera Parameter service.
 * @extends {BaseClient<GripperCameraParamServiceClient>}
 */
class GripperCameraParamClient extends BaseClient {
  static defaultServiceName = 'gripper-camera-param';
  static serviceType = 'bosdyn.api.GripperCameraParamService';

  constructor() {
    super(GripperCameraParamServiceClient);
  }

  /**
   * Issue a gripper camera parameter command to the robot.
   * @param {GripperCameraParamRequest} gripperCameraParamRequest
   * The gripper camera param request
   * @param {Object} [args] The args to be send with the gRPC request
   * @returns {Promise<GripperCameraParamResponse>}
   */
  setCameraParams(gripperCameraParamRequest, args) {
    return this.call(this._stub.setParams, gripperCameraParamRequest, null, commonHeaderErrors, true, args);
  }

  /**
   * Issue a request to get the current gripper camera parameters from the robot.
   * @param {GripperCameraGetParamRequest} gripperCameraGetParamRequest
   * The gripper camera get param request
   * @param {Object} [args] The args to be send with the gRPC request
   * @returns {Promise<GripperCameraGetParamResponse>}
   */
  getCameraParams(gripperCameraGetParamRequest, args) {
    return this.call(this._stub.getParams, gripperCameraGetParamRequest, null, commonHeaderErrors, true, args);
  }

  /**
   * Issue gripper camera calibration
   * @param {SetGripperCameraCalibrationRequest} setGripperCameraCalibRequest The command request to set gripper camera
   * calibration
   * @param {Object} [args] The args to be send with the gRPC request
   * @returns {Promise<SetGripperCameraCalibrationResponse>}
   */
  setCameraCalib(setGripperCameraCalibRequest, args) {
    return this.call(this._stub.setCamCalib, setGripperCameraCalibRequest, null, commonHeaderErrors, true, args);
  }

  /**
   * Issue gripper camera get calibration
   * @param {GetGripperCameraCalibrationRequest} getGripperCameraCalibRequest
   * @param {Object} [args] The args to be send with the gRPC request
   * @returns {Promise<GetGripperCameraCalibrationResponse>}
   */
  getCameraCalib(getGripperCameraCalibRequest, args) {
    return this.call(this._stub.getCamCalib, getGripperCameraCalibRequest, null, commonHeaderErrors, true, args);
  }
}

module.exports = {
  GripperCameraParamClient,
};
