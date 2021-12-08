const {	BaseClient,	common_header_errors, error_factory } = require('./common');

const {ResponseError} = require('./exceptions');

const service_fault_pb = require('../bosdyn/api/service_fault_pb');
const fault_service_grpc_pb = require('../bosdyn/api/fault_service_grpc_pb');

class FaultResponseError extends ResponseError {
	constructor(msg){
		super(msg);
		this.name = 'FaultResponseError';
	}
};

class ServiceFaultAlreadyExistsError extends FaultResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ServiceFaultAlreadyExistsError';
	}
};

class ServiceFaultDoesNotExistError extends FaultResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ServiceFaultDoesNotExistError';
	}
};

/**
* Client for the Fault service.
* @class FaultClient
* @extends BaseClient
*/
class FaultClient extends BaseClient {

	static default_service_name = 'fault';
    static service_type = 'bosdyn.api.FaultService';

    /**
    * Create an instance of FaultClient's class.
    * @param {string} [name=null]
    */
    constructor(name=null){
    	super(fault_service_grpc_pb.FaultServiceClient, name);
    }

    /**
    * Broadcast a new service fault through the robot.
    * @param {service_fault_pb.ServiceFault} service_fault Populated fault message to broadcast.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {service_fault_pb.TriggerServiceFaultResponse} An instance of bosdyn.api.TriggerServiceFaultResponse
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {ServiceFaultAlreadyExistsError} The service fault already exists.
    * @throws {FaultResponseError} Something went wrong during the fault trigger.
    */
    async trigger_service_fault(service_fault, args){
        const req = new service_fault_pb.TriggerServiceFaultRequest().setFault(service_fault);
        return await this.call(this._stub.triggerServiceFault, req, null, _trigger_service_fault_error, args);
    }

    /**
    * Broadcast a new service fault through the robot asynchronously.
    * @param {service_fault_pb.ServiceFault} service_fault Populated fault message to broadcast.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {service_fault_pb.TriggerServiceFaultResponse} An instance of bosdyn.api.TriggerServiceFaultResponse
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {ServiceFaultAlreadyExistsError} The service fault already exists.
    * @throws {FaultResponseError} Something went wrong during the fault trigger.
    */
    trigger_service_fault_async(service_fault, args){
        const req = new service_fault_pb.TriggerServiceFaultRequest().setFault(service_fault);
        return this.call_async(this._stub.triggerServiceFault, req, null, _trigger_service_fault_error, args);
    }

    /**
    * Clear a service fault from the robot state.
    * @param {service_fault_pb.ServiceFaultId} service_fault_id ServiceFault to clear.
    * @param {boolean} [clear_all_service_faults=false] Clear all faults associated with the service name.
    * @param {boolean} [clear_all_payload_faults=false] Clear all faults associated with the payload guid.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {service_fault_pb.ClearServiceFaultResponse} An instance of bosdyn.api.ClearServiceFaultResponse
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {ServiceFaultDoesNotExistError} The service fault does not exist in active service faults.
    * @throws {FaultResponseError} Something went wrong during the fault clear.
    */
    async clear_service_fault(service_fault_id, clear_all_service_faults = false, clear_all_payload_faults = false, args){
        const req = new service_fault_pb.ClearServiceFaultRequest()
        .setFaultId(service_fault_id)
        .setClearAllServiceFaults(clear_all_service_faults)
        .setClearAllPayloadFaults(clear_all_payload_faults);
        return await this.call(this._stub.clearServiceFault, req, null, _clear_service_fault_error, args);
    }

    /**
    * Clear a service fault from the robot state asynchronously.
    * @param {service_fault_pb.ServiceFaultId} service_fault_id ServiceFault to clear.
    * @param {boolean} [clear_all_service_faults=false] Clear all faults associated with the service name.
    * @param {boolean} [clear_all_payload_faults=false] Clear all faults associated with the payload guid.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {service_fault_pb.ClearServiceFaultResponse} An instance of bosdyn.api.ClearServiceFaultResponse
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {ServiceFaultDoesNotExistError} The service fault does not exist in active service faults.
    * @throws {FaultResponseError} Something went wrong during the fault clear.
    */
    clear_service_fault_async(service_fault_id, clear_all_service_faults = false, clear_all_payload_faults = false, args){
        var req = new service_fault_pb.ClearServiceFaultRequest()
        .setFaultId(service_fault_id)
        .setClearAllServiceFaults(clear_all_service_faults)
        .setClearAllPayloadFaults(clear_all_payload_faults);
        return this.call_async(this._stub.clearServiceFault, req, null, _clear_service_fault_error, args);
    }

};

const _TRIGGER_STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_FAULT_ALREADY_ACTIVE: [ServiceFaultAlreadyExistsError, 'The specified service fault id already exists as an active fault on the robot.']
};

const _CLEAR_STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_FAULT_NOT_ACTIVE: [ServiceFaultDoesNotExistError, 'The specified service fault id does not match any active service faults on the robot.']
};

function _trigger_service_fault_error(response){
    return error_factory(response, response.status, Object.keys(service_fault_pb.TriggerServiceFaultResponse.Status), _TRIGGER_STATUS_TO_ERROR);
}

function _clear_service_fault_error(response){
    return error_factory(response, response.status, Object.keys(service_fault_pb.ClearServiceFaultResponse.Status), _CLEAR_STATUS_TO_ERROR);
}

module.exports = {
	FaultClient,
	FaultResponseError,
	ServiceFaultAlreadyExistsError,
	ServiceFaultDoesNotExistError
};