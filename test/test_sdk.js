'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const process = require('node:process');
const test = require('node:test');

const { BaseClient } = require('../bosdyn-client/common');
const { AddRequestHeader } = require('../bosdyn-client/processors');
const { UnregisteredServiceNameError } = require('../bosdyn-client/robot');
const { Sdk } = require('../bosdyn-client/sdk');

class ServiceClientMock extends BaseClient {
  static default_service_name = 'mock';
  static service_type = 'bosdyn.api.Mock';

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

  static _create_sdk(client_name = 'sdk-test', cert = null) {
    const sdk = new Sdk();
    sdk.client_name = client_name;
    sdk.cert = cert || SdkTest.CA_CERT;
    return sdk;
  }

  static _create_secure_channel(robot, port = 54321, authority = 'null.spot.robot') {
    return robot.create_secure_channel(port, authority);
  }

  static _create_robot(sdk, nickname = 'my-robot-name', address = 'no-address') {
    const robot = sdk.create_robot(address, nickname);
    return robot;
  }
}

test('test_constructor', () => {
  const client = new BaseClient(() => null);
  assert.strictEqual(client.request_processors.length, 0);
  assert.strictEqual(client.response_processors.length, 0);
});

test('test_robot_creation', () => {
  const sdk = SdkTest._create_sdk();

  const request_p = { id: 0 };
  const response_p = { id: 1 };
  sdk.request_processors.push(request_p);
  sdk.response_processors.push(response_p);

  const kAddress = 'foo.bar';
  const robot = SdkTest._create_robot(sdk, 'my-robot-name', kAddress);
  assert.ok(kAddress in sdk.robots);
  assert.ok(robot.request_processors.some(e => e.id === 0));
  assert.ok(robot.response_processors.some(e => e.id === 1));
  assert.ok(!robot.response_processors.some(e => e.id === 0));
  assert.ok(!robot.request_processors.some(e => e.id === 1));
  assert.deepStrictEqual(sdk.robots[kAddress], sdk.create_robot(kAddress));
});

test('test_client_name_propagation', () => {
  const sdk = SdkTest._create_sdk();
  sdk.request_processors.push(new AddRequestHeader(() => sdk.client_name));
  const robot = SdkTest._create_robot(sdk, 'test-robot');
  sdk.client_name = 'changed-my-mind';

  let found_header_processor = false;
  for (const proc of robot.request_processors) {
    if (proc instanceof AddRequestHeader) {
      assert.strictEqual(sdk.client_name, proc.get_client_name());
      found_header_processor = true;
    }
  }
  assert.ok(found_header_processor);
});

test('test_client_creation', async () => {
  const service_name = ServiceClientMock.default_service_name;
  const service_type = ServiceClientMock.service_type;
  const sdk = SdkTest._create_sdk();
  const robot = SdkTest._create_robot(sdk, 'test-robot');
  assert.rejects(async () => {
    await robot.ensure_client(service_name);
  }, UnregisteredServiceNameError);
  robot.service_type_by_name[service_name] = service_type;
  robot.service_client_factories_by_type[service_type] = ServiceClientMock;
  await robot.ensure_client(service_name, robot.ensure_secure_channel('the-knights-of-ni'));
});

test('test_load_robot_cert', () => {
  const sdk = new Sdk();
  sdk.load_robot_cert();
  const cert = process.env.NODE_ENV !== 'production' ? 'ca.crt' : 'robot.pem';
  assert.ok(sdk.cert.equals(readFileSync(path.join('..', 'bosdyn-client', 'resources', cert))));
  assert.throws(() => {
    sdk.load_robot_cert('this-path-does-not-exist');
  }, Error);
});
