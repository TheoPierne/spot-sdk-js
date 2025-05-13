// package: bosdyn.api.gps
// file: bosdyn/api/gps/aggregator_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_gps_aggregator_service_pb from "../../../bosdyn/api/gps/aggregator_service_pb";
import * as bosdyn_api_gps_aggregator_pb from "../../../bosdyn/api/gps/aggregator_pb";

interface IAggregatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    newGpsData: IAggregatorServiceService_INewGpsData;
}

interface IAggregatorServiceService_INewGpsData extends grpc.MethodDefinition<bosdyn_api_gps_aggregator_pb.NewGpsDataRequest, bosdyn_api_gps_aggregator_pb.NewGpsDataResponse> {
    path: "/bosdyn.api.gps.AggregatorService/NewGpsData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_gps_aggregator_pb.NewGpsDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_gps_aggregator_pb.NewGpsDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_gps_aggregator_pb.NewGpsDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_gps_aggregator_pb.NewGpsDataResponse>;
}

export const AggregatorServiceService: IAggregatorServiceService;

export interface IAggregatorServiceServer extends grpc.UntypedServiceImplementation {
    newGpsData: grpc.handleUnaryCall<bosdyn_api_gps_aggregator_pb.NewGpsDataRequest, bosdyn_api_gps_aggregator_pb.NewGpsDataResponse>;
}

export interface IAggregatorServiceClient {
    newGpsData(request: bosdyn_api_gps_aggregator_pb.NewGpsDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_aggregator_pb.NewGpsDataResponse) => void): grpc.ClientUnaryCall;
    newGpsData(request: bosdyn_api_gps_aggregator_pb.NewGpsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_aggregator_pb.NewGpsDataResponse) => void): grpc.ClientUnaryCall;
    newGpsData(request: bosdyn_api_gps_aggregator_pb.NewGpsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_aggregator_pb.NewGpsDataResponse) => void): grpc.ClientUnaryCall;
}

export class AggregatorServiceClient extends grpc.Client implements IAggregatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public newGpsData(request: bosdyn_api_gps_aggregator_pb.NewGpsDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_aggregator_pb.NewGpsDataResponse) => void): grpc.ClientUnaryCall;
    public newGpsData(request: bosdyn_api_gps_aggregator_pb.NewGpsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_aggregator_pb.NewGpsDataResponse) => void): grpc.ClientUnaryCall;
    public newGpsData(request: bosdyn_api_gps_aggregator_pb.NewGpsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_aggregator_pb.NewGpsDataResponse) => void): grpc.ClientUnaryCall;
}
