'use strict';

const assert = require('node:assert');
const test = require('node:test');

const { Client, credentials } = require('@grpc/grpc-js');
const { Message } = require('google-protobuf');

const { BaseClient } = require('../src/bosdyn-client/common');

class ProcessedResponse extends Message {
  serializeBinary() {
    return new Uint8Array();
  }

  toObject() {
    return {};
  }
}

class Request extends Message {
  serializeBinary() {
    return new Uint8Array();
  }

  toObject() {
    return {};
  }
}

class Response extends Message {
  constructor() {
    super();
    this.processedResponse = new ProcessedResponse();
    this.path = 'MockStub.rpcMethod';
  }

  toObject() {
    return {};
  }

  serializeBinary() {
    return new Uint8Array();
  }

  getProcessedResponse() {
    return this.processedResponse;
  }
}

class MockStub extends Client {
  rpcMethod(call, options, callback) {
    return callback(null, new Response());
  }
}

function stubCreationFunc() {
  return new MockStub('127.0.0.1:12', credentials.createInsecure());
}

// eslint-disable-next-line no-unused-vars, no-empty-function
function _testCalls() {}

test('test_base_client', async () => {
  const client = new BaseClient(stubCreationFunc);
  client.channel = { internalChannel: { target: {} } };

  function valueFromResponse(response) {
    return response.getProcessedResponse();
  }

  // Test sync
  let response = await client.call(client._stub.rpcMethod, new Request());
  assert.ok(response instanceof Response);

  response = await client.call(client._stub.rpcMethod, new Request(), valueFromResponse);
  assert.ok(response instanceof ProcessedResponse);
});
