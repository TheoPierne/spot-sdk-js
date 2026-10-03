// package: bosdyn.api
// file: bosdyn/api/service_customization.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as bosdyn_api_image_geometry_pb from "../../bosdyn/api/image_geometry_pb";
import * as bosdyn_api_units_pb from "../../bosdyn/api/units_pb";

export class CustomParam extends jspb.Message { 

    hasDictValue(): boolean;
    clearDictValue(): void;
    getDictValue(): DictParam | undefined;
    setDictValue(value?: DictParam): CustomParam;

    hasListValue(): boolean;
    clearListValue(): void;
    getListValue(): ListParam | undefined;
    setListValue(value?: ListParam): CustomParam;

    hasIntValue(): boolean;
    clearIntValue(): void;
    getIntValue(): Int64Param | undefined;
    setIntValue(value?: Int64Param): CustomParam;

    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): DoubleParam | undefined;
    setDoubleValue(value?: DoubleParam): CustomParam;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): StringParam | undefined;
    setStringValue(value?: StringParam): CustomParam;

    hasRoiValue(): boolean;
    clearRoiValue(): void;
    getRoiValue(): RegionOfInterestParam | undefined;
    setRoiValue(value?: RegionOfInterestParam): CustomParam;

    hasBoolValue(): boolean;
    clearBoolValue(): void;
    getBoolValue(): BoolParam | undefined;
    setBoolValue(value?: BoolParam): CustomParam;

    hasOneOfValue(): boolean;
    clearOneOfValue(): void;
    getOneOfValue(): OneOfParam | undefined;
    setOneOfValue(value?: OneOfParam): CustomParam;

    getValueCase(): CustomParam.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomParam.AsObject;
    static toObject(includeInstance: boolean, msg: CustomParam): CustomParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomParam;
    static deserializeBinaryFromReader(message: CustomParam, reader: jspb.BinaryReader): CustomParam;
}

export namespace CustomParam {
    export type AsObject = {
        dictValue?: DictParam.AsObject,
        listValue?: ListParam.AsObject,
        intValue?: Int64Param.AsObject,
        doubleValue?: DoubleParam.AsObject,
        stringValue?: StringParam.AsObject,
        roiValue?: RegionOfInterestParam.AsObject,
        boolValue?: BoolParam.AsObject,
        oneOfValue?: OneOfParam.AsObject,
    }


    export class Spec extends jspb.Message { 

        hasDictSpec(): boolean;
        clearDictSpec(): void;
        getDictSpec(): DictParam.Spec | undefined;
        setDictSpec(value?: DictParam.Spec): Spec;

        hasListSpec(): boolean;
        clearListSpec(): void;
        getListSpec(): ListParam.Spec | undefined;
        setListSpec(value?: ListParam.Spec): Spec;

        hasIntSpec(): boolean;
        clearIntSpec(): void;
        getIntSpec(): Int64Param.Spec | undefined;
        setIntSpec(value?: Int64Param.Spec): Spec;

        hasDoubleSpec(): boolean;
        clearDoubleSpec(): void;
        getDoubleSpec(): DoubleParam.Spec | undefined;
        setDoubleSpec(value?: DoubleParam.Spec): Spec;

        hasStringSpec(): boolean;
        clearStringSpec(): void;
        getStringSpec(): StringParam.Spec | undefined;
        setStringSpec(value?: StringParam.Spec): Spec;

        hasRoiSpec(): boolean;
        clearRoiSpec(): void;
        getRoiSpec(): RegionOfInterestParam.Spec | undefined;
        setRoiSpec(value?: RegionOfInterestParam.Spec): Spec;

        hasBoolSpec(): boolean;
        clearBoolSpec(): void;
        getBoolSpec(): BoolParam.Spec | undefined;
        setBoolSpec(value?: BoolParam.Spec): Spec;

        hasOneOfSpec(): boolean;
        clearOneOfSpec(): void;
        getOneOfSpec(): OneOfParam.Spec | undefined;
        setOneOfSpec(value?: OneOfParam.Spec): Spec;

        getSpecCase(): Spec.SpecCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            dictSpec?: DictParam.Spec.AsObject,
            listSpec?: ListParam.Spec.AsObject,
            intSpec?: Int64Param.Spec.AsObject,
            doubleSpec?: DoubleParam.Spec.AsObject,
            stringSpec?: StringParam.Spec.AsObject,
            roiSpec?: RegionOfInterestParam.Spec.AsObject,
            boolSpec?: BoolParam.Spec.AsObject,
            oneOfSpec?: OneOfParam.Spec.AsObject,
        }

        export enum SpecCase {
            SPEC_NOT_SET = 0,
            DICT_SPEC = 1,
            LIST_SPEC = 2,
            INT_SPEC = 3,
            DOUBLE_SPEC = 4,
            STRING_SPEC = 5,
            ROI_SPEC = 6,
            BOOL_SPEC = 7,
            ONE_OF_SPEC = 12,
        }

    }


    export enum ValueCase {
        VALUE_NOT_SET = 0,
        DICT_VALUE = 1,
        LIST_VALUE = 2,
        INT_VALUE = 3,
        DOUBLE_VALUE = 4,
        STRING_VALUE = 5,
        ROI_VALUE = 6,
        BOOL_VALUE = 7,
        ONE_OF_VALUE = 8,
    }

}

export class UserInterfaceInfo extends jspb.Message { 
    getDisplayName(): string;
    setDisplayName(value: string): UserInterfaceInfo;
    getDescription(): string;
    setDescription(value: string): UserInterfaceInfo;
    getDisplayOrder(): number;
    setDisplayOrder(value: number): UserInterfaceInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInterfaceInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UserInterfaceInfo): UserInterfaceInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInterfaceInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInterfaceInfo;
    static deserializeBinaryFromReader(message: UserInterfaceInfo, reader: jspb.BinaryReader): UserInterfaceInfo;
}

export namespace UserInterfaceInfo {
    export type AsObject = {
        displayName: string,
        description: string,
        displayOrder: number,
    }
}

export class CustomParamCollection extends jspb.Message { 

    hasSpecs(): boolean;
    clearSpecs(): void;
    getSpecs(): DictParam.Spec | undefined;
    setSpecs(value?: DictParam.Spec): CustomParamCollection;

    hasValues(): boolean;
    clearValues(): void;
    getValues(): DictParam | undefined;
    setValues(value?: DictParam): CustomParamCollection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomParamCollection.AsObject;
    static toObject(includeInstance: boolean, msg: CustomParamCollection): CustomParamCollection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomParamCollection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomParamCollection;
    static deserializeBinaryFromReader(message: CustomParamCollection, reader: jspb.BinaryReader): CustomParamCollection;
}

export namespace CustomParamCollection {
    export type AsObject = {
        specs?: DictParam.Spec.AsObject,
        values?: DictParam.AsObject,
    }
}

export class DictParam extends jspb.Message { 

    getValuesMap(): jspb.Map<string, CustomParam>;
    clearValuesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DictParam.AsObject;
    static toObject(includeInstance: boolean, msg: DictParam): DictParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DictParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DictParam;
    static deserializeBinaryFromReader(message: DictParam, reader: jspb.BinaryReader): DictParam;
}

export namespace DictParam {
    export type AsObject = {

        valuesMap: Array<[string, CustomParam.AsObject]>,
    }


    export class ChildSpec extends jspb.Message { 

        hasSpec(): boolean;
        clearSpec(): void;
        getSpec(): CustomParam.Spec | undefined;
        setSpec(value?: CustomParam.Spec): ChildSpec;

        hasUiInfo(): boolean;
        clearUiInfo(): void;
        getUiInfo(): UserInterfaceInfo | undefined;
        setUiInfo(value?: UserInterfaceInfo): ChildSpec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ChildSpec.AsObject;
        static toObject(includeInstance: boolean, msg: ChildSpec): ChildSpec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ChildSpec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ChildSpec;
        static deserializeBinaryFromReader(message: ChildSpec, reader: jspb.BinaryReader): ChildSpec;
    }

    export namespace ChildSpec {
        export type AsObject = {
            spec?: CustomParam.Spec.AsObject,
            uiInfo?: UserInterfaceInfo.AsObject,
        }
    }

    export class Spec extends jspb.Message { 

        getSpecsMap(): jspb.Map<string, DictParam.ChildSpec>;
        clearSpecsMap(): void;
        getIsHiddenByDefault(): boolean;
        setIsHiddenByDefault(value: boolean): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {

            specsMap: Array<[string, DictParam.ChildSpec.AsObject]>,
            isHiddenByDefault: boolean,
        }
    }

}

export class OneOfParam extends jspb.Message { 
    getKey(): string;
    setKey(value: string): OneOfParam;

    getValuesMap(): jspb.Map<string, DictParam>;
    clearValuesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneOfParam.AsObject;
    static toObject(includeInstance: boolean, msg: OneOfParam): OneOfParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OneOfParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneOfParam;
    static deserializeBinaryFromReader(message: OneOfParam, reader: jspb.BinaryReader): OneOfParam;
}

export namespace OneOfParam {
    export type AsObject = {
        key: string,

        valuesMap: Array<[string, DictParam.AsObject]>,
    }


    export class ChildSpec extends jspb.Message { 

        hasSpec(): boolean;
        clearSpec(): void;
        getSpec(): DictParam.Spec | undefined;
        setSpec(value?: DictParam.Spec): ChildSpec;

        hasUiInfo(): boolean;
        clearUiInfo(): void;
        getUiInfo(): UserInterfaceInfo | undefined;
        setUiInfo(value?: UserInterfaceInfo): ChildSpec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ChildSpec.AsObject;
        static toObject(includeInstance: boolean, msg: ChildSpec): ChildSpec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ChildSpec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ChildSpec;
        static deserializeBinaryFromReader(message: ChildSpec, reader: jspb.BinaryReader): ChildSpec;
    }

    export namespace ChildSpec {
        export type AsObject = {
            spec?: DictParam.Spec.AsObject,
            uiInfo?: UserInterfaceInfo.AsObject,
        }
    }

    export class Spec extends jspb.Message { 

        getSpecsMap(): jspb.Map<string, OneOfParam.ChildSpec>;
        clearSpecsMap(): void;
        getDefaultKey(): string;
        setDefaultKey(value: string): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {

            specsMap: Array<[string, OneOfParam.ChildSpec.AsObject]>,
            defaultKey: string,
        }
    }

}

export class ListParam extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<CustomParam>;
    setValuesList(value: Array<CustomParam>): ListParam;
    addValues(value?: CustomParam, index?: number): CustomParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListParam.AsObject;
    static toObject(includeInstance: boolean, msg: ListParam): ListParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListParam;
    static deserializeBinaryFromReader(message: ListParam, reader: jspb.BinaryReader): ListParam;
}

export namespace ListParam {
    export type AsObject = {
        valuesList: Array<CustomParam.AsObject>,
    }


    export class Spec extends jspb.Message { 

        hasElementSpec(): boolean;
        clearElementSpec(): void;
        getElementSpec(): CustomParam.Spec | undefined;
        setElementSpec(value?: CustomParam.Spec): Spec;

        hasMinNumberOfValues(): boolean;
        clearMinNumberOfValues(): void;
        getMinNumberOfValues(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMinNumberOfValues(value?: google_protobuf_wrappers_pb.Int64Value): Spec;

        hasMaxNumberOfValues(): boolean;
        clearMaxNumberOfValues(): void;
        getMaxNumberOfValues(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxNumberOfValues(value?: google_protobuf_wrappers_pb.Int64Value): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            elementSpec?: CustomParam.Spec.AsObject,
            minNumberOfValues?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            maxNumberOfValues?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
    }

}

export class Int64Param extends jspb.Message { 
    getValue(): number;
    setValue(value: number): Int64Param;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int64Param.AsObject;
    static toObject(includeInstance: boolean, msg: Int64Param): Int64Param.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int64Param, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int64Param;
    static deserializeBinaryFromReader(message: Int64Param, reader: jspb.BinaryReader): Int64Param;
}

export namespace Int64Param {
    export type AsObject = {
        value: number,
    }


    export class Spec extends jspb.Message { 

        hasDefaultValue(): boolean;
        clearDefaultValue(): void;
        getDefaultValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setDefaultValue(value?: google_protobuf_wrappers_pb.Int64Value): Spec;

        hasUnits(): boolean;
        clearUnits(): void;
        getUnits(): bosdyn_api_units_pb.Units | undefined;
        setUnits(value?: bosdyn_api_units_pb.Units): Spec;

        hasMinValue(): boolean;
        clearMinValue(): void;
        getMinValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMinValue(value?: google_protobuf_wrappers_pb.Int64Value): Spec;

        hasMaxValue(): boolean;
        clearMaxValue(): void;
        getMaxValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxValue(value?: google_protobuf_wrappers_pb.Int64Value): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            defaultValue?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            units?: bosdyn_api_units_pb.Units.AsObject,
            minValue?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            maxValue?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
    }

}

export class DoubleParam extends jspb.Message { 
    getValue(): number;
    setValue(value: number): DoubleParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoubleParam.AsObject;
    static toObject(includeInstance: boolean, msg: DoubleParam): DoubleParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoubleParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoubleParam;
    static deserializeBinaryFromReader(message: DoubleParam, reader: jspb.BinaryReader): DoubleParam;
}

export namespace DoubleParam {
    export type AsObject = {
        value: number,
    }


    export class Spec extends jspb.Message { 

        hasDefaultValue(): boolean;
        clearDefaultValue(): void;
        getDefaultValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setDefaultValue(value?: google_protobuf_wrappers_pb.DoubleValue): Spec;

        hasUnits(): boolean;
        clearUnits(): void;
        getUnits(): bosdyn_api_units_pb.Units | undefined;
        setUnits(value?: bosdyn_api_units_pb.Units): Spec;

        hasMinValue(): boolean;
        clearMinValue(): void;
        getMinValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMinValue(value?: google_protobuf_wrappers_pb.DoubleValue): Spec;

        hasMaxValue(): boolean;
        clearMaxValue(): void;
        getMaxValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setMaxValue(value?: google_protobuf_wrappers_pb.DoubleValue): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            defaultValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            units?: bosdyn_api_units_pb.Units.AsObject,
            minValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
            maxValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        }
    }

}

export class StringParam extends jspb.Message { 
    getValue(): string;
    setValue(value: string): StringParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringParam.AsObject;
    static toObject(includeInstance: boolean, msg: StringParam): StringParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringParam;
    static deserializeBinaryFromReader(message: StringParam, reader: jspb.BinaryReader): StringParam;
}

export namespace StringParam {
    export type AsObject = {
        value: string,
    }


    export class Spec extends jspb.Message { 
        clearOptionsList(): void;
        getOptionsList(): Array<string>;
        setOptionsList(value: Array<string>): Spec;
        addOptions(value: string, index?: number): string;
        getEditable(): boolean;
        setEditable(value: boolean): Spec;
        getDefaultValue(): string;
        setDefaultValue(value: string): Spec;
        getIsMultiline(): boolean;
        setIsMultiline(value: boolean): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            optionsList: Array<string>,
            editable: boolean,
            defaultValue: string,
            isMultiline: boolean,
        }
    }

}

export class BoolParam extends jspb.Message { 
    getValue(): boolean;
    setValue(value: boolean): BoolParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolParam.AsObject;
    static toObject(includeInstance: boolean, msg: BoolParam): BoolParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolParam;
    static deserializeBinaryFromReader(message: BoolParam, reader: jspb.BinaryReader): BoolParam;
}

export namespace BoolParam {
    export type AsObject = {
        value: boolean,
    }


    export class Spec extends jspb.Message { 

        hasDefaultValue(): boolean;
        clearDefaultValue(): void;
        getDefaultValue(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setDefaultValue(value?: google_protobuf_wrappers_pb.BoolValue): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            defaultValue?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }
    }

}

export class RegionOfInterestParam extends jspb.Message { 

    hasArea(): boolean;
    clearArea(): void;
    getArea(): bosdyn_api_image_geometry_pb.AreaI | undefined;
    setArea(value?: bosdyn_api_image_geometry_pb.AreaI): RegionOfInterestParam;

    hasServiceAndSource(): boolean;
    clearServiceAndSource(): void;
    getServiceAndSource(): RegionOfInterestParam.ServiceAndSource | undefined;
    setServiceAndSource(value?: RegionOfInterestParam.ServiceAndSource): RegionOfInterestParam;
    getImageCols(): number;
    setImageCols(value: number): RegionOfInterestParam;
    getImageRows(): number;
    setImageRows(value: number): RegionOfInterestParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionOfInterestParam.AsObject;
    static toObject(includeInstance: boolean, msg: RegionOfInterestParam): RegionOfInterestParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegionOfInterestParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionOfInterestParam;
    static deserializeBinaryFromReader(message: RegionOfInterestParam, reader: jspb.BinaryReader): RegionOfInterestParam;
}

export namespace RegionOfInterestParam {
    export type AsObject = {
        area?: bosdyn_api_image_geometry_pb.AreaI.AsObject,
        serviceAndSource?: RegionOfInterestParam.ServiceAndSource.AsObject,
        imageCols: number,
        imageRows: number,
    }


    export class ServiceAndSource extends jspb.Message { 
        getService(): string;
        setService(value: string): ServiceAndSource;
        getSource(): string;
        setSource(value: string): ServiceAndSource;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ServiceAndSource.AsObject;
        static toObject(includeInstance: boolean, msg: ServiceAndSource): ServiceAndSource.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ServiceAndSource, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ServiceAndSource;
        static deserializeBinaryFromReader(message: ServiceAndSource, reader: jspb.BinaryReader): ServiceAndSource;
    }

    export namespace ServiceAndSource {
        export type AsObject = {
            service: string,
            source: string,
        }
    }

    export class Spec extends jspb.Message { 

        hasServiceAndSource(): boolean;
        clearServiceAndSource(): void;
        getServiceAndSource(): RegionOfInterestParam.ServiceAndSource | undefined;
        setServiceAndSource(value?: RegionOfInterestParam.ServiceAndSource): Spec;

        hasDefaultArea(): boolean;
        clearDefaultArea(): void;
        getDefaultArea(): bosdyn_api_image_geometry_pb.AreaI | undefined;
        setDefaultArea(value?: bosdyn_api_image_geometry_pb.AreaI): Spec;
        getAllowsRectangle(): boolean;
        setAllowsRectangle(value: boolean): Spec;
        getAllowsPolygon(): boolean;
        setAllowsPolygon(value: boolean): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            serviceAndSource?: RegionOfInterestParam.ServiceAndSource.AsObject,
            defaultArea?: bosdyn_api_image_geometry_pb.AreaI.AsObject,
            allowsRectangle: boolean,
            allowsPolygon: boolean,
        }
    }

}

export class CustomParamError extends jspb.Message { 
    getStatus(): CustomParamError.Status;
    setStatus(value: CustomParamError.Status): CustomParamError;
    clearErrorMessagesList(): void;
    getErrorMessagesList(): Array<string>;
    setErrorMessagesList(value: Array<string>): CustomParamError;
    addErrorMessages(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomParamError.AsObject;
    static toObject(includeInstance: boolean, msg: CustomParamError): CustomParamError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomParamError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomParamError;
    static deserializeBinaryFromReader(message: CustomParamError, reader: jspb.BinaryReader): CustomParamError;
}

export namespace CustomParamError {
    export type AsObject = {
        status: CustomParamError.Status,
        errorMessagesList: Array<string>,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_INVALID_COMBINATION = 2,
    STATUS_UNSUPPORTED_PARAMETER = 3,
    STATUS_INVALID_VALUE = 4,
    STATUS_INVALID_TYPE = 5,
    }

}
