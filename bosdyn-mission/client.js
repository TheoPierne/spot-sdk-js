'use strict';

const timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb');
const wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb');

const {
	BaseClient, 
	handle_lease_use_result_errors,
	common_header_errors, 
	handle_common_header_errors,
	handle_unset_status_error, error_factory
} = require('../bosdyn-client/common');
const {ValueError, ResponseError, TimeSyncRequired} = require('../bosdyn-client/exceptions');

const mission_pb = require('../bosdyn/api/mission/mission_pb');
const mission_service_grpc_pb = require('../bosdyn/api/mission/mission_service_grpc_pb');

class MissionResponseError extends ResponseError {
	constructor(res, msg){
		super(res, msg);
		this.name = 'MissionResponseError';
	}
};

class InvalidQuestionId extends MissionResponseError {
	constructor(res, msg){
		super(res, msg);
		this.name = 'InvalidQuestionId';
	}
};

class InvalidAnswerCode extends MissionResponseError {
	constructor(res, msg){
		super(res, msg);
		this.name = 'InvalidAnswerCode';
	}
};

class QuestionAlreadyAnswered extends MissionResponseError {
	constructor(res, msg){
		super(res, msg);
		this.name = 'QuestionAlreadyAnswered';
	}
};

class CompilationError extends MissionResponseError {
	constructor(res, msg){
		super(res, msg);
		this.name = 'CompilationError';
	}
};

class ValidationError extends MissionResponseError {
	constructor(res, msg){
		super(res, msg);
		this.failed_nodes = response.getFailedNodesList();
		this.name = 'ValidationError';
	}

	toString(){
		return `Mission validation failed with: ${this.failed_nodes.map(x => x.getError()).join('; ')}`
	}
};

class NoMissionError extends MissionResponseError {
	constructor(res, msg){
		super(res, msg);
		this.name = 'NoMissionError';
	}
};

class NoMissionPlayingError extends MissionResponseError {
	constructor(res, msg){
		super(res, msg);
		this.name = 'NoMissionPlayingError';
	}
};

class MissionClient extends BaseClient {

	static default_service_name = 'robot-mission';
	static service_type = 'bosdyn.api.mission.MissionService';

	constructor(){
		super(mission_service_grpc_pb.MissionServiceClient);
		this._timesync_endpoint = null;
	}

	async update_from(other){
		super.update_from(other);
		try{
			this._timesync_endpoint = (await other.time_sync).endpoint;
		}catch(e){

		}

	}

	get timesync_endpoint(){
		if(!this._timesync_endpoint){
			throw new TimeSyncRequired();
		}
		return this._timesync_endpoint;
	}

	async get_state(upper_tick_bound = null, lower_tick_bound = null, past_ticks = null, args){
		const req = this._get_state_request(upper_tick_bound, lower_tick_bound, past_ticks);
		return await this.call(this._stub.getState, req, _get_state_value, common_header_errors, args);
	}

	get_state_async(upper_tick_bound = null, lower_tick_bound = null, past_ticks = null, args){
		const req = this._get_state_request(upper_tick_bound, lower_tick_bound, past_ticks);
		return this.call_async(this._stub.getState, req, _get_state_value, common_header_errors, args);
	}

	async answer_question(question_id, code, args){
		const req = this._answer_question_request(question_id, code);
		return await this.call(this._stub.answerQuestion, req, null, _answer_question_error_from_response, args);
	}

	answer_question_async(question_id, code, args){
		const req = this._answer_question_request(question_id, code);
		return this.call_async(this._stub.answerQuestion, req, null, _answer_question_error_from_response, args);
	}

	async load_mission(root, leases, args){
		const req = this._load_mission_request(root, leases);
		return await this.call(this._stub.loadMission, req, null, _load_mission_error_from_response, args);
	}

	load_mission_async(root, leases, args){
		const req = this._load_mission_request(root, leases);
		return this.call_async(this._stub.loadMission, req, null, _load_mission_error_from_response, args);
	}

	async load_mission_as_chunks(root, leases, data_chunk_byte_size = 1_000 * 1_000, args){
		const req = this._load_mission_request(root, leases);
		return await this.call(this._stub.loadMissionAsChunks, BaseClient.chunk_message(req, data_chunk_byte_size), null, _load_mission_error_from_response, args);
	}

	load_mission_as_chunks_async(root, leases, data_chunk_byte_size = 1_000 * 1_000, args){
		const req = this._load_mission_request(root, leases);
		return this.call_async(this._stub.loadMissionAsChunks, BaseClient.chunk_message(req, data_chunk_byte_size), null, _load_mission_error_from_response, args);
	}

	async play_mission(pause_time_secs, leases, settings = null, args){
		const req = this._play_mission_request(pause_time_secs, leases, settings);
		return await this.call(this._stub.playMission, req, null, _play_mission_error_from_response, args);
	}

	play_mission_async(pause_time_secs, leases, settings = null, args){
		const req = this._play_mission_request(pause_time_secs, leases, settings);
		return this.call_async(this._stub.playMission, req, null, _play_mission_error_from_response, args);
	}

	async restart_mission(pause_time_secs, leases, settings = null, args){
		const req = this._restart_mission_request(pause_time_secs, leases, settings);
		return await this.call(this._stub.restartMission, req, null, _restart_mission_error_from_response, args);
	}

	restart_mission_async(pause_time_secs, leases, settings = null, args){
		const req = this._restart_mission_request(pause_time_secs, leases, settings);
		return this.call_async(this._stub.restartMission, req, null, _restart_mission_error_from_response, args);
	}

	async pause_mission(args){
		const req = this._pause_mission_request();
		return await this.call(this._stub.pauseMission, req, null, _pause_mission_error_from_response, args);
	}

	pause_mission_async(args){
		const req = this._pause_mission_request();
		return this.call_async(this._stub.pauseMission, req, null, _pause_mission_error_from_response, args);
	}

	async stop_mission(args){
		const req = this._stop_mission_request();
		return await this.call(this._stub.StopMission, req, null, _stop_mission_error_from_response, args);
	}

	stop_mission_async(args){
		const req = this._stop_mission_request();
		return this.call_async(this._stub.StopMission, req, null, _stop_mission_error_from_response, args);
	}

	async get_info(args){
		const req = this._get_info_request();
		return await this.call(this._stub.getInfo, req, _get_info_value, common_header_errors, args);
	}

	get_info_async(args){
		const req = this._get_info_request();
		return this.call_async(this._stub.getInfo, req, _get_info_value, common_header_errors, args);
	}

	async get_mission(args){
		const req = this._get_mission_request();
		return await this.call(this._stub.getMission, req, null, common_header_errors, args);
	}

	get_mission_async(args){
		const req = this._get_mission_request();
		return this.call_async(this._stub.getMission, req, null, common_header_errors, args);
	}

	_get_state_request(upper_tick_bound, lower_tick_bound, past_ticks){
		if(lower_tick_bound && past_ticks) throw new ValueError('Cannot specify both lower_tick_bound and past_ticks');

		const request = new mission_pb.GetStateRequest()
		.setHistoryLowerTickBound(lower_tick_bound)
		.setHistoryPastTicks(past_ticks);

		if(upper_tick_bound) request.setHistoryUpperTickBound(new wrappers_pb.Int64Value().setValue(upper_tick_bound));

		return request;
	}

	_answer_question_request(question_id, code){
		return new mission_pb.AnswerQuestionRequest().setQuestionId(question_id).setCode(code);
	}

	_load_mission_request(root, leases){
		const request = new mission_pb.LoadMissionRequest().setRoot(root);

		for(const lease of leases){
			request.addLeases(lease.lease_proto);
		}

		return request;
	}

	_play_mission_request(pause_time_secs, leases, settings){
		const request = new mission_pb.PlayMissionRequest()
		.setPauseTime(this.timesync_endpoint.robot_timestamp_from_local_secs(pause_time_secs))
		.setSettings(settings);

		for(const lease of leases){
			request.addLeases(lease.lease_proto);
		}

		return request;
	}

	_restart_mission_request(self, pause_time_secs, leases, settings){
		const request = new mission_pb.RestartMissionRequest()
		.setPauseTime(this.timesync_endpoint.robot_timestamp_from_local_secs(pause_time_secs))
		.setSettings(settings);

		for(const lease of leases){
			request.addLeases(lease.lease_proto);
		}

		return request;
	}

	_pause_mission_request(){
		return new mission_pb.PauseMissionRequest();
	}

	_stop_mission_request(){
		return new mission_pb.StopMissionRequest();
	}

	_get_info_request(){
		return new mission_pb.GetInfoRequest();
	}

	_get_mission_request(){
		return new mission_pb.GetMissionRequest();
	}

};

function _get_state_value(response){
	return response.getState();
}

function _get_info_value(response){
	if(response.hasMissionInfo()){
		return response.getMissionInfo();
	}
	return null;
}

const _ANSWER_QUESTION_STATUS_TO_ERROR = {
	[mission_pb.AnswerQuestionResponse.Status.STATUS_OK]: [null, null],
	[mission_pb.AnswerQuestionResponse.Status.STATUS_INVALID_QUESTION_ID]: [InvalidQuestionId, 'The indicated question is unknown.'],
	[mission_pb.AnswerQuestionResponse.Status.STATUS_INVALID_CODE]: [InvalidAnswerCode, 'The indicated answer code is invalid for the specified question.'],
	[mission_pb.AnswerQuestionResponse.Status.STATUS_ALREADY_ANSWERED]: [QuestionAlreadyAnswered, 'The indicated question was already answered.']
}

const _LOAD_MISSION_STATUS_TO_ERROR = {
	[mission_pb.LoadMissionResponse.Status.STATUS_OK]: [null, null],
	[mission_pb.LoadMissionResponse.Status.STATUS_VALIDATE_ERROR]: [ValidationError, null],
	[mission_pb.LoadMissionResponse.Status.STATUS_COMPILE_ERROR]: [CompilationError, null]
}

const _PLAY_MISSION_STATUS_TO_ERROR = {
	[mission_pb.PlayMissionResponse.Status.STATUS_OK]: [null, null],
	[mission_pb.PlayMissionResponse.Status.STATUS_NO_MISSION]: [NoMissionError, null]
}

const _PAUSE_MISSION_STATUS_TO_ERROR = {
	[mission_pb.PauseMissionResponse.Status.STATUS_OK]: [null, null],
	[mission_pb.PauseMissionResponse.Status.STATUS_NO_MISSION_PLAYING]: [NoMissionPlayingError, null]
}

const _STOP_MISSION_STATUS_TO_ERROR = {
	[mission_pb.StopMissionResponse.Status.STATUS_OK]: [null, null],
	[mission_pb.StopMissionResponse.Status.STATUS_NO_MISSION_PLAYING]: [NoMissionPlayingError, null]
}

const _RESTART_MISSION_STATUS_TO_ERROR = {
	[mission_pb.RestartMissionResponse.Status.STATUS_OK]: [null, null],
	[mission_pb.RestartMissionResponse.Status.STATUS_NO_MISSION]: [NoMissionError, null],
	[mission_pb.RestartMissionResponse.Status.STATUS_VALIDATE_ERROR]: [ValidationError, null]
}

function _answer_question_error_from_response(response){
	return error_factory(response, response.getStatus(), Object.keys(mission_pb.AnswerQuestionResponse.Status), _ANSWER_QUESTION_STATUS_TO_ERROR);
}

function _load_mission_error_from_response(response){
    return error_factory(response, response.getStatus(), Object.keys(mission_pb.LoadMissionResponse.Status), _LOAD_MISSION_STATUS_TO_ERROR);
}

function _play_mission_error_from_response(response){
    return error_factory(response, response.getStatus(), Object.keys(mission_pb.PlayMissionResponse.Status), _PLAY_MISSION_STATUS_TO_ERROR);
}

function _pause_mission_error_from_response(response){
    return error_factory(response, response.getStatus(), Object.keys(mission_pb.PauseMissionResponse.Status), _PAUSE_MISSION_STATUS_TO_ERROR);
}

function _stop_mission_error_from_response(response){
    return error_factory(response, response.getStatus(), Object.keys(mission_pb.StopMissionResponse.Status), _STOP_MISSION_STATUS_TO_ERROR);
}

function _restart_mission_error_from_response(response){
    return error_factory(response, response.getStatus(), Object.keys(mission_pb.RestartMissionResponse.Status), _RESTART_MISSION_STATUS_TO_ERROR);
}

module.exports = {
	MissionClient,
	MissionResponseError,
	InvalidQuestionId,
	InvalidAnswerCode,
	QuestionAlreadyAnswered,
	CompilationError,
	ValidationError,
	NoMissionError,
	NoMissionPlayingError
};