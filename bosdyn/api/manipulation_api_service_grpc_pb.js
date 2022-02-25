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
var bosdyn_api_manipulation_api_pb = require('../../bosdyn/api/manipulation_api_pb.js');

function serialize_bosdyn_api_ApiGraspOverrideRequest(arg) {
  if (!(arg instanceof bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ApiGraspOverrideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ApiGraspOverrideRequest(buffer_arg) {
  return bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ApiGraspOverrideResponse(arg) {
  if (!(arg instanceof bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ApiGraspOverrideResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ApiGraspOverrideResponse(buffer_arg) {
  return bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ManipulationApiFeedbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ManipulationApiFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ManipulationApiFeedbackRequest(buffer_arg) {
  return bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ManipulationApiFeedbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ManipulationApiFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ManipulationApiFeedbackResponse(buffer_arg) {
  return bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ManipulationApiRequest(arg) {
  if (!(arg instanceof bosdyn_api_manipulation_api_pb.ManipulationApiRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ManipulationApiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ManipulationApiRequest(buffer_arg) {
  return bosdyn_api_manipulation_api_pb.ManipulationApiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ManipulationApiResponse(arg) {
  if (!(arg instanceof bosdyn_api_manipulation_api_pb.ManipulationApiResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ManipulationApiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ManipulationApiResponse(buffer_arg) {
  return bosdyn_api_manipulation_api_pb.ManipulationApiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ManipulationApiServiceService = exports.ManipulationApiServiceService = {
  manipulationApi: {
    path: '/bosdyn.api.ManipulationApiService/ManipulationApi',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_manipulation_api_pb.ManipulationApiRequest,
    responseType: bosdyn_api_manipulation_api_pb.ManipulationApiResponse,
    requestSerialize: serialize_bosdyn_api_ManipulationApiRequest,
    requestDeserialize: deserialize_bosdyn_api_ManipulationApiRequest,
    responseSerialize: serialize_bosdyn_api_ManipulationApiResponse,
    responseDeserialize: deserialize_bosdyn_api_ManipulationApiResponse,
  },
  manipulationApiFeedback: {
    path: '/bosdyn.api.ManipulationApiService/ManipulationApiFeedback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest,
    responseType: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse,
    requestSerialize: serialize_bosdyn_api_ManipulationApiFeedbackRequest,
    requestDeserialize: deserialize_bosdyn_api_ManipulationApiFeedbackRequest,
    responseSerialize: serialize_bosdyn_api_ManipulationApiFeedbackResponse,
    responseDeserialize: deserialize_bosdyn_api_ManipulationApiFeedbackResponse,
  },
  overrideGrasp: {
    path: '/bosdyn.api.ManipulationApiService/OverrideGrasp',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest,
    responseType: bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse,
    requestSerialize: serialize_bosdyn_api_ApiGraspOverrideRequest,
    requestDeserialize: deserialize_bosdyn_api_ApiGraspOverrideRequest,
    responseSerialize: serialize_bosdyn_api_ApiGraspOverrideResponse,
    responseDeserialize: deserialize_bosdyn_api_ApiGraspOverrideResponse,
  },
};

exports.ManipulationApiServiceClient = grpc.makeGenericClientConstructor(ManipulationApiServiceService);
