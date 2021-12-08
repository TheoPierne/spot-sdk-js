const {ResponseError} = require('./exceptions');
const {
	BaseClient, 
	error_factory, 
	handle_unset_status_error,
	handle_common_header_errors, 
	handle_lease_use_result_errors,
	common_header_errors
} = require('./common');

const map_processing_pb = require('../bosdyn/api/graph_nav/map_processing_pb');
const map_pb = require('../bosdyn/api/graph_nav/map_pb');
const map_processing_service_pb = require('../bosdyn/api/graph_nav/map_processing_service_pb');
const map_processing = require('../bosdyn/api/graph_nav/map_processing_service_grpc_pb');


class MapProcessingServiceResponseError extends ResponseError {
	constructor(msg){
		super(msg);
		this.name = 'MapProcessingServiceResponseError';
	}
};

class MissingSnapshotsError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'MissingSnapshotsError';
	}
};

class OptimizationFailureError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'OptimizationFailureError';
	}
};

class InvalidGraphError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'InvalidGraphError';
	}
};

class InvalidParamsError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'InvalidParamsError';
	}
};

class MaxIterationsError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'MaxIterationsError';
	}
};

class MaxTimeError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'MaxTimeError';
	}
};

class InvalidHintsError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'InvalidHintsError';
	}
};

class ConstraintViolationError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ConstraintViolationError';
	}
};

class MapModifiedError extends MapProcessingServiceResponseError {
	constructor(msg){
		super(msg);
		this.name = 'MapModifiedError';
	}
};

function _process_topology_common_errors(response){
    if (response.getStatus() == map_processing_pb.ProcessTopologyResponse.Status.STATUS_INVALID_GRAPH){
        return new InvalidGraphError('The graph is invalid topologically, for example containing missing waypoints referenced by edges.');
    }else if(response.getStatus() == map_processing_pb.ProcessTopologyResponse.Status.STATUS_MISSING_WAYPOINT_SNAPSHOTS){
        return new MissingSnapshotsError('The uploaded map has missing waypoint snapshots.');
    }else if(response.getStatus() == map_processing_pb.ProcessTopologyResponse.Status.STATUS_MAP_MODIFIED_DURING_PROCESSING){
        return new MapModifiedError('The map was modified on the server by another client during processing. Please try again.');
    }
    return null;
}

function _process_topology_streamed_errors(responses){
    for(const resp of responses){
        const exception = _process_topology_common_errors(resp);
        if(exception) return exception;
    }

    return null;
}

const __ANCHORING_COMMON_ERRORS = {
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_MISSING_WAYPOINT_SNAPSHOTS]: [MissingSnapshotsError, 'The uploaded map has missing waypoint snapshots.'],
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_OPTIMIZATION_FAILURE]: [OptimizationFailureError, 'The anchoring optimization failed.'],
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_INVALID_GRAPH]: [InvalidGraphError, 'The graph is invalid topologically, for example containing missing waypoints referenced by edges.'],
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_INVALID_PARAMS]: [InvalidParamsError, 'The parameters passed to the optimizer do not make sense (e.g negative weights).'],
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_CONSTRAINT_VIOLATION]: [ConstraintViolationError, 'One or more anchors were moved outside of the desired constraints.'],
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_MAX_ITERATIONS]: [MaxIterationsError, 'The optimizer reached the maximum number of iterations before converging.'],
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_MAX_TIME]: [MaxTimeError, 'The optimizer timed out before converging.'],
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_INVALID_HINTS]: [InvalidHintsError, 'One or more of the hints passed in to the optimizer are invalid (do not correspond to real waypoints or objects).'],
    [map_processing_pb.ProcessAnchoringResponse.Status.STATUS_MAP_MODIFIED_DURING_PROCESSING]: [MapModifiedError, 'The map was modified on the server by another client during processing. Please try again.']
}

function _process_anchoring_common_errors(response){
    if(response.getStatus() in __ANCHORING_COMMON_ERRORS){
        const type_name = __ANCHORING_COMMON_ERRORS[response.getStatus()];
        return new type_name[0](type_name[1]);
    }
    return null;
}

function _process_anchoring_streamed_errors(responses){
    for(const resp of responses){
        const exception = _process_anchoring_common_errors(resp);
        if(exception) return exception;
    }

    return null;
}

function _get_streamed_topology_response(response){
    const merged_response = new map_processing_pb.ProcessTopologyResponse();

    for(const resp of response){
        merged_response.deserializeBinary(resp.serializeBinary());
    }
    return merged_response;
}

function _get_streamed_anchoring_response(response){
    const merged_response = new map_processing_pb.ProcessAnchoringResponse();

    for(const resp of response){
        merged_response.deserializeBinary(resp.serializeBinary());
    }
    return merged_response;
}

class MapProcessingServiceClient extends BaseClient {

	static default_service_name = 'map-processing-service';
    static service_type = 'bosdyn.api.graph_nav.MapProcessingService';

	constructor(){
		super(map_processing.MapProcessingServiceClient);
	}

	_build_process_topology_request(params, modify_map_on_server){
        return new map_processing_pb.ProcessTopologyRequest().setParams(params).setModifyMapOnServer(modify_map_on_server);
	}

	_build_process_anchoring_request(params, modify_anchoring_on_server, stream_intermediate_results, initial_hint){
        return new map_processing_pb.ProcessAnchoringRequest()
        .setParams(params)
        .setInitialHint(initial_hint)
        .setModifyAnchoringOnServer(modify_anchoring_on_server)
        .setStreamIntermediateResults(stream_intermediate_results);
	}

	async process_topology(params, modify_map_on_server, args){
        const request = this._build_process_topology_request(params, modify_map_on_server);
        return await this.call(this._stub.processTopology, request, _get_streamed_topology_response, _process_topology_streamed_errors, args);
    }

    async process_anchoring(params, modify_anchoring_on_server, stream_intermediate_results, initial_hint = null, args){
        const request = this._build_process_anchoring_request(params, modify_anchoring_on_server, stream_intermediate_results, initial_hint);
        return await this.call(this._stub.processAnchoring, request, _get_streamed_anchoring_response, _process_anchoring_streamed_errors, args);
    }

};

module.exports = {
	MapProcessingServiceClient
};