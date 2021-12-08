const {BaseClient, common_header_errors} = require('./common.js');
const {NoTimeSyncError, _TimeConverter} = require('./robot_command.js');
const world_object_pb = require('../bosdyn/api/world_object_pb.js');
const world_object_service_pb = require('../bosdyn/api/world_object_service_pb.js');
const world_object_service = require('../bosdyn/api/world_object_service_grpc_pb.js');

/**
* Client for World Object service.
* @class WorldObjectClient
* @extends BaseClient
*/
class WorldObjectClient extends BaseClient {

	static default_service_name = 'world-objects';
	static service_type = 'bosdyn.api.WorldObjectService';

	/**
    * Create an instance of WorldObjectClient's class.
    * @param {?string} name
    */
	constructor(name=null){
		super(world_object_service.WorldObjectServiceClient, name);
		this._timesync_endpoint = null;
	}

	/**
    * Update instance from another object.
    * @param {object} other The object where to copy from.
    * @return {void}
    */
	update_from(other){
		super.update_from(other);
		try {
			this._timesync_endpoint = other.time_sync.endpoint;
		}catch(e){

		}
	}

	/**
    * Accessor for timesync-endpoint that is grabbed via 'update_from()'.
    * @type {*}
    * @throws {NoTimeSyncError} Could not find the timesync endpoint for the robot.
    * @readonly
    */
	get timesync_endpoint(){
		if(!this._timesync_endpoint){
			throw new NoTimeSyncError("[world object service] No timesync endpoint set for the robot");
		}
		return this._timesync_endpoint;
	}

	/**
    * Get a list of World Objects.
    * @param {?Array<world_object_pb.WorldObjectType>} object_type Specific types to include in the response,
    * all other types will be filtered out.
    * @param {?number} time_start_point A client timestamp to filter objects in the response. All objects
    * will have a timestamp after this time.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*} The response message, which includes the filtered list of all world objects.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
    */
	async list_world_objects(object_type = null, time_start_point = null, args){
		if(time_start_point != null){
			time_start_point = this._update_time_filter(time_start_point, this.timesync_endpoint);
		}
		const req = new world_object_pb.ListWorldObjectRequest().setObjectTypeList(object_type).setTimestampFilter(time_start_point);
		return await this.call(this._stub.listWorldObjects, req, _get_world_object_value, common_header_errors, args);
	}

	/**
    * Async version of list_world_objects().
    * @param {?Array<world_object_pb.WorldObjectType>} object_type Specific types to include in the response,
    * all other types will be filtered out.
    * @param {?number} time_start_point A client timestamp to filter objects in the response. All objects
    * will have a timestamp after this time.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*} The response message, which includes the filtered list of all world objects.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
    */
	list_world_objects_async(object_type = null, time_start_point = null, args){
		if(time_start_point != null){
			time_start_point = this._update_time_filter(time_start_point, this.timesync_endpoint);
		}
		const req = new world_object_pb.ListWorldObjectRequest().setObjectTypeList(object_type).setTimestampFilter(time_start_point);
		return this.call_async(this._stub.listWorldObjects, req, _get_world_object_value, common_header_errors, args);
	}

	/**
    * Mutate (add, change, delete) world objects.
    * @param {world_object_pb.MutateWorldObjectRequest} mutation_req The request including the object to be mutated and the type of mutation.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*} The response message, which includes the filtered list of all world objects.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
    */
	async mutate_world_objects(mutation_req, args){
		if(mutation_req.getMutation().getObject().hasAcquisitionTime()){
			const client_timestamp = mutation_req.getMutation().getObject().getAcquisitionTime();
			mutation_req.getMutation().getObject().setAcquisitionTime(this._update_timestamp_filter(client_timestamp, this.timesync_endpoint));
		}
		return await this.call(this._stub.mutateWorldObjects, mutation_req, _get_status, common_header_errors, args);
	}

	/**
    * Async version of mutate_world_objects().
    * @param {world_object_pb.MutateWorldObjectRequest} mutation_req The request including the object to be mutated and the type of mutation.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {*} The response message, which includes the filtered list of all world objects.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
    */
	mutate_world_objects_async(mutation_req, args){
		if(mutation_req.getMutation().getObject().hasAcquisitionTime()){
			const client_timestamp = mutation_req.getMutation().getObject().getAcquisitionTime();
			mutation_req.getMutation().getObject().setAcquisitionTime(this._update_timestamp_filter(client_timestamp, this.timesync_endpoint));
		}
		return this.call_async(this._stub.mutateWorldObjects, mutation_req, _get_status, common_header_errors, args);
	}

	/**
    * Set or convert fields of the proto that need timestamps in the robot's clock.
    * @param {number} timestamp Client time, such as from Date.now().
    * @param {TimeSyncEndpoint} timesync_endpoint A timesync endpoint associated with the robot object.
    * @return {*}
    * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
    * @private
    */
	_update_time_filter(timestamp, timesync_endpoint){
		if(!timesync_endpoint){
			throw new NoTimeSyncError("[WORLD OBJECT] No timesync endpoint set for the robot.");
		}
		const converter = new _TimeConverter(this, timesync_endpoint);
		return converter.robot_timestamp_from_local_secs(timestamp);
	}

	/**
    * Set or convert fields of the proto that need timestamps in the robot's clock.
    * @param {google.protobuf.Timestamp} timestamp Client time.
    * @param {TimeSyncEndpoint} timesync_endpoint A timesync endpoint associated with the robot object.
    * @return {google.protobuf.Timestamp}
    * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
    * @private
    */
	_update_timestamp_filter(timestamp, timesync_endpoint){
		if(!timesync_endpoint){
			throw new NoTimeSyncError("[WORLD OBJECT] No timesync endpoint set for the robot.");
		}
		const converter = new _TimeConverter(this, timesync_endpoint);
		converter.convert_timestamp_from_local_to_robot(timestamp);
		return timestamp;
	}
}

function _get_world_object_value(response){
	return response;
}

function _get_status(response){
	if (response.getStatus() != world_object_pb.MutateWorldObjectResponse.Status.STATUS_OK){
		if (response.getStatus() == world_object_pb.MutateWorldObjectResponse.Status.STATUS_INVALID_MUTATION_ID){
			console.log("[WORLD OBJECT] Object id not found, and could not be mutated.");
		}
		if (response.getStatus() == world_object_pb.MutateWorldObjectResponse.Status.STATUS_NO_PERMISSION){
			console.log("[WORLD OBJECT] Cannot change/delete objects detected by Spot's perception system, only client objects.");
		}
	}
	return response;
}

/**
* Add a world object to the scene.
* @param {world_object_pb.WorldObject} world_obj The world object to be added into the robot's perception scene.
* @return {world_object_pb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to "add" the object to the scene.
*/
function make_add_world_object_req(world_obj){
	const add_obj = new world_object_pb.MutateWorldObjectRequest.Mutation()
	.setAction(world_object_pb.MutateWorldObjectRequest.Action.ACTION_ADD)
	.setObject(world_obj);
    const req = new world_object_pb.MutateWorldObjectRequest().setMutation(add_obj);
    return req;
}

/**
* Delete a world object from the scene.
* @param {world_object_pb.WorldObject} world_obj The world object to be delete in the robot's perception scene. The
* object must be a client-added object and have the correct world object
* id returned by the service after adding the object.
* @return {world_object_pb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to "delete" the object to the scene.
*/
function make_delete_world_object_req(world_obj){
	const del_obj = new world_object_pb.MutateWorldObjectRequest.Mutation()
	.setAction(world_object_pb.MutateWorldObjectRequest.Action.ACTION_DELETE)
	.setObject(world_obj);
    const req = new world_object_pb.MutateWorldObjectRequest().setMutation(del_obj);
    return req;
}

/**
* Change/update an existing world object in the scene.
* @param {world_object_pb.WorldObject} world_obj The world object to be changed/updated in the robot's perception scene.
* The object must be a client-added object and have the correct world object
* id returned by the service after adding the object.
* @return {world_object_pb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to "change" the object to the scene.
*/
function make_change_world_object_req(world_obj){
	const change_obj = new world_object_pb.MutateWorldObjectRequest.Mutation()
	.setAction(world_object_pb.MutateWorldObjectRequest.Action.ACTION_CHANGE)
	.setObject(world_obj);
    const req = new world_object_pb.MutateWorldObjectRequest().setMutation(change_obj);
    return req;
}

module.exports = {
	WorldObjectClient,
	make_add_world_object_req,
	make_delete_world_object_req,
	make_change_world_object_req
};