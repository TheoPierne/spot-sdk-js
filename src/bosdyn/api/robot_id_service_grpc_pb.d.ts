// package: bosdyn.api
// file: bosdyn/api/robot_id_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_robot_id_service_pb from "../../bosdyn/api/robot_id_service_pb";
import * as bosdyn_api_robot_id_pb from "../../bosdyn/api/robot_id_pb";

interface IRobotIdServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRobotId: IRobotIdServiceService_IGetRobotId;
}

interface IRobotIdServiceService_IGetRobotId extends grpc.MethodDefinition<bosdyn_api_robot_id_pb.RobotIdRequest, bosdyn_api_robot_id_pb.RobotIdResponse> {
    path: "/bosdyn.api.RobotIdService/GetRobotId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_robot_id_pb.RobotIdRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_robot_id_pb.RobotIdRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_robot_id_pb.RobotIdResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_robot_id_pb.RobotIdResponse>;
}

export const RobotIdServiceService: IRobotIdServiceService;

export interface IRobotIdServiceServer extends grpc.UntypedServiceImplementation {
    getRobotId: grpc.handleUnaryCall<bosdyn_api_robot_id_pb.RobotIdRequest, bosdyn_api_robot_id_pb.RobotIdResponse>;
}

export interface IRobotIdServiceClient {
    getRobotId(request: bosdyn_api_robot_id_pb.RobotIdRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_id_pb.RobotIdResponse) => void): grpc.ClientUnaryCall;
    getRobotId(request: bosdyn_api_robot_id_pb.RobotIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_id_pb.RobotIdResponse) => void): grpc.ClientUnaryCall;
    getRobotId(request: bosdyn_api_robot_id_pb.RobotIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_id_pb.RobotIdResponse) => void): grpc.ClientUnaryCall;
}

export class RobotIdServiceClient extends grpc.Client implements IRobotIdServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getRobotId(request: bosdyn_api_robot_id_pb.RobotIdRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_id_pb.RobotIdResponse) => void): grpc.ClientUnaryCall;
    public getRobotId(request: bosdyn_api_robot_id_pb.RobotIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_id_pb.RobotIdResponse) => void): grpc.ClientUnaryCall;
    public getRobotId(request: bosdyn_api_robot_id_pb.RobotIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_robot_id_pb.RobotIdResponse) => void): grpc.ClientUnaryCall;
}
