#!/usr/bin/env node
'use strict';

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { ArgumentParser } = require('argparse');

const armCommandPb = require('../../src/bosdyn/api/arm_command_pb');
const geometryPb = require('../../src/bosdyn/api/geometry_pb');
const { GRAV_ALIGNED_BODY_FRAME_NAME, ODOM_FRAME_NAME, getATformB } = require('../../src/bosdyn-client/frame_helpers');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { SE3Pose } = require('../../src/bosdyn-client/math_helpers');
const {
  RobotCommandBuilder,
  RobotCommandClient,
  blockUntilArmArrives,
  blockingStand,
} = require('../../src/bosdyn-client/robot_command');
const { RobotStateClient } = require('../../src/bosdyn-client/robot_state');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

async function helloArm(config) {
  const sdk = createStandardSdk('HelloArmClient');
  const robot = sdk.createRobot(config.hostname);
  await robot.authenticate(config.username, config.password);
  await (await robot.timeSync).waitForSync();

  console.assert(await robot.hasArm(), 'Robot requires an arm to run this example.');

  // Verify the robot is not estopped and that an external application has registered and holds
  // an estop endpoint.
  console.assert(
    !(await robot.isEstopped()),
    'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
  );

  /** @type {RobotStateClient} */
  const robotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  await leaseKeepAlive.waitForInitialization();

  robot.logger.info('Powering on robot... This may take a several seconds.');
  await robot.powerOn(20_000);
  console.assert(await robot.isPoweredOn(), 'Robot power on failed.');
  robot.logger.info('Robot powered on.');

  robot.logger.info('Commanding robot to stand...');
  /** @type {RobotCommandClient} */
  const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);
  await blockingStand(commandClient, 10_000);
  robot.logger.info('Robot standing.');

  // Move the arm to a spot in front of the robot, and open the gripper.

  // Make the arm pose RobotCommand
  // Build a position to move the arm to (in meters, relative to and expressed in the gravity aligned body frame).
  const x = 0.75;
  const y = 0;
  const z = 0.25;
  const handEwrtFlatBody = new geometryPb.Vec3().setX(x).setY(y).setZ(z);

  // Rotation as a quaternion
  const qw = 1;
  const qx = 0;
  const qy = 0;
  const qz = 0;
  const flatBodyQHand = new geometryPb.Quaternion().setW(qw).setX(qx).setY(qy).setZ(qz);

  const flatBodyTHand = new geometryPb.SE3Pose().setPosition(handEwrtFlatBody).setRotation(flatBodyQHand);

  const robotState = await robotStateClient.getRobotState();
  const odomTFlatBody = getATformB(
    robotState.getKinematicState().getTransformsSnapshot(),
    ODOM_FRAME_NAME,
    GRAV_ALIGNED_BODY_FRAME_NAME,
  );

  let odomTHand = odomTFlatBody.mult(SE3Pose.fromProto(flatBodyTHand));

  // Duration in milliseconds
  const seconds = 2_000;

  let armCommand = RobotCommandBuilder.armPoseCommand(
    odomTHand.x,
    odomTHand.y,
    odomTHand.z,
    odomTHand.rot.w,
    odomTHand.rot.x,
    odomTHand.rot.y,
    odomTHand.rot.z,
    ODOM_FRAME_NAME,
    { seconds },
  );

  // Make the open gripper RobotCommand
  let gripperCommand = RobotCommandBuilder.clawGripperOpenFractionCommand(1.0);

  // Combine the arm and gripper commands into one RobotCommand
  let command = RobotCommandBuilder.buildSynchroCommand(gripperCommand, armCommand);

  // Send the request
  let cmdId = await commandClient.robotCommand(command);
  robot.logger.info('Moving arm to position 1.');

  // Wait until the arm arrives at the goal.
  await blockUntilArmArrivesWithPrints(robot, commandClient, cmdId);

  // Move the arm to a different position
  handEwrtFlatBody.setZ(0);
  flatBodyQHand.setW(0.707).setX(0.707).setY(0).setZ(0);

  const flatBodyTHand2 = new geometryPb.SE3Pose().setPosition(handEwrtFlatBody).setRotation(flatBodyQHand);
  odomTHand = odomTFlatBody.mult(SE3Pose.fromProto(flatBodyTHand2));

  armCommand = RobotCommandBuilder.armPoseCommand(
    odomTHand.x,
    odomTHand.y,
    odomTHand.z,
    odomTHand.rot.w,
    odomTHand.rot.x,
    odomTHand.rot.y,
    odomTHand.rot.z,
    ODOM_FRAME_NAME,
    seconds,
  );

  // Close the gripper
  gripperCommand = RobotCommandBuilder.clawGripperOpenFractionCommand(0.0);

  // Build the proto
  command = RobotCommandBuilder.buildSynchroCommand(gripperCommand, armCommand);

  // Send the request
  cmdId = await commandClient.robotCommand(command);
  robot.logger.info('Moving arm to position 2.');

  // Wait until the arm arrives at the goal.
  // Note: here we use the helper function provided by robot_command.
  await blockUntilArmArrives(commandClient, cmdId);

  robot.logger.info('Done.');

  // Power the robot off. By specifying "cutImmediately=false", a safe power off command
  // is issued to the robot. This will attempt to sit the robot before powering off.
  await robot.powerOff(false, 20_000);
  console.assert(!(await robot.isPoweredOn()), 'Robot power off failed.');
  robot.logger.info('Robot safely powered off.');
}

async function blockUntilArmArrivesWithPrints(robot, commandClient, cmdId) {
  /* eslint-disable no-await-in-loop */
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const feedbackResp = await commandClient.robotCommandFeedback(cmdId);
    const armCartesianFeedback = feedbackResp
      .getFeedback()
      .getSynchronizedFeedback()
      .getArmCommandFeedback()
      .getArmCartesianFeedback();
    robot.logger.info(
      // eslint-disable-next-line max-len
      `Distance to go: ${armCartesianFeedback.getMeasuredPosDistanceToGoal()} meters, ${armCartesianFeedback.getMeasuredRotDistanceToGoal()} radians`,
    );

    if (
      armCartesianFeedback.getStatus() === armCommandPb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_COMPLETE
    ) {
      robot.logger.info('Move complete.');
      break;
    }
    await sleep(100);
  }
}

function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  return helloArm(options);
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}
