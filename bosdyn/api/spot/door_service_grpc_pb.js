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
var bosdyn_api_spot_door_pb = require('../../../bosdyn/api/spot/door_pb.js');

function serialize_bosdyn_api_spot_OpenDoorCommandRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_door_pb.OpenDoorCommandRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.OpenDoorCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_OpenDoorCommandRequest(buffer_arg) {
  return bosdyn_api_spot_door_pb.OpenDoorCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_OpenDoorCommandResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_door_pb.OpenDoorCommandResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.OpenDoorCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_OpenDoorCommandResponse(buffer_arg) {
  return bosdyn_api_spot_door_pb.OpenDoorCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_OpenDoorFeedbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.OpenDoorFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_OpenDoorFeedbackRequest(buffer_arg) {
  return bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_OpenDoorFeedbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.OpenDoorFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_OpenDoorFeedbackResponse(buffer_arg) {
  return bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DoorServiceService = exports.DoorServiceService = {
  openDoor: {
    path: '/bosdyn.api.spot.DoorService/OpenDoor',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_door_pb.OpenDoorCommandRequest,
    responseType: bosdyn_api_spot_door_pb.OpenDoorCommandResponse,
    requestSerialize: serialize_bosdyn_api_spot_OpenDoorCommandRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_OpenDoorCommandRequest,
    responseSerialize: serialize_bosdyn_api_spot_OpenDoorCommandResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_OpenDoorCommandResponse,
  },
  openDoorFeedback: {
    path: '/bosdyn.api.spot.DoorService/OpenDoorFeedback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest,
    responseType: bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse,
    requestSerialize: serialize_bosdyn_api_spot_OpenDoorFeedbackRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_OpenDoorFeedbackRequest,
    responseSerialize: serialize_bosdyn_api_spot_OpenDoorFeedbackResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_OpenDoorFeedbackResponse,
  },
};

exports.DoorServiceClient = grpc.makeGenericClientConstructor(DoorServiceService);
