/**
 * A client for interacting with robot logs.
 * This allows client code to start, extend or terminate experiment logs and start retro logs.
 * @extends {BaseClient<LogStatusServiceClient>}
 */
export class LogStatusClient extends BaseClient<LogStatusServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Synchronously get status of a log.
     * @param {string} id Id of log to retrieve
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<GetLogStatusResponse>}
     */
    getLogStatus(id: string, args?: Object): Promise<GetLogStatusResponse>;
    /**
     * Synchronously retrieve status of active logs.
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<GetActiveLogStatusesResponse>}
     */
    getActiveLogStatuses(args?: Object): Promise<GetActiveLogStatusesResponse>;
    /**
     * Start an experiment log, to run for a specified duration.
     * @param {number} seconds Number of seconds to gather data for the experiment log
     * @param {number} pastTextlogDuration
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<StartExperimentLogResponse>}
     */
    startExperimentLog(seconds: number, pastTextlogDuration?: number, args?: Object): Promise<StartExperimentLogResponse>;
    /**
     * Start a retro log, to run for a specified duration.
     * @param {number} seconds Number of seconds to gather data for the retro log
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<StartRetroLogResponse>}
     */
    startRetroLog(seconds: number, args?: Object): Promise<StartRetroLogResponse>;
    /**
     * Start an experiment log that allows concurrency, to run based on a particular data_set, as derived from the recipe
     * corresponding to the provided event.
     * An event must be provided!
     * @param {number} seconds
     * @param {Event} event
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<StartConcurrentLogResponse>}
     */
    startConcurrentLog(seconds: number, event?: Event, args?: Object): Promise<StartConcurrentLogResponse>;
    /**
     * Update an experiment log to run for a specified duration.
     * @param {string} id Id of log to retrieve
     * @param {number} seconds Number of seconds to gather data for the experiment log
     * @param {Object} [args] Extra arguments to pass to the service.
     * @returns {Promise<UpdateExperimentLogResponse>}
     */
    updateExperiment(id: string, seconds: number, args?: Object): Promise<UpdateExperimentLogResponse>;
    /**
     * Terminate an experiment log.
     * @param {string} id Id of log to terminate
     * @param {Object} [args] Extra arguments to pass to the service.
     */
    terminateLog(id: string, args?: Object): Promise<any>;
}
/** Error in Log Status RPC */
export class LogStatusResponseError extends ResponseError {
}
/** The log status request could not be started, an experiment is already running. */
export class ExperimentAlreadyRunningError extends LogStatusResponseError {
}
/** The provided request id does not exist or is invalid. */
export class RequestIdDoesNotExistError extends LogStatusResponseError {
}
/** The log has already terminated and cannot be updated. */
export class InactiveLogError extends LogStatusResponseError {
}
/** The limit of concurrent retro logs has be reached, a new log cannot be started. */
export class ConcurrencyLimitReachedError extends LogStatusResponseError {
}
/** No data is available for the provided event, so a log cannot be started. */
export class NoDataForEventError extends LogStatusResponseError {
}
import { LogStatusServiceClient } from "../../src/bosdyn/api/log_status/log_status_service_grpc_pb";
import { BaseClient } from "./common";
import { GetLogStatusResponse } from "../../src/bosdyn/api/log_status/log_status_pb";
import { GetActiveLogStatusesResponse } from "../../src/bosdyn/api/log_status/log_status_pb";
import { StartExperimentLogResponse } from "../../src/bosdyn/api/log_status/log_status_pb";
import { StartRetroLogResponse } from "../../src/bosdyn/api/log_status/log_status_pb";
import { Event } from "../../src/bosdyn/api/data_buffer_pb";
import { StartConcurrentLogResponse } from "../../src/bosdyn/api/log_status/log_status_pb";
import { UpdateExperimentLogResponse } from "../../src/bosdyn/api/log_status/log_status_pb";
import { ResponseError } from "./exceptions";
