// package: bosdyn.api.log_status
// file: bosdyn/api/log_status/log_status.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LogStatus extends jspb.Message { 
    getId(): string;
    setId(value: string): LogStatus;
    getStatus(): LogStatus.Status;
    setStatus(value: LogStatus.Status): LogStatus;
    getType(): LogStatus.Type;
    setType(value: LogStatus.Type): LogStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogStatus.AsObject;
    static toObject(includeInstance: boolean, msg: LogStatus): LogStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogStatus;
    static deserializeBinaryFromReader(message: LogStatus, reader: jspb.BinaryReader): LogStatus;
}

export namespace LogStatus {
    export type AsObject = {
        id: string,
        status: LogStatus.Status,
        type: LogStatus.Type,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_RECEIVED = 1,
    STATUS_IN_PROGRESS = 2,
    STATUS_SYNCING = 3,
    STATUS_DONE = 100,
    STATUS_FAILED = 101,
    STATUS_TERMINATED = 102,
    }

    export enum Type {
    TYPE_UNKNOWN = 0,
    TYPE_EXPERIMENT = 1,
    TYPE_RETRO = 2,
    }

}

export class GetLogStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetLogStatusRequest;
    getId(): string;
    setId(value: string): GetLogStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLogStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLogStatusRequest): GetLogStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLogStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLogStatusRequest;
    static deserializeBinaryFromReader(message: GetLogStatusRequest, reader: jspb.BinaryReader): GetLogStatusRequest;
}

export namespace GetLogStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        id: string,
    }
}

export class GetLogStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetLogStatusResponse;
    getStatus(): GetLogStatusResponse.Status;
    setStatus(value: GetLogStatusResponse.Status): GetLogStatusResponse;

    hasLogStatus(): boolean;
    clearLogStatus(): void;
    getLogStatus(): LogStatus | undefined;
    setLogStatus(value?: LogStatus): GetLogStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLogStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLogStatusResponse): GetLogStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLogStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLogStatusResponse;
    static deserializeBinaryFromReader(message: GetLogStatusResponse, reader: jspb.BinaryReader): GetLogStatusResponse;
}

export namespace GetLogStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: GetLogStatusResponse.Status,
        logStatus?: LogStatus.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ID_NOT_FOUND = 2,
    }

}

export class GetActiveLogStatusesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetActiveLogStatusesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetActiveLogStatusesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetActiveLogStatusesRequest): GetActiveLogStatusesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetActiveLogStatusesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetActiveLogStatusesRequest;
    static deserializeBinaryFromReader(message: GetActiveLogStatusesRequest, reader: jspb.BinaryReader): GetActiveLogStatusesRequest;
}

export namespace GetActiveLogStatusesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetActiveLogStatusesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetActiveLogStatusesResponse;
    getStatus(): GetActiveLogStatusesResponse.Status;
    setStatus(value: GetActiveLogStatusesResponse.Status): GetActiveLogStatusesResponse;
    clearLogStatusesList(): void;
    getLogStatusesList(): Array<LogStatus>;
    setLogStatusesList(value: Array<LogStatus>): GetActiveLogStatusesResponse;
    addLogStatuses(value?: LogStatus, index?: number): LogStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetActiveLogStatusesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetActiveLogStatusesResponse): GetActiveLogStatusesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetActiveLogStatusesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetActiveLogStatusesResponse;
    static deserializeBinaryFromReader(message: GetActiveLogStatusesResponse, reader: jspb.BinaryReader): GetActiveLogStatusesResponse;
}

export namespace GetActiveLogStatusesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: GetActiveLogStatusesResponse.Status,
        logStatusesList: Array<LogStatus.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    }

}

export class StartRetroLogRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StartRetroLogRequest;

    hasPastDuration(): boolean;
    clearPastDuration(): void;
    getPastDuration(): google_protobuf_duration_pb.Duration | undefined;
    setPastDuration(value?: google_protobuf_duration_pb.Duration): StartRetroLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartRetroLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartRetroLogRequest): StartRetroLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartRetroLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartRetroLogRequest;
    static deserializeBinaryFromReader(message: StartRetroLogRequest, reader: jspb.BinaryReader): StartRetroLogRequest;
}

export namespace StartRetroLogRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        pastDuration?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class StartRetroLogResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StartRetroLogResponse;
    getStatus(): StartRetroLogResponse.Status;
    setStatus(value: StartRetroLogResponse.Status): StartRetroLogResponse;

    hasLogStatus(): boolean;
    clearLogStatus(): void;
    getLogStatus(): LogStatus | undefined;
    setLogStatus(value?: LogStatus): StartRetroLogResponse;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): StartRetroLogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartRetroLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartRetroLogResponse): StartRetroLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartRetroLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartRetroLogResponse;
    static deserializeBinaryFromReader(message: StartRetroLogResponse, reader: jspb.BinaryReader): StartRetroLogResponse;
}

export namespace StartRetroLogResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: StartRetroLogResponse.Status,
        logStatus?: LogStatus.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_EXPERIMENT_LOG_RUNNING = 2,
    STATUS_CONCURRENCY_LIMIT_REACHED = 3,
    }

}

export class StartExperimentLogRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StartExperimentLogRequest;

    hasKeepAlive(): boolean;
    clearKeepAlive(): void;
    getKeepAlive(): google_protobuf_duration_pb.Duration | undefined;
    setKeepAlive(value?: google_protobuf_duration_pb.Duration): StartExperimentLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartExperimentLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartExperimentLogRequest): StartExperimentLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartExperimentLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartExperimentLogRequest;
    static deserializeBinaryFromReader(message: StartExperimentLogRequest, reader: jspb.BinaryReader): StartExperimentLogRequest;
}

export namespace StartExperimentLogRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        keepAlive?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class StartExperimentLogResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StartExperimentLogResponse;
    getStatus(): StartExperimentLogResponse.Status;
    setStatus(value: StartExperimentLogResponse.Status): StartExperimentLogResponse;

    hasLogStatus(): boolean;
    clearLogStatus(): void;
    getLogStatus(): LogStatus | undefined;
    setLogStatus(value?: LogStatus): StartExperimentLogResponse;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): StartExperimentLogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartExperimentLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartExperimentLogResponse): StartExperimentLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartExperimentLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartExperimentLogResponse;
    static deserializeBinaryFromReader(message: StartExperimentLogResponse, reader: jspb.BinaryReader): StartExperimentLogResponse;
}

export namespace StartExperimentLogResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: StartExperimentLogResponse.Status,
        logStatus?: LogStatus.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_EXPERIMENT_LOG_RUNNING = 2,
    }

}

export class UpdateExperimentLogRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UpdateExperimentLogRequest;

    hasKeepAlive(): boolean;
    clearKeepAlive(): void;
    getKeepAlive(): google_protobuf_duration_pb.Duration | undefined;
    setKeepAlive(value?: google_protobuf_duration_pb.Duration): UpdateExperimentLogRequest;
    getId(): string;
    setId(value: string): UpdateExperimentLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateExperimentLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateExperimentLogRequest): UpdateExperimentLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateExperimentLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateExperimentLogRequest;
    static deserializeBinaryFromReader(message: UpdateExperimentLogRequest, reader: jspb.BinaryReader): UpdateExperimentLogRequest;
}

export namespace UpdateExperimentLogRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        keepAlive?: google_protobuf_duration_pb.Duration.AsObject,
        id: string,
    }
}

export class UpdateExperimentLogResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UpdateExperimentLogResponse;
    getStatus(): UpdateExperimentLogResponse.Status;
    setStatus(value: UpdateExperimentLogResponse.Status): UpdateExperimentLogResponse;

    hasLogStatus(): boolean;
    clearLogStatus(): void;
    getLogStatus(): LogStatus | undefined;
    setLogStatus(value?: LogStatus): UpdateExperimentLogResponse;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateExperimentLogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateExperimentLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateExperimentLogResponse): UpdateExperimentLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateExperimentLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateExperimentLogResponse;
    static deserializeBinaryFromReader(message: UpdateExperimentLogResponse, reader: jspb.BinaryReader): UpdateExperimentLogResponse;
}

export namespace UpdateExperimentLogResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: UpdateExperimentLogResponse.Status,
        logStatus?: LogStatus.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ID_NOT_FOUND = 2,
    STATUS_LOG_TERMINATED = 3,
    }

}

export class TerminateLogRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): TerminateLogRequest;
    getId(): string;
    setId(value: string): TerminateLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TerminateLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TerminateLogRequest): TerminateLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TerminateLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TerminateLogRequest;
    static deserializeBinaryFromReader(message: TerminateLogRequest, reader: jspb.BinaryReader): TerminateLogRequest;
}

export namespace TerminateLogRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        id: string,
    }
}

export class TerminateLogResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): TerminateLogResponse;
    getStatus(): TerminateLogResponse.Status;
    setStatus(value: TerminateLogResponse.Status): TerminateLogResponse;

    hasLogStatus(): boolean;
    clearLogStatus(): void;
    getLogStatus(): LogStatus | undefined;
    setLogStatus(value?: LogStatus): TerminateLogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TerminateLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TerminateLogResponse): TerminateLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TerminateLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TerminateLogResponse;
    static deserializeBinaryFromReader(message: TerminateLogResponse, reader: jspb.BinaryReader): TerminateLogResponse;
}

export namespace TerminateLogResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: TerminateLogResponse.Status,
        logStatus?: LogStatus.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ID_NOT_FOUND = 2,
    }

}
