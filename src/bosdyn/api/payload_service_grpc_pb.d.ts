// package: bosdyn.api
// file: bosdyn/api/payload_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_payload_service_pb from "../../bosdyn/api/payload_service_pb";
import * as bosdyn_api_payload_pb from "../../bosdyn/api/payload_pb";

interface IPayloadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listPayloads: IPayloadServiceService_IListPayloads;
}

interface IPayloadServiceService_IListPayloads extends grpc.MethodDefinition<bosdyn_api_payload_pb.ListPayloadsRequest, bosdyn_api_payload_pb.ListPayloadsResponse> {
    path: "/bosdyn.api.PayloadService/ListPayloads";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_pb.ListPayloadsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_pb.ListPayloadsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_pb.ListPayloadsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_pb.ListPayloadsResponse>;
}

export const PayloadServiceService: IPayloadServiceService;

export interface IPayloadServiceServer extends grpc.UntypedServiceImplementation {
    listPayloads: grpc.handleUnaryCall<bosdyn_api_payload_pb.ListPayloadsRequest, bosdyn_api_payload_pb.ListPayloadsResponse>;
}

export interface IPayloadServiceClient {
    listPayloads(request: bosdyn_api_payload_pb.ListPayloadsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_pb.ListPayloadsResponse) => void): grpc.ClientUnaryCall;
    listPayloads(request: bosdyn_api_payload_pb.ListPayloadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_pb.ListPayloadsResponse) => void): grpc.ClientUnaryCall;
    listPayloads(request: bosdyn_api_payload_pb.ListPayloadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_pb.ListPayloadsResponse) => void): grpc.ClientUnaryCall;
}

export class PayloadServiceClient extends grpc.Client implements IPayloadServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listPayloads(request: bosdyn_api_payload_pb.ListPayloadsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_pb.ListPayloadsResponse) => void): grpc.ClientUnaryCall;
    public listPayloads(request: bosdyn_api_payload_pb.ListPayloadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_pb.ListPayloadsResponse) => void): grpc.ClientUnaryCall;
    public listPayloads(request: bosdyn_api_payload_pb.ListPayloadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_pb.ListPayloadsResponse) => void): grpc.ClientUnaryCall;
}
