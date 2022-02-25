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
var bosdyn_api_local_grid_pb = require('../../bosdyn/api/local_grid_pb.js');

function serialize_bosdyn_api_GetLocalGridTypesRequest(arg) {
  if (!(arg instanceof bosdyn_api_local_grid_pb.GetLocalGridTypesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetLocalGridTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetLocalGridTypesRequest(buffer_arg) {
  return bosdyn_api_local_grid_pb.GetLocalGridTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetLocalGridTypesResponse(arg) {
  if (!(arg instanceof bosdyn_api_local_grid_pb.GetLocalGridTypesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetLocalGridTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetLocalGridTypesResponse(buffer_arg) {
  return bosdyn_api_local_grid_pb.GetLocalGridTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetLocalGridsRequest(arg) {
  if (!(arg instanceof bosdyn_api_local_grid_pb.GetLocalGridsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetLocalGridsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetLocalGridsRequest(buffer_arg) {
  return bosdyn_api_local_grid_pb.GetLocalGridsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetLocalGridsResponse(arg) {
  if (!(arg instanceof bosdyn_api_local_grid_pb.GetLocalGridsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetLocalGridsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetLocalGridsResponse(buffer_arg) {
  return bosdyn_api_local_grid_pb.GetLocalGridsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The map service provides access multiple kinds of cell-based map data.
// It supports querying for the list of available types of local grids provided by the service,
// and supports requesting a set of the latest local grids by map type name.
var LocalGridServiceService = exports.LocalGridServiceService = {
  // Obtain the list of available map types.
// The name field keys access to individual local grids when calling GetLocalGrids.
getLocalGridTypes: {
    path: '/bosdyn.api.LocalGridService/GetLocalGridTypes',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_local_grid_pb.GetLocalGridTypesRequest,
    responseType: bosdyn_api_local_grid_pb.GetLocalGridTypesResponse,
    requestSerialize: serialize_bosdyn_api_GetLocalGridTypesRequest,
    requestDeserialize: deserialize_bosdyn_api_GetLocalGridTypesRequest,
    responseSerialize: serialize_bosdyn_api_GetLocalGridTypesResponse,
    responseDeserialize: deserialize_bosdyn_api_GetLocalGridTypesResponse,
  },
  // Request a set of local grids by type name.
getLocalGrids: {
    path: '/bosdyn.api.LocalGridService/GetLocalGrids',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_local_grid_pb.GetLocalGridsRequest,
    responseType: bosdyn_api_local_grid_pb.GetLocalGridsResponse,
    requestSerialize: serialize_bosdyn_api_GetLocalGridsRequest,
    requestDeserialize: deserialize_bosdyn_api_GetLocalGridsRequest,
    responseSerialize: serialize_bosdyn_api_GetLocalGridsResponse,
    responseDeserialize: deserialize_bosdyn_api_GetLocalGridsResponse,
  },
};

exports.LocalGridServiceClient = grpc.makeGenericClientConstructor(LocalGridServiceService);
