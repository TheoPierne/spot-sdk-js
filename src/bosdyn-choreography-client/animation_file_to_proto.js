'use strict';

const { createHash } = require('node:crypto');
const { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } = require('node:fs');
const { basename, join } = require('node:path');
const process = require('node:process');

const argparse = require('argparse');
const { DoubleValue } = require('google-protobuf/google/protobuf/wrappers_pb');
const { capitalize } = require('lodash');

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
} = require('./animation_file_conversion_helpers');
const choreographySequencePb = require('../bosdyn/api/spot/choreography_sequence_pb');

/**
 * The options keywords represent the first section of the file, and will be parsed into
 * specific fields within the Animation proto.
 */
const OPTIONS_KEYWORDS_TO_FUNCTION = {
  controls: controlsOption,
  bpm: bpmOption,
  extendable: extendableOption,
  truncatable: truncatableOption,
  neutralStart: neutralStartOption,
  preciseSteps: preciseStepsOption,
  preciseTiming: preciseTimingOption,
  timingAdjustability: timingAdjustabilityOption,
  noLooping: noLoopingOption,
  armRequired: armRequiredOption,
  armProhibited: armProhibitedOption,
  startsSitting: startsSittingOption,
  trackSwingTrajectories: trackSwingTrajectoriesOption,
  assumeZeroRollAndPitch: assumeZeroRollAndPitchOption,
  armPlayback: armPlaybackOption,
  displayRgb: displayRgbOption,
  frequency: frequencyOption,
  retimeToIntegerSlices: retimeToIntegerSlicesOption,
  description: descriptionOption,
  customGaitCycle: customGaitCycleOption,
};

/**
 * The grouped headers represent animation keyframe values which can be used and specify multiple protobuf
 * values for a single header keyword. For example, body_pos has x/y/z position values.
 */
const GROUPED_HEADERS = {
  bodyPos: [3, bodyPosHandler],
  comPos: [3, comPosHandler],
  bodyEulerRpy: [3, bodyEulerRpyAnglesHandler],
  bodyQuatXyzw: [4, bodyQuaternionXyzwHandler],
  bodyQuatWxyz: [4, bodyQuaternionWxyzHandler],
  legJoints: [12, legAnglesHandler],
  footPos: [12, footPosHandler],
  handPos: [3, handPosHandler],
  handEulerRpy: [3, handEulerRpyAnglesHandler],
  handQuatXyzw: [4, handQuaternionXyzwHandler],
  handQuatWxyz: [4, handQuaternionWxyzHandler],
  contact: [4, contactHandler],
  armJoints: [6, armJointsHandler],
  flAngles: [3, flAnglesHandler],
  frAngles: [3, frAnglesHandler],
  hlAngles: [3, hlAnglesHandler],
  hrAngles: [3, hrAnglesHandler],
  flPos: [3, flPosHandler],
  frPos: [3, frPosHandler],
  hlPos: [3, hlPosHandler],
  hrPos: [3, hrPosHandler],
};

/**
 * The single grouped headers represent animation keyframe values which can be used and specify a single
 * protobuf value for the header keyword.
 */
const SINGLE_HEADERS = {
  bodyX: bodyXHandler,
  bodyY: bodyYHandler,
  bodyZ: bodyZHandler,
  comX: comXHandler,
  comY: comYHandler,
  comZ: comZHandler,
  bodyQuatW: bodyQuatWHandler,
  bodyQuatX: bodyQuatXHandler,
  bodyQuatY: bodyQuatYHandler,
  bodyQuatZ: bodyQuatZHandler,
  bodyRoll: bodyRollHandler,
  bodyPitch: bodyPitchHandler,
  bodyYaw: bodyYawHandler,
  flHx: flHxHandler,
  flHy: flHyHandler,
  flKn: flKnHandler,
  frHx: frHxHandler,
  frHy: frHyHandler,
  frKn: frKnHandler,
  hlHx: hlHxHandler,
  hlHy: hlHyHandler,
  hlKn: hlKnHandler,
  hrHx: hrHxHandler,
  hrHy: hrHyHandler,
  hrKn: hrKnHandler,
  flX: flXHandler,
  flY: flYHandler,
  flZ: flZHandler,
  frX: frXHandler,
  frY: frYHandler,
  frZ: frZHandler,
  hrX: hrXHandler,
  hrY: hrYHandler,
  hrZ: hrZHandler,
  hlX: hlXHandler,
  hlY: hlYHandler,
  hlZ: hlZHandler,
  flContact: flContactHandler,
  frContact: frContactHandler,
  hlContact: hlContactHandler,
  hrContact: hrContactHandler,
  shoulder0: sh0Handler,
  shoulder1: sh1Handler,
  elbow0: el0Handler,
  elbow1: el1Handler,
  wrist0: wr0Handler,
  wrist1: wr1Handler,
  handX: handXHandler,
  handY: handYHandler,
  handZ: handZHandler,
  handQuatW: handQuatWHandler,
  handQuatX: handQuatXHandler,
  handQuatY: handQuatYHandler,
  handQuatZ: handQuatZHandler,
  handRoll: handRollHandler,
  handPitch: handPitchHandler,
  handYaw: handYawHandler,
  gripper: gripperHandler,
  time: startTimeHandler,
};

const COMMENT_DELIMITERS = ['//', '#'];

class AnimationFileFormatError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'AnimationFileFormatError';
  }
}

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
     * @type {any[]}
     */
    this.parameterLines = [];
  }

  /**
   * Creates the MoveInfo protobuf message from the parsed animation file.
   * @returns {choreographySequencePb.MoveInfo}
   */
  createMoveInfoProto() {
    const moveInfo = new choreographySequencePb.MoveInfo()
      .setName(this.name)
      .setIsExtendable(this.proto.getIsExtendable() || this.proto.getTruncatable());

    // Should always have move.getTime(), so the duration is the final time of the last frame.
    const moveDurationSec = this.proto.getAnimationKeyframesList().at(-1).getTime();
    if (this.bpm !== null) {
      const slicesPerMinute = 4 * this.bpm;
      const moveDurationMinutes = moveDurationSec / 60;
      moveInfo.setMoveLengthSlices(moveDurationMinutes * slicesPerMinute);
    } else {
      moveInfo.setMoveLengthSlices(moveDurationSec);
    }

    // Set the max/min info based on truncatable/extendable flags.
    if (this.proto.getTruncatable() && !this.proto.getExtendable()) {
      moveInfo.setMaxTime(moveInfo.getMoveLengthTime());
      moveInfo.setMaxMoveLengthSlices(moveInfo.getMoveLengthSlices());
    } else {
      moveInfo.setMinTime(moveInfo.getMoveLengthTime());
      moveInfo.setMinMoveLengthSlices(moveInfo.getMoveLengthSlices());
    }

    // Set the different track information
    moveInfo.setControlsArm(this.proto.getControlsArm());
    moveInfo.setControlsGripper(this.proto.getControlsGripper());
    moveInfo.setControlsLegs(this.proto.getControlsLegs());
    moveInfo.setControlsBody(this.proto.getControlsBody());

    // Set the choreographer-specific display information
    moveInfo
      .setDisplay(
        new choreographySequencePb.ChoreographerDisplayInfo().setCategory(
          choreographySequencePb.ChoreographerDisplayInfo.Category.CATEGORY_ANIMATION,
        ),
      )
      .setColor(
        new choreographySequencePb.ChoreographerDisplayInfo.Color()
          .setR(this.rgb[0])
          .setG(this.rgb[1])
          .setB(this.rgb[2])
          .setA(1),
      )
      .setDescription(this.description);

    // Animations are required to start and end in a standing position (by default).
    if (this.proto.getStartsSitting()) {
      moveInfo.addEntranceStates(choreographySequencePb.MoveInfo.TransitionState.TRANSITION_STATE_SIT);
    } else {
      moveInfo.addEntranceStates(choreographySequencePb.MoveInfo.TransitionState.TRANSITION_STATE_STAND);
    }

    moveInfo.setExitState(choreographySequencePb.MoveInfo.TransitionState.TRANSITION_STATE_STAND);

    return moveInfo;
  }
}

/**
 * Helper function to set a field to a specific value in the protobuf message.
 * @param {*} proto Any generic protobuf message.
 * @param {string} attributeName The field name within the protobuf message.
 * @param {*} attributeValue A value with type matching the field type defined in the protobuf
 * message definition. This will be saved in the attributeName field.
 */
function setProto(proto, attributeName, attributeValue) {
  const parts = attributeName.split('.');
  let currentObject = proto;

  // Traverse the object to find the appropriate nested field
  for (let i = 0; i < parts.length - 1; i++) {
    const getterName = `get${capitalize(parts[i])}`;
    currentObject = currentObject[getterName]();
  }

  const finalFieldName = parts[parts.length - 1];
  const setterName = `set${capitalize(finalFieldName)}`;

  currentObject[setterName](attributeValue);
}

/**
 * Helper function to set a field to a DoubleValue protobuf in a protobuf message.
 * @param {*} proto Any generic protobuf message.
 * @param {string} name The field name within the protobuf message. This name should
 * be both the field name and sub-field name separated by a period. For example,
 * for the Vec3 velocity field, the name would be 'velocity.x'.
 * @param {*} attributeValue A value with type matching the field type defined in the protobuf
 * message definition. This will be saved in the name field.
 */
function handleNestedDoubleValueParams(proto, name, attributeValue) {
  const subfields = name.split('.');
  let currentAttr = proto;

  // Traverse the object to reach the correct nested field
  for (let i = 0; i < subfields.length - 1; i++) {
    const getterName = `get${capitalize(subfields[i])}`;
    currentAttr = currentAttr[getterName]();
  }

  // Create a DoubleValue wrapper
  const doubleValue = new DoubleValue().setValue(attributeValue);

  // Set the final field using the setter method
  const finalFieldName = subfields[subfields.length - 1];
  const setterName = `set${capitalize(finalFieldName)}`;

  currentAttr[setterName](doubleValue);
}

/**
 * Parses the set of lines that are the parameters section of the file.
 * Reads the parameter lines into the min/max/default values in the Animation proto.
 * @param {Animation} animation The animation class structure containing the parameter lines.
 * @returns {Animation}
 */
function readAnimationParams(animation) {
  const currentParamsDefault = animation.proto.getDefaultParameters();
  const currentParamsMin = animation.proto.getMinimumParameters();
  const currentParamsMax = animation.proto.getMaximumParameters();
  const groupFieldSplitter = '.';

  for (const param of animation.parameterLines) {
    const splitLine = param.split('');
    const paramName = splitLine[0];
    const minMaxDefaultVals = splitLine.slice(1, 4).map(value => {
      const floatValue = parseFloat(value);
      return floatValue !== 0 ? floatValue : 1e-6;
    });

    // Now create the parameter protobuf message.
    if (paramName.includes(groupFieldSplitter)) {
      // Non-individual fields, so handle slightly differently.
      try {
        handleNestedDoubleValueParams(currentParamsMin, paramName, minMaxDefaultVals[0]);
        handleNestedDoubleValueParams(currentParamsDefault, paramName, minMaxDefaultVals[1]);
        handleNestedDoubleValueParams(currentParamsMax, paramName, minMaxDefaultVals[2]);
      } catch (err) {
        throw new AnimationFileFormatError(
          `Cannot parse file ${animation.name}: unknown parameter field name ${paramName}.`,
        );
      }
    } else {
      // Individual field using a DoubleValue proto.
      try {
        setProto(currentParamsMin, paramName, minMaxDefaultVals[0]);
        setProto(currentParamsDefault, paramName, minMaxDefaultVals[1]);
        setProto(currentParamsMax, paramName, minMaxDefaultVals[2]);
      } catch (err) {
        throw new AnimationFileFormatError(
          `Cannot parse file ${animation.name}: unknown parameter field name ${paramName}.`,
        );
      }
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
  const paramsFile = filepathInput
    ? readFileSync(animateMoveParamsFile, 'utf-8')
    : animateMoveParamsFile.split(/\r?\n/);

  let readingAnimateParams = false;
  const animateParamsVal = {};

  for (let line of paramsFile) {
    line = line.trim();
    if (line.includes('animate_params')) {
      readingAnimateParams = true;
      continue;
    }

    if (readingAnimateParams && line === '') {
      readingAnimateParams = false;
      return animateParamsVal;
    }

    if (readingAnimateParams) {
      const splitLine = line.trim().split(/\s+/);
      const paramName = splitLine[0];
      animateParamsVal[paramName] = line;
      continue;
    }
  }

  return animateParamsVal;
}

/**
 * Parses a file into the animation proto that will be uploaded to the robot.
 * @param {string} animatedFile The filepath to the animation text file.
 * @param {string} [animateMoveParamsFile] The filepath to a default set of move parameters.
 * @returns {Animation}
 */
function convertAnimationFileToProto(animatedFile, animateMoveParamsFile = '') {
  // Create a mapping of the default values for each parameter from the MoveParamsConfig.txt file.
  // These will be used if a user doesn't provide min/max/default, but does include the parameter
  // name in the file.
  let maybeUseDefaultParams = animateMoveParamsFile !== '';
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

  const animationSpecs = readFileSync(animatedFile, 'utf-8');

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
      if (keyword in OPTIONS_KEYWORDS_TO_FUNCTION) {
        OPTIONS_KEYWORDS_TO_FUNCTION[keyword](fileLineSplit, animation);
      }
    } else if (sectionCounter === 1) {
      // Second section represents the parameters for choreographer. Simply store the lines
      // for use by choreographer's config reader.
      line = line.trim().toLowerCase();
      if (line.includes('no parameters')) {
        // This is the keyword for no parameters, so just skip the section and move on.
        continue;
      }

      const splitLines = line.trim().split(/\s+/);
      if (splitLines.length === 1 && maybeUseDefaultParams) {
        // If the parameter name was provided with no user-specified min/max/default values,
        // then attempt to use the default values from MoveParamsConfig.txt.
        if (splitLines[0] in defaultAnimateParamsValue) {
          animation.parameterLines.push(defaultAnimateParamsValue[splitLines[0]]);
        } else {
          // eslint-disable-next-line max-len
          const err = `Cannot parse file ${animation.name}: parameter field name ${splitLines[0]} was provided but is not a default parameter.`;
          throw new AnimationFileFormatError(err);
        }
      } else {
        animation.parameterLines.push(line);
      }
    } else if (sectionCounter === 2) {
      // The final section is the animated moves section.
      if (movementColumns.length === 0) {
        // The first line will contain all the different column headers.
        movementColumns = line.trim().split(/\s+/);

        // If "time" is not in the column, then we should set that for every keyframe based on frequency
        if (!movementColumns.includes('time')) {
          setKeyframeTimes[0] = true;
          // eslint-disable-next-line max-depth
          if (animation.frequency === null) {
            // eslint-disable-next-line max-len
            const err = `Cannot parse file ${animation.name}: Either frequency or keyframe timestamps must be provided. Neither were found.`;
            throw new AnimationFileFormatError(err);
          }
        }
        continue;
      }

      const vals = line.trim().split(/\s+/);
      const animationKeyframe = new choreographySequencePb.AnimationKeyframe();
      let currentIndex = 0;

      for (const header of movementColumns) {
        if (header in GROUPED_HEADERS) {
          // For grouped headers, get the next N line values, where N is specified by the grouped
          // headers object, and set those in the animation keyframe protobuf message.
          const headerActivities = GROUPED_HEADERS[header];
          let headerValues = vals.slice(currentIndex, currentIndex + headerActivities[0]);
          headerValues = headerValues.map(val => (val !== '0' ? parseFloat(val) : 1e-6));
          headerActivities[1](headerValues, animationKeyframe);
          currentIndex += headerActivities[0];
        } else if (header in SINGLE_HEADERS) {
          // Add the single value into the animation keyframe protobuf message.
          const headerValue = parseFloat(vals[currentIndex]) || 1e-6;
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

      // Add the animation frame into the animation proto.
      animation.proto.setAnimationKeyframesList([animationKeyframe]);
    } else {
      // An animation file should only have 3 sections: the options, the parameters, and the body movement keyframes.
      // eslint-disable-next-line max-len
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
 * Write the new animation proto to a .cap file.
 * @param {Animation} animation The animation class object generated by the
 * `cha` file conversion helpers to save the protobuf from.
 * @param {string} destination The full filepath to the location to save the animation protobuf message.
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

  const animationProtoBytes = animation.proto.serializeBinary();
  const filePath = join(destination, `${animation.name}.cap`);
  writeFileSync(filePath, animationProtoBytes, 'utf-8');
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
      // eslint-disable-next-line max-len
      'Please provide either the --cha-filepath argument for a single animation file, or the --cha-directory argument for a full directory of animation files.',
    );
  }

  return true;
}

if (require.main === module) {
  if (!main()) {
    process.exit(1);
  }
}
