/**
 * @file A set helpers which convert specific lines from an animation
 * file into the animation-specific protobuf messages.
 * NOTE: All of these helpers are to convert specific values read from a `cha`
 * file into fields within the choreographySequencePb.Animation protobuf
 * message. They are used by the animation_file_to_proto.js file.
 */

'use strict';

const choreographySequencePb = require('../bosdyn/api/spot/choreography_sequence_pb');

exports.startTimeHandler = (val, animationFrame) => {
  animationFrame.setTime(val);
  return animationFrame;
};

exports.flAnglesHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getFl().getJointAngles().setHipX(vals[0]).setHipY(vals[1]).setKnee(vals[2]);
  return animationFrame;
};

exports.frAnglesHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getFr().getJointAngles().setHipX(vals[0]).setHipY(vals[1]).setKnee(vals[2]);
  return animationFrame;
};

exports.hlAnglesHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getHl().getJointAngles().setHipX(vals[0]).setHipY(vals[1]).setKnee(vals[2]);
  return animationFrame;
};

exports.hrAnglesHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getHr().getJointAngles().setHipX(vals[0]).setHipY(vals[1]).setKnee(vals[2]);
  return animationFrame;
};

exports.flPosHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getFl().getFootPos().getX().setValue(vals[0]);
  animationFrame.getLegs().getFl().getFootPos().getY().setValue(vals[1]);
  animationFrame.getLegs().getFl().getFootPos().getZ().setValue(vals[2]);
  return animationFrame;
};

exports.frPosHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getFr().getFootPos().getX().setValue(vals[0]);
  animationFrame.getLegs().getFr().getFootPos().getY().setValue(vals[1]);
  animationFrame.getLegs().getFr().getFootPos().getZ().setValue(vals[2]);
  return animationFrame;
};

exports.hlPosHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getHl().getFootPos().getX().setValue(vals[0]);
  animationFrame.getLegs().getHl().getFootPos().getY().setValue(vals[1]);
  animationFrame.getLegs().getHl().getFootPos().getZ().setValue(vals[2]);
  return animationFrame;
};

exports.hrPosHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getHr().getFootPos().getX().setValue(vals[0]);
  animationFrame.getLegs().getHr().getFootPos().getY().setValue(vals[1]);
  animationFrame.getLegs().getHr().getFootPos().getZ().setValue(vals[2]);
  return animationFrame;
};

exports.gripperHandler = (val, animationFrame) => {
  animationFrame.getGripper().getGripperAngle().setValue(val);
  return animationFrame;
};

exports.flContactHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFl().getStance().setValue(val);
  return animationFrame;
};

exports.frContactHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFr().getStance().setValue(val);
  return animationFrame;
};

exports.hlContactHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHl().getStance().setValue(val);
  return animationFrame;
};

exports.hrContactHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getStance().setValue(val);
  return animationFrame;
};

exports.sh0Handler = (val, animationFrame) => {
  animationFrame.getArm().getJointAngles().getShoulder0().setValue(val);
  return animationFrame;
};

exports.sh1Handler = (val, animationFrame) => {
  animationFrame.getArm().getJointAngles().getShoulder1().setValue(val);
  return animationFrame;
};

exports.el0Handler = (val, animationFrame) => {
  animationFrame.getArm().getJointAngles().getElbow0().setValue(val);
  return animationFrame;
};

exports.el1Handler = (val, animationFrame) => {
  animationFrame.getArm().getJointAngles().getElbow1().setValue(val);
  return animationFrame;
};

exports.wr0Handler = (val, animationFrame) => {
  animationFrame.getArm().getJointAngles().getWrist0().setValue(val);
  return animationFrame;
};

exports.wr1Handler = (val, animationFrame) => {
  animationFrame.getArm().getJointAngles().getWrist1().setValue(val);
  return animationFrame;
};

exports.flHxHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFl().getJointAngles().setHipX(val);
  return animationFrame;
};

exports.flHyHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFl().getJointAngles().setHipY(val);
  return animationFrame;
};

exports.flKnHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFl().getJointAngles().setKnee(val);
  return animationFrame;
};

exports.frHxHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFr().getJointAngles().setHipX(val);
  return animationFrame;
};

exports.frHyHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFr().getJointAngles().setHipY(val);
  return animationFrame;
};

exports.frKnHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFr().getJointAngles().setKnee(val);
  return animationFrame;
};

exports.hlHxHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHl().getJointAngles().setHipX(val);
  return animationFrame;
};

exports.hlHyHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHl().getJointAngles().setHipY(val);
  return animationFrame;
};

exports.hlKnHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHl().getJointAngles().setKnee(val);
  return animationFrame;
};

exports.hrHxHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getJointAngles().setHipX(val);
  return animationFrame;
};

exports.hrHyHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getJointAngles().setHipY(val);
  return animationFrame;
};

exports.hrKnHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getJointAngles().setKnee(val);
  return animationFrame;
};

exports.flXHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFl().getFootPos().getX().setValue(val);
  return animationFrame;
};

exports.flYHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFl().getFootPos().getY().setValue(val);
  return animationFrame;
};

exports.flZHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFl().getFootPos().getZ().setValue(val);
  return animationFrame;
};

exports.frXHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFr().getFootPos().getX().setValue(val);
  return animationFrame;
};

exports.frYHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFr().getFootPos().getY().setValue(val);
  return animationFrame;
};

exports.frZHandler = (val, animationFrame) => {
  animationFrame.getLegs().getFr().getFootPos().getZ().setValue(val);
  return animationFrame;
};

exports.hlXHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHl().getFootPos().getX().setValue(val);
  return animationFrame;
};

exports.hlYHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHl().getFootPos().getY().setValue(val);
  return animationFrame;
};

exports.hlZHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHl().getFootPos().getZ().setValue(val);
  return animationFrame;
};

exports.hrXHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getFootPos().getX().setValue(val);
  return animationFrame;
};

exports.hrYHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getFootPos().getY().setValue(val);
  return animationFrame;
};

exports.hrZHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getFootPos().getZ().setValue(val);
  return animationFrame;
};

exports.bodyXHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getBodyPos().getX().setValue(val);
  return animationFrame;
};

exports.bodyYHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getBodyPos().getY().setValue(val);
  return animationFrame;
};

exports.bodyZHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getBodyPos().getZ().setValue(val);
  return animationFrame;
};

exports.comXHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getComPos().getX().setValue(val);
  return animationFrame;
};

exports.comYHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getComPos().getY().setValue(val);
  return animationFrame;
};

exports.comZHandler = (val, animationFrame) => {
  animationFrame.getLegs().getHr().getComPos().getZ().setValue(val);
  return animationFrame;
};

exports.bodyQuatXHandler = (val, animationFrame) => {
  animationFrame.getBody().getQuaternion().setX(val);
  return animationFrame;
};

exports.bodyQuatYHandler = (val, animationFrame) => {
  animationFrame.getBody().getQuaternion().setY(val);
  return animationFrame;
};

exports.bodyQuatZHandler = (val, animationFrame) => {
  animationFrame.getBody().getQuaternion().setZ(val);
  return animationFrame;
};

exports.bodyQuatWHandler = (val, animationFrame) => {
  animationFrame.getBody().getQuaternion().setW(val);
  return animationFrame;
};

exports.bodyRollHandler = (val, animationFrame) => {
  animationFrame.getBody().getEulerAngles().getRoll().setValue(val);
  return animationFrame;
};

exports.bodyPitchHandler = (val, animationFrame) => {
  animationFrame.getBody().getEulerAngles().getPitch().setValue(val);
  return animationFrame;
};

exports.bodyYawHandler = (val, animationFrame) => {
  animationFrame.getBody().getEulerAngles().getYaw().setValue(val);
  return animationFrame;
};

exports.bodyPosHandler = (vals, animationFrame) => {
  animationFrame.getBody().getBodyPos().getX().setValue(vals[0]);
  animationFrame.getBody().getBodyPos().getY().setValue(vals[1]);
  animationFrame.getBody().getBodyPos().getZ().setValue(vals[2]);
  return animationFrame;
};

exports.comPosHandler = (vals, animationFrame) => {
  animationFrame.getBody().getComPos().getX().setValue(vals[0]);
  animationFrame.getBody().getComPos().getY().setValue(vals[1]);
  animationFrame.getBody().getComPos().getZ().setValue(vals[2]);
  return animationFrame;
};

exports.bodyEulerRpyAnglesHandler = (vals, animationFrame) => {
  animationFrame.getBody().getEulerAngles().getRoll().setValue(vals[0]);
  animationFrame.getBody().getEulerAngles().getPitch().setValue(vals[1]);
  animationFrame.getBody().getEulerAngles().getYaw().setValue(vals[2]);
  return animationFrame;
};

exports.bodyQuaternionXyzwHandler = (vals, animationFrame) => {
  animationFrame.getBody().getQuaternion().setX(vals[0]);
  animationFrame.getBody().getQuaternion().setY(vals[1]);
  animationFrame.getBody().getQuaternion().setZ(vals[2]);
  animationFrame.getBody().getQuaternion().setW(vals[3]);
  return animationFrame;
};

exports.bodyQuaternionWxyzwHandler = (vals, animationFrame) => {
  animationFrame.getBody().getQuaternion().setX(vals[1]);
  animationFrame.getBody().getQuaternion().setY(vals[2]);
  animationFrame.getBody().getQuaternion().setZ(vals[3]);
  animationFrame.getBody().getQuaternion().setW(vals[0]);
  return animationFrame;
};

exports.legAnglesHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getFl().getJointAngles().setHipX(vals[0]);
  animationFrame.getLegs().getFl().getJointAngles().setHipY(vals[1]);
  animationFrame.getLegs().getFl().getJointAngles().setKnee(vals[2]);
  animationFrame.getLegs().getFr().getJointAngles().setHipX(vals[3]);
  animationFrame.getLegs().getFr().getJointAngles().setHipY(vals[4]);
  animationFrame.getLegs().getFr().getJointAngles().setKnee(vals[5]);
  animationFrame.getLegs().getHl().getJointAngles().setHipX(vals[6]);
  animationFrame.getLegs().getHl().getJointAngles().setHipY(vals[7]);
  animationFrame.getLegs().getHl().getJointAngles().setKnee(vals[8]);
  animationFrame.getLegs().getHr().getJointAngles().setHipX(vals[9]);
  animationFrame.getLegs().getHr().getJointAngles().setHipY(vals[10]);
  animationFrame.getLegs().getHr().getJointAngles().setKnee(vals[11]);
  return animationFrame;
};

exports.footPosHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getFl().getFootPos().getX().setValue(vals[0]);
  animationFrame.getLegs().getFl().getFootPos().getY().setValue(vals[1]);
  animationFrame.getLegs().getFl().getFootPos().getZ().setValue(vals[2]);
  animationFrame.getLegs().getFr().getFootPos().getX().setValue(vals[3]);
  animationFrame.getLegs().getFr().getFootPos().getY().setValue(vals[4]);
  animationFrame.getLegs().getFr().getFootPos().getZ().setValue(vals[5]);
  animationFrame.getLegs().getHl().getFootPos().getX().setValue(vals[6]);
  animationFrame.getLegs().getHl().getFootPos().getY().setValue(vals[7]);
  animationFrame.getLegs().getHl().getFootPos().getZ().setValue(vals[8]);
  animationFrame.getLegs().getHr().getFootPos().getX().setValue(vals[9]);
  animationFrame.getLegs().getHr().getFootPos().getY().setValue(vals[10]);
  animationFrame.getLegs().getHr().getFootPos().getZ().setValue(vals[11]);
  return animationFrame;
};

exports.contactHandler = (vals, animationFrame) => {
  animationFrame.getLegs().getFl().getStance().setValue(vals[0]);
  animationFrame.getLegs().getFr().getStance().setValue(vals[0]);
  animationFrame.getLegs().getHl().getStance().setValue(vals[0]);
  animationFrame.getLegs().getHr().getStance().setValue(vals[0]);
  return animationFrame;
};

exports.armJointsHandler = (vals, animationFrame) => {
  animationFrame.getArm().getJointAngles().getShoulder0().setValue(vals[0]);
  animationFrame.getArm().getJointAngles().getShoulder1().setValue(vals[1]);
  animationFrame.getArm().getJointAngles().getElbow0().setValue(vals[2]);
  animationFrame.getArm().getJointAngles().getElbow1().setValue(vals[3]);
  animationFrame.getArm().getJointAngles().getWrist0().setValue(vals[4]);
  animationFrame.getArm().getJointAngles().getWrist1().setValue(vals[5]);
  return animationFrame;
};

exports.handXHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getPosition().setX(val);
  return animationFrame;
};

exports.handYHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getPosition().setY(val);
  return animationFrame;
};

exports.handZHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getPosition().setZ(val);
  return animationFrame;
};

exports.handQuatXHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getQuaternion().setX(val);
  return animationFrame;
};

exports.handQuatYHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getQuaternion().setY(val);
  return animationFrame;
};

exports.handQuatZHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getQuaternion().setZ(val);
  return animationFrame;
};

exports.handQuatWHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getQuaternion().setW(val);
  return animationFrame;
};

exports.handRollHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getEulerAngles().getRoll().setValue(val);
  return animationFrame;
};

exports.handPitchHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getEulerAngles().getPitch().setValue(val);
  return animationFrame;
};

exports.handYawHandler = (val, animationFrame) => {
  animationFrame.getArm().getHandPose().getEulerAngles().getYaw().setValue(val);
  return animationFrame;
};

exports.handPosHandler = (vals, animationFrame) => {
  animationFrame.getArm().getHandPose().getPosition().getX().setValue(vals[0]);
  animationFrame.getArm().getHandPose().getPosition().getY().setValue(vals[1]);
  animationFrame.getArm().getHandPose().getPosition().getZ().setValue(vals[2]);
  return animationFrame;
};

exports.handEulerRpyAnglesHandler = (vals, animationFrame) => {
  animationFrame.getArm().getHandPose().getEulerAngles().getRoll().setValue(vals[0]);
  animationFrame.getArm().getHandPose().getEulerAngles().getPitch().setValue(vals[1]);
  animationFrame.getArm().getHandPose().getEulerAngles().getYaw().setValue(vals[2]);
  return animationFrame;
};

exports.handQuaternionXyzwHandler = (vals, animationFrame) => {
  animationFrame.getArm().getHandPose().getQuaternion().setX(vals[0]);
  animationFrame.getArm().getHandPose().getQuaternion().setY(vals[1]);
  animationFrame.getArm().getHandPose().getQuaternion().setZ(vals[2]);
  animationFrame.getArm().getHandPose().getQuaternion().setW(vals[3]);
  return animationFrame;
};

exports.handQuaternionWxyzHandler = (vals, animationFrame) => {
  animationFrame.getArm().getHandPose().getQuaternion().setX(vals[1]);
  animationFrame.getArm().getHandPose().getQuaternion().setY(vals[2]);
  animationFrame.getArm().getHandPose().getQuaternion().setZ(vals[3]);
  animationFrame.getArm().getHandPose().getQuaternion().setW(vals[0]);
  return animationFrame;
};

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
    } else if (track === 'controls') {
      continue;
    } else {
      console.error(`Unknown track name: ${track}`);
    }
  }
  return animation;
};

exports.bpmOption = (fileLineSplit, animation) => {
  animation.setBpm(fileLineSplit[1]);
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
};

exports.preciseTimingOption = (fileLineSplit, animation) => {
  animation.proto.setTimingAdjustability(-1);
};

exports.timingAdjustabilityOption = (fileLineSplit, animation) => {
  animation.proto.setTimingAdjustability(fileLineSplit[1]);
};

exports.noLoopingOption = (fileLineSplit, animation) => {
  animation.proto.setNoLooping(true);
};

exports.armRequiredOption = (fileLineSplit, animation) => {
  animation.proto.setArmRequired(true);
};

exports.armProhibitedOption = (fileLineSplit, animation) => {
  animation.proto.setArmProhibited(true);
};

exports.startsSittingOption = (fileLineSplit, animation) => {
  animation.proto.setStartsSitting(true);
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
  if (playback === 'jointspace') {
    animation.proto.setArmPlayback(choreographySequencePb.Animation.ArmPlayback.ARM_PLAYBACK_JOINTSPACE);
  } else if (playback === 'workspace') {
    animation.proto.setArmPlayback(choreographySequencePb.Animation.ArmPlayback.ARM_PLAYBACK_WORKSPACE);
  } else if (playback === 'workspace_dance_frame') {
    animation.proto.setArmPlayback(choreographySequencePb.Animation.ArmPlayback.ARM_PLAYBACK_WORKSPACE_DANCE_FRAME);
  } else {
    animation.proto.setArmPlayback(choreographySequencePb.Animation.ArmPlayback.ARM_PLAYBACK_DEFAULT);
    console.error(`Unknown arm playback option ${playback}`);
  }
  return animation;
};

exports.displayRgbOption = (fileLineSplit, animation) => {
  for (let i = 1; i < 3; i++) {
    animation.rgb[i - 1] = fileLineSplit[i];
  }
  return animation;
};

exports.frequencyOption = (fileLineSplit, animation) => {
  animation.frequency = fileLineSplit[1];
  return animation;
};

exports.retimeToIntegerSlicesOption = (fileLineSplit, animation) => {
  animation.proto.setRetimeToIntegerSlices(true);
  return animation;
};

exports.descriptionOption = (fileLineSplit, animation) => {
  let description = fileLineSplit.slice(1).join(' ');
  description = description.replaceAll('"', '');
  animation.description = description;
  return animation;
};

exports.customGaitCycleOption = (fileLineSplit, animation) => {
  animation.proto.setCustomGaitCycle(true);
  return animation;
};
