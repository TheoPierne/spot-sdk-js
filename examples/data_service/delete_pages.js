#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { DataServiceClient } = require('../../src/bosdyn-client/data_service');
const {
  NotEstablishedError,
  TimeSyncClient,
  TimeSyncEndpoint,
  timespecToRobotTimespan,
} = require('../../src/bosdyn-client/time_sync');
const util = require('../../src/bosdyn-client/util');
const { messageToString } = require('../../src/bosdyn-core/text_format');
const { createStandardSdk } = require('../../src/index');

/**
 * Delete data pages from robot.
 * @param {object} config The parsed arguments.
 * @returns {Promise<void>}
 */
async function deletePages(config) {
  util.setupLogging(config.verbose);
  const sdk = createStandardSdk('DeletePagesClient');
  const robot = sdk.createRobot(config.hostname);
  await util.authenticate(robot);
  /** @type {DataServiceClient} */
  const serviceClient = await robot.ensureClient(DataServiceClient.defaultServiceName);

  let timeRange = null;

  let timeSyncEndpoint = null;
  if (!config.robot_time) {
    // Establish time sync with robot to obtain skew.
    /** @type {TimeSyncClient} */
    const timeSyncClient = await robot.ensureClient(TimeSyncClient.defaultServiceName);
    timeSyncEndpoint = new TimeSyncEndpoint(timeSyncClient);
    if (!(await timeSyncEndpoint.establishTimesync())) {
      throw new NotEstablishedError('time sync not established');
    }
  }

  if (config.timespan) {
    timeRange = timespecToRobotTimespan(config.timespan, timeSyncEndpoint);
  }

  console.log(messageToString(await serviceClient.deleteDataPages(timeRange, config.id)));
}

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addBaseArguments(parser);
  parser.add_argument('-T', '--timespan', { default: '5m', help: 'Time span (default last 5 minutes)' });
  parser.add_argument('-R', '--robot-time', { action: 'store_true', help: 'Specified timespan is in robot time' });
  parser.add_argument('--id', { nargs: '+', help: 'delete pages by page id' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);
  try {
    await deletePages(options);
    return true;
  } catch (exc) {
    const logger = util.getLogger();
    logger.error(`delete_pages threw an exception: ${exc}`);
    return false;
  }
}

if (require.main === module) {
  // Exit code 1 on failure, like Python.
  main()
    .then(ok => process.exit(ok ? 0 : 1))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}
