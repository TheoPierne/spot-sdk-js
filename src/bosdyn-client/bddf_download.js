'use strict';

const { writeFileSync } = require('node:fs');
const process = require('node:process');

const timeRangePb = require('../bosdyn/api/time_range_pb');

const {
  TimeSyncEndpoint,
  TimeSyncClient,
  NotEstablishedError,
  robotTimeRangeFromNanoseconds,
  timespecToRobotTimespan,
} = require('./time_sync');

const { TIME_FORMAT_DESC } = require('../bosdyn-core/util');

// Const REQUEST_CHUNK_SIZE = 10 * 1024 ** 2;
const DEFAULT_OUTPUT = './download.bddf';

function _printHelpTimespan() {
  console.log(`
    A timespan is {{timeval}} or {{timeval}}-{{timeval}}.

    ${TIME_FORMAT_DESC}

    For example:
    '5m'                    From 5 minutes ago until now.
    '20201107-20201108'     All of 2020/11/07.
    `);
}

function _bddfUrl(hostname, data = null) {
  let str = '';
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      str += `${key}=${value}`;
    }
  }
  return `https://${hostname}/v1/data-buffer/bddf/${str === '' ? '' : `?${str}`}`;
}

function _httpHeaders(robot) {
  return { Authorization: `Bearer ${robot.user_token}` };
}

/**
 * 
 * @param {timeRangePb.TimeRange} timeRange 
 * @returns {{from_sec: string, to_sec: string}}
 */
function _requestTimespanFromTimeRange(timeRange) {
  let ret = {};
  if (timeRange.hasStart()) ret.from_sec = `${timeRange.getStart().getSeconds()}`;
  if (timeRange.hasEnd()) ret.to_sec = `${timeRange.getEnd().getSeconds()}`;
  return ret;
}

function _requestTimespanFromSpec(timespec, timeSyncEndpoint) {
  return _requestTimespanFromTimeRange(timespecToRobotTimespan(timespec, timeSyncEndpoint));
}

function _requestTimespanFromNanoseconds(startNsec, endNsec, timeSyncEndpoint) {
  return _requestTimespanFromTimeRange(robotTimeRangeFromNanoseconds(startNsec, endNsec, timeSyncEndpoint));
}

async function downloadData(
  robot,
  hostname,
  startNsec = null,
  endNsec = null,
  timespanSpec = null,
  outputFilename = null,
  robotTime = false,
  channel = null,
  messageType = null,
  grpcService = null,
) {
  let timeSyncEndpoint;
  if (!robotTime) {
    let timeSyncClient = await robot.ensureClient(TimeSyncClient.defaultServiceName);
    timeSyncEndpoint = new TimeSyncEndpoint(timeSyncClient);
    if (!(await timeSyncEndpoint.establishTimesync())) throw new NotEstablishedError('time sync not established');
  }

  const getParams =
    startNsec || endNsec
      ? _requestTimespanFromNanoseconds(startNsec, endNsec, timeSyncEndpoint)
      : _requestTimespanFromSpec(timespanSpec, timeSyncEndpoint);

  if (channel) getParams.channel = channel;
  if (messageType) getParams.type = messageType;
  if (grpcService) getParams.grpc_service = grpcService;

  const url = _bddfUrl(hostname, getParams);

  const res = await fetch(url, {
    method: 'GET',
    headers: _httpHeaders(robot),
  });
  
  if (!res.ok) {
    console.error(`${url} response: ${res.status}`);
    return null;
  }
  
  const buf = await res.arrayBuffer();

  const outfile = outputFilename ? outputFilename : _outputFilename(res);
  
  writeFileSync(outfile, buf);
  
  return outfile;
}

/**
 * @param {Response} response 
 * @returns 
 */
function _outputFilename(response) {
  let content = response.headers.get('Content-Disposition');
  if (content.length < 2) {
    console.debug('Content-Disposition not set correctly.');
    return DEFAULT_OUTPUT;
  }
  let match = content.search('filename="?([^"]+)');
  if (match === -1) return DEFAULT_OUTPUT;
  return content[match];
}

function main() {
  const argparse = require('argparse');
  const { createStandardSdk } = require('./sdk');
  const { InvalidLoginError } = require('./auth');
  const { addCommonArguments } = require('./util');

  let parser = new argparse.ArgumentParser();
  parser.add_argument('-T', '--timespan', { default: '5m', help: 'Time span (default last 5 minutes)' });
  parser.add_argument('--help-timespan', { action: 'store_true', help: 'Print time span formatting options' });
  parser.add_argument('-c', '--channel', { help: 'Specify channel for data (default=all)' });
  parser.add_argument('-t', '--type', { help: 'Specify message type (default=all)' });
  parser.add_argument('-s', '--service', { help: 'Specify service name (default=all)' });
  parser.add_argument('-o', '--output', { help: 'Output file name (default is "download.bddf"' });
  parser.add_argument('-R', '--robot-time', { action: 'store_true', help: 'Specified timespan is in robot time' });

  addCommonArguments(parser);

  let options = parser.parse_args();

  if (options.help_timespan) {
    _printHelpTimespan();
    return false;
  }

  let sdk = createStandardSdk('bddf');
  let robot = sdk.create_robot(options.hostname);

  try {
    robot.authenticate(options.username, options.password);
  } catch (e) {
    if (e instanceof InvalidLoginError) {
      console.error(`Cannot authenticate to robot to obtain token: ${e}`);
      return true;
    }
    console.error(e);
  }

  const outputFilename = downloadData(
    robot,
    options.hostname,
    options.timespan,
    undefined,
    undefined,
    undefined,
    options.robot_time,
    options.channel,
    options.type,
    options.service,
  );

  if (!outputFilename) return true;

  console.info(`Wrote '${outputFilename}'.`);
  return false;
}

if (require.main === module) {
  main();
  process.exit(0);
} else {
  module.exports = {
    main,
  };
}
