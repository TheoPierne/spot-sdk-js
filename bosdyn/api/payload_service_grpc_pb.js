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
var bosdyn_api_payload_pb = require('../../bosdyn/api/payload_pb.js');

function serialize_bosdyn_api_ListPayloadsRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_pb.ListPayloadsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListPayloadsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListPayloadsRequest(buffer_arg) {
  return bosdyn_api_payload_pb.ListPayloadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListPayloadsResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_pb.ListPayloadsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListPayloadsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListPayloadsResponse(buffer_arg) {
  return bosdyn_api_payload_pb.ListPayloadsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// This service provides a way to query for the currently-registered payloads.
var PayloadServiceService = exports.PayloadServiceService = {
  // List all payloads the robot knows about.
listPayloads: {
    path: '/bosdyn.api.PayloadService/ListPayloads',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_pb.ListPayloadsRequest,
    responseType: bosdyn_api_payload_pb.ListPayloadsResponse,
    requestSerialize: serialize_bosdyn_api_ListPayloadsRequest,
    requestDeserialize: deserialize_bosdyn_api_ListPayloadsRequest,
    responseSerialize: serialize_bosdyn_api_ListPayloadsResponse,
    responseDeserialize: deserialize_bosdyn_api_ListPayloadsResponse,
  },
};

exports.PayloadServiceClient = grpc.makeGenericClientConstructor(PayloadServiceService);
