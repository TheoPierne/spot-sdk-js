'use strict';

// Tests of the protobuf JSON format (src/bosdyn-core/json_format.js). The expected texts and errors of
// json_format_cases.json come from google.protobuf.json_format.MessageToJson() of Python (protobuf 5.29, protos of the
// SDK 5.1.4).

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const robotStatePb = require('../src/bosdyn/api/robot_state_pb');
const { defaultPool } = require('../src/bosdyn-core/descriptor_pool');
const { SerializeToJsonError, messageToDict, messageToJson } = require('../src/bosdyn-core/json_format');

const CASES = JSON.parse(fs.readFileSync(path.join(__dirname, 'json_format_cases.json'), 'utf8'));
// The options of MessageToJson() for the texts of the cases.
const OPTIONS = {
  default: {},
  preserving: { preservingProtoFieldName: true },
  integers: { useIntegersForEnums: true },
  sorted: { sortKeys: true },
  compact: { indent: null },
  indent0: { indent: 0 },
  utf8: { ensureAscii: false },
  always: { alwaysPrintFieldsWithNoPresence: true },
  precision: { floatPrecision: 3 },
};
// The entries of the maps are in the order of the hash table in Python, in the order of their keys here.
const MAP_ORDER = new Set(['fans', 'bool map', 'struct']);
// An int64 beyond 2^53: jspb rounds it when it reads the message (the field is not [jstype = JS_STRING]).
const ROUNDED_INT64 = new Set(['int64']);

function message(entry) {
  const pool = defaultPool();
  const cls = pool.messageClass(pool.findMessageTypeByName(entry.type));
  return cls.deserializeBinary(Buffer.from(entry.b64, 'base64'));
}

test('messageToJson() gives the texts and the errors of MessageToJson() in Python', () => {
  let checked = 0;
  for (const entry of CASES) {
    if (ROUNDED_INT64.has(entry.name)) continue;
    for (const [variant, expected] of Object.entries(entry.outputs)) {
      const label = `${entry.name} [${variant}]`;
      if (expected.error) {
        assert.throws(
          () => messageToJson(message(entry), OPTIONS[variant]),
          error => error.name === expected.error && error.message === expected.message,
          label,
        );
      } else if (MAP_ORDER.has(entry.name)) {
        const actual = messageToJson(message(entry), OPTIONS[variant]);
        assert.deepStrictEqual(JSON.parse(actual), JSON.parse(expected.json), label);
      } else {
        assert.strictEqual(messageToJson(message(entry), OPTIONS[variant]), expected.json, label);
      }
      checked++;
    }
  }
  assert.strictEqual(checked, 35);
});

test('messageToDict() gives plain objects, and the well known types as their JSON value', () => {
  const battery = new robotStatePb.BatteryState()
    .setIdentifier('b1')
    .setEstimatedRuntime(new Duration().setSeconds(-1).setNanos(-5))
    .setTemperaturesList([1, Infinity])
    .setStatus(robotStatePb.BatteryState.Status.STATUS_CHARGING);
  assert.deepStrictEqual(messageToDict(battery), {
    identifier: 'b1',
    estimatedRuntime: '-1.000000005s',
    temperatures: [1, 'Infinity'],
    status: 'STATUS_CHARGING',
  });
  assert.deepStrictEqual(messageToDict(battery, { preservingProtoFieldName: true, useIntegersForEnums: true }), {
    identifier: 'b1',
    estimated_runtime: '-1.000000005s',
    temperatures: [1, 'Infinity'],
    status: robotStatePb.BatteryState.Status.STATUS_CHARGING,
  });
  assert.strictEqual(messageToJson(new Timestamp().setSeconds(1).setNanos(20_000_000)), '"1970-01-01T00:00:01.020Z"');
  // The errors of the nested well known types are SerializeToJsonError, like Python.
  const invalid = new robotStatePb.BatteryState().setEstimatedRuntime(new Duration().setSeconds(1).setNanos(-1));
  assert.throws(() => messageToJson(invalid), SerializeToJsonError);
});
