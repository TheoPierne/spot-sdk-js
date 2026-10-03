/**
 * @file Client for the SpotCheck service: the calibration checks of the robot and the calibration of its cameras.
 */

'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const {
  BaseClient,
  errorFactory,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
  handleLeaseUseResultErrors,
} = require('./common');
const { ResponseError, LeaseUseError } = require('./exceptions');
const { DefaultDict } = require('./util');

const spotCheckPb = require('../bosdyn/api/spot/spot_check_pb');
const { SpotCheckServiceClient } = require('../bosdyn/api/spot/spot_check_service_grpc_pb');

/**
 * @typedef {import('./lease').Lease} Lease
 */

/** General class of errors for SpotCheck service. */
class SpotCheckError extends ResponseError {}
/** General class of errors for spot check routines. */
class SpotCheckResponseError extends SpotCheckError {}
/** Power error occurred while running spot check. */
class SpotCheckUnexpectedPowerChangeError extends SpotCheckResponseError {}
/** IMU reports robot is not on flat ground. */
class SpotCheckImuCheckError extends SpotCheckResponseError {}
/** Robot not started in sitting configuration. */
class SpotCheckNotSittingError extends SpotCheckResponseError {}
/** Internal time out during spot check loadcell cal. */
class SpotCheckLoadcellTimeoutError extends SpotCheckResponseError {}
/** Power on error occurred while running spot check. */
class SpotCheckPowerOnFailure extends SpotCheckResponseError {}
/** Internal time out during spot check endstop cal. */
class SpotCheckEndstopTimeoutError extends SpotCheckResponseError {}
/** Robot failed to stand during spotcheck. */
class SpotCheckStandFailureError extends SpotCheckResponseError {}
/** Internal time out during spot check camera check. */
class SpotCheckCameraTimeoutError extends SpotCheckResponseError {}
/** Robot failed flat ground check. */
class SpotCheckGroundCheckError extends SpotCheckResponseError {}
/**
 * Timed out waiting for SUCCESS response from spot check.
 */
class SpotCheckTimedOutError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

/** Timed out waiting for SUCCESS response from camera spot check (not used, like in Python). */
class CameraSpotCheckTimedOutError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

/** General class of errors for camera spot check feedback (not used, like in Python). */
class CameraSpotCheckFeedbackError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

/** General class of errors for camera calibration routines. */
class CameraCalibrationResponseError extends SpotCheckError {}
/** API client canceled calibration. */
class CameraCalibrationUserCanceledError extends CameraCalibrationResponseError {}
/** The robot is not powered on. */
class CameraCalibrationPowerError extends CameraCalibrationResponseError {}
/** Invalid starting configuration of robot. */
class CameraCalibrationTargetNotCenteredError extends CameraCalibrationResponseError {}
/** Robot command error occurred while running calibration. */
class CameraCalibrationRobotCommandError extends CameraCalibrationResponseError {}
/** Calibration algorithm failure occurred. */
class CameraCalibrationCalibrationError extends CameraCalibrationResponseError {}
/** Internal error occurred. */
class CameraCalibrationInternalError extends CameraCalibrationResponseError {}
/**
 * Timed out waiting for SUCCESS response from calibration.
 */
class CameraCalibrationTimedOutError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

/**
 * A client for verifying robot health and running calibration routines.
 * @extends {BaseClient<SpotCheckServiceClient>}
 */
class SpotCheckClient extends BaseClient {
  static defaultServiceName = 'spot-check';
  static serviceType = 'bosdyn.api.spot.SpotCheckService';

  constructor() {
    super(SpotCheckServiceClient);
  }

  /**
   * Issue a spot check command to the robot.
   * @param {spotCheckPb.SpotCheckCommandRequest} request The spot check command request
   * @param {Object} [args] Options to pass to the GRPC request
   * @returns {Promise<spotCheckPb.SpotCheckCommandResponse>}
   */
  spotCheckCommand(request, args) {
    return this.call(this._stub.spotCheckCommand, request, null, _spotcheckCommandErrorFromResponse, true, args);
  }

  /**
   * Check the current status of spot check.
   * @param {spotCheckPb.SpotCheckFeedbackRequest} request The spot check feedback request
   * @param {Object} [args] Options to pass to the GRPC request
   * @returns {Promise<spotCheckPb.SpotCheckFeedbackResponse>}
   */
  spotCheckFeedback(request, args) {
    return this.call(this._stub.spotCheckFeedback, request, null, _spotcheckFeedbackErrorFromResponse, true, args);
  }

  /**
   * Issue a camera calibration command to the robot.
   * @param {spotCheckPb.CameraCalibrationCommandRequest} request The camera calibration command request
   * @param {Object} [args] Options to pass to the GRPC request
   * @returns {Promise<spotCheckPb.CameraCalibrationCommandResponse>}
   */
  cameraCalibrationCommand(request, args) {
    return this.call(
      this._stub.cameraCalibrationCommand,
      request,
      null,
      _calibrationCommandErrorFromResponse,
      true,
      args,
    );
  }

  /**
   * Check the current status of camera calibration.
   * @param {spotCheckPb.CameraCalibrationFeedbackRequest} request The camera calibration feedback request
   * @param {Object} [args] Options to pass to the GRPC request
   * @returns {Promise<spotCheckPb.CameraCalibrationFeedbackResponse>}
   */
  cameraCalibrationFeedback(request, args) {
    return this.call(
      this._stub.cameraCalibrationFeedback,
      request,
      null,
      _calibrationFeedbackErrorFromResponse,
      true,
      args,
    );
  }
}

/**
 * Run full spot check routine. The robot should be sitting on flat ground when this routine is
 * started. This routine calibrates robot joints and checks camera health.
 * @param {SpotCheckClient} spotCheckClient client for calling calibration service.
 * @param {Lease} lease A active lease. Spot check can be overridden at any time with another command.
 * @param {Object} options A set of options.
 * @param {number} [options.timeoutMSec] Max time this function will block for.
 * @param {number} [options.updateFrequency] How often this function will query feedback.
 * @param {boolean} [options.verbose] Periodically print status.
 * @returns {Promise<spotCheckPb.SpotCheckFeedbackResponse>}
 */
async function runSpotCheck(
  spotCheckClient,
  lease,
  { timeoutMSec = 212_000, updateFrequency = 0.25, verbose = false } = {},
) {
  const startTime = Date.now();
  const endTime = startTime + timeoutMSec;
  // Milliseconds (1 / updateFrequency is in seconds: the robot was polled every 4 ms).
  const updateTimeMs = 1_000 / updateFrequency;

  const req = new spotCheckPb.SpotCheckCommandRequest()
    .setLease(lease.leaseProto)
    .setCommand(spotCheckPb.SpotCheckCommandRequest.Command.COMMAND_START);
  await spotCheckClient.spotCheckCommand(req);
  const feedbackReq = new spotCheckPb.SpotCheckFeedbackRequest();

  while (Date.now() < endTime) {
    await sleep(updateTimeMs);
    const res = await spotCheckClient.spotCheckFeedback(feedbackReq);
    if (
      res.getState() === spotCheckPb.SpotCheckFeedbackResponse.State.STATE_WAITING_FOR_COMMAND ||
      res.getState() === spotCheckPb.SpotCheckFeedbackResponse.State.STATE_FINISHED
    ) {
      if (verbose) spotCheckClient.logger.info('[SPOT CHECK] Spot check routine complete!');
      return res;
    }
    if (verbose) {
      spotCheckClient.logger.info(`[SPOT CHECK] Spot check ${(res.getProgress() * 100).toFixed(2)}% complete!`);
    }
  }

  throw new SpotCheckTimedOutError();
}

/**
 * Run full camera calibration routine for robot. This function blocks until calibration has
 * completed. This function should be called once the robot is powered on and standing in the
 * configuration described in user documentation.
 * @param {SpotCheckClient} spotCheckclient client for calling calibration service.
 * @param {Lease} lease A active lease, used by calibration routine to issue robot commands. Lease
 * keep alive internally managed by service. Revoke lease to end routine
 * at any time.
 * @param {Object} options A set of options.
 * @param {number} [options.timeoutMSec] Max time this function will block for.
 * @param {number} [options.updateFrequency] How often this function will query feedback.
 * @param {boolean} [options.verbose] Periodically print status.
 * @returns {Promise<void>}
 */
async function runCameraCalibration(
  spotCheckclient,
  lease,
  { timeoutMSec = 1_200_000, updateFrequency = 0.25, verbose = false } = {},
) {
  const startTime = Date.now();
  const endTime = startTime + timeoutMSec;
  const updateTimeMs = 1_000 / updateFrequency;

  const req = new spotCheckPb.CameraCalibrationCommandRequest()
    .setCommand(spotCheckPb.CameraCalibrationCommandRequest.Command.COMMAND_START)
    .setLease(lease.leaseProto);
  await spotCheckclient.cameraCalibrationCommand(req);
  const feedbackReq = new spotCheckPb.CameraCalibrationFeedbackRequest();

  while (Date.now() < endTime) {
    await sleep(updateTimeMs);
    const res = await spotCheckclient.cameraCalibrationFeedback(feedbackReq);
    if (res.getStatus() === spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_SUCCESS) {
      if (verbose) spotCheckclient.logger.info('[SPOT CHECK] Camera calibration success!');
      return;
    }
    // The enum is under .Status (the progress was never printed).
    if (res.getStatus() === spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_PROCESSING) {
      if (verbose) {
        spotCheckclient.logger.info(
          `[SPOT CHECK] Camera calibration ${(res.getProgress() * 100).toFixed(2)}% complete!`,
        );
      }
    }
  }

  throw new CameraCalibrationTimedOutError();
}

const _SC_ERROR_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_NONE, [null, null]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_UNEXPECTED_POWER_CHANGE, [
  SpotCheckUnexpectedPowerChangeError,
  'Power error occurred while running spot check.',
]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_INIT_IMU_CHECK, [
  SpotCheckImuCheckError,
  'IMU reports robot is not on flat round.',
]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_INIT_NOT_SITTING, [
  SpotCheckNotSittingError,
  'Robot not started in sitting configuration.',
]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_LOADCELL_TIMEOUT, [
  SpotCheckLoadcellTimeoutError,
  'Internal time out during spot check loadcell cal.',
]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_POWER_ON_FAILURE, [
  SpotCheckPowerOnFailure,
  'Power on error occurred while running spot check.',
]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_ENDSTOP_TIMEOUT, [
  SpotCheckEndstopTimeoutError,
  'Internal time out during spot check endstop cal.',
]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_FAILED_STAND, [
  SpotCheckStandFailureError,
  'Robot failed to stand during spotcheck.',
]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_CAMERA_TIMEOUT, [
  SpotCheckCameraTimeoutError,
  'Internal time out during spot check camera check.',
]);
_SC_ERROR_TO_ERROR.set(spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_GROUND_CHECK, [
  SpotCheckGroundCheckError,
  'Robot failed flat ground check.',
]);

const _CAL_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_CAL_STATUS_TO_ERROR.set(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_SUCCESS, [null, null]);
_CAL_STATUS_TO_ERROR.set(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_PROCESSING, [null, null]);
_CAL_STATUS_TO_ERROR.set(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_USER_CANCELED, [
  CameraCalibrationUserCanceledError,
  'API client canceled calibration.',
]);
_CAL_STATUS_TO_ERROR.set(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_POWER_ERROR, [
  CameraCalibrationPowerError,
  'The robot is not powered on.',
]);
_CAL_STATUS_TO_ERROR.set(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_TARGET_NOT_CENTERED, [
  CameraCalibrationTargetNotCenteredError,
  'Invalid starting configuration of robot.',
]);
_CAL_STATUS_TO_ERROR.set(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_ROBOT_COMMAND_ERROR, [
  CameraCalibrationRobotCommandError,
  'Robot command error occurred while running calibration.',
]);
_CAL_STATUS_TO_ERROR.set(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_CALIBRATION_ERROR, [
  CameraCalibrationCalibrationError,
  'Calibration algorithm failure occurred.',
]);
_CAL_STATUS_TO_ERROR.set(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_INTERNAL_ERROR, [
  CameraCalibrationInternalError,
  'Internal error occurred.',
]);

const _spotcheckCommandErrorFromResponse = handleCommonHeaderErrors(handleLeaseUseResultErrors(() => null));

const _spotcheckFeedbackErrorFromResponse = handleCommonHeaderErrors(response => _spotCheckErrorFromResponse(response));

const _spotCheckErrorFromResponse = handleUnsetStatusError(
  'STATE_UNKNOWN',
  'state',
  spotCheckPb.SpotCheckFeedbackResponse.State,
)(response =>
  errorFactory(response, response.getError(), spotCheckPb.SpotCheckFeedbackResponse.Error, _SC_ERROR_TO_ERROR),
);

const _calibrationCommandErrorFromResponse = handleCommonHeaderErrors(handleLeaseUseResultErrors(() => null));

const _calibrationFeedbackErrorFromResponse = handleCommonHeaderErrors(response => {
  if (response.getStatus() === spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_LEASE_ERROR) {
    return new LeaseUseError(response, null);
  }
  return _calStatusErrorFromResponse(response);
});

const _calStatusErrorFromResponse = handleUnsetStatusError(
  'STATUS_UNKNOWN',
  'status',
  spotCheckPb.CameraCalibrationFeedbackResponse.Status,
)(response =>
  errorFactory(
    response,
    response.getStatus(),
    spotCheckPb.CameraCalibrationFeedbackResponse.Status,
    _CAL_STATUS_TO_ERROR,
  ),
);

module.exports = {
  SpotCheckError,
  SpotCheckResponseError,
  SpotCheckUnexpectedPowerChangeError,
  SpotCheckImuCheckError,
  SpotCheckNotSittingError,
  SpotCheckLoadcellTimeoutError,
  SpotCheckPowerOnFailure,
  SpotCheckEndstopTimeoutError,
  SpotCheckStandFailureError,
  SpotCheckCameraTimeoutError,
  SpotCheckGroundCheckError,
  SpotCheckTimedOutError,
  CameraSpotCheckTimedOutError,
  CameraSpotCheckFeedbackError,
  CameraCalibrationResponseError,
  CameraCalibrationUserCanceledError,
  CameraCalibrationPowerError,
  CameraCalibrationTargetNotCenteredError,
  CameraCalibrationRobotCommandError,
  CameraCalibrationCalibrationError,
  CameraCalibrationInternalError,
  CameraCalibrationTimedOutError,
  SpotCheckClient,
  runSpotCheck,
  runCameraCalibration,
  _spotcheckFeedbackErrorFromResponse,
  _calibrationFeedbackErrorFromResponse,
};
