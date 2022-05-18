'use strict';

const { mkdirSync, writeFileSync } = require('fs');

const {
  BaseClient,
  common_header_errors,
  common_lease_errors,
  error_factory,
  handle_common_header_errors,
} = require('./common');
const { ResponseError } = require('./exceptions');
const { add_lease_wallet_processors } = require('./lease');

const data_chunk_pb = require('../bosdyn/api/data_chunk_pb');
const graph_nav_pb = require('../bosdyn/api/graph_nav/graph_nav_pb');
const graph_nav_service_grpc_pb = require('../bosdyn/api/graph_nav/graph_nav_service_grpc_pb');
const map_pb = require('../bosdyn/api/graph_nav/map_pb');
const nav_pb = require('../bosdyn/api/graph_nav/nav_pb');

class GraphNavClient extends BaseClient {
  static default_service_name = 'graph-nav-service';
  static service_type = 'bosdyn.api.graph_nav.GraphNavService';

  constructor() {
    super(graph_nav_service_grpc_pb.GraphNavServiceClient);
    this._timesync_endpoint = null;
    this._data_chunk_size = 1_000;
  }

  update_from(other) {
    super.update_from(other);
    if (this.lease_wallet) add_lease_wallet_processors(this, this.lease_wallet);
    try {
      this._timesync_endpoint = other.time_sync.endpoint;
    } catch (e) {
      // Pass
    }
  }

  set_localization(
    initial_guess_localization,
    ko_tform_body = null,
    max_distance = null,
    max_yaw = null,
    fiducial_init = graph_nav_pb.SetLocalizationRequest.FIDUCIAL_INIT_NEAREST,
    use_fiducial_id = null,
    refine_fiducial_result_with_icp = false,
    do_ambiguity_check = false,
    args,
  ) {
    const req = GraphNavClient._build_set_localization_request(
      initial_guess_localization,
      ko_tform_body,
      max_distance,
      max_yaw,
      fiducial_init,
      use_fiducial_id,
      refine_fiducial_result_with_icp,
      do_ambiguity_check,
    );
    return this.call(this._stub.setLocalization, req, _localization_from_response, _set_localization_error, args);
  }

  set_localization_async(
    initial_guess_localization,
    ko_tform_body = null,
    max_distance = null,
    max_yaw = null,
    fiducial_init = graph_nav_pb.SetLocalizationRequest.FIDUCIAL_INIT_NEAREST,
    use_fiducial_id = null,
    refine_fiducial_result_with_icp = false,
    do_ambiguity_check = false,
    args,
  ) {
    const req = GraphNavClient._build_set_localization_request(
      initial_guess_localization,
      ko_tform_body,
      max_distance,
      max_yaw,
      fiducial_init,
      use_fiducial_id,
      refine_fiducial_result_with_icp,
      do_ambiguity_check,
    );
    return this.call_async(this._stub.setLocalization, req, _localization_from_response, _set_localization_error, args);
  }

  get_localization_state(
    request_live_point_cloud = false,
    request_live_images = false,
    request_live_terrain_maps = false,
    request_live_world_objects = false,
    request_live_robot_state = false,
    args,
  ) {
    const req = GraphNavClient._build_get_localization_state_request(
      request_live_point_cloud,
      request_live_images,
      request_live_terrain_maps,
      request_live_world_objects,
      request_live_robot_state,
    );
    return this.call(this._stub.getLocalizationState, req, null, common_header_errors, args);
  }

  get_localization_state_async(
    request_live_point_cloud = false,
    request_live_images = false,
    request_live_terrain_maps = false,
    request_live_world_objects = false,
    request_live_robot_state = false,
    args,
  ) {
    const req = GraphNavClient._build_get_localization_state_request(
      request_live_point_cloud,
      request_live_images,
      request_live_terrain_maps,
      request_live_world_objects,
      request_live_robot_state,
    );
    return this.call_async(this._stub.getLocalizationState, req, null, common_header_errors, args);
  }

  navigate_route(route, cmd_duration, travel_params = null, leases = null, timesync_endpoint = null, args) {
    const used_endpoint = timesync_endpoint || this._timesync_endpoint;
    if (!used_endpoint) throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    const request = GraphNavClient._build_navigate_route_request(
      route,
      travel_params,
      cmd_duration,
      leases,
      used_endpoint,
    );
    return this.call(
      this._stub.navigateRoute,
      request,
      _command_id_from_navigate_route_response,
      _navigate_route_error,
      args,
    );
  }

  navigate_route_async(route, cmd_duration, travel_params = null, leases = null, timesync_endpoint = null, args) {
    const used_endpoint = timesync_endpoint || this._timesync_endpoint;
    if (!used_endpoint) throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    const request = GraphNavClient._build_navigate_route_request(
      route,
      travel_params,
      cmd_duration,
      leases,
      used_endpoint,
    );
    return this.call_async(
      this._stub.navigateRoute,
      request,
      _command_id_from_navigate_route_response,
      _navigate_route_error,
      args,
    );
  }

  navigate_to(
    destination_waypoint_id,
    cmd_duration,
    route_params = null,
    travel_params = null,
    leases = null,
    timesync_endpoint = null,
    args,
  ) {
    const used_endpoint = timesync_endpoint || this._timesync_endpoint;
    if (!used_endpoint) throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    const request = GraphNavClient._build_navigate_to_request(
      destination_waypoint_id,
      travel_params,
      route_params,
      cmd_duration,
      leases,
      used_endpoint,
    );
    return this.call(
      this._stub.navigateTo,
      request,
      _command_id_from_navigate_route_response,
      _navigate_to_error,
      args,
    );
  }

  navigate_to_async(
    destination_waypoint_id,
    cmd_duration,
    route_params = null,
    travel_params = null,
    leases = null,
    timesync_endpoint = null,
    args,
  ) {
    const used_endpoint = timesync_endpoint || this._timesync_endpoint;
    if (!used_endpoint) throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    const request = GraphNavClient._build_navigate_to_request(
      destination_waypoint_id,
      travel_params,
      route_params,
      cmd_duration,
      leases,
      used_endpoint,
    );
    return this.call_async(
      this._stub.navigateTo,
      request,
      _command_id_from_navigate_route_response,
      _navigate_to_error,
      args,
    );
  }

  navigation_feedback(command_id = 0, args) {
    const request = GraphNavClient._build_navigate_feedback_request(command_id);
    return this.call(this._stub.navigationFeedback, request, _get_response, _navigate_feedback_error, args);
  }

  navigation_feedback_async(command_id = 0, args) {
    const request = GraphNavClient._build_navigate_feedback_request(command_id);
    return this.call_async(this._stub.navigationFeedback, request, _get_response, _navigate_feedback_error, args);
  }

  clear_graph(lease = null, args) {
    const request = GraphNavClient._build_clear_graph_request(lease);
    return this.call(this._stub.clearGraph, request, null, handle_common_header_errors(common_lease_errors), args);
  }

  clear_graph_async(lease = null, args) {
    const request = GraphNavClient._build_clear_graph_request(lease);
    return this.call_async(
      this._stub.clearGraph,
      request,
      null,
      handle_common_header_errors(common_lease_errors),
      args,
    );
  }

  upload_graph(lease = null, graph = null, args) {
    const request = GraphNavClient._build_upload_graph_request(lease, graph);
    return this.call(
      this._stub.uploadGraph,
      request,
      _get_response,
      handle_common_header_errors(common_lease_errors),
      args,
    );
  }

  upload_graph_async(lease = null, graph = null, args) {
    const request = GraphNavClient._build_upload_graph_request(lease, graph);
    return this.call_async(
      this._stub.uploadGraph,
      request,
      _get_response,
      handle_common_header_errors(common_lease_errors),
      args,
    );
  }

  upload_waypoint_snapshot(waypoint_snapshot, lease = null, args) {
    const serialized = waypoint_snapshot.serializeBinary();
    const request = GraphNavClient._data_chunk_iterator_upload_waypoint_snapshot(
      serialized,
      lease,
      this._data_chunk_size,
    );
    return this.call(
      this._stub.uploadWaypointSnapshot,
      request,
      null,
      handle_common_header_errors(common_lease_errors),
      args,
    );
  }

  upload_edge_snapshot(edge_snapshot, lease = null, args) {
    const serialized = edge_snapshot.serializeBinary();
    const request = GraphNavClient._data_chunk_iterator_upload_edge_snapshot(serialized, lease, this._data_chunk_size);
    return this.call(
      this._stub.uploadEdgeSnapshot,
      request,
      null,
      handle_common_header_errors(common_lease_errors),
      args,
    );
  }

  download_graph(args) {
    const request = GraphNavClient._build_download_graph_request();
    return this.call(this._stub.downloadGraph, request, _get_graph, common_header_errors, args);
  }

  download_graph_async(args) {
    const request = GraphNavClient._build_download_graph_request();
    return this.call_async(this._stub.downloadGraph, request, _get_graph, common_header_errors, args);
  }

  download_waypoint_snapshot(waypoint_snapshot_id, download_images = false, args) {
    const request = GraphNavClient._build_download_waypoint_snapshot_request(waypoint_snapshot_id, download_images);
    return this.call(
      this._stub.downloadWaypointSnapshot,
      request,
      _get_streamed_waypoint_snapshot,
      _download_waypoint_snapshot_stream_errors,
      args,
    );
  }

  download_edge_snapshot(edge_snapshot_id, args) {
    const request = GraphNavClient._build_download_edge_snapshot_request(edge_snapshot_id);
    return this.call(
      this._stub.downloadEdgeSnapshot,
      request,
      _get_streamed_edge_snapshot,
      _download_edge_snapshot_stream_errors,
      args,
    );
  }

  _write_bytes(filepath, filename, data) {
    mkdirSync(filepath, { recursive: true });
    writeFileSync(`${filepath}${filename}`, data);
  }

  async write_graph_and_snapshots(directory) {
    const graph = await this.download_graph();
    const graph_bytes = graph.serializeBinary();
    this._write_bytes(directory, '/graph', graph_bytes);

    /* eslint-disable no-await-in-loop */
    for (const waypoint of graph.getWaypointsList()) {
      if (waypoint.getSnapshotId().length === 0) continue;
      const waypoint_snapshot = await this.download_waypoint_snapshot(waypoint.getSnapshotId());
      this._write_bytes(
        `${directory}/waypoint_snapshots`,
        `/${waypoint.getSnapshotId()}`,
        waypoint_snapshot.serializeBinary(),
      );
    }

    for (const edge of graph.getEdgesList()) {
      if (edge.getSnapshotId().length === 0) continue;
      const edge_snapshot = await this.download_edge_snapshot(edge.getSnapshotId());
      this._write_bytes(`${directory}/edge_snapshots`, `/${edge.getSnapshotId()}`, edge_snapshot.serializeBinary());
    }
    /* eslint-enable no-await-in-loop */
  }

  static _build_set_localization_request(
    initial_guess_localization,
    ko_tform_body = null,
    max_distance = null,
    max_yaw = null,
    fiducial_init = graph_nav_pb.SetLocalizationRequest.FIDUCIAL_INIT_NEAREST,
    use_fiducial_id = null,
    refine_fiducial_result_with_icp = false,
    do_ambiguity_check = false,
  ) {
    const request = new graph_nav_pb.SetLocalizationRequest()
      .setInitialGuess(initial_guess_localization)
      .setFiducialInit(fiducial_init);

    if (ko_tform_body !== null) request.setKoTformBody(ko_tform_body);
    if (max_distance !== null) request.setMaxDistance(max_distance);
    if (max_yaw !== null) request.setMaxYaw(max_yaw);

    if (fiducial_init === graph_nav_pb.SetLocalizationRequest.FIDUCIAL_INIT_SPECIFIC) {
      if (use_fiducial_id !== null) request.setUseFiducialId(use_fiducial_id);
    }

    request.setRefineFiducialResultWithIcp(refine_fiducial_result_with_icp);
    request.setDoAmbiguityCheck(do_ambiguity_check);
    return request;
  }

  static _build_get_localization_state_request(
    request_live_point_cloud,
    request_live_images,
    request_live_terrain_maps,
    request_live_world_objects,
    request_live_robot_state,
    waypoint_id,
  ) {
    const req = new graph_nav_pb.GetLocalizationStateRequest()
      .setWaypointId(waypoint_id)
      .setRequestLivePointCloud(request_live_point_cloud)
      .setRequestLiveImages(request_live_images)
      .setRequestLiveTerrainMaps(request_live_terrain_maps)
      .setRequestLiveWorldObjects(request_live_world_objects)
      .setRequestLiveRobotState(request_live_robot_state);
    return req;
  }

  static _build_navigate_route_request(route, travel_params = null, end_time_secs, leases, timesync_endpoint) {
    const converter = timesync_endpoint.get_robot_time_converter();
    const request = new graph_nav_pb.NavigateRouteRequest()
      .setRoute(route)
      .setClockIdentifier(timesync_endpoint.clock_identifier);
    if (travel_params !== null) request.setTravelParams(travel_params);
    request.setEndTime(converter.robot_timestamp_from_local_secs(Date.now() + end_time_secs));
    return request;
  }

  static _build_navigate_to_request(
    destination_waypoint_id,
    travel_params = null,
    route_params = null,
    end_time_secs,
    leases,
    timesync_endpoint,
  ) {
    const converter = timesync_endpoint.get_robot_time_converter();
    const request = new graph_nav_pb.NavigateToRequest()
      .setDestinationWaypointId(destination_waypoint_id)
      .setClockIdentifier(timesync_endpoint.clock_identifier)
      .setEndTime(converter.robot_timestamp_from_local_secs(Date.now() + end_time_secs));
    if (travel_params !== null) request.setTravelParams(travel_params);
    if (route_params !== null) request.setRouteParams(route_params);
    return request;
  }

  static _build_clear_graph_request(lease) {
    return new graph_nav_pb.ClearGraphRequest().setLease(lease);
  }

  static _build_navigate_feedback_request(command_id = 0) {
    return new graph_nav_pb.NavigationFeedbackRequest().setCommandId(command_id);
  }

  static _build_upload_graph_request(lease, graph) {
    return new graph_nav_pb.UploadGraphRequest().setGraph(graph).setLease(lease);
  }

  static *_data_chunk_iterator_upload_waypoint_snapshot(serialized_waypoint_snapshot, lease, data_chunk_byte_size) {
    const total_bytes_size = serialized_waypoint_snapshot.length;
    const num_chunks = Math.ceil(total_bytes_size / data_chunk_byte_size);
    for (const i of Array.from({ length: num_chunks }, (a, ind) => ind)) {
      const start_index = i * data_chunk_byte_size;
      const end_index = (i + 1) * data_chunk_byte_size;
      const chunk = new data_chunk_pb.DataChunk().setTotalSize(total_bytes_size);
      if (end_index > total_bytes_size) {
        chunk.setData(serialized_waypoint_snapshot.slice(start_index, total_bytes_size));
      } else {
        chunk.setData(serialized_waypoint_snapshot.slice(start_index, end_index));
      }
      const req = new graph_nav_pb.UploadWaypointSnapshotRequest().setChunk(chunk).setLease(lease);
      yield req;
    }
  }

  static *_data_chunk_iterator_upload_edge_snapshot(serialized_edge_snapshot, lease, data_chunk_byte_size) {
    const total_bytes_size = serialized_edge_snapshot.length;
    const num_chunks = Math.ceil(total_bytes_size / data_chunk_byte_size);
    for (const i of Array.from({ length: num_chunks }, (a, ind) => ind)) {
      const start_index = i * data_chunk_byte_size;
      const end_index = (i + 1) * data_chunk_byte_size;
      const chunk = new data_chunk_pb.DataChunk().setTotalSize(total_bytes_size);
      if (end_index > total_bytes_size) {
        chunk.setData(serialized_edge_snapshot.slice(start_index, total_bytes_size));
      } else {
        chunk.setData(serialized_edge_snapshot.slice(start_index, end_index));
      }
      const req = new graph_nav_pb.UploadWaypointSnapshotRequest().setChunk(chunk).setLease(lease);
      yield req;
    }
  }

  static _build_download_graph_request() {
    return new graph_nav_pb.DownloadGraphRequest();
  }

  static _build_download_waypoint_snapshot_request(waypoint_snapshot_id, download_images) {
    return new graph_nav_pb.DownloadWaypointSnapshotRequest()
      .setWaypointSnapshotId(waypoint_snapshot_id)
      .setDownloadImages(download_images);
  }

  static _build_download_edge_snapshot_request(edge_snapshot_id) {
    return new graph_nav_pb.DownloadEdgeSnapshotRequest().setEdgeSnapshotId(edge_snapshot_id);
  }

  static generate_travel_params(max_distance, max_yaw, velocity_limit = null) {
    const travel_params = new graph_nav_pb.TravelParams().setMaxDistance(max_distance).setMaxYaw(max_yaw);
    if (velocity_limit !== null) travel_params.setVelocityLimit(velocity_limit);
    return travel_params;
  }

  static generate_route_params(waypoint_id_list) {
    console.warn('Ne marche peut etre pas ! [graph_nav.js:292]');
    const route_params = new graph_nav_pb.RouteGenParams();
    route_params.array.concat(waypoint_id_list);
    return route_params;
  }

  static build_route(waypoint_id_list, edge_id_list) {
    const route = new nav_pb.Route().setWaypointIdList(waypoint_id_list).setEdgeIdList(edge_id_list);
    return route;
  }
}

class GraphNavServiceResponseError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'GraphNavServiceResponseError';
  }
}

class RequestAbortedError extends GraphNavServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RequestAbortedError';
  }
}

class RequestFailedError extends GraphNavServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RequestFailedError';
  }
}

class RobotFaultedError extends GraphNavServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RobotFaultedError';
  }
}

class UnknownMapInformationError extends GraphNavServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'UnknownMapInformationError';
  }
}

class TimeError extends GraphNavServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'TimeError';
  }
}

class CommandExpiredError extends TimeError {
  constructor(msg) {
    super(msg);
    this.name = 'CommandExpiredError';
  }
}

class NoTimeSyncError extends TimeError {
  constructor(msg) {
    super(msg);
    this.name = 'NoTimeSyncError';
  }
}

class TooDistantError extends TimeError {
  constructor(msg) {
    super(msg);
    this.name = 'TooDistantError';
  }
}

class RobotStateError extends GraphNavServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RobotStateError';
  }
}

class IsRecordingError extends RobotStateError {
  constructor(msg) {
    super(msg);
    this.name = 'IsRecordingError';
  }
}

class RobotImpairedError extends RobotStateError {
  constructor(msg) {
    super(msg);
    this.name = 'RobotImpairedError';
  }
}

class RouteError extends GraphNavServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RouteError';
  }
}

class ConstraintFaultError extends RouteError {
  constructor(msg) {
    super(msg);
    this.name = 'ConstraintFaultError';
  }
}

class InvalidEdgeError extends RouteError {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidEdgeError';
  }
}

class UnkownRouteElementsError extends RouteError {
  constructor(msg) {
    super(msg);
    this.name = 'UnkownRouteElementsError';
  }
}

class NoPathError extends RouteError {
  constructor(msg) {
    super(msg);
    this.name = 'NoPathError';
  }
}

class UnknownWaypointError extends RouteError {
  constructor(msg) {
    super(msg);
    this.name = 'UnknownWaypointError';
  }
}

class RouteNavigationError extends GraphNavServiceResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RouteNavigationError';
  }
}

class FeatureDesertError extends RouteNavigationError {
  constructor(msg) {
    super(msg);
    this.name = 'FeatureDesertError';
  }
}

class RouteNotUpdatingError extends RouteNavigationError {
  constructor(msg) {
    super(msg);
    this.name = 'RouteNotUpdatingError';
  }
}

class RobotLostError extends RouteNavigationError {
  constructor(msg) {
    super(msg);
    this.name = 'RobotLostError';
  }
}

class RobotNotLocalizedToRouteError extends RouteNavigationError {
  constructor(msg) {
    super(msg);
    this.name = 'RobotNotLocalizedToRouteError';
  }
}

class RobotStuckError extends RouteNavigationError {
  constructor(msg) {
    super(msg);
    this.name = 'RobotStuckError';
  }
}

class UnrecongizedCommandError extends RouteNavigationError {
  constructor(msg) {
    super(msg);
    this.name = 'UnrecongizedCommandError';
  }
}

function _localization_from_response(response) {
  return response.getLocalization();
}

function _command_id_from_navigate_route_response(response) {
  return response.getCommandId();
}

function _get_status(response) {
  return response.getStatus();
}

function _get_response(response) {
  return response;
}

function _get_graph(response) {
  return response.getGraph();
}

function _get_streamed_waypoint_snapshot(response) {
  let data = '';
  let num_chunks = 0;
  for (const resp of response) {
    if (num_chunks === 0) {
      data = resp.getChunk().getData();
    } else {
      data += resp.getChunk().getData();
    }
    num_chunks += 1;
  }
  const waypoint_snapshot = new map_pb.WaypointSnapshot();
  if (num_chunks > 0) {
    waypoint_snapshot.deserializeBinaryFromReader(data);
  }
  return waypoint_snapshot;
}

function _get_streamed_edge_snapshot(response) {
  let data = '';
  let num_chunks = 0;
  for (const resp in response) {
    if (num_chunks === 0) {
      data = resp.getChunk().getData();
    } else {
      data += resp.getChunk().getData();
    }
    num_chunks += 1;
  }
  const edge_snapshot = new map_pb.EdgeSnapshot();
  if (num_chunks > 0) {
    edge_snapshot.deserializeBinaryFromReader(data);
  }
  return edge_snapshot;
}

const _SET_LOCALIZATION_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_ROBOT_IMPAIRED: [RobotFaultedError, 'Robot is experiencing a fault condition that prevents localization.'],
  STATUS_UNKNOWN_WAYPOINT: [
    UnknownMapInformationError,
    'The given map information (waypoints,edges,routes) is unknown by the system. The waypoint is unknown.',
  ],
  STATUS_ABORTED: [RequestAbortedError, 'Request was aborted by the system.'],
  STATUS_FAILED: [RequestFailedError, 'Request failed to complete by the system.'],
};

function _set_localization_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(graph_nav_pb.SetLocalizationResponse.Status),
    _SET_LOCALIZATION_STATUS_TO_ERROR,
  );
}

const _NAVIGATE_ROUTE_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_NO_TIMESYNC: [NoTimeSyncError, 'Client has not performed timesync with robot.'],
  STATUS_EXPIRED: [CommandExpiredError, 'The command was received after its end time had already passed.'],
  STATUS_TOO_DISTANT: [TooDistantError, 'The command was too far in the future.'],
  STATUS_ROBOT_IMPAIRED: [RobotImpairedError, 'Robot has a critical perception or behavior fault and cannot navigate.'],
  STATUS_RECORDING: [IsRecordingError, 'Cannot navigate a route while recording a map.'],
  STATUS_UNKNOWN_ROUTE_ELEMENTS: [UnkownRouteElementsError, 'One or more waypoints/edges are not in the map.'],
  STATUS_INVALID_EDGE: [InvalidEdgeError, 'One or more edges do not connect to expected waypoints.'],
  STATUS_CONSTRAINT_FAULT: [ConstraintFaultError, 'Route parameters contained a constraint fault.'],
  STATUS_FEATURE_DESERT: [FeatureDesertError, 'Route contained too many waypoints with low-quality features.'],
  STATUS_LOST: [RobotLostError, 'Cannot issue a navigation request when the robot is already lost.'],
  STATUS_NOT_LOCALIZED_TO_ROUTE: [
    RobotNotLocalizedToRouteError,
    "The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization).",
  ],
  STATUS_COULD_NOT_UPDATE_ROUTE: [
    RouteNotUpdatingError,
    'Graph nav was unable to update and follow the specified route.',
  ],
  STATUS_STUCK: [
    RobotStuckError,
    // eslint-disable-next-line
    'The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to try again.',
  ],
  STATUS_UNRECOGNIZED_COMMAND: [
    UnrecongizedCommandError,
    'Happens when you try to continue a command that was either expired, or had an unrecognized id.',
  ],
};

function _navigate_route_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(graph_nav_pb.NavigateRouteResponse.Status),
    _NAVIGATE_ROUTE_STATUS_TO_ERROR,
  );
}

const _NAVIGATE_TO_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_NO_TIMESYNC: [NoTimeSyncError, 'Client has not performed timesync with robot.'],
  STATUS_EXPIRED: [CommandExpiredError, 'The command was received after its end time had already passed.'],
  STATUS_TOO_DISTANT: [TooDistantError, 'The command was too far in the future.'],
  STATUS_ROBOT_IMPAIRED: [RobotImpairedError, 'Robot has a critical perception or behavior fault and cannot navigate.'],
  STATUS_RECORDING: [IsRecordingError, 'Cannot navigate a route while recording a map.'],
  STATUS_NO_PATH: [NoPathError, 'There is no path to the specified waypoint.'],
  STATUS_UNKNOWN_WAYPOINT: [UnknownWaypointError, 'One or more waypoints are not in the map.'],
  STATUS_FEATURE_DESERT: [FeatureDesertError, 'Route contained too many waypoints with low-quality features.'],
  STATUS_LOST: [RobotLostError, 'Cannot issue a navigation request when the robot is already lost.'],
  STATUS_NOT_LOCALIZED_TO_MAP: [
    RobotNotLocalizedToRouteError,
    "The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization).",
  ],
  STATUS_COULD_NOT_UPDATE_ROUTE: [
    RouteNotUpdatingError,
    'Graph nav was unable to update and follow the specified route.',
  ],
  STATUS_STUCK: [
    RobotStuckError,
    // eslint-disable-next-line
    'The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to try again.',
  ],
};

function _navigate_to_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(graph_nav_pb.NavigateToResponse.Status),
    _NAVIGATE_TO_STATUS_TO_ERROR,
  );
}

function _navigate_feedback_error(response) {
  return null;
}

function _download_waypoint_snapshot_stream_errors(response) {
  for (const resp of response) {
    if (resp.getStatus() === graph_nav_pb.DownloadWaypointSnapshotResponse.Status.STATUS_SNAPSHOT_DOES_NOT_EXIST) {
      return new UnknownMapInformationError(
        'The given map information (waypoints,edges,routes) is unknown by the system.',
      );
    }
  }
  return null;
}

function _download_edge_snapshot_stream_errors(response) {
  for (const resp of response) {
    if (resp.getStatus() === graph_nav_pb.DownloadEdgeSnapshotResponse.Status.STATUS_SNAPSHOT_DOES_NOT_EXIST) {
      return new UnknownMapInformationError(
        'The given map information (waypoints,edges,routes) is unknown by the system.',
      );
    }
  }
  return null;
}

module.exports = {
  GraphNavClient,
  GraphNavServiceResponseError,
  RequestAbortedError,
  RequestFailedError,
  RobotFaultedError,
  UnknownMapInformationError,
  TimeError,
  CommandExpiredError,
  NoTimeSyncError,
  TooDistantError,
  RobotStateError,
  IsRecordingError,
  RobotImpairedError,
  RouteError,
  ConstraintFaultError,
  InvalidEdgeError,
  UnkownRouteElementsError,
  NoPathError,
  UnknownWaypointError,
  RouteNavigationError,
  FeatureDesertError,
  RouteNotUpdatingError,
  RobotLostError,
  RobotNotLocalizedToRouteError,
  RobotStuckError,
  UnrecongizedCommandError,
};
