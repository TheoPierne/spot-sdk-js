// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/map_processing_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_graph_nav_map_processing_service_pb from "../../../bosdyn/api/graph_nav/map_processing_service_pb";
import * as bosdyn_api_graph_nav_map_processing_pb from "../../../bosdyn/api/graph_nav/map_processing_pb";

interface IMapProcessingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    processTopology: IMapProcessingServiceService_IProcessTopology;
    processAnchoring: IMapProcessingServiceService_IProcessAnchoring;
}

interface IMapProcessingServiceService_IProcessTopology extends grpc.MethodDefinition<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest, bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse> {
    path: "/bosdyn.api.graph_nav.MapProcessingService/ProcessTopology";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse>;
}
interface IMapProcessingServiceService_IProcessAnchoring extends grpc.MethodDefinition<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest, bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse> {
    path: "/bosdyn.api.graph_nav.MapProcessingService/ProcessAnchoring";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse>;
}

export const MapProcessingServiceService: IMapProcessingServiceService;

export interface IMapProcessingServiceServer extends grpc.UntypedServiceImplementation {
    processTopology: grpc.handleServerStreamingCall<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest, bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse>;
    processAnchoring: grpc.handleServerStreamingCall<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest, bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse>;
}

export interface IMapProcessingServiceClient {
    processTopology(request: bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse>;
    processTopology(request: bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse>;
    processAnchoring(request: bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse>;
    processAnchoring(request: bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse>;
}

export class MapProcessingServiceClient extends grpc.Client implements IMapProcessingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public processTopology(request: bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse>;
    public processTopology(request: bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_map_processing_pb.ProcessTopologyResponse>;
    public processAnchoring(request: bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse>;
    public processAnchoring(request: bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_map_processing_pb.ProcessAnchoringResponse>;
}
