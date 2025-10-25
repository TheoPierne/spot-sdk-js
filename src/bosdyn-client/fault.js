'use strict';

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ResponseError } = require('./exceptions');
const { DefaultDict } = require('./util');

const { FaultServiceClient } = require('../bosdyn/api/fault_service_grpc_pb');
const serviceFaultPb = require('../bosdyn/api/service_fault_pb');

class FaultResponseError extends ResponseError {}
class ServiceFaultAlreadyExistsError extends FaultResponseError {}
class ServiceFaultDoesNotExistError extends FaultResponseError {}

/**
 * Client for the Fault service.
 * @extends {BaseClient<FaultServiceClient>}
 */
class FaultClient extends BaseClient {
  static defaultServiceName = 'fault';
  static serviceType = 'bosdyn.api.FaultService';

  constructor() {
    super(FaultServiceClient);
  }

  /**
   * Broadcast a new service fault through the robot.
   * @param {serviceFaultPb.ServiceFault} serviceFault Populated fault message to broadcast.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<serviceFaultPb.TriggerServiceFaultResponse>} An instance of
   * bosdyn.api.TriggerServiceFaultResponse
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ServiceFaultAlreadyExistsError} The service fault already exists.
   * @throws {FaultResponseError} Something went wrong during the fault trigger.
   */
  triggerServiceFault(serviceFault, args) {
    const req = new serviceFaultPb.TriggerServiceFaultRequest().setFault(serviceFault);
    return this.call(this._stub.triggerServiceFault, req, null, _triggerServiceFaultError, false, args);
  }

  /**
   * Clear a service fault from the robot state.
   * @param {serviceFaultPb.ServiceFaultId} serviceFaultId ServiceFault to clear.
   * @param {boolean} [clearAllServiceFaults=false] Clear all faults associated with the service name.
   * @param {boolean} [clearAllPayloadFaults=false] Clear all faults associated with the payload guid.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<serviceFaultPb.ClearServiceFaultResponse>} An instance of bosdyn.api.ClearServiceFaultResponse
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ServiceFaultDoesNotExistError} The service fault does not exist in active service faults.
   * @throws {FaultResponseError} Something went wrong during the fault clear.
   */
  clearServiceFault(serviceFaultId, clearAllServiceFaults = false, clearAllPayloadFaults = false, args) {
    const req = new serviceFaultPb.ClearServiceFaultRequest()
      .setFaultId(serviceFaultId)
      .setClearAllServiceFaults(clearAllServiceFaults)
      .setClearAllPayloadFaults(clearAllPayloadFaults);
    return this.call(this._stub.clearServiceFault, req, null, _clearServiceFaultError, false, args);
  }
}

const _TRIGGER_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_TRIGGER_STATUS_TO_ERROR.set(serviceFaultPb.TriggerServiceFaultResponse.Status.STATUS_OK, [null, null]);
_TRIGGER_STATUS_TO_ERROR.set(serviceFaultPb.TriggerServiceFaultResponse.Status.STATUS_FAULT_ALREADY_ACTIVE, [
  ServiceFaultAlreadyExistsError,
  'The specified service fault id already exists as an active fault on the robot.',
]);

const _CLEAR_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_CLEAR_STATUS_TO_ERROR.set(serviceFaultPb.ClearServiceFaultResponse.Status.STATUS_OK, [null, null]);
_CLEAR_STATUS_TO_ERROR.set(serviceFaultPb.ClearServiceFaultResponse.Status.STATUS_FAULT_NOT_ACTIVE, [
  ServiceFaultDoesNotExistError,
  'The specified service fault id does not match any active service faults on the robot.',
]);

const _triggerServiceFaultError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(serviceFaultPb.TriggerServiceFaultResponse.Status),
      _TRIGGER_STATUS_TO_ERROR,
    ),
  ),
);

const _clearServiceFaultError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(serviceFaultPb.ClearServiceFaultResponse.Status),
      _CLEAR_STATUS_TO_ERROR,
    ),
  ),
);

module.exports = {
  FaultClient,
  FaultResponseError,
  ServiceFaultAlreadyExistsError,
  ServiceFaultDoesNotExistError,
  _triggerServiceFaultError,
  _clearServiceFaultError,
};
