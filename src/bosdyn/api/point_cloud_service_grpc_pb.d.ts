// package: bosdyn.api
// file: bosdyn/api/point_cloud_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_point_cloud_service_pb from "../../bosdyn/api/point_cloud_service_pb";
import * as bosdyn_api_point_cloud_pb from "../../bosdyn/api/point_cloud_pb";

interface IPointCloudServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listPointCloudSources: IPointCloudServiceService_IListPointCloudSources;
    getPointCloud: IPointCloudServiceService_IGetPointCloud;
}

interface IPointCloudServiceService_IListPointCloudSources extends grpc.MethodDefinition<bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest, bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse> {
    path: "/bosdyn.api.PointCloudService/ListPointCloudSources";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse>;
}
interface IPointCloudServiceService_IGetPointCloud extends grpc.MethodDefinition<bosdyn_api_point_cloud_pb.GetPointCloudRequest, bosdyn_api_point_cloud_pb.GetPointCloudResponse> {
    path: "/bosdyn.api.PointCloudService/GetPointCloud";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_point_cloud_pb.GetPointCloudRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_point_cloud_pb.GetPointCloudRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_point_cloud_pb.GetPointCloudResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_point_cloud_pb.GetPointCloudResponse>;
}

export const PointCloudServiceService: IPointCloudServiceService;

export interface IPointCloudServiceServer extends grpc.UntypedServiceImplementation {
    listPointCloudSources: grpc.handleUnaryCall<bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest, bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse>;
    getPointCloud: grpc.handleUnaryCall<bosdyn_api_point_cloud_pb.GetPointCloudRequest, bosdyn_api_point_cloud_pb.GetPointCloudResponse>;
}

export interface IPointCloudServiceClient {
    listPointCloudSources(request: bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse) => void): grpc.ClientUnaryCall;
    listPointCloudSources(request: bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse) => void): grpc.ClientUnaryCall;
    listPointCloudSources(request: bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse) => void): grpc.ClientUnaryCall;
    getPointCloud(request: bosdyn_api_point_cloud_pb.GetPointCloudRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.GetPointCloudResponse) => void): grpc.ClientUnaryCall;
    getPointCloud(request: bosdyn_api_point_cloud_pb.GetPointCloudRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.GetPointCloudResponse) => void): grpc.ClientUnaryCall;
    getPointCloud(request: bosdyn_api_point_cloud_pb.GetPointCloudRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.GetPointCloudResponse) => void): grpc.ClientUnaryCall;
}

export class PointCloudServiceClient extends grpc.Client implements IPointCloudServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listPointCloudSources(request: bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse) => void): grpc.ClientUnaryCall;
    public listPointCloudSources(request: bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse) => void): grpc.ClientUnaryCall;
    public listPointCloudSources(request: bosdyn_api_point_cloud_pb.ListPointCloudSourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.ListPointCloudSourcesResponse) => void): grpc.ClientUnaryCall;
    public getPointCloud(request: bosdyn_api_point_cloud_pb.GetPointCloudRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.GetPointCloudResponse) => void): grpc.ClientUnaryCall;
    public getPointCloud(request: bosdyn_api_point_cloud_pb.GetPointCloudRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.GetPointCloudResponse) => void): grpc.ClientUnaryCall;
    public getPointCloud(request: bosdyn_api_point_cloud_pb.GetPointCloudRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_point_cloud_pb.GetPointCloudResponse) => void): grpc.ClientUnaryCall;
}
