// package: bosdyn.api
// file: bosdyn/api/parameter.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Parameter extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): Parameter;
    getUnits(): string;
    setUnits(value: string): Parameter;

    hasIntValue(): boolean;
    clearIntValue(): void;
    getIntValue(): number;
    setIntValue(value: number): Parameter;

    hasFloatValue(): boolean;
    clearFloatValue(): void;
    getFloatValue(): number;
    setFloatValue(value: number): Parameter;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Parameter;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): Parameter;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string;
    setStringValue(value: string): Parameter;

    hasBoolValue(): boolean;
    clearBoolValue(): void;
    getBoolValue(): boolean;
    setBoolValue(value: boolean): Parameter;

    hasUintValue(): boolean;
    clearUintValue(): void;
    getUintValue(): number;
    setUintValue(value: number): Parameter;
    getNotes(): string;
    setNotes(value: string): Parameter;

    getValuesCase(): Parameter.ValuesCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
}

export namespace Parameter {
    export type AsObject = {
        label: string,
        units: string,
        intValue: number,
        floatValue: number,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        stringValue: string,
        boolValue: boolean,
        uintValue: number,
        notes: string,
    }

    export enum ValuesCase {
        VALUES_NOT_SET = 0,
        INT_VALUE = 3,
        FLOAT_VALUE = 4,
        TIMESTAMP = 5,
        DURATION = 6,
        STRING_VALUE = 7,
        BOOL_VALUE = 8,
        UINT_VALUE = 10,
    }

}
