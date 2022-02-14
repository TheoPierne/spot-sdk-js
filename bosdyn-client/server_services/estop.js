'use strict';

const estop_pb = require('../../bosdyn/api/estop_pb');
const estop_service_grpc_pb = require('../../bosdyn/api/estop_service_grpc_pb');

const {populate_response_header} = require('../util');

let robotStopped = false;

function registerEstopEndpoint(call, callback){
	console.log(`Nouvelle requete [ESTOP] /registerEstopEndpoint !`);
	let reply = new estop_pb.RegisterEstopEndpointResponse();
	populate_response_header(reply, call.request);

	let endpoint = new estop_pb.EstopEndpoint()
	.setRole(call.request.getTargetEndpoint().getRole());

	reply
	.setRequest(call.request)
	.setStatus(1)
	.setNewEndpoint(endpoint);

	callback(null, reply);
}

function getEstopSystemStatus(call, callback){
	console.log(`Nouvelle requete [ESTOP] /getEstopSystemStatus !`);
	let reply = new estop_pb.GetEstopSystemStatusResponse();
	populate_response_header(reply, call.request);

	let status = new estop_pb.EstopSystemStatus()
	.setEndpointsList([new estop_pb.EstopEndpointWithStatus()])
	.setStopLevel(estop_pb.EstopStopLevel.ESTOP_LEVEL_CUT)
	.setStopLevelDetails('TEST_LEVEL');

	reply.setStatus(status);

	callback(null, reply);
}



module.exports = {
	service: estop_service_grpc_pb.EstopServiceService,
	func: {
		registerEstopEndpoint,
		getEstopSystemStatus
	}
};