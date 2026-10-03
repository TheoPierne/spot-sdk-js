// package: bosdyn.api.gps
// file: bosdyn/api/gps/registration_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_gps_registration_service_pb from "../../../bosdyn/api/gps/registration_service_pb";
import * as bosdyn_api_gps_registration_pb from "../../../bosdyn/api/gps/registration_pb";

interface IRegistrationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getLocation: IRegistrationServiceService_IGetLocation;
    resetRegistration: IRegistrationServiceService_IResetRegistration;
}

interface IRegistrationServiceService_IGetLocation extends grpc.MethodDefinition<bosdyn_api_gps_registration_pb.GetLocationRequest, bosdyn_api_gps_registration_pb.GetLocationResponse> {
    path: "/bosdyn.api.gps.RegistrationService/GetLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_gps_registration_pb.GetLocationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_gps_registration_pb.GetLocationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_gps_registration_pb.GetLocationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_gps_registration_pb.GetLocationResponse>;
}
interface IRegistrationServiceService_IResetRegistration extends grpc.MethodDefinition<bosdyn_api_gps_registration_pb.ResetRegistrationRequest, bosdyn_api_gps_registration_pb.ResetRegistrationResponse> {
    path: "/bosdyn.api.gps.RegistrationService/ResetRegistration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_gps_registration_pb.ResetRegistrationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_gps_registration_pb.ResetRegistrationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_gps_registration_pb.ResetRegistrationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_gps_registration_pb.ResetRegistrationResponse>;
}

export const RegistrationServiceService: IRegistrationServiceService;

export interface IRegistrationServiceServer extends grpc.UntypedServiceImplementation {
    getLocation: grpc.handleUnaryCall<bosdyn_api_gps_registration_pb.GetLocationRequest, bosdyn_api_gps_registration_pb.GetLocationResponse>;
    resetRegistration: grpc.handleUnaryCall<bosdyn_api_gps_registration_pb.ResetRegistrationRequest, bosdyn_api_gps_registration_pb.ResetRegistrationResponse>;
}

export interface IRegistrationServiceClient {
    getLocation(request: bosdyn_api_gps_registration_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    getLocation(request: bosdyn_api_gps_registration_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    getLocation(request: bosdyn_api_gps_registration_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    resetRegistration(request: bosdyn_api_gps_registration_pb.ResetRegistrationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.ResetRegistrationResponse) => void): grpc.ClientUnaryCall;
    resetRegistration(request: bosdyn_api_gps_registration_pb.ResetRegistrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.ResetRegistrationResponse) => void): grpc.ClientUnaryCall;
    resetRegistration(request: bosdyn_api_gps_registration_pb.ResetRegistrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.ResetRegistrationResponse) => void): grpc.ClientUnaryCall;
}

export class RegistrationServiceClient extends grpc.Client implements IRegistrationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getLocation(request: bosdyn_api_gps_registration_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public getLocation(request: bosdyn_api_gps_registration_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public getLocation(request: bosdyn_api_gps_registration_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.GetLocationResponse) => void): grpc.ClientUnaryCall;
    public resetRegistration(request: bosdyn_api_gps_registration_pb.ResetRegistrationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.ResetRegistrationResponse) => void): grpc.ClientUnaryCall;
    public resetRegistration(request: bosdyn_api_gps_registration_pb.ResetRegistrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.ResetRegistrationResponse) => void): grpc.ClientUnaryCall;
    public resetRegistration(request: bosdyn_api_gps_registration_pb.ResetRegistrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gps_registration_pb.ResetRegistrationResponse) => void): grpc.ClientUnaryCall;
}
