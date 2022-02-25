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

function serialize_bosdyn_api_AcquirePluginDataRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.AcquirePluginDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AcquirePluginDataRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_AcquirePluginDataResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.AcquirePluginDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AcquirePluginDataResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// The DataAcquisitionPluginService is a gRPC service that a payload developer implements to retrieve
// data from a sensor (or more generally perform some payload action) and optionally store that data
// on the robot via the DataAcquisitionStore service.
var DataAcquisitionPluginServiceService = exports.DataAcquisitionPluginServiceService = {
  // Trigger a data acquisition to save metadata and non-image data to the data buffer.
// Sent by the main DAQ as a result of a data acquisition request from the tablet or a client.
acquirePluginData: {
    path: '/bosdyn.api.DataAcquisitionPluginService/AcquirePluginData',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest,
    responseType: bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse,
    requestSerialize: serialize_bosdyn_api_AcquirePluginDataRequest,
    requestDeserialize: deserialize_bosdyn_api_AcquirePluginDataRequest,
    responseSerialize: serialize_bosdyn_api_AcquirePluginDataResponse,
    responseDeserialize: deserialize_bosdyn_api_AcquirePluginDataResponse,
  },
  // Query the status of a data acquisition.
getStatus: {
    path: '/bosdyn.api.DataAcquisitionPluginService/GetStatus',
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
    path: '/bosdyn.api.DataAcquisitionPluginService/GetServiceInfo',
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
    path: '/bosdyn.api.DataAcquisitionPluginService/CancelAcquisition',
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

exports.DataAcquisitionPluginServiceClient = grpc.makeGenericClientConstructor(DataAcquisitionPluginServiceService);
