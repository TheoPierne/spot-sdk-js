// package: bosdyn.api.spot
// file: bosdyn/api/spot/robot_command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_trajectory_pb from "../../../bosdyn/api/trajectory_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class MobilityParams extends jspb.Message { 

    hasVelLimit(): boolean;
    clearVelLimit(): void;
    getVelLimit(): bosdyn_api_geometry_pb.SE2VelocityLimit | undefined;
    setVelLimit(value?: bosdyn_api_geometry_pb.SE2VelocityLimit): MobilityParams;

    hasBodyControl(): boolean;
    clearBodyControl(): void;
    getBodyControl(): BodyControlParams | undefined;
    setBodyControl(value?: BodyControlParams): MobilityParams;
    getLocomotionHint(): LocomotionHint;
    setLocomotionHint(value: LocomotionHint): MobilityParams;
    getStairHint(): boolean;
    setStairHint(value: boolean): MobilityParams;
    getStairsMode(): MobilityParams.StairsMode;
    setStairsMode(value: MobilityParams.StairsMode): MobilityParams;
    getAllowDegradedPerception(): boolean;
    setAllowDegradedPerception(value: boolean): MobilityParams;

    hasObstacleParams(): boolean;
    clearObstacleParams(): void;
    getObstacleParams(): ObstacleParams | undefined;
    setObstacleParams(value?: ObstacleParams): MobilityParams;
    getSwingHeight(): SwingHeight;
    setSwingHeight(value: SwingHeight): MobilityParams;

    hasTerrainParams(): boolean;
    clearTerrainParams(): void;
    getTerrainParams(): TerrainParams | undefined;
    setTerrainParams(value?: TerrainParams): MobilityParams;
    getDisallowStairTracker(): boolean;
    setDisallowStairTracker(value: boolean): MobilityParams;
    getDisableStairErrorAutoDescent(): boolean;
    setDisableStairErrorAutoDescent(value: boolean): MobilityParams;

    hasExternalForceParams(): boolean;
    clearExternalForceParams(): void;
    getExternalForceParams(): BodyExternalForceParams | undefined;
    setExternalForceParams(value?: BodyExternalForceParams): MobilityParams;
    getDisallowNonStairsPitchLimiting(): boolean;
    setDisallowNonStairsPitchLimiting(value: boolean): MobilityParams;
    getDisableNearmapCliffAvoidance(): boolean;
    setDisableNearmapCliffAvoidance(value: boolean): MobilityParams;
    getDisableMissingDataCliffs(): boolean;
    setDisableMissingDataCliffs(value: boolean): MobilityParams;
    getHazardDetectionMode(): MobilityParams.HazardDetectionMode;
    setHazardDetectionMode(value: MobilityParams.HazardDetectionMode): MobilityParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MobilityParams.AsObject;
    static toObject(includeInstance: boolean, msg: MobilityParams): MobilityParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MobilityParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MobilityParams;
    static deserializeBinaryFromReader(message: MobilityParams, reader: jspb.BinaryReader): MobilityParams;
}

export namespace MobilityParams {
    export type AsObject = {
        velLimit?: bosdyn_api_geometry_pb.SE2VelocityLimit.AsObject,
        bodyControl?: BodyControlParams.AsObject,
        locomotionHint: LocomotionHint,
        stairHint: boolean,
        stairsMode: MobilityParams.StairsMode,
        allowDegradedPerception: boolean,
        obstacleParams?: ObstacleParams.AsObject,
        swingHeight: SwingHeight,
        terrainParams?: TerrainParams.AsObject,
        disallowStairTracker: boolean,
        disableStairErrorAutoDescent: boolean,
        externalForceParams?: BodyExternalForceParams.AsObject,
        disallowNonStairsPitchLimiting: boolean,
        disableNearmapCliffAvoidance: boolean,
        disableMissingDataCliffs: boolean,
        hazardDetectionMode: MobilityParams.HazardDetectionMode,
    }

    export enum StairsMode {
    STAIRS_MODE_UNKNOWN = 0,
    STAIRS_MODE_OFF = 1,
    STAIRS_MODE_ON = 2,
    STAIRS_MODE_AUTO = 3,
    STAIRS_MODE_PROHIBITED = 4,
    }

    export enum HazardDetectionMode {
    HAZARD_DETECTION_MODE_UNKNOWN = 0,
    HAZARD_DETECTION_MODE_OFF = 1,
    HAZARD_DETECTION_MODE_ON = 2,
    HAZARD_DETECTION_MODE_COST = 3,
    }

}

export class BodyControlParams extends jspb.Message { 

    hasBaseOffsetRtFootprint(): boolean;
    clearBaseOffsetRtFootprint(): void;
    getBaseOffsetRtFootprint(): bosdyn_api_trajectory_pb.SE3Trajectory | undefined;
    setBaseOffsetRtFootprint(value?: bosdyn_api_trajectory_pb.SE3Trajectory): BodyControlParams;

    hasBodyAssistForManipulation(): boolean;
    clearBodyAssistForManipulation(): void;
    getBodyAssistForManipulation(): BodyControlParams.BodyAssistForManipulation | undefined;
    setBodyAssistForManipulation(value?: BodyControlParams.BodyAssistForManipulation): BodyControlParams;

    hasBodyPose(): boolean;
    clearBodyPose(): void;
    getBodyPose(): BodyControlParams.BodyPose | undefined;
    setBodyPose(value?: BodyControlParams.BodyPose): BodyControlParams;
    getRotationSetting(): BodyControlParams.RotationSetting;
    setRotationSetting(value: BodyControlParams.RotationSetting): BodyControlParams;

    getParamCase(): BodyControlParams.ParamCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BodyControlParams.AsObject;
    static toObject(includeInstance: boolean, msg: BodyControlParams): BodyControlParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BodyControlParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BodyControlParams;
    static deserializeBinaryFromReader(message: BodyControlParams, reader: jspb.BinaryReader): BodyControlParams;
}

export namespace BodyControlParams {
    export type AsObject = {
        baseOffsetRtFootprint?: bosdyn_api_trajectory_pb.SE3Trajectory.AsObject,
        bodyAssistForManipulation?: BodyControlParams.BodyAssistForManipulation.AsObject,
        bodyPose?: BodyControlParams.BodyPose.AsObject,
        rotationSetting: BodyControlParams.RotationSetting,
    }


    export class BodyAssistForManipulation extends jspb.Message { 
        getEnableBodyYawAssist(): boolean;
        setEnableBodyYawAssist(value: boolean): BodyAssistForManipulation;
        getEnableHipHeightAssist(): boolean;
        setEnableHipHeightAssist(value: boolean): BodyAssistForManipulation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BodyAssistForManipulation.AsObject;
        static toObject(includeInstance: boolean, msg: BodyAssistForManipulation): BodyAssistForManipulation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BodyAssistForManipulation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BodyAssistForManipulation;
        static deserializeBinaryFromReader(message: BodyAssistForManipulation, reader: jspb.BinaryReader): BodyAssistForManipulation;
    }

    export namespace BodyAssistForManipulation {
        export type AsObject = {
            enableBodyYawAssist: boolean,
            enableHipHeightAssist: boolean,
        }
    }

    export class BodyPose extends jspb.Message { 
        getRootFrameName(): string;
        setRootFrameName(value: string): BodyPose;

        hasBaseOffsetRtRoot(): boolean;
        clearBaseOffsetRtRoot(): void;
        getBaseOffsetRtRoot(): bosdyn_api_trajectory_pb.SE3Trajectory | undefined;
        setBaseOffsetRtRoot(value?: bosdyn_api_trajectory_pb.SE3Trajectory): BodyPose;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BodyPose.AsObject;
        static toObject(includeInstance: boolean, msg: BodyPose): BodyPose.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BodyPose, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BodyPose;
        static deserializeBinaryFromReader(message: BodyPose, reader: jspb.BinaryReader): BodyPose;
    }

    export namespace BodyPose {
        export type AsObject = {
            rootFrameName: string,
            baseOffsetRtRoot?: bosdyn_api_trajectory_pb.SE3Trajectory.AsObject,
        }
    }


    export enum RotationSetting {
    ROTATION_SETTING_UNKNOWN = 0,
    ROTATION_SETTING_OFFSET = 1,
    ROTATION_SETTING_ABSOLUTE = 2,
    }


    export enum ParamCase {
        PARAM_NOT_SET = 0,
        BASE_OFFSET_RT_FOOTPRINT = 1,
        BODY_ASSIST_FOR_MANIPULATION = 3,
        BODY_POSE = 4,
    }

}

export class ObstacleParams extends jspb.Message { 
    getDisableVisionFootObstacleAvoidance(): boolean;
    setDisableVisionFootObstacleAvoidance(value: boolean): ObstacleParams;
    getDisableVisionFootConstraintAvoidance(): boolean;
    setDisableVisionFootConstraintAvoidance(value: boolean): ObstacleParams;
    getDisableVisionBodyObstacleAvoidance(): boolean;
    setDisableVisionBodyObstacleAvoidance(value: boolean): ObstacleParams;
    getObstacleAvoidancePadding(): number;
    setObstacleAvoidancePadding(value: number): ObstacleParams;
    getDisableVisionFootObstacleBodyAssist(): boolean;
    setDisableVisionFootObstacleBodyAssist(value: boolean): ObstacleParams;
    getDisableVisionNegativeObstacles(): boolean;
    setDisableVisionNegativeObstacles(value: boolean): ObstacleParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObstacleParams.AsObject;
    static toObject(includeInstance: boolean, msg: ObstacleParams): ObstacleParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObstacleParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObstacleParams;
    static deserializeBinaryFromReader(message: ObstacleParams, reader: jspb.BinaryReader): ObstacleParams;
}

export namespace ObstacleParams {
    export type AsObject = {
        disableVisionFootObstacleAvoidance: boolean,
        disableVisionFootConstraintAvoidance: boolean,
        disableVisionBodyObstacleAvoidance: boolean,
        obstacleAvoidancePadding: number,
        disableVisionFootObstacleBodyAssist: boolean,
        disableVisionNegativeObstacles: boolean,
    }
}

export class TerrainParams extends jspb.Message { 

    hasGroundMuHint(): boolean;
    clearGroundMuHint(): void;
    getGroundMuHint(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGroundMuHint(value?: google_protobuf_wrappers_pb.DoubleValue): TerrainParams;
    getEnableGratedFloor(): boolean;
    setEnableGratedFloor(value: boolean): TerrainParams;
    getGratedSurfacesMode(): TerrainParams.GratedSurfacesMode;
    setGratedSurfacesMode(value: TerrainParams.GratedSurfacesMode): TerrainParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TerrainParams.AsObject;
    static toObject(includeInstance: boolean, msg: TerrainParams): TerrainParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TerrainParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TerrainParams;
    static deserializeBinaryFromReader(message: TerrainParams, reader: jspb.BinaryReader): TerrainParams;
}

export namespace TerrainParams {
    export type AsObject = {
        groundMuHint?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        enableGratedFloor: boolean,
        gratedSurfacesMode: TerrainParams.GratedSurfacesMode,
    }

    export enum GratedSurfacesMode {
    GRATED_SURFACES_MODE_UNKNOWN = 0,
    GRATED_SURFACES_MODE_OFF = 1,
    GRATED_SURFACES_MODE_ON = 2,
    GRATED_SURFACES_MODE_AUTO = 3,
    }

}

export class BodyExternalForceParams extends jspb.Message { 
    getExternalForceIndicator(): BodyExternalForceParams.ExternalForceIndicator;
    setExternalForceIndicator(value: BodyExternalForceParams.ExternalForceIndicator): BodyExternalForceParams;
    getFrameName(): string;
    setFrameName(value: string): BodyExternalForceParams;

    hasExternalForceOverride(): boolean;
    clearExternalForceOverride(): void;
    getExternalForceOverride(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setExternalForceOverride(value?: bosdyn_api_geometry_pb.Vec3): BodyExternalForceParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BodyExternalForceParams.AsObject;
    static toObject(includeInstance: boolean, msg: BodyExternalForceParams): BodyExternalForceParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BodyExternalForceParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BodyExternalForceParams;
    static deserializeBinaryFromReader(message: BodyExternalForceParams, reader: jspb.BinaryReader): BodyExternalForceParams;
}

export namespace BodyExternalForceParams {
    export type AsObject = {
        externalForceIndicator: BodyExternalForceParams.ExternalForceIndicator,
        frameName: string,
        externalForceOverride?: bosdyn_api_geometry_pb.Vec3.AsObject,
    }

    export enum ExternalForceIndicator {
    EXTERNAL_FORCE_NONE = 0,
    EXTERNAL_FORCE_USE_ESTIMATE = 1,
    EXTERNAL_FORCE_USE_OVERRIDE = 2,
    }

}

export enum LocomotionHint {
    HINT_UNKNOWN = 0,
    HINT_AUTO = 1,
    HINT_TROT = 2,
    HINT_SPEED_SELECT_TROT = 3,
    HINT_CRAWL = 4,
    HINT_SPEED_SELECT_CRAWL = 10,
    HINT_AMBLE = 5,
    HINT_SPEED_SELECT_AMBLE = 6,
    HINT_JOG = 7,
    HINT_HOP = 8,
    HINT_AUTO_TROT = 3,
    HINT_AUTO_AMBLE = 6,
}

export enum SwingHeight {
    SWING_HEIGHT_UNKNOWN = 0,
    SWING_HEIGHT_LOW = 1,
    SWING_HEIGHT_MEDIUM = 2,
    SWING_HEIGHT_HIGH = 3,
    SWING_HEIGHT_AUTO = 4,
}
