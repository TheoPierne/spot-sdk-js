#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { TimeSyncEndpoint, TimeSyncClient } = require('../../src/bosdyn-client/time_sync');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('TimeSyncClient');
  const robot = sdk.createRobot(options.hostname);
  await robot.authenticate(options.username, options.password);
  /** @type {TimeSyncClient} */
  const timeSyncClient = await robot.ensureClient(TimeSyncClient.defaultServiceName);

  const timeSyncEndpoint = new TimeSyncEndpoint(timeSyncClient);

  const didEstablish = await timeSyncEndpoint.establishTimesync(10, false);

  console.log(`Did establish timesync: ${didEstablish}`);
  console.log(`Client ID: ${timeSyncEndpoint.clockIdentifier}`);
  console.log(
    `Clock skew seconds: ${timeSyncEndpoint.clockSkew.getSeconds()} 
    nanos: ${timeSyncEndpoint.clockSkew.getNanos()}`,
  );
  console.log(
    `Round trip time seconds: ${timeSyncEndpoint.roundTripTime.getSeconds()} 
    nanos: ${timeSyncEndpoint.roundTripTime.getNanos()}`,
  );
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
