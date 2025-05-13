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
var bosdyn_api_gps_aggregator_pb = require('../../../bosdyn/api/gps/aggregator_pb.js');

function serialize_bosdyn_api_gps_NewGpsDataRequest(arg) {
  if (!(arg instanceof bosdyn_api_gps_aggregator_pb.NewGpsDataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.gps.NewGpsDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_gps_NewGpsDataRequest(buffer_arg) {
  return bosdyn_api_gps_aggregator_pb.NewGpsDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_gps_NewGpsDataResponse(arg) {
  if (!(arg instanceof bosdyn_api_gps_aggregator_pb.NewGpsDataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.gps.NewGpsDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_gps_NewGpsDataResponse(buffer_arg) {
  return bosdyn_api_gps_aggregator_pb.NewGpsDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// The AggregatorService is an endpoint that clients should send GPS data too.
// Data dumped into the AggregatorService is used by the RegistrationService.
// In practice:
//     - A GPS will be connected to a peripheral computer
//     - The peripheral computer should establish timesync with the robot
//     - The peripheral computer should read data from the GPS hardware
//     - The peripheral computer should send timestamped data to the AggregatorService
var AggregatorServiceService = exports.AggregatorServiceService = {
  newGpsData: {
    path: '/bosdyn.api.gps.AggregatorService/NewGpsData',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_gps_aggregator_pb.NewGpsDataRequest,
    responseType: bosdyn_api_gps_aggregator_pb.NewGpsDataResponse,
    requestSerialize: serialize_bosdyn_api_gps_NewGpsDataRequest,
    requestDeserialize: deserialize_bosdyn_api_gps_NewGpsDataRequest,
    responseSerialize: serialize_bosdyn_api_gps_NewGpsDataResponse,
    responseDeserialize: deserialize_bosdyn_api_gps_NewGpsDataResponse,
  },
};

exports.AggregatorServiceClient = grpc.makeGenericClientConstructor(AggregatorServiceService, 'AggregatorService');
