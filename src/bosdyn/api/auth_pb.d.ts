// package: bosdyn.api
// file: bosdyn/api/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";

export class GetAuthTokenRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetAuthTokenRequest;
    getUsername(): string;
    setUsername(value: string): GetAuthTokenRequest;
    getPassword(): string;
    setPassword(value: string): GetAuthTokenRequest;
    getToken(): string;
    setToken(value: string): GetAuthTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthTokenRequest): GetAuthTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthTokenRequest;
    static deserializeBinaryFromReader(message: GetAuthTokenRequest, reader: jspb.BinaryReader): GetAuthTokenRequest;
}

export namespace GetAuthTokenRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        username: string,
        password: string,
        token: string,
    }
}

export class GetAuthTokenResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetAuthTokenResponse;
    getStatus(): GetAuthTokenResponse.Status;
    setStatus(value: GetAuthTokenResponse.Status): GetAuthTokenResponse;
    getToken(): string;
    setToken(value: string): GetAuthTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthTokenResponse): GetAuthTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthTokenResponse;
    static deserializeBinaryFromReader(message: GetAuthTokenResponse, reader: jspb.BinaryReader): GetAuthTokenResponse;
}

export namespace GetAuthTokenResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: GetAuthTokenResponse.Status,
        token: string,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_LOGIN = 2,
    STATUS_INVALID_TOKEN = 3,
    STATUS_TEMPORARILY_LOCKED_OUT = 4,
    }

}
