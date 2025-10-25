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
var bosdyn_api_payload_software_update_pb = require('../../bosdyn/api/payload_software_update_pb.js');

function serialize_bosdyn_api_GetAvailableSoftwareUpdatesRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetAvailableSoftwareUpdatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetAvailableSoftwareUpdatesRequest(buffer_arg) {
  return bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetAvailableSoftwareUpdatesResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetAvailableSoftwareUpdatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetAvailableSoftwareUpdatesResponse(buffer_arg) {
  return bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SendCurrentVersionInfoRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest)) {
    throw new Error('Expected argument of type bosdyn.api.SendCurrentVersionInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SendCurrentVersionInfoRequest(buffer_arg) {
  return bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SendCurrentVersionInfoResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse)) {
    throw new Error('Expected argument of type bosdyn.api.SendCurrentVersionInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SendCurrentVersionInfoResponse(buffer_arg) {
  return bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SendSoftwareUpdateStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.SendSoftwareUpdateStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SendSoftwareUpdateStatusRequest(buffer_arg) {
  return bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SendSoftwareUpdateStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.SendSoftwareUpdateStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SendSoftwareUpdateStatusResponse(buffer_arg) {
  return bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The PayloadSoftwareUpdateService is hosted by a robot and coordinates software updates of the
// various payloads attached to the robot.  Each payload connects to this service to communicate
// its current version, obtain information about available updates, and provide status of the
// update process.
var PayloadSoftwareUpdateServiceService = exports.PayloadSoftwareUpdateServiceService = {
  // Send the payload's current software version information to the service.
sendCurrentVersionInfo: {
    path: '/bosdyn.api.PayloadSoftwareUpdateService/SendCurrentVersionInfo',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest,
    responseType: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse,
    requestSerialize: serialize_bosdyn_api_SendCurrentVersionInfoRequest,
    requestDeserialize: deserialize_bosdyn_api_SendCurrentVersionInfoRequest,
    responseSerialize: serialize_bosdyn_api_SendCurrentVersionInfoResponse,
    responseDeserialize: deserialize_bosdyn_api_SendCurrentVersionInfoResponse,
  },
  // Query the payload software update service for available software updates for the payload
// and any updateable components hosted by the payload.
getAvailableSoftwareUpdates: {
    path: '/bosdyn.api.PayloadSoftwareUpdateService/GetAvailableSoftwareUpdates',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest,
    responseType: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse,
    requestSerialize: serialize_bosdyn_api_GetAvailableSoftwareUpdatesRequest,
    requestDeserialize: deserialize_bosdyn_api_GetAvailableSoftwareUpdatesRequest,
    responseSerialize: serialize_bosdyn_api_GetAvailableSoftwareUpdatesResponse,
    responseDeserialize: deserialize_bosdyn_api_GetAvailableSoftwareUpdatesResponse,
  },
  // Set the status of the payload software update in process.
sendSoftwareUpdateStatus: {
    path: '/bosdyn.api.PayloadSoftwareUpdateService/SendSoftwareUpdateStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest,
    responseType: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse,
    requestSerialize: serialize_bosdyn_api_SendSoftwareUpdateStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_SendSoftwareUpdateStatusRequest,
    responseSerialize: serialize_bosdyn_api_SendSoftwareUpdateStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_SendSoftwareUpdateStatusResponse,
  },
};

exports.PayloadSoftwareUpdateServiceClient = grpc.makeGenericClientConstructor(PayloadSoftwareUpdateServiceService, 'PayloadSoftwareUpdateService');
