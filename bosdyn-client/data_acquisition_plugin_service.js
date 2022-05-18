'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const { cloneDeep } = require('lodash');

const { DataAcquisitionStoreClient } = require('./data_acquisition_store');
const { DataBufferClient } = require('./data_buffer');
const { ResponseContext } = require('./server_util');
const { populate_response_header } = require('./util');

const data_acquisition_pb = require('../bosdyn/api/data_acquisition_pb');
const data_acquisition_plugin_service_grpc_pb = require('../bosdyn/api/data_acquisition_plugin_service_grpc_pb');
const header_pb = require('../bosdyn/api/header_pb');

const kDefaultRequestExpiration = 30_000;

class RequestCancelledError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'RequestCancelledError';
  }
}

function make_error(data_id, error_msg, error_data = null) {
  // eslint-disable-next-line
  console.warn('Il peut y avoir une erreur si la variable "error_data" est donnée à cette fonction. [data_acquisition_plugin_service.js:20]');
  const proto = new data_acquisition_pb.DataError().setDataId(data_id).setErrorMessage(error_msg);
  if (error_data !== null) proto.setErrorData(error_data.pack(error_data));
  return proto;
}

function all(iterable) {
  for (let index = 0; index < iterable.length; index++) {
    if (!iterable[index]) return false;
  }
  return true;
}

class RequestState {
  kNonError = [
    data_acquisition_pb.GetStatusResponse.Status.STATUS_ACQUIRING,
    data_acquisition_pb.GetStatusResponse.Status.STATUS_SAVING,
  ];

  constructor() {
    this._cancelled = false;
    this._status_proto = new data_acquisition_pb.GetStatusResponse().setStatus(
      data_acquisition_pb.GetStatusResponse.Status.STATUS_ACQUIRING,
    );
    this._completion_time = null;
  }

  set_status(status) {
    this._cancel_check_locked();
    this._status_proto.setStatus(status);
  }

  set_complete_if_no_error(logger = null) {
    this._cancel_check_locked();
    if (this.kNonError.includes(this._status_proto.getStatus())) {
      this._status_proto.setStatus(data_acquisition_pb.GetStatusResponse.Status.STATUS_COMPLETE);
      return true;
    }
    if (logger) {
      logger.error(`[DATA ACQUISITION PLUGIN SERVICE] Error encountered during request:\n${this._status_proto}`);
    }

    return false;
  }

  add_saved(data_ids) {
    console.warn('Ne marche peut etre pas correctement ! [data_acquisition_plugin_service.js:58]');
    this._cancel_check_locked();
    this._status_proto.addDataSaved(data_ids);
  }

  add_errors(data_errors) {
    console.warn('Ne marche peut etre pas correctement ! [data_acquisition_plugin_service.js:64]');
    this._cancel_check_locked();
    this._status_proto.addDataErrors(data_errors);
    this._status_proto.setStatus(data_acquisition_pb.GetStatusResponse.Status.STATUS_DATA_ERROR);
    console.error(`[DATA ACQUISITION PLUGIN SERVICE] Errors occurred during acquisition: \n${data_errors}`);
  }

  has_data_errors() {
    this._cancel_check_locked();
    return this._status_proto.getDataErrorsList().length !== 0;
  }

  cancel_check() {
    this._cancel_check_locked();
  }

  is_cancelled() {
    return this._cancelled;
  }

  _cancel_check_locked() {
    if (this._cancelled) {
      throw new RequestCancelledError();
    }
  }
}

class DataAcquisitionStoreHelper {
  constructor(store_client, state, cancel_interval = 1_000) {
    this.store_client = store_client;
    this.state = state;
    this.cancel_interval = cancel_interval;
    this.data_id_future_pairs = [];
  }

  async store_metadata(metadata, data_id) {
    const rep = await this.store_client.store_metadata(metadata, data_id);
    this.data_id_future_pairs.push([data_id, rep]);
  }

  async store_image(image_capture, data_id) {
    const rep = await this.store_client.store_image(image_capture, data_id);
    this.data_id_future_pairs.push([data_id, rep]);
  }

  async store_data(message, data_id, file_extension = null) {
    const rep = await this.store_client.store_data(message, data_id, file_extension);
    this.data_id_future_pairs.push([data_id, rep]);
  }

  cancel_check() {
    this.state.cancel_check();
  }

  async wait_for_stores_complete() {
    this.state.cancel_check();

    while (all(this.data_id_future_pairs.map(x => x[1]))) {
      await sleep(this.cancel_interval);
      this.state.cancel_check();
    }

    for (const [data_id, future] of this.data_id_future_pairs) {
      if (future.getException() === null) {
        this.state.addDataSaved([data_id]);
      } else {
        this.state.addDataErrors([make_error(data_id, `Failed to store data: ${future.exception()}`)]);
      }
    }

    return !this.state.has_data_errors();
  }
}

class DataAcquisitionPluginService extends data_acquisition_plugin_service_grpc_pb.DataAcquisitionPluginServiceService {
  static service_type = 'bosdyn.api.DataAcquisitionPluginService';

  constructor(robot, capabilities, data_collect_fn, acquire_response_fn = null, executor = null, logger = null) {
    super();
    this.logger = logger || console;
    this.capabilities = capabilities;
    this.data_collect_fn = data_collect_fn;
    this.acquire_response_fn = acquire_response_fn;
    this.request_manager = RequestManager();
    this.executor = executor;
    this.robot = robot;
    this.#init();
  }

  async #init() {
    this.store_client = await this.robot.ensure_client(DataAcquisitionStoreClient.default_service_name);
    this.data_buffer_client = await this.robot.ensure_client(DataBufferClient.default_service_name);
  }

  async _data_collection_wrapper(request_id, request, state) {
    const store_helper = new DataAcquisitionStoreHelper(this.store_client, state);
    try {
      this.data_collect_fn(request, store_helper);
      await store_helper.wait_for_stores_complete();
      state.set_complete_if_no_error(this.logger);
    } catch (e) {
      if (e instanceof RequestCancelledError) {
        state._status_proto.setStatus(data_acquisition_pb.GetStatusResponse.Status.STATUS_ACQUISITION_CANCELLED);
        this.logger.info(`[DATA ACQUISITION PLUGIN SERVICE] Request "${request_id}" cancelled`);
      } else {
        this.logger.error('[DATA ACQUISITION PLUGIN SERVICE] Failed during call to user function');
        state._status_proto.setStatus(data_acquisition_pb.GetStatusResponse.Status.STATUS_INTERNAL_ERROR);
        state._status_proto.getHeader().getError().setMessage(e.toString());
      }
    } finally {
      this.request_manager.mark_request_finished(request_id);
      this.logger.info(`[DATA ACQUISITION PLUGIN SERVICE] Finished request ${request_id}`);
    }
  }

  AcquirePluginData(request) {
    const response = new data_acquisition_pb.AcquirePluginDataResponse();
    ResponseContext(response, request, this.data_buffer_client);
    this._start_plugin_acquire(request, response);
    return response;
  }

  _start_plugin_acquire(request, response) {
    if (this.acquire_response_fn !== null) {
      try {
        if (!this.acquire_response_fn(request, response)) return response;
      } catch (e) {
        this.logger.error('[DATA ACQUISITION PLUGIN SERVICE] Failed during call to user acquire response function');
        populate_response_header(
          response,
          request,
          header_pb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR,
          e.toString(),
        );
        return response;
      }
    }
    this.request_manager.cleanup_requests();
    const [request_id, state] = this.request_manager.add_request();
    this.logger.info(
      `[DATA ACQUISITION PLUGIN SERVICE] Beginning request ${request_id || response.getRequestId()} for ${request
        .getAcquisitionRequests()
        .getDataCaptures()
        .map(x => x.getName())}`,
    );
    this.executor.submit(this._data_collection_wrapper, response.getRequestId(), request, state);
    response.setStatus(data_acquisition_pb.AcquireDataResponse.Status.STATUS_OK);
    populate_response_header(response, request);
    return response;
  }

  GetStatus(request) {
    let response = new data_acquisition_pb.GetStatusResponse();
    ResponseContext(response, request, this.data_buffer_client);
    try {
      response = cloneDeep(this.request_manager.get_status_proto(request.getRequestId()));
    } catch (e) {
      response.setStatus(response.STATUS_REQUEST_ID_DOES_NOT_EXIST);
    }
    populate_response_header(response, request);
    return response;
  }

  GetServiceInfo(request) {
    const response = new data_acquisition_pb.GetServiceInfoResponse();
    const capabilities = new data_acquisition_pb.AcquisitionCapabilityList();
    ResponseContext(response, request, this.data_buffer_client);
    capabilities.setDataSourcesList(this.capabilities);
    response.setCapabilities(capabilities);
    populate_response_header(response, request);
    return response;
  }

  CancelAcquisition(request) {
    const response = new data_acquisition_pb.CancelAcquisitionResponse();
    ResponseContext(response, request, this.data_buffer_client);
    let isCatch = false;
    try {
      this.request_manager.mark_request_cancelled(request.getRequestId());
      this.logger.info(`[DATA ACQUISITION PLUGIN SERVICE] Cancelling request ${request.getRequestId()}`);
    } catch (e) {
      isCatch = true;
      response.setStatus(data_acquisition_pb.CancelAcquisitionResponse.Status.STATUS_REQUEST_ID_DOES_NOT_EXIST);
    }
    if (!isCatch) response.setStatus(data_acquisition_pb.CancelAcquisitionResponse.Status.STATUS_OK);
    populate_response_header(response, request);
    return response;
  }
}

class RequestManager {
  constructor() {
    this._requests = {};
    this._counter = 0;
  }

  add_request() {
    this._counter += 1;
    const state = new RequestState();
    this._requests[this._counter] = state;
    return [this._counter, state];
  }

  get_request_state(request_id) {
    return this._requests[request_id];
  }

  get_status_proto(request_id) {
    const state = this.get_request_state(request_id);
    let status = new data_acquisition_pb.GetStatusResponse();
    status = cloneDeep(state._status_proto);
    return status;
  }

  mark_request_cancelled(request_id) {
    const state = this.get_request_state(request_id);
    state._cancelled = true;
    state._status_proto.setStatus(data_acquisition_pb.GetStatusResponse.Status.STATUS_CANCEL_IN_PROGRESS);
  }

  mark_request_finished(request_id) {
    const state = this.get_request_state(request_id);
    state._completion_time = Date.now();
  }

  cleanup_requests(older_than_time = null) {
    older_than_time = older_than_time || Date.now() - kDefaultRequestExpiration;
    let to_remove = [];
    for (const [request_id, state] of Object.entries(this._requests)) {
      if (state._completion_time !== null && state._completion_time < older_than_time) to_remove.push(request_id);
    }
    for (const key of to_remove) {
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
