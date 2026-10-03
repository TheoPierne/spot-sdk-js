// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2023 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).
//
'use strict';
var grpc = require('@grpc/grpc-js');
var bosdyn_api_gripper_camera_param_pb = require('../../bosdyn/api/gripper_camera_param_pb.js');

function serialize_bosdyn_api_GetGripperCameraCalibrationRequest(arg) {
  if (!(arg instanceof bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetGripperCameraCalibrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetGripperCameraCalibrationRequest(buffer_arg) {
  return bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetGripperCameraCalibrationResponse(arg) {
  if (!(arg instanceof bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetGripperCameraCalibrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetGripperCameraCalibrationResponse(buffer_arg) {
  return bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GripperCameraGetParamRequest(arg) {
  if (!(arg instanceof bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GripperCameraGetParamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GripperCameraGetParamRequest(buffer_arg) {
  return bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GripperCameraGetParamResponse(arg) {
  if (!(arg instanceof bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GripperCameraGetParamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GripperCameraGetParamResponse(buffer_arg) {
  return bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GripperCameraParamRequest(arg) {
  if (!(arg instanceof bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GripperCameraParamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GripperCameraParamRequest(buffer_arg) {
  return bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GripperCameraParamResponse(arg) {
  if (!(arg instanceof bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GripperCameraParamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GripperCameraParamResponse(buffer_arg) {
  return bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SetGripperCameraCalibrationRequest(arg) {
  if (!(arg instanceof bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.SetGripperCameraCalibrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SetGripperCameraCalibrationRequest(buffer_arg) {
  return bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SetGripperCameraCalibrationResponse(arg) {
  if (!(arg instanceof bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.SetGripperCameraCalibrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SetGripperCameraCalibrationResponse(buffer_arg) {
  return bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GripperCameraParamServiceService = exports.GripperCameraParamServiceService = {
  setParams: {
    path: '/bosdyn.api.GripperCameraParamService/SetParams',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest,
    responseType: bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse,
    requestSerialize: serialize_bosdyn_api_GripperCameraParamRequest,
    requestDeserialize: deserialize_bosdyn_api_GripperCameraParamRequest,
    responseSerialize: serialize_bosdyn_api_GripperCameraParamResponse,
    responseDeserialize: deserialize_bosdyn_api_GripperCameraParamResponse,
  },
  getParams: {
    path: '/bosdyn.api.GripperCameraParamService/GetParams',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest,
    responseType: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse,
    requestSerialize: serialize_bosdyn_api_GripperCameraGetParamRequest,
    requestDeserialize: deserialize_bosdyn_api_GripperCameraGetParamRequest,
    responseSerialize: serialize_bosdyn_api_GripperCameraGetParamResponse,
    responseDeserialize: deserialize_bosdyn_api_GripperCameraGetParamResponse,
  },
  setCamCalib: {
    path: '/bosdyn.api.GripperCameraParamService/SetCamCalib',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest,
    responseType: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse,
    requestSerialize: serialize_bosdyn_api_SetGripperCameraCalibrationRequest,
    requestDeserialize: deserialize_bosdyn_api_SetGripperCameraCalibrationRequest,
    responseSerialize: serialize_bosdyn_api_SetGripperCameraCalibrationResponse,
    responseDeserialize: deserialize_bosdyn_api_SetGripperCameraCalibrationResponse,
  },
  getCamCalib: {
    path: '/bosdyn.api.GripperCameraParamService/GetCamCalib',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest,
    responseType: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse,
    requestSerialize: serialize_bosdyn_api_GetGripperCameraCalibrationRequest,
    requestDeserialize: deserialize_bosdyn_api_GetGripperCameraCalibrationRequest,
    responseSerialize: serialize_bosdyn_api_GetGripperCameraCalibrationResponse,
    responseDeserialize: deserialize_bosdyn_api_GetGripperCameraCalibrationResponse,
  },
};

exports.GripperCameraParamServiceClient = grpc.makeGenericClientConstructor(GripperCameraParamServiceService, 'GripperCameraParamService');
