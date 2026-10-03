// package: bosdyn.api
// file: bosdyn/api/local_grid.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LocalGridType extends jspb.Message { 
    getName(): string;
    setName(value: string): LocalGridType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalGridType.AsObject;
    static toObject(includeInstance: boolean, msg: LocalGridType): LocalGridType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalGridType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalGridType;
    static deserializeBinaryFromReader(message: LocalGridType, reader: jspb.BinaryReader): LocalGridType;
}

export namespace LocalGridType {
    export type AsObject = {
        name: string,
    }
}

export class LocalGridRequest extends jspb.Message { 
    getLocalGridTypeName(): string;
    setLocalGridTypeName(value: string): LocalGridRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalGridRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LocalGridRequest): LocalGridRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalGridRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalGridRequest;
    static deserializeBinaryFromReader(message: LocalGridRequest, reader: jspb.BinaryReader): LocalGridRequest;
}

export namespace LocalGridRequest {
    export type AsObject = {
        localGridTypeName: string,
    }
}

export class LocalGridExtent extends jspb.Message { 
    getCellSize(): number;
    setCellSize(value: number): LocalGridExtent;
    getNumCellsX(): number;
    setNumCellsX(value: number): LocalGridExtent;
    getNumCellsY(): number;
    setNumCellsY(value: number): LocalGridExtent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalGridExtent.AsObject;
    static toObject(includeInstance: boolean, msg: LocalGridExtent): LocalGridExtent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalGridExtent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalGridExtent;
    static deserializeBinaryFromReader(message: LocalGridExtent, reader: jspb.BinaryReader): LocalGridExtent;
}

export namespace LocalGridExtent {
    export type AsObject = {
        cellSize: number,
        numCellsX: number,
        numCellsY: number,
    }
}

export class LocalGrid extends jspb.Message { 
    getLocalGridTypeName(): string;
    setLocalGridTypeName(value: string): LocalGrid;

    hasAcquisitionTime(): boolean;
    clearAcquisitionTime(): void;
    getAcquisitionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAcquisitionTime(value?: google_protobuf_timestamp_pb.Timestamp): LocalGrid;

    hasTransformsSnapshot(): boolean;
    clearTransformsSnapshot(): void;
    getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): LocalGrid;
    getFrameNameLocalGridData(): string;
    setFrameNameLocalGridData(value: string): LocalGrid;

    hasExtent(): boolean;
    clearExtent(): void;
    getExtent(): LocalGridExtent | undefined;
    setExtent(value?: LocalGridExtent): LocalGrid;
    getCellFormat(): LocalGrid.CellFormat;
    setCellFormat(value: LocalGrid.CellFormat): LocalGrid;
    getEncoding(): LocalGrid.Encoding;
    setEncoding(value: LocalGrid.Encoding): LocalGrid;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): LocalGrid;
    clearRleCountsList(): void;
    getRleCountsList(): Array<number>;
    setRleCountsList(value: Array<number>): LocalGrid;
    addRleCounts(value: number, index?: number): number;
    getCellValueScale(): number;
    setCellValueScale(value: number): LocalGrid;
    getCellValueOffset(): number;
    setCellValueOffset(value: number): LocalGrid;
    getUnknownCells(): Uint8Array | string;
    getUnknownCells_asU8(): Uint8Array;
    getUnknownCells_asB64(): string;
    setUnknownCells(value: Uint8Array | string): LocalGrid;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalGrid.AsObject;
    static toObject(includeInstance: boolean, msg: LocalGrid): LocalGrid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalGrid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalGrid;
    static deserializeBinaryFromReader(message: LocalGrid, reader: jspb.BinaryReader): LocalGrid;
}

export namespace LocalGrid {
    export type AsObject = {
        localGridTypeName: string,
        acquisitionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
        frameNameLocalGridData: string,
        extent?: LocalGridExtent.AsObject,
        cellFormat: LocalGrid.CellFormat,
        encoding: LocalGrid.Encoding,
        data: Uint8Array | string,
        rleCountsList: Array<number>,
        cellValueScale: number,
        cellValueOffset: number,
        unknownCells: Uint8Array | string,
    }

    export enum CellFormat {
    CELL_FORMAT_UNKNOWN = 0,
    CELL_FORMAT_FLOAT32 = 1,
    CELL_FORMAT_FLOAT64 = 2,
    CELL_FORMAT_INT8 = 3,
    CELL_FORMAT_UINT8 = 4,
    CELL_FORMAT_INT16 = 5,
    CELL_FORMAT_UINT16 = 6,
    }

    export enum Encoding {
    ENCODING_UNKNOWN = 0,
    ENCODING_RAW = 1,
    ENCODING_RLE = 2,
    }

}

export class LocalGridResponse extends jspb.Message { 
    getLocalGridTypeName(): string;
    setLocalGridTypeName(value: string): LocalGridResponse;
    getStatus(): LocalGridResponse.Status;
    setStatus(value: LocalGridResponse.Status): LocalGridResponse;

    hasLocalGrid(): boolean;
    clearLocalGrid(): void;
    getLocalGrid(): LocalGrid | undefined;
    setLocalGrid(value?: LocalGrid): LocalGridResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalGridResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LocalGridResponse): LocalGridResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalGridResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalGridResponse;
    static deserializeBinaryFromReader(message: LocalGridResponse, reader: jspb.BinaryReader): LocalGridResponse;
}

export namespace LocalGridResponse {
    export type AsObject = {
        localGridTypeName: string,
        status: LocalGridResponse.Status,
        localGrid?: LocalGrid.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_SUCH_GRID = 2,
    STATUS_DATA_UNAVAILABLE = 3,
    STATUS_DATA_INVALID = 4,
    }

}

export class GetLocalGridTypesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetLocalGridTypesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocalGridTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocalGridTypesRequest): GetLocalGridTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocalGridTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocalGridTypesRequest;
    static deserializeBinaryFromReader(message: GetLocalGridTypesRequest, reader: jspb.BinaryReader): GetLocalGridTypesRequest;
}

export namespace GetLocalGridTypesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetLocalGridTypesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetLocalGridTypesResponse;
    clearLocalGridTypeList(): void;
    getLocalGridTypeList(): Array<LocalGridType>;
    setLocalGridTypeList(value: Array<LocalGridType>): GetLocalGridTypesResponse;
    addLocalGridType(value?: LocalGridType, index?: number): LocalGridType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocalGridTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocalGridTypesResponse): GetLocalGridTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocalGridTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocalGridTypesResponse;
    static deserializeBinaryFromReader(message: GetLocalGridTypesResponse, reader: jspb.BinaryReader): GetLocalGridTypesResponse;
}

export namespace GetLocalGridTypesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        localGridTypeList: Array<LocalGridType.AsObject>,
    }
}

export class GetLocalGridsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetLocalGridsRequest;
    clearLocalGridRequestsList(): void;
    getLocalGridRequestsList(): Array<LocalGridRequest>;
    setLocalGridRequestsList(value: Array<LocalGridRequest>): GetLocalGridsRequest;
    addLocalGridRequests(value?: LocalGridRequest, index?: number): LocalGridRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocalGridsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocalGridsRequest): GetLocalGridsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocalGridsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocalGridsRequest;
    static deserializeBinaryFromReader(message: GetLocalGridsRequest, reader: jspb.BinaryReader): GetLocalGridsRequest;
}

export namespace GetLocalGridsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        localGridRequestsList: Array<LocalGridRequest.AsObject>,
    }
}

export class GetLocalGridsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetLocalGridsResponse;
    clearLocalGridResponsesList(): void;
    getLocalGridResponsesList(): Array<LocalGridResponse>;
    setLocalGridResponsesList(value: Array<LocalGridResponse>): GetLocalGridsResponse;
    addLocalGridResponses(value?: LocalGridResponse, index?: number): LocalGridResponse;
    getNumLocalGridErrors(): number;
    setNumLocalGridErrors(value: number): GetLocalGridsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocalGridsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocalGridsResponse): GetLocalGridsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocalGridsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocalGridsResponse;
    static deserializeBinaryFromReader(message: GetLocalGridsResponse, reader: jspb.BinaryReader): GetLocalGridsResponse;
}

export namespace GetLocalGridsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        localGridResponsesList: Array<LocalGridResponse.AsObject>,
        numLocalGridErrors: number,
    }
}
