'use strict';

// Tests of the protobuf text format (src/bosdyn-core/text_format.js). The expected bytes, texts and errors of
// text_format_cases.json come from google.protobuf.text_format of Python (protobuf 5.29, protos of the SDK 5.1.4).

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const { Any } = require('google-protobuf/google/protobuf/any_pb');
const { DoubleValue, StringValue, UInt64Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const estopPb = require('../src/bosdyn/api/estop_pb');
const geometryPb = require('../src/bosdyn/api/geometry_pb');
const nodesPb = require('../src/bosdyn/api/mission/nodes_pb');
const { FieldType, defaultPool } = require('../src/bosdyn-core/descriptor_pool');
const textFormat = require('../src/bosdyn-core/text_format');

const CASES = JSON.parse(fs.readFileSync(path.join(__dirname, 'text_format_cases.json'), 'utf8'));
// The options of MessageToString() for the texts of the cases.
const PRINT_OPTIONS = {
  default: {},
  one_line: { asOneLine: true },
  ascii: { asUtf8: false },
  short: { useShortRepeatedPrimitives: true },
  pointy: { pointyBrackets: true },
  index_order: { useIndexOrder: true },
  numbers: { useFieldNumber: true },
  colon_indent: { forceColon: true, indent: 3 },
};

function newMessage(typeName) {
  const pool = defaultPool();
  const cls = pool.messageClass(pool.findMessageTypeByName(typeName));
  return new cls();
}

function hex(message) {
  return Buffer.from(message.serializeBinary()).toString('hex');
}

test('the descriptors match the generated code: every field has its jspb accessors', () => {
  const pool = defaultPool();
  let fields = 0;
  for (const descriptor of pool.messageTypes()) {
    if (descriptor.isMapEntry) continue;
    // The module of the message is loaded if it was not.
    const message = new (pool.messageClass(descriptor))();
    assert.strictEqual(pool.descriptorOf(message), descriptor);
    for (const field of descriptor.fields) {
      let kinds = ['get', 'set'];
      if (field.isMap) kinds = ['get', 'clear'];
      else if (field.isRepeated) kinds.push('add');
      if (field.type === FieldType.BYTES) kinds.push('getU8');
      if (field.hasPresence) kinds.push('has');
      for (const kind of kinds) {
        const name = field.accessors[kind];
        assert.strictEqual(typeof message[name], 'function', `${field.fullName}: ${name}()`);
      }
      fields++;
    }
  }
  assert.ok(fields > 4000, `${fields} fields`);
});

test('parse() and merge() read like Python, messageToString() prints like Python', () => {
  assert.ok(CASES.length > 1000);
  for (const c of CASES) {
    const label = `${c.type} ${c.mode ?? 'merge'} ${JSON.stringify(c.text)}`;
    const message = newMessage(c.type);
    const options = { allowUnknownField: Boolean(c.allowUnknownField), allowFieldNumber: Boolean(c.allowFieldNumber) };
    const read = c.mode === 'parse' ? textFormat.parse : textFormat.merge;
    if (c.error !== undefined) {
      assert.throws(
        () => read(c.text, message, options),
        error => {
          assert.ok(error instanceof textFormat.ParseError, `${label}: ${error.stack}`);
          assert.strictEqual(error.message, c.error, label);
          return true;
        },
      );
      continue;
    }
    assert.strictEqual(read(c.text, message, options), message);
    const expected = message.constructor.deserializeBinary(Buffer.from(c.bin, 'hex'));
    assert.strictEqual(hex(message), hex(expected), label);
    for (const [name, text] of Object.entries(c.texts)) {
      assert.strictEqual(textFormat.messageToString(message, PRINT_OPTIONS[name]), text, `${label} (${name})`);
    }
    // The printed text reads back.
    assert.strictEqual(
      hex(textFormat.parse(c.texts.default, newMessage(c.type))),
      hex(message),
      `${label} (read back)`,
    );
  }
});

test('ParseError gives the line and the column, the text can be UTF-8 bytes', () => {
  assert.throws(
    () => textFormat.parse('x: 1\n  y: abc', new geometryPb.Vec3()),
    error => {
      assert.ok(error instanceof textFormat.ParseError && error instanceof textFormat.TextFormatError);
      assert.deepStrictEqual([error.getLine(), error.getColumn()], [2, 6]);
      assert.strictEqual(error.message, "2:6 : '  y: abc': Couldn't parse float: abc");
      return true;
    },
  );
  const vec = textFormat.parse(Buffer.from('x: 1.5 # a comment\ny: -2'), new geometryPb.Vec3());
  assert.deepStrictEqual([vec.getX(), vec.getY(), vec.getZ()], [1.5, -2, 0]);
  assert.throws(
    () => textFormat.parse(Buffer.from([0x78, 0x3a, 0x20, 0xff]), new geometryPb.Vec3()),
    /'utf-8' codec can't decode byte 0xff in position 3: invalid start byte/,
  );
  // Not a message of the SDK.
  assert.throws(() => textFormat.messageToString({}), TypeError);
});

test('messageToString() options: formats of the floats, formatter of messages, Any of unknown type', () => {
  const pose = textFormat.merge('position { x: 0.5 } rotation { w: 1 }', new geometryPb.SE3Pose());
  assert.strictEqual(
    textFormat.messageToString(pose, { asOneLine: true, doubleFormat: value => value.toFixed(3) }),
    'position { x: 0.500 } rotation { w: 1.000 }',
  );
  // floatFormat is also used for the doubles, if doubleFormat is not given.
  assert.strictEqual(
    textFormat.messageToString(pose.getPosition(), { floatFormat: value => `${value}!` }),
    'x: 0.5!\n',
  );
  const formatter = message => (message instanceof geometryPb.Vec3 ? 'somewhere' : null);
  assert.strictEqual(
    textFormat.messageToString(pose, { asOneLine: true, messageFormatter: formatter }),
    'position { somewhere } rotation { w: 1.0 }',
  );

  // The type URL of an Any gives its message, printed expanded like Python; unknown, it is printed as it is.
  const node = new nodesPb.Node();
  const any = new Any();
  any.pack(new nodesPb.Sleep().setSeconds(2).serializeBinary(), 'bosdyn.api.mission.Sleep');
  node.setImpl(any);
  assert.strictEqual(
    textFormat.messageToString(node, { asOneLine: true }),
    'impl { [type.googleapis.com/bosdyn.api.mission.Sleep] { seconds: 2.0 } }',
  );
  any.setTypeUrl('type.googleapis.com/bosdyn.api.Unknown');
  assert.strictEqual(
    textFormat.messageToString(node, { asOneLine: true }),
    'impl { type_url: "type.googleapis.com/bosdyn.api.Unknown" value: "\\r\\000\\000\\000@" }',
  );
  // Parsed back with its type.
  const parsed = textFormat.parse(
    'impl { [type.googleapis.com/bosdyn.api.mission.Sleep] { seconds: 2 } }',
    new nodesPb.Node(),
  );
  assert.strictEqual(parsed.getImpl().getTypeUrl(), 'type.googleapis.com/bosdyn.api.mission.Sleep');
  assert.strictEqual(nodesPb.Sleep.deserializeBinary(parsed.getImpl().getValue_asU8()).getSeconds(), 2);
});

test('the differences with Python come from jspb: -0.0, 64 bits integers, Any that it cannot read', () => {
  // -0.0 is a default value for jspb: it is not kept (Python prints value: -0.0).
  assert.strictEqual(textFormat.messageToString(textFormat.merge('value: -0.0', new DoubleValue())), '');

  // The 64 bits integers are numbers (exact up to 2^53), or strings with [jstype = JS_STRING] (see build.js).
  const checkIn = textFormat.merge(
    'challenge: 9007199254740993 response: 18446744073709551615',
    new estopPb.EstopCheckInRequest(),
  );
  assert.deepStrictEqual([checkIn.getChallenge(), checkIn.getResponse()], ['9007199254740993', '18446744073709551615']);
  assert.strictEqual(
    textFormat.messageToString(textFormat.merge('value: 9007199254740993', new UInt64Value())),
    'value: 9007199254740992\n',
  );
  // Rounded to 2^64, jspb could not serialize it.
  assert.throws(
    () => textFormat.merge('value: 18446744073709551615', new UInt64Value()),
    /Value out of range of the numbers of jspb: 18446744073709551615/,
  );

  // No Unicode database for the \N{name} escapes.
  assert.throws(
    () => textFormat.merge('value: "\\N{BULLET}"', new StringValue()),
    /\\N\{name\} escapes are not supported/,
  );

  // A field of Sleep with another wire type: Python ignores it (an unknown field), jspb cannot read the message.
  const node = textFormat.merge(
    'impl { type_url: "type.googleapis.com/bosdyn.api.mission.Sleep" value: "\\t\\000\\000\\000\\000\\000\\000\\370?" }',
    new nodesPb.Node(),
  );
  assert.strictEqual(
    textFormat.messageToString(node, { asOneLine: true }),
    'impl { type_url: "type.googleapis.com/bosdyn.api.mission.Sleep" value: "\\t\\000\\000\\000\\000\\000\\000\\370?" }',
  );
});
