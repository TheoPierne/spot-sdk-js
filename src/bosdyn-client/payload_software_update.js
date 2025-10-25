'use strict';

const { BaseClient } = require('./common');

const { PayloadSoftwareUpdateServiceClient } = require('../bosdyn/api/payload_software_update_service_grpc_pb');
const {
  GetAvailableSoftwareUpdatesRequest,
  GetAvailableSoftwareUpdatesResponse,
  SendCurrentVersionInfoResponse
} = require('../bosdyn/api/payload_software_update_pb');
const { SoftwareUpdateStatus, SoftwarePackageVersion } = require('../bosdyn/api/software_package_pb');
const { SoftwareVersion } = require('../bosdyn/api/robot_id_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

/**
 * A client registering payload configs onto the robot.
 * @extends {BaseClient<PayloadSoftwareUpdateServiceClient>}
 */
class PayloadSoftwareUpdate extends BaseClient {
  static defaultServiceName = 'payload-software-update';
  static serviceType = 'bosdyn.api.PayloadSoftwareUpdateService';
  
  constructor() {
    super(PayloadSoftwareUpdateServiceClient);
  }
  
  /**
   * Send version information about the currently installed payload software to Spot.
   * @param {string} packageName Name of the package
   * @param {*} version Current semantic version of the installed software.
   * @param {*} releaseDate Release date of the currently installed software.
   * @param {*} buildId Unique identifier of the build.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<SendCurrentVersionInfoResponse>}
   */
  sendCurrentSoftwareInfo(packageName, version, releaseDate, buildId, args) {
    const req = PayloadSoftwareUpdate.makeInfoRequest(packageName, version, releaseDate, buildId);
    return this.call(this._stub.sendCurrentVersionInfo, req, null, null, false, args);
  }
  
  /**
   * Get a list of package information for the named package(s).
   * @param {string|string[]} packagesNames The package name or array of package names to query.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<GetAvailableSoftwareUpdatesResponse>}
   */
  getAvailableUpdates(packagesNames, args) {
    if (!Array.isArray(packagesNames)) {
      packagesNames = [packagesNames];
    }
    
    const req = new GetAvailableSoftwareUpdatesRequest().setPackageNamesList(packagesNames);
    return this.call(this._stub.getAvailableSoftwareUpdates, req, null, null, false, args);
  }
  
  /**
   * Send a status update of a payload software installation operation to Spot.
   * @param {string} packageName Name of the package being updated 
   * @param {*} status Status code of installation operation
   * @param {*} errorCode Error code of the installation operation, or ERROR_NONE if no error has been encountered.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   */
  sendInstallationStatus(packageName, status, errorCode, args) {
    const req = new SoftwareUpdateStatus()
      .setPackageName(packageName)
      .setStatus(status)
      .setErrorCode(errorCode);
      
    return this.call(this._stub.sendSoftwareUpdateStatus, req, null, null, false, args);
  }
  
  static makeInfoRequest(packageName, version, releaseDate, timestamp, buildId) {
    if (!(version instanceof SoftwareVersion)) {
      version = new SoftwareVersion().setMajorVersion(version[0]).setMinorVersion(version[1]).setPatchLevel(version[2]);
    }
    
    if (!isNaN(releaseDate)) {
      releaseDate = new Date(releaseDate);
    }
    if (releaseDate instanceof Date) {
      releaseDate = Timestamp.fromDate(releaseDate);
    }
    
    return new SoftwarePackageVersion()
      .setPackageName(packageName)
      .setVersion(version)
      .setReleaseDate(releaseDate)
      .setBuildId(buildId);
  }
}

module.exports = {
  PayloadSoftwareUpdate,
};
