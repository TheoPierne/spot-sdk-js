'use strict';

const {
  BaseClient,
  errorFactory,
  commonHeaderErrors,
  handleCommonHeaderErrors,
  handleCustomParamsErrors,
  handleUnsetStatusError,
  handleLeaseUseResultErrors,
} = require('./common');
const { LeaseUseError, ResponseError } = require('./exceptions');
const { DefaultDict } = require('./util');

const areaCallbackPb = require('../bosdyn/api/graph_nav/area_callback_pb');
const { AreaCallbackServiceClient } = require('../bosdyn/api/graph_nav/area_callback_service_grpc_pb');

/**
 * @extends {BaseClient<AreaCallbackServiceClient>}
 */
class AreaCallbackClient extends BaseClient {
  static serviceType = 'bosdyn.api.graph_nav.AreaCallbackService';
  static defaultServiceName = null;

  constructor() {
    super(AreaCallbackServiceClient);
  }

  areaCallbackInformation(request = null, args) {
    request = request || new areaCallbackPb.AreaCallbackInformationRequest();
    return this.call(this._stub.areaCallbackInformation, request, null, commonHeaderErrors, false, args);
  }

  beginCallback(request, args) {
    return this.call(this._stub.beginCallback, request, null, _beginCallbackError, false, args);
  }

  beginControll(request, args) {
    return this.call(this._stub.beginControl, request, null, _beginControlError, false, args);
  }

  updateCallback(request, args) {
    return this.call(this._stub.updateCallback, request, null, _updateCallbackError, false, args);
  }

  endCallback(request, args) {
    return this.call(this._stub.endCallback, request, null, _endCallbackError, false, args);
  }
}

class AreaCallbackResponseError extends ResponseError {}
class InvalidCommandIdError extends AreaCallbackResponseError {}
class InvalidConfigError extends AreaCallbackResponseError {}
class ExpiredEndTimeError extends AreaCallbackResponseError {}
class MissingLeaseResourcesError extends AreaCallbackResponseError {}
class ShutdownCallbackFailedError extends AreaCallbackResponseError {}

const _BEGIN_CALLBACK_TO_ERROR = DefaultDict(() => [AreaCallbackResponseError, null]);
_BEGIN_CALLBACK_TO_ERROR.set(areaCallbackPb.BeginCallbackResponse.Status.STATUS_OK, [null, null]);
_BEGIN_CALLBACK_TO_ERROR.set(areaCallbackPb.BeginCallbackResponse.Status.STATUS_INVALID_CONFIGURATION, [
  InvalidConfigError,
  'The provided configuration does not provide the necessary data.',
]);
_BEGIN_CALLBACK_TO_ERROR.set(areaCallbackPb.BeginCallbackResponse.Status.STATUS_EXPIRED_END_TIME, [
  ExpiredEndTimeError,
  'The provided end time has already expired.',
]);

const _BEGIN_CONTROL_TO_ERROR = DefaultDict(() => [AreaCallbackResponseError, null]);
_BEGIN_CALLBACK_TO_ERROR.set(areaCallbackPb.BeginControlResponse.Status.STATUS_OK, [null, null]);
_BEGIN_CALLBACK_TO_ERROR.set(areaCallbackPb.BeginControlResponse.Status.STATUS_INVALID_COMMAND_ID, [
  InvalidCommandIdError,
  'Provided command id does not match the current command id.',
]);
_BEGIN_CALLBACK_TO_ERROR.set(areaCallbackPb.BeginControlResponse.Status.STATUS_MISSING_LEASE_RESOURCES, [
  MissingLeaseResourcesError,
  'A required lease resource was not provided.',
]);
_BEGIN_CALLBACK_TO_ERROR.set(areaCallbackPb.BeginControlResponse.Status.STATUS_LEASE_ERROR, [
  LeaseUseError,
  'Request was rejected due to using an invalid lease.',
]);

const _UPDATE_CALLBACK_TO_ERROR = DefaultDict(() => [AreaCallbackResponseError, null]);
_UPDATE_CALLBACK_TO_ERROR.set(areaCallbackPb.UpdateCallbackResponse.Status.STATUS_OK, [null, null]);
_UPDATE_CALLBACK_TO_ERROR.set(areaCallbackPb.UpdateCallbackResponse.Status.STATUS_INVALID_COMMAND_ID, [
  InvalidCommandIdError,
  'Provided command id does not match the current command id.',
]);
_UPDATE_CALLBACK_TO_ERROR.set(areaCallbackPb.UpdateCallbackResponse.Status.STATUS_EXPIRED_END_TIME, [
  ExpiredEndTimeError,
  'The provided end time has already expired.',
]);

const _END_CALLBACK_TO_ERROR = DefaultDict(() => [AreaCallbackResponseError, null]);
_END_CALLBACK_TO_ERROR.set(areaCallbackPb.EndCallbackResponse.Status.STATUS_OK, [null, null]);
_END_CALLBACK_TO_ERROR.set(areaCallbackPb.EndCallbackResponse.Status.STATUS_INVALID_COMMAND_ID, [
  InvalidCommandIdError,
  'Provided command id does not match the current command id.',
]);
_END_CALLBACK_TO_ERROR.set(areaCallbackPb.EndCallbackResponse.Status.STATUS_SHUTDOWN_CALLBACK_FAILED, [
  ShutdownCallbackFailedError,
  'The callback failed to shut down properly.',
]);

const _beginCallbackError = handleCommonHeaderErrors(
  handleCustomParamsErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(areaCallbackPb.BeginCallbackResponse.Status),
        _BEGIN_CALLBACK_TO_ERROR,
      ),
    ),
  ),
);

const _beginControlError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(areaCallbackPb.BeginControlResponse.Status),
        _BEGIN_CONTROL_TO_ERROR,
      ),
    ),
  ),
);

const _updateCallbackError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(areaCallbackPb.UpdateCallbackResponse.Status),
      _UPDATE_CALLBACK_TO_ERROR,
    ),
  ),
);

const _endCallbackError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(areaCallbackPb.EndCallbackResponse.Status),
      _END_CALLBACK_TO_ERROR,
    ),
  ),
);

module.exports = {
  AreaCallbackClient,
};
