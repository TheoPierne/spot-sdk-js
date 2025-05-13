// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/graph_nav.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_basic_command_pb from "../../../bosdyn/api/basic_command_pb";
import * as bosdyn_api_data_chunk_pb from "../../../bosdyn/api/data_chunk_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_gps_gps_pb from "../../../bosdyn/api/gps/gps_pb";
import * as bosdyn_api_graph_nav_gps_pb from "../../../bosdyn/api/graph_nav/gps_pb";
import * as bosdyn_api_graph_nav_lost_detection_pb from "../../../bosdyn/api/graph_nav/lost_detection_pb";
import * as bosdyn_api_graph_nav_nav_pb from "../../../bosdyn/api/graph_nav/nav_pb";
import * as bosdyn_api_graph_nav_map_pb from "../../../bosdyn/api/graph_nav/map_pb";
import * as bosdyn_api_graph_nav_area_callback_pb from "../../../bosdyn/api/graph_nav/area_callback_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as bosdyn_api_license_pb from "../../../bosdyn/api/license_pb";
import * as bosdyn_api_robot_state_pb from "../../../bosdyn/api/robot_state_pb";
import * as bosdyn_api_service_fault_pb from "../../../bosdyn/api/service_fault_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class VisualRefinementOptions extends jspb.Message { 
    getVerifyRefinementQuality(): boolean;
    setVerifyRefinementQuality(value: boolean): VisualRefinementOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VisualRefinementOptions.AsObject;
    static toObject(includeInstance: boolean, msg: VisualRefinementOptions): VisualRefinementOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VisualRefinementOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VisualRefinementOptions;
    static deserializeBinaryFromReader(message: VisualRefinementOptions, reader: jspb.BinaryReader): VisualRefinementOptions;
}

export namespace VisualRefinementOptions {
    export type AsObject = {
        verifyRefinementQuality: boolean,
    }
}

export class SetLocalizationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetLocalizationRequest;

    hasInitialGuess(): boolean;
    clearInitialGuess(): void;
    getInitialGuess(): bosdyn_api_graph_nav_nav_pb.Localization | undefined;
    setInitialGuess(value?: bosdyn_api_graph_nav_nav_pb.Localization): SetLocalizationRequest;

    hasKoTformBody(): boolean;
    clearKoTformBody(): void;
    getKoTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setKoTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): SetLocalizationRequest;
    getMaxDistance(): number;
    setMaxDistance(value: number): SetLocalizationRequest;
    getMaxYaw(): number;
    setMaxYaw(value: number): SetLocalizationRequest;
    getFiducialInit(): SetLocalizationRequest.FiducialInit;
    setFiducialInit(value: SetLocalizationRequest.FiducialInit): SetLocalizationRequest;
    getUseFiducialId(): number;
    setUseFiducialId(value: number): SetLocalizationRequest;
    getDoAmbiguityCheck(): boolean;
    setDoAmbiguityCheck(value: boolean): SetLocalizationRequest;
    getRestrictFiducialDetectionsToTargetWaypoint(): boolean;
    setRestrictFiducialDetectionsToTargetWaypoint(value: boolean): SetLocalizationRequest;

    hasRefineFiducialResultWithIcp(): boolean;
    clearRefineFiducialResultWithIcp(): void;
    getRefineFiducialResultWithIcp(): boolean;
    setRefineFiducialResultWithIcp(value: boolean): SetLocalizationRequest;

    hasRefineWithVisualFeatures(): boolean;
    clearRefineWithVisualFeatures(): void;
    getRefineWithVisualFeatures(): VisualRefinementOptions | undefined;
    setRefineWithVisualFeatures(value?: VisualRefinementOptions): SetLocalizationRequest;

    getRefinementCase(): SetLocalizationRequest.RefinementCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetLocalizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetLocalizationRequest): SetLocalizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetLocalizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetLocalizationRequest;
    static deserializeBinaryFromReader(message: SetLocalizationRequest, reader: jspb.BinaryReader): SetLocalizationRequest;
}

export namespace SetLocalizationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        initialGuess?: bosdyn_api_graph_nav_nav_pb.Localization.AsObject,
        koTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        maxDistance: number,
        maxYaw: number,
        fiducialInit: SetLocalizationRequest.FiducialInit,
        useFiducialId: number,
        doAmbiguityCheck: boolean,
        restrictFiducialDetectionsToTargetWaypoint: boolean,
        refineFiducialResultWithIcp: boolean,
        refineWithVisualFeatures?: VisualRefinementOptions.AsObject,
    }

    export enum FiducialInit {
    FIDUCIAL_INIT_UNKNOWN = 0,
    FIDUCIAL_INIT_NO_FIDUCIAL = 1,
    FIDUCIAL_INIT_NEAREST = 2,
    FIDUCIAL_INIT_NEAREST_AT_TARGET = 3,
    FIDUCIAL_INIT_SPECIFIC = 4,
    }


    export enum RefinementCase {
        REFINEMENT_NOT_SET = 0,
        REFINE_FIDUCIAL_RESULT_WITH_ICP = 9,
        REFINE_WITH_VISUAL_FEATURES = 12,
    }

}

export class SensorCompatibilityStatus extends jspb.Message { 
    getMapHasLidarData(): boolean;
    setMapHasLidarData(value: boolean): SensorCompatibilityStatus;
    getRobotConfiguredForLidar(): boolean;
    setRobotConfiguredForLidar(value: boolean): SensorCompatibilityStatus;
    getMapHasGpsData(): boolean;
    setMapHasGpsData(value: boolean): SensorCompatibilityStatus;
    getRobotConfiguredForGps(): boolean;
    setRobotConfiguredForGps(value: boolean): SensorCompatibilityStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SensorCompatibilityStatus.AsObject;
    static toObject(includeInstance: boolean, msg: SensorCompatibilityStatus): SensorCompatibilityStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SensorCompatibilityStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SensorCompatibilityStatus;
    static deserializeBinaryFromReader(message: SensorCompatibilityStatus, reader: jspb.BinaryReader): SensorCompatibilityStatus;
}

export namespace SensorCompatibilityStatus {
    export type AsObject = {
        mapHasLidarData: boolean,
        robotConfiguredForLidar: boolean,
        mapHasGpsData: boolean,
        robotConfiguredForGps: boolean,
    }
}

export class SetLocalizationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetLocalizationResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): SetLocalizationResponse;
    getStatus(): SetLocalizationResponse.Status;
    setStatus(value: SetLocalizationResponse.Status): SetLocalizationResponse;
    getErrorReport(): string;
    setErrorReport(value: string): SetLocalizationResponse;

    hasLocalization(): boolean;
    clearLocalization(): void;
    getLocalization(): bosdyn_api_graph_nav_nav_pb.Localization | undefined;
    setLocalization(value?: bosdyn_api_graph_nav_nav_pb.Localization): SetLocalizationResponse;

    hasSuspectedAmbiguity(): boolean;
    clearSuspectedAmbiguity(): void;
    getSuspectedAmbiguity(): SetLocalizationResponse.SuspectedAmbiguity | undefined;
    setSuspectedAmbiguity(value?: SetLocalizationResponse.SuspectedAmbiguity): SetLocalizationResponse;

    hasImpairedState(): boolean;
    clearImpairedState(): void;
    getImpairedState(): bosdyn_api_robot_state_pb.RobotImpairedState | undefined;
    setImpairedState(value?: bosdyn_api_robot_state_pb.RobotImpairedState): SetLocalizationResponse;

    hasSensorStatus(): boolean;
    clearSensorStatus(): void;
    getSensorStatus(): SensorCompatibilityStatus | undefined;
    setSensorStatus(value?: SensorCompatibilityStatus): SetLocalizationResponse;
    getQualityCheckResult(): SetLocalizationResponse.QualityCheckResult;
    setQualityCheckResult(value: SetLocalizationResponse.QualityCheckResult): SetLocalizationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetLocalizationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetLocalizationResponse): SetLocalizationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetLocalizationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetLocalizationResponse;
    static deserializeBinaryFromReader(message: SetLocalizationResponse, reader: jspb.BinaryReader): SetLocalizationResponse;
}

export namespace SetLocalizationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: SetLocalizationResponse.Status,
        errorReport: string,
        localization?: bosdyn_api_graph_nav_nav_pb.Localization.AsObject,
        suspectedAmbiguity?: SetLocalizationResponse.SuspectedAmbiguity.AsObject,
        impairedState?: bosdyn_api_robot_state_pb.RobotImpairedState.AsObject,
        sensorStatus?: SensorCompatibilityStatus.AsObject,
        qualityCheckResult: SetLocalizationResponse.QualityCheckResult,
    }


    export class SuspectedAmbiguity extends jspb.Message { 

        hasAlternateRobotTformWaypoint(): boolean;
        clearAlternateRobotTformWaypoint(): void;
        getAlternateRobotTformWaypoint(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setAlternateRobotTformWaypoint(value?: bosdyn_api_geometry_pb.SE3Pose): SuspectedAmbiguity;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SuspectedAmbiguity.AsObject;
        static toObject(includeInstance: boolean, msg: SuspectedAmbiguity): SuspectedAmbiguity.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SuspectedAmbiguity, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SuspectedAmbiguity;
        static deserializeBinaryFromReader(message: SuspectedAmbiguity, reader: jspb.BinaryReader): SuspectedAmbiguity;
    }

    export namespace SuspectedAmbiguity {
        export type AsObject = {
            alternateRobotTformWaypoint?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        }
    }


    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ROBOT_IMPAIRED = 2,
    STATUS_UNKNOWN_WAYPOINT = 3,
    STATUS_ABORTED = 4,
    STATUS_FAILED = 5,
    STATUS_FIDUCIAL_TOO_FAR_AWAY = 6,
    STATUS_FIDUCIAL_TOO_OLD = 7,
    STATUS_NO_MATCHING_FIDUCIAL = 8,
    STATUS_FIDUCIAL_POSE_UNCERTAIN = 9,
    STATUS_INCOMPATIBLE_SENSORS = 10,
    STATUS_VISUAL_ALIGNMENT_FAILED = 11,
    STATUS_NO_MAP_LOADED = 12,
    }

    export enum QualityCheckResult {
    QUALITY_CHECK_UNKNOWN = 0,
    QUALITY_CHECK_SUCCESS = 1,
    QUALITY_CHECK_POOR_POINT_CLOUD_MATCH = 2,
    QUALITY_CHECK_POOR_GRAVITY_ALIGNMENT = 3,
    QUALITY_CHECK_SKIPPED = 4,
    QUALITY_CHECK_BAD_HEIGHT = 5,
    }

}

export class RouteGenParams extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteGenParams.AsObject;
    static toObject(includeInstance: boolean, msg: RouteGenParams): RouteGenParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteGenParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteGenParams;
    static deserializeBinaryFromReader(message: RouteGenParams, reader: jspb.BinaryReader): RouteGenParams;
}

export namespace RouteGenParams {
    export type AsObject = {
    }
}

export class TravelParams extends jspb.Message { 

    hasMaxDistance(): boolean;
    clearMaxDistance(): void;
    getMaxDistance(): number;
    setMaxDistance(value: number): TravelParams;

    hasBoxRegion(): boolean;
    clearBoxRegion(): void;
    getBoxRegion(): bosdyn_api_geometry_pb.OrientedBox2 | undefined;
    setBoxRegion(value?: bosdyn_api_geometry_pb.OrientedBox2): TravelParams;
    getMaxYaw(): number;
    setMaxYaw(value: number): TravelParams;

    hasVelocityLimit(): boolean;
    clearVelocityLimit(): void;
    getVelocityLimit(): bosdyn_api_geometry_pb.SE2VelocityLimit | undefined;
    setVelocityLimit(value?: bosdyn_api_geometry_pb.SE2VelocityLimit): TravelParams;
    getIgnoreFinalYaw(): boolean;
    setIgnoreFinalYaw(value: boolean): TravelParams;
    getMaxCorridorDistance(): number;
    setMaxCorridorDistance(value: number): TravelParams;
    getFeatureQualityTolerance(): TravelParams.FeatureQualityTolerance;
    setFeatureQualityTolerance(value: TravelParams.FeatureQualityTolerance): TravelParams;
    getDisableDirectedExploration(): boolean;
    setDisableDirectedExploration(value: boolean): TravelParams;
    getDisableAlternateRouteFinding(): boolean;
    setDisableAlternateRouteFinding(value: boolean): TravelParams;
    getPathFollowingMode(): bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode;
    setPathFollowingMode(value: bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode): TravelParams;

    hasBlockedPathWaitTime(): boolean;
    clearBlockedPathWaitTime(): void;
    getBlockedPathWaitTime(): google_protobuf_duration_pb.Duration | undefined;
    setBlockedPathWaitTime(value?: google_protobuf_duration_pb.Duration): TravelParams;
    getGroundClutterMode(): bosdyn_api_graph_nav_map_pb.Edge.Annotations.GroundClutterAvoidanceMode;
    setGroundClutterMode(value: bosdyn_api_graph_nav_map_pb.Edge.Annotations.GroundClutterAvoidanceMode): TravelParams;
    getLostDetectorStrictness(): bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness;
    setLostDetectorStrictness(value: bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness): TravelParams;
    getPlannerMode(): TravelParams.PathPlannerMode;
    setPlannerMode(value: TravelParams.PathPlannerMode): TravelParams;

    getCartesianDistanceParametersCase(): TravelParams.CartesianDistanceParametersCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TravelParams.AsObject;
    static toObject(includeInstance: boolean, msg: TravelParams): TravelParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TravelParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TravelParams;
    static deserializeBinaryFromReader(message: TravelParams, reader: jspb.BinaryReader): TravelParams;
}

export namespace TravelParams {
    export type AsObject = {
        maxDistance: number,
        boxRegion?: bosdyn_api_geometry_pb.OrientedBox2.AsObject,
        maxYaw: number,
        velocityLimit?: bosdyn_api_geometry_pb.SE2VelocityLimit.AsObject,
        ignoreFinalYaw: boolean,
        maxCorridorDistance: number,
        featureQualityTolerance: TravelParams.FeatureQualityTolerance,
        disableDirectedExploration: boolean,
        disableAlternateRouteFinding: boolean,
        pathFollowingMode: bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode,
        blockedPathWaitTime?: google_protobuf_duration_pb.Duration.AsObject,
        groundClutterMode: bosdyn_api_graph_nav_map_pb.Edge.Annotations.GroundClutterAvoidanceMode,
        lostDetectorStrictness: bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness,
        plannerMode: TravelParams.PathPlannerMode,
    }

    export enum FeatureQualityTolerance {
    TOLERANCE_UNKNOWN = 0,
    TOLERANCE_DEFAULT = 1,
    TOLERANCE_IGNORE_POOR_FEATURE_QUALITY = 2,
    }

    export enum PathPlannerMode {
    PLANNER_MODE_UNKNOWN = 0,
    PLANNER_MODE_DEFAULT = 1,
    PLANNER_MODE_SHORT_RANGE = 2,
    PLANNER_MODE_LONG_RANGE = 3,
    PLANNER_MODE_LONG_RANGE_LIVE_ONLY = 4,
    }


    export enum CartesianDistanceParametersCase {
        CARTESIAN_DISTANCE_PARAMETERS_NOT_SET = 0,
        MAX_DISTANCE = 1,
        BOX_REGION = 15,
    }

}

export class ModifyNavigationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ModifyNavigationResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): ModifyNavigationResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    getStatus(): ModifyNavigationResponse.Status;
    setStatus(value: ModifyNavigationResponse.Status): ModifyNavigationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyNavigationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyNavigationResponse): ModifyNavigationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyNavigationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyNavigationResponse;
    static deserializeBinaryFromReader(message: ModifyNavigationResponse, reader: jspb.BinaryReader): ModifyNavigationResponse;
}

export namespace ModifyNavigationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        status: ModifyNavigationResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_UNRECOGNIZED_COMMAND = 2,
    }

}

export class NavigateToRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): NavigateToRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): NavigateToRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;
    getDestinationWaypointId(): string;
    setDestinationWaypointId(value: string): NavigateToRequest;

    hasRouteParams(): boolean;
    clearRouteParams(): void;
    getRouteParams(): RouteGenParams | undefined;
    setRouteParams(value?: RouteGenParams): NavigateToRequest;

    hasTravelParams(): boolean;
    clearTravelParams(): void;
    getTravelParams(): TravelParams | undefined;
    setTravelParams(value?: TravelParams): NavigateToRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): NavigateToRequest;
    getClockIdentifier(): string;
    setClockIdentifier(value: string): NavigateToRequest;

    hasDestinationWaypointTformBodyGoal(): boolean;
    clearDestinationWaypointTformBodyGoal(): void;
    getDestinationWaypointTformBodyGoal(): bosdyn_api_geometry_pb.SE2Pose | undefined;
    setDestinationWaypointTformBodyGoal(value?: bosdyn_api_geometry_pb.SE2Pose): NavigateToRequest;
    getCommandId(): number;
    setCommandId(value: number): NavigateToRequest;
    getRouteBlockedBehavior(): RouteFollowingParams.RouteBlockedBehavior;
    setRouteBlockedBehavior(value: RouteFollowingParams.RouteBlockedBehavior): NavigateToRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigateToRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NavigateToRequest): NavigateToRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigateToRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigateToRequest;
    static deserializeBinaryFromReader(message: NavigateToRequest, reader: jspb.BinaryReader): NavigateToRequest;
}

export namespace NavigateToRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        destinationWaypointId: string,
        routeParams?: RouteGenParams.AsObject,
        travelParams?: TravelParams.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clockIdentifier: string,
        destinationWaypointTformBodyGoal?: bosdyn_api_geometry_pb.SE2Pose.AsObject,
        commandId: number,
        routeBlockedBehavior: RouteFollowingParams.RouteBlockedBehavior,
    }
}

export class NavigateToResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): NavigateToResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): NavigateToResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    getStatus(): NavigateToResponse.Status;
    setStatus(value: NavigateToResponse.Status): NavigateToResponse;

    hasImpairedState(): boolean;
    clearImpairedState(): void;
    getImpairedState(): bosdyn_api_robot_state_pb.RobotImpairedState | undefined;
    setImpairedState(value?: bosdyn_api_robot_state_pb.RobotImpairedState): NavigateToResponse;
    getCommandId(): number;
    setCommandId(value: number): NavigateToResponse;
    clearErrorWaypointIdsList(): void;
    getErrorWaypointIdsList(): Array<string>;
    setErrorWaypointIdsList(value: Array<string>): NavigateToResponse;
    addErrorWaypointIds(value: string, index?: number): string;

    hasAreaCallbackError(): boolean;
    clearAreaCallbackError(): void;
    getAreaCallbackError(): AreaCallbackServiceError | undefined;
    setAreaCallbackError(value?: AreaCallbackServiceError): NavigateToResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigateToResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NavigateToResponse): NavigateToResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigateToResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigateToResponse;
    static deserializeBinaryFromReader(message: NavigateToResponse, reader: jspb.BinaryReader): NavigateToResponse;
}

export namespace NavigateToResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        status: NavigateToResponse.Status,
        impairedState?: bosdyn_api_robot_state_pb.RobotImpairedState.AsObject,
        commandId: number,
        errorWaypointIdsList: Array<string>,
        areaCallbackError?: AreaCallbackServiceError.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_TIMESYNC = 2,
    STATUS_EXPIRED = 3,
    STATUS_TOO_DISTANT = 4,
    STATUS_ROBOT_IMPAIRED = 5,
    STATUS_RECORDING = 6,
    STATUS_UNKNOWN_WAYPOINT = 7,
    STATUS_NO_PATH = 8,
    STATUS_FEATURE_DESERT = 10,
    STATUS_LOST = 11,
    STATUS_NOT_LOCALIZED_TO_MAP = 13,
    STATUS_COULD_NOT_UPDATE_ROUTE = 12,
    STATUS_STUCK = 14,
    STATUS_UNRECOGNIZED_COMMAND = 15,
    STATUS_AREA_CALLBACK_ERROR = 16,
    }

}

export class RouteFollowingParams extends jspb.Message { 
    getNewCmdBehavior(): RouteFollowingParams.StartRouteBehavior;
    setNewCmdBehavior(value: RouteFollowingParams.StartRouteBehavior): RouteFollowingParams;
    getExistingCmdBehavior(): RouteFollowingParams.ResumeBehavior;
    setExistingCmdBehavior(value: RouteFollowingParams.ResumeBehavior): RouteFollowingParams;
    getRouteBlockedBehavior(): RouteFollowingParams.RouteBlockedBehavior;
    setRouteBlockedBehavior(value: RouteFollowingParams.RouteBlockedBehavior): RouteFollowingParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteFollowingParams.AsObject;
    static toObject(includeInstance: boolean, msg: RouteFollowingParams): RouteFollowingParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteFollowingParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteFollowingParams;
    static deserializeBinaryFromReader(message: RouteFollowingParams, reader: jspb.BinaryReader): RouteFollowingParams;
}

export namespace RouteFollowingParams {
    export type AsObject = {
        newCmdBehavior: RouteFollowingParams.StartRouteBehavior,
        existingCmdBehavior: RouteFollowingParams.ResumeBehavior,
        routeBlockedBehavior: RouteFollowingParams.RouteBlockedBehavior,
    }

    export enum StartRouteBehavior {
    START_UNKNOWN = 0,
    START_GOTO_START = 1,
    START_GOTO_ROUTE = 2,
    START_FAIL_WHEN_NOT_ON_ROUTE = 3,
    }

    export enum ResumeBehavior {
    RESUME_UNKNOWN = 0,
    RESUME_RETURN_TO_UNFINISHED_ROUTE = 1,
    RESUME_FAIL_WHEN_NOT_ON_ROUTE = 2,
    }

    export enum RouteBlockedBehavior {
    ROUTE_BLOCKED_UNKNOWN = 0,
    ROUTE_BLOCKED_REROUTE = 1,
    ROUTE_BLOCKED_FAIL = 2,
    }

}

export class NavigateRouteRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): NavigateRouteRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): NavigateRouteRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): bosdyn_api_graph_nav_nav_pb.Route | undefined;
    setRoute(value?: bosdyn_api_graph_nav_nav_pb.Route): NavigateRouteRequest;

    hasRouteFollowParams(): boolean;
    clearRouteFollowParams(): void;
    getRouteFollowParams(): RouteFollowingParams | undefined;
    setRouteFollowParams(value?: RouteFollowingParams): NavigateRouteRequest;

    hasTravelParams(): boolean;
    clearTravelParams(): void;
    getTravelParams(): TravelParams | undefined;
    setTravelParams(value?: TravelParams): NavigateRouteRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): NavigateRouteRequest;
    getClockIdentifier(): string;
    setClockIdentifier(value: string): NavigateRouteRequest;

    hasDestinationWaypointTformBodyGoal(): boolean;
    clearDestinationWaypointTformBodyGoal(): void;
    getDestinationWaypointTformBodyGoal(): bosdyn_api_geometry_pb.SE2Pose | undefined;
    setDestinationWaypointTformBodyGoal(value?: bosdyn_api_geometry_pb.SE2Pose): NavigateRouteRequest;
    getCommandId(): number;
    setCommandId(value: number): NavigateRouteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigateRouteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NavigateRouteRequest): NavigateRouteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigateRouteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigateRouteRequest;
    static deserializeBinaryFromReader(message: NavigateRouteRequest, reader: jspb.BinaryReader): NavigateRouteRequest;
}

export namespace NavigateRouteRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        route?: bosdyn_api_graph_nav_nav_pb.Route.AsObject,
        routeFollowParams?: RouteFollowingParams.AsObject,
        travelParams?: TravelParams.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clockIdentifier: string,
        destinationWaypointTformBodyGoal?: bosdyn_api_geometry_pb.SE2Pose.AsObject,
        commandId: number,
    }
}

export class NavigateRouteResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): NavigateRouteResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): NavigateRouteResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    getStatus(): NavigateRouteResponse.Status;
    setStatus(value: NavigateRouteResponse.Status): NavigateRouteResponse;

    hasImpairedState(): boolean;
    clearImpairedState(): void;
    getImpairedState(): bosdyn_api_robot_state_pb.RobotImpairedState | undefined;
    setImpairedState(value?: bosdyn_api_robot_state_pb.RobotImpairedState): NavigateRouteResponse;
    getCommandId(): number;
    setCommandId(value: number): NavigateRouteResponse;
    clearErrorWaypointIdsList(): void;
    getErrorWaypointIdsList(): Array<string>;
    setErrorWaypointIdsList(value: Array<string>): NavigateRouteResponse;
    addErrorWaypointIds(value: string, index?: number): string;
    clearErrorEdgeIdsList(): void;
    getErrorEdgeIdsList(): Array<bosdyn_api_graph_nav_map_pb.Edge.Id>;
    setErrorEdgeIdsList(value: Array<bosdyn_api_graph_nav_map_pb.Edge.Id>): NavigateRouteResponse;
    addErrorEdgeIds(value?: bosdyn_api_graph_nav_map_pb.Edge.Id, index?: number): bosdyn_api_graph_nav_map_pb.Edge.Id;

    hasAreaCallbackError(): boolean;
    clearAreaCallbackError(): void;
    getAreaCallbackError(): AreaCallbackServiceError | undefined;
    setAreaCallbackError(value?: AreaCallbackServiceError): NavigateRouteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigateRouteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NavigateRouteResponse): NavigateRouteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigateRouteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigateRouteResponse;
    static deserializeBinaryFromReader(message: NavigateRouteResponse, reader: jspb.BinaryReader): NavigateRouteResponse;
}

export namespace NavigateRouteResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        status: NavigateRouteResponse.Status,
        impairedState?: bosdyn_api_robot_state_pb.RobotImpairedState.AsObject,
        commandId: number,
        errorWaypointIdsList: Array<string>,
        errorEdgeIdsList: Array<bosdyn_api_graph_nav_map_pb.Edge.Id.AsObject>,
        areaCallbackError?: AreaCallbackServiceError.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_TIMESYNC = 2,
    STATUS_EXPIRED = 3,
    STATUS_TOO_DISTANT = 4,
    STATUS_ROBOT_IMPAIRED = 5,
    STATUS_RECORDING = 6,
    STATUS_UNKNOWN_ROUTE_ELEMENTS = 8,
    STATUS_INVALID_EDGE = 9,
    STATUS_NO_PATH = 20,
    STATUS_CONSTRAINT_FAULT = 11,
    STATUS_FEATURE_DESERT = 13,
    STATUS_LOST = 14,
    STATUS_NOT_LOCALIZED_TO_ROUTE = 16,
    STATUS_NOT_LOCALIZED_TO_MAP = 19,
    STATUS_COULD_NOT_UPDATE_ROUTE = 15,
    STATUS_STUCK = 17,
    STATUS_UNRECOGNIZED_COMMAND = 18,
    STATUS_AREA_CALLBACK_ERROR = 21,
    }

}

export class GPSNavigationParams extends jspb.Message { 

    hasGoalLlh(): boolean;
    clearGoalLlh(): void;
    getGoalLlh(): bosdyn_api_gps_gps_pb.LLH | undefined;
    setGoalLlh(value?: bosdyn_api_gps_gps_pb.LLH): GPSNavigationParams;

    hasGoalYaw(): boolean;
    clearGoalYaw(): void;
    getGoalYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGoalYaw(value?: google_protobuf_wrappers_pb.DoubleValue): GPSNavigationParams;

    hasMaxDistanceFromMap(): boolean;
    clearMaxDistanceFromMap(): void;
    getMaxDistanceFromMap(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMaxDistanceFromMap(value?: google_protobuf_wrappers_pb.DoubleValue): GPSNavigationParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GPSNavigationParams.AsObject;
    static toObject(includeInstance: boolean, msg: GPSNavigationParams): GPSNavigationParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GPSNavigationParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GPSNavigationParams;
    static deserializeBinaryFromReader(message: GPSNavigationParams, reader: jspb.BinaryReader): GPSNavigationParams;
}

export namespace GPSNavigationParams {
    export type AsObject = {
        goalLlh?: bosdyn_api_gps_gps_pb.LLH.AsObject,
        goalYaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        maxDistanceFromMap?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class NavigateToAnchorRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): NavigateToAnchorRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): NavigateToAnchorRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

    hasSeedTformGoal(): boolean;
    clearSeedTformGoal(): void;
    getSeedTformGoal(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setSeedTformGoal(value?: bosdyn_api_geometry_pb.SE3Pose): NavigateToAnchorRequest;

    hasGpsNavigationParams(): boolean;
    clearGpsNavigationParams(): void;
    getGpsNavigationParams(): GPSNavigationParams | undefined;
    setGpsNavigationParams(value?: GPSNavigationParams): NavigateToAnchorRequest;

    hasGoalWaypointRtSeedEwrtSeedTolerance(): boolean;
    clearGoalWaypointRtSeedEwrtSeedTolerance(): void;
    getGoalWaypointRtSeedEwrtSeedTolerance(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setGoalWaypointRtSeedEwrtSeedTolerance(value?: bosdyn_api_geometry_pb.Vec3): NavigateToAnchorRequest;

    hasRouteParams(): boolean;
    clearRouteParams(): void;
    getRouteParams(): RouteGenParams | undefined;
    setRouteParams(value?: RouteGenParams): NavigateToAnchorRequest;

    hasTravelParams(): boolean;
    clearTravelParams(): void;
    getTravelParams(): TravelParams | undefined;
    setTravelParams(value?: TravelParams): NavigateToAnchorRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): NavigateToAnchorRequest;
    getClockIdentifier(): string;
    setClockIdentifier(value: string): NavigateToAnchorRequest;
    getRouteBlockedBehavior(): RouteFollowingParams.RouteBlockedBehavior;
    setRouteBlockedBehavior(value: RouteFollowingParams.RouteBlockedBehavior): NavigateToAnchorRequest;
    getCommandId(): number;
    setCommandId(value: number): NavigateToAnchorRequest;

    getGoalCase(): NavigateToAnchorRequest.GoalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigateToAnchorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NavigateToAnchorRequest): NavigateToAnchorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigateToAnchorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigateToAnchorRequest;
    static deserializeBinaryFromReader(message: NavigateToAnchorRequest, reader: jspb.BinaryReader): NavigateToAnchorRequest;
}

export namespace NavigateToAnchorRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        seedTformGoal?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        gpsNavigationParams?: GPSNavigationParams.AsObject,
        goalWaypointRtSeedEwrtSeedTolerance?: bosdyn_api_geometry_pb.Vec3.AsObject,
        routeParams?: RouteGenParams.AsObject,
        travelParams?: TravelParams.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clockIdentifier: string,
        routeBlockedBehavior: RouteFollowingParams.RouteBlockedBehavior,
        commandId: number,
    }

    export enum GoalCase {
        GOAL_NOT_SET = 0,
        SEED_TFORM_GOAL = 3,
        GPS_NAVIGATION_PARAMS = 11,
    }

}

export class NavigateToAnchorResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): NavigateToAnchorResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): NavigateToAnchorResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    getStatus(): NavigateToAnchorResponse.Status;
    setStatus(value: NavigateToAnchorResponse.Status): NavigateToAnchorResponse;

    hasImpairedState(): boolean;
    clearImpairedState(): void;
    getImpairedState(): bosdyn_api_robot_state_pb.RobotImpairedState | undefined;
    setImpairedState(value?: bosdyn_api_robot_state_pb.RobotImpairedState): NavigateToAnchorResponse;
    getCommandId(): number;
    setCommandId(value: number): NavigateToAnchorResponse;
    clearErrorWaypointIdsList(): void;
    getErrorWaypointIdsList(): Array<string>;
    setErrorWaypointIdsList(value: Array<string>): NavigateToAnchorResponse;
    addErrorWaypointIds(value: string, index?: number): string;

    hasAreaCallbackError(): boolean;
    clearAreaCallbackError(): void;
    getAreaCallbackError(): AreaCallbackServiceError | undefined;
    setAreaCallbackError(value?: AreaCallbackServiceError): NavigateToAnchorResponse;
    getGpsStatus(): NavigateToAnchorResponse.GPSStatus;
    setGpsStatus(value: NavigateToAnchorResponse.GPSStatus): NavigateToAnchorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigateToAnchorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NavigateToAnchorResponse): NavigateToAnchorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigateToAnchorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigateToAnchorResponse;
    static deserializeBinaryFromReader(message: NavigateToAnchorResponse, reader: jspb.BinaryReader): NavigateToAnchorResponse;
}

export namespace NavigateToAnchorResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        status: NavigateToAnchorResponse.Status,
        impairedState?: bosdyn_api_robot_state_pb.RobotImpairedState.AsObject,
        commandId: number,
        errorWaypointIdsList: Array<string>,
        areaCallbackError?: AreaCallbackServiceError.AsObject,
        gpsStatus: NavigateToAnchorResponse.GPSStatus,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NO_TIMESYNC = 2,
    STATUS_EXPIRED = 3,
    STATUS_TOO_DISTANT = 4,
    STATUS_ROBOT_IMPAIRED = 5,
    STATUS_RECORDING = 6,
    STATUS_NO_ANCHORING = 7,
    STATUS_NO_PATH = 8,
    STATUS_FEATURE_DESERT = 10,
    STATUS_LOST = 11,
    STATUS_NOT_LOCALIZED_TO_MAP = 13,
    STATUS_COULD_NOT_UPDATE_ROUTE = 12,
    STATUS_STUCK = 14,
    STATUS_UNRECOGNIZED_COMMAND = 15,
    STATUS_INVALID_POSE = 16,
    STATUS_AREA_CALLBACK_ERROR = 17,
    STATUS_INVALID_GPS_COMMAND = 18,
    }

    export enum GPSStatus {
    GPS_STATUS_UNKNOWN = 0,
    GPS_STATUS_OK = 1,
    GPS_STATUS_NO_COORDS_IN_MAP = 2,
    GPS_STATUS_TOO_FAR_FROM_MAP = 3,
    }

}

export class NavigationFeedbackRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): NavigationFeedbackRequest;
    getCommandId(): number;
    setCommandId(value: number): NavigationFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigationFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NavigationFeedbackRequest): NavigationFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigationFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigationFeedbackRequest;
    static deserializeBinaryFromReader(message: NavigationFeedbackRequest, reader: jspb.BinaryReader): NavigationFeedbackRequest;
}

export namespace NavigationFeedbackRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        commandId: number,
    }
}

export class NavigationFeedbackResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): NavigationFeedbackResponse;
    getStatus(): NavigationFeedbackResponse.Status;
    setStatus(value: NavigationFeedbackResponse.Status): NavigationFeedbackResponse;

    hasImpairedState(): boolean;
    clearImpairedState(): void;
    getImpairedState(): bosdyn_api_robot_state_pb.RobotImpairedState | undefined;
    setImpairedState(value?: bosdyn_api_robot_state_pb.RobotImpairedState): NavigationFeedbackResponse;

    getAreaCallbackErrorsMap(): jspb.Map<string, bosdyn_api_graph_nav_area_callback_pb.AreaCallbackError>;
    clearAreaCallbackErrorsMap(): void;

    hasRemainingRoute(): boolean;
    clearRemainingRoute(): void;
    getRemainingRoute(): bosdyn_api_graph_nav_nav_pb.Route | undefined;
    setRemainingRoute(value?: bosdyn_api_graph_nav_nav_pb.Route): NavigationFeedbackResponse;

    hasCompletedRoute(): boolean;
    clearCompletedRoute(): void;
    getCompletedRoute(): bosdyn_api_graph_nav_nav_pb.CompletedRoute | undefined;
    setCompletedRoute(value?: bosdyn_api_graph_nav_nav_pb.CompletedRoute): NavigationFeedbackResponse;
    getRemainingRouteLength(): number;
    setRemainingRouteLength(value: number): NavigationFeedbackResponse;
    getCommandId(): number;
    setCommandId(value: number): NavigationFeedbackResponse;

    hasLastKoTformGoal(): boolean;
    clearLastKoTformGoal(): void;
    getLastKoTformGoal(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setLastKoTformGoal(value?: bosdyn_api_geometry_pb.SE3Pose): NavigationFeedbackResponse;
    getBodyMovementStatus(): bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Feedback.BodyMovementStatus;
    setBodyMovementStatus(value: bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Feedback.BodyMovementStatus): NavigationFeedbackResponse;
    getPathFollowingMode(): bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode;
    setPathFollowingMode(value: bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode): NavigationFeedbackResponse;

    getActiveRegionInformationMap(): jspb.Map<string, NavigationFeedbackResponse.ActiveRegionInformation>;
    clearActiveRegionInformationMap(): void;
    getRouteFollowingStatus(): NavigationFeedbackResponse.RouteFollowingStatus;
    setRouteFollowingStatus(value: NavigationFeedbackResponse.RouteFollowingStatus): NavigationFeedbackResponse;
    getBlockageStatus(): NavigationFeedbackResponse.BlockageStatus;
    setBlockageStatus(value: NavigationFeedbackResponse.BlockageStatus): NavigationFeedbackResponse;
    getStuckReason(): NavigationFeedbackResponse.StuckReason;
    setStuckReason(value: NavigationFeedbackResponse.StuckReason): NavigationFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NavigationFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NavigationFeedbackResponse): NavigationFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NavigationFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NavigationFeedbackResponse;
    static deserializeBinaryFromReader(message: NavigationFeedbackResponse, reader: jspb.BinaryReader): NavigationFeedbackResponse;
}

export namespace NavigationFeedbackResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: NavigationFeedbackResponse.Status,
        impairedState?: bosdyn_api_robot_state_pb.RobotImpairedState.AsObject,

        areaCallbackErrorsMap: Array<[string, bosdyn_api_graph_nav_area_callback_pb.AreaCallbackError.AsObject]>,
        remainingRoute?: bosdyn_api_graph_nav_nav_pb.Route.AsObject,
        completedRoute?: bosdyn_api_graph_nav_nav_pb.CompletedRoute.AsObject,
        remainingRouteLength: number,
        commandId: number,
        lastKoTformGoal?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        bodyMovementStatus: bosdyn_api_basic_command_pb.SE2TrajectoryCommand.Feedback.BodyMovementStatus,
        pathFollowingMode: bosdyn_api_graph_nav_map_pb.Edge.Annotations.PathFollowingMode,

        activeRegionInformationMap: Array<[string, NavigationFeedbackResponse.ActiveRegionInformation.AsObject]>,
        routeFollowingStatus: NavigationFeedbackResponse.RouteFollowingStatus,
        blockageStatus: NavigationFeedbackResponse.BlockageStatus,
        stuckReason: NavigationFeedbackResponse.StuckReason,
    }


    export class ActiveRegionInformation extends jspb.Message { 
        getDescription(): string;
        setDescription(value: string): ActiveRegionInformation;
        getServiceName(): string;
        setServiceName(value: string): ActiveRegionInformation;
        getRegionStatus(): NavigationFeedbackResponse.ActiveRegionInformation.AreaCallbackStatus;
        setRegionStatus(value: NavigationFeedbackResponse.ActiveRegionInformation.AreaCallbackStatus): ActiveRegionInformation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ActiveRegionInformation.AsObject;
        static toObject(includeInstance: boolean, msg: ActiveRegionInformation): ActiveRegionInformation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ActiveRegionInformation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ActiveRegionInformation;
        static deserializeBinaryFromReader(message: ActiveRegionInformation, reader: jspb.BinaryReader): ActiveRegionInformation;
    }

    export namespace ActiveRegionInformation {
        export type AsObject = {
            description: string,
            serviceName: string,
            regionStatus: NavigationFeedbackResponse.ActiveRegionInformation.AreaCallbackStatus,
        }

        export enum AreaCallbackStatus {
    STATUS_UNKNOWN = 0,
    STATUS_NAVIGATING = 1,
    STATUS_WAITING = 2,
    STATUS_CALLBACK_IN_CONTROL = 3,
        }

    }


    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_FOLLOWING_ROUTE = 1,
    STATUS_REACHED_GOAL = 2,
    STATUS_NO_ROUTE = 3,
    STATUS_NO_LOCALIZATION = 4,
    STATUS_LOST = 5,
    STATUS_STUCK = 6,
    STATUS_COMMAND_TIMED_OUT = 7,
    STATUS_ROBOT_IMPAIRED = 8,
    STATUS_CONSTRAINT_FAULT = 11,
    STATUS_COMMAND_OVERRIDDEN = 12,
    STATUS_NOT_LOCALIZED_TO_ROUTE = 13,
    STATUS_LEASE_ERROR = 14,
    STATUS_AREA_CALLBACK_ERROR = 15,
    }

    export enum RouteFollowingStatus {
    ROUTE_FOLLOWING_STATUS_UNKNOWN = 0,
    ROUTE_FOLLOWING_STATUS_FOLLOWING_ROUTE = 1,
    ROUTE_FOLLOWING_STATUS_RETURNING_TO_ROUTE = 2,
    ROUTE_FOLLOWING_STATUS_FOLLOWING_ALTERNATE_ROUTE = 3,
    ROUTE_FOLLOWING_STATUS_EXPLORING = 4,
    }

    export enum BlockageStatus {
    BLOCKAGE_STATUS_UNKNOWN = 0,
    BLOCKAGE_STATUS_ROUTE_CLEAR = 1,
    BLOCKAGE_STATUS_ROUTE_BLOCKED_TEMPORARILY = 2,
    BLOCKAGE_STATUS_STUCK = 3,
    }

    export enum StuckReason {
    STUCK_REASON_UNKNOWN = 0,
    STUCK_REASON_OBSTACLE = 1,
    STUCK_REASON_AREA_CALLBACK_BLOCKED = 2,
    STUCK_REASON_AREA_CALLBACK_FAILED = 3,
    STUCK_REASON_GOAL_BLOCKED = 4,
    }

}

export class GetLocalizationStateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetLocalizationStateRequest;
    getWaypointId(): string;
    setWaypointId(value: string): GetLocalizationStateRequest;
    getRequestLivePointCloud(): boolean;
    setRequestLivePointCloud(value: boolean): GetLocalizationStateRequest;
    getRequestLiveImages(): boolean;
    setRequestLiveImages(value: boolean): GetLocalizationStateRequest;
    getRequestLiveTerrainMaps(): boolean;
    setRequestLiveTerrainMaps(value: boolean): GetLocalizationStateRequest;
    getRequestLiveWorldObjects(): boolean;
    setRequestLiveWorldObjects(value: boolean): GetLocalizationStateRequest;
    getRequestLiveRobotState(): boolean;
    setRequestLiveRobotState(value: boolean): GetLocalizationStateRequest;
    getCompressLivePointCloud(): boolean;
    setCompressLivePointCloud(value: boolean): GetLocalizationStateRequest;
    getRequestGpsState(): boolean;
    setRequestGpsState(value: boolean): GetLocalizationStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocalizationStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocalizationStateRequest): GetLocalizationStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocalizationStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocalizationStateRequest;
    static deserializeBinaryFromReader(message: GetLocalizationStateRequest, reader: jspb.BinaryReader): GetLocalizationStateRequest;
}

export namespace GetLocalizationStateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        waypointId: string,
        requestLivePointCloud: boolean,
        requestLiveImages: boolean,
        requestLiveTerrainMaps: boolean,
        requestLiveWorldObjects: boolean,
        requestLiveRobotState: boolean,
        compressLivePointCloud: boolean,
        requestGpsState: boolean,
    }
}

export class RemotePointCloudStatus extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): RemotePointCloudStatus;
    getExistsInDirectory(): boolean;
    setExistsInDirectory(value: boolean): RemotePointCloudStatus;
    getHasData(): boolean;
    setHasData(value: boolean): RemotePointCloudStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemotePointCloudStatus.AsObject;
    static toObject(includeInstance: boolean, msg: RemotePointCloudStatus): RemotePointCloudStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemotePointCloudStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemotePointCloudStatus;
    static deserializeBinaryFromReader(message: RemotePointCloudStatus, reader: jspb.BinaryReader): RemotePointCloudStatus;
}

export namespace RemotePointCloudStatus {
    export type AsObject = {
        serviceName: string,
        existsInDirectory: boolean,
        hasData: boolean,
    }
}

export class LostDetectorState extends jspb.Message { 
    getIsLost(): boolean;
    setIsLost(value: boolean): LostDetectorState;
    getTotalNumAcceptedLocalizations(): number;
    setTotalNumAcceptedLocalizations(value: number): LostDetectorState;
    getTotalNumRejectedLocalizations(): number;
    setTotalNumRejectedLocalizations(value: number): LostDetectorState;
    getNumRejectedLocalizationsSinceAccepted(): number;
    setNumRejectedLocalizationsSinceAccepted(value: number): LostDetectorState;
    getDistanceTraveledWithRejectedLocalization(): number;
    setDistanceTraveledWithRejectedLocalization(value: number): LostDetectorState;

    hasLastAcceptedLocalization(): boolean;
    clearLastAcceptedLocalization(): void;
    getLastAcceptedLocalization(): bosdyn_api_graph_nav_nav_pb.Localization | undefined;
    setLastAcceptedLocalization(value?: bosdyn_api_graph_nav_nav_pb.Localization): LostDetectorState;

    hasLastRejectedLocalization(): boolean;
    clearLastRejectedLocalization(): void;
    getLastRejectedLocalization(): bosdyn_api_graph_nav_nav_pb.Localization | undefined;
    setLastRejectedLocalization(value?: bosdyn_api_graph_nav_nav_pb.Localization): LostDetectorState;

    hasLastAcceptedStrictLocalization(): boolean;
    clearLastAcceptedStrictLocalization(): void;
    getLastAcceptedStrictLocalization(): bosdyn_api_graph_nav_nav_pb.Localization | undefined;
    setLastAcceptedStrictLocalization(value?: bosdyn_api_graph_nav_nav_pb.Localization): LostDetectorState;
    getNumConsecutiveBadEdges(): number;
    setNumConsecutiveBadEdges(value: number): LostDetectorState;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): LostDetectorState.Params | undefined;
    setParams(value?: LostDetectorState.Params): LostDetectorState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LostDetectorState.AsObject;
    static toObject(includeInstance: boolean, msg: LostDetectorState): LostDetectorState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LostDetectorState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LostDetectorState;
    static deserializeBinaryFromReader(message: LostDetectorState, reader: jspb.BinaryReader): LostDetectorState;
}

export namespace LostDetectorState {
    export type AsObject = {
        isLost: boolean,
        totalNumAcceptedLocalizations: number,
        totalNumRejectedLocalizations: number,
        numRejectedLocalizationsSinceAccepted: number,
        distanceTraveledWithRejectedLocalization: number,
        lastAcceptedLocalization?: bosdyn_api_graph_nav_nav_pb.Localization.AsObject,
        lastRejectedLocalization?: bosdyn_api_graph_nav_nav_pb.Localization.AsObject,
        lastAcceptedStrictLocalization?: bosdyn_api_graph_nav_nav_pb.Localization.AsObject,
        numConsecutiveBadEdges: number,
        params?: LostDetectorState.Params.AsObject,
    }


    export class Params extends jspb.Message { 
        getMaxTimeWithBadLocalization(): number;
        setMaxTimeWithBadLocalization(value: number): Params;
        getMaxDistanceWithBadLocalization(): number;
        setMaxDistanceWithBadLocalization(value: number): Params;
        getMaxNumEdgesWithBadLocalization(): number;
        setMaxNumEdgesWithBadLocalization(value: number): Params;
        getStrictness(): bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness;
        setStrictness(value: bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness): Params;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Params.AsObject;
        static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Params;
        static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
    }

    export namespace Params {
        export type AsObject = {
            maxTimeWithBadLocalization: number,
            maxDistanceWithBadLocalization: number,
            maxNumEdgesWithBadLocalization: number,
            strictness: bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness,
        }
    }

}

export class GetLocalizationStateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetLocalizationStateResponse;

    hasLocalization(): boolean;
    clearLocalization(): void;
    getLocalization(): bosdyn_api_graph_nav_nav_pb.Localization | undefined;
    setLocalization(value?: bosdyn_api_graph_nav_nav_pb.Localization): GetLocalizationStateResponse;

    hasRobotKinematics(): boolean;
    clearRobotKinematics(): void;
    getRobotKinematics(): bosdyn_api_robot_state_pb.KinematicState | undefined;
    setRobotKinematics(value?: bosdyn_api_robot_state_pb.KinematicState): GetLocalizationStateResponse;
    clearRemoteCloudStatusList(): void;
    getRemoteCloudStatusList(): Array<RemotePointCloudStatus>;
    setRemoteCloudStatusList(value: Array<RemotePointCloudStatus>): GetLocalizationStateResponse;
    addRemoteCloudStatus(value?: RemotePointCloudStatus, index?: number): RemotePointCloudStatus;

    hasLiveData(): boolean;
    clearLiveData(): void;
    getLiveData(): bosdyn_api_graph_nav_map_pb.WaypointSnapshot | undefined;
    setLiveData(value?: bosdyn_api_graph_nav_map_pb.WaypointSnapshot): GetLocalizationStateResponse;

    hasLostDetectorState(): boolean;
    clearLostDetectorState(): void;
    getLostDetectorState(): LostDetectorState | undefined;
    setLostDetectorState(value?: LostDetectorState): GetLocalizationStateResponse;

    hasGps(): boolean;
    clearGps(): void;
    getGps(): bosdyn_api_graph_nav_gps_pb.GPSLocalization | undefined;
    setGps(value?: bosdyn_api_graph_nav_gps_pb.GPSLocalization): GetLocalizationStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocalizationStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocalizationStateResponse): GetLocalizationStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocalizationStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocalizationStateResponse;
    static deserializeBinaryFromReader(message: GetLocalizationStateResponse, reader: jspb.BinaryReader): GetLocalizationStateResponse;
}

export namespace GetLocalizationStateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        localization?: bosdyn_api_graph_nav_nav_pb.Localization.AsObject,
        robotKinematics?: bosdyn_api_robot_state_pb.KinematicState.AsObject,
        remoteCloudStatusList: Array<RemotePointCloudStatus.AsObject>,
        liveData?: bosdyn_api_graph_nav_map_pb.WaypointSnapshot.AsObject,
        lostDetectorState?: LostDetectorState.AsObject,
        gps?: bosdyn_api_graph_nav_gps_pb.GPSLocalization.AsObject,
    }
}

export class ClearGraphRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ClearGraphRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): ClearGraphRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearGraphRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClearGraphRequest): ClearGraphRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearGraphRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearGraphRequest;
    static deserializeBinaryFromReader(message: ClearGraphRequest, reader: jspb.BinaryReader): ClearGraphRequest;
}

export namespace ClearGraphRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class ClearGraphResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ClearGraphResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): ClearGraphResponse;
    getStatus(): ClearGraphResponse.Status;
    setStatus(value: ClearGraphResponse.Status): ClearGraphResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearGraphResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClearGraphResponse): ClearGraphResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearGraphResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearGraphResponse;
    static deserializeBinaryFromReader(message: ClearGraphResponse, reader: jspb.BinaryReader): ClearGraphResponse;
}

export namespace ClearGraphResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: ClearGraphResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_RECORDING = 2,
    }

}

export class UploadGraphRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UploadGraphRequest;

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): bosdyn_api_graph_nav_map_pb.Graph | undefined;
    setGraph(value?: bosdyn_api_graph_nav_map_pb.Graph): UploadGraphRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): UploadGraphRequest;
    getGenerateNewAnchoring(): boolean;
    setGenerateNewAnchoring(value: boolean): UploadGraphRequest;
    getTreatValidationWarningsAsErrors(): boolean;
    setTreatValidationWarningsAsErrors(value: boolean): UploadGraphRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadGraphRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadGraphRequest): UploadGraphRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadGraphRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadGraphRequest;
    static deserializeBinaryFromReader(message: UploadGraphRequest, reader: jspb.BinaryReader): UploadGraphRequest;
}

export namespace UploadGraphRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        graph?: bosdyn_api_graph_nav_map_pb.Graph.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        generateNewAnchoring: boolean,
        treatValidationWarningsAsErrors: boolean,
    }
}

export class UploadGraphStreamingRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UploadGraphStreamingRequest;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): UploadGraphStreamingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadGraphStreamingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadGraphStreamingRequest): UploadGraphStreamingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadGraphStreamingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadGraphStreamingRequest;
    static deserializeBinaryFromReader(message: UploadGraphStreamingRequest, reader: jspb.BinaryReader): UploadGraphStreamingRequest;
}

export namespace UploadGraphStreamingRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }
}

export class UploadGraphResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UploadGraphResponse;
    getStatus(): UploadGraphResponse.Status;
    setStatus(value: UploadGraphResponse.Status): UploadGraphResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): UploadGraphResponse;
    clearLoadedWaypointSnapshotIdsList(): void;
    getLoadedWaypointSnapshotIdsList(): Array<string>;
    setLoadedWaypointSnapshotIdsList(value: Array<string>): UploadGraphResponse;
    addLoadedWaypointSnapshotIds(value: string, index?: number): string;
    clearUnknownWaypointSnapshotIdsList(): void;
    getUnknownWaypointSnapshotIdsList(): Array<string>;
    setUnknownWaypointSnapshotIdsList(value: Array<string>): UploadGraphResponse;
    addUnknownWaypointSnapshotIds(value: string, index?: number): string;
    clearLoadedEdgeSnapshotIdsList(): void;
    getLoadedEdgeSnapshotIdsList(): Array<string>;
    setLoadedEdgeSnapshotIdsList(value: Array<string>): UploadGraphResponse;
    addLoadedEdgeSnapshotIds(value: string, index?: number): string;
    clearUnknownEdgeSnapshotIdsList(): void;
    getUnknownEdgeSnapshotIdsList(): Array<string>;
    setUnknownEdgeSnapshotIdsList(value: Array<string>): UploadGraphResponse;
    addUnknownEdgeSnapshotIds(value: string, index?: number): string;
    getLicenseStatus(): bosdyn_api_license_pb.LicenseInfo.Status;
    setLicenseStatus(value: bosdyn_api_license_pb.LicenseInfo.Status): UploadGraphResponse;

    hasSensorStatus(): boolean;
    clearSensorStatus(): void;
    getSensorStatus(): SensorCompatibilityStatus | undefined;
    setSensorStatus(value?: SensorCompatibilityStatus): UploadGraphResponse;

    hasAreaCallbackError(): boolean;
    clearAreaCallbackError(): void;
    getAreaCallbackError(): AreaCallbackServiceError | undefined;
    setAreaCallbackError(value?: AreaCallbackServiceError): UploadGraphResponse;

    hasMapStats(): boolean;
    clearMapStats(): void;
    getMapStats(): bosdyn_api_graph_nav_map_pb.MapStats | undefined;
    setMapStats(value?: bosdyn_api_graph_nav_map_pb.MapStats): UploadGraphResponse;

    hasValidationStatus(): boolean;
    clearValidationStatus(): void;
    getValidationStatus(): UploadGraphResponse.ValidationStatus | undefined;
    setValidationStatus(value?: UploadGraphResponse.ValidationStatus): UploadGraphResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadGraphResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadGraphResponse): UploadGraphResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadGraphResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadGraphResponse;
    static deserializeBinaryFromReader(message: UploadGraphResponse, reader: jspb.BinaryReader): UploadGraphResponse;
}

export namespace UploadGraphResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: UploadGraphResponse.Status,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        loadedWaypointSnapshotIdsList: Array<string>,
        unknownWaypointSnapshotIdsList: Array<string>,
        loadedEdgeSnapshotIdsList: Array<string>,
        unknownEdgeSnapshotIdsList: Array<string>,
        licenseStatus: bosdyn_api_license_pb.LicenseInfo.Status,
        sensorStatus?: SensorCompatibilityStatus.AsObject,
        areaCallbackError?: AreaCallbackServiceError.AsObject,
        mapStats?: bosdyn_api_graph_nav_map_pb.MapStats.AsObject,
        validationStatus?: UploadGraphResponse.ValidationStatus.AsObject,
    }


    export class ValidationStatus extends jspb.Message { 
        clearMissingWaypointIdsInEdgesList(): void;
        getMissingWaypointIdsInEdgesList(): Array<string>;
        setMissingWaypointIdsInEdgesList(value: Array<string>): ValidationStatus;
        addMissingWaypointIdsInEdges(value: string, index?: number): string;
        clearMissingWaypointIdsInAnchorsList(): void;
        getMissingWaypointIdsInAnchorsList(): Array<string>;
        setMissingWaypointIdsInAnchorsList(value: Array<string>): ValidationStatus;
        addMissingWaypointIdsInAnchors(value: string, index?: number): string;
        clearEdgeIdsInvalidTransformList(): void;
        getEdgeIdsInvalidTransformList(): Array<bosdyn_api_graph_nav_map_pb.Edge.Id>;
        setEdgeIdsInvalidTransformList(value: Array<bosdyn_api_graph_nav_map_pb.Edge.Id>): ValidationStatus;
        addEdgeIdsInvalidTransform(value?: bosdyn_api_graph_nav_map_pb.Edge.Id, index?: number): bosdyn_api_graph_nav_map_pb.Edge.Id;
        clearWaypointAnchorsInvalidTransformList(): void;
        getWaypointAnchorsInvalidTransformList(): Array<string>;
        setWaypointAnchorsInvalidTransformList(value: Array<string>): ValidationStatus;
        addWaypointAnchorsInvalidTransform(value: string, index?: number): string;
        clearObjectAnchorsInvalidTransformList(): void;
        getObjectAnchorsInvalidTransformList(): Array<string>;
        setObjectAnchorsInvalidTransformList(value: Array<string>): ValidationStatus;
        addObjectAnchorsInvalidTransform(value: string, index?: number): string;
        clearDuplicateWaypointIdsList(): void;
        getDuplicateWaypointIdsList(): Array<string>;
        setDuplicateWaypointIdsList(value: Array<string>): ValidationStatus;
        addDuplicateWaypointIds(value: string, index?: number): string;
        clearDuplicateWaypointAnchorIdsList(): void;
        getDuplicateWaypointAnchorIdsList(): Array<string>;
        setDuplicateWaypointAnchorIdsList(value: Array<string>): ValidationStatus;
        addDuplicateWaypointAnchorIds(value: string, index?: number): string;
        clearDuplicateObjectAnchorIdsList(): void;
        getDuplicateObjectAnchorIdsList(): Array<string>;
        setDuplicateObjectAnchorIdsList(value: Array<string>): ValidationStatus;
        addDuplicateObjectAnchorIds(value: string, index?: number): string;
        clearDuplicateEdgeIdsList(): void;
        getDuplicateEdgeIdsList(): Array<bosdyn_api_graph_nav_map_pb.Edge.Id>;
        setDuplicateEdgeIdsList(value: Array<bosdyn_api_graph_nav_map_pb.Edge.Id>): ValidationStatus;
        addDuplicateEdgeIds(value?: bosdyn_api_graph_nav_map_pb.Edge.Id, index?: number): bosdyn_api_graph_nav_map_pb.Edge.Id;
        clearInvalidWaypointIdsSelfEdgesList(): void;
        getInvalidWaypointIdsSelfEdgesList(): Array<string>;
        setInvalidWaypointIdsSelfEdgesList(value: Array<string>): ValidationStatus;
        addInvalidWaypointIdsSelfEdges(value: string, index?: number): string;
        getHasEmptyWaypointIds(): boolean;
        setHasEmptyWaypointIds(value: boolean): ValidationStatus;
        getHasEmptyEdgeIds(): boolean;
        setHasEmptyEdgeIds(value: boolean): ValidationStatus;
        getHasEmptyWaypointAnchorIds(): boolean;
        setHasEmptyWaypointAnchorIds(value: boolean): ValidationStatus;
        getHasEmptyObjectAnchorIds(): boolean;
        setHasEmptyObjectAnchorIds(value: boolean): ValidationStatus;
        clearMalformedStaircaseEdgeIdsList(): void;
        getMalformedStaircaseEdgeIdsList(): Array<bosdyn_api_graph_nav_map_pb.Edge.Id>;
        setMalformedStaircaseEdgeIdsList(value: Array<bosdyn_api_graph_nav_map_pb.Edge.Id>): ValidationStatus;
        addMalformedStaircaseEdgeIds(value?: bosdyn_api_graph_nav_map_pb.Edge.Id, index?: number): bosdyn_api_graph_nav_map_pb.Edge.Id;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ValidationStatus.AsObject;
        static toObject(includeInstance: boolean, msg: ValidationStatus): ValidationStatus.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ValidationStatus, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ValidationStatus;
        static deserializeBinaryFromReader(message: ValidationStatus, reader: jspb.BinaryReader): ValidationStatus;
    }

    export namespace ValidationStatus {
        export type AsObject = {
            missingWaypointIdsInEdgesList: Array<string>,
            missingWaypointIdsInAnchorsList: Array<string>,
            edgeIdsInvalidTransformList: Array<bosdyn_api_graph_nav_map_pb.Edge.Id.AsObject>,
            waypointAnchorsInvalidTransformList: Array<string>,
            objectAnchorsInvalidTransformList: Array<string>,
            duplicateWaypointIdsList: Array<string>,
            duplicateWaypointAnchorIdsList: Array<string>,
            duplicateObjectAnchorIdsList: Array<string>,
            duplicateEdgeIdsList: Array<bosdyn_api_graph_nav_map_pb.Edge.Id.AsObject>,
            invalidWaypointIdsSelfEdgesList: Array<string>,
            hasEmptyWaypointIds: boolean,
            hasEmptyEdgeIds: boolean,
            hasEmptyWaypointAnchorIds: boolean,
            hasEmptyObjectAnchorIds: boolean,
            malformedStaircaseEdgeIdsList: Array<bosdyn_api_graph_nav_map_pb.Edge.Id.AsObject>,
        }
    }


    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_MAP_TOO_LARGE_LICENSE = 3,
    STATUS_INVALID_GRAPH = 4,
    STATUS_INCOMPATIBLE_SENSORS = 5,
    STATUS_AREA_CALLBACK_ERROR = 6,
    }

}

export class DownloadGraphRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DownloadGraphRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadGraphRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadGraphRequest): DownloadGraphRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadGraphRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadGraphRequest;
    static deserializeBinaryFromReader(message: DownloadGraphRequest, reader: jspb.BinaryReader): DownloadGraphRequest;
}

export namespace DownloadGraphRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class DownloadGraphResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DownloadGraphResponse;

    hasGraph(): boolean;
    clearGraph(): void;
    getGraph(): bosdyn_api_graph_nav_map_pb.Graph | undefined;
    setGraph(value?: bosdyn_api_graph_nav_map_pb.Graph): DownloadGraphResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadGraphResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadGraphResponse): DownloadGraphResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadGraphResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadGraphResponse;
    static deserializeBinaryFromReader(message: DownloadGraphResponse, reader: jspb.BinaryReader): DownloadGraphResponse;
}

export namespace DownloadGraphResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        graph?: bosdyn_api_graph_nav_map_pb.Graph.AsObject,
    }
}

export class DownloadGraphStreamingResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DownloadGraphStreamingResponse;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): DownloadGraphStreamingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadGraphStreamingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadGraphStreamingResponse): DownloadGraphStreamingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadGraphStreamingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadGraphStreamingResponse;
    static deserializeBinaryFromReader(message: DownloadGraphStreamingResponse, reader: jspb.BinaryReader): DownloadGraphStreamingResponse;
}

export namespace DownloadGraphStreamingResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }
}

export class UploadWaypointSnapshotRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UploadWaypointSnapshotRequest;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): UploadWaypointSnapshotRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): UploadWaypointSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadWaypointSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadWaypointSnapshotRequest): UploadWaypointSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadWaypointSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadWaypointSnapshotRequest;
    static deserializeBinaryFromReader(message: UploadWaypointSnapshotRequest, reader: jspb.BinaryReader): UploadWaypointSnapshotRequest;
}

export namespace UploadWaypointSnapshotRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class UploadWaypointSnapshotResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UploadWaypointSnapshotResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): UploadWaypointSnapshotResponse;
    getStatus(): UploadWaypointSnapshotResponse.Status;
    setStatus(value: UploadWaypointSnapshotResponse.Status): UploadWaypointSnapshotResponse;

    hasSensorStatus(): boolean;
    clearSensorStatus(): void;
    getSensorStatus(): SensorCompatibilityStatus | undefined;
    setSensorStatus(value?: SensorCompatibilityStatus): UploadWaypointSnapshotResponse;

    hasMapStats(): boolean;
    clearMapStats(): void;
    getMapStats(): bosdyn_api_graph_nav_map_pb.MapStats | undefined;
    setMapStats(value?: bosdyn_api_graph_nav_map_pb.MapStats): UploadWaypointSnapshotResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadWaypointSnapshotResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadWaypointSnapshotResponse): UploadWaypointSnapshotResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadWaypointSnapshotResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadWaypointSnapshotResponse;
    static deserializeBinaryFromReader(message: UploadWaypointSnapshotResponse, reader: jspb.BinaryReader): UploadWaypointSnapshotResponse;
}

export namespace UploadWaypointSnapshotResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: UploadWaypointSnapshotResponse.Status,
        sensorStatus?: SensorCompatibilityStatus.AsObject,
        mapStats?: bosdyn_api_graph_nav_map_pb.MapStats.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INCOMPATIBLE_SENSORS = 2,
    }

}

export class UploadEdgeSnapshotRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): UploadEdgeSnapshotRequest;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): UploadEdgeSnapshotRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): UploadEdgeSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadEdgeSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadEdgeSnapshotRequest): UploadEdgeSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadEdgeSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadEdgeSnapshotRequest;
    static deserializeBinaryFromReader(message: UploadEdgeSnapshotRequest, reader: jspb.BinaryReader): UploadEdgeSnapshotRequest;
}

export namespace UploadEdgeSnapshotRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class UploadEdgeSnapshotResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): UploadEdgeSnapshotResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): UploadEdgeSnapshotResponse;

    hasMapStats(): boolean;
    clearMapStats(): void;
    getMapStats(): bosdyn_api_graph_nav_map_pb.MapStats | undefined;
    setMapStats(value?: bosdyn_api_graph_nav_map_pb.MapStats): UploadEdgeSnapshotResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadEdgeSnapshotResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadEdgeSnapshotResponse): UploadEdgeSnapshotResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadEdgeSnapshotResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadEdgeSnapshotResponse;
    static deserializeBinaryFromReader(message: UploadEdgeSnapshotResponse, reader: jspb.BinaryReader): UploadEdgeSnapshotResponse;
}

export namespace UploadEdgeSnapshotResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        mapStats?: bosdyn_api_graph_nav_map_pb.MapStats.AsObject,
    }
}

export class DownloadWaypointSnapshotRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DownloadWaypointSnapshotRequest;
    getWaypointSnapshotId(): string;
    setWaypointSnapshotId(value: string): DownloadWaypointSnapshotRequest;
    getDownloadImages(): boolean;
    setDownloadImages(value: boolean): DownloadWaypointSnapshotRequest;
    getCompressPointCloud(): boolean;
    setCompressPointCloud(value: boolean): DownloadWaypointSnapshotRequest;
    getDoNotDownloadPointCloud(): boolean;
    setDoNotDownloadPointCloud(value: boolean): DownloadWaypointSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadWaypointSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadWaypointSnapshotRequest): DownloadWaypointSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadWaypointSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadWaypointSnapshotRequest;
    static deserializeBinaryFromReader(message: DownloadWaypointSnapshotRequest, reader: jspb.BinaryReader): DownloadWaypointSnapshotRequest;
}

export namespace DownloadWaypointSnapshotRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        waypointSnapshotId: string,
        downloadImages: boolean,
        compressPointCloud: boolean,
        doNotDownloadPointCloud: boolean,
    }
}

export class DownloadWaypointSnapshotResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DownloadWaypointSnapshotResponse;
    getStatus(): DownloadWaypointSnapshotResponse.Status;
    setStatus(value: DownloadWaypointSnapshotResponse.Status): DownloadWaypointSnapshotResponse;
    getWaypointSnapshotId(): string;
    setWaypointSnapshotId(value: string): DownloadWaypointSnapshotResponse;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): DownloadWaypointSnapshotResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadWaypointSnapshotResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadWaypointSnapshotResponse): DownloadWaypointSnapshotResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadWaypointSnapshotResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadWaypointSnapshotResponse;
    static deserializeBinaryFromReader(message: DownloadWaypointSnapshotResponse, reader: jspb.BinaryReader): DownloadWaypointSnapshotResponse;
}

export namespace DownloadWaypointSnapshotResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: DownloadWaypointSnapshotResponse.Status,
        waypointSnapshotId: string,
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_SNAPSHOT_DOES_NOT_EXIST = 2,
    }

}

export class DownloadEdgeSnapshotRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DownloadEdgeSnapshotRequest;
    getEdgeSnapshotId(): string;
    setEdgeSnapshotId(value: string): DownloadEdgeSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadEdgeSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadEdgeSnapshotRequest): DownloadEdgeSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadEdgeSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadEdgeSnapshotRequest;
    static deserializeBinaryFromReader(message: DownloadEdgeSnapshotRequest, reader: jspb.BinaryReader): DownloadEdgeSnapshotRequest;
}

export namespace DownloadEdgeSnapshotRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        edgeSnapshotId: string,
    }
}

export class DownloadEdgeSnapshotResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DownloadEdgeSnapshotResponse;
    getStatus(): DownloadEdgeSnapshotResponse.Status;
    setStatus(value: DownloadEdgeSnapshotResponse.Status): DownloadEdgeSnapshotResponse;
    getEdgeSnapshotId(): string;
    setEdgeSnapshotId(value: string): DownloadEdgeSnapshotResponse;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setChunk(value?: bosdyn_api_data_chunk_pb.DataChunk): DownloadEdgeSnapshotResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadEdgeSnapshotResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadEdgeSnapshotResponse): DownloadEdgeSnapshotResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadEdgeSnapshotResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadEdgeSnapshotResponse;
    static deserializeBinaryFromReader(message: DownloadEdgeSnapshotResponse, reader: jspb.BinaryReader): DownloadEdgeSnapshotResponse;
}

export namespace DownloadEdgeSnapshotResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: DownloadEdgeSnapshotResponse.Status,
        edgeSnapshotId: string,
        chunk?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_SNAPSHOT_DOES_NOT_EXIST = 2,
    }

}

export class AreaCallbackServiceError extends jspb.Message { 
    clearMissingServicesList(): void;
    getMissingServicesList(): Array<string>;
    setMissingServicesList(value: Array<string>): AreaCallbackServiceError;
    addMissingServices(value: string, index?: number): string;
    clearFaultedServicesList(): void;
    getFaultedServicesList(): Array<bosdyn_api_service_fault_pb.ServiceFault>;
    setFaultedServicesList(value: Array<bosdyn_api_service_fault_pb.ServiceFault>): AreaCallbackServiceError;
    addFaultedServices(value?: bosdyn_api_service_fault_pb.ServiceFault, index?: number): bosdyn_api_service_fault_pb.ServiceFault;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackServiceError.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackServiceError): AreaCallbackServiceError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackServiceError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackServiceError;
    static deserializeBinaryFromReader(message: AreaCallbackServiceError, reader: jspb.BinaryReader): AreaCallbackServiceError;
}

export namespace AreaCallbackServiceError {
    export type AsObject = {
        missingServicesList: Array<string>,
        faultedServicesList: Array<bosdyn_api_service_fault_pb.ServiceFault.AsObject>,
    }
}

export class ValidateGraphRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ValidateGraphRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateGraphRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateGraphRequest): ValidateGraphRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateGraphRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateGraphRequest;
    static deserializeBinaryFromReader(message: ValidateGraphRequest, reader: jspb.BinaryReader): ValidateGraphRequest;
}

export namespace ValidateGraphRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ValidateGraphResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ValidateGraphResponse;
    getStatus(): ValidateGraphResponse.Status;
    setStatus(value: ValidateGraphResponse.Status): ValidateGraphResponse;

    hasSensorStatus(): boolean;
    clearSensorStatus(): void;
    getSensorStatus(): SensorCompatibilityStatus | undefined;
    setSensorStatus(value?: SensorCompatibilityStatus): ValidateGraphResponse;

    hasAreaCallbackError(): boolean;
    clearAreaCallbackError(): void;
    getAreaCallbackError(): AreaCallbackServiceError | undefined;
    setAreaCallbackError(value?: AreaCallbackServiceError): ValidateGraphResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateGraphResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateGraphResponse): ValidateGraphResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateGraphResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateGraphResponse;
    static deserializeBinaryFromReader(message: ValidateGraphResponse, reader: jspb.BinaryReader): ValidateGraphResponse;
}

export namespace ValidateGraphResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ValidateGraphResponse.Status,
        sensorStatus?: SensorCompatibilityStatus.AsObject,
        areaCallbackError?: AreaCallbackServiceError.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INCOMPATIBLE_SENSORS = 5,
    STATUS_AREA_CALLBACK_ERROR = 6,
    }

}
