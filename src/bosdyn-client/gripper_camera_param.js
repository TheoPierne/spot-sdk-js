'use strict';

const { BaseClient, commonHeaderErrors } = require('./common');

const { GripperCameraParamServiceClient } = require('../bosdyn/api/gripper_camera_param_service_grpc_pb');

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
   * @param {gripperCameraParamPb.GripperCameraParamRequest} gripperCameraParamRequest
   * The gripper camera param request
   * @param {Object} args The args to be send with the gRPC request
   * @returns {Promise<gripperCameraParamPb.GripperCameraParamResponse>}
   */
  setCameraParams(gripperCameraParamRequest, args) {
    return this.call(this._stub.setParams, gripperCameraParamRequest, null, commonHeaderErrors, true, args);
  }

  /**
   * Issue a request to get the current gripper camera parameters from the robot.
   * @param {gripperCameraParamPb.GripperCameraGetParamRequest} gripperCameraGetParamRequest
   * The gripper camera get param request
   * @param {Object} args The args to be send with the gRPC request
   * @returns {Promise<gripperCameraParamPb.GripperCameraGetParamResponse>}
   */
  getCameraParams(gripperCameraGetParamRequest, args) {
    return this.call(this._stub.getParams, gripperCameraGetParamRequest, null, commonHeaderErrors, true, args);
  }
  
  /**
   * Issue gripper camera calibration
   * @param {gripperCameraParamPb.GripperCameraCalibrationRequest} setGripperCameraCalibRequest The command request to set gripper camera calibration
   * @param {Object} args The args to be send with the gRPC request
   * @returns {Promise<gripperCameraParamPb.GripperCameraCalibrationResponse>}
   */
  setCameraCalib(setGripperCameraCalibRequest, args) {
    return this.call(this._stub.setCamCalib, setGripperCameraCalibRequest, null, commonHeaderErrors, true, args);
  }
  
  /**
   * Issue gripper camera get calibration
   * @param {gripperCameraParamPb.gGripperCameraGetCalibrationRequest} getGripperCameraCalibRequest 
   * @param {Object} args The args to be send with the gRPC request
   * @returns {Promise<gripperCameraParamPb.gGripperCameraGetCalibrationResponse>}
   */
  getCameraCalib(getGripperCameraCalibRequest, args) {
    return this.call(this._stub.getCamCalib, getGripperCameraCalibRequest, null, commonHeaderErrors, true, args);
  }
}

module.exports = {
  GripperCameraParamClient,
};
