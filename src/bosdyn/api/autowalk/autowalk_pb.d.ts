// package: bosdyn.api.autowalk
// file: bosdyn/api/autowalk/autowalk.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as bosdyn_api_autowalk_walks_pb from "../../../bosdyn/api/autowalk/walks_pb";
import * as bosdyn_api_mission_mission_pb from "../../../bosdyn/api/mission/mission_pb";
import * as bosdyn_api_mission_nodes_pb from "../../../bosdyn/api/mission/nodes_pb";

export class FailedElement extends jspb.Message { 
    clearErrorsList(): void;
    getErrorsList(): Array<string>;
    setErrorsList(value: Array<string>): FailedElement;
    addErrors(value: string, index?: number): string;
    clearWarningsList(): void;
    getWarningsList(): Array<string>;
    setWarningsList(value: Array<string>): FailedElement;
    addWarnings(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailedElement.AsObject;
    static toObject(includeInstance: boolean, msg: FailedElement): FailedElement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailedElement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailedElement;
    static deserializeBinaryFromReader(message: FailedElement, reader: jspb.BinaryReader): FailedElement;
}

export namespace FailedElement {
    export type AsObject = {
        errorsList: Array<string>,
        warningsList: Array<string>,
    }
}

export class NodeIdentifier extends jspb.Message { 
    getNodeId(): number;
    setNodeId(value: number): NodeIdentifier;
    getUserDataId(): string;
    setUserDataId(value: string): NodeIdentifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeIdentifier.AsObject;
    static toObject(includeInstance: boolean, msg: NodeIdentifier): NodeIdentifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeIdentifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeIdentifier;
    static deserializeBinaryFromReader(message: NodeIdentifier, reader: jspb.BinaryReader): NodeIdentifier;
}

export namespace NodeIdentifier {
    export type AsObject = {
        nodeId: number,
        userDataId: string,
    }
}

export class ElementIdentifiers extends jspb.Message { 

    hasRootId(): boolean;
    clearRootId(): void;
    getRootId(): NodeIdentifier | undefined;
    setRootId(value?: NodeIdentifier): ElementIdentifiers;

    hasActionId(): boolean;
    clearActionId(): void;
    getActionId(): NodeIdentifier | undefined;
    setActionId(value?: NodeIdentifier): ElementIdentifiers;

    hasNavigationId(): boolean;
    clearNavigationId(): void;
    getNavigationId(): NodeIdentifier | undefined;
    setNavigationId(value?: NodeIdentifier): ElementIdentifiers;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementIdentifiers.AsObject;
    static toObject(includeInstance: boolean, msg: ElementIdentifiers): ElementIdentifiers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementIdentifiers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementIdentifiers;
    static deserializeBinaryFromReader(message: ElementIdentifiers, reader: jspb.BinaryReader): ElementIdentifiers;
}

export namespace ElementIdentifiers {
    export type AsObject = {
        rootId?: NodeIdentifier.AsObject,
        actionId?: NodeIdentifier.AsObject,
        navigationId?: NodeIdentifier.AsObject,
    }
}

export class CompileAutowalkRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): CompileAutowalkRequest;

    hasWalk(): boolean;
    clearWalk(): void;
    getWalk(): bosdyn_api_autowalk_walks_pb.Walk | undefined;
    setWalk(value?: bosdyn_api_autowalk_walks_pb.Walk): CompileAutowalkRequest;
    getTreatWarningsAsErrors(): boolean;
    setTreatWarningsAsErrors(value: boolean): CompileAutowalkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompileAutowalkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompileAutowalkRequest): CompileAutowalkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompileAutowalkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompileAutowalkRequest;
    static deserializeBinaryFromReader(message: CompileAutowalkRequest, reader: jspb.BinaryReader): CompileAutowalkRequest;
}

export namespace CompileAutowalkRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        walk?: bosdyn_api_autowalk_walks_pb.Walk.AsObject,
        treatWarningsAsErrors: boolean,
    }
}

export class CompileAutowalkResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): CompileAutowalkResponse;
    getStatus(): CompileAutowalkResponse.Status;
    setStatus(value: CompileAutowalkResponse.Status): CompileAutowalkResponse;

    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): bosdyn_api_mission_nodes_pb.Node | undefined;
    setRoot(value?: bosdyn_api_mission_nodes_pb.Node): CompileAutowalkResponse;
    clearElementIdentifiersList(): void;
    getElementIdentifiersList(): Array<ElementIdentifiers>;
    setElementIdentifiersList(value: Array<ElementIdentifiers>): CompileAutowalkResponse;
    addElementIdentifiers(value?: ElementIdentifiers, index?: number): ElementIdentifiers;

    getFailedElementsMap(): jspb.Map<number, FailedElement>;
    clearFailedElementsMap(): void;

    hasDockingNode(): boolean;
    clearDockingNode(): void;
    getDockingNode(): NodeIdentifier | undefined;
    setDockingNode(value?: NodeIdentifier): CompileAutowalkResponse;

    hasLoopNode(): boolean;
    clearLoopNode(): void;
    getLoopNode(): NodeIdentifier | undefined;
    setLoopNode(value?: NodeIdentifier): CompileAutowalkResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompileAutowalkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CompileAutowalkResponse): CompileAutowalkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompileAutowalkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompileAutowalkResponse;
    static deserializeBinaryFromReader(message: CompileAutowalkResponse, reader: jspb.BinaryReader): CompileAutowalkResponse;
}

export namespace CompileAutowalkResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: CompileAutowalkResponse.Status,
        root?: bosdyn_api_mission_nodes_pb.Node.AsObject,
        elementIdentifiersList: Array<ElementIdentifiers.AsObject>,

        failedElementsMap: Array<[number, FailedElement.AsObject]>,
        dockingNode?: NodeIdentifier.AsObject,
        loopNode?: NodeIdentifier.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_COMPILE_ERROR = 2,
    }

}

export class LoadAutowalkRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): LoadAutowalkRequest;

    hasWalk(): boolean;
    clearWalk(): void;
    getWalk(): bosdyn_api_autowalk_walks_pb.Walk | undefined;
    setWalk(value?: bosdyn_api_autowalk_walks_pb.Walk): LoadAutowalkRequest;
    clearLeasesList(): void;
    getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): LoadAutowalkRequest;
    addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;
    getTreatWarningsAsErrors(): boolean;
    setTreatWarningsAsErrors(value: boolean): LoadAutowalkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadAutowalkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoadAutowalkRequest): LoadAutowalkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadAutowalkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadAutowalkRequest;
    static deserializeBinaryFromReader(message: LoadAutowalkRequest, reader: jspb.BinaryReader): LoadAutowalkRequest;
}

export namespace LoadAutowalkRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        walk?: bosdyn_api_autowalk_walks_pb.Walk.AsObject,
        leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        treatWarningsAsErrors: boolean,
    }
}

export class LoadAutowalkResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): LoadAutowalkResponse;
    getStatus(): LoadAutowalkResponse.Status;
    setStatus(value: LoadAutowalkResponse.Status): LoadAutowalkResponse;
    clearLeaseUseResultsList(): void;
    getLeaseUseResultsList(): Array<bosdyn_api_lease_pb.LeaseUseResult>;
    setLeaseUseResultsList(value: Array<bosdyn_api_lease_pb.LeaseUseResult>): LoadAutowalkResponse;
    addLeaseUseResults(value?: bosdyn_api_lease_pb.LeaseUseResult, index?: number): bosdyn_api_lease_pb.LeaseUseResult;
    clearFailedNodesList(): void;
    getFailedNodesList(): Array<bosdyn_api_mission_mission_pb.FailedNode>;
    setFailedNodesList(value: Array<bosdyn_api_mission_mission_pb.FailedNode>): LoadAutowalkResponse;
    addFailedNodes(value?: bosdyn_api_mission_mission_pb.FailedNode, index?: number): bosdyn_api_mission_mission_pb.FailedNode;
    clearElementIdentifiersList(): void;
    getElementIdentifiersList(): Array<ElementIdentifiers>;
    setElementIdentifiersList(value: Array<ElementIdentifiers>): LoadAutowalkResponse;
    addElementIdentifiers(value?: ElementIdentifiers, index?: number): ElementIdentifiers;

    getFailedElementsMap(): jspb.Map<number, FailedElement>;
    clearFailedElementsMap(): void;
    getMissionId(): number;
    setMissionId(value: number): LoadAutowalkResponse;

    hasDockingNode(): boolean;
    clearDockingNode(): void;
    getDockingNode(): NodeIdentifier | undefined;
    setDockingNode(value?: NodeIdentifier): LoadAutowalkResponse;

    hasLoopNode(): boolean;
    clearLoopNode(): void;
    getLoopNode(): NodeIdentifier | undefined;
    setLoopNode(value?: NodeIdentifier): LoadAutowalkResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadAutowalkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoadAutowalkResponse): LoadAutowalkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadAutowalkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadAutowalkResponse;
    static deserializeBinaryFromReader(message: LoadAutowalkResponse, reader: jspb.BinaryReader): LoadAutowalkResponse;
}

export namespace LoadAutowalkResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: LoadAutowalkResponse.Status,
        leaseUseResultsList: Array<bosdyn_api_lease_pb.LeaseUseResult.AsObject>,
        failedNodesList: Array<bosdyn_api_mission_mission_pb.FailedNode.AsObject>,
        elementIdentifiersList: Array<ElementIdentifiers.AsObject>,

        failedElementsMap: Array<[number, FailedElement.AsObject]>,
        missionId: number,
        dockingNode?: NodeIdentifier.AsObject,
        loopNode?: NodeIdentifier.AsObject,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_COMPILE_ERROR = 2,
    STATUS_VALIDATE_ERROR = 3,
    }

}
