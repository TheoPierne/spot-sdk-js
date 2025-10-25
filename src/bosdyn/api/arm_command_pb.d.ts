// package: bosdyn.api
// file: bosdyn/api/arm_command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_basic_command_pb from "../../bosdyn/api/basic_command_pb";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_trajectory_pb from "../../bosdyn/api/trajectory_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ArmCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ArmCommand): ArmCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmCommand;
    static deserializeBinaryFromReader(message: ArmCommand, reader: jspb.BinaryReader): ArmCommand;
}

export namespace ArmCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasArmCartesianCommand(): boolean;
        clearArmCartesianCommand(): void;
        getArmCartesianCommand(): ArmCartesianCommand.Request | undefined;
        setArmCartesianCommand(value?: ArmCartesianCommand.Request): Request;

        hasArmJointMoveCommand(): boolean;
        clearArmJointMoveCommand(): void;
        getArmJointMoveCommand(): ArmJointMoveCommand.Request | undefined;
        setArmJointMoveCommand(value?: ArmJointMoveCommand.Request): Request;

        hasNamedArmPositionCommand(): boolean;
        clearNamedArmPositionCommand(): void;
        getNamedArmPositionCommand(): NamedArmPositionsCommand.Request | undefined;
        setNamedArmPositionCommand(value?: NamedArmPositionsCommand.Request): Request;

        hasArmVelocityCommand(): boolean;
        clearArmVelocityCommand(): void;
        getArmVelocityCommand(): ArmVelocityCommand.Request | undefined;
        setArmVelocityCommand(value?: ArmVelocityCommand.Request): Request;

        hasArmGazeCommand(): boolean;
        clearArmGazeCommand(): void;
        getArmGazeCommand(): GazeCommand.Request | undefined;
        setArmGazeCommand(value?: GazeCommand.Request): Request;

        hasArmStopCommand(): boolean;
        clearArmStopCommand(): void;
        getArmStopCommand(): ArmStopCommand.Request | undefined;
        setArmStopCommand(value?: ArmStopCommand.Request): Request;

        hasArmDragCommand(): boolean;
        clearArmDragCommand(): void;
        getArmDragCommand(): bosdyn_api_basic_command_pb.ArmDragCommand.Request | undefined;
        setArmDragCommand(value?: bosdyn_api_basic_command_pb.ArmDragCommand.Request): Request;

        hasArmImpedanceCommand(): boolean;
        clearArmImpedanceCommand(): void;
        getArmImpedanceCommand(): ArmImpedanceCommand.Request | undefined;
        setArmImpedanceCommand(value?: ArmImpedanceCommand.Request): Request;

        hasParams(): boolean;
        clearParams(): void;
        getParams(): ArmParams | undefined;
        setParams(value?: ArmParams): Request;

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
            armCartesianCommand?: ArmCartesianCommand.Request.AsObject,
            armJointMoveCommand?: ArmJointMoveCommand.Request.AsObject,
            namedArmPositionCommand?: NamedArmPositionsCommand.Request.AsObject,
            armVelocityCommand?: ArmVelocityCommand.Request.AsObject,
            armGazeCommand?: GazeCommand.Request.AsObject,
            armStopCommand?: ArmStopCommand.Request.AsObject,
            armDragCommand?: bosdyn_api_basic_command_pb.ArmDragCommand.Request.AsObject,
            armImpedanceCommand?: ArmImpedanceCommand.Request.AsObject,
            params?: ArmParams.AsObject,
        }

        export enum CommandCase {
            COMMAND_NOT_SET = 0,
            ARM_CARTESIAN_COMMAND = 3,
            ARM_JOINT_MOVE_COMMAND = 4,
            NAMED_ARM_POSITION_COMMAND = 5,
            ARM_VELOCITY_COMMAND = 6,
            ARM_GAZE_COMMAND = 8,
            ARM_STOP_COMMAND = 9,
            ARM_DRAG_COMMAND = 10,
            ARM_IMPEDANCE_COMMAND = 12,
        }

    }

    export class Feedback extends jspb.Message { 

        hasArmCartesianFeedback(): boolean;
        clearArmCartesianFeedback(): void;
        getArmCartesianFeedback(): ArmCartesianCommand.Feedback | undefined;
        setArmCartesianFeedback(value?: ArmCartesianCommand.Feedback): Feedback;

        hasArmJointMoveFeedback(): boolean;
        clearArmJointMoveFeedback(): void;
        getArmJointMoveFeedback(): ArmJointMoveCommand.Feedback | undefined;
        setArmJointMoveFeedback(value?: ArmJointMoveCommand.Feedback): Feedback;

        hasNamedArmPositionFeedback(): boolean;
        clearNamedArmPositionFeedback(): void;
        getNamedArmPositionFeedback(): NamedArmPositionsCommand.Feedback | undefined;
        setNamedArmPositionFeedback(value?: NamedArmPositionsCommand.Feedback): Feedback;

        hasArmVelocityFeedback(): boolean;
        clearArmVelocityFeedback(): void;
        getArmVelocityFeedback(): ArmVelocityCommand.Feedback | undefined;
        setArmVelocityFeedback(value?: ArmVelocityCommand.Feedback): Feedback;

        hasArmGazeFeedback(): boolean;
        clearArmGazeFeedback(): void;
        getArmGazeFeedback(): GazeCommand.Feedback | undefined;
        setArmGazeFeedback(value?: GazeCommand.Feedback): Feedback;

        hasArmStopFeedback(): boolean;
        clearArmStopFeedback(): void;
        getArmStopFeedback(): ArmStopCommand.Feedback | undefined;
        setArmStopFeedback(value?: ArmStopCommand.Feedback): Feedback;

        hasArmDragFeedback(): boolean;
        clearArmDragFeedback(): void;
        getArmDragFeedback(): bosdyn_api_basic_command_pb.ArmDragCommand.Feedback | undefined;
        setArmDragFeedback(value?: bosdyn_api_basic_command_pb.ArmDragCommand.Feedback): Feedback;

        hasArmImpedanceFeedback(): boolean;
        clearArmImpedanceFeedback(): void;
        getArmImpedanceFeedback(): ArmImpedanceCommand.Feedback | undefined;
        setArmImpedanceFeedback(value?: ArmImpedanceCommand.Feedback): Feedback;
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
            armCartesianFeedback?: ArmCartesianCommand.Feedback.AsObject,
            armJointMoveFeedback?: ArmJointMoveCommand.Feedback.AsObject,
            namedArmPositionFeedback?: NamedArmPositionsCommand.Feedback.AsObject,
            armVelocityFeedback?: ArmVelocityCommand.Feedback.AsObject,
            armGazeFeedback?: GazeCommand.Feedback.AsObject,
            armStopFeedback?: ArmStopCommand.Feedback.AsObject,
            armDragFeedback?: bosdyn_api_basic_command_pb.ArmDragCommand.Feedback.AsObject,
            armImpedanceFeedback?: ArmImpedanceCommand.Feedback.AsObject,
            status: bosdyn_api_basic_command_pb.RobotCommandFeedbackStatus.Status,
        }

        export enum FeedbackCase {
            FEEDBACK_NOT_SET = 0,
            ARM_CARTESIAN_FEEDBACK = 3,
            ARM_JOINT_MOVE_FEEDBACK = 4,
            NAMED_ARM_POSITION_FEEDBACK = 5,
            ARM_VELOCITY_FEEDBACK = 6,
            ARM_GAZE_FEEDBACK = 8,
            ARM_STOP_FEEDBACK = 9,
            ARM_DRAG_FEEDBACK = 10,
            ARM_IMPEDANCE_FEEDBACK = 12,
        }

    }

}

export class ArmParams extends jspb.Message { 

    hasDisableBodyForceLimiter(): boolean;
    clearDisableBodyForceLimiter(): void;
    getDisableBodyForceLimiter(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDisableBodyForceLimiter(value?: google_protobuf_wrappers_pb.BoolValue): ArmParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmParams.AsObject;
    static toObject(includeInstance: boolean, msg: ArmParams): ArmParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmParams;
    static deserializeBinaryFromReader(message: ArmParams, reader: jspb.BinaryReader): ArmParams;
}

export namespace ArmParams {
    export type AsObject = {
        disableBodyForceLimiter?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class ArmVelocityCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmVelocityCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ArmVelocityCommand): ArmVelocityCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmVelocityCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmVelocityCommand;
    static deserializeBinaryFromReader(message: ArmVelocityCommand, reader: jspb.BinaryReader): ArmVelocityCommand;
}

export namespace ArmVelocityCommand {
    export type AsObject = {
    }


    export class CylindricalVelocity extends jspb.Message { 

        hasLinearVelocity(): boolean;
        clearLinearVelocity(): void;
        getLinearVelocity(): bosdyn_api_geometry_pb.CylindricalCoordinate | undefined;
        setLinearVelocity(value?: bosdyn_api_geometry_pb.CylindricalCoordinate): CylindricalVelocity;

        hasMaxLinearVelocity(): boolean;
        clearMaxLinearVelocity(): void;
        getMaxLinearVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxLinearVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): CylindricalVelocity;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CylindricalVelocity.AsObject;
        static toObject(includeInstance: boolean, msg: CylindricalVelocity): CylindricalVelocity.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CylindricalVelocity, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CylindricalVelocity;
        static deserializeBinaryFromReader(message: CylindricalVelocity, reader: jspb.BinaryReader): CylindricalVelocity;
    }

    export namespace CylindricalVelocity {
        export type AsObject = {
            linearVelocity?: bosdyn_api_geometry_pb.CylindricalCoordinate.AsObject,
            maxLinearVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        }
    }

    export class CartesianVelocity extends jspb.Message { 
        getFrameName(): string;
        setFrameName(value: string): CartesianVelocity;

        hasVelocityInFrameName(): boolean;
        clearVelocityInFrameName(): void;
        getVelocityInFrameName(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setVelocityInFrameName(value?: bosdyn_api_geometry_pb.Vec3): CartesianVelocity;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CartesianVelocity.AsObject;
        static toObject(includeInstance: boolean, msg: CartesianVelocity): CartesianVelocity.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CartesianVelocity, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CartesianVelocity;
        static deserializeBinaryFromReader(message: CartesianVelocity, reader: jspb.BinaryReader): CartesianVelocity;
    }

    export namespace CartesianVelocity {
        export type AsObject = {
            frameName: string,
            velocityInFrameName?: bosdyn_api_geometry_pb.Vec3.AsObject,
        }
    }

    export class Request extends jspb.Message { 

        hasCylindricalVelocity(): boolean;
        clearCylindricalVelocity(): void;
        getCylindricalVelocity(): ArmVelocityCommand.CylindricalVelocity | undefined;
        setCylindricalVelocity(value?: ArmVelocityCommand.CylindricalVelocity): Request;

        hasCartesianVelocity(): boolean;
        clearCartesianVelocity(): void;
        getCartesianVelocity(): ArmVelocityCommand.CartesianVelocity | undefined;
        setCartesianVelocity(value?: ArmVelocityCommand.CartesianVelocity): Request;

        hasAngularVelocityOfHandRtOdomInHand(): boolean;
        clearAngularVelocityOfHandRtOdomInHand(): void;
        getAngularVelocityOfHandRtOdomInHand(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setAngularVelocityOfHandRtOdomInHand(value?: bosdyn_api_geometry_pb.Vec3): Request;

        hasMaximumAcceleration(): boolean;
        clearMaximumAcceleration(): void;
        getMaximumAcceleration(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaximumAcceleration(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasEndTime(): boolean;
        clearEndTime(): void;
        getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Request;

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
            cylindricalVelocity?: ArmVelocityCommand.CylindricalVelocity.AsObject,
            cartesianVelocity?: ArmVelocityCommand.CartesianVelocity.AsObject,
            angularVelocityOfHandRtOdomInHand?: bosdyn_api_geometry_pb.Vec3.AsObject,
            maximumAcceleration?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }

        export enum CommandCase {
            COMMAND_NOT_SET = 0,
            CYLINDRICAL_VELOCITY = 1,
            CARTESIAN_VELOCITY = 2,
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

export class NamedArmPositionsCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NamedArmPositionsCommand.AsObject;
    static toObject(includeInstance: boolean, msg: NamedArmPositionsCommand): NamedArmPositionsCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NamedArmPositionsCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NamedArmPositionsCommand;
    static deserializeBinaryFromReader(message: NamedArmPositionsCommand, reader: jspb.BinaryReader): NamedArmPositionsCommand;
}

export namespace NamedArmPositionsCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getPosition(): NamedArmPositionsCommand.Positions;
        setPosition(value: NamedArmPositionsCommand.Positions): Request;

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
            position: NamedArmPositionsCommand.Positions,
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): NamedArmPositionsCommand.Feedback.Status;
        setStatus(value: NamedArmPositionsCommand.Feedback.Status): Feedback;

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
            status: NamedArmPositionsCommand.Feedback.Status,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_COMPLETE = 1,
    STATUS_IN_PROGRESS = 2,
    STATUS_STALLED_HOLDING_ITEM = 3,
        }

    }


    export enum Positions {
    POSITIONS_UNKNOWN = 0,
    POSITIONS_CARRY = 1,
    POSITIONS_READY = 2,
    POSITIONS_STOW = 3,
    }

}

export class ArmCartesianCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmCartesianCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ArmCartesianCommand): ArmCartesianCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmCartesianCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmCartesianCommand;
    static deserializeBinaryFromReader(message: ArmCartesianCommand, reader: jspb.BinaryReader): ArmCartesianCommand;
}

export namespace ArmCartesianCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getRootFrameName(): string;
        setRootFrameName(value: string): Request;

        hasWristTformTool(): boolean;
        clearWristTformTool(): void;
        getWristTformTool(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setWristTformTool(value?: bosdyn_api_geometry_pb.SE3Pose): Request;

        hasRootTformTask(): boolean;
        clearRootTformTask(): void;
        getRootTformTask(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setRootTformTask(value?: bosdyn_api_geometry_pb.SE3Pose): Request;

        hasPoseTrajectoryInTask(): boolean;
        clearPoseTrajectoryInTask(): void;
        getPoseTrajectoryInTask(): bosdyn_api_trajectory_pb.SE3Trajectory | undefined;
        setPoseTrajectoryInTask(value?: bosdyn_api_trajectory_pb.SE3Trajectory): Request;

        hasMaximumAcceleration(): boolean;
        clearMaximumAcceleration(): void;
        getMaximumAcceleration(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaximumAcceleration(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaxLinearVelocity(): boolean;
        clearMaxLinearVelocity(): void;
        getMaxLinearVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxLinearVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaxAngularVelocity(): boolean;
        clearMaxAngularVelocity(): void;
        getMaxAngularVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxAngularVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaxPosTrackingError(): boolean;
        clearMaxPosTrackingError(): void;
        getMaxPosTrackingError(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxPosTrackingError(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaxRotTrackingError(): boolean;
        clearMaxRotTrackingError(): void;
        getMaxRotTrackingError(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxRotTrackingError(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasForceRemainNearCurrentJointConfiguration(): boolean;
        clearForceRemainNearCurrentJointConfiguration(): void;
        getForceRemainNearCurrentJointConfiguration(): boolean;
        setForceRemainNearCurrentJointConfiguration(value: boolean): Request;

        hasPreferredJointConfiguration(): boolean;
        clearPreferredJointConfiguration(): void;
        getPreferredJointConfiguration(): ArmJointPosition | undefined;
        setPreferredJointConfiguration(value?: ArmJointPosition): Request;
        getXAxis(): ArmCartesianCommand.Request.AxisMode;
        setXAxis(value: ArmCartesianCommand.Request.AxisMode): Request;
        getYAxis(): ArmCartesianCommand.Request.AxisMode;
        setYAxis(value: ArmCartesianCommand.Request.AxisMode): Request;
        getZAxis(): ArmCartesianCommand.Request.AxisMode;
        setZAxis(value: ArmCartesianCommand.Request.AxisMode): Request;
        getRxAxis(): ArmCartesianCommand.Request.AxisMode;
        setRxAxis(value: ArmCartesianCommand.Request.AxisMode): Request;
        getRyAxis(): ArmCartesianCommand.Request.AxisMode;
        setRyAxis(value: ArmCartesianCommand.Request.AxisMode): Request;
        getRzAxis(): ArmCartesianCommand.Request.AxisMode;
        setRzAxis(value: ArmCartesianCommand.Request.AxisMode): Request;

        hasWrenchTrajectoryInTask(): boolean;
        clearWrenchTrajectoryInTask(): void;
        getWrenchTrajectoryInTask(): bosdyn_api_trajectory_pb.WrenchTrajectory | undefined;
        setWrenchTrajectoryInTask(value?: bosdyn_api_trajectory_pb.WrenchTrajectory): Request;

        hasDisableVelocityLimiting(): boolean;
        clearDisableVelocityLimiting(): void;
        getDisableVelocityLimiting(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setDisableVelocityLimiting(value?: google_protobuf_wrappers_pb.BoolValue): Request;

        getJointConfigurationCase(): Request.JointConfigurationCase;

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
            rootFrameName: string,
            wristTformTool?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            rootTformTask?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            poseTrajectoryInTask?: bosdyn_api_trajectory_pb.SE3Trajectory.AsObject,
            maximumAcceleration?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxLinearVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxAngularVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxPosTrackingError?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxRotTrackingError?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            forceRemainNearCurrentJointConfiguration: boolean,
            preferredJointConfiguration?: ArmJointPosition.AsObject,
            xAxis: ArmCartesianCommand.Request.AxisMode,
            yAxis: ArmCartesianCommand.Request.AxisMode,
            zAxis: ArmCartesianCommand.Request.AxisMode,
            rxAxis: ArmCartesianCommand.Request.AxisMode,
            ryAxis: ArmCartesianCommand.Request.AxisMode,
            rzAxis: ArmCartesianCommand.Request.AxisMode,
            wrenchTrajectoryInTask?: bosdyn_api_trajectory_pb.WrenchTrajectory.AsObject,
            disableVelocityLimiting?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }

        export enum AxisMode {
    AXIS_MODE_POSITION = 0,
    AXIS_MODE_FORCE = 1,
        }


        export enum JointConfigurationCase {
            JOINT_CONFIGURATION_NOT_SET = 0,
            FORCE_REMAIN_NEAR_CURRENT_JOINT_CONFIGURATION = 17,
            PREFERRED_JOINT_CONFIGURATION = 18,
        }

    }

    export class Feedback extends jspb.Message { 
        getStatus(): ArmCartesianCommand.Feedback.Status;
        setStatus(value: ArmCartesianCommand.Feedback.Status): Feedback;
        getMeasuredPosTrackingError(): number;
        setMeasuredPosTrackingError(value: number): Feedback;
        getMeasuredRotTrackingError(): number;
        setMeasuredRotTrackingError(value: number): Feedback;
        getMeasuredPosDistanceToGoal(): number;
        setMeasuredPosDistanceToGoal(value: number): Feedback;
        getMeasuredRotDistanceToGoal(): number;
        setMeasuredRotDistanceToGoal(value: number): Feedback;

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
            status: ArmCartesianCommand.Feedback.Status,
            measuredPosTrackingError: number,
            measuredRotTrackingError: number,
            measuredPosDistanceToGoal: number,
            measuredRotDistanceToGoal: number,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_TRAJECTORY_COMPLETE = 1,
    STATUS_IN_PROGRESS = 2,
    STATUS_TRAJECTORY_CANCELLED = 3,
    STATUS_TRAJECTORY_STALLED = 4,
        }

    }

}

export class ArmJointMoveCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmJointMoveCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ArmJointMoveCommand): ArmJointMoveCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmJointMoveCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmJointMoveCommand;
    static deserializeBinaryFromReader(message: ArmJointMoveCommand, reader: jspb.BinaryReader): ArmJointMoveCommand;
}

export namespace ArmJointMoveCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasTrajectory(): boolean;
        clearTrajectory(): void;
        getTrajectory(): ArmJointTrajectory | undefined;
        setTrajectory(value?: ArmJointTrajectory): Request;

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
            trajectory?: ArmJointTrajectory.AsObject,
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): ArmJointMoveCommand.Feedback.Status;
        setStatus(value: ArmJointMoveCommand.Feedback.Status): Feedback;
        getPlannerStatus(): ArmJointMoveCommand.Feedback.PlannerStatus;
        setPlannerStatus(value: ArmJointMoveCommand.Feedback.PlannerStatus): Feedback;
        clearPlannedPointsList(): void;
        getPlannedPointsList(): Array<ArmJointTrajectoryPoint>;
        setPlannedPointsList(value: Array<ArmJointTrajectoryPoint>): Feedback;
        addPlannedPoints(value?: ArmJointTrajectoryPoint, index?: number): ArmJointTrajectoryPoint;

        hasTimeToGoal(): boolean;
        clearTimeToGoal(): void;
        getTimeToGoal(): google_protobuf_duration_pb.Duration | undefined;
        setTimeToGoal(value?: google_protobuf_duration_pb.Duration): Feedback;

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
            status: ArmJointMoveCommand.Feedback.Status,
            plannerStatus: ArmJointMoveCommand.Feedback.PlannerStatus,
            plannedPointsList: Array<ArmJointTrajectoryPoint.AsObject>,
            timeToGoal?: google_protobuf_duration_pb.Duration.AsObject,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_COMPLETE = 1,
    STATUS_IN_PROGRESS = 2,
    STATUS_STALLED = 3,
        }

        export enum PlannerStatus {
    PLANNER_STATUS_UNKNOWN = 0,
    PLANNER_STATUS_SUCCESS = 1,
    PLANNER_STATUS_MODIFIED = 2,
    PLANNER_STATUS_FAILED = 3,
        }

    }

}

export class ArmJointPosition extends jspb.Message { 

    hasSh0(): boolean;
    clearSh0(): void;
    getSh0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSh0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointPosition;

    hasSh1(): boolean;
    clearSh1(): void;
    getSh1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSh1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointPosition;

    hasEl0(): boolean;
    clearEl0(): void;
    getEl0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setEl0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointPosition;

    hasEl1(): boolean;
    clearEl1(): void;
    getEl1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setEl1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointPosition;

    hasWr0(): boolean;
    clearWr0(): void;
    getWr0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWr0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointPosition;

    hasWr1(): boolean;
    clearWr1(): void;
    getWr1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWr1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmJointPosition.AsObject;
    static toObject(includeInstance: boolean, msg: ArmJointPosition): ArmJointPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmJointPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmJointPosition;
    static deserializeBinaryFromReader(message: ArmJointPosition, reader: jspb.BinaryReader): ArmJointPosition;
}

export namespace ArmJointPosition {
    export type AsObject = {
        sh0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        sh1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        el0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        el1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wr0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wr1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class ArmJointVelocity extends jspb.Message { 

    hasSh0(): boolean;
    clearSh0(): void;
    getSh0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSh0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointVelocity;

    hasSh1(): boolean;
    clearSh1(): void;
    getSh1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSh1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointVelocity;

    hasEl0(): boolean;
    clearEl0(): void;
    getEl0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setEl0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointVelocity;

    hasEl1(): boolean;
    clearEl1(): void;
    getEl1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setEl1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointVelocity;

    hasWr0(): boolean;
    clearWr0(): void;
    getWr0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWr0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointVelocity;

    hasWr1(): boolean;
    clearWr1(): void;
    getWr1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWr1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointVelocity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmJointVelocity.AsObject;
    static toObject(includeInstance: boolean, msg: ArmJointVelocity): ArmJointVelocity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmJointVelocity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmJointVelocity;
    static deserializeBinaryFromReader(message: ArmJointVelocity, reader: jspb.BinaryReader): ArmJointVelocity;
}

export namespace ArmJointVelocity {
    export type AsObject = {
        sh0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        sh1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        el0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        el1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wr0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wr1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class ArmJointTrajectoryPoint extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): ArmJointPosition | undefined;
    setPosition(value?: ArmJointPosition): ArmJointTrajectoryPoint;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): ArmJointVelocity | undefined;
    setVelocity(value?: ArmJointVelocity): ArmJointTrajectoryPoint;

    hasTimeSinceReference(): boolean;
    clearTimeSinceReference(): void;
    getTimeSinceReference(): google_protobuf_duration_pb.Duration | undefined;
    setTimeSinceReference(value?: google_protobuf_duration_pb.Duration): ArmJointTrajectoryPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmJointTrajectoryPoint.AsObject;
    static toObject(includeInstance: boolean, msg: ArmJointTrajectoryPoint): ArmJointTrajectoryPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmJointTrajectoryPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmJointTrajectoryPoint;
    static deserializeBinaryFromReader(message: ArmJointTrajectoryPoint, reader: jspb.BinaryReader): ArmJointTrajectoryPoint;
}

export namespace ArmJointTrajectoryPoint {
    export type AsObject = {
        position?: ArmJointPosition.AsObject,
        velocity?: ArmJointVelocity.AsObject,
        timeSinceReference?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ArmJointTrajectory extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<ArmJointTrajectoryPoint>;
    setPointsList(value: Array<ArmJointTrajectoryPoint>): ArmJointTrajectory;
    addPoints(value?: ArmJointTrajectoryPoint, index?: number): ArmJointTrajectoryPoint;

    hasReferenceTime(): boolean;
    clearReferenceTime(): void;
    getReferenceTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReferenceTime(value?: google_protobuf_timestamp_pb.Timestamp): ArmJointTrajectory;

    hasMaximumVelocity(): boolean;
    clearMaximumVelocity(): void;
    getMaximumVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMaximumVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointTrajectory;

    hasMaximumAcceleration(): boolean;
    clearMaximumAcceleration(): void;
    getMaximumAcceleration(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMaximumAcceleration(value?: google_protobuf_wrappers_pb.DoubleValue): ArmJointTrajectory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmJointTrajectory.AsObject;
    static toObject(includeInstance: boolean, msg: ArmJointTrajectory): ArmJointTrajectory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmJointTrajectory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmJointTrajectory;
    static deserializeBinaryFromReader(message: ArmJointTrajectory, reader: jspb.BinaryReader): ArmJointTrajectory;
}

export namespace ArmJointTrajectory {
    export type AsObject = {
        pointsList: Array<ArmJointTrajectoryPoint.AsObject>,
        referenceTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        maximumVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        maximumAcceleration?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class GazeCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GazeCommand.AsObject;
    static toObject(includeInstance: boolean, msg: GazeCommand): GazeCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GazeCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GazeCommand;
    static deserializeBinaryFromReader(message: GazeCommand, reader: jspb.BinaryReader): GazeCommand;
}

export namespace GazeCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasTargetTrajectoryInFrame1(): boolean;
        clearTargetTrajectoryInFrame1(): void;
        getTargetTrajectoryInFrame1(): bosdyn_api_trajectory_pb.Vec3Trajectory | undefined;
        setTargetTrajectoryInFrame1(value?: bosdyn_api_trajectory_pb.Vec3Trajectory): Request;
        getFrame1Name(): string;
        setFrame1Name(value: string): Request;

        hasToolTrajectoryInFrame2(): boolean;
        clearToolTrajectoryInFrame2(): void;
        getToolTrajectoryInFrame2(): bosdyn_api_trajectory_pb.SE3Trajectory | undefined;
        setToolTrajectoryInFrame2(value?: bosdyn_api_trajectory_pb.SE3Trajectory): Request;
        getFrame2Name(): string;
        setFrame2Name(value: string): Request;

        hasWristTformTool(): boolean;
        clearWristTformTool(): void;
        getWristTformTool(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setWristTformTool(value?: bosdyn_api_geometry_pb.SE3Pose): Request;

        hasTargetTrajectoryInitialVelocity(): boolean;
        clearTargetTrajectoryInitialVelocity(): void;
        getTargetTrajectoryInitialVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setTargetTrajectoryInitialVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaximumAcceleration(): boolean;
        clearMaximumAcceleration(): void;
        getMaximumAcceleration(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaximumAcceleration(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaxLinearVelocity(): boolean;
        clearMaxLinearVelocity(): void;
        getMaxLinearVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxLinearVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaxAngularVelocity(): boolean;
        clearMaxAngularVelocity(): void;
        getMaxAngularVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxAngularVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

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
            targetTrajectoryInFrame1?: bosdyn_api_trajectory_pb.Vec3Trajectory.AsObject,
            frame1Name: string,
            toolTrajectoryInFrame2?: bosdyn_api_trajectory_pb.SE3Trajectory.AsObject,
            frame2Name: string,
            wristTformTool?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            targetTrajectoryInitialVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maximumAcceleration?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxLinearVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxAngularVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): GazeCommand.Feedback.Status;
        setStatus(value: GazeCommand.Feedback.Status): Feedback;
        getGazingAtTarget(): boolean;
        setGazingAtTarget(value: boolean): Feedback;
        getGazeToTargetRotationMeasured(): number;
        setGazeToTargetRotationMeasured(value: number): Feedback;
        getHandPositionAtGoal(): boolean;
        setHandPositionAtGoal(value: boolean): Feedback;
        getHandDistanceToGoalMeasured(): number;
        setHandDistanceToGoalMeasured(value: number): Feedback;
        getHandRollAtGoal(): boolean;
        setHandRollAtGoal(value: boolean): Feedback;
        getHandRollToTargetRollMeasured(): number;
        setHandRollToTargetRollMeasured(value: number): Feedback;

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
            status: GazeCommand.Feedback.Status,
            gazingAtTarget: boolean,
            gazeToTargetRotationMeasured: number,
            handPositionAtGoal: boolean,
            handDistanceToGoalMeasured: number,
            handRollAtGoal: boolean,
            handRollToTargetRollMeasured: number,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_TRAJECTORY_COMPLETE = 1,
    STATUS_IN_PROGRESS = 2,
    STATUS_TOOL_TRAJECTORY_STALLED = 3,
        }

    }

}

export class ArmStopCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmStopCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ArmStopCommand): ArmStopCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmStopCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmStopCommand;
    static deserializeBinaryFromReader(message: ArmStopCommand, reader: jspb.BinaryReader): ArmStopCommand;
}

export namespace ArmStopCommand {
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

export class ArmImpedanceCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmImpedanceCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ArmImpedanceCommand): ArmImpedanceCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmImpedanceCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmImpedanceCommand;
    static deserializeBinaryFromReader(message: ArmImpedanceCommand, reader: jspb.BinaryReader): ArmImpedanceCommand;
}

export namespace ArmImpedanceCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getRootFrameName(): string;
        setRootFrameName(value: string): Request;

        hasRootTformTask(): boolean;
        clearRootTformTask(): void;
        getRootTformTask(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setRootTformTask(value?: bosdyn_api_geometry_pb.SE3Pose): Request;

        hasWristTformTool(): boolean;
        clearWristTformTool(): void;
        getWristTformTool(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setWristTformTool(value?: bosdyn_api_geometry_pb.SE3Pose): Request;

        hasTaskTformDesiredTool(): boolean;
        clearTaskTformDesiredTool(): void;
        getTaskTformDesiredTool(): bosdyn_api_trajectory_pb.SE3Trajectory | undefined;
        setTaskTformDesiredTool(value?: bosdyn_api_trajectory_pb.SE3Trajectory): Request;

        hasFeedForwardWrenchAtToolInDesiredTool(): boolean;
        clearFeedForwardWrenchAtToolInDesiredTool(): void;
        getFeedForwardWrenchAtToolInDesiredTool(): bosdyn_api_geometry_pb.Wrench | undefined;
        setFeedForwardWrenchAtToolInDesiredTool(value?: bosdyn_api_geometry_pb.Wrench): Request;

        hasDiagonalStiffnessMatrix(): boolean;
        clearDiagonalStiffnessMatrix(): void;
        getDiagonalStiffnessMatrix(): bosdyn_api_geometry_pb.Vector | undefined;
        setDiagonalStiffnessMatrix(value?: bosdyn_api_geometry_pb.Vector): Request;

        hasDiagonalDampingMatrix(): boolean;
        clearDiagonalDampingMatrix(): void;
        getDiagonalDampingMatrix(): bosdyn_api_geometry_pb.Vector | undefined;
        setDiagonalDampingMatrix(value?: bosdyn_api_geometry_pb.Vector): Request;

        hasMaxForceMag(): boolean;
        clearMaxForceMag(): void;
        getMaxForceMag(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxForceMag(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasMaxTorqueMag(): boolean;
        clearMaxTorqueMag(): void;
        getMaxTorqueMag(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxTorqueMag(value?: google_protobuf_wrappers_pb.DoubleValue): Request;

        hasDisableSafetyCheck(): boolean;
        clearDisableSafetyCheck(): void;
        getDisableSafetyCheck(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setDisableSafetyCheck(value?: google_protobuf_wrappers_pb.BoolValue): Request;

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
            rootFrameName: string,
            rootTformTask?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            wristTformTool?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            taskTformDesiredTool?: bosdyn_api_trajectory_pb.SE3Trajectory.AsObject,
            feedForwardWrenchAtToolInDesiredTool?: bosdyn_api_geometry_pb.Wrench.AsObject,
            diagonalStiffnessMatrix?: bosdyn_api_geometry_pb.Vector.AsObject,
            diagonalDampingMatrix?: bosdyn_api_geometry_pb.Vector.AsObject,
            maxForceMag?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxTorqueMag?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            disableSafetyCheck?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): ArmImpedanceCommand.Feedback.Status;
        setStatus(value: ArmImpedanceCommand.Feedback.Status): Feedback;

        hasTransformsSnapshot(): boolean;
        clearTransformsSnapshot(): void;
        getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
        setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): Feedback;

        hasCommandedWrenchFromStiffnessAtToolInDesiredTool(): boolean;
        clearCommandedWrenchFromStiffnessAtToolInDesiredTool(): void;
        getCommandedWrenchFromStiffnessAtToolInDesiredTool(): bosdyn_api_geometry_pb.Wrench | undefined;
        setCommandedWrenchFromStiffnessAtToolInDesiredTool(value?: bosdyn_api_geometry_pb.Wrench): Feedback;

        hasCommandedWrenchFromDampingAtToolInDesiredTool(): boolean;
        clearCommandedWrenchFromDampingAtToolInDesiredTool(): void;
        getCommandedWrenchFromDampingAtToolInDesiredTool(): bosdyn_api_geometry_pb.Wrench | undefined;
        setCommandedWrenchFromDampingAtToolInDesiredTool(value?: bosdyn_api_geometry_pb.Wrench): Feedback;

        hasCommandedWrenchFromFeedForwardAtToolInDesiredTool(): boolean;
        clearCommandedWrenchFromFeedForwardAtToolInDesiredTool(): void;
        getCommandedWrenchFromFeedForwardAtToolInDesiredTool(): bosdyn_api_geometry_pb.Wrench | undefined;
        setCommandedWrenchFromFeedForwardAtToolInDesiredTool(value?: bosdyn_api_geometry_pb.Wrench): Feedback;

        hasTotalCommandedWrenchAtToolInDesiredTool(): boolean;
        clearTotalCommandedWrenchAtToolInDesiredTool(): void;
        getTotalCommandedWrenchAtToolInDesiredTool(): bosdyn_api_geometry_pb.Wrench | undefined;
        setTotalCommandedWrenchAtToolInDesiredTool(value?: bosdyn_api_geometry_pb.Wrench): Feedback;

        hasTotalMeasuredWrenchAtToolInDesiredTool(): boolean;
        clearTotalMeasuredWrenchAtToolInDesiredTool(): void;
        getTotalMeasuredWrenchAtToolInDesiredTool(): bosdyn_api_geometry_pb.Wrench | undefined;
        setTotalMeasuredWrenchAtToolInDesiredTool(value?: bosdyn_api_geometry_pb.Wrench): Feedback;

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
            status: ArmImpedanceCommand.Feedback.Status,
            transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
            commandedWrenchFromStiffnessAtToolInDesiredTool?: bosdyn_api_geometry_pb.Wrench.AsObject,
            commandedWrenchFromDampingAtToolInDesiredTool?: bosdyn_api_geometry_pb.Wrench.AsObject,
            commandedWrenchFromFeedForwardAtToolInDesiredTool?: bosdyn_api_geometry_pb.Wrench.AsObject,
            totalCommandedWrenchAtToolInDesiredTool?: bosdyn_api_geometry_pb.Wrench.AsObject,
            totalMeasuredWrenchAtToolInDesiredTool?: bosdyn_api_geometry_pb.Wrench.AsObject,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_TRAJECTORY_COMPLETE = 1,
    STATUS_IN_PROGRESS = 2,
    STATUS_TRAJECTORY_STALLED = 3,
    STATUS_TRAJECTORY_CANCELLED = 4,
        }

    }

}
