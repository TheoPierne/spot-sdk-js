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
var bosdyn_api_graph_nav_map_processing_pb = require('../../../bosdyn/api/graph_nav/map_processing_pb.js');

function serialize_bosdyn_api_graph_nav_ProcessAnchoringRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.ProcessAnchoringRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_ProcessAnchoringRequest(buffer_arg) {
  return bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_ProcessAnchoringResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.ProcessAnchoringResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_ProcessAnchoringResponse(buffer_arg) {
  return bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_ProcessTopologyRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.ProcessTopologyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_ProcessTopologyRequest(buffer_arg) {
  return bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_ProcessTopologyResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.ProcessTopologyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_ProcessTopologyResponse(buffer_arg) {
  return bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Defines services for processing an existing GraphNav map.
var MapProcessingServiceService = exports.MapProcessingServiceService = {
  // Processes a GraphNav map by creating additional edges or waypoints. After processing,
// a new subgraph is created containing additional waypoints or edges to add to the map.
processTopology: {
    path: '/bosdyn.api.graph_nav.MapProcessingService/ProcessTopology',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest,
    responseType: bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_ProcessTopologyRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_ProcessTopologyRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_ProcessTopologyResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_ProcessTopologyResponse,
  },
  // Processes a GraphNav map by modifying the anchoring of waypoints and world objects in the map
// with respect to a seed frame. After processing, a new anchoring is streamed back.
processAnchoring: {
    path: '/bosdyn.api.graph_nav.MapProcessingService/ProcessAnchoring',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest,
    responseType: bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_ProcessAnchoringRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_ProcessAnchoringRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_ProcessAnchoringResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_ProcessAnchoringResponse,
  },
};

exports.MapProcessingServiceClient = grpc.makeGenericClientConstructor(MapProcessingServiceService);
