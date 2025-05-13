// package: bosdyn.api
// file: bosdyn/api/payload_software_update_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_payload_software_update_service_pb from "../../bosdyn/api/payload_software_update_service_pb";
import * as bosdyn_api_payload_software_update_pb from "../../bosdyn/api/payload_software_update_pb";

interface IPayloadSoftwareUpdateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendCurrentVersionInfo: IPayloadSoftwareUpdateServiceService_ISendCurrentVersionInfo;
    getAvailableSoftwareUpdates: IPayloadSoftwareUpdateServiceService_IGetAvailableSoftwareUpdates;
    sendSoftwareUpdateStatus: IPayloadSoftwareUpdateServiceService_ISendSoftwareUpdateStatus;
}

interface IPayloadSoftwareUpdateServiceService_ISendCurrentVersionInfo extends grpc.MethodDefinition<bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest, bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse> {
    path: "/bosdyn.api.PayloadSoftwareUpdateService/SendCurrentVersionInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse>;
}
interface IPayloadSoftwareUpdateServiceService_IGetAvailableSoftwareUpdates extends grpc.MethodDefinition<bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest, bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse> {
    path: "/bosdyn.api.PayloadSoftwareUpdateService/GetAvailableSoftwareUpdates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse>;
}
interface IPayloadSoftwareUpdateServiceService_ISendSoftwareUpdateStatus extends grpc.MethodDefinition<bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest, bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse> {
    path: "/bosdyn.api.PayloadSoftwareUpdateService/SendSoftwareUpdateStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse>;
}

export const PayloadSoftwareUpdateServiceService: IPayloadSoftwareUpdateServiceService;

export interface IPayloadSoftwareUpdateServiceServer extends grpc.UntypedServiceImplementation {
    sendCurrentVersionInfo: grpc.handleUnaryCall<bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest, bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse>;
    getAvailableSoftwareUpdates: grpc.handleUnaryCall<bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest, bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse>;
    sendSoftwareUpdateStatus: grpc.handleUnaryCall<bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest, bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse>;
}

export interface IPayloadSoftwareUpdateServiceClient {
    sendCurrentVersionInfo(request: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse) => void): grpc.ClientUnaryCall;
    sendCurrentVersionInfo(request: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse) => void): grpc.ClientUnaryCall;
    sendCurrentVersionInfo(request: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse) => void): grpc.ClientUnaryCall;
    getAvailableSoftwareUpdates(request: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse) => void): grpc.ClientUnaryCall;
    getAvailableSoftwareUpdates(request: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse) => void): grpc.ClientUnaryCall;
    getAvailableSoftwareUpdates(request: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse) => void): grpc.ClientUnaryCall;
    sendSoftwareUpdateStatus(request: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse) => void): grpc.ClientUnaryCall;
    sendSoftwareUpdateStatus(request: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse) => void): grpc.ClientUnaryCall;
    sendSoftwareUpdateStatus(request: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse) => void): grpc.ClientUnaryCall;
}

export class PayloadSoftwareUpdateServiceClient extends grpc.Client implements IPayloadSoftwareUpdateServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendCurrentVersionInfo(request: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse) => void): grpc.ClientUnaryCall;
    public sendCurrentVersionInfo(request: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse) => void): grpc.ClientUnaryCall;
    public sendCurrentVersionInfo(request: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendCurrentVersionInfoResponse) => void): grpc.ClientUnaryCall;
    public getAvailableSoftwareUpdates(request: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse) => void): grpc.ClientUnaryCall;
    public getAvailableSoftwareUpdates(request: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse) => void): grpc.ClientUnaryCall;
    public getAvailableSoftwareUpdates(request: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.GetAvailableSoftwareUpdatesResponse) => void): grpc.ClientUnaryCall;
    public sendSoftwareUpdateStatus(request: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse) => void): grpc.ClientUnaryCall;
    public sendSoftwareUpdateStatus(request: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse) => void): grpc.ClientUnaryCall;
    public sendSoftwareUpdateStatus(request: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_pb.SendSoftwareUpdateStatusResponse) => void): grpc.ClientUnaryCall;
}
