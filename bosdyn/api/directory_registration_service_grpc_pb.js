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
var bosdyn_api_directory_registration_pb = require('../../bosdyn/api/directory_registration_pb.js');

function serialize_bosdyn_api_RegisterServiceRequest(arg) {
  if (!(arg instanceof bosdyn_api_directory_registration_pb.RegisterServiceRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RegisterServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RegisterServiceRequest(buffer_arg) {
  return bosdyn_api_directory_registration_pb.RegisterServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RegisterServiceResponse(arg) {
  if (!(arg instanceof bosdyn_api_directory_registration_pb.RegisterServiceResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RegisterServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RegisterServiceResponse(buffer_arg) {
  return bosdyn_api_directory_registration_pb.RegisterServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_UnregisterServiceRequest(arg) {
  if (!(arg instanceof bosdyn_api_directory_registration_pb.UnregisterServiceRequest)) {
    throw new Error('Expected argument of type bosdyn.api.UnregisterServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_UnregisterServiceRequest(buffer_arg) {
  return bosdyn_api_directory_registration_pb.UnregisterServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_UnregisterServiceResponse(arg) {
  if (!(arg instanceof bosdyn_api_directory_registration_pb.UnregisterServiceResponse)) {
    throw new Error('Expected argument of type bosdyn.api.UnregisterServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_UnregisterServiceResponse(buffer_arg) {
  return bosdyn_api_directory_registration_pb.UnregisterServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_UpdateServiceRequest(arg) {
  if (!(arg instanceof bosdyn_api_directory_registration_pb.UpdateServiceRequest)) {
    throw new Error('Expected argument of type bosdyn.api.UpdateServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_UpdateServiceRequest(buffer_arg) {
  return bosdyn_api_directory_registration_pb.UpdateServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_UpdateServiceResponse(arg) {
  if (!(arg instanceof bosdyn_api_directory_registration_pb.UpdateServiceResponse)) {
    throw new Error('Expected argument of type bosdyn.api.UpdateServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_UpdateServiceResponse(buffer_arg) {
  return bosdyn_api_directory_registration_pb.UpdateServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// DirectoryRegistrationService is a private class that lets services be
// discovered by clients by adding them to a discovery database.  Services
// can live on robot, payload, or other accessible cloud-based locations.
// Each service is responsible for registering itself with this service.
var DirectoryRegistrationServiceService = exports.DirectoryRegistrationServiceService = {
  // Called by a producer to register as a provider with the application.  Returns the
// record for that provider.  Requires unique name and correctly filled out service
// record in request.
registerService: {
    path: '/bosdyn.api.DirectoryRegistrationService/RegisterService',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_directory_registration_pb.RegisterServiceRequest,
    responseType: bosdyn_api_directory_registration_pb.RegisterServiceResponse,
    requestSerialize: serialize_bosdyn_api_RegisterServiceRequest,
    requestDeserialize: deserialize_bosdyn_api_RegisterServiceRequest,
    responseSerialize: serialize_bosdyn_api_RegisterServiceResponse,
    responseDeserialize: deserialize_bosdyn_api_RegisterServiceResponse,
  },
  // Called by a producer to remove its registration from the DirectoryManager.
unregisterService: {
    path: '/bosdyn.api.DirectoryRegistrationService/UnregisterService',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_directory_registration_pb.UnregisterServiceRequest,
    responseType: bosdyn_api_directory_registration_pb.UnregisterServiceResponse,
    requestSerialize: serialize_bosdyn_api_UnregisterServiceRequest,
    requestDeserialize: deserialize_bosdyn_api_UnregisterServiceRequest,
    responseSerialize: serialize_bosdyn_api_UnregisterServiceResponse,
    responseDeserialize: deserialize_bosdyn_api_UnregisterServiceResponse,
  },
  // Update the ServiceEntry for a producer on the server.
updateService: {
    path: '/bosdyn.api.DirectoryRegistrationService/UpdateService',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_directory_registration_pb.UpdateServiceRequest,
    responseType: bosdyn_api_directory_registration_pb.UpdateServiceResponse,
    requestSerialize: serialize_bosdyn_api_UpdateServiceRequest,
    requestDeserialize: deserialize_bosdyn_api_UpdateServiceRequest,
    responseSerialize: serialize_bosdyn_api_UpdateServiceResponse,
    responseDeserialize: deserialize_bosdyn_api_UpdateServiceResponse,
  },
};

exports.DirectoryRegistrationServiceClient = grpc.makeGenericClientConstructor(DirectoryRegistrationServiceService);
