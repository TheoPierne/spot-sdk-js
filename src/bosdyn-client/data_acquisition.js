'use strict';

const {
  commonHeaderErrors,
  errorFactory,
  BaseClient,
  customParamsError,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
} = require('./common');
const { ResponseError, InternalServerError } = require('./exceptions');
const { DefaultDict } = require('./util');

const dataAcquisitionPb = require('../bosdyn/api/data_acquisition_pb');
const { DataAcquisitionServiceClient } = require('../bosdyn/api/data_acquisition_service_grpc_pb');
const { nowTimestamp, secondsToDuration, nowSec } = require('../bosdyn-core/util');

class DataAcquisitionResponseError extends ResponseError {}
class RequestIdDoesNotExistError extends DataAcquisitionResponseError {}
class UnknownCaptureTypeError extends DataAcquisitionResponseError {}
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
   * Trigger a data acquisition to save data and metadata to the data buffer.
   * @param {Object} acquisitionRequests The different image sources and
   * data sources to capture from and save to the data buffer with the same timestamp.
   * @param {string} actionName The unique action name that all data will be saved with.
   * @param {string} groupName The unique group name that all data will be saved with.
   * @param {?google.protobuf.Timestamp} dataTimestamp The unique timestamp that all data will be
   * saved with.
   * @param {?(Metadata|object)} metadata The JSON structured metadata to be associated with
   * the data returned by the DataAcquisitionService when logged in the data buffer
   * service.
   * @param {?number} minTimeout The minimum time to wait
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.AcquireDataResponse.RequestId>} If the RPC is successful, then it will return
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
    if (dataTimestamp === null) {
      if (!this._timesync_endpoint) {
        dataTimestamp = nowTimestamp();
      } else {
        dataTimestamp = this._timesyncEndpoint.robotTimestampFromLocalSecs(nowSec());
      }
    }
    const actionId = new dataAcquisitionPb.CaptureActionId()
      .setActionName(actionName)
      .setGroupName(groupName)
      .setTimestamp(dataTimestamp);

    const metadataProto = metadataToProto(metadata);

    const request = new dataAcquisitionPb.AcquireDataRequest()
      .setActionId(actionId)
      .setMetadata(metadataProto)
      .setAcquisitionRequests(acquisitionRequests);

    if (minTimeout) {
      request.setMinTimeout(secondsToDuration(minTimeout));
    }

    return this.call(this._stub.acquireData, request, getRequestId, acquireDataError, args);
  }

  /**
   * Alternate version of acquireData() that takes an AcquireDataRequest directly.
   * @param {dataAcquisitionPb.AcquireDataRequest} request The request to send
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.AcquireDataResponse>}
   */
  acquireDataFromRequest(request, args) {
    return this.call(this._stub.acquireData, request, null, acquireDataError, args);
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
    return this.call(this._stub.getStatus, request, null, _getStatusError, args);
  }

  /**
   * Get information from a DAQ service to list it's capabilities - which data, metadata,
   * or processing the DAQ service will perform.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataAcquisitionPb.GetServiceInfoResponse.Capabilities>} The GetServiceInfoResponse message,
   * which contains all the different capabilities.
   * @throws {RpcError} Problem communicating with the robot.
   */
  getServiceInfo(args) {
    const request = new dataAcquisitionPb.GetServiceInfoRequest();
    return this.call(this._stub.getServiceInfo, request, _getServiceInfoCapabilities, commonHeaderErrors, args);
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
    return this.call(this._stub.cancelAcquisition, request, null, _cancelAcquisitionError, args);
  }

  /**
   * Call the GetLiveData RPC of the plugin service.
   * @param {dataAcquisitionPb.LiveDataRequest} request The data_acquisition_pb.LiveDataRequest to be send
   * @returns {Promise<dataAcquisitionPb.LiveDataResponse>}
   */
  getLiveData(request) {
    return this.call(this._stub.getLiveData, request, null, _getLiveDataError);
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

function metadataToProto(metadata) {
  if (!metadata) {
    return null;
  }

  let metadataProto = null;
  if (metadata instanceof dataAcquisitionPb.Metadata) {
    metadataProto = metadata;
  } else {
    metadataProto = new dataAcquisitionPb.Metadata();
    metadataProto.setData(metadata);
  }
  return metadataProto;
}

const acquireDataError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(dataAcquisitionPb.AcquireDataResponse.Status),
      _ACQUIRE_DATA_STATUS_TO_ERROR,
    ),
  ),
);

const _getStatusError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(dataAcquisitionPb.GetStatusResponse.Status),
      _GET_STATUS_STATUS_TO_ERROR,
    ),
  ),
);

const _cancelAcquisitionError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(dataAcquisitionPb.CancelAcquisitionResponse.Status),
      _CANCEL_ACQUISITION_STATUS_TO_ERROR,
    ),
  ),
);

const _getLiveDataError = handleCommonHeaderErrors(response => {
  for (const capabilityLiveData of response.getLiveData()) {
    let result = customParamsError(capabilityLiveData, null, '', '', response);
    if (result !== null) {
      return result;
    }

    result = errorFactory(
      response,
      capabilityLiveData.getStatus(),
      Object.keys(dataAcquisitionPb.LiveDataResponse.Status),
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
