const lease_pb = require('../../bosdyn/api/lease_pb');
const lease_service_grpc_pb = require('../../bosdyn/api/lease_service_grpc_pb');

const {populate_response_header} = require('../util');

function acquireLease(call, callback){
	console.log(`Nouvelle requete [LEASE] /acquireLease !`);
	let reply = new lease_pb.AcquireLeaseResponse();
	populate_response_header(reply, call.request);

	const lease = new lease_pb.Lease()
	.setResource('body')
	.setEpoch('1638316800')
	.setSequenceList([0, 1, 2, 3])
	.setClientNamesList(['Theo', 'TEST_2']);

	const leaseOwner = new lease_pb.LeaseOwner()
	.setClientName('Theo')
	.setUserName('setUserName');

	reply
	.setStatus(lease_pb.AcquireLeaseResponse.Status.STATUS_OK)
	.setLease(lease)
	.setLeaseOwner(leaseOwner);

	callback(null, reply)
}

function takeLease(call, callback){
	console.log(`Nouvelle requete [LEASE] /takeLease !`);
	let reply = new lease_pb.TakeLeaseResponse();
	populate_response_header(reply, call.request);

	const lease = new lease_pb.Lease()
	.setResource('body')
	.setEpoch('1638316800')
	.setSequenceList([0, 1, 2, 3])
	.setClientNamesList(['Theo', 'TEST_2']);

	const leaseOwner = new lease_pb.LeaseOwner()
	.setClientName('Theo')
	.setUserName('setUserName');

	reply
	.setStatus(lease_pb.TakeLeaseResponse.Status.STATUS_OK)
	.setLease(lease)
	.setLeaseOwner(leaseOwner);

	callback(null, reply);
}

function returnLease(call, callback){
	console.log(`Nouvelle requete [LEASE] /returnLease !`);
	let reply = new lease_pb.ReturnLeaseResponse();
	populate_response_header(reply, call.request);

	reply.setStatus(lease_pb.ReturnLeaseResponse.Status.STATUS_OK);

	callback(null, reply);
}

function retainLease(call, callback){
	console.log(`Nouvelle requete [LEASE] /retainLease !`);
	let reply = new lease_pb.RetainLeaseResponse();
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
	.setStatus(lease_pb.LeaseUseResult.Status.STATUS_OK)
	.setOwner(leaseOwner)
	.setAttemptedLease(lease)
	.setPreviousLease(lease)
	.setLatestKnownLease(lease)
	.setLatestResourcesList([lease]);

	reply.setLeaseUseResult(leaseUseResult);

	callback(null, reply);
}

function listLeases(call, callback){
	console.log(`Nouvelle requete [LEASE] /listLeases !`);
	let reply = new lease_pb.ListLeasesResponse();
	populate_response_header(reply, call.request);

	reply
	.setResourcesList([])
	.setResourceTree();

	callback(null, reply);
}

module.exports = {
	service: lease_service_grpc_pb.LeaseServiceService,
	func: {
		acquireLease,
		takeLease,
		returnLease,
		retainLease,
		listLeases
	}
};