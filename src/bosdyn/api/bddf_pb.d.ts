// package: bosdyn.api
// file: bosdyn/api/bddf.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DescriptorBlock extends jspb.Message { 

    hasFileDescriptor(): boolean;
    clearFileDescriptor(): void;
    getFileDescriptor(): FileFormatDescriptor | undefined;
    setFileDescriptor(value?: FileFormatDescriptor): DescriptorBlock;

    hasSeriesDescriptor(): boolean;
    clearSeriesDescriptor(): void;
    getSeriesDescriptor(): SeriesDescriptor | undefined;
    setSeriesDescriptor(value?: SeriesDescriptor): DescriptorBlock;

    hasSeriesBlockIndex(): boolean;
    clearSeriesBlockIndex(): void;
    getSeriesBlockIndex(): SeriesBlockIndex | undefined;
    setSeriesBlockIndex(value?: SeriesBlockIndex): DescriptorBlock;

    hasFileIndex(): boolean;
    clearFileIndex(): void;
    getFileIndex(): FileIndex | undefined;
    setFileIndex(value?: FileIndex): DescriptorBlock;

    getDescriptortypeCase(): DescriptorBlock.DescriptortypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DescriptorBlock.AsObject;
    static toObject(includeInstance: boolean, msg: DescriptorBlock): DescriptorBlock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DescriptorBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DescriptorBlock;
    static deserializeBinaryFromReader(message: DescriptorBlock, reader: jspb.BinaryReader): DescriptorBlock;
}

export namespace DescriptorBlock {
    export type AsObject = {
        fileDescriptor?: FileFormatDescriptor.AsObject,
        seriesDescriptor?: SeriesDescriptor.AsObject,
        seriesBlockIndex?: SeriesBlockIndex.AsObject,
        fileIndex?: FileIndex.AsObject,
    }

    export enum DescriptortypeCase {
        DESCRIPTORTYPE_NOT_SET = 0,
        FILE_DESCRIPTOR = 1,
        SERIES_DESCRIPTOR = 2,
        SERIES_BLOCK_INDEX = 3,
        FILE_INDEX = 4,
    }

}

export class DataDescriptor extends jspb.Message { 
    getSeriesIndex(): number;
    setSeriesIndex(value: number): DataDescriptor;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): DataDescriptor;
    clearAdditionalIndexesList(): void;
    getAdditionalIndexesList(): Array<number>;
    setAdditionalIndexesList(value: Array<number>): DataDescriptor;
    addAdditionalIndexes(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: DataDescriptor): DataDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataDescriptor;
    static deserializeBinaryFromReader(message: DataDescriptor, reader: jspb.BinaryReader): DataDescriptor;
}

export namespace DataDescriptor {
    export type AsObject = {
        seriesIndex: number,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        additionalIndexesList: Array<number>,
    }
}

export class FileFormatDescriptor extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): FileFormatVersion | undefined;
    setVersion(value?: FileFormatVersion): FileFormatDescriptor;

    getAnnotationsMap(): jspb.Map<string, string>;
    clearAnnotationsMap(): void;
    getChecksumType(): FileFormatDescriptor.CheckSumType;
    setChecksumType(value: FileFormatDescriptor.CheckSumType): FileFormatDescriptor;
    getChecksumNumBytes(): number;
    setChecksumNumBytes(value: number): FileFormatDescriptor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileFormatDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: FileFormatDescriptor): FileFormatDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileFormatDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileFormatDescriptor;
    static deserializeBinaryFromReader(message: FileFormatDescriptor, reader: jspb.BinaryReader): FileFormatDescriptor;
}

export namespace FileFormatDescriptor {
    export type AsObject = {
        version?: FileFormatVersion.AsObject,

        annotationsMap: Array<[string, string]>,
        checksumType: FileFormatDescriptor.CheckSumType,
        checksumNumBytes: number,
    }

    export enum CheckSumType {
    CHECKSUM_TYPE_UNKNOWN = 0,
    CHECKSUM_TYPE_NONE = 1,
    CHECKSUM_TYPE_SHA1 = 2,
    }

}

export class FileFormatVersion extends jspb.Message { 
    getMajorVersion(): number;
    setMajorVersion(value: number): FileFormatVersion;
    getMinorVersion(): number;
    setMinorVersion(value: number): FileFormatVersion;
    getPatchLevel(): number;
    setPatchLevel(value: number): FileFormatVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileFormatVersion.AsObject;
    static toObject(includeInstance: boolean, msg: FileFormatVersion): FileFormatVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileFormatVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileFormatVersion;
    static deserializeBinaryFromReader(message: FileFormatVersion, reader: jspb.BinaryReader): FileFormatVersion;
}

export namespace FileFormatVersion {
    export type AsObject = {
        majorVersion: number,
        minorVersion: number,
        patchLevel: number,
    }
}

export class SeriesDescriptor extends jspb.Message { 
    getSeriesIndex(): number;
    setSeriesIndex(value: number): SeriesDescriptor;

    hasSeriesIdentifier(): boolean;
    clearSeriesIdentifier(): void;
    getSeriesIdentifier(): SeriesIdentifier | undefined;
    setSeriesIdentifier(value?: SeriesIdentifier): SeriesDescriptor;
    getIdentifierHash(): number;
    setIdentifierHash(value: number): SeriesDescriptor;

    hasMessageType(): boolean;
    clearMessageType(): void;
    getMessageType(): MessageTypeDescriptor | undefined;
    setMessageType(value?: MessageTypeDescriptor): SeriesDescriptor;

    hasPodType(): boolean;
    clearPodType(): void;
    getPodType(): PodTypeDescriptor | undefined;
    setPodType(value?: PodTypeDescriptor): SeriesDescriptor;

    hasStructType(): boolean;
    clearStructType(): void;
    getStructType(): StructTypeDescriptor | undefined;
    setStructType(value?: StructTypeDescriptor): SeriesDescriptor;

    getAnnotationsMap(): jspb.Map<string, string>;
    clearAnnotationsMap(): void;
    clearAdditionalIndexNamesList(): void;
    getAdditionalIndexNamesList(): Array<string>;
    setAdditionalIndexNamesList(value: Array<string>): SeriesDescriptor;
    addAdditionalIndexNames(value: string, index?: number): string;
    getDescription(): string;
    setDescription(value: string): SeriesDescriptor;

    getDatatypeCase(): SeriesDescriptor.DatatypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeriesDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: SeriesDescriptor): SeriesDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SeriesDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeriesDescriptor;
    static deserializeBinaryFromReader(message: SeriesDescriptor, reader: jspb.BinaryReader): SeriesDescriptor;
}

export namespace SeriesDescriptor {
    export type AsObject = {
        seriesIndex: number,
        seriesIdentifier?: SeriesIdentifier.AsObject,
        identifierHash: number,
        messageType?: MessageTypeDescriptor.AsObject,
        podType?: PodTypeDescriptor.AsObject,
        structType?: StructTypeDescriptor.AsObject,

        annotationsMap: Array<[string, string]>,
        additionalIndexNamesList: Array<string>,
        description: string,
    }

    export enum DatatypeCase {
        DATATYPE_NOT_SET = 0,
        MESSAGE_TYPE = 4,
        POD_TYPE = 5,
        STRUCT_TYPE = 6,
    }

}

export class MessageTypeDescriptor extends jspb.Message { 
    getContentType(): string;
    setContentType(value: string): MessageTypeDescriptor;
    getTypeName(): string;
    setTypeName(value: string): MessageTypeDescriptor;
    getIsMetadata(): boolean;
    setIsMetadata(value: boolean): MessageTypeDescriptor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageTypeDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: MessageTypeDescriptor): MessageTypeDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageTypeDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageTypeDescriptor;
    static deserializeBinaryFromReader(message: MessageTypeDescriptor, reader: jspb.BinaryReader): MessageTypeDescriptor;
}

export namespace MessageTypeDescriptor {
    export type AsObject = {
        contentType: string,
        typeName: string,
        isMetadata: boolean,
    }
}

export class PodTypeDescriptor extends jspb.Message { 
    getPodType(): PodTypeEnum;
    setPodType(value: PodTypeEnum): PodTypeDescriptor;
    clearDimensionList(): void;
    getDimensionList(): Array<number>;
    setDimensionList(value: Array<number>): PodTypeDescriptor;
    addDimension(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PodTypeDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: PodTypeDescriptor): PodTypeDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PodTypeDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PodTypeDescriptor;
    static deserializeBinaryFromReader(message: PodTypeDescriptor, reader: jspb.BinaryReader): PodTypeDescriptor;
}

export namespace PodTypeDescriptor {
    export type AsObject = {
        podType: PodTypeEnum,
        dimensionList: Array<number>,
    }
}

export class StructTypeDescriptor extends jspb.Message { 

    getKeyToSeriesIdentifierHashMap(): jspb.Map<string, number>;
    clearKeyToSeriesIdentifierHashMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructTypeDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: StructTypeDescriptor): StructTypeDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructTypeDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructTypeDescriptor;
    static deserializeBinaryFromReader(message: StructTypeDescriptor, reader: jspb.BinaryReader): StructTypeDescriptor;
}

export namespace StructTypeDescriptor {
    export type AsObject = {

        keyToSeriesIdentifierHashMap: Array<[string, number]>,
    }
}

export class FileIndex extends jspb.Message { 
    clearSeriesIdentifiersList(): void;
    getSeriesIdentifiersList(): Array<SeriesIdentifier>;
    setSeriesIdentifiersList(value: Array<SeriesIdentifier>): FileIndex;
    addSeriesIdentifiers(value?: SeriesIdentifier, index?: number): SeriesIdentifier;
    clearSeriesBlockIndexOffsetsList(): void;
    getSeriesBlockIndexOffsetsList(): Array<number>;
    setSeriesBlockIndexOffsetsList(value: Array<number>): FileIndex;
    addSeriesBlockIndexOffsets(value: number, index?: number): number;
    clearSeriesIdentifierHashesList(): void;
    getSeriesIdentifierHashesList(): Array<number>;
    setSeriesIdentifierHashesList(value: Array<number>): FileIndex;
    addSeriesIdentifierHashes(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileIndex.AsObject;
    static toObject(includeInstance: boolean, msg: FileIndex): FileIndex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileIndex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileIndex;
    static deserializeBinaryFromReader(message: FileIndex, reader: jspb.BinaryReader): FileIndex;
}

export namespace FileIndex {
    export type AsObject = {
        seriesIdentifiersList: Array<SeriesIdentifier.AsObject>,
        seriesBlockIndexOffsetsList: Array<number>,
        seriesIdentifierHashesList: Array<number>,
    }
}

export class SeriesBlockIndex extends jspb.Message { 
    getSeriesIndex(): number;
    setSeriesIndex(value: number): SeriesBlockIndex;
    getDescriptorFileOffset(): number;
    setDescriptorFileOffset(value: number): SeriesBlockIndex;
    clearBlockEntriesList(): void;
    getBlockEntriesList(): Array<SeriesBlockIndex.BlockEntry>;
    setBlockEntriesList(value: Array<SeriesBlockIndex.BlockEntry>): SeriesBlockIndex;
    addBlockEntries(value?: SeriesBlockIndex.BlockEntry, index?: number): SeriesBlockIndex.BlockEntry;
    getTotalBytes(): number;
    setTotalBytes(value: number): SeriesBlockIndex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeriesBlockIndex.AsObject;
    static toObject(includeInstance: boolean, msg: SeriesBlockIndex): SeriesBlockIndex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SeriesBlockIndex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeriesBlockIndex;
    static deserializeBinaryFromReader(message: SeriesBlockIndex, reader: jspb.BinaryReader): SeriesBlockIndex;
}

export namespace SeriesBlockIndex {
    export type AsObject = {
        seriesIndex: number,
        descriptorFileOffset: number,
        blockEntriesList: Array<SeriesBlockIndex.BlockEntry.AsObject>,
        totalBytes: number,
    }


    export class BlockEntry extends jspb.Message { 

        hasTimestamp(): boolean;
        clearTimestamp(): void;
        getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): BlockEntry;
        getFileOffset(): number;
        setFileOffset(value: number): BlockEntry;
        clearAdditionalIndexesList(): void;
        getAdditionalIndexesList(): Array<number>;
        setAdditionalIndexesList(value: Array<number>): BlockEntry;
        addAdditionalIndexes(value: number, index?: number): number;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BlockEntry.AsObject;
        static toObject(includeInstance: boolean, msg: BlockEntry): BlockEntry.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BlockEntry, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BlockEntry;
        static deserializeBinaryFromReader(message: BlockEntry, reader: jspb.BinaryReader): BlockEntry;
    }

    export namespace BlockEntry {
        export type AsObject = {
            timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            fileOffset: number,
            additionalIndexesList: Array<number>,
        }
    }

}

export class SeriesIdentifier extends jspb.Message { 
    getSeriesType(): string;
    setSeriesType(value: string): SeriesIdentifier;

    getSpecMap(): jspb.Map<string, string>;
    clearSpecMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeriesIdentifier.AsObject;
    static toObject(includeInstance: boolean, msg: SeriesIdentifier): SeriesIdentifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SeriesIdentifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeriesIdentifier;
    static deserializeBinaryFromReader(message: SeriesIdentifier, reader: jspb.BinaryReader): SeriesIdentifier;
}

export namespace SeriesIdentifier {
    export type AsObject = {
        seriesType: string,

        specMap: Array<[string, string]>,
    }
}

export enum PodTypeEnum {
    TYPE_UNSPECIFIED = 0,
    TYPE_INT8 = 1,
    TYPE_INT16 = 2,
    TYPE_INT32 = 3,
    TYPE_INT64 = 4,
    TYPE_UINT8 = 5,
    TYPE_UINT16 = 6,
    TYPE_UINT32 = 7,
    TYPE_UINT64 = 8,
    TYPE_FLOAT32 = 9,
    TYPE_FLOAT64 = 10,
}
