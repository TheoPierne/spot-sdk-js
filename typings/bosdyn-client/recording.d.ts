export type SE2VelocityLimit = import("../../src/bosdyn/api/geometry_pb").SE2VelocityLimit;
export type SE3Pose = import("../../src/bosdyn/api/geometry_pb").SE3Pose;
/**
 * Helper enum to describe the localization region type for a waypoint
 */
export type WaypointRegion = any;
export namespace WaypointRegion {
    let DEFAULT_REGION: number;
    let EMPTY_REGION: number;
    let CIRCLE_REGION: number;
}
/**
 * Client for the GraphNav recording service.
 * @extends {BaseClient<GraphNavRecordingServiceClientPb>}
 */
export class GraphNavRecordingServiceClient extends BaseClient<GraphNavRecordingServiceClientPb> {
    static defaultServiceName: string;
    static serviceType: string;
    /**
     * Construct a complete recording environment from the waypoint and edge environments.
     * @param {string} name A string name prefix which will prefix waypoint names (human-readable).
     * @param {mapPb.Waypoint.Annotations} waypointEnv Waypoint.Annotations protobuf which includes
     * information for the waypoint environment.
     * @param {mapPb.Edge.Annotations} edgeEnv Edge.Annotations protobuf which includes information
     * for the edge environment.
     * @returns {recordingPb.RecordingEnvironment}
     */
    static makeRecordingEnvironment(name?: string, waypointEnv?: mapPb.Waypoint.Annotations, edgeEnv?: mapPb.Edge.Annotations): recordingPb.RecordingEnvironment;
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
    static makeWaypointEnvironment(name: string, region?: WaypointRegion, dist2d?: number, clientMetadata?: mapPb.ClientMetadata): mapPb.Waypoint.Annotations;
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
    static makeClientMetadata(sessionName?: string, clientUsername?: string, clientSoftwareVersion?: string, clientId?: string, clientType?: string): mapPb.ClientMetadata;
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
    static makeEdgeEnvironment(velLimit?: SE2VelocityLimit | null, directionConstraint?: mapPb.Edge.Annotations.DirectionConstraint, requireAlignment?: boolean, groundMuHint?: number, gratedFloor?: boolean): mapPb.Edge.Annotations;
    /**
     * Create an edge between two waypoint ids.
     * @param {string} fromWaypointId A waypoint string id for the from waypoint.
     * @param {string} toWaypointId A waypoint string id for the to waypoint.
     * @param {SE3Pose} fromTformTo An SE3Pose representing the transform of from_waypoint to to_waypoint.
     * @param {?mapPb.Edge} edgeEnvironment Any edge environment to be associated with the created edge.
     * @returns {mapPb.Edge}
     */
    static makeEdge(fromWaypointId: string, toWaypointId: string, fromTformTo: SE3Pose, edgeEnvironment?: mapPb.Edge | null): mapPb.Edge;
    constructor();
    /**
     * Start the recording service to create/update a map.
     * @param {import('../../src/bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {recordingPb.RecordingEnvironment} recordingEnvironment RecordingEnvironment protobuf to be used
     * for the initial waypoint created at start.
     * @param {?number[]} requireFiducials The ids of the fiducials which must be seen to start the recording (the
     * proto field is a list: the boolean of the Python documentation cannot be set).
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<number>}
     */
    startRecording(lease?: import("../../src/bosdyn/api/lease_pb").Lease, recordingEnvironment?: recordingPb.RecordingEnvironment, requireFiducials?: number[] | null, args?: Object): Promise<number>;
    /**
     * Same as startRecording() but returns a full response
     * @param {import('../../src/bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {recordingPb.RecordingEnvironment} recordingEnvironment RecordingEnvironment protobuf to be used
     * for the initial waypoint created at start.
     * @param {?number[]} requireFiducials The ids of the fiducials which must be seen to start the recording.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<recordingPb.StartRecordingResponse>}
     */
    startRecordingFull(lease?: import("../../src/bosdyn/api/lease_pb").Lease, recordingEnvironment?: recordingPb.RecordingEnvironment, requireFiducials?: number[] | null, args?: Object): Promise<recordingPb.StartRecordingResponse>;
    /**
     * Stop the recording service.
     * @param {import('../../src/bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<number>}
     */
    stopRecording(lease?: import("../../src/bosdyn/api/lease_pb").Lease, args?: Object): Promise<number>;
    /**
     * Get the status of the recording service.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<recordingPb.GetRecordStatusResponse>}
     */
    getRecordStatus(args?: Object): Promise<recordingPb.GetRecordStatusResponse>;
    /**
     * Set the persistent recording environment.
     * @param {import('../../src/bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {recordingPb.RecordingEnvironment} recordingEnvironment RecordingEnvironment protobuf
     * to be set as the persistent environment.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<recordingPb.SetRecordingEnvironmentResponse>}
     */
    setRecordingEnvironment(lease?: import("../../src/bosdyn/api/lease_pb").Lease, recordingEnvironment?: recordingPb.RecordingEnvironment, args?: Object): Promise<recordingPb.SetRecordingEnvironmentResponse>;
    /**
     * Create a waypoint in the map at the current robot state.
     * @param {import('../../src/bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {string} waypointName Human readable string for the waypoint name.
     * @param {recordingPb.RecordingEnvironment} recordingEnvironment RecordingEnvironment protobuf to be
     * used for the waypoint (will overwrite and merge with any persistent env).
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<recordingPb.CreateWaypointResponse>}
     */
    createWaypoint(lease?: import("../../src/bosdyn/api/lease_pb").Lease, waypointName?: string, recordingEnvironment?: recordingPb.RecordingEnvironment, args?: Object): Promise<recordingPb.CreateWaypointResponse>;
    /**
     * Create an edge in the map between two existing waypoints.
     * @param {import('../../src/bosdyn/api/lease_pb').Lease} lease Leases to show ownership of necessary resources.
     * Will use the client's leases by default.
     * @param {mapPb.Edge} edge An edge protobuf, which must include valid from/to waypoint
     * id's and a fromTTo transform.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<recordingPb.CreateEdgeResponse>}
     */
    createEdge(lease?: import("../../src/bosdyn/api/lease_pb").Lease, edge?: mapPb.Edge, args?: Object): Promise<recordingPb.CreateEdgeResponse>;
    _buildStartRecordingRequest(lease: any, recordingEnv: any, requireFiducials: any): recordingPb.StartRecordingRequest;
    _buildStopRecordingRequest(lease: any): recordingPb.StopRecordingRequest;
    _buildGetRecordStatusRequest(): recordingPb.GetRecordStatusRequest;
    _buildSetRecordingEnvironmentRequest(lease: any, recordingEnv: any): recordingPb.SetRecordingEnvironmentRequest;
    _buildCreateWaypointRequest(waypointName: any, recordingEnv: any, lease: any): recordingPb.CreateWaypointRequest;
    _buildCreateEdgeRequest(edge: any, lease: any): recordingPb.CreateEdgeRequest;
}
/** General class of errors for the GraphNav Recording Service. */
export class RecordingServiceResponseError extends ResponseError {
}
/** Service could not create a waypoint. */
export class CouldNotCreateWaypointError extends RecordingServiceResponseError {
}
/** The recording service has not been started. */
export class NotRecordingError extends RecordingServiceResponseError {
}
/** The edge requested has a waypoint id that is unknown. */
export class UnknownWaypointError extends RecordingServiceResponseError {
}
/** The edge requested with the given ID already exists in the map. */
export class EdgeExistsError extends RecordingServiceResponseError {
}
/** The edge requested is missing the from_T_to transform in the edge. */
export class EdgeMissingTransformError extends RecordingServiceResponseError {
}
/** Stop recording failed to localize to the last created waypoint. */
export class NotLocalizedToEndError extends RecordingServiceResponseError {
}
/** Cannot start recording while the robot is already following a route. */
export class FollowingRouteError extends RecordingServiceResponseError {
}
/** The robot is not localized to the existing map and cannot start recording. */
export class NotLocalizedToExistingMapError extends RecordingServiceResponseError {
}
/** The robot is too far from the existing map and cannot start recording. */
export class TooFarFromExistingMapError extends RecordingServiceResponseError {
}
/** Failed to start recording because a remote point cloud (e.g. a LIDAR) is not registered to the service directory. */
export class RemoteCloudFailureNotInDirectoryError extends RecordingServiceResponseError {
}
/** Failed to start recording because a remote point cloud (e.g. a LIDAR) is not delivering data. */
export class RemoteCloudFailureNoDataError extends RecordingServiceResponseError {
}
/** The service is processing the map at its current position. Try again in 1-2 seconds. */
export class NotReadyYetError extends RecordingServiceResponseError {
}
/** Map exceeds the size allowed by the license. */
export class MapTooLargeLicenseError extends RecordingServiceResponseError {
}
/** One or more required fiducials were not detected. */
export class MissingFiducialsError extends RecordingServiceResponseError {
}
/** The pose of one or more required fiducials could not be determined accurately. */
export class FiducialPoseError extends RecordingServiceResponseError {
}
/**
 * Failed to start recording because the robot is impaired.
 */
export class RobotImpairedError extends RecordingServiceResponseError {
    constructor(response: any, errorMessage: any);
    impairedState: any;
}
import { GraphNavRecordingServiceClient as GraphNavRecordingServiceClientPb } from "../../src/bosdyn/api/graph_nav/recording_service_grpc_pb";
import { BaseClient } from "./common";
import recordingPb = require("../../src/bosdyn/api/graph_nav/recording_pb");
import mapPb = require("../../src/bosdyn/api/graph_nav/map_pb");
import { ResponseError } from "./exceptions";
