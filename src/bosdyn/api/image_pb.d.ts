// package: bosdyn.api
// file: bosdyn/api/image.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_service_customization_pb from "../../bosdyn/api/service_customization_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Image extends jspb.Message { 
    getCols(): number;
    setCols(value: number): Image;
    getRows(): number;
    setRows(value: number): Image;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Image;
    getFormat(): Image.Format;
    setFormat(value: Image.Format): Image;
    getPixelFormat(): Image.PixelFormat;
    setPixelFormat(value: Image.PixelFormat): Image;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
    export type AsObject = {
        cols: number,
        rows: number,
        data: Uint8Array | string,
        format: Image.Format,
        pixelFormat: Image.PixelFormat,
    }

    export enum Format {
    FORMAT_UNKNOWN = 0,
    FORMAT_JPEG = 1,
    FORMAT_RAW = 2,
    FORMAT_RLE = 3,
    }

    export enum PixelFormat {
    PIXEL_FORMAT_UNKNOWN = 0,
    PIXEL_FORMAT_GREYSCALE_U8 = 1,
    PIXEL_FORMAT_RGB_U8 = 3,
    PIXEL_FORMAT_RGBA_U8 = 4,
    PIXEL_FORMAT_DEPTH_U16 = 5,
    PIXEL_FORMAT_GREYSCALE_U16 = 6,
    }

}

export class CaptureParameters extends jspb.Message { 

    hasExposureDuration(): boolean;
    clearExposureDuration(): void;
    getExposureDuration(): google_protobuf_duration_pb.Duration | undefined;
    setExposureDuration(value?: google_protobuf_duration_pb.Duration): CaptureParameters;
    getGain(): number;
    setGain(value: number): CaptureParameters;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam): CaptureParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CaptureParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CaptureParameters): CaptureParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CaptureParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CaptureParameters;
    static deserializeBinaryFromReader(message: CaptureParameters, reader: jspb.BinaryReader): CaptureParameters;
}

export namespace CaptureParameters {
    export type AsObject = {
        exposureDuration?: google_protobuf_duration_pb.Duration.AsObject,
        gain: number,
        customParams?: bosdyn_api_service_customization_pb.DictParam.AsObject,
    }
}

export class ImageCapture extends jspb.Message { 

    hasAcquisitionTime(): boolean;
    clearAcquisitionTime(): void;
    getAcquisitionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAcquisitionTime(value?: google_protobuf_timestamp_pb.Timestamp): ImageCapture;

    hasTransformsSnapshot(): boolean;
    clearTransformsSnapshot(): void;
    getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): ImageCapture;
    getFrameNameImageSensor(): string;
    setFrameNameImageSensor(value: string): ImageCapture;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): Image | undefined;
    setImage(value?: Image): ImageCapture;

    hasCaptureParams(): boolean;
    clearCaptureParams(): void;
    getCaptureParams(): CaptureParameters | undefined;
    setCaptureParams(value?: CaptureParameters): ImageCapture;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageCapture.AsObject;
    static toObject(includeInstance: boolean, msg: ImageCapture): ImageCapture.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageCapture, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageCapture;
    static deserializeBinaryFromReader(message: ImageCapture, reader: jspb.BinaryReader): ImageCapture;
}

export namespace ImageCapture {
    export type AsObject = {
        acquisitionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
        frameNameImageSensor: string,
        image?: Image.AsObject,
        captureParams?: CaptureParameters.AsObject,
    }
}

export class ImageSource extends jspb.Message { 
    getName(): string;
    setName(value: string): ImageSource;
    getCols(): number;
    setCols(value: number): ImageSource;
    getRows(): number;
    setRows(value: number): ImageSource;
    getDepthScale(): number;
    setDepthScale(value: number): ImageSource;

    hasPinhole(): boolean;
    clearPinhole(): void;
    getPinhole(): ImageSource.PinholeModel | undefined;
    setPinhole(value?: ImageSource.PinholeModel): ImageSource;

    hasPinholeBrownConrady(): boolean;
    clearPinholeBrownConrady(): void;
    getPinholeBrownConrady(): ImageSource.PinholeBrownConrady | undefined;
    setPinholeBrownConrady(value?: ImageSource.PinholeBrownConrady): ImageSource;

    hasKannalaBrandt(): boolean;
    clearKannalaBrandt(): void;
    getKannalaBrandt(): ImageSource.KannalaBrandtModel | undefined;
    setKannalaBrandt(value?: ImageSource.KannalaBrandtModel): ImageSource;
    getImageType(): ImageSource.ImageType;
    setImageType(value: ImageSource.ImageType): ImageSource;
    clearPixelFormatsList(): void;
    getPixelFormatsList(): Array<Image.PixelFormat>;
    setPixelFormatsList(value: Array<Image.PixelFormat>): ImageSource;
    addPixelFormats(value: Image.PixelFormat, index?: number): Image.PixelFormat;
    clearImageFormatsList(): void;
    getImageFormatsList(): Array<Image.Format>;
    setImageFormatsList(value: Array<Image.Format>): ImageSource;
    addImageFormats(value: Image.Format, index?: number): Image.Format;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam.Spec | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam.Spec): ImageSource;

    getCameraModelsCase(): ImageSource.CameraModelsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageSource.AsObject;
    static toObject(includeInstance: boolean, msg: ImageSource): ImageSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageSource;
    static deserializeBinaryFromReader(message: ImageSource, reader: jspb.BinaryReader): ImageSource;
}

export namespace ImageSource {
    export type AsObject = {
        name: string,
        cols: number,
        rows: number,
        depthScale: number,
        pinhole?: ImageSource.PinholeModel.AsObject,
        pinholeBrownConrady?: ImageSource.PinholeBrownConrady.AsObject,
        kannalaBrandt?: ImageSource.KannalaBrandtModel.AsObject,
        imageType: ImageSource.ImageType,
        pixelFormatsList: Array<Image.PixelFormat>,
        imageFormatsList: Array<Image.Format>,
        customParams?: bosdyn_api_service_customization_pb.DictParam.Spec.AsObject,
    }


    export class PinholeModel extends jspb.Message { 

        hasIntrinsics(): boolean;
        clearIntrinsics(): void;
        getIntrinsics(): ImageSource.PinholeModel.CameraIntrinsics | undefined;
        setIntrinsics(value?: ImageSource.PinholeModel.CameraIntrinsics): PinholeModel;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PinholeModel.AsObject;
        static toObject(includeInstance: boolean, msg: PinholeModel): PinholeModel.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PinholeModel, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PinholeModel;
        static deserializeBinaryFromReader(message: PinholeModel, reader: jspb.BinaryReader): PinholeModel;
    }

    export namespace PinholeModel {
        export type AsObject = {
            intrinsics?: ImageSource.PinholeModel.CameraIntrinsics.AsObject,
        }


        export class CameraIntrinsics extends jspb.Message { 

            hasFocalLength(): boolean;
            clearFocalLength(): void;
            getFocalLength(): bosdyn_api_geometry_pb.Vec2 | undefined;
            setFocalLength(value?: bosdyn_api_geometry_pb.Vec2): CameraIntrinsics;

            hasPrincipalPoint(): boolean;
            clearPrincipalPoint(): void;
            getPrincipalPoint(): bosdyn_api_geometry_pb.Vec2 | undefined;
            setPrincipalPoint(value?: bosdyn_api_geometry_pb.Vec2): CameraIntrinsics;

            hasSkew(): boolean;
            clearSkew(): void;
            getSkew(): bosdyn_api_geometry_pb.Vec2 | undefined;
            setSkew(value?: bosdyn_api_geometry_pb.Vec2): CameraIntrinsics;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CameraIntrinsics.AsObject;
            static toObject(includeInstance: boolean, msg: CameraIntrinsics): CameraIntrinsics.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CameraIntrinsics, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CameraIntrinsics;
            static deserializeBinaryFromReader(message: CameraIntrinsics, reader: jspb.BinaryReader): CameraIntrinsics;
        }

        export namespace CameraIntrinsics {
            export type AsObject = {
                focalLength?: bosdyn_api_geometry_pb.Vec2.AsObject,
                principalPoint?: bosdyn_api_geometry_pb.Vec2.AsObject,
                skew?: bosdyn_api_geometry_pb.Vec2.AsObject,
            }
        }

    }

    export class PinholeBrownConrady extends jspb.Message { 

        hasIntrinsics(): boolean;
        clearIntrinsics(): void;
        getIntrinsics(): ImageSource.PinholeBrownConrady.PinholeBrownConradyIntrinsics | undefined;
        setIntrinsics(value?: ImageSource.PinholeBrownConrady.PinholeBrownConradyIntrinsics): PinholeBrownConrady;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PinholeBrownConrady.AsObject;
        static toObject(includeInstance: boolean, msg: PinholeBrownConrady): PinholeBrownConrady.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PinholeBrownConrady, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PinholeBrownConrady;
        static deserializeBinaryFromReader(message: PinholeBrownConrady, reader: jspb.BinaryReader): PinholeBrownConrady;
    }

    export namespace PinholeBrownConrady {
        export type AsObject = {
            intrinsics?: ImageSource.PinholeBrownConrady.PinholeBrownConradyIntrinsics.AsObject,
        }


        export class PinholeBrownConradyIntrinsics extends jspb.Message { 

            hasPinholeIntrinsics(): boolean;
            clearPinholeIntrinsics(): void;
            getPinholeIntrinsics(): ImageSource.PinholeModel.CameraIntrinsics | undefined;
            setPinholeIntrinsics(value?: ImageSource.PinholeModel.CameraIntrinsics): PinholeBrownConradyIntrinsics;
            getK1(): number;
            setK1(value: number): PinholeBrownConradyIntrinsics;
            getK2(): number;
            setK2(value: number): PinholeBrownConradyIntrinsics;
            getP1(): number;
            setP1(value: number): PinholeBrownConradyIntrinsics;
            getP2(): number;
            setP2(value: number): PinholeBrownConradyIntrinsics;
            getK3(): number;
            setK3(value: number): PinholeBrownConradyIntrinsics;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PinholeBrownConradyIntrinsics.AsObject;
            static toObject(includeInstance: boolean, msg: PinholeBrownConradyIntrinsics): PinholeBrownConradyIntrinsics.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PinholeBrownConradyIntrinsics, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PinholeBrownConradyIntrinsics;
            static deserializeBinaryFromReader(message: PinholeBrownConradyIntrinsics, reader: jspb.BinaryReader): PinholeBrownConradyIntrinsics;
        }

        export namespace PinholeBrownConradyIntrinsics {
            export type AsObject = {
                pinholeIntrinsics?: ImageSource.PinholeModel.CameraIntrinsics.AsObject,
                k1: number,
                k2: number,
                p1: number,
                p2: number,
                k3: number,
            }
        }

    }

    export class KannalaBrandtModel extends jspb.Message { 

        hasIntrinsics(): boolean;
        clearIntrinsics(): void;
        getIntrinsics(): ImageSource.KannalaBrandtModel.KannalaBrandtIntrinsics | undefined;
        setIntrinsics(value?: ImageSource.KannalaBrandtModel.KannalaBrandtIntrinsics): KannalaBrandtModel;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KannalaBrandtModel.AsObject;
        static toObject(includeInstance: boolean, msg: KannalaBrandtModel): KannalaBrandtModel.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KannalaBrandtModel, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KannalaBrandtModel;
        static deserializeBinaryFromReader(message: KannalaBrandtModel, reader: jspb.BinaryReader): KannalaBrandtModel;
    }

    export namespace KannalaBrandtModel {
        export type AsObject = {
            intrinsics?: ImageSource.KannalaBrandtModel.KannalaBrandtIntrinsics.AsObject,
        }


        export class KannalaBrandtIntrinsics extends jspb.Message { 

            hasPinholeIntrinsics(): boolean;
            clearPinholeIntrinsics(): void;
            getPinholeIntrinsics(): ImageSource.PinholeModel.CameraIntrinsics | undefined;
            setPinholeIntrinsics(value?: ImageSource.PinholeModel.CameraIntrinsics): KannalaBrandtIntrinsics;
            getK1(): number;
            setK1(value: number): KannalaBrandtIntrinsics;
            getK2(): number;
            setK2(value: number): KannalaBrandtIntrinsics;
            getK3(): number;
            setK3(value: number): KannalaBrandtIntrinsics;
            getK4(): number;
            setK4(value: number): KannalaBrandtIntrinsics;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): KannalaBrandtIntrinsics.AsObject;
            static toObject(includeInstance: boolean, msg: KannalaBrandtIntrinsics): KannalaBrandtIntrinsics.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: KannalaBrandtIntrinsics, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): KannalaBrandtIntrinsics;
            static deserializeBinaryFromReader(message: KannalaBrandtIntrinsics, reader: jspb.BinaryReader): KannalaBrandtIntrinsics;
        }

        export namespace KannalaBrandtIntrinsics {
            export type AsObject = {
                pinholeIntrinsics?: ImageSource.PinholeModel.CameraIntrinsics.AsObject,
                k1: number,
                k2: number,
                k3: number,
                k4: number,
            }
        }

    }


    export enum ImageType {
    IMAGE_TYPE_UNKNOWN = 0,
    IMAGE_TYPE_VISUAL = 1,
    IMAGE_TYPE_DEPTH = 2,
    }


    export enum CameraModelsCase {
        CAMERA_MODELS_NOT_SET = 0,
        PINHOLE = 8,
        PINHOLE_BROWN_CONRADY = 13,
        KANNALA_BRANDT = 14,
    }

}

export class ListImageSourcesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListImageSourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListImageSourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListImageSourcesRequest): ListImageSourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListImageSourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListImageSourcesRequest;
    static deserializeBinaryFromReader(message: ListImageSourcesRequest, reader: jspb.BinaryReader): ListImageSourcesRequest;
}

export namespace ListImageSourcesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListImageSourcesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListImageSourcesResponse;
    clearImageSourcesList(): void;
    getImageSourcesList(): Array<ImageSource>;
    setImageSourcesList(value: Array<ImageSource>): ListImageSourcesResponse;
    addImageSources(value?: ImageSource, index?: number): ImageSource;

    hasTransformsSnapshot(): boolean;
    clearTransformsSnapshot(): void;
    getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): ListImageSourcesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListImageSourcesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListImageSourcesResponse): ListImageSourcesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListImageSourcesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListImageSourcesResponse;
    static deserializeBinaryFromReader(message: ListImageSourcesResponse, reader: jspb.BinaryReader): ListImageSourcesResponse;
}

export namespace ListImageSourcesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        imageSourcesList: Array<ImageSource.AsObject>,
        transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
    }
}

export class ImageRequest extends jspb.Message { 
    getImageSourceName(): string;
    setImageSourceName(value: string): ImageRequest;
    getQualityPercent(): number;
    setQualityPercent(value: number): ImageRequest;
    getImageFormat(): Image.Format;
    setImageFormat(value: Image.Format): ImageRequest;
    getResizeRatio(): number;
    setResizeRatio(value: number): ImageRequest;
    getPixelFormat(): Image.PixelFormat;
    setPixelFormat(value: Image.PixelFormat): ImageRequest;
    clearFallbackFormatsList(): void;
    getFallbackFormatsList(): Array<Image.PixelFormat>;
    setFallbackFormatsList(value: Array<Image.PixelFormat>): ImageRequest;
    addFallbackFormats(value: Image.PixelFormat, index?: number): Image.PixelFormat;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam): ImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImageRequest): ImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageRequest;
    static deserializeBinaryFromReader(message: ImageRequest, reader: jspb.BinaryReader): ImageRequest;
}

export namespace ImageRequest {
    export type AsObject = {
        imageSourceName: string,
        qualityPercent: number,
        imageFormat: Image.Format,
        resizeRatio: number,
        pixelFormat: Image.PixelFormat,
        fallbackFormatsList: Array<Image.PixelFormat>,
        customParams?: bosdyn_api_service_customization_pb.DictParam.AsObject,
    }
}

export class GetImageRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetImageRequest;
    clearImageRequestsList(): void;
    getImageRequestsList(): Array<ImageRequest>;
    setImageRequestsList(value: Array<ImageRequest>): GetImageRequest;
    addImageRequests(value?: ImageRequest, index?: number): ImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetImageRequest): GetImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetImageRequest;
    static deserializeBinaryFromReader(message: GetImageRequest, reader: jspb.BinaryReader): GetImageRequest;
}

export namespace GetImageRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        imageRequestsList: Array<ImageRequest.AsObject>,
    }
}

export class ImageResponse extends jspb.Message { 

    hasShot(): boolean;
    clearShot(): void;
    getShot(): ImageCapture | undefined;
    setShot(value?: ImageCapture): ImageResponse;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): ImageSource | undefined;
    setSource(value?: ImageSource): ImageResponse;
    getStatus(): ImageResponse.Status;
    setStatus(value: ImageResponse.Status): ImageResponse;

    hasCustomParamError(): boolean;
    clearCustomParamError(): void;
    getCustomParamError(): bosdyn_api_service_customization_pb.CustomParamError | undefined;
    setCustomParamError(value?: bosdyn_api_service_customization_pb.CustomParamError): ImageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImageResponse): ImageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageResponse;
    static deserializeBinaryFromReader(message: ImageResponse, reader: jspb.BinaryReader): ImageResponse;
}

export namespace ImageResponse {
    export type AsObject = {
        shot?: ImageCapture.AsObject,
        source?: ImageSource.AsObject,
        status: ImageResponse.Status,
        customParamError?: bosdyn_api_service_customization_pb.CustomParamError.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_CAMERA = 2,
    STATUS_SOURCE_DATA_ERROR = 3,
    STATUS_IMAGE_DATA_ERROR = 4,
    STATUS_UNSUPPORTED_IMAGE_FORMAT_REQUESTED = 5,
    STATUS_UNSUPPORTED_PIXEL_FORMAT_REQUESTED = 6,
    STATUS_UNSUPPORTED_RESIZE_RATIO_REQUESTED = 7,
    STATUS_CUSTOM_PARAMS_ERROR = 8,
    }

}

export class ImageCaptureAndSource extends jspb.Message { 

    hasShot(): boolean;
    clearShot(): void;
    getShot(): ImageCapture | undefined;
    setShot(value?: ImageCapture): ImageCaptureAndSource;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): ImageSource | undefined;
    setSource(value?: ImageSource): ImageCaptureAndSource;
    getImageService(): string;
    setImageService(value: string): ImageCaptureAndSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageCaptureAndSource.AsObject;
    static toObject(includeInstance: boolean, msg: ImageCaptureAndSource): ImageCaptureAndSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageCaptureAndSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageCaptureAndSource;
    static deserializeBinaryFromReader(message: ImageCaptureAndSource, reader: jspb.BinaryReader): ImageCaptureAndSource;
}

export namespace ImageCaptureAndSource {
    export type AsObject = {
        shot?: ImageCapture.AsObject,
        source?: ImageSource.AsObject,
        imageService: string,
    }
}

export class GetImageResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetImageResponse;
    clearImageResponsesList(): void;
    getImageResponsesList(): Array<ImageResponse>;
    setImageResponsesList(value: Array<ImageResponse>): GetImageResponse;
    addImageResponses(value?: ImageResponse, index?: number): ImageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetImageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetImageResponse): GetImageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetImageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetImageResponse;
    static deserializeBinaryFromReader(message: GetImageResponse, reader: jspb.BinaryReader): GetImageResponse;
}

export namespace GetImageResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        imageResponsesList: Array<ImageResponse.AsObject>,
    }
}
