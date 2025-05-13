'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const networkPb = require('../src/bosdyn/api/spot_cam/network_pb');
const { NetworkServiceClient, NetworkServiceService } = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const { NetworkClient } = require('../src/bosdyn-client/spot_cam/network');

class MockNetworkService extends NetworkServiceClient {
  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async getICEConfiguration(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new networkPb.GetICEConfigurationResponse();
    response.addServers(_mockIceServer());
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }

  async setICEConfiguration(call, callback) {
    if (this._rpcDelay) {
      await sleep(this._rpcDelay);
    }

    const response = new networkPb.SetICEConfigurationResponse();
    helpers.addCommonHeader(response, call.request);

    callback(null, response);
  }
}

function _setup(rpcDelay = 0) {
  const client = new NetworkClient();
  const service = new MockNetworkService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: NetworkServiceService,
    service: service,
  });
  return { client, service, server };
}

function _mockIceServer(serverType = networkPb.ICEServer.servertype.TURN, address = '127.0.0.1', port = 22) {
  return new networkPb.ICEServer().setType(serverType).setAddress(address).setPort(port);
}

test('test_get_ice_configuration', async () => {
  const { client, server } = _setup();
  const ice = await client.getICEConfiguration();
  server.forceShutdown();
  const mock = _mockIceServer();
  assert.ok(ice.length === 1);
  assert.ok(ice[0].getType() === mock.getType());
  assert.ok(ice[0].getAddress() === mock.getAddress());
  assert.ok(ice[0].getPort() === mock.getPort());
});

test('test_set_ice_configuration', async () => {
  const { client, server } = _setup();
  await client.setICEConfiguration([_mockIceServer()]);
  server.forceShutdown();
});
