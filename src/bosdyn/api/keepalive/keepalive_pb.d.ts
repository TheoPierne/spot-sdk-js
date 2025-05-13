// package: bosdyn.api.keepalive
// file: bosdyn/api/keepalive/keepalive.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as bosdyn_api_data_buffer_pb from "../../../bosdyn/api/data_buffer_pb";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../../bosdyn/api/lease_pb";
import * as bosdyn_api_auto_return_auto_return_pb from "../../../bosdyn/api/auto_return/auto_return_pb";

export class Policy extends jspb.Message { 
    getName(): string;
    setName(value: string): Policy;
    clearActionsList(): void;
    getActionsList(): Array<ActionAfter>;
    setActionsList(value: Array<ActionAfter>): Policy;
    addActions(value?: ActionAfter, index?: number): ActionAfter;
    clearAssociatedLeasesList(): void;
    getAssociatedLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
    setAssociatedLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): Policy;
    addAssociatedLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;
    getUserId(): string;
    setUserId(value: string): Policy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Policy.AsObject;
    static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Policy;
    static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
    export type AsObject = {
        name: string,
        actionsList: Array<ActionAfter.AsObject>,
        associatedLeasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        userId: string,
    }
}

export class ActionAfter extends jspb.Message { 

    hasRecordEvent(): boolean;
    clearRecordEvent(): void;
    getRecordEvent(): ActionAfter.RecordEvent | undefined;
    setRecordEvent(value?: ActionAfter.RecordEvent): ActionAfter;

    hasAutoReturn(): boolean;
    clearAutoReturn(): void;
    getAutoReturn(): ActionAfter.AutoReturn | undefined;
    setAutoReturn(value?: ActionAfter.AutoReturn): ActionAfter;

    hasControlledMotorsOff(): boolean;
    clearControlledMotorsOff(): void;
    getControlledMotorsOff(): ActionAfter.ControlledMotorsOff | undefined;
    setControlledMotorsOff(value?: ActionAfter.ControlledMotorsOff): ActionAfter;

    hasImmediateRobotOff(): boolean;
    clearImmediateRobotOff(): void;
    getImmediateRobotOff(): ActionAfter.ImmediateRobotOff | undefined;
    setImmediateRobotOff(value?: ActionAfter.ImmediateRobotOff): ActionAfter;

    hasLeaseStale(): boolean;
    clearLeaseStale(): void;
    getLeaseStale(): ActionAfter.LeaseStale | undefined;
    setLeaseStale(value?: ActionAfter.LeaseStale): ActionAfter;

    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): google_protobuf_duration_pb.Duration | undefined;
    setAfter(value?: google_protobuf_duration_pb.Duration): ActionAfter;

    getActionCase(): ActionAfter.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionAfter.AsObject;
    static toObject(includeInstance: boolean, msg: ActionAfter): ActionAfter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionAfter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionAfter;
    static deserializeBinaryFromReader(message: ActionAfter, reader: jspb.BinaryReader): ActionAfter;
}

export namespace ActionAfter {
    export type AsObject = {
        recordEvent?: ActionAfter.RecordEvent.AsObject,
        autoReturn?: ActionAfter.AutoReturn.AsObject,
        controlledMotorsOff?: ActionAfter.ControlledMotorsOff.AsObject,
        immediateRobotOff?: ActionAfter.ImmediateRobotOff.AsObject,
        leaseStale?: ActionAfter.LeaseStale.AsObject,
        after?: google_protobuf_duration_pb.Duration.AsObject,
    }


    export class RecordEvent extends jspb.Message { 
        clearEventsList(): void;
        getEventsList(): Array<bosdyn_api_data_buffer_pb.Event>;
        setEventsList(value: Array<bosdyn_api_data_buffer_pb.Event>): RecordEvent;
        addEvents(value?: bosdyn_api_data_buffer_pb.Event, index?: number): bosdyn_api_data_buffer_pb.Event;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RecordEvent.AsObject;
        static toObject(includeInstance: boolean, msg: RecordEvent): RecordEvent.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RecordEvent, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RecordEvent;
        static deserializeBinaryFromReader(message: RecordEvent, reader: jspb.BinaryReader): RecordEvent;
    }

    export namespace RecordEvent {
        export type AsObject = {
            eventsList: Array<bosdyn_api_data_buffer_pb.Event.AsObject>,
        }
    }

    export class AutoReturn extends jspb.Message { 
        clearLeasesList(): void;
        getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
        setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): AutoReturn;
        addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

        hasParams(): boolean;
        clearParams(): void;
        getParams(): bosdyn_api_auto_return_auto_return_pb.Params | undefined;
        setParams(value?: bosdyn_api_auto_return_auto_return_pb.Params): AutoReturn;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AutoReturn.AsObject;
        static toObject(includeInstance: boolean, msg: AutoReturn): AutoReturn.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AutoReturn, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AutoReturn;
        static deserializeBinaryFromReader(message: AutoReturn, reader: jspb.BinaryReader): AutoReturn;
    }

    export namespace AutoReturn {
        export type AsObject = {
            leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
            params?: bosdyn_api_auto_return_auto_return_pb.Params.AsObject,
        }
    }

    export class ControlledMotorsOff extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ControlledMotorsOff.AsObject;
        static toObject(includeInstance: boolean, msg: ControlledMotorsOff): ControlledMotorsOff.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ControlledMotorsOff, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ControlledMotorsOff;
        static deserializeBinaryFromReader(message: ControlledMotorsOff, reader: jspb.BinaryReader): ControlledMotorsOff;
    }

    export namespace ControlledMotorsOff {
        export type AsObject = {
        }
    }

    export class ImmediateRobotOff extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ImmediateRobotOff.AsObject;
        static toObject(includeInstance: boolean, msg: ImmediateRobotOff): ImmediateRobotOff.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ImmediateRobotOff, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ImmediateRobotOff;
        static deserializeBinaryFromReader(message: ImmediateRobotOff, reader: jspb.BinaryReader): ImmediateRobotOff;
    }

    export namespace ImmediateRobotOff {
        export type AsObject = {
        }
    }

    export class LeaseStale extends jspb.Message { 
        clearLeasesList(): void;
        getLeasesList(): Array<bosdyn_api_lease_pb.Lease>;
        setLeasesList(value: Array<bosdyn_api_lease_pb.Lease>): LeaseStale;
        addLeases(value?: bosdyn_api_lease_pb.Lease, index?: number): bosdyn_api_lease_pb.Lease;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LeaseStale.AsObject;
        static toObject(includeInstance: boolean, msg: LeaseStale): LeaseStale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: LeaseStale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LeaseStale;
        static deserializeBinaryFromReader(message: LeaseStale, reader: jspb.BinaryReader): LeaseStale;
    }

    export namespace LeaseStale {
        export type AsObject = {
            leasesList: Array<bosdyn_api_lease_pb.Lease.AsObject>,
        }
    }


    export enum ActionCase {
        ACTION_NOT_SET = 0,
        RECORD_EVENT = 2,
        AUTO_RETURN = 3,
        CONTROLLED_MOTORS_OFF = 4,
        IMMEDIATE_ROBOT_OFF = 5,
        LEASE_STALE = 6,
    }

}

export class ModifyPolicyRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ModifyPolicyRequest;

    hasToAdd(): boolean;
    clearToAdd(): void;
    getToAdd(): Policy | undefined;
    setToAdd(value?: Policy): ModifyPolicyRequest;
    clearPolicyIdsToRemoveList(): void;
    getPolicyIdsToRemoveList(): Array<number>;
    setPolicyIdsToRemoveList(value: Array<number>): ModifyPolicyRequest;
    addPolicyIdsToRemove(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyPolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyPolicyRequest): ModifyPolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyPolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyPolicyRequest;
    static deserializeBinaryFromReader(message: ModifyPolicyRequest, reader: jspb.BinaryReader): ModifyPolicyRequest;
}

export namespace ModifyPolicyRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        toAdd?: Policy.AsObject,
        policyIdsToRemoveList: Array<number>,
    }
}

export class ModifyPolicyResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ModifyPolicyResponse;
    getStatus(): ModifyPolicyResponse.Status;
    setStatus(value: ModifyPolicyResponse.Status): ModifyPolicyResponse;

    hasAddedPolicy(): boolean;
    clearAddedPolicy(): void;
    getAddedPolicy(): LivePolicy | undefined;
    setAddedPolicy(value?: LivePolicy): ModifyPolicyResponse;
    clearRemovedPoliciesList(): void;
    getRemovedPoliciesList(): Array<LivePolicy>;
    setRemovedPoliciesList(value: Array<LivePolicy>): ModifyPolicyResponse;
    addRemovedPolicies(value?: LivePolicy, index?: number): LivePolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyPolicyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyPolicyResponse): ModifyPolicyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyPolicyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyPolicyResponse;
    static deserializeBinaryFromReader(message: ModifyPolicyResponse, reader: jspb.BinaryReader): ModifyPolicyResponse;
}

export namespace ModifyPolicyResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: ModifyPolicyResponse.Status,
        addedPolicy?: LivePolicy.AsObject,
        removedPoliciesList: Array<LivePolicy.AsObject>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_POLICY_ID = 2,
    STATUS_INVALID_LEASE = 3,
    }

}

export class CheckInRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): CheckInRequest;
    getPolicyId(): number;
    setPolicyId(value: number): CheckInRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckInRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckInRequest): CheckInRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckInRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckInRequest;
    static deserializeBinaryFromReader(message: CheckInRequest, reader: jspb.BinaryReader): CheckInRequest;
}

export namespace CheckInRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        policyId: number,
    }
}

export class CheckInResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): CheckInResponse;

    hasLastCheckin(): boolean;
    clearLastCheckin(): void;
    getLastCheckin(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastCheckin(value?: google_protobuf_timestamp_pb.Timestamp): CheckInResponse;
    getStatus(): CheckInResponse.Status;
    setStatus(value: CheckInResponse.Status): CheckInResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckInResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckInResponse): CheckInResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckInResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckInResponse;
    static deserializeBinaryFromReader(message: CheckInResponse, reader: jspb.BinaryReader): CheckInResponse;
}

export namespace CheckInResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        lastCheckin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status: CheckInResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_POLICY_ID = 2,
    }

}

export class GetStatusRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusRequest): GetStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusRequest;
    static deserializeBinaryFromReader(message: GetStatusRequest, reader: jspb.BinaryReader): GetStatusRequest;
}

export namespace GetStatusRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class LivePolicy extends jspb.Message { 
    getPolicyId(): number;
    setPolicyId(value: number): LivePolicy;

    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): Policy | undefined;
    setPolicy(value?: Policy): LivePolicy;

    hasLastCheckin(): boolean;
    clearLastCheckin(): void;
    getLastCheckin(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastCheckin(value?: google_protobuf_timestamp_pb.Timestamp): LivePolicy;
    getClientName(): string;
    setClientName(value: string): LivePolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LivePolicy.AsObject;
    static toObject(includeInstance: boolean, msg: LivePolicy): LivePolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LivePolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LivePolicy;
    static deserializeBinaryFromReader(message: LivePolicy, reader: jspb.BinaryReader): LivePolicy;
}

export namespace LivePolicy {
    export type AsObject = {
        policyId: number,
        policy?: Policy.AsObject,
        lastCheckin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clientName: string,
    }
}

export class GetStatusResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetStatusResponse;
    clearStatusList(): void;
    getStatusList(): Array<LivePolicy>;
    setStatusList(value: Array<LivePolicy>): GetStatusResponse;
    addStatus(value?: LivePolicy, index?: number): LivePolicy;
    clearActiveControlActionsList(): void;
    getActiveControlActionsList(): Array<GetStatusResponse.PolicyControlAction>;
    setActiveControlActionsList(value: Array<GetStatusResponse.PolicyControlAction>): GetStatusResponse;
    addActiveControlActions(value: GetStatusResponse.PolicyControlAction, index?: number): GetStatusResponse.PolicyControlAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusResponse): GetStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusResponse;
    static deserializeBinaryFromReader(message: GetStatusResponse, reader: jspb.BinaryReader): GetStatusResponse;
}

export namespace GetStatusResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        statusList: Array<LivePolicy.AsObject>,
        activeControlActionsList: Array<GetStatusResponse.PolicyControlAction>,
    }

    export enum PolicyControlAction {
    POLICY_CONTROL_ACTION_UNKNOWN = 0,
    POLICY_CONTROL_ACTION_AUTO_RETURN = 1,
    POLICY_CONTROL_ACTION_MOTORS_OFF = 2,
    POLICY_CONTROL_ACTION_ROBOT_OFF = 3,
    }

}
