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
var bosdyn_api_log_status_log_status_pb = require('../../../bosdyn/api/log_status/log_status_pb.js');

function serialize_bosdyn_api_log_status_GetActiveLogStatusesRequest(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.GetActiveLogStatusesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_GetActiveLogStatusesRequest(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_GetActiveLogStatusesResponse(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.GetActiveLogStatusesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_GetActiveLogStatusesResponse(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_GetLogStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.GetLogStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.GetLogStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_GetLogStatusRequest(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.GetLogStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_GetLogStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.GetLogStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.GetLogStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_GetLogStatusResponse(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.GetLogStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_StartExperimentLogRequest(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.StartExperimentLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_StartExperimentLogRequest(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_StartExperimentLogResponse(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.StartExperimentLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_StartExperimentLogResponse(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_StartRetroLogRequest(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.StartRetroLogRequest)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.StartRetroLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_StartRetroLogRequest(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.StartRetroLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_StartRetroLogResponse(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.StartRetroLogResponse)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.StartRetroLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_StartRetroLogResponse(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.StartRetroLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_TerminateLogRequest(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.TerminateLogRequest)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.TerminateLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_TerminateLogRequest(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.TerminateLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_TerminateLogResponse(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.TerminateLogResponse)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.TerminateLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_TerminateLogResponse(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.TerminateLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_UpdateExperimentLogRequest(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.UpdateExperimentLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_UpdateExperimentLogRequest(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_log_status_UpdateExperimentLogResponse(arg) {
  if (!(arg instanceof bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse)) {
    throw new Error('Expected argument of type bosdyn.api.log_status.UpdateExperimentLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_log_status_UpdateExperimentLogResponse(buffer_arg) {
  return bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The LogStatusService provides clients the ability to
//   - Retrieve log status by id
//   - Access a collection of active logs
//   - Start and stop retro logs
//   - Start, extend and stop experiment logs
//   - Terminate logs before their expiration time
var LogStatusServiceService = exports.LogStatusServiceService = {
  // Retrieve log status by id.
getLogStatus: {
    path: '/bosdyn.api.log_status.LogStatusService/GetLogStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_log_status_log_status_pb.GetLogStatusRequest,
    responseType: bosdyn_api_log_status_log_status_pb.GetLogStatusResponse,
    requestSerialize: serialize_bosdyn_api_log_status_GetLogStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_log_status_GetLogStatusRequest,
    responseSerialize: serialize_bosdyn_api_log_status_GetLogStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_log_status_GetLogStatusResponse,
  },
  // View statuses of active logs.
getActiveLogStatuses: {
    path: '/bosdyn.api.log_status.LogStatusService/GetActiveLogStatuses',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest,
    responseType: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse,
    requestSerialize: serialize_bosdyn_api_log_status_GetActiveLogStatusesRequest,
    requestDeserialize: deserialize_bosdyn_api_log_status_GetActiveLogStatusesRequest,
    responseSerialize: serialize_bosdyn_api_log_status_GetActiveLogStatusesResponse,
    responseDeserialize: deserialize_bosdyn_api_log_status_GetActiveLogStatusesResponse,
  },
  // Given a duration T, StartRetroLog(T) triggers a log covering the timespan [logStartTime, t_rpc],
// where logStartTime = max(t_rpc - T, t_buffer), t_rpc = time of RPC reception,
// and t_buffer = time of first log on the buffer.
startRetroLog: {
    path: '/bosdyn.api.log_status.LogStatusService/StartRetroLog',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_log_status_log_status_pb.StartRetroLogRequest,
    responseType: bosdyn_api_log_status_log_status_pb.StartRetroLogResponse,
    requestSerialize: serialize_bosdyn_api_log_status_StartRetroLogRequest,
    requestDeserialize: deserialize_bosdyn_api_log_status_StartRetroLogRequest,
    responseSerialize: serialize_bosdyn_api_log_status_StartRetroLogResponse,
    responseDeserialize: deserialize_bosdyn_api_log_status_StartRetroLogResponse,
  },
  // Given a duration T, StartExperimentLog(T) starts logging all data to
// disk with a keepalive/watchdog timer of T. The duration of the log will be [t_rpc, t_rpc + T]
// where t_rpc = time of RPC reception. The duration of this log can be extended by calling
// UpdateExperimentLog before the log's status reaches a terminal state.
// If any retro logs are running, they will be terminated by starting an experiment log.
// Only one experiment log can be run at a time.
startExperimentLog: {
    path: '/bosdyn.api.log_status.LogStatusService/StartExperimentLog',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest,
    responseType: bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse,
    requestSerialize: serialize_bosdyn_api_log_status_StartExperimentLogRequest,
    requestDeserialize: deserialize_bosdyn_api_log_status_StartExperimentLogRequest,
    responseSerialize: serialize_bosdyn_api_log_status_StartExperimentLogResponse,
    responseDeserialize: deserialize_bosdyn_api_log_status_StartExperimentLogResponse,
  },
  // UpdateExperimentLog(id, T) will update the keepalive/watchdog timer of
// the log with the provided id if the log is active. The updated duration
// of the log will be [t_rpc, t_rpc + T] where t_rpc = time of RPC reception.
updateExperimentLog: {
    path: '/bosdyn.api.log_status.LogStatusService/UpdateExperimentLog',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest,
    responseType: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse,
    requestSerialize: serialize_bosdyn_api_log_status_UpdateExperimentLogRequest,
    requestDeserialize: deserialize_bosdyn_api_log_status_UpdateExperimentLogRequest,
    responseSerialize: serialize_bosdyn_api_log_status_UpdateExperimentLogResponse,
    responseDeserialize: deserialize_bosdyn_api_log_status_UpdateExperimentLogResponse,
  },
  // Terminate Log before it is complete.
terminateLog: {
    path: '/bosdyn.api.log_status.LogStatusService/TerminateLog',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_log_status_log_status_pb.TerminateLogRequest,
    responseType: bosdyn_api_log_status_log_status_pb.TerminateLogResponse,
    requestSerialize: serialize_bosdyn_api_log_status_TerminateLogRequest,
    requestDeserialize: deserialize_bosdyn_api_log_status_TerminateLogRequest,
    responseSerialize: serialize_bosdyn_api_log_status_TerminateLogResponse,
    responseDeserialize: deserialize_bosdyn_api_log_status_TerminateLogResponse,
  },
};

exports.LogStatusServiceClient = grpc.makeGenericClientConstructor(LogStatusServiceService);
