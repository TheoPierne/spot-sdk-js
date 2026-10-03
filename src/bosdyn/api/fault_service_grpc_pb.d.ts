// package: bosdyn.api
// file: bosdyn/api/fault_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_fault_service_pb from "../../bosdyn/api/fault_service_pb";
import * as bosdyn_api_service_fault_pb from "../../bosdyn/api/service_fault_pb";

interface IFaultServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    triggerServiceFault: IFaultServiceService_ITriggerServiceFault;
    clearServiceFault: IFaultServiceService_IClearServiceFault;
}

interface IFaultServiceService_ITriggerServiceFault extends grpc.MethodDefinition<bosdyn_api_service_fault_pb.TriggerServiceFaultRequest, bosdyn_api_service_fault_pb.TriggerServiceFaultResponse> {
    path: "/bosdyn.api.FaultService/TriggerServiceFault";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_service_fault_pb.TriggerServiceFaultRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_service_fault_pb.TriggerServiceFaultRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_service_fault_pb.TriggerServiceFaultResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_service_fault_pb.TriggerServiceFaultResponse>;
}
interface IFaultServiceService_IClearServiceFault extends grpc.MethodDefinition<bosdyn_api_service_fault_pb.ClearServiceFaultRequest, bosdyn_api_service_fault_pb.ClearServiceFaultResponse> {
    path: "/bosdyn.api.FaultService/ClearServiceFault";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_service_fault_pb.ClearServiceFaultRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_service_fault_pb.ClearServiceFaultRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_service_fault_pb.ClearServiceFaultResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_service_fault_pb.ClearServiceFaultResponse>;
}

export const FaultServiceService: IFaultServiceService;

export interface IFaultServiceServer extends grpc.UntypedServiceImplementation {
    triggerServiceFault: grpc.handleUnaryCall<bosdyn_api_service_fault_pb.TriggerServiceFaultRequest, bosdyn_api_service_fault_pb.TriggerServiceFaultResponse>;
    clearServiceFault: grpc.handleUnaryCall<bosdyn_api_service_fault_pb.ClearServiceFaultRequest, bosdyn_api_service_fault_pb.ClearServiceFaultResponse>;
}

export interface IFaultServiceClient {
    triggerServiceFault(request: bosdyn_api_service_fault_pb.TriggerServiceFaultRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.TriggerServiceFaultResponse) => void): grpc.ClientUnaryCall;
    triggerServiceFault(request: bosdyn_api_service_fault_pb.TriggerServiceFaultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.TriggerServiceFaultResponse) => void): grpc.ClientUnaryCall;
    triggerServiceFault(request: bosdyn_api_service_fault_pb.TriggerServiceFaultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.TriggerServiceFaultResponse) => void): grpc.ClientUnaryCall;
    clearServiceFault(request: bosdyn_api_service_fault_pb.ClearServiceFaultRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.ClearServiceFaultResponse) => void): grpc.ClientUnaryCall;
    clearServiceFault(request: bosdyn_api_service_fault_pb.ClearServiceFaultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.ClearServiceFaultResponse) => void): grpc.ClientUnaryCall;
    clearServiceFault(request: bosdyn_api_service_fault_pb.ClearServiceFaultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.ClearServiceFaultResponse) => void): grpc.ClientUnaryCall;
}

export class FaultServiceClient extends grpc.Client implements IFaultServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public triggerServiceFault(request: bosdyn_api_service_fault_pb.TriggerServiceFaultRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.TriggerServiceFaultResponse) => void): grpc.ClientUnaryCall;
    public triggerServiceFault(request: bosdyn_api_service_fault_pb.TriggerServiceFaultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.TriggerServiceFaultResponse) => void): grpc.ClientUnaryCall;
    public triggerServiceFault(request: bosdyn_api_service_fault_pb.TriggerServiceFaultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.TriggerServiceFaultResponse) => void): grpc.ClientUnaryCall;
    public clearServiceFault(request: bosdyn_api_service_fault_pb.ClearServiceFaultRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.ClearServiceFaultResponse) => void): grpc.ClientUnaryCall;
    public clearServiceFault(request: bosdyn_api_service_fault_pb.ClearServiceFaultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.ClearServiceFaultResponse) => void): grpc.ClientUnaryCall;
    public clearServiceFault(request: bosdyn_api_service_fault_pb.ClearServiceFaultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_service_fault_pb.ClearServiceFaultResponse) => void): grpc.ClientUnaryCall;
}
