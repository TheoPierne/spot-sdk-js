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
var bosdyn_api_spot_choreography_sequence_pb = require('../../../bosdyn/api/spot/choreography_sequence_pb.js');

function serialize_bosdyn_api_spot_ChoreographyCommandRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ChoreographyCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ChoreographyCommandRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ChoreographyCommandResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ChoreographyCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ChoreographyCommandResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ChoreographyStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ChoreographyStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ChoreographyStatusRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ChoreographyStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ChoreographyStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ChoreographyStatusResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ChoreographyTimeAdjustRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ChoreographyTimeAdjustRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ChoreographyTimeAdjustRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ChoreographyTimeAdjustResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ChoreographyTimeAdjustResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ChoreographyTimeAdjustResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ClearAllSequenceFilesRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ClearAllSequenceFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ClearAllSequenceFilesRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ClearAllSequenceFilesResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ClearAllSequenceFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ClearAllSequenceFilesResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_DeleteSequenceRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.DeleteSequenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_DeleteSequenceRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_DeleteSequenceResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.DeleteSequenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_DeleteSequenceResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_DownloadRobotStateLogRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.DownloadRobotStateLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_DownloadRobotStateLogRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_DownloadRobotStateLogResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.DownloadRobotStateLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_DownloadRobotStateLogResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ExecuteChoreographyRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ExecuteChoreographyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ExecuteChoreographyRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ExecuteChoreographyResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ExecuteChoreographyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ExecuteChoreographyResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_GetAnimationRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.GetAnimationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_GetAnimationRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_GetAnimationResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.GetAnimationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_GetAnimationResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_GetChoreographySequenceRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.GetChoreographySequenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_GetChoreographySequenceRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_GetChoreographySequenceResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.GetChoreographySequenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_GetChoreographySequenceResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_LegSizeConfigurationRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.LegSizeConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_LegSizeConfigurationRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_LegSizeConfigurationResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.LegSizeConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_LegSizeConfigurationResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_LegSizeConfigurationStateRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.LegSizeConfigurationStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_LegSizeConfigurationStateRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_LegSizeConfigurationStateResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.LegSizeConfigurationStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_LegSizeConfigurationStateResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ListAllMovesRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ListAllMovesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ListAllMovesRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ListAllMovesResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ListAllMovesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ListAllMovesResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ListAllSequencesRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ListAllSequencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ListAllSequencesRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ListAllSequencesResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ListAllSequencesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ListAllSequencesResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ModifyChoreographyInfoRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ModifyChoreographyInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ModifyChoreographyInfoRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_ModifyChoreographyInfoResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.ModifyChoreographyInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_ModifyChoreographyInfoResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_SaveSequenceRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.SaveSequenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_SaveSequenceRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_SaveSequenceResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.SaveSequenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_SaveSequenceResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_StartRecordingStateRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.StartRecordingStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_StartRecordingStateRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_StartRecordingStateResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.StartRecordingStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_StartRecordingStateResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_StopRecordingStateRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.StopRecordingStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_StopRecordingStateRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_StopRecordingStateResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.StopRecordingStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_StopRecordingStateResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_UploadAnimatedMoveRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.UploadAnimatedMoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_UploadAnimatedMoveRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_UploadAnimatedMoveResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.UploadAnimatedMoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_UploadAnimatedMoveResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_UploadChoreographyRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.UploadChoreographyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_UploadChoreographyRequest(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_UploadChoreographyResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.UploadChoreographyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_UploadChoreographyResponse(buffer_arg) {
  return bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChoreographyServiceService = exports.ChoreographyServiceService = {
  // List the available dance moves and their parameter information.
listAllMoves: {
    path: '/bosdyn.api.spot.ChoreographyService/ListAllMoves',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse,
    requestSerialize: serialize_bosdyn_api_spot_ListAllMovesRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_ListAllMovesRequest,
    responseSerialize: serialize_bosdyn_api_spot_ListAllMovesResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_ListAllMovesResponse,
  },
  // List the available choreography sequences currently on the robot.
listAllSequences: {
    path: '/bosdyn.api.spot.ChoreographyService/ListAllSequences',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse,
    requestSerialize: serialize_bosdyn_api_spot_ListAllSequencesRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_ListAllSequencesRequest,
    responseSerialize: serialize_bosdyn_api_spot_ListAllSequencesResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_ListAllSequencesResponse,
  },
  // Return the ChoreographySequence with the given name and any requested animation data.
getChoreographySequence: {
    path: '/bosdyn.api.spot.ChoreographyService/GetChoreographySequence',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse,
    requestSerialize: serialize_bosdyn_api_spot_GetChoreographySequenceRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_GetChoreographySequenceRequest,
    responseSerialize: serialize_bosdyn_api_spot_GetChoreographySequenceResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_GetChoreographySequenceResponse,
  },
  // Return the full Animation message with the given name.
getAnimation: {
    path: '/bosdyn.api.spot.ChoreographyService/GetAnimation',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse,
    requestSerialize: serialize_bosdyn_api_spot_GetAnimationRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_GetAnimationRequest,
    responseSerialize: serialize_bosdyn_api_spot_GetAnimationResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_GetAnimationResponse,
  },
  // Delete a retained choreography sequence from the collection of user uploaded
// choreography sequences.
deleteSequence: {
    path: '/bosdyn.api.spot.ChoreographyService/DeleteSequence',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse,
    requestSerialize: serialize_bosdyn_api_spot_DeleteSequenceRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_DeleteSequenceRequest,
    responseSerialize: serialize_bosdyn_api_spot_DeleteSequenceResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_DeleteSequenceResponse,
  },
  // Save a user uploaded choreography sequence to the robots collection of
// retained choreography sequences.
saveSequence: {
    path: '/bosdyn.api.spot.ChoreographyService/SaveSequence',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse,
    requestSerialize: serialize_bosdyn_api_spot_SaveSequenceRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_SaveSequenceRequest,
    responseSerialize: serialize_bosdyn_api_spot_SaveSequenceResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_SaveSequenceResponse,
  },
  // Modify the metadata of a choreography sequence.
modifyChoreographyInfo: {
    path: '/bosdyn.api.spot.ChoreographyService/ModifyChoreographyInfo',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse,
    requestSerialize: serialize_bosdyn_api_spot_ModifyChoreographyInfoRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_ModifyChoreographyInfoRequest,
    responseSerialize: serialize_bosdyn_api_spot_ModifyChoreographyInfoResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_ModifyChoreographyInfoResponse,
  },
  // Clear all retained choreography sequence files from robot memory.
clearAllSequenceFiles: {
    path: '/bosdyn.api.spot.ChoreographyService/ClearAllSequenceFiles',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse,
    requestSerialize: serialize_bosdyn_api_spot_ClearAllSequenceFilesRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_ClearAllSequenceFilesRequest,
    responseSerialize: serialize_bosdyn_api_spot_ClearAllSequenceFilesResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_ClearAllSequenceFilesResponse,
  },
  // Upload a dance to the robot.
uploadChoreography: {
    path: '/bosdyn.api.spot.ChoreographyService/UploadChoreography',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse,
    requestSerialize: serialize_bosdyn_api_spot_UploadChoreographyRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_UploadChoreographyRequest,
    responseSerialize: serialize_bosdyn_api_spot_UploadChoreographyResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_UploadChoreographyResponse,
  },
  // Upload an animation to the robot.
uploadAnimatedMove: {
    path: '/bosdyn.api.spot.ChoreographyService/UploadAnimatedMove',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse,
    requestSerialize: serialize_bosdyn_api_spot_UploadAnimatedMoveRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_UploadAnimatedMoveRequest,
    responseSerialize: serialize_bosdyn_api_spot_UploadAnimatedMoveResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_UploadAnimatedMoveResponse,
  },
  // Execute the uploaded dance.
executeChoreography: {
    path: '/bosdyn.api.spot.ChoreographyService/ExecuteChoreography',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse,
    requestSerialize: serialize_bosdyn_api_spot_ExecuteChoreographyRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_ExecuteChoreographyRequest,
    responseSerialize: serialize_bosdyn_api_spot_ExecuteChoreographyResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_ExecuteChoreographyResponse,
  },
  // Manually start (or continue) recording the robot state.
startRecordingState: {
    path: '/bosdyn.api.spot.ChoreographyService/StartRecordingState',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse,
    requestSerialize: serialize_bosdyn_api_spot_StartRecordingStateRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_StartRecordingStateRequest,
    responseSerialize: serialize_bosdyn_api_spot_StartRecordingStateResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_StartRecordingStateResponse,
  },
  // Manually stop recording the robot state.
stopRecordingState: {
    path: '/bosdyn.api.spot.ChoreographyService/StopRecordingState',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse,
    requestSerialize: serialize_bosdyn_api_spot_StopRecordingStateRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_StopRecordingStateRequest,
    responseSerialize: serialize_bosdyn_api_spot_StopRecordingStateResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_StopRecordingStateResponse,
  },
  // Download log of the latest recorded robot state information.
downloadRobotStateLog: {
    path: '/bosdyn.api.spot.ChoreographyService/DownloadRobotStateLog',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse,
    requestSerialize: serialize_bosdyn_api_spot_DownloadRobotStateLogRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_DownloadRobotStateLogRequest,
    responseSerialize: serialize_bosdyn_api_spot_DownloadRobotStateLogResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_DownloadRobotStateLogResponse,
  },
  // Report the status of a dancing robot.
choreographyStatus: {
    path: '/bosdyn.api.spot.ChoreographyService/ChoreographyStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse,
    requestSerialize: serialize_bosdyn_api_spot_ChoreographyStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_ChoreographyStatusRequest,
    responseSerialize: serialize_bosdyn_api_spot_ChoreographyStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_ChoreographyStatusResponse,
  },
  // Commands intended for individual dance moves that are currently executing.
choreographyCommand: {
    path: '/bosdyn.api.spot.ChoreographyService/ChoreographyCommand',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse,
    requestSerialize: serialize_bosdyn_api_spot_ChoreographyCommandRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_ChoreographyCommandRequest,
    responseSerialize: serialize_bosdyn_api_spot_ChoreographyCommandResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_ChoreographyCommandResponse,
  },
  // Adjust leg size configuration, which affects self-collision avoidance regions.
legSizeConfiguration: {
    path: '/bosdyn.api.spot.ChoreographyService/LegSizeConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse,
    requestSerialize: serialize_bosdyn_api_spot_LegSizeConfigurationRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_LegSizeConfigurationRequest,
    responseSerialize: serialize_bosdyn_api_spot_LegSizeConfigurationResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_LegSizeConfigurationResponse,
  },
  // Read the current leg size configuration from the robot.
legSizeConfigurationState: {
    path: '/bosdyn.api.spot.ChoreographyService/LegSizeConfigurationState',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse,
    requestSerialize: serialize_bosdyn_api_spot_LegSizeConfigurationStateRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_LegSizeConfigurationStateRequest,
    responseSerialize: serialize_bosdyn_api_spot_LegSizeConfigurationStateResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_LegSizeConfigurationStateResponse,
  },
  // Adjust the time when a robot should start dancing within a tolerance.
choreographyTimeAdjust: {
    path: '/bosdyn.api.spot.ChoreographyService/ChoreographyTimeAdjust',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest,
    responseType: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse,
    requestSerialize: serialize_bosdyn_api_spot_ChoreographyTimeAdjustRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_ChoreographyTimeAdjustRequest,
    responseSerialize: serialize_bosdyn_api_spot_ChoreographyTimeAdjustResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_ChoreographyTimeAdjustResponse,
  },
};

exports.ChoreographyServiceClient = grpc.makeGenericClientConstructor(ChoreographyServiceService, 'ChoreographyService');
