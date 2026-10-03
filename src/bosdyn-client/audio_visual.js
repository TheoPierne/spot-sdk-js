/**
 * @file Client for the audio visual service: the behaviors of the lights and of the sounds of the robot.
 */

'use strict';

const { BoolValue, FloatValue } = require('google-protobuf/google/protobuf/wrappers_pb');
const {
  BaseClient,
  commonHeaderErrors,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
  errorFactory,
} = require('./common');
const { BosdynError, ResponseError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { DefaultDict } = require('./util');

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

/**
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 * @typedef {import('../bosdyn/api/audio_visual_pb').ListBehaviorsResponse} ListBehaviorsResponse
 */

/** General class of errors for AudioVisual service. */
class AudioVisualResponseError extends ResponseError {}
/** Client has not done timesync with robot. */
class NoTimeSyncError extends BosdynError {}
/** The specified behavior does not exist. */
class DoesNotExistError extends AudioVisualResponseError {}
/** Permanent behaviors cannot be modified or deleted. */
class PermanentBehaviorError extends AudioVisualResponseError {}
/** The specified end_time has already expired. */
class BehaviorExpiredError extends AudioVisualResponseError {}
/** The request contained a behavior with invalid fields. */
class InvalidBehaviorError extends AudioVisualResponseError {}
/** The behavior cannot be stopped because a different client is running it. */
class InvalidClientError extends AudioVisualResponseError {}

const _LOGGER = LoggerUtil.getLogger('audio_visual');

/**
 * @typedef {import('../bosdyn/api/audio_visual_pb').DeleteBehaviorsResponse} DeleteBehaviorsResponse
 */

/**
 * Client for calling the Audio Visual Service.
 * @extends {BaseClient<AudioVisualServiceClient>}
 */
class AudioVisualClient extends BaseClient {
  static defaultServiceName = 'audio-visual';
  static serviceType = 'bosdyn.api.AudioVisualService';

  constructor() {
    super(AudioVisualServiceClient);
    /**
     * @type {import('./time_sync').TimeSyncEndpoint|null}
     */
    this._timesyncEndpoint = null;
  }

  /**
   * Update instance from another object.
   *
   * @param {import('./robot').Robot} other
   */
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
   * @param {TimeSyncEndpoint} timesyncEndpoint Timesync endpoint.
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
   * @returns {Promise<LiveAudioVisualBehavior[]>}
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
   * The parameters left null are not changed; like Python, false and 0 are values (they were ignored).
   * @param {Object} systemParams
   * @param {boolean} [systemParams.enabled] System is enabled or disabled (boolean).
   * @param {number} [systemParams.maxBrightness] New maxBrightness value [0, 1].
   * @param {number} [systemParams.buzzerMaxVolume] New buzzerMaxVolume value [0, 1].
   * @param {number} [systemParams.speakerMaxVolume] New speakerMaxVolume value [0, 1].
   * @param {PresetColorAssociation|PresetColorAssociation.PredefinedColor} [systemParams.normalColorAssociation] The
   * color to associate with the normal color preset.
   * @param {PresetColorAssociation|PresetColorAssociation.PredefinedColor} [systemParams.warningColorAssociation] The
   * color to associate with the warning color preset.
   * @param {PresetColorAssociation|PresetColorAssociation.PredefinedColor} [systemParams.dangerColorAssociation] The
   * color to associate with the danger color preset.
   * @param {boolean} [systemParams.speakerDisableAgc] Disable automatic gain control on speaker audio (boolean).
   * @param {boolean} [systemParams.speakerDisableNr] Disable noise reduction on speaker audio (boolean).
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
      speakerDisableAgc = null,
      speakerDisableNr = null,
    } = {},
    args = {},
  ) {
    const req = new SetSystemParamsRequest();
    if (enabled !== null && enabled !== undefined) {
      req.setEnabled(new BoolValue().setValue(enabled));
    }
    if (maxBrightness !== null && maxBrightness !== undefined) {
      req.setMaxBrightness(new FloatValue().setValue(maxBrightness));
    }
    if (buzzerMaxVolume !== null && buzzerMaxVolume !== undefined) {
      req.setBuzzerMaxVolume(new FloatValue().setValue(buzzerMaxVolume));
    }
    if (speakerMaxVolume !== null && speakerMaxVolume !== undefined) {
      // Not in every version of the protos (the published audio_visual.proto of 5.1.4 has no such field).
      if (typeof req.setSpeakerMaxVolume !== 'function') {
        throw new TypeError('SetSystemParamsRequest has no speaker_max_volume field in these protos.');
      }
      req.setSpeakerMaxVolume(new FloatValue().setValue(speakerMaxVolume));
    }
    if (normalColorAssociation !== null && normalColorAssociation !== undefined) {
      req.setNormalColorAssociation(_presetColorAssociation(normalColorAssociation));
    }
    if (warningColorAssociation !== null && warningColorAssociation !== undefined) {
      req.setWarningColorAssociation(_presetColorAssociation(warningColorAssociation));
    }
    if (dangerColorAssociation !== null && dangerColorAssociation !== undefined) {
      req.setDangerColorAssociation(_presetColorAssociation(dangerColorAssociation));
    }
    if (speakerDisableAgc !== null && speakerDisableAgc !== undefined) {
      req.setSpeakerDisableAgc(new BoolValue().setValue(speakerDisableAgc));
    }
    if (speakerDisableNr !== null && speakerDisableNr !== undefined) {
      req.setSpeakerDisableNr(new BoolValue().setValue(speakerDisableNr));
    }

    return this.call(this._stub.setSystemParams, req, null, commonHeaderErrors, false, args);
  }

  /**
   * @param {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} timestamp
   * @param {import('./time_sync').TimeSyncEndpoint} timesyncEndpoint
   * @returns {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp}
   */
  _timestampToRobotTime(timestamp, timesyncEndpoint = null) {
    /** @type {import('../bosdyn-core/util').RobotTimeConverter} */
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

/**
 * A PresetColorAssociation (like Python), or the PredefinedColor to associate (the former JavaScript API).
 * @param {PresetColorAssociation|number} association
 * @returns {PresetColorAssociation}
 * @private
 */
function _presetColorAssociation(association) {
  return association instanceof PresetColorAssociation
    ? association
    : new PresetColorAssociation().setColorName(association);
}

/**
 * @param {ListBehaviorsResponse} response
 * @returns {LiveAudioVisualBehavior[]}
 * @private
 */
function _getBehaviorList(response) {
  return response.getBehaviorsList();
}

/**
 * @param {AddOrModifyBehaviorResponse} response
 * @returns {LiveAudioVisualBehavior}
 * @private
 */
function _getLiveBehavior(response) {
  return response.getLiveBehavior();
}

/**
 * @param {DeleteBehaviorsResponse} response
 * @returns {LiveAudioVisualBehavior[]}
 * @private
 */
function _getDeletedBehaviors(response) {
  return response.getDeletedBehaviorsList();
}

const _AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR = DefaultDict(() => [AudioVisualResponseError, null]);
_AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR.set(RunBehaviorResponse.Status.STATUS_SUCCESS, [null, null]);
_AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR.set(RunBehaviorResponse.Status.STATUS_DOES_NOT_EXIST, [
  DoesNotExistError,
  'The specified behavior does not exist.',
]);
_AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR.set(RunBehaviorResponse.Status.STATUS_EXPIRED, [
  BehaviorExpiredError,
  'The specified end_time has already expired.',
]);

const _AUDIO_VISUAL_STOP_BEHAVIOR_STATUS_TO_ERROR = DefaultDict(() => [AudioVisualResponseError, null]);
_AUDIO_VISUAL_STOP_BEHAVIOR_STATUS_TO_ERROR.set(StopBehaviorResponse.Status.STATUS_SUCCESS, [null, null]);
_AUDIO_VISUAL_STOP_BEHAVIOR_STATUS_TO_ERROR.set(StopBehaviorResponse.Status.STATUS_INVALID_CLIENT, [
  InvalidClientError,
  'The behavior cannot be stopped because a different client is running it.',
]);

const _AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR = DefaultDict(() => [AudioVisualResponseError, null]);
_AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR.set(AddOrModifyBehaviorResponse.Status.STATUS_SUCCESS, [
  null,
  null,
]);
_AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR.set(AddOrModifyBehaviorResponse.Status.STATUS_INVALID, [
  InvalidBehaviorError,
  'The request contained a behavior with invalid fields.',
]);
_AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR.set(AddOrModifyBehaviorResponse.Status.STATUS_MODIFY_PERMANENT, [
  PermanentBehaviorError,
  'Permanent behaviors cannot be modified or deleted.',
]);

const _AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR = DefaultDict(() => [AudioVisualResponseError, null]);
_AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR.set(DeleteBehaviorsResponse.Status.STATUS_SUCCESS, [null, null]);
_AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR.set(DeleteBehaviorsResponse.Status.STATUS_DOES_NOT_EXIST, [
  DoesNotExistError,
  'The specified behavior does not exist.',
]);
_AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR.set(DeleteBehaviorsResponse.Status.STATUS_DELETE_PERMANENT, [
  PermanentBehaviorError,
  'Permanent behaviors cannot be modified or deleted.',
]);

const _runBehaviorError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      RunBehaviorResponse.Status,
      _AUDIO_VISUAL_RUN_BEHAVIOR_STATUS_TO_ERROR,
    ),
  ),
);

const _stopBehaviorError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      StopBehaviorResponse.Status,
      _AUDIO_VISUAL_STOP_BEHAVIOR_STATUS_TO_ERROR,
    ),
  ),
);

const _addOrModifyBehaviorError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      AddOrModifyBehaviorResponse.Status,
      _AUDIO_VISUAL_ADD_OR_MODIFY_BEHAVIOR_STATUS_TO_ERROR,
    ),
  ),
);

const _deleteBehaviorError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      DeleteBehaviorsResponse.Status,
      _AUDIO_VISUAL_DELETE_BEHAVIORS_STATUS_TO_ERROR,
    ),
  ),
);

/**
 * Clamp and normalize the colors of every LED.
 * @param {LedSequenceGroup} ledSequenceGroup The sequences, modified.
 * @returns {LedSequenceGroup}
 */
function checkColor(ledSequenceGroup) {
  // The LED fields. Python gets a 'center' field, which does not exist: its front_center colors are not clamped.
  const leds = ['FrontCenter', 'FrontLeft', 'FrontRight', 'HindLeft', 'HindRight'];
  for (const led of leds) {
    /** @type {LedSequenceGroup.LedSequence} */
    const ledSequence = ledSequenceGroup[`get${led}`]();
    if (!ledSequence) continue;
    if (ledSequence.hasAnimationSequence()) {
      // Change the color of each frame (it added a frame per frame while iterating: endless, until out of memory).
      for (const frame of ledSequence.getAnimationSequence().getFramesList()) {
        if (frame.hasColor()) {
          frame.setColor(clampAndNormalizeColor(frame.getColor()));
        }
      }
    } else if (ledSequence.hasBlinkSequence()) {
      if (ledSequence.getBlinkSequence().hasColor()) {
        ledSequence.getBlinkSequence().setColor(clampAndNormalizeColor(ledSequence.getBlinkSequence().getColor()));
      }
    } else if (ledSequence.hasPulseSequence()) {
      if (ledSequence.getPulseSequence().hasColor()) {
        ledSequence.getPulseSequence().setColor(clampAndNormalizeColor(ledSequence.getPulseSequence().getColor()));
      }
    } else if (ledSequence.hasSyncedBlinkSequence()) {
      if (ledSequence.getSyncedBlinkSequence().hasColor()) {
        ledSequence
          .getSyncedBlinkSequence()
          .setColor(clampAndNormalizeColor(ledSequence.getSyncedBlinkSequence().getColor()));
      }
    } else if (ledSequence.hasSolidColorSequence()) {
      if (ledSequence.getSolidColorSequence().hasColor()) {
        ledSequence
          .getSolidColorSequence()
          .setColor(clampAndNormalizeColor(ledSequence.getSolidColorSequence().getColor()));
      }
    }
  }

  return ledSequenceGroup;
}

/**
 * Scale color so that their Euclidean norm does not exceed maxColorManitude.
 *
 * Note : maxColorManitude of 255 (roughly 50% of sqrt(3*255^2)=441.67) is a heuristic chosen to prevent damage to the
 * robot's LEDs.
 *
 * Exceeding this value may result in damage to the robot's LEDs that will NOT be covered under warranty.
 *
 * @param {Color} color
 * @param {number} maxColorManitude
 * @returns {Color}
 */
function clampAndNormalizeColor(color, maxColorManitude = 255) {
  const rgb = color.getRgb();
  // A preset color has no RGB value (Python reads 0, 0, 0): nothing to clamp.
  if (!rgb) return color;
  const r = rgb.getR();
  const g = rgb.getG();
  const b = rgb.getB();

  const norm = Math.sqrt(r ** 2 + g ** 2 + b ** 2);
  if (norm > maxColorManitude && norm > 0) {
    const scale = maxColorManitude / norm;
    // The channels are int32: truncated like Python's int() (a float fails the serialization).
    const scaledColor = new Color().setRgb(
      new Color.RGB()
        .setR(Math.trunc(r * scale))
        .setG(Math.trunc(g * scale))
        .setB(Math.trunc(b * scale)),
    );
    _LOGGER.info(
      `Input color ${JSON.stringify(rgb.toObject())} scaled by ${scale.toFixed(2)}. ` +
        `Clamped color: ${JSON.stringify(scaledColor.getRgb().toObject())}.`,
    );
    color = scaledColor;
  }

  return color;
}

module.exports = {
  AudioVisualClient,
  AudioVisualResponseError,
  NoTimeSyncError,
  DoesNotExistError,
  PermanentBehaviorError,
  BehaviorExpiredError,
  InvalidBehaviorError,
  InvalidClientError,
  checkColor,
  clampAndNormalizeColor,
};
