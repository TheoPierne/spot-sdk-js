'use strict';

const payloadPb = require('../bosdyn/api/payload_pb');
const { PayloadServiceClient } = require('../bosdyn/api/payload_service_grpc_pb');
const { BaseClient, commonHeaderErrors } = require('../bosdyn-client/common');

function _getEntryValue(response) {
  return response.getPayloadsList();
}

/**
 * A client handling payload configs.
 * @extends {BaseClient<PayloadServiceClient>}
 */
class PayloadClient extends BaseClient {
  static defaultServiceName = 'payload';
  static serviceType = 'bosdyn.api.PayloadService';

  constructor() {
    super(PayloadServiceClient);
  }

  /**
   * List all payloads registered on the robot.
   * @param {Object} args Extra arguments to pass to grpc call invocation.
   * @returns {Promise<payloadPb.Payload[]>} A list of the proto message definitions of all registered payloads
   * @throws {RpcError} Problem communicating with the robot.
   */
  listPayloads(args) {
    const req = new payloadPb.ListPayloadsRequest();
    return this.call(this._stub.listPayloads, req, _getEntryValue, commonHeaderErrors, false, args);
  }
}

module.exports = {
  PayloadClient,
};
