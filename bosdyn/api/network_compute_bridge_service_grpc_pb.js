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
var bosdyn_api_network_compute_bridge_pb = require('../../bosdyn/api/network_compute_bridge_pb.js');

function serialize_bosdyn_api_ListAvailableModelsRequest(arg) {
  if (!(arg instanceof bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListAvailableModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListAvailableModelsRequest(buffer_arg) {
  return bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListAvailableModelsResponse(arg) {
  if (!(arg instanceof bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListAvailableModelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListAvailableModelsResponse(buffer_arg) {
  return bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_NetworkComputeRequest(arg) {
  if (!(arg instanceof bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest)) {
    throw new Error('Expected argument of type bosdyn.api.NetworkComputeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_NetworkComputeRequest(buffer_arg) {
  return bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_NetworkComputeResponse(arg) {
  if (!(arg instanceof bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse)) {
    throw new Error('Expected argument of type bosdyn.api.NetworkComputeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_NetworkComputeResponse(buffer_arg) {
  return bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// RPCs for sending images or other data to networked server for computation.
var NetworkComputeBridgeService = exports.NetworkComputeBridgeService = {
  networkCompute: {
    path: '/bosdyn.api.NetworkComputeBridge/NetworkCompute',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest,
    responseType: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse,
    requestSerialize: serialize_bosdyn_api_NetworkComputeRequest,
    requestDeserialize: deserialize_bosdyn_api_NetworkComputeRequest,
    responseSerialize: serialize_bosdyn_api_NetworkComputeResponse,
    responseDeserialize: deserialize_bosdyn_api_NetworkComputeResponse,
  },
  listAvailableModels: {
    path: '/bosdyn.api.NetworkComputeBridge/ListAvailableModels',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest,
    responseType: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse,
    requestSerialize: serialize_bosdyn_api_ListAvailableModelsRequest,
    requestDeserialize: deserialize_bosdyn_api_ListAvailableModelsRequest,
    responseSerialize: serialize_bosdyn_api_ListAvailableModelsResponse,
    responseDeserialize: deserialize_bosdyn_api_ListAvailableModelsResponse,
  },
};

exports.NetworkComputeBridgeClient = grpc.makeGenericClientConstructor(NetworkComputeBridgeService);
// Set of RPCs for workers of the network compute bridge.  This is seperate from the RPCs for the
// on-robot network compute bridge so that if they need to diverge in the future it is possible
// to do so.
var NetworkComputeBridgeWorkerService = exports.NetworkComputeBridgeWorkerService = {
  networkCompute: {
    path: '/bosdyn.api.NetworkComputeBridgeWorker/NetworkCompute',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest,
    responseType: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse,
    requestSerialize: serialize_bosdyn_api_NetworkComputeRequest,
    requestDeserialize: deserialize_bosdyn_api_NetworkComputeRequest,
    responseSerialize: serialize_bosdyn_api_NetworkComputeResponse,
    responseDeserialize: deserialize_bosdyn_api_NetworkComputeResponse,
  },
  listAvailableModels: {
    path: '/bosdyn.api.NetworkComputeBridgeWorker/ListAvailableModels',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest,
    responseType: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse,
    requestSerialize: serialize_bosdyn_api_ListAvailableModelsRequest,
    requestDeserialize: deserialize_bosdyn_api_ListAvailableModelsRequest,
    responseSerialize: serialize_bosdyn_api_ListAvailableModelsResponse,
    responseDeserialize: deserialize_bosdyn_api_ListAvailableModelsResponse,
  },
};

exports.NetworkComputeBridgeWorkerClient = grpc.makeGenericClientConstructor(NetworkComputeBridgeWorkerService);
