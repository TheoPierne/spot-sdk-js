// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/LED.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";

export class GetLEDBrightnessRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetLEDBrightnessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLEDBrightnessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLEDBrightnessRequest): GetLEDBrightnessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLEDBrightnessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLEDBrightnessRequest;
    static deserializeBinaryFromReader(message: GetLEDBrightnessRequest, reader: jspb.BinaryReader): GetLEDBrightnessRequest;
}

export namespace GetLEDBrightnessRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetLEDBrightnessResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetLEDBrightnessResponse;
    clearBrightnessesList(): void;
    getBrightnessesList(): Array<number>;
    setBrightnessesList(value: Array<number>): GetLEDBrightnessResponse;
    addBrightnesses(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLEDBrightnessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLEDBrightnessResponse): GetLEDBrightnessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLEDBrightnessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLEDBrightnessResponse;
    static deserializeBinaryFromReader(message: GetLEDBrightnessResponse, reader: jspb.BinaryReader): GetLEDBrightnessResponse;
}

export namespace GetLEDBrightnessResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        brightnessesList: Array<number>,
    }
}

export class SetLEDBrightnessRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetLEDBrightnessRequest;

    getBrightnessesMap(): jspb.Map<number, number>;
    clearBrightnessesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetLEDBrightnessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetLEDBrightnessRequest): SetLEDBrightnessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetLEDBrightnessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetLEDBrightnessRequest;
    static deserializeBinaryFromReader(message: SetLEDBrightnessRequest, reader: jspb.BinaryReader): SetLEDBrightnessRequest;
}

export namespace SetLEDBrightnessRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,

        brightnessesMap: Array<[number, number]>,
    }
}

export class SetLEDBrightnessResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetLEDBrightnessResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetLEDBrightnessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetLEDBrightnessResponse): SetLEDBrightnessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetLEDBrightnessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetLEDBrightnessResponse;
    static deserializeBinaryFromReader(message: SetLEDBrightnessResponse, reader: jspb.BinaryReader): SetLEDBrightnessResponse;
}

export namespace SetLEDBrightnessResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
