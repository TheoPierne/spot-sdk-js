// package: bosdyn.api.mission
// file: bosdyn/api/mission/util.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as bosdyn_api_alerts_pb from "../../../bosdyn/api/alerts_pb";

export class KeyValue extends jspb.Message { 
    getKey(): string;
    setKey(value: string): KeyValue;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Value | undefined;
    setValue(value?: Value): KeyValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyValue.AsObject;
    static toObject(includeInstance: boolean, msg: KeyValue): KeyValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyValue;
    static deserializeBinaryFromReader(message: KeyValue, reader: jspb.BinaryReader): KeyValue;
}

export namespace KeyValue {
    export type AsObject = {
        key: string,
        value?: Value.AsObject,
    }
}

export class Value extends jspb.Message { 

    hasConstant(): boolean;
    clearConstant(): void;
    getConstant(): ConstantValue | undefined;
    setConstant(value?: ConstantValue): Value;

    hasRuntimeVar(): boolean;
    clearRuntimeVar(): void;
    getRuntimeVar(): VariableDeclaration | undefined;
    setRuntimeVar(value?: VariableDeclaration): Value;

    hasParameter(): boolean;
    clearParameter(): void;
    getParameter(): VariableDeclaration | undefined;
    setParameter(value?: VariableDeclaration): Value;

    getSourceCase(): Value.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
    export type AsObject = {
        constant?: ConstantValue.AsObject,
        runtimeVar?: VariableDeclaration.AsObject,
        parameter?: VariableDeclaration.AsObject,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        CONSTANT = 2,
        RUNTIME_VAR = 3,
        PARAMETER = 4,
    }

}

export class VariableDeclaration extends jspb.Message { 
    getName(): string;
    setName(value: string): VariableDeclaration;

    hasSubType(): boolean;
    clearSubType(): void;
    getSubType(): VariableDeclaration.SubType | undefined;
    setSubType(value?: VariableDeclaration.SubType): VariableDeclaration;
    getType(): VariableDeclaration.Type;
    setType(value: VariableDeclaration.Type): VariableDeclaration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VariableDeclaration.AsObject;
    static toObject(includeInstance: boolean, msg: VariableDeclaration): VariableDeclaration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VariableDeclaration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VariableDeclaration;
    static deserializeBinaryFromReader(message: VariableDeclaration, reader: jspb.BinaryReader): VariableDeclaration;
}

export namespace VariableDeclaration {
    export type AsObject = {
        name: string,
        subType?: VariableDeclaration.SubType.AsObject,
        type: VariableDeclaration.Type,
    }


    export class SubType extends jspb.Message { 
        getType(): VariableDeclaration.Type;
        setType(value: VariableDeclaration.Type): SubType;

        hasSubType(): boolean;
        clearSubType(): void;
        getSubType(): VariableDeclaration.SubType | undefined;
        setSubType(value?: VariableDeclaration.SubType): SubType;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SubType.AsObject;
        static toObject(includeInstance: boolean, msg: SubType): SubType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SubType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SubType;
        static deserializeBinaryFromReader(message: SubType, reader: jspb.BinaryReader): SubType;
    }

    export namespace SubType {
        export type AsObject = {
            type: VariableDeclaration.Type,
            subType?: VariableDeclaration.SubType.AsObject,
        }
    }


    export enum Type {
    TYPE_UNKNOWN = 0,
    TYPE_FLOAT = 1,
    TYPE_STRING = 2,
    TYPE_INT = 3,
    TYPE_BOOL = 4,
    TYPE_MESSAGE = 5,
    TYPE_LIST = 6,
    TYPE_DICT = 7,
    }

}

export class ConstantValue extends jspb.Message { 

    hasFloatValue(): boolean;
    clearFloatValue(): void;
    getFloatValue(): number;
    setFloatValue(value: number): ConstantValue;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string;
    setStringValue(value: string): ConstantValue;

    hasIntValue(): boolean;
    clearIntValue(): void;
    getIntValue(): number;
    setIntValue(value: number): ConstantValue;

    hasBoolValue(): boolean;
    clearBoolValue(): void;
    getBoolValue(): boolean;
    setBoolValue(value: boolean): ConstantValue;

    hasMsgValue(): boolean;
    clearMsgValue(): void;
    getMsgValue(): google_protobuf_any_pb.Any | undefined;
    setMsgValue(value?: google_protobuf_any_pb.Any): ConstantValue;

    hasListValue(): boolean;
    clearListValue(): void;
    getListValue(): ConstantValue.ListValue | undefined;
    setListValue(value?: ConstantValue.ListValue): ConstantValue;

    hasDictValue(): boolean;
    clearDictValue(): void;
    getDictValue(): ConstantValue.DictValue | undefined;
    setDictValue(value?: ConstantValue.DictValue): ConstantValue;

    getValueCase(): ConstantValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConstantValue.AsObject;
    static toObject(includeInstance: boolean, msg: ConstantValue): ConstantValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConstantValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConstantValue;
    static deserializeBinaryFromReader(message: ConstantValue, reader: jspb.BinaryReader): ConstantValue;
}

export namespace ConstantValue {
    export type AsObject = {
        floatValue: number,
        stringValue: string,
        intValue: number,
        boolValue: boolean,
        msgValue?: google_protobuf_any_pb.Any.AsObject,
        listValue?: ConstantValue.ListValue.AsObject,
        dictValue?: ConstantValue.DictValue.AsObject,
    }


    export class ListValue extends jspb.Message { 
        clearValuesList(): void;
        getValuesList(): Array<ConstantValue>;
        setValuesList(value: Array<ConstantValue>): ListValue;
        addValues(value?: ConstantValue, index?: number): ConstantValue;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ListValue.AsObject;
        static toObject(includeInstance: boolean, msg: ListValue): ListValue.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ListValue, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ListValue;
        static deserializeBinaryFromReader(message: ListValue, reader: jspb.BinaryReader): ListValue;
    }

    export namespace ListValue {
        export type AsObject = {
            valuesList: Array<ConstantValue.AsObject>,
        }
    }

    export class DictValue extends jspb.Message { 

        getValuesMap(): jspb.Map<string, ConstantValue>;
        clearValuesMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DictValue.AsObject;
        static toObject(includeInstance: boolean, msg: DictValue): DictValue.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DictValue, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DictValue;
        static deserializeBinaryFromReader(message: DictValue, reader: jspb.BinaryReader): DictValue;
    }

    export namespace DictValue {
        export type AsObject = {

            valuesMap: Array<[string, ConstantValue.AsObject]>,
        }
    }


    export enum ValueCase {
        VALUE_NOT_SET = 0,
        FLOAT_VALUE = 1,
        STRING_VALUE = 2,
        INT_VALUE = 3,
        BOOL_VALUE = 4,
        MSG_VALUE = 5,
        LIST_VALUE = 6,
        DICT_VALUE = 7,
    }

}

export class MissionText extends jspb.Message { 
    getText(): string;
    setText(value: string): MissionText;
    getSeverity(): bosdyn_api_alerts_pb.AlertData.SeverityLevel;
    setSeverity(value: bosdyn_api_alerts_pb.AlertData.SeverityLevel): MissionText;
    getNodeId(): number;
    setNodeId(value: number): MissionText;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MissionText.AsObject;
    static toObject(includeInstance: boolean, msg: MissionText): MissionText.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MissionText, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MissionText;
    static deserializeBinaryFromReader(message: MissionText, reader: jspb.BinaryReader): MissionText;
}

export namespace MissionText {
    export type AsObject = {
        text: string,
        severity: bosdyn_api_alerts_pb.AlertData.SeverityLevel,
        nodeId: number,
    }
}

export class UserData extends jspb.Message { 
    getId(): string;
    setId(value: string): UserData;
    getBytestring(): Uint8Array | string;
    getBytestring_asU8(): Uint8Array;
    getBytestring_asB64(): string;
    setBytestring(value: Uint8Array | string): UserData;

    hasSourceRepresentation(): boolean;
    clearSourceRepresentation(): void;
    getSourceRepresentation(): google_protobuf_any_pb.Any | undefined;
    setSourceRepresentation(value?: google_protobuf_any_pb.Any): UserData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserData.AsObject;
    static toObject(includeInstance: boolean, msg: UserData): UserData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserData;
    static deserializeBinaryFromReader(message: UserData, reader: jspb.BinaryReader): UserData;
}

export namespace UserData {
    export type AsObject = {
        id: string,
        bytestring: Uint8Array | string,
        sourceRepresentation?: google_protobuf_any_pb.Any.AsObject,
    }
}

export enum Result {
    RESULT_UNKNOWN = 0,
    RESULT_FAILURE = 1,
    RESULT_RUNNING = 2,
    RESULT_SUCCESS = 3,
    RESULT_ERROR = 4,
}
