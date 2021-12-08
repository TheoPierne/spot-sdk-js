const {BaseClient} = require('./common');
const {add_lease_wallet_processors} = require('./lease');
const manipulation_api_service_grpc_pb = require('../bosdyn/api/manipulation_api_service_grpc_pb');

/**
* Client for the ManipulationAPI service.
* @class ManipulationApiClient
* @extends BaseClient
*/
class ManipulationApiClient extends BaseClient {

	static default_service_name = 'manipulation';
    static service_type = 'bosdyn.api.ManipulationApiService';

    /**
    * Create an instance of ManipulationApiClient's class.
    * @param {String} [name=null] Name of the Class.
    */
    constructor(name = null){
    	super(manipulation_api_service_grpc_pb.ManipulationApiServiceClient, name);
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
    * Issue a manipulation api command to the robot.
    * @param {manipulation_api_pb.ManipulationApiRequest} manipulation_api_request The command request
                for a manipulation task.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {manipulation_api_pb.ManipulationApiResponse} The full ManipulationApiResponse message, which includes a command id for feedback.
    */
    async manipulation_api_command(manipulation_api_request, args){
        return await this.call(this._stub.manipulationApi, manipulation_api_request, null, null, args);
    }

    /**
    * Issue a manipulation api command to the robot asynchronously.
    * @param {manipulation_api_pb.ManipulationApiRequest} manipulation_api_request The command request for a manipulation task.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {manipulation_api_pb.ManipulationApiResponse} The full ManipulationApiResponse message, which includes a command id for feedback.
    */
    manipulation_api_command_async(manipulation_api_request, args){
        return this.call_async(this._stub.manipulationApi, manipulation_api_request, null, null, args);
    }

    /**
    * Issue a manipulation api feedback request to the robot.
    * @param {manipulation_api_pb.ManipulationApiFeedbackRequest} manipulation_api_feedback_request The request for feedback for a specific manipulation command.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {manipulation_api_pb.ManipulationApiFeedbackResponse} The full ManipulationApiFeedbackResponse message.
    */
    async manipulation_api_feedback_command(manipulation_api_feedback_request, args){
        return await this.call(this._stub.manipulationApiFeedback, manipulation_api_feedback_request, null, null, args);
    }

    /**
    * Issue a manipulation api feedback request to the robot asynchronously.
    * @param {manipulation_api_pb.ManipulationApiFeedbackRequest} manipulation_api_feedback_request The request for feedback for a specific manipulation command.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {manipulation_api_pb.ManipulationApiFeedbackResponse} The full ManipulationApiFeedbackResponse message.
    */
    manipulation_api_feedback_command_async(manipulation_api_feedback_request, args){
        return this.call_async(this._stub.manipulationApiFeedback, manipulation_api_feedback_request, null, null, args);
    }

};

module.exports = {
	ManipulationApiClient
};