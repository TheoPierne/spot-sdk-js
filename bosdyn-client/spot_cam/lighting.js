const {BaseClient} = require('../common');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const LED_pb = require('../../bosdyn/api/spot_cam/LED_pb');

function* enumerate (it, start = 0){
	let i = start;
	for (const x of it){
		yield [i++, x]
	}
}

class LightingClient extends BaseClient {

	static default_service_name = 'spot-cam-lighting'
	static service_type = 'bosdyn.api.spot_cam.LightingService'

	constructor(){
		super(service_grpc_pb.LightingServiceClient);
	}

	async get_led_brightness(args){
		const request = new LED_pb.GetLEDBrightnessRequest();
		return await this.call(this._stub.getLEDBrightness, request, this._get_led_brightness_from_response, this._lighting_error_from_response, args);
	}

	get_led_brightness_async(args){
		const request = new LED_pb.GetLEDBrightnessRequest();
		return this.call_async(this._stub.getLEDBrightness, request, this._get_led_brightness_from_response, this._lighting_error_from_response, args);
	}

	async set_led_brightness(brightnesses, args){
		const request = new LED_pb.SetLEDBrightnessRequest();

		for(const [i, brightness] of enumerate(brightnesses)){
			if(i >= 4) break;
			request.getBrightnessesMap().set(i, brightness);
		}

		return await this.call(this._stub.setLEDBrightness, request, this._set_led_brightness_from_response, this._lighting_error_from_response, args);
	}

	set_led_brightness_async(brightnesses, args){
		const request = new LED_pb.SetLEDBrightnessRequest();

		for(const [i, brightness] of enumerate(brightnesses)){
			if(i >= 4) break;
			request.getBrightnessesMap().set(i, brightness)
		}

		return this.call_async(this._stub.setLEDBrightness, request, this._set_led_brightness_from_response, this._lighting_error_from_response, args);
	}

	_get_led_brightness_from_response(response){
        return response.getBrightnessesList();
	}

	_set_led_brightness_from_response(response){
		return;
	}

	_lighting_error_from_response(response){
        return null;
	}

};

module.exports = {
	LightingClient
};