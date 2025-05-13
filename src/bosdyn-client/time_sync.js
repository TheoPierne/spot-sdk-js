'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const time = require('google-protobuf/google/protobuf/timestamp_pb');
const Event = require('node-threading-event');

const { BaseClient, commonHeaderErrors } = require('./common');
const { _TimeConverter, NoTimeSyncError } = require('./robot_command');

const timeRangePb = require('../bosdyn/api/time_range_pb');
const timeSyncPb = require('../bosdyn/api/time_sync_pb');
const { TimeSyncServiceClient } = require('../bosdyn/api/time_sync_service_grpc_pb');
const {
  RobotTimeConverter,
  nowNsec,
  parseTimespan,
  nsecToTimestamp,
  setTimestampFromNsec,
  timestampToNsec,
} = require('../bosdyn-core/util');

class TimeSyncError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

class NotEstablishedError extends TimeSyncError {}
class TimedOutError extends TimeSyncError {}
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
   * @param {Object} args The GRPC options to send over the GRPC request
   * @returns {Promise<timeSyncPb.TimeSyncUpdateResponse>}
   */
  getTimeSyncUpdate(previousRoundTrip, clockIdentifier, args) {
    const req = this._getTimeSyncUpdateRequest(previousRoundTrip, clockIdentifier);
    return this.call(this._stub.timeSyncUpdate, req, null, commonHeaderErrors, args);
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
    let timestampProto = nsecToTimestamp(parseInt(nsec));
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
 * @param {number|null} startDatetime Date.now() or null
 * @param {number|null} endDatetime Date.now() or null
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
  let [startDatetime, endDatetime] = parseTimespan(timespanSpec);
  return robotTimeRangeFromDatetimes(startDatetime, endDatetime, timeSyncEndpoint);
}

/** @typedef {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} Timestamp */

/**
 * Set or convert fields of the proto that need timestamps in the robot's clock.
 * @param {RobotCommandClient} client Robot command client instance.
 * @param {number} timestamp Client time, such as from Date.now().
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
   * @readonly
   */
  get response() {
    return this._previousResponse;
  }

  /**
   * Checks if the client has successfully established time-sync with the robot.
   * @returns {boolean}
   * @readonly
   */
  get hasEstablishedTimeSync() {
    const response = this.response;
    return response && response.getState().getStatus() === timeSyncPb.TimeSyncState.Status.STATUS_OK;
  }

  /**
   * The previous round trip time.
   * @returns {duration_pb.Duration|null}
   * @readonly
   */
  get roundTripTime() {
    const response = this.response;
    return response ? response.getState().getBestEstimate().getRoundTripTime() : null;
  }

  /**
   * The clock identifier for the instance of the time-sync client.
   * @returns {string}
   * @readonly
   */
  get clockIdentifier() {
    return this._clockIdentifier;
  }

  /**
   * The best current estimate of clock skew from the time-sync service.
   * @returns {durationPb.Duration}
   * @throws {NotEstablishedError} Time sync has not yet been established.
   * @readonly
   */
  get clockSkew() {
    const response = this.response;
    if (!response || response.getState().getStatus() !== timeSyncPb.TimeSyncState.Status.STATUS_OK) {
      throw new NotEstablishedError();
    }
    return response.getState().getBestEstimate().getClockSkew();
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
      // eslint-disable-next-line no-await-in-loop
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
      .setClientTx(header.getRequestHeader().getRequestTimestamp())
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
   * @param {number} localTimeSecs Timestamp in seconds since the unix epoch (e.g., from Date.now()).
   * @returns {timePb.Timestamp}
   * @throws {NotEstablishedError} Time sync has not yet been established.
   */
  robotTimestampFromLocalSecs(localTimeSecs) {
    if (!localTimeSecs) return null;
    const converter = this.getRobotTimeConverter();
    return converter.robotTimestampFromLocalSecs(localTimeSecs);
  }
}

/**
 * Background for achieving and maintaining time-sync to the robot.
 */
class TimeSyncThread {
  /**
   * After achieving time sync, update estimate every minute.
   * @type {number}
   */
  DEFAULT_TIME_SYNC_INTERVAL_SEC = 60_000;

  /**
   * When time-sync service is not yet ready, poll it at this interval
   * @type {number}
   */
  TIME_SYNC_SERVICE_NOT_READY_INTERVAL_SEC = 5_000;

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
    this._timeSyncIntervalSec = this.DEFAULT_TIME_SYNC_INTERVAL_SEC;

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
     * @type {Event}
     * @private
     */
    this._event = new Event();
  }

  /**
   * Start time sync with robot
   * @returns {void}
   */
  start() {
    if (this._loop) return;
    this._shouldExit = false;
    this._exception = null;
    this._event.clear();
    this._timesyncThread();
  }

  /**
   * Stop time sync with robot
   * @returns {void}
   */
  stop() {
    if (this._shouldExit) return;
    this._shouldExit = true;
    this._event.set();
  }

  /**
   * Get the time sync interval in seconds
   * @type {number}
   * @readonly
   */
  get timeSyncIntervalSec() {
    return this._timeSyncIntervalSec;
  }

  /**
   * Set the time sync interval in seconds
   * @param {number} val The interval in seconds
   */
  set timeSyncIntervalSec(val) {
    this._timeSyncIntervalSec = val;
    this._event.set();
  }

  /**
   * Return true if all sync operations should stop
   * @type {boolean}
   * @readonly
   */
  get shouldExit() {
    return this._shouldExit;
  }

  /**
   * Wait for up to the given timeout for time-sync to be achieved
   * @param {number} timeoutSec Maximum time (seconds) to wait for time-sync to be achieved.
   * @returns {Promise<void>}
   */
  async waitForSync(timeoutSec = 3_000) {
    if (this.hasEstablishedTimeSync) return;

    const endTimeSec = Date.now() + timeoutSec;

    while (!this.shouldExit) {
      if (this.endpoint.hasEstablishedTimeSync) return;
      if (Date.now() > endTimeSec) throw new TimedOutError();
      // eslint-disable-next-line no-await-in-loop
      await sleep(100);
    }

    const threadExc = this.threadException;
    if (threadExc) {
      throw threadExc();
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

  get stopped() {
    return this._event.isSet();
  }

  get exception() {
    return this._exception;
  }

  get endpoint() {
    return this._timeSyncEndpoint;
  }

  /**
   * Get current estimate for robot clock skew from local time.
   * @param {number} timesyncTimeoutSec Time to wait for timesync before doing conversion.
   * @returns {Promise<durationPb.Duration>}
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
   * @param {number} localTimeSecs Timestamp in seconds since the unix epoch (e.g., from Date.now()).
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
      /* eslint-disable no-await-in-loop */
      while (!this.shouldExit) {
        const response = this._timeSyncEndpoint.response;

        if (
          !response ||
          response.getState().getStatus() === timeSyncPb.TimeSyncState.Status.STATUS_MORE_SAMPLES_NEEDED
        ) {
          // Pass
        } else if (response.getState().getStatus() === timeSyncPb.TimeSyncState.Status.STATUS_SERVICE_NOT_READY) {
          await this._event.wait(this.TIME_SYNC_SERVICE_NOT_READY_INTERVAL_SEC);
        } else {
          await this._event.wait(this._timeSyncIntervalSec);
        }
        this._event.clear();

        if (!this.shouldExit) {
          await this._timeSyncEndpoint.getNewEstimate();
        }
      }
      /* eslint-enable no-await-in-loop */
    } catch (e) {
      console.log(e);
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
