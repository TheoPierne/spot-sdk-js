// package: bosdyn.api
// file: bosdyn/api/service_fault.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ServiceFaultId extends jspb.Message { 
    getFaultName(): string;
    setFaultName(value: string): ServiceFaultId;
    getServiceName(): string;
    setServiceName(value: string): ServiceFaultId;
    getPayloadGuid(): string;
    setPayloadGuid(value: string): ServiceFaultId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceFaultId.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceFaultId): ServiceFaultId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceFaultId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceFaultId;
    static deserializeBinaryFromReader(message: ServiceFaultId, reader: jspb.BinaryReader): ServiceFaultId;
}

export namespace ServiceFaultId {
    export type AsObject = {
        faultName: string,
        serviceName: string,
        payloadGuid: string,
    }
}

export class ServiceFault extends jspb.Message { 

    hasFaultId(): boolean;
    clearFaultId(): void;
    getFaultId(): ServiceFaultId | undefined;
    setFaultId(value?: ServiceFaultId): ServiceFault;
    getErrorMessage(): string;
    setErrorMessage(value: string): ServiceFault;
    clearAttributesList(): void;
    getAttributesList(): Array<string>;
    setAttributesList(value: Array<string>): ServiceFault;
    addAttributes(value: string, index?: number): string;
    getSeverity(): ServiceFault.Severity;
    setSeverity(value: ServiceFault.Severity): ServiceFault;

    hasOnsetTimestamp(): boolean;
    clearOnsetTimestamp(): void;
    getOnsetTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOnsetTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ServiceFault;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): ServiceFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceFault.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceFault): ServiceFault.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceFault, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceFault;
    static deserializeBinaryFromReader(message: ServiceFault, reader: jspb.BinaryReader): ServiceFault;
}

export namespace ServiceFault {
    export type AsObject = {
        faultId?: ServiceFaultId.AsObject,
        errorMessage: string,
        attributesList: Array<string>,
        severity: ServiceFault.Severity,
        onsetTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
    }

    export enum Severity {
    SEVERITY_UNKNOWN = 0,
    SEVERITY_INFO = 1,
    SEVERITY_WARN = 2,
    SEVERITY_CRITICAL = 3,
    }

}

export class TriggerServiceFaultRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): TriggerServiceFaultRequest;

    hasFault(): boolean;
    clearFault(): void;
    getFault(): ServiceFault | undefined;
    setFault(value?: ServiceFault): TriggerServiceFaultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TriggerServiceFaultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TriggerServiceFaultRequest): TriggerServiceFaultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TriggerServiceFaultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TriggerServiceFaultRequest;
    static deserializeBinaryFromReader(message: TriggerServiceFaultRequest, reader: jspb.BinaryReader): TriggerServiceFaultRequest;
}

export namespace TriggerServiceFaultRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        fault?: ServiceFault.AsObject,
    }
}

export class TriggerServiceFaultResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): TriggerServiceFaultResponse;
    getStatus(): TriggerServiceFaultResponse.Status;
    setStatus(value: TriggerServiceFaultResponse.Status): TriggerServiceFaultResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TriggerServiceFaultResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TriggerServiceFaultResponse): TriggerServiceFaultResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TriggerServiceFaultResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TriggerServiceFaultResponse;
    static deserializeBinaryFromReader(message: TriggerServiceFaultResponse, reader: jspb.BinaryReader): TriggerServiceFaultResponse;
}

export namespace TriggerServiceFaultResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: TriggerServiceFaultResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_FAULT_ALREADY_ACTIVE = 2,
    }

}

export class ClearServiceFaultRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ClearServiceFaultRequest;

    hasFaultId(): boolean;
    clearFaultId(): void;
    getFaultId(): ServiceFaultId | undefined;
    setFaultId(value?: ServiceFaultId): ClearServiceFaultRequest;
    getClearAllServiceFaults(): boolean;
    setClearAllServiceFaults(value: boolean): ClearServiceFaultRequest;
    getClearAllPayloadFaults(): boolean;
    setClearAllPayloadFaults(value: boolean): ClearServiceFaultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearServiceFaultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClearServiceFaultRequest): ClearServiceFaultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearServiceFaultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearServiceFaultRequest;
    static deserializeBinaryFromReader(message: ClearServiceFaultRequest, reader: jspb.BinaryReader): ClearServiceFaultRequest;
}

export namespace ClearServiceFaultRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        faultId?: ServiceFaultId.AsObject,
        clearAllServiceFaults: boolean,
        clearAllPayloadFaults: boolean,
    }
}

export class ClearServiceFaultResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ClearServiceFaultResponse;
    getStatus(): ClearServiceFaultResponse.Status;
    setStatus(value: ClearServiceFaultResponse.Status): ClearServiceFaultResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearServiceFaultResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClearServiceFaultResponse): ClearServiceFaultResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearServiceFaultResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearServiceFaultResponse;
    static deserializeBinaryFromReader(message: ClearServiceFaultResponse, reader: jspb.BinaryReader): ClearServiceFaultResponse;
}

export namespace ClearServiceFaultResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ClearServiceFaultResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_FAULT_NOT_ACTIVE = 2,
    }

}
