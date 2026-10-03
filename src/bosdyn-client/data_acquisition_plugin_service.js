/**
 * @file Helpers for implementing a data acquisition plugin service.
 *
 * The DataAcquisitionPluginService class is the recommended way to create a plugin service for data acquisition: add it
 * to a grpc-js server with server.addService(DataAcquisitionPluginServiceService, service). It calls a data collection
 * function, dataCollectFn(request, storeHelper), which collects the data of the plugin and stores it with the store
 * helper (DataAcquisitionStoreHelper). The service then waits for the stores to complete, and updates the status and
 * errors of the request.
 *
 * If errors occur during the data collection and saving, use state.addErrors to report which intended DataIdentifiers
 * had problems: state.addErrors([makeError(dataId, 'Failure to collect data 1')]).
 *
 * Long-running acquisitions should call state.cancelCheck() occasionally, to exit early and cleanly if the acquisition
 * has been cancelled by the user or a timeout: it throws a RequestCancelledError. The data collection function should
 * update the status to STATUS_SAVING when it transitions to storing the data.
 */

'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const { Any } = require('google-protobuf/google/protobuf/any_pb');

const { DataAcquisitionStoreClient } = require('./data_acquisition_store');
const { DataBufferClient } = require('./data_buffer');
const { LoggerUtil } = require('./logger_util');
const { ResponseContext, populateResponseHeader } = require('./server_util');
const { createValueValidator } = require('./service_customization_helpers');
const { protoTypeName } = require('./util');

const dataAcquisitionPb = require('../bosdyn/api/data_acquisition_pb');
const headerPb = require('../bosdyn/api/header_pb');
const serviceCustomizationPb = require('../bosdyn/api/service_customization_pb');
const { nowSec } = require('../bosdyn-core/util');

/**
 * @typedef {import('./logger_util').Logger} Logger
 */

const _LOGGER = LoggerUtil.getLogger('data_acquisition_plugin_service');

/**
 * How long should completed requests be queryable, in seconds (it was 30000).
 * @type {number}
 */
const kDefaultRequestExpiration = 30;

const { Status } = dataAcquisitionPb.GetStatusResponse;

/**
 * The request has been cancelled and should no longer be handled.
 */
class RequestCancelledError extends Error {
  constructor(message = 'The request has been cancelled.') {
    super(message);
    this.name = 'RequestCancelledError';
  }
}

/**
 * Helper to simplify creating a DataError to send to RequestState.addErrors.
 * @param {dataAcquisitionPb.DataIdentifier} dataId The proto for the data identifier which has an error.
 * @param {string} errorMsg The error message to associate with the data id.
 * @param {?import('google-protobuf').Message} [errorData=null] Additional data to be packed with the error.
 * @returns {dataAcquisitionPb.DataError}
 */
function makeError(dataId, errorMsg, errorData = null) {
  const proto = new dataAcquisitionPb.DataError().setDataId(dataId).setErrorMessage(errorMsg);
  if (errorData !== null) {
    // Packed with its own type name (it was packed as a google.protobuf.Any).
    const any = new Any();
    any.pack(errorData.serializeBinary(), protoTypeName(errorData));
    proto.setErrorData(any);
  }
  return proto;
}

/**
 * Interface for a data collection to update its state as it proceeds.
 *
 * Each AcquirePluginData RPC made to the plugin service creates an instance of RequestState to manage the incoming
 * acquisition request's overall state, including if it has been cancelled, any errors that occur, and the current
 * status of the request.
 */
class RequestState {
  /**
   * Statuses for the GetStatus RPC which indicate the data acquisition and saving is still in progress and has not
   * completed or failed.
   * @type {number[]}
   */
  static kNonError = [Status.STATUS_ACQUIRING, Status.STATUS_SAVING];

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
    this._statusProto = new dataAcquisitionPb.GetStatusResponse().setStatus(Status.STATUS_ACQUIRING);

    /**
     * The time which the acquisition request completes; used by the RequestManager for cleanup.
     * @type {?number}
     */
    this._completionTime = null;
  }

  /**
   * Update the status of the request.
   * @param {dataAcquisitionPb.GetStatusResponse.Status} status An updated status enum to be set in the stored
   * GetStatusResponse.
   * @returns {void}
   * @throws {RequestCancelledError}
   */
  setStatus(status) {
    this.cancelCheck();
    this._statusProto.setStatus(status);
  }

  /**
   * Mark that everything is complete.
   * @param {?Logger} [logger=null] Logs the status if there was an error.
   * @returns {boolean} False if there was an error.
   * @throws {RequestCancelledError}
   */
  setCompleteIfNoError(logger = null) {
    this.cancelCheck();
    if (RequestState.kNonError.includes(this._statusProto.getStatus())) {
      this._statusProto.setStatus(Status.STATUS_COMPLETE);
      return true;
    }
    if (logger) {
      logger.error(`Error encountered during request:\n${JSON.stringify(this._statusProto.toObject())}`);
    }
    return false;
  }

  /**
   * Record that some data was saved successfully.
   * @param {dataAcquisitionPb.DataIdentifier[]} dataIds Data IDs that have been successfully saved.
   * @returns {void}
   * @throws {RequestCancelledError}
   */
  addSaved(dataIds) {
    this.cancelCheck();
    for (const dataId of dataIds) this._statusProto.addDataSaved(dataId);
  }

  /**
   * Report that some errors have occurred during the data capture. Use the makeError function to simplify creating
   * data errors.
   * @param {dataAcquisitionPb.DataError[]} dataErrors Data errors to include as errors in the status.
   * @returns {void}
   * @throws {RequestCancelledError}
   */
  addErrors(dataErrors) {
    this.cancelCheck();
    for (const dataError of dataErrors) this._statusProto.addDataErrors(dataError);
    this._statusProto.setStatus(Status.STATUS_DATA_ERROR);
    _LOGGER.error(
      `Errors occurred during acquisition:\n${JSON.stringify(dataErrors.map(dataError => dataError.toObject()))}`,
    );
  }

  /**
   * Return true if any data errors have been added to this status.
   * @returns {boolean} True if any data errors have been added to this status.
   * @throws {RequestCancelledError}
   */
  hasDataErrors() {
    this.cancelCheck();
    return this._statusProto.getDataErrorsList().length > 0;
  }

  /**
   * Throws RequestCancelledError if the request has already been cancelled.
   * @returns {void}
   * @throws {RequestCancelledError} The request has already been cancelled.
   */
  cancelCheck() {
    if (this._cancelled) {
      throw new RequestCancelledError();
    }
  }

  /**
   * Query if the request is already cancelled.
   * @returns {boolean} If the request is already cancelled.
   */
  isCancelled() {
    return this._cancelled;
  }
}

/**
 * This class simplifies the management of data acquisition stores for a single request. The request state is updated
 * according to store progress.
 */
class DataAcquisitionStoreHelper {
  /**
   * @param {DataAcquisitionStoreClient} storeClient A data acquisition store client.
   * @param {RequestState} state State of the request, to be modified with errors or completion.
   * @param {number} [cancelInterval=1000] How often to check for cancellation of the request while waiting for the
   * stores to complete, in milliseconds.
   */
  constructor(storeClient, state, cancelInterval = 1_000) {
    this.storeClient = storeClient;
    this.state = state;
    this.cancelInterval = cancelInterval;

    /**
     * The data identifiers, and the results of their stores: null, or the error of the store.
     * @type {Array<[dataAcquisitionPb.DataIdentifier, Promise<?Error>]>}
     */
    this.dataIdPromisePairs = [];
  }

  _add(dataId, store) {
    // Settled at once: a store that fails before waitForStoresComplete() is not an unhandled rejection.
    const result = Promise.resolve()
      .then(store)
      .then(
        () => null,
        error => error,
      );
    this.dataIdPromisePairs.push([dataId, result]);
  }

  /**
   * Store metadata with the data acquisition store service.
   * @param {dataAcquisitionPb.AssociatedMetadata} metadata Metadata message to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
   * @returns {void}
   */
  storeMetadata(metadata, dataId) {
    this._add(dataId, () => this.storeClient.storeMetadata(metadata, dataId));
  }

  /**
   * Store an image with the data acquisition store service.
   * @param {import('../bosdyn/api/image_pb').ImageCapture} imageCapture Image to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
   * @returns {void}
   */
  storeImage(imageCapture, dataId) {
    this._add(dataId, () => this.storeClient.storeImage(imageCapture, dataId));
  }

  /**
   * Store a data message with the data acquisition store service.
   * @param {Uint8Array} message Data to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
   * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
   * @returns {void}
   */
  storeData(message, dataId, fileExtension = null) {
    this._add(dataId, () => this.storeClient.storeData(message, dataId, fileExtension));
  }

  /**
   * Store a data message by streaming with the data acquisition store service.
   * @param {Uint8Array} message Data to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
   * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
   * @param {Object} [args] Extra arguments for controlling RPC details (e.g. timeout), like Python 5.2.0.
   * @returns {void}
   */
  storeDataAsChunks(message, dataId, fileExtension = null, args = {}) {
    this._add(dataId, () => this.storeClient.storeDataAsChunks(message, dataId, fileExtension, args));
  }

  /**
   * Store a file with the data acquisition store service.
   * @param {string} filePath Path to the file to store.
   * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this file.
   * @param {?string} [fileExtension=null] File extension to use for writing the data to the file.
   * @param {Object} [args] Extra arguments for controlling RPC details (e.g. timeout), like Python 5.2.0.
   * @returns {void}
   */
  storeFile(filePath, dataId, fileExtension = null, args = {}) {
    this._add(dataId, () => this.storeClient.storeFile(filePath, dataId, fileExtension, args));
  }

  /**
   * Throws RequestCancelledError if the request has already been cancelled.
   * @returns {void}
   * @throws {RequestCancelledError} The request has already been cancelled.
   */
  cancelCheck() {
    this.state.cancelCheck();
  }

  /**
   * Wait for all stores to complete, then update the state with the store successes and failures.
   * @returns {Promise<boolean>} False if there are data errors.
   * @throws {RequestCancelledError} The data acquisition request was cancelled.
   */
  async waitForStoresComplete() {
    this.state.cancelCheck();

    // Wait until all stores are done, checking for a cancellation every cancelInterval.
    const allDone = Promise.all(this.dataIdPromisePairs.map(([, result]) => result)).then(() => true);
    const controller = new AbortController();
    const interval = () => sleep(this.cancelInterval, false, { signal: controller.signal }).catch(() => false);
    try {
      while (!(await Promise.race([allDone, interval()]))) {
        this.state.cancelCheck();
      }
    } finally {
      // Clear the pending interval timer.
      controller.abort();
    }

    // Check each store status and update the status saved and errors.
    for (const [dataId, result] of this.dataIdPromisePairs) {
      const error = await result;
      if (error === null) {
        this.state.addSaved([dataId]);
      } else {
        this.state.addErrors([makeError(dataId, `Failed to store data: ${error?.message ?? error}`)]);
      }
    }

    return !this.state.hasDataErrors();
  }
}

/**
 * Implementation of a data acquisition plugin. It relies on the provided dataCollectFn to implement the heart of the
 * data collection and storage. Add it to a grpc-js server with
 * server.addService(DataAcquisitionPluginServiceService, service).
 *
 * Its initialization is asynchronous: the RPCs wait for it, and `await service.ready` waits for it and reports its
 * errors.
 */
class DataAcquisitionPluginService {
  static serviceType = 'bosdyn.api.DataAcquisitionPluginService';

  /**
   * @param {import('./robot').Robot} robot Authenticated robot object.
   * @param {dataAcquisitionPb.DataAcquisitionCapability[]} capabilities What this plugin can do.
   * @param {function(dataAcquisitionPb.AcquirePluginDataRequest, DataAcquisitionStoreHelper): (void|Promise<void>)}
   * dataCollectFn Function that performs the data collection and storage.
   * @param {?function(dataAcquisitionPb.AcquirePluginDataRequest, dataAcquisitionPb.AcquirePluginDataResponse):
   * (boolean|Promise<boolean>)} [acquireResponseFn=null] Optional function that can validate a request and provide a
   * timeout deadline. If it returns false, the response is returned immediately without calling the data collection
   * function or saving any data.
   * @param {*} [executor=null] Unused: Python's thread pool. The data collections run concurrently.
   * @param {?Logger} [logger=null] Logger used by the service.
   * @param {?function(dataAcquisitionPb.LiveDataRequest): (dataAcquisitionPb.LiveDataResponse|
   * Promise<dataAcquisitionPb.LiveDataResponse>)} [liveResponseFn=null] Optional function that sends signals data to
   * the robot for purposes of displaying it on the tablet and Orbit during teleoperation.
   */
  constructor(
    robot,
    capabilities,
    dataCollectFn,
    acquireResponseFn = null,
    executor = null,
    logger = null,
    liveResponseFn = null,
  ) {
    this.logger = logger || _LOGGER;
    this.capabilities = capabilities;
    /**
     * The validators of the custom parameters, by capture name.
     * @type {Map<string, function(serviceCustomizationPb.DictParam): ?serviceCustomizationPb.CustomParamError>}
     */
    this.valueValidators = new Map(
      capabilities.map(capture => [
        capture.getName(),
        createValueValidator(capture.getCustomParams() ?? new serviceCustomizationPb.DictParam.Spec()),
      ]),
    );
    this.dataCollectFn = dataCollectFn;
    this.acquireResponseFn = acquireResponseFn;
    this.liveResponseFn = liveResponseFn;
    this.requestManager = new RequestManager();
    this.executor = executor;
    this.robot = robot;
    this.storeClient = null;
    this.dataBufferClient = null;

    /**
     * Resolves once the service is initialized.
     * @type {Promise<void>}
     */
    this.ready = this._init();
    // Its errors are reported by the RPCs and to the callers awaiting it: not an unhandled rejection.
    this.ready.catch(() => {});
  }

  async _init() {
    this.storeClient = await this.robot.ensureClient(DataAcquisitionStoreClient.defaultServiceName);
    this.dataBufferClient = await this.robot.ensureClient(DataBufferClient.defaultServiceName);
  }

  /**
   * Validate that any parameters set in the request are valid according the spec.
   * @param {dataAcquisitionPb.AcquirePluginDataRequest} request
   * @param {dataAcquisitionPb.AcquirePluginDataResponse} response Gets the status, if invalid.
   * @returns {boolean}
   */
  validateParams(request, response) {
    for (const capture of request.getAcquisitionRequests()?.getDataCapturesList() ?? []) {
      const validator = this.valueValidators.get(capture.getName());
      if (!validator) {
        response.setStatus(dataAcquisitionPb.AcquirePluginDataResponse.Status.STATUS_UNKNOWN_CAPTURE_TYPE);
        return false;
      }
      const error = validator(capture.getCustomParams() ?? new serviceCustomizationPb.DictParam());
      if (error !== null) {
        response.setCustomParamError(error);
        response.setStatus(dataAcquisitionPb.AcquirePluginDataResponse.Status.STATUS_CUSTOM_PARAMS_ERROR);
        return false;
      }
    }
    return true;
  }

  /**
   * Runs the data collection and storage in sequence, and updates the state of the request.
   * @param {number} requestId The request_id for the acquisition request.
   * @param {dataAcquisitionPb.AcquirePluginDataRequest} request The data acquisition request.
   * @param {RequestState} state The associated internal request state for the data.
   * @returns {Promise<void>}
   * @private
   */
  async _dataCollectionWrapper(requestId, request, state) {
    try {
      const storeHelper = new DataAcquisitionStoreHelper(this.storeClient, state);
      await this.dataCollectFn(request, storeHelper);
      await storeHelper.waitForStoresComplete();
      state.setCompleteIfNoError(this.logger);
    } catch (e) {
      if (e instanceof RequestCancelledError) {
        // Not setStatus(): it would throw the error again.
        state._statusProto.setStatus(Status.STATUS_ACQUISITION_CANCELLED);
        this.logger.info(`Request ${requestId} cancelled`);
      } else {
        this.logger.error(`Failed during call to user function: ${e?.stack ?? e}`);
        state._statusProto.setStatus(Status.STATUS_INTERNAL_ERROR);
        if (!state._statusProto.hasHeader()) state._statusProto.setHeader(new headerPb.ResponseHeader());
        const header = state._statusProto.getHeader();
        if (!header.hasError()) header.setError(new headerPb.CommonError());
        header.getError().setMessage(String(e?.message ?? e));
      }
    } finally {
      this.requestManager.markRequestFinished(requestId);
      this.logger.info(`Finished request ${requestId}`);
    }
  }

  /**
   * AcquirePluginData RPC: trigger a data acquisition and store results in the data acquisition store service.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the AcquirePluginDataRequest.
   * @param {Function} callback Receives the AcquirePluginDataResponse, with a request_id to use with GetStatus.
   * @returns {Promise<void>}
   */
  acquirePluginData(call, callback) {
    return this._handle(call, callback, async request => {
      const response = new dataAcquisitionPb.AcquirePluginDataResponse();
      await new ResponseContext(response, request, this.dataBufferClient).run(() =>
        this._startPluginAcquire(request, response),
      );
      return response;
    });
  }

  /**
   * Starts the data collection, and fills the AcquirePluginDataResponse.
   * @param {dataAcquisitionPb.AcquirePluginDataRequest} request The data acquisition request.
   * @param {dataAcquisitionPb.AcquirePluginDataResponse} response The data acquisition response, mutated.
   * @returns {Promise<dataAcquisitionPb.AcquirePluginDataResponse>}
   * @private
   */
  async _startPluginAcquire(request, response) {
    if (!this.validateParams(request, response)) {
      return response;
    }

    if (this.acquireResponseFn !== null) {
      try {
        if (!(await this.acquireResponseFn(request, response))) {
          return response;
        }
      } catch (e) {
        this.logger.error(`Failed during call to user acquire response function: ${e?.stack ?? e}`);
        // Python uses CODE_INTERNAL_ERROR, which does not exist.
        populateResponseHeader(
          response,
          request,
          headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR,
          String(e?.message ?? e),
        );
        return response;
      }
    }
    this.requestManager.cleanupRequests();
    const [requestId, state] = this.requestManager.addRequest();
    response.setRequestId(requestId);
    const captureNames = (request.getAcquisitionRequests()?.getDataCapturesList() ?? []).map(capture =>
      capture.getName(),
    );
    this.logger.info(`Beginning request ${requestId} for ${JSON.stringify(captureNames)}`);
    // In the background, like the executor of Python: the response does not wait for the acquisition.
    this._dataCollectionWrapper(requestId, request, state).catch(e =>
      this.logger.error(`Request ${requestId} failed: ${e?.stack ?? e}`),
    );
    response.setStatus(dataAcquisitionPb.AcquirePluginDataResponse.Status.STATUS_OK);
    populateResponseHeader(response, request);
    return response;
  }

  /**
   * GetStatus RPC: query the status of a data acquisition by ID.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the GetStatusRequest.
   * @param {Function} callback Receives the GetStatusResponse.
   * @returns {Promise<void>}
   */
  getStatus(call, callback) {
    return this._handle(call, callback, async request => {
      const status = this.requestManager.getStatusProto(request.getRequestId());
      const response =
        status ?? new dataAcquisitionPb.GetStatusResponse().setStatus(Status.STATUS_REQUEST_ID_DOES_NOT_EXIST);
      // The error message of a failed data collection (Python sets it, then replaces the header).
      const errorMessage = status?.getHeader()?.getError()?.getMessage() || null;
      await new ResponseContext(response, request, this.dataBufferClient).run(() =>
        populateResponseHeader(response, request, headerPb.CommonError.Code.CODE_OK, errorMessage),
      );
      return response;
    });
  }

  /**
   * GetServiceInfo RPC: the list of data acquisition capabilities.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the GetServiceInfoRequest.
   * @param {Function} callback Receives the GetServiceInfoResponse.
   * @returns {Promise<void>}
   */
  getServiceInfo(call, callback) {
    return this._handle(call, callback, async request => {
      const response = new dataAcquisitionPb.GetServiceInfoResponse();
      await new ResponseContext(response, request, this.dataBufferClient).run(() => {
        response.setCapabilities(
          new dataAcquisitionPb.AcquisitionCapabilityList().setDataSourcesList(
            this.capabilities.map(capability => capability.clone()),
          ),
        );
        populateResponseHeader(response, request);
      });
      return response;
    });
  }

  /**
   * CancelAcquisition RPC: cancel a data acquisition by ID.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the CancelAcquisitionRequest.
   * @param {Function} callback Receives the CancelAcquisitionResponse.
   * @returns {Promise<void>}
   */
  cancelAcquisition(call, callback) {
    return this._handle(call, callback, async request => {
      const response = new dataAcquisitionPb.CancelAcquisitionResponse();
      await new ResponseContext(response, request, this.dataBufferClient).run(() => {
        if (this.requestManager.markRequestCancelled(request.getRequestId())) {
          this.logger.info(`Cancelling request ${request.getRequestId()}`);
          response.setStatus(dataAcquisitionPb.CancelAcquisitionResponse.Status.STATUS_OK);
        } else {
          response.setStatus(dataAcquisitionPb.CancelAcquisitionResponse.Status.STATUS_REQUEST_ID_DOES_NOT_EXIST);
        }
        populateResponseHeader(response, request);
      });
      return response;
    });
  }

  /**
   * GetLiveData RPC: the live data available from this plugin.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the LiveDataRequest.
   * @param {Function} callback Receives the LiveDataResponse, result of liveResponseFn.
   * @returns {Promise<void>}
   */
  getLiveData(call, callback) {
    return this._handle(call, callback, async request => {
      let response = new dataAcquisitionPb.LiveDataResponse();
      await new ResponseContext(response, request, this.dataBufferClient).run(async () => {
        try {
          if (this.liveResponseFn !== null) {
            response = await this.liveResponseFn(request);
            populateResponseHeader(response, request);
          } else {
            populateResponseHeader(
              response,
              request,
              headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR,
              'live_response_fn is None',
            );
          }
        } catch (generalError) {
          this.logger.error(
            `Failed during call to user live response function: ${generalError?.stack ?? generalError}`,
          );
          populateResponseHeader(
            response,
            request,
            headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR,
            String(generalError?.message ?? generalError),
          );
        }
      });
      return response;
    });
  }

  /**
   * Run an RPC handler. Like an exception in a Python servicer, an error ends the RPC with the UNKNOWN status.
   * @private
   */
  async _handle(call, callback, handler) {
    let response;
    try {
      await this.ready;
      response = await handler(call.request);
    } catch (e) {
      this.logger.error(`Failed to handle ${call.getPath?.() ?? 'the RPC'}: ${e?.stack ?? e}`);
      callback(e);
      return;
    }
    callback(null, response);
  }
}

/**
 * Manage request lifecycles and status.
 *
 * The RequestManager manages some internals of the RequestState class, so it accesses its protected variables.
 */
class RequestManager {
  constructor() {
    /** @type {Map<number, RequestState>} */
    this._requests = new Map();
    this._counter = 0;
  }

  /**
   * Create a new request to manage.
   * @returns {[number, RequestState]} The request id and its state.
   */
  addRequest() {
    this._counter += 1;
    const state = new RequestState();
    this._requests.set(this._counter, state);
    return [this._counter, state];
  }

  /**
   * Get the RequestState object for managing a request.
   * @param {number} requestId The request_id for the acquisition request being inspected.
   * @returns {?RequestState} null if there is no such request.
   */
  getRequestState(requestId) {
    return this._requests.get(requestId) ?? null;
  }

  /**
   * Get a copy of the current status for the specified request.
   * @param {number} requestId The request_id for the acquisition request being inspected.
   * @returns {?dataAcquisitionPb.GetStatusResponse} null if there is no such request.
   */
  getStatusProto(requestId) {
    return this.getRequestState(requestId)?._statusProto.clone() ?? null;
  }

  /**
   * Mark a request as cancelled, and no longer able to be updated.
   * @param {number} requestId The request_id for the acquisition request being cancelled.
   * @returns {boolean} False if there is no such request.
   */
  markRequestCancelled(requestId) {
    const state = this.getRequestState(requestId);
    if (state === null) return false;
    state._cancelled = true;
    state._statusProto.setStatus(Status.STATUS_CANCEL_IN_PROGRESS);
    return true;
  }

  /**
   * Mark a request as finished, and able to be removed later.
   * @param {number} requestId The request_id for the acquisition request being completed.
   * @returns {void}
   */
  markRequestFinished(requestId) {
    const state = this.getRequestState(requestId);
    if (state !== null) state._completionTime = nowSec();
  }

  /**
   * Remove all requests that were completed farther in the past than olderThanTime.
   * @param {?number} [olderThanTime=null] Time (in seconds) that requests will be removed after. Defaults to
   * removing anything completed more than kDefaultRequestExpiration seconds ago.
   * @returns {void}
   */
  cleanupRequests(olderThanTime = null) {
    olderThanTime = olderThanTime ?? nowSec() - kDefaultRequestExpiration;
    for (const [requestId, state] of this._requests) {
      if (state._completionTime !== null && state._completionTime < olderThanTime) {
        this._requests.delete(requestId);
      }
    }
  }
}

module.exports = {
  kDefaultRequestExpiration,
  RequestCancelledError,
  makeError,
  RequestState,
  DataAcquisitionStoreHelper,
  DataAcquisitionPluginService,
  RequestManager,
};
