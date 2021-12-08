const {BaseClient, error_factory, handle_unset_status_error, handle_common_header_errors} = require('./common');
const {ResponseError, TimedOutError} = require('./exceptions');

const directory_pb = require('../bosdyn/api/directory_pb');
const directory_registration_pb = require('../bosdyn/api/directory_registration_pb');
const directory_registration_service_grpc_pb = require('../bosdyn/api/directory_registration_service_grpc_pb');

class DirectoryRegistrationResponseError extends ResponseError {
	constructor(msg){
		super(msg);
		this.name = 'DirectoryRegistrationResponseError';
	}
};

class ServiceAlreadyExistsError extends DirectoryRegistrationResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ServiceAlreadyExistsError';
	}
};

class ServiceDoesNotExistError extends DirectoryRegistrationResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ServiceDoesNotExistError';
	}
};

class DirectoryRegistrationClient extends BaseClient {

	static default_service_name = 'directory-registration';
    static service_type = 'bosdyn.api.DirectoryRegistrationService';

    constructor(){
    	super(directory_registration_service_grpc_pb.DirectoryRegistrationServiceClient);
    }

    async register(name, service_type, authority, host_ip, port, user_token_required = true, application_token_required = false, liveness_timeout_secs = 0, args){

    	if (application_token_required) console.warn('[DIRECTORY REGISTRATION] The application_token_required parameter has been deprecated and will have no effect.');

        const service_entry = new directory_pb.ServiceEntry()
        .setName(name)
        .setType(service_type)
        .setAuthority(authority)
        .setUserTokenRequired(user_token_required)
        .setLivenessTimeoutSecs(liveness_timeout_secs);

        const endpoint = new directory_pb.Endpoint().setHostIp(host_ip).setPort(port);

        const req = new directory_registration_pb.RegisterServiceRequest().setEndpoint(endpoint).setServiceEntry(service_entry);

        return await this.call(this._stub.registerService, req, null, _directory_register_error, args);

    }

    async update(name, service_type, authority, host_ip, port, user_token_required = true, application_token_required = false, liveness_timeout_secs = 0, args){

    	if (application_token_required) console.warn('[DIRECTORY REGISTRATION] The application_token_required parameter has been deprecated and will have no effect.');

        const service_entry = new directory_pb.ServiceEntry()
        .setName(name)
        .setType(service_type)
        .setAuthority(authority)
        .setUserTokenRequired(user_token_required)
        .setLivenessTimeoutSecs(liveness_timeout_secs);

        const endpoint = new directory_pb.Endpoint().setHostIp(host_ip).setPort(port);

        const req = new directory_registration_pb.UpdateServiceRequest().setEndpoint(endpoint).setServiceEntry(service_entry);

        return await this.call(this._stub.updateService, req, null, _directory_update_error, args);

    }

    async unregister(name, args){
    	const req = new directory_registration_pb.UnregisterServiceRequest().setServiceName(name);
        return await this.call(this._stub.unregisterService, req, null, _directory_unregister_error, args);
    }
};

const _REGISTER_STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_ALREADY_EXISTS: [ServiceAlreadyExistsError, 'The service already exists on the robot.']
};

const _UPDATE_STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_NONEXISTENT_SERVICE: [ServiceDoesNotExistError, 'The specified service does not exist on the robot.']
};

const _UNREGISTER_STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_NONEXISTENT_SERVICE: [ServiceDoesNotExistError, 'The specified service does not exist on the robot.']
};

function _directory_register_error(response){
	return error_factory(response, response.getStatus(), Object.keys(directory_registration_pb.RegisterServiceResponse.Status), _REGISTER_STATUS_TO_ERROR);
}

function _directory_update_error(response){
	return error_factory(response, response.getStatus(), Object.keys(directory_registration_pb.UpdateServiceResponse.Status), _UPDATE_STATUS_TO_ERROR);
}

function _directory_unregister_error(response){
	return error_factory(response, response.getStatus(), Object.keys(directory_registration_pb.UnregisterServiceResponse.Status), _UNREGISTER_STATUS_TO_ERROR);
}

function sleep(period) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, period);
    });
}

function reset_service_registration(directory_registration_client, name, service_type, authority,
                               host_ip, port, user_token_required = true, liveness_timeout_secs=0){
    try{
        directory_registration_client.unregister(name);
    }catch(e){
        
    }

    directory_registration_client.register(name, service_type, authority, host_ip, port, user_token_required, false, liveness_timeout_secs);
}

class DirectoryRegistrationKeepAlive {

	constructor(dir_reg_client, logger = null, rpc_timeout_seconds = null, rpc_interval_seconds=30_000){
		this.authority = null;
        this.directory_name = null;
        this.host = null;
        this.logger = logger || console;
        this.port = null;
        this.service_type = null;
        this.dir_reg_client = dir_reg_client;

        /*this._end_reregister_signal = threading.Event()
        this._lock = threading.Lock()*/
        this._rpc_timeout = rpc_timeout_seconds;
        this._reregister_period = rpc_interval_seconds;

        /*this._thread = threading.Thread(target=self._periodic_reregister)
        this._thread.daemon = True*/
	}

	start(directory_name, service_type, authority, host, port, liveness_timeout_secs = null,
        user_token_required = true, reset_service = true){

		if(liveness_timeout_secs == null){
            liveness_timeout_secs = this._reregister_period * 2.5;
        }
        if(reset_service) reset_service_registration(this.dir_reg_client, directory_name, service_type, authority,
                                       host, port, user_token_required, liveness_timeout_secs);
        else{
            try{
                this.dir_reg_client.register(directory_name, service_type, authority, host, port,
                                             user_token_required, false, liveness_timeout_secs);
            }catch(e){
                this.dir_reg_client.update(directory_name, service_type, authority, host, port,
                                           user_token_required, false, liveness_timeout_secs);
            }
        }
        this.logger.info(`[DIRECTORY REGISTRATION] ${directory_name} service registered/updated.`);

        this.authority = authority;
        this.directory_name = directory_name;
        this.host = host;
        this.port = port;
        this.service_type = service_type;
        this.liveness_timeout_secs = liveness_timeout_secs;

        return this;
	}

    is_alive(){
        
    }

    shutdown(){
        
    }

    unregister(){
        this.logger.info(`[DIRECTORY REGISTRATION] Unregistering ${this.directory_name} from directory`);
        this.dir_reg_client.unregister(this.directory_name);
    }

    async _periodic_reregister(){
        this.logger.info(`[DIRECTORY REGISTRATION] Starting directory registration loop for ${this.directory_name}`);
        while(true){
            const exec_start = Date.now();
            try{
                this.dir_reg_client.register(this.directory_name, this.service_type, self.authority,
                                             this.host, this.port, true, false, this.liveness_timeout_secs, {timeout: this._rpc_timeout});
            }catch(e){
                if(e instanceof ServiceAlreadyExistsError){
                   
                }else if(e instanceof RetryableUnavailableError){

                }else if(e instanceof TimedOutError){
                    this.logger.warn(`[DIRECTORY REGISTRATION] Timed out, timeout set to "${this._rpc_timeout}"`);
                }else{
                    this.logger.log('[DIRECTORY REGISTRATION] Caught general exception');
                }
            }
            const exec_sec = Date.now() - exec_start;
            if(await sleep(this._reregister_period - exec_sec)) break;
        }
    }
};

module.exports = {
    DirectoryRegistrationResponseError,
    ServiceAlreadyExistsError,
    ServiceDoesNotExistError,
    DirectoryRegistrationClient,
    DirectoryRegistrationKeepAlive
};