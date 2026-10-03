/**
 * @file Client implementation for data acquisition store service.
 */

'use strict';

const { Buffer } = require('node:buffer');
const { closeSync, openSync, readSync, statSync } = require('node:fs');
const { resolve } = require('node:path');

const { DEFAULT_MAX_MESSAGE_LENGTH, DEFAULT_HEADER_BUFFER_LENGTH } = require('./channel');
const { commonHeaderErrors, BaseClient } = require('./common');

const { splitSerialized } = require('./data_chunk');
const dataAcquisitionStore = require('../bosdyn/api/data_acquisition_store_pb');
const { DataAcquisitionStoreServiceClient } = require('../bosdyn/api/data_acquisition_store_service_grpc_pb');
const dataChunkPb = require('../bosdyn/api/data_chunk_pb');

/**
 * @typedef {import('../bosdyn/api/data_acquisition_pb').AssociatedMetadata} AssociatedMetadata
 * @typedef {import('../bosdyn/api/data_acquisition_pb').DataIdentifier} DataIdentifier
 * @typedef {import('../bosdyn/api/image_pb').ImageCapture} ImageCapture
 */

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
   * List AlertData that satisfy the query parameters.
   * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<Array|Object>} DataIdentifiers for the AlertData matching the query parameters.
   */
  listStoredAlertdata(query, args) {
    const request = new dataAcquisitionStore.ListStoredAlertDataRequest().setQuery(query);
    return this.call(this._stub.listStoredAlertData, request, _getDataIds, commonHeaderErrors, false, args);
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
   * @param {ImageCapture} image Image to store.
   * @param {DataIdentifier} dataId Data identifier to use for storing the image.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreImageResponse>} StoreImageResponse response.
   */
  storeImage(image, dataId, args) {
    const request = new dataAcquisitionStore.StoreImageRequest().setImage(image).setDataId(dataId);
    return this.call(this._stub.storeImage, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Store metadata.
   * @param {AssociatedMetadata} associatedMetadata Metadata to store. If metadata is
   * not associated with a particular piece of data, the dataId field in this object
   * needs to specify only the action_id part.
   * @param {DataIdentifier} dataId Data identifier to use for storing this
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
   * @param {AssociatedMetadata} associatedAlertData AlertData to store. If AlertData is
   * not associated with a particular piece of data, the dataId field in this object
   * needs to specify only the action_id part.
   * @param {DataIdentifier} dataId Data identifier to use for storing this
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreAlertDataResponse>}
   */
  storeAlertdata(associatedAlertData, dataId, args) {
    const request = new dataAcquisitionStore.StoreAlertDataRequest()
      .setAlertData(associatedAlertData)
      .setDataId(dataId);
    return this.call(this._stub.storeAlertData, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Store data.
   * @param {Uint8Array|string} data Arbitrary data to store.
   * @param {DataIdentifier} dataId Data identifier to use for storing this data.
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
   * @param {DataIdentifier} dataId Data identifier to use for storing this data.
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
   * @param {DataIdentifier} dataId Data identifier to use for storing this data.
   * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionStore.StoreStreamResponse[]>}
   */
  storeFile(filePath, dataId, fileExtension = null, args) {
    // The file is read chunk by chunk while the request is streamed (it was read at once, and its content was
    // then used as a path).
    return this.call(
      this._stub.storeDataStream,
      _iterateStoreFile(resolve(filePath), dataId, fileExtension),
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
    // The response is streamed as DataChunks: they are assembled into the response, like Python.
    return this.call(this._stub.queryStoredCaptures, request, null, commonHeaderErrors, false, {
      ...args,
      assembleType: dataAcquisitionStore.QueryStoredCapturesResponse,
    });
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
  return response.getActionIdsList();
}

function _getDataIds(response) {
  return response.getDataIdsList();
}

function _getMaxCaptureId(response) {
  return response.getMaxCaptureId();
}

function* _iterateStoreFile(filePath, dataId, fileExtension = null) {
  const totalSize = statSync(filePath).size;
  const fd = openSync(filePath, 'r');

  let bytesRead = 0;
  let position = 0;

  try {
    while (position < totalSize) {
      // A new buffer for each chunk, as large as needed: the requests may be serialized after the next chunk is read.
      const buffer = Buffer.alloc(Math.min(DEFAULT_CHUNK_SIZE_BYTES, totalSize - position));
      bytesRead = readSync(fd, buffer, 0, buffer.length, position);
      if (bytesRead <= 0) break;
      // Bytes, not a string: jspb reads a string as base64.
      const data = new Uint8Array(buffer.buffer, buffer.byteOffset, bytesRead);
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
