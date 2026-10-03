// package: bosdyn.api.spot
// file: bosdyn/api/spot/choreography_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_spot_choreography_service_pb from "../../../bosdyn/api/spot/choreography_service_pb";
import * as bosdyn_api_spot_choreography_sequence_pb from "../../../bosdyn/api/spot/choreography_sequence_pb";

interface IChoreographyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listAllMoves: IChoreographyServiceService_IListAllMoves;
    listAllSequences: IChoreographyServiceService_IListAllSequences;
    getChoreographySequence: IChoreographyServiceService_IGetChoreographySequence;
    getAnimation: IChoreographyServiceService_IGetAnimation;
    deleteSequence: IChoreographyServiceService_IDeleteSequence;
    saveSequence: IChoreographyServiceService_ISaveSequence;
    modifyChoreographyInfo: IChoreographyServiceService_IModifyChoreographyInfo;
    clearAllSequenceFiles: IChoreographyServiceService_IClearAllSequenceFiles;
    uploadChoreography: IChoreographyServiceService_IUploadChoreography;
    uploadAnimatedMove: IChoreographyServiceService_IUploadAnimatedMove;
    executeChoreography: IChoreographyServiceService_IExecuteChoreography;
    startRecordingState: IChoreographyServiceService_IStartRecordingState;
    stopRecordingState: IChoreographyServiceService_IStopRecordingState;
    downloadRobotStateLog: IChoreographyServiceService_IDownloadRobotStateLog;
    choreographyStatus: IChoreographyServiceService_IChoreographyStatus;
    choreographyCommand: IChoreographyServiceService_IChoreographyCommand;
    legSizeConfiguration: IChoreographyServiceService_ILegSizeConfiguration;
    legSizeConfigurationState: IChoreographyServiceService_ILegSizeConfigurationState;
    choreographyTimeAdjust: IChoreographyServiceService_IChoreographyTimeAdjust;
}

interface IChoreographyServiceService_IListAllMoves extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest, bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/ListAllMoves";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse>;
}
interface IChoreographyServiceService_IListAllSequences extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest, bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/ListAllSequences";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse>;
}
interface IChoreographyServiceService_IGetChoreographySequence extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest, bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/GetChoreographySequence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse>;
}
interface IChoreographyServiceService_IGetAnimation extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest, bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/GetAnimation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse>;
}
interface IChoreographyServiceService_IDeleteSequence extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest, bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/DeleteSequence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse>;
}
interface IChoreographyServiceService_ISaveSequence extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest, bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/SaveSequence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse>;
}
interface IChoreographyServiceService_IModifyChoreographyInfo extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest, bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/ModifyChoreographyInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse>;
}
interface IChoreographyServiceService_IClearAllSequenceFiles extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest, bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/ClearAllSequenceFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse>;
}
interface IChoreographyServiceService_IUploadChoreography extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest, bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/UploadChoreography";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse>;
}
interface IChoreographyServiceService_IUploadAnimatedMove extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest, bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/UploadAnimatedMove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse>;
}
interface IChoreographyServiceService_IExecuteChoreography extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest, bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/ExecuteChoreography";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse>;
}
interface IChoreographyServiceService_IStartRecordingState extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest, bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/StartRecordingState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse>;
}
interface IChoreographyServiceService_IStopRecordingState extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest, bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/StopRecordingState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse>;
}
interface IChoreographyServiceService_IDownloadRobotStateLog extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest, bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/DownloadRobotStateLog";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse>;
}
interface IChoreographyServiceService_IChoreographyStatus extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest, bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/ChoreographyStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse>;
}
interface IChoreographyServiceService_IChoreographyCommand extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest, bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/ChoreographyCommand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse>;
}
interface IChoreographyServiceService_ILegSizeConfiguration extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest, bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/LegSizeConfiguration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse>;
}
interface IChoreographyServiceService_ILegSizeConfigurationState extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest, bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/LegSizeConfigurationState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse>;
}
interface IChoreographyServiceService_IChoreographyTimeAdjust extends grpc.MethodDefinition<bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest, bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse> {
    path: "/bosdyn.api.spot.ChoreographyService/ChoreographyTimeAdjust";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse>;
}

export const ChoreographyServiceService: IChoreographyServiceService;

export interface IChoreographyServiceServer extends grpc.UntypedServiceImplementation {
    listAllMoves: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest, bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse>;
    listAllSequences: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest, bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse>;
    getChoreographySequence: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest, bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse>;
    getAnimation: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest, bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse>;
    deleteSequence: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest, bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse>;
    saveSequence: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest, bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse>;
    modifyChoreographyInfo: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest, bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse>;
    clearAllSequenceFiles: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest, bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse>;
    uploadChoreography: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest, bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse>;
    uploadAnimatedMove: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest, bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse>;
    executeChoreography: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest, bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse>;
    startRecordingState: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest, bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse>;
    stopRecordingState: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest, bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse>;
    downloadRobotStateLog: grpc.handleServerStreamingCall<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest, bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse>;
    choreographyStatus: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest, bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse>;
    choreographyCommand: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest, bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse>;
    legSizeConfiguration: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest, bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse>;
    legSizeConfigurationState: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest, bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse>;
    choreographyTimeAdjust: grpc.handleUnaryCall<bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest, bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse>;
}

export interface IChoreographyServiceClient {
    listAllMoves(request: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse) => void): grpc.ClientUnaryCall;
    listAllMoves(request: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse) => void): grpc.ClientUnaryCall;
    listAllMoves(request: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse) => void): grpc.ClientUnaryCall;
    listAllSequences(request: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse) => void): grpc.ClientUnaryCall;
    listAllSequences(request: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse) => void): grpc.ClientUnaryCall;
    listAllSequences(request: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse) => void): grpc.ClientUnaryCall;
    getChoreographySequence(request: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse) => void): grpc.ClientUnaryCall;
    getChoreographySequence(request: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse) => void): grpc.ClientUnaryCall;
    getChoreographySequence(request: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse) => void): grpc.ClientUnaryCall;
    getAnimation(request: bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse) => void): grpc.ClientUnaryCall;
    getAnimation(request: bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse) => void): grpc.ClientUnaryCall;
    getAnimation(request: bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse) => void): grpc.ClientUnaryCall;
    deleteSequence(request: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse) => void): grpc.ClientUnaryCall;
    deleteSequence(request: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse) => void): grpc.ClientUnaryCall;
    deleteSequence(request: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse) => void): grpc.ClientUnaryCall;
    saveSequence(request: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse) => void): grpc.ClientUnaryCall;
    saveSequence(request: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse) => void): grpc.ClientUnaryCall;
    saveSequence(request: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse) => void): grpc.ClientUnaryCall;
    modifyChoreographyInfo(request: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse) => void): grpc.ClientUnaryCall;
    modifyChoreographyInfo(request: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse) => void): grpc.ClientUnaryCall;
    modifyChoreographyInfo(request: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse) => void): grpc.ClientUnaryCall;
    clearAllSequenceFiles(request: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse) => void): grpc.ClientUnaryCall;
    clearAllSequenceFiles(request: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse) => void): grpc.ClientUnaryCall;
    clearAllSequenceFiles(request: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse) => void): grpc.ClientUnaryCall;
    uploadChoreography(request: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse) => void): grpc.ClientUnaryCall;
    uploadChoreography(request: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse) => void): grpc.ClientUnaryCall;
    uploadChoreography(request: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse) => void): grpc.ClientUnaryCall;
    uploadAnimatedMove(request: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse) => void): grpc.ClientUnaryCall;
    uploadAnimatedMove(request: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse) => void): grpc.ClientUnaryCall;
    uploadAnimatedMove(request: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse) => void): grpc.ClientUnaryCall;
    executeChoreography(request: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse) => void): grpc.ClientUnaryCall;
    executeChoreography(request: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse) => void): grpc.ClientUnaryCall;
    executeChoreography(request: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse) => void): grpc.ClientUnaryCall;
    startRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse) => void): grpc.ClientUnaryCall;
    startRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse) => void): grpc.ClientUnaryCall;
    startRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse) => void): grpc.ClientUnaryCall;
    stopRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse) => void): grpc.ClientUnaryCall;
    stopRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse) => void): grpc.ClientUnaryCall;
    stopRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse) => void): grpc.ClientUnaryCall;
    downloadRobotStateLog(request: bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse>;
    downloadRobotStateLog(request: bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse>;
    choreographyStatus(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse) => void): grpc.ClientUnaryCall;
    choreographyStatus(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse) => void): grpc.ClientUnaryCall;
    choreographyStatus(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse) => void): grpc.ClientUnaryCall;
    choreographyCommand(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse) => void): grpc.ClientUnaryCall;
    choreographyCommand(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse) => void): grpc.ClientUnaryCall;
    choreographyCommand(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse) => void): grpc.ClientUnaryCall;
    legSizeConfiguration(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse) => void): grpc.ClientUnaryCall;
    legSizeConfiguration(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse) => void): grpc.ClientUnaryCall;
    legSizeConfiguration(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse) => void): grpc.ClientUnaryCall;
    legSizeConfigurationState(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse) => void): grpc.ClientUnaryCall;
    legSizeConfigurationState(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse) => void): grpc.ClientUnaryCall;
    legSizeConfigurationState(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse) => void): grpc.ClientUnaryCall;
    choreographyTimeAdjust(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse) => void): grpc.ClientUnaryCall;
    choreographyTimeAdjust(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse) => void): grpc.ClientUnaryCall;
    choreographyTimeAdjust(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse) => void): grpc.ClientUnaryCall;
}

export class ChoreographyServiceClient extends grpc.Client implements IChoreographyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listAllMoves(request: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse) => void): grpc.ClientUnaryCall;
    public listAllMoves(request: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse) => void): grpc.ClientUnaryCall;
    public listAllMoves(request: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllMovesResponse) => void): grpc.ClientUnaryCall;
    public listAllSequences(request: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse) => void): grpc.ClientUnaryCall;
    public listAllSequences(request: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse) => void): grpc.ClientUnaryCall;
    public listAllSequences(request: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ListAllSequencesResponse) => void): grpc.ClientUnaryCall;
    public getChoreographySequence(request: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse) => void): grpc.ClientUnaryCall;
    public getChoreographySequence(request: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse) => void): grpc.ClientUnaryCall;
    public getChoreographySequence(request: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetChoreographySequenceResponse) => void): grpc.ClientUnaryCall;
    public getAnimation(request: bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse) => void): grpc.ClientUnaryCall;
    public getAnimation(request: bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse) => void): grpc.ClientUnaryCall;
    public getAnimation(request: bosdyn_api_spot_choreography_sequence_pb.GetAnimationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.GetAnimationResponse) => void): grpc.ClientUnaryCall;
    public deleteSequence(request: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse) => void): grpc.ClientUnaryCall;
    public deleteSequence(request: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse) => void): grpc.ClientUnaryCall;
    public deleteSequence(request: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.DeleteSequenceResponse) => void): grpc.ClientUnaryCall;
    public saveSequence(request: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse) => void): grpc.ClientUnaryCall;
    public saveSequence(request: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse) => void): grpc.ClientUnaryCall;
    public saveSequence(request: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.SaveSequenceResponse) => void): grpc.ClientUnaryCall;
    public modifyChoreographyInfo(request: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse) => void): grpc.ClientUnaryCall;
    public modifyChoreographyInfo(request: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse) => void): grpc.ClientUnaryCall;
    public modifyChoreographyInfo(request: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ModifyChoreographyInfoResponse) => void): grpc.ClientUnaryCall;
    public clearAllSequenceFiles(request: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse) => void): grpc.ClientUnaryCall;
    public clearAllSequenceFiles(request: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse) => void): grpc.ClientUnaryCall;
    public clearAllSequenceFiles(request: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ClearAllSequenceFilesResponse) => void): grpc.ClientUnaryCall;
    public uploadChoreography(request: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse) => void): grpc.ClientUnaryCall;
    public uploadChoreography(request: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse) => void): grpc.ClientUnaryCall;
    public uploadChoreography(request: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadChoreographyResponse) => void): grpc.ClientUnaryCall;
    public uploadAnimatedMove(request: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse) => void): grpc.ClientUnaryCall;
    public uploadAnimatedMove(request: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse) => void): grpc.ClientUnaryCall;
    public uploadAnimatedMove(request: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.UploadAnimatedMoveResponse) => void): grpc.ClientUnaryCall;
    public executeChoreography(request: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse) => void): grpc.ClientUnaryCall;
    public executeChoreography(request: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse) => void): grpc.ClientUnaryCall;
    public executeChoreography(request: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ExecuteChoreographyResponse) => void): grpc.ClientUnaryCall;
    public startRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse) => void): grpc.ClientUnaryCall;
    public startRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse) => void): grpc.ClientUnaryCall;
    public startRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StartRecordingStateResponse) => void): grpc.ClientUnaryCall;
    public stopRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse) => void): grpc.ClientUnaryCall;
    public stopRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse) => void): grpc.ClientUnaryCall;
    public stopRecordingState(request: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.StopRecordingStateResponse) => void): grpc.ClientUnaryCall;
    public downloadRobotStateLog(request: bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse>;
    public downloadRobotStateLog(request: bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_choreography_sequence_pb.DownloadRobotStateLogResponse>;
    public choreographyStatus(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse) => void): grpc.ClientUnaryCall;
    public choreographyStatus(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse) => void): grpc.ClientUnaryCall;
    public choreographyStatus(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyStatusResponse) => void): grpc.ClientUnaryCall;
    public choreographyCommand(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse) => void): grpc.ClientUnaryCall;
    public choreographyCommand(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse) => void): grpc.ClientUnaryCall;
    public choreographyCommand(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyCommandResponse) => void): grpc.ClientUnaryCall;
    public legSizeConfiguration(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse) => void): grpc.ClientUnaryCall;
    public legSizeConfiguration(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse) => void): grpc.ClientUnaryCall;
    public legSizeConfiguration(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationResponse) => void): grpc.ClientUnaryCall;
    public legSizeConfigurationState(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse) => void): grpc.ClientUnaryCall;
    public legSizeConfigurationState(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse) => void): grpc.ClientUnaryCall;
    public legSizeConfigurationState(request: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.LegSizeConfigurationStateResponse) => void): grpc.ClientUnaryCall;
    public choreographyTimeAdjust(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse) => void): grpc.ClientUnaryCall;
    public choreographyTimeAdjust(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse) => void): grpc.ClientUnaryCall;
    public choreographyTimeAdjust(request: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_choreography_sequence_pb.ChoreographyTimeAdjustResponse) => void): grpc.ClientUnaryCall;
}
