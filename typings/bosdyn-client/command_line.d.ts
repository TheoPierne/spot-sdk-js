#!/usr/bin/env node
export type Robot = import("./robot").Robot;
export type ArgumentParser = import("argparse").ArgumentParser;
/**
 * @typedef {import('./robot').Robot} Robot
 * @typedef {import('argparse').ArgumentParser} ArgumentParser
 */
/** Command-line command. */
export class Command {
    /** The name of the command the user should enter on the command line to select this command. */
    static NAME: null;
    /** Whether authentication is needed before the command is run. Most commands need authentication. */
    static NEED_AUTHENTICATION: boolean;
    /** The help of the command (the docstring of its class in Python). */
    static HELP: undefined;
    /**
     * @param {Object} subparsers The subparsers of argparse to which the command is added.
     * @param {Object<string, Command>} commandDict Dictionary of command names which take parsed options.
     */
    constructor(subparsers: Object, commandDict: {
        [x: string]: Command;
    });
    /** @type {ArgumentParser} */
    _parser: ArgumentParser;
    /**
     * Invoke the command. The errors of the SDK are printed (to stderr) instead of thrown, like Python.
     * @param {Robot} robot Robot object on which to run the command.
     * @param {Object} options Parsed command-line arguments.
     * @returns {Promise<*>} The result of the command, null if an error of the SDK was printed.
     */
    run(robot: Robot, options: Object): Promise<any>;
    /**
     * Implementation of the command.
     * @abstract
     * @param {Robot} robot Robot object on which to run the command.
     * @param {Object} options Parsed command-line arguments.
     * @returns {Promise<*>}
     */
    _run(robot: Robot, options: Object): Promise<any>;
}
/** Run subcommands. */
export class Subcommands extends Command {
    /**
     * @param {Object} subparsers The subparsers of argparse to which the command is added.
     * @param {Object<string, Command>} commandDict Dictionary of command names which take parsed options.
     * @param {Array<typeof Command>} subcommands List of subcommands to run.
     */
    constructor(subparsers: Object, commandDict: {
        [x: string]: Command;
    }, subcommands: Array<typeof Command>);
    _subcommands: {};
    /**
     * Implementation of the command.
     * @returns {Promise<*>} Execution of the specific subcommand from the options.
     */
    _run(robot: any, options: any): Promise<any>;
}
/** The commands of main(), in the order of their help. */
export const COMMANDS: (typeof DirectoryCommands | typeof RobotIdCommand)[];
/**
 * Commands related to the directory service.
 */
export class DirectoryCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * List all services in the directory.
 */
export class DirectoryListCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Get entry for a given service in the directory.
 */
export class DirectoryGetCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Register entry for a service in the directory.
 */
export class DirectoryRegisterCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Unregister entry for a service in the directory.
 */
export class DirectoryUnregisterCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Commands related to the payload and payload registration services.
 */
export class PayloadCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * List all payloads registered with the robot.
 */
export class PayloadListCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Register a payload with the robot.
 */
export class PayloadRegisterCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Commands related to the fault service and robot state service (for fault reading).
 */
export class FaultCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Show all faults currently active in robot state.
 */
export class FaultShowCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Watch all faults in robot state and print them out.
 */
export class FaultWatchCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Start, update and terminate experiment logs, start and terminate retro logs and check status of active logs for
 * robot.
 */
export class LogStatusCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Get log status by log id.
 */
export class GetLogCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Get active log bundles for robot.
 */
export class GetActiveLogStatusesCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Give experiment log commands to robot.
 */
export class ExperimentLogCommand extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Start a timed experiment log.
 */
export class StartTimedExperimentLogCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Start a continuous experiment log.
 */
export class StartContinuousExperimentLogCommand extends Command {
    static NAME: string;
    static HELP: string;
    /**
     * Terminate the log after Ctrl-C. A second Ctrl-C does not wait for the termination.
     * @param {LogStatusClient} client
     * @param {string} logId
     */
    static handleKeyboardInterruption(client: LogStatusClient, logId: string): Promise<void>;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Start a retro log.
 */
export class StartRetroLogCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Start a concurrent experiment log, with event-derived data.
 */
export class StartConcurrentLogCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Terminate log gathering process.
 */
export class TerminateLogCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Show robot-id.
 */
export class RobotIdCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Commands related to the data-buffer service.
 */
export class DataBufferCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Send a text-message to the data buffer to be logged.
 */
export class TextMsgCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Send an operator comment to the robot to be logged.
 */
export class OperatorCommentCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Commands for querying the data-service.
 */
export class DataServiceCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/** Parent class for commands grabbing operator comment and events. */
export class GetDataBufferEventsCommentsCommand extends Command {
    constructor(subparsers: any, commandDict: any);
    /**
     * Print output of request in a human-friendly way.
     * @abstract
     * @param {Array} values
     */
    prettyPrint(values: any[]): void;
    _getResult(requestSpec: any, robot: any, options: any, getValuesFn: any): Promise<boolean>;
}
/**
 * Get operator comments from the robot.
 */
export class GetDataBufferCommentsCommand extends GetDataBufferEventsCommentsCommand {
    static NAME: string;
    static HELP: string;
    _run(robot: any, options: any): Promise<boolean>;
    prettyPrint(values: any): void;
}
/**
 * Get events from the robot.
 */
export class GetDataBufferEventsCommand extends GetDataBufferEventsCommentsCommand {
    static NAME: string;
    static HELP: string;
    static _levelName(event: any): string;
    _run(robot: any, options: any): Promise<boolean>;
    prettyPrint(values: any): void;
}
/**
 * Get status of data-buffer on robot.
 */
export class GetDataBufferStatusCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Commands for querying robot state.
 */
export class RobotStateCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Show robot state.
 */
export class FullStateCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Show robot hardware configuration.
 */
export class HardwareConfigurationCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Write robot URDF and mesh to local files.
 */
export class RobotModel extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Show metrics (runtime, etc...).
 */
export class MetricsCommand extends Command {
    static NAME: string;
    static HELP: string;
    /**
     * Converts a timestamp to a human-readable string.
     * @param {Timestamp} timestamp
     * @returns {string} Timestamp string in ISO 8601 format.
     */
    static _timestampStr(timestamp: Timestamp): string;
    /**
     * Convert metric input to human-readable string.
     * @param {import('../../src/bosdyn/api/parameter_pb').Parameter} metric Input metric object to convert.
     * @returns {string} String in the format: Label float_value units.
     */
    static _formatMetric(metric: import("../../src/bosdyn/api/parameter_pb").Parameter): string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Find clock difference between this and the robot clock.
 */
export class TimeSyncCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Show installed license.
 */
export class LicenseCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
    _getLicenseInfo(licenseClient: any, options: any): Promise<void>;
    _getFeatureEnabled(licenseClient: any, options: any): Promise<void>;
}
/**
 * Commands related to the lease service.
 */
export class LeaseCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * List all leases.
 */
export class LeaseListCommand extends Command {
    static NAME: string;
    static HELP: string;
    static _formatLeaseResource(resource: any): string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Commands for interacting with robot estop service.
 */
export class EstopCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Get estop config of estop service.
 */
export class GetEstopConfigCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Get estop status of estop service.
 */
export class GetEstopStatusCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Grab and hold estop until Ctl-C.
 */
export class BecomeEstopCommand extends Command {
    static NAME: string;
    static HELP: string;
    static _RPC_PRINT_CHOICES: string[];
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Old version of BecomeEstopCommand.
 */
export class OldBecomeEstopCommand extends BecomeEstopCommand {
    run(robot: any, options: any): Promise<any>;
}
/**
 * Commands for querying images.
 */
export class ImageCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * List image sources.
 */
export class ListImageSourcesCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Get an image from the robot and write it to an image file.
 */
export class GetImageCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Commands for querying local grid maps.
 */
export class LocalGridCommands extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * List local grid sources.
 */
export class ListLocalGridTypesCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Get local grids from the robot.
 */
export class GetLocalGridsCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Acquire data from the robot and add it in the data buffer with the metadata, or request status.
 */
export class DataAcquisitionCommand extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Capture and save images or metadata specified in the command line arguments.
 */
export class DataAcquisitionRequestCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Get list of different data acquisition capabilities.
 */
export class DataAcquisitionServiceCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _dataTypeWidth: number;
    _dataNameWidth: number;
    _serviceNameWidth: number;
    _hasLiveDataWidth: number;
    /**
     * Print the data acquisition capability.
     * @param {string} dataType Either image or data capabilities.
     * @param {string} dataName The name of the data acquisition capability.
     * @param {string} [serviceName=''] For image capabilities, a service name is required.
     * @param {string} [hasLiveData='']
     */
    _formatAndPrintCapability(dataType: string, dataName: string, serviceName?: string, hasLiveData?: string): void;
    _run(robot: any): Promise<boolean>;
}
/**
 * Get status of an acquisition request based on the request id.
 */
export class DataAcquisitionStatusCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Call GetLiveData based on service name.
 */
export class DataAcquisitionGetLiveDataCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Determine a computer's IP address.
 */
export class HostComputerIPCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Send power commands to the robot.
 */
export class PowerCommand extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Send keepalive commands to the robot.
 */
export class KeepaliveCommand extends Subcommands {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
}
/**
 * Get status of keepalive service.
 */
export class KeepaliveGetStatusCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Remove keepalive policies.
 */
export class KeepaliveRemovePoliciesCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Control the power of the entire robot.
 */
export class PowerRobotCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Control the power of robot payloads.
 */
export class PowerPayloadsCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Control the power of robot wifi radio.
 */
export class PowerWifiRadioCommand extends Command {
    static NAME: string;
    static HELP: string;
    constructor(subparsers: any, commandDict: any);
    _run(robot: any, options: any): Promise<boolean>;
}
/**
 * Get power fan information.
 */
export class PowerFanCommand extends Command {
    static NAME: string;
    static HELP: string;
    _run(robot: any): Promise<boolean>;
}
/**
 * Returns list of <resource_name>:<sequence>, ...N.
 * @param {import('../../src/bosdyn/api/lease_pb').Lease[]} leases
 * @returns {string} List of <resource_name>:[<sequence>], ...N.
 */
export function leaseDetails(leases: import("../../src/bosdyn/api/lease_pb").Lease[]): string;
/**
 * Command-line interface for interacting with robot services.
 * @param {?string[]} [args=null] The arguments, process.argv.slice(2) if null.
 * @returns {Promise<boolean>} Whether the command succeeded.
 */
export function main(args?: string[] | null): Promise<boolean>;
/**
 * The parser of main(), with the commands.
 * @returns {{parser: ArgumentParser, commandDict: Object<string, Command>}}
 */
export function _createParser(): {
    parser: ArgumentParser;
    commandDict: {
        [x: string]: Command;
    };
};
import { LogStatusClient } from "./log_status";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
