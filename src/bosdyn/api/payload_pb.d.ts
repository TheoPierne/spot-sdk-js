// package: bosdyn.api
// file: bosdyn/api/payload.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_robot_id_pb from "../../bosdyn/api/robot_id_pb";

export class Payload extends jspb.Message { 
    getGuid(): string;
    setGuid(value: string): Payload;
    getName(): string;
    setName(value: string): Payload;
    getDescription(): string;
    setDescription(value: string): Payload;
    getSerialNumber(): string;
    setSerialNumber(value: string): Payload;
    clearLabelPrefixList(): void;
    getLabelPrefixList(): Array<string>;
    setLabelPrefixList(value: Array<string>): Payload;
    addLabelPrefix(value: string, index?: number): string;
    getIsAuthorized(): boolean;
    setIsAuthorized(value: boolean): Payload;
    getIsEnabled(): boolean;
    setIsEnabled(value: boolean): Payload;
    getIsNoncomputePayload(): boolean;
    setIsNoncomputePayload(value: boolean): Payload;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): bosdyn_api_robot_id_pb.SoftwareVersion | undefined;
    setVersion(value?: bosdyn_api_robot_id_pb.SoftwareVersion): Payload;

    hasBodyTformPayload(): boolean;
    clearBodyTformPayload(): void;
    getBodyTformPayload(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setBodyTformPayload(value?: bosdyn_api_geometry_pb.SE3Pose): Payload;

    hasMountTformPayload(): boolean;
    clearMountTformPayload(): void;
    getMountTformPayload(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setMountTformPayload(value?: bosdyn_api_geometry_pb.SE3Pose): Payload;
    getMountFrameName(): MountFrameName;
    setMountFrameName(value: MountFrameName): Payload;
    getLivenessTimeoutSecs(): number;
    setLivenessTimeoutSecs(value: number): Payload;
    getIpv4Address(): string;
    setIpv4Address(value: string): Payload;
    getLinkSpeed(): number;
    setLinkSpeed(value: number): Payload;

    hasMassVolumeProperties(): boolean;
    clearMassVolumeProperties(): void;
    getMassVolumeProperties(): PayloadMassVolumeProperties | undefined;
    setMassVolumeProperties(value?: PayloadMassVolumeProperties): Payload;
    clearPresetConfigurationsList(): void;
    getPresetConfigurationsList(): Array<PayloadPreset>;
    setPresetConfigurationsList(value: Array<PayloadPreset>): Payload;
    addPresetConfigurations(value?: PayloadPreset, index?: number): PayloadPreset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
}

export namespace Payload {
    export type AsObject = {
        guid: string,
        name: string,
        description: string,
        serialNumber: string,
        labelPrefixList: Array<string>,
        isAuthorized: boolean,
        isEnabled: boolean,
        isNoncomputePayload: boolean,
        version?: bosdyn_api_robot_id_pb.SoftwareVersion.AsObject,
        bodyTformPayload?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        mountTformPayload?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        mountFrameName: MountFrameName,
        livenessTimeoutSecs: number,
        ipv4Address: string,
        linkSpeed: number,
        massVolumeProperties?: PayloadMassVolumeProperties.AsObject,
        presetConfigurationsList: Array<PayloadPreset.AsObject>,
    }
}

export class PayloadPreset extends jspb.Message { 
    getPresetName(): string;
    setPresetName(value: string): PayloadPreset;
    getDescription(): string;
    setDescription(value: string): PayloadPreset;

    hasMountTformPayload(): boolean;
    clearMountTformPayload(): void;
    getMountTformPayload(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setMountTformPayload(value?: bosdyn_api_geometry_pb.SE3Pose): PayloadPreset;
    getMountFrameName(): MountFrameName;
    setMountFrameName(value: MountFrameName): PayloadPreset;

    hasMassVolumeProperties(): boolean;
    clearMassVolumeProperties(): void;
    getMassVolumeProperties(): PayloadMassVolumeProperties | undefined;
    setMassVolumeProperties(value?: PayloadMassVolumeProperties): PayloadPreset;
    clearLabelPrefixList(): void;
    getLabelPrefixList(): Array<string>;
    setLabelPrefixList(value: Array<string>): PayloadPreset;
    addLabelPrefix(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadPreset.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadPreset): PayloadPreset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadPreset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadPreset;
    static deserializeBinaryFromReader(message: PayloadPreset, reader: jspb.BinaryReader): PayloadPreset;
}

export namespace PayloadPreset {
    export type AsObject = {
        presetName: string,
        description: string,
        mountTformPayload?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        mountFrameName: MountFrameName,
        massVolumeProperties?: PayloadMassVolumeProperties.AsObject,
        labelPrefixList: Array<string>,
    }
}

export class PayloadMassVolumeProperties extends jspb.Message { 
    getTotalMass(): number;
    setTotalMass(value: number): PayloadMassVolumeProperties;

    hasComPosRtPayload(): boolean;
    clearComPosRtPayload(): void;
    getComPosRtPayload(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setComPosRtPayload(value?: bosdyn_api_geometry_pb.Vec3): PayloadMassVolumeProperties;

    hasMoiTensor(): boolean;
    clearMoiTensor(): void;
    getMoiTensor(): MomentOfIntertia | undefined;
    setMoiTensor(value?: MomentOfIntertia): PayloadMassVolumeProperties;
    clearBoundingBoxList(): void;
    getBoundingBoxList(): Array<bosdyn_api_geometry_pb.Box3WithFrame>;
    setBoundingBoxList(value: Array<bosdyn_api_geometry_pb.Box3WithFrame>): PayloadMassVolumeProperties;
    addBoundingBox(value?: bosdyn_api_geometry_pb.Box3WithFrame, index?: number): bosdyn_api_geometry_pb.Box3WithFrame;
    clearJointLimitsList(): void;
    getJointLimitsList(): Array<JointLimits>;
    setJointLimitsList(value: Array<JointLimits>): PayloadMassVolumeProperties;
    addJointLimits(value?: JointLimits, index?: number): JointLimits;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadMassVolumeProperties.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadMassVolumeProperties): PayloadMassVolumeProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadMassVolumeProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadMassVolumeProperties;
    static deserializeBinaryFromReader(message: PayloadMassVolumeProperties, reader: jspb.BinaryReader): PayloadMassVolumeProperties;
}

export namespace PayloadMassVolumeProperties {
    export type AsObject = {
        totalMass: number,
        comPosRtPayload?: bosdyn_api_geometry_pb.Vec3.AsObject,
        moiTensor?: MomentOfIntertia.AsObject,
        boundingBoxList: Array<bosdyn_api_geometry_pb.Box3WithFrame.AsObject>,
        jointLimitsList: Array<JointLimits.AsObject>,
    }
}

export class MomentOfIntertia extends jspb.Message { 
    getXx(): number;
    setXx(value: number): MomentOfIntertia;
    getYy(): number;
    setYy(value: number): MomentOfIntertia;
    getZz(): number;
    setZz(value: number): MomentOfIntertia;
    getXy(): number;
    setXy(value: number): MomentOfIntertia;
    getXz(): number;
    setXz(value: number): MomentOfIntertia;
    getYz(): number;
    setYz(value: number): MomentOfIntertia;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MomentOfIntertia.AsObject;
    static toObject(includeInstance: boolean, msg: MomentOfIntertia): MomentOfIntertia.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MomentOfIntertia, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MomentOfIntertia;
    static deserializeBinaryFromReader(message: MomentOfIntertia, reader: jspb.BinaryReader): MomentOfIntertia;
}

export namespace MomentOfIntertia {
    export type AsObject = {
        xx: number,
        yy: number,
        zz: number,
        xy: number,
        xz: number,
        yz: number,
    }
}

export class JointLimits extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): JointLimits;
    clearHyList(): void;
    getHyList(): Array<number>;
    setHyList(value: Array<number>): JointLimits;
    addHy(value: number, index?: number): number;
    clearHxList(): void;
    getHxList(): Array<number>;
    setHxList(value: Array<number>): JointLimits;
    addHx(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JointLimits.AsObject;
    static toObject(includeInstance: boolean, msg: JointLimits): JointLimits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JointLimits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JointLimits;
    static deserializeBinaryFromReader(message: JointLimits, reader: jspb.BinaryReader): JointLimits;
}

export namespace JointLimits {
    export type AsObject = {
        label: string,
        hyList: Array<number>,
        hxList: Array<number>,
    }
}

export class ListPayloadsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListPayloadsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPayloadsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPayloadsRequest): ListPayloadsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPayloadsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPayloadsRequest;
    static deserializeBinaryFromReader(message: ListPayloadsRequest, reader: jspb.BinaryReader): ListPayloadsRequest;
}

export namespace ListPayloadsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListPayloadsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListPayloadsResponse;
    clearPayloadsList(): void;
    getPayloadsList(): Array<Payload>;
    setPayloadsList(value: Array<Payload>): ListPayloadsResponse;
    addPayloads(value?: Payload, index?: number): Payload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPayloadsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPayloadsResponse): ListPayloadsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPayloadsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPayloadsResponse;
    static deserializeBinaryFromReader(message: ListPayloadsResponse, reader: jspb.BinaryReader): ListPayloadsResponse;
}

export namespace ListPayloadsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        payloadsList: Array<Payload.AsObject>,
    }
}

export enum MountFrameName {
    MOUNT_FRAME_UNKNOWN = 0,
    MOUNT_FRAME_BODY_PAYLOAD = 1,
    MOUNT_FRAME_GRIPPER_PAYLOAD = 2,
    MOUNT_FRAME_WR1 = 3,
}
