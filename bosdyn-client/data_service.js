'use strict';

const { BaseClient, common_header_errors } = require('./common');
const data_index_protos = require('../bosdyn/api/data_index_pb');
const data_service = require('../bosdyn/api/data_service_grpc_pb');

class InvalidArgument extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidArgument';
  }
}

/**
 * Client for adding to robot data buffer.
 * @class DataServiceClient
 * @extends BaseClient
 */
class DataServiceClient extends BaseClient {
  static default_service_name = 'data';
  static service_type = 'bosdyn.api.DataService';

  /**
   * Create an instance of DataServiceClient's class.
   * @param {?string} name Class name.
   */
  constructor(name = null) {
    super(data_service.DataServiceClient, name);
    this.log_tick_schemas = {};
    this._timesync_endpoint = null;
  }

  /**
   * Update instance from another object.
   * @param {Object} other The object where to copy from.
   * @returns {Promise<void>}
   */
  async update_from(other) {
    super.update_from(other);
    try {
      this._timesync_endpoint = (await other.time_sync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Query for data index
   * @param {data_index_protos.DataQuery} query The data to query.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_index_protos.GetDataIndexResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_data_index(query, args) {
    const request = new data_index_protos.GetDataIndexRequest().setDataQuery(query);
    return this.call(this._stub.getDataIndex, request, null, common_header_errors, args);
  }

  /**
   * Internal get_data_index RPC stub call.
   * @param {data_index_protos.TimeRange} time_range The time range to send.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_index_protos.GetDataPagesResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_data_pages(time_range, args) {
    const request = new data_index_protos.GetDataPagesRequest().setTimeRange(time_range);
    return this.call(this._stub.getDataPages, request, null, common_header_errors, args);
  }

  /**
   * @param {?data_index_protos.TimeRange} time_range The time range to send.
   * @param {!Array<string>} page_ids List of page's ids.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_index_protos.DeleteDataPagesResponse>}
   */
  delete_data_pages(time_range, page_ids, args) {
    const request = new data_index_protos.DeleteDataPagesRequest().setTimeRange(time_range).setPageIdsList(page_ids);
    return this.call(this._stub.deleteDataPages, request, null, common_header_errors, args);
  }

  /**
   * Query for operator comments and events
   * @param {?data_index_protos.EventsCommentsSpec} query The events comments to send.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_index_protos.GetEventsCommentsResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_events_comments(query, args) {
    const request = new data_index_protos.GetEventsCommentsRequest().setEventCommentRequest(query);
    return this.call(this._stub.getEventsComments, request, null, common_header_errors, args);
  }

  /**
   * Query for operator comments and events.
   * @param {boolean} [get_blob_specs=false] whether to list message series.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_index_protos.GetDataBufferStatusResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_data_buffer_status(get_blob_specs = false, args) {
    const request = new data_index_protos.GetDataBufferStatusRequest().setGetBlobSpecs(get_blob_specs);
    return this.call(this._stub.getDataBufferStatus, request, null, common_header_errors, args);
  }
}

module.exports = {
  DataServiceClient,
  InvalidArgument,
};
