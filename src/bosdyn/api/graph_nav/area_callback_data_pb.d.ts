// package: bosdyn.api.graph_nav
// file: bosdyn/api/graph_nav/area_callback_data.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as bosdyn_api_service_customization_pb from "../../../bosdyn/api/service_customization_pb";

export class AreaCallbackMapConfig extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackMapConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackMapConfig): AreaCallbackMapConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackMapConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackMapConfig;
    static deserializeBinaryFromReader(message: AreaCallbackMapConfig, reader: jspb.BinaryReader): AreaCallbackMapConfig;
}

export namespace AreaCallbackMapConfig {
    export type AsObject = {
    }
}

export class AreaCallbackData extends jspb.Message { 

    hasConfigData(): boolean;
    clearConfigData(): void;
    getConfigData(): google_protobuf_any_pb.Any | undefined;
    setConfigData(value?: google_protobuf_any_pb.Any): AreaCallbackData;

    hasCustomParams(): boolean;
    clearCustomParams(): void;
    getCustomParams(): bosdyn_api_service_customization_pb.DictParam | undefined;
    setCustomParams(value?: bosdyn_api_service_customization_pb.DictParam): AreaCallbackData;

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): bosdyn_api_service_customization_pb.CustomParamCollection | undefined;
    setParameters(value?: bosdyn_api_service_customization_pb.CustomParamCollection): AreaCallbackData;

    hasMapConfig(): boolean;
    clearMapConfig(): void;
    getMapConfig(): AreaCallbackMapConfig | undefined;
    setMapConfig(value?: AreaCallbackMapConfig): AreaCallbackData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaCallbackData.AsObject;
    static toObject(includeInstance: boolean, msg: AreaCallbackData): AreaCallbackData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaCallbackData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaCallbackData;
    static deserializeBinaryFromReader(message: AreaCallbackData, reader: jspb.BinaryReader): AreaCallbackData;
}

export namespace AreaCallbackData {
    export type AsObject = {
        configData?: google_protobuf_any_pb.Any.AsObject,
        customParams?: bosdyn_api_service_customization_pb.DictParam.AsObject,
        parameters?: bosdyn_api_service_customization_pb.CustomParamCollection.AsObject,
        mapConfig?: AreaCallbackMapConfig.AsObject,
    }
}
