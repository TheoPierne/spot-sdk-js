// package: bosdyn.api.spot
// file: bosdyn/api/spot/door.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_basic_command_pb from "../../../bosdyn/api/basic_command_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";

export class OpenDoorCommandRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): OpenDoorCommandRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): OpenDoorCommandRequest;

    hasDoorCommand(): boolean;
    clearDoorCommand(): void;
    getDoorCommand(): DoorCommand.Request | undefined;
    setDoorCommand(value?: DoorCommand.Request): OpenDoorCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenDoorCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OpenDoorCommandRequest): OpenDoorCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenDoorCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenDoorCommandRequest;
    static deserializeBinaryFromReader(message: OpenDoorCommandRequest, reader: jspb.BinaryReader): OpenDoorCommandRequest;
}

export namespace OpenDoorCommandRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        doorCommand?: DoorCommand.Request.AsObject,
    }
}

export class OpenDoorCommandResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): OpenDoorCommandResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): OpenDoorCommandResponse;
    getStatus(): OpenDoorCommandResponse.Status;
    setStatus(value: OpenDoorCommandResponse.Status): OpenDoorCommandResponse;
    getMessage(): string;
    setMessage(value: string): OpenDoorCommandResponse;
    getDoorCommandId(): number;
    setDoorCommandId(value: number): OpenDoorCommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenDoorCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OpenDoorCommandResponse): OpenDoorCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenDoorCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenDoorCommandResponse;
    static deserializeBinaryFromReader(message: OpenDoorCommandResponse, reader: jspb.BinaryReader): OpenDoorCommandResponse;
}

export namespace OpenDoorCommandResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: OpenDoorCommandResponse.Status,
        message: string,
        doorCommandId: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ROBOT_COMMAND_ERROR = 2,
    STATUS_DOOR_PLANE_NOT_DETECTED = 3,
    }

}

export class OpenDoorFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): OpenDoorFeedbackRequest;
    getDoorCommandId(): number;
    setDoorCommandId(value: number): OpenDoorFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenDoorFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OpenDoorFeedbackRequest): OpenDoorFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenDoorFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenDoorFeedbackRequest;
    static deserializeBinaryFromReader(message: OpenDoorFeedbackRequest, reader: jspb.BinaryReader): OpenDoorFeedbackRequest;
}

export namespace OpenDoorFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        doorCommandId: number,
    }
}

export class OpenDoorFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): OpenDoorFeedbackResponse;
    getStatus(): bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status;
    setStatus(value: bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status): OpenDoorFeedbackResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): OpenDoorFeedbackResponse;

    hasFeedback(): boolean;
    clearFeedback(): void;
    getFeedback(): DoorCommand.Feedback | undefined;
    setFeedback(value?: DoorCommand.Feedback): OpenDoorFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenDoorFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OpenDoorFeedbackResponse): OpenDoorFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenDoorFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenDoorFeedbackResponse;
    static deserializeBinaryFromReader(message: OpenDoorFeedbackResponse, reader: jspb.BinaryReader): OpenDoorFeedbackResponse;
}

export namespace OpenDoorFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        feedback?: DoorCommand.Feedback.AsObject,
    }
}

export class DoorCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoorCommand.AsObject;
    static toObject(includeInstance: boolean, msg: DoorCommand): DoorCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoorCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoorCommand;
    static deserializeBinaryFromReader(message: DoorCommand, reader: jspb.BinaryReader): DoorCommand;
}

export namespace DoorCommand {
    export type AsObject = {
    }


    export class AutoGraspCommand extends jspb.Message { 
        getFrameName(): string;
        setFrameName(value: string): AutoGraspCommand;

        hasSearchRayStartInFrame(): boolean;
        clearSearchRayStartInFrame(): void;
        getSearchRayStartInFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setSearchRayStartInFrame(value?: bosdyn_api_geometry_pb.Vec3): AutoGraspCommand;

        hasSearchRayEndInFrame(): boolean;
        clearSearchRayEndInFrame(): void;
        getSearchRayEndInFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setSearchRayEndInFrame(value?: bosdyn_api_geometry_pb.Vec3): AutoGraspCommand;
        getHingeSide(): DoorCommand.HingeSide;
        setHingeSide(value: DoorCommand.HingeSide): AutoGraspCommand;
        getSwingDirection(): DoorCommand.SwingDirection;
        setSwingDirection(value: DoorCommand.SwingDirection): AutoGraspCommand;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AutoGraspCommand.AsObject;
        static toObject(includeInstance: boolean, msg: AutoGraspCommand): AutoGraspCommand.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AutoGraspCommand, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AutoGraspCommand;
        static deserializeBinaryFromReader(message: AutoGraspCommand, reader: jspb.BinaryReader): AutoGraspCommand;
    }

    export namespace AutoGraspCommand {
        export type AsObject = {
            frameName: string,
            searchRayStartInFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
            searchRayEndInFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
            hingeSide: DoorCommand.HingeSide,
            swingDirection: DoorCommand.SwingDirection,
        }
    }

    export class WarmstartCommand extends jspb.Message { 
        getHingeSide(): DoorCommand.HingeSide;
        setHingeSide(value: DoorCommand.HingeSide): WarmstartCommand;
        getSwingDirection(): DoorCommand.SwingDirection;
        setSwingDirection(value: DoorCommand.SwingDirection): WarmstartCommand;
        getHandleType(): DoorCommand.HandleType;
        setHandleType(value: DoorCommand.HandleType): WarmstartCommand;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WarmstartCommand.AsObject;
        static toObject(includeInstance: boolean, msg: WarmstartCommand): WarmstartCommand.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WarmstartCommand, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WarmstartCommand;
        static deserializeBinaryFromReader(message: WarmstartCommand, reader: jspb.BinaryReader): WarmstartCommand;
    }

    export namespace WarmstartCommand {
        export type AsObject = {
            hingeSide: DoorCommand.HingeSide,
            swingDirection: DoorCommand.SwingDirection,
            handleType: DoorCommand.HandleType,
        }
    }

    export class AutoPushCommand extends jspb.Message { 
        getFrameName(): string;
        setFrameName(value: string): AutoPushCommand;

        hasPushPointInFrame(): boolean;
        clearPushPointInFrame(): void;
        getPushPointInFrame(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setPushPointInFrame(value?: bosdyn_api_geometry_pb.Vec3): AutoPushCommand;
        getHingeSide(): DoorCommand.HingeSide;
        setHingeSide(value: DoorCommand.HingeSide): AutoPushCommand;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AutoPushCommand.AsObject;
        static toObject(includeInstance: boolean, msg: AutoPushCommand): AutoPushCommand.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AutoPushCommand, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AutoPushCommand;
        static deserializeBinaryFromReader(message: AutoPushCommand, reader: jspb.BinaryReader): AutoPushCommand;
    }

    export namespace AutoPushCommand {
        export type AsObject = {
            frameName: string,
            pushPointInFrame?: bosdyn_api_geometry_pb.Vec3.AsObject,
            hingeSide: DoorCommand.HingeSide,
        }
    }

    export class Request extends jspb.Message { 

        hasAutoGraspCommand(): boolean;
        clearAutoGraspCommand(): void;
        getAutoGraspCommand(): DoorCommand.AutoGraspCommand | undefined;
        setAutoGraspCommand(value?: DoorCommand.AutoGraspCommand): Request;

        hasWarmstartCommand(): boolean;
        clearWarmstartCommand(): void;
        getWarmstartCommand(): DoorCommand.WarmstartCommand | undefined;
        setWarmstartCommand(value?: DoorCommand.WarmstartCommand): Request;

        hasAutoPushCommand(): boolean;
        clearAutoPushCommand(): void;
        getAutoPushCommand(): DoorCommand.AutoPushCommand | undefined;
        setAutoPushCommand(value?: DoorCommand.AutoPushCommand): Request;

        getCommandCase(): Request.CommandCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            autoGraspCommand?: DoorCommand.AutoGraspCommand.AsObject,
            warmstartCommand?: DoorCommand.WarmstartCommand.AsObject,
            autoPushCommand?: DoorCommand.AutoPushCommand.AsObject,
        }

        export enum CommandCase {
            COMMAND_NOT_SET = 0,
            AUTO_GRASP_COMMAND = 10,
            WARMSTART_COMMAND = 11,
            AUTO_PUSH_COMMAND = 12,
        }

    }

    export class Feedback extends jspb.Message { 
        getStatus(): DoorCommand.Feedback.Status;
        setStatus(value: DoorCommand.Feedback.Status): Feedback;
        getDistancePastThreshold(): number;
        setDistancePastThreshold(value: number): Feedback;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Feedback.AsObject;
        static toObject(includeInstance: boolean, msg: Feedback): Feedback.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Feedback, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Feedback;
        static deserializeBinaryFromReader(message: Feedback, reader: jspb.BinaryReader): Feedback;
    }

    export namespace Feedback {
        export type AsObject = {
            status: DoorCommand.Feedback.Status,
            distancePastThreshold: number,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_COMPLETED = 1,
    STATUS_IN_PROGRESS = 2,
    STATUS_STALLED = 3,
    STATUS_NOT_DETECTED = 4,
        }

    }


    export enum HingeSide {
    HINGE_SIDE_UNKNOWN = 0,
    HINGE_SIDE_LEFT = 1,
    HINGE_SIDE_RIGHT = 2,
    }

    export enum SwingDirection {
    SWING_DIRECTION_UNKNOWN = 0,
    SWING_DIRECTION_INSWING = 1,
    SWING_DIRECTION_PULL = 1,
    SWING_DIRECTION_OUTSWING = 2,
    SWING_DIRECTION_PUSH = 2,
    }

    export enum HandleType {
    HANDLE_TYPE_UNKNOWN = 0,
    HANDLE_TYPE_LEVER = 1,
    HANDLE_TYPE_KNOB = 2,
    HANDLE_TYPE_FIXED_GRASP = 3,
    }

}
