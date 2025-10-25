'use strict';

const { VersionServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const versionPb = require('../../bosdyn/api/spot_cam/version_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * A client calling Spot CAM Version service.
 * @extends {BaseClient<VersionServiceClient>}
 */
class VersionClient extends BaseClient {
  static defaultServiceName = 'spot-cam-version';
  static serviceType = 'bosdyn.api.spot_cam.VersionService';

  constructor() {
    super(VersionServiceClient);
  }

  /**
   * Retrieves the Spot CAM's current software version.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<robotIdPb.SoftwareVersion>}
   */
  getSoftwareVersion(args) {
    const request = new versionPb.GetSoftwareVersionRequest();
    return this.call(
      this._stub.getSoftwareVersion,
      request,
      this._getSoftwareVersionFromResponse,
      _versionErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Retrieves the Spot CAM's full version information.
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<versionPb.GetSoftwareVersionResponse>}
   */
  getSoftwareVersionFull(args) {
    const request = new versionPb.GetSoftwareVersionRequest();
    return this.call(this._stub.getSoftwareVersion, request, null, _versionErrorFromResponse, false, args);
  }

  _getSoftwareVersionFromResponse(response) {
    return response.getVersion();
  }
}

const _versionErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  VersionClient,
};
