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
var bosdyn_api_graph_nav_recording_pb = require('../../../bosdyn/api/graph_nav/recording_pb.js');

function serialize_bosdyn_api_graph_nav_CreateEdgeRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.CreateEdgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_CreateEdgeRequest(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_CreateEdgeResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.CreateEdgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_CreateEdgeResponse(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_CreateWaypointRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.CreateWaypointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_CreateWaypointRequest(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_CreateWaypointResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.CreateWaypointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_CreateWaypointResponse(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_GetRecordStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.GetRecordStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_GetRecordStatusRequest(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_GetRecordStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.GetRecordStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_GetRecordStatusResponse(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_SetRecordingEnvironmentRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.SetRecordingEnvironmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_SetRecordingEnvironmentRequest(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_SetRecordingEnvironmentResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.SetRecordingEnvironmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_SetRecordingEnvironmentResponse(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_StartRecordingRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.StartRecordingRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.StartRecordingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_StartRecordingRequest(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.StartRecordingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_StartRecordingResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.StartRecordingResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.StartRecordingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_StartRecordingResponse(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.StartRecordingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_StopRecordingRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.StopRecordingRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.StopRecordingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_StopRecordingRequest(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.StopRecordingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_StopRecordingResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_recording_pb.StopRecordingResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.StopRecordingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_StopRecordingResponse(buffer_arg) {
  return bosdyn_api_graph_nav_recording_pb.StopRecordingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The recording service can be used to record a Graph Nav map (containing waypoints and edges).
// The recorded map can consist of the following:
// * Chain: a topological arrangement of waypoints/edges where every waypoint has at least 1
// but at most 2 edges attached to it.
// * Branch: separate Chains can be joined together into a Branch at exactly one waypoint.
// When recording a map using the recording service, a common pattern is:
// * Call StartRecording to begin recording a chain of waypoints.
// * Call SetRecordingEnvironment to define persistent annotations for the edges and waypoints.
// * While recording, call GetRecordStatus to get feedback on the state of the recording service.
// * While recording, call GetMapStatus to determine what waypoints have been created.
// * Optionally call CreateWaypoint to create waypoints in specific locations.
// * Call StopRecording to pause the recording service and create branches.
// * While recording (or after completing recording), call DownloadWaypoint/Edge Snapshot rpc's
// from the GraphNavService to download the large sensor data with the map.
var GraphNavRecordingServiceService = exports.GraphNavRecordingServiceService = {
  // Start recording the map from the current localization.
// Creates a waypoint if you are starting to record. Otherwise, waits until you are
// sufficiently far away from the previous waypoint.
startRecording: {
    path: '/bosdyn.api.graph_nav.GraphNavRecordingService/StartRecording',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_recording_pb.StartRecordingRequest,
    responseType: bosdyn_api_graph_nav_recording_pb.StartRecordingResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_StartRecordingRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_StartRecordingRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_StartRecordingResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_StartRecordingResponse,
  },
  // Stop recording the map from the current localization.
stopRecording: {
    path: '/bosdyn.api.graph_nav.GraphNavRecordingService/StopRecording',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_recording_pb.StopRecordingRequest,
    responseType: bosdyn_api_graph_nav_recording_pb.StopRecordingResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_StopRecordingRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_StopRecordingRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_StopRecordingResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_StopRecordingResponse,
  },
  // Create a new waypoint at the current localization.
createWaypoint: {
    path: '/bosdyn.api.graph_nav.GraphNavRecordingService/CreateWaypoint',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest,
    responseType: bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_CreateWaypointRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_CreateWaypointRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_CreateWaypointResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_CreateWaypointResponse,
  },
  // Set the environmnent and name prefix to use for the recording.
setRecordingEnvironment: {
    path: '/bosdyn.api.graph_nav.GraphNavRecordingService/SetRecordingEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest,
    responseType: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_SetRecordingEnvironmentRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_SetRecordingEnvironmentRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_SetRecordingEnvironmentResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_SetRecordingEnvironmentResponse,
  },
  // Create an arbitrary edge between two waypoints.
createEdge: {
    path: '/bosdyn.api.graph_nav.GraphNavRecordingService/CreateEdge',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest,
    responseType: bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_CreateEdgeRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_CreateEdgeRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_CreateEdgeResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_CreateEdgeResponse,
  },
  // Tells the client the internal state of the record service, and the structure of the map that has been recorded
// so far.
getRecordStatus: {
    path: '/bosdyn.api.graph_nav.GraphNavRecordingService/GetRecordStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest,
    responseType: bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_GetRecordStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_GetRecordStatusRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_GetRecordStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_GetRecordStatusResponse,
  },
};

exports.GraphNavRecordingServiceClient = grpc.makeGenericClientConstructor(GraphNavRecordingServiceService);
