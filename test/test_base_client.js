'use strict';

const assert = require('node:assert');
const test = require('node:test');

const { BaseClient } = require('../bosdyn-client/common');

class ProcessedResponse {
  toObject() {
    return {};
  }
}

class Response {
  constructor() {
    this.processed_response = new ProcessedResponse();
    this.done = true;
    this.path = 'MockStub.rpc_method';
  }

  // eslint-disable-next-line no-empty-function
  add_done_callback() {}

  toObject() {
    return {};
  }

  getProcessedResponse() {
    return Promise.resolve(this.processed_response);
  }

  exception() {
    return null;
  }

  done() {
    return true;
  }

  result() {
    return this;
  }
}

class MockStub {
  get rpc_method() {
    return new Response();
  }
}

function stub_creation_func() {
  return new MockStub();
}

// eslint-disable-next-line no-unused-vars, no-empty-function
function _test_calls() {}

test('test_base_client', async () => {
  const client = new BaseClient(stub_creation_func);
  client.channel = { internalChannel: { target: {} } };
  const args = { disable_value_handler: true };

  function value_from_response(response) {
    return response.getProcessedResponse();
  }

  // Test sync
  let response = await client.call(client._stub.rpc_method, null);
  assert.ok(response instanceof Response);

  response = await client.call(client._stub.rpc_method, null, value_from_response);
  assert.ok(response instanceof ProcessedResponse);

  response = await client.call(client._stub.rpc_method, null, value_from_response, null, args);
  assert.ok(response instanceof Response);
});
