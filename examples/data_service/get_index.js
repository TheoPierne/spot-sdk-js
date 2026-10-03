#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const dataIndexPb = require('../../src/bosdyn/api/data_index_pb');
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
 * Get data index from robot.
 * @param {object} options The parsed arguments.
 * @param {dataIndexPb.DataQuery} query
 * @returns {Promise<dataIndexPb.GetDataIndexResponse>}
 */
async function runQuery(options, query) {
  util.setupLogging(options.verbose);
  const sdk = createStandardSdk('GetIndexClient');
  const robot = sdk.createRobot(options.hostname);
  await util.authenticate(robot);
  /** @type {DataServiceClient} */
  const serviceClient = await robot.ensureClient(DataServiceClient.defaultServiceName);

  let timeSyncEndpoint = null;
  if (!options.robot_time) {
    // Establish time sync with robot to obtain skew.
    /** @type {TimeSyncClient} */
    const timeSyncClient = await robot.ensureClient(TimeSyncClient.defaultServiceName);
    timeSyncEndpoint = new TimeSyncEndpoint(timeSyncClient);
    if (!(await timeSyncEndpoint.establishTimesync())) {
      throw new NotEstablishedError('time sync not established');
    }
  }

  // Now assemble the query to obtain a bddf file.

  // Get the parameters for limiting the timespan of the response.
  query.setTimeRange(timespecToRobotTimespan(options.timespan, timeSyncEndpoint));
  return serviceClient.getDataIndex(query);
}

/**
 * Get pages with message blobs from robot.
 * @param {object} options The parsed arguments.
 */
async function getBlobs(options) {
  const query = new dataIndexPb.DataQuery();
  const blobspec = new dataIndexPb.BlobSpec();
  if (options.channel) blobspec.setChannel(options.channel);
  if (options.message_type) blobspec.setMessageType(options.message_type);
  query.addBlobs(blobspec);
  console.log(messageToString(await runQuery(options, query)));
}

/**
 * Get pages with text-messages from robot.
 * @param {object} options The parsed arguments.
 */
async function getText(options) {
  const query = new dataIndexPb.DataQuery().setTextMessages(true);
  console.log(messageToString(await runQuery(options, query)));
}

/**
 * Get pages with events from robot.
 * @param {object} options The parsed arguments.
 */
async function getEvents(options) {
  const query = new dataIndexPb.DataQuery().setEvents(true);
  console.log(messageToString(await runQuery(options, query)));
}

/**
 * Get pages with operator comments from robot.
 * @param {object} options The parsed arguments.
 */
async function getComments(options) {
  const query = new dataIndexPb.DataQuery().setComments(true);
  console.log(messageToString(await runQuery(options, query)));
}

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addBaseArguments(parser);

  function addCommonArgs(subparser) {
    subparser.add_argument('-T', '--timespan', { default: '5m', help: 'Time span (default last 5 minutes)' });
    subparser.add_argument('-R', '--robot-time', { action: 'store_true', help: 'Specified timespan is in robot time' });
  }

  const subparsers = parser.add_subparsers({ help: 'commands', dest: 'command' });
  const blobParser = subparsers.add_parser('blob', { help: 'Get blob pages' });
  addCommonArgs(blobParser);
  blobParser.add_argument('--message-type', { help: 'limit to message-type' });
  blobParser.add_argument('--channel', { help: 'limit to channel' });

  const textParser = subparsers.add_parser('text', { help: 'Get text-message pages' });
  addCommonArgs(textParser);
  const eventParser = subparsers.add_parser('event', { help: 'Get event pages' });
  addCommonArgs(eventParser);
  const commentParser = subparsers.add_parser('comment', { help: 'Get operator-comment pages' });
  addCommonArgs(commentParser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);
  console.log(options);

  try {
    if (options.command === 'blob') {
      await getBlobs(options);
    } else if (options.command === 'text') {
      await getText(options);
    } else if (options.command === 'event') {
      await getEvents(options);
    } else if (options.command === 'comment') {
      await getComments(options);
    } else {
      parser.print_help();
      process.exit(1);
    }
    return true;
  } catch (exc) {
    const logger = util.getLogger();
    logger.error(`get_index threw an exception: ${exc}`);
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
