// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/logging.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_spot_cam_camera_pb from "../../../bosdyn/api/spot_cam/camera_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_data_chunk_pb from "../../../bosdyn/api/data_chunk_pb";
import * as bosdyn_api_image_pb from "../../../bosdyn/api/image_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Logpoint extends jspb.Message { 
    getName(): string;
    setName(value: string): Logpoint;
    getType(): Logpoint.RecordType;
    setType(value: Logpoint.RecordType): Logpoint;
    getStatus(): Logpoint.LogStatus;
    setStatus(value: Logpoint.LogStatus): Logpoint;
    getQueueStatus(): Logpoint.QueueStatus;
    setQueueStatus(value: Logpoint.QueueStatus): Logpoint;
    getTag(): string;
    setTag(value: string): Logpoint;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Logpoint;

    hasImageParams(): boolean;
    clearImageParams(): void;
    getImageParams(): Logpoint.ImageParams | undefined;
    setImageParams(value?: Logpoint.ImageParams): Logpoint;
    clearCalibrationList(): void;
    getCalibrationList(): Array<Logpoint.Calibration>;
    setCalibrationList(value: Array<Logpoint.Calibration>): Logpoint;
    addCalibration(value?: Logpoint.Calibration, index?: number): Logpoint.Calibration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Logpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Logpoint): Logpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Logpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Logpoint;
    static deserializeBinaryFromReader(message: Logpoint, reader: jspb.BinaryReader): Logpoint;
}

export namespace Logpoint {
    export type AsObject = {
        name: string,
        type: Logpoint.RecordType,
        status: Logpoint.LogStatus,
        queueStatus: Logpoint.QueueStatus,
        tag: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        imageParams?: Logpoint.ImageParams.AsObject,
        calibrationList: Array<Logpoint.Calibration.AsObject>,
    }


    export class ImageParams extends jspb.Message { 
        getWidth(): number;
        setWidth(value: number): ImageParams;
        getHeight(): number;
        setHeight(value: number): ImageParams;
        getFormat(): bosdyn_api_image_pb.Image.PixelFormat;
        setFormat(value: bosdyn_api_image_pb.Image.PixelFormat): ImageParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ImageParams.AsObject;
        static toObject(includeInstance: boolean, msg: ImageParams): ImageParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ImageParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ImageParams;
        static deserializeBinaryFromReader(message: ImageParams, reader: jspb.BinaryReader): ImageParams;
    }

    export namespace ImageParams {
        export type AsObject = {
            width: number,
            height: number,
            format: bosdyn_api_image_pb.Image.PixelFormat,
        }
    }

    export class Calibration extends jspb.Message { 
        getXoffset(): number;
        setXoffset(value: number): Calibration;
        getYoffset(): number;
        setYoffset(value: number): Calibration;
        getWidth(): number;
        setWidth(value: number): Calibration;
        getHeight(): number;
        setHeight(value: number): Calibration;
        getBaseFrameName(): string;
        setBaseFrameName(value: string): Calibration;

        hasBaseTfromSensor(): boolean;
        clearBaseTfromSensor(): void;
        getBaseTfromSensor(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setBaseTfromSensor(value?: bosdyn_api_geometry_pb.SE3Pose): Calibration;

        hasBaseTformSensor(): boolean;
        clearBaseTformSensor(): void;
        getBaseTformSensor(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setBaseTformSensor(value?: bosdyn_api_geometry_pb.SE3Pose): Calibration;

        hasIntrinsics(): boolean;
        clearIntrinsics(): void;
        getIntrinsics(): bosdyn_api_spot_cam_camera_pb.Camera.PinholeIntrinsics | undefined;
        setIntrinsics(value?: bosdyn_api_spot_cam_camera_pb.Camera.PinholeIntrinsics): Calibration;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Calibration.AsObject;
        static toObject(includeInstance: boolean, msg: Calibration): Calibration.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Calibration, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Calibration;
        static deserializeBinaryFromReader(message: Calibration, reader: jspb.BinaryReader): Calibration;
    }

    export namespace Calibration {
        export type AsObject = {
            xoffset: number,
            yoffset: number,
            width: number,
            height: number,
            baseFrameName: string,
            baseTfromSensor?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            baseTformSensor?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            intrinsics?: bosdyn_api_spot_cam_camera_pb.Camera.PinholeIntrinsics.AsObject,
        }
    }


    export enum RecordType {
    STILLIMAGE = 0,
    }

    export enum LogStatus {
    FAILED = 0,
    QUEUED = 1,
    COMPLETE = 2,
    UNKNOWN = -1,
    }

    export enum QueueStatus {
    QUEUED_UNKNOWN = 0,
    QUEUED_RENDER = 1,
    QUEUED_DISK = 2,
    }

}

export class DeleteRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DeleteRequest;

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Logpoint | undefined;
    setPoint(value?: Logpoint): DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        point?: Logpoint.AsObject,
    }
}

export class DeleteResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetStatusRequest;

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Logpoint | undefined;
    setPoint(value?: Logpoint): GetStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusRequest): GetStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusRequest;
    static deserializeBinaryFromReader(message: GetStatusRequest, reader: jspb.BinaryReader): GetStatusRequest;
}

export namespace GetStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        point?: Logpoint.AsObject,
    }
}

export class GetStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetStatusResponse;

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Logpoint | undefined;
    setPoint(value?: Logpoint): GetStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusResponse): GetStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusResponse;
    static deserializeBinaryFromReader(message: GetStatusResponse, reader: jspb.BinaryReader): GetStatusResponse;
}

export namespace GetStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        point?: Logpoint.AsObject,
    }
}

export class RetrieveRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RetrieveRequest;

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Logpoint | undefined;
    setPoint(value?: Logpoint): RetrieveRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrieveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RetrieveRequest): RetrieveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetrieveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrieveRequest;
    static deserializeBinaryFromReader(message: RetrieveRequest, reader: jspb.BinaryReader): RetrieveRequest;
}

export namespace RetrieveRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        point?: Logpoint.AsObject,
    }
}

export class RetrieveResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RetrieveResponse;

    hasLogpoint(): boolean;
    clearLogpoint(): void;
    getLogpoint(): Logpoint | undefined;
    setLogpoint(value?: Logpoint): RetrieveResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setData(value?: bosdyn_api_data_chunk_pb.DataChunk): RetrieveResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrieveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RetrieveResponse): RetrieveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetrieveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrieveResponse;
    static deserializeBinaryFromReader(message: RetrieveResponse, reader: jspb.BinaryReader): RetrieveResponse;
}

export namespace RetrieveResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        logpoint?: Logpoint.AsObject,
        data?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }
}

export class RetrieveRawDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RetrieveRawDataRequest;

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Logpoint | undefined;
    setPoint(value?: Logpoint): RetrieveRawDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrieveRawDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RetrieveRawDataRequest): RetrieveRawDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetrieveRawDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrieveRawDataRequest;
    static deserializeBinaryFromReader(message: RetrieveRawDataRequest, reader: jspb.BinaryReader): RetrieveRawDataRequest;
}

export namespace RetrieveRawDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        point?: Logpoint.AsObject,
    }
}

export class RetrieveRawDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RetrieveRawDataResponse;

    hasLogpoint(): boolean;
    clearLogpoint(): void;
    getLogpoint(): Logpoint | undefined;
    setLogpoint(value?: Logpoint): RetrieveRawDataResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setData(value?: bosdyn_api_data_chunk_pb.DataChunk): RetrieveRawDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrieveRawDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RetrieveRawDataResponse): RetrieveRawDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetrieveRawDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrieveRawDataResponse;
    static deserializeBinaryFromReader(message: RetrieveRawDataResponse, reader: jspb.BinaryReader): RetrieveRawDataResponse;
}

export namespace RetrieveRawDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        logpoint?: Logpoint.AsObject,
        data?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }
}

export class StoreRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StoreRequest;

    hasCamera(): boolean;
    clearCamera(): void;
    getCamera(): bosdyn_api_spot_cam_camera_pb.Camera | undefined;
    setCamera(value?: bosdyn_api_spot_cam_camera_pb.Camera): StoreRequest;
    getType(): Logpoint.RecordType;
    setType(value: Logpoint.RecordType): StoreRequest;
    getTag(): string;
    setTag(value: string): StoreRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StoreRequest): StoreRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreRequest;
    static deserializeBinaryFromReader(message: StoreRequest, reader: jspb.BinaryReader): StoreRequest;
}

export namespace StoreRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        camera?: bosdyn_api_spot_cam_camera_pb.Camera.AsObject,
        type: Logpoint.RecordType,
        tag: string,
    }
}

export class StoreResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StoreResponse;

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Logpoint | undefined;
    setPoint(value?: Logpoint): StoreResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StoreResponse): StoreResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreResponse;
    static deserializeBinaryFromReader(message: StoreResponse, reader: jspb.BinaryReader): StoreResponse;
}

export namespace StoreResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        point?: Logpoint.AsObject,
    }
}

export class TagRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): TagRequest;

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Logpoint | undefined;
    setPoint(value?: Logpoint): TagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TagRequest): TagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagRequest;
    static deserializeBinaryFromReader(message: TagRequest, reader: jspb.BinaryReader): TagRequest;
}

export namespace TagRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        point?: Logpoint.AsObject,
    }
}

export class TagResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): TagResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TagResponse): TagResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagResponse;
    static deserializeBinaryFromReader(message: TagResponse, reader: jspb.BinaryReader): TagResponse;
}

export namespace TagResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class ListCamerasRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListCamerasRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCamerasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCamerasRequest): ListCamerasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCamerasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCamerasRequest;
    static deserializeBinaryFromReader(message: ListCamerasRequest, reader: jspb.BinaryReader): ListCamerasRequest;
}

export namespace ListCamerasRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListCamerasResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListCamerasResponse;
    clearCamerasList(): void;
    getCamerasList(): Array<bosdyn_api_spot_cam_camera_pb.Camera>;
    setCamerasList(value: Array<bosdyn_api_spot_cam_camera_pb.Camera>): ListCamerasResponse;
    addCameras(value?: bosdyn_api_spot_cam_camera_pb.Camera, index?: number): bosdyn_api_spot_cam_camera_pb.Camera;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCamerasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCamerasResponse): ListCamerasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCamerasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCamerasResponse;
    static deserializeBinaryFromReader(message: ListCamerasResponse, reader: jspb.BinaryReader): ListCamerasResponse;
}

export namespace ListCamerasResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        camerasList: Array<bosdyn_api_spot_cam_camera_pb.Camera.AsObject>,
    }
}

export class ListLogpointsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListLogpointsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLogpointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLogpointsRequest): ListLogpointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLogpointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLogpointsRequest;
    static deserializeBinaryFromReader(message: ListLogpointsRequest, reader: jspb.BinaryReader): ListLogpointsRequest;
}

export namespace ListLogpointsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListLogpointsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListLogpointsResponse;
    clearLogpointsList(): void;
    getLogpointsList(): Array<Logpoint>;
    setLogpointsList(value: Array<Logpoint>): ListLogpointsResponse;
    addLogpoints(value?: Logpoint, index?: number): Logpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLogpointsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLogpointsResponse): ListLogpointsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLogpointsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLogpointsResponse;
    static deserializeBinaryFromReader(message: ListLogpointsResponse, reader: jspb.BinaryReader): ListLogpointsResponse;
}

export namespace ListLogpointsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        logpointsList: Array<Logpoint.AsObject>,
    }
}

export class SetPassphraseRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetPassphraseRequest;
    getPassphrase(): string;
    setPassphrase(value: string): SetPassphraseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPassphraseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPassphraseRequest): SetPassphraseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPassphraseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPassphraseRequest;
    static deserializeBinaryFromReader(message: SetPassphraseRequest, reader: jspb.BinaryReader): SetPassphraseRequest;
}

export namespace SetPassphraseRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        passphrase: string,
    }
}

export class SetPassphraseResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetPassphraseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPassphraseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetPassphraseResponse): SetPassphraseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPassphraseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPassphraseResponse;
    static deserializeBinaryFromReader(message: SetPassphraseResponse, reader: jspb.BinaryReader): SetPassphraseResponse;
}

export namespace SetPassphraseResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class DebugRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DebugRequest;
    getEnableTemperature(): boolean;
    setEnableTemperature(value: boolean): DebugRequest;
    getEnableHumidity(): boolean;
    setEnableHumidity(value: boolean): DebugRequest;
    getEnableBit(): boolean;
    setEnableBit(value: boolean): DebugRequest;
    getEnableShock(): boolean;
    setEnableShock(value: boolean): DebugRequest;
    getEnableSystemStat(): boolean;
    setEnableSystemStat(value: boolean): DebugRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DebugRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DebugRequest): DebugRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DebugRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DebugRequest;
    static deserializeBinaryFromReader(message: DebugRequest, reader: jspb.BinaryReader): DebugRequest;
}

export namespace DebugRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        enableTemperature: boolean,
        enableHumidity: boolean,
        enableBit: boolean,
        enableShock: boolean,
        enableSystemStat: boolean,
    }
}

export class DebugResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DebugResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DebugResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DebugResponse): DebugResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DebugResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DebugResponse;
    static deserializeBinaryFromReader(message: DebugResponse, reader: jspb.BinaryReader): DebugResponse;
}

export namespace DebugResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
