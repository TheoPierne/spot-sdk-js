// package: bosdyn.api.gps
// file: bosdyn/api/gps/aggregator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_gps_gps_pb from "../../../bosdyn/api/gps/gps_pb";

export class NewGpsDataRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): NewGpsDataRequest;
    clearDataPointsList(): void;
    getDataPointsList(): Array<bosdyn_api_gps_gps_pb.GpsDataPoint>;
    setDataPointsList(value: Array<bosdyn_api_gps_gps_pb.GpsDataPoint>): NewGpsDataRequest;
    addDataPoints(value?: bosdyn_api_gps_gps_pb.GpsDataPoint, index?: number): bosdyn_api_gps_gps_pb.GpsDataPoint;

    hasGpsDevice(): boolean;
    clearGpsDevice(): void;
    getGpsDevice(): bosdyn_api_gps_gps_pb.GpsDevice | undefined;
    setGpsDevice(value?: bosdyn_api_gps_gps_pb.GpsDevice): NewGpsDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewGpsDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewGpsDataRequest): NewGpsDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewGpsDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewGpsDataRequest;
    static deserializeBinaryFromReader(message: NewGpsDataRequest, reader: jspb.BinaryReader): NewGpsDataRequest;
}

export namespace NewGpsDataRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        dataPointsList: Array<bosdyn_api_gps_gps_pb.GpsDataPoint.AsObject>,
        gpsDevice?: bosdyn_api_gps_gps_pb.GpsDevice.AsObject,
    }
}

export class NewGpsDataResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): NewGpsDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewGpsDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewGpsDataResponse): NewGpsDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewGpsDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewGpsDataResponse;
    static deserializeBinaryFromReader(message: NewGpsDataResponse, reader: jspb.BinaryReader): NewGpsDataResponse;
}

export namespace NewGpsDataResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
