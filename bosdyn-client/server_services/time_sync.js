'use strict';

const duration_pb = require('google-protobuf/google/protobuf/duration_pb');

const { LoggerUtil } = require('../../bosdyn-client/loggerUtil');
const { now_timestamp } = require('../../bosdyn-core/util');
const time_sync_pb = require('../../bosdyn/api/time_sync_pb');
const time_sync_service_grpc_pb = require('../../bosdyn/api/time_sync_service_grpc_pb');

const { populate_response_header } = require('../util');

const logger = LoggerUtil.getLogger('TIME_SYNC');

const clockIdentifier = 'clock1234';

function timeSyncUpdate(call, callback) {
  logger.info('New request [TIME SYNC] /timeSyncUpdate !');
  let reply = new time_sync_pb.TimeSyncUpdateResponse();
  populate_response_header(reply, call.request);

  const bestEstimate = new time_sync_pb.TimeSyncEstimate()
    .setRoundTripTime(new duration_pb.Duration().setSeconds(0).setNanos(0))
    .setClockSkew(new duration_pb.Duration().setSeconds(0).setNanos(0));

  const state = new time_sync_pb.TimeSyncState()
    .setBestEstimate(bestEstimate)
    .setStatus(time_sync_pb.TimeSyncState.Status.STATUS_OK)
    .setMeasurementTime(now_timestamp());

  reply
    .setPreviousEstimate(bestEstimate)
    .setState(state)
    .setClockIdentifier(call.request.getClockIdentifier() || clockIdentifier);

  callback(null, reply);
}

module.exports = {
  service: time_sync_service_grpc_pb.TimeSyncServiceService,
  func: {
    timeSyncUpdate,
  },
};
