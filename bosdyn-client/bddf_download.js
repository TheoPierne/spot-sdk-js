'use strict';

const { writeFileSync } = require('fs');
const process = require('node:process');
const fetch = require('node-fetch');

const {
  TimeSyncEndpoint,
  TimeSyncClient,
  NotEstablishedError,
  robot_time_range_from_nanoseconds,
  timespec_to_robot_timespan,
} = require('./time_sync');

const { TIME_FORMAT_DESC } = require('../bosdyn-core/util');

// Const REQUEST_CHUNK_SIZE = 10 * 1024 ** 2;
const DEFAULT_OUTPUT = './download.bddf';

function _print_help_timespan() {
  console.log(`
    A timespan is {{timeval}} or {{timeval}}-{{timeval}}.

    ${TIME_FORMAT_DESC}

    For example:
    '5m'                    From 5 minutes ago until now.
    '20201107-20201108'     All of 2020/11/07.
    `);
}

function _bddf_url(hostname, data = null) {
  let str = '';
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      str += `${key}=${value}`;
    }
  }
  return `https://${hostname}/v1/data-buffer/bddf/${str === '' ? '' : `?${str}`}`;
}

function _http_headers(robot) {
  return { Authorization: `Bearer ${robot.user_token}` };
}

function _request_timespan_from_time_range(time_range) {
  let ret = {};
  if ('start' in time_range) ret.from_sec = `${time_range.start.seconds}`;
  if ('end' in time_range) ret.to_sec = `${time_range.end.seconds}`;
  return ret;
}

function _request_timespan_from_spec(timespec, time_sync_endpoint) {
  return _request_timespan_from_time_range(timespec_to_robot_timespan(timespec, time_sync_endpoint));
}

function _request_timespan_from_nanoseconds(start_nsec, end_nsec, time_sync_endpoint) {
  return _request_timespan_from_time_range(robot_time_range_from_nanoseconds(start_nsec, end_nsec, time_sync_endpoint));
}

function download_data(
  robot,
  hostname,
  start_nsec = null,
  end_nsec = null,
  timespan_spec = null,
  output_filename = null,
  robot_time = false,
  channel = null,
  message_type = null,
  grpc_service = null,
) {
  let time_sync_endpoint;
  if (!robot_time) {
    let time_sync_client = robot.ensure_client(TimeSyncClient.default_service_name);
    time_sync_endpoint = new TimeSyncEndpoint(time_sync_client);
    if (!time_sync_endpoint.establish_timesync()) throw new NotEstablishedError('time sync not established');
  }

  const get_params =
    start_nsec || end_nsec
      ? _request_timespan_from_nanoseconds(start_nsec, end_nsec, time_sync_endpoint)
      : _request_timespan_from_spec(timespan_spec, time_sync_endpoint);

  if (channel) get_params.channel = channel;
  if (message_type) get_params.type = message_type;
  if (grpc_service) get_params.grpc_service = grpc_service;

  const url = _bddf_url(hostname, get_params);

  const options = {
    method: 'GET',
    headers: _http_headers(robot),
  };

  let outfile = '';
  // Let data = Buffer.allocUnsafe(REQUEST_CHUNK_SIZE);

  fetch(url, options)
    .then(res => res.buffer())
    .then(resBuf => {
      if (!resBuf.ok) {
        console.error(`${url} response: ${resBuf.status}`);
        return null;
      }

      outfile = output_filename ? output_filename : _output_filename(resBuf);
      return writeFileSync(outfile, resBuf);
    })
    .catch(err => {
      console.error(err);
    });

  return outfile;
}

function _output_filename(response) {
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
  const { create_standard_sdk } = require('./sdk');
  const { InvalidLoginError } = require('./auth');
  const { add_common_arguments } = require('./util');

  let parser = argparse.ArgumentParser();
  parser.add_argument('-T', '--timespan', { default: '5m', help: 'Time span (default last 5 minutes)' });
  parser.add_argument('--help-timespan', { action: 'store_true', help: 'Print time span formatting options' });
  parser.add_argument('-c', '--channel', { help: 'Specify channel for data (default=all)' });
  parser.add_argument('-t', '--type', { help: 'Specify message type (default=all)' });
  parser.add_argument('-s', '--service', { help: 'Specify service name (default=all)' });
  parser.add_argument('-o', '--output', { help: 'Output file name (default is "download.bddf"' });
  parser.add_argument('-R', '--robot-time', { action: 'store_true', help: 'Specified timespan is in robot time' });

  add_common_arguments(parser);

  let options = parser.parse_args();

  if (options.help_timespan) {
    _print_help_timespan();
    return false;
  }

  let sdk = create_standard_sdk('bddf');
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

  let output_filename = download_data(
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

  if (!output_filename) return true;

  console.info(`Wrote '${output_filename}'.`);
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
