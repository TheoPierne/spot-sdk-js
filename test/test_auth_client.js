'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');

const authPb = require('../src/bosdyn/api/auth_pb');
const { AuthServiceClient, AuthServiceService } = require('../src/bosdyn/api/auth_service_grpc_pb');
const { AuthClient, InvalidLoginError, InvalidTokenError } = require('../src/bosdyn-client/auth');
const { TimedOutError, UnsetStatusError } = require('../src/bosdyn-client/exceptions');

class MockAuthClientService extends AuthServiceClient {
  static USERNAME = 'spam';
  static PASSWORD = 'eggs';
  static USERNAME_TO_TRIGGER_UNKNOWN = 'blackknight';
  static TOKEN_TO_REMINT = 'not-real-jwt';
  static RETURN_TOKEN = 'the-token-to-expect';
  static VALID_APP_TEST_TOKEN = 'valid-app-token';
  static INVALID_APP_TEST_TOKEN = 'invalid-app-token';
  static EXPIRED_APP_TEST_TOKEN = 'expired-app-token';

  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
  }

  async getAuthToken({ request }, callback) {
    const res = new authPb.GetAuthTokenResponse();
    helpers.addCommonHeader(res, request);

    if (request.getUsername()) {
      if (
        request.getUsername() === MockAuthClientService.USERNAME &&
        request.getPassword() === MockAuthClientService.PASSWORD
      ) {
        res.setToken(MockAuthClientService.RETURN_TOKEN).setStatus(authPb.GetAuthTokenResponse.Status.STATUS_OK);
      } else if (request.getUsername() === MockAuthClientService.USERNAME_TO_TRIGGER_UNKNOWN) {
        // pass
      } else {
        res.setStatus(authPb.GetAuthTokenResponse.Status.STATUS_INVALID_LOGIN);
      }
    } else if (request.getToken()) {
      if (request.getToken() === MockAuthClientService.TOKEN_TO_REMINT) {
        res.setToken(MockAuthClientService.RETURN_TOKEN).setStatus(authPb.GetAuthTokenResponse.Status.STATUS_OK);
      } else {
        res.setStatus(authPb.GetAuthTokenResponse.Status.STATUS_INVALID_TOKEN);
      }
    }

    if (this._rpcDelay > 0) {
      await sleep(this._rpcDelay);
    }

    callback(null, res);
  }
}

function _setup(rpcDelay = 0) {
  const client = new AuthClient();
  const service = new MockAuthClientService(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: AuthServiceService,
    service: service,
  });
  return { client, service, server };
}

test.beforeEach(async () => {
  // Sleep 100ms before each test to wait freeing server port
  await sleep(100);
});

test('test_valid', async () => {
  const { client, server } = _setup();
  const token = await client.auth(MockAuthClientService.USERNAME, MockAuthClientService.PASSWORD);
  assert.ok(token === MockAuthClientService.RETURN_TOKEN);
  server.forceShutdown();
});

test('test_invalid', async () => {
  const { client, server } = _setup();
  try {
    await client.auth('parrot', '');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof InvalidLoginError);
    assert.ok(err.response instanceof authPb.GetAuthTokenResponse);
  } finally {
    server.forceShutdown();
  }
});

test('test_timeout', () => {
  const timeout = 100;
  const { client, server } = _setup(timeout * 2);
  assert
    .rejects(async () => {
      await client.auth(MockAuthClientService.USERNAME, MockAuthClientService.PASSWORD, { timeout });
    }, TimedOutError)
    .then(() => server.forceShutdown());
});

test('test_unset', async () => {
  const { client, server } = _setup();
  try {
    await client.auth(MockAuthClientService.USERNAME_TO_TRIGGER_UNKNOWN, '');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof UnsetStatusError);
    assert.ok(err.response instanceof authPb.GetAuthTokenResponse);
  } finally {
    server.forceShutdown();
  }
});

test('test_token_valid', async () => {
  const { client, server } = _setup();
  const token = await client.authWithToken(MockAuthClientService.TOKEN_TO_REMINT);
  assert.ok(token === MockAuthClientService.RETURN_TOKEN);
  server.forceShutdown();
});

test('test_token_invalid', () => {
  const { client, server } = _setup();
  assert
    .rejects(async () => {
      await client.authWithToken('not-a-valid-token');
    }, InvalidTokenError)
    .then(() => server.forceShutdown());
});

test('test_token_timeout', () => {
  const timeout = 100;
  const { client, server } = _setup(timeout * 2);
  assert
    .rejects(async () => {
      await client.authWithToken(MockAuthClientService.TOKEN_TO_REMINT, { timeout });
    }, TimedOutError)
    .then(() => server.forceShutdown());
});
