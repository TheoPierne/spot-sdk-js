'use strict';

const { Any } = require('google-protobuf/google/protobuf/any_pb');

const { DataAcquisitionStoreClient } = require('./data_acquisition_store');
const { DataBufferClient } = require('./data_buffer');
const { ResponseContext } = require('./server_util');
const { populateResponseHeader } = require('./server_util');

const dataAcquisitionPb = require('../bosdyn/api/data_acquisition_pb');
const { DataAcquisitionPluginServiceService } = require('../bosdyn/api/data_acquisition_plugin_service_grpc_pb');
const headerPb = require('../bosdyn/api/header_pb');

const kDefaultRequestExpiration = 30_000;

class RequestCancelledError extends Error {}

/**
 * Helper to simplify creating a DataError to send to RequestState.add_errors.
 * @param {dataAcquisitionPb.DataIdentifier} dataId The proto for the data identifier which has an error.
 * @param {string} errorMsg The error message to associate with the data id.
 * @param {google.protobuf.Any} [errorData] Additional data to be packed with the error.
 * @returns {dataAcquisitionPb.DataError}
 */
function makeError(dataId, errorMsg, errorData = null) {
  const proto = new dataAcquisitionPb.DataError().setDataId(dataId).setErrorMessage(errorMsg);
  if (errorData !== null) {
    const any = new Any();
    any.pack(errorData.serializeBinary(), 'google.protobuf.Any');
    proto.setErrorData(any);
  }
  return proto;
}

/**
 * Interface for a data collection to update its state as it proceeds.
 * Each AcquireData RPC made to the plugin service will create an instance of RequestState
 * to manage the incoming acquisition request's overall state, including if it has been
 * cancelled, any errors that occur, and the current status of the request.
 */
class RequestState {
  /**
   * Statuses for the GetStatus RPC which indicate the data acquisition and saving is still
   * in progress and has not completed or failed.
   * @type {number[]}
   */
  kNonError = [
    dataAcquisitionPb.GetStatusResponse.Status.STATUS_ACQUIRING,
    dataAcquisitionPb.GetStatusResponse.Status.STATUS_SAVING,
  ];

  constructor() {
    /**
     * Boolean indicating if a CancelAcquisition RPC has been received for this acquisition request.
     * @type {boolean}
     */
    this._cancelled = false;

    /**
     * The current status of the request, including any data errors.
     * @type {dataAcquisitionPb.GetStatusResponse}
     */
    this._statusProto = new dataAcquisitionPb.GetStatusResponse().setStatus(
      dataAcquisitionPb.GetStatusResponse.Status.STATUS_ACQUIRING,
    );

    /**
     * The time which the acquisition request completes; used by the RequestManager for cleanup.
     * @type {number|null}
     */
    this._completionTime = null;
  }

  /**
   * Update the status of the request.
   * @param {dataAcquisitionPb.GetStatusResponse.Status} status An updated status enum to be set in the
   * stored GetStatusResponse.
   */
  setStatus(status) {
    this.cancelCheck();
    this._statusProto.setStatus(status);
  }

  /**
   * Mark that everything is complete.
   * @param {Console} [logger] A logger
   * @returns {boolean}
   */
  setCompleteIfNoError(logger = null) {
    this.cancelCheck();
    if (this.kNonError.includes(this._statusProto.getStatus())) {
      this._statusProto.setStatus(dataAcquisitionPb.GetStatusResponse.Status.STATUS_COMPLETE);
      return true;
    }
    if (logger) {
      logger.error(`[DATA ACQUISITION PLUGIN SERVICE] Error encountered during request:\n${this._statusProto}`);
    }

    return false;
  }

  /**
   * Record that some data was saved successfully.
   * @param {dataAcquisitionPb.DataIdentifier[]|dataAcquisitionPb.DataIdentifier} dataIds Data IDs that
   * have been successfully saved.
   */
  addSaved(dataIds) {
    this.cancelCheck();
    const currentDataIds = this._statusProto.getDataSavedList();
    this._statusProto.setDataSavedList(currentDataIds.concat(Array.isArray(dataIds) ? dataIds : [dataIds]));
  }

  /**
   * Report that some errors have occurred during the data capture.
   * Use the make_error function to simplify creating data errors.
   * @param {dataAcquisitionPb.DataError[]} dataErrors data errors to include as errors in the status.
   */
  addErrors(dataErrors) {
    this.cancelCheck();
    const currentDataErrors = this._statusProto.getDataErrorsList();
    this._statusProto.setDataErrorsList(
      currentDataErrors.concat(Array.isArray(dataErrors) ? dataErrors : [dataErrors]),
    );
    this._statusProto.setStatus(dataAcquisitionPb.GetStatusResponse.Status.STATUS_DATA_ERROR);
    console.error(`[DATA ACQUISITION PLUGIN SERVICE] Errors occurred during acquisition: \n${dataErrors}`);
  }

  /**
   * Return true if any data errors have been added to this status.
   * @returns {boolean}
   */
  hasDataErrors() {
    this.cancelCheck();
    return this._statusProto.getDataErrorsList().length !== 0;
  }

  /**
   * Throw RequestCancelledError if the request has already been cancelled.
   */
  cancelCheck() {
    if (this._cancelled) {
      throw new RequestCancelledError();
    }
  }

  /**
   * Query if the request is already cancelled.
   * @returns {boolean}
   */
  isCancelled() {
    return this._cancelled;
  }
}

/**
 * @typedef {[dataAcquisitionPb.DataIdentifier, Promise]} Pair
 */

/**
 * This class simplifies the management of data acquisition stores for a single request.
 * Request state will be updated according to store progress.
 */
class DataAcquisitionStoreHelper {
  /**
   * @param {DataAcquisitionStoreClient} storeClient A data acquisition store client.
   * @param {RequestState} state state of the request, to be modified with errors or completion.
   * @param {number} [cancelInterval] How often to check for cancellation of the request while
   * waiting for the futures to complete.
   */
  constructor(storeClient, state, cancelInterval = 1_000) {
    /**
     * A data acquisition store client.
     * @type {DataAcquisitionStoreClient}
     */
    this.storeClient = storeClient;

    /**
     * state of the request, to be modified with errors or completion.
     * @type {RequestState}
     */
    this.state = state;

    /**
     * How often to check for cancellation of the request while waiting for the futures to complete.
     * @type {number}
     */
    this.cancelInterval = cancelInterval;

    /**
     * The data identifier and the associated future which results from the async store data rpc.
     * @type {Pair[]}
     */
    this.dataIdPromisePairs = [];
  }

  /**
   * Store metadata with the data acquisition store service.
   * @param {dataAcquisitionPb.AssociatedMetadata} metadata Metadata message to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
   * @returns {void}
   */
  storeMetadata(metadata, dataId) {
    const rep = this.storeClient.storeMetadata(metadata, dataId);
    this.dataIdPromisePairs.push([dataId, rep]);
  }

  /**
   * Store an image with the data acquisition store service.
   * @param {imagePb.ImageCapture} imageCapture Image to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
   * @returns {void}
   */
  storeImage(imageCapture, dataId) {
    const rep = this.storeClient.storeImage(imageCapture, dataId);
    this.dataIdPromisePairs.push([dataId, rep]);
  }

  /**
   * Store a data message with the data acquisition store service.
   * @param {Buffer} message Data to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
   * @param {?string} fileExtension File extension to use for writing the data to a file.
   * @returns {void}
   */
  storeData(message, dataId, fileExtension = null) {
    const rep = this.storeClient.storeData(message, dataId, fileExtension);
    this.dataIdPromisePairs.push([dataId, rep]);
  }

  /**
   * Store a data message by streaming with the data acquisition store service.
   * @param {Buffer} message Data to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
   * @param {?string} fileExtension File extension to use for writing the data to a file.
   * @returns {void}
   */
  storeDataAsChunks(message, dataId, fileExtension = null) {
    const rep = this.storeClient.storeDataAsChunks(message, dataId, fileExtension);
    this.dataIdPromisePairs.push([dataId, rep]);
  }

  /**
   * Store a file with the data acquisition store service.
   * @param {string} filePath Path to the file to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this file.
   * @param {?string} fileExtension File extension to use for writing the data to the file.
   * @returns {void}
   */
  storeFile(filePath, dataId, fileExtension = null) {
    const rep = this.storeClient.storeFile(filePath, dataId, fileExtension);
    this.dataIdPromisePairs.push([dataId, rep]);
  }

  /**
   * Raises RequestCancelledError if the request has already been cancelled.
   */
  cancelCheck() {
    this.state.cancelCheck();
  }

  /**
   * Block and wait for all stores to complete. Update state with store success/failures.
   * @returns {Promise<boolean>}
   */
  async waitForStoresComplete() {
    this.state.cancelCheck();

    // eslint-disable-next-line no-unused-vars
    const resp = await Promise.all(this.dataIdPromisePairs.map(([_, promise]) => promise));

    for (const [dataId, response] of this.dataIdPromisePairs) {
      if (response.getException() === null) {
        this.state.addSaved(dataId);
      } else {
        this.state.addErrors([makeError(dataId, `Failed to store data: ${response.getException()}`)]);
      }
    }

    return !this.state.hasDataErrors();
  }
}

class DataAcquisitionPluginService extends DataAcquisitionPluginServiceService {
  static serviceType = 'bosdyn.api.DataAcquisitionPluginService';

  constructor(robot, capabilities, dataCollectFn, acquireResponseFn = null, executor = null, logger = null) {
    super();
    this.logger = logger || console;
    this.capabilities = capabilities;
    this.dataCollectFn = dataCollectFn;
    this.acquireResponseFn = acquireResponseFn;
    this.requestManager = new RequestManager();
    this.executor = executor;
    this.robot = robot;
    this.#init();
  }

  async #init() {
    this.storeClient = await this.robot.ensureClient(DataAcquisitionStoreClient.defaultServiceName);
    this.dataBufferClient = await this.robot.ensureClient(DataBufferClient.defaultServiceName);
  }

  async _dataCollectionWrapper(requestId, request, state) {
    const storeHelper = new DataAcquisitionStoreHelper(this.storeClient, state);
    try {
      this.dataCollectFn(request, storeHelper);
      await storeHelper.waitForStoresComplete();
      state.set_complete_if_no_error(this.logger);
    } catch (e) {
      if (e instanceof RequestCancelledError) {
        state._statusProto.setStatus(dataAcquisitionPb.GetStatusResponse.Status.STATUS_ACQUISITION_CANCELLED);
        this.logger.info(`[DATA ACQUISITION PLUGIN SERVICE] Request "${requestId}" cancelled`);
      } else {
        this.logger.error('[DATA ACQUISITION PLUGIN SERVICE] Failed during call to user function');
        state._statusProto.setStatus(dataAcquisitionPb.GetStatusResponse.Status.STATUS_INTERNAL_ERROR);
        state._statusProto.getHeader().getError().setMessage(e.toString());
      }
    } finally {
      this.requestManager.mark_request_finished(requestId);
      this.logger.info(`[DATA ACQUISITION PLUGIN SERVICE] Finished request ${requestId}`);
    }
  }

  AcquirePluginData(request) {
    const response = new dataAcquisitionPb.AcquirePluginDataResponse();
    ResponseContext(response, request, this.dataBufferClient);
    this._startPluginAcquire(request, response);
    return response;
  }

  _startPluginAcquire(request, response) {
    if (this.acquireResponseFn !== null) {
      try {
        if (!this.acquireResponseFn(request, response)) return response;
      } catch (e) {
        this.logger.error('[DATA ACQUISITION PLUGIN SERVICE] Failed during call to user acquire response function');
        populateResponseHeader(response, request, headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR, e.toString());
        return response;
      }
    }
    this.requestManager.cleanupRequests();
    const [requestId, state] = this.requestManager.addRequest();
    this.logger.info(
      `[DATA ACQUISITION PLUGIN SERVICE] Beginning request ${requestId || response.getRequestId()} for ${request
        .getAcquisitionRequests()
        .getDataCaptures()
        .map(x => x.getName())}`,
    );
    this.executor.submit(this._dataCollectionWrapper, response.getRequestId(), request, state);
    response.setStatus(dataAcquisitionPb.AcquireDataResponse.Status.STATUS_OK);
    populateResponseHeader(response, request);
    return response;
  }

  GetStatus(request) {
    let response = new dataAcquisitionPb.GetStatusResponse();
    ResponseContext(response, request, this.data_buffer_client);
    try {
      response = this.request_manager.get_status_proto(request.getRequestId()).clone();
    } catch (e) {
      response.setStatus(response.STATUS_REQUEST_ID_DOES_NOT_EXIST);
    }
    populateResponseHeader(response, request);
    return response;
  }

  GetServiceInfo(request) {
    const response = new dataAcquisitionPb.GetServiceInfoResponse();
    const capabilities = new dataAcquisitionPb.AcquisitionCapabilityList();
    ResponseContext(response, request, this.data_buffer_client);
    capabilities.setDataSourcesList(this.capabilities);
    response.setCapabilities(capabilities);
    populateResponseHeader(response, request);
    return response;
  }

  CancelAcquisition(request) {
    const response = new dataAcquisitionPb.CancelAcquisitionResponse();
    ResponseContext(response, request, this.data_buffer_client);
    let isCatch = false;
    try {
      this.requestManager.markRequestCancelled(request.getRequestId());
      this.logger.info(`[DATA ACQUISITION PLUGIN SERVICE] Cancelling request ${request.getRequestId()}`);
    } catch (e) {
      isCatch = true;
      response.setStatus(dataAcquisitionPb.CancelAcquisitionResponse.Status.STATUS_REQUEST_ID_DOES_NOT_EXIST);
    }
    if (!isCatch) response.setStatus(dataAcquisitionPb.CancelAcquisitionResponse.Status.STATUS_OK);
    populateResponseHeader(response, request);
    return response;
  }
}

class RequestManager {
  constructor() {
    /** @type {Object<number, RequestState>} */
    this._requests = {};
    this._counter = 0;
  }

  addRequest() {
    this._counter += 1;
    const state = new RequestState();
    this._requests[this._counter] = state;
    return [this._counter, state];
  }

  getRequestState(requestId) {
    return this._requests[requestId];
  }

  getStatusProto(requestId) {
    return this.getRequestState(requestId)?._statusProto.clone();
  }

  markRequestCancelled(requestId) {
    const state = this.getRequestState(requestId);
    state._cancelled = true;
    state._statusProto.setStatus(dataAcquisitionPb.GetStatusResponse.Status.STATUS_CANCEL_IN_PROGRESS);
  }

  markRequestFinished(requestId) {
    const state = this.getRequestState(requestId);
    state._completionTime = Date.now();
  }

  cleanupRequests(olderThanTime = null) {
    olderThanTime = olderThanTime || Date.now() - kDefaultRequestExpiration;
    let toRemove = [];
    for (const [requestId, state] of Object.entries(this._requests)) {
      if (state._completionTime !== null && state._completionTime < olderThanTime) toRemove.push(requestId);
    }
    for (const key of toRemove) {
      delete this._requests[key];
    }
  }
}

module.exports = {
  RequestCancelledError,
  RequestState,
  DataAcquisitionStoreHelper,
  DataAcquisitionPluginService,
  RequestManager,
};
