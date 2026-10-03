/**
 * A client calling Spot CAM Audio service.
 * @extends {BaseClient<AudioServiceClient>}
 */
export class AudioClient extends BaseClient<AudioServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Retrieve the list of available sounds
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<audioPb.Sound[]>}
     */
    listSounds(args?: Object): Promise<audioPb.Sound[]>;
    /**
     * Set the current volume as a percentage
     * @param {number} percentage The new volume as a percentage [0 - 100]
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<void>}
     */
    setVolume(percentage: number, args?: Object): Promise<void>;
    /**
     * Retrieve the current volume as a percentage
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<number>}
     */
    getVolume(args?: Object): Promise<number>;
    /**
     * Play already uploaded sound with optional volume gain multiplier
     * @param {audioPb.Sound} sound The sound identifier to play
     * @param {number} gain The gain to apply to the volume
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    playSound(sound: audioPb.Sound, gain?: number, args?: Object): Promise<void>;
    /**
     * Delete sound found in listSounds()
     * @param {audioPb.Sound} sound The sound to delete
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    deleteSound(sound: audioPb.Sound, args?: Object): Promise<void>;
    /**
     * Uploads the WAV data tagged with the specified Sound
     * @param {audioPb.Sound} sound The sound to load
     * @param {string|Buffer} data The sound data to load
     * @param {number} maxChunkSize The maximum size of the chunk that can be send
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    loadSound(sound: audioPb.Sound, data: string | Buffer, maxChunkSize?: number, args?: Object): Promise<void>;
    /**
     * Set the audio capture channel
     * @param {audioPb.AudioCaptureChannel} channel Microphone to use
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<audioPb.SetAudioCaptureChannelResponse>}
     */
    setAudioCaptureChannel(channel: audioPb.AudioCaptureChannel, args?: Object): Promise<audioPb.SetAudioCaptureChannelResponse>;
    /**
     * Retrieve the audio capture channel (microphone)
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<audioPb.AudioCaptureChannel>}
     */
    getAudioCaptureChannel(args?: Object): Promise<audioPb.AudioCaptureChannel>;
    /**
     * Set the audio capture gain
     * @param {audioPb.AudioCaptureChannel} channel Microphone to set gain for
     * @param {number} gain Microphone gain, 0.0 to 1.0
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<audioPb.SetAudioCaptureGainResponse>}
     */
    setAudioCaptureGain(channel: audioPb.AudioCaptureChannel, gain: number, args?: Object): Promise<audioPb.SetAudioCaptureGainResponse>;
    /**
     * Retrieve the audio capture gain (microphone volume)
     * @param {audioPb.AudioCaptureChannel} channel Microphone to get gain for
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<number>}
     */
    getAudioCaptureGain(channel: audioPb.AudioCaptureChannel, args?: Object): Promise<number>;
    _listSoundsFromResponse(response: any): any;
    _setVolumeFromResponse(): void;
    _getVolumeFromResponse(response: any): any;
    _playSoundFromResponse(): void;
    _deleteSoundFromResponse(): void;
    _loadSoundFromResponse(): void;
    _getAudioCaptureChannelFromResponse(response: any): any;
    _getAudioCaptureGainFromResponse(response: any): any;
}
import { AudioServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import audioPb = require("../../../src/bosdyn/api/spot_cam/audio_pb");
import { Buffer } from "buffer";
