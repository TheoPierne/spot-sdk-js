'use strict';

const { BaseClient, error_factory } = require('./common');
const { ResponseError } = require('./exceptions');
const auto_return_pb = require('../bosdyn/api/auto_return/auto_return_pb');
const auto_return_service_grpc_pb = require('../bosdyn/api/auto_return/auto_return_service_grpc_pb');

class AutoReturnResponseError extends ResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'AutoReturnResponseError';
  }
}

class InvalidParameterError extends AutoReturnResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'InvalidParameterError';
  }
}

class AutoReturnClient extends BaseClient {
  static default_service_name = 'auto-return';
  static service_type = 'bosdyn.api.auto_return.AutoReturnService';

  constructor() {
    super(auto_return_service_grpc_pb.AutoReturnServiceClient);
    this._timesync_endpoint = null;
  }

  configure(params, leases, args) {
    const request = this._configure_request(params, leases);
    return this.call(this._stub.configure, request, null, configure_error, args);
  }

  get_configuration(args) {
    const request = new auto_return_pb.GetConfigurationRequest();
    return this.call(this._stub.getConfiguration, request, null, null, args);
  }

  start(args) {
    const request = new auto_return_pb.StartRequest();
    return this.call(this._stub.start, request, null, null, args);
  }

  _configure_request(params, leases) {
    const request = new auto_return_pb.ConfigureRequest().setParams(params);
    for (const lease of leases) {
      request.addLeases(lease.lease_proto);
    }
    return request;
  }
}

const _CONFIGURE_STATUS_TO_ERROR = {
  [auto_return_pb.ConfigureResponse.Status.STATUS_OK]: [null, null],
  [auto_return_pb.ConfigureResponse.Status.STATUS_INVALID_PARAMS]: [
    InvalidParameterError,
    'One or more parameters were invalid.',
  ],
};

function configure_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(auto_return_pb.ConfigureResponse.Status),
    _CONFIGURE_STATUS_TO_ERROR,
  );
}

module.exports = {
  AutoReturnClient,
  AutoReturnResponseError,
  InvalidParameterError,
};
