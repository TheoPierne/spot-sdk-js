// package: bosdyn.api
// file: bosdyn/api/basic_command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_trajectory_pb from "../../bosdyn/api/trajectory_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class RobotCommandFeedbackStatus extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotCommandFeedbackStatus.AsObject;
    static toObject(includeInstance: boolean, msg: RobotCommandFeedbackStatus): RobotCommandFeedbackStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotCommandFeedbackStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotCommandFeedbackStatus;
    static deserializeBinaryFromReader(message: RobotCommandFeedbackStatus, reader: jspb.BinaryReader): RobotCommandFeedbackStatus;
}

export namespace RobotCommandFeedbackStatus {
    export type AsObject = {
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_PROCESSING = 1,
    STATUS_COMMAND_OVERRIDDEN = 2,
    STATUS_COMMAND_TIMED_OUT = 3,
    STATUS_ROBOT_FROZEN = 4,
    STATUS_INCOMPATIBLE_HARDWARE = 5,
    }

}

export class BatteryChangePoseCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatteryChangePoseCommand.AsObject;
    static toObject(includeInstance: boolean, msg: BatteryChangePoseCommand): BatteryChangePoseCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatteryChangePoseCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatteryChangePoseCommand;
    static deserializeBinaryFromReader(message: BatteryChangePoseCommand, reader: jspb.BinaryReader): BatteryChangePoseCommand;
}

export namespace BatteryChangePoseCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getDirectionHint(): BatteryChangePoseCommand.Request.DirectionHint;
        setDirectionHint(value: BatteryChangePoseCommand.Request.DirectionHint): Request;

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
            directionHint: BatteryChangePoseCommand.Request.DirectionHint,
        }

        export enum DirectionHint {
    HINT_UNKNOWN = 0,
    HINT_RIGHT = 1,
    HINT_LEFT = 2,
        }

    }

    export class Feedback extends jspb.Message { 
        getStatus(): BatteryChangePoseCommand.Feedback.Status;
        setStatus(value: BatteryChangePoseCommand.Feedback.Status): Feedback;

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
            status: BatteryChangePoseCommand.Feedback.Status,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_COMPLETED = 1,
    STATUS_IN_PROGRESS = 2,
    STATUS_FAILED = 3,
        }

    }

}

export class SelfRightCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelfRightCommand.AsObject;
    static toObject(includeInstance: boolean, msg: SelfRightCommand): SelfRightCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelfRightCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelfRightCommand;
    static deserializeBinaryFromReader(message: SelfRightCommand, reader: jspb.BinaryReader): SelfRightCommand;
}

export namespace SelfRightCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

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
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): SelfRightCommand.Feedback.Status;
        setStatus(value: SelfRightCommand.Feedback.Status): Feedback;

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
            status: SelfRightCommand.Feedback.Status,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_COMPLETED = 1,
    STATUS_IN_PROGRESS = 2,
        }

    }

}

export class StopCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopCommand.AsObject;
    static toObject(includeInstance: boolean, msg: StopCommand): StopCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCommand;
    static deserializeBinaryFromReader(message: StopCommand, reader: jspb.BinaryReader): StopCommand;
}

export namespace StopCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

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
        }
    }

    export class Feedback extends jspb.Message { 

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
        }
    }

}

export class FreezeCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FreezeCommand.AsObject;
    static toObject(includeInstance: boolean, msg: FreezeCommand): FreezeCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FreezeCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FreezeCommand;
    static deserializeBinaryFromReader(message: FreezeCommand, reader: jspb.BinaryReader): FreezeCommand;
}

export namespace FreezeCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

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
        }
    }

    export class Feedback extends jspb.Message { 

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
        }
    }

}

export class SafePowerOffCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafePowerOffCommand.AsObject;
    static toObject(includeInstance: boolean, msg: SafePowerOffCommand): SafePowerOffCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafePowerOffCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafePowerOffCommand;
    static deserializeBinaryFromReader(message: SafePowerOffCommand, reader: jspb.BinaryReader): SafePowerOffCommand;
}

export namespace SafePowerOffCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getUnsafeAction(): SafePowerOffCommand.Request.UnsafeAction;
        setUnsafeAction(value: SafePowerOffCommand.Request.UnsafeAction): Request;

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
            unsafeAction: SafePowerOffCommand.Request.UnsafeAction,
        }

        export enum UnsafeAction {
    UNSAFE_UNKNOWN = 0,
    UNSAFE_MOVE_TO_SAFE_POSITION = 1,
    UNSAFE_FORCE_COMMAND = 2,
        }

    }

    export class Feedback extends jspb.Message { 
        getStatus(): SafePowerOffCommand.Feedback.Status;
        setStatus(value: SafePowerOffCommand.Feedback.Status): Feedback;

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
            status: SafePowerOffCommand.Feedback.Status,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_POWERED_OFF = 1,
    STATUS_IN_PROGRESS = 2,
        }

    }

}

export class SE2TrajectoryCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE2TrajectoryCommand.AsObject;
    static toObject(includeInstance: boolean, msg: SE2TrajectoryCommand): SE2TrajectoryCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE2TrajectoryCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE2TrajectoryCommand;
    static deserializeBinaryFromReader(message: SE2TrajectoryCommand, reader: jspb.BinaryReader): SE2TrajectoryCommand;
}

export namespace SE2TrajectoryCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasEndTime(): boolean;
        clearEndTime(): void;
        getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Request;
        getSe2FrameName(): string;
        setSe2FrameName(value: string): Request;

        hasTrajectory(): boolean;
        clearTrajectory(): void;
        getTrajectory(): bosdyn_api_trajectory_pb.SE2Trajectory | undefined;
        setTrajectory(value?: bosdyn_api_trajectory_pb.SE2Trajectory): Request;

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
            endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            se2FrameName: string,
            trajectory?: bosdyn_api_trajectory_pb.SE2Trajectory.AsObject,
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): SE2TrajectoryCommand.Feedback.Status;
        setStatus(value: SE2TrajectoryCommand.Feedback.Status): Feedback;
        getBodyMovementStatus(): SE2TrajectoryCommand.Feedback.BodyMovementStatus;
        setBodyMovementStatus(value: SE2TrajectoryCommand.Feedback.BodyMovementStatus): Feedback;
        getFinalGoalStatus(): SE2TrajectoryCommand.Feedback.FinalGoalStatus;
        setFinalGoalStatus(value: SE2TrajectoryCommand.Feedback.FinalGoalStatus): Feedback;

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
            status: SE2TrajectoryCommand.Feedback.Status,
            bodyMovementStatus: SE2TrajectoryCommand.Feedback.BodyMovementStatus,
            finalGoalStatus: SE2TrajectoryCommand.Feedback.FinalGoalStatus,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_STOPPED = 1,
    STATUS_STOPPING = 3,
    STATUS_IN_PROGRESS = 2,
    STATUS_AT_GOAL = 1,
    STATUS_NEAR_GOAL = 3,
    STATUS_GOING_TO_GOAL = 2,
        }

        export enum BodyMovementStatus {
    BODY_STATUS_UNKNOWN = 0,
    BODY_STATUS_MOVING = 1,
    BODY_STATUS_SETTLED = 2,
        }

        export enum FinalGoalStatus {
    FINAL_GOAL_STATUS_UNKNOWN = 0,
    FINAL_GOAL_STATUS_IN_PROGRESS = 1,
    FINAL_GOAL_STATUS_ACHIEVABLE = 2,
    FINAL_GOAL_STATUS_BLOCKED = 3,
        }

    }

}

export class SE2VelocityCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SE2VelocityCommand.AsObject;
    static toObject(includeInstance: boolean, msg: SE2VelocityCommand): SE2VelocityCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SE2VelocityCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SE2VelocityCommand;
    static deserializeBinaryFromReader(message: SE2VelocityCommand, reader: jspb.BinaryReader): SE2VelocityCommand;
}

export namespace SE2VelocityCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasEndTime(): boolean;
        clearEndTime(): void;
        getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Request;
        getSe2FrameName(): string;
        setSe2FrameName(value: string): Request;

        hasVelocity(): boolean;
        clearVelocity(): void;
        getVelocity(): bosdyn_api_geometry_pb.SE2Velocity | undefined;
        setVelocity(value?: bosdyn_api_geometry_pb.SE2Velocity): Request;

        hasSlewRateLimit(): boolean;
        clearSlewRateLimit(): void;
        getSlewRateLimit(): bosdyn_api_geometry_pb.SE2Velocity | undefined;
        setSlewRateLimit(value?: bosdyn_api_geometry_pb.SE2Velocity): Request;

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
            endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            se2FrameName: string,
            velocity?: bosdyn_api_geometry_pb.SE2Velocity.AsObject,
            slewRateLimit?: bosdyn_api_geometry_pb.SE2Velocity.AsObject,
        }
    }

    export class Feedback extends jspb.Message { 

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
        }
    }

}

export class SitCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SitCommand.AsObject;
    static toObject(includeInstance: boolean, msg: SitCommand): SitCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SitCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SitCommand;
    static deserializeBinaryFromReader(message: SitCommand, reader: jspb.BinaryReader): SitCommand;
}

export namespace SitCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

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
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): SitCommand.Feedback.Status;
        setStatus(value: SitCommand.Feedback.Status): Feedback;

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
            status: SitCommand.Feedback.Status,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_IS_SITTING = 1,
    STATUS_IN_PROGRESS = 2,
        }

    }

}

export class StandCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StandCommand.AsObject;
    static toObject(includeInstance: boolean, msg: StandCommand): StandCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StandCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StandCommand;
    static deserializeBinaryFromReader(message: StandCommand, reader: jspb.BinaryReader): StandCommand;
}

export namespace StandCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

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
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): StandCommand.Feedback.Status;
        setStatus(value: StandCommand.Feedback.Status): Feedback;
        getStandingState(): StandCommand.Feedback.StandingState;
        setStandingState(value: StandCommand.Feedback.StandingState): Feedback;

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
            status: StandCommand.Feedback.Status,
            standingState: StandCommand.Feedback.StandingState,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_IS_STANDING = 1,
    STATUS_IN_PROGRESS = 2,
        }

        export enum StandingState {
    STANDING_UNKNOWN = 0,
    STANDING_CONTROLLED = 1,
    STANDING_FROZEN = 2,
        }

    }

}

export class StanceCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StanceCommand.AsObject;
    static toObject(includeInstance: boolean, msg: StanceCommand): StanceCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StanceCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StanceCommand;
    static deserializeBinaryFromReader(message: StanceCommand, reader: jspb.BinaryReader): StanceCommand;
}

export namespace StanceCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasEndTime(): boolean;
        clearEndTime(): void;
        getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Request;

        hasStance(): boolean;
        clearStance(): void;
        getStance(): Stance | undefined;
        setStance(value?: Stance): Request;

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
            endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            stance?: Stance.AsObject,
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): StanceCommand.Feedback.Status;
        setStatus(value: StanceCommand.Feedback.Status): Feedback;

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
            status: StanceCommand.Feedback.Status,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_STANCED = 1,
    STATUS_GOING_TO_STANCE = 2,
    STATUS_TOO_FAR_AWAY = 3,
        }

    }

}

export class Stance extends jspb.Message { 
    getSe2FrameName(): string;
    setSe2FrameName(value: string): Stance;

    getFootPositionsMap(): jspb.Map<string, bosdyn_api_geometry_pb.Vec2>;
    clearFootPositionsMap(): void;
    getAccuracy(): number;
    setAccuracy(value: number): Stance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stance.AsObject;
    static toObject(includeInstance: boolean, msg: Stance): Stance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stance;
    static deserializeBinaryFromReader(message: Stance, reader: jspb.BinaryReader): Stance;
}

export namespace Stance {
    export type AsObject = {
        se2FrameName: string,

        footPositionsMap: Array<[string, bosdyn_api_geometry_pb.Vec2.AsObject]>,
        accuracy: number,
    }
}

export class FollowArmCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowArmCommand.AsObject;
    static toObject(includeInstance: boolean, msg: FollowArmCommand): FollowArmCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowArmCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowArmCommand;
    static deserializeBinaryFromReader(message: FollowArmCommand, reader: jspb.BinaryReader): FollowArmCommand;
}

export namespace FollowArmCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasBodyOffsetFromHand(): boolean;
        clearBodyOffsetFromHand(): void;
        getBodyOffsetFromHand(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setBodyOffsetFromHand(value?: bosdyn_api_geometry_pb.Vec3): Request;
        getDisableWalking(): boolean;
        setDisableWalking(value: boolean): Request;

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
            bodyOffsetFromHand?: bosdyn_api_geometry_pb.Vec3.AsObject,
            disableWalking: boolean,
        }
    }

    export class Feedback extends jspb.Message { 

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
        }
    }

}

export class ArmDragCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmDragCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ArmDragCommand): ArmDragCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmDragCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmDragCommand;
    static deserializeBinaryFromReader(message: ArmDragCommand, reader: jspb.BinaryReader): ArmDragCommand;
}

export namespace ArmDragCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

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
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): ArmDragCommand.Feedback.Status;
        setStatus(value: ArmDragCommand.Feedback.Status): Feedback;

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
            status: ArmDragCommand.Feedback.Status,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_DRAGGING = 1,
    STATUS_GRASP_FAILED = 2,
    STATUS_OTHER_FAILURE = 3,
        }

    }

}

export class ConstrainedManipulationCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConstrainedManipulationCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ConstrainedManipulationCommand): ConstrainedManipulationCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConstrainedManipulationCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConstrainedManipulationCommand;
    static deserializeBinaryFromReader(message: ConstrainedManipulationCommand, reader: jspb.BinaryReader): ConstrainedManipulationCommand;
}

export namespace ConstrainedManipulationCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getFrameName(): string;
        setFrameName(value: string): Request;

        hasInitWrenchDirectionInFrameName(): boolean;
        clearInitWrenchDirectionInFrameName(): void;
        getInitWrenchDirectionInFrameName(): bosdyn_api_geometry_pb.Wrench | undefined;
        setInitWrenchDirectionInFrameName(value?: bosdyn_api_geometry_pb.Wrench): Request;

        hasTangentialSpeed(): boolean;
        clearTangentialSpeed(): void;
        getTangentialSpeed(): number;
        setTangentialSpeed(value: number): Request;

        hasRotationalSpeed(): boolean;
        clearRotationalSpeed(): void;
        getRotationalSpeed(): number;
        setRotationalSpeed(value: number): Request;

        hasForceLimit(): boolean;
        clearForceLimit(): void;
        getForceLimit(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setForceLimit(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasTorqueLimit(): boolean;
        clearTorqueLimit(): void;
        getTorqueLimit(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setTorqueLimit(value?: google_protobuf_wrappers_pb.DoubleValue): Request;
        getTaskType(): ConstrainedManipulationCommand.Request.TaskType;
        setTaskType(value: ConstrainedManipulationCommand.Request.TaskType): Request;

        hasEndTime(): boolean;
        clearEndTime(): void;
        getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Request;

        hasEnableRobotLocomotion(): boolean;
        clearEnableRobotLocomotion(): void;
        getEnableRobotLocomotion(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setEnableRobotLocomotion(value?: google_protobuf_wrappers_pb.BoolValue): Request;
        getControlMode(): ConstrainedManipulationCommand.Request.ControlMode;
        setControlMode(value: ConstrainedManipulationCommand.Request.ControlMode): Request;

        hasTargetLinearPosition(): boolean;
        clearTargetLinearPosition(): void;
        getTargetLinearPosition(): number;
        setTargetLinearPosition(value: number): Request;

        hasTargetAngle(): boolean;
        clearTargetAngle(): void;
        getTargetAngle(): number;
        setTargetAngle(value: number): Request;

        hasAccelLimit(): boolean;
        clearAccelLimit(): void;
        getAccelLimit(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setAccelLimit(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasResetEstimator(): boolean;
        clearResetEstimator(): void;
        getResetEstimator(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setResetEstimator(value?: google_protobuf_wrappers_pb.BoolValue): Request;

        getTaskSpeedCase(): Request.TaskSpeedCase;
        getTaskTargetPositionCase(): Request.TaskTargetPositionCase;

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
            frameName: string,
            initWrenchDirectionInFrameName?: bosdyn_api_geometry_pb.Wrench.AsObject,
            tangentialSpeed: number,
            rotationalSpeed: number,
            forceLimit?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            torqueLimit?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            taskType: ConstrainedManipulationCommand.Request.TaskType,
            endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            enableRobotLocomotion?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            controlMode: ConstrainedManipulationCommand.Request.ControlMode,
            targetLinearPosition: number,
            targetAngle: number,
            accelLimit?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            resetEstimator?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }

        export enum TaskType {
    TASK_TYPE_UNKNOWN = 0,
    TASK_TYPE_SE3_CIRCLE_FORCE_TORQUE = 1,
    TASK_TYPE_R3_CIRCLE_EXTRADOF_FORCE = 2,
    TASK_TYPE_SE3_ROTATIONAL_TORQUE = 3,
    TASK_TYPE_R3_CIRCLE_FORCE = 4,
    TASK_TYPE_R3_LINEAR_FORCE = 5,
    TASK_TYPE_HOLD_POSE = 6,
        }

        export enum ControlMode {
    CONTROL_MODE_UNKNOWN = 0,
    CONTROL_MODE_POSITION = 1,
    CONTROL_MODE_VELOCITY = 2,
        }


        export enum TaskSpeedCase {
            TASK_SPEED_NOT_SET = 0,
            TANGENTIAL_SPEED = 3,
            ROTATIONAL_SPEED = 4,
        }

        export enum TaskTargetPositionCase {
            TASK_TARGET_POSITION_NOT_SET = 0,
            TARGET_LINEAR_POSITION = 11,
            TARGET_ANGLE = 12,
        }

    }

    export class Feedback extends jspb.Message { 
        getStatus(): ConstrainedManipulationCommand.Feedback.Status;
        setStatus(value: ConstrainedManipulationCommand.Feedback.Status): Feedback;

        hasDesiredWrenchOdomFrame(): boolean;
        clearDesiredWrenchOdomFrame(): void;
        getDesiredWrenchOdomFrame(): bosdyn_api_geometry_pb.Wrench | undefined;
        setDesiredWrenchOdomFrame(value?: bosdyn_api_geometry_pb.Wrench): Feedback;

        hasEstimationActivated(): boolean;
        clearEstimationActivated(): void;
        getEstimationActivated(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setEstimationActivated(value?: google_protobuf_wrappers_pb.BoolValue): Feedback;

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
            status: ConstrainedManipulationCommand.Feedback.Status,
            desiredWrenchOdomFrame?: bosdyn_api_geometry_pb.Wrench.AsObject,
            estimationActivated?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_RUNNING = 1,
    STATUS_ARM_IS_STUCK = 2,
    STATUS_GRASP_IS_LOST = 3,
        }

    }

}

export class JointCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JointCommand.AsObject;
    static toObject(includeInstance: boolean, msg: JointCommand): JointCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JointCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JointCommand;
    static deserializeBinaryFromReader(message: JointCommand, reader: jspb.BinaryReader): JointCommand;
}

export namespace JointCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

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
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): JointCommand.Feedback.Status;
        setStatus(value: JointCommand.Feedback.Status): Feedback;
        getNumMessagesReceived(): number;
        setNumMessagesReceived(value: number): Feedback;

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
            status: JointCommand.Feedback.Status,
            numMessagesReceived: number,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_ACTIVE = 1,
    STATUS_ERROR = 2,
        }

    }

    export class UpdateRequest extends jspb.Message { 

        hasEndTime(): boolean;
        clearEndTime(): void;
        getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateRequest;

        hasReferenceTime(): boolean;
        clearReferenceTime(): void;
        getReferenceTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setReferenceTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateRequest;

        hasExtrapolationDuration(): boolean;
        clearExtrapolationDuration(): void;
        getExtrapolationDuration(): google_protobuf_duration_pb.Duration | undefined;
        setExtrapolationDuration(value?: google_protobuf_duration_pb.Duration): UpdateRequest;
        clearPositionList(): void;
        getPositionList(): Array<number>;
        setPositionList(value: Array<number>): UpdateRequest;
        addPosition(value: number, index?: number): number;
        clearVelocityList(): void;
        getVelocityList(): Array<number>;
        setVelocityList(value: Array<number>): UpdateRequest;
        addVelocity(value: number, index?: number): number;
        clearLoadList(): void;
        getLoadList(): Array<number>;
        setLoadList(value: Array<number>): UpdateRequest;
        addLoad(value: number, index?: number): number;

        hasGains(): boolean;
        clearGains(): void;
        getGains(): JointCommand.UpdateRequest.Gains | undefined;
        setGains(value?: JointCommand.UpdateRequest.Gains): UpdateRequest;
        getUserCommandKey(): number;
        setUserCommandKey(value: number): UpdateRequest;

        hasVelocitySafetyLimit(): boolean;
        clearVelocitySafetyLimit(): void;
        getVelocitySafetyLimit(): google_protobuf_wrappers_pb.FloatValue | undefined;
        setVelocitySafetyLimit(value?: google_protobuf_wrappers_pb.FloatValue): UpdateRequest;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UpdateRequest.AsObject;
        static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UpdateRequest;
        static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
    }

    export namespace UpdateRequest {
        export type AsObject = {
            endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            referenceTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            extrapolationDuration?: google_protobuf_duration_pb.Duration.AsObject,
            positionList: Array<number>,
            velocityList: Array<number>,
            loadList: Array<number>,
            gains?: JointCommand.UpdateRequest.Gains.AsObject,
            userCommandKey: number,
            velocitySafetyLimit?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        }


        export class Gains extends jspb.Message { 
            clearKQPList(): void;
            getKQPList(): Array<number>;
            setKQPList(value: Array<number>): Gains;
            addKQP(value: number, index?: number): number;
            clearKQdPList(): void;
            getKQdPList(): Array<number>;
            setKQdPList(value: Array<number>): Gains;
            addKQdP(value: number, index?: number): number;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Gains.AsObject;
            static toObject(includeInstance: boolean, msg: Gains): Gains.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Gains, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Gains;
            static deserializeBinaryFromReader(message: Gains, reader: jspb.BinaryReader): Gains;
        }

        export namespace Gains {
            export type AsObject = {
                kQPList: Array<number>,
                kQdPList: Array<number>,
            }
        }

    }

    export class ContactAdvice extends jspb.Message { 
        clearContactAdviceList(): void;
        getContactAdviceList(): Array<JointCommand.ContactAdvice.Advice>;
        setContactAdviceList(value: Array<JointCommand.ContactAdvice.Advice>): ContactAdvice;
        addContactAdvice(value: JointCommand.ContactAdvice.Advice, index?: number): JointCommand.ContactAdvice.Advice;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ContactAdvice.AsObject;
        static toObject(includeInstance: boolean, msg: ContactAdvice): ContactAdvice.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ContactAdvice, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ContactAdvice;
        static deserializeBinaryFromReader(message: ContactAdvice, reader: jspb.BinaryReader): ContactAdvice;
    }

    export namespace ContactAdvice {
        export type AsObject = {
            contactAdviceList: Array<JointCommand.ContactAdvice.Advice>,
        }

        export enum Advice {
    ADVICE_UNKNOWN = 0,
    ADVICE_NONE = 1,
    ADVICE_IN_CONTACT = 2,
    ADVICE_NOT_IN_CONTACT = 3,
        }

    }

}
