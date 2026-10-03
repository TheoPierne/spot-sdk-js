// package: bosdyn.api
// file: bosdyn/api/robot_command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_basic_command_pb from "../../bosdyn/api/basic_command_pb";
import * as bosdyn_api_full_body_command_pb from "../../bosdyn/api/full_body_command_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../bosdyn/api/lease_pb";
import * as bosdyn_api_robot_state_pb from "../../bosdyn/api/robot_state_pb";
import * as bosdyn_api_synchronized_command_pb from "../../bosdyn/api/synchronized_command_pb";

export class RobotCommand extends jspb.Message { 

    hasFullBodyCommand(): boolean;
    clearFullBodyCommand(): void;
    getFullBodyCommand(): bosdyn_api_full_body_command_pb.FullBodyCommand.Request | undefined;
    setFullBodyCommand(value?: bosdyn_api_full_body_command_pb.FullBodyCommand.Request): RobotCommand;

    hasSynchronizedCommand(): boolean;
    clearSynchronizedCommand(): void;
    getSynchronizedCommand(): bosdyn_api_synchronized_command_pb.SynchronizedCommand.Request | undefined;
    setSynchronizedCommand(value?: bosdyn_api_synchronized_command_pb.SynchronizedCommand.Request): RobotCommand;

    getCommandCase(): RobotCommand.CommandCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotCommand.AsObject;
    static toObject(includeInstance: boolean, msg: RobotCommand): RobotCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotCommand;
    static deserializeBinaryFromReader(message: RobotCommand, reader: jspb.BinaryReader): RobotCommand;
}

export namespace RobotCommand {
    export type AsObject = {
        fullBodyCommand?: bosdyn_api_full_body_command_pb.FullBodyCommand.Request.AsObject,
        synchronizedCommand?: bosdyn_api_synchronized_command_pb.SynchronizedCommand.Request.AsObject,
    }

    export enum CommandCase {
        COMMAND_NOT_SET = 0,
        FULL_BODY_COMMAND = 1,
        SYNCHRONIZED_COMMAND = 3,
    }

}

export class RobotCommandFeedback extends jspb.Message { 

    hasFullBodyFeedback(): boolean;
    clearFullBodyFeedback(): void;
    getFullBodyFeedback(): bosdyn_api_full_body_command_pb.FullBodyCommand.Feedback | undefined;
    setFullBodyFeedback(value?: bosdyn_api_full_body_command_pb.FullBodyCommand.Feedback): RobotCommandFeedback;

    hasSynchronizedFeedback(): boolean;
    clearSynchronizedFeedback(): void;
    getSynchronizedFeedback(): bosdyn_api_synchronized_command_pb.SynchronizedCommand.Feedback | undefined;
    setSynchronizedFeedback(value?: bosdyn_api_synchronized_command_pb.SynchronizedCommand.Feedback): RobotCommandFeedback;

    getCommandCase(): RobotCommandFeedback.CommandCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotCommandFeedback.AsObject;
    static toObject(includeInstance: boolean, msg: RobotCommandFeedback): RobotCommandFeedback.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotCommandFeedback, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotCommandFeedback;
    static deserializeBinaryFromReader(message: RobotCommandFeedback, reader: jspb.BinaryReader): RobotCommandFeedback;
}

export namespace RobotCommandFeedback {
    export type AsObject = {
        fullBodyFeedback?: bosdyn_api_full_body_command_pb.FullBodyCommand.Feedback.AsObject,
        synchronizedFeedback?: bosdyn_api_synchronized_command_pb.SynchronizedCommand.Feedback.AsObject,
    }

    export enum CommandCase {
        COMMAND_NOT_SET = 0,
        FULL_BODY_FEEDBACK = 2,
        SYNCHRONIZED_FEEDBACK = 3,
    }

}

export class RobotCommandRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RobotCommandRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): RobotCommandRequest;

    hasCommand(): boolean;
    clearCommand(): void;
    getCommand(): RobotCommand | undefined;
    setCommand(value?: RobotCommand): RobotCommandRequest;
    getClockIdentifier(): string;
    setClockIdentifier(value: string): RobotCommandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotCommandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RobotCommandRequest): RobotCommandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotCommandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotCommandRequest;
    static deserializeBinaryFromReader(message: RobotCommandRequest, reader: jspb.BinaryReader): RobotCommandRequest;
}

export namespace RobotCommandRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        command?: RobotCommand.AsObject,
        clockIdentifier: string,
    }
}

export class RobotCommandResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RobotCommandResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): RobotCommandResponse;
    getStatus(): RobotCommandResponse.Status;
    setStatus(value: RobotCommandResponse.Status): RobotCommandResponse;
    getMessage(): string;
    setMessage(value: string): RobotCommandResponse;
    getRobotCommandId(): number;
    setRobotCommandId(value: number): RobotCommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotCommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RobotCommandResponse): RobotCommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotCommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotCommandResponse;
    static deserializeBinaryFromReader(message: RobotCommandResponse, reader: jspb.BinaryReader): RobotCommandResponse;
}

export namespace RobotCommandResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: RobotCommandResponse.Status,
        message: string,
        robotCommandId: number,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_REQUEST = 2,
    STATUS_UNSUPPORTED = 3,
    STATUS_NO_TIMESYNC = 4,
    STATUS_EXPIRED = 5,
    STATUS_TOO_DISTANT = 6,
    STATUS_NOT_POWERED_ON = 7,
    STATUS_BEHAVIOR_FAULT = 9,
    STATUS_DOCKED = 10,
    STATUS_UNKNOWN_FRAME = 8,
    }

}

export class RobotCommandFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RobotCommandFeedbackRequest;
    getRobotCommandId(): number;
    setRobotCommandId(value: number): RobotCommandFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotCommandFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RobotCommandFeedbackRequest): RobotCommandFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotCommandFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotCommandFeedbackRequest;
    static deserializeBinaryFromReader(message: RobotCommandFeedbackRequest, reader: jspb.BinaryReader): RobotCommandFeedbackRequest;
}

export namespace RobotCommandFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        robotCommandId: number,
    }
}

export class RobotCommandFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RobotCommandFeedbackResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): RobotCommandFeedbackResponse;

    hasFeedback(): boolean;
    clearFeedback(): void;
    getFeedback(): RobotCommandFeedback | undefined;
    setFeedback(value?: RobotCommandFeedback): RobotCommandFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotCommandFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RobotCommandFeedbackResponse): RobotCommandFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotCommandFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotCommandFeedbackResponse;
    static deserializeBinaryFromReader(message: RobotCommandFeedbackResponse, reader: jspb.BinaryReader): RobotCommandFeedbackResponse;
}

export namespace RobotCommandFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        feedback?: RobotCommandFeedback.AsObject,
    }
}

export class ClearBehaviorFaultRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ClearBehaviorFaultRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): ClearBehaviorFaultRequest;
    getBehaviorFaultId(): number;
    setBehaviorFaultId(value: number): ClearBehaviorFaultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearBehaviorFaultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClearBehaviorFaultRequest): ClearBehaviorFaultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearBehaviorFaultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearBehaviorFaultRequest;
    static deserializeBinaryFromReader(message: ClearBehaviorFaultRequest, reader: jspb.BinaryReader): ClearBehaviorFaultRequest;
}

export namespace ClearBehaviorFaultRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        behaviorFaultId: number,
    }
}

export class ClearBehaviorFaultResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ClearBehaviorFaultResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): ClearBehaviorFaultResponse;
    getStatus(): ClearBehaviorFaultResponse.Status;
    setStatus(value: ClearBehaviorFaultResponse.Status): ClearBehaviorFaultResponse;

    hasBehaviorFault(): boolean;
    clearBehaviorFault(): void;
    getBehaviorFault(): bosdyn_api_robot_state_pb.BehaviorFault | undefined;
    setBehaviorFault(value?: bosdyn_api_robot_state_pb.BehaviorFault): ClearBehaviorFaultResponse;
    clearBlockingSystemFaultsList(): void;
    getBlockingSystemFaultsList(): Array<bosdyn_api_robot_state_pb.SystemFault>;
    setBlockingSystemFaultsList(value: Array<bosdyn_api_robot_state_pb.SystemFault>): ClearBehaviorFaultResponse;
    addBlockingSystemFaults(value?: bosdyn_api_robot_state_pb.SystemFault, index?: number): bosdyn_api_robot_state_pb.SystemFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearBehaviorFaultResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClearBehaviorFaultResponse): ClearBehaviorFaultResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearBehaviorFaultResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearBehaviorFaultResponse;
    static deserializeBinaryFromReader(message: ClearBehaviorFaultResponse, reader: jspb.BinaryReader): ClearBehaviorFaultResponse;
}

export namespace ClearBehaviorFaultResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: ClearBehaviorFaultResponse.Status,
        behaviorFault?: bosdyn_api_robot_state_pb.BehaviorFault.AsObject,
        blockingSystemFaultsList: Array<bosdyn_api_robot_state_pb.SystemFault.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_CLEARED = 1,
    STATUS_NOT_CLEARED = 2,
    }

}

export class JointControlStreamRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): JointControlStreamRequest;

    hasJointCommand(): boolean;
    clearJointCommand(): void;
    getJointCommand(): bosdyn_api_basic_command_pb.JointCommand.UpdateRequest | undefined;
    setJointCommand(value?: bosdyn_api_basic_command_pb.JointCommand.UpdateRequest): JointControlStreamRequest;

    hasContactAdvice(): boolean;
    clearContactAdvice(): void;
    getContactAdvice(): bosdyn_api_basic_command_pb.JointCommand.ContactAdvice | undefined;
    setContactAdvice(value?: bosdyn_api_basic_command_pb.JointCommand.ContactAdvice): JointControlStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JointControlStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JointControlStreamRequest): JointControlStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JointControlStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JointControlStreamRequest;
    static deserializeBinaryFromReader(message: JointControlStreamRequest, reader: jspb.BinaryReader): JointControlStreamRequest;
}

export namespace JointControlStreamRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        jointCommand?: bosdyn_api_basic_command_pb.JointCommand.UpdateRequest.AsObject,
        contactAdvice?: bosdyn_api_basic_command_pb.JointCommand.ContactAdvice.AsObject,
    }
}

export class JointControlStreamResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): JointControlStreamResponse;
    getStatus(): JointControlStreamResponse.Status;
    setStatus(value: JointControlStreamResponse.Status): JointControlStreamResponse;
    getMessage(): string;
    setMessage(value: string): JointControlStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JointControlStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JointControlStreamResponse): JointControlStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JointControlStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JointControlStreamResponse;
    static deserializeBinaryFromReader(message: JointControlStreamResponse, reader: jspb.BinaryReader): JointControlStreamResponse;
}

export namespace JointControlStreamResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: JointControlStreamResponse.Status,
        message: string,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_REQUEST = 2,
    STATUS_INACTIVE = 3,
    STATUS_EXPIRED = 4,
    STATUS_TOO_DISTANT = 5,
    }

}
