// package: bosdyn.api
// file: bosdyn/api/license_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_license_service_pb from "../../bosdyn/api/license_service_pb";
import * as bosdyn_api_license_pb from "../../bosdyn/api/license_pb";

interface ILicenseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getLicenseInfo: ILicenseServiceService_IGetLicenseInfo;
    getFeatureEnabled: ILicenseServiceService_IGetFeatureEnabled;
}

interface ILicenseServiceService_IGetLicenseInfo extends grpc.MethodDefinition<bosdyn_api_license_pb.GetLicenseInfoRequest, bosdyn_api_license_pb.GetLicenseInfoResponse> {
    path: "/bosdyn.api.LicenseService/GetLicenseInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_license_pb.GetLicenseInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_license_pb.GetLicenseInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_license_pb.GetLicenseInfoResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_license_pb.GetLicenseInfoResponse>;
}
interface ILicenseServiceService_IGetFeatureEnabled extends grpc.MethodDefinition<bosdyn_api_license_pb.GetFeatureEnabledRequest, bosdyn_api_license_pb.GetFeatureEnabledResponse> {
    path: "/bosdyn.api.LicenseService/GetFeatureEnabled";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_license_pb.GetFeatureEnabledRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_license_pb.GetFeatureEnabledRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_license_pb.GetFeatureEnabledResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_license_pb.GetFeatureEnabledResponse>;
}

export const LicenseServiceService: ILicenseServiceService;

export interface ILicenseServiceServer extends grpc.UntypedServiceImplementation {
    getLicenseInfo: grpc.handleUnaryCall<bosdyn_api_license_pb.GetLicenseInfoRequest, bosdyn_api_license_pb.GetLicenseInfoResponse>;
    getFeatureEnabled: grpc.handleUnaryCall<bosdyn_api_license_pb.GetFeatureEnabledRequest, bosdyn_api_license_pb.GetFeatureEnabledResponse>;
}

export interface ILicenseServiceClient {
    getLicenseInfo(request: bosdyn_api_license_pb.GetLicenseInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetLicenseInfoResponse) => void): grpc.ClientUnaryCall;
    getLicenseInfo(request: bosdyn_api_license_pb.GetLicenseInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetLicenseInfoResponse) => void): grpc.ClientUnaryCall;
    getLicenseInfo(request: bosdyn_api_license_pb.GetLicenseInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetLicenseInfoResponse) => void): grpc.ClientUnaryCall;
    getFeatureEnabled(request: bosdyn_api_license_pb.GetFeatureEnabledRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetFeatureEnabledResponse) => void): grpc.ClientUnaryCall;
    getFeatureEnabled(request: bosdyn_api_license_pb.GetFeatureEnabledRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetFeatureEnabledResponse) => void): grpc.ClientUnaryCall;
    getFeatureEnabled(request: bosdyn_api_license_pb.GetFeatureEnabledRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetFeatureEnabledResponse) => void): grpc.ClientUnaryCall;
}

export class LicenseServiceClient extends grpc.Client implements ILicenseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getLicenseInfo(request: bosdyn_api_license_pb.GetLicenseInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetLicenseInfoResponse) => void): grpc.ClientUnaryCall;
    public getLicenseInfo(request: bosdyn_api_license_pb.GetLicenseInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetLicenseInfoResponse) => void): grpc.ClientUnaryCall;
    public getLicenseInfo(request: bosdyn_api_license_pb.GetLicenseInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetLicenseInfoResponse) => void): grpc.ClientUnaryCall;
    public getFeatureEnabled(request: bosdyn_api_license_pb.GetFeatureEnabledRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetFeatureEnabledResponse) => void): grpc.ClientUnaryCall;
    public getFeatureEnabled(request: bosdyn_api_license_pb.GetFeatureEnabledRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetFeatureEnabledResponse) => void): grpc.ClientUnaryCall;
    public getFeatureEnabled(request: bosdyn_api_license_pb.GetFeatureEnabledRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_license_pb.GetFeatureEnabledResponse) => void): grpc.ClientUnaryCall;
}
