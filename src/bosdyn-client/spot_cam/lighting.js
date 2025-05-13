'use strict';

const LED_pb = require('../../bosdyn/api/spot_cam/LED_pb');
const { LightingServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

function* enumerate(it, start = 0) {
  let i = start;
  for (const x of it) {
    yield [i++, x];
  }
}

/**
 * A client calling Spot CAM Lighting service.
 * @extends {BaseClient<LightingServiceClient>}
 */
class LightingClient extends BaseClient {
  static defaultServiceName = 'spot-cam-lighting';
  static serviceType = 'bosdyn.api.spot_cam.LightingService';

  constructor() {
    super(LightingServiceClient);
  }

  /**
   * Retrieve the brightness value [0, 1] of each LED at indices [0, max).
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<number[]>}
   */
  getLedBrightness(args) {
    const request = new LED_pb.GetLEDBrightnessRequest();
    return this.call(
      this._stub.getLEDBrightness,
      request,
      this._getLedBrightnessFromResponse,
      _lightingErrorFromResponse,
      args,
    );
  }

  /**
   * Set the brightness value [0, 1] of each LED at indices [0, max).
   * @param {number[]} brightnesses An array of number representing brightnesses
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<void>}
   */
  setLedBrightness(brightnesses, args) {
    const request = new LED_pb.SetLEDBrightnessRequest();

    for (const [i, brightness] of enumerate(brightnesses)) {
      if (i >= 4) break;
      request.getBrightnessesMap().set(i, brightness);
    }

    return this.call(
      this._stub.setLEDBrightness,
      request,
      this._setLedBrightnessFromResponse,
      _lightingErrorFromResponse,
      args,
    );
  }

  _getLedBrightnessFromResponse(response) {
    return response.getBrightnessesList();
  }

  _setLedBrightnessFromResponse() {
    // Pass
  }
}

const _lightingErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  LightingClient,
};
