// package: bosdyn.api
// file: bosdyn/api/power.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../bosdyn/api/lease_pb";
import * as bosdyn_api_license_pb from "../../bosdyn/api/license_pb";
import * as bosdyn_api_robot_state_pb from "../../bosdyn/api/robot_state_pb";

export class PowerCommandRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): PowerCommandRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): PowerCommandRequest;
    getRequest(): PowerCommandRequest.Request;
    setRequest(value: PowerCommandRequest.Request): PowerCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PowerCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PowerCommandRequest): PowerCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PowerCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PowerCommandRequest;
    static deserializeBinaryFromReader(message: PowerCommandRequest, reader: jspb.BinaryReader): PowerCommandRequest;
}

export namespace PowerCommandRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        request: PowerCommandRequest.Request,
    }

    export enum Request {
    REQUEST_UNKNOWN = 0,
    REQUEST_OFF = 1,
    REQUEST_ON = 2,
    REQUEST_OFF_MOTORS = 1,
    REQUEST_ON_MOTORS = 2,
    REQUEST_OFF_ROBOT = 3,
    REQUEST_CYCLE_ROBOT = 4,
    REQUEST_OFF_PAYLOAD_PORTS = 5,
    REQUEST_ON_PAYLOAD_PORTS = 6,
    REQUEST_OFF_WIFI_RADIO = 7,
    REQUEST_ON_WIFI_RADIO = 8,
    }

}

export class PowerCommandResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): PowerCommandResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): PowerCommandResponse;
    getStatus(): PowerCommandStatus;
    setStatus(value: PowerCommandStatus): PowerCommandResponse;
    getPowerCommandId(): number;
    setPowerCommandId(value: number): PowerCommandResponse;
    getLicenseStatus(): bosdyn_api_license_pb.LicenseInfo.Status;
    setLicenseStatus(value: bosdyn_api_license_pb.LicenseInfo.Status): PowerCommandResponse;
    clearBlockingFaultsList(): void;
    getBlockingFaultsList(): Array<bosdyn_api_robot_state_pb.SystemFault>;
    setBlockingFaultsList(value: Array<bosdyn_api_robot_state_pb.SystemFault>): PowerCommandResponse;
    addBlockingFaults(value?: bosdyn_api_robot_state_pb.SystemFault, index?: number): bosdyn_api_robot_state_pb.SystemFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PowerCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PowerCommandResponse): PowerCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PowerCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PowerCommandResponse;
    static deserializeBinaryFromReader(message: PowerCommandResponse, reader: jspb.BinaryReader): PowerCommandResponse;
}

export namespace PowerCommandResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: PowerCommandStatus,
        powerCommandId: number,
        licenseStatus: bosdyn_api_license_pb.LicenseInfo.Status,
        blockingFaultsList: Array<bosdyn_api_robot_state_pb.SystemFault.AsObject>,
    }
}

export class PowerCommandFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): PowerCommandFeedbackRequest;
    getPowerCommandId(): number;
    setPowerCommandId(value: number): PowerCommandFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PowerCommandFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PowerCommandFeedbackRequest): PowerCommandFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PowerCommandFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PowerCommandFeedbackRequest;
    static deserializeBinaryFromReader(message: PowerCommandFeedbackRequest, reader: jspb.BinaryReader): PowerCommandFeedbackRequest;
}

export namespace PowerCommandFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        powerCommandId: number,
    }
}

export class PowerCommandFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): PowerCommandFeedbackResponse;
    getStatus(): PowerCommandStatus;
    setStatus(value: PowerCommandStatus): PowerCommandFeedbackResponse;
    clearBlockingFaultsList(): void;
    getBlockingFaultsList(): Array<bosdyn_api_robot_state_pb.SystemFault>;
    setBlockingFaultsList(value: Array<bosdyn_api_robot_state_pb.SystemFault>): PowerCommandFeedbackResponse;
    addBlockingFaults(value?: bosdyn_api_robot_state_pb.SystemFault, index?: number): bosdyn_api_robot_state_pb.SystemFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PowerCommandFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PowerCommandFeedbackResponse): PowerCommandFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PowerCommandFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PowerCommandFeedbackResponse;
    static deserializeBinaryFromReader(message: PowerCommandFeedbackResponse, reader: jspb.BinaryReader): PowerCommandFeedbackResponse;
}

export namespace PowerCommandFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: PowerCommandStatus,
        blockingFaultsList: Array<bosdyn_api_robot_state_pb.SystemFault.AsObject>,
    }
}

export class FanPowerCommandRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): FanPowerCommandRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): FanPowerCommandRequest;
    getPercentPower(): number;
    setPercentPower(value: number): FanPowerCommandRequest;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): FanPowerCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FanPowerCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FanPowerCommandRequest): FanPowerCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FanPowerCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FanPowerCommandRequest;
    static deserializeBinaryFromReader(message: FanPowerCommandRequest, reader: jspb.BinaryReader): FanPowerCommandRequest;
}

export namespace FanPowerCommandRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        percentPower: number,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class FanPowerCommandResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): FanPowerCommandResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): FanPowerCommandResponse;
    getStatus(): FanPowerCommandResponse.Status;
    setStatus(value: FanPowerCommandResponse.Status): FanPowerCommandResponse;

    hasDesiredEndTime(): boolean;
    clearDesiredEndTime(): void;
    getDesiredEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDesiredEndTime(value?: google_protobuf_timestamp_pb.Timestamp): FanPowerCommandResponse;
    getCommandId(): number;
    setCommandId(value: number): FanPowerCommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FanPowerCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FanPowerCommandResponse): FanPowerCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FanPowerCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FanPowerCommandResponse;
    static deserializeBinaryFromReader(message: FanPowerCommandResponse, reader: jspb.BinaryReader): FanPowerCommandResponse;
}

export namespace FanPowerCommandResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: FanPowerCommandResponse.Status,
        desiredEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        commandId: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_TEMPERATURE_TOO_HIGH = 2,
    }

}

export class FanPowerCommandFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): FanPowerCommandFeedbackRequest;
    getCommandId(): number;
    setCommandId(value: number): FanPowerCommandFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FanPowerCommandFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FanPowerCommandFeedbackRequest): FanPowerCommandFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FanPowerCommandFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FanPowerCommandFeedbackRequest;
    static deserializeBinaryFromReader(message: FanPowerCommandFeedbackRequest, reader: jspb.BinaryReader): FanPowerCommandFeedbackRequest;
}

export namespace FanPowerCommandFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        commandId: number,
    }
}

export class FanPowerCommandFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): FanPowerCommandFeedbackResponse;
    getStatus(): FanPowerCommandFeedbackResponse.Status;
    setStatus(value: FanPowerCommandFeedbackResponse.Status): FanPowerCommandFeedbackResponse;

    hasDesiredEndTime(): boolean;
    clearDesiredEndTime(): void;
    getDesiredEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDesiredEndTime(value?: google_protobuf_timestamp_pb.Timestamp): FanPowerCommandFeedbackResponse;

    hasEarlyStopTime(): boolean;
    clearEarlyStopTime(): void;
    getEarlyStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEarlyStopTime(value?: google_protobuf_timestamp_pb.Timestamp): FanPowerCommandFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FanPowerCommandFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FanPowerCommandFeedbackResponse): FanPowerCommandFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FanPowerCommandFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FanPowerCommandFeedbackResponse;
    static deserializeBinaryFromReader(message: FanPowerCommandFeedbackResponse, reader: jspb.BinaryReader): FanPowerCommandFeedbackResponse;
}

export namespace FanPowerCommandFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: FanPowerCommandFeedbackResponse.Status,
        desiredEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        earlyStopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_COMPLETE = 1,
    STATUS_RUNNING = 2,
    STATUS_TEMPERATURE_STOP = 3,
    STATUS_OVERRIDDEN_BY_COMMAND = 4,
    }

}

export class ResetSafetyStopRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ResetSafetyStopRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): ResetSafetyStopRequest;
    getSafetyStopType(): ResetSafetyStopRequest.SafetyStopType;
    setSafetyStopType(value: ResetSafetyStopRequest.SafetyStopType): ResetSafetyStopRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetSafetyStopRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResetSafetyStopRequest): ResetSafetyStopRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetSafetyStopRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetSafetyStopRequest;
    static deserializeBinaryFromReader(message: ResetSafetyStopRequest, reader: jspb.BinaryReader): ResetSafetyStopRequest;
}

export namespace ResetSafetyStopRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        safetyStopType: ResetSafetyStopRequest.SafetyStopType,
    }

    export enum SafetyStopType {
    SAFETY_STOP_UNKNOWN = 0,
    SAFETY_STOP_PRIMARY = 1,
    SAFETY_STOP_REDUNDANT = 2,
    }

}

export class ResetSafetyStopResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ResetSafetyStopResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): ResetSafetyStopResponse;
    getStatus(): ResetSafetyStopResponse.Status;
    setStatus(value: ResetSafetyStopResponse.Status): ResetSafetyStopResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetSafetyStopResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResetSafetyStopResponse): ResetSafetyStopResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetSafetyStopResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetSafetyStopResponse;
    static deserializeBinaryFromReader(message: ResetSafetyStopResponse, reader: jspb.BinaryReader): ResetSafetyStopResponse;
}

export namespace ResetSafetyStopResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: ResetSafetyStopResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INCOMPATIBLE_HARDWARE_ERROR = 2,
    STATUS_FAILED = 3,
    STATUS_UNKNOWN_STOP_TYPE = 4,
    }

}

export enum PowerCommandStatus {
    STATUS_UNKNOWN = 0,
    STATUS_IN_PROGRESS = 1,
    STATUS_SUCCESS = 2,
    STATUS_SHORE_POWER_CONNECTED = 3,
    STATUS_BATTERY_MISSING = 4,
    STATUS_COMMAND_IN_PROGRESS = 5,
    STATUS_ESTOPPED = 6,
    STATUS_FAULTED = 7,
    STATUS_INTERNAL_ERROR = 8,
    STATUS_LICENSE_ERROR = 9,
    INCOMPATIBLE_HARDWARE_ERROR = 10,
    STATUS_OVERRIDDEN = 11,
    STATUS_KEEPALIVE_MOTORS_OFF = 12,
}
