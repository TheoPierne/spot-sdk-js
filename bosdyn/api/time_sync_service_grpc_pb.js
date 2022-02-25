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
var bosdyn_api_time_sync_pb = require('../../bosdyn/api/time_sync_pb.js');

function serialize_bosdyn_api_TimeSyncUpdateRequest(arg) {
  if (!(arg instanceof bosdyn_api_time_sync_pb.TimeSyncUpdateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.TimeSyncUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TimeSyncUpdateRequest(buffer_arg) {
  return bosdyn_api_time_sync_pb.TimeSyncUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_TimeSyncUpdateResponse(arg) {
  if (!(arg instanceof bosdyn_api_time_sync_pb.TimeSyncUpdateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.TimeSyncUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_TimeSyncUpdateResponse(buffer_arg) {
  return bosdyn_api_time_sync_pb.TimeSyncUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The time-sync service estimates the difference between server and client clocks.
// Time synchronization is a tool which allows applications to work in a unified timebase with
// precision. It is useful in cases where a precise time must be set, independently of network
// communication lag. In distributed systems and robotics, hardware, system-level, and per-process
// approaches can be used to obtain synchronization.
// This service implements a stand alone time synchronization service. It enables clients to
// establish a per-process offset between two processes which may be on separate systems.
var TimeSyncServiceService = exports.TimeSyncServiceService = {
  // See the exchange documentation in time_sync.proto. This call makes one client/server
// round trip toward clock synchronization.
timeSyncUpdate: {
    path: '/bosdyn.api.TimeSyncService/TimeSyncUpdate',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_time_sync_pb.TimeSyncUpdateRequest,
    responseType: bosdyn_api_time_sync_pb.TimeSyncUpdateResponse,
    requestSerialize: serialize_bosdyn_api_TimeSyncUpdateRequest,
    requestDeserialize: deserialize_bosdyn_api_TimeSyncUpdateRequest,
    responseSerialize: serialize_bosdyn_api_TimeSyncUpdateResponse,
    responseDeserialize: deserialize_bosdyn_api_TimeSyncUpdateResponse,
  },
};

exports.TimeSyncServiceClient = grpc.makeGenericClientConstructor(TimeSyncServiceService);
