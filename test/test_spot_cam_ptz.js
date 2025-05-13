'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');
const { FloatValue } = require('google-protobuf/google/protobuf/wrappers_pb');

const helpers = require('./helpers');

const ptzPb = require('../src/bosdyn/api/spot_cam/ptz_pb');
const { PtzServiceClient, PtzServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const { PtzClient } = require('../src/bosdyn-client/spot_cam/ptz');

class MockPtzService extends PtzServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async listPtz(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new ptzPb.ListPtzResponse().setPtzsList([
      new ptzPb.PtzDescription().setName('digi'),
      new ptzPb.PtzDescription().setName('full_digi'),
      new ptzPb.PtzDescription().setName('mech'),
      new ptzPb.PtzDescription().setName('overlay_digi'),
      new ptzPb.PtzDescription().setName('full_pano'),
      new ptzPb.PtzDescription().setName('full_pano'),
    ]);

    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async getPtzPosition(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new ptzPb.GetPtzPositionResponse().setPosition(
      new ptzPb.PtzPosition()
        .setPtz(call.request.getPtz())
        .setPan(new FloatValue().setValue(1.0))
        .setTilt(new FloatValue().setValue(2.0))
        .setZoom(new FloatValue().setValue(3.0)),
    );

    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async getPtzVelocity(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new ptzPb.GetPtzVelocityResponse().setVelocity(
      new ptzPb.PtzVelocity()
        .setPtz(call.request.getPtz())
        .setPan(new FloatValue().setValue(1.0))
        .setTilt(new FloatValue().setValue(2.0))
        .setZoom(new FloatValue().setValue(3.0)),
    );

    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async setPtzPosition(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new ptzPb.SetPtzPositionResponse().setPosition(call.request.getPosition());
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async setPtzVelocity(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new ptzPb.SetPtzVelocityResponse().setVelocity(call.request.getVelocity());
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new PtzClient();
  const service = new MockPtzService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: PtzServiceService,
    service: service,
  });
  return { client, service, server };
}

function _createFakePtzDesc(name = 'fake-ptz') {
  return new ptzPb.PtzDescription().setName(name);
}

test('test_list_ptz', async () => {
  const { client, server } = _setup();
  const ptzs = await client.listPtz();
  server.forceShutdown();
  assert.ok(ptzs.length === 6);
});

test('test_get_ptz_position', async () => {
  const { client, server } = _setup();
  const desc = _createFakePtzDesc();
  const position = await client.getPtzPosition(desc);
  server.forceShutdown();
  assert.ok(position.getPtz().getName() === desc.getName());
  assert.ok(position.getPan().getValue() === 1.0);
  assert.ok(position.getTilt().getValue() === 2.0);
  assert.ok(position.getZoom().getValue() === 3.0);
});

test('test_get_ptz_velocity', async () => {
  const { client, server } = _setup();
  const desc = _createFakePtzDesc();
  const position = await client.getPtzVelocity(desc);
  server.forceShutdown();
  assert.ok(position.getPtz().getName() === desc.getName());
  assert.ok(position.getPan().getValue() === 1.0);
  assert.ok(position.getTilt().getValue() === 2.0);
  assert.ok(position.getZoom().getValue() === 3.0);
});

test('test_set_ptz_position', async () => {
  const { client, server } = _setup();
  const desc = _createFakePtzDesc();
  const position = await client.setPtzPosition(desc, 1, 2, 3);
  server.forceShutdown();
  assert.ok(position.getPtz().getName() === desc.getName());
  assert.ok(position.getPan().getValue() === 1.0);
  assert.ok(position.getTilt().getValue() === 2.0);
  assert.ok(position.getZoom().getValue() === 3.0);
});

test('test_set_ptz_velocity', async () => {
  const { client, server } = _setup();
  const desc = _createFakePtzDesc();
  const position = await client.setPtzVelocity(desc, 1, 2, 3);
  server.forceShutdown();
  assert.ok(position.getPtz().getName() === desc.getName());
  assert.ok(position.getPan().getValue() === 1.0);
  assert.ok(position.getTilt().getValue() === 2.0);
  assert.ok(position.getZoom().getValue() === 3.0);
});
