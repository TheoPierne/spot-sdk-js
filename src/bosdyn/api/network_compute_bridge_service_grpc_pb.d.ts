// package: bosdyn.api
// file: bosdyn/api/network_compute_bridge_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_network_compute_bridge_service_pb from "../../bosdyn/api/network_compute_bridge_service_pb";
import * as bosdyn_api_network_compute_bridge_pb from "../../bosdyn/api/network_compute_bridge_pb";

interface INetworkComputeBridgeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    networkCompute: INetworkComputeBridgeService_INetworkCompute;
    listAvailableModels: INetworkComputeBridgeService_IListAvailableModels;
}

interface INetworkComputeBridgeService_INetworkCompute extends grpc.MethodDefinition<bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse> {
    path: "/bosdyn.api.NetworkComputeBridge/NetworkCompute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse>;
}
interface INetworkComputeBridgeService_IListAvailableModels extends grpc.MethodDefinition<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse> {
    path: "/bosdyn.api.NetworkComputeBridge/ListAvailableModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse>;
}

export const NetworkComputeBridgeService: INetworkComputeBridgeService;

export interface INetworkComputeBridgeServer extends grpc.UntypedServiceImplementation {
    networkCompute: grpc.handleUnaryCall<bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse>;
    listAvailableModels: grpc.handleUnaryCall<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse>;
}

export interface INetworkComputeBridgeClient {
    networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
    listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
    listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
}

export class NetworkComputeBridgeClient extends grpc.Client implements INetworkComputeBridgeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    public networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    public networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    public listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
    public listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
    public listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
}

interface INetworkComputeBridgeWorkerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    networkCompute: INetworkComputeBridgeWorkerService_INetworkCompute;
    workerCompute: INetworkComputeBridgeWorkerService_IWorkerCompute;
    listAvailableModels: INetworkComputeBridgeWorkerService_IListAvailableModels;
}

interface INetworkComputeBridgeWorkerService_INetworkCompute extends grpc.MethodDefinition<bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse> {
    path: "/bosdyn.api.NetworkComputeBridgeWorker/NetworkCompute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse>;
}
interface INetworkComputeBridgeWorkerService_IWorkerCompute extends grpc.MethodDefinition<bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest, bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse> {
    path: "/bosdyn.api.NetworkComputeBridgeWorker/WorkerCompute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse>;
}
interface INetworkComputeBridgeWorkerService_IListAvailableModels extends grpc.MethodDefinition<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse> {
    path: "/bosdyn.api.NetworkComputeBridgeWorker/ListAvailableModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse>;
}

export const NetworkComputeBridgeWorkerService: INetworkComputeBridgeWorkerService;

export interface INetworkComputeBridgeWorkerServer extends grpc.UntypedServiceImplementation {
    networkCompute: grpc.handleUnaryCall<bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse>;
    workerCompute: grpc.handleUnaryCall<bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest, bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse>;
    listAvailableModels: grpc.handleUnaryCall<bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse>;
}

export interface INetworkComputeBridgeWorkerClient {
    networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    workerCompute(request: bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse) => void): grpc.ClientUnaryCall;
    workerCompute(request: bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse) => void): grpc.ClientUnaryCall;
    workerCompute(request: bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse) => void): grpc.ClientUnaryCall;
    listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
    listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
    listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
}

export class NetworkComputeBridgeWorkerClient extends grpc.Client implements INetworkComputeBridgeWorkerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    public networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    public networkCompute(request: bosdyn_api_network_compute_bridge_pb.NetworkComputeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.NetworkComputeResponse) => void): grpc.ClientUnaryCall;
    public workerCompute(request: bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse) => void): grpc.ClientUnaryCall;
    public workerCompute(request: bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse) => void): grpc.ClientUnaryCall;
    public workerCompute(request: bosdyn_api_network_compute_bridge_pb.WorkerComputeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.WorkerComputeResponse) => void): grpc.ClientUnaryCall;
    public listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
    public listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
    public listAvailableModels(request: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_network_compute_bridge_pb.ListAvailableModelsResponse) => void): grpc.ClientUnaryCall;
}
