// package: bosdyn.api.autowalk
// file: bosdyn/api/autowalk/autowalk_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_autowalk_autowalk_service_pb from "../../../bosdyn/api/autowalk/autowalk_service_pb";
import * as bosdyn_api_data_chunk_pb from "../../../bosdyn/api/data_chunk_pb";

interface IAutowalkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    compileAutowalk: IAutowalkServiceService_ICompileAutowalk;
    loadAutowalk: IAutowalkServiceService_ILoadAutowalk;
}

interface IAutowalkServiceService_ICompileAutowalk extends grpc.MethodDefinition<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk> {
    path: "/bosdyn.api.autowalk.AutowalkService/CompileAutowalk";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
}
interface IAutowalkServiceService_ILoadAutowalk extends grpc.MethodDefinition<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk> {
    path: "/bosdyn.api.autowalk.AutowalkService/LoadAutowalk";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseSerialize: grpc.serialize<bosdyn_api_data_chunk_pb.DataChunk>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_chunk_pb.DataChunk>;
}

export const AutowalkServiceService: IAutowalkServiceService;

export interface IAutowalkServiceServer extends grpc.UntypedServiceImplementation {
    compileAutowalk: grpc.handleBidiStreamingCall<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    loadAutowalk: grpc.handleBidiStreamingCall<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
}

export interface IAutowalkServiceClient {
    compileAutowalk(): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    compileAutowalk(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    compileAutowalk(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    loadAutowalk(): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    loadAutowalk(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    loadAutowalk(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
}

export class AutowalkServiceClient extends grpc.Client implements IAutowalkServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public compileAutowalk(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    public compileAutowalk(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    public loadAutowalk(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
    public loadAutowalk(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<bosdyn_api_data_chunk_pb.DataChunk, bosdyn_api_data_chunk_pb.DataChunk>;
}
