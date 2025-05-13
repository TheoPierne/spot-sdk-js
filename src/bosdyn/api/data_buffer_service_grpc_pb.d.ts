// package: bosdyn.api
// file: bosdyn/api/data_buffer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_data_buffer_service_pb from "../../bosdyn/api/data_buffer_service_pb";
import * as bosdyn_api_data_buffer_pb from "../../bosdyn/api/data_buffer_pb";

interface IDataBufferServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    recordTextMessages: IDataBufferServiceService_IRecordTextMessages;
    recordOperatorComments: IDataBufferServiceService_IRecordOperatorComments;
    recordDataBlobs: IDataBufferServiceService_IRecordDataBlobs;
    recordEvents: IDataBufferServiceService_IRecordEvents;
    registerSignalSchema: IDataBufferServiceService_IRegisterSignalSchema;
    recordSignalTicks: IDataBufferServiceService_IRecordSignalTicks;
}

interface IDataBufferServiceService_IRecordTextMessages extends grpc.MethodDefinition<bosdyn_api_data_buffer_pb.RecordTextMessagesRequest, bosdyn_api_data_buffer_pb.RecordTextMessagesResponse> {
    path: "/bosdyn.api.DataBufferService/RecordTextMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordTextMessagesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordTextMessagesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordTextMessagesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordTextMessagesResponse>;
}
interface IDataBufferServiceService_IRecordOperatorComments extends grpc.MethodDefinition<bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest, bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse> {
    path: "/bosdyn.api.DataBufferService/RecordOperatorComments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse>;
}
interface IDataBufferServiceService_IRecordDataBlobs extends grpc.MethodDefinition<bosdyn_api_data_buffer_pb.RecordDataBlobsRequest, bosdyn_api_data_buffer_pb.RecordDataBlobsResponse> {
    path: "/bosdyn.api.DataBufferService/RecordDataBlobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordDataBlobsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordDataBlobsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordDataBlobsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordDataBlobsResponse>;
}
interface IDataBufferServiceService_IRecordEvents extends grpc.MethodDefinition<bosdyn_api_data_buffer_pb.RecordEventsRequest, bosdyn_api_data_buffer_pb.RecordEventsResponse> {
    path: "/bosdyn.api.DataBufferService/RecordEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordEventsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordEventsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordEventsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordEventsResponse>;
}
interface IDataBufferServiceService_IRegisterSignalSchema extends grpc.MethodDefinition<bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest, bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse> {
    path: "/bosdyn.api.DataBufferService/RegisterSignalSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse>;
}
interface IDataBufferServiceService_IRecordSignalTicks extends grpc.MethodDefinition<bosdyn_api_data_buffer_pb.RecordSignalTicksRequest, bosdyn_api_data_buffer_pb.RecordSignalTicksResponse> {
    path: "/bosdyn.api.DataBufferService/RecordSignalTicks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordSignalTicksRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordSignalTicksRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_buffer_pb.RecordSignalTicksResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_buffer_pb.RecordSignalTicksResponse>;
}

export const DataBufferServiceService: IDataBufferServiceService;

export interface IDataBufferServiceServer extends grpc.UntypedServiceImplementation {
    recordTextMessages: grpc.handleUnaryCall<bosdyn_api_data_buffer_pb.RecordTextMessagesRequest, bosdyn_api_data_buffer_pb.RecordTextMessagesResponse>;
    recordOperatorComments: grpc.handleUnaryCall<bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest, bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse>;
    recordDataBlobs: grpc.handleUnaryCall<bosdyn_api_data_buffer_pb.RecordDataBlobsRequest, bosdyn_api_data_buffer_pb.RecordDataBlobsResponse>;
    recordEvents: grpc.handleUnaryCall<bosdyn_api_data_buffer_pb.RecordEventsRequest, bosdyn_api_data_buffer_pb.RecordEventsResponse>;
    registerSignalSchema: grpc.handleUnaryCall<bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest, bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse>;
    recordSignalTicks: grpc.handleUnaryCall<bosdyn_api_data_buffer_pb.RecordSignalTicksRequest, bosdyn_api_data_buffer_pb.RecordSignalTicksResponse>;
}

export interface IDataBufferServiceClient {
    recordTextMessages(request: bosdyn_api_data_buffer_pb.RecordTextMessagesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordTextMessagesResponse) => void): grpc.ClientUnaryCall;
    recordTextMessages(request: bosdyn_api_data_buffer_pb.RecordTextMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordTextMessagesResponse) => void): grpc.ClientUnaryCall;
    recordTextMessages(request: bosdyn_api_data_buffer_pb.RecordTextMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordTextMessagesResponse) => void): grpc.ClientUnaryCall;
    recordOperatorComments(request: bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse) => void): grpc.ClientUnaryCall;
    recordOperatorComments(request: bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse) => void): grpc.ClientUnaryCall;
    recordOperatorComments(request: bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse) => void): grpc.ClientUnaryCall;
    recordDataBlobs(request: bosdyn_api_data_buffer_pb.RecordDataBlobsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordDataBlobsResponse) => void): grpc.ClientUnaryCall;
    recordDataBlobs(request: bosdyn_api_data_buffer_pb.RecordDataBlobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordDataBlobsResponse) => void): grpc.ClientUnaryCall;
    recordDataBlobs(request: bosdyn_api_data_buffer_pb.RecordDataBlobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordDataBlobsResponse) => void): grpc.ClientUnaryCall;
    recordEvents(request: bosdyn_api_data_buffer_pb.RecordEventsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordEventsResponse) => void): grpc.ClientUnaryCall;
    recordEvents(request: bosdyn_api_data_buffer_pb.RecordEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordEventsResponse) => void): grpc.ClientUnaryCall;
    recordEvents(request: bosdyn_api_data_buffer_pb.RecordEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordEventsResponse) => void): grpc.ClientUnaryCall;
    registerSignalSchema(request: bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse) => void): grpc.ClientUnaryCall;
    registerSignalSchema(request: bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse) => void): grpc.ClientUnaryCall;
    registerSignalSchema(request: bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse) => void): grpc.ClientUnaryCall;
    recordSignalTicks(request: bosdyn_api_data_buffer_pb.RecordSignalTicksRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordSignalTicksResponse) => void): grpc.ClientUnaryCall;
    recordSignalTicks(request: bosdyn_api_data_buffer_pb.RecordSignalTicksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordSignalTicksResponse) => void): grpc.ClientUnaryCall;
    recordSignalTicks(request: bosdyn_api_data_buffer_pb.RecordSignalTicksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordSignalTicksResponse) => void): grpc.ClientUnaryCall;
}

export class DataBufferServiceClient extends grpc.Client implements IDataBufferServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public recordTextMessages(request: bosdyn_api_data_buffer_pb.RecordTextMessagesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordTextMessagesResponse) => void): grpc.ClientUnaryCall;
    public recordTextMessages(request: bosdyn_api_data_buffer_pb.RecordTextMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordTextMessagesResponse) => void): grpc.ClientUnaryCall;
    public recordTextMessages(request: bosdyn_api_data_buffer_pb.RecordTextMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordTextMessagesResponse) => void): grpc.ClientUnaryCall;
    public recordOperatorComments(request: bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse) => void): grpc.ClientUnaryCall;
    public recordOperatorComments(request: bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse) => void): grpc.ClientUnaryCall;
    public recordOperatorComments(request: bosdyn_api_data_buffer_pb.RecordOperatorCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordOperatorCommentsResponse) => void): grpc.ClientUnaryCall;
    public recordDataBlobs(request: bosdyn_api_data_buffer_pb.RecordDataBlobsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordDataBlobsResponse) => void): grpc.ClientUnaryCall;
    public recordDataBlobs(request: bosdyn_api_data_buffer_pb.RecordDataBlobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordDataBlobsResponse) => void): grpc.ClientUnaryCall;
    public recordDataBlobs(request: bosdyn_api_data_buffer_pb.RecordDataBlobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordDataBlobsResponse) => void): grpc.ClientUnaryCall;
    public recordEvents(request: bosdyn_api_data_buffer_pb.RecordEventsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordEventsResponse) => void): grpc.ClientUnaryCall;
    public recordEvents(request: bosdyn_api_data_buffer_pb.RecordEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordEventsResponse) => void): grpc.ClientUnaryCall;
    public recordEvents(request: bosdyn_api_data_buffer_pb.RecordEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordEventsResponse) => void): grpc.ClientUnaryCall;
    public registerSignalSchema(request: bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse) => void): grpc.ClientUnaryCall;
    public registerSignalSchema(request: bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse) => void): grpc.ClientUnaryCall;
    public registerSignalSchema(request: bosdyn_api_data_buffer_pb.RegisterSignalSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RegisterSignalSchemaResponse) => void): grpc.ClientUnaryCall;
    public recordSignalTicks(request: bosdyn_api_data_buffer_pb.RecordSignalTicksRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordSignalTicksResponse) => void): grpc.ClientUnaryCall;
    public recordSignalTicks(request: bosdyn_api_data_buffer_pb.RecordSignalTicksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordSignalTicksResponse) => void): grpc.ClientUnaryCall;
    public recordSignalTicks(request: bosdyn_api_data_buffer_pb.RecordSignalTicksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_buffer_pb.RecordSignalTicksResponse) => void): grpc.ClientUnaryCall;
}
