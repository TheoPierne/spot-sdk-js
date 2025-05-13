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
const { ResponseError, UnimplementedError } = require('./exceptions');
const { addLeaseWalletProcessors } = require('./lease');
const { DefaultDict } = require('./util');

const dataChunkPb = require('../bosdyn/api/data_chunk_pb');
const graphNavPb = require('../bosdyn/api/graph_nav/graph_nav_pb');
const { GraphNavServiceClient } = require('../bosdyn/api/graph_nav/graph_nav_service_grpc_pb');
const mapPb = require('../bosdyn/api/graph_nav/map_pb');
const navPb = require('../bosdyn/api/graph_nav/nav_pb');
const leasePb = require('../bosdyn/api/lease_pb');

/**
 * Client to the GraphNav service.
 * @extends {BaseClient<GraphNavServiceClient>}
 */
class GraphNavClient extends BaseClient {
  static defaultServiceName = 'graph-nav-service';
  static serviceType = 'bosdyn.api.graph_nav.GraphNavService';

  constructor() {
    super(GraphNavServiceClient);
    this._timesyncEndpoint = null;
    // In bytes = 1Mb
    this._dataChunkSize = 1024 * 1024;
    this._useStreamingGraphUpload = true;
  }

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
    return this.call(this._stub.setLocalization, req, _getResponse, _setLocalizationError, args);
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
    fiducialInit = graphNavPb.SetLocalizationRequest.FIDUCIAL_INIT_NEAREST,
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
    return this.call(this._stub.setLocalization, req, _localizationFromResponse, _setLocalizationError, args);
  }

  /**
   * Obtain current localization state of the robot.
   * @param {boolean} requestLivePointCloud Request live point cloud
   * @param {boolean} requestLiveImages Request live images
   * @param {boolean} requestLiveTerrainMaps Request live terrain maps
   * @param {boolean} requestLiveWorldObjects Request live world objects
   * @param {boolean} requestLiveRobotState Request live robot state
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.GetLocalizationStateResponse>}
   */
  getLocalizationState(
    requestLivePointCloud = false,
    requestLiveImages = false,
    requestLiveTerrainMaps = false,
    requestLiveWorldObjects = false,
    requestLiveRobotState = false,
    args,
  ) {
    const req = GraphNavClient._buildGetLocalizationStateRequest(
      requestLivePointCloud,
      requestLiveImages,
      requestLiveTerrainMaps,
      requestLiveWorldObjects,
      requestLiveRobotState,
    );
    return this.call(this._stub.getLocalizationState, req, null, commonHeaderErrors, args);
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
   * @param {?geometryPb.SE2Pose} destinationWaypointTformBodyGoal SE2Pose protobuf of an offset relative to the
   * destination waypoint.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  navigateRoute(
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
    return this.call(this._stub.navigateRoute, request, _commandIdFromNavigateRouteResponse, _navigateRouteError, args);
  }

  /**
   * Identical to {@link navigateRoute}, except will return the full NavigateRouteResponse.
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
   * @param {?geometryPb.SE2Pose} destinationWaypointTformBodyGoal SE2Pose protobuf of an offset relative to the
   * destination waypoint.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.NavigateRouteResponse>}
   */
  navigateRouteFull(
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
    return this.call(this._stub.navigateRoute, request, null, _navigateRouteError, args);
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
   * @param {?number} commandId If not null, this continues an existing {@link navigateTo} command with
   * the given ID. If null, a new commandId will be used.
   * @param {?geometryPb.SE2Pose} destinationWaypointTformBodyGoal SE2Pose protobuf of an offset relative to
   * the destination waypoint.
   * @param {graphNavPb.RouteFollowingParams.RouteBlockedBehavior} routeBlockedBehavior Defines robot behavior when
   * route is block. If None robot will reroute.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  navigateTo(
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
    return this.call(this._stub.navigateTo, request, _commandIdFromNavigateRouteResponse, _navigateToError, args);
  }

  /**
   * Identical to {@link navigateTo}, except will return the full NavigateToResponse.
   * @param {string} destinationWaypointId Waypoint id string for where to go to.
   * @param {number} cmdDuration Number of seconds the command can run for.
   * @param {?graphNavPb.RouteGenParams} routeParams API RouteGenParams for the route.
   * @param {?graphNavPb.TravelParams} travelParams API TravelParams for the route.
   * @param {*} leases Leases to show ownership of necessary resources. Will use the client's leases by default.
   * @param {?TimeSyncEndpoint} timesyncEndpoint Use this endpoint for timesync fields. Will use the client's
   * endpoint by default.
   * @param {?number} commandId If not null, this continues an existing {@link navigateToFull} command with
   * the given ID. If null, a new commandId will be used.
   * @param {?geometryPb.SE2Pose} destinationWaypointTformBodyGoal SE2Pose protobuf of an offset relative to
   * the destination waypoint.
   * @param {graphNavPb.RouteFollowingParams.RouteBlockedBehavior} routeBlockedBehavior Defines robot behavior when
   * route is block. If None robot will reroute.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.NavigateToResponse>}
   */
  navigateToFull(
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

    return this.call(this._stub.navigateTo, request, null, _navigateToError, args);
  }

  /**
   * Navigate to a pose in seed frame along a route chosen by the GraphNav service.
   * @param {geometryPb.SE3Pose} seedTformGoal SE3Pose protobuf of the goal pose in seed frame.
   * @param {number} cmdDuration Number of seconds the command can run for.
   * @param {*} routeParams API RouteGenParams for the route.
   * @param {*} travelParams API TravelParams for the route.
   * @param {*} leases Leases to show ownership of necessary resources. Will use the client's leases by default.
   * @param {*} timesyncEndpoint Use this endpoint for timesync fields. Will use the client's endpoint by default.
   * @param {*} goalWaypointRtSeedEwrtSeedTolerance Vec3 protobuf of the tolerances for goal waypoint selection.
   * @param {*} commandId If not null, this continues an existing navigate_to command with the given ID. If null,
   * a new command_id will be used.
   * @param {*} gpsNavigationParams API GPSNavigationParams. If not null, this will be interpreted as a GPS-based
   * navigation command. seed_tform_goal will be ignored and whatever goal is passed in using the GPS
   * navigation params will be used.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  navigateToAnchor(
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
    return this.call(this._stub.navigationFeedback, request, _getResponse, _navigateFeedbackError, args);
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
    return this.call(this._stub.clearGraph, request, null, _clearGraphError, args);
  }

  /**
   * Uploads a graph to the server and appends to the existing graph.
   * @param {?leasePb.Lease} lease Leases to show ownership of necessary resources.
   * Will use the client's leases by default.
   * @param {?mapPb.Graph} graph Graph protobuf that represents the map with waypoints and edges.
   * @param {?boolean} generateNewAnchoring Whether to generate an (overwrite the) anchoring on upload.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<graphNavPb.UploadGraphResponse>}
   */
  uploadGraph(lease = null, graph = null, generateNewAnchoring = false, args) {
    let request = GraphNavClient._buildUploadGraphRequest(lease, graph, generateNewAnchoring);
    if (this._useStreamingGraphUpload) {
      this._applyRequestProcessors(request, false);
      const serialized = request.serializeBinary();

      try {
        return this.call(
          this._stub.uploadGraphStreaming,
          GraphNavClient._dataChunkIteratorUploadGraph(serialized, this._dataChunkSize),
          _getResponse,
          _uploadGraphError,
          args,
        );
      } catch (err) {
        if (err instanceof UnimplementedError) {
          console.error(`UploadGraphStreaming unimplemented. Old robot release?`);
          request = GraphNavClient._buildUploadGraphRequest(lease, graph, generateNewAnchoring);
        }
      }
    }
    return this.call(this._stub.uploadGraph, request, _getResponse, _uploadGraphError, args);
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
    const serialized = waypointSnapshot.serializeBinary();
    const request = GraphNavClient._dataChunkIteratorUploadWaypointSnapshot(serialized, lease, this._dataChunkSize);
    return this.call(this._stub.uploadWaypointSnapshot, request, null, _uploadWaypointSnapshotError, args);
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
    const serialized = edgeSnapshot.serializeBinary();
    const request = GraphNavClient._dataChunkIteratorUploadEdgeSnapshot(serialized, lease, this._dataChunkSize);
    return this.call(this._stub.uploadEdgeSnapshot, request, null, handleCommonHeaderErrors(commonLeaseErrors), args);
  }

  /**
   * Downloads the graph from the server.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<mapPb.Graph>}
   */
  downloadGraph(args) {
    const request = GraphNavClient._buildDownloadGraphRequest();

    if (this._useStreamingGraphUpload) {
      try {
        return this.call(
          this._stub.downloadGraphStreaming,
          request,
          _getStreamedDownloadGraph,
          _downloadGraphStreamErrors,
          args,
        );
      } catch (err) {
        if (err instanceof UnimplementedError) {
          console.error('DownloadGraphStreaming unimplemented. Old robot release?');
        }
      }
    }

    return this.call(this._stub.downloadGraph, request, _getGraph, commonHeaderErrors, args);
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

    /* eslint-disable no-await-in-loop */
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
    /* eslint-enable no-await-in-loop */
  }

  static _buildSetLocalizationRequest(
    initialGuessLocalization,
    koTformBody = null,
    maxDistance = null,
    maxYaw = null,
    fiducialInit = graphNavPb.SetLocalizationRequest.FIDUCIAL_INIT_NEAREST,
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

    if (fiducialInit === graphNavPb.SetLocalizationRequest.FIDUCIAL_INIT_SPECIFIC) {
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
    waypointId,
  ) {
    return new graphNavPb.GetLocalizationStateRequest()
      .setWaypointId(waypointId)
      .setRequestLivePointCloud(requestLivePointCloud)
      .setRequestLiveImages(requestLiveImages)
      .setRequestLiveTerrainMaps(requestLiveTerrainMaps)
      .setRequestLiveWorldObjects(requestLiveWorldObjects)
      .setRequestLiveRobotState(requestLiveRobotState);
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
    request.setEndTime(converter.robotTimestampFromLocalSecs(Date.now() + endTimeSecs));
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
      .setEndTime(converter.robotTimestampFromLocalSecs(Date.now() + endTimeSecs));
    if (travelParams !== null) request.setTravelParams(travelParams);
    if (routeParams !== null) request.setRouteParams(routeParams);
    if (commandId) request.setCommandId(commandId);
    if (routeBlockedBehavior) request.setRouteBlockedBehavior(routeBlockedBehavior);
    return request;
  }

  static _buildClearGraphRequest(lease) {
    lease = lease || new leasePb.Lease();
    return new graphNavPb.ClearGraphRequest().setLease(lease);
  }

  static _buildUploadGraphRequest(lease, graph, generateNewAnchoring) {
    lease = lease || new leasePb.Lease();
    return new graphNavPb.UploadGraphRequest()
      .setGraph(graph)
      .setLease(lease)
      .setGenerateNewAnchoring(generateNewAnchoring);
  }

  static *_dataChunkIteratorUploadGraph(serializedUploadGraph, dataChunkByteSize) {
    const totalByteSize = serializedUploadGraph.length;
    const numChunks = Math.ceil(totalByteSize / dataChunkByteSize);

    for (const i of Array.from({ length: numChunks }, (a, ind) => ind)) {
      const startIndex = i * dataChunkByteSize;
      const endIndex = (i + 1) * dataChunkByteSize;
      const chunk = new dataChunkPb.DataChunk().setTotalSize(totalByteSize);
      if (endIndex > totalByteSize) {
        chunk.setData(serializedUploadGraph.slice(startIndex, totalByteSize));
      } else {
        chunk.setData(serializedUploadGraph.slice(startIndex, endIndex));
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
        chunk.setData(serializedWaypointSnapshot.slice(startIndex, totalBytesSize));
      } else {
        chunk.setData(serializedWaypointSnapshot.slice(startIndex, endIndex));
      }
      yield new graphNavPb.UploadWaypointSnapshotRequest().setChunk(chunk).setLease(lease);
    }
  }

  static *_dataChunkIteratorUploadEdgeSnapshot(serializedEdgeSnapshot, lease, dataChunkBytesize) {
    const totalBytesSize = serializedEdgeSnapshot.length;
    const numChunks = Math.ceil(totalBytesSize / dataChunkBytesize);
    for (const i of Array.from({ length: numChunks }, (a, ind) => ind)) {
      const startIndex = i * dataChunkBytesize;
      const endIndex = (i + 1) * dataChunkBytesize;
      const chunk = new dataChunkPb.DataChunk().setTotalSize(totalBytesSize);
      if (endIndex > totalBytesSize) {
        chunk.setData(serializedEdgeSnapshot.slice(startIndex, totalBytesSize));
      } else {
        chunk.setData(serializedEdgeSnapshot.slice(startIndex, endIndex));
      }
      yield new graphNavPb.UploadWaypointSnapshotRequest().setChunk(chunk).setLease(lease);
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

  static generateTravelParams(maxDistance, maxYaw, velocityLimit = null) {
    const travelParams = new graphNavPb.TravelParams().setMaxDistance(maxDistance).setMaxYaw(maxYaw);
    if (velocityLimit !== null) travelParams.setVelocityLimit(velocityLimit);
    return travelParams;
  }

  static buildRoute(waypointIdList, edgeIdList) {
    return new navPb.Route().setWaypointIdList(waypointIdList).setEdgeIdList(edgeIdList);
  }
}

class GraphNavServiceResponseError extends ResponseError {}

class UploadGraphError extends GraphNavServiceResponseError {}
class MapTooLargeLicenseError extends UploadGraphError {}
class InvalidGraphError extends UploadGraphError {}

class IncompatibleSensorsError extends GraphNavServiceResponseError {}
class AreaCallbackMapError extends GraphNavServiceResponseError {}
class RequestAbortedError extends GraphNavServiceResponseError {}
class RequestFailedError extends GraphNavServiceResponseError {}
class RobotFaultedError extends GraphNavServiceResponseError {}
class UnknownMapInformationError extends GraphNavServiceResponseError {}

class TimeError extends GraphNavServiceResponseError {}
class CommandExpiredError extends TimeError {}
class NoTimeSyncError extends TimeError {}
class TooDistantError extends TimeError {}

class RobotStateError extends GraphNavServiceResponseError {}
class IsRecordingError extends RobotStateError {}
class CannotModifyMapDuringRecordingError extends RobotStateError {}
class RobotImpairedError extends RobotStateError {}

class RouteError extends GraphNavServiceResponseError {}
class ConstraintFaultError extends RouteError {}
class InvalidEdgeError extends RouteError {}
class UnknownRouteElementsError extends RouteError {}
class NoPathError extends RouteError {}
class UnknownWaypointError extends RouteError {}
class NoAnchoringError extends RouteError {}
class InvalidPoseError extends RouteError {}

class RouteNavigationError extends GraphNavServiceResponseError {}
class FeatureDesertError extends RouteNavigationError {}
class RouteNotUpdatingError extends RouteNavigationError {}
class RobotLostError extends RouteNavigationError {}
class RobotNotLocalizedToRouteError extends RouteNavigationError {}
class RobotStuckError extends RouteNavigationError {}
class UnrecongizedCommandError extends RouteNavigationError {}

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
  return response.getGraph();
}

function _getStreamedData(response, dataType) {
  const data = [];
  for (const res of response) {
    data.push(...res.getChunk().getData());
  }
  return dataType.deserializeBinary(data);
}

function _getStreamedWaypointSnapshot(response) {
  return _getStreamedData(response, mapPb.WaypointSnapshot);
}

function _getStreamedDownloadGraph(response) {
  return _getStreamedData(response, graphNavPb.DownloadGraphResponse).getGraph();
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
  // eslint-disable-next-line max-len
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
  // eslint-disable-next-line max-len
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
  // eslint-disable-next-line max-len
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
  // eslint-disable-next-line
  'The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to try again.',
]);
_NAVIGATE_ROUTE_STATUS_TO_ERROR.set(graphNavPb.NavigateRouteResponse.Status.STATUS_UNRECOGNIZED_COMMAND, [
  UnrecongizedCommandError,
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
  // eslint-disable-next-line max-len
  'The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to try again.',
]);
_NAVIGATE_TO_STATUS_TO_ERROR.set(graphNavPb.NavigateToResponse.Status.STATUS_UNRECOGNIZED_COMMAND, [
  UnrecongizedCommandError,
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
  // eslint-disable-next-line max-len
  'The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to try again.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_INVALID_POSE, [
  InvalidPoseError,
  'The requested pose is invalid, or known to be unachievable.',
]);
_NAVIGATE_TO_ANCHOR_STATUS_TO_ERROR.set(graphNavPb.NavigateToAnchorResponse.Status.STATUS_UNRECOGNIZED_COMMAND, [
  UnrecongizedCommandError,
  'Happens when you try to continue a command that was either expired, or had an unrecognized id.',
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
          Object.keys(graphNavPb.UploadGraphResponse.Status),
          _UPLOAD_GRAPH_STATUS_TO_ERROR,
        ),
      ),
    ),
  ),
);

const _clearGraphError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(graphNavPb.ClearGraphResponse.Status),
      _CLEAR_GRAPH_STATUS_TO_ERROR,
    ),
  ),
);

const _uploadWaypointSnapshotError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(graphNavPb.UploadWaypointSnapshotResponse.Status),
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
        Object.keys(graphNavPb.SetLocalizationResponse.Status),
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
        Object.keys(graphNavPb.NavigateRouteResponse.Status),
        _NAVIGATE_ROUTE_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _navigateToError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(graphNavPb.NavigateToResponse.Status),
        _NAVIGATE_TO_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _navigateToAnchorError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(graphNavPb.NavigateToAnchorResponse.Status),
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
