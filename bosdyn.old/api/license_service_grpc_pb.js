// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2020 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).
//
'use strict';
var grpc = require('@grpc/grpc-js');
var bosdyn_api_license_pb = require('../../bosdyn/api/license_pb.js');

function serialize_bosdyn_api_GetLicenseInfoRequest(arg) {
  if (!(arg instanceof bosdyn_api_license_pb.GetLicenseInfoRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetLicenseInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetLicenseInfoRequest(buffer_arg) {
  return bosdyn_api_license_pb.GetLicenseInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetLicenseInfoResponse(arg) {
  if (!(arg instanceof bosdyn_api_license_pb.GetLicenseInfoResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetLicenseInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetLicenseInfoResponse(buffer_arg) {
  return bosdyn_api_license_pb.GetLicenseInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The LicenseService allows clients to query the currently installed license on robot.
var LicenseServiceService = exports.LicenseServiceService = {
  getLicenseInfo: {
    path: '/bosdyn.api.LicenseService/GetLicenseInfo',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_license_pb.GetLicenseInfoRequest,
    responseType: bosdyn_api_license_pb.GetLicenseInfoResponse,
    requestSerialize: serialize_bosdyn_api_GetLicenseInfoRequest,
    requestDeserialize: deserialize_bosdyn_api_GetLicenseInfoRequest,
    responseSerialize: serialize_bosdyn_api_GetLicenseInfoResponse,
    responseDeserialize: deserialize_bosdyn_api_GetLicenseInfoResponse,
  },
};

exports.LicenseServiceClient = grpc.makeGenericClientConstructor(LicenseServiceService);
