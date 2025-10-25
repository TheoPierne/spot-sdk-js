// package: bosdyn.api
// file: bosdyn/api/data_acquisition.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_alerts_pb from "../../bosdyn/api/alerts_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_image_pb from "../../bosdyn/api/image_pb";
import * as bosdyn_api_network_compute_bridge_pb from "../../bosdyn/api/network_compute_bridge_pb";
import * as bosdyn_api_service_customization_pb from "../../bosdyn/api/service_customization_pb";
import * as bosdyn_api_signals_pb from "../../bosdyn/api/signals_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DataAcquisitionCapability extends jspb.Message { 
    getName(): string;
    setName(value: string): DataAcquisitionCapability;
    getDescription(): string;
    setDescription(value: string): DataAcquisitionCapability;
    getChannelName(): string;
    setChannelName(value: string): DataAcquisitionCapability;
    getServiceName(): string;
    setServiceName(value: string): DataAcquisitionCapability;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam.Spec | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam.Spec): DataAcquisitionCapability;
    getHasLiveData(): boolean;
    setHasLiveData(value: boolean): DataAcquisitionCapability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataAcquisitionCapability.AsObject;
    static toObject(includeInstance: boolean, msg: DataAcquisitionCapability): DataAcquisitionCapability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataAcquisitionCapability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataAcquisitionCapability;
    static deserializeBinaryFromReader(message: DataAcquisitionCapability, reader: jspb.BinaryReader): DataAcquisitionCapability;
}

export namespace DataAcquisitionCapability {
    export type AsObject = {
        name: string,
        description: string,
        channelName: string,
        serviceName: string,
        customParams?: bosdyn_api_service_customization_pb.DictParam.Spec.AsObject,
        hasLiveData: boolean,
    }
}

export class ImageAcquisitionCapability extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): ImageAcquisitionCapability;
    clearImageSourceNamesList(): void;
    getImageSourceNamesList(): Array<string>;
    setImageSourceNamesList(value: Array<string>): ImageAcquisitionCapability;
    addImageSourceNames(value: string, index?: number): string;
    clearImageSourcesList(): void;
    getImageSourcesList(): Array<bosdyn_api_image_pb.ImageSource>;
    setImageSourcesList(value: Array<bosdyn_api_image_pb.ImageSource>): ImageAcquisitionCapability;
    addImageSources(value?: bosdyn_api_image_pb.ImageSource, index?: number): bosdyn_api_image_pb.ImageSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageAcquisitionCapability.AsObject;
    static toObject(includeInstance: boolean, msg: ImageAcquisitionCapability): ImageAcquisitionCapability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageAcquisitionCapability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageAcquisitionCapability;
    static deserializeBinaryFromReader(message: ImageAcquisitionCapability, reader: jspb.BinaryReader): ImageAcquisitionCapability;
}

export namespace ImageAcquisitionCapability {
    export type AsObject = {
        serviceName: string,
        imageSourceNamesList: Array<string>,
        imageSourcesList: Array<bosdyn_api_image_pb.ImageSource.AsObject>,
    }
}

export class NetworkComputeCapability extends jspb.Message { 

    hasServerConfig(): boolean;
    clearServerConfig(): void;
    getServerConfig(): bosdyn_api_network_compute_bridge_pb.NetworkComputeServerConfiguration | undefined;
    setServerConfig(value?: bosdyn_api_network_compute_bridge_pb.NetworkComputeServerConfiguration): NetworkComputeCapability;
    clearAvailableModelsList(): void;
    getAvailableModelsList(): Array<string>;
    setAvailableModelsList(value: Array<string>): NetworkComputeCapability;
    addAvailableModels(value: string, index?: number): string;
    clearLabelsList(): void;
    getLabelsList(): Array<bosdyn_api_network_compute_bridge_pb.ModelLabels>;
    setLabelsList(value: Array<bosdyn_api_network_compute_bridge_pb.ModelLabels>): NetworkComputeCapability;
    addLabels(value?: bosdyn_api_network_compute_bridge_pb.ModelLabels, index?: number): bosdyn_api_network_compute_bridge_pb.ModelLabels;

    hasModels(): boolean;
    clearModels(): void;
    getModels(): bosdyn_api_network_compute_bridge_pb.AvailableModels | undefined;
    setModels(value?: bosdyn_api_network_compute_bridge_pb.AvailableModels): NetworkComputeCapability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeCapability.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeCapability): NetworkComputeCapability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeCapability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeCapability;
    static deserializeBinaryFromReader(message: NetworkComputeCapability, reader: jspb.BinaryReader): NetworkComputeCapability;
}

export namespace NetworkComputeCapability {
    export type AsObject = {
        serverConfig?: bosdyn_api_network_compute_bridge_pb.NetworkComputeServerConfiguration.AsObject,
        availableModelsList: Array<string>,
        labelsList: Array<bosdyn_api_network_compute_bridge_pb.ModelLabels.AsObject>,
        models?: bosdyn_api_network_compute_bridge_pb.AvailableModels.AsObject,
    }
}

export class AcquisitionCapabilityList extends jspb.Message { 
    clearDataSourcesList(): void;
    getDataSourcesList(): Array<DataAcquisitionCapability>;
    setDataSourcesList(value: Array<DataAcquisitionCapability>): AcquisitionCapabilityList;
    addDataSources(value?: DataAcquisitionCapability, index?: number): DataAcquisitionCapability;
    clearImageSourcesList(): void;
    getImageSourcesList(): Array<ImageAcquisitionCapability>;
    setImageSourcesList(value: Array<ImageAcquisitionCapability>): AcquisitionCapabilityList;
    addImageSources(value?: ImageAcquisitionCapability, index?: number): ImageAcquisitionCapability;
    clearNetworkComputeSourcesList(): void;
    getNetworkComputeSourcesList(): Array<NetworkComputeCapability>;
    setNetworkComputeSourcesList(value: Array<NetworkComputeCapability>): AcquisitionCapabilityList;
    addNetworkComputeSources(value?: NetworkComputeCapability, index?: number): NetworkComputeCapability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcquisitionCapabilityList.AsObject;
    static toObject(includeInstance: boolean, msg: AcquisitionCapabilityList): AcquisitionCapabilityList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcquisitionCapabilityList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcquisitionCapabilityList;
    static deserializeBinaryFromReader(message: AcquisitionCapabilityList, reader: jspb.BinaryReader): AcquisitionCapabilityList;
}

export namespace AcquisitionCapabilityList {
    export type AsObject = {
        dataSourcesList: Array<DataAcquisitionCapability.AsObject>,
        imageSourcesList: Array<ImageAcquisitionCapability.AsObject>,
        networkComputeSourcesList: Array<NetworkComputeCapability.AsObject>,
    }
}

export class CaptureActionId extends jspb.Message { 
    getActionName(): string;
    setActionName(value: string): CaptureActionId;
    getGroupName(): string;
    setGroupName(value: string): CaptureActionId;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CaptureActionId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CaptureActionId.AsObject;
    static toObject(includeInstance: boolean, msg: CaptureActionId): CaptureActionId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CaptureActionId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CaptureActionId;
    static deserializeBinaryFromReader(message: CaptureActionId, reader: jspb.BinaryReader): CaptureActionId;
}

export namespace CaptureActionId {
    export type AsObject = {
        actionName: string,
        groupName: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DataIdentifier extends jspb.Message { 

    hasActionId(): boolean;
    clearActionId(): void;
    getActionId(): CaptureActionId | undefined;
    setActionId(value?: CaptureActionId): DataIdentifier;
    getChannel(): string;
    setChannel(value: string): DataIdentifier;
    getDataName(): string;
    setDataName(value: string): DataIdentifier;
    getId(): number;
    setId(value: number): DataIdentifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataIdentifier.AsObject;
    static toObject(includeInstance: boolean, msg: DataIdentifier): DataIdentifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataIdentifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataIdentifier;
    static deserializeBinaryFromReader(message: DataIdentifier, reader: jspb.BinaryReader): DataIdentifier;
}

export namespace DataIdentifier {
    export type AsObject = {
        actionId?: CaptureActionId.AsObject,
        channel: string,
        dataName: string,
        id: number,
    }
}

export class Metadata extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_struct_pb.Struct | undefined;
    setData(value?: google_protobuf_struct_pb.Struct): Metadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
    export type AsObject = {
        data?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class AssociatedMetadata extends jspb.Message { 

    hasReferenceId(): boolean;
    clearReferenceId(): void;
    getReferenceId(): DataIdentifier | undefined;
    setReferenceId(value?: DataIdentifier): AssociatedMetadata;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): Metadata | undefined;
    setMetadata(value?: Metadata): AssociatedMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssociatedMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AssociatedMetadata): AssociatedMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssociatedMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssociatedMetadata;
    static deserializeBinaryFromReader(message: AssociatedMetadata, reader: jspb.BinaryReader): AssociatedMetadata;
}

export namespace AssociatedMetadata {
    export type AsObject = {
        referenceId?: DataIdentifier.AsObject,
        metadata?: Metadata.AsObject,
    }
}

export class AssociatedAlertData extends jspb.Message { 

    hasReferenceId(): boolean;
    clearReferenceId(): void;
    getReferenceId(): DataIdentifier | undefined;
    setReferenceId(value?: DataIdentifier): AssociatedAlertData;

    hasAlertData(): boolean;
    clearAlertData(): void;
    getAlertData(): bosdyn_api_alerts_pb.AlertData | undefined;
    setAlertData(value?: bosdyn_api_alerts_pb.AlertData): AssociatedAlertData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssociatedAlertData.AsObject;
    static toObject(includeInstance: boolean, msg: AssociatedAlertData): AssociatedAlertData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssociatedAlertData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssociatedAlertData;
    static deserializeBinaryFromReader(message: AssociatedAlertData, reader: jspb.BinaryReader): AssociatedAlertData;
}

export namespace AssociatedAlertData {
    export type AsObject = {
        referenceId?: DataIdentifier.AsObject,
        alertData?: bosdyn_api_alerts_pb.AlertData.AsObject,
    }
}

export class ImageSourceCapture extends jspb.Message { 
    getImageService(): string;
    setImageService(value: string): ImageSourceCapture;

    hasImageRequest(): boolean;
    clearImageRequest(): void;
    getImageRequest(): bosdyn_api_image_pb.ImageRequest | undefined;
    setImageRequest(value?: bosdyn_api_image_pb.ImageRequest): ImageSourceCapture;
    getImageSource(): string;
    setImageSource(value: string): ImageSourceCapture;
    getPixelFormat(): bosdyn_api_image_pb.Image.PixelFormat;
    setPixelFormat(value: bosdyn_api_image_pb.Image.PixelFormat): ImageSourceCapture;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageSourceCapture.AsObject;
    static toObject(includeInstance: boolean, msg: ImageSourceCapture): ImageSourceCapture.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageSourceCapture, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageSourceCapture;
    static deserializeBinaryFromReader(message: ImageSourceCapture, reader: jspb.BinaryReader): ImageSourceCapture;
}

export namespace ImageSourceCapture {
    export type AsObject = {
        imageService: string,
        imageRequest?: bosdyn_api_image_pb.ImageRequest.AsObject,
        imageSource: string,
        pixelFormat: bosdyn_api_image_pb.Image.PixelFormat,
    }
}

export class DataCapture extends jspb.Message { 
    getName(): string;
    setName(value: string): DataCapture;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam): DataCapture;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataCapture.AsObject;
    static toObject(includeInstance: boolean, msg: DataCapture): DataCapture.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataCapture, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataCapture;
    static deserializeBinaryFromReader(message: DataCapture, reader: jspb.BinaryReader): DataCapture;
}

export namespace DataCapture {
    export type AsObject = {
        name: string,
        customParams?: bosdyn_api_service_customization_pb.DictParam.AsObject,
    }
}

export class NetworkComputeCapture extends jspb.Message { 

    hasInputData(): boolean;
    clearInputData(): void;
    getInputData(): bosdyn_api_network_compute_bridge_pb.NetworkComputeInputData | undefined;
    setInputData(value?: bosdyn_api_network_compute_bridge_pb.NetworkComputeInputData): NetworkComputeCapture;

    hasInputDataBridge(): boolean;
    clearInputDataBridge(): void;
    getInputDataBridge(): bosdyn_api_network_compute_bridge_pb.NetworkComputeInputDataBridge | undefined;
    setInputDataBridge(value?: bosdyn_api_network_compute_bridge_pb.NetworkComputeInputDataBridge): NetworkComputeCapture;

    hasServerConfig(): boolean;
    clearServerConfig(): void;
    getServerConfig(): bosdyn_api_network_compute_bridge_pb.NetworkComputeServerConfiguration | undefined;
    setServerConfig(value?: bosdyn_api_network_compute_bridge_pb.NetworkComputeServerConfiguration): NetworkComputeCapture;

    getInputCase(): NetworkComputeCapture.InputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeCapture.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeCapture): NetworkComputeCapture.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeCapture, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeCapture;
    static deserializeBinaryFromReader(message: NetworkComputeCapture, reader: jspb.BinaryReader): NetworkComputeCapture;
}

export namespace NetworkComputeCapture {
    export type AsObject = {
        inputData?: bosdyn_api_network_compute_bridge_pb.NetworkComputeInputData.AsObject,
        inputDataBridge?: bosdyn_api_network_compute_bridge_pb.NetworkComputeInputDataBridge.AsObject,
        serverConfig?: bosdyn_api_network_compute_bridge_pb.NetworkComputeServerConfiguration.AsObject,
    }

    export enum InputCase {
        INPUT_NOT_SET = 0,
        INPUT_DATA = 1,
        INPUT_DATA_BRIDGE = 3,
    }

}

export class AcquisitionRequestList extends jspb.Message { 
    clearImageCapturesList(): void;
    getImageCapturesList(): Array<ImageSourceCapture>;
    setImageCapturesList(value: Array<ImageSourceCapture>): AcquisitionRequestList;
    addImageCaptures(value?: ImageSourceCapture, index?: number): ImageSourceCapture;
    clearDataCapturesList(): void;
    getDataCapturesList(): Array<DataCapture>;
    setDataCapturesList(value: Array<DataCapture>): AcquisitionRequestList;
    addDataCaptures(value?: DataCapture, index?: number): DataCapture;
    clearNetworkComputeCapturesList(): void;
    getNetworkComputeCapturesList(): Array<NetworkComputeCapture>;
    setNetworkComputeCapturesList(value: Array<NetworkComputeCapture>): AcquisitionRequestList;
    addNetworkComputeCaptures(value?: NetworkComputeCapture, index?: number): NetworkComputeCapture;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcquisitionRequestList.AsObject;
    static toObject(includeInstance: boolean, msg: AcquisitionRequestList): AcquisitionRequestList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcquisitionRequestList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcquisitionRequestList;
    static deserializeBinaryFromReader(message: AcquisitionRequestList, reader: jspb.BinaryReader): AcquisitionRequestList;
}

export namespace AcquisitionRequestList {
    export type AsObject = {
        imageCapturesList: Array<ImageSourceCapture.AsObject>,
        dataCapturesList: Array<DataCapture.AsObject>,
        networkComputeCapturesList: Array<NetworkComputeCapture.AsObject>,
    }
}

export class DataError extends jspb.Message { 

    hasDataId(): boolean;
    clearDataId(): void;
    getDataId(): DataIdentifier | undefined;
    setDataId(value?: DataIdentifier): DataError;
    getErrorMessage(): string;
    setErrorMessage(value: string): DataError;

    hasErrorData(): boolean;
    clearErrorData(): void;
    getErrorData(): google_protobuf_any_pb.Any | undefined;
    setErrorData(value?: google_protobuf_any_pb.Any): DataError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataError.AsObject;
    static toObject(includeInstance: boolean, msg: DataError): DataError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataError;
    static deserializeBinaryFromReader(message: DataError, reader: jspb.BinaryReader): DataError;
}

export namespace DataError {
    export type AsObject = {
        dataId?: DataIdentifier.AsObject,
        errorMessage: string,
        errorData?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class PluginServiceError extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): PluginServiceError;
    getError(): PluginServiceError.ErrorCode;
    setError(value: PluginServiceError.ErrorCode): PluginServiceError;
    getMessage(): string;
    setMessage(value: string): PluginServiceError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PluginServiceError.AsObject;
    static toObject(includeInstance: boolean, msg: PluginServiceError): PluginServiceError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PluginServiceError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PluginServiceError;
    static deserializeBinaryFromReader(message: PluginServiceError, reader: jspb.BinaryReader): PluginServiceError;
}

export namespace PluginServiceError {
    export type AsObject = {
        serviceName: string,
        error: PluginServiceError.ErrorCode,
        message: string,
    }

    export enum ErrorCode {
    STATUS_UNKNOWN = 0,
    STATUS_REQUEST_ERROR = 1,
    STATUS_GETSTATUS_ERROR = 2,
    STATUS_INTERNAL_ERROR = 3,
    }

}

export class NetworkComputeError extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): NetworkComputeError;
    getError(): NetworkComputeError.ErrorCode;
    setError(value: NetworkComputeError.ErrorCode): NetworkComputeError;
    getNetworkComputeStatus(): bosdyn_api_network_compute_bridge_pb.NetworkComputeStatus;
    setNetworkComputeStatus(value: bosdyn_api_network_compute_bridge_pb.NetworkComputeStatus): NetworkComputeError;
    getMessage(): string;
    setMessage(value: string): NetworkComputeError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkComputeError.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkComputeError): NetworkComputeError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkComputeError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkComputeError;
    static deserializeBinaryFromReader(message: NetworkComputeError, reader: jspb.BinaryReader): NetworkComputeError;
}

export namespace NetworkComputeError {
    export type AsObject = {
        serviceName: string,
        error: NetworkComputeError.ErrorCode,
        networkComputeStatus: bosdyn_api_network_compute_bridge_pb.NetworkComputeStatus,
        message: string,
    }

    export enum ErrorCode {
    STATUS_UNKNOWN = 0,
    STATUS_REQUEST_ERROR = 1,
    STATUS_NETWORK_ERROR = 2,
    STATUS_INTERNAL_ERROR = 3,
    }

}

export class AcquireDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): AcquireDataRequest;

    hasActionId(): boolean;
    clearActionId(): void;
    getActionId(): CaptureActionId | undefined;
    setActionId(value?: CaptureActionId): AcquireDataRequest;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): Metadata | undefined;
    setMetadata(value?: Metadata): AcquireDataRequest;

    hasAcquisitionRequests(): boolean;
    clearAcquisitionRequests(): void;
    getAcquisitionRequests(): AcquisitionRequestList | undefined;
    setAcquisitionRequests(value?: AcquisitionRequestList): AcquireDataRequest;

    hasMinTimeout(): boolean;
    clearMinTimeout(): void;
    getMinTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setMinTimeout(value?: google_protobuf_duration_pb.Duration): AcquireDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcquireDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AcquireDataRequest): AcquireDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcquireDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcquireDataRequest;
    static deserializeBinaryFromReader(message: AcquireDataRequest, reader: jspb.BinaryReader): AcquireDataRequest;
}

export namespace AcquireDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        actionId?: CaptureActionId.AsObject,
        metadata?: Metadata.AsObject,
        acquisitionRequests?: AcquisitionRequestList.AsObject,
        minTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class AcquireDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): AcquireDataResponse;
    getStatus(): AcquireDataResponse.Status;
    setStatus(value: AcquireDataResponse.Status): AcquireDataResponse;
    getRequestId(): number;
    setRequestId(value: number): AcquireDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcquireDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AcquireDataResponse): AcquireDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcquireDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcquireDataResponse;
    static deserializeBinaryFromReader(message: AcquireDataResponse, reader: jspb.BinaryReader): AcquireDataResponse;
}

export namespace AcquireDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: AcquireDataResponse.Status,
        requestId: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_CAPTURE_TYPE = 2,
    }

}

export class AcquirePluginDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): AcquirePluginDataRequest;
    clearDataIdList(): void;
    getDataIdList(): Array<DataIdentifier>;
    setDataIdList(value: Array<DataIdentifier>): AcquirePluginDataRequest;
    addDataId(value?: DataIdentifier, index?: number): DataIdentifier;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): Metadata | undefined;
    setMetadata(value?: Metadata): AcquirePluginDataRequest;

    hasActionId(): boolean;
    clearActionId(): void;
    getActionId(): CaptureActionId | undefined;
    setActionId(value?: CaptureActionId): AcquirePluginDataRequest;

    hasAcquisitionRequests(): boolean;
    clearAcquisitionRequests(): void;
    getAcquisitionRequests(): AcquisitionRequestList | undefined;
    setAcquisitionRequests(value?: AcquisitionRequestList): AcquirePluginDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcquirePluginDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AcquirePluginDataRequest): AcquirePluginDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcquirePluginDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcquirePluginDataRequest;
    static deserializeBinaryFromReader(message: AcquirePluginDataRequest, reader: jspb.BinaryReader): AcquirePluginDataRequest;
}

export namespace AcquirePluginDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        dataIdList: Array<DataIdentifier.AsObject>,
        metadata?: Metadata.AsObject,
        actionId?: CaptureActionId.AsObject,
        acquisitionRequests?: AcquisitionRequestList.AsObject,
    }
}

export class AcquirePluginDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): AcquirePluginDataResponse;
    getStatus(): AcquirePluginDataResponse.Status;
    setStatus(value: AcquirePluginDataResponse.Status): AcquirePluginDataResponse;
    getRequestId(): number;
    setRequestId(value: number): AcquirePluginDataResponse;

    hasTimeoutDeadline(): boolean;
    clearTimeoutDeadline(): void;
    getTimeoutDeadline(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimeoutDeadline(value?: google_protobuf_timestamp_pb.Timestamp): AcquirePluginDataResponse;

    hasCustomParamError(): boolean;
    clearCustomParamError(): void;
    getCustomParamError(): bosdyn_api_service_customization_pb.CustomParamError | undefined;
    setCustomParamError(value?: bosdyn_api_service_customization_pb.CustomParamError): AcquirePluginDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcquirePluginDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AcquirePluginDataResponse): AcquirePluginDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcquirePluginDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcquirePluginDataResponse;
    static deserializeBinaryFromReader(message: AcquirePluginDataResponse, reader: jspb.BinaryReader): AcquirePluginDataResponse;
}

export namespace AcquirePluginDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: AcquirePluginDataResponse.Status,
        requestId: number,
        timeoutDeadline?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        customParamError?: bosdyn_api_service_customization_pb.CustomParamError.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_CAPTURE_TYPE = 2,
    STATUS_CUSTOM_PARAMS_ERROR = 3,
    }

}

export class GetStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetStatusRequest;
    getRequestId(): number;
    setRequestId(value: number): GetStatusRequest;

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
        requestId: number,
    }
}

export class GetStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetStatusResponse;
    getStatus(): GetStatusResponse.Status;
    setStatus(value: GetStatusResponse.Status): GetStatusResponse;
    clearDataSavedList(): void;
    getDataSavedList(): Array<DataIdentifier>;
    setDataSavedList(value: Array<DataIdentifier>): GetStatusResponse;
    addDataSaved(value?: DataIdentifier, index?: number): DataIdentifier;
    clearDataErrorsList(): void;
    getDataErrorsList(): Array<DataError>;
    setDataErrorsList(value: Array<DataError>): GetStatusResponse;
    addDataErrors(value?: DataError, index?: number): DataError;
    clearServiceErrorsList(): void;
    getServiceErrorsList(): Array<PluginServiceError>;
    setServiceErrorsList(value: Array<PluginServiceError>): GetStatusResponse;
    addServiceErrors(value?: PluginServiceError, index?: number): PluginServiceError;
    clearNetworkComputeErrorsList(): void;
    getNetworkComputeErrorsList(): Array<NetworkComputeError>;
    setNetworkComputeErrorsList(value: Array<NetworkComputeError>): GetStatusResponse;
    addNetworkComputeErrors(value?: NetworkComputeError, index?: number): NetworkComputeError;

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
        status: GetStatusResponse.Status,
        dataSavedList: Array<DataIdentifier.AsObject>,
        dataErrorsList: Array<DataError.AsObject>,
        serviceErrorsList: Array<PluginServiceError.AsObject>,
        networkComputeErrorsList: Array<NetworkComputeError.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_ACQUIRING = 1,
    STATUS_SAVING = 2,
    STATUS_COMPLETE = 3,
    STATUS_CANCEL_IN_PROGRESS = 4,
    STATUS_ACQUISITION_CANCELLED = 5,
    STATUS_DATA_ERROR = 10,
    STATUS_TIMEDOUT = 11,
    STATUS_INTERNAL_ERROR = 12,
    STATUS_CANCEL_ACQUISITION_FAILED = 30,
    STATUS_REQUEST_ID_DOES_NOT_EXIST = 20,
    }

}

export class GetServiceInfoRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetServiceInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceInfoRequest): GetServiceInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceInfoRequest;
    static deserializeBinaryFromReader(message: GetServiceInfoRequest, reader: jspb.BinaryReader): GetServiceInfoRequest;
}

export namespace GetServiceInfoRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetServiceInfoResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetServiceInfoResponse;

    hasCapabilities(): boolean;
    clearCapabilities(): void;
    getCapabilities(): AcquisitionCapabilityList | undefined;
    setCapabilities(value?: AcquisitionCapabilityList): GetServiceInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceInfoResponse): GetServiceInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceInfoResponse;
    static deserializeBinaryFromReader(message: GetServiceInfoResponse, reader: jspb.BinaryReader): GetServiceInfoResponse;
}

export namespace GetServiceInfoResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        capabilities?: AcquisitionCapabilityList.AsObject,
    }
}

export class CancelAcquisitionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): CancelAcquisitionRequest;
    getRequestId(): number;
    setRequestId(value: number): CancelAcquisitionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelAcquisitionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelAcquisitionRequest): CancelAcquisitionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelAcquisitionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelAcquisitionRequest;
    static deserializeBinaryFromReader(message: CancelAcquisitionRequest, reader: jspb.BinaryReader): CancelAcquisitionRequest;
}

export namespace CancelAcquisitionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        requestId: number,
    }
}

export class CancelAcquisitionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): CancelAcquisitionResponse;
    getStatus(): CancelAcquisitionResponse.Status;
    setStatus(value: CancelAcquisitionResponse.Status): CancelAcquisitionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelAcquisitionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CancelAcquisitionResponse): CancelAcquisitionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelAcquisitionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelAcquisitionResponse;
    static deserializeBinaryFromReader(message: CancelAcquisitionResponse, reader: jspb.BinaryReader): CancelAcquisitionResponse;
}

export namespace CancelAcquisitionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: CancelAcquisitionResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_FAILED_TO_CANCEL = 2,
    STATUS_REQUEST_ID_DOES_NOT_EXIST = 3,
    }

}

export class LiveDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): LiveDataRequest;
    clearDataCapturesList(): void;
    getDataCapturesList(): Array<DataCapture>;
    setDataCapturesList(value: Array<DataCapture>): LiveDataRequest;
    addDataCaptures(value?: DataCapture, index?: number): DataCapture;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiveDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LiveDataRequest): LiveDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiveDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiveDataRequest;
    static deserializeBinaryFromReader(message: LiveDataRequest, reader: jspb.BinaryReader): LiveDataRequest;
}

export namespace LiveDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        dataCapturesList: Array<DataCapture.AsObject>,
    }
}

export class LiveDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): LiveDataResponse;
    clearLiveDataList(): void;
    getLiveDataList(): Array<LiveDataResponse.CapabilityLiveData>;
    setLiveDataList(value: Array<LiveDataResponse.CapabilityLiveData>): LiveDataResponse;
    addLiveData(value?: LiveDataResponse.CapabilityLiveData, index?: number): LiveDataResponse.CapabilityLiveData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiveDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LiveDataResponse): LiveDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiveDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiveDataResponse;
    static deserializeBinaryFromReader(message: LiveDataResponse, reader: jspb.BinaryReader): LiveDataResponse;
}

export namespace LiveDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        liveDataList: Array<LiveDataResponse.CapabilityLiveData.AsObject>,
    }


    export class CapabilityLiveData extends jspb.Message { 

        getSignalsMap(): jspb.Map<string, bosdyn_api_signals_pb.Signal>;
        clearSignalsMap(): void;
        getName(): string;
        setName(value: string): CapabilityLiveData;
        getStatus(): LiveDataResponse.CapabilityLiveData.Status;
        setStatus(value: LiveDataResponse.CapabilityLiveData.Status): CapabilityLiveData;

        hasCustomParamError(): boolean;
        clearCustomParamError(): void;
        getCustomParamError(): bosdyn_api_service_customization_pb.CustomParamError | undefined;
        setCustomParamError(value?: bosdyn_api_service_customization_pb.CustomParamError): CapabilityLiveData;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CapabilityLiveData.AsObject;
        static toObject(includeInstance: boolean, msg: CapabilityLiveData): CapabilityLiveData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CapabilityLiveData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CapabilityLiveData;
        static deserializeBinaryFromReader(message: CapabilityLiveData, reader: jspb.BinaryReader): CapabilityLiveData;
    }

    export namespace CapabilityLiveData {
        export type AsObject = {

            signalsMap: Array<[string, bosdyn_api_signals_pb.Signal.AsObject]>,
            name: string,
            status: LiveDataResponse.CapabilityLiveData.Status,
            customParamError?: bosdyn_api_service_customization_pb.CustomParamError.AsObject,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_CAPTURE_TYPE = 2,
    STATUS_CUSTOM_PARAMS_ERROR = 3,
    STATUS_INTERNAL_ERROR = 4,
        }

    }

}
