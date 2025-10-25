// package: bosdyn.api
// file: bosdyn/api/payload_registration_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_payload_registration_service_pb from "../../bosdyn/api/payload_registration_service_pb";
import * as bosdyn_api_payload_registration_pb from "../../bosdyn/api/payload_registration_pb";

interface IPayloadRegistrationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerPayload: IPayloadRegistrationServiceService_IRegisterPayload;
    updatePayloadVersion: IPayloadRegistrationServiceService_IUpdatePayloadVersion;
    getPayloadAuthToken: IPayloadRegistrationServiceService_IGetPayloadAuthToken;
    updatePayloadAttached: IPayloadRegistrationServiceService_IUpdatePayloadAttached;
}

interface IPayloadRegistrationServiceService_IRegisterPayload extends grpc.MethodDefinition<bosdyn_api_payload_registration_pb.RegisterPayloadRequest, bosdyn_api_payload_registration_pb.RegisterPayloadResponse> {
    path: "/bosdyn.api.PayloadRegistrationService/RegisterPayload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_registration_pb.RegisterPayloadRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_registration_pb.RegisterPayloadRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_registration_pb.RegisterPayloadResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_registration_pb.RegisterPayloadResponse>;
}
interface IPayloadRegistrationServiceService_IUpdatePayloadVersion extends grpc.MethodDefinition<bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest, bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse> {
    path: "/bosdyn.api.PayloadRegistrationService/UpdatePayloadVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse>;
}
interface IPayloadRegistrationServiceService_IGetPayloadAuthToken extends grpc.MethodDefinition<bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest, bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse> {
    path: "/bosdyn.api.PayloadRegistrationService/GetPayloadAuthToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse>;
}
interface IPayloadRegistrationServiceService_IUpdatePayloadAttached extends grpc.MethodDefinition<bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest, bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse> {
    path: "/bosdyn.api.PayloadRegistrationService/UpdatePayloadAttached";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse>;
}

export const PayloadRegistrationServiceService: IPayloadRegistrationServiceService;

export interface IPayloadRegistrationServiceServer extends grpc.UntypedServiceImplementation {
    registerPayload: grpc.handleUnaryCall<bosdyn_api_payload_registration_pb.RegisterPayloadRequest, bosdyn_api_payload_registration_pb.RegisterPayloadResponse>;
    updatePayloadVersion: grpc.handleUnaryCall<bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest, bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse>;
    getPayloadAuthToken: grpc.handleUnaryCall<bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest, bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse>;
    updatePayloadAttached: grpc.handleUnaryCall<bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest, bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse>;
}

export interface IPayloadRegistrationServiceClient {
    registerPayload(request: bosdyn_api_payload_registration_pb.RegisterPayloadRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.RegisterPayloadResponse) => void): grpc.ClientUnaryCall;
    registerPayload(request: bosdyn_api_payload_registration_pb.RegisterPayloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.RegisterPayloadResponse) => void): grpc.ClientUnaryCall;
    registerPayload(request: bosdyn_api_payload_registration_pb.RegisterPayloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.RegisterPayloadResponse) => void): grpc.ClientUnaryCall;
    updatePayloadVersion(request: bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse) => void): grpc.ClientUnaryCall;
    updatePayloadVersion(request: bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse) => void): grpc.ClientUnaryCall;
    updatePayloadVersion(request: bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse) => void): grpc.ClientUnaryCall;
    getPayloadAuthToken(request: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse) => void): grpc.ClientUnaryCall;
    getPayloadAuthToken(request: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse) => void): grpc.ClientUnaryCall;
    getPayloadAuthToken(request: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse) => void): grpc.ClientUnaryCall;
    updatePayloadAttached(request: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse) => void): grpc.ClientUnaryCall;
    updatePayloadAttached(request: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse) => void): grpc.ClientUnaryCall;
    updatePayloadAttached(request: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse) => void): grpc.ClientUnaryCall;
}

export class PayloadRegistrationServiceClient extends grpc.Client implements IPayloadRegistrationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public registerPayload(request: bosdyn_api_payload_registration_pb.RegisterPayloadRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.RegisterPayloadResponse) => void): grpc.ClientUnaryCall;
    public registerPayload(request: bosdyn_api_payload_registration_pb.RegisterPayloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.RegisterPayloadResponse) => void): grpc.ClientUnaryCall;
    public registerPayload(request: bosdyn_api_payload_registration_pb.RegisterPayloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.RegisterPayloadResponse) => void): grpc.ClientUnaryCall;
    public updatePayloadVersion(request: bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse) => void): grpc.ClientUnaryCall;
    public updatePayloadVersion(request: bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse) => void): grpc.ClientUnaryCall;
    public updatePayloadVersion(request: bosdyn_api_payload_registration_pb.UpdatePayloadVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadVersionResponse) => void): grpc.ClientUnaryCall;
    public getPayloadAuthToken(request: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse) => void): grpc.ClientUnaryCall;
    public getPayloadAuthToken(request: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse) => void): grpc.ClientUnaryCall;
    public getPayloadAuthToken(request: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.GetPayloadAuthTokenResponse) => void): grpc.ClientUnaryCall;
    public updatePayloadAttached(request: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse) => void): grpc.ClientUnaryCall;
    public updatePayloadAttached(request: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse) => void): grpc.ClientUnaryCall;
    public updatePayloadAttached(request: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_registration_pb.UpdatePayloadAttachedResponse) => void): grpc.ClientUnaryCall;
}
