/**
 * A client for payloads to coordinate software updates with a robot.
 * @extends {BaseClient<PayloadSoftwareUpdateServiceClient>}
 */
export class PayloadSoftwareUpdate extends BaseClient<PayloadSoftwareUpdateServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    /**
     * Make a SendCurrentVersionInfoRequest message using the supplied information.
     * @param {string} packageName Name of the package, e.g., "coreio".
     * @param {SoftwareVersion|number[]} version Current semantic version of the installed software: a
     * SoftwareVersion, or [major, minor, patch].
     * @param {number|Date|Timestamp} releaseDate Release date of the currently installed software: a number of
     * seconds since the epoch (like the Python float), a Date or a Timestamp.
     * @param {string} buildId Unique identifier of the build.
     * @returns {SendCurrentVersionInfoRequest} Message communicating to Spot the version information of the
     * currently installed payload software.
     */
    static makeInfoRequest(packageName: string, version: SoftwareVersion | number[], releaseDate: number | Date | Timestamp, buildId: string): SendCurrentVersionInfoRequest;
    constructor();
    /**
     * Send version information about the currently installed payload software to Spot.
     * @param {string} packageName Name of the package, e.g., "coreio".
     * @param {SoftwareVersion|number[]} version Current semantic version of the installed software.
     * @param {number|Date|Timestamp} releaseDate Release date of the currently installed software.
     * @param {string} buildId Unique identifier of the build.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<SendCurrentVersionInfoResponse>}
     */
    sendCurrentSoftwareInfo(packageName: string, version: SoftwareVersion | number[], releaseDate: number | Date | Timestamp, buildId: string, args?: Object): Promise<SendCurrentVersionInfoResponse>;
    /**
     * Get a list of package information for the named package(s).
     * @param {string|string[]} packagesNames The package name or array of package names to query.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<GetAvailableSoftwareUpdatesResponse>}
     */
    getAvailableUpdates(packagesNames: string | string[], args?: Object): Promise<GetAvailableSoftwareUpdatesResponse>;
    /**
     * Send a status update of a payload software installation operation to Spot.
     * @param {string} packageName Name of the package being updated
     * @param {*} status Status code of installation operation
     * @param {*} errorCode Error code of the installation operation, or ERROR_NONE if no error has been encountered.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<import('../../src/bosdyn/api/payload_software_update_pb').SendSoftwareUpdateStatusResponse>}
     */
    sendInstallationStatus(packageName: string, status: any, errorCode: any, args?: Object): Promise<import("../../src/bosdyn/api/payload_software_update_pb").SendSoftwareUpdateStatusResponse>;
}
import { PayloadSoftwareUpdateServiceClient } from "../../src/bosdyn/api/payload_software_update_service_grpc_pb";
import { BaseClient } from "./common";
import { SoftwareVersion } from "../../src/bosdyn/api/robot_id_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { SendCurrentVersionInfoResponse } from "../../src/bosdyn/api/payload_software_update_pb";
import { GetAvailableSoftwareUpdatesResponse } from "../../src/bosdyn/api/payload_software_update_pb";
import { SendCurrentVersionInfoRequest } from "../../src/bosdyn/api/payload_software_update_pb";
export { PayloadSoftwareUpdate as PayloadSoftwareUpdateClient };
