// package: bosdyn.api
// file: bosdyn/api/network_compute_bridge.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_alerts_pb from "../../bosdyn/api/alerts_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_image_pb from "../../bosdyn/api/image_pb";
import * as bosdyn_api_service_customization_pb from "../../bosdyn/api/service_customization_pb";
import * as bosdyn_api_world_object_pb from "../../bosdyn/api/world_object_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class ListAvailableModelsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListAvailableModelsRequest;

    hasServerConfig(): boolean;
    clearServerConfig(): void;
    getServerConfig(): NetworkComputeServerConfiguration | undefined;
    setServerConfig(value?: NetworkComputeServerConfiguration): ListAvailableModelsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAvailableModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAvailableModelsRequest): ListAvailableModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAvailableModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAvailableModelsRequest;
    static deserializeBinaryFromReader(message: ListAvailableModelsRequest, reader: jspb.BinaryReader): ListAvailableModelsRequest;
}

export namespace ListAvailableModelsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        serverConfig?: NetworkComputeServerConfiguration.AsObject,
    }
}

export class ListAvailableModelsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListAvailableModelsResponse;
    clearAvailableModelsList(): void;
    getAvailableModelsList(): Array<string>;
    setAvailableModelsList(value: Array<string>): ListAvailableModelsResponse;
    addAvailableModels(value: string, index?: number): string;
    clearLabelsList(): void;
    getLabelsList(): Array<ModelLabels>;
    setLabelsList(value: Array<ModelLabels>): ListAvailableModelsResponse;
    addLabels(value?: ModelLabels, index?: number): ModelLabels;

    hasModels(): boolean;
    clearModels(): void;
    getModels(): AvailableModels | undefined;
    setModels(value?: AvailableModels): ListAvailableModelsResponse;
    getStatus(): ListAvailableModelsStatus;
    setStatus(value: ListAvailableModelsStatus): ListAvailableModelsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAvailableModelsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAvailableModelsResponse): ListAvailableModelsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAvailableModelsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAvailableModelsResponse;
    static deserializeBinaryFromReader(message: ListAvailableModelsResponse, reader: jspb.BinaryReader): ListAvailableModelsResponse;
}

export namespace ListAvailableModelsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        availableModelsList: Array<string>,
        labelsList: Array<ModelLabels.AsObject>,
        models?: AvailableModels.AsObject,
        status: ListAvailableModelsStatus,
    }
}

export class AvailableModels extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<ModelData>;
    setDataList(value: Array<ModelData>): AvailableModels;
    addData(value?: ModelData, index?: number): ModelData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvailableModels.AsObject;
    static toObject(includeInstance: boolean, msg: AvailableModels): AvailableModels.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvailableModels, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvailableModels;
    static deserializeBinaryFromReader(message: AvailableModels, reader: jspb.BinaryReader): AvailableModels;
}

export namespace AvailableModels {
    export type AsObject = {
        dataList: Array<ModelData.AsObject>,
    }
}

export class ModelData extends jspb.Message { 
    getModelName(): string;
    setModelName(value: string): ModelData;
    clearAvailableLabelsList(): void;
    getAvailableLabelsList(): Array<string>;
    setAvailableLabelsList(value: Array<string>): ModelData;
    addAvailableLabels(value: string, index?: number): string;
    clearOutputImageSpecList(): void;
    getOutputImageSpecList(): Array<OutputImageSpec>;
    setOutputImageSpecList(value: Array<OutputImageSpec>): ModelData;
    addOutputImageSpec(value?: OutputImageSpec, index?: number): OutputImageSpec;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam.Spec | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam.Spec): ModelData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelData.AsObject;
    static toObject(includeInstance: boolean, msg: ModelData): ModelData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelData;
    static deserializeBinaryFromReader(message: ModelData, reader: jspb.BinaryReader): ModelData;
}

export namespace ModelData {
    export type AsObject = {
        modelName: string,
        availableLabelsList: Array<string>,
        outputImageSpecList: Array<OutputImageSpec.AsObject>,
        customParams?: bosdyn_api_service_customization_pb.DictParam.Spec.AsObject,
    }
}

export class ModelLabels extends jspb.Message { 
    getModelName(): string;
    setModelName(value: string): ModelLabels;
    clearAvailableLabelsList(): void;
    getAvailableLabelsList(): Array<string>;
    setAvailableLabelsList(value: Array<string>): ModelLabels;
    addAvailableLabels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelLabels.AsObject;
    static toObject(includeInstance: boolean, msg: ModelLabels): ModelLabels.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelLabels, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelLabels;
    static deserializeBinaryFromReader(message: ModelLabels, reader: jspb.BinaryReader): ModelLabels;
}

export namespace ModelLabels {
    export type AsObject = {
        modelName: string,
        availableLabelsList: Array<string>,
    }
}

export class NetworkComputeRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): NetworkComputeRequest;

    hasInputData(): boolean;
    clearInputData(): void;
    getInputData(): NetworkComputeInputData | undefined;
    setInputData(value?: NetworkComputeInputData): NetworkComputeRequest;

    hasInputDataBridge(): boolean;
    clearInputDataBridge(): void;
    getInputDataBridge(): NetworkComputeInputDataBridge | undefined;
    setInputDataBridge(value?: NetworkComputeInputDataBridge): NetworkComputeRequest;

    hasServerConfig(): boolean;
    clearServerConfig(): void;
    getServerConfig(): NetworkComputeServerConfiguration | undefined;
    setServerConfig(value?: NetworkComputeServerConfiguration): NetworkComputeRequest;

    getInputCase(): NetworkComputeRequest.InputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeRequest): NetworkComputeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeRequest;
    static deserializeBinaryFromReader(message: NetworkComputeRequest, reader: jspb.BinaryReader): NetworkComputeRequest;
}

export namespace NetworkComputeRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        inputData?: NetworkComputeInputData.AsObject,
        inputDataBridge?: NetworkComputeInputDataBridge.AsObject,
        serverConfig?: NetworkComputeServerConfiguration.AsObject,
    }

    export enum InputCase {
        INPUT_NOT_SET = 0,
        INPUT_DATA = 2,
        INPUT_DATA_BRIDGE = 4,
    }

}

export class ImageSourceAndService extends jspb.Message { 

    hasImageSource(): boolean;
    clearImageSource(): void;
    getImageSource(): string;
    setImageSource(value: string): ImageSourceAndService;

    hasImageRequest(): boolean;
    clearImageRequest(): void;
    getImageRequest(): bosdyn_api_image_pb.ImageRequest | undefined;
    setImageRequest(value?: bosdyn_api_image_pb.ImageRequest): ImageSourceAndService;
    getImageService(): string;
    setImageService(value: string): ImageSourceAndService;

    getRequestDataCase(): ImageSourceAndService.RequestDataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageSourceAndService.AsObject;
    static toObject(includeInstance: boolean, msg: ImageSourceAndService): ImageSourceAndService.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageSourceAndService, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageSourceAndService;
    static deserializeBinaryFromReader(message: ImageSourceAndService, reader: jspb.BinaryReader): ImageSourceAndService;
}

export namespace ImageSourceAndService {
    export type AsObject = {
        imageSource: string,
        imageRequest?: bosdyn_api_image_pb.ImageRequest.AsObject,
        imageService: string,
    }

    export enum RequestDataCase {
        REQUEST_DATA_NOT_SET = 0,
        IMAGE_SOURCE = 1,
        IMAGE_REQUEST = 3,
    }

}

export class OutputData extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): OutputData;
    clearObjectInImageList(): void;
    getObjectInImageList(): Array<bosdyn_api_world_object_pb.WorldObject>;
    setObjectInImageList(value: Array<bosdyn_api_world_object_pb.WorldObject>): OutputData;
    addObjectInImage(value?: bosdyn_api_world_object_pb.WorldObject, index?: number): bosdyn_api_world_object_pb.WorldObject;

    hasAlertData(): boolean;
    clearAlertData(): void;
    getAlertData(): bosdyn_api_alerts_pb.AlertData | undefined;
    setAlertData(value?: bosdyn_api_alerts_pb.AlertData): OutputData;

    hasOtherData(): boolean;
    clearOtherData(): void;
    getOtherData(): google_protobuf_any_pb.Any | undefined;
    setOtherData(value?: google_protobuf_any_pb.Any): OutputData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputData.AsObject;
    static toObject(includeInstance: boolean, msg: OutputData): OutputData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputData;
    static deserializeBinaryFromReader(message: OutputData, reader: jspb.BinaryReader): OutputData;
}

export namespace OutputData {
    export type AsObject = {
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        objectInImageList: Array<bosdyn_api_world_object_pb.WorldObject.AsObject>,
        alertData?: bosdyn_api_alerts_pb.AlertData.AsObject,
        otherData?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class ComputeParameters extends jspb.Message { 

    hasOtherData(): boolean;
    clearOtherData(): void;
    getOtherData(): google_protobuf_any_pb.Any | undefined;
    setOtherData(value?: google_protobuf_any_pb.Any): ComputeParameters;
    getModelName(): string;
    setModelName(value: string): ComputeParameters;
    clearReferenceImagesList(): void;
    getReferenceImagesList(): Array<bosdyn_api_image_pb.ImageCaptureAndSource>;
    setReferenceImagesList(value: Array<bosdyn_api_image_pb.ImageCaptureAndSource>): ComputeParameters;
    addReferenceImages(value?: bosdyn_api_image_pb.ImageCaptureAndSource, index?: number): bosdyn_api_image_pb.ImageCaptureAndSource;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam): ComputeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComputeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ComputeParameters): ComputeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComputeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComputeParameters;
    static deserializeBinaryFromReader(message: ComputeParameters, reader: jspb.BinaryReader): ComputeParameters;
}

export namespace ComputeParameters {
    export type AsObject = {
        otherData?: google_protobuf_any_pb.Any.AsObject,
        modelName: string,
        referenceImagesList: Array<bosdyn_api_image_pb.ImageCaptureAndSource.AsObject>,
        customParams?: bosdyn_api_service_customization_pb.DictParam.AsObject,
    }
}

export class NetworkComputeInputDataBridge extends jspb.Message { 
    clearImageSourcesAndServicesList(): void;
    getImageSourcesAndServicesList(): Array<ImageSourceAndService>;
    setImageSourcesAndServicesList(value: Array<ImageSourceAndService>): NetworkComputeInputDataBridge;
    addImageSourcesAndServices(value?: ImageSourceAndService, index?: number): ImageSourceAndService;

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): ComputeParameters | undefined;
    setParameters(value?: ComputeParameters): NetworkComputeInputDataBridge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeInputDataBridge.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeInputDataBridge): NetworkComputeInputDataBridge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeInputDataBridge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeInputDataBridge;
    static deserializeBinaryFromReader(message: NetworkComputeInputDataBridge, reader: jspb.BinaryReader): NetworkComputeInputDataBridge;
}

export namespace NetworkComputeInputDataBridge {
    export type AsObject = {
        imageSourcesAndServicesList: Array<ImageSourceAndService.AsObject>,
        parameters?: ComputeParameters.AsObject,
    }
}

export class NetworkComputeInputDataWorker extends jspb.Message { 
    clearImagesList(): void;
    getImagesList(): Array<bosdyn_api_image_pb.ImageCaptureAndSource>;
    setImagesList(value: Array<bosdyn_api_image_pb.ImageCaptureAndSource>): NetworkComputeInputDataWorker;
    addImages(value?: bosdyn_api_image_pb.ImageCaptureAndSource, index?: number): bosdyn_api_image_pb.ImageCaptureAndSource;

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): ComputeParameters | undefined;
    setParameters(value?: ComputeParameters): NetworkComputeInputDataWorker;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeInputDataWorker.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeInputDataWorker): NetworkComputeInputDataWorker.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeInputDataWorker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeInputDataWorker;
    static deserializeBinaryFromReader(message: NetworkComputeInputDataWorker, reader: jspb.BinaryReader): NetworkComputeInputDataWorker;
}

export namespace NetworkComputeInputDataWorker {
    export type AsObject = {
        imagesList: Array<bosdyn_api_image_pb.ImageCaptureAndSource.AsObject>,
        parameters?: ComputeParameters.AsObject,
    }
}

export class NetworkComputeInputData extends jspb.Message { 

    hasImageSourceAndService(): boolean;
    clearImageSourceAndService(): void;
    getImageSourceAndService(): ImageSourceAndService | undefined;
    setImageSourceAndService(value?: ImageSourceAndService): NetworkComputeInputData;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): bosdyn_api_image_pb.Image | undefined;
    setImage(value?: bosdyn_api_image_pb.Image): NetworkComputeInputData;

    hasOtherData(): boolean;
    clearOtherData(): void;
    getOtherData(): google_protobuf_any_pb.Any | undefined;
    setOtherData(value?: google_protobuf_any_pb.Any): NetworkComputeInputData;
    getModelName(): string;
    setModelName(value: string): NetworkComputeInputData;
    getMinConfidence(): number;
    setMinConfidence(value: number): NetworkComputeInputData;
    getRotateImage(): NetworkComputeInputData.RotateImage;
    setRotateImage(value: NetworkComputeInputData.RotateImage): NetworkComputeInputData;

    getInputCase(): NetworkComputeInputData.InputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeInputData.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeInputData): NetworkComputeInputData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeInputData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeInputData;
    static deserializeBinaryFromReader(message: NetworkComputeInputData, reader: jspb.BinaryReader): NetworkComputeInputData;
}

export namespace NetworkComputeInputData {
    export type AsObject = {
        imageSourceAndService?: ImageSourceAndService.AsObject,
        image?: bosdyn_api_image_pb.Image.AsObject,
        otherData?: google_protobuf_any_pb.Any.AsObject,
        modelName: string,
        minConfidence: number,
        rotateImage: NetworkComputeInputData.RotateImage,
    }

    export enum RotateImage {
    ROTATE_IMAGE_UNKNOWN = 0,
    ROTATE_IMAGE_NO_ROTATION = 3,
    ROTATE_IMAGE_ALIGN_HORIZONTAL = 1,
    ROTATE_IMAGE_ALIGN_WITH_BODY = 2,
    }


    export enum InputCase {
        INPUT_NOT_SET = 0,
        IMAGE_SOURCE_AND_SERVICE = 7,
        IMAGE = 2,
    }

}

export class NetworkComputeServerConfiguration extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): NetworkComputeServerConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeServerConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeServerConfiguration): NetworkComputeServerConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeServerConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeServerConfiguration;
    static deserializeBinaryFromReader(message: NetworkComputeServerConfiguration, reader: jspb.BinaryReader): NetworkComputeServerConfiguration;
}

export namespace NetworkComputeServerConfiguration {
    export type AsObject = {
        serviceName: string,
    }
}

export class OutputImage extends jspb.Message { 

    hasImageResponse(): boolean;
    clearImageResponse(): void;
    getImageResponse(): bosdyn_api_image_pb.ImageResponse | undefined;
    setImageResponse(value?: bosdyn_api_image_pb.ImageResponse): OutputImage;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): OutputImage;
    clearObjectInImageList(): void;
    getObjectInImageList(): Array<bosdyn_api_world_object_pb.WorldObject>;
    setObjectInImageList(value: Array<bosdyn_api_world_object_pb.WorldObject>): OutputImage;
    addObjectInImage(value?: bosdyn_api_world_object_pb.WorldObject, index?: number): bosdyn_api_world_object_pb.WorldObject;

    hasAlertData(): boolean;
    clearAlertData(): void;
    getAlertData(): bosdyn_api_alerts_pb.AlertData | undefined;
    setAlertData(value?: bosdyn_api_alerts_pb.AlertData): OutputImage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputImage.AsObject;
    static toObject(includeInstance: boolean, msg: OutputImage): OutputImage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputImage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputImage;
    static deserializeBinaryFromReader(message: OutputImage, reader: jspb.BinaryReader): OutputImage;
}

export namespace OutputImage {
    export type AsObject = {
        imageResponse?: bosdyn_api_image_pb.ImageResponse.AsObject,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        objectInImageList: Array<bosdyn_api_world_object_pb.WorldObject.AsObject>,
        alertData?: bosdyn_api_alerts_pb.AlertData.AsObject,
    }
}

export class OutputImageSpec extends jspb.Message { 
    getKey(): string;
    setKey(value: string): OutputImageSpec;
    getName(): string;
    setName(value: string): OutputImageSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputImageSpec.AsObject;
    static toObject(includeInstance: boolean, msg: OutputImageSpec): OutputImageSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputImageSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputImageSpec;
    static deserializeBinaryFromReader(message: OutputImageSpec, reader: jspb.BinaryReader): OutputImageSpec;
}

export namespace OutputImageSpec {
    export type AsObject = {
        key: string,
        name: string,
    }
}

export class NetworkComputeResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): NetworkComputeResponse;
    clearObjectInImageList(): void;
    getObjectInImageList(): Array<bosdyn_api_world_object_pb.WorldObject>;
    setObjectInImageList(value: Array<bosdyn_api_world_object_pb.WorldObject>): NetworkComputeResponse;
    addObjectInImage(value?: bosdyn_api_world_object_pb.WorldObject, index?: number): bosdyn_api_world_object_pb.WorldObject;

    hasImageResponse(): boolean;
    clearImageResponse(): void;
    getImageResponse(): bosdyn_api_image_pb.ImageResponse | undefined;
    setImageResponse(value?: bosdyn_api_image_pb.ImageResponse): NetworkComputeResponse;
    clearImageResponsesList(): void;
    getImageResponsesList(): Array<bosdyn_api_image_pb.ImageCaptureAndSource>;
    setImageResponsesList(value: Array<bosdyn_api_image_pb.ImageCaptureAndSource>): NetworkComputeResponse;
    addImageResponses(value?: bosdyn_api_image_pb.ImageCaptureAndSource, index?: number): bosdyn_api_image_pb.ImageCaptureAndSource;
    getImageRotationAngle(): number;
    setImageRotationAngle(value: number): NetworkComputeResponse;

    hasOtherData(): boolean;
    clearOtherData(): void;
    getOtherData(): google_protobuf_any_pb.Any | undefined;
    setOtherData(value?: google_protobuf_any_pb.Any): NetworkComputeResponse;
    getStatus(): NetworkComputeStatus;
    setStatus(value: NetworkComputeStatus): NetworkComputeResponse;

    hasCustomParamError(): boolean;
    clearCustomParamError(): void;
    getCustomParamError(): bosdyn_api_service_customization_pb.CustomParamError | undefined;
    setCustomParamError(value?: bosdyn_api_service_customization_pb.CustomParamError): NetworkComputeResponse;

    hasAlertData(): boolean;
    clearAlertData(): void;
    getAlertData(): bosdyn_api_alerts_pb.AlertData | undefined;
    setAlertData(value?: bosdyn_api_alerts_pb.AlertData): NetworkComputeResponse;

    getOutputImagesMap(): jspb.Map<string, OutputImage>;
    clearOutputImagesMap(): void;

    getRoiOutputDataMap(): jspb.Map<string, OutputData>;
    clearRoiOutputDataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeResponse): NetworkComputeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeResponse;
    static deserializeBinaryFromReader(message: NetworkComputeResponse, reader: jspb.BinaryReader): NetworkComputeResponse;
}

export namespace NetworkComputeResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        objectInImageList: Array<bosdyn_api_world_object_pb.WorldObject.AsObject>,
        imageResponse?: bosdyn_api_image_pb.ImageResponse.AsObject,
        imageResponsesList: Array<bosdyn_api_image_pb.ImageCaptureAndSource.AsObject>,
        imageRotationAngle: number,
        otherData?: google_protobuf_any_pb.Any.AsObject,
        status: NetworkComputeStatus,
        customParamError?: bosdyn_api_service_customization_pb.CustomParamError.AsObject,
        alertData?: bosdyn_api_alerts_pb.AlertData.AsObject,

        outputImagesMap: Array<[string, OutputImage.AsObject]>,

        roiOutputDataMap: Array<[string, OutputData.AsObject]>,
    }
}

export class WorkerComputeRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): WorkerComputeRequest;

    hasInputData(): boolean;
    clearInputData(): void;
    getInputData(): NetworkComputeInputDataWorker | undefined;
    setInputData(value?: NetworkComputeInputDataWorker): WorkerComputeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkerComputeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WorkerComputeRequest): WorkerComputeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkerComputeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkerComputeRequest;
    static deserializeBinaryFromReader(message: WorkerComputeRequest, reader: jspb.BinaryReader): WorkerComputeRequest;
}

export namespace WorkerComputeRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        inputData?: NetworkComputeInputDataWorker.AsObject,
    }
}

export class WorkerComputeResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): WorkerComputeResponse;

    hasOtherData(): boolean;
    clearOtherData(): void;
    getOtherData(): google_protobuf_any_pb.Any | undefined;
    setOtherData(value?: google_protobuf_any_pb.Any): WorkerComputeResponse;
    getStatus(): NetworkComputeStatus;
    setStatus(value: NetworkComputeStatus): WorkerComputeResponse;

    hasCustomParamError(): boolean;
    clearCustomParamError(): void;
    getCustomParamError(): bosdyn_api_service_customization_pb.CustomParamError | undefined;
    setCustomParamError(value?: bosdyn_api_service_customization_pb.CustomParamError): WorkerComputeResponse;

    getOutputImagesMap(): jspb.Map<string, OutputImage>;
    clearOutputImagesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkerComputeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WorkerComputeResponse): WorkerComputeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkerComputeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkerComputeResponse;
    static deserializeBinaryFromReader(message: WorkerComputeResponse, reader: jspb.BinaryReader): WorkerComputeResponse;
}

export namespace WorkerComputeResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        otherData?: google_protobuf_any_pb.Any.AsObject,
        status: NetworkComputeStatus,
        customParamError?: bosdyn_api_service_customization_pb.CustomParamError.AsObject,

        outputImagesMap: Array<[string, OutputImage.AsObject]>,
    }
}

export enum NetworkComputeStatus {
    NETWORK_COMPUTE_STATUS_UNKNOWN = 0,
    NETWORK_COMPUTE_STATUS_SUCCESS = 1,
    NETWORK_COMPUTE_STATUS_EXTERNAL_SERVICE_NOT_FOUND = 2,
    NETWORK_COMPUTE_STATUS_EXTERNAL_SERVER_ERROR = 3,
    NETWORK_COMPUTE_STATUS_ROTATION_ERROR = 4,
    NETWORK_COMPUTE_STATUS_CUSTOM_PARAMS_ERROR = 5,
    NETWORK_COMPUTE_STATUS_ANALYSIS_FAILED = 6,
}

export enum ListAvailableModelsStatus {
    LIST_AVAILABLE_MODELS_STATUS_UNKNOWN = 0,
    LIST_AVAILABLE_MODELS_STATUS_SUCCESS = 1,
    LIST_AVAILABLE_MODELS_STATUS_EXTERNAL_SERVICE_NOT_FOUND = 2,
    LIST_AVAILABLE_MODELS_STATUS_EXTERNAL_SERVER_ERROR = 3,
}
