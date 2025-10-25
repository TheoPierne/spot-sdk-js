// package: bosdyn.api.spot
// file: bosdyn/api/spot/door_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_spot_door_service_pb from "../../../bosdyn/api/spot/door_service_pb";
import * as bosdyn_api_spot_door_pb from "../../../bosdyn/api/spot/door_pb";

interface IDoorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    openDoor: IDoorServiceService_IOpenDoor;
    openDoorFeedback: IDoorServiceService_IOpenDoorFeedback;
}

interface IDoorServiceService_IOpenDoor extends grpc.MethodDefinition<bosdyn_api_spot_door_pb.OpenDoorCommandRequest, bosdyn_api_spot_door_pb.OpenDoorCommandResponse> {
    path: "/bosdyn.api.spot.DoorService/OpenDoor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_door_pb.OpenDoorCommandRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_door_pb.OpenDoorCommandRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_door_pb.OpenDoorCommandResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_door_pb.OpenDoorCommandResponse>;
}
interface IDoorServiceService_IOpenDoorFeedback extends grpc.MethodDefinition<bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest, bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse> {
    path: "/bosdyn.api.spot.DoorService/OpenDoorFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse>;
}

export const DoorServiceService: IDoorServiceService;

export interface IDoorServiceServer extends grpc.UntypedServiceImplementation {
    openDoor: grpc.handleUnaryCall<bosdyn_api_spot_door_pb.OpenDoorCommandRequest, bosdyn_api_spot_door_pb.OpenDoorCommandResponse>;
    openDoorFeedback: grpc.handleUnaryCall<bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest, bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse>;
}

export interface IDoorServiceClient {
    openDoor(request: bosdyn_api_spot_door_pb.OpenDoorCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorCommandResponse) => void): grpc.ClientUnaryCall;
    openDoor(request: bosdyn_api_spot_door_pb.OpenDoorCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorCommandResponse) => void): grpc.ClientUnaryCall;
    openDoor(request: bosdyn_api_spot_door_pb.OpenDoorCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorCommandResponse) => void): grpc.ClientUnaryCall;
    openDoorFeedback(request: bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse) => void): grpc.ClientUnaryCall;
    openDoorFeedback(request: bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse) => void): grpc.ClientUnaryCall;
    openDoorFeedback(request: bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse) => void): grpc.ClientUnaryCall;
}

export class DoorServiceClient extends grpc.Client implements IDoorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public openDoor(request: bosdyn_api_spot_door_pb.OpenDoorCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorCommandResponse) => void): grpc.ClientUnaryCall;
    public openDoor(request: bosdyn_api_spot_door_pb.OpenDoorCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorCommandResponse) => void): grpc.ClientUnaryCall;
    public openDoor(request: bosdyn_api_spot_door_pb.OpenDoorCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorCommandResponse) => void): grpc.ClientUnaryCall;
    public openDoorFeedback(request: bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse) => void): grpc.ClientUnaryCall;
    public openDoorFeedback(request: bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse) => void): grpc.ClientUnaryCall;
    public openDoorFeedback(request: bosdyn_api_spot_door_pb.OpenDoorFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_door_pb.OpenDoorFeedbackResponse) => void): grpc.ClientUnaryCall;
}
