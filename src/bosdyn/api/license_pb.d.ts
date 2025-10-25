// package: bosdyn.api
// file: bosdyn/api/license.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LicenseInfo extends jspb.Message { 
    getStatus(): LicenseInfo.Status;
    setStatus(value: LicenseInfo.Status): LicenseInfo;
    getId(): string;
    setId(value: string): LicenseInfo;
    getRobotSerial(): string;
    setRobotSerial(value: string): LicenseInfo;

    hasNotValidBefore(): boolean;
    clearNotValidBefore(): void;
    getNotValidBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotValidBefore(value?: google_protobuf_timestamp_pb.Timestamp): LicenseInfo;

    hasNotValidAfter(): boolean;
    clearNotValidAfter(): void;
    getNotValidAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotValidAfter(value?: google_protobuf_timestamp_pb.Timestamp): LicenseInfo;
    clearLicensedFeaturesList(): void;
    getLicensedFeaturesList(): Array<string>;
    setLicensedFeaturesList(value: Array<string>): LicenseInfo;
    addLicensedFeatures(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseInfo.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseInfo): LicenseInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseInfo;
    static deserializeBinaryFromReader(message: LicenseInfo, reader: jspb.BinaryReader): LicenseInfo;
}

export namespace LicenseInfo {
    export type AsObject = {
        status: LicenseInfo.Status,
        id: string,
        robotSerial: string,
        notValidBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        notValidAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        licensedFeaturesList: Array<string>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_VALID = 1,
    STATUS_EXPIRED = 2,
    STATUS_NOT_YET_VALID = 3,
    STATUS_MALFORMED = 4,
    STATUS_SERIAL_MISMATCH = 5,
    STATUS_NO_LICENSE = 6,
    }

}

export class GetLicenseInfoRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetLicenseInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLicenseInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLicenseInfoRequest): GetLicenseInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLicenseInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLicenseInfoRequest;
    static deserializeBinaryFromReader(message: GetLicenseInfoRequest, reader: jspb.BinaryReader): GetLicenseInfoRequest;
}

export namespace GetLicenseInfoRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetLicenseInfoResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetLicenseInfoResponse;

    hasLicense(): boolean;
    clearLicense(): void;
    getLicense(): LicenseInfo | undefined;
    setLicense(value?: LicenseInfo): GetLicenseInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLicenseInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLicenseInfoResponse): GetLicenseInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLicenseInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLicenseInfoResponse;
    static deserializeBinaryFromReader(message: GetLicenseInfoResponse, reader: jspb.BinaryReader): GetLicenseInfoResponse;
}

export namespace GetLicenseInfoResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        license?: LicenseInfo.AsObject,
    }
}

export class GetFeatureEnabledRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetFeatureEnabledRequest;
    clearFeatureCodesList(): void;
    getFeatureCodesList(): Array<string>;
    setFeatureCodesList(value: Array<string>): GetFeatureEnabledRequest;
    addFeatureCodes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeatureEnabledRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeatureEnabledRequest): GetFeatureEnabledRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeatureEnabledRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeatureEnabledRequest;
    static deserializeBinaryFromReader(message: GetFeatureEnabledRequest, reader: jspb.BinaryReader): GetFeatureEnabledRequest;
}

export namespace GetFeatureEnabledRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        featureCodesList: Array<string>,
    }
}

export class GetFeatureEnabledResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetFeatureEnabledResponse;

    getFeatureEnabledMap(): jspb.Map<string, boolean>;
    clearFeatureEnabledMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeatureEnabledResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeatureEnabledResponse): GetFeatureEnabledResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeatureEnabledResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeatureEnabledResponse;
    static deserializeBinaryFromReader(message: GetFeatureEnabledResponse, reader: jspb.BinaryReader): GetFeatureEnabledResponse;
}

export namespace GetFeatureEnabledResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,

        featureEnabledMap: Array<[string, boolean]>,
    }
}
