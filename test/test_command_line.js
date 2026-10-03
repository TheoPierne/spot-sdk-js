'use strict';

// Tests of the command line (src/bosdyn-client/command_line.js). The outputs, results and calls of
// command_line_cases.json come from bosdyn.client.command_line of Python 5.1.4, run on the same fake robots (with the
// timezone UTC: the datetimes are local).

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const process = require('node:process');
const test = require('node:test');
const { setImmediate } = require('node:timers');
const util = require('node:util');

const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const dataBufferPb = require('../src/bosdyn/api/data_buffer_pb');
const dataIndexPb = require('../src/bosdyn/api/data_index_pb');
const estopPb = require('../src/bosdyn/api/estop_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const logStatusPb = require('../src/bosdyn/api/log_status/log_status_pb');
const powerPb = require('../src/bosdyn/api/power_pb');
const robotStatePb = require('../src/bosdyn/api/robot_state_pb');
const timeSyncPb = require('../src/bosdyn/api/time_sync_pb');
const { InvalidLoginError, InvalidTokenError } = require('../src/bosdyn-client/auth');
const cli = require('../src/bosdyn-client/command_line');
const { NonexistentServiceError } = require('../src/bosdyn-client/directory');
const { ServiceAlreadyExistsError, ServiceDoesNotExistError } = require('../src/bosdyn-client/directory_registration');
const {
  InternalServerError,
  InvalidRequestError,
  ProxyConnectionError,
  ResponseError,
  RpcError,
  ServiceUnavailableError,
} = require('../src/bosdyn-client/exceptions');
const { ImageDataError, UnknownImageSourceError } = require('../src/bosdyn-client/image');
const { Lease, LeaseWallet } = require('../src/bosdyn-client/lease');
const { InactiveLogError } = require('../src/bosdyn-client/log_status');
const { PayloadAlreadyExistsError } = require('../src/bosdyn-client/payload_registration');
const { NotEstablishedError, TimedOutError } = require('../src/bosdyn-client/time_sync');
const { defaultPool } = require('../src/bosdyn-core/descriptor_pool');
const { messageToString } = require('../src/bosdyn-core/text_format');

const CASES = JSON.parse(fs.readFileSync(path.join(__dirname, 'command_line_cases.json'), 'utf8'));
const ERRORS = {
  ImageDataError,
  InactiveLogError,
  InternalServerError,
  InvalidLoginError,
  InvalidTokenError,
  NonexistentServiceError,
  NotEstablishedError,
  PayloadAlreadyExistsError,
  ProxyConnectionError,
  ServiceAlreadyExistsError,
  ServiceDoesNotExistError,
  ServiceUnavailableError,
  TimedOutError,
  UnknownImageSourceError,
};

function decodeMessage({ type, b64 }) {
  const pool = defaultPool();
  const cls = pool.messageClass(pool.findMessageTypeByName(type));
  return cls.deserializeBinary(Buffer.from(b64, 'base64'));
}

/** The result of a method of a fake client, like the one of the Python harness. */
function behave(behavior) {
  if (behavior.interrupt) {
    // Ctrl-C during the call, like a KeyboardInterrupt in Python.
    process.emit('SIGINT');
    return new Promise(() => {});
  }
  if (behavior.raise) {
    const ErrorClass = ERRORS[behavior.raise];
    if (ErrorClass.prototype instanceof ResponseError) {
      throw new ErrorClass(decodeMessage(behavior.response), behavior.message ?? null);
    }
    if (ErrorClass.prototype instanceof RpcError) throw new ErrorClass(null, behavior.message);
    throw new ErrorClass(behavior.message);
  }
  if (behavior.none) return null;
  const message = decodeMessage(behavior.message);
  if (!behavior.field) return message;
  const field = defaultPool().descriptorOf(message).fieldsByName.get(behavior.field);
  return message[field.accessors.get]();
}

/** A value of a call, like norm() in the Python harness. */
function norm(value) {
  if (value === undefined || value === null) return null;
  if (typeof value.serializeBinary === 'function') return messageToString(value, { asOneLine: true });
  if (Array.isArray(value)) return value.map(norm);
  return value;
}

/** Compares the calls, with the numbers equal to their text (the big integers are texts in the cases). */
function assertSameCalls(actual, expected, label) {
  const loose = value => (typeof value === 'number' || typeof value === 'string' ? String(value) : value);
  const normalize = calls => JSON.parse(JSON.stringify(calls), (key, value) => loose(value));
  assert.deepStrictEqual(normalize(actual), normalize(expected), label);
}

/** A fake robot with the fake clients of a case. */
function fakeRobot(scenario, log) {
  const clients = {};
  for (const [service, methods] of Object.entries(scenario.clients)) {
    const queues = Object.fromEntries(Object.entries(methods).map(([name, list]) => [name, [...list]]));
    const jsMethods = {};
    for (const [key, { js, params }] of Object.entries(CASES.signatures)) {
      const [keyService, pyName] = key.split(/\.(?=[^.]+$)/);
      if (keyService === service) jsMethods[js] = { pyName, params };
    }
    clients[service] = new Proxy(
      {},
      {
        get(target, prop) {
          const method = jsMethods[prop];
          if (!method) return undefined;
          return async (...args) => {
            const values = method.params.map((param, i) => {
              const [name, defaultValue] = Array.isArray(param) ? param : [param, null];
              if (name === 'timeout') return args[i]?.timeout === undefined ? defaultValue : args[i].timeout / 1_000;
              return args[i] === undefined ? defaultValue : args[i];
            });
            log.push([`${service}.${method.pyName}`, ...values.map(norm)]);
            const queue = queues[method.pyName];
            if (!queue) throw new Error(`Unexpected call of ${service}.${method.pyName}`);
            return behave(queue.length > 1 ? queue.shift() : queue[0]);
          };
        },
      },
    );
  }
  const timeSync = {
    robotTimestampFromLocalSecs: async (localSecs, timesyncTimeoutSec = 0) => {
      log.push(['time_sync.robot_timestamp_from_local_secs', timesyncTimeoutSec]);
      return behave(scenario.time_sync.robot_timestamp_from_local_secs);
    },
    waitForSync: async (timeoutSec = 3) => {
      log.push(['time_sync.wait_for_sync', timeoutSec]);
      return behave(scenario.time_sync.wait_for_sync);
    },
  };
  return {
    _name: '127.0.0.1',
    userToken: null,
    async authenticate(username, password) {
      log.push(['robot.authenticate', username, password]);
      if (scenario.authenticate) behave(scenario.authenticate);
    },
    async syncWithDirectory() {
      log.push(['robot.sync_with_directory']);
    },
    async ensureClient(serviceName) {
      log.push(['robot.ensure_client', serviceName]);
      if (!clients[serviceName]) throw new Error(`Unexpected service ${serviceName}`);
      return clients[serviceName];
    },
    get timeSync() {
      return Promise.resolve(timeSync);
    },
    async operatorComment(comment, timestampSecs = null) {
      log.push(['robot.operator_comment', comment, timestampSecs === null ? null : 'number']);
    },
  };
}

// A line of the loggers (the logging of Python writes to stderr, not with print()).
const LOG_LINE = /^\[\d{4}-\d\d-\d\d [\d:]+\] \[/;

/** The output of print() of Python: console.log(), console.error() and the strings written to stdout. */
async function captured(fn) {
  const [out, err] = [[], []];
  const saved = { log: console.log, error: console.error, write: process.stdout.write };
  console.log = (...args) => out.push(`${util.format(...args)}\n`);
  console.error = (...args) => err.push(`${util.format(...args)}\n`);
  process.stdout.write = (chunk, ...rest) =>
    typeof chunk === 'string' && !LOG_LINE.test(chunk)
      ? out.push(chunk) > 0
      : saved.write.call(process.stdout, chunk, ...rest);
  try {
    const result = await fn();
    return { result, stdout: out.join(''), stderr: err.join('') };
  } finally {
    Object.assign(console, { log: saved.log, error: saved.error });
    process.stdout.write = saved.write;
  }
}

/** Runs a command line on a robot, with the environment of the Python harness. */
async function runCommand(argv, robot) {
  const saved = {
    TZ: process.env.TZ,
    BOSDYN_CLIENT_USERNAME: process.env.BOSDYN_CLIENT_USERNAME,
    BOSDYN_CLIENT_PASSWORD: process.env.BOSDYN_CLIENT_PASSWORD,
  };
  Object.assign(process.env, { TZ: 'UTC', BOSDYN_CLIENT_USERNAME: 'user', BOSDYN_CLIENT_PASSWORD: 'pass' });
  try {
    return await captured(() => {
      const { parser, commandDict } = cli._createParser();
      // A parse error fails the test instead of ending the process.
      parser.exit = (status, message) => {
        throw new Error(`argparse exited with ${status}: ${message}`);
      };
      const options = parser.parse_args(argv);
      return commandDict[options.command].run(robot, options);
    });
  } finally {
    for (const [name, value] of Object.entries(saved)) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  }
}

test('the commands print, return and call what they do in Python (outputs from Python)', async () => {
  const sigintListeners = process.listenerCount('SIGINT');
  for (const scenario of CASES.scenarios) {
    const log = [];
    // One after the other: they share the console and the handlers of Ctrl-C.

    const { result, stdout, stderr } = await runCommand(scenario.argv, fakeRobot(scenario, log));
    assert.strictEqual(stdout, scenario.stdout, `${scenario.name}: stdout`);
    assert.strictEqual(stderr, scenario.stderr, `${scenario.name}: stderr`);
    assert.strictEqual(result, scenario.js_result ?? scenario.result, `${scenario.name}: result`);
    assertSameCalls(log, scenario.calls, `${scenario.name}: calls`);
  }
  assert.strictEqual(CASES.scenarios.length, 78);
  // The handlers of Ctrl-C are removed.
  assert.strictEqual(process.listenerCount('SIGINT'), sigintListeners);
});

/** A robot for the commands which are not compared with Python. */
function simpleRobot(clients, extra = {}) {
  const calls = [];
  const robot = {
    _name: '127.0.0.1',
    userToken: null,
    calls,
    async authenticate(...args) {
      calls.push(['authenticate', ...args]);
    },
    async syncWithDirectory() {
      calls.push(['syncWithDirectory']);
    },
    async ensureClient(name) {
      calls.push(['ensureClient', name]);
      if (!clients[name]) throw new Error(`Unexpected service ${name}`);
      return clients[name];
    },
    get timeSync() {
      return Promise.resolve({
        async waitForSync(timeoutSec) {
          calls.push(['waitForSync', timeoutSec]);
        },
      });
    },
    ...extra,
  };
  return robot;
}

test('estop become-estop holds the estop until Ctrl-C, then cuts the power and deregisters, like Python', async () => {
  const { StopLevel } = require('../src/bosdyn-client/estop');
  const calls = [];
  let challenge = 0;
  let interrupted = false;
  const estop = {
    async getConfig() {
      calls.push('getConfig');
      return new estopPb.EstopConfig().setUniqueId('old');
    },
    async setConfig(config, targetConfigId) {
      calls.push(`setConfig ${targetConfigId} ${config.getEndpointsList()[0].getName()}`);
      const endpoint = config.getEndpointsList()[0].clone().setUniqueId('ep1');
      return new estopPb.EstopConfig().setUniqueId('new').setEndpointsList([endpoint]);
    },
    async register(targetConfigId, endpoint) {
      calls.push(`register ${targetConfigId}`);
      return endpoint.toProto();
    },
    async checkIn(level) {
      calls.push(`checkIn ${level}`);
      if (level === StopLevel.ESTOP_LEVEL_NONE && !interrupted) {
        // The periodic check-ins go on until Ctrl-C.
        interrupted = true;
        setImmediate(() => process.emit('SIGINT'));
      }
      challenge += 1;
      return challenge;
    },
    async deregister(configId) {
      calls.push(`deregister ${configId}`);
    },
  };
  const robot = simpleRobot({ estop });
  const sigintListeners = process.listenerCount('SIGINT');
  const { result, stdout } = await runCommand(['host', 'estop', 'become-estop', '--timeout', '9'], robot);
  assert.strictEqual(result, true);
  assert.strictEqual(stdout, 'Press Ctrl-C or send SIGINT to exit\n');
  // The endpoint is the only one of the configuration; its first check-in (register) cuts the power, the keep-alive
  // allows it until Ctrl-C, which cuts it again before the endpoint is deregistered (the old command never cut it:
  // it deregistered at once, with a method which does not exist, and stopped 10 s later).
  assert.deepStrictEqual(calls.slice(0, 4), [
    'getConfig',
    `setConfig old command-line-${os.hostname()}`,
    'register new',
    `checkIn ${StopLevel.ESTOP_LEVEL_CUT}`,
  ]);
  assert.deepStrictEqual(calls.slice(-2), [`checkIn ${StopLevel.ESTOP_LEVEL_CUT}`, 'deregister new']);
  const allowed = calls.slice(4, -2);
  assert.ok(allowed.length > 0 && allowed.every(call => call === `checkIn ${StopLevel.ESTOP_LEVEL_NONE}`), allowed);
  assert.strictEqual(process.listenerCount('SIGINT'), sigintListeners);

  // The deprecated top-level command does the same, after a warning.
  calls.length = 0;
  interrupted = false;
  const old = await runCommand(['host', 'become-estop'], simpleRobot({ estop }));
  assert.strictEqual(old.result, true);
  assert.ok(
    old.stdout.startsWith('DEPRECATION WARNING: This command is now "bosdyn.client estop become-estop"\n'),
    old.stdout,
  );
  assert.strictEqual(calls.at(-1), 'deregister new');
});

test('power commands hold the body lease: acquired first, returned at the end, like Python', async () => {
  const calls = [];
  const leaseWallet = new LeaseWallet();
  const leaseClient = {
    leaseWallet,
    async acquire(resource) {
      calls.push(`acquire ${resource}`);
      const lease = new leasePb.Lease().setResource(resource).setEpoch('e').setSequenceList([1]);
      leaseWallet.add(new Lease(lease));
      return new leasePb.AcquireLeaseResponse().setLease(lease);
    },
    async retainLease(lease) {
      calls.push(`retain ${lease.leaseProto?.getResource?.() ?? 'body'}`);
    },
    async returnLease(lease) {
      calls.push(`return ${lease.leaseProto.getResource()}`);
      leaseWallet.remove(lease);
    },
  };
  const powerClient = {
    async powerCommand(request) {
      calls.push(`powerCommand ${request}`);
      return new powerPb.PowerCommandResponse()
        .setStatus(powerPb.PowerCommandStatus.STATUS_IN_PROGRESS)
        .setPowerCommandId(5);
    },
    async powerCommandFeedback(powerCommandId) {
      calls.push(`feedback ${powerCommandId}`);
      return powerPb.PowerCommandStatus.STATUS_SUCCESS;
    },
  };
  const { Request } = powerPb.PowerCommandRequest;
  for (const [argv, request] of [
    [['robot', 'off'], Request.REQUEST_OFF_ROBOT],
    [['robot', 'cycle'], Request.REQUEST_CYCLE_ROBOT],
    [['payload', 'on'], Request.REQUEST_ON_PAYLOAD_PORTS],
    [['wifi', 'off'], Request.REQUEST_OFF_WIFI_RADIO],
  ]) {
    calls.length = 0;
    const robot = simpleRobot({ lease: leaseClient, power: powerClient });

    const { result } = await runCommand(['host', 'power', ...argv], robot);
    assert.strictEqual(result, true, argv.join(' '));
    assert.deepStrictEqual(robot.calls.slice(4, 6), [
      ['waitForSync', 1],
      ['ensureClient', 'lease'],
    ]);
    const expected = ['acquire body', `powerCommand ${request}`, 'feedback 5', 'return body'];
    assert.deepStrictEqual(
      calls.filter(call => !call.startsWith('retain')),
      expected,
      argv.join(' '),
    );
  }

  // The command is not sent if the lease cannot be acquired (an error of the SDK is printed).
  calls.length = 0;
  leaseClient.acquire = async () => {
    calls.push('acquire');
    throw new ResponseError(new leasePb.AcquireLeaseResponse(), 'claimed');
  };
  const { result, stderr } = await runCommand(
    ['host', 'power', 'robot', 'off'],
    simpleRobot({
      lease: leaseClient,
      power: powerClient,
    }),
  );
  assert.strictEqual(result, null);
  assert.strictEqual(stderr, 'ResponseError: bosdyn.api.AcquireLeaseResponse (ResponseError): claimed\n');
  assert.deepStrictEqual(calls, ['acquire']);
});

test('data comments and events show the time of their nanoseconds, and an event without end as started', async () => {
  const response = new dataIndexPb.GetEventsCommentsResponse().setEventsComments(
    new dataIndexPb.EventsComments()
      .setOperatorCommentsList([
        new dataBufferPb.OperatorComment()
          .setMessage('comment')
          .setTimestamp(new Timestamp().setSeconds(1_700_000_000).setNanos(250_000_000)),
      ])
      .setEventsList([
        new dataBufferPb.Event()
          .setType('started')
          .setSource('cli')
          .setLevel(dataBufferPb.Event.Level.LEVEL_MEDIUM)
          .setStartTime(new Timestamp().setSeconds(1_700_000_000).setNanos(250_000_000)),
      ]),
  );
  const robot = simpleRobot({
    data: {
      async getEventsComments() {
        return response;
      },
    },
  });
  // Python showed 22:13:21.950000 (seconds * 1e-9 instead of the nanoseconds), and the end of an event without end
  // time in 1970.
  let output = await runCommand(['host', 'data', 'comments'], robot);
  assert.strictEqual(output.stdout, '\n[2023-11-14]\n 22:13:20.250000  comment\n');
  output = await runCommand(['host', 'data', 'events'], robot);
  assert.strictEqual(
    output.stdout,
    `\n[2023-11-14]\n 22:13:20.250000 (START) ${'started'.padEnd(16)}  MEDIUM            <cli> \n`,
  );
});

test('state model writes the links in their directories and the URDF, and skips the invalid links', async () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'cli-model-'));
  try {
    const skeleton = new robotStatePb.Skeleton()
      .setUrdf('<robot/>')
      .setLinksList(['body', 'bad', 'empty'].map(name => new robotStatePb.Skeleton.Link().setName(name)));
    const robotState = {
      async getRobotHardwareConfiguration() {
        return new robotStatePb.HardwareConfiguration().setSkeleton(skeleton);
      },
      async getRobotLinkModel(name) {
        if (name === 'bad') {
          throw new InvalidRequestError(new robotStatePb.RobotLinkModelResponse(), 'no such link');
        }
        const model = new robotStatePb.Skeleton.Link.ObjModel();
        return name === 'body' ? model.setFileName('meshes/body/body.obj').setFileContents('v 0 0 0\n') : model;
      },
    };
    const outdir = path.join(directory, 'model');
    const { result, stdout } = await runCommand(
      ['host', 'state', 'model', '--outdir', outdir],
      simpleRobot({
        'robot-state': robotState,
      }),
    );
    assert.strictEqual(result, true);
    const linkFile = path.join(outdir, 'meshes', 'body', 'body.obj');
    assert.strictEqual(fs.readFileSync(linkFile, 'utf8'), 'v 0 0 0\n');
    assert.strictEqual(fs.readFileSync(path.join(outdir, 'model.urdf'), 'utf8'), '<robot/>');
    assert.strictEqual(
      stdout,
      `Link file written to ${linkFile}\n` +
        'bosdyn.api.RobotLinkModelResponse (InvalidRequestError): no such link Name of link: bad\n' +
        `URDF file written to ${path.join(outdir, 'model.urdf')}\n`,
    );

    // The other errors are not caught, like Python.
    robotState.getRobotLinkModel = async () => {
      throw new TypeError('bug');
    };
    await assert.rejects(
      runCommand(
        ['host', 'state', 'model', '--outdir', outdir],
        simpleRobot({
          'robot-state': robotState,
        }),
      ),
      TypeError,
    );
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('log-status concurrent sends an event of now in robot time, time-sync prints the estimates', async () => {
  const skew = new Duration().setSeconds(2);
  const timeSyncClient = {
    async getTimeSyncUpdate() {
      const now = Timestamp.fromDate(new Date());
      const header = new headerPb.ResponseHeader()
        .setRequestHeader(new headerPb.RequestHeader().setRequestTimestamp(now))
        .setRequestReceivedTimestamp(now)
        .setResponseTimestamp(now);
      const state = new timeSyncPb.TimeSyncState()
        .setStatus(timeSyncPb.TimeSyncState.Status.STATUS_OK)
        .setBestEstimate(new timeSyncPb.TimeSyncEstimate().setClockSkew(skew).setRoundTripTime(new Duration()));
      return new timeSyncPb.TimeSyncUpdateResponse().setHeader(header).setState(state).setClockIdentifier('clock');
    },
  };
  let sentEvent = null;
  const logStatus = {
    async startConcurrentLog(seconds, event) {
      assert.strictEqual(seconds, 60);
      sentEvent = event;
      return new logStatusPb.StartConcurrentLogResponse().setLogStatus(new logStatusPb.LogStatus().setId('c'));
    },
  };
  const robot = simpleRobot({ 'log-status': logStatus, 'time-sync': timeSyncClient });
  const before = Date.now() / 1_000 + 2;
  const { result, stdout } = await runCommand(['host', 'log-status', 'concurrent', '60', 'my_event'], robot);
  assert.strictEqual(result, true);
  assert.strictEqual(stdout, 'id: "c"\n\n');
  assert.strictEqual(sentEvent.getType(), 'my_event');
  assert.strictEqual(sentEvent.getDescription(), 'Triggering a recipe data log');
  assert.strictEqual(sentEvent.getSource(), 'LogStatus CLI');
  assert.match(sentEvent.getId(), /^[0-9a-f]{32}$/);
  const start = sentEvent.getStartTime().getSeconds() + sentEvent.getStartTime().getNanos() / 1e9;
  assert.ok(Math.abs(start - before) < 5, `${start} ${before}`);
  assert.ok(sentEvent.getEndTime().getSeconds() === sentEvent.getStartTime().getSeconds());

  const timeSync = await runCommand(['host', 'time-sync'], robot);
  assert.strictEqual(timeSync.result, true);
  assert.match(timeSync.stdout, /^GRPC round-trip time: .+\nLocal time to robot time: 2\.000 sec\n$/);
  const proto = await runCommand(['host', 'time-sync', '--proto'], robot);
  assert.match(proto.stdout, /^clock_identifier: "clock"\n/m);
});

test('acquire request requires sources, and the errors which are not of the SDK are thrown, like Python', async () => {
  const { parser, commandDict } = cli._createParser();
  const request = commandDict.acquire._subcommands.request;
  request._parser.error = message => {
    throw new Error(`parser error: ${message}`);
  };
  await assert.rejects(
    request._run(simpleRobot({}), parser.parse_args(['host', 'acquire', 'request'])),
    /A request requires either a data source name or an image source\+service name/,
  );
  await assert.rejects(
    request._run(
      simpleRobot({}),
      parser.parse_args([
        'host',
        'acquire',
        'request',
        '--image-source',
        'a',
        '--image-service',
        'image',
        '--image-source',
        'b',
      ]),
    ),
    /1:1 correspondence/,
  );

  // An error which is not of the SDK is not printed as a failure of the command (Python raises it).
  const robot = simpleRobot({
    'robot-id': {
      async getId() {
        throw new TypeError('a bug');
      },
    },
  });
  await assert.rejects(runCommand(['host', 'id'], robot), /a bug/);
});

test('main() needs a command, and the bin of the package runs it (exit status 1 on failure)', async () => {
  const { result, stdout } = await captured(() => cli.main(['127.0.0.1']));
  assert.strictEqual(result, false);
  assert.ok(stdout.startsWith('Need to specify a command\nusage: bosdyn.client'), stdout);

  const bin = path.join(__dirname, '..', 'src', 'bosdyn-client', 'command_line.js');
  assert.ok(fs.readFileSync(bin, 'utf8').startsWith('#!/usr/bin/env node\n'));
  const run = spawnSync(process.execPath, [bin, '127.0.0.1'], { encoding: 'utf8', timeout: 30_000 });
  assert.strictEqual(run.status, 1, run.stderr);
  assert.ok(run.stdout.startsWith('Need to specify a command\n'), run.stdout);
});

test('the package exports the errors of bosdyn.client of Python, and the helpers, without tslib', () => {
  const sdk = require('../src');
  const exceptions = require('../src/bosdyn-client/exceptions');
  // They were missing: a ResponseError or a TimedOutError could not be caught with the package only.
  for (const name of [
    'BosdynError',
    'ResponseError',
    'RpcError',
    'TimedOutError',
    'InvalidRequestError',
    'UnsetStatusError',
  ]) {
    assert.strictEqual(sdk[name], exceptions[name], name);
  }
  assert.strictEqual(
    sdk.acquireAndProcessRequest,
    require('../src/bosdyn-client/data_acquisition_helpers').acquireAndProcessRequest,
  );
  assert.doesNotMatch(fs.readFileSync(path.join(__dirname, '..', 'src', 'index.js'), 'utf8'), /require\('tslib'\)/);
});

test('bosdyn-client/index.js exports the classes of bosdyn.client of Python, and runs the command line', () => {
  const log = console.log;
  const client = require('../src/bosdyn-client');
  // The console of the process is not changed (every message ended with the location of the call).
  assert.strictEqual(console.log, log);
  assert.strictEqual(client.createStandardSdk, require('../src/bosdyn-client/sdk').createStandardSdk);
  for (const name of [
    'BosdynError',
    'CustomParamError',
    'PersistentRpcError',
    'RetryableRpcError',
    'RetryableUnavailableError',
    'TooManyRequestsError',
    'Robot',
    'Sdk',
    'AuthClient',
    'BaseClient',
  ]) {
    assert.strictEqual(typeof client[name], 'function', name);
  }

  // Run as a program: the status is 1 when the command fails (main() returns a promise: !main() was never true).
  const index = path.join(__dirname, '..', 'src', 'bosdyn-client', 'index.js');
  const run = spawnSync(process.execPath, [index, '127.0.0.1'], { encoding: 'utf8', timeout: 30_000 });
  assert.strictEqual(run.status, 1, run.stderr);
  assert.strictEqual(run.stdout.split('\n')[0], 'Need to specify a command');
});
