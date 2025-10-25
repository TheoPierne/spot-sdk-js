// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/health.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_robot_state_pb from "../../../bosdyn/api/robot_state_pb";
import * as bosdyn_api_data_chunk_pb from "../../../bosdyn/api/data_chunk_pb";

export class Temperature extends jspb.Message { 
    getChannelName(): string;
    setChannelName(value: string): Temperature;
    getTemperature(): number;
    setTemperature(value: number): Temperature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Temperature.AsObject;
    static toObject(includeInstance: boolean, msg: Temperature): Temperature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Temperature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Temperature;
    static deserializeBinaryFromReader(message: Temperature, reader: jspb.BinaryReader): Temperature;
}

export namespace Temperature {
    export type AsObject = {
        channelName: string,
        temperature: number,
    }
}

export class ClearBITEventsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ClearBITEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearBITEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClearBITEventsRequest): ClearBITEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearBITEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearBITEventsRequest;
    static deserializeBinaryFromReader(message: ClearBITEventsRequest, reader: jspb.BinaryReader): ClearBITEventsRequest;
}

export namespace ClearBITEventsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ClearBITEventsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ClearBITEventsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearBITEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClearBITEventsResponse): ClearBITEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearBITEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearBITEventsResponse;
    static deserializeBinaryFromReader(message: ClearBITEventsResponse, reader: jspb.BinaryReader): ClearBITEventsResponse;
}

export namespace ClearBITEventsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetBITStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetBITStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBITStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBITStatusRequest): GetBITStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBITStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBITStatusRequest;
    static deserializeBinaryFromReader(message: GetBITStatusRequest, reader: jspb.BinaryReader): GetBITStatusRequest;
}

export namespace GetBITStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetBITStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetBITStatusResponse;
    clearEventsList(): void;
    getEventsList(): Array<bosdyn_api_robot_state_pb.SystemFault>;
    setEventsList(value: Array<bosdyn_api_robot_state_pb.SystemFault>): GetBITStatusResponse;
    addEvents(value?: bosdyn_api_robot_state_pb.SystemFault, index?: number): bosdyn_api_robot_state_pb.SystemFault;
    clearDegradationsList(): void;
    getDegradationsList(): Array<GetBITStatusResponse.Degradation>;
    setDegradationsList(value: Array<GetBITStatusResponse.Degradation>): GetBITStatusResponse;
    addDegradations(value?: GetBITStatusResponse.Degradation, index?: number): GetBITStatusResponse.Degradation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBITStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBITStatusResponse): GetBITStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBITStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBITStatusResponse;
    static deserializeBinaryFromReader(message: GetBITStatusResponse, reader: jspb.BinaryReader): GetBITStatusResponse;
}

export namespace GetBITStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        eventsList: Array<bosdyn_api_robot_state_pb.SystemFault.AsObject>,
        degradationsList: Array<GetBITStatusResponse.Degradation.AsObject>,
    }


    export class Degradation extends jspb.Message { 
        getType(): GetBITStatusResponse.Degradation.DegradationType;
        setType(value: GetBITStatusResponse.Degradation.DegradationType): Degradation;
        getDescription(): string;
        setDescription(value: string): Degradation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Degradation.AsObject;
        static toObject(includeInstance: boolean, msg: Degradation): Degradation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Degradation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Degradation;
        static deserializeBinaryFromReader(message: Degradation, reader: jspb.BinaryReader): Degradation;
    }

    export namespace Degradation {
        export type AsObject = {
            type: GetBITStatusResponse.Degradation.DegradationType,
            description: string,
        }

        export enum DegradationType {
    STORAGE = 0,
    PTZ = 1,
    LED = 2,
        }

    }

}

export class GetTemperatureRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetTemperatureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTemperatureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTemperatureRequest): GetTemperatureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTemperatureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTemperatureRequest;
    static deserializeBinaryFromReader(message: GetTemperatureRequest, reader: jspb.BinaryReader): GetTemperatureRequest;
}

export namespace GetTemperatureRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetTemperatureResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetTemperatureResponse;
    clearTempsList(): void;
    getTempsList(): Array<Temperature>;
    setTempsList(value: Array<Temperature>): GetTemperatureResponse;
    addTemps(value?: Temperature, index?: number): Temperature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTemperatureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTemperatureResponse): GetTemperatureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTemperatureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTemperatureResponse;
    static deserializeBinaryFromReader(message: GetTemperatureResponse, reader: jspb.BinaryReader): GetTemperatureResponse;
}

export namespace GetTemperatureResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        tempsList: Array<Temperature.AsObject>,
    }
}

export class GetSystemLogRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetSystemLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSystemLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSystemLogRequest): GetSystemLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSystemLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSystemLogRequest;
    static deserializeBinaryFromReader(message: GetSystemLogRequest, reader: jspb.BinaryReader): GetSystemLogRequest;
}

export namespace GetSystemLogRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetSystemLogResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetSystemLogResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setData(value?: bosdyn_api_data_chunk_pb.DataChunk): GetSystemLogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSystemLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSystemLogResponse): GetSystemLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSystemLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSystemLogResponse;
    static deserializeBinaryFromReader(message: GetSystemLogResponse, reader: jspb.BinaryReader): GetSystemLogResponse;
}

export namespace GetSystemLogResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        data?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }
}
