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
var bosdyn_api_ray_cast_pb = require('../../bosdyn/api/ray_cast_pb.js');

function serialize_bosdyn_api_RaycastRequest(arg) {
  if (!(arg instanceof bosdyn_api_ray_cast_pb.RaycastRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RaycastRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RaycastRequest(buffer_arg) {
  return bosdyn_api_ray_cast_pb.RaycastRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RaycastResponse(arg) {
  if (!(arg instanceof bosdyn_api_ray_cast_pb.RaycastResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RaycastResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RaycastResponse(buffer_arg) {
  return bosdyn_api_ray_cast_pb.RaycastResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RayCastServiceService = exports.RayCastServiceService = {
  // Asks robot to cast the desired ray against its map of the
// surrounding environment to find the nearest intersection point.
raycast: {
    path: '/bosdyn.api.RayCastService/Raycast',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_ray_cast_pb.RaycastRequest,
    responseType: bosdyn_api_ray_cast_pb.RaycastResponse,
    requestSerialize: serialize_bosdyn_api_RaycastRequest,
    requestDeserialize: deserialize_bosdyn_api_RaycastRequest,
    responseSerialize: serialize_bosdyn_api_RaycastResponse,
    responseDeserialize: deserialize_bosdyn_api_RaycastResponse,
  },
};

exports.RayCastServiceClient = grpc.makeGenericClientConstructor(RayCastServiceService);
