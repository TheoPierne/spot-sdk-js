const license_pb = require('../bosdyn/api/license_pb');
const license_service_pb = require('../bosdyn/api/license_service_grpc_pb');

const {BaseClient, common_header_errors} = require('./common');

function _get_entry_value(response){
	return response.getLicense();
};

/**
* Client to acquire robot license.
* @extends BaseClient 
* @class LicenseClient
*/
class LicenseClient extends BaseClient {

	static default_service_name = 'license';
	static service_type = 'bosdyn.api.LicenseService';

	/**
    * Create an instance of LicenseClient's class.
    * @param {string} [name=null] Name of the Class.
    */
	constructor(name = null){
		super(license_service_pb.LicenseServiceClient, name);
	}

	/**
    * Get the robot's installed license.
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {string|object}
    */
	async get_license_info(args){
		const req = new license_pb.GetLicenseInfoRequest();
		return await this.call(this._stub.getLicenseInfo, req, _get_entry_value, common_header_errors, args);
	}

	/**
    * Check if the installed license allow a list of feature codes.
    * @param feature_list
    * @param {object} args Extra arguments for controlling RPC details.
    * @return {array}
    */
	async get_feature_enabled(feature_list, args){
		console.assert(!(feature_list instanceof String));

        const req = new license_pb.GetFeatureEnabledRequest().setFeatureCodesList([feature_list]);

        return await this.call(this._stub.getFeatureEnabled, req, (response) => response.getFeatureEnabled(), common_header_errors, args);
    }
};

module.exports = {
	LicenseClient
};