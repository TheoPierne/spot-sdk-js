'use strict';

const time = require('google-protobuf/google/protobuf/duration_pb');
const { LoggerUtil } = require('../../bosdyn-client/loggerUtil');
const estop_pb = require('../../bosdyn/api/estop_pb');
const estop_service_grpc_pb = require('../../bosdyn/api/estop_service_grpc_pb');

const { populate_response_header } = require('../util');

const logger = LoggerUtil.getLogger('ESTOP');

// Let robotStopped = false;
let robotEstopConfig = null;

function registerEstopEndpoint(call, callback) {
  logger.info('New request /registerEstopEndpoint !');
  let reply = new estop_pb.RegisterEstopEndpointResponse();
  populate_response_header(reply, call.request);

  const timeout = new time.Duration().setSeconds(10).setNanos(0);

  const endpoint = new estop_pb.EstopEndpoint()
    .setRole(call.request.getTargetEndpoint().getRole())
    .setName('TEST_NAME')
    .setUniqueId('4321')
    .setTimeout(timeout)
    .setCutPowerTimeout(timeout);

  reply.setRequest(call.request).setStatus(1).setNewEndpoint(endpoint);

  callback(null, reply);
}

function getEstopSystemStatus(call, callback) {
  logger.info('New request /getEstopSystemStatus !');
  let reply = new estop_pb.GetEstopSystemStatusResponse();
  populate_response_header(reply, call.request);

  const status = new estop_pb.EstopSystemStatus()
    .setEndpointsList([new estop_pb.EstopEndpointWithStatus()])
    .setStopLevel(estop_pb.EstopStopLevel.ESTOP_LEVEL_CUT)
    .setStopLevelDetails('TEST_LEVEL');

  reply.setStatus(status);

  callback(null, reply);
}

function estopCheckIn(call, callback) {
  logger.info('New request /estopCheckIn !');
  let reply = new estop_pb.EstopCheckInResponse();
  populate_response_header(reply, call.request);

  reply.setRequest(call.request).setChallenge('1').setStatus(estop_pb.EstopCheckInResponse.Status.STATUS_OK);

  callback(null, reply);
}

function setEstopConfig(call, callback) {
  logger.info('New request /getEstopConfig !');
  let reply = new estop_pb.SetEstopConfigResponse();
  populate_response_header(reply, call.request);

  robotEstopConfig = call.request.getConfig();

  reply
    .setStatus(estop_pb.SetEstopConfigResponse.Status.STATUS_SUCCESS)
    .setRequest(call.request)
    .setActiveConfig(robotEstopConfig);

  callback(null, reply);
}

function getEstopConfig(call, callback) {
  logger.info('New request /getEstopConfig !');
  let reply = new estop_pb.GetEstopConfigResponse();
  populate_response_header(reply, call.request);

  const timeout = new time.Duration().setSeconds(10).setNanos(0);

  const endpoint = new estop_pb.EstopEndpoint()
    .setRole('TEST_ROLE')
    .setName('TEST_NAME')
    .setUniqueId('4321')
    .setTimeout(timeout)
    .setCutPowerTimeout(timeout);

  const activeConfig = new estop_pb.EstopConfig().setUniqueId('4321').setEndpointsList([endpoint]);

  console.log(robotEstopConfig?.toObject());

  reply.setRequest(call.request).setActiveConfig(robotEstopConfig || activeConfig);

  callback(null, reply);
}

module.exports = {
  service: estop_service_grpc_pb.EstopServiceService,
  func: {
    registerEstopEndpoint,
    getEstopSystemStatus,
    setEstopConfig,
    getEstopConfig,
    estopCheckIn,
  },
};
