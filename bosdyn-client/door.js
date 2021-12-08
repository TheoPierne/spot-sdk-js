const {BaseClient, handle_common_header_errors, handle_lease_use_result_errors} = require('./common');
const {add_lease_wallet_processors} = require('./lease');
const door_service_grpc_pb = require('../bosdyn/api/spot/door_service_grpc_pb');

/**
* Client for the door service.
* @class DoorClient
* @extends BaseClient
*/
class DoorClient extends BaseClient {

	static default_service_name = 'door';
    static service_type = 'bosdyn.api.spot.DoorService';

    /**
    * Create an instance of DoorClient's class.
    * @param {string} [name=null] Name of the Class.
    */
    constructor(name = null){
    	super(door_service_grpc_pb.DoorServiceClient, name);
    }

    /**
    * Update instance from another object.
    * @param {object} other The object where to copy from.
    * @return {void}
    */
    update_from(other){
        super.update_from(other);
        if(this.lease_wallet) add_lease_wallet_processors(this, this.lease_wallet);
    }

    /**
    * Issue a open door command to the robot.
    * @param {door_pb.OpenDoorCommandRequest} request The door command.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {door_pb.OpenDoorCommandResponse} The full OpenDoorCommandResponse message, which includes a command id for feedback.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {LeaseUseError} The lease for the request failed.
    */
    async open_door(request, args){
    	return await this.call(this._stub.openDoor, request, null, _open_door_error_handler, args);
    }

    /**
    * Issue a open door command to the robot asynchronously.
    * @param {door_pb.OpenDoorCommandRequest} request The door command.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {door_pb.OpenDoorCommandResponse} The full OpenDoorCommandResponse message, which includes a command id for feedback.
    * @throws {RpcError} Problem communicating with the robot.
    * @throws {LeaseUseError} The lease for the request failed.
    */
    open_door_async(request, args){
    	return this.call_async(this._stub.openDoor, request, null, _open_door_error_handler, args);
    }

    /**
    * Get feedback from the robot on a specific door command.
    * @param {door_pb.OpenDoorFeedbackRequest} request The request for feedback of the door command.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {door_pb.OpenDoorFeedbackResponse} The full OpenDoorFeedbackResponse message.
    * @throws {RpcError} Problem communicating with the robot.
    */
    async open_door_feedback(request, args){
        return await this.call(this._stub.openDoorFeedback, request, null, _open_door_feedback_error_handler, args);
    }

    /**
    * Get feedback from the robot on a specific door command asynchronously.
    * @param {door_pb.OpenDoorFeedbackRequest} request The request for feedback of the door command.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {door_pb.OpenDoorFeedbackResponse} The full OpenDoorFeedbackResponse message.
    * @throws {RpcError} Problem communicating with the robot.
    */
    open_door_feedback_async(request, args){
        return this.call_async(this._stub.openDoorFeedback, request, null, _open_door_feedback_error_handler, args);
    }

};

function _open_door_error_handler(response){
    return null;
}

function _open_door_feedback_error_handler(response){
    return null;
}

module.exports = {
	DoorClient
};