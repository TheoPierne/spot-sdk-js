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
var bosdyn_api_auto_return_auto_return_pb = require('../../../bosdyn/api/auto_return/auto_return_pb.js');

function serialize_bosdyn_api_auto_return_ConfigureRequest(arg) {
  if (!(arg instanceof bosdyn_api_auto_return_auto_return_pb.ConfigureRequest)) {
    throw new Error('Expected argument of type bosdyn.api.auto_return.ConfigureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_auto_return_ConfigureRequest(buffer_arg) {
  return bosdyn_api_auto_return_auto_return_pb.ConfigureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_auto_return_ConfigureResponse(arg) {
  if (!(arg instanceof bosdyn_api_auto_return_auto_return_pb.ConfigureResponse)) {
    throw new Error('Expected argument of type bosdyn.api.auto_return.ConfigureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_auto_return_ConfigureResponse(buffer_arg) {
  return bosdyn_api_auto_return_auto_return_pb.ConfigureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_auto_return_GetConfigurationRequest(arg) {
  if (!(arg instanceof bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.auto_return.GetConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_auto_return_GetConfigurationRequest(buffer_arg) {
  return bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_auto_return_GetConfigurationResponse(arg) {
  if (!(arg instanceof bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.auto_return.GetConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_auto_return_GetConfigurationResponse(buffer_arg) {
  return bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_auto_return_StartRequest(arg) {
  if (!(arg instanceof bosdyn_api_auto_return_auto_return_pb.StartRequest)) {
    throw new Error('Expected argument of type bosdyn.api.auto_return.StartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_auto_return_StartRequest(buffer_arg) {
  return bosdyn_api_auto_return_auto_return_pb.StartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_auto_return_StartResponse(arg) {
  if (!(arg instanceof bosdyn_api_auto_return_auto_return_pb.StartResponse)) {
    throw new Error('Expected argument of type bosdyn.api.auto_return.StartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_auto_return_StartResponse(buffer_arg) {
  return bosdyn_api_auto_return_auto_return_pb.StartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutoReturnServiceService = exports.AutoReturnServiceService = {
  // Configure the service.
configure: {
    path: '/bosdyn.api.auto_return.AutoReturnService/Configure',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_auto_return_auto_return_pb.ConfigureRequest,
    responseType: bosdyn_api_auto_return_auto_return_pb.ConfigureResponse,
    requestSerialize: serialize_bosdyn_api_auto_return_ConfigureRequest,
    requestDeserialize: deserialize_bosdyn_api_auto_return_ConfigureRequest,
    responseSerialize: serialize_bosdyn_api_auto_return_ConfigureResponse,
    responseDeserialize: deserialize_bosdyn_api_auto_return_ConfigureResponse,
  },
  // Get the current configuration.
getConfiguration: {
    path: '/bosdyn.api.auto_return.AutoReturnService/GetConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest,
    responseType: bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse,
    requestSerialize: serialize_bosdyn_api_auto_return_GetConfigurationRequest,
    requestDeserialize: deserialize_bosdyn_api_auto_return_GetConfigurationRequest,
    responseSerialize: serialize_bosdyn_api_auto_return_GetConfigurationResponse,
    responseDeserialize: deserialize_bosdyn_api_auto_return_GetConfigurationResponse,
  },
  // Start AutoReturn now.
start: {
    path: '/bosdyn.api.auto_return.AutoReturnService/Start',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_auto_return_auto_return_pb.StartRequest,
    responseType: bosdyn_api_auto_return_auto_return_pb.StartResponse,
    requestSerialize: serialize_bosdyn_api_auto_return_StartRequest,
    requestDeserialize: deserialize_bosdyn_api_auto_return_StartRequest,
    responseSerialize: serialize_bosdyn_api_auto_return_StartResponse,
    responseDeserialize: deserialize_bosdyn_api_auto_return_StartResponse,
  },
};

exports.AutoReturnServiceClient = grpc.makeGenericClientConstructor(AutoReturnServiceService);
