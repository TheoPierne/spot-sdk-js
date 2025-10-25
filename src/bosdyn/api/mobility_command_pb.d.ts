// package: bosdyn.api
// file: bosdyn/api/mobility_command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_basic_command_pb from "../../bosdyn/api/basic_command_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class MobilityCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MobilityCommand.AsObject;
    static toObject(includeInstance: boolean, msg: MobilityCommand): MobilityCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MobilityCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MobilityCommand;
    static deserializeBinaryFromReader(message: MobilityCommand, reader: jspb.BinaryReader): MobilityCommand;
}

export namespace MobilityCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasSe2TrajectoryRequest(): boolean;
        clearSe2TrajectoryRequest(): void;
        getSe2TrajectoryRequest(): bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Request | undefined;
        setSe2TrajectoryRequest(value?: bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Request): Request;

        hasSe2VelocityRequest(): boolean;
        clearSe2VelocityRequest(): void;
        getSe2VelocityRequest(): bosdyn_api_basic_command_pb.SE2VelocityCommand.Request | undefined;
        setSe2VelocityRequest(value?: bosdyn_api_basic_command_pb.SE2VelocityCommand.Request): Request;

        hasSitRequest(): boolean;
        clearSitRequest(): void;
        getSitRequest(): bosdyn_api_basic_command_pb.SitCommand.Request | undefined;
        setSitRequest(value?: bosdyn_api_basic_command_pb.SitCommand.Request): Request;

        hasStandRequest(): boolean;
        clearStandRequest(): void;
        getStandRequest(): bosdyn_api_basic_command_pb.StandCommand.Request | undefined;
        setStandRequest(value?: bosdyn_api_basic_command_pb.StandCommand.Request): Request;

        hasStanceRequest(): boolean;
        clearStanceRequest(): void;
        getStanceRequest(): bosdyn_api_basic_command_pb.StanceCommand.Request | undefined;
        setStanceRequest(value?: bosdyn_api_basic_command_pb.StanceCommand.Request): Request;

        hasStopRequest(): boolean;
        clearStopRequest(): void;
        getStopRequest(): bosdyn_api_basic_command_pb.StopCommand.Request | undefined;
        setStopRequest(value?: bosdyn_api_basic_command_pb.StopCommand.Request): Request;

        hasFollowArmRequest(): boolean;
        clearFollowArmRequest(): void;
        getFollowArmRequest(): bosdyn_api_basic_command_pb.FollowArmCommand.Request | undefined;
        setFollowArmRequest(value?: bosdyn_api_basic_command_pb.FollowArmCommand.Request): Request;

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
            se2TrajectoryRequest?: bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Request.AsObject,
            se2VelocityRequest?: bosdyn_api_basic_command_pb.SE2VelocityCommand.Request.AsObject,
            sitRequest?: bosdyn_api_basic_command_pb.SitCommand.Request.AsObject,
            standRequest?: bosdyn_api_basic_command_pb.StandCommand.Request.AsObject,
            stanceRequest?: bosdyn_api_basic_command_pb.StanceCommand.Request.AsObject,
            stopRequest?: bosdyn_api_basic_command_pb.StopCommand.Request.AsObject,
            followArmRequest?: bosdyn_api_basic_command_pb.FollowArmCommand.Request.AsObject,
            params?: google_protobuf_any_pb.Any.AsObject,
        }

        export enum CommandCase {
            COMMAND_NOT_SET = 0,
            SE2_TRAJECTORY_REQUEST = 1,
            SE2_VELOCITY_REQUEST = 2,
            SIT_REQUEST = 3,
            STAND_REQUEST = 4,
            STANCE_REQUEST = 5,
            STOP_REQUEST = 6,
            FOLLOW_ARM_REQUEST = 7,
        }

    }

    export class Feedback extends jspb.Message { 

        hasSe2TrajectoryFeedback(): boolean;
        clearSe2TrajectoryFeedback(): void;
        getSe2TrajectoryFeedback(): bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Feedback | undefined;
        setSe2TrajectoryFeedback(value?: bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Feedback): Feedback;

        hasSe2VelocityFeedback(): boolean;
        clearSe2VelocityFeedback(): void;
        getSe2VelocityFeedback(): bosdyn_api_basic_command_pb.SE2VelocityCommand.Feedback | undefined;
        setSe2VelocityFeedback(value?: bosdyn_api_basic_command_pb.SE2VelocityCommand.Feedback): Feedback;

        hasSitFeedback(): boolean;
        clearSitFeedback(): void;
        getSitFeedback(): bosdyn_api_basic_command_pb.SitCommand.Feedback | undefined;
        setSitFeedback(value?: bosdyn_api_basic_command_pb.SitCommand.Feedback): Feedback;

        hasStandFeedback(): boolean;
        clearStandFeedback(): void;
        getStandFeedback(): bosdyn_api_basic_command_pb.StandCommand.Feedback | undefined;
        setStandFeedback(value?: bosdyn_api_basic_command_pb.StandCommand.Feedback): Feedback;

        hasStanceFeedback(): boolean;
        clearStanceFeedback(): void;
        getStanceFeedback(): bosdyn_api_basic_command_pb.StanceCommand.Feedback | undefined;
        setStanceFeedback(value?: bosdyn_api_basic_command_pb.StanceCommand.Feedback): Feedback;

        hasStopFeedback(): boolean;
        clearStopFeedback(): void;
        getStopFeedback(): bosdyn_api_basic_command_pb.StopCommand.Feedback | undefined;
        setStopFeedback(value?: bosdyn_api_basic_command_pb.StopCommand.Feedback): Feedback;

        hasFollowArmFeedback(): boolean;
        clearFollowArmFeedback(): void;
        getFollowArmFeedback(): bosdyn_api_basic_command_pb.FollowArmCommand.Feedback | undefined;
        setFollowArmFeedback(value?: bosdyn_api_basic_command_pb.FollowArmCommand.Feedback): Feedback;
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
            se2TrajectoryFeedback?: bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Feedback.AsObject,
            se2VelocityFeedback?: bosdyn_api_basic_command_pb.SE2VelocityCommand.Feedback.AsObject,
            sitFeedback?: bosdyn_api_basic_command_pb.SitCommand.Feedback.AsObject,
            standFeedback?: bosdyn_api_basic_command_pb.StandCommand.Feedback.AsObject,
            stanceFeedback?: bosdyn_api_basic_command_pb.StanceCommand.Feedback.AsObject,
            stopFeedback?: bosdyn_api_basic_command_pb.StopCommand.Feedback.AsObject,
            followArmFeedback?: bosdyn_api_basic_command_pb.FollowArmCommand.Feedback.AsObject,
            status: bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status,
        }

        export enum FeedbackCase {
            FEEDBACK_NOT_SET = 0,
            SE2_TRAJECTORY_FEEDBACK = 1,
            SE2_VELOCITY_FEEDBACK = 2,
            SIT_FEEDBACK = 3,
            STAND_FEEDBACK = 4,
            STANCE_FEEDBACK = 5,
            STOP_FEEDBACK = 6,
            FOLLOW_ARM_FEEDBACK = 7,
        }

    }

}
