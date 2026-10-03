export type SE2Pose = import("../../src/bosdyn/api/geometry_pb").SE2Pose;
export type SE3Pose = import("../../src/bosdyn/api/geometry_pb").SE3Pose;
export type Robot = import("./robot").Robot;
export type TimeSyncEndpoint = import("./time_sync").TimeSyncEndpoint;
/**
 * @typedef {import('../../src/bosdyn/api/geometry_pb').SE2Pose} SE2Pose
 * @typedef {import('../../src/bosdyn/api/geometry_pb').SE3Pose} SE3Pose
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
export class GraphNavClient extends BaseClient<GraphNavServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    static _buildSetLocalizationRequest(initialGuessLocalization: any, koTformBody?: null, maxDistance?: null, maxYaw?: null, fiducialInit?: graphNavPb.SetLocalizationRequest.FiducialInit, useFiducialId?: null, refineFiducialResultWithIcp?: boolean, doAmbiguityCheck?: boolean, refineWithVisualFeatures?: boolean, verifyVisualFeaturesQuality?: boolean): graphNavPb.SetLocalizationRequest;
    static _buildGetLocalizationStateRequest(requestLivePointCloud: any, requestLiveImages: any, requestLiveTerrainMaps: any, requestLiveWorldObjects: any, requestLiveRobotState: any, waypointId?: null, requestGpsState?: boolean): graphNavPb.GetLocalizationStateRequest;
    static _buildNavigateRouteRequest(route: any, routeFollowParams: any, travelParams: any, endTimeSecs: any, leases: any, timesyncEndpoint: any, commandId: any, destinationWaypointTformBodyGoal: any): graphNavPb.NavigateRouteRequest;
    static _buildNavigateToRequest(destinationWaypointId: any, travelParams: null | undefined, routeParams: null | undefined, endTimeSecs: any, leases: any, timesyncEndpoint: any, commandId: any, destinationWaypointTformBodyGoal: any, routeBlockedBehavior: any): graphNavPb.NavigateToRequest;
    static _buildNavigateToAnchorRequest(seedTformGoal: any, travelParams: any, routeParams: any, endTimeSecs: any, leases: any, timesyncEndpoint: any, commandId: any, goalWaypointRtSeedEwrtSeedTolerance: any, gpsNavigationParams: any): graphNavPb.NavigateToAnchorRequest;
    static _buildClearGraphRequest(lease: any): graphNavPb.ClearGraphRequest;
    static _buildUploadGraphRequest(lease: any, graph: any, generateNewAnchoring: any, replaceGraph: any): graphNavPb.UploadGraphRequest;
    static _dataChunkIteratorUploadGraph(serializedUploadGraph: any, dataChunkByteSize: any): Generator<graphNavPb.UploadGraphStreamingRequest, void, unknown>;
    static _dataChunkIteratorUploadWaypointSnapshot(serializedWaypointSnapshot: any, lease: any, dataChunkByteSize: any): Generator<graphNavPb.UploadWaypointSnapshotRequest, void, unknown>;
    static _dataChunkIteratorUploadEdgeSnapshot(serializedEdgeSnapshot: any, lease: any, dataChunkByteSize: any): Generator<graphNavPb.UploadEdgeSnapshotRequest, void, unknown>;
    static _dataChunkIteratorUploadSnapshots(serializedSnapshots: any, lease: any, dataChunkByteSize: any): Generator<graphNavPb.UploadSnapshotsRequest, void, unknown>;
    static _buildDownloadGraphRequest(): graphNavPb.DownloadGraphRequest;
    static _buildDownloadWaypointSnapshotRequest(waypointSnapshotId: any, downloadImages: any, doNotDownloadPointCloud?: boolean): graphNavPb.DownloadWaypointSnapshotRequest;
    static _buildDownloadEdgeSnapshotRequest(edgeSnapshotId: any): graphNavPb.DownloadEdgeSnapshotRequest;
    /**
     * Generate the API TravelParams for navigation requests.
     */
    static generateTravelParams(maxDistance: any, maxYaw: any, velocityLimit?: null): graphNavPb.TravelParams;
    /**
     * Generate the API Route for navigation requests.
     */
    static buildRoute(waypointIdList: any, edgeIdList: any): navPb.Route;
    constructor();
    /** @type {TimeSyncEndpoint|null} */
    _timesyncEndpoint: TimeSyncEndpoint | null;
    _dataChunkSize: number;
    _useStreamingGraphUpload: boolean;
    /**
     * @param {Robot} other
     */
    updateFrom(other: Robot): Promise<void>;
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
    setLocalizationFullResponse(initialGuessLocalization: navPb.Localization, koTformBody?: SE3Pose, maxDistance?: number, maxYaw?: number, fiducialInit?: graphNavPb.SetLocalizationRequest.FiducialInit, useFiducialId?: number, refineFiducialResultWithIcp?: boolean, doAmbiguityCheck?: boolean, refineWithVisualFeatures?: boolean, verifyVisualFeaturesQuality?: boolean, args?: Object): Promise<graphNavPb.SetLocalizationResponse>;
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
    setLocalization(initialGuessLocalization: navPb.Localization, koTformBody?: SE3Pose, maxDistance?: number, maxYaw?: number, fiducialInit?: graphNavPb.SetLocalizationRequest.FiducialInit, useFiducialId?: number, refineFiducialResultWithIcp?: boolean, doAmbiguityCheck?: boolean, refineWithVisualFeatures?: boolean, verifyVisualFeaturesQuality?: boolean, args?: Object): Promise<navPb.Localization>;
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
    getLocalizationState(requestLivePointCloud?: boolean, requestLiveImages?: boolean, requestLiveTerrainMaps?: boolean, requestLiveWorldObjects?: boolean, requestLiveRobotState?: boolean, waypointId?: string | null, requestGpsState?: boolean, args?: Object): Promise<graphNavPb.GetLocalizationStateResponse>;
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
    navigateRoute(route: navPb.Route, cmdDuration: number, routeFollowParams?: graphNavPb.RouteFollowingParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, commandId?: number | null, destinationWaypointTformBodyGoal?: SE2Pose | null, args?: Object): Promise<number>;
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
    navigateRouteFull(route: navPb.Route, cmdDuration: number, routeFollowParams?: graphNavPb.RouteFollowingParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, commandId?: number | null, destinationWaypointTformBodyGoal?: SE2Pose | null, args?: Object): Promise<graphNavPb.NavigateRouteResponse>;
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
    navigateTo(destinationWaypointId: string, cmdDuration: number, routeParams?: graphNavPb.RouteGenParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, commandId?: number | null, destinationWaypointTformBodyGoal?: SE2Pose | null, routeBlockedBehavior?: graphNavPb.RouteFollowingParams.RouteBlockedBehavior, args?: Object): Promise<number>;
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
    navigateToFull(destinationWaypointId: string, cmdDuration: number, routeParams?: graphNavPb.RouteGenParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, commandId?: number | null, destinationWaypointTformBodyGoal?: SE2Pose | null, routeBlockedBehavior?: graphNavPb.RouteFollowingParams.RouteBlockedBehavior, args?: Object): Promise<graphNavPb.NavigateToResponse>;
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
    navigateToAnchor(seedTformGoal: SE3Pose, cmdDuration: number, routeParams?: graphNavPb.RouteGenParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, goalWaypointRtSeedEwrtSeedTolerance?: any, commandId?: any, gpsNavigationParams?: any, args?: Object): Promise<number>;
    /**
     * Returns the feedback corresponding to the active route follow command.
     * @param {number} commandId If blank, will return current command status. If filled out, will attempt
     * to return that command status
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<graphNavPb.NavigationFeedbackResponse>}
     */
    navigationFeedback(commandId?: number, args?: Object): Promise<graphNavPb.NavigationFeedbackResponse>;
    /**
     * Clears the local graph structure. Also erases any snapshots currently in RAM.
     * @param {leasePb.Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<graphNavPb.ClearGraphResponse>}
     */
    clearGraph(lease?: leasePb.Lease, args?: Object): Promise<graphNavPb.ClearGraphResponse>;
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
    uploadGraph(lease?: leasePb.Lease | null, graph?: mapPb.Graph | null, generateNewAnchoring?: boolean | null, replaceGraph?: boolean | null, args?: Object): Promise<graphNavPb.UploadGraphResponse>;
    /**
     * Uploads large waypoint snapshot as a stream for a particular waypoint.
     * @param {mapPb.WaypointSnapshot} waypointSnapshot WaypointSnapshot protobuf that will be
     * stream-uploaded to the robot.
     * @param {?leasePb.Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<graphNavPb.UploadWaypointSnapshotResponse>}
     */
    uploadWaypointSnapshot(waypointSnapshot: mapPb.WaypointSnapshot, lease?: leasePb.Lease | null, args?: Object): Promise<graphNavPb.UploadWaypointSnapshotResponse>;
    /**
     * Uploads large edge snapshot as a stream for a particular edge.
     * @param {mapPb.EdgeSnapshot} edgeSnapshot EdgeSnapshot protobuf that will
     * be stream-uploaded to the robot.
     * @param {?leasePb.Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<graphNavPb.UploadWaypointSnapshotResponse>}
     */
    uploadEdgeSnapshot(edgeSnapshot: mapPb.EdgeSnapshot, lease?: leasePb.Lease | null, args?: Object): Promise<graphNavPb.UploadWaypointSnapshotResponse>;
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
    uploadSnapshots(snapshots: graphNavPb.UploadSnapshotsRequest.Snapshots, lease?: leasePb.Lease | null, args?: Object): Promise<graphNavPb.UploadSnapshotsResponse>;
    /**
     * Alias of uploadSnapshots(), the name of Python.
     * @param {graphNavPb.UploadSnapshotsRequest.Snapshots} snapshots
     * @param {?leasePb.Lease} [lease=null]
     * @param {Object} [args]
     * @returns {Promise<graphNavPb.UploadSnapshotsResponse>}
     */
    uploadSnapshot(snapshots: graphNavPb.UploadSnapshotsRequest.Snapshots, lease?: leasePb.Lease | null, args?: Object): Promise<graphNavPb.UploadSnapshotsResponse>;
    /**
     * Downloads the graph from the server.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<mapPb.Graph>}
     */
    downloadGraph(args?: Object): Promise<mapPb.Graph>;
    /**
     * Download a specific waypoint snapshot with streaming from the server.
     * @param {string} waypointSnapshotId WaypointSnapshot string ID for which snapshot to download from robot.
     * @param {boolean} downloadImages Boolean indicating whether to include images in the download.
     * @param {boolean} doNotDownloadPointCloud Boolean indicating if point cloud data should not be downloaded.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<mapPb.WaypointSnapshot>}
     */
    downloadWaypointSnapshot(waypointSnapshotId: string, downloadImages?: boolean, doNotDownloadPointCloud?: boolean, args?: Object): Promise<mapPb.WaypointSnapshot>;
    /**
     * Downloads a specific edge snapshot with streaming from the server.
     * @param {string} edgeSnapshotId EdgeSnapshot string ID for which snapshot to download from robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<mapPb.EdgeSnapshot>}
     */
    downloadEdgeSnapshot(edgeSnapshotId: string, args?: Object): Promise<mapPb.EdgeSnapshot>;
    _writeBytes(filepath: any, filename: any, data: any): void;
    /**
     * Download the graph and snapshots from robot to the specified directory.
     * @param {string} directory Directory to write the graph and snapshot
     */
    writeGraphAndSnapshots(directory: string): Promise<void>;
}
/** General class of errors for the GraphNav Recording Service. */
export class GraphNavServiceResponseError extends ResponseError {
}
/** Errors related to uploading a waypoint snapshot */
export class UploadWaypointSnapshotError extends GraphNavServiceResponseError {
}
/** Errors related to uploading a graph. */
export class UploadGraphError extends GraphNavServiceResponseError {
}
/**
 * The map was recorded with using a sensor configuration which is incompatible with the robot (for example, LIDAR
 * configuration).
 */
export class IncompatibleSensorsError extends GraphNavServiceResponseError {
}
/** The map specified an area callback that is not registered or is faulted. */
export class AreaCallbackMapError extends GraphNavServiceResponseError {
}
/** Cannot clear the map during recording. Call StopRecording first. */
export class CannotModifyMapDuringRecordingError extends RobotStateError {
}
/** There is no anchoring. */
export class NoAnchoringError extends RouteError {
}
/** The requested pose is invalid, or known to be unachievable. */
export class InvalidPoseError extends RouteError {
}
/**
 * Cannot issue the GPS command because it is invalid.
 */
export class InvalidGPSError extends RouteNavigationError {
    _gpsStatusToString(status: any): "OK" | "The uploaded map did not contain any valid GPS coordinates." | "The given coordinates were too far from any coordinates in the uploaded map." | "Unknown error";
}
/** Happens when you try to continue a command that was either expired, or had an unrecognized id. */
export class UnrecognizedCommandError extends UnrecongizedCommandError {
}
/** Request was aborted by the system. */
export class RequestAbortedError extends GraphNavServiceResponseError {
}
/** Request failed to complete by the system. */
export class RequestFailedError extends GraphNavServiceResponseError {
}
/** Robot is experiencing a fault condition that prevents localization. */
export class RobotFaultedError extends GraphNavServiceResponseError {
}
/** The given map information (waypoints,edges,routes) is unknown by the system. */
export class UnknownMapInformationError extends GraphNavServiceResponseError {
}
/** Errors associated with timestamps and time sync. */
export class TimeError extends GraphNavServiceResponseError {
}
/** The command was received after its end time had already passed. */
export class CommandExpiredError extends TimeError {
}
/** Client has not performed timesync with robot. */
export class NoTimeSyncError extends TimeError {
}
/** The command was too far in the future. */
export class TooDistantError extends TimeError {
}
/** Errors associated with the current state of the robot. */
export class RobotStateError extends GraphNavServiceResponseError {
}
/** Cannot navigate a route while recording a map. */
export class IsRecordingError extends RobotStateError {
}
/** Robot has a critical perception or behavior fault and cannot navigate. */
export class RobotImpairedError extends RobotStateError {
}
/** Errors associated with the specified route. */
export class RouteError extends GraphNavServiceResponseError {
}
/** Route parameters contained a constraint fault. */
export class ConstraintFaultError extends RouteError {
}
/** One or more edges do not connect to expected waypoints. */
export class InvalidEdgeError extends RouteError {
}
/** Deprecated name (misspelled) of Python, the parent class of UnknownRouteElementsError. */
export class UnkownRouteElementsError extends RouteError {
}
/** One or more waypoints/edges are not in the map. */
export class UnknownRouteElementsError extends UnkownRouteElementsError {
}
/** There is no path to the specified waypoint. */
export class NoPathError extends RouteError {
}
/** One or more waypoints are not in the map. */
export class UnknownWaypointError extends RouteError {
}
/** Errors related to how the robot navigates the route. */
export class RouteNavigationError extends GraphNavServiceResponseError {
}
/** Route contained too many waypoints with low-quality features. */
export class FeatureDesertError extends RouteNavigationError {
}
/** Graph nav was unable to update and follow the specified route. */
export class RouteNotUpdatingError extends RouteNavigationError {
}
/** Cannot issue a navigation request when the robot is already lost. */
export class RobotLostError extends RouteNavigationError {
}
/** The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization). */
export class RobotNotLocalizedToRouteError extends RouteNavigationError {
}
/**
 * The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to
 * try again.
 */
export class RobotStuckError extends RouteNavigationError {
}
/** Happens when you try to continue a command that was either expired, or had an unrecognized id. */
export class UnrecongizedCommandError extends RouteNavigationError {
}
/** The map is too large for the license on the robot. */
export class MapTooLargeLicenseError extends UploadGraphError {
}
/** The graph is invalid topologically, e.g. missing waypoints referenced by edges. */
export class InvalidGraphError extends UploadGraphError {
}
import { GraphNavServiceClient } from "../../src/bosdyn/api/graph_nav/graph_nav_service_grpc_pb";
import { BaseClient } from "./common";
import navPb = require("../../src/bosdyn/api/graph_nav/nav_pb");
import graphNavPb = require("../../src/bosdyn/api/graph_nav/graph_nav_pb");
import leasePb = require("../../src/bosdyn/api/lease_pb");
import mapPb = require("../../src/bosdyn/api/graph_nav/map_pb");
import { ResponseError } from "./exceptions";
