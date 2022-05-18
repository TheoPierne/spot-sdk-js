'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const { BaseClient, error_factory } = require('./common');
const { ResponseError, LeaseUseError } = require('./exceptions');
const spot_check_pb = require('../bosdyn/api/spot/spot_check_pb');
const spot_check_service_grpc_pb = require('../bosdyn/api/spot/spot_check_service_grpc_pb');

class SpotCheckError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckError';
  }
}

class SpotCheckResponseError extends SpotCheckError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckResponseError';
  }
}

class SpotCheckUnexpectedPowerChangeError extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckUnexpectedPowerChangeError';
  }
}

class SpotCheckImuCheckError extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckImuCheckError';
  }
}

class SpotCheckNotSittingError extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckNotSittingError';
  }
}

class SpotCheckLoadcellTimeoutError extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckLoadcellTimeoutError';
  }
}

class SpotCheckPowerOnFailure extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckPowerOnFailure';
  }
}

class SpotCheckEndstopTimeoutError extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckEndstopTimeoutError';
  }
}

class SpotCheckStandFailureError extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckStandFailureError';
  }
}

class SpotCheckCameraTimeoutError extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckCameraTimeoutError';
  }
}

class SpotCheckGroundCheckError extends SpotCheckResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckGroundCheckError';
  }
}

class SpotCheckTimedOutError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'SpotCheckTimedOutError';
  }
}

class CameraCalibrationResponseError extends SpotCheckError {
  constructor(msg) {
    super(msg);
    this.name = 'CameraCalibrationResponseError';
  }
}

class CameraCalibrationUserCanceledError extends CameraCalibrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CameraCalibrationUserCanceledError';
  }
}

class CameraCalibrationPowerError extends CameraCalibrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CameraCalibrationPowerError';
  }
}

class CameraCalibrationTargetNotCenteredError extends CameraCalibrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CameraCalibrationTargetNotCenteredError';
  }
}

class CameraCalibrationRobotCommandError extends CameraCalibrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CameraCalibrationRobotCommandError';
  }
}

class CameraCalibrationCalibrationError extends CameraCalibrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CameraCalibrationCalibrationError';
  }
}

class CameraCalibrationInternalError extends CameraCalibrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CameraCalibrationInternalError';
  }
}

class CameraCalibrationTimedOutError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'CameraCalibrationTimedOutError';
  }
}

class SpotCheckClient extends BaseClient {
  static default_service_name = 'spot-check';
  static service_type = 'bosdyn.api.spot.SpotCheckService';

  constructor() {
    super(spot_check_service_grpc_pb.SpotCheckServiceClient);
  }

  spot_check_command(request, args) {
    return this.call(this._stub.spotCheckCommand, request, null, _spotcheck_command_error_from_response, args);
  }

  spot_check_feedback(request, args) {
    return this.call(this._stub.spotCheckFeedback, request, null, _spotcheck_feedback_error_from_response, args);
  }

  camera_calibration_command(request, args) {
    return this.call(
      this._stub.cameraCalibrationCommand,
      request,
      null,
      _calibration_command_error_from_response,
      args,
    );
  }

  camera_calibration_feedback(request, args) {
    return this.call(
      this._stub.cameraCalibrationFeedback,
      request,
      null,
      _calibration_feedback_error_from_response,
      args,
    );
  }
}

async function run_spot_check(
  spot_check_client,
  lease,
  timeout_sec = 120_000,
  update_frequency = 0.25,
  verbose = false,
) {
  const start_time = Date.now();
  const end_time = start_time + timeout_sec;
  const update_time = 1.0 / update_frequency;

  const req = new spot_check_pb.SpotCheckCommandRequest()
    .setLease(lease.lease_proto)
    .setCommand(spot_check_pb.SpotCheckCommandRequest.Command.COMMAND_START);
  spot_check_client.spot_check_command(req);
  const feedback_req = new spot_check_pb.SpotCheckFeedbackRequest();

  /* eslint-disable no-await-in-loop */
  while (Date.now() < end_time) {
    await sleep(update_time);
    const res = await spot_check_client.spot_check_feedback(feedback_req);
    if (
      res.getstate() === spot_check_pb.SpotCheckFeedbackResponse.State.STATE_WAITING_FOR_COMMAND ||
      res.getState() === spot_check_pb.SpotCheckFeedbackResponse.State.STATE_FINISHED
    ) {
      if (verbose) spot_check_client.logger.info('[SPOT CHECK] Spot check routine complete!');
      return res;
    }
    if (verbose) {
      spot_check_client.logger.info(`[SPOT CHECK] Spot check ${Math.floor(res.getProgress() * 100)}% complete !`);
    }
  }
  /* eslint-enable no-await-in-loop */
  throw new SpotCheckTimedOutError();
}

async function run_camera_calibration(
  spot_check_client,
  lease,
  timeout_sec = 1200_000,
  update_frequency = 0.25,
  verbose = false,
) {
  const start_time = Date.now();
  const end_time = start_time + timeout_sec;
  const update_time = 1.0 / update_frequency;

  const req = new spot_check_pb.CameraCalibrationCommandRequest()
    .setCommand(spot_check_pb.CameraCalibrationCommandRequest.Command.COMMAND_START)
    .setLease(lease.lease_proto);
  spot_check_client.camera_calibration_command(req);
  const feedback_req = new spot_check_pb.CameraCalibrationFeedbackRequest();

  /* eslint-disable no-await-in-loop */
  while (Date.now() < end_time) {
    await sleep(update_time);
    const res = await spot_check_client.camera_calibration_feedback(feedback_req);
    if (res.getStatus() === spot_check_pb.CameraCalibrationFeedbackResponse.Status.STATUS_SUCCESS) {
      if (verbose) spot_check_client.logger.info('[SPOT CHECK] Camera calibration success!');
      return;
    }
    if (res.getStatus() === spot_check_pb.CameraCalibrationFeedbackResponse.STATUS_PROCESSING) {
      if (verbose) {
        spot_check_client.logger.info(
          `[SPOT CHECK] Camera calibration ${Math.floor(res.getProgress() * 100)}% complete!`,
        );
      }
    }
  }
  /* eslint-enable no-await-in-loop */
  throw new CameraCalibrationTimedOutError();
}

const _SC_ERROR_TO_ERROR = {
  ERROR_NONE: [null, null],
  ERROR_UNEXPECTED_POWER_CHANGE: [
    SpotCheckUnexpectedPowerChangeError,
    'Power error occurred while running spot check.',
  ],
  ERROR_INIT_IMU_CHECK: [SpotCheckImuCheckError, 'IMU reports robot is not on flat round.'],
  ERROR_INIT_NOT_SITTING: [SpotCheckNotSittingError, 'Robot not started in sitting configuration.'],
  ERROR_LOADCELL_TIMEOUT: [SpotCheckLoadcellTimeoutError, 'Internal time out during spot check loadcell cal.'],
  ERROR_POWER_ON_FAILURE: [SpotCheckPowerOnFailure, 'Power on error occurred while running spot check.'],
  ERROR_ENDSTOP_TIMEOUT: [SpotCheckEndstopTimeoutError, 'Internal time out during spot check endstop cal.'],
  ERROR_FAILED_STAND: [SpotCheckStandFailureError, 'Robot failed to stand during spotcheck.'],
  ERROR_CAMERA_TIMEOUT: [SpotCheckCameraTimeoutError, 'Internal time out during spot check camera check.'],
  ERROR_GROUND_CHECK: [SpotCheckGroundCheckError, 'Robot failed flat ground check.'],
};

const _CAL_STATUS_TO_ERROR = {
  STATUS_SUCCESS: [null, null],
  STATUS_PROCESSING: [null, null],
  STATUS_USER_CANCELED: [CameraCalibrationUserCanceledError, 'API client canceled calibration.'],
  STATUS_POWER_ERROR: [CameraCalibrationPowerError, 'The robot is not powered on.'],
  STATUS_TARGET_NOT_CENTERED: [CameraCalibrationTargetNotCenteredError, 'Invalid starting configuration of robot.'],
  STATUS_ROBOT_COMMAND_ERROR: [
    CameraCalibrationRobotCommandError,
    'Robot command error occurred while running calibration.',
  ],
  STATUS_CALIBRATION_ERROR: [CameraCalibrationCalibrationError, 'Calibration algorithm failure occurred.'],
  STATUS_INTERNAL_ERROR: [CameraCalibrationInternalError, 'Internal error occurred.'],
};

/* eslint-disable no-unused-vars */
function _spotcheck_command_error_from_response(response) {
  return null;
}

function _spotcheck_feedback_error_from_response(response) {
  return _spot_check_error_from_response(response);
}

function _spot_check_error_from_response(response) {
  return error_factory(
    response,
    response.getError(),
    Object.keys(spot_check_pb.SpotCheckFeedbackResponse.Error),
    _SC_ERROR_TO_ERROR,
  );
}

function _calibration_command_error_from_response(response) {
  return null;
}
/* eslint-enable no-unused-vars */

function _calibration_feedback_error_from_response(response) {
  if (response.getStatus() === spot_check_pb.CameraCalibrationFeedbackResponse.Status.STATUS_LEASE_ERROR) {
    return new LeaseUseError(response);
  }
  return _cal_status_error_from_response(response);
}

function _cal_status_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(spot_check_pb.CameraCalibrationFeedbackResponse.Status),
    _CAL_STATUS_TO_ERROR,
  );
}

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
  CameraCalibrationResponseError,
  CameraCalibrationUserCanceledError,
  CameraCalibrationPowerError,
  CameraCalibrationTargetNotCenteredError,
  CameraCalibrationRobotCommandError,
  CameraCalibrationCalibrationError,
  CameraCalibrationInternalError,
  CameraCalibrationTimedOutError,
  SpotCheckClient,
  run_spot_check,
  run_camera_calibration,
};
