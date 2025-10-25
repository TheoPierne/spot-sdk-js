// package: bosdyn.api
// file: bosdyn/api/power_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_power_service_pb from "../../bosdyn/api/power_service_pb";
import * as bosdyn_api_power_pb from "../../bosdyn/api/power_pb";

interface IPowerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    powerCommand: IPowerServiceService_IPowerCommand;
    powerCommandFeedback: IPowerServiceService_IPowerCommandFeedback;
    fanPowerCommand: IPowerServiceService_IFanPowerCommand;
    fanPowerCommandFeedback: IPowerServiceService_IFanPowerCommandFeedback;
    resetSafetyStop: IPowerServiceService_IResetSafetyStop;
}

interface IPowerServiceService_IPowerCommand extends grpc.MethodDefinition<bosdyn_api_power_pb.PowerCommandRequest, bosdyn_api_power_pb.PowerCommandResponse> {
    path: "/bosdyn.api.PowerService/PowerCommand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_power_pb.PowerCommandRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_power_pb.PowerCommandRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_power_pb.PowerCommandResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_power_pb.PowerCommandResponse>;
}
interface IPowerServiceService_IPowerCommandFeedback extends grpc.MethodDefinition<bosdyn_api_power_pb.PowerCommandFeedbackRequest, bosdyn_api_power_pb.PowerCommandFeedbackResponse> {
    path: "/bosdyn.api.PowerService/PowerCommandFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_power_pb.PowerCommandFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_power_pb.PowerCommandFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_power_pb.PowerCommandFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_power_pb.PowerCommandFeedbackResponse>;
}
interface IPowerServiceService_IFanPowerCommand extends grpc.MethodDefinition<bosdyn_api_power_pb.FanPowerCommandRequest, bosdyn_api_power_pb.FanPowerCommandResponse> {
    path: "/bosdyn.api.PowerService/FanPowerCommand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_power_pb.FanPowerCommandRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_power_pb.FanPowerCommandRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_power_pb.FanPowerCommandResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_power_pb.FanPowerCommandResponse>;
}
interface IPowerServiceService_IFanPowerCommandFeedback extends grpc.MethodDefinition<bosdyn_api_power_pb.FanPowerCommandFeedbackRequest, bosdyn_api_power_pb.FanPowerCommandFeedbackResponse> {
    path: "/bosdyn.api.PowerService/FanPowerCommandFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_power_pb.FanPowerCommandFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_power_pb.FanPowerCommandFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_power_pb.FanPowerCommandFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_power_pb.FanPowerCommandFeedbackResponse>;
}
interface IPowerServiceService_IResetSafetyStop extends grpc.MethodDefinition<bosdyn_api_power_pb.ResetSafetyStopRequest, bosdyn_api_power_pb.ResetSafetyStopResponse> {
    path: "/bosdyn.api.PowerService/ResetSafetyStop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_power_pb.ResetSafetyStopRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_power_pb.ResetSafetyStopRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_power_pb.ResetSafetyStopResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_power_pb.ResetSafetyStopResponse>;
}

export const PowerServiceService: IPowerServiceService;

export interface IPowerServiceServer extends grpc.UntypedServiceImplementation {
    powerCommand: grpc.handleUnaryCall<bosdyn_api_power_pb.PowerCommandRequest, bosdyn_api_power_pb.PowerCommandResponse>;
    powerCommandFeedback: grpc.handleUnaryCall<bosdyn_api_power_pb.PowerCommandFeedbackRequest, bosdyn_api_power_pb.PowerCommandFeedbackResponse>;
    fanPowerCommand: grpc.handleUnaryCall<bosdyn_api_power_pb.FanPowerCommandRequest, bosdyn_api_power_pb.FanPowerCommandResponse>;
    fanPowerCommandFeedback: grpc.handleUnaryCall<bosdyn_api_power_pb.FanPowerCommandFeedbackRequest, bosdyn_api_power_pb.FanPowerCommandFeedbackResponse>;
    resetSafetyStop: grpc.handleUnaryCall<bosdyn_api_power_pb.ResetSafetyStopRequest, bosdyn_api_power_pb.ResetSafetyStopResponse>;
}

export interface IPowerServiceClient {
    powerCommand(request: bosdyn_api_power_pb.PowerCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandResponse) => void): grpc.ClientUnaryCall;
    powerCommand(request: bosdyn_api_power_pb.PowerCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandResponse) => void): grpc.ClientUnaryCall;
    powerCommand(request: bosdyn_api_power_pb.PowerCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandResponse) => void): grpc.ClientUnaryCall;
    powerCommandFeedback(request: bosdyn_api_power_pb.PowerCommandFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    powerCommandFeedback(request: bosdyn_api_power_pb.PowerCommandFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    powerCommandFeedback(request: bosdyn_api_power_pb.PowerCommandFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    fanPowerCommand(request: bosdyn_api_power_pb.FanPowerCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandResponse) => void): grpc.ClientUnaryCall;
    fanPowerCommand(request: bosdyn_api_power_pb.FanPowerCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandResponse) => void): grpc.ClientUnaryCall;
    fanPowerCommand(request: bosdyn_api_power_pb.FanPowerCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandResponse) => void): grpc.ClientUnaryCall;
    fanPowerCommandFeedback(request: bosdyn_api_power_pb.FanPowerCommandFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    fanPowerCommandFeedback(request: bosdyn_api_power_pb.FanPowerCommandFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    fanPowerCommandFeedback(request: bosdyn_api_power_pb.FanPowerCommandFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    resetSafetyStop(request: bosdyn_api_power_pb.ResetSafetyStopRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.ResetSafetyStopResponse) => void): grpc.ClientUnaryCall;
    resetSafetyStop(request: bosdyn_api_power_pb.ResetSafetyStopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.ResetSafetyStopResponse) => void): grpc.ClientUnaryCall;
    resetSafetyStop(request: bosdyn_api_power_pb.ResetSafetyStopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.ResetSafetyStopResponse) => void): grpc.ClientUnaryCall;
}

export class PowerServiceClient extends grpc.Client implements IPowerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public powerCommand(request: bosdyn_api_power_pb.PowerCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandResponse) => void): grpc.ClientUnaryCall;
    public powerCommand(request: bosdyn_api_power_pb.PowerCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandResponse) => void): grpc.ClientUnaryCall;
    public powerCommand(request: bosdyn_api_power_pb.PowerCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandResponse) => void): grpc.ClientUnaryCall;
    public powerCommandFeedback(request: bosdyn_api_power_pb.PowerCommandFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public powerCommandFeedback(request: bosdyn_api_power_pb.PowerCommandFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public powerCommandFeedback(request: bosdyn_api_power_pb.PowerCommandFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.PowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public fanPowerCommand(request: bosdyn_api_power_pb.FanPowerCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandResponse) => void): grpc.ClientUnaryCall;
    public fanPowerCommand(request: bosdyn_api_power_pb.FanPowerCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandResponse) => void): grpc.ClientUnaryCall;
    public fanPowerCommand(request: bosdyn_api_power_pb.FanPowerCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandResponse) => void): grpc.ClientUnaryCall;
    public fanPowerCommandFeedback(request: bosdyn_api_power_pb.FanPowerCommandFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public fanPowerCommandFeedback(request: bosdyn_api_power_pb.FanPowerCommandFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public fanPowerCommandFeedback(request: bosdyn_api_power_pb.FanPowerCommandFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.FanPowerCommandFeedbackResponse) => void): grpc.ClientUnaryCall;
    public resetSafetyStop(request: bosdyn_api_power_pb.ResetSafetyStopRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.ResetSafetyStopResponse) => void): grpc.ClientUnaryCall;
    public resetSafetyStop(request: bosdyn_api_power_pb.ResetSafetyStopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.ResetSafetyStopResponse) => void): grpc.ClientUnaryCall;
    public resetSafetyStop(request: bosdyn_api_power_pb.ResetSafetyStopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_power_pb.ResetSafetyStopResponse) => void): grpc.ClientUnaryCall;
}
