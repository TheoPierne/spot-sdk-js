'use strict';

const process = require('node:process');

const argparse = require('argparse');

const util = require('../../bosdyn-client/util');
const { MissionClient } = require('../../bosdyn-mission/client');
const client = require('../../index');

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = client.sdk.create_standard_sdk('get_mission_state_example', [MissionClient]);
  const robot = sdk.create_robot(options.hostname);

  await robot.authenticate(options.username, options.password);
  const clientMission = await robot.ensure_client(MissionClient.default_service_name);

  const state = await clientMission.get_state();
  console.log(`Got mission state:\n`, state.toObject());
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
