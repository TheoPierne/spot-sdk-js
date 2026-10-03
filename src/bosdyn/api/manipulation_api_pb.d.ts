// package: bosdyn.api
// file: bosdyn/api/manipulation_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_image_pb from "../../bosdyn/api/image_pb";
import * as bosdyn_api_lease_pb from "../../bosdyn/api/lease_pb";
import * as bosdyn_api_robot_state_pb from "../../bosdyn/api/robot_state_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class WalkToObjectRayInWorld extends jspb.Message { 

    hasRayStartRtFrame(): boolean;
    clearRayStartRtFrame(): void;
    getRayStartRtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setRayStartRtFrame(value?: bosdyn_api_geometry_pb.Vec3): WalkToObjectRayInWorld;

    hasRayEndRtFrame(): boolean;
    clearRayEndRtFrame(): void;
    getRayEndRtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setRayEndRtFrame(value?: bosdyn_api_geometry_pb.Vec3): WalkToObjectRayInWorld;
    getFrameName(): string;
    setFrameName(value: string): WalkToObjectRayInWorld;

    hasOffsetDistance(): boolean;
    clearOffsetDistance(): void;
    getOffsetDistance(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setOffsetDistance(value?: google_protobuf_wrappers_pb.FloatValue): WalkToObjectRayInWorld;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalkToObjectRayInWorld.AsObject;
    static toObject(includeInstance: boolean, msg: WalkToObjectRayInWorld): WalkToObjectRayInWorld.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalkToObjectRayInWorld, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalkToObjectRayInWorld;
    static deserializeBinaryFromReader(message: WalkToObjectRayInWorld, reader: jspb.BinaryReader): WalkToObjectRayInWorld;
}

export namespace WalkToObjectRayInWorld {
    export type AsObject = {
        rayStartRtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        rayEndRtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        frameName: string,
        offsetDistance?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }
}

export class WalkToObjectInImage extends jspb.Message { 

    hasPixelXy(): boolean;
    clearPixelXy(): void;
    getPixelXy(): bosdyn_api_geometry_pb.Vec2 | undefined;
    setPixelXy(value?: bosdyn_api_geometry_pb.Vec2): WalkToObjectInImage;

    hasTransformsSnapshotForCamera(): boolean;
    clearTransformsSnapshotForCamera(): void;
    getTransformsSnapshotForCamera(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshotForCamera(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): WalkToObjectInImage;
    getFrameNameImageSensor(): string;
    setFrameNameImageSensor(value: string): WalkToObjectInImage;

    hasCameraModel(): boolean;
    clearCameraModel(): void;
    getCameraModel(): bosdyn_api_image_pb.ImageSource.PinholeModel | undefined;
    setCameraModel(value?: bosdyn_api_image_pb.ImageSource.PinholeModel): WalkToObjectInImage;

    hasOffsetDistance(): boolean;
    clearOffsetDistance(): void;
    getOffsetDistance(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setOffsetDistance(value?: google_protobuf_wrappers_pb.FloatValue): WalkToObjectInImage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalkToObjectInImage.AsObject;
    static toObject(includeInstance: boolean, msg: WalkToObjectInImage): WalkToObjectInImage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalkToObjectInImage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalkToObjectInImage;
    static deserializeBinaryFromReader(message: WalkToObjectInImage, reader: jspb.BinaryReader): WalkToObjectInImage;
}

export namespace WalkToObjectInImage {
    export type AsObject = {
        pixelXy?: bosdyn_api_geometry_pb.Vec2.AsObject,
        transformsSnapshotForCamera?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
        frameNameImageSensor: string,
        cameraModel?: bosdyn_api_image_pb.ImageSource.PinholeModel.AsObject,
        offsetDistance?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }
}

export class PickObjectRayInWorld extends jspb.Message { 

    hasRayStartRtFrame(): boolean;
    clearRayStartRtFrame(): void;
    getRayStartRtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setRayStartRtFrame(value?: bosdyn_api_geometry_pb.Vec3): PickObjectRayInWorld;

    hasRayEndRtFrame(): boolean;
    clearRayEndRtFrame(): void;
    getRayEndRtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setRayEndRtFrame(value?: bosdyn_api_geometry_pb.Vec3): PickObjectRayInWorld;
    getFrameName(): string;
    setFrameName(value: string): PickObjectRayInWorld;

    hasGraspParams(): boolean;
    clearGraspParams(): void;
    getGraspParams(): GraspParams | undefined;
    setGraspParams(value?: GraspParams): PickObjectRayInWorld;
    getWalkGazeMode(): WalkGazeMode;
    setWalkGazeMode(value: WalkGazeMode): PickObjectRayInWorld;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PickObjectRayInWorld.AsObject;
    static toObject(includeInstance: boolean, msg: PickObjectRayInWorld): PickObjectRayInWorld.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PickObjectRayInWorld, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PickObjectRayInWorld;
    static deserializeBinaryFromReader(message: PickObjectRayInWorld, reader: jspb.BinaryReader): PickObjectRayInWorld;
}

export namespace PickObjectRayInWorld {
    export type AsObject = {
        rayStartRtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        rayEndRtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        frameName: string,
        graspParams?: GraspParams.AsObject,
        walkGazeMode: WalkGazeMode,
    }
}

export class PickObjectExecutePlan extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PickObjectExecutePlan.AsObject;
    static toObject(includeInstance: boolean, msg: PickObjectExecutePlan): PickObjectExecutePlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PickObjectExecutePlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PickObjectExecutePlan;
    static deserializeBinaryFromReader(message: PickObjectExecutePlan, reader: jspb.BinaryReader): PickObjectExecutePlan;
}

export namespace PickObjectExecutePlan {
    export type AsObject = {
    }
}

export class PickObject extends jspb.Message { 
    getFrameName(): string;
    setFrameName(value: string): PickObject;

    hasObjectRtFrame(): boolean;
    clearObjectRtFrame(): void;
    getObjectRtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setObjectRtFrame(value?: bosdyn_api_geometry_pb.Vec3): PickObject;

    hasGraspParams(): boolean;
    clearGraspParams(): void;
    getGraspParams(): GraspParams | undefined;
    setGraspParams(value?: GraspParams): PickObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PickObject.AsObject;
    static toObject(includeInstance: boolean, msg: PickObject): PickObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PickObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PickObject;
    static deserializeBinaryFromReader(message: PickObject, reader: jspb.BinaryReader): PickObject;
}

export namespace PickObject {
    export type AsObject = {
        frameName: string,
        objectRtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        graspParams?: GraspParams.AsObject,
    }
}

export class PickObjectInImage extends jspb.Message { 

    hasPixelXy(): boolean;
    clearPixelXy(): void;
    getPixelXy(): bosdyn_api_geometry_pb.Vec2 | undefined;
    setPixelXy(value?: bosdyn_api_geometry_pb.Vec2): PickObjectInImage;

    hasTransformsSnapshotForCamera(): boolean;
    clearTransformsSnapshotForCamera(): void;
    getTransformsSnapshotForCamera(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshotForCamera(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): PickObjectInImage;
    getFrameNameImageSensor(): string;
    setFrameNameImageSensor(value: string): PickObjectInImage;

    hasCameraModel(): boolean;
    clearCameraModel(): void;
    getCameraModel(): bosdyn_api_image_pb.ImageSource.PinholeModel | undefined;
    setCameraModel(value?: bosdyn_api_image_pb.ImageSource.PinholeModel): PickObjectInImage;

    hasGraspParams(): boolean;
    clearGraspParams(): void;
    getGraspParams(): GraspParams | undefined;
    setGraspParams(value?: GraspParams): PickObjectInImage;
    getWalkGazeMode(): WalkGazeMode;
    setWalkGazeMode(value: WalkGazeMode): PickObjectInImage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PickObjectInImage.AsObject;
    static toObject(includeInstance: boolean, msg: PickObjectInImage): PickObjectInImage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PickObjectInImage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PickObjectInImage;
    static deserializeBinaryFromReader(message: PickObjectInImage, reader: jspb.BinaryReader): PickObjectInImage;
}

export namespace PickObjectInImage {
    export type AsObject = {
        pixelXy?: bosdyn_api_geometry_pb.Vec2.AsObject,
        transformsSnapshotForCamera?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
        frameNameImageSensor: string,
        cameraModel?: bosdyn_api_image_pb.ImageSource.PinholeModel.AsObject,
        graspParams?: GraspParams.AsObject,
        walkGazeMode: WalkGazeMode,
    }
}

export class GraspParams extends jspb.Message { 
    getGraspPalmToFingertip(): number;
    setGraspPalmToFingertip(value: number): GraspParams;
    getGraspParamsFrameName(): string;
    setGraspParamsFrameName(value: string): GraspParams;
    clearAllowableOrientationList(): void;
    getAllowableOrientationList(): Array<AllowableOrientation>;
    setAllowableOrientationList(value: Array<AllowableOrientation>): GraspParams;
    addAllowableOrientation(value?: AllowableOrientation, index?: number): AllowableOrientation;
    getPositionConstraint(): GraspPositionConstraint;
    setPositionConstraint(value: GraspPositionConstraint): GraspParams;
    getManipulationCameraSource(): ManipulationCameraSource;
    setManipulationCameraSource(value: ManipulationCameraSource): GraspParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GraspParams.AsObject;
    static toObject(includeInstance: boolean, msg: GraspParams): GraspParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GraspParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GraspParams;
    static deserializeBinaryFromReader(message: GraspParams, reader: jspb.BinaryReader): GraspParams;
}

export namespace GraspParams {
    export type AsObject = {
        graspPalmToFingertip: number,
        graspParamsFrameName: string,
        allowableOrientationList: Array<AllowableOrientation.AsObject>,
        positionConstraint: GraspPositionConstraint,
        manipulationCameraSource: ManipulationCameraSource,
    }
}

export class AllowableOrientation extends jspb.Message { 

    hasRotationWithTolerance(): boolean;
    clearRotationWithTolerance(): void;
    getRotationWithTolerance(): RotationWithTolerance | undefined;
    setRotationWithTolerance(value?: RotationWithTolerance): AllowableOrientation;

    hasVectorAlignmentWithTolerance(): boolean;
    clearVectorAlignmentWithTolerance(): void;
    getVectorAlignmentWithTolerance(): VectorAlignmentWithTolerance | undefined;
    setVectorAlignmentWithTolerance(value?: VectorAlignmentWithTolerance): AllowableOrientation;

    hasSqueezeGrasp(): boolean;
    clearSqueezeGrasp(): void;
    getSqueezeGrasp(): SqueezeGrasp | undefined;
    setSqueezeGrasp(value?: SqueezeGrasp): AllowableOrientation;

    getConstraintCase(): AllowableOrientation.ConstraintCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllowableOrientation.AsObject;
    static toObject(includeInstance: boolean, msg: AllowableOrientation): AllowableOrientation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllowableOrientation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllowableOrientation;
    static deserializeBinaryFromReader(message: AllowableOrientation, reader: jspb.BinaryReader): AllowableOrientation;
}

export namespace AllowableOrientation {
    export type AsObject = {
        rotationWithTolerance?: RotationWithTolerance.AsObject,
        vectorAlignmentWithTolerance?: VectorAlignmentWithTolerance.AsObject,
        squeezeGrasp?: SqueezeGrasp.AsObject,
    }

    export enum ConstraintCase {
        CONSTRAINT_NOT_SET = 0,
        ROTATION_WITH_TOLERANCE = 1,
        VECTOR_ALIGNMENT_WITH_TOLERANCE = 2,
        SQUEEZE_GRASP = 3,
    }

}

export class RotationWithTolerance extends jspb.Message { 

    hasRotationEwrtFrame(): boolean;
    clearRotationEwrtFrame(): void;
    getRotationEwrtFrame(): bosdyn_api_geometry_pb.Quaternion | undefined;
    setRotationEwrtFrame(value?: bosdyn_api_geometry_pb.Quaternion): RotationWithTolerance;
    getThresholdRadians(): number;
    setThresholdRadians(value: number): RotationWithTolerance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RotationWithTolerance.AsObject;
    static toObject(includeInstance: boolean, msg: RotationWithTolerance): RotationWithTolerance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RotationWithTolerance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RotationWithTolerance;
    static deserializeBinaryFromReader(message: RotationWithTolerance, reader: jspb.BinaryReader): RotationWithTolerance;
}

export namespace RotationWithTolerance {
    export type AsObject = {
        rotationEwrtFrame?: bosdyn_api_geometry_pb.Quaternion.AsObject,
        thresholdRadians: number,
    }
}

export class VectorAlignmentWithTolerance extends jspb.Message { 

    hasAxisOnGripperEwrtGripper(): boolean;
    clearAxisOnGripperEwrtGripper(): void;
    getAxisOnGripperEwrtGripper(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setAxisOnGripperEwrtGripper(value?: bosdyn_api_geometry_pb.Vec3): VectorAlignmentWithTolerance;

    hasAxisToAlignWithEwrtFrame(): boolean;
    clearAxisToAlignWithEwrtFrame(): void;
    getAxisToAlignWithEwrtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setAxisToAlignWithEwrtFrame(value?: bosdyn_api_geometry_pb.Vec3): VectorAlignmentWithTolerance;
    getThresholdRadians(): number;
    setThresholdRadians(value: number): VectorAlignmentWithTolerance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VectorAlignmentWithTolerance.AsObject;
    static toObject(includeInstance: boolean, msg: VectorAlignmentWithTolerance): VectorAlignmentWithTolerance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VectorAlignmentWithTolerance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VectorAlignmentWithTolerance;
    static deserializeBinaryFromReader(message: VectorAlignmentWithTolerance, reader: jspb.BinaryReader): VectorAlignmentWithTolerance;
}

export namespace VectorAlignmentWithTolerance {
    export type AsObject = {
        axisOnGripperEwrtGripper?: bosdyn_api_geometry_pb.Vec3.AsObject,
        axisToAlignWithEwrtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        thresholdRadians: number,
    }
}

export class SqueezeGrasp extends jspb.Message { 
    getSqueezeGraspDisallowed(): boolean;
    setSqueezeGraspDisallowed(value: boolean): SqueezeGrasp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SqueezeGrasp.AsObject;
    static toObject(includeInstance: boolean, msg: SqueezeGrasp): SqueezeGrasp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SqueezeGrasp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SqueezeGrasp;
    static deserializeBinaryFromReader(message: SqueezeGrasp, reader: jspb.BinaryReader): SqueezeGrasp;
}

export namespace SqueezeGrasp {
    export type AsObject = {
        squeezeGraspDisallowed: boolean,
    }
}

export class ManipulationApiFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ManipulationApiFeedbackRequest;
    getManipulationCmdId(): number;
    setManipulationCmdId(value: number): ManipulationApiFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManipulationApiFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ManipulationApiFeedbackRequest): ManipulationApiFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManipulationApiFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManipulationApiFeedbackRequest;
    static deserializeBinaryFromReader(message: ManipulationApiFeedbackRequest, reader: jspb.BinaryReader): ManipulationApiFeedbackRequest;
}

export namespace ManipulationApiFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        manipulationCmdId: number,
    }
}

export class ManipulationApiFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ManipulationApiFeedbackResponse;
    getManipulationCmdId(): number;
    setManipulationCmdId(value: number): ManipulationApiFeedbackResponse;
    getCurrentState(): ManipulationFeedbackState;
    setCurrentState(value: ManipulationFeedbackState): ManipulationApiFeedbackResponse;

    hasTransformsSnapshotManipulationData(): boolean;
    clearTransformsSnapshotManipulationData(): void;
    getTransformsSnapshotManipulationData(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshotManipulationData(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): ManipulationApiFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManipulationApiFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ManipulationApiFeedbackResponse): ManipulationApiFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManipulationApiFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManipulationApiFeedbackResponse;
    static deserializeBinaryFromReader(message: ManipulationApiFeedbackResponse, reader: jspb.BinaryReader): ManipulationApiFeedbackResponse;
}

export namespace ManipulationApiFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        manipulationCmdId: number,
        currentState: ManipulationFeedbackState,
        transformsSnapshotManipulationData?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
    }
}

export class ManipulationApiResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ManipulationApiResponse;
    getManipulationCmdId(): number;
    setManipulationCmdId(value: number): ManipulationApiResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): ManipulationApiResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManipulationApiResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ManipulationApiResponse): ManipulationApiResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManipulationApiResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManipulationApiResponse;
    static deserializeBinaryFromReader(message: ManipulationApiResponse, reader: jspb.BinaryReader): ManipulationApiResponse;
}

export namespace ManipulationApiResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        manipulationCmdId: number,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
    }
}

export class ManipulationApiRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ManipulationApiRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): ManipulationApiRequest;

    hasWalkToObjectRayInWorld(): boolean;
    clearWalkToObjectRayInWorld(): void;
    getWalkToObjectRayInWorld(): WalkToObjectRayInWorld | undefined;
    setWalkToObjectRayInWorld(value?: WalkToObjectRayInWorld): ManipulationApiRequest;

    hasWalkToObjectInImage(): boolean;
    clearWalkToObjectInImage(): void;
    getWalkToObjectInImage(): WalkToObjectInImage | undefined;
    setWalkToObjectInImage(value?: WalkToObjectInImage): ManipulationApiRequest;

    hasPickObject(): boolean;
    clearPickObject(): void;
    getPickObject(): PickObject | undefined;
    setPickObject(value?: PickObject): ManipulationApiRequest;

    hasPickObjectInImage(): boolean;
    clearPickObjectInImage(): void;
    getPickObjectInImage(): PickObjectInImage | undefined;
    setPickObjectInImage(value?: PickObjectInImage): ManipulationApiRequest;

    hasPickObjectRayInWorld(): boolean;
    clearPickObjectRayInWorld(): void;
    getPickObjectRayInWorld(): PickObjectRayInWorld | undefined;
    setPickObjectRayInWorld(value?: PickObjectRayInWorld): ManipulationApiRequest;

    hasPickObjectExecutePlan(): boolean;
    clearPickObjectExecutePlan(): void;
    getPickObjectExecutePlan(): PickObjectExecutePlan | undefined;
    setPickObjectExecutePlan(value?: PickObjectExecutePlan): ManipulationApiRequest;

    getManipulationCmdCase(): ManipulationApiRequest.ManipulationCmdCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManipulationApiRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ManipulationApiRequest): ManipulationApiRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManipulationApiRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManipulationApiRequest;
    static deserializeBinaryFromReader(message: ManipulationApiRequest, reader: jspb.BinaryReader): ManipulationApiRequest;
}

export namespace ManipulationApiRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        walkToObjectRayInWorld?: WalkToObjectRayInWorld.AsObject,
        walkToObjectInImage?: WalkToObjectInImage.AsObject,
        pickObject?: PickObject.AsObject,
        pickObjectInImage?: PickObjectInImage.AsObject,
        pickObjectRayInWorld?: PickObjectRayInWorld.AsObject,
        pickObjectExecutePlan?: PickObjectExecutePlan.AsObject,
    }

    export enum ManipulationCmdCase {
        MANIPULATION_CMD_NOT_SET = 0,
        WALK_TO_OBJECT_RAY_IN_WORLD = 12,
        WALK_TO_OBJECT_IN_IMAGE = 13,
        PICK_OBJECT = 10,
        PICK_OBJECT_IN_IMAGE = 11,
        PICK_OBJECT_RAY_IN_WORLD = 4,
        PICK_OBJECT_EXECUTE_PLAN = 14,
    }

}

export class ApiGraspOverride extends jspb.Message { 
    getOverrideRequest(): ApiGraspOverride.Override;
    setOverrideRequest(value: ApiGraspOverride.Override): ApiGraspOverride;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiGraspOverride.AsObject;
    static toObject(includeInstance: boolean, msg: ApiGraspOverride): ApiGraspOverride.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiGraspOverride, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiGraspOverride;
    static deserializeBinaryFromReader(message: ApiGraspOverride, reader: jspb.BinaryReader): ApiGraspOverride;
}

export namespace ApiGraspOverride {
    export type AsObject = {
        overrideRequest: ApiGraspOverride.Override,
    }

    export enum Override {
    OVERRIDE_UNKNOWN = 0,
    OVERRIDE_HOLDING = 1,
    OVERRIDE_NOT_HOLDING = 2,
    }

}

export class ApiGraspedCarryStateOverride extends jspb.Message { 
    getOverrideRequest(): bosdyn_api_robot_state_pb.ManipulatorState.CarryState;
    setOverrideRequest(value: bosdyn_api_robot_state_pb.ManipulatorState.CarryState): ApiGraspedCarryStateOverride;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiGraspedCarryStateOverride.AsObject;
    static toObject(includeInstance: boolean, msg: ApiGraspedCarryStateOverride): ApiGraspedCarryStateOverride.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiGraspedCarryStateOverride, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiGraspedCarryStateOverride;
    static deserializeBinaryFromReader(message: ApiGraspedCarryStateOverride, reader: jspb.BinaryReader): ApiGraspedCarryStateOverride;
}

export namespace ApiGraspedCarryStateOverride {
    export type AsObject = {
        overrideRequest: bosdyn_api_robot_state_pb.ManipulatorState.CarryState,
    }
}

export class ApiGraspOverrideRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ApiGraspOverrideRequest;

    hasApiGraspOverride(): boolean;
    clearApiGraspOverride(): void;
    getApiGraspOverride(): ApiGraspOverride | undefined;
    setApiGraspOverride(value?: ApiGraspOverride): ApiGraspOverrideRequest;

    hasCarryStateOverride(): boolean;
    clearCarryStateOverride(): void;
    getCarryStateOverride(): ApiGraspedCarryStateOverride | undefined;
    setCarryStateOverride(value?: ApiGraspedCarryStateOverride): ApiGraspOverrideRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiGraspOverrideRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ApiGraspOverrideRequest): ApiGraspOverrideRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiGraspOverrideRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiGraspOverrideRequest;
    static deserializeBinaryFromReader(message: ApiGraspOverrideRequest, reader: jspb.BinaryReader): ApiGraspOverrideRequest;
}

export namespace ApiGraspOverrideRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        apiGraspOverride?: ApiGraspOverride.AsObject,
        carryStateOverride?: ApiGraspedCarryStateOverride.AsObject,
    }
}

export class ApiGraspOverrideResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ApiGraspOverrideResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiGraspOverrideResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ApiGraspOverrideResponse): ApiGraspOverrideResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiGraspOverrideResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiGraspOverrideResponse;
    static deserializeBinaryFromReader(message: ApiGraspOverrideResponse, reader: jspb.BinaryReader): ApiGraspOverrideResponse;
}

export namespace ApiGraspOverrideResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export enum GraspPositionConstraint {
    GRASP_POSITION_CONSTRAINT_UNKNOWN = 0,
    GRASP_POSITION_CONSTRAINT_NORMAL = 1,
    GRASP_POSITION_CONSTRAINT_FIXED_AT_USER_POSITION = 2,
}

export enum ManipulationFeedbackState {
    MANIP_STATE_UNKNOWN = 0,
    MANIP_STATE_DONE = 1,
    MANIP_STATE_SEARCHING_FOR_GRASP = 2,
    MANIP_STATE_MOVING_TO_GRASP = 3,
    MANIP_STATE_GRASPING_OBJECT = 4,
    MANIP_STATE_PLACING_OBJECT = 5,
    MANIP_STATE_GRASP_SUCCEEDED = 6,
    MANIP_STATE_GRASP_FAILED = 7,
    MANIP_STATE_GRASP_PLANNING_SUCCEEDED = 11,
    MANIP_STATE_GRASP_PLANNING_NO_SOLUTION = 8,
    MANIP_STATE_GRASP_FAILED_TO_RAYCAST_INTO_MAP = 9,
    MANIP_STATE_GRASP_PLANNING_WAITING_DATA_AT_EDGE = 13,
    MANIP_STATE_WALKING_TO_OBJECT = 10,
    MANIP_STATE_ATTEMPTING_RAYCASTING = 12,
    MANIP_STATE_MOVING_TO_PLACE = 14,
    MANIP_STATE_PLACE_FAILED_TO_RAYCAST_INTO_MAP = 15,
    MANIP_STATE_PLACE_SUCCEEDED = 16,
    MANIP_STATE_PLACE_FAILED = 17,
}

export enum ManipulationCameraSource {
    MANIPULATION_CAMERA_SOURCE_UNKNOWN = 0,
    MANIPULATION_CAMERA_SOURCE_STEREO = 1,
    MANIPULATION_CAMERA_SOURCE_HAND = 2,
}

export enum WalkGazeMode {
    PICK_WALK_GAZE_UNKNOWN = 0,
    PICK_AUTO_WALK_AND_GAZE = 1,
    PICK_AUTO_GAZE = 2,
    PICK_NO_AUTO_WALK_OR_GAZE = 3,
    PICK_PLAN_ONLY = 4,
}
