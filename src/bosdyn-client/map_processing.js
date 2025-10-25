'use strict';

const { BaseClient, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ResponseError } = require('./exceptions');

const mapProcessingPb = require('../bosdyn/api/graph_nav/map_processing_pb');
const mapProcessing = require('../bosdyn/api/graph_nav/map_processing_service_grpc_pb');

class MapProcessingServiceResponseError extends ResponseError {}
class MissingSnapshotsError extends MapProcessingServiceResponseError {}
class OptimizationFailureError extends MapProcessingServiceResponseError {}
class InvalidGraphError extends MapProcessingServiceResponseError {}
class InvalidParamsError extends MapProcessingServiceResponseError {}
class MaxIterationsError extends MapProcessingServiceResponseError {}
class MaxTimeError extends MapProcessingServiceResponseError {}
class InvalidHintsError extends MapProcessingServiceResponseError {}
class ConstraintViolationError extends MapProcessingServiceResponseError {}
class MapModifiedError extends MapProcessingServiceResponseError {}

const _processTopologyCommonErrors = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response => {
    if (response.getStatus() === mapProcessingPb.ProcessTopologyResponse.Status.STATUS_INVALID_GRAPH) {
      return new InvalidGraphError(
        response,
        'The graph is invalid topologically, for example containing missing waypoints referenced by edges.',
      );
    } else if (
      response.getStatus() === mapProcessingPb.ProcessTopologyResponse.Status.STATUS_MISSING_WAYPOINT_SNAPSHOTS
    ) {
      return new MissingSnapshotsError(response, 'The uploaded map has missing waypoint snapshots.');
    } else if (
      response.getStatus() === mapProcessingPb.ProcessTopologyResponse.Status.STATUS_MAP_MODIFIED_DURING_PROCESSING
    ) {
      return new MapModifiedError(
        response,
        'The map was modified on the server by another client during processing. Please try again.',
      );
    }
    return null;
  }),
);

function _processTopologyStreamedErrors(responses) {
  for (const resp of responses) {
    const exception = _processTopologyCommonErrors(resp);
    if (exception) return exception;
  }

  return null;
}

const _ANCHORING_COMMON_ERRORS = {
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_MISSING_WAYPOINT_SNAPSHOTS]: [
    MissingSnapshotsError,
    'The uploaded map has missing waypoint snapshots.',
  ],
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_OPTIMIZATION_FAILURE]: [
    OptimizationFailureError,
    'The anchoring optimization failed.',
  ],
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_INVALID_GRAPH]: [
    InvalidGraphError,
    'The graph is invalid topologically, for example containing missing waypoints referenced by edges.',
  ],
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_INVALID_PARAMS]: [
    InvalidParamsError,
    'The parameters passed to the optimizer do not make sense (e.g negative weights).',
  ],
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_CONSTRAINT_VIOLATION]: [
    ConstraintViolationError,
    'One or more anchors were moved outside of the desired constraints.',
  ],
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_MAX_ITERATIONS]: [
    MaxIterationsError,
    'The optimizer reached the maximum number of iterations before converging.',
  ],
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_MAX_TIME]: [
    MaxTimeError,
    'The optimizer timed out before converging.',
  ],
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_INVALID_HINTS]: [
    InvalidHintsError,
    'One or more of the hints passed in to the optimizer are invalid (do not correspond to real waypoints or objects).',
  ],
  [mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_MAP_MODIFIED_DURING_PROCESSING]: [
    MapModifiedError,
    'The map was modified on the server by another client during processing. Please try again.',
  ],
};

const _processAnchoringCommonErrors = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response => {
    if (response.getStatus() in _ANCHORING_COMMON_ERRORS) {
      const typeName = _ANCHORING_COMMON_ERRORS[response.getStatus()];
      return new typeName[0](response, typeName[1]);
    }
    return null;
  }),
);

function _processAnchoringStreamedErrors(responses) {
  for (const resp of responses) {
    const exception = _processAnchoringCommonErrors(resp);
    if (exception) return exception;
  }

  return null;
}

function _getStreamedTopologyResponse(response) {
  let mergedResponse;

  for (const resp of response) {
    mergedResponse = mapProcessingPb.ProcessTopologyResponse.deserializeBinary(resp.serializeBinary());
  }
  return mergedResponse;
}

function _getStreamedAnchoringResponse(response) {
  let mergedResponse;

  for (const resp of response) {
    mergedResponse = mapProcessingPb.ProcessAnchoringResponse.deserializeBinary(resp.serializeBinary());
  }
  return mergedResponse;
}

/**
 * Client for the GraphNav map processing service.
 * @extends {BaseClient<mapProcessing.MapProcessingServiceClient>}
 */
class MapProcessingServiceClient extends BaseClient {
  static defaultServiceName = 'map-processing-service';
  static serviceType = 'bosdyn.api.graph_nav.MapProcessingService';

  constructor() {
    super(mapProcessing.MapProcessingServiceClient);
  }

  static _buildProcessTopologyRequest(params, modifyMapOnServer) {
    return new mapProcessingPb.ProcessTopologyRequest().setParams(params).setModifyMapOnServer(modifyMapOnServer);
  }

  static _buildProcessAnchoringRequest(
    params,
    modifyAnchoringOnServer,
    streamIntermediateResults,
    initialHint,
    applyGpsResults,
  ) {
    return new mapProcessingPb.ProcessAnchoringRequest()
      .setParams(params)
      .setInitialHint(initialHint)
      .setModifyAnchoringOnServer(modifyAnchoringOnServer)
      .setStreamIntermediateResults(streamIntermediateResults)
      .setApplyGpsResultToWaypointsOnServer(applyGpsResults);
  }

  /**
   * Process the topology of the map on the server, closing loops and producing a consistent topology.
   * @param {mapProcessingPb.ProcessTopologyRequest.Params} params A ProcessTopologyRequest.Params object
   * @param {boolean} modifyMapOnServer if true, the map will be modified on the server. If false,
   * the subgraph returned by this function should be uploaded back to the server if it
   * is to be reused.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<mapProcessingPb.ProcessTopologyResponse>}
   */
  processTopology(params, modifyMapOnServer, args) {
    const request = MapProcessingServiceClient._buildProcessTopologyRequest(params, modifyMapOnServer);
    return this.call(
      this._stub.processTopology,
      request,
      _getStreamedTopologyResponse,
      _processTopologyStreamedErrors,
      false,
      args,
    );
  }

  /**
   * Process the anchoring of the map on the server, producing a metrically consistent anchoring.
   * @param {mapProcessingPb.ProcessTopologyRequest.Params} params a ProcessAnchoringRequest.Params object
   * @param {boolean} modifyAnchoringOnServer if true, the map will be modified on the server. If false,
   * the anchoring returned by this function should be uploaded back to the server if it
   * is to be reused.
   * @param {boolean} streamIntermediateResults if true, anchorings from earlier optimizer
   * iterations may be included in the response. If false, only the last iteration will be returned.
   * @param {mapProcessingPb.AnchoringHint} initiaHint Initial guess at some number of
   * waypoints and world objects and their anchorings.
   * This field is an AnchoringHint object (see map_processing.proto)
   * @param {boolean} applyGpsResults if true, the annotations of waypoints in the graph will be modified to include
   * the pose of each waypoint in a GPS centered frame, if the map has GPS (see map_processing.proto)
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<mapProcessingPb.ProcessAnchoringResponse>}
   */
  processAnchoring(
    params,
    modifyAnchoringOnServer,
    streamIntermediateResults,
    initiaHint = null,
    applyGpsResults = false,
    args,
  ) {
    const request = MapProcessingServiceClient._buildProcessAnchoringRequest(
      params,
      modifyAnchoringOnServer,
      streamIntermediateResults,
      initiaHint,
      applyGpsResults,
    );
    return this.call(
      this._stub.processAnchoring,
      request,
      _getStreamedAnchoringResponse,
      _processAnchoringStreamedErrors,
      false,
      args,
    );
  }
}

module.exports = {
  MapProcessingServiceClient,
  InvalidGraphError,
  MissingSnapshotsError,
  _ANCHORING_COMMON_ERRORS,
};
