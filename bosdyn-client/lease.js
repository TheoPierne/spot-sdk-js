const {BaseClient, common_lease_errors, common_header_errors, error_factory} = require('./common');
const {ResponseError, ValueError} = require('./exceptions');

const lease_service_grpc_pb = require('../bosdyn/api/lease_service_grpc_pb');
const lease_pb = require('../bosdyn/api/lease_pb');

const {cloneDeep} = require('lodash');

const _RESOURCE_BODY = 'body';

class LeaseResponseError extends ResponseError {
	constructor(msg){
		super(msg);
		this.name = 'LeaseResponseError';
	}
};

class InvalidLeaseError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'InvalidLeaseError';
	}
};

class DisplacedLeaseError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'DisplacedLeaseError';
	}
};

class InvalidResourceError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'InvalidResourceError';
	}
};

class NotAuthoritativeServiceError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'NotAuthoritativeServiceError';
	}
};

class ResourceAlreadyClaimedError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ResourceAlreadyClaimedError';
	}
};

class RevokedLeaseError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'RevokedLeaseError';
	}
};

class UnmanagedResourceError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'UnmanagedResourceError';
	}
};

class WrongEpochError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'WrongEpochError';
	}
};

class NotActiveLeaseError extends LeaseResponseError {
	constructor(msg){
		super(msg);
		this.name = 'NotActiveLeaseError';
	}
};

class NoSuchLease extends Error {
	constructor(resource){
		super(`No lease for resource "${resource}"`);
		this.name = 'NoSuchLease';
		this.resource = resource;
	}

	toString(){
		return `No lease for resource "${this.resource}"`;
	}
};

class LeaseNotOwnedByWallet extends Error {
	constructor(resource, lease_state){
		super(`Lease on "${this.resource}" has state (${this.lease_state?.lease_status ? this.lease_state.lease_status : '<unknown>'})`);
		this.name = 'LeaseNotOwnedByWallet';
		this.resource = resource;
		this.lease_state = lease_state;
	}

	toString(){
		let state;
		try{
			state = this.lease_state.lease_status;
		}catch(e){
			state = "<unknown>";
		}
		return `Lease on "${this.resource}" has state (${state})`;
	}
};

const _ACQUIRE_LEASE_STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_RESOURCE_ALREADY_CLAIMED: [ResourceAlreadyClaimedError, 'Use TakeLease method to forcefully grab the already claimed lease.'],
	STATUS_INVALID_RESOURCE: [InvalidResourceError, 'Resource is not known to the LeaseService.'],
	STATUS_NOT_AUTHORITATIVE_SERVICE: [NotAuthoritativeServiceError, 'LeaseService is not authoritative so Acquire should not work.']
}

const _TAKE_LEASE_STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_INVALID_RESOURCE: [InvalidResourceError, 'Resource is not known to the LeaseService.'],
	STATUS_NOT_AUTHORITATIVE_SERVICE: [NotAuthoritativeServiceError, 'LeaseService is not authoritative so Acquire should not work.']
}

const _RETURN_LEASE_STATUS_TO_ERROR = {
	STATUS_OK: [null, null],
	STATUS_INVALID_RESOURCE: [InvalidResourceError, 'Resource is not known to the LeaseService.'],
	STATUS_NOT_ACTIVE_LEASE: [NotActiveLeaseError, 'Lease is not the active lease.'],
	STATUS_NOT_AUTHORITATIVE_SERVICE: [NotAuthoritativeServiceError, 'LeaseService is not authoritative so Acquire should not work.']
}

class Lease {

	static CompareResult = {
		SAME: 1,
		SUPER_LEASE: 2,
		SUB_LEASE: 3,
		OLDER: 4,
		NEWER: 5,
		DIFFERENT_RESOURCES: 6,
		DIFFERENT_EPOCHS: 7
	}

	constructor(lease_proto){
		if(!this.is_valid_proto(lease_proto)) throw new ValueError(`invalid lease_proto: ${lease_proto}`);
		this.lease_proto = lease_proto;
	}

	compare(other_lease){
		if (this.lease_proto.getResource() != other_lease.lease_proto.getResource()) return this.CompareResult.DIFFERENT_RESOURCES;
		if (this.lease_proto.getEpoch() != other_lease.lease_proto.getEpoch()) return this.CompareResult.DIFFERENT_EPOCHS;

		const sequence_size = this.lease_proto.getSequenceList().length;
		const other_sequence_size = other_lease.lease_proto.getSequenceList().length;
		const common_sequence_size = Math.min(sequence_size, other_sequence_size);
		for(let i = 0; i < common_sequence_size; i++){
			const sequence_num = this.lease_proto.getSequenceList()[i];
			const other_sequence_num = other_lease.lease_proto.getSequenceList()[i];
			if(sequence_num < other_sequence_num){
				return this.CompareResult.OLDER;
			}else if(sequence_num > other_sequence_num){
				return this.CompareResult.NEWER;
			}
		}

		if(sequence_size < other_sequence_size){
			return this.CompareResult.SUPER_LEASE;
		}else if(sequence_size > other_sequence_size){
			return this.CompareResult.SUB_LEASE;
		}

		return this.CompareResult.SAME;
	}

	create_newer(){
		let incr_lease_proto = new lease_pb.Lease();
		incr_lease_proto = cloneDeep(this.lease_proto);
		incr_lease_proto.setSequenceList(incr_lease_proto.getSequenceList()[incr_lease_proto.getSequenceList().length - 1] = this.lease_proto.sequence[this.lease_proto.sequence.length - 1] + 1);
		return new Lease(incr_lease_proto);
	}

	create_sublease(){
		let sub_lease_proto = new lease_pb.Lease();
		sub_lease_proto = cloneDeep(this.lease_proto);
		sub_lease_proto.addSequence(0);
		return new Lease(sub_lease_proto);
	}

	static is_valid_proto(lease_proto){
		return lease_proto && lease_proto.getResource() && lease_proto.getSequenceList();
	}

};

class LeaseState {

	static Status = {
		STATUS_UNOWNED: 0,
		STATUS_REVOKED: 1,
		STATUS_SELF_OWNER: 2,
		STATUS_OTHER_OWNER: 3,
		STATUS_NOT_MANAGED: 4
	}

	constructor(lease_status, lease_owner = null, lease = null, lease_current = null, client_name = null){
		this.lease_status = lease_status;
		this.lease_owner = lease_owner;
		this.lease_original = lease;
		this.client_name = client_name;
		if(lease_current){
			this.lease_current = lease_current;
		}else if(lease){
			this.lease_current = this.lease_original.create_sublease();
		}else{
			this.lease_current = null;
		}
	}

	create_newer(){
		if(!this.lease_current) return this;
		return new LeaseState(this.lease_status, this.lease_owner, this.lease_original, this.lease_current.create_newer());
	}

	update_from_lease_use_result(lease_use_result){
		if(lease_use_result.getStatus() == lease_pb.LeaseUseResult.Status.STATUS_OLDER){
			if(this.lease_current){
				const attempted_lease = new Lease(lease_use_result.getAttemptedLease());
				if(attempted_lease.compare(this.lease_current) == Lease.CompareResult.SAME){
					return new LeaseState(LeaseState.Status.STATUS_OTHER_OWNER, lease_use_result.getOwner());
				}
			}
		}else if(lease_use_result.getStatus() == lease_pb.LeaseUseResult.Status.STATUS_WRONG_EPOCH){
			if(this.lease_current){
				const attempted_lease = new Lease(lease_use_result.getAttemptedLease());
				if(attempted_lease.compare(this.lease_current) == Lease.CompareResult.SAME){
					return new LeaseState(LeaseState.Status.STATUS_UNOWNED);
				}
			}
		}else if(lease_use_result.getStatus() == lease_pb.LeaseUseResult.Status.STATUS_REVOKED){
			if(this.lease_current){
				const attempted_lease = new Lease(lease_use_result.getAttemptedLease());
				if(attempted_lease.compare(this.lease_current) == Lease.CompareResult.SAME){
					return new LeaseState(LeaseState.Status.STATUS_REVOKED);
				}
			}
		}
		return this;
	}
};

class LeaseWallet {

	constructor(){
		this._lease_state_map = {};
        // this._lock = threading.Lock();
        this.client_name = null;
    }

    add(lease){
    	this._lease_state_map[lease.getLease().getResource()] = new LeaseState(LeaseState.Status.STATUS_SELF_OWNER, null, lease, this.client_name);
    }

    remove(lease){
    	delete this._lease_state_map[lease.getLease().getResource()];
    }

    advance(resource=_RESOURCE_BODY){
    	const lease_state = this._get_owned_lease_state_locked(resource);
    	const new_lease = lease_state.create_newer();
    	this._lease_state_map[resource] = new_lease;
    	return new_lease.lease_current;
    }

    get_lease(resource=_RESOURCE_BODY){
    	return this._get_owned_lease_state_locked(resource).lease_current;
    }

    get_lease_state(resource=_RESOURCE_BODY){
    	return this._get_lease_state_locked(resource);
    }

    _get_lease_state_locked(resource){
    	try{
    		return this._lease_state_map[resource];
    	}catch(e){
    		throw new NoSuchLease(resource);
    	}
    }

    _get_owned_lease_state_locked(resource){
    	const lease_state = this._get_lease_state_locked(resource);
    	if(lease_state.lease_status != LeaseState.Status.STATUS_SELF_OWNER) throw new LeaseNotOwnedByWallet(resource, lease_state);
    	return lease_state;
    }

    on_lease_use_result(lease_use_result, resource = null){
    	resource = resource || lease_use_result.getAttemptedLease().getResource();
    	const lease_state = this._lease_state_map[resource];
    	if(!lease_state) return;
    	const new_lease_state = lease_state.update_from_lease_use_result(lease_use_result);
    	this._lease_state_map[resource] = new_lease_state;
    }

    set_client_name(client_name){
    	this.client_name = client_name;
    }
};

class LeaseClient extends BaseClient {

	static default_service_name = 'lease';
	static service_type = 'bosdyn.api.LeaseService';

	constructor(lease_wallet = null){
		super(lease_service_grpc_pb.LeaseServiceClient);
		this.lease_wallet = lease_wallet;
	}

	async acquire(resource=_RESOURCE_BODY, args){
		const req = LeaseClient._make_acquire_request(resource);
		return await this.call(this._stub.acquireLease, req, this._handle_acquire_success, this._handle_acquire_errors, args);
	}

	acquire_async(resource=_RESOURCE_BODY, args){
		const req = LeaseClient._make_acquire_request(resource);
		return this.call_async(this._stub.acquireLease, req, this._handle_acquire_success, this._handle_acquire_errors, args);
	}

	async take(resource=_RESOURCE_BODY, args){
		const req = LeaseClient._make_take_request(resource);
		return await this.call(this._stub.takeLease, req, this._handle_acquire_success, this._handle_take_errors, args);
	}

	take_async(resource=_RESOURCE_BODY, args){
		const req = LeaseClient._make_take_request(resource);
		return this.call_async(this._stub.takeLease, req, this._handle_acquire_success, this._handle_take_errors, args);
	}

	async return_lease(lease, args){
		if(this.lease_wallet) this.lease_wallet.remove(lease);
		const req = LeaseClient._make_return_request(lease);
		return await this.call(this._stub.returnLease, req, null, this._handle_return_errors, args);
	}

	return_lease_async(lease, args){
		if(this.lease_wallet) this.lease_wallet.remove(lease);
		const req = LeaseClient._make_return_request(lease);
		return this.call_async(this._stub.returnLease, req, null, this._handle_return_errors, args);
	}

	async retain_lease(lease, args){
		const req = LeaseClient._make_retain_request(lease);
		return await this.call(this._stub.retainLease, req, null, common_lease_errors, args);
	}

	retain_lease_async(lease, args){
		const req = LeaseClient._make_retain_request(lease);
		return this.call_async(this._stub.retainLease, req, null, common_lease_errors, args);
	}

	async list_leases(args){
		const req = LeaseClient._make_list_leases_request();
		return await this.call(this._stub.listLeases, req, this._list_leases_success, common_header_errors, args);
	}

	list_leases_async(args){
		const req = LeaseClient._make_list_leases_request();
		return this.call_async(this._stub.listLeases, req, this._list_leases_success, common_header_errors, args);
	}

	static _make_acquire_request(resource){
		return new lease_pb.AcquireLeaseRequest().setResource(resource);
	}

	_handle_acquire_success(response){
		const lease = new Lease(response.getLease());
		if(this.lease_wallet) this.lease_wallet.add(lease);
		return lease;
	}

	_handle_acquire_errors(response){
		return error_factory(response, response.status, Object.keys(lease_pb.AcquireLeaseResponse.Status), _ACQUIRE_LEASE_STATUS_TO_ERROR);
	}

	static _make_take_request(resource){
		return new lease_pb.TakeLeaseRequest().setResource(resource);
	}

	_handle_take_errors(response){
		return error_factory(response, response.status, Object.keys(lease_pb.TakeLeaseResponse.Status), _TAKE_LEASE_STATUS_TO_ERROR);
	}

	static _make_return_request(lease){
		return new lease_pb.ReturnLeaseRequest().setLease(lease.getLease());
	}

	_handle_return_errors(response){
		return error_factory(response, response.status, Object.keys(lease_pb.ReturnLeaseResponse.Status), _RETURN_LEASE_STATUS_TO_ERROR);
	}

	static _make_retain_request(lease){
		return new lease_pb.RetainLeaseRequest().setLease(lease.getLease());
	}

	static _make_list_leases_request(include_full_lease_info){
		return new lease_pb.ListLeasesRequest().setIncludeFullLeaseInfo(include_full_lease_info);
	}

	_list_leases_success(response){
		return response.getResources();
	}

};

class LeaseWalletRequestProcessor {

	constructor(lease_wallet, resource_list = null){
		this.lease_wallet = lease_wallet;
		this.resource_list = resource_list || [_RESOURCE_BODY];
		this.logger = console;
	}

	mutate(request){
		const [multiple_leases, skip_mutation] = this.get_lease_state(request);

		if(skip_mutation) return;

		if(multiple_leases && this.resource_list.length <= 1){
			//pass
		}else if(!multiple_leases && this.resource_list.length > 1){
			this.logger.error('[LEASE] LeaseWalletRequestProcessor assigned multiple leases, but request only wants one.');
		}

		if(multiple_leases){
			for(const resource of this.resource_list){
				const lease = this.lease_wallet.advance(resource);
				request.leases.add(lease.getLease());
			}
		}else{
			const lease = this.lease_wallet.advance(this.resource_list[0]);
			request.lease = lease.getLease();
		}
	}

	static get_lease_state(request){
		let skip_mutation = false;
		let multiple_leases = null;

		let isCatchFirst = false;

		try{
			skip_mutation = request.hasLease();
		}catch(e){
			let isCatchSecond = false;
			isCatchFirst = true;
			try{
				skip_mutation = request.getLease().length > 0;
			}catch(e){
				isCatchSecond = true;
				skip_mutation = true;
			}

			if(!isCatchSecond) multiple_leases = true;
		}

		if(!isCatchFirst) multiple_leases = false;

		return [multiple_leases, skip_mutation]
	}

};

class LeaseWalletResponseProcessor {

	constructor(lease_wallet){
		this.lease_wallet = lease_wallet;
	}

	mutate(response){
		let lease_use_results = null;
		try{
			lease_use_results = [response.getLeaseUseResult()];
		}catch(e){
			try{
				lease_use_results = response.getLeaseUseResult();
			}catch(e){
				return;
			}
		}

		for(const result of lease_use_results){
			this.lease_wallet.on_lease_use_result(result);
		}
	}

};


function add_lease_wallet_processors(client, lease_wallet, resource_list = null){
	client.request_processors.push(new LeaseWalletRequestProcessor(lease_wallet, resource_list));
	client.response_processors.push(new LeaseWalletResponseProcessor(lease_wallet));
}

class LeaseKeepAlive {

	constructor(lease_client, lease_wallet = null, resource = _RESOURCE_BODY, rpc_interval_seconds = 2, keep_running_cb = null){
		if(!lease_client) throw new ValueError("lease_client must be set");
		this._lease_client = lease_client;

		if(!lease_wallet) lease_wallet = lease_client.lease_wallet;
		if(!lease_wallet) throw new ValueError("lease_wallet must be set");
		this._lease_wallet = lease_wallet;

		if(!resource) throw new ValueError("resource must be set");
		this._resource = resource;

		if(rpc_interval_seconds <= 0.0) throw new ValueError(`rpc_interval_seconds must be > 0, was ${rpc_interval_seconds}`);
		this._rpc_interval_seconds = rpc_interval_seconds;

		this.logger = console;

		this._keep_running = keep_running_cb || (() => true);

        // this._end_check_in_signal = threading.Event()

        /*this._thread = threading.Thread(target=this._periodic_check_in);
        this._thread.daemon = true;
        this._thread.start();*/
    }

    shutdown(){
    	this.logger.debug('Shutting down');
    	this._end_periodic_check_in();
    	this.wait_until_done();
    }

    is_alive(){
        return false; //this._thread.is_alive();
    }

    get lease_wallet(){
    	return this._lease_wallet;
    }

    wait_until_done(){
        // this._thread.join();
    }

    _end_periodic_check_in(){
        // this.logger.debug('Stopping check-in');
        // this._end_check_in_signal.set();
    }

    _ok(){
    	this.logger.debug('Check-in successful');
    }

    _check_in(){
    	var lease = this._lease_wallet.get_lease(this._resource);
    	if(!lease) return null;
    	return this._lease_client.retain_lease(lease);
    }

    _periodic_check_in(){
    	this.logger.info('Starting lease check-in');
    	while(true){
    		const exec_start = Date.now();

    		if(!this._keep_running()) break;

    		let isCatch = false;

    		try{
    			this._check_in();
    		}catch(e){
    			isCatch = true;
    			this.logger.warn(`Generic exception during check-in:\n${e}\n (resuming check-in)`);
    		}

    		if(!isCatch){
    			this._ok();
    		}

    		const exec_seconds = Date.now() - exec_start;

    		if(this._end_check_in_signal.wait(this._rpc_interval_seconds - exec_seconds)) break;
    	}
    	this.logger.info('Lease check-in stopped');
    }
};

module.exports = {
	LeaseResponseError,
	InvalidLeaseError,
	DisplacedLeaseError,
	InvalidResourceError,
	NotAuthoritativeServiceError,
	ResourceAlreadyClaimedError,
	RevokedLeaseError,
	UnmanagedResourceError,
	WrongEpochError,
	NotActiveLeaseError,
	NoSuchLease,
	LeaseNotOwnedByWallet,
	Lease,
	LeaseState,
	LeaseWallet,
	LeaseClient,
	LeaseWalletRequestProcessor,
	LeaseWalletResponseProcessor,
	add_lease_wallet_processors,
	LeaseKeepAlive
};