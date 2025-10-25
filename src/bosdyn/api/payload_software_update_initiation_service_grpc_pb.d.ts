// package: bosdyn.api
// file: bosdyn/api/payload_software_update_initiation_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_payload_software_update_initiation_service_pb from "../../bosdyn/api/payload_software_update_initiation_service_pb";
import * as bosdyn_api_payload_software_update_initiation_pb from "../../bosdyn/api/payload_software_update_initiation_pb";

interface IPayloadSoftwareUpdateInitiationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    triggerSendPayloadSoftwareInfo: IPayloadSoftwareUpdateInitiationServiceService_ITriggerSendPayloadSoftwareInfo;
    triggerInitiateUpdate: IPayloadSoftwareUpdateInitiationServiceService_ITriggerInitiateUpdate;
}

interface IPayloadSoftwareUpdateInitiationServiceService_ITriggerSendPayloadSoftwareInfo extends grpc.MethodDefinition<bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest, bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse> {
    path: "/bosdyn.api.PayloadSoftwareUpdateInitiationService/TriggerSendPayloadSoftwareInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse>;
}
interface IPayloadSoftwareUpdateInitiationServiceService_ITriggerInitiateUpdate extends grpc.MethodDefinition<bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest, bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse> {
    path: "/bosdyn.api.PayloadSoftwareUpdateInitiationService/TriggerInitiateUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse>;
}

export const PayloadSoftwareUpdateInitiationServiceService: IPayloadSoftwareUpdateInitiationServiceService;

export interface IPayloadSoftwareUpdateInitiationServiceServer extends grpc.UntypedServiceImplementation {
    triggerSendPayloadSoftwareInfo: grpc.handleUnaryCall<bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest, bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse>;
    triggerInitiateUpdate: grpc.handleUnaryCall<bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest, bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse>;
}

export interface IPayloadSoftwareUpdateInitiationServiceClient {
    triggerSendPayloadSoftwareInfo(request: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse) => void): grpc.ClientUnaryCall;
    triggerSendPayloadSoftwareInfo(request: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse) => void): grpc.ClientUnaryCall;
    triggerSendPayloadSoftwareInfo(request: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse) => void): grpc.ClientUnaryCall;
    triggerInitiateUpdate(request: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse) => void): grpc.ClientUnaryCall;
    triggerInitiateUpdate(request: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse) => void): grpc.ClientUnaryCall;
    triggerInitiateUpdate(request: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse) => void): grpc.ClientUnaryCall;
}

export class PayloadSoftwareUpdateInitiationServiceClient extends grpc.Client implements IPayloadSoftwareUpdateInitiationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public triggerSendPayloadSoftwareInfo(request: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse) => void): grpc.ClientUnaryCall;
    public triggerSendPayloadSoftwareInfo(request: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse) => void): grpc.ClientUnaryCall;
    public triggerSendPayloadSoftwareInfo(request: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerSendPayloadSoftwareInfoResponse) => void): grpc.ClientUnaryCall;
    public triggerInitiateUpdate(request: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse) => void): grpc.ClientUnaryCall;
    public triggerInitiateUpdate(request: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse) => void): grpc.ClientUnaryCall;
    public triggerInitiateUpdate(request: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_payload_software_update_initiation_pb.TriggerInitiateUpdateResponse) => void): grpc.ClientUnaryCall;
}
