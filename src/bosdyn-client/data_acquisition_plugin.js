'use strict';

const { BaseClient } = require('./common');
const { _getLiveDataError, acquireDataError, metadataToProto } = require('./data_acquisition');
const dataAcquisitionPb = require('../bosdyn/api/data_acquisition_pb');
const { DataAcquisitionPluginServiceClient } = require('../bosdyn/api/data_acquisition_plugin_service_grpc_pb');

/**
 * A client for triggering data acquisition plugin and logging. This client is not intended for
 * use directly by users or applications. All acquisition requests should go to the data
 * acquisition service first, which is responsible for forwarding the requests to the right data
 * acquisition plugin services through this client.
 * @extends {BaseClient<DataAcquisitionPluginServiceClient>}
 */
class DataAcquisitionPluginClient extends BaseClient {
  static defaultServiceName = null;
  static serviceType = 'bosdyn.api.DataAcquisitionPluginService';

  constructor() {
    super(DataAcquisitionPluginServiceClient);
  }

  /**
   * Update instance from another object.
   * @param {BaseClient} other The object where to copy from.
   * @returns {void}
   */
  updateFrom(other) {
    super.updateFrom(other);
  }

  /**
   * Trigger a data acquisition to save data and metadata to the data acquisition store service.
   * @param {dataAcquisitionPb.AcquisitionRequestList} acquisitionRequests The different image sources and
   * data sources to capture from and save to the data acquisition store service with
   * the same timestamp.
   * @param {dataAcquisitionPb.CaptureActionId} actionId The unique action that all data should be saved with.
   * @param {?Array<dataAcquisitionPb.DataIdentifier>} [dataIdentifiers] List of data identifiers to associate
   * with metadata.
   * @param {?dataAcquisitionPb.Metadata} [metadata] The JSON structured metadata to be associated with
   * the data returned by the DataAcquisitionService when logged in the data acquisition
   * store service.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.AcquirePluginDataResponse>} If the RPC is successful, then it will return the
   * acquire data response which can be used to check the status of the acquisition and get feedback.
   * @throws {RpcError} Problem communicating with the robot.
   */
  acquirePluginData(acquisitionRequests, actionId, dataIdentifiers = null, metadata = null, args) {
    const metadataProto = metadataToProto(metadata);
    const request = new dataAcquisitionPb.AcquirePluginDataRequest()
      .setMetadata(metadataProto)
      .setAcquisitionRequests(acquisitionRequests)
      .setActionId(actionId)
      .setDataIdList(dataIdentifiers);
    return this.call(this._stub.acquirePluginData, request, null, acquireDataError, args);
  }

  /**
   * Call the GetLiveData RPC of the plugin service.
   * @param {dataAcquisitionPb.LiveDataRequest} request The request to send
   * @returns {Promise<dataAcquisitionPb.LiveDataResponse>}
   */
  getLiveData(request) {
    return this.call(this._stub.getLiveData, request, null, _getLiveDataError);
  }
}

module.exports = {
  DataAcquisitionPluginClient,
};
