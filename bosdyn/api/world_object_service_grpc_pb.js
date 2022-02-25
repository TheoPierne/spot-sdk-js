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
var bosdyn_api_world_object_pb = require('../../bosdyn/api/world_object_pb.js');

function serialize_bosdyn_api_ListWorldObjectRequest(arg) {
  if (!(arg instanceof bosdyn_api_world_object_pb.ListWorldObjectRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListWorldObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListWorldObjectRequest(buffer_arg) {
  return bosdyn_api_world_object_pb.ListWorldObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListWorldObjectResponse(arg) {
  if (!(arg instanceof bosdyn_api_world_object_pb.ListWorldObjectResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListWorldObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListWorldObjectResponse(buffer_arg) {
  return bosdyn_api_world_object_pb.ListWorldObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_MutateWorldObjectRequest(arg) {
  if (!(arg instanceof bosdyn_api_world_object_pb.MutateWorldObjectRequest)) {
    throw new Error('Expected argument of type bosdyn.api.MutateWorldObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_MutateWorldObjectRequest(buffer_arg) {
  return bosdyn_api_world_object_pb.MutateWorldObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_MutateWorldObjectResponse(arg) {
  if (!(arg instanceof bosdyn_api_world_object_pb.MutateWorldObjectResponse)) {
    throw new Error('Expected argument of type bosdyn.api.MutateWorldObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_MutateWorldObjectResponse(buffer_arg) {
  return bosdyn_api_world_object_pb.MutateWorldObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The world object service provides a way to track and store objects detected in the world around the robot.
var WorldObjectServiceService = exports.WorldObjectServiceService = {
  // Request a list of all the world objects in the robot's perception scene.
listWorldObjects: {
    path: '/bosdyn.api.WorldObjectService/ListWorldObjects',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_world_object_pb.ListWorldObjectRequest,
    responseType: bosdyn_api_world_object_pb.ListWorldObjectResponse,
    requestSerialize: serialize_bosdyn_api_ListWorldObjectRequest,
    requestDeserialize: deserialize_bosdyn_api_ListWorldObjectRequest,
    responseSerialize: serialize_bosdyn_api_ListWorldObjectResponse,
    responseDeserialize: deserialize_bosdyn_api_ListWorldObjectResponse,
  },
  // Mutate (add, change, or delete) the world objects.
mutateWorldObjects: {
    path: '/bosdyn.api.WorldObjectService/MutateWorldObjects',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_world_object_pb.MutateWorldObjectRequest,
    responseType: bosdyn_api_world_object_pb.MutateWorldObjectResponse,
    requestSerialize: serialize_bosdyn_api_MutateWorldObjectRequest,
    requestDeserialize: deserialize_bosdyn_api_MutateWorldObjectRequest,
    responseSerialize: serialize_bosdyn_api_MutateWorldObjectResponse,
    responseDeserialize: deserialize_bosdyn_api_MutateWorldObjectResponse,
  },
};

exports.WorldObjectServiceClient = grpc.makeGenericClientConstructor(WorldObjectServiceService);
