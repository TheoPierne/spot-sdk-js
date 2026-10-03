'use strict';

const assert = require('node:assert');
const test = require('node:test');

const headerPb = require('../src/bosdyn/api/header_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const spotCheckPb = require('../src/bosdyn/api/spot/spot_check_pb');

const { LeaseUseError } = require('../src/bosdyn-client/exceptions');
const {
  _spotcheckFeedbackErrorFromResponse,
  _calibrationFeedbackErrorFromResponse,
  runSpotCheck,
  runCameraCalibration,
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
  CameraCalibrationUserCanceledError,
  CameraCalibrationPowerError,
  CameraCalibrationTargetNotCenteredError,
  CameraCalibrationRobotCommandError,
  CameraCalibrationCalibrationError,
  CameraCalibrationInternalError,
  CameraCalibrationTimedOutError,
} = require('../src/bosdyn-client/spot_check');

class MockLease {
  constructor() {
    this.leaseProto = new leasePb.Lease();
  }
}

class MockSpotCheckClient {
  constructor(state, error) {
    this.response = new spotCheckPb.SpotCheckFeedbackResponse().setState(state).setError(error);
    this.response.setHeader(
      new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK)),
    );
  }

  spotCheckCommand() {
    return Promise.resolve(null);
  }

  spotCheckFeedback() {
    const error = _spotcheckFeedbackErrorFromResponse(this.response);
    if (error) {
      throw error;
    }
    return Promise.resolve(this.response);
  }
}

class MockCamCalClient {
  constructor(status) {
    this.response = new spotCheckPb.CameraCalibrationFeedbackResponse().setStatus(status);
    this.response.setHeader(
      new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK)),
    );
  }

  cameraCalibrationCommand() {
    return Promise.resolve(null);
  }

  cameraCalibrationFeedback() {
    const error = _calibrationFeedbackErrorFromResponse(this.response);
    if (error) {
      throw error;
    }
    return Promise.resolve(this.response);
  }
}

test('test_run_spotcheck', async () => {
  const lease = new MockLease();

  // Test success
  await runSpotCheck(
    new MockSpotCheckClient(
      spotCheckPb.SpotCheckFeedbackResponse.State.STATE_FINISHED,
      spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_NONE,
    ),
    lease,
    { updateFrequency: 100 },
  );

  // Test exceptions
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_UNEXPECTED_POWER_CHANGE,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckUnexpectedPowerChangeError,
  );
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_INIT_IMU_CHECK,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckImuCheckError,
  );
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_INIT_NOT_SITTING,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckNotSittingError,
  );
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_LOADCELL_TIMEOUT,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckLoadcellTimeoutError,
  );
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_POWER_ON_FAILURE,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckPowerOnFailure,
  );
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_ENDSTOP_TIMEOUT,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckEndstopTimeoutError,
  );
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_FAILED_STAND,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckStandFailureError,
  );
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_CAMERA_TIMEOUT,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckCameraTimeoutError,
  );
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_ERROR,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_GROUND_CHECK,
        ),
        lease,
        { updateFrequency: 100 },
      ),
    SpotCheckGroundCheckError,
  );

  // Test timeout
  await assert.rejects(
    () =>
      runSpotCheck(
        new MockSpotCheckClient(
          spotCheckPb.SpotCheckFeedbackResponse.State.STATE_CAMERA_CHECK,
          spotCheckPb.SpotCheckFeedbackResponse.Error.ERROR_NONE,
        ),
        lease,
        { updateFrequency: 100, timeoutMSec: 1000 },
      ),
    SpotCheckTimedOutError,
  );
});

test('test_run_calibration', async () => {
  const lease = new MockLease();

  // Test success
  await runCameraCalibration(
    new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_SUCCESS),
    lease,
    { updateFrequency: 100 },
  );

  // Test exceptions
  await assert.rejects(
    () =>
      runCameraCalibration(
        new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_USER_CANCELED),
        lease,
        { updateFrequency: 100 },
      ),
    CameraCalibrationUserCanceledError,
  );
  await assert.rejects(
    () =>
      runCameraCalibration(
        new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_POWER_ERROR),
        lease,
        { updateFrequency: 100 },
      ),
    CameraCalibrationPowerError,
  );
  await assert.rejects(
    () =>
      runCameraCalibration(
        new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_LEASE_ERROR),
        lease,
        { updateFrequency: 100 },
      ),
    LeaseUseError,
  );
  await assert.rejects(
    () =>
      runCameraCalibration(
        new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_TARGET_NOT_CENTERED),
        lease,
        { updateFrequency: 100 },
      ),
    CameraCalibrationTargetNotCenteredError,
  );
  await assert.rejects(
    () =>
      runCameraCalibration(
        new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_ROBOT_COMMAND_ERROR),
        lease,
        { updateFrequency: 100 },
      ),
    CameraCalibrationRobotCommandError,
  );
  await assert.rejects(
    () =>
      runCameraCalibration(
        new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_CALIBRATION_ERROR),
        lease,
        { updateFrequency: 100 },
      ),
    CameraCalibrationCalibrationError,
  );
  await assert.rejects(
    () =>
      runCameraCalibration(
        new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_INTERNAL_ERROR),
        lease,
        { updateFrequency: 100 },
      ),
    CameraCalibrationInternalError,
  );

  // Test timeout
  await assert.rejects(
    () =>
      runCameraCalibration(
        new MockCamCalClient(spotCheckPb.CameraCalibrationFeedbackResponse.Status.STATUS_PROCESSING),
        lease,
        { updateFrequency: 100, timeoutMSec: 1000 },
      ),
    CameraCalibrationTimedOutError,
  );
});
