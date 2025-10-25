'use strict';

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ResponseError } = require('./exceptions');
const { DefaultDict } = require('./util');

const autoReturnPb = require('../bosdyn/api/auto_return/auto_return_pb');
const { AutoReturnServiceClient } = require('../bosdyn/api/auto_return/auto_return_service_grpc_pb');

class AutoReturnResponseError extends ResponseError {}
class InvalidParameterError extends AutoReturnResponseError {}

/**
 * A client for configuring automatic AutoReturn behavior.
 * @extends {BaseClient<AutoReturnServiceClient>}
 */
class AutoReturnClient extends BaseClient {
  static defaultServiceName = 'auto-return';
  static serviceType = 'bosdyn.api.auto_return.AutoReturnService';

  constructor() {
    super(AutoReturnServiceClient);
    this._timesyncEndpoint = null;
  }

  /**
   * Set the configuration of the AutoReturn system.
   * @param {autoReturnPb.Params} params Parameters to use.
   * @param {Lease[]} leases An array of leases.
   * @param {boolean} clearBuffer Set True to forget any currently buffered locations.
   * @param {Object} args Arguments that can be passed to the RPC request.
   * @returns {Promise<autoReturnPb.ConfigureResponse>}
   * @throws {InvalidParameterError} An invalid request was received by the service.
   * @throws {RpcError} Problem communicating with the service.
   */
  configure(params, leases, clearBuffer = false, args) {
    const request = this._configureRequest(params, leases, clearBuffer);
    return this.call(this._stub.configure, request, null, configureError, false, args);
  }

  /**
   * Get the configuration of the AutoReturn system.
   * @param {Object} args Arguments that can be passed to the RPC request.
   * @returns {Promise<autoReturnPb.GetConfigurationResponse>}
   * @throws {RpcError} Problem communicating with the service.
   */
  getConfiguration(args) {
    const request = new autoReturnPb.GetConfigurationRequest();
    return this.call(this._stub.getConfiguration, request, null, null, false, args);
  }

  /**
   * Start AutoReturn now.
   * @param {autoReturnPb.Params} [params=null] Parameters to use.
   * @param {Lease[]} [leases=[]] Leases to be included in the request.
   * @param {Object} args Arguments that can be passed to the RPC request.
   * @returns {Promise<autoReturnPb.StartResponse>}
   * @throws {InvalidParameterError} An invalid request was received by the service.
   * @throws {RpcError} Problem communicating with the service.
   */
  start(params = null, leases = [], args) {
    const request = this._startRequest(params, leases);
    return this.call(this._stub.start, request, null, startError, false, args);
  }

  /**
   * Configure request generator
   * @param {autoReturnPb.Params} params Parameters to use.
   * @param {Lease[]} leases Leases to be included in the request.
   * @param {boolean} clearBuffer Set True to forget any currently buffered locations.
   * @returns {autoReturnPb.ConfigureRequest}
   * @private
   */
  _configureRequest(params, leases, clearBuffer) {
    const request = new autoReturnPb.ConfigureRequest().setParams(params).setClearBuffer(clearBuffer);
    for (const lease of leases) {
      request.addLeases(lease.leaseProto);
    }
    return request;
  }

  /**
   * Start request generator
   * @param {autoReturnPb.Params} params Parameters to use.
   * @param {Lease[]} leases Leases to be included in the request.
   * @returns {autoReturnPb.StartRequest}
   * @private
   */
  _startRequest(params, leases) {
    const request = new autoReturnPb.StartRequest().setParams(params);
    for (const lease of leases) {
      request.addLeases(lease.leaseProto);
    }
    return request;
  }
}

const _CONFIGURE_STATUS_TO_ERROR = DefaultDict(() => [null, null]);
_CONFIGURE_STATUS_TO_ERROR.set(autoReturnPb.ConfigureResponse.Status.STATUS_INVALID_PARAMS, [
  InvalidParameterError,
  'One or more parameters were invalid.',
]);

const configureError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(autoReturnPb.ConfigureResponse.Status),
      _CONFIGURE_STATUS_TO_ERROR,
    ),
  ),
);

const _START_STATUS_TO_ERROR = DefaultDict(() => [null, null]);
_START_STATUS_TO_ERROR.set(autoReturnPb.StartResponse.Status.STATUS_INVALID_PARAMS, [
  InvalidParameterError,
  'One or more parameters were invalid.',
]);

const startError = handleCommonHeaderErrors(response =>
  errorFactory(response, response.getStatus(), Object.keys(autoReturnPb.StartResponse.Status), _START_STATUS_TO_ERROR),
);

module.exports = {
  AutoReturnClient,
  AutoReturnResponseError,
  InvalidParameterError,
};
