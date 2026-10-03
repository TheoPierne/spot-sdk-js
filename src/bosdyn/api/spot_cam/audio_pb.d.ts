// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/audio.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as bosdyn_api_data_chunk_pb from "../../../bosdyn/api/data_chunk_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Sound extends jspb.Message { 
    getName(): string;
    setName(value: string): Sound;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sound.AsObject;
    static toObject(includeInstance: boolean, msg: Sound): Sound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sound;
    static deserializeBinaryFromReader(message: Sound, reader: jspb.BinaryReader): Sound;
}

export namespace Sound {
    export type AsObject = {
        name: string,
    }
}

export class ListSoundsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): ListSoundsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSoundsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSoundsRequest): ListSoundsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSoundsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSoundsRequest;
    static deserializeBinaryFromReader(message: ListSoundsRequest, reader: jspb.BinaryReader): ListSoundsRequest;
}

export namespace ListSoundsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class ListSoundsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): ListSoundsResponse;
    clearSoundsList(): void;
    getSoundsList(): Array<Sound>;
    setSoundsList(value: Array<Sound>): ListSoundsResponse;
    addSounds(value?: Sound, index?: number): Sound;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSoundsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSoundsResponse): ListSoundsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSoundsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSoundsResponse;
    static deserializeBinaryFromReader(message: ListSoundsResponse, reader: jspb.BinaryReader): ListSoundsResponse;
}

export namespace ListSoundsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        soundsList: Array<Sound.AsObject>,
    }
}

export class SetVolumeRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetVolumeRequest;
    getVolume(): number;
    setVolume(value: number): SetVolumeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetVolumeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetVolumeRequest): SetVolumeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetVolumeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetVolumeRequest;
    static deserializeBinaryFromReader(message: SetVolumeRequest, reader: jspb.BinaryReader): SetVolumeRequest;
}

export namespace SetVolumeRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        volume: number,
    }
}

export class SetVolumeResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetVolumeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetVolumeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetVolumeResponse): SetVolumeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetVolumeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetVolumeResponse;
    static deserializeBinaryFromReader(message: SetVolumeResponse, reader: jspb.BinaryReader): SetVolumeResponse;
}

export namespace SetVolumeResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetVolumeRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetVolumeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVolumeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVolumeRequest): GetVolumeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVolumeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVolumeRequest;
    static deserializeBinaryFromReader(message: GetVolumeRequest, reader: jspb.BinaryReader): GetVolumeRequest;
}

export namespace GetVolumeRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetVolumeResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetVolumeResponse;
    getVolume(): number;
    setVolume(value: number): GetVolumeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVolumeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVolumeResponse): GetVolumeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVolumeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVolumeResponse;
    static deserializeBinaryFromReader(message: GetVolumeResponse, reader: jspb.BinaryReader): GetVolumeResponse;
}

export namespace GetVolumeResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        volume: number,
    }
}

export class PlaySoundRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): PlaySoundRequest;

    hasSound(): boolean;
    clearSound(): void;
    getSound(): Sound | undefined;
    setSound(value?: Sound): PlaySoundRequest;

    hasGain(): boolean;
    clearGain(): void;
    getGain(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setGain(value?: google_protobuf_wrappers_pb.FloatValue): PlaySoundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaySoundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PlaySoundRequest): PlaySoundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaySoundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaySoundRequest;
    static deserializeBinaryFromReader(message: PlaySoundRequest, reader: jspb.BinaryReader): PlaySoundRequest;
}

export namespace PlaySoundRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sound?: Sound.AsObject,
        gain?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }
}

export class PlaySoundResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): PlaySoundResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaySoundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PlaySoundResponse): PlaySoundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaySoundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaySoundResponse;
    static deserializeBinaryFromReader(message: PlaySoundResponse, reader: jspb.BinaryReader): PlaySoundResponse;
}

export namespace PlaySoundResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class DeleteSoundRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): DeleteSoundRequest;

    hasSound(): boolean;
    clearSound(): void;
    getSound(): Sound | undefined;
    setSound(value?: Sound): DeleteSoundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSoundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSoundRequest): DeleteSoundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSoundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSoundRequest;
    static deserializeBinaryFromReader(message: DeleteSoundRequest, reader: jspb.BinaryReader): DeleteSoundRequest;
}

export namespace DeleteSoundRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sound?: Sound.AsObject,
    }
}

export class DeleteSoundResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): DeleteSoundResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSoundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSoundResponse): DeleteSoundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSoundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSoundResponse;
    static deserializeBinaryFromReader(message: DeleteSoundResponse, reader: jspb.BinaryReader): DeleteSoundResponse;
}

export namespace DeleteSoundResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class LoadSoundRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): LoadSoundRequest;

    hasSound(): boolean;
    clearSound(): void;
    getSound(): Sound | undefined;
    setSound(value?: Sound): LoadSoundRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): bosdyn_api_data_chunk_pb.DataChunk | undefined;
    setData(value?: bosdyn_api_data_chunk_pb.DataChunk): LoadSoundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadSoundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoadSoundRequest): LoadSoundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadSoundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadSoundRequest;
    static deserializeBinaryFromReader(message: LoadSoundRequest, reader: jspb.BinaryReader): LoadSoundRequest;
}

export namespace LoadSoundRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        sound?: Sound.AsObject,
        data?: bosdyn_api_data_chunk_pb.DataChunk.AsObject,
    }
}

export class LoadSoundResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): LoadSoundResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadSoundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoadSoundResponse): LoadSoundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadSoundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadSoundResponse;
    static deserializeBinaryFromReader(message: LoadSoundResponse, reader: jspb.BinaryReader): LoadSoundResponse;
}

export namespace LoadSoundResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class SetAudioCaptureChannelRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetAudioCaptureChannelRequest;
    getChannel(): AudioCaptureChannel;
    setChannel(value: AudioCaptureChannel): SetAudioCaptureChannelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAudioCaptureChannelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetAudioCaptureChannelRequest): SetAudioCaptureChannelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAudioCaptureChannelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAudioCaptureChannelRequest;
    static deserializeBinaryFromReader(message: SetAudioCaptureChannelRequest, reader: jspb.BinaryReader): SetAudioCaptureChannelRequest;
}

export namespace SetAudioCaptureChannelRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        channel: AudioCaptureChannel,
    }
}

export class SetAudioCaptureChannelResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetAudioCaptureChannelResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAudioCaptureChannelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetAudioCaptureChannelResponse): SetAudioCaptureChannelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAudioCaptureChannelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAudioCaptureChannelResponse;
    static deserializeBinaryFromReader(message: SetAudioCaptureChannelResponse, reader: jspb.BinaryReader): SetAudioCaptureChannelResponse;
}

export namespace SetAudioCaptureChannelResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetAudioCaptureChannelRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetAudioCaptureChannelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAudioCaptureChannelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAudioCaptureChannelRequest): GetAudioCaptureChannelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAudioCaptureChannelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAudioCaptureChannelRequest;
    static deserializeBinaryFromReader(message: GetAudioCaptureChannelRequest, reader: jspb.BinaryReader): GetAudioCaptureChannelRequest;
}

export namespace GetAudioCaptureChannelRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetAudioCaptureChannelResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetAudioCaptureChannelResponse;
    getChannel(): AudioCaptureChannel;
    setChannel(value: AudioCaptureChannel): GetAudioCaptureChannelResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAudioCaptureChannelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAudioCaptureChannelResponse): GetAudioCaptureChannelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAudioCaptureChannelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAudioCaptureChannelResponse;
    static deserializeBinaryFromReader(message: GetAudioCaptureChannelResponse, reader: jspb.BinaryReader): GetAudioCaptureChannelResponse;
}

export namespace GetAudioCaptureChannelResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        channel: AudioCaptureChannel,
    }
}

export class SetAudioCaptureGainRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetAudioCaptureGainRequest;
    getChannel(): AudioCaptureChannel;
    setChannel(value: AudioCaptureChannel): SetAudioCaptureGainRequest;
    getGain(): number;
    setGain(value: number): SetAudioCaptureGainRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAudioCaptureGainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetAudioCaptureGainRequest): SetAudioCaptureGainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAudioCaptureGainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAudioCaptureGainRequest;
    static deserializeBinaryFromReader(message: SetAudioCaptureGainRequest, reader: jspb.BinaryReader): SetAudioCaptureGainRequest;
}

export namespace SetAudioCaptureGainRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        channel: AudioCaptureChannel,
        gain: number,
    }
}

export class SetAudioCaptureGainResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetAudioCaptureGainResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAudioCaptureGainResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetAudioCaptureGainResponse): SetAudioCaptureGainResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAudioCaptureGainResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAudioCaptureGainResponse;
    static deserializeBinaryFromReader(message: SetAudioCaptureGainResponse, reader: jspb.BinaryReader): SetAudioCaptureGainResponse;
}

export namespace SetAudioCaptureGainResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

export class GetAudioCaptureGainRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetAudioCaptureGainRequest;
    getChannel(): AudioCaptureChannel;
    setChannel(value: AudioCaptureChannel): GetAudioCaptureGainRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAudioCaptureGainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAudioCaptureGainRequest): GetAudioCaptureGainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAudioCaptureGainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAudioCaptureGainRequest;
    static deserializeBinaryFromReader(message: GetAudioCaptureGainRequest, reader: jspb.BinaryReader): GetAudioCaptureGainRequest;
}

export namespace GetAudioCaptureGainRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        channel: AudioCaptureChannel,
    }
}

export class GetAudioCaptureGainResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetAudioCaptureGainResponse;
    getGain(): number;
    setGain(value: number): GetAudioCaptureGainResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAudioCaptureGainResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAudioCaptureGainResponse): GetAudioCaptureGainResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAudioCaptureGainResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAudioCaptureGainResponse;
    static deserializeBinaryFromReader(message: GetAudioCaptureGainResponse, reader: jspb.BinaryReader): GetAudioCaptureGainResponse;
}

export namespace GetAudioCaptureGainResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        gain: number,
    }
}

export enum AudioCaptureChannel {
    AUDIO_CHANNEL_UNKNOWN = 0,
    AUDIO_CHANNEL_INTERNAL_MIC = 1,
    AUDIO_CHANNEL_EXTERNAL_MIC = 2,
}
