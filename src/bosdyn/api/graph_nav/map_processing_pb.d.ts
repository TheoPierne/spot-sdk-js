// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/map_processing.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_graph_nav_map_pb from "../../../bosdyn/api/graph_nav/map_pb";

export class ProcessTopologyRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ProcessTopologyRequest;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): ProcessTopologyRequest.Params | undefined;
    setParams(value?: ProcessTopologyRequest.Params): ProcessTopologyRequest;
    getModifyMapOnServer(): boolean;
    setModifyMapOnServer(value: boolean): ProcessTopologyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessTopologyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessTopologyRequest): ProcessTopologyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessTopologyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessTopologyRequest;
    static deserializeBinaryFromReader(message: ProcessTopologyRequest, reader: jspb.BinaryReader): ProcessTopologyRequest;
}

export namespace ProcessTopologyRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        params?: ProcessTopologyRequest.Params.AsObject,
        modifyMapOnServer: boolean,
    }


    export class ICPParams extends jspb.Message { 

        hasIcpIters(): boolean;
        clearIcpIters(): void;
        getIcpIters(): google_protobuf_wrappers_pb.Int32Value | undefined;
        setIcpIters(value?: google_protobuf_wrappers_pb.Int32Value): ICPParams;

        hasMaxPointMatchDistance(): boolean;
        clearMaxPointMatchDistance(): void;
        getMaxPointMatchDistance(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxPointMatchDistance(value?: google_protobuf_wrappers_pb.DoubleValue): ICPParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ICPParams.AsObject;
        static toObject(includeInstance: boolean, msg: ICPParams): ICPParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ICPParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ICPParams;
        static deserializeBinaryFromReader(message: ICPParams, reader: jspb.BinaryReader): ICPParams;
    }

    export namespace ICPParams {
        export type AsObject = {
            icpIters?: google_protobuf_wrappers_pb.Int32Value.AsObject,
            maxPointMatchDistance?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        }
    }

    export class FeatureMatchingParams extends jspb.Message { 

        hasDoFeatureMatching(): boolean;
        clearDoFeatureMatching(): void;
        getDoFeatureMatching(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setDoFeatureMatching(value?: google_protobuf_wrappers_pb.BoolValue): FeatureMatchingParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FeatureMatchingParams.AsObject;
        static toObject(includeInstance: boolean, msg: FeatureMatchingParams): FeatureMatchingParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FeatureMatchingParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FeatureMatchingParams;
        static deserializeBinaryFromReader(message: FeatureMatchingParams, reader: jspb.BinaryReader): FeatureMatchingParams;
    }

    export namespace FeatureMatchingParams {
        export type AsObject = {
            doFeatureMatching?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }
    }

    export class OdometryLoopClosureParams extends jspb.Message { 

        hasMaxLoopClosurePathLength(): boolean;
        clearMaxLoopClosurePathLength(): void;
        getMaxLoopClosurePathLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxLoopClosurePathLength(value?: google_protobuf_wrappers_pb.DoubleValue): OdometryLoopClosureParams;

        hasMinLoopClosurePathLength(): boolean;
        clearMinLoopClosurePathLength(): void;
        getMinLoopClosurePathLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMinLoopClosurePathLength(value?: google_protobuf_wrappers_pb.DoubleValue): OdometryLoopClosureParams;

        hasMaxLoopClosureHeightChange(): boolean;
        clearMaxLoopClosureHeightChange(): void;
        getMaxLoopClosureHeightChange(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxLoopClosureHeightChange(value?: google_protobuf_wrappers_pb.DoubleValue): OdometryLoopClosureParams;

        hasMaxLoopClosureEdgeLength(): boolean;
        clearMaxLoopClosureEdgeLength(): void;
        getMaxLoopClosureEdgeLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxLoopClosureEdgeLength(value?: google_protobuf_wrappers_pb.DoubleValue): OdometryLoopClosureParams;

        hasNumExtraLoopClosureIterations(): boolean;
        clearNumExtraLoopClosureIterations(): void;
        getNumExtraLoopClosureIterations(): google_protobuf_wrappers_pb.Int32Value | undefined;
        setNumExtraLoopClosureIterations(value?: google_protobuf_wrappers_pb.Int32Value): OdometryLoopClosureParams;

        hasPruneEdges(): boolean;
        clearPruneEdges(): void;
        getPruneEdges(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setPruneEdges(value?: google_protobuf_wrappers_pb.BoolValue): OdometryLoopClosureParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OdometryLoopClosureParams.AsObject;
        static toObject(includeInstance: boolean, msg: OdometryLoopClosureParams): OdometryLoopClosureParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OdometryLoopClosureParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OdometryLoopClosureParams;
        static deserializeBinaryFromReader(message: OdometryLoopClosureParams, reader: jspb.BinaryReader): OdometryLoopClosureParams;
    }

    export namespace OdometryLoopClosureParams {
        export type AsObject = {
            maxLoopClosurePathLength?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            minLoopClosurePathLength?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxLoopClosureHeightChange?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxLoopClosureEdgeLength?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            numExtraLoopClosureIterations?: google_protobuf_wrappers_pb.Int32Value.AsObject,
            pruneEdges?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }
    }

    export class FiducialLoopClosureParams extends jspb.Message { 

        hasMinLoopClosurePathLength(): boolean;
        clearMinLoopClosurePathLength(): void;
        getMinLoopClosurePathLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMinLoopClosurePathLength(value?: google_protobuf_wrappers_pb.DoubleValue): FiducialLoopClosureParams;

        hasMaxLoopClosureEdgeLength(): boolean;
        clearMaxLoopClosureEdgeLength(): void;
        getMaxLoopClosureEdgeLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxLoopClosureEdgeLength(value?: google_protobuf_wrappers_pb.DoubleValue): FiducialLoopClosureParams;

        hasMaxFiducialDistance(): boolean;
        clearMaxFiducialDistance(): void;
        getMaxFiducialDistance(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxFiducialDistance(value?: google_protobuf_wrappers_pb.DoubleValue): FiducialLoopClosureParams;

        hasMaxLoopClosureHeightChange(): boolean;
        clearMaxLoopClosureHeightChange(): void;
        getMaxLoopClosureHeightChange(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxLoopClosureHeightChange(value?: google_protobuf_wrappers_pb.DoubleValue): FiducialLoopClosureParams;

        hasPruneEdges(): boolean;
        clearPruneEdges(): void;
        getPruneEdges(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setPruneEdges(value?: google_protobuf_wrappers_pb.BoolValue): FiducialLoopClosureParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FiducialLoopClosureParams.AsObject;
        static toObject(includeInstance: boolean, msg: FiducialLoopClosureParams): FiducialLoopClosureParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FiducialLoopClosureParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FiducialLoopClosureParams;
        static deserializeBinaryFromReader(message: FiducialLoopClosureParams, reader: jspb.BinaryReader): FiducialLoopClosureParams;
    }

    export namespace FiducialLoopClosureParams {
        export type AsObject = {
            minLoopClosurePathLength?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxLoopClosureEdgeLength?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxFiducialDistance?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxLoopClosureHeightChange?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            pruneEdges?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }
    }

    export class CollisionCheckingParams extends jspb.Message { 

        hasCheckEdgesForCollision(): boolean;
        clearCheckEdgesForCollision(): void;
        getCheckEdgesForCollision(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setCheckEdgesForCollision(value?: google_protobuf_wrappers_pb.BoolValue): CollisionCheckingParams;

        hasCollisionCheckRobotRadius(): boolean;
        clearCollisionCheckRobotRadius(): void;
        getCollisionCheckRobotRadius(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setCollisionCheckRobotRadius(value?: google_protobuf_wrappers_pb.DoubleValue): CollisionCheckingParams;

        hasCollisionCheckHeightVariation(): boolean;
        clearCollisionCheckHeightVariation(): void;
        getCollisionCheckHeightVariation(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setCollisionCheckHeightVariation(value?: google_protobuf_wrappers_pb.DoubleValue): CollisionCheckingParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CollisionCheckingParams.AsObject;
        static toObject(includeInstance: boolean, msg: CollisionCheckingParams): CollisionCheckingParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CollisionCheckingParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CollisionCheckingParams;
        static deserializeBinaryFromReader(message: CollisionCheckingParams, reader: jspb.BinaryReader): CollisionCheckingParams;
    }

    export namespace CollisionCheckingParams {
        export type AsObject = {
            checkEdgesForCollision?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            collisionCheckRobotRadius?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            collisionCheckHeightVariation?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        }
    }

    export class Params extends jspb.Message { 

        hasDoOdometryLoopClosure(): boolean;
        clearDoOdometryLoopClosure(): void;
        getDoOdometryLoopClosure(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setDoOdometryLoopClosure(value?: google_protobuf_wrappers_pb.BoolValue): Params;

        hasOdometryLoopClosureParams(): boolean;
        clearOdometryLoopClosureParams(): void;
        getOdometryLoopClosureParams(): ProcessTopologyRequest.OdometryLoopClosureParams | undefined;
        setOdometryLoopClosureParams(value?: ProcessTopologyRequest.OdometryLoopClosureParams): Params;

        hasIcpParams(): boolean;
        clearIcpParams(): void;
        getIcpParams(): ProcessTopologyRequest.ICPParams | undefined;
        setIcpParams(value?: ProcessTopologyRequest.ICPParams): Params;

        hasDoFiducialLoopClosure(): boolean;
        clearDoFiducialLoopClosure(): void;
        getDoFiducialLoopClosure(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setDoFiducialLoopClosure(value?: google_protobuf_wrappers_pb.BoolValue): Params;

        hasFiducialLoopClosureParams(): boolean;
        clearFiducialLoopClosureParams(): void;
        getFiducialLoopClosureParams(): ProcessTopologyRequest.FiducialLoopClosureParams | undefined;
        setFiducialLoopClosureParams(value?: ProcessTopologyRequest.FiducialLoopClosureParams): Params;

        hasCollisionCheckParams(): boolean;
        clearCollisionCheckParams(): void;
        getCollisionCheckParams(): ProcessTopologyRequest.CollisionCheckingParams | undefined;
        setCollisionCheckParams(value?: ProcessTopologyRequest.CollisionCheckingParams): Params;
        getTimeoutSeconds(): number;
        setTimeoutSeconds(value: number): Params;

        hasFeatureMatchingParams(): boolean;
        clearFeatureMatchingParams(): void;
        getFeatureMatchingParams(): ProcessTopologyRequest.FeatureMatchingParams | undefined;
        setFeatureMatchingParams(value?: ProcessTopologyRequest.FeatureMatchingParams): Params;

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
            doOdometryLoopClosure?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            odometryLoopClosureParams?: ProcessTopologyRequest.OdometryLoopClosureParams.AsObject,
            icpParams?: ProcessTopologyRequest.ICPParams.AsObject,
            doFiducialLoopClosure?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            fiducialLoopClosureParams?: ProcessTopologyRequest.FiducialLoopClosureParams.AsObject,
            collisionCheckParams?: ProcessTopologyRequest.CollisionCheckingParams.AsObject,
            timeoutSeconds: number,
            featureMatchingParams?: ProcessTopologyRequest.FeatureMatchingParams.AsObject,
        }
    }

}

export class ProcessTopologyResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ProcessTopologyResponse;
    getStatus(): ProcessTopologyResponse.Status;
    setStatus(value: ProcessTopologyResponse.Status): ProcessTopologyResponse;

    hasNewSubgraph(): boolean;
    clearNewSubgraph(): void;
    getNewSubgraph(): bosdyn_api_graph_nav_map_pb.Graph | undefined;
    setNewSubgraph(value?: bosdyn_api_graph_nav_map_pb.Graph): ProcessTopologyResponse;
    getMapOnServerWasModified(): boolean;
    setMapOnServerWasModified(value: boolean): ProcessTopologyResponse;
    clearMissingSnapshotIdsList(): void;
    getMissingSnapshotIdsList(): Array<string>;
    setMissingSnapshotIdsList(value: Array<string>): ProcessTopologyResponse;
    addMissingSnapshotIds(value: string, index?: number): string;
    clearMissingWaypointIdsList(): void;
    getMissingWaypointIdsList(): Array<string>;
    setMissingWaypointIdsList(value: Array<string>): ProcessTopologyResponse;
    addMissingWaypointIds(value: string, index?: number): string;
    getTimedOut(): boolean;
    setTimedOut(value: boolean): ProcessTopologyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessTopologyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessTopologyResponse): ProcessTopologyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessTopologyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessTopologyResponse;
    static deserializeBinaryFromReader(message: ProcessTopologyResponse, reader: jspb.BinaryReader): ProcessTopologyResponse;
}

export namespace ProcessTopologyResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ProcessTopologyResponse.Status,
        newSubgraph?: bosdyn_api_graph_nav_map_pb.Graph.AsObject,
        mapOnServerWasModified: boolean,
        missingSnapshotIdsList: Array<string>,
        missingWaypointIdsList: Array<string>,
        timedOut: boolean,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_MISSING_WAYPOINT_SNAPSHOTS = 2,
    STATUS_INVALID_GRAPH = 3,
    STATUS_MAP_MODIFIED_DURING_PROCESSING = 4,
    }

}

export class PoseBounds extends jspb.Message { 
    getXBounds(): number;
    setXBounds(value: number): PoseBounds;
    getYBounds(): number;
    setYBounds(value: number): PoseBounds;
    getZBounds(): number;
    setZBounds(value: number): PoseBounds;
    getYawBounds(): number;
    setYawBounds(value: number): PoseBounds;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PoseBounds.AsObject;
    static toObject(includeInstance: boolean, msg: PoseBounds): PoseBounds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PoseBounds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PoseBounds;
    static deserializeBinaryFromReader(message: PoseBounds, reader: jspb.BinaryReader): PoseBounds;
}

export namespace PoseBounds {
    export type AsObject = {
        xBounds: number,
        yBounds: number,
        zBounds: number,
        yawBounds: number,
    }
}

export class AnchorHintUncertainty extends jspb.Message { 

    hasSe3Covariance(): boolean;
    clearSe3Covariance(): void;
    getSe3Covariance(): bosdyn_api_geometry_pb.SE3Covariance | undefined;
    setSe3Covariance(value?: bosdyn_api_geometry_pb.SE3Covariance): AnchorHintUncertainty;

    hasConfidenceBounds(): boolean;
    clearConfidenceBounds(): void;
    getConfidenceBounds(): PoseBounds | undefined;
    setConfidenceBounds(value?: PoseBounds): AnchorHintUncertainty;

    getUncertaintyCase(): AnchorHintUncertainty.UncertaintyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnchorHintUncertainty.AsObject;
    static toObject(includeInstance: boolean, msg: AnchorHintUncertainty): AnchorHintUncertainty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnchorHintUncertainty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnchorHintUncertainty;
    static deserializeBinaryFromReader(message: AnchorHintUncertainty, reader: jspb.BinaryReader): AnchorHintUncertainty;
}

export namespace AnchorHintUncertainty {
    export type AsObject = {
        se3Covariance?: bosdyn_api_geometry_pb.SE3Covariance.AsObject,
        confidenceBounds?: PoseBounds.AsObject,
    }

    export enum UncertaintyCase {
        UNCERTAINTY_NOT_SET = 0,
        SE3_COVARIANCE = 1,
        CONFIDENCE_BOUNDS = 2,
    }

}

export class WaypointAnchorHint extends jspb.Message { 

    hasWaypointAnchor(): boolean;
    clearWaypointAnchor(): void;
    getWaypointAnchor(): bosdyn_api_graph_nav_map_pb.Anchor | undefined;
    setWaypointAnchor(value?: bosdyn_api_graph_nav_map_pb.Anchor): WaypointAnchorHint;

    hasSeedTformWaypointUncertainty(): boolean;
    clearSeedTformWaypointUncertainty(): void;
    getSeedTformWaypointUncertainty(): AnchorHintUncertainty | undefined;
    setSeedTformWaypointUncertainty(value?: AnchorHintUncertainty): WaypointAnchorHint;

    hasSeedTformWaypointConstraint(): boolean;
    clearSeedTformWaypointConstraint(): void;
    getSeedTformWaypointConstraint(): PoseBounds | undefined;
    setSeedTformWaypointConstraint(value?: PoseBounds): WaypointAnchorHint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaypointAnchorHint.AsObject;
    static toObject(includeInstance: boolean, msg: WaypointAnchorHint): WaypointAnchorHint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaypointAnchorHint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaypointAnchorHint;
    static deserializeBinaryFromReader(message: WaypointAnchorHint, reader: jspb.BinaryReader): WaypointAnchorHint;
}

export namespace WaypointAnchorHint {
    export type AsObject = {
        waypointAnchor?: bosdyn_api_graph_nav_map_pb.Anchor.AsObject,
        seedTformWaypointUncertainty?: AnchorHintUncertainty.AsObject,
        seedTformWaypointConstraint?: PoseBounds.AsObject,
    }
}

export class WorldObjectAnchorHint extends jspb.Message { 

    hasObjectAnchor(): boolean;
    clearObjectAnchor(): void;
    getObjectAnchor(): bosdyn_api_graph_nav_map_pb.AnchoredWorldObject | undefined;
    setObjectAnchor(value?: bosdyn_api_graph_nav_map_pb.AnchoredWorldObject): WorldObjectAnchorHint;

    hasSeedTformObjectUncertainty(): boolean;
    clearSeedTformObjectUncertainty(): void;
    getSeedTformObjectUncertainty(): AnchorHintUncertainty | undefined;
    setSeedTformObjectUncertainty(value?: AnchorHintUncertainty): WorldObjectAnchorHint;

    hasSeedTformObjectConstraint(): boolean;
    clearSeedTformObjectConstraint(): void;
    getSeedTformObjectConstraint(): PoseBounds | undefined;
    setSeedTformObjectConstraint(value?: PoseBounds): WorldObjectAnchorHint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorldObjectAnchorHint.AsObject;
    static toObject(includeInstance: boolean, msg: WorldObjectAnchorHint): WorldObjectAnchorHint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorldObjectAnchorHint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorldObjectAnchorHint;
    static deserializeBinaryFromReader(message: WorldObjectAnchorHint, reader: jspb.BinaryReader): WorldObjectAnchorHint;
}

export namespace WorldObjectAnchorHint {
    export type AsObject = {
        objectAnchor?: bosdyn_api_graph_nav_map_pb.AnchoredWorldObject.AsObject,
        seedTformObjectUncertainty?: AnchorHintUncertainty.AsObject,
        seedTformObjectConstraint?: PoseBounds.AsObject,
    }
}

export class AnchoringHint extends jspb.Message { 
    clearWaypointAnchorsList(): void;
    getWaypointAnchorsList(): Array<WaypointAnchorHint>;
    setWaypointAnchorsList(value: Array<WaypointAnchorHint>): AnchoringHint;
    addWaypointAnchors(value?: WaypointAnchorHint, index?: number): WaypointAnchorHint;
    clearWorldObjectsList(): void;
    getWorldObjectsList(): Array<WorldObjectAnchorHint>;
    setWorldObjectsList(value: Array<WorldObjectAnchorHint>): AnchoringHint;
    addWorldObjects(value?: WorldObjectAnchorHint, index?: number): WorldObjectAnchorHint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnchoringHint.AsObject;
    static toObject(includeInstance: boolean, msg: AnchoringHint): AnchoringHint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnchoringHint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnchoringHint;
    static deserializeBinaryFromReader(message: AnchoringHint, reader: jspb.BinaryReader): AnchoringHint;
}

export namespace AnchoringHint {
    export type AsObject = {
        waypointAnchorsList: Array<WaypointAnchorHint.AsObject>,
        worldObjectsList: Array<WorldObjectAnchorHint.AsObject>,
    }
}

export class ProcessAnchoringRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ProcessAnchoringRequest;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): ProcessAnchoringRequest.Params | undefined;
    setParams(value?: ProcessAnchoringRequest.Params): ProcessAnchoringRequest;

    hasInitialHint(): boolean;
    clearInitialHint(): void;
    getInitialHint(): AnchoringHint | undefined;
    setInitialHint(value?: AnchoringHint): ProcessAnchoringRequest;
    getModifyAnchoringOnServer(): boolean;
    setModifyAnchoringOnServer(value: boolean): ProcessAnchoringRequest;
    getStreamIntermediateResults(): boolean;
    setStreamIntermediateResults(value: boolean): ProcessAnchoringRequest;
    getApplyGpsResultToWaypointsOnServer(): boolean;
    setApplyGpsResultToWaypointsOnServer(value: boolean): ProcessAnchoringRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessAnchoringRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessAnchoringRequest): ProcessAnchoringRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessAnchoringRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessAnchoringRequest;
    static deserializeBinaryFromReader(message: ProcessAnchoringRequest, reader: jspb.BinaryReader): ProcessAnchoringRequest;
}

export namespace ProcessAnchoringRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        params?: ProcessAnchoringRequest.Params.AsObject,
        initialHint?: AnchoringHint.AsObject,
        modifyAnchoringOnServer: boolean,
        streamIntermediateResults: boolean,
        applyGpsResultToWaypointsOnServer: boolean,
    }


    export class Params extends jspb.Message { 

        hasOptimizerParams(): boolean;
        clearOptimizerParams(): void;
        getOptimizerParams(): ProcessAnchoringRequest.Params.OptimizerParams | undefined;
        setOptimizerParams(value?: ProcessAnchoringRequest.Params.OptimizerParams): Params;

        hasMeasurementParams(): boolean;
        clearMeasurementParams(): void;
        getMeasurementParams(): ProcessAnchoringRequest.Params.MeasurementParams | undefined;
        setMeasurementParams(value?: ProcessAnchoringRequest.Params.MeasurementParams): Params;

        hasWeights(): boolean;
        clearWeights(): void;
        getWeights(): ProcessAnchoringRequest.Params.Weights | undefined;
        setWeights(value?: ProcessAnchoringRequest.Params.Weights): Params;

        hasOptimizeExistingAnchoring(): boolean;
        clearOptimizeExistingAnchoring(): void;
        getOptimizeExistingAnchoring(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setOptimizeExistingAnchoring(value?: google_protobuf_wrappers_pb.BoolValue): Params;

        hasGravityEwrtSeed(): boolean;
        clearGravityEwrtSeed(): void;
        getGravityEwrtSeed(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setGravityEwrtSeed(value?: bosdyn_api_geometry_pb.Vec3): Params;

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
            optimizerParams?: ProcessAnchoringRequest.Params.OptimizerParams.AsObject,
            measurementParams?: ProcessAnchoringRequest.Params.MeasurementParams.AsObject,
            weights?: ProcessAnchoringRequest.Params.Weights.AsObject,
            optimizeExistingAnchoring?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            gravityEwrtSeed?: bosdyn_api_geometry_pb.Vec3.AsObject,
        }


        export class OptimizerParams extends jspb.Message { 

            hasMaxIters(): boolean;
            clearMaxIters(): void;
            getMaxIters(): google_protobuf_wrappers_pb.Int32Value | undefined;
            setMaxIters(value?: google_protobuf_wrappers_pb.Int32Value): OptimizerParams;

            hasMaxTimeSeconds(): boolean;
            clearMaxTimeSeconds(): void;
            getMaxTimeSeconds(): google_protobuf_wrappers_pb.DoubleValue | undefined;
            setMaxTimeSeconds(value?: google_protobuf_wrappers_pb.DoubleValue): OptimizerParams;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): OptimizerParams.AsObject;
            static toObject(includeInstance: boolean, msg: OptimizerParams): OptimizerParams.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: OptimizerParams, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): OptimizerParams;
            static deserializeBinaryFromReader(message: OptimizerParams, reader: jspb.BinaryReader): OptimizerParams;
        }

        export namespace OptimizerParams {
            export type AsObject = {
                maxIters?: google_protobuf_wrappers_pb.Int32Value.AsObject,
                maxTimeSeconds?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            }
        }

        export class MeasurementParams extends jspb.Message { 

            hasUseKinematicOdometry(): boolean;
            clearUseKinematicOdometry(): void;
            getUseKinematicOdometry(): google_protobuf_wrappers_pb.BoolValue | undefined;
            setUseKinematicOdometry(value?: google_protobuf_wrappers_pb.BoolValue): MeasurementParams;

            hasUseVisualOdometry(): boolean;
            clearUseVisualOdometry(): void;
            getUseVisualOdometry(): google_protobuf_wrappers_pb.BoolValue | undefined;
            setUseVisualOdometry(value?: google_protobuf_wrappers_pb.BoolValue): MeasurementParams;

            hasUseGyroscopeMeasurements(): boolean;
            clearUseGyroscopeMeasurements(): void;
            getUseGyroscopeMeasurements(): google_protobuf_wrappers_pb.BoolValue | undefined;
            setUseGyroscopeMeasurements(value?: google_protobuf_wrappers_pb.BoolValue): MeasurementParams;

            hasUseLoopClosures(): boolean;
            clearUseLoopClosures(): void;
            getUseLoopClosures(): google_protobuf_wrappers_pb.BoolValue | undefined;
            setUseLoopClosures(value?: google_protobuf_wrappers_pb.BoolValue): MeasurementParams;

            hasUseWorldObjects(): boolean;
            clearUseWorldObjects(): void;
            getUseWorldObjects(): google_protobuf_wrappers_pb.BoolValue | undefined;
            setUseWorldObjects(value?: google_protobuf_wrappers_pb.BoolValue): MeasurementParams;

            hasUseGps(): boolean;
            clearUseGps(): void;
            getUseGps(): google_protobuf_wrappers_pb.BoolValue | undefined;
            setUseGps(value?: google_protobuf_wrappers_pb.BoolValue): MeasurementParams;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): MeasurementParams.AsObject;
            static toObject(includeInstance: boolean, msg: MeasurementParams): MeasurementParams.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: MeasurementParams, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): MeasurementParams;
            static deserializeBinaryFromReader(message: MeasurementParams, reader: jspb.BinaryReader): MeasurementParams;
        }

        export namespace MeasurementParams {
            export type AsObject = {
                useKinematicOdometry?: google_protobuf_wrappers_pb.BoolValue.AsObject,
                useVisualOdometry?: google_protobuf_wrappers_pb.BoolValue.AsObject,
                useGyroscopeMeasurements?: google_protobuf_wrappers_pb.BoolValue.AsObject,
                useLoopClosures?: google_protobuf_wrappers_pb.BoolValue.AsObject,
                useWorldObjects?: google_protobuf_wrappers_pb.BoolValue.AsObject,
                useGps?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            }
        }

        export class Weights extends jspb.Message { 
            getKinematicOdometryWeight(): number;
            setKinematicOdometryWeight(value: number): Weights;
            getVisualOdometryWeight(): number;
            setVisualOdometryWeight(value: number): Weights;
            getWorldObjectWeight(): number;
            setWorldObjectWeight(value: number): Weights;
            getHintWeight(): number;
            setHintWeight(value: number): Weights;
            getGyroscopeWeight(): number;
            setGyroscopeWeight(value: number): Weights;
            getLoopClosureWeight(): number;
            setLoopClosureWeight(value: number): Weights;
            getGpsWeight(): number;
            setGpsWeight(value: number): Weights;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Weights.AsObject;
            static toObject(includeInstance: boolean, msg: Weights): Weights.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Weights, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Weights;
            static deserializeBinaryFromReader(message: Weights, reader: jspb.BinaryReader): Weights;
        }

        export namespace Weights {
            export type AsObject = {
                kinematicOdometryWeight: number,
                visualOdometryWeight: number,
                worldObjectWeight: number,
                hintWeight: number,
                gyroscopeWeight: number,
                loopClosureWeight: number,
                gpsWeight: number,
            }
        }

    }

}

export class ProcessAnchoringResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ProcessAnchoringResponse;
    getStatus(): ProcessAnchoringResponse.Status;
    setStatus(value: ProcessAnchoringResponse.Status): ProcessAnchoringResponse;
    clearWaypointResultsList(): void;
    getWaypointResultsList(): Array<bosdyn_api_graph_nav_map_pb.Anchor>;
    setWaypointResultsList(value: Array<bosdyn_api_graph_nav_map_pb.Anchor>): ProcessAnchoringResponse;
    addWaypointResults(value?: bosdyn_api_graph_nav_map_pb.Anchor, index?: number): bosdyn_api_graph_nav_map_pb.Anchor;
    clearWorldObjectResultsList(): void;
    getWorldObjectResultsList(): Array<bosdyn_api_graph_nav_map_pb.AnchoredWorldObject>;
    setWorldObjectResultsList(value: Array<bosdyn_api_graph_nav_map_pb.AnchoredWorldObject>): ProcessAnchoringResponse;
    addWorldObjectResults(value?: bosdyn_api_graph_nav_map_pb.AnchoredWorldObject, index?: number): bosdyn_api_graph_nav_map_pb.AnchoredWorldObject;
    getAnchoringOnServerWasModified(): boolean;
    setAnchoringOnServerWasModified(value: boolean): ProcessAnchoringResponse;
    getIteration(): number;
    setIteration(value: number): ProcessAnchoringResponse;
    getCost(): number;
    setCost(value: number): ProcessAnchoringResponse;
    getFinalIteration(): boolean;
    setFinalIteration(value: boolean): ProcessAnchoringResponse;
    clearViolatedWaypointConstraintsList(): void;
    getViolatedWaypointConstraintsList(): Array<WaypointAnchorHint>;
    setViolatedWaypointConstraintsList(value: Array<WaypointAnchorHint>): ProcessAnchoringResponse;
    addViolatedWaypointConstraints(value?: WaypointAnchorHint, index?: number): WaypointAnchorHint;
    clearViolatedObjectConstraintsList(): void;
    getViolatedObjectConstraintsList(): Array<WorldObjectAnchorHint>;
    setViolatedObjectConstraintsList(value: Array<WorldObjectAnchorHint>): ProcessAnchoringResponse;
    addViolatedObjectConstraints(value?: WorldObjectAnchorHint, index?: number): WorldObjectAnchorHint;
    clearMissingSnapshotIdsList(): void;
    getMissingSnapshotIdsList(): Array<string>;
    setMissingSnapshotIdsList(value: Array<string>): ProcessAnchoringResponse;
    addMissingSnapshotIds(value: string, index?: number): string;
    clearMissingWaypointIdsList(): void;
    getMissingWaypointIdsList(): Array<string>;
    setMissingWaypointIdsList(value: Array<string>): ProcessAnchoringResponse;
    addMissingWaypointIds(value: string, index?: number): string;
    clearInvalidHintsList(): void;
    getInvalidHintsList(): Array<string>;
    setInvalidHintsList(value: Array<string>): ProcessAnchoringResponse;
    addInvalidHints(value: string, index?: number): string;
    clearInconsistentEdgesList(): void;
    getInconsistentEdgesList(): Array<bosdyn_api_graph_nav_map_pb.Edge.Id>;
    setInconsistentEdgesList(value: Array<bosdyn_api_graph_nav_map_pb.Edge.Id>): ProcessAnchoringResponse;
    addInconsistentEdges(value?: bosdyn_api_graph_nav_map_pb.Edge.Id, index?: number): bosdyn_api_graph_nav_map_pb.Edge.Id;

    hasGpsResult(): boolean;
    clearGpsResult(): void;
    getGpsResult(): ProcessAnchoringResponse.GPSResult | undefined;
    setGpsResult(value?: ProcessAnchoringResponse.GPSResult): ProcessAnchoringResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessAnchoringResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessAnchoringResponse): ProcessAnchoringResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessAnchoringResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessAnchoringResponse;
    static deserializeBinaryFromReader(message: ProcessAnchoringResponse, reader: jspb.BinaryReader): ProcessAnchoringResponse;
}

export namespace ProcessAnchoringResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ProcessAnchoringResponse.Status,
        waypointResultsList: Array<bosdyn_api_graph_nav_map_pb.Anchor.AsObject>,
        worldObjectResultsList: Array<bosdyn_api_graph_nav_map_pb.AnchoredWorldObject.AsObject>,
        anchoringOnServerWasModified: boolean,
        iteration: number,
        cost: number,
        finalIteration: boolean,
        violatedWaypointConstraintsList: Array<WaypointAnchorHint.AsObject>,
        violatedObjectConstraintsList: Array<WorldObjectAnchorHint.AsObject>,
        missingSnapshotIdsList: Array<string>,
        missingWaypointIdsList: Array<string>,
        invalidHintsList: Array<string>,
        inconsistentEdgesList: Array<bosdyn_api_graph_nav_map_pb.Edge.Id.AsObject>,
        gpsResult?: ProcessAnchoringResponse.GPSResult.AsObject,
    }


    export class GPSResult extends jspb.Message { 
        getStatus(): ProcessAnchoringResponse.GPSResult.GPSStatus;
        setStatus(value: ProcessAnchoringResponse.GPSResult.GPSStatus): GPSResult;

        hasEcefTformSeed(): boolean;
        clearEcefTformSeed(): void;
        getEcefTformSeed(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setEcefTformSeed(value?: bosdyn_api_geometry_pb.SE3Pose): GPSResult;
        getNumMeasurementsUsed(): number;
        setNumMeasurementsUsed(value: number): GPSResult;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GPSResult.AsObject;
        static toObject(includeInstance: boolean, msg: GPSResult): GPSResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GPSResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GPSResult;
        static deserializeBinaryFromReader(message: GPSResult, reader: jspb.BinaryReader): GPSResult;
    }

    export namespace GPSResult {
        export type AsObject = {
            status: ProcessAnchoringResponse.GPSResult.GPSStatus,
            ecefTformSeed?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            numMeasurementsUsed: number,
        }

        export enum GPSStatus {
    GPS_STATUS_UNKNOWN = 0,
    GPS_STATUS_OK = 1,
    GPS_STATUS_NOT_ENOUGH_MEASUREMENTS = 2,
        }

    }


    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_MISSING_WAYPOINT_SNAPSHOTS = 2,
    STATUS_INVALID_GRAPH = 3,
    STATUS_OPTIMIZATION_FAILURE = 4,
    STATUS_INVALID_PARAMS = 5,
    STATUS_CONSTRAINT_VIOLATION = 6,
    STATUS_MAX_ITERATIONS = 7,
    STATUS_MAX_TIME = 8,
    STATUS_INVALID_HINTS = 9,
    STATUS_MAP_MODIFIED_DURING_PROCESSING = 10,
    STATUS_INVALID_GRAVITY_ALIGNMENT = 11,
    }

}
