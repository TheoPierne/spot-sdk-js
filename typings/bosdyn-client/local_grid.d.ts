export type RpcError = import("./exceptions").RpcError;
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 */
/**
 * Client to access local grid local_grids from the robot.
 * @extends {BaseClient<LocalGridServiceClient>}
 */
export class LocalGridClient extends BaseClient<LocalGridServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Get a list of the local_grid types available from the robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<localGridPb.LocalGridType[]>} A list of the different types of local grids.
     * @throws {RpcError} Problem communicating with the robot.
     */
    getLocalGridTypes(args?: Object): Promise<localGridPb.LocalGridType[]>;
    /**
     * Get a selection of local_grids of specified types.
     * @param {string[]} localGridTypeNames List of strings specifying types local_grids to request.
     * Available local_grid types may be requested using get_local_grid_types().
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<localGridPb.LocalGridResponse[]>} A list of LocalGridResponseProtos,
     * each containing a local_grid or an error status code.
     * @throws {RpcError} Problem communicating with the robot.
     */
    getLocalGrids(localGridTypeNames: string[], args?: Object): Promise<localGridPb.LocalGridResponse[]>;
}
import { LocalGridServiceClient } from "../../src/bosdyn/api/local_grid_service_grpc_pb.js";
import { BaseClient } from "./common.js";
import localGridPb = require("../../src/bosdyn/api/local_grid_pb.js");
