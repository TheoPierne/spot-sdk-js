'use strict';

const ir_enable_disable_pb = require('../../bosdyn/api/ir_enable_disable_pb');
const ir_enable_disable_service_grpc_pb = require('../../bosdyn/api/ir_enable_disable_service_grpc_pb');

const {populate_response_header} = require('../util');
const {REQUEST_ON} = ir_enable_disable_pb.IREnableDisableRequest.Request;

let isIrEnable = true;

function iREnableDisable(call, callback){
	console.log(`Nouvelle requete [IR_ENABLE_DISABLE] /iREnableDisable !`);
	const reply = new ir_enable_disable_pb.IREnableDisableResponse();
	populate_response_header(reply, call.request);

	isIrEnable = call.request.getRequest() == REQUEST_ON ? true : false;

	callback(null, reply);
}

module.exports = {
	service: ir_enable_disable_service_grpc_pb.IREnableDisableServiceService,
	func: {
		iREnableDisable
	}
};