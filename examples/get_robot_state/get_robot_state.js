#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { RobotStateClient } = require('../../src/bosdyn-client/robot_state');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

async function main() {
  const commands = ['state', 'hardware', 'metrics', 'joints', 'frame_tree'];

  const parser = new ArgumentParser();
  util.addCommonArguments(parser);
  parser.add_argument('command', { choices: commands, help: 'Command to run' });

  const options = parser.parse_args();

  const sdk = createStandardSdk('RobotStateClient');
  const robot = sdk.createRobot(options.hostname);
  await robot.authenticate(options.username, options.password);
  /** @type {RobotStateClient} */
  const robotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);

  if (options.command === 'state') {
    const rep = await robotStateClient.getRobotState();
    console.log(rep.toObject());
  } else if (options.command === 'hardware') {
    const rep = await robotStateClient.getHardwareConfigWithLinkInfo();
    console.log(rep.toObject());
  } else if (options.command === 'metrics') {
    const rep = await robotStateClient.getRobotMetrics();
    console.log(rep.toObject());
  } else if (options.command === 'joints') {
    const robotState = await robotStateClient.getRobotState();
    console.log(robotState.getKinematicState().getJointStatesList().map(e => e.toObject()));
  } else if (options.command === 'frame_tree') {
    const robotState = await robotStateClient.getRobotState();
    console.log(robotState.getKinematicState().getTransformsSnapshot().toObject());
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
