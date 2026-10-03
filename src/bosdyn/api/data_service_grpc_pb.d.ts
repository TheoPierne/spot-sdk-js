// package: bosdyn.api
// file: bosdyn/api/data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_data_service_pb from "../../bosdyn/api/data_service_pb";
import * as bosdyn_api_data_index_pb from "../../bosdyn/api/data_index_pb";

interface IDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDataIndex: IDataServiceService_IGetDataIndex;
    getEventsComments: IDataServiceService_IGetEventsComments;
    getDataBufferStatus: IDataServiceService_IGetDataBufferStatus;
    getDataPages: IDataServiceService_IGetDataPages;
    deleteDataPages: IDataServiceService_IDeleteDataPages;
}

interface IDataServiceService_IGetDataIndex extends grpc.MethodDefinition<bosdyn_api_data_index_pb.GetDataIndexRequest, bosdyn_api_data_index_pb.GetDataIndexResponse> {
    path: "/bosdyn.api.DataService/GetDataIndex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_index_pb.GetDataIndexRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.GetDataIndexRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_index_pb.GetDataIndexResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.GetDataIndexResponse>;
}
interface IDataServiceService_IGetEventsComments extends grpc.MethodDefinition<bosdyn_api_data_index_pb.GetEventsCommentsRequest, bosdyn_api_data_index_pb.GetEventsCommentsResponse> {
    path: "/bosdyn.api.DataService/GetEventsComments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_index_pb.GetEventsCommentsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.GetEventsCommentsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_index_pb.GetEventsCommentsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.GetEventsCommentsResponse>;
}
interface IDataServiceService_IGetDataBufferStatus extends grpc.MethodDefinition<bosdyn_api_data_index_pb.GetDataBufferStatusRequest, bosdyn_api_data_index_pb.GetDataBufferStatusResponse> {
    path: "/bosdyn.api.DataService/GetDataBufferStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_index_pb.GetDataBufferStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.GetDataBufferStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_index_pb.GetDataBufferStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.GetDataBufferStatusResponse>;
}
interface IDataServiceService_IGetDataPages extends grpc.MethodDefinition<bosdyn_api_data_index_pb.GetDataPagesRequest, bosdyn_api_data_index_pb.GetDataPagesResponse> {
    path: "/bosdyn.api.DataService/GetDataPages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_index_pb.GetDataPagesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.GetDataPagesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_index_pb.GetDataPagesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.GetDataPagesResponse>;
}
interface IDataServiceService_IDeleteDataPages extends grpc.MethodDefinition<bosdyn_api_data_index_pb.DeleteDataPagesRequest, bosdyn_api_data_index_pb.DeleteDataPagesResponse> {
    path: "/bosdyn.api.DataService/DeleteDataPages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_index_pb.DeleteDataPagesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.DeleteDataPagesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_index_pb.DeleteDataPagesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_index_pb.DeleteDataPagesResponse>;
}

export const DataServiceService: IDataServiceService;

export interface IDataServiceServer extends grpc.UntypedServiceImplementation {
    getDataIndex: grpc.handleUnaryCall<bosdyn_api_data_index_pb.GetDataIndexRequest, bosdyn_api_data_index_pb.GetDataIndexResponse>;
    getEventsComments: grpc.handleUnaryCall<bosdyn_api_data_index_pb.GetEventsCommentsRequest, bosdyn_api_data_index_pb.GetEventsCommentsResponse>;
    getDataBufferStatus: grpc.handleUnaryCall<bosdyn_api_data_index_pb.GetDataBufferStatusRequest, bosdyn_api_data_index_pb.GetDataBufferStatusResponse>;
    getDataPages: grpc.handleUnaryCall<bosdyn_api_data_index_pb.GetDataPagesRequest, bosdyn_api_data_index_pb.GetDataPagesResponse>;
    deleteDataPages: grpc.handleUnaryCall<bosdyn_api_data_index_pb.DeleteDataPagesRequest, bosdyn_api_data_index_pb.DeleteDataPagesResponse>;
}

export interface IDataServiceClient {
    getDataIndex(request: bosdyn_api_data_index_pb.GetDataIndexRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataIndexResponse) => void): grpc.ClientUnaryCall;
    getDataIndex(request: bosdyn_api_data_index_pb.GetDataIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataIndexResponse) => void): grpc.ClientUnaryCall;
    getDataIndex(request: bosdyn_api_data_index_pb.GetDataIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataIndexResponse) => void): grpc.ClientUnaryCall;
    getEventsComments(request: bosdyn_api_data_index_pb.GetEventsCommentsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetEventsCommentsResponse) => void): grpc.ClientUnaryCall;
    getEventsComments(request: bosdyn_api_data_index_pb.GetEventsCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetEventsCommentsResponse) => void): grpc.ClientUnaryCall;
    getEventsComments(request: bosdyn_api_data_index_pb.GetEventsCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetEventsCommentsResponse) => void): grpc.ClientUnaryCall;
    getDataBufferStatus(request: bosdyn_api_data_index_pb.GetDataBufferStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataBufferStatusResponse) => void): grpc.ClientUnaryCall;
    getDataBufferStatus(request: bosdyn_api_data_index_pb.GetDataBufferStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataBufferStatusResponse) => void): grpc.ClientUnaryCall;
    getDataBufferStatus(request: bosdyn_api_data_index_pb.GetDataBufferStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataBufferStatusResponse) => void): grpc.ClientUnaryCall;
    getDataPages(request: bosdyn_api_data_index_pb.GetDataPagesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataPagesResponse) => void): grpc.ClientUnaryCall;
    getDataPages(request: bosdyn_api_data_index_pb.GetDataPagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataPagesResponse) => void): grpc.ClientUnaryCall;
    getDataPages(request: bosdyn_api_data_index_pb.GetDataPagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataPagesResponse) => void): grpc.ClientUnaryCall;
    deleteDataPages(request: bosdyn_api_data_index_pb.DeleteDataPagesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.DeleteDataPagesResponse) => void): grpc.ClientUnaryCall;
    deleteDataPages(request: bosdyn_api_data_index_pb.DeleteDataPagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.DeleteDataPagesResponse) => void): grpc.ClientUnaryCall;
    deleteDataPages(request: bosdyn_api_data_index_pb.DeleteDataPagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.DeleteDataPagesResponse) => void): grpc.ClientUnaryCall;
}

export class DataServiceClient extends grpc.Client implements IDataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getDataIndex(request: bosdyn_api_data_index_pb.GetDataIndexRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataIndexResponse) => void): grpc.ClientUnaryCall;
    public getDataIndex(request: bosdyn_api_data_index_pb.GetDataIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataIndexResponse) => void): grpc.ClientUnaryCall;
    public getDataIndex(request: bosdyn_api_data_index_pb.GetDataIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataIndexResponse) => void): grpc.ClientUnaryCall;
    public getEventsComments(request: bosdyn_api_data_index_pb.GetEventsCommentsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetEventsCommentsResponse) => void): grpc.ClientUnaryCall;
    public getEventsComments(request: bosdyn_api_data_index_pb.GetEventsCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetEventsCommentsResponse) => void): grpc.ClientUnaryCall;
    public getEventsComments(request: bosdyn_api_data_index_pb.GetEventsCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetEventsCommentsResponse) => void): grpc.ClientUnaryCall;
    public getDataBufferStatus(request: bosdyn_api_data_index_pb.GetDataBufferStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataBufferStatusResponse) => void): grpc.ClientUnaryCall;
    public getDataBufferStatus(request: bosdyn_api_data_index_pb.GetDataBufferStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataBufferStatusResponse) => void): grpc.ClientUnaryCall;
    public getDataBufferStatus(request: bosdyn_api_data_index_pb.GetDataBufferStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataBufferStatusResponse) => void): grpc.ClientUnaryCall;
    public getDataPages(request: bosdyn_api_data_index_pb.GetDataPagesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataPagesResponse) => void): grpc.ClientUnaryCall;
    public getDataPages(request: bosdyn_api_data_index_pb.GetDataPagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataPagesResponse) => void): grpc.ClientUnaryCall;
    public getDataPages(request: bosdyn_api_data_index_pb.GetDataPagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.GetDataPagesResponse) => void): grpc.ClientUnaryCall;
    public deleteDataPages(request: bosdyn_api_data_index_pb.DeleteDataPagesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.DeleteDataPagesResponse) => void): grpc.ClientUnaryCall;
    public deleteDataPages(request: bosdyn_api_data_index_pb.DeleteDataPagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.DeleteDataPagesResponse) => void): grpc.ClientUnaryCall;
    public deleteDataPages(request: bosdyn_api_data_index_pb.DeleteDataPagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_index_pb.DeleteDataPagesResponse) => void): grpc.ClientUnaryCall;
}
