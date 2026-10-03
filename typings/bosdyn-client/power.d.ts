export type RpcError = import("./exceptions").RpcError;
export type Lease = import("./lease").Lease;
export type RobotCommandResponseError = import("./robot_command").RobotCommandResponseError;
export type Robot = import("./robot").Robot;
export type RobotCommandClient = import("./robot_command").RobotCommandClient;
export type RobotStateClient = import("./robot_state").RobotStateClient;
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./lease').Lease} Lease
 * @typedef {import('./robot_command').RobotCommandResponseError} RobotCommandResponseError
 */
/** General class of errors for Power service. */
export class PowerResponseError extends ResponseError {
}
/** Robot cannot be powered on while on wall power. */
export class ShorePowerConnectedError extends PowerResponseError {
}
/** Battery not inserted into robot. */
export class BatteryMissingError extends PowerResponseError {
}
/** Power command cannot be overwritten. */
export class CommandInProgressError extends PowerResponseError {
}
/** Cannot power on while estopped; inspect EStopState for more info. */
export class EstoppedError extends PowerResponseError {
}
/** The command was overridden and is no longer valid. */
export class OverriddenError extends PowerResponseError {
}
/** Cannot power on while Keepalive requests motors off. */
export class KeepaliveMotorsOffError extends PowerResponseError {
}
/** Cannot power on due to a fault; inspect FaultState for more info. */
export class FaultedError extends PowerResponseError {
}
/** Current measured robot temperatures are too high to accept user fan command. */
export class FanControlTemperatureError extends PowerResponseError {
}
/** SafetyStop command invalid because robot is not configured for SRSF. */
export class SafetyStopIncompatibleHardwareError extends PowerResponseError {
}
/** SafetyStop command executed and failed. */
export class SafetyStopFailedError extends PowerResponseError {
}
/** SafetyStop command failed due to unknown stop type. */
export class SafetyStopUnknownStopTypeError extends PowerResponseError {
}
/** General class of errors to handle non-response non-grpc errors. */
export class PowerError extends BosdynError {
}
/** Timed out waiting for SUCCESS response from power command. */
export class CommandTimedOutError extends PowerError {
}
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * @typedef {import('./robot_command').RobotCommandClient} RobotCommandClient
 */
/**
 * @typedef {import('./robot_state').RobotStateClient} RobotStateClient
 */
/**
 * A client for enabling / disabling robot motor power.
 * Commands are non blocking. Clients are expected to issue a power command and then periodically
 * check the status of this command.
 * This service requires ownership over the robot, in the form of a lease.
 * @extends {BaseClient<PowerServiceClient>}
 */
export class PowerClient extends BaseClient<PowerServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    static _powerCommandRequest(lease: any, request: any): powerPb.PowerCommandRequest;
    static _powerCommandFeedbackRequest(powerCommandId: any): powerPb.PowerCommandFeedbackRequest;
    static _fanPowerCommandRequest(lease: any, percentPower: any, duration: any): powerPb.FanPowerCommandRequest;
    static _fanPowerCommandFeedbackRequest(commandId: any): powerPb.FanPowerCommandFeedbackRequest;
    static _resetSafetyStopRequest(lease: any, safetyStopType: any): powerPb.ResetSafetyStopRequest;
    constructor();
    /**
     * Issue a power request to the robot.
     * @param {powerPb.PowerCommandRequest.Request} request The power request to send
     * @param {Lease} lease The lease to send
     * @param {Object} [args] The option to send with the rpc request
     * @returns {Promise<powerPb.PowerCommandResponse>}
     */
    powerCommand(request: powerPb.PowerCommandRequest.Request, lease?: Lease, args?: Object): Promise<powerPb.PowerCommandResponse>;
    /**
     * Check the status of a previously issued power command.
     * @param {number} powerCommandId The power command identifier
     * @param {Object} [args] The option to send with the rpc request
     * @returns {Promise<powerPb.PowerCommandStatus>}
     */
    powerCommandFeedback(powerCommandId: number, args?: Object): Promise<powerPb.PowerCommandStatus>;
    /**
     * Issue a fan power command request to the robot.
     * @param {number} percentPower The power percent to apply
     * @param {number} duration The duration of the command, in whole seconds (Duration.seconds, like Python).
     * @param {import('../../src/bosdyn/api/lease_pb').Lease} lease The lease proto
     * @param {Object} [args] The option to send with the rpc request
     * @returns {Promise<powerPb.FanPowerCommandResponse>}
     */
    fanPowerCommand(percentPower: number, duration: number, lease?: import("../../src/bosdyn/api/lease_pb").Lease, args?: Object): Promise<powerPb.FanPowerCommandResponse>;
    /**
     * Get fan information.
     * @param {Object} [args] The option to send with the rpc request
     * @returns {Promise<powerPb.GetFanInformationResponse>}
     */
    getFanInfo(args?: Object): Promise<powerPb.GetFanInformationResponse>;
    /**
     * Check the status of a previously issued fan command
     * @param {number} commandId The command id
     * @param {Object} [args] The option to send with the rpc request
     * @returns {Promise<powerPb.FanPowerCommandFeedbackResponse>}
     */
    fanPowerCommandFeedback(commandId: number, args?: Object): Promise<powerPb.FanPowerCommandFeedbackResponse>;
    /**
     * Issue a reset safety stop request to the robot.
     * @param {powerPb.ResetSafetyStopRequest.SafetyStopType} safetyStopType The safety stop type to send
     * @param {import('../../src/bosdyn/api/lease_pb').Lease|null} lease The lease proto
     * @param {Object} [args] The option to send with the rpc request
     * @returns {Promise<powerPb.ResetSafetyStopRequest>}
     */
    resetSafetyStop(safetyStopType: powerPb.ResetSafetyStopRequest.SafetyStopType, lease?: import("../../src/bosdyn/api/lease_pb").Lease | null, args?: Object): Promise<powerPb.ResetSafetyStopRequest>;
}
/**
 * Power on robot motors.
 *
 * See powerOnMotors().
 */
export function powerOn(powerClient: any, timeoutMsec: number | undefined, updateFrequency: number | undefined, args: any): Promise<void>;
/**
 * Power off the robot motors.
 *
 * See powerOffMotors().
 */
export function powerOff(powerClient: any, timeoutMsec: number | undefined, updateFrequency: number | undefined, args: any): Promise<void>;
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
export function powerOnMotors(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function powerOffMotors(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
/**
 * Power off the robot motors and then the robot computers safely. This function blocks until
 * robot safely powers off. This means the robot will attempt to sit before powering motors off.
 * @param {RobotCommandClient} commandClient Client for calling RobotCommandService safe power off.
 * @param {RobotStateClient} stateClient Client for monitoring power state.
 * @param {PowerClient} powerClient Client for calling power service.
 * @param {number} [timeoutMsec=30] Max time this function will block for.
 * @param {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec
 * @throws {RobotCommandResponseError} Something went wrong with the safe power off.
 */
export function safePowerOffRobot(commandClient: RobotCommandClient, stateClient: RobotStateClient, powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function safePowerOffMotors(commandClient: RobotCommandClient, stateClient: RobotStateClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function powerOffRobot(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function safePowerCycleRobot(commandClient: RobotCommandClient, stateClient: RobotStateClient, powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function powerCycleRobot(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
/**
 * Soft reboot the robot safely. This function blocks until robot safely powers off. The robot
 * will attempt to sit before soft rebooting.
 * @param  {RobotCommandClient} commandClient Client for calling RobotCommandService safe power off.
 * @param  {RobotStateClient} stateClient Client for monitoring power state.
 * @param  {PowerClient} powerClient Client for calling power service.
 * @param  {number} [timeoutMsec=30000] Max time this function will block for.
 * @param  {number} [updateFrequency=1.0] The frequency with which the robot should check if the command has succeeded.
 * @param  {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<void>}
 * @throws {RpcError} Problem communicating with the robot.
 * @throws {CommandTimedOutError} Did not power off within timeoutMsec.
 * @throws {RobotCommandResponseError} Something went wrong with the safe power off.
 */
export function safeSoftRebootRobot(commandClient: RobotCommandClient, stateClient: RobotStateClient, powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
/**
 * Soft reboot the robot. Rebooting the robot will stop API comms.
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
export function softRebootRobot(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function powerOffPayloadPorts(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function powerOnPayloadPorts(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function powerOffWifiRadio(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
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
export function powerOnWifiRadio(powerClient: PowerClient, timeoutMsec?: number, updateFrequency?: number, args?: Object): Promise<void>;
/**
 * Returns true if robot is powered on, false otherwise.
 *
 * @param {RobotStateClient} stateClient Robot state client instance.
 * @param {Object} [args] Extra arguments for controlling RPC details.
 * @returns {Promise<boolean>}
 * @throws {RpcError} Problem communicating with the robot
 */
export function isPoweredOn(stateClient: RobotStateClient, args?: Object): Promise<boolean>;
export const _powerCommandErrorFromResponse: (...args: any[]) => any;
export const _powerFeedbackErrorFromResponse: (...args: any[]) => any;
import { ResponseError } from "./exceptions";
import { BosdynError } from "./exceptions";
import { PowerServiceClient } from "../../src/bosdyn/api/power_service_grpc_pb";
import { BaseClient } from "./common";
import powerPb = require("../../src/bosdyn/api/power_pb");
