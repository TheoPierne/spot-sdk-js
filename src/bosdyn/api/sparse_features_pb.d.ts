// package: bosdyn.api
// file: bosdyn/api/sparse_features.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";

export class Keypoint extends jspb.Message { 

    hasCoordinates(): boolean;
    clearCoordinates(): void;
    getCoordinates(): bosdyn_api_geometry_pb.Vec2 | undefined;
    setCoordinates(value?: bosdyn_api_geometry_pb.Vec2): Keypoint;
    getBinaryDescriptor(): Uint8Array | string;
    getBinaryDescriptor_asU8(): Uint8Array;
    getBinaryDescriptor_asB64(): string;
    setBinaryDescriptor(value: Uint8Array | string): Keypoint;
    getScore(): number;
    setScore(value: number): Keypoint;
    getSize(): number;
    setSize(value: number): Keypoint;
    getAngle(): number;
    setAngle(value: number): Keypoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Keypoint.AsObject;
    static toObject(includeInstance: boolean, msg: Keypoint): Keypoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Keypoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Keypoint;
    static deserializeBinaryFromReader(message: Keypoint, reader: jspb.BinaryReader): Keypoint;
}

export namespace Keypoint {
    export type AsObject = {
        coordinates?: bosdyn_api_geometry_pb.Vec2.AsObject,
        binaryDescriptor: Uint8Array | string,
        score: number,
        size: number,
        angle: number,
    }
}

export class KeypointSet extends jspb.Message { 
    clearKeypointsList(): void;
    getKeypointsList(): Array<Keypoint>;
    setKeypointsList(value: Array<Keypoint>): KeypointSet;
    addKeypoints(value?: Keypoint, index?: number): Keypoint;
    getType(): KeypointSet.KeypointType;
    setType(value: KeypointSet.KeypointType): KeypointSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeypointSet.AsObject;
    static toObject(includeInstance: boolean, msg: KeypointSet): KeypointSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeypointSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeypointSet;
    static deserializeBinaryFromReader(message: KeypointSet, reader: jspb.BinaryReader): KeypointSet;
}

export namespace KeypointSet {
    export type AsObject = {
        keypointsList: Array<Keypoint.AsObject>,
        type: KeypointSet.KeypointType,
    }

    export enum KeypointType {
    KEYPOINT_UNKNOWN = 0,
    KEYPOINT_SIMPLE = 1,
    KEYPOINT_ORB = 2,
    KEYPOINT_DISK = 3,
    }

}

export class Match extends jspb.Message { 
    getReferenceIndex(): number;
    setReferenceIndex(value: number): Match;
    getLiveIndex(): number;
    setLiveIndex(value: number): Match;
    getDistance(): number;
    setDistance(value: number): Match;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Match.AsObject;
    static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Match;
    static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
    export type AsObject = {
        referenceIndex: number,
        liveIndex: number,
        distance: number,
    }
}

export class KeypointMatches extends jspb.Message { 

    hasReferenceKeypoints(): boolean;
    clearReferenceKeypoints(): void;
    getReferenceKeypoints(): KeypointSet | undefined;
    setReferenceKeypoints(value?: KeypointSet): KeypointMatches;

    hasLiveKeypoints(): boolean;
    clearLiveKeypoints(): void;
    getLiveKeypoints(): KeypointSet | undefined;
    setLiveKeypoints(value?: KeypointSet): KeypointMatches;
    clearMatchesList(): void;
    getMatchesList(): Array<Match>;
    setMatchesList(value: Array<Match>): KeypointMatches;
    addMatches(value?: Match, index?: number): Match;
    getType(): KeypointMatches.MatchType;
    setType(value: KeypointMatches.MatchType): KeypointMatches;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeypointMatches.AsObject;
    static toObject(includeInstance: boolean, msg: KeypointMatches): KeypointMatches.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeypointMatches, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeypointMatches;
    static deserializeBinaryFromReader(message: KeypointMatches, reader: jspb.BinaryReader): KeypointMatches;
}

export namespace KeypointMatches {
    export type AsObject = {
        referenceKeypoints?: KeypointSet.AsObject,
        liveKeypoints?: KeypointSet.AsObject,
        matchesList: Array<Match.AsObject>,
        type: KeypointMatches.MatchType,
    }

    export enum MatchType {
    MATCH_UNKNOWN = 0,
    MATCH_ORB = 1,
    MATCH_LIGHTGLUE = 2,
    }

}
