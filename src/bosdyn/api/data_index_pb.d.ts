// package: bosdyn.api
// file: bosdyn/api/data_index.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_data_buffer_pb from "../../bosdyn/api/data_buffer_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_time_range_pb from "../../bosdyn/api/time_range_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GrpcSpec extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): GrpcSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcSpec.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcSpec): GrpcSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcSpec;
    static deserializeBinaryFromReader(message: GrpcSpec, reader: jspb.BinaryReader): GrpcSpec;
}

export namespace GrpcSpec {
    export type AsObject = {
        serviceName: string,
    }
}

export class BlobSpec extends jspb.Message { 
    getSource(): string;
    setSource(value: string): BlobSpec;
    getMessageType(): string;
    setMessageType(value: string): BlobSpec;
    getChannel(): string;
    setChannel(value: string): BlobSpec;
    getChannelGlob(): string;
    setChannelGlob(value: string): BlobSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlobSpec.AsObject;
    static toObject(includeInstance: boolean, msg: BlobSpec): BlobSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlobSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlobSpec;
    static deserializeBinaryFromReader(message: BlobSpec, reader: jspb.BinaryReader): BlobSpec;
}

export namespace BlobSpec {
    export type AsObject = {
        source: string,
        messageType: string,
        channel: string,
        channelGlob: string,
    }
}

export class EventSpec extends jspb.Message { 
    getSource(): string;
    setSource(value: string): EventSpec;
    getType(): string;
    setType(value: string): EventSpec;

    hasLevel(): boolean;
    clearLevel(): void;
    getLevel(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLevel(value?: google_protobuf_wrappers_pb.Int32Value): EventSpec;
    getLogPreserveHint(): bosdyn_api_data_buffer_pb.Event.LogPreserveHint;
    setLogPreserveHint(value: bosdyn_api_data_buffer_pb.Event.LogPreserveHint): EventSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventSpec.AsObject;
    static toObject(includeInstance: boolean, msg: EventSpec): EventSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventSpec;
    static deserializeBinaryFromReader(message: EventSpec, reader: jspb.BinaryReader): EventSpec;
}

export namespace EventSpec {
    export type AsObject = {
        source: string,
        type: string,
        level?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        logPreserveHint: bosdyn_api_data_buffer_pb.Event.LogPreserveHint,
    }
}

export class PageInfo extends jspb.Message { 
    getId(): string;
    setId(value: string): PageInfo;
    getPath(): string;
    setPath(value: string): PageInfo;
    getSource(): string;
    setSource(value: string): PageInfo;

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): PageInfo;
    getNumTicks(): number;
    setNumTicks(value: number): PageInfo;
    getTotalBytes(): number;
    setTotalBytes(value: number): PageInfo;
    getFormat(): PageInfo.PageFormat;
    setFormat(value: PageInfo.PageFormat): PageInfo;
    getCompression(): PageInfo.Compression;
    setCompression(value: PageInfo.Compression): PageInfo;
    getIsOpen(): boolean;
    setIsOpen(value: boolean): PageInfo;
    getIsDownloaded(): boolean;
    setIsDownloaded(value: boolean): PageInfo;

    hasDeletedTimestamp(): boolean;
    clearDeletedTimestamp(): void;
    getDeletedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): PageInfo;

    hasDownloadStartedTimestamp(): boolean;
    clearDownloadStartedTimestamp(): void;
    getDownloadStartedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDownloadStartedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): PageInfo;
    getRequestPreserve(): boolean;
    setRequestPreserve(value: boolean): PageInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PageInfo): PageInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageInfo;
    static deserializeBinaryFromReader(message: PageInfo, reader: jspb.BinaryReader): PageInfo;
}

export namespace PageInfo {
    export type AsObject = {
        id: string,
        path: string,
        source: string,
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        numTicks: number,
        totalBytes: number,
        format: PageInfo.PageFormat,
        compression: PageInfo.Compression,
        isOpen: boolean,
        isDownloaded: boolean,
        deletedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        downloadStartedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        requestPreserve: boolean,
    }

    export enum PageFormat {
    FORMAT_UNKNOWN = 0,
    FORMAT_BDDF_FILE = 1,
    }

    export enum Compression {
    COMPRESSION_UNKNOWN = 0,
    COMPRESSION_NONE = 1,
    COMPRESSION_GZIP = 2,
    COMPRESSION_ZSTD = 3,
    }

}

export class GrpcPages extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): GrpcPages;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): GrpcSpec | undefined;
    setSpec(value?: GrpcSpec): GrpcPages;
    clearPagesList(): void;
    getPagesList(): Array<PageInfo>;
    setPagesList(value: Array<PageInfo>): GrpcPages;
    addPages(value?: PageInfo, index?: number): PageInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcPages.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcPages): GrpcPages.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcPages, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcPages;
    static deserializeBinaryFromReader(message: GrpcPages, reader: jspb.BinaryReader): GrpcPages;
}

export namespace GrpcPages {
    export type AsObject = {
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        spec?: GrpcSpec.AsObject,
        pagesList: Array<PageInfo.AsObject>,
    }
}

export class BlobPage extends jspb.Message { 

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): BlobSpec | undefined;
    setSpec(value?: BlobSpec): BlobPage;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): PageInfo | undefined;
    setPage(value?: PageInfo): BlobPage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlobPage.AsObject;
    static toObject(includeInstance: boolean, msg: BlobPage): BlobPage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlobPage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlobPage;
    static deserializeBinaryFromReader(message: BlobPage, reader: jspb.BinaryReader): BlobPage;
}

export namespace BlobPage {
    export type AsObject = {
        spec?: BlobSpec.AsObject,
        page?: PageInfo.AsObject,
    }
}

export class BlobPages extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): BlobPages;
    clearPagesList(): void;
    getPagesList(): Array<BlobPage>;
    setPagesList(value: Array<BlobPage>): BlobPages;
    addPages(value?: BlobPage, index?: number): BlobPage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlobPages.AsObject;
    static toObject(includeInstance: boolean, msg: BlobPages): BlobPages.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlobPages, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlobPages;
    static deserializeBinaryFromReader(message: BlobPages, reader: jspb.BinaryReader): BlobPages;
}

export namespace BlobPages {
    export type AsObject = {
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        pagesList: Array<BlobPage.AsObject>,
    }
}

export class PagesAndTimestamp extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): PagesAndTimestamp;
    clearPagesList(): void;
    getPagesList(): Array<PageInfo>;
    setPagesList(value: Array<PageInfo>): PagesAndTimestamp;
    addPages(value?: PageInfo, index?: number): PageInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PagesAndTimestamp.AsObject;
    static toObject(includeInstance: boolean, msg: PagesAndTimestamp): PagesAndTimestamp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PagesAndTimestamp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PagesAndTimestamp;
    static deserializeBinaryFromReader(message: PagesAndTimestamp, reader: jspb.BinaryReader): PagesAndTimestamp;
}

export namespace PagesAndTimestamp {
    export type AsObject = {
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        pagesList: Array<PageInfo.AsObject>,
    }
}

export class DataQuery extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): DataQuery;
    clearBlobsList(): void;
    getBlobsList(): Array<BlobSpec>;
    setBlobsList(value: Array<BlobSpec>): DataQuery;
    addBlobs(value?: BlobSpec, index?: number): BlobSpec;
    getTextMessages(): boolean;
    setTextMessages(value: boolean): DataQuery;
    getEvents(): boolean;
    setEvents(value: boolean): DataQuery;
    getComments(): boolean;
    setComments(value: boolean): DataQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataQuery.AsObject;
    static toObject(includeInstance: boolean, msg: DataQuery): DataQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataQuery;
    static deserializeBinaryFromReader(message: DataQuery, reader: jspb.BinaryReader): DataQuery;
}

export namespace DataQuery {
    export type AsObject = {
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        blobsList: Array<BlobSpec.AsObject>,
        textMessages: boolean,
        events: boolean,
        comments: boolean,
    }
}

export class DataIndex extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): DataIndex;
    clearBlobsList(): void;
    getBlobsList(): Array<BlobPages>;
    setBlobsList(value: Array<BlobPages>): DataIndex;
    addBlobs(value?: BlobPages, index?: number): BlobPages;

    hasTextMessages(): boolean;
    clearTextMessages(): void;
    getTextMessages(): PagesAndTimestamp | undefined;
    setTextMessages(value?: PagesAndTimestamp): DataIndex;

    hasEvents(): boolean;
    clearEvents(): void;
    getEvents(): PagesAndTimestamp | undefined;
    setEvents(value?: PagesAndTimestamp): DataIndex;

    hasComments(): boolean;
    clearComments(): void;
    getComments(): PagesAndTimestamp | undefined;
    setComments(value?: PagesAndTimestamp): DataIndex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataIndex.AsObject;
    static toObject(includeInstance: boolean, msg: DataIndex): DataIndex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataIndex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataIndex;
    static deserializeBinaryFromReader(message: DataIndex, reader: jspb.BinaryReader): DataIndex;
}

export namespace DataIndex {
    export type AsObject = {
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        blobsList: Array<BlobPages.AsObject>,
        textMessages?: PagesAndTimestamp.AsObject,
        events?: PagesAndTimestamp.AsObject,
        comments?: PagesAndTimestamp.AsObject,
    }
}

export class EventsCommentsSpec extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): EventsCommentsSpec;
    clearEventsList(): void;
    getEventsList(): Array<EventSpec>;
    setEventsList(value: Array<EventSpec>): EventsCommentsSpec;
    addEvents(value?: EventSpec, index?: number): EventSpec;
    getComments(): boolean;
    setComments(value: boolean): EventsCommentsSpec;
    getMaxEvents(): number;
    setMaxEvents(value: number): EventsCommentsSpec;
    getMaxComments(): number;
    setMaxComments(value: number): EventsCommentsSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventsCommentsSpec.AsObject;
    static toObject(includeInstance: boolean, msg: EventsCommentsSpec): EventsCommentsSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventsCommentsSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventsCommentsSpec;
    static deserializeBinaryFromReader(message: EventsCommentsSpec, reader: jspb.BinaryReader): EventsCommentsSpec;
}

export namespace EventsCommentsSpec {
    export type AsObject = {
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        eventsList: Array<EventSpec.AsObject>,
        comments: boolean,
        maxEvents: number,
        maxComments: number,
    }
}

export class EventsComments extends jspb.Message { 

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): EventsComments;
    clearEventsList(): void;
    getEventsList(): Array<bosdyn_api_data_buffer_pb.Event>;
    setEventsList(value: Array<bosdyn_api_data_buffer_pb.Event>): EventsComments;
    addEvents(value?: bosdyn_api_data_buffer_pb.Event, index?: number): bosdyn_api_data_buffer_pb.Event;
    clearOperatorCommentsList(): void;
    getOperatorCommentsList(): Array<bosdyn_api_data_buffer_pb.OperatorComment>;
    setOperatorCommentsList(value: Array<bosdyn_api_data_buffer_pb.OperatorComment>): EventsComments;
    addOperatorComments(value?: bosdyn_api_data_buffer_pb.OperatorComment, index?: number): bosdyn_api_data_buffer_pb.OperatorComment;
    getEventsLimited(): boolean;
    setEventsLimited(value: boolean): EventsComments;
    getOperatorCommentsLimited(): boolean;
    setOperatorCommentsLimited(value: boolean): EventsComments;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventsComments.AsObject;
    static toObject(includeInstance: boolean, msg: EventsComments): EventsComments.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventsComments, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventsComments;
    static deserializeBinaryFromReader(message: EventsComments, reader: jspb.BinaryReader): EventsComments;
}

export namespace EventsComments {
    export type AsObject = {
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        eventsList: Array<bosdyn_api_data_buffer_pb.Event.AsObject>,
        operatorCommentsList: Array<bosdyn_api_data_buffer_pb.OperatorComment.AsObject>,
        eventsLimited: boolean,
        operatorCommentsLimited: boolean,
    }
}

export class DataBufferStatus extends jspb.Message { 
    getNumDataBufferPages(): number;
    setNumDataBufferPages(value: number): DataBufferStatus;
    getDataBufferTotalBytes(): number;
    setDataBufferTotalBytes(value: number): DataBufferStatus;
    getNumComments(): number;
    setNumComments(value: number): DataBufferStatus;
    getNumEvents(): number;
    setNumEvents(value: number): DataBufferStatus;
    clearBlobSpecsList(): void;
    getBlobSpecsList(): Array<BlobSpec>;
    setBlobSpecsList(value: Array<BlobSpec>): DataBufferStatus;
    addBlobSpecs(value?: BlobSpec, index?: number): BlobSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataBufferStatus.AsObject;
    static toObject(includeInstance: boolean, msg: DataBufferStatus): DataBufferStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataBufferStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataBufferStatus;
    static deserializeBinaryFromReader(message: DataBufferStatus, reader: jspb.BinaryReader): DataBufferStatus;
}

export namespace DataBufferStatus {
    export type AsObject = {
        numDataBufferPages: number,
        dataBufferTotalBytes: number,
        numComments: number,
        numEvents: number,
        blobSpecsList: Array<BlobSpec.AsObject>,
    }
}

export class GetDataIndexResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetDataIndexResponse;

    hasDataIndex(): boolean;
    clearDataIndex(): void;
    getDataIndex(): DataIndex | undefined;
    setDataIndex(value?: DataIndex): GetDataIndexResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDataIndexResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDataIndexResponse): GetDataIndexResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDataIndexResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDataIndexResponse;
    static deserializeBinaryFromReader(message: GetDataIndexResponse, reader: jspb.BinaryReader): GetDataIndexResponse;
}

export namespace GetDataIndexResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        dataIndex?: DataIndex.AsObject,
    }
}

export class GetDataIndexRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetDataIndexRequest;

    hasDataQuery(): boolean;
    clearDataQuery(): void;
    getDataQuery(): DataQuery | undefined;
    setDataQuery(value?: DataQuery): GetDataIndexRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDataIndexRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDataIndexRequest): GetDataIndexRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDataIndexRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDataIndexRequest;
    static deserializeBinaryFromReader(message: GetDataIndexRequest, reader: jspb.BinaryReader): GetDataIndexRequest;
}

export namespace GetDataIndexRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        dataQuery?: DataQuery.AsObject,
    }
}

export class GetEventsCommentsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetEventsCommentsRequest;

    hasEventCommentRequest(): boolean;
    clearEventCommentRequest(): void;
    getEventCommentRequest(): EventsCommentsSpec | undefined;
    setEventCommentRequest(value?: EventsCommentsSpec): GetEventsCommentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventsCommentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventsCommentsRequest): GetEventsCommentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventsCommentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventsCommentsRequest;
    static deserializeBinaryFromReader(message: GetEventsCommentsRequest, reader: jspb.BinaryReader): GetEventsCommentsRequest;
}

export namespace GetEventsCommentsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        eventCommentRequest?: EventsCommentsSpec.AsObject,
    }
}

export class GetEventsCommentsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetEventsCommentsResponse;

    hasEventsComments(): boolean;
    clearEventsComments(): void;
    getEventsComments(): EventsComments | undefined;
    setEventsComments(value?: EventsComments): GetEventsCommentsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventsCommentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventsCommentsResponse): GetEventsCommentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventsCommentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventsCommentsResponse;
    static deserializeBinaryFromReader(message: GetEventsCommentsResponse, reader: jspb.BinaryReader): GetEventsCommentsResponse;
}

export namespace GetEventsCommentsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        eventsComments?: EventsComments.AsObject,
    }
}

export class GetDataBufferStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetDataBufferStatusRequest;
    getGetBlobSpecs(): boolean;
    setGetBlobSpecs(value: boolean): GetDataBufferStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDataBufferStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDataBufferStatusRequest): GetDataBufferStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDataBufferStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDataBufferStatusRequest;
    static deserializeBinaryFromReader(message: GetDataBufferStatusRequest, reader: jspb.BinaryReader): GetDataBufferStatusRequest;
}

export namespace GetDataBufferStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        getBlobSpecs: boolean,
    }
}

export class GetDataBufferStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetDataBufferStatusResponse;

    hasDataBufferStatus(): boolean;
    clearDataBufferStatus(): void;
    getDataBufferStatus(): DataBufferStatus | undefined;
    setDataBufferStatus(value?: DataBufferStatus): GetDataBufferStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDataBufferStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDataBufferStatusResponse): GetDataBufferStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDataBufferStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDataBufferStatusResponse;
    static deserializeBinaryFromReader(message: GetDataBufferStatusResponse, reader: jspb.BinaryReader): GetDataBufferStatusResponse;
}

export namespace GetDataBufferStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        dataBufferStatus?: DataBufferStatus.AsObject,
    }
}

export class GetDataPagesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetDataPagesRequest;

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): GetDataPagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDataPagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDataPagesRequest): GetDataPagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDataPagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDataPagesRequest;
    static deserializeBinaryFromReader(message: GetDataPagesRequest, reader: jspb.BinaryReader): GetDataPagesRequest;
}

export namespace GetDataPagesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
    }
}

export class GetDataPagesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetDataPagesResponse;
    clearPagesList(): void;
    getPagesList(): Array<PageInfo>;
    setPagesList(value: Array<PageInfo>): GetDataPagesResponse;
    addPages(value?: PageInfo, index?: number): PageInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDataPagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDataPagesResponse): GetDataPagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDataPagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDataPagesResponse;
    static deserializeBinaryFromReader(message: GetDataPagesResponse, reader: jspb.BinaryReader): GetDataPagesResponse;
}

export namespace GetDataPagesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        pagesList: Array<PageInfo.AsObject>,
    }
}

export class DeleteDataPagesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DeleteDataPagesRequest;

    hasTimeRange(): boolean;
    clearTimeRange(): void;
    getTimeRange(): bosdyn_api_time_range_pb.TimeRange | undefined;
    setTimeRange(value?: bosdyn_api_time_range_pb.TimeRange): DeleteDataPagesRequest;
    clearPageIdsList(): void;
    getPageIdsList(): Array<string>;
    setPageIdsList(value: Array<string>): DeleteDataPagesRequest;
    addPageIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDataPagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDataPagesRequest): DeleteDataPagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDataPagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDataPagesRequest;
    static deserializeBinaryFromReader(message: DeleteDataPagesRequest, reader: jspb.BinaryReader): DeleteDataPagesRequest;
}

export namespace DeleteDataPagesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        timeRange?: bosdyn_api_time_range_pb.TimeRange.AsObject,
        pageIdsList: Array<string>,
    }
}

export class DeletePageStatus extends jspb.Message { 
    getPageId(): string;
    setPageId(value: string): DeletePageStatus;
    getStatus(): DeletePageStatus.Status;
    setStatus(value: DeletePageStatus.Status): DeletePageStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePageStatus.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePageStatus): DeletePageStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePageStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePageStatus;
    static deserializeBinaryFromReader(message: DeletePageStatus, reader: jspb.BinaryReader): DeletePageStatus;
}

export namespace DeletePageStatus {
    export type AsObject = {
        pageId: string,
        status: DeletePageStatus.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_DELETED = 1,
    STATUS_DELETION_FAILED = 2,
    STATUS_NOT_FOUND = 3,
    }

}

export class DeleteDataPagesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DeleteDataPagesResponse;
    getBytesDeleted(): number;
    setBytesDeleted(value: number): DeleteDataPagesResponse;
    clearStatusList(): void;
    getStatusList(): Array<DeletePageStatus>;
    setStatusList(value: Array<DeletePageStatus>): DeleteDataPagesResponse;
    addStatus(value?: DeletePageStatus, index?: number): DeletePageStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDataPagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDataPagesResponse): DeleteDataPagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDataPagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDataPagesResponse;
    static deserializeBinaryFromReader(message: DeleteDataPagesResponse, reader: jspb.BinaryReader): DeleteDataPagesResponse;
}

export namespace DeleteDataPagesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        bytesDeleted: number,
        statusList: Array<DeletePageStatus.AsObject>,
    }
}
