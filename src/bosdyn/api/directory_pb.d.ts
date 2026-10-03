// package: bosdyn.api
// file: bosdyn/api/directory.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ServiceEntry extends jspb.Message { 
    getName(): string;
    setName(value: string): ServiceEntry;

    hasType(): boolean;
    clearType(): void;
    getType(): string;
    setType(value: string): ServiceEntry;
    getAuthority(): string;
    setAuthority(value: string): ServiceEntry;

    hasLastUpdate(): boolean;
    clearLastUpdate(): void;
    getLastUpdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastUpdate(value?: google_protobuf_timestamp_pb.Timestamp): ServiceEntry;
    getUserTokenRequired(): boolean;
    setUserTokenRequired(value: boolean): ServiceEntry;
    getPermissionRequired(): string;
    setPermissionRequired(value: string): ServiceEntry;
    getLivenessTimeoutSecs(): number;
    setLivenessTimeoutSecs(value: number): ServiceEntry;
    getHostPayloadGuid(): string;
    setHostPayloadGuid(value: string): ServiceEntry;

    getServiceTypeCase(): ServiceEntry.ServiceTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceEntry): ServiceEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceEntry;
    static deserializeBinaryFromReader(message: ServiceEntry, reader: jspb.BinaryReader): ServiceEntry;
}

export namespace ServiceEntry {
    export type AsObject = {
        name: string,
        type: string,
        authority: string,
        lastUpdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        userTokenRequired: boolean,
        permissionRequired: string,
        livenessTimeoutSecs: number,
        hostPayloadGuid: string,
    }

    export enum ServiceTypeCase {
        SERVICE_TYPE_NOT_SET = 0,
        TYPE = 2,
    }

}

export class Endpoint extends jspb.Message { 
    getHostIp(): string;
    setHostIp(value: string): Endpoint;
    getPort(): number;
    setPort(value: number): Endpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Endpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Endpoint;
    static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
    export type AsObject = {
        hostIp: string,
        port: number,
    }
}

export class GetServiceEntryRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetServiceEntryRequest;
    getServiceName(): string;
    setServiceName(value: string): GetServiceEntryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceEntryRequest): GetServiceEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceEntryRequest;
    static deserializeBinaryFromReader(message: GetServiceEntryRequest, reader: jspb.BinaryReader): GetServiceEntryRequest;
}

export namespace GetServiceEntryRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        serviceName: string,
    }
}

export class GetServiceEntryResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetServiceEntryResponse;
    getStatus(): GetServiceEntryResponse.Status;
    setStatus(value: GetServiceEntryResponse.Status): GetServiceEntryResponse;

    hasServiceEntry(): boolean;
    clearServiceEntry(): void;
    getServiceEntry(): ServiceEntry | undefined;
    setServiceEntry(value?: ServiceEntry): GetServiceEntryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceEntryResponse): GetServiceEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceEntryResponse;
    static deserializeBinaryFromReader(message: GetServiceEntryResponse, reader: jspb.BinaryReader): GetServiceEntryResponse;
}

export namespace GetServiceEntryResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: GetServiceEntryResponse.Status,
        serviceEntry?: ServiceEntry.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_NONEXISTENT_SERVICE = 2,
    }

}

export class ListServiceEntriesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListServiceEntriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServiceEntriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListServiceEntriesRequest): ListServiceEntriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServiceEntriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServiceEntriesRequest;
    static deserializeBinaryFromReader(message: ListServiceEntriesRequest, reader: jspb.BinaryReader): ListServiceEntriesRequest;
}

export namespace ListServiceEntriesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListServiceEntriesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListServiceEntriesResponse;
    clearServiceEntriesList(): void;
    getServiceEntriesList(): Array<ServiceEntry>;
    setServiceEntriesList(value: Array<ServiceEntry>): ListServiceEntriesResponse;
    addServiceEntries(value?: ServiceEntry, index?: number): ServiceEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServiceEntriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListServiceEntriesResponse): ListServiceEntriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServiceEntriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServiceEntriesResponse;
    static deserializeBinaryFromReader(message: ListServiceEntriesResponse, reader: jspb.BinaryReader): ListServiceEntriesResponse;
}

export namespace ListServiceEntriesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        serviceEntriesList: Array<ServiceEntry.AsObject>,
    }
}
