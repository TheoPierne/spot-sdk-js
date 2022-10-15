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
var bosdyn_api_power_pb = require('../../bosdyn/api/power_pb.js');

function serialize_bosdyn_api_PowerCommandFeedbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_power_pb.PowerCommandFeedbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.PowerCommandFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_PowerCommandFeedbackRequest(buffer_arg) {
  return bosdyn_api_power_pb.PowerCommandFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_PowerCommandFeedbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_power_pb.PowerCommandFeedbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.PowerCommandFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_PowerCommandFeedbackResponse(buffer_arg) {
  return bosdyn_api_power_pb.PowerCommandFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_PowerCommandRequest(arg) {
  if (!(arg instanceof bosdyn_api_power_pb.PowerCommandRequest)) {
    throw new Error('Expected argument of type bosdyn.api.PowerCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_PowerCommandRequest(buffer_arg) {
  return bosdyn_api_power_pb.PowerCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_PowerCommandResponse(arg) {
  if (!(arg instanceof bosdyn_api_power_pb.PowerCommandResponse)) {
    throw new Error('Expected argument of type bosdyn.api.PowerCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_PowerCommandResponse(buffer_arg) {
  return bosdyn_api_power_pb.PowerCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The power service for the robot that can power on/off the robot's motors.
var PowerServiceService = exports.PowerServiceService = {
  // Starts a power command on the robot. A robot can only accept one power command at once.
// Power commands, are not interruptible. Once a command is issued, it must complete before
// another command can be issued.
powerCommand: {
    path: '/bosdyn.api.PowerService/PowerCommand',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_power_pb.PowerCommandRequest,
    responseType: bosdyn_api_power_pb.PowerCommandResponse,
    requestSerialize: serialize_bosdyn_api_PowerCommandRequest,
    requestDeserialize: deserialize_bosdyn_api_PowerCommandRequest,
    responseSerialize: serialize_bosdyn_api_PowerCommandResponse,
    responseDeserialize: deserialize_bosdyn_api_PowerCommandResponse,
  },
  // Check the status of a power command.
powerCommandFeedback: {
    path: '/bosdyn.api.PowerService/PowerCommandFeedback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_power_pb.PowerCommandFeedbackRequest,
    responseType: bosdyn_api_power_pb.PowerCommandFeedbackResponse,
    requestSerialize: serialize_bosdyn_api_PowerCommandFeedbackRequest,
    requestDeserialize: deserialize_bosdyn_api_PowerCommandFeedbackRequest,
    responseSerialize: serialize_bosdyn_api_PowerCommandFeedbackResponse,
    responseDeserialize: deserialize_bosdyn_api_PowerCommandFeedbackResponse,
  },
};

exports.PowerServiceClient = grpc.makeGenericClientConstructor(PowerServiceService);
