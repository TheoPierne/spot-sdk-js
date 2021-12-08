const {
	BaseClient, 
	error_factory, 
	handle_unset_status_error, 
	handle_common_header_errors, 
	handle_lease_use_result_errors
} = require('./common');
const {ResponseError, InternalServerError, LicenseError} = require('./exceptions');
const {add_lease_wallet_processors} = require('./lease');

const power_pb = require('../bosdyn/api/power_pb');
const power_service_grpc_pb = require('../bosdyn/api/power_service_grpc_pb');
const basic_command_pb = require('../bosdyn/api/basic_command_pb');
const full_body_command_pb = require('../bosdyn/api/full_body_command_pb');
const license_pb = require('../bosdyn/api/license_pb');
const robot_command_pb = require('../bosdyn/api/robot_command_pb');
const robot_state_pb = require('../bosdyn/api/robot_state_pb');

class PowerResponseError extends ResponseError {
	constructor(msg){
		super(msg);
		this.name = 'PowerResponseError';
	}
};

class ShorePowerConnectedError extends PowerResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ShorePowerConnectedError';
	}
};

class BatteryMissingError extends PowerResponseError {
	constructor(msg){
		super(msg);
		this.name = 'BatteryMissingError';
	}
};

class CommandInProgressError extends PowerResponseError {
	constructor(msg){
		super(msg);
		this.name = 'CommandInProgressError';
	}
};

class EstoppedError extends PowerResponseError {
	constructor(msg){
		super(msg);
		this.name = 'EstoppedError';
	}
};

class FaultedError extends PowerResponseError {
	constructor(msg){
		super(msg);
		this.name = 'FaultedError';
	}
};

class PowerError extends PowerResponseError {
	constructor(msg){
		super(msg);
		this.name = 'PowerError';
	}
};

class CommandTimedOutError extends PowerResponseError {
	constructor(msg){
		super(msg);
		this.name = 'CommandTimedOutError';
	}
};

/**
* A client for enabling / disabling robot motor power.
* Commands are non blocking. Clients are expected to issue a power command and then periodically
* check the status of this command.
* This service requires ownership over the robot, in the form of a lease.
* @class PowerClient
* @extends BaseClient
*/
class PowerClient extends BaseClient {

	static default_service_name = 'power';
	static service_type = 'bosdyn.api.PowerService';

	constructor(){
		super(power_service_grpc_pb.PowerServiceClient);
	}

	update_from(other){
		super.update_from(other);
		if(this.lease_wallet) add_lease_wallet_processors(this, this.lease_wallet);
	}

	async power_command(request, lease = null, args){
		const req = PowerClient._power_command_request(lease, request);
		return await this.call(this._stub.powerCommand, req, null, _power_command_error_from_response, args);
	}

	power_command_async(request, lease = null, args){
		const req = PowerClient._power_command_request(lease, request);
		return this.call_async(this._stub.powerCommand, req, null, _power_command_error_from_response, args);
	}

	async power_command_feedback(power_command_id, args){
		const req = PowerClient._power_command_feedback_request(power_command_id);
		return await this.call(this._stub.powerCommandFeedback, req, _power_status_from_response, _power_feedback_error_from_response, args);
	}

	power_command_feedback_async(power_command_id, args){
		const req = PowerClient._power_command_feedback_request(power_command_id);
		return this.call_async(this._stub.powerCommandFeedback, req, _power_status_from_response, _power_feedback_error_from_response, args);
	}

	static _power_command_request(lease, request){
		const req = new power_pb.PowerCommandRequest()
		.setLease(lease)
		.setRequest(request);
		return req;
	}

	static _power_command_feedback_request(power_command_id){
		const req = new power_pb.PowerCommandFeedbackRequest()
		.setPowerCommandId(power_command_id);
		return req;
	}

};

function _handle_license_errors(func){
	function wrapper(args, kwargs){
		return _common_license_errors(args) || func(args, kwargs);
	}
	return wrapper;
}

function _common_license_errors(response){
	let license_status = null;
	if(response.getStatus() != power_pb.PowerCommandStatus.STATUS_LICENSE_ERROR) return null;
	if(response.getLicenseStatus()){
		license_status = response.getLicenseStatus();
	}else{
		return new InternalServerError(response, 'No LicenseInfo.Status field found!')
	}
	if(license_status != license_pb.LicenseInfo.Status.STATUS_VALID) return new LicenseError(response);

	return null;
}

const _STATUS_TO_ERROR = {
	STATUS_SUCCESS: [null, null],
	STATUS_IN_PROGRESS: [null, null],
	STATUS_SHORE_POWER_CONNECTED: [ShorePowerConnectedError, 'Robot cannot be powered on while on wall power.'],
	STATUS_BATTERY_MISSING: [BatteryMissingError, 'Battery not inserted into robot.'],
	STATUS_COMMAND_IN_PROGRESS: [CommandInProgressError, 'Power command cannot be overwritten.'],
	STATUS_ESTOPPED: [EstoppedError, 'Cannot power on while estopped. Inspect EStopState for more info.'],
	STATUS_FAULTED: [FaultedError, 'Cannot power on due to a fault. Inspect FaultState for more info.'],
	STATUS_INTERNAL_ERROR: [InternalServerError, 'Service experienced an unexpected error state.'],
	STATUS_LICENSE_ERROR: [LicenseError, 'Request was rejected due to using an invalid license.']
}

function _power_command_error_from_response(response){
	return error_factory(response, response.status, power_pb.PowerCommandStatus.keys(), _STATUS_TO_ERROR);
}

function _power_status_from_response(response){
	return response.getStatus();
}

function sleep(period) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, period);
	});
}

/**
* Power off robot motors safely. This function blocks until robot safely powers off. This
* means the robot will attempt to sit before powering motors off.
*
* @param {RobotCommandClient} command_client Client for calling RobotCommandService safe power off.
* @param {RobotStateClient} state_client Client for monitoring power state.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {RobotCommandResponseError} Something went wrong during the power off sequence.
*/
async function safe_power_off(command_client, state_client, timeout_sec = 30_000, update_frequency = 1.0, args){

	const start_time = Date.now();
	const end_time = start_time + timeout_sec;
	const update_time = 1.0 / update_frequency;

	const full_body_command = new full_body_command_pb.FullBodyCommand.Request()
	.setSafePowerOffRequest(new basic_command_pb.SafePowerOffCommand.Request());
	const command = new robot_command_pb.RobotCommand().setFullBodyCommand(full_body_command);
	command_client.robot_command(command, args);

	while(Date.now() < end_time){
		const time_until_timeout = end_time - Date.now();
		const start_call_time = Date.now();
		try{
			const response = await state_client.get_robot_state(Object.assign({}, args, {timeout: time_until_timeout}));
			if(response.getPowerState().getMotorPowerState() == robot_state_pb.PowerState.MotorPowerState.STATE_OFF) return;
		}catch(e){
			throw new CommandTimedOutError();
		}
		const call_time = Date.now() - start_call_time;
		const sleep_time = Math.max(0.0, update_time - call_time);
		await sleep(sleep_time);
	}

	throw new CommandTimedOutError();

}

function power_on(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	console.warn('[POWER] Replaced by the less ambiguous power_on_motors function.');
	power_on_motors(power_client, timeout_sec, update_frequency, undefined, args);
}

function power_off(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	console.warn('[POWER] Replaced by the less ambiguous power_off_motors function.');
	power_off_motors(power_client, timeout_sec, update_frequency, undefined, args);
}

/**
* Power on the robot motors. This function blocks until the command returns success.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {PowerResponseError} Something went wrong during the power off sequence.
*/
function power_on_motors(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	const request = power_pb.PowerCommandRequest.Request.REQUEST_ON_MOTORS;
	_power_command(power_client, request, timeout_sec, update_frequency, undefined, args);
}

/**
* Power off the robot motors.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {PowerResponseError} Something went wrong during the power off sequence.
*/
function power_off_motors(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	const request = power_pb.PowerCommandRequest.Request.REQUEST_OFF_MOTORS;
	_power_command(power_client, request, timeout_sec, update_frequency, undefined, args);
}

/**
* Fully power off the robot. Powering off the robot will stop API comms.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {PowerResponseError} Something went wrong during the power off sequence.
*/
function power_off_robot(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	const request = power_pb.PowerCommandRequest.Request.REQUEST_OFF_ROBOT;
	_power_command(power_client, request, timeout_sec, update_frequency, true, args);
}

/**
* Power cycle the robot. Power cycling the robot will stop API comms.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {PowerResponseError} Something went wrong during the power off sequence.
*/
function power_cycle_robot(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	const request = power_pb.PowerCommandRequest.Request.REQUEST_CYCLE_ROBOT;
	_power_command(power_client, request, timeout_sec, update_frequency, true, args);
}

/**
* Power off the robot payload ports.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {PowerResponseError} Something went wrong during the power off sequence.
*/
function power_off_payload_ports(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	const request = power_pb.PowerCommandRequest.Request.REQUEST_OFF_PAYLOAD_PORTS;
	_power_command(power_client, request, timeout_sec, update_frequency, undefined, args);
}

/**
* Power on the robot payload ports.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {PowerResponseError} Something went wrong during the power off sequence.
*/
function power_on_payload_ports(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	const request = power_pb.PowerCommandRequest.Request.REQUEST_ON_PAYLOAD_PORTS;
	_power_command(power_client, request, timeout_sec, update_frequency, undefined, args);
}

/**
* Power off the robot Wi-Fi radio.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {PowerResponseError} Something went wrong during the power off sequence.
*/
function power_off_wifi_radio(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	const request = power_pb.PowerCommandRequest.Request.REQUEST_OFF_WIFI_RADIO;
	_power_command(power_client, request, timeout_sec, update_frequency, undefined, args);
}

/**
* Power on the robot Wi-Fi radio.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot.
* @throws {CommandTimedOutError} Did not power off within timeout_sec.
* @throws {PowerResponseError} Something went wrong during the power off sequence.
*/
function power_on_wifi_radio(power_client, timeout_sec = 30_000, update_frequency = 1.0, args){
	const request = power_pb.PowerCommandRequest.Request.REQUEST_ON_WIFI_RADIO;
	_power_command(power_client, request, timeout_sec, update_frequency, undefined, args);
}

/**
* Helper function to issue command to power client.
*
* @param {PowerClient} power_client Client for calling power service.
* @param {PowerCommandRequest} request Request to make to power service.
* @param {number} [timeout_sec=30000] Max time this function will block for.
* @param {number} [update_frequency=1.0] The frequency with which the robot should check if the command has succeeded.
* @param {boolean} [expect_grpc_timeout=false] Expect API comms to drop on a success.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {void}
* @throws {RpcError} Problem communicating with the robot
*/
async function _power_command(power_client, request, timeout_sec = 30_000, update_frequency = 1.0, expect_grpc_timeout = false, args){
	const start_time = Date.now();
	const end_time = start_time + timeout_sec;
	const update_time = 1.0 / update_frequency;

	let responseId;
	try{
		responseId = await power_client.power_command(request, args);
	}catch(e){
		if(e instanceof TimedOutError){
			if(expect_grpc_timeout){
				return;
			}else{
				throw e;
			}
		}
	}

	if(responseId.status == power_pb.Status.STATUS_SUCCESS) return;

	const power_command_id = responseId.getPowerCommandId();
	while(Date.now() < end_time){
		const time_until_timeout = end_time - Date.now();
		const start_call_time = Date.now();
		try{
			const response = await power_client.power_command_feedback(power_command_id, Object.assign({}, args, {timeout: time_until_timeout}));
			if(response == power_pb.PowerCommandStatus.Status.STATUS_SUCCESS) return;
			if(response != power_pb.PowerCommandStatus.Status.STATUS_IN_PROGRESS){
				const error_type = _STATUS_TO_ERROR[response][0];
				const message = _STATUS_TO_ERROR[response][1];
				const exc = new error_type(message);
				throw exc;
			}
		}catch(e){
			if(e instanceof TimedOutError){
				if(expect_grpc_timeout){
					return;
				}else{
					throw e;
				}
			}else{
				throw new CommandTimedOutError();
			}
		}
		const call_time = Date.now() - start_call_time;
		const sleep_time = Math.max(0.0, update_time - call_time);
		await sleep(sleep_time);
	}
	throw new CommandTimedOutError();
}

/**
* Returns true if robot is powered on, false otherwise.
*
* @param {string} client_name_prefix Prefix to pass to generate_client_name()
* @param {array} service_clients List of service client classes to register in addition to the defaults.
* @param {object} [args] Extra arguments for controlling RPC details.
* @return {boolean}
* @throws {RpcError} Problem communicating with the robot
*/
async function is_powered_on(state_client, args){
	const response = await state_client.get_robot_state(args);
	return response.getPowerState().getMotorPowerState() == robot_state_pb.PowerState.MotorPowerState.STATE_ON;
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
	is_powered_on
};