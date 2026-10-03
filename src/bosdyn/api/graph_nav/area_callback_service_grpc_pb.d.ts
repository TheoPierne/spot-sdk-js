// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/area_callback_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_graph_nav_area_callback_service_pb from "../../../bosdyn/api/graph_nav/area_callback_service_pb";
import * as bosdyn_api_graph_nav_area_callback_pb from "../../../bosdyn/api/graph_nav/area_callback_pb";

interface IAreaCallbackServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    areaCallbackInformation: IAreaCallbackServiceService_IAreaCallbackInformation;
    beginCallback: IAreaCallbackServiceService_IBeginCallback;
    beginControl: IAreaCallbackServiceService_IBeginControl;
    updateCallback: IAreaCallbackServiceService_IUpdateCallback;
    routeChange: IAreaCallbackServiceService_IRouteChange;
    endCallback: IAreaCallbackServiceService_IEndCallback;
}

interface IAreaCallbackServiceService_IAreaCallbackInformation extends grpc.MethodDefinition<bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest, bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse> {
    path: "/bosdyn.api.graph_nav.AreaCallbackService/AreaCallbackInformation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse>;
}
interface IAreaCallbackServiceService_IBeginCallback extends grpc.MethodDefinition<bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest, bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse> {
    path: "/bosdyn.api.graph_nav.AreaCallbackService/BeginCallback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse>;
}
interface IAreaCallbackServiceService_IBeginControl extends grpc.MethodDefinition<bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest, bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse> {
    path: "/bosdyn.api.graph_nav.AreaCallbackService/BeginControl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse>;
}
interface IAreaCallbackServiceService_IUpdateCallback extends grpc.MethodDefinition<bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest, bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse> {
    path: "/bosdyn.api.graph_nav.AreaCallbackService/UpdateCallback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse>;
}
interface IAreaCallbackServiceService_IRouteChange extends grpc.MethodDefinition<bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest, bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse> {
    path: "/bosdyn.api.graph_nav.AreaCallbackService/RouteChange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse>;
}
interface IAreaCallbackServiceService_IEndCallback extends grpc.MethodDefinition<bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest, bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse> {
    path: "/bosdyn.api.graph_nav.AreaCallbackService/EndCallback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse>;
}

export const AreaCallbackServiceService: IAreaCallbackServiceService;

export interface IAreaCallbackServiceServer extends grpc.UntypedServiceImplementation {
    areaCallbackInformation: grpc.handleUnaryCall<bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest, bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse>;
    beginCallback: grpc.handleUnaryCall<bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest, bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse>;
    beginControl: grpc.handleUnaryCall<bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest, bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse>;
    updateCallback: grpc.handleUnaryCall<bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest, bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse>;
    routeChange: grpc.handleUnaryCall<bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest, bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse>;
    endCallback: grpc.handleUnaryCall<bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest, bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse>;
}

export interface IAreaCallbackServiceClient {
    areaCallbackInformation(request: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse) => void): grpc.ClientUnaryCall;
    areaCallbackInformation(request: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse) => void): grpc.ClientUnaryCall;
    areaCallbackInformation(request: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse) => void): grpc.ClientUnaryCall;
    beginCallback(request: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse) => void): grpc.ClientUnaryCall;
    beginCallback(request: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse) => void): grpc.ClientUnaryCall;
    beginCallback(request: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse) => void): grpc.ClientUnaryCall;
    beginControl(request: bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse) => void): grpc.ClientUnaryCall;
    beginControl(request: bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse) => void): grpc.ClientUnaryCall;
    beginControl(request: bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse) => void): grpc.ClientUnaryCall;
    updateCallback(request: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse) => void): grpc.ClientUnaryCall;
    updateCallback(request: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse) => void): grpc.ClientUnaryCall;
    updateCallback(request: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse) => void): grpc.ClientUnaryCall;
    routeChange(request: bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse) => void): grpc.ClientUnaryCall;
    routeChange(request: bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse) => void): grpc.ClientUnaryCall;
    routeChange(request: bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse) => void): grpc.ClientUnaryCall;
    endCallback(request: bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse) => void): grpc.ClientUnaryCall;
    endCallback(request: bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse) => void): grpc.ClientUnaryCall;
    endCallback(request: bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse) => void): grpc.ClientUnaryCall;
}

export class AreaCallbackServiceClient extends grpc.Client implements IAreaCallbackServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public areaCallbackInformation(request: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse) => void): grpc.ClientUnaryCall;
    public areaCallbackInformation(request: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse) => void): grpc.ClientUnaryCall;
    public areaCallbackInformation(request: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.AreaCallbackInformationResponse) => void): grpc.ClientUnaryCall;
    public beginCallback(request: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse) => void): grpc.ClientUnaryCall;
    public beginCallback(request: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse) => void): grpc.ClientUnaryCall;
    public beginCallback(request: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginCallbackResponse) => void): grpc.ClientUnaryCall;
    public beginControl(request: bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse) => void): grpc.ClientUnaryCall;
    public beginControl(request: bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse) => void): grpc.ClientUnaryCall;
    public beginControl(request: bosdyn_api_graph_nav_area_callback_pb.BeginControlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.BeginControlResponse) => void): grpc.ClientUnaryCall;
    public updateCallback(request: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse) => void): grpc.ClientUnaryCall;
    public updateCallback(request: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse) => void): grpc.ClientUnaryCall;
    public updateCallback(request: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.UpdateCallbackResponse) => void): grpc.ClientUnaryCall;
    public routeChange(request: bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse) => void): grpc.ClientUnaryCall;
    public routeChange(request: bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse) => void): grpc.ClientUnaryCall;
    public routeChange(request: bosdyn_api_graph_nav_area_callback_pb.RouteChangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.RouteChangeResponse) => void): grpc.ClientUnaryCall;
    public endCallback(request: bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse) => void): grpc.ClientUnaryCall;
    public endCallback(request: bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse) => void): grpc.ClientUnaryCall;
    public endCallback(request: bosdyn_api_graph_nav_area_callback_pb.EndCallbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_graph_nav_area_callback_pb.EndCallbackResponse) => void): grpc.ClientUnaryCall;
}
