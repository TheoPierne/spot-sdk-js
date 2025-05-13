// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/map.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_graph_nav_lost_detection_pb from "../../../bosdyn/api/graph_nav/lost_detection_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_graph_nav_area_callback_data_pb from "../../../bosdyn/api/graph_nav/area_callback_data_pb";
import * as bosdyn_api_image_pb from "../../../bosdyn/api/image_pb";
import * as bosdyn_api_local_grid_pb from "../../../bosdyn/api/local_grid_pb";
import * as bosdyn_api_payload_pb from "../../../bosdyn/api/payload_pb";
import * as bosdyn_api_point_cloud_pb from "../../../bosdyn/api/point_cloud_pb";
import * as bosdyn_api_robot_id_pb from "../../../bosdyn/api/robot_id_pb";
import * as bosdyn_api_robot_state_pb from "../../../bosdyn/api/robot_state_pb";
import * as bosdyn_api_spot_robot_command_pb from "../../../bosdyn/api/spot/robot_command_pb";
import * as bosdyn_api_stairs_pb from "../../../bosdyn/api/stairs_pb";
import * as bosdyn_api_world_object_pb from "../../../bosdyn/api/world_object_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Waypoint extends jspb.Message { 
    getId(): string;
    setId(value: string): Waypoint;
    getSnapshotId(): string;
    setSnapshotId(value: string): Waypoint;

    hasWaypointTformKo(): boolean;
    clearWaypointTformKo(): void;
    getWaypointTformKo(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setWaypointTformKo(value?: bosdyn_api_geometry_pb.SE3Pose): Waypoint;

    hasAnnotations(): boolean;
    clearAnnotations(): void;
    getAnnotations(): Waypoint.Annotations | undefined;
    setAnnotations(value?: Waypoint.Annotations): Waypoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Waypoint.AsObject;
    static toObject(includeInstance: boolean, msg: Waypoint): Waypoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Waypoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Waypoint;
    static deserializeBinaryFromReader(message: Waypoint, reader: jspb.BinaryReader): Waypoint;
}

export namespace Waypoint {
    export type AsObject = {
        id: string,
        snapshotId: string,
        waypointTformKo?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        annotations?: Waypoint.Annotations.AsObject,
    }


    export class Annotations extends jspb.Message { 
        getName(): string;
        setName(value: string): Annotations;

        hasCreationTime(): boolean;
        clearCreationTime(): void;
        getCreationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreationTime(value?: google_protobuf_timestamp_pb.Timestamp): Annotations;

        hasIcpVariance(): boolean;
        clearIcpVariance(): void;
        getIcpVariance(): bosdyn_api_geometry_pb.SE3Covariance | undefined;
        setIcpVariance(value?: bosdyn_api_geometry_pb.SE3Covariance): Annotations;

        hasScanMatchRegion(): boolean;
        clearScanMatchRegion(): void;
        getScanMatchRegion(): Waypoint.Annotations.LocalizeRegion | undefined;
        setScanMatchRegion(value?: Waypoint.Annotations.LocalizeRegion): Annotations;
        getWaypointSource(): Waypoint.WaypointSource;
        setWaypointSource(value: Waypoint.WaypointSource): Annotations;

        hasClientMetadata(): boolean;
        clearClientMetadata(): void;
        getClientMetadata(): ClientMetadata | undefined;
        setClientMetadata(value?: ClientMetadata): Annotations;

        hasLoopClosureSettings(): boolean;
        clearLoopClosureSettings(): void;
        getLoopClosureSettings(): Waypoint.Annotations.LoopClosureSettings | undefined;
        setLoopClosureSettings(value?: Waypoint.Annotations.LoopClosureSettings): Annotations;

        hasGpsSettings(): boolean;
        clearGpsSettings(): void;
        getGpsSettings(): Waypoint.Annotations.GPSSettings | undefined;
        setGpsSettings(value?: Waypoint.Annotations.GPSSettings): Annotations;
        clearRegionsList(): void;
        getRegionsList(): Array<RegionWithFrame>;
        setRegionsList(value: Array<RegionWithFrame>): Annotations;
        addRegions(value?: RegionWithFrame, index?: number): RegionWithFrame;
        getLostDetectorStrictness(): bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness;
        setLostDetectorStrictness(value: bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness): Annotations;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Annotations.AsObject;
        static toObject(includeInstance: boolean, msg: Annotations): Annotations.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Annotations, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Annotations;
        static deserializeBinaryFromReader(message: Annotations, reader: jspb.BinaryReader): Annotations;
    }

    export namespace Annotations {
        export type AsObject = {
            name: string,
            creationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            icpVariance?: bosdyn_api_geometry_pb.SE3Covariance.AsObject,
            scanMatchRegion?: Waypoint.Annotations.LocalizeRegion.AsObject,
            waypointSource: Waypoint.WaypointSource,
            clientMetadata?: ClientMetadata.AsObject,
            loopClosureSettings?: Waypoint.Annotations.LoopClosureSettings.AsObject,
            gpsSettings?: Waypoint.Annotations.GPSSettings.AsObject,
            regionsList: Array<RegionWithFrame.AsObject>,
            lostDetectorStrictness: bosdyn_api_graph_nav_lost_detection_pb.LostDetectorStrictness,
        }


        export class LocalizeRegion extends jspb.Message { 
            getState(): AnnotationState;
            setState(value: AnnotationState): LocalizeRegion;

            hasDefaultRegion(): boolean;
            clearDefaultRegion(): void;
            getDefaultRegion(): Waypoint.Annotations.LocalizeRegion.Default | undefined;
            setDefaultRegion(value?: Waypoint.Annotations.LocalizeRegion.Default): LocalizeRegion;

            hasEmpty(): boolean;
            clearEmpty(): void;
            getEmpty(): Waypoint.Annotations.LocalizeRegion.Empty | undefined;
            setEmpty(value?: Waypoint.Annotations.LocalizeRegion.Empty): LocalizeRegion;

            hasCircle(): boolean;
            clearCircle(): void;
            getCircle(): Waypoint.Annotations.LocalizeRegion.Circle2D | undefined;
            setCircle(value?: Waypoint.Annotations.LocalizeRegion.Circle2D): LocalizeRegion;

            getRegionCase(): LocalizeRegion.RegionCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LocalizeRegion.AsObject;
            static toObject(includeInstance: boolean, msg: LocalizeRegion): LocalizeRegion.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LocalizeRegion, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LocalizeRegion;
            static deserializeBinaryFromReader(message: LocalizeRegion, reader: jspb.BinaryReader): LocalizeRegion;
        }

        export namespace LocalizeRegion {
            export type AsObject = {
                state: AnnotationState,
                defaultRegion?: Waypoint.Annotations.LocalizeRegion.Default.AsObject,
                empty?: Waypoint.Annotations.LocalizeRegion.Empty.AsObject,
                circle?: Waypoint.Annotations.LocalizeRegion.Circle2D.AsObject,
            }


            export class Default extends jspb.Message { 

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Default.AsObject;
                static toObject(includeInstance: boolean, msg: Default): Default.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Default, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Default;
                static deserializeBinaryFromReader(message: Default, reader: jspb.BinaryReader): Default;
            }

            export namespace Default {
                export type AsObject = {
                }
            }

            export class Empty extends jspb.Message { 

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Empty.AsObject;
                static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Empty;
                static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
            }

            export namespace Empty {
                export type AsObject = {
                }
            }

            export class Circle2D extends jspb.Message { 
                getDist2d(): number;
                setDist2d(value: number): Circle2D;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Circle2D.AsObject;
                static toObject(includeInstance: boolean, msg: Circle2D): Circle2D.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Circle2D, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Circle2D;
                static deserializeBinaryFromReader(message: Circle2D, reader: jspb.BinaryReader): Circle2D;
            }

            export namespace Circle2D {
                export type AsObject = {
                    dist2d: number,
                }
            }


            export enum RegionCase {
                REGION_NOT_SET = 0,
                DEFAULT_REGION = 2,
                EMPTY = 3,
                CIRCLE = 4,
            }

        }

        export class LoopClosureSettings extends jspb.Message { 
            getDisableLoopClosure(): boolean;
            setDisableLoopClosure(value: boolean): LoopClosureSettings;
            getDisableCollisionCheck(): boolean;
            setDisableCollisionCheck(value: boolean): LoopClosureSettings;
            getMaxEdgeLength(): number;
            setMaxEdgeLength(value: number): LoopClosureSettings;
            getMaxOdometryPathLength(): number;
            setMaxOdometryPathLength(value: number): LoopClosureSettings;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LoopClosureSettings.AsObject;
            static toObject(includeInstance: boolean, msg: LoopClosureSettings): LoopClosureSettings.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LoopClosureSettings, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LoopClosureSettings;
            static deserializeBinaryFromReader(message: LoopClosureSettings, reader: jspb.BinaryReader): LoopClosureSettings;
        }

        export namespace LoopClosureSettings {
            export type AsObject = {
                disableLoopClosure: boolean,
                disableCollisionCheck: boolean,
                maxEdgeLength: number,
                maxOdometryPathLength: number,
            }
        }

        export class GPSSettings extends jspb.Message { 
            getState(): AnnotationState;
            setState(value: AnnotationState): GPSSettings;

            hasEcefTformWaypoint(): boolean;
            clearEcefTformWaypoint(): void;
            getEcefTformWaypoint(): bosdyn_api_geometry_pb.SE3Pose | undefined;
            setEcefTformWaypoint(value?: bosdyn_api_geometry_pb.SE3Pose): GPSSettings;
            getDisableGpsLocalization(): boolean;
            setDisableGpsLocalization(value: boolean): GPSSettings;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): GPSSettings.AsObject;
            static toObject(includeInstance: boolean, msg: GPSSettings): GPSSettings.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: GPSSettings, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): GPSSettings;
            static deserializeBinaryFromReader(message: GPSSettings, reader: jspb.BinaryReader): GPSSettings;
        }

        export namespace GPSSettings {
            export type AsObject = {
                state: AnnotationState,
                ecefTformWaypoint?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
                disableGpsLocalization: boolean,
            }
        }

    }


    export enum WaypointSource {
    WAYPOINT_SOURCE_UNKNOWN = 0,
    WAYPOINT_SOURCE_ROBOT_PATH = 1,
    WAYPOINT_SOURCE_USER_REQUEST = 2,
    WAYPOINT_SOURCE_ALTERNATE_ROUTE_FINDING = 3,
    }

}

export class ClientMetadata extends jspb.Message { 
    getSessionName(): string;
    setSessionName(value: string): ClientMetadata;
    getClientUsername(): string;
    setClientUsername(value: string): ClientMetadata;
    getClientSoftwareVersion(): string;
    setClientSoftwareVersion(value: string): ClientMetadata;
    getClientId(): string;
    setClientId(value: string): ClientMetadata;
    getClientType(): string;
    setClientType(value: string): ClientMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ClientMetadata): ClientMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientMetadata;
    static deserializeBinaryFromReader(message: ClientMetadata, reader: jspb.BinaryReader): ClientMetadata;
}

export namespace ClientMetadata {
    export type AsObject = {
        sessionName: string,
        clientUsername: string,
        clientSoftwareVersion: string,
        clientId: string,
        clientType: string,
    }
}

export class WaypointSnapshot extends jspb.Message { 
    getId(): string;
    setId(value: string): WaypointSnapshot;
    clearImagesList(): void;
    getImagesList(): Array<bosdyn_api_image_pb.ImageResponse>;
    setImagesList(value: Array<bosdyn_api_image_pb.ImageResponse>): WaypointSnapshot;
    addImages(value?: bosdyn_api_image_pb.ImageResponse, index?: number): bosdyn_api_image_pb.ImageResponse;

    hasPointCloud(): boolean;
    clearPointCloud(): void;
    getPointCloud(): bosdyn_api_point_cloud_pb.PointCloud | undefined;
    setPointCloud(value?: bosdyn_api_point_cloud_pb.PointCloud): WaypointSnapshot;
    clearObjectsList(): void;
    getObjectsList(): Array<bosdyn_api_world_object_pb.WorldObject>;
    setObjectsList(value: Array<bosdyn_api_world_object_pb.WorldObject>): WaypointSnapshot;
    addObjects(value?: bosdyn_api_world_object_pb.WorldObject, index?: number): bosdyn_api_world_object_pb.WorldObject;

    hasRobotState(): boolean;
    clearRobotState(): void;
    getRobotState(): bosdyn_api_robot_state_pb.RobotState | undefined;
    setRobotState(value?: bosdyn_api_robot_state_pb.RobotState): WaypointSnapshot;
    clearRobotLocalGridsList(): void;
    getRobotLocalGridsList(): Array<bosdyn_api_local_grid_pb.LocalGrid>;
    setRobotLocalGridsList(value: Array<bosdyn_api_local_grid_pb.LocalGrid>): WaypointSnapshot;
    addRobotLocalGrids(value?: bosdyn_api_local_grid_pb.LocalGrid, index?: number): bosdyn_api_local_grid_pb.LocalGrid;
    getIsPointCloudProcessed(): boolean;
    setIsPointCloudProcessed(value: boolean): WaypointSnapshot;
    getVersionId(): string;
    setVersionId(value: string): WaypointSnapshot;
    getHasRemotePointCloudSensor(): boolean;
    setHasRemotePointCloudSensor(value: boolean): WaypointSnapshot;

    hasBodyTformRemotePointCloudSensor(): boolean;
    clearBodyTformRemotePointCloudSensor(): void;
    getBodyTformRemotePointCloudSensor(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setBodyTformRemotePointCloudSensor(value?: bosdyn_api_geometry_pb.SE3Pose): WaypointSnapshot;
    clearPayloadsList(): void;
    getPayloadsList(): Array<bosdyn_api_payload_pb.Payload>;
    setPayloadsList(value: Array<bosdyn_api_payload_pb.Payload>): WaypointSnapshot;
    addPayloads(value?: bosdyn_api_payload_pb.Payload, index?: number): bosdyn_api_payload_pb.Payload;

    hasRobotId(): boolean;
    clearRobotId(): void;
    getRobotId(): bosdyn_api_robot_id_pb.RobotId | undefined;
    setRobotId(value?: bosdyn_api_robot_id_pb.RobotId): WaypointSnapshot;

    hasRecordingStartedOn(): boolean;
    clearRecordingStartedOn(): void;
    getRecordingStartedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRecordingStartedOn(value?: google_protobuf_timestamp_pb.Timestamp): WaypointSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaypointSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: WaypointSnapshot): WaypointSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaypointSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaypointSnapshot;
    static deserializeBinaryFromReader(message: WaypointSnapshot, reader: jspb.BinaryReader): WaypointSnapshot;
}

export namespace WaypointSnapshot {
    export type AsObject = {
        id: string,
        imagesList: Array<bosdyn_api_image_pb.ImageResponse.AsObject>,
        pointCloud?: bosdyn_api_point_cloud_pb.PointCloud.AsObject,
        objectsList: Array<bosdyn_api_world_object_pb.WorldObject.AsObject>,
        robotState?: bosdyn_api_robot_state_pb.RobotState.AsObject,
        robotLocalGridsList: Array<bosdyn_api_local_grid_pb.LocalGrid.AsObject>,
        isPointCloudProcessed: boolean,
        versionId: string,
        hasRemotePointCloudSensor: boolean,
        bodyTformRemotePointCloudSensor?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        payloadsList: Array<bosdyn_api_payload_pb.Payload.AsObject>,
        robotId?: bosdyn_api_robot_id_pb.RobotId.AsObject,
        recordingStartedOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Edge extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): Edge.Id | undefined;
    setId(value?: Edge.Id): Edge;
    getSnapshotId(): string;
    setSnapshotId(value: string): Edge;

    hasFromTformTo(): boolean;
    clearFromTformTo(): void;
    getFromTformTo(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setFromTformTo(value?: bosdyn_api_geometry_pb.SE3Pose): Edge;

    hasAnnotations(): boolean;
    clearAnnotations(): void;
    getAnnotations(): Edge.Annotations | undefined;
    setAnnotations(value?: Edge.Annotations): Edge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Edge.AsObject;
    static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Edge;
    static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
}

export namespace Edge {
    export type AsObject = {
        id?: Edge.Id.AsObject,
        snapshotId: string,
        fromTformTo?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        annotations?: Edge.Annotations.AsObject,
    }


    export class Id extends jspb.Message { 
        getFromWaypoint(): string;
        setFromWaypoint(value: string): Id;
        getToWaypoint(): string;
        setToWaypoint(value: string): Id;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Id.AsObject;
        static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Id;
        static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
    }

    export namespace Id {
        export type AsObject = {
            fromWaypoint: string,
            toWaypoint: string,
        }
    }

    export class Annotations extends jspb.Message { 

        hasStairs(): boolean;
        clearStairs(): void;
        getStairs(): Edge.Annotations.StairData | undefined;
        setStairs(value?: Edge.Annotations.StairData): Annotations;
        getDirectionConstraint(): Edge.Annotations.DirectionConstraint;
        setDirectionConstraint(value: Edge.Annotations.DirectionConstraint): Annotations;

        hasRequireAlignment(): boolean;
        clearRequireAlignment(): void;
        getRequireAlignment(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setRequireAlignment(value?: google_protobuf_wrappers_pb.BoolValue): Annotations;

        hasFlatGround(): boolean;
        clearFlatGround(): void;
        getFlatGround(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setFlatGround(value?: google_protobuf_wrappers_pb.BoolValue): Annotations;

        hasOverrideMobilityParams(): boolean;
        clearOverrideMobilityParams(): void;
        getOverrideMobilityParams(): google_protobuf_field_mask_pb.FieldMask | undefined;
        setOverrideMobilityParams(value?: google_protobuf_field_mask_pb.FieldMask): Annotations;

        hasMobilityParams(): boolean;
        clearMobilityParams(): void;
        getMobilityParams(): bosdyn_api_spot_robot_command_pb.MobilityParams | undefined;
        setMobilityParams(value?: bosdyn_api_spot_robot_command_pb.MobilityParams): Annotations;

        hasCost(): boolean;
        clearCost(): void;
        getCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setCost(value?: google_protobuf_wrappers_pb.DoubleValue): Annotations;
        getEdgeSource(): Edge.EdgeSource;
        setEdgeSource(value: Edge.EdgeSource): Annotations;
        getDisableAlternateRouteFinding(): boolean;
        setDisableAlternateRouteFinding(value: boolean): Annotations;
        getPathFollowingMode(): Edge.Annotations.PathFollowingMode;
        setPathFollowingMode(value: Edge.Annotations.PathFollowingMode): Annotations;
        getMaxCorridorDistance(): number;
        setMaxCorridorDistance(value: number): Annotations;
        getDisableDirectedExploration(): boolean;
        setDisableDirectedExploration(value: boolean): Annotations;

        getAreaCallbacksMap(): jspb.Map<string, AreaCallbackRegion>;
        clearAreaCallbacksMap(): void;
        getGroundClutterMode(): Edge.Annotations.GroundClutterAvoidanceMode;
        setGroundClutterMode(value: Edge.Annotations.GroundClutterAvoidanceMode): Annotations;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Annotations.AsObject;
        static toObject(includeInstance: boolean, msg: Annotations): Annotations.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Annotations, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Annotations;
        static deserializeBinaryFromReader(message: Annotations, reader: jspb.BinaryReader): Annotations;
    }

    export namespace Annotations {
        export type AsObject = {
            stairs?: Edge.Annotations.StairData.AsObject,
            directionConstraint: Edge.Annotations.DirectionConstraint,
            requireAlignment?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            flatGround?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            overrideMobilityParams?: google_protobuf_field_mask_pb.FieldMask.AsObject,
            mobilityParams?: bosdyn_api_spot_robot_command_pb.MobilityParams.AsObject,
            cost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            edgeSource: Edge.EdgeSource,
            disableAlternateRouteFinding: boolean,
            pathFollowingMode: Edge.Annotations.PathFollowingMode,
            maxCorridorDistance: number,
            disableDirectedExploration: boolean,

            areaCallbacksMap: Array<[string, AreaCallbackRegion.AsObject]>,
            groundClutterMode: Edge.Annotations.GroundClutterAvoidanceMode,
        }


        export class StairData extends jspb.Message { 
            getState(): AnnotationState;
            setState(value: AnnotationState): StairData;

            hasStraightStaircase(): boolean;
            clearStraightStaircase(): void;
            getStraightStaircase(): bosdyn_api_stairs_pb.StraightStaircase | undefined;
            setStraightStaircase(value?: bosdyn_api_stairs_pb.StraightStaircase): StairData;

            hasStaircaseWithLandings(): boolean;
            clearStaircaseWithLandings(): void;
            getStaircaseWithLandings(): bosdyn_api_stairs_pb.StaircaseWithLandings | undefined;
            setStaircaseWithLandings(value?: bosdyn_api_stairs_pb.StaircaseWithLandings): StairData;
            getDescentPreference(): Edge.Annotations.StairData.DescentPreference;
            setDescentPreference(value: Edge.Annotations.StairData.DescentPreference): StairData;

            hasTraversalYOffset(): boolean;
            clearTraversalYOffset(): void;
            getTraversalYOffset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
            setTraversalYOffset(value?: google_protobuf_wrappers_pb.DoubleValue): StairData;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): StairData.AsObject;
            static toObject(includeInstance: boolean, msg: StairData): StairData.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: StairData, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): StairData;
            static deserializeBinaryFromReader(message: StairData, reader: jspb.BinaryReader): StairData;
        }

        export namespace StairData {
            export type AsObject = {
                state: AnnotationState,
                straightStaircase?: bosdyn_api_stairs_pb.StraightStaircase.AsObject,
                staircaseWithLandings?: bosdyn_api_stairs_pb.StaircaseWithLandings.AsObject,
                descentPreference: Edge.Annotations.StairData.DescentPreference,
                traversalYOffset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            }

            export enum DescentPreference {
    DESCENT_PREFERENCE_UNKNOWN = 0,
    DESCENT_PREFERENCE_PREFER_REVERSE = 1,
    DESCENT_PREFERENCE_ALWAYS_REVERSE = 2,
    DESCENT_PREFERENCE_NONE = 3,
            }

        }


        export enum DirectionConstraint {
    DIRECTION_CONSTRAINT_UNKNOWN = 0,
    DIRECTION_CONSTRAINT_NO_TURN = 1,
    DIRECTION_CONSTRAINT_FORWARD = 2,
    DIRECTION_CONSTRAINT_REVERSE = 3,
    DIRECTION_CONSTRAINT_NONE = 4,
        }

        export enum PathFollowingMode {
    PATH_MODE_UNKNOWN = 0,
    PATH_MODE_DEFAULT = 1,
    PATH_MODE_STRICT = 2,
        }

        export enum GroundClutterAvoidanceMode {
    GROUND_CLUTTER_UNKNOWN = 0,
    GROUND_CLUTTER_OFF = 1,
    GROUND_CLUTTER_FROM_FOOTFALLS = 2,
        }

    }


    export enum EdgeSource {
    EDGE_SOURCE_UNKNOWN = 0,
    EDGE_SOURCE_ODOMETRY = 1,
    EDGE_SOURCE_SMALL_LOOP_CLOSURE = 2,
    EDGE_SOURCE_FIDUCIAL_LOOP_CLOSURE = 3,
    EDGE_SOURCE_ALTERNATE_ROUTE_FINDING = 4,
    EDGE_SOURCE_USER_REQUEST = 5,
    EDGE_SOURCE_LOCALIZATION = 6,
    }

}

export class EdgeSnapshot extends jspb.Message { 
    getId(): string;
    setId(value: string): EdgeSnapshot;
    clearStancesList(): void;
    getStancesList(): Array<EdgeSnapshot.Stance>;
    setStancesList(value: Array<EdgeSnapshot.Stance>): EdgeSnapshot;
    addStances(value?: EdgeSnapshot.Stance, index?: number): EdgeSnapshot.Stance;

    getAreaCallbacksMap(): jspb.Map<string, bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData>;
    clearAreaCallbacksMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EdgeSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: EdgeSnapshot): EdgeSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EdgeSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EdgeSnapshot;
    static deserializeBinaryFromReader(message: EdgeSnapshot, reader: jspb.BinaryReader): EdgeSnapshot;
}

export namespace EdgeSnapshot {
    export type AsObject = {
        id: string,
        stancesList: Array<EdgeSnapshot.Stance.AsObject>,

        areaCallbacksMap: Array<[string, bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData.AsObject]>,
    }


    export class Stance extends jspb.Message { 

        hasTimestamp(): boolean;
        clearTimestamp(): void;
        getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Stance;
        clearFootStatesList(): void;
        getFootStatesList(): Array<bosdyn_api_robot_state_pb.FootState>;
        setFootStatesList(value: Array<bosdyn_api_robot_state_pb.FootState>): Stance;
        addFootStates(value?: bosdyn_api_robot_state_pb.FootState, index?: number): bosdyn_api_robot_state_pb.FootState;

        hasKoTformBody(): boolean;
        clearKoTformBody(): void;
        getKoTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setKoTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): Stance;

        hasVisionTformBody(): boolean;
        clearVisionTformBody(): void;
        getVisionTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setVisionTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): Stance;

        hasPlanarGround(): boolean;
        clearPlanarGround(): void;
        getPlanarGround(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setPlanarGround(value?: google_protobuf_wrappers_pb.BoolValue): Stance;

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
            timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            footStatesList: Array<bosdyn_api_robot_state_pb.FootState.AsObject>,
            koTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            visionTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            planarGround?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }
    }

}

export class Anchor extends jspb.Message { 
    getId(): string;
    setId(value: string): Anchor;

    hasSeedTformWaypoint(): boolean;
    clearSeedTformWaypoint(): void;
    getSeedTformWaypoint(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setSeedTformWaypoint(value?: bosdyn_api_geometry_pb.SE3Pose): Anchor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Anchor.AsObject;
    static toObject(includeInstance: boolean, msg: Anchor): Anchor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Anchor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Anchor;
    static deserializeBinaryFromReader(message: Anchor, reader: jspb.BinaryReader): Anchor;
}

export namespace Anchor {
    export type AsObject = {
        id: string,
        seedTformWaypoint?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
    }
}

export class AnchoredWorldObject extends jspb.Message { 
    getId(): string;
    setId(value: string): AnchoredWorldObject;

    hasSeedTformObject(): boolean;
    clearSeedTformObject(): void;
    getSeedTformObject(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setSeedTformObject(value?: bosdyn_api_geometry_pb.SE3Pose): AnchoredWorldObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnchoredWorldObject.AsObject;
    static toObject(includeInstance: boolean, msg: AnchoredWorldObject): AnchoredWorldObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnchoredWorldObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnchoredWorldObject;
    static deserializeBinaryFromReader(message: AnchoredWorldObject, reader: jspb.BinaryReader): AnchoredWorldObject;
}

export namespace AnchoredWorldObject {
    export type AsObject = {
        id: string,
        seedTformObject?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
    }
}

export class Anchoring extends jspb.Message { 
    clearAnchorsList(): void;
    getAnchorsList(): Array<Anchor>;
    setAnchorsList(value: Array<Anchor>): Anchoring;
    addAnchors(value?: Anchor, index?: number): Anchor;
    clearObjectsList(): void;
    getObjectsList(): Array<AnchoredWorldObject>;
    setObjectsList(value: Array<AnchoredWorldObject>): Anchoring;
    addObjects(value?: AnchoredWorldObject, index?: number): AnchoredWorldObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Anchoring.AsObject;
    static toObject(includeInstance: boolean, msg: Anchoring): Anchoring.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Anchoring, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Anchoring;
    static deserializeBinaryFromReader(message: Anchoring, reader: jspb.BinaryReader): Anchoring;
}

export namespace Anchoring {
    export type AsObject = {
        anchorsList: Array<Anchor.AsObject>,
        objectsList: Array<AnchoredWorldObject.AsObject>,
    }
}

export class AreaCallbackRegion extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): AreaCallbackRegion;
    getDescription(): string;
    setDescription(value: string): AreaCallbackRegion;

    hasRecordedData(): boolean;
    clearRecordedData(): void;
    getRecordedData(): bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData | undefined;
    setRecordedData(value?: bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData): AreaCallbackRegion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackRegion.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackRegion): AreaCallbackRegion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackRegion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackRegion;
    static deserializeBinaryFromReader(message: AreaCallbackRegion, reader: jspb.BinaryReader): AreaCallbackRegion;
}

export namespace AreaCallbackRegion {
    export type AsObject = {
        serviceName: string,
        description: string,
        recordedData?: bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData.AsObject,
    }
}

export class Graph extends jspb.Message { 
    clearWaypointsList(): void;
    getWaypointsList(): Array<Waypoint>;
    setWaypointsList(value: Array<Waypoint>): Graph;
    addWaypoints(value?: Waypoint, index?: number): Waypoint;
    clearEdgesList(): void;
    getEdgesList(): Array<Edge>;
    setEdgesList(value: Array<Edge>): Graph;
    addEdges(value?: Edge, index?: number): Edge;

    hasAnchoring(): boolean;
    clearAnchoring(): void;
    getAnchoring(): Anchoring | undefined;
    setAnchoring(value?: Anchoring): Graph;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Graph.AsObject;
    static toObject(includeInstance: boolean, msg: Graph): Graph.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Graph, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Graph;
    static deserializeBinaryFromReader(message: Graph, reader: jspb.BinaryReader): Graph;
}

export namespace Graph {
    export type AsObject = {
        waypointsList: Array<Waypoint.AsObject>,
        edgesList: Array<Edge.AsObject>,
        anchoring?: Anchoring.AsObject,
    }
}

export class MapStats extends jspb.Message { 

    hasWaypoints(): boolean;
    clearWaypoints(): void;
    getWaypoints(): MapStats.Stat | undefined;
    setWaypoints(value?: MapStats.Stat): MapStats;

    hasWaypointSnapshots(): boolean;
    clearWaypointSnapshots(): void;
    getWaypointSnapshots(): MapStats.Stat | undefined;
    setWaypointSnapshots(value?: MapStats.Stat): MapStats;

    hasAlternateWaypoints(): boolean;
    clearAlternateWaypoints(): void;
    getAlternateWaypoints(): MapStats.Stat | undefined;
    setAlternateWaypoints(value?: MapStats.Stat): MapStats;

    hasEdges(): boolean;
    clearEdges(): void;
    getEdges(): MapStats.Stat | undefined;
    setEdges(value?: MapStats.Stat): MapStats;

    hasEdgeSnapshots(): boolean;
    clearEdgeSnapshots(): void;
    getEdgeSnapshots(): MapStats.Stat | undefined;
    setEdgeSnapshots(value?: MapStats.Stat): MapStats;

    hasAlternateEdges(): boolean;
    clearAlternateEdges(): void;
    getAlternateEdges(): MapStats.Stat | undefined;
    setAlternateEdges(value?: MapStats.Stat): MapStats;

    hasWaypointAnchors(): boolean;
    clearWaypointAnchors(): void;
    getWaypointAnchors(): MapStats.Stat | undefined;
    setWaypointAnchors(value?: MapStats.Stat): MapStats;

    hasObjectAnchors(): boolean;
    clearObjectAnchors(): void;
    getObjectAnchors(): MapStats.Stat | undefined;
    setObjectAnchors(value?: MapStats.Stat): MapStats;
    getTotalPathLength(): number;
    setTotalPathLength(value: number): MapStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapStats.AsObject;
    static toObject(includeInstance: boolean, msg: MapStats): MapStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapStats;
    static deserializeBinaryFromReader(message: MapStats, reader: jspb.BinaryReader): MapStats;
}

export namespace MapStats {
    export type AsObject = {
        waypoints?: MapStats.Stat.AsObject,
        waypointSnapshots?: MapStats.Stat.AsObject,
        alternateWaypoints?: MapStats.Stat.AsObject,
        edges?: MapStats.Stat.AsObject,
        edgeSnapshots?: MapStats.Stat.AsObject,
        alternateEdges?: MapStats.Stat.AsObject,
        waypointAnchors?: MapStats.Stat.AsObject,
        objectAnchors?: MapStats.Stat.AsObject,
        totalPathLength: number,
    }


    export class Stat extends jspb.Message { 
        getCount(): number;
        setCount(value: number): Stat;
        getNumBytes(): number;
        setNumBytes(value: number): Stat;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Stat.AsObject;
        static toObject(includeInstance: boolean, msg: Stat): Stat.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Stat, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Stat;
        static deserializeBinaryFromReader(message: Stat, reader: jspb.BinaryReader): Stat;
    }

    export namespace Stat {
        export type AsObject = {
            count: number,
            numBytes: number,
        }
    }

}

export class Region extends jspb.Message { 
    getRegionId(): string;
    setRegionId(value: string): Region;

    hasBoundingBox(): boolean;
    clearBoundingBox(): void;
    getBoundingBox(): bosdyn_api_geometry_pb.Box3 | undefined;
    setBoundingBox(value?: bosdyn_api_geometry_pb.Box3): Region;
    getDataFilter(): Region.DataFilter;
    setDataFilter(value: Region.DataFilter): Region;

    getShapeCase(): Region.ShapeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Region.AsObject;
    static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Region;
    static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
    export type AsObject = {
        regionId: string,
        boundingBox?: bosdyn_api_geometry_pb.Box3.AsObject,
        dataFilter: Region.DataFilter,
    }

    export enum DataFilter {
    DATA_FILTER_UNKNOWN = 0,
    DATA_FILTER_NONE = 1,
    DATA_FILTER_IGNORE = 2,
    DATA_FILTER_INCLUDE_ONLY = 3,
    }


    export enum ShapeCase {
        SHAPE_NOT_SET = 0,
        BOUNDING_BOX = 2,
    }

}

export class RegionWithFrame extends jspb.Message { 

    hasRegion(): boolean;
    clearRegion(): void;
    getRegion(): Region | undefined;
    setRegion(value?: Region): RegionWithFrame;
    getBaseFrameName(): string;
    setBaseFrameName(value: string): RegionWithFrame;

    hasBaseFrameTformRegion(): boolean;
    clearBaseFrameTformRegion(): void;
    getBaseFrameTformRegion(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setBaseFrameTformRegion(value?: bosdyn_api_geometry_pb.SE3Pose): RegionWithFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionWithFrame.AsObject;
    static toObject(includeInstance: boolean, msg: RegionWithFrame): RegionWithFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegionWithFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionWithFrame;
    static deserializeBinaryFromReader(message: RegionWithFrame, reader: jspb.BinaryReader): RegionWithFrame;
}

export namespace RegionWithFrame {
    export type AsObject = {
        region?: Region.AsObject,
        baseFrameName: string,
        baseFrameTformRegion?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
    }
}

export enum AnnotationState {
    ANNOTATION_STATE_UNKNOWN = 0,
    ANNOTATION_STATE_SET = 1,
    ANNOTATION_STATE_NONE = 2,
}
