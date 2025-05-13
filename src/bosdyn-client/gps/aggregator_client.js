'use strict';

const aggregatorPb = require('../../bosdyn/api/gps/aggregator_pb');
const { AggregatorServiceClient } = require('../../bosdyn/api/gps/aggregator_service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * Client for the Gps Aggregator service.
 * @extends {BaseClient<AggregatorServiceClient>}
 */
class AggregatorClient extends BaseClient {
  static defaultServiceName = 'gps-aggregator';
  static serviceType = 'bosdyn.api.gps.AggregatorService';

  constructor() {
    super(AggregatorServiceClient);
  }

  /**
   * Tell the robot about new GPS data that was collected.
   * @param {gpsPb.GpsDataPoint[]} dataPoints All the data you want to send.
   * @param {gpsPb.GpsDevice} gpsDevice The identifier of this device.
   * @param {Object} [args] Options for GRPC request
   * @returns {Promise<aggregatorPb.NewGpsDataResponse>}
   */
  newGpsData(dataPoints, gpsDevice, args) {
    const req = new aggregatorPb.NewGpsDataRequest().setGpsDevice(gpsDevice).setDataPointsList(dataPoints);
    return this.call(this._stub.newGpsData, req, null, _newGpsDataError, args);
  }
}

const _newGpsDataError = handleCommonHeaderErrors(() => null);

module.exports = {
  AggregatorClient,
};
