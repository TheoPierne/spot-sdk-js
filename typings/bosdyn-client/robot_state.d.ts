export type RpcError = import("./exceptions").RpcError;
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 */
/**
 * Client for the RobotState service.
 * @extends {BaseClient<RobotStateServiceClient>}
 */
export class RobotStateClient extends BaseClient<RobotStateServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    static _getRobotStateRequest(): robotStatePb.RobotStateRequest;
    static _getRobotMetricsRequest(): robotStatePb.RobotMetricsRequest;
    static _getRobotHardwareConfigurationRequest(): robotStatePb.RobotHardwareConfigurationRequest;
    static _getRobotLinkModelRequest(linkName: any): robotStatePb.RobotLinkModelRequest;
    constructor();
    /**
     * Obtain current state of the robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<robotStatePb.RobotState>} The current robot state.
     * @throws {RpcError} Problem communicating with the robot.
     */
    getRobotState(args?: Object): Promise<robotStatePb.RobotState>;
    /**
     * Obtain robot metrics, such as distance traveled or time powered on.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<robotStatePb.RobotMetrics>} All of the current robot metrics.
     * @throws {RpcError} Problem communicating with the robot.
     */
    getRobotMetrics(args?: Object): Promise<robotStatePb.RobotMetrics>;
    /**
     * Obtain current hardware configuration of robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<robotStatePb.HardwareConfiguration>} The hardware configuration,
     * which includes the link names.
     * @throws {RpcError} Problem communicating with the robot.
     */
    getRobotHardwareConfiguration(args?: Object): Promise<robotStatePb.HardwareConfiguration>;
    /**
     * Obtain link model OBJ for a specific link.
     * @param {string} linkName Name of the link to get the model.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<robotStatePb.Skeleton.Link.ObjModel>} The bosdyn.api.Skeleton.Link.ObjModel for
     * the specified link.
     * @throws {RpcError} Problem communicating with the robot.
     */
    getRobotLinkModel(linkName: string, args?: Object): Promise<robotStatePb.Skeleton.Link.ObjModel>;
    /**
     * Convenience function which first requests a robots hardware configuration followed by
     * requests to get link models for all robot links.
     * @returns {Promise<robotStatePb.HardwareConfiguration>} robot_state_pb.HardwareConfiguration with
     * all link models filled out.
     */
    getHardwareConfigWithLinkInfo(): Promise<robotStatePb.HardwareConfiguration>;
}
/**
 * Client for the RobotState service.
 *
 * This client is in BETA and may undergo changes in future releases.
 * @extends {BaseClient<RobotStateStreamingServiceClient>}
 */
export class RobotStateStreamingClient extends BaseClient<RobotStateStreamingServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor(name?: null);
    /**
     * Returns an iterator providing current state updates of the robot.
     * @returns {any}
     */
    getRobotStateStream(): any;
}
/**
 * Check if the robot has an arm attached.
 * @param {RobotStateClient} stateClient RobotStateClient to query for robot state.
 * @param {?number} [timeout=null] Timeout of the RPC in milliseconds (no deadline if null, like None in Python).
 * @returns {Promise<boolean>} Returns true if robot has an arm, false otherwise.
 * @throws {RpcError} A problem occurred trying to communicate with the robot.
 */
export function hasArm(stateClient: RobotStateClient, timeout?: number | null): Promise<boolean>;
import { RobotStateServiceClient } from "../../src/bosdyn/api/robot_state_service_grpc_pb";
import { BaseClient } from "./common.js";
import robotStatePb = require("../../src/bosdyn/api/robot_state_pb.js");
import { RobotStateStreamingServiceClient } from "../../src/bosdyn/api/robot_state_service_grpc_pb";
