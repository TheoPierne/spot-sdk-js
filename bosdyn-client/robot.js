const {AuthClient} = require('./auth');
const channel = require('./channel');
const {DataBufferClient} = require('./data_buffer');
const {DataServiceClient} = require('./data_service');
const {DirectoryClient} = require('./directory');
const {DirectoryRegistrationClient} = require('./directory_registration');
const {EstopClient, is_estopped} = require('./estop');
const {LeaseWallet} = require('./lease');
const {PayloadRegistrationClient, PayloadAlreadyExistsError, PayloadNotAuthorizedError} = require('./payload_registration');
const {PowerClient, power_on, power_off, safe_power_off, is_powered_on} = require('./power');
const {RobotCommandClient} = require('./robot_command');
const {RobotIdClient} = require('./robot_id');
const {RobotStateClient, has_arm} = require('./robot_state');
const {TimeSyncThread, TimeSyncClient, TimeSyncError} = require('./time_sync');
const {TokenManager} = require('./token_manager');
const {TokenCache} = require('./token_cache');

const {timestamp_to_sec} = require('../bosdyn-core/util');

const _DEFAULT_SECURE_CHANNEL_PORT = 443;

class RobotError extends Error {
	constructor(msg){
		super(msg);
		this.name = 'RobotError';
	}
};

class UnregisteredServiceError extends RobotError {
	constructor(msg){
		super(msg);
		this.name = 'UnregisteredServiceError';
	}
};

class UnregisteredServiceNameError extends UnregisteredServiceError {
	constructor(msg, service_name){
		super(`Service name "${service_name}" has not been registered`);
		this.name = 'UnregisteredServiceNameError';
		this.service_name = service_name;
	}

	toString(){
		return `Service name "${this.service_name}" has not been registered`;
	}
};

class UnregisteredServiceTypeError extends UnregisteredServiceError {
	constructor(msg, service_type){
		super(`Service name "${service_type}" has not been registered`);
		this.name = 'UnregisteredServiceTypeError';
		this.service_type = service_type;
	}

	toString(){
		return `Service name "${this.service_type}" has not been registered`;
	}
};

function sleep(period) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, period);
	});
}

class Robot {

	constructor(name = null){
		this._name = name;
		this.client_name = null;
		this.address = null;
		this.serial_number = null;
		this.logger = console;
		this.user_token = null;
		this.token_cache = new TokenCache();
		this._token_manager = null;
		this._current_user = null;
		this.service_clients_by_name = {};
		this.channels_by_authority = {};
		this.authorities_by_name = {};
		this._robot_id = null;
		this._has_arm = null;

		// Things usually updated from an Sdk object.
		this.service_client_factories_by_type = {};
		this.service_type_by_name = {};
		this.request_processors = [];
		this.response_processors = [];
		this.app_token = null;
		this.cert = null;
		this.lease_wallet = new LeaseWallet();
		this._time_sync_thread = null;

		this.max_send_message_length = channel.DEFAULT_MAX_MESSAGE_LENGTH;
		this.max_receive_message_length = channel.DEFAULT_MAX_MESSAGE_LENGTH;

		this._bootstrap_service_authorities = {
			[AuthClient.default_service_name]: 'auth.spot.robot',
			[DirectoryClient.default_service_name]: 'api.spot.robot',
			[DirectoryRegistrationClient.default_service_name]: 'api.spot.robot',
			[PayloadRegistrationClient.default_service_name]: 'payload-registration.spot.robot',
			[RobotIdClient.default_service_name]: 'id.spot.robot',
		};
	}

	_shutdown(){
		if(this._time_sync_thread){
			this._time_sync_thread.stop();
			this._time_sync_thread = null;
		}
		if(this._token_manager){
			this._token_manager.stop();
			this._token_manager = null;
		}
	}

	_get_token_id(username){
		return `${this.serial_number}.${username}`;
	}

	_update_token_cache(username = null){
		this._token_manager = this._token_manager || new TokenManager(this);

		this._current_user = username || this._current_user;

		if(this._current_user){
			const key = this._get_token_id(this._current_user);
			this.token_cache.write(key, this.user_token);
		}
	}

	async setup_token_cache(token_cache = null, unique_id = null){
		this.serial_number = unique_id || this.serial_number || await this.get_id().getSerialNumber();
		this.token_cache = token_cache || this.token_cache;
	}

	update_from(other = {}){
		this.request_processors = this.request_processors.concat(other.request_processors);
		this.response_processors = this.response_processors.concat(other.response_processors);
		this.service_client_factories_by_type = Object.assign({}, this.service_client_factories_by_type, other.service_client_factories_by_type);
		this.service_type_by_name = Object.assign({}, this.service_type_by_name, other.service_type_by_name);

		this.cert = other.cert;
		this.logger = other.logger;
		this.max_send_message_length = other.max_send_message_length;
		this.max_receive_message_length = other.max_receive_message_length;
		this.client_name = other.client_name;
		this.lease_wallet.set_client_name(this.client_name);
	}

	async ensure_client(service_name, channel = null, options = []){
		if(this.service_clients_by_name[service_name]) return this.service_clients_by_name[service_name];

		let service_type;

		try{
			service_type = this.service_type_by_name[service_name];
		}catch(e){
			throw new UnregisteredServiceNameError(null, service_name);
		}

		let creation_function;

		try{
			creation_function = this.service_client_factories_by_type[service_type];
		}catch(e){
			throw new UnregisteredServiceTypeError(null, service_type);
		}

		const client = new creation_function();
		this.logger.debug(`[ROBOT] Created client for ${service_name}`);

		if(channel == null)	channel = await this.ensure_channel(service_name, true, options);

		client.channel = channel;
		client.update_from(this);
		this.service_clients_by_name[service_name] = client;
		return client;
	}

	async get_cached_robot_id(){
		if(this._robot_id == null){
			const robot_id_client = await this.ensure_client('robot-id');
			this._robot_id = await robot_id_client.get_id();
		}
		return this._robot_id;
	}

	async _should_send_app_token_on_each_request(){
		const robot_id = await this.get_cached_robot_id();
		const robot_software_version = robot_id.getSoftwareRelease().getVersion();
		if(robot_software_version.getMajorVersion() <= 1 && robot_software_version.getMinorVersion() <= 1) return true;
		return false;
	}

	async ensure_channel(service_name, secure = true, options = []){

		let option = options.length ? options.map(x => x[0]) : null;

		if(option != null){
			if(!('grpc.max_receive_message_length' in option[0])){
				options.push({'grpc.max_receive_message_length':  this.max_receive_message_length});
			}
			if(!('grpc.max_send_message_length' in option[0])){
				options.push({'grpc.max_send_message_length': this.max_send_message_length});
			}
		}


		let authority = this._bootstrap_service_authorities[service_name];

		if(!authority){
			authority = this.authorities_by_name[service_name];
			if(!authority){
				await this.sync_with_directory();
				authority = this.authorities_by_name[service_name];
			}
		}

		if(!authority) throw new UnregisteredServiceNameError(null, service_name);

		const skip_app_token_check = service_name == 'robot-id';
		return secure ? await this.ensure_secure_channel(authority, skip_app_token_check, options) : this.ensure_insecure_channel(authority, skip_app_token_check, options);
	}

	async ensure_secure_channel(authority, skip_app_token_check = false, options = []){
		if(authority in this.channels_by_authority) return this.channels_by_authority[authority];

		const should_send_app_token = skip_app_token_check ? false : await this._should_send_app_token_on_each_request();

		const creds = channel.create_secure_channel_creds(
			this.cert, () => { return {app_token: this.app_token, user_token: this.user_token}}, 
			should_send_app_token);
		const channelData = channel.create_secure_channel(this.address, _DEFAULT_SECURE_CHANNEL_PORT, creds, authority, options);
		this.logger.debug(`[ROBOT] Created channel to ${this.address} at port ${_DEFAULT_SECURE_CHANNEL_PORT} with authority ${authority}`);
		this.channels_by_authority[authority] = channelData;
		return channelData;
	}

	ensure_insecure_channel(authority, skip_app_token_check = false, options = []){
		if(authority in this.channels_by_authority) return this.channels_by_authority[authority];
		const channelData = channel.create_insecure_channel(this.address, _DEFAULT_SECURE_CHANNEL_PORT, authority, options);
		this.logger.debug(`[ROBOT] Created channel to ${this.address} at port ${_DEFAULT_SECURE_CHANNEL_PORT} with authority ${authority}`);
		this.channels_by_authority[authority] = channelData;
		return channelData;
	}

	async authenticate(username, password, timeout = null){
		console.log('Pensez à modifier authenticate dans le fichier robot.js');
		const default_service_name = AuthClient.default_service_name;
		const auth_channel = await this.ensure_insecure_channel(this._bootstrap_service_authorities[default_service_name]);
		const auth_client = await this.ensure_client(default_service_name, auth_channel);
		const user_token = await auth_client.auth(username, password, this.app_token, {timeout});
		this.update_user_token(user_token, username);
	}

	async authenticate_with_token(token, timeout = null){
		const auth_client = await this.ensure_client(AuthClient.default_service_name);
		const user_token = await auth_client.auth_with_token(token, this.app_token, {timeout});
		this.update_user_token(user_token);
	}

	async authenticate_from_cache(username, timeout = null){
		const token = this.token_cache.read(this._get_token_id(username));
		const auth_client = await this.ensure_client(AuthClient.default_service_name);
		const user_token = await auth_client.auth_with_token(token, this.app_token, {timeout});
		this.update_user_token(user_token, username);
	}

	async authenticate_from_payload_credentials(guid, secret, payload_registration_client = null, timeout = null){
		let printed_warning = false;

		if(payload_registration_client == null){
			payload_registration_client = await this.ensure_client(PayloadRegistrationClient.default_service_name);
		}

		let user_token = null;
		while(user_token == null){
			try{
				user_token = await payload_registration_client.get_payload_auth_token(guid, secret, timeout);
			}catch(e){
				if (!printed_warning){
					printed_warning = true;
					console.log('[ROBOT] Payload is not authorized. Authentication will block until an operator authorizes the payload in the Admin Console.');
				}
			}
			await sleep(100);
		}
		this.update_user_token(user_token);
	}

	update_user_token(user_token, username = null){
		this.user_token = user_token;
		this._update_token_cache(username);
	}

	get_cached_usernames(){
		const matches = this.token_cache.match(this.serial_number);
		let usernames = [];
		for(const match of matches){
			let username = match.split('.');
			usernames.push(username);
		}
		return usernames.sort();
	}

	async get_id(id_service_name = RobotIdClient.default_service_name){
		const id_client = await this.ensure_client(id_service_name);
		return await id_client.get_id();
	}

	async list_services(directory_service_name = DirectoryClient.default_service_name, 
		directory_service_authority = this._bootstrap_service_authorities[DirectoryClient.default_service_name]){
		const directory_channel = await this.ensure_secure_channel(directory_service_authority);
		const dir_client = await this.ensure_client(directory_service_name, directory_channel);
		return await dir_client.list();
	}

	async sync_with_directory(directory_service_name = DirectoryClient.default_service_name,
		directory_service_authority = this._bootstrap_service_authorities[DirectoryClient.default_service_name]){
		const remote_services = await this.list_services(directory_service_name, directory_service_authority);
		for(const service of remote_services){
			this.authorities_by_name[service.name] = service.authority;
			this.service_type_by_name[service.name] = service.type;
		}
		return this.service_type_by_name;
	}

	async register_payload_and_authenticate(payload, secret, timeout = null){
		const payload_registration_client = await this.ensure_client(PayloadRegistrationClient.default_service_name);
		try{
			await payload_registration_client.register_payload(payload, secret, {timeout});
		}catch(e){

		}
		await this.authenticate_from_payload_credentials(payload.GUID, secret, payload_registration_client, {timeout});
	}

	async start_time_sync(time_sync_interval_sec = null){
		if(!this._time_sync_thread) this._time_sync_thread = TimeSyncThread(await this.ensure_client(TimeSyncClient.default_service_name));
		if(time_sync_interval_sec) this._time_sync_thread.time_sync_interval_sec = time_sync_interval_sec;
		if(this._time_sync_thread.stopped) this._time_sync_thread.start();
	}

	stop_time_sync(){
		if(!this._time_sync_thread.stopped)	this._time_sync_thread.stop();
	}

	get time_sync(){
		this.start_time_sync()
		return this._time_sync_thread;
	}

	time_sec(){
		const robot_timestamp = this.time_sync.robot_timestamp_from_local_secs(Date.now());
		return timestamp_to_sec(robot_timestamp);
	}

	async operator_comment(comment, timestamp_secs = null, timeout = null){
		const client = await this.ensure_client(DataBufferClient.default_service_name);
		let robot_timestamp = null;
		if(timestamp_secs == null){
			try{
				robot_timestamp = this.time_sync.robot_timestamp_from_local_secs(Date.now());
			}catch(e){
				robot_timestamp = null;
			}
		}else{
			robot_timestamp = this.time_sync.robot_timestamp_from_local_secs(timestamp_secs);
		}
		await client.add_operator_comment(comment, robot_timestamp, {timeout});
	}

	async power_on(timeout_sec = 20_000, update_frequency = 1.0, timeout = null){
		const service_name = PowerClient.default_service_name;
		const client = await this.ensure_client(service_name);
		power_on(client, timeout_sec, update_frequency, {timeout});
	}

	async power_off(cut_immediately = false, timeout_sec = 20_000, update_frequency = 1.0, timeout = null){
		if(cut_immediately){
			const power_client = await this.ensure_client(PowerClient.default_service_name);
			power_off(power_client, timeout_sec, update_frequency, {timeout});
		}else{
			const command_client = await this.ensure_client(RobotCommandClient.default_service_name);
			const state_client = await this.ensure_client(RobotStateClient.default_service_name);
			safe_power_off(command_client, state_client, timeout_sec, update_frequency, {timeout});
		}
	}

	async is_powered_on(timeout = null){
		const state_client = await this.ensure_client(RobotStateClient.default_service_name);
		return is_powered_on(state_client, {timeout});
	}

	async is_estopped(timeout = null){
		const estop_client = await this.ensure_client(EstopClient.default_service_name);
		return is_estopped(estop_client, {timeout});
	}

	async get_frame_tree_snapshot(timeout = null){
		const client = await this.ensure_client(RobotStateClient.default_service_name);
		const current_state = await client.get_robot_state({timeout});
		return current_state.getKinematicState().getTransformsSnapshot();
	}

	async has_arm(timeout = null){
		if(this._has_arm) return this._has_arm;
		const state_client = await this.ensure_client(RobotStateClient.default_service_name);
		this._has_arm = has_arm(state_client, timeout);
		return this._has_arm;
	}

};

module.exports = {
	RobotError,
	UnregisteredServiceError,
	UnregisteredServiceNameError,
	UnregisteredServiceTypeError,
	Robot
};