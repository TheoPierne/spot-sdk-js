// package: bosdyn.api
// file: bosdyn/api/data_acquisition_store_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_data_acquisition_store_service_pb from "../../bosdyn/api/data_acquisition_store_service_pb";
import * as bosdyn_api_data_chunk_pb from "../../bosdyn/api/data_chunk_pb";
import * as bosdyn_api_data_acquisition_store_pb from "../../bosdyn/api/data_acquisition_store_pb";

interface IDataAcquisitionStoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listCaptureActions: IDataAcquisitionStoreServiceService_IListCaptureActions;
    listStoredData: IDataAcquisitionStoreServiceService_IListStoredData;
    storeData: IDataAcquisitionStoreServiceService_IStoreData;
    storeDataStream: IDataAcquisitionStoreServiceService_IStoreDataStream;
    listStoredImages: IDataAcquisitionStoreServiceService_IListStoredImages;
    storeImage: IDataAcquisitionStoreServiceService_IStoreImage;
    listStoredMetadata: IDataAcquisitionStoreServiceService_IListStoredMetadata;
    storeMetadata: IDataAcquisitionStoreServiceService_IStoreMetadata;
    listStoredAlertData: IDataAcquisitionStoreServiceService_IListStoredAlertData;
    storeAlertData: IDataAcquisitionStoreServiceService_IStoreAlertData;
    queryStoredCaptures: IDataAcquisitionStoreServiceService_IQueryStoredCaptures;
    queryMaxCaptureId: IDataAcquisitionStoreServiceService_IQueryMaxCaptureId;
}

interface IDataAcquisitionStoreServiceService_IListCaptureActions extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest, bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/ListCaptureActions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse>;
}
interface IDataAcquisitionStoreServiceService_IListStoredData extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest, bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/ListStoredData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse>;
}
interface IDataAcquisitionStoreServiceService_IStoreData extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.StoreDataRequest, bosdyn_api_data_acquisition_store_pb.StoreDataResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/StoreData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreDataResponse>;
}
interface IDataAcquisitionStoreServiceService_IStoreDataStream extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest, bosdyn_api_data_acquisition_store_pb.StoreStreamResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/StoreDataStream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreStreamResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreStreamResponse>;
}
interface IDataAcquisitionStoreServiceService_IListStoredImages extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest, bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/ListStoredImages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse>;
}
interface IDataAcquisitionStoreServiceService_IStoreImage extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.StoreImageRequest, bosdyn_api_data_acquisition_store_pb.StoreImageResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/StoreImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreImageRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreImageRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreImageResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreImageResponse>;
}
interface IDataAcquisitionStoreServiceService_IListStoredMetadata extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest, bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/ListStoredMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse>;
}
interface IDataAcquisitionStoreServiceService_IStoreMetadata extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest, bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/StoreMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse>;
}
interface IDataAcquisitionStoreServiceService_IListStoredAlertData extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest, bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/ListStoredAlertData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse>;
}
interface IDataAcquisitionStoreServiceService_IStoreAlertData extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest, bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/StoreAlertData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse>;
}
interface IDataAcquisitionStoreServiceService_IQueryStoredCaptures extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.QueryStoredCapturesRequest, bosdyn_api_data_chunk_pb.DataChunk> {
    path: "/bosdyn.api.DataAcquisitionStoreService/QueryStoredCaptures";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.QueryStoredCapturesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.QueryStoredCapturesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
}
interface IDataAcquisitionStoreServiceService_IQueryMaxCaptureId extends grpc.MethodDefinition<bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest, bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse> {
    path: "/bosdyn.api.DataAcquisitionStoreService/QueryMaxCaptureId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse>;
}

export const DataAcquisitionStoreServiceService: IDataAcquisitionStoreServiceService;

export interface IDataAcquisitionStoreServiceServer extends grpc.UntypedServiceImplementation {
    listCaptureActions: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest, bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse>;
    listStoredData: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest, bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse>;
    storeData: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.StoreDataRequest, bosdyn_api_data_acquisition_store_pb.StoreDataResponse>;
    storeDataStream: grpc.handleClientStreamingCall<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest, bosdyn_api_data_acquisition_store_pb.StoreStreamResponse>;
    listStoredImages: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest, bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse>;
    storeImage: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.StoreImageRequest, bosdyn_api_data_acquisition_store_pb.StoreImageResponse>;
    listStoredMetadata: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest, bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse>;
    storeMetadata: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest, bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse>;
    listStoredAlertData: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest, bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse>;
    storeAlertData: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest, bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse>;
    queryStoredCaptures: grpc.handleServerStreamingCall<bosdyn_api_data_acquisition_store_pb.QueryStoredCapturesRequest, bosdyn_api_data_chunk_pb.DataChunk>;
    queryMaxCaptureId: grpc.handleUnaryCall<bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest, bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse>;
}

export interface IDataAcquisitionStoreServiceClient {
    listCaptureActions(request: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse) => void): grpc.ClientUnaryCall;
    listCaptureActions(request: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse) => void): grpc.ClientUnaryCall;
    listCaptureActions(request: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse) => void): grpc.ClientUnaryCall;
    listStoredData(request: bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse) => void): grpc.ClientUnaryCall;
    listStoredData(request: bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse) => void): grpc.ClientUnaryCall;
    listStoredData(request: bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse) => void): grpc.ClientUnaryCall;
    storeData(request: bosdyn_api_data_acquisition_store_pb.StoreDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreDataResponse) => void): grpc.ClientUnaryCall;
    storeData(request: bosdyn_api_data_acquisition_store_pb.StoreDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreDataResponse) => void): grpc.ClientUnaryCall;
    storeData(request: bosdyn_api_data_acquisition_store_pb.StoreDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreDataResponse) => void): grpc.ClientUnaryCall;
    storeDataStream(callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    storeDataStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    storeDataStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    storeDataStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    listStoredImages(request: bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse) => void): grpc.ClientUnaryCall;
    listStoredImages(request: bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse) => void): grpc.ClientUnaryCall;
    listStoredImages(request: bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse) => void): grpc.ClientUnaryCall;
    storeImage(request: bosdyn_api_data_acquisition_store_pb.StoreImageRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreImageResponse) => void): grpc.ClientUnaryCall;
    storeImage(request: bosdyn_api_data_acquisition_store_pb.StoreImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreImageResponse) => void): grpc.ClientUnaryCall;
    storeImage(request: bosdyn_api_data_acquisition_store_pb.StoreImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreImageResponse) => void): grpc.ClientUnaryCall;
    listStoredMetadata(request: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse) => void): grpc.ClientUnaryCall;
    listStoredMetadata(request: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse) => void): grpc.ClientUnaryCall;
    listStoredMetadata(request: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse) => void): grpc.ClientUnaryCall;
    storeMetadata(request: bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse) => void): grpc.ClientUnaryCall;
    storeMetadata(request: bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse) => void): grpc.ClientUnaryCall;
    storeMetadata(request: bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse) => void): grpc.ClientUnaryCall;
    listStoredAlertData(request: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse) => void): grpc.ClientUnaryCall;
    listStoredAlertData(request: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse) => void): grpc.ClientUnaryCall;
    listStoredAlertData(request: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse) => void): grpc.ClientUnaryCall;
    storeAlertData(request: bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse) => void): grpc.ClientUnaryCall;
    storeAlertData(request: bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse) => void): grpc.ClientUnaryCall;
    storeAlertData(request: bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse) => void): grpc.ClientUnaryCall;
    queryStoredCaptures(request: bosdyn_api_data_acquisition_store_pb.QueryStoredCapturesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    queryStoredCaptures(request: bosdyn_api_data_acquisition_store_pb.QueryStoredCapturesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    queryMaxCaptureId(request: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse) => void): grpc.ClientUnaryCall;
    queryMaxCaptureId(request: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse) => void): grpc.ClientUnaryCall;
    queryMaxCaptureId(request: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse) => void): grpc.ClientUnaryCall;
}

export class DataAcquisitionStoreServiceClient extends grpc.Client implements IDataAcquisitionStoreServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listCaptureActions(request: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse) => void): grpc.ClientUnaryCall;
    public listCaptureActions(request: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse) => void): grpc.ClientUnaryCall;
    public listCaptureActions(request: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListCaptureActionsResponse) => void): grpc.ClientUnaryCall;
    public listStoredData(request: bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse) => void): grpc.ClientUnaryCall;
    public listStoredData(request: bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse) => void): grpc.ClientUnaryCall;
    public listStoredData(request: bosdyn_api_data_acquisition_store_pb.ListStoredDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredDataResponse) => void): grpc.ClientUnaryCall;
    public storeData(request: bosdyn_api_data_acquisition_store_pb.StoreDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreDataResponse) => void): grpc.ClientUnaryCall;
    public storeData(request: bosdyn_api_data_acquisition_store_pb.StoreDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreDataResponse) => void): grpc.ClientUnaryCall;
    public storeData(request: bosdyn_api_data_acquisition_store_pb.StoreDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreDataResponse) => void): grpc.ClientUnaryCall;
    public storeDataStream(callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    public storeDataStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    public storeDataStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    public storeDataStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreStreamResponse) => void): grpc.ClientWritableStream<bosdyn_api_data_acquisition_store_pb.StoreStreamRequest>;
    public listStoredImages(request: bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse) => void): grpc.ClientUnaryCall;
    public listStoredImages(request: bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse) => void): grpc.ClientUnaryCall;
    public listStoredImages(request: bosdyn_api_data_acquisition_store_pb.ListStoredImagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredImagesResponse) => void): grpc.ClientUnaryCall;
    public storeImage(request: bosdyn_api_data_acquisition_store_pb.StoreImageRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreImageResponse) => void): grpc.ClientUnaryCall;
    public storeImage(request: bosdyn_api_data_acquisition_store_pb.StoreImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreImageResponse) => void): grpc.ClientUnaryCall;
    public storeImage(request: bosdyn_api_data_acquisition_store_pb.StoreImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreImageResponse) => void): grpc.ClientUnaryCall;
    public listStoredMetadata(request: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse) => void): grpc.ClientUnaryCall;
    public listStoredMetadata(request: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse) => void): grpc.ClientUnaryCall;
    public listStoredMetadata(request: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredMetadataResponse) => void): grpc.ClientUnaryCall;
    public storeMetadata(request: bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse) => void): grpc.ClientUnaryCall;
    public storeMetadata(request: bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse) => void): grpc.ClientUnaryCall;
    public storeMetadata(request: bosdyn_api_data_acquisition_store_pb.StoreMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreMetadataResponse) => void): grpc.ClientUnaryCall;
    public listStoredAlertData(request: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse) => void): grpc.ClientUnaryCall;
    public listStoredAlertData(request: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse) => void): grpc.ClientUnaryCall;
    public listStoredAlertData(request: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.ListStoredAlertDataResponse) => void): grpc.ClientUnaryCall;
    public storeAlertData(request: bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse) => void): grpc.ClientUnaryCall;
    public storeAlertData(request: bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse) => void): grpc.ClientUnaryCall;
    public storeAlertData(request: bosdyn_api_data_acquisition_store_pb.StoreAlertDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.StoreAlertDataResponse) => void): grpc.ClientUnaryCall;
    public queryStoredCaptures(request: bosdyn_api_data_acquisition_store_pb.QueryStoredCapturesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public queryStoredCaptures(request: bosdyn_api_data_acquisition_store_pb.QueryStoredCapturesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_data_chunk_pb.DataChunk>;
    public queryMaxCaptureId(request: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse) => void): grpc.ClientUnaryCall;
    public queryMaxCaptureId(request: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse) => void): grpc.ClientUnaryCall;
    public queryMaxCaptureId(request: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_store_pb.QueryMaxCaptureIdResponse) => void): grpc.ClientUnaryCall;
}
