const robot_id_pb = require('../bosdyn/api/robot_id_pb');
const robot_id_service_grpc_pb = require('../bosdyn/api/robot_id_service_grpc_pb');
const {BaseClient, common_header_errors} = require('../bosdyn-client/common');
const {parseVersion} = require('semver');

function _get_entry_value(response){
	return response.getRobotId();
};

/**
* Client to access robot info.
* @class RobotIdClient
* @extends BaseClient
*/
class RobotIdClient extends BaseClient {

	static default_service_name = 'robot-id';
	static service_type = 'bosdyn.api.RobotIdService';

	/**
    * Create an instance of RobotIdClient's class.
    * @param {string} [name=null] Name of the Class.
    */
	constructor(name = null){
		super(robot_id_service_grpc_pb.RobotIdServiceClient, name);
	}

	/**
    * Get the robot's robot/id.proto.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {string|number} User token from the server as a string.
    */
	async get_id(args){
		const req = new robot_id_pb.RobotIdRequest();
		return await this.call(this._stub.getRobotId, req, _get_entry_value, common_header_errors, args);
	}

	/**
    * Get the robot's robot/id.proto asynchronously.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {string|number} User token from the server as a string.
    */
	get_id_async(args){
		const req = new robot_id_pb.RobotIdRequest();
		return this.call_async(this._stub.getRobotId, req, _get_entry_value, common_header_errors, args);
	}

};

function create_strict_version(robot_id){
	if(robot_id == undefined) return null;
	const version = robot_id.getSoftwareRelease().getVersion();
	const version_string = `${version.getMajorVersion()}.${version.getMinorVersion()}.${version.getPatchLevel()}`;
	return parseVersion(version_string);
}

module.exports = {
	RobotIdClient,
	create_strict_version
};