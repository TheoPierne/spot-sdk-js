'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');
const { Int64Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const helpers = require('./helpers');

const {
  StreamQualityServiceClient,
  StreamQualityServiceService,
} = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const streamqualityPb = require('../src/bosdyn/api/spot_cam/streamquality_pb');
const { StreamQualityClient } = require('../src/bosdyn-client/spot_cam/streamquality');

class MockStreamQualityService extends StreamQualityServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async getStreamParams(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new streamqualityPb.GetStreamParamsResponse().setParams(_mockStreamParams());
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async setStreamParams(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new streamqualityPb.SetStreamParamsResponse().setParams(call.request.getParams());
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new StreamQualityClient();
  const service = new MockStreamQualityService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: StreamQualityServiceService,
    service: service,
  });
  return { client, service, server };
}

function _mockStreamParams(
  targetBitrate = 100,
  refreshInterval = 10,
  idrInterval = 1,
  awbMode = streamqualityPb.StreamParams.AwbModeEnum.AUTO,
) {
  return new streamqualityPb.StreamParams()
    .setTargetbitrate(new Int64Value().setValue(targetBitrate))
    .setRefreshinterval(new Int64Value().setValue(refreshInterval))
    .setIdrinterval(new Int64Value().setValue(idrInterval))
    .setAwb(new streamqualityPb.StreamParams.AwbMode().setAwb(awbMode));
}

test('test_set_stream_params', async () => {
  const { client, server } = _setup();
  const mock = _mockStreamParams();
  const result = await client.setStreamParams({
    targetBitrate: mock.getTargetbitrate().getValue(),
    refreshInterval: mock.getRefreshinterval().getValue(),
    idrInterval: mock.getIdrinterval().getValue(),
    awbMode: mock.getAwb().getAwb(),
  });
  server.forceShutdown();
  assert.deepEqual(result.serializeBinary(), mock.serializeBinary());
});

test('test_get_stream_params', async () => {
  const { client, server } = _setup();
  const mock = _mockStreamParams();
  const result = await client.getStreamParams();
  server.forceShutdown();
  assert.deepEqual(result.serializeBinary(), mock.serializeBinary());
});
