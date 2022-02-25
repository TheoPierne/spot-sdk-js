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
var bosdyn_api_arm_surface_contact_service_pb = require('../../bosdyn/api/arm_surface_contact_service_pb.js');
var bosdyn_api_header_pb = require('../../bosdyn/api/header_pb.js');
var bosdyn_api_lease_pb = require('../../bosdyn/api/lease_pb.js');
var bosdyn_api_arm_surface_contact_pb = require('../../bosdyn/api/arm_surface_contact_pb.js');

function serialize_bosdyn_api_ArmSurfaceContactCommand(arg) {
  if (!(arg instanceof bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand)) {
    throw new Error('Expected argument of type bosdyn.api.ArmSurfaceContactCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ArmSurfaceContactCommand(buffer_arg) {
  return bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ArmSurfaceContactResponse(arg) {
  if (!(arg instanceof bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ArmSurfaceContactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ArmSurfaceContactResponse(buffer_arg) {
  return bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ArmSurfaceContactServiceService = exports.ArmSurfaceContactServiceService = {
  armSurfaceContact: {
    path: '/bosdyn.api.ArmSurfaceContactService/ArmSurfaceContact',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand,
    responseType: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse,
    requestSerialize: serialize_bosdyn_api_ArmSurfaceContactCommand,
    requestDeserialize: deserialize_bosdyn_api_ArmSurfaceContactCommand,
    responseSerialize: serialize_bosdyn_api_ArmSurfaceContactResponse,
    responseDeserialize: deserialize_bosdyn_api_ArmSurfaceContactResponse,
  },
};

exports.ArmSurfaceContactServiceClient = grpc.makeGenericClientConstructor(ArmSurfaceContactServiceService);
