#!/usr/bin/env node
'use strict';

const { existsSync } = require('node:fs');
const path = require('node:path');
const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { ArgumentParser } = require('argparse');
const spotCommandPb = require('../../src/bosdyn/api/spot/robot_command_pb');
const trajectoryPb = require('../../src/bosdyn/api/trajectory_pb');
const { getATformB, ODOM_FRAME_NAME, GRAV_ALIGNED_BODY_FRAME_NAME } = require('../../src/bosdyn-client/frame_helpers');
const { ImageClient } = require('../../src/bosdyn-client/image');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { SE3Pose, Quat } = require('../../src/bosdyn-client/math_helpers');
const { RobotCommandBuilder, RobotCommandClient, blockingStand } = require('../../src/bosdyn-client/robot_command');
const { RobotStateClient } = require('../../src/bosdyn-client/robot_state');

const { addCommonArguments } = require('../../src/bosdyn-client/util');
const geometry = require('../../src/bosdyn-core/geometry');
const imageUtil = require('../../src/bosdyn-core/image_util');
const { secondsToDuration } = require('../../src/bosdyn-core/util');

const { createStandardSdk } = require('../../src/index');

async function helloSpot(config) {
  const sdk = createStandardSdk('HelloSpotClient');
  const robot = sdk.createRobot(config.hostname);

  await robot.authenticate(config.username, config.password);

  await (await robot.timeSync).waitForSync();

  const isEstopped = await robot.isEstopped();

  if (!isEstopped) {
    throw new Error(
      'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
    );
  }

  /** @type {RobotStateClient} */
  const robotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  await leaseKeepAlive.waitForInitialization();
  try {
    // Now, we are ready to power on the robot. This call will block until the power
    // is on. Commands would fail if this did not happen. We can also check that the robot is
    // powered at any point.
    robot.logger.info('Powering on robot... This may take several seconds.');
    await robot.powerOn(20_000);
    console.assert(await robot.isPoweredOn(), 'Robot power on failed.');
    robot.logger.info('Robot powered on.');

    // Tell the robot to stand up. The command service is used to issue commands to a robot.
    // The set of valid commands for a robot depends on hardware configuration. See
    // RobotCommandBuilder for more detailed examples on command building. The robot
    // command service requires timesync between the robot and the client.
    robot.logger.info('Commanding robot to stand...');
    /** @type {RobotCommandClient} */
    const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);
    await blockingStand(commandClient, 10_000);
    robot.logger.info('Robot standing.');
    await sleep(3_000);

    // Query the robot for its current state before issuing the stand with yaw command.
    // This state provides a reference pose for issuing a frame based body offset command.
    const robotState = await robotStateClient.getRobotState();

    // Tell the robot to stand in a twisted position.
    // The RobotCommandBuilder constructs command messages, which are then
    // issued to the robot using "robot_command" on the command client.
    // In this example, the RobotCommandBuilder generates a stand command
    // message with a non-default rotation in the footprint frame. The footprint
    // frame is a gravity aligned frame with its origin located at the geometric
    // center of the feet. The X axis of the footprint frame points forward along
    // the robot's length, the Z axis points up aligned with gravity, and the Y
    // axis is the cross-product of the two.
    const footprintRBody = new geometry.EulerZXY(0.4, 0.0, 0.0);
    let cmd = RobotCommandBuilder.synchroStandCommand(null, 0.0, footprintRBody);
    await commandClient.robotCommand(cmd);
    robot.logger.info('Robot standing twisted.');
    await sleep(3_000);

    // Now compute an absolute desired position and orientation of the robot body origin.
    // Use the frame helper class to compute the world to gravity aligned body frame transformation.
    // Note, the robot_state used here was cached from before the above yaw stand command,
    // so it contains the nominal stand pose.
    const odomTFlatBody = getATformB(
      robotState.getKinematicState().getTransformsSnapshot(),
      ODOM_FRAME_NAME,
      GRAV_ALIGNED_BODY_FRAME_NAME,
    );

    // Specify a trajectory to shift the body forward followed by looking down, then return to nominal.
    // Define times (in seconds) for each point in the trajectory.
    let t1 = 2.5;
    let t2 = 5.0;
    let t3 = 7.5;

    // Specify the poses as transformations to the cached flat_body pose.
    const flatBodyTPose1 = new SE3Pose(0.075, 0, 0, new Quat());
    const flatBodyTPose2 = new SE3Pose(0.0, 0, 0, new Quat(0.9848, 0, 0.1736, 0));
    const flatBodyTPose3 = new SE3Pose(0.0, 0, 0, new Quat());

    // Build the points in the trajectory.
    const trajPoint1 = new trajectoryPb.SE3TrajectoryPoint()
      .setPose(odomTFlatBody.mult(flatBodyTPose1).toProto())
      .setTimeSinceReference(secondsToDuration(t1));
    const trajPoint2 = new trajectoryPb.SE3TrajectoryPoint()
      .setPose(odomTFlatBody.mult(flatBodyTPose2).toProto())
      .setTimeSinceReference(secondsToDuration(t2));
    const trajPoint3 = new trajectoryPb.SE3TrajectoryPoint()
      .setPose(odomTFlatBody.mult(flatBodyTPose3).toProto())
      .setTimeSinceReference(secondsToDuration(t3));

    // Build the trajectory proto by combining the points.
    const traj = new trajectoryPb.SE3Trajectory().setPointsList([trajPoint1, trajPoint2, trajPoint3]);

    // Build a custom mobility params to specify absolute body control.
    const body_control = new spotCommandPb.BodyControlParams().setBodyPose(
      new spotCommandPb.BodyControlParams.BodyPose().setRootFrameName(ODOM_FRAME_NAME).setBaseOffsetRtRoot(traj),
    );

    // Issue the command via the RobotCommandClient
    robot.logger.info('Beginning absolute body control while standing.');
    await blockingStand(
      commandClient,
      10_000,
      undefined,
      new spotCommandPb.MobilityParams().setBodyControl(body_control),
    );
    robot.logger.info('Finished absolute body control while standing.');

    cmd = RobotCommandBuilder.synchroStandCommand({ bodyHeight: 0.1 });
    await commandClient.robotCommand(cmd);
    robot.logger.info('Robot standing tall.');
    await sleep(3_000);

    /** @type {ImageClient} */
    const imageClient = await robot.ensureClient(ImageClient.defaultServiceName);
    await imageClient.listImageSources();
    const imageResponse = await imageClient.getImageFromSources(['frontleft_fisheye_image']);
    await _maybeDisplayImage(imageResponse[0].getShot().getImage());

    if (config.save || config.save_path !== null) {
      await _maybeSaveImage(imageResponse[0].getShot().getImage(), config.save_path);
    }

    const logComment = 'HelloSpot tutorial user comment.';
    await robot.operatorComment(logComment);
    robot.logger.info(`Added comment "${logComment}" to robot log.`);

    await robot.powerOff(false, 20_000);
    console.assert(!(await robot.isPoweredOn()), 'Robot power off failed.');
    robot.logger.info('Robot safely powered off.');
  } catch (e) {
    console.log(e);
  } finally {
    await leaseKeepAlive.shutdown();
  }
}

async function _maybeDisplayImage(image, displayTime = 3_000) {
  try {
    await imageUtil.show(image.getData());
    await sleep(displayTime);
  } catch (e) {
    console.warn('Exception thrown displaying image.', e);
  }
}

async function _maybeSaveImage(image, pathFile) {
  let name = 'hello-spot-img.jpg';

  if (pathFile && existsSync(pathFile)) {
    pathFile = path.join(process.cwd(), pathFile);
    name = path.join(pathFile, name);
    console.info(`Saving image to: ${name}`);
  } else {
    console.info(`Saving image to working directory as ${name}`);
  }

  try {
    await imageUtil.show(image.getData());
    await imageUtil.save(image.getData(), name);
  } catch (e) {
    console.warn('Exception thrown saving image.', e);
  }
}

async function main(args = null) {
  const parser = new ArgumentParser();

  addCommonArguments(parser);

  parser.add_argument('-s', '--save', {
    action: 'store_true',
    help: 'Save the image captured by Spot to the working directory. To chose the save location, use --save_path instead.', // eslint-disable-line
  });
  parser.add_argument('--save-path', {
    default: null,
    nargs: '?',
    help: 'Save the image captured by Spot to the provided directory. Invalid path saves to working directory.',
  });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  await helloSpot(options);
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
