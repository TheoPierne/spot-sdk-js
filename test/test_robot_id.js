'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout: sleep } = require('node:timers/promises');

const grpc = require('@grpc/grpc-js');

const helpers = require('./helpers');
const robot_id_pb = require('../bosdyn/api/robot_id_pb');
const { RobotIdServiceClient, RobotIdServiceService } = require('../bosdyn/api/robot_id_service_grpc_pb');
const { TimedOutError } = require('../bosdyn-client/exceptions');
const { RobotIdClient, version_array } = require('../bosdyn-client/robot_id');

class MockRobotIdServicer extends RobotIdServiceClient {
  constructor(rpc_delay = 0, robot_id = null) {
    super('0.0.0.0:54520', grpc.ChannelCredentials.createInsecure());
    this._rpc_delay = rpc_delay;
    this._robot_id = robot_id || new robot_id_pb.RobotId();
  }

  async getRobotId(request) {
    const resp = new robot_id_pb.RobotIdResponse();
    helpers.add_common_header(resp, request);
    resp.setRobotId(this._robot_id);
    await sleep(this._rpc_delay);
    return resp;
  }
}

function _setup(rpc_delay = 0, robot_id = null) {
  const client = new RobotIdClient();
  const server = helpers.setup_client_and_service(client, {
    service: RobotIdServiceService,
    func: {
      getRobotId(call, callback) {
        const reply = new robot_id_pb.RobotIdResponse();
        helpers.add_common_header(reply, call.request);

        /*const versionSoftwareRelease = new robot_id_pb.SoftwareVersion()
          .setMajorVersion(1)
          .setMinorVersion(1)
          .setPatchLevel(12);

        const softwareRelease = new robot_id_pb.RobotSoftwareRelease().setVersion(versionSoftwareRelease);

        const robotId = new robot_id_pb.RobotId()
          .setSerialNumber('B12313')
          .setNickname('goofball')
          .setSpecies('spot')
          .setVersion('1.1.12')
          .setSoftwareRelease(softwareRelease)
          .setComputerSerialNumber('fdafds');*/

        reply.setRobotId(call.request.getRobotId()); //
        callback(null, reply);
      },
    },
  });
  const service = new MockRobotIdServicer(rpc_delay, robot_id);
  return [client, service, server];
}

function _create_fake_robot_id() {
  const robot_id = new robot_id_pb.RobotId();
  robot_id.setSerialNumber('B12313');
  robot_id.setSpecies('spot');
  robot_id.setVersion('1.1.12');
  robot_id.setNickname('goofball');
  robot_id.setComputerSerialNumber('fdafds');

  const versionSoftwareRelease = new robot_id_pb.SoftwareVersion()
    .setMajorVersion(1)
    .setMinorVersion(1)
    .setPatchLevel(12);
  const softwareRelease = new robot_id_pb.RobotSoftwareRelease().setVersion(versionSoftwareRelease);

  robot_id.setSoftwareRelease(softwareRelease);
  return robot_id;
}

function _check_robot_id(robot_id) {
  assert.strictEqual(robot_id.getSerialNumber(), 'B12313');
  assert.strictEqual(robot_id.getSpecies(), 'spot');
}

test('test_get_robot_id', async () => {
  const [client, , server] = _setup(0, _create_fake_robot_id());
  const robot_id = await client.get_id();
  _check_robot_id(robot_id);
  server.forceShutdown();
});

test('test_get_robot_id_timeout', () => {
  const timeout = 100;
  const [client, , server] = _setup(2 * timeout, _create_fake_robot_id());
  assert
    .rejects(async () => {
      await client.get_id({ timeout });
    }, TimedOutError)
    .then(() => server.forceShutdown());
});

test('test_version_tuple', async () => {
  const [client, , server] = _setup(0, _create_fake_robot_id());
  const robot_id = await client.get_id();
  assert.deepStrictEqual(version_array(robot_id.getSoftwareRelease().getVersion()), [1, 1, 12]);
  server.forceShutdown();
});
