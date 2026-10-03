// package: bosdyn.api
// file: bosdyn/api/ray_cast.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";

export class RaycastRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RaycastRequest;
    getRayFrameName(): string;
    setRayFrameName(value: string): RaycastRequest;

    hasRay(): boolean;
    clearRay(): void;
    getRay(): bosdyn_api_geometry_pb.Ray | undefined;
    setRay(value?: bosdyn_api_geometry_pb.Ray): RaycastRequest;
    getMinIntersectionDistance(): number;
    setMinIntersectionDistance(value: number): RaycastRequest;
    clearIntersectionTypesList(): void;
    getIntersectionTypesList(): Array<RayIntersection.Type>;
    setIntersectionTypesList(value: Array<RayIntersection.Type>): RaycastRequest;
    addIntersectionTypes(value: RayIntersection.Type, index?: number): RayIntersection.Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RaycastRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RaycastRequest): RaycastRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RaycastRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RaycastRequest;
    static deserializeBinaryFromReader(message: RaycastRequest, reader: jspb.BinaryReader): RaycastRequest;
}

export namespace RaycastRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        rayFrameName: string,
        ray?: bosdyn_api_geometry_pb.Ray.AsObject,
        minIntersectionDistance: number,
        intersectionTypesList: Array<RayIntersection.Type>,
    }
}

export class RayIntersection extends jspb.Message { 
    getType(): RayIntersection.Type;
    setType(value: RayIntersection.Type): RayIntersection;

    hasHitPositionInHitFrame(): boolean;
    clearHitPositionInHitFrame(): void;
    getHitPositionInHitFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setHitPositionInHitFrame(value?: bosdyn_api_geometry_pb.Vec3): RayIntersection;
    getDistanceMeters(): number;
    setDistanceMeters(value: number): RayIntersection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RayIntersection.AsObject;
    static toObject(includeInstance: boolean, msg: RayIntersection): RayIntersection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RayIntersection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RayIntersection;
    static deserializeBinaryFromReader(message: RayIntersection, reader: jspb.BinaryReader): RayIntersection;
}

export namespace RayIntersection {
    export type AsObject = {
        type: RayIntersection.Type,
        hitPositionInHitFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        distanceMeters: number,
    }

    export enum Type {
    TYPE_UNKNOWN = 0,
    TYPE_GROUND_PLANE = 1,
    TYPE_TERRAIN_MAP = 2,
    TYPE_VOXEL_MAP = 3,
    TYPE_HAND_DEPTH = 4,
    }

}

export class RaycastResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RaycastResponse;
    getStatus(): RaycastResponse.Status;
    setStatus(value: RaycastResponse.Status): RaycastResponse;
    getMessage(): string;
    setMessage(value: string): RaycastResponse;
    getHitFrameName(): string;
    setHitFrameName(value: string): RaycastResponse;
    clearHitsList(): void;
    getHitsList(): Array<RayIntersection>;
    setHitsList(value: Array<RayIntersection>): RaycastResponse;
    addHits(value?: RayIntersection, index?: number): RayIntersection;

    hasTransformsSnapshot(): boolean;
    clearTransformsSnapshot(): void;
    getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): RaycastResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RaycastResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RaycastResponse): RaycastResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RaycastResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RaycastResponse;
    static deserializeBinaryFromReader(message: RaycastResponse, reader: jspb.BinaryReader): RaycastResponse;
}

export namespace RaycastResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: RaycastResponse.Status,
        message: string,
        hitFrameName: string,
        hitsList: Array<RayIntersection.AsObject>,
        transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_REQUEST = 2,
    STATUS_INVALID_INTERSECTION_TYPE = 3,
    STATUS_UNKNOWN_FRAME = 4,
    }

}
