// package: bosdyn.api.spot
// file: bosdyn/api/spot/inverse_kinematics_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_spot_inverse_kinematics_service_pb from "../../../bosdyn/api/spot/inverse_kinematics_service_pb";
import * as bosdyn_api_spot_inverse_kinematics_pb from "../../../bosdyn/api/spot/inverse_kinematics_pb";

interface IInverseKinematicsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    inverseKinematics: IInverseKinematicsServiceService_IInverseKinematics;
}

interface IInverseKinematicsServiceService_IInverseKinematics extends grpc.MethodDefinition<bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest, bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse> {
    path: "/bosdyn.api.spot.InverseKinematicsService/InverseKinematics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse>;
}

export const InverseKinematicsServiceService: IInverseKinematicsServiceService;

export interface IInverseKinematicsServiceServer extends grpc.UntypedServiceImplementation {
    inverseKinematics: grpc.handleUnaryCall<bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest, bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse>;
}

export interface IInverseKinematicsServiceClient {
    inverseKinematics(request: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse) => void): grpc.ClientUnaryCall;
    inverseKinematics(request: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse) => void): grpc.ClientUnaryCall;
    inverseKinematics(request: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse) => void): grpc.ClientUnaryCall;
}

export class InverseKinematicsServiceClient extends grpc.Client implements IInverseKinematicsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public inverseKinematics(request: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse) => void): grpc.ClientUnaryCall;
    public inverseKinematics(request: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse) => void): grpc.ClientUnaryCall;
    public inverseKinematics(request: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_inverse_kinematics_pb.InverseKinematicsResponse) => void): grpc.ClientUnaryCall;
}
