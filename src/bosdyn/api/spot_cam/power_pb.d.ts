// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/power.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";

export class PowerStatus extends jspb.Message { 

    hasPtz(): boolean;
    clearPtz(): void;
    getPtz(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPtz(value?: google_protobuf_wrappers_pb.BoolValue): PowerStatus;

    hasAux1(): boolean;
    clearAux1(): void;
    getAux1(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAux1(value?: google_protobuf_wrappers_pb.BoolValue): PowerStatus;

    hasAux2(): boolean;
    clearAux2(): void;
    getAux2(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAux2(value?: google_protobuf_wrappers_pb.BoolValue): PowerStatus;

    hasExternalMic(): boolean;
    clearExternalMic(): void;
    getExternalMic(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExternalMic(value?: google_protobuf_wrappers_pb.BoolValue): PowerStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PowerStatus.AsObject;
    static toObject(includeInstance: boolean, msg: PowerStatus): PowerStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PowerStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PowerStatus;
    static deserializeBinaryFromReader(message: PowerStatus, reader: jspb.BinaryReader): PowerStatus;
}

export namespace PowerStatus {
    export type AsObject = {
        ptz?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        aux1?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        aux2?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        externalMic?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class GetPowerStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetPowerStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPowerStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPowerStatusRequest): GetPowerStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPowerStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPowerStatusRequest;
    static deserializeBinaryFromReader(message: GetPowerStatusRequest, reader: jspb.BinaryReader): GetPowerStatusRequest;
}

export namespace GetPowerStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetPowerStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetPowerStatusResponse;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): PowerStatus | undefined;
    setStatus(value?: PowerStatus): GetPowerStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPowerStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPowerStatusResponse): GetPowerStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPowerStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPowerStatusResponse;
    static deserializeBinaryFromReader(message: GetPowerStatusResponse, reader: jspb.BinaryReader): GetPowerStatusResponse;
}

export namespace GetPowerStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status?: PowerStatus.AsObject,
    }
}

export class SetPowerStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetPowerStatusRequest;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): PowerStatus | undefined;
    setStatus(value?: PowerStatus): SetPowerStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPowerStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPowerStatusRequest): SetPowerStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPowerStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPowerStatusRequest;
    static deserializeBinaryFromReader(message: SetPowerStatusRequest, reader: jspb.BinaryReader): SetPowerStatusRequest;
}

export namespace SetPowerStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        status?: PowerStatus.AsObject,
    }
}

export class SetPowerStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetPowerStatusResponse;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): PowerStatus | undefined;
    setStatus(value?: PowerStatus): SetPowerStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPowerStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetPowerStatusResponse): SetPowerStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPowerStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPowerStatusResponse;
    static deserializeBinaryFromReader(message: SetPowerStatusResponse, reader: jspb.BinaryReader): SetPowerStatusResponse;
}

export namespace SetPowerStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status?: PowerStatus.AsObject,
    }
}

export class CyclePowerRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): CyclePowerRequest;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): PowerStatus | undefined;
    setStatus(value?: PowerStatus): CyclePowerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CyclePowerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CyclePowerRequest): CyclePowerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CyclePowerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CyclePowerRequest;
    static deserializeBinaryFromReader(message: CyclePowerRequest, reader: jspb.BinaryReader): CyclePowerRequest;
}

export namespace CyclePowerRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        status?: PowerStatus.AsObject,
    }
}

export class CyclePowerResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): CyclePowerResponse;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): PowerStatus | undefined;
    setStatus(value?: PowerStatus): CyclePowerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CyclePowerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CyclePowerResponse): CyclePowerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CyclePowerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CyclePowerResponse;
    static deserializeBinaryFromReader(message: CyclePowerResponse, reader: jspb.BinaryReader): CyclePowerResponse;
}

export namespace CyclePowerResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status?: PowerStatus.AsObject,
    }
}
