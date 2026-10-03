// package: bosdyn.api
// file: bosdyn/api/stairs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../bosdyn/api/geometry_pb";

export class StairTransform extends jspb.Message { 

    hasFrameTformStairs(): boolean;
    clearFrameTformStairs(): void;
    getFrameTformStairs(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setFrameTformStairs(value?: bosdyn_api_geometry_pb.SE3Pose): StairTransform;
    getFrameName(): string;
    setFrameName(value: string): StairTransform;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StairTransform.AsObject;
    static toObject(includeInstance: boolean, msg: StairTransform): StairTransform.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StairTransform, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StairTransform;
    static deserializeBinaryFromReader(message: StairTransform, reader: jspb.BinaryReader): StairTransform;
}

export namespace StairTransform {
    export type AsObject = {
        frameTformStairs?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        frameName: string,
    }
}

export class Staircase extends jspb.Message { 
    getKnowledgeType(): Staircase.KnowledgeType;
    setKnowledgeType(value: Staircase.KnowledgeType): Staircase;

    hasStairTform(): boolean;
    clearStairTform(): void;
    getStairTform(): StairTransform | undefined;
    setStairTform(value?: StairTransform): Staircase;
    getNumberOfSteps(): number;
    setNumberOfSteps(value: number): Staircase;
    getAverageRise(): number;
    setAverageRise(value: number): Staircase;
    getAverageRun(): number;
    setAverageRun(value: number): Staircase;

    hasAverageWidth(): boolean;
    clearAverageWidth(): void;
    getAverageWidth(): Staircase.Width | undefined;
    setAverageWidth(value?: Staircase.Width): Staircase;
    clearStepsList(): void;
    getStepsList(): Array<Staircase.Step>;
    setStepsList(value: Array<Staircase.Step>): Staircase;
    addSteps(value?: Staircase.Step, index?: number): Staircase.Step;
    getId(): string;
    setId(value: string): Staircase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Staircase.AsObject;
    static toObject(includeInstance: boolean, msg: Staircase): Staircase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Staircase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Staircase;
    static deserializeBinaryFromReader(message: Staircase, reader: jspb.BinaryReader): Staircase;
}

export namespace Staircase {
    export type AsObject = {
        knowledgeType: Staircase.KnowledgeType,
        stairTform?: StairTransform.AsObject,
        numberOfSteps: number,
        averageRise: number,
        averageRun: number,
        averageWidth?: Staircase.Width.AsObject,
        stepsList: Array<Staircase.Step.AsObject>,
        id: string,
    }


    export class Width extends jspb.Message { 
        getWidth(): number;
        setWidth(value: number): Width;
        getBoundedWidth(): Staircase.Width.BoundedWidth;
        setBoundedWidth(value: Staircase.Width.BoundedWidth): Width;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Width.AsObject;
        static toObject(includeInstance: boolean, msg: Width): Width.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Width, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Width;
        static deserializeBinaryFromReader(message: Width, reader: jspb.BinaryReader): Width;
    }

    export namespace Width {
        export type AsObject = {
            width: number,
            boundedWidth: Staircase.Width.BoundedWidth,
        }

        export enum BoundedWidth {
    BOUNDED_WIDTH_UNKNOWN = 0,
    BOUNDED_WIDTH_NEITHER = 1,
    BOUNDED_WIDTH_WEST = 2,
    BOUNDED_WIDTH_EAST = 3,
    BOUNDED_WIDTH_BOTH = 4,
        }

    }

    export class Step extends jspb.Message { 

        hasPoint(): boolean;
        clearPoint(): void;
        getPoint(): bosdyn_api_geometry_pb.Vec3 | undefined;
        setPoint(value?: bosdyn_api_geometry_pb.Vec3): Step;

        hasNorth(): boolean;
        clearNorth(): void;
        getNorth(): bosdyn_api_geometry_pb.Vec2 | undefined;
        setNorth(value?: bosdyn_api_geometry_pb.Vec2): Step;

        hasWidth(): boolean;
        clearWidth(): void;
        getWidth(): Staircase.Width | undefined;
        setWidth(value?: Staircase.Width): Step;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Step.AsObject;
        static toObject(includeInstance: boolean, msg: Step): Step.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Step, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Step;
        static deserializeBinaryFromReader(message: Step, reader: jspb.BinaryReader): Step;
    }

    export namespace Step {
        export type AsObject = {
            point?: bosdyn_api_geometry_pb.Vec3.AsObject,
            north?: bosdyn_api_geometry_pb.Vec2.AsObject,
            width?: Staircase.Width.AsObject,
        }
    }


    export enum KnowledgeType {
    KNOWLEDGE_TYPE_UNKNOWN = 0,
    KNOWLEDGE_TYPE_MAPPED = 1,
    KNOWLEDGE_TYPE_TRACKED_ONGOING = 2,
    KNOWLEDGE_TYPE_TRACKED_COMPLETED = 3,
    KNOWLEDGE_TYPE_OTHER = 4,
    }

}

export class StraightStaircase extends jspb.Message { 

    hasFromKoTformStairs(): boolean;
    clearFromKoTformStairs(): void;
    getFromKoTformStairs(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setFromKoTformStairs(value?: bosdyn_api_geometry_pb.SE3Pose): StraightStaircase;

    hasTform(): boolean;
    clearTform(): void;
    getTform(): StairTransform | undefined;
    setTform(value?: StairTransform): StraightStaircase;
    clearStairsList(): void;
    getStairsList(): Array<StraightStaircase.Stair>;
    setStairsList(value: Array<StraightStaircase.Stair>): StraightStaircase;
    addStairs(value?: StraightStaircase.Stair, index?: number): StraightStaircase.Stair;

    hasBottomLanding(): boolean;
    clearBottomLanding(): void;
    getBottomLanding(): StraightStaircase.Landing | undefined;
    setBottomLanding(value?: StraightStaircase.Landing): StraightStaircase;

    hasTopLanding(): boolean;
    clearTopLanding(): void;
    getTopLanding(): StraightStaircase.Landing | undefined;
    setTopLanding(value?: StraightStaircase.Landing): StraightStaircase;

    getLocationCase(): StraightStaircase.LocationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StraightStaircase.AsObject;
    static toObject(includeInstance: boolean, msg: StraightStaircase): StraightStaircase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StraightStaircase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StraightStaircase;
    static deserializeBinaryFromReader(message: StraightStaircase, reader: jspb.BinaryReader): StraightStaircase;
}

export namespace StraightStaircase {
    export type AsObject = {
        fromKoTformStairs?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        tform?: StairTransform.AsObject,
        stairsList: Array<StraightStaircase.Stair.AsObject>,
        bottomLanding?: StraightStaircase.Landing.AsObject,
        topLanding?: StraightStaircase.Landing.AsObject,
    }


    export class Stair extends jspb.Message { 
        getRise(): number;
        setRise(value: number): Stair;
        getRun(): number;
        setRun(value: number): Stair;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Stair.AsObject;
        static toObject(includeInstance: boolean, msg: Stair): Stair.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Stair, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Stair;
        static deserializeBinaryFromReader(message: Stair, reader: jspb.BinaryReader): Stair;
    }

    export namespace Stair {
        export type AsObject = {
            rise: number,
            run: number,
        }
    }

    export class Landing extends jspb.Message { 

        hasStairsTformLandingCenter(): boolean;
        clearStairsTformLandingCenter(): void;
        getStairsTformLandingCenter(): bosdyn_api_geometry_pb.SE3Pose | undefined;
        setStairsTformLandingCenter(value?: bosdyn_api_geometry_pb.SE3Pose): Landing;
        getLandingExtentX(): number;
        setLandingExtentX(value: number): Landing;
        getLandingExtentY(): number;
        setLandingExtentY(value: number): Landing;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Landing.AsObject;
        static toObject(includeInstance: boolean, msg: Landing): Landing.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Landing, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Landing;
        static deserializeBinaryFromReader(message: Landing, reader: jspb.BinaryReader): Landing;
    }

    export namespace Landing {
        export type AsObject = {
            stairsTformLandingCenter?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
            landingExtentX: number,
            landingExtentY: number,
        }
    }


    export enum LocationCase {
        LOCATION_NOT_SET = 0,
        FROM_KO_TFORM_STAIRS = 1,
        TFORM = 5,
    }

}

export class StaircaseLanding extends jspb.Message { 

    hasStairsTformLandingCenter(): boolean;
    clearStairsTformLandingCenter(): void;
    getStairsTformLandingCenter(): bosdyn_api_geometry_pb.SE3Pose | undefined;
    setStairsTformLandingCenter(value?: bosdyn_api_geometry_pb.SE3Pose): StaircaseLanding;
    getLandingExtentX(): number;
    setLandingExtentX(value: number): StaircaseLanding;
    getLandingExtentY(): number;
    setLandingExtentY(value: number): StaircaseLanding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StaircaseLanding.AsObject;
    static toObject(includeInstance: boolean, msg: StaircaseLanding): StaircaseLanding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StaircaseLanding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StaircaseLanding;
    static deserializeBinaryFromReader(message: StaircaseLanding, reader: jspb.BinaryReader): StaircaseLanding;
}

export namespace StaircaseLanding {
    export type AsObject = {
        stairsTformLandingCenter?: bosdyn_api_geometry_pb.SE3Pose.AsObject,
        landingExtentX: number,
        landingExtentY: number,
    }
}

export class StaircaseWithLandings extends jspb.Message { 

    hasBottomLanding(): boolean;
    clearBottomLanding(): void;
    getBottomLanding(): StaircaseLanding | undefined;
    setBottomLanding(value?: StaircaseLanding): StaircaseWithLandings;

    hasStaircase(): boolean;
    clearStaircase(): void;
    getStaircase(): Staircase | undefined;
    setStaircase(value?: Staircase): StaircaseWithLandings;

    hasTopLanding(): boolean;
    clearTopLanding(): void;
    getTopLanding(): StaircaseLanding | undefined;
    setTopLanding(value?: StaircaseLanding): StaircaseWithLandings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StaircaseWithLandings.AsObject;
    static toObject(includeInstance: boolean, msg: StaircaseWithLandings): StaircaseWithLandings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StaircaseWithLandings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StaircaseWithLandings;
    static deserializeBinaryFromReader(message: StaircaseWithLandings, reader: jspb.BinaryReader): StaircaseWithLandings;
}

export namespace StaircaseWithLandings {
    export type AsObject = {
        bottomLanding?: StaircaseLanding.AsObject,
        staircase?: Staircase.AsObject,
        topLanding?: StaircaseLanding.AsObject,
    }
}
