#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const dataIndexPb = require('../../src/bosdyn/api/data_index_pb');
const { DataServiceClient } = require('../../src/bosdyn-client/data_service');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

async function getComments(config) {
  const sdk = createStandardSdk('GetCommentsClient');
  const robot = sdk.createRobot(config.hostname);
  await robot.authenticate(config.username, config.password);
  await (await robot.timeSync).waitForSync();

  /** @type {DataServiceClient} */
  const serviceClient = await robot.ensureClient(DataServiceClient.defaultServiceName);
  const query = new dataIndexPb.EventsCommentsSpec().setComments(true);
  const response = await serviceClient.getEventsComments(query);
  console.log(response.toObject());
}

function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  return getComments(options);
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
