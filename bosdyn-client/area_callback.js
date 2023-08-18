'use strict';

const { BaseClient, error_factory, common_header_errors } = require('./common');
const { LeaseUseError, ResponseError } = require('./exceptions');

const area_callback_pb = require('../bosdyn/api/graph_nav/area_callback_pb');
const area_callback_service_pb_grpc = require('../bosdyn/api/graph_nav/area_callback_service_grpc_pb');

class AreaCallbackClient extends BaseClient {
  static service_type = 'bosdyn.api.graph_nav.AreaCallbackService';
  static default_service_name = null;

  constructor() {
    super(area_callback_service_pb_grpc.AreaCallbackServiceClient);
  }

  area_callback_information(request = null, args) {
    request = request || new area_callback_pb.AreaCallbackInformationRequest();
    return this.call(this._stub.areaCallbackInformation, request, null, common_header_errors, args);
  }

  begin_callback(request, args) {
    return this.call(this._stub.beginCallback, request, null, _begin_callback_error, args);
  }

  begin_controll(request, args) {
    return this.call(this._stub.beginControll, request, null, _begin_control_error, args);
  }

  update_callback(request, args) {
    return this.call(this._stub.updateCallback, request, null, _update_callback_error, args);
  }

  end_callback(request, args) {
    return this.call(this._stub.endCallback, request, null, _end_callback_error, args);
  }
}

class AreaCallbackResponseError extends ResponseError {
  constructor(request, message) {
    super(request, message);
    this.name = 'AreaCallbackResponseError';
  }
}

class InvalidCommandIdError extends AreaCallbackResponseError {
  constructor(request, message) {
    super(request, message);
    this.name = 'InvalidCommandIdError';
  }
}

class InvalidConfigError extends AreaCallbackResponseError {
  constructor(request, message) {
    super(request, message);
    this.name = 'InvalidConfigError';
  }
}

class ExpiredEndTimeError extends AreaCallbackResponseError {
  constructor(request, message) {
    super(request, message);
    this.name = 'ExpiredEndTimeError';
  }
}

class MissingLeaseResourcesError extends AreaCallbackResponseError {
  constructor(request, message) {
    super(request, message);
    this.name = 'MissingLeaseResourcesError';
  }
}

class ShutdownCallbackFailedError extends AreaCallbackResponseError {
  constructor(request, message) {
    super(request, message);
    this.name = 'ShutdownCallbackFailedError';
  }
}

const _BEGIN_CALLBACK_TO_ERROR = {
  [area_callback_pb.BeginCallbackResponse.Status.STATUS_OK]: [null, null],
  [area_callback_pb.BeginCallbackResponse.Status.STATUS_INVALID_CONFIGURATION]: [
    InvalidConfigError,
    'The provided configuration does not provide the necessary data.',
  ],
  [area_callback_pb.BeginCallbackResponse.Status.STATUS_EXPIRED_END_TIME]: [
    ExpiredEndTimeError,
    'The provided end time has already expired.',
  ],
};

const _BEGIN_CONTROL_TO_ERROR = {
  [area_callback_pb.BeginControlResponse.Status.STATUS_OK]: [null, null],
  [area_callback_pb.BeginControlResponse.Status.STATUS_INVALID_COMMAND_ID]: [
    InvalidCommandIdError,
    'Provided command id does not match the current command id.',
  ],
  [area_callback_pb.BeginControlResponse.Status.STATUS_MISSING_LEASE_RESOURCES]: [
    MissingLeaseResourcesError,
    'A required lease resource was not provided.',
  ],
  [area_callback_pb.BeginControlResponse.Status.STATUS_LEASE_ERROR]: [
    LeaseUseError,
    'Request was rejected due to using an invalid lease.',
  ],
};

const _UPDATE_CALLBACK_TO_ERROR = {
  [area_callback_pb.UpdateCallbackResponse.Status.STATUS_OK]: [null, null],
  [area_callback_pb.UpdateCallbackResponse.Status.STATUS_INVALID_COMMAND_ID]: [
    InvalidCommandIdError,
    'Provided command id does not match the current command id.',
  ],
  [area_callback_pb.UpdateCallbackResponse.Status.STATUS_EXPIRED_END_TIME]: [
    ExpiredEndTimeError,
    'The provided end time has already expired.',
  ],
};

const _END_CALLBACK_TO_ERROR = {
  [area_callback_pb.EndCallbackResponse.Status.STATUS_OK]: [null, null],
  [area_callback_pb.EndCallbackResponse.Status.STATUS_INVALID_COMMAND_ID]: [
    InvalidCommandIdError,
    'Provided command id does not match the current command id.',
  ],
  [area_callback_pb.EndCallbackResponse.Status.STATUS_SHUTDOWN_CALLBACK_FAILED]: [
    ShutdownCallbackFailedError,
    'The callback failed to shut down properly.',
  ],
};

function _begin_callback_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(area_callback_pb.BeginCallbackResponse.Status),
    _BEGIN_CALLBACK_TO_ERROR,
  );
}

function _begin_control_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(area_callback_pb.BeginControlResponse.Status),
    _BEGIN_CONTROL_TO_ERROR,
  );
}

function _update_callback_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(area_callback_pb.UpdateCallbackResponse.Status),
    _UPDATE_CALLBACK_TO_ERROR,
  );
}

function _end_callback_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(area_callback_pb.EndCallbackResponse.Status),
    _END_CALLBACK_TO_ERROR,
  );
}

module.exports = {
  AreaCallbackClient,
};
