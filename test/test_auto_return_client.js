'use strict';

const assert = require('node:assert');
const test = require('node:test');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const autoReturnPb = require('../src/bosdyn/api/auto_return/auto_return_pb');
const {
  AutoReturnServiceService,
  AutoReturnServiceClient,
} = require('../src/bosdyn/api/auto_return/auto_return_service_grpc_pb');
const { AutoReturnClient, InvalidParameterError } = require('../src/bosdyn-client/auto_return');

class MockAutoReturnService extends AutoReturnServiceClient {
  constructor() {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this.activeConfigurationRequest = null;
    this.leases = null;
  }

  getConfiguration({ request }, callback) {
    const res = new autoReturnPb.GetConfigurationResponse();
    helpers.addCommonHeader(res, request);
    if (this.activeConfigurationRequest) {
      res.setRequest(this.activeConfigurationRequest);
      res.setEnabled(true);
    }
    callback(null, res);
  }

  configure({ request }, callback) {
    const res = new autoReturnPb.ConfigureResponse();
    helpers.addCommonHeader(res, request);
    if (request.getParams().getMaxDisplacement() <= 0) {
      res.setInvalidParams(new autoReturnPb.Params().setMaxDisplacement(request.getParams().getMaxDisplacement()));
      res.setStatus(autoReturnPb.ConfigureResponse.Status.STATUS_INVALID_PARAMS);
    } else {
      res.setStatus(autoReturnPb.ConfigureResponse.Status.STATUS_OK);
      this.activeConfigurationRequest = request;
      this.leases = request.getLeasesList();
    }
    callback(null, res);
  }
}

function _setup(rpcDelay = 0) {
  const client = new AutoReturnClient();
  const service = new MockAutoReturnService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: AutoReturnServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_simple', async () => {
  const { client, server, service } = _setup();
  const config = await client.getConfiguration();
  assert.ok(!config.getEnabled());
  assert.ok(!config.hasRequest());

  const params = new autoReturnPb.Params().setMaxDisplacement(-1);
  await assert.rejects(async () => {
    await client.configure(params, []);
  }, InvalidParameterError);

  params.setMaxDisplacement(12);
  await client.configure(params, []);

  assert.ok(
    JSON.stringify(service.activeConfigurationRequest.getParams().toObject()) === JSON.stringify(params.toObject()),
  );
  assert.ok(Array.isArray(service.leases) ? service.leases.length === 0 : false);

  const res = await client.getConfiguration();
  assert.ok(JSON.stringify(res.getRequest().getParams().toObject()) === JSON.stringify(params.toObject()));

  server.forceShutdown();
});
