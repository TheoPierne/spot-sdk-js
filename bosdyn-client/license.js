'use strict';

const { BaseClient, common_header_errors } = require('./common');
const license_pb = require('../bosdyn/api/license_pb');
const license_service_pb = require('../bosdyn/api/license_service_grpc_pb');

function _get_entry_value(response) {
  return response.getLicense();
}

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
   * @param {?string} name BaseClient's name.
   */
  constructor(name = null) {
    super(license_service_pb.LicenseServiceClient, name);
  }

  /**
   * Get the robot's installed license.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<string|Object>}
   */
  get_license_info(args) {
    const req = new license_pb.GetLicenseInfoRequest();
    return this.call(this._stub.getLicenseInfo, req, _get_entry_value, common_header_errors, args);
  }

  /**
   * Check if the installed license allow a list of feature codes.
   * @param {Array<string>} feature_list Features code.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Array}
   */
  get_feature_enabled(feature_list = [], args) {
    // Console.assert(!(feature_list instanceof String));

    const req = new license_pb.GetFeatureEnabledRequest().setFeatureCodesList([...feature_list]);

    return this.call(
      this._stub.getFeatureEnabled,
      req,
      response => response.getFeatureEnabledMap(),
      common_header_errors,
      args,
    );
  }
}

module.exports = {
  LicenseClient,
};
