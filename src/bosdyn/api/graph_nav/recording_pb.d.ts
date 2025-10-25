// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/recording.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as bosdyn_api_license_pb from "../../../bosdyn/api/license_pb";
import * as bosdyn_api_robot_state_pb from "../../../bosdyn/api/robot_state_pb";
import * as bosdyn_api_world_object_pb from "../../../bosdyn/api/world_object_pb";
import * as bosdyn_api_graph_nav_map_pb from "../../../bosdyn/api/graph_nav/map_pb";

export class RecordingEnvironment extends jspb.Message { 
    getNamePrefix(): string;
    setNamePrefix(value: string): RecordingEnvironment;

    hasWaypointEnvironment(): boolean;
    clearWaypointEnvironment(): void;
    getWaypointEnvironment(): bosdyn_api_graph_nav_map_pb.Waypoint.Annotations | undefined;
    setWaypointEnvironment(value?: bosdyn_api_graph_nav_map_pb.Waypoint.Annotations): RecordingEnvironment;

    hasEdgeEnvironment(): boolean;
    clearEdgeEnvironment(): void;
    getEdgeEnvironment(): bosdyn_api_graph_nav_map_pb.Edge.Annotations | undefined;
    setEdgeEnvironment(value?: bosdyn_api_graph_nav_map_pb.Edge.Annotations): RecordingEnvironment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordingEnvironment.AsObject;
    static toObject(includeInstance: boolean, msg: RecordingEnvironment): RecordingEnvironment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordingEnvironment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordingEnvironment;
    static deserializeBinaryFromReader(message: RecordingEnvironment, reader: jspb.BinaryReader): RecordingEnvironment;
}

export namespace RecordingEnvironment {
    export type AsObject = {
        namePrefix: string,
        waypointEnvironment?: bosdyn_api_graph_nav_map_pb.Waypoint.Annotations.AsObject,
        edgeEnvironment?: bosdyn_api_graph_nav_map_pb.Edge.Annotations.AsObject,
    }
}

export class SetRecordingEnvironmentRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetRecordingEnvironmentRequest;

    hasEnvironment(): boolean;
    clearEnvironment(): void;
    getEnvironment(): RecordingEnvironment | undefined;
    setEnvironment(value?: RecordingEnvironment): SetRecordingEnvironmentRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): SetRecordingEnvironmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRecordingEnvironmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetRecordingEnvironmentRequest): SetRecordingEnvironmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRecordingEnvironmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRecordingEnvironmentRequest;
    static deserializeBinaryFromReader(message: SetRecordingEnvironmentRequest, reader: jspb.BinaryReader): SetRecordingEnvironmentRequest;
}

export namespace SetRecordingEnvironmentRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        environment?: RecordingEnvironment.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class SetRecordingEnvironmentResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetRecordingEnvironmentResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): SetRecordingEnvironmentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRecordingEnvironmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetRecordingEnvironmentResponse): SetRecordingEnvironmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRecordingEnvironmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRecordingEnvironmentResponse;
    static deserializeBinaryFromReader(message: SetRecordingEnvironmentResponse, reader: jspb.BinaryReader): SetRecordingEnvironmentResponse;
}

export namespace SetRecordingEnvironmentResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
    }
}

export class StartRecordingRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StartRecordingRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): StartRecordingRequest;

    hasRecordingEnvironment(): boolean;
    clearRecordingEnvironment(): void;
    getRecordingEnvironment(): RecordingEnvironment | undefined;
    setRecordingEnvironment(value?: RecordingEnvironment): StartRecordingRequest;
    clearRequireFiducialsList(): void;
    getRequireFiducialsList(): Array<number>;
    setRequireFiducialsList(value: Array<number>): StartRecordingRequest;
    addRequireFiducials(value: number, index?: number): number;

    hasSessionStartTime(): boolean;
    clearSessionStartTime(): void;
    getSessionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSessionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): StartRecordingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartRecordingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartRecordingRequest): StartRecordingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartRecordingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartRecordingRequest;
    static deserializeBinaryFromReader(message: StartRecordingRequest, reader: jspb.BinaryReader): StartRecordingRequest;
}

export namespace StartRecordingRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        recordingEnvironment?: RecordingEnvironment.AsObject,
        requireFiducialsList: Array<number>,
        sessionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class StartRecordingResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StartRecordingResponse;

    hasCreatedWaypoint(): boolean;
    clearCreatedWaypoint(): void;
    getCreatedWaypoint(): bosdyn_api_graph_nav_map_pb.Waypoint | undefined;
    setCreatedWaypoint(value?: bosdyn_api_graph_nav_map_pb.Waypoint): StartRecordingResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): StartRecordingResponse;
    getStatus(): StartRecordingResponse.Status;
    setStatus(value: StartRecordingResponse.Status): StartRecordingResponse;
    clearMissingFiducialsList(): void;
    getMissingFiducialsList(): Array<number>;
    setMissingFiducialsList(value: Array<number>): StartRecordingResponse;
    addMissingFiducials(value: number, index?: number): number;
    clearBadPoseFiducialsList(): void;
    getBadPoseFiducialsList(): Array<number>;
    setBadPoseFiducialsList(value: Array<number>): StartRecordingResponse;
    addBadPoseFiducials(value: number, index?: number): number;
    getLicenseStatus(): bosdyn_api_license_pb.LicenseInfo.Status;
    setLicenseStatus(value: bosdyn_api_license_pb.LicenseInfo.Status): StartRecordingResponse;

    hasImpairedState(): boolean;
    clearImpairedState(): void;
    getImpairedState(): bosdyn_api_robot_state_pb.RobotImpairedState | undefined;
    setImpairedState(value?: bosdyn_api_robot_state_pb.RobotImpairedState): StartRecordingResponse;

    hasSessionStartTime(): boolean;
    clearSessionStartTime(): void;
    getSessionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSessionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): StartRecordingResponse;

    hasMapStats(): boolean;
    clearMapStats(): void;
    getMapStats(): bosdyn_api_graph_nav_map_pb.MapStats | undefined;
    setMapStats(value?: bosdyn_api_graph_nav_map_pb.MapStats): StartRecordingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartRecordingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartRecordingResponse): StartRecordingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartRecordingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartRecordingResponse;
    static deserializeBinaryFromReader(message: StartRecordingResponse, reader: jspb.BinaryReader): StartRecordingResponse;
}

export namespace StartRecordingResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        createdWaypoint?: bosdyn_api_graph_nav_map_pb.Waypoint.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        status: StartRecordingResponse.Status,
        missingFiducialsList: Array<number>,
        badPoseFiducialsList: Array<number>,
        licenseStatus: bosdyn_api_license_pb.LicenseInfo.Status,
        impairedState?: bosdyn_api_robot_state_pb.RobotImpairedState.AsObject,
        sessionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        mapStats?: bosdyn_api_graph_nav_map_pb.MapStats.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_COULD_NOT_CREATE_WAYPOINT = 2,
    STATUS_FOLLOWING_ROUTE = 3,
    STATUS_NOT_LOCALIZED_TO_EXISTING_MAP = 4,
    STATUS_MISSING_FIDUCIALS = 5,
    STATUS_MAP_TOO_LARGE_LICENSE = 6,
    STATUS_REMOTE_CLOUD_FAILURE_NOT_IN_DIRECTORY = 7,
    STATUS_REMOTE_CLOUD_FAILURE_NO_DATA = 8,
    STATUS_FIDUCIAL_POSE_NOT_OK = 9,
    STATUS_TOO_FAR_FROM_EXISTING_MAP = 10,
    STATUS_ROBOT_IMPAIRED = 11,
    }

}

export class StopRecordingRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StopRecordingRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): StopRecordingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRecordingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopRecordingRequest): StopRecordingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRecordingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRecordingRequest;
    static deserializeBinaryFromReader(message: StopRecordingRequest, reader: jspb.BinaryReader): StopRecordingRequest;
}

export namespace StopRecordingRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class StopRecordingResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StopRecordingResponse;
    getStatus(): StopRecordingResponse.Status;
    setStatus(value: StopRecordingResponse.Status): StopRecordingResponse;
    getErrorWaypointLocalizedId(): string;
    setErrorWaypointLocalizedId(value: string): StopRecordingResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): StopRecordingResponse;

    hasSessionStartTime(): boolean;
    clearSessionStartTime(): void;
    getSessionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSessionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): StopRecordingResponse;

    hasMapStats(): boolean;
    clearMapStats(): void;
    getMapStats(): bosdyn_api_graph_nav_map_pb.MapStats | undefined;
    setMapStats(value?: bosdyn_api_graph_nav_map_pb.MapStats): StopRecordingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRecordingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopRecordingResponse): StopRecordingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRecordingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRecordingResponse;
    static deserializeBinaryFromReader(message: StopRecordingResponse, reader: jspb.BinaryReader): StopRecordingResponse;
}

export namespace StopRecordingResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: StopRecordingResponse.Status,
        errorWaypointLocalizedId: string,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        sessionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        mapStats?: bosdyn_api_graph_nav_map_pb.MapStats.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NOT_LOCALIZED_TO_END = 2,
    STATUS_NOT_READY_YET = 3,
    }

}

export class CreateWaypointRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): CreateWaypointRequest;
    getWaypointName(): string;
    setWaypointName(value: string): CreateWaypointRequest;

    hasRecordingEnvironment(): boolean;
    clearRecordingEnvironment(): void;
    getRecordingEnvironment(): RecordingEnvironment | undefined;
    setRecordingEnvironment(value?: RecordingEnvironment): CreateWaypointRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): CreateWaypointRequest;
    clearRequireFiducialsList(): void;
    getRequireFiducialsList(): Array<number>;
    setRequireFiducialsList(value: Array<number>): CreateWaypointRequest;
    addRequireFiducials(value: number, index?: number): number;
    clearWorldObjectsList(): void;
    getWorldObjectsList(): Array<bosdyn_api_world_object_pb.WorldObject>;
    setWorldObjectsList(value: Array<bosdyn_api_world_object_pb.WorldObject>): CreateWaypointRequest;
    addWorldObjects(value?: bosdyn_api_world_object_pb.WorldObject, index?: number): bosdyn_api_world_object_pb.WorldObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWaypointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWaypointRequest): CreateWaypointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWaypointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWaypointRequest;
    static deserializeBinaryFromReader(message: CreateWaypointRequest, reader: jspb.BinaryReader): CreateWaypointRequest;
}

export namespace CreateWaypointRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        waypointName: string,
        recordingEnvironment?: RecordingEnvironment.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        requireFiducialsList: Array<number>,
        worldObjectsList: Array<bosdyn_api_world_object_pb.WorldObject.AsObject>,
    }
}

export class CreateWaypointResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): CreateWaypointResponse;

    hasCreatedWaypoint(): boolean;
    clearCreatedWaypoint(): void;
    getCreatedWaypoint(): bosdyn_api_graph_nav_map_pb.Waypoint | undefined;
    setCreatedWaypoint(value?: bosdyn_api_graph_nav_map_pb.Waypoint): CreateWaypointResponse;

    hasCreatedEdge(): boolean;
    clearCreatedEdge(): void;
    getCreatedEdge(): bosdyn_api_graph_nav_map_pb.Edge | undefined;
    setCreatedEdge(value?: bosdyn_api_graph_nav_map_pb.Edge): CreateWaypointResponse;
    getStatus(): CreateWaypointResponse.Status;
    setStatus(value: CreateWaypointResponse.Status): CreateWaypointResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): CreateWaypointResponse;
    clearMissingFiducialsList(): void;
    getMissingFiducialsList(): Array<number>;
    setMissingFiducialsList(value: Array<number>): CreateWaypointResponse;
    addMissingFiducials(value: number, index?: number): number;
    clearBadPoseFiducialsList(): void;
    getBadPoseFiducialsList(): Array<number>;
    setBadPoseFiducialsList(value: Array<number>): CreateWaypointResponse;
    addBadPoseFiducials(value: number, index?: number): number;
    getLicenseStatus(): bosdyn_api_license_pb.LicenseInfo.Status;
    setLicenseStatus(value: bosdyn_api_license_pb.LicenseInfo.Status): CreateWaypointResponse;

    hasMapStats(): boolean;
    clearMapStats(): void;
    getMapStats(): bosdyn_api_graph_nav_map_pb.MapStats | undefined;
    setMapStats(value?: bosdyn_api_graph_nav_map_pb.MapStats): CreateWaypointResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWaypointResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWaypointResponse): CreateWaypointResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWaypointResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWaypointResponse;
    static deserializeBinaryFromReader(message: CreateWaypointResponse, reader: jspb.BinaryReader): CreateWaypointResponse;
}

export namespace CreateWaypointResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        createdWaypoint?: bosdyn_api_graph_nav_map_pb.Waypoint.AsObject,
        createdEdge?: bosdyn_api_graph_nav_map_pb.Edge.AsObject,
        status: CreateWaypointResponse.Status,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        missingFiducialsList: Array<number>,
        badPoseFiducialsList: Array<number>,
        licenseStatus: bosdyn_api_license_pb.LicenseInfo.Status,
        mapStats?: bosdyn_api_graph_nav_map_pb.MapStats.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NOT_RECORDING = 2,
    STATUS_COULD_NOT_CREATE_WAYPOINT = 3,
    STATUS_MISSING_FIDUCIALS = 4,
    STATUS_MAP_TOO_LARGE_LICENSE = 5,
    STATUS_REMOTE_CLOUD_FAILURE_NOT_IN_DIRECTORY = 6,
    STATUS_REMOTE_CLOUD_FAILURE_NO_DATA = 7,
    STATUS_FIDUCIAL_POSE_NOT_OK = 8,
    }

}

export class CreateEdgeRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): CreateEdgeRequest;

    hasEdge(): boolean;
    clearEdge(): void;
    getEdge(): bosdyn_api_graph_nav_map_pb.Edge | undefined;
    setEdge(value?: bosdyn_api_graph_nav_map_pb.Edge): CreateEdgeRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): CreateEdgeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEdgeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEdgeRequest): CreateEdgeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEdgeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEdgeRequest;
    static deserializeBinaryFromReader(message: CreateEdgeRequest, reader: jspb.BinaryReader): CreateEdgeRequest;
}

export namespace CreateEdgeRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        edge?: bosdyn_api_graph_nav_map_pb.Edge.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
    }
}

export class CreateEdgeResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): CreateEdgeResponse;
    getStatus(): CreateEdgeResponse.Status;
    setStatus(value: CreateEdgeResponse.Status): CreateEdgeResponse;

    hasErrorExistingEdge(): boolean;
    clearErrorExistingEdge(): void;
    getErrorExistingEdge(): bosdyn_api_graph_nav_map_pb.Edge | undefined;
    setErrorExistingEdge(value?: bosdyn_api_graph_nav_map_pb.Edge): CreateEdgeResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): bosdyn_api_lease_pb.LeaseUseResult | undefined;
    setLeaseUseResult(value?: bosdyn_api_lease_pb.LeaseUseResult): CreateEdgeResponse;

    hasMapStats(): boolean;
    clearMapStats(): void;
    getMapStats(): bosdyn_api_graph_nav_map_pb.MapStats | undefined;
    setMapStats(value?: bosdyn_api_graph_nav_map_pb.MapStats): CreateEdgeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEdgeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEdgeResponse): CreateEdgeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEdgeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEdgeResponse;
    static deserializeBinaryFromReader(message: CreateEdgeResponse, reader: jspb.BinaryReader): CreateEdgeResponse;
}

export namespace CreateEdgeResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: CreateEdgeResponse.Status,
        errorExistingEdge?: bosdyn_api_graph_nav_map_pb.Edge.AsObject,
        leaseUseResult?: bosdyn_api_lease_pb.LeaseUseResult.AsObject,
        mapStats?: bosdyn_api_graph_nav_map_pb.MapStats.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_EXISTS = 2,
    STATUS_NOT_RECORDING = 3,
    STATUS_UNKNOWN_WAYPOINT = 4,
    STATUS_MISSING_TRANSFORM = 5,
    }

}

export class GetRecordStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetRecordStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecordStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecordStatusRequest): GetRecordStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecordStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecordStatusRequest;
    static deserializeBinaryFromReader(message: GetRecordStatusRequest, reader: jspb.BinaryReader): GetRecordStatusRequest;
}

export namespace GetRecordStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetRecordStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetRecordStatusResponse;
    getIsRecording(): boolean;
    setIsRecording(value: boolean): GetRecordStatusResponse;

    hasRecordingEnvironment(): boolean;
    clearRecordingEnvironment(): void;
    getRecordingEnvironment(): RecordingEnvironment | undefined;
    setRecordingEnvironment(value?: RecordingEnvironment): GetRecordStatusResponse;
    getMapState(): GetRecordStatusResponse.MapState;
    setMapState(value: GetRecordStatusResponse.MapState): GetRecordStatusResponse;
    getStatus(): GetRecordStatusResponse.Status;
    setStatus(value: GetRecordStatusResponse.Status): GetRecordStatusResponse;

    hasImpairedState(): boolean;
    clearImpairedState(): void;
    getImpairedState(): bosdyn_api_robot_state_pb.RobotImpairedState | undefined;
    setImpairedState(value?: bosdyn_api_robot_state_pb.RobotImpairedState): GetRecordStatusResponse;

    hasSessionStartTime(): boolean;
    clearSessionStartTime(): void;
    getSessionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSessionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): GetRecordStatusResponse;

    hasMapStats(): boolean;
    clearMapStats(): void;
    getMapStats(): bosdyn_api_graph_nav_map_pb.MapStats | undefined;
    setMapStats(value?: bosdyn_api_graph_nav_map_pb.MapStats): GetRecordStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecordStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecordStatusResponse): GetRecordStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecordStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecordStatusResponse;
    static deserializeBinaryFromReader(message: GetRecordStatusResponse, reader: jspb.BinaryReader): GetRecordStatusResponse;
}

export namespace GetRecordStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        isRecording: boolean,
        recordingEnvironment?: RecordingEnvironment.AsObject,
        mapState: GetRecordStatusResponse.MapState,
        status: GetRecordStatusResponse.Status,
        impairedState?: bosdyn_api_robot_state_pb.RobotImpairedState.AsObject,
        sessionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        mapStats?: bosdyn_api_graph_nav_map_pb.MapStats.AsObject,
    }

    export enum MapState {
    MAP_STATE_UNKNOWN = 0,
    MAP_STATE_OK = 1,
    MAP_STATE_TOO_LARGE_FOR_LICENSE = 2,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_ROBOT_IMPAIRED = 2,
    }

}
