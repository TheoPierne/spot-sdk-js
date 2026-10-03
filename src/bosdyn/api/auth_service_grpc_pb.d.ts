// package: bosdyn.api
// file: bosdyn/api/auth_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_auth_service_pb from "../../bosdyn/api/auth_service_pb";
import * as bosdyn_api_auth_pb from "../../bosdyn/api/auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAuthToken: IAuthServiceService_IGetAuthToken;
}

interface IAuthServiceService_IGetAuthToken extends grpc.MethodDefinition<bosdyn_api_auth_pb.GetAuthTokenRequest, bosdyn_api_auth_pb.GetAuthTokenResponse> {
    path: "/bosdyn.api.AuthService/GetAuthToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_auth_pb.GetAuthTokenRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_auth_pb.GetAuthTokenRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_auth_pb.GetAuthTokenResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_auth_pb.GetAuthTokenResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    getAuthToken: grpc.handleUnaryCall<bosdyn_api_auth_pb.GetAuthTokenRequest, bosdyn_api_auth_pb.GetAuthTokenResponse>;
}

export interface IAuthServiceClient {
    getAuthToken(request: bosdyn_api_auth_pb.GetAuthTokenRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
    getAuthToken(request: bosdyn_api_auth_pb.GetAuthTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
    getAuthToken(request: bosdyn_api_auth_pb.GetAuthTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAuthToken(request: bosdyn_api_auth_pb.GetAuthTokenRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
    public getAuthToken(request: bosdyn_api_auth_pb.GetAuthTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
    public getAuthToken(request: bosdyn_api_auth_pb.GetAuthTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_auth_pb.GetAuthTokenResponse) => void): grpc.ClientUnaryCall;
}
