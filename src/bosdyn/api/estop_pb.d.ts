// package: bosdyn.api
// file: bosdyn/api/estop.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class EstopEndpoint extends jspb.Message { 
    getRole(): string;
    setRole(value: string): EstopEndpoint;
    getName(): string;
    setName(value: string): EstopEndpoint;
    getUniqueId(): string;
    setUniqueId(value: string): EstopEndpoint;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): EstopEndpoint;

    hasCutPowerTimeout(): boolean;
    clearCutPowerTimeout(): void;
    getCutPowerTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setCutPowerTimeout(value?: google_protobuf_duration_pb.Duration): EstopEndpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstopEndpoint.AsObject;
    static toObject(includeInstance: boolean, msg: EstopEndpoint): EstopEndpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstopEndpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstopEndpoint;
    static deserializeBinaryFromReader(message: EstopEndpoint, reader: jspb.BinaryReader): EstopEndpoint;
}

export namespace EstopEndpoint {
    export type AsObject = {
        role: string,
        name: string,
        uniqueId: string,
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
        cutPowerTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class EstopConfig extends jspb.Message { 
    clearEndpointsList(): void;
    getEndpointsList(): Array<EstopEndpoint>;
    setEndpointsList(value: Array<EstopEndpoint>): EstopConfig;
    addEndpoints(value?: EstopEndpoint, index?: number): EstopEndpoint;
    getUniqueId(): string;
    setUniqueId(value: string): EstopConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstopConfig.AsObject;
    static toObject(includeInstance: boolean, msg: EstopConfig): EstopConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstopConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstopConfig;
    static deserializeBinaryFromReader(message: EstopConfig, reader: jspb.BinaryReader): EstopConfig;
}

export namespace EstopConfig {
    export type AsObject = {
        endpointsList: Array<EstopEndpoint.AsObject>,
        uniqueId: string,
    }
}

export class EstopEndpointWithStatus extends jspb.Message { 

    hasEndpoint(): boolean;
    clearEndpoint(): void;
    getEndpoint(): EstopEndpoint | undefined;
    setEndpoint(value?: EstopEndpoint): EstopEndpointWithStatus;
    getStopLevel(): EstopStopLevel;
    setStopLevel(value: EstopStopLevel): EstopEndpointWithStatus;

    hasTimeSinceValidResponse(): boolean;
    clearTimeSinceValidResponse(): void;
    getTimeSinceValidResponse(): google_protobuf_duration_pb.Duration | undefined;
    setTimeSinceValidResponse(value?: google_protobuf_duration_pb.Duration): EstopEndpointWithStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstopEndpointWithStatus.AsObject;
    static toObject(includeInstance: boolean, msg: EstopEndpointWithStatus): EstopEndpointWithStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstopEndpointWithStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstopEndpointWithStatus;
    static deserializeBinaryFromReader(message: EstopEndpointWithStatus, reader: jspb.BinaryReader): EstopEndpointWithStatus;
}

export namespace EstopEndpointWithStatus {
    export type AsObject = {
        endpoint?: EstopEndpoint.AsObject,
        stopLevel: EstopStopLevel,
        timeSinceValidResponse?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class EstopSystemStatus extends jspb.Message { 
    clearEndpointsList(): void;
    getEndpointsList(): Array<EstopEndpointWithStatus>;
    setEndpointsList(value: Array<EstopEndpointWithStatus>): EstopSystemStatus;
    addEndpoints(value?: EstopEndpointWithStatus, index?: number): EstopEndpointWithStatus;
    getStopLevel(): EstopStopLevel;
    setStopLevel(value: EstopStopLevel): EstopSystemStatus;
    getStopLevelDetails(): string;
    setStopLevelDetails(value: string): EstopSystemStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstopSystemStatus.AsObject;
    static toObject(includeInstance: boolean, msg: EstopSystemStatus): EstopSystemStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstopSystemStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstopSystemStatus;
    static deserializeBinaryFromReader(message: EstopSystemStatus, reader: jspb.BinaryReader): EstopSystemStatus;
}

export namespace EstopSystemStatus {
    export type AsObject = {
        endpointsList: Array<EstopEndpointWithStatus.AsObject>,
        stopLevel: EstopStopLevel,
        stopLevelDetails: string,
    }
}

export class EstopCheckInRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): EstopCheckInRequest;

    hasEndpoint(): boolean;
    clearEndpoint(): void;
    getEndpoint(): EstopEndpoint | undefined;
    setEndpoint(value?: EstopEndpoint): EstopCheckInRequest;
    getChallenge(): number;
    setChallenge(value: number): EstopCheckInRequest;
    getResponse(): string;
    setResponse(value: string): EstopCheckInRequest;
    getStopLevel(): EstopStopLevel;
    setStopLevel(value: EstopStopLevel): EstopCheckInRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstopCheckInRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstopCheckInRequest): EstopCheckInRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstopCheckInRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstopCheckInRequest;
    static deserializeBinaryFromReader(message: EstopCheckInRequest, reader: jspb.BinaryReader): EstopCheckInRequest;
}

export namespace EstopCheckInRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        endpoint?: EstopEndpoint.AsObject,
        challenge: number,
        response: string,
        stopLevel: EstopStopLevel,
    }
}

export class EstopCheckInResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): EstopCheckInResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): EstopCheckInRequest | undefined;
    setRequest(value?: EstopCheckInRequest): EstopCheckInResponse;
    getChallenge(): number;
    setChallenge(value: number): EstopCheckInResponse;
    getStatus(): EstopCheckInResponse.Status;
    setStatus(value: EstopCheckInResponse.Status): EstopCheckInResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstopCheckInResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstopCheckInResponse): EstopCheckInResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstopCheckInResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstopCheckInResponse;
    static deserializeBinaryFromReader(message: EstopCheckInResponse, reader: jspb.BinaryReader): EstopCheckInResponse;
}

export namespace EstopCheckInResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        request?: EstopCheckInRequest.AsObject,
        challenge: number,
        status: EstopCheckInResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ENDPOINT_UNKNOWN = 2,
    STATUS_INCORRECT_CHALLENGE_RESPONSE = 5,
    }

}

export class RegisterEstopEndpointRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RegisterEstopEndpointRequest;

    hasTargetEndpoint(): boolean;
    clearTargetEndpoint(): void;
    getTargetEndpoint(): EstopEndpoint | undefined;
    setTargetEndpoint(value?: EstopEndpoint): RegisterEstopEndpointRequest;
    getTargetConfigId(): string;
    setTargetConfigId(value: string): RegisterEstopEndpointRequest;

    hasNewEndpoint(): boolean;
    clearNewEndpoint(): void;
    getNewEndpoint(): EstopEndpoint | undefined;
    setNewEndpoint(value?: EstopEndpoint): RegisterEstopEndpointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterEstopEndpointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterEstopEndpointRequest): RegisterEstopEndpointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterEstopEndpointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterEstopEndpointRequest;
    static deserializeBinaryFromReader(message: RegisterEstopEndpointRequest, reader: jspb.BinaryReader): RegisterEstopEndpointRequest;
}

export namespace RegisterEstopEndpointRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        targetEndpoint?: EstopEndpoint.AsObject,
        targetConfigId: string,
        newEndpoint?: EstopEndpoint.AsObject,
    }
}

export class RegisterEstopEndpointResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RegisterEstopEndpointResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): RegisterEstopEndpointRequest | undefined;
    setRequest(value?: RegisterEstopEndpointRequest): RegisterEstopEndpointResponse;

    hasNewEndpoint(): boolean;
    clearNewEndpoint(): void;
    getNewEndpoint(): EstopEndpoint | undefined;
    setNewEndpoint(value?: EstopEndpoint): RegisterEstopEndpointResponse;
    getStatus(): RegisterEstopEndpointResponse.Status;
    setStatus(value: RegisterEstopEndpointResponse.Status): RegisterEstopEndpointResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterEstopEndpointResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterEstopEndpointResponse): RegisterEstopEndpointResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterEstopEndpointResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterEstopEndpointResponse;
    static deserializeBinaryFromReader(message: RegisterEstopEndpointResponse, reader: jspb.BinaryReader): RegisterEstopEndpointResponse;
}

export namespace RegisterEstopEndpointResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        request?: RegisterEstopEndpointRequest.AsObject,
        newEndpoint?: EstopEndpoint.AsObject,
        status: RegisterEstopEndpointResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_SUCCESS = 1,
    STATUS_ENDPOINT_MISMATCH = 2,
    STATUS_CONFIG_MISMATCH = 3,
    STATUS_INVALID_ENDPOINT = 4,
    }

}

export class DeregisterEstopEndpointRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DeregisterEstopEndpointRequest;

    hasTargetEndpoint(): boolean;
    clearTargetEndpoint(): void;
    getTargetEndpoint(): EstopEndpoint | undefined;
    setTargetEndpoint(value?: EstopEndpoint): DeregisterEstopEndpointRequest;
    getTargetConfigId(): string;
    setTargetConfigId(value: string): DeregisterEstopEndpointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeregisterEstopEndpointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeregisterEstopEndpointRequest): DeregisterEstopEndpointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeregisterEstopEndpointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeregisterEstopEndpointRequest;
    static deserializeBinaryFromReader(message: DeregisterEstopEndpointRequest, reader: jspb.BinaryReader): DeregisterEstopEndpointRequest;
}

export namespace DeregisterEstopEndpointRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        targetEndpoint?: EstopEndpoint.AsObject,
        targetConfigId: string,
    }
}

export class DeregisterEstopEndpointResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DeregisterEstopEndpointResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): DeregisterEstopEndpointRequest | undefined;
    setRequest(value?: DeregisterEstopEndpointRequest): DeregisterEstopEndpointResponse;
    getStatus(): DeregisterEstopEndpointResponse.Status;
    setStatus(value: DeregisterEstopEndpointResponse.Status): DeregisterEstopEndpointResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeregisterEstopEndpointResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeregisterEstopEndpointResponse): DeregisterEstopEndpointResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeregisterEstopEndpointResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeregisterEstopEndpointResponse;
    static deserializeBinaryFromReader(message: DeregisterEstopEndpointResponse, reader: jspb.BinaryReader): DeregisterEstopEndpointResponse;
}

export namespace DeregisterEstopEndpointResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        request?: DeregisterEstopEndpointRequest.AsObject,
        status: DeregisterEstopEndpointResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_SUCCESS = 1,
    STATUS_ENDPOINT_MISMATCH = 2,
    STATUS_CONFIG_MISMATCH = 3,
    STATUS_MOTORS_ON = 4,
    }

}

export class GetEstopConfigRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetEstopConfigRequest;
    getTargetConfigId(): string;
    setTargetConfigId(value: string): GetEstopConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEstopConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEstopConfigRequest): GetEstopConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEstopConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEstopConfigRequest;
    static deserializeBinaryFromReader(message: GetEstopConfigRequest, reader: jspb.BinaryReader): GetEstopConfigRequest;
}

export namespace GetEstopConfigRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        targetConfigId: string,
    }
}

export class GetEstopConfigResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetEstopConfigResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): GetEstopConfigRequest | undefined;
    setRequest(value?: GetEstopConfigRequest): GetEstopConfigResponse;

    hasActiveConfig(): boolean;
    clearActiveConfig(): void;
    getActiveConfig(): EstopConfig | undefined;
    setActiveConfig(value?: EstopConfig): GetEstopConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEstopConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEstopConfigResponse): GetEstopConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEstopConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEstopConfigResponse;
    static deserializeBinaryFromReader(message: GetEstopConfigResponse, reader: jspb.BinaryReader): GetEstopConfigResponse;
}

export namespace GetEstopConfigResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        request?: GetEstopConfigRequest.AsObject,
        activeConfig?: EstopConfig.AsObject,
    }
}

export class SetEstopConfigRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetEstopConfigRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): EstopConfig | undefined;
    setConfig(value?: EstopConfig): SetEstopConfigRequest;
    getTargetConfigId(): string;
    setTargetConfigId(value: string): SetEstopConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetEstopConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetEstopConfigRequest): SetEstopConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetEstopConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetEstopConfigRequest;
    static deserializeBinaryFromReader(message: SetEstopConfigRequest, reader: jspb.BinaryReader): SetEstopConfigRequest;
}

export namespace SetEstopConfigRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        config?: EstopConfig.AsObject,
        targetConfigId: string,
    }
}

export class SetEstopConfigResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetEstopConfigResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): SetEstopConfigRequest | undefined;
    setRequest(value?: SetEstopConfigRequest): SetEstopConfigResponse;

    hasActiveConfig(): boolean;
    clearActiveConfig(): void;
    getActiveConfig(): EstopConfig | undefined;
    setActiveConfig(value?: EstopConfig): SetEstopConfigResponse;
    getStatus(): SetEstopConfigResponse.Status;
    setStatus(value: SetEstopConfigResponse.Status): SetEstopConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetEstopConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetEstopConfigResponse): SetEstopConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetEstopConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetEstopConfigResponse;
    static deserializeBinaryFromReader(message: SetEstopConfigResponse, reader: jspb.BinaryReader): SetEstopConfigResponse;
}

export namespace SetEstopConfigResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        request?: SetEstopConfigRequest.AsObject,
        activeConfig?: EstopConfig.AsObject,
        status: SetEstopConfigResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_SUCCESS = 1,
    STATUS_INVALID_ID = 2,
    STATUS_MOTORS_ON = 4,
    }

}

export class GetEstopSystemStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetEstopSystemStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEstopSystemStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEstopSystemStatusRequest): GetEstopSystemStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEstopSystemStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEstopSystemStatusRequest;
    static deserializeBinaryFromReader(message: GetEstopSystemStatusRequest, reader: jspb.BinaryReader): GetEstopSystemStatusRequest;
}

export namespace GetEstopSystemStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetEstopSystemStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetEstopSystemStatusResponse;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): EstopSystemStatus | undefined;
    setStatus(value?: EstopSystemStatus): GetEstopSystemStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEstopSystemStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEstopSystemStatusResponse): GetEstopSystemStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEstopSystemStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEstopSystemStatusResponse;
    static deserializeBinaryFromReader(message: GetEstopSystemStatusResponse, reader: jspb.BinaryReader): GetEstopSystemStatusResponse;
}

export namespace GetEstopSystemStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status?: EstopSystemStatus.AsObject,
    }
}

export enum EstopStopLevel {
    ESTOP_LEVEL_UNKNOWN = 0,
    ESTOP_LEVEL_CUT = 1,
    ESTOP_LEVEL_SETTLE_THEN_CUT = 2,
    ESTOP_LEVEL_NONE = 4,
}
