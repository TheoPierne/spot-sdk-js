/**
 * @file General client implementation for the main, on-robot data-acquisition service.
 */

'use strict';

const { Struct } = require('google-protobuf/google/protobuf/struct_pb');

const {
  commonHeaderErrors,
  errorFactory,
  BaseClient,
  customParamsError,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
} = require('./common');
const { ResponseError, InternalServerError, ValueError } = require('./exceptions');
const { DefaultDict } = require('./util');

const dataAcquisitionPb = require('../bosdyn/api/data_acquisition_pb');
const { DataAcquisitionServiceClient } = require('../bosdyn/api/data_acquisition_service_grpc_pb');
const { nowTimestamp, secondsToDuration, nowSec } = require('../bosdyn-core/util');

/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./robot').Robot} Robot
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 * @typedef {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} Timestamp
 * @typedef {import('../bosdyn/api/data_acquisition_pb').Metadata} Metadata
 */

/** Error in Data Acquisition RPC */
class DataAcquisitionResponseError extends ResponseError {}
/** The provided request id does not exist or is invalid. */
class RequestIdDoesNotExistError extends DataAcquisitionResponseError {}
/** The provided request contains unknown capture requests. */
class UnknownCaptureTypeError extends DataAcquisitionResponseError {}
/** The data acquisition request was unable to be cancelled. */
class CancellationFailedError extends DataAcquisitionResponseError {}

/**
 * A client for triggering data acquisition and logging.
 * @extends {BaseClient<DataAcquisitionServiceClient>}
 */
class DataAcquisitionClient extends BaseClient {
  static defaultServiceName = 'data-acquisition';
  static serviceType = 'bosdyn.api.DataAcquisitionService';

  /**
   * Create an instance of AuthClient's class.
   * @param {?string} name BaseClient name.
   */
  constructor(name = null) {
    super(DataAcquisitionServiceClient, name);
    /** @type {TimeSyncEndpoint} */
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
      // Continue regardless of error
    }
  }

  /**
   * Make an AcquireDataRequest message, with the data timestamp in robot time when time sync is available.
   * @param {dataAcquisitionPb.AcquisitionRequestList} acquisitionRequests The different image sources and
   * data sources to capture from and save to the data buffer with the same timestamp.
   * @param {string} actionName The unique action name that all data will be saved with.
   * @param {string} groupName The unique group name that all data will be saved with.
   * @param {?Timestamp} dataTimestamp The unique timestamp that all data will be
   * saved with.
   * @param {?(Metadata|object)} metadata The JSON structured metadata to be associated with
   * the data returned by the DataAcquisitionService when logged in the data buffer service.
   * @param {?number} minTimeout The minimum time to wait, in seconds.
   * @returns {dataAcquisitionPb.AcquireDataRequest}
   * @throws {ValueError} Metadata is not in the right format.
   */
  makeAcquireDataRequest(
    acquisitionRequests,
    actionName,
    groupName,
    dataTimestamp = null,
    metadata = null,
    minTimeout = null,
  ) {
    if (dataTimestamp === null) {
      if (!this._timesyncEndpoint) {
        dataTimestamp = nowTimestamp();
      } else {
        dataTimestamp = this._timesyncEndpoint.robotTimestampFromLocalSecs(nowSec());
      }
    }
    const actionId = new dataAcquisitionPb.CaptureActionId()
      .setActionName(actionName)
      .setGroupName(groupName)
      .setTimestamp(dataTimestamp);

    const request = new dataAcquisitionPb.AcquireDataRequest()
      .setActionId(actionId)
      .setMetadata(metadataToProto(metadata))
      .setAcquisitionRequests(acquisitionRequests);

    if (minTimeout) {
      request.setMinTimeout(secondsToDuration(minTimeout));
    }
    return request;
  }

  /**
   * Trigger a data acquisition to save data and metadata to the data buffer.
   * @param {Object} acquisitionRequests The different image sources and
   * data sources to capture from and save to the data buffer with the same timestamp.
   * @param {string} actionName The unique action name that all data will be saved with.
   * @param {string} groupName The unique group name that all data will be saved with.
   * @param {?Timestamp} dataTimestamp The unique timestamp that all data will be
   * saved with.
   * @param {?(Metadata|object)} metadata The JSON structured metadata to be associated with
   * the data returned by the DataAcquisitionService when logged in the data buffer
   * service.
   * @param {?number} minTimeout The minimum time to wait, in seconds like Python (unlike the timeout of args, in
   * milliseconds).
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>} If the RPC is successful, then it will return
   * the acquire data request id, which can be used to check the status of the acquisition and get feedback.
   * @throws {RpcError} Problem communicating with the robot.
   */
  acquireData(
    acquisitionRequests,
    actionName,
    groupName,
    dataTimestamp = null,
    metadata = null,
    minTimeout = null,
    args,
  ) {
    const request = this.makeAcquireDataRequest(
      acquisitionRequests,
      actionName,
      groupName,
      dataTimestamp,
      metadata,
      minTimeout,
    );
    return this.call(this._stub.acquireData, request, getRequestId, acquireDataError, false, args);
  }

  /**
   * Alternate version of acquireData() that takes an AcquireDataRequest directly.
   * @param {dataAcquisitionPb.AcquireDataRequest} request The request to send
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.AcquireDataResponse>}
   */
  acquireDataFromRequest(request, args) {
    return this.call(this._stub.acquireData, request, null, acquireDataError, true, args);
  }

  /**
   * Check the status of a data acquisition based on the request id.
   * @param {number} requestId The request id associated with an AcquireData request.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.GetStatusResponse>} If the RPC is successful, then it will return
   * the full status response, which includes the status as well as other information about any possible errors.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {RequestIdDoesNotExistError} The request id provided is incorrect.
   */
  getStatus(requestId, args) {
    const request = new dataAcquisitionPb.GetStatusRequest().setRequestId(requestId);
    return this.call(this._stub.getStatus, request, null, _getStatusError, false, args);
  }

  /**
   * Get information from a DAQ service to list it's capabilities - which data, metadata,
   * or processing the DAQ service will perform.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.AcquisitionCapabilityList>} The GetServiceInfoResponse message,
   * which contains all the different capabilities.
   * @throws {RpcError} Problem communicating with the robot.
   */
  getServiceInfo(args) {
    const request = new dataAcquisitionPb.GetServiceInfoRequest();
    return this.call(this._stub.getServiceInfo, request, _getServiceInfoCapabilities, commonHeaderErrors, false, args);
  }

  /**
   * Cancel a data acquisition based on the request id.
   * @param {number} requestId The request id associated with an AcquireData request.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.CancelAcquisitionResponse>} If the RPC is successful, then it will return the
   * full status response, which includes the status as well as other information about any possible errors.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {CancellationFailedError} The data acquisitions associated with the request id were unable to be cancelled.
   * @throws {RequestIdDoesNotExistError} The request id provided is incorrect.
   */
  cancelAcquisition(requestId, args) {
    const request = new dataAcquisitionPb.CancelAcquisitionRequest().setRequestId(requestId);
    return this.call(this._stub.cancelAcquisition, request, null, _cancelAcquisitionError, false, args);
  }

  /**
   * Call the GetLiveData RPC of the plugin service.
   * @param {dataAcquisitionPb.LiveDataRequest} request The data_acquisition_pb.LiveDataRequest to be send
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.LiveDataResponse>}
   */
  getLiveData(request, args) {
    return this.call(this._stub.getLiveData, request, null, _getLiveDataError, true, args);
  }
}

const _ACQUIRE_DATA_STATUS_TO_ERROR = DefaultDict(() => [DataAcquisitionResponseError, null]);
_ACQUIRE_DATA_STATUS_TO_ERROR.set(dataAcquisitionPb.AcquireDataResponse.Status.STATUS_OK, [null, null]);
_ACQUIRE_DATA_STATUS_TO_ERROR.set(dataAcquisitionPb.AcquireDataResponse.Status.STATUS_UNKNOWN_CAPTURE_TYPE, [
  UnknownCaptureTypeError,
  'The provided request contains unknown capture requests.',
]);

const _GET_STATUS_STATUS_TO_ERROR = DefaultDict(() => [null, null]);
_GET_STATUS_STATUS_TO_ERROR.set(dataAcquisitionPb.GetStatusResponse.Status.STATUS_REQUEST_ID_DOES_NOT_EXIST, [
  RequestIdDoesNotExistError,
  'The provided request id does not exist or is invalid.',
]);

const _CANCEL_ACQUISITION_STATUS_TO_ERROR = DefaultDict(() => [null, null]);
_CANCEL_ACQUISITION_STATUS_TO_ERROR.set(
  dataAcquisitionPb.CancelAcquisitionResponse.Status.STATUS_REQUEST_ID_DOES_NOT_EXIST,
  [RequestIdDoesNotExistError, 'The provided request id does not exist or is invalid.'],
);
_CANCEL_ACQUISITION_STATUS_TO_ERROR.set(dataAcquisitionPb.CancelAcquisitionResponse.Status.STATUS_FAILED_TO_CANCEL, [
  CancellationFailedError,
  'The data acquisition request was unable to be cancelled.',
]);

const _CAPABILITY_LIVE_DATA_STATUS_TO_ERROR = DefaultDict(() => [null, null]);
_CAPABILITY_LIVE_DATA_STATUS_TO_ERROR.set(dataAcquisitionPb.LiveDataResponse.CapabilityLiveData.Status.STATUS_OK, [
  null,
  null,
]);
_CAPABILITY_LIVE_DATA_STATUS_TO_ERROR.set(
  dataAcquisitionPb.LiveDataResponse.CapabilityLiveData.Status.STATUS_UNKNOWN_CAPTURE_TYPE,
  [UnknownCaptureTypeError, 'The provided request contains unknown capture requests.'],
);
_CAPABILITY_LIVE_DATA_STATUS_TO_ERROR.set(
  dataAcquisitionPb.LiveDataResponse.CapabilityLiveData.Status.STATUS_INTERNAL_ERROR,
  [InternalServerError, 'Service experienced an unexpected error state.'],
);

/**
 * The Metadata proto of metadata given as a proto or as an object.
 * @param {?(dataAcquisitionPb.Metadata|Object)} metadata The JSON structured metadata.
 * @returns {?dataAcquisitionPb.Metadata} null if there is no metadata.
 * @throws {ValueError} Metadata is not in the right format.
 */
function metadataToProto(metadata) {
  if (metadata === null || metadata === undefined) {
    return null;
  }
  if (metadata instanceof dataAcquisitionPb.Metadata) {
    return metadata;
  }
  if (typeof metadata === 'object' && !Array.isArray(metadata)) {
    // The data is a google.protobuf.Struct message: setData() threw on an object.
    return new dataAcquisitionPb.Metadata().setData(Struct.fromJavaScript(metadata));
  }
  throw new ValueError('Invalid metadata, not an object or data_acquisition.Metadata');
}

const acquireDataError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      dataAcquisitionPb.AcquireDataResponse.Status,
      _ACQUIRE_DATA_STATUS_TO_ERROR,
    ),
  ),
);

const _getStatusError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      dataAcquisitionPb.GetStatusResponse.Status,
      _GET_STATUS_STATUS_TO_ERROR,
    ),
  ),
);

const _cancelAcquisitionError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      dataAcquisitionPb.CancelAcquisitionResponse.Status,
      _CANCEL_ACQUISITION_STATUS_TO_ERROR,
    ),
  ),
);

const _getLiveDataError = handleCommonHeaderErrors(response => {
  for (const capabilityLiveData of response.getLiveDataList()) {
    let result = customParamsError(capabilityLiveData, null, 'status', 'custom_param_error', response);
    if (result !== null) {
      return result;
    }

    result = errorFactory(
      response,
      capabilityLiveData.getStatus(),
      dataAcquisitionPb.LiveDataResponse.CapabilityLiveData.Status,
      _CAPABILITY_LIVE_DATA_STATUS_TO_ERROR,
    );

    if (result !== null) {
      result.response = response;
      return result;
    }
  }
  return null;
});

function _getServiceInfoCapabilities(response) {
  return response.getCapabilities();
}

function getRequestId(response) {
  return response.getRequestId();
}

module.exports = {
  DataAcquisitionClient,
  DataAcquisitionResponseError,
  RequestIdDoesNotExistError,
  UnknownCaptureTypeError,
  CancellationFailedError,
  metadataToProto,
  acquireDataError,
  _getLiveDataError,
};
