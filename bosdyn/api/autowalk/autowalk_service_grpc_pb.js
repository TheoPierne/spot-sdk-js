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
var bosdyn_api_data_chunk_pb = require('../../../bosdyn/api/data_chunk_pb.js');

function serialize_bosdyn_api_DataChunk(arg) {
  if (!(arg instanceof bosdyn_api_data_chunk_pb.DataChunk)) {
    throw new Error('Expected argument of type bosdyn.api.DataChunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_DataChunk(buffer_arg) {
  return bosdyn_api_data_chunk_pb.DataChunk.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutowalkServiceService = exports.AutowalkServiceService = {
  // Compile a walk into a mission.
// Input DataChunks should deserialize into a CompileAutowalkRequest.
// Output DataChunks should deserialize into a CompileAutowalkResponse.
// This rpc is stateless.
compileAutowalk: {
    path: '/bosdyn.api.autowalk.AutowalkService/CompileAutowalk',
    requestStream: true,
    responseStream: true,
    requestType: bosdyn_api_data_chunk_pb.DataChunk,
    responseType: bosdyn_api_data_chunk_pb.DataChunk,
    requestSerialize: serialize_bosdyn_api_DataChunk,
    requestDeserialize: deserialize_bosdyn_api_DataChunk,
    responseSerialize: serialize_bosdyn_api_DataChunk,
    responseDeserialize: deserialize_bosdyn_api_DataChunk,
  },
  // Compile a walk into a mission then load to mission service.
// Input DataChunks should deserialize into a LoadAutowalkRequest.
// Output DataChunks should deserialize into a LoadAutowalkResponse.
loadAutowalk: {
    path: '/bosdyn.api.autowalk.AutowalkService/LoadAutowalk',
    requestStream: true,
    responseStream: true,
    requestType: bosdyn_api_data_chunk_pb.DataChunk,
    responseType: bosdyn_api_data_chunk_pb.DataChunk,
    requestSerialize: serialize_bosdyn_api_DataChunk,
    requestDeserialize: deserialize_bosdyn_api_DataChunk,
    responseSerialize: serialize_bosdyn_api_DataChunk,
    responseDeserialize: deserialize_bosdyn_api_DataChunk,
  },
};

exports.AutowalkServiceClient = grpc.makeGenericClientConstructor(AutowalkServiceService);
