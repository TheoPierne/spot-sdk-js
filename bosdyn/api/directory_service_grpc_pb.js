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
var bosdyn_api_directory_pb = require('../../bosdyn/api/directory_pb.js');

function serialize_bosdyn_api_GetServiceEntryRequest(arg) {
  if (!(arg instanceof bosdyn_api_directory_pb.GetServiceEntryRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetServiceEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetServiceEntryRequest(buffer_arg) {
  return bosdyn_api_directory_pb.GetServiceEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetServiceEntryResponse(arg) {
  if (!(arg instanceof bosdyn_api_directory_pb.GetServiceEntryResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetServiceEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetServiceEntryResponse(buffer_arg) {
  return bosdyn_api_directory_pb.GetServiceEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListServiceEntriesRequest(arg) {
  if (!(arg instanceof bosdyn_api_directory_pb.ListServiceEntriesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListServiceEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListServiceEntriesRequest(buffer_arg) {
  return bosdyn_api_directory_pb.ListServiceEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListServiceEntriesResponse(arg) {
  if (!(arg instanceof bosdyn_api_directory_pb.ListServiceEntriesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListServiceEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListServiceEntriesResponse(buffer_arg) {
  return bosdyn_api_directory_pb.ListServiceEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// DirectoryService lets clients discover which API services are available on a robot.
var DirectoryServiceService = exports.DirectoryServiceService = {
  // Get information about a specific service.
getServiceEntry: {
    path: '/bosdyn.api.DirectoryService/GetServiceEntry',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_directory_pb.GetServiceEntryRequest,
    responseType: bosdyn_api_directory_pb.GetServiceEntryResponse,
    requestSerialize: serialize_bosdyn_api_GetServiceEntryRequest,
    requestDeserialize: deserialize_bosdyn_api_GetServiceEntryRequest,
    responseSerialize: serialize_bosdyn_api_GetServiceEntryResponse,
    responseDeserialize: deserialize_bosdyn_api_GetServiceEntryResponse,
  },
  // List all known services at time of call.
listServiceEntries: {
    path: '/bosdyn.api.DirectoryService/ListServiceEntries',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_directory_pb.ListServiceEntriesRequest,
    responseType: bosdyn_api_directory_pb.ListServiceEntriesResponse,
    requestSerialize: serialize_bosdyn_api_ListServiceEntriesRequest,
    requestDeserialize: deserialize_bosdyn_api_ListServiceEntriesRequest,
    responseSerialize: serialize_bosdyn_api_ListServiceEntriesResponse,
    responseDeserialize: deserialize_bosdyn_api_ListServiceEntriesResponse,
  },
};

exports.DirectoryServiceClient = grpc.makeGenericClientConstructor(DirectoryServiceService);
