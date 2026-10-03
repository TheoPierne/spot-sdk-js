// package: bosdyn.api
// file: bosdyn/api/arm_surface_contact_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_lease_pb from "../../bosdyn/api/lease_pb";
import * as bosdyn_api_arm_surface_contact_pb from "../../bosdyn/api/arm_surface_contact_pb";

export class ArmSurfaceContactCommand extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ArmSurfaceContactCommand;

    hasLease(): boolean;
    clearLease(): void;
    getLease(): bosdyn_api_lease_pb.Lease | undefined;
    setLease(value?: bosdyn_api_lease_pb.Lease): ArmSurfaceContactCommand;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): bosdyn_api_arm_surface_contact_pb.ArmSurfaceContact.Request | undefined;
    setRequest(value?: bosdyn_api_arm_surface_contact_pb.ArmSurfaceContact.Request): ArmSurfaceContactCommand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmSurfaceContactCommand.AsObject;
    static toObject(includeInstance: boolean, msg: ArmSurfaceContactCommand): ArmSurfaceContactCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmSurfaceContactCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmSurfaceContactCommand;
    static deserializeBinaryFromReader(message: ArmSurfaceContactCommand, reader: jspb.BinaryReader): ArmSurfaceContactCommand;
}

export namespace ArmSurfaceContactCommand {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        lease?: bosdyn_api_lease_pb.Lease.AsObject,
        request?: bosdyn_api_arm_surface_contact_pb.ArmSurfaceContact.Request.AsObject,
    }
}

export class ArmSurfaceContactResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ArmSurfaceContactResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmSurfaceContactResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArmSurfaceContactResponse): ArmSurfaceContactResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmSurfaceContactResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmSurfaceContactResponse;
    static deserializeBinaryFromReader(message: ArmSurfaceContactResponse, reader: jspb.BinaryReader): ArmSurfaceContactResponse;
}

export namespace ArmSurfaceContactResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
