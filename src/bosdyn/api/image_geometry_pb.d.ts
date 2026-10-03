// package: bosdyn.api
// file: bosdyn/api/image_geometry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RectangleI extends jspb.Message { 
    getX(): number;
    setX(value: number): RectangleI;
    getY(): number;
    setY(value: number): RectangleI;
    getCols(): number;
    setCols(value: number): RectangleI;
    getRows(): number;
    setRows(value: number): RectangleI;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RectangleI.AsObject;
    static toObject(includeInstance: boolean, msg: RectangleI): RectangleI.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RectangleI, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RectangleI;
    static deserializeBinaryFromReader(message: RectangleI, reader: jspb.BinaryReader): RectangleI;
}

export namespace RectangleI {
    export type AsObject = {
        x: number,
        y: number,
        cols: number,
        rows: number,
    }
}

export class Vec2I extends jspb.Message { 
    getX(): number;
    setX(value: number): Vec2I;
    getY(): number;
    setY(value: number): Vec2I;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vec2I.AsObject;
    static toObject(includeInstance: boolean, msg: Vec2I): Vec2I.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vec2I, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vec2I;
    static deserializeBinaryFromReader(message: Vec2I, reader: jspb.BinaryReader): Vec2I;
}

export namespace Vec2I {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class PolygonI extends jspb.Message { 
    clearVerticesList(): void;
    getVerticesList(): Array<Vec2I>;
    setVerticesList(value: Array<Vec2I>): PolygonI;
    addVertices(value?: Vec2I, index?: number): Vec2I;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonI.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonI): PolygonI.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonI, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonI;
    static deserializeBinaryFromReader(message: PolygonI, reader: jspb.BinaryReader): PolygonI;
}

export namespace PolygonI {
    export type AsObject = {
        verticesList: Array<Vec2I.AsObject>,
    }
}

export class AreaI extends jspb.Message { 

    hasRectangle(): boolean;
    clearRectangle(): void;
    getRectangle(): RectangleI | undefined;
    setRectangle(value?: RectangleI): AreaI;

    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): PolygonI | undefined;
    setPolygon(value?: PolygonI): AreaI;

    getGeometryCase(): AreaI.GeometryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaI.AsObject;
    static toObject(includeInstance: boolean, msg: AreaI): AreaI.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaI, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaI;
    static deserializeBinaryFromReader(message: AreaI, reader: jspb.BinaryReader): AreaI;
}

export namespace AreaI {
    export type AsObject = {
        rectangle?: RectangleI.AsObject,
        polygon?: PolygonI.AsObject,
    }

    export enum GeometryCase {
        GEOMETRY_NOT_SET = 0,
        RECTANGLE = 1,
        POLYGON = 2,
    }

}
