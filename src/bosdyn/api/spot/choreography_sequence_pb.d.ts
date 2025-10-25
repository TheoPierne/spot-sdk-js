// package: bosdyn.api.spot
// file: bosdyn/api/spot/choreography_sequence.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as bosdyn_api_spot_choreography_params_pb from "../../../bosdyn/api/spot/choreography_params_pb";
import * as bosdyn_api_data_chunk_pb from "../../../bosdyn/api/data_chunk_pb";

export class ListAllMovesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListAllMovesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAllMovesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAllMovesRequest): ListAllMovesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAllMovesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAllMovesRequest;
    static deserializeBinaryFromReader(message: ListAllMovesRequest, reader: jspb.BinaryReader): ListAllMovesRequest;
}

export namespace ListAllMovesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListAllMovesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListAllMovesResponse;
    clearMovesList(): void;
    getMovesList(): Array<MoveInfo>;
    setMovesList(value: Array<MoveInfo>): ListAllMovesResponse;
    addMoves(value?: MoveInfo, index?: number): MoveInfo;
    getMoveParamConfig(): string;
    setMoveParamConfig(value: string): ListAllMovesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAllMovesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAllMovesResponse): ListAllMovesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAllMovesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAllMovesResponse;
    static deserializeBinaryFromReader(message: ListAllMovesResponse, reader: jspb.BinaryReader): ListAllMovesResponse;
}

export namespace ListAllMovesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        movesList: Array<MoveInfo.AsObject>,
        moveParamConfig: string,
    }
}

export class ListAllSequencesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListAllSequencesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAllSequencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAllSequencesRequest): ListAllSequencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAllSequencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAllSequencesRequest;
    static deserializeBinaryFromReader(message: ListAllSequencesRequest, reader: jspb.BinaryReader): ListAllSequencesRequest;
}

export namespace ListAllSequencesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListAllSequencesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListAllSequencesResponse;
    clearKnownSequencesList(): void;
    getKnownSequencesList(): Array<string>;
    setKnownSequencesList(value: Array<string>): ListAllSequencesResponse;
    addKnownSequences(value: string, index?: number): string;
    clearSequenceInfoList(): void;
    getSequenceInfoList(): Array<SequenceInfo>;
    setSequenceInfoList(value: Array<SequenceInfo>): ListAllSequencesResponse;
    addSequenceInfo(value?: SequenceInfo, index?: number): SequenceInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAllSequencesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAllSequencesResponse): ListAllSequencesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAllSequencesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAllSequencesResponse;
    static deserializeBinaryFromReader(message: ListAllSequencesResponse, reader: jspb.BinaryReader): ListAllSequencesResponse;
}

export namespace ListAllSequencesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        knownSequencesList: Array<string>,
        sequenceInfoList: Array<SequenceInfo.AsObject>,
    }
}

export class SequenceInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): SequenceInfo;
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): SequenceInfo;
    addLabels(value: string, index?: number): string;
    getSavedState(): SequenceInfo.SavedState;
    setSavedState(value: SequenceInfo.SavedState): SequenceInfo;
    getExitState(): MoveInfo.TransitionState;
    setExitState(value: MoveInfo.TransitionState): SequenceInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SequenceInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SequenceInfo): SequenceInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SequenceInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SequenceInfo;
    static deserializeBinaryFromReader(message: SequenceInfo, reader: jspb.BinaryReader): SequenceInfo;
}

export namespace SequenceInfo {
    export type AsObject = {
        name: string,
        labelsList: Array<string>,
        savedState: SequenceInfo.SavedState,
        exitState: MoveInfo.TransitionState,
    }

    export enum SavedState {
    SAVED_STATE_UNKNOWN = 0,
    SAVED_STATE_TEMPORARY = 1,
    SAVED_STATE_RETAINED = 2,
    SAVED_STATE_PERMANENT = 3,
    }

}

export class GetChoreographySequenceRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetChoreographySequenceRequest;
    getSequenceName(): string;
    setSequenceName(value: string): GetChoreographySequenceRequest;
    getReturnAnimationNamesOnly(): boolean;
    setReturnAnimationNamesOnly(value: boolean): GetChoreographySequenceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChoreographySequenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetChoreographySequenceRequest): GetChoreographySequenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChoreographySequenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChoreographySequenceRequest;
    static deserializeBinaryFromReader(message: GetChoreographySequenceRequest, reader: jspb.BinaryReader): GetChoreographySequenceRequest;
}

export namespace GetChoreographySequenceRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sequenceName: string,
        returnAnimationNamesOnly: boolean,
    }
}

export class GetChoreographySequenceResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetChoreographySequenceResponse;
    getStatus(): GetChoreographySequenceResponse.Status;
    setStatus(value: GetChoreographySequenceResponse.Status): GetChoreographySequenceResponse;

    hasChoreographySequence(): boolean;
    clearChoreographySequence(): void;
    getChoreographySequence(): ChoreographySequence | undefined;
    setChoreographySequence(value?: ChoreographySequence): GetChoreographySequenceResponse;
    clearAnimatedMovesList(): void;
    getAnimatedMovesList(): Array<Animation>;
    setAnimatedMovesList(value: Array<Animation>): GetChoreographySequenceResponse;
    addAnimatedMoves(value?: Animation, index?: number): Animation;
    clearAnimationNamesList(): void;
    getAnimationNamesList(): Array<string>;
    setAnimationNamesList(value: Array<string>): GetChoreographySequenceResponse;
    addAnimationNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChoreographySequenceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetChoreographySequenceResponse): GetChoreographySequenceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChoreographySequenceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChoreographySequenceResponse;
    static deserializeBinaryFromReader(message: GetChoreographySequenceResponse, reader: jspb.BinaryReader): GetChoreographySequenceResponse;
}

export namespace GetChoreographySequenceResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: GetChoreographySequenceResponse.Status,
        choreographySequence?: ChoreographySequence.AsObject,
        animatedMovesList: Array<Animation.AsObject>,
        animationNamesList: Array<string>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_SEQUENCE = 2,
    }

}

export class GetAnimationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetAnimationRequest;
    getName(): string;
    setName(value: string): GetAnimationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAnimationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAnimationRequest): GetAnimationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAnimationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAnimationRequest;
    static deserializeBinaryFromReader(message: GetAnimationRequest, reader: jspb.BinaryReader): GetAnimationRequest;
}

export namespace GetAnimationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        name: string,
    }
}

export class GetAnimationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetAnimationResponse;
    getStatus(): GetAnimationResponse.Status;
    setStatus(value: GetAnimationResponse.Status): GetAnimationResponse;

    hasAnimatedMove(): boolean;
    clearAnimatedMove(): void;
    getAnimatedMove(): Animation | undefined;
    setAnimatedMove(value?: Animation): GetAnimationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAnimationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAnimationResponse): GetAnimationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAnimationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAnimationResponse;
    static deserializeBinaryFromReader(message: GetAnimationResponse, reader: jspb.BinaryReader): GetAnimationResponse;
}

export namespace GetAnimationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: GetAnimationResponse.Status,
        animatedMove?: Animation.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_ANIMATION = 2,
    }

}

export class DeleteSequenceRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DeleteSequenceRequest;
    getSequenceName(): string;
    setSequenceName(value: string): DeleteSequenceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSequenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSequenceRequest): DeleteSequenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSequenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSequenceRequest;
    static deserializeBinaryFromReader(message: DeleteSequenceRequest, reader: jspb.BinaryReader): DeleteSequenceRequest;
}

export namespace DeleteSequenceRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sequenceName: string,
    }
}

export class DeleteSequenceResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DeleteSequenceResponse;
    getStatus(): DeleteSequenceResponse.Status;
    setStatus(value: DeleteSequenceResponse.Status): DeleteSequenceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSequenceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSequenceResponse): DeleteSequenceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSequenceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSequenceResponse;
    static deserializeBinaryFromReader(message: DeleteSequenceResponse, reader: jspb.BinaryReader): DeleteSequenceResponse;
}

export namespace DeleteSequenceResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: DeleteSequenceResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_SEQUENCE = 2,
    STATUS_ALREADY_TEMPORARY = 3,
    STATUS_PERMANENT_SEQUENCE = 4,
    }

}

export class SaveSequenceRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SaveSequenceRequest;
    getSequenceName(): string;
    setSequenceName(value: string): SaveSequenceRequest;
    clearAddLabelsList(): void;
    getAddLabelsList(): Array<string>;
    setAddLabelsList(value: Array<string>): SaveSequenceRequest;
    addAddLabels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveSequenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SaveSequenceRequest): SaveSequenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveSequenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveSequenceRequest;
    static deserializeBinaryFromReader(message: SaveSequenceRequest, reader: jspb.BinaryReader): SaveSequenceRequest;
}

export namespace SaveSequenceRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sequenceName: string,
        addLabelsList: Array<string>,
    }
}

export class SaveSequenceResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SaveSequenceResponse;
    getStatus(): SaveSequenceResponse.Status;
    setStatus(value: SaveSequenceResponse.Status): SaveSequenceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveSequenceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SaveSequenceResponse): SaveSequenceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveSequenceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveSequenceResponse;
    static deserializeBinaryFromReader(message: SaveSequenceResponse, reader: jspb.BinaryReader): SaveSequenceResponse;
}

export namespace SaveSequenceResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: SaveSequenceResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_SEQUENCE = 2,
    STATUS_PERMANENT_SEQUENCE = 3,
    STATUS_FAILED_TO_SAVE = 4,
    }

}

export class ModifyChoreographyInfoRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ModifyChoreographyInfoRequest;
    getSequenceName(): string;
    setSequenceName(value: string): ModifyChoreographyInfoRequest;
    clearAddLabelsList(): void;
    getAddLabelsList(): Array<string>;
    setAddLabelsList(value: Array<string>): ModifyChoreographyInfoRequest;
    addAddLabels(value: string, index?: number): string;
    clearRemoveLabelsList(): void;
    getRemoveLabelsList(): Array<string>;
    setRemoveLabelsList(value: Array<string>): ModifyChoreographyInfoRequest;
    addRemoveLabels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyChoreographyInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyChoreographyInfoRequest): ModifyChoreographyInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyChoreographyInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyChoreographyInfoRequest;
    static deserializeBinaryFromReader(message: ModifyChoreographyInfoRequest, reader: jspb.BinaryReader): ModifyChoreographyInfoRequest;
}

export namespace ModifyChoreographyInfoRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sequenceName: string,
        addLabelsList: Array<string>,
        removeLabelsList: Array<string>,
    }
}

export class ModifyChoreographyInfoResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ModifyChoreographyInfoResponse;
    getStatus(): ModifyChoreographyInfoResponse.Status;
    setStatus(value: ModifyChoreographyInfoResponse.Status): ModifyChoreographyInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyChoreographyInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyChoreographyInfoResponse): ModifyChoreographyInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyChoreographyInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyChoreographyInfoResponse;
    static deserializeBinaryFromReader(message: ModifyChoreographyInfoResponse, reader: jspb.BinaryReader): ModifyChoreographyInfoResponse;
}

export namespace ModifyChoreographyInfoResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ModifyChoreographyInfoResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_SEQUENCE = 2,
    STATUS_PERMANENT_SEQUENCE = 3,
    STATUS_FAILED_TO_UPDATE = 4,
    }

}

export class ClearAllSequenceFilesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ClearAllSequenceFilesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearAllSequenceFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClearAllSequenceFilesRequest): ClearAllSequenceFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearAllSequenceFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearAllSequenceFilesRequest;
    static deserializeBinaryFromReader(message: ClearAllSequenceFilesRequest, reader: jspb.BinaryReader): ClearAllSequenceFilesRequest;
}

export namespace ClearAllSequenceFilesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ClearAllSequenceFilesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ClearAllSequenceFilesResponse;
    getStatus(): ClearAllSequenceFilesResponse.Status;
    setStatus(value: ClearAllSequenceFilesResponse.Status): ClearAllSequenceFilesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearAllSequenceFilesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClearAllSequenceFilesResponse): ClearAllSequenceFilesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearAllSequenceFilesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearAllSequenceFilesResponse;
    static deserializeBinaryFromReader(message: ClearAllSequenceFilesResponse, reader: jspb.BinaryReader): ClearAllSequenceFilesResponse;
}

export namespace ClearAllSequenceFilesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ClearAllSequenceFilesResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_FAILED_TO_DELETE = 2,
    }

}

export class UploadChoreographyRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UploadChoreographyRequest;

    hasChoreographySequence(): boolean;
    clearChoreographySequence(): void;
    getChoreographySequence(): ChoreographySequence | undefined;
    setChoreographySequence(value?: ChoreographySequence): UploadChoreographyRequest;
    getNonStrictParsing(): boolean;
    setNonStrictParsing(value: boolean): UploadChoreographyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadChoreographyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadChoreographyRequest): UploadChoreographyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadChoreographyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadChoreographyRequest;
    static deserializeBinaryFromReader(message: UploadChoreographyRequest, reader: jspb.BinaryReader): UploadChoreographyRequest;
}

export namespace UploadChoreographyRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        choreographySequence?: ChoreographySequence.AsObject,
        nonStrictParsing: boolean,
    }
}

export class UploadChoreographyResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UploadChoreographyResponse;
    clearWarningsList(): void;
    getWarningsList(): Array<string>;
    setWarningsList(value: Array<string>): UploadChoreographyResponse;
    addWarnings(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadChoreographyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadChoreographyResponse): UploadChoreographyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadChoreographyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadChoreographyResponse;
    static deserializeBinaryFromReader(message: UploadChoreographyResponse, reader: jspb.BinaryReader): UploadChoreographyResponse;
}

export namespace UploadChoreographyResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        warningsList: Array<string>,
    }
}

export class UploadAnimatedMoveRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UploadAnimatedMoveRequest;

    hasAnimatedMoveGeneratedId(): boolean;
    clearAnimatedMoveGeneratedId(): void;
    getAnimatedMoveGeneratedId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAnimatedMoveGeneratedId(value?: google_protobuf_wrappers_pb.StringValue): UploadAnimatedMoveRequest;

    hasAnimatedMove(): boolean;
    clearAnimatedMove(): void;
    getAnimatedMove(): Animation | undefined;
    setAnimatedMove(value?: Animation): UploadAnimatedMoveRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadAnimatedMoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadAnimatedMoveRequest): UploadAnimatedMoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadAnimatedMoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadAnimatedMoveRequest;
    static deserializeBinaryFromReader(message: UploadAnimatedMoveRequest, reader: jspb.BinaryReader): UploadAnimatedMoveRequest;
}

export namespace UploadAnimatedMoveRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        animatedMoveGeneratedId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        animatedMove?: Animation.AsObject,
    }
}

export class UploadAnimatedMoveResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UploadAnimatedMoveResponse;
    getStatus(): UploadAnimatedMoveResponse.Status;
    setStatus(value: UploadAnimatedMoveResponse.Status): UploadAnimatedMoveResponse;
    clearWarningsList(): void;
    getWarningsList(): Array<string>;
    setWarningsList(value: Array<string>): UploadAnimatedMoveResponse;
    addWarnings(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadAnimatedMoveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadAnimatedMoveResponse): UploadAnimatedMoveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadAnimatedMoveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadAnimatedMoveResponse;
    static deserializeBinaryFromReader(message: UploadAnimatedMoveResponse, reader: jspb.BinaryReader): UploadAnimatedMoveResponse;
}

export namespace UploadAnimatedMoveResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: UploadAnimatedMoveResponse.Status,
        warningsList: Array<string>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ANIMATION_VALIDATION_FAILED = 2,
    STATUS_PING_RESPONSE = 3,
    }

}

export class ExecuteChoreographyRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ExecuteChoreographyRequest;
    getChoreographySequenceName(): string;
    setChoreographySequenceName(value: string): ExecuteChoreographyRequest;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ExecuteChoreographyRequest;
    getChoreographyStartingSlice(): number;
    setChoreographyStartingSlice(value: number): ExecuteChoreographyRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): ExecuteChoreographyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteChoreographyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteChoreographyRequest): ExecuteChoreographyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteChoreographyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteChoreographyRequest;
    static deserializeBinaryFromReader(message: ExecuteChoreographyRequest, reader: jspb.BinaryReader): ExecuteChoreographyRequest;
}

export namespace ExecuteChoreographyRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        choreographySequenceName: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        choreographyStartingSlice: number,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class ExecuteChoreographyResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ExecuteChoreographyResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): ExecuteChoreographyResponse;
    getStatus(): ExecuteChoreographyResponse.Status;
    setStatus(value: ExecuteChoreographyResponse.Status): ExecuteChoreographyResponse;
    getExecutionId(): number;
    setExecutionId(value: number): ExecuteChoreographyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteChoreographyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteChoreographyResponse): ExecuteChoreographyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteChoreographyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteChoreographyResponse;
    static deserializeBinaryFromReader(message: ExecuteChoreographyResponse, reader: jspb.BinaryReader): ExecuteChoreographyResponse;
}

export namespace ExecuteChoreographyResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: ExecuteChoreographyResponse.Status,
        executionId: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_UPLOADED_CHOREOGRAPHY = 2,
    STATUS_ROBOT_COMMAND_ISSUES = 3,
    STATUS_LEASE_ERROR = 4,
    STATUS_UNKNOWN_SEQUENCE = 5,
    }

}

export class StartRecordingStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StartRecordingStateRequest;

    hasContinueRecordingDuration(): boolean;
    clearContinueRecordingDuration(): void;
    getContinueRecordingDuration(): google_protobuf_duration_pb.Duration | undefined;
    setContinueRecordingDuration(value?: google_protobuf_duration_pb.Duration): StartRecordingStateRequest;
    getRecordingSessionId(): number;
    setRecordingSessionId(value: number): StartRecordingStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartRecordingStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartRecordingStateRequest): StartRecordingStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartRecordingStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartRecordingStateRequest;
    static deserializeBinaryFromReader(message: StartRecordingStateRequest, reader: jspb.BinaryReader): StartRecordingStateRequest;
}

export namespace StartRecordingStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        continueRecordingDuration?: google_protobuf_duration_pb.Duration.AsObject,
        recordingSessionId: number,
    }
}

export class StartRecordingStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StartRecordingStateResponse;
    getStatus(): StartRecordingStateResponse.Status;
    setStatus(value: StartRecordingStateResponse.Status): StartRecordingStateResponse;
    getRecordingSessionId(): number;
    setRecordingSessionId(value: number): StartRecordingStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartRecordingStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartRecordingStateResponse): StartRecordingStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartRecordingStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartRecordingStateResponse;
    static deserializeBinaryFromReader(message: StartRecordingStateResponse, reader: jspb.BinaryReader): StartRecordingStateResponse;
}

export namespace StartRecordingStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: StartRecordingStateResponse.Status,
        recordingSessionId: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNKNOWN_RECORDING_SESSION_ID = 2,
    STATUS_RECORDING_BUFFER_FULL = 3,
    }

}

export class StopRecordingStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StopRecordingStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRecordingStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopRecordingStateRequest): StopRecordingStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRecordingStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRecordingStateRequest;
    static deserializeBinaryFromReader(message: StopRecordingStateRequest, reader: jspb.BinaryReader): StopRecordingStateRequest;
}

export namespace StopRecordingStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class StopRecordingStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StopRecordingStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRecordingStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopRecordingStateResponse): StopRecordingStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRecordingStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRecordingStateResponse;
    static deserializeBinaryFromReader(message: StopRecordingStateResponse, reader: jspb.BinaryReader): StopRecordingStateResponse;
}

export namespace StopRecordingStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class DownloadRobotStateLogRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DownloadRobotStateLogRequest;
    getLogType(): DownloadRobotStateLogRequest.LogType;
    setLogType(value: DownloadRobotStateLogRequest.LogType): DownloadRobotStateLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadRobotStateLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadRobotStateLogRequest): DownloadRobotStateLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadRobotStateLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadRobotStateLogRequest;
    static deserializeBinaryFromReader(message: DownloadRobotStateLogRequest, reader: jspb.BinaryReader): DownloadRobotStateLogRequest;
}

export namespace DownloadRobotStateLogRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        logType: DownloadRobotStateLogRequest.LogType,
    }

    export enum LogType {
    LOG_TYPE_UNKNOWN = 0,
    LOG_TYPE_MANUAL = 1,
    LOG_TYPE_LAST_CHOREOGRAPHY = 2,
    }

}

export class LoggedJoints extends jspb.Message { 

    hasFl(): boolean;
    clearFl(): void;
    getFl(): LegJointAngles | undefined;
    setFl(value?: LegJointAngles): LoggedJoints;

    hasFr(): boolean;
    clearFr(): void;
    getFr(): LegJointAngles | undefined;
    setFr(value?: LegJointAngles): LoggedJoints;

    hasHl(): boolean;
    clearHl(): void;
    getHl(): LegJointAngles | undefined;
    setHl(value?: LegJointAngles): LoggedJoints;

    hasHr(): boolean;
    clearHr(): void;
    getHr(): LegJointAngles | undefined;
    setHr(value?: LegJointAngles): LoggedJoints;

    hasArm(): boolean;
    clearArm(): void;
    getArm(): ArmJointAngles | undefined;
    setArm(value?: ArmJointAngles): LoggedJoints;

    hasGripperAngle(): boolean;
    clearGripperAngle(): void;
    getGripperAngle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGripperAngle(value?: google_protobuf_wrappers_pb.DoubleValue): LoggedJoints;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoggedJoints.AsObject;
    static toObject(includeInstance: boolean, msg: LoggedJoints): LoggedJoints.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoggedJoints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoggedJoints;
    static deserializeBinaryFromReader(message: LoggedJoints, reader: jspb.BinaryReader): LoggedJoints;
}

export namespace LoggedJoints {
    export type AsObject = {
        fl?: LegJointAngles.AsObject,
        fr?: LegJointAngles.AsObject,
        hl?: LegJointAngles.AsObject,
        hr?: LegJointAngles.AsObject,
        arm?: ArmJointAngles.AsObject,
        gripperAngle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class LoggedFootContacts extends jspb.Message { 
    getFrContact(): boolean;
    setFrContact(value: boolean): LoggedFootContacts;
    getFlContact(): boolean;
    setFlContact(value: boolean): LoggedFootContacts;
    getHrContact(): boolean;
    setHrContact(value: boolean): LoggedFootContacts;
    getHlContact(): boolean;
    setHlContact(value: boolean): LoggedFootContacts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoggedFootContacts.AsObject;
    static toObject(includeInstance: boolean, msg: LoggedFootContacts): LoggedFootContacts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoggedFootContacts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoggedFootContacts;
    static deserializeBinaryFromReader(message: LoggedFootContacts, reader: jspb.BinaryReader): LoggedFootContacts;
}

export namespace LoggedFootContacts {
    export type AsObject = {
        frContact: boolean,
        flContact: boolean,
        hrContact: boolean,
        hlContact: boolean,
    }
}

export class LoggedStateKeyFrame extends jspb.Message { 

    hasJointAngles(): boolean;
    clearJointAngles(): void;
    getJointAngles(): LoggedJoints | undefined;
    setJointAngles(value?: LoggedJoints): LoggedStateKeyFrame;

    hasFootContactState(): boolean;
    clearFootContactState(): void;
    getFootContactState(): LoggedFootContacts | undefined;
    setFootContactState(value?: LoggedFootContacts): LoggedStateKeyFrame;

    hasAnimationTformBody(): boolean;
    clearAnimationTformBody(): void;
    getAnimationTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setAnimationTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): LoggedStateKeyFrame;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LoggedStateKeyFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoggedStateKeyFrame.AsObject;
    static toObject(includeInstance: boolean, msg: LoggedStateKeyFrame): LoggedStateKeyFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoggedStateKeyFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoggedStateKeyFrame;
    static deserializeBinaryFromReader(message: LoggedStateKeyFrame, reader: jspb.BinaryReader): LoggedStateKeyFrame;
}

export namespace LoggedStateKeyFrame {
    export type AsObject = {
        jointAngles?: LoggedJoints.AsObject,
        footContactState?: LoggedFootContacts.AsObject,
        animationTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ChoreographyStateLog extends jspb.Message { 
    clearKeyFramesList(): void;
    getKeyFramesList(): Array<LoggedStateKeyFrame>;
    setKeyFramesList(value: Array<LoggedStateKeyFrame>): ChoreographyStateLog;
    addKeyFrames(value?: LoggedStateKeyFrame, index?: number): LoggedStateKeyFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyStateLog.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyStateLog): ChoreographyStateLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyStateLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyStateLog;
    static deserializeBinaryFromReader(message: ChoreographyStateLog, reader: jspb.BinaryReader): ChoreographyStateLog;
}

export namespace ChoreographyStateLog {
    export type AsObject = {
        keyFramesList: Array<LoggedStateKeyFrame.AsObject>,
    }
}

export class DownloadRobotStateLogResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DownloadRobotStateLogResponse;
    getStatus(): DownloadRobotStateLogResponse.Status;
    setStatus(value: DownloadRobotStateLogResponse.Status): DownloadRobotStateLogResponse;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): DownloadRobotStateLogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadRobotStateLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadRobotStateLogResponse): DownloadRobotStateLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadRobotStateLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadRobotStateLogResponse;
    static deserializeBinaryFromReader(message: DownloadRobotStateLogResponse, reader: jspb.BinaryReader): DownloadRobotStateLogResponse;
}

export namespace DownloadRobotStateLogResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: DownloadRobotStateLogResponse.Status,
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_RECORDED_INFORMATION = 2,
    STATUS_INCOMPLETE_DATA = 3,
    }

}

export class MoveParams extends jspb.Message { 
    getType(): string;
    setType(value: string): MoveParams;
    getStartSlice(): number;
    setStartSlice(value: number): MoveParams;
    getRequestedSlices(): number;
    setRequestedSlices(value: number): MoveParams;
    getId(): number;
    setId(value: number): MoveParams;

    hasJumpParams(): boolean;
    clearJumpParams(): void;
    getJumpParams(): bosdyn_api_spot_choreography_params_pb.JumpParams | undefined;
    setJumpParams(value?: bosdyn_api_spot_choreography_params_pb.JumpParams): MoveParams;

    hasRotateBodyParams(): boolean;
    clearRotateBodyParams(): void;
    getRotateBodyParams(): bosdyn_api_spot_choreography_params_pb.RotateBodyParams | undefined;
    setRotateBodyParams(value?: bosdyn_api_spot_choreography_params_pb.RotateBodyParams): MoveParams;

    hasStepParams(): boolean;
    clearStepParams(): void;
    getStepParams(): bosdyn_api_spot_choreography_params_pb.StepParams | undefined;
    setStepParams(value?: bosdyn_api_spot_choreography_params_pb.StepParams): MoveParams;

    hasButtCircleParams(): boolean;
    clearButtCircleParams(): void;
    getButtCircleParams(): bosdyn_api_spot_choreography_params_pb.ButtCircleParams | undefined;
    setButtCircleParams(value?: bosdyn_api_spot_choreography_params_pb.ButtCircleParams): MoveParams;

    hasTurnParams(): boolean;
    clearTurnParams(): void;
    getTurnParams(): bosdyn_api_spot_choreography_params_pb.TurnParams | undefined;
    setTurnParams(value?: bosdyn_api_spot_choreography_params_pb.TurnParams): MoveParams;

    hasPace2stepParams(): boolean;
    clearPace2stepParams(): void;
    getPace2stepParams(): bosdyn_api_spot_choreography_params_pb.Pace2StepParams | undefined;
    setPace2stepParams(value?: bosdyn_api_spot_choreography_params_pb.Pace2StepParams): MoveParams;

    hasTwerkParams(): boolean;
    clearTwerkParams(): void;
    getTwerkParams(): bosdyn_api_spot_choreography_params_pb.TwerkParams | undefined;
    setTwerkParams(value?: bosdyn_api_spot_choreography_params_pb.TwerkParams): MoveParams;

    hasChickenHeadParams(): boolean;
    clearChickenHeadParams(): void;
    getChickenHeadParams(): bosdyn_api_spot_choreography_params_pb.ChickenHeadParams | undefined;
    setChickenHeadParams(value?: bosdyn_api_spot_choreography_params_pb.ChickenHeadParams): MoveParams;

    hasClapParams(): boolean;
    clearClapParams(): void;
    getClapParams(): bosdyn_api_spot_choreography_params_pb.ClapParams | undefined;
    setClapParams(value?: bosdyn_api_spot_choreography_params_pb.ClapParams): MoveParams;

    hasFrontUpParams(): boolean;
    clearFrontUpParams(): void;
    getFrontUpParams(): bosdyn_api_spot_choreography_params_pb.FrontUpParams | undefined;
    setFrontUpParams(value?: bosdyn_api_spot_choreography_params_pb.FrontUpParams): MoveParams;

    hasSwayParams(): boolean;
    clearSwayParams(): void;
    getSwayParams(): bosdyn_api_spot_choreography_params_pb.SwayParams | undefined;
    setSwayParams(value?: bosdyn_api_spot_choreography_params_pb.SwayParams): MoveParams;

    hasBodyHoldParams(): boolean;
    clearBodyHoldParams(): void;
    getBodyHoldParams(): bosdyn_api_spot_choreography_params_pb.BodyHoldParams | undefined;
    setBodyHoldParams(value?: bosdyn_api_spot_choreography_params_pb.BodyHoldParams): MoveParams;

    hasArmMoveParams(): boolean;
    clearArmMoveParams(): void;
    getArmMoveParams(): bosdyn_api_spot_choreography_params_pb.ArmMoveParams | undefined;
    setArmMoveParams(value?: bosdyn_api_spot_choreography_params_pb.ArmMoveParams): MoveParams;

    hasKneelLegMoveParams(): boolean;
    clearKneelLegMoveParams(): void;
    getKneelLegMoveParams(): bosdyn_api_spot_choreography_params_pb.KneelLegMoveParams | undefined;
    setKneelLegMoveParams(value?: bosdyn_api_spot_choreography_params_pb.KneelLegMoveParams): MoveParams;

    hasRunningManParams(): boolean;
    clearRunningManParams(): void;
    getRunningManParams(): bosdyn_api_spot_choreography_params_pb.RunningManParams | undefined;
    setRunningManParams(value?: bosdyn_api_spot_choreography_params_pb.RunningManParams): MoveParams;

    hasKneelCircleParams(): boolean;
    clearKneelCircleParams(): void;
    getKneelCircleParams(): bosdyn_api_spot_choreography_params_pb.KneelCircleParams | undefined;
    setKneelCircleParams(value?: bosdyn_api_spot_choreography_params_pb.KneelCircleParams): MoveParams;

    hasGripperParams(): boolean;
    clearGripperParams(): void;
    getGripperParams(): bosdyn_api_spot_choreography_params_pb.GripperParams | undefined;
    setGripperParams(value?: bosdyn_api_spot_choreography_params_pb.GripperParams): MoveParams;

    hasHopParams(): boolean;
    clearHopParams(): void;
    getHopParams(): bosdyn_api_spot_choreography_params_pb.HopParams | undefined;
    setHopParams(value?: bosdyn_api_spot_choreography_params_pb.HopParams): MoveParams;

    hasRandomRotateParams(): boolean;
    clearRandomRotateParams(): void;
    getRandomRotateParams(): bosdyn_api_spot_choreography_params_pb.RandomRotateParams | undefined;
    setRandomRotateParams(value?: bosdyn_api_spot_choreography_params_pb.RandomRotateParams): MoveParams;

    hasCrawlParams(): boolean;
    clearCrawlParams(): void;
    getCrawlParams(): bosdyn_api_spot_choreography_params_pb.CrawlParams | undefined;
    setCrawlParams(value?: bosdyn_api_spot_choreography_params_pb.CrawlParams): MoveParams;

    hasSideParams(): boolean;
    clearSideParams(): void;
    getSideParams(): bosdyn_api_spot_choreography_params_pb.SideParams | undefined;
    setSideParams(value?: bosdyn_api_spot_choreography_params_pb.SideParams): MoveParams;

    hasBourreeParams(): boolean;
    clearBourreeParams(): void;
    getBourreeParams(): bosdyn_api_spot_choreography_params_pb.BourreeParams | undefined;
    setBourreeParams(value?: bosdyn_api_spot_choreography_params_pb.BourreeParams): MoveParams;

    hasWorkspaceArmMoveParams(): boolean;
    clearWorkspaceArmMoveParams(): void;
    getWorkspaceArmMoveParams(): bosdyn_api_spot_choreography_params_pb.WorkspaceArmMoveParams | undefined;
    setWorkspaceArmMoveParams(value?: bosdyn_api_spot_choreography_params_pb.WorkspaceArmMoveParams): MoveParams;

    hasFigure8Params(): boolean;
    clearFigure8Params(): void;
    getFigure8Params(): bosdyn_api_spot_choreography_params_pb.Figure8Params | undefined;
    setFigure8Params(value?: bosdyn_api_spot_choreography_params_pb.Figure8Params): MoveParams;

    hasKneelLegMove2Params(): boolean;
    clearKneelLegMove2Params(): void;
    getKneelLegMove2Params(): bosdyn_api_spot_choreography_params_pb.KneelLegMove2Params | undefined;
    setKneelLegMove2Params(value?: bosdyn_api_spot_choreography_params_pb.KneelLegMove2Params): MoveParams;

    hasFidgetStandParams(): boolean;
    clearFidgetStandParams(): void;
    getFidgetStandParams(): bosdyn_api_spot_choreography_params_pb.FidgetStandParams | undefined;
    setFidgetStandParams(value?: bosdyn_api_spot_choreography_params_pb.FidgetStandParams): MoveParams;

    hasGotoParams(): boolean;
    clearGotoParams(): void;
    getGotoParams(): bosdyn_api_spot_choreography_params_pb.GotoParams | undefined;
    setGotoParams(value?: bosdyn_api_spot_choreography_params_pb.GotoParams): MoveParams;

    hasFrameSnapshotParams(): boolean;
    clearFrameSnapshotParams(): void;
    getFrameSnapshotParams(): bosdyn_api_spot_choreography_params_pb.FrameSnapshotParams | undefined;
    setFrameSnapshotParams(value?: bosdyn_api_spot_choreography_params_pb.FrameSnapshotParams): MoveParams;

    hasSetColorParams(): boolean;
    clearSetColorParams(): void;
    getSetColorParams(): bosdyn_api_spot_choreography_params_pb.SetColorParams | undefined;
    setSetColorParams(value?: bosdyn_api_spot_choreography_params_pb.SetColorParams): MoveParams;

    hasRippleColorParams(): boolean;
    clearRippleColorParams(): void;
    getRippleColorParams(): bosdyn_api_spot_choreography_params_pb.RippleColorParams | undefined;
    setRippleColorParams(value?: bosdyn_api_spot_choreography_params_pb.RippleColorParams): MoveParams;

    hasFadeColorParams(): boolean;
    clearFadeColorParams(): void;
    getFadeColorParams(): bosdyn_api_spot_choreography_params_pb.FadeColorParams | undefined;
    setFadeColorParams(value?: bosdyn_api_spot_choreography_params_pb.FadeColorParams): MoveParams;

    hasIndependentColorParams(): boolean;
    clearIndependentColorParams(): void;
    getIndependentColorParams(): bosdyn_api_spot_choreography_params_pb.IndependentColorParams | undefined;
    setIndependentColorParams(value?: bosdyn_api_spot_choreography_params_pb.IndependentColorParams): MoveParams;

    hasCustomGaitParams(): boolean;
    clearCustomGaitParams(): void;
    getCustomGaitParams(): bosdyn_api_spot_choreography_params_pb.CustomGaitParams | undefined;
    setCustomGaitParams(value?: bosdyn_api_spot_choreography_params_pb.CustomGaitParams): MoveParams;

    hasSetAudioVisualColorParams(): boolean;
    clearSetAudioVisualColorParams(): void;
    getSetAudioVisualColorParams(): bosdyn_api_spot_choreography_params_pb.SetAudioVisualColorParams | undefined;
    setSetAudioVisualColorParams(value?: bosdyn_api_spot_choreography_params_pb.SetAudioVisualColorParams): MoveParams;

    hasSetAllColorParams(): boolean;
    clearSetAllColorParams(): void;
    getSetAllColorParams(): bosdyn_api_spot_choreography_params_pb.SetAllColorParams | undefined;
    setSetAllColorParams(value?: bosdyn_api_spot_choreography_params_pb.SetAllColorParams): MoveParams;

    hasBuzzerNoteParams(): boolean;
    clearBuzzerNoteParams(): void;
    getBuzzerNoteParams(): bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams | undefined;
    setBuzzerNoteParams(value?: bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams): MoveParams;

    hasLegJointParams(): boolean;
    clearLegJointParams(): void;
    getLegJointParams(): bosdyn_api_spot_choreography_params_pb.LegJointParams | undefined;
    setLegJointParams(value?: bosdyn_api_spot_choreography_params_pb.LegJointParams): MoveParams;

    hasAnimateParams(): boolean;
    clearAnimateParams(): void;
    getAnimateParams(): bosdyn_api_spot_choreography_params_pb.AnimateParams | undefined;
    setAnimateParams(value?: bosdyn_api_spot_choreography_params_pb.AnimateParams): MoveParams;

    getParamsCase(): MoveParams.ParamsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveParams.AsObject;
    static toObject(includeInstance: boolean, msg: MoveParams): MoveParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveParams;
    static deserializeBinaryFromReader(message: MoveParams, reader: jspb.BinaryReader): MoveParams;
}

export namespace MoveParams {
    export type AsObject = {
        type: string,
        startSlice: number,
        requestedSlices: number,
        id: number,
        jumpParams?: bosdyn_api_spot_choreography_params_pb.JumpParams.AsObject,
        rotateBodyParams?: bosdyn_api_spot_choreography_params_pb.RotateBodyParams.AsObject,
        stepParams?: bosdyn_api_spot_choreography_params_pb.StepParams.AsObject,
        buttCircleParams?: bosdyn_api_spot_choreography_params_pb.ButtCircleParams.AsObject,
        turnParams?: bosdyn_api_spot_choreography_params_pb.TurnParams.AsObject,
        pace2stepParams?: bosdyn_api_spot_choreography_params_pb.Pace2StepParams.AsObject,
        twerkParams?: bosdyn_api_spot_choreography_params_pb.TwerkParams.AsObject,
        chickenHeadParams?: bosdyn_api_spot_choreography_params_pb.ChickenHeadParams.AsObject,
        clapParams?: bosdyn_api_spot_choreography_params_pb.ClapParams.AsObject,
        frontUpParams?: bosdyn_api_spot_choreography_params_pb.FrontUpParams.AsObject,
        swayParams?: bosdyn_api_spot_choreography_params_pb.SwayParams.AsObject,
        bodyHoldParams?: bosdyn_api_spot_choreography_params_pb.BodyHoldParams.AsObject,
        armMoveParams?: bosdyn_api_spot_choreography_params_pb.ArmMoveParams.AsObject,
        kneelLegMoveParams?: bosdyn_api_spot_choreography_params_pb.KneelLegMoveParams.AsObject,
        runningManParams?: bosdyn_api_spot_choreography_params_pb.RunningManParams.AsObject,
        kneelCircleParams?: bosdyn_api_spot_choreography_params_pb.KneelCircleParams.AsObject,
        gripperParams?: bosdyn_api_spot_choreography_params_pb.GripperParams.AsObject,
        hopParams?: bosdyn_api_spot_choreography_params_pb.HopParams.AsObject,
        randomRotateParams?: bosdyn_api_spot_choreography_params_pb.RandomRotateParams.AsObject,
        crawlParams?: bosdyn_api_spot_choreography_params_pb.CrawlParams.AsObject,
        sideParams?: bosdyn_api_spot_choreography_params_pb.SideParams.AsObject,
        bourreeParams?: bosdyn_api_spot_choreography_params_pb.BourreeParams.AsObject,
        workspaceArmMoveParams?: bosdyn_api_spot_choreography_params_pb.WorkspaceArmMoveParams.AsObject,
        figure8Params?: bosdyn_api_spot_choreography_params_pb.Figure8Params.AsObject,
        kneelLegMove2Params?: bosdyn_api_spot_choreography_params_pb.KneelLegMove2Params.AsObject,
        fidgetStandParams?: bosdyn_api_spot_choreography_params_pb.FidgetStandParams.AsObject,
        gotoParams?: bosdyn_api_spot_choreography_params_pb.GotoParams.AsObject,
        frameSnapshotParams?: bosdyn_api_spot_choreography_params_pb.FrameSnapshotParams.AsObject,
        setColorParams?: bosdyn_api_spot_choreography_params_pb.SetColorParams.AsObject,
        rippleColorParams?: bosdyn_api_spot_choreography_params_pb.RippleColorParams.AsObject,
        fadeColorParams?: bosdyn_api_spot_choreography_params_pb.FadeColorParams.AsObject,
        independentColorParams?: bosdyn_api_spot_choreography_params_pb.IndependentColorParams.AsObject,
        customGaitParams?: bosdyn_api_spot_choreography_params_pb.CustomGaitParams.AsObject,
        setAudioVisualColorParams?: bosdyn_api_spot_choreography_params_pb.SetAudioVisualColorParams.AsObject,
        setAllColorParams?: bosdyn_api_spot_choreography_params_pb.SetAllColorParams.AsObject,
        buzzerNoteParams?: bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams.AsObject,
        legJointParams?: bosdyn_api_spot_choreography_params_pb.LegJointParams.AsObject,
        animateParams?: bosdyn_api_spot_choreography_params_pb.AnimateParams.AsObject,
    }

    export enum ParamsCase {
        PARAMS_NOT_SET = 0,
        JUMP_PARAMS = 11,
        ROTATE_BODY_PARAMS = 12,
        STEP_PARAMS = 13,
        BUTT_CIRCLE_PARAMS = 14,
        TURN_PARAMS = 15,
        PACE_2STEP_PARAMS = 16,
        TWERK_PARAMS = 17,
        CHICKEN_HEAD_PARAMS = 18,
        CLAP_PARAMS = 19,
        FRONT_UP_PARAMS = 20,
        SWAY_PARAMS = 21,
        BODY_HOLD_PARAMS = 22,
        ARM_MOVE_PARAMS = 23,
        KNEEL_LEG_MOVE_PARAMS = 24,
        RUNNING_MAN_PARAMS = 25,
        KNEEL_CIRCLE_PARAMS = 26,
        GRIPPER_PARAMS = 27,
        HOP_PARAMS = 28,
        RANDOM_ROTATE_PARAMS = 29,
        CRAWL_PARAMS = 30,
        SIDE_PARAMS = 31,
        BOURREE_PARAMS = 32,
        WORKSPACE_ARM_MOVE_PARAMS = 33,
        FIGURE8_PARAMS = 34,
        KNEEL_LEG_MOVE2_PARAMS = 35,
        FIDGET_STAND_PARAMS = 36,
        GOTO_PARAMS = 37,
        FRAME_SNAPSHOT_PARAMS = 38,
        SET_COLOR_PARAMS = 39,
        RIPPLE_COLOR_PARAMS = 40,
        FADE_COLOR_PARAMS = 41,
        INDEPENDENT_COLOR_PARAMS = 42,
        CUSTOM_GAIT_PARAMS = 43,
        SET_AUDIO_VISUAL_COLOR_PARAMS = 44,
        SET_ALL_COLOR_PARAMS = 45,
        BUZZER_NOTE_PARAMS = 46,
        LEG_JOINT_PARAMS = 100,
        ANIMATE_PARAMS = 1000,
    }

}

export class MoveCommand extends jspb.Message { 
    getMoveType(): string;
    setMoveType(value: string): MoveCommand;
    getMoveId(): number;
    setMoveId(value: number): MoveCommand;

    hasCustomGaitCommand(): boolean;
    clearCustomGaitCommand(): void;
    getCustomGaitCommand(): bosdyn_api_spot_choreography_params_pb.CustomGaitCommand | undefined;
    setCustomGaitCommand(value?: bosdyn_api_spot_choreography_params_pb.CustomGaitCommand): MoveCommand;

    getCommandCase(): MoveCommand.CommandCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveCommand.AsObject;
    static toObject(includeInstance: boolean, msg: MoveCommand): MoveCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveCommand;
    static deserializeBinaryFromReader(message: MoveCommand, reader: jspb.BinaryReader): MoveCommand;
}

export namespace MoveCommand {
    export type AsObject = {
        moveType: string,
        moveId: number,
        customGaitCommand?: bosdyn_api_spot_choreography_params_pb.CustomGaitCommand.AsObject,
    }

    export enum CommandCase {
        COMMAND_NOT_SET = 0,
        CUSTOM_GAIT_COMMAND = 3,
    }

}

export class ChoreographyCommandRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ChoreographyCommandRequest;
    clearCommandsList(): void;
    getCommandsList(): Array<MoveCommand>;
    setCommandsList(value: Array<MoveCommand>): ChoreographyCommandRequest;
    addCommands(value?: MoveCommand, index?: number): MoveCommand;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): ChoreographyCommandRequest;

    hasCommandEndTime(): boolean;
    clearCommandEndTime(): void;
    getCommandEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCommandEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ChoreographyCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyCommandRequest): ChoreographyCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyCommandRequest;
    static deserializeBinaryFromReader(message: ChoreographyCommandRequest, reader: jspb.BinaryReader): ChoreographyCommandRequest;
}

export namespace ChoreographyCommandRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        commandsList: Array<MoveCommand.AsObject>,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        commandEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ChoreographyCommandResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ChoreographyCommandResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): ChoreographyCommandResponse;
    clearStatusList(): void;
    getStatusList(): Array<ChoreographyCommandResponse.Status>;
    setStatusList(value: Array<ChoreographyCommandResponse.Status>): ChoreographyCommandResponse;
    addStatus(value: ChoreographyCommandResponse.Status, index?: number): ChoreographyCommandResponse.Status;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyCommandResponse): ChoreographyCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyCommandResponse;
    static deserializeBinaryFromReader(message: ChoreographyCommandResponse, reader: jspb.BinaryReader): ChoreographyCommandResponse;
}

export namespace ChoreographyCommandResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        statusList: Array<ChoreographyCommandResponse.Status>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ACCEPTED_WITH_MODIFICATION = 2,
    STATUS_LEASE_ERROR = 3,
    STATUS_NO_MATCHING_MOVE = 4,
    STATUS_INVALID_COMMAND = 5,
    STATUS_ALREADY_EXPIRED = 6,
    }

}

export class MoveInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): MoveInfo;
    getMoveLengthSlices(): number;
    setMoveLengthSlices(value: number): MoveInfo;
    getMoveLengthTime(): number;
    setMoveLengthTime(value: number): MoveInfo;
    getIsExtendable(): boolean;
    setIsExtendable(value: boolean): MoveInfo;
    getMinMoveLengthSlices(): number;
    setMinMoveLengthSlices(value: number): MoveInfo;
    getMaxMoveLengthSlices(): number;
    setMaxMoveLengthSlices(value: number): MoveInfo;
    getMinTime(): number;
    setMinTime(value: number): MoveInfo;
    getMaxTime(): number;
    setMaxTime(value: number): MoveInfo;
    clearEntranceStatesList(): void;
    getEntranceStatesList(): Array<MoveInfo.TransitionState>;
    setEntranceStatesList(value: Array<MoveInfo.TransitionState>): MoveInfo;
    addEntranceStates(value: MoveInfo.TransitionState, index?: number): MoveInfo.TransitionState;
    getExitState(): MoveInfo.TransitionState;
    setExitState(value: MoveInfo.TransitionState): MoveInfo;
    getControlsArm(): boolean;
    setControlsArm(value: boolean): MoveInfo;
    getControlsLegs(): boolean;
    setControlsLegs(value: boolean): MoveInfo;
    getControlsBody(): boolean;
    setControlsBody(value: boolean): MoveInfo;
    getControlsGripper(): boolean;
    setControlsGripper(value: boolean): MoveInfo;
    getControlsLights(): boolean;
    setControlsLights(value: boolean): MoveInfo;
    getControlsAnnotations(): boolean;
    setControlsAnnotations(value: boolean): MoveInfo;
    getControlsAudioVisualLights(): boolean;
    setControlsAudioVisualLights(value: boolean): MoveInfo;
    getControlsAudioVisualBuzzer(): boolean;
    setControlsAudioVisualBuzzer(value: boolean): MoveInfo;
    getIsLooping(): boolean;
    setIsLooping(value: boolean): MoveInfo;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): ChoreographerDisplayInfo | undefined;
    setDisplay(value?: ChoreographerDisplayInfo): MoveInfo;

    hasAnimatedMoveGeneratedId(): boolean;
    clearAnimatedMoveGeneratedId(): void;
    getAnimatedMoveGeneratedId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAnimatedMoveGeneratedId(value?: google_protobuf_wrappers_pb.StringValue): MoveInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveInfo.AsObject;
    static toObject(includeInstance: boolean, msg: MoveInfo): MoveInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveInfo;
    static deserializeBinaryFromReader(message: MoveInfo, reader: jspb.BinaryReader): MoveInfo;
}

export namespace MoveInfo {
    export type AsObject = {
        name: string,
        moveLengthSlices: number,
        moveLengthTime: number,
        isExtendable: boolean,
        minMoveLengthSlices: number,
        maxMoveLengthSlices: number,
        minTime: number,
        maxTime: number,
        entranceStatesList: Array<MoveInfo.TransitionState>,
        exitState: MoveInfo.TransitionState,
        controlsArm: boolean,
        controlsLegs: boolean,
        controlsBody: boolean,
        controlsGripper: boolean,
        controlsLights: boolean,
        controlsAnnotations: boolean,
        controlsAudioVisualLights: boolean,
        controlsAudioVisualBuzzer: boolean,
        isLooping: boolean,
        display?: ChoreographerDisplayInfo.AsObject,
        animatedMoveGeneratedId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }

    export enum TransitionState {
    TRANSITION_STATE_UNKNOWN = 0,
    TRANSITION_STATE_STAND = 1,
    TRANSITION_STATE_KNEEL = 2,
    TRANSITION_STATE_SIT = 3,
    TRANSITION_STATE_SPRAWL = 4,
    }

}

export class ChoreographerDisplayInfo extends jspb.Message { 

    hasColor(): boolean;
    clearColor(): void;
    getColor(): ChoreographerDisplayInfo.Color | undefined;
    setColor(value?: ChoreographerDisplayInfo.Color): ChoreographerDisplayInfo;
    clearMarkersList(): void;
    getMarkersList(): Array<number>;
    setMarkersList(value: Array<number>): ChoreographerDisplayInfo;
    addMarkers(value: number, index?: number): number;
    getDescription(): string;
    setDescription(value: string): ChoreographerDisplayInfo;
    getImage(): string;
    setImage(value: string): ChoreographerDisplayInfo;
    getCategory(): ChoreographerDisplayInfo.Category;
    setCategory(value: ChoreographerDisplayInfo.Category): ChoreographerDisplayInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographerDisplayInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographerDisplayInfo): ChoreographerDisplayInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographerDisplayInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographerDisplayInfo;
    static deserializeBinaryFromReader(message: ChoreographerDisplayInfo, reader: jspb.BinaryReader): ChoreographerDisplayInfo;
}

export namespace ChoreographerDisplayInfo {
    export type AsObject = {
        color?: ChoreographerDisplayInfo.Color.AsObject,
        markersList: Array<number>,
        description: string,
        image: string,
        category: ChoreographerDisplayInfo.Category,
    }


    export class Color extends jspb.Message { 
        getR(): number;
        setR(value: number): Color;
        getG(): number;
        setG(value: number): Color;
        getB(): number;
        setB(value: number): Color;
        getA(): number;
        setA(value: number): Color;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Color.AsObject;
        static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Color;
        static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
    }

    export namespace Color {
        export type AsObject = {
            r: number,
            g: number,
            b: number,
            a: number,
        }
    }


    export enum Category {
    CATEGORY_UNKNOWN = 0,
    CATEGORY_BODY = 1,
    CATEGORY_STEP = 2,
    CATEGORY_DYNAMIC = 3,
    CATEGORY_TRANSITION = 4,
    CATEGORY_KNEEL = 5,
    CATEGORY_ARM = 6,
    CATEGORY_ANIMATION = 7,
    CATEGORY_MPC = 8,
    CATEGORY_LIGHTS = 9,
    CATEGORY_ANNOTATIONS = 10,
    CATEGORY_AUDIO_VISUAL_LIGHTS = 11,
    CATEGORY_AUDIO_VISUAL_BUZZER = 12,
    }

}

export class ChoreographySequence extends jspb.Message { 
    getName(): string;
    setName(value: string): ChoreographySequence;
    getSlicesPerMinute(): number;
    setSlicesPerMinute(value: number): ChoreographySequence;
    clearMovesList(): void;
    getMovesList(): Array<MoveParams>;
    setMovesList(value: Array<MoveParams>): ChoreographySequence;
    addMoves(value?: MoveParams, index?: number): MoveParams;

    hasChoreographyInfo(): boolean;
    clearChoreographyInfo(): void;
    getChoreographyInfo(): ChoreographyInfo | undefined;
    setChoreographyInfo(value?: ChoreographyInfo): ChoreographySequence;
    getEntranceState(): MoveInfo.TransitionState;
    setEntranceState(value: MoveInfo.TransitionState): ChoreographySequence;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographySequence.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographySequence): ChoreographySequence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographySequence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographySequence;
    static deserializeBinaryFromReader(message: ChoreographySequence, reader: jspb.BinaryReader): ChoreographySequence;
}

export namespace ChoreographySequence {
    export type AsObject = {
        name: string,
        slicesPerMinute: number,
        movesList: Array<MoveParams.AsObject>,
        choreographyInfo?: ChoreographyInfo.AsObject,
        entranceState: MoveInfo.TransitionState,
    }
}

export class ChoreographyInfo extends jspb.Message { 
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): ChoreographyInfo;
    addLabels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyInfo): ChoreographyInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyInfo;
    static deserializeBinaryFromReader(message: ChoreographyInfo, reader: jspb.BinaryReader): ChoreographyInfo;
}

export namespace ChoreographyInfo {
    export type AsObject = {
        labelsList: Array<string>,
    }
}

export class ChoreographerSave extends jspb.Message { 

    hasChoreographySequence(): boolean;
    clearChoreographySequence(): void;
    getChoreographySequence(): ChoreographySequence | undefined;
    setChoreographySequence(value?: ChoreographySequence): ChoreographerSave;
    getMusicFile(): string;
    setMusicFile(value: string): ChoreographerSave;
    getMusicStartSlice(): number;
    setMusicStartSlice(value: number): ChoreographerSave;
    getChoreographyStartSlice(): number;
    setChoreographyStartSlice(value: number): ChoreographerSave;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographerSave.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographerSave): ChoreographerSave.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographerSave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographerSave;
    static deserializeBinaryFromReader(message: ChoreographerSave, reader: jspb.BinaryReader): ChoreographerSave;
}

export namespace ChoreographerSave {
    export type AsObject = {
        choreographySequence?: ChoreographySequence.AsObject,
        musicFile: string,
        musicStartSlice: number,
        choreographyStartSlice: number,
    }
}

export class Animation extends jspb.Message { 
    getName(): string;
    setName(value: string): Animation;
    clearAnimationKeyframesList(): void;
    getAnimationKeyframesList(): Array<AnimationKeyframe>;
    setAnimationKeyframesList(value: Array<AnimationKeyframe>): Animation;
    addAnimationKeyframes(value?: AnimationKeyframe, index?: number): AnimationKeyframe;
    getControlsArm(): boolean;
    setControlsArm(value: boolean): Animation;
    getControlsLegs(): boolean;
    setControlsLegs(value: boolean): Animation;
    getControlsBody(): boolean;
    setControlsBody(value: boolean): Animation;
    getControlsGripper(): boolean;
    setControlsGripper(value: boolean): Animation;
    getTrackSwingTrajectories(): boolean;
    setTrackSwingTrajectories(value: boolean): Animation;
    getAssumeZeroRollAndPitch(): boolean;
    setAssumeZeroRollAndPitch(value: boolean): Animation;
    getArmPlayback(): Animation.ArmPlayback;
    setArmPlayback(value: Animation.ArmPlayback): Animation;
    getBpm(): number;
    setBpm(value: number): Animation;
    getRetimeToIntegerSlices(): boolean;
    setRetimeToIntegerSlices(value: boolean): Animation;

    hasMinimumParameters(): boolean;
    clearMinimumParameters(): void;
    getMinimumParameters(): bosdyn_api_spot_choreography_params_pb.AnimateParams | undefined;
    setMinimumParameters(value?: bosdyn_api_spot_choreography_params_pb.AnimateParams): Animation;

    hasDefaultParameters(): boolean;
    clearDefaultParameters(): void;
    getDefaultParameters(): bosdyn_api_spot_choreography_params_pb.AnimateParams | undefined;
    setDefaultParameters(value?: bosdyn_api_spot_choreography_params_pb.AnimateParams): Animation;

    hasMaximumParameters(): boolean;
    clearMaximumParameters(): void;
    getMaximumParameters(): bosdyn_api_spot_choreography_params_pb.AnimateParams | undefined;
    setMaximumParameters(value?: bosdyn_api_spot_choreography_params_pb.AnimateParams): Animation;
    getTruncatable(): boolean;
    setTruncatable(value: boolean): Animation;
    getExtendable(): boolean;
    setExtendable(value: boolean): Animation;
    getNeutralStart(): boolean;
    setNeutralStart(value: boolean): Animation;
    getPreciseSteps(): boolean;
    setPreciseSteps(value: boolean): Animation;
    getPreciseTiming(): boolean;
    setPreciseTiming(value: boolean): Animation;
    getTimingAdjustability(): number;
    setTimingAdjustability(value: number): Animation;
    getArmRequired(): boolean;
    setArmRequired(value: boolean): Animation;
    getArmProhibited(): boolean;
    setArmProhibited(value: boolean): Animation;
    getNoLooping(): boolean;
    setNoLooping(value: boolean): Animation;
    getStartsSitting(): boolean;
    setStartsSitting(value: boolean): Animation;
    getCustomGaitCycle(): boolean;
    setCustomGaitCycle(value: boolean): Animation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Animation.AsObject;
    static toObject(includeInstance: boolean, msg: Animation): Animation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Animation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Animation;
    static deserializeBinaryFromReader(message: Animation, reader: jspb.BinaryReader): Animation;
}

export namespace Animation {
    export type AsObject = {
        name: string,
        animationKeyframesList: Array<AnimationKeyframe.AsObject>,
        controlsArm: boolean,
        controlsLegs: boolean,
        controlsBody: boolean,
        controlsGripper: boolean,
        trackSwingTrajectories: boolean,
        assumeZeroRollAndPitch: boolean,
        armPlayback: Animation.ArmPlayback,
        bpm: number,
        retimeToIntegerSlices: boolean,
        minimumParameters?: bosdyn_api_spot_choreography_params_pb.AnimateParams.AsObject,
        defaultParameters?: bosdyn_api_spot_choreography_params_pb.AnimateParams.AsObject,
        maximumParameters?: bosdyn_api_spot_choreography_params_pb.AnimateParams.AsObject,
        truncatable: boolean,
        extendable: boolean,
        neutralStart: boolean,
        preciseSteps: boolean,
        preciseTiming: boolean,
        timingAdjustability: number,
        armRequired: boolean,
        armProhibited: boolean,
        noLooping: boolean,
        startsSitting: boolean,
        customGaitCycle: boolean,
    }

    export enum ArmPlayback {
    ARM_PLAYBACK_DEFAULT = 0,
    ARM_PLAYBACK_JOINTSPACE = 1,
    ARM_PLAYBACK_WORKSPACE = 2,
    ARM_PLAYBACK_WORKSPACE_DANCE_FRAME = 3,
    }

}

export class AnimationKeyframe extends jspb.Message { 
    getTime(): number;
    setTime(value: number): AnimationKeyframe;

    hasGripper(): boolean;
    clearGripper(): void;
    getGripper(): AnimateGripper | undefined;
    setGripper(value?: AnimateGripper): AnimationKeyframe;

    hasArm(): boolean;
    clearArm(): void;
    getArm(): AnimateArm | undefined;
    setArm(value?: AnimateArm): AnimationKeyframe;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): AnimateBody | undefined;
    setBody(value?: AnimateBody): AnimationKeyframe;

    hasLegs(): boolean;
    clearLegs(): void;
    getLegs(): AnimateLegs | undefined;
    setLegs(value?: AnimateLegs): AnimationKeyframe;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnimationKeyframe.AsObject;
    static toObject(includeInstance: boolean, msg: AnimationKeyframe): AnimationKeyframe.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnimationKeyframe, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnimationKeyframe;
    static deserializeBinaryFromReader(message: AnimationKeyframe, reader: jspb.BinaryReader): AnimationKeyframe;
}

export namespace AnimationKeyframe {
    export type AsObject = {
        time: number,
        gripper?: AnimateGripper.AsObject,
        arm?: AnimateArm.AsObject,
        body?: AnimateBody.AsObject,
        legs?: AnimateLegs.AsObject,
    }
}

export class AnimateGripper extends jspb.Message { 

    hasGripperAngle(): boolean;
    clearGripperAngle(): void;
    getGripperAngle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGripperAngle(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateGripper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnimateGripper.AsObject;
    static toObject(includeInstance: boolean, msg: AnimateGripper): AnimateGripper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnimateGripper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnimateGripper;
    static deserializeBinaryFromReader(message: AnimateGripper, reader: jspb.BinaryReader): AnimateGripper;
}

export namespace AnimateGripper {
    export type AsObject = {
        gripperAngle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class AnimateArm extends jspb.Message { 

    hasJointAngles(): boolean;
    clearJointAngles(): void;
    getJointAngles(): ArmJointAngles | undefined;
    setJointAngles(value?: ArmJointAngles): AnimateArm;

    hasHandPose(): boolean;
    clearHandPose(): void;
    getHandPose(): AnimateArm.HandPose | undefined;
    setHandPose(value?: AnimateArm.HandPose): AnimateArm;

    getArmCase(): AnimateArm.ArmCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnimateArm.AsObject;
    static toObject(includeInstance: boolean, msg: AnimateArm): AnimateArm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnimateArm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnimateArm;
    static deserializeBinaryFromReader(message: AnimateArm, reader: jspb.BinaryReader): AnimateArm;
}

export namespace AnimateArm {
    export type AsObject = {
        jointAngles?: ArmJointAngles.AsObject,
        handPose?: AnimateArm.HandPose.AsObject,
    }


    export class HandPose extends jspb.Message { 

        hasPosition(): boolean;
        clearPosition(): void;
        getPosition(): bosdyn_api_geometry_pb.Vec3Value | undefined;
        setPosition(value?: bosdyn_api_geometry_pb.Vec3Value): HandPose;

        hasEulerAngles(): boolean;
        clearEulerAngles(): void;
        getEulerAngles(): bosdyn_api_spot_choreography_params_pb.EulerZYXValue | undefined;
        setEulerAngles(value?: bosdyn_api_spot_choreography_params_pb.EulerZYXValue): HandPose;

        hasQuaternion(): boolean;
        clearQuaternion(): void;
        getQuaternion(): bosdyn_api_geometry_pb.Quaternion | undefined;
        setQuaternion(value?: bosdyn_api_geometry_pb.Quaternion): HandPose;

        getOrientationCase(): HandPose.OrientationCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HandPose.AsObject;
        static toObject(includeInstance: boolean, msg: HandPose): HandPose.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HandPose, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HandPose;
        static deserializeBinaryFromReader(message: HandPose, reader: jspb.BinaryReader): HandPose;
    }

    export namespace HandPose {
        export type AsObject = {
            position?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
            eulerAngles?: bosdyn_api_spot_choreography_params_pb.EulerZYXValue.AsObject,
            quaternion?: bosdyn_api_geometry_pb.Quaternion.AsObject,
        }

        export enum OrientationCase {
            ORIENTATION_NOT_SET = 0,
            EULER_ANGLES = 3,
            QUATERNION = 4,
        }

    }


    export enum ArmCase {
        ARM_NOT_SET = 0,
        JOINT_ANGLES = 1,
        HAND_POSE = 2,
    }

}

export class ArmJointAngles extends jspb.Message { 

    hasShoulder0(): boolean;
    clearShoulder0(): void;
    getShoulder0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setShoulder0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointAngles;

    hasShoulder1(): boolean;
    clearShoulder1(): void;
    getShoulder1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setShoulder1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointAngles;

    hasElbow0(): boolean;
    clearElbow0(): void;
    getElbow0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setElbow0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointAngles;

    hasElbow1(): boolean;
    clearElbow1(): void;
    getElbow1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setElbow1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointAngles;

    hasWrist0(): boolean;
    clearWrist0(): void;
    getWrist0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWrist0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointAngles;

    hasWrist1(): boolean;
    clearWrist1(): void;
    getWrist1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWrist1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointAngles;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmJointAngles.AsObject;
    static toObject(includeInstance: boolean, msg: ArmJointAngles): ArmJointAngles.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmJointAngles, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmJointAngles;
    static deserializeBinaryFromReader(message: ArmJointAngles, reader: jspb.BinaryReader): ArmJointAngles;
}

export namespace ArmJointAngles {
    export type AsObject = {
        shoulder0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        shoulder1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        elbow0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        elbow1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wrist0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wrist1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class AnimateBody extends jspb.Message { 

    hasBodyPos(): boolean;
    clearBodyPos(): void;
    getBodyPos(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setBodyPos(value?: bosdyn_api_geometry_pb.Vec3Value): AnimateBody;

    hasComPos(): boolean;
    clearComPos(): void;
    getComPos(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setComPos(value?: bosdyn_api_geometry_pb.Vec3Value): AnimateBody;

    hasEulerAngles(): boolean;
    clearEulerAngles(): void;
    getEulerAngles(): bosdyn_api_spot_choreography_params_pb.EulerZYXValue | undefined;
    setEulerAngles(value?: bosdyn_api_spot_choreography_params_pb.EulerZYXValue): AnimateBody;

    hasQuaternion(): boolean;
    clearQuaternion(): void;
    getQuaternion(): bosdyn_api_geometry_pb.Quaternion | undefined;
    setQuaternion(value?: bosdyn_api_geometry_pb.Quaternion): AnimateBody;

    getPositionCase(): AnimateBody.PositionCase;
    getOrientationCase(): AnimateBody.OrientationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnimateBody.AsObject;
    static toObject(includeInstance: boolean, msg: AnimateBody): AnimateBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnimateBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnimateBody;
    static deserializeBinaryFromReader(message: AnimateBody, reader: jspb.BinaryReader): AnimateBody;
}

export namespace AnimateBody {
    export type AsObject = {
        bodyPos?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        comPos?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        eulerAngles?: bosdyn_api_spot_choreography_params_pb.EulerZYXValue.AsObject,
        quaternion?: bosdyn_api_geometry_pb.Quaternion.AsObject,
    }

    export enum PositionCase {
        POSITION_NOT_SET = 0,
        BODY_POS = 1,
        COM_POS = 2,
    }

    export enum OrientationCase {
        ORIENTATION_NOT_SET = 0,
        EULER_ANGLES = 3,
        QUATERNION = 4,
    }

}

export class AnimateLegs extends jspb.Message { 

    hasFl(): boolean;
    clearFl(): void;
    getFl(): AnimateSingleLeg | undefined;
    setFl(value?: AnimateSingleLeg): AnimateLegs;

    hasFr(): boolean;
    clearFr(): void;
    getFr(): AnimateSingleLeg | undefined;
    setFr(value?: AnimateSingleLeg): AnimateLegs;

    hasHl(): boolean;
    clearHl(): void;
    getHl(): AnimateSingleLeg | undefined;
    setHl(value?: AnimateSingleLeg): AnimateLegs;

    hasHr(): boolean;
    clearHr(): void;
    getHr(): AnimateSingleLeg | undefined;
    setHr(value?: AnimateSingleLeg): AnimateLegs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnimateLegs.AsObject;
    static toObject(includeInstance: boolean, msg: AnimateLegs): AnimateLegs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnimateLegs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnimateLegs;
    static deserializeBinaryFromReader(message: AnimateLegs, reader: jspb.BinaryReader): AnimateLegs;
}

export namespace AnimateLegs {
    export type AsObject = {
        fl?: AnimateSingleLeg.AsObject,
        fr?: AnimateSingleLeg.AsObject,
        hl?: AnimateSingleLeg.AsObject,
        hr?: AnimateSingleLeg.AsObject,
    }
}

export class AnimateSingleLeg extends jspb.Message { 

    hasJointAngles(): boolean;
    clearJointAngles(): void;
    getJointAngles(): LegJointAngles | undefined;
    setJointAngles(value?: LegJointAngles): AnimateSingleLeg;

    hasFootPos(): boolean;
    clearFootPos(): void;
    getFootPos(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setFootPos(value?: bosdyn_api_geometry_pb.Vec3Value): AnimateSingleLeg;

    hasStance(): boolean;
    clearStance(): void;
    getStance(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setStance(value?: google_protobuf_wrappers_pb.BoolValue): AnimateSingleLeg;

    getLegCase(): AnimateSingleLeg.LegCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnimateSingleLeg.AsObject;
    static toObject(includeInstance: boolean, msg: AnimateSingleLeg): AnimateSingleLeg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnimateSingleLeg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnimateSingleLeg;
    static deserializeBinaryFromReader(message: AnimateSingleLeg, reader: jspb.BinaryReader): AnimateSingleLeg;
}

export namespace AnimateSingleLeg {
    export type AsObject = {
        jointAngles?: LegJointAngles.AsObject,
        footPos?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        stance?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export enum LegCase {
        LEG_NOT_SET = 0,
        JOINT_ANGLES = 1,
        FOOT_POS = 2,
    }

}

export class LegJointAngles extends jspb.Message { 
    getHipX(): number;
    setHipX(value: number): LegJointAngles;
    getHipY(): number;
    setHipY(value: number): LegJointAngles;
    getKnee(): number;
    setKnee(value: number): LegJointAngles;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegJointAngles.AsObject;
    static toObject(includeInstance: boolean, msg: LegJointAngles): LegJointAngles.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegJointAngles, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegJointAngles;
    static deserializeBinaryFromReader(message: LegJointAngles, reader: jspb.BinaryReader): LegJointAngles;
}

export namespace LegJointAngles {
    export type AsObject = {
        hipX: number,
        hipY: number,
        knee: number,
    }
}

export class ActiveMove extends jspb.Message { 

    hasMove(): boolean;
    clearMove(): void;
    getMove(): MoveParams | undefined;
    setMove(value?: MoveParams): ActiveMove;

    hasCustomGaitCommandLimits(): boolean;
    clearCustomGaitCommandLimits(): void;
    getCustomGaitCommandLimits(): bosdyn_api_spot_choreography_params_pb.CustomGaitCommandLimits | undefined;
    setCustomGaitCommandLimits(value?: bosdyn_api_spot_choreography_params_pb.CustomGaitCommandLimits): ActiveMove;

    getCommandLimitsCase(): ActiveMove.CommandLimitsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveMove.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveMove): ActiveMove.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveMove, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveMove;
    static deserializeBinaryFromReader(message: ActiveMove, reader: jspb.BinaryReader): ActiveMove;
}

export namespace ActiveMove {
    export type AsObject = {
        move?: MoveParams.AsObject,
        customGaitCommandLimits?: bosdyn_api_spot_choreography_params_pb.CustomGaitCommandLimits.AsObject,
    }

    export enum CommandLimitsCase {
        COMMAND_LIMITS_NOT_SET = 0,
        CUSTOM_GAIT_COMMAND_LIMITS = 2,
    }

}

export class ChoreographyStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ChoreographyStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyStatusRequest): ChoreographyStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyStatusRequest;
    static deserializeBinaryFromReader(message: ChoreographyStatusRequest, reader: jspb.BinaryReader): ChoreographyStatusRequest;
}

export namespace ChoreographyStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ChoreographyStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ChoreographyStatusResponse;
    getStatus(): ChoreographyStatusResponse.Status;
    setStatus(value: ChoreographyStatusResponse.Status): ChoreographyStatusResponse;
    getExecutionId(): number;
    setExecutionId(value: number): ChoreographyStatusResponse;
    getCurrentSlice(): number;
    setCurrentSlice(value: number): ChoreographyStatusResponse;
    clearActiveMovesList(): void;
    getActiveMovesList(): Array<ActiveMove>;
    setActiveMovesList(value: Array<ActiveMove>): ChoreographyStatusResponse;
    addActiveMoves(value?: ActiveMove, index?: number): ActiveMove;
    getSequenceSlices(): number;
    setSequenceSlices(value: number): ChoreographyStatusResponse;
    getSequenceSlicesPerMinute(): number;
    setSequenceSlicesPerMinute(value: number): ChoreographyStatusResponse;

    hasValidityTime(): boolean;
    clearValidityTime(): void;
    getValidityTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setValidityTime(value?: google_protobuf_timestamp_pb.Timestamp): ChoreographyStatusResponse;
    getSequenceName(): string;
    setSequenceName(value: string): ChoreographyStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyStatusResponse): ChoreographyStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyStatusResponse;
    static deserializeBinaryFromReader(message: ChoreographyStatusResponse, reader: jspb.BinaryReader): ChoreographyStatusResponse;
}

export namespace ChoreographyStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ChoreographyStatusResponse.Status,
        executionId: number,
        currentSlice: number,
        activeMovesList: Array<ActiveMove.AsObject>,
        sequenceSlices: number,
        sequenceSlicesPerMinute: number,
        validityTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sequenceName: string,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_DANCING = 1,
    STATUS_COMPLETED_SEQUENCE = 2,
    STATUS_PREPPING = 3,
    STATUS_WAITING_FOR_START_TIME = 4,
    STATUS_VALIDATING = 5,
    STATUS_INTERRUPTED = 6,
    STATUS_FALLEN = 7,
    STATUS_POWERED_OFF = 8,
    STATUS_OTHER = 9,
    }

}

export class ChoreographyTimeAdjustRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ChoreographyTimeAdjustRequest;

    hasOverrideStartTime(): boolean;
    clearOverrideStartTime(): void;
    getOverrideStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOverrideStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ChoreographyTimeAdjustRequest;

    hasAcceptableTimeDifference(): boolean;
    clearAcceptableTimeDifference(): void;
    getAcceptableTimeDifference(): google_protobuf_duration_pb.Duration | undefined;
    setAcceptableTimeDifference(value?: google_protobuf_duration_pb.Duration): ChoreographyTimeAdjustRequest;

    hasValidityTime(): boolean;
    clearValidityTime(): void;
    getValidityTime(): google_protobuf_duration_pb.Duration | undefined;
    setValidityTime(value?: google_protobuf_duration_pb.Duration): ChoreographyTimeAdjustRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyTimeAdjustRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyTimeAdjustRequest): ChoreographyTimeAdjustRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyTimeAdjustRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyTimeAdjustRequest;
    static deserializeBinaryFromReader(message: ChoreographyTimeAdjustRequest, reader: jspb.BinaryReader): ChoreographyTimeAdjustRequest;
}

export namespace ChoreographyTimeAdjustRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        overrideStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        acceptableTimeDifference?: google_protobuf_duration_pb.Duration.AsObject,
        validityTime?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ChoreographyTimeAdjustResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ChoreographyTimeAdjustResponse;
    getStatus(): ChoreographyTimeAdjustResponse.Status;
    setStatus(value: ChoreographyTimeAdjustResponse.Status): ChoreographyTimeAdjustResponse;
    clearWarningsList(): void;
    getWarningsList(): Array<string>;
    setWarningsList(value: Array<string>): ChoreographyTimeAdjustResponse;
    addWarnings(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoreographyTimeAdjustResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChoreographyTimeAdjustResponse): ChoreographyTimeAdjustResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoreographyTimeAdjustResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoreographyTimeAdjustResponse;
    static deserializeBinaryFromReader(message: ChoreographyTimeAdjustResponse, reader: jspb.BinaryReader): ChoreographyTimeAdjustResponse;
}

export namespace ChoreographyTimeAdjustResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ChoreographyTimeAdjustResponse.Status,
        warningsList: Array<string>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_BEFORE_CURRENT_TIME = 2,
    STATUS_EXCEEDS_VALIDITY_TIME = 3,
    STATUS_OVERRIDE_TIME_UNSET = 4,
    }

}

export class LegSize extends jspb.Message { 
    getDistanceInward(): number;
    setDistanceInward(value: number): LegSize;
    getDistanceOutward(): number;
    setDistanceOutward(value: number): LegSize;
    getDistanceForward(): number;
    setDistanceForward(value: number): LegSize;
    getDistanceBackward(): number;
    setDistanceBackward(value: number): LegSize;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegSize.AsObject;
    static toObject(includeInstance: boolean, msg: LegSize): LegSize.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegSize, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegSize;
    static deserializeBinaryFromReader(message: LegSize, reader: jspb.BinaryReader): LegSize;
}

export namespace LegSize {
    export type AsObject = {
        distanceInward: number,
        distanceOutward: number,
        distanceForward: number,
        distanceBackward: number,
    }
}

export class LegSizeConfigurationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): LegSizeConfigurationRequest;

    hasFrontLeftSize(): boolean;
    clearFrontLeftSize(): void;
    getFrontLeftSize(): LegSize | undefined;
    setFrontLeftSize(value?: LegSize): LegSizeConfigurationRequest;

    hasFrontRightSize(): boolean;
    clearFrontRightSize(): void;
    getFrontRightSize(): LegSize | undefined;
    setFrontRightSize(value?: LegSize): LegSizeConfigurationRequest;

    hasHindLeftSize(): boolean;
    clearHindLeftSize(): void;
    getHindLeftSize(): LegSize | undefined;
    setHindLeftSize(value?: LegSize): LegSizeConfigurationRequest;

    hasHindRightSize(): boolean;
    clearHindRightSize(): void;
    getHindRightSize(): LegSize | undefined;
    setHindRightSize(value?: LegSize): LegSizeConfigurationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegSizeConfigurationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LegSizeConfigurationRequest): LegSizeConfigurationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegSizeConfigurationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegSizeConfigurationRequest;
    static deserializeBinaryFromReader(message: LegSizeConfigurationRequest, reader: jspb.BinaryReader): LegSizeConfigurationRequest;
}

export namespace LegSizeConfigurationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        frontLeftSize?: LegSize.AsObject,
        frontRightSize?: LegSize.AsObject,
        hindLeftSize?: LegSize.AsObject,
        hindRightSize?: LegSize.AsObject,
    }
}

export class LegSizeConfigurationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): LegSizeConfigurationResponse;
    getStatus(): LegSizeConfigurationResponse.Status;
    setStatus(value: LegSizeConfigurationResponse.Status): LegSizeConfigurationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegSizeConfigurationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LegSizeConfigurationResponse): LegSizeConfigurationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegSizeConfigurationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegSizeConfigurationResponse;
    static deserializeBinaryFromReader(message: LegSizeConfigurationResponse, reader: jspb.BinaryReader): LegSizeConfigurationResponse;
}

export namespace LegSizeConfigurationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: LegSizeConfigurationResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_EXCEEDS_LIMITS = 2,
    }

}

export class LegSizeConfigurationStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): LegSizeConfigurationStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegSizeConfigurationStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LegSizeConfigurationStateRequest): LegSizeConfigurationStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegSizeConfigurationStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegSizeConfigurationStateRequest;
    static deserializeBinaryFromReader(message: LegSizeConfigurationStateRequest, reader: jspb.BinaryReader): LegSizeConfigurationStateRequest;
}

export namespace LegSizeConfigurationStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class LegSizeConfigurationStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): LegSizeConfigurationStateResponse;

    hasFrontLeftSize(): boolean;
    clearFrontLeftSize(): void;
    getFrontLeftSize(): LegSize | undefined;
    setFrontLeftSize(value?: LegSize): LegSizeConfigurationStateResponse;

    hasFrontRightSize(): boolean;
    clearFrontRightSize(): void;
    getFrontRightSize(): LegSize | undefined;
    setFrontRightSize(value?: LegSize): LegSizeConfigurationStateResponse;

    hasHindLeftSize(): boolean;
    clearHindLeftSize(): void;
    getHindLeftSize(): LegSize | undefined;
    setHindLeftSize(value?: LegSize): LegSizeConfigurationStateResponse;

    hasHindRightSize(): boolean;
    clearHindRightSize(): void;
    getHindRightSize(): LegSize | undefined;
    setHindRightSize(value?: LegSize): LegSizeConfigurationStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegSizeConfigurationStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LegSizeConfigurationStateResponse): LegSizeConfigurationStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegSizeConfigurationStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegSizeConfigurationStateResponse;
    static deserializeBinaryFromReader(message: LegSizeConfigurationStateResponse, reader: jspb.BinaryReader): LegSizeConfigurationStateResponse;
}

export namespace LegSizeConfigurationStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        frontLeftSize?: LegSize.AsObject,
        frontRightSize?: LegSize.AsObject,
        hindLeftSize?: LegSize.AsObject,
        hindRightSize?: LegSize.AsObject,
    }
}
