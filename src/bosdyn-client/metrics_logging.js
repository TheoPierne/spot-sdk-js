'use strict';

const { BaseClient, commonHeaderErrors, handleCommonHeaderErrors } = require('./common');

const metricsLoggingRobotPb = require('../bosdyn/api/metrics_logging/metrics_logging_robot_pb');
const {
  MetricsLoggingRobotServiceClient,
} = require('../bosdyn/api/metrics_logging/metrics_logging_robot_service_grpc_pb');

/**
 * A client for the metrics logging service on the robot.
 * @extends {BaseClient<MetricsLoggingRobotServiceClient>}
 */
class MetricsLoggingClient extends BaseClient {
  static defaultServiceName = 'metrics-logging';
  static serviceType = 'bosdyn.api.metrics_logging.MetricsLoggingRobotService';

  constructor() {
    super(MetricsLoggingRobotServiceClient);
  }

  /**
   * Get metrics from the robot.
   * @param {string[]|null} keys A list of strings representing the keys for metrics that should be returned.
   * @param {boolean} includeEvents Whether events should be included in the response.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<metricsLoggingRobotPb.GetMetricsResponse>}
   */
  getMetrics(keys = null, includeEvents = false, args) {
    const req = new metricsLoggingRobotPb.GetMetricsRequest().setKeysList(keys).setIncludeEvents(includeEvents);
    return this.call(this._stub.getMetrics, req, null, _getMetricsErrorFromResponse, args);
  }

  /**
   * Determine the range of sequence numbers currently being used by the metrics system's store.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<number[]>}
   */
  getStoreSequenceRange(args) {
    const req = new metricsLoggingRobotPb.GetStoreSequenceRangeRequest();
    return this.call(
      this._stub.getStoreSequenceRange,
      req,
      this._storeSequenceRangeFromResponse,
      commonHeaderErrors,
      args,
    );
  }

  /**
   * Get absolute metric snapshots for specific sequence numbers' entries.
   * @param {number[]} sequenceNumbers The list of sequence numbers whose entries should be returned as
   * absolute metric snapshots.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<signedProtoPb.SignedProto[]>}
   */
  getAbsoluteMetricSnapshot(sequenceNumbers, args) {
    const req = new metricsLoggingRobotPb.GetAbsoluteMetricSnapshotRequest().setSequenceNumbersList(sequenceNumbers);
    return this.call(
      this._stub.getAbsoluteMetricSnapshot,
      req,
      this._getAbsoluteMetricSnapshotFromResponse,
      commonHeaderErrors,
      args,
    );
  }

  _storeSequenceRangeFromResponse(response) {
    return [response.getFirstSequenceNumber(), response.getLastSequenceNumber()];
  }

  _getAbsoluteMetricSnapshotFromResponse(response) {
    return response.getSnapshotsList();
  }
}

const _getMetricsErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  MetricsLoggingClient,
};
