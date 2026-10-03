// package: bosdyn.api
// file: bosdyn/api/hazard_avoidance.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_image_pb from "../../bosdyn/api/image_pb";
import * as bosdyn_api_point_cloud_pb from "../../bosdyn/api/point_cloud_pb";

export class HazardObservation extends jspb.Message { 

    hasAcquisitionTime(): boolean;
    clearAcquisitionTime(): void;
    getAcquisitionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAcquisitionTime(value?: google_protobuf_timestamp_pb.Timestamp): HazardObservation;

    hasPointCloud(): boolean;
    clearPointCloud(): void;
    getPointCloud(): bosdyn_api_point_cloud_pb.PointCloud | undefined;
    setPointCloud(value?: bosdyn_api_point_cloud_pb.PointCloud): HazardObservation;

    hasSegmentedDepth(): boolean;
    clearSegmentedDepth(): void;
    getSegmentedDepth(): bosdyn_api_image_pb.ImageCaptureAndSource | undefined;
    setSegmentedDepth(value?: bosdyn_api_image_pb.ImageCaptureAndSource): HazardObservation;

    hasBox(): boolean;
    clearBox(): void;
    getBox(): bosdyn_api_geometry_pb.Box2WithFrame | undefined;
    setBox(value?: bosdyn_api_geometry_pb.Box2WithFrame): HazardObservation;

    hasCircle(): boolean;
    clearCircle(): void;
    getCircle(): bosdyn_api_geometry_pb.Circle | undefined;
    setCircle(value?: bosdyn_api_geometry_pb.Circle): HazardObservation;

    hasCircleList(): boolean;
    clearCircleList(): void;
    getCircleList(): HazardObservation.CircleList | undefined;
    setCircleList(value?: HazardObservation.CircleList): HazardObservation;
    getType(): HazardObservation.HazardType;
    setType(value: HazardObservation.HazardType): HazardObservation;
    getLikelihood(): number;
    setLikelihood(value: number): HazardObservation;
    getSemanticLabel(): string;
    setSemanticLabel(value: string): HazardObservation;
    getMargin(): number;
    setMargin(value: number): HazardObservation;

    getObservationDataCase(): HazardObservation.ObservationDataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HazardObservation.AsObject;
    static toObject(includeInstance: boolean, msg: HazardObservation): HazardObservation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HazardObservation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HazardObservation;
    static deserializeBinaryFromReader(message: HazardObservation, reader: jspb.BinaryReader): HazardObservation;
}

export namespace HazardObservation {
    export type AsObject = {
        acquisitionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pointCloud?: bosdyn_api_point_cloud_pb.PointCloud.AsObject,
        segmentedDepth?: bosdyn_api_image_pb.ImageCaptureAndSource.AsObject,
        box?: bosdyn_api_geometry_pb.Box2WithFrame.AsObject,
        circle?: bosdyn_api_geometry_pb.Circle.AsObject,
        circleList?: HazardObservation.CircleList.AsObject,
        type: HazardObservation.HazardType,
        likelihood: number,
        semanticLabel: string,
        margin: number,
    }


    export class CircleList extends jspb.Message { 
        clearCirclesList(): void;
        getCirclesList(): Array<bosdyn_api_geometry_pb.Circle>;
        setCirclesList(value: Array<bosdyn_api_geometry_pb.Circle>): CircleList;
        addCircles(value?: bosdyn_api_geometry_pb.Circle, index?: number): bosdyn_api_geometry_pb.Circle;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CircleList.AsObject;
        static toObject(includeInstance: boolean, msg: CircleList): CircleList.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CircleList, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CircleList;
        static deserializeBinaryFromReader(message: CircleList, reader: jspb.BinaryReader): CircleList;
    }

    export namespace CircleList {
        export type AsObject = {
            circlesList: Array<bosdyn_api_geometry_pb.Circle.AsObject>,
        }
    }


    export enum HazardType {
    TYPE_UNKNOWN = 0,
    TYPE_PREFER_AVOID_WEAK = 1,
    TYPE_PREFER_AVOID_STRONG = 2,
    TYPE_NEVER_STEP_ON = 3,
    TYPE_NEVER_STEP_ACROSS = 4,
    TYPE_PREFER_STEP_ON = 5,
    TYPE_NEVER_STEP_ON_AVOID_MARGIN = 6,
    TYPE_NEVER_STEP_ACROSS_AVOID_MARGIN = 7,
    }


    export enum ObservationDataCase {
        OBSERVATION_DATA_NOT_SET = 0,
        POINT_CLOUD = 2,
        SEGMENTED_DEPTH = 3,
        BOX = 8,
        CIRCLE = 9,
        CIRCLE_LIST = 10,
    }

}

export class AddHazardsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): AddHazardsRequest;
    clearHazardsList(): void;
    getHazardsList(): Array<HazardObservation>;
    setHazardsList(value: Array<HazardObservation>): AddHazardsRequest;
    addHazards(value?: HazardObservation, index?: number): HazardObservation;

    hasVisionTformBody(): boolean;
    clearVisionTformBody(): void;
    getVisionTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setVisionTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): AddHazardsRequest;
    getSkipAggregation(): boolean;
    setSkipAggregation(value: boolean): AddHazardsRequest;

    hasMaxUnaggregatedUpdateAge(): boolean;
    clearMaxUnaggregatedUpdateAge(): void;
    getMaxUnaggregatedUpdateAge(): google_protobuf_duration_pb.Duration | undefined;
    setMaxUnaggregatedUpdateAge(value?: google_protobuf_duration_pb.Duration): AddHazardsRequest;
    getHazardSource(): string;
    setHazardSource(value: string): AddHazardsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddHazardsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddHazardsRequest): AddHazardsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddHazardsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddHazardsRequest;
    static deserializeBinaryFromReader(message: AddHazardsRequest, reader: jspb.BinaryReader): AddHazardsRequest;
}

export namespace AddHazardsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        hazardsList: Array<HazardObservation.AsObject>,
        visionTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        skipAggregation: boolean,
        maxUnaggregatedUpdateAge?: google_protobuf_duration_pb.Duration.AsObject,
        hazardSource: string,
    }
}

export class AddHazardResult extends jspb.Message { 
    getStatus(): AddHazardResult.Status;
    setStatus(value: AddHazardResult.Status): AddHazardResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddHazardResult.AsObject;
    static toObject(includeInstance: boolean, msg: AddHazardResult): AddHazardResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddHazardResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddHazardResult;
    static deserializeBinaryFromReader(message: AddHazardResult, reader: jspb.BinaryReader): AddHazardResult;
}

export namespace AddHazardResult {
    export type AsObject = {
        status: AddHazardResult.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_HAZARDS_UPDATED = 1,
    STATUS_IGNORED = 2,
    STATUS_INVALID_DATA = 5,
    }

}

export class AddHazardsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): AddHazardsResponse;
    clearAddHazardResultsList(): void;
    getAddHazardResultsList(): Array<AddHazardResult>;
    setAddHazardResultsList(value: Array<AddHazardResult>): AddHazardsResponse;
    addAddHazardResults(value?: AddHazardResult, index?: number): AddHazardResult;
    getNumHazardsUpdated(): number;
    setNumHazardsUpdated(value: number): AddHazardsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddHazardsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddHazardsResponse): AddHazardsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddHazardsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddHazardsResponse;
    static deserializeBinaryFromReader(message: AddHazardsResponse, reader: jspb.BinaryReader): AddHazardsResponse;
}

export namespace AddHazardsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        addHazardResultsList: Array<AddHazardResult.AsObject>,
        numHazardsUpdated: number,
    }
}

export class GetHazardServiceStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetHazardServiceStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHazardServiceStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetHazardServiceStatusRequest): GetHazardServiceStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHazardServiceStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHazardServiceStatusRequest;
    static deserializeBinaryFromReader(message: GetHazardServiceStatusRequest, reader: jspb.BinaryReader): GetHazardServiceStatusRequest;
}

export namespace GetHazardServiceStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetHazardServiceStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetHazardServiceStatusResponse;

    hasTimeSinceLastObservation(): boolean;
    clearTimeSinceLastObservation(): void;
    getTimeSinceLastObservation(): google_protobuf_duration_pb.Duration | undefined;
    setTimeSinceLastObservation(value?: google_protobuf_duration_pb.Duration): GetHazardServiceStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHazardServiceStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetHazardServiceStatusResponse): GetHazardServiceStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHazardServiceStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHazardServiceStatusResponse;
    static deserializeBinaryFromReader(message: GetHazardServiceStatusResponse, reader: jspb.BinaryReader): GetHazardServiceStatusResponse;
}

export namespace GetHazardServiceStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        timeSinceLastObservation?: google_protobuf_duration_pb.Duration.AsObject,
    }
}
