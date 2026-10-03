/**
 * @file A set helpers which convert specific lines from an animation
 * file into the animation-specific protobuf messages.
 * NOTE: All of these helpers are to convert specific values read from a `cha`
 * file into fields within the choreographySequencePb.Animation protobuf
 * message. They are used by the animation_file_to_proto.js file.
 */

'use strict';

const { BoolValue, DoubleValue } = require('google-protobuf/google/protobuf/wrappers_pb');

const geometryPb = require('../bosdyn/api/geometry_pb');
const choreographyParamsPb = require('../bosdyn/api/spot/choreography_params_pb');
const choreographySequencePb = require('../bosdyn/api/spot/choreography_sequence_pb');

/**
 * The sub-message of a message, created if it is not set: like the fields of the Python messages, on which the
 * handlers set values directly (getLegs() & co. returned undefined on a new keyframe: TypeError).
 * @param {import('google-protobuf').Message} message
 * @param {string} field Name of the field in the accessors, e.g. 'Legs' for getLegs() and setLegs().
 * @param {Function} MessageClass Class of the sub-message.
 * @returns {import('google-protobuf').Message}
 */
function _sub(message, field, MessageClass) {
  let sub = message[`get${field}`]();
  if (!sub) {
    sub = new MessageClass();
    message[`set${field}`](sub);
  }
  return sub;
}

/** The value of a DoubleValue field is set. */
function _setDouble(message, field, value) {
  _sub(message, field, DoubleValue).setValue(value);
}

function _leg(frame, leg) {
  return _sub(_sub(frame, 'Legs', choreographySequencePb.AnimateLegs), leg, choreographySequencePb.AnimateSingleLeg);
}

function _legJointAngles(frame, leg) {
  return _sub(_leg(frame, leg), 'JointAngles', choreographySequencePb.LegJointAngles);
}

function _footPos(frame, leg) {
  return _sub(_leg(frame, leg), 'FootPos', geometryPb.Vec3Value);
}

function _setVec3(vec3, x, y, z) {
  _setDouble(vec3, 'X', x);
  _setDouble(vec3, 'Y', y);
  _setDouble(vec3, 'Z', z);
}

function _setStance(frame, leg, val) {
  // Like int(val) in Python: a 0 of the file is read as 1e-6, which is false (it set true).
  _sub(_leg(frame, leg), 'Stance', BoolValue).setValue(Math.trunc(val) !== 0);
}

function _body(frame) {
  return _sub(frame, 'Body', choreographySequencePb.AnimateBody);
}

function _bodyPos(frame) {
  return _sub(_body(frame), 'BodyPos', geometryPb.Vec3Value);
}

function _comPos(frame) {
  return _sub(_body(frame), 'ComPos', geometryPb.Vec3Value);
}

function _bodyEuler(frame) {
  return _sub(_body(frame), 'EulerAngles', choreographyParamsPb.EulerZYXValue);
}

function _bodyQuaternion(frame) {
  return _sub(_body(frame), 'Quaternion', geometryPb.Quaternion);
}

function _arm(frame) {
  return _sub(frame, 'Arm', choreographySequencePb.AnimateArm);
}

function _armJointAngles(frame) {
  return _sub(_arm(frame), 'JointAngles', choreographySequencePb.ArmJointAngles);
}

function _handPose(frame) {
  return _sub(_arm(frame), 'HandPose', choreographySequencePb.AnimateArm.HandPose);
}

function _handPosition(frame) {
  return _sub(_handPose(frame), 'Position', geometryPb.Vec3Value);
}

function _handEuler(frame) {
  return _sub(_handPose(frame), 'EulerAngles', choreographyParamsPb.EulerZYXValue);
}

function _handQuaternion(frame) {
  return _sub(_handPose(frame), 'Quaternion', geometryPb.Quaternion);
}

exports.startTimeHandler = (val, animationFrame) => {
  animationFrame.setTime(val);
  return animationFrame;
};

exports.flAnglesHandler = (vals, animationFrame) => {
  _legJointAngles(animationFrame, 'Fl').setHipX(vals[0]).setHipY(vals[1]).setKnee(vals[2]);
  return animationFrame;
};

exports.frAnglesHandler = (vals, animationFrame) => {
  _legJointAngles(animationFrame, 'Fr').setHipX(vals[0]).setHipY(vals[1]).setKnee(vals[2]);
  return animationFrame;
};

exports.hlAnglesHandler = (vals, animationFrame) => {
  _legJointAngles(animationFrame, 'Hl').setHipX(vals[0]).setHipY(vals[1]).setKnee(vals[2]);
  return animationFrame;
};

exports.hrAnglesHandler = (vals, animationFrame) => {
  _legJointAngles(animationFrame, 'Hr').setHipX(vals[0]).setHipY(vals[1]).setKnee(vals[2]);
  return animationFrame;
};

exports.flPosHandler = (vals, animationFrame) => {
  _setVec3(_footPos(animationFrame, 'Fl'), vals[0], vals[1], vals[2]);
  return animationFrame;
};

exports.frPosHandler = (vals, animationFrame) => {
  _setVec3(_footPos(animationFrame, 'Fr'), vals[0], vals[1], vals[2]);
  return animationFrame;
};

exports.hlPosHandler = (vals, animationFrame) => {
  _setVec3(_footPos(animationFrame, 'Hl'), vals[0], vals[1], vals[2]);
  return animationFrame;
};

exports.hrPosHandler = (vals, animationFrame) => {
  _setVec3(_footPos(animationFrame, 'Hr'), vals[0], vals[1], vals[2]);
  return animationFrame;
};

exports.gripperHandler = (val, animationFrame) => {
  _setDouble(_sub(animationFrame, 'Gripper', choreographySequencePb.AnimateGripper), 'GripperAngle', val);
  return animationFrame;
};

exports.flContactHandler = (val, animationFrame) => {
  _setStance(animationFrame, 'Fl', val);
  return animationFrame;
};

exports.frContactHandler = (val, animationFrame) => {
  _setStance(animationFrame, 'Fr', val);
  return animationFrame;
};

exports.hlContactHandler = (val, animationFrame) => {
  _setStance(animationFrame, 'Hl', val);
  return animationFrame;
};

exports.hrContactHandler = (val, animationFrame) => {
  _setStance(animationFrame, 'Hr', val);
  return animationFrame;
};

exports.sh0Handler = (val, animationFrame) => {
  _setDouble(_armJointAngles(animationFrame), 'Shoulder0', val);
  return animationFrame;
};

exports.sh1Handler = (val, animationFrame) => {
  _setDouble(_armJointAngles(animationFrame), 'Shoulder1', val);
  return animationFrame;
};

exports.el0Handler = (val, animationFrame) => {
  _setDouble(_armJointAngles(animationFrame), 'Elbow0', val);
  return animationFrame;
};

exports.el1Handler = (val, animationFrame) => {
  _setDouble(_armJointAngles(animationFrame), 'Elbow1', val);
  return animationFrame;
};

exports.wr0Handler = (val, animationFrame) => {
  _setDouble(_armJointAngles(animationFrame), 'Wrist0', val);
  return animationFrame;
};

exports.wr1Handler = (val, animationFrame) => {
  _setDouble(_armJointAngles(animationFrame), 'Wrist1', val);
  return animationFrame;
};

exports.flHxHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Fl').setHipX(val);
  return animationFrame;
};

exports.flHyHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Fl').setHipY(val);
  return animationFrame;
};

exports.flKnHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Fl').setKnee(val);
  return animationFrame;
};

exports.frHxHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Fr').setHipX(val);
  return animationFrame;
};

exports.frHyHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Fr').setHipY(val);
  return animationFrame;
};

exports.frKnHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Fr').setKnee(val);
  return animationFrame;
};

exports.hlHxHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Hl').setHipX(val);
  return animationFrame;
};

exports.hlHyHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Hl').setHipY(val);
  return animationFrame;
};

exports.hlKnHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Hl').setKnee(val);
  return animationFrame;
};

exports.hrHxHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Hr').setHipX(val);
  return animationFrame;
};

exports.hrHyHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Hr').setHipY(val);
  return animationFrame;
};

exports.hrKnHandler = (val, animationFrame) => {
  _legJointAngles(animationFrame, 'Hr').setKnee(val);
  return animationFrame;
};

exports.flXHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Fl'), 'X', val);
  return animationFrame;
};

exports.flYHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Fl'), 'Y', val);
  return animationFrame;
};

exports.flZHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Fl'), 'Z', val);
  return animationFrame;
};

exports.frXHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Fr'), 'X', val);
  return animationFrame;
};

exports.frYHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Fr'), 'Y', val);
  return animationFrame;
};

exports.frZHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Fr'), 'Z', val);
  return animationFrame;
};

exports.hlXHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Hl'), 'X', val);
  return animationFrame;
};

exports.hlYHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Hl'), 'Y', val);
  return animationFrame;
};

exports.hlZHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Hl'), 'Z', val);
  return animationFrame;
};

exports.hrXHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Hr'), 'X', val);
  return animationFrame;
};

exports.hrYHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Hr'), 'Y', val);
  return animationFrame;
};

exports.hrZHandler = (val, animationFrame) => {
  _setDouble(_footPos(animationFrame, 'Hr'), 'Z', val);
  return animationFrame;
};

exports.bodyXHandler = (val, animationFrame) => {
  _setDouble(_bodyPos(animationFrame), 'X', val);
  return animationFrame;
};

exports.bodyYHandler = (val, animationFrame) => {
  _setDouble(_bodyPos(animationFrame), 'Y', val);
  return animationFrame;
};

exports.bodyZHandler = (val, animationFrame) => {
  _setDouble(_bodyPos(animationFrame), 'Z', val);
  return animationFrame;
};

exports.comXHandler = (val, animationFrame) => {
  _setDouble(_comPos(animationFrame), 'X', val);
  return animationFrame;
};

exports.comYHandler = (val, animationFrame) => {
  _setDouble(_comPos(animationFrame), 'Y', val);
  return animationFrame;
};

exports.comZHandler = (val, animationFrame) => {
  _setDouble(_comPos(animationFrame), 'Z', val);
  return animationFrame;
};

exports.bodyQuatXHandler = (val, animationFrame) => {
  _bodyQuaternion(animationFrame).setX(val);
  return animationFrame;
};

exports.bodyQuatYHandler = (val, animationFrame) => {
  _bodyQuaternion(animationFrame).setY(val);
  return animationFrame;
};

exports.bodyQuatZHandler = (val, animationFrame) => {
  _bodyQuaternion(animationFrame).setZ(val);
  return animationFrame;
};

exports.bodyQuatWHandler = (val, animationFrame) => {
  _bodyQuaternion(animationFrame).setW(val);
  return animationFrame;
};

exports.bodyRollHandler = (val, animationFrame) => {
  _setDouble(_bodyEuler(animationFrame), 'Roll', val);
  return animationFrame;
};

exports.bodyPitchHandler = (val, animationFrame) => {
  _setDouble(_bodyEuler(animationFrame), 'Pitch', val);
  return animationFrame;
};

exports.bodyYawHandler = (val, animationFrame) => {
  _setDouble(_bodyEuler(animationFrame), 'Yaw', val);
  return animationFrame;
};

exports.bodyPosHandler = (vals, animationFrame) => {
  _setVec3(_bodyPos(animationFrame), vals[0], vals[1], vals[2]);
  return animationFrame;
};

exports.comPosHandler = (vals, animationFrame) => {
  _setVec3(_comPos(animationFrame), vals[0], vals[1], vals[2]);
  return animationFrame;
};

exports.bodyEulerRpyAnglesHandler = (vals, animationFrame) => {
  const euler = _bodyEuler(animationFrame);
  _setDouble(euler, 'Roll', vals[0]);
  _setDouble(euler, 'Pitch', vals[1]);
  _setDouble(euler, 'Yaw', vals[2]);
  return animationFrame;
};

exports.bodyQuaternionXyzwHandler = (vals, animationFrame) => {
  _bodyQuaternion(animationFrame).setX(vals[0]).setY(vals[1]).setZ(vals[2]).setW(vals[3]);
  return animationFrame;
};

exports.bodyQuaternionWxyzHandler = (vals, animationFrame) => {
  _bodyQuaternion(animationFrame).setX(vals[1]).setY(vals[2]).setZ(vals[3]).setW(vals[0]);
  return animationFrame;
};

/**
 * @deprecated Misspelled: use bodyQuaternionWxyzHandler (the body_quat_wxyz column was not recognized).
 */
exports.bodyQuaternionWxyzwHandler = exports.bodyQuaternionWxyzHandler;

exports.legAnglesHandler = (vals, animationFrame) => {
  ['Fl', 'Fr', 'Hl', 'Hr'].forEach((leg, i) => {
    _legJointAngles(animationFrame, leg)
      .setHipX(vals[3 * i])
      .setHipY(vals[3 * i + 1])
      .setKnee(vals[3 * i + 2]);
  });
  return animationFrame;
};

exports.footPosHandler = (vals, animationFrame) => {
  ['Fl', 'Fr', 'Hl', 'Hr'].forEach((leg, i) => {
    _setVec3(_footPos(animationFrame, leg), vals[3 * i], vals[3 * i + 1], vals[3 * i + 2]);
  });
  return animationFrame;
};

exports.contactHandler = (vals, animationFrame) => {
  // One value for each leg (vals[0] was set on the 4 legs).
  ['Fl', 'Fr', 'Hl', 'Hr'].forEach((leg, i) => _setStance(animationFrame, leg, vals[i]));
  return animationFrame;
};

exports.armJointsHandler = (vals, animationFrame) => {
  const jointAngles = _armJointAngles(animationFrame);
  ['Shoulder0', 'Shoulder1', 'Elbow0', 'Elbow1', 'Wrist0', 'Wrist1'].forEach((joint, i) =>
    _setDouble(jointAngles, joint, vals[i]),
  );
  return animationFrame;
};

// The single hand_x/y/z columns get a single value (Python reads vals[0] of it, and sets a Vec3Value field to it).
exports.handXHandler = (val, animationFrame) => {
  _setDouble(_handPosition(animationFrame), 'X', val);
  return animationFrame;
};

exports.handYHandler = (val, animationFrame) => {
  _setDouble(_handPosition(animationFrame), 'Y', val);
  return animationFrame;
};

exports.handZHandler = (val, animationFrame) => {
  _setDouble(_handPosition(animationFrame), 'Z', val);
  return animationFrame;
};

exports.handQuatXHandler = (val, animationFrame) => {
  _handQuaternion(animationFrame).setX(val);
  return animationFrame;
};

exports.handQuatYHandler = (val, animationFrame) => {
  _handQuaternion(animationFrame).setY(val);
  return animationFrame;
};

exports.handQuatZHandler = (val, animationFrame) => {
  _handQuaternion(animationFrame).setZ(val);
  return animationFrame;
};

exports.handQuatWHandler = (val, animationFrame) => {
  _handQuaternion(animationFrame).setW(val);
  return animationFrame;
};

exports.handRollHandler = (val, animationFrame) => {
  _setDouble(_handEuler(animationFrame), 'Roll', val);
  return animationFrame;
};

exports.handPitchHandler = (val, animationFrame) => {
  _setDouble(_handEuler(animationFrame), 'Pitch', val);
  return animationFrame;
};

exports.handYawHandler = (val, animationFrame) => {
  _setDouble(_handEuler(animationFrame), 'Yaw', val);
  return animationFrame;
};

exports.handPosHandler = (vals, animationFrame) => {
  _setVec3(_handPosition(animationFrame), vals[0], vals[1], vals[2]);
  return animationFrame;
};

exports.handEulerRpyAnglesHandler = (vals, animationFrame) => {
  const euler = _handEuler(animationFrame);
  _setDouble(euler, 'Roll', vals[0]);
  _setDouble(euler, 'Pitch', vals[1]);
  _setDouble(euler, 'Yaw', vals[2]);
  return animationFrame;
};

exports.handQuaternionXyzwHandler = (vals, animationFrame) => {
  _handQuaternion(animationFrame).setX(vals[0]).setY(vals[1]).setZ(vals[2]).setW(vals[3]);
  return animationFrame;
};

exports.handQuaternionWxyzHandler = (vals, animationFrame) => {
  _handQuaternion(animationFrame).setX(vals[1]).setY(vals[2]).setZ(vals[3]).setW(vals[0]);
  return animationFrame;
};

/**
 * A number of the file, read like Python's float(): the whole text must be a number (parseFloat('1.5abc') is 1.5).
 * @param {string} text
 * @returns {number}
 * @throws {Error} The text is not a number.
 */
function parseFloatStrict(text) {
  const value = Number(text);
  if (typeof text !== 'string' || text.trim() === '' || Number.isNaN(value)) {
    throw new Error(`could not convert string to float: '${text}'`);
  }
  return value;
}

/**
 * An integer of the file, read like Python's int().
 * @param {string} text
 * @returns {number}
 * @throws {Error} The text is not an integer.
 */
function parseIntStrict(text) {
  const value = Number(text);
  if (typeof text !== 'string' || !/^\s*[+-]?\d+\s*$/.test(text)) {
    throw new Error(`invalid literal for int() with base 10: '${text}'`);
  }
  return value;
}

exports.parseFloatStrict = parseFloatStrict;
exports.parseIntStrict = parseIntStrict;

exports.controlsOption = (fileLineSplit, animation) => {
  for (const track of fileLineSplit) {
    if (track === 'legs') {
      animation.proto.setControlsLegs(true);
    } else if (track === 'arm') {
      animation.proto.setControlsArm(true);
    } else if (track === 'body') {
      animation.proto.setControlsBody(true);
    } else if (track === 'gripper') {
      animation.proto.setControlsGripper(true);
    } else if (track !== 'controls') {
      console.log(`Unknown track name ${track}`);
    }
  }
  return animation;
};

exports.bpmOption = (fileLineSplit, animation) => {
  // The bpm of the Animation class (not of its proto: setBpm() is not a method of the class).
  animation.bpm = parseIntStrict(fileLineSplit[1]);
  return animation;
};

exports.extendableOption = (fileLineSplit, animation) => {
  animation.proto.setExtendable(true);
  return animation;
};

exports.truncatableOption = (fileLineSplit, animation) => {
  animation.proto.setTruncatable(true);
  return animation;
};

exports.neutralStartOption = (fileLineSplit, animation) => {
  animation.proto.setNeutralStart(true);
  return animation;
};

exports.preciseStepsOption = (fileLineSplit, animation) => {
  animation.proto.setPreciseSteps(true);
  return animation;
};

exports.preciseTimingOption = (fileLineSplit, animation) => {
  animation.proto.setTimingAdjustability(-1);
  return animation;
};

exports.timingAdjustabilityOption = (fileLineSplit, animation) => {
  animation.proto.setTimingAdjustability(parseFloatStrict(fileLineSplit[1]));
  return animation;
};

exports.noLoopingOption = (fileLineSplit, animation) => {
  animation.proto.setNoLooping(true);
  return animation;
};

exports.armRequiredOption = (fileLineSplit, animation) => {
  animation.proto.setArmRequired(true);
  return animation;
};

exports.armProhibitedOption = (fileLineSplit, animation) => {
  animation.proto.setArmProhibited(true);
  return animation;
};

exports.startsSittingOption = (fileLineSplit, animation) => {
  animation.proto.setStartsSitting(true);
  return animation;
};

exports.trackSwingTrajectoriesOption = (fileLineSplit, animation) => {
  animation.proto.setTrackSwingTrajectories(true);
  return animation;
};

exports.assumeZeroRollAndPitchOption = (fileLineSplit, animation) => {
  animation.proto.setAssumeZeroRollAndPitch(true);
  return animation;
};

exports.armPlaybackOption = (fileLineSplit, animation) => {
  const playback = fileLineSplit[1];
  const { ArmPlayback } = choreographySequencePb.Animation;
  if (playback === 'jointspace') {
    animation.proto.setArmPlayback(ArmPlayback.ARM_PLAYBACK_JOINTSPACE);
  } else if (playback === 'workspace') {
    animation.proto.setArmPlayback(ArmPlayback.ARM_PLAYBACK_WORKSPACE);
  } else if (playback === 'workspace_dance_frame') {
    animation.proto.setArmPlayback(ArmPlayback.ARM_PLAYBACK_WORKSPACE_DANCE_FRAME);
  } else {
    animation.proto.setArmPlayback(ArmPlayback.ARM_PLAYBACK_DEFAULT);
    console.log(`Unknown arm playback option ${playback}`);
  }
  return animation;
};

exports.displayRgbOption = (fileLineSplit, animation) => {
  if (fileLineSplit.length === 4) {
    const rgbOptionValues = fileLineSplit.slice(1, 4);
    // R, G and B (the loop started at 1: R was never read).
    for (let i = 0; i < 3; i++) {
      animation.rgb[i] = parseIntStrict(rgbOptionValues[i]);
    }
  } else {
    console.error(`Misformed display_rgb option: Format must follow 'display_rgb [R] [G] [B]'`);
  }
  return animation;
};

exports.frequencyOption = (fileLineSplit, animation) => {
  // A number: the string was kept, and added to the keyframe times.
  animation.frequency = parseFloatStrict(fileLineSplit[1]);
  return animation;
};

exports.retimeToIntegerSlicesOption = (fileLineSplit, animation) => {
  animation.proto.setRetimeToIntegerSlices(true);
  return animation;
};

exports.descriptionOption = (fileLineSplit, animation) => {
  // Remove any quotation marks.
  animation.description = fileLineSplit.slice(1).join(' ').replaceAll('"', '');
  return animation;
};

exports.customGaitCycleOption = (fileLineSplit, animation) => {
  animation.proto.setCustomGaitCycle(true);
  return animation;
};
