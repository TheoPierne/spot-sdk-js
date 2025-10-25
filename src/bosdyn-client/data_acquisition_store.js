'use strict';

const { Buffer } = require('node:buffer');
const { closeSync, openSync, readFileSync, readSync, statSync } = require('node:fs');
const { resolve } = require('node:path');

const { DEFAULT_MAX_MESSAGE_LENGTH, DEFAULT_HEADER_BUFFER_LENGTH } = require('./channel');
const { commonHeaderErrors, BaseClient } = require('./common');

const { splitSerialized } = require('./data_chunk');
const dataAcquisitionStore = require('../bosdyn/api/data_acquisition_store_pb');
const { DataAcquisitionStoreServiceClient } = require('../bosdyn/api/data_acquisition_store_service_grpc_pb');
const dataChunkPb = require('../bosdyn/api/data_chunk_pb');

const DEFAULT_CHUNK_SIZE_BYTES = DEFAULT_MAX_MESSAGE_LENGTH - DEFAULT_HEADER_BUFFER_LENGTH;

/**
 * @typedef {import('./robot').Robot} Robot
 */

/**
 * A client for triggering data acquisition store methods.
 * @extends {BaseClient<DataAcquisitionStoreServiceClient>}
 */
class DataAcquisitionStoreClient extends BaseClient {
  static defaultServiceName = 'data-acquisition-store';
  static serviceType = 'bosdyn.api.DataAcquisitionStoreService';

  constructor() {
    super(DataAcquisitionStoreServiceClient);
    this._timesyncEndpoint = null;
  }

  /**
   * Update instance from another object.
   * @param {Robot} other The object where to copy from.
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
   * List capture actions that satisfy the query parameters.
   * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<Array|Object>} CaptureActionIds for the actions matching the query parameters.
   */
  listCaptureActions(query, args) {
    const request = new dataAcquisitionStore.ListCaptureActionsRequest().setQuery(query);
    return this.call(this._stub.listCaptureActions, request, _getActionIds, commonHeaderErrors, false, args);
  }

  /**
   * List images that satisfy the query parameters.
   * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<Array|Object>} DataIdentifiers for the images matching the query parameters.
   */
  listStoredImages(query, args) {
    const request = new dataAcquisitionStore.ListStoredImagesRequest().setQuery(query);
    return this.call(this._stub.listStoredImages, request, _getDataIds, commonHeaderErrors, false, args);
  }

  /**
   * List metadata that satisfy the query parameters.
   * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<Array|Object>} DataIdentifiers for the images matching the query parameters.
   */
  listStoredMetadata(query, args) {
    const request = new dataAcquisitionStore.ListStoredMetadataRequest().setQuery(query);
    return this.call(this._stub.listStoredMetadata, request, _getDataIds, commonHeaderErrors, false, args);
  }

  /**
   * List data that satisfy the query parameters.
   * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<Array|Object>} DataIdentifiers for the images matching the query parameters.
   */
  listStoredData(query, args) {
    const request = new dataAcquisitionStore.ListStoredDataRequest().setQuery(query);
    return this.call(this._stub.listStoredData, request, _getDataIds, commonHeaderErrors, false, args);
  }

  /**
   * Store image.
   * @param {imagePb.ImageCapture} image Image to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing the image.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreImageResponse>} StoreImageResponse response.
   */
  storeImage(image, dataId, args) {
    const request = new dataAcquisitionStore.StoreImageRequest().setImage(image).setDataId(dataId);
    return this.call(this._stub.storeImage, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Store metadata.
   * @param {dataAcquisitionStore.AssociatedMetadata} associatedMetadata Metadata to store. If metadata is
   * not associated with a particular piece of data, the dataId field in this object
   * needs to specify only the action_id part.
   * @param {dataAcquisitionStore.DataIdentifier} dataId Data identifier to use for storing this
   * associated metadata.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreMetadataResponse>} StoreMetadataResponse response.
   */
  storeMetadata(associatedMetadata, dataId, args) {
    const request = new dataAcquisitionStore.StoreMetadataRequest().setMetadata(associatedMetadata).setDataId(dataId);
    return this.call(this._stub.storeMetadata, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Store AlertData
   * @param {dataAcquisitionStore.AssociatedMetadata} associatedAlertData AlertData to store. If AlertData is
   * not associated with a particular piece of data, the dataId field in this object
   * needs to specify only the action_id part.
   * @param {dataAcquisitionStore.DataIdentifier} dataId Data identifier to use for storing this
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreAlertDataResponse>}
   */
  storeAlertdata(associatedAlertData, dataId, args) {
    const request = new dataAcquisitionStore.StoreAlertDataRequest()
      .setAlertDate(associatedAlertData)
      .setDataId(dataId);
    return this.call(this._stub.storeAlertData, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Store data.
   * @param {Uint8Array|string} data Arbitrary data to store.
   * @param {dataAcquisitionStore.DataIdentifier} dataId Data identifier to use for storing this data.
   * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreDataResponse>} StoreDataResponse response.
   */
  storeData(data, dataId, fileExtension = null, args) {
    const request = new dataAcquisitionStore.StoreDataRequest()
      .setData(data)
      .setDataId(dataId)
      .setFileExtension(fileExtension);
    return this.call(this._stub.storeData, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Store data using streaming, supports storing of large data that is too large for a single storeData rpc.
   * Note: using this rpc means that the data must be loaded into memory.
   * @param {Uint8Array|string} data Arbitrary data to store.
   * @param {dataAcquisitionStore.DataIdentifier} dataId Data identifier to use for storing this data.
   * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreStreamResponse[]>}
   */
  storeDataAsChunks(data, dataId, fileExtension = null, args) {
    return this.call(
      this._stub.storeDataStream,
      _iterateDataChunks(data, dataId, fileExtension),
      null,
      commonHeaderErrors,
      false,
      args,
    );
  }

  /**
   * Store file using file path, supports storing of large files that are too large for a single storeData rpc.
   * @param {string} filePath File path to arbitrary data to store.
   * @param {dataAcquisitionStore.DataIdentifier} dataId Data identifier to use for storing this data.
   * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreStreamResponse[]>}
   */
  storeFile(filePath, dataId, fileExtension = null, args) {
    const file = readFileSync(resolve(filePath));
    return this.call(
      this._stub.storeDataStream,
      _iterateStoreFile(file, dataId, fileExtension),
      null,
      commonHeaderErrors,
      false,
      args,
    );
  }

  /**
   * Query stored captures from the robot.
   * @param {dataAcquisitionStore.QueryParameters} query Query parameters.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.QueryStoredCapturesResponse>}
   */
  queryStoredCaptures(query = null, args) {
    const request = new dataAcquisitionStore.QueryStoredCapturesRequest().setQuery(query);
    this._applyRequestProcessors(request);
    return this.call(this._stub.queryStoredCaptures, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Query max capture id from the robot.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  queryMaxCaptureId(args) {
    const request = new dataAcquisitionStore.QueryMaxCaptureIdRequest();
    return this.call(this._stub.queryMaxCaptureId, request, _getMaxCaptureId, commonHeaderErrors, false, args);
  }
}

function _getActionIds(response) {
  return response.getActionIds();
}

function _getDataIds(response) {
  return response.getDataIds();
}

function _getMaxCaptureId(response) {
  return response.getMaxCaptureId();
}

function* _iterateStoreFile(file, dataId, fileExtension = null) {
  const totalSize = statSync(file).size;
  const fd = openSync(file, 'r');

  let buffer = Buffer.alloc(DEFAULT_CHUNK_SIZE_BYTES);
  let bytesRead = 0;
  let position = 0;

  try {
    while ((bytesRead = readSync(fd, buffer, 0, DEFAULT_CHUNK_SIZE_BYTES, position)) > 0) {
      const data = buffer.toString('utf8', 0, bytesRead);
      const chunk = new dataChunkPb.DataChunk().setData(data).setTotalSize(totalSize);
      yield new dataAcquisitionStore.StoreStreamRequest()
        .setChunk(chunk)
        .setDataId(dataId)
        .setFileExtension(fileExtension);

      position += bytesRead;
    }
  } finally {
    closeSync(fd);
  }
}

function* _iterateDataChunks(data, dataId, fileExtension = null) {
  const totalSize = data.length;
  for (const chunk of splitSerialized(data, DEFAULT_CHUNK_SIZE_BYTES)) {
    const chunkData = new dataChunkPb.DataChunk().setData(chunk).setTotalSize(totalSize);
    yield new dataAcquisitionStore.StoreStreamRequest()
      .setChunk(chunkData)
      .setDataId(dataId)
      .setFileExtension(fileExtension);
  }
}

module.exports = {
  DataAcquisitionStoreClient,
};
