// package: bosdyn.api
// file: bosdyn/api/local_grid_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_local_grid_service_pb from "../../bosdyn/api/local_grid_service_pb";
import * as bosdyn_api_local_grid_pb from "../../bosdyn/api/local_grid_pb";

interface ILocalGridServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getLocalGridTypes: ILocalGridServiceService_IGetLocalGridTypes;
    getLocalGrids: ILocalGridServiceService_IGetLocalGrids;
}

interface ILocalGridServiceService_IGetLocalGridTypes extends grpc.MethodDefinition<bosdyn_api_local_grid_pb.GetLocalGridTypesRequest, bosdyn_api_local_grid_pb.GetLocalGridTypesResponse> {
    path: "/bosdyn.api.LocalGridService/GetLocalGridTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_local_grid_pb.GetLocalGridTypesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_local_grid_pb.GetLocalGridTypesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_local_grid_pb.GetLocalGridTypesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_local_grid_pb.GetLocalGridTypesResponse>;
}
interface ILocalGridServiceService_IGetLocalGrids extends grpc.MethodDefinition<bosdyn_api_local_grid_pb.GetLocalGridsRequest, bosdyn_api_local_grid_pb.GetLocalGridsResponse> {
    path: "/bosdyn.api.LocalGridService/GetLocalGrids";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_local_grid_pb.GetLocalGridsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_local_grid_pb.GetLocalGridsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_local_grid_pb.GetLocalGridsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_local_grid_pb.GetLocalGridsResponse>;
}

export const LocalGridServiceService: ILocalGridServiceService;

export interface ILocalGridServiceServer extends grpc.UntypedServiceImplementation {
    getLocalGridTypes: grpc.handleUnaryCall<bosdyn_api_local_grid_pb.GetLocalGridTypesRequest, bosdyn_api_local_grid_pb.GetLocalGridTypesResponse>;
    getLocalGrids: grpc.handleUnaryCall<bosdyn_api_local_grid_pb.GetLocalGridsRequest, bosdyn_api_local_grid_pb.GetLocalGridsResponse>;
}

export interface ILocalGridServiceClient {
    getLocalGridTypes(request: bosdyn_api_local_grid_pb.GetLocalGridTypesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridTypesResponse) => void): grpc.ClientUnaryCall;
    getLocalGridTypes(request: bosdyn_api_local_grid_pb.GetLocalGridTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridTypesResponse) => void): grpc.ClientUnaryCall;
    getLocalGridTypes(request: bosdyn_api_local_grid_pb.GetLocalGridTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridTypesResponse) => void): grpc.ClientUnaryCall;
    getLocalGrids(request: bosdyn_api_local_grid_pb.GetLocalGridsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridsResponse) => void): grpc.ClientUnaryCall;
    getLocalGrids(request: bosdyn_api_local_grid_pb.GetLocalGridsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridsResponse) => void): grpc.ClientUnaryCall;
    getLocalGrids(request: bosdyn_api_local_grid_pb.GetLocalGridsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridsResponse) => void): grpc.ClientUnaryCall;
}

export class LocalGridServiceClient extends grpc.Client implements ILocalGridServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getLocalGridTypes(request: bosdyn_api_local_grid_pb.GetLocalGridTypesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridTypesResponse) => void): grpc.ClientUnaryCall;
    public getLocalGridTypes(request: bosdyn_api_local_grid_pb.GetLocalGridTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridTypesResponse) => void): grpc.ClientUnaryCall;
    public getLocalGridTypes(request: bosdyn_api_local_grid_pb.GetLocalGridTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridTypesResponse) => void): grpc.ClientUnaryCall;
    public getLocalGrids(request: bosdyn_api_local_grid_pb.GetLocalGridsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridsResponse) => void): grpc.ClientUnaryCall;
    public getLocalGrids(request: bosdyn_api_local_grid_pb.GetLocalGridsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridsResponse) => void): grpc.ClientUnaryCall;
    public getLocalGrids(request: bosdyn_api_local_grid_pb.GetLocalGridsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_local_grid_pb.GetLocalGridsResponse) => void): grpc.ClientUnaryCall;
}
