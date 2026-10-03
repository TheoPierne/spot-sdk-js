#!/usr/bin/env node
'use strict';

const assert = require('node:assert');
const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { ArgumentParser } = require('argparse');

const { SE2TrajectoryCommand } = require('../../src/bosdyn/api/basic_command_pb');
const { Box2, Box2WithFrame, SE2Pose, Vec2 } = require('../../src/bosdyn/api/geometry_pb');
const { MobilityCommand } = require('../../src/bosdyn/api/mobility_command_pb');
const robotCommandPb = require('../../src/bosdyn/api/robot_command_pb');
const { SynchronizedCommand } = require('../../src/bosdyn/api/synchronized_command_pb');
const { SE2Trajectory, SE2TrajectoryPoint } = require('../../src/bosdyn/api/trajectory_pb');
const worldObjectPb = require('../../src/bosdyn/api/world_object_pb');
const { getVisionTformBody, VISION_FRAME_NAME } = require('../../src/bosdyn-client/frame_helpers');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { SE3Pose, Quat } = require('../../src/bosdyn-client/math_helpers');
const { RobotCommandClient, blockingStand } = require('../../src/bosdyn-client/robot_command');
const { RobotStateClient } = require('../../src/bosdyn-client/robot_state');
const { addBaseArguments, authenticate } = require('../../src/bosdyn-client/util');
const {
  WorldObjectClient,
  sendAddMutationRequests,
  sendDeleteMutationRequests,
} = require('../../src/bosdyn-client/world_object');
const { nowSec, nowTimestamp, secondsToDuration } = require('../../src/bosdyn-core/util');
const { createStandardSdk } = require('../../src/index');

// Seconds, like Python (end times are in seconds).
const _SECONDS_FULL = 10;
const BOX_LEN_X = 0.2;
const BOX_LEN_Y_LONG = 10;
const BOX_LEN_Y_SHORT = 0.5;

/**
 * A simple example of using the Boston Dynamics internal API to set user-defined boxes that
 * represent body and/or foot obstacles.
 *
 * Please be aware that this demo causes the robot to walk at fake obstacles, then through the
 * obstacles later to test that all have been successfully cleared.
 *
 * The robot requires about 2m of open space in front of it to complete this example.
 * @param {Object} config The args from ArgumentParser
 */
async function setAndTestUserObstacles(config) {
  const sdk = createStandardSdk('UserNoGoClient');
  const robot = sdk.createRobot(config.hostname);
  await authenticate(robot);
  await (await robot.timeSync).waitForSync();

  /** @type {WorldObjectClient} */
  // ensureClient() is async: the clients were promises.
  const worldObjectClient = await robot.ensureClient(WorldObjectClient.defaultServiceName);

  console.assert(
    !(await robot.isEstopped()),
    `Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.`,
  );

  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  /** @type {RobotStateClient} */
  const robotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  await leaseKeepAlive.waitForInitialization();

  try {
    robot.logger.info('Powering on robot... This may take a several seconds.');
    await robot.powerOn(20_000);
    console.assert(await robot.isPoweredOn(), 'Robot power on failed.');
    robot.logger.info('Robot powered on.');

    robot.logger.info('Commanding robot to stand...');
    /** @type {RobotCommandClient} */
    const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);
    await blockingStand(commandClient, 20_000);
    robot.logger.info('Robot standing.');

    const robotState = await robotStateClient.getRobotState();
    const visionTBody = getVisionTformBody(robotState.getKinematicState().getTransformsSnapshot());

    const lifetimeSecsObs0 = 5;
    const bodyTObs0 = new SE3Pose(1, 0, 0, new Quat());
    const visTObs0 = visionTBody.mult(bodyTObs0);
    const obs0 = createBodyObstacleBox(
      'obstacle0',
      BOX_LEN_X,
      BOX_LEN_Y_LONG,
      VISION_FRAME_NAME,
      visTObs0,
      lifetimeSecsObs0,
    );

    const lifetimeSecsObs1 = 8;
    const bodyTObs1 = new SE3Pose(1.3, -0.5, 0, new Quat());
    const visTObs1 = visionTBody.mult(bodyTObs1);
    const obs1 = createBodyObstacleBox(
      'obstacle1',
      0.5 * BOX_LEN_X,
      BOX_LEN_Y_SHORT,
      VISION_FRAME_NAME,
      visTObs1,
      lifetimeSecsObs1,
      { disableFoot: true },
    );

    const lifetimeSecsObs2 = 8;
    const bodyTObs2 = new SE3Pose(1.3, 0.5, 0, new Quat());
    const visTObs2 = visionTBody.mult(bodyTObs2);
    const obs2 = createBodyObstacleBox(
      'obstacle2',
      0.5 * BOX_LEN_X,
      BOX_LEN_Y_SHORT,
      VISION_FRAME_NAME,
      visTObs2,
      lifetimeSecsObs2,
      { disableBody: true, disableFootInflate: true },
    );

    const lifetimeSecsObs3 = 300;
    const bodyTObs3 = new SE3Pose(1.6, 0, 0, new Quat());
    const visTObs3 = visionTBody.mult(bodyTObs3);
    const obs3 = createBodyObstacleBox(
      'obstacle3',
      BOX_LEN_X,
      BOX_LEN_Y_LONG,
      VISION_FRAME_NAME,
      visTObs3,
      lifetimeSecsObs3,
      { disableFootInflate: true },
    );

    const obstacles = [obs0, obs1, obs2, obs3];
    const objectsId = await sendAddMutationRequests(worldObjectClient, obstacles);

    const requestNogos = [worldObjectPb.WorldObjectType.WORLD_OBJECT_USER_NOGO];
    let nogoObjects = (await worldObjectClient.listWorldObjects(requestNogos)).getWorldObjectsList();
    printObjectNamesAndIds(nogoObjects, 'List of user nogo regions after initial add:');

    let [cmd1] = createMobilityGotoCommand(2, 0, visionTBody);
    robot.logger.info('Sending first body trajectory command.');
    await commandClient.robotCommand(cmd1, nowSec() + 10);
    await sleep(6_000);

    nogoObjects = (await worldObjectClient.listWorldObjects(requestNogos)).getWorldObjectsList();
    printObjectNamesAndIds(nogoObjects, 'List of user nogo regions after first expired time:');

    [cmd1] = createMobilityGotoCommand(2, 0, visionTBody);
    robot.logger.info('Sending second body trajectory command.');
    await commandClient.robotCommand(cmd1, nowSec() + 10);
    await sleep(6_000);

    nogoObjects = (await worldObjectClient.listWorldObjects(requestNogos)).getWorldObjectsList();
    printObjectNamesAndIds(nogoObjects, 'List of user nogo objects after second obstacle expiration:');

    await sendDeleteMutationRequests(worldObjectClient, [objectsId.at(-1)]);
    await sleep(500);

    nogoObjects = (await worldObjectClient.listWorldObjects(requestNogos)).getWorldObjectsList();
    printObjectNamesAndIds(nogoObjects, 'List of user nogo regions after manually deleting:');

    let [cmd2, trajTime] = createMobilityGotoCommand(2, 0, visionTBody);
    robot.logger.info('Sending third body trajectory command.');
    await commandClient.robotCommand(cmd2, nowSec() + 10);
    await sleep(6_000);

    [cmd2, trajTime] = createMobilityGotoCommand(0, 0, visionTBody);
    robot.logger.info('Sending robot back to starting pose.');
    await commandClient.robotCommand(cmd2, nowSec() + _SECONDS_FULL);
    await sleep(trajTime * 1_000);

    await robot.powerOff(false, 20_000);
    assert(!(await robot.isPoweredOn()), 'Robot power off failed');
    robot.logger.info('Robot safely powered off.');
  } finally {
    // The lease is returned, like the with block of Python.
    await leaseKeepAlive.shutdown();
  }
}

function printObjectNamesAndIds(worldObjectList, optionalStr = 'World objects: ') {
  console.log(`${optionalStr} [`);
  for (const obj of worldObjectList) {
    console.log(`\t${obj.getName()} (${obj.getId()})`);
  }
  console.log(']\n');
}

/**
 * A user nogo region box, like create_body_obstacle_box() of Python.
 * @param {string} obsname
 * @param {number} xSpan
 * @param {number} ySpan
 * @param {string} frameName
 * @param {SE3Pose} frameTBox
 * @param {number} lifetimeSec
 * @param {{disableFoot?: boolean, disableBody?: boolean, disableFootInflate?: boolean}} [options]
 * @returns {worldObjectPb.WorldObject}
 */
function createBodyObstacleBox(
  obsname,
  xSpan,
  ySpan,
  frameName,
  frameTBox,
  lifetimeSec,
  { disableFoot = false, disableBody = false, disableFootInflate = false } = {},
) {
  const box = new Box2WithFrame()
    .setFrameName(frameName)
    .setBox(new Box2().setSize(new Vec2().setX(xSpan).setY(ySpan)))
    .setFrameNameTformBox(frameTBox.toProto());
  const nogoRegionProperties = new worldObjectPb.NoGoRegionProperties()
    .setDisableFootObstacleGeneration(disableFoot)
    .setDisableBodyObstacleGeneration(disableBody)
    .setDisableFootObstacleInflation(disableFootInflate)
    .setBox(box);
  return new worldObjectPb.WorldObject()
    .setName(obsname)
    .setAcquisitionTime(nowTimestamp())
    .setObjectLifetime(secondsToDuration(lifetimeSec))
    .setNogoRegionProperties(nogoRegionProperties);
}

/**
 * @param {number} xRtFrame
 * @param {number} yRtFrame
 * @param {SE3Pose} visionTFrame
 */
function createMobilityGotoCommand(xRtFrame, yRtFrame, visionTFrame) {
  const frameName = VISION_FRAME_NAME;

  // Math.max() of an array was NaN.
  const trajTime = Math.max(4, 1.5 * Math.sqrt(xRtFrame * xRtFrame + yRtFrame * yRtFrame));
  const duration = secondsToDuration(trajTime);
  const [xEwrtV, yEwrtV] = visionTFrame.transformPoint(xRtFrame, yRtFrame, 0);

  const point = new SE2TrajectoryPoint()
    .setPose(new SE2Pose().setPosition(new Vec2().setX(xEwrtV).setY(yEwrtV)).setAngle(visionTFrame.rot.toYaw()))
    .setTimeSinceReference(duration);

  const command = new robotCommandPb.RobotCommand().setSynchronizedCommand(
    new SynchronizedCommand.Request().setMobilityCommand(
      new MobilityCommand.Request().setSe2TrajectoryRequest(
        new SE2TrajectoryCommand.Request()
          .setTrajectory(new SE2Trajectory().setPointsList([point]))
          .setSe2FrameName(frameName),
      ),
    ),
  );

  return [command, trajTime];
}

async function main() {
  const parser = new ArgumentParser();
  addBaseArguments(parser);

  const options = parser.parse_args();

  try {
    await setAndTestUserObstacles(options);
    return true;
  } catch (err) {
    console.error('Threw an exception', err);
    return false;
  }
}

if (require.main === module) {
  // Exit code 1 on failure, like Python.
  main()
    .then(ok => process.exit(ok ? 0 : 1))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}
