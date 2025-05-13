// package: bosdyn.api.log_status
// file: bosdyn/api/log_status/log_status_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as bosdyn_api_log_status_log_status_service_pb from "../../../bosdyn/api/log_status/log_status_service_pb";
import * as bosdyn_api_log_status_log_status_pb from "../../../bosdyn/api/log_status/log_status_pb";

interface ILogStatusServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getLogStatus: ILogStatusServiceService_IGetLogStatus;
    getActiveLogStatuses: ILogStatusServiceService_IGetActiveLogStatuses;
    startRetroLog: ILogStatusServiceService_IStartRetroLog;
    startExperimentLog: ILogStatusServiceService_IStartExperimentLog;
    updateExperimentLog: ILogStatusServiceService_IUpdateExperimentLog;
    terminateLog: ILogStatusServiceService_ITerminateLog;
}

interface ILogStatusServiceService_IGetLogStatus extends grpc.MethodDefinition<bosdyn_api_log_status_log_status_pb.GetLogStatusRequest, bosdyn_api_log_status_log_status_pb.GetLogStatusResponse> {
    path: "/bosdyn.api.log_status.LogStatusService/GetLogStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.GetLogStatusRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.GetLogStatusRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.GetLogStatusResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.GetLogStatusResponse>;
}
interface ILogStatusServiceService_IGetActiveLogStatuses extends grpc.MethodDefinition<bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest, bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse> {
    path: "/bosdyn.api.log_status.LogStatusService/GetActiveLogStatuses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse>;
}
interface ILogStatusServiceService_IStartRetroLog extends grpc.MethodDefinition<bosdyn_api_log_status_log_status_pb.StartRetroLogRequest, bosdyn_api_log_status_log_status_pb.StartRetroLogResponse> {
    path: "/bosdyn.api.log_status.LogStatusService/StartRetroLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.StartRetroLogRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.StartRetroLogRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.StartRetroLogResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.StartRetroLogResponse>;
}
interface ILogStatusServiceService_IStartExperimentLog extends grpc.MethodDefinition<bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest, bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse> {
    path: "/bosdyn.api.log_status.LogStatusService/StartExperimentLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse>;
}
interface ILogStatusServiceService_IUpdateExperimentLog extends grpc.MethodDefinition<bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest, bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse> {
    path: "/bosdyn.api.log_status.LogStatusService/UpdateExperimentLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse>;
}
interface ILogStatusServiceService_ITerminateLog extends grpc.MethodDefinition<bosdyn_api_log_status_log_status_pb.TerminateLogRequest, bosdyn_api_log_status_log_status_pb.TerminateLogResponse> {
    path: "/bosdyn.api.log_status.LogStatusService/TerminateLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.TerminateLogRequest>;
    requestDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.TerminateLogRequest>;
    responseSerialize: grpc.serialize<bosdyn_api_log_status_log_status_pb.TerminateLogResponse>;
    responseDeserialize: grpc.deserialize<bosdyn_api_log_status_log_status_pb.TerminateLogResponse>;
}

export const LogStatusServiceService: ILogStatusServiceService;

export interface ILogStatusServiceServer extends grpc.UntypedServiceImplementation {
    getLogStatus: grpc.handleUnaryCall<bosdyn_api_log_status_log_status_pb.GetLogStatusRequest, bosdyn_api_log_status_log_status_pb.GetLogStatusResponse>;
    getActiveLogStatuses: grpc.handleUnaryCall<bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest, bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse>;
    startRetroLog: grpc.handleUnaryCall<bosdyn_api_log_status_log_status_pb.StartRetroLogRequest, bosdyn_api_log_status_log_status_pb.StartRetroLogResponse>;
    startExperimentLog: grpc.handleUnaryCall<bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest, bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse>;
    updateExperimentLog: grpc.handleUnaryCall<bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest, bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse>;
    terminateLog: grpc.handleUnaryCall<bosdyn_api_log_status_log_status_pb.TerminateLogRequest, bosdyn_api_log_status_log_status_pb.TerminateLogResponse>;
}

export interface ILogStatusServiceClient {
    getLogStatus(request: bosdyn_api_log_status_log_status_pb.GetLogStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetLogStatusResponse) => void): grpc.ClientUnaryCall;
    getLogStatus(request: bosdyn_api_log_status_log_status_pb.GetLogStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetLogStatusResponse) => void): grpc.ClientUnaryCall;
    getLogStatus(request: bosdyn_api_log_status_log_status_pb.GetLogStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetLogStatusResponse) => void): grpc.ClientUnaryCall;
    getActiveLogStatuses(request: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse) => void): grpc.ClientUnaryCall;
    getActiveLogStatuses(request: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse) => void): grpc.ClientUnaryCall;
    getActiveLogStatuses(request: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse) => void): grpc.ClientUnaryCall;
    startRetroLog(request: bosdyn_api_log_status_log_status_pb.StartRetroLogRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartRetroLogResponse) => void): grpc.ClientUnaryCall;
    startRetroLog(request: bosdyn_api_log_status_log_status_pb.StartRetroLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartRetroLogResponse) => void): grpc.ClientUnaryCall;
    startRetroLog(request: bosdyn_api_log_status_log_status_pb.StartRetroLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartRetroLogResponse) => void): grpc.ClientUnaryCall;
    startExperimentLog(request: bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse) => void): grpc.ClientUnaryCall;
    startExperimentLog(request: bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse) => void): grpc.ClientUnaryCall;
    startExperimentLog(request: bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse) => void): grpc.ClientUnaryCall;
    updateExperimentLog(request: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse) => void): grpc.ClientUnaryCall;
    updateExperimentLog(request: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse) => void): grpc.ClientUnaryCall;
    updateExperimentLog(request: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse) => void): grpc.ClientUnaryCall;
    terminateLog(request: bosdyn_api_log_status_log_status_pb.TerminateLogRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.TerminateLogResponse) => void): grpc.ClientUnaryCall;
    terminateLog(request: bosdyn_api_log_status_log_status_pb.TerminateLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.TerminateLogResponse) => void): grpc.ClientUnaryCall;
    terminateLog(request: bosdyn_api_log_status_log_status_pb.TerminateLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.TerminateLogResponse) => void): grpc.ClientUnaryCall;
}

export class LogStatusServiceClient extends grpc.Client implements ILogStatusServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getLogStatus(request: bosdyn_api_log_status_log_status_pb.GetLogStatusRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetLogStatusResponse) => void): grpc.ClientUnaryCall;
    public getLogStatus(request: bosdyn_api_log_status_log_status_pb.GetLogStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetLogStatusResponse) => void): grpc.ClientUnaryCall;
    public getLogStatus(request: bosdyn_api_log_status_log_status_pb.GetLogStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetLogStatusResponse) => void): grpc.ClientUnaryCall;
    public getActiveLogStatuses(request: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse) => void): grpc.ClientUnaryCall;
    public getActiveLogStatuses(request: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse) => void): grpc.ClientUnaryCall;
    public getActiveLogStatuses(request: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.GetActiveLogStatusesResponse) => void): grpc.ClientUnaryCall;
    public startRetroLog(request: bosdyn_api_log_status_log_status_pb.StartRetroLogRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartRetroLogResponse) => void): grpc.ClientUnaryCall;
    public startRetroLog(request: bosdyn_api_log_status_log_status_pb.StartRetroLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartRetroLogResponse) => void): grpc.ClientUnaryCall;
    public startRetroLog(request: bosdyn_api_log_status_log_status_pb.StartRetroLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartRetroLogResponse) => void): grpc.ClientUnaryCall;
    public startExperimentLog(request: bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse) => void): grpc.ClientUnaryCall;
    public startExperimentLog(request: bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse) => void): grpc.ClientUnaryCall;
    public startExperimentLog(request: bosdyn_api_log_status_log_status_pb.StartExperimentLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.StartExperimentLogResponse) => void): grpc.ClientUnaryCall;
    public updateExperimentLog(request: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse) => void): grpc.ClientUnaryCall;
    public updateExperimentLog(request: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse) => void): grpc.ClientUnaryCall;
    public updateExperimentLog(request: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.UpdateExperimentLogResponse) => void): grpc.ClientUnaryCall;
    public terminateLog(request: bosdyn_api_log_status_log_status_pb.TerminateLogRequest, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.TerminateLogResponse) => void): grpc.ClientUnaryCall;
    public terminateLog(request: bosdyn_api_log_status_log_status_pb.TerminateLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.TerminateLogResponse) => void): grpc.ClientUnaryCall;
    public terminateLog(request: bosdyn_api_log_status_log_status_pb.TerminateLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bosdyn_api_log_status_log_status_pb.TerminateLogResponse) => void): grpc.ClientUnaryCall;
}
