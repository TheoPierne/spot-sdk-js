// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/nav.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_graph_nav_map_pb from "../../../bosdyn/api/graph_nav/map_pb";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Route extends jspb.Message { 
    clearWaypointIdList(): void;
    getWaypointIdList(): Array<string>;
    setWaypointIdList(value: Array<string>): Route;
    addWaypointId(value: string, index?: number): string;
    clearEdgeIdList(): void;
    getEdgeIdList(): Array<bosdyn_api_graph_nav_map_pb.Edge.Id>;
    setEdgeIdList(value: Array<bosdyn_api_graph_nav_map_pb.Edge.Id>): Route;
    addEdgeId(value?: bosdyn_api_graph_nav_map_pb.Edge.Id, index?: number): bosdyn_api_graph_nav_map_pb.Edge.Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Route.AsObject;
    static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Route;
    static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
    export type AsObject = {
        waypointIdList: Array<string>,
        edgeIdList: Array<bosdyn_api_graph_nav_map_pb.Edge.Id.AsObject>,
    }
}

export class CompletedRoute extends jspb.Message { 
    clearWaypointIdsList(): void;
    getWaypointIdsList(): Array<string>;
    setWaypointIdsList(value: Array<string>): CompletedRoute;
    addWaypointIds(value: string, index?: number): string;
    clearEdgesList(): void;
    getEdgesList(): Array<CompletedRoute.CompletedEdge>;
    setEdgesList(value: Array<CompletedRoute.CompletedEdge>): CompletedRoute;
    addEdges(value?: CompletedRoute.CompletedEdge, index?: number): CompletedRoute.CompletedEdge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompletedRoute.AsObject;
    static toObject(includeInstance: boolean, msg: CompletedRoute): CompletedRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompletedRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompletedRoute;
    static deserializeBinaryFromReader(message: CompletedRoute, reader: jspb.BinaryReader): CompletedRoute;
}

export namespace CompletedRoute {
    export type AsObject = {
        waypointIdsList: Array<string>,
        edgesList: Array<CompletedRoute.CompletedEdge.AsObject>,
    }


    export class CompletedEdge extends jspb.Message { 

        hasEdgeId(): boolean;
        clearEdgeId(): void;
        getEdgeId(): bosdyn_api_graph_nav_map_pb.Edge.Id | undefined;
        setEdgeId(value?: bosdyn_api_graph_nav_map_pb.Edge.Id): CompletedEdge;
        getNotInMap(): boolean;
        setNotInMap(value: boolean): CompletedEdge;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CompletedEdge.AsObject;
        static toObject(includeInstance: boolean, msg: CompletedEdge): CompletedEdge.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CompletedEdge, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CompletedEdge;
        static deserializeBinaryFromReader(message: CompletedEdge, reader: jspb.BinaryReader): CompletedEdge;
    }

    export namespace CompletedEdge {
        export type AsObject = {
            edgeId?: bosdyn_api_graph_nav_map_pb.Edge.Id.AsObject,
            notInMap: boolean,
        }
    }

}

export class Localization extends jspb.Message { 
    getWaypointId(): string;
    setWaypointId(value: string): Localization;

    hasWaypointTformBody(): boolean;
    clearWaypointTformBody(): void;
    getWaypointTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setWaypointTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): Localization;

    hasSeedTformBody(): boolean;
    clearSeedTformBody(): void;
    getSeedTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setSeedTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): Localization;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Localization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Localization.AsObject;
    static toObject(includeInstance: boolean, msg: Localization): Localization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Localization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Localization;
    static deserializeBinaryFromReader(message: Localization, reader: jspb.BinaryReader): Localization;
}

export namespace Localization {
    export type AsObject = {
        waypointId: string,
        waypointTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        seedTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
