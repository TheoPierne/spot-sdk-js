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
var bosdyn_api_data_index_pb = require('../../bosdyn/api/data_index_pb.js');

function serialize_bosdyn_api_DeleteDataPagesRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.DeleteDataPagesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.DeleteDataPagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_DeleteDataPagesRequest(buffer_arg) {
  return bosdyn_api_data_index_pb.DeleteDataPagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_DeleteDataPagesResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.DeleteDataPagesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.DeleteDataPagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_DeleteDataPagesResponse(buffer_arg) {
  return bosdyn_api_data_index_pb.DeleteDataPagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetDataBufferStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.GetDataBufferStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetDataBufferStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetDataBufferStatusRequest(buffer_arg) {
  return bosdyn_api_data_index_pb.GetDataBufferStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetDataBufferStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.GetDataBufferStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetDataBufferStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetDataBufferStatusResponse(buffer_arg) {
  return bosdyn_api_data_index_pb.GetDataBufferStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetDataIndexRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.GetDataIndexRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetDataIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetDataIndexRequest(buffer_arg) {
  return bosdyn_api_data_index_pb.GetDataIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetDataIndexResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.GetDataIndexResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetDataIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetDataIndexResponse(buffer_arg) {
  return bosdyn_api_data_index_pb.GetDataIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetDataPagesRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.GetDataPagesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetDataPagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetDataPagesRequest(buffer_arg) {
  return bosdyn_api_data_index_pb.GetDataPagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetDataPagesResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.GetDataPagesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetDataPagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetDataPagesResponse(buffer_arg) {
  return bosdyn_api_data_index_pb.GetDataPagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetEventsCommentsRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.GetEventsCommentsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetEventsCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetEventsCommentsRequest(buffer_arg) {
  return bosdyn_api_data_index_pb.GetEventsCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetEventsCommentsResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_index_pb.GetEventsCommentsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetEventsCommentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetEventsCommentsResponse(buffer_arg) {
  return bosdyn_api_data_index_pb.GetEventsCommentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The DataService is a mechanism for querying and managing data stored on robot.
var DataServiceService = exports.DataServiceService = {
  // Get index of current data matching a given DataQuery.
getDataIndex: {
    path: '/bosdyn.api.DataService/GetDataIndex',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_index_pb.GetDataIndexRequest,
    responseType: bosdyn_api_data_index_pb.GetDataIndexResponse,
    requestSerialize: serialize_bosdyn_api_GetDataIndexRequest,
    requestDeserialize: deserialize_bosdyn_api_GetDataIndexRequest,
    responseSerialize: serialize_bosdyn_api_GetDataIndexResponse,
    responseDeserialize: deserialize_bosdyn_api_GetDataIndexResponse,
  },
  // Get events and comments.
getEventsComments: {
    path: '/bosdyn.api.DataService/GetEventsComments',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_index_pb.GetEventsCommentsRequest,
    responseType: bosdyn_api_data_index_pb.GetEventsCommentsResponse,
    requestSerialize: serialize_bosdyn_api_GetEventsCommentsRequest,
    requestDeserialize: deserialize_bosdyn_api_GetEventsCommentsRequest,
    responseSerialize: serialize_bosdyn_api_GetEventsCommentsResponse,
    responseDeserialize: deserialize_bosdyn_api_GetEventsCommentsResponse,
  },
  // Get basic stats on data buffer storage.
getDataBufferStatus: {
    path: '/bosdyn.api.DataService/GetDataBufferStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_index_pb.GetDataBufferStatusRequest,
    responseType: bosdyn_api_data_index_pb.GetDataBufferStatusResponse,
    requestSerialize: serialize_bosdyn_api_GetDataBufferStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_GetDataBufferStatusRequest,
    responseSerialize: serialize_bosdyn_api_GetDataBufferStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_GetDataBufferStatusResponse,
  },
  // Get a list pf pages matching a given time range
getDataPages: {
    path: '/bosdyn.api.DataService/GetDataPages',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_index_pb.GetDataPagesRequest,
    responseType: bosdyn_api_data_index_pb.GetDataPagesResponse,
    requestSerialize: serialize_bosdyn_api_GetDataPagesRequest,
    requestDeserialize: deserialize_bosdyn_api_GetDataPagesRequest,
    responseSerialize: serialize_bosdyn_api_GetDataPagesResponse,
    responseDeserialize: deserialize_bosdyn_api_GetDataPagesResponse,
  },
  // Delete a list of pages matching a given time range or page ids
deleteDataPages: {
    path: '/bosdyn.api.DataService/DeleteDataPages',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_index_pb.DeleteDataPagesRequest,
    responseType: bosdyn_api_data_index_pb.DeleteDataPagesResponse,
    requestSerialize: serialize_bosdyn_api_DeleteDataPagesRequest,
    requestDeserialize: deserialize_bosdyn_api_DeleteDataPagesRequest,
    responseSerialize: serialize_bosdyn_api_DeleteDataPagesResponse,
    responseDeserialize: deserialize_bosdyn_api_DeleteDataPagesResponse,
  },
};

exports.DataServiceClient = grpc.makeGenericClientConstructor(DataServiceService);
