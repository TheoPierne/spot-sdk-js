'use strict';

const { BaseClient, error_factory } = require('./common');
const { ResponseError } = require('./exceptions');

const geometry_pb = require('../bosdyn/api/geometry_pb');
const ray_cast_pb = require('../bosdyn/api/ray_cast_pb');
const ray_cast_service_grpc_pb = require('../bosdyn/api/ray_cast_service_grpc_pb');

class RayCastResponseError extends ResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'RayCastResponseError';
  }
}

class InvalidRequestError extends RayCastResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'InvalidRequestError';
  }
}

class InvalidIntersectionTypeError extends RayCastResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'InvalidIntersectionTypeError';
  }
}

class UnknownFrameError extends RayCastResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'UnknownFrameError';
  }
}

const _STATUS_TO_ERROR = {
  [ray_cast_pb.RaycastResponse.Status.STATUS_OK]: [null, null],
  [ray_cast_pb.RaycastResponse.Status.STATUS_INVALID_REQUEST]: [
    InvalidRequestError,
    'Request was invalid / malformed in some way.',
  ],
  [ray_cast_pb.RaycastResponse.Status.STATUS_INVALID_INTERSECTION_TYPE]: [
    InvalidIntersectionTypeError,
    'Requested source not valid for current robot configuration.',
  ],
  [ray_cast_pb.RaycastResponse.Status.STATUS_UNKNOWN_FRAME]: [
    UnknownFrameError,
    'The frame_name for a command was not a known frame.',
  ],
};

function _error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(ray_cast_pb.RaycastResponse.Status),
    _STATUS_TO_ERROR,
  );
}

class RayCastClient extends BaseClient {
  static default_authority = 'ray-cast.spot.robot';
  static default_service_name = 'ray-cast';
  static service_type = 'bosdyn.api.RayCastService';

  constructor() {
    super(ray_cast_service_grpc_pb.RayCastServiceClient);
  }

  raycast(ray_origin, ray_direction, raycast_types, min_distance = 0, frame_name = null, args) {
    const req = this._raycast_request(ray_origin, ray_direction, raycast_types, min_distance, frame_name);
    return this.call(this._stub.raycast, req, null, _error_from_response, args);
  }

  _raycast_request(ray_origin, ray_direction, raycast_types, min_distance, frame_name) {
    /* eslint-disable newline-per-chained-call */
    const origin_proto = new geometry_pb.Vec3().setX(ray_origin[0]).setY(ray_origin[1]).setZ(ray_origin[2]);
    const dir_proto = new geometry_pb.Vec3().setX(ray_direction[0]).setY(ray_direction[1]).setZ(ray_direction[2]);
    const ray = new geometry_pb.Ray().setOrigin(origin_proto).setDirection(dir_proto);
    /* eslint-enable newline-per-chained-call */
    const proto = new ray_cast_pb.RaycastRequest()
      .setRay(ray)
      .setMinIntersectionDistance(min_distance)
      .setRayFrameName(frame_name)
      .setIntersectionTypesList(Array.isArray(raycast_types) ? raycast_types : [raycast_types]);
    return proto;
  }
}

module.exports = {
  RayCastClient,
  RayCastResponseError,
  InvalidRequestError,
  InvalidIntersectionTypeError,
  UnknownFrameError,
};
