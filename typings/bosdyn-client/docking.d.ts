export type Lease = import("./lease").Lease;
export type Robot = import("./robot").Robot;
export type Timestamp = import("google-protobuf/google/protobuf/timestamp_pb").Timestamp;
/**
 * @typedef {import('./lease').Lease} Lease
 */
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * @typedef {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} Timestamp
 */
/**
 * A client for the docking service to help issue DockingCommand and get state.
 * Clients are expected to issue a single DockingCommand and then periodically
 * check the status of its execution.
 * This service requires ownership over the robot, in the form of a lease and timesync.
 * @extends {BaseClient<DockingServiceClient>}
 */
export class DockingClient extends BaseClient<DockingServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Issue a DockingCommandRequest to the robot.
     * @param {number} stationId The ID of the docking station to dock at.
     * @param {string} clockIdentifier Identifier provided by the time sync service.
     * @param {Timestamp} endTime Expiry time of the command in robot time.
     * @param {dockingPb.PrepPoseBehavior} [prepPoseBehavior=null] How and if to use the pre-dock pose.
     * @param {Lease} [lease=null] Leave empty to have the lease filled in by the LeaseWallet
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<number>}
     */
    dockingCommand(stationId: number, clockIdentifier: string, endTime: Timestamp, prepPoseBehavior?: dockingPb.PrepPoseBehavior, lease?: Lease, args?: Object): Promise<number>;
    /**
     * Identical to dockingCommand(), except will return the full DockingCommandResponse.
     * @param {number} stationId The ID of the docking station to dock at.
     * @param {string} clockIdentifier Identifier provided by the time sync service.
     * @param {Timestamp} endTime Expiry time of the command in robot time.
     * @param {dockingPb.PrepPoseBehavior} [prepPoseBehavior=null] How and if to use the pre-dock pose.
     * @param {Lease} [lease=null] Leave empty to have the lease filled in by the LeaseWallet
     * @param {boolean} requireFiducial Whether to require fiducial.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dockingPb.DockingCommandResponse>}
     */
    dockingCommandFull(stationId: number, clockIdentifier: string, endTime: Timestamp, prepPoseBehavior?: dockingPb.PrepPoseBehavior, lease?: Lease, requireFiducial?: boolean, args?: Object): Promise<dockingPb.DockingCommandResponse>;
    /**
     * Check the status of a previously issued docking command.
     * @param {number} commandId The ID returned from a previous docking_command call.
     * @param {Timestamp} endTime Expiry time of the command in robot time.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dockingPb.DockingCommandFeedbackResponse>}
     */
    dockingCommandFeedbackFull(commandId: number, endTime?: Timestamp, args?: Object): Promise<dockingPb.DockingCommandFeedbackResponse>;
    /**
     * Get the docking config stored on the robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dockingPb.ConfigRange>}
     */
    getDockingConfig(args?: Object): Promise<dockingPb.ConfigRange>;
    /**
     * Get docking state from the robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dockingPb.DockState>}
     */
    getDockingState(args?: Object): Promise<dockingPb.DockState>;
    _dockingCommandRequest(lease: any, stationId: any, clockIdentifier: any, endTime: any, prepPoseBehavior: any, requireFiducial?: boolean): dockingPb.DockingCommandRequest;
    _dockingCommandFeedbackRequest(commandId: any, endTime?: null): dockingPb.DockingCommandFeedbackRequest;
    _dockingIdFromResponse(response: any): any;
    _dockingStatusFromResponse(response: any): any;
    _dockingConfigFromResponse(response: any): any;
    _dockingStateFromResponse(response: any): any;
}
/**
 * Blocking helper that takes control of the robot and docks it.
 * @param  {Robot} robot The instance of the robot to control.
 * @param  {number} dockId The ID of the dock to dock at.
 * @param  {number} [numRetries=4] Optional, number of attempts.
 * @param  {number} [timeoutMsec=30_000]
 * @returns {Promise<number>} The number of retries required
 */
export function blockingDockRobot(robot: Robot, dockId: number, numRetries?: number, timeoutMsec?: number): Promise<number>;
/**
 * Blocking helper that takes control of the robot and takes it to the prep pose only.
 * @param  {Robot} robot The instance of the robot to control.
 * @param  {number} dockId The ID of the dock to use.
 * @param  {number} [timeout=20_000] Timeout in milliseconds
 * @returns {Promise<void>}
 */
export function blockingGoToPrepPose(robot: Robot, dockId: number, timeout?: number): Promise<void>;
/**
 * Blocking helper that undocks the robot from the currently docked dock.
 * @param {Robot} robot The instance of the robot to control.
 * @param {number} [timeout=20_000] Timeout in milliseconds
 * @returns {Promise<void>}
 */
export function blockingUndock(robot: Robot, timeout?: number): Promise<void>;
/**
 * Blocking helper to get dock ID that robot is currently docked at, Null if not docked.
 * @param {Robot} robot The instance of the robot to get dock id.
 * @returns {Promise<number|null>}
 */
export function getDockId(robot: Robot): Promise<number | null>;
import { DockingServiceClient } from "../../src/bosdyn/api/docking/docking_service_grpc_pb";
import { BaseClient } from "./common";
import dockingPb = require("../../src/bosdyn/api/docking/docking_pb");
