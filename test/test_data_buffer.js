'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const struct = require('python-struct');
const winston = require('winston');

const helpers = require('./helpers');

const dataBufferPb = require('../src/bosdyn/api/data_buffer_pb');
const { DataBufferServiceClient, DataBufferServiceService } = require('../src/bosdyn/api/data_buffer_service_grpc_pb');
const timeSyncPb = require('../src/bosdyn/api/time_sync_pb');

const { RPC_METHOD } = require('../src/bosdyn-client/common');
const {
  DataBufferClient,
  InvalidArgument,
  LoggingHandler,
  isNotRpc,
  isNotTextLog,
} = require('../src/bosdyn-client/data_buffer');
const { RpcError } = require('../src/bosdyn-client/exceptions');
const { LoggerUtil } = require('../src/bosdyn-client/logger_util');
const { NotEstablishedError, TimeSyncEndpoint } = require('../src/bosdyn-client/time_sync');
const { setClockSource, systemTimeSec } = require('../src/bosdyn-core/util');

class MockDataBufferServicer extends DataBufferServiceClient {
  constructor() {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
  }

  recordTextMessages({ request }, callback) {
    const res = new dataBufferPb.RecordTextMessagesResponse();
    helpers.addCommonHeader(res, request);
    callback(null, res);
  }

  recordDataBlobs({ request }, callback) {
    const res = new dataBufferPb.RecordDataBlobsResponse();
    helpers.addCommonHeader(res, request);
    callback(null, res);
  }

  recordEvents({ request }, callback) {
    const res = new dataBufferPb.RecordEventsResponse();
    helpers.addCommonHeader(res, request);
    callback(null, res);
  }

  recordSignalTicks({ request }, callback) {
    const res = new dataBufferPb.RecordSignalTicksResponse();
    helpers.addCommonHeader(res, request);
    callback(null, res);
  }

  registerSignalSchema({ request }, callback) {
    // An uint64 string ([jstype = JS_STRING], see build.js).
    const res = new dataBufferPb.RegisterSignalSchemaResponse().setSchemaId('1');
    helpers.addCommonHeader(res, request);
    callback(null, res);
  }
}

async function _setup(service = new MockDataBufferServicer()) {
  const timeSync = new TimeSyncEndpoint(null);
  timeSync._previousResponse = new timeSyncPb.TimeSyncUpdateResponse();
  timeSync.response.setState(
    new timeSyncPb.TimeSyncState()
      .setStatus(timeSyncPb.TimeSyncState.Status.STATUS_OK)
      .setBestEstimate(new timeSyncPb.TimeSyncEstimate().setClockSkew(new Duration())),
  );

  const client = new DataBufferClient();
  client._timesyncEndpoint = timeSync;
  const server = await helpers.setupClientAndService(client, {
    servicer: DataBufferServiceService,
    service,
  });
  return { client, service, server };
}

test('test_add_text_messages', async () => {
  const { client, server } = await _setup();

  const textMsg = new dataBufferPb.TextMessage()
    .setSource('foo')
    .setLevel(dataBufferPb.TextMessage.Level.LEVEL_ERROR)
    .setMessage('hello world');

  await client.addTextMessages([textMsg]);

  assert.ok(client.channel.internalChannel.channelzInfoTracker.callTracker.callsSucceeded === 1);

  server.forceShutdown();
});

test('test_add_protobuf', async () => {
  const { client, server } = await _setup();
  const proto = new Timestamp().setSeconds(1).setNanos(123456789);

  // Asynchronous data buffer writes
  await client.addProtobuf(proto);
  assert.ok(client.channel.internalChannel.channelzInfoTracker.callTracker.callsSucceeded === 1);

  // Synchronous data buffer writes
  await client.addProtobuf(proto, undefined, undefined, true);
  assert.ok(client.channel.internalChannel.channelzInfoTracker.callTracker.callsSucceeded === 2);

  server.forceShutdown();
});

test('test_add_events', async () => {
  const { client, server } = await _setup();
  const event = new dataBufferPb.Event()
    .setType('test-event')
    .setDescription('test_add_events')
    .setSource('node:test')
    .setId('60c1b6a2-851b-4aed-a546-8702a6bebc43')
    .setStartTime(Timestamp.fromDate(new Date()))
    .setEndTime(Timestamp.fromDate(new Date()));

  await client.addEvents([event]);
  assert.ok(client.channel.internalChannel.channelzInfoTracker.callTracker.callsSucceeded === 1);

  server.forceShutdown();
});

test('test_signal_log', async () => {
  const { client, server } = await _setup();

  const vars = [
    new dataBufferPb.SignalSchema.Variable()
      .setName('time')
      .setType(dataBufferPb.SignalSchema.Variable.Type.TYPE_UINT64)
      .setIsTime(true),
    new dataBufferPb.SignalSchema.Variable()
      .setName('val')
      .setType(dataBufferPb.SignalSchema.Variable.Type.TYPE_FLOAT64)
      .setIsTime(false),
  ];

  const dataBytes = struct.pack('<Qd', 0, 3.14);
  const schemaId = await client.registerSignalSchema(vars, 'test_schema');
  assert.ok(client.channel.internalChannel.channelzInfoTracker.callTracker.callsSucceeded === 1);
  assert.ok(schemaId === '1');

  await client.addSignalTick(dataBytes, schemaId);
  assert.ok(client.channel.internalChannel.channelzInfoTracker.callTracker.callsSucceeded === 2);

  server.forceShutdown();
});

// ---------------------------------------------------------------------------------------------------------------
// LoggingHandler: the tests of Python (a winston logger instead of a logging.Logger), then the ones of the JS port.
// ---------------------------------------------------------------------------------------------------------------

const SERVICE_NAME = 'my-service';

/** Waits until predicate() is true (the polling loops of Python, which the timeouts of pytest end). */
async function waitUntil(predicate, pollMs = 10, timeoutMs = 5000) {
  const deadline = Date.now() + timeoutMs;
  while (!predicate()) {
    if (Date.now() > deadline) throw new Error(`Timed out waiting until ${predicate}`);
    await sleep(pollMs);
  }
}

/** A fake API client for sending log messages (mock.Mock() in Python): its calls, and the error of the next ones. */
function mockLogClient() {
  const client = {
    calls: [],
    sideEffect: null,
    addTextMessages(textMessages, args) {
      client.calls.push([textMessages, args]);
      return client.sideEffect === null ? Promise.resolve() : Promise.reject(client.sideEffect);
    },
  };
  return client;
}

/** The handler and the logger of the fixtures of Python, at the level info. */
function handlerAndLogger(logClient, options = {}) {
  const handler = new LoggingHandler(SERVICE_NAME, logClient, { level: 'info', ...options });
  const logger = winston.createLogger({ levels: LoggerUtil.levels, level: 'info', transports: [handler] });
  return { handler, logger };
}

// The winston levels (the ones of the loggers of the SDK), and what we expect the proto version to be.
const RECORD_AND_PROTO_LEVELS = [
  ['error', dataBufferPb.TextMessage.Level.LEVEL_ERROR],
  ['warn', dataBufferPb.TextMessage.Level.LEVEL_WARN],
  ['help', dataBufferPb.TextMessage.Level.LEVEL_INFO],
  ['data', dataBufferPb.TextMessage.Level.LEVEL_INFO],
  ['info', dataBufferPb.TextMessage.Level.LEVEL_INFO],
  ['debug', dataBufferPb.TextMessage.Level.LEVEL_DEBUG],
  ['prompt', dataBufferPb.TextMessage.Level.LEVEL_DEBUG],
  ['verbose', dataBufferPb.TextMessage.Level.LEVEL_DEBUG],
  ['input', dataBufferPb.TextMessage.Level.LEVEL_DEBUG],
  ['silly', dataBufferPb.TextMessage.Level.LEVEL_DEBUG],
];

test('test_handler_simple: a single emit/flush should create the expected message', async () => {
  for (const [recordLevel, protoLevel] of RECORD_AND_PROTO_LEVELS) {
    const logClient = mockLogClient();
    const { handler, logger } = handlerAndLogger(logClient);
    // Set level on handler and logger.
    handler.level = recordLevel;
    logger.level = recordLevel;

    // Log our message, at a specific time.
    const msg = 'hello world';
    setClockSource(() => 12345.5);
    try {
      logger.log(recordLevel, msg);
      await handler.close();
    } finally {
      setClockSource(systemTimeSec);
    }

    // Pull the single TextMessage out of the mock client and make sure it looks right.
    const textLogProtoList = logClient.calls.at(-1)[0];
    assert.strictEqual(textLogProtoList.length, 1, recordLevel);
    assert.strictEqual(textLogProtoList[0].getMessage(), msg);
    assert.strictEqual(textLogProtoList[0].getLevel(), protoLevel, recordLevel);
    assert.strictEqual(textLogProtoList[0].getSource(), SERVICE_NAME);
    assert.deepStrictEqual(textLogProtoList[0].getTimestamp().toObject(), { seconds: 12345, nanos: 500_000_000 });
    // The RPC timeout of 1 second.
    assert.deepStrictEqual(logClient.calls.at(-1)[1], { timeout: 1000 });
  }
});

test('test_handler_autoflush: the handler should automatically flush messages', { timeout: 10_000 }, async () => {
  const logClient = mockLogClient();
  const { handler, logger } = handlerAndLogger(logClient);
  const msg = 'boo';
  handler.msgNumLimit = 2;
  // Unlike Python, only the number limit can send them (the age limit of 1 second would send them too).
  handler.msgAgeLimit = 60;
  logger.info(msg);
  // Be sure the message was inserted onto the queue.
  await waitUntil(() => handler._msgQueue.length !== 0);
  logger.info(msg);

  // Wait for queued messages to clear
  await waitUntil(() => handler._msgQueue.length === 0);

  // We should have sent one message.
  assert.strictEqual(logClient.calls.length, 1);
  await handler.close();
});

test('test_handler_multi_message: a large number of sequential messages', { timeout: 10_000 }, async () => {
  for (const numMsgs of [100, 10, 50, 2]) {
    const logClient = mockLogClient();
    const { handler, logger } = handlerAndLogger(logClient);
    const msg = 'so many messages!';

    const inFirstBatch = Math.floor(numMsgs / 2);
    for (let i = 0; i < inFirstBatch; i++) logger.info(msg);
    // Encourage one additional transaction.
    await sleep(handler._flushEventWaitTime * 1.1 * 1000);
    for (let i = 0; i < numMsgs - inFirstBatch; i++) logger.info(msg);
    await handler.close();

    // We should have all of the messages passed as regular arguments.
    let numMsgsSent = 0;
    for (const [batchedMsgs] of logClient.calls) {
      for (const textMsgProto of batchedMsgs) assert.strictEqual(textMsgProto.getMessage(), msg);
      numMsgsSent += batchedMsgs.length;
    }
    assert.strictEqual(numMsgsSent, numMsgs);
  }
});

test(
  'test_handler_failure: error messages and the failed log message when the client fails',
  { timeout: 10_000 },
  async () => {
    const logClient = mockLogClient();
    const { handler, logger } = handlerAndLogger(logClient);
    const msg = 'This should fail';
    const exceptionText = 'this is real bad you guys';
    logClient.sideEffect = new Error(exceptionText);
    const fallbackMsgs = [];
    handler.fallbackLog = fallbackMsg => fallbackMsgs.push(fallbackMsg);
    handler._dumpMsgCount = 1;
    handler.flush();
    logger.info(msg);
    // Expect to get two fallback messages because of that log statement.
    await waitUntil(() => fallbackMsgs.length >= 2);
    logClient.sideEffect = null;
    await handler.close();

    // We should have gotten four messages.
    assert.strictEqual(fallbackMsgs.length, 4, `Got these messages:\n${fallbackMsgs.join('\n')}`);
    // First message includes the exception.
    assert.ok(fallbackMsgs[0].includes(exceptionText));
    // Second indicates the send loop itself, by class and function name.
    assert.ok(fallbackMsgs[1].includes(handler.constructor.name));
    assert.ok(fallbackMsgs[1].includes('_runSendThread'));
    // Third is the warning about messages being dumped.
    assert.strictEqual(fallbackMsgs[2], 'Dumping 1 messages!');
    // Fourth is the actual message itself, in TextMessage form.
    assert.strictEqual(fallbackMsgs[3].getMessage(), msg);
  },
);

test('test_handler_timesync: a TimeSyncEndpoint without an established timesync cannot be used', () => {
  const mockEp = { hasEstablishedTimeSync: false };
  assert.throws(() => new LoggingHandler(SERVICE_NAME, mockLogClient(), { timeSyncEndpoint: mockEp }), InvalidArgument);
});

test('the LoggingHandler timestamps the messages in robot time with its TimeSyncEndpoint', async () => {
  const robotTime = new Timestamp().setSeconds(99).setNanos(1);
  let established = true;
  const endpoint = {
    hasEstablishedTimeSync: true,
    robotTimestampFromLocalSecs() {
      if (!established) throw new NotEstablishedError('Have not established time sync yet.');
      return robotTime;
    },
  };
  const logClient = mockLogClient();
  const { handler, logger } = handlerAndLogger(logClient, { timeSyncEndpoint: endpoint });
  logger.info('synced');
  established = false;
  logger.warn('lost');
  await handler.close();

  const [synced, lost] = logClient.calls[0][0];
  assert.strictEqual(synced.getTimestamp(), robotTime);
  // If timestamp is not set in the proto, data-buffer will timestamp it on receipt.
  assert.strictEqual(lost.getMessage(), '(No time sync!): lost');
  assert.strictEqual(lost.hasTimestamp(), false);
});

test(
  'the LoggingHandler retries after an error of the SDK, stops after 5 failed sends, and restarts',
  { timeout: 10_000 },
  async () => {
    const logClient = mockLogClient();
    const { handler, logger } = handlerAndLogger(logClient, { msgAgeLimit: 0 });
    handler._flushEventWaitTime = 0.005;
    const fallbackMsgs = [];
    handler.fallbackLog = fallbackMsg => fallbackMsgs.push(fallbackMsg);
    logClient.sideEffect = new RpcError(new Error('unavailable'), 'The robot is gone');
    logger.info('kept');
    await handler._sendThread;

    // 5 failed sends in a row, of 2 attempts each: the loop stopped, the message stays in the queue (below 20).
    assert.strictEqual(handler.isThreadAlive(), false);
    assert.strictEqual(logClient.calls.length, 10);
    assert.strictEqual(handler._numFailedSends, 5);
    assert.strictEqual(fallbackMsgs.length, 10);
    assert.ok(fallbackMsgs.every(fallbackMsg => fallbackMsg.startsWith('Error:\nRpcError: The robot is gone')));
    assert.strictEqual(handler._msgQueue.length, 1);

    const other = mockLogClient();
    handler.restart(other);
    assert.throws(() => handler.restart(other), assert.AssertionError);
    await waitUntil(() => handler._msgQueue.length === 0, 5);
    assert.strictEqual(other.calls[0][0][0].getMessage(), 'kept');
    await handler.close();
    assert.strictEqual(handler.isThreadAlive(), false);
  },
);

test('the LoggingHandler is closed once when winston removes it during close(), which does not throw', async () => {
  const logClient = mockLogClient();
  const { handler, logger } = handlerAndLogger(logClient);
  logger.info('once');
  // Winston calls close() when the transport is removed.
  logger.remove(handler);
  await handler.close();
  await handler.close();
  assert.strictEqual(logClient.calls.length, 1);
  assert.strictEqual(logClient.calls[0][0].length, 1);

  // An error which is not an error of the SDK is not thrown by close(): the messages are dumped.
  const failing = mockLogClient();
  failing.sideEffect = new TypeError('broken client');
  const other = handlerAndLogger(failing);
  const fallbackMsgs = [];
  other.handler.fallbackLog = fallbackMsg => fallbackMsgs.push(fallbackMsg);
  other.logger.info('lost');
  await other.handler[Symbol.asyncDispose]();
  assert.match(fallbackMsgs[0], /^Unexpected exception!\nTypeError: broken client/);
  assert.strictEqual(fallbackMsgs[1], 'Dumping 1 messages!');
  assert.strictEqual(fallbackMsgs[2].getMessage(), 'lost');
});

test('the LoggingHandler sends the messages of the loggers of the SDK without the colors of the console', async () => {
  const logClient = mockLogClient();
  const logger = LoggerUtil.getLogger('test_data_buffer_colors', 'info');
  logger.transports[0].silent = true;
  const handler = new LoggingHandler(SERVICE_NAME, logClient);
  logger.add(handler);
  logger.info('an object', { speed: 1 });
  logger.error(new Error('boom'));
  await handler.close();
  logger.remove(handler);
  const [withObject, withError] = logClient.calls[0][0];
  assert.strictEqual(withObject.getMessage(), 'an object { speed: 1 }');
  assert.strictEqual(withError.getLevel(), dataBufferPb.TextMessage.Level.LEVEL_ERROR);
  assert.match(withError.getMessage(), /^boom\nError: boom\n {4}at /);
});

class RecordingDataBufferServicer extends MockDataBufferServicer {
  constructor() {
    super();
    this.received = [];
  }

  recordTextMessages(call, callback) {
    this.received.push(call.request.getTextMessagesList().map(textMessage => textMessage.getMessage()));
    super.recordTextMessages(call, callback);
  }
}

/** Runs fn with the handler on the logger of the client, at the level debug (the RPCs are logged). */
async function withDebugHandler(client, handler, fn) {
  const { logger } = client;
  const [consoleTransport] = logger.transports;
  const level = logger.level;
  consoleTransport.silent = true;
  logger.level = 'debug';
  logger.add(handler);
  try {
    await fn(logger);
  } finally {
    logger.remove(handler);
    logger.level = level;
    consoleTransport.silent = false;
  }
}

test('the LoggingHandler does not send the logs of its RPCs, nor the ones of the RPCs with skipRpcs', async () => {
  const event = new dataBufferPb.Event().setType('test-event').setSource('node:test');
  const { client, service, server } = await _setup(new RecordingDataBufferServicer());
  const handler = new LoggingHandler(SERVICE_NAME, client);
  await withDebugHandler(client, handler, async logger => {
    logger.info('hello');
    handler.flush();
    await waitUntil(() => service.received.length !== 0);
    await client.addEvents([event]);
    await handler.close();
  });
  // The logs of the RecordTextMessages calls were not queued (is_not_text_log), the ones of the RecordEvents call were.
  assert.deepStrictEqual(service.received[0], ['hello']);
  assert.strictEqual(service.received.length, 2);
  assert.ok(service.received[1].length > 0);
  assert.ok(service.received[1].every(message => message.includes(' /bosdyn.api.DataBufferService/RecordEvents ')));
  assert.strictEqual(handler._msgQueue.length, 0);

  service.received.length = 0;
  const skipping = new LoggingHandler(SERVICE_NAME, client, { skipRpcs: true });
  await withDebugHandler(client, skipping, async logger => {
    logger.info('hello');
    await client.addEvents([event]);
    await skipping.close();
  });
  assert.deepStrictEqual(service.received, [['hello']]);

  // The filters, on the infos of the logs of the RPCs.
  const textLog = { message: 'blocking request', [RPC_METHOD]: '/bosdyn.api.DataBufferService/RecordTextMessages' };
  const eventsLog = { message: 'blocking request', [RPC_METHOD]: '/bosdyn.api.DataBufferService/RecordEvents' };
  const other = { message: 'hello' };
  assert.deepStrictEqual([isNotTextLog(textLog), isNotTextLog(eventsLog), isNotTextLog(other)], [false, true, true]);
  assert.deepStrictEqual([isNotRpc(textLog), isNotRpc(eventsLog), isNotRpc(other)], [false, false, true]);
  server.forceShutdown();
});
