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
var bosdyn_api_point_cloud_pb = require('../../bosdyn/api/point_cloud_pb.js');

function serialize_bosdyn_api_GetPointCloudRequest(arg) {
  if (!(arg instanceof bosdyn_api_point_cloud_pb.GetPointCloudRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetPointCloudRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetPointCloudRequest(buffer_arg) {
  return bosdyn_api_point_cloud_pb.GetPointCloudRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetPointCloudResponse(arg) {
  if (!(arg instanceof bosdyn_api_point_cloud_pb.GetPointCloudResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetPointCloudResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetPointCloudResponse(buffer_arg) {
  return bosdyn_api_point_cloud_pb.GetPointCloudResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListPointCloudSourcesRequest(arg) {
  if (!(arg instanceof bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListPointCloudSourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListPointCloudSourcesRequest(buffer_arg) {
  return bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListPointCloudSourcesResponse(arg) {
  if (!(arg instanceof bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListPointCloudSourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListPointCloudSourcesResponse(buffer_arg) {
  return bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The point cloud service provides access to one or more point cloud sources, for example
// from a lidar. It supports querying the list of available sources provided by the service
// and it supports requesting the latest point cloud data for each source by name.
var PointCloudServiceService = exports.PointCloudServiceService = {
  // Obtain the list of PointCloudSources for this given service.
// Note that there may be multiple PointCloudServices running, each with their own set of sources
// The name field keys access to individual point clouds when calling GetPointCloud.
listPointCloudSources: {
    path: '/bosdyn.api.PointCloudService/ListPointCloudSources',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest,
    responseType: bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse,
    requestSerialize: serialize_bosdyn_api_ListPointCloudSourcesRequest,
    requestDeserialize: deserialize_bosdyn_api_ListPointCloudSourcesRequest,
    responseSerialize: serialize_bosdyn_api_ListPointCloudSourcesResponse,
    responseDeserialize: deserialize_bosdyn_api_ListPointCloudSourcesResponse,
  },
  // Request point clouds by source name.
getPointCloud: {
    path: '/bosdyn.api.PointCloudService/GetPointCloud',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_point_cloud_pb.GetPointCloudRequest,
    responseType: bosdyn_api_point_cloud_pb.GetPointCloudResponse,
    requestSerialize: serialize_bosdyn_api_GetPointCloudRequest,
    requestDeserialize: deserialize_bosdyn_api_GetPointCloudRequest,
    responseSerialize: serialize_bosdyn_api_GetPointCloudResponse,
    responseDeserialize: deserialize_bosdyn_api_GetPointCloudResponse,
  },
};

exports.PointCloudServiceClient = grpc.makeGenericClientConstructor(PointCloudServiceService);
