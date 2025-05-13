// package: bosdyn.api
// file: bosdyn/api/lease_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_lease_service_pb from "../../bosdyn/api/lease_service_pb";
import * as bosdyn_api_lease_pb from "../../bosdyn/api/lease_pb";

interface ILeaseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    acquireLease: ILeaseServiceService_IAcquireLease;
    takeLease: ILeaseServiceService_ITakeLease;
    returnLease: ILeaseServiceService_IReturnLease;
    listLeases: ILeaseServiceService_IListLeases;
    retainLease: ILeaseServiceService_IRetainLease;
}

interface ILeaseServiceService_IAcquireLease extends grpc.MethodDefinition<bosdyn_api_lease_pb.AcquireLeaseRequest, bosdyn_api_lease_pb.AcquireLeaseResponse> {
    path: "/bosdyn.api.LeaseService/AcquireLease";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_lease_pb.AcquireLeaseRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_lease_pb.AcquireLeaseRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_lease_pb.AcquireLeaseResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_lease_pb.AcquireLeaseResponse>;
}
interface ILeaseServiceService_ITakeLease extends grpc.MethodDefinition<bosdyn_api_lease_pb.TakeLeaseRequest, bosdyn_api_lease_pb.TakeLeaseResponse> {
    path: "/bosdyn.api.LeaseService/TakeLease";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_lease_pb.TakeLeaseRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_lease_pb.TakeLeaseRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_lease_pb.TakeLeaseResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_lease_pb.TakeLeaseResponse>;
}
interface ILeaseServiceService_IReturnLease extends grpc.MethodDefinition<bosdyn_api_lease_pb.ReturnLeaseRequest, bosdyn_api_lease_pb.ReturnLeaseResponse> {
    path: "/bosdyn.api.LeaseService/ReturnLease";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_lease_pb.ReturnLeaseRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_lease_pb.ReturnLeaseRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_lease_pb.ReturnLeaseResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_lease_pb.ReturnLeaseResponse>;
}
interface ILeaseServiceService_IListLeases extends grpc.MethodDefinition<bosdyn_api_lease_pb.ListLeasesRequest, bosdyn_api_lease_pb.ListLeasesResponse> {
    path: "/bosdyn.api.LeaseService/ListLeases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_lease_pb.ListLeasesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_lease_pb.ListLeasesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_lease_pb.ListLeasesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_lease_pb.ListLeasesResponse>;
}
interface ILeaseServiceService_IRetainLease extends grpc.MethodDefinition<bosdyn_api_lease_pb.RetainLeaseRequest, bosdyn_api_lease_pb.RetainLeaseResponse> {
    path: "/bosdyn.api.LeaseService/RetainLease";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_lease_pb.RetainLeaseRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_lease_pb.RetainLeaseRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_lease_pb.RetainLeaseResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_lease_pb.RetainLeaseResponse>;
}

export const LeaseServiceService: ILeaseServiceService;

export interface ILeaseServiceServer extends grpc.UntypedServiceImplementation {
    acquireLease: grpc.handleUnaryCall<bosdyn_api_lease_pb.AcquireLeaseRequest, bosdyn_api_lease_pb.AcquireLeaseResponse>;
    takeLease: grpc.handleUnaryCall<bosdyn_api_lease_pb.TakeLeaseRequest, bosdyn_api_lease_pb.TakeLeaseResponse>;
    returnLease: grpc.handleUnaryCall<bosdyn_api_lease_pb.ReturnLeaseRequest, bosdyn_api_lease_pb.ReturnLeaseResponse>;
    listLeases: grpc.handleUnaryCall<bosdyn_api_lease_pb.ListLeasesRequest, bosdyn_api_lease_pb.ListLeasesResponse>;
    retainLease: grpc.handleUnaryCall<bosdyn_api_lease_pb.RetainLeaseRequest, bosdyn_api_lease_pb.RetainLeaseResponse>;
}

export interface ILeaseServiceClient {
    acquireLease(request: bosdyn_api_lease_pb.AcquireLeaseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.AcquireLeaseResponse) => void): grpc.ClientUnaryCall;
    acquireLease(request: bosdyn_api_lease_pb.AcquireLeaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.AcquireLeaseResponse) => void): grpc.ClientUnaryCall;
    acquireLease(request: bosdyn_api_lease_pb.AcquireLeaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.AcquireLeaseResponse) => void): grpc.ClientUnaryCall;
    takeLease(request: bosdyn_api_lease_pb.TakeLeaseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.TakeLeaseResponse) => void): grpc.ClientUnaryCall;
    takeLease(request: bosdyn_api_lease_pb.TakeLeaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.TakeLeaseResponse) => void): grpc.ClientUnaryCall;
    takeLease(request: bosdyn_api_lease_pb.TakeLeaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.TakeLeaseResponse) => void): grpc.ClientUnaryCall;
    returnLease(request: bosdyn_api_lease_pb.ReturnLeaseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ReturnLeaseResponse) => void): grpc.ClientUnaryCall;
    returnLease(request: bosdyn_api_lease_pb.ReturnLeaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ReturnLeaseResponse) => void): grpc.ClientUnaryCall;
    returnLease(request: bosdyn_api_lease_pb.ReturnLeaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ReturnLeaseResponse) => void): grpc.ClientUnaryCall;
    listLeases(request: bosdyn_api_lease_pb.ListLeasesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ListLeasesResponse) => void): grpc.ClientUnaryCall;
    listLeases(request: bosdyn_api_lease_pb.ListLeasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ListLeasesResponse) => void): grpc.ClientUnaryCall;
    listLeases(request: bosdyn_api_lease_pb.ListLeasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ListLeasesResponse) => void): grpc.ClientUnaryCall;
    retainLease(request: bosdyn_api_lease_pb.RetainLeaseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.RetainLeaseResponse) => void): grpc.ClientUnaryCall;
    retainLease(request: bosdyn_api_lease_pb.RetainLeaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.RetainLeaseResponse) => void): grpc.ClientUnaryCall;
    retainLease(request: bosdyn_api_lease_pb.RetainLeaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.RetainLeaseResponse) => void): grpc.ClientUnaryCall;
}

export class LeaseServiceClient extends grpc.Client implements ILeaseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public acquireLease(request: bosdyn_api_lease_pb.AcquireLeaseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.AcquireLeaseResponse) => void): grpc.ClientUnaryCall;
    public acquireLease(request: bosdyn_api_lease_pb.AcquireLeaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.AcquireLeaseResponse) => void): grpc.ClientUnaryCall;
    public acquireLease(request: bosdyn_api_lease_pb.AcquireLeaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.AcquireLeaseResponse) => void): grpc.ClientUnaryCall;
    public takeLease(request: bosdyn_api_lease_pb.TakeLeaseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.TakeLeaseResponse) => void): grpc.ClientUnaryCall;
    public takeLease(request: bosdyn_api_lease_pb.TakeLeaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.TakeLeaseResponse) => void): grpc.ClientUnaryCall;
    public takeLease(request: bosdyn_api_lease_pb.TakeLeaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.TakeLeaseResponse) => void): grpc.ClientUnaryCall;
    public returnLease(request: bosdyn_api_lease_pb.ReturnLeaseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ReturnLeaseResponse) => void): grpc.ClientUnaryCall;
    public returnLease(request: bosdyn_api_lease_pb.ReturnLeaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ReturnLeaseResponse) => void): grpc.ClientUnaryCall;
    public returnLease(request: bosdyn_api_lease_pb.ReturnLeaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ReturnLeaseResponse) => void): grpc.ClientUnaryCall;
    public listLeases(request: bosdyn_api_lease_pb.ListLeasesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ListLeasesResponse) => void): grpc.ClientUnaryCall;
    public listLeases(request: bosdyn_api_lease_pb.ListLeasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ListLeasesResponse) => void): grpc.ClientUnaryCall;
    public listLeases(request: bosdyn_api_lease_pb.ListLeasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.ListLeasesResponse) => void): grpc.ClientUnaryCall;
    public retainLease(request: bosdyn_api_lease_pb.RetainLeaseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.RetainLeaseResponse) => void): grpc.ClientUnaryCall;
    public retainLease(request: bosdyn_api_lease_pb.RetainLeaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.RetainLeaseResponse) => void): grpc.ClientUnaryCall;
    public retainLease(request: bosdyn_api_lease_pb.RetainLeaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_lease_pb.RetainLeaseResponse) => void): grpc.ClientUnaryCall;
}
