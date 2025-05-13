#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { blockingDockRobot } = require('../../src/bosdyn-client/docking');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { RobotCommandClient, blockingStand } = require('../../src/bosdyn-client/robot_command');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

async function runDocking(config) {
  const sdk = createStandardSdk('DockingClient');
  const robot = sdk.createRobot(config.hostname);
  await robot.authenticate(config.username, config.password);

  await (await robot.timeSync).waitForSync();

  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  /** @type {RobotCommandClient} */
  const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);

  // To steal control away from another user to dock the robot, uncomment the line below.
  /* await lease_client.take() */
  // eslint-disable-next-line
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient);
  await leaseKeepAlive.waitForInitialization();
  await robot.powerOn();
  await blockingStand(commandClient);
  await blockingDockRobot(robot, config.dock_id);
  console.log('[DOCK MY ROBOT] Docking Success !');
  await leaseKeepAlive.shutdown();
}

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);
  parser.add_argument('--dock-id', { required: true, type: 'int', help: 'Docking station ID to dock at' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);
  await runDocking(options);
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
