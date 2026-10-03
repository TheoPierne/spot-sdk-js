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
var bosdyn_api_hazard_avoidance_pb = require('../../bosdyn/api/hazard_avoidance_pb.js');

function serialize_bosdyn_api_AddHazardsRequest(arg) {
  if (!(arg instanceof bosdyn_api_hazard_avoidance_pb.AddHazardsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.AddHazardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AddHazardsRequest(buffer_arg) {
  return bosdyn_api_hazard_avoidance_pb.AddHazardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_AddHazardsResponse(arg) {
  if (!(arg instanceof bosdyn_api_hazard_avoidance_pb.AddHazardsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.AddHazardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AddHazardsResponse(buffer_arg) {
  return bosdyn_api_hazard_avoidance_pb.AddHazardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetHazardServiceStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetHazardServiceStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetHazardServiceStatusRequest(buffer_arg) {
  return bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetHazardServiceStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetHazardServiceStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetHazardServiceStatusResponse(buffer_arg) {
  return bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The hazard avoidance service provides a way to aggregate and track observations of hazardous
// terrains/structures around the robot.
var HazardAvoidanceServiceService = exports.HazardAvoidanceServiceService = {
  // Request to add new hazard observations.
addHazards: {
    path: '/bosdyn.api.HazardAvoidanceService/AddHazards',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_hazard_avoidance_pb.AddHazardsRequest,
    responseType: bosdyn_api_hazard_avoidance_pb.AddHazardsResponse,
    requestSerialize: serialize_bosdyn_api_AddHazardsRequest,
    requestDeserialize: deserialize_bosdyn_api_AddHazardsRequest,
    responseSerialize: serialize_bosdyn_api_AddHazardsResponse,
    responseDeserialize: deserialize_bosdyn_api_AddHazardsResponse,
  },
  // Request to check if the extension is running.
getHazardServiceStatus: {
    path: '/bosdyn.api.HazardAvoidanceService/GetHazardServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest,
    responseType: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse,
    requestSerialize: serialize_bosdyn_api_GetHazardServiceStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_GetHazardServiceStatusRequest,
    responseSerialize: serialize_bosdyn_api_GetHazardServiceStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_GetHazardServiceStatusResponse,
  },
};

exports.HazardAvoidanceServiceClient = grpc.makeGenericClientConstructor(HazardAvoidanceServiceService, 'HazardAvoidanceService');
