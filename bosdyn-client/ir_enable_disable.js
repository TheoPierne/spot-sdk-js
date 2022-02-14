'use strict';

const {BaseClient, common_header_errors} = require('./common');
const ir_enable_disable_pb = require('../bosdyn/api/ir_enable_disable_pb');
const ir_enable_disable_service_grpc_pb = require('../bosdyn/api/ir_enable_disable_service_grpc_pb');

const {REQUEST_ON, REQUEST_OFF} = ir_enable_disable_pb.IREnableDisableRequest.Request;

class IREnableDisableServiceClient extends BaseClient {

	static default_service_name = 'ir-enable-disable-service';
	static service_type = 'bosdyn.api.IREnableDisableService';

	constructor(){
		super(ir_enable_disable_service_grpc_pb.IREnableDisableServiceClient);
	}

	async set_ir_enabled(enable, args){
		const req = enable ? REQUEST_ON : REQUEST_OFF;
		const request = new ir_enable_disable_pb.IREnableDisableRequest().setRequest(req);

		return await this.call(this._stub.iREnableDisable, request, null, common_header_errors, args);
	}

	set_ir_enabled_async(enable, args){
		const req = enable ? REQUEST_ON : REQUEST_OFF;
		const request = new ir_enable_disable_pb.IREnableDisableRequest().setRequest(req);

		return this.call_async(this._stub.iREnableDisable, request, null, common_header_errors, args);
	}

};

module.exports = {
	IREnableDisableServiceClient
};