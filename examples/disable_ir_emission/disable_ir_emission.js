'use strict';

const argparse = require('argparse');

const { IREnableDisableServiceClient } = require('../../bosdyn-client/ir_enable_disable');
const util = require('../../bosdyn-client/util');
const client = require('../../index');

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);

  const group = parser.add_mutually_exclusive_group({ required: true });
  group.add_argument('--enable', { action: 'store_true', dest: 'enable', help: 'Enable IR emissions' });
  group.add_argument('--disable', { action: 'store_false', dest: 'enable', help: 'Disable IR emissions' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = client.sdk.create_standard_sdk('ir_emission_test');
  const robot = sdk.create_robot(options.hostname);

  await robot.authenticate(options.username, options.password);
  const ir_enable_disable_client = await robot.ensure_client(IREnableDisableServiceClient.default_service_name);

  await ir_enable_disable_client.set_ir_enabled(options.enable);

  return true;
}

if (require.main === module) {
  main();
} else {
  module.exports = main;
}
