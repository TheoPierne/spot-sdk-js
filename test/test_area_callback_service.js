'use strict';

// The tests of Python 5.1.4 (tests/test_area_callback_service.py): the RPCs are called on the servicer, and the
// events of the handlers are waited for, like the threads of Python.

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const {
  AreaCallbackInformationRequest,
  BeginCallbackRequest,
  BeginCallbackResponse,
  BeginControlRequest,
  BeginControlResponse,
  EndCallbackRequest,
  EndCallbackResponse,
  RouteChangeRequest,
  RouteChangeResponse,
  UpdateCallbackRequest,
  UpdateCallbackResponse,
} = require('../src/bosdyn/api/graph_nav/area_callback_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const { RobotState, ServiceFaultState } = require('../src/bosdyn/api/robot_state_pb');
const { CustomParam, CustomParamError, DictParam, Int64Param } = require('../src/bosdyn/api/service_customization_pb');
const { ServiceFault, ServiceFaultId } = require('../src/bosdyn/api/service_fault_pb');

const { AreaCallbackClient } = require('../src/bosdyn-client/area_callback');
const {
  AreaCallbackRegionHandlerBase,
  IncorrectUsage,
  RouteChangedResult,
} = require('../src/bosdyn-client/area_callback_region_handler_base');
const { AreaCallbackServiceServicer } = require('../src/bosdyn-client/area_callback_service_servicer');
const { AreaCallbackServiceConfig, handleServiceFaults } = require('../src/bosdyn-client/area_callback_service_utils');
const { customParamsError } = require('../src/bosdyn-client/common');
const { DataBufferClient } = require('../src/bosdyn-client/data_buffer');
const { NonexistentServiceError } = require('../src/bosdyn-client/directory');
const { DirectoryRegistrationClient } = require('../src/bosdyn-client/directory_registration');
const exceptions = require('../src/bosdyn-client/exceptions');
const { LeaseClient, LeaseWallet, NoSuchLease } = require('../src/bosdyn-client/lease');
const { LoggerUtil } = require('../src/bosdyn-client/logger_util');
const serverUtil = require('../src/bosdyn-client/server_util');
const { Event } = require('../src/bosdyn-core/event');
const { parse } = require('../src/bosdyn-core/text_format');
const { secondsToTimestamp } = require('../src/bosdyn-core/util');

// runService() listens on all the interfaces, like Python: the server of its test listens on the loopback only.
serverUtil.GrpcServiceRunner = class LoopbackRunner extends serverUtil.GrpcServiceRunner {
  constructor(servicer, addServicerToServerFn, port, maxWorkers) {
    super(servicer, addServicerToServerFn, port, maxWorkers, null, null, 3, true, null, '127.0.0.1');
  }
};
// eslint-disable-next-line import/order
const { runService } = require('../src/bosdyn-client/area_callback_service_runner');

// The expected errors of the handlers (e.g. 'Failed during run()') and the other logs are not printed.
const LOGGERS = [
  'area_callback_region_handler_base',
  'area_callback_service_servicer',
  'area_callback_service_utils',
  'server_util',
  'DirectoryRegistrationKeepAlive',
];
for (const name of LOGGERS) {
  LoggerUtil.getLogger(name).transports[0].silent = true;
}

const { Stage } = UpdateCallbackRequest;
const { Option } = UpdateCallbackResponse.NavPolicy;

class MockLeaseClient {
  constructor(shouldThrow) {
    this.shouldThrow = shouldThrow;
  }

  listLeasesFull() {
    const leaseStr = `
resources {
  resource: "all-leases"
  lease {
    resource: "all-leases"
    epoch: "zJTwcBbRxKAovmdS"
    sequence: 8
    client_names: "root"
  }
  lease_owner {
  }
}
resources {
  resource: "body"
  lease {
    resource: "body"
    epoch: "zJTwcBbRxKAovmdS"
    sequence: 8
    client_names: "root"
  }
  lease_owner {
  }
}
resources {
  resource: "mobility"
  lease {
    resource: "mobility"
    epoch: "zJTwcBbRxKAovmdS"
    sequence: 8
    client_names: "root"
  }
  lease_owner {
  }
}
resource_tree {
  resource: "all-leases"
  sub_resources {
    resource: "body"
    sub_resources {
      resource: "mobility"
    }
  }
}
`;
    return Promise.resolve(parse(leaseStr, new leasePb.ListLeasesResponse()));
  }
}

class MockRobot {
  constructor(leaseClient) {
    this.leaseClient = leaseClient;
    this._name = 'test-robot';
    this.responseProcessors = [];
    this.leaseWallet = new LeaseWallet();
    this.time = 0;
  }

  ensureClient(serviceName) {
    if (serviceName === LeaseClient.defaultServiceName) return Promise.resolve(this.leaseClient);
    // mock.Mock() in Python: the requests and responses are logged to it.
    if (serviceName === DataBufferClient.defaultServiceName) {
      return Promise.resolve({ addProtobuf: () => Promise.resolve() });
    }
    return Promise.resolve(undefined);
  }

  timeSec() {
    return this.time;
  }
}

class AreaCallbackRegionHandlerImpl extends AreaCallbackRegionHandlerBase {
  constructor(config, robot) {
    super(config, robot);
    this.isInControl = false;
    this.startCalled = false;
    this.endCalled = false;
    this.routeChangedResult = new RouteChangedResult();

    this.eventSetStop = new Event();
    this.eventAtStart = new Event();
    this.eventAtControl = new Event();
    this.eventSetContinue = new Event();
    this.eventReturning = new Event();
  }

  begin() {
    // Reset variables to run test twice.
    this.isInControl = false;
    this.endCalled = false;
    // Start called.
    this.startCalled = true;
    return BeginCallbackResponse.Status.STATUS_OK;
  }

  async run() {
    this.stopAtStart();
    this.eventSetStop.set();
    // Normally blockUntilArrivedAtStart will return true, but in the rerouting case where we've already gone past
    // the start, this will return false.
    if (await this.blockUntilArrivedAtStart()) {
      this.controlAtStart();
      this.eventAtStart.set();
      await this.blockUntilControl();
      this.eventAtControl.set();

      while (this.isInControl) {
        this.continuePastStart();
        this.eventSetContinue.set();
        await this.safeSleep(10);
      }
    } else {
      // Just wait for the callback to finish.
      await this.safeSleep(10_000);
    }

    this.eventReturning.set();
    // Do not set complete. This should happen inside the base class when run impl finishes.
  }

  end() {
    this.endCalled = true;
  }

  routeChanged() {
    return this.routeChangedResult;
  }
}

/** Waits until predicate() is true (the polling loops of Python, which the timeouts of pytest end). */
async function waitUntil(predicate, pollMs = 10, timeoutMs = 5000) {
  const deadline = Date.now() + timeoutMs;
  while (!predicate()) {
    if (Date.now() > deadline) throw new Error(`Timed out waiting until ${predicate}`);
    await sleep(pollMs);
  }
}

/** Calls an RPC of the servicer, like service.Method(request, None) in Python. */
function rpc(service, method, request) {
  return new Promise((resolve, reject) => {
    service[method]({ request }, (err, response) => (err ? reject(err) : resolve(response)));
  });
}

function endTimeIn(service, seconds) {
  return secondsToTimestamp(service.robot.timeSec() + seconds);
}

async function runCallback(service) {
  let response = await rpc(service, 'areaCallbackInformation', new AreaCallbackInformationRequest());
  assert.ok(response.hasInfo());
  assert.strictEqual(response.getInfo().getRequiredLeaseResourcesList().length, 1);
  assert.strictEqual(response.getInfo().getRequiredLeaseResourcesList()[0], 'body');

  response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTimeIn(service, 5)));
  const handler = service.areaCallbackRegionHandler;
  assert.ok(handler);
  assert.notStrictEqual(response.getCommandId(), 0);
  assert.ok(handler.startCalled);
  const commandId = response.getCommandId();

  let request = new UpdateCallbackRequest().setCommandId(101);
  response = await rpc(service, 'updateCallback', request);
  assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_INVALID_COMMAND_ID);

  await handler.eventSetStop.wait(100);
  request = new UpdateCallbackRequest().setCommandId(commandId).setStage(Stage.STAGE_TO_START);
  response = await rpc(service, 'updateCallback', request);
  assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_OK);
  assert.strictEqual(response.getPolicy().getAtStart(), Option.OPTION_STOP);

  request = new UpdateCallbackRequest().setCommandId(commandId).setStage(Stage.STAGE_AT_START);
  response = await rpc(service, 'updateCallback', request);
  assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_OK);
  await handler.eventAtStart.wait(500);

  request = new UpdateCallbackRequest().setCommandId(commandId).setStage(Stage.STAGE_AT_START);
  response = await rpc(service, 'updateCallback', request);
  assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_OK);
  assert.strictEqual(response.getPolicy().getAtStart(), Option.OPTION_CONTROL);

  let lease = new leasePb.Lease().setResource('body').setSequenceList([1]);
  request = new BeginControlRequest().setLeasesList([lease]).setCommandId(commandId + 101);
  response = await rpc(service, 'beginControl', request);
  assert.strictEqual(response.getStatus(), BeginControlResponse.Status.STATUS_INVALID_COMMAND_ID);

  lease = new leasePb.Lease().setResource('mobility').setSequenceList([1]);
  request = new BeginControlRequest().setLeasesList([lease]).setCommandId(commandId);
  response = await rpc(service, 'beginControl', request);
  assert.strictEqual(response.getStatus(), BeginControlResponse.Status.STATUS_MISSING_LEASE_RESOURCES);

  // Inject a newer lease into the lease validator and make sure it fails.
  const newLease = new leasePb.Lease().setResource('body').setSequenceList([2]);
  service._leaseValidator.testAndSetActiveLease(newLease, false);
  const oldLease = new leasePb.Lease().setResource('body').setSequenceList([1]);
  request = new BeginControlRequest().setLeasesList([oldLease]).setCommandId(commandId);
  response = await rpc(service, 'beginControl', request);
  assert.strictEqual(response.getStatus(), BeginControlResponse.Status.STATUS_LEASE_ERROR);

  handler.isInControl = true;
  lease = new leasePb.Lease().setResource('body').setSequenceList([3]);
  request = new BeginControlRequest().setLeasesList([lease]).setCommandId(commandId);
  response = await rpc(service, 'beginControl', request);
  assert.strictEqual(response.getStatus(), BeginControlResponse.Status.STATUS_OK);
  // The lease is in the wallet of the robot, which uses a sublease of it (not checked by Python).
  assert.deepStrictEqual(service.robot.leaseWallet.getLease('body').leaseProto.getSequenceList(), [3, 0]);

  await handler.eventAtControl.wait(500);
  await handler.eventSetContinue.wait(500);
  request = new UpdateCallbackRequest().setCommandId(commandId).setEndTime(endTimeIn(service, 5));
  response = await rpc(service, 'updateCallback', request);
  assert.strictEqual(response.getPolicy().getAtStart(), Option.OPTION_CONTINUE);

  request = new RouteChangeRequest().setCommandId(commandId + 5);
  response = await rpc(service, 'routeChange', request);
  assert.strictEqual(response.getStatus(), RouteChangeResponse.Status.STATUS_INVALID_COMMAND_ID);

  request = new RouteChangeRequest().setCommandId(commandId);
  response = await rpc(service, 'routeChange', request);
  assert.strictEqual(response.getStatus(), RouteChangeResponse.Status.STATUS_OK);

  handler.isInControl = false;
  await handler.eventReturning.wait(500);
  // Let the returning code set complete.
  await sleep(10);
  request = new UpdateCallbackRequest().setCommandId(commandId);
  response = await rpc(service, 'updateCallback', request);
  assert.ok(response.hasComplete());

  // Another route change should leave it still complete.
  request = new RouteChangeRequest().setCommandId(commandId);
  response = await rpc(service, 'routeChange', request);
  assert.strictEqual(response.getStatus(), RouteChangeResponse.Status.STATUS_OK);

  request = new UpdateCallbackRequest().setCommandId(commandId).setStage(Stage.STAGE_TO_END);
  response = await rpc(service, 'updateCallback', request);
  assert.ok(response.hasComplete());

  // Change the handler to request restarting run().
  handler.routeChangedResult.rerunIfStopped = true;
  // Now, a route change should restart the callback.
  request = new RouteChangeRequest().setCommandId(commandId);
  response = await rpc(service, 'routeChange', request);
  assert.strictEqual(response.getStatus(), RouteChangeResponse.Status.STATUS_OK);

  request = new UpdateCallbackRequest().setCommandId(commandId).setStage(Stage.STAGE_TO_END);
  response = await rpc(service, 'updateCallback', request);
  assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_OK);
  assert.strictEqual(response.getPolicy().getAtStart(), Option.OPTION_STOP);

  request = new EndCallbackRequest().setCommandId(commandId + 101);
  response = await rpc(service, 'endCallback', request);
  assert.strictEqual(response.getStatus(), EndCallbackResponse.Status.STATUS_INVALID_COMMAND_ID);

  request = new EndCallbackRequest().setCommandId(commandId);
  response = await rpc(service, 'endCallback', request);
  assert.strictEqual(response.getStatus(), EndCallbackResponse.Status.STATUS_OK);
  assert.ok(handler.endCalled);
  // The lease is removed from the wallet (not checked by Python).
  assert.throws(() => service.robot.leaseWallet.getLease('body'), NoSuchLease);
}

function makeService(handlerClass, requiredLeaseResources = ['body']) {
  const mockLease = new MockLeaseClient(false);
  const mockRobot = new MockRobot(mockLease);
  const config = new AreaCallbackServiceConfig('service-name', requiredLeaseResources, false);
  return new AreaCallbackServiceServicer(mockRobot, config, handlerClass);
}

/** The service of the fixture area_callback_service_test_impl: shut down after fn. */
async function withTestImpl(fn) {
  const service = makeService(AreaCallbackRegionHandlerImpl);
  try {
    await fn(service);
  } finally {
    await service.shutdown();
  }
}

test('test_basic_callback', { timeout: 10_000 }, async () => {
  await withTestImpl(async service => {
    await runCallback(service);
    await runCallback(service);
  });
});

test('test_wait_at_start_ends: ending from a blockUntilArrivedAtStart works', { timeout: 10_000 }, async () => {
  const run = async service => {
    let response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTimeIn(service, 5)));
    const handler = service.areaCallbackRegionHandler;
    assert.ok(handler);
    assert.notStrictEqual(response.getCommandId(), 0);
    assert.ok(handler.startCalled);
    const commandId = response.getCommandId();

    await handler.eventSetStop.wait(100);
    let request = new UpdateCallbackRequest().setCommandId(commandId).setStage(Stage.STAGE_TO_START);
    response = await rpc(service, 'updateCallback', request);
    assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_OK);
    assert.strictEqual(response.getPolicy().getAtStart(), Option.OPTION_STOP);

    request = new EndCallbackRequest().setCommandId(commandId);
    response = await rpc(service, 'endCallback', request);
    assert.strictEqual(response.getStatus(), EndCallbackResponse.Status.STATUS_OK);
  };
  await withTestImpl(async service => {
    await run(service);
    await run(service);
  });
});

test('test_wait_for_control_ends: ending from a blockUntilControl works', { timeout: 10_000 }, async () => {
  const run = async service => {
    let response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTimeIn(service, 5)));
    const handler = service.areaCallbackRegionHandler;
    assert.ok(handler);
    assert.notStrictEqual(response.getCommandId(), 0);
    assert.ok(handler.startCalled);
    const commandId = response.getCommandId();

    let request = new UpdateCallbackRequest().setCommandId(commandId).setStage(Stage.STAGE_AT_START);
    response = await rpc(service, 'updateCallback', request);
    assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_OK);
    await handler.eventAtStart.wait(500);

    request = new UpdateCallbackRequest().setCommandId(commandId).setStage(Stage.STAGE_AT_START);
    response = await rpc(service, 'updateCallback', request);
    assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_OK);
    assert.strictEqual(response.getPolicy().getAtStart(), Option.OPTION_CONTROL);

    request = new EndCallbackRequest().setCommandId(commandId);
    response = await rpc(service, 'endCallback', request);
    assert.strictEqual(response.getStatus(), EndCallbackResponse.Status.STATUS_OK);
  };
  await withTestImpl(async service => {
    await run(service);
    await run(service);
  });
});

test('test_expired_end_times', { timeout: 10_000 }, async () => {
  await withTestImpl(async service => {
    let response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTimeIn(service, -1)));
    assert.strictEqual(response.getCommandId(), 0);
    assert.strictEqual(response.getStatus(), BeginCallbackResponse.Status.STATUS_EXPIRED_END_TIME);

    response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTimeIn(service, 5)));
    assert.notStrictEqual(response.getCommandId(), 0);
    assert.strictEqual(response.getStatus(), BeginCallbackResponse.Status.STATUS_OK);

    await sleep(500);
    const commandId = response.getCommandId();
    let request = new UpdateCallbackRequest().setCommandId(commandId).setEndTime(endTimeIn(service, -1));
    response = await rpc(service, 'updateCallback', request);
    assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_EXPIRED_END_TIME);

    request = new EndCallbackRequest().setCommandId(commandId);
    response = await rpc(service, 'endCallback', request);
  });
});

class AreaCallbackServiceRegionHandlerThrows extends AreaCallbackRegionHandlerBase {
  begin() {
    return BeginCallbackResponse.Status.STATUS_OK;
  }

  run() {
    throw new Error('User run impl threw an exception.');
  }

  end() {
    // Nothing to end.
  }
}

async function runCallbackThrows(service) {
  let response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTimeIn(service, 2)));
  assert.notStrictEqual(response.getCommandId(), 0);
  const commandId = response.getCommandId();

  // Make sure the run impl has time to throw.
  const now = Date.now();
  while (Date.now() < now + 1000) {
    const request = new UpdateCallbackRequest().setCommandId(commandId);
    response = await rpc(service, 'updateCallback', request);
    assert.strictEqual(response.getStatus(), UpdateCallbackResponse.Status.STATUS_OK);
    if (response.hasError()) break;
    await sleep(10);
  }
  assert.ok(response.hasError());

  const request = new EndCallbackRequest().setCommandId(commandId);
  await rpc(service, 'endCallback', request);
}

test('test_callback_throws', { timeout: 10_000 }, async () => {
  const service = makeService(AreaCallbackServiceRegionHandlerThrows);
  await runCallbackThrows(service);
  await runCallbackThrows(service);
});

class AreaCallbackRegionHandlerRunForever extends AreaCallbackRegionHandlerBase {
  constructor(config, robot) {
    super(config, robot);
    this.shutdown = false;
  }

  begin() {
    return BeginCallbackResponse.Status.STATUS_OK;
  }

  async run() {
    // Unref: a failed test does not keep the process alive.
    while (!this.shutdown) await sleep(50, undefined, { ref: false });
  }

  end() {
    // Nothing to end.
  }
}

test('test_callback_run_forever', { timeout: 20_000 }, async () => {
  const service = makeService(AreaCallbackRegionHandlerRunForever);
  service._shutdownTimeout = 0.5;
  let response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTimeIn(service, 5)));
  assert.notStrictEqual(response.getCommandId(), 0);

  const commandId = response.getCommandId();
  let request = new EndCallbackRequest().setCommandId(commandId);
  response = await rpc(service, 'endCallback', request);
  assert.strictEqual(response.getStatus(), EndCallbackResponse.Status.STATUS_SHUTDOWN_CALLBACK_FAILED);

  // Calling EndCallback multiple times not a supported workflow, but required so test does not hang.
  service.areaCallbackRegionHandler.shutdown = true;
  request = new EndCallbackRequest().setCommandId(commandId);
  response = await rpc(service, 'endCallback', request);
  assert.strictEqual(response.getStatus(), EndCallbackResponse.Status.STATUS_OK);
});

test('test_callback_end_early: a callback ended early via EndCallback actually ends', { timeout: 10_000 }, async () => {
  const runOnce = async service => {
    let response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTimeIn(service, 5)));
    const handler = service.areaCallbackRegionHandler;
    assert.ok(handler);
    assert.notStrictEqual(response.getCommandId(), 0);
    assert.ok(handler.startCalled);
    const commandId = response.getCommandId();

    response = await rpc(service, 'endCallback', new EndCallbackRequest().setCommandId(commandId));
    assert.strictEqual(response.getStatus(), EndCallbackResponse.Status.STATUS_OK);
  };
  await withTestImpl(async service => {
    await runOnce(service);
    service.robot.time = 100;
    await runOnce(service);
  });
});

test('test_callback_end_timeout: a callback ended early via a timeout actually ends', { timeout: 10_000 }, async () => {
  const runOnce = async service => {
    const startTime = service.robot.timeSec();
    const endTime = secondsToTimestamp(startTime + 5);
    let response = await rpc(service, 'beginCallback', new BeginCallbackRequest().setEndTime(endTime));
    const handler = service.areaCallbackRegionHandler;
    assert.ok(handler);
    assert.notStrictEqual(response.getCommandId(), 0);
    assert.ok(handler.startCalled);
    const commandId = response.getCommandId();

    service.robot.time = startTime + 10;
    // Wait for the callback to time out and set an error.
    // If this doesn't happen, waitUntil() throws (the timeout of pytest in Python).
    await waitUntil(() => handler.updateResponse.hasError(), 100);

    // Make a new update call and we should get back the correct error.
    const request = new UpdateCallbackRequest().setCommandId(commandId).setEndTime(secondsToTimestamp(startTime + 15));
    response = await rpc(service, 'updateCallback', request);
    assert.strictEqual(response.getError().getError(), UpdateCallbackResponse.Error.ErrorType.ERROR_TIMED_OUT);
  };
  await withTestImpl(async service => {
    await runOnce(service);
    service.robot.time = 100;
    await runOnce(service);
  });
});

test('test_bad_handlers_init: calling blocking functions in the constructor breaks', async () => {
  const mockRobot = new MockRobot(new MockLeaseClient(false));
  const conf = new AreaCallbackServiceConfig('service-name', ['body']);

  // Calls the specified function in the constructor (the blocking functions are async: their promise is kept).
  class BadHandlerInit extends AreaCallbackRegionHandlerBase {
    constructor(config, robot, funcName) {
      super(config, robot);
      this.called = this[funcName]();
    }
  }

  await assert.rejects(new BadHandlerInit(conf, mockRobot, 'blockUntilControl').called, IncorrectUsage);
  await assert.rejects(new BadHandlerInit(conf, mockRobot, 'blockUntilArrivedAtStart').called, IncorrectUsage);
  await assert.rejects(new BadHandlerInit(conf, mockRobot, 'blockUntilArrivedAtEnd').called, IncorrectUsage);
});

test('test_bad_handlers_begin: calling blocking functions in begin() breaks', async () => {
  const mockRobot = new MockRobot(new MockLeaseClient(false));
  const conf = new AreaCallbackServiceConfig('service-name', ['body']);

  // Calls the specified function in begin()
  class BadHandlerBegin extends AreaCallbackRegionHandlerBase {
    constructor(config, robot, funcName) {
      super(config, robot);
      this.func = this[funcName].bind(this);
    }

    async begin() {
      await this.func();
      return BeginCallbackResponse.Status.STATUS_OK;
    }
  }

  const req = new BeginCallbackRequest();
  let handler = new BadHandlerBegin(conf, mockRobot, 'blockUntilControl');
  await assert.rejects(handler.begin(req), IncorrectUsage);
  handler = new BadHandlerBegin(conf, mockRobot, 'blockUntilArrivedAtStart');
  await assert.rejects(handler.begin(req), IncorrectUsage);
  handler = new BadHandlerBegin(conf, mockRobot, 'blockUntilArrivedAtEnd');
  await assert.rejects(handler.begin(req), IncorrectUsage);
});

test('test_bad_custom_params', async () => {
  const servicer = makeService(AreaCallbackRegionHandlerBase);

  const request = new BeginCallbackRequest();
  const nonexistentParam = new CustomParam().setIntValue(new Int64Param().setValue(5));
  request.setCustomParams(new DictParam());
  request.getCustomParams().getValuesMap().set('nonexistent_param', nonexistentParam);
  const response = await rpc(servicer, 'beginCallback', request);
  // This is a little hacky. Ideally I'd have a client hooked up here raising the exception.
  const exc = customParamsError(response);
  assert.notStrictEqual(exc, null);
  assert.ok(exc instanceof exceptions.CustomParamError);
  assert.strictEqual(exc.customParamError.getStatus(), CustomParamError.Status.STATUS_UNSUPPORTED_PARAMETER);
});

// ---------------------------------------------------------------------------------------------------------------
// The tests of the JS port: the helpers of area_callback_service_utils and area_callback_service_runner.
// ---------------------------------------------------------------------------------------------------------------

test('AreaCallbackServiceConfig parses the parameters with the spec of its information (it was missing)', () => {
  const config = new AreaCallbackServiceConfig('service-name', ['body']);
  assert.deepStrictEqual(config.areaCallbackInformation.getRequiredLeaseResourcesList(), ['body']);
  assert.deepStrictEqual(config.parseParams(new DictParam()), {});
  const params = new DictParam();
  params.getValuesMap().set('speed', new CustomParam().setIntValue(new Int64Param().setValue(5)));
  assert.throws(() => config.parseParams(params), /DictParam value contains keys \{'speed'\} not present in the spec/);
});

test(
  'handleServiceFaults faults the service while a service it needs is unavailable (it was missing)',
  { timeout: 10_000 },
  async () => {
    const registered = new Set();
    const faults = [];
    const calls = [];
    const directoryClient = {
      getEntry: name =>
        registered.has(name)
          ? Promise.resolve({})
          : Promise.reject(new NonexistentServiceError(null, `${name} does not exist`)),
    };
    const robotStateClient = {
      getRobotState: () =>
        Promise.resolve(
          new RobotState().setServiceFaultState(new ServiceFaultState().setFaultsList(faults.map(f => f.clone()))),
        ),
    };
    const faultClient = {
      triggerServiceFault: fault => {
        calls.push(['trigger', fault.clone()]);
        faults.push(fault.clone());
        return Promise.resolve();
      },
      clearServiceFault: faultId => {
        calls.push(['clear', faultId.clone()]);
        faults.splice(
          faults.findIndex(fault => fault.getFaultId().getServiceName() === faultId.getServiceName()),
          1,
        );
        return Promise.resolve();
      },
    };
    const controller = new AbortController();
    const loop = handleServiceFaults(faultClient, robotStateClient, directoryClient, 'my-service', ['prereq'], {
      signal: controller.signal,
    });
    const waitForCalls = async count => {
      await waitUntil(() => calls.length >= count, 20);
    };

    // Not registered: not faulted.
    await sleep(700);
    assert.deepStrictEqual(calls, []);

    // Registered, without the service it needs: faulted.
    registered.add('my-service');
    await waitForCalls(1);
    const [kind, fault] = calls[0];
    assert.strictEqual(kind, 'trigger');
    assert.strictEqual(fault.getFaultId().getFaultName(), 'my-service');
    assert.strictEqual(fault.getFaultId().getServiceName(), 'my-service');
    assert.strictEqual(fault.getSeverity(), ServiceFault.Severity.SEVERITY_CRITICAL);
    assert.strictEqual(fault.getErrorMessage(), 'Faulted due to issues with prereq');

    // The service it needs is back: the fault is cleared.
    registered.add('prereq');
    await waitForCalls(2);
    assert.strictEqual(calls[1][0], 'clear');
    assert.strictEqual(calls[1][1].getServiceName(), 'my-service');

    // The service it needs is faulted: faulted again.
    faults.push(new ServiceFault().setFaultId(new ServiceFaultId().setFaultName('broken').setServiceName('prereq')));
    await waitForCalls(3);
    assert.strictEqual(calls[2][0], 'trigger');
    assert.strictEqual(calls[2][1].getErrorMessage(), 'Faulted due to issues with prereq');

    controller.abort();
    await loop;
    assert.strictEqual(calls.length, 3);

    // An error which is not an error of the SDK ends the loop (the thread of Python).
    const brokenDirectory = { getEntry: () => Promise.reject(new TypeError('broken directory')) };
    await assert.rejects(
      handleServiceFaults(faultClient, robotStateClient, brokenDirectory, 'my-service', ['prereq']),
      TypeError,
    );
  },
);

test('runService starts the service, and keeps its directory registration alive (it was missing)', async () => {
  const calls = [];
  const dirRegClient = {
    unregister: name => {
      calls.push(['unregister', name]);
      return Promise.resolve();
    },
    register: (...args) => {
      calls.push(['register', ...args.slice(0, 5)]);
      return Promise.resolve();
    },
    update: (...args) => {
      calls.push(['update', ...args.slice(0, 5)]);
      return Promise.resolve();
    },
  };
  const service = makeService(AreaCallbackRegionHandlerImpl);
  const { robot } = service;
  const ensureClient = robot.ensureClient.bind(robot);
  robot.ensureClient = name =>
    name === DirectoryRegistrationClient.defaultServiceName ? Promise.resolve(dirRegClient) : ensureClient(name);

  const [runner, keepAlive] = await runService(robot, service, 0, '10.0.0.5');
  const client = new AreaCallbackClient();
  client.channel = new grpc.Channel(`127.0.0.1:${runner.port}`, grpc.credentials.createInsecure(), {});
  try {
    assert.deepStrictEqual(calls.slice(0, 2), [
      ['unregister', 'service-name'],
      ['register', 'service-name', 'bosdyn.api.graph_nav.AreaCallbackService', 'service-name', '10.0.0.5', runner.port],
    ]);
    assert.ok(keepAlive.isAlive());
    // The service answers through the gRPC server.
    const response = await client.areaCallbackInformation();
    assert.deepStrictEqual(response.getInfo().getRequiredLeaseResourcesList(), ['body']);
  } finally {
    client.channel.close();
    await keepAlive.shutdown();
    await runner.stop();
  }
});
