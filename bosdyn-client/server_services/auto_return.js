'use strict';

const { LoggerUtil } = require('../../bosdyn-client/loggerUtil');
const auto_return_pb = require('../../bosdyn/api/auto_return/auto_return_pb');
const auto_return_service_grpc_pb = require('../../bosdyn/api/auto_return/auto_return_service_grpc_pb');

const { populate_response_header } = require('../util');

const logger = LoggerUtil.getLogger('AUTO_RETURN');

const config = { enable: false, req: {} };

function configure(call, callback) {
  logger.info('New request /configure !');
  let reply = new auto_return_pb.ConfigureResponse();
  populate_response_header(reply, call.request);

  config.req = call.request;
  config.enable = true;

  reply.setStatus(auto_return_pb.ConfigureResponse.Status.STATUS_OK);

  callback(null, reply);
}

function getConfiguration(call, callback) {
  logger.info('New request /getConfiguration !');
  let reply = new auto_return_pb.GetConfigurationResponse();
  populate_response_header(reply, call.request);

  reply.setRequest(config.req).setEnabled(config.enable);

  callback(null, reply);
}

function start(call, callback) {
  logger.info('New request /start !');
  let reply = new auto_return_pb.StartResponse();
  populate_response_header(reply, call.request);

  callback(null, reply);
}

module.exports = {
  service: auto_return_service_grpc_pb.AutoReturnServiceService,
  func: {
    configure,
    getConfiguration,
    start,
  },
};
