'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const { DateTime } = require('luxon');

const { InvalidTokenError } = require('../bosdyn-client/auth');
const { RpcError } = require('../bosdyn-client/exceptions');
const { WriteFailedError } = require('../bosdyn-client/token_cache');
const { TokenManager } = require('../bosdyn-client/token_manager');

class MockRobot {
  constructor(token = null) {
    this.user_token = token;
    this.address = 'mock-address';
  }

  // eslint-disable-next-line require-await
  async authenticate(username, password) {
    if (username !== 'user' && password !== 'password') {
      throw new Error('mock exception');
    }

    this.user_token = 'mock-token-auth';
  }

  // eslint-disable-next-line require-await
  async authenticate_with_token() {
    this.user_token = 'mock-token-refresh';
  }
}

test('test_token_refresh', async () => {
  const robot = new MockRobot('mock-token-default');

  assert.strictEqual(robot.user_token, 'mock-token-default');

  const local = DateTime.now().minus({ hours: 2 });
  const tm = new TokenManager(robot, local);

  await sleep(100);
  assert.strictEqual(robot.user_token, 'mock-token-refresh');

  tm.stop();
});

test('test_token_refresh_rpc_error', async () => {
  const robot = new MockRobot('mock-token-default');

  // eslint-disable-next-line require-await
  async function fail_with_rpc() {
    fail_with_rpc.count += 1;
    throw new RpcError('Fake Rpc Error');
  }

  fail_with_rpc.count = 0;
  robot.authenticate_with_token = fail_with_rpc;
  assert.strictEqual(robot.user_token, 'mock-token-default');
  const local = DateTime.now().minus({ hours: 2 });
  const tm = new TokenManager(robot, local);
  await sleep(100);
  // If the TokenManager immediately retries, count ends up as several hundred.
  assert.strictEqual(fail_with_rpc.count, 1);
  assert.ok(tm.is_alive());
  tm.stop();
});

test('test_token_refresh_token_error', async () => {
  const robot = new MockRobot('mock-token-default');

  // eslint-disable-next-line require-await
  async function fail_with_rpc() {
    throw new InvalidTokenError(null);
  }

  robot.authenticate_with_token = fail_with_rpc;
  assert.strictEqual(robot.user_token, 'mock-token-default');
  const local = DateTime.now().minus({ hours: 2 });
  const tm = new TokenManager(robot, local);
  await sleep(100);
  assert.ok(tm.is_alive());
  tm.stop();
});

test('test_token_refresh_write_error', async () => {
  const robot = new MockRobot('mock-token-default');
  const original_auth = robot.authenticate_with_token.bind(robot);

  async function fail_write(token) {
    await original_auth(token);
    throw new WriteFailedError('Fake write failure');
  }

  robot.authenticate_with_token = fail_write;
  assert.strictEqual(robot.user_token, 'mock-token-default');
  const local = DateTime.now().minus({ hours: 2 });
  const tm = new TokenManager(robot, local);
  await sleep(100);
  assert.strictEqual(robot.user_token, 'mock-token-refresh');
  assert.ok(tm.is_alive());
  tm.stop();
});
