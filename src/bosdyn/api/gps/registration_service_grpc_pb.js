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
var bosdyn_api_gps_registration_pb = require('../../../bosdyn/api/gps/registration_pb.js');

function serialize_bosdyn_api_gps_GetLocationRequest(arg) {
  if (!(arg instanceof bosdyn_api_gps_registration_pb.GetLocationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.gps.GetLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_gps_GetLocationRequest(buffer_arg) {
  return bosdyn_api_gps_registration_pb.GetLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_gps_GetLocationResponse(arg) {
  if (!(arg instanceof bosdyn_api_gps_registration_pb.GetLocationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.gps.GetLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_gps_GetLocationResponse(buffer_arg) {
  return bosdyn_api_gps_registration_pb.GetLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_gps_ResetRegistrationRequest(arg) {
  if (!(arg instanceof bosdyn_api_gps_registration_pb.ResetRegistrationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.gps.ResetRegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_gps_ResetRegistrationRequest(buffer_arg) {
  return bosdyn_api_gps_registration_pb.ResetRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_gps_ResetRegistrationResponse(arg) {
  if (!(arg instanceof bosdyn_api_gps_registration_pb.ResetRegistrationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.gps.ResetRegistrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_gps_ResetRegistrationResponse(buffer_arg) {
  return bosdyn_api_gps_registration_pb.ResetRegistrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// The RegistrationService consumes data sent to the Gps/AggregatorService.
// It calculates where the robot is in the world, and the transforms from
// the robots internal frames to the world frame.
var RegistrationServiceService = exports.RegistrationServiceService = {
  getLocation: {
    path: '/bosdyn.api.gps.RegistrationService/GetLocation',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_gps_registration_pb.GetLocationRequest,
    responseType: bosdyn_api_gps_registration_pb.GetLocationResponse,
    requestSerialize: serialize_bosdyn_api_gps_GetLocationRequest,
    requestDeserialize: deserialize_bosdyn_api_gps_GetLocationRequest,
    responseSerialize: serialize_bosdyn_api_gps_GetLocationResponse,
    responseDeserialize: deserialize_bosdyn_api_gps_GetLocationResponse,
  },
  resetRegistration: {
    path: '/bosdyn.api.gps.RegistrationService/ResetRegistration',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_gps_registration_pb.ResetRegistrationRequest,
    responseType: bosdyn_api_gps_registration_pb.ResetRegistrationResponse,
    requestSerialize: serialize_bosdyn_api_gps_ResetRegistrationRequest,
    requestDeserialize: deserialize_bosdyn_api_gps_ResetRegistrationRequest,
    responseSerialize: serialize_bosdyn_api_gps_ResetRegistrationResponse,
    responseDeserialize: deserialize_bosdyn_api_gps_ResetRegistrationResponse,
  },
};

exports.RegistrationServiceClient = grpc.makeGenericClientConstructor(RegistrationServiceService, 'RegistrationService');
