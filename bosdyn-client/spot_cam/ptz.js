'use strict';

const { FloatValue } = require('google-protobuf/google/protobuf/wrappers_pb');
const ptz_pb = require('../../bosdyn/api/spot_cam/ptz_pb');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, common_header_errors } = require('../common');
const { recenter_angle } = require('../math_helpers');

class PtzClient extends BaseClient {
  static default_service_name = 'spot-cam-ptz';
  static service_type = 'bosdyn.api.spot_cam.PtzService';

  constructor() {
    super(service_grpc_pb.PtzServiceClient);
  }

  list_ptz(args) {
    const request = new ptz_pb.ListPtzRequest();
    return this.call(this._stub.listPtz, request, this._list_ptz_from_response, this._ptz_error_from_response, args);
  }

  list_ptz_async(args) {
    const request = new ptz_pb.ListPtzRequest();
    return this.call_async(
      this._stub.ListPtz,
      request,
      this._list_ptz_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  get_ptz_position(ptz_desc, args) {
    const request = new ptz_pb.GetPtzPositionRequest().setPtz(ptz_desc);
    return this.call(
      this._stub.getPtzPosition,
      request,
      this._get_ptz_position_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  get_ptz_position_async(ptz_desc, args) {
    const request = new ptz_pb.GetPtzPositionRequest().setPtz(ptz_desc);
    return this.call_async(
      this._stub.getPtzPosition,
      request,
      this._get_ptz_position_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  get_ptz_velocity(ptz_desc, args) {
    const request = new ptz_pb.GetPtzVelocityRequest().setPtz(ptz_desc);
    return this.call(
      this._stub.getPtzVelocity,
      request,
      this._get_ptz_velocity_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  get_ptz_velocity_async(ptz_desc, args) {
    const request = new ptz_pb.GetPtzVelocityRequest().setPtz(ptz_desc);
    return this.call_async(
      this._stub.getPtzVelocity,
      request,
      this._get_ptz_velocity_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  set_ptz_position(ptz_desc, pan, tilt, zoom, args) {
    const p = new FloatValue().setValue(pan);
    const t = new FloatValue().setValue(tilt);
    const z = new FloatValue().setValue(zoom);
    // eslint-disable-next-line
    const ptz_position = new ptz_pb.PtzPosition().setPtz(ptz_desc).setPan(p).setTilt(t).setZoom(z);
    const request = new ptz_pb.SetPtzPositionRequest().setPosition(ptz_position);
    return this.call(
      this._stub.setPtzPosition,
      request,
      this._set_ptz_position_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  set_ptz_position_async(ptz_desc, pan, tilt, zoom, args) {
    const p = new FloatValue().setValue(pan);
    const t = new FloatValue().setValue(tilt);
    const z = new FloatValue().setValue(zoom);
    // eslint-disable-next-line
    const ptz_position = new ptz_pb.PtzPosition().setPtz(ptz_desc).setPan(p).setTilt(t).setZoom(z);
    const request = new ptz_pb.SetPtzPositionRequest().setPosition(ptz_position);
    return this.call_async(
      this._stub.setPtzPosition,
      request,
      this._set_ptz_position_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  set_ptz_velocity(ptz_desc, pan, tilt, zoom, args) {
    const p = new FloatValue().setValue(pan);
    const t = new FloatValue().setValue(tilt);
    const z = new FloatValue().setValue(zoom);
    // eslint-disable-next-line
    const ptz_velocity = new ptz_pb.PtzVelocity().setPtz(ptz_desc).setPan(p).setTilt(t).setZoom(z);
    const request = new ptz_pb.SetPtzVelocityRequest().setVelocity(ptz_velocity);
    return this.call(
      this._stub.setPtzVelocity,
      request,
      this._set_ptz_velocity_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  set_ptz_velocity_async(ptz_desc, pan, tilt, zoom, args) {
    const p = new FloatValue().setValue(pan);
    const t = new FloatValue().setValue(tilt);
    const z = new FloatValue().setValue(zoom);
    // eslint-disable-next-line
    const ptz_velocity = new ptz_pb.PtzVelocity().setPtz(ptz_desc).setPan(p).setTilt(t).setZoom(z);
    const request = new ptz_pb.SetPtzVelocityRequest().setVelocity(ptz_velocity);
    return this.call_async(
      this._stub.setPtzVelocity,
      request,
      this._set_ptz_velocity_from_response,
      this._ptz_error_from_response,
      args,
    );
  }

  initialize_lens(args) {
    const request = new ptz_pb.InitializeLensRequest();
    return this.call(
      this._stub.initializeLens,
      request,
      this._initialize_lens_from_response,
      common_header_errors,
      args,
    );
  }

  initialize_lens_async(args) {
    const request = new ptz_pb.InitializeLensRequest();
    return this.call_async(
      this._stub.initializeLens,
      request,
      this._initialize_lens_from_response,
      common_header_errors,
      args,
    );
  }

  _list_ptz_from_response(response) {
    return response.getPtzsList();
  }

  _get_ptz_position_from_response(response) {
    return response.getPosition();
  }

  _get_ptz_velocity_from_response(response) {
    return response.getVelocity();
  }

  _set_ptz_position_from_response(response) {
    return response.getPosition();
  }

  _set_ptz_velocity_from_response(response) {
    return response.getVelocity();
  }

  /* eslint-disable no-unused-vars */
  _ptz_error_from_response(response) {
    return null;
  }
  /* eslint-enable no-unused-vars */

  _initialize_lens_from_response(response) {
    return response;
  }

  _get_ptz_focus_from_response(response) {
    return response.getPtzFocus();
  }

  _set_ptz_focus_from_response(response) {
    return response.getPtzFocus();
  }
}

/**
 * Shift the pan angle (degrees) so that it is in the [0,360] range.
 * @param {number} pan The angle in degrees to be shift.
 * @returns {number}
 */
function shift_pan_angle(pan) {
  return recenter_angle(pan, 0, 360);
}

module.exports = {
  PtzClient,
  shift_pan_angle,
};
