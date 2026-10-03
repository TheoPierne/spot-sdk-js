export type SignedProto = import("../../src/bosdyn/api/metrics_logging/signed_proto_pb").SignedProto;
/**
 * A client for the metrics logging service on the robot.
 * @extends {BaseClient<MetricsLoggingRobotServiceClient>}
 */
export class MetricsLoggingClient extends BaseClient<MetricsLoggingRobotServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Get metrics from the robot.
     * @param {string[]|null} keys A list of strings representing the keys for metrics that should be returned.
     * @param {boolean} includeEvents Whether events should be included in the response.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<metricsLoggingRobotPb.GetMetricsResponse>}
     */
    getMetrics(keys?: string[] | null, includeEvents?: boolean, args?: Object): Promise<metricsLoggingRobotPb.GetMetricsResponse>;
    /**
     * Determine the range of sequence numbers currently being used by the metrics system's store.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<number[]>}
     */
    getStoreSequenceRange(args?: Object): Promise<number[]>;
    /**
     * Get absolute metric snapshots for specific sequence numbers' entries.
     * @param {number[]} sequenceNumbers The list of sequence numbers whose entries should be returned as
     * absolute metric snapshots.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<SignedProto[]>}
     */
    getAbsoluteMetricSnapshot(sequenceNumbers: number[], args?: Object): Promise<SignedProto[]>;
    _storeSequenceRangeFromResponse(response: any): any[];
    _getAbsoluteMetricSnapshotFromResponse(response: any): any;
}
/**
 * @typedef {import('../../src/bosdyn/api/metrics_logging/signed_proto_pb').SignedProto} SignedProto
 */
/** Metrics requested from the metrics service did not exist. */
export class MissingKeysError extends ResponseError {
}
/** Unable to opt-out of metrics logging due to invalid license permissions. */
export class UnableToOptOutError extends ResponseError {
}
import { MetricsLoggingRobotServiceClient } from "../../src/bosdyn/api/metrics_logging/metrics_logging_robot_service_grpc_pb";
import { BaseClient } from "./common";
import metricsLoggingRobotPb = require("../../src/bosdyn/api/metrics_logging/metrics_logging_robot_pb");
import { ResponseError } from "./exceptions";
