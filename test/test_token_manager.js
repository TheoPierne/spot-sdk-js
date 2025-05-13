'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const { DateTime } = require('luxon');

const { InvalidTokenError } = require('../src/bosdyn-client/auth');
const { RpcError } = require('../src/bosdyn-client/exceptions');
const { WriteFailedError } = require('../src/bosdyn-client/token_cache');
const { TokenManager } = require('../src/bosdyn-client/token_manager');

class MockRobot {
  constructor(token = null) {
    this.userToken = token;
    this.address = 'mock-address';
  }

  // eslint-disable-next-line require-await
  async authenticate(username, password) {
    if (username !== 'user' && password !== 'password') {
      throw new Error('mock exception');
    }

    this.userToken = 'mock-token-auth';
  }

  // eslint-disable-next-line require-await
  async authenticateWithToken() {
    this.userToken = 'mock-token-refresh';
  }
}

test('test_token_refresh', async () => {
  const robot = new MockRobot('mock-token-default');

  assert.strictEqual(robot.userToken, 'mock-token-default');

  const local = DateTime.now().minus({ hours: 2 });
  const tm = new TokenManager(robot, local);

  await sleep(100);
  assert.strictEqual(robot.userToken, 'mock-token-refresh');

  tm.stop();
});

test('test_token_refresh_rpc_error', async () => {
  const robot = new MockRobot('mock-token-default');

  // eslint-disable-next-line require-await
  async function failWithRpc() {
    failWithRpc.count += 1;
    throw new RpcError('Fake Rpc Error');
  }

  failWithRpc.count = 0;
  robot.authenticateWithToken = failWithRpc;
  assert.strictEqual(robot.userToken, 'mock-token-default');
  const local = DateTime.now().minus({ hours: 2 });
  const tm = new TokenManager(robot, local);
  await sleep(100);
  // If the TokenManager immediately retries, count ends up as several hundred.
  assert.strictEqual(failWithRpc.count, 1);
  assert.ok(tm.isAlive());
  tm.stop();
});

test('test_token_refresh_token_error', async () => {
  const robot = new MockRobot('mock-token-default');

  // eslint-disable-next-line require-await
  async function failWithRpc() {
    throw new InvalidTokenError(null);
  }

  robot.authenticateWithToken = failWithRpc;
  assert.strictEqual(robot.userToken, 'mock-token-default');
  const local = DateTime.now().minus({ hours: 2 });
  const tm = new TokenManager(robot, local);
  await sleep(100);
  assert.ok(tm.isAlive());
  tm.stop();
});

test('test_token_refresh_write_error', async () => {
  const robot = new MockRobot('mock-token-default');
  const originalAuth = robot.authenticateWithToken.bind(robot);

  async function failWrite(token) {
    await originalAuth(token);
    throw new WriteFailedError('Fake write failure');
  }

  robot.authenticateWithToken = failWrite;
  assert.strictEqual(robot.userToken, 'mock-token-default');
  const local = DateTime.now().minus({ hours: 2 });
  const tm = new TokenManager(robot, local);
  await sleep(100);
  assert.strictEqual(robot.userToken, 'mock-token-refresh');
  assert.ok(tm.isAlive());
  tm.stop();
});
