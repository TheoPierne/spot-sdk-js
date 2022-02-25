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
var bosdyn_api_log_annotation_pb = require('../../bosdyn/api/log_annotation_pb.js');

function serialize_bosdyn_api_AddLogAnnotationRequest(arg) {
  if (!(arg instanceof bosdyn_api_log_annotation_pb.AddLogAnnotationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.AddLogAnnotationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AddLogAnnotationRequest(buffer_arg) {
  return bosdyn_api_log_annotation_pb.AddLogAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_AddLogAnnotationResponse(arg) {
  if (!(arg instanceof bosdyn_api_log_annotation_pb.AddLogAnnotationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.AddLogAnnotationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AddLogAnnotationResponse(buffer_arg) {
  return bosdyn_api_log_annotation_pb.AddLogAnnotationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// DEPRECATED as of 2.1.0: Please use the DataBufferService instead of the LogAnnotationService.
// The LogAnnotationService is deprecated in release 2.1 and may be removed in the
// future.
// LogAnnotationService allows adding information to the robot's log files.
// This service is a mechanism for adding information to the robot's log files.
var LogAnnotationServiceService = exports.LogAnnotationServiceService = {
  // Add the specified information to the robot's log files.
addLogAnnotation: {
    path: '/bosdyn.api.LogAnnotationService/AddLogAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_log_annotation_pb.AddLogAnnotationRequest,
    responseType: bosdyn_api_log_annotation_pb.AddLogAnnotationResponse,
    requestSerialize: serialize_bosdyn_api_AddLogAnnotationRequest,
    requestDeserialize: deserialize_bosdyn_api_AddLogAnnotationRequest,
    responseSerialize: serialize_bosdyn_api_AddLogAnnotationResponse,
    responseDeserialize: deserialize_bosdyn_api_AddLogAnnotationResponse,
  },
};

exports.LogAnnotationServiceClient = grpc.makeGenericClientConstructor(LogAnnotationServiceService);
