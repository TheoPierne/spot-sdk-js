/**
 * Client to access robot info.
 * @extends {BaseClient<RobotIdServiceClient>}
 */
export class RobotIdClient extends BaseClient<RobotIdServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Get the robot's robot/id.proto.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<robotIdPb.RobotId>}
     */
    getId(args?: Object): Promise<robotIdPb.RobotId>;
}
/**
 * Compares two versions like the tuples of version_tuple() in Python, e.g. `version_tuple(v) >= (1, 2, 0)`: the
 * arrays of JS are compared as strings by `<` and `>=` ([1, 10, 0] < [1, 9, 0]).
 * @param {number[]} a A version, e.g. toVersionArray(version).
 * @param {number[]} b Another version, e.g. [1, 2, 0].
 * @returns {number} -1 if a is older, 0 if equal, 1 if newer (a prefix is older, like a shorter tuple).
 */
export function compareVersions(a: number[], b: number[]): number;
/**
 * Return the version as an array for easy comparisons
 * @param {robotIdPb.SoftwareVersion} version The representation of version in proto format.
 * @returns {number[]}
 */
export function toVersionArray(version: robotIdPb.SoftwareVersion): number[];
import { RobotIdServiceClient } from "../../src/bosdyn/api/robot_id_service_grpc_pb";
import { BaseClient } from "./common";
import robotIdPb = require("../../src/bosdyn/api/robot_id_pb");
export { toVersionArray as versionTuple };
