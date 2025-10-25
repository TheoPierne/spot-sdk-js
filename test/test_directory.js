'use strict';

const assert = require('node:assert');
const test = require('node:test');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const directoryPb = require('../src/bosdyn/api/directory_pb');
const { DirectoryServiceClient, DirectoryServiceService } = require('../src/bosdyn/api/directory_service_grpc_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const { DirectoryClient, NonexistentServiceError } = require('../src/bosdyn-client/directory');
const { InternalServerError, UnsetStatusError } = require('../src/bosdyn-client/exceptions');

class MockDirectoryServicer extends DirectoryServiceClient {
  constructor() {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this.serviceEntries = [];
    this.endpoints = [];
    this.errorCode = headerPb.CommonError.Code.CODE_OK;
    this.errorMessage = null;
    this.useUnspecifiedStatus = false;
  }

  listServiceEntries({ request }, callback) {
    const res = new directoryPb.ListServiceEntriesResponse();
    helpers.addCommonHeader(res, request, this.errorCode, this.errorMessage);

    if (this.errorCode !== headerPb.CommonError.Code.CODE_OK) {
      return callback(null, res);
    }

    for (const service of this.serviceEntries) {
      res.addServiceEntries(service);
    }

    return callback(null, res);
  }

  getServiceEntry({ request }, callback) {
    const res = new directoryPb.GetServiceEntryResponse();
    helpers.addCommonHeader(res, request, this.errorCode, this.errorMessage);

    if (this.errorCode !== headerPb.CommonError.Code.CODE_OK) {
      return callback(null, res);
    }

    let matchingEntry;

    for (const service of this.serviceEntries) {
      if (service.getName() === request.getServiceName()) {
        matchingEntry = service;
        break;
      }
    }

    if (matchingEntry) {
      res.setStatus(directoryPb.GetServiceEntryResponse.Status.STATUS_OK);
      res.setServiceEntry(matchingEntry);
    } else {
      res.setStatus(directoryPb.GetServiceEntryResponse.Status.STATUS_NONEXISTENT_SERVICE);
    }

    if (this.useUnspecifiedStatus) {
      res.setStatus(directoryPb.GetServiceEntryResponse.Status.STATUS_UNKNOWN);
    }

    return callback(null, res);
  }
}

function _setup() {
  const client = new DirectoryClient();
  const service = new MockDirectoryServicer();
  const server = helpers.setupClientAndService(client, {
    servicer: DirectoryServiceService,
    service: service,
  });
  return { client, service, server };
}

const _SERVICE_ENTRIES = [
  new directoryPb.ServiceEntry()
    .setName('foo')
    .setType('bosdyn.api.FooService')
    .setAuthority('foo.spot.robot')
    .setUserTokenRequired(true),
  new directoryPb.ServiceEntry().setName('bar').setType('bosdyn.api.BarService').setAuthority('bar.spot.robot'),
];

const _ENDPOINTS = [
  new directoryPb.Endpoint().setHostIp('1.2.3.4').setPort(52134),
  new directoryPb.Endpoint().setHostIp('6.7.8.9').setPort(52789),
];

function _addServiceDetails(service, nEntries) {
  for (const i of Array.from({ length: nEntries }, (a, ind) => ind)) {
    service.serviceEntries.push(_SERVICE_ENTRIES[i]);
    service.endpoints.push(_ENDPOINTS[i]);
  }
}

function _hasServiceName(name, directoryList) {
  return directoryList.map(e => e.getName()).includes(name);
}

test('test_list_empty', async () => {
  const { client, server } = _setup();

  const directoryList = await client.list();
  assert.ok(directoryList.length === 0);

  server.forceShutdown();
});

test('test_list_single_entry', async () => {
  const { client, server, service } = _setup();
  _addServiceDetails(service, 1);

  const directoryList = await client.list();
  assert.ok(directoryList.length === 1);
  assert.ok(_hasServiceName('foo', directoryList));

  server.forceShutdown();
});

test('test_list_multiple_entries', async () => {
  const { client, server, service } = _setup();
  _addServiceDetails(service, 2);

  const directoryList = await client.list();
  assert.ok(directoryList.length === 2);
  assert.ok(_hasServiceName('foo', directoryList));
  assert.ok(_hasServiceName('bar', directoryList));

  server.forceShutdown();
});

test('test_list_internal_error', async () => {
  const { client, server, service } = _setup();
  service.errorCode = headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR;
  service.errorMessage = 'Something is wrong';

  try {
    await client.list();
  } catch (err) {
    assert.ok(err instanceof InternalServerError);
  } finally {
    server.forceShutdown();
  }
});

test('test_get_entry_match', async () => {
  const { client, server, service } = _setup();
  _addServiceDetails(service, 2);

  const entry = await client.getEntry('foo');
  assert.ok(entry.getName() === 'foo');

  server.forceShutdown();
});

test('test_get_entry_miss', async () => {
  const { client, server, service } = _setup();
  _addServiceDetails(service, 2);

  try {
    await client.getEntry('not-a-match');
  } catch (err) {
    assert.ok(err instanceof NonexistentServiceError);
  } finally {
    server.forceShutdown();
  }
});

test('test_get_entry_unspecified', async () => {
  const { client, server, service } = _setup();
  _addServiceDetails(service, 2);
  service.useUnspecifiedStatus = true;

  try {
    await client.getEntry('foo');
  } catch (err) {
    assert.ok(err instanceof UnsetStatusError);
  } finally {
    server.forceShutdown();
  }
});
