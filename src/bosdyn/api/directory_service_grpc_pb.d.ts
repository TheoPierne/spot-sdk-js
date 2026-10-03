// package: bosdyn.api
// file: bosdyn/api/directory_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_directory_service_pb from "../../bosdyn/api/directory_service_pb";
import * as bosdyn_api_directory_pb from "../../bosdyn/api/directory_pb";

interface IDirectoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getServiceEntry: IDirectoryServiceService_IGetServiceEntry;
    listServiceEntries: IDirectoryServiceService_IListServiceEntries;
}

interface IDirectoryServiceService_IGetServiceEntry extends grpc.MethodDefinition<bosdyn_api_directory_pb.GetServiceEntryRequest, bosdyn_api_directory_pb.GetServiceEntryResponse> {
    path: "/bosdyn.api.DirectoryService/GetServiceEntry";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_directory_pb.GetServiceEntryRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_directory_pb.GetServiceEntryRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_directory_pb.GetServiceEntryResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_directory_pb.GetServiceEntryResponse>;
}
interface IDirectoryServiceService_IListServiceEntries extends grpc.MethodDefinition<bosdyn_api_directory_pb.ListServiceEntriesRequest, bosdyn_api_directory_pb.ListServiceEntriesResponse> {
    path: "/bosdyn.api.DirectoryService/ListServiceEntries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_directory_pb.ListServiceEntriesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_directory_pb.ListServiceEntriesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_directory_pb.ListServiceEntriesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_directory_pb.ListServiceEntriesResponse>;
}

export const DirectoryServiceService: IDirectoryServiceService;

export interface IDirectoryServiceServer extends grpc.UntypedServiceImplementation {
    getServiceEntry: grpc.handleUnaryCall<bosdyn_api_directory_pb.GetServiceEntryRequest, bosdyn_api_directory_pb.GetServiceEntryResponse>;
    listServiceEntries: grpc.handleUnaryCall<bosdyn_api_directory_pb.ListServiceEntriesRequest, bosdyn_api_directory_pb.ListServiceEntriesResponse>;
}

export interface IDirectoryServiceClient {
    getServiceEntry(request: bosdyn_api_directory_pb.GetServiceEntryRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.GetServiceEntryResponse) => void): grpc.ClientUnaryCall;
    getServiceEntry(request: bosdyn_api_directory_pb.GetServiceEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.GetServiceEntryResponse) => void): grpc.ClientUnaryCall;
    getServiceEntry(request: bosdyn_api_directory_pb.GetServiceEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.GetServiceEntryResponse) => void): grpc.ClientUnaryCall;
    listServiceEntries(request: bosdyn_api_directory_pb.ListServiceEntriesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.ListServiceEntriesResponse) => void): grpc.ClientUnaryCall;
    listServiceEntries(request: bosdyn_api_directory_pb.ListServiceEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.ListServiceEntriesResponse) => void): grpc.ClientUnaryCall;
    listServiceEntries(request: bosdyn_api_directory_pb.ListServiceEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.ListServiceEntriesResponse) => void): grpc.ClientUnaryCall;
}

export class DirectoryServiceClient extends grpc.Client implements IDirectoryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getServiceEntry(request: bosdyn_api_directory_pb.GetServiceEntryRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.GetServiceEntryResponse) => void): grpc.ClientUnaryCall;
    public getServiceEntry(request: bosdyn_api_directory_pb.GetServiceEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.GetServiceEntryResponse) => void): grpc.ClientUnaryCall;
    public getServiceEntry(request: bosdyn_api_directory_pb.GetServiceEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.GetServiceEntryResponse) => void): grpc.ClientUnaryCall;
    public listServiceEntries(request: bosdyn_api_directory_pb.ListServiceEntriesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.ListServiceEntriesResponse) => void): grpc.ClientUnaryCall;
    public listServiceEntries(request: bosdyn_api_directory_pb.ListServiceEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.ListServiceEntriesResponse) => void): grpc.ClientUnaryCall;
    public listServiceEntries(request: bosdyn_api_directory_pb.ListServiceEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_directory_pb.ListServiceEntriesResponse) => void): grpc.ClientUnaryCall;
}
