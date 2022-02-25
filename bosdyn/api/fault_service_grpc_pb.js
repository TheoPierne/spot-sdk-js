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
var bosdyn_api_service_fault_pb = require('../../bosdyn/api/service_fault_pb.js');

function serialize_bosdyn_api_ClearServiceFaultRequest(arg) {
  if (!(arg instanceof bosdyn_api_service_fault_pb.ClearServiceFaultRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ClearServiceFaultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ClearServiceFaultRequest(buffer_arg) {
  return bosdyn_api_service_fault_pb.ClearServiceFaultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ClearServiceFaultResponse(arg) {
  if (!(arg instanceof bosdyn_api_service_fault_pb.ClearServiceFaultResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ClearServiceFaultResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ClearServiceFaultResponse(buffer_arg) {
  return bosdyn_api_service_fault_pb.ClearServiceFaultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_TriggerServiceFaultRequest(arg) {
  if (!(arg instanceof bosdyn_api_service_fault_pb.TriggerServiceFaultRequest)) {
    throw new Error('Expected argument of type bosdyn.api.TriggerServiceFaultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TriggerServiceFaultRequest(buffer_arg) {
  return bosdyn_api_service_fault_pb.TriggerServiceFaultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_TriggerServiceFaultResponse(arg) {
  if (!(arg instanceof bosdyn_api_service_fault_pb.TriggerServiceFaultResponse)) {
    throw new Error('Expected argument of type bosdyn.api.TriggerServiceFaultResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TriggerServiceFaultResponse(buffer_arg) {
  return bosdyn_api_service_fault_pb.TriggerServiceFaultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The service fault service enables modification of the robot state ServiceFaultState.
var FaultServiceService = exports.FaultServiceService = {
  // Sends a ServiceFault to be reporting in robot state.
triggerServiceFault: {
    path: '/bosdyn.api.FaultService/TriggerServiceFault',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_service_fault_pb.TriggerServiceFaultRequest,
    responseType: bosdyn_api_service_fault_pb.TriggerServiceFaultResponse,
    requestSerialize: serialize_bosdyn_api_TriggerServiceFaultRequest,
    requestDeserialize: deserialize_bosdyn_api_TriggerServiceFaultRequest,
    responseSerialize: serialize_bosdyn_api_TriggerServiceFaultResponse,
    responseDeserialize: deserialize_bosdyn_api_TriggerServiceFaultResponse,
  },
  // Clears an active ServiceFault from robot state.
clearServiceFault: {
    path: '/bosdyn.api.FaultService/ClearServiceFault',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_service_fault_pb.ClearServiceFaultRequest,
    responseType: bosdyn_api_service_fault_pb.ClearServiceFaultResponse,
    requestSerialize: serialize_bosdyn_api_ClearServiceFaultRequest,
    requestDeserialize: deserialize_bosdyn_api_ClearServiceFaultRequest,
    responseSerialize: serialize_bosdyn_api_ClearServiceFaultResponse,
    responseDeserialize: deserialize_bosdyn_api_ClearServiceFaultResponse,
  },
};

exports.FaultServiceClient = grpc.makeGenericClientConstructor(FaultServiceService);
