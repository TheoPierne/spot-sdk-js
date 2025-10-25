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
var bosdyn_api_audio_visual_pb = require('../../bosdyn/api/audio_visual_pb.js');

function serialize_bosdyn_api_AddOrModifyBehaviorRequest(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest)) {
    throw new Error('Expected argument of type bosdyn.api.AddOrModifyBehaviorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AddOrModifyBehaviorRequest(buffer_arg) {
  return bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_AddOrModifyBehaviorResponse(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse)) {
    throw new Error('Expected argument of type bosdyn.api.AddOrModifyBehaviorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_AddOrModifyBehaviorResponse(buffer_arg) {
  return bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_DeleteBehaviorsRequest(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.DeleteBehaviorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_DeleteBehaviorsRequest(buffer_arg) {
  return bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_DeleteBehaviorsResponse(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.DeleteBehaviorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_DeleteBehaviorsResponse(buffer_arg) {
  return bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetSystemParamsRequest(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.GetSystemParamsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetSystemParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetSystemParamsRequest(buffer_arg) {
  return bosdyn_api_audio_visual_pb.GetSystemParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetSystemParamsResponse(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.GetSystemParamsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetSystemParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetSystemParamsResponse(buffer_arg) {
  return bosdyn_api_audio_visual_pb.GetSystemParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListBehaviorsRequest(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.ListBehaviorsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListBehaviorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListBehaviorsRequest(buffer_arg) {
  return bosdyn_api_audio_visual_pb.ListBehaviorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListBehaviorsResponse(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.ListBehaviorsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListBehaviorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListBehaviorsResponse(buffer_arg) {
  return bosdyn_api_audio_visual_pb.ListBehaviorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RunBehaviorRequest(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.RunBehaviorRequest)) {
    throw new Error('Expected argument of type bosdyn.api.RunBehaviorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RunBehaviorRequest(buffer_arg) {
  return bosdyn_api_audio_visual_pb.RunBehaviorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_RunBehaviorResponse(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.RunBehaviorResponse)) {
    throw new Error('Expected argument of type bosdyn.api.RunBehaviorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_RunBehaviorResponse(buffer_arg) {
  return bosdyn_api_audio_visual_pb.RunBehaviorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SetSystemParamsRequest(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.SetSystemParamsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.SetSystemParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SetSystemParamsRequest(buffer_arg) {
  return bosdyn_api_audio_visual_pb.SetSystemParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_SetSystemParamsResponse(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.SetSystemParamsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.SetSystemParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_SetSystemParamsResponse(buffer_arg) {
  return bosdyn_api_audio_visual_pb.SetSystemParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StopBehaviorRequest(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.StopBehaviorRequest)) {
    throw new Error('Expected argument of type bosdyn.api.StopBehaviorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StopBehaviorRequest(buffer_arg) {
  return bosdyn_api_audio_visual_pb.StopBehaviorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StopBehaviorResponse(arg) {
  if (!(arg instanceof bosdyn_api_audio_visual_pb.StopBehaviorResponse)) {
    throw new Error('Expected argument of type bosdyn.api.StopBehaviorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StopBehaviorResponse(buffer_arg) {
  return bosdyn_api_audio_visual_pb.StopBehaviorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AudioVisualServiceService = exports.AudioVisualServiceService = {
  // Run an AudioVisualBehavior.
runBehavior: {
    path: '/bosdyn.api.AudioVisualService/RunBehavior',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_audio_visual_pb.RunBehaviorRequest,
    responseType: bosdyn_api_audio_visual_pb.RunBehaviorResponse,
    requestSerialize: serialize_bosdyn_api_RunBehaviorRequest,
    requestDeserialize: deserialize_bosdyn_api_RunBehaviorRequest,
    responseSerialize: serialize_bosdyn_api_RunBehaviorResponse,
    responseDeserialize: deserialize_bosdyn_api_RunBehaviorResponse,
  },
  // Stop an AudioVisualBehavior.
stopBehavior: {
    path: '/bosdyn.api.AudioVisualService/StopBehavior',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_audio_visual_pb.StopBehaviorRequest,
    responseType: bosdyn_api_audio_visual_pb.StopBehaviorResponse,
    requestSerialize: serialize_bosdyn_api_StopBehaviorRequest,
    requestDeserialize: deserialize_bosdyn_api_StopBehaviorRequest,
    responseSerialize: serialize_bosdyn_api_StopBehaviorResponse,
    responseDeserialize: deserialize_bosdyn_api_StopBehaviorResponse,
  },
  // Add a new or modify an existing AudioVisualBehavior.
// Before you consider adding your own AV behaviors, please consider that
// the ‘solid lights on’ behavior can overheat the AV board if you leave
// it on for too long with certain RGB values.
addOrModifyBehavior: {
    path: '/bosdyn.api.AudioVisualService/AddOrModifyBehavior',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest,
    responseType: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse,
    requestSerialize: serialize_bosdyn_api_AddOrModifyBehaviorRequest,
    requestDeserialize: deserialize_bosdyn_api_AddOrModifyBehaviorRequest,
    responseSerialize: serialize_bosdyn_api_AddOrModifyBehaviorResponse,
    responseDeserialize: deserialize_bosdyn_api_AddOrModifyBehaviorResponse,
  },
  // Delete one or more AudioVisualBehaviors.
deleteBehaviors: {
    path: '/bosdyn.api.AudioVisualService/DeleteBehaviors',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest,
    responseType: bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse,
    requestSerialize: serialize_bosdyn_api_DeleteBehaviorsRequest,
    requestDeserialize: deserialize_bosdyn_api_DeleteBehaviorsRequest,
    responseSerialize: serialize_bosdyn_api_DeleteBehaviorsResponse,
    responseDeserialize: deserialize_bosdyn_api_DeleteBehaviorsResponse,
  },
  // List all AudioVisualBehaviors currently added to the AudioVisual Service.
listBehaviors: {
    path: '/bosdyn.api.AudioVisualService/ListBehaviors',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_audio_visual_pb.ListBehaviorsRequest,
    responseType: bosdyn_api_audio_visual_pb.ListBehaviorsResponse,
    requestSerialize: serialize_bosdyn_api_ListBehaviorsRequest,
    requestDeserialize: deserialize_bosdyn_api_ListBehaviorsRequest,
    responseSerialize: serialize_bosdyn_api_ListBehaviorsResponse,
    responseDeserialize: deserialize_bosdyn_api_ListBehaviorsResponse,
  },
  // Get the current status of the system.
getSystemParams: {
    path: '/bosdyn.api.AudioVisualService/GetSystemParams',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_audio_visual_pb.GetSystemParamsRequest,
    responseType: bosdyn_api_audio_visual_pb.GetSystemParamsResponse,
    requestSerialize: serialize_bosdyn_api_GetSystemParamsRequest,
    requestDeserialize: deserialize_bosdyn_api_GetSystemParamsRequest,
    responseSerialize: serialize_bosdyn_api_GetSystemParamsResponse,
    responseDeserialize: deserialize_bosdyn_api_GetSystemParamsResponse,
  },
  // Set the current status of the system.
setSystemParams: {
    path: '/bosdyn.api.AudioVisualService/SetSystemParams',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_audio_visual_pb.SetSystemParamsRequest,
    responseType: bosdyn_api_audio_visual_pb.SetSystemParamsResponse,
    requestSerialize: serialize_bosdyn_api_SetSystemParamsRequest,
    requestDeserialize: deserialize_bosdyn_api_SetSystemParamsRequest,
    responseSerialize: serialize_bosdyn_api_SetSystemParamsResponse,
    responseDeserialize: deserialize_bosdyn_api_SetSystemParamsResponse,
  },
};

exports.AudioVisualServiceClient = grpc.makeGenericClientConstructor(AudioVisualServiceService, 'AudioVisualService');
