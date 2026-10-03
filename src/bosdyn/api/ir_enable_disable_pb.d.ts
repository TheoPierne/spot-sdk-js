// package: bosdyn.api
// file: bosdyn/api/ir_enable_disable.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";

export class IREnableDisableRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): IREnableDisableRequest;
    getRequest(): IREnableDisableRequest.Request;
    setRequest(value: IREnableDisableRequest.Request): IREnableDisableRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IREnableDisableRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IREnableDisableRequest): IREnableDisableRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IREnableDisableRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IREnableDisableRequest;
    static deserializeBinaryFromReader(message: IREnableDisableRequest, reader: jspb.BinaryReader): IREnableDisableRequest;
}

export namespace IREnableDisableRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        request: IREnableDisableRequest.Request,
    }

    export enum Request {
    REQUEST_UNKNOWN = 0,
    REQUEST_OFF = 1,
    REQUEST_ON = 2,
    }

}

export class IREnableDisableResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): IREnableDisableResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IREnableDisableResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IREnableDisableResponse): IREnableDisableResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IREnableDisableResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IREnableDisableResponse;
    static deserializeBinaryFromReader(message: IREnableDisableResponse, reader: jspb.BinaryReader): IREnableDisableResponse;
}

export namespace IREnableDisableResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
