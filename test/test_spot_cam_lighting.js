'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');
const LED_pb = require('../src/bosdyn/api/spot_cam/LED_pb');
const { LightingServiceClient, LightingServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const { LightingClient } = require('../src/bosdyn-client/spot_cam/lighting');

class MockLightingService extends LightingServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async getLEDBrightness(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new LED_pb.GetLEDBrightnessResponse();
    response.setBrightnessesList([
      0.004999999888241291, 0.004999999888241291, 0.004999999888241291, 0.004999999888241291,
    ]);

    helpers.addCommonHeader(response, call.request);
    callback(null, response);
  }

  async setLEDBrightness(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new LED_pb.SetLEDBrightnessResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new LightingClient();
  const service = new MockLightingService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: LightingServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_get_led_brightness', async () => {
  const { client, server } = _setup();
  const brightnesses = await client.getLedBrightness();
  assert.ok(brightnesses.length === 4);

  for (const brightness of brightnesses) {
    assert.ok(brightness < 0.01);
  }

  server.forceShutdown();
});

test('test_set_led_brightness', async () => {
  const { client, server } = _setup();
  await client.setLedBrightness([1]);
  server.forceShutdown();
});
