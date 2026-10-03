// package: bosdyn.api
// file: bosdyn/api/gripper_command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_basic_command_pb from "../../bosdyn/api/basic_command_pb";
import * as bosdyn_api_trajectory_pb from "../../bosdyn/api/trajectory_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GripperCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperCommand.AsObject;
    static toObject(includeInstance: boolean, msg: GripperCommand): GripperCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperCommand;
    static deserializeBinaryFromReader(message: GripperCommand, reader: jspb.BinaryReader): GripperCommand;
}

export namespace GripperCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasClawGripperCommand(): boolean;
        clearClawGripperCommand(): void;
        getClawGripperCommand(): ClawGripperCommand.Request | undefined;
        setClawGripperCommand(value?: ClawGripperCommand.Request): Request;

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
            clawGripperCommand?: ClawGripperCommand.Request.AsObject,
        }

        export enum CommandCase {
            COMMAND_NOT_SET = 0,
            CLAW_GRIPPER_COMMAND = 1,
        }

    }

    export class Feedback extends jspb.Message { 

        hasClawGripperFeedback(): boolean;
        clearClawGripperFeedback(): void;
        getClawGripperFeedback(): ClawGripperCommand.Feedback | undefined;
        setClawGripperFeedback(value?: ClawGripperCommand.Feedback): Feedback;
        getStatus(): bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status;
        setStatus(value: bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status): Feedback;

        getCommandCase(): Feedback.CommandCase;

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
            clawGripperFeedback?: ClawGripperCommand.Feedback.AsObject,
            status: bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status,
        }

        export enum CommandCase {
            COMMAND_NOT_SET = 0,
            CLAW_GRIPPER_FEEDBACK = 1,
        }

    }

}

export class ClawGripperCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClawGripperCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ClawGripperCommand): ClawGripperCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClawGripperCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClawGripperCommand;
    static deserializeBinaryFromReader(message: ClawGripperCommand, reader: jspb.BinaryReader): ClawGripperCommand;
}

export namespace ClawGripperCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasTrajectory(): boolean;
        clearTrajectory(): void;
        getTrajectory(): bosdyn_api_trajectory_pb.ScalarTrajectory | undefined;
        setTrajectory(value?: bosdyn_api_trajectory_pb.ScalarTrajectory): Request;

        hasMaximumOpenCloseVelocity(): boolean;
        clearMaximumOpenCloseVelocity(): void;
        getMaximumOpenCloseVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaximumOpenCloseVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaximumOpenCloseAcceleration(): boolean;
        clearMaximumOpenCloseAcceleration(): void;
        getMaximumOpenCloseAcceleration(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaximumOpenCloseAcceleration(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaximumTorque(): boolean;
        clearMaximumTorque(): void;
        getMaximumTorque(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaximumTorque(value?: google_protobuf_wrappers_pb.DoubleValue): Request;
        getDisableForceOnContact(): boolean;
        setDisableForceOnContact(value: boolean): Request;

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
            trajectory?: bosdyn_api_trajectory_pb.ScalarTrajectory.AsObject,
            maximumOpenCloseVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maximumOpenCloseAcceleration?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maximumTorque?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            disableForceOnContact: boolean,
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): ClawGripperCommand.Feedback.Status;
        setStatus(value: ClawGripperCommand.Feedback.Status): Feedback;

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
            status: ClawGripperCommand.Feedback.Status,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_IN_PROGRESS = 1,
    STATUS_AT_GOAL = 2,
    STATUS_APPLYING_FORCE = 3,
        }

    }

}
