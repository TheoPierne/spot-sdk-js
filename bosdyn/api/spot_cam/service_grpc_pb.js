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
var bosdyn_api_spot_cam_compositor_pb = require('../../../bosdyn/api/spot_cam/compositor_pb.js');
var bosdyn_api_spot_cam_streamquality_pb = require('../../../bosdyn/api/spot_cam/streamquality_pb.js');
var bosdyn_api_spot_cam_power_pb = require('../../../bosdyn/api/spot_cam/power_pb.js');
var bosdyn_api_spot_cam_LED_pb = require('../../../bosdyn/api/spot_cam/LED_pb.js');
var bosdyn_api_spot_cam_logging_pb = require('../../../bosdyn/api/spot_cam/logging_pb.js');
var bosdyn_api_spot_cam_ptz_pb = require('../../../bosdyn/api/spot_cam/ptz_pb.js');
var bosdyn_api_spot_cam_audio_pb = require('../../../bosdyn/api/spot_cam/audio_pb.js');
var bosdyn_api_spot_cam_health_pb = require('../../../bosdyn/api/spot_cam/health_pb.js');
var bosdyn_api_spot_cam_network_pb = require('../../../bosdyn/api/spot_cam/network_pb.js');
var bosdyn_api_spot_cam_version_pb = require('../../../bosdyn/api/spot_cam/version_pb.js');

function serialize_bosdyn_api_spot_cam_ClearBITEventsRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ClearBITEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ClearBITEventsRequest(buffer_arg) {
  return bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ClearBITEventsResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ClearBITEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ClearBITEventsResponse(buffer_arg) {
  return bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_CyclePowerRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_power_pb.CyclePowerRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.CyclePowerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_CyclePowerRequest(buffer_arg) {
  return bosdyn_api_spot_cam_power_pb.CyclePowerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_CyclePowerResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_power_pb.CyclePowerResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.CyclePowerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_CyclePowerResponse(buffer_arg) {
  return bosdyn_api_spot_cam_power_pb.CyclePowerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_DebugRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.DebugRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.DebugRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_DebugRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.DebugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_DebugResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.DebugResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.DebugResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_DebugResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.DebugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_DeleteRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.DeleteRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_DeleteRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_DeleteResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.DeleteResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_DeleteResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_DeleteSoundRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.DeleteSoundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_DeleteSoundRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_DeleteSoundResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.DeleteSoundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_DeleteSoundResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_EnableCongestionControlRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.EnableCongestionControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_EnableCongestionControlRequest(buffer_arg) {
  return bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_EnableCongestionControlResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.EnableCongestionControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_EnableCongestionControlResponse(buffer_arg) {
  return bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetAudioCaptureChannelRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetAudioCaptureChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetAudioCaptureChannelRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetAudioCaptureChannelResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetAudioCaptureChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetAudioCaptureChannelResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetAudioCaptureGainRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetAudioCaptureGainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetAudioCaptureGainRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetAudioCaptureGainResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetAudioCaptureGainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetAudioCaptureGainResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetBITStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_health_pb.GetBITStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetBITStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetBITStatusRequest(buffer_arg) {
  return bosdyn_api_spot_cam_health_pb.GetBITStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetBITStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_health_pb.GetBITStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetBITStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetBITStatusResponse(buffer_arg) {
  return bosdyn_api_spot_cam_health_pb.GetBITStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetICEConfigurationRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetICEConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetICEConfigurationRequest(buffer_arg) {
  return bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetICEConfigurationResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetICEConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetICEConfigurationResponse(buffer_arg) {
  return bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetIrColormapRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetIrColormapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetIrColormapRequest(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetIrColormapResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetIrColormapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetIrColormapResponse(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetLEDBrightnessRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetLEDBrightnessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetLEDBrightnessRequest(buffer_arg) {
  return bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetLEDBrightnessResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetLEDBrightnessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetLEDBrightnessResponse(buffer_arg) {
  return bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetPowerStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetPowerStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetPowerStatusRequest(buffer_arg) {
  return bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetPowerStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetPowerStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetPowerStatusResponse(buffer_arg) {
  return bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetPtzPositionRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetPtzPositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetPtzPositionRequest(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetPtzPositionResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetPtzPositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetPtzPositionResponse(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetPtzVelocityRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetPtzVelocityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetPtzVelocityRequest(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetPtzVelocityResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetPtzVelocityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetPtzVelocityResponse(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetScreenRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.GetScreenRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetScreenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetScreenRequest(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.GetScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetScreenResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.GetScreenResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetScreenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetScreenResponse(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.GetScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetSoftwareVersionRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetSoftwareVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetSoftwareVersionRequest(buffer_arg) {
  return bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetSoftwareVersionResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetSoftwareVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetSoftwareVersionResponse(buffer_arg) {
  return bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.GetStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetStatusRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.GetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.GetStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetStatusResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.GetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetStreamParamsRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetStreamParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetStreamParamsRequest(buffer_arg) {
  return bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetStreamParamsResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetStreamParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetStreamParamsResponse(buffer_arg) {
  return bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetSystemLogRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_health_pb.GetSystemLogRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetSystemLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetSystemLogRequest(buffer_arg) {
  return bosdyn_api_spot_cam_health_pb.GetSystemLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetSystemLogResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_health_pb.GetSystemLogResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetSystemLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetSystemLogResponse(buffer_arg) {
  return bosdyn_api_spot_cam_health_pb.GetSystemLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetTemperatureRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_health_pb.GetTemperatureRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetTemperatureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetTemperatureRequest(buffer_arg) {
  return bosdyn_api_spot_cam_health_pb.GetTemperatureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetTemperatureResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_health_pb.GetTemperatureResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetTemperatureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetTemperatureResponse(buffer_arg) {
  return bosdyn_api_spot_cam_health_pb.GetTemperatureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetVisibleCamerasRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetVisibleCamerasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetVisibleCamerasRequest(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetVisibleCamerasResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetVisibleCamerasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetVisibleCamerasResponse(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetVolumeRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.GetVolumeRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetVolumeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetVolumeRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.GetVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_GetVolumeResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.GetVolumeResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.GetVolumeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_GetVolumeResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.GetVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_InitializeLensRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.InitializeLensRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_InitializeLensRequest(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_InitializeLensResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.InitializeLensResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_InitializeLensResponse(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListCamerasRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.ListCamerasRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListCamerasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListCamerasRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.ListCamerasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListCamerasResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.ListCamerasResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListCamerasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListCamerasResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.ListCamerasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListLogpointsRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListLogpointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListLogpointsRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListLogpointsResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListLogpointsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListLogpointsResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListPtzRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.ListPtzRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListPtzRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListPtzRequest(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.ListPtzRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListPtzResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.ListPtzResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListPtzResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListPtzResponse(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.ListPtzResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListScreensRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.ListScreensRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListScreensRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListScreensRequest(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.ListScreensRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListScreensResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.ListScreensResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListScreensResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListScreensResponse(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.ListScreensResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListSoundsRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.ListSoundsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListSoundsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListSoundsRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.ListSoundsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_ListSoundsResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.ListSoundsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.ListSoundsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_ListSoundsResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.ListSoundsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_LoadSoundRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.LoadSoundRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.LoadSoundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_LoadSoundRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.LoadSoundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_LoadSoundResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.LoadSoundResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.LoadSoundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_LoadSoundResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.LoadSoundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_PlaySoundRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.PlaySoundRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.PlaySoundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_PlaySoundRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.PlaySoundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_PlaySoundResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.PlaySoundResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.PlaySoundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_PlaySoundResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.PlaySoundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_RetrieveRawDataRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.RetrieveRawDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_RetrieveRawDataRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_RetrieveRawDataResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.RetrieveRawDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_RetrieveRawDataResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_RetrieveRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.RetrieveRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.RetrieveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_RetrieveRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.RetrieveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_RetrieveResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.RetrieveResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.RetrieveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_RetrieveResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.RetrieveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetAudioCaptureChannelRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetAudioCaptureChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetAudioCaptureChannelRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetAudioCaptureChannelResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetAudioCaptureChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetAudioCaptureChannelResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetAudioCaptureGainRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetAudioCaptureGainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetAudioCaptureGainRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetAudioCaptureGainResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetAudioCaptureGainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetAudioCaptureGainResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetICEConfigurationRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetICEConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetICEConfigurationRequest(buffer_arg) {
  return bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetICEConfigurationResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetICEConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetICEConfigurationResponse(buffer_arg) {
  return bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetIrColormapRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetIrColormapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetIrColormapRequest(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetIrColormapResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetIrColormapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetIrColormapResponse(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetIrMeterOverlayRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetIrMeterOverlayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetIrMeterOverlayRequest(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetIrMeterOverlayResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetIrMeterOverlayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetIrMeterOverlayResponse(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetLEDBrightnessRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetLEDBrightnessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetLEDBrightnessRequest(buffer_arg) {
  return bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetLEDBrightnessResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetLEDBrightnessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetLEDBrightnessResponse(buffer_arg) {
  return bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetPassphraseRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetPassphraseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetPassphraseRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetPassphraseResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetPassphraseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetPassphraseResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetPowerStatusRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetPowerStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetPowerStatusRequest(buffer_arg) {
  return bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetPowerStatusResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetPowerStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetPowerStatusResponse(buffer_arg) {
  return bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetPtzPositionRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetPtzPositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetPtzPositionRequest(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetPtzPositionResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetPtzPositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetPtzPositionResponse(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetPtzVelocityRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetPtzVelocityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetPtzVelocityRequest(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetPtzVelocityResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetPtzVelocityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetPtzVelocityResponse(buffer_arg) {
  return bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetScreenRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.SetScreenRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetScreenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetScreenRequest(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.SetScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetScreenResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_compositor_pb.SetScreenResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetScreenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetScreenResponse(buffer_arg) {
  return bosdyn_api_spot_cam_compositor_pb.SetScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetStreamParamsRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetStreamParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetStreamParamsRequest(buffer_arg) {
  return bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetStreamParamsResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetStreamParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetStreamParamsResponse(buffer_arg) {
  return bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetVolumeRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.SetVolumeRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetVolumeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetVolumeRequest(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.SetVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_SetVolumeResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_audio_pb.SetVolumeResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.SetVolumeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_SetVolumeResponse(buffer_arg) {
  return bosdyn_api_spot_cam_audio_pb.SetVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_StoreRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.StoreRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.StoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_StoreRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.StoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_StoreResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.StoreResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.StoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_StoreResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.StoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_TagRequest(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.TagRequest)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.TagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_TagRequest(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.TagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bosdyn_api_spot_cam_TagResponse(arg) {
  if (!(arg instanceof bosdyn_api_spot_cam_logging_pb.TagResponse)) {
    throw new Error('Expected argument of type bosdyn.api.spot_cam.TagResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bosdyn_api_spot_cam_TagResponse(buffer_arg) {
  return bosdyn_api_spot_cam_logging_pb.TagResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Change the layout of of the video stream between available presets.
var CompositorServiceService = exports.CompositorServiceService = {
  // SetScreen changes the current view that is streamed over the network
setScreen: {
    path: '/bosdyn.api.spot_cam.CompositorService/SetScreen',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_compositor_pb.SetScreenRequest,
    responseType: bosdyn_api_spot_cam_compositor_pb.SetScreenResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetScreenRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetScreenRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetScreenResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetScreenResponse,
  },
  // GetScreen returns the currently-selected screen
getScreen: {
    path: '/bosdyn.api.spot_cam.CompositorService/GetScreen',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_compositor_pb.GetScreenRequest,
    responseType: bosdyn_api_spot_cam_compositor_pb.GetScreenResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetScreenRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetScreenRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetScreenResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetScreenResponse,
  },
  // ListScreens returns a list of available screens
listScreens: {
    path: '/bosdyn.api.spot_cam.CompositorService/ListScreens',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_compositor_pb.ListScreensRequest,
    responseType: bosdyn_api_spot_cam_compositor_pb.ListScreensResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_ListScreensRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_ListScreensRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_ListScreensResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_ListScreensResponse,
  },
  // GetVisibleCameras returns a list of currently visible windows, with any available metadata
getVisibleCameras: {
    path: '/bosdyn.api.spot_cam.CompositorService/GetVisibleCameras',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest,
    responseType: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetVisibleCamerasRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetVisibleCamerasRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetVisibleCamerasResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetVisibleCamerasResponse,
  },
  // set the mapping between radiometric IR samples to color, for video
setIrColormap: {
    path: '/bosdyn.api.spot_cam.CompositorService/SetIrColormap',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest,
    responseType: bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetIrColormapRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetIrColormapRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetIrColormapResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetIrColormapResponse,
  },
  // get the mapping between radiometric IR samples to color, for video
getIrColormap: {
    path: '/bosdyn.api.spot_cam.CompositorService/GetIrColormap',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest,
    responseType: bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetIrColormapRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetIrColormapRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetIrColormapResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetIrColormapResponse,
  },
  // apply settings for the 'ir meter overlay'
setIrMeterOverlay: {
    path: '/bosdyn.api.spot_cam.CompositorService/SetIrMeterOverlay',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest,
    responseType: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetIrMeterOverlayRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetIrMeterOverlayRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetIrMeterOverlayResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetIrMeterOverlayResponse,
  },
};

exports.CompositorServiceClient = grpc.makeGenericClientConstructor(CompositorServiceService);
// Set quality parameters for the stream, such as compression and image postprocessing settings.
var StreamQualityServiceService = exports.StreamQualityServiceService = {
  setStreamParams: {
    path: '/bosdyn.api.spot_cam.StreamQualityService/SetStreamParams',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest,
    responseType: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetStreamParamsRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetStreamParamsRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetStreamParamsResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetStreamParamsResponse,
  },
  getStreamParams: {
    path: '/bosdyn.api.spot_cam.StreamQualityService/GetStreamParams',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest,
    responseType: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetStreamParamsRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetStreamParamsRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetStreamParamsResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetStreamParamsResponse,
  },
  enableCongestionControl: {
    path: '/bosdyn.api.spot_cam.StreamQualityService/EnableCongestionControl',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest,
    responseType: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_EnableCongestionControlRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_EnableCongestionControlRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_EnableCongestionControlResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_EnableCongestionControlResponse,
  },
};

exports.StreamQualityServiceClient = grpc.makeGenericClientConstructor(StreamQualityServiceService);
// Turn hardware components' power on or off.
var PowerServiceService = exports.PowerServiceService = {
  // Turn components' power on or off. This should not be used to power cycle a component
// Turning PTZ power off for too long will cause the video stream to fail
setPowerStatus: {
    path: '/bosdyn.api.spot_cam.PowerService/SetPowerStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest,
    responseType: bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetPowerStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetPowerStatusRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetPowerStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetPowerStatusResponse,
  },
  // Get current status of a component
getPowerStatus: {
    path: '/bosdyn.api.spot_cam.PowerService/GetPowerStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest,
    responseType: bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetPowerStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetPowerStatusRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetPowerStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetPowerStatusResponse,
  },
  // Cycle power for a component
cyclePower: {
    path: '/bosdyn.api.spot_cam.PowerService/CyclePower',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_power_pb.CyclePowerRequest,
    responseType: bosdyn_api_spot_cam_power_pb.CyclePowerResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_CyclePowerRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_CyclePowerRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_CyclePowerResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_CyclePowerResponse,
  },
};

exports.PowerServiceClient = grpc.makeGenericClientConstructor(PowerServiceService);
// Change the brightness level of individual LEDs.
var LightingServiceService = exports.LightingServiceService = {
  setLEDBrightness: {
    path: '/bosdyn.api.spot_cam.LightingService/SetLEDBrightness',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest,
    responseType: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetLEDBrightnessRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetLEDBrightnessRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetLEDBrightnessResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetLEDBrightnessResponse,
  },
  getLEDBrightness: {
    path: '/bosdyn.api.spot_cam.LightingService/GetLEDBrightness',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest,
    responseType: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetLEDBrightnessRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetLEDBrightnessRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetLEDBrightnessResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetLEDBrightnessResponse,
  },
};

exports.LightingServiceClient = grpc.makeGenericClientConstructor(LightingServiceService);
// Trigger data acquisitions, and retrieve resulting data.
var MediaLogServiceService = exports.MediaLogServiceService = {
  // Store queues up a Logpoint, which is a bit of media that the user wishes to store to disk
// (still images are supported for now, more media types will be supported in the future)
store: {
    path: '/bosdyn.api.spot_cam.MediaLogService/Store',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_logging_pb.StoreRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.StoreResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_StoreRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_StoreRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_StoreResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_StoreResponse,
  },
  // GetStatus reads the 'name' field of the Logpoint contained in GetStatusRequest, and fills in
// the rest of the fields. Mainly useful for getting the 'state' of the logpoint.
getStatus: {
    path: '/bosdyn.api.spot_cam.MediaLogService/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_logging_pb.GetStatusRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.GetStatusResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetStatusRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetStatusResponse,
  },
  // Tag updates the 'tag' field of the Logpoint that's passed, which must exist.
tag: {
    path: '/bosdyn.api.spot_cam.MediaLogService/Tag',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_logging_pb.TagRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.TagResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_TagRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_TagRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_TagResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_TagResponse,
  },
  // EnableDebug starts the periodic logging of health data to the database; this increases disk utilization, but will record data that is useful post-mortum
enableDebug: {
    path: '/bosdyn.api.spot_cam.MediaLogService/EnableDebug',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_logging_pb.DebugRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.DebugResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_DebugRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_DebugRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_DebugResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_DebugResponse,
  },
  // ListCameras returns a list of strings that identify valid cameras for logging
listCameras: {
    path: '/bosdyn.api.spot_cam.MediaLogService/ListCameras',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_logging_pb.ListCamerasRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.ListCamerasResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_ListCamerasRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_ListCamerasRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_ListCamerasResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_ListCamerasResponse,
  },
  // Retrieve returns all raw data associated with a given logpoint
retrieveRawData: {
    path: '/bosdyn.api.spot_cam.MediaLogService/RetrieveRawData',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_RetrieveRawDataRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_RetrieveRawDataRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_RetrieveRawDataResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_RetrieveRawDataResponse,
  },
  // Retrieve returns all data associated with a given logpoint
retrieve: {
    path: '/bosdyn.api.spot_cam.MediaLogService/Retrieve',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_spot_cam_logging_pb.RetrieveRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.RetrieveResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_RetrieveRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_RetrieveRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_RetrieveResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_RetrieveResponse,
  },
  // Delete removes a Logpoint from the system
delete: {
    path: '/bosdyn.api.spot_cam.MediaLogService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_logging_pb.DeleteRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.DeleteResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_DeleteRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_DeleteRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_DeleteResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_DeleteResponse,
  },
  // ListLogpoints returns a list of all logpoints in the database.
// Warning: this may be a lot of data.
listLogpoints: {
    path: '/bosdyn.api.spot_cam.MediaLogService/ListLogpoints',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_ListLogpointsRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_ListLogpointsRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_ListLogpointsResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_ListLogpointsResponse,
  },
  // SetPassphrase sets the eCryptFS passphrase used by the filesystem.
// there is no symmetry here, because key material is write-only
// This rpc is now deprecated as of the switch from EXT4 to NTFS and returns UnimplementedError
setPassphrase: {
    path: '/bosdyn.api.spot_cam.MediaLogService/SetPassphrase',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest,
    responseType: bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetPassphraseRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetPassphraseRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetPassphraseResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetPassphraseResponse,
  },
};

exports.MediaLogServiceClient = grpc.makeGenericClientConstructor(MediaLogServiceService);
// Control real and virtual ptz mechanisms.
var PtzServiceService = exports.PtzServiceService = {
  // SetPosition points the referenced camera to a given vector (in PTZ-space)
setPtzPosition: {
    path: '/bosdyn.api.spot_cam.PtzService/SetPtzPosition',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest,
    responseType: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetPtzPositionRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetPtzPositionRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetPtzPositionResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetPtzPositionResponse,
  },
  // GetPosition returns the current settings of the referenced camera
getPtzPosition: {
    path: '/bosdyn.api.spot_cam.PtzService/GetPtzPosition',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest,
    responseType: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetPtzPositionRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetPtzPositionRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetPtzPositionResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetPtzPositionResponse,
  },
  setPtzVelocity: {
    path: '/bosdyn.api.spot_cam.PtzService/SetPtzVelocity',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest,
    responseType: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetPtzVelocityRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetPtzVelocityRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetPtzVelocityResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetPtzVelocityResponse,
  },
  getPtzVelocity: {
    path: '/bosdyn.api.spot_cam.PtzService/GetPtzVelocity',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest,
    responseType: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetPtzVelocityRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetPtzVelocityRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetPtzVelocityResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetPtzVelocityResponse,
  },
  listPtz: {
    path: '/bosdyn.api.spot_cam.PtzService/ListPtz',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_ptz_pb.ListPtzRequest,
    responseType: bosdyn_api_spot_cam_ptz_pb.ListPtzResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_ListPtzRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_ListPtzRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_ListPtzResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_ListPtzResponse,
  },
  // Reinitializes PTZ autofocus
initializeLens: {
    path: '/bosdyn.api.spot_cam.PtzService/InitializeLens',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest,
    responseType: bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_InitializeLensRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_InitializeLensRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_InitializeLensResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_InitializeLensResponse,
  },
};

exports.PtzServiceClient = grpc.makeGenericClientConstructor(PtzServiceService);
// Upload and play sounds over the SpotCam's speakers.
var AudioServiceService = exports.AudioServiceService = {
  // Given a soundRequest that identifies a single sound present in the system's sound effects table, PlaySound executes the sound effect.
playSound: {
    path: '/bosdyn.api.spot_cam.AudioService/PlaySound',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.PlaySoundRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.PlaySoundResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_PlaySoundRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_PlaySoundRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_PlaySoundResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_PlaySoundResponse,
  },
  // LoadSound loads a sound effect into the system's sound table. The stream must contain a wav file, with a RIFF header describing it.
// The arguement is a stream, to allow for sounds that are bigger then the MTU of the network; in this case, the complete stream must
// contain the entire sound. If the stream ends early, an error will be returned. The header and sound fields of the entire stream must
// be the same.
loadSound: {
    path: '/bosdyn.api.spot_cam.AudioService/LoadSound',
    requestStream: true,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.LoadSoundRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_LoadSoundRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_LoadSoundRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_LoadSoundResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_LoadSoundResponse,
  },
  // Delete the sound identified in the argument from the system's sound table.
deleteSound: {
    path: '/bosdyn.api.spot_cam.AudioService/DeleteSound',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_DeleteSoundRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_DeleteSoundRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_DeleteSoundResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_DeleteSoundResponse,
  },
  // ListSounds returns a list of all of the sound effects that the system knows about.
listSounds: {
    path: '/bosdyn.api.spot_cam.AudioService/ListSounds',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.ListSoundsRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.ListSoundsResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_ListSoundsRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_ListSoundsRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_ListSoundsResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_ListSoundsResponse,
  },
  // Set the overall volume level for playing sounds.
setVolume: {
    path: '/bosdyn.api.spot_cam.AudioService/SetVolume',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.SetVolumeRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.SetVolumeResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetVolumeRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetVolumeRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetVolumeResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetVolumeResponse,
  },
  // Set the overall volume level for playing sounds.
getVolume: {
    path: '/bosdyn.api.spot_cam.AudioService/GetVolume',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.GetVolumeRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.GetVolumeResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetVolumeRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetVolumeRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetVolumeResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetVolumeResponse,
  },
  setAudioCaptureChannel: {
    path: '/bosdyn.api.spot_cam.AudioService/SetAudioCaptureChannel',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetAudioCaptureChannelRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetAudioCaptureChannelRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetAudioCaptureChannelResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetAudioCaptureChannelResponse,
  },
  getAudioCaptureChannel: {
    path: '/bosdyn.api.spot_cam.AudioService/GetAudioCaptureChannel',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetAudioCaptureChannelRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetAudioCaptureChannelRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetAudioCaptureChannelResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetAudioCaptureChannelResponse,
  },
  setAudioCaptureGain: {
    path: '/bosdyn.api.spot_cam.AudioService/SetAudioCaptureGain',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetAudioCaptureGainRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetAudioCaptureGainRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetAudioCaptureGainResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetAudioCaptureGainResponse,
  },
  getAudioCaptureGain: {
    path: '/bosdyn.api.spot_cam.AudioService/GetAudioCaptureGain',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest,
    responseType: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetAudioCaptureGainRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetAudioCaptureGainRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetAudioCaptureGainResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetAudioCaptureGainResponse,
  },
};

exports.AudioServiceClient = grpc.makeGenericClientConstructor(AudioServiceService);
// Query temperature and built-in test results.
var HealthServiceService = exports.HealthServiceService = {
  // GetTemperature returns a list of thermometers in the system, and the temperature that they measure.
getTemperature: {
    path: '/bosdyn.api.spot_cam.HealthService/GetTemperature',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_health_pb.GetTemperatureRequest,
    responseType: bosdyn_api_spot_cam_health_pb.GetTemperatureResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetTemperatureRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetTemperatureRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetTemperatureResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetTemperatureResponse,
  },
  // GetBitStatus returns two lists; a list of system events, and a list of ways that the system is degraded;
// for instance, a degredation may include a missing PTZ unit, or a missing USB storage device.
getBITStatus: {
    path: '/bosdyn.api.spot_cam.HealthService/GetBITStatus',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_health_pb.GetBITStatusRequest,
    responseType: bosdyn_api_spot_cam_health_pb.GetBITStatusResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetBITStatusRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetBITStatusRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetBITStatusResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetBITStatusResponse,
  },
  // ClearBitEvents clears out the events list of the BITStatus structure.
clearBITEvents: {
    path: '/bosdyn.api.spot_cam.HealthService/ClearBITEvents',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest,
    responseType: bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_ClearBITEventsRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_ClearBITEventsRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_ClearBITEventsResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_ClearBITEventsResponse,
  },
  // GetSystemLog retrieves an encrypted log of system events, for factory diagnosis of possible issues.
// The data streamed back should be concatenated to a single file, before sending to the manufacturer.
getSystemLog: {
    path: '/bosdyn.api.spot_cam.HealthService/GetSystemLog',
    requestStream: false,
    responseStream: true,
    requestType: bosdyn_api_spot_cam_health_pb.GetSystemLogRequest,
    responseType: bosdyn_api_spot_cam_health_pb.GetSystemLogResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetSystemLogRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetSystemLogRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetSystemLogResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetSystemLogResponse,
  },
};

exports.HealthServiceClient = grpc.makeGenericClientConstructor(HealthServiceService);
// Modify or query network settings of the SpotCam and ICE resolution servers.
var NetworkServiceService = exports.NetworkServiceService = {
  // SetICEConfiguration sets up parameters for ICE, including addresses for STUN and TURN services
setICEConfiguration: {
    path: '/bosdyn.api.spot_cam.NetworkService/SetICEConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest,
    responseType: bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_SetICEConfigurationRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_SetICEConfigurationRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_SetICEConfigurationResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_SetICEConfigurationResponse,
  },
  // GetICEConfiguration retrieves currently set parameters for ICE, including addresses for STUN and TURN services
getICEConfiguration: {
    path: '/bosdyn.api.spot_cam.NetworkService/GetICEConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest,
    responseType: bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetICEConfigurationRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetICEConfigurationRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetICEConfigurationResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetICEConfigurationResponse,
  },
};

exports.NetworkServiceClient = grpc.makeGenericClientConstructor(NetworkServiceService);
// Query the version of the software release running on the SpotCam.
var VersionServiceService = exports.VersionServiceService = {
  getSoftwareVersion: {
    path: '/bosdyn.api.spot_cam.VersionService/GetSoftwareVersion',
    requestStream: false,
    responseStream: false,
    requestType: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest,
    responseType: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse,
    requestSerialize: serialize_bosdyn_api_spot_cam_GetSoftwareVersionRequest,
    requestDeserialize: deserialize_bosdyn_api_spot_cam_GetSoftwareVersionRequest,
    responseSerialize: serialize_bosdyn_api_spot_cam_GetSoftwareVersionResponse,
    responseDeserialize: deserialize_bosdyn_api_spot_cam_GetSoftwareVersionResponse,
  },
};

exports.VersionServiceClient = grpc.makeGenericClientConstructor(VersionServiceService);
