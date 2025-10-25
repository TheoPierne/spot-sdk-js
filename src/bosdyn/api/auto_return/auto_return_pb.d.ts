// package: bosdyn.api.auto_return
// file: bosdyn/api/auto_return/auto_return.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";

export class Params extends jspb.Message { 

    hasMobilityParams(): boolean;
    clearMobilityParams(): void;
    getMobilityParams(): google_protobuf_any_pb.Any | undefined;
    setMobilityParams(value?: google_protobuf_any_pb.Any): Params;
    getMaxDisplacement(): number;
    setMaxDisplacement(value: number): Params;

    hasMaxDuration(): boolean;
    clearMaxDuration(): void;
    getMaxDuration(): google_protobuf_duration_pb.Duration | undefined;
    setMaxDuration(value?: google_protobuf_duration_pb.Duration): Params;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Params.AsObject;
    static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Params;
    static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
    export type AsObject = {
        mobilityParams?: google_protobuf_any_pb.Any.AsObject,
        maxDisplacement: number,
        maxDuration?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ConfigureRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ConfigureRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): ConfigureRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): Params | undefined;
    setParams(value?: Params): ConfigureRequest;
    getClearBuffer(): boolean;
    setClearBuffer(value: boolean): ConfigureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigureRequest): ConfigureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigureRequest;
    static deserializeBinaryFromReader(message: ConfigureRequest, reader: jspb.BinaryReader): ConfigureRequest;
}

export namespace ConfigureRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        params?: Params.AsObject,
        clearBuffer: boolean,
    }
}

export class ConfigureResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ConfigureResponse;
    getStatus(): ConfigureResponse.Status;
    setStatus(value: ConfigureResponse.Status): ConfigureResponse;

    hasInvalidParams(): boolean;
    clearInvalidParams(): void;
    getInvalidParams(): Params | undefined;
    setInvalidParams(value?: Params): ConfigureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigureResponse): ConfigureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigureResponse;
    static deserializeBinaryFromReader(message: ConfigureResponse, reader: jspb.BinaryReader): ConfigureResponse;
}

export namespace ConfigureResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ConfigureResponse.Status,
        invalidParams?: Params.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_PARAMS = 2,
    }

}

export class GetConfigurationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetConfigurationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConfigurationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConfigurationRequest): GetConfigurationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConfigurationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConfigurationRequest;
    static deserializeBinaryFromReader(message: GetConfigurationRequest, reader: jspb.BinaryReader): GetConfigurationRequest;
}

export namespace GetConfigurationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetConfigurationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetConfigurationResponse;
    getEnabled(): boolean;
    setEnabled(value: boolean): GetConfigurationResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): ConfigureRequest | undefined;
    setRequest(value?: ConfigureRequest): GetConfigurationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConfigurationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetConfigurationResponse): GetConfigurationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConfigurationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConfigurationResponse;
    static deserializeBinaryFromReader(message: GetConfigurationResponse, reader: jspb.BinaryReader): GetConfigurationResponse;
}

export namespace GetConfigurationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        enabled: boolean,
        request?: ConfigureRequest.AsObject,
    }
}

export class StartRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StartRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): StartRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): Params | undefined;
    setParams(value?: Params): StartRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartRequest): StartRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartRequest;
    static deserializeBinaryFromReader(message: StartRequest, reader: jspb.BinaryReader): StartRequest;
}

export namespace StartRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        params?: Params.AsObject,
    }
}

export class StartResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StartResponse;
    getStatus(): StartResponse.Status;
    setStatus(value: StartResponse.Status): StartResponse;

    hasInvalidParams(): boolean;
    clearInvalidParams(): void;
    getInvalidParams(): Params | undefined;
    setInvalidParams(value?: Params): StartResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartResponse): StartResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartResponse;
    static deserializeBinaryFromReader(message: StartResponse, reader: jspb.BinaryReader): StartResponse;
}

export namespace StartResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: StartResponse.Status,
        invalidParams?: Params.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_PARAMS = 2,
    }

}
