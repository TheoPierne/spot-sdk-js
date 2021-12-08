const time_sync_pb = require('../bosdyn/api/time_sync_pb');
const time_sync_service_grpc_pb = require('../bosdyn/api/time_sync_service_grpc_pb');
const time_range_pb = require('../bosdyn/api/time_range_pb');

const {
	RobotTimeConverter, 
	now_nsec, 
	parse_timespan, 
	nsec_to_timestamp, 
	set_timestamp_from_nsec, 
	timestamp_to_nsec
} = require('../bosdyn-core/util');
const {BaseClient, common_header_errors} = require('./common');

class TimeSyncError extends Error {
	constructor(msg){
		super(msg);
		this.name = 'TimeSyncError';
	}
};

class NotEstablishedError extends TimeSyncError {
	constructor(msg){
		super(msg);
		this.name = 'NotEstablishedError';
	}
};

class TimedOutError extends TimeSyncError {
	constructor(msg){
		super(msg);
		this.name = 'TimedOutError';
	}
};

class InactiveThreadError extends TimeSyncError {
	constructor(msg){
		super(msg);
		this.name = 'InactiveThreadError';
	}
};

class TimeSyncClient extends BaseClient {

	static default_service_name = 'time-sync';
	static service_type = 'bosdyn.api.TimeSyncService';

	constructor(){
		super(time_sync_service_grpc_pb.TimeSyncServiceClient);
	}

	async get_time_sync_update(previous_round_trip, clock_identifier, args){
		const req = TimeSyncClient._get_time_sync_update_request(previous_round_trip, clock_identifier);
		return await this.call(this._stub.timeSyncUpdate, req, null, common_header_errors, args);
	}

	get_time_sync_update_async(previous_round_trip, clock_identifier, args){
		var req = TimeSyncClient._get_time_sync_update_request(previous_round_trip, clock_identifier);
		return this.call_async(this._stub.timeSyncUpdate, req, null, common_header_errors, args);
	}

	static _get_time_sync_update_request(previous_round_trip, clock_identifier){
		const req = new time_sync_pb.TimeSyncUpdateRequest()
		.setPreviousRoundTrip(previous_round_trip)
		.setClockIdentifier(clock_identifier);
		return req;
	}

};

/*function _get_time_sync_status_value(response){
	return response.getTimeSyncStatusMap();
}*/

function robot_time_range_from_nanoseconds(start_nsec, end_nsec, time_sync_endpoint = null){
    const time_range = new time_range_pb.TimeRange();
    const converter = time_sync_endpoint ? time_sync_endpoint.get_robot_time_converter() : null;

    function _convert_nsec(nsec){
        let timestamp_proto = nsec_to_timestamp(parseInt(nsec));
        if(!time_sync_endpoint) return timestamp_proto;
        return converter.robot_timestamp_from_local(timestamp_proto);
    }

    if(start_nsec) time_range.setStart(_convert_nsec(start_nsec));
    if(end_nsec) time_range.setEnd(_convert_nsec(end_nsec));

    return time_range;
}

function robot_time_range_from_datetimes(start_datetime, end_datetime, time_sync_endpoint = null){

    function _datetime_to_nsec(date_time){
        if(date_time) return new Date(date_time).getTime() * 1e6;
        return null;
    }

    return robot_time_range_from_nanoseconds(_datetime_to_nsec(start_datetime), _datetime_to_nsec(end_datetime), time_sync_endpoint);
}

function timespec_to_robot_timespan(timespan_spec, time_sync_endpoint = null){
    let [start_datetime, end_datetime] = parse_timespan(timespan_spec)
    return robot_time_range_from_datetimes(start_datetime, end_datetime, time_sync_endpoint);
}

class TimeSyncEndpoint {

	constructor(time_sync_client){
		this._client = time_sync_client;
		// this._lock = Lock();
		this._locked_previous_round_trip = null;
		this._locked_previous_response = null;
		this._locked_clock_identifier = "";
	}

	get response(){
		return this._locked_previous_response;
	}

	get has_established_time_sync(){
		const response = this.response;
		return response && response.getState().getStatus() == time_sync_pb.TimeSyncState.Status.STATUS_OK;
	}

	get round_trip_time(){
		const response = this.response;
		if(!response) return null;
		return response.getState().getBestEstimate().getRoundTripTime();
	}

	get clock_identifier(){
		return this._locked_clock_identifier;
	}

	get clock_skew(){
		const response = this.response;
		if(!response || response.getState().getStatus() != time_sync_pb.TimeSyncState.Status.STATUS_OK) throw new NotEstablishedError();
		return response.getState().getBestEstimate().getClockSkew();
	}

	establish_timesync(max_samples = 25, break_on_success = false){
		let counter = 0;
		while(counter < max_samples){
			if(break_on_success && this.has_established_time_sync) return true;
			this.get_new_estimate();
			counter += 1;
		}
		return this.has_established_time_sync;
	}

	async _get_update(){
		let round_trip = null;
		let clock_identifier = null;
		if(this._locked_clock_identifier){
			round_trip = this._locked_previous_round_trip;
			clock_identifier = this._locked_clock_identifier;
		}
		return await this._client.get_time_sync_update(round_trip, clock_identifier);
	}

	get_new_estimate(){
		const response = this._get_update();
		const header = reponse.getHeader();
		const rx_time = now_nsec();

		const round_trip = new time_sync_pb.TimeSyncRoundTrip()
		.setClientTx(header.getRequestHeader().getRequestTimestamp())
		.setServerRx(header.getRequestReceivedTimestamp())
		.setServerTx(header.getResponseTimestamp());
		set_timestamp_from_nsec(round_trip.getClientRx(), rx_time);
		this._locked_previous_round_trip = round_trip;
		this._locked_previous_response = response;
		this._locked_clock_identifier = response.getClockIdentifier();
		return this.has_established_time_sync;
	}

	get_robot_time_converter(){
		return new RobotTimeConverter(timestamp_to_nsec(this.clock_skew));
	}

	robot_timestamp_from_local_secs(local_time_secs){
		if(!local_time_secs) return null;
		const converter = this.get_robot_time_converter();
		return converter.robot_timestamp_from_local_secs(local_time_secs);
	}

};

// Besoin de trouver un module pour faire du multi-thread pour continuer cette partie.

/*class TimeSyncThread {

	DEFAULT_TIME_SYNC_INTERVAL_SEC = 60;
	TIME_SYNC_SERVICE_NOT_READY_INTERVAL_SEC = 5;

	constructor(time_sync_client){
		this._time_sync_endpoint = new TimeSyncEndpoint(time_sync_client);
		this._lock = Lock();
		this._locked_time_sync_interval_sec = this.DEFAULT_TIME_SYNC_INTERVAL_SEC;
		this._locked_should_exit = false;
		this._locked_thread_exception = null;
		this._event = Event();
		this._thread = null;
	}

	start(){
		if(this._thread && this._thread.is_alive()) return;
		this._locked_should_exit = false;
		this._locked_thread_exception = null;
		// this._event.clear()
		// this._thread = Thread(target=self._timesync_thread)
		// this._thread.daemon = true;
	}

};*/

module.exports = {
	TimeSyncError,
	NotEstablishedError,
	TimedOutError,
	InactiveThreadError,
	TimeSyncClient,
	TimeSyncEndpoint
}