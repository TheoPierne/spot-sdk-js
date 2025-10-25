'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const cameraPb = require('../src/bosdyn/api/spot_cam/camera_pb');
const loggingPb = require('../src/bosdyn/api/spot_cam/logging_pb');
const { MediaLogServiceClient, MediaLogServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');

const { TimedOutError } = require('../src/bosdyn-client/exceptions');
const { MediaLogClient } = require('../src/bosdyn-client/spot_cam/media_log');

class MockMediaLogService extends MediaLogServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async delete(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.DeleteResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async enableDebug(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.DebugResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async getStatus(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.GetStatusResponse();
    response.setPoint(call.request.getPoint());
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async listCameras(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.ListCamerasResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async listLogpoints(call) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.ListLogpointsResponse();
    helpers.addCommonHeader(response, call.request);

    call.write(response);

    call.end();
  }

  async retrieve(call) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.RetrieveResponse().setLogpoint(call.request.getPoint());
    helpers.addCommonHeader(response, call.request);

    call.write(response);

    call.end();
  }

  async retrieveRawData(call) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.RetrieveRawDataResponse().setLogpoint(call.request.getPoint());
    helpers.addCommonHeader(response, call.request);

    call.write(response);

    call.end();
  }

  async setPassphrase(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.SetPassphraseResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async store(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.StoreResponse().setPoint(
      new loggingPb.Logpoint()
        .setName(call.request.getCamera().getName())
        .setType(call.request.getType())
        .setTag(call.request.getTag()),
    );
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async tag(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new loggingPb.TagResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new MediaLogClient();
  const service = new MockMediaLogService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: MediaLogServiceService,
    service: service,
  });
  return { client, service, server };
}

function _createFakeLogpoint(
  name = 'fake-logpoint',
  recordType = loggingPb.Logpoint.RecordType.STILLIMAGE,
  status = loggingPb.Logpoint.LogStatus.COMPLETE,
  tag = 'fake-lopoint-tag',
) {
  return new loggingPb.Logpoint().setName(name).setType(recordType).setStatus(status).setTag(tag);
}

test('test_delete', async () => {
  const { client, server } = _setup();
  const completedLp = _createFakeLogpoint();
  await client.delete(completedLp);
  server.forceShutdown();
});

test('test_enable_debug', async () => {
  const { client, server } = _setup();
  await client.enableDebug();
  server.forceShutdown();
});

test('test_get_status', async () => {
  const { client, server } = _setup();
  const completedLp = _createFakeLogpoint();
  const lp = await client.getStatus(completedLp);
  server.forceShutdown();
  assert.ok(lp.getStatus() === loggingPb.Logpoint.LogStatus.COMPLETE);
});

test('test_get_status_timeout', async () => {
  const timeout = 100;
  const { client, server } = _setup(timeout * 2);
  const completedLp = _createFakeLogpoint();
  await assert.rejects(() => client.getStatus(completedLp, { timeout }), TimedOutError);
  server.forceShutdown();
});

test('test_list_cameras', async () => {
  const { client, server } = _setup();
  const cameras = await client.listCameras();
  server.forceShutdown();
  assert.ok(cameras.length === 0);
});

test('test_list_logpoints', async () => {
  const { client, server } = _setup();
  const lps = await client.listLogpoints();
  server.forceShutdown();
  assert.ok(lps.length === 0);
});

test('test_retrieve', async () => {
  const { client, server } = _setup();
  const completedLp = _createFakeLogpoint();
  const { logpoint, data } = await client.retrieve(completedLp);
  server.forceShutdown();
  assert.deepEqual(logpoint.serializeBinary(), completedLp.serializeBinary());
  assert.ok(data.length === 0);
});

test('test_retrieve_raw_data', async () => {
  const { client, server } = _setup();
  const completedLp = _createFakeLogpoint();
  const { logpoint, data } = await client.retrieveRawData(completedLp);
  server.forceShutdown();
  assert.deepEqual(logpoint.serializeBinary(), completedLp.serializeBinary());
  assert.ok(data.length === 0);
});

test('test_set_passphrase', async () => {
  const { client, server } = _setup();
  await client.setPassphrase('good');
  server.forceShutdown();
});

test('test_store', async () => {
  const { client, server } = _setup();
  const camera = new cameraPb.Camera().setName('pano');
  const cameraTag = 'pano-tag';
  const lp = await client.store(camera, loggingPb.Logpoint.RecordType.STILLIMAGE, cameraTag);
  server.forceShutdown();
  assert.ok(lp.getName() === camera.getName());
  assert.ok(lp.getType() === loggingPb.Logpoint.RecordType.STILLIMAGE);
  assert.ok(lp.getTag() === cameraTag);
});

test('test_tag', async () => {
  const { client, server } = _setup();
  const completedLp = _createFakeLogpoint();
  await client.tag(completedLp);
  server.forceShutdown();
});
