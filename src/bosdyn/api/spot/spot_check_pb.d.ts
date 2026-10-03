// package: bosdyn.api.spot
// file: bosdyn/api/spot/spot_check.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SpotCheckCommandRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SpotCheckCommandRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): SpotCheckCommandRequest;
    getCommand(): SpotCheckCommandRequest.Command;
    setCommand(value: SpotCheckCommandRequest.Command): SpotCheckCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCheckCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCheckCommandRequest): SpotCheckCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCheckCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCheckCommandRequest;
    static deserializeBinaryFromReader(message: SpotCheckCommandRequest, reader: jspb.BinaryReader): SpotCheckCommandRequest;
}

export namespace SpotCheckCommandRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        command: SpotCheckCommandRequest.Command,
    }

    export enum Command {
    COMMAND_UNKNOWN = 0,
    COMMAND_START = 1,
    COMMAND_ABORT = 2,
    COMMAND_REVERT_CAL = 3,
    }

}

export class SpotCheckCommandResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SpotCheckCommandResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): SpotCheckCommandResponse;
    getStatus(): SpotCheckCommandResponse.Status;
    setStatus(value: SpotCheckCommandResponse.Status): SpotCheckCommandResponse;
    getMessage(): string;
    setMessage(value: string): SpotCheckCommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCheckCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCheckCommandResponse): SpotCheckCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCheckCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCheckCommandResponse;
    static deserializeBinaryFromReader(message: SpotCheckCommandResponse, reader: jspb.BinaryReader): SpotCheckCommandResponse;
}

export namespace SpotCheckCommandResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: SpotCheckCommandResponse.Status,
        message: string,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ERROR = 2,
    }

}

export class SpotCheckFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SpotCheckFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCheckFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCheckFeedbackRequest): SpotCheckFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCheckFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCheckFeedbackRequest;
    static deserializeBinaryFromReader(message: SpotCheckFeedbackRequest, reader: jspb.BinaryReader): SpotCheckFeedbackRequest;
}

export namespace SpotCheckFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class SpotCheckFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SpotCheckFeedbackResponse;
    getState(): SpotCheckFeedbackResponse.State;
    setState(value: SpotCheckFeedbackResponse.State): SpotCheckFeedbackResponse;
    getLastCommand(): SpotCheckCommandRequest.Command;
    setLastCommand(value: SpotCheckCommandRequest.Command): SpotCheckFeedbackResponse;
    getError(): SpotCheckFeedbackResponse.Error;
    setError(value: SpotCheckFeedbackResponse.Error): SpotCheckFeedbackResponse;

    getCameraResultsMap(): jspb.Map<string, DepthPlaneSpotCheckResult>;
    clearCameraResultsMap(): void;

    getLoadCellResultsMap(): jspb.Map<string, LoadCellSpotCheckResult>;
    clearLoadCellResultsMap(): void;

    getKinematicCalResultsMap(): jspb.Map<string, JointKinematicCheckResult>;
    clearKinematicCalResultsMap(): void;

    hasPayloadResult(): boolean;
    clearPayloadResult(): void;
    getPayloadResult(): PayloadCheckResult | undefined;
    setPayloadResult(value?: PayloadCheckResult): SpotCheckFeedbackResponse;

    getHipRangeOfMotionResultsMap(): jspb.Map<string, HipRangeOfMotionResult>;
    clearHipRangeOfMotionResultsMap(): void;
    getProgress(): number;
    setProgress(value: number): SpotCheckFeedbackResponse;

    hasLastCalTimestamp(): boolean;
    clearLastCalTimestamp(): void;
    getLastCalTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastCalTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SpotCheckFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpotCheckFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SpotCheckFeedbackResponse): SpotCheckFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpotCheckFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpotCheckFeedbackResponse;
    static deserializeBinaryFromReader(message: SpotCheckFeedbackResponse, reader: jspb.BinaryReader): SpotCheckFeedbackResponse;
}

export namespace SpotCheckFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        state: SpotCheckFeedbackResponse.State,
        lastCommand: SpotCheckCommandRequest.Command,
        error: SpotCheckFeedbackResponse.Error,

        cameraResultsMap: Array<[string, DepthPlaneSpotCheckResult.AsObject]>,

        loadCellResultsMap: Array<[string, LoadCellSpotCheckResult.AsObject]>,

        kinematicCalResultsMap: Array<[string, JointKinematicCheckResult.AsObject]>,
        payloadResult?: PayloadCheckResult.AsObject,

        hipRangeOfMotionResultsMap: Array<[string, HipRangeOfMotionResult.AsObject]>,
        progress: number,
        lastCalTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum State {
    STATE_UNKNOWN = 0,
    STATE_USER_ABORTED = 1,
    STATE_STARTING = 2,
    STATE_LOADCELL_CAL = 3,
    STATE_ENDSTOP_CAL = 4,
    STATE_CAMERA_CHECK = 5,
    STATE_BODY_POSING = 6,
    STATE_FINISHED = 7,
    STATE_REVERTING_CAL = 8,
    STATE_ERROR = 9,
    STATE_WAITING_FOR_COMMAND = 10,
    STATE_HIP_RANGE_OF_MOTION_CHECK = 11,
    STATE_GRIPPER_CAL = 12,
    STATE_SIT_DOWN_AFTER_RUN = 13,
    STATE_ARM_JOINT_CHECK = 14,
    }

    export enum Error {
    ERROR_UNKNOWN = 0,
    ERROR_NONE = 1,
    ERROR_UNEXPECTED_POWER_CHANGE = 2,
    ERROR_INIT_IMU_CHECK = 3,
    ERROR_INIT_NOT_SITTING = 4,
    ERROR_LOADCELL_TIMEOUT = 5,
    ERROR_POWER_ON_FAILURE = 6,
    ERROR_ENDSTOP_TIMEOUT = 7,
    ERROR_FAILED_STAND = 8,
    ERROR_CAMERA_TIMEOUT = 9,
    ERROR_GROUND_CHECK = 10,
    ERROR_POWER_OFF_FAILURE = 11,
    ERROR_REVERT_FAILURE = 12,
    ERROR_FGKC_FAILURE = 13,
    ERROR_GRIPPER_CAL_TIMEOUT = 14,
    ERROR_ARM_CHECK_COLLISION = 15,
    ERROR_ARM_CHECK_TIMEOUT = 16,
    }

}

export class DepthPlaneSpotCheckResult extends jspb.Message { 
    getStatus(): DepthPlaneSpotCheckResult.Status;
    setStatus(value: DepthPlaneSpotCheckResult.Status): DepthPlaneSpotCheckResult;
    getSeverityScore(): number;
    setSeverityScore(value: number): DepthPlaneSpotCheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepthPlaneSpotCheckResult.AsObject;
    static toObject(includeInstance: boolean, msg: DepthPlaneSpotCheckResult): DepthPlaneSpotCheckResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepthPlaneSpotCheckResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepthPlaneSpotCheckResult;
    static deserializeBinaryFromReader(message: DepthPlaneSpotCheckResult, reader: jspb.BinaryReader): DepthPlaneSpotCheckResult;
}

export namespace DepthPlaneSpotCheckResult {
    export type AsObject = {
        status: DepthPlaneSpotCheckResult.Status,
        severityScore: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_WARNING = 2,
    STATUS_ERROR = 3,
    }

}

export class PayloadCheckResult extends jspb.Message { 
    getError(): PayloadCheckResult.Error;
    setError(value: PayloadCheckResult.Error): PayloadCheckResult;
    getExtraPayload(): number;
    setExtraPayload(value: number): PayloadCheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadCheckResult.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadCheckResult): PayloadCheckResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadCheckResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadCheckResult;
    static deserializeBinaryFromReader(message: PayloadCheckResult, reader: jspb.BinaryReader): PayloadCheckResult;
}

export namespace PayloadCheckResult {
    export type AsObject = {
        error: PayloadCheckResult.Error,
        extraPayload: number,
    }

    export enum Error {
    ERROR_UNKNOWN = 0,
    ERROR_NONE = 1,
    ERROR_MASS_DISCREPANCY = 2,
    }

}

export class LoadCellSpotCheckResult extends jspb.Message { 
    getError(): LoadCellSpotCheckResult.Error;
    setError(value: LoadCellSpotCheckResult.Error): LoadCellSpotCheckResult;
    getZero(): number;
    setZero(value: number): LoadCellSpotCheckResult;
    getOldZero(): number;
    setOldZero(value: number): LoadCellSpotCheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadCellSpotCheckResult.AsObject;
    static toObject(includeInstance: boolean, msg: LoadCellSpotCheckResult): LoadCellSpotCheckResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadCellSpotCheckResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadCellSpotCheckResult;
    static deserializeBinaryFromReader(message: LoadCellSpotCheckResult, reader: jspb.BinaryReader): LoadCellSpotCheckResult;
}

export namespace LoadCellSpotCheckResult {
    export type AsObject = {
        error: LoadCellSpotCheckResult.Error,
        zero: number,
        oldZero: number,
    }

    export enum Error {
    ERROR_UNKNOWN = 0,
    ERROR_NONE = 1,
    ERROR_ZERO_OUT_OF_RANGE = 2,
    }

}

export class JointKinematicCheckResult extends jspb.Message { 
    getError(): JointKinematicCheckResult.Error;
    setError(value: JointKinematicCheckResult.Error): JointKinematicCheckResult;
    getOffset(): number;
    setOffset(value: number): JointKinematicCheckResult;
    getOldOffset(): number;
    setOldOffset(value: number): JointKinematicCheckResult;
    getHealthScore(): number;
    setHealthScore(value: number): JointKinematicCheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JointKinematicCheckResult.AsObject;
    static toObject(includeInstance: boolean, msg: JointKinematicCheckResult): JointKinematicCheckResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JointKinematicCheckResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JointKinematicCheckResult;
    static deserializeBinaryFromReader(message: JointKinematicCheckResult, reader: jspb.BinaryReader): JointKinematicCheckResult;
}

export namespace JointKinematicCheckResult {
    export type AsObject = {
        error: JointKinematicCheckResult.Error,
        offset: number,
        oldOffset: number,
        healthScore: number,
    }

    export enum Error {
    ERROR_UNKNOWN = 0,
    ERROR_NONE = 1,
    ERROR_CLUTCH_SLIP = 2,
    ERROR_INVALID_RANGE_OF_MOTION = 3,
    ERROR_ENCODER_SHIFTED = 4,
    ERROR_COLLISION = 5,
    }

}

export class FootHeightCheckResult extends jspb.Message { 
    getStatus(): FootHeightCheckResult.Status;
    setStatus(value: FootHeightCheckResult.Status): FootHeightCheckResult;
    getFootHeightErrorFromMean(): number;
    setFootHeightErrorFromMean(value: number): FootHeightCheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FootHeightCheckResult.AsObject;
    static toObject(includeInstance: boolean, msg: FootHeightCheckResult): FootHeightCheckResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FootHeightCheckResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FootHeightCheckResult;
    static deserializeBinaryFromReader(message: FootHeightCheckResult, reader: jspb.BinaryReader): FootHeightCheckResult;
}

export namespace FootHeightCheckResult {
    export type AsObject = {
        status: FootHeightCheckResult.Status,
        footHeightErrorFromMean: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_WARNING = 2,
    STATUS_ERROR = 3,
    }

}

export class LegPairCheckResult extends jspb.Message { 
    getStatus(): LegPairCheckResult.Status;
    setStatus(value: LegPairCheckResult.Status): LegPairCheckResult;
    getLegPairDistanceChange(): number;
    setLegPairDistanceChange(value: number): LegPairCheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegPairCheckResult.AsObject;
    static toObject(includeInstance: boolean, msg: LegPairCheckResult): LegPairCheckResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegPairCheckResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegPairCheckResult;
    static deserializeBinaryFromReader(message: LegPairCheckResult, reader: jspb.BinaryReader): LegPairCheckResult;
}

export namespace LegPairCheckResult {
    export type AsObject = {
        status: LegPairCheckResult.Status,
        legPairDistanceChange: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_WARNING = 2,
    STATUS_ERROR = 3,
    }

}

export class HipRangeOfMotionResult extends jspb.Message { 
    getError(): HipRangeOfMotionResult.Error;
    setError(value: HipRangeOfMotionResult.Error): HipRangeOfMotionResult;
    clearHxList(): void;
    getHxList(): Array<number>;
    setHxList(value: Array<number>): HipRangeOfMotionResult;
    addHx(value: number, index?: number): number;
    clearHyList(): void;
    getHyList(): Array<number>;
    setHyList(value: Array<number>): HipRangeOfMotionResult;
    addHy(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HipRangeOfMotionResult.AsObject;
    static toObject(includeInstance: boolean, msg: HipRangeOfMotionResult): HipRangeOfMotionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HipRangeOfMotionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HipRangeOfMotionResult;
    static deserializeBinaryFromReader(message: HipRangeOfMotionResult, reader: jspb.BinaryReader): HipRangeOfMotionResult;
}

export namespace HipRangeOfMotionResult {
    export type AsObject = {
        error: HipRangeOfMotionResult.Error,
        hxList: Array<number>,
        hyList: Array<number>,
    }

    export enum Error {
    ERROR_UNKNOWN = 0,
    ERROR_NONE = 1,
    ERROR_OBSTRUCTED = 2,
    }

}

export class CameraCalibrationCommandRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): CameraCalibrationCommandRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): CameraCalibrationCommandRequest;
    getCommand(): CameraCalibrationCommandRequest.Command;
    setCommand(value: CameraCalibrationCommandRequest.Command): CameraCalibrationCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CameraCalibrationCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CameraCalibrationCommandRequest): CameraCalibrationCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CameraCalibrationCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CameraCalibrationCommandRequest;
    static deserializeBinaryFromReader(message: CameraCalibrationCommandRequest, reader: jspb.BinaryReader): CameraCalibrationCommandRequest;
}

export namespace CameraCalibrationCommandRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        command: CameraCalibrationCommandRequest.Command,
    }

    export enum Command {
    COMMAND_UNKNOWN = 0,
    COMMAND_START = 1,
    COMMAND_CANCEL = 2,
    }

}

export class CameraCalibrationCommandResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): CameraCalibrationCommandResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): CameraCalibrationCommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CameraCalibrationCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CameraCalibrationCommandResponse): CameraCalibrationCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CameraCalibrationCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CameraCalibrationCommandResponse;
    static deserializeBinaryFromReader(message: CameraCalibrationCommandResponse, reader: jspb.BinaryReader): CameraCalibrationCommandResponse;
}

export namespace CameraCalibrationCommandResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
    }
}

export class CameraCalibrationFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): CameraCalibrationFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CameraCalibrationFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CameraCalibrationFeedbackRequest): CameraCalibrationFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CameraCalibrationFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CameraCalibrationFeedbackRequest;
    static deserializeBinaryFromReader(message: CameraCalibrationFeedbackRequest, reader: jspb.BinaryReader): CameraCalibrationFeedbackRequest;
}

export namespace CameraCalibrationFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class CameraCalibrationFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): CameraCalibrationFeedbackResponse;
    getStatus(): CameraCalibrationFeedbackResponse.Status;
    setStatus(value: CameraCalibrationFeedbackResponse.Status): CameraCalibrationFeedbackResponse;
    getProgress(): number;
    setProgress(value: number): CameraCalibrationFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CameraCalibrationFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CameraCalibrationFeedbackResponse): CameraCalibrationFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CameraCalibrationFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CameraCalibrationFeedbackResponse;
    static deserializeBinaryFromReader(message: CameraCalibrationFeedbackResponse, reader: jspb.BinaryReader): CameraCalibrationFeedbackResponse;
}

export namespace CameraCalibrationFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: CameraCalibrationFeedbackResponse.Status,
        progress: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_PROCESSING = 1,
    STATUS_SUCCESS = 2,
    STATUS_USER_CANCELED = 3,
    STATUS_POWER_ERROR = 4,
    STATUS_LEASE_ERROR = 5,
    STATUS_ROBOT_COMMAND_ERROR = 7,
    STATUS_CALIBRATION_ERROR = 8,
    STATUS_INTERNAL_ERROR = 9,
    STATUS_CAMERA_FOCUS_ERROR = 14,
    STATUS_TARGET_NOT_CENTERED = 6,
    STATUS_TARGET_NOT_IN_VIEW = 11,
    STATUS_TARGET_NOT_GRAVITY_ALIGNED = 12,
    STATUS_TARGET_UPSIDE_DOWN = 13,
    STATUS_NEVER_RUN = 10,
    STATUS_CAMERA_NOT_DETECTED = 15,
    STATUS_INTRINSIC_WRITE_FAILED = 16,
    STATUS_EXTRINSIC_WRITE_FAILED = 17,
    STATUS_CALIBRATION_VERIFICATION_FAILED = 18,
    }

}
