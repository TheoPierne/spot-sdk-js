// package: bosdyn.api
// file: bosdyn/api/geometry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Vec2 extends jspb.Message { 
    getX(): number;
    setX(value: number): Vec2;
    getY(): number;
    setY(value: number): Vec2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vec2.AsObject;
    static toObject(includeInstance: boolean, msg: Vec2): Vec2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vec2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vec2;
    static deserializeBinaryFromReader(message: Vec2, reader: jspb.BinaryReader): Vec2;
}

export namespace Vec2 {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class Vec3 extends jspb.Message { 
    getX(): number;
    setX(value: number): Vec3;
    getY(): number;
    setY(value: number): Vec3;
    getZ(): number;
    setZ(value: number): Vec3;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vec3.AsObject;
    static toObject(includeInstance: boolean, msg: Vec3): Vec3.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vec3, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vec3;
    static deserializeBinaryFromReader(message: Vec3, reader: jspb.BinaryReader): Vec3;
}

export namespace Vec3 {
    export type AsObject = {
        x: number,
        y: number,
        z: number,
    }
}

export class CylindricalCoordinate extends jspb.Message { 
    getR(): number;
    setR(value: number): CylindricalCoordinate;
    getTheta(): number;
    setTheta(value: number): CylindricalCoordinate;
    getZ(): number;
    setZ(value: number): CylindricalCoordinate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CylindricalCoordinate.AsObject;
    static toObject(includeInstance: boolean, msg: CylindricalCoordinate): CylindricalCoordinate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CylindricalCoordinate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CylindricalCoordinate;
    static deserializeBinaryFromReader(message: CylindricalCoordinate, reader: jspb.BinaryReader): CylindricalCoordinate;
}

export namespace CylindricalCoordinate {
    export type AsObject = {
        r: number,
        theta: number,
        z: number,
    }
}

export class Quaternion extends jspb.Message { 
    getX(): number;
    setX(value: number): Quaternion;
    getY(): number;
    setY(value: number): Quaternion;
    getZ(): number;
    setZ(value: number): Quaternion;
    getW(): number;
    setW(value: number): Quaternion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quaternion.AsObject;
    static toObject(includeInstance: boolean, msg: Quaternion): Quaternion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quaternion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quaternion;
    static deserializeBinaryFromReader(message: Quaternion, reader: jspb.BinaryReader): Quaternion;
}

export namespace Quaternion {
    export type AsObject = {
        x: number,
        y: number,
        z: number,
        w: number,
    }
}

export class Plane extends jspb.Message { 

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Vec3 | undefined;
    setPoint(value?: Vec3): Plane;

    hasNormal(): boolean;
    clearNormal(): void;
    getNormal(): Vec3 | undefined;
    setNormal(value?: Vec3): Plane;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Plane.AsObject;
    static toObject(includeInstance: boolean, msg: Plane): Plane.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Plane, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Plane;
    static deserializeBinaryFromReader(message: Plane, reader: jspb.BinaryReader): Plane;
}

export namespace Plane {
    export type AsObject = {
        point?: Vec3.AsObject,
        normal?: Vec3.AsObject,
    }
}

export class Quad extends jspb.Message { 

    hasPose(): boolean;
    clearPose(): void;
    getPose(): SE3Pose | undefined;
    setPose(value?: SE3Pose): Quad;
    getSize(): number;
    setSize(value: number): Quad;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quad.AsObject;
    static toObject(includeInstance: boolean, msg: Quad): Quad.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quad, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quad;
    static deserializeBinaryFromReader(message: Quad, reader: jspb.BinaryReader): Quad;
}

export namespace Quad {
    export type AsObject = {
        pose?: SE3Pose.AsObject,
        size: number,
    }
}

export class Ray extends jspb.Message { 

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): Vec3 | undefined;
    setOrigin(value?: Vec3): Ray;

    hasDirection(): boolean;
    clearDirection(): void;
    getDirection(): Vec3 | undefined;
    setDirection(value?: Vec3): Ray;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ray.AsObject;
    static toObject(includeInstance: boolean, msg: Ray): Ray.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ray, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ray;
    static deserializeBinaryFromReader(message: Ray, reader: jspb.BinaryReader): Ray;
}

export namespace Ray {
    export type AsObject = {
        origin?: Vec3.AsObject,
        direction?: Vec3.AsObject,
    }
}

export class SE2Pose extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): Vec2 | undefined;
    setPosition(value?: Vec2): SE2Pose;
    getAngle(): number;
    setAngle(value: number): SE2Pose;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE2Pose.AsObject;
    static toObject(includeInstance: boolean, msg: SE2Pose): SE2Pose.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE2Pose, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE2Pose;
    static deserializeBinaryFromReader(message: SE2Pose, reader: jspb.BinaryReader): SE2Pose;
}

export namespace SE2Pose {
    export type AsObject = {
        position?: Vec2.AsObject,
        angle: number,
    }
}

export class SE2Velocity extends jspb.Message { 

    hasLinear(): boolean;
    clearLinear(): void;
    getLinear(): Vec2 | undefined;
    setLinear(value?: Vec2): SE2Velocity;
    getAngular(): number;
    setAngular(value: number): SE2Velocity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE2Velocity.AsObject;
    static toObject(includeInstance: boolean, msg: SE2Velocity): SE2Velocity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE2Velocity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE2Velocity;
    static deserializeBinaryFromReader(message: SE2Velocity, reader: jspb.BinaryReader): SE2Velocity;
}

export namespace SE2Velocity {
    export type AsObject = {
        linear?: Vec2.AsObject,
        angular: number,
    }
}

export class SE2VelocityLimit extends jspb.Message { 

    hasMaxVel(): boolean;
    clearMaxVel(): void;
    getMaxVel(): SE2Velocity | undefined;
    setMaxVel(value?: SE2Velocity): SE2VelocityLimit;

    hasMinVel(): boolean;
    clearMinVel(): void;
    getMinVel(): SE2Velocity | undefined;
    setMinVel(value?: SE2Velocity): SE2VelocityLimit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE2VelocityLimit.AsObject;
    static toObject(includeInstance: boolean, msg: SE2VelocityLimit): SE2VelocityLimit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE2VelocityLimit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE2VelocityLimit;
    static deserializeBinaryFromReader(message: SE2VelocityLimit, reader: jspb.BinaryReader): SE2VelocityLimit;
}

export namespace SE2VelocityLimit {
    export type AsObject = {
        maxVel?: SE2Velocity.AsObject,
        minVel?: SE2Velocity.AsObject,
    }
}

export class SE3Pose extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): Vec3 | undefined;
    setPosition(value?: Vec3): SE3Pose;

    hasRotation(): boolean;
    clearRotation(): void;
    getRotation(): Quaternion | undefined;
    setRotation(value?: Quaternion): SE3Pose;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE3Pose.AsObject;
    static toObject(includeInstance: boolean, msg: SE3Pose): SE3Pose.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE3Pose, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE3Pose;
    static deserializeBinaryFromReader(message: SE3Pose, reader: jspb.BinaryReader): SE3Pose;
}

export namespace SE3Pose {
    export type AsObject = {
        position?: Vec3.AsObject,
        rotation?: Quaternion.AsObject,
    }
}

export class SE3Velocity extends jspb.Message { 

    hasLinear(): boolean;
    clearLinear(): void;
    getLinear(): Vec3 | undefined;
    setLinear(value?: Vec3): SE3Velocity;

    hasAngular(): boolean;
    clearAngular(): void;
    getAngular(): Vec3 | undefined;
    setAngular(value?: Vec3): SE3Velocity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE3Velocity.AsObject;
    static toObject(includeInstance: boolean, msg: SE3Velocity): SE3Velocity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE3Velocity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE3Velocity;
    static deserializeBinaryFromReader(message: SE3Velocity, reader: jspb.BinaryReader): SE3Velocity;
}

export namespace SE3Velocity {
    export type AsObject = {
        linear?: Vec3.AsObject,
        angular?: Vec3.AsObject,
    }
}

export class Wrench extends jspb.Message { 

    hasForce(): boolean;
    clearForce(): void;
    getForce(): Vec3 | undefined;
    setForce(value?: Vec3): Wrench;

    hasTorque(): boolean;
    clearTorque(): void;
    getTorque(): Vec3 | undefined;
    setTorque(value?: Vec3): Wrench;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wrench.AsObject;
    static toObject(includeInstance: boolean, msg: Wrench): Wrench.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Wrench, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wrench;
    static deserializeBinaryFromReader(message: Wrench, reader: jspb.BinaryReader): Wrench;
}

export namespace Wrench {
    export type AsObject = {
        force?: Vec3.AsObject,
        torque?: Vec3.AsObject,
    }
}

export class FrameTreeSnapshot extends jspb.Message { 

    getChildToParentEdgeMapMap(): jspb.Map<string, FrameTreeSnapshot.ParentEdge>;
    clearChildToParentEdgeMapMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrameTreeSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: FrameTreeSnapshot): FrameTreeSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrameTreeSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrameTreeSnapshot;
    static deserializeBinaryFromReader(message: FrameTreeSnapshot, reader: jspb.BinaryReader): FrameTreeSnapshot;
}

export namespace FrameTreeSnapshot {
    export type AsObject = {

        childToParentEdgeMapMap: Array<[string, FrameTreeSnapshot.ParentEdge.AsObject]>,
    }


    export class ParentEdge extends jspb.Message { 
        getParentFrameName(): string;
        setParentFrameName(value: string): ParentEdge;

        hasParentTformChild(): boolean;
        clearParentTformChild(): void;
        getParentTformChild(): SE3Pose | undefined;
        setParentTformChild(value?: SE3Pose): ParentEdge;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ParentEdge.AsObject;
        static toObject(includeInstance: boolean, msg: ParentEdge): ParentEdge.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ParentEdge, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ParentEdge;
        static deserializeBinaryFromReader(message: ParentEdge, reader: jspb.BinaryReader): ParentEdge;
    }

    export namespace ParentEdge {
        export type AsObject = {
            parentFrameName: string,
            parentTformChild?: SE3Pose.AsObject,
        }
    }

}

export class Box2 extends jspb.Message { 

    hasSize(): boolean;
    clearSize(): void;
    getSize(): Vec2 | undefined;
    setSize(value?: Vec2): Box2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Box2.AsObject;
    static toObject(includeInstance: boolean, msg: Box2): Box2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Box2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Box2;
    static deserializeBinaryFromReader(message: Box2, reader: jspb.BinaryReader): Box2;
}

export namespace Box2 {
    export type AsObject = {
        size?: Vec2.AsObject,
    }
}

export class OrientedBox2 extends jspb.Message { 

    hasBox(): boolean;
    clearBox(): void;
    getBox(): Box2 | undefined;
    setBox(value?: Box2): OrientedBox2;
    getAngle(): number;
    setAngle(value: number): OrientedBox2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrientedBox2.AsObject;
    static toObject(includeInstance: boolean, msg: OrientedBox2): OrientedBox2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrientedBox2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrientedBox2;
    static deserializeBinaryFromReader(message: OrientedBox2, reader: jspb.BinaryReader): OrientedBox2;
}

export namespace OrientedBox2 {
    export type AsObject = {
        box?: Box2.AsObject,
        angle: number,
    }
}

export class Box2WithFrame extends jspb.Message { 

    hasBox(): boolean;
    clearBox(): void;
    getBox(): Box2 | undefined;
    setBox(value?: Box2): Box2WithFrame;
    getFrameName(): string;
    setFrameName(value: string): Box2WithFrame;

    hasFrameNameTformBox(): boolean;
    clearFrameNameTformBox(): void;
    getFrameNameTformBox(): SE3Pose | undefined;
    setFrameNameTformBox(value?: SE3Pose): Box2WithFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Box2WithFrame.AsObject;
    static toObject(includeInstance: boolean, msg: Box2WithFrame): Box2WithFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Box2WithFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Box2WithFrame;
    static deserializeBinaryFromReader(message: Box2WithFrame, reader: jspb.BinaryReader): Box2WithFrame;
}

export namespace Box2WithFrame {
    export type AsObject = {
        box?: Box2.AsObject,
        frameName: string,
        frameNameTformBox?: SE3Pose.AsObject,
    }
}

export class Box3 extends jspb.Message { 

    hasSize(): boolean;
    clearSize(): void;
    getSize(): Vec3 | undefined;
    setSize(value?: Vec3): Box3;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Box3.AsObject;
    static toObject(includeInstance: boolean, msg: Box3): Box3.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Box3, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Box3;
    static deserializeBinaryFromReader(message: Box3, reader: jspb.BinaryReader): Box3;
}

export namespace Box3 {
    export type AsObject = {
        size?: Vec3.AsObject,
    }
}

export class Box3WithFrame extends jspb.Message { 

    hasBox(): boolean;
    clearBox(): void;
    getBox(): Box3 | undefined;
    setBox(value?: Box3): Box3WithFrame;
    getFrameName(): string;
    setFrameName(value: string): Box3WithFrame;

    hasFrameNameTformBox(): boolean;
    clearFrameNameTformBox(): void;
    getFrameNameTformBox(): SE3Pose | undefined;
    setFrameNameTformBox(value?: SE3Pose): Box3WithFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Box3WithFrame.AsObject;
    static toObject(includeInstance: boolean, msg: Box3WithFrame): Box3WithFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Box3WithFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Box3WithFrame;
    static deserializeBinaryFromReader(message: Box3WithFrame, reader: jspb.BinaryReader): Box3WithFrame;
}

export namespace Box3WithFrame {
    export type AsObject = {
        box?: Box3.AsObject,
        frameName: string,
        frameNameTformBox?: SE3Pose.AsObject,
    }
}

export class Matrix extends jspb.Message { 
    getRows(): number;
    setRows(value: number): Matrix;
    getCols(): number;
    setCols(value: number): Matrix;
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): Matrix;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Matrix.AsObject;
    static toObject(includeInstance: boolean, msg: Matrix): Matrix.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Matrix, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Matrix;
    static deserializeBinaryFromReader(message: Matrix, reader: jspb.BinaryReader): Matrix;
}

export namespace Matrix {
    export type AsObject = {
        rows: number,
        cols: number,
        valuesList: Array<number>,
    }
}

export class Matrixf extends jspb.Message { 
    getRows(): number;
    setRows(value: number): Matrixf;
    getCols(): number;
    setCols(value: number): Matrixf;
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): Matrixf;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Matrixf.AsObject;
    static toObject(includeInstance: boolean, msg: Matrixf): Matrixf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Matrixf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Matrixf;
    static deserializeBinaryFromReader(message: Matrixf, reader: jspb.BinaryReader): Matrixf;
}

export namespace Matrixf {
    export type AsObject = {
        rows: number,
        cols: number,
        valuesList: Array<number>,
    }
}

export class MatrixInt64 extends jspb.Message { 
    getRows(): number;
    setRows(value: number): MatrixInt64;
    getCols(): number;
    setCols(value: number): MatrixInt64;
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): MatrixInt64;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatrixInt64.AsObject;
    static toObject(includeInstance: boolean, msg: MatrixInt64): MatrixInt64.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatrixInt64, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatrixInt64;
    static deserializeBinaryFromReader(message: MatrixInt64, reader: jspb.BinaryReader): MatrixInt64;
}

export namespace MatrixInt64 {
    export type AsObject = {
        rows: number,
        cols: number,
        valuesList: Array<number>,
    }
}

export class MatrixInt32 extends jspb.Message { 
    getRows(): number;
    setRows(value: number): MatrixInt32;
    getCols(): number;
    setCols(value: number): MatrixInt32;
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): MatrixInt32;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatrixInt32.AsObject;
    static toObject(includeInstance: boolean, msg: MatrixInt32): MatrixInt32.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatrixInt32, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatrixInt32;
    static deserializeBinaryFromReader(message: MatrixInt32, reader: jspb.BinaryReader): MatrixInt32;
}

export namespace MatrixInt32 {
    export type AsObject = {
        rows: number,
        cols: number,
        valuesList: Array<number>,
    }
}

export class Vector extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): Vector;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vector.AsObject;
    static toObject(includeInstance: boolean, msg: Vector): Vector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vector;
    static deserializeBinaryFromReader(message: Vector, reader: jspb.BinaryReader): Vector;
}

export namespace Vector {
    export type AsObject = {
        valuesList: Array<number>,
    }
}

export class SE3Covariance extends jspb.Message { 

    hasMatrix(): boolean;
    clearMatrix(): void;
    getMatrix(): Matrix | undefined;
    setMatrix(value?: Matrix): SE3Covariance;
    getYawVariance(): number;
    setYawVariance(value: number): SE3Covariance;
    getCovXx(): number;
    setCovXx(value: number): SE3Covariance;
    getCovXy(): number;
    setCovXy(value: number): SE3Covariance;
    getCovXz(): number;
    setCovXz(value: number): SE3Covariance;
    getCovYx(): number;
    setCovYx(value: number): SE3Covariance;
    getCovYy(): number;
    setCovYy(value: number): SE3Covariance;
    getCovYz(): number;
    setCovYz(value: number): SE3Covariance;
    getCovZx(): number;
    setCovZx(value: number): SE3Covariance;
    getCovZy(): number;
    setCovZy(value: number): SE3Covariance;
    getCovZz(): number;
    setCovZz(value: number): SE3Covariance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE3Covariance.AsObject;
    static toObject(includeInstance: boolean, msg: SE3Covariance): SE3Covariance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE3Covariance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE3Covariance;
    static deserializeBinaryFromReader(message: SE3Covariance, reader: jspb.BinaryReader): SE3Covariance;
}

export namespace SE3Covariance {
    export type AsObject = {
        matrix?: Matrix.AsObject,
        yawVariance: number,
        covXx: number,
        covXy: number,
        covXz: number,
        covYx: number,
        covYy: number,
        covYz: number,
        covZx: number,
        covZy: number,
        covZz: number,
    }
}

export class PolyLine extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<Vec2>;
    setPointsList(value: Array<Vec2>): PolyLine;
    addPoints(value?: Vec2, index?: number): Vec2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolyLine.AsObject;
    static toObject(includeInstance: boolean, msg: PolyLine): PolyLine.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolyLine, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolyLine;
    static deserializeBinaryFromReader(message: PolyLine, reader: jspb.BinaryReader): PolyLine;
}

export namespace PolyLine {
    export type AsObject = {
        pointsList: Array<Vec2.AsObject>,
    }
}

export class Polygon extends jspb.Message { 
    clearVertexesList(): void;
    getVertexesList(): Array<Vec2>;
    setVertexesList(value: Array<Vec2>): Polygon;
    addVertexes(value?: Vec2, index?: number): Vec2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Polygon.AsObject;
    static toObject(includeInstance: boolean, msg: Polygon): Polygon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Polygon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Polygon;
    static deserializeBinaryFromReader(message: Polygon, reader: jspb.BinaryReader): Polygon;
}

export namespace Polygon {
    export type AsObject = {
        vertexesList: Array<Vec2.AsObject>,
    }
}

export class PolygonWithExclusions extends jspb.Message { 

    hasInclusion(): boolean;
    clearInclusion(): void;
    getInclusion(): Polygon | undefined;
    setInclusion(value?: Polygon): PolygonWithExclusions;
    clearExclusionsList(): void;
    getExclusionsList(): Array<Polygon>;
    setExclusionsList(value: Array<Polygon>): PolygonWithExclusions;
    addExclusions(value?: Polygon, index?: number): Polygon;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonWithExclusions.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonWithExclusions): PolygonWithExclusions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonWithExclusions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonWithExclusions;
    static deserializeBinaryFromReader(message: PolygonWithExclusions, reader: jspb.BinaryReader): PolygonWithExclusions;
}

export namespace PolygonWithExclusions {
    export type AsObject = {
        inclusion?: Polygon.AsObject,
        exclusionsList: Array<Polygon.AsObject>,
    }
}

export class Circle extends jspb.Message { 

    hasCenterPt(): boolean;
    clearCenterPt(): void;
    getCenterPt(): Vec2 | undefined;
    setCenterPt(value?: Vec2): Circle;
    getRadius(): number;
    setRadius(value: number): Circle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Circle.AsObject;
    static toObject(includeInstance: boolean, msg: Circle): Circle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Circle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Circle;
    static deserializeBinaryFromReader(message: Circle, reader: jspb.BinaryReader): Circle;
}

export namespace Circle {
    export type AsObject = {
        centerPt?: Vec2.AsObject,
        radius: number,
    }
}

export class CircleWithFrame extends jspb.Message { 

    hasCircle(): boolean;
    clearCircle(): void;
    getCircle(): Circle | undefined;
    setCircle(value?: Circle): CircleWithFrame;
    getFrameName(): string;
    setFrameName(value: string): CircleWithFrame;

    hasFrameNameTformCircle(): boolean;
    clearFrameNameTformCircle(): void;
    getFrameNameTformCircle(): SE3Pose | undefined;
    setFrameNameTformCircle(value?: SE3Pose): CircleWithFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CircleWithFrame.AsObject;
    static toObject(includeInstance: boolean, msg: CircleWithFrame): CircleWithFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CircleWithFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CircleWithFrame;
    static deserializeBinaryFromReader(message: CircleWithFrame, reader: jspb.BinaryReader): CircleWithFrame;
}

export namespace CircleWithFrame {
    export type AsObject = {
        circle?: Circle.AsObject,
        frameName: string,
        frameNameTformCircle?: SE3Pose.AsObject,
    }
}

export class Area extends jspb.Message { 

    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): Polygon | undefined;
    setPolygon(value?: Polygon): Area;

    hasCircle(): boolean;
    clearCircle(): void;
    getCircle(): Circle | undefined;
    setCircle(value?: Circle): Area;

    getGeometryCase(): Area.GeometryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Area.AsObject;
    static toObject(includeInstance: boolean, msg: Area): Area.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Area, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Area;
    static deserializeBinaryFromReader(message: Area, reader: jspb.BinaryReader): Area;
}

export namespace Area {
    export type AsObject = {
        polygon?: Polygon.AsObject,
        circle?: Circle.AsObject,
    }

    export enum GeometryCase {
        GEOMETRY_NOT_SET = 0,
        POLYGON = 1,
        CIRCLE = 2,
    }

}

export class Volume extends jspb.Message { 

    hasBox(): boolean;
    clearBox(): void;
    getBox(): Vec3 | undefined;
    setBox(value?: Vec3): Volume;

    getGeometryCase(): Volume.GeometryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Volume.AsObject;
    static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Volume;
    static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
    export type AsObject = {
        box?: Vec3.AsObject,
    }

    export enum GeometryCase {
        GEOMETRY_NOT_SET = 0,
        BOX = 1,
    }

}

export class Bounds extends jspb.Message { 
    getLower(): number;
    setLower(value: number): Bounds;
    getUpper(): number;
    setUpper(value: number): Bounds;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bounds.AsObject;
    static toObject(includeInstance: boolean, msg: Bounds): Bounds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bounds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bounds;
    static deserializeBinaryFromReader(message: Bounds, reader: jspb.BinaryReader): Bounds;
}

export namespace Bounds {
    export type AsObject = {
        lower: number,
        upper: number,
    }
}

export class Vec2Value extends jspb.Message { 

    hasX(): boolean;
    clearX(): void;
    getX(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setX(value?: google_protobuf_wrappers_pb.DoubleValue): Vec2Value;

    hasY(): boolean;
    clearY(): void;
    getY(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setY(value?: google_protobuf_wrappers_pb.DoubleValue): Vec2Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vec2Value.AsObject;
    static toObject(includeInstance: boolean, msg: Vec2Value): Vec2Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vec2Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vec2Value;
    static deserializeBinaryFromReader(message: Vec2Value, reader: jspb.BinaryReader): Vec2Value;
}

export namespace Vec2Value {
    export type AsObject = {
        x?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        y?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class Vec3Value extends jspb.Message { 

    hasX(): boolean;
    clearX(): void;
    getX(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setX(value?: google_protobuf_wrappers_pb.DoubleValue): Vec3Value;

    hasY(): boolean;
    clearY(): void;
    getY(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setY(value?: google_protobuf_wrappers_pb.DoubleValue): Vec3Value;

    hasZ(): boolean;
    clearZ(): void;
    getZ(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setZ(value?: google_protobuf_wrappers_pb.DoubleValue): Vec3Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vec3Value.AsObject;
    static toObject(includeInstance: boolean, msg: Vec3Value): Vec3Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vec3Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vec3Value;
    static deserializeBinaryFromReader(message: Vec3Value, reader: jspb.BinaryReader): Vec3Value;
}

export namespace Vec3Value {
    export type AsObject = {
        x?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        y?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        z?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}
