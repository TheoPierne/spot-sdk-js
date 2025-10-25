// package: bosdyn.api
// file: bosdyn/api/robot_state_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_robot_state_service_pb from "../../bosdyn/api/robot_state_service_pb";
import * as bosdyn_api_robot_state_pb from "../../bosdyn/api/robot_state_pb";

interface IRobotStateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRobotState: IRobotStateServiceService_IGetRobotState;
    getRobotMetrics: IRobotStateServiceService_IGetRobotMetrics;
    getRobotHardwareConfiguration: IRobotStateServiceService_IGetRobotHardwareConfiguration;
    getRobotLinkModel: IRobotStateServiceService_IGetRobotLinkModel;
}

interface IRobotStateServiceService_IGetRobotState extends grpc.MethodDefinition<bosdyn_api_robot_state_pb.RobotStateRequest, bosdyn_api_robot_state_pb.RobotStateResponse> {
    path: "/bosdyn.api.RobotStateService/GetRobotState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotStateResponse>;
}
interface IRobotStateServiceService_IGetRobotMetrics extends grpc.MethodDefinition<bosdyn_api_robot_state_pb.RobotMetricsRequest, bosdyn_api_robot_state_pb.RobotMetricsResponse> {
    path: "/bosdyn.api.RobotStateService/GetRobotMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotMetricsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotMetricsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotMetricsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotMetricsResponse>;
}
interface IRobotStateServiceService_IGetRobotHardwareConfiguration extends grpc.MethodDefinition<bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest, bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse> {
    path: "/bosdyn.api.RobotStateService/GetRobotHardwareConfiguration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse>;
}
interface IRobotStateServiceService_IGetRobotLinkModel extends grpc.MethodDefinition<bosdyn_api_robot_state_pb.RobotLinkModelRequest, bosdyn_api_robot_state_pb.RobotLinkModelResponse> {
    path: "/bosdyn.api.RobotStateService/GetRobotLinkModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotLinkModelRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotLinkModelRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotLinkModelResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotLinkModelResponse>;
}

export const RobotStateServiceService: IRobotStateServiceService;

export interface IRobotStateServiceServer extends grpc.UntypedServiceImplementation {
    getRobotState: grpc.handleUnaryCall<bosdyn_api_robot_state_pb.RobotStateRequest, bosdyn_api_robot_state_pb.RobotStateResponse>;
    getRobotMetrics: grpc.handleUnaryCall<bosdyn_api_robot_state_pb.RobotMetricsRequest, bosdyn_api_robot_state_pb.RobotMetricsResponse>;
    getRobotHardwareConfiguration: grpc.handleUnaryCall<bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest, bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse>;
    getRobotLinkModel: grpc.handleUnaryCall<bosdyn_api_robot_state_pb.RobotLinkModelRequest, bosdyn_api_robot_state_pb.RobotLinkModelResponse>;
}

export interface IRobotStateServiceClient {
    getRobotState(request: bosdyn_api_robot_state_pb.RobotStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotStateResponse) => void): grpc.ClientUnaryCall;
    getRobotState(request: bosdyn_api_robot_state_pb.RobotStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotStateResponse) => void): grpc.ClientUnaryCall;
    getRobotState(request: bosdyn_api_robot_state_pb.RobotStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotStateResponse) => void): grpc.ClientUnaryCall;
    getRobotMetrics(request: bosdyn_api_robot_state_pb.RobotMetricsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotMetricsResponse) => void): grpc.ClientUnaryCall;
    getRobotMetrics(request: bosdyn_api_robot_state_pb.RobotMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotMetricsResponse) => void): grpc.ClientUnaryCall;
    getRobotMetrics(request: bosdyn_api_robot_state_pb.RobotMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotMetricsResponse) => void): grpc.ClientUnaryCall;
    getRobotHardwareConfiguration(request: bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse) => void): grpc.ClientUnaryCall;
    getRobotHardwareConfiguration(request: bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse) => void): grpc.ClientUnaryCall;
    getRobotHardwareConfiguration(request: bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse) => void): grpc.ClientUnaryCall;
    getRobotLinkModel(request: bosdyn_api_robot_state_pb.RobotLinkModelRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotLinkModelResponse) => void): grpc.ClientUnaryCall;
    getRobotLinkModel(request: bosdyn_api_robot_state_pb.RobotLinkModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotLinkModelResponse) => void): grpc.ClientUnaryCall;
    getRobotLinkModel(request: bosdyn_api_robot_state_pb.RobotLinkModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotLinkModelResponse) => void): grpc.ClientUnaryCall;
}

export class RobotStateServiceClient extends grpc.Client implements IRobotStateServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getRobotState(request: bosdyn_api_robot_state_pb.RobotStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotStateResponse) => void): grpc.ClientUnaryCall;
    public getRobotState(request: bosdyn_api_robot_state_pb.RobotStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotStateResponse) => void): grpc.ClientUnaryCall;
    public getRobotState(request: bosdyn_api_robot_state_pb.RobotStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotStateResponse) => void): grpc.ClientUnaryCall;
    public getRobotMetrics(request: bosdyn_api_robot_state_pb.RobotMetricsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotMetricsResponse) => void): grpc.ClientUnaryCall;
    public getRobotMetrics(request: bosdyn_api_robot_state_pb.RobotMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotMetricsResponse) => void): grpc.ClientUnaryCall;
    public getRobotMetrics(request: bosdyn_api_robot_state_pb.RobotMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotMetricsResponse) => void): grpc.ClientUnaryCall;
    public getRobotHardwareConfiguration(request: bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getRobotHardwareConfiguration(request: bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getRobotHardwareConfiguration(request: bosdyn_api_robot_state_pb.RobotHardwareConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotHardwareConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getRobotLinkModel(request: bosdyn_api_robot_state_pb.RobotLinkModelRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotLinkModelResponse) => void): grpc.ClientUnaryCall;
    public getRobotLinkModel(request: bosdyn_api_robot_state_pb.RobotLinkModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotLinkModelResponse) => void): grpc.ClientUnaryCall;
    public getRobotLinkModel(request: bosdyn_api_robot_state_pb.RobotLinkModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_state_pb.RobotLinkModelResponse) => void): grpc.ClientUnaryCall;
}

interface IRobotStateStreamingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRobotStateStream: IRobotStateStreamingServiceService_IGetRobotStateStream;
}

interface IRobotStateStreamingServiceService_IGetRobotStateStream extends grpc.MethodDefinition<bosdyn_api_robot_state_pb.RobotStateStreamRequest, bosdyn_api_robot_state_pb.RobotStateStreamResponse> {
    path: "/bosdyn.api.RobotStateStreamingService/GetRobotStateStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotStateStreamRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotStateStreamRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_state_pb.RobotStateStreamResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_state_pb.RobotStateStreamResponse>;
}

export const RobotStateStreamingServiceService: IRobotStateStreamingServiceService;

export interface IRobotStateStreamingServiceServer extends grpc.UntypedServiceImplementation {
    getRobotStateStream: grpc.handleServerStreamingCall<bosdyn_api_robot_state_pb.RobotStateStreamRequest, bosdyn_api_robot_state_pb.RobotStateStreamResponse>;
}

export interface IRobotStateStreamingServiceClient {
    getRobotStateStream(request: bosdyn_api_robot_state_pb.RobotStateStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_robot_state_pb.RobotStateStreamResponse>;
    getRobotStateStream(request: bosdyn_api_robot_state_pb.RobotStateStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_robot_state_pb.RobotStateStreamResponse>;
}

export class RobotStateStreamingServiceClient extends grpc.Client implements IRobotStateStreamingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getRobotStateStream(request: bosdyn_api_robot_state_pb.RobotStateStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_robot_state_pb.RobotStateStreamResponse>;
    public getRobotStateStream(request: bosdyn_api_robot_state_pb.RobotStateStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_robot_state_pb.RobotStateStreamResponse>;
}
