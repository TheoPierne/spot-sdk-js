#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const { PageInfo } = require('../../src/bosdyn/api/data_index_pb');
const { TimeRange } = require('../../src/bosdyn/api/time_range_pb');
const { DataServiceClient } = require('../../src/bosdyn-client/data_service');
const {
  NotEstablishedError,
  TimeSyncClient,
  TimeSyncEndpoint,
  timespecToRobotTimespan,
} = require('../../src/bosdyn-client/time_sync');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

/**
 * Round half to even, like round() of Python.
 * @param {number} value
 * @returns {number}
 */
function roundHalfEven(value) {
  const rounded = Math.round(value);
  return rounded - value === 0.5 && rounded % 2 !== 0 ? rounded - 1 : rounded;
}

/**
 * The local date and time of seconds since the epoch, like datetime.fromtimestamp() of Python (to the microsecond).
 * @param {number} secs
 * @returns {{date: string, time: string}} The date (yyyy-mm-dd) and the time (hh:mm:ss, then .ffffff if not 0), as
 * str() of a datetime prints them.
 */
function fromTimestamp(secs) {
  let wholeSecs = Math.trunc(secs);
  let micros = roundHalfEven((secs - wholeSecs) * 1e6);
  if (micros >= 1e6) {
    wholeSecs += 1;
    micros -= 1e6;
  } else if (micros < 0) {
    wholeSecs -= 1;
    micros += 1e6;
  }
  const dt = new Date(wholeSecs * 1000);
  const pad = (number, width = 2) => String(number).padStart(width, '0');
  return {
    date: `${pad(dt.getFullYear(), 4)}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`,
    time: `${pad(dt.getHours())}:${pad(dt.getMinutes())}:${pad(dt.getSeconds())}${micros ? `.${pad(micros, 6)}` : ''}`,
  };
}

function timestampToStr(timestamp, firstTimestamp = null) {
  const tsToDt = tstamp => fromTimestamp(tstamp.getSeconds() + 1e-9 * tstamp.getNanos());

  const thisDt = tsToDt(timestamp);
  let showDate = true;
  if (firstTimestamp) {
    const firstDt = tsToDt(firstTimestamp);
    showDate = thisDt.date !== firstDt.date;
  }
  return showDate ? `${thisDt.date} ${thisDt.time}` : thisDt.time;
}

function showPage(page) {
  const timeRange = page.getTimeRange() ?? new TimeRange();
  const start = timeRange.getStart() ?? new Timestamp();
  const startStr = timestampToStr(start);
  const endStr = timestampToStr(timeRange.getEnd() ?? new Timestamp(), start);
  const isOpen = page.getIsOpen() ? ' (open)' : '';
  // Python glues "bytes" to the page format (its f-string continues the line with a backslash): a space here.
  const format = util.safePbEnumToString(page.getFormat(), PageInfo.PageFormat);
  const compression = util.safePbEnumToString(page.getCompression(), PageInfo.Compression);
  console.log(
    `${page.getId()}\n    ${startStr} - ${endStr} (${page.getSource()})\n    ${page.getNumTicks()} ticks ` +
      `${page.getTotalBytes()} bytes ${format} ${compression}${isOpen}\n    ${page.getPath()}\n`,
  );
}

/**
 * Get data pages from robot.
 * @param {object} options The parsed arguments.
 * @returns {Promise<void>}
 */
async function getPages(options) {
  util.setupLogging(options.verbose);
  const sdk = createStandardSdk('GetPagesClient');
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

  const resp = await serviceClient.getDataPages(timespecToRobotTimespan(options.timespan, timeSyncEndpoint));
  console.log(`-------- ${resp.getPagesList().length} pages --------\n`);
  for (const page of resp.getPagesList()) {
    showPage(page);
  }
}

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addBaseArguments(parser);
  parser.add_argument('-T', '--timespan', { default: '5m', help: 'Time span (default last 5 minutes)' });
  parser.add_argument('-R', '--robot-time', { action: 'store_true', help: 'Specified timespan is in robot time' });
  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  try {
    await getPages(options);
    return true;
  } catch (exc) {
    const logger = util.getLogger();
    logger.error(`get_pages threw an exception: ${exc}`);
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
