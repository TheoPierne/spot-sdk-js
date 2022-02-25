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
var bosdyn_api_data_acquisition_pb = require('../../bosdyn/api/data_acquisition_pb.js');

function serialize_bosdyn_api_AcquireDataRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.AcquireDataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.AcquireDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AcquireDataRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.AcquireDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_AcquireDataResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.AcquireDataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.AcquireDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AcquireDataResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.AcquireDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_CancelAcquisitionRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.CancelAcquisitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_CancelAcquisitionRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_CancelAcquisitionResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.CancelAcquisitionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_CancelAcquisitionResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetServiceInfoRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.GetServiceInfoRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetServiceInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetServiceInfoRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.GetServiceInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetServiceInfoResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.GetServiceInfoResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetServiceInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetServiceInfoResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.GetServiceInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.GetStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetStatusRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.GetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.GetStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetStatusResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.GetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The DataAcquisitionService is the main data acquisition service run on robot, which recieves
// incoming requests and sends queries to all directory-registered DataAcquisitionPluginServices.
var DataAcquisitionServiceService = exports.DataAcquisitionServiceService = {
  // Trigger a data acquisition to save data and metadata to the data buffer.
// Sent by the tablet or a client to initiate a data acquisition and buffering process.
acquireData: {
    path: '/bosdyn.api.DataAcquisitionService/AcquireData',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_pb.AcquireDataRequest,
    responseType: bosdyn_api_data_acquisition_pb.AcquireDataResponse,
    requestSerialize: serialize_bosdyn_api_AcquireDataRequest,
    requestDeserialize: deserialize_bosdyn_api_AcquireDataRequest,
    responseSerialize: serialize_bosdyn_api_AcquireDataResponse,
    responseDeserialize: deserialize_bosdyn_api_AcquireDataResponse,
  },
  // Query the status of a data acquisition.
getStatus: {
    path: '/bosdyn.api.DataAcquisitionService/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_pb.GetStatusRequest,
    responseType: bosdyn_api_data_acquisition_pb.GetStatusResponse,
    requestSerialize: serialize_bosdyn_api_GetStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_GetStatusRequest,
    responseSerialize: serialize_bosdyn_api_GetStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_GetStatusResponse,
  },
  // Get information from a DAQ service; lists acquisition capabilities.
getServiceInfo: {
    path: '/bosdyn.api.DataAcquisitionService/GetServiceInfo',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_pb.GetServiceInfoRequest,
    responseType: bosdyn_api_data_acquisition_pb.GetServiceInfoResponse,
    requestSerialize: serialize_bosdyn_api_GetServiceInfoRequest,
    requestDeserialize: deserialize_bosdyn_api_GetServiceInfoRequest,
    responseSerialize: serialize_bosdyn_api_GetServiceInfoResponse,
    responseDeserialize: deserialize_bosdyn_api_GetServiceInfoResponse,
  },
  // Cancel an in-progress data acquisition.
cancelAcquisition: {
    path: '/bosdyn.api.DataAcquisitionService/CancelAcquisition',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest,
    responseType: bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse,
    requestSerialize: serialize_bosdyn_api_CancelAcquisitionRequest,
    requestDeserialize: deserialize_bosdyn_api_CancelAcquisitionRequest,
    responseSerialize: serialize_bosdyn_api_CancelAcquisitionResponse,
    responseDeserialize: deserialize_bosdyn_api_CancelAcquisitionResponse,
  },
};

exports.DataAcquisitionServiceClient = grpc.makeGenericClientConstructor(DataAcquisitionServiceService);
