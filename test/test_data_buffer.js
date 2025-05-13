'use strict';

const assert = require('node:assert');
const test = require('node:test');

const grpc = require('@grpc/grpc-js');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const struct = require('python-struct');

const helpers = require('./helpers');

const dataBufferPb = require('../src/bosdyn/api/data_buffer_pb');
const { DataBufferServiceClient, DataBufferServiceService } = require('../src/bosdyn/api/data_buffer_service_grpc_pb');
const timeSyncPb = require('../src/bosdyn/api/time_sync_pb');

const { DataBufferClient } = require('../src/bosdyn-client/data_buffer');
const { TimeSyncEndpoint } = require('../src/bosdyn-client/time_sync');

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
    const res = new dataBufferPb.RegisterSignalSchemaResponse().setSchemaId(1);
    helpers.addCommonHeader(res, request);
    callback(null, res);
  }
}

function _setup() {
  const timeSync = new TimeSyncEndpoint(null);
  timeSync._previousResponse = new timeSyncPb.TimeSyncUpdateResponse();
  timeSync.response.setState(
    new timeSyncPb.TimeSyncState()
      .setStatus(timeSyncPb.TimeSyncState.Status.STATUS_OK)
      .setBestEstimate(new timeSyncPb.TimeSyncEstimate().setClockSkew(new Duration())),
  );

  const client = new DataBufferClient();
  client._timesyncEndpoint = timeSync;
  const service = new MockDataBufferServicer();
  const server = helpers.setupClientAndService(client, {
    servicer: DataBufferServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_add_text_messages', async () => {
  const { client, server } = _setup();

  const textMsg = new dataBufferPb.TextMessage()
    .setSource('foo')
    .setLevel(dataBufferPb.TextMessage.Level.LEVEL_ERROR)
    .setMessage('hello world');

  await client.addTextMessages([textMsg]);

  assert.ok(client.channel.internalChannel.channelzInfoTracker.callTracker.callsSucceeded === 1);

  server.forceShutdown();
});

test('test_add_protobuf', async () => {
  const { client, server } = _setup();
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
  const { client, server } = _setup();
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
  const { client, server } = _setup();

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
  assert.ok(schemaId === 1);

  await client.addSignalTick(dataBytes, schemaId);
  assert.ok(client.channel.internalChannel.channelzInfoTracker.callTracker.callsSucceeded === 2);

  server.forceShutdown();
});
