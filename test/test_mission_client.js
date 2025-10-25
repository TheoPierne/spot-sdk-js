'use strict';

const assert = require('node:assert');
const test = require('node:test');

const grpc = require('@grpc/grpc-js');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const helpers = require('./helpers');

const missionPb = require('../src/bosdyn/api/mission/mission_pb');
const { MissionServiceClient, MissionServiceService } = require('../src/bosdyn/api/mission/mission_service_grpc_pb');
const nodesPb = require('../src/bosdyn/api/mission/nodes_pb');

const { ValueError } = require('../src/bosdyn-client/exceptions');
const {
  MissionClient,
  InvalidAnswerCode,
  InvalidQuestionId,
  QuestionAlreadyAnswered,
  NoMissionError,
  CompilationError,
  ValidationError,
  NoMissionPlayingError,
} = require('../src/bosdyn-mission/client');

const INVALID_ANSWER_CODE = 100;
const INVALID_QUESTION_ID = -1;

class MockMissionServicer extends MissionServiceClient {
  constructor() {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this.questionId = 0;
    this.activeQuestions = {};
    this.answeredQuestions = {};
    this.source = 'Mock';
    this.playMissionResponseStatus = missionPb.PlayMissionResponse.Status.STATUS_OK;
    this.loadMissionResponseStatus = missionPb.LoadMissionResponse.Status.STATUS_OK;
    this.restartMissionResponseStatus = missionPb.RestartMissionResponse.Status.STATUS_OK;
    this.pauseMissionResponseStatus = missionPb.PauseMissionResponse.Status.STATUS_OK;
  }

  getState(call, callback) {
    const question = new missionPb.Question()
      .setId(this.questionId)
      .setSource(this.source)
      .setText('Answer me these questions three');

    const options = [
      'What is your name',
      'What is your quest',
      'What is the air-speed velocity of an unladen swallow',
    ].map((text, index) => new nodesPb.Prompt.Option().setText(text).setAnswerCode(index));

    question.setOptionsList(options);

    this.activeQuestions[this.questionId] = question;
    this.questionId += 1;

    const response = new missionPb.GetStateResponse().setState(new missionPb.State().setQuestionsList([question]));

    callback(null, response);
  }

  answerQuestion({ request }, callback) {
    const response = new missionPb.AnswerQuestionResponse();
    if (request.getQuestionId() in this.answeredQuestions) {
      response.setStatus(missionPb.AnswerQuestionResponse.Status.STATUS_ALREADY_ANSWERED);
      return callback(null, response);
    }
    if (!(request.getQuestionId() in this.activeQuestions)) {
      response.setStatus(missionPb.AnswerQuestionResponse.Status.STATUS_INVALID_QUESTION_ID);
      return callback(null, response);
    }
    const question = this.activeQuestions[request.getQuestionId()];
    if (
      !question
        .getOptionsList()
        .map(option => option.getAnswerCode())
        .includes(request.getCode())
    ) {
      response.setStatus(missionPb.AnswerQuestionResponse.Status.STATUS_INVALID_CODE);
      return callback(null, response);
    }
    this.answeredQuestions[request.getQuestionId()] = request;
    delete this.activeQuestions[request.getQuestionId()];
    response.setStatus(missionPb.AnswerQuestionResponse.Status.STATUS_OK);
    return callback(null, response);
  }

  playMission(call, callback) {
    const response = new missionPb.PlayMissionResponse().setStatus(this.playMissionResponseStatus);
    callback(null, response);
  }

  restartMission(call, callback) {
    const response = new missionPb.RestartMissionResponse().setStatus(this.restartMissionResponseStatus);
    callback(null, response);
  }

  pauseMission(call, callback) {
    const response = new missionPb.PauseMissionResponse().setStatus(this.pauseMissionResponseStatus);
    callback(null, response);
  }

  loadMission(call, callback) {
    const response = new missionPb.LoadMissionResponse().setStatus(this.loadMissionResponseStatus);
    callback(null, response);
  }

  resetAnsweredQuestions() {
    this.answeredQuestions = {};
  }
}

function _setup() {
  const client = new MissionClient();
  client._timesyncEndpoint = {
    robotTimestampFromLocalSecs: () => new Timestamp().setSeconds(12345).setNanos(6789),
  };
  const service = new MockMissionServicer();
  const server = helpers.setupClientAndService(client, {
    servicer: MissionServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_simple', async () => {
  const { client, server } = _setup();

  // Test the getState. Should return the question state from the mock.
  const res = await client.getState();
  assert.ok(res.getQuestionsList().length === 1);
  assert.ok(res.getQuestionsList()[0].getOptionsList().length === 3);

  // Answer a question with a valid code.
  const resp = await client.answerQuestion(
    res.getQuestionsList()[0].getId(),
    res.getQuestionsList()[0].getOptionsList()[2].getAnswerCode(),
  );

  assert.ok(resp.getStatus() === missionPb.AnswerQuestionResponse.Status.STATUS_OK);
  server.forceShutdown();
});

test('test_errors', async () => {
  const { client, service, server } = _setup();
  const resp = await client.getState();

  const questionId = resp.getQuestionsList()[0].getId();
  const answerCode = resp.getQuestionsList()[0].getOptionsList()[2].getAnswerCode();

  await assert.rejects(() => client.answerQuestion(questionId, INVALID_ANSWER_CODE), InvalidAnswerCode);
  await assert.rejects(() => client.answerQuestion(INVALID_QUESTION_ID, answerCode), InvalidQuestionId);

  // Actually answer the question so we can test answering the same question more than once.
  await client.answerQuestion(questionId, answerCode);

  // Doesn't matter what the answer code is
  await assert.rejects(() => client.answerQuestion(questionId, 0), QuestionAlreadyAnswered);

  // Can't specify both pastTicks and lowerTickBound.
  await assert.rejects(() => client.getState(null, 2, 1), ValueError);

  // Run through misc error codes.
  service.playMissionResponseStatus = missionPb.PlayMissionResponse.Status.STATUS_NO_MISSION;
  await assert.rejects(() => client.playMission(Date.now() / 1000, []), NoMissionError);

  service.loadMissionResponseStatus = missionPb.LoadMissionResponse.Status.STATUS_COMPILE_ERROR;
  await assert.rejects(() => client.loadMission(null, []), CompilationError);

  service.loadMissionResponseStatus = missionPb.LoadMissionResponse.Status.STATUS_VALIDATE_ERROR;
  await assert.rejects(() => client.loadMission(null, []), ValidationError);

  service.restartMissionResponseStatus = missionPb.RestartMissionResponse.Status.STATUS_NO_MISSION;
  await assert.rejects(() => client.restartMission(Date.now() / 1000, []), NoMissionError);

  service.restartMissionResponseStatus = missionPb.RestartMissionResponse.Status.STATUS_VALIDATE_ERROR;
  await assert.rejects(() => client.restartMission(Date.now() / 1000, []), ValidationError);

  service.pauseMissionResponseStatus = missionPb.PauseMissionResponse.Status.STATUS_NO_MISSION_PLAYING;
  await assert.rejects(() => client.pauseMission(), NoMissionPlayingError);

  server.forceShutdown();
});
