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
var bosdyn_api_docking_docking_pb = require('../../../bosdyn/api/docking/docking_pb.js');

function serialize_bosdyn_api_docking_DockingCommandFeedbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.docking.DockingCommandFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_docking_DockingCommandFeedbackRequest(buffer_arg) {
  return bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_docking_DockingCommandFeedbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.docking.DockingCommandFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_docking_DockingCommandFeedbackResponse(buffer_arg) {
  return bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_docking_DockingCommandRequest(arg) {
  if (!(arg instanceof bosdyn_api_docking_docking_pb.DockingCommandRequest)) {
    throw new Error('Expected argument of type bosdyn.api.docking.DockingCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_docking_DockingCommandRequest(buffer_arg) {
  return bosdyn_api_docking_docking_pb.DockingCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_docking_DockingCommandResponse(arg) {
  if (!(arg instanceof bosdyn_api_docking_docking_pb.DockingCommandResponse)) {
    throw new Error('Expected argument of type bosdyn.api.docking.DockingCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_docking_DockingCommandResponse(buffer_arg) {
  return bosdyn_api_docking_docking_pb.DockingCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_docking_GetDockingConfigRequest(arg) {
  if (!(arg instanceof bosdyn_api_docking_docking_pb.GetDockingConfigRequest)) {
    throw new Error('Expected argument of type bosdyn.api.docking.GetDockingConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_docking_GetDockingConfigRequest(buffer_arg) {
  return bosdyn_api_docking_docking_pb.GetDockingConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_docking_GetDockingConfigResponse(arg) {
  if (!(arg instanceof bosdyn_api_docking_docking_pb.GetDockingConfigResponse)) {
    throw new Error('Expected argument of type bosdyn.api.docking.GetDockingConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_docking_GetDockingConfigResponse(buffer_arg) {
  return bosdyn_api_docking_docking_pb.GetDockingConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_docking_GetDockingStateRequest(arg) {
  if (!(arg instanceof bosdyn_api_docking_docking_pb.GetDockingStateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.docking.GetDockingStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_docking_GetDockingStateRequest(buffer_arg) {
  return bosdyn_api_docking_docking_pb.GetDockingStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_docking_GetDockingStateResponse(arg) {
  if (!(arg instanceof bosdyn_api_docking_docking_pb.GetDockingStateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.docking.GetDockingStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_docking_GetDockingStateResponse(buffer_arg) {
  return bosdyn_api_docking_docking_pb.GetDockingStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The DockingService provides an interface to dock and undock the robot from Spot Docks,
// as well as get feedback on command status, and get the current docked status of the robot.
var DockingServiceService = exports.DockingServiceService = {
  // Starts a docking command on the robot.
dockingCommand: {
    path: '/bosdyn.api.docking.DockingService/DockingCommand',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_docking_docking_pb.DockingCommandRequest,
    responseType: bosdyn_api_docking_docking_pb.DockingCommandResponse,
    requestSerialize: serialize_bosdyn_api_docking_DockingCommandRequest,
    requestDeserialize: deserialize_bosdyn_api_docking_DockingCommandRequest,
    responseSerialize: serialize_bosdyn_api_docking_DockingCommandResponse,
    responseDeserialize: deserialize_bosdyn_api_docking_DockingCommandResponse,
  },
  // Check the status of a docking command.
dockingCommandFeedback: {
    path: '/bosdyn.api.docking.DockingService/DockingCommandFeedback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest,
    responseType: bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse,
    requestSerialize: serialize_bosdyn_api_docking_DockingCommandFeedbackRequest,
    requestDeserialize: deserialize_bosdyn_api_docking_DockingCommandFeedbackRequest,
    responseSerialize: serialize_bosdyn_api_docking_DockingCommandFeedbackResponse,
    responseDeserialize: deserialize_bosdyn_api_docking_DockingCommandFeedbackResponse,
  },
  // Get the configured dock ID ranges.
getDockingConfig: {
    path: '/bosdyn.api.docking.DockingService/GetDockingConfig',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_docking_docking_pb.GetDockingConfigRequest,
    responseType: bosdyn_api_docking_docking_pb.GetDockingConfigResponse,
    requestSerialize: serialize_bosdyn_api_docking_GetDockingConfigRequest,
    requestDeserialize: deserialize_bosdyn_api_docking_GetDockingConfigRequest,
    responseSerialize: serialize_bosdyn_api_docking_GetDockingConfigResponse,
    responseDeserialize: deserialize_bosdyn_api_docking_GetDockingConfigResponse,
  },
  // Get the robot's docking state
getDockingState: {
    path: '/bosdyn.api.docking.DockingService/GetDockingState',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_docking_docking_pb.GetDockingStateRequest,
    responseType: bosdyn_api_docking_docking_pb.GetDockingStateResponse,
    requestSerialize: serialize_bosdyn_api_docking_GetDockingStateRequest,
    requestDeserialize: deserialize_bosdyn_api_docking_GetDockingStateRequest,
    responseSerialize: serialize_bosdyn_api_docking_GetDockingStateResponse,
    responseDeserialize: deserialize_bosdyn_api_docking_GetDockingStateResponse,
  },
};

exports.DockingServiceClient = grpc.makeGenericClientConstructor(DockingServiceService);
