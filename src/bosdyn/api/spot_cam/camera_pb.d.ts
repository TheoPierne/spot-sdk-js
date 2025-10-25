// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/camera.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";

export class Camera extends jspb.Message { 
    getName(): string;
    setName(value: string): Camera;

    hasResolution(): boolean;
    clearResolution(): void;
    getResolution(): bosdyn_api_geometry_pb.Vec2 | undefined;
    setResolution(value?: bosdyn_api_geometry_pb.Vec2): Camera;
    getBaseFrameName(): string;
    setBaseFrameName(value: string): Camera;

    hasBaseTfromSensor(): boolean;
    clearBaseTfromSensor(): void;
    getBaseTfromSensor(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setBaseTfromSensor(value?: bosdyn_api_geometry_pb.SE3Pose): Camera;

    hasBaseTformSensor(): boolean;
    clearBaseTformSensor(): void;
    getBaseTformSensor(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setBaseTformSensor(value?: bosdyn_api_geometry_pb.SE3Pose): Camera;

    hasPinhole(): boolean;
    clearPinhole(): void;
    getPinhole(): Camera.PinholeIntrinsics | undefined;
    setPinhole(value?: Camera.PinholeIntrinsics): Camera;

    hasSpherical(): boolean;
    clearSpherical(): void;
    getSpherical(): Camera.SphericalLimits | undefined;
    setSpherical(value?: Camera.SphericalLimits): Camera;

    getIntrinsicsCase(): Camera.IntrinsicsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Camera.AsObject;
    static toObject(includeInstance: boolean, msg: Camera): Camera.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Camera, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Camera;
    static deserializeBinaryFromReader(message: Camera, reader: jspb.BinaryReader): Camera;
}

export namespace Camera {
    export type AsObject = {
        name: string,
        resolution?: bosdyn_api_geometry_pb.Vec2.AsObject,
        baseFrameName: string,
        baseTfromSensor?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        baseTformSensor?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        pinhole?: Camera.PinholeIntrinsics.AsObject,
        spherical?: Camera.SphericalLimits.AsObject,
    }


    export class PinholeIntrinsics extends jspb.Message { 

        hasFocalLength(): boolean;
        clearFocalLength(): void;
        getFocalLength(): bosdyn_api_geometry_pb.Vec2 | undefined;
        setFocalLength(value?: bosdyn_api_geometry_pb.Vec2): PinholeIntrinsics;

        hasCenterPoint(): boolean;
        clearCenterPoint(): void;
        getCenterPoint(): bosdyn_api_geometry_pb.Vec2 | undefined;
        setCenterPoint(value?: bosdyn_api_geometry_pb.Vec2): PinholeIntrinsics;
        getK1(): number;
        setK1(value: number): PinholeIntrinsics;
        getK2(): number;
        setK2(value: number): PinholeIntrinsics;
        getK3(): number;
        setK3(value: number): PinholeIntrinsics;
        getK4(): number;
        setK4(value: number): PinholeIntrinsics;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PinholeIntrinsics.AsObject;
        static toObject(includeInstance: boolean, msg: PinholeIntrinsics): PinholeIntrinsics.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PinholeIntrinsics, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PinholeIntrinsics;
        static deserializeBinaryFromReader(message: PinholeIntrinsics, reader: jspb.BinaryReader): PinholeIntrinsics;
    }

    export namespace PinholeIntrinsics {
        export type AsObject = {
            focalLength?: bosdyn_api_geometry_pb.Vec2.AsObject,
            centerPoint?: bosdyn_api_geometry_pb.Vec2.AsObject,
            k1: number,
            k2: number,
            k3: number,
            k4: number,
        }
    }

    export class SphericalLimits extends jspb.Message { 

        hasMinAngle(): boolean;
        clearMinAngle(): void;
        getMinAngle(): bosdyn_api_geometry_pb.Vec2 | undefined;
        setMinAngle(value?: bosdyn_api_geometry_pb.Vec2): SphericalLimits;

        hasMaxAngle(): boolean;
        clearMaxAngle(): void;
        getMaxAngle(): bosdyn_api_geometry_pb.Vec2 | undefined;
        setMaxAngle(value?: bosdyn_api_geometry_pb.Vec2): SphericalLimits;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SphericalLimits.AsObject;
        static toObject(includeInstance: boolean, msg: SphericalLimits): SphericalLimits.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SphericalLimits, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SphericalLimits;
        static deserializeBinaryFromReader(message: SphericalLimits, reader: jspb.BinaryReader): SphericalLimits;
    }

    export namespace SphericalLimits {
        export type AsObject = {
            minAngle?: bosdyn_api_geometry_pb.Vec2.AsObject,
            maxAngle?: bosdyn_api_geometry_pb.Vec2.AsObject,
        }
    }


    export enum IntrinsicsCase {
        INTRINSICS_NOT_SET = 0,
        PINHOLE = 5,
        SPHERICAL = 6,
    }

}
