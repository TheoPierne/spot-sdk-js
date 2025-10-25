'use strict';

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ResponseError } = require('./exceptions');
const { DefaultDict } = require('./util');

const geometryPb = require('../bosdyn/api/geometry_pb');
const rayCastPb = require('../bosdyn/api/ray_cast_pb');
const { RayCastServiceClient } = require('../bosdyn/api/ray_cast_service_grpc_pb');

class RayCastResponseError extends ResponseError {}
class InvalidRequestError extends RayCastResponseError {}
class InvalidIntersectionTypeError extends RayCastResponseError {}
class UnknownFrameError extends RayCastResponseError {}

const _STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_STATUS_TO_ERROR.set(rayCastPb.RaycastResponse.Status.STATUS_OK, [null, null]);
_STATUS_TO_ERROR.set(rayCastPb.RaycastResponse.Status.STATUS_INVALID_REQUEST, [
  InvalidRequestError,
  'Request was invalid / malformed in some way.',
]);
_STATUS_TO_ERROR.set(rayCastPb.RaycastResponse.Status.STATUS_INVALID_INTERSECTION_TYPE, [
  InvalidIntersectionTypeError,
  'Requested source not valid for current robot configuration.',
]);
_STATUS_TO_ERROR.set(rayCastPb.RaycastResponse.Status.STATUS_UNKNOWN_FRAME, [
  UnknownFrameError,
  'The frame_name for a command was not a known frame.',
]);

const _errorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), Object.keys(rayCastPb.RaycastResponse.Status), _STATUS_TO_ERROR),
  ),
);

/**
 * A client that allows arbitrary rays to be queried against the robot.
 * @extends {BaseClient<RayCastServiceClient>}
 */
class RayCastClient extends BaseClient {
  static defaultAuthority = 'ray-cast.spot.robot';
  static defaultServiceName = 'ray-cast';
  static serviceType = 'bosdyn.api.RayCastService';

  constructor() {
    super(RayCastServiceClient);
  }

  /**
   * Requests robot to intersect ray against the environment it built up.
   * @param {number[]} rayOrigin [x, y, z] position of the ray in the specified frame.
   * @param {number[]} rayDirection [x, y, z] vector denoting the direction of the ray in the specified frame.
   * @param {any[]} raycastTypes array of 0 or more raycast types. 0 will cast into all sources.
   * @param {?number} minDistance a positive real value denoting how far (meters) behind a ray an intersection
   * can occur.
   * @param {?string} frameName the frame the ray is in.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<rayCastPb.RaycastResponse>}
   */
  raycast(rayOrigin, rayDirection, raycastTypes, minDistance = 0, frameName = null, args) {
    const req = this._raycastRequest(rayOrigin, rayDirection, raycastTypes, minDistance, frameName);
    return this.call(this._stub.raycast, req, null, _errorFromResponse, false, args);
  }

  _raycastRequest(rayOrigin, rayDirection, raycastTypes, minDistance, frameName) {
    const originProto = new geometryPb.Vec3().setX(rayOrigin[0]).setY(rayOrigin[1]).setZ(rayOrigin[2]);
    const dirProto = new geometryPb.Vec3().setX(rayDirection[0]).setY(rayDirection[1]).setZ(rayDirection[2]);
    const ray = new geometryPb.Ray().setOrigin(originProto).setDirection(dirProto);
    return new rayCastPb.RaycastRequest()
      .setRay(ray)
      .setMinIntersectionDistance(minDistance)
      .setRayFrameName(frameName)
      .setIntersectionTypesList(Array.isArray(raycastTypes) ? raycastTypes : [raycastTypes]);
  }
}

module.exports = {
  RayCastClient,
  RayCastResponseError,
  InvalidRequestError,
  InvalidIntersectionTypeError,
  UnknownFrameError,
};
