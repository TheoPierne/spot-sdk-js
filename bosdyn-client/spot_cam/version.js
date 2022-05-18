'use strict';

const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const version_pb = require('../../bosdyn/api/spot_cam/version_pb');
const { BaseClient } = require('../common');

class VersionClient extends BaseClient {
  static default_service_name = 'spot-cam-version';
  static service_type = 'bosdyn.api.spot_cam.VersionService';

  constructor() {
    super(service_grpc_pb.VersionServiceClient);
  }

  get_software_version(args) {
    const request = new version_pb.GetSoftwareVersionRequest();
    return this.call(
      this._stub.getSoftwareVersion,
      request,
      this._get_software_version_from_response,
      this._version_error_from_response,
      args,
    );
  }

  get_software_version_async(args) {
    const request = new version_pb.GetSoftwareVersionRequest();
    return this.call_async(
      this._stub.getSoftwareVersion,
      request,
      this._get_software_version_from_response,
      this._version_error_from_response,
      args,
    );
  }

  get_software_version_full(args) {
    const request = new version_pb.GetSoftwareVersionRequest();
    return this.call(this._stub.getSoftwareVersion, request, null, this._version_error_from_response, args);
  }

  get_software_version_full_async(args) {
    const request = new version_pb.GetSoftwareVersionRequest();
    return this.call_async(this._stub.getSoftwareVersion, request, null, this._version_error_from_response, args);
  }

  _get_software_version_from_response(response) {
    return response.getVersion();
  }

  /* eslint-disable no-unused-vars */
  _version_error_from_response(response) {
    return null;
  }
  /* eslint-enable no-unused-vars */
}

module.exports = {
  VersionClient,
};
