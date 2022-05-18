'use strict';

const path = require('node:path');
const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');
const { cloneDeep } = require('lodash');
const prompt = require('prompt');

const { InvalidTokenError } = require('./auth');
const { generate_channel_options } = require('./channel');
const { LoggerUtil } = require('./loggerUtil');
const { now_timestamp } = require('../bosdyn-core/util');

const header_pb = require('../bosdyn/api/header_pb');

const _LOGGER = LoggerUtil.getLogger(path.basename(__filename).replace('.js', ''));

async function cli_login_prompt(username = null, password = null) {
  async function input(description, hidden = false, replace = '*') {
    prompt.message = '';
    prompt.start();
    const { question } = await prompt.get([
      {
        description: description,
        type: 'string',
        hidden: hidden,
        replace: replace,
        required: true,
      },
    ]);
    return Promise.resolve(question);
  }

  if (username === null) {
    username = await input('Username for robot', false, '');
  } else {
    const name = await input(`Username for robot [${username}]`, false, '');
    if (name) {
      username = name;
    }
  }
  if (password === null) {
    password = await input('Password', true, '*');
  }

  return Promise.resolve([username, password]);
}

async function cli_auth(robot, username = null, password = null) {
  let successful = false;
  /* eslint-disable no-await-in-loop */
  while (!successful) {
    if (username === null && password === null) [username, password] = await cli_login_prompt(username, password);
    try {
      await robot.authenticate(username, password);
      successful = true;
    } catch (e) {
      throw e;
    }
  }
  /* eslint-enable no-await-in-loop */
}

async function authenticate(robot, askpass = null) {
  if (robot.user_token) {
    try {
      await robot.authenticate_with_token(robot.user_token);
    } catch (e) {
      if (!(e instanceof InvalidTokenError)) {
        console.log(e);
      }
    }
  }

  let username = process.env.BOSDYN_CLIENT_USERNAME;
  let password = process.env.BOSDYN_CLIENT_PASSWORD;

  if (username && password) {
    await robot.authenticate(username, password);
    return;
  }

  if (!process.stdin.isTTY && askpass !== null) {
    throw new Error('Stdin is not a tty and no askpass specified.');
  }

  if (askpass === null) {
    [username, password] = await cli_login_prompt();
  } else if (typeof askpass === 'function') {
    [username, password] = askpass();
  }

  await robot.authenticate(username, password);
}

// eslint-disable-next-line
function setup_logging(verbose = false, always_print_logger_levels = ['error']) {
  const logger = get_logger();

  let level = 'info';

  if (verbose) level = 'debug';

  LoggerUtil.setLevel(logger, level);

  return logger;
}

function get_logger() {
  return _LOGGER;
}

function add_base_arguments(parser) {
  parser.add_argument('hostname', { help: 'Hostname or address of robot, e.g. "beta25-p" or "192.168.80.3"' });
  parser.add_argument('-v', '--verbose', { action: 'store_true', help: 'Print debug-level messages' });
}

function add_common_arguments(parser) {
  parser.add_argument('--username', { help: 'User name of account to get credentials for.' });
  parser.add_argument('--password', { help: 'Password to get credentials for.' });
  add_base_arguments(parser);
}

function add_payload_credentials_arguments(parser, required = true) {
  parser.add_argument('--guid', { required: required, help: 'Unique GUID of the payload.' });
  parser.add_argument('--secret', { required: required, help: 'Secret of the payload.' });
}

function add_service_hosting_arguments(parser) {
  parser.add_argument('--port', {
    default: 0,
    // eslint-disable-next-line
    help: 'The port number the service can be reached at (Warning: This port cannot be firewalled). Defaults to 0, which will assign an ephemeral port',
    type: 'int',
  });
}

function add_service_endpoint_arguments(parser) {
  add_service_hosting_arguments(parser);
  parser.add_argument('--host-ip', {
    required: true,
    help: 'Hostname or address the service can be reached at. e.g. "192.168.50.5"',
  });
}

class GrpcServiceRunner {
  constructor(
    service_servicer,
    add_servicer_to_server_fn,
    port = 0,
    max_workers = 4,
    max_send_message_length = null,
    max_receive_message_length = null,
    timeout_secs = 3,
    force_sigint_capture = true,
    logger = null,
  ) {
    this.logger = logger || _LOGGER;
    this.timeout_secs = timeout_secs;
    this.force_sigint_capture = force_sigint_capture;

    this.server_type_name = service_servicer.constructor.name;

    this.server = new grpc.Server(generate_channel_options(max_send_message_length, max_receive_message_length));
    add_servicer_to_server_fn(service_servicer, this.server);
    this.port = this.server.bindAsync(port, new grpc.ServerCredentials().createInsecure());
    this.server.start();
    this.logger.info(`Started the "${this.server_type_name}" server.`);
  }

  async stop() {
    this.logger.info(`Shutting down the "${this.server_type_name}" server.`);
    this.server.tryShutdown();
    await sleep(this.timeout_secs);
  }

  run_until_interrupt() {
    process.on('SIGINT', () => {
      this.stop();
    });
  }
}

function populate_response_header(
  response,
  request,
  error_code = header_pb.CommonError.Code.CODE_OK,
  error_msg = null,
) {
  const header = new header_pb.ResponseHeader();
  header.setRequestHeader(request.getHeader());
  header.setRequestReceivedTimestamp(now_timestamp());
  const error = new header_pb.CommonError();
  error.setCode(error_code);
  if (error_msg !== null || error_msg) error.setMessage(error_msg);
  header.setError(error);
  const copied_request = cloneDeep(request);
  strip_large_bytes_fields(copied_request);
  // Header.getRequest().Pack(copied_request) Je ne sais pas si cela est utile (.Pack())
  response.setHeader(header);
}

function strip_large_bytes_fields(proto_message) {
  const message_type = proto_message;
  const whitelist_map = get_bytes_field_whitelist();
  if (message_type in whitelist_map) whitelist_map[message_type](proto_message);
}

function get_bytes_field_whitelist() {
  const whitelist_map = {
    GetImageResponse: strip_get_image_response,
    GetLocalGridsResponse: strip_local_grid_responses,
    StoreDataRequest: strip_store_data_request,
    StoreImageRequest: strip_store_image_request,
    RecordSignalTicksRequest: strip_record_signal_tick,
    RecordDataBlobsRequest: strip_record_data_blob,
    AddLogAnnotationRequest: strip_log_annotation,
  };
  return whitelist_map;
}

function strip_image_response(proto_message) {
  proto_message.clearShot();
}

function strip_get_image_response(proto_message) {
  for (const img_resp in proto_message.getImageResponses()) {
    strip_image_response(img_resp);
  }
}

function strip_local_grid_responses(proto_message) {
  for (const grid_resp in proto_message.getLocalGridResponses()) {
    grid_resp.clearLocalGridResponsesList();
  }
}

function strip_store_image_request(proto_message) {
  proto_message.clearImage();
}

function strip_store_data_request(proto_message) {
  proto_message.setData([]);
}

function strip_record_signal_tick(proto_message) {
  for (const tick_data in proto_message.getTickData()) {
    tick_data.clearTickDataList();
  }
}

function strip_record_data_blob(proto_message) {
  for (const blob in proto_message.getBlobData()) {
    blob.RecordDataBlobsRequest();
  }
}

function strip_log_annotation(proto_message) {
  for (const blob in proto_message.getAnnotations().getBlobData()) {
    blob.clearAnnotations();
  }
}

module.exports = {
  cli_login_prompt,
  cli_auth,
  authenticate,
  setup_logging,
  get_logger,
  add_common_arguments,
  add_base_arguments,
  add_payload_credentials_arguments,
  add_service_hosting_arguments,
  add_service_endpoint_arguments,
  GrpcServiceRunner,
  populate_response_header,
};
