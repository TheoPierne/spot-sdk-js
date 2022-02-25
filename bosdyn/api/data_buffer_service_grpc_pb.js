// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).
//
// DataBufferService allows adding information to the robot's log files.
'use strict';
var grpc = require('@grpc/grpc-js');
var bosdyn_api_data_buffer_pb = require('../../bosdyn/api/data_buffer_pb.js');

function serialize_bosdyn_api_RecordDataBlobsRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordDataBlobsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RecordDataBlobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordDataBlobsRequest(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordDataBlobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordDataBlobsResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordDataBlobsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RecordDataBlobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordDataBlobsResponse(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordDataBlobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordEventsRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordEventsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RecordEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordEventsRequest(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordEventsResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordEventsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RecordEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordEventsResponse(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordOperatorCommentsRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RecordOperatorCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordOperatorCommentsRequest(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordOperatorCommentsResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RecordOperatorCommentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordOperatorCommentsResponse(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordSignalTicksRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordSignalTicksRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RecordSignalTicksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordSignalTicksRequest(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordSignalTicksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordSignalTicksResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordSignalTicksResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RecordSignalTicksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordSignalTicksResponse(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordSignalTicksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordTextMessagesRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordTextMessagesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RecordTextMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordTextMessagesRequest(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordTextMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RecordTextMessagesResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RecordTextMessagesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RecordTextMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RecordTextMessagesResponse(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RecordTextMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RegisterSignalSchemaRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RegisterSignalSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RegisterSignalSchemaRequest(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RegisterSignalSchemaResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RegisterSignalSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RegisterSignalSchemaResponse(buffer_arg) {
  return bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// This service is a mechanism for adding information to the robot's log files.
var DataBufferServiceService = exports.DataBufferServiceService = {
  // Add text messages to the log.
recordTextMessages: {
    path: '/bosdyn.api.DataBufferService/RecordTextMessages',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_buffer_pb.RecordTextMessagesRequest,
    responseType: bosdyn_api_data_buffer_pb.RecordTextMessagesResponse,
    requestSerialize: serialize_bosdyn_api_RecordTextMessagesRequest,
    requestDeserialize: deserialize_bosdyn_api_RecordTextMessagesRequest,
    responseSerialize: serialize_bosdyn_api_RecordTextMessagesResponse,
    responseDeserialize: deserialize_bosdyn_api_RecordTextMessagesResponse,
  },
  // Add a set of operator messages to the log.
recordOperatorComments: {
    path: '/bosdyn.api.DataBufferService/RecordOperatorComments',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest,
    responseType: bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse,
    requestSerialize: serialize_bosdyn_api_RecordOperatorCommentsRequest,
    requestDeserialize: deserialize_bosdyn_api_RecordOperatorCommentsRequest,
    responseSerialize: serialize_bosdyn_api_RecordOperatorCommentsResponse,
    responseDeserialize: deserialize_bosdyn_api_RecordOperatorCommentsResponse,
  },
  // Add message-style data to the log.
recordDataBlobs: {
    path: '/bosdyn.api.DataBufferService/RecordDataBlobs',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_buffer_pb.RecordDataBlobsRequest,
    responseType: bosdyn_api_data_buffer_pb.RecordDataBlobsResponse,
    requestSerialize: serialize_bosdyn_api_RecordDataBlobsRequest,
    requestDeserialize: deserialize_bosdyn_api_RecordDataBlobsRequest,
    responseSerialize: serialize_bosdyn_api_RecordDataBlobsResponse,
    responseDeserialize: deserialize_bosdyn_api_RecordDataBlobsResponse,
  },
  // Add event data to the log.
recordEvents: {
    path: '/bosdyn.api.DataBufferService/RecordEvents',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_buffer_pb.RecordEventsRequest,
    responseType: bosdyn_api_data_buffer_pb.RecordEventsResponse,
    requestSerialize: serialize_bosdyn_api_RecordEventsRequest,
    requestDeserialize: deserialize_bosdyn_api_RecordEventsRequest,
    responseSerialize: serialize_bosdyn_api_RecordEventsResponse,
    responseDeserialize: deserialize_bosdyn_api_RecordEventsResponse,
  },
  // Register a log tick schema, allowing client to later log tick data.
registerSignalSchema: {
    path: '/bosdyn.api.DataBufferService/RegisterSignalSchema',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest,
    responseType: bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse,
    requestSerialize: serialize_bosdyn_api_RegisterSignalSchemaRequest,
    requestDeserialize: deserialize_bosdyn_api_RegisterSignalSchemaRequest,
    responseSerialize: serialize_bosdyn_api_RegisterSignalSchemaResponse,
    responseDeserialize: deserialize_bosdyn_api_RegisterSignalSchemaResponse,
  },
  // Add signal data for registered signal schema to the log.
recordSignalTicks: {
    path: '/bosdyn.api.DataBufferService/RecordSignalTicks',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_buffer_pb.RecordSignalTicksRequest,
    responseType: bosdyn_api_data_buffer_pb.RecordSignalTicksResponse,
    requestSerialize: serialize_bosdyn_api_RecordSignalTicksRequest,
    requestDeserialize: deserialize_bosdyn_api_RecordSignalTicksRequest,
    responseSerialize: serialize_bosdyn_api_RecordSignalTicksResponse,
    responseDeserialize: deserialize_bosdyn_api_RecordSignalTicksResponse,
  },
};

exports.DataBufferServiceClient = grpc.makeGenericClientConstructor(DataBufferServiceService);
