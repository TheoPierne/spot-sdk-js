'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');
const robotIdPb = require('../src/bosdyn/api/robot_id_pb');
const { RobotIdServiceClient, RobotIdServiceService } = require('../src/bosdyn/api/robot_id_service_grpc_pb');
const { TimedOutError } = require('../src/bosdyn-client/exceptions');
const { RobotIdClient, toVersionArray } = require('../src/bosdyn-client/robot_id');

class MockRobotIdServicer extends RobotIdServiceClient {
  constructor(rpcDelay = 0, robotId = null) {
    super('127.0.0.1:54520', grpc.ChannelCredentials.createInsecure());
    this._rpcDelay = rpcDelay;
    this._robotId = robotId || new robotIdPb.RobotId();
  }

  async getRobotId(call, callback) {
    const resp = new robotIdPb.RobotIdResponse();
    helpers.addCommonHeader(resp, call.request);
    resp.setRobotId(this._robotId);
    if (this._rpcDelay > 0) {
      await sleep(this._rpcDelay);
    }
    callback(null, resp);
  }
}

function _setup(rpcDelay = 0, robotId = null) {
  const client = new RobotIdClient();
  const service = new MockRobotIdServicer(rpcDelay, robotId);
  const server = helpers.setupClientAndService(client, {
    servicer: RobotIdServiceService,
    service: service,
  });
  return { client, service, server };
}

function _createFakeRobotId() {
  const robotId = new robotIdPb.RobotId();
  robotId.setSerialNumber('B12313');
  robotId.setSpecies('spot');
  robotId.setVersion('1.1.12');
  robotId.setNickname('goofball');
  robotId.setComputerSerialNumber('fdafds');

  const versionSoftwareRelease = new robotIdPb.SoftwareVersion()
    .setMajorVersion(1)
    .setMinorVersion(1)
    .setPatchLevel(12);
  const softwareRelease = new robotIdPb.RobotSoftwareRelease().setVersion(versionSoftwareRelease);

  robotId.setSoftwareRelease(softwareRelease);
  return robotId;
}

function _checkRobotId(robotId) {
  assert.strictEqual(robotId.getSerialNumber(), 'B12313');
  assert.strictEqual(robotId.getSpecies(), 'spot');
}

test.beforeEach(async () => {
  // Sleep 100ms before each test to wait freeing server port
  await sleep(100);
});

test('test_get_robot_id', async () => {
  const { client, server } = _setup(0, _createFakeRobotId());
  try {
    const robotId = await client.getId();
    _checkRobotId(robotId);
  } finally {
    server.forceShutdown();
  }
});

test('test_get_robot_id_timeout', () => {
  const timeout = 100;
  const { client, server } = _setup(2 * timeout, _createFakeRobotId());
  assert
    .rejects(async () => {
      await client.getId({ timeout });
    }, TimedOutError)
    .finally(() => server.forceShutdown());
});

test('test_version_array', async () => {
  const { client, server } = _setup(0, _createFakeRobotId());
  try {
    const robotId = await client.getId();
    assert.deepStrictEqual(toVersionArray(robotId.getSoftwareRelease().getVersion()), [1, 1, 12]);
  } finally {
    server.forceShutdown();
  }
});
