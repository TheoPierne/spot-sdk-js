/**
 * Client for the GraphNav map processing service.
 * @extends {BaseClient<mapProcessing.MapProcessingServiceClient>}
 */
export class MapProcessingServiceClient extends BaseClient<mapProcessing.MapProcessingServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    static _buildProcessTopologyRequest(params: any, modifyMapOnServer: any): mapProcessingPb.ProcessTopologyRequest;
    static _buildProcessAnchoringRequest(params: any, modifyAnchoringOnServer: any, streamIntermediateResults: any, initialHint: any, applyGpsResults: any): mapProcessingPb.ProcessAnchoringRequest;
    constructor();
    /**
     * Process the topology of the map on the server, closing loops and producing a consistent topology.
     * @param {mapProcessingPb.ProcessTopologyRequest.Params} params A ProcessTopologyRequest.Params object
     * @param {boolean} modifyMapOnServer if true, the map will be modified on the server. If false,
     * the subgraph returned by this function should be uploaded back to the server if it
     * is to be reused.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<mapProcessingPb.ProcessTopologyResponse>}
     */
    processTopology(params: mapProcessingPb.ProcessTopologyRequest.Params, modifyMapOnServer: boolean, args?: Object): Promise<mapProcessingPb.ProcessTopologyResponse>;
    /**
     * Process the anchoring of the map on the server, producing a metrically consistent anchoring.
     * @param {mapProcessingPb.ProcessAnchoringRequest.Params} params a ProcessAnchoringRequest.Params object
     * @param {boolean} modifyAnchoringOnServer if true, the map will be modified on the server. If false,
     * the anchoring returned by this function should be uploaded back to the server if it
     * is to be reused.
     * @param {boolean} streamIntermediateResults if true, anchorings from earlier optimizer
     * iterations may be included in the response. If false, only the last iteration will be returned.
     * @param {?mapProcessingPb.AnchoringHint} [initialHint=null] Initial guess at some number of
     * waypoints and world objects and their anchorings.
     * This field is an AnchoringHint object (see map_processing.proto)
     * @param {boolean} [applyGpsResults=false] if true, the annotations of waypoints in the graph will be modified to
     * include the pose of each waypoint in a GPS centered frame, if the map has GPS (see map_processing.proto)
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<mapProcessingPb.ProcessAnchoringResponse>}
     */
    processAnchoring(params: mapProcessingPb.ProcessAnchoringRequest.Params, modifyAnchoringOnServer: boolean, streamIntermediateResults: boolean, initialHint?: mapProcessingPb.AnchoringHint | null, applyGpsResults?: boolean, args?: Object): Promise<mapProcessingPb.ProcessAnchoringResponse>;
}
/** General class of errors for the GraphNav map processing service. */
export class MapProcessingServiceResponseError extends ResponseError {
}
/** The uploaded map has missing waypoint snapshots. */
export class MissingSnapshotsError extends MapProcessingServiceResponseError {
}
/** The anchoring optimization failed. */
export class OptimizationFailureError extends MapProcessingServiceResponseError {
}
/** The graph is invalid topologically, for example containing missing waypoints referenced by edges. */
export class InvalidGraphError extends MapProcessingServiceResponseError {
}
/** The parameters passed to the optimizer do not make sense (e.g. negative weights). */
export class InvalidParamsError extends MapProcessingServiceResponseError {
}
/** The optimizer reached the maximum number of iterations before converging. */
export class MaxIterationsError extends MapProcessingServiceResponseError {
}
/** The optimizer timed out before converging. */
export class MaxTimeError extends MapProcessingServiceResponseError {
}
/** One or more of the hints passed in to the optimizer are invalid (do not correspond to real waypoints or objects). */
export class InvalidHintsError extends MapProcessingServiceResponseError {
}
/** One or more anchoring hints disagrees with gravity. Ensure the orientation of any hints is correct. */
export class InvalidGravityAlignmentError extends MapProcessingServiceResponseError {
}
/** One or more anchors were moved outside of the desired constraints. */
export class ConstraintViolationError extends MapProcessingServiceResponseError {
}
/** The map was modified on the server by another client during processing. Please try again. */
export class MapModifiedError extends MapProcessingServiceResponseError {
}
export const _ANCHORING_COMMON_ERRORS: {
    2: (string | typeof MissingSnapshotsError)[];
    4: (string | typeof OptimizationFailureError)[];
    3: (string | typeof InvalidGraphError)[];
    5: (string | typeof InvalidParamsError)[];
    6: (string | typeof ConstraintViolationError)[];
    7: (string | typeof MaxIterationsError)[];
    8: (string | typeof MaxTimeError)[];
    9: (string | typeof InvalidHintsError)[];
    11: (string | typeof InvalidGravityAlignmentError)[];
    10: (string | typeof MapModifiedError)[];
};
export function _getStreamedTopologyResponse(response: any): import("google-protobuf").Message;
export function _getStreamedAnchoringResponse(response: any): import("google-protobuf").Message;
export function _processAnchoringStreamedErrors(responses: any): any;
import mapProcessing = require("../../src/bosdyn/api/graph_nav/map_processing_service_grpc_pb");
import { BaseClient } from "./common";
import mapProcessingPb = require("../../src/bosdyn/api/graph_nav/map_processing_pb");
import { ResponseError } from "./exceptions";
