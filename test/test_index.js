'use strict';

// The package root, require('spot-sdk-js'): it exports the public API of every module of the SDK, except the names
// that several modules export with different values.

const assert = require('node:assert/strict');
const { readdirSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const root = require('../src/index');

const SRC = path.join(__dirname, '..', 'src');
// The CLI, and the internal handlers of the .cha converter.
const EXCLUDED_MODULES = ['bosdyn-client/command_line', 'bosdyn-choreography-client/animation_file_conversion_helpers'];
// The packages and modules exported as namespaces of the root: their names are generic (PowerClient, createClient,
// SOCKET_TIMEOUT, parse, parseFloat, show, save, Descriptor...).
const NAMESPACES = {
  descriptorPool: 'bosdyn-core/descriptor_pool',
  gps: 'bosdyn-client/gps',
  imageUtil: 'bosdyn-core/image_util',
  jsonFormat: 'bosdyn-core/json_format',
  orbit: 'bosdyn-orbit',
  spotCam: 'bosdyn-client/spot_cam',
  textFormat: 'bosdyn-core/text_format',
};
const namespaceOf = id =>
  Object.keys(NAMESPACES).find(ns => id === NAMESPACES[ns] || id.startsWith(`${NAMESPACES[ns]}/`));
// The names exported with different values by several modules: the root exports the one of this module...
const WINNERS = {
  CompilationError: 'bosdyn-client/autowalk',
  EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME: 'bosdyn-client/robot_command',
  InvalidLeaseError: 'bosdyn-client/lease',
  InvalidRequestError: 'bosdyn-client/exceptions',
  TimedOutError: 'bosdyn-client/exceptions',
  ValidationError: 'bosdyn-client/autowalk',
  safePbEnumToString: 'bosdyn-client/util',
};
// ...or none of them (the ParseError of BDDF is also too generic for the root): they are required from their module.
const AMBIGUOUS = [
  'CommandTimedOutError',
  'InvalidArgument',
  'InvalidGraphError',
  'MapTooLargeLicenseError',
  'NoTimeSyncError',
  'ParseError',
  'RequestIdDoesNotExistError',
  'RobotImpairedError',
  'SourceDataError',
  'TooDistantError',
  'UnknownFrameError',
  'UnknownWaypointError',
  'main',
];

function moduleIds(dir, prefix = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const id = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) return id === 'bosdyn' ? [] : moduleIds(path.join(dir, entry.name), id);
    return entry.name.endsWith('.js') ? [id.replace(/\.js$/, '')] : [];
  });
}

const ids = moduleIds(SRC).filter(id => id !== 'index' && !id.endsWith('/index') && !EXCLUDED_MODULES.includes(id));

test('the root exports the public names of every module, or their namespace does', () => {
  const missing = [];
  for (const id of ids) {
    const namespace = namespaceOf(id);
    for (const [name, value] of Object.entries(require(path.join(SRC, id)))) {
      if (name.startsWith('_')) continue;
      if (!namespace && (AMBIGUOUS.includes(name) || (WINNERS[name] && WINNERS[name] !== id))) continue;
      const exported = namespace ? root[namespace][name] : root[name];
      if (exported !== value) missing.push(`${id}: ${name}`);
    }
  }
  assert.deepEqual(missing, [], 'Add these names to src/index.js (or to the index of their package)');
});

test('the names several modules export with different values are not exported by the root, or are the chosen one', () => {
  for (const name of AMBIGUOUS) assert.equal(root[name], undefined, name);
  for (const [name, id] of Object.entries(WINNERS)) assert.equal(root[name], require(path.join(SRC, id))[name], name);
  // The other ones: the ones of the modules that are not exported by the root keep their module.
  const byName = new Map();
  const flatIds = ids.filter(moduleId => !namespaceOf(moduleId));
  for (const id of flatIds) {
    for (const [name, value] of Object.entries(require(path.join(SRC, id)))) {
      if (name.startsWith('_')) continue;
      if (!byName.has(name)) byName.set(name, new Set());
      byName.get(name).add(value);
    }
  }
  const unlisted = [...byName].filter(
    ([name, values]) => values.size > 1 && !AMBIGUOUS.includes(name) && !WINNERS[name],
  );
  assert.deepEqual(
    unlisted.map(([name]) => name),
    [],
    'Names exported with different values by several modules: add them to WINNERS or AMBIGUOUS (and to src/index.js)',
  );
});

test('the namespaces of the root, and the exports of the previous versions', () => {
  assert.equal(root.spotCam, require('../src/bosdyn-client/spot_cam'));
  assert.equal(root.spotCam.PowerClient, require('../src/bosdyn-client/spot_cam/power').PowerClient);
  assert.equal(root.spotCam.ptz, require('../src/bosdyn-client/spot_cam/ptz'));
  assert.equal(root.gps, require('../src/bosdyn-client/gps'));
  assert.equal(root.orbit, require('../src/bosdyn-orbit'));
  assert.equal(root.PowerClient, require('../src/bosdyn-client/power').PowerClient);
  assert.equal(root.alertsPb, require('../src/bosdyn/api/alerts_pb'));
  assert.equal(root.authPb, require('../src/bosdyn/api/auth_pb'));
  const previous = [
    'Sdk',
    'Robot',
    'createStandardSdk',
    'AuthClient',
    'BaseClient',
    'RpcError',
    'BOSDYN_RESOURCE_ROOT',
  ];
  for (const name of previous) assert.ok(name in root, name);
});

test('an ES module imports the exports of the root by name (cjs-module-lexer finds them)', async () => {
  const esm = await import('../src/index.js');
  const notFound = Object.keys(root).filter(name => esm[name] !== root[name]);
  assert.deepEqual(notFound, []);
});
