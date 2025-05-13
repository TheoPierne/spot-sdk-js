'use strict';

const registrationPb = require('../../bosdyn/api/gps/registration_pb');
const { RegistrationServiceClient } = require('../../bosdyn/api/gps/registration_service_grpc_pb');

const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * Client for the GPS Registration service.
 * @extends {BaseClient<RegistrationServiceClient>}
 */
class RegistrationClient extends BaseClient {
  static defaultServiceName = 'gps-registration';
  static serviceType = 'bosdyn.api.gps.RegistrationService';

  constructor() {
    super(RegistrationServiceClient);
  }

  /**
   * Get location
   * @param {Object} [args] Options to provide for gRPC request.
   * @returns {Promise<registrationPb.GetLocationResponse>}
   */
  getLocation(args) {
    const req = new registrationPb.GetLocationRequest();
    return this.call(this._stub.getLocation, req, null, _getLocationError, args);
  }

  /**
   * Reset GPS registration
   * @param {Object} [args] Options to provide for gRPC request.
   * @returns {Promise<registrationPb.ResetRegistrationResponse>}
   */
  resetRegistration(args) {
    const req = new registrationPb.ResetRegistrationRequest();
    return this.call(this._stub.resetRegistration, req, null, _getLocationError, args);
  }
}

const _getLocationError = handleCommonHeaderErrors(() => null);

module.exports = {
  RegistrationClient,
};
