/**
 * @file Payload software update service gRPC client.
 *
 * This is used by Spot payloads to coordinate updates of their own software with Spot.
 */

'use strict';

const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { BaseClient } = require('./common');

const {
  GetAvailableSoftwareUpdatesRequest,
  GetAvailableSoftwareUpdatesResponse,
  SendCurrentVersionInfoRequest,
  SendCurrentVersionInfoResponse,
  SendSoftwareUpdateStatusRequest,
} = require('../bosdyn/api/payload_software_update_pb');
const { PayloadSoftwareUpdateServiceClient } = require('../bosdyn/api/payload_software_update_service_grpc_pb');
const { SoftwareVersion } = require('../bosdyn/api/robot_id_pb');
const { SoftwareUpdateStatus, SoftwarePackageVersion } = require('../bosdyn/api/software_package_pb');
const { secondsToTimestamp } = require('../bosdyn-core/util');

/**
 * A client for payloads to coordinate software updates with a robot.
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
   * @param {string} packageName Name of the package, e.g., "coreio".
   * @param {SoftwareVersion|number[]} version Current semantic version of the installed software.
   * @param {number|Date|Timestamp} releaseDate Release date of the currently installed software.
   * @param {string} buildId Unique identifier of the build.
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
   * @returns {Promise<import('../bosdyn/api/payload_software_update_pb').SendSoftwareUpdateStatusResponse>}
   */
  sendInstallationStatus(packageName, status, errorCode, args) {
    const updateStatus = new SoftwareUpdateStatus()
      .setPackageName(packageName)
      .setStatus(status)
      .setErrorCode(errorCode);
    const req = new SendSoftwareUpdateStatusRequest().setUpdateStatus(updateStatus);

    return this.call(this._stub.sendSoftwareUpdateStatus, req, null, null, false, args);
  }

  /**
   * Make a SendCurrentVersionInfoRequest message using the supplied information.
   * @param {string} packageName Name of the package, e.g., "coreio".
   * @param {SoftwareVersion|number[]} version Current semantic version of the installed software: a
   * SoftwareVersion, or [major, minor, patch].
   * @param {number|Date|Timestamp} releaseDate Release date of the currently installed software: a number of
   * seconds since the epoch (like the Python float), a Date or a Timestamp.
   * @param {string} buildId Unique identifier of the build.
   * @returns {SendCurrentVersionInfoRequest} Message communicating to Spot the version information of the
   * currently installed payload software.
   */
  static makeInfoRequest(packageName, version, releaseDate, buildId) {
    if (!(version instanceof SoftwareVersion)) {
      version = new SoftwareVersion().setMajorVersion(version[0]).setMinorVersion(version[1]).setPatchLevel(version[2]);
    }

    if (typeof releaseDate === 'number') {
      releaseDate = secondsToTimestamp(releaseDate);
    } else if (releaseDate instanceof Date) {
      releaseDate = Timestamp.fromDate(releaseDate);
    }

    const packageVersion = new SoftwarePackageVersion()
      .setPackageName(packageName)
      .setVersion(version)
      .setReleaseDate(releaseDate)
      .setBuildId(buildId);
    return new SendCurrentVersionInfoRequest().setPackageVersion(packageVersion);
  }
}

module.exports = {
  PayloadSoftwareUpdate,
  // Name of the Python client.
  PayloadSoftwareUpdateClient: PayloadSoftwareUpdate,
};
