'use strict';

const { setTimeout: sleep } = require('node:timers/promises');
const { BaseClient, error_factory } = require('./common');
const { ResponseError, InternalServerError, LicenseError, TimedOutError } = require('./exceptions');
const { add_lease_wallet_processors } = require('./lease');

const basic_command_pb = require('../bosdyn/api/basic_command_pb');
const full_body_command_pb = require('../bosdyn/api/full_body_command_pb');
const license_pb = require('../bosdyn/api/license_pb');
const power_pb = require('../bosdyn/api/power_pb');
const power_service_grpc_pb = require('../bosdyn/api/power_service_grpc_pb');
const robot_command_pb = require('../bosdyn/api/robot_command_pb');
const robot_state_pb = require('../bosdyn/api/robot_state_pb');

class PowerResponseError extends ResponseError {
  constructor(msg) {
    super(null, msg);
    this.name = 'PowerResponseError';
  }
}

class ShorePowerConnectedError extends PowerResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'ShorePowerConnectedError';
  }
}

class BatteryMissingError extends PowerResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'BatteryMissingError';
  }
}

class CommandInProgressError extends PowerResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CommandInProgressError';
  }
}

class EstoppedError extends PowerResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'EstoppedError';
  }
}

class FaultedError extends PowerResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'FaultedError';
  }
}

class PowerError extends PowerResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'PowerError';
  }
}

class CommandTimedOutError extends PowerResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CommandTimedOutError';
  }
}

/**
 * A client for enabling / disabling robot motor power.
 * Commands are non blocking. Clients are expected to issue a power command and then periodically
 * check the status of this command.
 * This service requires ownership over the robot, in the form of a lease.
 * @extends {BaseClient}
 */
class PowerClient extends BaseClient {
  static default_service_name = 'power';
  static service_type = 'bosdyn.api.PowerService';

  constructor() {
    super(power_service_grpc_pb.PowerServiceClient);
  }

  update_from(other) {
    super.update_from(other);
    if (this.lease_wallet) add_lease_wallet_processors(this, this.lease_wallet);
  }

  power_command(request, lease = null, args) {
    const req = PowerClient._power_command_request(lease, request);
    return this.call(this._stub.powerCommand, req, null, _power_command_error_from_response, args);
  }

  power_command_feedback(power_command_id, args) {
    const req = PowerClient._power_command_feedback_request(power_command_id);
    return this.call(
      this._stub.powerCommandFeedback,
      req,
      _power_status_from_response,
      _power_feedback_error_from_response,
      args,
    );
  }

  static _power_command_request(lease, request) {
    return new power_pb.PowerCommandRequest().setLease(lease).setRequest(request);
  }

  static _power_command_feedback_request(power_command_id) {
    return new power_pb.PowerCommandFeedbackRequest().setPowerCommandId(power_command_id);
  }
}

function _handle_license_errors(func) {
  function wrapper(args, kwargs) {
    return _common_license_errors(args) || func(args, kwargs);
  }
  return wrapper;
}

function _common_license_errors(response) {
  let license_status = null;
  if (response.getStatus() !== power_pb.PowerCommandStatus.STATUS_LICENSE_ERROR) return null;
  if (response.getLicenseStatus()) {
    license_status = response.getLicenseStatus();
  } else {
    return new InternalServerError(response, 'No LicenseInfo.Status field found!');
  }
  if (license_status !== license_pb.LicenseInfo.Status.STATUS_VALID) return new LicenseError(response);

  return null;
}

const _STATUS_TO_ERROR = {
  [power_pb.PowerCommandStatus.STATUS_SUCCESS]: [null, null],
  [power_pb.PowerCommandStatus.STATUS_IN_PROGRESS]: [null, null],
  [power_pb.PowerCommandStatus.STATUS_SHORE_POWER_CONNECTED]: [
    ShorePowerConnectedError,
    'Robot cannot be powered on while on wall power.',
  ],
  [power_pb.PowerCommandStatus.STATUS_BATTERY_MISSING]: [BatteryMissingError, 'Battery not inserted into robot.'],
  [power_pb.PowerCommandStatus.STATUS_COMMAND_IN_PROGRESS]: [
    CommandInProgressError,
    'Power command cannot be overwritten.',
  ],
  [power_pb.PowerCommandStatus.STATUS_ESTOPPED]: [
    EstoppedError,
    'Cannot power on while estopped. Inspect EStopState for more info.',
  ],
  [power_pb.PowerCommandStatus.STATUS_FAULTED]: [
    FaultedError,
    'Cannot power on due to a fault. Inspect FaultState for more info.',
  ],
  [power_pb.PowerCommandStatus.STATUS_INTERNAL_ERROR]: [
    InternalServerError,
    'Service experienced an unexpected error state.',
  ],
  [power_pb.PowerCommandStatus.STATUS_LICENSE_ERROR]: [
    LicenseError,
    'Request was rejected due to using an invalid license.',
  ],
};

function _power_command_error_from_response(response) {
  return error_factory(response, response.getStatus(), Object.keys(power_pb.PowerCommandStatus), _STATUS_TO_ERROR);
}

// eslint-disable-next-line
function _power_feedback_error_from_response(response) {
  return null;
}

function _power_status_from_response(response) {
  return response.getStatus();
}

/**
 * Power off robot motors safely. This function blocks until robot safely powers off. This
 * means the robot will attempt to sit before powering motors off.
 *
 * @param {RobotCommandClient} command_client Client for calling RobotCommandService safe power off.
 * @param {RobotStateClient} state_client Client for monitoring power state.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_sec.
 * @throws {RobotCommandResponseError} Something went wrong during the power off sequence.
 */
async function safe_power_off(command_client, state_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const start_time = Date.now();
  const end_time = start_time + timeout_msec;
  const update_time = 1.0 / update_frequency;

  const full_body_command = new full_body_command_pb.FullBodyCommand.Request().setSafePowerOffRequest(
    new basic_command_pb.SafePowerOffCommand.Request(),
  );
  const command = new robot_command_pb.RobotCommand().setFullBodyCommand(full_body_command);
  await command_client.robot_command(command, args);

  /* eslint-disable no-await-in-loop */
  while (Date.now() < end_time) {
    const time_until_timeout = end_time - Date.now();
    const start_call_time = Date.now();
    try {
      const response = await state_client.get_robot_state(Object.assign({}, args, { timeout: time_until_timeout }));
      if (response.getPowerState().getMotorPowerState() === robot_state_pb.PowerState.MotorPowerState.STATE_OFF) return;
    } catch (e) {
      throw new CommandTimedOutError(e);
    }
    const call_time = Date.now() - start_call_time;
    const sleep_time = Math.max(0.0, update_time - call_time);
    await sleep(sleep_time);
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError();
}

async function power_on(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  console.warn('[POWER] Replaced by the less ambiguous power_on_motors function.');
  await power_on_motors(power_client, timeout_msec, update_frequency, args);
}

async function power_off(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  console.warn('[POWER] Replaced by the less ambiguous power_off_motors function.');
  await power_off_motors(power_client, timeout_msec, update_frequency, args);
}

/**
 * Power on the robot motors. This function blocks until the command returns success.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function power_on_motors(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const request = power_pb.PowerCommandRequest.Request.REQUEST_ON_MOTORS;
  await _power_command(power_client, request, timeout_msec, update_frequency, undefined, args);
}

/**
 * Power off the robot motors.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function power_off_motors(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const request = power_pb.PowerCommandRequest.Request.REQUEST_OFF_MOTORS;
  await _power_command(power_client, request, timeout_msec, update_frequency, undefined, args);
}

/**
 * Fully power off the robot. Powering off the robot will stop API comms.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function power_off_robot(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const request = power_pb.PowerCommandRequest.Request.REQUEST_OFF_ROBOT;
  await _power_command(power_client, request, timeout_msec, update_frequency, true, args);
}

/**
 * Power cycle the robot. Power cycling the robot will stop API comms.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function power_cycle_robot(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const request = power_pb.PowerCommandRequest.Request.REQUEST_CYCLE_ROBOT;
  await _power_command(power_client, request, timeout_msec, update_frequency, true, args);
}

/**
 * Power off the robot payload ports.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function power_off_payload_ports(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const request = power_pb.PowerCommandRequest.Request.REQUEST_OFF_PAYLOAD_PORTS;
  await _power_command(power_client, request, timeout_msec, update_frequency, undefined, args);
}

/**
 * Power on the robot payload ports.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function power_on_payload_ports(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const request = power_pb.PowerCommandRequest.Request.REQUEST_ON_PAYLOAD_PORTS;
  await _power_command(power_client, request, timeout_msec, update_frequency, undefined, args);
}

/**
 * Power off the robot Wi-Fi radio.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function power_off_wifi_radio(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const request = power_pb.PowerCommandRequest.Request.REQUEST_OFF_WIFI_RADIO;
  await _power_command(power_client, request, timeout_msec, update_frequency, undefined, args);
}

/**
 * Power on the robot Wi-Fi radio.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for.
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function power_on_wifi_radio(power_client, timeout_msec = 30_000, update_frequency = 1.0, args) {
  const request = power_pb.PowerCommandRequest.Request.REQUEST_ON_WIFI_RADIO;
  await _power_command(power_client, request, timeout_msec, update_frequency, undefined, args);
}

/**
 * Helper function to issue command to power client.
 *
 * @param {PowerClient} power_client Client for calling power service.
 * @param {PowerCommandRequest} request Request to make to power service.
 * @param {number} [timeout_msec=30000] Max time this function will block for (in milliseconds).
 * @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {boolean} [expect_grpc_timeout=false] Expect API comms to drop on a success.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot
 */
async function _power_command(
  power_client,
  request,
  timeout_msec = 30_000,
  update_frequency = 1.0,
  expect_grpc_timeout = false,
  args,
) {
  let responseId;

  try {
    responseId = await power_client.power_command(request, undefined, args);
  } catch (e) {
    console.log(e);
    if (e instanceof TimedOutError) {
      if (expect_grpc_timeout) {
        return;
      } else {
        throw e;
      }
    }
  }

  if (responseId.getStatus() === power_pb.PowerCommandStatus.STATUS_SUCCESS) return;

  const start_time = Date.now();
  const end_time = start_time + timeout_msec;
  const update_time = 1.0 / update_frequency;

  const power_command_id = responseId.getPowerCommandId();

  /* eslint-disable no-await-in-loop */
  while (Date.now() < end_time) {
    const time_until_timeout = end_time - Date.now();
    const start_call_time = Date.now();
    try {
      const response = await power_client.power_command_feedback(
        power_command_id,
        Object.assign({}, args, { timeout: time_until_timeout }),
      );
      if (response === power_pb.PowerCommandStatus.STATUS_SUCCESS) return;
      if (response !== power_pb.PowerCommandStatus.STATUS_IN_PROGRESS) {
        const error_type = _STATUS_TO_ERROR[response][0];
        const message = _STATUS_TO_ERROR[response][1];
        throw new error_type(message);
      }
    } catch (e) {
      const errorClass = Object.values(_STATUS_TO_ERROR)
        .map(x => x[0])
        .filter(x => x !== null);
      if (e instanceof TimedOutError) {
        if (expect_grpc_timeout) {
          return;
        } else {
          throw e;
        }
      } else if (!errorClass.some(classError => e instanceof classError)) {
        throw new CommandTimedOutError(e);
      } else {
        throw e;
      }
    }
    const call_time = Date.now() - start_call_time;
    const sleep_time = Math.max(0.0, update_time - call_time);
    console.log(update_time - call_time);
    await sleep(sleep_time);
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError();
}

/**
 * Returns true if robot is powered on, false otherwise.
 *
 * @param {RobotStateClient} state_client Robot state client instance.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<boolean>}
 * @throws {RpcError} Problem communicating with the robot
 */
async function is_powered_on(state_client, args) {
  const response = await state_client.get_robot_state(args);
  return response.getPowerState().getMotorPowerState() === robot_state_pb.PowerState.MotorPowerState.STATE_ON;
}

module.exports = {
  PowerResponseError,
  ShorePowerConnectedError,
  BatteryMissingError,
  CommandInProgressError,
  EstoppedError,
  FaultedError,
  PowerError,
  CommandTimedOutError,
  PowerClient,
  safe_power_off,
  power_on,
  power_off,
  power_on_motors,
  power_off_motors,
  power_off_robot,
  power_cycle_robot,
  power_off_payload_ports,
  power_on_payload_ports,
  power_off_wifi_radio,
  power_on_wifi_radio,
  is_powered_on,
};
