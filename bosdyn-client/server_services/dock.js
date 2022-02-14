'use strict';

const docking_pb = require('../../bosdyn/api/docking/docking_pb');
const docking_service_grpc_pb = require('../../bosdyn/api/docking/docking_service_grpc_pb');

const lease_pb = require('../../bosdyn/api/lease_pb');

const {populate_response_header} = require('../util');

function dockingCommand(call, callback){
	console.log(`Nouvelle requete [DOCK] /dockingCommand !`);
	let reply = new docking_pb.DockingCommandResponse();
	populate_response_header(reply, call.request);

	const lease = new lease_pb.Lease()
	.setResource('body')
	.setEpoch('1638316800')
	.setSequenceList([0, 1, 2, 3])
	.setClientNamesList(['Theo', 'TEST_2']);

	const leaseOwner = new lease_pb.LeaseOwner()
	.setClientName('Theo')
	.setUserName('setUserName');

	const leaseUseResult = new lease_pb.LeaseUseResult()
	.setStatus(1)
	.setOwner(leaseOwner)
	.setAttemptedLease(lease)
	.setPreviousLease(lease)
	.setLatestKnownLease(lease)
	.setLatestResourcesList([lease]);

	reply
	.setLeaseUseResult(leaseUseResult)
	.setStatus(1)
	.setDockingCommandId(123);

	callback(null, reply);
}

function dockingCommandFeedback(call, callback){
	console.log(`Nouvelle requete [DOCK] /dockingCommandFeedback !`);
	let reply = new docking_pb.DockingCommandFeedbackResponse();
	populate_response_header(reply, call.request);

	const lease = new lease_pb.Lease()
	.setResource('body')
	.setEpoch('1638316800')
	.setSequenceList([0, 1, 2, 3])
	.setClientNamesList(['Theo', 'TEST_2']);

	const leaseOwner = new lease_pb.LeaseOwner()
	.setClientName('Theo')
	.setUserName('setUserName');

	const leaseUseResult = new lease_pb.LeaseUseResult()
	.setStatus(1)
	.setOwner(leaseOwner)
	.setAttemptedLease(lease)
	.setPreviousLease(lease)
	.setLatestKnownLease(lease)
	.setLatestResourcesList([lease]);

	reply
	.setLeaseUseResult(leaseUseResult)
	.setStatus(2);

	callback(null, reply);
}

module.exports = {
	service: docking_service_grpc_pb.DockingServiceService,
	func: {
		dockingCommand,
		dockingCommandFeedback
	}
};