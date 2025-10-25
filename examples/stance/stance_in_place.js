#!/usr/bin/env node
'use strict';

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { ArgumentParser } = require('argparse');

const {
  getSe2ATformB,
  VISION_FRAME_NAME,
  GRAV_ALIGNED_BODY_FRAME_NAME,
} = require('../../src/bosdyn-client/frame_helpers');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { SE2Pose } = require('../../src/bosdyn-client/math_helpers');
const { RobotCommandClient, RobotCommandBuilder, blockingStand } = require('../../src/bosdyn-client/robot_command');
const { RobotStateClient } = require('../../src/bosdyn-client/robot_state');

const util = require('../../src/bosdyn-client/util');

const { createStandardSdk } = require('../../src/index');

async function run(config) {
  const sdk = createStandardSdk('StanceClient');
  const robot = sdk.createRobot(config.hostname);
  await robot.authenticate(config.username, config.password);
  await (await robot.timeSync).waitForSync();

  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { must_acquire: true, return_at_exit: true });
  await leaseKeepAlive.waitForInitialization();

  /** @type {RobotCommandClient} */
  const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);
  /** @type {RobotStateClient} */
  const robotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
  const state = await robotStateClient.getRobotState();

  // This example ues the current body position, but you can specify any position.
  // A common use is to specify it relative to something you know, like a fiducial.
  const voTBody = getSe2ATformB(
    state.getKinematicState().getTransformsSnapshot(),
    VISION_FRAME_NAME,
    GRAV_ALIGNED_BODY_FRAME_NAME,
  );

  // Power On
  await robot.powerOn();
  console.assert(await robot.isPoweredOn(), 'Robot power on failed.');

  // Stand
  await blockingStand(commandClient);

  // #### Example stance offsets from body position. ####
  const xOffset = config.x_offset;
  const yOffset = config.y_offset;

  const posFlRtVision = voTBody.mult(new SE2Pose(xOffset, yOffset, 0));
  const posFrRtVision = voTBody.mult(new SE2Pose(xOffset, -yOffset, 0));
  const posHlRtVision = voTBody.mult(new SE2Pose(-xOffset, yOffset, 0));
  const posHrRtVision = voTBody.mult(new SE2Pose(-xOffset, -yOffset, 0));

  const stanceCmd = RobotCommandBuilder.stanceCommand(
    VISION_FRAME_NAME,
    posFlRtVision.position,
    posFrRtVision.position,
    posHlRtVision.position,
    posHrRtVision.position,
  );

  console.log('After stance adjustment, press Ctrl-C to sit Spot and turn off motors.');

  /* eslint-disable no-constant-condition, no-await-in-loop */

  while (true) {
    // Update end time
    const time = await (await robot.timeSync).robotTimestampFromLocalSecs(Date.now() + 5_000);
    // eslint-disable-next-line
    stanceCmd.getSynchronizedCommand().getMobilityCommand().getStanceRequest().setEndTime(time);
    // Send the command
    await commandClient.robotCommand(stanceCmd);

    await sleep(1_000);
  }
}

function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);
  parser.add_argument('--x-offset', { default: 0.3, type: 'float', help: 'Offset in X for Spot to step' });
  parser.add_argument('--y-offset', { default: 0.3, type: 'float', help: 'Offset in Y for Spot to step' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  if (!(Math.abs(options.x_offset) >= 0.2 && Math.abs(options.x_offset) <= 0.5)) {
    throw new TypeError('Invalid x-offset value. Please pass a value between 0.2 and 0.5');
  }

  if (!(Math.abs(options.y_offset) >= 0.1 && Math.abs(options.y_offset) <= 0.4)) {
    throw new TypeError('Invalid y-offset value. Please pass a value between 0.1 and 0.4');
  }

  return run(options);
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
