// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/recording_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_graph_nav_recording_service_pb from "../../../bosdyn/api/graph_nav/recording_service_pb";
import * as bosdyn_api_graph_nav_recording_pb from "../../../bosdyn/api/graph_nav/recording_pb";

interface IGraphNavRecordingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startRecording: IGraphNavRecordingServiceService_IStartRecording;
    stopRecording: IGraphNavRecordingServiceService_IStopRecording;
    createWaypoint: IGraphNavRecordingServiceService_ICreateWaypoint;
    setRecordingEnvironment: IGraphNavRecordingServiceService_ISetRecordingEnvironment;
    createEdge: IGraphNavRecordingServiceService_ICreateEdge;
    getRecordStatus: IGraphNavRecordingServiceService_IGetRecordStatus;
}

interface IGraphNavRecordingServiceService_IStartRecording extends grpc.MethodDefinition<bosdyn_api_graph_nav_recording_pb.StartRecordingRequest, bosdyn_api_graph_nav_recording_pb.StartRecordingResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavRecordingService/StartRecording";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.StartRecordingRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.StartRecordingRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.StartRecordingResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.StartRecordingResponse>;
}
interface IGraphNavRecordingServiceService_IStopRecording extends grpc.MethodDefinition<bosdyn_api_graph_nav_recording_pb.StopRecordingRequest, bosdyn_api_graph_nav_recording_pb.StopRecordingResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavRecordingService/StopRecording";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.StopRecordingRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.StopRecordingRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.StopRecordingResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.StopRecordingResponse>;
}
interface IGraphNavRecordingServiceService_ICreateWaypoint extends grpc.MethodDefinition<bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest, bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavRecordingService/CreateWaypoint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse>;
}
interface IGraphNavRecordingServiceService_ISetRecordingEnvironment extends grpc.MethodDefinition<bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest, bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavRecordingService/SetRecordingEnvironment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse>;
}
interface IGraphNavRecordingServiceService_ICreateEdge extends grpc.MethodDefinition<bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest, bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavRecordingService/CreateEdge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse>;
}
interface IGraphNavRecordingServiceService_IGetRecordStatus extends grpc.MethodDefinition<bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest, bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavRecordingService/GetRecordStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse>;
}

export const GraphNavRecordingServiceService: IGraphNavRecordingServiceService;

export interface IGraphNavRecordingServiceServer extends grpc.UntypedServiceImplementation {
    startRecording: grpc.handleUnaryCall<bosdyn_api_graph_nav_recording_pb.StartRecordingRequest, bosdyn_api_graph_nav_recording_pb.StartRecordingResponse>;
    stopRecording: grpc.handleUnaryCall<bosdyn_api_graph_nav_recording_pb.StopRecordingRequest, bosdyn_api_graph_nav_recording_pb.StopRecordingResponse>;
    createWaypoint: grpc.handleUnaryCall<bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest, bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse>;
    setRecordingEnvironment: grpc.handleUnaryCall<bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest, bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse>;
    createEdge: grpc.handleUnaryCall<bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest, bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse>;
    getRecordStatus: grpc.handleUnaryCall<bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest, bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse>;
}

export interface IGraphNavRecordingServiceClient {
    startRecording(request: bosdyn_api_graph_nav_recording_pb.StartRecordingRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StartRecordingResponse) => void): grpc.ClientUnaryCall;
    startRecording(request: bosdyn_api_graph_nav_recording_pb.StartRecordingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StartRecordingResponse) => void): grpc.ClientUnaryCall;
    startRecording(request: bosdyn_api_graph_nav_recording_pb.StartRecordingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StartRecordingResponse) => void): grpc.ClientUnaryCall;
    stopRecording(request: bosdyn_api_graph_nav_recording_pb.StopRecordingRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StopRecordingResponse) => void): grpc.ClientUnaryCall;
    stopRecording(request: bosdyn_api_graph_nav_recording_pb.StopRecordingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StopRecordingResponse) => void): grpc.ClientUnaryCall;
    stopRecording(request: bosdyn_api_graph_nav_recording_pb.StopRecordingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StopRecordingResponse) => void): grpc.ClientUnaryCall;
    createWaypoint(request: bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse) => void): grpc.ClientUnaryCall;
    createWaypoint(request: bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse) => void): grpc.ClientUnaryCall;
    createWaypoint(request: bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse) => void): grpc.ClientUnaryCall;
    setRecordingEnvironment(request: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse) => void): grpc.ClientUnaryCall;
    setRecordingEnvironment(request: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse) => void): grpc.ClientUnaryCall;
    setRecordingEnvironment(request: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse) => void): grpc.ClientUnaryCall;
    createEdge(request: bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse) => void): grpc.ClientUnaryCall;
    createEdge(request: bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse) => void): grpc.ClientUnaryCall;
    createEdge(request: bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse) => void): grpc.ClientUnaryCall;
    getRecordStatus(request: bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse) => void): grpc.ClientUnaryCall;
    getRecordStatus(request: bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse) => void): grpc.ClientUnaryCall;
    getRecordStatus(request: bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse) => void): grpc.ClientUnaryCall;
}

export class GraphNavRecordingServiceClient extends grpc.Client implements IGraphNavRecordingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public startRecording(request: bosdyn_api_graph_nav_recording_pb.StartRecordingRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StartRecordingResponse) => void): grpc.ClientUnaryCall;
    public startRecording(request: bosdyn_api_graph_nav_recording_pb.StartRecordingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StartRecordingResponse) => void): grpc.ClientUnaryCall;
    public startRecording(request: bosdyn_api_graph_nav_recording_pb.StartRecordingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StartRecordingResponse) => void): grpc.ClientUnaryCall;
    public stopRecording(request: bosdyn_api_graph_nav_recording_pb.StopRecordingRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StopRecordingResponse) => void): grpc.ClientUnaryCall;
    public stopRecording(request: bosdyn_api_graph_nav_recording_pb.StopRecordingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StopRecordingResponse) => void): grpc.ClientUnaryCall;
    public stopRecording(request: bosdyn_api_graph_nav_recording_pb.StopRecordingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.StopRecordingResponse) => void): grpc.ClientUnaryCall;
    public createWaypoint(request: bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse) => void): grpc.ClientUnaryCall;
    public createWaypoint(request: bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse) => void): grpc.ClientUnaryCall;
    public createWaypoint(request: bosdyn_api_graph_nav_recording_pb.CreateWaypointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateWaypointResponse) => void): grpc.ClientUnaryCall;
    public setRecordingEnvironment(request: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public setRecordingEnvironment(request: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public setRecordingEnvironment(request: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.SetRecordingEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public createEdge(request: bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse) => void): grpc.ClientUnaryCall;
    public createEdge(request: bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse) => void): grpc.ClientUnaryCall;
    public createEdge(request: bosdyn_api_graph_nav_recording_pb.CreateEdgeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.CreateEdgeResponse) => void): grpc.ClientUnaryCall;
    public getRecordStatus(request: bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse) => void): grpc.ClientUnaryCall;
    public getRecordStatus(request: bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse) => void): grpc.ClientUnaryCall;
    public getRecordStatus(request: bosdyn_api_graph_nav_recording_pb.GetRecordStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_recording_pb.GetRecordStatusResponse) => void): grpc.ClientUnaryCall;
}
