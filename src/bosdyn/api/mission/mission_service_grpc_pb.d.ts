// package: bosdyn.api.mission
// file: bosdyn/api/mission/mission_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_mission_mission_service_pb from "../../../bosdyn/api/mission/mission_service_pb";
import * as bosdyn_api_data_chunk_pb from "../../../bosdyn/api/data_chunk_pb";
import * as bosdyn_api_mission_mission_pb from "../../../bosdyn/api/mission/mission_pb";

interface IMissionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    loadMission: IMissionServiceService_ILoadMission;
    loadMissionAsChunks: IMissionServiceService_ILoadMissionAsChunks;
    loadMissionAsChunks2: IMissionServiceService_ILoadMissionAsChunks2;
    playMission: IMissionServiceService_IPlayMission;
    pauseMission: IMissionServiceService_IPauseMission;
    stopMission: IMissionServiceService_IStopMission;
    restartMission: IMissionServiceService_IRestartMission;
    getState: IMissionServiceService_IGetState;
    getInfo: IMissionServiceService_IGetInfo;
    getInfoAsChunks: IMissionServiceService_IGetInfoAsChunks;
    getMission: IMissionServiceService_IGetMission;
    getMissionAsChunks: IMissionServiceService_IGetMissionAsChunks;
    answerQuestion: IMissionServiceService_IAnswerQuestion;
}

interface IMissionServiceService_ILoadMission extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.LoadMissionRequest, bosdyn_api_mission_mission_pb.LoadMissionResponse> {
    path: "/bosdyn.api.mission.MissionService/LoadMission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.LoadMissionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.LoadMissionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.LoadMissionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.LoadMissionResponse>;
}
interface IMissionServiceService_ILoadMissionAsChunks extends grpc.MethodDefinition<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_mission_mission_pb.LoadMissionResponse> {
    path: "/bosdyn.api.mission.MissionService/LoadMissionAsChunks";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.LoadMissionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.LoadMissionResponse>;
}
interface IMissionServiceService_ILoadMissionAsChunks2 extends grpc.MethodDefinition<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk> {
    path: "/bosdyn.api.mission.MissionService/LoadMissionAsChunks2";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
}
interface IMissionServiceService_IPlayMission extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.PlayMissionRequest, bosdyn_api_mission_mission_pb.PlayMissionResponse> {
    path: "/bosdyn.api.mission.MissionService/PlayMission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.PlayMissionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.PlayMissionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.PlayMissionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.PlayMissionResponse>;
}
interface IMissionServiceService_IPauseMission extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.PauseMissionRequest, bosdyn_api_mission_mission_pb.PauseMissionResponse> {
    path: "/bosdyn.api.mission.MissionService/PauseMission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.PauseMissionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.PauseMissionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.PauseMissionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.PauseMissionResponse>;
}
interface IMissionServiceService_IStopMission extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.StopMissionRequest, bosdyn_api_mission_mission_pb.StopMissionResponse> {
    path: "/bosdyn.api.mission.MissionService/StopMission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.StopMissionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.StopMissionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.StopMissionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.StopMissionResponse>;
}
interface IMissionServiceService_IRestartMission extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.RestartMissionRequest, bosdyn_api_mission_mission_pb.RestartMissionResponse> {
    path: "/bosdyn.api.mission.MissionService/RestartMission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.RestartMissionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.RestartMissionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.RestartMissionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.RestartMissionResponse>;
}
interface IMissionServiceService_IGetState extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.GetStateRequest, bosdyn_api_mission_mission_pb.GetStateResponse> {
    path: "/bosdyn.api.mission.MissionService/GetState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.GetStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.GetStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.GetStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.GetStateResponse>;
}
interface IMissionServiceService_IGetInfo extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.GetInfoRequest, bosdyn_api_mission_mission_pb.GetInfoResponse> {
    path: "/bosdyn.api.mission.MissionService/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.GetInfoResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.GetInfoResponse>;
}
interface IMissionServiceService_IGetInfoAsChunks extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.GetInfoRequest, bosdyn_api_data_chunk_pb.DataChunk> {
    path: "/bosdyn.api.mission.MissionService/GetInfoAsChunks";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
}
interface IMissionServiceService_IGetMission extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.GetMissionRequest, bosdyn_api_mission_mission_pb.GetMissionResponse> {
    path: "/bosdyn.api.mission.MissionService/GetMission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.GetMissionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.GetMissionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.GetMissionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.GetMissionResponse>;
}
interface IMissionServiceService_IGetMissionAsChunks extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.GetMissionRequest, bosdyn_api_data_chunk_pb.DataChunk> {
    path: "/bosdyn.api.mission.MissionService/GetMissionAsChunks";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.GetMissionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.GetMissionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
}
interface IMissionServiceService_IAnswerQuestion extends grpc.MethodDefinition<bosdyn_api_mission_mission_pb.AnswerQuestionRequest, bosdyn_api_mission_mission_pb.AnswerQuestionResponse> {
    path: "/bosdyn.api.mission.MissionService/AnswerQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.AnswerQuestionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.AnswerQuestionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_mission_pb.AnswerQuestionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_mission_pb.AnswerQuestionResponse>;
}

export const MissionServiceService: IMissionServiceService;

export interface IMissionServiceServer extends grpc.UntypedServiceImplementation {
    loadMission: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.LoadMissionRequest, bosdyn_api_mission_mission_pb.LoadMissionResponse>;
    loadMissionAsChunks: grpc.handleClientStreamingCall<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_mission_mission_pb.LoadMissionResponse>;
    loadMissionAsChunks2: grpc.handleBidiStreamingCall<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    playMission: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.PlayMissionRequest, bosdyn_api_mission_mission_pb.PlayMissionResponse>;
    pauseMission: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.PauseMissionRequest, bosdyn_api_mission_mission_pb.PauseMissionResponse>;
    stopMission: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.StopMissionRequest, bosdyn_api_mission_mission_pb.StopMissionResponse>;
    restartMission: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.RestartMissionRequest, bosdyn_api_mission_mission_pb.RestartMissionResponse>;
    getState: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.GetStateRequest, bosdyn_api_mission_mission_pb.GetStateResponse>;
    getInfo: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.GetInfoRequest, bosdyn_api_mission_mission_pb.GetInfoResponse>;
    getInfoAsChunks: grpc.handleServerStreamingCall<bosdyn_api_mission_mission_pb.GetInfoRequest, bosdyn_api_data_chunk_pb.DataChunk>;
    getMission: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.GetMissionRequest, bosdyn_api_mission_mission_pb.GetMissionResponse>;
    getMissionAsChunks: grpc.handleServerStreamingCall<bosdyn_api_mission_mission_pb.GetMissionRequest, bosdyn_api_data_chunk_pb.DataChunk>;
    answerQuestion: grpc.handleUnaryCall<bosdyn_api_mission_mission_pb.AnswerQuestionRequest, bosdyn_api_mission_mission_pb.AnswerQuestionResponse>;
}

export interface IMissionServiceClient {
    loadMission(request: bosdyn_api_mission_mission_pb.LoadMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientUnaryCall;
    loadMission(request: bosdyn_api_mission_mission_pb.LoadMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientUnaryCall;
    loadMission(request: bosdyn_api_mission_mission_pb.LoadMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientUnaryCall;
    loadMissionAsChunks(callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    loadMissionAsChunks(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    loadMissionAsChunks(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    loadMissionAsChunks(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    loadMissionAsChunks2(): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    loadMissionAsChunks2(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    loadMissionAsChunks2(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    playMission(request: bosdyn_api_mission_mission_pb.PlayMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PlayMissionResponse) => void): grpc.ClientUnaryCall;
    playMission(request: bosdyn_api_mission_mission_pb.PlayMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PlayMissionResponse) => void): grpc.ClientUnaryCall;
    playMission(request: bosdyn_api_mission_mission_pb.PlayMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PlayMissionResponse) => void): grpc.ClientUnaryCall;
    pauseMission(request: bosdyn_api_mission_mission_pb.PauseMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PauseMissionResponse) => void): grpc.ClientUnaryCall;
    pauseMission(request: bosdyn_api_mission_mission_pb.PauseMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PauseMissionResponse) => void): grpc.ClientUnaryCall;
    pauseMission(request: bosdyn_api_mission_mission_pb.PauseMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PauseMissionResponse) => void): grpc.ClientUnaryCall;
    stopMission(request: bosdyn_api_mission_mission_pb.StopMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.StopMissionResponse) => void): grpc.ClientUnaryCall;
    stopMission(request: bosdyn_api_mission_mission_pb.StopMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.StopMissionResponse) => void): grpc.ClientUnaryCall;
    stopMission(request: bosdyn_api_mission_mission_pb.StopMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.StopMissionResponse) => void): grpc.ClientUnaryCall;
    restartMission(request: bosdyn_api_mission_mission_pb.RestartMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.RestartMissionResponse) => void): grpc.ClientUnaryCall;
    restartMission(request: bosdyn_api_mission_mission_pb.RestartMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.RestartMissionResponse) => void): grpc.ClientUnaryCall;
    restartMission(request: bosdyn_api_mission_mission_pb.RestartMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.RestartMissionResponse) => void): grpc.ClientUnaryCall;
    getState(request: bosdyn_api_mission_mission_pb.GetStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    getState(request: bosdyn_api_mission_mission_pb.GetStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    getState(request: bosdyn_api_mission_mission_pb.GetStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: bosdyn_api_mission_mission_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: bosdyn_api_mission_mission_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: bosdyn_api_mission_mission_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfoAsChunks(request: bosdyn_api_mission_mission_pb.GetInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    getInfoAsChunks(request: bosdyn_api_mission_mission_pb.GetInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    getMission(request: bosdyn_api_mission_mission_pb.GetMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetMissionResponse) => void): grpc.ClientUnaryCall;
    getMission(request: bosdyn_api_mission_mission_pb.GetMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetMissionResponse) => void): grpc.ClientUnaryCall;
    getMission(request: bosdyn_api_mission_mission_pb.GetMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetMissionResponse) => void): grpc.ClientUnaryCall;
    getMissionAsChunks(request: bosdyn_api_mission_mission_pb.GetMissionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    getMissionAsChunks(request: bosdyn_api_mission_mission_pb.GetMissionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    answerQuestion(request: bosdyn_api_mission_mission_pb.AnswerQuestionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
    answerQuestion(request: bosdyn_api_mission_mission_pb.AnswerQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
    answerQuestion(request: bosdyn_api_mission_mission_pb.AnswerQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
}

export class MissionServiceClient extends grpc.Client implements IMissionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public loadMission(request: bosdyn_api_mission_mission_pb.LoadMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientUnaryCall;
    public loadMission(request: bosdyn_api_mission_mission_pb.LoadMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientUnaryCall;
    public loadMission(request: bosdyn_api_mission_mission_pb.LoadMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientUnaryCall;
    public loadMissionAsChunks(callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public loadMissionAsChunks(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public loadMissionAsChunks(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public loadMissionAsChunks(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.LoadMissionResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public loadMissionAsChunks2(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    public loadMissionAsChunks2(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    public playMission(request: bosdyn_api_mission_mission_pb.PlayMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PlayMissionResponse) => void): grpc.ClientUnaryCall;
    public playMission(request: bosdyn_api_mission_mission_pb.PlayMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PlayMissionResponse) => void): grpc.ClientUnaryCall;
    public playMission(request: bosdyn_api_mission_mission_pb.PlayMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PlayMissionResponse) => void): grpc.ClientUnaryCall;
    public pauseMission(request: bosdyn_api_mission_mission_pb.PauseMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PauseMissionResponse) => void): grpc.ClientUnaryCall;
    public pauseMission(request: bosdyn_api_mission_mission_pb.PauseMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PauseMissionResponse) => void): grpc.ClientUnaryCall;
    public pauseMission(request: bosdyn_api_mission_mission_pb.PauseMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.PauseMissionResponse) => void): grpc.ClientUnaryCall;
    public stopMission(request: bosdyn_api_mission_mission_pb.StopMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.StopMissionResponse) => void): grpc.ClientUnaryCall;
    public stopMission(request: bosdyn_api_mission_mission_pb.StopMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.StopMissionResponse) => void): grpc.ClientUnaryCall;
    public stopMission(request: bosdyn_api_mission_mission_pb.StopMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.StopMissionResponse) => void): grpc.ClientUnaryCall;
    public restartMission(request: bosdyn_api_mission_mission_pb.RestartMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.RestartMissionResponse) => void): grpc.ClientUnaryCall;
    public restartMission(request: bosdyn_api_mission_mission_pb.RestartMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.RestartMissionResponse) => void): grpc.ClientUnaryCall;
    public restartMission(request: bosdyn_api_mission_mission_pb.RestartMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.RestartMissionResponse) => void): grpc.ClientUnaryCall;
    public getState(request: bosdyn_api_mission_mission_pb.GetStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    public getState(request: bosdyn_api_mission_mission_pb.GetStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    public getState(request: bosdyn_api_mission_mission_pb.GetStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: bosdyn_api_mission_mission_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: bosdyn_api_mission_mission_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: bosdyn_api_mission_mission_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfoAsChunks(request: bosdyn_api_mission_mission_pb.GetInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public getInfoAsChunks(request: bosdyn_api_mission_mission_pb.GetInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public getMission(request: bosdyn_api_mission_mission_pb.GetMissionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetMissionResponse) => void): grpc.ClientUnaryCall;
    public getMission(request: bosdyn_api_mission_mission_pb.GetMissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetMissionResponse) => void): grpc.ClientUnaryCall;
    public getMission(request: bosdyn_api_mission_mission_pb.GetMissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.GetMissionResponse) => void): grpc.ClientUnaryCall;
    public getMissionAsChunks(request: bosdyn_api_mission_mission_pb.GetMissionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public getMissionAsChunks(request: bosdyn_api_mission_mission_pb.GetMissionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public answerQuestion(request: bosdyn_api_mission_mission_pb.AnswerQuestionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
    public answerQuestion(request: bosdyn_api_mission_mission_pb.AnswerQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
    public answerQuestion(request: bosdyn_api_mission_mission_pb.AnswerQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_mission_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
}
