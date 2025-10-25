// package: bosdyn.api.mission
// file: bosdyn/api/mission/mission.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_alerts_pb from "../../../bosdyn/api/alerts_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_graph_nav_map_pb from "../../../bosdyn/api/graph_nav/map_pb";
import * as bosdyn_api_graph_nav_graph_nav_pb from "../../../bosdyn/api/graph_nav/graph_nav_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as bosdyn_api_mission_nodes_pb from "../../../bosdyn/api/mission/nodes_pb";
import * as bosdyn_api_mission_util_pb from "../../../bosdyn/api/mission/util_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as bosdyn_api_service_customization_pb from "../../../bosdyn/api/service_customization_pb";

export class GetStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetStateRequest;

    hasHistoryUpperTickBound(): boolean;
    clearHistoryUpperTickBound(): void;
    getHistoryUpperTickBound(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHistoryUpperTickBound(value?: google_protobuf_wrappers_pb.Int64Value): GetStateRequest;

    hasHistoryLowerTickBound(): boolean;
    clearHistoryLowerTickBound(): void;
    getHistoryLowerTickBound(): number;
    setHistoryLowerTickBound(value: number): GetStateRequest;

    hasHistoryPastTicks(): boolean;
    clearHistoryPastTicks(): void;
    getHistoryPastTicks(): number;
    setHistoryPastTicks(value: number): GetStateRequest;

    getLowerBoundCase(): GetStateRequest.LowerBoundCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStateRequest): GetStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStateRequest;
    static deserializeBinaryFromReader(message: GetStateRequest, reader: jspb.BinaryReader): GetStateRequest;
}

export namespace GetStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        historyUpperTickBound?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        historyLowerTickBound: number,
        historyPastTicks: number,
    }

    export enum LowerBoundCase {
        LOWER_BOUND_NOT_SET = 0,
        HISTORY_LOWER_TICK_BOUND = 3,
        HISTORY_PAST_TICKS = 4,
    }

}

export class GetStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetStateResponse;

    hasState(): boolean;
    clearState(): void;
    getState(): State | undefined;
    setState(value?: State): GetStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStateResponse): GetStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStateResponse;
    static deserializeBinaryFromReader(message: GetStateResponse, reader: jspb.BinaryReader): GetStateResponse;
}

export namespace GetStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        state?: State.AsObject,
    }
}

export class State extends jspb.Message { 
    clearQuestionsList(): void;
    getQuestionsList(): Array<Question>;
    setQuestionsList(value: Array<Question>): State;
    addQuestions(value?: Question, index?: number): Question;
    clearAnsweredQuestionsList(): void;
    getAnsweredQuestionsList(): Array<State.AnsweredQuestion>;
    setAnsweredQuestionsList(value: Array<State.AnsweredQuestion>): State;
    addAnsweredQuestions(value?: State.AnsweredQuestion, index?: number): State.AnsweredQuestion;
    clearHistoryList(): void;
    getHistoryList(): Array<State.NodeStatesAtTick>;
    setHistoryList(value: Array<State.NodeStatesAtTick>): State;
    addHistory(value?: State.NodeStatesAtTick, index?: number): State.NodeStatesAtTick;
    getStatus(): State.Status;
    setStatus(value: State.Status): State;
    getError(): string;
    setError(value: string): State;
    getTickCounter(): number;
    setTickCounter(value: number): State;
    getMissionId(): number;
    setMissionId(value: number): State;
    clearActiveMissionTextList(): void;
    getActiveMissionTextList(): Array<bosdyn_api_mission_util_pb.MissionText>;
    setActiveMissionTextList(value: Array<bosdyn_api_mission_util_pb.MissionText>): State;
    addActiveMissionText(value?: bosdyn_api_mission_util_pb.MissionText, index?: number): bosdyn_api_mission_util_pb.MissionText;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): State.AsObject;
    static toObject(includeInstance: boolean, msg: State): State.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): State;
    static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
    export type AsObject = {
        questionsList: Array<Question.AsObject>,
        answeredQuestionsList: Array<State.AnsweredQuestion.AsObject>,
        historyList: Array<State.NodeStatesAtTick.AsObject>,
        status: State.Status,
        error: string,
        tickCounter: number,
        missionId: number,
        activeMissionTextList: Array<bosdyn_api_mission_util_pb.MissionText.AsObject>,
    }


    export class AnsweredQuestion extends jspb.Message { 

        hasQuestion(): boolean;
        clearQuestion(): void;
        getQuestion(): Question | undefined;
        setQuestion(value?: Question): AnsweredQuestion;

        hasAcceptedAnswerCode(): boolean;
        clearAcceptedAnswerCode(): void;
        getAcceptedAnswerCode(): number;
        setAcceptedAnswerCode(value: number): AnsweredQuestion;

        hasCustomParams(): boolean;
        clearCustomParams(): void;
        getCustomParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
        setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam): AnsweredQuestion;

        getAcceptedAnswerCase(): AnsweredQuestion.AcceptedAnswerCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AnsweredQuestion.AsObject;
        static toObject(includeInstance: boolean, msg: AnsweredQuestion): AnsweredQuestion.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AnsweredQuestion, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AnsweredQuestion;
        static deserializeBinaryFromReader(message: AnsweredQuestion, reader: jspb.BinaryReader): AnsweredQuestion;
    }

    export namespace AnsweredQuestion {
        export type AsObject = {
            question?: Question.AsObject,
            acceptedAnswerCode: number,
            customParams?: bosdyn_api_service_customization_pb.DictParam.AsObject,
        }

        export enum AcceptedAnswerCase {
            ACCEPTED_ANSWER_NOT_SET = 0,
            ACCEPTED_ANSWER_CODE = 2,
            CUSTOM_PARAMS = 3,
        }

    }

    export class NodeStatesAtTick extends jspb.Message { 
        getTickCounter(): number;
        setTickCounter(value: number): NodeStatesAtTick;

        hasTickStartTimestamp(): boolean;
        clearTickStartTimestamp(): void;
        getTickStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTickStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): NodeStatesAtTick;
        clearNodeStatesList(): void;
        getNodeStatesList(): Array<State.NodeStatesAtTick.NodeState>;
        setNodeStatesList(value: Array<State.NodeStatesAtTick.NodeState>): NodeStatesAtTick;
        addNodeStates(value?: State.NodeStatesAtTick.NodeState, index?: number): State.NodeStatesAtTick.NodeState;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NodeStatesAtTick.AsObject;
        static toObject(includeInstance: boolean, msg: NodeStatesAtTick): NodeStatesAtTick.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NodeStatesAtTick, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NodeStatesAtTick;
        static deserializeBinaryFromReader(message: NodeStatesAtTick, reader: jspb.BinaryReader): NodeStatesAtTick;
    }

    export namespace NodeStatesAtTick {
        export type AsObject = {
            tickCounter: number,
            tickStartTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            nodeStatesList: Array<State.NodeStatesAtTick.NodeState.AsObject>,
        }


        export class NodeState extends jspb.Message { 
            getResult(): bosdyn_api_mission_util_pb.Result;
            setResult(value: bosdyn_api_mission_util_pb.Result): NodeState;
            getError(): string;
            setError(value: string): NodeState;
            getId(): number;
            setId(value: number): NodeState;

            hasBlackboard(): boolean;
            clearBlackboard(): void;
            getBlackboard(): State.NodeStatesAtTick.NodeState.BlackboardState | undefined;
            setBlackboard(value?: State.NodeStatesAtTick.NodeState.BlackboardState): NodeState;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): NodeState.AsObject;
            static toObject(includeInstance: boolean, msg: NodeState): NodeState.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: NodeState, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): NodeState;
            static deserializeBinaryFromReader(message: NodeState, reader: jspb.BinaryReader): NodeState;
        }

        export namespace NodeState {
            export type AsObject = {
                result: bosdyn_api_mission_util_pb.Result,
                error: string,
                id: number,
                blackboard?: State.NodeStatesAtTick.NodeState.BlackboardState.AsObject,
            }


            export class BlackboardState extends jspb.Message { 
                clearVariablesList(): void;
                getVariablesList(): Array<bosdyn_api_mission_util_pb.KeyValue>;
                setVariablesList(value: Array<bosdyn_api_mission_util_pb.KeyValue>): BlackboardState;
                addVariables(value?: bosdyn_api_mission_util_pb.KeyValue, index?: number): bosdyn_api_mission_util_pb.KeyValue;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): BlackboardState.AsObject;
                static toObject(includeInstance: boolean, msg: BlackboardState): BlackboardState.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: BlackboardState, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): BlackboardState;
                static deserializeBinaryFromReader(message: BlackboardState, reader: jspb.BinaryReader): BlackboardState;
            }

            export namespace BlackboardState {
                export type AsObject = {
                    variablesList: Array<bosdyn_api_mission_util_pb.KeyValue.AsObject>,
                }
            }

        }

    }


    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_FAILURE = 1,
    STATUS_RUNNING = 2,
    STATUS_SUCCESS = 3,
    STATUS_PAUSED = 4,
    STATUS_ERROR = 5,
    STATUS_NONE = 6,
    STATUS_STOPPED = 7,
    }

}

export class Question extends jspb.Message { 
    getId(): number;
    setId(value: number): Question;
    getSource(): string;
    setSource(value: string): Question;
    getText(): string;
    setText(value: string): Question;
    clearOptionsList(): void;
    getOptionsList(): Array<bosdyn_api_mission_nodes_pb.Prompt.Option>;
    setOptionsList(value: Array<bosdyn_api_mission_nodes_pb.Prompt.Option>): Question;
    addOptions(value?: bosdyn_api_mission_nodes_pb.Prompt.Option, index?: number): bosdyn_api_mission_nodes_pb.Prompt.Option;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam.Spec | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam.Spec): Question;
    getForAutonomousProcessing(): boolean;
    setForAutonomousProcessing(value: boolean): Question;
    getSeverity(): bosdyn_api_alerts_pb.AlertData.SeverityLevel;
    setSeverity(value: bosdyn_api_alerts_pb.AlertData.SeverityLevel): Question;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Question.AsObject;
    static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Question;
    static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
    export type AsObject = {
        id: number,
        source: string,
        text: string,
        optionsList: Array<bosdyn_api_mission_nodes_pb.Prompt.Option.AsObject>,
        customParams?: bosdyn_api_service_customization_pb.DictParam.Spec.AsObject,
        forAutonomousProcessing: boolean,
        severity: bosdyn_api_alerts_pb.AlertData.SeverityLevel,
    }
}

export class AnswerQuestionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): AnswerQuestionRequest;
    getQuestionId(): number;
    setQuestionId(value: number): AnswerQuestionRequest;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): number;
    setCode(value: number): AnswerQuestionRequest;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam): AnswerQuestionRequest;

    getAnswerCase(): AnswerQuestionRequest.AnswerCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnswerQuestionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AnswerQuestionRequest): AnswerQuestionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnswerQuestionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnswerQuestionRequest;
    static deserializeBinaryFromReader(message: AnswerQuestionRequest, reader: jspb.BinaryReader): AnswerQuestionRequest;
}

export namespace AnswerQuestionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        questionId: number,
        code: number,
        customParams?: bosdyn_api_service_customization_pb.DictParam.AsObject,
    }

    export enum AnswerCase {
        ANSWER_NOT_SET = 0,
        CODE = 3,
        CUSTOM_PARAMS = 4,
    }

}

export class AnswerQuestionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): AnswerQuestionResponse;
    getStatus(): AnswerQuestionResponse.Status;
    setStatus(value: AnswerQuestionResponse.Status): AnswerQuestionResponse;

    hasCustomParamError(): boolean;
    clearCustomParamError(): void;
    getCustomParamError(): bosdyn_api_service_customization_pb.CustomParamError | undefined;
    setCustomParamError(value?: bosdyn_api_service_customization_pb.CustomParamError): AnswerQuestionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnswerQuestionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AnswerQuestionResponse): AnswerQuestionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnswerQuestionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnswerQuestionResponse;
    static deserializeBinaryFromReader(message: AnswerQuestionResponse, reader: jspb.BinaryReader): AnswerQuestionResponse;
}

export namespace AnswerQuestionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: AnswerQuestionResponse.Status,
        customParamError?: bosdyn_api_service_customization_pb.CustomParamError.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_QUESTION_ID = 2,
    STATUS_INVALID_CODE = 3,
    STATUS_ALREADY_ANSWERED = 4,
    STATUS_CUSTOM_PARAMS_ERROR = 5,
    STATUS_INCOMPATIBLE_ANSWER = 6,
    }

}

export class MissionInfo extends jspb.Message { 
    getId(): number;
    setId(value: number): MissionInfo;

    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): NodeInfo | undefined;
    setRoot(value?: NodeInfo): MissionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MissionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: MissionInfo): MissionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MissionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MissionInfo;
    static deserializeBinaryFromReader(message: MissionInfo, reader: jspb.BinaryReader): MissionInfo;
}

export namespace MissionInfo {
    export type AsObject = {
        id: number,
        root?: NodeInfo.AsObject,
    }
}

export class NodeInfo extends jspb.Message { 
    getId(): number;
    setId(value: number): NodeInfo;
    getName(): string;
    setName(value: string): NodeInfo;

    hasUserData(): boolean;
    clearUserData(): void;
    getUserData(): bosdyn_api_mission_util_pb.UserData | undefined;
    setUserData(value?: bosdyn_api_mission_util_pb.UserData): NodeInfo;
    clearChildrenList(): void;
    getChildrenList(): Array<NodeInfo>;
    setChildrenList(value: Array<NodeInfo>): NodeInfo;
    addChildren(value?: NodeInfo, index?: number): NodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeInfo;
    static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
    export type AsObject = {
        id: number,
        name: string,
        userData?: bosdyn_api_mission_util_pb.UserData.AsObject,
        childrenList: Array<NodeInfo.AsObject>,
    }
}

export class FailedNode extends jspb.Message { 
    getName(): string;
    setName(value: string): FailedNode;
    getError(): string;
    setError(value: string): FailedNode;
    getImplTypename(): string;
    setImplTypename(value: string): FailedNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailedNode.AsObject;
    static toObject(includeInstance: boolean, msg: FailedNode): FailedNode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailedNode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailedNode;
    static deserializeBinaryFromReader(message: FailedNode, reader: jspb.BinaryReader): FailedNode;
}

export namespace FailedNode {
    export type AsObject = {
        name: string,
        error: string,
        implTypename: string,
    }
}

export class PlayMissionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): PlayMissionRequest;

    hasPauseTime(): boolean;
    clearPauseTime(): void;
    getPauseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPauseTime(value?: google_protobuf_timestamp_pb.Timestamp): PlayMissionRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): PlayMissionRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): PlaySettings | undefined;
    setSettings(value?: PlaySettings): PlayMissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayMissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PlayMissionRequest): PlayMissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayMissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayMissionRequest;
    static deserializeBinaryFromReader(message: PlayMissionRequest, reader: jspb.BinaryReader): PlayMissionRequest;
}

export namespace PlayMissionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        pauseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        settings?: PlaySettings.AsObject,
    }
}

export class PlaySettings extends jspb.Message { 

    hasVelocityLimit(): boolean;
    clearVelocityLimit(): void;
    getVelocityLimit(): bosdyn_api_geometry_pb.SE2VelocityLimit | undefined;
    setVelocityLimit(value?: bosdyn_api_geometry_pb.SE2VelocityLimit): PlaySettings;
    getDisableDirectedExploration(): boolean;
    setDisableDirectedExploration(value: boolean): PlaySettings;
    getDisableAlternateRouteFinding(): boolean;
    setDisableAlternateRouteFinding(value: boolean): PlaySettings;
    getPathFollowingMode(): bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode;
    setPathFollowingMode(value: bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode): PlaySettings;
    getGroundClutterMode(): bosdyn_api_graph_nav_map_pb.Edge.Annotations.GroundClutterAvoidanceMode;
    setGroundClutterMode(value: bosdyn_api_graph_nav_map_pb.Edge.Annotations.GroundClutterAvoidanceMode): PlaySettings;
    getPlannerMode(): bosdyn_api_graph_nav_graph_nav_pb.TravelParams.PathPlannerMode;
    setPlannerMode(value: bosdyn_api_graph_nav_graph_nav_pb.TravelParams.PathPlannerMode): PlaySettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaySettings.AsObject;
    static toObject(includeInstance: boolean, msg: PlaySettings): PlaySettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaySettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaySettings;
    static deserializeBinaryFromReader(message: PlaySettings, reader: jspb.BinaryReader): PlaySettings;
}

export namespace PlaySettings {
    export type AsObject = {
        velocityLimit?: bosdyn_api_geometry_pb.SE2VelocityLimit.AsObject,
        disableDirectedExploration: boolean,
        disableAlternateRouteFinding: boolean,
        pathFollowingMode: bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode,
        groundClutterMode: bosdyn_api_graph_nav_map_pb.Edge.Annotations.GroundClutterAvoidanceMode,
        plannerMode: bosdyn_api_graph_nav_graph_nav_pb.TravelParams.PathPlannerMode,
    }
}

export class PlayMissionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): PlayMissionResponse;
    getStatus(): PlayMissionResponse.Status;
    setStatus(value: PlayMissionResponse.Status): PlayMissionResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): PlayMissionResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayMissionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PlayMissionResponse): PlayMissionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayMissionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayMissionResponse;
    static deserializeBinaryFromReader(message: PlayMissionResponse, reader: jspb.BinaryReader): PlayMissionResponse;
}

export namespace PlayMissionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: PlayMissionResponse.Status,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_MISSION = 2,
    }

}

export class RestartMissionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RestartMissionRequest;

    hasPauseTime(): boolean;
    clearPauseTime(): void;
    getPauseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPauseTime(value?: google_protobuf_timestamp_pb.Timestamp): RestartMissionRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): RestartMissionRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): PlaySettings | undefined;
    setSettings(value?: PlaySettings): RestartMissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestartMissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RestartMissionRequest): RestartMissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestartMissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestartMissionRequest;
    static deserializeBinaryFromReader(message: RestartMissionRequest, reader: jspb.BinaryReader): RestartMissionRequest;
}

export namespace RestartMissionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        pauseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        settings?: PlaySettings.AsObject,
    }
}

export class RestartMissionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RestartMissionResponse;
    getStatus(): RestartMissionResponse.Status;
    setStatus(value: RestartMissionResponse.Status): RestartMissionResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): RestartMissionResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    clearFailedNodesList(): void;
    getFailedNodesList(): Array<FailedNode>;
    setFailedNodesList(value: Array<FailedNode>): RestartMissionResponse;
    addFailedNodes(value?: FailedNode, index?: number): FailedNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestartMissionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RestartMissionResponse): RestartMissionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestartMissionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestartMissionResponse;
    static deserializeBinaryFromReader(message: RestartMissionResponse, reader: jspb.BinaryReader): RestartMissionResponse;
}

export namespace RestartMissionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: RestartMissionResponse.Status,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        failedNodesList: Array<FailedNode.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_MISSION = 2,
    STATUS_VALIDATE_ERROR = 3,
    }

}

export class LoadMissionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): LoadMissionRequest;

    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): bosdyn_api_mission_nodes_pb.Node | undefined;
    setRoot(value?: bosdyn_api_mission_nodes_pb.Node): LoadMissionRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): LoadMissionRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadMissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoadMissionRequest): LoadMissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadMissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadMissionRequest;
    static deserializeBinaryFromReader(message: LoadMissionRequest, reader: jspb.BinaryReader): LoadMissionRequest;
}

export namespace LoadMissionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        root?: bosdyn_api_mission_nodes_pb.Node.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
    }
}

export class LoadMissionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): LoadMissionResponse;
    getStatus(): LoadMissionResponse.Status;
    setStatus(value: LoadMissionResponse.Status): LoadMissionResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): LoadMissionResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;

    hasMissionInfo(): boolean;
    clearMissionInfo(): void;
    getMissionInfo(): MissionInfo | undefined;
    setMissionInfo(value?: MissionInfo): LoadMissionResponse;
    clearFailedNodesList(): void;
    getFailedNodesList(): Array<FailedNode>;
    setFailedNodesList(value: Array<FailedNode>): LoadMissionResponse;
    addFailedNodes(value?: FailedNode, index?: number): FailedNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadMissionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoadMissionResponse): LoadMissionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadMissionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadMissionResponse;
    static deserializeBinaryFromReader(message: LoadMissionResponse, reader: jspb.BinaryReader): LoadMissionResponse;
}

export namespace LoadMissionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: LoadMissionResponse.Status,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        missionInfo?: MissionInfo.AsObject,
        failedNodesList: Array<FailedNode.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_COMPILE_ERROR = 2,
    STATUS_VALIDATE_ERROR = 3,
    }

}

export class GetInfoRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
    static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetInfoResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetInfoResponse;

    hasMissionInfo(): boolean;
    clearMissionInfo(): void;
    getMissionInfo(): MissionInfo | undefined;
    setMissionInfo(value?: MissionInfo): GetInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
    static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        missionInfo?: MissionInfo.AsObject,
    }
}

export class PauseMissionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): PauseMissionRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): PauseMissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseMissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PauseMissionRequest): PauseMissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseMissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseMissionRequest;
    static deserializeBinaryFromReader(message: PauseMissionRequest, reader: jspb.BinaryReader): PauseMissionRequest;
}

export namespace PauseMissionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class PauseMissionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): PauseMissionResponse;
    getStatus(): PauseMissionResponse.Status;
    setStatus(value: PauseMissionResponse.Status): PauseMissionResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): PauseMissionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseMissionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PauseMissionResponse): PauseMissionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseMissionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseMissionResponse;
    static deserializeBinaryFromReader(message: PauseMissionResponse, reader: jspb.BinaryReader): PauseMissionResponse;
}

export namespace PauseMissionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: PauseMissionResponse.Status,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_MISSION_PLAYING = 2,
    }

}

export class StopMissionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StopMissionRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): StopMissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopMissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopMissionRequest): StopMissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopMissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopMissionRequest;
    static deserializeBinaryFromReader(message: StopMissionRequest, reader: jspb.BinaryReader): StopMissionRequest;
}

export namespace StopMissionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class StopMissionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StopMissionResponse;
    getStatus(): StopMissionResponse.Status;
    setStatus(value: StopMissionResponse.Status): StopMissionResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): StopMissionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopMissionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopMissionResponse): StopMissionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopMissionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopMissionResponse;
    static deserializeBinaryFromReader(message: StopMissionResponse, reader: jspb.BinaryReader): StopMissionResponse;
}

export namespace StopMissionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: StopMissionResponse.Status,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_MISSION_PLAYING = 2,
    }

}

export class GetMissionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetMissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMissionRequest): GetMissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMissionRequest;
    static deserializeBinaryFromReader(message: GetMissionRequest, reader: jspb.BinaryReader): GetMissionRequest;
}

export namespace GetMissionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetMissionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetMissionResponse;

    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): bosdyn_api_mission_nodes_pb.Node | undefined;
    setRoot(value?: bosdyn_api_mission_nodes_pb.Node): GetMissionResponse;
    getId(): number;
    setId(value: number): GetMissionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMissionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMissionResponse): GetMissionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMissionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMissionResponse;
    static deserializeBinaryFromReader(message: GetMissionResponse, reader: jspb.BinaryReader): GetMissionResponse;
}

export namespace GetMissionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        root?: bosdyn_api_mission_nodes_pb.Node.AsObject,
        id: number,
    }
}
