// package: bosdyn.api
// file: bosdyn/api/image_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_image_service_pb from "../../bosdyn/api/image_service_pb";
import * as bosdyn_api_image_pb from "../../bosdyn/api/image_pb";

interface IImageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listImageSources: IImageServiceService_IListImageSources;
    getImage: IImageServiceService_IGetImage;
}

interface IImageServiceService_IListImageSources extends grpc.MethodDefinition<bosdyn_api_image_pb.ListImageSourcesRequest, bosdyn_api_image_pb.ListImageSourcesResponse> {
    path: "/bosdyn.api.ImageService/ListImageSources";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_image_pb.ListImageSourcesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_image_pb.ListImageSourcesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_image_pb.ListImageSourcesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_image_pb.ListImageSourcesResponse>;
}
interface IImageServiceService_IGetImage extends grpc.MethodDefinition<bosdyn_api_image_pb.GetImageRequest, bosdyn_api_image_pb.GetImageResponse> {
    path: "/bosdyn.api.ImageService/GetImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_image_pb.GetImageRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_image_pb.GetImageRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_image_pb.GetImageResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_image_pb.GetImageResponse>;
}

export const ImageServiceService: IImageServiceService;

export interface IImageServiceServer extends grpc.UntypedServiceImplementation {
    listImageSources: grpc.handleUnaryCall<bosdyn_api_image_pb.ListImageSourcesRequest, bosdyn_api_image_pb.ListImageSourcesResponse>;
    getImage: grpc.handleUnaryCall<bosdyn_api_image_pb.GetImageRequest, bosdyn_api_image_pb.GetImageResponse>;
}

export interface IImageServiceClient {
    listImageSources(request: bosdyn_api_image_pb.ListImageSourcesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.ListImageSourcesResponse) => void): grpc.ClientUnaryCall;
    listImageSources(request: bosdyn_api_image_pb.ListImageSourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.ListImageSourcesResponse) => void): grpc.ClientUnaryCall;
    listImageSources(request: bosdyn_api_image_pb.ListImageSourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.ListImageSourcesResponse) => void): grpc.ClientUnaryCall;
    getImage(request: bosdyn_api_image_pb.GetImageRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.GetImageResponse) => void): grpc.ClientUnaryCall;
    getImage(request: bosdyn_api_image_pb.GetImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.GetImageResponse) => void): grpc.ClientUnaryCall;
    getImage(request: bosdyn_api_image_pb.GetImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.GetImageResponse) => void): grpc.ClientUnaryCall;
}

export class ImageServiceClient extends grpc.Client implements IImageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listImageSources(request: bosdyn_api_image_pb.ListImageSourcesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.ListImageSourcesResponse) => void): grpc.ClientUnaryCall;
    public listImageSources(request: bosdyn_api_image_pb.ListImageSourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.ListImageSourcesResponse) => void): grpc.ClientUnaryCall;
    public listImageSources(request: bosdyn_api_image_pb.ListImageSourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.ListImageSourcesResponse) => void): grpc.ClientUnaryCall;
    public getImage(request: bosdyn_api_image_pb.GetImageRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.GetImageResponse) => void): grpc.ClientUnaryCall;
    public getImage(request: bosdyn_api_image_pb.GetImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.GetImageResponse) => void): grpc.ClientUnaryCall;
    public getImage(request: bosdyn_api_image_pb.GetImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_image_pb.GetImageResponse) => void): grpc.ClientUnaryCall;
}
