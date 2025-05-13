// package: bosdyn.api
// file: bosdyn/api/signals.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";
import * as bosdyn_api_alerts_pb from "../../bosdyn/api/alerts_pb";
import * as bosdyn_api_units_pb from "../../bosdyn/api/units_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class SignalDisplayInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): SignalDisplayInfo;
    getDescription(): string;
    setDescription(value: string): SignalDisplayInfo;
    getOrder(): number;
    setOrder(value: number): SignalDisplayInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalDisplayInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SignalDisplayInfo): SignalDisplayInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignalDisplayInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalDisplayInfo;
    static deserializeBinaryFromReader(message: SignalDisplayInfo, reader: jspb.BinaryReader): SignalDisplayInfo;
}

export namespace SignalDisplayInfo {
    export type AsObject = {
        name: string,
        description: string,
        order: number,
    }
}

export class SensorOutputSpec extends jspb.Message { 

    hasBounds(): boolean;
    clearBounds(): void;
    getBounds(): bosdyn_api_geometry_pb.Bounds | undefined;
    setBounds(value?: bosdyn_api_geometry_pb.Bounds): SensorOutputSpec;

    hasResolution(): boolean;
    clearResolution(): void;
    getResolution(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setResolution(value?: google_protobuf_wrappers_pb.DoubleValue): SensorOutputSpec;

    hasUnits(): boolean;
    clearUnits(): void;
    getUnits(): bosdyn_api_units_pb.Units | undefined;
    setUnits(value?: bosdyn_api_units_pb.Units): SensorOutputSpec;

    hasSampleRate(): boolean;
    clearSampleRate(): void;
    getSampleRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSampleRate(value?: google_protobuf_wrappers_pb.DoubleValue): SensorOutputSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SensorOutputSpec.AsObject;
    static toObject(includeInstance: boolean, msg: SensorOutputSpec): SensorOutputSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SensorOutputSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SensorOutputSpec;
    static deserializeBinaryFromReader(message: SensorOutputSpec, reader: jspb.BinaryReader): SensorOutputSpec;
}

export namespace SensorOutputSpec {
    export type AsObject = {
        bounds?: bosdyn_api_geometry_pb.Bounds.AsObject,
        resolution?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        units?: bosdyn_api_units_pb.Units.AsObject,
        sampleRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class AlertConditionSpec extends jspb.Message { 

    hasAlertData(): boolean;
    clearAlertData(): void;
    getAlertData(): bosdyn_api_alerts_pb.AlertData | undefined;
    setAlertData(value?: bosdyn_api_alerts_pb.AlertData): AlertConditionSpec;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): number;
    setMin(value: number): AlertConditionSpec;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): number;
    setMax(value: number): AlertConditionSpec;

    hasBounds(): boolean;
    clearBounds(): void;
    getBounds(): bosdyn_api_geometry_pb.Bounds | undefined;
    setBounds(value?: bosdyn_api_geometry_pb.Bounds): AlertConditionSpec;

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): boolean;
    setCondition(value: boolean): AlertConditionSpec;

    getTypeCase(): AlertConditionSpec.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlertConditionSpec.AsObject;
    static toObject(includeInstance: boolean, msg: AlertConditionSpec): AlertConditionSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlertConditionSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlertConditionSpec;
    static deserializeBinaryFromReader(message: AlertConditionSpec, reader: jspb.BinaryReader): AlertConditionSpec;
}

export namespace AlertConditionSpec {
    export type AsObject = {
        alertData?: bosdyn_api_alerts_pb.AlertData.AsObject,
        min: number,
        max: number,
        bounds?: bosdyn_api_geometry_pb.Bounds.AsObject,
        condition: boolean,
    }

    export enum TypeCase {
        TYPE_NOT_SET = 0,
        MIN = 2,
        MAX = 3,
        BOUNDS = 4,
        CONDITION = 5,
    }

}

export class SignalSpec extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): SignalDisplayInfo | undefined;
    setInfo(value?: SignalDisplayInfo): SignalSpec;

    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): SensorOutputSpec | undefined;
    setSensor(value?: SensorOutputSpec): SignalSpec;
    clearAlertsList(): void;
    getAlertsList(): Array<AlertConditionSpec>;
    setAlertsList(value: Array<AlertConditionSpec>): SignalSpec;
    addAlerts(value?: AlertConditionSpec, index?: number): AlertConditionSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalSpec.AsObject;
    static toObject(includeInstance: boolean, msg: SignalSpec): SignalSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignalSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalSpec;
    static deserializeBinaryFromReader(message: SignalSpec, reader: jspb.BinaryReader): SignalSpec;
}

export namespace SignalSpec {
    export type AsObject = {
        info?: SignalDisplayInfo.AsObject,
        sensor?: SensorOutputSpec.AsObject,
        alertsList: Array<AlertConditionSpec.AsObject>,
    }
}

export class SignalData extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): SignalData.Data | undefined;
    setData(value?: SignalData.Data): SignalData;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SignalData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalData.AsObject;
    static toObject(includeInstance: boolean, msg: SignalData): SignalData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignalData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalData;
    static deserializeBinaryFromReader(message: SignalData, reader: jspb.BinaryReader): SignalData;
}

export namespace SignalData {
    export type AsObject = {
        data?: SignalData.Data.AsObject,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }


    export class Data extends jspb.Message { 

        hasDouble(): boolean;
        clearDouble(): void;
        getDouble(): number;
        setDouble(value: number): Data;

        hasInt(): boolean;
        clearInt(): void;
        getInt(): number;
        setInt(value: number): Data;

        hasString(): boolean;
        clearString(): void;
        getString(): string;
        setString(value: string): Data;

        hasBool(): boolean;
        clearBool(): void;
        getBool(): boolean;
        setBool(value: boolean): Data;

        getValueCase(): Data.ValueCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Data.AsObject;
        static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Data;
        static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
    }

    export namespace Data {
        export type AsObject = {
            pb_double: number,
            pb_int: number,
            string: string,
            bool: boolean,
        }

        export enum ValueCase {
            VALUE_NOT_SET = 0,
            DOUBLE = 1,
            INT = 2,
            STRING = 3,
            BOOL = 4,
        }

    }

}

export class Signal extends jspb.Message { 

    hasSignalSpec(): boolean;
    clearSignalSpec(): void;
    getSignalSpec(): SignalSpec | undefined;
    setSignalSpec(value?: SignalSpec): Signal;

    hasSignalData(): boolean;
    clearSignalData(): void;
    getSignalData(): SignalData | undefined;
    setSignalData(value?: SignalData): Signal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Signal.AsObject;
    static toObject(includeInstance: boolean, msg: Signal): Signal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Signal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Signal;
    static deserializeBinaryFromReader(message: Signal, reader: jspb.BinaryReader): Signal;
}

export namespace Signal {
    export type AsObject = {
        signalSpec?: SignalSpec.AsObject,
        signalData?: SignalData.AsObject,
    }
}
