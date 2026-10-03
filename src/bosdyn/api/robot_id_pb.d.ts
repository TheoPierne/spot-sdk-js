// package: bosdyn.api
// file: bosdyn/api/robot_id.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_parameter_pb from "../../bosdyn/api/parameter_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class RobotId extends jspb.Message { 
    getSerialNumber(): string;
    setSerialNumber(value: string): RobotId;
    getSpecies(): string;
    setSpecies(value: string): RobotId;
    getVersion(): string;
    setVersion(value: string): RobotId;

    hasSoftwareRelease(): boolean;
    clearSoftwareRelease(): void;
    getSoftwareRelease(): RobotSoftwareRelease | undefined;
    setSoftwareRelease(value?: RobotSoftwareRelease): RobotId;
    getNickname(): string;
    setNickname(value: string): RobotId;
    getComputerSerialNumber(): string;
    setComputerSerialNumber(value: string): RobotId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotId.AsObject;
    static toObject(includeInstance: boolean, msg: RobotId): RobotId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotId;
    static deserializeBinaryFromReader(message: RobotId, reader: jspb.BinaryReader): RobotId;
}

export namespace RobotId {
    export type AsObject = {
        serialNumber: string,
        species: string,
        version: string,
        softwareRelease?: RobotSoftwareRelease.AsObject,
        nickname: string,
        computerSerialNumber: string,
    }
}

export class SoftwareVersion extends jspb.Message { 
    getMajorVersion(): number;
    setMajorVersion(value: number): SoftwareVersion;
    getMinorVersion(): number;
    setMinorVersion(value: number): SoftwareVersion;
    getPatchLevel(): number;
    setPatchLevel(value: number): SoftwareVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftwareVersion.AsObject;
    static toObject(includeInstance: boolean, msg: SoftwareVersion): SoftwareVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftwareVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftwareVersion;
    static deserializeBinaryFromReader(message: SoftwareVersion, reader: jspb.BinaryReader): SoftwareVersion;
}

export namespace SoftwareVersion {
    export type AsObject = {
        majorVersion: number,
        minorVersion: number,
        patchLevel: number,
    }
}

export class RobotSoftwareRelease extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): SoftwareVersion | undefined;
    setVersion(value?: SoftwareVersion): RobotSoftwareRelease;
    getName(): string;
    setName(value: string): RobotSoftwareRelease;
    getType(): string;
    setType(value: string): RobotSoftwareRelease;

    hasChangesetDate(): boolean;
    clearChangesetDate(): void;
    getChangesetDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangesetDate(value?: google_protobuf_timestamp_pb.Timestamp): RobotSoftwareRelease;
    getChangeset(): string;
    setChangeset(value: string): RobotSoftwareRelease;
    getApiVersion(): string;
    setApiVersion(value: string): RobotSoftwareRelease;
    getBuildInformation(): string;
    setBuildInformation(value: string): RobotSoftwareRelease;

    hasInstallDate(): boolean;
    clearInstallDate(): void;
    getInstallDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setInstallDate(value?: google_protobuf_timestamp_pb.Timestamp): RobotSoftwareRelease;
    clearParametersList(): void;
    getParametersList(): Array<bosdyn_api_parameter_pb.Parameter>;
    setParametersList(value: Array<bosdyn_api_parameter_pb.Parameter>): RobotSoftwareRelease;
    addParameters(value?: bosdyn_api_parameter_pb.Parameter, index?: number): bosdyn_api_parameter_pb.Parameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotSoftwareRelease.AsObject;
    static toObject(includeInstance: boolean, msg: RobotSoftwareRelease): RobotSoftwareRelease.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotSoftwareRelease, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotSoftwareRelease;
    static deserializeBinaryFromReader(message: RobotSoftwareRelease, reader: jspb.BinaryReader): RobotSoftwareRelease;
}

export namespace RobotSoftwareRelease {
    export type AsObject = {
        version?: SoftwareVersion.AsObject,
        name: string,
        type: string,
        changesetDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        changeset: string,
        apiVersion: string,
        buildInformation: string,
        installDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        parametersList: Array<bosdyn_api_parameter_pb.Parameter.AsObject>,
    }
}

export class RobotIdRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RobotIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RobotIdRequest): RobotIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotIdRequest;
    static deserializeBinaryFromReader(message: RobotIdRequest, reader: jspb.BinaryReader): RobotIdRequest;
}

export namespace RobotIdRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class RobotIdResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RobotIdResponse;

    hasRobotId(): boolean;
    clearRobotId(): void;
    getRobotId(): RobotId | undefined;
    setRobotId(value?: RobotId): RobotIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RobotIdResponse): RobotIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotIdResponse;
    static deserializeBinaryFromReader(message: RobotIdResponse, reader: jspb.BinaryReader): RobotIdResponse;
}

export namespace RobotIdResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        robotId?: RobotId.AsObject,
    }
}
