// package: bosdyn.api
// file: bosdyn/api/hazard_avoidance_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_hazard_avoidance_service_pb from "../../bosdyn/api/hazard_avoidance_service_pb";
import * as bosdyn_api_hazard_avoidance_pb from "../../bosdyn/api/hazard_avoidance_pb";

interface IHazardAvoidanceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addHazards: IHazardAvoidanceServiceService_IAddHazards;
    getHazardServiceStatus: IHazardAvoidanceServiceService_IGetHazardServiceStatus;
}

interface IHazardAvoidanceServiceService_IAddHazards extends grpc.MethodDefinition<bosdyn_api_hazard_avoidance_pb.AddHazardsRequest, bosdyn_api_hazard_avoidance_pb.AddHazardsResponse> {
    path: "/bosdyn.api.HazardAvoidanceService/AddHazards";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_hazard_avoidance_pb.AddHazardsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_hazard_avoidance_pb.AddHazardsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_hazard_avoidance_pb.AddHazardsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_hazard_avoidance_pb.AddHazardsResponse>;
}
interface IHazardAvoidanceServiceService_IGetHazardServiceStatus extends grpc.MethodDefinition<bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest, bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse> {
    path: "/bosdyn.api.HazardAvoidanceService/GetHazardServiceStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse>;
}

export const HazardAvoidanceServiceService: IHazardAvoidanceServiceService;

export interface IHazardAvoidanceServiceServer extends grpc.UntypedServiceImplementation {
    addHazards: grpc.handleUnaryCall<bosdyn_api_hazard_avoidance_pb.AddHazardsRequest, bosdyn_api_hazard_avoidance_pb.AddHazardsResponse>;
    getHazardServiceStatus: grpc.handleUnaryCall<bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest, bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse>;
}

export interface IHazardAvoidanceServiceClient {
    addHazards(request: bosdyn_api_hazard_avoidance_pb.AddHazardsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.AddHazardsResponse) => void): grpc.ClientUnaryCall;
    addHazards(request: bosdyn_api_hazard_avoidance_pb.AddHazardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.AddHazardsResponse) => void): grpc.ClientUnaryCall;
    addHazards(request: bosdyn_api_hazard_avoidance_pb.AddHazardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.AddHazardsResponse) => void): grpc.ClientUnaryCall;
    getHazardServiceStatus(request: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse) => void): grpc.ClientUnaryCall;
    getHazardServiceStatus(request: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse) => void): grpc.ClientUnaryCall;
    getHazardServiceStatus(request: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse) => void): grpc.ClientUnaryCall;
}

export class HazardAvoidanceServiceClient extends grpc.Client implements IHazardAvoidanceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addHazards(request: bosdyn_api_hazard_avoidance_pb.AddHazardsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.AddHazardsResponse) => void): grpc.ClientUnaryCall;
    public addHazards(request: bosdyn_api_hazard_avoidance_pb.AddHazardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.AddHazardsResponse) => void): grpc.ClientUnaryCall;
    public addHazards(request: bosdyn_api_hazard_avoidance_pb.AddHazardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.AddHazardsResponse) => void): grpc.ClientUnaryCall;
    public getHazardServiceStatus(request: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse) => void): grpc.ClientUnaryCall;
    public getHazardServiceStatus(request: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse) => void): grpc.ClientUnaryCall;
    public getHazardServiceStatus(request: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_hazard_avoidance_pb.GetHazardServiceStatusResponse) => void): grpc.ClientUnaryCall;
}
