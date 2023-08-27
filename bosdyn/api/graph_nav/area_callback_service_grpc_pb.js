// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2023 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).
//
'use strict';
var grpc = require('@grpc/grpc-js');
var bosdyn_api_graph_nav_area_callback_pb = require('../../../bosdyn/api/graph_nav/area_callback_pb.js');

function serialize_bosdyn_api_graph_nav_AreaCallbackInformationRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.AreaCallbackInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_AreaCallbackInformationRequest(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_AreaCallbackInformationResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.AreaCallbackInformationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_AreaCallbackInformationResponse(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_BeginCallbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.BeginCallbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_BeginCallbackRequest(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_BeginCallbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.BeginCallbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_BeginCallbackResponse(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_BeginControlRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.BeginControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_BeginControlRequest(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_BeginControlResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.BeginControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_BeginControlResponse(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_EndCallbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.EndCallbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_EndCallbackRequest(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_EndCallbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.EndCallbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_EndCallbackResponse(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_UpdateCallbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.UpdateCallbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_UpdateCallbackRequest(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_graph_nav_UpdateCallbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.graph_nav.UpdateCallbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_graph_nav_UpdateCallbackResponse(buffer_arg) {
  return bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AreaCallbackServiceService = exports.AreaCallbackServiceService = {
  // Retreive information about how to operate the service, including what lease resources are
// required by the navigation callback.
areaCallbackInformation: {
    path: '/bosdyn.api.graph_nav.AreaCallbackService/AreaCallbackInformation',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest,
    responseType: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_AreaCallbackInformationRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_AreaCallbackInformationRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_AreaCallbackInformationResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_AreaCallbackInformationResponse,
  },
  // BeginCallback is called once as the robot enters a AreaCallback region of a map. This call
// initilizes the navigation callback for operation.
beginCallback: {
    path: '/bosdyn.api.graph_nav.AreaCallbackService/BeginCallback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest,
    responseType: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_BeginCallbackRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_BeginCallbackRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_BeginCallbackResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_BeginCallbackResponse,
  },
  // BeginControl is called once after the area callback implementation requests control. Control is
// handed off (via a lease) from the caller to the area callback.
beginControl: {
    path: '/bosdyn.api.graph_nav.AreaCallbackService/BeginControl',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest,
    responseType: bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_BeginControlRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_BeginControlRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_BeginControlResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_BeginControlResponse,
  },
  // UpdateCallback is called periodically while the callback is running. Area callback implementations
// use UpdateCallback to dictate how caller should operate while callback is running (pause,
// continue, etc.)
updateCallback: {
    path: '/bosdyn.api.graph_nav.AreaCallbackService/UpdateCallback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest,
    responseType: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_UpdateCallbackRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_UpdateCallbackRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_UpdateCallbackResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_UpdateCallbackResponse,
  },
  // EndCallback is called once when the caller decides the navagation callback is over. This might
// be because the robot exited the callback region or might be because the callback reported that it
// finished doing work.
endCallback: {
    path: '/bosdyn.api.graph_nav.AreaCallbackService/EndCallback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest,
    responseType: bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse,
    requestSerialize: serialize_bosdyn_api_graph_nav_EndCallbackRequest,
    requestDeserialize: deserialize_bosdyn_api_graph_nav_EndCallbackRequest,
    responseSerialize: serialize_bosdyn_api_graph_nav_EndCallbackResponse,
    responseDeserialize: deserialize_bosdyn_api_graph_nav_EndCallbackResponse,
  },
};

exports.AreaCallbackServiceClient = grpc.makeGenericClientConstructor(AreaCallbackServiceService);
