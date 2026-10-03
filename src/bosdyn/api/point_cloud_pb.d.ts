// package: bosdyn.api
// file: bosdyn/api/point_cloud.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PointCloudSource extends jspb.Message { 
    getName(): string;
    setName(value: string): PointCloudSource;
    getFrameNameSensor(): string;
    setFrameNameSensor(value: string): PointCloudSource;

    hasAcquisitionTime(): boolean;
    clearAcquisitionTime(): void;
    getAcquisitionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAcquisitionTime(value?: google_protobuf_timestamp_pb.Timestamp): PointCloudSource;

    hasTransformsSnapshot(): boolean;
    clearTransformsSnapshot(): void;
    getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): PointCloudSource;
    clearSupportedCloudTypesList(): void;
    getSupportedCloudTypesList(): Array<PointCloudRequest.PointCloudType>;
    setSupportedCloudTypesList(value: Array<PointCloudRequest.PointCloudType>): PointCloudSource;
    addSupportedCloudTypes(value: PointCloudRequest.PointCloudType, index?: number): PointCloudRequest.PointCloudType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointCloudSource.AsObject;
    static toObject(includeInstance: boolean, msg: PointCloudSource): PointCloudSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PointCloudSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointCloudSource;
    static deserializeBinaryFromReader(message: PointCloudSource, reader: jspb.BinaryReader): PointCloudSource;
}

export namespace PointCloudSource {
    export type AsObject = {
        name: string,
        frameNameSensor: string,
        acquisitionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
        supportedCloudTypesList: Array<PointCloudRequest.PointCloudType>,
    }
}

export class PointCloud extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): PointCloudSource | undefined;
    setSource(value?: PointCloudSource): PointCloud;
    getNumPoints(): number;
    setNumPoints(value: number): PointCloud;
    getEncoding(): PointCloud.Encoding;
    setEncoding(value: PointCloud.Encoding): PointCloud;

    hasEncodingParameters(): boolean;
    clearEncodingParameters(): void;
    getEncodingParameters(): PointCloud.EncodingParameters | undefined;
    setEncodingParameters(value?: PointCloud.EncodingParameters): PointCloud;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): PointCloud;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointCloud.AsObject;
    static toObject(includeInstance: boolean, msg: PointCloud): PointCloud.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PointCloud, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointCloud;
    static deserializeBinaryFromReader(message: PointCloud, reader: jspb.BinaryReader): PointCloud;
}

export namespace PointCloud {
    export type AsObject = {
        source?: PointCloudSource.AsObject,
        numPoints: number,
        encoding: PointCloud.Encoding,
        encodingParameters?: PointCloud.EncodingParameters.AsObject,
        data: Uint8Array | string,
    }


    export class EncodingParameters extends jspb.Message { 
        getScaleFactor(): number;
        setScaleFactor(value: number): EncodingParameters;
        getMaxX(): number;
        setMaxX(value: number): EncodingParameters;
        getMaxY(): number;
        setMaxY(value: number): EncodingParameters;
        getMaxZ(): number;
        setMaxZ(value: number): EncodingParameters;
        getRemappingConstant(): number;
        setRemappingConstant(value: number): EncodingParameters;
        getBytesPerPoint(): number;
        setBytesPerPoint(value: number): EncodingParameters;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EncodingParameters.AsObject;
        static toObject(includeInstance: boolean, msg: EncodingParameters): EncodingParameters.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EncodingParameters, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EncodingParameters;
        static deserializeBinaryFromReader(message: EncodingParameters, reader: jspb.BinaryReader): EncodingParameters;
    }

    export namespace EncodingParameters {
        export type AsObject = {
            scaleFactor: number,
            maxX: number,
            maxY: number,
            maxZ: number,
            remappingConstant: number,
            bytesPerPoint: number,
        }
    }


    export enum Encoding {
    ENCODING_UNKNOWN = 0,
    ENCODING_XYZ_32F = 1,
    ENCODING_XYZ_4SC = 2,
    ENCODING_XYZ_5SC = 3,
    }

}

export class LidarPointCloud extends jspb.Message { 

    hasPointCloud(): boolean;
    clearPointCloud(): void;
    getPointCloud(): PointCloud | undefined;
    setPointCloud(value?: PointCloud): LidarPointCloud;
    getNumBeams(): number;
    setNumBeams(value: number): LidarPointCloud;
    getNumScans(): number;
    setNumScans(value: number): LidarPointCloud;
    clearLidarPoseHistoryList(): void;
    getLidarPoseHistoryList(): Array<LidarPointCloud.LidarPoseSample>;
    setLidarPoseHistoryList(value: Array<LidarPointCloud.LidarPoseSample>): LidarPointCloud;
    addLidarPoseHistory(value?: LidarPointCloud.LidarPoseSample, index?: number): LidarPointCloud.LidarPoseSample;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LidarPointCloud.AsObject;
    static toObject(includeInstance: boolean, msg: LidarPointCloud): LidarPointCloud.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LidarPointCloud, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LidarPointCloud;
    static deserializeBinaryFromReader(message: LidarPointCloud, reader: jspb.BinaryReader): LidarPointCloud;
}

export namespace LidarPointCloud {
    export type AsObject = {
        pointCloud?: PointCloud.AsObject,
        numBeams: number,
        numScans: number,
        lidarPoseHistoryList: Array<LidarPointCloud.LidarPoseSample.AsObject>,
    }


    export class LidarPoseSample extends jspb.Message { 

        hasLidarPosInVision(): boolean;
        clearLidarPosInVision(): void;
        getLidarPosInVision(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setLidarPosInVision(value?: bosdyn_api_geometry_pb.Vec3): LidarPoseSample;

        hasAcquisitionTime(): boolean;
        clearAcquisitionTime(): void;
        getAcquisitionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setAcquisitionTime(value?: google_protobuf_timestamp_pb.Timestamp): LidarPoseSample;
        getScanNumber(): number;
        setScanNumber(value: number): LidarPoseSample;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LidarPoseSample.AsObject;
        static toObject(includeInstance: boolean, msg: LidarPoseSample): LidarPoseSample.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: LidarPoseSample, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LidarPoseSample;
        static deserializeBinaryFromReader(message: LidarPoseSample, reader: jspb.BinaryReader): LidarPoseSample;
    }

    export namespace LidarPoseSample {
        export type AsObject = {
            lidarPosInVision?: bosdyn_api_geometry_pb.Vec3.AsObject,
            acquisitionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            scanNumber: number,
        }
    }

}

export class ListPointCloudSourcesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListPointCloudSourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPointCloudSourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPointCloudSourcesRequest): ListPointCloudSourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPointCloudSourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPointCloudSourcesRequest;
    static deserializeBinaryFromReader(message: ListPointCloudSourcesRequest, reader: jspb.BinaryReader): ListPointCloudSourcesRequest;
}

export namespace ListPointCloudSourcesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListPointCloudSourcesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListPointCloudSourcesResponse;
    clearPointCloudSourcesList(): void;
    getPointCloudSourcesList(): Array<PointCloudSource>;
    setPointCloudSourcesList(value: Array<PointCloudSource>): ListPointCloudSourcesResponse;
    addPointCloudSources(value?: PointCloudSource, index?: number): PointCloudSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPointCloudSourcesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPointCloudSourcesResponse): ListPointCloudSourcesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPointCloudSourcesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPointCloudSourcesResponse;
    static deserializeBinaryFromReader(message: ListPointCloudSourcesResponse, reader: jspb.BinaryReader): ListPointCloudSourcesResponse;
}

export namespace ListPointCloudSourcesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        pointCloudSourcesList: Array<PointCloudSource.AsObject>,
    }
}

export class PointCloudRequest extends jspb.Message { 
    getPointCloudSourceName(): string;
    setPointCloudSourceName(value: string): PointCloudRequest;
    getCloudType(): PointCloudRequest.PointCloudType;
    setCloudType(value: PointCloudRequest.PointCloudType): PointCloudRequest;
    getDownsampleRate(): number;
    setDownsampleRate(value: number): PointCloudRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointCloudRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PointCloudRequest): PointCloudRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PointCloudRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointCloudRequest;
    static deserializeBinaryFromReader(message: PointCloudRequest, reader: jspb.BinaryReader): PointCloudRequest;
}

export namespace PointCloudRequest {
    export type AsObject = {
        pointCloudSourceName: string,
        cloudType: PointCloudRequest.PointCloudType,
        downsampleRate: number,
    }

    export enum PointCloudType {
    CLOUD_TYPE_UNKNOWN = 0,
    CLOUD_TYPE_POINTS = 1,
    CLOUD_TYPE_LIDAR = 2,
    }

}

export class GetPointCloudRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetPointCloudRequest;
    clearPointCloudRequestsList(): void;
    getPointCloudRequestsList(): Array<PointCloudRequest>;
    setPointCloudRequestsList(value: Array<PointCloudRequest>): GetPointCloudRequest;
    addPointCloudRequests(value?: PointCloudRequest, index?: number): PointCloudRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPointCloudRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPointCloudRequest): GetPointCloudRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPointCloudRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPointCloudRequest;
    static deserializeBinaryFromReader(message: GetPointCloudRequest, reader: jspb.BinaryReader): GetPointCloudRequest;
}

export namespace GetPointCloudRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        pointCloudRequestsList: Array<PointCloudRequest.AsObject>,
    }
}

export class PointCloudResponse extends jspb.Message { 
    getStatus(): PointCloudResponse.Status;
    setStatus(value: PointCloudResponse.Status): PointCloudResponse;

    hasPointCloud(): boolean;
    clearPointCloud(): void;
    getPointCloud(): PointCloud | undefined;
    setPointCloud(value?: PointCloud): PointCloudResponse;

    hasLidarCloud(): boolean;
    clearLidarCloud(): void;
    getLidarCloud(): LidarPointCloud | undefined;
    setLidarCloud(value?: LidarPointCloud): PointCloudResponse;
    getNoUpdate(): boolean;
    setNoUpdate(value: boolean): PointCloudResponse;
    getExpectedTimeToNextUpdate(): number;
    setExpectedTimeToNextUpdate(value: number): PointCloudResponse;

    getCloudDataCase(): PointCloudResponse.CloudDataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointCloudResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PointCloudResponse): PointCloudResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PointCloudResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointCloudResponse;
    static deserializeBinaryFromReader(message: PointCloudResponse, reader: jspb.BinaryReader): PointCloudResponse;
}

export namespace PointCloudResponse {
    export type AsObject = {
        status: PointCloudResponse.Status,
        pointCloud?: PointCloud.AsObject,
        lidarCloud?: LidarPointCloud.AsObject,
        noUpdate: boolean,
        expectedTimeToNextUpdate: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_SOURCE_DATA_ERROR = 2,
    STATUS_POINT_CLOUD_DATA_ERROR = 3,
    STATUS_UNKNOWN_SOURCE = 4,
    STATUS_UNSUPPORTED_CLOUD_TYPE = 5,
    }


    export enum CloudDataCase {
        CLOUD_DATA_NOT_SET = 0,
        POINT_CLOUD = 2,
        LIDAR_CLOUD = 3,
    }

}

export class GetPointCloudResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetPointCloudResponse;
    clearPointCloudResponsesList(): void;
    getPointCloudResponsesList(): Array<PointCloudResponse>;
    setPointCloudResponsesList(value: Array<PointCloudResponse>): GetPointCloudResponse;
    addPointCloudResponses(value?: PointCloudResponse, index?: number): PointCloudResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPointCloudResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPointCloudResponse): GetPointCloudResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPointCloudResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPointCloudResponse;
    static deserializeBinaryFromReader(message: GetPointCloudResponse, reader: jspb.BinaryReader): GetPointCloudResponse;
}

export namespace GetPointCloudResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        pointCloudResponsesList: Array<PointCloudResponse.AsObject>,
    }
}
