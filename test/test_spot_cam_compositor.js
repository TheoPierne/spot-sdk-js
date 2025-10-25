'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const cameraPb = require('../src/bosdyn/api/spot_cam/camera_pb');
const compositorPb = require('../src/bosdyn/api/spot_cam/compositor_pb');
const { CompositorServiceClient, CompositorServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const { CompositorClient } = require('../src/bosdyn-client/spot_cam/compositor');

class MockCompositorService extends CompositorServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async setScreen(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new compositorPb.SetScreenResponse().setName(call.request.getName());
    helpers.addCommonHeader(response, call.request);
    callback(null, response);
  }

  async getScreen(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new compositorPb.GetScreenResponse().setName('good');
    helpers.addCommonHeader(response, call.request);
    callback(null, response);
  }

  async listScreens(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new compositorPb.ListScreensResponse();
    response.addScreens(new compositorPb.ScreenDescription().setName('good'));
    helpers.addCommonHeader(response, call.request);
    callback(null, response);
  }

  async getVisibleCameras(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new compositorPb.GetVisibleCamerasResponse();
    response.addStreams(_mockStream());
    helpers.addCommonHeader(response, call.request);
    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new CompositorClient();
  const service = new MockCompositorService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: CompositorServiceService,
    service: service,
  });
  return { client, service, server };
}

function _mockStream(name = 'good', xOffset = 0, yOffset = 0, width = 2, height = 1) {
  return new compositorPb.GetVisibleCamerasResponse.Stream()
    .setWindow(
      new compositorPb.GetVisibleCamerasResponse.Stream.Window()
        .setXoffset(xOffset)
        .setYoffset(yOffset)
        .setWidth(width)
        .setHeight(height),
    )
    .setCamera(new cameraPb.Camera().setName(name));
}

test('test_set_screen', async () => {
  const { client, server } = _setup();
  const result = await client.setScreen('good');
  assert.ok(result === 'good');
  server.forceShutdown();
});

test('test_get_screen', async () => {
  const { client, server } = _setup();
  const result = await client.getScreen();
  assert.ok(result === 'good');
  server.forceShutdown();
});

test('test_list_screens', async () => {
  const { client, server } = _setup();
  const result = await client.listScreens();
  assert.ok(result.length === 1);
  assert.ok(result[0].getName() === 'good');
  server.forceShutdown();
});

test('test_get_visible_cameras', async () => {
  const { client, server } = _setup();
  const mock = _mockStream();
  const result = await client.getVisibleCameras();
  assert.ok(result.length === 1);
  assert.ok(result[0].getCamera().getName() === mock.getCamera().getName());
  assert.ok(result[0].getWindow().getXoffset() === mock.getWindow().getXoffset());
  assert.ok(result[0].getWindow().getYoffset() === mock.getWindow().getYoffset());
  assert.ok(result[0].getWindow().getWidth() === mock.getWindow().getWidth());
  assert.ok(result[0].getWindow().getHeight() === mock.getWindow().getHeight());
  server.forceShutdown();
});
