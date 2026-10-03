'use strict';

// Generates the typings of the SDK (typings/) from the JSDoc of src/ with TypeScript (tsconfig.typings.json):
// npm run build:typings. The protobuf messages keep their typings, next to them in src/bosdyn/ (build.js).

const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const TYPINGS = path.join(ROOT, 'typings');

/**
 * @param {string} dir
 * @returns {string[]} The .d.ts files of dir and of its subdirectories.
 */
function declarationFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return declarationFiles(file);
    return entry.name.endsWith('.d.ts') ? [file] : [];
  });
}

/**
 * The module specifier of target from the directory of a file, e.g. '../../src/bosdyn/api/lease_pb'.
 * @param {string} fromFile
 * @param {string} target
 * @returns {string}
 */
function specifier(fromFile, target) {
  const relative = path.relative(path.dirname(fromFile), target).split(path.sep).join('/');
  return relative.startsWith('.') ? relative : `./${relative}`;
}

/**
 * The typings of src/x.js are typings/x.d.ts: their references to the protobuf modules (src/bosdyn/, which are not
 * copied) are made to point to src/bosdyn/.
 * @param {string} file A generated .d.ts file.
 * @returns {number} The number of references changed.
 */
function redirectProtobufReferences(file) {
  let count = 0;
  const text = fs.readFileSync(file, 'utf8').replace(/(["'])(\.{1,2}\/[^"']*)\1/g, (match, quote, spec) => {
    const target = path.resolve(path.dirname(file), spec);
    const inTypings = path.relative(TYPINGS, target);
    if (!inTypings.startsWith(`bosdyn${path.sep}`) || fs.existsSync(`${target}.d.ts`)) return match;
    count += 1;
    return `${quote}${specifier(file, path.join(SRC, inTypings))}${quote}`;
  });
  if (count) fs.writeFileSync(file, text);
  return count;
}

function main() {
  fs.rmSync(TYPINGS, { recursive: true, force: true });
  const tsc = require.resolve('typescript/bin/tsc');
  const { status } = spawnSync(process.execPath, [tsc, '-p', path.join(ROOT, 'tsconfig.typings.json')], {
    stdio: 'inherit',
  });
  if (status !== 0) {
    process.exitCode = status ?? 1;
    return;
  }
  const files = declarationFiles(TYPINGS);
  const redirected = files.reduce((sum, file) => sum + redirectProtobufReferences(file), 0);
  console.log(`typings/: ${files.length} files, ${redirected} references to the protobuf modules of src/bosdyn/.`);
}

main();
