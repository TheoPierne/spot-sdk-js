// package: bosdyn.api
// file: bosdyn/api/arm_surface_contact.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_gripper_command_pb from "../../bosdyn/api/gripper_command_pb";
import * as bosdyn_api_trajectory_pb from "../../bosdyn/api/trajectory_pb";
import * as bosdyn_api_arm_command_pb from "../../bosdyn/api/arm_command_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ArmSurfaceContact extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmSurfaceContact.AsObject;
    static toObject(includeInstance: boolean, msg: ArmSurfaceContact): ArmSurfaceContact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmSurfaceContact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmSurfaceContact;
    static deserializeBinaryFromReader(message: ArmSurfaceContact, reader: jspb.BinaryReader): ArmSurfaceContact;
}

export namespace ArmSurfaceContact {
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
        getPreferredJointConfiguration(): bosdyn_api_arm_command_pb.ArmJointPosition | undefined;
        setPreferredJointConfiguration(value?: bosdyn_api_arm_command_pb.ArmJointPosition): Request;
        getXAxis(): ArmSurfaceContact.Request.AxisMode;
        setXAxis(value: ArmSurfaceContact.Request.AxisMode): Request;
        getYAxis(): ArmSurfaceContact.Request.AxisMode;
        setYAxis(value: ArmSurfaceContact.Request.AxisMode): Request;
        getZAxis(): ArmSurfaceContact.Request.AxisMode;
        setZAxis(value: ArmSurfaceContact.Request.AxisMode): Request;

        hasPressForcePercentage(): boolean;
        clearPressForcePercentage(): void;
        getPressForcePercentage(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setPressForcePercentage(value?: bosdyn_api_geometry_pb.Vec3): Request;
        getXyAdmittance(): ArmSurfaceContact.Request.AdmittanceSetting;
        setXyAdmittance(value: ArmSurfaceContact.Request.AdmittanceSetting): Request;
        getZAdmittance(): ArmSurfaceContact.Request.AdmittanceSetting;
        setZAdmittance(value: ArmSurfaceContact.Request.AdmittanceSetting): Request;
        getXyToZCrossTermAdmittance(): ArmSurfaceContact.Request.AdmittanceSetting;
        setXyToZCrossTermAdmittance(value: ArmSurfaceContact.Request.AdmittanceSetting): Request;

        hasBiasForceEwrtBody(): boolean;
        clearBiasForceEwrtBody(): void;
        getBiasForceEwrtBody(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setBiasForceEwrtBody(value?: bosdyn_api_geometry_pb.Vec3): Request;

        hasGripperCommand(): boolean;
        clearGripperCommand(): void;
        getGripperCommand(): bosdyn_api_gripper_command_pb.ClawGripperCommand.Request | undefined;
        setGripperCommand(value?: bosdyn_api_gripper_command_pb.ClawGripperCommand.Request): Request;
        getIsRobotFollowingHand(): boolean;
        setIsRobotFollowingHand(value: boolean): Request;

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
            preferredJointConfiguration?: bosdyn_api_arm_command_pb.ArmJointPosition.AsObject,
            xAxis: ArmSurfaceContact.Request.AxisMode,
            yAxis: ArmSurfaceContact.Request.AxisMode,
            zAxis: ArmSurfaceContact.Request.AxisMode,
            pressForcePercentage?: bosdyn_api_geometry_pb.Vec3.AsObject,
            xyAdmittance: ArmSurfaceContact.Request.AdmittanceSetting,
            zAdmittance: ArmSurfaceContact.Request.AdmittanceSetting,
            xyToZCrossTermAdmittance: ArmSurfaceContact.Request.AdmittanceSetting,
            biasForceEwrtBody?: bosdyn_api_geometry_pb.Vec3.AsObject,
            gripperCommand?: bosdyn_api_gripper_command_pb.ClawGripperCommand.Request.AsObject,
            isRobotFollowingHand: boolean,
        }

        export enum AxisMode {
    AXIS_MODE_POSITION = 0,
    AXIS_MODE_FORCE = 1,
        }

        export enum AdmittanceSetting {
    ADMITTANCE_SETTING_UNKNOWN = 0,
    ADMITTANCE_SETTING_OFF = 1,
    ADMITTANCE_SETTING_NORMAL = 2,
    ADMITTANCE_SETTING_LOOSE = 3,
    ADMITTANCE_SETTING_STIFF = 4,
    ADMITTANCE_SETTING_VERY_STIFF = 5,
        }


        export enum JointConfigurationCase {
            JOINT_CONFIGURATION_NOT_SET = 0,
            FORCE_REMAIN_NEAR_CURRENT_JOINT_CONFIGURATION = 15,
            PREFERRED_JOINT_CONFIGURATION = 16,
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
