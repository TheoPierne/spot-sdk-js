/**
 * @file For clients to use the graph nav recording service
 */

'use strict';

const { FieldMask } = require('google-protobuf/google/protobuf/field_mask_pb');
const { BoolValue, DoubleValue } = require('google-protobuf/google/protobuf/wrappers_pb');

const {
  BaseClient,
  errorFactory,
  commonHeaderErrors,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
  handleLicenseErrorsIfPresent,
} = require('./common');
const { ResponseError } = require('./exceptions');
const { DefaultDict } = require('./util');

const mapPb = require('../bosdyn/api/graph_nav/map_pb');
const recordingPb = require('../bosdyn/api/graph_nav/recording_pb');
const {
  GraphNavRecordingServiceClient: GraphNavRecordingServiceClientPb,
} = require('../bosdyn/api/graph_nav/recording_service_grpc_pb');
const robotCommandPb = require('../bosdyn/api/spot/robot_command_pb');

/**
 * @typedef {import('../bosdyn/api/geometry_pb').SE2VelocityLimit} SE2VelocityLimit
 * @typedef {import('../bosdyn/api/geometry_pb').SE3Pose} SE3Pose
 */

/**
 * Helper enum to describe the localization region type for a waypoint
 * @enum
 */
const WaypointRegion = {
  DEFAULT_REGION: 1,
  EMPTY_REGION: 2,
  CIRCLE_REGION: 3,
};

/**
 * Client for the GraphNav recording service.
 * @extends {BaseClient<GraphNavRecordingServiceClientPb>}
 */
class GraphNavRecordingServiceClient extends BaseClient {
  static defaultServiceName = 'recording-service';
  static serviceType = 'bosdyn.api.graph_nav.GraphNavRecordingService';

  constructor() {
    super(GraphNavRecordingServiceClientPb);
  }

  /**
   * Start the recording service to create/update a map.
   * @param {import('../bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {recordingPb.RecordingEnvironment} recordingEnvironment RecordingEnvironment protobuf to be used
   * for the initial waypoint created at start.
   * @param {?number[]} requireFiducials The ids of the fiducials which must be seen to start the recording (the
   * proto field is a list: the boolean of the Python documentation cannot be set).
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  startRecording(lease = null, recordingEnvironment = null, requireFiducials = null, args) {
    const request = this._buildStartRecordingRequest(lease, recordingEnvironment, requireFiducials);
    return this.call(this._stub.startRecording, request, _getStatus, _startRecordingError, false, args);
  }

  /**
   * Same as startRecording() but returns a full response
   * @param {import('../bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {recordingPb.RecordingEnvironment} recordingEnvironment RecordingEnvironment protobuf to be used
   * for the initial waypoint created at start.
   * @param {?number[]} requireFiducials The ids of the fiducials which must be seen to start the recording.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<recordingPb.StartRecordingResponse>}
   */
  startRecordingFull(lease = null, recordingEnvironment = null, requireFiducials = null, args) {
    const request = this._buildStartRecordingRequest(lease, recordingEnvironment, requireFiducials);
    return this.call(this._stub.startRecording, request, _getResponse, _startRecordingError, false, args);
  }

  /**
   * Stop the recording service.
   * @param {import('../bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  stopRecording(lease = null, args) {
    const request = this._buildStopRecordingRequest(lease);
    return this.call(this._stub.stopRecording, request, _getStatus, _stopRecordingError, false, args);
  }

  /**
   * Get the status of the recording service.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<recordingPb.GetRecordStatusResponse>}
   */
  getRecordStatus(args) {
    const request = this._buildGetRecordStatusRequest();
    return this.call(this._stub.getRecordStatus, request, _getResponse, commonHeaderErrors, false, args);
  }

  /**
   * Set the persistent recording environment.
   * @param {import('../bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {recordingPb.RecordingEnvironment} recordingEnvironment RecordingEnvironment protobuf
   * to be set as the persistent environment.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<recordingPb.SetRecordingEnvironmentResponse>}
   */
  setRecordingEnvironment(lease = null, recordingEnvironment = null, args) {
    const request = this._buildSetRecordingEnvironmentRequest(lease, recordingEnvironment);
    return this.call(this._stub.setRecordingEnvironment, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Create a waypoint in the map at the current robot state.
   * @param {import('../bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {string} waypointName Human readable string for the waypoint name.
   * @param {recordingPb.RecordingEnvironment} recordingEnvironment RecordingEnvironment protobuf to be
   * used for the waypoint (will overwrite and merge with any persistent env).
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<recordingPb.CreateWaypointResponse>}
   */
  createWaypoint(lease = null, waypointName = null, recordingEnvironment = null, args) {
    const request = this._buildCreateWaypointRequest(waypointName, recordingEnvironment, lease);
    return this.call(this._stub.createWaypoint, request, _getResponse, _createWaypointError, false, args);
  }

  /**
   * Create an edge in the map between two existing waypoints.
   * @param {import('../bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {mapPb.Edge} edge An edge protobuf, which must include valid from/to waypoint
   * id's and a fromTTo transform.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<recordingPb.CreateEdgeResponse>}
   */
  createEdge(lease = null, edge = null, args) {
    const request = this._buildCreateEdgeRequest(edge, lease);
    return this.call(this._stub.createEdge, request, _getStatus, _createEdgeError, false, args);
  }

  _buildStartRecordingRequest(lease, recordingEnv, requireFiducials) {
    return new recordingPb.StartRecordingRequest()
      .setLease(lease)
      .setRecordingEnvironment(recordingEnv)
      .setRequireFiducialsList(requireFiducials);
  }

  _buildStopRecordingRequest(lease) {
    return new recordingPb.StopRecordingRequest().setLease(lease);
  }

  _buildGetRecordStatusRequest() {
    return new recordingPb.GetRecordStatusRequest();
  }

  _buildSetRecordingEnvironmentRequest(lease, recordingEnv) {
    return new recordingPb.SetRecordingEnvironmentRequest().setEnvironment(recordingEnv).setLease(lease);
  }

  _buildCreateWaypointRequest(waypointName, recordingEnv, lease) {
    return new recordingPb.CreateWaypointRequest()
      .setWaypointName(waypointName)
      .setRecordingEnvironment(recordingEnv)
      .setLease(lease);
  }

  _buildCreateEdgeRequest(edge, lease) {
    return new recordingPb.CreateEdgeRequest().setEdge(edge).setLease(lease);
  }

  /**
   * Construct a complete recording environment from the waypoint and edge environments.
   * @param {string} name A string name prefix which will prefix waypoint names (human-readable).
   * @param {mapPb.Waypoint.Annotations} waypointEnv Waypoint.Annotations protobuf which includes
   * information for the waypoint environment.
   * @param {mapPb.Edge.Annotations} edgeEnv Edge.Annotations protobuf which includes information
   * for the edge environment.
   * @returns {recordingPb.RecordingEnvironment}
   */
  static makeRecordingEnvironment(name = null, waypointEnv = null, edgeEnv = null) {
    return new recordingPb.RecordingEnvironment()
      .setNamePrefix(name)
      .setWaypointEnvironment(waypointEnv)
      .setEdgeEnvironment(edgeEnv);
  }

  /**
   * Create a waypoint environment.
   * @param {string} name A string name for the waypoint (human-readable).
   * @param {WaypointRegion} region A WaypointRegion enum representing the region in which we are localizing in.
   * This can be either a default region, an empty region (don't localize to this waypoint), or a circular region.
   * @param {number} dist2d If the region is circular, then this is set as a distance (meters) representing the number
   * of meters away we can be from the waypoint before scan matching.
   * @param {mapPb.ClientMetadata} clientMetadata Info about the client which will be stored in the waypoints.
   * @returns {mapPb.Waypoint.Annotations}
   */
  static makeWaypointEnvironment(name, region = WaypointRegion.DEFAULT_REGION, dist2d = null, clientMetadata = null) {
    const waypointEnv = new mapPb.Waypoint.Annotations().setName(name).setClientMetadata(clientMetadata);
    if (region === WaypointRegion.DEFAULT_REGION) {
      const scanMatchRegion = new mapPb.Waypoint.Annotations.LocalizeRegion()
        .setDefaultRegion(new mapPb.Waypoint.Annotations.LocalizeRegion.Default())
        .setState(mapPb.AnnotationState.ANNOTATION_STATE_SET);
      waypointEnv.setScanMatchRegion(scanMatchRegion);
    } else if (region === WaypointRegion.EMPTY_REGION) {
      const scanMatchRegion = new mapPb.Waypoint.Annotations.LocalizeRegion()
        .setEmpty(new mapPb.Waypoint.Annotations.LocalizeRegion.Empty())
        .setState(mapPb.AnnotationState.ANNOTATION_STATE_SET);
      waypointEnv.setScanMatchRegion(scanMatchRegion);
    } else if (region === WaypointRegion.CIRCLE_REGION) {
      const scanMatchRegion = new mapPb.Waypoint.Annotations.LocalizeRegion();
      if (dist2d !== null) {
        scanMatchRegion.setCircle(new mapPb.Waypoint.Annotations.LocalizeRegion.Circle2D().setDist2d(dist2d));
        scanMatchRegion.setState(mapPb.AnnotationState.ANNOTATION_STATE_SET);
      } else {
        scanMatchRegion.setState(mapPb.AnnotationState.ANNOTATION_STATE_NONE);
      }
      waypointEnv.setScanMatchRegion(scanMatchRegion);
    } else {
      const scanMatchRegion = new mapPb.Waypoint.Annotations.LocalizeRegion().setState(
        mapPb.AnnotationState.ANNOTATION_STATE_NONE,
      );
      waypointEnv.setScanMatchRegion(scanMatchRegion);
    }
    return waypointEnv;
  }

  /**
   * Creates client metadata for recording.
   * @param {string} sessionName User-provided name for this recording "session". For example, the user
   * may start and stop recording at various times and assign a name to a region
   * that is being recorded. Usually, this will just be the map name.
   * @param {string} clientUsername If the application recording the map has a special user name,
   * this is the name of that user.
   * @param {string} clientSoftwareVersion Version string of any client software that generated this object.
   * @param {string} clientId Identifier of any client software that generated this object
   * @param {string} clientType Special tag for the client software which created this object.
   * For example, "Tablet", "Scout", "NodeJS SDK", etc.
   * @returns {mapPb.ClientMetadata}
   */
  static makeClientMetadata(
    sessionName = null,
    clientUsername = null,
    clientSoftwareVersion = null,
    clientId = null,
    clientType = null,
  ) {
    return new mapPb.ClientMetadata()
      .setSessionName(sessionName)
      .setClientUsername(clientUsername)
      .setClientSoftwareVersion(clientSoftwareVersion)
      .setClientId(clientId)
      .setClientType(clientType);
  }

  /**
   * Create an edge environment.
   *
   * It always threw (setGratedFloor() does not exist, and a boolean was set as the BoolValue require_alignment), and
   * the make_edge_environment() of Python raises an AttributeError (CopyFrom() on booleans, and grated_floor is no
   * longer in map.proto): the environment follows the current map.proto. The ground friction, the grated floor and
   * the velocity limit are mobility params of the edge, and override_mobility_params lists them, so that the other
   * mobility params are not annotated (an empty FieldMask activates all of them).
   * @param {?SE2VelocityLimit} [velLimit=null] A SE2VelocityLimit to use while traversing the edge.
   * Note this is not a target speed, just a max/min.
   * @param {mapPb.Edge.Annotations.DirectionConstraint} [directionConstraint=DIRECTION_CONSTRAINT_NONE] A direction
   * constraints on the robot's orientation when traversing the edge.
   * @param {boolean} [requireAlignment=false] Boolean where if true, the robot must be aligned with the edge in
   * yaw before traversing it.
   * @param {number} [groundMuHint=0.8] Terrain coefficient of friction user hint. Suggested values lie between
   * [.4, .8]. 0 or less: not annotated.
   * @param {boolean} [gratedFloor=false] Boolean where if true, the edge crosses over grated metal (grated surfaces
   * mode on); false leaves the mode of the robot.
   * @returns {mapPb.Edge.Annotations}
   */
  static makeEdgeEnvironment(
    velLimit = null,
    directionConstraint = mapPb.Edge.Annotations.DirectionConstraint.DIRECTION_CONSTRAINT_NONE,
    requireAlignment = false,
    groundMuHint = 0.8,
    gratedFloor = false,
  ) {
    const edgeEnv = new mapPb.Edge.Annotations()
      .setRequireAlignment(new BoolValue().setValue(requireAlignment))
      .setDirectionConstraint(directionConstraint)
      .setStairs(new mapPb.Edge.Annotations.StairData().setState(mapPb.AnnotationState.ANNOTATION_STATE_NONE));

    const mobilityParams = new robotCommandPb.MobilityParams();
    const terrainParams = new robotCommandPb.TerrainParams();
    const overridden = [];
    if (groundMuHint > 0) {
      terrainParams.setGroundMuHint(new DoubleValue().setValue(groundMuHint));
      overridden.push('terrain_params.ground_mu_hint');
    }
    if (gratedFloor) {
      terrainParams.setGratedSurfacesMode(robotCommandPb.TerrainParams.GratedSurfacesMode.GRATED_SURFACES_MODE_ON);
      overridden.push('terrain_params.grated_surfaces_mode');
    }
    if (overridden.length > 0) mobilityParams.setTerrainParams(terrainParams);
    if (velLimit !== null) {
      mobilityParams.setVelLimit(velLimit);
      overridden.push('vel_limit');
    }
    if (overridden.length > 0) {
      edgeEnv.setMobilityParams(mobilityParams).setOverrideMobilityParams(new FieldMask().setPathsList(overridden));
    }
    return edgeEnv;
  }

  /**
   * Create an edge between two waypoint ids.
   * @param {string} fromWaypointId A waypoint string id for the from waypoint.
   * @param {string} toWaypointId A waypoint string id for the to waypoint.
   * @param {SE3Pose} fromTformTo An SE3Pose representing the transform of from_waypoint to to_waypoint.
   * @param {?mapPb.Edge} edgeEnvironment Any edge environment to be associated with the created edge.
   * @returns {mapPb.Edge}
   */
  static makeEdge(fromWaypointId, toWaypointId, fromTformTo, edgeEnvironment = null) {
    const edgeId = new mapPb.Edge.Id().setFromWaypoint(fromWaypointId).setToWaypoint(toWaypointId);
    const edge = new mapPb.Edge().setId(edgeId).setFromTformTo(fromTformTo);
    if (edgeEnvironment !== null) edge.setAnnotations(edgeEnvironment);
    return edge;
  }
}

/** General class of errors for the GraphNav Recording Service. */
class RecordingServiceResponseError extends ResponseError {}
/** Stop recording failed to localize to the last created waypoint. */
// A RecordingServiceResponseError, like Python.
class NotLocalizedToEndError extends RecordingServiceResponseError {}
/** Service could not create a waypoint. */
class CouldNotCreateWaypointError extends RecordingServiceResponseError {}
/** The recording service has not been started. */
class NotRecordingError extends RecordingServiceResponseError {}
/** The edge requested has a waypoint id that is unknown. */
class UnknownWaypointError extends RecordingServiceResponseError {}
/** The edge requested with the given ID already exists in the map. */
class EdgeExistsError extends RecordingServiceResponseError {}
/** The edge requested is missing the from_T_to transform in the edge. */
class EdgeMissingTransformError extends RecordingServiceResponseError {}
/** Cannot start recording while the robot is already following a route. */
class FollowingRouteError extends RecordingServiceResponseError {}
/** The robot is not localized to the existing map and cannot start recording. */
class NotLocalizedToExistingMapError extends RecordingServiceResponseError {}
/** The robot is too far from the existing map and cannot start recording. */
class TooFarFromExistingMapError extends RecordingServiceResponseError {}
/** Failed to start recording because a remote point cloud (e.g. a LIDAR) is not registered to the service directory. */
class RemoteCloudFailureNotInDirectoryError extends RecordingServiceResponseError {}
/** Failed to start recording because a remote point cloud (e.g. a LIDAR) is not delivering data. */
class RemoteCloudFailureNoDataError extends RecordingServiceResponseError {}
/** The service is processing the map at its current position. Try again in 1-2 seconds. */
class NotReadyYetError extends RecordingServiceResponseError {}
/** Map exceeds the size allowed by the license. */
class MapTooLargeLicenseError extends RecordingServiceResponseError {}
/** One or more required fiducials were not detected. */
class MissingFiducialsError extends RecordingServiceResponseError {}
/** The pose of one or more required fiducials could not be determined accurately. */
class FiducialPoseError extends RecordingServiceResponseError {}

/**
 * Failed to start recording because the robot is impaired.
 */
class RobotImpairedError extends RecordingServiceResponseError {
  constructor(response, errorMessage) {
    super(response, errorMessage);
    this.impairedState = response.getImpairedState();
  }

  toString() {
    return `${super.toString()} \nImpaired state: ${this.impairedState}`;
  }
}

function _getStatus(response) {
  return response.getStatus();
}

function _getResponse(response) {
  return response;
}

const _START_RECORDING_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_OK, [null, null]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_COULD_NOT_CREATE_WAYPOINT, [
  CouldNotCreateWaypointError,
  'Service could not create a waypoint.',
]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_FOLLOWING_ROUTE, [
  FollowingRouteError,
  'Cannot start recording while the robot is already following a route.',
]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_NOT_LOCALIZED_TO_EXISTING_MAP, [
  NotLocalizedToExistingMapError,
  'The robot is not localized to the existing map and cannot start recording.',
]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_MISSING_FIDUCIALS, [
  MissingFiducialsError,
  'One or more required fiducials were not detected.',
]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_MAP_TOO_LARGE_LICENSE, [
  MapTooLargeLicenseError,
  'Map exceeds the size allowed by the license.',
]);
_START_RECORDING_STATUS_TO_ERROR.set(
  recordingPb.StartRecordingResponse.Status.STATUS_REMOTE_CLOUD_FAILURE_NOT_IN_DIRECTORY,
  [
    RemoteCloudFailureNotInDirectoryError,
    'Failed to start recording because a remote point cloud (e.g. a LIDAR) is not registered to the service directory.',
  ],
);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_REMOTE_CLOUD_FAILURE_NO_DATA, [
  RemoteCloudFailureNoDataError,
  'Failed to start recording because a remote point cloud (e.g. a LIDAR) is not delivering data.',
]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_FIDUCIAL_POSE_NOT_OK, [
  FiducialPoseError,
  'The pose of one or more required fiducials could not be determined accurately.',
]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_TOO_FAR_FROM_EXISTING_MAP, [
  TooFarFromExistingMapError,
  'The robot is too far from the existing map and cannot start recording.',
]);
_START_RECORDING_STATUS_TO_ERROR.set(recordingPb.StartRecordingResponse.Status.STATUS_ROBOT_IMPAIRED, [
  RobotImpairedError,
  'Failed to start recording because the robot is impaired.',
]);

const _STOP_RECORDING_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_STOP_RECORDING_STATUS_TO_ERROR.set(recordingPb.StopRecordingResponse.Status.STATUS_OK, [null, null]);
_STOP_RECORDING_STATUS_TO_ERROR.set(recordingPb.StopRecordingResponse.Status.STATUS_NOT_LOCALIZED_TO_END, [
  NotLocalizedToEndError,
  'Stop recording failed to localize to the last created waypoint.',
]);
_STOP_RECORDING_STATUS_TO_ERROR.set(recordingPb.StopRecordingResponse.Status.STATUS_NOT_READY_YET, [
  NotReadyYetError,
  "The service is processing the map at it's current position. Try again in 1-2 seconds.",
]);

// Utilisation de DefaultDict
const _CREATE_WAYPOINT_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_CREATE_WAYPOINT_STATUS_TO_ERROR.set(recordingPb.CreateWaypointResponse.Status.STATUS_OK, [null, null]);
_CREATE_WAYPOINT_STATUS_TO_ERROR.set(recordingPb.CreateWaypointResponse.Status.STATUS_NOT_RECORDING, [
  NotRecordingError,
  'The recording service has not been started.',
]);
_CREATE_WAYPOINT_STATUS_TO_ERROR.set(recordingPb.CreateWaypointResponse.Status.STATUS_COULD_NOT_CREATE_WAYPOINT, [
  CouldNotCreateWaypointError,
  'Service could not create a waypoint.',
]);
_CREATE_WAYPOINT_STATUS_TO_ERROR.set(
  recordingPb.CreateWaypointResponse.Status.STATUS_REMOTE_CLOUD_FAILURE_NOT_IN_DIRECTORY,
  [
    RemoteCloudFailureNotInDirectoryError,
    'Failed to start recording because a remote point cloud (e.g. a LIDAR) is not registered to the service directory.',
  ],
);
_CREATE_WAYPOINT_STATUS_TO_ERROR.set(recordingPb.CreateWaypointResponse.Status.STATUS_REMOTE_CLOUD_FAILURE_NO_DATA, [
  RemoteCloudFailureNoDataError,
  'Failed to start recording because a remote point cloud (e.g. a LIDAR) is not delivering data.',
]);

// Utilisation de DefaultDict
const _CREATE_EDGE_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_CREATE_EDGE_STATUS_TO_ERROR.set(recordingPb.CreateEdgeResponse.Status.STATUS_OK, [null, null]);
_CREATE_EDGE_STATUS_TO_ERROR.set(recordingPb.CreateEdgeResponse.Status.STATUS_NOT_RECORDING, [
  NotRecordingError,
  'The recording service has not been started.',
]);
_CREATE_EDGE_STATUS_TO_ERROR.set(recordingPb.CreateEdgeResponse.Status.STATUS_EXISTS, [
  EdgeExistsError,
  'The edge requested with the given ID already exists in the map.',
]);
_CREATE_EDGE_STATUS_TO_ERROR.set(recordingPb.CreateEdgeResponse.Status.STATUS_UNKNOWN_WAYPOINT, [
  UnknownWaypointError,
  'The edge requested has a waypoint id that is unknown.',
]);
_CREATE_EDGE_STATUS_TO_ERROR.set(recordingPb.CreateEdgeResponse.Status.STATUS_MISSING_TRANSFORM, [
  EdgeMissingTransformError,
  'The edge requested is missing the from_T_to transform in the edge.',
]);

const _startRecordingError = handleCommonHeaderErrors(
  handleLicenseErrorsIfPresent(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        recordingPb.StartRecordingResponse.Status,
        _START_RECORDING_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _stopRecordingError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      recordingPb.StopRecordingResponse.Status,
      _STOP_RECORDING_STATUS_TO_ERROR,
    ),
  ),
);

const _createWaypointError = handleCommonHeaderErrors(
  handleLicenseErrorsIfPresent(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        recordingPb.CreateWaypointResponse.Status,
        _CREATE_WAYPOINT_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _createEdgeError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), recordingPb.CreateEdgeResponse.Status, _CREATE_EDGE_STATUS_TO_ERROR),
  ),
);

module.exports = {
  WaypointRegion,
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
  TooFarFromExistingMapError,
  RemoteCloudFailureNotInDirectoryError,
  RemoteCloudFailureNoDataError,
  NotReadyYetError,
  MapTooLargeLicenseError,
  MissingFiducialsError,
  FiducialPoseError,
  RobotImpairedError,
};
