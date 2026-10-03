/**
 * @file For clients to use the Gps Aggregator service.
 */

'use strict';

const { NewGpsDataRequest, NewGpsDataResponse } = require('../../bosdyn/api/gps/aggregator_pb');
const { AggregatorServiceClient } = require('../../bosdyn/api/gps/aggregator_service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * @typedef {import('../../bosdyn/api/gps/gps_pb').GpsDataPoint} GpsDataPoint
 * @typedef {import('../../bosdyn/api/gps/gps_pb').GpsDevice} GpsDevice
 */

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
   * @param {GpsDataPoint[]} dataPoints All the data you want to send.
   * @param {GpsDevice} gpsDevice The identifier of this device.
   * @param {Object} [args] Options for GRPC request
   * @returns {Promise<NewGpsDataResponse>}
   */
  newGpsData(dataPoints, gpsDevice, args) {
    const req = new NewGpsDataRequest().setGpsDevice(gpsDevice).setDataPointsList(dataPoints);
    return this.call(this._stub.newGpsData, req, null, _newGpsDataError, false, args);
  }
}

const _newGpsDataError = handleCommonHeaderErrors(() => null);

module.exports = {
  AggregatorClient,
};
