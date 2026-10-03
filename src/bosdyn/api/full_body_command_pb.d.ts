// package: bosdyn.api
// file: bosdyn/api/full_body_command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_basic_command_pb from "../../bosdyn/api/basic_command_pb";
import * as bosdyn_api_payload_estimation_pb from "../../bosdyn/api/payload_estimation_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class FullBodyCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullBodyCommand.AsObject;
    static toObject(includeInstance: boolean, msg: FullBodyCommand): FullBodyCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullBodyCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullBodyCommand;
    static deserializeBinaryFromReader(message: FullBodyCommand, reader: jspb.BinaryReader): FullBodyCommand;
}

export namespace FullBodyCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasStopRequest(): boolean;
        clearStopRequest(): void;
        getStopRequest(): bosdyn_api_basic_command_pb.StopCommand.Request | undefined;
        setStopRequest(value?: bosdyn_api_basic_command_pb.StopCommand.Request): Request;

        hasFreezeRequest(): boolean;
        clearFreezeRequest(): void;
        getFreezeRequest(): bosdyn_api_basic_command_pb.FreezeCommand.Request | undefined;
        setFreezeRequest(value?: bosdyn_api_basic_command_pb.FreezeCommand.Request): Request;

        hasSelfrightRequest(): boolean;
        clearSelfrightRequest(): void;
        getSelfrightRequest(): bosdyn_api_basic_command_pb.SelfRightCommand.Request | undefined;
        setSelfrightRequest(value?: bosdyn_api_basic_command_pb.SelfRightCommand.Request): Request;

        hasSafePowerOffRequest(): boolean;
        clearSafePowerOffRequest(): void;
        getSafePowerOffRequest(): bosdyn_api_basic_command_pb.SafePowerOffCommand.Request | undefined;
        setSafePowerOffRequest(value?: bosdyn_api_basic_command_pb.SafePowerOffCommand.Request): Request;

        hasBatteryChangePoseRequest(): boolean;
        clearBatteryChangePoseRequest(): void;
        getBatteryChangePoseRequest(): bosdyn_api_basic_command_pb.BatteryChangePoseCommand.Request | undefined;
        setBatteryChangePoseRequest(value?: bosdyn_api_basic_command_pb.BatteryChangePoseCommand.Request): Request;

        hasPayloadEstimationRequest(): boolean;
        clearPayloadEstimationRequest(): void;
        getPayloadEstimationRequest(): bosdyn_api_payload_estimation_pb.PayloadEstimationCommand.Request | undefined;
        setPayloadEstimationRequest(value?: bosdyn_api_payload_estimation_pb.PayloadEstimationCommand.Request): Request;

        hasConstrainedManipulationRequest(): boolean;
        clearConstrainedManipulationRequest(): void;
        getConstrainedManipulationRequest(): bosdyn_api_basic_command_pb.ConstrainedManipulationCommand.Request | undefined;
        setConstrainedManipulationRequest(value?: bosdyn_api_basic_command_pb.ConstrainedManipulationCommand.Request): Request;

        hasJointRequest(): boolean;
        clearJointRequest(): void;
        getJointRequest(): bosdyn_api_basic_command_pb.JointCommand.Request | undefined;
        setJointRequest(value?: bosdyn_api_basic_command_pb.JointCommand.Request): Request;

        hasParams(): boolean;
        clearParams(): void;
        getParams(): google_protobuf_any_pb.Any | undefined;
        setParams(value?: google_protobuf_any_pb.Any): Request;

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
            stopRequest?: bosdyn_api_basic_command_pb.StopCommand.Request.AsObject,
            freezeRequest?: bosdyn_api_basic_command_pb.FreezeCommand.Request.AsObject,
            selfrightRequest?: bosdyn_api_basic_command_pb.SelfRightCommand.Request.AsObject,
            safePowerOffRequest?: bosdyn_api_basic_command_pb.SafePowerOffCommand.Request.AsObject,
            batteryChangePoseRequest?: bosdyn_api_basic_command_pb.BatteryChangePoseCommand.Request.AsObject,
            payloadEstimationRequest?: bosdyn_api_payload_estimation_pb.PayloadEstimationCommand.Request.AsObject,
            constrainedManipulationRequest?: bosdyn_api_basic_command_pb.ConstrainedManipulationCommand.Request.AsObject,
            jointRequest?: bosdyn_api_basic_command_pb.JointCommand.Request.AsObject,
            params?: google_protobuf_any_pb.Any.AsObject,
        }

        export enum CommandCase {
            COMMAND_NOT_SET = 0,
            STOP_REQUEST = 1,
            FREEZE_REQUEST = 2,
            SELFRIGHT_REQUEST = 3,
            SAFE_POWER_OFF_REQUEST = 4,
            BATTERY_CHANGE_POSE_REQUEST = 5,
            PAYLOAD_ESTIMATION_REQUEST = 6,
            CONSTRAINED_MANIPULATION_REQUEST = 7,
            JOINT_REQUEST = 8,
        }

    }

    export class Feedback extends jspb.Message { 

        hasStopFeedback(): boolean;
        clearStopFeedback(): void;
        getStopFeedback(): bosdyn_api_basic_command_pb.StopCommand.Feedback | undefined;
        setStopFeedback(value?: bosdyn_api_basic_command_pb.StopCommand.Feedback): Feedback;

        hasFreezeFeedback(): boolean;
        clearFreezeFeedback(): void;
        getFreezeFeedback(): bosdyn_api_basic_command_pb.FreezeCommand.Feedback | undefined;
        setFreezeFeedback(value?: bosdyn_api_basic_command_pb.FreezeCommand.Feedback): Feedback;

        hasSelfrightFeedback(): boolean;
        clearSelfrightFeedback(): void;
        getSelfrightFeedback(): bosdyn_api_basic_command_pb.SelfRightCommand.Feedback | undefined;
        setSelfrightFeedback(value?: bosdyn_api_basic_command_pb.SelfRightCommand.Feedback): Feedback;

        hasSafePowerOffFeedback(): boolean;
        clearSafePowerOffFeedback(): void;
        getSafePowerOffFeedback(): bosdyn_api_basic_command_pb.SafePowerOffCommand.Feedback | undefined;
        setSafePowerOffFeedback(value?: bosdyn_api_basic_command_pb.SafePowerOffCommand.Feedback): Feedback;

        hasBatteryChangePoseFeedback(): boolean;
        clearBatteryChangePoseFeedback(): void;
        getBatteryChangePoseFeedback(): bosdyn_api_basic_command_pb.BatteryChangePoseCommand.Feedback | undefined;
        setBatteryChangePoseFeedback(value?: bosdyn_api_basic_command_pb.BatteryChangePoseCommand.Feedback): Feedback;

        hasPayloadEstimationFeedback(): boolean;
        clearPayloadEstimationFeedback(): void;
        getPayloadEstimationFeedback(): bosdyn_api_payload_estimation_pb.PayloadEstimationCommand.Feedback | undefined;
        setPayloadEstimationFeedback(value?: bosdyn_api_payload_estimation_pb.PayloadEstimationCommand.Feedback): Feedback;

        hasConstrainedManipulationFeedback(): boolean;
        clearConstrainedManipulationFeedback(): void;
        getConstrainedManipulationFeedback(): bosdyn_api_basic_command_pb.ConstrainedManipulationCommand.Feedback | undefined;
        setConstrainedManipulationFeedback(value?: bosdyn_api_basic_command_pb.ConstrainedManipulationCommand.Feedback): Feedback;

        hasJointFeedback(): boolean;
        clearJointFeedback(): void;
        getJointFeedback(): bosdyn_api_basic_command_pb.JointCommand.Feedback | undefined;
        setJointFeedback(value?: bosdyn_api_basic_command_pb.JointCommand.Feedback): Feedback;
        getStatus(): bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status;
        setStatus(value: bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status): Feedback;

        getFeedbackCase(): Feedback.FeedbackCase;

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
            stopFeedback?: bosdyn_api_basic_command_pb.StopCommand.Feedback.AsObject,
            freezeFeedback?: bosdyn_api_basic_command_pb.FreezeCommand.Feedback.AsObject,
            selfrightFeedback?: bosdyn_api_basic_command_pb.SelfRightCommand.Feedback.AsObject,
            safePowerOffFeedback?: bosdyn_api_basic_command_pb.SafePowerOffCommand.Feedback.AsObject,
            batteryChangePoseFeedback?: bosdyn_api_basic_command_pb.BatteryChangePoseCommand.Feedback.AsObject,
            payloadEstimationFeedback?: bosdyn_api_payload_estimation_pb.PayloadEstimationCommand.Feedback.AsObject,
            constrainedManipulationFeedback?: bosdyn_api_basic_command_pb.ConstrainedManipulationCommand.Feedback.AsObject,
            jointFeedback?: bosdyn_api_basic_command_pb.JointCommand.Feedback.AsObject,
            status: bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status,
        }

        export enum FeedbackCase {
            FEEDBACK_NOT_SET = 0,
            STOP_FEEDBACK = 1,
            FREEZE_FEEDBACK = 2,
            SELFRIGHT_FEEDBACK = 3,
            SAFE_POWER_OFF_FEEDBACK = 4,
            BATTERY_CHANGE_POSE_FEEDBACK = 5,
            PAYLOAD_ESTIMATION_FEEDBACK = 6,
            CONSTRAINED_MANIPULATION_FEEDBACK = 7,
            JOINT_FEEDBACK = 8,
        }

    }

}
