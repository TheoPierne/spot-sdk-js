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
var bosdyn_api_image_pb = require('../../bosdyn/api/image_pb.js');

function serialize_bosdyn_api_GetImageRequest(arg) {
  if (!(arg instanceof bosdyn_api_image_pb.GetImageRequest)) {
    throw new Error('Expected argument of type bosdyn.api.GetImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetImageRequest(buffer_arg) {
  return bosdyn_api_image_pb.GetImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_GetImageResponse(arg) {
  if (!(arg instanceof bosdyn_api_image_pb.GetImageResponse)) {
    throw new Error('Expected argument of type bosdyn.api.GetImageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_GetImageResponse(buffer_arg) {
  return bosdyn_api_image_pb.GetImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListImageSourcesRequest(arg) {
  if (!(arg instanceof bosdyn_api_image_pb.ListImageSourcesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListImageSourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListImageSourcesRequest(buffer_arg) {
  return bosdyn_api_image_pb.ListImageSourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListImageSourcesResponse(arg) {
  if (!(arg instanceof bosdyn_api_image_pb.ListImageSourcesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListImageSourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListImageSourcesResponse(buffer_arg) {
  return bosdyn_api_image_pb.ListImageSourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// An Image service provides access to one or more images, for example from cameras. It
// supports querying for the list of available images provided by the service and then
// supports requesting a latest given image by source name.
var ImageServiceService = exports.ImageServiceService = {
  // Obtain the list of ImageSources for this given service.
// Note that there may be multiple ImageServices running, each with their own set of sources
// The name field keys access to individual images when calling GetImage.
listImageSources: {
    path: '/bosdyn.api.ImageService/ListImageSources',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_image_pb.ListImageSourcesRequest,
    responseType: bosdyn_api_image_pb.ListImageSourcesResponse,
    requestSerialize: serialize_bosdyn_api_ListImageSourcesRequest,
    requestDeserialize: deserialize_bosdyn_api_ListImageSourcesRequest,
    responseSerialize: serialize_bosdyn_api_ListImageSourcesResponse,
    responseDeserialize: deserialize_bosdyn_api_ListImageSourcesResponse,
  },
  // Request an image by name, with optional parameters for requesting image quality level.
getImage: {
    path: '/bosdyn.api.ImageService/GetImage',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_image_pb.GetImageRequest,
    responseType: bosdyn_api_image_pb.GetImageResponse,
    requestSerialize: serialize_bosdyn_api_GetImageRequest,
    requestDeserialize: deserialize_bosdyn_api_GetImageRequest,
    responseSerialize: serialize_bosdyn_api_GetImageResponse,
    responseDeserialize: deserialize_bosdyn_api_GetImageResponse,
  },
};

exports.ImageServiceClient = grpc.makeGenericClientConstructor(ImageServiceService);
