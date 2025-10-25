'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const directoryPb = require('../src/bosdyn/api/directory_pb');
const directoryRegistrationPb = require('../src/bosdyn/api/directory_registration_pb');
const {
  DirectoryRegistrationServiceClient,
  DirectoryRegistrationServiceService,
} = require('../src/bosdyn/api/directory_registration_service_grpc_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const {
  DirectoryRegistrationClient,
  ServiceAlreadyExistsError,
  ServiceDoesNotExistError,
  DirectoryRegistrationKeepAlive,
} = require('../src/bosdyn-client/directory_registration');
const { InvalidRequestError } = require('../src/bosdyn-client/exceptions');

class MockDirectoryRegistrationServicer extends DirectoryRegistrationServiceClient {
  constructor() {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this.serviceEntries = {};
    this.errorCode = headerPb.CommonError.Code.CODE_OK;
    this.errorMessage = null;
    this.useUnspecifiedState = false;
  }

  registerService({ request }, callback) {
    const response = new directoryRegistrationPb.RegisterServiceResponse();
    helpers.addCommonHeader(response, request, this.errorCode, this.errorMessage);

    if (this.errorCode !== headerPb.CommonError.Code.CODE_OK) {
      return callback(null, response);
    }

    if (!(request.getServiceEntry().getName() in this.serviceEntries)) {
      this.serviceEntries[request.getServiceEntry().getName()] = request.getServiceEntry();
      response.setStatus(directoryRegistrationPb.RegisterServiceResponse.Status.STATUS_OK);
    } else {
      response.setStatus(directoryRegistrationPb.RegisterServiceResponse.Status.STATUS_ALREADY_EXISTS);
    }

    return callback(null, response);
  }

  unregisterService({ request }, callback) {
    const response = new directoryRegistrationPb.UnregisterServiceResponse();
    helpers.addCommonHeader(response, request, this.errorCode, this.errorMessage);

    if (this.errorCode !== headerPb.CommonError.Code.CODE_OK) {
      return callback(null, response);
    }

    if (request.getServiceName() in this.serviceEntries) {
      delete this.serviceEntries[request.getServiceName()];
      response.setStatus(directoryRegistrationPb.UnregisterServiceResponse.Status.STATUS_OK);
    } else {
      response.setStatus(directoryRegistrationPb.UnregisterServiceResponse.Status.STATUS_NONEXISTENT_SERVICE);
    }

    return callback(null, response);
  }

  updateService({ request }, callback) {
    const response = new directoryRegistrationPb.UpdateServiceResponse();
    helpers.addCommonHeader(response, request, this.errorCode, this.errorMessage);

    if (this.errorCode !== headerPb.CommonError.Code.CODE_OK) {
      return callback(null, response);
    }

    if (request.getServiceEntry().getName() in this.serviceEntries) {
      this.serviceEntries[request.getServiceEntry().getName()] = request.getServiceEntry();
      response.setStatus(directoryRegistrationPb.UpdateServiceResponse.Status.STATUS_OK);
    } else {
      response.setStatus(directoryRegistrationPb.UpdateServiceResponse.Status.STATUS_NONEXISTENT_SERVICE);
    }

    return callback(null, response);
  }
}

function _setup() {
  const client = new DirectoryRegistrationClient();
  const service = new MockDirectoryRegistrationServicer();
  const server = helpers.setupClientAndService(client, {
    servicer: DirectoryRegistrationServiceService,
    service: service,
  });
  return { client, service, server };
}

function _addServiceEntry(serviceEntry, service) {
  service.serviceEntries[serviceEntry.getName()] = serviceEntry;
}

function _hasServiceName(name, service) {
  for (const entryName of Object.keys(service.serviceEntries)) {
    if (entryName === name) {
      return true;
    }
  }

  return false;
}

function defaultServiceEntry() {
  return new directoryPb.ServiceEntry()
    .setName('test')
    .setType('bosdyn.api.TestService')
    .setAuthority('test.spot.robot')
    .setUserTokenRequired(true)
    .setLivenessTimeoutSecs(75);
}

function defaultServiceEntryLabelOnly() {
  return new directoryPb.ServiceEntry()
    .setName('test_auth_label_only')
    .setType('bosdyn.api.TestService')
    .setAuthority('test_label')
    .setUserTokenRequired(true);
}

function defaultServiceEndpoint() {
  return new directoryPb.Endpoint().setHostIp('0.0.0.0').setPort(0);
}

test('test_header_error', async () => {
  const { client, service, server } = _setup();
  service.errorCode = headerPb.CommonError.Code.CODE_INVALID_REQUEST;

  const defS = defaultServiceEntry();
  const defSE = defaultServiceEndpoint();

  try {
    await client.register(defS.getName(), defS.getType(), defS.getAuthority(), defSE.getHostIp(), defSE.getPort());
  } catch (err) {
    assert.ok(err instanceof InvalidRequestError);
  } finally {
    server.forceShutdown();
  }
});

test('test_registration', async () => {
  const { client, service, server } = _setup();

  const defS = defaultServiceEntry();
  const defSE = defaultServiceEndpoint();
  const defLO = defaultServiceEntryLabelOnly();

  await client.register(defS.getName(), defS.getType(), defS.getAuthority(), defSE.getHostIp(), defSE.getPort());
  assert.ok(_hasServiceName(defS.getName(), service));

  await client.register(defLO.getName(), defLO.getType(), defLO.getAuthority(), defSE.getHostIp(), defSE.getPort());
  assert.ok(_hasServiceName(defLO.getName(), service));

  server.forceShutdown();
});

test('test_register_errors', async () => {
  const { client, service, server } = _setup();

  const defS = defaultServiceEntry();
  const defSE = defaultServiceEndpoint();

  _addServiceEntry(defS, service);

  try {
    await client.register(defS.getName(), defS.getType(), defS.getAuthority(), defSE.getHostIp(), defSE.getPort());
  } catch (err) {
    assert.ok(err instanceof ServiceAlreadyExistsError);
  } finally {
    server.forceShutdown();
  }
});

test('test_update', async () => {
  const { client, service, server } = _setup();

  const defS = defaultServiceEntry();
  const defSE = defaultServiceEndpoint();

  _addServiceEntry(defS, service);
  await client.update(defS.getName(), defS.getType(), 'test.spot.UPDATEDrobot', defSE.getHostIp(), defSE.getPort());
  assert.ok(_hasServiceName(defS.getName(), service));

  const updateEntry = service.serviceEntries[defS.getName()];
  assert.ok(updateEntry.getAuthority() === 'test.spot.UPDATEDrobot');

  server.forceShutdown();
});

test('test_update_errors', async () => {
  const { client, server } = _setup();

  const defS = defaultServiceEntry();
  const defSE = defaultServiceEndpoint();

  try {
    await client.update(defS.getName(), defS.getType(), defS.getAuthority(), defSE.getHostIp(), defSE.getPort());
  } catch (err) {
    assert.ok(err instanceof ServiceDoesNotExistError);
  } finally {
    server.forceShutdown();
  }
});

test('test_unregister', async () => {
  const { client, service, server } = _setup();

  const defS = defaultServiceEntry();

  _addServiceEntry(defS, service);
  await client.unregister(defS.getName());
  assert.ok(Object.keys(service.serviceEntries).length === 0);

  server.forceShutdown();
});

test('test_unregister_errors', async () => {
  const { client, server } = _setup();

  const defS = defaultServiceEntry();

  try {
    await client.unregister(defS.getName());
  } catch (err) {
    assert.ok(err instanceof ServiceDoesNotExistError);
  } finally {
    server.forceShutdown();
  }
});

test('test_keep_alive', async () => {
  const { client, service, server } = _setup();

  const keepAlive = new DirectoryRegistrationKeepAlive(client);

  const defS = defaultServiceEntry();
  const defSE = defaultServiceEndpoint();

  const name = defS.getName();

  assert.ok(!(name in service.serviceEntries));

  await keepAlive.start(name, defS.getType(), defS.getAuthority(), defSE.getHostIp(), defSE.getPort());
  assert.ok(name in service.serviceEntries);
  assert.ok(service.serviceEntries[name].toString() === defS.toString());

  keepAlive.shutdown();
  await keepAlive.unregister();

  assert.ok(!keepAlive.isAlive());
  assert.ok(!(name in service.serviceEntries));

  server.forceShutdown();
});

test('test_keep_alive_update', async () => {
  const { client, service, server } = _setup();

  const intervalSeconds = 100;
  const keepAlive = new DirectoryRegistrationKeepAlive(client, { rpcIntervalSeconds: intervalSeconds });

  const defS = defaultServiceEntry();
  const defSE = defaultServiceEndpoint();

  const name = defS.getName();

  assert.ok(!(name in service.serviceEntries));

  await client.register(defS.getName(), defS.getType(), defS.getAuthority(), defSE.getHostIp(), defSE.getPort());

  const newAuthority = `${defS.getAuthority()}woo-hoo`;

  await keepAlive.start(name, defS.getType(), newAuthority, defSE.getHostIp(), defSE.getPort());
  assert.ok(service.serviceEntries[name].getAuthority() === newAuthority);

  await sleep(intervalSeconds * 3);
  assert.ok(keepAlive.isAlive());

  keepAlive.shutdown();
  await keepAlive.unregister();

  server.forceShutdown();
});
