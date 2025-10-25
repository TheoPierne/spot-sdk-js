'use strict';

const { BaseClient, commonHeaderErrors, handleCommonHeaderErrors, handleUnsetStatusError, errorFactory } = require('./common');
const { DefaultDict } = require('./util');
const { ResponseError } = require('./exceptions');

const {
  GetSystemParamsRequest,
  GetSystemParamsResponse,
  LiveAudioVisualBehavior,
  ListBehaviorsRequest,
  RunBehaviorRequest,
  RunBehaviorResponse,
  SetSystemParamsRequest,
  SetSystemParamsResponse,
  StopBehaviorRequest,
  StopBehaviorResponse,
  PresetColorAssociation,
  AddOrModifyBehaviorRequest,
  AudioVisualBehavior,
  DeleteBehaviorsRequest,
  AddOrModifyBehaviorResponse,
  DeleteBehaviorsResponse,
  LedSequenceGroup,
  Color,
} = require('../bosdyn/api/audio_visual_pb');
const { AudioVisualServiceClient } = require('../bosdyn/api/audio_visual_service_grpc_pb');
const { BoolValue, FloatValue } = require('google-protobuf/google/protobuf/wrappers_pb');

class AudioVisualResponseError extends ResponseError {}
class NoTimeSyncError extends Error {}
class DoesNotExistError extends AudioVisualResponseError {}
class PermanentBehaviorError extends AudioVisualResponseError {}
class BehaviorExpiredError extends AudioVisualResponseError {}
class InvalidBehaviorError extends AudioVisualResponseError {}
class InvalidClientError extends AudioVisualResponseError {}

/**
 * Client to authenticate to the robot.
 * @extends {BaseClient<AudioVisualServiceClient>}
 */
class AudioVisualClient extends BaseClient {
  static defaultServiceName = 'audio-visual';
  static serviceType = 'bosdyn.api.AudioVisualService';

  constructor() {
    super(AudioVisualServiceClient);
    this._timesyncEndpoint = null;
  }

  async updateFrom(other) {
    super.updateFrom(other);

    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (err) {
      // pass
    }
  }

  /**
   * Run a behavior on the robot.
   * @param {string} name The name of the behavior to run.
   * @param {number} endTimeSecs The time that this behavior should stop.
   * @param {boolean} restart If this behavior is already running, should we restart it from the beginning.
   * @param {TimesyncEndpoint} timesyncEndpoint Timesync endpoint.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<RunBehaviorResponse>}
   */
  runBehavior(name, endTimeSecs, restart = false, timesyncEndpoint = null, args = {}) {
    const endTime = this._timestampToRobotTime(endTimeSecs, timesyncEndpoint);
    const req = new RunBehaviorRequest().setName(name).setEndTime(endTime).setRestart(restart);
    return this.call(this._stub.runBehavior, req, null, _runBehaviorError, false, args);
  }

  /**
   * Stop a behavior that is currently running.
   * @param {string} name 
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<StopBehaviorResponse>}
   */
  stopBehavior(name, args = {}) {
    const req = new StopBehaviorRequest().setBehaviorName(name);
    return this.call(this._stub.stopBehavior, req, null, _stopBehaviorError, false, args);
  }
  
  /**
   * Add or modify an AudioVisualBehavior.
   * @param {string} name The name of the behavior to add.
   * @param {AudioVisualBehavior} behavior The AudioVisualBehavior proto to add.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<LiveAudioVisualBehavior>}
   */
  addOrModifyBehavior(name, behavior, args = {}) {
    const ledSequenceGroup = behavior.getLedSequenceGroup() || null;
    
    if (ledSequenceGroup) {
      behavior.setLedSequenceGroup(checkColor(ledSequenceGroup));
    }
    
    const req = new AddOrModifyBehaviorRequest().setName(name).setBehavior(behavior);
    return this.call(this._stub.addOrModifyBehavior, req, _getLiveBehavior, _addOrModifyBehaviorError, false, args);
  }
  
  /**
   * Delete an AudioVisualBehavior.
   * @param {string[]} behaviorNames A list of behavior names to delete.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<>}
   */
  deleteBehaviors(behaviorNames, args = {}) {
    const req = new DeleteBehaviorsRequest().setBehaviorNamesList(behaviorNames);
    return this.call(this._stub.deleteBehaviors, req, _getDeletedBehaviors, _deleteBehaviorError, false, args);
  }

  /**
   * List all currently added AudioVisualBehaviors.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<LiveAudioVisualBehavior[]>}
   */
  listBehaviors(args = {}) {
    const req = new ListBehaviorsRequest();
    return this.call(this._stub.listBehaviors, req, _getBehaviorList, commonHeaderErrors, false, args);
  }

  /**
   * Get the current system params.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<GetSystemParamsResponse>}
   */
  getSystemParams(args = {}) {
    const req = new GetSystemParamsRequest();
    return this.call(this._stub.getSystemParams, req, null, commonHeaderErrors, false, args);
  }

  /**
   * Set the system params.
   * @param {Object} systemParams
   * @param {boolean} [systemParams.enabled] System is enabled or disabled (boolean).
   * @param {number} [systemParams.maxBrightness] New maxBrightness value [0, 1].
   * @param {number} [systemParams.buzzerMaxVolume] New buzzerMaxVolume value [0, 1].
   * @param {number} [systemParams.speakerMaxVolume] New speakerMaxVolume value [0, 1].
   * @param {PresetColorAssociation.PredefinedColor} [systemParams.normalColorAssociation] The color to associate with the normal color preset.
   * @param {PresetColorAssociation.PredefinedColor} [systemParams.warningColorAssociation] The color to associate with the warning color preset.
   * @param {PresetColorAssociation.PredefinedColor} [systemParams.dangerColorAssociation] The color to associate with the danger color preset.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<SetSystemParamsResponse>}
   */
  setSystemParams(
    {
      enabled = null,
      maxBrightness = null,
      buzzerMaxVolume = null,
      speakerMaxVolume = null,
      normalColorAssociation = null,
      warningColorAssociation = null,
      dangerColorAssociation = null,
    } = {},
    args = {}
  ) {
    const req = new SetSystemParamsRequest();
    if (enabled) {
      req.setEnabled(new BoolValue().setValue(enabled));
    }
    if (maxBrightness) {
      req.setMaxBrightness(new FloatValue().setValue(maxBrightness));
    }
    if (buzzerMaxVolume) {
      req.setBuzzerMaxVolume(new FloatValue().setValue(buzzerMaxVolume));
    }
    if (speakerMaxVolume) {
      req.setSpeakerMaxVolume(new FloatValue().setValue(speakerMaxVolume));
    }
    if (normalColorAssociation) {
      req.setNormalColorAssociation(new PresetColorAssociation().setColorName(normalColorAssociation));
    }
    if (warningColorAssociation) {
      req.setWarningColorAssociation(new PresetColorAssociation().setColorName(warningColorAssociation));
    }
    if (dangerColorAssociation) {
      req.setDangerColorAssociation(new PresetColorAssociation().setColorName(dangerColorAssociation));
    }

    return this.call(this._stub.setSystemParams, req, null, commonHeaderErrors, false, args);
  }

  _timestampToRobotTime(timestamp, timesyncEndpoint = null) {
    let timeConverter = null;
    if (timesyncEndpoint) {
      timeConverter = timesyncEndpoint.getRobotTimeConverter();
    } else if (this._timesyncEndpoint) {
      timeConverter = this._timesyncEndpoint.getRobotTimeConverter();
    } else {
      throw new NoTimeSyncError('No timesync endpoint was passed to audio visual client.');
    }

    return timeConverter.robotTimestampFromLocalSecs(timestamp);
  }
}

function _getBehaviorList(response) {
  return response.getBehaviorsList();
}

function _getLiveBehavior(response) {
  return response.getLiveBehavior();
}

function _getDeletedBehaviors(response) {
  return response.getDeletedBehaviorsList();
}

const _AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR = DefaultDict(() => [AudioVisualResponseError, null]);
_AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR.set(RunBehaviorResponse.Status.STATUS_SUCCESS, [null, null]);
_AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR.set(RunBehaviorResponse.Status.STATUS_DOES_NOT_EXIST, [DoesNotExistError, 'The specified behavior does not exist.']);
_AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR.set(RunBehaviorResponse.Status.STATUS_EXPIRED, [BehaviorExpiredError, 'The specified end_time has already expired.']);

const _AUDIO_VISUAL_STOP_BEHAVIOR_STATUS_TO_ERROR = DefaultDict(() => [AudioVisualResponseError, null]);
_AUDIO_VISUAL_STOP_BEHAVIOR_STATUS_TO_ERROR.set(StopBehaviorResponse.Status.STATUS_SUCCESS, [null, null]);
_AUDIO_VISUAL_STOP_BEHAVIOR_STATUS_TO_ERROR.set(StopBehaviorResponse.Status.STATUS_INVALID_CLIENT, [InvalidClientError, 'The behavior cannot be stopped because a different client is running it.']);

const _AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR = DefaultDict(() => [AudioVisualResponseError, null]);
_AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR.set(AddOrModifyBehaviorResponse.Status.STATUS_SUCCESS, [null, null]);
_AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR.set(AddOrModifyBehaviorResponse.Status.STATUS_INVALID, [InvalidBehaviorError, 'The request contained a behavior with invalid fields.']);
_AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR.set(AddOrModifyBehaviorResponse.Status.STATUS_MODIFY_PERMANENT, [PermanentBehaviorError, 'Permanent behaviors cannot be modified or deleted.']);

const _AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR = DefaultDict(() => [AudioVisualResponseError, null]);
_AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR.set(DeleteBehaviorsResponse.Status.STATUS_SUCCESS, [null, null]);
_AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR.set(DeleteBehaviorsResponse.Status.STATUS_DOES_NOT_EXIST, [DoesNotExistError, 'The specified behavior does not exist.']);
_AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR.set(DeleteBehaviorsResponse.Status.STATUS_DELETE_PERMANENT, [PermanentBehaviorError, 'Permanent behaviors cannot be modified or deleted.']);

const _runBehaviorError = handleCommonHeaderErrors(handleUnsetStatusError('STATUS_UNKNOWN')(response => {
  return errorFactory(response, response.getStatus(), Object.keys(RunBehaviorResponse.Status), _AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR);
}));

const _stopBehaviorError = handleCommonHeaderErrors(handleUnsetStatusError('STATUS_UNKNOWN')(response => {
  return errorFactory(response, response.getStatus(), Object.keys(StopBehaviorResponse.Status), _AUDIO_VISUAL_STOP_BEHAVIOR_STATUS_TO_ERROR);
}));

const _addOrModifyBehaviorError = handleCommonHeaderErrors(handleUnsetStatusError('STATUS_UNKNOWN')(response => {
  return errorFactory(response, response.getStatus(), Object.keys(AddOrModifyBehaviorResponse.Status), _AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR);
}));

const _deleteBehaviorError = handleCommonHeaderErrors(handleUnsetStatusError('STATUS_UNKNOWN')(response => {
  return errorFactory(response, response.getStatus(), Object.keys(DeleteBehaviorsResponse.Status), _AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR);
}));

/**
 * Check every LED
 * @param {LedSequenceGroup} ledSequenceGroup 
 */
function checkColor(ledSequenceGroup) {
  const leds = ["Center", "FrontLeft", "FrontRight", "HindLeft", "HindRight"];
  for (const led of leds) {
    /** @type {LedSequenceGroup.LedSequence} */
    const ledSequence = ledSequenceGroup[`get${led}`]();
    if (ledSequence) {
      if (ledSequence.hasAnimationSequence()) {
        for (const [index, frame] of ledSequence.getAnimationSequence().getFramesList().entries()) {
          if (frame.hasColor()) {
            const color = clampAndNormalizeColor(frame.getColor());
            ledSequence.getAnimationSequence().addFrames(color, index);
          }
        }
      } else if (ledSequence.hasBlinkSequence()) {
        if (ledSequence.getBlinkSequence().hasColor()) {
          ledSequence.getBlinkSequence().setColor(clampAndNormalizeColor(ledSequence.getBlinkSequence().getColor()));
        }
      } else if (ledSequence.hasPulseSequence()) {
        if (ledSequence.getPulseSequence().hasColor()) {
          ledSequence.getBlinkSequence().setColor(clampAndNormalizeColor(ledSequence.getPulseSequence().getColor()));
        }
      } else if (ledSequence.hasSyncedBlinkSequence()) {
        if (ledSequence.getSyncedBlinkSequence().hasColor()) {
          ledSequence.getSyncedBlinkSequence().setColor(clampAndNormalizeColor(ledSequence.getSyncedBlinkSequence().getColor()));
        }
      } else if (ledSequence.hasSolidColorSequence()) {
        if (ledSequence.getSolidColorSequence().hasColor()) {
          ledSequence.getSolidColorSequence().setColor(clampAndNormalizeColor(ledSequence.getSolidColorSequence().getColor()));
        }
      }
    }
  }
  
  return ledSequenceGroup;
}

/**
 * Scale color so that their Euclidean norm does not exceed maxColorManitude.
 * 
 * Note : maxColorManitude of 255 (roughly 50% of sqrt(3*255^2)=441.67) is a heuristic chosen to prevent damage to the robot's LEDs.
 * 
 * Exceeding this value may result in damage to the robot's LEDs that will NOT be covered under warranty.
 * 
 * @param {Color} color 
 * @param {number} maxColorManitude
 * @returns {Color} 
 */
function clampAndNormalizeColor(color, maxColorManitude = 255) {
  const r = color.getRgb().getR();
  const g = color.getRgb().getG();
  const b = color.getRgb().getB();
  
  const norm = Math.sqrt(r**2 + g**2 + b**2);
  if (norm > maxColorManitude && norm > 0) {
    const scale = maxColorManitude / norm;
    const scaledColor = new Color().setRgb(new Color.RGB().setR(r * scale).setG(g * scale).setB(b * scale));
    color = scaledColor;
  }
  
  return color;
}

module.exports = {
  AudioVisualClient,
  AudioVisualResponseError,
  DoesNotExistError,
  PermanentBehaviorError,
  BehaviorExpiredError,
  InvalidBehaviorError,
  InvalidClientError,
};
