/**
 * @file A client for the time-sync service.
 *
 * The time-sync service helps track the difference between the robot's system clock and the system clock of clients,
 * and sends an estimate of this difference to the client. The client uses this information when it needs to send a
 * timestamp to the robot in a request proto. Timestamps in request protos generally need to be specified relative to
 * the robot's system clock.
 */

'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const time = require('google-protobuf/google/protobuf/timestamp_pb');

const { BaseClient, commonHeaderErrors } = require('./common');
const { BosdynError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { _TimeConverter, NoTimeSyncError } = require('./robot_command');

const timeRangePb = require('../bosdyn/api/time_range_pb');
const timeSyncPb = require('../bosdyn/api/time_sync_pb');
const { TimeSyncServiceClient } = require('../bosdyn/api/time_sync_service_grpc_pb');
const { Event } = require('../bosdyn-core/event');
const {
  RobotTimeConverter,
  nowNsec,
  parseTimespan,
  nsecToTimestamp,
  setTimestampFromNsec,
  timestampToNsec,
} = require('../bosdyn-core/util');

/**
 * @typedef {import('./robot_command').RobotCommandClient} RobotCommandClient
 */

/** General class of errors for TimeSync non-response / non-grpc errors. */
class TimeSyncError extends BosdynError {}

/** Client has not established time-sync with the robot. */
class NotEstablishedError extends TimeSyncError {}
/** Exceeded deadline to achieve time-sync. */
class TimedOutError extends TimeSyncError {}
/** Time-sync thread is no longer running. */
class InactiveThreadError extends TimeSyncError {}

/**
 * A client for establishing time-sync with a server/robot.
 * @extends {BaseClient<TimeSyncServiceClient>}
 */
class TimeSyncClient extends BaseClient {
  static defaultServiceName = 'time-sync';
  static serviceType = 'bosdyn.api.TimeSyncService';

  constructor() {
    super(TimeSyncServiceClient);
  }

  /**
   * Obtain an initial or updated timesync estimate with server.
   * @param {timeSyncPb.TimeSyncRoundTrip} previousRoundTrip Null on first rpc call, then
   * fill out with previous response from server.
   * @param {string} clockIdentifier Empty on first call, assigned by server in first response.
   * @param {Object} [args] The GRPC options to send over the GRPC request
   * @returns {Promise<timeSyncPb.TimeSyncUpdateResponse>}
   */
  getTimeSyncUpdate(previousRoundTrip, clockIdentifier, args) {
    const req = this._getTimeSyncUpdateRequest(previousRoundTrip, clockIdentifier);
    return this.call(this._stub.timeSyncUpdate, req, null, commonHeaderErrors, false, args);
  }

  /**
   * Get time sync update request generator
   * @param {timeSyncPb.TimeSyncRoundTrip} previousRoundTrip Null on first rpc call, then
   * fill out with previous response from server.
   * @param {string} clockIdentifier Empty on first call, assigned by server in first response.
   * @returns {timeSyncPb.TimeSyncUpdateRequest}
   * @private
   */
  _getTimeSyncUpdateRequest(previousRoundTrip, clockIdentifier) {
    return new timeSyncPb.TimeSyncUpdateRequest()
      .setPreviousRoundTrip(previousRoundTrip)
      .setClockIdentifier(clockIdentifier);
  }
}

/**
 * Generate timespan as a TimeRange proto, in robot time.
 * If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
 * be converted to robot_time.
 * If the input times are already in the robot clock, do not specify timeSyncEndpoint and
 * the times will not be converted.
 * @param {?number} startNsec nanoseconds since the Unix epoch or null
 * @param {?number} endNsec nanoseconds since the Unix epoch or null
 * @param {?TimeSyncEndpoint} timeSyncEndpoint Either TimeSyncEndpoint or None.
 * @returns {timeRangePb.TimeRange}
 */
function robotTimeRangeFromNanoseconds(startNsec, endNsec, timeSyncEndpoint = null) {
  const timeRange = new timeRangePb.TimeRange();
  const converter = timeSyncEndpoint ? timeSyncEndpoint.getRobotTimeConverter() : null;

  function _convertNsec(nsec) {
    const timestampProto = nsecToTimestamp(nsec);
    if (!timeSyncEndpoint) return timestampProto;
    return converter.robotTimestampFromLocal(timestampProto);
  }

  if (startNsec) timeRange.setStart(_convertNsec(startNsec));
  if (endNsec) timeRange.setEnd(_convertNsec(endNsec));

  return timeRange;
}

/**
 * Generate timespan as a TimeRange proto, in robot time.
 * If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
 * be converted to robot_time.
 * If the input times are already in the robot clock, do not specify timeSyncEndpoint and
 * the times will not be converted.
 * @param {Date|number|null} startDatetime A Date, milliseconds since the Unix epoch (e.g. Date.now()), or null
 * @param {Date|number|null} endDatetime A Date, milliseconds since the Unix epoch (e.g. Date.now()), or null
 * @param {TimeSyncEndpoint|null} timeSyncEndpoint Either TimeSyncEndpoint or null.
 * @returns {timeRangePb.TimeRange}
 */
function robotTimeRangeFromDatetimes(startDatetime, endDatetime, timeSyncEndpoint = null) {
  function _datetimeToNsec(dateTime) {
    if (dateTime) return new Date(dateTime).getTime() * 1e6;
    return null;
  }

  return robotTimeRangeFromNanoseconds(_datetimeToNsec(startDatetime), _datetimeToNsec(endDatetime), timeSyncEndpoint);
}

/**
 * Generate timespan as TimeRange proto, in robot time.
 * If timeSyncEndpoint is a TimeSyncEndpoint, the time_spec is in the local clock and will
 * be converted to robot_time.
 * If the input times are already in the robot clock, do not specify timeSyncEndpoint and
 * the times will not be converted.
 * @param {string} timespanSpec '{val}-{val}' or '{val}' time spec string
 * @param {TimeSyncEndpoint|null} timeSyncEndpoint Either TimeSyncEndpoint or null.
 * @returns {timeRangePb.TimeRange}
 */
function timespecToRobotTimespan(timespanSpec, timeSyncEndpoint = null) {
  // parseTimespan gives seconds since the epoch (Python gives datetimes): read as milliseconds by
  // robotTimeRangeFromDatetimes, '2d' ended up in January 1970.
  const [startSec, endSec] = parseTimespan(timespanSpec);
  const secToNsec = sec => (sec === null || sec === undefined ? null : sec * 1e9);
  return robotTimeRangeFromNanoseconds(secToNsec(startSec), secToNsec(endSec), timeSyncEndpoint);
}

/** @typedef {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} Timestamp */

/**
 * Set or convert fields of the proto that need timestamps in the robot's clock.
 * @param {RobotCommandClient} client Robot command client instance.
 * @param {number} timestamp Client time in seconds since the Unix epoch, e.g. nowSec() (not Date.now()).
 * @param {TimeSyncEndpoint} timesyncEndpoint A timesync endpoint associated with the robot object.
 * @returns {Timestamp}
 */
function updateTimeFilter(client, timestamp, timesyncEndpoint) {
  if (!timesyncEndpoint) {
    throw new NoTimeSyncError(null, 'No timesync endpoint set for the robot.');
  }
  const converter = new _TimeConverter(client, timesyncEndpoint);
  return converter.robotTimestampFromLocalSecs(timestamp);
}

/**
 * Set or convert fields of the proto that need timestamps in the robot's clock.
 * @param {RobotCommandClient} client Robot command client instance.
 * @param {Timestamp} timestamp Client time.
 * @param {TimeSyncEndpoint} timesyncEndpoint A timesync endpoint associated with the robot object.
 * @returns {Timestamp}
 */
function updateTimestampFilter(client, timestamp, timesyncEndpoint) {
  if (!timesyncEndpoint) {
    throw new NoTimeSyncError(null, 'No timesync endpoint set for the robot.');
  }
  const converter = new _TimeConverter(client, timesyncEndpoint);
  converter.convertTimestampFromLocalToRobot(timestamp);
  return timestamp;
}

/**
 * A wrapper that uses a TimeSyncClient object to establish and maintain timesync with a robot.
 * This class manages internal state, including a clock identifier and previous best time sync
 * estimates. This class automatically builds requests passed to the TimeSyncClient, so users
 * don't have to worry about the details of establishing and maintaining timesync.
 */
class TimeSyncEndpoint {
  /**
   * @param {TimeSyncClient} timeSyncClient TimeSyncClient instance
   */
  constructor(timeSyncClient) {
    /** @type {TimeSyncClient}*/
    this._client = timeSyncClient;
    this._previousRoundTrip = null;
    this._previousResponse = null;
    this._clockIdentifier = '';
  }

  /**
   * The last response message from the time-sync service.
   * @returns {?timeSyncPb.TimeSyncUpdateResponse}
   */
  get response() {
    return this._previousResponse;
  }

  /**
   * Checks if the client has successfully established time-sync with the robot.
   * @returns {boolean}
   */
  get hasEstablishedTimeSync() {
    return this.response?.getState()?.getStatus() === timeSyncPb.TimeSyncState.Status.STATUS_OK;
  }

  /**
   * The previous round trip time.
   * @returns {Duration|null}
   */
  get roundTripTime() {
    const response = this.response;
    if (!response) return null;
    // Before time sync is established (more samples needed), there is no estimate yet: like the default
    // proto in Python, a zero duration.
    return response.getState()?.getBestEstimate()?.getRoundTripTime() ?? new Duration();
  }

  /**
   * The clock identifier for the instance of the time-sync client.
   * @returns {string}
   */
  get clockIdentifier() {
    return this._clockIdentifier;
  }

  /**
   * The best current estimate of clock skew from the time-sync service.
   * @returns {Duration}
   * @throws {NotEstablishedError} Time sync has not yet been established.
   */
  get clockSkew() {
    if (!this.hasEstablishedTimeSync) {
      throw new NotEstablishedError();
    }
    return this.response.getState().getBestEstimate()?.getClockSkew() ?? new Duration();
  }

  /**
   * Perform time-synchronization until time sync established.
   * @param {number} maxSamples The maximum number of times to attempt to establish time-sync
   * through time-synchronization.
   * @param {boolean} breakOnSuccess If true, stop performing the time-synchronization after
   * time-sync is established.
   * @returns {Promise<boolean>}
   */
  async establishTimesync(maxSamples = 25, breakOnSuccess = false) {
    for (let counter = 0; counter < maxSamples; counter++) {
      if (breakOnSuccess && this.hasEstablishedTimeSync) return true;

      await this.getNewEstimate();
    }
    return this.hasEstablishedTimeSync;
  }

  /**
   * Retreive update
   * @returns {Promise<timeSyncPb.TimeSyncUpdateResponse>}
   * @private
   */
  _getUpdate() {
    let roundTrip = null;
    let clockIdentifier = null;
    if (this._clockIdentifier) {
      roundTrip = this._previousRoundTrip;
      clockIdentifier = this._clockIdentifier;
    }
    return this._client.getTimeSyncUpdate(roundTrip, clockIdentifier);
  }

  /**
   * Perform an update-cycle toward achieving time-synchronization.
   * @returns {Promise<boolean>}
   */
  async getNewEstimate() {
    const response = await this._getUpdate();
    const header = response.getHeader();
    const rxTime = nowNsec();

    const roundTrip = new timeSyncPb.TimeSyncRoundTrip()
      .setClientRx(new time.Timestamp())
      .setClientTx(header.getRequestHeader()?.getRequestTimestamp())
      .setServerRx(header.getRequestReceivedTimestamp())
      .setServerTx(header.getResponseTimestamp());
    setTimestampFromNsec(roundTrip.getClientRx(), rxTime);

    this._previousRoundTrip = roundTrip;
    this._previousResponse = response;
    this._clockIdentifier = response.getClockIdentifier();

    return this.hasEstablishedTimeSync;
  }

  /**
   * Get a RobotTimeConverter for current estimate for robot clock skew from local time.
   * @returns {RobotTimeConverter}
   * @throws {NotEstablishedError} If time sync has not yet been established.
   */
  getRobotTimeConverter() {
    return new RobotTimeConverter(timestampToNsec(this.clockSkew));
  }

  /**
   * Convert a local time in seconds to a timestamp proto in robot time.
   * @param {number} localTimeSecs Timestamp in seconds since the unix epoch (e.g. nowSec(), not Date.now()).
   * @returns {Timestamp}
   * @throws {NotEstablishedError} Time sync has not yet been established.
   */
  robotTimestampFromLocalSecs(localTimeSecs) {
    if (!localTimeSecs) return null;
    const converter = this.getRobotTimeConverter();
    return converter.robotTimestampFromLocalSecs(localTimeSecs);
  }
}

// Like Python's daemon thread, the waits of the time sync do not keep the process alive.
const _DAEMON = { ref: false };

/**
 * Background for achieving and maintaining time-sync to the robot.
 */
class TimeSyncThread {
  /**
   * After achieving time sync, update estimate every minute.
   * @type {number}
   */
  DEFAULT_TIME_SYNC_INTERVAL_MS = 60_000;

  /**
   * When time-sync service is not yet ready, poll it at this interval
   * @type {number}
   */
  TIME_SYNC_SERVICE_NOT_READY_INTERVAL_MS = 5_000;

  /**
   * @param {TimeSyncClient} timeSyncClient An instance of TimeSyncClient
   * @param {?TimeSyncEndpoint} timeSyncEndpoint An optional instance of TimeSyncEndpoint
   */
  constructor(timeSyncClient, timeSyncEndpoint = null) {
    /**
     * An instance of TimeSyncClient
     * @type {TimeSyncEndpoint}
     * @private
     */
    this._timeSyncEndpoint = timeSyncEndpoint || new TimeSyncEndpoint(timeSyncClient);

    /**
     * The interval between two request
     * @type {number}
     * @private
     */
    this._timeSyncIntervalMs = this.DEFAULT_TIME_SYNC_INTERVAL_MS;

    this._task = null;
    this._running = false;

    /**
     * Boolean that control the loop
     * @type {boolean}
     * @private
     */
    this._shouldExit = false;

    /**
     * Error that been catch when trying to get new estimate
     * @type {?Error}
     * @private
     */
    this._exception = null;

    /**
     * Wait for the next time-sync update, interrupted when the thread should exit or the interval changes.
     * @type {Event}
     * @private
     */
    this._event = new Event();

    this.logger = LoggerUtil.getLogger('bosdyn.TimeSyncThread');
  }

  /**
   * Start time sync with robot
   * @returns {void}
   */
  start() {
    if (this._running) {
      // stop() was called but the loop has not ended yet (an update is in progress): keep it running,
      // otherwise a stop() followed by a start() would end with no time sync at all.
      this._shouldExit = false;
      return;
    }
    this._shouldExit = false;
    this._exception = null;
    this._event.clear();
    this._running = true;
    this._task = this._timesyncThread().finally(() => {
      this._running = false;
      this._task = null;
      // start() was called while the loop was ending: run it again.
      if (!this._shouldExit && this._exception === null) this.start();
    });
  }

  /**
   * Stop time sync with robot. Like Python's join, the returned promise resolves once the update in
   * progress (if any) is done.
   * @returns {Promise<void>}
   */
  stop() {
    this._shouldExit = true;
    this._event.set();
    return this._task ?? Promise.resolve();
  }

  /**
   * Get the time sync interval in seconds
   * @type {number}
   */
  get timeSyncIntervalSec() {
    return this._timeSyncIntervalMs / 1_000;
  }

  /**
   * Set the time sync interval in seconds
   * @param {number} val The interval in seconds
   */
  set timeSyncIntervalSec(val) {
    if (!Number.isFinite(val) || val <= 0) throw new RangeError('timeSyncIntervalSec must be > 0');
    this._timeSyncIntervalMs = val * 1_000;
    this._event.set();
  }

  /**
   * Return true if all sync operations should stop
   * @type {boolean}
   */
  get shouldExit() {
    return this._shouldExit;
  }

  /**
   * Wait for up to the given timeout for time-sync to be achieved
   * @param {number} timeoutSec Maximum time (seconds) to wait for time-sync to be achieved.
   * @returns {Promise<void>}
   */
  async waitForSync(timeoutSec = 3) {
    if (this.hasEstablishedTimeSync) return;

    const endTimeMs = Date.now() + timeoutSec * 1_000;

    // Like Python, wait while the thread runs: if it dies (e.g. on an RPC error), report its error at
    // once instead of waiting until the timeout.
    while (!this.stopped) {
      if (this.endpoint.hasEstablishedTimeSync) return;
      if (Date.now() > endTimeMs) throw new TimedOutError();

      await sleep(100);
    }

    const threadExc = this.exception;
    if (threadExc) {
      throw threadExc;
    }
    throw new InactiveThreadError();
  }

  /**
   * Checks if the client has successfully established time-sync with the robot.
   * @returns {boolean}
   */
  get hasEstablishedTimeSync() {
    return this.endpoint.hasEstablishedTimeSync;
  }

  /**
   * Returns true if thread is no longer running.
   */
  get stopped() {
    return !this._running;
  }

  get exception() {
    return this._exception;
  }

  /**
   * Return the TimeSyncEndpoint used by this thread.
   */
  get endpoint() {
    return this._timeSyncEndpoint;
  }

  /**
   * Get current estimate for robot clock skew from local time.
   * @param {number} timesyncTimeoutSec Time to wait for timesync before doing conversion.
   * @returns {Promise<Duration>}
   */
  async getRobotClockSkew(timesyncTimeoutSec = 0) {
    await this.waitForSync(timesyncTimeoutSec);
    return this.endpoint.clockSkew;
  }

  /**
   * Get a RobotTimeConverter for current estimate for robot clock skew from local time.
   * @param {number} timesyncTimeoutSec Time to wait for timesync before doing conversion.
   * @returns {Promise<RobotTimeConverter>}
   */
  async getRobotTimeConverter(timesyncTimeoutSec = 0) {
    await this.waitForSync(timesyncTimeoutSec);
    return this.endpoint.getRobotTimeConverter();
  }

  /**
   * Convert a local time in seconds to a timestamp proto in robot time.
   * @param {number} localTimeSecs Timestamp in seconds since the unix epoch (e.g. nowSec(), not Date.now()).
   * @param {number} timesyncTimeoutSec Time to wait for timesync before doing conversion.
   * @returns {Promise<time.Timestamp|null>}
   */
  async robotTimestampFromLocalSecs(localTimeSecs, timesyncTimeoutSec = 0) {
    if (!localTimeSecs) return null;
    const converter = await this.getRobotTimeConverter(timesyncTimeoutSec);
    return converter.robotTimestampFromLocalSecs(localTimeSecs);
  }

  /**
   * Background which communicates with the time-sync service on robot.
   * The purpose of this method is to achieve and maintain time-sync, which is an estimate
   * of the difference between the robot's and client's system clocks.
   * @private
   */
  async _timesyncThread() {
    try {
      while (!this.shouldExit) {
        const status = this._timeSyncEndpoint.response?.getState()?.getStatus();

        if (status === undefined || status === timeSyncPb.TimeSyncState.Status.STATUS_MORE_SAMPLES_NEEDED) {
          // Pass
        } else if (status === timeSyncPb.TimeSyncState.Status.STATUS_SERVICE_NOT_READY) {
          await this._event.wait(this.TIME_SYNC_SERVICE_NOT_READY_INTERVAL_MS, _DAEMON);
        } else {
          await this._event.wait(this._timeSyncIntervalMs, _DAEMON);
        }
        this._event.clear();

        if (!this.shouldExit) {
          await this._timeSyncEndpoint.getNewEstimate();
        }
      }
    } catch (e) {
      // Like Python, the error ends the thread and is raised by waitForSync(). Also log it: the time sync
      // would otherwise stop silently (robot.timeSync restarts a stopped thread).
      this.logger.error(`Time sync stopped by an error: ${e?.message ?? e}`);
      this._exception = e;
    }
  }
}

module.exports = {
  TimeSyncError,
  NotEstablishedError,
  TimedOutError,
  InactiveThreadError,
  TimeSyncClient,
  TimeSyncEndpoint,
  TimeSyncThread,
  timespecToRobotTimespan,
  robotTimeRangeFromDatetimes,
  robotTimeRangeFromNanoseconds,
  updateTimeFilter,
  updateTimestampFilter,
};
