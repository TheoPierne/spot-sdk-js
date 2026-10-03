/**
 * @file Code for downloading robot data in bddf format.
 */

'use strict';

const { createWriteStream } = require('node:fs');
const path = require('node:path');
const process = require('node:process');
const { Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises');

const {
  TimeSyncEndpoint,
  TimeSyncClient,
  NotEstablishedError,
  robotTimeRangeFromNanoseconds,
  timespecToRobotTimespan,
} = require('./time_sync');
const { httpsGetUnverified } = require('./util');

const timeRangePb = require('../bosdyn/api/time_range_pb');
const { TIME_FORMAT_DESC } = require('../bosdyn-core/util');

/**
 * @typedef {import('./robot').Robot} Robot
 */

// This value is not guaranteed.
const REQUEST_CHUNK_SIZE = 10 * 1024 ** 2;
// Seconds.
const REQUEST_TIMEOUT = 20;
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

function _bddfUrl(hostname) {
  return `https://${hostname}/v1/data-buffer/bddf/`;
}

function _httpHeaders(robot) {
  return { Authorization: `Bearer ${robot.userToken}` };
}

/**
 *
 * @param {timeRangePb.TimeRange} timeRange
 * @returns {{from_sec: string, to_sec: string}}
 */
function _requestTimespanFromTimeRange(timeRange) {
  const ret = {};
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

/**
 * A stream that prints a dot for each chunk of the download, like the Python download.
 * @returns {Transform}
 */
function _progress() {
  let received = 0;
  return new Transform({
    transform(chunk, encoding, callback) {
      const before = Math.ceil(received / REQUEST_CHUNK_SIZE);
      received += chunk.length;
      process.stdout.write('.'.repeat(Math.ceil(received / REQUEST_CHUNK_SIZE) - before));
      callback(null, chunk);
    },
  });
}

/**
 * Download data from robot in bddf format. Like Python, the certificate of the robot is not checked.
 * @param {Robot} robot API robot object, authenticated.
 * @param {string} hostname Hostname/ip-address of robot.
 * @param {?number} [startNsec=null] Start time of log.
 * @param {?number} [endNsec=null] End time of log.
 * @param {?string} [timespanSpec=null] If startNsec and endNsec are null, string representing the timespan to
 * download.
 * @param {?string} [outputFilename=null] Name of the file to write, by default the name given by the robot.
 * @param {boolean} [robotTime=false] If true, timespan is in robot clock, if false, in host clock.
 * @param {?string} [channel=null] If set, limit data to download to a specific channel.
 * @param {?string} [messageType=null] If set, limit data by specified message-type.
 * @param {?string} [grpcService=null] If set, limit GRPC log data by name of service.
 * @param {boolean} [showProgress=false] Print a dot for each chunk of the download.
 * @returns {Promise<?string>} Output filename, or null on error.
 * @throws {NotEstablishedError} Time sync with the robot could not be established.
 * @throws {Error} The robot answered with an HTTP error (e.g. 401 for a bad token), or the download failed.
 */
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
  showProgress = false,
) {
  let timeSyncEndpoint = null;
  if (!robotTime) {
    // Establish time sync with robot to obtain skew.
    const timeSyncClient = await robot.ensureClient(TimeSyncClient.defaultServiceName);
    timeSyncEndpoint = new TimeSyncEndpoint(timeSyncClient);
    if (!(await timeSyncEndpoint.establishTimesync())) throw new NotEstablishedError('time sync not established');
  }

  // Get the parameters for limiting the timespan of the response.
  const getParams =
    startNsec || endNsec
      ? _requestTimespanFromNanoseconds(startNsec, endNsec, timeSyncEndpoint)
      : _requestTimespanFromSpec(timespanSpec, timeSyncEndpoint);

  // Optional parameters for limiting the messages
  if (channel) getParams.channel = channel;
  if (messageType) getParams.type = messageType;
  if (grpcService) getParams.grpc_service = grpcService;

  // Request the data.
  const url = `${_bddfUrl(hostname)}?${new URLSearchParams(getParams)}`;
  const resp = await httpsGetUnverified(url, _httpHeaders(robot), REQUEST_TIMEOUT * 1000);
  if (resp.statusCode >= 400) {
    // urlopen() raises an HTTPError in Python.
    resp.resume();
    throw new Error(`HTTP Error ${resp.statusCode}: ${resp.statusMessage} (${url})`);
  }
  if (resp.statusCode !== 200) {
    resp.resume();
    console.error(`${url} ${JSON.stringify(getParams)} response: ${resp.statusCode}`);
    return null;
  }

  const outfile = outputFilename ? outputFilename : _outputFilename(resp);
  // The data is written while it is received (it was kept in memory).
  await pipeline(resp, ...(showProgress ? [_progress()] : []), createWriteStream(outfile));
  if (showProgress) console.log();

  return outfile;
}

/**
 * Get output filename either from http response, or default value.
 * @param {import('node:http').IncomingMessage} response
 * @returns {string}
 */
function _outputFilename(response) {
  const content = response.headers['content-disposition'];
  if (!content || content.length < 2) {
    console.debug('Content-Disposition not set correctly.');
    return DEFAULT_OUTPUT;
  }
  const match = /filename="?([^"]+)/.exec(content);
  if (!match) return DEFAULT_OUTPUT;
  // Only a file name: the file is written in the current directory.
  return path.basename(match[1]);
}

/**
 * Command-line interface.
 * @returns {Promise<number>} The exit code.
 */
async function main() {
  const argparse = require('argparse');
  const { InvalidLoginError } = require('./auth');
  const { createStandardSdk } = require('./sdk');
  const { addCommonArguments, authenticate, setupLogging } = require('./util');

  const parser = new argparse.ArgumentParser();
  parser.add_argument('-T', '--timespan', { default: '5m', help: 'Time span (default last 5 minutes)' });
  parser.add_argument('--help-timespan', { action: 'store_true', help: 'Print time span formatting options' });
  parser.add_argument('-c', '--channel', { help: 'Specify channel for data (default=all)' });
  parser.add_argument('-t', '--type', { help: 'Specify message type (default=all)' });
  parser.add_argument('-s', '--service', { help: 'Specify service name (default=all)' });
  parser.add_argument('-o', '--output', { help: 'Output file name (default is "download.bddf"' });
  parser.add_argument('-R', '--robot-time', { action: 'store_true', help: 'Specified timespan is in robot time' });

  addCommonArguments(parser);

  const options = parser.parse_args();
  setupLogging(options.verbose);

  if (options.help_timespan) {
    _printHelpTimespan();
    return 0;
  }

  // Create a robot object.
  const sdk = createStandardSdk('bddf');
  const robot = sdk.createRobot(options.hostname);

  // Use the robot object to authenticate to the robot. A JWT Token is required to download log data.
  try {
    if (options.username || options.password) {
      await robot.authenticate(options.username, options.password);
    } else {
      await authenticate(robot);
    }
  } catch (e) {
    if (e instanceof InvalidLoginError) {
      console.error(`Cannot authenticate to robot to obtain token: ${e}`);
      return 1;
    }
    throw e;
  }

  const outputFilename = await downloadData(
    robot,
    options.hostname,
    null,
    null,
    options.timespan,
    options.output,
    options.robot_time,
    options.channel,
    options.type,
    options.service,
    true,
  );

  if (!outputFilename) return 1;

  console.info(`Wrote '${outputFilename}'.`);
  return 0;
}

module.exports = {
  DEFAULT_OUTPUT,
  downloadData,
  main,
};

if (require.main === module) {
  main().then(
    code => {
      process.exitCode = code;
    },
    error => {
      console.error(error);
      process.exitCode = 1;
    },
  );
}
