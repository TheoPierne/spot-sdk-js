// package: bosdyn.api
// file: bosdyn/api/ir_enable_disable_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_ir_enable_disable_service_pb from "../../bosdyn/api/ir_enable_disable_service_pb";
import * as bosdyn_api_ir_enable_disable_pb from "../../bosdyn/api/ir_enable_disable_pb";

interface IIREnableDisableServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    iREnableDisable: IIREnableDisableServiceService_IIREnableDisable;
}

interface IIREnableDisableServiceService_IIREnableDisable extends grpc.MethodDefinition<bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest, bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse> {
    path: "/bosdyn.api.IREnableDisableService/IREnableDisable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse>;
}

export const IREnableDisableServiceService: IIREnableDisableServiceService;

export interface IIREnableDisableServiceServer extends grpc.UntypedServiceImplementation {
    iREnableDisable: grpc.handleUnaryCall<bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest, bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse>;
}

export interface IIREnableDisableServiceClient {
    iREnableDisable(request: bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse) => void): grpc.ClientUnaryCall;
    iREnableDisable(request: bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse) => void): grpc.ClientUnaryCall;
    iREnableDisable(request: bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse) => void): grpc.ClientUnaryCall;
}

export class IREnableDisableServiceClient extends grpc.Client implements IIREnableDisableServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public iREnableDisable(request: bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse) => void): grpc.ClientUnaryCall;
    public iREnableDisable(request: bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse) => void): grpc.ClientUnaryCall;
    public iREnableDisable(request: bosdyn_api_ir_enable_disable_pb.IREnableDisableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_ir_enable_disable_pb.IREnableDisableResponse) => void): grpc.ClientUnaryCall;
}
