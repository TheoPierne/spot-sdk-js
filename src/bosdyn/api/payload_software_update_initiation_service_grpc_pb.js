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
var bosdyn_api_payload_software_update_initiation_pb = require('../../bosdyn/api/payload_software_update_initiation_pb.js');

function serialize_bosdyn_api_TriggerInitiateUpdateRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.TriggerInitiateUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TriggerInitiateUpdateRequest(buffer_arg) {
  return bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_TriggerInitiateUpdateResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.TriggerInitiateUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TriggerInitiateUpdateResponse(buffer_arg) {
  return bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_TriggerSendPayloadSoftwareInfoRequest(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest)) {
    throw new Error('Expected argument of type bosdyn.api.TriggerSendPayloadSoftwareInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TriggerSendPayloadSoftwareInfoRequest(buffer_arg) {
  return bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_TriggerSendPayloadSoftwareInfoResponse(arg) {
  if (!(arg instanceof bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse)) {
    throw new Error('Expected argument of type bosdyn.api.TriggerSendPayloadSoftwareInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TriggerSendPayloadSoftwareInfoResponse(buffer_arg) {
  return bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// This service is hosted by a payload and is used by Spot to tell it to perform
// certain actions related to payload software update.  These RPCs support events only;
// no data exchange takes place.
var PayloadSoftwareUpdateInitiationServiceService = exports.PayloadSoftwareUpdateInitiationServiceService = {
  // Tell the payload to send information about its current software version.
triggerSendPayloadSoftwareInfo: {
    path: '/bosdyn.api.PayloadSoftwareUpdateInitiationService/TriggerSendPayloadSoftwareInfo',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest,
    responseType: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse,
    requestSerialize: serialize_bosdyn_api_TriggerSendPayloadSoftwareInfoRequest,
    requestDeserialize: deserialize_bosdyn_api_TriggerSendPayloadSoftwareInfoRequest,
    responseSerialize: serialize_bosdyn_api_TriggerSendPayloadSoftwareInfoResponse,
    responseDeserialize: deserialize_bosdyn_api_TriggerSendPayloadSoftwareInfoResponse,
  },
  // Tell the payload to initiate its software update operation.
triggerInitiateUpdate: {
    path: '/bosdyn.api.PayloadSoftwareUpdateInitiationService/TriggerInitiateUpdate',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest,
    responseType: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse,
    requestSerialize: serialize_bosdyn_api_TriggerInitiateUpdateRequest,
    requestDeserialize: deserialize_bosdyn_api_TriggerInitiateUpdateRequest,
    responseSerialize: serialize_bosdyn_api_TriggerInitiateUpdateResponse,
    responseDeserialize: deserialize_bosdyn_api_TriggerInitiateUpdateResponse,
  },
};

exports.PayloadSoftwareUpdateInitiationServiceClient = grpc.makeGenericClientConstructor(PayloadSoftwareUpdateInitiationServiceService, 'PayloadSoftwareUpdateInitiationService');
