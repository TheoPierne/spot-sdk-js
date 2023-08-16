'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const test = require('node:test');

const map_pb = require('../bosdyn/api/graph_nav/map_pb');
const robot_id_pb = require('../bosdyn/api/robot_id_pb');
const {
  chunk_serialized,
  chunk_message,
  serialized_from_chunks,
  parse_from_chunks,
} = require('../bosdyn-client/data_chunk');

// Test round-trip of binary data.
test('test_serialized_round_trip', () => {
  const input_serialized = Buffer.from(Array.from({ length: 1000 }, (_, i) => '\x00'.repeat(i)).join(' ')).toString();
  const chunks = [...chunk_serialized(input_serialized, 100)];
  const output_serialized = serialized_from_chunks(chunks).toString();
  assert.strictEqual(input_serialized, output_serialized);
});

// Test that small data is a single chunk.
test('test_single_chunk', () => {
  const input_serialized = Buffer.from('meow', 'binary');
  const chunks = [...chunk_serialized(input_serialized, 100)];
  assert.strictEqual(chunks.length, 1);
  const output_serialized = serialized_from_chunks(chunks).toString();
  assert.strictEqual(input_serialized.toString(), output_serialized);
});

// Test that no data results in no chunks.
test('test_empty_data', () => {
  const input_serialized = Buffer.from('', 'binary');
  const chunks = [...chunk_serialized(input_serialized, 100)];
  assert.strictEqual(chunks.length, 0);
  const output_serialized = serialized_from_chunks(chunks).toString();
  assert.strictEqual(input_serialized.toString(), output_serialized);
});

// Test using that things work with a message.
test('test_messages', () => {
  const robot_id = new robot_id_pb.RobotId().setNickname('A'.repeat(1000));
  const message = new map_pb.WaypointSnapshot().setId('id').setRobotId(robot_id);
  const out = parse_from_chunks([...chunk_message(message, 100)], map_pb.WaypointSnapshot);

  assert.strictEqual(JSON.stringify(out.toObject()), JSON.stringify(message.toObject()));
});
