const robot_command_pb = require('../../bosdyn/api/robot_command_pb');
const robot_command_service_grpc_pb = require('../../bosdyn/api/robot_command_service_grpc_pb');

const lease_pb = require('../../bosdyn/api/lease_pb');
const mobility_command_pb = require('../../bosdyn/api/mobility_command_pb');
const full_body_command_pb = require('../../bosdyn/api/full_body_command_pb');
const synchronized_command_pb = require('../../bosdyn/api/synchronized_command_pb');
const basic_command_pb = require('../../bosdyn/api/basic_command_pb');
const arm_command_pb = require('../../bosdyn/api/arm_command_pb');
const gripper_command_pb = require('../../bosdyn/api/gripper_command_pb');

const {populate_response_header} = require('../util');

const duration = require('google-protobuf/google/protobuf/duration_pb');

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
	.setLeaseUseResult(leaseUseResult)
	.setMessage('TEST_RESPONSE_ROBOT_COMMAND')
	.setRobotCommandId(3);

	callback(null, reply);
}

function robotCommandFeedback(call, callback){
	console.log(`Nouvelle requete [COMMAND] ! /robotCommandFeedback`);
	let reply = new robot_command_pb.RobotCommandFeedbackResponse();
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

	try{

		//// MobilityFeedBack ////

		const se2TrajectoryFeedback = new basic_command_pb.SE2TrajectoryCommand.Feedback()
		.setStatus(basic_command_pb.SE2TrajectoryCommand.Feedback.Status.STATUS_AT_GOAL)
		.setBodyMovementStatus(basic_command_pb.SE2TrajectoryCommand.Feedback.BodyMovementStatus.BODY_STATUS_SETTLED);

		const se2VelocityFeedback = new basic_command_pb.SE2VelocityCommand.Feedback();

		const sitFeedback = new basic_command_pb.SitCommand.Feedback()
		.setStatus(basic_command_pb.SitCommand.Feedback.Status.STATUS_IS_SITTING);

		const standFeedback = new basic_command_pb.StandCommand.Feedback()
		.setStatus(basic_command_pb.StandCommand.Feedback.Status.STATUS_IS_STANDING);

		const stanceFeedback = new basic_command_pb.StanceCommand.Feedback()
		.setStatus(basic_command_pb.StanceCommand.Feedback.Status.STATUS_STANCED);

		const stopFeedback = new basic_command_pb.StopCommand.Feedback();

		const followArmFeedback = new basic_command_pb.FollowArmCommand.Feedback();

		const mobilityFeedback = new mobility_command_pb.MobilityCommand.Feedback()
		.setSe2TrajectoryFeedback(se2TrajectoryFeedback)
		.setSe2VelocityFeedback(se2VelocityFeedback)
		.setSitFeedback(sitFeedback)
		.setStandFeedback(standFeedback)
		.setStanceFeedback(stanceFeedback)
		.setStopFeedback(stopFeedback)
		.setFollowArmFeedback(followArmFeedback)
		.setStatus(basic_command_pb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING);

		//// FullBodyFeedBack ////
		
		const freezeFeedback = new basic_command_pb.FreezeCommand.Feedback();

		const selfrightFeedback = new basic_command_pb.SelfRightCommand.Feedback();

		const safePowerOffFeedback = new basic_command_pb.SafePowerOffCommand.Feedback()
		.setStatus(basic_command_pb.SafePowerOffCommand.Feedback.Status.STATUS_IN_PROGRESS);

		const fullBodyFeedback = new full_body_command_pb.FullBodyCommand.Feedback()
		.setStopFeedback(stopFeedback)
		.setFreezeFeedback(freezeFeedback)
		.setSelfrightFeedback(selfrightFeedback)
		.setSafePowerOffFeedback()
		.setBatteryChangePoseFeedback()
		.setPayloadEstimationFeedback()
		.setConstrainedManipulationFeedback()
		.setStatus(basic_command_pb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING);

		//// ArmCommandFeedBack ////
		
		const armCartesianFeedback = new arm_command_pb.ArmCartesianCommand.Feedback()
		.setStatus(arm_command_pb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_COMPLETE);

		const armJointMoveFeedback = new arm_command_pb.ArmJointMoveCommand.Feedback()
		.setStatus(arm_command_pb.ArmJointMoveCommand.Feedback.Status.STATUS_COMPLETE)
		.setPlannerStatus(arm_command_pb.ArmJointMoveCommand.Feedback.PlannerStatus.PLANNER_STATUS_SUCCESS)
		.setPlannedPointsList([])
		.setTimeToGoal(new duration.Duration().setSeconds(10).setNanos(0));

		const namedArmPositionFeedback = new arm_command_pb.NamedArmPositionsCommand.Feedback()
		.setStatus(arm_command_pb.NamedArmPositionsCommand.Feedback.Status.STATUS_COMPLETE);

		const armVelocityFeedback = new arm_command_pb.ArmVelocityCommand.Feedback();

		const armGazeFeedback = new arm_command_pb.GazeCommand.Feedback()
		.setStatus(arm_command_pb.GazeCommand.Feedback.Status.STATUS_TRAJECTORY_COMPLETE)
		.setGazingAtTarget(false)
		.setGazeToTargetRotationMeasured(0)
		.setHandPositionAtGoal(true)
		.setHandDistanceToGoalMeasured(1.0)
		.setHandRollAtGoal(true)
		.setHandRollToTargetRollMeasured(1.0);

		const armStopFeedback = new arm_command_pb.ArmStopCommand.Feedback();

		console.log(armStopFeedback.toObject());

		const armDragFeedback = new basic_command_pb.ArmDragCommand.Feedback()
		.setStatus(basic_command_pb.ArmDragCommand.Feedback.Status.STATUS_DRAGGING);

		const armCommandFeedback = new arm_command_pb.ArmCommand.Feedback()
		.setArmCartesianFeedback(armCartesianFeedback)
		.setArmJointMoveFeedback(armJointMoveFeedback)
		.setNamedArmPositionFeedback(namedArmPositionFeedback)
		.setArmVelocityFeedback(armVelocityFeedback)
		.setArmGazeFeedback(armGazeFeedback)
		.setArmStopFeedback(armStopFeedback)
		.setArmDragFeedback(armDragFeedback)
		.setStatus(robot_command_pb.RobotCommandFeedbackResponse.Status.STATUS_PROCESSING);

		console.log(armCommandFeedback.toObject(), armCommandFeedback.getArmStopFeedback())

		//// SynchronizedFeedBack ////

		const clawGripperFeedback = new gripper_command_pb.ClawGripperCommand.Feedback()
		.setStatus(gripper_command_pb.ClawGripperCommand.Feedback.Status.STATUS_AT_GOAL);

		const gripperCommandFeedback = new gripper_command_pb.GripperCommand.Feedback()
		.setClawGripperFeedback(clawGripperFeedback)
		.setStatus(basic_command_pb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING);

		const synchronizedFeedback = new synchronized_command_pb.SynchronizedCommand.Feedback()
		.setArmCommandFeedback(armCommandFeedback)
		.setMobilityCommandFeedback(mobilityFeedback)
		.setGripperCommandFeedback(gripperCommandFeedback);

		//// Global FeedBack ////

		// console.log(synchronizedFeedback.toObject())

		const feedBack = new robot_command_pb.RobotCommandFeedback()
		.setFullBodyFeedback(fullBodyFeedback)
		.setSynchronizedFeedback(synchronizedFeedback)
		.setMobilityFeedback(mobilityFeedback);

		reply
		.setStatus(robot_command_pb.RobotCommandFeedbackResponse.Status.STATUS_PROCESSING)
		.setLeaseUseResult(leaseUseResult)
		.setMessage('TEST_MESSAGE')
		.setFeedback(feedBack);

		// console.log(feedBack.toObject())

		callback(null, reply);
	}catch(e){
		console.log(e);
	}
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