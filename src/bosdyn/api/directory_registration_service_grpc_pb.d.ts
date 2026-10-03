// package: bosdyn.api
// file: bosdyn/api/directory_registration_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_directory_registration_service_pb from "../../bosdyn/api/directory_registration_service_pb";
import * as bosdyn_api_directory_registration_pb from "../../bosdyn/api/directory_registration_pb";

interface IDirectoryRegistrationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerService: IDirectoryRegistrationServiceService_IRegisterService;
    unregisterService: IDirectoryRegistrationServiceService_IUnregisterService;
    updateService: IDirectoryRegistrationServiceService_IUpdateService;
}

interface IDirectoryRegistrationServiceService_IRegisterService extends grpc.MethodDefinition<bosdyn_api_directory_registration_pb.RegisterServiceRequest, bosdyn_api_directory_registration_pb.RegisterServiceResponse> {
    path: "/bosdyn.api.DirectoryRegistrationService/RegisterService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_directory_registration_pb.RegisterServiceRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_directory_registration_pb.RegisterServiceRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_directory_registration_pb.RegisterServiceResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_directory_registration_pb.RegisterServiceResponse>;
}
interface IDirectoryRegistrationServiceService_IUnregisterService extends grpc.MethodDefinition<bosdyn_api_directory_registration_pb.UnregisterServiceRequest, bosdyn_api_directory_registration_pb.UnregisterServiceResponse> {
    path: "/bosdyn.api.DirectoryRegistrationService/UnregisterService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_directory_registration_pb.UnregisterServiceRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_directory_registration_pb.UnregisterServiceRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_directory_registration_pb.UnregisterServiceResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_directory_registration_pb.UnregisterServiceResponse>;
}
interface IDirectoryRegistrationServiceService_IUpdateService extends grpc.MethodDefinition<bosdyn_api_directory_registration_pb.UpdateServiceRequest, bosdyn_api_directory_registration_pb.UpdateServiceResponse> {
    path: "/bosdyn.api.DirectoryRegistrationService/UpdateService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_directory_registration_pb.UpdateServiceRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_directory_registration_pb.UpdateServiceRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_directory_registration_pb.UpdateServiceResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_directory_registration_pb.UpdateServiceResponse>;
}

export const DirectoryRegistrationServiceService: IDirectoryRegistrationServiceService;

export interface IDirectoryRegistrationServiceServer extends grpc.UntypedServiceImplementation {
    registerService: grpc.handleUnaryCall<bosdyn_api_directory_registration_pb.RegisterServiceRequest, bosdyn_api_directory_registration_pb.RegisterServiceResponse>;
    unregisterService: grpc.handleUnaryCall<bosdyn_api_directory_registration_pb.UnregisterServiceRequest, bosdyn_api_directory_registration_pb.UnregisterServiceResponse>;
    updateService: grpc.handleUnaryCall<bosdyn_api_directory_registration_pb.UpdateServiceRequest, bosdyn_api_directory_registration_pb.UpdateServiceResponse>;
}

export interface IDirectoryRegistrationServiceClient {
    registerService(request: bosdyn_api_directory_registration_pb.RegisterServiceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.RegisterServiceResponse) => void): grpc.ClientUnaryCall;
    registerService(request: bosdyn_api_directory_registration_pb.RegisterServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.RegisterServiceResponse) => void): grpc.ClientUnaryCall;
    registerService(request: bosdyn_api_directory_registration_pb.RegisterServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.RegisterServiceResponse) => void): grpc.ClientUnaryCall;
    unregisterService(request: bosdyn_api_directory_registration_pb.UnregisterServiceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UnregisterServiceResponse) => void): grpc.ClientUnaryCall;
    unregisterService(request: bosdyn_api_directory_registration_pb.UnregisterServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UnregisterServiceResponse) => void): grpc.ClientUnaryCall;
    unregisterService(request: bosdyn_api_directory_registration_pb.UnregisterServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UnregisterServiceResponse) => void): grpc.ClientUnaryCall;
    updateService(request: bosdyn_api_directory_registration_pb.UpdateServiceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    updateService(request: bosdyn_api_directory_registration_pb.UpdateServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    updateService(request: bosdyn_api_directory_registration_pb.UpdateServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
}

export class DirectoryRegistrationServiceClient extends grpc.Client implements IDirectoryRegistrationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public registerService(request: bosdyn_api_directory_registration_pb.RegisterServiceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.RegisterServiceResponse) => void): grpc.ClientUnaryCall;
    public registerService(request: bosdyn_api_directory_registration_pb.RegisterServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.RegisterServiceResponse) => void): grpc.ClientUnaryCall;
    public registerService(request: bosdyn_api_directory_registration_pb.RegisterServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.RegisterServiceResponse) => void): grpc.ClientUnaryCall;
    public unregisterService(request: bosdyn_api_directory_registration_pb.UnregisterServiceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UnregisterServiceResponse) => void): grpc.ClientUnaryCall;
    public unregisterService(request: bosdyn_api_directory_registration_pb.UnregisterServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UnregisterServiceResponse) => void): grpc.ClientUnaryCall;
    public unregisterService(request: bosdyn_api_directory_registration_pb.UnregisterServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UnregisterServiceResponse) => void): grpc.ClientUnaryCall;
    public updateService(request: bosdyn_api_directory_registration_pb.UpdateServiceRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    public updateService(request: bosdyn_api_directory_registration_pb.UpdateServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    public updateService(request: bosdyn_api_directory_registration_pb.UpdateServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_registration_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
}
