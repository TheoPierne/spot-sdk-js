// package: bosdyn.api.mission
// file: bosdyn/api/mission/remote.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as bosdyn_api_service_customization_pb from "../../../bosdyn/api/service_customization_pb";
import * as bosdyn_api_mission_util_pb from "../../../bosdyn/api/mission/util_pb";

export class EstablishSessionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): EstablishSessionRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): EstablishSessionRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;
    clearInputsList(): void;
    getInputsList(): Array<bosdyn_api_mission_util_pb.VariableDeclaration>;
    setInputsList(value: Array<bosdyn_api_mission_util_pb.VariableDeclaration>): EstablishSessionRequest;
    addInputs(value?: bosdyn_api_mission_util_pb.VariableDeclaration, index?: number): bosdyn_api_mission_util_pb.VariableDeclaration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstablishSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstablishSessionRequest): EstablishSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstablishSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstablishSessionRequest;
    static deserializeBinaryFromReader(message: EstablishSessionRequest, reader: jspb.BinaryReader): EstablishSessionRequest;
}

export namespace EstablishSessionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        inputsList: Array<bosdyn_api_mission_util_pb.VariableDeclaration.AsObject>,
    }
}

export class EstablishSessionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): EstablishSessionResponse;
    getStatus(): EstablishSessionResponse.Status;
    setStatus(value: EstablishSessionResponse.Status): EstablishSessionResponse;
    getSessionId(): string;
    setSessionId(value: string): EstablishSessionResponse;
    clearMissingLeaseResourcesList(): void;
    getMissingLeaseResourcesList(): Array<string>;
    setMissingLeaseResourcesList(value: Array<string>): EstablishSessionResponse;
    addMissingLeaseResources(value: string, index?: number): string;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): EstablishSessionResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    clearMissingInputsList(): void;
    getMissingInputsList(): Array<bosdyn_api_mission_util_pb.VariableDeclaration>;
    setMissingInputsList(value: Array<bosdyn_api_mission_util_pb.VariableDeclaration>): EstablishSessionResponse;
    addMissingInputs(value?: bosdyn_api_mission_util_pb.VariableDeclaration, index?: number): bosdyn_api_mission_util_pb.VariableDeclaration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstablishSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstablishSessionResponse): EstablishSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstablishSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstablishSessionResponse;
    static deserializeBinaryFromReader(message: EstablishSessionResponse, reader: jspb.BinaryReader): EstablishSessionResponse;
}

export namespace EstablishSessionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: EstablishSessionResponse.Status,
        sessionId: string,
        missingLeaseResourcesList: Array<string>,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        missingInputsList: Array<bosdyn_api_mission_util_pb.VariableDeclaration.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_MISSING_LEASES = 2,
    STATUS_MISSING_INPUTS = 3,
    }

}

export class TickRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): TickRequest;
    getSessionId(): string;
    setSessionId(value: string): TickRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): TickRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;
    clearInputsList(): void;
    getInputsList(): Array<bosdyn_api_mission_util_pb.KeyValue>;
    setInputsList(value: Array<bosdyn_api_mission_util_pb.KeyValue>): TickRequest;
    addInputs(value?: bosdyn_api_mission_util_pb.KeyValue, index?: number): bosdyn_api_mission_util_pb.KeyValue;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setParams(value?: bosdyn_api_service_customization_pb.DictParam): TickRequest;
    getGroupName(): string;
    setGroupName(value: string): TickRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TickRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TickRequest): TickRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TickRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TickRequest;
    static deserializeBinaryFromReader(message: TickRequest, reader: jspb.BinaryReader): TickRequest;
}

export namespace TickRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sessionId: string,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        inputsList: Array<bosdyn_api_mission_util_pb.KeyValue.AsObject>,
        params?: bosdyn_api_service_customization_pb.DictParam.AsObject,
        groupName: string,
    }
}

export class TickResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): TickResponse;
    getStatus(): TickResponse.Status;
    setStatus(value: TickResponse.Status): TickResponse;
    clearMissingLeaseResourcesList(): void;
    getMissingLeaseResourcesList(): Array<string>;
    setMissingLeaseResourcesList(value: Array<string>): TickResponse;
    addMissingLeaseResources(value: string, index?: number): string;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): TickResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    clearMissingInputsList(): void;
    getMissingInputsList(): Array<bosdyn_api_mission_util_pb.VariableDeclaration>;
    setMissingInputsList(value: Array<bosdyn_api_mission_util_pb.VariableDeclaration>): TickResponse;
    addMissingInputs(value?: bosdyn_api_mission_util_pb.VariableDeclaration, index?: number): bosdyn_api_mission_util_pb.VariableDeclaration;
    getErrorMessage(): string;
    setErrorMessage(value: string): TickResponse;

    hasCustomParamError(): boolean;
    clearCustomParamError(): void;
    getCustomParamError(): bosdyn_api_service_customization_pb.CustomParamError | undefined;
    setCustomParamError(value?: bosdyn_api_service_customization_pb.CustomParamError): TickResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TickResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TickResponse): TickResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TickResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TickResponse;
    static deserializeBinaryFromReader(message: TickResponse, reader: jspb.BinaryReader): TickResponse;
}

export namespace TickResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: TickResponse.Status,
        missingLeaseResourcesList: Array<string>,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        missingInputsList: Array<bosdyn_api_mission_util_pb.VariableDeclaration.AsObject>,
        errorMessage: string,
        customParamError?: bosdyn_api_service_customization_pb.CustomParamError.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_FAILURE = 1,
    STATUS_RUNNING = 2,
    STATUS_SUCCESS = 3,
    STATUS_INVALID_SESSION_ID = 4,
    STATUS_MISSING_LEASES = 5,
    STATUS_MISSING_INPUTS = 6,
    STATUS_CUSTOM_PARAMS_ERROR = 7,
    }

}

export class StopRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StopRequest;
    getSessionId(): string;
    setSessionId(value: string): StopRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopRequest): StopRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRequest;
    static deserializeBinaryFromReader(message: StopRequest, reader: jspb.BinaryReader): StopRequest;
}

export namespace StopRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sessionId: string,
    }
}

export class StopResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StopResponse;
    getStatus(): StopResponse.Status;
    setStatus(value: StopResponse.Status): StopResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopResponse): StopResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopResponse;
    static deserializeBinaryFromReader(message: StopResponse, reader: jspb.BinaryReader): StopResponse;
}

export namespace StopResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: StopResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_SESSION_ID = 2,
    }

}

export class TeardownSessionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): TeardownSessionRequest;
    getSessionId(): string;
    setSessionId(value: string): TeardownSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeardownSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TeardownSessionRequest): TeardownSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeardownSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeardownSessionRequest;
    static deserializeBinaryFromReader(message: TeardownSessionRequest, reader: jspb.BinaryReader): TeardownSessionRequest;
}

export namespace TeardownSessionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sessionId: string,
    }
}

export class TeardownSessionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): TeardownSessionResponse;
    getStatus(): TeardownSessionResponse.Status;
    setStatus(value: TeardownSessionResponse.Status): TeardownSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeardownSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TeardownSessionResponse): TeardownSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeardownSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeardownSessionResponse;
    static deserializeBinaryFromReader(message: TeardownSessionResponse, reader: jspb.BinaryReader): TeardownSessionResponse;
}

export namespace TeardownSessionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: TeardownSessionResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_SESSION_ID = 2,
    }

}

export class GetRemoteMissionServiceInfoRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetRemoteMissionServiceInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRemoteMissionServiceInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRemoteMissionServiceInfoRequest): GetRemoteMissionServiceInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRemoteMissionServiceInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRemoteMissionServiceInfoRequest;
    static deserializeBinaryFromReader(message: GetRemoteMissionServiceInfoRequest, reader: jspb.BinaryReader): GetRemoteMissionServiceInfoRequest;
}

export namespace GetRemoteMissionServiceInfoRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetRemoteMissionServiceInfoResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetRemoteMissionServiceInfoResponse;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam.Spec | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam.Spec): GetRemoteMissionServiceInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRemoteMissionServiceInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRemoteMissionServiceInfoResponse): GetRemoteMissionServiceInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRemoteMissionServiceInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRemoteMissionServiceInfoResponse;
    static deserializeBinaryFromReader(message: GetRemoteMissionServiceInfoResponse, reader: jspb.BinaryReader): GetRemoteMissionServiceInfoResponse;
}

export namespace GetRemoteMissionServiceInfoResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        customParams?: bosdyn_api_service_customization_pb.DictParam.Spec.AsObject,
    }
}
