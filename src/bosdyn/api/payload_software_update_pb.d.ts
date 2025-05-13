// package: bosdyn.api
// file: bosdyn/api/payload_software_update.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_software_package_pb from "../../bosdyn/api/software_package_pb";

export class SendCurrentVersionInfoRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SendCurrentVersionInfoRequest;

    hasPackageVersion(): boolean;
    clearPackageVersion(): void;
    getPackageVersion(): bosdyn_api_software_package_pb.SoftwarePackageVersion | undefined;
    setPackageVersion(value?: bosdyn_api_software_package_pb.SoftwarePackageVersion): SendCurrentVersionInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendCurrentVersionInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendCurrentVersionInfoRequest): SendCurrentVersionInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendCurrentVersionInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendCurrentVersionInfoRequest;
    static deserializeBinaryFromReader(message: SendCurrentVersionInfoRequest, reader: jspb.BinaryReader): SendCurrentVersionInfoRequest;
}

export namespace SendCurrentVersionInfoRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        packageVersion?: bosdyn_api_software_package_pb.SoftwarePackageVersion.AsObject,
    }
}

export class SendCurrentVersionInfoResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SendCurrentVersionInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendCurrentVersionInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendCurrentVersionInfoResponse): SendCurrentVersionInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendCurrentVersionInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendCurrentVersionInfoResponse;
    static deserializeBinaryFromReader(message: SendCurrentVersionInfoResponse, reader: jspb.BinaryReader): SendCurrentVersionInfoResponse;
}

export namespace SendCurrentVersionInfoResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetAvailableSoftwareUpdatesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetAvailableSoftwareUpdatesRequest;
    clearPackageNamesList(): void;
    getPackageNamesList(): Array<string>;
    setPackageNamesList(value: Array<string>): GetAvailableSoftwareUpdatesRequest;
    addPackageNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAvailableSoftwareUpdatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAvailableSoftwareUpdatesRequest): GetAvailableSoftwareUpdatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAvailableSoftwareUpdatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAvailableSoftwareUpdatesRequest;
    static deserializeBinaryFromReader(message: GetAvailableSoftwareUpdatesRequest, reader: jspb.BinaryReader): GetAvailableSoftwareUpdatesRequest;
}

export namespace GetAvailableSoftwareUpdatesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        packageNamesList: Array<string>,
    }
}

export class GetAvailableSoftwareUpdatesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetAvailableSoftwareUpdatesResponse;
    clearStagedPackagesList(): void;
    getStagedPackagesList(): Array<bosdyn_api_software_package_pb.StagedSoftwarePackage>;
    setStagedPackagesList(value: Array<bosdyn_api_software_package_pb.StagedSoftwarePackage>): GetAvailableSoftwareUpdatesResponse;
    addStagedPackages(value?: bosdyn_api_software_package_pb.StagedSoftwarePackage, index?: number): bosdyn_api_software_package_pb.StagedSoftwarePackage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAvailableSoftwareUpdatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAvailableSoftwareUpdatesResponse): GetAvailableSoftwareUpdatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAvailableSoftwareUpdatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAvailableSoftwareUpdatesResponse;
    static deserializeBinaryFromReader(message: GetAvailableSoftwareUpdatesResponse, reader: jspb.BinaryReader): GetAvailableSoftwareUpdatesResponse;
}

export namespace GetAvailableSoftwareUpdatesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        stagedPackagesList: Array<bosdyn_api_software_package_pb.StagedSoftwarePackage.AsObject>,
    }
}

export class SendSoftwareUpdateStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SendSoftwareUpdateStatusRequest;

    hasUpdateStatus(): boolean;
    clearUpdateStatus(): void;
    getUpdateStatus(): bosdyn_api_software_package_pb.SoftwareUpdateStatus | undefined;
    setUpdateStatus(value?: bosdyn_api_software_package_pb.SoftwareUpdateStatus): SendSoftwareUpdateStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendSoftwareUpdateStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendSoftwareUpdateStatusRequest): SendSoftwareUpdateStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendSoftwareUpdateStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendSoftwareUpdateStatusRequest;
    static deserializeBinaryFromReader(message: SendSoftwareUpdateStatusRequest, reader: jspb.BinaryReader): SendSoftwareUpdateStatusRequest;
}

export namespace SendSoftwareUpdateStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        updateStatus?: bosdyn_api_software_package_pb.SoftwareUpdateStatus.AsObject,
    }
}

export class SendSoftwareUpdateStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SendSoftwareUpdateStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendSoftwareUpdateStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendSoftwareUpdateStatusResponse): SendSoftwareUpdateStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendSoftwareUpdateStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendSoftwareUpdateStatusResponse;
    static deserializeBinaryFromReader(message: SendSoftwareUpdateStatusResponse, reader: jspb.BinaryReader): SendSoftwareUpdateStatusResponse;
}

export namespace SendSoftwareUpdateStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
