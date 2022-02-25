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
var bosdyn_api_estop_pb = require('../../bosdyn/api/estop_pb.js');

function serialize_bosdyn_api_DeregisterEstopEndpointRequest(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.DeregisterEstopEndpointRequest)) {
    throw new Error('Expected argument of type bosdyn.api.DeregisterEstopEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_DeregisterEstopEndpointRequest(buffer_arg) {
  return bosdyn_api_estop_pb.DeregisterEstopEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_DeregisterEstopEndpointResponse(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.DeregisterEstopEndpointResponse)) {
    throw new Error('Expected argument of type bosdyn.api.DeregisterEstopEndpointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_DeregisterEstopEndpointResponse(buffer_arg) {
  return bosdyn_api_estop_pb.DeregisterEstopEndpointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_EstopCheckInRequest(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.EstopCheckInRequest)) {
    throw new Error('Expected argument of type bosdyn.api.EstopCheckInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_EstopCheckInRequest(buffer_arg) {
  return bosdyn_api_estop_pb.EstopCheckInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_EstopCheckInResponse(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.EstopCheckInResponse)) {
    throw new Error('Expected argument of type bosdyn.api.EstopCheckInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_EstopCheckInResponse(buffer_arg) {
  return bosdyn_api_estop_pb.EstopCheckInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetEstopConfigRequest(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.GetEstopConfigRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetEstopConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetEstopConfigRequest(buffer_arg) {
  return bosdyn_api_estop_pb.GetEstopConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetEstopConfigResponse(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.GetEstopConfigResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetEstopConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetEstopConfigResponse(buffer_arg) {
  return bosdyn_api_estop_pb.GetEstopConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetEstopSystemStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.GetEstopSystemStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetEstopSystemStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetEstopSystemStatusRequest(buffer_arg) {
  return bosdyn_api_estop_pb.GetEstopSystemStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetEstopSystemStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.GetEstopSystemStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetEstopSystemStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetEstopSystemStatusResponse(buffer_arg) {
  return bosdyn_api_estop_pb.GetEstopSystemStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RegisterEstopEndpointRequest(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.RegisterEstopEndpointRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RegisterEstopEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RegisterEstopEndpointRequest(buffer_arg) {
  return bosdyn_api_estop_pb.RegisterEstopEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RegisterEstopEndpointResponse(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.RegisterEstopEndpointResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RegisterEstopEndpointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RegisterEstopEndpointResponse(buffer_arg) {
  return bosdyn_api_estop_pb.RegisterEstopEndpointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SetEstopConfigRequest(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.SetEstopConfigRequest)) {
    throw new Error('Expected argument of type bosdyn.api.SetEstopConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SetEstopConfigRequest(buffer_arg) {
  return bosdyn_api_estop_pb.SetEstopConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SetEstopConfigResponse(arg) {
  if (!(arg instanceof bosdyn_api_estop_pb.SetEstopConfigResponse)) {
    throw new Error('Expected argument of type bosdyn.api.SetEstopConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SetEstopConfigResponse(buffer_arg) {
  return bosdyn_api_estop_pb.SetEstopConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The software robot E-Stop system:
//  1. Uses challenge-style communication to enforce end user (aka "originators") connection
//     for Authority to Operate (ATO).
//  2. Offers the ability to issue a direct denial of  ATO.
// The EstopService provides a service interface for the robot EStop/Authority to operate the system.
var EstopServiceService = exports.EstopServiceService = {
  // Register an Estop "originator" or "endpoint".
// This may be a replacement for another active endpoint.
registerEstopEndpoint: {
    path: '/bosdyn.api.EstopService/RegisterEstopEndpoint',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_estop_pb.RegisterEstopEndpointRequest,
    responseType: bosdyn_api_estop_pb.RegisterEstopEndpointResponse,
    requestSerialize: serialize_bosdyn_api_RegisterEstopEndpointRequest,
    requestDeserialize: deserialize_bosdyn_api_RegisterEstopEndpointRequest,
    responseSerialize: serialize_bosdyn_api_RegisterEstopEndpointResponse,
    responseDeserialize: deserialize_bosdyn_api_RegisterEstopEndpointResponse,
  },
  // Deregister the requested estop endpoint.
deregisterEstopEndpoint: {
    path: '/bosdyn.api.EstopService/DeregisterEstopEndpoint',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_estop_pb.DeregisterEstopEndpointRequest,
    responseType: bosdyn_api_estop_pb.DeregisterEstopEndpointResponse,
    requestSerialize: serialize_bosdyn_api_DeregisterEstopEndpointRequest,
    requestDeserialize: deserialize_bosdyn_api_DeregisterEstopEndpointRequest,
    responseSerialize: serialize_bosdyn_api_DeregisterEstopEndpointResponse,
    responseDeserialize: deserialize_bosdyn_api_DeregisterEstopEndpointResponse,
  },
  // Answer challenge from previous response (unless this is the first call), and request
// a stop level.
estopCheckIn: {
    path: '/bosdyn.api.EstopService/EstopCheckIn',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_estop_pb.EstopCheckInRequest,
    responseType: bosdyn_api_estop_pb.EstopCheckInResponse,
    requestSerialize: serialize_bosdyn_api_EstopCheckInRequest,
    requestDeserialize: deserialize_bosdyn_api_EstopCheckInRequest,
    responseSerialize: serialize_bosdyn_api_EstopCheckInResponse,
    responseDeserialize: deserialize_bosdyn_api_EstopCheckInResponse,
  },
  // Request the current EstopConfig, describing the expected set of endpoints.
getEstopConfig: {
    path: '/bosdyn.api.EstopService/GetEstopConfig',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_estop_pb.GetEstopConfigRequest,
    responseType: bosdyn_api_estop_pb.GetEstopConfigResponse,
    requestSerialize: serialize_bosdyn_api_GetEstopConfigRequest,
    requestDeserialize: deserialize_bosdyn_api_GetEstopConfigRequest,
    responseSerialize: serialize_bosdyn_api_GetEstopConfigResponse,
    responseDeserialize: deserialize_bosdyn_api_GetEstopConfigResponse,
  },
  // Set a new active EstopConfig.
setEstopConfig: {
    path: '/bosdyn.api.EstopService/SetEstopConfig',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_estop_pb.SetEstopConfigRequest,
    responseType: bosdyn_api_estop_pb.SetEstopConfigResponse,
    requestSerialize: serialize_bosdyn_api_SetEstopConfigRequest,
    requestDeserialize: deserialize_bosdyn_api_SetEstopConfigRequest,
    responseSerialize: serialize_bosdyn_api_SetEstopConfigResponse,
    responseDeserialize: deserialize_bosdyn_api_SetEstopConfigResponse,
  },
  // Ask for the current status of the estop system.
getEstopSystemStatus: {
    path: '/bosdyn.api.EstopService/GetEstopSystemStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_estop_pb.GetEstopSystemStatusRequest,
    responseType: bosdyn_api_estop_pb.GetEstopSystemStatusResponse,
    requestSerialize: serialize_bosdyn_api_GetEstopSystemStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_GetEstopSystemStatusRequest,
    responseSerialize: serialize_bosdyn_api_GetEstopSystemStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_GetEstopSystemStatusResponse,
  },
};

exports.EstopServiceClient = grpc.makeGenericClientConstructor(EstopServiceService);
