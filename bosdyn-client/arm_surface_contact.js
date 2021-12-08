const {BaseClient, common_header_errors} = require('./common');
const {add_lease_wallet_processors} = require('./lease');
const {NoTimeSyncError, _TimeConverter, _edit_proto} = require('./robot_command');
const arm_surface_contact_pb = require('../bosdyn/api/arm_surface_contact_pb');
const arm_surface_contact_service_grpc_pb = require('../bosdyn/api/arm_surface_contact_service_grpc_pb');

const EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME = {
    request: {
        poseTrajectoryInTask: {
            referenceTime: null
        },
        gripperCommand:{
            trajectory: {
                referenceTime: null
            }
        }
    }
};

/**
* Client for the ArmSurfaceContact service.
* @class ArmSurfaceContactClient
* @extends BaseClient
*/
class ArmSurfaceContactClient extends BaseClient {

	static default_service_name = 'arm-surface-contact';
    static service_type = 'bosdyn.api.ArmSurfaceContactService';

    /**
    * Create an instance of ArmSurfaceContactClient's class.
    * @param {string} [name=null] Name of the Class.
    */
    constructor(name = null){
    	super(arm_surface_contact_service_grpc_pb.ArmSurfaceContactServiceClient, name);
    	this._timesync_endpoint = null;
    }

    /**
    * Update instance from another object.
    * @param {object} other The object where to copy from.
    * @return {void}
    */
    update_from(other){
        super.update_from(other);
        if(this.lease_wallet) add_lease_wallet_processors(this, this.lease_wallet);

        try{
            this._timesync_endpoint = other.time_sync.endpoint;
        }catch(e){

        }
    }

    /**
    * Set or convert fields of the command proto that need timestamps in the robot's clock.
    * @param {arm_surface_contact_pb.ArmSurfaceContactRequest} command Command message to update.
    * @return {void}
    * @private
    */
    _update_command_timestamps(command){
        if(this._timesync_endpoint == null) throw new NoTimeSyncError();

        const converter = new _TimeConverter(this, this._timesync_endpoint);

        function _to_robot_time(key, proto){
            if(!(key in proto)) return;
            const timestamp = proto[key];
            converter.convert_timestamp_from_local_to_robot(timestamp);
        }

        _edit_proto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _to_robot_time);
    }

    /**
    * Issue an arm surface contact command to the robot.
    * @param {arm_surface_contact_pb.ArmSurfaceContactRequest} request The command request.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return The full arm surface contact response message.
    */
    async arm_surface_contact_command(request, args){
        this._update_command_timestamps(request);
        return await this.call(this._stub.armSurfaceContact, request, null, null, args);
    }

    /**
    * Issue an arm surface contact command to the robot asynchronously.
    * @param {arm_surface_contact_pb.ArmSurfaceContactRequest} request The command request.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return The full arm surface contact response message.
    */
    arm_surface_contact_command_async(request, args){
        this._update_command_timestamps(request);
        return this.call_async(this._stub.armSurfaceContact, request, null, null, args);
    }

};

module.exports = {
    ArmSurfaceContactClient
}