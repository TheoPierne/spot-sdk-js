'use strict';

// Runs the tests with node --test, the files sorted by name. The arguments are options of node --test, e.g.
// npm test -- --test-name-pattern=BDDF.

const { spawnSync } = require('node:child_process');
const { readdirSync } = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const files = readdirSync(__dirname)
  .filter(name => /^test_.*\.js$/.test(name))
  .sort()
  .map(name => path.join(__dirname, name));
const { status, error } = spawnSync(process.execPath, ['--test', ...process.argv.slice(2), ...files], {
  stdio: 'inherit',
});
if (error) console.error(error);
// null if the tests were killed by a signal.
process.exitCode = status ?? 1;
