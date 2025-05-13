#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const autoReturnPb = require('../../src/bosdyn/api/auto_return/auto_return_pb');
const { AutoReturnClient } = require('../../src/bosdyn-client/auto_return');
const { LeaseClient } = require('../../src/bosdyn-client/lease');
const util = require('../../src/bosdyn-client/util');

const { secondsToDuration } = require('../../src/bosdyn-core/util');
const { createStandardSdk } = require('../../src/index');

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);
  parser.add_argument('--disp', { type: 'float', help: 'Maximum displacement to travel (m)', default: 12.5 });
  parser.add_argument('--duration', { type: 'float', help: 'Maximum duration (s)' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('AutoReturnExample');
  const robot = sdk.createRobot(options.hostname);
  await robot.authenticate(options.username, options.password);

  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  await leaseClient.take();

  /** @type {AutoReturnClient} */
  const autoreturnClient = await robot.ensureClient(AutoReturnClient.defaultServiceName);
  const params = new autoReturnPb.Params().setMaxDisplacement(options.disp);
  if (options.duration) params.setMaxDuration(secondsToDuration(options.duration));

  await autoreturnClient.configure(params, [leaseClient.leaseWallet.getLease().createNewer()]);
  await autoreturnClient.start();
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
