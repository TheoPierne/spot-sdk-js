'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const process = require('node:process');
const test = require('node:test');

const { BaseClient } = require('../src/bosdyn-client/common');
const { AddRequestHeader } = require('../src/bosdyn-client/processors');
const { UnregisteredServiceNameError } = require('../src/bosdyn-client/robot');
const { Sdk } = require('../src/bosdyn-client/sdk');

class ServiceClientMock extends BaseClient {
  static defaultServiceName = 'mock';
  static serviceType = 'bosdyn.api.Mock';

  constructor() {
    super(class A {});
  }
}

class SdkTest {
  static CA_CERT = Buffer.from(`-----BEGIN CERTIFICATE-----
    Lovely Spam! Wonderful Spam!
    Lovely Spam! Wonderful Spam
    Spa-a-a-a-a-a-a-am
    Spa-a-a-a-a-a-a-am
    Spa-a-a-a-a-a-a-am
    Spa-a-a-a-a-a-a-am
    Lovely Spam! (Lovely Spam!)
    Lovely Spam! (Lovely Spam!)
    Lovely Spam!
    Spam, Spam, Spam, Spam!
    -----END CERTIFICATE-----`);

  static _createSdk(client_name = 'sdk-test', cert = null) {
    const sdk = new Sdk();
    sdk.clientName = client_name;
    sdk.cert = cert || SdkTest.CA_CERT;
    return sdk;
  }

  static _createSecureChannel(robot, port = 54321, authority = 'null.spot.robot') {
    return robot.createSecureChannel(port, authority);
  }

  static _createRobot(sdk, nickname = 'my-robot-name', address = 'no-address') {
    const robot = sdk.createRobot(address, nickname);
    return robot;
  }
}

test('test_constructor', () => {
  const client = new BaseClient(() => null);
  assert.strictEqual(client.requestProcessors.length, 0);
  assert.strictEqual(client.responseProcessors.length, 0);
});

test('test_robot_creation', () => {
  const sdk = SdkTest._createSdk();

  const requestP = { id: 0 };
  const responseP = { id: 1 };
  sdk.requestProcessors.push(requestP);
  sdk.responseProcessors.push(responseP);

  const kAddress = 'foo.bar';
  const robot = SdkTest._createRobot(sdk, 'my-robot-name', kAddress);
  assert.ok(kAddress in sdk.robots);
  assert.ok(robot.requestProcessors.some(e => e.id === 0));
  assert.ok(robot.responseProcessors.some(e => e.id === 1));
  assert.ok(!robot.responseProcessors.some(e => e.id === 0));
  assert.ok(!robot.requestProcessors.some(e => e.id === 1));
  assert.deepStrictEqual(sdk.robots[kAddress], sdk.createRobot(kAddress));
});

test('test_client_name_propagation', () => {
  const sdk = SdkTest._createSdk();
  sdk.requestProcessors.push(new AddRequestHeader(() => sdk.clientName));
  const robot = SdkTest._createRobot(sdk, 'test-robot');
  sdk.clientName = 'changed-my-mind';

  let foundHeaderProcessor = false;
  for (const proc of robot.requestProcessors) {
    if (proc instanceof AddRequestHeader) {
      assert.strictEqual(sdk.clientName, proc.getClientName());
      foundHeaderProcessor = true;
    }
  }
  assert.ok(foundHeaderProcessor);
});

test('test_client_creation', async () => {
  const serviceName = ServiceClientMock.defaultServiceName;
  const serviceType = ServiceClientMock.serviceType;
  const sdk = SdkTest._createSdk();
  const robot = SdkTest._createRobot(sdk, 'test-robot');
  assert.rejects(async () => {
    await robot.ensureClient(serviceName);
  }, UnregisteredServiceNameError);
  robot.serviceTypeByName[serviceName] = serviceType;
  robot.serviceClientFactoriesByType[serviceType] = ServiceClientMock;
  await robot.ensureClient(serviceName, robot.ensureSecureChannel('the-knights-of-ni'));
});

test('test_load_robot_cert', () => {
  const sdk = new Sdk();
  sdk.loadRobotCert();
  const cert = process.env.NODE_ENV !== 'production' ? 'ca.crt' : 'robot.pem';
  assert.ok(sdk.cert.equals(readFileSync(path.join('..', 'src', 'bosdyn-client', 'resources', cert))));
  assert.throws(() => {
    sdk.loadRobotCert('this-path-does-not-exist');
  }, Error);
});
