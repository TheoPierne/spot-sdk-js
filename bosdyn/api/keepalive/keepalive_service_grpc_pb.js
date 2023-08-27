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
var bosdyn_api_keepalive_keepalive_pb = require('../../../bosdyn/api/keepalive/keepalive_pb.js');

function serialize_bosdyn_api_keepalive_CheckInRequest(arg) {
  if (!(arg instanceof bosdyn_api_keepalive_keepalive_pb.CheckInRequest)) {
    throw new Error('Expected argument of type bosdyn.api.keepalive.CheckInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_keepalive_CheckInRequest(buffer_arg) {
  return bosdyn_api_keepalive_keepalive_pb.CheckInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_keepalive_CheckInResponse(arg) {
  if (!(arg instanceof bosdyn_api_keepalive_keepalive_pb.CheckInResponse)) {
    throw new Error('Expected argument of type bosdyn.api.keepalive.CheckInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_keepalive_CheckInResponse(buffer_arg) {
  return bosdyn_api_keepalive_keepalive_pb.CheckInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_keepalive_GetStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_keepalive_keepalive_pb.GetStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.keepalive.GetStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_keepalive_GetStatusRequest(buffer_arg) {
  return bosdyn_api_keepalive_keepalive_pb.GetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_keepalive_GetStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_keepalive_keepalive_pb.GetStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.keepalive.GetStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_keepalive_GetStatusResponse(buffer_arg) {
  return bosdyn_api_keepalive_keepalive_pb.GetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_keepalive_ModifyPolicyRequest(arg) {
  if (!(arg instanceof bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest)) {
    throw new Error('Expected argument of type bosdyn.api.keepalive.ModifyPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_keepalive_ModifyPolicyRequest(buffer_arg) {
  return bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_keepalive_ModifyPolicyResponse(arg) {
  if (!(arg instanceof bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse)) {
    throw new Error('Expected argument of type bosdyn.api.keepalive.ModifyPolicyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_keepalive_ModifyPolicyResponse(buffer_arg) {
  return bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Keepalive service allows users to specify what the system should do when one or more clients
// stop communicating with the robot. The actions, and when those actions happen, are specified in a
// Policy. Clients will periodically check in with the Keepalive service to prevent the actions from
// happening.
//
// This service is in BETA and may undergo changes in future releases.
var KeepaliveServiceService = exports.KeepaliveServiceService = {
  // Add and/or remove policies of the session.
// Adding or removing only happens if all parts of the request are valid. For example, if the
// policy to be added is valid, but policies to be removed are not valid, no policy is added.
modifyPolicy: {
    path: '/bosdyn.api.keepalive.KeepaliveService/ModifyPolicy',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest,
    responseType: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse,
    requestSerialize: serialize_bosdyn_api_keepalive_ModifyPolicyRequest,
    requestDeserialize: deserialize_bosdyn_api_keepalive_ModifyPolicyRequest,
    responseSerialize: serialize_bosdyn_api_keepalive_ModifyPolicyResponse,
    responseDeserialize: deserialize_bosdyn_api_keepalive_ModifyPolicyResponse,
  },
  // Refresh the timer on a specific policy.
checkIn: {
    path: '/bosdyn.api.keepalive.KeepaliveService/CheckIn',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_keepalive_keepalive_pb.CheckInRequest,
    responseType: bosdyn_api_keepalive_keepalive_pb.CheckInResponse,
    requestSerialize: serialize_bosdyn_api_keepalive_CheckInRequest,
    requestDeserialize: deserialize_bosdyn_api_keepalive_CheckInRequest,
    responseSerialize: serialize_bosdyn_api_keepalive_CheckInResponse,
    responseDeserialize: deserialize_bosdyn_api_keepalive_CheckInResponse,
  },
  // Get the status of the current session.
getStatus: {
    path: '/bosdyn.api.keepalive.KeepaliveService/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_keepalive_keepalive_pb.GetStatusRequest,
    responseType: bosdyn_api_keepalive_keepalive_pb.GetStatusResponse,
    requestSerialize: serialize_bosdyn_api_keepalive_GetStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_keepalive_GetStatusRequest,
    responseSerialize: serialize_bosdyn_api_keepalive_GetStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_keepalive_GetStatusResponse,
  },
};

exports.KeepaliveServiceClient = grpc.makeGenericClientConstructor(KeepaliveServiceService);
