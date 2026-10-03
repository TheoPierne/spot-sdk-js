// package: bosdyn.api
// file: bosdyn/api/payload_registration.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_payload_pb from "../../bosdyn/api/payload_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_robot_id_pb from "../../bosdyn/api/robot_id_pb";

export class RegisterPayloadRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RegisterPayloadRequest;

    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): bosdyn_api_payload_pb.Payload | undefined;
    setPayload(value?: bosdyn_api_payload_pb.Payload): RegisterPayloadRequest;
    getPayloadSecret(): string;
    setPayloadSecret(value: string): RegisterPayloadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterPayloadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterPayloadRequest): RegisterPayloadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterPayloadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterPayloadRequest;
    static deserializeBinaryFromReader(message: RegisterPayloadRequest, reader: jspb.BinaryReader): RegisterPayloadRequest;
}

export namespace RegisterPayloadRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        payload?: bosdyn_api_payload_pb.Payload.AsObject,
        payloadSecret: string,
    }
}

export class RegisterPayloadResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RegisterPayloadResponse;
    getStatus(): RegisterPayloadResponse.Status;
    setStatus(value: RegisterPayloadResponse.Status): RegisterPayloadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterPayloadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterPayloadResponse): RegisterPayloadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterPayloadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterPayloadResponse;
    static deserializeBinaryFromReader(message: RegisterPayloadResponse, reader: jspb.BinaryReader): RegisterPayloadResponse;
}

export namespace RegisterPayloadResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: RegisterPayloadResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ALREADY_EXISTS = 2,
    }

}

export class UpdatePayloadVersionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UpdatePayloadVersionRequest;

    hasPayloadCredentials(): boolean;
    clearPayloadCredentials(): void;
    getPayloadCredentials(): PayloadCredentials | undefined;
    setPayloadCredentials(value?: PayloadCredentials): UpdatePayloadVersionRequest;
    getPayloadGuid(): string;
    setPayloadGuid(value: string): UpdatePayloadVersionRequest;
    getPayloadSecret(): string;
    setPayloadSecret(value: string): UpdatePayloadVersionRequest;

    hasUpdatedVersion(): boolean;
    clearUpdatedVersion(): void;
    getUpdatedVersion(): bosdyn_api_robot_id_pb.SoftwareVersion | undefined;
    setUpdatedVersion(value?: bosdyn_api_robot_id_pb.SoftwareVersion): UpdatePayloadVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePayloadVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePayloadVersionRequest): UpdatePayloadVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePayloadVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePayloadVersionRequest;
    static deserializeBinaryFromReader(message: UpdatePayloadVersionRequest, reader: jspb.BinaryReader): UpdatePayloadVersionRequest;
}

export namespace UpdatePayloadVersionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        payloadCredentials?: PayloadCredentials.AsObject,
        payloadGuid: string,
        payloadSecret: string,
        updatedVersion?: bosdyn_api_robot_id_pb.SoftwareVersion.AsObject,
    }
}

export class UpdatePayloadVersionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UpdatePayloadVersionResponse;
    getStatus(): UpdatePayloadVersionResponse.Status;
    setStatus(value: UpdatePayloadVersionResponse.Status): UpdatePayloadVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePayloadVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePayloadVersionResponse): UpdatePayloadVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePayloadVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePayloadVersionResponse;
    static deserializeBinaryFromReader(message: UpdatePayloadVersionResponse, reader: jspb.BinaryReader): UpdatePayloadVersionResponse;
}

export namespace UpdatePayloadVersionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: UpdatePayloadVersionResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_DOES_NOT_EXIST = 2,
    STATUS_INVALID_CREDENTIALS = 3,
    }

}

export class GetPayloadAuthTokenRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetPayloadAuthTokenRequest;

    hasPayloadCredentials(): boolean;
    clearPayloadCredentials(): void;
    getPayloadCredentials(): PayloadCredentials | undefined;
    setPayloadCredentials(value?: PayloadCredentials): GetPayloadAuthTokenRequest;
    getPayloadGuid(): string;
    setPayloadGuid(value: string): GetPayloadAuthTokenRequest;
    getPayloadSecret(): string;
    setPayloadSecret(value: string): GetPayloadAuthTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPayloadAuthTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPayloadAuthTokenRequest): GetPayloadAuthTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPayloadAuthTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPayloadAuthTokenRequest;
    static deserializeBinaryFromReader(message: GetPayloadAuthTokenRequest, reader: jspb.BinaryReader): GetPayloadAuthTokenRequest;
}

export namespace GetPayloadAuthTokenRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        payloadCredentials?: PayloadCredentials.AsObject,
        payloadGuid: string,
        payloadSecret: string,
    }
}

export class GetPayloadAuthTokenResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetPayloadAuthTokenResponse;
    getStatus(): GetPayloadAuthTokenResponse.Status;
    setStatus(value: GetPayloadAuthTokenResponse.Status): GetPayloadAuthTokenResponse;
    getToken(): string;
    setToken(value: string): GetPayloadAuthTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPayloadAuthTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPayloadAuthTokenResponse): GetPayloadAuthTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPayloadAuthTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPayloadAuthTokenResponse;
    static deserializeBinaryFromReader(message: GetPayloadAuthTokenResponse, reader: jspb.BinaryReader): GetPayloadAuthTokenResponse;
}

export namespace GetPayloadAuthTokenResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: GetPayloadAuthTokenResponse.Status,
        token: string,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_CREDENTIALS = 2,
    STATUS_PAYLOAD_NOT_AUTHORIZED = 3,
    }

}

export class UpdatePayloadAttachedRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UpdatePayloadAttachedRequest;

    hasPayloadCredentials(): boolean;
    clearPayloadCredentials(): void;
    getPayloadCredentials(): PayloadCredentials | undefined;
    setPayloadCredentials(value?: PayloadCredentials): UpdatePayloadAttachedRequest;
    getRequest(): UpdatePayloadAttachedRequest.Request;
    setRequest(value: UpdatePayloadAttachedRequest.Request): UpdatePayloadAttachedRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePayloadAttachedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePayloadAttachedRequest): UpdatePayloadAttachedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePayloadAttachedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePayloadAttachedRequest;
    static deserializeBinaryFromReader(message: UpdatePayloadAttachedRequest, reader: jspb.BinaryReader): UpdatePayloadAttachedRequest;
}

export namespace UpdatePayloadAttachedRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        payloadCredentials?: PayloadCredentials.AsObject,
        request: UpdatePayloadAttachedRequest.Request,
    }

    export enum Request {
    REQUEST_UNKNOWN = 0,
    REQUEST_ATTACH = 1,
    REQUEST_DETACH = 2,
    }

}

export class UpdatePayloadAttachedResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UpdatePayloadAttachedResponse;
    getStatus(): UpdatePayloadAttachedResponse.Status;
    setStatus(value: UpdatePayloadAttachedResponse.Status): UpdatePayloadAttachedResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePayloadAttachedResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePayloadAttachedResponse): UpdatePayloadAttachedResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePayloadAttachedResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePayloadAttachedResponse;
    static deserializeBinaryFromReader(message: UpdatePayloadAttachedResponse, reader: jspb.BinaryReader): UpdatePayloadAttachedResponse;
}

export namespace UpdatePayloadAttachedResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: UpdatePayloadAttachedResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_DOES_NOT_EXIST = 2,
    STATUS_INVALID_CREDENTIALS = 3,
    STATUS_PAYLOAD_NOT_AUTHORIZED = 4,
    }

}

export class PayloadCredentials extends jspb.Message { 
    getGuid(): string;
    setGuid(value: string): PayloadCredentials;
    getSecret(): string;
    setSecret(value: string): PayloadCredentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadCredentials.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadCredentials): PayloadCredentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadCredentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadCredentials;
    static deserializeBinaryFromReader(message: PayloadCredentials, reader: jspb.BinaryReader): PayloadCredentials;
}

export namespace PayloadCredentials {
    export type AsObject = {
        guid: string,
        secret: string,
    }
}
