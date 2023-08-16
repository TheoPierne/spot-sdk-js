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
var bosdyn_api_spot_inverse_kinematics_pb = require('../../../bosdyn/api/spot/inverse_kinematics_pb.js');

function serialize_bosdyn_api_spot_InverseKinematicsRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.InverseKinematicsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_InverseKinematicsRequest(buffer_arg) {
  return bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_InverseKinematicsResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.InverseKinematicsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_InverseKinematicsResponse(buffer_arg) {
  return bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InverseKinematicsServiceService = exports.InverseKinematicsServiceService = {
  inverseKinematics: {
    path: '/bosdyn.api.spot.InverseKinematicsService/InverseKinematics',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest,
    responseType: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse,
    requestSerialize: serialize_bosdyn_api_spot_InverseKinematicsRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_InverseKinematicsRequest,
    responseSerialize: serialize_bosdyn_api_spot_InverseKinematicsResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_InverseKinematicsResponse,
  },
};

exports.InverseKinematicsServiceClient = grpc.makeGenericClientConstructor(InverseKinematicsServiceService);
