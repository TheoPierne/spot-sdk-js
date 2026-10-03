#!/usr/bin/env node
/**
 * @file Command-line utility code for interacting with robot services.
 */

'use strict';

/**
 * Command-line utility code for interacting with robot services, like bosdyn.client.command_line of Python
 * (`python -m bosdyn.client` there, the bin of the package here: `npx spot-sdk-js HOSTNAME COMMAND`).
 */

const { randomUUID } = require('node:crypto');
const { mkdirSync, writeFileSync } = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const argparse = require('argparse');
const jspb = require('google-protobuf');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { Int32Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const { InvalidLoginError, InvalidTokenError } = require('./auth');
const { getSelfIp } = require('./common');
const { DataAcquisitionClient } = require('./data_acquisition');
const { acquireAndProcessRequest } = require('./data_acquisition_helpers');
const { DataAcquisitionPluginClient } = require('./data_acquisition_plugin');
const { DataBufferClient } = require('./data_buffer');
const { DataServiceClient } = require('./data_service');
const { DirectoryClient, NonexistentServiceError } = require('./directory');
const { DirectoryRegistrationClient, DirectoryRegistrationResponseError } = require('./directory_registration');
const { EstopClient, EstopEndpoint, EstopKeepAlive } = require('./estop');
const { BosdynError, InvalidRequestError, ProxyConnectionError, ResponseError, RpcError } = require('./exceptions');
const {
  ImageClient,
  ImageResponseError,
  UnknownImageSourceError,
  buildImageRequest,
  saveImagesAsFiles,
} = require('./image');
const { KeepaliveClient } = require('./keepalive');
const { LeaseClient, LeaseKeepAlive } = require('./lease');
const { LicenseClient } = require('./license');
const { LocalGridClient } = require('./local_grid');
const { InactiveLogError, LogStatusClient } = require('./log_status');
const { PayloadClient } = require('./payload');
const { PayloadAlreadyExistsError, PayloadRegistrationClient } = require('./payload_registration');
const {
  PowerClient,
  powerCycleRobot,
  powerOffPayloadPorts,
  powerOffRobot,
  powerOffWifiRadio,
  powerOnPayloadPorts,
  powerOnWifiRadio,
} = require('./power');
const { RobotIdClient } = require('./robot_id');
const { RobotStateClient } = require('./robot_state');
const { createStandardSdk } = require('./sdk');
const { TimeSyncClient, TimeSyncEndpoint, TimeSyncError, timespecToRobotTimespan } = require('./time_sync');
const { addCommonArguments, authenticate, setupLogging } = require('./util');

const dataAcquisitionPb = require('../bosdyn/api/data_acquisition_pb');
const { Event, TextMessage } = require('../bosdyn/api/data_buffer_pb');
const { EventsCommentsSpec } = require('../bosdyn/api/data_index_pb');
const directoryRegistrationPb = require('../bosdyn/api/directory_registration_pb');
const imagePb = require('../bosdyn/api/image_pb');
const keepalivePb = require('../bosdyn/api/keepalive/keepalive_pb');
const payloadPb = require('../bosdyn/api/payload_pb');
const robotIdPb = require('../bosdyn/api/robot_id_pb');
const robotStatePb = require('../bosdyn/api/robot_state_pb');
const serviceFaultPb = require('../bosdyn/api/service_fault_pb');
const { messageToJson } = require('../bosdyn-core/json_format');
const { _pythonFloatRepr: pythonFloatRepr, messageToString } = require('../bosdyn-core/text_format');
const { distanceStr, durationStr, formatFixed, nowSec, secsToHms } = require('../bosdyn-core/util');

// ---------------------------------------------------------------------------------------------------------------
// The output of Python: print() of the messages and of the datetimes.
// ---------------------------------------------------------------------------------------------------------------

/**
 * A message like print() shows it in Python: its text format.
 * @param {import('google-protobuf').Message} message
 * @returns {string}
 */
function _str(message) {
  return messageToString(message);
}

/**
 * The messages of a repeated field like print() shows them in Python: the list of their text formats.
 * @param {import('google-protobuf').Message[]} messages
 * @returns {string}
 */
function _reprList(messages) {
  return `[${messages.map(message => messageToString(message)).join(', ')}]`;
}

/**
 * The repr() of a list of strings in Python, e.g. "['a', 'b']".
 * @param {string[]} strings
 * @returns {string}
 */
function _reprStrings(strings) {
  const repr = text => {
    const quote = text.includes("'") && !text.includes('"') ? '"' : "'";
    return quote + text.replace(/\\/g, '\\\\').replace(new RegExp(quote, 'g'), `\\${quote}`) + quote;
  };
  return `[${strings.map(repr).join(', ')}]`;
}

/**
 * The name of a value of an enum, like Name() in Python (where an unknown value raises a ValueError).
 * @param {Object<string, number>} enumObject
 * @param {number} value
 * @returns {string} The name, or the number of an unknown value.
 */
function _enumName(enumObject, value) {
  return Object.keys(enumObject).find(name => enumObject[name] === value) ?? String(value);
}

/**
 * The str() of an error of the SDK in Python: the ResponseError give the type of their response, the RpcError their
 * own type, the other errors only their message.
 * @param {BosdynError} error
 * @returns {string}
 */
function _errorStr(error) {
  return error instanceof ResponseError || error instanceof RpcError ? String(error) : error.message;
}

/** Rounds half to even, like the conversions of the datetimes of Python. */
function _roundHalfEven(value) {
  const rounded = Math.round(value);
  return Math.abs(value % 1) === 0.5 && rounded % 2 !== 0 ? rounded - 1 : rounded;
}

/**
 * The local datetime of a POSIX time, like datetime.fromtimestamp() in Python: its date() and time() as text.
 * @param {number} secs
 * @returns {{date: string, time: string}}
 */
function _fromTimestamp(secs) {
  let seconds = Math.trunc(secs);
  let micros = _roundHalfEven((secs - seconds) * 1e6);
  if (micros >= 1e6) {
    micros -= 1e6;
    seconds += 1;
  } else if (micros < 0) {
    micros += 1e6;
    seconds -= 1;
  }
  const date = new Date(seconds * 1_000);
  const pad = (number, width = 2) => String(number).padStart(width, '0');
  const fraction = micros ? `.${pad(micros, 6)}` : '';
  return {
    date: `${pad(date.getFullYear(), 4)}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
    time: `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}${fraction}`,
  };
}

/**
 * The seconds of a timestamp, like seconds + nanos * 1e-9 in Python.
 * @param {?Timestamp} timestamp An unset timestamp is the epoch, like Python.
 * @returns {number}
 */
function _timestampSecs(timestamp) {
  return Number(timestamp?.getSeconds() ?? 0) + (timestamp?.getNanos() ?? 0) * 1e-9;
}

/**
 * A timestamp like print() shows the datetime of timestamp_to_datetime() in Python: 'YYYY-MM-DD HH:MM:SS' in local
 * time, with the microseconds if not zero.
 * @param {?Timestamp} timestamp An unset timestamp is the epoch, like Python.
 * @returns {string}
 */
function _datetimeStr(timestamp) {
  const { date, time } = _fromTimestamp(_timestampSecs(timestamp));
  return `${date} ${time}`;
}

/** Resolved by _Interrupt for a SIGINT. */
const _INTERRUPTED = Symbol('interrupted');

/**
 * The Ctrl-C (SIGINT) of the user while it is created, like a KeyboardInterrupt in Python: the default handler,
 * which ends the process, is replaced until dispose().
 */
class _Interrupt {
  constructor() {
    this._controller = new AbortController();
    this._onSigint = () => this._controller.abort();
    process.on('SIGINT', this._onSigint);
  }

  /** @returns {boolean} Whether Ctrl-C was pressed. */
  get interrupted() {
    return this._controller.signal.aborted;
  }

  /**
   * Waits for a promise, unless Ctrl-C is pressed first.
   * @param {Promise<*>} promise Rejects the returned promise if it rejects first.
   * @returns {Promise<boolean>} Whether Ctrl-C was pressed first.
   */
  race(promise) {
    // Its failure after Ctrl-C is ignored.
    promise.catch(() => undefined);
    const { signal } = this._controller;
    if (signal.aborted) return Promise.resolve(true);
    return new Promise((resolve, reject) => {
      const onAbort = () => resolve(true);
      signal.addEventListener('abort', onAbort, { once: true });
      promise.then(
        () => {
          signal.removeEventListener('abort', onAbort);
          resolve(false);
        },
        error => {
          signal.removeEventListener('abort', onAbort);
          reject(error);
        },
      );
    });
  }

  /**
   * Sleeps, unless Ctrl-C is pressed first (the timer keeps the process alive, unlike a signal handler).
   * @param {number} ms
   * @returns {Promise<boolean>} Whether Ctrl-C was pressed.
   */
  async sleep(ms) {
    try {
      await sleep(ms, _INTERRUPTED, { signal: this._controller.signal });
      return false;
    } catch (e) {
      if (this.interrupted) return true;
      throw e;
    }
  }

  dispose() {
    process.off('SIGINT', this._onSigint);
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Commands.
// ---------------------------------------------------------------------------------------------------------------

/**
 * @typedef {import('./robot').Robot} Robot
 * @typedef {import('argparse').ArgumentParser} ArgumentParser
 */

/** Command-line command. */
class Command {
  /** The name of the command the user should enter on the command line to select this command. */
  static NAME = null;

  /** Whether authentication is needed before the command is run. Most commands need authentication. */
  static NEED_AUTHENTICATION = true;

  /** The help of the command (the docstring of its class in Python). */
  static HELP = undefined;

  /**
   * @param {Object} subparsers The subparsers of argparse to which the command is added.
   * @param {Object<string, Command>} commandDict Dictionary of command names which take parsed options.
   */
  constructor(subparsers, commandDict) {
    commandDict[this.constructor.NAME] = this;
    /** @type {ArgumentParser} */
    this._parser = subparsers.add_parser(this.constructor.NAME, { help: this.constructor.HELP });
  }

  /**
   * Invoke the command. The errors of the SDK are printed (to stderr) instead of thrown, like Python.
   * @param {Robot} robot Robot object on which to run the command.
   * @param {Object} options Parsed command-line arguments.
   * @returns {Promise<*>} The result of the command, null if an error of the SDK was printed.
   */
  async run(robot, options) {
    try {
      if (this.constructor.NEED_AUTHENTICATION) {
        if (options.username || options.password) {
          await robot.authenticate(options.username, options.password);
        } else {
          await authenticate(robot);
        }
        // Make sure that we can use all registered services.
        await robot.syncWithDirectory();
      }
      return await this._run(robot, options);
    } catch (err) {
      if (err instanceof ProxyConnectionError) {
        console.error(`Could not contact robot with hostname "${options.hostname}".`);
      } else if (err instanceof InvalidTokenError) {
        console.error('The provided user token is invalid.');
      } else if (err instanceof InvalidLoginError) {
        console.error('Username and/or password are invalid.');
      } else if (err instanceof BosdynError) {
        console.error(`${err.constructor.name}: ${_errorStr(err)}`);
      } else {
        throw err;
      }
    }
    return null;
  }

  /**
   * Implementation of the command.
   * @abstract
   * @param {Robot} robot Robot object on which to run the command.
   * @param {Object} options Parsed command-line arguments.
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line no-unused-vars
  async _run(robot, options) {
    throw new Error(`${this.constructor.name} does not implement _run()`);
  }
}

/** Run subcommands. */
class Subcommands extends Command {
  /**
   * @param {Object} subparsers The subparsers of argparse to which the command is added.
   * @param {Object<string, Command>} commandDict Dictionary of command names which take parsed options.
   * @param {Array<typeof Command>} subcommands List of subcommands to run.
   */
  constructor(subparsers, commandDict, subcommands) {
    super(subparsers, commandDict);
    const commandDest = `${this.constructor.NAME}_command`;
    const cmdSubparsers = this._parser.add_subparsers({ title: this.constructor.HELP, dest: commandDest });
    cmdSubparsers.required = true;
    this._subcommands = {};
    for (const Subcommand of subcommands) {
      // eslint-disable-next-line no-new
      new Subcommand(cmdSubparsers, this._subcommands);
    }
  }

  /**
   * Implementation of the command.
   * @returns {Promise<*>} Execution of the specific subcommand from the options.
   */
  _run(robot, options) {
    const subcommand = options[`${this.constructor.NAME}_command`];
    return this._subcommands[subcommand].run(robot, options);
  }
}

// --- Directory. ------------------------------------------------------------------------------------------------

/**
 * Prints the passed values as "name service_type authority tokens", with the first three using the specified width.
 */
function _formatDirEntry(name, serviceType, authority, tokens, nameWidth = 23, typeWidth = 31, authorityWidth = 27) {
  console.log(
    `${name.padEnd(nameWidth)} ${serviceType.padEnd(typeWidth)} ${authority.padEnd(authorityWidth)} ${tokens}`,
  );
}

/**
 * @param {import('../bosdyn/api/directory_pb').ServiceEntry} entry Service entry being checked.
 * @returns {string} A comma-separated list of the tokens required for using the service.
 */
function _tokenReqStr(entry) {
  const required = [];
  if (entry.getUserTokenRequired()) required.push('user');
  return required.join(', ');
}

/**
 * Print service directory list for robot.
 * @param {Robot} robot Robot object used to get the list of services.
 * @param {boolean} [asProto=false] Print the directory entries as full proto definitions instead of formatted strings.
 * @returns {Promise<boolean>}
 */
async function _showDirectoryList(robot, asProto = false) {
  /** @type {DirectoryClient} */
  const client = await robot.ensureClient(DirectoryClient.defaultServiceName);
  const entries = await client.list();
  if (entries.length === 0) {
    console.log('No services found');
    return true;
  }

  if (asProto) {
    for (const entry of entries) console.log(_str(entry));
    return true;
  }

  const maxNameLength = Math.max(...entries.map(entry => entry.getName().length));
  const maxTypeLength = Math.max(...entries.map(entry => entry.getType().length));
  const maxAuthorityLength = Math.max(...entries.map(entry => entry.getAuthority().length));

  const widths = [maxNameLength + 4, maxTypeLength + 4, maxAuthorityLength + 4];
  _formatDirEntry('name', 'type', 'authority', 'tokens', ...widths);
  console.log('-'.repeat(20 + maxNameLength + maxTypeLength + maxAuthorityLength));
  for (const entry of entries) {
    _formatDirEntry(entry.getName(), entry.getType(), entry.getAuthority(), _tokenReqStr(entry), ...widths);
  }
  return true;
}

/**
 * Print a service directory entry.
 * @param {Robot} robot Robot object used to get the list of services.
 * @param {string} service Name of the service to print.
 * @param {boolean} [asProto=false] Print the entry as a full proto definition instead of a formatted string.
 * @returns {Promise<boolean>}
 */
async function _showDirectoryEntry(robot, service, asProto = false) {
  /** @type {DirectoryClient} */
  const client = await robot.ensureClient(DirectoryClient.defaultServiceName);
  const entry = await client.getEntry(service);
  if (asProto) {
    console.log(_str(entry));
  } else {
    _formatDirEntry('name', 'type', 'authority', 'tokens');
    console.log('-'.repeat(90));
    _formatDirEntry(entry.getName(), entry.getType(), entry.getAuthority(), _tokenReqStr(entry));
  }
  return true;
}

/**
 * List all services in the directory.
 */
class DirectoryListCommand extends Command {
  static NAME = 'list';
  static HELP = 'List all services in the directory.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    await _showDirectoryList(robot, options.proto);
    return true;
  }
}

/**
 * Get entry for a given service in the directory.
 */
class DirectoryGetCommand extends Command {
  static NAME = 'get';
  static HELP = 'Get entry for a given service in the directory.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
    this._parser.add_argument('service', { help: 'service name to get entry for' });
  }

  async _run(robot, options) {
    try {
      await _showDirectoryEntry(robot, options.service, options.proto);
    } catch (e) {
      if (!(e instanceof NonexistentServiceError)) throw e;
      console.log(`The requested service name "${options.service}" does not exist.  Available services:`);
      await _showDirectoryList(robot, options.proto);
      return false;
    }
    return true;
  }
}

/**
 * Register entry for a service in the directory.
 */
class DirectoryRegisterCommand extends Command {
  static NAME = 'register';
  static HELP = 'Register entry for a service in the directory.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
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
    /** @type {DirectoryRegistrationClient} */
    const directoryRegistrationClient = await robot.ensureClient(DirectoryRegistrationClient.defaultServiceName);
    try {
      await directoryRegistrationClient.register(
        options.service_name,
        options.service_type,
        options.service_authority,
        options.service_hostname,
        options.service_port,
        !options.no_user_token,
      );
    } catch (e) {
      if (!(e instanceof DirectoryRegistrationResponseError)) throw e;
      const status = _enumName(directoryRegistrationPb.RegisterServiceResponse.Status, e.response.getStatus());
      console.log(`Failed to register service ${options.service_name}.\nResponse Status: ${status}`);
      return false;
    }
    console.log(`Successfully registered service ${options.service_name}`);
    return true;
  }
}

/**
 * Unregister entry for a service in the directory.
 */
class DirectoryUnregisterCommand extends Command {
  static NAME = 'unregister';
  static HELP = 'Unregister entry for a service in the directory.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--service-name', { required: true, help: 'unique name of the service' });
  }

  async _run(robot, options) {
    /** @type {DirectoryRegistrationClient} */
    const directoryRegistrationClient = await robot.ensureClient(DirectoryRegistrationClient.defaultServiceName);
    try {
      await directoryRegistrationClient.unregister(options.service_name);
    } catch (e) {
      if (!(e instanceof DirectoryRegistrationResponseError)) throw e;
      const status = _enumName(directoryRegistrationPb.UnregisterServiceResponse.Status, e.response.getStatus());
      console.log(`Failed to unregister service ${options.service_name}.\nResponse Status: ${status}`);
      return false;
    }
    console.log(`Successfully unregistered service ${options.service_name}`);
    return true;
  }
}

/**
 * Commands related to the directory service.
 */
class DirectoryCommands extends Subcommands {
  static NAME = 'dir';
  static HELP = 'Commands related to the directory service.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [
      DirectoryListCommand,
      DirectoryGetCommand,
      DirectoryRegisterCommand,
      DirectoryUnregisterCommand,
    ]);
  }
}

// --- Payloads. -------------------------------------------------------------------------------------------------

/**
 * Print payload list for robot.
 * @param {Robot} robot Robot object used to get the list of payloads.
 * @param {boolean} [asProto=false] Print the payloads as full proto definitions instead of formatted strings.
 * @returns {Promise<boolean>}
 */
async function _showPayloadList(robot, asProto = false) {
  /** @type {PayloadClient} */
  const client = await robot.ensureClient(PayloadClient.defaultServiceName);
  const payloadProtos = await client.listPayloads();
  if (payloadProtos.length === 0) {
    console.log('No payloads found');
    return true;
  }

  if (asProto) {
    for (const payload of payloadProtos) console.log(_str(payload));
    return true;
  }

  // Print out the payload name, description, and GUID in columns with set width.
  const [nameWidth, descriptionWidth, guidWidth] = [30, 60, 36];
  console.log(`\n${'Name'.padEnd(nameWidth)} ${'Description'.padEnd(descriptionWidth)} ${'GUID'.padEnd(guidWidth)}`);
  console.log('-'.repeat(5 + nameWidth + descriptionWidth + guidWidth));
  for (const payload of payloadProtos) {
    const [name, description] = [
      payload.getName().padEnd(nameWidth),
      payload.getDescription().padEnd(descriptionWidth),
    ];
    console.log(`${name} ${description} ${payload.getGuid().padEnd(guidWidth)}`);
  }
  return true;
}

/**
 * List all payloads registered with the robot.
 */
class PayloadListCommand extends Command {
  static NAME = 'list';
  static HELP = 'List all payloads registered with the robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    await _showPayloadList(robot, options.proto);
    return true;
  }
}

/**
 * Register a payload with the robot.
 * @param {Robot} robot Robot object used to register the payload.
 * @param {string} name The name that will be assigned to the registered payload.
 * @param {string} guid The GUID that will be assigned to the registered payload.
 * @param {string} secret The secret that the payload will be registered with.
 * @returns {Promise<boolean>}
 */
async function _registerPayload(robot, name, guid, secret) {
  /** @type {PayloadRegistrationClient} */
  const payloadRegistrationClient = await robot.ensureClient(PayloadRegistrationClient.defaultServiceName);
  const payload = new payloadPb.Payload().setGuid(guid).setName(name);
  try {
    await payloadRegistrationClient.registerPayload(payload, secret);
  } catch (e) {
    if (!(e instanceof PayloadAlreadyExistsError)) throw e;
    console.log('\nA payload with this GUID is already registered. Check the robot Admin Console.');
    return true;
  }
  console.log(
    '\nPayload successfully registered with the robot.\n' +
      'Before it can be used, the payload must be authorized in the Admin Console.',
  );
  return true;
}

/**
 * Register a payload with the robot.
 */
class PayloadRegisterCommand extends Command {
  static NAME = 'register';
  static HELP = 'Register a payload with the robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--payload-name', { required: true, help: 'name of the payload' });
    this._parser.add_argument('--payload-guid', { required: true, help: 'guid of the payload' });
    this._parser.add_argument('--payload-secret', { required: true, help: 'secret for the payload' });
  }

  _run(robot, options) {
    // Python returned None: the exit status was 1 on success.
    return _registerPayload(robot, options.payload_name, options.payload_guid, options.payload_secret);
  }
}

/**
 * Commands related to the payload and payload registration services.
 */
class PayloadCommands extends Subcommands {
  static NAME = 'payload';
  static HELP = 'Commands related to the payload and payload registration services.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [PayloadListCommand, PayloadRegisterCommand]);
  }
}

// --- Faults. ---------------------------------------------------------------------------------------------------

/**
 * Print faults for the robot: the system, behavior and service faults (only the service faults were shown).
 * @param {Robot} robot Robot object used to get the robot state.
 */
async function _showAllFaults(robot) {
  /** @type {RobotStateClient} */
  const robotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
  const robotState = await robotStateClient.getRobotState();
  const systemFaults = robotState.getSystemFaultState()?.getFaultsList() ?? [];
  const behaviorFaults = robotState.getBehaviorFaultState()?.getFaultsList() ?? [];
  const serviceFaults = robotState.getServiceFaultState()?.getFaultsList() ?? [];

  console.log(`\n${'-'.repeat(80)}`);
  if (systemFaults.length === 0) {
    console.log('No active system faults.');
  } else {
    for (const fault of systemFaults) {
      console.log(
        `\n${fault.getName()}\n    Error Message: ${fault.getErrorMessage()}\n` +
          `    Onset Time: ${_datetimeStr(fault.getOnsetTimestamp())}`,
      );
    }
  }

  console.log();
  if (behaviorFaults.length === 0) {
    console.log('No active behavior faults.');
  } else {
    const { Cause, Status } = robotStatePb.BehaviorFault;
    for (const fault of behaviorFaults) {
      console.log(
        `\n${_enumName(Cause, fault.getCause())}\n    Onset Time: ${_datetimeStr(fault.getOnsetTimestamp())}\n` +
          `    Clearable: ${_enumName(Status, fault.getStatus())}`,
      );
    }
  }

  console.log();
  if (serviceFaults.length === 0) {
    console.log('No active service faults.');
  } else {
    for (const fault of serviceFaults) {
      const faultId = fault.getFaultId() ?? new serviceFaultPb.ServiceFaultId();
      console.log(
        `\n${faultId.getFaultName()}\n    Service Name: ${faultId.getServiceName()}\n` +
          `    Payload GUID: ${faultId.getPayloadGuid()}\n    Error Message: ${fault.getErrorMessage()}\n` +
          `    Onset Time: ${_datetimeStr(fault.getOnsetTimestamp())}`,
      );
    }
  }
}

/**
 * Show all faults currently active in robot state.
 */
class FaultShowCommand extends Command {
  static NAME = 'show';
  static HELP = 'Show all faults currently active in robot state.';

  async _run(robot) {
    await _showAllFaults(robot);
    return true;
  }
}

/**
 * Watch all faults in robot state and print them out.
 */
class FaultWatchCommand extends Command {
  static NAME = 'watch';
  static HELP = 'Watch all faults in robot state and print them out.';

  async _run(robot) {
    console.log('Press Ctrl-C or send SIGINT to exit\n\n');
    const interrupt = new _Interrupt();
    try {
      while (!(await interrupt.race(_showAllFaults(robot))) && !(await interrupt.sleep(1_000))) {
        // Until Ctrl-C.
      }
    } finally {
      interrupt.dispose();
    }
    return true;
  }
}

/**
 * Commands related to the fault service and robot state service (for fault reading).
 */
class FaultCommands extends Subcommands {
  static NAME = 'fault';
  static HELP = 'Commands related to the fault service and robot state service (for fault reading).';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [FaultShowCommand, FaultWatchCommand]);
  }
}

/**
 * Get log status by log id.
 */
// --- Log status. -----------------------------------------------------------------------------------------------

class GetLogCommand extends Command {
  static NAME = 'get';
  static HELP = 'Get log status but log id.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('id', { help: 'id of log bundle to display' });
  }

  async _run(robot, options) {
    /** @type {LogStatusClient} */
    const client = await robot.ensureClient(LogStatusClient.defaultServiceName);
    const response = await client.getLogStatus(options.id);
    console.log(_str(response.getLogStatus()));
    return true;
  }
}

/**
 * Get active log bundles for robot.
 */
class GetActiveLogStatusesCommand extends Command {
  static NAME = 'active';
  static HELP = 'Get active log bundles for robot.';

  async _run(robot) {
    /** @type {LogStatusClient} */
    const client = await robot.ensureClient(LogStatusClient.defaultServiceName);
    const response = await client.getActiveLogStatuses();
    console.log(_reprList(response.getLogStatusesList()));
    return true;
  }
}

/**
 * Start a timed experiment log.
 */
class StartTimedExperimentLogCommand extends Command {
  static NAME = 'timed';
  static HELP = 'Start a timed experiment log.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('seconds', { type: 'float', help: 'how long should the experiment run?' });
  }

  async _run(robot, options) {
    /** @type {LogStatusClient} */
    const client = await robot.ensureClient(LogStatusClient.defaultServiceName);
    const response = await client.startExperimentLog(options.seconds);
    console.log(_str(response.getLogStatus()));
    return true;
  }
}

/**
 * Start a continuous experiment log.
 */
class StartContinuousExperimentLogCommand extends Command {
  static NAME = 'continuous';
  static HELP = 'Start a continuous experiment log.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('-sleep', {
      type: 'float',
      default: 5,
      help: 'how long should thread sleep before extending',
    });
  }

  /**
   * Terminate the log after Ctrl-C. A second Ctrl-C does not wait for the termination.
   * @param {LogStatusClient} client
   * @param {string} logId
   */
  static async handleKeyboardInterruption(client, logId) {
    const interrupt = new _Interrupt();
    try {
      console.log(' Received keyboard interruption\n\n');
      const termination = client.terminateLog(logId);
      if (!(await interrupt.race(termination))) {
        console.log(_str((await termination).getLogStatus()));
        return;
      }
      // Without waiting for the result, like terminate_log_async() in Python.
      client.terminateLog(logId).catch(() => undefined);
      console.log('Log will terminate shortly');
      const response = await client.getLogStatus(logId);
      console.log(_str(response.getLogStatus()));
    } finally {
      interrupt.dispose();
    }
  }

  async _run(robot, options) {
    /** @type {LogStatusClient} */
    const client = await robot.ensureClient(LogStatusClient.defaultServiceName);
    const response = await client.startExperimentLog(options.sleep * 2);
    const logId = response.getLogStatus().getId();
    console.log('Experiment log id: ', logId);
    console.log('Use terminate command, press Ctrl-C or send SIGINT to complete log\n\n');

    const interrupt = new _Interrupt();
    let interrupted = false;
    try {
      while (!interrupted) {
        interrupted =
          (await interrupt.sleep(options.sleep * 1_000)) ||
          (await interrupt.race(client.updateExperiment(logId, options.sleep * 2)));
      }
    } catch (e) {
      if (!(e instanceof InactiveLogError)) throw e;
      const status = await client.getLogStatus(logId);
      console.log(_str(status.getLogStatus()));
    } finally {
      interrupt.dispose();
    }
    if (interrupted) await StartContinuousExperimentLogCommand.handleKeyboardInterruption(client, logId);
    return true;
  }
}

/**
 * Give experiment log commands to robot.
 */
class ExperimentLogCommand extends Subcommands {
  static NAME = 'experiment';
  static HELP = 'Give experiment log commands to robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [StartTimedExperimentLogCommand, StartContinuousExperimentLogCommand]);
  }
}

/**
 * Start a retro log.
 */
class StartRetroLogCommand extends Command {
  static NAME = 'retro';
  static HELP = 'Start a retro log.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('seconds', { type: 'float', help: 'how long should the retro log run?' });
  }

  async _run(robot, options) {
    /** @type {LogStatusClient} */
    const client = await robot.ensureClient(LogStatusClient.defaultServiceName);
    const response = await client.startRetroLog(options.seconds);
    console.log(_str(response.getLogStatus()));
    return true;
  }
}

/**
 * Start a concurrent experiment log, with event-derived data.
 */
class StartConcurrentLogCommand extends Command {
  static NAME = 'concurrent';
  static HELP = 'Start a concurrent experiment log, with event-derived data.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('seconds', { type: 'float', help: 'how long should the experiment run?' });
    this._parser.add_argument('event_type', { help: 'name of the event type we want to match a recipe against' });
  }

  async _run(robot, options) {
    /** @type {LogStatusClient} */
    const client = await robot.ensureClient(LogStatusClient.defaultServiceName);
    const timeSyncEndpoint = new TimeSyncEndpoint(await robot.ensureClient(TimeSyncClient.defaultServiceName));
    if (!(await timeSyncEndpoint.establishTimesync())) {
      console.log('Failed to establish time sync with the robot.');
      return false;
    }

    const robotNow = timeSyncEndpoint.robotTimestampFromLocalSecs(nowSec());

    const event = new Event()
      .setType(options.event_type)
      .setDescription('Triggering a recipe data log')
      .setSource('LogStatus CLI')
      .setId(randomUUID().replaceAll('-', ''))
      .setStartTime(robotNow.clone())
      .setEndTime(robotNow.clone());

    const response = await client.startConcurrentLog(options.seconds, event);
    console.log(_str(response.getLogStatus()));
    return true;
  }
}

/**
 * Terminate log gathering process.
 */
class TerminateLogCommand extends Command {
  static NAME = 'terminate';
  static HELP = 'Terminate log gathering process.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('id', { help: 'id of log to terminate' });
  }

  async _run(robot, options) {
    /** @type {LogStatusClient} */
    const client = await robot.ensureClient(LogStatusClient.defaultServiceName);
    const response = await client.terminateLog(options.id);
    console.log(_str(response.getLogStatus()));
    return true;
  }
}

/**
 * Start, update and terminate experiment logs, start and terminate retro logs and check status of active logs for
 * robot.
 */
class LogStatusCommands extends Subcommands {
  static NAME = 'log-status';
  static HELP =
    'Start, update and terminate experiment logs, start and terminate retro logs and check status of active logs ' +
    'for robot.';

  static NEED_AUTHENTICATION = true;

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [
      GetLogCommand,
      GetActiveLogStatusesCommand,
      ExperimentLogCommand,
      StartRetroLogCommand,
      StartConcurrentLogCommand,
      TerminateLogCommand,
    ]);
  }
}

/**
 * Show robot-id.
 */
// --- Robot id. -------------------------------------------------------------------------------------------------

class RobotIdCommand extends Command {
  static NAME = 'id';
  static HELP = 'Show robot-id.';
  static NEED_AUTHENTICATION = false;

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    /** @type {RobotIdClient} */
    const client = await robot.ensureClient(RobotIdClient.defaultServiceName);
    const proto = await client.getId();
    if (options.proto) {
      console.log(_str(proto));
      return true;
    }
    let nickname = '';
    if (proto.getNickname() && proto.getNickname() !== proto.getSerialNumber()) {
      nickname = proto.getNickname();
    }
    const release = proto.getSoftwareRelease() ?? new robotIdPb.RobotSoftwareRelease();
    const version = release.getVersion() ?? new robotIdPb.SoftwareVersion();
    console.log(
      `${proto.getSerialNumber().padEnd(20)} ${proto.getComputerSerialNumber().padEnd(15)} ${nickname.padEnd(10)} ` +
        `${proto.getSpecies()} (${proto.getVersion()})`,
    );
    console.log(
      ` Software: ${version.getMajorVersion()}.${version.getMinorVersion()}.${version.getPatchLevel()} ` +
        `(${release.getChangeset()} ${_datetimeStr(release.getChangesetDate())})`,
    );
    console.log(`  Installed: ${_datetimeStr(release.getInstallDate())}`);
    return true;
  }
}

/**
 * Send a text-message to the data buffer to be logged.
 */
// --- Data buffer. ----------------------------------------------------------------------------------------------

class TextMsgCommand extends Command {
  static NAME = 'textmsg';
  static HELP = 'Send a text-message to the data buffer to be logged.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--timestamp', { action: 'store_true', help: 'achieve time-sync and send timestamp' });
    this._parser.add_argument('--tag', { help: 'Tag for message' });
    const parserLogLevel = this._parser.add_mutually_exclusive_group();
    parserLogLevel.add_argument('--debug', '-D', { action: 'store_true', help: 'Log at debug-level' });
    parserLogLevel.add_argument('--info', '-I', { action: 'store_true', help: 'Log at info-level' });
    parserLogLevel.add_argument('--warn', '-W', { action: 'store_true', help: 'Log at warn-level' });
    parserLogLevel.add_argument('--error', '-E', { action: 'store_true', help: 'Log at error-level' });
    this._parser.add_argument('message', { help: 'Message to log' });
  }

  async _run(robot, options) {
    let robotTimestamp = null;
    if (options.timestamp) {
      try {
        robotTimestamp = await (await robot.timeSync).robotTimestampFromLocalSecs(nowSec(), 1.0);
      } catch (err) {
        if (!(err instanceof TimeSyncError)) throw err;
        console.log(`Failed to send message with timestamp: ${_errorStr(err)}.`);
        return false;
      }
    }
    const msgProto = new TextMessage().setMessage(options.message);
    if (robotTimestamp) msgProto.setTimestamp(robotTimestamp);
    if (options.debug) {
      msgProto.setLevel(TextMessage.Level.LEVEL_DEBUG);
    } else if (options.warn) {
      msgProto.setLevel(TextMessage.Level.LEVEL_WARN);
    } else if (options.error) {
      msgProto.setLevel(TextMessage.Level.LEVEL_ERROR);
    } else {
      msgProto.setLevel(TextMessage.Level.LEVEL_INFO);
    }

    if (options.tag) msgProto.setTag(options.tag);

    /** @type {DataBufferClient} */
    const dataBufferClient = await robot.ensureClient(DataBufferClient.defaultServiceName);
    await dataBufferClient.addTextMessages([msgProto]);
    return true;
  }
}

/**
 * Send an operator comment to the robot to be logged.
 */
class OperatorCommentCommand extends Command {
  static NAME = 'comment';
  static HELP = 'Send an operator comment to the robot to be logged.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--timestamp', { action: 'store_true', help: 'achieve time-sync and send timestamp' });
    this._parser.add_argument('message', { help: 'operator comment text' });
  }

  async _run(robot, options) {
    let clientTimestamp = null;
    if (options.timestamp) {
      clientTimestamp = nowSec();
      try {
        await (await robot.timeSync).waitForSync(1.0);
      } catch (err) {
        if (!(err instanceof TimeSyncError)) throw err;
        console.log(`Failed to get timesync for setting comment timestamp: ${_errorStr(err)}.`);
        return false;
      }
    }
    await robot.operatorComment(options.message, clientTimestamp);
    return true;
  }
}

/**
 * Commands related to the data-buffer service.
 */
class DataBufferCommands extends Subcommands {
  static NAME = 'log';
  static HELP = 'Commands related to the data-buffer service.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [TextMsgCommand, OperatorCommentCommand]);
  }
}

// --- Data service. ---------------------------------------------------------------------------------------------

/** Parent class for commands grabbing operator comment and events. */
class GetDataBufferEventsCommentsCommand extends Command {
  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print in proto format' });
    this._parser.add_argument('-T', '--timespan', {
      help: 'Time span (default all).  "1h" (last hour), "10m-5m" (from 10 to 5 minutes ago).',
    });
    this._parser.add_argument('-R', '--robot-time', {
      action: 'store_true',
      help: 'Specified timespan is in robot time',
    });
  }

  /**
   * Print output of request in a human-friendly way.
   * @abstract
   * @param {Array} values
   */
  // eslint-disable-next-line no-unused-vars
  prettyPrint(values) {
    throw new Error(`${this.constructor.name} does not implement prettyPrint()`);
  }

  async _getResult(requestSpec, robot, options, getValuesFn) {
    /** @type {DataServiceClient} */
    const client = await robot.ensureClient(DataServiceClient.defaultServiceName);
    if (options.timespan) {
      let timeSyncEndpoint = null;
      if (!options.robot_time) {
        const timeSyncClient = await robot.ensureClient(TimeSyncClient.defaultServiceName);
        timeSyncEndpoint = new TimeSyncEndpoint(timeSyncClient);
        if (!(await timeSyncEndpoint.establishTimesync())) {
          console.log('Failed to get timesync for requesting comments.');
          return false;
        }
      }
      const timeRange = timespecToRobotTimespan(options.timespan, timeSyncEndpoint);
      requestSpec.setTimeRange(timeRange);
    }
    const values = getValuesFn(await client.getEventsComments(requestSpec));
    if (options.proto) {
      console.log(_reprList(values));
    } else {
      this.prettyPrint(values);
    }
    return true;
  }
}

/**
 * Get operator comments from the robot.
 */
class GetDataBufferCommentsCommand extends GetDataBufferEventsCommentsCommand {
  static NAME = 'comments';
  static HELP = 'Get operator comments from the robot.';

  _run(robot, options) {
    const requestSpec = new EventsCommentsSpec().setComments(true);
    const getComments = response => response.getEventsComments()?.getOperatorCommentsList() ?? [];
    return this._getResult(requestSpec, robot, options, getComments);
  }

  prettyPrint(values) {
    let lastDateShown = null;
    for (const comment of values) {
      // The nanoseconds: Python added the seconds * 1e-9 (1.7 s too late).
      const dtm = _fromTimestamp(_timestampSecs(comment.getTimestamp()));
      if (dtm.date !== lastDateShown) {
        console.log(`\n[${dtm.date}]`);
        lastDateShown = dtm.date;
      }
      console.log(` ${dtm.time}  ${comment.getMessage().trim()}`);
    }
  }
}

/**
 * Get events from the robot.
 */
class GetDataBufferEventsCommand extends GetDataBufferEventsCommentsCommand {
  static NAME = 'events';
  static HELP = 'Get events from the robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--type', { help: 'query for only the given event-type' });
    this._parser.add_argument('--level', {
      // The slice skips UNSET.
      choices: Object.keys(Event.Level).slice(1),
      help: 'limit level to this and above',
    });
  }

  _run(robot, options) {
    const requestSpec = new EventsCommentsSpec();
    const eventSpec = requestSpec.addEvents();
    if (options.type) eventSpec.setType(options.type);
    if (options.level) eventSpec.setLevel(new Int32Value().setValue(Event.Level[options.level]));
    const getEvents = response => response.getEventsComments()?.getEventsList() ?? [];
    return this._getResult(requestSpec, robot, options, getEvents);
  }

  static _levelName(event) {
    const prefix = 'LEVEL_';
    const name = _enumName(Event.Level, event.getLevel());
    return name.startsWith(prefix) ? name.slice(prefix.length) : name;
  }

  prettyPrint(values) {
    let lastDateShown = null;
    for (const event of values) {
      // The nanoseconds: Python added the seconds * 1e-9 (1.7 s too late).
      const startSecs = _timestampSecs(event.getStartTime());
      const startDt = _fromTimestamp(startSecs);
      if (startDt.date !== lastDateShown) {
        console.log(`\n[${startDt.date}]`);
        lastDateShown = startDt.date;
      }
      const level = GetDataBufferEventsCommand._levelName(event);
      // Without end time, the event is shown as started, as intended in Python (a message is always true there: the
      // end was shown in 1970).
      if (event.hasEndTime() && !jspb.Message.equals(event.getEndTime(), event.getStartTime() ?? new Timestamp())) {
        const endSecs = _timestampSecs(event.getEndTime());
        const endDt = _fromTimestamp(endSecs);
        console.log(
          ` ${startDt.time}-${endDt.time} (END) (${pythonFloatRepr(endSecs - startSecs).padStart(16)}) ` +
            `${event.getType().padEnd(16)}  ${level.padEnd(16)} <${event.getSource()}> `,
        );
      } else {
        const timing = event.hasEndTime() ? '' : '(START)';
        console.log(
          ` ${startDt.time} ${timing} ${event.getType().padEnd(16)}  ${level.padEnd(16)}  <${event.getSource()}> `,
        );
      }
      if (event.getDescription()) console.log(`\t${event.getDescription()}`);
    }
  }
}

/**
 * Get status of data-buffer on robot.
 */
class GetDataBufferStatusCommand extends Command {
  static NAME = 'status';
  static HELP = 'Get status of data-buffer on robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--get-blob-specs', '-B', {
      action: 'store_true',
      help: 'get list of channel/msgtype/source combinations',
    });
  }

  async _run(robot, options) {
    /** @type {DataServiceClient} */
    const client = await robot.ensureClient(DataServiceClient.defaultServiceName);
    console.log(_str(await client.getDataBufferStatus(options.get_blob_specs)));
    return true;
  }
}

/**
 * Commands for querying the data-service.
 */
class DataServiceCommands extends Subcommands {
  static NAME = 'data';
  static HELP = 'Commands for querying the data-service.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [
      GetDataBufferCommentsCommand,
      GetDataBufferEventsCommand,
      GetDataBufferStatusCommand,
    ]);
  }
}

/**
 * Show robot state.
 */
// --- Robot state. ----------------------------------------------------------------------------------------------

class FullStateCommand extends Command {
  static NAME = 'full';
  static HELP = 'Show robot state.';

  async _run(robot) {
    /** @type {RobotStateClient} */
    const client = await robot.ensureClient(RobotStateClient.defaultServiceName);
    console.log(_str(await client.getRobotState()));
    return true;
  }
}

/**
 * Show robot hardware configuration.
 */
class HardwareConfigurationCommand extends Command {
  static NAME = 'hardware';
  static HELP = 'Show robot hardware configuration.';

  async _run(robot) {
    /** @type {RobotStateClient} */
    const client = await robot.ensureClient(RobotStateClient.defaultServiceName);
    console.log(_str(await client.getRobotHardwareConfiguration()));
    return true;
  }
}

/**
 * Write robot URDF and mesh to local files.
 */
class RobotModel extends Command {
  static NAME = 'model';
  static HELP = 'Write robot URDF and mesh to local files.';
  static NEED_AUTHENTICATION = false;

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--outdir', { default: 'Model_Files', help: 'directory into which to save the files' });
  }

  async _run(robot, options) {
    /** @type {RobotStateClient} */
    const robotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
    const hardware = await robotStateClient.getRobotHardwareConfiguration();

    // Write files in user-specified directory, or use default name.
    const modelDirectory = options.outdir;

    // Make the directory, if it does not already exist.
    try {
      mkdirSync(modelDirectory, { recursive: true });
    } catch {
      // Like Python, writing the files reports the problem.
    }

    // Write each link model to its own file.

    for (const link of hardware.getSkeleton()?.getLinksList() ?? []) {
      // Request a Skeleton.Link.ObjModel from the robot for link.name and write it to a file.
      let objModelProto;
      try {
        objModelProto = await robotStateClient.getRobotLinkModel(link.getName());
      } catch (err) {
        if (!(err instanceof InvalidRequestError)) throw err;
        process.stdout.write(String(err));
        console.log(` Name of link: ${link.getName()}`);
        continue;
      }

      // If file_name is empty, ignore.
      if (!objModelProto.getFileName()) continue;

      // Write to a file, ignoring the robot path.
      const parts = objModelProto.getFileName().split('/');
      // Robot defined path, in the local path.
      const directory = path.join(modelDirectory, parts.slice(0, -1).join('/'));
      try {
        mkdirSync(directory, { recursive: true });
      } catch {
        // Like Python, writing the file reports the problem.
      }

      const pathAndName = path.join(directory, parts.at(-1));
      writeFileSync(pathAndName, objModelProto.getFileContents());
      console.log(`Link file written to ${pathAndName}`);
    }

    // Write the corresponding urdf file inside the link directory.
    const urdfPath = path.join(modelDirectory, 'model.urdf');
    writeFileSync(urdfPath, hardware.getSkeleton()?.getUrdf() ?? '');
    console.log(`URDF file written to ${urdfPath}`);
    return true;
  }
}

/**
 * Show metrics (runtime, etc...).
 */
class MetricsCommand extends Command {
  static NAME = 'metrics';
  static HELP = 'Show metrics (runtime, etc...).';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print metrics in proto format' });
  }

  async _run(robot, options) {
    /** @type {RobotStateClient} */
    const client = await robot.ensureClient(RobotStateClient.defaultServiceName);
    const proto = await client.getRobotMetrics();
    if (options.proto) {
      console.log(_str(proto));
      return true;
    }
    for (const metric of proto.getMetricsList()) console.log(MetricsCommand._formatMetric(metric));
    return true;
  }

  /**
   * Converts a timestamp to a human-readable string.
   * @param {Timestamp} timestamp
   * @returns {string} Timestamp string in ISO 8601 format.
   */
  static _timestampStr(timestamp) {
    // The json format of a timestamp is a string that looks like '"2022-01-12T21:56:05Z"', so we strip off the
    // outer quotes and return that.
    return messageToJson(timestamp).replace(/^"+|"+$/g, '');
  }

  /**
   * Convert metric input to human-readable string.
   * @param {import('../bosdyn/api/parameter_pb').Parameter} metric Input metric object to convert.
   * @returns {string} String in the format: Label float_value units.
   */
  static _formatMetric(metric) {
    const label = metric.getLabel().padEnd(20);
    // Special case formatting.
    if (metric.hasDuration()) return `${label} ${secsToHms(Number(metric.getDuration().getSeconds()))}`;
    if (metric.hasTimestamp()) return `${label} ${MetricsCommand._timestampStr(metric.getTimestamp())}`;
    if (metric.hasFloatValue()) {
      if (metric.getUnits() === 'm') return `${label} ${distanceStr(metric.getFloatValue())}`;
      return `${label} ${formatFixed(metric.getFloatValue(), 2)} ${metric.getUnits()}`;
    }
    // Default formatting.
    if (metric.hasIntValue()) return `${label} ${metric.getIntValue()} ${metric.getUnits()}`;
    if (metric.hasUintValue()) return `${label} ${metric.getUintValue()} ${metric.getUnits()}`;
    if (metric.hasBoolValue()) return `${label} ${metric.getBoolValue() ? 'True' : 'False'} ${metric.getUnits()}`;
    if (metric.hasStringValue()) return `${label} ${metric.getStringValue()} ${metric.getUnits()}`;
    return `${label} missing value`;
  }
}

/**
 * Commands for querying robot state.
 */
class RobotStateCommands extends Subcommands {
  static NAME = 'state';
  static HELP = 'Commands for querying robot state.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [FullStateCommand, HardwareConfigurationCommand, MetricsCommand, RobotModel]);
  }
}

/**
 * Find clock difference between this and the robot clock.
 */
// --- Time sync, license, leases. -------------------------------------------------------------------------------

class TimeSyncCommand extends Command {
  static NAME = 'time-sync';
  static HELP = 'Find clock difference between this and the robot clock.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    const endpoint = new TimeSyncEndpoint(await robot.ensureClient(TimeSyncClient.defaultServiceName));
    if (!(await endpoint.establishTimesync(25, true))) {
      console.log('Failed to achieve time sync');
      return false;
    }

    if (options.proto) {
      console.log(_str(endpoint.response));
      return true;
    }

    console.log(`GRPC round-trip time: ${durationStr(endpoint.roundTripTime)}`);
    console.log(`Local time to robot time: ${durationStr(endpoint.clockSkew)}`);
    return true;
  }
}

/**
 * Show installed license.
 */
class LicenseCommand extends Command {
  static NAME = 'license';
  static HELP = 'Show installed license.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
    this._parser.add_argument('-f', '--feature-codes', {
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

  // eslint-disable-next-line no-unused-vars
  async _getLicenseInfo(licenseClient, options) {
    // The same text with --proto, like Python.
    console.log(_str(await licenseClient.getLicenseInfo()));
  }

  async _getFeatureEnabled(licenseClient, options) {
    if (!options.feature_codes || options.feature_codes.length === 0) return;

    const featureEnabled = await licenseClient.getFeatureEnabled(options.feature_codes);
    featureEnabled.forEach((enabled, feature) => {
      console.log(enabled ? `Feature ${feature} is enabled.` : `Feature ${feature} is not enabled.`);
    });
  }
}

/**
 * List all leases.
 */
class LeaseListCommand extends Command {
  static NAME = 'list';
  static HELP = 'List all leases.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    /** @type {LeaseClient} */
    const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
    const resources = await leaseClient.listLeases();
    if (options.proto) {
      console.log(_reprList(resources));
      return true;
    }
    for (const resource of resources) console.log(LeaseListCommand._formatLeaseResource(resource));
    return true;
  }

  static _formatLeaseResource(resource) {
    return _str(resource);
  }
}

/**
 * Commands related to the lease service.
 */
class LeaseCommands extends Subcommands {
  static NAME = 'lease';
  static HELP = 'Commands related to the lease service.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [LeaseListCommand]);
  }
}

/**
 * Get estop config of estop service.
 */
// --- Estop. ----------------------------------------------------------------------------------------------------

class GetEstopConfigCommand extends Command {
  static NAME = 'config';
  static HELP = 'Get estop config of estop service.';

  async _run(robot) {
    /** @type {EstopClient} */
    const client = await robot.ensureClient(EstopClient.defaultServiceName);
    console.log(_str(await client.getConfig()));
    // Python returned None: the exit status was 1 on success.
    return true;
  }
}

/**
 * Get estop status of estop service.
 */
class GetEstopStatusCommand extends Command {
  static NAME = 'status';
  static HELP = 'Get estop status of estop service.';

  async _run(robot) {
    /** @type {EstopClient} */
    const client = await robot.ensureClient(EstopClient.defaultServiceName);
    console.log(_str(await client.getStatus()));
    // Python returned None: the exit status was 1 on success.
    return true;
  }
}

/**
 * Grab and hold estop until Ctl-C.
 */
class BecomeEstopCommand extends Command {
  static NAME = 'become-estop';
  static HELP = 'Grab and hold estop until Ctl-C.';

  static _RPC_PRINT_CHOICES = ['timestamp', 'full'];

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--timeout', { type: 'float', help: 'EStop timeout (seconds)', default: 10 });
    // Without effect, like Python 5.1.4: the request_trim_for_log() it set are no longer used for the logs.
    this._parser.add_argument('--rpc-print', {
      choices: BecomeEstopCommand._RPC_PRINT_CHOICES,
      default: 'timestamp',
      help: 'How much of the request/response messages to print',
    });
  }

  async _run(robot, options) {
    // Get a client to the estop service.
    /** @type {EstopClient} */
    const client = await robot.ensureClient(EstopClient.defaultServiceName);

    // Create the endpoint to the robot estop system. Timeout should be chosen to balance safety considerations with
    // expected service latency. See the estop documentation for details.
    const endpoint = new EstopEndpoint(client, `command-line-${os.hostname()}`, options.timeout);
    // Have this endpoint to set up the robot's estop system such that it is the sole estop. See the function's
    // docstring and the estop documentation for details.
    await endpoint.forceSimpleSetup();

    // Ctrl-C asserts an estop and cleanly shuts down (the handler stays until the end, like the one of Python).
    console.log('Press Ctrl-C or send SIGINT to exit');
    const interrupt = new _Interrupt();
    try {
      // Create the helper class that does periodic check-ins. This also starts the checking-in.
      const keepAlive = new EstopKeepAlive(endpoint);
      try {
        // Now we wait. EstopKeepAlive will continue sending messages to the estop service on its own.

        while (!(await interrupt.sleep(10_000))) {
          // Until Ctrl-C.
        }
        // EStop the robot.
        await keepAlive.stop();
      } finally {
        // Shut down the check-ins, like the exit() of the keep_alive object in Python.
        await keepAlive.shutdown();
      }

      // This will let another endpoint fill our role, if they want to use the current configuration. For details,
      // see the estop documentation.
      await endpoint.deregister();
    } finally {
      interrupt.dispose();
    }
    return true;
  }
}

/**
 * Old version of BecomeEstopCommand.
 */
class OldBecomeEstopCommand extends BecomeEstopCommand {
  static HELP = 'Old version of BecomeEstopCommand.';

  run(robot, options) {
    console.log('DEPRECATION WARNING: This command is now "bosdyn.client estop become-estop"');
    return super.run(robot, options);
  }
}

/**
 * Commands for interacting with robot estop service.
 */
class EstopCommands extends Subcommands {
  static NAME = 'estop';
  static HELP = 'Commands for interacting with robot estop service.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [BecomeEstopCommand, GetEstopConfigCommand, GetEstopStatusCommand]);
  }
}

// --- Images and local grids. -----------------------------------------------------------------------------------

/**
 * Print available image sources.
 * @param {Robot} robot Robot object on which to run the command.
 * @param {boolean} [asProto=false] Print the full proto message instead of a human-readable string in the format:
 * source_name (rows x cols)
 * @param {?string} [serviceName=null] The image service to query.
 * @returns {Promise<boolean>}
 */
async function _showImageSourcesList(robot, asProto = false, serviceName = null) {
  /** @type {ImageClient} */
  const client = await robot.ensureClient(serviceName || ImageClient.defaultServiceName);
  const proto = await client.listImageSources();
  if (asProto) {
    console.log(_reprList(proto));
  } else {
    const { Format, PixelFormat } = imagePb.Image;
    for (const imageSource of proto) {
      const imageFormats = imageSource.getImageFormatsList().map(value => _enumName(Format, value).slice(7));
      const pixelFormats = imageSource.getPixelFormatsList().map(value => _enumName(PixelFormat, value).slice(13));
      console.log(
        `${imageSource.getName().padEnd(30)} (${imageSource.getRows()}x${imageSource.getCols()}) ` +
          `${imageFormats.join(',').padEnd(15)} ${pixelFormats.join(',').padEnd(15)}`,
      );
    }
  }
  return true;
}

/**
 * List image sources.
 */
class ListImageSourcesCommand extends Command {
  static NAME = 'list-sources';
  static HELP = 'List image sources.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
    this._parser.add_argument('--service-name', {
      default: ImageClient.defaultServiceName,
      help: 'Image service to query',
    });
  }

  async _run(robot, options) {
    await _showImageSourcesList(robot, options.proto, options.service_name);
    return true;
  }
}

/**
 * Get an image from the robot and write it to an image file.
 */
class GetImageCommand extends Command {
  static NAME = 'get-image';
  static HELP = 'Get an image from the robot and write it to an image file.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    // Not used, like Python.
    this._parser.add_argument('--outfile', { default: null, help: 'Filename into which to save the image' });
    this._parser.add_argument('--quality-percent', { type: 'int', default: 75, help: 'Percent image quality (0-100)' });
    this._parser.add_argument('source_name', { metavar: 'SRC', nargs: '+', help: 'Image source name' });
    this._parser.add_argument('--service-name', {
      help: 'Image service to query',
      default: ImageClient.defaultServiceName,
    });
  }

  async _run(robot, options) {
    const imageRequests = options.source_name.map(sourceName => buildImageRequest(sourceName, options.quality_percent));
    let response;
    try {
      /** @type {ImageClient} */
      const client = await robot.ensureClient(options.service_name);
      response = await client.getImage(imageRequests);
    } catch (e) {
      if (e instanceof UnknownImageSourceError) {
        console.log(
          `Requested image source "${_reprStrings(options.source_name)}" does not exist.  Available image sources:`,
        );
        await _showImageSourcesList(robot, false, options.service_name);
        return false;
      }
      if (e instanceof ImageResponseError) {
        console.log(
          `Robot cannot generate the "${_reprStrings(options.source_name)}" at this time.  Retry the command.`,
        );
        return false;
      }
      throw e;
    }
    // Save the image files in the correct format (jpeg, pgm for raw/rle).
    saveImagesAsFiles(response);
    return true;
  }
}

/**
 * Commands for querying images.
 */
class ImageCommands extends Subcommands {
  static NAME = 'image';
  static HELP = 'Commands for querying images.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [ListImageSourcesCommand, GetImageCommand]);
  }
}

/**
 * Print available local grid sources.
 * @param {Robot} robot Robot object on which to run the command.
 * @param {boolean} [asProto=false] Print the full proto message instead of just the list of names.
 * @returns {Promise<boolean>}
 */
async function _showLocalGridSourcesList(robot, asProto = false) {
  /** @type {LocalGridClient} */
  const client = await robot.ensureClient(LocalGridClient.defaultServiceName);
  const proto = await client.getLocalGridTypes();
  if (asProto) {
    console.log(_reprList(proto));
  } else {
    for (const localGridType of proto) console.log(localGridType.getName());
  }
  return true;
}

/**
 * List local grid sources.
 */
class ListLocalGridTypesCommand extends Command {
  static NAME = 'types';
  static HELP = 'List local grid sources.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--proto', { action: 'store_true', help: 'print listing in proto format' });
  }

  async _run(robot, options) {
    await _showLocalGridSourcesList(robot, options.proto);
    return true;
  }
}

/**
 * Get local grids from the robot.
 */
class GetLocalGridsCommand extends Command {
  static NAME = 'get';
  static HELP = 'Get local grids from the robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    // Not used, like Python.
    this._parser.add_argument('--outfile', { default: null, help: 'filename into which to save the image' });
    this._parser.add_argument('types', { metavar: 'SRC', nargs: '+', help: 'image types' });
  }

  async _run(robot, options) {
    /** @type {LocalGridClient} */
    const client = await robot.ensureClient(LocalGridClient.defaultServiceName);
    const response = await client.getLocalGrids(options.types);
    for (const localGridResponse of response) console.log(_str(localGridResponse));
    return true;
  }
}

/**
 * Commands for querying local grid maps.
 */
class LocalGridCommands extends Subcommands {
  static NAME = 'local_grid';
  static HELP = 'Commands for querying local grid maps.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [ListLocalGridTypesCommand, GetLocalGridsCommand]);
  }
}

/**
 * Capture and save images or metadata specified in the command line arguments.
 */
// --- Data acquisition. -----------------------------------------------------------------------------------------

class DataAcquisitionRequestCommand extends Command {
  static NAME = 'request';
  static HELP = 'Capture and save images or metadata specified in the command line arguments.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
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
    // The empty lists are false in Python (an array is always true: the checks never failed).
    if (options.data_source.length === 0 && !(options.image_source.length > 0 && options.image_service.length > 0)) {
      this._parser.error('A request requires either a data source name or an image source+service name.');
    }
    if (options.image_source.length !== options.image_service.length) {
      this._parser.error('A request must have a 1:1 correspondence between image source and image service arguments.');
    }

    const captures = new dataAcquisitionPb.AcquisitionRequestList();
    captures.setDataCapturesList(
      options.data_source.map(dataName => new dataAcquisitionPb.DataCapture().setName(dataName)),
    );
    captures.setImageCapturesList(
      options.image_source.map((srcName, i) =>
        new dataAcquisitionPb.ImageSourceCapture().setImageService(options.image_service[i]).setImageSource(srcName),
      ),
    );

    await (await robot.timeSync).waitForSync(1.0);
    /** @type {DataAcquisitionClient} */
    const dataAcquisitionClient = await robot.ensureClient(DataAcquisitionClient.defaultServiceName);
    return acquireAndProcessRequest(
      dataAcquisitionClient,
      captures,
      options.group_name,
      options.action_name,
      null,
      !options.non_blocking_request,
    );
  }
}

/**
 * Get list of different data acquisition capabilities.
 */
class DataAcquisitionServiceCommand extends Command {
  static NAME = 'info';
  static HELP = 'Get list of different data acquisition capabilities.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    // Constants to describe width of columns for printing the data names and types.
    this._dataTypeWidth = 15;
    this._dataNameWidth = 35;
    this._serviceNameWidth = 35;
    this._hasLiveDataWidth = 30;
  }

  /**
   * Print the data acquisition capability.
   * @param {string} dataType Either image or data capabilities.
   * @param {string} dataName The name of the data acquisition capability.
   * @param {string} [serviceName=''] For image capabilities, a service name is required.
   * @param {string} [hasLiveData='']
   */
  _formatAndPrintCapability(dataType, dataName, serviceName = '', hasLiveData = '') {
    console.log(
      `${dataType.padEnd(this._dataTypeWidth)} ${dataName.padEnd(this._dataNameWidth)} ` +
        `${serviceName.padEnd(this._serviceNameWidth)} ${hasLiveData.padEnd(this._hasLiveDataWidth)}`,
    );
  }

  async _run(robot) {
    /** @type {DataAcquisitionClient} */
    const client = await robot.ensureClient(DataAcquisitionClient.defaultServiceName);
    const capabilities = await client.getServiceInfo();
    console.log("Data Acquisition Service's Available Capabilities\n");
    this._formatAndPrintCapability('Data Type', 'Data Name', '(optional) Service Name', '(optional) has_live_data');
    console.log(
      '-'.repeat(this._dataTypeWidth + this._dataNameWidth + this._serviceNameWidth + this._hasLiveDataWidth),
    );
    for (const dataName of capabilities.getDataSourcesList()) {
      this._formatAndPrintCapability(
        'data',
        dataName.getName(),
        dataName.getServiceName(),
        dataName.getHasLiveData() ? 'True' : 'False',
      );
    }
    for (const imgService of capabilities.getImageSourcesList()) {
      for (const img of imgService.getImageSourceNamesList()) {
        this._formatAndPrintCapability('image', img, imgService.getServiceName());
      }
    }
    for (const ncbWorker of capabilities.getNetworkComputeSourcesList()) {
      for (const model of ncbWorker.getModels()?.getDataList() ?? []) {
        this._formatAndPrintCapability(
          'models',
          model.getModelName(),
          ncbWorker.getServerConfig()?.getServiceName() ?? '',
        );
      }
    }
    return true;
  }
}

/**
 * Get status of an acquisition request based on the request id.
 */
class DataAcquisitionStatusCommand extends Command {
  static NAME = 'status';
  static HELP = 'Get status of an acquisition request based on the request id.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('id', { type: 'int', help: 'Response id to get the status for' });
  }

  async _run(robot, options) {
    /** @type {DataAcquisitionClient} */
    const client = await robot.ensureClient(DataAcquisitionClient.defaultServiceName);
    console.log(_str(await client.getStatus(options.id)));
    return true;
  }
}

/**
 * Call GetLiveData based on service name.
 */
class DataAcquisitionGetLiveDataCommand extends Command {
  static NAME = 'live';
  static HELP = 'Call GetLiveData based on service name.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--data-source', {
      metavar: 'DATA_SRC',
      default: [],
      help: 'Data source name',
      action: 'append',
      required: true,
    });
  }

  async _run(robot, options) {
    /** @type {DataAcquisitionClient} */
    const daqClient = await robot.ensureClient(DataAcquisitionClient.defaultServiceName);
    const request = new dataAcquisitionPb.LiveDataRequest().setDataCapturesList(
      options.data_source.map(dataName => new dataAcquisitionPb.DataCapture().setName(dataName)),
    );
    console.log(_str(await daqClient.getLiveData(request)));
    return true;
  }
}

/**
 * Acquire data from the robot and add it in the data buffer with the metadata, or request status.
 */
class DataAcquisitionCommand extends Subcommands {
  static NAME = 'acquire';
  static HELP = 'Acquire data from the robot and add it in the data buffer with the metadata, or request status.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [
      DataAcquisitionServiceCommand,
      DataAcquisitionRequestCommand,
      DataAcquisitionStatusCommand,
      DataAcquisitionGetLiveDataCommand,
    ]);
  }
}

/**
 * Determine a computer's IP address.
 */
// --- Self IP. --------------------------------------------------------------------------------------------------

class HostComputerIPCommand extends Command {
  static NAME = 'self-ip';
  static HELP = "Determine a computer's IP address.";
  static NEED_AUTHENTICATION = false;

  async _run(robot) {
    console.log(`The IP address of the computer used to talk to the robot is: ${await getSelfIp(robot._name)}`);
    // Python returned None: the exit status was 1 on success.
    return true;
  }
}

// --- Keepalive. ------------------------------------------------------------------------------------------------

/**
 * Returns list of <resource_name>:<sequence>, ...N.
 * @param {import('../bosdyn/api/lease_pb').Lease[]} leases
 * @returns {string} List of <resource_name>:[<sequence>], ...N.
 */
function leaseDetails(leases) {
  return leases.map(lease => `${lease.getResource()}:[${lease.getSequenceList().join(', ')}]`).join(', ');
}

/**
 * The name of the action of a keepalive policy action, like WhichOneof('action') in Python.
 * @param {keepalivePb.ActionAfter} action
 * @returns {string} 'None' if no action is set.
 */
function _actionName(action) {
  const { ActionCase } = keepalivePb.ActionAfter;
  const actionCase = action.getActionCase();
  if (actionCase === ActionCase.ACTION_NOT_SET) return 'None';
  return _enumName(ActionCase, actionCase).toLowerCase();
}

/**
 * Get status of keepalive service.
 */
class KeepaliveGetStatusCommand extends Command {
  static NAME = 'status';
  static HELP = 'Get status of keepalive service.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('-f', '--full', {
      action: 'store_true',
      default: false,
      help: 'Show full GetStatus proto as json.',
    });
  }

  async _run(robot, options) {
    /** @type {KeepaliveClient} */
    const client = await robot.ensureClient(KeepaliveClient.defaultServiceName);
    const status = await client.getStatus();

    // Give the option to print out the full message.
    if (options.full) {
      console.log(messageToJson(status));
      return true;
    }

    // If there are no policies, there probably isn't anything interesting here.
    const livePolicies = status.getStatusList();
    if (livePolicies.length === 0) {
      console.log('No active policies');
      return true;
    }

    // List all live policies in a concise message.
    if (livePolicies.length === 1) {
      console.log('Robot returned 1 live policy:');
    } else {
      console.log(`Robot returned ${livePolicies.length} live policies:`);
    }
    // The whole seconds, like ToSeconds() in Python.
    const toSeconds = timeOrDuration => Number(timeOrDuration?.getSeconds() ?? 0);
    for (const livePolicy of livePolicies) {
      const roughRobotTimestamp = toSeconds(status.getHeader()?.getResponseTimestamp());
      const lastCheckin = toSeconds(livePolicy.getLastCheckin());
      const timeElapsed = roughRobotTimestamp - lastCheckin;
      const policy = livePolicy.getPolicy() ?? new keepalivePb.Policy();
      // Go through each action, and create a helpful message describing the status.
      const actionList = [];
      for (const action of policy.getActionsList()) {
        // If this is a lease_stale or auto_return action, include some lease info.
        let nameMaybeWithDetails = _actionName(action);
        if (action.hasLeaseStale()) {
          nameMaybeWithDetails = `${nameMaybeWithDetails} (${leaseDetails(action.getLeaseStale().getLeasesList())})`;
        }
        if (action.hasAutoReturn()) {
          nameMaybeWithDetails = `${nameMaybeWithDetails} (${leaseDetails(action.getAutoReturn().getLeasesList())})`;
        }
        // Add an indicator if the policy action is active or not.
        const actionAfterTime = toSeconds(action.getAfter());
        const activeMessage = timeElapsed > actionAfterTime ? 'ACTIVE' : 'NOT active';
        actionList.push(`${nameMaybeWithDetails} after ${actionAfterTime} seconds, ${activeMessage}`);
      }
      let formattedString =
        `id: ${livePolicy.getPolicyId()}\n client_name: ${livePolicy.getClientName()}\n` +
        ` last checkin ${timeElapsed}s ago`;
      // Only the supervisor policy seems to have a name.
      if (policy.getName()) formattedString += `\n policy name: '${policy.getName()}'`;
      if (policy.getUserId()) formattedString += `\n user_id: '${policy.getUserId()}'`;
      if (policy.getAssociatedLeasesList().length > 0) {
        formattedString += `\n associated_leases: ${leaseDetails(policy.getAssociatedLeasesList())}`;
      }
      console.log(formattedString);
      console.log(' actions:');
      for (const action of actionList) console.log(`   ${action}`);
      console.log('');
    }

    // If there is an action control action, we should indicate that.
    const { PolicyControlAction } = keepalivePb.GetStatusResponse;
    for (const action of status.getActiveControlActionsList()) {
      console.log(`Active control action: ${_enumName(PolicyControlAction, action)}`);
    }
    return true;
  }
}

/**
 * An integer argument, like type=int in Python, as the text of its value (a Number rounds the uint64 ids above 2^53).
 * @param {string} text
 * @returns {string}
 */
function int(text) {
  if (!/^\s*[+-]?\d+(?:_\d+)*\s*$/.test(text)) throw new TypeError(`invalid int value: '${text}'`);
  return BigInt(text.trim().replaceAll('_', '')).toString();
}

/**
 * Remove keepalive policies.
 */
class KeepaliveRemovePoliciesCommand extends Command {
  static NAME = 'remove';
  static HELP = 'Remove keepalive policies.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('--policy-id', {
      type: int,
      nargs: '+',
      help: 'Specify specific policy ids to remove.',
    });
  }

  async _run(robot, options) {
    /** @type {KeepaliveClient} */
    const client = await robot.ensureClient(KeepaliveClient.defaultServiceName);
    const currentPolicies = (await client.getStatus()).getStatusList();
    const currentPolicyIds = currentPolicies.map(status => BigInt(status.getPolicyId()).toString());

    // If there are no policies, there probably isn't anything interesting here.
    if (currentPolicies.length === 0) {
      console.log('No active policies');
      return true;
    }

    let toRm = [];
    if (options.policy_id) {
      // Remove specific policies.
      for (const policyId of options.policy_id) {
        if (currentPolicyIds.includes(policyId)) {
          toRm.push(policyId);
        } else {
          console.log(`Policy '${policyId}' not found.`);
        }
      }
    } else {
      // Remove all current policies.
      toRm = currentPolicyIds;
    }

    await client.modifyPolicy(null, toRm);
    console.log(`Removed ${toRm.length} policies`);
    return true;
  }
}

/**
 * Send keepalive commands to the robot.
 */
class KeepaliveCommand extends Subcommands {
  static NAME = 'keepalive';
  static HELP = 'Send keepalive commands to the robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [KeepaliveGetStatusCommand, KeepaliveRemovePoliciesCommand]);
  }
}

// --- Power. ----------------------------------------------------------------------------------------------------

/**
 * Run a power command while holding the body lease, like the `with LeaseKeepAlive(...)` of Python: the lease is
 * acquired first (the command fails if it cannot be), and returned at the end.
 * @param {Robot} robot
 * @param {function(PowerClient): Promise<*>} powerCommand
 */
async function _withBodyLease(robot, powerCommand) {
  await (await robot.timeSync).waitForSync(1.0);
  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  const keepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  try {
    await keepAlive.waitForInitialization();
    /** @type {PowerClient} */
    const powerClient = await robot.ensureClient(PowerClient.defaultServiceName);
    await powerCommand(powerClient);
  } finally {
    await keepAlive.shutdown();
  }
}

/**
 * Control the power of the entire robot.
 */
class PowerRobotCommand extends Command {
  static NAME = 'robot';
  static HELP = 'Control the power of the entire robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('cmd', { choices: ['cycle', 'off'] });
  }

  async _run(robot, options) {
    await _withBodyLease(robot, async powerClient => {
      if (options.cmd === 'cycle') {
        await powerCycleRobot(powerClient);
      } else if (options.cmd === 'off') {
        await powerOffRobot(powerClient);
      }
    });
    // Python returned None: the exit status was 1 on success.
    return true;
  }
}

/**
 * Control the power of robot payloads.
 */
class PowerPayloadsCommand extends Command {
  static NAME = 'payload';
  static HELP = 'Control the power of robot payloads.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('on_off', { choices: ['on', 'off'] });
  }

  async _run(robot, options) {
    await _withBodyLease(robot, async powerClient => {
      if (options.on_off === 'on') {
        await powerOnPayloadPorts(powerClient);
      } else if (options.on_off === 'off') {
        await powerOffPayloadPorts(powerClient);
      }
    });
    // Python returned None: the exit status was 1 on success.
    return true;
  }
}

/**
 * Control the power of robot wifi radio.
 */
class PowerWifiRadioCommand extends Command {
  static NAME = 'wifi';
  static HELP = 'Control the power of robot wifi radio.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict);
    this._parser.add_argument('on_off', { choices: ['on', 'off'] });
  }

  async _run(robot, options) {
    await _withBodyLease(robot, async powerClient => {
      if (options.on_off === 'on') {
        await powerOnWifiRadio(powerClient);
      } else if (options.on_off === 'off') {
        await powerOffWifiRadio(powerClient);
      }
    });
    // Python returned None: the exit status was 1 on success.
    return true;
  }
}

/**
 * Get power fan information.
 */
class PowerFanCommand extends Command {
  static NAME = 'fan';
  static HELP = 'Get power fan information.';

  async _run(robot) {
    /** @type {PowerClient} */
    const powerClient = await robot.ensureClient(PowerClient.defaultServiceName);
    const response = await powerClient.getFanInfo({ timeout: 10_000 });

    // Print fan information.
    console.log('Fan Information:');
    console.log('-'.repeat(70));
    response.getFanInformationMap().forEach((fanInfo, fanName) => {
      // A float field: the double of its 32 bits float in Python.
      console.log(`${fanName}: ${pythonFloatRepr(Math.fround(fanInfo.getFrequency()))}`);
    });
    return true;
  }
}

/**
 * Send power commands to the robot.
 */
class PowerCommand extends Subcommands {
  static NAME = 'power';
  static HELP = 'Send power commands to the robot.';

  constructor(subparsers, commandDict) {
    super(subparsers, commandDict, [PowerRobotCommand, PowerPayloadsCommand, PowerWifiRadioCommand, PowerFanCommand]);
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Main.
// ---------------------------------------------------------------------------------------------------------------

/** The commands of main(), in the order of their help. */
const COMMANDS = [
  DirectoryCommands,
  PayloadCommands,
  FaultCommands,
  RobotIdCommand,
  LicenseCommand,
  LogStatusCommands,
  RobotStateCommands,
  DataBufferCommands,
  DataServiceCommands,
  TimeSyncCommand,
  LeaseCommands,
  OldBecomeEstopCommand,
  EstopCommands,
  ImageCommands,
  LocalGridCommands,
  DataAcquisitionCommand,
  HostComputerIPCommand,
  PowerCommand,
  KeepaliveCommand,
];

/**
 * The parser of main(), with the commands.
 * @returns {{parser: ArgumentParser, commandDict: Object<string, Command>}}
 */
function _createParser() {
  const parser = new argparse.ArgumentParser({
    prog: 'bosdyn.client',
    description: 'Command-line interface for interacting with robot services.',
  });
  addCommonArguments(parser, true);

  // Command name to object which takes parsed options.
  const commandDict = {};
  const subparsers = parser.add_subparsers({ title: 'commands', dest: 'command' });

  // Register commands that can be run.
  for (const CommandClass of COMMANDS) {
    // eslint-disable-next-line no-new
    new CommandClass(subparsers, commandDict);
  }
  return { parser, commandDict };
}

/**
 * Command-line interface for interacting with robot services.
 * @param {?string[]} [args=null] The arguments, process.argv.slice(2) if null.
 * @returns {Promise<boolean>} Whether the command succeeded.
 */
async function main(args = null) {
  const { parser, commandDict } = _createParser();
  const options = parser.parse_args(args ?? undefined);

  setupLogging(options.verbose);

  // Create robot object and authenticate.
  const sdk = createStandardSdk('BosdynClient');
  sdk.registerServiceClient(DataAcquisitionPluginClient);

  const robot = sdk.createRobot(options.hostname);
  try {
    if (!options.command) {
      console.log('Need to specify a command');
      parser.print_help();
      return false;
    }
    return Boolean(await commandDict[options.command].run(robot, options));
  } finally {
    // The time-sync and token threads of Python are daemons: they are stopped for the process to end.
    robot[Symbol.dispose]();
  }
}

module.exports = {
  Command,
  Subcommands,
  COMMANDS,
  DirectoryCommands,
  DirectoryListCommand,
  DirectoryGetCommand,
  DirectoryRegisterCommand,
  DirectoryUnregisterCommand,
  PayloadCommands,
  PayloadListCommand,
  PayloadRegisterCommand,
  FaultCommands,
  FaultShowCommand,
  FaultWatchCommand,
  LogStatusCommands,
  GetLogCommand,
  GetActiveLogStatusesCommand,
  ExperimentLogCommand,
  StartTimedExperimentLogCommand,
  StartContinuousExperimentLogCommand,
  StartRetroLogCommand,
  StartConcurrentLogCommand,
  TerminateLogCommand,
  RobotIdCommand,
  DataBufferCommands,
  TextMsgCommand,
  OperatorCommentCommand,
  DataServiceCommands,
  GetDataBufferEventsCommentsCommand,
  GetDataBufferCommentsCommand,
  GetDataBufferEventsCommand,
  GetDataBufferStatusCommand,
  RobotStateCommands,
  FullStateCommand,
  HardwareConfigurationCommand,
  RobotModel,
  MetricsCommand,
  TimeSyncCommand,
  LicenseCommand,
  LeaseCommands,
  LeaseListCommand,
  EstopCommands,
  GetEstopConfigCommand,
  GetEstopStatusCommand,
  BecomeEstopCommand,
  OldBecomeEstopCommand,
  ImageCommands,
  ListImageSourcesCommand,
  GetImageCommand,
  LocalGridCommands,
  ListLocalGridTypesCommand,
  GetLocalGridsCommand,
  DataAcquisitionCommand,
  DataAcquisitionRequestCommand,
  DataAcquisitionServiceCommand,
  DataAcquisitionStatusCommand,
  DataAcquisitionGetLiveDataCommand,
  HostComputerIPCommand,
  PowerCommand,
  KeepaliveCommand,
  KeepaliveGetStatusCommand,
  KeepaliveRemovePoliciesCommand,
  PowerRobotCommand,
  PowerPayloadsCommand,
  PowerWifiRadioCommand,
  PowerFanCommand,
  leaseDetails,
  main,
  _createParser,
};

if (require.main === module) {
  // Like `if not main(): sys.exit(1)` in Python. An unexpected error is printed and ends with the status 1 too.
  main().then(ok => {
    if (!ok) process.exitCode = 1;
  });
}
