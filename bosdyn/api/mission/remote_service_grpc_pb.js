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
var bosdyn_api_mission_remote_pb = require('../../../bosdyn/api/mission/remote_pb.js');

function serialize_bosdyn_api_mission_EstablishSessionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_remote_pb.EstablishSessionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.EstablishSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_EstablishSessionRequest(buffer_arg) {
  return bosdyn_api_mission_remote_pb.EstablishSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_EstablishSessionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_remote_pb.EstablishSessionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.EstablishSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_EstablishSessionResponse(buffer_arg) {
  return bosdyn_api_mission_remote_pb.EstablishSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_StopRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_remote_pb.StopRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.StopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_StopRequest(buffer_arg) {
  return bosdyn_api_mission_remote_pb.StopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_StopResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_remote_pb.StopResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.StopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_StopResponse(buffer_arg) {
  return bosdyn_api_mission_remote_pb.StopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_TeardownSessionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_remote_pb.TeardownSessionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.TeardownSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_TeardownSessionRequest(buffer_arg) {
  return bosdyn_api_mission_remote_pb.TeardownSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_TeardownSessionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_remote_pb.TeardownSessionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.TeardownSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_TeardownSessionResponse(buffer_arg) {
  return bosdyn_api_mission_remote_pb.TeardownSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_TickRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_remote_pb.TickRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.TickRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_TickRequest(buffer_arg) {
  return bosdyn_api_mission_remote_pb.TickRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_TickResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_remote_pb.TickResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.TickResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_TickResponse(buffer_arg) {
  return bosdyn_api_mission_remote_pb.TickResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Interface for mission callbacks.  Mission RemoteGrpc nodes will act as clients
// to this service type, calling out to this service when loaded, ticked, or unloaded.
var RemoteMissionServiceService = exports.RemoteMissionServiceService = {
  // Call this once at mission load time, once for each node that references this remote service.
establishSession: {
    path: '/bosdyn.api.mission.RemoteMissionService/EstablishSession',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_remote_pb.EstablishSessionRequest,
    responseType: bosdyn_api_mission_remote_pb.EstablishSessionResponse,
    requestSerialize: serialize_bosdyn_api_mission_EstablishSessionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_EstablishSessionRequest,
    responseSerialize: serialize_bosdyn_api_mission_EstablishSessionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_EstablishSessionResponse,
  },
  // Call this every time the RemoteGrpc node is ticked.
tick: {
    path: '/bosdyn.api.mission.RemoteMissionService/Tick',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_remote_pb.TickRequest,
    responseType: bosdyn_api_mission_remote_pb.TickResponse,
    requestSerialize: serialize_bosdyn_api_mission_TickRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_TickRequest,
    responseSerialize: serialize_bosdyn_api_mission_TickResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_TickResponse,
  },
  // Call this every time the RemoteGrpc node WAS ticked in the previous cycle, but was NOT ticked
// in this cycle. Signals that the next tick will be a restart, rather than a continuation.
stop: {
    path: '/bosdyn.api.mission.RemoteMissionService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_remote_pb.StopRequest,
    responseType: bosdyn_api_mission_remote_pb.StopResponse,
    requestSerialize: serialize_bosdyn_api_mission_StopRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_StopRequest,
    responseSerialize: serialize_bosdyn_api_mission_StopResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_StopResponse,
  },
  // Tells the service it can forget any data associated with the given session ID.
// Should be called once for every EstablishSession call.
teardownSession: {
    path: '/bosdyn.api.mission.RemoteMissionService/TeardownSession',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_remote_pb.TeardownSessionRequest,
    responseType: bosdyn_api_mission_remote_pb.TeardownSessionResponse,
    requestSerialize: serialize_bosdyn_api_mission_TeardownSessionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_TeardownSessionRequest,
    responseSerialize: serialize_bosdyn_api_mission_TeardownSessionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_TeardownSessionResponse,
  },
};

exports.RemoteMissionServiceClient = grpc.makeGenericClientConstructor(RemoteMissionServiceService);
