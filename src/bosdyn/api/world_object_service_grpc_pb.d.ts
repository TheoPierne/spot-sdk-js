// package: bosdyn.api
// file: bosdyn/api/world_object_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_world_object_service_pb from "../../bosdyn/api/world_object_service_pb";
import * as bosdyn_api_world_object_pb from "../../bosdyn/api/world_object_pb";

interface IWorldObjectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listWorldObjects: IWorldObjectServiceService_IListWorldObjects;
    mutateWorldObjects: IWorldObjectServiceService_IMutateWorldObjects;
}

interface IWorldObjectServiceService_IListWorldObjects extends grpc.MethodDefinition<bosdyn_api_world_object_pb.ListWorldObjectRequest, bosdyn_api_world_object_pb.ListWorldObjectResponse> {
    path: "/bosdyn.api.WorldObjectService/ListWorldObjects";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_world_object_pb.ListWorldObjectRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_world_object_pb.ListWorldObjectRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_world_object_pb.ListWorldObjectResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_world_object_pb.ListWorldObjectResponse>;
}
interface IWorldObjectServiceService_IMutateWorldObjects extends grpc.MethodDefinition<bosdyn_api_world_object_pb.MutateWorldObjectRequest, bosdyn_api_world_object_pb.MutateWorldObjectResponse> {
    path: "/bosdyn.api.WorldObjectService/MutateWorldObjects";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_world_object_pb.MutateWorldObjectRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_world_object_pb.MutateWorldObjectRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_world_object_pb.MutateWorldObjectResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_world_object_pb.MutateWorldObjectResponse>;
}

export const WorldObjectServiceService: IWorldObjectServiceService;

export interface IWorldObjectServiceServer extends grpc.UntypedServiceImplementation {
    listWorldObjects: grpc.handleUnaryCall<bosdyn_api_world_object_pb.ListWorldObjectRequest, bosdyn_api_world_object_pb.ListWorldObjectResponse>;
    mutateWorldObjects: grpc.handleUnaryCall<bosdyn_api_world_object_pb.MutateWorldObjectRequest, bosdyn_api_world_object_pb.MutateWorldObjectResponse>;
}

export interface IWorldObjectServiceClient {
    listWorldObjects(request: bosdyn_api_world_object_pb.ListWorldObjectRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.ListWorldObjectResponse) => void): grpc.ClientUnaryCall;
    listWorldObjects(request: bosdyn_api_world_object_pb.ListWorldObjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.ListWorldObjectResponse) => void): grpc.ClientUnaryCall;
    listWorldObjects(request: bosdyn_api_world_object_pb.ListWorldObjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.ListWorldObjectResponse) => void): grpc.ClientUnaryCall;
    mutateWorldObjects(request: bosdyn_api_world_object_pb.MutateWorldObjectRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.MutateWorldObjectResponse) => void): grpc.ClientUnaryCall;
    mutateWorldObjects(request: bosdyn_api_world_object_pb.MutateWorldObjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.MutateWorldObjectResponse) => void): grpc.ClientUnaryCall;
    mutateWorldObjects(request: bosdyn_api_world_object_pb.MutateWorldObjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.MutateWorldObjectResponse) => void): grpc.ClientUnaryCall;
}

export class WorldObjectServiceClient extends grpc.Client implements IWorldObjectServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listWorldObjects(request: bosdyn_api_world_object_pb.ListWorldObjectRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.ListWorldObjectResponse) => void): grpc.ClientUnaryCall;
    public listWorldObjects(request: bosdyn_api_world_object_pb.ListWorldObjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.ListWorldObjectResponse) => void): grpc.ClientUnaryCall;
    public listWorldObjects(request: bosdyn_api_world_object_pb.ListWorldObjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.ListWorldObjectResponse) => void): grpc.ClientUnaryCall;
    public mutateWorldObjects(request: bosdyn_api_world_object_pb.MutateWorldObjectRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.MutateWorldObjectResponse) => void): grpc.ClientUnaryCall;
    public mutateWorldObjects(request: bosdyn_api_world_object_pb.MutateWorldObjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.MutateWorldObjectResponse) => void): grpc.ClientUnaryCall;
    public mutateWorldObjects(request: bosdyn_api_world_object_pb.MutateWorldObjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_world_object_pb.MutateWorldObjectResponse) => void): grpc.ClientUnaryCall;
}
