// package: bosdyn.api.mission
// file: bosdyn/api/mission/remote_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_mission_remote_service_pb from "../../../bosdyn/api/mission/remote_service_pb";
import * as bosdyn_api_mission_remote_pb from "../../../bosdyn/api/mission/remote_pb";

interface IRemoteMissionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    establishSession: IRemoteMissionServiceService_IEstablishSession;
    tick: IRemoteMissionServiceService_ITick;
    stop: IRemoteMissionServiceService_IStop;
    teardownSession: IRemoteMissionServiceService_ITeardownSession;
    getRemoteMissionServiceInfo: IRemoteMissionServiceService_IGetRemoteMissionServiceInfo;
}

interface IRemoteMissionServiceService_IEstablishSession extends grpc.MethodDefinition<bosdyn_api_mission_remote_pb.EstablishSessionRequest, bosdyn_api_mission_remote_pb.EstablishSessionResponse> {
    path: "/bosdyn.api.mission.RemoteMissionService/EstablishSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.EstablishSessionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.EstablishSessionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.EstablishSessionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.EstablishSessionResponse>;
}
interface IRemoteMissionServiceService_ITick extends grpc.MethodDefinition<bosdyn_api_mission_remote_pb.TickRequest, bosdyn_api_mission_remote_pb.TickResponse> {
    path: "/bosdyn.api.mission.RemoteMissionService/Tick";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.TickRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.TickRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.TickResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.TickResponse>;
}
interface IRemoteMissionServiceService_IStop extends grpc.MethodDefinition<bosdyn_api_mission_remote_pb.StopRequest, bosdyn_api_mission_remote_pb.StopResponse> {
    path: "/bosdyn.api.mission.RemoteMissionService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.StopRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.StopRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.StopResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.StopResponse>;
}
interface IRemoteMissionServiceService_ITeardownSession extends grpc.MethodDefinition<bosdyn_api_mission_remote_pb.TeardownSessionRequest, bosdyn_api_mission_remote_pb.TeardownSessionResponse> {
    path: "/bosdyn.api.mission.RemoteMissionService/TeardownSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.TeardownSessionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.TeardownSessionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.TeardownSessionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.TeardownSessionResponse>;
}
interface IRemoteMissionServiceService_IGetRemoteMissionServiceInfo extends grpc.MethodDefinition<bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest, bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse> {
    path: "/bosdyn.api.mission.RemoteMissionService/GetRemoteMissionServiceInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse>;
}

export const RemoteMissionServiceService: IRemoteMissionServiceService;

export interface IRemoteMissionServiceServer extends grpc.UntypedServiceImplementation {
    establishSession: grpc.handleUnaryCall<bosdyn_api_mission_remote_pb.EstablishSessionRequest, bosdyn_api_mission_remote_pb.EstablishSessionResponse>;
    tick: grpc.handleUnaryCall<bosdyn_api_mission_remote_pb.TickRequest, bosdyn_api_mission_remote_pb.TickResponse>;
    stop: grpc.handleUnaryCall<bosdyn_api_mission_remote_pb.StopRequest, bosdyn_api_mission_remote_pb.StopResponse>;
    teardownSession: grpc.handleUnaryCall<bosdyn_api_mission_remote_pb.TeardownSessionRequest, bosdyn_api_mission_remote_pb.TeardownSessionResponse>;
    getRemoteMissionServiceInfo: grpc.handleUnaryCall<bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest, bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse>;
}

export interface IRemoteMissionServiceClient {
    establishSession(request: bosdyn_api_mission_remote_pb.EstablishSessionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.EstablishSessionResponse) => void): grpc.ClientUnaryCall;
    establishSession(request: bosdyn_api_mission_remote_pb.EstablishSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.EstablishSessionResponse) => void): grpc.ClientUnaryCall;
    establishSession(request: bosdyn_api_mission_remote_pb.EstablishSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.EstablishSessionResponse) => void): grpc.ClientUnaryCall;
    tick(request: bosdyn_api_mission_remote_pb.TickRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TickResponse) => void): grpc.ClientUnaryCall;
    tick(request: bosdyn_api_mission_remote_pb.TickRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TickResponse) => void): grpc.ClientUnaryCall;
    tick(request: bosdyn_api_mission_remote_pb.TickRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TickResponse) => void): grpc.ClientUnaryCall;
    stop(request: bosdyn_api_mission_remote_pb.StopRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.StopResponse) => void): grpc.ClientUnaryCall;
    stop(request: bosdyn_api_mission_remote_pb.StopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.StopResponse) => void): grpc.ClientUnaryCall;
    stop(request: bosdyn_api_mission_remote_pb.StopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.StopResponse) => void): grpc.ClientUnaryCall;
    teardownSession(request: bosdyn_api_mission_remote_pb.TeardownSessionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TeardownSessionResponse) => void): grpc.ClientUnaryCall;
    teardownSession(request: bosdyn_api_mission_remote_pb.TeardownSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TeardownSessionResponse) => void): grpc.ClientUnaryCall;
    teardownSession(request: bosdyn_api_mission_remote_pb.TeardownSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TeardownSessionResponse) => void): grpc.ClientUnaryCall;
    getRemoteMissionServiceInfo(request: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse) => void): grpc.ClientUnaryCall;
    getRemoteMissionServiceInfo(request: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse) => void): grpc.ClientUnaryCall;
    getRemoteMissionServiceInfo(request: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse) => void): grpc.ClientUnaryCall;
}

export class RemoteMissionServiceClient extends grpc.Client implements IRemoteMissionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public establishSession(request: bosdyn_api_mission_remote_pb.EstablishSessionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.EstablishSessionResponse) => void): grpc.ClientUnaryCall;
    public establishSession(request: bosdyn_api_mission_remote_pb.EstablishSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.EstablishSessionResponse) => void): grpc.ClientUnaryCall;
    public establishSession(request: bosdyn_api_mission_remote_pb.EstablishSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.EstablishSessionResponse) => void): grpc.ClientUnaryCall;
    public tick(request: bosdyn_api_mission_remote_pb.TickRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TickResponse) => void): grpc.ClientUnaryCall;
    public tick(request: bosdyn_api_mission_remote_pb.TickRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TickResponse) => void): grpc.ClientUnaryCall;
    public tick(request: bosdyn_api_mission_remote_pb.TickRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TickResponse) => void): grpc.ClientUnaryCall;
    public stop(request: bosdyn_api_mission_remote_pb.StopRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public stop(request: bosdyn_api_mission_remote_pb.StopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public stop(request: bosdyn_api_mission_remote_pb.StopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public teardownSession(request: bosdyn_api_mission_remote_pb.TeardownSessionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TeardownSessionResponse) => void): grpc.ClientUnaryCall;
    public teardownSession(request: bosdyn_api_mission_remote_pb.TeardownSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TeardownSessionResponse) => void): grpc.ClientUnaryCall;
    public teardownSession(request: bosdyn_api_mission_remote_pb.TeardownSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.TeardownSessionResponse) => void): grpc.ClientUnaryCall;
    public getRemoteMissionServiceInfo(request: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse) => void): grpc.ClientUnaryCall;
    public getRemoteMissionServiceInfo(request: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse) => void): grpc.ClientUnaryCall;
    public getRemoteMissionServiceInfo(request: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_mission_remote_pb.GetRemoteMissionServiceInfoResponse) => void): grpc.ClientUnaryCall;
}
