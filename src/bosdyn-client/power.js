'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const { Duration } = require('google-protobuf/google/protobuf/duration_pb');

const {
  BaseClient,
  errorFactory,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
  handleLeaseUseResultErrors,
  commonLicenseErrors,
} = require('./common');
const { ResponseError, InternalServerError, LicenseError, TimedOutError } = require('./exceptions');
const { addLeaseWalletProcessors } = require('./lease');
const { DefaultDict } = require('./util');

const basicCommandPb = require('../bosdyn/api/basic_command_pb');
const fullBodyCommandPb = require('../bosdyn/api/full_body_command_pb');
const powerPb = require('../bosdyn/api/power_pb');
const { PowerServiceClient } = require('../bosdyn/api/power_service_grpc_pb');
const robotCommandPb = require('../bosdyn/api/robot_command_pb');
const robotStatePb = require('../bosdyn/api/robot_state_pb');

class PowerResponseError extends ResponseError {}
class ShorePowerConnectedError extends PowerResponseError {}
class BatteryMissingError extends PowerResponseError {}
class CommandInProgressError extends PowerResponseError {}
class EstoppedError extends PowerResponseError {}
class OverriddenError extends PowerResponseError {}
class KeepaliveMotorsOffError extends PowerResponseError {}
class FaultedError extends PowerResponseError {}
class FanControlTemperatureError extends PowerResponseError {}
class SafetyStopIncompatibleHardwareError extends PowerResponseError {}
class SafetyStopFailedError extends PowerResponseError {}
class SafetyStopUnknownStopTypeError extends PowerResponseError {}

class PowerError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}
class CommandTimedOutError extends PowerError {}

/**
 * A client for enabling / disabling robot motor power.
 * Commands are non blocking. Clients are expected to issue a power command and then periodically
 * check the status of this command.
 * This service requires ownership over the robot, in the form of a lease.
 * @extends {BaseClient<PowerServiceClient>}
 */
class PowerClient extends BaseClient {
  static defaultServiceName = 'power';
  static serviceType = 'bosdyn.api.PowerService';

  constructor() {
    super(PowerServiceClient);
  }

  updateFrom(other) {
    super.updateFrom(other);
    if (this.leaseWallet) addLeaseWalletProcessors(this, this.leaseWallet);
  }

  /**
   * Issue a power request to the robot.
   * @param {powerPb.PowerCommandRequest.Request} request The power request to send
   * @param {Lease} lease The lease to send
   * @param {Object} args The option to send with the rpc request
   * @returns {Promise<powerPb.PowerCommandResponse>}
   */
  powerCommand(request, lease = null, args) {
    const req = PowerClient._powerCommandRequest(lease, request);
    return this.call(this._stub.powerCommand, req, null, _powerCommandErrorFromResponse, args);
  }

  /**
   * Check the status of a previously issued power command.
   * @param {number} powerCommandId The power command identifier
   * @param {Object} args The option to send with the rpc request
   * @returns {Promise<powerPb.PowerCommandStatus>}
   */
  powerCommandFeedback(powerCommandId, args) {
    const req = PowerClient._powerCommandFeedbackRequest(powerCommandId);
    return this.call(
      this._stub.powerCommandFeedback,
      req,
      _powerStatusFromResponse,
      _powerFeedbackErrorFromResponse,
      args,
    );
  }

  /**
   * Issue a fan power command request to the robot.
   * @param {number} percentPower The power percent to apply
   * @param {number} duration The duration
   * @param {lease_pb.Lease} lease The lease proto
   * @param {Object} args The option to send with the rpc request
   * @returns {Promise<powerPb.FanPowerCommandResponse>}
   */
  fanPowerCommand(percentPower, duration, lease = null, args) {
    const req = PowerClient._fanPowerCommandRequest(lease, percentPower, duration);
    return this.call(this._stub.fanPowerCommand, req, null, _fanPowerCommandErrorFromResponse, args);
  }

  /**
   * Check the status of a previously issued fan command
   * @param {number} commandId The command id
   * @param {Object} args The option to send with the rpc request
   * @returns {Promise<powerPb.FanPowerCommandFeedbackResponse>}
   */
  fanPowerCommandFeedback(commandId, args) {
    const req = PowerClient._fanPowerCommandFeedbackRequest(commandId);
    return this.call(this._stub.fanPowerCommandFeedback, req, null, _fanPowerFeedbackErrorFromResponse, args);
  }

  /**
   * Issue a reset safety stop request to the robot.
   * @param {powerPb.ResetSafetyStopRequest.SafetyStopType} safetyStopType The safety stop type to send
   * @param {lease_pb.Lease} lease The lease proto
   * @param {Object} args The option to send with the rpc request
   * @returns {Promise<powerPb.ResetSafetyStopRequest>}
   */
  resetSafetyStop(safetyStopType, lease = null, args) {
    const req = PowerClient._resetSafetyStopRequest(lease, safetyStopType);
    return this.call(this._stub.ResetSafetyStop, req, null, _resetSafetyStopErrorFromResponse, args);
  }

  static _powerCommandRequest(lease, request) {
    return new powerPb.PowerCommandRequest().setLease(lease).setRequest(request);
  }

  static _powerCommandFeedbackRequest(powerCommandId) {
    return new powerPb.PowerCommandFeedbackRequest().setPowerCommandId(powerCommandId);
  }

  static _fanFowerCommandRequest(lease, percentPower, duration) {
    return new powerPb.FanPowerCommandRequest()
      .setLease(lease)
      .setPercentPower(percentPower)
      .setDuration(new Duration().setSeconds(duration));
  }

  static _fanPowerCommandFeedbackRequest(commandId) {
    return new powerPb.FanPowerCommandFeedbackRequest().setCommandId(commandId);
  }

  static _resetSafetyStopRequest(lease, safetyStopType) {
    return new powerPb.ResetSafetyStopRequest().setLease(lease).setSafetyStopType(safetyStopType);
  }
}

const _STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_SUCCESS, [null, null]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_IN_PROGRESS, [null, null]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_SHORE_POWER_CONNECTED, [
  ShorePowerConnectedError,
  'Robot cannot be powered on while on wall power.',
]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_BATTERY_MISSING, [
  BatteryMissingError,
  'Battery not inserted into robot.',
]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_COMMAND_IN_PROGRESS, [
  CommandInProgressError,
  'Power command cannot be overwritten.',
]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_ESTOPPED, [
  EstoppedError,
  'Cannot power on while estopped. Inspect EStopState for more info.',
]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_FAULTED, [
  FaultedError,
  'Cannot power on due to a fault; inspect FaultState for more info.',
]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_INTERNAL_ERROR, [
  InternalServerError,
  'Service experienced an unexpected error state.',
]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_LICENSE_ERROR, [
  LicenseError,
  'Request was rejected due to using an invalid license.',
]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_OVERRIDDEN, [
  OverriddenError,
  'The command was overridden and is no longer valid.',
]);
_STATUS_TO_ERROR.set(powerPb.PowerCommandStatus.STATUS_KEEPALIVE_MOTORS_OFF, [
  KeepaliveMotorsOffError,
  'Cannot power on while Keepalive requests motors off.',
]);

const _FAN_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_FAN_STATUS_TO_ERROR.set(powerPb.FanPowerCommandResponse.Status.STATUS_OK, [null, null]);
_FAN_STATUS_TO_ERROR.set(powerPb.FanPowerCommandResponse.Status.STATUS_TEMPERATURE_TOO_HIGH, [
  FanControlTemperatureError,
  'Current measured robot temperatures are too high to accept user fan command.',
]);

const _RESET_SAFETY_STOP_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_RESET_SAFETY_STOP_STATUS_TO_ERROR.set(powerPb.ResetSafetyStopResponse.Status.STATUS_OK, [null, null]);
_RESET_SAFETY_STOP_STATUS_TO_ERROR.set(powerPb.ResetSafetyStopResponse.Status.STATUS_INCOMPATIBLE_HARDWARE_ERROR, [
  SafetyStopIncompatibleHardwareError,
  'SafetyStop command invalid because robot is not configured for SRSF.',
]);
_RESET_SAFETY_STOP_STATUS_TO_ERROR.set(powerPb.ResetSafetyStopResponse.Status.STATUS_FAILED, [
  SafetyStopFailedError,
  'SafetyStop command executed and failed.',
]);
_RESET_SAFETY_STOP_STATUS_TO_ERROR.set(powerPb.ResetSafetyStopResponse.Status.STATUS_UNKNOWN_STOP_TYPE, [
  SafetyStopUnknownStopTypeError,
  'SafetyStop command failed due to unknown stop type.',
]);

function handleLicenseErrors(func) {
  // eslint-disable-next-line func-names, space-before-function-paren
  return function (...args) {
    return _commonLicenseErrors(...args) || func(...args);
  };
}

function _commonLicenseErrors(response) {
  if (response.getStatus() !== powerPb.PowerCommandStatus.STATUS_LICENSE_ERROR) {
    return null;
  }

  return commonLicenseErrors(response);
}

const _fanPowerCommandErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError(
      'STATUS_UNKNOWN',
      'status',
      powerPb.FanPowerCommandResponse,
    )(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(powerPb.FanPowerCommandResponse.Status),
        _FAN_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _resetSafetyStopErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError(
      'STATUS_UNKNOWN',
      'status',
      powerPb.ResetSafetyStopResponse,
    )(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(powerPb.ResetSafetyStopResponse.Status),
        _RESET_SAFETY_STOP_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _powerCommandErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleLicenseErrors(
      handleUnsetStatusError(
        'STATUS_UNKNOWN',
        'status',
        powerPb.PowerCommandStatus,
      )(response =>
        errorFactory(response, response.getStatus(), Object.keys(powerPb.PowerCommandStatus), _STATUS_TO_ERROR),
      ),
    ),
  ),
);

const _fanPowerFeedbackErrorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN', 'status', powerPb.FanPowerCommandFeedbackResponse)(() => null),
);

const _powerFeedbackErrorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN', 'status', powerPb.PowerCommandStatus)(() => null),
);

function _powerStatusFromResponse(response) {
  return response.getStatus();
}

/**
 * Power off robot motors safely. This function blocks until robot safely powers off. This
 * means the robot will attempt to sit before powering motors off.
 *
 * @param {RobotCommandClient} commandClient Client for calling RobotCommandService safe power off.
 * @param {RobotStateClient} stateClient Client for monitoring power state.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_sec.
 * @throws {RobotCommandResponseError} Something went wrong during the power off sequence.
 */
async function safePowerOffMotors(commandClient, stateClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const startTime = Date.now();
  const endTime = startTime + timeoutMsec;
  const updateTime = 1.0 / updateFrequency;

  const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setSafePowerOffRequest(
    new basicCommandPb.SafePowerOffCommand.Request(),
  );
  const command = new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  await commandClient.robotCommand(command, null, null, null, args);

  /* eslint-disable no-await-in-loop */
  while (Date.now() < endTime) {
    const timeUntilTimeout = endTime - Date.now();
    const startCallTime = Date.now();
    try {
      const response = await stateClient.getRobotState({ ...args, ...{ timeout: timeUntilTimeout } });
      if (response.getPowerState().getMotorPowerState() === robotStatePb.PowerState.MotorPowerState.STATE_OFF) return;
    } catch (e) {
      throw new CommandTimedOutError(e);
    }
    const callTime = Date.now() - startCallTime;
    const sleepTime = Math.max(0.0, updateTime - callTime);
    await sleep(sleepTime);
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError();
}

async function powerOn(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  console.warn('[POWER] Replaced by the less ambiguous powerOnMotors function.');
  await powerOnMotors(powerClient, timeoutMsec, updateFrequency, args);
}

async function powerOff(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  console.warn('[POWER] Replaced by the less ambiguous powerOffMotors function.');
  await powerOffMotors(powerClient, timeoutMsec, updateFrequency, args);
}

/**
 * Power on the robot motors. This function blocks until the command returns success.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function powerOnMotors(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const request = powerPb.PowerCommandRequest.Request.REQUEST_ON_MOTORS;
  await _powerCommand(powerClient, request, timeoutMsec, updateFrequency, undefined, args);
}

/**
 * Power off the robot motors.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeout_msec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function powerOffMotors(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const request = powerPb.PowerCommandRequest.Request.REQUEST_OFF_MOTORS;
  await _powerCommand(powerClient, request, timeoutMsec, updateFrequency, undefined, args);
}

/**
 * Power off the robot motors and then the robot computers safely. This function blocks until
 * robot safely powers off. This means the robot will attempt to sit before powering motors off.
 * @param {RobotCommandClient} commandClient Client for calling RobotCommandService safe power off.
 * @param {RobotStateClient} stateClient Client for monitoring power state.
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec
 * @throws {RobotCommandResponseError} Something went wrong with the safe power off.
 */
async function safePowerOffRobot(
  commandClient,
  stateClient,
  powerClient,
  timeoutMsec = 30_000,
  updateFrequency = 1.0,
  args,
) {
  const endTime = Date.now() + timeoutMsec;
  await safePowerOffMotors(commandClient, stateClient, endTime - Date.now(), updateFrequency, args);
  await powerOffRobot(powerClient, endTime - Date.now(), updateFrequency, args);
}

/**
 * Fully power off the robot. Powering off the robot will stop API comms.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function powerOffRobot(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const request = powerPb.PowerCommandRequest.Request.REQUEST_OFF_ROBOT;
  await _powerCommand(powerClient, request, timeoutMsec, updateFrequency, true, args);
}

/**
 * Power cycle the robot safely. This function blocks until robot safely powers off. The robot
 * will attempt to sit before powering cycling.
 * @param  {RobotCommandClient} commandClient Client for calling RobotCommandService safe power off.
 * @param  {RobotStateClient} stateClient Client for monitoring power state.
 * @param  {PowerClient} powerClient Client for calling power service.
 * @param  {number} [timeoutMsec=30000] Max time this function will block for.
 * @param  {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param  {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function safePowerCycleRobot(
  commandClient,
  stateClient,
  powerClient,
  timeoutMsec = 30_000,
  updateFrequency = 1.0,
  args,
) {
  const endTime = Date.now() + timeoutMsec;
  await safePowerOffMotors(commandClient, stateClient, endTime - Date.now(), updateFrequency, args);
  await powerCycleRobot(powerClient, endTime - Date.now(), updateFrequency, args);
}

/**
 * Power cycle the robot. Power cycling the robot will stop API comms.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function powerCycleRobot(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const request = powerPb.PowerCommandRequest.Request.REQUEST_CYCLE_ROBOT;
  await _powerCommand(powerClient, request, timeoutMsec, updateFrequency, true, args);
}

/**
 * Power off the robot payload ports.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function powerOffPayloadPorts(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const request = powerPb.PowerCommandRequest.Request.REQUEST_OFF_PAYLOAD_PORTS;
  await _powerCommand(powerClient, request, timeoutMsec, updateFrequency, undefined, args);
}

/**
 * Power on the robot payload ports.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function powerOnPayloadPorts(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const request = powerPb.PowerCommandRequest.Request.REQUEST_ON_PAYLOAD_PORTS;
  await _powerCommand(powerClient, request, timeoutMsec, updateFrequency, undefined, args);
}

/**
 * Power off the robot Wi-Fi radio.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function powerOffWifiRadio(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const request = powerPb.PowerCommandRequest.Request.REQUEST_OFF_WIFI_RADIO;
  await _powerCommand(powerClient, request, timeoutMsec, updateFrequency, undefined, args);
}

/**
 * Power on the robot Wi-Fi radio.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {PowerResponseError} Something went wrong during the power off sequence.
 */
async function powerOnWifiRadio(powerClient, timeoutMsec = 30_000, updateFrequency = 1.0, args) {
  const request = powerPb.PowerCommandRequest.Request.REQUEST_ON_WIFI_RADIO;
  await _powerCommand(powerClient, request, timeoutMsec, updateFrequency, undefined, args);
}

/**
 * Helper function to issue command to power client.
 *
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {PowerCommandRequest} request Request to make to power service.
 * @param {number} [timeoutMsec=30000] Max time this function will block for (in milliseconds).
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {boolean} [expectGrpcTimeout=false] Expect API comms to drop on a success.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot
 */
async function _powerCommand(
  powerClient,
  request,
  timeoutMsec = 30_000,
  updateFrequency = 1.0,
  expectGrpcTimeout = false,
  args,
) {
  const startTime = Date.now();
  const endTime = startTime + timeoutMsec;

  let responseId;
  try {
    responseId = await powerClient.powerCommand(request, null, args);
  } catch (e) {
    if (e instanceof TimedOutError) {
      if (expectGrpcTimeout) {
        return;
      } else {
        throw e;
      }
    }
  }

  if (responseId.getStatus() === powerPb.PowerCommandStatus.STATUS_SUCCESS) return;

  const updateTime = 1.0 / updateFrequency;

  const powerCommandId = responseId.getPowerCommandId();

  /* eslint-disable no-await-in-loop */
  while (Date.now() < endTime) {
    const timeUntilTimeout = endTime - Date.now();
    const startCallTime = Date.now();
    try {
      const response = await powerClient.powerCommandFeedback(
        powerCommandId,
        Object.assign({}, args, { timeout: timeUntilTimeout }),
      );
      if (response === powerPb.PowerCommandStatus.STATUS_SUCCESS) return;
      if (response !== powerPb.PowerCommandStatus.STATUS_IN_PROGRESS) {
        const [errorType, message] = _STATUS_TO_ERROR.get(response);
        throw new errorType(null, message);
      }
    } catch (err) {
      if (err instanceof TimedOutError && expectGrpcTimeout) {
        return;
      } else {
        throw err;
      }
    }
    const callTime = Date.now() - startCallTime;
    const sleepTime = Math.max(0.0, updateTime - callTime);
    if (sleepTime > 0) {
      await sleep(sleepTime);
    }
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError();
}

/**
 * Returns true if robot is powered on, false otherwise.
 *
 * @param {RobotStateClient} stateClient Robot state client instance.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<boolean>}
 * @throws {RpcError} Problem communicating with the robot
 */
async function isPoweredOn(stateClient, args) {
  const response = await stateClient.getRobotState(args);
  return response.getPowerState().getMotorPowerState() === robotStatePb.PowerState.MotorPowerState.STATE_ON;
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
  powerOn,
  powerOff,
  powerOnMotors,
  powerOffMotors,
  safePowerOffRobot,
  safePowerOffMotors,
  powerOffRobot,
  safePowerCycleRobot,
  powerCycleRobot,
  powerOffPayloadPorts,
  powerOnPayloadPorts,
  powerOffWifiRadio,
  powerOnWifiRadio,
  isPoweredOn,
  _powerCommandErrorFromResponse,
  _powerFeedbackErrorFromResponse,
};
