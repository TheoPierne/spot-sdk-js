/**
 * A client calling Spot CAM Lighting service.
 * @extends {BaseClient<LightingServiceClient>}
 */
export class LightingClient extends BaseClient<LightingServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Retrieve the brightness value [0, 1] of each LED at indices [0, max).
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<number[]>}
     */
    getLedBrightness(args?: Object): Promise<number[]>;
    /**
     * Set the brightness value [0, 1] of each LED at indices [0, max).
     * @param {number[]} brightnesses An array of number representing brightnesses
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    setLedBrightness(brightnesses: number[], args?: Object): Promise<void>;
    _getLedBrightnessFromResponse(response: any): any;
    _setLedBrightnessFromResponse(): void;
}
import { LightingServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
