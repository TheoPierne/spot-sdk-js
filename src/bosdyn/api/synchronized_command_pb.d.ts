// package: bosdyn.api
// file: bosdyn/api/synchronized_command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_arm_command_pb from "../../bosdyn/api/arm_command_pb";
import * as bosdyn_api_gripper_command_pb from "../../bosdyn/api/gripper_command_pb";
import * as bosdyn_api_mobility_command_pb from "../../bosdyn/api/mobility_command_pb";

export class SynchronizedCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SynchronizedCommand.AsObject;
    static toObject(includeInstance: boolean, msg: SynchronizedCommand): SynchronizedCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SynchronizedCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SynchronizedCommand;
    static deserializeBinaryFromReader(message: SynchronizedCommand, reader: jspb.BinaryReader): SynchronizedCommand;
}

export namespace SynchronizedCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasArmCommand(): boolean;
        clearArmCommand(): void;
        getArmCommand(): bosdyn_api_arm_command_pb.ArmCommand.Request | undefined;
        setArmCommand(value?: bosdyn_api_arm_command_pb.ArmCommand.Request): Request;

        hasMobilityCommand(): boolean;
        clearMobilityCommand(): void;
        getMobilityCommand(): bosdyn_api_mobility_command_pb.MobilityCommand.Request | undefined;
        setMobilityCommand(value?: bosdyn_api_mobility_command_pb.MobilityCommand.Request): Request;

        hasGripperCommand(): boolean;
        clearGripperCommand(): void;
        getGripperCommand(): bosdyn_api_gripper_command_pb.GripperCommand.Request | undefined;
        setGripperCommand(value?: bosdyn_api_gripper_command_pb.GripperCommand.Request): Request;

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
            armCommand?: bosdyn_api_arm_command_pb.ArmCommand.Request.AsObject,
            mobilityCommand?: bosdyn_api_mobility_command_pb.MobilityCommand.Request.AsObject,
            gripperCommand?: bosdyn_api_gripper_command_pb.GripperCommand.Request.AsObject,
        }
    }

    export class Feedback extends jspb.Message { 

        hasArmCommandFeedback(): boolean;
        clearArmCommandFeedback(): void;
        getArmCommandFeedback(): bosdyn_api_arm_command_pb.ArmCommand.Feedback | undefined;
        setArmCommandFeedback(value?: bosdyn_api_arm_command_pb.ArmCommand.Feedback): Feedback;

        hasMobilityCommandFeedback(): boolean;
        clearMobilityCommandFeedback(): void;
        getMobilityCommandFeedback(): bosdyn_api_mobility_command_pb.MobilityCommand.Feedback | undefined;
        setMobilityCommandFeedback(value?: bosdyn_api_mobility_command_pb.MobilityCommand.Feedback): Feedback;

        hasGripperCommandFeedback(): boolean;
        clearGripperCommandFeedback(): void;
        getGripperCommandFeedback(): bosdyn_api_gripper_command_pb.GripperCommand.Feedback | undefined;
        setGripperCommandFeedback(value?: bosdyn_api_gripper_command_pb.GripperCommand.Feedback): Feedback;

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
            armCommandFeedback?: bosdyn_api_arm_command_pb.ArmCommand.Feedback.AsObject,
            mobilityCommandFeedback?: bosdyn_api_mobility_command_pb.MobilityCommand.Feedback.AsObject,
            gripperCommandFeedback?: bosdyn_api_gripper_command_pb.GripperCommand.Feedback.AsObject,
        }
    }

}
