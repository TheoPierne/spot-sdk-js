'use strict';

const healthPb = require('../../bosdyn/api/spot_cam/health_pb');
const { HealthServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * A client calling Spot CAM Health service.
 * @extends {BaseClient<HealthServiceClient>}
 */
class HealthClient extends BaseClient {
  static defaultServiceName = 'spot-cam-health';
  static serviceType = 'bosdyn.api.spot_cam.HealthService';

  constructor() {
    super(HealthServiceClient);
  }

  /**
   * Clear out the events list of the BITStatus structure.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<void>}
   */
  clearBitEvents(args) {
    const request = new healthPb.ClearBITEventsRequest();
    return this.call(
      this._stub.clearBITEvents,
      request,
      this._clearBitEventsFromResponse,
      _healthErrorFromResponse,
      args,
    );
  }

  /**
   * Retrieve (system events, degradations) as an object of two lists.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<{events: robotStatePb.SystemFault[], degradations: healthPb.GetBITStatusResponse.Degradation[]}>}
   */
  getBitStatus(args) {
    const request = new healthPb.GetBITStatusRequest();
    return this.call(this._stub.getBITStatus, request, this._getBitStatusFromResponse, _healthErrorFromResponse, args);
  }

  /**
   * Retrieve a list of thermometers measuring the temperature (mC) of corresponding on-board devices.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<healthPb.Temperature[]>}
   */
  getTemperature(args) {
    const request = new healthPb.GetTemperatureRequest();
    return this.call(
      this._stub.getTemperature,
      request,
      this._getTemperatureFromResponse,
      _healthErrorFromResponse,
      args,
    );
  }

  /**
   * Retrieve a list of thermometers measuring the temperature (mC) of corresponding on-board devices.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<any[]>}
   */
  getSystemLog(args) {
    const request = new healthPb.GetSystemLogRequest();
    return this.call(this._stub.getSystemLog, request, this._getSystemLogFromResponse, _healthErrorFromResponse, args);
  }

  _clearBitEventsFromResponse() {
    // Pass
  }

  _getBitStatusFromResponse(response) {
    return { events: response.getEventsList(), degradations: response.getDegradationsList() };
  }

  _getTemperatureFromResponse(response) {
    return response.getTempsList();
  }

  _getSystemLogFromResponse(responses) {
    let total = 0;

    const localChunks = [];
    for (const response in responses) {
      const chunk = response.getData();
      total += chunk.getData().length;
      console.debug(`[HEALTH] Retrieved ${chunk.getData().length} bytes (${total}/${chunk.getTotalSize()})`);
      localChunks.push(chunk);
    }
    return localChunks.map(e => e.getData()).join('');
  }
}

const _healthErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  HealthClient,
};
