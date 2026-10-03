/**
 * A client calling Spot CAM Power service.
 * @extends {BaseClient<PowerServiceClient>}
 */
export class PowerClient extends BaseClient<PowerServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Retrieve on/off state of device.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<powerPb.PowerStatus>}
     */
    getPowerStatus(args?: Object): Promise<powerPb.PowerStatus>;
    /**
     * Turn on/off the desire device.
     * Should not be used on PTZ for non-IR units as it can cause the stream to crash.
     * If the intent is to reset the PTZ autofocus, try PtzClient.initializeLens instead.
     * If the intent is to recover the PTZ stream in another way, you may need to power cycle the robot.
     * @param {boolean} ptz Turn on/off ptz
     * @param {boolean} aux1 Turn on/off aux1
     * @param {boolean} aux2 Turn on/off aux2
     * @param {boolean} externalMic Turn on/off external mic
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<powerPb.PowerStatus>}
     */
    setPowerStatus(ptz?: boolean, aux1?: boolean, aux2?: boolean, externalMic?: boolean, args?: Object): Promise<powerPb.PowerStatus>;
    /**
     * Turn power off then back on for the desired devices.
     * Should not be used on PTZ for non-IR units as it can cause the stream to crash.
     * If the intent is to reset the PTZ autofocus, try PtzClient.initializeLens instead.
     * If the intent is to recover the PTZ stream in another way, you may need to power cycle the robot.
     * @param {boolean} ptz Turn on/off ptz
     * @param {boolean} aux1 Turn on/off aux1
     * @param {boolean} aux2 Turn on/off aux2
     * @param {boolean} externalMic Turn on/off external mic
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<powerPb.PowerStatus>}
     */
    cyclePower(ptz?: boolean, aux1?: boolean, aux2?: boolean, externalMic?: boolean, args?: Object): Promise<powerPb.PowerStatus>;
    _buildSetPowerStatusRequest(ptz: any, aux1: any, aux2: any, externalMic: any): powerPb.SetPowerStatusRequest;
    _buildCyclePowerRequest(ptz: any, aux1: any, aux2: any, externalMic: any): powerPb.CyclePowerRequest;
    _getPowerStatusFromResponse(response: any): any;
    _setPowerStatusFromResponse(response: any): any;
    _cyclePowerFromResponse(response: any): any;
}
import { PowerServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import powerPb = require("../../../src/bosdyn/api/spot_cam/power_pb");
