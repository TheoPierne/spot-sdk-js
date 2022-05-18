'use strict';

const argparse = require('argparse');

const { RobotStateClient } = require('../../bosdyn-client/robot_state');
const util = require('../../bosdyn-client/util');
const client = require('../../index');

async function main() {
  const commands = ['state', 'hardware', 'metrics'];

  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);
  parser.add_argument('command', { choices: commands, help: 'Command to run' });

  const options = parser.parse_args();

  const sdk = client.sdk.create_standard_sdk('RobotStateClient');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);
  const robot_state_client = await robot.ensure_client(RobotStateClient.default_service_name);

  if (options.command === 'state') {
    const rep = await robot_state_client.get_robot_state();
    console.log(rep.toObject());
  } else if (options.command === 'hardware') {
    const rep = await robot_state_client.get_hardware_config_with_link_info();
    console.log(rep.toObject());
  } else if (options.command === 'metrics') {
    const rep = await robot_state_client.get_robot_metrics();
    console.log(rep.toObject());
  }

  return true;
}

if (require.main === module) {
  main();
} else {
  module.exports = main;
}
