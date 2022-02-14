'use strict';

const auth_pb = require('../../bosdyn/api/auth_pb');
const auth_service_grpc_pb = require('../../bosdyn/api/auth_service_grpc_pb');

const {populate_response_header} = require('../util');

function getAuthToken(call, callback){
	console.log(`Nouvelle requete [AUTH] /getAuthToken !`);
	let reply = new auth_pb.GetAuthTokenResponse();
	populate_response_header(reply, call.request);

	reply.setStatus(1).setToken('TEST_TOKEN');

	callback(null, reply);
}

module.exports = {
	service: auth_service_grpc_pb.AuthServiceService,
	func: {
		getAuthToken
	}
};