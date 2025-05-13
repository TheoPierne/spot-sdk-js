// package: bosdyn.api
// file: bosdyn/api/data_acquisition_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_data_acquisition_service_pb from "../../bosdyn/api/data_acquisition_service_pb";
import * as bosdyn_api_data_acquisition_pb from "../../bosdyn/api/data_acquisition_pb";

interface IDataAcquisitionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    acquireData: IDataAcquisitionServiceService_IAcquireData;
    getStatus: IDataAcquisitionServiceService_IGetStatus;
    getServiceInfo: IDataAcquisitionServiceService_IGetServiceInfo;
    cancelAcquisition: IDataAcquisitionServiceService_ICancelAcquisition;
    getLiveData: IDataAcquisitionServiceService_IGetLiveData;
}

interface IDataAcquisitionServiceService_IAcquireData extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.AcquireDataRequest, bosdyn_api_data_acquisition_pb.AcquireDataResponse> {
    path: "/bosdyn.api.DataAcquisitionService/AcquireData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.AcquireDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.AcquireDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.AcquireDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.AcquireDataResponse>;
}
interface IDataAcquisitionServiceService_IGetStatus extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.GetStatusRequest, bosdyn_api_data_acquisition_pb.GetStatusResponse> {
    path: "/bosdyn.api.DataAcquisitionService/GetStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.GetStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.GetStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.GetStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.GetStatusResponse>;
}
interface IDataAcquisitionServiceService_IGetServiceInfo extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, bosdyn_api_data_acquisition_pb.GetServiceInfoResponse> {
    path: "/bosdyn.api.DataAcquisitionService/GetServiceInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.GetServiceInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.GetServiceInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.GetServiceInfoResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.GetServiceInfoResponse>;
}
interface IDataAcquisitionServiceService_ICancelAcquisition extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse> {
    path: "/bosdyn.api.DataAcquisitionService/CancelAcquisition";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse>;
}
interface IDataAcquisitionServiceService_IGetLiveData extends grpc.MethodDefinition<bosdyn_api_data_acquisition_pb.LiveDataRequest, bosdyn_api_data_acquisition_pb.LiveDataResponse> {
    path: "/bosdyn.api.DataAcquisitionService/GetLiveData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.LiveDataRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.LiveDataRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_data_acquisition_pb.LiveDataResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_data_acquisition_pb.LiveDataResponse>;
}

export const DataAcquisitionServiceService: IDataAcquisitionServiceService;

export interface IDataAcquisitionServiceServer extends grpc.UntypedServiceImplementation {
    acquireData: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.AcquireDataRequest, bosdyn_api_data_acquisition_pb.AcquireDataResponse>;
    getStatus: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.GetStatusRequest, bosdyn_api_data_acquisition_pb.GetStatusResponse>;
    getServiceInfo: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.GetServiceInfoRequest, bosdyn_api_data_acquisition_pb.GetServiceInfoResponse>;
    cancelAcquisition: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.CancelAcquisitionRequest, bosdyn_api_data_acquisition_pb.CancelAcquisitionResponse>;
    getLiveData: grpc.handleUnaryCall<bosdyn_api_data_acquisition_pb.LiveDataRequest, bosdyn_api_data_acquisition_pb.LiveDataResponse>;
}

export interface IDataAcquisitionServiceClient {
    acquireData(request: bosdyn_api_data_acquisition_pb.AcquireDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquireDataResponse) => void): grpc.ClientUnaryCall;
    acquireData(request: bosdyn_api_data_acquisition_pb.AcquireDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquireDataResponse) => void): grpc.ClientUnaryCall;
    acquireData(request: bosdyn_api_data_acquisition_pb.AcquireDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquireDataResponse) => void): grpc.ClientUnaryCall;
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

export class DataAcquisitionServiceClient extends grpc.Client implements IDataAcquisitionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public acquireData(request: bosdyn_api_data_acquisition_pb.AcquireDataRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquireDataResponse) => void): grpc.ClientUnaryCall;
    public acquireData(request: bosdyn_api_data_acquisition_pb.AcquireDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquireDataResponse) => void): grpc.ClientUnaryCall;
    public acquireData(request: bosdyn_api_data_acquisition_pb.AcquireDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_data_acquisition_pb.AcquireDataResponse) => void): grpc.ClientUnaryCall;
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
