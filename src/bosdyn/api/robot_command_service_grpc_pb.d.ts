// package: bosdyn.api
// file: bosdyn/api/robot_command_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_robot_command_service_pb from "../../bosdyn/api/robot_command_service_pb";
import * as bosdyn_api_robot_command_pb from "../../bosdyn/api/robot_command_pb";

interface IRobotCommandServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    robotCommand: IRobotCommandServiceService_IRobotCommand;
    robotCommandFeedback: IRobotCommandServiceService_IRobotCommandFeedback;
    clearBehaviorFault: IRobotCommandServiceService_IClearBehaviorFault;
}

interface IRobotCommandServiceService_IRobotCommand extends grpc.MethodDefinition<bosdyn_api_robot_command_pb.RobotCommandRequest, bosdyn_api_robot_command_pb.RobotCommandResponse> {
    path: "/bosdyn.api.RobotCommandService/RobotCommand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_command_pb.RobotCommandRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_command_pb.RobotCommandRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_command_pb.RobotCommandResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_command_pb.RobotCommandResponse>;
}
interface IRobotCommandServiceService_IRobotCommandFeedback extends grpc.MethodDefinition<bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest, bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse> {
    path: "/bosdyn.api.RobotCommandService/RobotCommandFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse>;
}
interface IRobotCommandServiceService_IClearBehaviorFault extends grpc.MethodDefinition<bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest, bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse> {
    path: "/bosdyn.api.RobotCommandService/ClearBehaviorFault";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse>;
}

export const RobotCommandServiceService: IRobotCommandServiceService;

export interface IRobotCommandServiceServer extends grpc.UntypedServiceImplementation {
    robotCommand: grpc.handleUnaryCall<bosdyn_api_robot_command_pb.RobotCommandRequest, bosdyn_api_robot_command_pb.RobotCommandResponse>;
    robotCommandFeedback: grpc.handleUnaryCall<bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest, bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse>;
    clearBehaviorFault: grpc.handleUnaryCall<bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest, bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse>;
}

export interface IRobotCommandServiceClient {
    robotCommand(request: bosdyn_api_robot_command_pb.RobotCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandResponse) => void): grpc.ClientUnaryCall;
    robotCommand(request: bosdyn_api_robot_command_pb.RobotCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandResponse) => void): grpc.ClientUnaryCall;
    robotCommand(request: bosdyn_api_robot_command_pb.RobotCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandResponse) => void): grpc.ClientUnaryCall;
    robotCommandFeedback(request: bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    robotCommandFeedback(request: bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    robotCommandFeedback(request: bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    clearBehaviorFault(request: bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse) => void): grpc.ClientUnaryCall;
    clearBehaviorFault(request: bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse) => void): grpc.ClientUnaryCall;
    clearBehaviorFault(request: bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse) => void): grpc.ClientUnaryCall;
}

export class RobotCommandServiceClient extends grpc.Client implements IRobotCommandServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public robotCommand(request: bosdyn_api_robot_command_pb.RobotCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandResponse) => void): grpc.ClientUnaryCall;
    public robotCommand(request: bosdyn_api_robot_command_pb.RobotCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandResponse) => void): grpc.ClientUnaryCall;
    public robotCommand(request: bosdyn_api_robot_command_pb.RobotCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandResponse) => void): grpc.ClientUnaryCall;
    public robotCommandFeedback(request: bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public robotCommandFeedback(request: bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public robotCommandFeedback(request: bosdyn_api_robot_command_pb.RobotCommandFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.RobotCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public clearBehaviorFault(request: bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse) => void): grpc.ClientUnaryCall;
    public clearBehaviorFault(request: bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse) => void): grpc.ClientUnaryCall;
    public clearBehaviorFault(request: bosdyn_api_robot_command_pb.ClearBehaviorFaultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.ClearBehaviorFaultResponse) => void): grpc.ClientUnaryCall;
}

interface IRobotCommandStreamingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    jointControlStream: IRobotCommandStreamingServiceService_IJointControlStream;
}

interface IRobotCommandStreamingServiceService_IJointControlStream extends grpc.MethodDefinition<bosdyn_api_robot_command_pb.JointControlStreamRequest, bosdyn_api_robot_command_pb.JointControlStreamResponse> {
    path: "/bosdyn.api.RobotCommandStreamingService/JointControlStream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_command_pb.JointControlStreamResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_command_pb.JointControlStreamResponse>;
}

export const RobotCommandStreamingServiceService: IRobotCommandStreamingServiceService;

export interface IRobotCommandStreamingServiceServer extends grpc.UntypedServiceImplementation {
    jointControlStream: grpc.handleClientStreamingCall<bosdyn_api_robot_command_pb.JointControlStreamRequest, bosdyn_api_robot_command_pb.JointControlStreamResponse>;
}

export interface IRobotCommandStreamingServiceClient {
    jointControlStream(callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.JointControlStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
    jointControlStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.JointControlStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
    jointControlStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.JointControlStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
    jointControlStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.JointControlStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
}

export class RobotCommandStreamingServiceClient extends grpc.Client implements IRobotCommandStreamingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public jointControlStream(callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.JointControlStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
    public jointControlStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.JointControlStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
    public jointControlStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.JointControlStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
    public jointControlStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_command_pb.JointControlStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_robot_command_pb.JointControlStreamRequest>;
}
