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
var bosdyn_api_robot_command_pb = require('../../bosdyn/api/robot_command_pb.js');

function serialize_bosdyn_api_ClearBehaviorFaultRequest(arg) {
  if (!(arg instanceof bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ClearBehaviorFaultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ClearBehaviorFaultRequest(buffer_arg) {
  return bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ClearBehaviorFaultResponse(arg) {
  if (!(arg instanceof bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ClearBehaviorFaultResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ClearBehaviorFaultResponse(buffer_arg) {
  return bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotCommandFeedbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RobotCommandFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotCommandFeedbackRequest(buffer_arg) {
  return bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotCommandFeedbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RobotCommandFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotCommandFeedbackResponse(buffer_arg) {
  return bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotCommandRequest(arg) {
  if (!(arg instanceof bosdyn_api_robot_command_pb.RobotCommandRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RobotCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotCommandRequest(buffer_arg) {
  return bosdyn_api_robot_command_pb.RobotCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotCommandResponse(arg) {
  if (!(arg instanceof bosdyn_api_robot_command_pb.RobotCommandResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RobotCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotCommandResponse(buffer_arg) {
  return bosdyn_api_robot_command_pb.RobotCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The robot command service allows a client application to control and move the robot.
var RobotCommandServiceService = exports.RobotCommandServiceService = {
  // Starts a behavior command on the robot. Issuing a new command overrides the active command.
// Each command is issued a UID for feedback retrieval.
robotCommand: {
    path: '/bosdyn.api.RobotCommandService/RobotCommand',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_robot_command_pb.RobotCommandRequest,
    responseType: bosdyn_api_robot_command_pb.RobotCommandResponse,
    requestSerialize: serialize_bosdyn_api_RobotCommandRequest,
    requestDeserialize: deserialize_bosdyn_api_RobotCommandRequest,
    responseSerialize: serialize_bosdyn_api_RobotCommandResponse,
    responseDeserialize: deserialize_bosdyn_api_RobotCommandResponse,
  },
  // A client queries this RPC to determine a robot's progress towards completion of a command.
// This updates the client with metrics like "distance to goal."
// The client should use this feedback to determine whether the current command has
// succeeeded or failed, and thus send the next command.
robotCommandFeedback: {
    path: '/bosdyn.api.RobotCommandService/RobotCommandFeedback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest,
    responseType: bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse,
    requestSerialize: serialize_bosdyn_api_RobotCommandFeedbackRequest,
    requestDeserialize: deserialize_bosdyn_api_RobotCommandFeedbackRequest,
    responseSerialize: serialize_bosdyn_api_RobotCommandFeedbackResponse,
    responseDeserialize: deserialize_bosdyn_api_RobotCommandFeedbackResponse,
  },
  // Clear robot behavior fault.
clearBehaviorFault: {
    path: '/bosdyn.api.RobotCommandService/ClearBehaviorFault',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest,
    responseType: bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse,
    requestSerialize: serialize_bosdyn_api_ClearBehaviorFaultRequest,
    requestDeserialize: deserialize_bosdyn_api_ClearBehaviorFaultRequest,
    responseSerialize: serialize_bosdyn_api_ClearBehaviorFaultResponse,
    responseDeserialize: deserialize_bosdyn_api_ClearBehaviorFaultResponse,
  },
};

exports.RobotCommandServiceClient = grpc.makeGenericClientConstructor(RobotCommandServiceService);
