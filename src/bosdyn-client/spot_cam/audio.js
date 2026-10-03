/**
 * @file For clients to the Spot CAM Audio service.
 */

'use strict';

const { Buffer } = require('node:buffer');

const wrappersPb = require('google-protobuf/google/protobuf/wrappers_pb');

const dataChunkPb = require('../../bosdyn/api/data_chunk_pb');
const audioPb = require('../../bosdyn/api/spot_cam/audio_pb');
const { AudioServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * A client calling Spot CAM Audio service.
 * @extends {BaseClient<AudioServiceClient>}
 */
class AudioClient extends BaseClient {
  static defaultServiceName = 'spot-cam-audio';
  static serviceType = 'bosdyn.api.spot_cam.AudioService';

  constructor() {
    super(AudioServiceClient);
  }

  /**
   * Retrieve the list of available sounds
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<audioPb.Sound[]>}
   */
  listSounds(args) {
    const request = new audioPb.ListSoundsRequest();
    return this.call(
      this._stub.listSounds,
      request,
      this._listSoundsFromResponse,
      _audioErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Set the current volume as a percentage
   * @param {number} percentage The new volume as a percentage [0 - 100]
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<void>}
   */
  setVolume(percentage, args) {
    const request = new audioPb.SetVolumeRequest().setVolume(percentage);
    return this.call(this._stub.setVolume, request, this._setVolumeFromResponse, _audioErrorFromResponse, false, args);
  }

  /**
   * Retrieve the current volume as a percentage
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  getVolume(args) {
    const request = new audioPb.GetVolumeRequest();
    return this.call(this._stub.getVolume, request, this._getVolumeFromResponse, _audioErrorFromResponse, false, args);
  }

  /**
   * Play already uploaded sound with optional volume gain multiplier
   * @param {audioPb.Sound} sound The sound identifier to play
   * @param {number} gain The gain to apply to the volume
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<void>}
   */
  playSound(sound, gain = null, args) {
    const request = new audioPb.PlaySoundRequest().setSound(sound);
    if (gain) {
      const fv = new wrappersPb.FloatValue().setValue(gain);
      request.setGain(fv);
    }
    return this.call(this._stub.playSound, request, this._playSoundFromResponse, _audioErrorFromResponse, false, args);
  }

  /**
   * Delete sound found in listSounds()
   * @param {audioPb.Sound} sound The sound to delete
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<void>}
   */
  deleteSound(sound, args) {
    const request = new audioPb.DeleteSoundRequest().setSound(sound);
    return this.call(
      this._stub.deleteSound,
      request,
      this._deleteSoundFromResponse,
      _audioErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Uploads the WAV data tagged with the specified Sound
   * @param {audioPb.Sound} sound The sound to load
   * @param {string|Buffer} data The sound data to load
   * @param {number} maxChunkSize The maximum size of the chunk that can be send
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<void>}
   */
  loadSound(sound, data, maxChunkSize = 1024 * 1024, args) {
    // The bytes of a binary string (jspb reads a string as base64).
    const bytes = typeof data === 'string' ? Buffer.from(data, 'latin1') : data;
    const totalSize = bytes.length;
    // A new request for each chunk: grpc-js serializes the written requests later, so one request changed for each
    // chunk sent the last chunk every time.
    const chunkRequest = (start, end) =>
      new audioPb.LoadSoundRequest()
        .setSound(sound)
        .setData(new dataChunkPb.DataChunk().setTotalSize(totalSize).setData(bytes.subarray(start, end)));

    function* yieldRequests() {
      // Break file into chunks if it's too large (for...in on a range gave its indices: chunks of 1 byte).
      let last = 0;
      for (let i = maxChunkSize; i < totalSize; i += maxChunkSize) {
        yield chunkRequest(last, i);
        last = i;
      }

      // Small (leftover) chunks gets sent here
      if (last < totalSize) {
        yield chunkRequest(last, totalSize);
      }
    }

    return this.call(
      this._stub.loadSound,
      yieldRequests(),
      this._loadSoundFromResponse,
      _audioErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Set the audio capture channel
   * @param {audioPb.AudioCaptureChannel} channel Microphone to use
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<audioPb.SetAudioCaptureChannelResponse>}
   */
  setAudioCaptureChannel(channel, args) {
    const request = new audioPb.SetAudioCaptureChannelRequest().setChannel(channel);
    return this.call(this._stub.setAudioCaptureChannel, request, null, _audioErrorFromResponse, false, args);
  }

  /**
   * Retrieve the audio capture channel (microphone)
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<audioPb.AudioCaptureChannel>}
   */
  getAudioCaptureChannel(args) {
    const request = new audioPb.GetAudioCaptureChannelRequest();
    return this.call(
      this._stub.getAudioCaptureChannel,
      request,
      this._getAudioCaptureChannelFromResponse,
      _audioErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Set the audio capture gain
   * @param {audioPb.AudioCaptureChannel} channel Microphone to set gain for
   * @param {number} gain Microphone gain, 0.0 to 1.0
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<audioPb.SetAudioCaptureGainResponse>}
   */
  setAudioCaptureGain(channel, gain, args) {
    const request = new audioPb.SetAudioCaptureGainRequest().setChannel(channel).setGain(gain);
    return this.call(this._stub.setAudioCaptureGain, request, null, _audioErrorFromResponse, false, args);
  }

  /**
   * Retrieve the audio capture gain (microphone volume)
   * @param {audioPb.AudioCaptureChannel} channel Microphone to get gain for
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<number>}
   */
  getAudioCaptureGain(channel, args) {
    const request = new audioPb.GetAudioCaptureGainRequest().setChannel(channel);
    return this.call(
      this._stub.getAudioCaptureGain,
      request,
      this._getAudioCaptureGainFromResponse,
      _audioErrorFromResponse,
      false,
      args,
    );
  }

  _listSoundsFromResponse(response) {
    return response.getSoundsList();
  }

  _setVolumeFromResponse() {
    // pass
  }

  _getVolumeFromResponse(response) {
    return response.getVolume();
  }

  _playSoundFromResponse() {
    // pass
  }

  _deleteSoundFromResponse() {
    // pass
  }

  _loadSoundFromResponse() {
    // pass
  }

  _getAudioCaptureChannelFromResponse(response) {
    return response.getChannel();
  }

  _getAudioCaptureGainFromResponse(response) {
    return response.getGain();
  }
}

const _audioErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  AudioClient,
};
