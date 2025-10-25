// package: bosdyn.api.docking
// file: bosdyn/api/docking/docking_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_docking_docking_service_pb from "../../../bosdyn/api/docking/docking_service_pb";
import * as bosdyn_api_docking_docking_pb from "../../../bosdyn/api/docking/docking_pb";

interface IDockingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    dockingCommand: IDockingServiceService_IDockingCommand;
    dockingCommandFeedback: IDockingServiceService_IDockingCommandFeedback;
    getDockingConfig: IDockingServiceService_IGetDockingConfig;
    getDockingState: IDockingServiceService_IGetDockingState;
}

interface IDockingServiceService_IDockingCommand extends grpc.MethodDefinition<bosdyn_api_docking_docking_pb.DockingCommandRequest, bosdyn_api_docking_docking_pb.DockingCommandResponse> {
    path: "/bosdyn.api.docking.DockingService/DockingCommand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_docking_docking_pb.DockingCommandRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_docking_docking_pb.DockingCommandRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_docking_docking_pb.DockingCommandResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_docking_docking_pb.DockingCommandResponse>;
}
interface IDockingServiceService_IDockingCommandFeedback extends grpc.MethodDefinition<bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest, bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse> {
    path: "/bosdyn.api.docking.DockingService/DockingCommandFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse>;
}
interface IDockingServiceService_IGetDockingConfig extends grpc.MethodDefinition<bosdyn_api_docking_docking_pb.GetDockingConfigRequest, bosdyn_api_docking_docking_pb.GetDockingConfigResponse> {
    path: "/bosdyn.api.docking.DockingService/GetDockingConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_docking_docking_pb.GetDockingConfigRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_docking_docking_pb.GetDockingConfigRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_docking_docking_pb.GetDockingConfigResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_docking_docking_pb.GetDockingConfigResponse>;
}
interface IDockingServiceService_IGetDockingState extends grpc.MethodDefinition<bosdyn_api_docking_docking_pb.GetDockingStateRequest, bosdyn_api_docking_docking_pb.GetDockingStateResponse> {
    path: "/bosdyn.api.docking.DockingService/GetDockingState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_docking_docking_pb.GetDockingStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_docking_docking_pb.GetDockingStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_docking_docking_pb.GetDockingStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_docking_docking_pb.GetDockingStateResponse>;
}

export const DockingServiceService: IDockingServiceService;

export interface IDockingServiceServer extends grpc.UntypedServiceImplementation {
    dockingCommand: grpc.handleUnaryCall<bosdyn_api_docking_docking_pb.DockingCommandRequest, bosdyn_api_docking_docking_pb.DockingCommandResponse>;
    dockingCommandFeedback: grpc.handleUnaryCall<bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest, bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse>;
    getDockingConfig: grpc.handleUnaryCall<bosdyn_api_docking_docking_pb.GetDockingConfigRequest, bosdyn_api_docking_docking_pb.GetDockingConfigResponse>;
    getDockingState: grpc.handleUnaryCall<bosdyn_api_docking_docking_pb.GetDockingStateRequest, bosdyn_api_docking_docking_pb.GetDockingStateResponse>;
}

export interface IDockingServiceClient {
    dockingCommand(request: bosdyn_api_docking_docking_pb.DockingCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandResponse) => void): grpc.ClientUnaryCall;
    dockingCommand(request: bosdyn_api_docking_docking_pb.DockingCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandResponse) => void): grpc.ClientUnaryCall;
    dockingCommand(request: bosdyn_api_docking_docking_pb.DockingCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandResponse) => void): grpc.ClientUnaryCall;
    dockingCommandFeedback(request: bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    dockingCommandFeedback(request: bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    dockingCommandFeedback(request: bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    getDockingConfig(request: bosdyn_api_docking_docking_pb.GetDockingConfigRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingConfigResponse) => void): grpc.ClientUnaryCall;
    getDockingConfig(request: bosdyn_api_docking_docking_pb.GetDockingConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingConfigResponse) => void): grpc.ClientUnaryCall;
    getDockingConfig(request: bosdyn_api_docking_docking_pb.GetDockingConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingConfigResponse) => void): grpc.ClientUnaryCall;
    getDockingState(request: bosdyn_api_docking_docking_pb.GetDockingStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingStateResponse) => void): grpc.ClientUnaryCall;
    getDockingState(request: bosdyn_api_docking_docking_pb.GetDockingStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingStateResponse) => void): grpc.ClientUnaryCall;
    getDockingState(request: bosdyn_api_docking_docking_pb.GetDockingStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingStateResponse) => void): grpc.ClientUnaryCall;
}

export class DockingServiceClient extends grpc.Client implements IDockingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public dockingCommand(request: bosdyn_api_docking_docking_pb.DockingCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandResponse) => void): grpc.ClientUnaryCall;
    public dockingCommand(request: bosdyn_api_docking_docking_pb.DockingCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandResponse) => void): grpc.ClientUnaryCall;
    public dockingCommand(request: bosdyn_api_docking_docking_pb.DockingCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandResponse) => void): grpc.ClientUnaryCall;
    public dockingCommandFeedback(request: bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public dockingCommandFeedback(request: bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public dockingCommandFeedback(request: bosdyn_api_docking_docking_pb.DockingCommandFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.DockingCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public getDockingConfig(request: bosdyn_api_docking_docking_pb.GetDockingConfigRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingConfigResponse) => void): grpc.ClientUnaryCall;
    public getDockingConfig(request: bosdyn_api_docking_docking_pb.GetDockingConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingConfigResponse) => void): grpc.ClientUnaryCall;
    public getDockingConfig(request: bosdyn_api_docking_docking_pb.GetDockingConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingConfigResponse) => void): grpc.ClientUnaryCall;
    public getDockingState(request: bosdyn_api_docking_docking_pb.GetDockingStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingStateResponse) => void): grpc.ClientUnaryCall;
    public getDockingState(request: bosdyn_api_docking_docking_pb.GetDockingStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingStateResponse) => void): grpc.ClientUnaryCall;
    public getDockingState(request: bosdyn_api_docking_docking_pb.GetDockingStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_docking_docking_pb.GetDockingStateResponse) => void): grpc.ClientUnaryCall;
}
