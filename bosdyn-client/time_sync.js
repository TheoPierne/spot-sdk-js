'use strict';

const { setImmediate, clearImmediate } = require('node:timers');
const { setTimeout: sleep } = require('node:timers/promises');

const time = require('google-protobuf/google/protobuf/timestamp_pb');

const { BaseClient, common_header_errors } = require('./common');

const {
  RobotTimeConverter,
  now_nsec,
  parse_timespan,
  nsec_to_timestamp,
  set_timestamp_from_nsec,
  timestamp_to_nsec,
} = require('../bosdyn-core/util');
const time_range_pb = require('../bosdyn/api/time_range_pb');
const time_sync_pb = require('../bosdyn/api/time_sync_pb');
const time_sync_service_grpc_pb = require('../bosdyn/api/time_sync_service_grpc_pb');

class TimeSyncError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'TimeSyncError';
  }
}

class NotEstablishedError extends TimeSyncError {
  constructor(msg) {
    super(msg);
    this.name = 'NotEstablishedError';
  }
}

class TimedOutError extends TimeSyncError {
  constructor(msg) {
    super(msg);
    this.name = 'TimedOutError';
  }
}

class InactiveThreadError extends TimeSyncError {
  constructor(msg) {
    super(msg);
    this.name = 'InactiveThreadError';
  }
}

class TimeSyncClient extends BaseClient {
  static default_service_name = 'time-sync';
  static service_type = 'bosdyn.api.TimeSyncService';

  constructor() {
    super(time_sync_service_grpc_pb.TimeSyncServiceClient);
  }

  get_time_sync_update(previous_round_trip, clock_identifier, args) {
    const req = this.#get_time_sync_update_request(previous_round_trip, clock_identifier);
    return this.call(this._stub.timeSyncUpdate, req, null, common_header_errors, args);
  }

  #get_time_sync_update_request(previous_round_trip, clock_identifier) {
    const req = new time_sync_pb.TimeSyncUpdateRequest()
      .setPreviousRoundTrip(previous_round_trip)
      .setClockIdentifier(clock_identifier);
    return req;
  }
}

/* Function _get_time_sync_status_value(response){
	return response.getTimeSyncStatusMap();
}*/

function robot_time_range_from_nanoseconds(start_nsec, end_nsec, time_sync_endpoint = null) {
  const time_range = new time_range_pb.TimeRange();
  const converter = time_sync_endpoint ? time_sync_endpoint.get_robot_time_converter() : null;

  function _convert_nsec(nsec) {
    let timestamp_proto = nsec_to_timestamp(parseInt(nsec));
    if (!time_sync_endpoint) return timestamp_proto;
    return converter.robot_timestamp_from_local(timestamp_proto);
  }

  if (start_nsec) time_range.setStart(_convert_nsec(start_nsec));
  if (end_nsec) time_range.setEnd(_convert_nsec(end_nsec));

  return time_range;
}

function robot_time_range_from_datetimes(start_datetime, end_datetime, time_sync_endpoint = null) {
  function _datetime_to_nsec(date_time) {
    if (date_time) return new Date(date_time).getTime() * 1e6;
    return null;
  }

  return robot_time_range_from_nanoseconds(
    _datetime_to_nsec(start_datetime),
    _datetime_to_nsec(end_datetime),
    time_sync_endpoint,
  );
}

function timespec_to_robot_timespan(timespan_spec, time_sync_endpoint = null) {
  let [start_datetime, end_datetime] = parse_timespan(timespan_spec);
  return robot_time_range_from_datetimes(start_datetime, end_datetime, time_sync_endpoint);
}

class TimeSyncEndpoint {
  constructor(time_sync_client) {
    this._client = time_sync_client;
    this._locked_previous_round_trip = null;
    this._locked_previous_response = null;
    this._locked_clock_identifier = '';
  }

  get response() {
    return this._locked_previous_response;
  }

  get has_established_time_sync() {
    const response = this.response;
    return response && response.getState().getStatus() === time_sync_pb.TimeSyncState.Status.STATUS_OK;
  }

  get round_trip_time() {
    const response = this.response;
    if (!response) return null;
    return response.getState().getBestEstimate().getRoundTripTime();
  }

  get clock_identifier() {
    return this._locked_clock_identifier;
  }

  get clock_skew() {
    const response = this.response;
    if (!response || response.getState().getStatus() !== time_sync_pb.TimeSyncState.Status.STATUS_OK) {
      throw new NotEstablishedError();
    }
    return response.getState().getBestEstimate().getClockSkew();
  }

  async establish_timesync(max_samples = 25, break_on_success = false) {
    let counter = 0;
    /* eslint-disable no-await-in-loop */
    while (counter < max_samples) {
      if (break_on_success && this.has_established_time_sync) return true;
      await this.get_new_estimate();
      counter += 1;
    }
    /* eslint-enable no-await-in-loop */
    return this.has_established_time_sync;
  }

  _get_update() {
    let round_trip = null;
    let clock_identifier = null;
    if (this._locked_clock_identifier) {
      round_trip = this._locked_previous_round_trip;
      clock_identifier = this._locked_clock_identifier;
    }
    return this._client.get_time_sync_update(round_trip, clock_identifier);
  }

  async get_new_estimate() {
    const response = await this._get_update();
    const header = response.getHeader();
    const rx_time = now_nsec();

    const round_trip = new time_sync_pb.TimeSyncRoundTrip()
      .setClientTx(header.getRequestHeader().getRequestTimestamp())
      .setServerRx(header.getRequestReceivedTimestamp())
      .setServerTx(header.getResponseTimestamp());
    round_trip.setClientRx(new time.Timestamp());
    set_timestamp_from_nsec(round_trip.getClientRx(), rx_time);

    this._locked_previous_round_trip = round_trip;
    this._locked_previous_response = response;
    this._locked_clock_identifier = response.getClockIdentifier();

    return this.has_established_time_sync;
  }

  get_robot_time_converter() {
    return new RobotTimeConverter(timestamp_to_nsec(this.clock_skew));
  }

  robot_timestamp_from_local_secs(local_time_secs) {
    if (!local_time_secs) return null;
    const converter = this.get_robot_time_converter();
    return converter.robot_timestamp_from_local_secs(local_time_secs);
  }
}

class TimeSyncThread {
  DEFAULT_TIME_SYNC_INTERVAL_SEC = 60_000;
  TIME_SYNC_SERVICE_NOT_READY_INTERVAL_SEC = 5_000;

  constructor(time_sync_client) {
    this._time_sync_endpoint = new TimeSyncEndpoint(time_sync_client);
    this._locked_time_sync_interval_sec = this.DEFAULT_TIME_SYNC_INTERVAL_SEC;
    this._locked_should_exit = false;
    this._locked_thread_exception = null;

    this._loop = null;
    this._loopStart = false;
  }

  start() {
    if (this._loopStart) return;
    this._loop = setImmediate(this._timesync_thread.bind(this)).unref();
    this._loopStart = true;
    this._locked_should_exit = false;
    this._locked_thread_exception = null;
  }

  stop() {
    clearImmediate(this._loop);
    this._locked_should_exit = true;
    this._loopStart = false;
  }

  get time_sync_interval_sec() {
    return this._locked_time_sync_interval_sec;
  }

  set time_sync_interval_sec(val) {
    this._locked_time_sync_interval_sec = val;
  }

  get should_exit() {
    return this._locked_should_exit;
  }

  async wait_for_sync(timeout_sec = 3_000) {
    if (this.has_established_time_sync) return;

    const end_time_sec = Date.now() + timeout_sec;

    /* eslint-disable no-await-in-loop */
    while (!this.stopped) {
      if (this.endpoint.has_established_time_sync) return;
      if (Date.now() > end_time_sec) throw new TimedOutError();
      await sleep(100);
    }
    /* eslint-enable no-await-in-loop */

    const thread_exc = this.thread_exception;
    if (thread_exc) {
      throw thread_exc();
    }
    throw new InactiveThreadError();
  }

  get has_established_time_sync() {
    return this.endpoint.has_established_time_sync;
  }

  get stopped() {
    return !this._loopStart;
  }

  get thread_exception() {
    return this._locked_thread_exception;
  }

  get endpoint() {
    return this._time_sync_endpoint;
  }

  async get_robot_clock_skew(timesync_timeout_sec = 0) {
    await this.wait_for_sync(timesync_timeout_sec);
    return this.endpoint.clock_skew;
  }

  async get_robot_time_converter(timesync_timeout_sec = 0) {
    await this.wait_for_sync(timesync_timeout_sec);
    return this.endpoint.get_robot_time_converter();
  }

  async robot_timestamp_from_local_secs(local_time_secs, timesync_timeout_sec = 0) {
    if (!local_time_secs) return null;
    const converter = await this.get_robot_time_converter(timesync_timeout_sec);
    return converter.robot_timestamp_from_local_secs(local_time_secs);
  }

  async _timesync_thread() {
    try {
      /* eslint-disable no-await-in-loop */
      while (!this.should_exit) {
        const response = this._time_sync_endpoint.response;

        if (
          !response ||
          response.getState().getStatus() === time_sync_pb.TimeSyncState.Status.STATUS_MORE_SAMPLES_NEEDED
        ) {
          // Pass
        } else if (response.getState().getStatus() === time_sync_pb.TimeSyncState.Status.STATUS_SERVICE_NOT_READY) {
          await sleep(this.TIME_SYNC_SERVICE_NOT_READY_INTERVAL_SEC);
        } else {
          await sleep(this.time_sync_interval_sec);
        }

        if (!this.should_exit) {
          await this._time_sync_endpoint.get_new_estimate();
        }
      }
      /* eslint-enable no-await-in-loop */
    } catch (e) {
      console.log(e);
      this._locked_thread_exception = e;
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
  timespec_to_robot_timespan,
  robot_time_range_from_datetimes,
  robot_time_range_from_nanoseconds,
};
