'use strict';

const LED_pb = require('../../bosdyn/api/spot_cam/LED_pb');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient } = require('../common');

function* enumerate(it, start = 0) {
  let i = start;
  for (const x of it) {
    yield [i++, x];
  }
}

class LightingClient extends BaseClient {
  static default_service_name = 'spot-cam-lighting';
  static service_type = 'bosdyn.api.spot_cam.LightingService';

  constructor() {
    super(service_grpc_pb.LightingServiceClient);
  }

  get_led_brightness(args) {
    const request = new LED_pb.GetLEDBrightnessRequest();
    return this.call(
      this._stub.getLEDBrightness,
      request,
      this._get_led_brightness_from_response,
      this._lighting_error_from_response,
      args,
    );
  }

  set_led_brightness(brightnesses, args) {
    const request = new LED_pb.SetLEDBrightnessRequest();

    for (const [i, brightness] of enumerate(brightnesses)) {
      if (i >= 4) break;
      request.getBrightnessesMap().set(i, brightness);
    }

    return this.call(
      this._stub.setLEDBrightness,
      request,
      this._set_led_brightness_from_response,
      this._lighting_error_from_response,
      args,
    );
  }

  _get_led_brightness_from_response(response) {
    return response.getBrightnessesList();
  }

  /* eslint-disable no-unused-vars */
  _set_led_brightness_from_response(response) {
    // Pass
  }

  _lighting_error_from_response(response) {
    return null;
  }
  /* eslint-enable no-unused-vars */
}

module.exports = {
  LightingClient,
};
