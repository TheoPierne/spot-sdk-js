export type Lease = import("../bosdyn-client/lease").Lease;
export type LeaseProto = import("../../src/bosdyn/api/lease_pb").Lease;
export type DictParam = import("../../src/bosdyn/api/service_customization_pb").DictParam;
export type Robot = import("../bosdyn-client/robot").Robot;
export type Node = import("../../src/bosdyn/api/mission/nodes_pb").Node;
/**
 * @typedef {import('../bosdyn-client/robot').Robot} Robot
 * @typedef {import('../../src/bosdyn/api/mission/nodes_pb').Node} Node
 */
/**
 * Client for the Mission service.
 * @extends {BaseClient<MissionServiceClient>}
 */
export class MissionClient extends BaseClient<MissionServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    _timesyncEndpoint: import("..").TimeSyncEndpoint | null;
    /**
     * @param {Robot} other
     */
    updateFrom(other: Robot): Promise<void>;
    /**
     * Accessor for timesync endpoint that was grabbed via 'updateFrom()'.
     */
    get timesyncEndpoint(): import("..").TimeSyncEndpoint;
    /**
     * Obtain current mission state.
     * @param {number|string} upperTickBound Upper bound on the node state to retrieve, inclusive.
     * Leave unset for the latest data.
     * @param {number|string} lowerTickBound Tick counter for the lower bound of per-node state to retrieve.
     * @param {number|string} pastTicks Number of ticks to look into the past from the upper bound.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.State>}
     */
    getState(upperTickBound?: number | string, lowerTickBound?: number | string, pastTicks?: number | string, args?: Object): Promise<missionPb.State>;
    /**
     * Specify an answer to the question asked by the mission.
     * @param {number} questionId ID of the question to answer.
     * @param {number} code Answer code.
     * @param {DictParam} customParams Answer to a custom params prompt.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.AnswerQuestionResponse>}
     */
    answerQuestion(questionId: number, code: number, customParams?: DictParam, args?: Object): Promise<missionPb.AnswerQuestionResponse>;
    /**
     * Load a mission onto the robot.
     * @param {Node} root Root node in a mission.
     * @param {Lease[]} leases All leases necessary to initialize a mission.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.LoadMissionResponse>}
     */
    loadMission(root: Node, leases?: Lease[], args?: Object): Promise<missionPb.LoadMissionResponse>;
    /**
     * Load a mission onto the robot.
     * @param {Node} root  Root node in a mission.
     * @param {Lease[]} leases All leases necessary to initialize a mission.
     * @param {number} dataChunkByteSize max size of each streamed message
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.LoadMissionResponse>}
     */
    loadMissionAsChunks(root: Node, leases?: Lease[], dataChunkByteSize?: number, args?: Object): Promise<missionPb.LoadMissionResponse>;
    /**
     * Load a mission onto the robot, the response being streamed as chunks too.
     * @param {Node} root  Root node in a mission.
     * @param {Lease[]} leases All leases necessary to initialize a mission.
     * @param {number} dataChunkByteSize max size of each streamed message
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.LoadMissionResponse>}
     */
    loadMissionAsChunks2(root: Node, leases?: Lease[], dataChunkByteSize?: number, args?: Object): Promise<missionPb.LoadMissionResponse>;
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
    playMission(pauseTimeSecs: number, leases?: Lease[], settings?: missionPb.PlaySettings, args?: Object): Promise<missionPb.PlayMissionResponse>;
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
    restartMission(pauseTimeSecs: number, leases?: Lease[], settings?: missionPb.PlaySettings, args?: Object): Promise<missionPb.RestartMissionResponse>;
    /**
     * Pause the running mission.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.PauseMissionResponse>}
     */
    pauseMission(args?: Object): Promise<missionPb.PauseMissionResponse>;
    /**
     * Stop the running mission.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.StopMissionResponse>}
     */
    stopMission(args?: Object): Promise<missionPb.StopMissionResponse>;
    /**
     * Get static information about the loaded mission.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.MissionInfo|null>}
     */
    getInfo(args?: Object): Promise<missionPb.MissionInfo | null>;
    /**
     * Issues the GetInfoAsChunks RPC to the mission service.
     * @param {missionPb.GetInfoRequest} req The request to send
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.MissionInfo|null>}
     * @private
     */
    private _getInfoAsChunksCall;
    /**
     * Get the loaded mission.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.GetMissionResponse>}
     */
    getMission(args?: Object): Promise<missionPb.GetMissionResponse>;
    /**
     * Issues the GetMissionAsChunks RPC to the mission service.
     * @param {missionPb.GetMissionRequest} req The request to send
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<missionPb.GetMissionResponse>}
     * @private
     */
    private _getMissionAsChunksCall;
    _getStateRequest(upperTickBound: any, lowerTickBound: any, pastTicks: any): missionPb.GetStateRequest;
    _loadMissionRequest(root: any, leases: any): missionPb.LoadMissionRequest;
    _playMissionRequest(pauseTimeSecs: any, leases: any, settings: any): missionPb.PlayMissionRequest;
    _restartMissionRequest(pauseTimeSecs: any, leases: any, settings: any): missionPb.RestartMissionRequest;
}
/**
 * @typedef {import('../bosdyn-client/lease').Lease} Lease
 * @typedef {import('../../src/bosdyn/api/lease_pb').Lease} LeaseProto
 * @typedef {import('../../src/bosdyn/api/service_customization_pb').DictParam} DictParam
 */
/** General class of errors for mission service. */
export class MissionResponseError extends ResponseError {
}
/** The indicated question is unknown. */
export class InvalidQuestionId extends MissionResponseError {
}
/** The indicated answer code is invalid for the specified question. */
export class InvalidAnswerCode extends MissionResponseError {
}
/** The indicated question was already answered. */
export class QuestionAlreadyAnswered extends MissionResponseError {
}
/** The indicated answer does not match the spec for the indicated answer */
export class CustomParamsError extends MissionResponseError {
}
/** The indicated answer is not in a format expected by the indicated question. */
export class IncompatibleAnswer extends MissionResponseError {
}
/** Mission could not be compiled. */
export class CompilationError extends MissionResponseError {
}
/**
 * Mission could not be validated.
 */
export class ValidationError extends MissionResponseError {
    constructor(res: any, msg: any);
    failedNodes: any;
}
/** There is no mission to be played/restarted. */
export class NoMissionError extends MissionResponseError {
}
/** There is no mission to be paused. */
export class NoMissionPlayingError extends MissionResponseError {
}
import { MissionServiceClient } from "../../src/bosdyn/api/mission/mission_service_grpc_pb";
import { BaseClient } from "../bosdyn-client/common";
import missionPb = require("../../src/bosdyn/api/mission/mission_pb");
import { ResponseError } from "../bosdyn-client/exceptions";
