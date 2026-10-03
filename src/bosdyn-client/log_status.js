/**
 * @file Client for the log-status service.
 *
 * This allows client code to start, extend or terminate experiment logs and start retro logs.
 */

'use strict';

const { BaseClient, handleCommonHeaderErrors, handleUnsetStatusError, errorFactory } = require('./common');

const { ResponseError } = require('./exceptions');
const { DefaultDict } = require('./util');
const { Event } = require('../bosdyn/api/data_buffer_pb');
const {
  GetLogStatusRequest,
  GetLogStatusResponse,
  GetActiveLogStatusesResponse,
  GetActiveLogStatusesRequest,
  StartExperimentLogRequest,
  StartExperimentLogResponse,
  StartRetroLogRequest,
  StartRetroLogResponse,
  StartConcurrentLogRequest,
  StartConcurrentLogResponse,
  UpdateExperimentLogRequest,
  UpdateExperimentLogResponse,
  TerminateLogRequest,
  TerminateLogResponse,
} = require('../bosdyn/api/log_status/log_status_pb');
const { LogStatusServiceClient } = require('../bosdyn/api/log_status/log_status_service_grpc_pb');
const { secondsToDuration } = require('../bosdyn-core/util');

/** Error in Log Status RPC */
class LogStatusResponseError extends ResponseError {}
/** The log status request could not be started, an experiment is already running. */
class ExperimentAlreadyRunningError extends LogStatusResponseError {}
/** The provided request id does not exist or is invalid. */
class RequestIdDoesNotExistError extends LogStatusResponseError {}
/** The log has already terminated and cannot be updated. */
class InactiveLogError extends LogStatusResponseError {}
/** The limit of concurrent retro logs has be reached, a new log cannot be started. */
class ConcurrencyLimitReachedError extends LogStatusResponseError {}
/** No data is available for the provided event, so a log cannot be started. */
class NoDataForEventError extends LogStatusResponseError {}

/**
 * A client for interacting with robot logs.
 * This allows client code to start, extend or terminate experiment logs and start retro logs.
 * @extends {BaseClient<LogStatusServiceClient>}
 */
class LogStatusClient extends BaseClient {
  static defaultServiceName = 'log-status';
  static serviceType = 'bosdyn.api.log_status.LogStatusService';

  constructor() {
    super(LogStatusServiceClient);
  }

  /**
   * Synchronously get status of a log.
   * @param {string} id Id of log to retrieve
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<GetLogStatusResponse>}
   */
  getLogStatus(id, args = {}) {
    const req = new GetLogStatusRequest().setId(id);
    return this.call(this._stub.getLogStatus, req, null, getLogStatusError, false, args);
  }

  /**
   * Synchronously retrieve status of active logs.
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<GetActiveLogStatusesResponse>}
   */
  getActiveLogStatuses(args) {
    const req = new GetActiveLogStatusesRequest();
    return this.call(this._stub.getActiveLogStatuses, req, null, getActiveLogStatusesError, false, args);
  }

  /**
   * Start an experiment log, to run for a specified duration.
   * @param {number} seconds Number of seconds to gather data for the experiment log
   * @param {number} pastTextlogDuration
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<StartExperimentLogResponse>}
   */
  startExperimentLog(seconds, pastTextlogDuration = 0, args = {}) {
    const req = new StartExperimentLogRequest()
      .setKeepAlive(secondsToDuration(seconds))
      .setPastTextlogDuration(secondsToDuration(pastTextlogDuration));
    return this.call(this._stub.startExperimentLog, req, null, startExperimentLogError, false, args);
  }

  /**
   * Start a retro log, to run for a specified duration.
   * @param {number} seconds Number of seconds to gather data for the retro log
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<StartRetroLogResponse>}
   */
  startRetroLog(seconds, args = {}) {
    const req = new StartRetroLogRequest().setPastDuration(secondsToDuration(-seconds));
    return this.call(this._stub.startRetroLog, req, null, startRetroLogError, false, args);
  }

  /**
   * Start an experiment log that allows concurrency, to run based on a particular data_set, as derived from the recipe
   * corresponding to the provided event.
   * An event must be provided!
   * @param {number} seconds
   * @param {Event} event
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<StartConcurrentLogResponse>}
   */
  startConcurrentLog(seconds, event = null, args = {}) {
    const req = new StartConcurrentLogRequest().setKeepAlive(secondsToDuration(seconds));

    if (event) {
      req.setEvent(event);
    }

    return this.call(this._stub.startConcurrentLog, req, null, startConcurrentLogError, false, args);
  }

  /**
   * Update an experiment log to run for a specified duration.
   * @param {string} id Id of log to retrieve
   * @param {number} seconds Number of seconds to gather data for the experiment log
   * @param {Object} [args] Extra arguments to pass to the service.
   * @returns {Promise<UpdateExperimentLogResponse>}
   */
  updateExperiment(id, seconds, args = {}) {
    const req = new UpdateExperimentLogRequest().setId(id).setKeepAlive(secondsToDuration(seconds));
    return this.call(this._stub.updateExperimentLog, req, null, updateExperimentLogError, false, args);
  }

  /**
   * Terminate an experiment log.
   * @param {string} id Id of log to terminate
   * @param {Object} [args] Extra arguments to pass to the service.
   */
  terminateLog(id, args = {}) {
    const req = new TerminateLogRequest().setId(id);
    return this.call(this._stub.terminateLog, req, null, terminateLogError, false, args);
  }
}

const _GET_LOG_STATUS_TO_ERROR = DefaultDict(() => [LogStatusResponseError, null]);
_GET_LOG_STATUS_TO_ERROR.set(GetLogStatusResponse.Status.STATUS_OK, [null, null]);
_GET_LOG_STATUS_TO_ERROR.set(GetLogStatusResponse.Status.STATUS_ID_NOT_FOUND, [
  RequestIdDoesNotExistError,
  'The provided request id does not exist or is invalid.',
]);

const _GET_ACTIVE_LOG_STATUSES_STATUS_TO_ERROR = DefaultDict(() => [LogStatusResponseError, null]);
_GET_ACTIVE_LOG_STATUSES_STATUS_TO_ERROR.set(GetActiveLogStatusesResponse.Status.STATUS_OK, [null, null]);

const _START_EXPERIMENT_LOG_STATUS_TO_ERROR = DefaultDict(() => [LogStatusResponseError, null]);
_START_EXPERIMENT_LOG_STATUS_TO_ERROR.set(StartExperimentLogResponse.Status.STATUS_OK, [null, null]);
_START_EXPERIMENT_LOG_STATUS_TO_ERROR.set(StartExperimentLogResponse.Status.STATUS_EXPERIMENT_LOG_RUNNING, [
  ExperimentAlreadyRunningError,
  'The log status request could not be started, an experiment is already running.',
]);

const _START_RETRO_LOG_STATUS_TO_ERROR = DefaultDict(() => [LogStatusResponseError, null]);
_START_RETRO_LOG_STATUS_TO_ERROR.set(StartRetroLogResponse.Status.STATUS_OK, [null, null]);
_START_RETRO_LOG_STATUS_TO_ERROR.set(StartRetroLogResponse.Status.STATUS_EXPERIMENT_LOG_RUNNING, [
  ExperimentAlreadyRunningError,
  'The log status request could not be started, an experiment is already running.',
]);
_START_RETRO_LOG_STATUS_TO_ERROR.set(StartRetroLogResponse.Status.STATUS_CONCURRENCY_LIMIT_REACHED, [
  ConcurrencyLimitReachedError,
  'The limit of concurrent retro logs has be reached, a new log cannot be started.',
]);

const _START_CONCURRENT_LOG_STATUS_TO_ERROR = DefaultDict(() => [LogStatusResponseError, null]);
_START_CONCURRENT_LOG_STATUS_TO_ERROR.set(StartConcurrentLogResponse.Status.STATUS_OK, [null, null]);
_START_CONCURRENT_LOG_STATUS_TO_ERROR.set(StartConcurrentLogResponse.Status.STATUS_EXPERIMENT_LOG_RUNNING, [
  ExperimentAlreadyRunningError,
  'The log status request could not be started, an experiment is already running.',
]);
_START_CONCURRENT_LOG_STATUS_TO_ERROR.set(StartConcurrentLogResponse.Status.STATUS_CONCURRENCY_LIMIT_REACHED, [
  ConcurrencyLimitReachedError,
  'The limit of concurrent retro logs has be reached, a new log cannot be started.',
]);
_START_CONCURRENT_LOG_STATUS_TO_ERROR.set(StartConcurrentLogResponse.Status.STATUS_NO_DATA_FOR_EVENT, [
  NoDataForEventError,
  'No data is available for the provided event, so a log cannot be started.',
]);

const _UPDATE_EXPERIMENT_LOG_STATUS_TO_ERROR = DefaultDict(() => [LogStatusResponseError, null]);
_UPDATE_EXPERIMENT_LOG_STATUS_TO_ERROR.set(UpdateExperimentLogResponse.Status.STATUS_OK, [null, null]);
_UPDATE_EXPERIMENT_LOG_STATUS_TO_ERROR.set(UpdateExperimentLogResponse.Status.STATUS_ID_NOT_FOUND, [
  RequestIdDoesNotExistError,
  'The provided request id does not exist or is invalid.',
]);
_UPDATE_EXPERIMENT_LOG_STATUS_TO_ERROR.set(UpdateExperimentLogResponse.Status.STATUS_LOG_TERMINATED, [
  InactiveLogError,
  'The log has already terminated and cannot be updated.',
]);

const _TERMINATE_LOG_STATUS_TO_ERROR = DefaultDict(() => [LogStatusResponseError, null]);
_TERMINATE_LOG_STATUS_TO_ERROR.set(TerminateLogResponse.Status.STATUS_OK, [null, null]);
_TERMINATE_LOG_STATUS_TO_ERROR.set(TerminateLogResponse.Status.STATUS_ID_NOT_FOUND, [
  RequestIdDoesNotExistError,
  'The provided request id does not exist or is invalid.',
]);

const getLogStatusError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), GetLogStatusResponse.Status, _GET_LOG_STATUS_TO_ERROR),
  ),
);

const getActiveLogStatusesError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      GetActiveLogStatusesResponse.Status,
      _GET_ACTIVE_LOG_STATUSES_STATUS_TO_ERROR,
    ),
  ),
);

const startExperimentLogError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      StartExperimentLogResponse.Status,
      _START_EXPERIMENT_LOG_STATUS_TO_ERROR,
    ),
  ),
);

const startRetroLogError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), StartRetroLogResponse.Status, _START_RETRO_LOG_STATUS_TO_ERROR),
  ),
);

const startConcurrentLogError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      StartConcurrentLogResponse.Status,
      _START_CONCURRENT_LOG_STATUS_TO_ERROR,
    ),
  ),
);

const updateExperimentLogError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      UpdateExperimentLogResponse.Status,
      _UPDATE_EXPERIMENT_LOG_STATUS_TO_ERROR,
    ),
  ),
);

const terminateLogError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), TerminateLogResponse.Status, _TERMINATE_LOG_STATUS_TO_ERROR),
  ),
);

module.exports = {
  LogStatusClient,
  LogStatusResponseError,
  ExperimentAlreadyRunningError,
  RequestIdDoesNotExistError,
  InactiveLogError,
  ConcurrencyLimitReachedError,
  NoDataForEventError,
};
