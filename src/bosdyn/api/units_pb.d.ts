// package: bosdyn.api
// file: bosdyn/api/units.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Units extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): Units;

    hasTemp(): boolean;
    clearTemp(): void;
    getTemp(): TemperatureEnum;
    setTemp(value: TemperatureEnum): Units;

    hasPress(): boolean;
    clearPress(): void;
    getPress(): PressureEnum;
    setPress(value: PressureEnum): Units;
    getIsRelative(): boolean;
    setIsRelative(value: boolean): Units;

    getUnitsCase(): Units.UnitsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Units.AsObject;
    static toObject(includeInstance: boolean, msg: Units): Units.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Units, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Units;
    static deserializeBinaryFromReader(message: Units, reader: jspb.BinaryReader): Units;
}

export namespace Units {
    export type AsObject = {
        name: string,
        temp: TemperatureEnum,
        press: PressureEnum,
        isRelative: boolean,
    }

    export enum UnitsCase {
        UNITS_NOT_SET = 0,
        NAME = 1,
        TEMP = 2,
        PRESS = 3,
    }

}

export enum TemperatureEnum {
    TEMPERATURE_UNKNOWN = 0,
    TEMPERATURE_KELVIN = 1,
    TEMPERATURE_CELSIUS = 2,
    TEMPERATURE_FAHRENHEIT = 3,
}

export enum PressureEnum {
    PRESSURE_UNKNOWN = 0,
    PRESSURE_PSI = 1,
    PRESSURE_KPA = 2,
    PRESSURE_BAR = 3,
}
