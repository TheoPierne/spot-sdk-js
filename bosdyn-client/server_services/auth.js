'use strict';

const { LoggerUtil } = require('../../bosdyn-client/loggerUtil');
const auth_pb = require('../../bosdyn/api/auth_pb');
const auth_service_grpc_pb = require('../../bosdyn/api/auth_service_grpc_pb');

const { populate_response_header } = require('../util');

const logger = LoggerUtil.getLogger('AUTH');

function getAuthToken(call, callback) {
  logger.info('New request /getAuthToken !');
  let reply = new auth_pb.GetAuthTokenResponse();
  populate_response_header(reply, call.request);

  reply.setStatus(1).setToken('TEST_TOKEN');

  callback(null, reply);
}

module.exports = {
  service: auth_service_grpc_pb.AuthServiceService,
  func: {
    getAuthToken,
  },
};
