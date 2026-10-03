export type RpcError = import("./exceptions").RpcError;
/**
 * Client for the Fault service.
 * @extends {BaseClient<FaultServiceClient>}
 */
export class FaultClient extends BaseClient<FaultServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Broadcast a new service fault through the robot.
     * @param {serviceFaultPb.ServiceFault} serviceFault Populated fault message to broadcast.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<serviceFaultPb.TriggerServiceFaultResponse>} An instance of
     * bosdyn.api.TriggerServiceFaultResponse
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {ServiceFaultAlreadyExistsError} The service fault already exists.
     * @throws {FaultResponseError} Something went wrong during the fault trigger.
     */
    triggerServiceFault(serviceFault: serviceFaultPb.ServiceFault, args?: Object): Promise<serviceFaultPb.TriggerServiceFaultResponse>;
    /**
     * Clear a service fault from the robot state.
     * @param {serviceFaultPb.ServiceFaultId} serviceFaultId ServiceFault to clear.
     * @param {boolean} [clearAllServiceFaults=false] Clear all faults associated with the service name.
     * @param {boolean} [clearAllPayloadFaults=false] Clear all faults associated with the payload guid.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<serviceFaultPb.ClearServiceFaultResponse>} An instance of bosdyn.api.ClearServiceFaultResponse
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {ServiceFaultDoesNotExistError} The service fault does not exist in active service faults.
     * @throws {FaultResponseError} Something went wrong during the fault clear.
     */
    clearServiceFault(serviceFaultId: serviceFaultPb.ServiceFaultId, clearAllServiceFaults?: boolean, clearAllPayloadFaults?: boolean, args?: Object): Promise<serviceFaultPb.ClearServiceFaultResponse>;
}
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 */
/** General class of errors for the Fault service. */
export class FaultResponseError extends ResponseError {
}
/** The specified service fault id already exists as an active fault on the robot. */
export class ServiceFaultAlreadyExistsError extends FaultResponseError {
}
/** The specified service fault id does not match any active service faults on the robot. */
export class ServiceFaultDoesNotExistError extends FaultResponseError {
}
export const _triggerServiceFaultError: (...args: any[]) => any;
export const _clearServiceFaultError: (...args: any[]) => any;
import { FaultServiceClient } from "../../src/bosdyn/api/fault_service_grpc_pb";
import { BaseClient } from "./common";
import serviceFaultPb = require("../../src/bosdyn/api/service_fault_pb");
import { ResponseError } from "./exceptions";
