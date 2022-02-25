'use strict';

const time = require('google-protobuf/google/protobuf/timestamp_pb');

const mission_pb = require('../../bosdyn/api/mission/mission_pb');
const mission_service_grpc_pb = require('../../bosdyn/api/mission/mission_service_grpc_pb');
const util_pb = require('../../bosdyn/api/mission/util_pb');
const nodes_pb = require('../../bosdyn/api/mission/nodes_pb');
const lease_pb = require('../../bosdyn/api/lease_pb');

const {populate_response_header} = require('../util');

function loadMission(call, callback){
	console.log(`Nouvelle requete [ROBOT MISSION] /loadMission !`);
	const reply = new mission_pb.LoadMissionResponse();
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

	const userData = new util_pb.UserData()
	.setId(117)
	.setBytestring([1, 2, 4]);

	const root = new mission_pb.NodeInfo()
	.setId(1)
	.setName('TEST_NODE_INFO_NAME')
	.setUserData(userData)
	.addChildren(root);

	const missionInfo = new mission_pb.MissionInfo()
	.setId(123)
	.setRoot(root);

	reply
	.setStatus(mission_pb.LoadMissionResponse.Status.STATUS_OK)
	.addLeaseUseResults(leaseUseResult)
	.setMissionInfo(missionInfo)
	.setFailedNodesList([]);

	callback(null, reply);
}

function getState(call, callback){
	console.log(`Nouvelle requete [ROBOT MISSION] /getState !`);
	let reply = new mission_pb.GetStateResponse();
	populate_response_header(reply, call.request);

	const options = new nodes_pb.Prompt.Option()
	.setText('TEST_OPTION')
	.setAnswerCode('TEST_ANSWER_CODE');

	const optionsAnswered = new nodes_pb.Prompt.Option()
	.setText('TEST_OPTION_ANSWERED')
	.setAnswerCode('TEST_ANSWER_CODE_ANSWERED');

	const question = new mission_pb.Question()
	.setId(1)
	.setSource('TEST_SOURCE')
	.setText('TEST_TEXT')
	.setOptionsList([options])
	.setForAutonomousProcessing(true);

	const answeredQuestion = new mission_pb.Question()
	.setId(1)
	.setSource('TEST_SOURCE_ANSWERED')
	.setText('TEST_TEXT_ANSWERED')
	.setOptionsList([optionsAnswered])
	.setForAutonomousProcessing(true);

	const answeredQuestions = new mission_pb.State.AnsweredQuestion()
	.setQuestion(answeredQuestion)
	.setAcceptedAnswerCode(1);

	const history = new mission_pb.State.NodeStatesAtTick()
	.setTickCounter(10)
	.setTickStartTimestamp(new time.Timestamp().fromDate(new Date()))

	const state = new mission_pb.State()
	.setQuestionsList([question])
	.setAnsweredQuestionsList([answeredQuestions])
	.setHistoryList([history])
	.setStatus(mission_pb.State.Status.STATUS_SUCCESS)
	.setError('TEST_ERROR')
	.setTickCounter(10)
	.setMissionId(123);

	reply.setState(state);

	console.log(reply.toObject())

	callback(null, reply);
}


module.exports = {
	service: mission_service_grpc_pb.MissionServiceService,
	func: {
		loadMission,
		getState
	}
};