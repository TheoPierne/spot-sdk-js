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
var bosdyn_api_ir_enable_disable_pb = require('../../bosdyn/api/ir_enable_disable_pb.js');

function serialize_bosdyn_api_IREnableDisableRequest(arg) {
  if (!(arg instanceof bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest)) {
    throw new Error('Expected argument of type bosdyn.api.IREnableDisableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_IREnableDisableRequest(buffer_arg) {
  return bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_IREnableDisableResponse(arg) {
  if (!(arg instanceof bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse)) {
    throw new Error('Expected argument of type bosdyn.api.IREnableDisableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_IREnableDisableResponse(buffer_arg) {
  return bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var IREnableDisableServiceService = exports.IREnableDisableServiceService = {
  iREnableDisable: {
    path: '/bosdyn.api.IREnableDisableService/IREnableDisable',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest,
    responseType: bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse,
    requestSerialize: serialize_bosdyn_api_IREnableDisableRequest,
    requestDeserialize: deserialize_bosdyn_api_IREnableDisableRequest,
    responseSerialize: serialize_bosdyn_api_IREnableDisableResponse,
    responseDeserialize: deserialize_bosdyn_api_IREnableDisableResponse,
  },
};

exports.IREnableDisableServiceClient = grpc.makeGenericClientConstructor(IREnableDisableServiceService);
