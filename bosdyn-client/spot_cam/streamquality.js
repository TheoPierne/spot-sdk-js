const {BaseClient} = require('../common');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const streamquality_pb = require('../../bosdyn/api/spot_cam/streamquality_pb');
const wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb');

class StreamQualityClient extends BaseClient {

	static default_service_name = 'spot-cam-stream-quality';
    static service_type = 'bosdyn.api.spot_cam.StreamQualityService';

    constructor(){
        super(service_grpc_pb.StreamQualityServiceClient);
    }

    async set_stream_params(target_bitrate = null, refresh_interval = null, idr_interval = null, awb_mode = null, args){
        const request = this._build_SetStreamParamsRequest(target_bitrate, refresh_interval, idr_interval, awb_mode);
        return await this.call(this._stub.setStreamParams, request, this._params_from_response, this._streamquality_error_from_response, args);
    }

    set_stream_params_async(target_bitrate = null, refresh_interval = null, idr_interval = null, awb_mode = null, args){
        const request = this._build_SetStreamParamsRequest(target_bitrate, refresh_interval, idr_interval, awb_mode);
        return this.call_async(this._stub.setStreamParams, request, this._params_from_response, this._streamquality_error_from_response, args);
    }

    async get_stream_params(args){
        const request = new streamquality_pb.GetStreamParamsRequest();
        return await this.call(this._stub.getStreamParams, request, this._params_from_response, this._streamquality_error_from_response, args);
    }

    get_stream_params_async(args){
        const request = new streamquality_pb.GetStreamParamsRequest();
        return this.call_async(this._stub.getStreamParams, request, this._params_from_response, this._streamquality_error_from_response, args);
    }

    _build_SetStreamParamsRequest(target_bitrate, refresh_interval, idr_interval, awb_mode){
        const streamParams = new streamquality_pb.StreamParams();

        if(target_bitrate) streamParams.setTargetbitrate(new wrappers_pb.Int64Value().setValue(target_bitrate));
        if(refresh_interval) streamParams.setRefreshinterval(new wrappers_pb.Int64Value().setValue(refresh_interval));
        if(idr_interval) streamParams.setIdrinterval(new wrappers_pb.Int64Value().setValue(idr_interval));
        if(awb_mode) streamParams.setAwb(new streamquality_pb.StreamParams.AwbMode().setAwb(awb_mode));

        const request = new streamquality_pb.SetStreamParamsRequest().setParams(streamParams);

        return request;
    }

    _params_from_response(response){
        return response.getParams();
    }

    _streamquality_error_from_response(response){
        return null;
    }

};

module.exports = {
	StreamQualityClient
};