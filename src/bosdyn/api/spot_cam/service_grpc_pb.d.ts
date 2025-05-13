// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_spot_cam_service_pb from "../../../bosdyn/api/spot_cam/service_pb";
import * as bosdyn_api_spot_cam_compositor_pb from "../../../bosdyn/api/spot_cam/compositor_pb";
import * as bosdyn_api_spot_cam_streamquality_pb from "../../../bosdyn/api/spot_cam/streamquality_pb";
import * as bosdyn_api_spot_cam_power_pb from "../../../bosdyn/api/spot_cam/power_pb";
import * as bosdyn_api_spot_cam_LED_pb from "../../../bosdyn/api/spot_cam/LED_pb";
import * as bosdyn_api_spot_cam_logging_pb from "../../../bosdyn/api/spot_cam/logging_pb";
import * as bosdyn_api_spot_cam_ptz_pb from "../../../bosdyn/api/spot_cam/ptz_pb";
import * as bosdyn_api_spot_cam_audio_pb from "../../../bosdyn/api/spot_cam/audio_pb";
import * as bosdyn_api_spot_cam_health_pb from "../../../bosdyn/api/spot_cam/health_pb";
import * as bosdyn_api_spot_cam_network_pb from "../../../bosdyn/api/spot_cam/network_pb";
import * as bosdyn_api_spot_cam_version_pb from "../../../bosdyn/api/spot_cam/version_pb";

interface ICompositorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setScreen: ICompositorServiceService_ISetScreen;
    getScreen: ICompositorServiceService_IGetScreen;
    listScreens: ICompositorServiceService_IListScreens;
    getVisibleCameras: ICompositorServiceService_IGetVisibleCameras;
    setIrColormap: ICompositorServiceService_ISetIrColormap;
    getIrColormap: ICompositorServiceService_IGetIrColormap;
    setIrMeterOverlay: ICompositorServiceService_ISetIrMeterOverlay;
    getIrMeterOverlay: ICompositorServiceService_IGetIrMeterOverlay;
}

interface ICompositorServiceService_ISetScreen extends grpc.MethodDefinition<bosdyn_api_spot_cam_compositor_pb.SetScreenRequest, bosdyn_api_spot_cam_compositor_pb.SetScreenResponse> {
    path: "/bosdyn.api.spot_cam.CompositorService/SetScreen";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.SetScreenRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.SetScreenRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.SetScreenResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.SetScreenResponse>;
}
interface ICompositorServiceService_IGetScreen extends grpc.MethodDefinition<bosdyn_api_spot_cam_compositor_pb.GetScreenRequest, bosdyn_api_spot_cam_compositor_pb.GetScreenResponse> {
    path: "/bosdyn.api.spot_cam.CompositorService/GetScreen";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.GetScreenRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.GetScreenRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.GetScreenResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.GetScreenResponse>;
}
interface ICompositorServiceService_IListScreens extends grpc.MethodDefinition<bosdyn_api_spot_cam_compositor_pb.ListScreensRequest, bosdyn_api_spot_cam_compositor_pb.ListScreensResponse> {
    path: "/bosdyn.api.spot_cam.CompositorService/ListScreens";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.ListScreensRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.ListScreensRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.ListScreensResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.ListScreensResponse>;
}
interface ICompositorServiceService_IGetVisibleCameras extends grpc.MethodDefinition<bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest, bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse> {
    path: "/bosdyn.api.spot_cam.CompositorService/GetVisibleCameras";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse>;
}
interface ICompositorServiceService_ISetIrColormap extends grpc.MethodDefinition<bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest, bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse> {
    path: "/bosdyn.api.spot_cam.CompositorService/SetIrColormap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse>;
}
interface ICompositorServiceService_IGetIrColormap extends grpc.MethodDefinition<bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest, bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse> {
    path: "/bosdyn.api.spot_cam.CompositorService/GetIrColormap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse>;
}
interface ICompositorServiceService_ISetIrMeterOverlay extends grpc.MethodDefinition<bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest, bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse> {
    path: "/bosdyn.api.spot_cam.CompositorService/SetIrMeterOverlay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse>;
}
interface ICompositorServiceService_IGetIrMeterOverlay extends grpc.MethodDefinition<bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest, bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse> {
    path: "/bosdyn.api.spot_cam.CompositorService/GetIrMeterOverlay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse>;
}

export const CompositorServiceService: ICompositorServiceService;

export interface ICompositorServiceServer extends grpc.UntypedServiceImplementation {
    setScreen: grpc.handleUnaryCall<bosdyn_api_spot_cam_compositor_pb.SetScreenRequest, bosdyn_api_spot_cam_compositor_pb.SetScreenResponse>;
    getScreen: grpc.handleUnaryCall<bosdyn_api_spot_cam_compositor_pb.GetScreenRequest, bosdyn_api_spot_cam_compositor_pb.GetScreenResponse>;
    listScreens: grpc.handleUnaryCall<bosdyn_api_spot_cam_compositor_pb.ListScreensRequest, bosdyn_api_spot_cam_compositor_pb.ListScreensResponse>;
    getVisibleCameras: grpc.handleUnaryCall<bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest, bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse>;
    setIrColormap: grpc.handleUnaryCall<bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest, bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse>;
    getIrColormap: grpc.handleUnaryCall<bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest, bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse>;
    setIrMeterOverlay: grpc.handleUnaryCall<bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest, bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse>;
    getIrMeterOverlay: grpc.handleUnaryCall<bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest, bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse>;
}

export interface ICompositorServiceClient {
    setScreen(request: bosdyn_api_spot_cam_compositor_pb.SetScreenRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetScreenResponse) => void): grpc.ClientUnaryCall;
    setScreen(request: bosdyn_api_spot_cam_compositor_pb.SetScreenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetScreenResponse) => void): grpc.ClientUnaryCall;
    setScreen(request: bosdyn_api_spot_cam_compositor_pb.SetScreenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetScreenResponse) => void): grpc.ClientUnaryCall;
    getScreen(request: bosdyn_api_spot_cam_compositor_pb.GetScreenRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetScreenResponse) => void): grpc.ClientUnaryCall;
    getScreen(request: bosdyn_api_spot_cam_compositor_pb.GetScreenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetScreenResponse) => void): grpc.ClientUnaryCall;
    getScreen(request: bosdyn_api_spot_cam_compositor_pb.GetScreenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetScreenResponse) => void): grpc.ClientUnaryCall;
    listScreens(request: bosdyn_api_spot_cam_compositor_pb.ListScreensRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.ListScreensResponse) => void): grpc.ClientUnaryCall;
    listScreens(request: bosdyn_api_spot_cam_compositor_pb.ListScreensRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.ListScreensResponse) => void): grpc.ClientUnaryCall;
    listScreens(request: bosdyn_api_spot_cam_compositor_pb.ListScreensRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.ListScreensResponse) => void): grpc.ClientUnaryCall;
    getVisibleCameras(request: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse) => void): grpc.ClientUnaryCall;
    getVisibleCameras(request: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse) => void): grpc.ClientUnaryCall;
    getVisibleCameras(request: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse) => void): grpc.ClientUnaryCall;
    setIrColormap(request: bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse) => void): grpc.ClientUnaryCall;
    setIrColormap(request: bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse) => void): grpc.ClientUnaryCall;
    setIrColormap(request: bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse) => void): grpc.ClientUnaryCall;
    getIrColormap(request: bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse) => void): grpc.ClientUnaryCall;
    getIrColormap(request: bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse) => void): grpc.ClientUnaryCall;
    getIrColormap(request: bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse) => void): grpc.ClientUnaryCall;
    setIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    setIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    setIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    getIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    getIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    getIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
}

export class CompositorServiceClient extends grpc.Client implements ICompositorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setScreen(request: bosdyn_api_spot_cam_compositor_pb.SetScreenRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetScreenResponse) => void): grpc.ClientUnaryCall;
    public setScreen(request: bosdyn_api_spot_cam_compositor_pb.SetScreenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetScreenResponse) => void): grpc.ClientUnaryCall;
    public setScreen(request: bosdyn_api_spot_cam_compositor_pb.SetScreenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetScreenResponse) => void): grpc.ClientUnaryCall;
    public getScreen(request: bosdyn_api_spot_cam_compositor_pb.GetScreenRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetScreenResponse) => void): grpc.ClientUnaryCall;
    public getScreen(request: bosdyn_api_spot_cam_compositor_pb.GetScreenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetScreenResponse) => void): grpc.ClientUnaryCall;
    public getScreen(request: bosdyn_api_spot_cam_compositor_pb.GetScreenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetScreenResponse) => void): grpc.ClientUnaryCall;
    public listScreens(request: bosdyn_api_spot_cam_compositor_pb.ListScreensRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.ListScreensResponse) => void): grpc.ClientUnaryCall;
    public listScreens(request: bosdyn_api_spot_cam_compositor_pb.ListScreensRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.ListScreensResponse) => void): grpc.ClientUnaryCall;
    public listScreens(request: bosdyn_api_spot_cam_compositor_pb.ListScreensRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.ListScreensResponse) => void): grpc.ClientUnaryCall;
    public getVisibleCameras(request: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse) => void): grpc.ClientUnaryCall;
    public getVisibleCameras(request: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse) => void): grpc.ClientUnaryCall;
    public getVisibleCameras(request: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetVisibleCamerasResponse) => void): grpc.ClientUnaryCall;
    public setIrColormap(request: bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse) => void): grpc.ClientUnaryCall;
    public setIrColormap(request: bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse) => void): grpc.ClientUnaryCall;
    public setIrColormap(request: bosdyn_api_spot_cam_compositor_pb.SetIrColormapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrColormapResponse) => void): grpc.ClientUnaryCall;
    public getIrColormap(request: bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse) => void): grpc.ClientUnaryCall;
    public getIrColormap(request: bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse) => void): grpc.ClientUnaryCall;
    public getIrColormap(request: bosdyn_api_spot_cam_compositor_pb.GetIrColormapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrColormapResponse) => void): grpc.ClientUnaryCall;
    public setIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    public setIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    public setIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.SetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    public getIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    public getIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
    public getIrMeterOverlay(request: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_compositor_pb.GetIrMeterOverlayResponse) => void): grpc.ClientUnaryCall;
}

interface IStreamQualityServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setStreamParams: IStreamQualityServiceService_ISetStreamParams;
    getStreamParams: IStreamQualityServiceService_IGetStreamParams;
    enableCongestionControl: IStreamQualityServiceService_IEnableCongestionControl;
}

interface IStreamQualityServiceService_ISetStreamParams extends grpc.MethodDefinition<bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest, bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse> {
    path: "/bosdyn.api.spot_cam.StreamQualityService/SetStreamParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse>;
}
interface IStreamQualityServiceService_IGetStreamParams extends grpc.MethodDefinition<bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest, bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse> {
    path: "/bosdyn.api.spot_cam.StreamQualityService/GetStreamParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse>;
}
interface IStreamQualityServiceService_IEnableCongestionControl extends grpc.MethodDefinition<bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest, bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse> {
    path: "/bosdyn.api.spot_cam.StreamQualityService/EnableCongestionControl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse>;
}

export const StreamQualityServiceService: IStreamQualityServiceService;

export interface IStreamQualityServiceServer extends grpc.UntypedServiceImplementation {
    setStreamParams: grpc.handleUnaryCall<bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest, bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse>;
    getStreamParams: grpc.handleUnaryCall<bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest, bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse>;
    enableCongestionControl: grpc.handleUnaryCall<bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest, bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse>;
}

export interface IStreamQualityServiceClient {
    setStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    setStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    setStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    getStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    getStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    getStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    enableCongestionControl(request: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse) => void): grpc.ClientUnaryCall;
    enableCongestionControl(request: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse) => void): grpc.ClientUnaryCall;
    enableCongestionControl(request: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse) => void): grpc.ClientUnaryCall;
}

export class StreamQualityServiceClient extends grpc.Client implements IStreamQualityServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    public setStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    public setStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.SetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    public getStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    public getStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    public getStreamParams(request: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.GetStreamParamsResponse) => void): grpc.ClientUnaryCall;
    public enableCongestionControl(request: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse) => void): grpc.ClientUnaryCall;
    public enableCongestionControl(request: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse) => void): grpc.ClientUnaryCall;
    public enableCongestionControl(request: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_streamquality_pb.EnableCongestionControlResponse) => void): grpc.ClientUnaryCall;
}

interface IPowerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setPowerStatus: IPowerServiceService_ISetPowerStatus;
    getPowerStatus: IPowerServiceService_IGetPowerStatus;
    cyclePower: IPowerServiceService_ICyclePower;
}

interface IPowerServiceService_ISetPowerStatus extends grpc.MethodDefinition<bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest, bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse> {
    path: "/bosdyn.api.spot_cam.PowerService/SetPowerStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse>;
}
interface IPowerServiceService_IGetPowerStatus extends grpc.MethodDefinition<bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest, bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse> {
    path: "/bosdyn.api.spot_cam.PowerService/GetPowerStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse>;
}
interface IPowerServiceService_ICyclePower extends grpc.MethodDefinition<bosdyn_api_spot_cam_power_pb.CyclePowerRequest, bosdyn_api_spot_cam_power_pb.CyclePowerResponse> {
    path: "/bosdyn.api.spot_cam.PowerService/CyclePower";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_power_pb.CyclePowerRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_power_pb.CyclePowerRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_power_pb.CyclePowerResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_power_pb.CyclePowerResponse>;
}

export const PowerServiceService: IPowerServiceService;

export interface IPowerServiceServer extends grpc.UntypedServiceImplementation {
    setPowerStatus: grpc.handleUnaryCall<bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest, bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse>;
    getPowerStatus: grpc.handleUnaryCall<bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest, bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse>;
    cyclePower: grpc.handleUnaryCall<bosdyn_api_spot_cam_power_pb.CyclePowerRequest, bosdyn_api_spot_cam_power_pb.CyclePowerResponse>;
}

export interface IPowerServiceClient {
    setPowerStatus(request: bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    setPowerStatus(request: bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    setPowerStatus(request: bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    getPowerStatus(request: bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    getPowerStatus(request: bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    getPowerStatus(request: bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    cyclePower(request: bosdyn_api_spot_cam_power_pb.CyclePowerRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.CyclePowerResponse) => void): grpc.ClientUnaryCall;
    cyclePower(request: bosdyn_api_spot_cam_power_pb.CyclePowerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.CyclePowerResponse) => void): grpc.ClientUnaryCall;
    cyclePower(request: bosdyn_api_spot_cam_power_pb.CyclePowerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.CyclePowerResponse) => void): grpc.ClientUnaryCall;
}

export class PowerServiceClient extends grpc.Client implements IPowerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setPowerStatus(request: bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    public setPowerStatus(request: bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    public setPowerStatus(request: bosdyn_api_spot_cam_power_pb.SetPowerStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.SetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    public getPowerStatus(request: bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    public getPowerStatus(request: bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    public getPowerStatus(request: bosdyn_api_spot_cam_power_pb.GetPowerStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.GetPowerStatusResponse) => void): grpc.ClientUnaryCall;
    public cyclePower(request: bosdyn_api_spot_cam_power_pb.CyclePowerRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.CyclePowerResponse) => void): grpc.ClientUnaryCall;
    public cyclePower(request: bosdyn_api_spot_cam_power_pb.CyclePowerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.CyclePowerResponse) => void): grpc.ClientUnaryCall;
    public cyclePower(request: bosdyn_api_spot_cam_power_pb.CyclePowerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_power_pb.CyclePowerResponse) => void): grpc.ClientUnaryCall;
}

interface ILightingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setLEDBrightness: ILightingServiceService_ISetLEDBrightness;
    getLEDBrightness: ILightingServiceService_IGetLEDBrightness;
}

interface ILightingServiceService_ISetLEDBrightness extends grpc.MethodDefinition<bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest, bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse> {
    path: "/bosdyn.api.spot_cam.LightingService/SetLEDBrightness";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse>;
}
interface ILightingServiceService_IGetLEDBrightness extends grpc.MethodDefinition<bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest, bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse> {
    path: "/bosdyn.api.spot_cam.LightingService/GetLEDBrightness";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse>;
}

export const LightingServiceService: ILightingServiceService;

export interface ILightingServiceServer extends grpc.UntypedServiceImplementation {
    setLEDBrightness: grpc.handleUnaryCall<bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest, bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse>;
    getLEDBrightness: grpc.handleUnaryCall<bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest, bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse>;
}

export interface ILightingServiceClient {
    setLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    setLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    setLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    getLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    getLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    getLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
}

export class LightingServiceClient extends grpc.Client implements ILightingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    public setLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    public setLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.SetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    public getLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    public getLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
    public getLEDBrightness(request: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_LED_pb.GetLEDBrightnessResponse) => void): grpc.ClientUnaryCall;
}

interface IMediaLogServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    store: IMediaLogServiceService_IStore;
    getStatus: IMediaLogServiceService_IGetStatus;
    tag: IMediaLogServiceService_ITag;
    enableDebug: IMediaLogServiceService_IEnableDebug;
    listCameras: IMediaLogServiceService_IListCameras;
    retrieveRawData: IMediaLogServiceService_IRetrieveRawData;
    retrieve: IMediaLogServiceService_IRetrieve;
    delete: IMediaLogServiceService_IDelete;
    listLogpoints: IMediaLogServiceService_IListLogpoints;
    setPassphrase: IMediaLogServiceService_ISetPassphrase;
}

interface IMediaLogServiceService_IStore extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.StoreRequest, bosdyn_api_spot_cam_logging_pb.StoreResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/Store";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.StoreRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.StoreRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.StoreResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.StoreResponse>;
}
interface IMediaLogServiceService_IGetStatus extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.GetStatusRequest, bosdyn_api_spot_cam_logging_pb.GetStatusResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/GetStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.GetStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.GetStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.GetStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.GetStatusResponse>;
}
interface IMediaLogServiceService_ITag extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.TagRequest, bosdyn_api_spot_cam_logging_pb.TagResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/Tag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.TagRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.TagRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.TagResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.TagResponse>;
}
interface IMediaLogServiceService_IEnableDebug extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.DebugRequest, bosdyn_api_spot_cam_logging_pb.DebugResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/EnableDebug";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.DebugRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.DebugRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.DebugResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.DebugResponse>;
}
interface IMediaLogServiceService_IListCameras extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.ListCamerasRequest, bosdyn_api_spot_cam_logging_pb.ListCamerasResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/ListCameras";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.ListCamerasRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.ListCamerasRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.ListCamerasResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.ListCamerasResponse>;
}
interface IMediaLogServiceService_IRetrieveRawData extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest, bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/RetrieveRawData";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse>;
}
interface IMediaLogServiceService_IRetrieve extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.RetrieveRequest, bosdyn_api_spot_cam_logging_pb.RetrieveResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/Retrieve";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.RetrieveRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.RetrieveRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.RetrieveResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.RetrieveResponse>;
}
interface IMediaLogServiceService_IDelete extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.DeleteRequest, bosdyn_api_spot_cam_logging_pb.DeleteResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.DeleteResponse>;
}
interface IMediaLogServiceService_IListLogpoints extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest, bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/ListLogpoints";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse>;
}
interface IMediaLogServiceService_ISetPassphrase extends grpc.MethodDefinition<bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest, bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse> {
    path: "/bosdyn.api.spot_cam.MediaLogService/SetPassphrase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse>;
}

export const MediaLogServiceService: IMediaLogServiceService;

export interface IMediaLogServiceServer extends grpc.UntypedServiceImplementation {
    store: grpc.handleUnaryCall<bosdyn_api_spot_cam_logging_pb.StoreRequest, bosdyn_api_spot_cam_logging_pb.StoreResponse>;
    getStatus: grpc.handleUnaryCall<bosdyn_api_spot_cam_logging_pb.GetStatusRequest, bosdyn_api_spot_cam_logging_pb.GetStatusResponse>;
    tag: grpc.handleUnaryCall<bosdyn_api_spot_cam_logging_pb.TagRequest, bosdyn_api_spot_cam_logging_pb.TagResponse>;
    enableDebug: grpc.handleUnaryCall<bosdyn_api_spot_cam_logging_pb.DebugRequest, bosdyn_api_spot_cam_logging_pb.DebugResponse>;
    listCameras: grpc.handleUnaryCall<bosdyn_api_spot_cam_logging_pb.ListCamerasRequest, bosdyn_api_spot_cam_logging_pb.ListCamerasResponse>;
    retrieveRawData: grpc.handleServerStreamingCall<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest, bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse>;
    retrieve: grpc.handleServerStreamingCall<bosdyn_api_spot_cam_logging_pb.RetrieveRequest, bosdyn_api_spot_cam_logging_pb.RetrieveResponse>;
    delete: grpc.handleUnaryCall<bosdyn_api_spot_cam_logging_pb.DeleteRequest, bosdyn_api_spot_cam_logging_pb.DeleteResponse>;
    listLogpoints: grpc.handleServerStreamingCall<bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest, bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse>;
    setPassphrase: grpc.handleUnaryCall<bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest, bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse>;
}

export interface IMediaLogServiceClient {
    store(request: bosdyn_api_spot_cam_logging_pb.StoreRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.StoreResponse) => void): grpc.ClientUnaryCall;
    store(request: bosdyn_api_spot_cam_logging_pb.StoreRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.StoreResponse) => void): grpc.ClientUnaryCall;
    store(request: bosdyn_api_spot_cam_logging_pb.StoreRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.StoreResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_spot_cam_logging_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_spot_cam_logging_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_spot_cam_logging_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    tag(request: bosdyn_api_spot_cam_logging_pb.TagRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.TagResponse) => void): grpc.ClientUnaryCall;
    tag(request: bosdyn_api_spot_cam_logging_pb.TagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.TagResponse) => void): grpc.ClientUnaryCall;
    tag(request: bosdyn_api_spot_cam_logging_pb.TagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.TagResponse) => void): grpc.ClientUnaryCall;
    enableDebug(request: bosdyn_api_spot_cam_logging_pb.DebugRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DebugResponse) => void): grpc.ClientUnaryCall;
    enableDebug(request: bosdyn_api_spot_cam_logging_pb.DebugRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DebugResponse) => void): grpc.ClientUnaryCall;
    enableDebug(request: bosdyn_api_spot_cam_logging_pb.DebugRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DebugResponse) => void): grpc.ClientUnaryCall;
    listCameras(request: bosdyn_api_spot_cam_logging_pb.ListCamerasRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.ListCamerasResponse) => void): grpc.ClientUnaryCall;
    listCameras(request: bosdyn_api_spot_cam_logging_pb.ListCamerasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.ListCamerasResponse) => void): grpc.ClientUnaryCall;
    listCameras(request: bosdyn_api_spot_cam_logging_pb.ListCamerasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.ListCamerasResponse) => void): grpc.ClientUnaryCall;
    retrieveRawData(request: bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse>;
    retrieveRawData(request: bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse>;
    retrieve(request: bosdyn_api_spot_cam_logging_pb.RetrieveRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.RetrieveResponse>;
    retrieve(request: bosdyn_api_spot_cam_logging_pb.RetrieveRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.RetrieveResponse>;
    delete(request: bosdyn_api_spot_cam_logging_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: bosdyn_api_spot_cam_logging_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: bosdyn_api_spot_cam_logging_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    listLogpoints(request: bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse>;
    listLogpoints(request: bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse>;
    setPassphrase(request: bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse) => void): grpc.ClientUnaryCall;
    setPassphrase(request: bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse) => void): grpc.ClientUnaryCall;
    setPassphrase(request: bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse) => void): grpc.ClientUnaryCall;
}

export class MediaLogServiceClient extends grpc.Client implements IMediaLogServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public store(request: bosdyn_api_spot_cam_logging_pb.StoreRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.StoreResponse) => void): grpc.ClientUnaryCall;
    public store(request: bosdyn_api_spot_cam_logging_pb.StoreRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.StoreResponse) => void): grpc.ClientUnaryCall;
    public store(request: bosdyn_api_spot_cam_logging_pb.StoreRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.StoreResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_spot_cam_logging_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_spot_cam_logging_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_spot_cam_logging_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public tag(request: bosdyn_api_spot_cam_logging_pb.TagRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.TagResponse) => void): grpc.ClientUnaryCall;
    public tag(request: bosdyn_api_spot_cam_logging_pb.TagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.TagResponse) => void): grpc.ClientUnaryCall;
    public tag(request: bosdyn_api_spot_cam_logging_pb.TagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.TagResponse) => void): grpc.ClientUnaryCall;
    public enableDebug(request: bosdyn_api_spot_cam_logging_pb.DebugRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DebugResponse) => void): grpc.ClientUnaryCall;
    public enableDebug(request: bosdyn_api_spot_cam_logging_pb.DebugRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DebugResponse) => void): grpc.ClientUnaryCall;
    public enableDebug(request: bosdyn_api_spot_cam_logging_pb.DebugRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DebugResponse) => void): grpc.ClientUnaryCall;
    public listCameras(request: bosdyn_api_spot_cam_logging_pb.ListCamerasRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.ListCamerasResponse) => void): grpc.ClientUnaryCall;
    public listCameras(request: bosdyn_api_spot_cam_logging_pb.ListCamerasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.ListCamerasResponse) => void): grpc.ClientUnaryCall;
    public listCameras(request: bosdyn_api_spot_cam_logging_pb.ListCamerasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.ListCamerasResponse) => void): grpc.ClientUnaryCall;
    public retrieveRawData(request: bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse>;
    public retrieveRawData(request: bosdyn_api_spot_cam_logging_pb.RetrieveRawDataRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.RetrieveRawDataResponse>;
    public retrieve(request: bosdyn_api_spot_cam_logging_pb.RetrieveRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.RetrieveResponse>;
    public retrieve(request: bosdyn_api_spot_cam_logging_pb.RetrieveRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.RetrieveResponse>;
    public delete(request: bosdyn_api_spot_cam_logging_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: bosdyn_api_spot_cam_logging_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: bosdyn_api_spot_cam_logging_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public listLogpoints(request: bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse>;
    public listLogpoints(request: bosdyn_api_spot_cam_logging_pb.ListLogpointsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_logging_pb.ListLogpointsResponse>;
    public setPassphrase(request: bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse) => void): grpc.ClientUnaryCall;
    public setPassphrase(request: bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse) => void): grpc.ClientUnaryCall;
    public setPassphrase(request: bosdyn_api_spot_cam_logging_pb.SetPassphraseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_logging_pb.SetPassphraseResponse) => void): grpc.ClientUnaryCall;
}

interface IPtzServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setPtzPosition: IPtzServiceService_ISetPtzPosition;
    getPtzPosition: IPtzServiceService_IGetPtzPosition;
    setPtzVelocity: IPtzServiceService_ISetPtzVelocity;
    getPtzVelocity: IPtzServiceService_IGetPtzVelocity;
    listPtz: IPtzServiceService_IListPtz;
    initializeLens: IPtzServiceService_IInitializeLens;
    setPtzFocusState: IPtzServiceService_ISetPtzFocusState;
    getPtzFocusState: IPtzServiceService_IGetPtzFocusState;
}

interface IPtzServiceService_ISetPtzPosition extends grpc.MethodDefinition<bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest, bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse> {
    path: "/bosdyn.api.spot_cam.PtzService/SetPtzPosition";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse>;
}
interface IPtzServiceService_IGetPtzPosition extends grpc.MethodDefinition<bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest, bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse> {
    path: "/bosdyn.api.spot_cam.PtzService/GetPtzPosition";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse>;
}
interface IPtzServiceService_ISetPtzVelocity extends grpc.MethodDefinition<bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest, bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse> {
    path: "/bosdyn.api.spot_cam.PtzService/SetPtzVelocity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse>;
}
interface IPtzServiceService_IGetPtzVelocity extends grpc.MethodDefinition<bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest, bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse> {
    path: "/bosdyn.api.spot_cam.PtzService/GetPtzVelocity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse>;
}
interface IPtzServiceService_IListPtz extends grpc.MethodDefinition<bosdyn_api_spot_cam_ptz_pb.ListPtzRequest, bosdyn_api_spot_cam_ptz_pb.ListPtzResponse> {
    path: "/bosdyn.api.spot_cam.PtzService/ListPtz";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.ListPtzRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.ListPtzRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.ListPtzResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.ListPtzResponse>;
}
interface IPtzServiceService_IInitializeLens extends grpc.MethodDefinition<bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest, bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse> {
    path: "/bosdyn.api.spot_cam.PtzService/InitializeLens";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse>;
}
interface IPtzServiceService_ISetPtzFocusState extends grpc.MethodDefinition<bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest, bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse> {
    path: "/bosdyn.api.spot_cam.PtzService/SetPtzFocusState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse>;
}
interface IPtzServiceService_IGetPtzFocusState extends grpc.MethodDefinition<bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest, bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse> {
    path: "/bosdyn.api.spot_cam.PtzService/GetPtzFocusState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse>;
}

export const PtzServiceService: IPtzServiceService;

export interface IPtzServiceServer extends grpc.UntypedServiceImplementation {
    setPtzPosition: grpc.handleUnaryCall<bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest, bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse>;
    getPtzPosition: grpc.handleUnaryCall<bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest, bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse>;
    setPtzVelocity: grpc.handleUnaryCall<bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest, bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse>;
    getPtzVelocity: grpc.handleUnaryCall<bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest, bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse>;
    listPtz: grpc.handleUnaryCall<bosdyn_api_spot_cam_ptz_pb.ListPtzRequest, bosdyn_api_spot_cam_ptz_pb.ListPtzResponse>;
    initializeLens: grpc.handleUnaryCall<bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest, bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse>;
    setPtzFocusState: grpc.handleUnaryCall<bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest, bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse>;
    getPtzFocusState: grpc.handleUnaryCall<bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest, bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse>;
}

export interface IPtzServiceClient {
    setPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    setPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    setPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    getPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    getPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    getPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    setPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    setPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    setPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    getPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    getPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    getPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    listPtz(request: bosdyn_api_spot_cam_ptz_pb.ListPtzRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.ListPtzResponse) => void): grpc.ClientUnaryCall;
    listPtz(request: bosdyn_api_spot_cam_ptz_pb.ListPtzRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.ListPtzResponse) => void): grpc.ClientUnaryCall;
    listPtz(request: bosdyn_api_spot_cam_ptz_pb.ListPtzRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.ListPtzResponse) => void): grpc.ClientUnaryCall;
    initializeLens(request: bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse) => void): grpc.ClientUnaryCall;
    initializeLens(request: bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse) => void): grpc.ClientUnaryCall;
    initializeLens(request: bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse) => void): grpc.ClientUnaryCall;
    setPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    setPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    setPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    getPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    getPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    getPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
}

export class PtzServiceClient extends grpc.Client implements IPtzServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    public setPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    public setPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    public getPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    public getPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    public getPtzPosition(request: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzPositionResponse) => void): grpc.ClientUnaryCall;
    public setPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    public setPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    public setPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    public getPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    public getPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    public getPtzVelocity(request: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzVelocityResponse) => void): grpc.ClientUnaryCall;
    public listPtz(request: bosdyn_api_spot_cam_ptz_pb.ListPtzRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.ListPtzResponse) => void): grpc.ClientUnaryCall;
    public listPtz(request: bosdyn_api_spot_cam_ptz_pb.ListPtzRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.ListPtzResponse) => void): grpc.ClientUnaryCall;
    public listPtz(request: bosdyn_api_spot_cam_ptz_pb.ListPtzRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.ListPtzResponse) => void): grpc.ClientUnaryCall;
    public initializeLens(request: bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse) => void): grpc.ClientUnaryCall;
    public initializeLens(request: bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse) => void): grpc.ClientUnaryCall;
    public initializeLens(request: bosdyn_api_spot_cam_ptz_pb.InitializeLensRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.InitializeLensResponse) => void): grpc.ClientUnaryCall;
    public setPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    public setPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    public setPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.SetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    public getPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    public getPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
    public getPtzFocusState(request: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_ptz_pb.GetPtzFocusStateResponse) => void): grpc.ClientUnaryCall;
}

interface IAudioServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    playSound: IAudioServiceService_IPlaySound;
    loadSound: IAudioServiceService_ILoadSound;
    deleteSound: IAudioServiceService_IDeleteSound;
    listSounds: IAudioServiceService_IListSounds;
    setVolume: IAudioServiceService_ISetVolume;
    getVolume: IAudioServiceService_IGetVolume;
    setAudioCaptureChannel: IAudioServiceService_ISetAudioCaptureChannel;
    getAudioCaptureChannel: IAudioServiceService_IGetAudioCaptureChannel;
    setAudioCaptureGain: IAudioServiceService_ISetAudioCaptureGain;
    getAudioCaptureGain: IAudioServiceService_IGetAudioCaptureGain;
}

interface IAudioServiceService_IPlaySound extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.PlaySoundRequest, bosdyn_api_spot_cam_audio_pb.PlaySoundResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/PlaySound";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.PlaySoundRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.PlaySoundRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.PlaySoundResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.PlaySoundResponse>;
}
interface IAudioServiceService_ILoadSound extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest, bosdyn_api_spot_cam_audio_pb.LoadSoundResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/LoadSound";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.LoadSoundResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.LoadSoundResponse>;
}
interface IAudioServiceService_IDeleteSound extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest, bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/DeleteSound";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse>;
}
interface IAudioServiceService_IListSounds extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.ListSoundsRequest, bosdyn_api_spot_cam_audio_pb.ListSoundsResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/ListSounds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.ListSoundsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.ListSoundsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.ListSoundsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.ListSoundsResponse>;
}
interface IAudioServiceService_ISetVolume extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.SetVolumeRequest, bosdyn_api_spot_cam_audio_pb.SetVolumeResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/SetVolume";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.SetVolumeRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.SetVolumeRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.SetVolumeResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.SetVolumeResponse>;
}
interface IAudioServiceService_IGetVolume extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.GetVolumeRequest, bosdyn_api_spot_cam_audio_pb.GetVolumeResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/GetVolume";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.GetVolumeRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.GetVolumeRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.GetVolumeResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.GetVolumeResponse>;
}
interface IAudioServiceService_ISetAudioCaptureChannel extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest, bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/SetAudioCaptureChannel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse>;
}
interface IAudioServiceService_IGetAudioCaptureChannel extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest, bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/GetAudioCaptureChannel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse>;
}
interface IAudioServiceService_ISetAudioCaptureGain extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest, bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/SetAudioCaptureGain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse>;
}
interface IAudioServiceService_IGetAudioCaptureGain extends grpc.MethodDefinition<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest, bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse> {
    path: "/bosdyn.api.spot_cam.AudioService/GetAudioCaptureGain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse>;
}

export const AudioServiceService: IAudioServiceService;

export interface IAudioServiceServer extends grpc.UntypedServiceImplementation {
    playSound: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.PlaySoundRequest, bosdyn_api_spot_cam_audio_pb.PlaySoundResponse>;
    loadSound: grpc.handleClientStreamingCall<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest, bosdyn_api_spot_cam_audio_pb.LoadSoundResponse>;
    deleteSound: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest, bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse>;
    listSounds: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.ListSoundsRequest, bosdyn_api_spot_cam_audio_pb.ListSoundsResponse>;
    setVolume: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.SetVolumeRequest, bosdyn_api_spot_cam_audio_pb.SetVolumeResponse>;
    getVolume: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.GetVolumeRequest, bosdyn_api_spot_cam_audio_pb.GetVolumeResponse>;
    setAudioCaptureChannel: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest, bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse>;
    getAudioCaptureChannel: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest, bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse>;
    setAudioCaptureGain: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest, bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse>;
    getAudioCaptureGain: grpc.handleUnaryCall<bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest, bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse>;
}

export interface IAudioServiceClient {
    playSound(request: bosdyn_api_spot_cam_audio_pb.PlaySoundRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.PlaySoundResponse) => void): grpc.ClientUnaryCall;
    playSound(request: bosdyn_api_spot_cam_audio_pb.PlaySoundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.PlaySoundResponse) => void): grpc.ClientUnaryCall;
    playSound(request: bosdyn_api_spot_cam_audio_pb.PlaySoundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.PlaySoundResponse) => void): grpc.ClientUnaryCall;
    loadSound(callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse) => void): grpc.ClientWritableStream<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    loadSound(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse) => void): grpc.ClientWritableStream<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    loadSound(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse) => void): grpc.ClientWritableStream<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    loadSound(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse) => void): grpc.ClientWritableStream<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    deleteSound(request: bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse) => void): grpc.ClientUnaryCall;
    deleteSound(request: bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse) => void): grpc.ClientUnaryCall;
    deleteSound(request: bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse) => void): grpc.ClientUnaryCall;
    listSounds(request: bosdyn_api_spot_cam_audio_pb.ListSoundsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.ListSoundsResponse) => void): grpc.ClientUnaryCall;
    listSounds(request: bosdyn_api_spot_cam_audio_pb.ListSoundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.ListSoundsResponse) => void): grpc.ClientUnaryCall;
    listSounds(request: bosdyn_api_spot_cam_audio_pb.ListSoundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.ListSoundsResponse) => void): grpc.ClientUnaryCall;
    setVolume(request: bosdyn_api_spot_cam_audio_pb.SetVolumeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetVolumeResponse) => void): grpc.ClientUnaryCall;
    setVolume(request: bosdyn_api_spot_cam_audio_pb.SetVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetVolumeResponse) => void): grpc.ClientUnaryCall;
    setVolume(request: bosdyn_api_spot_cam_audio_pb.SetVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetVolumeResponse) => void): grpc.ClientUnaryCall;
    getVolume(request: bosdyn_api_spot_cam_audio_pb.GetVolumeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetVolumeResponse) => void): grpc.ClientUnaryCall;
    getVolume(request: bosdyn_api_spot_cam_audio_pb.GetVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetVolumeResponse) => void): grpc.ClientUnaryCall;
    getVolume(request: bosdyn_api_spot_cam_audio_pb.GetVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetVolumeResponse) => void): grpc.ClientUnaryCall;
    setAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    setAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    setAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    getAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    getAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    getAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    setAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    setAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    setAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    getAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    getAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    getAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
}

export class AudioServiceClient extends grpc.Client implements IAudioServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public playSound(request: bosdyn_api_spot_cam_audio_pb.PlaySoundRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.PlaySoundResponse) => void): grpc.ClientUnaryCall;
    public playSound(request: bosdyn_api_spot_cam_audio_pb.PlaySoundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.PlaySoundResponse) => void): grpc.ClientUnaryCall;
    public playSound(request: bosdyn_api_spot_cam_audio_pb.PlaySoundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.PlaySoundResponse) => void): grpc.ClientUnaryCall;
    public loadSound(callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse) => void): grpc.ClientWritableStream<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    public loadSound(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse) => void): grpc.ClientWritableStream<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    public loadSound(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse) => void): grpc.ClientWritableStream<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    public loadSound(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.LoadSoundResponse) => void): grpc.ClientWritableStream<bosdyn_api_spot_cam_audio_pb.LoadSoundRequest>;
    public deleteSound(request: bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse) => void): grpc.ClientUnaryCall;
    public deleteSound(request: bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse) => void): grpc.ClientUnaryCall;
    public deleteSound(request: bosdyn_api_spot_cam_audio_pb.DeleteSoundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.DeleteSoundResponse) => void): grpc.ClientUnaryCall;
    public listSounds(request: bosdyn_api_spot_cam_audio_pb.ListSoundsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.ListSoundsResponse) => void): grpc.ClientUnaryCall;
    public listSounds(request: bosdyn_api_spot_cam_audio_pb.ListSoundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.ListSoundsResponse) => void): grpc.ClientUnaryCall;
    public listSounds(request: bosdyn_api_spot_cam_audio_pb.ListSoundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.ListSoundsResponse) => void): grpc.ClientUnaryCall;
    public setVolume(request: bosdyn_api_spot_cam_audio_pb.SetVolumeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetVolumeResponse) => void): grpc.ClientUnaryCall;
    public setVolume(request: bosdyn_api_spot_cam_audio_pb.SetVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetVolumeResponse) => void): grpc.ClientUnaryCall;
    public setVolume(request: bosdyn_api_spot_cam_audio_pb.SetVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetVolumeResponse) => void): grpc.ClientUnaryCall;
    public getVolume(request: bosdyn_api_spot_cam_audio_pb.GetVolumeRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetVolumeResponse) => void): grpc.ClientUnaryCall;
    public getVolume(request: bosdyn_api_spot_cam_audio_pb.GetVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetVolumeResponse) => void): grpc.ClientUnaryCall;
    public getVolume(request: bosdyn_api_spot_cam_audio_pb.GetVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetVolumeResponse) => void): grpc.ClientUnaryCall;
    public setAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    public setAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    public setAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    public getAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    public getAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    public getAudioCaptureChannel(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureChannelResponse) => void): grpc.ClientUnaryCall;
    public setAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    public setAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    public setAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.SetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    public getAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    public getAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
    public getAudioCaptureGain(request: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_audio_pb.GetAudioCaptureGainResponse) => void): grpc.ClientUnaryCall;
}

interface IHealthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTemperature: IHealthServiceService_IGetTemperature;
    getBITStatus: IHealthServiceService_IGetBITStatus;
    clearBITEvents: IHealthServiceService_IClearBITEvents;
    getSystemLog: IHealthServiceService_IGetSystemLog;
}

interface IHealthServiceService_IGetTemperature extends grpc.MethodDefinition<bosdyn_api_spot_cam_health_pb.GetTemperatureRequest, bosdyn_api_spot_cam_health_pb.GetTemperatureResponse> {
    path: "/bosdyn.api.spot_cam.HealthService/GetTemperature";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_health_pb.GetTemperatureRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_health_pb.GetTemperatureRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_health_pb.GetTemperatureResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_health_pb.GetTemperatureResponse>;
}
interface IHealthServiceService_IGetBITStatus extends grpc.MethodDefinition<bosdyn_api_spot_cam_health_pb.GetBITStatusRequest, bosdyn_api_spot_cam_health_pb.GetBITStatusResponse> {
    path: "/bosdyn.api.spot_cam.HealthService/GetBITStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_health_pb.GetBITStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_health_pb.GetBITStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_health_pb.GetBITStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_health_pb.GetBITStatusResponse>;
}
interface IHealthServiceService_IClearBITEvents extends grpc.MethodDefinition<bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest, bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse> {
    path: "/bosdyn.api.spot_cam.HealthService/ClearBITEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse>;
}
interface IHealthServiceService_IGetSystemLog extends grpc.MethodDefinition<bosdyn_api_spot_cam_health_pb.GetSystemLogRequest, bosdyn_api_spot_cam_health_pb.GetSystemLogResponse> {
    path: "/bosdyn.api.spot_cam.HealthService/GetSystemLog";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_health_pb.GetSystemLogRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_health_pb.GetSystemLogRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_health_pb.GetSystemLogResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_health_pb.GetSystemLogResponse>;
}

export const HealthServiceService: IHealthServiceService;

export interface IHealthServiceServer extends grpc.UntypedServiceImplementation {
    getTemperature: grpc.handleUnaryCall<bosdyn_api_spot_cam_health_pb.GetTemperatureRequest, bosdyn_api_spot_cam_health_pb.GetTemperatureResponse>;
    getBITStatus: grpc.handleUnaryCall<bosdyn_api_spot_cam_health_pb.GetBITStatusRequest, bosdyn_api_spot_cam_health_pb.GetBITStatusResponse>;
    clearBITEvents: grpc.handleUnaryCall<bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest, bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse>;
    getSystemLog: grpc.handleServerStreamingCall<bosdyn_api_spot_cam_health_pb.GetSystemLogRequest, bosdyn_api_spot_cam_health_pb.GetSystemLogResponse>;
}

export interface IHealthServiceClient {
    getTemperature(request: bosdyn_api_spot_cam_health_pb.GetTemperatureRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetTemperatureResponse) => void): grpc.ClientUnaryCall;
    getTemperature(request: bosdyn_api_spot_cam_health_pb.GetTemperatureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetTemperatureResponse) => void): grpc.ClientUnaryCall;
    getTemperature(request: bosdyn_api_spot_cam_health_pb.GetTemperatureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetTemperatureResponse) => void): grpc.ClientUnaryCall;
    getBITStatus(request: bosdyn_api_spot_cam_health_pb.GetBITStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetBITStatusResponse) => void): grpc.ClientUnaryCall;
    getBITStatus(request: bosdyn_api_spot_cam_health_pb.GetBITStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetBITStatusResponse) => void): grpc.ClientUnaryCall;
    getBITStatus(request: bosdyn_api_spot_cam_health_pb.GetBITStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetBITStatusResponse) => void): grpc.ClientUnaryCall;
    clearBITEvents(request: bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse) => void): grpc.ClientUnaryCall;
    clearBITEvents(request: bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse) => void): grpc.ClientUnaryCall;
    clearBITEvents(request: bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse) => void): grpc.ClientUnaryCall;
    getSystemLog(request: bosdyn_api_spot_cam_health_pb.GetSystemLogRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_health_pb.GetSystemLogResponse>;
    getSystemLog(request: bosdyn_api_spot_cam_health_pb.GetSystemLogRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_health_pb.GetSystemLogResponse>;
}

export class HealthServiceClient extends grpc.Client implements IHealthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTemperature(request: bosdyn_api_spot_cam_health_pb.GetTemperatureRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetTemperatureResponse) => void): grpc.ClientUnaryCall;
    public getTemperature(request: bosdyn_api_spot_cam_health_pb.GetTemperatureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetTemperatureResponse) => void): grpc.ClientUnaryCall;
    public getTemperature(request: bosdyn_api_spot_cam_health_pb.GetTemperatureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetTemperatureResponse) => void): grpc.ClientUnaryCall;
    public getBITStatus(request: bosdyn_api_spot_cam_health_pb.GetBITStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetBITStatusResponse) => void): grpc.ClientUnaryCall;
    public getBITStatus(request: bosdyn_api_spot_cam_health_pb.GetBITStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetBITStatusResponse) => void): grpc.ClientUnaryCall;
    public getBITStatus(request: bosdyn_api_spot_cam_health_pb.GetBITStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.GetBITStatusResponse) => void): grpc.ClientUnaryCall;
    public clearBITEvents(request: bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse) => void): grpc.ClientUnaryCall;
    public clearBITEvents(request: bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse) => void): grpc.ClientUnaryCall;
    public clearBITEvents(request: bosdyn_api_spot_cam_health_pb.ClearBITEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_health_pb.ClearBITEventsResponse) => void): grpc.ClientUnaryCall;
    public getSystemLog(request: bosdyn_api_spot_cam_health_pb.GetSystemLogRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_health_pb.GetSystemLogResponse>;
    public getSystemLog(request: bosdyn_api_spot_cam_health_pb.GetSystemLogRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<bosdyn_api_spot_cam_health_pb.GetSystemLogResponse>;
}

interface INetworkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setICEConfiguration: INetworkServiceService_ISetICEConfiguration;
    getICEConfiguration: INetworkServiceService_IGetICEConfiguration;
}

interface INetworkServiceService_ISetICEConfiguration extends grpc.MethodDefinition<bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest, bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse> {
    path: "/bosdyn.api.spot_cam.NetworkService/SetICEConfiguration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse>;
}
interface INetworkServiceService_IGetICEConfiguration extends grpc.MethodDefinition<bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest, bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse> {
    path: "/bosdyn.api.spot_cam.NetworkService/GetICEConfiguration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse>;
}

export const NetworkServiceService: INetworkServiceService;

export interface INetworkServiceServer extends grpc.UntypedServiceImplementation {
    setICEConfiguration: grpc.handleUnaryCall<bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest, bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse>;
    getICEConfiguration: grpc.handleUnaryCall<bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest, bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse>;
}

export interface INetworkServiceClient {
    setICEConfiguration(request: bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    setICEConfiguration(request: bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    setICEConfiguration(request: bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    getICEConfiguration(request: bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    getICEConfiguration(request: bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    getICEConfiguration(request: bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
}

export class NetworkServiceClient extends grpc.Client implements INetworkServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setICEConfiguration(request: bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    public setICEConfiguration(request: bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    public setICEConfiguration(request: bosdyn_api_spot_cam_network_pb.SetICEConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.SetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getICEConfiguration(request: bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getICEConfiguration(request: bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getICEConfiguration(request: bosdyn_api_spot_cam_network_pb.GetICEConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_network_pb.GetICEConfigurationResponse) => void): grpc.ClientUnaryCall;
}

interface IVersionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSoftwareVersion: IVersionServiceService_IGetSoftwareVersion;
}

interface IVersionServiceService_IGetSoftwareVersion extends grpc.MethodDefinition<bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest, bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse> {
    path: "/bosdyn.api.spot_cam.VersionService/GetSoftwareVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse>;
}

export const VersionServiceService: IVersionServiceService;

export interface IVersionServiceServer extends grpc.UntypedServiceImplementation {
    getSoftwareVersion: grpc.handleUnaryCall<bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest, bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse>;
}

export interface IVersionServiceClient {
    getSoftwareVersion(request: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse) => void): grpc.ClientUnaryCall;
    getSoftwareVersion(request: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse) => void): grpc.ClientUnaryCall;
    getSoftwareVersion(request: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse) => void): grpc.ClientUnaryCall;
}

export class VersionServiceClient extends grpc.Client implements IVersionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getSoftwareVersion(request: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse) => void): grpc.ClientUnaryCall;
    public getSoftwareVersion(request: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse) => void): grpc.ClientUnaryCall;
    public getSoftwareVersion(request: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_cam_version_pb.GetSoftwareVersionResponse) => void): grpc.ClientUnaryCall;
}
