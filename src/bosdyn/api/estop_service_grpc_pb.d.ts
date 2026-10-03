// package: bosdyn.api
// file: bosdyn/api/estop_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_estop_service_pb from "../../bosdyn/api/estop_service_pb";
import * as bosdyn_api_estop_pb from "../../bosdyn/api/estop_pb";

interface IEstopServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerEstopEndpoint: IEstopServiceService_IRegisterEstopEndpoint;
    deregisterEstopEndpoint: IEstopServiceService_IDeregisterEstopEndpoint;
    estopCheckIn: IEstopServiceService_IEstopCheckIn;
    getEstopConfig: IEstopServiceService_IGetEstopConfig;
    setEstopConfig: IEstopServiceService_ISetEstopConfig;
    getEstopSystemStatus: IEstopServiceService_IGetEstopSystemStatus;
}

interface IEstopServiceService_IRegisterEstopEndpoint extends grpc.MethodDefinition<bosdyn_api_estop_pb.RegisterEstopEndpointRequest, bosdyn_api_estop_pb.RegisterEstopEndpointResponse> {
    path: "/bosdyn.api.EstopService/RegisterEstopEndpoint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_estop_pb.RegisterEstopEndpointRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_estop_pb.RegisterEstopEndpointRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_estop_pb.RegisterEstopEndpointResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_estop_pb.RegisterEstopEndpointResponse>;
}
interface IEstopServiceService_IDeregisterEstopEndpoint extends grpc.MethodDefinition<bosdyn_api_estop_pb.DeregisterEstopEndpointRequest, bosdyn_api_estop_pb.DeregisterEstopEndpointResponse> {
    path: "/bosdyn.api.EstopService/DeregisterEstopEndpoint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_estop_pb.DeregisterEstopEndpointRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_estop_pb.DeregisterEstopEndpointRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_estop_pb.DeregisterEstopEndpointResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_estop_pb.DeregisterEstopEndpointResponse>;
}
interface IEstopServiceService_IEstopCheckIn extends grpc.MethodDefinition<bosdyn_api_estop_pb.EstopCheckInRequest, bosdyn_api_estop_pb.EstopCheckInResponse> {
    path: "/bosdyn.api.EstopService/EstopCheckIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_estop_pb.EstopCheckInRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_estop_pb.EstopCheckInRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_estop_pb.EstopCheckInResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_estop_pb.EstopCheckInResponse>;
}
interface IEstopServiceService_IGetEstopConfig extends grpc.MethodDefinition<bosdyn_api_estop_pb.GetEstopConfigRequest, bosdyn_api_estop_pb.GetEstopConfigResponse> {
    path: "/bosdyn.api.EstopService/GetEstopConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_estop_pb.GetEstopConfigRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_estop_pb.GetEstopConfigRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_estop_pb.GetEstopConfigResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_estop_pb.GetEstopConfigResponse>;
}
interface IEstopServiceService_ISetEstopConfig extends grpc.MethodDefinition<bosdyn_api_estop_pb.SetEstopConfigRequest, bosdyn_api_estop_pb.SetEstopConfigResponse> {
    path: "/bosdyn.api.EstopService/SetEstopConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_estop_pb.SetEstopConfigRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_estop_pb.SetEstopConfigRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_estop_pb.SetEstopConfigResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_estop_pb.SetEstopConfigResponse>;
}
interface IEstopServiceService_IGetEstopSystemStatus extends grpc.MethodDefinition<bosdyn_api_estop_pb.GetEstopSystemStatusRequest, bosdyn_api_estop_pb.GetEstopSystemStatusResponse> {
    path: "/bosdyn.api.EstopService/GetEstopSystemStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_estop_pb.GetEstopSystemStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_estop_pb.GetEstopSystemStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_estop_pb.GetEstopSystemStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_estop_pb.GetEstopSystemStatusResponse>;
}

export const EstopServiceService: IEstopServiceService;

export interface IEstopServiceServer extends grpc.UntypedServiceImplementation {
    registerEstopEndpoint: grpc.handleUnaryCall<bosdyn_api_estop_pb.RegisterEstopEndpointRequest, bosdyn_api_estop_pb.RegisterEstopEndpointResponse>;
    deregisterEstopEndpoint: grpc.handleUnaryCall<bosdyn_api_estop_pb.DeregisterEstopEndpointRequest, bosdyn_api_estop_pb.DeregisterEstopEndpointResponse>;
    estopCheckIn: grpc.handleUnaryCall<bosdyn_api_estop_pb.EstopCheckInRequest, bosdyn_api_estop_pb.EstopCheckInResponse>;
    getEstopConfig: grpc.handleUnaryCall<bosdyn_api_estop_pb.GetEstopConfigRequest, bosdyn_api_estop_pb.GetEstopConfigResponse>;
    setEstopConfig: grpc.handleUnaryCall<bosdyn_api_estop_pb.SetEstopConfigRequest, bosdyn_api_estop_pb.SetEstopConfigResponse>;
    getEstopSystemStatus: grpc.handleUnaryCall<bosdyn_api_estop_pb.GetEstopSystemStatusRequest, bosdyn_api_estop_pb.GetEstopSystemStatusResponse>;
}

export interface IEstopServiceClient {
    registerEstopEndpoint(request: bosdyn_api_estop_pb.RegisterEstopEndpointRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.RegisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    registerEstopEndpoint(request: bosdyn_api_estop_pb.RegisterEstopEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.RegisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    registerEstopEndpoint(request: bosdyn_api_estop_pb.RegisterEstopEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.RegisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    deregisterEstopEndpoint(request: bosdyn_api_estop_pb.DeregisterEstopEndpointRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.DeregisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    deregisterEstopEndpoint(request: bosdyn_api_estop_pb.DeregisterEstopEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.DeregisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    deregisterEstopEndpoint(request: bosdyn_api_estop_pb.DeregisterEstopEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.DeregisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    estopCheckIn(request: bosdyn_api_estop_pb.EstopCheckInRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.EstopCheckInResponse) => void): grpc.ClientUnaryCall;
    estopCheckIn(request: bosdyn_api_estop_pb.EstopCheckInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.EstopCheckInResponse) => void): grpc.ClientUnaryCall;
    estopCheckIn(request: bosdyn_api_estop_pb.EstopCheckInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.EstopCheckInResponse) => void): grpc.ClientUnaryCall;
    getEstopConfig(request: bosdyn_api_estop_pb.GetEstopConfigRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    getEstopConfig(request: bosdyn_api_estop_pb.GetEstopConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    getEstopConfig(request: bosdyn_api_estop_pb.GetEstopConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    setEstopConfig(request: bosdyn_api_estop_pb.SetEstopConfigRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.SetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    setEstopConfig(request: bosdyn_api_estop_pb.SetEstopConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.SetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    setEstopConfig(request: bosdyn_api_estop_pb.SetEstopConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.SetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    getEstopSystemStatus(request: bosdyn_api_estop_pb.GetEstopSystemStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopSystemStatusResponse) => void): grpc.ClientUnaryCall;
    getEstopSystemStatus(request: bosdyn_api_estop_pb.GetEstopSystemStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopSystemStatusResponse) => void): grpc.ClientUnaryCall;
    getEstopSystemStatus(request: bosdyn_api_estop_pb.GetEstopSystemStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopSystemStatusResponse) => void): grpc.ClientUnaryCall;
}

export class EstopServiceClient extends grpc.Client implements IEstopServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public registerEstopEndpoint(request: bosdyn_api_estop_pb.RegisterEstopEndpointRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.RegisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    public registerEstopEndpoint(request: bosdyn_api_estop_pb.RegisterEstopEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.RegisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    public registerEstopEndpoint(request: bosdyn_api_estop_pb.RegisterEstopEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.RegisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    public deregisterEstopEndpoint(request: bosdyn_api_estop_pb.DeregisterEstopEndpointRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.DeregisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    public deregisterEstopEndpoint(request: bosdyn_api_estop_pb.DeregisterEstopEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.DeregisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    public deregisterEstopEndpoint(request: bosdyn_api_estop_pb.DeregisterEstopEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.DeregisterEstopEndpointResponse) => void): grpc.ClientUnaryCall;
    public estopCheckIn(request: bosdyn_api_estop_pb.EstopCheckInRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.EstopCheckInResponse) => void): grpc.ClientUnaryCall;
    public estopCheckIn(request: bosdyn_api_estop_pb.EstopCheckInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.EstopCheckInResponse) => void): grpc.ClientUnaryCall;
    public estopCheckIn(request: bosdyn_api_estop_pb.EstopCheckInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.EstopCheckInResponse) => void): grpc.ClientUnaryCall;
    public getEstopConfig(request: bosdyn_api_estop_pb.GetEstopConfigRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    public getEstopConfig(request: bosdyn_api_estop_pb.GetEstopConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    public getEstopConfig(request: bosdyn_api_estop_pb.GetEstopConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    public setEstopConfig(request: bosdyn_api_estop_pb.SetEstopConfigRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.SetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    public setEstopConfig(request: bosdyn_api_estop_pb.SetEstopConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.SetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    public setEstopConfig(request: bosdyn_api_estop_pb.SetEstopConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.SetEstopConfigResponse) => void): grpc.ClientUnaryCall;
    public getEstopSystemStatus(request: bosdyn_api_estop_pb.GetEstopSystemStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopSystemStatusResponse) => void): grpc.ClientUnaryCall;
    public getEstopSystemStatus(request: bosdyn_api_estop_pb.GetEstopSystemStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopSystemStatusResponse) => void): grpc.ClientUnaryCall;
    public getEstopSystemStatus(request: bosdyn_api_estop_pb.GetEstopSystemStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_estop_pb.GetEstopSystemStatusResponse) => void): grpc.ClientUnaryCall;
}
