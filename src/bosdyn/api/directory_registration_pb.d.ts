// package: bosdyn.api
// file: bosdyn/api/directory_registration.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_directory_pb from "../../bosdyn/api/directory_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";

export class RegisterServiceRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RegisterServiceRequest;

    hasEndpoint(): boolean;
    clearEndpoint(): void;
    getEndpoint(): bosdyn_api_directory_pb.Endpoint | undefined;
    setEndpoint(value?: bosdyn_api_directory_pb.Endpoint): RegisterServiceRequest;

    hasServiceEntry(): boolean;
    clearServiceEntry(): void;
    getServiceEntry(): bosdyn_api_directory_pb.ServiceEntry | undefined;
    setServiceEntry(value?: bosdyn_api_directory_pb.ServiceEntry): RegisterServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterServiceRequest): RegisterServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterServiceRequest;
    static deserializeBinaryFromReader(message: RegisterServiceRequest, reader: jspb.BinaryReader): RegisterServiceRequest;
}

export namespace RegisterServiceRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        endpoint?: bosdyn_api_directory_pb.Endpoint.AsObject,
        serviceEntry?: bosdyn_api_directory_pb.ServiceEntry.AsObject,
    }
}

export class RegisterServiceResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RegisterServiceResponse;
    getStatus(): RegisterServiceResponse.Status;
    setStatus(value: RegisterServiceResponse.Status): RegisterServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterServiceResponse): RegisterServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterServiceResponse;
    static deserializeBinaryFromReader(message: RegisterServiceResponse, reader: jspb.BinaryReader): RegisterServiceResponse;
}

export namespace RegisterServiceResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: RegisterServiceResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ALREADY_EXISTS = 2,
    }

}

export class UnregisterServiceRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UnregisterServiceRequest;
    getServiceName(): string;
    setServiceName(value: string): UnregisterServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnregisterServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnregisterServiceRequest): UnregisterServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnregisterServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnregisterServiceRequest;
    static deserializeBinaryFromReader(message: UnregisterServiceRequest, reader: jspb.BinaryReader): UnregisterServiceRequest;
}

export namespace UnregisterServiceRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        serviceName: string,
    }
}

export class UnregisterServiceResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UnregisterServiceResponse;
    getStatus(): UnregisterServiceResponse.Status;
    setStatus(value: UnregisterServiceResponse.Status): UnregisterServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnregisterServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnregisterServiceResponse): UnregisterServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnregisterServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnregisterServiceResponse;
    static deserializeBinaryFromReader(message: UnregisterServiceResponse, reader: jspb.BinaryReader): UnregisterServiceResponse;
}

export namespace UnregisterServiceResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: UnregisterServiceResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NONEXISTENT_SERVICE = 2,
    }

}

export class UpdateServiceRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UpdateServiceRequest;

    hasEndpoint(): boolean;
    clearEndpoint(): void;
    getEndpoint(): bosdyn_api_directory_pb.Endpoint | undefined;
    setEndpoint(value?: bosdyn_api_directory_pb.Endpoint): UpdateServiceRequest;

    hasServiceEntry(): boolean;
    clearServiceEntry(): void;
    getServiceEntry(): bosdyn_api_directory_pb.ServiceEntry | undefined;
    setServiceEntry(value?: bosdyn_api_directory_pb.ServiceEntry): UpdateServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServiceRequest): UpdateServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServiceRequest;
    static deserializeBinaryFromReader(message: UpdateServiceRequest, reader: jspb.BinaryReader): UpdateServiceRequest;
}

export namespace UpdateServiceRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        endpoint?: bosdyn_api_directory_pb.Endpoint.AsObject,
        serviceEntry?: bosdyn_api_directory_pb.ServiceEntry.AsObject,
    }
}

export class UpdateServiceResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UpdateServiceResponse;
    getStatus(): UpdateServiceResponse.Status;
    setStatus(value: UpdateServiceResponse.Status): UpdateServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServiceResponse): UpdateServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServiceResponse;
    static deserializeBinaryFromReader(message: UpdateServiceResponse, reader: jspb.BinaryReader): UpdateServiceResponse;
}

export namespace UpdateServiceResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: UpdateServiceResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NONEXISTENT_SERVICE = 2,
    }

}
