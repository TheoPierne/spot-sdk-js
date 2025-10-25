// package: bosdyn.api
// file: bosdyn/api/audio_visual_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_audio_visual_service_pb from "../../bosdyn/api/audio_visual_service_pb";
import * as bosdyn_api_audio_visual_pb from "../../bosdyn/api/audio_visual_pb";

interface IAudioVisualServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    runBehavior: IAudioVisualServiceService_IRunBehavior;
    stopBehavior: IAudioVisualServiceService_IStopBehavior;
    addOrModifyBehavior: IAudioVisualServiceService_IAddOrModifyBehavior;
    deleteBehaviors: IAudioVisualServiceService_IDeleteBehaviors;
    listBehaviors: IAudioVisualServiceService_IListBehaviors;
    getSystemParams: IAudioVisualServiceService_IGetSystemParams;
    setSystemParams: IAudioVisualServiceService_ISetSystemParams;
}

interface IAudioVisualServiceService_IRunBehavior extends grpc.MethodDefinition<bosdyn_api_audio_visual_pb.RunBehaviorRequest, bosdyn_api_audio_visual_pb.RunBehaviorResponse> {
    path: "/bosdyn.api.AudioVisualService/RunBehavior";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.RunBehaviorRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.RunBehaviorRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.RunBehaviorResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.RunBehaviorResponse>;
}
interface IAudioVisualServiceService_IStopBehavior extends grpc.MethodDefinition<bosdyn_api_audio_visual_pb.StopBehaviorRequest, bosdyn_api_audio_visual_pb.StopBehaviorResponse> {
    path: "/bosdyn.api.AudioVisualService/StopBehavior";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.StopBehaviorRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.StopBehaviorRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.StopBehaviorResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.StopBehaviorResponse>;
}
interface IAudioVisualServiceService_IAddOrModifyBehavior extends grpc.MethodDefinition<bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest, bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse> {
    path: "/bosdyn.api.AudioVisualService/AddOrModifyBehavior";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse>;
}
interface IAudioVisualServiceService_IDeleteBehaviors extends grpc.MethodDefinition<bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest, bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse> {
    path: "/bosdyn.api.AudioVisualService/DeleteBehaviors";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse>;
}
interface IAudioVisualServiceService_IListBehaviors extends grpc.MethodDefinition<bosdyn_api_audio_visual_pb.ListBehaviorsRequest, bosdyn_api_audio_visual_pb.ListBehaviorsResponse> {
    path: "/bosdyn.api.AudioVisualService/ListBehaviors";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.ListBehaviorsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.ListBehaviorsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.ListBehaviorsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.ListBehaviorsResponse>;
}
interface IAudioVisualServiceService_IGetSystemParams extends grpc.MethodDefinition<bosdyn_api_audio_visual_pb.GetSystemParamsRequest, bosdyn_api_audio_visual_pb.GetSystemParamsResponse> {
    path: "/bosdyn.api.AudioVisualService/GetSystemParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.GetSystemParamsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.GetSystemParamsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.GetSystemParamsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.GetSystemParamsResponse>;
}
interface IAudioVisualServiceService_ISetSystemParams extends grpc.MethodDefinition<bosdyn_api_audio_visual_pb.SetSystemParamsRequest, bosdyn_api_audio_visual_pb.SetSystemParamsResponse> {
    path: "/bosdyn.api.AudioVisualService/SetSystemParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.SetSystemParamsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.SetSystemParamsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_audio_visual_pb.SetSystemParamsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_audio_visual_pb.SetSystemParamsResponse>;
}

export const AudioVisualServiceService: IAudioVisualServiceService;

export interface IAudioVisualServiceServer extends grpc.UntypedServiceImplementation {
    runBehavior: grpc.handleUnaryCall<bosdyn_api_audio_visual_pb.RunBehaviorRequest, bosdyn_api_audio_visual_pb.RunBehaviorResponse>;
    stopBehavior: grpc.handleUnaryCall<bosdyn_api_audio_visual_pb.StopBehaviorRequest, bosdyn_api_audio_visual_pb.StopBehaviorResponse>;
    addOrModifyBehavior: grpc.handleUnaryCall<bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest, bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse>;
    deleteBehaviors: grpc.handleUnaryCall<bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest, bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse>;
    listBehaviors: grpc.handleUnaryCall<bosdyn_api_audio_visual_pb.ListBehaviorsRequest, bosdyn_api_audio_visual_pb.ListBehaviorsResponse>;
    getSystemParams: grpc.handleUnaryCall<bosdyn_api_audio_visual_pb.GetSystemParamsRequest, bosdyn_api_audio_visual_pb.GetSystemParamsResponse>;
    setSystemParams: grpc.handleUnaryCall<bosdyn_api_audio_visual_pb.SetSystemParamsRequest, bosdyn_api_audio_visual_pb.SetSystemParamsResponse>;
}

export interface IAudioVisualServiceClient {
    runBehavior(request: bosdyn_api_audio_visual_pb.RunBehaviorRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.RunBehaviorResponse) => void): grpc.ClientUnaryCall;
    runBehavior(request: bosdyn_api_audio_visual_pb.RunBehaviorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.RunBehaviorResponse) => void): grpc.ClientUnaryCall;
    runBehavior(request: bosdyn_api_audio_visual_pb.RunBehaviorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.RunBehaviorResponse) => void): grpc.ClientUnaryCall;
    stopBehavior(request: bosdyn_api_audio_visual_pb.StopBehaviorRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.StopBehaviorResponse) => void): grpc.ClientUnaryCall;
    stopBehavior(request: bosdyn_api_audio_visual_pb.StopBehaviorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.StopBehaviorResponse) => void): grpc.ClientUnaryCall;
    stopBehavior(request: bosdyn_api_audio_visual_pb.StopBehaviorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.StopBehaviorResponse) => void): grpc.ClientUnaryCall;
    addOrModifyBehavior(request: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse) => void): grpc.ClientUnaryCall;
    addOrModifyBehavior(request: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse) => void): grpc.ClientUnaryCall;
    addOrModifyBehavior(request: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse) => void): grpc.ClientUnaryCall;
    deleteBehaviors(request: bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse) => void): grpc.ClientUnaryCall;
    deleteBehaviors(request: bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse) => void): grpc.ClientUnaryCall;
    deleteBehaviors(request: bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse) => void): grpc.ClientUnaryCall;
    listBehaviors(request: bosdyn_api_audio_visual_pb.ListBehaviorsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.ListBehaviorsResponse) => void): grpc.ClientUnaryCall;
    listBehaviors(request: bosdyn_api_audio_visual_pb.ListBehaviorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.ListBehaviorsResponse) => void): grpc.ClientUnaryCall;
    listBehaviors(request: bosdyn_api_audio_visual_pb.ListBehaviorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.ListBehaviorsResponse) => void): grpc.ClientUnaryCall;
    getSystemParams(request: bosdyn_api_audio_visual_pb.GetSystemParamsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.GetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    getSystemParams(request: bosdyn_api_audio_visual_pb.GetSystemParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.GetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    getSystemParams(request: bosdyn_api_audio_visual_pb.GetSystemParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.GetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    setSystemParams(request: bosdyn_api_audio_visual_pb.SetSystemParamsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.SetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    setSystemParams(request: bosdyn_api_audio_visual_pb.SetSystemParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.SetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    setSystemParams(request: bosdyn_api_audio_visual_pb.SetSystemParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.SetSystemParamsResponse) => void): grpc.ClientUnaryCall;
}

export class AudioVisualServiceClient extends grpc.Client implements IAudioVisualServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public runBehavior(request: bosdyn_api_audio_visual_pb.RunBehaviorRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.RunBehaviorResponse) => void): grpc.ClientUnaryCall;
    public runBehavior(request: bosdyn_api_audio_visual_pb.RunBehaviorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.RunBehaviorResponse) => void): grpc.ClientUnaryCall;
    public runBehavior(request: bosdyn_api_audio_visual_pb.RunBehaviorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.RunBehaviorResponse) => void): grpc.ClientUnaryCall;
    public stopBehavior(request: bosdyn_api_audio_visual_pb.StopBehaviorRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.StopBehaviorResponse) => void): grpc.ClientUnaryCall;
    public stopBehavior(request: bosdyn_api_audio_visual_pb.StopBehaviorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.StopBehaviorResponse) => void): grpc.ClientUnaryCall;
    public stopBehavior(request: bosdyn_api_audio_visual_pb.StopBehaviorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.StopBehaviorResponse) => void): grpc.ClientUnaryCall;
    public addOrModifyBehavior(request: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse) => void): grpc.ClientUnaryCall;
    public addOrModifyBehavior(request: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse) => void): grpc.ClientUnaryCall;
    public addOrModifyBehavior(request: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.AddOrModifyBehaviorResponse) => void): grpc.ClientUnaryCall;
    public deleteBehaviors(request: bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse) => void): grpc.ClientUnaryCall;
    public deleteBehaviors(request: bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse) => void): grpc.ClientUnaryCall;
    public deleteBehaviors(request: bosdyn_api_audio_visual_pb.DeleteBehaviorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.DeleteBehaviorsResponse) => void): grpc.ClientUnaryCall;
    public listBehaviors(request: bosdyn_api_audio_visual_pb.ListBehaviorsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.ListBehaviorsResponse) => void): grpc.ClientUnaryCall;
    public listBehaviors(request: bosdyn_api_audio_visual_pb.ListBehaviorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.ListBehaviorsResponse) => void): grpc.ClientUnaryCall;
    public listBehaviors(request: bosdyn_api_audio_visual_pb.ListBehaviorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.ListBehaviorsResponse) => void): grpc.ClientUnaryCall;
    public getSystemParams(request: bosdyn_api_audio_visual_pb.GetSystemParamsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.GetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    public getSystemParams(request: bosdyn_api_audio_visual_pb.GetSystemParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.GetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    public getSystemParams(request: bosdyn_api_audio_visual_pb.GetSystemParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.GetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    public setSystemParams(request: bosdyn_api_audio_visual_pb.SetSystemParamsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.SetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    public setSystemParams(request: bosdyn_api_audio_visual_pb.SetSystemParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.SetSystemParamsResponse) => void): grpc.ClientUnaryCall;
    public setSystemParams(request: bosdyn_api_audio_visual_pb.SetSystemParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_audio_visual_pb.SetSystemParamsResponse) => void): grpc.ClientUnaryCall;
}
