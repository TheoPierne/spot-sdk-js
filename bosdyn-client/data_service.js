const {BaseClient, common_header_errors} = require('./common');
const data_index_protos = require('../bosdyn/api/data_index_pb');
const data_service = require('../bosdyn/api/data_service_grpc_pb');

class InvalidArgument extends Error {
	constructor(msg){
		super(msg);
		this.name = 'InvalidArgument';
	}
};

/**
* Client for adding to robot data buffer.
* @class DataServiceClient
* @extends BaseClient
*/
class DataServiceClient extends BaseClient {

	static default_service_name = 'data-service';
    static service_type = 'bosdyn.api.DataService';

    /**
    * Create an instance of DataServiceClient's class.
    * @param {?string} name
    */
    constructor(name=null){
    	super(data_service.DataServiceClient, name);
    	this.log_tick_schemas = {};
        this._timesync_endpoint = null;
    }

    /**
    * Update instance from another object.
    * @param {object} other The object where to copy from.
    * @return {void}
    */
    update_from(other){
        super.update_from(other);

        try{
            this._timesync_endpoint = other.time_sync.endpoint;
        }catch(e){

        }
    }

    /**
    * Query for data index
    * @param {data_index_protos.DataQuery} query
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    */
    async get_data_index(query, args){
        return await this._do_get_data_index(this.call, query, args);
    }

    /**
    * Async version of get_data_index().
    * @param {data_index_protos.DataQuery} query
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    */
    get_data_index_async(query, args){
        return this._do_get_data_index(this.call_async, query, args);
    }

    /**
    * Internal get_data_index RPC stub call.
    * @param {function} func
    * @param {data_index_protos.DataQuery} query
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @private
    */
    async _do_get_data_index(func, query, args){
        const request = new data_index_protos.GetDataIndexRequest().setDataQuery(query);
        return await func(this._stub.getDataIndex, request, null, common_header_errors, args);
    }

    /**
    * Internal get_data_index RPC stub call.
    * @param {function} func
    * @param {data_index_protos.DataQuery} query
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    */
    async get_data_pages(time_range, args){
        return await this._do_get_data_pages(this.call, time_range, args);
    }

    /**
    * Async version of get_data_pages().
    * @param {function} func
    * @param {data_index_protos.DataQuery} query
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    */
    get_data_pages_async(time_range, args){
        return this._do_get_data_pages(this.call_async, time_range, args);
    }

    /**
    * @param {function} func
    * @param {!data_index_protos.TimeRange} time_range
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @private
    */
    async _do_get_data_pages(func, time_range, args){
        const request = new data_index_protos.GetDataPagesRequest().setTimeRange(time_range);
        return await func(this._stub.getDataPages, request, null, common_header_errors, args);
    }

    /**
    * @param {?data_index_protos.TimeRange} time_range
    * @param {!Array<string>} page_ids
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    */
    async delete_data_pages(time_range, page_ids, args){
        return await this._do_delete_data_pages(this.call, time_range, page_ids, args);
    }

    /**
    * @param {?data_index_protos.TimeRange} time_range
    * @param {!Array<string>} page_ids
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    */
    delete_data_pages_async(time_range, page_ids, args){
        return this._do_delete_data_pages(this.call_async, time_range, page_ids, args);
    }

    /**
    * @param {function} func
    * @param {?data_index_protos.TimeRange} time_range
    * @param {!Array<string>} page_ids
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @private
    */
    async _do_delete_data_pages(func, time_range, page_ids, args){
        const request = new data_index_protos.DeleteDataPagesRequest()
        .setTimeRange(time_range)
        .setPageIdsList(page_ids);
        return await func(this._stub.deleteDataPages, request, null, common_header_errors, args);
    }

    /**
    * Query for operator comments and events
    * @param {?data_index_protos.EventsCommentsSpec} query
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    */
    async get_events_comments(query, args){
        return await this._do_get_events_comments(this.call, query, args);
    }

    /**
    * Async version of get_events_comments().
    * @param {?data_index_protos.EventsCommentsSpec} query
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    */
    get_events_comments_async(query, args){
        return this._do_get_events_comments(this.call_async, query, args);
    }

    /**
    * @param {function} func
    * @param {?data_index_protos.EventsCommentsSpec} query
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    * @private
    */
    async _do_get_events_comments(func, query, args){
        const request = new data_index_protos.GetEventsCommentsRequest().setEventCommentRequest(query);
        return await func(this._stub.getEventsComments, request, null, common_header_errors, args);
    }

    /**
    * Query for operator comments and events.
    * @param {boolean} [get_blob_specs=false] whether to list message series.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    */
    async get_data_buffer_status(get_blob_specs = false, args){
        return await this._do_get_data_buffer_status(this.call, get_blob_specs, args);
    }

    /**
    * Async version of get_data_buffer_status();
    * @param {boolean} [get_blob_specs=false] whether to list message series.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    */
    get_data_buffer_status_async(get_blob_specs = false, args){
        return this._do_get_data_buffer_status(this.call_async, get_blob_specs, args);
    }

    /**
    * @param {function} func
    * @param {boolean} [get_blob_specs=false] whether to list message series.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*}
    * @throws {RpcError} Problem communicating with the robot.
    * @private
    */
    async _do_get_data_buffer_status(func, get_blob_specs, args){
        const request = new data_index_protos.GetDataBufferStatusRequest().setGetBlobSpecs(get_blob_specs);
        return await func(this._stub.getDataBufferStatus, request, null, common_header_errors, args);
    }

};


module.exports = {
	DataServiceClient
};