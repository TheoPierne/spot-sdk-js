// package: bosdyn.api
// file: bosdyn/api/trajectory.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class SE2Trajectory extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<SE2TrajectoryPoint>;
    setPointsList(value: Array<SE2TrajectoryPoint>): SE2Trajectory;
    addPoints(value?: SE2TrajectoryPoint, index?: number): SE2TrajectoryPoint;

    hasReferenceTime(): boolean;
    clearReferenceTime(): void;
    getReferenceTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReferenceTime(value?: google_protobuf_timestamp_pb.Timestamp): SE2Trajectory;
    getInterpolation(): PositionalInterpolation;
    setInterpolation(value: PositionalInterpolation): SE2Trajectory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE2Trajectory.AsObject;
    static toObject(includeInstance: boolean, msg: SE2Trajectory): SE2Trajectory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE2Trajectory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE2Trajectory;
    static deserializeBinaryFromReader(message: SE2Trajectory, reader: jspb.BinaryReader): SE2Trajectory;
}

export namespace SE2Trajectory {
    export type AsObject = {
        pointsList: Array<SE2TrajectoryPoint.AsObject>,
        referenceTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        interpolation: PositionalInterpolation,
    }
}

export class SE2TrajectoryPoint extends jspb.Message { 

    hasPose(): boolean;
    clearPose(): void;
    getPose(): bosdyn_api_geometry_pb.SE2Pose | undefined;
    setPose(value?: bosdyn_api_geometry_pb.SE2Pose): SE2TrajectoryPoint;

    hasTimeSinceReference(): boolean;
    clearTimeSinceReference(): void;
    getTimeSinceReference(): google_protobuf_duration_pb.Duration | undefined;
    setTimeSinceReference(value?: google_protobuf_duration_pb.Duration): SE2TrajectoryPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE2TrajectoryPoint.AsObject;
    static toObject(includeInstance: boolean, msg: SE2TrajectoryPoint): SE2TrajectoryPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE2TrajectoryPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE2TrajectoryPoint;
    static deserializeBinaryFromReader(message: SE2TrajectoryPoint, reader: jspb.BinaryReader): SE2TrajectoryPoint;
}

export namespace SE2TrajectoryPoint {
    export type AsObject = {
        pose?: bosdyn_api_geometry_pb.SE2Pose.AsObject,
        timeSinceReference?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class SE3Trajectory extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<SE3TrajectoryPoint>;
    setPointsList(value: Array<SE3TrajectoryPoint>): SE3Trajectory;
    addPoints(value?: SE3TrajectoryPoint, index?: number): SE3TrajectoryPoint;

    hasReferenceTime(): boolean;
    clearReferenceTime(): void;
    getReferenceTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReferenceTime(value?: google_protobuf_timestamp_pb.Timestamp): SE3Trajectory;
    getPosInterpolation(): PositionalInterpolation;
    setPosInterpolation(value: PositionalInterpolation): SE3Trajectory;
    getAngInterpolation(): AngularInterpolation;
    setAngInterpolation(value: AngularInterpolation): SE3Trajectory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE3Trajectory.AsObject;
    static toObject(includeInstance: boolean, msg: SE3Trajectory): SE3Trajectory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE3Trajectory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE3Trajectory;
    static deserializeBinaryFromReader(message: SE3Trajectory, reader: jspb.BinaryReader): SE3Trajectory;
}

export namespace SE3Trajectory {
    export type AsObject = {
        pointsList: Array<SE3TrajectoryPoint.AsObject>,
        referenceTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        posInterpolation: PositionalInterpolation,
        angInterpolation: AngularInterpolation,
    }
}

export class SE3TrajectoryPoint extends jspb.Message { 

    hasPose(): boolean;
    clearPose(): void;
    getPose(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setPose(value?: bosdyn_api_geometry_pb.SE3Pose): SE3TrajectoryPoint;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): bosdyn_api_geometry_pb.SE3Velocity | undefined;
    setVelocity(value?: bosdyn_api_geometry_pb.SE3Velocity): SE3TrajectoryPoint;

    hasTimeSinceReference(): boolean;
    clearTimeSinceReference(): void;
    getTimeSinceReference(): google_protobuf_duration_pb.Duration | undefined;
    setTimeSinceReference(value?: google_protobuf_duration_pb.Duration): SE3TrajectoryPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE3TrajectoryPoint.AsObject;
    static toObject(includeInstance: boolean, msg: SE3TrajectoryPoint): SE3TrajectoryPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE3TrajectoryPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE3TrajectoryPoint;
    static deserializeBinaryFromReader(message: SE3TrajectoryPoint, reader: jspb.BinaryReader): SE3TrajectoryPoint;
}

export namespace SE3TrajectoryPoint {
    export type AsObject = {
        pose?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        velocity?: bosdyn_api_geometry_pb.SE3Velocity.AsObject,
        timeSinceReference?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class Vec3Trajectory extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<Vec3TrajectoryPoint>;
    setPointsList(value: Array<Vec3TrajectoryPoint>): Vec3Trajectory;
    addPoints(value?: Vec3TrajectoryPoint, index?: number): Vec3TrajectoryPoint;

    hasReferenceTime(): boolean;
    clearReferenceTime(): void;
    getReferenceTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReferenceTime(value?: google_protobuf_timestamp_pb.Timestamp): Vec3Trajectory;
    getPosInterpolation(): PositionalInterpolation;
    setPosInterpolation(value: PositionalInterpolation): Vec3Trajectory;

    hasStartingVelocity(): boolean;
    clearStartingVelocity(): void;
    getStartingVelocity(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setStartingVelocity(value?: bosdyn_api_geometry_pb.Vec3): Vec3Trajectory;

    hasEndingVelocity(): boolean;
    clearEndingVelocity(): void;
    getEndingVelocity(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setEndingVelocity(value?: bosdyn_api_geometry_pb.Vec3): Vec3Trajectory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vec3Trajectory.AsObject;
    static toObject(includeInstance: boolean, msg: Vec3Trajectory): Vec3Trajectory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vec3Trajectory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vec3Trajectory;
    static deserializeBinaryFromReader(message: Vec3Trajectory, reader: jspb.BinaryReader): Vec3Trajectory;
}

export namespace Vec3Trajectory {
    export type AsObject = {
        pointsList: Array<Vec3TrajectoryPoint.AsObject>,
        referenceTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        posInterpolation: PositionalInterpolation,
        startingVelocity?: bosdyn_api_geometry_pb.Vec3.AsObject,
        endingVelocity?: bosdyn_api_geometry_pb.Vec3.AsObject,
    }
}

export class Vec3TrajectoryPoint extends jspb.Message { 

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setPoint(value?: bosdyn_api_geometry_pb.Vec3): Vec3TrajectoryPoint;
    getLinearSpeed(): number;
    setLinearSpeed(value: number): Vec3TrajectoryPoint;

    hasTimeSinceReference(): boolean;
    clearTimeSinceReference(): void;
    getTimeSinceReference(): google_protobuf_duration_pb.Duration | undefined;
    setTimeSinceReference(value?: google_protobuf_duration_pb.Duration): Vec3TrajectoryPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vec3TrajectoryPoint.AsObject;
    static toObject(includeInstance: boolean, msg: Vec3TrajectoryPoint): Vec3TrajectoryPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vec3TrajectoryPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vec3TrajectoryPoint;
    static deserializeBinaryFromReader(message: Vec3TrajectoryPoint, reader: jspb.BinaryReader): Vec3TrajectoryPoint;
}

export namespace Vec3TrajectoryPoint {
    export type AsObject = {
        point?: bosdyn_api_geometry_pb.Vec3.AsObject,
        linearSpeed: number,
        timeSinceReference?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class WrenchTrajectory extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<WrenchTrajectoryPoint>;
    setPointsList(value: Array<WrenchTrajectoryPoint>): WrenchTrajectory;
    addPoints(value?: WrenchTrajectoryPoint, index?: number): WrenchTrajectoryPoint;

    hasReferenceTime(): boolean;
    clearReferenceTime(): void;
    getReferenceTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReferenceTime(value?: google_protobuf_timestamp_pb.Timestamp): WrenchTrajectory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WrenchTrajectory.AsObject;
    static toObject(includeInstance: boolean, msg: WrenchTrajectory): WrenchTrajectory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WrenchTrajectory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WrenchTrajectory;
    static deserializeBinaryFromReader(message: WrenchTrajectory, reader: jspb.BinaryReader): WrenchTrajectory;
}

export namespace WrenchTrajectory {
    export type AsObject = {
        pointsList: Array<WrenchTrajectoryPoint.AsObject>,
        referenceTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class WrenchTrajectoryPoint extends jspb.Message { 

    hasWrench(): boolean;
    clearWrench(): void;
    getWrench(): bosdyn_api_geometry_pb.Wrench | undefined;
    setWrench(value?: bosdyn_api_geometry_pb.Wrench): WrenchTrajectoryPoint;

    hasTimeSinceReference(): boolean;
    clearTimeSinceReference(): void;
    getTimeSinceReference(): google_protobuf_duration_pb.Duration | undefined;
    setTimeSinceReference(value?: google_protobuf_duration_pb.Duration): WrenchTrajectoryPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WrenchTrajectoryPoint.AsObject;
    static toObject(includeInstance: boolean, msg: WrenchTrajectoryPoint): WrenchTrajectoryPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WrenchTrajectoryPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WrenchTrajectoryPoint;
    static deserializeBinaryFromReader(message: WrenchTrajectoryPoint, reader: jspb.BinaryReader): WrenchTrajectoryPoint;
}

export namespace WrenchTrajectoryPoint {
    export type AsObject = {
        wrench?: bosdyn_api_geometry_pb.Wrench.AsObject,
        timeSinceReference?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ScalarTrajectory extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<ScalarTrajectoryPoint>;
    setPointsList(value: Array<ScalarTrajectoryPoint>): ScalarTrajectory;
    addPoints(value?: ScalarTrajectoryPoint, index?: number): ScalarTrajectoryPoint;

    hasReferenceTime(): boolean;
    clearReferenceTime(): void;
    getReferenceTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReferenceTime(value?: google_protobuf_timestamp_pb.Timestamp): ScalarTrajectory;
    getInterpolation(): PositionalInterpolation;
    setInterpolation(value: PositionalInterpolation): ScalarTrajectory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScalarTrajectory.AsObject;
    static toObject(includeInstance: boolean, msg: ScalarTrajectory): ScalarTrajectory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScalarTrajectory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScalarTrajectory;
    static deserializeBinaryFromReader(message: ScalarTrajectory, reader: jspb.BinaryReader): ScalarTrajectory;
}

export namespace ScalarTrajectory {
    export type AsObject = {
        pointsList: Array<ScalarTrajectoryPoint.AsObject>,
        referenceTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        interpolation: PositionalInterpolation,
    }
}

export class ScalarTrajectoryPoint extends jspb.Message { 
    getPoint(): number;
    setPoint(value: number): ScalarTrajectoryPoint;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): ScalarTrajectoryPoint;

    hasTimeSinceReference(): boolean;
    clearTimeSinceReference(): void;
    getTimeSinceReference(): google_protobuf_duration_pb.Duration | undefined;
    setTimeSinceReference(value?: google_protobuf_duration_pb.Duration): ScalarTrajectoryPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScalarTrajectoryPoint.AsObject;
    static toObject(includeInstance: boolean, msg: ScalarTrajectoryPoint): ScalarTrajectoryPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScalarTrajectoryPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScalarTrajectoryPoint;
    static deserializeBinaryFromReader(message: ScalarTrajectoryPoint, reader: jspb.BinaryReader): ScalarTrajectoryPoint;
}

export namespace ScalarTrajectoryPoint {
    export type AsObject = {
        point: number,
        velocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        timeSinceReference?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export enum PositionalInterpolation {
    POS_INTERP_UNKNOWN = 0,
    POS_INTERP_LINEAR = 1,
    POS_INTERP_CUBIC = 2,
}

export enum AngularInterpolation {
    ANG_INTERP_UNKNOWN = 0,
    ANG_INTERP_LINEAR = 1,
    ANG_INTERP_CUBIC_EULER = 2,
}
