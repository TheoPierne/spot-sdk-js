// package: bosdyn.api
// file: bosdyn/api/time_sync_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_time_sync_service_pb from "../../bosdyn/api/time_sync_service_pb";
import * as bosdyn_api_time_sync_pb from "../../bosdyn/api/time_sync_pb";

interface ITimeSyncServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    timeSyncUpdate: ITimeSyncServiceService_ITimeSyncUpdate;
}

interface ITimeSyncServiceService_ITimeSyncUpdate extends grpc.MethodDefinition<bosdyn_api_time_sync_pb.TimeSyncUpdateRequest, bosdyn_api_time_sync_pb.TimeSyncUpdateResponse> {
    path: "/bosdyn.api.TimeSyncService/TimeSyncUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_time_sync_pb.TimeSyncUpdateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_time_sync_pb.TimeSyncUpdateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_time_sync_pb.TimeSyncUpdateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_time_sync_pb.TimeSyncUpdateResponse>;
}

export const TimeSyncServiceService: ITimeSyncServiceService;

export interface ITimeSyncServiceServer extends grpc.UntypedServiceImplementation {
    timeSyncUpdate: grpc.handleUnaryCall<bosdyn_api_time_sync_pb.TimeSyncUpdateRequest, bosdyn_api_time_sync_pb.TimeSyncUpdateResponse>;
}

export interface ITimeSyncServiceClient {
    timeSyncUpdate(request: bosdyn_api_time_sync_pb.TimeSyncUpdateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_time_sync_pb.TimeSyncUpdateResponse) => void): grpc.ClientUnaryCall;
    timeSyncUpdate(request: bosdyn_api_time_sync_pb.TimeSyncUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_time_sync_pb.TimeSyncUpdateResponse) => void): grpc.ClientUnaryCall;
    timeSyncUpdate(request: bosdyn_api_time_sync_pb.TimeSyncUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_time_sync_pb.TimeSyncUpdateResponse) => void): grpc.ClientUnaryCall;
}

export class TimeSyncServiceClient extends grpc.Client implements ITimeSyncServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public timeSyncUpdate(request: bosdyn_api_time_sync_pb.TimeSyncUpdateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_time_sync_pb.TimeSyncUpdateResponse) => void): grpc.ClientUnaryCall;
    public timeSyncUpdate(request: bosdyn_api_time_sync_pb.TimeSyncUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_time_sync_pb.TimeSyncUpdateResponse) => void): grpc.ClientUnaryCall;
    public timeSyncUpdate(request: bosdyn_api_time_sync_pb.TimeSyncUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_time_sync_pb.TimeSyncUpdateResponse) => void): grpc.ClientUnaryCall;
}
