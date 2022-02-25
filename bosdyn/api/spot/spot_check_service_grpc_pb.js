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
var bosdyn_api_spot_spot_check_pb = require('../../../bosdyn/api/spot/spot_check_pb.js');

function serialize_bosdyn_api_spot_CameraCalibrationCommandRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.CameraCalibrationCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_CameraCalibrationCommandRequest(buffer_arg) {
  return bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_CameraCalibrationCommandResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.CameraCalibrationCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_CameraCalibrationCommandResponse(buffer_arg) {
  return bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_CameraCalibrationFeedbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.CameraCalibrationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_CameraCalibrationFeedbackRequest(buffer_arg) {
  return bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_CameraCalibrationFeedbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.CameraCalibrationFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_CameraCalibrationFeedbackResponse(buffer_arg) {
  return bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_SpotCheckCommandRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.SpotCheckCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_SpotCheckCommandRequest(buffer_arg) {
  return bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_SpotCheckCommandResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.SpotCheckCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_SpotCheckCommandResponse(buffer_arg) {
  return bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_SpotCheckFeedbackRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot.SpotCheckFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_SpotCheckFeedbackRequest(buffer_arg) {
  return bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_SpotCheckFeedbackResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot.SpotCheckFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_SpotCheckFeedbackResponse(buffer_arg) {
  return bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// RPCs for monitoring robot health and recalibration various sensors. These procedures should be
// run periodically in order to keep the system running in the best possible condition.
var SpotCheckServiceService = exports.SpotCheckServiceService = {
  // Send a command to the SpotCheck service. The spotcheck service is responsible to both
// recalibrating actuation sensors and checking camera health.
spotCheckCommand: {
    path: '/bosdyn.api.spot.SpotCheckService/SpotCheckCommand',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest,
    responseType: bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse,
    requestSerialize: serialize_bosdyn_api_spot_SpotCheckCommandRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_SpotCheckCommandRequest,
    responseSerialize: serialize_bosdyn_api_spot_SpotCheckCommandResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_SpotCheckCommandResponse,
  },
  // Check the status of the spot check procedure. After procedure completes, this reports back
// results for specific joints and cameras.
spotCheckFeedback: {
    path: '/bosdyn.api.spot.SpotCheckService/SpotCheckFeedback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest,
    responseType: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse,
    requestSerialize: serialize_bosdyn_api_spot_SpotCheckFeedbackRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_SpotCheckFeedbackRequest,
    responseSerialize: serialize_bosdyn_api_spot_SpotCheckFeedbackResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_SpotCheckFeedbackResponse,
  },
  // Send a camera calibration command to the robot. Used to start or abort a calibration routine.
cameraCalibrationCommand: {
    path: '/bosdyn.api.spot.SpotCheckService/CameraCalibrationCommand',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest,
    responseType: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse,
    requestSerialize: serialize_bosdyn_api_spot_CameraCalibrationCommandRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_CameraCalibrationCommandRequest,
    responseSerialize: serialize_bosdyn_api_spot_CameraCalibrationCommandResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_CameraCalibrationCommandResponse,
  },
  // Check the status of the camera calibration procedure.
cameraCalibrationFeedback: {
    path: '/bosdyn.api.spot.SpotCheckService/CameraCalibrationFeedback',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest,
    responseType: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse,
    requestSerialize: serialize_bosdyn_api_spot_CameraCalibrationFeedbackRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_CameraCalibrationFeedbackRequest,
    responseSerialize: serialize_bosdyn_api_spot_CameraCalibrationFeedbackResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_CameraCalibrationFeedbackResponse,
  },
};

exports.SpotCheckServiceClient = grpc.makeGenericClientConstructor(SpotCheckServiceService);
