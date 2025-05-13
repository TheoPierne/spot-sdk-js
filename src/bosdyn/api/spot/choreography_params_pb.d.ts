// package: bosdyn.api.spot
// file: bosdyn/api/spot/choreography_params.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_geometry_pb from "../../../bosdyn/api/geometry_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class EulerZYX extends jspb.Message { 
    getRoll(): number;
    setRoll(value: number): EulerZYX;
    getPitch(): number;
    setPitch(value: number): EulerZYX;
    getYaw(): number;
    setYaw(value: number): EulerZYX;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EulerZYX.AsObject;
    static toObject(includeInstance: boolean, msg: EulerZYX): EulerZYX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EulerZYX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EulerZYX;
    static deserializeBinaryFromReader(message: EulerZYX, reader: jspb.BinaryReader): EulerZYX;
}

export namespace EulerZYX {
    export type AsObject = {
        roll: number,
        pitch: number,
        yaw: number,
    }
}

export class EulerZYXValue extends jspb.Message { 

    hasRoll(): boolean;
    clearRoll(): void;
    getRoll(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRoll(value?: google_protobuf_wrappers_pb.DoubleValue): EulerZYXValue;

    hasPitch(): boolean;
    clearPitch(): void;
    getPitch(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPitch(value?: google_protobuf_wrappers_pb.DoubleValue): EulerZYXValue;

    hasYaw(): boolean;
    clearYaw(): void;
    getYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYaw(value?: google_protobuf_wrappers_pb.DoubleValue): EulerZYXValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EulerZYXValue.AsObject;
    static toObject(includeInstance: boolean, msg: EulerZYXValue): EulerZYXValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EulerZYXValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EulerZYXValue;
    static deserializeBinaryFromReader(message: EulerZYXValue, reader: jspb.BinaryReader): EulerZYXValue;
}

export namespace EulerZYXValue {
    export type AsObject = {
        roll?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        pitch?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        yaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class EulerRateZYXValue extends jspb.Message { 

    hasRoll(): boolean;
    clearRoll(): void;
    getRoll(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRoll(value?: google_protobuf_wrappers_pb.DoubleValue): EulerRateZYXValue;

    hasPitch(): boolean;
    clearPitch(): void;
    getPitch(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPitch(value?: google_protobuf_wrappers_pb.DoubleValue): EulerRateZYXValue;

    hasYaw(): boolean;
    clearYaw(): void;
    getYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYaw(value?: google_protobuf_wrappers_pb.DoubleValue): EulerRateZYXValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EulerRateZYXValue.AsObject;
    static toObject(includeInstance: boolean, msg: EulerRateZYXValue): EulerRateZYXValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EulerRateZYXValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EulerRateZYXValue;
    static deserializeBinaryFromReader(message: EulerRateZYXValue, reader: jspb.BinaryReader): EulerRateZYXValue;
}

export namespace EulerRateZYXValue {
    export type AsObject = {
        roll?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        pitch?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        yaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class BodyHoldParams extends jspb.Message { 

    hasRotation(): boolean;
    clearRotation(): void;
    getRotation(): EulerZYXValue | undefined;
    setRotation(value?: EulerZYXValue): BodyHoldParams;

    hasTranslation(): boolean;
    clearTranslation(): void;
    getTranslation(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setTranslation(value?: bosdyn_api_geometry_pb.Vec3Value): BodyHoldParams;

    hasEntrySlices(): boolean;
    clearEntrySlices(): void;
    getEntrySlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setEntrySlices(value?: google_protobuf_wrappers_pb.DoubleValue): BodyHoldParams;

    hasExitSlices(): boolean;
    clearExitSlices(): void;
    getExitSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setExitSlices(value?: google_protobuf_wrappers_pb.DoubleValue): BodyHoldParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BodyHoldParams.AsObject;
    static toObject(includeInstance: boolean, msg: BodyHoldParams): BodyHoldParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BodyHoldParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BodyHoldParams;
    static deserializeBinaryFromReader(message: BodyHoldParams, reader: jspb.BinaryReader): BodyHoldParams;
}

export namespace BodyHoldParams {
    export type AsObject = {
        rotation?: EulerZYXValue.AsObject,
        translation?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        entrySlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        exitSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class SwayParams extends jspb.Message { 

    hasVertical(): boolean;
    clearVertical(): void;
    getVertical(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVertical(value?: google_protobuf_wrappers_pb.DoubleValue): SwayParams;

    hasHorizontal(): boolean;
    clearHorizontal(): void;
    getHorizontal(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHorizontal(value?: google_protobuf_wrappers_pb.DoubleValue): SwayParams;

    hasRoll(): boolean;
    clearRoll(): void;
    getRoll(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRoll(value?: google_protobuf_wrappers_pb.DoubleValue): SwayParams;
    getPivot(): Pivot;
    setPivot(value: Pivot): SwayParams;
    getStyle(): SwayParams.SwayStyle;
    setStyle(value: SwayParams.SwayStyle): SwayParams;

    hasPronounced(): boolean;
    clearPronounced(): void;
    getPronounced(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPronounced(value?: google_protobuf_wrappers_pb.DoubleValue): SwayParams;

    hasHoldZeroAxes(): boolean;
    clearHoldZeroAxes(): void;
    getHoldZeroAxes(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setHoldZeroAxes(value?: google_protobuf_wrappers_pb.BoolValue): SwayParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwayParams.AsObject;
    static toObject(includeInstance: boolean, msg: SwayParams): SwayParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwayParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwayParams;
    static deserializeBinaryFromReader(message: SwayParams, reader: jspb.BinaryReader): SwayParams;
}

export namespace SwayParams {
    export type AsObject = {
        vertical?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        horizontal?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        roll?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        pivot: Pivot,
        style: SwayParams.SwayStyle,
        pronounced?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        holdZeroAxes?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export enum SwayStyle {
    SWAY_STYLE_UNKNOWN = 0,
    SWAY_STYLE_STANDARD = 1,
    SWAY_STYLE_FAST_OUT = 2,
    SWAY_STYLE_FAST_RETURN = 3,
    SWAY_STYLE_SQUARE = 4,
    SWAY_STYLE_SPIKE = 5,
    SWAY_STYLE_PLATEAU = 6,
    }

}

export class ArmMoveParams extends jspb.Message { 

    hasShoulder0(): boolean;
    clearShoulder0(): void;
    getShoulder0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setShoulder0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmMoveParams;

    hasShoulder1(): boolean;
    clearShoulder1(): void;
    getShoulder1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setShoulder1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmMoveParams;

    hasElbow0(): boolean;
    clearElbow0(): void;
    getElbow0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setElbow0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmMoveParams;

    hasElbow1(): boolean;
    clearElbow1(): void;
    getElbow1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setElbow1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmMoveParams;

    hasWrist0(): boolean;
    clearWrist0(): void;
    getWrist0(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWrist0(value?: google_protobuf_wrappers_pb.DoubleValue): ArmMoveParams;

    hasWrist1(): boolean;
    clearWrist1(): void;
    getWrist1(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWrist1(value?: google_protobuf_wrappers_pb.DoubleValue): ArmMoveParams;
    getEasing(): Easing;
    setEasing(value: Easing): ArmMoveParams;

    hasGripper(): boolean;
    clearGripper(): void;
    getGripper(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGripper(value?: google_protobuf_wrappers_pb.DoubleValue): ArmMoveParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArmMoveParams.AsObject;
    static toObject(includeInstance: boolean, msg: ArmMoveParams): ArmMoveParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArmMoveParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArmMoveParams;
    static deserializeBinaryFromReader(message: ArmMoveParams, reader: jspb.BinaryReader): ArmMoveParams;
}

export namespace ArmMoveParams {
    export type AsObject = {
        shoulder0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        shoulder1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        elbow0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        elbow1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wrist0?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wrist1?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        easing: Easing,
        gripper?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class WorkspaceArmMoveParams extends jspb.Message { 

    hasRotation(): boolean;
    clearRotation(): void;
    getRotation(): EulerZYXValue | undefined;
    setRotation(value?: EulerZYXValue): WorkspaceArmMoveParams;

    hasTranslation(): boolean;
    clearTranslation(): void;
    getTranslation(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setTranslation(value?: bosdyn_api_geometry_pb.Vec3Value): WorkspaceArmMoveParams;

    hasAbsolute(): boolean;
    clearAbsolute(): void;
    getAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): WorkspaceArmMoveParams;
    getFrame(): ArmMoveFrame;
    setFrame(value: ArmMoveFrame): WorkspaceArmMoveParams;
    getEasing(): Easing;
    setEasing(value: Easing): WorkspaceArmMoveParams;

    hasDanceFrameId(): boolean;
    clearDanceFrameId(): void;
    getDanceFrameId(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setDanceFrameId(value?: google_protobuf_wrappers_pb.Int32Value): WorkspaceArmMoveParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkspaceArmMoveParams.AsObject;
    static toObject(includeInstance: boolean, msg: WorkspaceArmMoveParams): WorkspaceArmMoveParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkspaceArmMoveParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkspaceArmMoveParams;
    static deserializeBinaryFromReader(message: WorkspaceArmMoveParams, reader: jspb.BinaryReader): WorkspaceArmMoveParams;
}

export namespace WorkspaceArmMoveParams {
    export type AsObject = {
        rotation?: EulerZYXValue.AsObject,
        translation?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        absolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        frame: ArmMoveFrame,
        easing: Easing,
        danceFrameId?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class Figure8Params extends jspb.Message { 

    hasHeight(): boolean;
    clearHeight(): void;
    getHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHeight(value?: google_protobuf_wrappers_pb.DoubleValue): Figure8Params;

    hasWidth(): boolean;
    clearWidth(): void;
    getWidth(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWidth(value?: google_protobuf_wrappers_pb.DoubleValue): Figure8Params;

    hasBeatsPerCycle(): boolean;
    clearBeatsPerCycle(): void;
    getBeatsPerCycle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBeatsPerCycle(value?: google_protobuf_wrappers_pb.DoubleValue): Figure8Params;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Figure8Params.AsObject;
    static toObject(includeInstance: boolean, msg: Figure8Params): Figure8Params.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Figure8Params, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Figure8Params;
    static deserializeBinaryFromReader(message: Figure8Params, reader: jspb.BinaryReader): Figure8Params;
}

export namespace Figure8Params {
    export type AsObject = {
        height?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        width?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        beatsPerCycle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class GripperParams extends jspb.Message { 

    hasAngle(): boolean;
    clearAngle(): void;
    getAngle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAngle(value?: google_protobuf_wrappers_pb.DoubleValue): GripperParams;

    hasSpeed(): boolean;
    clearSpeed(): void;
    getSpeed(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSpeed(value?: google_protobuf_wrappers_pb.DoubleValue): GripperParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GripperParams.AsObject;
    static toObject(includeInstance: boolean, msg: GripperParams): GripperParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GripperParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GripperParams;
    static deserializeBinaryFromReader(message: GripperParams, reader: jspb.BinaryReader): GripperParams;
}

export namespace GripperParams {
    export type AsObject = {
        angle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        speed?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class KneelLegMoveParams extends jspb.Message { 

    hasHipX(): boolean;
    clearHipX(): void;
    getHipX(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHipX(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMoveParams;

    hasHipY(): boolean;
    clearHipY(): void;
    getHipY(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHipY(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMoveParams;

    hasKnee(): boolean;
    clearKnee(): void;
    getKnee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setKnee(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMoveParams;

    hasMirror(): boolean;
    clearMirror(): void;
    getMirror(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setMirror(value?: google_protobuf_wrappers_pb.BoolValue): KneelLegMoveParams;
    getEasing(): Easing;
    setEasing(value: Easing): KneelLegMoveParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KneelLegMoveParams.AsObject;
    static toObject(includeInstance: boolean, msg: KneelLegMoveParams): KneelLegMoveParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KneelLegMoveParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KneelLegMoveParams;
    static deserializeBinaryFromReader(message: KneelLegMoveParams, reader: jspb.BinaryReader): KneelLegMoveParams;
}

export namespace KneelLegMoveParams {
    export type AsObject = {
        hipX?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        hipY?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        knee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        mirror?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        easing: Easing,
    }
}

export class KneelLegMove2Params extends jspb.Message { 

    hasLeftHipX(): boolean;
    clearLeftHipX(): void;
    getLeftHipX(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLeftHipX(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMove2Params;

    hasLeftHipY(): boolean;
    clearLeftHipY(): void;
    getLeftHipY(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLeftHipY(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMove2Params;

    hasLeftKnee(): boolean;
    clearLeftKnee(): void;
    getLeftKnee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLeftKnee(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMove2Params;

    hasRightHipX(): boolean;
    clearRightHipX(): void;
    getRightHipX(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRightHipX(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMove2Params;

    hasRightHipY(): boolean;
    clearRightHipY(): void;
    getRightHipY(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRightHipY(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMove2Params;

    hasRightKnee(): boolean;
    clearRightKnee(): void;
    getRightKnee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRightKnee(value?: google_protobuf_wrappers_pb.DoubleValue): KneelLegMove2Params;
    getEasing(): Easing;
    setEasing(value: Easing): KneelLegMove2Params;

    hasLinkToNext(): boolean;
    clearLinkToNext(): void;
    getLinkToNext(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLinkToNext(value?: google_protobuf_wrappers_pb.BoolValue): KneelLegMove2Params;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KneelLegMove2Params.AsObject;
    static toObject(includeInstance: boolean, msg: KneelLegMove2Params): KneelLegMove2Params.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KneelLegMove2Params, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KneelLegMove2Params;
    static deserializeBinaryFromReader(message: KneelLegMove2Params, reader: jspb.BinaryReader): KneelLegMove2Params;
}

export namespace KneelLegMove2Params {
    export type AsObject = {
        leftHipX?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        leftHipY?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        leftKnee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        rightHipX?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        rightHipY?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        rightKnee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        easing: Easing,
        linkToNext?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class RunningManParams extends jspb.Message { 

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setVelocity(value?: bosdyn_api_geometry_pb.Vec2Value): RunningManParams;

    hasSwingHeight(): boolean;
    clearSwingHeight(): void;
    getSwingHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSwingHeight(value?: google_protobuf_wrappers_pb.DoubleValue): RunningManParams;

    hasSpread(): boolean;
    clearSpread(): void;
    getSpread(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSpread(value?: google_protobuf_wrappers_pb.DoubleValue): RunningManParams;

    hasReverse(): boolean;
    clearReverse(): void;
    getReverse(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setReverse(value?: google_protobuf_wrappers_pb.BoolValue): RunningManParams;

    hasPreMoveCycles(): boolean;
    clearPreMoveCycles(): void;
    getPreMoveCycles(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setPreMoveCycles(value?: google_protobuf_wrappers_pb.Int32Value): RunningManParams;

    hasSpeedMultiplier(): boolean;
    clearSpeedMultiplier(): void;
    getSpeedMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSpeedMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): RunningManParams;

    hasDutyCycle(): boolean;
    clearDutyCycle(): void;
    getDutyCycle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDutyCycle(value?: google_protobuf_wrappers_pb.DoubleValue): RunningManParams;

    hasComHeight(): boolean;
    clearComHeight(): void;
    getComHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setComHeight(value?: google_protobuf_wrappers_pb.DoubleValue): RunningManParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunningManParams.AsObject;
    static toObject(includeInstance: boolean, msg: RunningManParams): RunningManParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunningManParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunningManParams;
    static deserializeBinaryFromReader(message: RunningManParams, reader: jspb.BinaryReader): RunningManParams;
}

export namespace RunningManParams {
    export type AsObject = {
        velocity?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        swingHeight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        spread?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        reverse?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        preMoveCycles?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        speedMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        dutyCycle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        comHeight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class HopParams extends jspb.Message { 

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setVelocity(value?: bosdyn_api_geometry_pb.Vec2Value): HopParams;

    hasYawRate(): boolean;
    clearYawRate(): void;
    getYawRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYawRate(value?: google_protobuf_wrappers_pb.DoubleValue): HopParams;

    hasStandTime(): boolean;
    clearStandTime(): void;
    getStandTime(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStandTime(value?: google_protobuf_wrappers_pb.DoubleValue): HopParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HopParams.AsObject;
    static toObject(includeInstance: boolean, msg: HopParams): HopParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HopParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HopParams;
    static deserializeBinaryFromReader(message: HopParams, reader: jspb.BinaryReader): HopParams;
}

export namespace HopParams {
    export type AsObject = {
        velocity?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        yawRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        standTime?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class RandomRotateParams extends jspb.Message { 

    hasAmplitude(): boolean;
    clearAmplitude(): void;
    getAmplitude(): EulerZYXValue | undefined;
    setAmplitude(value?: EulerZYXValue): RandomRotateParams;

    hasSpeed(): boolean;
    clearSpeed(): void;
    getSpeed(): EulerRateZYXValue | undefined;
    setSpeed(value?: EulerRateZYXValue): RandomRotateParams;

    hasSpeedVariation(): boolean;
    clearSpeedVariation(): void;
    getSpeedVariation(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSpeedVariation(value?: google_protobuf_wrappers_pb.DoubleValue): RandomRotateParams;

    hasNumSpeedTiers(): boolean;
    clearNumSpeedTiers(): void;
    getNumSpeedTiers(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setNumSpeedTiers(value?: google_protobuf_wrappers_pb.Int32Value): RandomRotateParams;

    hasTierVariation(): boolean;
    clearTierVariation(): void;
    getTierVariation(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTierVariation(value?: google_protobuf_wrappers_pb.DoubleValue): RandomRotateParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RandomRotateParams.AsObject;
    static toObject(includeInstance: boolean, msg: RandomRotateParams): RandomRotateParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RandomRotateParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RandomRotateParams;
    static deserializeBinaryFromReader(message: RandomRotateParams, reader: jspb.BinaryReader): RandomRotateParams;
}

export namespace RandomRotateParams {
    export type AsObject = {
        amplitude?: EulerZYXValue.AsObject,
        speed?: EulerRateZYXValue.AsObject,
        speedVariation?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        numSpeedTiers?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        tierVariation?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class CrawlParams extends jspb.Message { 

    hasSwingSlices(): boolean;
    clearSwingSlices(): void;
    getSwingSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSwingSlices(value?: google_protobuf_wrappers_pb.DoubleValue): CrawlParams;

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setVelocity(value?: bosdyn_api_geometry_pb.Vec2Value): CrawlParams;

    hasStanceWidth(): boolean;
    clearStanceWidth(): void;
    getStanceWidth(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStanceWidth(value?: google_protobuf_wrappers_pb.DoubleValue): CrawlParams;

    hasStanceLength(): boolean;
    clearStanceLength(): void;
    getStanceLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStanceLength(value?: google_protobuf_wrappers_pb.DoubleValue): CrawlParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CrawlParams.AsObject;
    static toObject(includeInstance: boolean, msg: CrawlParams): CrawlParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CrawlParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CrawlParams;
    static deserializeBinaryFromReader(message: CrawlParams, reader: jspb.BinaryReader): CrawlParams;
}

export namespace CrawlParams {
    export type AsObject = {
        swingSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        velocity?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        stanceWidth?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        stanceLength?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class GotoParams extends jspb.Message { 

    hasRelative(): boolean;
    clearRelative(): void;
    getRelative(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRelative(value?: google_protobuf_wrappers_pb.BoolValue): GotoParams;

    hasAbsolutePosition(): boolean;
    clearAbsolutePosition(): void;
    getAbsolutePosition(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setAbsolutePosition(value?: bosdyn_api_geometry_pb.Vec2Value): GotoParams;

    hasAbsoluteYaw(): boolean;
    clearAbsoluteYaw(): void;
    getAbsoluteYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAbsoluteYaw(value?: google_protobuf_wrappers_pb.DoubleValue): GotoParams;

    hasRelativePosition(): boolean;
    clearRelativePosition(): void;
    getRelativePosition(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setRelativePosition(value?: bosdyn_api_geometry_pb.Vec2Value): GotoParams;

    hasRelativeYaw(): boolean;
    clearRelativeYaw(): void;
    getRelativeYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRelativeYaw(value?: google_protobuf_wrappers_pb.DoubleValue): GotoParams;

    hasStepPositionStiffness(): boolean;
    clearStepPositionStiffness(): void;
    getStepPositionStiffness(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStepPositionStiffness(value?: google_protobuf_wrappers_pb.DoubleValue): GotoParams;

    hasDutyCycle(): boolean;
    clearDutyCycle(): void;
    getDutyCycle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDutyCycle(value?: google_protobuf_wrappers_pb.DoubleValue): GotoParams;

    hasLinkToNext(): boolean;
    clearLinkToNext(): void;
    getLinkToNext(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLinkToNext(value?: google_protobuf_wrappers_pb.BoolValue): GotoParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GotoParams.AsObject;
    static toObject(includeInstance: boolean, msg: GotoParams): GotoParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GotoParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GotoParams;
    static deserializeBinaryFromReader(message: GotoParams, reader: jspb.BinaryReader): GotoParams;
}

export namespace GotoParams {
    export type AsObject = {
        relative?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        absolutePosition?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        absoluteYaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        relativePosition?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        relativeYaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        stepPositionStiffness?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        dutyCycle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        linkToNext?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class BourreeParams extends jspb.Message { 

    hasVelocity(): boolean;
    clearVelocity(): void;
    getVelocity(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setVelocity(value?: bosdyn_api_geometry_pb.Vec2Value): BourreeParams;

    hasYawRate(): boolean;
    clearYawRate(): void;
    getYawRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYawRate(value?: google_protobuf_wrappers_pb.DoubleValue): BourreeParams;

    hasStanceLength(): boolean;
    clearStanceLength(): void;
    getStanceLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStanceLength(value?: google_protobuf_wrappers_pb.DoubleValue): BourreeParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BourreeParams.AsObject;
    static toObject(includeInstance: boolean, msg: BourreeParams): BourreeParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BourreeParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BourreeParams;
    static deserializeBinaryFromReader(message: BourreeParams, reader: jspb.BinaryReader): BourreeParams;
}

export namespace BourreeParams {
    export type AsObject = {
        velocity?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        yawRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        stanceLength?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class SideParams extends jspb.Message { 
    getSide(): SideParams.Side;
    setSide(value: SideParams.Side): SideParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SideParams.AsObject;
    static toObject(includeInstance: boolean, msg: SideParams): SideParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SideParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SideParams;
    static deserializeBinaryFromReader(message: SideParams, reader: jspb.BinaryReader): SideParams;
}

export namespace SideParams {
    export type AsObject = {
        side: SideParams.Side,
    }

    export enum Side {
    SIDE_UNKNOWN = 0,
    SIDE_LEFT = 1,
    SIDE_RIGHT = 2,
    }

}

export class JumpParams extends jspb.Message { 

    hasYaw(): boolean;
    clearYaw(): void;
    getYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYaw(value?: google_protobuf_wrappers_pb.DoubleValue): JumpParams;

    hasFlightSlices(): boolean;
    clearFlightSlices(): void;
    getFlightSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFlightSlices(value?: google_protobuf_wrappers_pb.DoubleValue): JumpParams;

    hasStanceWidth(): boolean;
    clearStanceWidth(): void;
    getStanceWidth(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStanceWidth(value?: google_protobuf_wrappers_pb.DoubleValue): JumpParams;

    hasStanceLength(): boolean;
    clearStanceLength(): void;
    getStanceLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStanceLength(value?: google_protobuf_wrappers_pb.DoubleValue): JumpParams;

    hasTranslation(): boolean;
    clearTranslation(): void;
    getTranslation(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setTranslation(value?: bosdyn_api_geometry_pb.Vec2Value): JumpParams;

    hasSplitFraction(): boolean;
    clearSplitFraction(): void;
    getSplitFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSplitFraction(value?: google_protobuf_wrappers_pb.DoubleValue): JumpParams;
    getLeadLegPair(): JumpParams.Lead;
    setLeadLegPair(value: JumpParams.Lead): JumpParams;

    hasYawIsAbsolute(): boolean;
    clearYawIsAbsolute(): void;
    getYawIsAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setYawIsAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): JumpParams;

    hasTranslationIsAbsolute(): boolean;
    clearTranslationIsAbsolute(): void;
    getTranslationIsAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTranslationIsAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): JumpParams;

    hasAbsoluteYaw(): boolean;
    clearAbsoluteYaw(): void;
    getAbsoluteYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAbsoluteYaw(value?: google_protobuf_wrappers_pb.DoubleValue): JumpParams;

    hasAbsoluteTranslation(): boolean;
    clearAbsoluteTranslation(): void;
    getAbsoluteTranslation(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setAbsoluteTranslation(value?: bosdyn_api_geometry_pb.Vec2Value): JumpParams;

    hasSwingHeight(): boolean;
    clearSwingHeight(): void;
    getSwingHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSwingHeight(value?: google_protobuf_wrappers_pb.DoubleValue): JumpParams;

    hasAbsolute(): boolean;
    clearAbsolute(): void;
    getAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): JumpParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JumpParams.AsObject;
    static toObject(includeInstance: boolean, msg: JumpParams): JumpParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JumpParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JumpParams;
    static deserializeBinaryFromReader(message: JumpParams, reader: jspb.BinaryReader): JumpParams;
}

export namespace JumpParams {
    export type AsObject = {
        yaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        flightSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        stanceWidth?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        stanceLength?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        translation?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        splitFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        leadLegPair: JumpParams.Lead,
        yawIsAbsolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        translationIsAbsolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        absoluteYaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        absoluteTranslation?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        swingHeight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        absolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export enum Lead {
    LEAD_UNKNOWN = 0,
    LEAD_AUTO = 1,
    LEAD_FRONT = 2,
    LEAD_HIND = 3,
    LEAD_LEFT = 4,
    LEAD_RIGHT = 5,
    }

}

export class StepParams extends jspb.Message { 
    getFoot(): Leg;
    setFoot(value: Leg): StepParams;

    hasOffset(): boolean;
    clearOffset(): void;
    getOffset(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setOffset(value?: bosdyn_api_geometry_pb.Vec2Value): StepParams;
    getSecondFoot(): Leg;
    setSecondFoot(value: Leg): StepParams;

    hasSwingWaypoint(): boolean;
    clearSwingWaypoint(): void;
    getSwingWaypoint(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setSwingWaypoint(value?: bosdyn_api_geometry_pb.Vec3Value): StepParams;

    hasSwingHeight(): boolean;
    clearSwingHeight(): void;
    getSwingHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSwingHeight(value?: google_protobuf_wrappers_pb.DoubleValue): StepParams;

    hasLiftoffVelocity(): boolean;
    clearLiftoffVelocity(): void;
    getLiftoffVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLiftoffVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): StepParams;

    hasTouchdownVelocity(): boolean;
    clearTouchdownVelocity(): void;
    getTouchdownVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTouchdownVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): StepParams;

    hasMirrorX(): boolean;
    clearMirrorX(): void;
    getMirrorX(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setMirrorX(value?: google_protobuf_wrappers_pb.BoolValue): StepParams;

    hasMirrorY(): boolean;
    clearMirrorY(): void;
    getMirrorY(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setMirrorY(value?: google_protobuf_wrappers_pb.BoolValue): StepParams;

    hasMirror(): boolean;
    clearMirror(): void;
    getMirror(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setMirror(value?: google_protobuf_wrappers_pb.BoolValue): StepParams;

    hasWaypointDwell(): boolean;
    clearWaypointDwell(): void;
    getWaypointDwell(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWaypointDwell(value?: google_protobuf_wrappers_pb.DoubleValue): StepParams;

    hasTouch(): boolean;
    clearTouch(): void;
    getTouch(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTouch(value?: google_protobuf_wrappers_pb.BoolValue): StepParams;

    hasTouchOffset(): boolean;
    clearTouchOffset(): void;
    getTouchOffset(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setTouchOffset(value?: bosdyn_api_geometry_pb.Vec2Value): StepParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepParams.AsObject;
    static toObject(includeInstance: boolean, msg: StepParams): StepParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepParams;
    static deserializeBinaryFromReader(message: StepParams, reader: jspb.BinaryReader): StepParams;
}

export namespace StepParams {
    export type AsObject = {
        foot: Leg,
        offset?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        secondFoot: Leg,
        swingWaypoint?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        swingHeight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        liftoffVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        touchdownVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        mirrorX?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        mirrorY?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        mirror?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        waypointDwell?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        touch?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        touchOffset?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
    }
}

export class RotateBodyParams extends jspb.Message { 

    hasRotation(): boolean;
    clearRotation(): void;
    getRotation(): EulerZYXValue | undefined;
    setRotation(value?: EulerZYXValue): RotateBodyParams;

    hasReturnToStartPose(): boolean;
    clearReturnToStartPose(): void;
    getReturnToStartPose(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setReturnToStartPose(value?: google_protobuf_wrappers_pb.BoolValue): RotateBodyParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RotateBodyParams.AsObject;
    static toObject(includeInstance: boolean, msg: RotateBodyParams): RotateBodyParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RotateBodyParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RotateBodyParams;
    static deserializeBinaryFromReader(message: RotateBodyParams, reader: jspb.BinaryReader): RotateBodyParams;
}

export namespace RotateBodyParams {
    export type AsObject = {
        rotation?: EulerZYXValue.AsObject,
        returnToStartPose?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class ButtCircleParams extends jspb.Message { 

    hasRadius(): boolean;
    clearRadius(): void;
    getRadius(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRadius(value?: google_protobuf_wrappers_pb.DoubleValue): ButtCircleParams;

    hasBeatsPerCircle(): boolean;
    clearBeatsPerCircle(): void;
    getBeatsPerCircle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBeatsPerCircle(value?: google_protobuf_wrappers_pb.DoubleValue): ButtCircleParams;

    hasNumberOfCircles(): boolean;
    clearNumberOfCircles(): void;
    getNumberOfCircles(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setNumberOfCircles(value?: google_protobuf_wrappers_pb.DoubleValue): ButtCircleParams;
    getPivot(): Pivot;
    setPivot(value: Pivot): ButtCircleParams;

    hasClockwise(): boolean;
    clearClockwise(): void;
    getClockwise(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setClockwise(value?: google_protobuf_wrappers_pb.BoolValue): ButtCircleParams;

    hasStartingAngle(): boolean;
    clearStartingAngle(): void;
    getStartingAngle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStartingAngle(value?: google_protobuf_wrappers_pb.DoubleValue): ButtCircleParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ButtCircleParams.AsObject;
    static toObject(includeInstance: boolean, msg: ButtCircleParams): ButtCircleParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ButtCircleParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ButtCircleParams;
    static deserializeBinaryFromReader(message: ButtCircleParams, reader: jspb.BinaryReader): ButtCircleParams;
}

export namespace ButtCircleParams {
    export type AsObject = {
        radius?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        beatsPerCircle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        numberOfCircles?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        pivot: Pivot,
        clockwise?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        startingAngle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class TwerkParams extends jspb.Message { 

    hasHeight(): boolean;
    clearHeight(): void;
    getHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHeight(value?: google_protobuf_wrappers_pb.DoubleValue): TwerkParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TwerkParams.AsObject;
    static toObject(includeInstance: boolean, msg: TwerkParams): TwerkParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TwerkParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TwerkParams;
    static deserializeBinaryFromReader(message: TwerkParams, reader: jspb.BinaryReader): TwerkParams;
}

export namespace TwerkParams {
    export type AsObject = {
        height?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class TurnParams extends jspb.Message { 

    hasYaw(): boolean;
    clearYaw(): void;
    getYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYaw(value?: google_protobuf_wrappers_pb.DoubleValue): TurnParams;

    hasAbsoluteYaw(): boolean;
    clearAbsoluteYaw(): void;
    getAbsoluteYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAbsoluteYaw(value?: google_protobuf_wrappers_pb.DoubleValue): TurnParams;

    hasYawIsAbsolute(): boolean;
    clearYawIsAbsolute(): void;
    getYawIsAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setYawIsAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): TurnParams;

    hasSwingHeight(): boolean;
    clearSwingHeight(): void;
    getSwingHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSwingHeight(value?: google_protobuf_wrappers_pb.DoubleValue): TurnParams;

    hasSwingVelocity(): boolean;
    clearSwingVelocity(): void;
    getSwingVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSwingVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): TurnParams;

    hasMotion(): boolean;
    clearMotion(): void;
    getMotion(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setMotion(value?: bosdyn_api_geometry_pb.Vec2Value): TurnParams;

    hasAbsoluteMotion(): boolean;
    clearAbsoluteMotion(): void;
    getAbsoluteMotion(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setAbsoluteMotion(value?: bosdyn_api_geometry_pb.Vec2Value): TurnParams;

    hasMotionIsAbsolute(): boolean;
    clearMotionIsAbsolute(): void;
    getMotionIsAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setMotionIsAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): TurnParams;

    hasAbsolute(): boolean;
    clearAbsolute(): void;
    getAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): TurnParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TurnParams.AsObject;
    static toObject(includeInstance: boolean, msg: TurnParams): TurnParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TurnParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TurnParams;
    static deserializeBinaryFromReader(message: TurnParams, reader: jspb.BinaryReader): TurnParams;
}

export namespace TurnParams {
    export type AsObject = {
        yaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        absoluteYaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        yawIsAbsolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        swingHeight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        swingVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        motion?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        absoluteMotion?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        motionIsAbsolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        absolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class Pace2StepParams extends jspb.Message { 

    hasMotion(): boolean;
    clearMotion(): void;
    getMotion(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setMotion(value?: bosdyn_api_geometry_pb.Vec2Value): Pace2StepParams;

    hasAbsoluteMotion(): boolean;
    clearAbsoluteMotion(): void;
    getAbsoluteMotion(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setAbsoluteMotion(value?: bosdyn_api_geometry_pb.Vec2Value): Pace2StepParams;

    hasMotionIsAbsolute(): boolean;
    clearMotionIsAbsolute(): void;
    getMotionIsAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setMotionIsAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): Pace2StepParams;

    hasSwingHeight(): boolean;
    clearSwingHeight(): void;
    getSwingHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSwingHeight(value?: google_protobuf_wrappers_pb.DoubleValue): Pace2StepParams;

    hasSwingVelocity(): boolean;
    clearSwingVelocity(): void;
    getSwingVelocity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSwingVelocity(value?: google_protobuf_wrappers_pb.DoubleValue): Pace2StepParams;

    hasYaw(): boolean;
    clearYaw(): void;
    getYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYaw(value?: google_protobuf_wrappers_pb.DoubleValue): Pace2StepParams;

    hasAbsoluteYaw(): boolean;
    clearAbsoluteYaw(): void;
    getAbsoluteYaw(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAbsoluteYaw(value?: google_protobuf_wrappers_pb.DoubleValue): Pace2StepParams;

    hasYawIsAbsolute(): boolean;
    clearYawIsAbsolute(): void;
    getYawIsAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setYawIsAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): Pace2StepParams;

    hasAbsolute(): boolean;
    clearAbsolute(): void;
    getAbsolute(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAbsolute(value?: google_protobuf_wrappers_pb.BoolValue): Pace2StepParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pace2StepParams.AsObject;
    static toObject(includeInstance: boolean, msg: Pace2StepParams): Pace2StepParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pace2StepParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pace2StepParams;
    static deserializeBinaryFromReader(message: Pace2StepParams, reader: jspb.BinaryReader): Pace2StepParams;
}

export namespace Pace2StepParams {
    export type AsObject = {
        motion?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        absoluteMotion?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        motionIsAbsolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        swingHeight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        swingVelocity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        yaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        absoluteYaw?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        yawIsAbsolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        absolute?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class ChickenHeadParams extends jspb.Message { 

    hasBobMagnitude(): boolean;
    clearBobMagnitude(): void;
    getBobMagnitude(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setBobMagnitude(value?: bosdyn_api_geometry_pb.Vec3Value): ChickenHeadParams;

    hasBeatsPerCycle(): boolean;
    clearBeatsPerCycle(): void;
    getBeatsPerCycle(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setBeatsPerCycle(value?: google_protobuf_wrappers_pb.Int32Value): ChickenHeadParams;

    hasFollow(): boolean;
    clearFollow(): void;
    getFollow(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setFollow(value?: google_protobuf_wrappers_pb.BoolValue): ChickenHeadParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChickenHeadParams.AsObject;
    static toObject(includeInstance: boolean, msg: ChickenHeadParams): ChickenHeadParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChickenHeadParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChickenHeadParams;
    static deserializeBinaryFromReader(message: ChickenHeadParams, reader: jspb.BinaryReader): ChickenHeadParams;
}

export namespace ChickenHeadParams {
    export type AsObject = {
        bobMagnitude?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        beatsPerCycle?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        follow?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class ClapParams extends jspb.Message { 

    hasDirection(): boolean;
    clearDirection(): void;
    getDirection(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setDirection(value?: bosdyn_api_geometry_pb.Vec3Value): ClapParams;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setLocation(value?: bosdyn_api_geometry_pb.Vec3Value): ClapParams;

    hasSpeed(): boolean;
    clearSpeed(): void;
    getSpeed(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSpeed(value?: google_protobuf_wrappers_pb.DoubleValue): ClapParams;

    hasClapDistance(): boolean;
    clearClapDistance(): void;
    getClapDistance(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setClapDistance(value?: google_protobuf_wrappers_pb.DoubleValue): ClapParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClapParams.AsObject;
    static toObject(includeInstance: boolean, msg: ClapParams): ClapParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClapParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClapParams;
    static deserializeBinaryFromReader(message: ClapParams, reader: jspb.BinaryReader): ClapParams;
}

export namespace ClapParams {
    export type AsObject = {
        direction?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        location?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        speed?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        clapDistance?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class KneelCircleParams extends jspb.Message { 

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setLocation(value?: bosdyn_api_geometry_pb.Vec3Value): KneelCircleParams;

    hasBeatsPerCircle(): boolean;
    clearBeatsPerCircle(): void;
    getBeatsPerCircle(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setBeatsPerCircle(value?: google_protobuf_wrappers_pb.Int32Value): KneelCircleParams;

    hasNumberOfCircles(): boolean;
    clearNumberOfCircles(): void;
    getNumberOfCircles(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setNumberOfCircles(value?: google_protobuf_wrappers_pb.DoubleValue): KneelCircleParams;

    hasOffset(): boolean;
    clearOffset(): void;
    getOffset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setOffset(value?: google_protobuf_wrappers_pb.DoubleValue): KneelCircleParams;

    hasRadius(): boolean;
    clearRadius(): void;
    getRadius(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRadius(value?: google_protobuf_wrappers_pb.DoubleValue): KneelCircleParams;

    hasReverse(): boolean;
    clearReverse(): void;
    getReverse(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setReverse(value?: google_protobuf_wrappers_pb.BoolValue): KneelCircleParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KneelCircleParams.AsObject;
    static toObject(includeInstance: boolean, msg: KneelCircleParams): KneelCircleParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KneelCircleParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KneelCircleParams;
    static deserializeBinaryFromReader(message: KneelCircleParams, reader: jspb.BinaryReader): KneelCircleParams;
}

export namespace KneelCircleParams {
    export type AsObject = {
        location?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        beatsPerCircle?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        numberOfCircles?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        offset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        radius?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        reverse?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class FrontUpParams extends jspb.Message { 

    hasMirror(): boolean;
    clearMirror(): void;
    getMirror(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setMirror(value?: google_protobuf_wrappers_pb.BoolValue): FrontUpParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrontUpParams.AsObject;
    static toObject(includeInstance: boolean, msg: FrontUpParams): FrontUpParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrontUpParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrontUpParams;
    static deserializeBinaryFromReader(message: FrontUpParams, reader: jspb.BinaryReader): FrontUpParams;
}

export namespace FrontUpParams {
    export type AsObject = {
        mirror?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class FidgetStandParams extends jspb.Message { 
    getPreset(): FidgetStandParams.FidgetPreset;
    setPreset(value: FidgetStandParams.FidgetPreset): FidgetStandParams;

    hasMinGazePitch(): boolean;
    clearMinGazePitch(): void;
    getMinGazePitch(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMinGazePitch(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasMaxGazePitch(): boolean;
    clearMaxGazePitch(): void;
    getMaxGazePitch(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMaxGazePitch(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasGazeMeanPeriod(): boolean;
    clearGazeMeanPeriod(): void;
    getGazeMeanPeriod(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGazeMeanPeriod(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasGazeCenterCfp(): boolean;
    clearGazeCenterCfp(): void;
    getGazeCenterCfp(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setGazeCenterCfp(value?: bosdyn_api_geometry_pb.Vec3Value): FidgetStandParams;

    hasShiftMeanPeriod(): boolean;
    clearShiftMeanPeriod(): void;
    getShiftMeanPeriod(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setShiftMeanPeriod(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasShiftMaxTransitionTime(): boolean;
    clearShiftMaxTransitionTime(): void;
    getShiftMaxTransitionTime(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setShiftMaxTransitionTime(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasBreathMinZ(): boolean;
    clearBreathMinZ(): void;
    getBreathMinZ(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBreathMinZ(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasBreathMaxZ(): boolean;
    clearBreathMaxZ(): void;
    getBreathMaxZ(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBreathMaxZ(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasBreathMaxPeriod(): boolean;
    clearBreathMaxPeriod(): void;
    getBreathMaxPeriod(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBreathMaxPeriod(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasLegGestureMeanPeriod(): boolean;
    clearLegGestureMeanPeriod(): void;
    getLegGestureMeanPeriod(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLegGestureMeanPeriod(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasGazeSlewRate(): boolean;
    clearGazeSlewRate(): void;
    getGazeSlewRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGazeSlewRate(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    hasGazePositionGenerationGain(): boolean;
    clearGazePositionGenerationGain(): void;
    getGazePositionGenerationGain(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setGazePositionGenerationGain(value?: bosdyn_api_geometry_pb.Vec3Value): FidgetStandParams;

    hasGazeRollGenerationGain(): boolean;
    clearGazeRollGenerationGain(): void;
    getGazeRollGenerationGain(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGazeRollGenerationGain(value?: google_protobuf_wrappers_pb.DoubleValue): FidgetStandParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FidgetStandParams.AsObject;
    static toObject(includeInstance: boolean, msg: FidgetStandParams): FidgetStandParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FidgetStandParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FidgetStandParams;
    static deserializeBinaryFromReader(message: FidgetStandParams, reader: jspb.BinaryReader): FidgetStandParams;
}

export namespace FidgetStandParams {
    export type AsObject = {
        preset: FidgetStandParams.FidgetPreset,
        minGazePitch?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        maxGazePitch?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        gazeMeanPeriod?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        gazeCenterCfp?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        shiftMeanPeriod?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        shiftMaxTransitionTime?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        breathMinZ?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        breathMaxZ?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        breathMaxPeriod?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        legGestureMeanPeriod?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        gazeSlewRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        gazePositionGenerationGain?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        gazeRollGenerationGain?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }

    export enum FidgetPreset {
    PRESET_UNKNOWN = 0,
    PRESET_CUSTOM = 1,
    PRESET_INTEREST = 2,
    PRESET_PLAYFUL = 3,
    PRESET_FEAR = 4,
    PRESET_NERVOUS = 5,
    PRESET_EXHAUSTED = 6,
    }

}

export class FrameSnapshotParams extends jspb.Message { 

    hasFrameId(): boolean;
    clearFrameId(): void;
    getFrameId(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setFrameId(value?: google_protobuf_wrappers_pb.Int32Value): FrameSnapshotParams;

    hasFiducialNumber(): boolean;
    clearFiducialNumber(): void;
    getFiducialNumber(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setFiducialNumber(value?: google_protobuf_wrappers_pb.Int32Value): FrameSnapshotParams;
    getIncludeFrontLeftLeg(): FrameSnapshotParams.Inclusion;
    setIncludeFrontLeftLeg(value: FrameSnapshotParams.Inclusion): FrameSnapshotParams;
    getIncludeFrontRightLeg(): FrameSnapshotParams.Inclusion;
    setIncludeFrontRightLeg(value: FrameSnapshotParams.Inclusion): FrameSnapshotParams;
    getIncludeHindLeftLeg(): FrameSnapshotParams.Inclusion;
    setIncludeHindLeftLeg(value: FrameSnapshotParams.Inclusion): FrameSnapshotParams;
    getIncludeHindRightLeg(): FrameSnapshotParams.Inclusion;
    setIncludeHindRightLeg(value: FrameSnapshotParams.Inclusion): FrameSnapshotParams;

    hasCompensated(): boolean;
    clearCompensated(): void;
    getCompensated(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setCompensated(value?: google_protobuf_wrappers_pb.BoolValue): FrameSnapshotParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrameSnapshotParams.AsObject;
    static toObject(includeInstance: boolean, msg: FrameSnapshotParams): FrameSnapshotParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrameSnapshotParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrameSnapshotParams;
    static deserializeBinaryFromReader(message: FrameSnapshotParams, reader: jspb.BinaryReader): FrameSnapshotParams;
}

export namespace FrameSnapshotParams {
    export type AsObject = {
        frameId?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        fiducialNumber?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        includeFrontLeftLeg: FrameSnapshotParams.Inclusion,
        includeFrontRightLeg: FrameSnapshotParams.Inclusion,
        includeHindLeftLeg: FrameSnapshotParams.Inclusion,
        includeHindRightLeg: FrameSnapshotParams.Inclusion,
        compensated?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export enum Inclusion {
    INCLUSION_UNKNOWN = 0,
    INCLUSION_IF_STANCE = 1,
    INCLUSION_INCLUDED = 2,
    INCLUSION_EXCLUDED = 3,
    }

}

export class SetColorParams extends jspb.Message { 

    hasLeftColor(): boolean;
    clearLeftColor(): void;
    getLeftColor(): Color | undefined;
    setLeftColor(value?: Color): SetColorParams;

    hasRightSameAsLeft(): boolean;
    clearRightSameAsLeft(): void;
    getRightSameAsLeft(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRightSameAsLeft(value?: google_protobuf_wrappers_pb.BoolValue): SetColorParams;

    hasRightColor(): boolean;
    clearRightColor(): void;
    getRightColor(): Color | undefined;
    setRightColor(value?: Color): SetColorParams;

    hasFadeInSlices(): boolean;
    clearFadeInSlices(): void;
    getFadeInSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeInSlices(value?: google_protobuf_wrappers_pb.DoubleValue): SetColorParams;

    hasFadeOutSlices(): boolean;
    clearFadeOutSlices(): void;
    getFadeOutSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeOutSlices(value?: google_protobuf_wrappers_pb.DoubleValue): SetColorParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetColorParams.AsObject;
    static toObject(includeInstance: boolean, msg: SetColorParams): SetColorParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetColorParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetColorParams;
    static deserializeBinaryFromReader(message: SetColorParams, reader: jspb.BinaryReader): SetColorParams;
}

export namespace SetColorParams {
    export type AsObject = {
        leftColor?: Color.AsObject,
        rightSameAsLeft?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        rightColor?: Color.AsObject,
        fadeInSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        fadeOutSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class FadeColorParams extends jspb.Message { 

    hasTopColor(): boolean;
    clearTopColor(): void;
    getTopColor(): Color | undefined;
    setTopColor(value?: Color): FadeColorParams;

    hasBottomColor(): boolean;
    clearBottomColor(): void;
    getBottomColor(): Color | undefined;
    setBottomColor(value?: Color): FadeColorParams;

    hasFadeInSlices(): boolean;
    clearFadeInSlices(): void;
    getFadeInSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeInSlices(value?: google_protobuf_wrappers_pb.DoubleValue): FadeColorParams;

    hasFadeOutSlices(): boolean;
    clearFadeOutSlices(): void;
    getFadeOutSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeOutSlices(value?: google_protobuf_wrappers_pb.DoubleValue): FadeColorParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FadeColorParams.AsObject;
    static toObject(includeInstance: boolean, msg: FadeColorParams): FadeColorParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FadeColorParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FadeColorParams;
    static deserializeBinaryFromReader(message: FadeColorParams, reader: jspb.BinaryReader): FadeColorParams;
}

export namespace FadeColorParams {
    export type AsObject = {
        topColor?: Color.AsObject,
        bottomColor?: Color.AsObject,
        fadeInSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        fadeOutSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class IndependentColorParams extends jspb.Message { 

    hasTopLeft(): boolean;
    clearTopLeft(): void;
    getTopLeft(): Color | undefined;
    setTopLeft(value?: Color): IndependentColorParams;

    hasUpperMidLeft(): boolean;
    clearUpperMidLeft(): void;
    getUpperMidLeft(): Color | undefined;
    setUpperMidLeft(value?: Color): IndependentColorParams;

    hasLowerMidLeft(): boolean;
    clearLowerMidLeft(): void;
    getLowerMidLeft(): Color | undefined;
    setLowerMidLeft(value?: Color): IndependentColorParams;

    hasBottomLeft(): boolean;
    clearBottomLeft(): void;
    getBottomLeft(): Color | undefined;
    setBottomLeft(value?: Color): IndependentColorParams;

    hasTopRight(): boolean;
    clearTopRight(): void;
    getTopRight(): Color | undefined;
    setTopRight(value?: Color): IndependentColorParams;

    hasUpperMidRight(): boolean;
    clearUpperMidRight(): void;
    getUpperMidRight(): Color | undefined;
    setUpperMidRight(value?: Color): IndependentColorParams;

    hasLowerMidRight(): boolean;
    clearLowerMidRight(): void;
    getLowerMidRight(): Color | undefined;
    setLowerMidRight(value?: Color): IndependentColorParams;

    hasBottomRight(): boolean;
    clearBottomRight(): void;
    getBottomRight(): Color | undefined;
    setBottomRight(value?: Color): IndependentColorParams;

    hasFadeInSlices(): boolean;
    clearFadeInSlices(): void;
    getFadeInSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeInSlices(value?: google_protobuf_wrappers_pb.DoubleValue): IndependentColorParams;

    hasFadeOutSlices(): boolean;
    clearFadeOutSlices(): void;
    getFadeOutSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeOutSlices(value?: google_protobuf_wrappers_pb.DoubleValue): IndependentColorParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndependentColorParams.AsObject;
    static toObject(includeInstance: boolean, msg: IndependentColorParams): IndependentColorParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndependentColorParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndependentColorParams;
    static deserializeBinaryFromReader(message: IndependentColorParams, reader: jspb.BinaryReader): IndependentColorParams;
}

export namespace IndependentColorParams {
    export type AsObject = {
        topLeft?: Color.AsObject,
        upperMidLeft?: Color.AsObject,
        lowerMidLeft?: Color.AsObject,
        bottomLeft?: Color.AsObject,
        topRight?: Color.AsObject,
        upperMidRight?: Color.AsObject,
        lowerMidRight?: Color.AsObject,
        bottomRight?: Color.AsObject,
        fadeInSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        fadeOutSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class Color extends jspb.Message { 

    hasRed(): boolean;
    clearRed(): void;
    getRed(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRed(value?: google_protobuf_wrappers_pb.DoubleValue): Color;

    hasGreen(): boolean;
    clearGreen(): void;
    getGreen(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGreen(value?: google_protobuf_wrappers_pb.DoubleValue): Color;

    hasBlue(): boolean;
    clearBlue(): void;
    getBlue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBlue(value?: google_protobuf_wrappers_pb.DoubleValue): Color;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Color.AsObject;
    static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Color;
    static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
    export type AsObject = {
        red?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        green?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        blue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class RippleColorParams extends jspb.Message { 

    hasMain(): boolean;
    clearMain(): void;
    getMain(): Color | undefined;
    setMain(value?: Color): RippleColorParams;

    hasSecondary(): boolean;
    clearSecondary(): void;
    getSecondary(): Color | undefined;
    setSecondary(value?: Color): RippleColorParams;
    getPattern(): RippleColorParams.Pattern;
    setPattern(value: RippleColorParams.Pattern): RippleColorParams;
    getLightSide(): RippleColorParams.LightSide;
    setLightSide(value: RippleColorParams.LightSide): RippleColorParams;

    hasIncrementSlices(): boolean;
    clearIncrementSlices(): void;
    getIncrementSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setIncrementSlices(value?: google_protobuf_wrappers_pb.DoubleValue): RippleColorParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RippleColorParams.AsObject;
    static toObject(includeInstance: boolean, msg: RippleColorParams): RippleColorParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RippleColorParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RippleColorParams;
    static deserializeBinaryFromReader(message: RippleColorParams, reader: jspb.BinaryReader): RippleColorParams;
}

export namespace RippleColorParams {
    export type AsObject = {
        main?: Color.AsObject,
        secondary?: Color.AsObject,
        pattern: RippleColorParams.Pattern,
        lightSide: RippleColorParams.LightSide,
        incrementSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }

    export enum Pattern {
    PATTERN_UNKNOWN = 0,
    PATTERN_FLASHING = 1,
    PATTERN_SNAKE = 2,
    PATTERN_ALTERNATE_COLORS = 3,
    PATTERN_FINE_GRAINED_ALTERNATE_COLORS = 4,
    }

    export enum LightSide {
    LIGHT_SIDE_UNKNOWN = 0,
    LIGHT_SIDE_LEFT = 1,
    LIGHT_SIDE_RIGHT = 2,
    LIGHT_SIDE_BOTH_IN_SEQUENCE = 3,
    LIGHT_SIDE_BOTH_MATCHING = 4,
    }

}

export class SetAudioVisualColorParams extends jspb.Message { 

    hasFrontCenterColor(): boolean;
    clearFrontCenterColor(): void;
    getFrontCenterColor(): Color | undefined;
    setFrontCenterColor(value?: Color): SetAudioVisualColorParams;

    hasAllSameAsCenter(): boolean;
    clearAllSameAsCenter(): void;
    getAllSameAsCenter(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAllSameAsCenter(value?: google_protobuf_wrappers_pb.BoolValue): SetAudioVisualColorParams;

    hasFrontLeftColor(): boolean;
    clearFrontLeftColor(): void;
    getFrontLeftColor(): Color | undefined;
    setFrontLeftColor(value?: Color): SetAudioVisualColorParams;

    hasFrontRightColor(): boolean;
    clearFrontRightColor(): void;
    getFrontRightColor(): Color | undefined;
    setFrontRightColor(value?: Color): SetAudioVisualColorParams;

    hasBackLeftColor(): boolean;
    clearBackLeftColor(): void;
    getBackLeftColor(): Color | undefined;
    setBackLeftColor(value?: Color): SetAudioVisualColorParams;

    hasBackRightColor(): boolean;
    clearBackRightColor(): void;
    getBackRightColor(): Color | undefined;
    setBackRightColor(value?: Color): SetAudioVisualColorParams;

    hasFadeInSlices(): boolean;
    clearFadeInSlices(): void;
    getFadeInSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeInSlices(value?: google_protobuf_wrappers_pb.DoubleValue): SetAudioVisualColorParams;

    hasFadeOutSlices(): boolean;
    clearFadeOutSlices(): void;
    getFadeOutSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeOutSlices(value?: google_protobuf_wrappers_pb.DoubleValue): SetAudioVisualColorParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAudioVisualColorParams.AsObject;
    static toObject(includeInstance: boolean, msg: SetAudioVisualColorParams): SetAudioVisualColorParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAudioVisualColorParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAudioVisualColorParams;
    static deserializeBinaryFromReader(message: SetAudioVisualColorParams, reader: jspb.BinaryReader): SetAudioVisualColorParams;
}

export namespace SetAudioVisualColorParams {
    export type AsObject = {
        frontCenterColor?: Color.AsObject,
        allSameAsCenter?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        frontLeftColor?: Color.AsObject,
        frontRightColor?: Color.AsObject,
        backLeftColor?: Color.AsObject,
        backRightColor?: Color.AsObject,
        fadeInSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        fadeOutSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class SetAllColorParams extends jspb.Message { 

    hasFrontCenterColor(): boolean;
    clearFrontCenterColor(): void;
    getFrontCenterColor(): Color | undefined;
    setFrontCenterColor(value?: Color): SetAllColorParams;

    hasAllSameAsCenter(): boolean;
    clearAllSameAsCenter(): void;
    getAllSameAsCenter(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAllSameAsCenter(value?: google_protobuf_wrappers_pb.BoolValue): SetAllColorParams;

    hasStatusLeftColor(): boolean;
    clearStatusLeftColor(): void;
    getStatusLeftColor(): Color | undefined;
    setStatusLeftColor(value?: Color): SetAllColorParams;

    hasStatusRightColor(): boolean;
    clearStatusRightColor(): void;
    getStatusRightColor(): Color | undefined;
    setStatusRightColor(value?: Color): SetAllColorParams;

    hasFrontLeftColor(): boolean;
    clearFrontLeftColor(): void;
    getFrontLeftColor(): Color | undefined;
    setFrontLeftColor(value?: Color): SetAllColorParams;

    hasFrontRightColor(): boolean;
    clearFrontRightColor(): void;
    getFrontRightColor(): Color | undefined;
    setFrontRightColor(value?: Color): SetAllColorParams;

    hasBackLeftColor(): boolean;
    clearBackLeftColor(): void;
    getBackLeftColor(): Color | undefined;
    setBackLeftColor(value?: Color): SetAllColorParams;

    hasBackRightColor(): boolean;
    clearBackRightColor(): void;
    getBackRightColor(): Color | undefined;
    setBackRightColor(value?: Color): SetAllColorParams;

    hasFadeInSlices(): boolean;
    clearFadeInSlices(): void;
    getFadeInSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeInSlices(value?: google_protobuf_wrappers_pb.DoubleValue): SetAllColorParams;

    hasFadeOutSlices(): boolean;
    clearFadeOutSlices(): void;
    getFadeOutSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFadeOutSlices(value?: google_protobuf_wrappers_pb.DoubleValue): SetAllColorParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAllColorParams.AsObject;
    static toObject(includeInstance: boolean, msg: SetAllColorParams): SetAllColorParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAllColorParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAllColorParams;
    static deserializeBinaryFromReader(message: SetAllColorParams, reader: jspb.BinaryReader): SetAllColorParams;
}

export namespace SetAllColorParams {
    export type AsObject = {
        frontCenterColor?: Color.AsObject,
        allSameAsCenter?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        statusLeftColor?: Color.AsObject,
        statusRightColor?: Color.AsObject,
        frontLeftColor?: Color.AsObject,
        frontRightColor?: Color.AsObject,
        backLeftColor?: Color.AsObject,
        backRightColor?: Color.AsObject,
        fadeInSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        fadeOutSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class BuzzerNoteParams extends jspb.Message { 
    getNote(): BuzzerNoteParams.Note;
    setNote(value: BuzzerNoteParams.Note): BuzzerNoteParams;

    hasSharp(): boolean;
    clearSharp(): void;
    getSharp(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSharp(value?: google_protobuf_wrappers_pb.BoolValue): BuzzerNoteParams;

    hasFlat(): boolean;
    clearFlat(): void;
    getFlat(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setFlat(value?: google_protobuf_wrappers_pb.BoolValue): BuzzerNoteParams;

    hasOctave(): boolean;
    clearOctave(): void;
    getOctave(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setOctave(value?: google_protobuf_wrappers_pb.Int32Value): BuzzerNoteParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuzzerNoteParams.AsObject;
    static toObject(includeInstance: boolean, msg: BuzzerNoteParams): BuzzerNoteParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuzzerNoteParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuzzerNoteParams;
    static deserializeBinaryFromReader(message: BuzzerNoteParams, reader: jspb.BinaryReader): BuzzerNoteParams;
}

export namespace BuzzerNoteParams {
    export type AsObject = {
        note: BuzzerNoteParams.Note,
        sharp?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        flat?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        octave?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }

    export enum Note {
    NOTE_UNKNOWN = 0,
    NOTE_C = 1,
    NOTE_D = 2,
    NOTE_E = 3,
    NOTE_F = 4,
    NOTE_G = 5,
    NOTE_A = 6,
    NOTE_B = 7,
    }

}

export class LegJointParams extends jspb.Message { 

    hasFlHx(): boolean;
    clearFlHx(): void;
    getFlHx(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFlHx(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasFlHy(): boolean;
    clearFlHy(): void;
    getFlHy(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFlHy(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasFlKn(): boolean;
    clearFlKn(): void;
    getFlKn(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFlKn(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasFrHx(): boolean;
    clearFrHx(): void;
    getFrHx(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFrHx(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasFrHy(): boolean;
    clearFrHy(): void;
    getFrHy(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFrHy(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasFrKn(): boolean;
    clearFrKn(): void;
    getFrKn(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFrKn(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasHlHx(): boolean;
    clearHlHx(): void;
    getHlHx(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHlHx(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasHlHy(): boolean;
    clearHlHy(): void;
    getHlHy(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHlHy(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasHlKn(): boolean;
    clearHlKn(): void;
    getHlKn(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHlKn(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasHrHx(): boolean;
    clearHrHx(): void;
    getHrHx(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHrHx(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasHrHy(): boolean;
    clearHrHy(): void;
    getHrHy(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHrHy(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    hasHrKn(): boolean;
    clearHrKn(): void;
    getHrKn(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHrKn(value?: google_protobuf_wrappers_pb.DoubleValue): LegJointParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegJointParams.AsObject;
    static toObject(includeInstance: boolean, msg: LegJointParams): LegJointParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegJointParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegJointParams;
    static deserializeBinaryFromReader(message: LegJointParams, reader: jspb.BinaryReader): LegJointParams;
}

export namespace LegJointParams {
    export type AsObject = {
        flHx?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        flHy?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        flKn?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        frHx?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        frHy?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        frKn?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        hlHx?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        hlHy?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        hlKn?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        hrHx?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        hrHy?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        hrKn?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class StanceShape extends jspb.Message { 

    hasLength(): boolean;
    clearLength(): void;
    getLength(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLength(value?: google_protobuf_wrappers_pb.DoubleValue): StanceShape;

    hasWidth(): boolean;
    clearWidth(): void;
    getWidth(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWidth(value?: google_protobuf_wrappers_pb.DoubleValue): StanceShape;

    hasFrontWiderThanHind(): boolean;
    clearFrontWiderThanHind(): void;
    getFrontWiderThanHind(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFrontWiderThanHind(value?: google_protobuf_wrappers_pb.DoubleValue): StanceShape;

    hasLeftLongerThanRight(): boolean;
    clearLeftLongerThanRight(): void;
    getLeftLongerThanRight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLeftLongerThanRight(value?: google_protobuf_wrappers_pb.DoubleValue): StanceShape;

    hasLeftForwardOfRight(): boolean;
    clearLeftForwardOfRight(): void;
    getLeftForwardOfRight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLeftForwardOfRight(value?: google_protobuf_wrappers_pb.DoubleValue): StanceShape;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StanceShape.AsObject;
    static toObject(includeInstance: boolean, msg: StanceShape): StanceShape.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StanceShape, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StanceShape;
    static deserializeBinaryFromReader(message: StanceShape, reader: jspb.BinaryReader): StanceShape;
}

export namespace StanceShape {
    export type AsObject = {
        length?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        width?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        frontWiderThanHind?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        leftLongerThanRight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        leftForwardOfRight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class SwingPhases extends jspb.Message { 

    hasLiftoffPhase(): boolean;
    clearLiftoffPhase(): void;
    getLiftoffPhase(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLiftoffPhase(value?: google_protobuf_wrappers_pb.DoubleValue): SwingPhases;

    hasTouchdownPhase(): boolean;
    clearTouchdownPhase(): void;
    getTouchdownPhase(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTouchdownPhase(value?: google_protobuf_wrappers_pb.DoubleValue): SwingPhases;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwingPhases.AsObject;
    static toObject(includeInstance: boolean, msg: SwingPhases): SwingPhases.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwingPhases, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwingPhases;
    static deserializeBinaryFromReader(message: SwingPhases, reader: jspb.BinaryReader): SwingPhases;
}

export namespace SwingPhases {
    export type AsObject = {
        liftoffPhase?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        touchdownPhase?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class SwingParams extends jspb.Message { 

    hasHeight(): boolean;
    clearHeight(): void;
    getHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setHeight(value?: google_protobuf_wrappers_pb.DoubleValue): SwingParams;

    hasLiftoffSpeed(): boolean;
    clearLiftoffSpeed(): void;
    getLiftoffSpeed(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLiftoffSpeed(value?: google_protobuf_wrappers_pb.DoubleValue): SwingParams;

    hasVerticalSpeed(): boolean;
    clearVerticalSpeed(): void;
    getVerticalSpeed(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVerticalSpeed(value?: google_protobuf_wrappers_pb.DoubleValue): SwingParams;

    hasVerticalAcceleration(): boolean;
    clearVerticalAcceleration(): void;
    getVerticalAcceleration(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVerticalAcceleration(value?: google_protobuf_wrappers_pb.DoubleValue): SwingParams;

    hasOverlayOutside(): boolean;
    clearOverlayOutside(): void;
    getOverlayOutside(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setOverlayOutside(value?: google_protobuf_wrappers_pb.DoubleValue): SwingParams;

    hasOverlayForward(): boolean;
    clearOverlayForward(): void;
    getOverlayForward(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setOverlayForward(value?: google_protobuf_wrappers_pb.DoubleValue): SwingParams;

    hasLowSpeedFraction(): boolean;
    clearLowSpeedFraction(): void;
    getLowSpeedFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLowSpeedFraction(value?: google_protobuf_wrappers_pb.DoubleValue): SwingParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwingParams.AsObject;
    static toObject(includeInstance: boolean, msg: SwingParams): SwingParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwingParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwingParams;
    static deserializeBinaryFromReader(message: SwingParams, reader: jspb.BinaryReader): SwingParams;
}

export namespace SwingParams {
    export type AsObject = {
        height?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        liftoffSpeed?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        verticalSpeed?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        verticalAcceleration?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        overlayOutside?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        overlayForward?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        lowSpeedFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class AnimatedCycleParams extends jspb.Message { 

    hasAnimationName(): boolean;
    clearAnimationName(): void;
    getAnimationName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAnimationName(value?: google_protobuf_wrappers_pb.StringValue): AnimatedCycleParams;

    hasEnableAnimationDuration(): boolean;
    clearEnableAnimationDuration(): void;
    getEnableAnimationDuration(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableAnimationDuration(value?: google_protobuf_wrappers_pb.BoolValue): AnimatedCycleParams;

    hasEnableLegTiming(): boolean;
    clearEnableLegTiming(): void;
    getEnableLegTiming(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableLegTiming(value?: google_protobuf_wrappers_pb.BoolValue): AnimatedCycleParams;

    hasEnableStanceShape(): boolean;
    clearEnableStanceShape(): void;
    getEnableStanceShape(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableStanceShape(value?: google_protobuf_wrappers_pb.BoolValue): AnimatedCycleParams;

    hasEnableBodyOffset(): boolean;
    clearEnableBodyOffset(): void;
    getEnableBodyOffset(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableBodyOffset(value?: google_protobuf_wrappers_pb.BoolValue): AnimatedCycleParams;

    hasEnableBodyMotion(): boolean;
    clearEnableBodyMotion(): void;
    getEnableBodyMotion(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableBodyMotion(value?: google_protobuf_wrappers_pb.BoolValue): AnimatedCycleParams;

    hasBodyXMultiplier(): boolean;
    clearBodyXMultiplier(): void;
    getBodyXMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyXMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): AnimatedCycleParams;

    hasBodyYMultiplier(): boolean;
    clearBodyYMultiplier(): void;
    getBodyYMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyYMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): AnimatedCycleParams;

    hasBodyZMultiplier(): boolean;
    clearBodyZMultiplier(): void;
    getBodyZMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyZMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): AnimatedCycleParams;

    hasBodyRollMultiplier(): boolean;
    clearBodyRollMultiplier(): void;
    getBodyRollMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyRollMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): AnimatedCycleParams;

    hasBodyPitchMultiplier(): boolean;
    clearBodyPitchMultiplier(): void;
    getBodyPitchMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyPitchMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): AnimatedCycleParams;

    hasBodyYawMultiplier(): boolean;
    clearBodyYawMultiplier(): void;
    getBodyYawMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyYawMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): AnimatedCycleParams;

    hasEnableSwingsXy(): boolean;
    clearEnableSwingsXy(): void;
    getEnableSwingsXy(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableSwingsXy(value?: google_protobuf_wrappers_pb.BoolValue): AnimatedCycleParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnimatedCycleParams.AsObject;
    static toObject(includeInstance: boolean, msg: AnimatedCycleParams): AnimatedCycleParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnimatedCycleParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnimatedCycleParams;
    static deserializeBinaryFromReader(message: AnimatedCycleParams, reader: jspb.BinaryReader): AnimatedCycleParams;
}

export namespace AnimatedCycleParams {
    export type AsObject = {
        animationName?: google_protobuf_wrappers_pb.StringValue.AsObject,
        enableAnimationDuration?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableLegTiming?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableStanceShape?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableBodyOffset?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableBodyMotion?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        bodyXMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        bodyYMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        bodyZMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        bodyRollMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        bodyPitchMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        bodyYawMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        enableSwingsXy?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class CustomGaitParams extends jspb.Message { 

    hasMaxVelocity(): boolean;
    clearMaxVelocity(): void;
    getMaxVelocity(): bosdyn_api_geometry_pb.Vec2Value | undefined;
    setMaxVelocity(value?: bosdyn_api_geometry_pb.Vec2Value): CustomGaitParams;

    hasMaxYawRate(): boolean;
    clearMaxYawRate(): void;
    getMaxYawRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMaxYawRate(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasAccelerationScaling(): boolean;
    clearAccelerationScaling(): void;
    getAccelerationScaling(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAccelerationScaling(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasCycleDuration(): boolean;
    clearCycleDuration(): void;
    getCycleDuration(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCycleDuration(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasFlSwing(): boolean;
    clearFlSwing(): void;
    getFlSwing(): SwingPhases | undefined;
    setFlSwing(value?: SwingPhases): CustomGaitParams;

    hasTwoFlSwings(): boolean;
    clearTwoFlSwings(): void;
    getTwoFlSwings(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTwoFlSwings(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasSecondFlSwing(): boolean;
    clearSecondFlSwing(): void;
    getSecondFlSwing(): SwingPhases | undefined;
    setSecondFlSwing(value?: SwingPhases): CustomGaitParams;

    hasFrSwing(): boolean;
    clearFrSwing(): void;
    getFrSwing(): SwingPhases | undefined;
    setFrSwing(value?: SwingPhases): CustomGaitParams;

    hasTwoFrSwings(): boolean;
    clearTwoFrSwings(): void;
    getTwoFrSwings(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTwoFrSwings(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasSecondFrSwing(): boolean;
    clearSecondFrSwing(): void;
    getSecondFrSwing(): SwingPhases | undefined;
    setSecondFrSwing(value?: SwingPhases): CustomGaitParams;

    hasHlSwing(): boolean;
    clearHlSwing(): void;
    getHlSwing(): SwingPhases | undefined;
    setHlSwing(value?: SwingPhases): CustomGaitParams;

    hasTwoHlSwings(): boolean;
    clearTwoHlSwings(): void;
    getTwoHlSwings(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTwoHlSwings(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasSecondHlSwing(): boolean;
    clearSecondHlSwing(): void;
    getSecondHlSwing(): SwingPhases | undefined;
    setSecondHlSwing(value?: SwingPhases): CustomGaitParams;

    hasHrSwing(): boolean;
    clearHrSwing(): void;
    getHrSwing(): SwingPhases | undefined;
    setHrSwing(value?: SwingPhases): CustomGaitParams;

    hasTwoHrSwings(): boolean;
    clearTwoHrSwings(): void;
    getTwoHrSwings(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTwoHrSwings(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasSecondHrSwing(): boolean;
    clearSecondHrSwing(): void;
    getSecondHrSwing(): SwingPhases | undefined;
    setSecondHrSwing(value?: SwingPhases): CustomGaitParams;

    hasShowStanceShape(): boolean;
    clearShowStanceShape(): void;
    getShowStanceShape(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setShowStanceShape(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasStanceShape(): boolean;
    clearStanceShape(): void;
    getStanceShape(): StanceShape | undefined;
    setStanceShape(value?: StanceShape): CustomGaitParams;

    hasComHeight(): boolean;
    clearComHeight(): void;
    getComHeight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setComHeight(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasBodyTranslationOffset(): boolean;
    clearBodyTranslationOffset(): void;
    getBodyTranslationOffset(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setBodyTranslationOffset(value?: bosdyn_api_geometry_pb.Vec3Value): CustomGaitParams;

    hasBodyRotationOffset(): boolean;
    clearBodyRotationOffset(): void;
    getBodyRotationOffset(): EulerZYXValue | undefined;
    setBodyRotationOffset(value?: EulerZYXValue): CustomGaitParams;

    hasLowSpeedBodyFraction(): boolean;
    clearLowSpeedBodyFraction(): void;
    getLowSpeedBodyFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLowSpeedBodyFraction(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasGeneralSwingParams(): boolean;
    clearGeneralSwingParams(): void;
    getGeneralSwingParams(): SwingParams | undefined;
    setGeneralSwingParams(value?: SwingParams): CustomGaitParams;

    hasUseFlSwingParams(): boolean;
    clearUseFlSwingParams(): void;
    getUseFlSwingParams(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseFlSwingParams(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasFlSwingParams(): boolean;
    clearFlSwingParams(): void;
    getFlSwingParams(): SwingParams | undefined;
    setFlSwingParams(value?: SwingParams): CustomGaitParams;

    hasUseFrSwingParams(): boolean;
    clearUseFrSwingParams(): void;
    getUseFrSwingParams(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseFrSwingParams(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasFrSwingParams(): boolean;
    clearFrSwingParams(): void;
    getFrSwingParams(): SwingParams | undefined;
    setFrSwingParams(value?: SwingParams): CustomGaitParams;

    hasUseHlSwingParams(): boolean;
    clearUseHlSwingParams(): void;
    getUseHlSwingParams(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseHlSwingParams(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasHlSwingParams(): boolean;
    clearHlSwingParams(): void;
    getHlSwingParams(): SwingParams | undefined;
    setHlSwingParams(value?: SwingParams): CustomGaitParams;

    hasUseHrSwingParams(): boolean;
    clearUseHrSwingParams(): void;
    getUseHrSwingParams(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseHrSwingParams(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasHrSwingParams(): boolean;
    clearHrSwingParams(): void;
    getHrSwingParams(): SwingParams | undefined;
    setHrSwingParams(value?: SwingParams): CustomGaitParams;

    hasStandInPlace(): boolean;
    clearStandInPlace(): void;
    getStandInPlace(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setStandInPlace(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasStandardFinalStance(): boolean;
    clearStandardFinalStance(): void;
    getStandardFinalStance(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setStandardFinalStance(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasShowStabilityParams(): boolean;
    clearShowStabilityParams(): void;
    getShowStabilityParams(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setShowStabilityParams(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasMu(): boolean;
    clearMu(): void;
    getMu(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMu(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasTimingStiffness(): boolean;
    clearTimingStiffness(): void;
    getTimingStiffness(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTimingStiffness(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasStepPositionStiffness(): boolean;
    clearStepPositionStiffness(): void;
    getStepPositionStiffness(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setStepPositionStiffness(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasEnablePerceptionObstacleAvoidance(): boolean;
    clearEnablePerceptionObstacleAvoidance(): void;
    getEnablePerceptionObstacleAvoidance(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePerceptionObstacleAvoidance(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasObstacleAvoidancePadding(): boolean;
    clearObstacleAvoidancePadding(): void;
    getObstacleAvoidancePadding(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setObstacleAvoidancePadding(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasEnablePerceptionTerrainHeight(): boolean;
    clearEnablePerceptionTerrainHeight(): void;
    getEnablePerceptionTerrainHeight(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePerceptionTerrainHeight(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasEnablePerceptionStepPlacement(): boolean;
    clearEnablePerceptionStepPlacement(): void;
    getEnablePerceptionStepPlacement(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePerceptionStepPlacement(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasMaximumStumbleDistance(): boolean;
    clearMaximumStumbleDistance(): void;
    getMaximumStumbleDistance(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMaximumStumbleDistance(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasTripSensitivity(): boolean;
    clearTripSensitivity(): void;
    getTripSensitivity(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTripSensitivity(value?: google_protobuf_wrappers_pb.DoubleValue): CustomGaitParams;

    hasShowAnimatedCycleParams(): boolean;
    clearShowAnimatedCycleParams(): void;
    getShowAnimatedCycleParams(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setShowAnimatedCycleParams(value?: google_protobuf_wrappers_pb.BoolValue): CustomGaitParams;

    hasAnimatedCycleParams(): boolean;
    clearAnimatedCycleParams(): void;
    getAnimatedCycleParams(): AnimatedCycleParams | undefined;
    setAnimatedCycleParams(value?: AnimatedCycleParams): CustomGaitParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomGaitParams.AsObject;
    static toObject(includeInstance: boolean, msg: CustomGaitParams): CustomGaitParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomGaitParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomGaitParams;
    static deserializeBinaryFromReader(message: CustomGaitParams, reader: jspb.BinaryReader): CustomGaitParams;
}

export namespace CustomGaitParams {
    export type AsObject = {
        maxVelocity?: bosdyn_api_geometry_pb.Vec2Value.AsObject,
        maxYawRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        accelerationScaling?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        cycleDuration?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        flSwing?: SwingPhases.AsObject,
        twoFlSwings?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        secondFlSwing?: SwingPhases.AsObject,
        frSwing?: SwingPhases.AsObject,
        twoFrSwings?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        secondFrSwing?: SwingPhases.AsObject,
        hlSwing?: SwingPhases.AsObject,
        twoHlSwings?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        secondHlSwing?: SwingPhases.AsObject,
        hrSwing?: SwingPhases.AsObject,
        twoHrSwings?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        secondHrSwing?: SwingPhases.AsObject,
        showStanceShape?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        stanceShape?: StanceShape.AsObject,
        comHeight?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        bodyTranslationOffset?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        bodyRotationOffset?: EulerZYXValue.AsObject,
        lowSpeedBodyFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        generalSwingParams?: SwingParams.AsObject,
        useFlSwingParams?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        flSwingParams?: SwingParams.AsObject,
        useFrSwingParams?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        frSwingParams?: SwingParams.AsObject,
        useHlSwingParams?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        hlSwingParams?: SwingParams.AsObject,
        useHrSwingParams?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        hrSwingParams?: SwingParams.AsObject,
        standInPlace?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        standardFinalStance?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        showStabilityParams?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        mu?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        timingStiffness?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        stepPositionStiffness?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        enablePerceptionObstacleAvoidance?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        obstacleAvoidancePadding?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        enablePerceptionTerrainHeight?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enablePerceptionStepPlacement?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        maximumStumbleDistance?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        tripSensitivity?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        showAnimatedCycleParams?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        animatedCycleParams?: AnimatedCycleParams.AsObject,
    }
}

export class CustomGaitCommand extends jspb.Message { 

    hasDriveVelocityBody(): boolean;
    clearDriveVelocityBody(): void;
    getDriveVelocityBody(): bosdyn_api_geometry_pb.SE2Velocity | undefined;
    setDriveVelocityBody(value?: bosdyn_api_geometry_pb.SE2Velocity): CustomGaitCommand;
    getFinished(): boolean;
    setFinished(value: boolean): CustomGaitCommand;

    hasBodyTranslationOffset(): boolean;
    clearBodyTranslationOffset(): void;
    getBodyTranslationOffset(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setBodyTranslationOffset(value?: bosdyn_api_geometry_pb.Vec3): CustomGaitCommand;

    hasBodyOrientationOffset(): boolean;
    clearBodyOrientationOffset(): void;
    getBodyOrientationOffset(): EulerZYX | undefined;
    setBodyOrientationOffset(value?: EulerZYX): CustomGaitCommand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomGaitCommand.AsObject;
    static toObject(includeInstance: boolean, msg: CustomGaitCommand): CustomGaitCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomGaitCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomGaitCommand;
    static deserializeBinaryFromReader(message: CustomGaitCommand, reader: jspb.BinaryReader): CustomGaitCommand;
}

export namespace CustomGaitCommand {
    export type AsObject = {
        driveVelocityBody?: bosdyn_api_geometry_pb.SE2Velocity.AsObject,
        finished: boolean,
        bodyTranslationOffset?: bosdyn_api_geometry_pb.Vec3.AsObject,
        bodyOrientationOffset?: EulerZYX.AsObject,
    }
}

export class CustomGaitCommandLimits extends jspb.Message { 

    hasMaximumDriveVelocityBody(): boolean;
    clearMaximumDriveVelocityBody(): void;
    getMaximumDriveVelocityBody(): bosdyn_api_geometry_pb.SE2Velocity | undefined;
    setMaximumDriveVelocityBody(value?: bosdyn_api_geometry_pb.SE2Velocity): CustomGaitCommandLimits;

    hasMaximumBodyTranslationOffset(): boolean;
    clearMaximumBodyTranslationOffset(): void;
    getMaximumBodyTranslationOffset(): bosdyn_api_geometry_pb.Vec3 | undefined;
    setMaximumBodyTranslationOffset(value?: bosdyn_api_geometry_pb.Vec3): CustomGaitCommandLimits;

    hasMaximumBodyOrientationOffset(): boolean;
    clearMaximumBodyOrientationOffset(): void;
    getMaximumBodyOrientationOffset(): EulerZYX | undefined;
    setMaximumBodyOrientationOffset(value?: EulerZYX): CustomGaitCommandLimits;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomGaitCommandLimits.AsObject;
    static toObject(includeInstance: boolean, msg: CustomGaitCommandLimits): CustomGaitCommandLimits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomGaitCommandLimits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomGaitCommandLimits;
    static deserializeBinaryFromReader(message: CustomGaitCommandLimits, reader: jspb.BinaryReader): CustomGaitCommandLimits;
}

export namespace CustomGaitCommandLimits {
    export type AsObject = {
        maximumDriveVelocityBody?: bosdyn_api_geometry_pb.SE2Velocity.AsObject,
        maximumBodyTranslationOffset?: bosdyn_api_geometry_pb.Vec3.AsObject,
        maximumBodyOrientationOffset?: EulerZYX.AsObject,
    }
}

export class AnimateParams extends jspb.Message { 
    getAnimationName(): string;
    setAnimationName(value: string): AnimateParams;

    hasBodyEntrySlices(): boolean;
    clearBodyEntrySlices(): void;
    getBodyEntrySlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyEntrySlices(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasBodyExitSlices(): boolean;
    clearBodyExitSlices(): void;
    getBodyExitSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyExitSlices(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasTranslationMultiplier(): boolean;
    clearTranslationMultiplier(): void;
    getTranslationMultiplier(): bosdyn_api_geometry_pb.Vec3Value | undefined;
    setTranslationMultiplier(value?: bosdyn_api_geometry_pb.Vec3Value): AnimateParams;

    hasRotationMultiplier(): boolean;
    clearRotationMultiplier(): void;
    getRotationMultiplier(): EulerZYXValue | undefined;
    setRotationMultiplier(value?: EulerZYXValue): AnimateParams;

    hasArmEntrySlices(): boolean;
    clearArmEntrySlices(): void;
    getArmEntrySlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setArmEntrySlices(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasShoulder0Offset(): boolean;
    clearShoulder0Offset(): void;
    getShoulder0Offset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setShoulder0Offset(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasShoulder1Offset(): boolean;
    clearShoulder1Offset(): void;
    getShoulder1Offset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setShoulder1Offset(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasElbow0Offset(): boolean;
    clearElbow0Offset(): void;
    getElbow0Offset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setElbow0Offset(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasElbow1Offset(): boolean;
    clearElbow1Offset(): void;
    getElbow1Offset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setElbow1Offset(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasWrist0Offset(): boolean;
    clearWrist0Offset(): void;
    getWrist0Offset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWrist0Offset(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasWrist1Offset(): boolean;
    clearWrist1Offset(): void;
    getWrist1Offset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setWrist1Offset(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasGripperOffset(): boolean;
    clearGripperOffset(): void;
    getGripperOffset(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGripperOffset(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasSpeed(): boolean;
    clearSpeed(): void;
    getSpeed(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSpeed(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasOffsetSlices(): boolean;
    clearOffsetSlices(): void;
    getOffsetSlices(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setOffsetSlices(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasGripperMultiplier(): boolean;
    clearGripperMultiplier(): void;
    getGripperMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGripperMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasGripperStrengthFraction(): boolean;
    clearGripperStrengthFraction(): void;
    getGripperStrengthFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setGripperStrengthFraction(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    hasArmDanceFrameId(): boolean;
    clearArmDanceFrameId(): void;
    getArmDanceFrameId(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setArmDanceFrameId(value?: google_protobuf_wrappers_pb.Int32Value): AnimateParams;

    hasBodyTrackingStiffness(): boolean;
    clearBodyTrackingStiffness(): void;
    getBodyTrackingStiffness(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBodyTrackingStiffness(value?: google_protobuf_wrappers_pb.DoubleValue): AnimateParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnimateParams.AsObject;
    static toObject(includeInstance: boolean, msg: AnimateParams): AnimateParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnimateParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnimateParams;
    static deserializeBinaryFromReader(message: AnimateParams, reader: jspb.BinaryReader): AnimateParams;
}

export namespace AnimateParams {
    export type AsObject = {
        animationName: string,
        bodyEntrySlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        bodyExitSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        translationMultiplier?: bosdyn_api_geometry_pb.Vec3Value.AsObject,
        rotationMultiplier?: EulerZYXValue.AsObject,
        armEntrySlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        shoulder0Offset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        shoulder1Offset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        elbow0Offset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        elbow1Offset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wrist0Offset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        wrist1Offset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        gripperOffset?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        speed?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        offsetSlices?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        gripperMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        gripperStrengthFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        armDanceFrameId?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        bodyTrackingStiffness?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export enum Pivot {
    PIVOT_UNKNOWN = 0,
    PIVOT_FRONT = 1,
    PIVOT_HIND = 2,
    PIVOT_CENTER = 3,
}

export enum Easing {
    EASING_UNKNOWN = 0,
    EASING_LINEAR = 1,
    EASING_QUADRATIC_INPUT = 2,
    EASING_QUADRATIC_OUTPUT = 3,
    EASING_QUADRATIC_IN_OUT = 4,
    EASING_CUBIC_INPUT = 5,
    EASING_CUBIC_OUTPUT = 6,
    EASING_CUBIC_IN_OUT = 7,
    EASING_EXPONENTIAL_INPUT = 8,
    EASING_EXPONENTIAL_OUTPUT = 9,
    EASING_EXPONENTIAL_IN_OUT = 10,
}

export enum ArmMoveFrame {
    ARM_MOVE_FRAME_UNKNOWN = 0,
    ARM_MOVE_FRAME_CENTER_OF_FOOTPRINT = 1,
    ARM_MOVE_FRAME_HAND = 2,
    ARM_MOVE_FRAME_BODY = 3,
    ARM_MOVE_FRAME_SHOULDER = 4,
    ARM_MOVE_FRAME_SHADOW = 5,
    ARM_MOVE_FRAME_DANCE = 6,
}

export enum Leg {
    LEG_UNKNOWN = 0,
    LEG_FRONT_LEFT = 1,
    LEG_FRONT_RIGHT = 2,
    LEG_HIND_LEFT = 3,
    LEG_HIND_RIGHT = 4,
    LEG_NO_LEG = -1,
}

export enum LedLight {
    LED_LIGHT_UNKNOWN = 0,
    LED_LIGHT_LEFT1 = 1,
    LED_LIGHT_LEFT2 = 2,
    LED_LIGHT_LEFT3 = 3,
    LED_LIGHT_LEFT4 = 4,
    LED_LIGHT_RIGHT1 = 5,
    LED_LIGHT_RIGHT2 = 6,
    LED_LIGHT_RIGHT3 = 7,
    LED_LIGHT_RIGHT4 = 8,
}
