// package: bosdyn.api.spot
// file: bosdyn/api/spot/inverse_kinematics.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_arm_command_pb from "../../../bosdyn/api/arm_command_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_robot_state_pb from "../../../bosdyn/api/robot_state_pb";

export class InverseKinematicsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): InverseKinematicsRequest;
    getRootFrameName(): string;
    setRootFrameName(value: string): InverseKinematicsRequest;

    hasRootTformScene(): boolean;
    clearRootTformScene(): void;
    getRootTformScene(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setRootTformScene(value?: bosdyn_api_geometry_pb.SE3Pose): InverseKinematicsRequest;

    hasSceneTformTask(): boolean;
    clearSceneTformTask(): void;
    getSceneTformTask(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setSceneTformTask(value?: bosdyn_api_geometry_pb.SE3Pose): InverseKinematicsRequest;
    getNominalArmConfiguration(): InverseKinematicsRequest.NamedArmConfiguration;
    setNominalArmConfiguration(value: InverseKinematicsRequest.NamedArmConfiguration): InverseKinematicsRequest;

    hasNominalArmConfigurationOverrides(): boolean;
    clearNominalArmConfigurationOverrides(): void;
    getNominalArmConfigurationOverrides(): bosdyn_api_arm_command_pb.ArmJointPosition | undefined;
    setNominalArmConfigurationOverrides(value?: bosdyn_api_arm_command_pb.ArmJointPosition): InverseKinematicsRequest;

    hasSceneTformBodyNominal(): boolean;
    clearSceneTformBodyNominal(): void;
    getSceneTformBodyNominal(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setSceneTformBodyNominal(value?: bosdyn_api_geometry_pb.SE3Pose): InverseKinematicsRequest;

    hasFixedStance(): boolean;
    clearFixedStance(): void;
    getFixedStance(): InverseKinematicsRequest.FixedStance | undefined;
    setFixedStance(value?: InverseKinematicsRequest.FixedStance): InverseKinematicsRequest;

    hasOnGroundPlaneStance(): boolean;
    clearOnGroundPlaneStance(): void;
    getOnGroundPlaneStance(): InverseKinematicsRequest.OnGroundPlaneStance | undefined;
    setOnGroundPlaneStance(value?: InverseKinematicsRequest.OnGroundPlaneStance): InverseKinematicsRequest;

    hasWristMountedTool(): boolean;
    clearWristMountedTool(): void;
    getWristMountedTool(): InverseKinematicsRequest.WristMountedTool | undefined;
    setWristMountedTool(value?: InverseKinematicsRequest.WristMountedTool): InverseKinematicsRequest;

    hasBodyMountedTool(): boolean;
    clearBodyMountedTool(): void;
    getBodyMountedTool(): InverseKinematicsRequest.BodyMountedTool | undefined;
    setBodyMountedTool(value?: InverseKinematicsRequest.BodyMountedTool): InverseKinematicsRequest;

    hasToolPoseTask(): boolean;
    clearToolPoseTask(): void;
    getToolPoseTask(): InverseKinematicsRequest.ToolPoseTask | undefined;
    setToolPoseTask(value?: InverseKinematicsRequest.ToolPoseTask): InverseKinematicsRequest;

    hasToolGazeTask(): boolean;
    clearToolGazeTask(): void;
    getToolGazeTask(): InverseKinematicsRequest.ToolGazeTask | undefined;
    setToolGazeTask(value?: InverseKinematicsRequest.ToolGazeTask): InverseKinematicsRequest;

    getStanceSpecificationCase(): InverseKinematicsRequest.StanceSpecificationCase;
    getToolSpecificationCase(): InverseKinematicsRequest.ToolSpecificationCase;
    getTaskSpecificationCase(): InverseKinematicsRequest.TaskSpecificationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InverseKinematicsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InverseKinematicsRequest): InverseKinematicsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InverseKinematicsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InverseKinematicsRequest;
    static deserializeBinaryFromReader(message: InverseKinematicsRequest, reader: jspb.BinaryReader): InverseKinematicsRequest;
}

export namespace InverseKinematicsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        rootFrameName: string,
        rootTformScene?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        sceneTformTask?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        nominalArmConfiguration: InverseKinematicsRequest.NamedArmConfiguration,
        nominalArmConfigurationOverrides?: bosdyn_api_arm_command_pb.ArmJointPosition.AsObject,
        sceneTformBodyNominal?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        fixedStance?: InverseKinematicsRequest.FixedStance.AsObject,
        onGroundPlaneStance?: InverseKinematicsRequest.OnGroundPlaneStance.AsObject,
        wristMountedTool?: InverseKinematicsRequest.WristMountedTool.AsObject,
        bodyMountedTool?: InverseKinematicsRequest.BodyMountedTool.AsObject,
        toolPoseTask?: InverseKinematicsRequest.ToolPoseTask.AsObject,
        toolGazeTask?: InverseKinematicsRequest.ToolGazeTask.AsObject,
    }


    export class FixedStance extends jspb.Message { 

        hasFlRtScene(): boolean;
        clearFlRtScene(): void;
        getFlRtScene(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setFlRtScene(value?: bosdyn_api_geometry_pb.Vec3): FixedStance;

        hasFrRtScene(): boolean;
        clearFrRtScene(): void;
        getFrRtScene(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setFrRtScene(value?: bosdyn_api_geometry_pb.Vec3): FixedStance;

        hasHlRtScene(): boolean;
        clearHlRtScene(): void;
        getHlRtScene(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setHlRtScene(value?: bosdyn_api_geometry_pb.Vec3): FixedStance;

        hasHrRtScene(): boolean;
        clearHrRtScene(): void;
        getHrRtScene(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setHrRtScene(value?: bosdyn_api_geometry_pb.Vec3): FixedStance;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FixedStance.AsObject;
        static toObject(includeInstance: boolean, msg: FixedStance): FixedStance.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FixedStance, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FixedStance;
        static deserializeBinaryFromReader(message: FixedStance, reader: jspb.BinaryReader): FixedStance;
    }

    export namespace FixedStance {
        export type AsObject = {
            flRtScene?: bosdyn_api_geometry_pb.Vec3.AsObject,
            frRtScene?: bosdyn_api_geometry_pb.Vec3.AsObject,
            hlRtScene?: bosdyn_api_geometry_pb.Vec3.AsObject,
            hrRtScene?: bosdyn_api_geometry_pb.Vec3.AsObject,
        }
    }

    export class OnGroundPlaneStance extends jspb.Message { 

        hasSceneTformGround(): boolean;
        clearSceneTformGround(): void;
        getSceneTformGround(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setSceneTformGround(value?: bosdyn_api_geometry_pb.SE3Pose): OnGroundPlaneStance;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OnGroundPlaneStance.AsObject;
        static toObject(includeInstance: boolean, msg: OnGroundPlaneStance): OnGroundPlaneStance.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OnGroundPlaneStance, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OnGroundPlaneStance;
        static deserializeBinaryFromReader(message: OnGroundPlaneStance, reader: jspb.BinaryReader): OnGroundPlaneStance;
    }

    export namespace OnGroundPlaneStance {
        export type AsObject = {
            sceneTformGround?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        }
    }

    export class WristMountedTool extends jspb.Message { 

        hasWristTformTool(): boolean;
        clearWristTformTool(): void;
        getWristTformTool(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setWristTformTool(value?: bosdyn_api_geometry_pb.SE3Pose): WristMountedTool;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WristMountedTool.AsObject;
        static toObject(includeInstance: boolean, msg: WristMountedTool): WristMountedTool.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WristMountedTool, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WristMountedTool;
        static deserializeBinaryFromReader(message: WristMountedTool, reader: jspb.BinaryReader): WristMountedTool;
    }

    export namespace WristMountedTool {
        export type AsObject = {
            wristTformTool?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        }
    }

    export class BodyMountedTool extends jspb.Message { 

        hasBodyTformTool(): boolean;
        clearBodyTformTool(): void;
        getBodyTformTool(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setBodyTformTool(value?: bosdyn_api_geometry_pb.SE3Pose): BodyMountedTool;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BodyMountedTool.AsObject;
        static toObject(includeInstance: boolean, msg: BodyMountedTool): BodyMountedTool.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BodyMountedTool, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BodyMountedTool;
        static deserializeBinaryFromReader(message: BodyMountedTool, reader: jspb.BinaryReader): BodyMountedTool;
    }

    export namespace BodyMountedTool {
        export type AsObject = {
            bodyTformTool?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        }
    }

    export class ToolPoseTask extends jspb.Message { 

        hasTaskTformDesiredTool(): boolean;
        clearTaskTformDesiredTool(): void;
        getTaskTformDesiredTool(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setTaskTformDesiredTool(value?: bosdyn_api_geometry_pb.SE3Pose): ToolPoseTask;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ToolPoseTask.AsObject;
        static toObject(includeInstance: boolean, msg: ToolPoseTask): ToolPoseTask.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ToolPoseTask, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ToolPoseTask;
        static deserializeBinaryFromReader(message: ToolPoseTask, reader: jspb.BinaryReader): ToolPoseTask;
    }

    export namespace ToolPoseTask {
        export type AsObject = {
            taskTformDesiredTool?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        }
    }

    export class ToolGazeTask extends jspb.Message { 

        hasTargetInTask(): boolean;
        clearTargetInTask(): void;
        getTargetInTask(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setTargetInTask(value?: bosdyn_api_geometry_pb.Vec3): ToolGazeTask;

        hasTaskTformDesiredTool(): boolean;
        clearTaskTformDesiredTool(): void;
        getTaskTformDesiredTool(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setTaskTformDesiredTool(value?: bosdyn_api_geometry_pb.SE3Pose): ToolGazeTask;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ToolGazeTask.AsObject;
        static toObject(includeInstance: boolean, msg: ToolGazeTask): ToolGazeTask.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ToolGazeTask, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ToolGazeTask;
        static deserializeBinaryFromReader(message: ToolGazeTask, reader: jspb.BinaryReader): ToolGazeTask;
    }

    export namespace ToolGazeTask {
        export type AsObject = {
            targetInTask?: bosdyn_api_geometry_pb.Vec3.AsObject,
            taskTformDesiredTool?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        }
    }


    export enum NamedArmConfiguration {
    ARM_CONFIG_UNKNOWN = 0,
    ARM_CONFIG_CURRENT = 1,
    ARM_CONFIG_READY = 2,
    }


    export enum StanceSpecificationCase {
        STANCE_SPECIFICATION_NOT_SET = 0,
        FIXED_STANCE = 8,
        ON_GROUND_PLANE_STANCE = 9,
    }

    export enum ToolSpecificationCase {
        TOOL_SPECIFICATION_NOT_SET = 0,
        WRIST_MOUNTED_TOOL = 10,
        BODY_MOUNTED_TOOL = 11,
    }

    export enum TaskSpecificationCase {
        TASK_SPECIFICATION_NOT_SET = 0,
        TOOL_POSE_TASK = 12,
        TOOL_GAZE_TASK = 13,
    }

}

export class InverseKinematicsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): InverseKinematicsResponse;
    getStatus(): InverseKinematicsResponse.Status;
    setStatus(value: InverseKinematicsResponse.Status): InverseKinematicsResponse;

    hasRobotConfiguration(): boolean;
    clearRobotConfiguration(): void;
    getRobotConfiguration(): bosdyn_api_robot_state_pb.KinematicState | undefined;
    setRobotConfiguration(value?: bosdyn_api_robot_state_pb.KinematicState): InverseKinematicsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InverseKinematicsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InverseKinematicsResponse): InverseKinematicsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InverseKinematicsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InverseKinematicsResponse;
    static deserializeBinaryFromReader(message: InverseKinematicsResponse, reader: jspb.BinaryReader): InverseKinematicsResponse;
}

export namespace InverseKinematicsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: InverseKinematicsResponse.Status,
        robotConfiguration?: bosdyn_api_robot_state_pb.KinematicState.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_SOLUTION_FOUND = 2,
    }

}
