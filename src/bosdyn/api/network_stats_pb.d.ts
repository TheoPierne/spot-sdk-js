// package: bosdyn.api
// file: bosdyn/api/network_stats.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class Association extends jspb.Message { 
    getMacAddress(): string;
    setMacAddress(value: string): Association;

    hasConnectedTime(): boolean;
    clearConnectedTime(): void;
    getConnectedTime(): google_protobuf_duration_pb.Duration | undefined;
    setConnectedTime(value?: google_protobuf_duration_pb.Duration): Association;
    getRxSignalDbm(): number;
    setRxSignalDbm(value: number): Association;
    getRxSignalAvgDbm(): number;
    setRxSignalAvgDbm(value: number): Association;
    getRxBeaconSignalAvgDbm(): number;
    setRxBeaconSignalAvgDbm(value: number): Association;
    getExpectedBitsPerSecond(): number;
    setExpectedBitsPerSecond(value: number): Association;
    getRxBytes(): number;
    setRxBytes(value: number): Association;
    getRxPackets(): number;
    setRxPackets(value: number): Association;
    getRxBitsPerSecond(): number;
    setRxBitsPerSecond(value: number): Association;
    getTxBytes(): number;
    setTxBytes(value: number): Association;
    getTxPackets(): number;
    setTxPackets(value: number): Association;
    getTxBitsPerSecond(): number;
    setTxBitsPerSecond(value: number): Association;
    getTxRetries(): number;
    setTxRetries(value: number): Association;
    getTxFailed(): number;
    setTxFailed(value: number): Association;
    getBeaconsReceived(): number;
    setBeaconsReceived(value: number): Association;
    getBeaconLossCount(): number;
    setBeaconLossCount(value: number): Association;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Association.AsObject;
    static toObject(includeInstance: boolean, msg: Association): Association.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Association, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Association;
    static deserializeBinaryFromReader(message: Association, reader: jspb.BinaryReader): Association;
}

export namespace Association {
    export type AsObject = {
        macAddress: string,
        connectedTime?: google_protobuf_duration_pb.Duration.AsObject,
        rxSignalDbm: number,
        rxSignalAvgDbm: number,
        rxBeaconSignalAvgDbm: number,
        expectedBitsPerSecond: number,
        rxBytes: number,
        rxPackets: number,
        rxBitsPerSecond: number,
        txBytes: number,
        txPackets: number,
        txBitsPerSecond: number,
        txRetries: number,
        txFailed: number,
        beaconsReceived: number,
        beaconLossCount: number,
    }
}

export class WifiDevice extends jspb.Message { 
    getType(): WifiDevice.Type;
    setType(value: WifiDevice.Type): WifiDevice;
    getName(): string;
    setName(value: string): WifiDevice;
    getMacAddress(): string;
    setMacAddress(value: string): WifiDevice;
    getSsid(): string;
    setSsid(value: string): WifiDevice;
    getTxPowerDbm(): number;
    setTxPowerDbm(value: number): WifiDevice;
    clearAssociationsList(): void;
    getAssociationsList(): Array<Association>;
    setAssociationsList(value: Array<Association>): WifiDevice;
    addAssociations(value?: Association, index?: number): Association;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WifiDevice.AsObject;
    static toObject(includeInstance: boolean, msg: WifiDevice): WifiDevice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WifiDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WifiDevice;
    static deserializeBinaryFromReader(message: WifiDevice, reader: jspb.BinaryReader): WifiDevice;
}

export namespace WifiDevice {
    export type AsObject = {
        type: WifiDevice.Type,
        name: string,
        macAddress: string,
        ssid: string,
        txPowerDbm: number,
        associationsList: Array<Association.AsObject>,
    }

    export enum Type {
    UNKNOWN = 0,
    AP = 1,
    CLIENT = 2,
    }

}

export class WifiStats extends jspb.Message { 
    getHostname(): string;
    setHostname(value: string): WifiStats;
    clearDevicesList(): void;
    getDevicesList(): Array<WifiDevice>;
    setDevicesList(value: Array<WifiDevice>): WifiStats;
    addDevices(value?: WifiDevice, index?: number): WifiDevice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WifiStats.AsObject;
    static toObject(includeInstance: boolean, msg: WifiStats): WifiStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WifiStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WifiStats;
    static deserializeBinaryFromReader(message: WifiStats, reader: jspb.BinaryReader): WifiStats;
}

export namespace WifiStats {
    export type AsObject = {
        hostname: string,
        devicesList: Array<WifiDevice.AsObject>,
    }
}
