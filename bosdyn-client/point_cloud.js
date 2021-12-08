const {BaseClient, error_factory, error_pair, common_header_errors, handle_common_header_errors} = require('./common');
const {ResponseError, UnsetStatusError} = require('./exceptions');

const point_cloud_protos = require('../bosdyn/api/point_cloud_pb');
const point_cloud_service = require('../bosdyn/api/point_cloud_service_grpc_pb');

class PointCloudResponseError extends ResponseError {
	constructor(msg){
		super(msg);
		this.name = 'PointCloudResponseError';
	}
};

class UnknownPointCloudSourceError extends PointCloudResponseError {
	constructor(msg){
		super(msg);
		this.name = 'UnknownPointCloudSourceError';
	}
};

class SourceDataError extends PointCloudResponseError {
	constructor(msg){
		super(msg);
		this.name = 'SourceDataError';
	}
};

class PointCloudDataError extends PointCloudResponseError {
	constructor(msg){
		super(msg);
		this.name = 'PointCloudDataError';
	}
};

const _STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_UNKNOWN_SOURCE: error_pair(UnknownPointCloudSourceError),
	STATUS_SOURCE_DATA_ERROR: error_pair(SourceDataError),
    STATUS_UNKNOWN: error_pair(UnsetStatusError),
    STATUS_POINT_CLOUD_DATA_ERROR: error_pair(PointCloudDataError)
};

function _error_from_response(response){
    for(const point_cloud_response of response.getPointCloudResponses()){
        const result = error_factory(response, point_cloud_response.getStatus(), Object.keys(point_cloud_protos.PointCloudResponse.Status), _STATUS_TO_ERROR);
        if(result != null) return result;
    }
    return null;
}

/**
* Client to authenticate to the robot.
* @class PointCloudClient
* @extends BaseClient
*/
class PointCloudClient extends BaseClient {

	static default_service_name = 'point-cloud';
    static service_type = 'bosdyn.api.PointCloudService';

    /**
    * Create an instance of PointCloudClient's class.
    * @param {?string} name
    */
    constructor(name=null){
    	super(point_cloud_service.PointCloudServiceClient, name);
    }

    /**
    * Obtain the list of PointCloudSources.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {Array<string>} A list of the different point cloud sources as strings.
    * @throws {RpcError} Problem communicating with the robot.
    */
    async list_point_cloud_sources(args){
        const req = PointCloudClient._get_list_point_cloud_source_request();
        return await this.call(this._stub.listPointCloudSources, req, _list_point_cloud_sources_value, common_header_errors, args);
    }

    /**
    * Async version of list_point_cloud_sources()
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {Array<string>} A list of the different point cloud sources as strings.
    * @throws {RpcError} Problem communicating with the robot.
    */
    list_point_cloud_sources_async(args){
        const req = PointCloudClient._get_list_point_cloud_source_request();
        return this.call_async(this._stub.listPointCloudSources, req, _list_point_cloud_sources_value, common_header_errors, args);
    }

    /**
    * Obtain point clouds from sources using default parameters.
    * @param {Array<string>} point_cloud_sources The source names to request point clouds from.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {Array} A list of point cloud responses for each of the requested sources.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {UnknownPointCloudSourceError} Provided point cloud source was invalid or not found.
    * @throws {point_cloud.SourceDataError} Failed to fill out PointCloudSource. All other fields are not filled.
    * @throws {UnsetStatusError} An internal PointCloudService issue has happened.
    * @throws {PointCloudDataError} Problem with the point cloud data. Only PointCloudSource is filled.
    */
    async get_point_cloud_from_sources(point_cloud_sources, args){
        return await this.get_point_cloud(point_cloud_sources.map(src => build_pc_request(src)), args);
    }

    /**
    * Async version of get_point_cloud_from_sources().
    * @param {Array<string>} point_cloud_sources The source names to request point clouds from.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {Array} A list of point cloud responses for each of the requested sources.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {UnknownPointCloudSourceError} Provided point cloud source was invalid or not found.
    * @throws {point_cloud.SourceDataError} Failed to fill out PointCloudSource. All other fields are not filled.
    * @throws {UnsetStatusError} An internal PointCloudService issue has happened.
    * @throws {PointCloudDataError} Problem with the point cloud data. Only PointCloudSource is filled.
    */
    get_point_cloud_from_sources_async(point_cloud_sources, args){
        return this.get_point_cloud_async(point_cloud_sources.map(src => build_pc_request(src)), args);
    }

    /**
    * Get the most recent point cloud.
    * @param {Array<point_cloud_protos.PointCloudRequest>} point_cloud_requests A list of PointCloudRequest protobuf
    * messages which specify which point clouds to collect
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {Array} A list of point cloud responses for each of the requested sources.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {UnknownPointCloudSourceError} Provided point cloud source was invalid or not found.
    * @throws {point_cloud.SourceDataError} Failed to fill out PointCloudSource. All other fields are not filled.
    * @throws {UnsetStatusError} An internal PointCloudService issue has happened.
    * @throws {PointCloudDataError} Problem with the point cloud data. Only PointCloudSource is filled.
    */
    async get_point_cloud(point_cloud_requests, args){
        const req = PointCloudClient._get_point_cloud_request(point_cloud_requests);
        return await this.call(this._stub.getPointCloud, request, _get_point_cloud_value, _error_from_response, args);
    }

    /**
    * Async version of get_point_cloud().
    * @param {Array<point_cloud_protos.PointCloudRequest>} point_cloud_requests A list of PointCloudRequest protobuf
    * messages which specify which point clouds to collect
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {Array} A list of point cloud responses for each of the requested sources.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {UnknownPointCloudSourceError} Provided point cloud source was invalid or not found.
    * @throws {point_cloud.SourceDataError} Failed to fill out PointCloudSource. All other fields are not filled.
    * @throws {UnsetStatusError} An internal PointCloudService issue has happened.
    * @throws {PointCloudDataError} Problem with the point cloud data. Only PointCloudSource is filled.
    */
    get_point_cloud_asyncs(point_cloud_requests, args){
        var req = PointCloudClient._get_point_cloud_request(point_cloud_requests);
        return this.call_async(this._stub.getPointCloud, request, _get_point_cloud_value, _error_from_response, args);
    }

    static _get_point_cloud_request(point_cloud_requests){
    	return new point_cloud_protos.GetPointCloudRequest().setPointCloudRequestsList(point_cloud_requests);
    }

    static _get_list_point_cloud_source_request(){
        return new point_cloud_protos.ListPointCloudSourcesRequest();
    }

};

/**
* Helper function which builds an PointCloudRequest from an point cloud source name.
* @param {string} point_cloud_source_name The point cloud source to query.
* @return {point_cloud_protos.PointCloudRequest} The PointCloudRequest protobuf message for the given parameters.
*/
function build_pc_request(point_cloud_source_name){
	return new point_cloud_protos.PointCloudRequest().setPointCloudSourceName(point_cloud_source_name);
}

function _list_point_cloud_sources_value(response){
    return response.getPointCloudSources();
}

function _get_point_cloud_value(response){
    return response.getPointCloudResponses();
}

module.exports = {
	PointCloudClient,
	build_pc_request,
	PointCloudResponseError,
	UnknownPointCloudSourceError,
	SourceDataError,
	PointCloudDataError
};