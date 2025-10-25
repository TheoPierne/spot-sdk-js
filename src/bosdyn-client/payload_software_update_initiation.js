'use strict';

const { BaseClient } = require("./common");

const { PayloadSoftwareUpdateInitiationServiceClient } = require('../bosdyn/api/payload_software_update_initiation_service_grpc_pb');
const { TriggerSendPayloadSoftwareInfoResponse, TriggerSendPayloadSoftwareInfoRequest, TriggerInitiateUpdateResponse, TriggerInitiateUpdateRequest } = require("../bosdyn/api/payload_software_update_initiation_pb");

/**
 * Payload software update initiation gRPC client.
 * This client uses an insecure channel for signaling to a payload that it should
 * send its version information or initiate a software update.
 * @extends {BaseClient<PayloadSoftwareUpdateInitiationServiceClient>}
 */
class PayloadSoftwareUpdateInitiation extends BaseClient {
  static defaultServiceName = 'payload-software-update-initiation';
  static serviceType = 'bosdyn.api.PayloadSoftwareUpdateInitiationService';

  constructor() {
    super(PayloadSoftwareUpdateInitiationServiceClient);
  }

  /**
   * Tell a payload to send its current version information to Spot.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<TriggerSendPayloadSoftwareInfoResponse>}
   */
  triggerSendPayloadSoftwareInfo(args) {
    const req = new TriggerSendPayloadSoftwareInfoRequest();
    return this.call(this._stub.triggerSendPayloadSoftwareInfo, req, null, null, false, args);
  }

  /**
   * Tell a payload to initiate its software update logic.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<TriggerInitiateUpdateResponse>}
   */
  triggerInitiateUpdate(args) {
    const req = new TriggerInitiateUpdateRequest();
    return this.call(this._stub.triggerInitiateUpdate, req, null, null, false, args);
  }

}

module.exports = {
  PayloadSoftwareUpdateInitiation,
};
