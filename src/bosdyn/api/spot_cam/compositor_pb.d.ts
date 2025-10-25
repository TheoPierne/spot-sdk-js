// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/compositor.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_spot_cam_camera_pb from "../../../bosdyn/api/spot_cam/camera_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ScreenDescription extends jspb.Message { 
    getName(): string;
    setName(value: string): ScreenDescription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScreenDescription.AsObject;
    static toObject(includeInstance: boolean, msg: ScreenDescription): ScreenDescription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScreenDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScreenDescription;
    static deserializeBinaryFromReader(message: ScreenDescription, reader: jspb.BinaryReader): ScreenDescription;
}

export namespace ScreenDescription {
    export type AsObject = {
        name: string,
    }
}

export class GetScreenRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetScreenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScreenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetScreenRequest): GetScreenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScreenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScreenRequest;
    static deserializeBinaryFromReader(message: GetScreenRequest, reader: jspb.BinaryReader): GetScreenRequest;
}

export namespace GetScreenRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetScreenResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetScreenResponse;
    getName(): string;
    setName(value: string): GetScreenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScreenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetScreenResponse): GetScreenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScreenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScreenResponse;
    static deserializeBinaryFromReader(message: GetScreenResponse, reader: jspb.BinaryReader): GetScreenResponse;
}

export namespace GetScreenResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        name: string,
    }
}

export class GetVisibleCamerasRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetVisibleCamerasRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVisibleCamerasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVisibleCamerasRequest): GetVisibleCamerasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVisibleCamerasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVisibleCamerasRequest;
    static deserializeBinaryFromReader(message: GetVisibleCamerasRequest, reader: jspb.BinaryReader): GetVisibleCamerasRequest;
}

export namespace GetVisibleCamerasRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetVisibleCamerasResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetVisibleCamerasResponse;
    clearStreamsList(): void;
    getStreamsList(): Array<GetVisibleCamerasResponse.Stream>;
    setStreamsList(value: Array<GetVisibleCamerasResponse.Stream>): GetVisibleCamerasResponse;
    addStreams(value?: GetVisibleCamerasResponse.Stream, index?: number): GetVisibleCamerasResponse.Stream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVisibleCamerasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVisibleCamerasResponse): GetVisibleCamerasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVisibleCamerasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVisibleCamerasResponse;
    static deserializeBinaryFromReader(message: GetVisibleCamerasResponse, reader: jspb.BinaryReader): GetVisibleCamerasResponse;
}

export namespace GetVisibleCamerasResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        streamsList: Array<GetVisibleCamerasResponse.Stream.AsObject>,
    }


    export class Stream extends jspb.Message { 

        hasWindow(): boolean;
        clearWindow(): void;
        getWindow(): GetVisibleCamerasResponse.Stream.Window | undefined;
        setWindow(value?: GetVisibleCamerasResponse.Stream.Window): Stream;

        hasCamera(): boolean;
        clearCamera(): void;
        getCamera(): bosdyn_api_spot_cam_camera_pb.Camera | undefined;
        setCamera(value?: bosdyn_api_spot_cam_camera_pb.Camera): Stream;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Stream.AsObject;
        static toObject(includeInstance: boolean, msg: Stream): Stream.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Stream, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Stream;
        static deserializeBinaryFromReader(message: Stream, reader: jspb.BinaryReader): Stream;
    }

    export namespace Stream {
        export type AsObject = {
            window?: GetVisibleCamerasResponse.Stream.Window.AsObject,
            camera?: bosdyn_api_spot_cam_camera_pb.Camera.AsObject,
        }


        export class Window extends jspb.Message { 
            getXoffset(): number;
            setXoffset(value: number): Window;
            getYoffset(): number;
            setYoffset(value: number): Window;
            getWidth(): number;
            setWidth(value: number): Window;
            getHeight(): number;
            setHeight(value: number): Window;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Window.AsObject;
            static toObject(includeInstance: boolean, msg: Window): Window.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Window, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Window;
            static deserializeBinaryFromReader(message: Window, reader: jspb.BinaryReader): Window;
        }

        export namespace Window {
            export type AsObject = {
                xoffset: number,
                yoffset: number,
                width: number,
                height: number,
            }
        }

    }

}

export class ListScreensRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListScreensRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScreensRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListScreensRequest): ListScreensRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScreensRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScreensRequest;
    static deserializeBinaryFromReader(message: ListScreensRequest, reader: jspb.BinaryReader): ListScreensRequest;
}

export namespace ListScreensRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListScreensResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListScreensResponse;
    clearScreensList(): void;
    getScreensList(): Array<ScreenDescription>;
    setScreensList(value: Array<ScreenDescription>): ListScreensResponse;
    addScreens(value?: ScreenDescription, index?: number): ScreenDescription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScreensResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListScreensResponse): ListScreensResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScreensResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScreensResponse;
    static deserializeBinaryFromReader(message: ListScreensResponse, reader: jspb.BinaryReader): ListScreensResponse;
}

export namespace ListScreensResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        screensList: Array<ScreenDescription.AsObject>,
    }
}

export class SetScreenRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetScreenRequest;
    getName(): string;
    setName(value: string): SetScreenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetScreenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetScreenRequest): SetScreenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetScreenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetScreenRequest;
    static deserializeBinaryFromReader(message: SetScreenRequest, reader: jspb.BinaryReader): SetScreenRequest;
}

export namespace SetScreenRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        name: string,
    }
}

export class SetScreenResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetScreenResponse;
    getName(): string;
    setName(value: string): SetScreenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetScreenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetScreenResponse): SetScreenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetScreenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetScreenResponse;
    static deserializeBinaryFromReader(message: SetScreenResponse, reader: jspb.BinaryReader): SetScreenResponse;
}

export namespace SetScreenResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        name: string,
    }
}

export class IrColorMap extends jspb.Message { 
    getColormap(): IrColorMap.ColorMap;
    setColormap(value: IrColorMap.ColorMap): IrColorMap;

    hasScale(): boolean;
    clearScale(): void;
    getScale(): IrColorMap.ScalingPair | undefined;
    setScale(value?: IrColorMap.ScalingPair): IrColorMap;

    hasAutoScale(): boolean;
    clearAutoScale(): void;
    getAutoScale(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoScale(value?: google_protobuf_wrappers_pb.BoolValue): IrColorMap;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IrColorMap.AsObject;
    static toObject(includeInstance: boolean, msg: IrColorMap): IrColorMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IrColorMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IrColorMap;
    static deserializeBinaryFromReader(message: IrColorMap, reader: jspb.BinaryReader): IrColorMap;
}

export namespace IrColorMap {
    export type AsObject = {
        colormap: IrColorMap.ColorMap,
        scale?: IrColorMap.ScalingPair.AsObject,
        autoScale?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }


    export class ScalingPair extends jspb.Message { 
        getMin(): number;
        setMin(value: number): ScalingPair;
        getMax(): number;
        setMax(value: number): ScalingPair;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ScalingPair.AsObject;
        static toObject(includeInstance: boolean, msg: ScalingPair): ScalingPair.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ScalingPair, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ScalingPair;
        static deserializeBinaryFromReader(message: ScalingPair, reader: jspb.BinaryReader): ScalingPair;
    }

    export namespace ScalingPair {
        export type AsObject = {
            min: number,
            max: number,
        }
    }


    export enum ColorMap {
    COLORMAP_UNKNOWN = 0,
    COLORMAP_GREYSCALE = 1,
    COLORMAP_JET = 2,
    COLORMAP_INFERNO = 3,
    COLORMAP_TURBO = 4,
    }

}

export class SetIrColormapRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetIrColormapRequest;

    hasMap(): boolean;
    clearMap(): void;
    getMap(): IrColorMap | undefined;
    setMap(value?: IrColorMap): SetIrColormapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetIrColormapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetIrColormapRequest): SetIrColormapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetIrColormapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetIrColormapRequest;
    static deserializeBinaryFromReader(message: SetIrColormapRequest, reader: jspb.BinaryReader): SetIrColormapRequest;
}

export namespace SetIrColormapRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        map?: IrColorMap.AsObject,
    }
}

export class SetIrColormapResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetIrColormapResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetIrColormapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetIrColormapResponse): SetIrColormapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetIrColormapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetIrColormapResponse;
    static deserializeBinaryFromReader(message: SetIrColormapResponse, reader: jspb.BinaryReader): SetIrColormapResponse;
}

export namespace SetIrColormapResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetIrColormapRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetIrColormapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIrColormapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetIrColormapRequest): GetIrColormapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIrColormapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIrColormapRequest;
    static deserializeBinaryFromReader(message: GetIrColormapRequest, reader: jspb.BinaryReader): GetIrColormapRequest;
}

export namespace GetIrColormapRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetIrColormapResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetIrColormapResponse;

    hasMap(): boolean;
    clearMap(): void;
    getMap(): IrColorMap | undefined;
    setMap(value?: IrColorMap): GetIrColormapResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIrColormapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetIrColormapResponse): GetIrColormapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIrColormapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIrColormapResponse;
    static deserializeBinaryFromReader(message: GetIrColormapResponse, reader: jspb.BinaryReader): GetIrColormapResponse;
}

export namespace GetIrColormapResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        map?: IrColorMap.AsObject,
    }
}

export class IrMeterOverlay extends jspb.Message { 
    getEnable(): boolean;
    setEnable(value: boolean): IrMeterOverlay;

    hasCoords(): boolean;
    clearCoords(): void;
    getCoords(): IrMeterOverlay.NormalizedCoordinates | undefined;
    setCoords(value?: IrMeterOverlay.NormalizedCoordinates): IrMeterOverlay;
    clearMeterList(): void;
    getMeterList(): Array<IrMeterOverlay.NormalizedCoordinates>;
    setMeterList(value: Array<IrMeterOverlay.NormalizedCoordinates>): IrMeterOverlay;
    addMeter(value?: IrMeterOverlay.NormalizedCoordinates, index?: number): IrMeterOverlay.NormalizedCoordinates;

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): IrMeterOverlay.TempUnit | undefined;
    setUnit(value?: IrMeterOverlay.TempUnit): IrMeterOverlay;
    clearDeltaList(): void;
    getDeltaList(): Array<IrMeterOverlay.DeltaPair>;
    setDeltaList(value: Array<IrMeterOverlay.DeltaPair>): IrMeterOverlay;
    addDelta(value?: IrMeterOverlay.DeltaPair, index?: number): IrMeterOverlay.DeltaPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IrMeterOverlay.AsObject;
    static toObject(includeInstance: boolean, msg: IrMeterOverlay): IrMeterOverlay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IrMeterOverlay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IrMeterOverlay;
    static deserializeBinaryFromReader(message: IrMeterOverlay, reader: jspb.BinaryReader): IrMeterOverlay;
}

export namespace IrMeterOverlay {
    export type AsObject = {
        enable: boolean,
        coords?: IrMeterOverlay.NormalizedCoordinates.AsObject,
        meterList: Array<IrMeterOverlay.NormalizedCoordinates.AsObject>,
        unit?: IrMeterOverlay.TempUnit.AsObject,
        deltaList: Array<IrMeterOverlay.DeltaPair.AsObject>,
    }


    export class NormalizedCoordinates extends jspb.Message { 
        getX(): number;
        setX(value: number): NormalizedCoordinates;
        getY(): number;
        setY(value: number): NormalizedCoordinates;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NormalizedCoordinates.AsObject;
        static toObject(includeInstance: boolean, msg: NormalizedCoordinates): NormalizedCoordinates.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NormalizedCoordinates, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NormalizedCoordinates;
        static deserializeBinaryFromReader(message: NormalizedCoordinates, reader: jspb.BinaryReader): NormalizedCoordinates;
    }

    export namespace NormalizedCoordinates {
        export type AsObject = {
            x: number,
            y: number,
        }
    }

    export class TempUnit extends jspb.Message { 
        getValue(): IrMeterOverlay.TempUnit.TempUnitType;
        setValue(value: IrMeterOverlay.TempUnit.TempUnitType): TempUnit;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TempUnit.AsObject;
        static toObject(includeInstance: boolean, msg: TempUnit): TempUnit.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TempUnit, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TempUnit;
        static deserializeBinaryFromReader(message: TempUnit, reader: jspb.BinaryReader): TempUnit;
    }

    export namespace TempUnit {
        export type AsObject = {
            value: IrMeterOverlay.TempUnit.TempUnitType,
        }

        export enum TempUnitType {
    TEMPUNIT_UNKNOWN = 0,
    TEMPUNIT_CELSIUS = 1,
    TEMPUNIT_FAHRENHEIT = 2,
    TEMPUNIT_KELVIN = 3,
        }

    }

    export class DeltaPair extends jspb.Message { 
        getA(): number;
        setA(value: number): DeltaPair;
        getB(): number;
        setB(value: number): DeltaPair;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DeltaPair.AsObject;
        static toObject(includeInstance: boolean, msg: DeltaPair): DeltaPair.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DeltaPair, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DeltaPair;
        static deserializeBinaryFromReader(message: DeltaPair, reader: jspb.BinaryReader): DeltaPair;
    }

    export namespace DeltaPair {
        export type AsObject = {
            a: number,
            b: number,
        }
    }

}

export class SetIrMeterOverlayRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetIrMeterOverlayRequest;

    hasOverlay(): boolean;
    clearOverlay(): void;
    getOverlay(): IrMeterOverlay | undefined;
    setOverlay(value?: IrMeterOverlay): SetIrMeterOverlayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetIrMeterOverlayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetIrMeterOverlayRequest): SetIrMeterOverlayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetIrMeterOverlayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetIrMeterOverlayRequest;
    static deserializeBinaryFromReader(message: SetIrMeterOverlayRequest, reader: jspb.BinaryReader): SetIrMeterOverlayRequest;
}

export namespace SetIrMeterOverlayRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        overlay?: IrMeterOverlay.AsObject,
    }
}

export class SetIrMeterOverlayResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetIrMeterOverlayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetIrMeterOverlayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetIrMeterOverlayResponse): SetIrMeterOverlayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetIrMeterOverlayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetIrMeterOverlayResponse;
    static deserializeBinaryFromReader(message: SetIrMeterOverlayResponse, reader: jspb.BinaryReader): SetIrMeterOverlayResponse;
}

export namespace SetIrMeterOverlayResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetIrMeterOverlayRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetIrMeterOverlayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIrMeterOverlayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetIrMeterOverlayRequest): GetIrMeterOverlayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIrMeterOverlayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIrMeterOverlayRequest;
    static deserializeBinaryFromReader(message: GetIrMeterOverlayRequest, reader: jspb.BinaryReader): GetIrMeterOverlayRequest;
}

export namespace GetIrMeterOverlayRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetIrMeterOverlayResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetIrMeterOverlayResponse;

    hasOverlay(): boolean;
    clearOverlay(): void;
    getOverlay(): IrMeterOverlay | undefined;
    setOverlay(value?: IrMeterOverlay): GetIrMeterOverlayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIrMeterOverlayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetIrMeterOverlayResponse): GetIrMeterOverlayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIrMeterOverlayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIrMeterOverlayResponse;
    static deserializeBinaryFromReader(message: GetIrMeterOverlayResponse, reader: jspb.BinaryReader): GetIrMeterOverlayResponse;
}

export namespace GetIrMeterOverlayResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        overlay?: IrMeterOverlay.AsObject,
    }
}
