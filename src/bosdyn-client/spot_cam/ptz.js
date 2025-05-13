'use strict';

const { FloatValue, Int32Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const ptzPb = require('../../bosdyn/api/spot_cam/ptz_pb');
const { PtzServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');

const { BaseClient, commonHeaderErrors } = require('../common');
const { recenterAngle } = require('../math_helpers');

/**
 * A client calling Spot CAM Ptz service.
 * @extends {BaseClient<PtzServiceClient>}
 */
class PtzClient extends BaseClient {
  static defaultServiceName = 'spot-cam-ptz';
  static serviceType = 'bosdyn.api.spot_cam.PtzService';

  constructor() {
    super(PtzServiceClient);
  }

  /**
   * List all the available ptzs
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<ptzPb.PtzDescription[]>}
   */
  listPtz(args) {
    const request = new ptzPb.ListPtzRequest();
    return this.call(this._stub.listPtz, request, this._list_ptz_from_response, this._ptz_error_from_response, args);
  }

  /**
   * Position of the specified ptz
   * @param {ptzPb.PtzDescription} ptzDesc The ptz from which to retrieve the position
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<ptzPb.PtzPosition>}
   */
  getPtzPosition(ptzDesc, args) {
    const request = new ptzPb.GetPtzPositionRequest().setPtz(ptzDesc);
    return this.call(this._stub.getPtzPosition, request, this._getPtzPositionFromResponse, commonHeaderErrors, args);
  }

  /**
   * Velocity of the specified ptz
   * @param {ptzPb.PtzDescription} ptzDesc The ptz from which to retrieve the velocity
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<ptzPb.PtzVelocity>}
   */
  getPtzVelocity(ptzDesc, args) {
    const request = new ptzPb.GetPtzVelocityRequest().setPtz(ptzDesc);
    return this.call(this._stub.getPtzVelocity, request, this._getPtzVelocityFromResponse, commonHeaderErrors, args);
  }

  /**
   * Set position of the specified ptz in PTZ-space
   * @param {ptzPb.PtzDescription} ptzDesc The ptz from which to apply the position
   * @param {number} pan The new pan value for the position
   * @param {number} tilt The new tilt value for the position
   * @param {number} zoom The new zoom value for the position
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<ptzPb.PtzPosition>}
   */
  setPtzPosition(ptzDesc, pan, tilt, zoom, args) {
    const ptzPosition = new ptzPb.PtzPosition()
      .setPtz(ptzDesc)
      .setPan(new FloatValue().setValue(pan))
      .setTilt(new FloatValue().setValue(tilt))
      .setZoom(new FloatValue().setValue(zoom));
    const request = new ptzPb.SetPtzPositionRequest().setPosition(ptzPosition);
    return this.call(this._stub.setPtzPosition, request, this._setPtzPositionFromResponse, commonHeaderErrors, args);
  }

  /**
   * Set velocity of the specified ptz in PTZ-space
   * @param {ptzPb.PtzDescription} ptzDesc The ptz from which to apply the position
   * @param {number} pan The new pan value for the velocity
   * @param {number} tilt The new tilt value for the velocity
   * @param {number} zoom The new zoom value for the velocity
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<ptzPb.PtzVelocity>}
   */
  setPtzVelocity(ptzDesc, pan, tilt, zoom, args) {
    const ptzVelocity = new ptzPb.PtzVelocity()
      .setPtz(ptzDesc)
      .setPan(new FloatValue().setValue(pan))
      .setTilt(new FloatValue().setValue(tilt))
      .setZoom(new FloatValue().setValue(zoom));
    const request = new ptzPb.SetPtzVelocityRequest().setVelocity(ptzVelocity);
    return this.call(this._stub.setPtzVelocity, request, this._setPtzVelocityFromResponse, commonHeaderErrors, args);
  }

  /**
   * Initializes the PTZ autofocus or resets it if already initialized
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<ptzPb.InitializeLensResponse>}
   */
  initializeLens(args) {
    const request = new ptzPb.InitializeLensRequest();
    return this.call(this._stub.initializeLens, request, this._initializeLensFromResponse, commonHeaderErrors, args);
  }

  /**
   * Retrieve focus of the mechanical ptz
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<PtzFocusState>}
   */
  getPtzFocusState(args) {
    const request = new ptzPb.GetPtzFocusStateRequest();
    return this.call(
      this._stub.getPtzFocusState,
      request,
      this._getPtzFocusStateFromResponse,
      commonHeaderErrors,
      args,
    );
  }

  /**
   * Set focus of the mechanical ptz
   * @param {PtzFocusMode} focusMode Enum indicating whether to autofocus or manually focus
   * @param {number} distance Approximate distance to focus on, most accurate between 1.2m and 20m,
   * only settable in PTZ_FOCUS_MANUAL mode
   * @param {number} focusPosition Precise lens position for the camera for repeatable operations,
   * overrides distance if specified, only settable in PTZ_FOCUS_MANUAL mode
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<SetPtzFocusStateResponse>}
   */
  setPtzFocusState(focusMode, distance = null, focusPosition = null, args) {
    let focusPositionVal, approxDistance;
    if (focusPosition !== null) {
      focusPositionVal = new Int32Value().setValue(focusPosition);
      approxDistance = null;
    } else if (distance !== null) {
      approxDistance = new FloatValue().setValue(distance);
      focusPositionVal = null;
    } else {
      throw new Error('One of distance or focusPosition must be specified.');
    }
    const ptzFocusState = new ptzPb.PtzFocusState()
      .setMode(focusMode)
      .setApproxDistance(approxDistance)
      .setFocusPosition(focusPositionVal);
    const request = new ptzPb.SetPtzFocusStateRequest().setFocusState(ptzFocusState);
    return this.call(
      this._stub.setPtzFocusState,
      request,
      this._setPtzFocusStateFromResponse,
      commonHeaderErrors,
      args,
    );
  }

  _list_ptz_from_response(response) {
    return response.getPtzsList();
  }

  _getPtzPositionFromResponse(response) {
    return response.getPosition();
  }

  _getPtzVelocityFromResponse(response) {
    return response.getVelocity();
  }

  _setPtzPositionFromResponse(response) {
    return response.getPosition();
  }

  _setPtzVelocityFromResponse(response) {
    return response.getVelocity();
  }

  _initializeLensFromResponse(response) {
    return response;
  }

  _getPtzFocusStateFromResponse(response) {
    return response.getFocusState();
  }

  _setPtzFocusStateFromResponse(response) {
    return response;
  }
}

/**
 * Shift the pan angle (degrees) so that it is in the [0,360] range.
 * @param {number} pan The angle in degrees to be shift.
 * @returns {number}
 */
function shiftPanAngle(pan) {
  return recenterAngle(pan, 0, 360);
}

module.exports = {
  PtzClient,
  shiftPanAngle,
};
