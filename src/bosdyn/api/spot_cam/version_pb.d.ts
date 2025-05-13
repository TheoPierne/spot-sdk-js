// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/version.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_robot_id_pb from "../../../bosdyn/api/robot_id_pb";

export class GetSoftwareVersionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetSoftwareVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSoftwareVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSoftwareVersionRequest): GetSoftwareVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSoftwareVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSoftwareVersionRequest;
    static deserializeBinaryFromReader(message: GetSoftwareVersionRequest, reader: jspb.BinaryReader): GetSoftwareVersionRequest;
}

export namespace GetSoftwareVersionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetSoftwareVersionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetSoftwareVersionResponse;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): bosdyn_api_robot_id_pb.SoftwareVersion | undefined;
    setVersion(value?: bosdyn_api_robot_id_pb.SoftwareVersion): GetSoftwareVersionResponse;
    getDetail(): string;
    setDetail(value: string): GetSoftwareVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSoftwareVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSoftwareVersionResponse): GetSoftwareVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSoftwareVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSoftwareVersionResponse;
    static deserializeBinaryFromReader(message: GetSoftwareVersionResponse, reader: jspb.BinaryReader): GetSoftwareVersionResponse;
}

export namespace GetSoftwareVersionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        version?: bosdyn_api_robot_id_pb.SoftwareVersion.AsObject,
        detail: string,
    }
}
