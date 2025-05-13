#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { IREnableDisableServiceClient } = require('../../src/bosdyn-client/ir_enable_disable');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

async function main(args = null) {
  const parser = new ArgumentParser();
  util.add_common_arguments(parser);

  const group = parser.add_mutually_exclusive_group({ required: true });
  group.add_argument('--enable', { action: 'store_true', dest: 'enable', help: 'Enable IR emissions' });
  group.add_argument('--disable', { action: 'store_false', dest: 'enable', help: 'Disable IR emissions' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('ir_emission_test');
  const robot = sdk.createRobot(options.hostname);

  await robot.authenticate(options.username, options.password);
  /** @type {IREnableDisableServiceClient} */
  const irEnableDisableClient = await robot.ensureClient(IREnableDisableServiceClient.defaultServiceName);

  await irEnableDisableClient.setIrEnabled(options.enable);
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
