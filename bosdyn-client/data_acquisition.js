'use strict';

const { common_header_errors, error_factory, error_pair, BaseClient } = require('./common');
const { ResponseError } = require('./exceptions');
const { now_timestamp } = require('../bosdyn-core/util');
const data_acquisition = require('../bosdyn/api/data_acquisition_pb');
const data_acquisition_service = require('../bosdyn/api/data_acquisition_service_grpc_pb');

class DataAcquisitionResponseError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'DataAcquisitionResponseError';
  }
}

class RequestIdDoesNotExistError extends DataAcquisitionResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'RequestIdDoesNotExistError';
  }
}

class UnknownCaptureTypeError extends DataAcquisitionResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'UnknownCaptureTypeError';
  }
}

class CancellationFailedError extends DataAcquisitionResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CancellationFailedError';
  }
}

/**
 * A client for triggering data acquisition and logging.
 * @class DataAcquisitionClient
 * @extends BaseClient
 */
class DataAcquisitionClient extends BaseClient {
  static default_service_name = 'data-acquisition';
  static service_type = 'bosdyn.api.DataAcquisitionService';

  /**
   * Create an instance of AuthClient's class.
   * @param {?string} name BaseClient name.
   */
  constructor(name = null) {
    super(data_acquisition_service.DataAcquisitionServiceClient, name);
    this._timesync_endpoint = null;
  }

  /**
   * Update instance from another object.
   * @param {Object} other The object where to copy from.
   * @returns {void}
   */
  update_from(other) {
    super.update_from(other);
    try {
      this._timesync_endpoint = other.time_sync.endpoint;
    } catch (e) {
      // Continue regardless of error
    }
  }

  /**
   * Trigger a data acquisition to save data and metadata to the data buffer.
   * @param {Object} acquisition_requests The different image sources and
   * data sources to capture from and save to the data buffer with the same timestamp.
   * @param {string} action_name The unique action name that all data will be saved with.
   * @param {string} group_name The unique group name that all data will be saved with.
   * @param {?google.protobuf.Timestamp} data_timestamp The unique timestamp that all data will be
   * saved with.
   * @param {?(Metadata|object)} metadata The JSON structured metadata to be associated with
   * the data returned by the DataAcquisitionService when logged in the data buffer
   * service.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_acquisition.AcquireDataResponse.RequestId>} If the RPC is successful, then it will return
   * the acquire data request id, which can be used to check the status of the acquisition and get feedback.
   * @throws {RpcError} Problem communicating with the robot.
   */
  acquire_data(acquisition_requests, action_name, group_name, data_timestamp = null, metadata = null, args) {
    if (data_timestamp === null) {
      if (!this._timesync_endpoint) {
        data_timestamp = now_timestamp();
      } else {
        data_timestamp = this._timesync_endpoint.robot_timestamp_from_local_secs(Date.now());
      }
    }
    const action_id = new data_acquisition.CaptureActionId()
      .setActionName(action_name)
      .setGroupName(group_name)
      .setTimestamp(data_timestamp);

    const metadata_proto = metadata_to_proto(metadata);

    const request = new data_acquisition.AcquireDataRequest()
      .setActionId(action_id)
      .setMetadata(metadata_proto)
      .setAcquisitionRequests(acquisition_requests);

    return this.call(this._stub.acquireData, request, get_request_id, acquire_data_error, args);
  }

  /**
   * Check the status of a data acquisition based on the request id.
   * @param {number} request_id The request id associated with an AcquireData request.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_acquisition.GetStatusResponse>} If the RPC is successful, then it will return
   * the full status response, which includes the status as well as other information about any possible errors.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {RequestIdDoesNotExistError} The request id provided is incorrect.
   */
  get_status(request_id, args) {
    const request = new data_acquisition.GetStatusRequest().setRequestId(request_id);
    return this.call(this._stub.getStatus, request, null, _get_status_error, args);
  }

  /**
   * Get information from a DAQ service to list it's capabilities - which data, metadata,
   * or processing the DAQ service will perform.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_acquisition.GetServiceInfoResponse.Capabilities>} The GetServiceInfoResponse message,
   * which contains all the different capabilities.
   * @throws {RpcError} Problem communicating with the robot.
   */
  get_service_info(args) {
    const request = new data_acquisition.GetServiceInfoRequest();
    return this.call(this._stub.getServiceInfo, request, _get_service_info_capabilities, common_header_errors, args);
  }

  /**
   * Cancel a data acquisition based on the request id.
   * @param {number} request_id The request id associated with an AcquireData request.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<data_acquisition.CancelAcquisitionResponse>} If the RPC is successful, then it will return the
   * full status response, which includes the status as well as other information about any possible errors.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {CancellationFailedError} The data acquisitions associated with the request id were unable to be cancelled.
   * @throws {RequestIdDoesNotExistError} The request id provided is incorrect.
   */
  cancel_acquisition(request_id, args) {
    const request = new data_acquisition.CancelAcquisitionRequest().setRequestId(request_id);
    return this.call(this._stub.cancelAcquisition, request, null, _cancel_acquisition_error, args);
  }
}

const _ACQUIRE_DATA_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_UNKNOWN_CAPTURE_TYPE: error_pair(UnknownCaptureTypeError),
};

const _GET_STATUS_STATUS_TO_ERROR = {
  STATUS_REQUEST_ID_DOES_NOT_EXIST: error_pair(RequestIdDoesNotExistError),
};

const _CANCEL_ACQUISITION_STATUS_TO_ERROR = {
  STATUS_REQUEST_ID_DOES_NOT_EXIST: error_pair(RequestIdDoesNotExistError),
  STATUS_FAILED_TO_CANCEL: error_pair(CancellationFailedError),
};

function metadata_to_proto(metadata) {
  let metadata_proto = null;
  if (metadata instanceof data_acquisition.Metadata) {
    metadata_proto = metadata;
  } else if (metadata instanceof Object) {
    metadata_proto = new data_acquisition.Metadata();
    metadata_proto.setData(metadata);
  }
  return metadata_proto;
}

function acquire_data_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(data_acquisition.AcquireDataResponse.Status),
    _ACQUIRE_DATA_STATUS_TO_ERROR,
  );
}

function _get_status_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(data_acquisition.GetStatusResponse.Status),
    _GET_STATUS_STATUS_TO_ERROR,
  );
}

function _cancel_acquisition_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(data_acquisition.CancelAcquisitionResponse.Status),
    _CANCEL_ACQUISITION_STATUS_TO_ERROR,
  );
}

function _get_service_info_capabilities(response) {
  return response.getCapabilities();
}

function get_request_id(response) {
  return response.getRequestId();
}

module.exports = {
  DataAcquisitionClient,
  DataAcquisitionResponseError,
  RequestIdDoesNotExistError,
  UnknownCaptureTypeError,
  CancellationFailedError,
};
