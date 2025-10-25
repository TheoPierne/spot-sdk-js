'use strict';

const { BaseClient, commonHeaderErrors } = require('./common');
const licensePb = require('../bosdyn/api/license_pb');
const { LicenseServiceClient } = require('../bosdyn/api/license_service_grpc_pb');

function _getEntryValue(response) {
  return response.getLicense();
}

/**
 * @typedef {import('google-protobuf').Map} JspbMap
 */

/**
 * Client to acquire robot license.
 * @extends {BaseClient<LicenseServiceClient>}
 */
class LicenseClient extends BaseClient {
  static defaultServiceName = 'license';
  static serviceType = 'bosdyn.api.LicenseService';

  constructor(name = null) {
    super(LicenseServiceClient, name);
  }

  /**
   * Get the robot's installed license.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<licensePb.LicenseInfo>}
   */
  getLicenseInfo(args) {
    const req = new licensePb.GetLicenseInfoRequest();
    return this.call(this._stub.getLicenseInfo, req, _getEntryValue, commonHeaderErrors, false, args);
  }

  /**
   * Check if the installed license allow a list of feature codes.
   * @param {string[]} featureList Features code.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<JspbMap>}
   */
  getFeatureEnabled(featureList = [], args) {
    const req = new licensePb.GetFeatureEnabledRequest().setFeatureCodesList(featureList);

    return this.call(
      this._stub.getFeatureEnabled,
      req,
      response => response.getFeatureEnabledMap(),
      commonHeaderErrors,
      false,
      args,
    );
  }
}

module.exports = {
  LicenseClient,
};
