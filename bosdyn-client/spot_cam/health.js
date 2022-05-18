'use strict';

const health_pb = require('../../bosdyn/api/spot_cam/health_pb');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient } = require('../common');

class HealthClient extends BaseClient {
  static default_service_name = 'spot-cam-health';
  static service_type = 'bosdyn.api.spot_cam.HealthService';

  constructor() {
    super(service_grpc_pb.HealthServiceClient);
  }

  clear_bit_events(args) {
    const request = new health_pb.ClearBITEventsRequest();
    return this.call(
      this._stub.clearBITEvents,
      request,
      this._clear_bit_events_from_response,
      this._health_error_from_response,
      args,
    );
  }

  clear_bit_events_async(args) {
    const request = new health_pb.ClearBITEventsRequest();
    return this.call_async(
      this._stub.clearBITEvents,
      request,
      this._clear_bit_events_from_response,
      this._health_error_from_response,
      args,
    );
  }

  get_bit_status(args) {
    const request = new health_pb.GetBITStatusRequest();
    return this.call(
      this._stub.getBITStatus,
      request,
      this._get_bit_status_from_response,
      this._health_error_from_response,
      args,
    );
  }

  get_bit_status_async(args) {
    const request = new health_pb.GetBITStatusRequest();
    return this.call_async(
      this._stub.getBITStatus,
      request,
      this._get_bit_status_from_response,
      this._health_error_from_response,
      args,
    );
  }

  get_temperature(args) {
    const request = new health_pb.GetTemperatureRequest();
    return this.call(
      this._stub.getTemperature,
      request,
      this._get_temperature_from_response,
      this._health_error_from_response,
      args,
    );
  }

  get_temperature_async(args) {
    const request = new health_pb.GetTemperatureRequest();
    return this.call_async(
      this._stub.getTemperature,
      request,
      this._get_temperature_from_response,
      this._health_error_from_response,
      args,
    );
  }

  get_system_log(args) {
    const request = new health_pb.GetSystemLogRequest();
    return this.call(
      this._stub.getSystemLog,
      request,
      this._get_system_log_from_response,
      this._health_error_from_response,
      args,
    );
  }

  get_system_log_async(args) {
    const request = new health_pb.GetSystemLogRequest();
    return this.call_async(
      this._stub.getSystemLog,
      request,
      this._get_system_log_from_response,
      this._health_error_from_response,
      args,
    );
  }

  /* eslint-disable no-unused-vars */
  _clear_bit_events_from_response(response) {
    // Pass
  }

  _get_bit_status_from_response(response) {
    return [response.getEventsList(), response.getDegradationsList()];
  }

  _get_temperature_from_response(response) {
    return response.getTempsList();
  }

  _health_error_from_response(response) {
    return null;
  }
  /* eslint-enable no-unused-vars */

  _get_system_log_from_response(responses) {
    let total = 0;

    const local_chunks = [];
    for (const response in responses) {
      const chunk = response.getData();
      total += chunk.getData().length;
      console.debug(`[HEALTH] Retrieved ${chunk.getData().length} bytes (${total}/${chunk.getTotalSize()})`);
      local_chunks.push(chunk);
    }
    return local_chunks.map(e => e.getData()).join('');
  }
}

module.exports = {
  HealthClient,
};
