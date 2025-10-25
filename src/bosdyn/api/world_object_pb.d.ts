// package: bosdyn.api
// file: bosdyn/api/world_object.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_docking_docking_pb from "../../bosdyn/api/docking/docking_pb";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_image_pb from "../../bosdyn/api/image_pb";
import * as bosdyn_api_sparse_features_pb from "../../bosdyn/api/sparse_features_pb";
import * as bosdyn_api_stairs_pb from "../../bosdyn/api/stairs_pb";
import * as bosdyn_api_gps_registration_pb from "../../bosdyn/api/gps/registration_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class WorldObject extends jspb.Message { 
    getId(): number;
    setId(value: number): WorldObject;
    getName(): string;
    setName(value: string): WorldObject;

    hasAcquisitionTime(): boolean;
    clearAcquisitionTime(): void;
    getAcquisitionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAcquisitionTime(value?: google_protobuf_timestamp_pb.Timestamp): WorldObject;

    hasTransformsSnapshot(): boolean;
    clearTransformsSnapshot(): void;
    getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): WorldObject;

    hasObjectLifetime(): boolean;
    clearObjectLifetime(): void;
    getObjectLifetime(): google_protobuf_duration_pb.Duration | undefined;
    setObjectLifetime(value?: google_protobuf_duration_pb.Duration): WorldObject;
    clearDrawablePropertiesList(): void;
    getDrawablePropertiesList(): Array<DrawableProperties>;
    setDrawablePropertiesList(value: Array<DrawableProperties>): WorldObject;
    addDrawableProperties(value?: DrawableProperties, index?: number): DrawableProperties;

    hasApriltagProperties(): boolean;
    clearApriltagProperties(): void;
    getApriltagProperties(): AprilTagProperties | undefined;
    setApriltagProperties(value?: AprilTagProperties): WorldObject;

    hasTrackedEntityProperties(): boolean;
    clearTrackedEntityProperties(): void;
    getTrackedEntityProperties(): TrackedEntityProperties | undefined;
    setTrackedEntityProperties(value?: TrackedEntityProperties): WorldObject;

    hasNogoRegionProperties(): boolean;
    clearNogoRegionProperties(): void;
    getNogoRegionProperties(): NoGoRegionProperties | undefined;
    setNogoRegionProperties(value?: NoGoRegionProperties): WorldObject;

    hasImageProperties(): boolean;
    clearImageProperties(): void;
    getImageProperties(): ImageProperties | undefined;
    setImageProperties(value?: ImageProperties): WorldObject;

    hasDockProperties(): boolean;
    clearDockProperties(): void;
    getDockProperties(): DockProperties | undefined;
    setDockProperties(value?: DockProperties): WorldObject;

    hasRayProperties(): boolean;
    clearRayProperties(): void;
    getRayProperties(): RayProperties | undefined;
    setRayProperties(value?: RayProperties): WorldObject;

    hasBoundingBoxProperties(): boolean;
    clearBoundingBoxProperties(): void;
    getBoundingBoxProperties(): BoundingBoxProperties | undefined;
    setBoundingBoxProperties(value?: BoundingBoxProperties): WorldObject;

    hasStaircaseProperties(): boolean;
    clearStaircaseProperties(): void;
    getStaircaseProperties(): StaircaseProperties | undefined;
    setStaircaseProperties(value?: StaircaseProperties): WorldObject;

    hasGpsProperties(): boolean;
    clearGpsProperties(): void;
    getGpsProperties(): GpsProperties | undefined;
    setGpsProperties(value?: GpsProperties): WorldObject;

    hasAdditionalProperties(): boolean;
    clearAdditionalProperties(): void;
    getAdditionalProperties(): google_protobuf_any_pb.Any | undefined;
    setAdditionalProperties(value?: google_protobuf_any_pb.Any): WorldObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorldObject.AsObject;
    static toObject(includeInstance: boolean, msg: WorldObject): WorldObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorldObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorldObject;
    static deserializeBinaryFromReader(message: WorldObject, reader: jspb.BinaryReader): WorldObject;
}

export namespace WorldObject {
    export type AsObject = {
        id: number,
        name: string,
        acquisitionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
        objectLifetime?: google_protobuf_duration_pb.Duration.AsObject,
        drawablePropertiesList: Array<DrawableProperties.AsObject>,
        apriltagProperties?: AprilTagProperties.AsObject,
        trackedEntityProperties?: TrackedEntityProperties.AsObject,
        nogoRegionProperties?: NoGoRegionProperties.AsObject,
        imageProperties?: ImageProperties.AsObject,
        dockProperties?: DockProperties.AsObject,
        rayProperties?: RayProperties.AsObject,
        boundingBoxProperties?: BoundingBoxProperties.AsObject,
        staircaseProperties?: StaircaseProperties.AsObject,
        gpsProperties?: GpsProperties.AsObject,
        additionalProperties?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class ListWorldObjectRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListWorldObjectRequest;
    clearObjectTypeList(): void;
    getObjectTypeList(): Array<WorldObjectType>;
    setObjectTypeList(value: Array<WorldObjectType>): ListWorldObjectRequest;
    addObjectType(value: WorldObjectType, index?: number): WorldObjectType;

    hasTimestampFilter(): boolean;
    clearTimestampFilter(): void;
    getTimestampFilter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampFilter(value?: google_protobuf_timestamp_pb.Timestamp): ListWorldObjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWorldObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWorldObjectRequest): ListWorldObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWorldObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWorldObjectRequest;
    static deserializeBinaryFromReader(message: ListWorldObjectRequest, reader: jspb.BinaryReader): ListWorldObjectRequest;
}

export namespace ListWorldObjectRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        objectTypeList: Array<WorldObjectType>,
        timestampFilter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListWorldObjectResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListWorldObjectResponse;
    clearWorldObjectsList(): void;
    getWorldObjectsList(): Array<WorldObject>;
    setWorldObjectsList(value: Array<WorldObject>): ListWorldObjectResponse;
    addWorldObjects(value?: WorldObject, index?: number): WorldObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWorldObjectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWorldObjectResponse): ListWorldObjectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWorldObjectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWorldObjectResponse;
    static deserializeBinaryFromReader(message: ListWorldObjectResponse, reader: jspb.BinaryReader): ListWorldObjectResponse;
}

export namespace ListWorldObjectResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        worldObjectsList: Array<WorldObject.AsObject>,
    }
}

export class MutateWorldObjectRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): MutateWorldObjectRequest;

    hasMutation(): boolean;
    clearMutation(): void;
    getMutation(): MutateWorldObjectRequest.Mutation | undefined;
    setMutation(value?: MutateWorldObjectRequest.Mutation): MutateWorldObjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MutateWorldObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MutateWorldObjectRequest): MutateWorldObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MutateWorldObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MutateWorldObjectRequest;
    static deserializeBinaryFromReader(message: MutateWorldObjectRequest, reader: jspb.BinaryReader): MutateWorldObjectRequest;
}

export namespace MutateWorldObjectRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        mutation?: MutateWorldObjectRequest.Mutation.AsObject,
    }


    export class Mutation extends jspb.Message { 
        getAction(): MutateWorldObjectRequest.Action;
        setAction(value: MutateWorldObjectRequest.Action): Mutation;

        hasObject(): boolean;
        clearObject(): void;
        getObject(): WorldObject | undefined;
        setObject(value?: WorldObject): Mutation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mutation.AsObject;
        static toObject(includeInstance: boolean, msg: Mutation): Mutation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mutation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mutation;
        static deserializeBinaryFromReader(message: Mutation, reader: jspb.BinaryReader): Mutation;
    }

    export namespace Mutation {
        export type AsObject = {
            action: MutateWorldObjectRequest.Action,
            object?: WorldObject.AsObject,
        }
    }


    export enum Action {
    ACTION_UNKNOWN = 0,
    ACTION_ADD = 1,
    ACTION_CHANGE = 2,
    ACTION_DELETE = 3,
    }

}

export class MutateWorldObjectResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): MutateWorldObjectResponse;
    getStatus(): MutateWorldObjectResponse.Status;
    setStatus(value: MutateWorldObjectResponse.Status): MutateWorldObjectResponse;
    getMutatedObjectId(): number;
    setMutatedObjectId(value: number): MutateWorldObjectResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MutateWorldObjectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MutateWorldObjectResponse): MutateWorldObjectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MutateWorldObjectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MutateWorldObjectResponse;
    static deserializeBinaryFromReader(message: MutateWorldObjectResponse, reader: jspb.BinaryReader): MutateWorldObjectResponse;
}

export namespace MutateWorldObjectResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: MutateWorldObjectResponse.Status,
        mutatedObjectId: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_MUTATION_ID = 2,
    STATUS_NO_PERMISSION = 3,
    STATUS_INVALID_WORLD_OBJECT = 4,
    }

}

export class NoGoRegionProperties extends jspb.Message { 

    hasBox(): boolean;
    clearBox(): void;
    getBox(): bosdyn_api_geometry_pb.Box2WithFrame | undefined;
    setBox(value?: bosdyn_api_geometry_pb.Box2WithFrame): NoGoRegionProperties;

    hasCircle(): boolean;
    clearCircle(): void;
    getCircle(): bosdyn_api_geometry_pb.CircleWithFrame | undefined;
    setCircle(value?: bosdyn_api_geometry_pb.CircleWithFrame): NoGoRegionProperties;
    getDisableFootObstacleGeneration(): boolean;
    setDisableFootObstacleGeneration(value: boolean): NoGoRegionProperties;
    getDisableBodyObstacleGeneration(): boolean;
    setDisableBodyObstacleGeneration(value: boolean): NoGoRegionProperties;
    getDisableFootObstacleInflation(): boolean;
    setDisableFootObstacleInflation(value: boolean): NoGoRegionProperties;

    getRegionCase(): NoGoRegionProperties.RegionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoGoRegionProperties.AsObject;
    static toObject(includeInstance: boolean, msg: NoGoRegionProperties): NoGoRegionProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoGoRegionProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoGoRegionProperties;
    static deserializeBinaryFromReader(message: NoGoRegionProperties, reader: jspb.BinaryReader): NoGoRegionProperties;
}

export namespace NoGoRegionProperties {
    export type AsObject = {
        box?: bosdyn_api_geometry_pb.Box2WithFrame.AsObject,
        circle?: bosdyn_api_geometry_pb.CircleWithFrame.AsObject,
        disableFootObstacleGeneration: boolean,
        disableBodyObstacleGeneration: boolean,
        disableFootObstacleInflation: boolean,
    }

    export enum RegionCase {
        REGION_NOT_SET = 0,
        BOX = 1,
        CIRCLE = 5,
    }

}

export class ImageProperties extends jspb.Message { 
    getCameraSource(): string;
    setCameraSource(value: string): ImageProperties;

    hasCoordinates(): boolean;
    clearCoordinates(): void;
    getCoordinates(): bosdyn_api_geometry_pb.Polygon | undefined;
    setCoordinates(value?: bosdyn_api_geometry_pb.Polygon): ImageProperties;

    hasKeypoints(): boolean;
    clearKeypoints(): void;
    getKeypoints(): bosdyn_api_sparse_features_pb.KeypointSet | undefined;
    setKeypoints(value?: bosdyn_api_sparse_features_pb.KeypointSet): ImageProperties;

    hasImageSource(): boolean;
    clearImageSource(): void;
    getImageSource(): bosdyn_api_image_pb.ImageSource | undefined;
    setImageSource(value?: bosdyn_api_image_pb.ImageSource): ImageProperties;

    hasImageCapture(): boolean;
    clearImageCapture(): void;
    getImageCapture(): bosdyn_api_image_pb.ImageCapture | undefined;
    setImageCapture(value?: bosdyn_api_image_pb.ImageCapture): ImageProperties;
    getFrameNameImageCoordinates(): string;
    setFrameNameImageCoordinates(value: string): ImageProperties;

    getImageDataCase(): ImageProperties.ImageDataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageProperties.AsObject;
    static toObject(includeInstance: boolean, msg: ImageProperties): ImageProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageProperties;
    static deserializeBinaryFromReader(message: ImageProperties, reader: jspb.BinaryReader): ImageProperties;
}

export namespace ImageProperties {
    export type AsObject = {
        cameraSource: string,
        coordinates?: bosdyn_api_geometry_pb.Polygon.AsObject,
        keypoints?: bosdyn_api_sparse_features_pb.KeypointSet.AsObject,
        imageSource?: bosdyn_api_image_pb.ImageSource.AsObject,
        imageCapture?: bosdyn_api_image_pb.ImageCapture.AsObject,
        frameNameImageCoordinates: string,
    }

    export enum ImageDataCase {
        IMAGE_DATA_NOT_SET = 0,
        COORDINATES = 2,
        KEYPOINTS = 4,
    }

}

export class DockProperties extends jspb.Message { 
    getDockId(): number;
    setDockId(value: number): DockProperties;
    getType(): bosdyn_api_docking_docking_pb.DockType;
    setType(value: bosdyn_api_docking_docking_pb.DockType): DockProperties;
    getFrameNameDock(): string;
    setFrameNameDock(value: string): DockProperties;
    getUnavailable(): boolean;
    setUnavailable(value: boolean): DockProperties;
    getFromPrior(): boolean;
    setFromPrior(value: boolean): DockProperties;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DockProperties.AsObject;
    static toObject(includeInstance: boolean, msg: DockProperties): DockProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DockProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DockProperties;
    static deserializeBinaryFromReader(message: DockProperties, reader: jspb.BinaryReader): DockProperties;
}

export namespace DockProperties {
    export type AsObject = {
        dockId: number,
        type: bosdyn_api_docking_docking_pb.DockType,
        frameNameDock: string,
        unavailable: boolean,
        fromPrior: boolean,
    }
}

export class AprilTagProperties extends jspb.Message { 
    getTagId(): number;
    setTagId(value: number): AprilTagProperties;

    hasDimensions(): boolean;
    clearDimensions(): void;
    getDimensions(): bosdyn_api_geometry_pb.Vec2 | undefined;
    setDimensions(value?: bosdyn_api_geometry_pb.Vec2): AprilTagProperties;
    getFrameNameFiducial(): string;
    setFrameNameFiducial(value: string): AprilTagProperties;
    getFiducialPoseStatus(): AprilTagProperties.AprilTagPoseStatus;
    setFiducialPoseStatus(value: AprilTagProperties.AprilTagPoseStatus): AprilTagProperties;
    getFrameNameFiducialFiltered(): string;
    setFrameNameFiducialFiltered(value: string): AprilTagProperties;
    getFiducialFilteredPoseStatus(): AprilTagProperties.AprilTagPoseStatus;
    setFiducialFilteredPoseStatus(value: AprilTagProperties.AprilTagPoseStatus): AprilTagProperties;
    getFrameNameCamera(): string;
    setFrameNameCamera(value: string): AprilTagProperties;

    hasDetectionCovariance(): boolean;
    clearDetectionCovariance(): void;
    getDetectionCovariance(): bosdyn_api_geometry_pb.SE3Covariance | undefined;
    setDetectionCovariance(value?: bosdyn_api_geometry_pb.SE3Covariance): AprilTagProperties;
    getDetectionCovarianceReferenceFrame(): string;
    setDetectionCovarianceReferenceFrame(value: string): AprilTagProperties;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AprilTagProperties.AsObject;
    static toObject(includeInstance: boolean, msg: AprilTagProperties): AprilTagProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AprilTagProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AprilTagProperties;
    static deserializeBinaryFromReader(message: AprilTagProperties, reader: jspb.BinaryReader): AprilTagProperties;
}

export namespace AprilTagProperties {
    export type AsObject = {
        tagId: number,
        dimensions?: bosdyn_api_geometry_pb.Vec2.AsObject,
        frameNameFiducial: string,
        fiducialPoseStatus: AprilTagProperties.AprilTagPoseStatus,
        frameNameFiducialFiltered: string,
        fiducialFilteredPoseStatus: AprilTagProperties.AprilTagPoseStatus,
        frameNameCamera: string,
        detectionCovariance?: bosdyn_api_geometry_pb.SE3Covariance.AsObject,
        detectionCovarianceReferenceFrame: string,
    }

    export enum AprilTagPoseStatus {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_AMBIGUOUS = 2,
    STATUS_HIGH_ERROR = 3,
    }

}

export class RayProperties extends jspb.Message { 

    hasRay(): boolean;
    clearRay(): void;
    getRay(): bosdyn_api_geometry_pb.Ray | undefined;
    setRay(value?: bosdyn_api_geometry_pb.Ray): RayProperties;
    getFrame(): string;
    setFrame(value: string): RayProperties;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RayProperties.AsObject;
    static toObject(includeInstance: boolean, msg: RayProperties): RayProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RayProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RayProperties;
    static deserializeBinaryFromReader(message: RayProperties, reader: jspb.BinaryReader): RayProperties;
}

export namespace RayProperties {
    export type AsObject = {
        ray?: bosdyn_api_geometry_pb.Ray.AsObject,
        frame: string,
    }
}

export class BoundingBoxProperties extends jspb.Message { 

    hasSizeEwrtFrame(): boolean;
    clearSizeEwrtFrame(): void;
    getSizeEwrtFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setSizeEwrtFrame(value?: bosdyn_api_geometry_pb.Vec3): BoundingBoxProperties;
    getFrame(): string;
    setFrame(value: string): BoundingBoxProperties;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoundingBoxProperties.AsObject;
    static toObject(includeInstance: boolean, msg: BoundingBoxProperties): BoundingBoxProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoundingBoxProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoundingBoxProperties;
    static deserializeBinaryFromReader(message: BoundingBoxProperties, reader: jspb.BinaryReader): BoundingBoxProperties;
}

export namespace BoundingBoxProperties {
    export type AsObject = {
        sizeEwrtFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        frame: string,
    }
}

export class TrackedEntityProperties extends jspb.Message { 
    getEntityId(): number;
    setEntityId(value: number): TrackedEntityProperties;
    getEntityType(): TrackedEntityProperties.EntityType;
    setEntityType(value: TrackedEntityProperties.EntityType): TrackedEntityProperties;
    getFrame(): string;
    setFrame(value: string): TrackedEntityProperties;

    hasSizeInFrame(): boolean;
    clearSizeInFrame(): void;
    getSizeInFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setSizeInFrame(value?: bosdyn_api_geometry_pb.Vec3): TrackedEntityProperties;
    getVelocityFrame(): string;
    setVelocityFrame(value: string): TrackedEntityProperties;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setVelocity(value?: bosdyn_api_geometry_pb.Vec3): TrackedEntityProperties;
    getLikelihoodExists(): number;
    setLikelihoodExists(value: number): TrackedEntityProperties;

    getTypeLikelihoodsMap(): jspb.Map<number, number>;
    clearTypeLikelihoodsMap(): void;
    getNumObservations(): number;
    setNumObservations(value: number): TrackedEntityProperties;
    getMaxObservedVelocity(): number;
    setMaxObservedVelocity(value: number): TrackedEntityProperties;

    hasWindowedAverageVelocity(): boolean;
    clearWindowedAverageVelocity(): void;
    getWindowedAverageVelocity(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setWindowedAverageVelocity(value?: bosdyn_api_geometry_pb.Vec3): TrackedEntityProperties;
    getVelocityWindowSizeSeconds(): number;
    setVelocityWindowSizeSeconds(value: number): TrackedEntityProperties;
    getWindowedVelocityMagnitude(): number;
    setWindowedVelocityMagnitude(value: number): TrackedEntityProperties;

    hasDirectionInVision(): boolean;
    clearDirectionInVision(): void;
    getDirectionInVision(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setDirectionInVision(value?: bosdyn_api_geometry_pb.Vec3): TrackedEntityProperties;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrackedEntityProperties.AsObject;
    static toObject(includeInstance: boolean, msg: TrackedEntityProperties): TrackedEntityProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrackedEntityProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrackedEntityProperties;
    static deserializeBinaryFromReader(message: TrackedEntityProperties, reader: jspb.BinaryReader): TrackedEntityProperties;
}

export namespace TrackedEntityProperties {
    export type AsObject = {
        entityId: number,
        entityType: TrackedEntityProperties.EntityType,
        frame: string,
        sizeInFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
        velocityFrame: string,
        velocity?: bosdyn_api_geometry_pb.Vec3.AsObject,
        likelihoodExists: number,

        typeLikelihoodsMap: Array<[number, number]>,
        numObservations: number,
        maxObservedVelocity: number,
        windowedAverageVelocity?: bosdyn_api_geometry_pb.Vec3.AsObject,
        velocityWindowSizeSeconds: number,
        windowedVelocityMagnitude: number,
        directionInVision?: bosdyn_api_geometry_pb.Vec3.AsObject,
    }

    export enum EntityType {
    ENTITY_TYPE_UNKNOWN = 0,
    ENTITY_TYPE_3D_BLOB = 1,
    ENTITY_TYPE_PERSON = 2,
    ENTITY_TYPE_FORKLIFT = 3,
    ENTITY_TYPE_SPOT = 4,
    }

}

export class DrawableProperties extends jspb.Message { 

    hasColor(): boolean;
    clearColor(): void;
    getColor(): DrawableProperties.Color | undefined;
    setColor(value?: DrawableProperties.Color): DrawableProperties;
    getLabel(): string;
    setLabel(value: string): DrawableProperties;
    getWireframe(): boolean;
    setWireframe(value: boolean): DrawableProperties;

    hasFrame(): boolean;
    clearFrame(): void;
    getFrame(): DrawableFrame | undefined;
    setFrame(value?: DrawableFrame): DrawableProperties;

    hasSphere(): boolean;
    clearSphere(): void;
    getSphere(): DrawableSphere | undefined;
    setSphere(value?: DrawableSphere): DrawableProperties;

    hasBox(): boolean;
    clearBox(): void;
    getBox(): DrawableBox | undefined;
    setBox(value?: DrawableBox): DrawableProperties;

    hasArrow(): boolean;
    clearArrow(): void;
    getArrow(): DrawableArrow | undefined;
    setArrow(value?: DrawableArrow): DrawableProperties;

    hasCapsule(): boolean;
    clearCapsule(): void;
    getCapsule(): DrawableCapsule | undefined;
    setCapsule(value?: DrawableCapsule): DrawableProperties;

    hasCylinder(): boolean;
    clearCylinder(): void;
    getCylinder(): DrawableCylinder | undefined;
    setCylinder(value?: DrawableCylinder): DrawableProperties;

    hasLinestrip(): boolean;
    clearLinestrip(): void;
    getLinestrip(): DrawableLineStrip | undefined;
    setLinestrip(value?: DrawableLineStrip): DrawableProperties;

    hasPoints(): boolean;
    clearPoints(): void;
    getPoints(): DrawablePoints | undefined;
    setPoints(value?: DrawablePoints): DrawableProperties;
    getFrameNameDrawable(): string;
    setFrameNameDrawable(value: string): DrawableProperties;

    getDrawableCase(): DrawableProperties.DrawableCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawableProperties.AsObject;
    static toObject(includeInstance: boolean, msg: DrawableProperties): DrawableProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawableProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawableProperties;
    static deserializeBinaryFromReader(message: DrawableProperties, reader: jspb.BinaryReader): DrawableProperties;
}

export namespace DrawableProperties {
    export type AsObject = {
        color?: DrawableProperties.Color.AsObject,
        label: string,
        wireframe: boolean,
        frame?: DrawableFrame.AsObject,
        sphere?: DrawableSphere.AsObject,
        box?: DrawableBox.AsObject,
        arrow?: DrawableArrow.AsObject,
        capsule?: DrawableCapsule.AsObject,
        cylinder?: DrawableCylinder.AsObject,
        linestrip?: DrawableLineStrip.AsObject,
        points?: DrawablePoints.AsObject,
        frameNameDrawable: string,
    }


    export class Color extends jspb.Message { 
        getR(): number;
        setR(value: number): Color;
        getG(): number;
        setG(value: number): Color;
        getB(): number;
        setB(value: number): Color;
        getA(): number;
        setA(value: number): Color;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Color.AsObject;
        static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Color;
        static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
    }

    export namespace Color {
        export type AsObject = {
            r: number,
            g: number,
            b: number,
            a: number,
        }
    }


    export enum DrawableCase {
        DRAWABLE_NOT_SET = 0,
        FRAME = 4,
        SPHERE = 5,
        BOX = 6,
        ARROW = 7,
        CAPSULE = 8,
        CYLINDER = 9,
        LINESTRIP = 10,
        POINTS = 11,
    }

}

export class StaircaseProperties extends jspb.Message { 

    hasStaircase(): boolean;
    clearStaircase(): void;
    getStaircase(): bosdyn_api_stairs_pb.Staircase | undefined;
    setStaircase(value?: bosdyn_api_stairs_pb.Staircase): StaircaseProperties;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StaircaseProperties.AsObject;
    static toObject(includeInstance: boolean, msg: StaircaseProperties): StaircaseProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StaircaseProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StaircaseProperties;
    static deserializeBinaryFromReader(message: StaircaseProperties, reader: jspb.BinaryReader): StaircaseProperties;
}

export namespace StaircaseProperties {
    export type AsObject = {
        staircase?: bosdyn_api_stairs_pb.Staircase.AsObject,
    }
}

export class GpsProperties extends jspb.Message { 

    hasRegistration(): boolean;
    clearRegistration(): void;
    getRegistration(): bosdyn_api_gps_registration_pb.Registration | undefined;
    setRegistration(value?: bosdyn_api_gps_registration_pb.Registration): GpsProperties;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GpsProperties.AsObject;
    static toObject(includeInstance: boolean, msg: GpsProperties): GpsProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GpsProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GpsProperties;
    static deserializeBinaryFromReader(message: GpsProperties, reader: jspb.BinaryReader): GpsProperties;
}

export namespace GpsProperties {
    export type AsObject = {
        registration?: bosdyn_api_gps_registration_pb.Registration.AsObject,
    }
}

export class DrawableFrame extends jspb.Message { 
    getArrowLength(): number;
    setArrowLength(value: number): DrawableFrame;
    getArrowRadius(): number;
    setArrowRadius(value: number): DrawableFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawableFrame.AsObject;
    static toObject(includeInstance: boolean, msg: DrawableFrame): DrawableFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawableFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawableFrame;
    static deserializeBinaryFromReader(message: DrawableFrame, reader: jspb.BinaryReader): DrawableFrame;
}

export namespace DrawableFrame {
    export type AsObject = {
        arrowLength: number,
        arrowRadius: number,
    }
}

export class DrawableSphere extends jspb.Message { 
    getRadius(): number;
    setRadius(value: number): DrawableSphere;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawableSphere.AsObject;
    static toObject(includeInstance: boolean, msg: DrawableSphere): DrawableSphere.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawableSphere, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawableSphere;
    static deserializeBinaryFromReader(message: DrawableSphere, reader: jspb.BinaryReader): DrawableSphere;
}

export namespace DrawableSphere {
    export type AsObject = {
        radius: number,
    }
}

export class DrawableBox extends jspb.Message { 

    hasSize(): boolean;
    clearSize(): void;
    getSize(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setSize(value?: bosdyn_api_geometry_pb.Vec3): DrawableBox;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawableBox.AsObject;
    static toObject(includeInstance: boolean, msg: DrawableBox): DrawableBox.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawableBox, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawableBox;
    static deserializeBinaryFromReader(message: DrawableBox, reader: jspb.BinaryReader): DrawableBox;
}

export namespace DrawableBox {
    export type AsObject = {
        size?: bosdyn_api_geometry_pb.Vec3.AsObject,
    }
}

export class DrawableArrow extends jspb.Message { 

    hasDirection(): boolean;
    clearDirection(): void;
    getDirection(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setDirection(value?: bosdyn_api_geometry_pb.Vec3): DrawableArrow;
    getRadius(): number;
    setRadius(value: number): DrawableArrow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawableArrow.AsObject;
    static toObject(includeInstance: boolean, msg: DrawableArrow): DrawableArrow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawableArrow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawableArrow;
    static deserializeBinaryFromReader(message: DrawableArrow, reader: jspb.BinaryReader): DrawableArrow;
}

export namespace DrawableArrow {
    export type AsObject = {
        direction?: bosdyn_api_geometry_pb.Vec3.AsObject,
        radius: number,
    }
}

export class DrawableCapsule extends jspb.Message { 

    hasDirection(): boolean;
    clearDirection(): void;
    getDirection(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setDirection(value?: bosdyn_api_geometry_pb.Vec3): DrawableCapsule;
    getRadius(): number;
    setRadius(value: number): DrawableCapsule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawableCapsule.AsObject;
    static toObject(includeInstance: boolean, msg: DrawableCapsule): DrawableCapsule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawableCapsule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawableCapsule;
    static deserializeBinaryFromReader(message: DrawableCapsule, reader: jspb.BinaryReader): DrawableCapsule;
}

export namespace DrawableCapsule {
    export type AsObject = {
        direction?: bosdyn_api_geometry_pb.Vec3.AsObject,
        radius: number,
    }
}

export class DrawableCylinder extends jspb.Message { 

    hasDirection(): boolean;
    clearDirection(): void;
    getDirection(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setDirection(value?: bosdyn_api_geometry_pb.Vec3): DrawableCylinder;
    getRadius(): number;
    setRadius(value: number): DrawableCylinder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawableCylinder.AsObject;
    static toObject(includeInstance: boolean, msg: DrawableCylinder): DrawableCylinder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawableCylinder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawableCylinder;
    static deserializeBinaryFromReader(message: DrawableCylinder, reader: jspb.BinaryReader): DrawableCylinder;
}

export namespace DrawableCylinder {
    export type AsObject = {
        direction?: bosdyn_api_geometry_pb.Vec3.AsObject,
        radius: number,
    }
}

export class DrawableLineStrip extends jspb.Message { 

    hasPoints(): boolean;
    clearPoints(): void;
    getPoints(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setPoints(value?: bosdyn_api_geometry_pb.Vec3): DrawableLineStrip;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawableLineStrip.AsObject;
    static toObject(includeInstance: boolean, msg: DrawableLineStrip): DrawableLineStrip.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawableLineStrip, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawableLineStrip;
    static deserializeBinaryFromReader(message: DrawableLineStrip, reader: jspb.BinaryReader): DrawableLineStrip;
}

export namespace DrawableLineStrip {
    export type AsObject = {
        points?: bosdyn_api_geometry_pb.Vec3.AsObject,
    }
}

export class DrawablePoints extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<bosdyn_api_geometry_pb.Vec3>;
    setPointsList(value: Array<bosdyn_api_geometry_pb.Vec3>): DrawablePoints;
    addPoints(value?: bosdyn_api_geometry_pb.Vec3, index?: number): bosdyn_api_geometry_pb.Vec3;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrawablePoints.AsObject;
    static toObject(includeInstance: boolean, msg: DrawablePoints): DrawablePoints.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrawablePoints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrawablePoints;
    static deserializeBinaryFromReader(message: DrawablePoints, reader: jspb.BinaryReader): DrawablePoints;
}

export namespace DrawablePoints {
    export type AsObject = {
        pointsList: Array<bosdyn_api_geometry_pb.Vec3.AsObject>,
    }
}

export enum WorldObjectType {
    WORLD_OBJECT_UNKNOWN = 0,
    WORLD_OBJECT_DRAWABLE = 1,
    WORLD_OBJECT_APRILTAG = 2,
    WORLD_OBJECT_IMAGE_COORDINATES = 5,
    WORLD_OBJECT_DOCK = 6,
    WORLD_OBJECT_TRACKED_ENTITY = 7,
    WORLD_OBJECT_USER_NOGO = 8,
    WORLD_OBJECT_STAIRCASE = 9,
}
