#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const util = require('../../src/bosdyn-client/util');
const { MissionClient } = require('../../src/bosdyn-mission/client');
const { createStandardSdk } = require('../../src/index');

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('get_mission_state_example', [MissionClient]);
  const robot = sdk.createRobot(options.hostname);

  await robot.authenticate(options.username, options.password);
  /** @type {MissionClient} */
  const clientMission = await robot.ensureClient(MissionClient.defaultServiceName);

  const state = await clientMission.getState();
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
