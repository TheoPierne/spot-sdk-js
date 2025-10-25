#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { blockingDockRobot, DockingClient, getDockId, blockingUndock } = require('../../src/bosdyn-client/docking');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { LicenseClient } = require('../../src/bosdyn-client/license');
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
  /** @type {LicenseClient} */
  const licenseClient = await robot.ensureClient(LicenseClient.defaultServiceName);

  const features = await licenseClient.getFeatureEnabled([DockingClient.defaultServiceName]);

  if (!features.has(DockingClient.defaultServiceName)) {
    robot.logger.error('This robot is not licensed for docking.');
    process.exit(1);
  }

  /** @type {RobotCommandClient} */
  const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);

  // To steal control away from another user to dock the robot, uncomment the line below.
  /* await leaseClient.take() */
  // eslint-disable-next-line
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  await leaseKeepAlive.waitForInitialization();
  await robot.powerOn();

  if (config.undock) {
    const dockId = await getDockId(robot);
    if (dockId === null) {
      console.log('[DOCK MY ROBOT] Robot does not seem to be docked; trying anyway');
    } else {
      console.log(`[DOCK MY ROBOT] Docked at ${dockId}`);
    }

    await blockingUndock(robot);
    console.log('[DOCK MY ROBOT] Undocking success');
  } else {
    await blockingStand(commandClient);
    await blockingDockRobot(robot, config.dock_id);
    console.log('[DOCK MY ROBOT] Docking Success !');
  }

  await leaseKeepAlive.shutdown();
}

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);
  const group = parser.add_mutually_exclusive_group({ required: true });
  group.add_argument('--dock-id', { type: 'int', help: 'Docking station ID to dock at' });
  group.add_argument('--undock', { action: 'store_true', help: 'Undock, instead of docking.' });

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
