'use strict';

const { BaseClient } = require('./common');
const { DataAcquisitionClient, acquire_data_error, metadata_to_proto } = require('./data_acquisition');
const data_acquisition = require('../bosdyn/api/data_acquisition_pb');
const data_acquisition_plugin_service = require('../bosdyn/api/data_acquisition_plugin_service_grpc_pb');

/**
 * A client for triggering data acquisition plugin and logging. This client is not intended for
 * use directly by users or applications. All acquisition requests should go to the data
 * acquisition service first, which is responsible for forwarding the requests to the right data
 * acquisition plugin services through this client.
 * @class {DataAcquisitionPluginClient}
 * @extends {BaseClient}
 */
class DataAcquisitionPluginClient extends BaseClient {
  static default_service_name = null;
  static service_type = 'bosdyn.api.DataAcquisitionPluginService';

  /**
   * Create an instance of DataAcquisitionPluginClient's class.
   * @param {string} [name=null] Name of the Class.
   */
  constructor(name = null) {
    super(data_acquisition_plugin_service.DataAcquisitionPluginServiceClient, name);
  }

  /**
   * Update instance from another object.
   * @param {Object} other The object where to copy from.
   * @returns {void}
   */
  update_from(other) {
    super.update_from(other);
  }

  /**
   * Trigger a data acquisition to save data and metadata to the data acquisition store service.
   * @param {data_acquisition.AcquisitionRequestList} acquisition_requests The different image sources and
   * data sources to capture from and save to the data acquisition store service with
   * the same timestamp.
   * @param {data_acquisition.CaptureActionId} action_id The unique action that all data should be saved with.
   * @param {?Array<data_acquisition.DataIdentifier>} [data_identifiers] List of data identifiers to associate
   * with metadata.
   * @param {?data_acquisition.Metadata} [metadata] The JSON structured metadata to be associated with
   * the data returned by the DataAcquisitionService when logged in the data acquisition
   * store service.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<data_acquisition.AcquirePluginDataResponse>} If the RPC is successful, then it will return the
   * acquire data response which can be used to check the status of the acquisition and get feedback.
   * @throws {RpcError} Problem communicating with the robot.
   */
  acquire_plugin_data(acquisition_requests, action_id, data_identifiers = null, metadata = null, args) {
    const metadata_proto = metadata_to_proto(metadata);
    const request = new data_acquisition.AcquirePluginDataRequest()
      .setMetadata(metadata_proto)
      .setAcquisitionRequests(acquisition_requests)
      .setActionId(action_id)
      .setDataIdList(data_identifiers);
    return this.call(this._stub.acquirePluginData, request, null, acquire_data_error, args);
  }

  /**
   * Trigger a data acquisition to save data and metadata to the data acquisition store service asynchronously.
   * @param {data_acquisition.AcquisitionRequestList} acquisition_requests The different image sources and
   * data sources to capture from and save to the data acquisition store service with
   * the same timestamp.
   * @param {data_acquisition.CaptureActionId} action_id The unique action that all data should be
   * saved with.
   * @param {data_acquisition.DataIdentifier} [data_identifiers=null] List of data identifiers to associate
   * with metadata.
   * @param {data_acquisition.Metadata|object} [metadata=null] The JSON structured metadata to be associated with
   * the data returned by the DataAcquisitionService when logged in the data acquisition
   * store service.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<data_acquisition.AcquirePluginDataResponse>} If the RPC is successful, then it will return the
   * acquire data response which can be used to check the status of the acquisition and get feedback.
   * @throws {RpcError} Problem communicating with the robot.
   */
  acquire_plugin_data_asyncs(acquisition_requests, action_id, data_identifiers = null, metadata = null, args) {
    const metadata_proto = metadata_to_proto(metadata);
    const request = new data_acquisition.AcquirePluginDataRequest()
      .setMetadata(metadata_proto)
      .setAcquisitionRequests(acquisition_requests)
      .setActionId(action_id)
      .setDataIdList(data_identifiers);
    return this.call_async(this._stub.acquirePluginData, request, undefined, acquire_data_error, args);
  }

  get_status = DataAcquisitionClient.get_status;
  get_status_async = DataAcquisitionClient.get_status_async;

  get_service_info = DataAcquisitionClient.get_service_info;
  get_service_info_async = DataAcquisitionClient.get_service_info_async;

  cancel_acquisition = DataAcquisitionClient.cancel_acquisition;
  cancel_acquisition_async = DataAcquisitionClient.cancel_acquisition_async;
}

module.exports = {
  DataAcquisitionPluginClient,
};
