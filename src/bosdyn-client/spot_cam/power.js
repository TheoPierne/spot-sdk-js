'use strict';

const { BoolValue } = require('google-protobuf/google/protobuf/wrappers_pb');
const powerPb = require('../../bosdyn/api/spot_cam/power_pb');
const { PowerServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * A client calling Spot CAM Power service.
 * @extends {BaseClient<PowerServiceClient>}
 */
class PowerClient extends BaseClient {
  static defaultServiceName = 'spot-cam-power';
  static serviceType = 'bosdyn.api.spot_cam.PowerService';

  constructor() {
    super(PowerServiceClient);
  }

  /**
   * Retrieve on/off state of device.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<powerPb.PowerStatus>}
   */
  getPowerStatus(args) {
    const request = new powerPb.GetPowerStatusRequest();
    return this.call(
      this._stub.getPowerStatus,
      request,
      this._getPowerStatusFromResponse,
      _powerErrorFromResponse,
      args,
    );
  }

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
  setPowerStatus(ptz = null, aux1 = null, aux2 = null, externalMic = null, args) {
    const request = this._buildSetPowerStatusRequest(ptz, aux1, aux2, externalMic);
    return this.call(
      this._stub.setPowerStatus,
      request,
      this._setPowerStatusFromResponse,
      _powerErrorFromResponse,
      args,
    );
  }

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
  cyclePower(ptz = null, aux1 = null, aux2 = null, externalMic = null, args) {
    const request = this._buildCyclePowerRequest(ptz, aux1, aux2, externalMic);
    return this.call(this._stub.cyclePower, request, this._cyclePowerFromResponse, _powerErrorFromResponse, args);
  }

  _buildSetPowerStatusRequest(ptz, aux1, aux2, externalMic) {
    return new powerPb.SetPowerStatusRequest().setStatus(
      new powerPb.PowerStatus()
        .setPtz(new BoolValue().setValue(ptz))
        .setAux1(new BoolValue().setValue(aux1))
        .setAux2(new BoolValue().setValue(aux2))
        .setExternalMic(new BoolValue().setValue(externalMic)),
    );
  }

  _buildCyclePowerRequest(ptz, aux1, aux2, externalMic) {
    return new powerPb.CyclePowerRequest().setStatus(
      new powerPb.PowerStatus()
        .setPtz(new BoolValue().setValue(ptz))
        .setAux1(new BoolValue().setValue(aux1))
        .setAux2(new BoolValue().setValue(aux2))
        .setExternalMic(new BoolValue().setValue(externalMic)),
    );
  }

  _getPowerStatusFromResponse(response) {
    return response.getStatus();
  }

  _setPowerStatusFromResponse(response) {
    return response.getStatus();
  }

  _cyclePowerFromResponse(response) {
    return response.getStatus();
  }
}

const _powerErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  PowerClient,
};
