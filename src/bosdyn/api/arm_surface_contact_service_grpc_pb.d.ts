// package: bosdyn.api
// file: bosdyn/api/arm_surface_contact_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_arm_surface_contact_service_pb from "../../bosdyn/api/arm_surface_contact_service_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../bosdyn/api/lease_pb";
import * as bosdyn_api_arm_surface_contact_pb from "../../bosdyn/api/arm_surface_contact_pb";

interface IArmSurfaceContactServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    armSurfaceContact: IArmSurfaceContactServiceService_IArmSurfaceContact;
}

interface IArmSurfaceContactServiceService_IArmSurfaceContact extends grpc.MethodDefinition<bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand, bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse> {
    path: "/bosdyn.api.ArmSurfaceContactService/ArmSurfaceContact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand>;
    requestDeserialize: grpc.deserialize<bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand>;
    responseSerialize: grpc.serialize<bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse>;
}

export const ArmSurfaceContactServiceService: IArmSurfaceContactServiceService;

export interface IArmSurfaceContactServiceServer extends grpc.UntypedServiceImplementation {
    armSurfaceContact: grpc.handleUnaryCall<bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand, bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse>;
}

export interface IArmSurfaceContactServiceClient {
    armSurfaceContact(request: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand, callback: (error: grpc.ServiceError | null, response: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse) => void): grpc.ClientUnaryCall;
    armSurfaceContact(request: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse) => void): grpc.ClientUnaryCall;
    armSurfaceContact(request: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse) => void): grpc.ClientUnaryCall;
}

export class ArmSurfaceContactServiceClient extends grpc.Client implements IArmSurfaceContactServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public armSurfaceContact(request: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand, callback: (error: grpc.ServiceError | null, response: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse) => void): grpc.ClientUnaryCall;
    public armSurfaceContact(request: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse) => void): grpc.ClientUnaryCall;
    public armSurfaceContact(request: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactCommand, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_arm_surface_contact_service_pb.ArmSurfaceContactResponse) => void): grpc.ClientUnaryCall;
}
