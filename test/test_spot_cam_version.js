'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const robotIdPb = require('../src/bosdyn/api/robot_id_pb');
const { VersionServiceClient, VersionServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const versionPb = require('../src/bosdyn/api/spot_cam/version_pb');
const { VersionClient } = require('../src/bosdyn-client/spot_cam/version');

class MockVersionService extends VersionServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async getSoftwareVersion(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new versionPb.GetSoftwareVersionResponse().setVersion(
      new robotIdPb.SoftwareVersion().setMajorVersion(1).setMinorVersion(1).setPatchLevel(4),
    );
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new VersionClient();
  const service = new MockVersionService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: VersionServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_get_software_version', async () => {
  const { client, server } = _setup();
  const version = await client.getSoftwareVersion();
  server.forceShutdown();
  assert.ok(version.getMajorVersion() === 1);
  assert.ok(version.getMinorVersion() === 1);
  assert.ok(version.getPatchLevel() === 4);
});
