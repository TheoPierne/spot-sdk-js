export type GpsDataPoint = import("../../../src/bosdyn/api/gps/gps_pb").GpsDataPoint;
export type GpsDevice = import("../../../src/bosdyn/api/gps/gps_pb").GpsDevice;
/**
 * @typedef {import('../../../src/bosdyn/api/gps/gps_pb').GpsDataPoint} GpsDataPoint
 * @typedef {import('../../../src/bosdyn/api/gps/gps_pb').GpsDevice} GpsDevice
 */
/**
 * Client for the Gps Aggregator service.
 * @extends {BaseClient<AggregatorServiceClient>}
 */
export class AggregatorClient extends BaseClient<AggregatorServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Tell the robot about new GPS data that was collected.
     * @param {GpsDataPoint[]} dataPoints All the data you want to send.
     * @param {GpsDevice} gpsDevice The identifier of this device.
     * @param {Object} [args] Options for GRPC request
     * @returns {Promise<NewGpsDataResponse>}
     */
    newGpsData(dataPoints: GpsDataPoint[], gpsDevice: GpsDevice, args?: Object): Promise<NewGpsDataResponse>;
}
import { AggregatorServiceClient } from "../../../src/bosdyn/api/gps/aggregator_service_grpc_pb";
import { BaseClient } from "../common";
import { NewGpsDataResponse } from "../../../src/bosdyn/api/gps/aggregator_pb";
