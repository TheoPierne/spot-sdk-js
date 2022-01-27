const robot_command_pb = require('../../bosdyn/api/robot_command_pb');
const robot_command_service_grpc_pb = require('../../bosdyn/api/robot_command_service_grpc_pb');

const lease_pb = require('../../bosdyn/api/lease_pb');

const {populate_response_header} = require('../util');

function robotCommand(call, callback){
	console.log(`Nouvelle requete [COMMAND] ! /robotCommand`);
	let reply = new robot_command_pb.RobotCommandResponse();
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

	reply
	.setStatus(robot_command_pb.RobotCommandResponse.Status.STATUS_OK)
	.setLeaseUseResult(leaseUseResult);

	callback(null, reply);
}

function robotCommandFeedback(call, callback){
	console.log(`Nouvelle requete [COMMAND] ! /robotCommandFeedback`);
	let reply = new robot_command_pb.RobotCommandFeedbackResponse();
	populate_response_header(reply, call.request);

	reply
	.setStatus(robot_command_pb.RobotCommandFeedbackResponse.Status.STATUS_OK)
	.setLeaseUseResult()
	.setMessage()
	.setFeedback()

	callback(null, reply);
}

function clearBehaviorFault(call, callback){
	console.log(`Nouvelle requete [COMMAND] ! /clearBehaviorFault`);

}


module.exports = {
	service: robot_command_service_grpc_pb.RobotCommandServiceService,
	func: {
		robotCommand,
		robotCommandFeedback,
		clearBehaviorFault
	}
};