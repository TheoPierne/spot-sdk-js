'use strict';

const { BaseClient, error_factory, common_header_errors } = require('./common');
const { ResponseError } = require('./exceptions');

const map_pb = require('../bosdyn/api/graph_nav/map_pb');
const recording_pb = require('../bosdyn/api/graph_nav/recording_pb');
const recording_service = require('../bosdyn/api/graph_nav/recording_service_grpc_pb');

const WaypointRegion = {
  DEFAULT_REGION: 1,
  EMPTY_REGION: 2,
  CIRCLE_REGION: 3,
};

class GraphNavRecordingServiceClient extends BaseClient {
  static default_service_name = 'recording-service';
  static service_type = 'bosdyn.api.graph_nav.GraphNavRecordingService';

  constructor() {
    super(recording_service.GraphNavRecordingServiceClient);
  }

  start_recording(lease = null, recording_environment = null, args) {
    const request = this._build_start_recording_request(lease, recording_environment);
    return this.call(this._stub.startRecording, request, _get_status, _start_recording_error, args);
  }

  stop_recording(lease = null, args) {
    const request = this._build_stop_recording_request(lease);
    return this.call(this._stub.stopRecording, request, _get_status, _stop_recording_error, args);
  }

  get_record_status(args) {
    const request = this._build_get_record_status_request();
    return this.call(this._stub.getRecordStatus, request, _get_response, common_header_errors, args);
  }

  set_recording_environment(lease = null, recording_environment = null, args) {
    const request = this._build_set_recording_environment_request(lease, recording_environment);
    return this.call(this._stub.SetRecordingEnvironment, request, null, common_header_errors, args);
  }

  create_waypoint(lease = null, waypoint_name = null, recording_environment = null, args) {
    const request = this._build_create_waypoint_request(waypoint_name, recording_environment, lease);
    return this.call(this._stub.createWaypoint, request, _get_response, _create_waypoint_error, args);
  }

  create_edge(lease = null, edge = null, args) {
    const request = this._build_create_edge_request(edge, lease);
    return this.call(this._stub.createEdge, request, _get_status, _create_edge_error, args);
  }

  static _build_start_recording_request(lease, recording_env) {
    return new recording_pb.StartRecordingRequest().setLease(lease).setRecordingEnvironment(recording_env);
  }

  static _build_stop_recording_request(lease) {
    return new recording_pb.StopRecordingRequest().setLease(lease);
  }

  static _build_get_record_status_request() {
    return new recording_pb.GetRecordStatusRequest();
  }

  static _build_set_recording_environment_request(lease, recording_env) {
    return new recording_pb.SetRecordingEnvironmentRequest().setEnvironment(recording_env).setLease(lease);
  }

  static _build_create_waypoint_request(waypoint_name, recording_env, lease) {
    const req = new recording_pb.CreateWaypointRequest()
      .setWaypointName(waypoint_name)
      .setRecordingEnvironment(recording_env)
      .setLease(lease);
    return req;
  }

  static _build_create_edge_request(edge, lease) {
    return new recording_pb.CreateEdgeRequest().setEdge(edge).setLease(lease);
  }

  static make_recording_environment(name, waypoint_env, edge_env) {
    const req = new recording_pb.RecordingEnvironment()
      .setNamePrefix(name)
      .setWaypointEnvironment(waypoint_env)
      .setEdgeEnvironment(edge_env);
    return req;
  }

  static make_waypoint_environment(name, region = WaypointRegion.DEFAULT_REGION, dist_2d = null) {
    const waypoint_env = new map_pb.Waypoint.Annotations().setName(name);
    if (region === WaypointRegion.DEFAULT_REGION) {
      const scan_match_region = new map_pb.Waypoint.Annotations.LocalizeRegion()
        .setDefaultRegion(new map_pb.Waypoint.Annotations.LocalizeRegion.Default())
        .setState(map_pb.AnnotationState.ANNOTATION_STATE_SET);
      waypoint_env.setScanMatchRegion(scan_match_region);
    } else if (region === WaypointRegion.EMPTY_REGION) {
      const scan_match_region = new map_pb.Waypoint.Annotations.LocalizeRegion()
        .setEmpty(new map_pb.Waypoint.Annotations.LocalizeRegion.Empty())
        .setState(map_pb.AnnotationState.ANNOTATION_STATE_SET);
      waypoint_env.setScanMatchRegion(scan_match_region);
    } else if (region === WaypointRegion.CIRCLE_REGION) {
      const scan_match_region = new map_pb.Waypoint.Annotations.LocalizeRegion();
      if (dist_2d !== null) {
        scan_match_region.setCircle(new map_pb.Waypoint.Annotations.LocalizeRegion.Circle2D().setDist2d(dist_2d));
        scan_match_region.setState(map_pb.AnnotationState.ANNOTATION_STATE_SET);
      } else {
        scan_match_region.setState(map_pb.AnnotationState.ANNOTATION_STATE_NONE);
      }
      waypoint_env.setScanMatchRegion(scan_match_region);
    } else {
      const scan_match_region = new map_pb.Waypoint.Annotations.LocalizeRegion().setState(
        map_pb.AnnotationState.ANNOTATION_STATE_NONE,
      );
      waypoint_env.setScanMatchRegion(scan_match_region);
    }
    return waypoint_env;
  }

  static make_edge_environment(
    vel_limit = null,
    direction_constraint = map_pb.Edge.Annotations.DirectionConstraint.DIRECTION_CONSTRAINT_NONE,
    require_alignment = false,
    flat_ground = false,
    ground_mu_hint = 0.8,
    grated_floor = false,
  ) {
    const edge_env = new map_pb.Edge.Annotations();
    edge_env.setRequireAlignment(require_alignment);
    edge_env.setFlatGround(flat_ground);
    edge_env.setGratedFloor(grated_floor);
    if (ground_mu_hint > 0) edge_env.setGroundMuHint(ground_mu_hint);
    if (vel_limit !== null) edge_env.setVelLimit(vel_limit);
    edge_env.setDirectionConstraint(direction_constraint);
    const stairs = new map_pb.Edge.Annotations.StairData().setState(map_pb.AnnotationState.ANNOTATION_STATE_NONE);
    edge_env.setStairs(stairs);
    return edge_env;
  }

  static make_edge(from_waypoint_id, to_waypoint_id, from_tform_to, edge_environment = null) {
    const edge_id = new map_pb.Edge.Id().setFromWaypoint(from_waypoint_id).setToWaypoint(to_waypoint_id);
    const edge = new map_pb.Edge().setId(edge_id).setFromTformTo(from_tform_to);
    if (edge_environment !== null) edge.setAnnotations(edge_environment);
    return edge;
  }
}

class RecordingServiceResponseError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RecordingServiceResponseError';
  }
}

class CouldNotCreateWaypointError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CouldNotCreateWaypointError';
  }
}

class NotRecordingError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'NotRecordingError';
  }
}

class UnknownWaypointError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'UnknownWaypointError';
  }
}

class EdgeExistsError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'EdgeExistsError';
  }
}

class EdgeMissingTransformError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'EdgeMissingTransformError';
  }
}

class NotLocalizedToEndError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'NotLocalizedToEndError';
  }
}

class FollowingRouteError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'FollowingRouteError';
  }
}

class NotLocalizedToExistingMapError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'NotLocalizedToExistingMapError';
  }
}

class RemoteCloudFailureNotInDirectoryError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RemoteCloudFailureNotInDirectoryError';
  }
}

class RemoteCloudFailureNoDataError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RemoteCloudFailureNoDataError';
  }
}

class NotReadyYetError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'NotReadyYetError';
  }
}

class MapTooLargeLicenseError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'MapTooLargeLicenseError';
  }
}

class MissingFiducialsError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'MissingFiducialsError';
  }
}

class FiducialPoseError extends RecordingServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'FiducialPoseError';
  }
}

function _get_status(response) {
  return response.getStatus();
}

function _get_response(response) {
  return response;
}

const _START_RECORDING_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_COULD_NOT_CREATE_WAYPOINT: [CouldNotCreateWaypointError, 'Service could not create a waypoint.'],
  STATUS_FOLLOWING_ROUTE: [FollowingRouteError, 'Cannot start recording while the robot is already following a route.'],
  STATUS_NOT_LOCALIZED_TO_EXISTING_MAP: [
    NotLocalizedToExistingMapError,
    'The robot is not localized to the existing map and cannot start recording.',
  ],
  STATUS_MISSING_FIDUCIALS: [MissingFiducialsError, 'One or more required fiducials were not detected.'],
  STATUS_MAP_TOO_LARGE_LICENSE: [MapTooLargeLicenseError, 'Map exceeds the size allowed by the license.'],
  STATUS_REMOTE_CLOUD_FAILURE_NOT_IN_DIRECTORY: [
    RemoteCloudFailureNotInDirectoryError,
    'Failed to start recording because a remote point cloud (e.g. a LIDAR) is not registered to the service directory.',
  ],
  STATUS_REMOTE_CLOUD_FAILURE_NO_DATA: [
    RemoteCloudFailureNoDataError,
    'Failed to start recording because a remote point cloud (e.g. a LIDAR) is not delivering data.',
  ],
  STATUS_FIDUCIAL_POSE_NOT_OK: [
    FiducialPoseError,
    'The pose of one or more required fiducials could not be determined accurately.',
  ],
};

const _STOP_RECORDING_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_NOT_LOCALIZED_TO_END: [
    NotLocalizedToEndError,
    'Stop recording failed to localize to the last created waypoint.',
  ],
  STATUS_NOT_READY_YET: [
    NotReadyYetError,
    "The service is processing the map at it's current position. Try again in 1-2 seconds.",
  ],
};

const _CREATE_WAYPOINT_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_NOT_RECORDING: [NotRecordingError, 'The recording service has not been started.'],
  STATUS_COULD_NOT_CREATE_WAYPOINT: [CouldNotCreateWaypointError, 'Service could not create a waypoint.'],
  STATUS_REMOTE_CLOUD_FAILURE_NOT_IN_DIRECTORY: [
    RemoteCloudFailureNotInDirectoryError,
    'Failed to start recording because a remote point cloud (e.g. a LIDAR) is not registered to the service directory.',
  ],
  STATUS_REMOTE_CLOUD_FAILURE_NO_DATA: [
    RemoteCloudFailureNoDataError,
    'Failed to start recording because a remote point cloud (e.g. a LIDAR) is not delivering data.',
  ],
};

const _CREATE_EDGE_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_NOT_RECORDING: [NotRecordingError, 'The recording service has not been started.'],
  STATUS_EXISTS: [EdgeExistsError, 'The edge requested with the given ID already exists in the map.'],
  STATUS_UNKNOWN_WAYPOINT: [UnknownWaypointError, 'The edge requested has a waypoint id that is unknown.'],
  STATUS_MISSING_TRANSFORM: [
    EdgeMissingTransformError,
    'The edge requested is missing the from_T_to transform in the edge.',
  ],
};

function _start_recording_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(recording_pb.StartRecordingResponse.Status),
    _START_RECORDING_STATUS_TO_ERROR,
  );
}

function _stop_recording_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(recording_pb.StopRecordingResponse.Status),
    _STOP_RECORDING_STATUS_TO_ERROR,
  );
}

function _create_waypoint_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(recording_pb.CreateWaypointResponse.Status),
    _CREATE_WAYPOINT_STATUS_TO_ERROR,
  );
}

function _create_edge_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(recording_pb.CreateEdgeResponse.Status),
    _CREATE_EDGE_STATUS_TO_ERROR,
  );
}

module.exports = {
  GraphNavRecordingServiceClient,
  RecordingServiceResponseError,
  CouldNotCreateWaypointError,
  NotRecordingError,
  UnknownWaypointError,
  EdgeExistsError,
  EdgeMissingTransformError,
  NotLocalizedToEndError,
  FollowingRouteError,
  NotLocalizedToExistingMapError,
  NotReadyYetError,
};
