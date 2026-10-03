export type JspbMap = import("google-protobuf").Map<any, any>;
/**
 * @typedef {import('google-protobuf').Map} JspbMap
 */
/**
 * Client to acquire robot license.
 * @extends {BaseClient<LicenseServiceClient>}
 */
export class LicenseClient extends BaseClient<LicenseServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor(name?: null);
    /**
     * Get the robot's installed license.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<licensePb.LicenseInfo>}
     */
    getLicenseInfo(args?: Object): Promise<licensePb.LicenseInfo>;
    /**
     * Check if the installed license allow a list of feature codes.
     * @param {string[]} featureList Features code.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<JspbMap>}
     */
    getFeatureEnabled(featureList?: string[], args?: Object): Promise<JspbMap>;
}
import { LicenseServiceClient } from "../../src/bosdyn/api/license_service_grpc_pb";
import { BaseClient } from "./common";
import licensePb = require("../../src/bosdyn/api/license_pb");
