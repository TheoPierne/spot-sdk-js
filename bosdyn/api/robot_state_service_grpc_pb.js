// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).
//
'use strict';
var grpc = require('@grpc/grpc-js');
var bosdyn_api_robot_state_pb = require('../../bosdyn/api/robot_state_pb.js');

function serialize_bosdyn_api_RobotHardwareConfigurationRequest(arg) {
  if (!(arg instanceof bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RobotHardwareConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotHardwareConfigurationRequest(buffer_arg) {
  return bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotHardwareConfigurationResponse(arg) {
  if (!(arg instanceof bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RobotHardwareConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotHardwareConfigurationResponse(buffer_arg) {
  return bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotLinkModelRequest(arg) {
  if (!(arg instanceof bosdyn_api_robot_state_pb.RobotLinkModelRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RobotLinkModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotLinkModelRequest(buffer_arg) {
  return bosdyn_api_robot_state_pb.RobotLinkModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotLinkModelResponse(arg) {
  if (!(arg instanceof bosdyn_api_robot_state_pb.RobotLinkModelResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RobotLinkModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotLinkModelResponse(buffer_arg) {
  return bosdyn_api_robot_state_pb.RobotLinkModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotMetricsRequest(arg) {
  if (!(arg instanceof bosdyn_api_robot_state_pb.RobotMetricsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RobotMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotMetricsRequest(buffer_arg) {
  return bosdyn_api_robot_state_pb.RobotMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotMetricsResponse(arg) {
  if (!(arg instanceof bosdyn_api_robot_state_pb.RobotMetricsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RobotMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotMetricsResponse(buffer_arg) {
  return bosdyn_api_robot_state_pb.RobotMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotStateRequest(arg) {
  if (!(arg instanceof bosdyn_api_robot_state_pb.RobotStateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RobotStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotStateRequest(buffer_arg) {
  return bosdyn_api_robot_state_pb.RobotStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotStateResponse(arg) {
  if (!(arg instanceof bosdyn_api_robot_state_pb.RobotStateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RobotStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotStateResponse(buffer_arg) {
  return bosdyn_api_robot_state_pb.RobotStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The robot state service tracks all information about the measured and computed states of the robot at the current time.
var RobotStateServiceService = exports.RobotStateServiceService = {
  // Get robot state information (such as kinematic state, power state, or faults).
getRobotState: {
    path: '/bosdyn.api.RobotStateService/GetRobotState',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_robot_state_pb.RobotStateRequest,
    responseType: bosdyn_api_robot_state_pb.RobotStateResponse,
    requestSerialize: serialize_bosdyn_api_RobotStateRequest,
    requestDeserialize: deserialize_bosdyn_api_RobotStateRequest,
    responseSerialize: serialize_bosdyn_api_RobotStateResponse,
    responseDeserialize: deserialize_bosdyn_api_RobotStateResponse,
  },
  // Get different robot metrics and parameters from the robot.
getRobotMetrics: {
    path: '/bosdyn.api.RobotStateService/GetRobotMetrics',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_robot_state_pb.RobotMetricsRequest,
    responseType: bosdyn_api_robot_state_pb.RobotMetricsResponse,
    requestSerialize: serialize_bosdyn_api_RobotMetricsRequest,
    requestDeserialize: deserialize_bosdyn_api_RobotMetricsRequest,
    responseSerialize: serialize_bosdyn_api_RobotMetricsResponse,
    responseDeserialize: deserialize_bosdyn_api_RobotMetricsResponse,
  },
  // Get the hardware configuration of the robot, which describes the robot skeleton and urdf.
getRobotHardwareConfiguration: {
    path: '/bosdyn.api.RobotStateService/GetRobotHardwareConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest,
    responseType: bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse,
    requestSerialize: serialize_bosdyn_api_RobotHardwareConfigurationRequest,
    requestDeserialize: deserialize_bosdyn_api_RobotHardwareConfigurationRequest,
    responseSerialize: serialize_bosdyn_api_RobotHardwareConfigurationResponse,
    responseDeserialize: deserialize_bosdyn_api_RobotHardwareConfigurationResponse,
  },
  // Returns the OBJ file for a specifc robot link. Intended to be called after
// GetRobotHardwareConfiguration, using the link names returned by that call.
getRobotLinkModel: {
    path: '/bosdyn.api.RobotStateService/GetRobotLinkModel',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_robot_state_pb.RobotLinkModelRequest,
    responseType: bosdyn_api_robot_state_pb.RobotLinkModelResponse,
    requestSerialize: serialize_bosdyn_api_RobotLinkModelRequest,
    requestDeserialize: deserialize_bosdyn_api_RobotLinkModelRequest,
    responseSerialize: serialize_bosdyn_api_RobotLinkModelResponse,
    responseDeserialize: deserialize_bosdyn_api_RobotLinkModelResponse,
  },
};

exports.RobotStateServiceClient = grpc.makeGenericClientConstructor(RobotStateServiceService);
