'use strict';

const process = require('node:process');

const argparse = require('argparse');

const { AutoReturnClient } = require('../../bosdyn-client/auto_return');
const { LeaseClient } = require('../../bosdyn-client/lease');
const util = require('../../bosdyn-client/util');

const { seconds_to_duration } = require('../../bosdyn-core/util');

const auto_return_pb = require('../../bosdyn/api/auto_return/auto_return_pb');
const client = require('../../index');

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);
  parser.add_argument('--disp', { type: 'float', help: 'Maximum displacement to travel (m)', default: 12.5 });
  parser.add_argument('--duration', { type: 'float', help: 'Maximum duration (s)' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = client.sdk.create_standard_sdk('AutoReturnExample');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);

  const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
  await lease_client.take();

  const autoreturn_client = await robot.ensure_client(AutoReturnClient.default_service_name);
  const params = new auto_return_pb.Params().setMaxDisplacement(options.disp);
  if (options.duration) params.setMaxDuration(seconds_to_duration(options.duration));

  await autoreturn_client.configure(params, [lease_client.lease_wallet.get_lease().create_newer()]);
  await autoreturn_client.start();
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
