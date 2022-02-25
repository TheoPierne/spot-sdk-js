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
var bosdyn_api_auth_pb = require('../../bosdyn/api/auth_pb.js');

function serialize_bosdyn_api_GetAuthTokenRequest(arg) {
  if (!(arg instanceof bosdyn_api_auth_pb.GetAuthTokenRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetAuthTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetAuthTokenRequest(buffer_arg) {
  return bosdyn_api_auth_pb.GetAuthTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetAuthTokenResponse(arg) {
  if (!(arg instanceof bosdyn_api_auth_pb.GetAuthTokenResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetAuthTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetAuthTokenResponse(buffer_arg) {
  return bosdyn_api_auth_pb.GetAuthTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The AuthService provides clients the ability to convert a user/password pair into a token. The
// token can then be added to the http2 headers for future requests in order to establish the
// identity of the requester.
var AuthServiceService = exports.AuthServiceService = {
  // Request to get the auth token for the robot.
getAuthToken: {
    path: '/bosdyn.api.AuthService/GetAuthToken',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_auth_pb.GetAuthTokenRequest,
    responseType: bosdyn_api_auth_pb.GetAuthTokenResponse,
    requestSerialize: serialize_bosdyn_api_GetAuthTokenRequest,
    requestDeserialize: deserialize_bosdyn_api_GetAuthTokenRequest,
    responseSerialize: serialize_bosdyn_api_GetAuthTokenResponse,
    responseDeserialize: deserialize_bosdyn_api_GetAuthTokenResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
