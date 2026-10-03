export type SystemFault = import("../../../src/bosdyn/api/robot_state_pb").SystemFault;
/**
 * A client calling Spot CAM Health service.
 * @extends {BaseClient<HealthServiceClient>}
 */
export class HealthClient extends BaseClient<HealthServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Clear out the events list of the BITStatus structure.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    clearBitEvents(args?: Object): Promise<void>;
    /**
     * Retrieve (system events, degradations) as an object of two lists.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<{events: SystemFault[], degradations: healthPb.GetBITStatusResponse.Degradation[]}>}
     */
    getBitStatus(args?: Object): Promise<{
        events: SystemFault[];
        degradations: healthPb.GetBITStatusResponse.Degradation[];
    }>;
    /**
     * Retrieve a list of thermometers measuring the temperature (mC) of corresponding on-board devices.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<healthPb.Temperature[]>}
     */
    getTemperature(args?: Object): Promise<healthPb.Temperature[]>;
    /**
     * Retrieve a list of thermometers measuring the temperature (mC) of corresponding on-board devices.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<any[]>}
     */
    getSystemLog(args?: Object): Promise<any[]>;
    _clearBitEventsFromResponse(): void;
    _getBitStatusFromResponse(response: any): {
        events: any;
        degradations: any;
    };
    _getTemperatureFromResponse(response: any): any;
    _getSystemLogFromResponse(responses: any): Buffer<ArrayBuffer>;
}
import { HealthServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import healthPb = require("../../../src/bosdyn/api/spot_cam/health_pb");
import { Buffer } from "buffer";
