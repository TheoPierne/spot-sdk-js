// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/streamquality.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class StreamParams extends jspb.Message { 

    hasTargetbitrate(): boolean;
    clearTargetbitrate(): void;
    getTargetbitrate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTargetbitrate(value?: google_protobuf_wrappers_pb.Int64Value): StreamParams;

    hasRefreshinterval(): boolean;
    clearRefreshinterval(): void;
    getRefreshinterval(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRefreshinterval(value?: google_protobuf_wrappers_pb.Int64Value): StreamParams;

    hasIdrinterval(): boolean;
    clearIdrinterval(): void;
    getIdrinterval(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setIdrinterval(value?: google_protobuf_wrappers_pb.Int64Value): StreamParams;

    hasAwb(): boolean;
    clearAwb(): void;
    getAwb(): StreamParams.AwbMode | undefined;
    setAwb(value?: StreamParams.AwbMode): StreamParams;

    hasAutoExposure(): boolean;
    clearAutoExposure(): void;
    getAutoExposure(): StreamParams.AutoExposure | undefined;
    setAutoExposure(value?: StreamParams.AutoExposure): StreamParams;

    hasSyncExposure(): boolean;
    clearSyncExposure(): void;
    getSyncExposure(): StreamParams.SyncAutoExposure | undefined;
    setSyncExposure(value?: StreamParams.SyncAutoExposure): StreamParams;

    hasManualExposure(): boolean;
    clearManualExposure(): void;
    getManualExposure(): StreamParams.ManualExposure | undefined;
    setManualExposure(value?: StreamParams.ManualExposure): StreamParams;

    getExposureCase(): StreamParams.ExposureCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamParams.AsObject;
    static toObject(includeInstance: boolean, msg: StreamParams): StreamParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamParams;
    static deserializeBinaryFromReader(message: StreamParams, reader: jspb.BinaryReader): StreamParams;
}

export namespace StreamParams {
    export type AsObject = {
        targetbitrate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        refreshinterval?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        idrinterval?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        awb?: StreamParams.AwbMode.AsObject,
        autoExposure?: StreamParams.AutoExposure.AsObject,
        syncExposure?: StreamParams.SyncAutoExposure.AsObject,
        manualExposure?: StreamParams.ManualExposure.AsObject,
    }


    export class AwbMode extends jspb.Message { 
        getAwb(): StreamParams.AwbModeEnum;
        setAwb(value: StreamParams.AwbModeEnum): AwbMode;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AwbMode.AsObject;
        static toObject(includeInstance: boolean, msg: AwbMode): AwbMode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AwbMode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AwbMode;
        static deserializeBinaryFromReader(message: AwbMode, reader: jspb.BinaryReader): AwbMode;
    }

    export namespace AwbMode {
        export type AsObject = {
            awb: StreamParams.AwbModeEnum,
        }
    }

    export class AutoExposure extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AutoExposure.AsObject;
        static toObject(includeInstance: boolean, msg: AutoExposure): AutoExposure.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AutoExposure, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AutoExposure;
        static deserializeBinaryFromReader(message: AutoExposure, reader: jspb.BinaryReader): AutoExposure;
    }

    export namespace AutoExposure {
        export type AsObject = {
        }
    }

    export class SyncAutoExposure extends jspb.Message { 

        hasBrightnessTarget(): boolean;
        clearBrightnessTarget(): void;
        getBrightnessTarget(): google_protobuf_wrappers_pb.Int32Value | undefined;
        setBrightnessTarget(value?: google_protobuf_wrappers_pb.Int32Value): SyncAutoExposure;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SyncAutoExposure.AsObject;
        static toObject(includeInstance: boolean, msg: SyncAutoExposure): SyncAutoExposure.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SyncAutoExposure, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SyncAutoExposure;
        static deserializeBinaryFromReader(message: SyncAutoExposure, reader: jspb.BinaryReader): SyncAutoExposure;
    }

    export namespace SyncAutoExposure {
        export type AsObject = {
            brightnessTarget?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        }
    }

    export class ManualExposure extends jspb.Message { 

        hasExposure(): boolean;
        clearExposure(): void;
        getExposure(): google_protobuf_duration_pb.Duration | undefined;
        setExposure(value?: google_protobuf_duration_pb.Duration): ManualExposure;

        hasGain(): boolean;
        clearGain(): void;
        getGain(): google_protobuf_wrappers_pb.FloatValue | undefined;
        setGain(value?: google_protobuf_wrappers_pb.FloatValue): ManualExposure;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ManualExposure.AsObject;
        static toObject(includeInstance: boolean, msg: ManualExposure): ManualExposure.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ManualExposure, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ManualExposure;
        static deserializeBinaryFromReader(message: ManualExposure, reader: jspb.BinaryReader): ManualExposure;
    }

    export namespace ManualExposure {
        export type AsObject = {
            exposure?: google_protobuf_duration_pb.Duration.AsObject,
            gain?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        }
    }


    export enum AwbModeEnum {
    OFF = 0,
    AUTO = 1,
    INCANDESCENT = 2,
    FLUORESCENT = 3,
    WARM_FLUORESCENT = 4,
    DAYLIGHT = 5,
    CLOUDY = 6,
    TWILIGHT = 7,
    SHADE = 8,
    DARK = 9,
    }


    export enum ExposureCase {
        EXPOSURE_NOT_SET = 0,
        AUTO_EXPOSURE = 5,
        SYNC_EXPOSURE = 6,
        MANUAL_EXPOSURE = 7,
    }

}

export class GetStreamParamsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetStreamParamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStreamParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStreamParamsRequest): GetStreamParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStreamParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStreamParamsRequest;
    static deserializeBinaryFromReader(message: GetStreamParamsRequest, reader: jspb.BinaryReader): GetStreamParamsRequest;
}

export namespace GetStreamParamsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetStreamParamsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetStreamParamsResponse;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): StreamParams | undefined;
    setParams(value?: StreamParams): GetStreamParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStreamParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStreamParamsResponse): GetStreamParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStreamParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStreamParamsResponse;
    static deserializeBinaryFromReader(message: GetStreamParamsResponse, reader: jspb.BinaryReader): GetStreamParamsResponse;
}

export namespace GetStreamParamsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        params?: StreamParams.AsObject,
    }
}

export class SetStreamParamsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetStreamParamsRequest;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): StreamParams | undefined;
    setParams(value?: StreamParams): SetStreamParamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetStreamParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetStreamParamsRequest): SetStreamParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetStreamParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetStreamParamsRequest;
    static deserializeBinaryFromReader(message: SetStreamParamsRequest, reader: jspb.BinaryReader): SetStreamParamsRequest;
}

export namespace SetStreamParamsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        params?: StreamParams.AsObject,
    }
}

export class SetStreamParamsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetStreamParamsResponse;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): StreamParams | undefined;
    setParams(value?: StreamParams): SetStreamParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetStreamParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetStreamParamsResponse): SetStreamParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetStreamParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetStreamParamsResponse;
    static deserializeBinaryFromReader(message: SetStreamParamsResponse, reader: jspb.BinaryReader): SetStreamParamsResponse;
}

export namespace SetStreamParamsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        params?: StreamParams.AsObject,
    }
}

export class EnableCongestionControlRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): EnableCongestionControlRequest;
    getEnableCongestionControl(): boolean;
    setEnableCongestionControl(value: boolean): EnableCongestionControlRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnableCongestionControlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EnableCongestionControlRequest): EnableCongestionControlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnableCongestionControlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnableCongestionControlRequest;
    static deserializeBinaryFromReader(message: EnableCongestionControlRequest, reader: jspb.BinaryReader): EnableCongestionControlRequest;
}

export namespace EnableCongestionControlRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        enableCongestionControl: boolean,
    }
}

export class EnableCongestionControlResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): EnableCongestionControlResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnableCongestionControlResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EnableCongestionControlResponse): EnableCongestionControlResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnableCongestionControlResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnableCongestionControlResponse;
    static deserializeBinaryFromReader(message: EnableCongestionControlResponse, reader: jspb.BinaryReader): EnableCongestionControlResponse;
}

export namespace EnableCongestionControlResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
