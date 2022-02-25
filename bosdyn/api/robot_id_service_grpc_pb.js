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
var bosdyn_api_robot_id_pb = require('../../bosdyn/api/robot_id_pb.js');

function serialize_bosdyn_api_RobotIdRequest(arg) {
  if (!(arg instanceof bosdyn_api_robot_id_pb.RobotIdRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RobotIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotIdRequest(buffer_arg) {
  return bosdyn_api_robot_id_pb.RobotIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RobotIdResponse(arg) {
  if (!(arg instanceof bosdyn_api_robot_id_pb.RobotIdResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RobotIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RobotIdResponse(buffer_arg) {
  return bosdyn_api_robot_id_pb.RobotIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// RobotIdService provides mostly static identifying information about a robot.
// User authentication is not required to access RobotIdService to assist with
// early robot discovery.
var RobotIdServiceService = exports.RobotIdServiceService = {
  // Get the robot id information. The ID contains basic information about a robot
// which is made available over the network as part of robot discovery without
// requiring user authentication.
getRobotId: {
    path: '/bosdyn.api.RobotIdService/GetRobotId',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_robot_id_pb.RobotIdRequest,
    responseType: bosdyn_api_robot_id_pb.RobotIdResponse,
    requestSerialize: serialize_bosdyn_api_RobotIdRequest,
    requestDeserialize: deserialize_bosdyn_api_RobotIdRequest,
    responseSerialize: serialize_bosdyn_api_RobotIdResponse,
    responseDeserialize: deserialize_bosdyn_api_RobotIdResponse,
  },
};

exports.RobotIdServiceClient = grpc.makeGenericClientConstructor(RobotIdServiceService);
