// package: bosdyn.api.metrics_logging
// file: bosdyn/api/metrics_logging/absolute_metrics.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_data_buffer_pb from "../../../bosdyn/api/data_buffer_pb";
import * as bosdyn_api_parameter_pb from "../../../bosdyn/api/parameter_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AbsoluteMetricsSnapshot extends jspb.Message { 

    hasTimestampStart(): boolean;
    clearTimestampStart(): void;
    getTimestampStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampStart(value?: google_protobuf_timestamp_pb.Timestamp): AbsoluteMetricsSnapshot;

    hasTimestampEnd(): boolean;
    clearTimestampEnd(): void;
    getTimestampEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestampEnd(value?: google_protobuf_timestamp_pb.Timestamp): AbsoluteMetricsSnapshot;
    getSequenceNumber(): number;
    setSequenceNumber(value: number): AbsoluteMetricsSnapshot;
    getRobotSerialNumber(): string;
    setRobotSerialNumber(value: string): AbsoluteMetricsSnapshot;
    getRobotSpecies(): string;
    setRobotSpecies(value: string): AbsoluteMetricsSnapshot;
    clearParametersList(): void;
    getParametersList(): Array<bosdyn_api_parameter_pb.Parameter>;
    setParametersList(value: Array<bosdyn_api_parameter_pb.Parameter>): AbsoluteMetricsSnapshot;
    addParameters(value?: bosdyn_api_parameter_pb.Parameter, index?: number): bosdyn_api_parameter_pb.Parameter;
    clearEventsList(): void;
    getEventsList(): Array<bosdyn_api_data_buffer_pb.Event>;
    setEventsList(value: Array<bosdyn_api_data_buffer_pb.Event>): AbsoluteMetricsSnapshot;
    addEvents(value?: bosdyn_api_data_buffer_pb.Event, index?: number): bosdyn_api_data_buffer_pb.Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbsoluteMetricsSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: AbsoluteMetricsSnapshot): AbsoluteMetricsSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbsoluteMetricsSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbsoluteMetricsSnapshot;
    static deserializeBinaryFromReader(message: AbsoluteMetricsSnapshot, reader: jspb.BinaryReader): AbsoluteMetricsSnapshot;
}

export namespace AbsoluteMetricsSnapshot {
    export type AsObject = {
        timestampStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        timestampEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sequenceNumber: number,
        robotSerialNumber: string,
        robotSpecies: string,
        parametersList: Array<bosdyn_api_parameter_pb.Parameter.AsObject>,
        eventsList: Array<bosdyn_api_data_buffer_pb.Event.AsObject>,
    }
}
