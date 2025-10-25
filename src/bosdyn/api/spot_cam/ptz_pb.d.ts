// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/ptz.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";

export class PtzDescription extends jspb.Message { 
    getName(): string;
    setName(value: string): PtzDescription;

    hasPanLimit(): boolean;
    clearPanLimit(): void;
    getPanLimit(): PtzDescription.Limits | undefined;
    setPanLimit(value?: PtzDescription.Limits): PtzDescription;

    hasTiltLimit(): boolean;
    clearTiltLimit(): void;
    getTiltLimit(): PtzDescription.Limits | undefined;
    setTiltLimit(value?: PtzDescription.Limits): PtzDescription;

    hasZoomLimit(): boolean;
    clearZoomLimit(): void;
    getZoomLimit(): PtzDescription.Limits | undefined;
    setZoomLimit(value?: PtzDescription.Limits): PtzDescription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PtzDescription.AsObject;
    static toObject(includeInstance: boolean, msg: PtzDescription): PtzDescription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PtzDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PtzDescription;
    static deserializeBinaryFromReader(message: PtzDescription, reader: jspb.BinaryReader): PtzDescription;
}

export namespace PtzDescription {
    export type AsObject = {
        name: string,
        panLimit?: PtzDescription.Limits.AsObject,
        tiltLimit?: PtzDescription.Limits.AsObject,
        zoomLimit?: PtzDescription.Limits.AsObject,
    }


    export class Limits extends jspb.Message { 

        hasMin(): boolean;
        clearMin(): void;
        getMin(): google_protobuf_wrappers_pb.FloatValue | undefined;
        setMin(value?: google_protobuf_wrappers_pb.FloatValue): Limits;

        hasMax(): boolean;
        clearMax(): void;
        getMax(): google_protobuf_wrappers_pb.FloatValue | undefined;
        setMax(value?: google_protobuf_wrappers_pb.FloatValue): Limits;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Limits.AsObject;
        static toObject(includeInstance: boolean, msg: Limits): Limits.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Limits, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Limits;
        static deserializeBinaryFromReader(message: Limits, reader: jspb.BinaryReader): Limits;
    }

    export namespace Limits {
        export type AsObject = {
            min?: google_protobuf_wrappers_pb.FloatValue.AsObject,
            max?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        }
    }

}

export class PtzPosition extends jspb.Message { 

    hasPtz(): boolean;
    clearPtz(): void;
    getPtz(): PtzDescription | undefined;
    setPtz(value?: PtzDescription): PtzPosition;

    hasPan(): boolean;
    clearPan(): void;
    getPan(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setPan(value?: google_protobuf_wrappers_pb.FloatValue): PtzPosition;

    hasTilt(): boolean;
    clearTilt(): void;
    getTilt(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setTilt(value?: google_protobuf_wrappers_pb.FloatValue): PtzPosition;

    hasZoom(): boolean;
    clearZoom(): void;
    getZoom(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setZoom(value?: google_protobuf_wrappers_pb.FloatValue): PtzPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PtzPosition.AsObject;
    static toObject(includeInstance: boolean, msg: PtzPosition): PtzPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PtzPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PtzPosition;
    static deserializeBinaryFromReader(message: PtzPosition, reader: jspb.BinaryReader): PtzPosition;
}

export namespace PtzPosition {
    export type AsObject = {
        ptz?: PtzDescription.AsObject,
        pan?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        tilt?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        zoom?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }
}

export class PtzVelocity extends jspb.Message { 

    hasPtz(): boolean;
    clearPtz(): void;
    getPtz(): PtzDescription | undefined;
    setPtz(value?: PtzDescription): PtzVelocity;

    hasPan(): boolean;
    clearPan(): void;
    getPan(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setPan(value?: google_protobuf_wrappers_pb.FloatValue): PtzVelocity;

    hasTilt(): boolean;
    clearTilt(): void;
    getTilt(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setTilt(value?: google_protobuf_wrappers_pb.FloatValue): PtzVelocity;

    hasZoom(): boolean;
    clearZoom(): void;
    getZoom(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setZoom(value?: google_protobuf_wrappers_pb.FloatValue): PtzVelocity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PtzVelocity.AsObject;
    static toObject(includeInstance: boolean, msg: PtzVelocity): PtzVelocity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PtzVelocity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PtzVelocity;
    static deserializeBinaryFromReader(message: PtzVelocity, reader: jspb.BinaryReader): PtzVelocity;
}

export namespace PtzVelocity {
    export type AsObject = {
        ptz?: PtzDescription.AsObject,
        pan?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        tilt?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        zoom?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }
}

export class GetPtzPositionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetPtzPositionRequest;

    hasPtz(): boolean;
    clearPtz(): void;
    getPtz(): PtzDescription | undefined;
    setPtz(value?: PtzDescription): GetPtzPositionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPtzPositionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPtzPositionRequest): GetPtzPositionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPtzPositionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPtzPositionRequest;
    static deserializeBinaryFromReader(message: GetPtzPositionRequest, reader: jspb.BinaryReader): GetPtzPositionRequest;
}

export namespace GetPtzPositionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        ptz?: PtzDescription.AsObject,
    }
}

export class GetPtzPositionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetPtzPositionResponse;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PtzPosition | undefined;
    setPosition(value?: PtzPosition): GetPtzPositionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPtzPositionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPtzPositionResponse): GetPtzPositionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPtzPositionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPtzPositionResponse;
    static deserializeBinaryFromReader(message: GetPtzPositionResponse, reader: jspb.BinaryReader): GetPtzPositionResponse;
}

export namespace GetPtzPositionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        position?: PtzPosition.AsObject,
    }
}

export class GetPtzVelocityRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetPtzVelocityRequest;

    hasPtz(): boolean;
    clearPtz(): void;
    getPtz(): PtzDescription | undefined;
    setPtz(value?: PtzDescription): GetPtzVelocityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPtzVelocityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPtzVelocityRequest): GetPtzVelocityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPtzVelocityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPtzVelocityRequest;
    static deserializeBinaryFromReader(message: GetPtzVelocityRequest, reader: jspb.BinaryReader): GetPtzVelocityRequest;
}

export namespace GetPtzVelocityRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        ptz?: PtzDescription.AsObject,
    }
}

export class GetPtzVelocityResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetPtzVelocityResponse;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): PtzVelocity | undefined;
    setVelocity(value?: PtzVelocity): GetPtzVelocityResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPtzVelocityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPtzVelocityResponse): GetPtzVelocityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPtzVelocityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPtzVelocityResponse;
    static deserializeBinaryFromReader(message: GetPtzVelocityResponse, reader: jspb.BinaryReader): GetPtzVelocityResponse;
}

export namespace GetPtzVelocityResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        velocity?: PtzVelocity.AsObject,
    }
}

export class ListPtzRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListPtzRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPtzRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPtzRequest): ListPtzRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPtzRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPtzRequest;
    static deserializeBinaryFromReader(message: ListPtzRequest, reader: jspb.BinaryReader): ListPtzRequest;
}

export namespace ListPtzRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListPtzResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListPtzResponse;
    clearPtzsList(): void;
    getPtzsList(): Array<PtzDescription>;
    setPtzsList(value: Array<PtzDescription>): ListPtzResponse;
    addPtzs(value?: PtzDescription, index?: number): PtzDescription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPtzResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPtzResponse): ListPtzResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPtzResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPtzResponse;
    static deserializeBinaryFromReader(message: ListPtzResponse, reader: jspb.BinaryReader): ListPtzResponse;
}

export namespace ListPtzResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        ptzsList: Array<PtzDescription.AsObject>,
    }
}

export class SetPtzPositionRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetPtzPositionRequest;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PtzPosition | undefined;
    setPosition(value?: PtzPosition): SetPtzPositionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPtzPositionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPtzPositionRequest): SetPtzPositionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPtzPositionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPtzPositionRequest;
    static deserializeBinaryFromReader(message: SetPtzPositionRequest, reader: jspb.BinaryReader): SetPtzPositionRequest;
}

export namespace SetPtzPositionRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        position?: PtzPosition.AsObject,
    }
}

export class SetPtzPositionResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetPtzPositionResponse;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PtzPosition | undefined;
    setPosition(value?: PtzPosition): SetPtzPositionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPtzPositionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetPtzPositionResponse): SetPtzPositionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPtzPositionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPtzPositionResponse;
    static deserializeBinaryFromReader(message: SetPtzPositionResponse, reader: jspb.BinaryReader): SetPtzPositionResponse;
}

export namespace SetPtzPositionResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        position?: PtzPosition.AsObject,
    }
}

export class SetPtzVelocityRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetPtzVelocityRequest;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): PtzVelocity | undefined;
    setVelocity(value?: PtzVelocity): SetPtzVelocityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPtzVelocityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPtzVelocityRequest): SetPtzVelocityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPtzVelocityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPtzVelocityRequest;
    static deserializeBinaryFromReader(message: SetPtzVelocityRequest, reader: jspb.BinaryReader): SetPtzVelocityRequest;
}

export namespace SetPtzVelocityRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        velocity?: PtzVelocity.AsObject,
    }
}

export class SetPtzVelocityResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetPtzVelocityResponse;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): PtzVelocity | undefined;
    setVelocity(value?: PtzVelocity): SetPtzVelocityResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPtzVelocityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetPtzVelocityResponse): SetPtzVelocityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPtzVelocityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPtzVelocityResponse;
    static deserializeBinaryFromReader(message: SetPtzVelocityResponse, reader: jspb.BinaryReader): SetPtzVelocityResponse;
}

export namespace SetPtzVelocityResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        velocity?: PtzVelocity.AsObject,
    }
}

export class InitializeLensRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): InitializeLensRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitializeLensRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InitializeLensRequest): InitializeLensRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitializeLensRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitializeLensRequest;
    static deserializeBinaryFromReader(message: InitializeLensRequest, reader: jspb.BinaryReader): InitializeLensRequest;
}

export namespace InitializeLensRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class InitializeLensResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): InitializeLensResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitializeLensResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InitializeLensResponse): InitializeLensResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitializeLensResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitializeLensResponse;
    static deserializeBinaryFromReader(message: InitializeLensResponse, reader: jspb.BinaryReader): InitializeLensResponse;
}

export namespace InitializeLensResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class PtzFocusState extends jspb.Message { 
    getMode(): PtzFocusState.PtzFocusMode;
    setMode(value: PtzFocusState.PtzFocusMode): PtzFocusState;

    hasFocusPosition(): boolean;
    clearFocusPosition(): void;
    getFocusPosition(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setFocusPosition(value?: google_protobuf_wrappers_pb.Int32Value): PtzFocusState;

    hasApproxDistance(): boolean;
    clearApproxDistance(): void;
    getApproxDistance(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setApproxDistance(value?: google_protobuf_wrappers_pb.FloatValue): PtzFocusState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PtzFocusState.AsObject;
    static toObject(includeInstance: boolean, msg: PtzFocusState): PtzFocusState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PtzFocusState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PtzFocusState;
    static deserializeBinaryFromReader(message: PtzFocusState, reader: jspb.BinaryReader): PtzFocusState;
}

export namespace PtzFocusState {
    export type AsObject = {
        mode: PtzFocusState.PtzFocusMode,
        focusPosition?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        approxDistance?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }

    export enum PtzFocusMode {
    PTZ_FOCUS_UNDEFINED = 0,
    PTZ_FOCUS_AUTO = 1,
    PTZ_FOCUS_MANUAL = 2,
    }

}

export class SetPtzFocusStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetPtzFocusStateRequest;

    hasFocusState(): boolean;
    clearFocusState(): void;
    getFocusState(): PtzFocusState | undefined;
    setFocusState(value?: PtzFocusState): SetPtzFocusStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPtzFocusStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPtzFocusStateRequest): SetPtzFocusStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPtzFocusStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPtzFocusStateRequest;
    static deserializeBinaryFromReader(message: SetPtzFocusStateRequest, reader: jspb.BinaryReader): SetPtzFocusStateRequest;
}

export namespace SetPtzFocusStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        focusState?: PtzFocusState.AsObject,
    }
}

export class SetPtzFocusStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetPtzFocusStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPtzFocusStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetPtzFocusStateResponse): SetPtzFocusStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPtzFocusStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPtzFocusStateResponse;
    static deserializeBinaryFromReader(message: SetPtzFocusStateResponse, reader: jspb.BinaryReader): SetPtzFocusStateResponse;
}

export namespace SetPtzFocusStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetPtzFocusStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetPtzFocusStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPtzFocusStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPtzFocusStateRequest): GetPtzFocusStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPtzFocusStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPtzFocusStateRequest;
    static deserializeBinaryFromReader(message: GetPtzFocusStateRequest, reader: jspb.BinaryReader): GetPtzFocusStateRequest;
}

export namespace GetPtzFocusStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetPtzFocusStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetPtzFocusStateResponse;

    hasFocusState(): boolean;
    clearFocusState(): void;
    getFocusState(): PtzFocusState | undefined;
    setFocusState(value?: PtzFocusState): GetPtzFocusStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPtzFocusStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPtzFocusStateResponse): GetPtzFocusStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPtzFocusStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPtzFocusStateResponse;
    static deserializeBinaryFromReader(message: GetPtzFocusStateResponse, reader: jspb.BinaryReader): GetPtzFocusStateResponse;
}

export namespace GetPtzFocusStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        focusState?: PtzFocusState.AsObject,
    }
}
