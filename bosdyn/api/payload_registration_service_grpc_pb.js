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
var bosdyn_api_payload_registration_pb = require('../../bosdyn/api/payload_registration_pb.js');

function serialize_bosdyn_api_GetPayloadAuthTokenRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetPayloadAuthTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetPayloadAuthTokenRequest(buffer_arg) {
  return bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetPayloadAuthTokenResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetPayloadAuthTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetPayloadAuthTokenResponse(buffer_arg) {
  return bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RegisterPayloadRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_registration_pb.RegisterPayloadRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RegisterPayloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RegisterPayloadRequest(buffer_arg) {
  return bosdyn_api_payload_registration_pb.RegisterPayloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RegisterPayloadResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_registration_pb.RegisterPayloadResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RegisterPayloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RegisterPayloadResponse(buffer_arg) {
  return bosdyn_api_payload_registration_pb.RegisterPayloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_UpdatePayloadAttachedRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest)) {
    throw new Error('Expected argument of type bosdyn.api.UpdatePayloadAttachedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_UpdatePayloadAttachedRequest(buffer_arg) {
  return bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_UpdatePayloadAttachedResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse)) {
    throw new Error('Expected argument of type bosdyn.api.UpdatePayloadAttachedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_UpdatePayloadAttachedResponse(buffer_arg) {
  return bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_UpdatePayloadVersionRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.UpdatePayloadVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_UpdatePayloadVersionRequest(buffer_arg) {
  return bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_UpdatePayloadVersionResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.UpdatePayloadVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_UpdatePayloadVersionResponse(buffer_arg) {
  return bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// This service provides a way to register new payloads.
var PayloadRegistrationServiceService = exports.PayloadRegistrationServiceService = {
  // Register a payload with the directory.
registerPayload: {
    path: '/bosdyn.api.PayloadRegistrationService/RegisterPayload',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_registration_pb.RegisterPayloadRequest,
    responseType: bosdyn_api_payload_registration_pb.RegisterPayloadResponse,
    requestSerialize: serialize_bosdyn_api_RegisterPayloadRequest,
    requestDeserialize: deserialize_bosdyn_api_RegisterPayloadRequest,
    responseSerialize: serialize_bosdyn_api_RegisterPayloadResponse,
    responseDeserialize: deserialize_bosdyn_api_RegisterPayloadResponse,
  },
  // Update the version for the registered payload.
updatePayloadVersion: {
    path: '/bosdyn.api.PayloadRegistrationService/UpdatePayloadVersion',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest,
    responseType: bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse,
    requestSerialize: serialize_bosdyn_api_UpdatePayloadVersionRequest,
    requestDeserialize: deserialize_bosdyn_api_UpdatePayloadVersionRequest,
    responseSerialize: serialize_bosdyn_api_UpdatePayloadVersionResponse,
    responseDeserialize: deserialize_bosdyn_api_UpdatePayloadVersionResponse,
  },
  // Get the authentication token information associated with a given payload.
getPayloadAuthToken: {
    path: '/bosdyn.api.PayloadRegistrationService/GetPayloadAuthToken',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest,
    responseType: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse,
    requestSerialize: serialize_bosdyn_api_GetPayloadAuthTokenRequest,
    requestDeserialize: deserialize_bosdyn_api_GetPayloadAuthTokenRequest,
    responseSerialize: serialize_bosdyn_api_GetPayloadAuthTokenResponse,
    responseDeserialize: deserialize_bosdyn_api_GetPayloadAuthTokenResponse,
  },
  // Tell the robot whether the specified payload is attached..
updatePayloadAttached: {
    path: '/bosdyn.api.PayloadRegistrationService/UpdatePayloadAttached',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest,
    responseType: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse,
    requestSerialize: serialize_bosdyn_api_UpdatePayloadAttachedRequest,
    requestDeserialize: deserialize_bosdyn_api_UpdatePayloadAttachedRequest,
    responseSerialize: serialize_bosdyn_api_UpdatePayloadAttachedResponse,
    responseDeserialize: deserialize_bosdyn_api_UpdatePayloadAttachedResponse,
  },
};

exports.PayloadRegistrationServiceClient = grpc.makeGenericClientConstructor(PayloadRegistrationServiceService);
