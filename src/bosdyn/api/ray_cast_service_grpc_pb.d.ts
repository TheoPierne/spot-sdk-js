// package: bosdyn.api
// file: bosdyn/api/ray_cast_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_ray_cast_service_pb from "../../bosdyn/api/ray_cast_service_pb";
import * as bosdyn_api_ray_cast_pb from "../../bosdyn/api/ray_cast_pb";

interface IRayCastServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    raycast: IRayCastServiceService_IRaycast;
}

interface IRayCastServiceService_IRaycast extends grpc.MethodDefinition<bosdyn_api_ray_cast_pb.RaycastRequest, bosdyn_api_ray_cast_pb.RaycastResponse> {
    path: "/bosdyn.api.RayCastService/Raycast";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_ray_cast_pb.RaycastRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_ray_cast_pb.RaycastRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_ray_cast_pb.RaycastResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_ray_cast_pb.RaycastResponse>;
}

export const RayCastServiceService: IRayCastServiceService;

export interface IRayCastServiceServer extends grpc.UntypedServiceImplementation {
    raycast: grpc.handleUnaryCall<bosdyn_api_ray_cast_pb.RaycastRequest, bosdyn_api_ray_cast_pb.RaycastResponse>;
}

export interface IRayCastServiceClient {
    raycast(request: bosdyn_api_ray_cast_pb.RaycastRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ray_cast_pb.RaycastResponse) => void): grpc.ClientUnaryCall;
    raycast(request: bosdyn_api_ray_cast_pb.RaycastRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ray_cast_pb.RaycastResponse) => void): grpc.ClientUnaryCall;
    raycast(request: bosdyn_api_ray_cast_pb.RaycastRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ray_cast_pb.RaycastResponse) => void): grpc.ClientUnaryCall;
}

export class RayCastServiceClient extends grpc.Client implements IRayCastServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public raycast(request: bosdyn_api_ray_cast_pb.RaycastRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ray_cast_pb.RaycastResponse) => void): grpc.ClientUnaryCall;
    public raycast(request: bosdyn_api_ray_cast_pb.RaycastRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ray_cast_pb.RaycastResponse) => void): grpc.ClientUnaryCall;
    public raycast(request: bosdyn_api_ray_cast_pb.RaycastRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ray_cast_pb.RaycastResponse) => void): grpc.ClientUnaryCall;
}
