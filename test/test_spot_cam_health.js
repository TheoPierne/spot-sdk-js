'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const healthPb = require('../src/bosdyn/api/spot_cam/health_pb');
const { HealthServiceClient, HealthServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const { HealthClient } = require('../src/bosdyn-client/spot_cam/health');

class MockHealthService extends HealthServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async clearBITEvents(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new healthPb.ClearBITEventsResponse();
    helpers.addCommonHeader(response, call.request);
    callback(null, response);
  }

  async getBITStatus(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new healthPb.GetBITStatusResponse();
    response.addDegradations(
      new healthPb.GetBITStatusResponse.Degradation()
        .setType(healthPb.GetBITStatusResponse.Degradation.DegradationType.STORAGE)
        .setDescription('cool'),
    );

    helpers.addCommonHeader(response, call.request);
    callback(null, response);
  }

  async getTemperature(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new healthPb.GetTemperatureResponse();
    response.addTemps(new healthPb.Temperature().setChannelName('hi').setTemperature(100));

    helpers.addCommonHeader(response, call.request);
    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new HealthClient();
  const service = new MockHealthService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: HealthServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_clear_bit_events', async () => {
  const { client, server } = _setup();
  await client.clearBitEvents();
  server.forceShutdown();
});

test('test_get_bit_status', async () => {
  const { client, server } = _setup();
  const { events, degradations } = await client.getBitStatus();
  assert.ok(events.length === 0);
  assert.ok(degradations.length === 1);
  server.forceShutdown();
});

test('test_get_temperature', async () => {
  const { client, server } = _setup();
  const temp = await client.getTemperature();
  assert.ok(temp.length === 1);
  server.forceShutdown();
});
