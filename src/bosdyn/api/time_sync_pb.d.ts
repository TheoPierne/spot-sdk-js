// package: bosdyn.api
// file: bosdyn/api/time_sync.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";

export class TimeSyncRoundTrip extends jspb.Message { 

    hasClientTx(): boolean;
    clearClientTx(): void;
    getClientTx(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClientTx(value?: google_protobuf_timestamp_pb.Timestamp): TimeSyncRoundTrip;

    hasServerRx(): boolean;
    clearServerRx(): void;
    getServerRx(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setServerRx(value?: google_protobuf_timestamp_pb.Timestamp): TimeSyncRoundTrip;

    hasServerTx(): boolean;
    clearServerTx(): void;
    getServerTx(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setServerTx(value?: google_protobuf_timestamp_pb.Timestamp): TimeSyncRoundTrip;

    hasClientRx(): boolean;
    clearClientRx(): void;
    getClientRx(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClientRx(value?: google_protobuf_timestamp_pb.Timestamp): TimeSyncRoundTrip;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSyncRoundTrip.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSyncRoundTrip): TimeSyncRoundTrip.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSyncRoundTrip, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSyncRoundTrip;
    static deserializeBinaryFromReader(message: TimeSyncRoundTrip, reader: jspb.BinaryReader): TimeSyncRoundTrip;
}

export namespace TimeSyncRoundTrip {
    export type AsObject = {
        clientTx?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        serverRx?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        serverTx?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clientRx?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TimeSyncEstimate extends jspb.Message { 

    hasRoundTripTime(): boolean;
    clearRoundTripTime(): void;
    getRoundTripTime(): google_protobuf_duration_pb.Duration | undefined;
    setRoundTripTime(value?: google_protobuf_duration_pb.Duration): TimeSyncEstimate;

    hasClockSkew(): boolean;
    clearClockSkew(): void;
    getClockSkew(): google_protobuf_duration_pb.Duration | undefined;
    setClockSkew(value?: google_protobuf_duration_pb.Duration): TimeSyncEstimate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSyncEstimate.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSyncEstimate): TimeSyncEstimate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSyncEstimate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSyncEstimate;
    static deserializeBinaryFromReader(message: TimeSyncEstimate, reader: jspb.BinaryReader): TimeSyncEstimate;
}

export namespace TimeSyncEstimate {
    export type AsObject = {
        roundTripTime?: google_protobuf_duration_pb.Duration.AsObject,
        clockSkew?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class TimeSyncState extends jspb.Message { 

    hasBestEstimate(): boolean;
    clearBestEstimate(): void;
    getBestEstimate(): TimeSyncEstimate | undefined;
    setBestEstimate(value?: TimeSyncEstimate): TimeSyncState;
    getStatus(): TimeSyncState.Status;
    setStatus(value: TimeSyncState.Status): TimeSyncState;

    hasMeasurementTime(): boolean;
    clearMeasurementTime(): void;
    getMeasurementTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMeasurementTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeSyncState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSyncState.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSyncState): TimeSyncState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSyncState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSyncState;
    static deserializeBinaryFromReader(message: TimeSyncState, reader: jspb.BinaryReader): TimeSyncState;
}

export namespace TimeSyncState {
    export type AsObject = {
        bestEstimate?: TimeSyncEstimate.AsObject,
        status: TimeSyncState.Status,
        measurementTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_MORE_SAMPLES_NEEDED = 2,
    STATUS_SERVICE_NOT_READY = 3,
    }

}

export class TimeSyncUpdateRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): TimeSyncUpdateRequest;

    hasPreviousRoundTrip(): boolean;
    clearPreviousRoundTrip(): void;
    getPreviousRoundTrip(): TimeSyncRoundTrip | undefined;
    setPreviousRoundTrip(value?: TimeSyncRoundTrip): TimeSyncUpdateRequest;
    getClockIdentifier(): string;
    setClockIdentifier(value: string): TimeSyncUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSyncUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSyncUpdateRequest): TimeSyncUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSyncUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSyncUpdateRequest;
    static deserializeBinaryFromReader(message: TimeSyncUpdateRequest, reader: jspb.BinaryReader): TimeSyncUpdateRequest;
}

export namespace TimeSyncUpdateRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        previousRoundTrip?: TimeSyncRoundTrip.AsObject,
        clockIdentifier: string,
    }
}

export class TimeSyncUpdateResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): TimeSyncUpdateResponse;

    hasPreviousEstimate(): boolean;
    clearPreviousEstimate(): void;
    getPreviousEstimate(): TimeSyncEstimate | undefined;
    setPreviousEstimate(value?: TimeSyncEstimate): TimeSyncUpdateResponse;

    hasState(): boolean;
    clearState(): void;
    getState(): TimeSyncState | undefined;
    setState(value?: TimeSyncState): TimeSyncUpdateResponse;
    getClockIdentifier(): string;
    setClockIdentifier(value: string): TimeSyncUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSyncUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSyncUpdateResponse): TimeSyncUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSyncUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSyncUpdateResponse;
    static deserializeBinaryFromReader(message: TimeSyncUpdateResponse, reader: jspb.BinaryReader): TimeSyncUpdateResponse;
}

export namespace TimeSyncUpdateResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        previousEstimate?: TimeSyncEstimate.AsObject,
        state?: TimeSyncState.AsObject,
        clockIdentifier: string,
    }
}
