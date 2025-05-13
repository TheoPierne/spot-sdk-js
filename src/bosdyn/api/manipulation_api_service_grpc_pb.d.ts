// package: bosdyn.api
// file: bosdyn/api/manipulation_api_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_manipulation_api_service_pb from "../../bosdyn/api/manipulation_api_service_pb";
import * as bosdyn_api_manipulation_api_pb from "../../bosdyn/api/manipulation_api_pb";

interface IManipulationApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    manipulationApi: IManipulationApiServiceService_IManipulationApi;
    manipulationApiFeedback: IManipulationApiServiceService_IManipulationApiFeedback;
    overrideGrasp: IManipulationApiServiceService_IOverrideGrasp;
}

interface IManipulationApiServiceService_IManipulationApi extends grpc.MethodDefinition<bosdyn_api_manipulation_api_pb.ManipulationApiRequest, bosdyn_api_manipulation_api_pb.ManipulationApiResponse> {
    path: "/bosdyn.api.ManipulationApiService/ManipulationApi";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_manipulation_api_pb.ManipulationApiRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_manipulation_api_pb.ManipulationApiRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_manipulation_api_pb.ManipulationApiResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_manipulation_api_pb.ManipulationApiResponse>;
}
interface IManipulationApiServiceService_IManipulationApiFeedback extends grpc.MethodDefinition<bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest, bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse> {
    path: "/bosdyn.api.ManipulationApiService/ManipulationApiFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse>;
}
interface IManipulationApiServiceService_IOverrideGrasp extends grpc.MethodDefinition<bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse> {
    path: "/bosdyn.api.ManipulationApiService/OverrideGrasp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse>;
}

export const ManipulationApiServiceService: IManipulationApiServiceService;

export interface IManipulationApiServiceServer extends grpc.UntypedServiceImplementation {
    manipulationApi: grpc.handleUnaryCall<bosdyn_api_manipulation_api_pb.ManipulationApiRequest, bosdyn_api_manipulation_api_pb.ManipulationApiResponse>;
    manipulationApiFeedback: grpc.handleUnaryCall<bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest, bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse>;
    overrideGrasp: grpc.handleUnaryCall<bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse>;
}

export interface IManipulationApiServiceClient {
    manipulationApi(request: bosdyn_api_manipulation_api_pb.ManipulationApiRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiResponse) => void): grpc.ClientUnaryCall;
    manipulationApi(request: bosdyn_api_manipulation_api_pb.ManipulationApiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiResponse) => void): grpc.ClientUnaryCall;
    manipulationApi(request: bosdyn_api_manipulation_api_pb.ManipulationApiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiResponse) => void): grpc.ClientUnaryCall;
    manipulationApiFeedback(request: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse) => void): grpc.ClientUnaryCall;
    manipulationApiFeedback(request: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse) => void): grpc.ClientUnaryCall;
    manipulationApiFeedback(request: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse) => void): grpc.ClientUnaryCall;
    overrideGrasp(request: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse) => void): grpc.ClientUnaryCall;
    overrideGrasp(request: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse) => void): grpc.ClientUnaryCall;
    overrideGrasp(request: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse) => void): grpc.ClientUnaryCall;
}

export class ManipulationApiServiceClient extends grpc.Client implements IManipulationApiServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public manipulationApi(request: bosdyn_api_manipulation_api_pb.ManipulationApiRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiResponse) => void): grpc.ClientUnaryCall;
    public manipulationApi(request: bosdyn_api_manipulation_api_pb.ManipulationApiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiResponse) => void): grpc.ClientUnaryCall;
    public manipulationApi(request: bosdyn_api_manipulation_api_pb.ManipulationApiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiResponse) => void): grpc.ClientUnaryCall;
    public manipulationApiFeedback(request: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse) => void): grpc.ClientUnaryCall;
    public manipulationApiFeedback(request: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse) => void): grpc.ClientUnaryCall;
    public manipulationApiFeedback(request: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ManipulationApiFeedbackResponse) => void): grpc.ClientUnaryCall;
    public overrideGrasp(request: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse) => void): grpc.ClientUnaryCall;
    public overrideGrasp(request: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse) => void): grpc.ClientUnaryCall;
    public overrideGrasp(request: bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_manipulation_api_pb.ApiGraspOverrideResponse) => void): grpc.ClientUnaryCall;
}
