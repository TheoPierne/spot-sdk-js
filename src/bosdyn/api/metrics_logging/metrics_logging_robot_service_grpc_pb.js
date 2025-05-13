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
var bosdyn_api_metrics_logging_metrics_logging_robot_pb = require('../../../bosdyn/api/metrics_logging/metrics_logging_robot_pb.js');

function serialize_bosdyn_api_metrics_logging_GetAbsoluteMetricSnapshotRequest(arg) {
  if (!(arg instanceof bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest)) {
    throw new Error('Expected argument of type bosdyn.api.metrics_logging.GetAbsoluteMetricSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_metrics_logging_GetAbsoluteMetricSnapshotRequest(buffer_arg) {
  return bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_metrics_logging_GetAbsoluteMetricSnapshotResponse(arg) {
  if (!(arg instanceof bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse)) {
    throw new Error('Expected argument of type bosdyn.api.metrics_logging.GetAbsoluteMetricSnapshotResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_metrics_logging_GetAbsoluteMetricSnapshotResponse(buffer_arg) {
  return bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_metrics_logging_GetMetricsRequest(arg) {
  if (!(arg instanceof bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.metrics_logging.GetMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_metrics_logging_GetMetricsRequest(buffer_arg) {
  return bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_metrics_logging_GetMetricsResponse(arg) {
  if (!(arg instanceof bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.metrics_logging.GetMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_metrics_logging_GetMetricsResponse(buffer_arg) {
  return bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_metrics_logging_GetStoreSequenceRangeRequest(arg) {
  if (!(arg instanceof bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest)) {
    throw new Error('Expected argument of type bosdyn.api.metrics_logging.GetStoreSequenceRangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_metrics_logging_GetStoreSequenceRangeRequest(buffer_arg) {
  return bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_metrics_logging_GetStoreSequenceRangeResponse(arg) {
  if (!(arg instanceof bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse)) {
    throw new Error('Expected argument of type bosdyn.api.metrics_logging.GetStoreSequenceRangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_metrics_logging_GetStoreSequenceRangeResponse(buffer_arg) {
  return bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MetricsLoggingRobotServiceService = exports.MetricsLoggingRobotServiceService = {
  getStoreSequenceRange: {
    path: '/bosdyn.api.metrics_logging.MetricsLoggingRobotService/GetStoreSequenceRange',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest,
    responseType: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse,
    requestSerialize: serialize_bosdyn_api_metrics_logging_GetStoreSequenceRangeRequest,
    requestDeserialize: deserialize_bosdyn_api_metrics_logging_GetStoreSequenceRangeRequest,
    responseSerialize: serialize_bosdyn_api_metrics_logging_GetStoreSequenceRangeResponse,
    responseDeserialize: deserialize_bosdyn_api_metrics_logging_GetStoreSequenceRangeResponse,
  },
  getAbsoluteMetricSnapshot: {
    path: '/bosdyn.api.metrics_logging.MetricsLoggingRobotService/GetAbsoluteMetricSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest,
    responseType: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse,
    requestSerialize: serialize_bosdyn_api_metrics_logging_GetAbsoluteMetricSnapshotRequest,
    requestDeserialize: deserialize_bosdyn_api_metrics_logging_GetAbsoluteMetricSnapshotRequest,
    responseSerialize: serialize_bosdyn_api_metrics_logging_GetAbsoluteMetricSnapshotResponse,
    responseDeserialize: deserialize_bosdyn_api_metrics_logging_GetAbsoluteMetricSnapshotResponse,
  },
  getMetrics: {
    path: '/bosdyn.api.metrics_logging.MetricsLoggingRobotService/GetMetrics',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest,
    responseType: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse,
    requestSerialize: serialize_bosdyn_api_metrics_logging_GetMetricsRequest,
    requestDeserialize: deserialize_bosdyn_api_metrics_logging_GetMetricsRequest,
    responseSerialize: serialize_bosdyn_api_metrics_logging_GetMetricsResponse,
    responseDeserialize: deserialize_bosdyn_api_metrics_logging_GetMetricsResponse,
  },
};

exports.MetricsLoggingRobotServiceClient = grpc.makeGenericClientConstructor(MetricsLoggingRobotServiceService, 'MetricsLoggingRobotService');
