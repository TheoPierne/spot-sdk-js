// package: bosdyn.api.auto_return
// file: bosdyn/api/auto_return/auto_return_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_auto_return_auto_return_service_pb from "../../../bosdyn/api/auto_return/auto_return_service_pb";
import * as bosdyn_api_auto_return_auto_return_pb from "../../../bosdyn/api/auto_return/auto_return_pb";

interface IAutoReturnServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    configure: IAutoReturnServiceService_IConfigure;
    getConfiguration: IAutoReturnServiceService_IGetConfiguration;
    start: IAutoReturnServiceService_IStart;
}

interface IAutoReturnServiceService_IConfigure extends grpc.MethodDefinition<bosdyn_api_auto_return_auto_return_pb.ConfigureRequest, bosdyn_api_auto_return_auto_return_pb.ConfigureResponse> {
    path: "/bosdyn.api.auto_return.AutoReturnService/Configure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_auto_return_auto_return_pb.ConfigureRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_auto_return_auto_return_pb.ConfigureRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_auto_return_auto_return_pb.ConfigureResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_auto_return_auto_return_pb.ConfigureResponse>;
}
interface IAutoReturnServiceService_IGetConfiguration extends grpc.MethodDefinition<bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest, bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse> {
    path: "/bosdyn.api.auto_return.AutoReturnService/GetConfiguration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse>;
}
interface IAutoReturnServiceService_IStart extends grpc.MethodDefinition<bosdyn_api_auto_return_auto_return_pb.StartRequest, bosdyn_api_auto_return_auto_return_pb.StartResponse> {
    path: "/bosdyn.api.auto_return.AutoReturnService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_auto_return_auto_return_pb.StartRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_auto_return_auto_return_pb.StartRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_auto_return_auto_return_pb.StartResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_auto_return_auto_return_pb.StartResponse>;
}

export const AutoReturnServiceService: IAutoReturnServiceService;

export interface IAutoReturnServiceServer extends grpc.UntypedServiceImplementation {
    configure: grpc.handleUnaryCall<bosdyn_api_auto_return_auto_return_pb.ConfigureRequest, bosdyn_api_auto_return_auto_return_pb.ConfigureResponse>;
    getConfiguration: grpc.handleUnaryCall<bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest, bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse>;
    start: grpc.handleUnaryCall<bosdyn_api_auto_return_auto_return_pb.StartRequest, bosdyn_api_auto_return_auto_return_pb.StartResponse>;
}

export interface IAutoReturnServiceClient {
    configure(request: bosdyn_api_auto_return_auto_return_pb.ConfigureRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.ConfigureResponse) => void): grpc.ClientUnaryCall;
    configure(request: bosdyn_api_auto_return_auto_return_pb.ConfigureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.ConfigureResponse) => void): grpc.ClientUnaryCall;
    configure(request: bosdyn_api_auto_return_auto_return_pb.ConfigureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.ConfigureResponse) => void): grpc.ClientUnaryCall;
    getConfiguration(request: bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse) => void): grpc.ClientUnaryCall;
    getConfiguration(request: bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse) => void): grpc.ClientUnaryCall;
    getConfiguration(request: bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse) => void): grpc.ClientUnaryCall;
    start(request: bosdyn_api_auto_return_auto_return_pb.StartRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.StartResponse) => void): grpc.ClientUnaryCall;
    start(request: bosdyn_api_auto_return_auto_return_pb.StartRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.StartResponse) => void): grpc.ClientUnaryCall;
    start(request: bosdyn_api_auto_return_auto_return_pb.StartRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.StartResponse) => void): grpc.ClientUnaryCall;
}

export class AutoReturnServiceClient extends grpc.Client implements IAutoReturnServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public configure(request: bosdyn_api_auto_return_auto_return_pb.ConfigureRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.ConfigureResponse) => void): grpc.ClientUnaryCall;
    public configure(request: bosdyn_api_auto_return_auto_return_pb.ConfigureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.ConfigureResponse) => void): grpc.ClientUnaryCall;
    public configure(request: bosdyn_api_auto_return_auto_return_pb.ConfigureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.ConfigureResponse) => void): grpc.ClientUnaryCall;
    public getConfiguration(request: bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getConfiguration(request: bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getConfiguration(request: bosdyn_api_auto_return_auto_return_pb.GetConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.GetConfigurationResponse) => void): grpc.ClientUnaryCall;
    public start(request: bosdyn_api_auto_return_auto_return_pb.StartRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.StartResponse) => void): grpc.ClientUnaryCall;
    public start(request: bosdyn_api_auto_return_auto_return_pb.StartRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.StartResponse) => void): grpc.ClientUnaryCall;
    public start(request: bosdyn_api_auto_return_auto_return_pb.StartRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auto_return_auto_return_pb.StartResponse) => void): grpc.ClientUnaryCall;
}
