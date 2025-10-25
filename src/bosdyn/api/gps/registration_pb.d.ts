// package: bosdyn.api.gps
// file: bosdyn/api/gps/registration.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as bosdyn_api_gps_gps_pb from "../../../bosdyn/api/gps/gps_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GpsState extends jspb.Message { 

    hasLatestData(): boolean;
    clearLatestData(): void;
    getLatestData(): bosdyn_api_gps_gps_pb.GpsDataPoint | undefined;
    setLatestData(value?: bosdyn_api_gps_gps_pb.GpsDataPoint): GpsState;

    hasGpsDevice(): boolean;
    clearGpsDevice(): void;
    getGpsDevice(): bosdyn_api_gps_gps_pb.GpsDevice | undefined;
    setGpsDevice(value?: bosdyn_api_gps_gps_pb.GpsDevice): GpsState;

    hasEcefPBody(): boolean;
    clearEcefPBody(): void;
    getEcefPBody(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setEcefPBody(value?: bosdyn_api_geometry_pb.Vec3): GpsState;
    clearHistoricalDataList(): void;
    getHistoricalDataList(): Array<bosdyn_api_gps_gps_pb.GpsDataPoint>;
    setHistoricalDataList(value: Array<bosdyn_api_gps_gps_pb.GpsDataPoint>): GpsState;
    addHistoricalData(value?: bosdyn_api_gps_gps_pb.GpsDataPoint, index?: number): bosdyn_api_gps_gps_pb.GpsDataPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GpsState.AsObject;
    static toObject(includeInstance: boolean, msg: GpsState): GpsState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GpsState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GpsState;
    static deserializeBinaryFromReader(message: GpsState, reader: jspb.BinaryReader): GpsState;
}

export namespace GpsState {
    export type AsObject = {
        latestData?: bosdyn_api_gps_gps_pb.GpsDataPoint.AsObject,
        gpsDevice?: bosdyn_api_gps_gps_pb.GpsDevice.AsObject,
        ecefPBody?: bosdyn_api_geometry_pb.Vec3.AsObject,
        historicalDataList: Array<bosdyn_api_gps_gps_pb.GpsDataPoint.AsObject>,
    }
}

export class Registration extends jspb.Message { 
    getStatus(): Registration.Status;
    setStatus(value: Registration.Status): Registration;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Registration;

    hasTransformsSnapshot(): boolean;
    clearTransformsSnapshot(): void;
    getTransformsSnapshot(): bosdyn_api_geometry_pb.FrameTreeSnapshot | undefined;
    setTransformsSnapshot(value?: bosdyn_api_geometry_pb.FrameTreeSnapshot): Registration;

    hasRobotBodyLocation(): boolean;
    clearRobotBodyLocation(): void;
    getRobotBodyLocation(): bosdyn_api_gps_gps_pb.LLH | undefined;
    setRobotBodyLocation(value?: bosdyn_api_gps_gps_pb.LLH): Registration;
    clearGpsStatesList(): void;
    getGpsStatesList(): Array<GpsState>;
    setGpsStatesList(value: Array<GpsState>): Registration;
    addGpsStates(value?: GpsState, index?: number): GpsState;

    hasQuality(): boolean;
    clearQuality(): void;
    getQuality(): Registration.Quality | undefined;
    setQuality(value?: Registration.Quality): Registration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Registration.AsObject;
    static toObject(includeInstance: boolean, msg: Registration): Registration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Registration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Registration;
    static deserializeBinaryFromReader(message: Registration, reader: jspb.BinaryReader): Registration;
}

export namespace Registration {
    export type AsObject = {
        status: Registration.Status,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        transformsSnapshot?: bosdyn_api_geometry_pb.FrameTreeSnapshot.AsObject,
        robotBodyLocation?: bosdyn_api_gps_gps_pb.LLH.AsObject,
        gpsStatesList: Array<GpsState.AsObject>,
        quality?: Registration.Quality.AsObject,
    }


    export class Quality extends jspb.Message { 
        getNumPoints(): number;
        setNumPoints(value: number): Quality;

        hasCovariance(): boolean;
        clearCovariance(): void;
        getCovariance(): bosdyn_api_geometry_pb.Matrix | undefined;
        setCovariance(value?: bosdyn_api_geometry_pb.Matrix): Quality;

        hasResiduals(): boolean;
        clearResiduals(): void;
        getResiduals(): bosdyn_api_geometry_pb.Matrix | undefined;
        setResiduals(value?: bosdyn_api_geometry_pb.Matrix): Quality;
        getMeanResidual(): number;
        setMeanResidual(value: number): Quality;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Quality.AsObject;
        static toObject(includeInstance: boolean, msg: Quality): Quality.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Quality, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Quality;
        static deserializeBinaryFromReader(message: Quality, reader: jspb.BinaryReader): Quality;
    }

    export namespace Quality {
        export type AsObject = {
            numPoints: number,
            covariance?: bosdyn_api_geometry_pb.Matrix.AsObject,
            residuals?: bosdyn_api_geometry_pb.Matrix.AsObject,
            meanResidual: number,
        }
    }


    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NEED_DATA = 2,
    STATUS_NEED_MORE_DATA = 3,
    STATUS_STALE = 4,
    STATUS_HIGH_ERROR = 5,
    }

}

export class GetLocationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetLocationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
    static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetLocationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetLocationResponse;
    getStatus(): GetLocationResponse.Status;
    setStatus(value: GetLocationResponse.Status): GetLocationResponse;

    hasRegistration(): boolean;
    clearRegistration(): void;
    getRegistration(): Registration | undefined;
    setRegistration(value?: Registration): GetLocationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocationResponse): GetLocationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocationResponse;
    static deserializeBinaryFromReader(message: GetLocationResponse, reader: jspb.BinaryReader): GetLocationResponse;
}

export namespace GetLocationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: GetLocationResponse.Status,
        registration?: Registration.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NEED_DEVICE = 2,
    }

}

export class ResetRegistrationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ResetRegistrationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetRegistrationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResetRegistrationRequest): ResetRegistrationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetRegistrationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetRegistrationRequest;
    static deserializeBinaryFromReader(message: ResetRegistrationRequest, reader: jspb.BinaryReader): ResetRegistrationRequest;
}

export namespace ResetRegistrationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ResetRegistrationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ResetRegistrationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetRegistrationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResetRegistrationResponse): ResetRegistrationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetRegistrationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetRegistrationResponse;
    static deserializeBinaryFromReader(message: ResetRegistrationResponse, reader: jspb.BinaryReader): ResetRegistrationResponse;
}

export namespace ResetRegistrationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
