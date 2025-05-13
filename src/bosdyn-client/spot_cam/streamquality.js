'use strict';

const wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb');

const { StreamQualityServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const streamqualityPb = require('../../bosdyn/api/spot_cam/streamquality_pb');

const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * A client calling Spot CAM StreamQuality service.
 * @extends {BaseClient<StreamQualityClient>}
 */
class StreamQualityClient extends BaseClient {
  static defaultServiceName = 'spot-cam-stream-quality';
  static serviceType = 'bosdyn.api.spot_cam.StreamQualityService';

  constructor() {
    super(StreamQualityServiceClient);
  }

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
  setStreamParams(
    {
      targetBitrate = null,
      refreshInterval = null,
      idrInterval = null,
      awbMode = null,
      autoExposure = null,
      syncAutoExposure = null,
      manualExposure = null,
    } = {},
    args,
  ) {
    const request = this._buildSetStreamParamsRequest(
      targetBitrate,
      refreshInterval,
      idrInterval,
      awbMode,
      autoExposure,
      syncAutoExposure,
      manualExposure,
    );
    return this.call(
      this._stub.setStreamParams,
      request,
      this._paramsFromResponse,
      _streamqualityErrorFromResponse,
      args,
    );
  }

  /**
   * Get image quality and processing settings.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<streamqualityPb.StreamParams>}
   */
  getStreamParams(args) {
    const request = new streamqualityPb.GetStreamParamsRequest();
    return this.call(
      this._stub.getStreamParams,
      request,
      this._paramsFromResponse,
      _streamqualityErrorFromResponse,
      args,
    );
  }

  /**
   * Enable congestion control.
   * @param {boolean} enable Turn on/off congestion control
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<streamqualityPb.EnableCongestionControlResponse>}
   */
  enableCongestionControl(enable = true, args) {
    const request = new streamqualityPb.EnableCongestionControlRequest().setEnableCongestionControl(enable);
    return this.call(this._stub.enableCongestionControl, request, null, _streamqualityErrorFromResponse, args);
  }

  _buildSetStreamParamsRequest(
    targetBitrate,
    refreshInterval,
    idrInterval,
    awbMode,
    autoExposure,
    syncAutoExposure,
    manualExposure,
  ) {
    const exposureArgs = [autoExposure, syncAutoExposure, manualExposure];

    if (exposureArgs.reduce((count, arg) => count + (arg !== null && arg !== undefined ? 1 : 0), 0) > 1) {
      throw new RangeError('Only one exposure argument can be specified at a time.');
    }

    const streamParams = new streamqualityPb.StreamParams();

    if (targetBitrate) streamParams.setTargetbitrate(new wrappers_pb.Int64Value().setValue(targetBitrate));
    if (refreshInterval) streamParams.setRefreshinterval(new wrappers_pb.Int64Value().setValue(refreshInterval));
    if (idrInterval) streamParams.setIdrinterval(new wrappers_pb.Int64Value().setValue(idrInterval));
    if (awbMode) streamParams.setAwb(new streamqualityPb.StreamParams.AwbMode().setAwb(awbMode));
    if (autoExposure) {
      streamParams.setAutoExposure(new streamqualityPb.StreamParams.AutoExposure());
    }
    if (syncAutoExposure) {
      streamParams.setSyncExposure(
        new streamqualityPb.StreamParams.SyncAutoExposure().setBrightnessTarget(syncAutoExposure),
      );
    }
    if (manualExposure) {
      streamParams.setManualExposure(new streamqualityPb.StreamParams.ManualExposure().setExposure(manualExposure));
    }

    const request = new streamqualityPb.SetStreamParamsRequest().setParams(streamParams);

    return request;
  }

  _paramsFromResponse(response) {
    return response.getParams();
  }
}

const _streamqualityErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  StreamQualityClient,
};
