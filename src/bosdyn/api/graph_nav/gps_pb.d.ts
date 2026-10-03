// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/gps.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_gps_gps_pb from "../../../bosdyn/api/gps/gps_pb";

export class GPSLocalization extends jspb.Message { 
    getLiveGpsState(): GPSLocalization.State;
    setLiveGpsState(value: GPSLocalization.State): GPSLocalization;
    getMapGpsState(): GPSLocalization.State;
    setMapGpsState(value: GPSLocalization.State): GPSLocalization;

    hasEcefTformBody(): boolean;
    clearEcefTformBody(): void;
    getEcefTformBody(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setEcefTformBody(value?: bosdyn_api_geometry_pb.SE3Pose): GPSLocalization;

    hasLatitudeLongitudeHeight(): boolean;
    clearLatitudeLongitudeHeight(): void;
    getLatitudeLongitudeHeight(): bosdyn_api_gps_gps_pb.LLH | undefined;
    setLatitudeLongitudeHeight(value?: bosdyn_api_gps_gps_pb.LLH): GPSLocalization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GPSLocalization.AsObject;
    static toObject(includeInstance: boolean, msg: GPSLocalization): GPSLocalization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GPSLocalization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GPSLocalization;
    static deserializeBinaryFromReader(message: GPSLocalization, reader: jspb.BinaryReader): GPSLocalization;
}

export namespace GPSLocalization {
    export type AsObject = {
        liveGpsState: GPSLocalization.State,
        mapGpsState: GPSLocalization.State,
        ecefTformBody?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        latitudeLongitudeHeight?: bosdyn_api_gps_gps_pb.LLH.AsObject,
    }

    export enum State {
    STATE_UNKNOWN = 0,
    STATE_OK = 1,
    STATE_BAD_FRAMES = 2,
    STATE_NO_GPS_OBJECTS = 3,
    STATE_REGISTRATION_NOT_OK = 4,
    STATE_NO_GPS_STATES = 5,
    STATE_NOT_ENOUGH_SATELLITES = 6,
    STATE_NO_ECEF_FRAME = 7,
    STATE_HIGH_ERROR = 8,
    STATE_STALE = 9,
    STATE_INTERNAL_ERROR = 10,
    }

}
