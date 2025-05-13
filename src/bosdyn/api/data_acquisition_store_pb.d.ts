// package: bosdyn.api
// file: bosdyn/api/data_acquisition_store.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_data_chunk_pb from "../../bosdyn/api/data_chunk_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_image_pb from "../../bosdyn/api/image_pb";
import * as bosdyn_api_data_acquisition_pb from "../../bosdyn/api/data_acquisition_pb";

export class ActionIdQuery extends jspb.Message { 
    clearActionIdsList(): void;
    getActionIdsList(): Array<bosdyn_api_data_acquisition_pb.CaptureActionId>;
    setActionIdsList(value: Array<bosdyn_api_data_acquisition_pb.CaptureActionId>): ActionIdQuery;
    addActionIds(value?: bosdyn_api_data_acquisition_pb.CaptureActionId, index?: number): bosdyn_api_data_acquisition_pb.CaptureActionId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionIdQuery.AsObject;
    static toObject(includeInstance: boolean, msg: ActionIdQuery): ActionIdQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionIdQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionIdQuery;
    static deserializeBinaryFromReader(message: ActionIdQuery, reader: jspb.BinaryReader): ActionIdQuery;
}

export namespace ActionIdQuery {
    export type AsObject = {
        actionIdsList: Array<bosdyn_api_data_acquisition_pb.CaptureActionId.AsObject>,
    }
}

export class TimeRangeQuery extends jspb.Message { 

    hasFromTimestamp(): boolean;
    clearFromTimestamp(): void;
    getFromTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFromTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TimeRangeQuery;

    hasToTimestamp(): boolean;
    clearToTimestamp(): void;
    getToTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setToTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TimeRangeQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeRangeQuery.AsObject;
    static toObject(includeInstance: boolean, msg: TimeRangeQuery): TimeRangeQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeRangeQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeRangeQuery;
    static deserializeBinaryFromReader(message: TimeRangeQuery, reader: jspb.BinaryReader): TimeRangeQuery;
}

export namespace TimeRangeQuery {
    export type AsObject = {
        fromTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        toTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DataQueryParams extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): TimeRangeQuery | undefined;
    setTimeRange(value?: TimeRangeQuery): DataQueryParams;

    hasActionIds(): boolean;
    clearActionIds(): void;
    getActionIds(): ActionIdQuery | undefined;
    setActionIds(value?: ActionIdQuery): DataQueryParams;

    getQueryCase(): DataQueryParams.QueryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataQueryParams.AsObject;
    static toObject(includeInstance: boolean, msg: DataQueryParams): DataQueryParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataQueryParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataQueryParams;
    static deserializeBinaryFromReader(message: DataQueryParams, reader: jspb.BinaryReader): DataQueryParams;
}

export namespace DataQueryParams {
    export type AsObject = {
        timeRange?: TimeRangeQuery.AsObject,
        actionIds?: ActionIdQuery.AsObject,
    }

    export enum QueryCase {
        QUERY_NOT_SET = 0,
        TIME_RANGE = 1,
        ACTION_IDS = 2,
    }

}

export class QueryParameters extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): TimeRangeQuery | undefined;
    setTimeRange(value?: TimeRangeQuery): QueryParameters;
    clearActionIdsList(): void;
    getActionIdsList(): Array<bosdyn_api_data_acquisition_pb.CaptureActionId>;
    setActionIdsList(value: Array<bosdyn_api_data_acquisition_pb.CaptureActionId>): QueryParameters;
    addActionIds(value?: bosdyn_api_data_acquisition_pb.CaptureActionId, index?: number): bosdyn_api_data_acquisition_pb.CaptureActionId;
    clearChannelsList(): void;
    getChannelsList(): Array<string>;
    setChannelsList(value: Array<string>): QueryParameters;
    addChannels(value: string, index?: number): string;
    getCapturesFromId(): number;
    setCapturesFromId(value: number): QueryParameters;
    getOnlyIncludeIdentifiers(): boolean;
    setOnlyIncludeIdentifiers(value: boolean): QueryParameters;
    getIncludeImages(): boolean;
    setIncludeImages(value: boolean): QueryParameters;
    getIncludeData(): boolean;
    setIncludeData(value: boolean): QueryParameters;
    getIncludeMetadata(): boolean;
    setIncludeMetadata(value: boolean): QueryParameters;
    getIncludeAlerts(): boolean;
    setIncludeAlerts(value: boolean): QueryParameters;
    getIncludeLarge(): boolean;
    setIncludeLarge(value: boolean): QueryParameters;
    getOrderDescending(): boolean;
    setOrderDescending(value: boolean): QueryParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParameters.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParameters): QueryParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParameters;
    static deserializeBinaryFromReader(message: QueryParameters, reader: jspb.BinaryReader): QueryParameters;
}

export namespace QueryParameters {
    export type AsObject = {
        timeRange?: TimeRangeQuery.AsObject,
        actionIdsList: Array<bosdyn_api_data_acquisition_pb.CaptureActionId.AsObject>,
        channelsList: Array<string>,
        capturesFromId: number,
        onlyIncludeIdentifiers: boolean,
        includeImages: boolean,
        includeData: boolean,
        includeMetadata: boolean,
        includeAlerts: boolean,
        includeLarge: boolean,
        orderDescending: boolean,
    }
}

export class StoreImageRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StoreImageRequest;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): bosdyn_api_image_pb.ImageCapture | undefined;
    setImage(value?: bosdyn_api_image_pb.ImageCapture): StoreImageRequest;

    hasDataId(): boolean;
    clearDataId(): void;
    getDataId(): bosdyn_api_data_acquisition_pb.DataIdentifier | undefined;
    setDataId(value?: bosdyn_api_data_acquisition_pb.DataIdentifier): StoreImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StoreImageRequest): StoreImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreImageRequest;
    static deserializeBinaryFromReader(message: StoreImageRequest, reader: jspb.BinaryReader): StoreImageRequest;
}

export namespace StoreImageRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        image?: bosdyn_api_image_pb.ImageCapture.AsObject,
        dataId?: bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject,
    }
}

export class StoreImageResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StoreImageResponse;
    getId(): number;
    setId(value: number): StoreImageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreImageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StoreImageResponse): StoreImageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreImageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreImageResponse;
    static deserializeBinaryFromReader(message: StoreImageResponse, reader: jspb.BinaryReader): StoreImageResponse;
}

export namespace StoreImageResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        id: number,
    }
}

export class StoreMetadataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StoreMetadataRequest;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): bosdyn_api_data_acquisition_pb.AssociatedMetadata | undefined;
    setMetadata(value?: bosdyn_api_data_acquisition_pb.AssociatedMetadata): StoreMetadataRequest;

    hasDataId(): boolean;
    clearDataId(): void;
    getDataId(): bosdyn_api_data_acquisition_pb.DataIdentifier | undefined;
    setDataId(value?: bosdyn_api_data_acquisition_pb.DataIdentifier): StoreMetadataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StoreMetadataRequest): StoreMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreMetadataRequest;
    static deserializeBinaryFromReader(message: StoreMetadataRequest, reader: jspb.BinaryReader): StoreMetadataRequest;
}

export namespace StoreMetadataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        metadata?: bosdyn_api_data_acquisition_pb.AssociatedMetadata.AsObject,
        dataId?: bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject,
    }
}

export class StoreMetadataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StoreMetadataResponse;
    getId(): number;
    setId(value: number): StoreMetadataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StoreMetadataResponse): StoreMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreMetadataResponse;
    static deserializeBinaryFromReader(message: StoreMetadataResponse, reader: jspb.BinaryReader): StoreMetadataResponse;
}

export namespace StoreMetadataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        id: number,
    }
}

export class StoreAlertDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StoreAlertDataRequest;

    hasAlertData(): boolean;
    clearAlertData(): void;
    getAlertData(): bosdyn_api_data_acquisition_pb.AssociatedAlertData | undefined;
    setAlertData(value?: bosdyn_api_data_acquisition_pb.AssociatedAlertData): StoreAlertDataRequest;

    hasDataId(): boolean;
    clearDataId(): void;
    getDataId(): bosdyn_api_data_acquisition_pb.DataIdentifier | undefined;
    setDataId(value?: bosdyn_api_data_acquisition_pb.DataIdentifier): StoreAlertDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreAlertDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StoreAlertDataRequest): StoreAlertDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreAlertDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreAlertDataRequest;
    static deserializeBinaryFromReader(message: StoreAlertDataRequest, reader: jspb.BinaryReader): StoreAlertDataRequest;
}

export namespace StoreAlertDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        alertData?: bosdyn_api_data_acquisition_pb.AssociatedAlertData.AsObject,
        dataId?: bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject,
    }
}

export class StoreAlertDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StoreAlertDataResponse;
    getId(): number;
    setId(value: number): StoreAlertDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreAlertDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StoreAlertDataResponse): StoreAlertDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreAlertDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreAlertDataResponse;
    static deserializeBinaryFromReader(message: StoreAlertDataResponse, reader: jspb.BinaryReader): StoreAlertDataResponse;
}

export namespace StoreAlertDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        id: number,
    }
}

export class StoreDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StoreDataRequest;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): StoreDataRequest;

    hasDataId(): boolean;
    clearDataId(): void;
    getDataId(): bosdyn_api_data_acquisition_pb.DataIdentifier | undefined;
    setDataId(value?: bosdyn_api_data_acquisition_pb.DataIdentifier): StoreDataRequest;
    getFileExtension(): string;
    setFileExtension(value: string): StoreDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StoreDataRequest): StoreDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreDataRequest;
    static deserializeBinaryFromReader(message: StoreDataRequest, reader: jspb.BinaryReader): StoreDataRequest;
}

export namespace StoreDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        data: Uint8Array | string,
        dataId?: bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject,
        fileExtension: string,
    }
}

export class StoreDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StoreDataResponse;
    getId(): number;
    setId(value: number): StoreDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StoreDataResponse): StoreDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreDataResponse;
    static deserializeBinaryFromReader(message: StoreDataResponse, reader: jspb.BinaryReader): StoreDataResponse;
}

export namespace StoreDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        id: number,
    }
}

export class StoreStreamRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StoreStreamRequest;

    hasDataId(): boolean;
    clearDataId(): void;
    getDataId(): bosdyn_api_data_acquisition_pb.DataIdentifier | undefined;
    setDataId(value?: bosdyn_api_data_acquisition_pb.DataIdentifier): StoreStreamRequest;
    getFileExtension(): string;
    setFileExtension(value: string): StoreStreamRequest;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): StoreStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StoreStreamRequest): StoreStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreStreamRequest;
    static deserializeBinaryFromReader(message: StoreStreamRequest, reader: jspb.BinaryReader): StoreStreamRequest;
}

export namespace StoreStreamRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        dataId?: bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject,
        fileExtension: string,
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }
}

export class StoreStreamResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StoreStreamResponse;
    getId(): number;
    setId(value: number): StoreStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StoreStreamResponse): StoreStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreStreamResponse;
    static deserializeBinaryFromReader(message: StoreStreamResponse, reader: jspb.BinaryReader): StoreStreamResponse;
}

export namespace StoreStreamResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        id: number,
    }
}

export class ListCaptureActionsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListCaptureActionsRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): DataQueryParams | undefined;
    setQuery(value?: DataQueryParams): ListCaptureActionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCaptureActionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCaptureActionsRequest): ListCaptureActionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCaptureActionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCaptureActionsRequest;
    static deserializeBinaryFromReader(message: ListCaptureActionsRequest, reader: jspb.BinaryReader): ListCaptureActionsRequest;
}

export namespace ListCaptureActionsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        query?: DataQueryParams.AsObject,
    }
}

export class ListCaptureActionsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListCaptureActionsResponse;
    clearActionIdsList(): void;
    getActionIdsList(): Array<bosdyn_api_data_acquisition_pb.CaptureActionId>;
    setActionIdsList(value: Array<bosdyn_api_data_acquisition_pb.CaptureActionId>): ListCaptureActionsResponse;
    addActionIds(value?: bosdyn_api_data_acquisition_pb.CaptureActionId, index?: number): bosdyn_api_data_acquisition_pb.CaptureActionId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCaptureActionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCaptureActionsResponse): ListCaptureActionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCaptureActionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCaptureActionsResponse;
    static deserializeBinaryFromReader(message: ListCaptureActionsResponse, reader: jspb.BinaryReader): ListCaptureActionsResponse;
}

export namespace ListCaptureActionsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        actionIdsList: Array<bosdyn_api_data_acquisition_pb.CaptureActionId.AsObject>,
    }
}

export class ListStoredImagesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListStoredImagesRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): DataQueryParams | undefined;
    setQuery(value?: DataQueryParams): ListStoredImagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStoredImagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStoredImagesRequest): ListStoredImagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStoredImagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStoredImagesRequest;
    static deserializeBinaryFromReader(message: ListStoredImagesRequest, reader: jspb.BinaryReader): ListStoredImagesRequest;
}

export namespace ListStoredImagesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        query?: DataQueryParams.AsObject,
    }
}

export class ListStoredImagesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListStoredImagesResponse;
    clearDataIdsList(): void;
    getDataIdsList(): Array<bosdyn_api_data_acquisition_pb.DataIdentifier>;
    setDataIdsList(value: Array<bosdyn_api_data_acquisition_pb.DataIdentifier>): ListStoredImagesResponse;
    addDataIds(value?: bosdyn_api_data_acquisition_pb.DataIdentifier, index?: number): bosdyn_api_data_acquisition_pb.DataIdentifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStoredImagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListStoredImagesResponse): ListStoredImagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStoredImagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStoredImagesResponse;
    static deserializeBinaryFromReader(message: ListStoredImagesResponse, reader: jspb.BinaryReader): ListStoredImagesResponse;
}

export namespace ListStoredImagesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        dataIdsList: Array<bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject>,
    }
}

export class ListStoredMetadataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListStoredMetadataRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): DataQueryParams | undefined;
    setQuery(value?: DataQueryParams): ListStoredMetadataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStoredMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStoredMetadataRequest): ListStoredMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStoredMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStoredMetadataRequest;
    static deserializeBinaryFromReader(message: ListStoredMetadataRequest, reader: jspb.BinaryReader): ListStoredMetadataRequest;
}

export namespace ListStoredMetadataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        query?: DataQueryParams.AsObject,
    }
}

export class ListStoredMetadataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListStoredMetadataResponse;
    clearDataIdsList(): void;
    getDataIdsList(): Array<bosdyn_api_data_acquisition_pb.DataIdentifier>;
    setDataIdsList(value: Array<bosdyn_api_data_acquisition_pb.DataIdentifier>): ListStoredMetadataResponse;
    addDataIds(value?: bosdyn_api_data_acquisition_pb.DataIdentifier, index?: number): bosdyn_api_data_acquisition_pb.DataIdentifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStoredMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListStoredMetadataResponse): ListStoredMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStoredMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStoredMetadataResponse;
    static deserializeBinaryFromReader(message: ListStoredMetadataResponse, reader: jspb.BinaryReader): ListStoredMetadataResponse;
}

export namespace ListStoredMetadataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        dataIdsList: Array<bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject>,
    }
}

export class ListStoredAlertDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListStoredAlertDataRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): DataQueryParams | undefined;
    setQuery(value?: DataQueryParams): ListStoredAlertDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStoredAlertDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStoredAlertDataRequest): ListStoredAlertDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStoredAlertDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStoredAlertDataRequest;
    static deserializeBinaryFromReader(message: ListStoredAlertDataRequest, reader: jspb.BinaryReader): ListStoredAlertDataRequest;
}

export namespace ListStoredAlertDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        query?: DataQueryParams.AsObject,
    }
}

export class ListStoredAlertDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListStoredAlertDataResponse;
    clearDataIdsList(): void;
    getDataIdsList(): Array<bosdyn_api_data_acquisition_pb.DataIdentifier>;
    setDataIdsList(value: Array<bosdyn_api_data_acquisition_pb.DataIdentifier>): ListStoredAlertDataResponse;
    addDataIds(value?: bosdyn_api_data_acquisition_pb.DataIdentifier, index?: number): bosdyn_api_data_acquisition_pb.DataIdentifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStoredAlertDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListStoredAlertDataResponse): ListStoredAlertDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStoredAlertDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStoredAlertDataResponse;
    static deserializeBinaryFromReader(message: ListStoredAlertDataResponse, reader: jspb.BinaryReader): ListStoredAlertDataResponse;
}

export namespace ListStoredAlertDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        dataIdsList: Array<bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject>,
    }
}

export class ListStoredDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListStoredDataRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): DataQueryParams | undefined;
    setQuery(value?: DataQueryParams): ListStoredDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStoredDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStoredDataRequest): ListStoredDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStoredDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStoredDataRequest;
    static deserializeBinaryFromReader(message: ListStoredDataRequest, reader: jspb.BinaryReader): ListStoredDataRequest;
}

export namespace ListStoredDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        query?: DataQueryParams.AsObject,
    }
}

export class ListStoredDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListStoredDataResponse;
    clearDataIdsList(): void;
    getDataIdsList(): Array<bosdyn_api_data_acquisition_pb.DataIdentifier>;
    setDataIdsList(value: Array<bosdyn_api_data_acquisition_pb.DataIdentifier>): ListStoredDataResponse;
    addDataIds(value?: bosdyn_api_data_acquisition_pb.DataIdentifier, index?: number): bosdyn_api_data_acquisition_pb.DataIdentifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStoredDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListStoredDataResponse): ListStoredDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStoredDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStoredDataResponse;
    static deserializeBinaryFromReader(message: ListStoredDataResponse, reader: jspb.BinaryReader): ListStoredDataResponse;
}

export namespace ListStoredDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        dataIdsList: Array<bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject>,
    }
}

export class QueryStoredCapturesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): QueryStoredCapturesRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): QueryParameters | undefined;
    setQuery(value?: QueryParameters): QueryStoredCapturesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryStoredCapturesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryStoredCapturesRequest): QueryStoredCapturesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryStoredCapturesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryStoredCapturesRequest;
    static deserializeBinaryFromReader(message: QueryStoredCapturesRequest, reader: jspb.BinaryReader): QueryStoredCapturesRequest;
}

export namespace QueryStoredCapturesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        query?: QueryParameters.AsObject,
    }
}

export class StoredCapturedData extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): StoredCapturedData;
    getFileExtension(): string;
    setFileExtension(value: string): StoredCapturedData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoredCapturedData.AsObject;
    static toObject(includeInstance: boolean, msg: StoredCapturedData): StoredCapturedData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoredCapturedData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoredCapturedData;
    static deserializeBinaryFromReader(message: StoredCapturedData, reader: jspb.BinaryReader): StoredCapturedData;
}

export namespace StoredCapturedData {
    export type AsObject = {
        data: Uint8Array | string,
        fileExtension: string,
    }
}

export class StoredLargeCapturedData extends jspb.Message { 

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): StoredLargeCapturedData;
    getOffset(): number;
    setOffset(value: number): StoredLargeCapturedData;
    getFileExtension(): string;
    setFileExtension(value: string): StoredLargeCapturedData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoredLargeCapturedData.AsObject;
    static toObject(includeInstance: boolean, msg: StoredLargeCapturedData): StoredLargeCapturedData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoredLargeCapturedData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoredLargeCapturedData;
    static deserializeBinaryFromReader(message: StoredLargeCapturedData, reader: jspb.BinaryReader): StoredLargeCapturedData;
}

export namespace StoredLargeCapturedData {
    export type AsObject = {
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
        offset: number,
        fileExtension: string,
    }
}

export class QueryStoredCaptureResult extends jspb.Message { 

    hasDataId(): boolean;
    clearDataId(): void;
    getDataId(): bosdyn_api_data_acquisition_pb.DataIdentifier | undefined;
    setDataId(value?: bosdyn_api_data_acquisition_pb.DataIdentifier): QueryStoredCaptureResult;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): bosdyn_api_image_pb.ImageCapture | undefined;
    setImage(value?: bosdyn_api_image_pb.ImageCapture): QueryStoredCaptureResult;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): bosdyn_api_data_acquisition_pb.AssociatedMetadata | undefined;
    setMetadata(value?: bosdyn_api_data_acquisition_pb.AssociatedMetadata): QueryStoredCaptureResult;

    hasAlertData(): boolean;
    clearAlertData(): void;
    getAlertData(): bosdyn_api_data_acquisition_pb.AssociatedAlertData | undefined;
    setAlertData(value?: bosdyn_api_data_acquisition_pb.AssociatedAlertData): QueryStoredCaptureResult;

    hasData(): boolean;
    clearData(): void;
    getData(): StoredCapturedData | undefined;
    setData(value?: StoredCapturedData): QueryStoredCaptureResult;

    hasLargeData(): boolean;
    clearLargeData(): void;
    getLargeData(): StoredLargeCapturedData | undefined;
    setLargeData(value?: StoredLargeCapturedData): QueryStoredCaptureResult;

    getResultCase(): QueryStoredCaptureResult.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryStoredCaptureResult.AsObject;
    static toObject(includeInstance: boolean, msg: QueryStoredCaptureResult): QueryStoredCaptureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryStoredCaptureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryStoredCaptureResult;
    static deserializeBinaryFromReader(message: QueryStoredCaptureResult, reader: jspb.BinaryReader): QueryStoredCaptureResult;
}

export namespace QueryStoredCaptureResult {
    export type AsObject = {
        dataId?: bosdyn_api_data_acquisition_pb.DataIdentifier.AsObject,
        image?: bosdyn_api_image_pb.ImageCapture.AsObject,
        metadata?: bosdyn_api_data_acquisition_pb.AssociatedMetadata.AsObject,
        alertData?: bosdyn_api_data_acquisition_pb.AssociatedAlertData.AsObject,
        data?: StoredCapturedData.AsObject,
        largeData?: StoredLargeCapturedData.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        IMAGE = 3,
        METADATA = 4,
        ALERT_DATA = 5,
        DATA = 6,
        LARGE_DATA = 7,
    }

}

export class QueryStoredCapturesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): QueryStoredCapturesResponse;
    clearActionIdsList(): void;
    getActionIdsList(): Array<bosdyn_api_data_acquisition_pb.CaptureActionId>;
    setActionIdsList(value: Array<bosdyn_api_data_acquisition_pb.CaptureActionId>): QueryStoredCapturesResponse;
    addActionIds(value?: bosdyn_api_data_acquisition_pb.CaptureActionId, index?: number): bosdyn_api_data_acquisition_pb.CaptureActionId;
    clearResultsList(): void;
    getResultsList(): Array<QueryStoredCaptureResult>;
    setResultsList(value: Array<QueryStoredCaptureResult>): QueryStoredCapturesResponse;
    addResults(value?: QueryStoredCaptureResult, index?: number): QueryStoredCaptureResult;
    getMaxCaptureId(): number;
    setMaxCaptureId(value: number): QueryStoredCapturesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryStoredCapturesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryStoredCapturesResponse): QueryStoredCapturesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryStoredCapturesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryStoredCapturesResponse;
    static deserializeBinaryFromReader(message: QueryStoredCapturesResponse, reader: jspb.BinaryReader): QueryStoredCapturesResponse;
}

export namespace QueryStoredCapturesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        actionIdsList: Array<bosdyn_api_data_acquisition_pb.CaptureActionId.AsObject>,
        resultsList: Array<QueryStoredCaptureResult.AsObject>,
        maxCaptureId: number,
    }
}

export class QueryMaxCaptureIdRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): QueryMaxCaptureIdRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): QueryParameters | undefined;
    setQuery(value?: QueryParameters): QueryMaxCaptureIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryMaxCaptureIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryMaxCaptureIdRequest): QueryMaxCaptureIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryMaxCaptureIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryMaxCaptureIdRequest;
    static deserializeBinaryFromReader(message: QueryMaxCaptureIdRequest, reader: jspb.BinaryReader): QueryMaxCaptureIdRequest;
}

export namespace QueryMaxCaptureIdRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        query?: QueryParameters.AsObject,
    }
}

export class QueryMaxCaptureIdResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): QueryMaxCaptureIdResponse;
    getMaxCaptureId(): number;
    setMaxCaptureId(value: number): QueryMaxCaptureIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryMaxCaptureIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryMaxCaptureIdResponse): QueryMaxCaptureIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryMaxCaptureIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryMaxCaptureIdResponse;
    static deserializeBinaryFromReader(message: QueryMaxCaptureIdResponse, reader: jspb.BinaryReader): QueryMaxCaptureIdResponse;
}

export namespace QueryMaxCaptureIdResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        maxCaptureId: number,
    }
}
