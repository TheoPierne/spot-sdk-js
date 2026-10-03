// package: bosdyn.api.metrics_logging
// file: bosdyn/api/metrics_logging/metrics_logging_robot_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_metrics_logging_metrics_logging_robot_service_pb from "../../../bosdyn/api/metrics_logging/metrics_logging_robot_service_pb";
import * as bosdyn_api_metrics_logging_metrics_logging_robot_pb from "../../../bosdyn/api/metrics_logging/metrics_logging_robot_pb";

interface IMetricsLoggingRobotServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getStoreSequenceRange: IMetricsLoggingRobotServiceService_IGetStoreSequenceRange;
    getAbsoluteMetricSnapshot: IMetricsLoggingRobotServiceService_IGetAbsoluteMetricSnapshot;
    getMetrics: IMetricsLoggingRobotServiceService_IGetMetrics;
}

interface IMetricsLoggingRobotServiceService_IGetStoreSequenceRange extends grpc.MethodDefinition<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest, bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse> {
    path: "/bosdyn.api.metrics_logging.MetricsLoggingRobotService/GetStoreSequenceRange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse>;
}
interface IMetricsLoggingRobotServiceService_IGetAbsoluteMetricSnapshot extends grpc.MethodDefinition<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest, bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse> {
    path: "/bosdyn.api.metrics_logging.MetricsLoggingRobotService/GetAbsoluteMetricSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse>;
}
interface IMetricsLoggingRobotServiceService_IGetMetrics extends grpc.MethodDefinition<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest, bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse> {
    path: "/bosdyn.api.metrics_logging.MetricsLoggingRobotService/GetMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse>;
}

export const MetricsLoggingRobotServiceService: IMetricsLoggingRobotServiceService;

export interface IMetricsLoggingRobotServiceServer extends grpc.UntypedServiceImplementation {
    getStoreSequenceRange: grpc.handleUnaryCall<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest, bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse>;
    getAbsoluteMetricSnapshot: grpc.handleUnaryCall<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest, bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse>;
    getMetrics: grpc.handleUnaryCall<bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest, bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse>;
}

export interface IMetricsLoggingRobotServiceClient {
    getStoreSequenceRange(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse) => void): grpc.ClientUnaryCall;
    getStoreSequenceRange(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse) => void): grpc.ClientUnaryCall;
    getStoreSequenceRange(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse) => void): grpc.ClientUnaryCall;
    getAbsoluteMetricSnapshot(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse) => void): grpc.ClientUnaryCall;
    getAbsoluteMetricSnapshot(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse) => void): grpc.ClientUnaryCall;
    getAbsoluteMetricSnapshot(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse) => void): grpc.ClientUnaryCall;
    getMetrics(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse) => void): grpc.ClientUnaryCall;
    getMetrics(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse) => void): grpc.ClientUnaryCall;
    getMetrics(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse) => void): grpc.ClientUnaryCall;
}

export class MetricsLoggingRobotServiceClient extends grpc.Client implements IMetricsLoggingRobotServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getStoreSequenceRange(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse) => void): grpc.ClientUnaryCall;
    public getStoreSequenceRange(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse) => void): grpc.ClientUnaryCall;
    public getStoreSequenceRange(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetStoreSequenceRangeResponse) => void): grpc.ClientUnaryCall;
    public getAbsoluteMetricSnapshot(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse) => void): grpc.ClientUnaryCall;
    public getAbsoluteMetricSnapshot(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse) => void): grpc.ClientUnaryCall;
    public getAbsoluteMetricSnapshot(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetAbsoluteMetricSnapshotResponse) => void): grpc.ClientUnaryCall;
    public getMetrics(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse) => void): grpc.ClientUnaryCall;
    public getMetrics(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse) => void): grpc.ClientUnaryCall;
    public getMetrics(request: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_metrics_logging_metrics_logging_robot_pb.GetMetricsResponse) => void): grpc.ClientUnaryCall;
}
