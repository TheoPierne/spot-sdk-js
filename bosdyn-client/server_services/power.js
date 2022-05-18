'use strict';

const { LoggerUtil } = require('../../bosdyn-client/loggerUtil');
const lease_pb = require('../../bosdyn/api/lease_pb');
const power_pb = require('../../bosdyn/api/power_pb');
const power_service_grpc_pb = require('../../bosdyn/api/power_service_grpc_pb');

const { populate_response_header } = require('../util');

const logger = LoggerUtil.getLogger('POWER');

function powerCommand(call, callback) {
  logger.info('New request /powerCommand !');
  let reply = new power_pb.PowerCommandResponse();
  populate_response_header(reply, call.request);

  const lease = new lease_pb.Lease()
    .setResource('body')
    .setEpoch('1638316800')
    .setSequenceList([0, 1, 2, 3])
    .setClientNamesList(['Theo', 'TEST_2']);

  const leaseOwner = new lease_pb.LeaseOwner().setClientName('Theo').setUserName('setUserName');

  const leaseUseResult = new lease_pb.LeaseUseResult()
    .setStatus(1)
    .setOwner(leaseOwner)
    .setAttemptedLease(lease)
    .setPreviousLease(lease)
    .setLatestKnownLease(lease)
    .setLatestResourcesList([lease]);

  reply
    .setStatus(1)
    .setPowerCommandId(123)
    .setLicenseStatus(1)
    .setBlockingFaultsList([])
    .setLeaseUseResult(leaseUseResult);

  callback(null, reply);
}

function powerCommandFeedback(call, callback) {
  logger.info('New request /powerCommandFeedback !');
  let reply = new power_pb.PowerCommandFeedbackResponse();
  populate_response_header(reply, call.request);

  reply.setStatus(power_pb.PowerCommandStatus.STATUS_SUCCESS).setBlockingFaultsList([]);

  callback(null, reply);
}

module.exports = {
  service: power_service_grpc_pb.PowerServiceService,
  func: {
    powerCommand,
    powerCommandFeedback,
  },
};
