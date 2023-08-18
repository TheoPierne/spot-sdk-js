'use strict';

const { BaseClient, common_header_errors } = require('./common');

const gripper_camera_param_service_grpc_pb = require('../bosdyn/api/gripper_camera_param_service_grpc_pb');

class GripperCameraParamClient extends BaseClient {
  static default_service_name = 'gripper-camera-param';
  static service_type = 'bosdyn.api.GripperCameraParamService';

  constructor() {
    super(gripper_camera_param_service_grpc_pb.GripperCameraParamServiceClient);
  }

  set_camera_params(gripper_camera_param_request, args) {
    return this.call(this._stub.setParams, gripper_camera_param_request, null, common_header_errors, args);
  }

  get_camera_params(gripper_camera_get_param_request, args) {
    return this.call(this._stub.getParams, gripper_camera_get_param_request, null, common_header_errors, args);
  }
}

module.exports = {
  GripperCameraParamClient,
};
