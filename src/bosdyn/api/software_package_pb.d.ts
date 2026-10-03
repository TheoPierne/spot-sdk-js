// package: bosdyn.api
// file: bosdyn/api/software_package.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bosdyn_api_robot_id_pb from "../../bosdyn/api/robot_id_pb";

export class SoftwarePackageVersion extends jspb.Message { 
    getPackageName(): string;
    setPackageName(value: string): SoftwarePackageVersion;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): bosdyn_api_robot_id_pb.SoftwareVersion | undefined;
    setVersion(value?: bosdyn_api_robot_id_pb.SoftwareVersion): SoftwarePackageVersion;

    hasReleaseDate(): boolean;
    clearReleaseDate(): void;
    getReleaseDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReleaseDate(value?: google_protobuf_timestamp_pb.Timestamp): SoftwarePackageVersion;
    getBuildId(): string;
    setBuildId(value: string): SoftwarePackageVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftwarePackageVersion.AsObject;
    static toObject(includeInstance: boolean, msg: SoftwarePackageVersion): SoftwarePackageVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftwarePackageVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftwarePackageVersion;
    static deserializeBinaryFromReader(message: SoftwarePackageVersion, reader: jspb.BinaryReader): SoftwarePackageVersion;
}

export namespace SoftwarePackageVersion {
    export type AsObject = {
        packageName: string,
        version?: bosdyn_api_robot_id_pb.SoftwareVersion.AsObject,
        releaseDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        buildId: string,
    }
}

export class StagedSoftwarePackage extends jspb.Message { 

    hasVersionInfo(): boolean;
    clearVersionInfo(): void;
    getVersionInfo(): SoftwarePackageVersion | undefined;
    setVersionInfo(value?: SoftwarePackageVersion): StagedSoftwarePackage;
    getFileSize(): number;
    setFileSize(value: number): StagedSoftwarePackage;
    getUrl(): string;
    setUrl(value: string): StagedSoftwarePackage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StagedSoftwarePackage.AsObject;
    static toObject(includeInstance: boolean, msg: StagedSoftwarePackage): StagedSoftwarePackage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StagedSoftwarePackage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StagedSoftwarePackage;
    static deserializeBinaryFromReader(message: StagedSoftwarePackage, reader: jspb.BinaryReader): StagedSoftwarePackage;
}

export namespace StagedSoftwarePackage {
    export type AsObject = {
        versionInfo?: SoftwarePackageVersion.AsObject,
        fileSize: number,
        url: string,
    }
}

export class SoftwareUpdateStatus extends jspb.Message { 
    getPackageName(): string;
    setPackageName(value: string): SoftwareUpdateStatus;
    getStatus(): SoftwareUpdateStatus.Status;
    setStatus(value: SoftwareUpdateStatus.Status): SoftwareUpdateStatus;
    getErrorCode(): SoftwareUpdateStatus.ErrorCode;
    setErrorCode(value: SoftwareUpdateStatus.ErrorCode): SoftwareUpdateStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftwareUpdateStatus.AsObject;
    static toObject(includeInstance: boolean, msg: SoftwareUpdateStatus): SoftwareUpdateStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftwareUpdateStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftwareUpdateStatus;
    static deserializeBinaryFromReader(message: SoftwareUpdateStatus, reader: jspb.BinaryReader): SoftwareUpdateStatus;
}

export namespace SoftwareUpdateStatus {
    export type AsObject = {
        packageName: string,
        status: SoftwareUpdateStatus.Status,
        errorCode: SoftwareUpdateStatus.ErrorCode,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_IDLE = 1,
    STATUS_WAITING = 2,
    STATUS_DOWNLOADING = 3,
    STATUS_VALIDATING = 4,
    STATUS_INSTALLING = 5,
    STATUS_REBOOTING = 6,
    STATUS_SUCCESS = 7,
    STATUS_FAILURE = 8,
    }

    export enum ErrorCode {
    ERROR_UNINITIALIZED = 0,
    ERROR_NONE = 1,
    ERROR_UNKNOWN = 2,
    ERROR_DOWNLOAD_FAILED = 3,
    ERROR_UPDATE_REJECTED = 4,
    ERROR_VALIDATION_FAILED = 5,
    ERROR_INSUFFICIENT_STORAGE = 6,
    ERROR_FILE_NOT_FOUND = 7,
    ERROR_INSTALLATION_FAILED = 8,
    ERROR_INTERRUPTED = 9,
    ERROR_DEPENDENCY_FAILED = 10,
    ERROR_TIMEOUT = 11,
    ERROR_INSTALLATION_ALREADY_IN_PROGRESS = 12,
    }

}
