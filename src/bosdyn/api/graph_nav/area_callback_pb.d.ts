// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/area_callback.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as bosdyn_api_service_customization_pb from "../../../bosdyn/api/service_customization_pb";
import * as bosdyn_api_graph_nav_area_callback_data_pb from "../../../bosdyn/api/graph_nav/area_callback_data_pb";
import * as bosdyn_api_graph_nav_nav_pb from "../../../bosdyn/api/graph_nav/nav_pb";

export class AreaCallbackError extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): AreaCallbackError;
    getError(): AreaCallbackError.CallError;
    setError(value: AreaCallbackError.CallError): AreaCallbackError;

    hasBeginCallback(): boolean;
    clearBeginCallback(): void;
    getBeginCallback(): BeginCallbackResponse | undefined;
    setBeginCallback(value?: BeginCallbackResponse): AreaCallbackError;

    hasBeginControl(): boolean;
    clearBeginControl(): void;
    getBeginControl(): BeginControlResponse | undefined;
    setBeginControl(value?: BeginControlResponse): AreaCallbackError;

    hasUpdateCallback(): boolean;
    clearUpdateCallback(): void;
    getUpdateCallback(): UpdateCallbackResponse | undefined;
    setUpdateCallback(value?: UpdateCallbackResponse): AreaCallbackError;

    hasEndCallback(): boolean;
    clearEndCallback(): void;
    getEndCallback(): EndCallbackResponse | undefined;
    setEndCallback(value?: EndCallbackResponse): AreaCallbackError;

    getResponseErrorCase(): AreaCallbackError.ResponseErrorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackError.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackError): AreaCallbackError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackError;
    static deserializeBinaryFromReader(message: AreaCallbackError, reader: jspb.BinaryReader): AreaCallbackError;
}

export namespace AreaCallbackError {
    export type AsObject = {
        serviceName: string,
        error: AreaCallbackError.CallError,
        beginCallback?: BeginCallbackResponse.AsObject,
        beginControl?: BeginControlResponse.AsObject,
        updateCallback?: UpdateCallbackResponse.AsObject,
        endCallback?: EndCallbackResponse.AsObject,
    }

    export enum CallError {
    ERROR_UNKNOWN = 0,
    ERROR_TRANSPORT = 1,
    ERROR_RESPONSE = 2,
    ERROR_SERVICE = 3,
    }


    export enum ResponseErrorCase {
        RESPONSE_ERROR_NOT_SET = 0,
        BEGIN_CALLBACK = 3,
        BEGIN_CONTROL = 4,
        UPDATE_CALLBACK = 5,
        END_CALLBACK = 6,
    }

}

export class AreaCallbackInformationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): AreaCallbackInformationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackInformationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackInformationRequest): AreaCallbackInformationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackInformationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackInformationRequest;
    static deserializeBinaryFromReader(message: AreaCallbackInformationRequest, reader: jspb.BinaryReader): AreaCallbackInformationRequest;
}

export namespace AreaCallbackInformationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class StopConfiguration extends jspb.Message { 
    getFaceDirection(): StopConfiguration.FaceDirection;
    setFaceDirection(value: StopConfiguration.FaceDirection): StopConfiguration;
    getFaceStairsIfPresent(): boolean;
    setFaceStairsIfPresent(value: boolean): StopConfiguration;

    hasFaceYawOffset(): boolean;
    clearFaceYawOffset(): void;
    getFaceYawOffset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFaceYawOffset(value?: google_protobuf_wrappers_pb.DoubleValue): StopConfiguration;

    hasMaxDistance(): boolean;
    clearMaxDistance(): void;
    getMaxDistance(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMaxDistance(value?: google_protobuf_wrappers_pb.DoubleValue): StopConfiguration;

    hasMaxYaw(): boolean;
    clearMaxYaw(): void;
    getMaxYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMaxYaw(value?: google_protobuf_wrappers_pb.DoubleValue): StopConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: StopConfiguration): StopConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopConfiguration;
    static deserializeBinaryFromReader(message: StopConfiguration, reader: jspb.BinaryReader): StopConfiguration;
}

export namespace StopConfiguration {
    export type AsObject = {
        faceDirection: StopConfiguration.FaceDirection,
        faceStairsIfPresent: boolean,
        faceYawOffset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        maxDistance?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        maxYaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }

    export enum FaceDirection {
    FACE_DIRECTION_UNKNOWN = 0,
    FACE_DIRECTION_ALONG_ROUTE = 1,
    FACE_DIRECTION_WAYPOINT_EXACT = 2,
    FACE_DIRECTION_WAYPOINT_AUTO = 3,
    FACE_DIRECTION_REGION_END = 4,
    }

}

export class AreaCallbackInformation extends jspb.Message { 
    clearRequiredLeaseResourcesList(): void;
    getRequiredLeaseResourcesList(): Array<string>;
    setRequiredLeaseResourcesList(value: Array<string>): AreaCallbackInformation;
    addRequiredLeaseResources(value: string, index?: number): string;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam.Spec | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam.Spec): AreaCallbackInformation;
    getBlockage(): AreaCallbackInformation.Blockage;
    setBlockage(value: AreaCallbackInformation.Blockage): AreaCallbackInformation;
    getImpairmentCheck(): AreaCallbackInformation.Impairment;
    setImpairmentCheck(value: AreaCallbackInformation.Impairment): AreaCallbackInformation;
    getEntityWaiting(): AreaCallbackInformation.EntityWaiting;
    setEntityWaiting(value: AreaCallbackInformation.EntityWaiting): AreaCallbackInformation;

    hasDefaultStop(): boolean;
    clearDefaultStop(): void;
    getDefaultStop(): StopConfiguration | undefined;
    setDefaultStop(value?: StopConfiguration): AreaCallbackInformation;

    hasMapConfig(): boolean;
    clearMapConfig(): void;
    getMapConfig(): bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackMapConfig | undefined;
    setMapConfig(value?: bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackMapConfig): AreaCallbackInformation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackInformation.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackInformation): AreaCallbackInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackInformation;
    static deserializeBinaryFromReader(message: AreaCallbackInformation, reader: jspb.BinaryReader): AreaCallbackInformation;
}

export namespace AreaCallbackInformation {
    export type AsObject = {
        requiredLeaseResourcesList: Array<string>,
        customParams?: bosdyn_api_service_customization_pb.DictParam.Spec.AsObject,
        blockage: AreaCallbackInformation.Blockage,
        impairmentCheck: AreaCallbackInformation.Impairment,
        entityWaiting: AreaCallbackInformation.EntityWaiting,
        defaultStop?: StopConfiguration.AsObject,
        mapConfig?: bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackMapConfig.AsObject,
    }

    export enum Blockage {
    BLOCKAGE_UNKNOWN = 0,
    BLOCKAGE_SKIP = 1,
    BLOCKAGE_CHECK = 2,
    }

    export enum Impairment {
    IMPAIRMENT_UNKNOWN = 0,
    IMPAIRMENT_SKIP = 1,
    IMPAIRMENT_CHECK = 2,
    }

    export enum EntityWaiting {
    ENTITY_WAITING_UNKNOWN = 0,
    ENTITY_WAITING_DISABLE = 1,
    ENTITY_WAITING_ENABLE = 2,
    }

}

export class AreaCallbackInformationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): AreaCallbackInformationResponse;

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): AreaCallbackInformation | undefined;
    setInfo(value?: AreaCallbackInformation): AreaCallbackInformationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackInformationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackInformationResponse): AreaCallbackInformationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackInformationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackInformationResponse;
    static deserializeBinaryFromReader(message: AreaCallbackInformationResponse, reader: jspb.BinaryReader): AreaCallbackInformationResponse;
}

export namespace AreaCallbackInformationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        info?: AreaCallbackInformation.AsObject,
    }
}

export class RegionInformation extends jspb.Message { 
    getRegionId(): string;
    setRegionId(value: string): RegionInformation;
    getDescription(): string;
    setDescription(value: string): RegionInformation;

    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): bosdyn_api_graph_nav_nav_pb.Route | undefined;
    setRoute(value?: bosdyn_api_graph_nav_nav_pb.Route): RegionInformation;
    getStartingInsideRegion(): boolean;
    setStartingInsideRegion(value: boolean): RegionInformation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionInformation.AsObject;
    static toObject(includeInstance: boolean, msg: RegionInformation): RegionInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegionInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionInformation;
    static deserializeBinaryFromReader(message: RegionInformation, reader: jspb.BinaryReader): RegionInformation;
}

export namespace RegionInformation {
    export type AsObject = {
        regionId: string,
        description: string,
        route?: bosdyn_api_graph_nav_nav_pb.Route.AsObject,
        startingInsideRegion: boolean,
    }
}

export class BeginCallbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): BeginCallbackRequest;

    hasRegionInfo(): boolean;
    clearRegionInfo(): void;
    getRegionInfo(): RegionInformation | undefined;
    setRegionInfo(value?: RegionInformation): BeginCallbackRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): BeginCallbackRequest;

    hasRecordedData(): boolean;
    clearRecordedData(): void;
    getRecordedData(): bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData | undefined;
    setRecordedData(value?: bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData): BeginCallbackRequest;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam): BeginCallbackRequest;

    hasConfigData(): boolean;
    clearConfigData(): void;
    getConfigData(): google_protobuf_any_pb.Any | undefined;
    setConfigData(value?: google_protobuf_any_pb.Any): BeginCallbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BeginCallbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BeginCallbackRequest): BeginCallbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BeginCallbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BeginCallbackRequest;
    static deserializeBinaryFromReader(message: BeginCallbackRequest, reader: jspb.BinaryReader): BeginCallbackRequest;
}

export namespace BeginCallbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        regionInfo?: RegionInformation.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        recordedData?: bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData.AsObject,
        customParams?: bosdyn_api_service_customization_pb.DictParam.AsObject,
        configData?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class BeginCallbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): BeginCallbackResponse;
    getStatus(): BeginCallbackResponse.Status;
    setStatus(value: BeginCallbackResponse.Status): BeginCallbackResponse;
    getCommandId(): number;
    setCommandId(value: number): BeginCallbackResponse;

    hasCustomParamError(): boolean;
    clearCustomParamError(): void;
    getCustomParamError(): bosdyn_api_service_customization_pb.CustomParamError | undefined;
    setCustomParamError(value?: bosdyn_api_service_customization_pb.CustomParamError): BeginCallbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BeginCallbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BeginCallbackResponse): BeginCallbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BeginCallbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BeginCallbackResponse;
    static deserializeBinaryFromReader(message: BeginCallbackResponse, reader: jspb.BinaryReader): BeginCallbackResponse;
}

export namespace BeginCallbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: BeginCallbackResponse.Status,
        commandId: number,
        customParamError?: bosdyn_api_service_customization_pb.CustomParamError.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_CONFIGURATION = 2,
    STATUS_EXPIRED_END_TIME = 3,
    STATUS_CUSTOM_PARAMS_ERROR = 8,
    }

}

export class BeginControlRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): BeginControlRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): BeginControlRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;
    getCommandId(): number;
    setCommandId(value: number): BeginControlRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BeginControlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BeginControlRequest): BeginControlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BeginControlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BeginControlRequest;
    static deserializeBinaryFromReader(message: BeginControlRequest, reader: jspb.BinaryReader): BeginControlRequest;
}

export namespace BeginControlRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        commandId: number,
    }
}

export class BeginControlResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): BeginControlResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): BeginControlResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    getStatus(): BeginControlResponse.Status;
    setStatus(value: BeginControlResponse.Status): BeginControlResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BeginControlResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BeginControlResponse): BeginControlResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BeginControlResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BeginControlResponse;
    static deserializeBinaryFromReader(message: BeginControlResponse, reader: jspb.BinaryReader): BeginControlResponse;
}

export namespace BeginControlResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        status: BeginControlResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_COMMAND_ID = 2,
    STATUS_MISSING_LEASE_RESOURCES = 3,
    STATUS_LEASE_ERROR = 4,
    }

}

export class UpdateCallbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UpdateCallbackRequest;
    getCommandId(): number;
    setCommandId(value: number): UpdateCallbackRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateCallbackRequest;
    getStage(): UpdateCallbackRequest.Stage;
    setStage(value: UpdateCallbackRequest.Stage): UpdateCallbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallbackRequest): UpdateCallbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallbackRequest;
    static deserializeBinaryFromReader(message: UpdateCallbackRequest, reader: jspb.BinaryReader): UpdateCallbackRequest;
}

export namespace UpdateCallbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        commandId: number,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        stage: UpdateCallbackRequest.Stage,
    }

    export enum Stage {
    STAGE_UNKNOWN = 0,
    STAGE_TO_START = 1,
    STAGE_AT_START = 2,
    STAGE_TO_END = 3,
    STAGE_AT_END = 4,
    }

}

export class UpdateCallbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UpdateCallbackResponse;
    getStatus(): UpdateCallbackResponse.Status;
    setStatus(value: UpdateCallbackResponse.Status): UpdateCallbackResponse;

    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): UpdateCallbackResponse.NavPolicy | undefined;
    setPolicy(value?: UpdateCallbackResponse.NavPolicy): UpdateCallbackResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): UpdateCallbackResponse.Error | undefined;
    setError(value?: UpdateCallbackResponse.Error): UpdateCallbackResponse;

    hasComplete(): boolean;
    clearComplete(): void;
    getComplete(): UpdateCallbackResponse.Complete | undefined;
    setComplete(value?: UpdateCallbackResponse.Complete): UpdateCallbackResponse;

    hasLocalization(): boolean;
    clearLocalization(): void;
    getLocalization(): UpdateCallbackResponse.UpdateLocalization | undefined;
    setLocalization(value?: UpdateCallbackResponse.UpdateLocalization): UpdateCallbackResponse;

    getResponseCase(): UpdateCallbackResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallbackResponse): UpdateCallbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallbackResponse;
    static deserializeBinaryFromReader(message: UpdateCallbackResponse, reader: jspb.BinaryReader): UpdateCallbackResponse;
}

export namespace UpdateCallbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: UpdateCallbackResponse.Status,
        policy?: UpdateCallbackResponse.NavPolicy.AsObject,
        error?: UpdateCallbackResponse.Error.AsObject,
        complete?: UpdateCallbackResponse.Complete.AsObject,
        localization?: UpdateCallbackResponse.UpdateLocalization.AsObject,
    }


    export class UpdateLocalization extends jspb.Message { 
        getChange(): UpdateCallbackResponse.UpdateLocalization.LocalizationChange;
        setChange(value: UpdateCallbackResponse.UpdateLocalization.LocalizationChange): UpdateLocalization;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UpdateLocalization.AsObject;
        static toObject(includeInstance: boolean, msg: UpdateLocalization): UpdateLocalization.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UpdateLocalization, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UpdateLocalization;
        static deserializeBinaryFromReader(message: UpdateLocalization, reader: jspb.BinaryReader): UpdateLocalization;
    }

    export namespace UpdateLocalization {
        export type AsObject = {
            change: UpdateCallbackResponse.UpdateLocalization.LocalizationChange,
        }

        export enum LocalizationChange {
    LOCALIZATION_UNKNOWN = 0,
    LOCALIZATION_AT_END = 1,
        }

    }

    export class NavPolicy extends jspb.Message { 
        getAtStart(): UpdateCallbackResponse.NavPolicy.Option;
        setAtStart(value: UpdateCallbackResponse.NavPolicy.Option): NavPolicy;
        getAtEnd(): UpdateCallbackResponse.NavPolicy.Option;
        setAtEnd(value: UpdateCallbackResponse.NavPolicy.Option): NavPolicy;

        hasEndConfig(): boolean;
        clearEndConfig(): void;
        getEndConfig(): StopConfiguration | undefined;
        setEndConfig(value?: StopConfiguration): NavPolicy;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NavPolicy.AsObject;
        static toObject(includeInstance: boolean, msg: NavPolicy): NavPolicy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NavPolicy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NavPolicy;
        static deserializeBinaryFromReader(message: NavPolicy, reader: jspb.BinaryReader): NavPolicy;
    }

    export namespace NavPolicy {
        export type AsObject = {
            atStart: UpdateCallbackResponse.NavPolicy.Option,
            atEnd: UpdateCallbackResponse.NavPolicy.Option,
            endConfig?: StopConfiguration.AsObject,
        }

        export enum Option {
    OPTION_UNKNOWN = 0,
    OPTION_CONTINUE = 1,
    OPTION_STOP = 2,
    OPTION_CONTROL = 3,
        }

    }

    export class Error extends jspb.Message { 
        getError(): UpdateCallbackResponse.Error.ErrorType;
        setError(value: UpdateCallbackResponse.Error.ErrorType): Error;
        clearLeaseUseResultsList(): void;
        getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
        setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): Error;
        addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Error.AsObject;
        static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Error;
        static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
    }

    export namespace Error {
        export type AsObject = {
            error: UpdateCallbackResponse.Error.ErrorType,
            leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        }

        export enum ErrorType {
    ERROR_UNKNOWN = 0,
    ERROR_BLOCKED = 1,
    ERROR_CALLBACK_FAILED = 2,
    ERROR_LEASE = 3,
    ERROR_TIMED_OUT = 4,
        }

    }

    export class Complete extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Complete.AsObject;
        static toObject(includeInstance: boolean, msg: Complete): Complete.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Complete, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Complete;
        static deserializeBinaryFromReader(message: Complete, reader: jspb.BinaryReader): Complete;
    }

    export namespace Complete {
        export type AsObject = {
        }
    }


    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_COMMAND_ID = 2,
    STATUS_EXPIRED_END_TIME = 3,
    }


    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        POLICY = 3,
        ERROR = 4,
        COMPLETE = 5,
    }

}

export class EndCallbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): EndCallbackRequest;
    getCommandId(): number;
    setCommandId(value: number): EndCallbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndCallbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EndCallbackRequest): EndCallbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndCallbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndCallbackRequest;
    static deserializeBinaryFromReader(message: EndCallbackRequest, reader: jspb.BinaryReader): EndCallbackRequest;
}

export namespace EndCallbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        commandId: number,
    }
}

export class EndCallbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): EndCallbackResponse;
    getStatus(): EndCallbackResponse.Status;
    setStatus(value: EndCallbackResponse.Status): EndCallbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndCallbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EndCallbackResponse): EndCallbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndCallbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndCallbackResponse;
    static deserializeBinaryFromReader(message: EndCallbackResponse, reader: jspb.BinaryReader): EndCallbackResponse;
}

export namespace EndCallbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: EndCallbackResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_COMMAND_ID = 2,
    STATUS_SHUTDOWN_CALLBACK_FAILED = 3,
    }

}

export class RouteChangeRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RouteChangeRequest;
    getCommandId(): number;
    setCommandId(value: number): RouteChangeRequest;

    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): bosdyn_api_graph_nav_nav_pb.Route | undefined;
    setRoute(value?: bosdyn_api_graph_nav_nav_pb.Route): RouteChangeRequest;

    hasUnfinishedRoute(): boolean;
    clearUnfinishedRoute(): void;
    getUnfinishedRoute(): bosdyn_api_graph_nav_nav_pb.Route | undefined;
    setUnfinishedRoute(value?: bosdyn_api_graph_nav_nav_pb.Route): RouteChangeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RouteChangeRequest): RouteChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteChangeRequest;
    static deserializeBinaryFromReader(message: RouteChangeRequest, reader: jspb.BinaryReader): RouteChangeRequest;
}

export namespace RouteChangeRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        commandId: number,
        route?: bosdyn_api_graph_nav_nav_pb.Route.AsObject,
        unfinishedRoute?: bosdyn_api_graph_nav_nav_pb.Route.AsObject,
    }
}

export class RouteChangeResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RouteChangeResponse;
    getStatus(): RouteChangeResponse.Status;
    setStatus(value: RouteChangeResponse.Status): RouteChangeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteChangeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RouteChangeResponse): RouteChangeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteChangeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteChangeResponse;
    static deserializeBinaryFromReader(message: RouteChangeResponse, reader: jspb.BinaryReader): RouteChangeResponse;
}

export namespace RouteChangeResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: RouteChangeResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_COMMAND_ID = 2,
    }

}
