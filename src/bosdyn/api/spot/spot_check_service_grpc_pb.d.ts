// package: bosdyn.api.spot
// file: bosdyn/api/spot/spot_check_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_spot_spot_check_service_pb from "../../../bosdyn/api/spot/spot_check_service_pb";
import * as bosdyn_api_spot_spot_check_pb from "../../../bosdyn/api/spot/spot_check_pb";

interface ISpotCheckServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    spotCheckCommand: ISpotCheckServiceService_ISpotCheckCommand;
    spotCheckFeedback: ISpotCheckServiceService_ISpotCheckFeedback;
    cameraCalibrationCommand: ISpotCheckServiceService_ICameraCalibrationCommand;
    cameraCalibrationFeedback: ISpotCheckServiceService_ICameraCalibrationFeedback;
}

interface ISpotCheckServiceService_ISpotCheckCommand extends grpc.MethodDefinition<bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest, bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse> {
    path: "/bosdyn.api.spot.SpotCheckService/SpotCheckCommand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse>;
}
interface ISpotCheckServiceService_ISpotCheckFeedback extends grpc.MethodDefinition<bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest, bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse> {
    path: "/bosdyn.api.spot.SpotCheckService/SpotCheckFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse>;
}
interface ISpotCheckServiceService_ICameraCalibrationCommand extends grpc.MethodDefinition<bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest, bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse> {
    path: "/bosdyn.api.spot.SpotCheckService/CameraCalibrationCommand";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse>;
}
interface ISpotCheckServiceService_ICameraCalibrationFeedback extends grpc.MethodDefinition<bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest, bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse> {
    path: "/bosdyn.api.spot.SpotCheckService/CameraCalibrationFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse>;
}

export const SpotCheckServiceService: ISpotCheckServiceService;

export interface ISpotCheckServiceServer extends grpc.UntypedServiceImplementation {
    spotCheckCommand: grpc.handleUnaryCall<bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest, bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse>;
    spotCheckFeedback: grpc.handleUnaryCall<bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest, bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse>;
    cameraCalibrationCommand: grpc.handleUnaryCall<bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest, bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse>;
    cameraCalibrationFeedback: grpc.handleUnaryCall<bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest, bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse>;
}

export interface ISpotCheckServiceClient {
    spotCheckCommand(request: bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse) => void): grpc.ClientUnaryCall;
    spotCheckCommand(request: bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse) => void): grpc.ClientUnaryCall;
    spotCheckCommand(request: bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse) => void): grpc.ClientUnaryCall;
    spotCheckFeedback(request: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse) => void): grpc.ClientUnaryCall;
    spotCheckFeedback(request: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse) => void): grpc.ClientUnaryCall;
    spotCheckFeedback(request: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse) => void): grpc.ClientUnaryCall;
    cameraCalibrationCommand(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse) => void): grpc.ClientUnaryCall;
    cameraCalibrationCommand(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse) => void): grpc.ClientUnaryCall;
    cameraCalibrationCommand(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse) => void): grpc.ClientUnaryCall;
    cameraCalibrationFeedback(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse) => void): grpc.ClientUnaryCall;
    cameraCalibrationFeedback(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse) => void): grpc.ClientUnaryCall;
    cameraCalibrationFeedback(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse) => void): grpc.ClientUnaryCall;
}

export class SpotCheckServiceClient extends grpc.Client implements ISpotCheckServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public spotCheckCommand(request: bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse) => void): grpc.ClientUnaryCall;
    public spotCheckCommand(request: bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse) => void): grpc.ClientUnaryCall;
    public spotCheckCommand(request: bosdyn_api_spot_spot_check_pb.SpotCheckCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckCommandResponse) => void): grpc.ClientUnaryCall;
    public spotCheckFeedback(request: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse) => void): grpc.ClientUnaryCall;
    public spotCheckFeedback(request: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse) => void): grpc.ClientUnaryCall;
    public spotCheckFeedback(request: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.SpotCheckFeedbackResponse) => void): grpc.ClientUnaryCall;
    public cameraCalibrationCommand(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse) => void): grpc.ClientUnaryCall;
    public cameraCalibrationCommand(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse) => void): grpc.ClientUnaryCall;
    public cameraCalibrationCommand(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationCommandResponse) => void): grpc.ClientUnaryCall;
    public cameraCalibrationFeedback(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public cameraCalibrationFeedback(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public cameraCalibrationFeedback(request: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_spot_spot_check_pb.CameraCalibrationFeedbackResponse) => void): grpc.ClientUnaryCall;
}
