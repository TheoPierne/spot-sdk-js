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
var bosdyn_api_data_chunk_pb = require('../../../bosdyn/api/data_chunk_pb.js');
var bosdyn_api_mission_mission_pb = require('../../../bosdyn/api/mission/mission_pb.js');

function serialize_bosdyn_api_DataChunk(arg) {
  if (!(arg instanceof bosdyn_api_data_chunk_pb.DataChunk)) {
    throw new Error('Expected argument of type bosdyn.api.DataChunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_DataChunk(buffer_arg) {
  return bosdyn_api_data_chunk_pb.DataChunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_AnswerQuestionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.AnswerQuestionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.AnswerQuestionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_AnswerQuestionRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.AnswerQuestionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_AnswerQuestionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.AnswerQuestionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.AnswerQuestionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_AnswerQuestionResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.AnswerQuestionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_GetInfoRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.GetInfoRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.GetInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_GetInfoRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.GetInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_GetInfoResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.GetInfoResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.GetInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_GetInfoResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.GetInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_GetMissionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.GetMissionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.GetMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_GetMissionRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.GetMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_GetMissionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.GetMissionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.GetMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_GetMissionResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.GetMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_GetStateRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.GetStateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.GetStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_GetStateRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.GetStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_GetStateResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.GetStateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.GetStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_GetStateResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.GetStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_LoadMissionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.LoadMissionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.LoadMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_LoadMissionRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.LoadMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_LoadMissionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.LoadMissionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.LoadMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_LoadMissionResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.LoadMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_PauseMissionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.PauseMissionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.PauseMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_PauseMissionRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.PauseMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_PauseMissionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.PauseMissionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.PauseMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_PauseMissionResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.PauseMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_PlayMissionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.PlayMissionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.PlayMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_PlayMissionRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.PlayMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_PlayMissionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.PlayMissionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.PlayMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_PlayMissionResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.PlayMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_RestartMissionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.RestartMissionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.RestartMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_RestartMissionRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.RestartMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_RestartMissionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.RestartMissionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.RestartMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_RestartMissionResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.RestartMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_StopMissionRequest(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.StopMissionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.mission.StopMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_StopMissionRequest(buffer_arg) {
  return bosdyn_api_mission_mission_pb.StopMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_mission_StopMissionResponse(arg) {
  if (!(arg instanceof bosdyn_api_mission_mission_pb.StopMissionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.mission.StopMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_mission_StopMissionResponse(buffer_arg) {
  return bosdyn_api_mission_mission_pb.StopMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MissionService can be used to specify high level autonomous behaviors for Spot using behavior trees.
var MissionServiceService = exports.MissionServiceService = {
  // Load a mission to run later.
loadMission: {
    path: '/bosdyn.api.mission.MissionService/LoadMission',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.LoadMissionRequest,
    responseType: bosdyn_api_mission_mission_pb.LoadMissionResponse,
    requestSerialize: serialize_bosdyn_api_mission_LoadMissionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_LoadMissionRequest,
    responseSerialize: serialize_bosdyn_api_mission_LoadMissionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_LoadMissionResponse,
  },
  // Alternative loading method for large missions, that allows you to break the 
// mission up into multiple streamed requests.  The data chunks should deserialize
// into a LoadMissionRequest
loadMissionAsChunks: {
    path: '/bosdyn.api.mission.MissionService/LoadMissionAsChunks',
    requestStream: true,
    responseStream: false,
    requestType: bosdyn_api_data_chunk_pb.DataChunk,
    responseType: bosdyn_api_mission_mission_pb.LoadMissionResponse,
    requestSerialize: serialize_bosdyn_api_DataChunk,
    requestDeserialize: deserialize_bosdyn_api_DataChunk,
    responseSerialize: serialize_bosdyn_api_mission_LoadMissionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_LoadMissionResponse,
  },
  // Start executing a loaded mission.
// Will not restart a mission that has run to completion. Use RestartMission to do that.
playMission: {
    path: '/bosdyn.api.mission.MissionService/PlayMission',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.PlayMissionRequest,
    responseType: bosdyn_api_mission_mission_pb.PlayMissionResponse,
    requestSerialize: serialize_bosdyn_api_mission_PlayMissionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_PlayMissionRequest,
    responseSerialize: serialize_bosdyn_api_mission_PlayMissionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_PlayMissionResponse,
  },
  // Pause mission execution.
pauseMission: {
    path: '/bosdyn.api.mission.MissionService/PauseMission',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.PauseMissionRequest,
    responseType: bosdyn_api_mission_mission_pb.PauseMissionResponse,
    requestSerialize: serialize_bosdyn_api_mission_PauseMissionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_PauseMissionRequest,
    responseSerialize: serialize_bosdyn_api_mission_PauseMissionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_PauseMissionResponse,
  },
  // Stop a running mission.
// Must use RestartMission, not PlayMission, to begin from the beginning.
stopMission: {
    path: '/bosdyn.api.mission.MissionService/StopMission',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.StopMissionRequest,
    responseType: bosdyn_api_mission_mission_pb.StopMissionResponse,
    requestSerialize: serialize_bosdyn_api_mission_StopMissionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_StopMissionRequest,
    responseSerialize: serialize_bosdyn_api_mission_StopMissionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_StopMissionResponse,
  },
  // Start executing a loaded mission from the beginning.
// Does not need to be called after LoadMission.
restartMission: {
    path: '/bosdyn.api.mission.MissionService/RestartMission',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.RestartMissionRequest,
    responseType: bosdyn_api_mission_mission_pb.RestartMissionResponse,
    requestSerialize: serialize_bosdyn_api_mission_RestartMissionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_RestartMissionRequest,
    responseSerialize: serialize_bosdyn_api_mission_RestartMissionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_RestartMissionResponse,
  },
  // Get the state of the mission.
getState: {
    path: '/bosdyn.api.mission.MissionService/GetState',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.GetStateRequest,
    responseType: bosdyn_api_mission_mission_pb.GetStateResponse,
    requestSerialize: serialize_bosdyn_api_mission_GetStateRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_GetStateRequest,
    responseSerialize: serialize_bosdyn_api_mission_GetStateResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_GetStateResponse,
  },
  // Get static information regarding the mission. Used to interpret mission state.
getInfo: {
    path: '/bosdyn.api.mission.MissionService/GetInfo',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.GetInfoRequest,
    responseType: bosdyn_api_mission_mission_pb.GetInfoResponse,
    requestSerialize: serialize_bosdyn_api_mission_GetInfoRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_GetInfoRequest,
    responseSerialize: serialize_bosdyn_api_mission_GetInfoResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_GetInfoResponse,
  },
  // Download the mission as it was uploaded to the service.
getMission: {
    path: '/bosdyn.api.mission.MissionService/GetMission',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.GetMissionRequest,
    responseType: bosdyn_api_mission_mission_pb.GetMissionResponse,
    requestSerialize: serialize_bosdyn_api_mission_GetMissionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_GetMissionRequest,
    responseSerialize: serialize_bosdyn_api_mission_GetMissionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_GetMissionResponse,
  },
  // Specify an answer to the question asked by the mission.
answerQuestion: {
    path: '/bosdyn.api.mission.MissionService/AnswerQuestion',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_mission_mission_pb.AnswerQuestionRequest,
    responseType: bosdyn_api_mission_mission_pb.AnswerQuestionResponse,
    requestSerialize: serialize_bosdyn_api_mission_AnswerQuestionRequest,
    requestDeserialize: deserialize_bosdyn_api_mission_AnswerQuestionRequest,
    responseSerialize: serialize_bosdyn_api_mission_AnswerQuestionResponse,
    responseDeserialize: deserialize_bosdyn_api_mission_AnswerQuestionResponse,
  },
};

exports.MissionServiceClient = grpc.makeGenericClientConstructor(MissionServiceService);
