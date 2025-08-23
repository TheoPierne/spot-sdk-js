// package: bosdyn.api
// file: bosdyn/api/audio_visual.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as bosdyn_api_spot_choreography_params_pb from "../../bosdyn/api/spot/choreography_params_pb";

export class Color extends jspb.Message { 

    hasPreset(): boolean;
    clearPreset(): void;
    getPreset(): Color.Preset;
    setPreset(value: Color.Preset): Color;

    hasRgb(): boolean;
    clearRgb(): void;
    getRgb(): Color.RGB | undefined;
    setRgb(value?: Color.RGB): Color;

    getColorTypeCase(): Color.ColorTypeCase;

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
        preset: Color.Preset,
        rgb?: Color.RGB.AsObject,
    }


    export class RGB extends jspb.Message { 
        getR(): number;
        setR(value: number): RGB;
        getG(): number;
        setG(value: number): RGB;
        getB(): number;
        setB(value: number): RGB;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RGB.AsObject;
        static toObject(includeInstance: boolean, msg: RGB): RGB.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RGB, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RGB;
        static deserializeBinaryFromReader(message: RGB, reader: jspb.BinaryReader): RGB;
    }

    export namespace RGB {
        export type AsObject = {
            r: number,
            g: number,
            b: number,
        }
    }


    export enum Preset {
    PRESET_UNKNOWN = 0,
    PRESET_NORMAL = 1,
    PRESET_WARNING = 2,
    PRESET_DANGER = 3,
    }


    export enum ColorTypeCase {
        COLOR_TYPE_NOT_SET = 0,
        PRESET = 1,
        RGB = 2,
    }

}

export class LedSequenceGroup extends jspb.Message { 

    hasFrontCenter(): boolean;
    clearFrontCenter(): void;
    getFrontCenter(): LedSequenceGroup.LedSequence | undefined;
    setFrontCenter(value?: LedSequenceGroup.LedSequence): LedSequenceGroup;

    hasFrontLeft(): boolean;
    clearFrontLeft(): void;
    getFrontLeft(): LedSequenceGroup.LedSequence | undefined;
    setFrontLeft(value?: LedSequenceGroup.LedSequence): LedSequenceGroup;

    hasFrontRight(): boolean;
    clearFrontRight(): void;
    getFrontRight(): LedSequenceGroup.LedSequence | undefined;
    setFrontRight(value?: LedSequenceGroup.LedSequence): LedSequenceGroup;

    hasHindLeft(): boolean;
    clearHindLeft(): void;
    getHindLeft(): LedSequenceGroup.LedSequence | undefined;
    setHindLeft(value?: LedSequenceGroup.LedSequence): LedSequenceGroup;

    hasHindRight(): boolean;
    clearHindRight(): void;
    getHindRight(): LedSequenceGroup.LedSequence | undefined;
    setHindRight(value?: LedSequenceGroup.LedSequence): LedSequenceGroup;

    hasSpotCam(): boolean;
    clearSpotCam(): void;
    getSpotCam(): LedSequenceGroup.SpotCamSequence | undefined;
    setSpotCam(value?: LedSequenceGroup.SpotCamSequence): LedSequenceGroup;

    hasStatusLights(): boolean;
    clearStatusLights(): void;
    getStatusLights(): LedSequenceGroup.StatusLightsSequence | undefined;
    setStatusLights(value?: LedSequenceGroup.StatusLightsSequence): LedSequenceGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LedSequenceGroup.AsObject;
    static toObject(includeInstance: boolean, msg: LedSequenceGroup): LedSequenceGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LedSequenceGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LedSequenceGroup;
    static deserializeBinaryFromReader(message: LedSequenceGroup, reader: jspb.BinaryReader): LedSequenceGroup;
}

export namespace LedSequenceGroup {
    export type AsObject = {
        frontCenter?: LedSequenceGroup.LedSequence.AsObject,
        frontLeft?: LedSequenceGroup.LedSequence.AsObject,
        frontRight?: LedSequenceGroup.LedSequence.AsObject,
        hindLeft?: LedSequenceGroup.LedSequence.AsObject,
        hindRight?: LedSequenceGroup.LedSequence.AsObject,
        spotCam?: LedSequenceGroup.SpotCamSequence.AsObject,
        statusLights?: LedSequenceGroup.StatusLightsSequence.AsObject,
    }


    export class LedSequence extends jspb.Message { 

        hasAnimationSequence(): boolean;
        clearAnimationSequence(): void;
        getAnimationSequence(): LedSequenceGroup.LedSequence.AnimationSequence | undefined;
        setAnimationSequence(value?: LedSequenceGroup.LedSequence.AnimationSequence): LedSequence;

        hasBlinkSequence(): boolean;
        clearBlinkSequence(): void;
        getBlinkSequence(): LedSequenceGroup.LedSequence.BlinkSequence | undefined;
        setBlinkSequence(value?: LedSequenceGroup.LedSequence.BlinkSequence): LedSequence;

        hasPulseSequence(): boolean;
        clearPulseSequence(): void;
        getPulseSequence(): LedSequenceGroup.LedSequence.PulseSequence | undefined;
        setPulseSequence(value?: LedSequenceGroup.LedSequence.PulseSequence): LedSequence;

        hasSyncedBlinkSequence(): boolean;
        clearSyncedBlinkSequence(): void;
        getSyncedBlinkSequence(): LedSequenceGroup.LedSequence.SyncedBlinkSequence | undefined;
        setSyncedBlinkSequence(value?: LedSequenceGroup.LedSequence.SyncedBlinkSequence): LedSequence;

        hasSolidColorSequence(): boolean;
        clearSolidColorSequence(): void;
        getSolidColorSequence(): LedSequenceGroup.LedSequence.SolidColorSequence | undefined;
        setSolidColorSequence(value?: LedSequenceGroup.LedSequence.SolidColorSequence): LedSequence;

        getSequenceTypeCase(): LedSequence.SequenceTypeCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LedSequence.AsObject;
        static toObject(includeInstance: boolean, msg: LedSequence): LedSequence.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: LedSequence, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LedSequence;
        static deserializeBinaryFromReader(message: LedSequence, reader: jspb.BinaryReader): LedSequence;
    }

    export namespace LedSequence {
        export type AsObject = {
            animationSequence?: LedSequenceGroup.LedSequence.AnimationSequence.AsObject,
            blinkSequence?: LedSequenceGroup.LedSequence.BlinkSequence.AsObject,
            pulseSequence?: LedSequenceGroup.LedSequence.PulseSequence.AsObject,
            syncedBlinkSequence?: LedSequenceGroup.LedSequence.SyncedBlinkSequence.AsObject,
            solidColorSequence?: LedSequenceGroup.LedSequence.SolidColorSequence.AsObject,
        }


        export class AnimationSequence extends jspb.Message { 
            clearFramesList(): void;
            getFramesList(): Array<LedSequenceGroup.LedSequence.AnimationSequence.Frame>;
            setFramesList(value: Array<LedSequenceGroup.LedSequence.AnimationSequence.Frame>): AnimationSequence;
            addFrames(value?: LedSequenceGroup.LedSequence.AnimationSequence.Frame, index?: number): LedSequenceGroup.LedSequence.AnimationSequence.Frame;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AnimationSequence.AsObject;
            static toObject(includeInstance: boolean, msg: AnimationSequence): AnimationSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AnimationSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AnimationSequence;
            static deserializeBinaryFromReader(message: AnimationSequence, reader: jspb.BinaryReader): AnimationSequence;
        }

        export namespace AnimationSequence {
            export type AsObject = {
                framesList: Array<LedSequenceGroup.LedSequence.AnimationSequence.Frame.AsObject>,
            }


            export class Frame extends jspb.Message { 

                hasColor(): boolean;
                clearColor(): void;
                getColor(): Color | undefined;
                setColor(value?: Color): Frame;

                hasDuration(): boolean;
                clearDuration(): void;
                getDuration(): google_protobuf_duration_pb.Duration | undefined;
                setDuration(value?: google_protobuf_duration_pb.Duration): Frame;
                getInterpolation(): LedSequenceGroup.InterpolationMode;
                setInterpolation(value: LedSequenceGroup.InterpolationMode): Frame;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Frame.AsObject;
                static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Frame;
                static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
            }

            export namespace Frame {
                export type AsObject = {
                    color?: Color.AsObject,
                    duration?: google_protobuf_duration_pb.Duration.AsObject,
                    interpolation: LedSequenceGroup.InterpolationMode,
                }
            }

        }

        export class BlinkSequence extends jspb.Message { 

            hasColor(): boolean;
            clearColor(): void;
            getColor(): Color | undefined;
            setColor(value?: Color): BlinkSequence;

            hasPeriod(): boolean;
            clearPeriod(): void;
            getPeriod(): google_protobuf_duration_pb.Duration | undefined;
            setPeriod(value?: google_protobuf_duration_pb.Duration): BlinkSequence;
            getDutyCycle(): number;
            setDutyCycle(value: number): BlinkSequence;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): BlinkSequence.AsObject;
            static toObject(includeInstance: boolean, msg: BlinkSequence): BlinkSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: BlinkSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): BlinkSequence;
            static deserializeBinaryFromReader(message: BlinkSequence, reader: jspb.BinaryReader): BlinkSequence;
        }

        export namespace BlinkSequence {
            export type AsObject = {
                color?: Color.AsObject,
                period?: google_protobuf_duration_pb.Duration.AsObject,
                dutyCycle: number,
            }
        }

        export class PulseSequence extends jspb.Message { 

            hasColor(): boolean;
            clearColor(): void;
            getColor(): Color | undefined;
            setColor(value?: Color): PulseSequence;

            hasPeriod(): boolean;
            clearPeriod(): void;
            getPeriod(): google_protobuf_duration_pb.Duration | undefined;
            setPeriod(value?: google_protobuf_duration_pb.Duration): PulseSequence;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PulseSequence.AsObject;
            static toObject(includeInstance: boolean, msg: PulseSequence): PulseSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PulseSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PulseSequence;
            static deserializeBinaryFromReader(message: PulseSequence, reader: jspb.BinaryReader): PulseSequence;
        }

        export namespace PulseSequence {
            export type AsObject = {
                color?: Color.AsObject,
                period?: google_protobuf_duration_pb.Duration.AsObject,
            }
        }

        export class SyncedBlinkSequence extends jspb.Message { 

            hasColor(): boolean;
            clearColor(): void;
            getColor(): Color | undefined;
            setColor(value?: Color): SyncedBlinkSequence;

            hasPeriod(): boolean;
            clearPeriod(): void;
            getPeriod(): google_protobuf_duration_pb.Duration | undefined;
            setPeriod(value?: google_protobuf_duration_pb.Duration): SyncedBlinkSequence;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SyncedBlinkSequence.AsObject;
            static toObject(includeInstance: boolean, msg: SyncedBlinkSequence): SyncedBlinkSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SyncedBlinkSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SyncedBlinkSequence;
            static deserializeBinaryFromReader(message: SyncedBlinkSequence, reader: jspb.BinaryReader): SyncedBlinkSequence;
        }

        export namespace SyncedBlinkSequence {
            export type AsObject = {
                color?: Color.AsObject,
                period?: google_protobuf_duration_pb.Duration.AsObject,
            }
        }

        export class SolidColorSequence extends jspb.Message { 

            hasColor(): boolean;
            clearColor(): void;
            getColor(): Color | undefined;
            setColor(value?: Color): SolidColorSequence;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SolidColorSequence.AsObject;
            static toObject(includeInstance: boolean, msg: SolidColorSequence): SolidColorSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SolidColorSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SolidColorSequence;
            static deserializeBinaryFromReader(message: SolidColorSequence, reader: jspb.BinaryReader): SolidColorSequence;
        }

        export namespace SolidColorSequence {
            export type AsObject = {
                color?: Color.AsObject,
            }
        }


        export enum SequenceTypeCase {
            SEQUENCE_TYPE_NOT_SET = 0,
            ANIMATION_SEQUENCE = 1,
            BLINK_SEQUENCE = 2,
            PULSE_SEQUENCE = 3,
            SYNCED_BLINK_SEQUENCE = 4,
            SOLID_COLOR_SEQUENCE = 5,
        }

    }

    export class SpotCamSequence extends jspb.Message { 

        hasAnimationSequence(): boolean;
        clearAnimationSequence(): void;
        getAnimationSequence(): LedSequenceGroup.SpotCamSequence.AnimationSequence | undefined;
        setAnimationSequence(value?: LedSequenceGroup.SpotCamSequence.AnimationSequence): SpotCamSequence;

        hasBlinkSequence(): boolean;
        clearBlinkSequence(): void;
        getBlinkSequence(): LedSequenceGroup.SpotCamSequence.BlinkSequence | undefined;
        setBlinkSequence(value?: LedSequenceGroup.SpotCamSequence.BlinkSequence): SpotCamSequence;

        hasBreatheSequence(): boolean;
        clearBreatheSequence(): void;
        getBreatheSequence(): LedSequenceGroup.SpotCamSequence.BreatheSequence | undefined;
        setBreatheSequence(value?: LedSequenceGroup.SpotCamSequence.BreatheSequence): SpotCamSequence;

        hasFixedBrightnessSequence(): boolean;
        clearFixedBrightnessSequence(): void;
        getFixedBrightnessSequence(): LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence | undefined;
        setFixedBrightnessSequence(value?: LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence): SpotCamSequence;

        getSequenceTypeCase(): SpotCamSequence.SequenceTypeCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SpotCamSequence.AsObject;
        static toObject(includeInstance: boolean, msg: SpotCamSequence): SpotCamSequence.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SpotCamSequence, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SpotCamSequence;
        static deserializeBinaryFromReader(message: SpotCamSequence, reader: jspb.BinaryReader): SpotCamSequence;
    }

    export namespace SpotCamSequence {
        export type AsObject = {
            animationSequence?: LedSequenceGroup.SpotCamSequence.AnimationSequence.AsObject,
            blinkSequence?: LedSequenceGroup.SpotCamSequence.BlinkSequence.AsObject,
            breatheSequence?: LedSequenceGroup.SpotCamSequence.BreatheSequence.AsObject,
            fixedBrightnessSequence?: LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.AsObject,
        }


        export class AnimationSequence extends jspb.Message { 
            clearFramesList(): void;
            getFramesList(): Array<LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame>;
            setFramesList(value: Array<LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame>): AnimationSequence;
            addFrames(value?: LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame, index?: number): LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AnimationSequence.AsObject;
            static toObject(includeInstance: boolean, msg: AnimationSequence): AnimationSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AnimationSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AnimationSequence;
            static deserializeBinaryFromReader(message: AnimationSequence, reader: jspb.BinaryReader): AnimationSequence;
        }

        export namespace AnimationSequence {
            export type AsObject = {
                framesList: Array<LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.AsObject>,
            }


            export class Frame extends jspb.Message { 

                getBrightnessesMap(): jspb.Map<number, number>;
                clearBrightnessesMap(): void;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Frame.AsObject;
                static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Frame;
                static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
            }

            export namespace Frame {
                export type AsObject = {

                    brightnessesMap: Array<[number, number]>,
                }
            }

        }

        export class BlinkSequence extends jspb.Message { 
            getBrightness(): number;
            setBrightness(value: number): BlinkSequence;

            hasPeriod(): boolean;
            clearPeriod(): void;
            getPeriod(): google_protobuf_duration_pb.Duration | undefined;
            setPeriod(value?: google_protobuf_duration_pb.Duration): BlinkSequence;
            getDutyCycle(): number;
            setDutyCycle(value: number): BlinkSequence;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): BlinkSequence.AsObject;
            static toObject(includeInstance: boolean, msg: BlinkSequence): BlinkSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: BlinkSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): BlinkSequence;
            static deserializeBinaryFromReader(message: BlinkSequence, reader: jspb.BinaryReader): BlinkSequence;
        }

        export namespace BlinkSequence {
            export type AsObject = {
                brightness: number,
                period?: google_protobuf_duration_pb.Duration.AsObject,
                dutyCycle: number,
            }
        }

        export class BreatheSequence extends jspb.Message { 
            getBrightness(): number;
            setBrightness(value: number): BreatheSequence;

            hasPeriod(): boolean;
            clearPeriod(): void;
            getPeriod(): google_protobuf_duration_pb.Duration | undefined;
            setPeriod(value?: google_protobuf_duration_pb.Duration): BreatheSequence;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): BreatheSequence.AsObject;
            static toObject(includeInstance: boolean, msg: BreatheSequence): BreatheSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: BreatheSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): BreatheSequence;
            static deserializeBinaryFromReader(message: BreatheSequence, reader: jspb.BinaryReader): BreatheSequence;
        }

        export namespace BreatheSequence {
            export type AsObject = {
                brightness: number,
                period?: google_protobuf_duration_pb.Duration.AsObject,
            }
        }

        export class FixedBrightnessSequence extends jspb.Message { 

            getBrightnessesMap(): jspb.Map<number, number>;
            clearBrightnessesMap(): void;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): FixedBrightnessSequence.AsObject;
            static toObject(includeInstance: boolean, msg: FixedBrightnessSequence): FixedBrightnessSequence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: FixedBrightnessSequence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): FixedBrightnessSequence;
            static deserializeBinaryFromReader(message: FixedBrightnessSequence, reader: jspb.BinaryReader): FixedBrightnessSequence;
        }

        export namespace FixedBrightnessSequence {
            export type AsObject = {

                brightnessesMap: Array<[number, number]>,
            }
        }


        export enum SequenceTypeCase {
            SEQUENCE_TYPE_NOT_SET = 0,
            ANIMATION_SEQUENCE = 1,
            BLINK_SEQUENCE = 2,
            BREATHE_SEQUENCE = 3,
            FIXED_BRIGHTNESS_SEQUENCE = 4,
        }

    }

    export class StatusLightsSequence extends jspb.Message { 
        clearFramesList(): void;
        getFramesList(): Array<LedSequenceGroup.StatusLightsSequence.Frame>;
        setFramesList(value: Array<LedSequenceGroup.StatusLightsSequence.Frame>): StatusLightsSequence;
        addFrames(value?: LedSequenceGroup.StatusLightsSequence.Frame, index?: number): LedSequenceGroup.StatusLightsSequence.Frame;
        getInterpolation(): LedSequenceGroup.InterpolationMode;
        setInterpolation(value: LedSequenceGroup.InterpolationMode): StatusLightsSequence;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StatusLightsSequence.AsObject;
        static toObject(includeInstance: boolean, msg: StatusLightsSequence): StatusLightsSequence.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StatusLightsSequence, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StatusLightsSequence;
        static deserializeBinaryFromReader(message: StatusLightsSequence, reader: jspb.BinaryReader): StatusLightsSequence;
    }

    export namespace StatusLightsSequence {
        export type AsObject = {
            framesList: Array<LedSequenceGroup.StatusLightsSequence.Frame.AsObject>,
            interpolation: LedSequenceGroup.InterpolationMode,
        }


        export class Frame extends jspb.Message { 

            hasTopLeft(): boolean;
            clearTopLeft(): void;
            getTopLeft(): Color | undefined;
            setTopLeft(value?: Color): Frame;

            hasUpperMidLeft(): boolean;
            clearUpperMidLeft(): void;
            getUpperMidLeft(): Color | undefined;
            setUpperMidLeft(value?: Color): Frame;

            hasLowerMidLeft(): boolean;
            clearLowerMidLeft(): void;
            getLowerMidLeft(): Color | undefined;
            setLowerMidLeft(value?: Color): Frame;

            hasBottomLeft(): boolean;
            clearBottomLeft(): void;
            getBottomLeft(): Color | undefined;
            setBottomLeft(value?: Color): Frame;

            hasTopRight(): boolean;
            clearTopRight(): void;
            getTopRight(): Color | undefined;
            setTopRight(value?: Color): Frame;

            hasUpperMidRight(): boolean;
            clearUpperMidRight(): void;
            getUpperMidRight(): Color | undefined;
            setUpperMidRight(value?: Color): Frame;

            hasLowerMidRight(): boolean;
            clearLowerMidRight(): void;
            getLowerMidRight(): Color | undefined;
            setLowerMidRight(value?: Color): Frame;

            hasBottomRight(): boolean;
            clearBottomRight(): void;
            getBottomRight(): Color | undefined;
            setBottomRight(value?: Color): Frame;

            hasDuration(): boolean;
            clearDuration(): void;
            getDuration(): google_protobuf_duration_pb.Duration | undefined;
            setDuration(value?: google_protobuf_duration_pb.Duration): Frame;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Frame.AsObject;
            static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Frame;
            static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
        }

        export namespace Frame {
            export type AsObject = {
                topLeft?: Color.AsObject,
                upperMidLeft?: Color.AsObject,
                lowerMidLeft?: Color.AsObject,
                bottomLeft?: Color.AsObject,
                topRight?: Color.AsObject,
                upperMidRight?: Color.AsObject,
                lowerMidRight?: Color.AsObject,
                bottomRight?: Color.AsObject,
                duration?: google_protobuf_duration_pb.Duration.AsObject,
            }
        }

    }


    export enum InterpolationMode {
    INTERPOLATION_UNKNOWN = 0,
    INTERPOLATION_NONE = 1,
    INTERPOLATION_LINEAR = 2,
    }

}

export class AudioSequenceGroup extends jspb.Message { 

    hasBuzzer(): boolean;
    clearBuzzer(): void;
    getBuzzer(): AudioSequenceGroup.BuzzerSequence | undefined;
    setBuzzer(value?: AudioSequenceGroup.BuzzerSequence): AudioSequenceGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioSequenceGroup.AsObject;
    static toObject(includeInstance: boolean, msg: AudioSequenceGroup): AudioSequenceGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioSequenceGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioSequenceGroup;
    static deserializeBinaryFromReader(message: AudioSequenceGroup, reader: jspb.BinaryReader): AudioSequenceGroup;
}

export namespace AudioSequenceGroup {
    export type AsObject = {
        buzzer?: AudioSequenceGroup.BuzzerSequence.AsObject,
    }


    export class BuzzerSequence extends jspb.Message { 
        clearNotesList(): void;
        getNotesList(): Array<AudioSequenceGroup.BuzzerSequence.NoteWithDuration>;
        setNotesList(value: Array<AudioSequenceGroup.BuzzerSequence.NoteWithDuration>): BuzzerSequence;
        addNotes(value?: AudioSequenceGroup.BuzzerSequence.NoteWithDuration, index?: number): AudioSequenceGroup.BuzzerSequence.NoteWithDuration;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BuzzerSequence.AsObject;
        static toObject(includeInstance: boolean, msg: BuzzerSequence): BuzzerSequence.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BuzzerSequence, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BuzzerSequence;
        static deserializeBinaryFromReader(message: BuzzerSequence, reader: jspb.BinaryReader): BuzzerSequence;
    }

    export namespace BuzzerSequence {
        export type AsObject = {
            notesList: Array<AudioSequenceGroup.BuzzerSequence.NoteWithDuration.AsObject>,
        }


        export class NoteWithDuration extends jspb.Message { 

            hasNote(): boolean;
            clearNote(): void;
            getNote(): bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams | undefined;
            setNote(value?: bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams): NoteWithDuration;

            hasDuration(): boolean;
            clearDuration(): void;
            getDuration(): google_protobuf_duration_pb.Duration | undefined;
            setDuration(value?: google_protobuf_duration_pb.Duration): NoteWithDuration;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): NoteWithDuration.AsObject;
            static toObject(includeInstance: boolean, msg: NoteWithDuration): NoteWithDuration.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: NoteWithDuration, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): NoteWithDuration;
            static deserializeBinaryFromReader(message: NoteWithDuration, reader: jspb.BinaryReader): NoteWithDuration;
        }

        export namespace NoteWithDuration {
            export type AsObject = {
                note?: bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams.AsObject,
                duration?: google_protobuf_duration_pb.Duration.AsObject,
            }
        }

    }

}

export class AudioVisualBehavior extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): AudioVisualBehavior;
    getPriority(): number;
    setPriority(value: number): AudioVisualBehavior;

    hasLedSequenceGroup(): boolean;
    clearLedSequenceGroup(): void;
    getLedSequenceGroup(): LedSequenceGroup | undefined;
    setLedSequenceGroup(value?: LedSequenceGroup): AudioVisualBehavior;

    hasAudioSequenceGroup(): boolean;
    clearAudioSequenceGroup(): void;
    getAudioSequenceGroup(): AudioSequenceGroup | undefined;
    setAudioSequenceGroup(value?: AudioSequenceGroup): AudioVisualBehavior;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioVisualBehavior.AsObject;
    static toObject(includeInstance: boolean, msg: AudioVisualBehavior): AudioVisualBehavior.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioVisualBehavior, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioVisualBehavior;
    static deserializeBinaryFromReader(message: AudioVisualBehavior, reader: jspb.BinaryReader): AudioVisualBehavior;
}

export namespace AudioVisualBehavior {
    export type AsObject = {
        enabled: boolean,
        priority: number,
        ledSequenceGroup?: LedSequenceGroup.AsObject,
        audioSequenceGroup?: AudioSequenceGroup.AsObject,
    }
}

export class LiveAudioVisualBehavior extends jspb.Message { 
    getName(): string;
    setName(value: string): LiveAudioVisualBehavior;
    getPermanent(): boolean;
    setPermanent(value: boolean): LiveAudioVisualBehavior;

    hasBehavior(): boolean;
    clearBehavior(): void;
    getBehavior(): AudioVisualBehavior | undefined;
    setBehavior(value?: AudioVisualBehavior): LiveAudioVisualBehavior;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiveAudioVisualBehavior.AsObject;
    static toObject(includeInstance: boolean, msg: LiveAudioVisualBehavior): LiveAudioVisualBehavior.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiveAudioVisualBehavior, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiveAudioVisualBehavior;
    static deserializeBinaryFromReader(message: LiveAudioVisualBehavior, reader: jspb.BinaryReader): LiveAudioVisualBehavior;
}

export namespace LiveAudioVisualBehavior {
    export type AsObject = {
        name: string,
        permanent: boolean,
        behavior?: AudioVisualBehavior.AsObject,
    }
}

export class RunBehaviorRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RunBehaviorRequest;
    getName(): string;
    setName(value: string): RunBehaviorRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): RunBehaviorRequest;
    getRestart(): boolean;
    setRestart(value: boolean): RunBehaviorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunBehaviorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RunBehaviorRequest): RunBehaviorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunBehaviorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunBehaviorRequest;
    static deserializeBinaryFromReader(message: RunBehaviorRequest, reader: jspb.BinaryReader): RunBehaviorRequest;
}

export namespace RunBehaviorRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        name: string,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        restart: boolean,
    }
}

export class RunBehaviorResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RunBehaviorResponse;
    getStatus(): RunBehaviorResponse.Status;
    setStatus(value: RunBehaviorResponse.Status): RunBehaviorResponse;
    getRunResult(): RunBehaviorResponse.RunResult;
    setRunResult(value: RunBehaviorResponse.RunResult): RunBehaviorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunBehaviorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunBehaviorResponse): RunBehaviorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunBehaviorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunBehaviorResponse;
    static deserializeBinaryFromReader(message: RunBehaviorResponse, reader: jspb.BinaryReader): RunBehaviorResponse;
}

export namespace RunBehaviorResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: RunBehaviorResponse.Status,
        runResult: RunBehaviorResponse.RunResult,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_SUCCESS = 1,
    STATUS_DOES_NOT_EXIST = 2,
    STATUS_EXPIRED = 3,
    }

    export enum RunResult {
    RESULT_UNKNOWN = 0,
    RESULT_BEHAVIOR_RUN = 1,
    RESULT_SYSTEM_DISABLED = 2,
    RESULT_BEHAVIOR_DISABLED = 3,
    RESULT_LOW_PRIORITY = 4,
    RESULT_ALREADY_RUNNING = 5,
    }

}

export class StopBehaviorRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): StopBehaviorRequest;
    getBehaviorName(): string;
    setBehaviorName(value: string): StopBehaviorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopBehaviorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopBehaviorRequest): StopBehaviorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopBehaviorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopBehaviorRequest;
    static deserializeBinaryFromReader(message: StopBehaviorRequest, reader: jspb.BinaryReader): StopBehaviorRequest;
}

export namespace StopBehaviorRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        behaviorName: string,
    }
}

export class StopBehaviorResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): StopBehaviorResponse;
    getStatus(): StopBehaviorResponse.Status;
    setStatus(value: StopBehaviorResponse.Status): StopBehaviorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopBehaviorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopBehaviorResponse): StopBehaviorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopBehaviorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopBehaviorResponse;
    static deserializeBinaryFromReader(message: StopBehaviorResponse, reader: jspb.BinaryReader): StopBehaviorResponse;
}

export namespace StopBehaviorResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        status: StopBehaviorResponse.Status,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_SUCCESS = 1,
    STATUS_INVALID_CLIENT = 2,
    }

}

export class ListBehaviorsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListBehaviorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBehaviorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBehaviorsRequest): ListBehaviorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBehaviorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBehaviorsRequest;
    static deserializeBinaryFromReader(message: ListBehaviorsRequest, reader: jspb.BinaryReader): ListBehaviorsRequest;
}

export namespace ListBehaviorsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListBehaviorsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListBehaviorsResponse;
    clearBehaviorsList(): void;
    getBehaviorsList(): Array<LiveAudioVisualBehavior>;
    setBehaviorsList(value: Array<LiveAudioVisualBehavior>): ListBehaviorsResponse;
    addBehaviors(value?: LiveAudioVisualBehavior, index?: number): LiveAudioVisualBehavior;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBehaviorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBehaviorsResponse): ListBehaviorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBehaviorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBehaviorsResponse;
    static deserializeBinaryFromReader(message: ListBehaviorsResponse, reader: jspb.BinaryReader): ListBehaviorsResponse;
}

export namespace ListBehaviorsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        behaviorsList: Array<LiveAudioVisualBehavior.AsObject>,
    }
}

export class PresetColorAssociation extends jspb.Message { 

    hasColorName(): boolean;
    clearColorName(): void;
    getColorName(): PresetColorAssociation.PredefinedColor;
    setColorName(value: PresetColorAssociation.PredefinedColor): PresetColorAssociation;

    hasCustomValue(): boolean;
    clearCustomValue(): void;
    getCustomValue(): Color.RGB | undefined;
    setCustomValue(value?: Color.RGB): PresetColorAssociation;

    getAssociationCase(): PresetColorAssociation.AssociationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PresetColorAssociation.AsObject;
    static toObject(includeInstance: boolean, msg: PresetColorAssociation): PresetColorAssociation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PresetColorAssociation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PresetColorAssociation;
    static deserializeBinaryFromReader(message: PresetColorAssociation, reader: jspb.BinaryReader): PresetColorAssociation;
}

export namespace PresetColorAssociation {
    export type AsObject = {
        colorName: PresetColorAssociation.PredefinedColor,
        customValue?: Color.RGB.AsObject,
    }

    export enum PredefinedColor {
    PREDEFINED_UNKNOWN = 0,
    PREDEFINED_GREEN = 1,
    PREDEFINED_AMBER = 2,
    PREDEFINED_RED = 3,
    PREDEFINED_BLUE = 4,
    PREDEFINED_PINK = 5,
    PREDEFINED_PURPLE = 6,
    PREDEFINED_WHITE = 7,
    }


    export enum AssociationCase {
        ASSOCIATION_NOT_SET = 0,
        COLOR_NAME = 1,
        CUSTOM_VALUE = 2,
    }

}

export class AudioVisualSystemParams extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): AudioVisualSystemParams;
    getMaxBrightness(): number;
    setMaxBrightness(value: number): AudioVisualSystemParams;
    getBuzzerMaxVolume(): number;
    setBuzzerMaxVolume(value: number): AudioVisualSystemParams;

    hasNormalColorAssociation(): boolean;
    clearNormalColorAssociation(): void;
    getNormalColorAssociation(): PresetColorAssociation | undefined;
    setNormalColorAssociation(value?: PresetColorAssociation): AudioVisualSystemParams;

    hasWarningColorAssociation(): boolean;
    clearWarningColorAssociation(): void;
    getWarningColorAssociation(): PresetColorAssociation | undefined;
    setWarningColorAssociation(value?: PresetColorAssociation): AudioVisualSystemParams;

    hasDangerColorAssociation(): boolean;
    clearDangerColorAssociation(): void;
    getDangerColorAssociation(): PresetColorAssociation | undefined;
    setDangerColorAssociation(value?: PresetColorAssociation): AudioVisualSystemParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioVisualSystemParams.AsObject;
    static toObject(includeInstance: boolean, msg: AudioVisualSystemParams): AudioVisualSystemParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioVisualSystemParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioVisualSystemParams;
    static deserializeBinaryFromReader(message: AudioVisualSystemParams, reader: jspb.BinaryReader): AudioVisualSystemParams;
}

export namespace AudioVisualSystemParams {
    export type AsObject = {
        enabled: boolean,
        maxBrightness: number,
        buzzerMaxVolume: number,
        normalColorAssociation?: PresetColorAssociation.AsObject,
        warningColorAssociation?: PresetColorAssociation.AsObject,
        dangerColorAssociation?: PresetColorAssociation.AsObject,
    }
}

export class GetSystemParamsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetSystemParamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSystemParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSystemParamsRequest): GetSystemParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSystemParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSystemParamsRequest;
    static deserializeBinaryFromReader(message: GetSystemParamsRequest, reader: jspb.BinaryReader): GetSystemParamsRequest;
}

export namespace GetSystemParamsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetSystemParamsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetSystemParamsResponse;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): AudioVisualSystemParams | undefined;
    setParams(value?: AudioVisualSystemParams): GetSystemParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSystemParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSystemParamsResponse): GetSystemParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSystemParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSystemParamsResponse;
    static deserializeBinaryFromReader(message: GetSystemParamsResponse, reader: jspb.BinaryReader): GetSystemParamsResponse;
}

export namespace GetSystemParamsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        params?: AudioVisualSystemParams.AsObject,
    }
}

export class SetSystemParamsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetSystemParamsRequest;

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): SetSystemParamsRequest;

    hasMaxBrightness(): boolean;
    clearMaxBrightness(): void;
    getMaxBrightness(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setMaxBrightness(value?: google_protobuf_wrappers_pb.FloatValue): SetSystemParamsRequest;

    hasBuzzerMaxVolume(): boolean;
    clearBuzzerMaxVolume(): void;
    getBuzzerMaxVolume(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setBuzzerMaxVolume(value?: google_protobuf_wrappers_pb.FloatValue): SetSystemParamsRequest;

    hasNormalColorAssociation(): boolean;
    clearNormalColorAssociation(): void;
    getNormalColorAssociation(): PresetColorAssociation | undefined;
    setNormalColorAssociation(value?: PresetColorAssociation): SetSystemParamsRequest;

    hasWarningColorAssociation(): boolean;
    clearWarningColorAssociation(): void;
    getWarningColorAssociation(): PresetColorAssociation | undefined;
    setWarningColorAssociation(value?: PresetColorAssociation): SetSystemParamsRequest;

    hasDangerColorAssociation(): boolean;
    clearDangerColorAssociation(): void;
    getDangerColorAssociation(): PresetColorAssociation | undefined;
    setDangerColorAssociation(value?: PresetColorAssociation): SetSystemParamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSystemParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetSystemParamsRequest): SetSystemParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSystemParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSystemParamsRequest;
    static deserializeBinaryFromReader(message: SetSystemParamsRequest, reader: jspb.BinaryReader): SetSystemParamsRequest;
}

export namespace SetSystemParamsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        maxBrightness?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        buzzerMaxVolume?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        normalColorAssociation?: PresetColorAssociation.AsObject,
        warningColorAssociation?: PresetColorAssociation.AsObject,
        dangerColorAssociation?: PresetColorAssociation.AsObject,
    }
}

export class SetSystemParamsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetSystemParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSystemParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetSystemParamsResponse): SetSystemParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSystemParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSystemParamsResponse;
    static deserializeBinaryFromReader(message: SetSystemParamsResponse, reader: jspb.BinaryReader): SetSystemParamsResponse;
}

export namespace SetSystemParamsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}
