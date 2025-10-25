'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const headerPb = require('../src/bosdyn/api/header_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const licencePb = require('../src/bosdyn/api/license_pb');
const powerPb = require('../src/bosdyn/api/power_pb');
const robotStatePb = require('../src/bosdyn/api/robot_state_pb');

const {
  UnsetStatusError,
  InternalServerError,
  InvalidRequestError,
  LeaseUseError,
  ResponseError,
  LicenseError,
} = require('../src/bosdyn-client/exceptions');
const {
  powerOnMotors,
  powerOffMotors,
  safePowerOffMotors,
  _powerCommandErrorFromResponse,
  _powerFeedbackErrorFromResponse,
  FaultedError,
  CommandTimedOutError,
  safePowerOffRobot,
  safePowerCycleRobot,
} = require('../src/bosdyn-client/power');

class MockPowerClient {
  constructor() {
    this.request = null;
    this.response = powerPb.PowerCommandStatus.STATUS_IN_PROGRESS;
    this.feedbackFn = null;
  }

  powerCommand(request) {
    this.request = request;
    return Promise.resolve(new powerPb.PowerCommandResponse().setPowerCommandId(1337));
  }

  async powerCommandFeedback() {
    if (this.feedbackFn) {
      await this.feedbackFn();
    }
    return this.response;
  }
}

class MockRobotCommandClient {
  robotCommand() {
    return Promise.resolve(1337);
  }
}

class MockRobotStateClient {
  constructor() {
    this.powerState = robotStatePb.PowerState.MotorPowerState.MOTOR_POWER_STATE_ON;
    this.feedbackFn = null;
  }

  async getRobotState() {
    if (this.feedbackFn) {
      await this.feedbackFn();
    }
    const powerState = new robotStatePb.PowerState().setMotorPowerState(this.powerState);
    return new robotStatePb.RobotState().setPowerState(powerState);
  }
}

test('test_power_command_error', () => {
  // Test unset header error
  let response = new powerPb.PowerCommandResponse();
  response.setLicenseStatus(licencePb.LicenseInfo.Status.STATUS_VALID);
  assert.ok(_powerCommandErrorFromResponse(response) instanceof UnsetStatusError);

  // Test header internal server error
  response.setHeader(
    new headerPb.ResponseHeader().setError(
      new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR),
    ),
  );
  assert.ok(_powerCommandErrorFromResponse(response) instanceof InternalServerError);

  // Test header invalid request error
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_INVALID_REQUEST);
  assert.ok(_powerCommandErrorFromResponse(response) instanceof InvalidRequestError);

  // Test lease use error
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_OK);
  response.setLeaseUseResult(
    new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE),
  );
  assert.ok(_powerCommandErrorFromResponse(response) instanceof LeaseUseError);

  // Test unset status
  response.getLeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(_powerCommandErrorFromResponse(response) instanceof UnsetStatusError);

  // Test status error
  response.setStatus(powerPb.PowerCommandStatus.STATUS_SHORE_POWER_CONNECTED);
  assert.ok(_powerCommandErrorFromResponse(response) instanceof ResponseError);

  // Test unknown status
  response.setStatus(1337);
  assert.ok(_powerCommandErrorFromResponse(response) instanceof ResponseError);

  // Test status processing
  response.setStatus(powerPb.PowerCommandStatus.STATUS_IN_PROGRESS);
  assert.ok(_powerCommandErrorFromResponse(response) === null);

  // Test status OK
  response.setStatus(powerPb.PowerCommandStatus.STATUS_SUCCESS);
  assert.ok(_powerCommandErrorFromResponse(response) === null);

  // Test lease error even when response status is OK.
  response.getLeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE);
  assert.ok(_powerCommandErrorFromResponse(response) instanceof LeaseUseError);

  // Test license error even when response status is OK.
  response.setLicenseStatus(licencePb.LicenseInfo.Status.STATUS_NO_LICENSE);
  response.getLeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  response.setStatus(powerPb.PowerCommandStatus.STATUS_LICENSE_ERROR);
  assert.ok(_powerCommandErrorFromResponse(response) instanceof LicenseError);

  // Test backwards compatibility with old clients
  response.setLicenseStatus(licencePb.LicenseInfo.Status.STATUS_NO_LICENSE);
  response.setStatus(powerPb.PowerCommandStatus.STATUS_SUCCESS);
  assert.ok(_powerCommandErrorFromResponse(response) === null);
});

test('test_power_feedback_error', () => {
  // Test unset header error
  let response = new powerPb.PowerCommandFeedbackResponse();
  assert.ok(_powerFeedbackErrorFromResponse(response) instanceof UnsetStatusError);

  // Test header internal server error
  response.setHeader(
    new headerPb.ResponseHeader().setError(
      new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR),
    ),
  );
  assert.ok(_powerFeedbackErrorFromResponse(response) instanceof InternalServerError);

  // Test header invalid request error
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_INVALID_REQUEST);
  assert.ok(_powerFeedbackErrorFromResponse(response) instanceof InvalidRequestError);

  // Test unset status
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_OK);
  assert.ok(_powerFeedbackErrorFromResponse(response) instanceof UnsetStatusError);

  // Test status error
  response.setStatus(powerPb.PowerCommandStatus.STATUS_SHORE_POWER_CONNECTED);
  assert.ok(_powerFeedbackErrorFromResponse(response) === null);

  // Test unknown status. This is NOT an error -- user will decide what to do in this case.
  response.setStatus(1337);
  assert.ok(_powerFeedbackErrorFromResponse(response) === null);

  // Test status processing
  response.setStatus(powerPb.PowerCommandStatus.STATUS_IN_PROGRESS);
  assert.ok(_powerFeedbackErrorFromResponse(response) === null);

  // Test status OK
  response.setStatus(powerPb.PowerCommandStatus.STATUS_SUCCESS);
  assert.ok(_powerFeedbackErrorFromResponse(response) === null);
});

test('test_power_on_success', async () => {
  const mockClient = new MockPowerClient();
  const timeout = 1000;
  mockClient.feedbackFn = async () => {
    await sleep(timeout / 2);
  };
  mockClient.response = powerPb.PowerCommandStatus.STATUS_SUCCESS;
  await powerOnMotors(mockClient, timeout, 100);
});

test('test_power_on_failure', async () => {
  const mockClient = new MockPowerClient();
  const timeout = 1000;
  mockClient.feedbackFn = async () => {
    await sleep(timeout / 2);
  };
  mockClient.response = powerPb.PowerCommandStatus.STATUS_FAULTED;
  await assert.rejects(() => powerOnMotors(mockClient, timeout, 100), FaultedError);
});

test('test_power_on_timeout', async () => {
  const feedbackFns = [
    null,
    async () => {
      await sleep(3000);
    },
  ];

  for (const feedbackFn of feedbackFns) {
    const mockClient = new MockPowerClient();
    mockClient.feedbackFn = feedbackFn;
    const start = Date.now();
    const timeout = 1000;
    // eslint-disable-next-line no-await-in-loop
    await assert.rejects(() => powerOnMotors(mockClient, timeout, 100), CommandTimedOutError);
    const dt = Date.now() - start;
    if (feedbackFn) {
      assert.ok(Math.abs(dt - (timeout + 2000)) < 100);
    } else {
      assert.ok(Math.abs(dt - timeout) < 100);
    }
  }
});

test('test_emergency_power_off_success', async () => {
  const mockClient = new MockPowerClient();
  const timeout = 1000;
  mockClient.feedbackFn = async () => {
    await sleep(timeout / 2);
  };
  mockClient.response = powerPb.PowerCommandStatus.STATUS_SUCCESS;
  await powerOffMotors(mockClient, timeout, 100);
});

test('test_emergency_power_off_timeout', async () => {
  const feedbackFns = [
    null,
    async () => {
      await sleep(3000);
    },
  ];

  for (const feedbackFn of feedbackFns) {
    const mockClient = new MockPowerClient();
    mockClient.feedbackFn = feedbackFn;
    const start = Date.now();
    const timeout = 1000;
    // eslint-disable-next-line no-await-in-loop
    await assert.rejects(() => powerOffMotors(mockClient, timeout, 100), CommandTimedOutError);
    const dt = Date.now() - start;
    if (feedbackFn) {
      assert.ok(Math.abs(dt - (timeout + 2000)) < 100);
    } else {
      assert.ok(Math.abs(dt - timeout) < 100);
    }
  }
});

test('test_safe_power_off_motors_success', async () => {
  const mockCommandClient = new MockRobotCommandClient();
  const mockStateClient = new MockRobotStateClient();
  const timeout = 1000;

  mockStateClient.powerState = robotStatePb.PowerState.MotorPowerState.MOTOR_POWER_STATE_OFF;
  mockCommandClient.feedbackFn = async () => {
    await sleep(timeout / 2);
  };
  mockCommandClient.response = powerPb.PowerCommandStatus.STATUS_SUCCESS;

  await safePowerOffMotors(mockCommandClient, mockStateClient, timeout, 100);
});

test('test_safe_power_off_motors_timeout', async () => {
  const feedbackFns = [
    null,
    async () => {
      await sleep(3000);
    },
  ];

  for (const feedbackFn of feedbackFns) {
    const mockCommandClient = new MockRobotCommandClient();
    const mockStateClient = new MockRobotStateClient();
    mockStateClient.feedbackFn = feedbackFn;
    const start = Date.now();
    const timeout = 1000;
    // eslint-disable-next-line no-await-in-loop
    await assert.rejects(
      () => safePowerOffMotors(mockCommandClient, mockStateClient, timeout, 100),
      CommandTimedOutError,
    );
    const dt = Date.now() - start;
    if (feedbackFn) {
      assert.ok(Math.abs(dt - (timeout + 2000)) < 100);
    } else {
      assert.ok(Math.abs(dt - timeout) < 100);
    }
  }
});

test('test_safe_power_off_robot_success', async () => {
  const mockCommandClient = new MockRobotCommandClient();
  const mockStateClient = new MockRobotStateClient();
  const mockPowerClient = new MockPowerClient();
  const timeout = 1000;

  mockStateClient.powerState = robotStatePb.PowerState.MotorPowerState.MOTOR_POWER_STATE_OFF;
  mockCommandClient.feedbackFn = async () => {
    await sleep(timeout / 4);
  };
  mockCommandClient.response = powerPb.PowerCommandStatus.STATUS_SUCCESS;
  mockPowerClient.feedbackFn = async () => {
    await sleep(timeout / 4);
  };
  mockPowerClient.response = powerPb.PowerCommandStatus.STATUS_SUCCESS;
  await safePowerOffRobot(mockCommandClient, mockStateClient, mockPowerClient, timeout, 100);
});

test('test_safe_power_off_robot_timeout', async () => {
  const feedbackFns = [
    null,
    async () => {
      await sleep(3000);
    },
  ];

  for (const feedbackFn of feedbackFns) {
    const mockCommandClient = new MockRobotCommandClient();
    const mockStateClient = new MockRobotStateClient();
    const mockPowerClient = new MockPowerClient();
    const timeout = 1000;
    const start = Date.now();
    mockStateClient.feedbackFn = feedbackFn;

    // eslint-disable-next-line no-await-in-loop
    await assert.rejects(
      () => safePowerOffRobot(mockCommandClient, mockStateClient, mockPowerClient, timeout, 100),
      CommandTimedOutError,
    );

    const dt = Date.now() - start;
    if (feedbackFn) {
      assert.ok(Math.abs(dt - (timeout + 2000)) < 100);
    } else {
      assert.ok(Math.abs(dt - timeout) < 100);
    }
  }
});

test('test_safe_power_cycle_robot_success', async () => {
  const mockCommandClient = new MockRobotCommandClient();
  const mockStateClient = new MockRobotStateClient();
  const mockPowerClient = new MockPowerClient();
  const timeout = 1000;
  mockStateClient.powerState = robotStatePb.PowerState.MotorPowerState.MOTOR_POWER_STATE_OFF;
  mockCommandClient.feedbackFn = () => sleep(timeout / 4);
  mockCommandClient.response = powerPb.PowerCommandStatus.STATUS_SUCCESS;
  mockPowerClient.feedbackFn = () => sleep(timeout / 4);
  mockPowerClient.response = powerPb.PowerCommandStatus.STATUS_SUCCESS;

  await safePowerCycleRobot(mockCommandClient, mockStateClient, mockPowerClient, 20000, 100);
});

test('test_safe_power_cycle_robot_timeout', async () => {
  const feedbackFns = [
    null,
    async () => {
      await sleep(3000);
    },
  ];

  for (const feedbackFn of feedbackFns) {
    const mockCommandClient = new MockRobotCommandClient();
    const mockStateClient = new MockRobotStateClient();
    const mockPowerClient = new MockPowerClient();
    const timeout = 1000;
    const start = Date.now();
    mockStateClient.feedbackFn = feedbackFn;

    // eslint-disable-next-line no-await-in-loop
    await assert.rejects(
      () => safePowerCycleRobot(mockCommandClient, mockStateClient, mockPowerClient, timeout, 100),
      CommandTimedOutError,
    );

    const dt = Date.now() - start;
    if (feedbackFn) {
      assert.ok(Math.abs(dt - (timeout + 2000)) < 100);
    } else {
      assert.ok(Math.abs(dt - timeout) < 100);
    }
  }
});
