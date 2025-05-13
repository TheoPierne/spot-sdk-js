// package: bosdyn.api
// file: bosdyn/api/header.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class RequestHeader extends jspb.Message { 

    hasRequestTimestamp(): boolean;
    clearRequestTimestamp(): void;
    getRequestTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRequestTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): RequestHeader;
    getClientName(): string;
    setClientName(value: string): RequestHeader;
    getDisableRpcLogging(): boolean;
    setDisableRpcLogging(value: boolean): RequestHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestHeader.AsObject;
    static toObject(includeInstance: boolean, msg: RequestHeader): RequestHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestHeader;
    static deserializeBinaryFromReader(message: RequestHeader, reader: jspb.BinaryReader): RequestHeader;
}

export namespace RequestHeader {
    export type AsObject = {
        requestTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clientName: string,
        disableRpcLogging: boolean,
    }
}

export class CommonError extends jspb.Message { 
    getCode(): CommonError.Code;
    setCode(value: CommonError.Code): CommonError;
    getMessage(): string;
    setMessage(value: string): CommonError;

    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_any_pb.Any | undefined;
    setData(value?: google_protobuf_any_pb.Any): CommonError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommonError.AsObject;
    static toObject(includeInstance: boolean, msg: CommonError): CommonError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommonError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommonError;
    static deserializeBinaryFromReader(message: CommonError, reader: jspb.BinaryReader): CommonError;
}

export namespace CommonError {
    export type AsObject = {
        code: CommonError.Code,
        message: string,
        data?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum Code {
    CODE_UNSPECIFIED = 0,
    CODE_OK = 1,
    CODE_INTERNAL_SERVER_ERROR = 2,
    CODE_INVALID_REQUEST = 3,
    }

}

export class ResponseHeader extends jspb.Message { 

    hasRequestHeader(): boolean;
    clearRequestHeader(): void;
    getRequestHeader(): RequestHeader | undefined;
    setRequestHeader(value?: RequestHeader): ResponseHeader;

    hasRequestReceivedTimestamp(): boolean;
    clearRequestReceivedTimestamp(): void;
    getRequestReceivedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRequestReceivedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ResponseHeader;

    hasResponseTimestamp(): boolean;
    clearResponseTimestamp(): void;
    getResponseTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setResponseTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ResponseHeader;

    hasError(): boolean;
    clearError(): void;
    getError(): CommonError | undefined;
    setError(value?: CommonError): ResponseHeader;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): google_protobuf_any_pb.Any | undefined;
    setRequest(value?: google_protobuf_any_pb.Any): ResponseHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseHeader.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseHeader): ResponseHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseHeader;
    static deserializeBinaryFromReader(message: ResponseHeader, reader: jspb.BinaryReader): ResponseHeader;
}

export namespace ResponseHeader {
    export type AsObject = {
        requestHeader?: RequestHeader.AsObject,
        requestReceivedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        responseTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        error?: CommonError.AsObject,
        request?: google_protobuf_any_pb.Any.AsObject,
    }
}
