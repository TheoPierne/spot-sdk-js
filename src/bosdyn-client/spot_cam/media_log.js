'use strict';

const process = require('node:process');

const loggingPb = require('../../bosdyn/api/spot_cam/logging_pb');
const { MediaLogServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * A client calling Spot CAM MediaLog service.
 * @extends {BaseClient<MediaLogServiceClient>}
 */
class MediaLogClient extends BaseClient {
  static defaultServiceName = 'spot-cam-media-log';
  static serviceType = 'bosdyn.api.spot_cam.MediaLogService';

  constructor() {
    super(MediaLogServiceClient);
  }

  /**
   * Removes the Logpoint from the Spot CAM system.
   * @param {loggingPb.Logpoint} logpoint Logpoint.name must be filled out.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<void>}
   */
  delete(logpoint, args) {
    const request = new loggingPb.DeleteRequest().setPoint(logpoint);
    return this.call(this._stub.delete, request, this._deleteFromResponse, _mediaLogErrorFromResponse, false, args);
  }

  /**
   * Start periodic logging of health data to the database, queryable via Health service.
   * @param {Object} options All the option to start periodic logging of health data.
   * @param {boolean} [options.temp] Enable logging of temperature data.
   * @param {boolean} [options.humidity] Enable logging of humidity data.
   * @param {boolean} [options.bit] Enable logging of BIT events coming from the Health service.
   * @param {boolean} [options.shock] Enable logging of Shock data.
   * @param {boolean} [options.systemStats] Enable logging of cpu, gpu, memory, and network utilization.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<void>}
   */
  enableDebug({ temp = false, humidity = false, bit = false, shock = true, systemStats = false } = {}, args) {
    const request = new loggingPb.DebugRequest()
      .setEnableTemperature(temp)
      .setEnableHumidity(humidity)
      .setEnableBit(bit)
      .setEnableShock(shock)
      .setEnableSystemStat(systemStats);

    return this.call(this._stub.enableDebug, request, this._enableDebugFromResponse, _mediaLogErrorFromResponse, false, args);
  }

  /**
   * Gets the state of the specified logpoint.
   * @param {loggingPb.Logpoint} logpoint Logpoint.name must be filled out.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<loggingPb.Logpoint>}
   */
  getStatus(logpoint, args) {
    const request = new loggingPb.GetStatusRequest().setPoint(logpoint);
    return this.call(this._stub.getStatus, request, this._getStatusFromResponse, _mediaLogErrorFromResponse, false, args);
  }

  /**
   * List cameras on Spot CAM
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<cameraPb.Camera[]>}
   */
  listCameras(args) {
    const request = new loggingPb.ListCamerasRequest();
    return this.call(this._stub.listCameras, request, this._listCamerasFromResponse, _mediaLogErrorFromResponse, false, args);
  }

  /**
   * List Logpoints on Spot CAM
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<loggingPb.Logpoint[]>}
   */
  listLogpoints(args) {
    const request = new loggingPb.ListLogpointsRequest();
    return this.call(
      this._stub.listLogpoints,
      request,
      this._listLogpointsFromResponse,
      _mediaLogErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Retrieves the image associated with the Logpoint.
   * @param {loggingPb.Logpoint} logpoint Logpoint.name must be filled out.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<{ logpoint: loggingPb.Logpoint, data: any[] }>}
   */
  retrieve(logpoint, args) {
    const request = new loggingPb.RetrieveRequest().setPoint(logpoint);
    return this.call(this._stub.retrieve, request, this._retrieveFromResponse, _mediaLogErrorFromResponse, false, args);
  }

  /**
   * Retrieves the image associated with the Logpoint.
   * @param {loggingPb.Logpoint} logpoint Logpoint.name must be filled out.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<{ logpoint: loggingPb.Logpoint, data: any[] }>}
   */
  retrieveRawData(logpoint, args) {
    const request = new loggingPb.RetrieveRawDataRequest().setPoint(logpoint);
    return this.call(this._stub.retrieveRawData, request, this._retrieveFromResponse, _mediaLogErrorFromResponse, false, args);
  }

  /**
   * Store media on the Spot CAM.
   * @param {cameraPb.Camera} camera Protobuf describing the camera to store media on.
   * @param {loggingPb.Logpoint.RecordType} recordType Indicating the type of recording.
   * @param {string} tag Optional string to associate with the stored media.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<loggingPb.Logpoint>}
   */
  store(camera, recordType, tag = null, args) {
    // eslint-disable-next-line
    const request = new loggingPb.StoreRequest().setCamera(camera).setType(recordType).setTag(tag);
    return this.call(this._stub.store, request, this._storeFromResponse, _mediaLogErrorFromResponse, false, args);
  }

  /**
   * Update the 'tag' field of an existing Logpoint.
   * @param {loggingPb.Logpoint} logpoint 'tag' and 'name' in Logpoint must be filled out.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<void>}
   */
  tag(logpoint, args) {
    const request = new loggingPb.TagRequest().setPoint(logpoint);
    return this.call(this._stub.tag, request, this._tagFromResponse, _mediaLogErrorFromResponse, false, args);
  }

  _deleteFromResponse() {
    // Pass
  }

  _enableDebugFromResponse() {
    // Pass
  }

  _getStatusFromResponse(response) {
    return response.getPoint();
  }

  _listCamerasFromResponse(response) {
    return response.getCamerasList();
  }

  _listLogpointsFromResponse(responses) {
    const logpoints = [];

    for (const response of responses) {
      logpoints.concat(response.getLogpointsList());
    }

    return logpoints;
  }

  _retrieveFromResponse(responses) {
    let total = 0;

    const localChunks = [];
    let logpoint = null;
    for (const response of responses) {
      if (logpoint === null) logpoint = response.getLogpoint();
      if (response.hasData()) {
        const chunk = response.getData();
        total += chunk.getData().length;
        console.debug(`Retrieved ${chunk.getData().length} bytes (${total}/${chunk.getTotalSize()})`);
        localChunks.push(chunk);
      }
    }
    return { logpoint, data: localChunks.map(e => e.getData()) };
  }

  _setPassphraseFromResponse() {
    // Pass
  }

  _storeFromResponse(response) {
    return response.getPoint();
  }

  _tagFromResponse() {
    // Pass
  }
}

const _mediaLogErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  MediaLogClient,
};
