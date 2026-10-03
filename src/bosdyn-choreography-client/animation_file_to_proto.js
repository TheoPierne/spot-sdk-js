/**
 * @file A tool to convert animation files into protobuf messages which can be uploaded to the robot and used within
 * choreography sequences.
 */

'use strict';

const { createHash } = require('node:crypto');
const { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } = require('node:fs');
const { basename, join } = require('node:path');
const process = require('node:process');

const argparse = require('argparse');
const jspb = require('google-protobuf');
const {
  DoubleValue,
  Int32Value,
  Int64Value,
  UInt32Value,
  UInt64Value,
  BoolValue,
} = require('google-protobuf/google/protobuf/wrappers_pb');

const {
  controlsOption,
  bpmOption,
  extendableOption,
  truncatableOption,
  neutralStartOption,
  preciseStepsOption,
  preciseTimingOption,
  timingAdjustabilityOption,
  noLoopingOption,
  armRequiredOption,
  armProhibitedOption,
  startsSittingOption,
  trackSwingTrajectoriesOption,
  assumeZeroRollAndPitchOption,
  armPlaybackOption,
  displayRgbOption,
  frequencyOption,
  retimeToIntegerSlicesOption,
  descriptionOption,
  customGaitCycleOption,
  bodyPosHandler,
  comPosHandler,
  bodyEulerRpyAnglesHandler,
  bodyQuaternionXyzwHandler,
  bodyQuaternionWxyzHandler,
  legAnglesHandler,
  footPosHandler,
  handPosHandler,
  handEulerRpyAnglesHandler,
  handQuaternionXyzwHandler,
  handQuaternionWxyzHandler,
  contactHandler,
  armJointsHandler,
  flAnglesHandler,
  frAnglesHandler,
  hlAnglesHandler,
  hrAnglesHandler,
  flPosHandler,
  frPosHandler,
  hlPosHandler,
  hrPosHandler,
  bodyXHandler,
  bodyYHandler,
  bodyZHandler,
  comXHandler,
  comYHandler,
  comZHandler,
  bodyQuatWHandler,
  bodyQuatXHandler,
  bodyQuatYHandler,
  bodyQuatZHandler,
  bodyRollHandler,
  bodyPitchHandler,
  bodyYawHandler,
  flHxHandler,
  flHyHandler,
  flKnHandler,
  frHxHandler,
  frHyHandler,
  frKnHandler,
  hlHxHandler,
  hlHyHandler,
  hlKnHandler,
  hrHxHandler,
  hrHyHandler,
  hrKnHandler,
  flXHandler,
  flYHandler,
  flZHandler,
  frXHandler,
  frYHandler,
  frZHandler,
  hrXHandler,
  hrYHandler,
  hrZHandler,
  hlXHandler,
  hlYHandler,
  hlZHandler,
  flContactHandler,
  frContactHandler,
  hlContactHandler,
  hrContactHandler,
  sh0Handler,
  sh1Handler,
  el0Handler,
  el1Handler,
  wr0Handler,
  wr1Handler,
  handXHandler,
  handYHandler,
  handZHandler,
  handQuatWHandler,
  handQuatXHandler,
  handQuatYHandler,
  handQuatZHandler,
  handRollHandler,
  handPitchHandler,
  handYawHandler,
  gripperHandler,
  startTimeHandler,
  parseFloatStrict,
} = require('./animation_file_conversion_helpers');
const geometryPb = require('../bosdyn/api/geometry_pb');
const choreographyParamsPb = require('../bosdyn/api/spot/choreography_params_pb');
const choreographySequencePb = require('../bosdyn/api/spot/choreography_sequence_pb');
const textFormat = require('../bosdyn-core/text_format');

/**
 * The options keywords represent the first section of the file, and will be parsed into
 * specific fields within the Animation proto. The keywords of the file are in snake_case.
 */
const OPTIONS_KEYWORDS_TO_FUNCTION = {
  controls: controlsOption,
  bpm: bpmOption,
  extendable: extendableOption,
  truncatable: truncatableOption,
  neutral_start: neutralStartOption,
  precise_steps: preciseStepsOption,
  // Deprecated.
  precise_timing: preciseTimingOption,
  timing_adjustability: timingAdjustabilityOption,
  no_looping: noLoopingOption,
  arm_required: armRequiredOption,
  arm_prohibited: armProhibitedOption,
  starts_sitting: startsSittingOption,
  track_swing_trajectories: trackSwingTrajectoriesOption,
  assume_zero_roll_and_pitch: assumeZeroRollAndPitchOption,
  arm_playback: armPlaybackOption,
  display_rgb: displayRgbOption,
  frequency: frequencyOption,
  retime_to_integer_slices: retimeToIntegerSlicesOption,
  description: descriptionOption,
  custom_gait_cycle: customGaitCycleOption,
};

/**
 * The grouped headers represent animation keyframe values which can be used and specify multiple protobuf
 * values for a single header keyword. For example, body_pos has x/y/z position values.
 */
const GROUPED_HEADERS = {
  body_pos: [3, bodyPosHandler],
  com_pos: [3, comPosHandler],
  body_euler_rpy: [3, bodyEulerRpyAnglesHandler],
  body_quat_xyzw: [4, bodyQuaternionXyzwHandler],
  body_quat_wxyz: [4, bodyQuaternionWxyzHandler],
  leg_joints: [12, legAnglesHandler],
  foot_pos: [12, footPosHandler],
  hand_pos: [3, handPosHandler],
  hand_euler_rpy: [3, handEulerRpyAnglesHandler],
  hand_quat_xyzw: [4, handQuaternionXyzwHandler],
  hand_quat_wxyz: [4, handQuaternionWxyzHandler],
  contact: [4, contactHandler],
  arm_joints: [6, armJointsHandler],
  fl_angles: [3, flAnglesHandler],
  fr_angles: [3, frAnglesHandler],
  hl_angles: [3, hlAnglesHandler],
  hr_angles: [3, hrAnglesHandler],
  fl_pos: [3, flPosHandler],
  fr_pos: [3, frPosHandler],
  hl_pos: [3, hlPosHandler],
  hr_pos: [3, hrPosHandler],
};

/**
 * The single grouped headers represent animation keyframe values which can be used and specify a single
 * protobuf value for the header keyword.
 */
const SINGLE_HEADERS = {
  body_x: bodyXHandler,
  body_y: bodyYHandler,
  body_z: bodyZHandler,
  com_x: comXHandler,
  com_y: comYHandler,
  com_z: comZHandler,
  body_quat_w: bodyQuatWHandler,
  body_quat_x: bodyQuatXHandler,
  body_quat_y: bodyQuatYHandler,
  body_quat_z: bodyQuatZHandler,
  body_roll: bodyRollHandler,
  body_pitch: bodyPitchHandler,
  body_yaw: bodyYawHandler,
  fl_hx: flHxHandler,
  fl_hy: flHyHandler,
  fl_kn: flKnHandler,
  fr_hx: frHxHandler,
  fr_hy: frHyHandler,
  fr_kn: frKnHandler,
  hl_hx: hlHxHandler,
  hl_hy: hlHyHandler,
  hl_kn: hlKnHandler,
  hr_hx: hrHxHandler,
  hr_hy: hrHyHandler,
  hr_kn: hrKnHandler,
  fl_x: flXHandler,
  fl_y: flYHandler,
  fl_z: flZHandler,
  fr_x: frXHandler,
  fr_y: frYHandler,
  fr_z: frZHandler,
  hr_x: hrXHandler,
  hr_y: hrYHandler,
  hr_z: hrZHandler,
  hl_x: hlXHandler,
  hl_y: hlYHandler,
  hl_z: hlZHandler,
  fl_contact: flContactHandler,
  fr_contact: frContactHandler,
  hl_contact: hlContactHandler,
  hr_contact: hrContactHandler,
  shoulder0: sh0Handler,
  shoulder1: sh1Handler,
  elbow0: el0Handler,
  elbow1: el1Handler,
  wrist0: wr0Handler,
  wrist1: wr1Handler,
  hand_x: handXHandler,
  hand_y: handYHandler,
  hand_z: handZHandler,
  hand_quat_w: handQuatWHandler,
  hand_quat_x: handQuatXHandler,
  hand_quat_y: handQuatYHandler,
  hand_quat_z: handQuatZHandler,
  hand_roll: handRollHandler,
  hand_pitch: handPitchHandler,
  hand_yaw: handYawHandler,
  gripper: gripperHandler,
  time: startTimeHandler,
};

const COMMENT_DELIMITERS = ['//', '#'];

/**
 * Specific Error thrown when we identify an issue with an animation (.cha) file.
 */
class AnimationFileFormatError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'AnimationFileFormatError';
  }
}

/**
 * Helper class to track values read from the animation file that are important to choreographer and necessary when
 * uploading animated moves.
 */
class Animation {
  constructor() {
    /**
     * The name of the animated move.
     * @type {?string}
     */
    this.name = null;

    /**
     * [Optional] The BPM which the move will be performed at.
     * @type {?number}
     */
    this.bpm = null;

    /**
     * [Optional] The frequency at which the keyframes occur. If not provided in the CHA file, then
     * explicit timestamps must be provided for each keyframe.
     * @type {?number}
     */
    this.frequency = null;

    /**
     * Default description for the animated move.
     * @type {string}
     */
    this.description = 'Animated dance move.';

    /**
     * The protobuf message representing the animation.
     * @type {choreographySequencePb.Animation}
     */
    this.proto = new choreographySequencePb.Animation();

    /**
     * The color of the animated move's block when loaded in Choreographer.
     * @type {number[]}
     */
    this.rgb = [100, 100, 100];

    /**
     * Each individual parameter line as read from a *.cha file.
     * @type {string[]}
     */
    this.parameterLines = [];
  }

  /**
   * Creates the MoveInfo protobuf message from the parsed animation file.
   * @returns {choreographySequencePb.MoveInfo} The MoveInfo protobuf message for the animation as generated
   * by the different animation fields in the Animation proto.
   */
  createMoveInfoProto() {
    const moveInfo = new choreographySequencePb.MoveInfo()
      .setName(this.name)
      // "is adjustable" (getIsExtendable() is not a method of the Animation proto: TypeError).
      .setIsExtendable(this.proto.getExtendable() || this.proto.getTruncatable());

    // Should always have move.time, so the duration is the final time of the last frame.
    const moveDurationSec = this.proto.getAnimationKeyframesList().at(-1).getTime();
    if (this.bpm !== null) {
      // Compute the move length slices using the bpm (an integer, like int() in Python).
      const slicesPerMinute = 4 * this.bpm;
      const moveDurationMinutes = moveDurationSec / 60;
      moveInfo.setMoveLengthSlices(Math.trunc(moveDurationMinutes * slicesPerMinute));
    } else {
      // Just use the time to size the move (the seconds were written in the slices).
      moveInfo.setMoveLengthTime(moveDurationSec);
    }

    // Set the max/min info based on truncatable/extendable flags.
    if (this.proto.getTruncatable() && !this.proto.getExtendable()) {
      moveInfo.setMaxTime(moveInfo.getMoveLengthTime());
      moveInfo.setMaxMoveLengthSlices(moveInfo.getMoveLengthSlices());
    } else if (this.proto.getExtendable() && !this.proto.getTruncatable()) {
      moveInfo.setMinTime(moveInfo.getMoveLengthTime());
      moveInfo.setMinMoveLengthSlices(moveInfo.getMoveLengthSlices());
    }

    // Set the different track information
    moveInfo.setControlsArm(this.proto.getControlsArm());
    moveInfo.setControlsGripper(this.proto.getControlsGripper());
    moveInfo.setControlsLegs(this.proto.getControlsLegs());
    moveInfo.setControlsBody(this.proto.getControlsBody());

    // Set the choreographer-specific display information (the color and the description are fields of the display).
    const { ChoreographerDisplayInfo } = choreographySequencePb;
    moveInfo.setDisplay(
      new ChoreographerDisplayInfo()
        .setCategory(ChoreographerDisplayInfo.Category.CATEGORY_ANIMATION)
        .setColor(new ChoreographerDisplayInfo.Color().setR(this.rgb[0]).setG(this.rgb[1]).setB(this.rgb[2]).setA(1))
        .setDescription(this.description),
    );

    // Animations are required to start and end in a standing position (by default).
    const { TransitionState } = choreographySequencePb.MoveInfo;
    if (this.proto.getStartsSitting()) {
      moveInfo.addEntranceStates(TransitionState.TRANSITION_STATE_SIT);
    } else {
      moveInfo.addEntranceStates(TransitionState.TRANSITION_STATE_STAND);
    }
    moveInfo.setExitState(TransitionState.TRANSITION_STATE_STAND);

    return moveInfo;
  }
}

/**
 * Name of the accessors of a field: shoulder_0_offset gives getShoulder0Offset() and setShoulder0Offset(), like
 * the jspb accessors (lodash's capitalize gave Shoulder_0_offset).
 * @param {string} fieldName Name of the field in the proto file.
 * @returns {string}
 */
function _accessorName(fieldName) {
  return fieldName
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * Classes of the message fields of the animation parameters (AnimateParams) that are not DoubleValue: in Python,
 * the field of the message gives its type, but jspb has no descriptors.
 */
const _PARAMS_FIELD_CLASSES = {
  translation_multiplier: geometryPb.Vec3Value,
  rotation_multiplier: choreographyParamsPb.EulerZYXValue,
  arm_dance_frame_id: Int32Value,
};

/**
 * The value of a field of a message, and the message of an unset message field created, like the fields of Python.
 * @param {jspb.Message} proto The message.
 * @param {string} fieldName Name of the field in the proto file.
 * @returns {*}
 * @throws {TypeError} There is no such field (AttributeError in Python).
 */
function _getOrCreateField(proto, fieldName) {
  const name = _accessorName(fieldName);
  if (typeof proto?.[`get${name}`] !== 'function' || typeof proto[`set${name}`] !== 'function') {
    throw new TypeError(`${fieldName} is not a field of the message`);
  }
  let value = proto[`get${name}`]();
  if (value === undefined) {
    value = new (_PARAMS_FIELD_CLASSES[fieldName] ?? DoubleValue)();
    proto[`set${name}`](value);
  }
  return value;
}

/**
 * Helper function to set a field to a specific value in the protobuf message.
 * @param {*} proto Any generic protobuf message.
 * @param {string} attributeName The field name within the protobuf message.
 * @param {*} attributeValue A value with type matching the field type defined in the protobuf
 * message definition. This will be saved in the attributeName field.
 * @throws {TypeError} The field is not a wrapper field of the message.
 */
function setProto(proto, attributeName, attributeValue) {
  const field = _getOrCreateField(proto, attributeName);
  if (!(field instanceof jspb.Message) || typeof field.setValue !== 'function') {
    throw new TypeError(`${attributeName} is not a wrapped value field`);
  }
  // Converted to the type of the value, like field_type(attribute_value) in Python.
  if ([Int32Value, Int64Value, UInt32Value, UInt64Value].some(Wrapper => field instanceof Wrapper)) {
    field.setValue(Math.trunc(attributeValue));
  } else if (field instanceof BoolValue) {
    field.setValue(Boolean(attributeValue));
  } else {
    field.setValue(attributeValue);
  }
}

/**
 * Helper function to set a field to a DoubleValue protobuf in a protobuf message.
 * @param {*} proto Any generic protobuf message.
 * @param {string} name The field name within the protobuf message. This name should
 * be both the field name and sub-field name separated by a period. For example,
 * for the Vec3 velocity field, the name would be 'velocity.x'.
 * @param {*} attributeValue A value with type matching the field type defined in the protobuf
 * message definition. This will be saved in the name field.
 * @throws {TypeError} There is no such DoubleValue field.
 */
function handleNestedDoubleValueParams(proto, name, attributeValue) {
  const subfields = name.split('.');
  let currentAttr = proto;
  for (const field of subfields.slice(0, -1)) {
    currentAttr = _getOrCreateField(currentAttr, field);
  }
  const last = _getOrCreateField(currentAttr, subfields.at(-1));
  if (!(last instanceof DoubleValue)) {
    throw new TypeError(`${name} is not a DoubleValue field`);
  }
  last.setValue(attributeValue);
}

/**
 * Parses the set of lines that are the parameters section of the file.
 * Reads the parameter lines into the min/max/default values in the Animation proto.
 * @param {Animation} animation The animation class structure containing the parameter lines.
 * @returns {Animation}
 * @throws {AnimationFileFormatError} A parameter is not a field of the parameters.
 */
function readAnimationParams(animation) {
  if (animation.parameterLines.length === 0) return animation;
  // Created like the fields of Python, which are only set when a parameter is.
  const paramsMessage = field => {
    if (!animation.proto[`has${field}`]()) animation.proto[`set${field}`](new choreographyParamsPb.AnimateParams());
    return animation.proto[`get${field}`]();
  };
  const currentParamsDefault = paramsMessage('DefaultParameters');
  const currentParamsMin = paramsMessage('MinimumParameters');
  const currentParamsMax = paramsMessage('MaximumParameters');
  const groupFieldSplitter = '.';

  for (const param of animation.parameterLines) {
    // Split on whitespaces (split('') gave the characters).
    const splitLine = param.trim().split(/\s+/);
    const paramName = splitLine[0];
    const minMaxDefaultVals = [1, 2, 3].map(i => {
      const value = parseFloatStrict(splitLine[i]);
      return value !== 0 ? value : 1e-6;
    });

    // Now create the parameter protobuf message.
    const set = paramName.includes(groupFieldSplitter) ? handleNestedDoubleValueParams : setProto;
    try {
      set(currentParamsMin, paramName, minMaxDefaultVals[0]);
      set(currentParamsDefault, paramName, minMaxDefaultVals[1]);
      set(currentParamsMax, paramName, minMaxDefaultVals[2]);
    } catch (err) {
      if (!(err instanceof TypeError)) throw err;
      throw new AnimationFileFormatError(
        `Cannot parse file ${animation.name}: unknown parameter field name ${paramName}.`,
      );
    }
  }
  return animation;
}

/**
 * Create a mapping of the parameter name to the default parameter values.
 * @param {string} animateMoveParamsFile filepath to the default parameters file, or a string representing the
 * contents of the parameters file.
 * @param {boolean} filepathInput With filepathInput set to true, the animateMoveParamsFile argument
 * will be interpreted as a file path to the default parameters file. When set to false, the animateMoveParamsFile
 * argument will be read as the information in the default parameters file passed as a string.
 * @returns {Object<string, string>}
 */
function readAndFindAnimationParams(animateMoveParamsFile, filepathInput = true) {
  // The lines of the file too (its content was iterated character by character).
  const paramsFile = (filepathInput ? readFileSync(animateMoveParamsFile, 'utf-8') : animateMoveParamsFile).split(
    /\r?\n/,
  );

  let readingAnimateParams = false;
  const animateParamsVal = {};

  for (let line of paramsFile) {
    line = line.trim();
    if (line.includes('animate_params')) {
      // Starting the animate params section.
      readingAnimateParams = true;
      continue;
    }

    if (readingAnimateParams && line === '') {
      // Finished reading the animate_params section.
      return animateParamsVal;
    }

    if (readingAnimateParams) {
      // Set the parameter name as the key, and the full parameter line (as a string) as the value.
      const paramName = line.split(/\s+/)[0];
      animateParamsVal[paramName] = line;
    }
  }

  return animateParamsVal;
}

/**
 * Parses a file into the animation proto that will be uploaded to the robot.
 * @param {string} animatedFile The filepath to the animation text file.
 * @param {string} [animateMoveParamsFile] [Required if needing default param values. Otherwise optional]
 * The filepath to a default set of move parameters or move parameters as a string.
 * @returns {Animation} The Animation class, which contains the animation proto to be uploaded to the robot, as well
 * as additional information to be used by Choreographer.
 * @throws {AnimationFileFormatError} The file is not a valid animation file.
 */
function convertAnimationFileToProto(animatedFile, animateMoveParamsFile = '') {
  // Create a mapping of the default values for each parameter from the MoveParamsConfig.txt file.
  // These will be used if a user doesn't provide min/max/default, but does include the parameter
  // name in the file.
  const maybeUseDefaultParams = animateMoveParamsFile !== '';
  let defaultAnimateParamsValue = {};

  if (maybeUseDefaultParams) {
    if (existsSync(animateMoveParamsFile)) {
      // if there is a file at the location animateMoveParamsFile try to read the file
      defaultAnimateParamsValue = readAndFindAnimationParams(animateMoveParamsFile);
    } else {
      // if animateMoveParamsFile isn't a locatable file try to read the string as parameter field data
      defaultAnimateParamsValue = readAndFindAnimationParams(animateMoveParamsFile, false);
    }
  }

  const animation = new Animation();
  animation.name = basename(animatedFile).split('.cha')[0];

  // The lines of the file (a for...of on the content iterated over its characters).
  const animationSpecs = readFileSync(animatedFile, 'utf-8').split(/\r?\n/);

  // Expecting three chunks, separated by a blank line.
  let sectionCounter = 0;

  // The set of keywords that describe each column in the movement section.
  let movementColumns = [];

  // If the keyframe needs the timestamps set based off the frequency, track that information here.
  // Value 1: indicates if it needs the timestamps set, value 2: indicates the current cumulative time
  // summed while iterating over each keyframe in the file.
  const setKeyframeTimes = [false, 0];

  // Make up a unique color that is persistent based on the animation name.
  const nameHash = createHash('md5').update(animation.name).digest('hex');
  animation.rgb[0] = parseInt(nameHash.slice(0, 2), 16);
  animation.rgb[1] = parseInt(nameHash.slice(2, 4), 16);
  animation.rgb[2] = parseInt(nameHash.slice(4, 6), 16);

  for (let line of animationSpecs) {
    line = line.trim();

    if (line === '') {
      // The sections are separated by an empty line
      sectionCounter += 1;
      continue;
    }

    // Check if there are any comments. Comments can be both at the end of an existing line, or
    // on a line of their own. They are marked with # or //. We want to just ignore them and continue
    // parsing the file as normal.
    for (const delim of COMMENT_DELIMITERS) {
      // Take any content before the comment starts.
      line = line.split(delim)[0];
    }
    line = line.trim();

    if (line === '') {
      // If after stripping all the comment content there is no line left, then continue.
      // We do NOT increment the section counter for comment lines!
      continue;
    }

    if (sectionCounter === 0) {
      // the first section is the "options section".
      // Take first word of line and use that as the options keyword. Apply whatever function
      // is specified for that keyword to the remaining line values.
      const fileLineSplit = line.split(/\s+/);
      const keyword = fileLineSplit[0];
      if (Object.hasOwn(OPTIONS_KEYWORDS_TO_FUNCTION, keyword)) {
        // Apply the keywords functionality to the animation class.
        OPTIONS_KEYWORDS_TO_FUNCTION[keyword](fileLineSplit, animation);
      }
    } else if (sectionCounter === 1) {
      // Second section represents the parameters for choreographer. Simply store the lines
      // for use by choreographer's config reader.
      line = line.toLowerCase();
      if (line.includes('no parameters')) {
        // This is the keyword for no parameters, so just skip the section and move on.
        continue;
      }

      const splitLine = line.split(/\s+/);
      if (splitLine.length === 1 && maybeUseDefaultParams) {
        // If the parameter name was provided with no user-specified min/max/default values,
        // then attempt to use the default values from MoveParamsConfig.txt.
        if (Object.hasOwn(defaultAnimateParamsValue, splitLine[0])) {
          animation.parameterLines.push(defaultAnimateParamsValue[splitLine[0]]);
        } else {
          const err = `Cannot parse file ${animation.name}: parameter field name ${splitLine[0]} was provided but is not a default parameter.`;
          throw new AnimationFileFormatError(err);
        }
      } else {
        animation.parameterLines.push(line);
      }
    } else if (sectionCounter === 2) {
      // The final section is the animated moves section.
      if (movementColumns.length === 0) {
        // The first line will contain all the different column headers.
        movementColumns = line.split(/\s+/);

        // If "time" is not in the column, then we should set that for every keyframe based on frequency
        if (!movementColumns.includes('time')) {
          setKeyframeTimes[0] = true;
          // eslint-disable-next-line max-depth
          if (animation.frequency === null) {
            const err = `Cannot parse file ${animation.name}: Either frequency or keyframe timestamps must be provided. Neither were found.`;
            throw new AnimationFileFormatError(err);
          }
        }
        continue;
      }

      const vals = line.split(/\s+/);
      const animationKeyframe = new choreographySequencePb.AnimationKeyframe();
      let currentIndex = 0;

      for (const header of movementColumns) {
        if (Object.hasOwn(GROUPED_HEADERS, header)) {
          // For grouped headers, get the next N line values, where N is specified by the grouped
          // headers object, and set those in the animation keyframe protobuf message.
          const [count, handler] = GROUPED_HEADERS[header];
          const headerValues = vals.slice(currentIndex, currentIndex + count);
          // eslint-disable-next-line max-depth
          if (headerValues.length < count) {
            const err = `Cannot parse file ${animation.name}: ${header} needs ${count} values: "${line}"`;
            throw new AnimationFileFormatError(err);
          }
          handler(
            headerValues.map(val => (val !== '0' ? parseFloatStrict(val) : 1e-6)),
            animationKeyframe,
          );
          currentIndex += count;
        } else if (Object.hasOwn(SINGLE_HEADERS, header)) {
          // Add the single value into the animation keyframe protobuf message.
          let headerValue = parseFloatStrict(vals[currentIndex]);
          // eslint-disable-next-line max-depth
          if (headerValue === 0) headerValue = 1e-6;
          SINGLE_HEADERS[header](headerValue, animationKeyframe);
          currentIndex += 1;
        } else {
          // Don't fail silently and mismatch indices of other groups if one group header is not found.
          const err = `Cannot parse file ${animation.name}: Unknown body movement keyword ${header}`;
          throw new AnimationFileFormatError(err);
        }
      }

      if (setKeyframeTimes[0]) {
        // Update the timestamp in the keyframe, then increment it based on the frequency
        animationKeyframe.setTime(setKeyframeTimes[1]);
        setKeyframeTimes[1] += 1 / animation.frequency;
      }

      // Add the animation frame into the animation proto (setAnimationKeyframesList([kf]) kept the last one only).
      animation.proto.addAnimationKeyframes(animationKeyframe);
    } else {
      // An animation file should only have 3 sections: the options, the parameters, and the body movement keyframes.

      const err = `Cannot parse file ${animation.name}: Animation file contains more than 3 sections delineated by whitespace. Make sure all comments are included in a existing section.`;
      throw new AnimationFileFormatError(err);
    }
  }

  animation.proto.setName(animation.name);
  if (animation.bpm !== null) {
    animation.proto.setBpm(animation.bpm);
  }

  // Read out the parameters into protobuf messages.
  readAnimationParams(animation);

  return animation;
}

/**
 * Write the new animation proto to a .cap file, in the protobuf text format.
 * @param {Animation} animation The animation class object generated by the
 * `cha` file conversion helpers to save the protobuf from.
 * @param {string} destination The full filepath to the location to save the animation protobuf message.
 * @returns {string} The path of the written file.
 */
function writeAnimationToDest(animation, destination) {
  if (animation.name === null) {
    const err = new Error('Invalid file name, cannot save choreography sequence.');
    err.code = 'EINVAL';
    throw err;
  }

  if (!existsSync(destination)) {
    console.error(`Path(${destination}) to save file does not exist. Creating it.`);
    mkdirSync(destination, { recursive: true });
  }

  const filePath = join(destination, `${animation.name}.cap`);
  writeFileSync(filePath, textFormat.messageToString(animation.proto));
  return filePath;
}

function main() {
  const parser = new argparse.ArgumentParser();
  parser.add_argument('--cha-filepath', { help: 'The filename of the animation file.' });
  parser.add_argument('--cha-directory', { help: 'The filepath to a directory with animation files.' });
  parser.add_argument('--config-filepath', {
    help: 'The filepath for a move params config file. This can be found using the ListAllMoves RPC.',
    default: '',
  });
  parser.add_argument('--destination-filepath', {
    help: 'The file location to save the animation proto.',
    default: '.',
  });

  const options = parser.parse_args();

  if (options.cha_filepath) {
    const animation = convertAnimationFileToProto(options.cha_filepath, options.config_filepath);
    writeAnimationToDest(animation, options.destination_filepath);
  } else if (options.cha_directory) {
    const filesInDir = readdirSync(options.cha_directory);
    for (const filename of filesInDir) {
      if (filename.endsWith('.cha')) {
        const animation = convertAnimationFileToProto(join(options.cha_directory, filename), options.config_filepath);
        writeAnimationToDest(animation, options.destination_filepath);
      }
    }
  } else {
    console.log(
      'Please provide either the --cha-filepath argument for a single animation file, or the --cha-directory argument for a full directory of animation files.',
    );
  }

  return true;
}

// require() gave an empty object: the conversion could only be used from the command line.
module.exports = {
  Animation,
  AnimationFileFormatError,
  COMMENT_DELIMITERS,
  GROUPED_HEADERS,
  OPTIONS_KEYWORDS_TO_FUNCTION,
  SINGLE_HEADERS,
  convertAnimationFileToProto,
  handleNestedDoubleValueParams,
  main,
  readAndFindAnimationParams,
  readAnimationParams,
  setProto,
  writeAnimationToDest,
};

if (require.main === module && !main()) {
  process.exitCode = 1;
}
