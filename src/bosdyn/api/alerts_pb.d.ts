// package: bosdyn.api
// file: bosdyn/api/alerts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AlertData extends jspb.Message { 
    getSeverity(): AlertData.SeverityLevel;
    setSeverity(value: AlertData.SeverityLevel): AlertData;
    getTitle(): string;
    setTitle(value: string): AlertData;
    getSource(): string;
    setSource(value: string): AlertData;

    hasAdditionalData(): boolean;
    clearAdditionalData(): void;
    getAdditionalData(): google_protobuf_struct_pb.Struct | undefined;
    setAdditionalData(value?: google_protobuf_struct_pb.Struct): AlertData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlertData.AsObject;
    static toObject(includeInstance: boolean, msg: AlertData): AlertData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlertData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlertData;
    static deserializeBinaryFromReader(message: AlertData, reader: jspb.BinaryReader): AlertData;
}

export namespace AlertData {
    export type AsObject = {
        severity: AlertData.SeverityLevel,
        title: string,
        source: string,
        additionalData?: google_protobuf_struct_pb.Struct.AsObject,
    }

    export enum SeverityLevel {
    SEVERITY_LEVEL_UNKNOWN = 0,
    SEVERITY_LEVEL_INFO = 1,
    SEVERITY_LEVEL_WARN = 2,
    SEVERITY_LEVEL_ERROR = 3,
    SEVERITY_LEVEL_CRITICAL = 4,
    }

}
