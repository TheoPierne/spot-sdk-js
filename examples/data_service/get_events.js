#!/usr/bin/env node
'use strict';

// Tutorial showing how to query events from the robot's data service.
// Supports filtering by time range, event type, description, and level.

const process = require('node:process');

const { ArgumentParser } = require('argparse');
const { Int32Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const dataBufferPb = require('../../src/bosdyn/api/data_buffer_pb');
const dataIndexPb = require('../../src/bosdyn/api/data_index_pb');
const { TimeRange } = require('../../src/bosdyn/api/time_range_pb');
const { DataServiceClient } = require('../../src/bosdyn-client/data_service');
const util = require('../../src/bosdyn-client/util');
const { messageToString } = require('../../src/bosdyn-core/text_format');
const { nowSec } = require('../../src/bosdyn-core/util');
const { createStandardSdk } = require('../../src/index');

// Friendly aliases for the Event.Level enum, so a user can pass e.g. "MEDIUM"
// instead of "LEVEL_MEDIUM". The service matches the level filter exactly.
const LEVEL_NAMES = Object.fromEntries(
  Object.entries(dataBufferPb.Event.Level).map(([name, number]) => [name.slice('LEVEL_'.length), number]),
);

/**
 * Parse a CLI time as unix seconds (e.g. 1752451200) or ISO-8601 local time (e.g. 2026-07-14T10:00:00).
 * @param {string} value
 * @returns {number} The seconds since the epoch.
 */
function parseTime(value) {
  const seconds = Number(value);
  if (value.trim() !== '' && !Number.isNaN(seconds)) return seconds;
  // A date alone is the local midnight, like datetime.fromisoformat() of Python (Date reads it in UTC).
  const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00` : value);
  // argparse reports a TypeError as an invalid value, like the ValueError of Python.
  if (Number.isNaN(date.getTime())) throw new TypeError(`Invalid time: ${value}`);
  return date.getTime() / 1000;
}

/**
 * Build an EventsCommentsSpec from the command-line filters.
 * @param {import('../../src/bosdyn-client/robot').Robot} robot
 * @param {object} config The parsed arguments.
 * @returns {Promise<dataIndexPb.EventsCommentsSpec>}
 */
async function buildQuery(robot, config) {
  const query = new dataIndexPb.EventsCommentsSpec();

  // Events are timestamped in robot time; convert the local window through
  // time sync. Default to the last `hours` up to now when not given explicitly.
  const timeSync = await robot.timeSync;
  await timeSync.waitForSync();
  const endSecs = config.end_time ?? nowSec();
  const startSecs = config.start_time ?? endSecs - config.hours * 3600.0;
  query.setTimeRange(
    new TimeRange()
      .setStart(await timeSync.robotTimestampFromLocalSecs(startSecs))
      .setEnd(await timeSync.robotTimestampFromLocalSecs(endSecs)),
  );

  // Type and level are filtered server-side (both exact matches). Description
  // has no server-side filter, so it is applied below.
  const eventSpec = new dataIndexPb.EventSpec();
  if (config.type) eventSpec.setType(config.type);
  if (config.level !== undefined) eventSpec.setLevel(new Int32Value().setValue(LEVEL_NAMES[config.level]));
  query.addEvents(eventSpec);
  query.setMaxEvents(config.max_events);
  return query;
}

/**
 * Get events from robot.
 * @param {object} config The parsed arguments.
 * @returns {Promise<void>}
 */
async function getEvents(config) {
  util.setupLogging(config.verbose);
  const sdk = createStandardSdk('GetEventsClient');
  const robot = sdk.createRobot(config.hostname);
  await util.authenticate(robot);
  /** @type {DataServiceClient} */
  const serviceClient = await robot.ensureClient(DataServiceClient.defaultServiceName);

  const response = await serviceClient.getEventsComments(await buildQuery(robot, config));
  let events = (response.getEventsComments() ?? new dataIndexPb.EventsComments()).getEventsList();

  // Description isn't a server-side filter, so match it here (case-insensitive
  // substring).
  if (config.description) {
    const needle = config.description.toLowerCase();
    events = events.filter(event => event.getDescription().toLowerCase().includes(needle));
  }

  console.log(`Matched ${events.length} event(s).`);
  for (const event of events) {
    console.log(messageToString(event));
  }
}

async function main(args = null) {
  const parser = new ArgumentParser();
  parser.add_argument('--start-time', {
    type: parseTime,
    help: 'Earliest event time, as unix seconds or ISO-8601 local time. Defaults to --hours before --end-time.',
  });
  parser.add_argument('--end-time', {
    type: parseTime,
    help: 'Latest event time, as unix seconds or ISO-8601 local time. Defaults to now.',
  });
  parser.add_argument('--hours', {
    type: 'float',
    default: 24.0,
    help: 'Look-back window in hours, used when --start-time is omitted.',
  });
  parser.add_argument('--type', { help: 'Only return events of this exact type, e.g. "bosdyn:mcp:resource_limit".' });
  parser.add_argument('--level', {
    choices: Object.keys(LEVEL_NAMES).sort(),
    help: 'Only return events at this exact level.',
  });
  parser.add_argument('--description', {
    help: 'Only return events whose description contains this substring (case-insensitive).',
  });
  parser.add_argument('--max-events', {
    type: 'int',
    default: 100,
    help: 'Maximum number of events to request (service caps at 1024).',
  });
  util.addBaseArguments(parser);
  const options = args === null ? parser.parse_args() : parser.parse_args(args);
  try {
    await getEvents(options);
    return true;
  } catch (exc) {
    const logger = util.getLogger();
    logger.error(`get_events threw an exception: ${exc}`);
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
