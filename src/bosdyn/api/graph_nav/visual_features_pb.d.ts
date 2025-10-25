// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/visual_features.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_image_pb from "../../../bosdyn/api/image_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GenericDescriptor extends jspb.Message { 
    getName(): string;
    setName(value: string): GenericDescriptor;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): GenericDescriptor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenericDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: GenericDescriptor): GenericDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenericDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenericDescriptor;
    static deserializeBinaryFromReader(message: GenericDescriptor, reader: jspb.BinaryReader): GenericDescriptor;
}

export namespace GenericDescriptor {
    export type AsObject = {
        name: string,
        data: Uint8Array | string,
    }
}

export class VisualDescriptor extends jspb.Message { 

    hasOrb(): boolean;
    clearOrb(): void;
    getOrb(): Uint8Array | string;
    getOrb_asU8(): Uint8Array;
    getOrb_asB64(): string;
    setOrb(value: Uint8Array | string): VisualDescriptor;

    hasOther(): boolean;
    clearOther(): void;
    getOther(): GenericDescriptor | undefined;
    setOther(value?: GenericDescriptor): VisualDescriptor;

    getVisualDescriptorCase(): VisualDescriptor.VisualDescriptorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VisualDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: VisualDescriptor): VisualDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VisualDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VisualDescriptor;
    static deserializeBinaryFromReader(message: VisualDescriptor, reader: jspb.BinaryReader): VisualDescriptor;
}

export namespace VisualDescriptor {
    export type AsObject = {
        orb: Uint8Array | string,
        other?: GenericDescriptor.AsObject,
    }

    export enum VisualDescriptorCase {
        VISUAL_DESCRIPTOR_NOT_SET = 0,
        ORB = 1,
        OTHER = 100,
    }

}

export class VisualKeypoint extends jspb.Message { 

    hasVisualDescriptor(): boolean;
    clearVisualDescriptor(): void;
    getVisualDescriptor(): VisualDescriptor | undefined;
    setVisualDescriptor(value?: VisualDescriptor): VisualKeypoint;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): bosdyn_api_geometry_pb.Vec2 | undefined;
    setPosition(value?: bosdyn_api_geometry_pb.Vec2): VisualKeypoint;
    getSizePixels(): number;
    setSizePixels(value: number): VisualKeypoint;
    getOrientation(): number;
    setOrientation(value: number): VisualKeypoint;

    hasDepthMeasurement(): boolean;
    clearDepthMeasurement(): void;
    getDepthMeasurement(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDepthMeasurement(value?: google_protobuf_wrappers_pb.DoubleValue): VisualKeypoint;

    hasPositionCovariance(): boolean;
    clearPositionCovariance(): void;
    getPositionCovariance(): bosdyn_api_geometry_pb.Matrixf | undefined;
    setPositionCovariance(value?: bosdyn_api_geometry_pb.Matrixf): VisualKeypoint;

    hasDepthVariance(): boolean;
    clearDepthVariance(): void;
    getDepthVariance(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDepthVariance(value?: google_protobuf_wrappers_pb.DoubleValue): VisualKeypoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VisualKeypoint.AsObject;
    static toObject(includeInstance: boolean, msg: VisualKeypoint): VisualKeypoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VisualKeypoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VisualKeypoint;
    static deserializeBinaryFromReader(message: VisualKeypoint, reader: jspb.BinaryReader): VisualKeypoint;
}

export namespace VisualKeypoint {
    export type AsObject = {
        visualDescriptor?: VisualDescriptor.AsObject,
        position?: bosdyn_api_geometry_pb.Vec2.AsObject,
        sizePixels: number,
        orientation: number,
        depthMeasurement?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        positionCovariance?: bosdyn_api_geometry_pb.Matrixf.AsObject,
        depthVariance?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class VisualKeyFrame extends jspb.Message { 
    clearKeypointsList(): void;
    getKeypointsList(): Array<VisualKeypoint>;
    setKeypointsList(value: Array<VisualKeypoint>): VisualKeyFrame;
    addKeypoints(value?: VisualKeypoint, index?: number): VisualKeypoint;

    hasImageCaptureAndSource(): boolean;
    clearImageCaptureAndSource(): void;
    getImageCaptureAndSource(): bosdyn_api_image_pb.ImageCaptureAndSource | undefined;
    setImageCaptureAndSource(value?: bosdyn_api_image_pb.ImageCaptureAndSource): VisualKeyFrame;

    hasBundleTformImage(): boolean;
    clearBundleTformImage(): void;
    getBundleTformImage(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setBundleTformImage(value?: bosdyn_api_geometry_pb.SE3Pose): VisualKeyFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VisualKeyFrame.AsObject;
    static toObject(includeInstance: boolean, msg: VisualKeyFrame): VisualKeyFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VisualKeyFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VisualKeyFrame;
    static deserializeBinaryFromReader(message: VisualKeyFrame, reader: jspb.BinaryReader): VisualKeyFrame;
}

export namespace VisualKeyFrame {
    export type AsObject = {
        keypointsList: Array<VisualKeypoint.AsObject>,
        imageCaptureAndSource?: bosdyn_api_image_pb.ImageCaptureAndSource.AsObject,
        bundleTformImage?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
    }
}

export class VisualKeyFrameBundle extends jspb.Message { 
    clearKeyFramesList(): void;
    getKeyFramesList(): Array<VisualKeyFrame>;
    setKeyFramesList(value: Array<VisualKeyFrame>): VisualKeyFrameBundle;
    addKeyFrames(value?: VisualKeyFrame, index?: number): VisualKeyFrame;
    getBundleFrameName(): string;
    setBundleFrameName(value: string): VisualKeyFrameBundle;

    hasFrameTreeSnapshot(): boolean;
    clearFrameTreeSnapshot(): void;
    getFrameTreeSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setFrameTreeSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): VisualKeyFrameBundle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VisualKeyFrameBundle.AsObject;
    static toObject(includeInstance: boolean, msg: VisualKeyFrameBundle): VisualKeyFrameBundle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VisualKeyFrameBundle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VisualKeyFrameBundle;
    static deserializeBinaryFromReader(message: VisualKeyFrameBundle, reader: jspb.BinaryReader): VisualKeyFrameBundle;
}

export namespace VisualKeyFrameBundle {
    export type AsObject = {
        keyFramesList: Array<VisualKeyFrame.AsObject>,
        bundleFrameName: string,
        frameTreeSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
    }
}

export class PositionWithCovariance extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setPosition(value?: bosdyn_api_geometry_pb.Vec3): PositionWithCovariance;

    hasCovariance(): boolean;
    clearCovariance(): void;
    getCovariance(): bosdyn_api_geometry_pb.Matrixf | undefined;
    setCovariance(value?: bosdyn_api_geometry_pb.Matrixf): PositionWithCovariance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionWithCovariance.AsObject;
    static toObject(includeInstance: boolean, msg: PositionWithCovariance): PositionWithCovariance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionWithCovariance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionWithCovariance;
    static deserializeBinaryFromReader(message: PositionWithCovariance, reader: jspb.BinaryReader): PositionWithCovariance;
}

export namespace PositionWithCovariance {
    export type AsObject = {
        position?: bosdyn_api_geometry_pb.Vec3.AsObject,
        covariance?: bosdyn_api_geometry_pb.Matrixf.AsObject,
    }
}

export class DirectionWithCovariance extends jspb.Message { 

    hasDirection(): boolean;
    clearDirection(): void;
    getDirection(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setDirection(value?: bosdyn_api_geometry_pb.Vec3): DirectionWithCovariance;

    hasCovariance(): boolean;
    clearCovariance(): void;
    getCovariance(): bosdyn_api_geometry_pb.Matrixf | undefined;
    setCovariance(value?: bosdyn_api_geometry_pb.Matrixf): DirectionWithCovariance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DirectionWithCovariance.AsObject;
    static toObject(includeInstance: boolean, msg: DirectionWithCovariance): DirectionWithCovariance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DirectionWithCovariance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DirectionWithCovariance;
    static deserializeBinaryFromReader(message: DirectionWithCovariance, reader: jspb.BinaryReader): DirectionWithCovariance;
}

export namespace DirectionWithCovariance {
    export type AsObject = {
        direction?: bosdyn_api_geometry_pb.Vec3.AsObject,
        covariance?: bosdyn_api_geometry_pb.Matrixf.AsObject,
    }
}

export class LandmarkObservationIndex extends jspb.Message { 
    getBundleId(): number;
    setBundleId(value: number): LandmarkObservationIndex;
    getKeyframeId(): number;
    setKeyframeId(value: number): LandmarkObservationIndex;
    getKeypointId(): number;
    setKeypointId(value: number): LandmarkObservationIndex;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LandmarkObservationIndex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LandmarkObservationIndex.AsObject;
    static toObject(includeInstance: boolean, msg: LandmarkObservationIndex): LandmarkObservationIndex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LandmarkObservationIndex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LandmarkObservationIndex;
    static deserializeBinaryFromReader(message: LandmarkObservationIndex, reader: jspb.BinaryReader): LandmarkObservationIndex;
}

export namespace LandmarkObservationIndex {
    export type AsObject = {
        bundleId: number,
        keyframeId: number,
        keypointId: number,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class VisualLandmark extends jspb.Message { 
    getId(): number;
    setId(value: number): VisualLandmark;

    hasPositionWithCovariance(): boolean;
    clearPositionWithCovariance(): void;
    getPositionWithCovariance(): PositionWithCovariance | undefined;
    setPositionWithCovariance(value?: PositionWithCovariance): VisualLandmark;

    hasDirectionWithCovariance(): boolean;
    clearDirectionWithCovariance(): void;
    getDirectionWithCovariance(): DirectionWithCovariance | undefined;
    setDirectionWithCovariance(value?: DirectionWithCovariance): VisualLandmark;

    hasVisualDescriptor(): boolean;
    clearVisualDescriptor(): void;
    getVisualDescriptor(): VisualDescriptor | undefined;
    setVisualDescriptor(value?: VisualDescriptor): VisualLandmark;
    clearLandmarkObservationsList(): void;
    getLandmarkObservationsList(): Array<LandmarkObservationIndex>;
    setLandmarkObservationsList(value: Array<LandmarkObservationIndex>): VisualLandmark;
    addLandmarkObservations(value?: LandmarkObservationIndex, index?: number): LandmarkObservationIndex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VisualLandmark.AsObject;
    static toObject(includeInstance: boolean, msg: VisualLandmark): VisualLandmark.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VisualLandmark, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VisualLandmark;
    static deserializeBinaryFromReader(message: VisualLandmark, reader: jspb.BinaryReader): VisualLandmark;
}

export namespace VisualLandmark {
    export type AsObject = {
        id: number,
        positionWithCovariance?: PositionWithCovariance.AsObject,
        directionWithCovariance?: DirectionWithCovariance.AsObject,
        visualDescriptor?: VisualDescriptor.AsObject,
        landmarkObservationsList: Array<LandmarkObservationIndex.AsObject>,
    }
}

export class VisualLandmarks extends jspb.Message { 
    clearLandmarksList(): void;
    getLandmarksList(): Array<VisualLandmark>;
    setLandmarksList(value: Array<VisualLandmark>): VisualLandmarks;
    addLandmarks(value?: VisualLandmark, index?: number): VisualLandmark;
    getLandmarkFrame(): string;
    setLandmarkFrame(value: string): VisualLandmarks;

    hasFrameTreeSnapshot(): boolean;
    clearFrameTreeSnapshot(): void;
    getFrameTreeSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setFrameTreeSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): VisualLandmarks;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VisualLandmarks.AsObject;
    static toObject(includeInstance: boolean, msg: VisualLandmarks): VisualLandmarks.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VisualLandmarks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VisualLandmarks;
    static deserializeBinaryFromReader(message: VisualLandmarks, reader: jspb.BinaryReader): VisualLandmarks;
}

export namespace VisualLandmarks {
    export type AsObject = {
        landmarksList: Array<VisualLandmark.AsObject>,
        landmarkFrame: string,
        frameTreeSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
    }
}
