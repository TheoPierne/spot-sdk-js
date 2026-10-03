// package: bosdyn.api
// file: bosdyn/api/gripper_camera_param_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_gripper_camera_param_service_pb from "../../bosdyn/api/gripper_camera_param_service_pb";
import * as bosdyn_api_gripper_camera_param_pb from "../../bosdyn/api/gripper_camera_param_pb";

interface IGripperCameraParamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setParams: IGripperCameraParamServiceService_ISetParams;
    getParams: IGripperCameraParamServiceService_IGetParams;
    setCamCalib: IGripperCameraParamServiceService_ISetCamCalib;
    getCamCalib: IGripperCameraParamServiceService_IGetCamCalib;
}

interface IGripperCameraParamServiceService_ISetParams extends grpc.MethodDefinition<bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest, bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse> {
    path: "/bosdyn.api.GripperCameraParamService/SetParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse>;
}
interface IGripperCameraParamServiceService_IGetParams extends grpc.MethodDefinition<bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest, bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse> {
    path: "/bosdyn.api.GripperCameraParamService/GetParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse>;
}
interface IGripperCameraParamServiceService_ISetCamCalib extends grpc.MethodDefinition<bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest, bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse> {
    path: "/bosdyn.api.GripperCameraParamService/SetCamCalib";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse>;
}
interface IGripperCameraParamServiceService_IGetCamCalib extends grpc.MethodDefinition<bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest, bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse> {
    path: "/bosdyn.api.GripperCameraParamService/GetCamCalib";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse>;
}

export const GripperCameraParamServiceService: IGripperCameraParamServiceService;

export interface IGripperCameraParamServiceServer extends grpc.UntypedServiceImplementation {
    setParams: grpc.handleUnaryCall<bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest, bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse>;
    getParams: grpc.handleUnaryCall<bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest, bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse>;
    setCamCalib: grpc.handleUnaryCall<bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest, bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse>;
    getCamCalib: grpc.handleUnaryCall<bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest, bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse>;
}

export interface IGripperCameraParamServiceClient {
    setParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse) => void): grpc.ClientUnaryCall;
    setParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse) => void): grpc.ClientUnaryCall;
    setParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse) => void): grpc.ClientUnaryCall;
    getParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse) => void): grpc.ClientUnaryCall;
    getParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse) => void): grpc.ClientUnaryCall;
    getParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse) => void): grpc.ClientUnaryCall;
    setCamCalib(request: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    setCamCalib(request: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    setCamCalib(request: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    getCamCalib(request: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    getCamCalib(request: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    getCamCalib(request: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
}

export class GripperCameraParamServiceClient extends grpc.Client implements IGripperCameraParamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse) => void): grpc.ClientUnaryCall;
    public setParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse) => void): grpc.ClientUnaryCall;
    public setParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraParamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraParamResponse) => void): grpc.ClientUnaryCall;
    public getParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse) => void): grpc.ClientUnaryCall;
    public getParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse) => void): grpc.ClientUnaryCall;
    public getParams(request: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GripperCameraGetParamResponse) => void): grpc.ClientUnaryCall;
    public setCamCalib(request: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    public setCamCalib(request: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    public setCamCalib(request: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.SetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    public getCamCalib(request: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    public getCamCalib(request: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
    public getCamCalib(request: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_gripper_camera_param_pb.GetGripperCameraCalibrationResponse) => void): grpc.ClientUnaryCall;
}
