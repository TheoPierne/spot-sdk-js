'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');
const { BoolValue } = require('google-protobuf/google/protobuf/wrappers_pb');

const helpers = require('./helpers');

const powerPb = require('../src/bosdyn/api/spot_cam/power_pb');
const { PowerServiceClient, PowerServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const { PowerClient } = require('../src/bosdyn-client/spot_cam/power');

class MockPowerService extends PowerServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async getPowerStatus(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new powerPb.GetPowerStatusResponse().setStatus(
      new powerPb.PowerStatus()
        .setPtz(new BoolValue().setValue(true))
        .setAux1(new BoolValue().setValue(true))
        .setAux2(new BoolValue().setValue(false)),
    );

    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async setPowerStatus(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new powerPb.SetPowerStatusResponse().setStatus(call.request.getStatus());
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new PowerClient();
  const service = new MockPowerService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: PowerServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_get_power_status', async () => {
  const { client, server } = _setup();
  const ps = await client.getPowerStatus();
  server.forceShutdown();
  assert.ok(ps.getPtz().getValue());
  assert.ok(ps.getAux1().getValue());
  assert.ok(!ps.getAux2().getValue());
});

test('test_set_power_status', async () => {
  const { client, server } = _setup();
  const ps = await client.setPowerStatus(true, false);
  server.forceShutdown();
  assert.ok(ps.getPtz().getValue());
  assert.ok(!ps.getAux1().getValue());
  assert.ok(!ps.getAux2().getValue());
});
