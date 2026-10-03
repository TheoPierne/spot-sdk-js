'use strict';

const { exec } = require('node:child_process');
const { cpSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } = require('node:fs');
const { platform, tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const process = require('node:process');
const { promisify } = require('node:util');

const execAsync = promisify(exec);

const version = '5.2.0';

// The .proto files of the Python SDK, and the directories of the ones to generate.
const protosRoot = resolve(`../spot-sdk-py/spot-sdk-${version}/protos`);
const protoDirs = [
  'bosdyn/api',
  'bosdyn/api/autowalk',
  'bosdyn/api/auto_return',
  'bosdyn/api/docking',
  'bosdyn/api/gps',
  'bosdyn/api/graph_nav',
  'bosdyn/api/keepalive',
  'bosdyn/api/log_status',
  'bosdyn/api/metrics_logging',
  'bosdyn/api/mission',
  'bosdyn/api/spot',
  'bosdyn/api/spot_cam',
];

// The generated code goes to ./src, or to the directory given as argument (e.g. to compare with ./src).
const output = resolve(process.argv[2] ?? './src');

/**
 * The 64 bits integers generated as strings ([jstype = JS_STRING], see
 * https://github.com/grpc/grpc-node/issues/540#issuecomment-420467321): jspb gives the other ones as numbers, exact
 * only up to 2^53. They are hashes or random ids, computed with BigInt by the SDK. The option is added to a copy of
 * the .proto files: {file: {message (with its parents, e.g. 'Outer.Inner'): [fields]}}.
 */
const JS_STRING_FIELDS = {
  'bosdyn/api/bddf.proto': {
    SeriesDescriptor: ['identifier_hash'],
    FileIndex: ['series_identifier_hashes'],
    // Often timestamps in nanoseconds.
    DataDescriptor: ['additional_indexes'],
    'SeriesBlockIndex.BlockEntry': ['additional_indexes'],
  },
  'bosdyn/api/data_buffer.proto': {
    SignalSchemaId: ['schema_id'],
    SignalTick: ['schema_id'],
    RegisterSignalSchemaResponse: ['schema_id'],
  },
  'bosdyn/api/estop.proto': {
    EstopCheckInRequest: ['challenge', 'response'],
    EstopCheckInResponse: ['challenge'],
  },
  'bosdyn/api/keepalive/keepalive.proto': {
    ModifyPolicyRequest: ['policy_ids_to_remove'],
    CheckInRequest: ['policy_id'],
    LivePolicy: ['policy_id'],
  },
  'bosdyn/api/spot/choreography_sequence.proto': {
    StartRecordingStateRequest: ['recording_session_id'],
    StartRecordingStateResponse: ['recording_session_id'],
  },
};

// A statement which declares a 64 bits field: its name and its options.
const FIELD_64_BITS =
  /^\s*(?:repeated\s+|optional\s+)?(?:u?int64|sint64|s?fixed64)\s+(\w+)\s*=\s*\d+\s*(?:\[([^\]]*)\])?\s*$/;

/**
 * The edit which adds the jstype to the options of a field declaration, null if it has a jstype.
 * @param {?string} options The options of the declaration, between its brackets.
 * @param {number} semicolon The position of the ';' of the declaration in its line.
 * @param {number} bracket The position of the '[' of the options in the line of the ';', -1 if not in it.
 * @param {string} where The file and the field, for the errors.
 * @returns {?{at: number, text: string, trimBefore?: boolean, trimAfter?: boolean}}
 */
function _jsTypeEdit(options, semicolon, bracket, where) {
  if (options === undefined) return { at: semicolon, text: ' [jstype = JS_STRING]', trimBefore: true };
  if (/\bjstype\b/.test(options)) return null;
  if (bracket < 0) throw new Error(`${where}: its options must be on the line of its ';'`);
  return { at: bracket + 1, text: 'jstype = JS_STRING, ', trimAfter: true };
}

/**
 * Adds [jstype = JS_STRING] to 64 bits fields of a .proto file (a field which has a jstype is kept).
 * @param {string} source The text of the .proto file.
 * @param {Object<string, string[]>} fieldsByMessage {message: [fields]}.
 * @param {string} fileName For the errors.
 * @returns {string}
 * @throws {Error} A field is not a 64 bits field of its message.
 */
function addJsStringTypes(source, fieldsByMessage, fileName) {
  const wanted = new Set(
    Object.entries(fieldsByMessage).flatMap(([message, fields]) => fields.map(field => `${message}.${field}`)),
  );
  const found = new Set();
  // The scopes of the open braces: the name of a message, or null (enum, oneof, service...).
  const scopes = [];
  let inComment = false;
  // The code of the statement being read (without comments and strings), and its positions in the line.
  let statement = '';
  let positions = [];
  const lines = source.split('\n').map(line => {
    const edits = [];
    positions = positions.map(() => -1);
    for (let i = 0; i < line.length; i++) {
      if (inComment) {
        if (line.startsWith('*/', i)) [inComment, i] = [false, i + 1];
      } else if (line.startsWith('/*', i)) {
        [inComment, i] = [true, i + 1];
      } else if (line.startsWith('//', i)) {
        break;
      } else if (line[i] === '"' || line[i] === "'") {
        const end = line.indexOf(line[i], i + 1);
        i = end < 0 ? line.length : end;
      } else if (line[i] === '{') {
        scopes.push(/\bmessage\s+(\w+)\s*$/.exec(statement)?.[1] ?? null);
        [statement, positions] = ['', []];
      } else if (line[i] === '}') {
        scopes.pop();
        [statement, positions] = ['', []];
      } else if (line[i] === ';') {
        const field = FIELD_64_BITS.exec(statement);
        const name = field && `${scopes.filter(Boolean).join('.')}.${field[1]}`;
        if (field && wanted.has(name)) {
          found.add(name);
          const bracket = positions[statement.lastIndexOf('[')] ?? -1;
          const edit = _jsTypeEdit(field[2], i, bracket, `${fileName}: ${name}`);
          if (edit) edits.push(edit);
        }
        [statement, positions] = ['', []];
      } else {
        statement += line[i];
        positions.push(i);
      }
    }
    // The statements continue on the next line.
    statement += ' ';
    positions.push(-1);

    // From the end of the line, so that the positions stay valid.
    let result = line;
    for (const edit of edits.reverse()) {
      const before = result.slice(0, edit.at);
      const after = result.slice(edit.at);
      result = (edit.trimBefore ? before.trimEnd() : before) + edit.text + (edit.trimAfter ? after.trimStart() : after);
    }
    return result;
  });

  const missing = [...wanted].filter(name => !found.has(name));
  if (missing.length) {
    throw new Error(`${fileName}: no 64 bits field ${missing.join(', ')} (see JS_STRING_FIELDS in build.js)`);
  }
  return lines.join('\n');
}

/**
 * Copies the .proto files in a temporary directory, with the [jstype = JS_STRING] options.
 * @returns {string} The directory.
 */
function prepareProtos() {
  const directory = mkdtempSync(join(tmpdir(), 'spot-sdk-js-protos-'));
  cpSync(protosRoot, directory, { recursive: true });
  for (const [fileName, fieldsByMessage] of Object.entries(JS_STRING_FIELDS)) {
    const file = join(directory, fileName);
    writeFileSync(file, addJsStringTypes(readFileSync(file, 'utf8'), fieldsByMessage, fileName));
  }
  return directory;
}

/**
 * Keeps the last of the properties of the same name of an AsObject type, like the objects of toObject() do: e.g. the
 * fields options and options_list of Prompt (mission/nodes.proto) are both optionsList.
 * @param {string} source A .d.ts file generated by protoc-gen-ts.
 * @returns {string}
 */
function dedupeAsObjectProperties(source) {
  const lines = source.split('\n');
  const removed = new Set();
  lines.forEach((line, start) => {
    const type = /^(\s*)export type AsObject = \{\s*$/.exec(line);
    if (!type) return;
    const lastByName = new Map();
    for (let i = start + 1; i < lines.length && lines[i] !== `${type[1]}}`; i++) {
      const property = /^\s*(\w+)\??:/.exec(lines[i]);
      if (!property) continue;
      if (lastByName.has(property[1])) removed.add(lastByName.get(property[1]));
      lastByName.set(property[1], i);
    }
  });
  return lines.filter((line, i) => !removed.has(i)).join('\n');
}

/**
 * Fixes the typings generated by protoc-gen-ts in a directory and its subdirectories.
 * @param {string} dir
 * @returns {number} The number of files changed.
 */
function fixDeclarations(dir) {
  return readdirSync(dir, { withFileTypes: true }).reduce((count, entry) => {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) return count + fixDeclarations(file);
    if (!entry.name.endsWith('_pb.d.ts')) return count;
    const source = readFileSync(file, 'utf8');
    const fixed = dedupeAsObjectProperties(source);
    if (fixed === source) return count;
    writeFileSync(file, fixed);
    return count + 1;
  }, 0);
}

async function main() {
  const protoFiles = protoDirs.flatMap(dir =>
    readdirSync(join(protosRoot, dir))
      .filter(name => name.endsWith('.proto'))
      .map(name => `${dir}/${name}`),
  );
  const protocGenTsBin = resolve(`./node_modules/.bin/protoc-gen-ts${platform() === 'win32' ? '.cmd' : ''}`);
  // The paths of the .proto files are relative to the copy (a short command line for cmd.exe).
  const inputs = `--proto_path=. ${protoFiles.join(' ')}`;
  const commands = [
    [`--js_out=import_style=commonjs,binary:${output} --grpc_out=grpc_js:${output}`, '.JS BUILD COMPLETE!'],
    [`--plugin=protoc-gen-ts=${protocGenTsBin} --ts_out=grpc_js:${output}`, '.D.TS BUILD COMPLETE!'],
    // The descriptors of the messages (the generated code has none), for the text format of bosdyn-core.
    [
      `--descriptor_set_out=${join(output, 'bosdyn', 'descriptor_set.pb')} --include_imports`,
      'DESCRIPTOR SET BUILD COMPLETE!',
    ],
  ];

  const protos = prepareProtos();
  // The directory of the descriptor set, before protoc writes the generated code in it.
  mkdirSync(join(output, 'bosdyn'), { recursive: true });
  try {
    // All the commands end before the copy is removed (Windows does not remove the files that protoc reads).
    const results = await Promise.allSettled(
      commands.map(async ([options, endMessage]) => {
        const { stderr } = await execAsync(`grpc_tools_node_protoc ${options} ${inputs}`, {
          cwd: protos,
          maxBuffer: 16 * 1024 * 1024,
        });
        if (stderr) console.log(stderr);
        console.log(endMessage);
      }),
    );
    const failure = results.find(result => result.status === 'rejected');
    if (failure) throw failure.reason;
  } finally {
    rmSync(protos, { recursive: true, force: true });
  }
  console.log(`TYPINGS FIXED: ${fixDeclarations(join(output, 'bosdyn'))} files.`);
}

if (require.main === module) {
  main().catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}

module.exports = { JS_STRING_FIELDS, addJsStringTypes, dedupeAsObjectProperties, fixDeclarations };
