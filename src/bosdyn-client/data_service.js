'use strict';

const { BaseClient, commonHeaderErrors } = require('./common');
const dataIndexProtos = require('../bosdyn/api/data_index_pb');
const dataService = require('../bosdyn/api/data_service_grpc_pb');

class InvalidArgument extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidArgument';
  }
}

/**
 * Client for adding to robot data buffer.
 * @extends {BaseClient<dataService.DataServiceClient>}
 */
class DataServiceClient extends BaseClient {
  static defaultServiceName = 'data';
  static serviceType = 'bosdyn.api.DataService';

  /**
   * Create an instance of DataServiceClient's class.
   * @param {?string} name Class name.
   */
  constructor(name = null) {
    super(dataService.DataServiceClient, name);
    this.logTickSchemas = {};
    this._timesyncEndpoint = null;
  }

  /**
   * Update instance from another object.
   * @param {BaseClient} other The object where to copy from.
   * @returns {Promise<void>}
   */
  async updateFrom(other) {
    super.updateFrom(other);
    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Query for data index
   * @param {dataIndexProtos.DataQuery} query The data to query.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataIndexProtos.GetDataIndexResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  getDataIndex(query, args) {
    const request = new dataIndexProtos.GetDataIndexRequest().setDataQuery(query);
    return this.call(this._stub.getDataIndex, request, null, commonHeaderErrors, args);
  }

  /**
   * Internal get_data_index RPC stub call.
   * @param {dataIndexProtos.TimeRange} timeRange The time range to send.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataIndexProtos.GetDataPagesResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  getDataPages(timeRange, args) {
    const request = new dataIndexProtos.GetDataPagesRequest().setTimeRange(timeRange);
    return this.call(this._stub.getDataPages, request, null, commonHeaderErrors, args);
  }

  /**
   * @param {?dataIndexProtos.TimeRange} timeRange The time range to send.
   * @param {!Array<string>} pageIds List of page's ids.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataIndexProtos.DeleteDataPagesResponse>}
   */
  deleteDataPages(timeRange, pageIds, args) {
    const request = new dataIndexProtos.DeleteDataPagesRequest().setTimeRange(timeRange).setPageIdsList(pageIds);
    return this.call(this._stub.deleteDataPages, request, null, commonHeaderErrors, args);
  }

  /**
   * Query for operator comments and events
   * @param {?dataIndexProtos.EventsCommentsSpec} query The events comments to send.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataIndexProtos.GetEventsCommentsResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  getEventsComments(query, args) {
    const request = new dataIndexProtos.GetEventsCommentsRequest().setEventCommentRequest(query);
    return this.call(this._stub.getEventsComments, request, null, commonHeaderErrors, args);
  }

  /**
   * Query for operator comments and events.
   * @param {boolean} [getBlobSpecs=false] whether to list message series.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataIndexProtos.GetDataBufferStatusResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  getDataBufferStatus(getBlobSpecs = false, args) {
    const request = new dataIndexProtos.GetDataBufferStatusRequest().setGetBlobSpecs(getBlobSpecs);
    return this.call(this._stub.getDataBufferStatus, request, null, commonHeaderErrors, args);
  }
}

module.exports = {
  DataServiceClient,
  InvalidArgument,
};
