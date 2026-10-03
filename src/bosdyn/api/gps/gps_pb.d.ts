// package: bosdyn.api.gps
// file: bosdyn/api/gps/gps.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class LLH extends jspb.Message { 
    getLatitude(): number;
    setLatitude(value: number): LLH;
    getLongitude(): number;
    setLongitude(value: number): LLH;
    getHeight(): number;
    setHeight(value: number): LLH;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LLH.AsObject;
    static toObject(includeInstance: boolean, msg: LLH): LLH.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LLH, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LLH;
    static deserializeBinaryFromReader(message: LLH, reader: jspb.BinaryReader): LLH;
}

export namespace LLH {
    export type AsObject = {
        latitude: number,
        longitude: number,
        height: number,
    }
}

export class GpsDataPoint extends jspb.Message { 

    hasLlh(): boolean;
    clearLlh(): void;
    getLlh(): LLH | undefined;
    setLlh(value?: LLH): GpsDataPoint;

    hasEcef(): boolean;
    clearEcef(): void;
    getEcef(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setEcef(value?: bosdyn_api_geometry_pb.Vec3): GpsDataPoint;

    hasYaw(): boolean;
    clearYaw(): void;
    getYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYaw(value?: google_protobuf_wrappers_pb.DoubleValue): GpsDataPoint;

    hasHeading(): boolean;
    clearHeading(): void;
    getHeading(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHeading(value?: google_protobuf_wrappers_pb.DoubleValue): GpsDataPoint;

    hasAccuracy(): boolean;
    clearAccuracy(): void;
    getAccuracy(): GpsDataPoint.Accuracy | undefined;
    setAccuracy(value?: GpsDataPoint.Accuracy): GpsDataPoint;
    clearSatellitesList(): void;
    getSatellitesList(): Array<GpsDataPoint.Satellite>;
    setSatellitesList(value: Array<GpsDataPoint.Satellite>): GpsDataPoint;
    addSatellites(value?: GpsDataPoint.Satellite, index?: number): GpsDataPoint.Satellite;

    hasMode(): boolean;
    clearMode(): void;
    getMode(): GpsDataPoint.FixMode | undefined;
    setMode(value?: GpsDataPoint.FixMode): GpsDataPoint;

    hasTimestampGps(): boolean;
    clearTimestampGps(): void;
    getTimestampGps(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampGps(value?: google_protobuf_timestamp_pb.Timestamp): GpsDataPoint;
    getFilter(): GpsDataPoint.Filter;
    setFilter(value: GpsDataPoint.Filter): GpsDataPoint;

    hasTimestampClient(): boolean;
    clearTimestampClient(): void;
    getTimestampClient(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampClient(value?: google_protobuf_timestamp_pb.Timestamp): GpsDataPoint;

    hasTimestampRobot(): boolean;
    clearTimestampRobot(): void;
    getTimestampRobot(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampRobot(value?: google_protobuf_timestamp_pb.Timestamp): GpsDataPoint;

    hasBodyTformGps(): boolean;
    clearBodyTformGps(): void;
    getBodyTformGps(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setBodyTformGps(value?: bosdyn_api_geometry_pb.SE3Pose): GpsDataPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GpsDataPoint.AsObject;
    static toObject(includeInstance: boolean, msg: GpsDataPoint): GpsDataPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GpsDataPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GpsDataPoint;
    static deserializeBinaryFromReader(message: GpsDataPoint, reader: jspb.BinaryReader): GpsDataPoint;
}

export namespace GpsDataPoint {
    export type AsObject = {
        llh?: LLH.AsObject,
        ecef?: bosdyn_api_geometry_pb.Vec3.AsObject,
        yaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        heading?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        accuracy?: GpsDataPoint.Accuracy.AsObject,
        satellitesList: Array<GpsDataPoint.Satellite.AsObject>,
        mode?: GpsDataPoint.FixMode.AsObject,
        timestampGps?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        filter: GpsDataPoint.Filter,
        timestampClient?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        timestampRobot?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        bodyTformGps?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
    }


    export class Accuracy extends jspb.Message { 
        getHorizontal(): number;
        setHorizontal(value: number): Accuracy;
        getVertical(): number;
        setVertical(value: number): Accuracy;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Accuracy.AsObject;
        static toObject(includeInstance: boolean, msg: Accuracy): Accuracy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Accuracy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Accuracy;
        static deserializeBinaryFromReader(message: Accuracy, reader: jspb.BinaryReader): Accuracy;
    }

    export namespace Accuracy {
        export type AsObject = {
            horizontal: number,
            vertical: number,
        }
    }

    export class Satellite extends jspb.Message { 
        getPrn(): number;
        setPrn(value: number): Satellite;
        getElevation(): number;
        setElevation(value: number): Satellite;
        getAzimuth(): number;
        setAzimuth(value: number): Satellite;
        getSnr(): number;
        setSnr(value: number): Satellite;
        getConstellation(): GpsDataPoint.Satellite.Constellation;
        setConstellation(value: GpsDataPoint.Satellite.Constellation): Satellite;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Satellite.AsObject;
        static toObject(includeInstance: boolean, msg: Satellite): Satellite.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Satellite, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Satellite;
        static deserializeBinaryFromReader(message: Satellite, reader: jspb.BinaryReader): Satellite;
    }

    export namespace Satellite {
        export type AsObject = {
            prn: number,
            elevation: number,
            azimuth: number,
            snr: number,
            constellation: GpsDataPoint.Satellite.Constellation,
        }

        export enum Constellation {
    UNKNOWN = 0,
    GPS_L1CA = 1,
    GPS_L2CM = 2,
    SBAS_L1CA = 3,
    GLONASS_L1CA = 4,
    GLONASS_L2CA = 5,
    GPS_L1P = 6,
    GPS_L2P = 7,
    BDS2_B1 = 8,
    BDS2_B2 = 9,
    GALILEO_E1B = 10,
    GALILEO_E7I = 11,
        }

    }

    export class FixMode extends jspb.Message { 
        getValue(): GpsDataPoint.FixMode.Mode;
        setValue(value: GpsDataPoint.FixMode.Mode): FixMode;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FixMode.AsObject;
        static toObject(includeInstance: boolean, msg: FixMode): FixMode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FixMode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FixMode;
        static deserializeBinaryFromReader(message: FixMode, reader: jspb.BinaryReader): FixMode;
    }

    export namespace FixMode {
        export type AsObject = {
            value: GpsDataPoint.FixMode.Mode,
        }

        export enum Mode {
    INVALID = 0,
    SPP = 1,
    DGNSS = 2,
    PPS = 3,
    FIXED_RTK = 4,
    FLOAT_RTK = 5,
    DEAD_RECKONING = 6,
    FIXED_POSITION = 7,
    SIMULATED = 8,
    SBAS = 9,
        }

    }


    export enum Filter {
    FILTER_UNKNOWN = 0,
    FILTER_NONE = 1,
    FILTER_DURO_INS = 2,
    }

}

export class GpsDevice extends jspb.Message { 
    getName(): string;
    setName(value: string): GpsDevice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GpsDevice.AsObject;
    static toObject(includeInstance: boolean, msg: GpsDevice): GpsDevice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GpsDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GpsDevice;
    static deserializeBinaryFromReader(message: GpsDevice, reader: jspb.BinaryReader): GpsDevice;
}

export namespace GpsDevice {
    export type AsObject = {
        name: string,
    }
}

export class LocationAndGpsDevice extends jspb.Message { 

    hasDataPoint(): boolean;
    clearDataPoint(): void;
    getDataPoint(): GpsDataPoint | undefined;
    setDataPoint(value?: GpsDataPoint): LocationAndGpsDevice;

    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): GpsDevice | undefined;
    setDevice(value?: GpsDevice): LocationAndGpsDevice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocationAndGpsDevice.AsObject;
    static toObject(includeInstance: boolean, msg: LocationAndGpsDevice): LocationAndGpsDevice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocationAndGpsDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocationAndGpsDevice;
    static deserializeBinaryFromReader(message: LocationAndGpsDevice, reader: jspb.BinaryReader): LocationAndGpsDevice;
}

export namespace LocationAndGpsDevice {
    export type AsObject = {
        dataPoint?: GpsDataPoint.AsObject,
        device?: GpsDevice.AsObject,
    }
}
