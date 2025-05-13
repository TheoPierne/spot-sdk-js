'use strict';

const { writeFileSync, mkdirSync } = require('node:fs');
const path = require('node:path');
const process = require('node:process');
const { setTimeout, setInterval, clearInterval } = require('node:timers');

const argparse = require('argparse');

const { InvalidLoginError, InvalidTokenError } = require('./auth');
const { getSelfIp } = require('./common');
const { DataAcquisitionClient } = require('./data_acquisition');
const { acquire_and_process_request } = require('./data_acquisition_helpers');
const { DataBufferClient } = require('./data_buffer');
const { DataServiceClient } = require('./data_service');
const { DirectoryClient } = require('./directory');
const { DirectoryRegistrationClient } = require('./directory_registration');
const { EstopClient, EstopEndpoint, EstopKeepAlive } = require('./estop');
const { ProxyConnectionError } = require('./exceptions');
const {
  ImageClient,
  UnknownImageSourceError,
  ImageResponseError,
  build_image_request,
  save_images_as_files,
} = require('./image');
const { LeaseClient, LeaseKeepAlive } = require('./lease');
const { LicenseClient } = require('./license');
const { LocalGridClient } = require('./local_grid');
const { PayloadClient } = require('./payload');
const { PayloadRegistrationClient } = require('./payload_registration');
const {
  PowerClient,
  power_off_robot,
  power_cycle_robot,
  power_on_payload_ports,
  power_off_payload_ports,
  power_on_wifi_radio,
  power_off_wifi_radio,
} = require('./power');
const { RobotIdClient } = require('./robot_id');
const { RobotStateClient } = require('./robot_state');
const { createStandardSdk } = require('./sdk');
const { TimeSyncClient, TimeSyncEndpoint, timespec_to_robot_timespan } = require('./time_sync');
const { addCommonArguments } = require('./util');

const data_acquisition_pb = require('../bosdyn/api/data_acquisition_pb');
const { TextMessage } = require('../bosdyn/api/data_buffer_pb');
const { EventsCommentsSpec } = require('../bosdyn/api/data_index_pb');
const directory_registration_pb = require('../bosdyn/api/directory_registration_pb');
const payload_pb = require('../bosdyn/api/payload_pb');
const { duration_str, timestampToDatetime } = require('../bosdyn-core/util');

class Command {
  constructor(subparsers, commandDict, NAME = null, NEED_AUTHENTICATION = true) {
    this.NAME = NAME;
    this.NEED_AUTHENTICATION = NEED_AUTHENTICATION;
    commandDict[this.NAME] = this;
    this._parser = subparsers.add_parser(this.NAME);
  }

  /**
   * @param {Robot} robot Robot object on which to run the command.
   * @param {Object} options Parsed command-line arguments.
   * @returns {Promise<unknown>}
   */
  async run(robot, options) {
    try {
      if (this.NEED_AUTHENTICATION) {
        await robot.authenticate(options.username, options.password);
        await robot.syncWithDirectory();
      }
      return this._run(robot, options);
    } catch (e) {
      if (e instanceof ProxyConnectionError) {
        console.error(`Could not contact robot with hostname "${options.hostname}".`);
      } else if (e instanceof InvalidTokenError) {
        console.error(`The provided user token is invalid.`);
      } else if (e instanceof InvalidLoginError) {
        console.error(`Username "${options.username}" and/or password are invalid.`);
      } else {
        console.error(e);
      }
    }
    return null;
  }

  /**
   * @abstract
   * @param {Robot} robot Robot object on which to run the command.
   * @param {Object} options Parsed command-line arguments.
   */
  // eslint-disable-next-line no-unused-vars
  _run(robot, options) {
    // Abstract
  }
}

class Subcommands extends Command {
  constructor(subparsers, commandDict, NAME, subcommands) {
    super(subparsers, commandDict, NAME);
    this.NAME = NAME;
    this._subcommands = {};
    const cmd_subparsers = this._parser.add_subparsers({ dest: `${this.NAME}_command` });
    cmd_subparsers.required = true;
    for (const subcommand of subcommands) {
      // eslint-disable-next-line no-new
      new subcommand(cmd_subparsers, this._subcommands);
    }
  }

  /**
   * Implementation of the command.
   * @param {Robot} robot Robot object on which to run the command.
   * @param {Object} options Parsed command-line arguments.
   * @returns {Promise<unknown>}
   */
  _run(robot, options) {
    const command_dest = `${this.NAME}_command`;
    const subcommand = options[command_dest];
    return this._subcommands[subcommand].run(robot, options);
  }
}

function _format_dir_entry(
  name,
  service_type,
  authority,
  tokens,
  name_width = 23,
  type_width = 31,
  authority_width = 27,
) {
  console.log(
    `${name.padEnd(name_width, ' ')} | ${service_type.padEnd(type_width, ' ')} | ${authority.padEnd(
      authority_width,
      ' ',
    )} | ${tokens}`,
  );
}

function _token_req_str(entry) {
  const required = [];
  if (entry.getUserTokenRequired()) {
    required.push('user');
  }
  if (required.length === 0) {
    return '';
  }
  return required.join(', ');
}

async function _show_directory_list(robot, as_proto = false) {
  const client = await robot.ensureClient(DirectoryClient.defaultServiceName);
  const entries = await client.list();

  if (!entries) {
    console.log('No services found');
    return true;
  }

  if (as_proto) {
    for (const entry of entries) {
      console.log(entry.toObject());
    }
    return true;
  }

  const max_name_length = entries.length ? Math.max(...entries.map(e => e.getName().length)) : 0;
  const max_type_length = entries.length ? Math.max(...entries.map(e => e.getType().length)) : 0;
  const max_authority_length = entries.length ? Math.max(...entries.map(e => e.getAuthority().length)) : 0;

  _format_dir_entry(
    'name',
    'type',
    'authority',
    'tokens',
    max_name_length + 4,
    max_type_length + 4,
    max_authority_length + 4,
  );
  console.log('-'.repeat(20 + max_name_length + max_type_length + max_authority_length));
  for (const entry of entries) {
    _format_dir_entry(
      entry.getName(),
      entry.getType(),
      entry.getAuthority(),
      _token_req_str(entry),
      max_name_length + 4,
      max_type_length + 4,
      max_authority_length + 4,
    );
  }

  return true;
}

async function _show_directory_entry(robot, service, as_proto = false) {
  const client = await robot.ensureClient(DirectoryClient.defaultServiceName);
  const entry = await client.get_entry(service);
  if (as_proto) {
    console.log(entry);
  } else {
    _format_dir_entry('name', 'type', 'authority', 'tokens');
    console.log('-'.repeat(90));
    _format_dir_entry(entry.getName(), entry.getType(), entry.getAuthority(), _token_req_str(entry));
  }
  return true;
}

class DirectoryCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'dir', [
      DirectoryListCommand,
      DirectoryGetCommand,
      DirectoryRegisterCommand,
      DirectoryUnregisterCommand,
    ]);
  }
}

class DirectoryListCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'list');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  _run(robot, options) {
    _show_directory_list(robot, options.proto);
    return true;
  }
}

class DirectoryGetCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'get');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
    this._parser.add_argument('service', { help: 'service name to get entry for' });
  }

  _run(robot, options) {
    try {
      _show_directory_entry(robot, options.service, options.proto);
    } catch (e) {
      console.log(`The requested service name "${options.service}" does not exist.  Available services:`);
      _show_directory_list(robot, options.proto);
      return false;
    }
    return true;
  }
}

class DirectoryRegisterCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'register');
    this._parser.add_argument('--service-name', { required: true, help: 'unique name of the service' });
    this._parser.add_argument('--service-type', {
      required: true,
      help: 'Type of the service, e.g. bosdyn.api.RobotStateService',
    });
    this._parser.add_argument('--service-authority', { required: true, help: 'authority of the service' });
    this._parser.add_argument('--service-hostname', { required: true, help: 'hostname of the service computer' });
    this._parser.add_argument('--service-port', {
      required: true,
      type: 'int',
      help: 'port the service is running on',
    });
    this._parser.add_argument('--no-user-token', {
      action: 'store_true',
      required: false,
      help: 'disable requirement for user token',
    });
  }

  async _run(robot, options) {
    const directory_registration_client = await robot.ensureClient(DirectoryRegistrationClient.defaultServiceName);

    try {
      await directory_registration_client.register(
        options.service_name,
        options.service_type,
        options.service_authority,
        options.service_hostname,
        options.service_port,
        !options.no_user_token,
      );
    } catch (e) {
      console.error(
        `Failed to register service ${options.service_name}.\nResponse Status: ${
          directory_registration_pb.RegisterServiceResponse.Status[e.response.getStatus()]
        }`,
      );
      return false;
    }

    console.log(`Succesfully registered service ${options.service_name}`);
    return true;
  }
}

class DirectoryUnregisterCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'unregister');
    this._parser.add_argument('--service-name', { required: true, help: 'unique name of the service' });
  }

  async _run(robot, options) {
    const directory_registration_client = await robot.ensureClient(DirectoryRegistrationClient.defaultServiceName);

    try {
      await directory_registration_client.unregister(options.service_name);
    } catch (e) {
      console.error(
        `Failed to unregister service ${options.service_name}.\nResponse Status: ${
          directory_registration_pb.UnregisterServiceResponse.Status[e.response.getStatus()]
        }`,
      );
      return false;
    }

    console.log(`Succesfully unregistered service ${options.service_name}`);
    return true;
  }
}

class PayloadCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'payload', [PayloadListCommand, PayloadRegisterCommand]);
  }
}

async function _show_payload_list(robot, as_proto = false) {
  const client = await robot.ensureClient(PayloadClient.defaultServiceName);
  const payload_protos = await client.list_payloads();
  if (!payload_protos) {
    console.log('No payloads found');
    return true;
  }

  if (as_proto) {
    for (const payload of payload_protos) {
      console.log(payload);
    }
    return true;
  }

  const out = [];
  for (const payload of payload_protos) {
    out.push({ Name: payload.getName(), Description: payload.getDescription(), GUID: payload.getGuid() });
  }
  console.table(out);
  return true;
}

class PayloadListCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'list');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  _run(robot, options) {
    _show_payload_list(robot, options.proto);
    return true;
  }
}

async function _register_payload(robot, name, guid, secret) {
  const payload_registration_client = await robot.ensureClient(PayloadRegistrationClient.defaultServiceName);
  const payload = new payload_pb.Payload().setName(name).setGuid(guid);
  let isCatch = false;
  try {
    await payload_registration_client.register_payload(payload, secret);
  } catch (e) {
    isCatch = true;
    console.error('\nA payload with this GUID is already registered. Check the robot Admin Console.');
  }

  if (!isCatch) {
    console.log(
      // eslint-disable-next-line max-len
      '\nPayload successfully registered with the robot. \nBefore it can be used, the payload must be authorized in the Admin Console.',
    );
  }
  return true;
}

class PayloadRegisterCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'register');
    this._parser.add_argument('--payload-name', { required: true, help: 'name of the payload' });
    this._parser.add_argument('--payload-guid', { required: true, help: 'guid of the payload' });
    this._parser.add_argument('--payload-secret', { required: true, help: 'secret for the payload' });
  }

  _run(robot, options) {
    _register_payload(robot, options.payload_name, options.payload_guid, options.payload_secret);
  }
}

class FaultCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'fault', [FaultShowCommand, FaultWatchCommand]);
  }
}

async function _showServiceFaults(robot) {
  /** @type {RobotStateClient} */
  const robotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
  const serviceFaultState = (await robotStateClient.getRobotState()).getServiceFaultState();

  console.log(`\n\n\n${'-'.repeat(80)}`);
  if (serviceFaultState.getFaultsList().length === 0) {
    console.log('No active service faults.');
    return;
  }

  for (const fault of serviceFaultState.getFaultsList()) {
    console.log(
      `${fault.getFaultId().getFaultName()} \nService Name: ${fault
        .getFaultId()
        .getServiceName()} \nPayload GUID: ${fault
        .getFaultId()
        .getPayloadGuid()} \nError Message: ${fault.getErrorMessage()} \nOnset Time: ${timestampToDatetime(
        fault.getOnsetTimestamp(),
      )}`,
    );
  }
}

class FaultShowCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'show');
  }

  _run(robot) {
    _showServiceFaults(robot);
    return true;
  }
}

class FaultWatchCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'watch');
  }

  _run(robot) {
    console.log('Press Ctrl-C or send SIGINT to exit\n\n');

    const interval = setInterval(async () => {
      await _showServiceFaults(robot);
    }, 1000);

    return new Promise(resolve => {
      process.on('SIGINT', () => {
        clearInterval(interval);
        return resolve(true);
      });
    });
  }
}

class RobotIdCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'id', false);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    /** @type {RobotIdClient} */
    const client = await robot.ensureClient(RobotIdClient.defaultServiceName);
    const response = await client.getId();
    if (options.proto) {
      console.log(response.toObject());
      return true;
    }
    let nickname = '';
    if (response.getNickname() && response.getNickname() !== response.getSerialNumber()) {
      nickname = response.getNickname();
    }
    const release = response.getSoftwareRelease();
    const version = release.getVersion();
    console.log(
      `\n${response.getSerialNumber().padEnd(20)} ${response.getComputerSerialNumber().padEnd(15)} ${nickname.padEnd(
        10,
      )} ${response.getSpecies()} (${response.getVersion()})`,
    );
    console.log(
      // eslint-disable-next-line max-len
      ` Software: ${version.getMajorVersion()}.${version.getMinorVersion()}.${version.getPatchLevel()} (${release.getChangeset()} ${timestampToDatetime(
        release.getChangesetDate(),
      )})`,
    );
    console.log(`  Installed: ${timestampToDatetime(release.getInstallDate())}`);
    return true;
  }
}

class DataBufferCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'log', [TextMsgCommand, OperatorCommentCommand]);
  }
}

class TextMsgCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'textmsg');
    this._parser.add_argument('--timestamp', { action: 'store_true', help: 'achieve time-sync and send timestamp' });
    this._parser.add_argument('--tag', { help: 'Tag for message' });
    const parser_log_level = this._parser.add_mutually_exclusive_group();
    parser_log_level.add_argument('--debug', '-D', { action: 'store_true', help: 'Log at debug-level' });
    parser_log_level.add_argument('--info', '-I', { action: 'store_true', help: 'Log at info-level' });
    parser_log_level.add_argument('--warn', '-W', { action: 'store_true', help: 'Log at warn-level' });
    parser_log_level.add_argument('--error', '-E', { action: 'store_true', help: 'Log at error-level' });
    this._parser.add_argument('message', { help: 'Message to log' });
  }

  async _run(robot, options) {
    let robotTimestamp = null;
    if (options.timestamp) {
      try {
        robotTimestamp = await (await robot.timeSync).robotTimestampFromLocalSecs(Date.now(), 1.0);
      } catch (err) {
        console.error('Failed to send message with timestamp: {}.'.format(err));
        return false;
      }
    }

    const msgProto = new TextMessage().setMessage(options.message).setTimestamp(robotTimestamp);

    if (options.debug) {
      msgProto.setLevel(TextMessage.Level.LEVEL_DEBUG);
    } else if (options.warn) {
      msgProto.setLevel(TextMessage.Level.LEVEL_WARN);
    } else if (options.error) {
      msgProto.setLevel(TextMessage.Level.LEVEL_ERROR);
    } else {
      msgProto.setLevel(TextMessage.Level.LEVEL_INFO);
    }

    if (options.tag) {
      msgProto.setTag(options.tag);
    }

    /** @type {DataBufferClient} */
    const dataBufferClient = await robot.ensureClient(DataBufferClient.defaultServiceName);
    await dataBufferClient.addTextMessages([msgProto]);

    return true;
  }
}

class OperatorCommentCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'comment');
    this._parser.add_argument('--timestamp', { action: 'store_true', help: 'achieve time-sync and send timestamp' });
    this._parser.add_argument('message', { help: 'operator comment text' });
  }

  async _run(robot, options) {
    let client_timestamp = null;
    if (options.timestamp) {
      client_timestamp = Date.now();
      try {
        await (await robot.timeSync).wait_for_sync(1.0);
      } catch (err) {
        console.error(`Failed to get timesync for setting comment timestamp: ${err}.`);
        return false;
      }
    }
    robot.operator_comment(options.message, client_timestamp);
    return true;
  }
}

class DataServiceCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'data', [
      GetDataBufferCommentsCommand,
      GetDataBufferEventsCommand,
      GetDataBufferStatusCommand,
    ]);
  }
}

class GetDataBufferEventsCommentsCommand extends Command {
  constructor(subparsers, commandDict, name = '') {
    super(subparsers, commandDict, name);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print in proto format' });
    this._parser.add_argument('-T', '--timespan', {
      help: 'Time span (default all).  "1h" (last hour), "10m-5m" (from 10 to 5 minutes ago).',
    });
    this._parser.add_argument('-R', '--robot-time', {
      action: 'store_true',
      help: 'Specified timespan is in robot time',
    });
  }

  // eslint-disable-next-line
  _run(robot, options) {
    // Abstract
  }

  // eslint-disable-next-line
  pretty_print(values) {
    // Abstract
  }

  async _get_result(request_spec, robot, options, get_values_fn) {
    const client = await robot.ensureClient(DataServiceClient.defaultServiceName);
    if (options.timespan) {
      let time_sync_endpoint = null;
      if (!options.robot_time) {
        const time_sync_client = await robot.ensureClient(TimeSyncClient.defaultServiceName);
        time_sync_endpoint = new TimeSyncEndpoint(time_sync_client);
        if (!(await time_sync_endpoint.establish_timesync())) {
          console.log('Failed to get timesync for requesting comments.');
          return false;
        }
      }
      const time_range = timespec_to_robot_timespan(options.timespan, time_sync_endpoint);
      request_spec.setTimeRange(time_range);
    }
    const values = get_values_fn(await client.get_events_comments(request_spec));
    if (options.proto) {
      console.log(values);
    } else {
      this.pretty_print(values);
    }
    return true;
  }
}

class GetDataBufferCommentsCommand extends GetDataBufferEventsCommentsCommand {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'comments');
  }

  _run(robot, options) {
    const request_spec = new EventsCommentsSpec().setComments(true);

    function _get_comments(response) {
      return response.getEventsComments().getOperatorComments();
    }

    return this._get_result(request_spec, robot, options, _get_comments);
  }

  pretty_print(values) {
    let last_date_shown = null;
    for (const comment of values) {
      const dtm = new Date(comment.getTimestamp().getSeconds() + comment.getTimestamp().getSeconds() * 1e-9);
      if (dtm.getTime() !== last_date_shown) {
        console.log(`\n[${dtm.getTime()}]`);
        last_date_shown = dtm.getTime();
      }
      console.log(` ${dtm.getTime()}  ${comment.getMessage()}`);
    }
  }
}

class GetDataBufferEventsCommand extends GetDataBufferEventsCommentsCommand {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'events');
  }

  _run(robot, options) {
    const request_spec = new EventsCommentsSpec().addEvents();

    function _get_events(response) {
      return response.getEventsComments().getEvents();
    }

    return this._get_result(request_spec, robot, options, _get_events);
  }

  static _level_name(event) {
    const prefix = 'LEVEL_';
    let name = event.Level[event.getLevel()];
    if (name.startswith(prefix)) return name.splice(prefix.length);
    return name;
  }

  pretty_print(values) {
    let last_date_shown = null;
    for (const event of values) {
      const start_secs = event.getStartTime().getSeconds() + event.getStartTime().getSeconds() * 1e-9;
      const start_dt = new Date(start_secs);
      if (start_dt.getTime() !== last_date_shown) {
        console.log(`\n[${start_dt.getTime()}]`);
        last_date_shown = start_dt.getTime();
      }
      if (event.getEndTime() && event.getEndTime() !== event.getStartTime()) {
        const end_secs = event.getEndTime().getSeconds() + event.getEndTime().getSeconds() * 1e-9;
        const end_dt = new Date(end_secs);
        console.log(
          ` ${start_dt.getTime()}-${end_dt.getTime()} (END) (${
            end_secs - start_secs
          }) ${event.getType()}  ${GetDataBufferEventsCommand._level_name(event)} <${event.getSource()}> `,
        );
      } else {
        const timing = event.getEndTime() ? '' : '(START)';
        console.log(
          ` ${start_dt.getTime()} ${timing} ${event.getType()}  ${GetDataBufferEventsCommand._level_name(
            event,
          )}  <${event.getSource()}> `,
        );
      }
      if (event.getDescription()) {
        console.log(`\t${event.getDescription()}`);
      }
    }
  }
}

class GetDataBufferStatusCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'status');
    this._parser.add_argument('--get-blob-specs', '-B', {
      action: 'store_true',
      help: 'get list of channel/msgtype/source combinations',
    });
  }

  async _run(robot, options) {
    const client = await robot.ensureClient(DataServiceClient.defaultServiceName);
    const response = await client.get_data_buffer_status(options.get_blob_specs);
    console.log(response);
    return true;
  }
}

class RobotStateCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'state', [
      FullStateCommand,
      HardwareConfigurationCommand,
      MetricsCommand,
      RobotModel,
    ]);
  }
}

class FullStateCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'full');
  }

  async _run(robot) {
    const client = await robot.ensureClient(RobotStateClient.defaultServiceName);
    const response = await client.get_robot_state();
    console.log(response);
    return true;
  }
}

class HardwareConfigurationCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'hardware');
  }

  async _run(robot) {
    const client = await robot.ensureClient(RobotStateClient.defaultServiceName);
    const response = await client.get_robot_hardware_configuration();
    console.log(response);
    return true;
  }
}

class RobotModel extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'model', false);
    this._parser.add_argument('--outdir', { default: 'Model_Files', help: 'directory into which to save the files' });
  }

  async _run(robot, options) {
    const robot_state_client = await robot.ensureClient(RobotStateClient.defaultServiceName);
    const hardware = await robot_state_client.get_robot_hardware_configuration();

    const model_directory = options.outdir;

    try {
      mkdirSync(model_directory);
    } catch (e) {
      // Pass
    }

    for (const link in hardware.getSkeleton().getLinks()) {
      let obj_model_proto;
      try {
        // eslint-disable-next-line no-await-in-loop
        obj_model_proto = await robot_state_client.get_robot_link_model(link.getName());
      } catch (e) {
        console.error(e);
        console.error(` Name of link: ${link.getName()}`);
        continue;
      }

      if (!obj_model_proto.getFileName()) {
        continue;
      }

      const sub_path = `${obj_model_proto.getFileName().split('/').slice(0, -1)}`;
      const pathName = path.join(model_directory, sub_path);
      try {
        mkdirSync(pathName);
      } catch (e) {
        // Pass
      }

      const path_and_name = path.join(pathName, obj_model_proto.getFileName().split('/').slice(-1));
      writeFileSync(path_and_name, obj_model_proto.getFileContents());
      console.log(`Link file written to ${path_and_name}`);
    }

    writeFileSync(path.join(model_directory, 'model.urdf'), hardware.getSkeleton().getUrdf());
    console.log(`URDF file written to ${path.join(model_directory, 'model.urdf')}`);

    return true;
  }
}

class MetricsCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'metrics');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print metrics in proto format' });
  }

  async _run(robot, options) {
    const client = await robot.ensureClient(RobotStateClient.defaultServiceName);
    const response = await client.get_robot_metrics();
    if (options.proto) {
      console.log(response.toObject());
      return true;
    }
    for (const metric of response.getMetricsList()) {
      console.log(MetricsCommand._format_metric(metric));
    }
    return true;
  }

  static _secs_to_hms(seconds) {
    const isecs = parseInt(seconds);
    seconds = isecs % 60;
    const minutes = (isecs / 60) % 60;
    const hours = isecs / 3600;
    return `${hours}:${minutes}:${seconds}`;
  }

  static _distance_str(meters) {
    if (meters < 1000) return `${meters} m`;
    return `${parseFloat(meters) / 1000} km`;
  }

  static _format_metric(metric) {
    if (metric.hasFloatValue()) {
      if (metric.getUnits() === 'm') {
        return `${metric.getLabel()} ${MetricsCommand._distance_str(metric.getFloatValue())}`;
      }
      return `${metric.getLabel()} ${metric.getFloatValue()} ${metric.getUnits()}`;
    } else if (metric.hasIntValue()) {
      return `${metric.getLabel()} ${metric.getIntValue()} ${metric.getUnits()}`;
    } else if (metric.hasBoolValue()) {
      return `${metric.getLabel()} ${metric.getBoolValue()} ${metric.getUnits()}`;
    } else if (metric.hasDuration()) {
      return `${metric.getLabel()} ${MetricsCommand._secs_to_hms(metric.getDuration().getSeconds())}`;
    } else if (metric.hasStringValue()) {
      return `${metric.getLabel()} ${metric.getStringValue()}`;
    }
    return `${metric.getLabel()} ${metric.getValue()} ${metric.getUnits()}`;
  }
}

class TimeSyncCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'time-sync');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    const endpoint = new TimeSyncEndpoint(await robot.ensureClient(TimeSyncClient.defaultServiceName));
    if (!(await endpoint.establishTimesync(25, true))) {
      console.log('Failed to achieve time sync');
      return false;
    }

    if (options.proto) {
      const response = endpoint.response;
      console.log(response.toObject());
      return true;
    }

    console.log(`GRPC round-trip time: ${duration_str(endpoint.roundTripTime)}`);
    console.log(`Local time to robot time: ${duration_str(endpoint.clockSkew)}`);

    return true;
  }
}

class LicenseCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'license');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
    this._parser.add_argument(['-f', '--feature-codes'], {
      nargs: '+',
      help: 'Optional feature list for GetFeatureEnabled API.',
    });
  }

  async _run(robot, options) {
    /** @type {LicenseClient} */
    const licenseClient = await robot.ensureClient(LicenseClient.defaultServiceName);
    await this._getLicenseInfo(licenseClient, options);
    await this._getFeatureEnabled(licenseClient, options);
    return true;
  }

  async _getLicenseInfo(licenseClient, options) {
    const license = await licenseClient.getLicenseInfo();

    if (options.proto) {
      console.log(license);
    } else {
      console.log(license.toObject());
    }
  }

  async _getFeatureEnabled(licenseClient, options) {
    if (!options.feature_codes || options.feature_codes.length === 0) return;

    const featureEnabled = await licenseClient.getFeatureEnabled(options.feature_codes);

    for (const feature of featureEnabled) {
      if (featureEnabled[feature]) {
        console.log(`Feature ${feature} is enabled.`);
      } else {
        console.log(`Feature ${feature} is not enabled.`);
      }
    }
  }
}

class LeaseCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'lease', [LeaseListCommand]);
  }
}

class LeaseListCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'list');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    const lease_client = await robot.ensureClient(LeaseClient.defaultServiceName);
    const resources = await lease_client.list_leases();
    if (options.proto) {
      console.log(resources);
      return true;
    }
    for (const resource of resources) {
      console.log(LeaseListCommand._format_lease_resource(resource));
    }
    return true;
  }

  static _format_lease_resource(resource) {
    return resource.toObject();
  }
}

class BecomeEstopCommand extends Command {
  _RPC_PRINT_CHOICES = ['timestamp', 'full'];

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'become-estop');
    this._parser.add_argument('--timeout', { type: 'float', help: 'EStop timeout (seconds)', default: 10 });
    this._parser.add_argument('--rpc-print', {
      choices: this._RPC_PRINT_CHOICES,
      default: 'timestamp',
      help: 'How much of the request/response messages to print',
    });
  }

  async _run(robot, options) {
    const client = await robot.ensureClient(EstopClient.defaultServiceName);

    function _timestamp_fmt_request(request) {
      // eslint-disable-next-line
      return `(request timestamp: ${request.getHeader().getRequestTimestamp().toDate().getTime()})`;
    }

    function _timestamp_fmt_response(response) {
      // eslint-disable-next-line
      return `(response timestamp: ${response.getHeader().getRequestTimestamp().toDate().getTime()})`;
    }

    if (options.rpc_print === 'timestamp') {
      client.request_trim_for_log = _timestamp_fmt_request;
      client.response_trim_for_log = _timestamp_fmt_response;
    }

    const endpoint = new EstopEndpoint(client, 'command-line', options.timeout);
    await endpoint.forceSimpleSetup();

    // Console.log('Press Ctrl-C or send SIGINT to exit');
    process.on('SIGINT', () => {
      //
    });

    const keep_alive = new EstopKeepAlive(endpoint);

    // TODO: Solution temporaire le temps d'avoir un plugins pour executer des threads

    setTimeout(() => {
      keep_alive.stop();
    }, 10_000).unref();

    endpoint.deRegister();

    return true;
  }
}

class ImageCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'image', [ListImageSourcesCommand, GetImageCommand]);
  }
}

async function _show_image_sources_list(robot, as_proto = false, service_name = null) {
  service_name = service_name || ImageClient.defaultServiceName;
  const client = await robot.ensureClient(service_name);
  const response = await client.list_image_sources();
  if (as_proto) {
    console.log(response.toObject());
  } else {
    for (const image_source of response) {
      console.log(`${image_source.getName().padEnd(30, ' ')} (${image_source.getRows()}x${image_source.getCols()})`);
    }
  }
  return true;
}

class ListImageSourcesCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'list-sources');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
    this._parser.add_argument('--service-name', {
      default: ImageClient.defaultServiceName,
      help: 'Image service to query',
    });
  }

  _run(robot, options) {
    _show_image_sources_list(robot, options.proto, options.service_name);
    return true;
  }
}

class GetImageCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'get-image');
    this._parser.add_argument('--outfile', { default: null, help: 'Filename into which to save the image' });
    this._parser.add_argument('--quality-percent', { type: 'int', default: 75, help: 'Percent image quality (0-100)' });
    this._parser.add_argument('source_name', { metavar: 'SRC', nargs: '+', help: 'Image source name' });
    this._parser.add_argument('--service-name', {
      help: 'Image service to query',
      default: ImageClient.defaultServiceName,
    });
  }

  async _run(robot, options) {
    const image_requests = options.source_name.map(x => build_image_request(x, options.quality_percent));
    const client = await robot.ensureClient(ImageClient.defaultServiceName);

    let response;
    try {
      response = await client.get_image(image_requests);
    } catch (e) {
      if (e instanceof UnknownImageSourceError) {
        console.error(`Requested image source "${options.source_name}" does not exist. Available image sources:`);
        _show_image_sources_list(robot, false, options.service_name);
        return false;
      } else if (e instanceof ImageResponseError) {
        console.error(`Robot cannot generate the "${options.source_name}" at this time. Retry the command.`);
        return false;
      }
    }

    save_images_as_files(response);

    return true;
  }
}

class LocalGridCommands extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'local_grid', [ListLocalGridTypesCommand, GetLocalGridsCommand]);
  }
}

async function _show_local_grid_sources_list(robot, as_proto = false) {
  const client = await robot.ensureClient(LocalGridClient.defaultServiceName);
  const response = await client.get_local_grid_types();
  if (as_proto) {
    console.log(response.toObject());
  } else {
    for (const local_grid_type of response) {
      console.log(local_grid_type.getName());
    }
  }
  return true;
}

class ListLocalGridTypesCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'types');
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  _run(robot, options) {
    _show_local_grid_sources_list(robot, options.proto);
    return true;
  }
}

class GetLocalGridsCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'get');
    this._parser.add_argument('--outfile', { default: null, help: 'filename into which to save the image' });
    this._parser.add_argument('types', { metavar: 'SRC', nargs: '+', help: 'image types' });
  }

  async _run(robot, options) {
    const client = await robot.ensureClient(LocalGridClient.defaultServiceName);
    const response = await client.get_local_grids(options.types);

    for (const local_grid_response of response) {
      console.log(local_grid_response);
    }
    return true;
  }
}

class DataAcquisitionCommand extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'acquire', [
      DataAcquisitionServiceCommand,
      DataAcquisitionRequestCommand,
      DataAcquisitionStatusCommand,
    ]);
  }
}

class DataAcquisitionRequestCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'request');
    this._parser.add_argument('--image-source', {
      metavar: 'IMG_SRC',
      default: [],
      help: 'Image source name',
      action: 'append',
    });
    this._parser.add_argument('--image-service', {
      metavar: 'SERVICE_NAME',
      default: [],
      help: 'Image service name for the image source.',
      action: 'append',
    });
    this._parser.add_argument('--data-source', {
      metavar: 'DATA_SRC',
      default: [],
      help: 'Data source name',
      action: 'append',
    });
    this._parser.add_argument('--action-name', {
      help: 'The action name to save the data with.',
      default: 'quick_captures',
    });
    this._parser.add_argument('--group-name', {
      help: 'The group name to save the data with.',
      default: 'command_line',
    });
    this._parser.add_argument('--non-blocking-request', {
      help: 'Return after making the acquisition request, without monitoring the status for completion.',
      default: false,
      action: 'store_true',
    });
  }

  async _run(robot, options) {
    if (!options.data_source && !(options.image_source && options.image_service)) {
      this._parser.error('A request requires either a data source name or an image source+service name.');
    }
    if (options.image_source.length !== options.image_service.length) {
      this._parser.error('A request must have a 1:1 correspondence between image source and image service arguments.');
    }

    const captures = new data_acquisition_pb.AcquisitionRequestList();
    captures.setDataCapturesList(
      options.data_source.map(data_name => new data_acquisition_pb.DataCapture().setName(data_name)),
    );

    const img_captures = [];
    for (const [i, src_name] of options.image_source.entries()) {
      const img_service = options.image_service[i];
      img_captures.push(
        new data_acquisition_pb.ImageSourceCapture().setImageService(img_service).setImageSource(src_name),
      );
    }
    captures.setImageCapturesList(img_captures);

    await (await robot.timeSync).wait_for_sync(1.0);
    const data_acquisition_client = await robot.ensureClient(DataAcquisitionClient.defaultServiceName);
    const success = await acquire_and_process_request(
      data_acquisition_client,
      captures,
      options.group_name,
      options.action_name,
      null,
      !options.non_blocking_request,
    );
    return success;
  }
}

class DataAcquisitionServiceCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'info');
    this._data_type_width = 15;
    this._data_name_width = 35;
    this._service_name_width = 30;
  }

  async _run(robot) {
    const client = await robot.ensureClient(DataAcquisitionClient.defaultServiceName);
    const response = await client.get_service_info();
    console.log("Data Acquisition Service's Available Capabilities\n");
    console.log('-'.repeat(this._data_type_width + this._data_name_width + this._service_name_width));
    const out = [];
    for (const data_name of response.getDataSources()) {
      out.push({ Data_Type: 'data', Data_Name: data_name.getName(), Service_Name: '' });
    }

    for (const img_service of response.getImageSourcesList()) {
      for (const img of img_service.getImageSourceNamesList()) {
        out.push({ Data_Type: 'image', Data_Name: img, Service_Name: img_service.getServiceName() });
      }
    }
    console.table(out);
    return true;
  }
}

class DataAcquisitionStatusCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'status');
    this._parser.add_argument('id', { type: 'int', help: 'Response id to get the status for' });
  }

  async _run(robot, options) {
    const client = await robot.ensureClient(DataAcquisitionClient.defaultServiceName);
    const response = await client.get_status(options.id);
    console.log(response.toObject());
    return true;
  }
}

class HostComputerIPCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'self-ip', false);
  }

  _run(robot) {
    console.log(`The IP address of the computer used to talk to the robot is: ${getSelfIp(robot._name)}`);
  }
}

class PowerCommand extends Subcommands {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'power', [PowerRobotCommand, PowerPayloadsCommand, PowerWifiRadioCommand]);
  }
}

class PowerRobotCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'robot');
    this._parser.add_argument('cmd', { choices: ['cycle', 'off'] });
  }

  async _run(robot, options) {
    await (await robot.timeSync).wait_for_sync(1_000);
    const lease_client = await robot.ensureClient(LeaseClient.defaultServiceName);
    await lease_client.acquire();
    const power_client = await robot.ensureClient(PowerClient.defaultServiceName);
    if (options.cmd === 'cycle') {
      power_cycle_robot(power_client);
    } else if (options.cmd === 'off') {
      power_off_robot(power_client);
    }
  }
}

class PowerPayloadsCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'payload');
    this._parser.add_argument('on_off', { choices: ['on', 'off'] });
  }

  async _run(robot, options) {
    await (await robot.timeSync).wait_for_sync(1_000);
    const lease_client = await robot.ensureClient(LeaseClient.defaultServiceName);
    const lease_keep_alive = new LeaseKeepAlive(lease_client, { must_acquire: true, return_at_exit: true });
    await lease_keep_alive.waitForInitialization();
    const power_client = await robot.ensureClient(PowerClient.defaultServiceName);
    if (options.on_off === 'on') {
      await power_on_payload_ports(power_client);
    } else if (options.on_off === 'off') {
      await power_off_payload_ports(power_client);
    }
  }
}

class PowerWifiRadioCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, 'wifi');
    this._parser.add_argument('on_off', { choices: ['on', 'off'] });
  }

  async _run(robot, options) {
    await (await robot.timeSync).waitForSync(1.0);
    const lease_client = await robot.ensureClient(LeaseClient.defaultServiceName);
    await lease_client.acquire();
    const power_client = await robot.ensureClient(PowerClient.defaultServiceName);
    if (options.on_off === 'on') {
      power_on_wifi_radio(power_client);
    } else if (options.on_off === 'off') {
      power_off_wifi_radio(power_client);
    }
  }
}

function main(args = null) {
  const parser = new argparse.ArgumentParser({
    prog: 'bosdyn.client',
    description: 'Command-line interface for interacting with robot services.',
  });
  addCommonArguments(parser);

  const commandDict = {};
  const subparsers = parser.add_subparsers({ title: 'commands', dest: 'command' });

  /* eslint-disable no-new */
  new DirectoryCommands(subparsers, commandDict);
  new PayloadCommands(subparsers, commandDict);
  new FaultCommands(subparsers, commandDict);
  new RobotIdCommand(subparsers, commandDict);
  new LicenseCommand(subparsers, commandDict);
  new RobotStateCommands(subparsers, commandDict);
  new DataBufferCommands(subparsers, commandDict);
  new DataServiceCommands(subparsers, commandDict);
  new TimeSyncCommand(subparsers, commandDict);
  new LeaseCommands(subparsers, commandDict);
  new BecomeEstopCommand(subparsers, commandDict);
  new ImageCommands(subparsers, commandDict);
  new LocalGridCommands(subparsers, commandDict);
  new DataAcquisitionCommand(subparsers, commandDict);
  new HostComputerIPCommand(subparsers, commandDict);
  new PowerCommand(subparsers, commandDict);
  /* eslint-enable no-new */

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('BosdynClient');
  const robot = sdk.createRobot(options.hostname);

  if (!options.command) {
    console.debug('Need to specify a command');
    parser.print_help();
    return false;
  }

  if (!commandDict[options.command].run(robot, options)) {
    return false;
  }

  return true;
}

module.exports = {
  main,
};
