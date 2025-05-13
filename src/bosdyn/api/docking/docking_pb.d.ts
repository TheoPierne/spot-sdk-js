// package: bosdyn.api.docking
// file: bosdyn/api/docking/docking.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DockingCommandRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DockingCommandRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): DockingCommandRequest;
    getDockingStationId(): number;
    setDockingStationId(value: number): DockingCommandRequest;
    getClockIdentifier(): string;
    setClockIdentifier(value: string): DockingCommandRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): DockingCommandRequest;
    getPrepPoseBehavior(): PrepPoseBehavior;
    setPrepPoseBehavior(value: PrepPoseBehavior): DockingCommandRequest;
    getRequireFiducial(): boolean;
    setRequireFiducial(value: boolean): DockingCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DockingCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DockingCommandRequest): DockingCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DockingCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DockingCommandRequest;
    static deserializeBinaryFromReader(message: DockingCommandRequest, reader: jspb.BinaryReader): DockingCommandRequest;
}

export namespace DockingCommandRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        dockingStationId: number,
        clockIdentifier: string,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        prepPoseBehavior: PrepPoseBehavior,
        requireFiducial: boolean,
    }
}

export class DockingCommandResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DockingCommandResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): DockingCommandResponse;
    getStatus(): DockingCommandResponse.Status;
    setStatus(value: DockingCommandResponse.Status): DockingCommandResponse;
    getDockingCommandId(): number;
    setDockingCommandId(value: number): DockingCommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DockingCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DockingCommandResponse): DockingCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DockingCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DockingCommandResponse;
    static deserializeBinaryFromReader(message: DockingCommandResponse, reader: jspb.BinaryReader): DockingCommandResponse;
}

export namespace DockingCommandResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: DockingCommandResponse.Status,
        dockingCommandId: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ERROR_LEASE = 4,
    STATUS_ERROR_DOCK_NOT_FOUND = 5,
    STATUS_ERROR_NOT_DOCKED = 6,
    STATUS_ERROR_GRIPPER_HOLDING_ITEM = 8,
    STATUS_ERROR_NOT_AVAILABLE = 9,
    STATUS_ERROR_SYSTEM = 7,
    }

}

export class UpdateDockingParams extends jspb.Message { 

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateDockingParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDockingParams.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDockingParams): UpdateDockingParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDockingParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDockingParams;
    static deserializeBinaryFromReader(message: UpdateDockingParams, reader: jspb.BinaryReader): UpdateDockingParams;
}

export namespace UpdateDockingParams {
    export type AsObject = {
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DockingCommandFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DockingCommandFeedbackRequest;
    getDockingCommandId(): number;
    setDockingCommandId(value: number): DockingCommandFeedbackRequest;

    hasUpdateDockingParams(): boolean;
    clearUpdateDockingParams(): void;
    getUpdateDockingParams(): UpdateDockingParams | undefined;
    setUpdateDockingParams(value?: UpdateDockingParams): DockingCommandFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DockingCommandFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DockingCommandFeedbackRequest): DockingCommandFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DockingCommandFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DockingCommandFeedbackRequest;
    static deserializeBinaryFromReader(message: DockingCommandFeedbackRequest, reader: jspb.BinaryReader): DockingCommandFeedbackRequest;
}

export namespace DockingCommandFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        dockingCommandId: number,
        updateDockingParams?: UpdateDockingParams.AsObject,
    }
}

export class DockingCommandFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DockingCommandFeedbackResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): DockingCommandFeedbackResponse;
    getStatus(): DockingCommandFeedbackResponse.Status;
    setStatus(value: DockingCommandFeedbackResponse.Status): DockingCommandFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DockingCommandFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DockingCommandFeedbackResponse): DockingCommandFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DockingCommandFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DockingCommandFeedbackResponse;
    static deserializeBinaryFromReader(message: DockingCommandFeedbackResponse, reader: jspb.BinaryReader): DockingCommandFeedbackResponse;
}

export namespace DockingCommandFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: DockingCommandFeedbackResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_IN_PROGRESS = 1,
    STATUS_DOCKED = 2,
    STATUS_AT_PREP_POSE = 11,
    STATUS_MISALIGNED = 10,
    STATUS_OLD_DOCKING_COMMAND = 3,
    STATUS_ERROR_DOCK_LOST = 4,
    STATUS_ERROR_LEASE = 5,
    STATUS_ERROR_COMMAND_TIMED_OUT = 6,
    STATUS_ERROR_NO_TIMESYNC = 7,
    STATUS_ERROR_TOO_DISTANT = 8,
    STATUS_ERROR_NOT_AVAILABLE = 12,
    STATUS_ERROR_UNREFINED_PRIOR = 13,
    STATUS_ERROR_STUCK = 14,
    STATUS_ERROR_SYSTEM = 9,
    }

}

export class ConfigRange extends jspb.Message { 
    getIdStart(): number;
    setIdStart(value: number): ConfigRange;
    getIdEnd(): number;
    setIdEnd(value: number): ConfigRange;
    getType(): DockType;
    setType(value: DockType): ConfigRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigRange.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigRange): ConfigRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigRange;
    static deserializeBinaryFromReader(message: ConfigRange, reader: jspb.BinaryReader): ConfigRange;
}

export namespace ConfigRange {
    export type AsObject = {
        idStart: number,
        idEnd: number,
        type: DockType,
    }
}

export class GetDockingConfigRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetDockingConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDockingConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDockingConfigRequest): GetDockingConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDockingConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDockingConfigRequest;
    static deserializeBinaryFromReader(message: GetDockingConfigRequest, reader: jspb.BinaryReader): GetDockingConfigRequest;
}

export namespace GetDockingConfigRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetDockingConfigResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetDockingConfigResponse;
    clearDockConfigsList(): void;
    getDockConfigsList(): Array<ConfigRange>;
    setDockConfigsList(value: Array<ConfigRange>): GetDockingConfigResponse;
    addDockConfigs(value?: ConfigRange, index?: number): ConfigRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDockingConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDockingConfigResponse): GetDockingConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDockingConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDockingConfigResponse;
    static deserializeBinaryFromReader(message: GetDockingConfigResponse, reader: jspb.BinaryReader): GetDockingConfigResponse;
}

export namespace GetDockingConfigResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        dockConfigsList: Array<ConfigRange.AsObject>,
    }
}

export class DockState extends jspb.Message { 
    getStatus(): DockState.DockedStatus;
    setStatus(value: DockState.DockedStatus): DockState;
    getDockType(): DockType;
    setDockType(value: DockType): DockState;
    getDockId(): number;
    setDockId(value: number): DockState;
    getPowerStatus(): DockState.LinkStatus;
    setPowerStatus(value: DockState.LinkStatus): DockState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DockState.AsObject;
    static toObject(includeInstance: boolean, msg: DockState): DockState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DockState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DockState;
    static deserializeBinaryFromReader(message: DockState, reader: jspb.BinaryReader): DockState;
}

export namespace DockState {
    export type AsObject = {
        status: DockState.DockedStatus,
        dockType: DockType,
        dockId: number,
        powerStatus: DockState.LinkStatus,
    }

    export enum DockedStatus {
    DOCK_STATUS_UNKNOWN = 0,
    DOCK_STATUS_DOCKED = 1,
    DOCK_STATUS_DOCKING = 2,
    DOCK_STATUS_UNDOCKED = 3,
    DOCK_STATUS_UNDOCKING = 4,
    }

    export enum LinkStatus {
    LINK_STATUS_UNKNOWN = 0,
    LINK_STATUS_DETECTING = 3,
    LINK_STATUS_CONNECTED = 1,
    LINK_STATUS_ERROR = 2,
    }

}

export class GetDockingStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetDockingStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDockingStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDockingStateRequest): GetDockingStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDockingStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDockingStateRequest;
    static deserializeBinaryFromReader(message: GetDockingStateRequest, reader: jspb.BinaryReader): GetDockingStateRequest;
}

export namespace GetDockingStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetDockingStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetDockingStateResponse;

    hasDockState(): boolean;
    clearDockState(): void;
    getDockState(): DockState | undefined;
    setDockState(value?: DockState): GetDockingStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDockingStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDockingStateResponse): GetDockingStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDockingStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDockingStateResponse;
    static deserializeBinaryFromReader(message: GetDockingStateResponse, reader: jspb.BinaryReader): GetDockingStateResponse;
}

export namespace GetDockingStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        dockState?: DockState.AsObject,
    }
}

export enum DockType {
    DOCK_TYPE_UNKNOWN = 0,
    DOCK_TYPE_CONTACT_PROTOTYPE = 2,
    DOCK_TYPE_SPOT_DOCK = 3,
    DOCK_TYPE_SPOT_DOGHOUSE = 4,
}

export enum PrepPoseBehavior {
    PREP_POSE_UNKNOWN = 0,
    PREP_POSE_USE_POSE = 1,
    PREP_POSE_SKIP_POSE = 2,
    PREP_POSE_ONLY_POSE = 3,
    PREP_POSE_UNDOCK = 4,
}
