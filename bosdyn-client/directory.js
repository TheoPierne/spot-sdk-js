const {ResponseError} = require('./exceptions');
const directory_pb = require('../bosdyn/api/directory_pb');
const directory_service_pb_grpc = require('../bosdyn/api/directory_service_grpc_pb');

const {BaseClient, common_header_errors, error_factory} = require('./common');

class DirectoryResponseError extends ResponseError {
	constructor(msg){
		super(null, msg);
		this.name = 'DirectoryResponseError';
	}
};

class NonexistentServiceError extends DirectoryResponseError {
	constructor(msg){
		super(msg);
		this.name = 'NonexistentServiceError';
	}
};

const _STATUS_TO_ERROR = {
	[directory_pb.GetServiceEntryResponse.Status.STATUS_OK]: [null, null],
	[directory_pb.GetServiceEntryResponse.Status.STATUS_NONEXISTENT_SERVICE]: [NonexistentServiceError, 'The requested service name does not exist.']
}

function _error_from_response(response){
	return error_factory(response, response.getStatus(), Object.keys(directory_pb.GetServiceEntryResponse.Status), _STATUS_TO_ERROR);
}

function _list_value(response){
	return response.getServiceEntriesList();
}

function _get_entry_value(response){
	return response.getServiceEntry();
}

/**
* List robot services and get information on them.
* @class DirectoryClient
* @extends BaseClient
*/
class DirectoryClient extends BaseClient {
	
	static default_service_name = 'directory';
	static service_type = 'bosdyn.api.DirectoryService';

	/**
    * Create an instance of DirectoryClient's class.
    * @param {string} [name=null] Name of the Class.
    */
	constructor(name = null){
		super(directory_service_pb_grpc.DirectoryServiceClient, name);
	}

	/**
    * List all services present on the robot.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {array} A list of the proto message definitions of all registered services
    * @throws {RpcError} Problem communicating with the robot.
    */
	async list(args){
		const req = new directory_pb.ListServiceEntriesRequest();
		return await this.call(this._stub.listServiceEntries, req, _list_value, common_header_errors, args);
	}

	/**
    * List all services present on the robot asynchronously.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {array} A list of the proto message definitions of all registered services
    * @throws {RpcError} Problem communicating with the robot.
    */
	list_async(args){
		const req = new directory_pb.ListServiceEntriesRequest();
		return this.call_async(this._stub.listServiceEntries, req, _list_value, common_header_errors, args);
	}

	/**
    * Get the service entry for one particular service specified by name.
    * @param {string} service_name The name of the service to retrieve.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return The proto message definition of the service entry
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {NonexistentServiceError} The service was not found.
    * @throws {DirectoryResponseError} Something went wrong during the directory access.
    */
	async get_entry(service_name, args){
		const req = new directory_pb.GetServiceEntryRequest().setServiceName(service_name);
		return await this.call(this._stub.getServiceEntry, req, _get_entry_value, _error_from_response, args);
	}

	/**
    * Get the service entry for one particular service specified by name asynchronously.
    * @param {string} service_name The name of the service to retrieve.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return The proto message definition of the service entry
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {NonexistentServiceError} The service was not found.
    * @throws {DirectoryResponseError} Something went wrong during the directory access.
    */
	get_entry_async(service_name, args){
		const req = new directory_pb.GetServiceEntryRequest().setServiceName(service_name);
		return this.call_async(this._stub.getServiceEntry, req, _get_entry_value, _error_from_response, args);
	}
};

module.exports = {
	DirectoryResponseError,
	NonexistentServiceError,
	DirectoryClient
};