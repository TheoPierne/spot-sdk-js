'use strict';

const process = require('node:process');

const argparse = require('argparse');

const { blocking_dock_robot } = require('../../bosdyn-client/docking');
const { LeaseClient, LeaseKeepAlive } = require('../../bosdyn-client/lease');
const { RobotCommandClient, blocking_stand } = require('../../bosdyn-client/robot_command');
const util = require('../../bosdyn-client/util');
const client = require('../../index');

async function run_docking(config) {
  const sdk = client.sdk.create_standard_sdk('DockingClient');
  const robot = sdk.create_robot(config.hostname);
  await robot.authenticate(config.username, config.password);

  await (await robot.time_sync).wait_for_sync();

  const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
  const command_client = await robot.ensure_client(RobotCommandClient.default_service_name);

  // To steal control away from another user to dock the robot, uncomment the line below.
  /* await lease_client.take() */
  // eslint-disable-next-line
  const leaseKeepAlive = new LeaseKeepAlive(lease_client);
  await leaseKeepAlive.init();
  await robot.power_on();
  await blocking_stand(command_client);
  await blocking_dock_robot(robot, config.dock_id);
  console.log('[DOCK MY ROBOT] Docking Success !');
  await leaseKeepAlive.shutdown();
  process.exit(0);
}

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);
  parser.add_argument('--dock-id', { required: true, type: 'int', help: 'Docking station ID to dock at' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);
  await run_docking(options);
}

if (require.main === module) {
  main();
} else {
  module.exports = main;
}
