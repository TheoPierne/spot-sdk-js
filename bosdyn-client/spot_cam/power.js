const {BaseClient} = require('../common');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const power_pb = require('../../bosdyn/api/spot_cam/power_pb');

// const {BoolValue} = require('google-protobuf/google/protobuf/wrappers_pb'); Pas sûr que ce soit utile ici (mais à vérifier)

class PowerClient extends BaseClient {

	static default_service_name = 'spot-cam-power';
	static service_type = 'bosdyn.api.spot_cam.PowerService';

	constructor(){
		super(service_grpc_pb.PowerServiceClient);
	}

	async get_power_status(args){
        const request = new power_pb.GetPowerStatusRequest();
        return await this.call(this._stub.getPowerStatus, request, this._get_power_status_from_response, this._power_error_from_response, args);
    }

    get_power_status_async(args){
        const request = new power_pb.GetPowerStatusRequest();
        return this.call_async(this._stub.getPowerStatus, request, this._get_power_status_from_response, this._power_error_from_response, args);
    }

    async set_power_status(ptz = null, aux1 = null, aux2 = null, args){
        const request = this._build_SetPowerStatusRequest(ptz, aux1, aux2);
        return await this.call(this._stub.setPowerStatus, request, this._set_power_status_from_response, this._power_error_from_response, args);
    }

    set_power_status_async(ptz = null, aux1 = null, aux2 = null, args){
        const request = this._build_SetPowerStatusRequest(ptz, aux1, aux2);
        return this.call_async(this._stub.setPowerStatus, request, this._set_power_status_from_response, this._power_error_from_response, args);
    }

    async cycle_power(ptz = null, aux1 = null, aux2 = null, external_mic = null, args){
        const request = this._build_CyclePowerRequest(ptz, aux1, aux2, external_mic);
        return await this.call(this._stub.CyclePower, request, this._cycle_power_from_response, this._power_error_from_response, args);
    }

    cycle_power_async(ptz = null, aux1 = null, aux2 = null, external_mic = null, args){
        const request = this._build_CyclePowerRequest(ptz, aux1, aux2, external_mic);
        return this.call_async(this._stub.CyclePower, request, this._cycle_power_from_response, this._power_error_from_response, args);
    }

    _build_SetPowerStatusRequest(ptz, aux1, aux2){
        const request = new power_pb.SetPowerStatusRequest();

        if(ptz) request.setStatus(new power_pb.PowerStatus().setPtz(ptz));
        if(aux1) request.setStatus(new power_pb.PowerStatus().setAux1(aux1));
        if(aux2) request.setStatus(new power_pb.PowerStatus().setAux2(aux2));;

        return request;
    }

    _build_CyclePowerRequest(ptz, aux1, aux2, external_mic){
        const request = new power_pb.CyclePowerRequest();

        if(ptz) request.setStatus(new power_pb.PowerStatus().setPtz(ptz));
        if(aux1) request.setStatus(new power_pb.PowerStatus().setAux1(aux1));
        if(aux2) request.setStatus(new power_pb.PowerStatus().setAux2(aux2));
        if(external_mic) request.setStatus(new power_pb.PowerStatus().setExternalMic(external_mic));

        return request;
    }

    _get_power_status_from_response(response){
        return response.getStatus();
    }

    _set_power_status_from_response(response){
        return response.getStatus();
    }

    _cycle_power_from_response(response){
        return response.getStatus();
    }

    _power_error_from_response(response){
        return null;
    }

};

module.exports = {
	PowerClient
};