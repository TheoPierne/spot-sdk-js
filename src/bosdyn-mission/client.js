/**
 * @file For clients to the mission service.
 */

'use strict';

const { Int64Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const missionPb = require('../bosdyn/api/mission/mission_pb');
const { MissionServiceClient } = require('../bosdyn/api/mission/mission_service_grpc_pb');
const {
  BaseClient,
  commonHeaderErrors,
  errorFactory,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
  handleLeaseUseResultErrors,
} = require('../bosdyn-client/common');
const { chunkMessage } = require('../bosdyn-client/data_chunk');
const { ValueError, ResponseError, TimeSyncRequired, UnimplementedError } = require('../bosdyn-client/exceptions');
const { addLeaseWalletProcessors } = require('../bosdyn-client/lease');
const { DefaultDict } = require('../bosdyn-client/util');

/**
 * @typedef {import('../bosdyn-client/lease').Lease} Lease
 * @typedef {import('../bosdyn/api/lease_pb').Lease} LeaseProto
 * @typedef {import('../bosdyn/api/service_customization_pb').DictParam} DictParam
 */

/** General class of errors for mission service. */
class MissionResponseError extends ResponseError {}
/** The indicated question is unknown. */
class InvalidQuestionId extends MissionResponseError {}
/** The indicated answer code is invalid for the specified question. */
class InvalidAnswerCode extends MissionResponseError {}
/** The indicated question was already answered. */
class QuestionAlreadyAnswered extends MissionResponseError {}
/** The indicated answer does not match the spec for the indicated answer */
class CustomParamsError extends MissionResponseError {}
/** The indicated answer is not in a format expected by the indicated question. */
class IncompatibleAnswer extends MissionResponseError {}
/** Mission could not be compiled. */
class CompilationError extends MissionResponseError {}
/** There is no mission to be played/restarted. */
class NoMissionError extends MissionResponseError {}
/** There is no mission to be paused. */
class NoMissionPlayingError extends MissionResponseError {}

/**
 * Mission could not be validated.
 */
class ValidationError extends MissionResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.failedNodes = res.getFailedNodesList();
    this.name = 'ValidationError';
  }

  toString() {
    return `Mission validation failed with: ${this.failedNodes.map(x => x.getError()).join('; ')}`;
  }
}

/**
 * @typedef {import('../bosdyn-client/robot').Robot} Robot
 * @typedef {import('../bosdyn/api/mission/nodes_pb').Node} Node
 */

/**
 * Client for the Mission service.
 * @extends {BaseClient<MissionServiceClient>}
 */
class MissionClient extends BaseClient {
  static defaultServiceName = 'robot-mission';
  static serviceType = 'bosdyn.api.mission.MissionService';

  constructor() {
    super(MissionServiceClient);
    this._timesyncEndpoint = null;
  }

  /**
   * @param {Robot} other
   */
  async updateFrom(other) {
    super.updateFrom(other);

    if (this.leaseWallet) {
      addLeaseWalletProcessors(this, this.leaseWallet);
    }

    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Accessor for timesync endpoint that was grabbed via 'updateFrom()'.
   */
  get timesyncEndpoint() {
    if (!this._timesyncEndpoint) {
      throw new TimeSyncRequired();
    }
    return this._timesyncEndpoint;
  }

  /**
   * Obtain current mission state.
   * @param {number|string} upperTickBound Upper bound on the node state to retrieve, inclusive.
   * Leave unset for the latest data.
   * @param {number|string} lowerTickBound Tick counter for the lower bound of per-node state to retrieve.
   * @param {number|string} pastTicks Number of ticks to look into the past from the upper bound.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.State>}
   */
  getState(upperTickBound = null, lowerTickBound = null, pastTicks = null, args) {
    let req;

    try {
      req = this._getStateRequest(upperTickBound, lowerTickBound, pastTicks);
    } catch (err) {
      return Promise.reject(err);
    }

    return this.call(this._stub.getState, req, _getStateValue, commonHeaderErrors, false, args);
  }

  /**
   * Specify an answer to the question asked by the mission.
   * @param {number} questionId ID of the question to answer.
   * @param {number} code Answer code.
   * @param {DictParam} customParams Answer to a custom params prompt.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.AnswerQuestionResponse>}
   */
  answerQuestion(questionId, code, customParams = null, args) {
    const req = new missionPb.AnswerQuestionRequest().setQuestionId(questionId).setCode(code);
    if (customParams) {
      req.setCustomParams(customParams);
    }

    return this.call(this._stub.answerQuestion, req, null, _answerQuestionErrorFromResponse, false, args);
  }

  /**
   * Load a mission onto the robot.
   * @param {Node} root Root node in a mission.
   * @param {Lease[]} leases All leases necessary to initialize a mission.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.LoadMissionResponse>}
   */
  loadMission(root, leases = [], args) {
    const req = this._loadMissionRequest(root, leases);
    return this.call(this._stub.loadMission, req, null, _loadMissionErrorFromResponse, false, args);
  }

  /**
   * Load a mission onto the robot.
   * @param {Node} root  Root node in a mission.
   * @param {Lease[]} leases All leases necessary to initialize a mission.
   * @param {number} dataChunkByteSize max size of each streamed message
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.LoadMissionResponse>}
   */
  loadMissionAsChunks(root, leases = [], dataChunkByteSize = 1_000 * 1_000, args) {
    const req = this._loadMissionRequest(root, leases);
    // In place, like Python: the processed copy was thrown away, and the mission sent without header nor leases.
    this._applyRequestProcessors(req, false);
    return this.call(
      this._stub.loadMissionAsChunks,
      [...chunkMessage(req, dataChunkByteSize)],
      null,
      _loadMissionErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Load a mission onto the robot, the response being streamed as chunks too.
   * @param {Node} root  Root node in a mission.
   * @param {Lease[]} leases All leases necessary to initialize a mission.
   * @param {number} dataChunkByteSize max size of each streamed message
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.LoadMissionResponse>}
   */
  loadMissionAsChunks2(root, leases = [], dataChunkByteSize = 1_000 * 1_000, args) {
    const req = this._loadMissionRequest(root, leases);
    this._applyRequestProcessors(req, false);
    return this.call(
      this._stub.loadMissionAsChunks2,
      [...chunkMessage(req, dataChunkByteSize)],
      null,
      _loadMissionErrorFromResponse,
      false,
      { ...args, assembleType: missionPb.LoadMissionResponse },
    );
  }

  /**
   * Play the loaded mission.
   * @param {number} pauseTimeSecs Absolute time when the mission should pause execution. Subsequent RPCs
   * will override this value, so you can use this to say "if you don't hear from me again,
   * stop running the mission at this time."
   * @param {Lease[]} leases Leases the mission service will need to use. Unlike other clients, these MUST
   * be specified.
   * @param {missionPb.PlaySettings} settings Settings active until the next PlayMission or RestartMission request.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.PlayMissionResponse>}
   */
  playMission(pauseTimeSecs, leases = [], settings = null, args) {
    let req;
    try {
      req = this._playMissionRequest(pauseTimeSecs, leases, settings);
    } catch (err) {
      // e.g. TimeSyncRequired: a rejection, not a synchronous throw.
      return Promise.reject(err);
    }
    return this.call(this._stub.playMission, req, null, _playMissionErrorFromResponse, false, args);
  }

  /**
   * Restart the loaded mission.
   * @param {number} pauseTimeSecs Absolute time when the mission should pause execution. Subsequent RPCs
   * to RestartMission will override this value, so you can use this to say "if you don't hear
   * from me again, stop running the mission at this time."
   * @param {Lease[]} leases Leases the mission service will need to use. Unlike other clients, these MUST
   * be specified.
   * @param {missionPb.PlaySettings} settings Settings active until the next PlayMission or RestartMission request.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.RestartMissionResponse>}
   */
  restartMission(pauseTimeSecs, leases = [], settings = null, args) {
    let req;
    try {
      req = this._restartMissionRequest(pauseTimeSecs, leases, settings);
    } catch (err) {
      return Promise.reject(err);
    }
    return this.call(this._stub.restartMission, req, null, _restartMissionErrorFromResponse, false, args);
  }

  /**
   * Pause the running mission.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.PauseMissionResponse>}
   */
  pauseMission(args) {
    const req = new missionPb.PauseMissionRequest();
    return this.call(this._stub.pauseMission, req, null, _pauseMissionErrorFromResponse, false, args);
  }

  /**
   * Stop the running mission.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.StopMissionResponse>}
   */
  stopMission(args) {
    const req = new missionPb.StopMissionRequest();
    return this.call(this._stub.stopMission, req, null, _stopMissionErrorFromResponse, false, args);
  }

  /**
   * Get static information about the loaded mission.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.MissionInfo|null>}
   */
  async getInfo(args) {
    const req = new missionPb.GetInfoRequest();

    try {
      return await this._getInfoAsChunksCall(req, args);
    } catch (err) {
      // This indicates that the software release running on robot does not yet have
      // the implementation for the streaming response of GetInfo.
      if (!(err instanceof UnimplementedError)) throw err;
      return this.call(this._stub.getInfo, req, _getInfoValue, commonHeaderErrors, false, args);
    }
  }

  /**
   * Issues the GetInfoAsChunks RPC to the mission service.
   * @param {missionPb.GetInfoRequest} req The request to send
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.MissionInfo|null>}
   * @private
   */
  _getInfoAsChunksCall(req, args) {
    // The DataChunks are assembled into a GetInfoResponse, like Python.
    return this.call(this._stub.getInfoAsChunks, req, _getInfoValue, commonHeaderErrors, false, {
      ...args,
      assembleType: missionPb.GetInfoResponse,
    });
  }

  /**
   * Get the loaded mission.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.GetMissionResponse>}
   */
  async getMission(args) {
    const req = new missionPb.GetMissionRequest();

    try {
      return await this._getMissionAsChunksCall(req, args);
    } catch (err) {
      // This indicates that the software release running on robot does not yet have
      // the implementation for the streaming response of GetMission.
      if (!(err instanceof UnimplementedError)) throw err;
      return this.call(this._stub.getMission, req, null, commonHeaderErrors, false, args);
    }
  }

  /**
   * Issues the GetMissionAsChunks RPC to the mission service.
   * @param {missionPb.GetMissionRequest} req The request to send
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<missionPb.GetMissionResponse>}
   * @private
   */
  _getMissionAsChunksCall(req, args) {
    return this.call(this._stub.getMissionAsChunks, req, null, commonHeaderErrors, false, {
      ...args,
      assembleType: missionPb.GetMissionResponse,
    });
  }

  _getStateRequest(upperTickBound, lowerTickBound, pastTicks) {
    // 0 is a bound too.
    const isSet = value => value !== null && value !== undefined;
    if (isSet(lowerTickBound) && isSet(pastTicks)) {
      throw new ValueError('Cannot specify both lowerTickBound and pastTicks');
    }

    // They are in a oneof: setting the one that is null cleared the other.
    const request = new missionPb.GetStateRequest();
    if (isSet(lowerTickBound)) request.setHistoryLowerTickBound(lowerTickBound);
    if (isSet(pastTicks)) request.setHistoryPastTicks(pastTicks);

    if (isSet(upperTickBound)) request.setHistoryUpperTickBound(new Int64Value().setValue(upperTickBound));

    return request;
  }

  _loadMissionRequest(root, leases) {
    const request = new missionPb.LoadMissionRequest().setRoot(root);
    _addLeases(request, leases);
    return request;
  }

  _playMissionRequest(pauseTimeSecs, leases, settings) {
    const request = new missionPb.PlayMissionRequest()
      .setPauseTime(this.timesyncEndpoint.robotTimestampFromLocalSecs(pauseTimeSecs))
      .setSettings(settings);
    _addLeases(request, leases);
    return request;
  }

  _restartMissionRequest(pauseTimeSecs, leases, settings) {
    const request = new missionPb.RestartMissionRequest()
      .setPauseTime(this.timesyncEndpoint.robotTimestampFromLocalSecs(pauseTimeSecs))
      .setSettings(settings);
    _addLeases(request, leases);
    return request;
  }
}

/**
 * Add the lease protos of Lease objects to a request (a lease proto is taken as is: its leaseProto was undefined,
 * which added an empty lease).
 * @param {missionPb.LoadMissionRequest|missionPb.PlayMissionRequest|missionPb.RestartMissionRequest} request
 * @param {Array<Lease|LeaseProto>} leases
 */
function _addLeases(request, leases) {
  for (const lease of leases) {
    request.addLeases(lease.leaseProto ?? lease);
  }
}

function _getStateValue(response) {
  return response.getState();
}

function _getInfoValue(response) {
  if (response.hasMissionInfo()) {
    return response.getMissionInfo();
  }
  return null;
}

const _ANSWER_QUESTION_STATUS_TO_ERROR = DefaultDict(() => [MissionResponseError, null]);
_ANSWER_QUESTION_STATUS_TO_ERROR.set(missionPb.AnswerQuestionResponse.Status.STATUS_OK, [null, null]);
_ANSWER_QUESTION_STATUS_TO_ERROR.set(missionPb.AnswerQuestionResponse.Status.STATUS_INVALID_QUESTION_ID, [
  InvalidQuestionId,
  'The indicated question is unknown.',
]);
_ANSWER_QUESTION_STATUS_TO_ERROR.set(missionPb.AnswerQuestionResponse.Status.STATUS_INVALID_CODE, [
  InvalidAnswerCode,
  'The indicated answer code is invalid for the specified question.',
]);
_ANSWER_QUESTION_STATUS_TO_ERROR.set(missionPb.AnswerQuestionResponse.Status.STATUS_ALREADY_ANSWERED, [
  QuestionAlreadyAnswered,
  'The indicated question was already answered.',
]);
_ANSWER_QUESTION_STATUS_TO_ERROR.set(missionPb.AnswerQuestionResponse.Status.STATUS_CUSTOM_PARAMS_ERROR, [
  CustomParamsError,
  'The indicated answer does not match the spec for the indicated answer',
]);
_ANSWER_QUESTION_STATUS_TO_ERROR.set(missionPb.AnswerQuestionResponse.Status.STATUS_INCOMPATIBLE_ANSWER, [
  IncompatibleAnswer,
  'The indicated answer is not in a format expected by the indicated question.',
]);

const _LOAD_MISSION_STATUS_TO_ERROR = DefaultDict(() => [MissionResponseError, null]);
_LOAD_MISSION_STATUS_TO_ERROR.set(missionPb.LoadMissionResponse.Status.STATUS_OK, [null, null]);
_LOAD_MISSION_STATUS_TO_ERROR.set(missionPb.LoadMissionResponse.Status.STATUS_VALIDATE_ERROR, [ValidationError, null]);
_LOAD_MISSION_STATUS_TO_ERROR.set(missionPb.LoadMissionResponse.Status.STATUS_COMPILE_ERROR, [CompilationError, null]);

const _PLAY_MISSION_STATUS_TO_ERROR = DefaultDict(() => [MissionResponseError, null]);
_PLAY_MISSION_STATUS_TO_ERROR.set(missionPb.PlayMissionResponse.Status.STATUS_OK, [null, null]);
_PLAY_MISSION_STATUS_TO_ERROR.set(missionPb.PlayMissionResponse.Status.STATUS_NO_MISSION, [NoMissionError, null]);

const _PAUSE_MISSION_STATUS_TO_ERROR = DefaultDict(() => [MissionResponseError, null]);
_PAUSE_MISSION_STATUS_TO_ERROR.set(missionPb.PauseMissionResponse.Status.STATUS_OK, [null, null]);
_PAUSE_MISSION_STATUS_TO_ERROR.set(missionPb.PauseMissionResponse.Status.STATUS_NO_MISSION_PLAYING, [
  NoMissionPlayingError,
  null,
]);

const _STOP_MISSION_STATUS_TO_ERROR = DefaultDict(() => [MissionResponseError, null]);
_STOP_MISSION_STATUS_TO_ERROR.set(missionPb.StopMissionResponse.Status.STATUS_OK, [null, null]);
_STOP_MISSION_STATUS_TO_ERROR.set(missionPb.StopMissionResponse.Status.STATUS_NO_MISSION_PLAYING, [
  NoMissionPlayingError,
  null,
]);

const _RESTART_MISSION_STATUS_TO_ERROR = DefaultDict(() => [MissionResponseError, null]);
_RESTART_MISSION_STATUS_TO_ERROR.set(missionPb.RestartMissionResponse.Status.STATUS_OK, [null, null]);
_RESTART_MISSION_STATUS_TO_ERROR.set(missionPb.RestartMissionResponse.Status.STATUS_NO_MISSION, [NoMissionError, null]);
_RESTART_MISSION_STATUS_TO_ERROR.set(missionPb.RestartMissionResponse.Status.STATUS_VALIDATE_ERROR, [
  ValidationError,
  null,
]);

const _answerQuestionErrorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      missionPb.AnswerQuestionResponse.Status,
      _ANSWER_QUESTION_STATUS_TO_ERROR,
    ),
  ),
);

const _loadMissionErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(response, response.getStatus(), missionPb.LoadMissionResponse.Status, _LOAD_MISSION_STATUS_TO_ERROR),
    ),
  ),
);

const _playMissionErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(response, response.getStatus(), missionPb.PlayMissionResponse.Status, _PLAY_MISSION_STATUS_TO_ERROR),
    ),
  ),
);

const _pauseMissionErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        missionPb.PauseMissionResponse.Status,
        _PAUSE_MISSION_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _stopMissionErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(response, response.getStatus(), missionPb.StopMissionResponse.Status, _STOP_MISSION_STATUS_TO_ERROR),
    ),
  ),
);

const _restartMissionErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        missionPb.RestartMissionResponse.Status,
        _RESTART_MISSION_STATUS_TO_ERROR,
      ),
    ),
  ),
);

module.exports = {
  MissionClient,
  MissionResponseError,
  InvalidQuestionId,
  InvalidAnswerCode,
  QuestionAlreadyAnswered,
  CustomParamsError,
  IncompatibleAnswer,
  CompilationError,
  ValidationError,
  NoMissionError,
  NoMissionPlayingError,
};
