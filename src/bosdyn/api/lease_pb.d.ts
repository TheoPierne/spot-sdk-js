// package: bosdyn.api
// file: bosdyn/api/lease.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Lease extends jspb.Message { 
    getResource(): string;
    setResource(value: string): Lease;
    getEpoch(): string;
    setEpoch(value: string): Lease;
    clearSequenceList(): void;
    getSequenceList(): Array<number>;
    setSequenceList(value: Array<number>): Lease;
    addSequence(value: number, index?: number): number;
    clearClientNamesList(): void;
    getClientNamesList(): Array<string>;
    setClientNamesList(value: Array<string>): Lease;
    addClientNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Lease.AsObject;
    static toObject(includeInstance: boolean, msg: Lease): Lease.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Lease, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Lease;
    static deserializeBinaryFromReader(message: Lease, reader: jspb.BinaryReader): Lease;
}

export namespace Lease {
    export type AsObject = {
        resource: string,
        epoch: string,
        sequenceList: Array<number>,
        clientNamesList: Array<string>,
    }
}

export class ResourceTree extends jspb.Message { 
    getResource(): string;
    setResource(value: string): ResourceTree;
    clearSubResourcesList(): void;
    getSubResourcesList(): Array<ResourceTree>;
    setSubResourcesList(value: Array<ResourceTree>): ResourceTree;
    addSubResources(value?: ResourceTree, index?: number): ResourceTree;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceTree.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceTree): ResourceTree.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceTree, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceTree;
    static deserializeBinaryFromReader(message: ResourceTree, reader: jspb.BinaryReader): ResourceTree;
}

export namespace ResourceTree {
    export type AsObject = {
        resource: string,
        subResourcesList: Array<ResourceTree.AsObject>,
    }
}

export class LeaseOwner extends jspb.Message { 
    getClientName(): string;
    setClientName(value: string): LeaseOwner;
    getUserName(): string;
    setUserName(value: string): LeaseOwner;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaseOwner.AsObject;
    static toObject(includeInstance: boolean, msg: LeaseOwner): LeaseOwner.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaseOwner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaseOwner;
    static deserializeBinaryFromReader(message: LeaseOwner, reader: jspb.BinaryReader): LeaseOwner;
}

export namespace LeaseOwner {
    export type AsObject = {
        clientName: string,
        userName: string,
    }
}

export class LeaseUseResult extends jspb.Message { 
    getStatus(): LeaseUseResult.Status;
    setStatus(value: LeaseUseResult.Status): LeaseUseResult;

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): LeaseOwner | undefined;
    setOwner(value?: LeaseOwner): LeaseUseResult;

    hasAttemptedLease(): boolean;
    clearAttemptedLease(): void;
    getAttemptedLease(): Lease | undefined;
    setAttemptedLease(value?: Lease): LeaseUseResult;

    hasPreviousLease(): boolean;
    clearPreviousLease(): void;
    getPreviousLease(): Lease | undefined;
    setPreviousLease(value?: Lease): LeaseUseResult;

    hasLatestKnownLease(): boolean;
    clearLatestKnownLease(): void;
    getLatestKnownLease(): Lease | undefined;
    setLatestKnownLease(value?: Lease): LeaseUseResult;
    clearLatestResourcesList(): void;
    getLatestResourcesList(): Array<Lease>;
    setLatestResourcesList(value: Array<Lease>): LeaseUseResult;
    addLatestResources(value?: Lease, index?: number): Lease;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaseUseResult.AsObject;
    static toObject(includeInstance: boolean, msg: LeaseUseResult): LeaseUseResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaseUseResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaseUseResult;
    static deserializeBinaryFromReader(message: LeaseUseResult, reader: jspb.BinaryReader): LeaseUseResult;
}

export namespace LeaseUseResult {
    export type AsObject = {
        status: LeaseUseResult.Status,
        owner?: LeaseOwner.AsObject,
        attemptedLease?: Lease.AsObject,
        previousLease?: Lease.AsObject,
        latestKnownLease?: Lease.AsObject,
        latestResourcesList: Array<Lease.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_LEASE = 2,
    STATUS_OLDER = 3,
    STATUS_REVOKED = 4,
    STATUS_UNMANAGED = 5,
    STATUS_WRONG_EPOCH = 6,
    }

}

export class AcquireLeaseRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): AcquireLeaseRequest;
    getResource(): string;
    setResource(value: string): AcquireLeaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcquireLeaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AcquireLeaseRequest): AcquireLeaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcquireLeaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcquireLeaseRequest;
    static deserializeBinaryFromReader(message: AcquireLeaseRequest, reader: jspb.BinaryReader): AcquireLeaseRequest;
}

export namespace AcquireLeaseRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        resource: string,
    }
}

export class AcquireLeaseResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): AcquireLeaseResponse;
    getStatus(): AcquireLeaseResponse.Status;
    setStatus(value: AcquireLeaseResponse.Status): AcquireLeaseResponse;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): Lease | undefined;
    setLease(value?: Lease): AcquireLeaseResponse;

    hasLeaseOwner(): boolean;
    clearLeaseOwner(): void;
    getLeaseOwner(): LeaseOwner | undefined;
    setLeaseOwner(value?: LeaseOwner): AcquireLeaseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcquireLeaseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AcquireLeaseResponse): AcquireLeaseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcquireLeaseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcquireLeaseResponse;
    static deserializeBinaryFromReader(message: AcquireLeaseResponse, reader: jspb.BinaryReader): AcquireLeaseResponse;
}

export namespace AcquireLeaseResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: AcquireLeaseResponse.Status,
        lease?: Lease.AsObject,
        leaseOwner?: LeaseOwner.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_RESOURCE_ALREADY_CLAIMED = 2,
    STATUS_INVALID_RESOURCE = 3,
    STATUS_NOT_AUTHORITATIVE_SERVICE = 4,
    }

}

export class TakeLeaseRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): TakeLeaseRequest;
    getResource(): string;
    setResource(value: string): TakeLeaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TakeLeaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TakeLeaseRequest): TakeLeaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TakeLeaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TakeLeaseRequest;
    static deserializeBinaryFromReader(message: TakeLeaseRequest, reader: jspb.BinaryReader): TakeLeaseRequest;
}

export namespace TakeLeaseRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        resource: string,
    }
}

export class TakeLeaseResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): TakeLeaseResponse;
    getStatus(): TakeLeaseResponse.Status;
    setStatus(value: TakeLeaseResponse.Status): TakeLeaseResponse;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): Lease | undefined;
    setLease(value?: Lease): TakeLeaseResponse;

    hasLeaseOwner(): boolean;
    clearLeaseOwner(): void;
    getLeaseOwner(): LeaseOwner | undefined;
    setLeaseOwner(value?: LeaseOwner): TakeLeaseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TakeLeaseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TakeLeaseResponse): TakeLeaseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TakeLeaseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TakeLeaseResponse;
    static deserializeBinaryFromReader(message: TakeLeaseResponse, reader: jspb.BinaryReader): TakeLeaseResponse;
}

export namespace TakeLeaseResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: TakeLeaseResponse.Status,
        lease?: Lease.AsObject,
        leaseOwner?: LeaseOwner.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_RESOURCE = 2,
    STATUS_NOT_AUTHORITATIVE_SERVICE = 3,
    }

}

export class ReturnLeaseRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ReturnLeaseRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): Lease | undefined;
    setLease(value?: Lease): ReturnLeaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnLeaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnLeaseRequest): ReturnLeaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnLeaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnLeaseRequest;
    static deserializeBinaryFromReader(message: ReturnLeaseRequest, reader: jspb.BinaryReader): ReturnLeaseRequest;
}

export namespace ReturnLeaseRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: Lease.AsObject,
    }
}

export class ReturnLeaseResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ReturnLeaseResponse;
    getStatus(): ReturnLeaseResponse.Status;
    setStatus(value: ReturnLeaseResponse.Status): ReturnLeaseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnLeaseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnLeaseResponse): ReturnLeaseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnLeaseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnLeaseResponse;
    static deserializeBinaryFromReader(message: ReturnLeaseResponse, reader: jspb.BinaryReader): ReturnLeaseResponse;
}

export namespace ReturnLeaseResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ReturnLeaseResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_RESOURCE = 2,
    STATUS_NOT_ACTIVE_LEASE = 3,
    STATUS_NOT_AUTHORITATIVE_SERVICE = 4,
    }

}

export class ListLeasesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListLeasesRequest;
    getIncludeFullLeaseInfo(): boolean;
    setIncludeFullLeaseInfo(value: boolean): ListLeasesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLeasesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLeasesRequest): ListLeasesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLeasesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLeasesRequest;
    static deserializeBinaryFromReader(message: ListLeasesRequest, reader: jspb.BinaryReader): ListLeasesRequest;
}

export namespace ListLeasesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        includeFullLeaseInfo: boolean,
    }
}

export class LeaseResource extends jspb.Message { 
    getResource(): string;
    setResource(value: string): LeaseResource;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): Lease | undefined;
    setLease(value?: Lease): LeaseResource;

    hasLeaseOwner(): boolean;
    clearLeaseOwner(): void;
    getLeaseOwner(): LeaseOwner | undefined;
    setLeaseOwner(value?: LeaseOwner): LeaseResource;

    hasStaleTime(): boolean;
    clearStaleTime(): void;
    getStaleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStaleTime(value?: google_protobuf_timestamp_pb.Timestamp): LeaseResource;
    getIsStale(): boolean;
    setIsStale(value: boolean): LeaseResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaseResource.AsObject;
    static toObject(includeInstance: boolean, msg: LeaseResource): LeaseResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaseResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaseResource;
    static deserializeBinaryFromReader(message: LeaseResource, reader: jspb.BinaryReader): LeaseResource;
}

export namespace LeaseResource {
    export type AsObject = {
        resource: string,
        lease?: Lease.AsObject,
        leaseOwner?: LeaseOwner.AsObject,
        staleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        isStale: boolean,
    }
}

export class ListLeasesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListLeasesResponse;
    clearResourcesList(): void;
    getResourcesList(): Array<LeaseResource>;
    setResourcesList(value: Array<LeaseResource>): ListLeasesResponse;
    addResources(value?: LeaseResource, index?: number): LeaseResource;

    hasResourceTree(): boolean;
    clearResourceTree(): void;
    getResourceTree(): ResourceTree | undefined;
    setResourceTree(value?: ResourceTree): ListLeasesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLeasesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLeasesResponse): ListLeasesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLeasesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLeasesResponse;
    static deserializeBinaryFromReader(message: ListLeasesResponse, reader: jspb.BinaryReader): ListLeasesResponse;
}

export namespace ListLeasesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        resourcesList: Array<LeaseResource.AsObject>,
        resourceTree?: ResourceTree.AsObject,
    }
}

export class RetainLeaseRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RetainLeaseRequest;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): Lease | undefined;
    setLease(value?: Lease): RetainLeaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetainLeaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RetainLeaseRequest): RetainLeaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetainLeaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetainLeaseRequest;
    static deserializeBinaryFromReader(message: RetainLeaseRequest, reader: jspb.BinaryReader): RetainLeaseRequest;
}

export namespace RetainLeaseRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: Lease.AsObject,
    }
}

export class RetainLeaseResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RetainLeaseResponse;

    hasLeaseUseResult(): boolean;
    clearLeaseUseResult(): void;
    getLeaseUseResult(): LeaseUseResult | undefined;
    setLeaseUseResult(value?: LeaseUseResult): RetainLeaseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetainLeaseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RetainLeaseResponse): RetainLeaseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetainLeaseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetainLeaseResponse;
    static deserializeBinaryFromReader(message: RetainLeaseResponse, reader: jspb.BinaryReader): RetainLeaseResponse;
}

export namespace RetainLeaseResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        leaseUseResult?: LeaseUseResult.AsObject,
    }
}
