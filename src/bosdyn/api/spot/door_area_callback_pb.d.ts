// package: bosdyn.api.spot
// file: bosdyn/api/spot/door_area_callback.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_spot_door_pb from "../../../bosdyn/api/spot/door_pb";

export class AreaCallbackDoorConfig extends jspb.Message { 

    hasForwardCommand(): boolean;
    clearForwardCommand(): void;
    getForwardCommand(): bosdyn_api_spot_door_pb.DoorCommand.Request | undefined;
    setForwardCommand(value?: bosdyn_api_spot_door_pb.DoorCommand.Request): AreaCallbackDoorConfig;

    hasReverseCommand(): boolean;
    clearReverseCommand(): void;
    getReverseCommand(): bosdyn_api_spot_door_pb.DoorCommand.Request | undefined;
    setReverseCommand(value?: bosdyn_api_spot_door_pb.DoorCommand.Request): AreaCallbackDoorConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackDoorConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackDoorConfig): AreaCallbackDoorConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackDoorConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackDoorConfig;
    static deserializeBinaryFromReader(message: AreaCallbackDoorConfig, reader: jspb.BinaryReader): AreaCallbackDoorConfig;
}

export namespace AreaCallbackDoorConfig {
    export type AsObject = {
        forwardCommand?: bosdyn_api_spot_door_pb.DoorCommand.Request.AsObject,
        reverseCommand?: bosdyn_api_spot_door_pb.DoorCommand.Request.AsObject,
    }
}
