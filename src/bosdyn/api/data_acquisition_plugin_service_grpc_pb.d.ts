// package: bosdyn.api
// file: bosdyn/api/data_acquisition_plugin_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_data_acquisition_plugin_service_pb from "../../bosdyn/api/data_acquisition_plugin_service_pb";
import * as bosdyn_api_data_acquisition_pb from "../../bosdyn/api/data_acquisition_pb";

interface IDataAcquisitionPluginServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    acquirePluginData: IDataAcquisitionPluginServiceService_IAcquirePluginData;
    getStatus: IDataAcquisitionPluginServiceService_IGetStatus;
    getServiceInfo: IDataAcquisitionPluginServiceService_IGetServiceInfo;
    cancelAcquisition: IDataAcquisitionPluginServiceService_ICancelAcquisition;
    getLiveData: IDataAcquisitionPluginServiceService_IGetLiveData;
}

interface IDataAcquisitionPluginServiceService_IAcquirePluginData extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest, bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse> {
    path: "/bosdyn.api.DataAcquisitionPluginService/AcquirePluginData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse>;
}
interface IDataAcquisitionPluginServiceService_IGetStatus extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.GetStatusRequest, bosdyn_api_data_acquisition_pb.GetStatusResponse> {
    path: "/bosdyn.api.DataAcquisitionPluginService/GetStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.GetStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.GetStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.GetStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.GetStatusResponse>;
}
interface IDataAcquisitionPluginServiceService_IGetServiceInfo extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, bosdyn_api_data_acquisition_pb.GetServiceInfoResponse> {
    path: "/bosdyn.api.DataAcquisitionPluginService/GetServiceInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.GetServiceInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.GetServiceInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.GetServiceInfoResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.GetServiceInfoResponse>;
}
interface IDataAcquisitionPluginServiceService_ICancelAcquisition extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse> {
    path: "/bosdyn.api.DataAcquisitionPluginService/CancelAcquisition";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse>;
}
interface IDataAcquisitionPluginServiceService_IGetLiveData extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.LiveDataRequest, bosdyn_api_data_acquisition_pb.LiveDataResponse> {
    path: "/bosdyn.api.DataAcquisitionPluginService/GetLiveData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.LiveDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.LiveDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.LiveDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.LiveDataResponse>;
}

export const DataAcquisitionPluginServiceService: IDataAcquisitionPluginServiceService;

export interface IDataAcquisitionPluginServiceServer extends grpc.UntypedServiceImplementation {
    acquirePluginData: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest, bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse>;
    getStatus: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.GetStatusRequest, bosdyn_api_data_acquisition_pb.GetStatusResponse>;
    getServiceInfo: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, bosdyn_api_data_acquisition_pb.GetServiceInfoResponse>;
    cancelAcquisition: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse>;
    getLiveData: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.LiveDataRequest, bosdyn_api_data_acquisition_pb.LiveDataResponse>;
}

export interface IDataAcquisitionPluginServiceClient {
    acquirePluginData(request: bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse) => void): grpc.ClientUnaryCall;
    acquirePluginData(request: bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse) => void): grpc.ClientUnaryCall;
    acquirePluginData(request: bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_data_acquisition_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_data_acquisition_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_data_acquisition_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getServiceInfo(request: bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetServiceInfoResponse) => void): grpc.ClientUnaryCall;
    getServiceInfo(request: bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetServiceInfoResponse) => void): grpc.ClientUnaryCall;
    getServiceInfo(request: bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetServiceInfoResponse) => void): grpc.ClientUnaryCall;
    cancelAcquisition(request: bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse) => void): grpc.ClientUnaryCall;
    cancelAcquisition(request: bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse) => void): grpc.ClientUnaryCall;
    cancelAcquisition(request: bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse) => void): grpc.ClientUnaryCall;
    getLiveData(request: bosdyn_api_data_acquisition_pb.LiveDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.LiveDataResponse) => void): grpc.ClientUnaryCall;
    getLiveData(request: bosdyn_api_data_acquisition_pb.LiveDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.LiveDataResponse) => void): grpc.ClientUnaryCall;
    getLiveData(request: bosdyn_api_data_acquisition_pb.LiveDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.LiveDataResponse) => void): grpc.ClientUnaryCall;
}

export class DataAcquisitionPluginServiceClient extends grpc.Client implements IDataAcquisitionPluginServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public acquirePluginData(request: bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse) => void): grpc.ClientUnaryCall;
    public acquirePluginData(request: bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse) => void): grpc.ClientUnaryCall;
    public acquirePluginData(request: bosdyn_api_data_acquisition_pb.AcquirePluginDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquirePluginDataResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_data_acquisition_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_data_acquisition_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_data_acquisition_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getServiceInfo(request: bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetServiceInfoResponse) => void): grpc.ClientUnaryCall;
    public getServiceInfo(request: bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetServiceInfoResponse) => void): grpc.ClientUnaryCall;
    public getServiceInfo(request: bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.GetServiceInfoResponse) => void): grpc.ClientUnaryCall;
    public cancelAcquisition(request: bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse) => void): grpc.ClientUnaryCall;
    public cancelAcquisition(request: bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse) => void): grpc.ClientUnaryCall;
    public cancelAcquisition(request: bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse) => void): grpc.ClientUnaryCall;
    public getLiveData(request: bosdyn_api_data_acquisition_pb.LiveDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.LiveDataResponse) => void): grpc.ClientUnaryCall;
    public getLiveData(request: bosdyn_api_data_acquisition_pb.LiveDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.LiveDataResponse) => void): grpc.ClientUnaryCall;
    public getLiveData(request: bosdyn_api_data_acquisition_pb.LiveDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.LiveDataResponse) => void): grpc.ClientUnaryCall;
}
