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
var bosdyn_api_data_acquisition_store_pb = require('../../bosdyn/api/data_acquisition_store_pb.js');

function serialize_bosdyn_api_ListCaptureActionsRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListCaptureActionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListCaptureActionsRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListCaptureActionsResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListCaptureActionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListCaptureActionsResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListStoredAlertDataRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListStoredAlertDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListStoredAlertDataRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListStoredAlertDataResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListStoredAlertDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListStoredAlertDataResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListStoredDataRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListStoredDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListStoredDataRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListStoredDataResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListStoredDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListStoredDataResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListStoredImagesRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListStoredImagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListStoredImagesRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListStoredImagesResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListStoredImagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListStoredImagesResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListStoredMetadataRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.ListStoredMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListStoredMetadataRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_ListStoredMetadataResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.ListStoredMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_ListStoredMetadataResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StoreAlertDataRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.StoreAlertDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StoreAlertDataRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StoreAlertDataResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.StoreAlertDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StoreAlertDataResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StoreDataRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.StoreDataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.StoreDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StoreDataRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.StoreDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StoreDataResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.StoreDataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.StoreDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StoreDataResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.StoreDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StoreImageRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.StoreImageRequest)) {
    throw new Error('Expected argument of type bosdyn.api.StoreImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StoreImageRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.StoreImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StoreImageResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.StoreImageResponse)) {
    throw new Error('Expected argument of type bosdyn.api.StoreImageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StoreImageResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.StoreImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StoreMetadataRequest(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.StoreMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StoreMetadataRequest(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_StoreMetadataResponse(arg) {
  if (!(arg instanceof bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.StoreMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_StoreMetadataResponse(buffer_arg) {
  return bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The DataAcquisitionStoreService is used to store data (images, data, metadata) on the robot
// in association with the DataIdentifiers specified by the DataAcquisitionService. Additionally,
// requests can be made to the DataAcquisitionStoreService to identify different pieces of data or entire
// capture actions which match query parameters, such as time ranges or action/group names.
var DataAcquisitionStoreServiceService = exports.DataAcquisitionStoreServiceService = {
  // List all CaptureActionIds (which identify an entire AcquireData RPC's data captures)
// that match the query parameters provided in the request.
listCaptureActions: {
    path: '/bosdyn.api.DataAcquisitionStoreService/ListCaptureActions',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse,
    requestSerialize: serialize_bosdyn_api_ListCaptureActionsRequest,
    requestDeserialize: deserialize_bosdyn_api_ListCaptureActionsRequest,
    responseSerialize: serialize_bosdyn_api_ListCaptureActionsResponse,
    responseDeserialize: deserialize_bosdyn_api_ListCaptureActionsResponse,
  },
  // List data identifiers (which identify specific pieces of data from
// an action) for stored data that satisfy the query parameters in the request.
listStoredData: {
    path: '/bosdyn.api.DataAcquisitionStoreService/ListStoredData',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse,
    requestSerialize: serialize_bosdyn_api_ListStoredDataRequest,
    requestDeserialize: deserialize_bosdyn_api_ListStoredDataRequest,
    responseSerialize: serialize_bosdyn_api_ListStoredDataResponse,
    responseDeserialize: deserialize_bosdyn_api_ListStoredDataResponse,
  },
  // Store arbitrary data associated with a DataIdentifier.
storeData: {
    path: '/bosdyn.api.DataAcquisitionStoreService/StoreData',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.StoreDataRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.StoreDataResponse,
    requestSerialize: serialize_bosdyn_api_StoreDataRequest,
    requestDeserialize: deserialize_bosdyn_api_StoreDataRequest,
    responseSerialize: serialize_bosdyn_api_StoreDataResponse,
    responseDeserialize: deserialize_bosdyn_api_StoreDataResponse,
  },
  // Type-safe to images: list data identifiers (which identify specific images
// from an action) for stored images that satisfy the
// query parameters in the request.
listStoredImages: {
    path: '/bosdyn.api.DataAcquisitionStoreService/ListStoredImages',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse,
    requestSerialize: serialize_bosdyn_api_ListStoredImagesRequest,
    requestDeserialize: deserialize_bosdyn_api_ListStoredImagesRequest,
    responseSerialize: serialize_bosdyn_api_ListStoredImagesResponse,
    responseDeserialize: deserialize_bosdyn_api_ListStoredImagesResponse,
  },
  // Type-safe to images: store image data associated with a DataIdentifier.
storeImage: {
    path: '/bosdyn.api.DataAcquisitionStoreService/StoreImage',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.StoreImageRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.StoreImageResponse,
    requestSerialize: serialize_bosdyn_api_StoreImageRequest,
    requestDeserialize: deserialize_bosdyn_api_StoreImageRequest,
    responseSerialize: serialize_bosdyn_api_StoreImageResponse,
    responseDeserialize: deserialize_bosdyn_api_StoreImageResponse,
  },
  // Type-safe to JSON metadata: list data identifiers (which identify specific metadata from
// an action) for stored metadata that satisfy the query parameters in the request.
listStoredMetadata: {
    path: '/bosdyn.api.DataAcquisitionStoreService/ListStoredMetadata',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse,
    requestSerialize: serialize_bosdyn_api_ListStoredMetadataRequest,
    requestDeserialize: deserialize_bosdyn_api_ListStoredMetadataRequest,
    responseSerialize: serialize_bosdyn_api_ListStoredMetadataResponse,
    responseDeserialize: deserialize_bosdyn_api_ListStoredMetadataResponse,
  },
  // Type-safe to JSON metadata: store metadata associated with a DataIdentifier.
storeMetadata: {
    path: '/bosdyn.api.DataAcquisitionStoreService/StoreMetadata',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse,
    requestSerialize: serialize_bosdyn_api_StoreMetadataRequest,
    requestDeserialize: deserialize_bosdyn_api_StoreMetadataRequest,
    responseSerialize: serialize_bosdyn_api_StoreMetadataResponse,
    responseDeserialize: deserialize_bosdyn_api_StoreMetadataResponse,
  },
  // List data identifiers (which identify specific AlertData from
// an action) for stored AlertData that satisfy the query parameters in the request.
listStoredAlertData: {
    path: '/bosdyn.api.DataAcquisitionStoreService/ListStoredAlertData',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse,
    requestSerialize: serialize_bosdyn_api_ListStoredAlertDataRequest,
    requestDeserialize: deserialize_bosdyn_api_ListStoredAlertDataRequest,
    responseSerialize: serialize_bosdyn_api_ListStoredAlertDataResponse,
    responseDeserialize: deserialize_bosdyn_api_ListStoredAlertDataResponse,
  },
  // Store AlertData associated with a DataIdentifier.
storeAlertData: {
    path: '/bosdyn.api.DataAcquisitionStoreService/StoreAlertData',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest,
    responseType: bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse,
    requestSerialize: serialize_bosdyn_api_StoreAlertDataRequest,
    requestDeserialize: deserialize_bosdyn_api_StoreAlertDataRequest,
    responseSerialize: serialize_bosdyn_api_StoreAlertDataResponse,
    responseDeserialize: deserialize_bosdyn_api_StoreAlertDataResponse,
  },
};

exports.DataAcquisitionStoreServiceClient = grpc.makeGenericClientConstructor(DataAcquisitionStoreServiceService);
