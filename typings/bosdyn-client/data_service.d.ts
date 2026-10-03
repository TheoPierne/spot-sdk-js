export type RpcError = import("./exceptions").RpcError;
export type Robot = import("./robot").Robot;
export type TimeRange = import("../../src/bosdyn/api/time_range_pb").TimeRange;
/**
 * @typedef {import('./robot').Robot} Robot
 * @typedef {import('../../src/bosdyn/api/time_range_pb').TimeRange} TimeRange
 */
/**
 * Client for adding to robot data buffer.
 * @extends {BaseClient<DataServiceClientStub>}
 */
export class DataServiceClient extends BaseClient<DataServiceClientStub> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    logTickSchemas: {};
    _timesyncEndpoint: import("./time_sync").TimeSyncEndpoint | null;
    /**
     * Update instance from another object.
     * @param {Robot} other The object where to copy from.
     * @returns {Promise<void>}
     */
    updateFrom(other: Robot): Promise<void>;
    /**
     * Query for data index
     * @param {dataIndexProtos.DataQuery} query The data to query.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataIndexProtos.GetDataIndexResponse>}
     * @throws {RpcError} Problem communicating with the robot.
     */
    getDataIndex(query: dataIndexProtos.DataQuery, args?: Object): Promise<dataIndexProtos.GetDataIndexResponse>;
    /**
     * Internal get_data_index RPC stub call.
     * @param {TimeRange} timeRange The time range to send.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataIndexProtos.GetDataPagesResponse>}
     * @throws {RpcError} Problem communicating with the robot.
     */
    getDataPages(timeRange: TimeRange, args?: Object): Promise<dataIndexProtos.GetDataPagesResponse>;
    /**
     * @param {?TimeRange} timeRange The time range to send.
     * @param {!Array<string>} pageIds List of page's ids.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataIndexProtos.DeleteDataPagesResponse>}
     */
    deleteDataPages(timeRange: TimeRange | null, pageIds: Array<string>, args?: Object): Promise<dataIndexProtos.DeleteDataPagesResponse>;
    /**
     * Query for operator comments and events
     * @param {?dataIndexProtos.EventsCommentsSpec} query The events comments to send.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataIndexProtos.GetEventsCommentsResponse>}
     * @throws {RpcError} Problem communicating with the robot.
     */
    getEventsComments(query: dataIndexProtos.EventsCommentsSpec | null, args?: Object): Promise<dataIndexProtos.GetEventsCommentsResponse>;
    /**
     * Query for operator comments and events.
     * @param {boolean} [getBlobSpecs=false] whether to list message series.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataIndexProtos.GetDataBufferStatusResponse>}
     * @throws {RpcError} Problem communicating with the robot.
     */
    getDataBufferStatus(getBlobSpecs?: boolean, args?: Object): Promise<dataIndexProtos.GetDataBufferStatusResponse>;
}
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 */
/** A given argument could not be used. */
export class InvalidArgument extends BosdynError {
}
import { DataServiceClient as DataServiceClientStub } from "../../src/bosdyn/api/data_service_grpc_pb";
import { BaseClient } from "./common";
import dataIndexProtos = require("../../src/bosdyn/api/data_index_pb");
import { BosdynError } from "./exceptions";
