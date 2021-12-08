const {BaseClient} = require('../common');

const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const audio_pb = require('../../bosdyn/api/spot_cam/audio_pb');
const data_chunk_pb = require('../../bosdyn/api/data_chunk_pb');

const wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb');
const _ = require('underscore');

class AudioClient extends BaseClient {

	static default_service_name = 'spot-cam-audio'
    static service_type = 'bosdyn.api.spot_cam.AudioService'

    constructor(){
        super(service_grpc_pb.AudioServiceClient);
    }

    async list_sounds(args){
        const request = new audio_pb.ListSoundsRequest();
        return await this.call(this._stub.listSounds, request, this._list_sounds_from_response, this._audio_error_from_response, args);
    }

    list_sounds_async(args){
        const request = new audio_pb.ListSoundsRequest();
        return this.call_async(this._stub.listSounds, request, this._list_sounds_from_response, this._audio_error_from_response, args);
    }

    async set_volume(percentage, args){
        const request = new audio_pb.SetVolumeRequest().setVolume(percentage);
        return await this.call(this._stub.setVolume, request, this._set_volume_from_response, this._audio_error_from_response, args);
    }

    set_volume_async(percentage, args){
        const request = new audio_pb.SetVolumeRequest().setVolume(percentage);
        return this.call_async(this._stub.setVolume, request, this._set_volume_from_response, this._audio_error_from_response, args);
    }

    async get_volume(args){
        const request = new audio_pb.GetVolumeRequest();
        return await this.call(this._stub.getVolume, request, this._get_volume_from_response, this._audio_error_from_response, args);
    }

    get_volume_async(args){
        const request = new audio_pb.GetVolumeRequest();
        return this.call_async(this._stub.getVolume, request, this._get_volume_from_response, this._audio_error_from_response, args);
    }

    async play_sound(sound, gain = null, args){
        let request;
        if(gain){
            const fv = new wrappers_pb.FloatValue().setValue(gain);
            request = new audio_pb.PlaySoundRequest().setSound(sound).setGain(fv);
        }else{
            request = new audio_pb.PlaySoundRequest().setSound(sound);
        }
        return await this.call(this._stub.playSound, request, this._play_sound_from_response, this._audio_error_from_response, args);
    }

    play_sound_async(sound, gain = 1.0, args){
        const fv = new wrappers_pb.FloatValue().setValue(gain);
        const request = new audio_pb.PlaySoundRequest().setSound(sound).setGain(fv);
        return this.call_async(this._stub.playSound, request, this._play_sound_from_response, this._audio_error_from_response, args);
    }

    async delete_sound(sound, args){
        const request = new audio_pb.DeleteSoundRequest().setSound(sound);
        return await this.call(this._stub.deleteSound, request, this._delete_sound_from_response, this._audio_error_from_response, args);
    }

    delete_sound_async(sound, args){
        const request = new audio_pb.DeleteSoundRequest().setSound(sound);
        return this.call_async(this._stub.deleteSound, request, this._delete_sound_from_response, this._audio_error_from_response, args);
    }

    async load_sound(sound, data, max_chunk_size = 1024 * 1024, args){

        function * yield_requests(data){
            const chunk = new data_chunk_pb.DataChunk().setTotalSize(data.length);
            const request = new audio_pb.LoadSoundRequest().setSound(sound).setData(chunk);

            let last = 0;
            for(const i in _.range(max_chunk_size, request.getData().getTotalSize(), max_chunk_size)){
                request.getData().setData(data.slice(last, i));
                yield request;
                last = i;
            }

            if(last < request.getData().getTotalSize()){
                request.getData().setData(data.slice(last));
                yield request;
            }
        }

        return await this.call(this._stub.loadSound, yield_requests(data), this._load_sound_from_response, this._audio_error_from_response, args);
    }

    async set_audio_capture_channel(channel, args){
        const request = new audio_pb.SetAudioCaptureChannelRequest().setChannel(channel);
        return await this.call(this._stub.setAudioCaptureChannel, request, null, this._audio_error_from_response, args);
    }

    set_audio_capture_channel_async(channel, args){
        const request = new audio_pb.SetAudioCaptureChannelRequest().setChannel(channel);
        return this.call_async(this._stub.setAudioCaptureChannel, request, null, this._audio_error_from_response, args);
    }

    async get_audio_capture_channel(args){
        const request = new audio_pb.GetAudioCaptureChannelRequest();
        return await this.call(this._stub.getAudioCaptureChannel, request, this._get_audio_capture_channel_from_response, this._audio_error_from_response, args);
    }

    get_audio_capture_channel_async(args){
        const request = new audio_pb.GetAudioCaptureChannelRequest();
        return this.call_async(this._stub.getAudioCaptureChannel, request, this._get_audio_capture_channel_from_response, this._audio_error_from_response, args);
    }

    async set_audio_capture_gain(channel, gain, args){
        const request = new audio_pb.SetAudioCaptureGainRequest().setChannel(channel).setGain(gain);
        return await this.call(this._stub.setAudioCaptureGain, request, null, this._audio_error_from_response, args);
    }

    set_audio_capture_gain_async(channel, gain, args){
        const request = new audio_pb.SetAudioCaptureGainRequest().setChannel(channel).setGain(gain);
        return this.call_async(this._stub.setAudioCaptureGain, request, null, this._audio_error_from_response, args);
    }

    async get_audio_capture_gain(channel, args){
        const request = new audio_pb.GetAudioCaptureGainRequest().setChannel(channel);
        return await this.call(this._stub.getAudioCaptureGain, request, this._get_audio_capture_gain_from_response, this._audio_error_from_response, args);
    }

    get_audio_capture_gain_async(channel, args){
        const request = new audio_pb.GetAudioCaptureGainRequest().setChannel(channel);
        return this.call_async(this._stub.getAudioCaptureGain, request, this._get_audio_capture_gain_from_response, this._audio_error_from_response, args);
    }

    _list_sounds_from_response(response){
        return response.getSounds();
    }

    _set_volume_from_response(response){
        
    }

    _get_volume_from_response(response){
        return response.getVolume();
    }

    _play_sound_from_response(response){
        
    }

    _delete_sound_from_response(response){
        
    }

    _load_sound_from_response(response){
        
    }

    _get_audio_capture_channel_from_response(response){
        return response.getChannel();
    }

    _get_audio_capture_gain_from_response(response){
        return response.getGain();
    }

    _audio_error_from_response(response){
        return null;
    }

};

module.exports = {
    AudioClient
};