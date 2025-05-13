'use strict';

const { BaseClient, commonHeaderErrors } = require('./common');
const irEnableDisablePb = require('../bosdyn/api/ir_enable_disable_pb');
const irEnableDisableServiceGrpcPb = require('../bosdyn/api/ir_enable_disable_service_grpc_pb');

const { REQUEST_ON, REQUEST_OFF } = irEnableDisablePb.IREnableDisableRequest.Request;

/**
 * Client to enable and/or disable the robot's IR light emitters in the body and hand sensors.
 * @extends {BaseClient<irEnableDisableServiceGrpcPb.IREnableDisableServiceClient>}
 */
class IREnableDisableServiceClient extends BaseClient {
  static defaultServiceName = 'ir-enable-disable-service';
  static serviceType = 'bosdyn.api.IREnableDisableService';

  constructor() {
    super(irEnableDisableServiceGrpcPb.IREnableDisableServiceClient);
  }

  /**
   * Enable and/or disable the robot's IR light emitters.
   * @param {boolean} enable Whether or not to enable the emitters.
   * @param {Object} args Args to be send with the gRPC request
   * @returns {Promise<irEnableDisablePb.IREnableDisableResponse>}
   */
  setIrEnabled(enable, args) {
    const req = enable ? REQUEST_ON : REQUEST_OFF;
    const request = new irEnableDisablePb.IREnableDisableRequest().setRequest(req);

    return this.call(this._stub.iREnableDisable, request, null, commonHeaderErrors, args);
  }
}

module.exports = {
  IREnableDisableServiceClient,
};
