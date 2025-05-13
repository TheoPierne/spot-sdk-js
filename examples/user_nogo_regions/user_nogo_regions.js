#!/usr/bin/env node
'use strict';

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { ArgumentParser } = require('argparse');

const robotCommandPb = require('../../src/bosdyn/api/robot_command_pb');
const worldObjectPb = require('../../src/bosdyn/api/world_object_pb');
const { getVisionTformBody, VISION_FRAME_NAME } = require('../../src/bosdyn-client/frame_helpers');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { SE3Pose, Quat } = require('../../src/bosdyn-client/math_helpers');
const { RobotCommandClient, blockingStand } = require('../../src/bosdyn-client/robot_command');
const { RobotStateClient } = require('../../src/bosdyn-client/robot_state');
const { addBaseArguments } = require('../../src/bosdyn-client/util');
const { WorldObjectClient, sendAddMutationRequests } = require('../../src/bosdyn-client/world_object');
const { createStandardSdk } = require('../../src/index');

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
  await robot.authenticate(config.username, config.password);
  await (await robot.timeSync).waitForSync();

  /** @type {WorldObjectClient} */
  const worldObjectClient = robot.ensureClient(WorldObjectClient.defaultServiceName);

  console.assert(
    !(await robot.isEstopped()),
    `Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.`,
  );

  /** @type {LeaseClient} */
  const leaseClient = robot.ensureClient(LeaseClient.defaultServiceName);
  /** @type {RobotStateClient} */
  const robotStateClient = robot.ensureClient(RobotStateClient.defaultServiceName);
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient);
  await leaseKeepAlive.waitForInitialization();

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
  const visTObs1 = visionTBody.mult(bodyTObs0);
  const obs1 = createBodyObstacleBox(
    'obstacle1',
    0.5 * BOX_LEN_X,
    BOX_LEN_Y_LONG,
    VISION_FRAME_NAME,
    visTObs1,
    lifetimeSecsObs1,
    { disableFoot: true },
  );

  const lifetimeSecsObs2 = 8;
  const bodyTObs2 = new SE3Pose(1.3, 0.5, 0, new Quat());
  const visTObs2 = visionTBody.mult(bodyTObs0);
  const obs2 = createBodyObstacleBox(
    'obstacle2',
    0.5 * BOX_LEN_X,
    BOX_LEN_Y_LONG,
    VISION_FRAME_NAME,
    visTObs1,
    lifetimeSecsObs1,
    { disableBody: true, disableFootInflate: true },
  );

  const lifetimeSecsObs3 = 300;
  const bodyTObs3 = new SE3Pose(1.6, 0, 0, new Quat());
  const visTObs3 = visionTBody.mult(bodyTObs0);
  const obs3 = createBodyObstacleBox(
    'obstacle3',
    0.5 * BOX_LEN_X,
    BOX_LEN_Y_LONG,
    VISION_FRAME_NAME,
    visTObs1,
    lifetimeSecsObs1,
    { disableFootInflate: true },
  );

  const obstacles = [obs0, obs1, obs2, obs3];
  const objectsId = await sendAddMutationRequests(worldObjectClient, obstacles);

  const requestNogos = [worldObjectPb.WorldObjectType.WORLD_OBJECT_USER_NOGO];
  let nogoObjects = (await worldObjectClient.listWorldObjects(requestNogos)).getWorldObjectsList();
  printObjectNamesAndIds(nogoObjects, 'List of user nogo regions after initial add:');

  let [cmd1, trajTime] = createMobilityGotoCommand(2, 0, visionTBody);
  robot.logger.info('Sending first body trajectory command.');
  await commandClient.robotCommand(cmd1, Date.now() + 10_000);

  await sleep(6_000);
  nogoObjects = (await worldObjectClient.listWorldObjects(requestNogos)).getWorldObjectsList();
  printObjectNamesAndIds(nogoObjects, 'List of user nogo regions after first expired time:');
}

function createMobilityGotoCommand(xRtFrame, yRtFrame, visionTFrame) {
  const frameName = VISION_FRAME_NAME;
  const command = new robotCommandPb.RobotCommand();
}

async function main() {
  const parser = new ArgumentParser();
  addBaseArguments(parser);

  const options = parser.parse_args();

  try {
    await setAndTestUserObstacles(options);
    return true;
  } catch (err) {
    console.error('Threw an exception');
    return false;
  }
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
