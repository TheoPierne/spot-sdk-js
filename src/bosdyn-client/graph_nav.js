/**
 * @file For clients to the graphnav service.
 */

'use strict';

const { mkdirSync, writeFileSync } = require('node:fs');

const {
  BaseClient,
  commonHeaderErrors,
  commonLeaseErrors,
  errorFactory,
  handleCommonHeaderErrors,
  handleLeaseUseResultErrors,
  handleUnsetStatusError,
  handleLicenseErrorsIfPresent,
} = require('./common');
const { serializedFromMessages } = require('./data_chunk');
const { ResponseError, UnimplementedError } = require('./exceptions');
const { addLeaseWalletProcessors } = require('./lease');
const { DefaultDict } = require('./util');

const dataChunkPb = require('../bosdyn/api/data_chunk_pb');
const graphNavPb = require('../bosdyn/api/graph_nav/graph_nav_pb');
const { GraphNavServiceClient } = require('../bosdyn/api/graph_nav/graph_nav_service_grpc_pb');
const mapPb = require('../bosdyn/api/graph_nav/map_pb');
const navPb = require('../bosdyn/api/graph_nav/nav_pb');
const leasePb = require('../bosdyn/api/lease_pb');
const { nowSec } = require('../bosdyn-core/util');

/**
 * @typedef {import('../bosdyn/api/geometry_pb').SE2Pose} SE2Pose
 * @typedef {import('../bosdyn/api/geometry_pb').SE3Pose} SE3Pose
 */

/**
 * @typedef {import('./robot').Robot} Robot
 */

/**
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 */

/**
 * Client to the GraphNav service.
 * @extends {BaseClient<GraphNavServiceClient>}
 */
class GraphNavClient extends BaseClient {
  static defaultServiceName = 'graph-nav-service';
  static serviceType = 'bosdyn.api.graph_nav.GraphNavService';

  constructor() {
    super(GraphNavServiceClient);
    /** @type {TimeSyncEndpoint|null} */
    this._timesyncEndpoint = null;
    // In bytes = 1Mb
    this._dataChunkSize = 1024 * 1024;
    this._useStreamingGraphUpload = true;
  }

  /**
   * @param {Robot} other
   */
  async updateFrom(other) {
    super.updateFrom(other);
    if (this.leaseWallet) addLeaseWalletProcessors(this, this.leaseWallet);
    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Version of setLocalization which returns the full response, rather than only the Localization message.
   * @param {navPb.Localization} initialGuessLocalization Operator-supplied guess at localization.
   * @param {SE3Pose} koTformBody Robot SE3Pose protobuf when the initialGuess was made.
   * @param {number} maxDistance Margin of distance (meters) away from the initial guess.
   * @param {number} maxYaw Margin of angle (radians) away from the initial guess.
   * @param {graphNavPb.SetLocalizationRequest.FiducialInit} fiducialInit Tells the initializer whether to
   * use fiducials, and how to use them.
   * @param {number} useFiducialId If using FIDUCIAL_INIT_SPECIFIC, this is the specific fiducial ID to use for
   * initialization.
   * @param {boolean} refineFiducialResultWithIcp Boolean determining if ICP will run after a fiducial is used
   * for an initial guess.
   * @param {boolean} doAmbiguityCheck Boolean where if true, consider how nearby localizations appear.
   * @param {boolean} refineWithVisualFeatures Boolean determining if visual features should be used to refine
   * the estimate. When set,
   * this value overrides refine_fiducial_result_with_icp.
   * @param {boolean} verifyVisualFeaturesQuality When refine_with_visual_features is set, determines if an
   * error is asserted when the
   * refinement is unsuccessful.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.SetLocalizationResponse>}
   */
  setLocalizationFullResponse(
    initialGuessLocalization,
    koTformBody = null,
    maxDistance = null,
    maxYaw = null,
    fiducialInit = graphNavPb.SetLocalizationRequest.FiducialInit.FIDUCIAL_INIT_NEAREST,
    useFiducialId = null,
    refineFiducialResultWithIcp = false,
    doAmbiguityCheck = false,
    refineWithVisualFeatures = false,
    verifyVisualFeaturesQuality = false,
    args,
  ) {
    const req = GraphNavClient._buildSetLocalizationRequest(
      initialGuessLocalization,
      koTformBody,
      maxDistance,
      maxYaw,
      fiducialInit,
      useFiducialId,
      refineFiducialResultWithIcp,
      doAmbiguityCheck,
      refineWithVisualFeatures,
      verifyVisualFeaturesQuality,
    );
    return this.call(this._stub.setLocalization, req, _getResponse, _setLocalizationError, false, args);
  }

  /**
   * Trigger a manual localization. Typically done to provide the initial localization.
   * @param {navPb.Localization} initialGuessLocalization Operator-supplied guess at localization.
   * @param {SE3Pose} koTformBody Robot SE3Pose protobuf when the initialGuess was made.
   * @param {number} maxDistance Margin of distance (meters) away from the initial guess.
   * @param {number} maxYaw Margin of angle (radians) away from the initial guess.
   * @param {graphNavPb.SetLocalizationRequest.FiducialInit} fiducialInit Tells the initializer whether to
   * use fiducials, and how to use them.
   * @param {number} useFiducialId If using FIDUCIAL_INIT_SPECIFIC, this is the specific fiducial ID to use for
   * initialization.
   * @param {boolean} refineFiducialResultWithIcp Boolean determining if ICP will run after a fiducial is used
   * for an initial guess.
   * @param {boolean} doAmbiguityCheck Boolean where if true, consider how nearby localizations appear.
   * @param {boolean} refineWithVisualFeatures Boolean determining if visual features should be used to refine
   * the estimate. When set,
   * this value overrides refine_fiducial_result_with_icp.
   * @param {boolean} verifyVisualFeaturesQuality When refine_with_visual_features is set, determines if an
   * error is asserted when the
   * refinement is unsuccessful.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<navPb.Localization>}
   */
  setLocalization(
    initialGuessLocalization,
    koTformBody = null,
    maxDistance = null,
    maxYaw = null,
    fiducialInit = graphNavPb.SetLocalizationRequest.FiducialInit.FIDUCIAL_INIT_NEAREST,
    useFiducialId = null,
    refineFiducialResultWithIcp = false,
    doAmbiguityCheck = false,
    refineWithVisualFeatures = false,
    verifyVisualFeaturesQuality = false,
    args,
  ) {
    const req = GraphNavClient._buildSetLocalizationRequest(
      initialGuessLocalization,
      koTformBody,
      maxDistance,
      maxYaw,
      fiducialInit,
      useFiducialId,
      refineFiducialResultWithIcp,
      doAmbiguityCheck,
      refineWithVisualFeatures,
      verifyVisualFeaturesQuality,
    );
    return this.call(this._stub.setLocalization, req, _localizationFromResponse, _setLocalizationError, false, args);
  }

  /**
   * Obtain current localization state of the robot.
   * @param {boolean} [requestLivePointCloud=false] Request live point cloud
   * @param {boolean} [requestLiveImages=false] Request live images
   * @param {boolean} [requestLiveTerrainMaps=false] Request live terrain maps
   * @param {boolean} [requestLiveWorldObjects=false] Request live world objects
   * @param {boolean} [requestLiveRobotState=false] Request live robot state
   * @param {?string} [waypointId=null] The waypoint relative to which the localization is expressed (the waypoint of
   * the localization if unset), like Python.
   * @param {boolean} [requestGpsState=false] Request the GPS state, like Python.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.GetLocalizationStateResponse>}
   */
  getLocalizationState(
    requestLivePointCloud = false,
    requestLiveImages = false,
    requestLiveTerrainMaps = false,
    requestLiveWorldObjects = false,
    requestLiveRobotState = false,
    waypointId = null,
    requestGpsState = false,
    args,
  ) {
    const req = GraphNavClient._buildGetLocalizationStateRequest(
      requestLivePointCloud,
      requestLiveImages,
      requestLiveTerrainMaps,
      requestLiveWorldObjects,
      requestLiveRobotState,
      waypointId,
      requestGpsState,
    );
    return this.call(this._stub.getLocalizationState, req, null, commonHeaderErrors, false, args);
  }

  /**
   * Navigate the given route.
   * @param {navPb.Route} route Route protobuf of the route to follow.
   * @param {number} cmdDuration Number of seconds the command can run for.
   * @param {?graphNavPb.RouteFollowingParams} routeFollowParams What should the robot do if it is not at
   * the expected point in the route, or the route is blocked.
   * @param {?graphNavPb.TravelParams} travelParams API TravelParams for the route.
   * @param {*} leases Leases to show ownership of necessary resources. Will use the client's leases by default.
   * @param {?TimeSyncEndpoint} timesyncEndpoint Use this endpoint for timesync fields. Will use the client's
   * endpoint by default.
   * @param {?number} commandId If not null, this continues an existing navigateRoute command with the given ID.
   * If null, a new commandId will be used.
   * @param {?SE2Pose} destinationWaypointTformBodyGoal SE2Pose protobuf of an offset relative to the
   * destination waypoint.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  // The navigate methods are async: a missing time sync (or a failure of the time conversion) rejects their promise,
  // it was thrown synchronously (not caught by a .catch()).

  async navigateRoute(
    route,
    cmdDuration,
    routeFollowParams = null,
    travelParams = null,
    leases = null,
    timesyncEndpoint = null,
    commandId = null,
    destinationWaypointTformBodyGoal = null,
    args,
  ) {
    const usedEndpoint = timesyncEndpoint || this._timesyncEndpoint;
    if (!usedEndpoint) throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    const request = GraphNavClient._buildNavigateRouteRequest(
      route,
      routeFollowParams,
      travelParams,
      cmdDuration,
      leases,
      usedEndpoint,
      commandId,
      destinationWaypointTformBodyGoal,
    );
    return this.call(
      this._stub.navigateRoute,
      request,
      _commandIdFromNavigateRouteResponse,
      _navigateRouteError,
      false,
      args,
    );
  }

  /**
   * Identical to {@link GraphNavClient#navigateRoute}, except will return the full NavigateRouteResponse.
   * @param {navPb.Route} route Route protobuf of the route to follow.
   * @param {number} cmdDuration Number of seconds the command can run for.
   * @param {?graphNavPb.RouteFollowingParams} routeFollowParams What should the robot do if it is not at
   * the expected point in the route, or the route is blocked.
   * @param {?graphNavPb.TravelParams} travelParams API TravelParams for the route.
   * @param {*} leases Leases to show ownership of necessary resources. Will use the client's leases by default.
   * @param {?TimeSyncEndpoint} timesyncEndpoint Use this endpoint for timesync fields. Will use the client's
   * endpoint by default.
   * @param {?number} commandId If not null, this continues an existing navigateRoute command with the given ID.
   * If null, a new commandId will be used.
   * @param {?SE2Pose} destinationWaypointTformBodyGoal SE2Pose protobuf of an offset relative to the
   * destination waypoint.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.NavigateRouteResponse>}
   */

  async navigateRouteFull(
    route,
    cmdDuration,
    routeFollowParams = null,
    travelParams = null,
    leases = null,
    timesyncEndpoint = null,
    commandId = null,
    destinationWaypointTformBodyGoal = null,
    args,
  ) {
    const usedEndpoint = timesyncEndpoint || this._timesyncEndpoint;
    if (!usedEndpoint) throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    const request = GraphNavClient._buildNavigateRouteRequest(
      route,
      routeFollowParams,
      travelParams,
      cmdDuration,
      leases,
      usedEndpoint,
      commandId,
      destinationWaypointTformBodyGoal,
    );
    return this.call(this._stub.navigateRoute, request, null, _navigateRouteError, false, args);
  }

  /**
   * Navigate to a specific waypoint along a route chosen by the GraphNav service.
   * @param {string} destinationWaypointId Waypoint id string for where to go to.
   * @param {number} cmdDuration Number of seconds the command can run for.
   * @param {?graphNavPb.RouteGenParams} routeParams API RouteGenParams for the route.
   * @param {?graphNavPb.TravelParams} travelParams API TravelParams for the route.
   * @param {*} leases Leases to show ownership of necessary resources. Will use the client's leases by default.
   * @param {?TimeSyncEndpoint} timesyncEndpoint Use this endpoint for timesync fields. Will use the client's
   * endpoint by default.
   * @param {?number} commandId If not null, this continues an existing {@link GraphNavClient#navigateTo} command with
   * the given ID. If null, a new commandId will be used.
   * @param {?SE2Pose} destinationWaypointTformBodyGoal SE2Pose protobuf of an offset relative to
   * the destination waypoint.
   * @param {graphNavPb.RouteFollowingParams.RouteBlockedBehavior} routeBlockedBehavior Defines robot behavior when
   * route is block. If None robot will reroute.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */

  async navigateTo(
    destinationWaypointId,
    cmdDuration,
    routeParams = null,
    travelParams = null,
    leases = null,
    timesyncEndpoint = null,
    commandId = null,
    destinationWaypointTformBodyGoal = null,
    routeBlockedBehavior = null,
    args,
  ) {
    const usedEndpoint = timesyncEndpoint || this._timesyncEndpoint;
    if (!usedEndpoint) throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    const request = GraphNavClient._buildNavigateToRequest(
      destinationWaypointId,
      travelParams,
      routeParams,
      cmdDuration,
      leases,
      usedEndpoint,
      commandId,
      destinationWaypointTformBodyGoal,
      routeBlockedBehavior,
    );
    return this.call(
      this._stub.navigateTo,
      request,
      _commandIdFromNavigateRouteResponse,
      _navigateToError,
      false,
      args,
    );
  }

  /**
   * Identical to {@link GraphNavClient#navigateTo}, except will return the full NavigateToResponse.
   * @param {string} destinationWaypointId Waypoint id string for where to go to.
   * @param {number} cmdDuration Number of seconds the command can run for.
   * @param {?graphNavPb.RouteGenParams} routeParams API RouteGenParams for the route.
   * @param {?graphNavPb.TravelParams} travelParams API TravelParams for the route.
   * @param {*} leases Leases to show ownership of necessary resources. Will use the client's leases by default.
   * @param {?TimeSyncEndpoint} timesyncEndpoint Use this endpoint for timesync fields. Will use the client's
   * endpoint by default.
   * @param {?number} commandId If not null, this continues an existing {@link GraphNavClient#navigateToFull} command
   * with
   * the given ID. If null, a new commandId will be used.
   * @param {?SE2Pose} destinationWaypointTformBodyGoal SE2Pose protobuf of an offset relative to
   * the destination waypoint.
   * @param {graphNavPb.RouteFollowingParams.RouteBlockedBehavior} routeBlockedBehavior Defines robot behavior when
   * route is block. If None robot will reroute.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.NavigateToResponse>}
   */

  async navigateToFull(
    destinationWaypointId,
    cmdDuration,
    routeParams = null,
    travelParams = null,
    leases = null,
    timesyncEndpoint = null,
    commandId = null,
    destinationWaypointTformBodyGoal = null,
    routeBlockedBehavior = null,
    args,
  ) {
    const usedEndpoint = timesyncEndpoint || this._timesyncEndpoint;

    if (!usedEndpoint) {
      throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    }

    const request = GraphNavClient._buildNavigateToRequest(
      destinationWaypointId,
      travelParams,
      routeParams,
      cmdDuration,
      leases,
      usedEndpoint,
      commandId,
      destinationWaypointTformBodyGoal,
      routeBlockedBehavior,
    );

    return this.call(this._stub.navigateTo, request, null, _navigateToError, false, args);
  }

  /**
   * Navigate to a pose in seed frame along a route chosen by the GraphNav service.
   * @param {SE3Pose} seedTformGoal SE3Pose protobuf of the goal pose in seed frame.
   * @param {number} cmdDuration Number of seconds the command can run for.
   * @param {?graphNavPb.RouteGenParams} routeParams API RouteGenParams for the route.
   * @param {?graphNavPb.TravelParams} travelParams API TravelParams for the route.
   * @param {*} leases Leases to show ownership of necessary resources. Will use the client's leases by default.
   * @param {?TimeSyncEndpoint} timesyncEndpoint Use this endpoint for timesync fields. Will use the client's endpoint
   * by default.
   * @param {*} goalWaypointRtSeedEwrtSeedTolerance Vec3 protobuf of the tolerances for goal waypoint selection.
   * @param {*} commandId If not null, this continues an existing navigate_to command with the given ID. If null,
   * a new command_id will be used.
   * @param {*} gpsNavigationParams API GPSNavigationParams. If not null, this will be interpreted as a GPS-based
   * navigation command. seed_tform_goal will be ignored and whatever goal is passed in using the GPS
   * navigation params will be used.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */

  async navigateToAnchor(
    seedTformGoal,
    cmdDuration,
    routeParams = null,
    travelParams = null,
    leases = null,
    timesyncEndpoint = null,
    goalWaypointRtSeedEwrtSeedTolerance = null,
    commandId = null,
    gpsNavigationParams = null,
    args,
  ) {
    const usedEndpoint = timesyncEndpoint || this._timesyncEndpoint;

    if (!usedEndpoint) {
      throw new GraphNavServiceResponseError(null, 'No timesync endpoint!');
    }

    const request = GraphNavClient._buildNavigateToAnchorRequest(
      seedTformGoal,
      travelParams,
      routeParams,
      cmdDuration,
      leases,
      usedEndpoint,
      commandId,
      goalWaypointRtSeedEwrtSeedTolerance,
      gpsNavigationParams,
    );

    return this.call(
      this._stub.navigateToAnchor,
      request,
      _commandIdFromNavigateRouteResponse,
      _navigateToAnchorError,
      false,
      args,
    );
  }

  /**
   * Returns the feedback corresponding to the active route follow command.
   * @param {number} commandId If blank, will return current command status. If filled out, will attempt
   * to return that command status
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.NavigationFeedbackResponse>}
   */
  navigationFeedback(commandId = 0, args) {
    const request = new graphNavPb.NavigationFeedbackRequest().setCommandId(commandId);
    return this.call(this._stub.navigationFeedback, request, _getResponse, _navigateFeedbackError, false, args);
  }

  /**
   * Clears the local graph structure. Also erases any snapshots currently in RAM.
   * @param {leasePb.Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.ClearGraphResponse>}
   */
  clearGraph(lease = null, args) {
    const request = GraphNavClient._buildClearGraphRequest(lease);
    return this.call(this._stub.clearGraph, request, null, _clearGraphError, false, args);
  }

  /**
   * Uploads a graph to the server and appends to the existing graph.
   * @param {?leasePb.Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {?mapPb.Graph} graph Graph protobuf that represents the map with waypoints and edges.
   * @param {?boolean} generateNewAnchoring Whether to generate an (overwrite the) anchoring on upload.
   * @param {?boolean} replaceGraph If true, replaces the existing graph with the new one rather than adding to it.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.UploadGraphResponse>}
   */
  async uploadGraph(lease = null, graph = null, generateNewAnchoring = false, replaceGraph = false, args) {
    let request = GraphNavClient._buildUploadGraphRequest(lease, graph, generateNewAnchoring, replaceGraph);
    if (this._useStreamingGraphUpload) {
      // Need to manually apply request processors since this will be serialized and chunked.
      this._applyRequestProcessors(request, false);
      const serialized = request.serializeBinary();

      try {
        // `await` so that the rejection is caught here and the fallback can run.
        return await this.call(
          this._stub.uploadGraphStreaming,
          GraphNavClient._dataChunkIteratorUploadGraph(serialized, this._dataChunkSize),
          _getResponse,
          _uploadGraphError,
          false,
          args,
        );
      } catch (err) {
        // Like Python, only an old robot release without streaming falls back to UploadGraph.
        if (!(err instanceof UnimplementedError)) throw err;
        this.logger.warn('UploadGraphStreaming unimplemented. Old robot release?');
        // Recreate the request so that we clear any state that might have happened during our attempt to stream.
        request = GraphNavClient._buildUploadGraphRequest(lease, graph, generateNewAnchoring, replaceGraph);
      }
    }
    return this.call(this._stub.uploadGraph, request, _getResponse, _uploadGraphError, false, args);
  }

  /**
   * Uploads large waypoint snapshot as a stream for a particular waypoint.
   * @param {mapPb.WaypointSnapshot} waypointSnapshot WaypointSnapshot protobuf that will be
   * stream-uploaded to the robot.
   * @param {?leasePb.Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.UploadWaypointSnapshotResponse>}
   */
  uploadWaypointSnapshot(waypointSnapshot, lease = null, args) {
    // Like Python: an empty lease rather than none, so the lease wallet does not advance a lease per chunk.
    lease = lease || new leasePb.Lease();
    const serialized = waypointSnapshot.serializeBinary();
    const request = GraphNavClient._dataChunkIteratorUploadWaypointSnapshot(serialized, lease, this._dataChunkSize);
    return this.call(this._stub.uploadWaypointSnapshot, request, null, _uploadWaypointSnapshotError, true, args);
  }

  /**
   * Uploads large edge snapshot as a stream for a particular edge.
   * @param {mapPb.EdgeSnapshot} edgeSnapshot EdgeSnapshot protobuf that will
   * be stream-uploaded to the robot.
   * @param {?leasePb.Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.UploadWaypointSnapshotResponse>}
   */
  uploadEdgeSnapshot(edgeSnapshot, lease = null, args) {
    // Like Python: an empty lease rather than none, so the lease wallet does not advance a lease per chunk.
    lease = lease || new leasePb.Lease();
    const serialized = edgeSnapshot.serializeBinary();
    const request = GraphNavClient._dataChunkIteratorUploadEdgeSnapshot(serialized, lease, this._dataChunkSize);
    return this.call(
      this._stub.uploadEdgeSnapshot,
      request,
      null,
      handleCommonHeaderErrors(commonLeaseErrors),
      true,
      args,
    );
  }

  /**
   * Uploads multiple snapshots as a stream.
   * graph_nav only processes complete Snapshots so large protos are discouraged;
   * any network interruption would require the data to be resent. Clients are
   * encouraged to send data in batches on the order of a few MB to strike a
   * balance between eliminating per-RPC overhead and recovering from errors.
   * @param {graphNavPb.UploadSnapshotsRequest.Snapshots} snapshots UploadSnapshotsRequest.Snapshots protobuf that will
   * be stream-uploaded to the robot.
   * @param {?leasePb.Lease} lease Leases to show ownership of necessary resources. Will use the client's leases by
   * default.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.UploadSnapshotsResponse>}
   */
  uploadSnapshots(snapshots, lease = null, args = {}) {
    lease = lease || new leasePb.Lease();
    const serialized = snapshots.serializeBinary();
    const request = GraphNavClient._dataChunkIteratorUploadSnapshots(serialized, lease, this._dataChunkSize);
    return this.call(
      this._stub.uploadSnapshots,
      request,
      null,
      handleCommonHeaderErrors(commonLeaseErrors),
      true,
      args,
    );
  }

  /**
   * Alias of uploadSnapshots(), the name of Python.
   * @param {graphNavPb.UploadSnapshotsRequest.Snapshots} snapshots
   * @param {?leasePb.Lease} [lease=null]
   * @param {Object} [args]
   * @returns {Promise<graphNavPb.UploadSnapshotsResponse>}
   */
  uploadSnapshot(snapshots, lease = null, args = {}) {
    return this.uploadSnapshots(snapshots, lease, args);
  }

  /**
   * Downloads the graph from the server.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<mapPb.Graph>}
   */
  async downloadGraph(args) {
    const request = GraphNavClient._buildDownloadGraphRequest();

    if (this._useStreamingGraphUpload) {
      try {
        // `await` so that the rejection is caught here and the fallback can run.
        return await this.call(
          this._stub.downloadGraphStreaming,
          request,
          _getStreamedDownloadGraph,
          _downloadGraphStreamErrors,
          false,
          args,
        );
      } catch (err) {
        // Like Python, only an old robot release without streaming falls back to DownloadGraph.
        if (!(err instanceof UnimplementedError)) throw err;
        this.logger.warn('DownloadGraphStreaming unimplemented. Old robot release?');
      }
    }

    return this.call(this._stub.downloadGraph, request, _getGraph, commonHeaderErrors, false, args);
  }

  /**
   * Download a specific waypoint snapshot with streaming from the server.
   * @param {string} waypointSnapshotId WaypointSnapshot string ID for which snapshot to download from robot.
   * @param {boolean} downloadImages Boolean indicating whether to include images in the download.
   * @param {boolean} doNotDownloadPointCloud Boolean indicating if point cloud data should not be downloaded.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<mapPb.WaypointSnapshot>}
   */
  downloadWaypointSnapshot(waypointSnapshotId, downloadImages = false, doNotDownloadPointCloud = false, args) {
    const request = GraphNavClient._buildDownloadWaypointSnapshotRequest(
      waypointSnapshotId,
      downloadImages,
      doNotDownloadPointCloud,
    );
    return this.call(
      this._stub.downloadWaypointSnapshot,
      request,
      _getStreamedWaypointSnapshot,
      _downloadWaypointSnapshotStreamErrors,
      false,
      args,
    );
  }

  /**
   * Downloads a specific edge snapshot with streaming from the server.
   * @param {string} edgeSnapshotId EdgeSnapshot string ID for which snapshot to download from robot.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<mapPb.EdgeSnapshot>}
   */
  downloadEdgeSnapshot(edgeSnapshotId, args) {
    const request = GraphNavClient._buildDownloadEdgeSnapshotRequest(edgeSnapshotId);
    return this.call(
      this._stub.downloadEdgeSnapshot,
      request,
      _getStreamedEdgeSnapshot,
      _downloadEdgeSnapshotStreamErrors,
      false,
      args,
    );
  }

  _writeBytes(filepath, filename, data) {
    mkdirSync(filepath, { recursive: true });
    writeFileSync(`${filepath}${filename}`, data);
  }

  /**
   * Download the graph and snapshots from robot to the specified directory.
   * @param {string} directory Directory to write the graph and snapshot
   */
  async writeGraphAndSnapshots(directory) {
    const graph = await this.downloadGraph();
    const graphBytes = graph.serializeBinary();
    this._writeBytes(directory, '/graph', graphBytes);

    for (const waypoint of graph.getWaypointsList()) {
      if (waypoint.getSnapshotId().length === 0) continue;
      const waypointSnapshot = await this.downloadWaypointSnapshot(waypoint.getSnapshotId());
      this._writeBytes(
        `${directory}/waypoint_snapshots`,
        `/${waypoint.getSnapshotId()}`,
        waypointSnapshot.serializeBinary(),
      );
    }

    for (const edge of graph.getEdgesList()) {
      if (edge.getSnapshotId().length === 0) continue;
      const edgeSnapshot = await this.downloadEdgeSnapshot(edge.getSnapshotId());
      this._writeBytes(`${directory}/edge_snapshots`, `/${edge.getSnapshotId()}`, edgeSnapshot.serializeBinary());
    }
  }

  static _buildSetLocalizationRequest(
    initialGuessLocalization,
    koTformBody = null,
    maxDistance = null,
    maxYaw = null,
    fiducialInit = graphNavPb.SetLocalizationRequest.FiducialInit.FIDUCIAL_INIT_NEAREST,
    useFiducialId = null,
    refineFiducialResultWithIcp = false,
    doAmbiguityCheck = false,
    refineWithVisualFeatures = false,
    verifyVisualFeaturesQuality = false,
  ) {
    const request = new graphNavPb.SetLocalizationRequest()
      .setInitialGuess(initialGuessLocalization)
      .setFiducialInit(fiducialInit);

    if (koTformBody !== null) request.setKoTformBody(koTformBody);
    if (maxDistance !== null) request.setMaxDistance(maxDistance);
    if (maxYaw !== null) request.setMaxYaw(maxYaw);

    if (fiducialInit === graphNavPb.SetLocalizationRequest.FiducialInit.FIDUCIAL_INIT_SPECIFIC) {
      if (useFiducialId !== null) request.setUseFiducialId(useFiducialId);
    }

    if (refineWithVisualFeatures) {
      const refineWithVisualFeaturesProto = new graphNavPb.VisualRefinementOptions().setVerifyRefinementQuality(
        verifyVisualFeaturesQuality,
      );
      request.setRefineWithVisualFeatures(refineWithVisualFeaturesProto);
    } else if (refineFiducialResultWithIcp) {
      request.setRefineFiducialResultWithIcp(refineFiducialResultWithIcp);
    }

    request.setDoAmbiguityCheck(doAmbiguityCheck);
    return request;
  }

  static _buildGetLocalizationStateRequest(
    requestLivePointCloud,
    requestLiveImages,
    requestLiveTerrainMaps,
    requestLiveWorldObjects,
    requestLiveRobotState,
    waypointId = null,
    requestGpsState = false,
  ) {
    return new graphNavPb.GetLocalizationStateRequest()
      .setWaypointId(waypointId ?? '')
      .setRequestLivePointCloud(requestLivePointCloud)
      .setRequestLiveImages(requestLiveImages)
      .setRequestLiveTerrainMaps(requestLiveTerrainMaps)
      .setRequestLiveWorldObjects(requestLiveWorldObjects)
      .setRequestLiveRobotState(requestLiveRobotState)
      .setRequestGpsState(requestGpsState);
  }

  static _buildNavigateRouteRequest(
    route,
    routeFollowParams,
    travelParams,
    endTimeSecs,
    leases,
    timesyncEndpoint,
    commandId,
    destinationWaypointTformBodyGoal,
  ) {
    const converter = timesyncEndpoint.getRobotTimeConverter();
    const request = new graphNavPb.NavigateRouteRequest()
      .setRoute(route)
      .setRouteFollowParams(routeFollowParams)
      .setDestinationWaypointTformBodyGoal(destinationWaypointTformBodyGoal)
      .setClockIdentifier(timesyncEndpoint.clockIdentifier);
    if (travelParams) request.setTravelParams(travelParams);
    request.setEndTime(converter.robotTimestampFromLocalSecs(nowSec() + endTimeSecs));
    if (commandId) request.setCommandId(commandId);
    return request;
  }

  static _buildNavigateToRequest(
    destinationWaypointId,
    travelParams = null,
    routeParams = null,
    endTimeSecs,
    leases,
    timesyncEndpoint,
    commandId,
    destinationWaypointTformBodyGoal,
    routeBlockedBehavior,
  ) {
    const converter = timesyncEndpoint.getRobotTimeConverter();
    const request = new graphNavPb.NavigateToRequest()
      .setDestinationWaypointId(destinationWaypointId)
      .setClockIdentifier(timesyncEndpoint.clockIdentifier)
      .setDestinationWaypointTformBodyGoal(destinationWaypointTformBodyGoal)
      .setEndTime(converter.robotTimestampFromLocalSecs(nowSec() + endTimeSecs));
    if (travelParams !== null) request.setTravelParams(travelParams);
    if (routeParams !== null) request.setRouteParams(routeParams);
    if (commandId) request.setCommandId(commandId);
    if (routeBlockedBehavior) request.setRouteBlockedBehavior(routeBlockedBehavior);
    return request;
  }

  static _buildNavigateToAnchorRequest(
    seedTformGoal,
    travelParams,
    routeParams,
    endTimeSecs,
    leases,
    timesyncEndpoint,
    commandId,
    goalWaypointRtSeedEwrtSeedTolerance,
    gpsNavigationParams,
  ) {
    const converter = timesyncEndpoint.getRobotTimeConverter();
    const request = new graphNavPb.NavigateToAnchorRequest()
      .setSeedTformGoal(seedTformGoal)
      .setGoalWaypointRtSeedEwrtSeedTolerance(goalWaypointRtSeedEwrtSeedTolerance)
      .setClockIdentifier(timesyncEndpoint.clockIdentifier)
      .setEndTime(converter.robotTimestampFromLocalSecs(nowSec() + endTimeSecs));

    if (gpsNavigationParams) {
      request.setGpsNavigationParams(gpsNavigationParams);
    }
    if (travelParams) {
      request.setTravelParams(travelParams);
    }
    if (routeParams) {
      request.setRouteParams(routeParams);
    }
    if (commandId) {
      request.setCommandId(commandId);
    }
    return request;
  }

  static _buildClearGraphRequest(lease) {
    lease = lease || new leasePb.Lease();
    return new graphNavPb.ClearGraphRequest().setLease(lease);
  }

  static _buildUploadGraphRequest(lease, graph, generateNewAnchoring, replaceGraph) {
    lease = lease || new leasePb.Lease();
    return new graphNavPb.UploadGraphRequest()
      .setGraph(graph)
      .setLease(lease)
      .setGenerateNewAnchoring(generateNewAnchoring)
      .setReplaceGraph(replaceGraph);
  }

  static *_dataChunkIteratorUploadGraph(serializedUploadGraph, dataChunkByteSize) {
    const totalByteSize = serializedUploadGraph.length;
    const numChunks = Math.ceil(totalByteSize / dataChunkByteSize);

    for (const i of Array.from({ length: numChunks }, (a, ind) => ind)) {
      const startIndex = i * dataChunkByteSize;
      const endIndex = (i + 1) * dataChunkByteSize;
      const chunk = new dataChunkPb.DataChunk().setTotalSize(totalByteSize);
      if (endIndex > totalByteSize) {
        chunk.setData(serializedUploadGraph.subarray(startIndex, totalByteSize));
      } else {
        chunk.setData(serializedUploadGraph.subarray(startIndex, endIndex));
      }

      yield new graphNavPb.UploadGraphStreamingRequest().setChunk(chunk);
    }
  }

  static *_dataChunkIteratorUploadWaypointSnapshot(serializedWaypointSnapshot, lease, dataChunkByteSize) {
    const totalBytesSize = serializedWaypointSnapshot.length;
    const numChunks = Math.ceil(totalBytesSize / dataChunkByteSize);
    for (const i of Array.from({ length: numChunks }, (a, ind) => ind)) {
      const startIndex = i * dataChunkByteSize;
      const endIndex = (i + 1) * dataChunkByteSize;
      const chunk = new dataChunkPb.DataChunk().setTotalSize(totalBytesSize);
      if (endIndex > totalBytesSize) {
        chunk.setData(serializedWaypointSnapshot.subarray(startIndex, totalBytesSize));
      } else {
        chunk.setData(serializedWaypointSnapshot.subarray(startIndex, endIndex));
      }
      yield new graphNavPb.UploadWaypointSnapshotRequest().setChunk(chunk).setLease(lease);
    }
  }

  static *_dataChunkIteratorUploadEdgeSnapshot(serializedEdgeSnapshot, lease, dataChunkByteSize) {
    const totalBytesSize = serializedEdgeSnapshot.length;
    const numChunks = Math.ceil(totalBytesSize / dataChunkByteSize);
    for (const i of Array.from({ length: numChunks }, (a, ind) => ind)) {
      const startIndex = i * dataChunkByteSize;
      const endIndex = (i + 1) * dataChunkByteSize;
      const chunk = new dataChunkPb.DataChunk().setTotalSize(totalBytesSize);
      if (endIndex > totalBytesSize) {
        chunk.setData(serializedEdgeSnapshot.subarray(startIndex, totalBytesSize));
      } else {
        chunk.setData(serializedEdgeSnapshot.subarray(startIndex, endIndex));
      }
      yield new graphNavPb.UploadEdgeSnapshotRequest().setChunk(chunk).setLease(lease);
    }
  }

  static *_dataChunkIteratorUploadSnapshots(serializedSnapshots, lease, dataChunkByteSize) {
    const totalBytesSize = serializedSnapshots.length;
    if (totalBytesSize === 0) {
      const req = new graphNavPb.UploadSnapshotsRequest().setLease(lease);
      yield req;
    }

    const numChunks = Math.ceil(totalBytesSize / dataChunkByteSize);
    for (const i of Array.from({ length: numChunks }, (a, ind) => ind)) {
      const startIndex = i * dataChunkByteSize;
      const endIndex = (i + 1) * dataChunkByteSize;
      const chunk = new dataChunkPb.DataChunk().setTotalSize(totalBytesSize);
      if (endIndex > totalBytesSize) {
        chunk.setData(serializedSnapshots.subarray(startIndex, totalBytesSize));
      } else {
        chunk.setData(serializedSnapshots.subarray(startIndex, endIndex));
      }
      yield new graphNavPb.UploadSnapshotsRequest().setLease(lease).setChunk(chunk);
    }
  }

  static _buildDownloadGraphRequest() {
    return new graphNavPb.DownloadGraphRequest();
  }

  static _buildDownloadWaypointSnapshotRequest(waypointSnapshotId, downloadImages, doNotDownloadPointCloud = false) {
    return new graphNavPb.DownloadWaypointSnapshotRequest()
      .setWaypointSnapshotId(waypointSnapshotId)
      .setDownloadImages(downloadImages)
      .setDoNotDownloadPointCloud(doNotDownloadPointCloud);
  }

  static _buildDownloadEdgeSnapshotRequest(edgeSnapshotId) {
    return new graphNavPb.DownloadEdgeSnapshotRequest().setEdgeSnapshotId(edgeSnapshotId);
  }

  /**
   * Generate the API TravelParams for navigation requests.
   */
  static generateTravelParams(maxDistance, maxYaw, velocityLimit = null) {
    const travelParams = new graphNavPb.TravelParams().setMaxDistance(maxDistance).setMaxYaw(maxYaw);
    if (velocityLimit !== null) travelParams.setVelocityLimit(velocityLimit);
    return travelParams;
  }

  /**
   * Generate the API Route for navigation requests.
   */
  static buildRoute(waypointIdList, edgeIdList) {
    return new navPb.Route().setWaypointIdList(waypointIdList).setEdgeIdList(edgeIdList);
  }
}

/** General class of errors for the GraphNav Recording Service. */
class GraphNavServiceResponseError extends ResponseError {}

/** Errors related to uploading a waypoint snapshot */
class UploadWaypointSnapshotError extends GraphNavServiceResponseError {}
/** Errors related to uploading a graph. */
class UploadGraphError extends GraphNavServiceResponseError {}
/** The map is too large for the license on the robot. */
class MapTooLargeLicenseError extends UploadGraphError {}
/** The graph is invalid topologically, e.g. missing waypoints referenced by edges. */
class InvalidGraphError extends UploadGraphError {}

/**
 * The map was recorded with using a sensor configuration which is incompatible with the robot (for example, LIDAR
 * configuration).
 */
class IncompatibleSensorsError extends GraphNavServiceResponseError {}
/** The map specified an area callback that is not registered or is faulted. */
class AreaCallbackMapError extends GraphNavServiceResponseError {}
/** Request was aborted by the system. */
class RequestAbortedError extends GraphNavServiceResponseError {}
/** Request failed to complete by the system. */
class RequestFailedError extends GraphNavServiceResponseError {}
/** Robot is experiencing a fault condition that prevents localization. */
class RobotFaultedError extends GraphNavServiceResponseError {}
/** The given map information (waypoints,edges,routes) is unknown by the system. */
class UnknownMapInformationError extends GraphNavServiceResponseError {}

/** Errors associated with timestamps and time sync. */
class TimeError extends GraphNavServiceResponseError {}
/** The command was received after its end time had already passed. */
class CommandExpiredError extends TimeError {}
/** Client has not performed timesync with robot. */
class NoTimeSyncError extends TimeError {}
/** The command was too far in the future. */
class TooDistantError extends TimeError {}

/** Errors associated with the current state of the robot. */
class RobotStateError extends GraphNavServiceResponseError {}
/** Cannot navigate a route while recording a map. */
class IsRecordingError extends RobotStateError {}
/** Cannot clear the map during recording. Call StopRecording first. */
class CannotModifyMapDuringRecordingError extends RobotStateError {}
/** Robot has a critical perception or behavior fault and cannot navigate. */
class RobotImpairedError extends RobotStateError {}

/** Errors associated with the specified route. */
class RouteError extends GraphNavServiceResponseError {}
/** Route parameters contained a constraint fault. */
class ConstraintFaultError extends RouteError {}
/** One or more edges do not connect to expected waypoints. */
class InvalidEdgeError extends RouteError {}
/** Deprecated name (misspelled) of Python, the parent class of UnknownRouteElementsError. */
class UnkownRouteElementsError extends RouteError {}
/** One or more waypoints/edges are not in the map. */
class UnknownRouteElementsError extends UnkownRouteElementsError {}
/** There is no path to the specified waypoint. */
class NoPathError extends RouteError {}
/** One or more waypoints are not in the map. */
class UnknownWaypointError extends RouteError {}
/** There is no anchoring. */
class NoAnchoringError extends RouteError {}
/** The requested pose is invalid, or known to be unachievable. */
class InvalidPoseError extends RouteError {}

/** Errors related to how the robot navigates the route. */
class RouteNavigationError extends GraphNavServiceResponseError {}
/** Route contained too many waypoints with low-quality features. */
class FeatureDesertError extends RouteNavigationError {}
/** Graph nav was unable to update and follow the specified route. */
class RouteNotUpdatingError extends RouteNavigationError {}
/** Cannot issue a navigation request when the robot is already lost. */
class RobotLostError extends RouteNavigationError {}

/**
 * Cannot issue the GPS command because it is invalid.
 */
class InvalidGPSError extends RouteNavigationError {
  _gpsStatusToString(status) {
    const { GPSStatus } = graphNavPb.NavigateToAnchorResponse;
    if (status === GPSStatus.GPS_STATUS_OK) return 'OK';
    if (status === GPSStatus.GPS_STATUS_NO_COORDS_IN_MAP) {
      return 'The uploaded map did not contain any valid GPS coordinates.';
    }
    if (status === GPSStatus.GPS_STATUS_TOO_FAR_FROM_MAP) {
      return 'The given coordinates were too far from any coordinates in the uploaded map.';
    }
    return 'Unknown error';
  }

  toString() {
    return `${this.message} (reason: ${this._gpsStatusToString(this.response?.getGpsStatus?.())})`;
  }
}

/** The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization). */
class RobotNotLocalizedToRouteError extends RouteNavigationError {}
/**
 * The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to
 * try again.
 */
class RobotStuckError extends RouteNavigationError {}
/** Happens when you try to continue a command that was either expired, or had an unrecognized id. */
// The misspelled name is deprecated, like in Python: UnrecognizedCommandError is the error raised.
class UnrecongizedCommandError extends RouteNavigationError {}
/** Happens when you try to continue a command that was either expired, or had an unrecognized id. */
class UnrecognizedCommandError extends UnrecongizedCommandError {}

function _localizationFromResponse(response) {
  return response.getLocalization();
}

function _commandIdFromNavigateRouteResponse(response) {
  return response.getCommandId();
}

function _getResponse(response) {
  return response;
}

function _getGraph(response) {
  // An empty graph when the robot has no map, like the default proto in Python (it was undefined).
  return response.getGraph() ?? new mapPb.Graph();
}

function _getStreamedData(response, dataType) {
  // Buffer.concat of the chunk bytes: spreading a chunk into push() overflows the call stack above ~120 KB.
  return dataType.deserializeBinary(serializedFromMessages(response));
}

function _getStreamedWaypointSnapshot(response) {
  return _getStreamedData(response, mapPb.WaypointSnapshot);
}

function _getStreamedDownloadGraph(response) {
  // An empty graph when the robot has no map, like the default proto in Python.
  return _getStreamedData(response, graphNavPb.DownloadGraphResponse).getGraph() ?? new mapPb.Graph();
}

function _getStreamedEdgeSnapshot(response) {
  return _getStreamedData(response, mapPb.EdgeSnapshot);
}

const _UPLOAD_GRAPH_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_UPLOAD_GRAPH_STATUS_TO_ERROR.set(graphNavPb.UploadGraphResponse.Status.STATUS_OK, [null, null]);
_UPLOAD_GRAPH_STATUS_TO_ERROR.set(graphNavPb.UploadGraphResponse.Status.STATUS_MAP_TOO_LARGE_LICENSE, [
  MapTooLargeLicenseError,
  'The map is too large for the license on the robot.',
]);
_UPLOAD_GRAPH_STATUS_TO_ERROR.set(graphNavPb.UploadGraphResponse.Status.STATUS_INVALID_GRAPH, [
  InvalidGraphError,
  'The graph is invalid topologically, e.g. missing waypoints referenced by edges.',
]);
_UPLOAD_GRAPH_STATUS_TO_ERROR.set(graphNavPb.UploadGraphResponse.Status.STATUS_INCOMPATIBLE_SENSORS, [
  IncompatibleSensorsError,

  'The map was recorded with using a sensor configuration which is incompatible with the robot (for example, LIDAR configuration).',
]);
_UPLOAD_GRAPH_STATUS_TO_ERROR.set(graphNavPb.UploadGraphResponse.Status.STATUS_AREA_CALLBACK_ERROR, [
  AreaCallbackMapError,
  'The map specified an area callback that is not registered or is faulted.',
]);

const _UPLOAD_WAYPOINT_SNAPSHOT_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_UPLOAD_WAYPOINT_SNAPSHOT_TO_ERROR.set(graphNavPb.UploadWaypointSnapshotResponse.Status.STATUS_UNKNOWN, [null, null]);
_UPLOAD_WAYPOINT_SNAPSHOT_TO_ERROR.set(graphNavPb.UploadWaypointSnapshotResponse.Status.STATUS_OK, [null, null]);
_UPLOAD_WAYPOINT_SNAPSHOT_TO_ERROR.set(graphNavPb.UploadWaypointSnapshotResponse.Status.STATUS_INCOMPATIBLE_SENSORS, [
  IncompatibleSensorsError,

  'The map was recorded with using a sensor configuration which is incompatible with the robot (for example, LIDAR configuration).',
]);

const _CLEAR_GRAPH_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_CLEAR_GRAPH_STATUS_TO_ERROR.set(graphNavPb.ClearGraphResponse.Status.STATUS_UNKNOWN, [null, null]);
_CLEAR_GRAPH_STATUS_TO_ERROR.set(graphNavPb.ClearGraphResponse.Status.STATUS_OK, [null, null]);
_CLEAR_GRAPH_STATUS_TO_ERROR.set(graphNavPb.ClearGraphResponse.Status.STATUS_RECORDING, [
  CannotModifyMapDuringRecordingError,
  'Cannot clear the map during recording. Call StopRecording first.',
]);

const _SET_LOCALIZATION_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_SET_LOCALIZATION_STATUS_TO_ERROR.set(graphNavPb.SetLocalizationResponse.Status.STATUS_OK, [null, null]);
_SET_LOCALIZATION_STATUS_TO_ERROR.set(graphNavPb.SetLocalizationResponse.Status.STATUS_ROBOT_IMPAIRED, [
  RobotFaultedError,
  'Robot is experiencing a fault condition that prevents localization.',
]);
_SET_LOCALIZATION_STATUS_TO_ERROR.set(graphNavPb.SetLocalizationResponse.Status.STATUS_UNKNOWN_WAYPOINT, [
  UnknownMapInformationError,
  'The given map information (waypoints,edges,routes) is unknown by the system. The waypoint is unknown.',
]);
_SET_LOCALIZATION_STATUS_TO_ERROR.set(graphNavPb.SetLocalizationResponse.Status.STATUS_ABORTED, [
  RequestAbortedError,
  'Request was aborted by the system.',
]);
_SET_LOCALIZATION_STATUS_TO_ERROR.set(graphNavPb.SetLocalizationResponse.Status.STATUS_FAILED, [
  RequestFailedError,
  'Request failed to complete by the system.',
]);
_SET_LOCALIZATION_STATUS_TO_ERROR.set(graphNavPb.SetLocalizationResponse.Status.STATUS_INCOMPATIBLE_SENSORS, [
  IncompatibleSensorsError,

  'The map was recorded with using a sensor configuration which is incompatible with the robot (for example, LIDAR configuration).',
]);

const _NAVIGATE_ROUTE_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_OK, [null, null]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_NO_TIMESYNC, [
  NoTimeSyncError,
  'Client has not performed timesync with robot.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_EXPIRED, [
  CommandExpiredError,
  'The command was received after its end time had already passed.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_TOO_DISTANT, [
  TooDistantError,
  'The command was too far in the future.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_ROBOT_IMPAIRED, [
  RobotImpairedError,
  'Robot has a critical perception or behavior fault and cannot navigate.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_RECORDING, [
  IsRecordingError,
  'Cannot navigate a route while recording a map.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_UNKNOWN_ROUTE_ELEMENTS, [
  UnknownRouteElementsError,
  'One or more waypoints/edges are not in the map.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_INVALID_EDGE, [
  InvalidEdgeError,
  'One or more edges do not connect to expected waypoints.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_NO_PATH, [
  NoPathError,
  'There is no path to the specified waypoint.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_CONSTRAINT_FAULT, [
  ConstraintFaultError,
  'Route parameters contained a constraint fault.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_FEATURE_DESERT, [
  FeatureDesertError,
  'Route contained too many waypoints with low-quality features.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_LOST, [
  RobotLostError,
  'Cannot issue a navigation request when the robot is already lost.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_NOT_LOCALIZED_TO_ROUTE, [
  RobotNotLocalizedToRouteError,
  "The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization).",
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_NOT_LOCALIZED_TO_MAP, [
  RobotNotLocalizedToRouteError,
  "The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization).",
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_COULD_NOT_UPDATE_ROUTE, [
  RouteNotUpdatingError,
  'Graph nav was unable to update and follow the specified route.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_STUCK, [
  RobotStuckError,

  'The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to try again.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_UNRECOGNIZED_COMMAND, [
  UnrecognizedCommandError,
  'Happens when you try to continue a command that was either expired, or had an unrecognized id.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_AREA_CALLBACK_ERROR, [
  AreaCallbackMapError,
  'The map specified an area callback that is not registered or is faulted.',
]);

const _NAVIGATE_TO_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);

_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_OK, [null, null]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_NO_TIMESYNC, [
  NoTimeSyncError,
  'Client has not performed timesync with robot.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_EXPIRED, [
  CommandExpiredError,
  'The command was received after its end time had already passed.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_TOO_DISTANT, [
  TooDistantError,
  'The command was too far in the future.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_ROBOT_IMPAIRED, [
  RobotImpairedError,
  'Robot has a critical perception or behavior fault and cannot navigate.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_RECORDING, [
  IsRecordingError,
  'Cannot navigate a route while recording a map.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_NO_PATH, [
  NoPathError,
  'There is no path to the specified waypoint.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_UNKNOWN_WAYPOINT, [
  UnknownWaypointError,
  'One or more waypoints are not in the map.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_FEATURE_DESERT, [
  FeatureDesertError,
  'Route contained too many waypoints with low-quality features.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_LOST, [
  RobotLostError,
  'Cannot issue a navigation request when the robot is already lost.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_NOT_LOCALIZED_TO_MAP, [
  RobotNotLocalizedToRouteError,
  "The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization).",
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_COULD_NOT_UPDATE_ROUTE, [
  RouteNotUpdatingError,
  'Graph nav was unable to update and follow the specified route.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_STUCK, [
  RobotStuckError,

  'The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to try again.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_UNRECOGNIZED_COMMAND, [
  UnrecognizedCommandError,
  'Happens when you try to continue a command that was either expired, or had an unrecognized id.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_AREA_CALLBACK_ERROR, [
  AreaCallbackMapError,
  'The map specified an area callback that is not registered or is faulted.',
]);

const _NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);

_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_OK, [null, null]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_NO_TIMESYNC, [
  NoTimeSyncError,
  'Client has not performed timesync with robot.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_EXPIRED, [
  CommandExpiredError,
  'The command was received after its end time had already passed.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_TOO_DISTANT, [
  TooDistantError,
  'The command was too far in the future.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_ROBOT_IMPAIRED, [
  RobotImpairedError,
  'Robot has a critical perception or behavior fault and cannot navigate.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_RECORDING, [
  IsRecordingError,
  'Cannot navigate a route while recording a map.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_NO_PATH, [
  NoPathError,
  'There is no path to the specified waypoint.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_NO_ANCHORING, [
  NoAnchoringError,
  'There is no anchoring.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_FEATURE_DESERT, [
  FeatureDesertError,
  'Route contained too many waypoints with low-quality features.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_LOST, [
  RobotLostError,
  'Cannot issue a navigation request when the robot is already lost.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_NOT_LOCALIZED_TO_MAP, [
  RobotNotLocalizedToRouteError,
  "The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization).",
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_COULD_NOT_UPDATE_ROUTE, [
  RouteNotUpdatingError,
  'Graph nav was unable to update and follow the specified route.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_STUCK, [
  RobotStuckError,

  'The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to try again.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_INVALID_POSE, [
  InvalidPoseError,
  'The requested pose is invalid, or known to be unachievable.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_UNRECOGNIZED_COMMAND, [
  UnrecognizedCommandError,
  'Happens when you try to continue a command that was either expired, or had an unrecognized id.',
]);
// It was missing: an invalid GPS command was a generic ResponseError.
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_INVALID_GPS_COMMAND, [
  InvalidGPSError,
  'Cannot issue the GPS command because it is invalid.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_AREA_CALLBACK_ERROR, [
  AreaCallbackMapError,
  'The map specified an area callback that is not registered or is faulted.',
]);

const _uploadGraphError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleLicenseErrorsIfPresent(
      handleUnsetStatusError('STATUS_UNKNOWN')(response =>
        errorFactory(
          response,
          response.getStatus(),
          graphNavPb.UploadGraphResponse.Status,
          _UPLOAD_GRAPH_STATUS_TO_ERROR,
        ),
      ),
    ),
  ),
);

const _clearGraphError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(response =>
    errorFactory(response, response.getStatus(), graphNavPb.ClearGraphResponse.Status, _CLEAR_GRAPH_STATUS_TO_ERROR),
  ),
);

const _uploadWaypointSnapshotError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(response =>
    errorFactory(
      response,
      response.getStatus(),
      graphNavPb.UploadWaypointSnapshotResponse.Status,
      _UPLOAD_WAYPOINT_SNAPSHOT_TO_ERROR,
    ),
  ),
);

const _setLocalizationError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        graphNavPb.SetLocalizationResponse.Status,
        _SET_LOCALIZATION_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _navigateRouteError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        graphNavPb.NavigateRouteResponse.Status,
        _NAVIGATE_ROUTE_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _navigateToError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(response, response.getStatus(), graphNavPb.NavigateToResponse.Status, _NAVIGATE_TO_STATUS_TO_ERROR),
    ),
  ),
);

const _navigateToAnchorError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        graphNavPb.NavigateToAnchorResponse.Status,
        _NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _navigateFeedbackError = handleCommonHeaderErrors(handleUnsetStatusError('STATUS_UNKNOWN')(() => null));

const _downloadGraphStreamErrors = handleCommonHeaderErrors(() => null);

const _downloadWaypointSnapshotStreamErrors = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response => {
    for (const resp of response) {
      if (resp.getStatus() === graphNavPb.DownloadWaypointSnapshotResponse.Status.STATUS_SNAPSHOT_DOES_NOT_EXIST) {
        return new UnknownMapInformationError(
          resp,
          'The given map information (waypoints,edges,routes) is unknown by the system.',
        );
      }
    }
    return null;
  }),
);

const _downloadEdgeSnapshotStreamErrors = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response => {
    for (const resp of response) {
      if (resp.getStatus() === graphNavPb.DownloadEdgeSnapshotResponse.Status.STATUS_SNAPSHOT_DOES_NOT_EXIST) {
        return new UnknownMapInformationError(
          resp,
          'The given map information (waypoints,edges,routes) is unknown by the system.',
        );
      }
    }
    return null;
  }),
);

module.exports = {
  GraphNavClient,
  GraphNavServiceResponseError,
  UploadWaypointSnapshotError,
  UploadGraphError,
  IncompatibleSensorsError,
  AreaCallbackMapError,
  CannotModifyMapDuringRecordingError,
  NoAnchoringError,
  InvalidPoseError,
  InvalidGPSError,
  UnrecognizedCommandError,
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
  UnknownRouteElementsError,
  NoPathError,
  UnknownWaypointError,
  RouteNavigationError,
  FeatureDesertError,
  RouteNotUpdatingError,
  RobotLostError,
  RobotNotLocalizedToRouteError,
  RobotStuckError,
  UnrecongizedCommandError,
  MapTooLargeLicenseError,
  InvalidGraphError,
};
