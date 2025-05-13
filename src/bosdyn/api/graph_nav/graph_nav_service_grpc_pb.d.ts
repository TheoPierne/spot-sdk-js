// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/graph_nav_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_graph_nav_graph_nav_service_pb from "../../../bosdyn/api/graph_nav/graph_nav_service_pb";
import * as bosdyn_api_graph_nav_graph_nav_pb from "../../../bosdyn/api/graph_nav/graph_nav_pb";

interface IGraphNavServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setLocalization: IGraphNavServiceService_ISetLocalization;
    navigateRoute: IGraphNavServiceService_INavigateRoute;
    navigateTo: IGraphNavServiceService_INavigateTo;
    navigateToAnchor: IGraphNavServiceService_INavigateToAnchor;
    navigationFeedback: IGraphNavServiceService_INavigationFeedback;
    getLocalizationState: IGraphNavServiceService_IGetLocalizationState;
    clearGraph: IGraphNavServiceService_IClearGraph;
    downloadGraph: IGraphNavServiceService_IDownloadGraph;
    downloadGraphStreaming: IGraphNavServiceService_IDownloadGraphStreaming;
    uploadGraph: IGraphNavServiceService_IUploadGraph;
    uploadGraphStreaming: IGraphNavServiceService_IUploadGraphStreaming;
    uploadWaypointSnapshot: IGraphNavServiceService_IUploadWaypointSnapshot;
    uploadEdgeSnapshot: IGraphNavServiceService_IUploadEdgeSnapshot;
    downloadWaypointSnapshot: IGraphNavServiceService_IDownloadWaypointSnapshot;
    downloadEdgeSnapshot: IGraphNavServiceService_IDownloadEdgeSnapshot;
    validateGraph: IGraphNavServiceService_IValidateGraph;
}

interface IGraphNavServiceService_ISetLocalization extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/SetLocalization";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse>;
}
interface IGraphNavServiceService_INavigateRoute extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest, bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/NavigateRoute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse>;
}
interface IGraphNavServiceService_INavigateTo extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest, bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/NavigateTo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse>;
}
interface IGraphNavServiceService_INavigateToAnchor extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest, bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/NavigateToAnchor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse>;
}
interface IGraphNavServiceService_INavigationFeedback extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest, bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/NavigationFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse>;
}
interface IGraphNavServiceService_IGetLocalizationState extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest, bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/GetLocalizationState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse>;
}
interface IGraphNavServiceService_IClearGraph extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/ClearGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse>;
}
interface IGraphNavServiceService_IDownloadGraph extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/DownloadGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse>;
}
interface IGraphNavServiceService_IDownloadGraphStreaming extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphStreamingResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/DownloadGraphStreaming";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphStreamingResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphStreamingResponse>;
}
interface IGraphNavServiceService_IUploadGraph extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/UploadGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse>;
}
interface IGraphNavServiceService_IUploadGraphStreaming extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest, bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/UploadGraphStreaming";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse>;
}
interface IGraphNavServiceService_IUploadWaypointSnapshot extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest, bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/UploadWaypointSnapshot";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse>;
}
interface IGraphNavServiceService_IUploadEdgeSnapshot extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest, bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/UploadEdgeSnapshot";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse>;
}
interface IGraphNavServiceService_IDownloadWaypointSnapshot extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest, bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/DownloadWaypointSnapshot";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse>;
}
interface IGraphNavServiceService_IDownloadEdgeSnapshot extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest, bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/DownloadEdgeSnapshot";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse>;
}
interface IGraphNavServiceService_IValidateGraph extends grpc.MethodDefinition<bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse> {
    path: "/bosdyn.api.graph_nav.GraphNavService/ValidateGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse>;
}

export const GraphNavServiceService: IGraphNavServiceService;

export interface IGraphNavServiceServer extends grpc.UntypedServiceImplementation {
    setLocalization: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse>;
    navigateRoute: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest, bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse>;
    navigateTo: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest, bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse>;
    navigateToAnchor: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest, bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse>;
    navigationFeedback: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest, bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse>;
    getLocalizationState: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest, bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse>;
    clearGraph: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse>;
    downloadGraph: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse>;
    downloadGraphStreaming: grpc.handleServerStreamingCall<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphStreamingResponse>;
    uploadGraph: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse>;
    uploadGraphStreaming: grpc.handleClientStreamingCall<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest, bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse>;
    uploadWaypointSnapshot: grpc.handleClientStreamingCall<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest, bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse>;
    uploadEdgeSnapshot: grpc.handleClientStreamingCall<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest, bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse>;
    downloadWaypointSnapshot: grpc.handleServerStreamingCall<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest, bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse>;
    downloadEdgeSnapshot: grpc.handleServerStreamingCall<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest, bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse>;
    validateGraph: grpc.handleUnaryCall<bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest, bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse>;
}

export interface IGraphNavServiceClient {
    setLocalization(request: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse) => void): grpc.ClientUnaryCall;
    setLocalization(request: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse) => void): grpc.ClientUnaryCall;
    setLocalization(request: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse) => void): grpc.ClientUnaryCall;
    navigateRoute(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse) => void): grpc.ClientUnaryCall;
    navigateRoute(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse) => void): grpc.ClientUnaryCall;
    navigateRoute(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse) => void): grpc.ClientUnaryCall;
    navigateTo(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse) => void): grpc.ClientUnaryCall;
    navigateTo(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse) => void): grpc.ClientUnaryCall;
    navigateTo(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse) => void): grpc.ClientUnaryCall;
    navigateToAnchor(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse) => void): grpc.ClientUnaryCall;
    navigateToAnchor(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse) => void): grpc.ClientUnaryCall;
    navigateToAnchor(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse) => void): grpc.ClientUnaryCall;
    navigationFeedback(request: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse) => void): grpc.ClientUnaryCall;
    navigationFeedback(request: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse) => void): grpc.ClientUnaryCall;
    navigationFeedback(request: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse) => void): grpc.ClientUnaryCall;
    getLocalizationState(request: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse) => void): grpc.ClientUnaryCall;
    getLocalizationState(request: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse) => void): grpc.ClientUnaryCall;
    getLocalizationState(request: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse) => void): grpc.ClientUnaryCall;
    clearGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse) => void): grpc.ClientUnaryCall;
    clearGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse) => void): grpc.ClientUnaryCall;
    clearGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse) => void): grpc.ClientUnaryCall;
    downloadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse) => void): grpc.ClientUnaryCall;
    downloadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse) => void): grpc.ClientUnaryCall;
    downloadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse) => void): grpc.ClientUnaryCall;
    downloadGraphStreaming(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphStreamingResponse>;
    downloadGraphStreaming(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphStreamingResponse>;
    uploadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientUnaryCall;
    uploadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientUnaryCall;
    uploadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientUnaryCall;
    uploadGraphStreaming(callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    uploadGraphStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    uploadGraphStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    uploadGraphStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    uploadWaypointSnapshot(callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    uploadWaypointSnapshot(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    uploadWaypointSnapshot(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    uploadWaypointSnapshot(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    uploadEdgeSnapshot(callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    uploadEdgeSnapshot(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    uploadEdgeSnapshot(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    uploadEdgeSnapshot(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    downloadWaypointSnapshot(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse>;
    downloadWaypointSnapshot(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse>;
    downloadEdgeSnapshot(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse>;
    downloadEdgeSnapshot(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse>;
    validateGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse) => void): grpc.ClientUnaryCall;
    validateGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse) => void): grpc.ClientUnaryCall;
    validateGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse) => void): grpc.ClientUnaryCall;
}

export class GraphNavServiceClient extends grpc.Client implements IGraphNavServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setLocalization(request: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse) => void): grpc.ClientUnaryCall;
    public setLocalization(request: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse) => void): grpc.ClientUnaryCall;
    public setLocalization(request: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationResponse) => void): grpc.ClientUnaryCall;
    public navigateRoute(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse) => void): grpc.ClientUnaryCall;
    public navigateRoute(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse) => void): grpc.ClientUnaryCall;
    public navigateRoute(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateRouteResponse) => void): grpc.ClientUnaryCall;
    public navigateTo(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse) => void): grpc.ClientUnaryCall;
    public navigateTo(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse) => void): grpc.ClientUnaryCall;
    public navigateTo(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToResponse) => void): grpc.ClientUnaryCall;
    public navigateToAnchor(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse) => void): grpc.ClientUnaryCall;
    public navigateToAnchor(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse) => void): grpc.ClientUnaryCall;
    public navigateToAnchor(request: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigateToAnchorResponse) => void): grpc.ClientUnaryCall;
    public navigationFeedback(request: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public navigationFeedback(request: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public navigationFeedback(request: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.NavigationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public getLocalizationState(request: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse) => void): grpc.ClientUnaryCall;
    public getLocalizationState(request: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse) => void): grpc.ClientUnaryCall;
    public getLocalizationState(request: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.GetLocalizationStateResponse) => void): grpc.ClientUnaryCall;
    public clearGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse) => void): grpc.ClientUnaryCall;
    public clearGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse) => void): grpc.ClientUnaryCall;
    public clearGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ClearGraphResponse) => void): grpc.ClientUnaryCall;
    public downloadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse) => void): grpc.ClientUnaryCall;
    public downloadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse) => void): grpc.ClientUnaryCall;
    public downloadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphResponse) => void): grpc.ClientUnaryCall;
    public downloadGraphStreaming(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphStreamingResponse>;
    public downloadGraphStreaming(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadGraphStreamingResponse>;
    public uploadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientUnaryCall;
    public uploadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientUnaryCall;
    public uploadGraph(request: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientUnaryCall;
    public uploadGraphStreaming(callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    public uploadGraphStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    public uploadGraphStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    public uploadGraphStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadGraphResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadGraphStreamingRequest>;
    public uploadWaypointSnapshot(callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    public uploadWaypointSnapshot(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    public uploadWaypointSnapshot(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    public uploadWaypointSnapshot(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadWaypointSnapshotRequest>;
    public uploadEdgeSnapshot(callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    public uploadEdgeSnapshot(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    public uploadEdgeSnapshot(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    public uploadEdgeSnapshot(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotResponse) => void): grpc.ClientWritableStream<bosdyn_api_graph_nav_graph_nav_pb.UploadEdgeSnapshotRequest>;
    public downloadWaypointSnapshot(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse>;
    public downloadWaypointSnapshot(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadWaypointSnapshotResponse>;
    public downloadEdgeSnapshot(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse>;
    public downloadEdgeSnapshot(request: bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_graph_nav_graph_nav_pb.DownloadEdgeSnapshotResponse>;
    public validateGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse) => void): grpc.ClientUnaryCall;
    public validateGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse) => void): grpc.ClientUnaryCall;
    public validateGraph(request: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_graph_nav_pb.ValidateGraphResponse) => void): grpc.ClientUnaryCall;
}
