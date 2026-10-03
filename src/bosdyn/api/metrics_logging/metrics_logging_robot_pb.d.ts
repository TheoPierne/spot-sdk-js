// package: bosdyn.api.metrics_logging
// file: bosdyn/api/metrics_logging/metrics_logging_robot.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_data_buffer_pb from "../../../bosdyn/api/data_buffer_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_parameter_pb from "../../../bosdyn/api/parameter_pb";
import * as bosdyn_api_metrics_logging_signed_proto_pb from "../../../bosdyn/api/metrics_logging/signed_proto_pb";

export class GetStoreSequenceRangeRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetStoreSequenceRangeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStoreSequenceRangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStoreSequenceRangeRequest): GetStoreSequenceRangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStoreSequenceRangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStoreSequenceRangeRequest;
    static deserializeBinaryFromReader(message: GetStoreSequenceRangeRequest, reader: jspb.BinaryReader): GetStoreSequenceRangeRequest;
}

export namespace GetStoreSequenceRangeRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetStoreSequenceRangeResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetStoreSequenceRangeResponse;
    getFirstSequenceNumber(): number;
    setFirstSequenceNumber(value: number): GetStoreSequenceRangeResponse;
    getLastSequenceNumber(): number;
    setLastSequenceNumber(value: number): GetStoreSequenceRangeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStoreSequenceRangeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStoreSequenceRangeResponse): GetStoreSequenceRangeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStoreSequenceRangeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStoreSequenceRangeResponse;
    static deserializeBinaryFromReader(message: GetStoreSequenceRangeResponse, reader: jspb.BinaryReader): GetStoreSequenceRangeResponse;
}

export namespace GetStoreSequenceRangeResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        firstSequenceNumber: number,
        lastSequenceNumber: number,
    }
}

export class GetAbsoluteMetricSnapshotRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetAbsoluteMetricSnapshotRequest;
    clearSequenceNumbersList(): void;
    getSequenceNumbersList(): Array<number>;
    setSequenceNumbersList(value: Array<number>): GetAbsoluteMetricSnapshotRequest;
    addSequenceNumbers(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAbsoluteMetricSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAbsoluteMetricSnapshotRequest): GetAbsoluteMetricSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAbsoluteMetricSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAbsoluteMetricSnapshotRequest;
    static deserializeBinaryFromReader(message: GetAbsoluteMetricSnapshotRequest, reader: jspb.BinaryReader): GetAbsoluteMetricSnapshotRequest;
}

export namespace GetAbsoluteMetricSnapshotRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sequenceNumbersList: Array<number>,
    }
}

export class GetAbsoluteMetricSnapshotResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetAbsoluteMetricSnapshotResponse;
    clearSnapshotsList(): void;
    getSnapshotsList(): Array<bosdyn_api_metrics_logging_signed_proto_pb.SignedProto>;
    setSnapshotsList(value: Array<bosdyn_api_metrics_logging_signed_proto_pb.SignedProto>): GetAbsoluteMetricSnapshotResponse;
    addSnapshots(value?: bosdyn_api_metrics_logging_signed_proto_pb.SignedProto, index?: number): bosdyn_api_metrics_logging_signed_proto_pb.SignedProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAbsoluteMetricSnapshotResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAbsoluteMetricSnapshotResponse): GetAbsoluteMetricSnapshotResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAbsoluteMetricSnapshotResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAbsoluteMetricSnapshotResponse;
    static deserializeBinaryFromReader(message: GetAbsoluteMetricSnapshotResponse, reader: jspb.BinaryReader): GetAbsoluteMetricSnapshotResponse;
}

export namespace GetAbsoluteMetricSnapshotResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        snapshotsList: Array<bosdyn_api_metrics_logging_signed_proto_pb.SignedProto.AsObject>,
    }
}

export class GetMetricsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetMetricsRequest;
    clearKeysList(): void;
    getKeysList(): Array<string>;
    setKeysList(value: Array<string>): GetMetricsRequest;
    addKeys(value: string, index?: number): string;
    getIncludeEvents(): boolean;
    setIncludeEvents(value: boolean): GetMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMetricsRequest): GetMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMetricsRequest;
    static deserializeBinaryFromReader(message: GetMetricsRequest, reader: jspb.BinaryReader): GetMetricsRequest;
}

export namespace GetMetricsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        keysList: Array<string>,
        includeEvents: boolean,
    }
}

export class GetMetricsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetMetricsResponse;
    clearParametersList(): void;
    getParametersList(): Array<bosdyn_api_parameter_pb.Parameter>;
    setParametersList(value: Array<bosdyn_api_parameter_pb.Parameter>): GetMetricsResponse;
    addParameters(value?: bosdyn_api_parameter_pb.Parameter, index?: number): bosdyn_api_parameter_pb.Parameter;
    clearMissingKeysList(): void;
    getMissingKeysList(): Array<string>;
    setMissingKeysList(value: Array<string>): GetMetricsResponse;
    addMissingKeys(value: string, index?: number): string;
    clearEventsList(): void;
    getEventsList(): Array<bosdyn_api_data_buffer_pb.Event>;
    setEventsList(value: Array<bosdyn_api_data_buffer_pb.Event>): GetMetricsResponse;
    addEvents(value?: bosdyn_api_data_buffer_pb.Event, index?: number): bosdyn_api_data_buffer_pb.Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMetricsResponse): GetMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMetricsResponse;
    static deserializeBinaryFromReader(message: GetMetricsResponse, reader: jspb.BinaryReader): GetMetricsResponse;
}

export namespace GetMetricsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        parametersList: Array<bosdyn_api_parameter_pb.Parameter.AsObject>,
        missingKeysList: Array<string>,
        eventsList: Array<bosdyn_api_data_buffer_pb.Event.AsObject>,
    }
}
