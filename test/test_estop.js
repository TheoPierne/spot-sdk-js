'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');
const estopPb = require('../src/bosdyn/api/estop_pb');
const { EstopServiceClient, EstopServiceService } = require('../src/bosdyn/api/estop_service_grpc_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const {
  EstopClient,
  responseFromChallenge,
  IncorrectChallengeResponseError,
  EndpointUnknownError,
  EstopEndpoint,
} = require('../src/bosdyn-client/estop');
const { InternalServerError } = require('../src/bosdyn-client/exceptions');

class MockEstopServicer extends EstopServiceClient {
  static VALID_STOP_LEVEL = 1;
  static NAME_FOR_ENDPOINT_UNKNOWN = 'mystery';
  static NAME_FOR_SERVER_ERROR = 'little-bobby-drop-tables';
  static STATUSES_THAT_DO_NOT_PROVIDE_CHALLENGE = [estopPb.EstopCheckInResponse.Status.STATUS_UNKNOWN];

  constructor(rpcDelay = 0) {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this._rpcDelay = rpcDelay;
    this._challenge = 0;
  }

  async estopCheckIn({ request }, callback) {
    const res = new estopPb.EstopCheckInResponse();
    res.setHeader(
      new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK)),
    );
    if (request.getEndpoint().getName() === MockEstopServicer.NAME_FOR_SERVER_ERROR) {
      res.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR);
    } else if (request.getEndpoint().getName() === MockEstopServicer.NAME_FOR_ENDPOINT_UNKNOWN) {
      res.setStatus(estopPb.EstopCheckInResponse.Status.STATUS_ENDPOINT_UNKNOWN);
    } else if (!request.getChallenge()) {
      res.setStatus(estopPb.EstopCheckInResponse.Status.STATUS_INCORRECT_CHALLENGE_RESPONSE);
    } else if (request.getResponse() !== responseFromChallenge(request.getChallenge()).toString(10)) {
      res.setStatus(estopPb.EstopCheckInResponse.Status.STATUS_INCORRECT_CHALLENGE_RESPONSE);
    } else {
      res.setStatus(estopPb.EstopCheckInResponse.Status.STATUS_OK);
    }

    if (!MockEstopServicer.STATUSES_THAT_DO_NOT_PROVIDE_CHALLENGE.includes(res.getStatus())) {
      if (request.getChallenge() !== null) {
        this._challenge = request.getChallenge() + 1;
      } else {
        this._challenge = 0;
      }
      res.setChallenge(this._challenge);
    }

    if (this._rpcDelay > 0) {
      await sleep(this._rpcDelay);
    }

    callback(null, res);
  }
}

function _setup(rpcDelay = 0, endpointName = 'test-endpoint') {
  const client = new EstopClient();
  const service = new MockEstopServicer(rpcDelay);
  const server = helpers.setupClientAndService(client, {
    servicer: EstopServiceService,
    service: service,
  });
  const endpoint = new EstopEndpoint(client, endpointName, 1000);
  return { client, service, server, endpoint };
}

test('test_check_in', async () => {
  const { client, endpoint, server } = _setup();
  const challenge = 100;
  const response = responseFromChallenge(challenge).toString(10);
  const res = await client.checkIn(MockEstopServicer.VALID_STOP_LEVEL, endpoint, challenge, response);
  assert.ok(res === challenge + 1);
  server.forceShutdown();
});

test('test_check_in_incorrect_1', async () => {
  const { client, endpoint, server } = _setup();
  const challenge = 22;
  const response = (responseFromChallenge(challenge) + 2n).toString(10);

  try {
    await client.checkIn(MockEstopServicer.VALID_STOP_LEVEL, endpoint, challenge, response);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof IncorrectChallengeResponseError);
  } finally {
    server.forceShutdown();
  }
});

test('test_check_in_incorrect_2', async () => {
  const { client, endpoint, server } = _setup();
  const challenge = null;
  const response = null;

  try {
    await client.checkIn(MockEstopServicer.VALID_STOP_LEVEL, endpoint, challenge, response);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof IncorrectChallengeResponseError);
  } finally {
    server.forceShutdown();
  }
});

test('test_check_in_incorrect_3', async () => {
  const { client, endpoint, server } = _setup();
  const challenge = null;
  const response = null;

  try {
    await client.checkIn(MockEstopServicer.VALID_STOP_LEVEL, endpoint, challenge, response, true);
  } catch (err) {
    assert.fail(err);
  } finally {
    server.forceShutdown();
  }
});

test('test_server_error_check_in', async () => {
  const { client, endpoint, server } = _setup(0, MockEstopServicer.NAME_FOR_SERVER_ERROR);
  const challenge = 100;
  const response = responseFromChallenge(challenge).toString(10);

  try {
    await client.checkIn(MockEstopServicer.VALID_STOP_LEVEL, endpoint, challenge, response, true);
  } catch (err) {
    assert.ok(err instanceof InternalServerError);
  } finally {
    server.forceShutdown();
  }
});

test('test_endpoint_unknown_check_in', async () => {
  const { client, endpoint, server } = _setup(0, MockEstopServicer.NAME_FOR_ENDPOINT_UNKNOWN);
  const challenge = 100;
  const response = responseFromChallenge(challenge).toString(10);

  try {
    await client.checkIn(MockEstopServicer.VALID_STOP_LEVEL, endpoint, challenge, response, true);
  } catch (err) {
    assert.ok(err instanceof EndpointUnknownError);
  } finally {
    server.forceShutdown();
  }
});

test('test_challenge', async () => {
  const { endpoint, server } = _setup();
  const oldChallenge = 0;

  endpoint.setChallenge(oldChallenge);
  await endpoint.allow();

  // We should have gotten the next challenge from that RPC.
  assert.ok(oldChallenge + 1 === endpoint.getChallenge());
  server.forceShutdown();
});

test('test_challenge_exc', async () => {
  const { endpoint, server } = _setup(0, MockEstopServicer.NAME_FOR_ENDPOINT_UNKNOWN);
  const oldChallenge = 0;
  endpoint.setChallenge(oldChallenge);

  try {
    await endpoint.allow();
  } catch (err) {
    assert.ok(err instanceof EndpointUnknownError);
  } finally {
    server.forceShutdown();
  }

  assert.ok(oldChallenge + 1 === endpoint.getChallenge());
});
