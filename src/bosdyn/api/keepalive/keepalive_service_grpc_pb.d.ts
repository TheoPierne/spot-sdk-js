// package: bosdyn.api.keepalive
// file: bosdyn/api/keepalive/keepalive_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_keepalive_keepalive_service_pb from "../../../bosdyn/api/keepalive/keepalive_service_pb";
import * as bosdyn_api_keepalive_keepalive_pb from "../../../bosdyn/api/keepalive/keepalive_pb";

interface IKeepaliveServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    modifyPolicy: IKeepaliveServiceService_IModifyPolicy;
    checkIn: IKeepaliveServiceService_ICheckIn;
    getStatus: IKeepaliveServiceService_IGetStatus;
}

interface IKeepaliveServiceService_IModifyPolicy extends grpc.MethodDefinition<bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest, bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse> {
    path: "/bosdyn.api.keepalive.KeepaliveService/ModifyPolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse>;
}
interface IKeepaliveServiceService_ICheckIn extends grpc.MethodDefinition<bosdyn_api_keepalive_keepalive_pb.CheckInRequest, bosdyn_api_keepalive_keepalive_pb.CheckInResponse> {
    path: "/bosdyn.api.keepalive.KeepaliveService/CheckIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_keepalive_keepalive_pb.CheckInRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_keepalive_keepalive_pb.CheckInRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_keepalive_keepalive_pb.CheckInResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_keepalive_keepalive_pb.CheckInResponse>;
}
interface IKeepaliveServiceService_IGetStatus extends grpc.MethodDefinition<bosdyn_api_keepalive_keepalive_pb.GetStatusRequest, bosdyn_api_keepalive_keepalive_pb.GetStatusResponse> {
    path: "/bosdyn.api.keepalive.KeepaliveService/GetStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_keepalive_keepalive_pb.GetStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_keepalive_keepalive_pb.GetStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_keepalive_keepalive_pb.GetStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_keepalive_keepalive_pb.GetStatusResponse>;
}

export const KeepaliveServiceService: IKeepaliveServiceService;

export interface IKeepaliveServiceServer extends grpc.UntypedServiceImplementation {
    modifyPolicy: grpc.handleUnaryCall<bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest, bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse>;
    checkIn: grpc.handleUnaryCall<bosdyn_api_keepalive_keepalive_pb.CheckInRequest, bosdyn_api_keepalive_keepalive_pb.CheckInResponse>;
    getStatus: grpc.handleUnaryCall<bosdyn_api_keepalive_keepalive_pb.GetStatusRequest, bosdyn_api_keepalive_keepalive_pb.GetStatusResponse>;
}

export interface IKeepaliveServiceClient {
    modifyPolicy(request: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse) => void): grpc.ClientUnaryCall;
    modifyPolicy(request: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse) => void): grpc.ClientUnaryCall;
    modifyPolicy(request: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse) => void): grpc.ClientUnaryCall;
    checkIn(request: bosdyn_api_keepalive_keepalive_pb.CheckInRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.CheckInResponse) => void): grpc.ClientUnaryCall;
    checkIn(request: bosdyn_api_keepalive_keepalive_pb.CheckInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.CheckInResponse) => void): grpc.ClientUnaryCall;
    checkIn(request: bosdyn_api_keepalive_keepalive_pb.CheckInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.CheckInResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_keepalive_keepalive_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_keepalive_keepalive_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: bosdyn_api_keepalive_keepalive_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
}

export class KeepaliveServiceClient extends grpc.Client implements IKeepaliveServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public modifyPolicy(request: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse) => void): grpc.ClientUnaryCall;
    public modifyPolicy(request: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse) => void): grpc.ClientUnaryCall;
    public modifyPolicy(request: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.ModifyPolicyResponse) => void): grpc.ClientUnaryCall;
    public checkIn(request: bosdyn_api_keepalive_keepalive_pb.CheckInRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.CheckInResponse) => void): grpc.ClientUnaryCall;
    public checkIn(request: bosdyn_api_keepalive_keepalive_pb.CheckInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.CheckInResponse) => void): grpc.ClientUnaryCall;
    public checkIn(request: bosdyn_api_keepalive_keepalive_pb.CheckInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.CheckInResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_keepalive_keepalive_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_keepalive_keepalive_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: bosdyn_api_keepalive_keepalive_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_keepalive_keepalive_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
}
