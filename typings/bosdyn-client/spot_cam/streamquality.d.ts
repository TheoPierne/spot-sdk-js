/**
 * A client calling Spot CAM StreamQuality service.
 * @extends {BaseClient<StreamQualityServiceClient>}
 */
export class StreamQualityClient extends BaseClient<StreamQualityServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Change image compression and postprocessing.
     * At most one of autoExposure, syncAutoExposure, and manualExposure can be specified.
     * The others should be set to null if one is specified. Otherwise, they should all be null.
     * @param {Object} options The options to control compression and postprocessing
     * @param {number} [options.targetBitrate] The compression level in target BPS
     * @param {number} [options.refreshInterval] How often the entire feed should be refreshed (in frames)
     * @param {number} [options.idrInterval] How often an IDR message should get sent (in frames)
     * @param {streamqualityPb.StreamParams.AwbModeEnum} [options.awbMode] Options for automatic white balancing mode
     * @param {streamqualityPb.StreamParams.AutoExposure} [options.autoExposure] Runs exposure independently on
     * each of the ring cameras
     * @param {streamqualityPb.StreamParams.SyncAutoExposure} [options.syncAutoExposure] Runs a single autoexposure
     * algorithm that takes into account data from all ring cameras
     * @param {streamqualityPb.StreamParams.ManualExposure} [options.manualExposure] Manual exposure sets an exposure
     * for all ring cameras
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<streamqualityPb.StreamParams>}
     */
    setStreamParams({ targetBitrate, refreshInterval, idrInterval, awbMode, autoExposure, syncAutoExposure, manualExposure, }?: {
        targetBitrate?: number | undefined;
        refreshInterval?: number | undefined;
        idrInterval?: number | undefined;
        awbMode?: streamqualityPb.StreamParams.AwbModeEnum | undefined;
        autoExposure?: streamqualityPb.StreamParams.AutoExposure | undefined;
        syncAutoExposure?: streamqualityPb.StreamParams.SyncAutoExposure | undefined;
        manualExposure?: streamqualityPb.StreamParams.ManualExposure | undefined;
    }, args?: Object): Promise<streamqualityPb.StreamParams>;
    /**
     * Get image quality and processing settings.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<streamqualityPb.StreamParams>}
     */
    getStreamParams(args?: Object): Promise<streamqualityPb.StreamParams>;
    /**
     * Enable congestion control.
     * @param {boolean} enable Turn on/off congestion control
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<streamqualityPb.EnableCongestionControlResponse>}
     */
    enableCongestionControl(enable?: boolean, args?: Object): Promise<streamqualityPb.EnableCongestionControlResponse>;
    _buildSetStreamParamsRequest(targetBitrate: any, refreshInterval: any, idrInterval: any, awbMode: any, autoExposure: any, syncAutoExposure: any, manualExposure: any): streamqualityPb.SetStreamParamsRequest;
    _paramsFromResponse(response: any): any;
}
import { StreamQualityServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import streamqualityPb = require("../../../src/bosdyn/api/spot_cam/streamquality_pb");
