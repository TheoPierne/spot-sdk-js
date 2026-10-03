export type SoftwareVersion = import("../../../src/bosdyn/api/robot_id_pb").SoftwareVersion;
/**
 * @typedef {import('../../../src/bosdyn/api/robot_id_pb').SoftwareVersion} SoftwareVersion
 */
/**
 * A client calling Spot CAM Version service.
 * @extends {BaseClient<VersionServiceClient>}
 */
export class VersionClient extends BaseClient<VersionServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Retrieves the Spot CAM's current software version.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<SoftwareVersion>}
     */
    getSoftwareVersion(args?: Object): Promise<SoftwareVersion>;
    /**
     * Retrieves the Spot CAM's full version information.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<versionPb.GetSoftwareVersionResponse>}
     */
    getSoftwareVersionFull(args?: Object): Promise<versionPb.GetSoftwareVersionResponse>;
    _getSoftwareVersionFromResponse(response: any): any;
}
import { VersionServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import versionPb = require("../../../src/bosdyn/api/spot_cam/version_pb");
