'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const test = require('node:test');

const mapPb = require('../src/bosdyn/api/graph_nav/map_pb');
const robotIdPb = require('../src/bosdyn/api/robot_id_pb');
const {
  chunkSerialized,
  chunkMessage,
  serializedFromChunks,
  parseFromChunks,
} = require('../src/bosdyn-client/data_chunk');

// Test round-trip of binary data.
test('test_serialized_round_trip', () => {
  const inputSerialized = Buffer.from(Array.from({ length: 1000 }, (_, i) => '\x00'.repeat(i)).join(' ')).toString();
  const chunks = [...chunkSerialized(inputSerialized, 100)];
  const outputSerialized = serializedFromChunks(chunks).toString();
  assert.strictEqual(inputSerialized, outputSerialized);
});

// Test that small data is a single chunk.
test('test_single_chunk', () => {
  const inputSerialized = Buffer.from('meow', 'binary');
  const chunks = [...chunkSerialized(inputSerialized, 100)];
  assert.strictEqual(chunks.length, 1);
  const outputSerialized = serializedFromChunks(chunks).toString();
  assert.strictEqual(inputSerialized.toString(), outputSerialized);
});

// Test that no data results in no chunks.
test('test_empty_data', () => {
  const inputSerialized = Buffer.from('', 'binary');
  const chunks = [...chunkSerialized(inputSerialized, 100)];
  assert.strictEqual(chunks.length, 0);
  const outputSerialized = serializedFromChunks(chunks).toString();
  assert.strictEqual(inputSerialized.toString(), outputSerialized);
});

// Test using that things work with a message.
test('test_messages', () => {
  const robotId = new robotIdPb.RobotId().setNickname('A'.repeat(1000));
  const message = new mapPb.WaypointSnapshot().setId('id').setRobotId(robotId);
  const out = parseFromChunks([...chunkMessage(message, 100)], mapPb.WaypointSnapshot);

  assert.strictEqual(JSON.stringify(out.toObject()), JSON.stringify(message.toObject()));
});
