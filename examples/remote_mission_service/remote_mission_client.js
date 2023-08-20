// Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).

// Example of how to talk to the remote mission service examples in this directory.
'use strict';

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');
const grpc = require('@grpc/grpc-js');
const argparse = require('argparse');
// From contextlib import ExitStack

const remote_pb = require('../../bosdyn/api/mission/remote_pb');
const util_pb = require('../../bosdyn/api/mission/util_pb');
const channeler = require('../../bosdyn-client/channel');
const { UnimplementedError } = require('../../bosdyn-client/exceptions');
const { LeaseClient, LeaseKeepAlive } = require('../../bosdyn-client/lease');
const util = require('../../bosdyn-client/util');
const { RemoteClient } = require('../../bosdyn-mission/remote_client');
const clients = require('../../index');

async function main() {
  const parser = argparse.ArgumentParser();
  const group = parser.add_mutually_exclusive_group({ required: true });
  group.add_argument('--hello-world', { action: 'store_true', help: 'Target the Hello World remote mission service.' });
  group.add_argument('--power-off', { action: 'store_true', help: 'Target the Power Off remote mission service.' });
  parser.add_argument('--user-string', {
    help: 'Specify the user-string input to Tick. Set to the node name in Autowalk missions.',
  });

  const subparsers = parser.add_subparsers({ help: 'Select how this service will be accessed.', dest: 'host_type' });
  // Create the parser for the "local" command.
  const local_parser = subparsers.add_parser('local', { help: 'Connect to a locally hosted service.' });
  util.add_service_endpoint_arguments(local_parser);
  // Create the parser for the "robot" command.
  const robot_parser = subparsers.add_parser('robot', {
    help: 'Connect to a service through the robot directory.',
  });
  util.add_base_arguments(robot_parser);

  const options = parser.parse_args();

  var directory_name, lease_resources;
  if (options.hello_world) {
    directory_name = 'hello-world-callback';
    // lease_resources = Array(1);
  } else if (options.power_off) {
    directory_name = 'power-off-callback';
    // lease_resources = LeaseClient.DEFAULT_RESOURCES;
  }
  var client, robot;
  // If attempting to communicate directly to the service.
  if (options.host_type === 'local') {
    // Build a client that can talk directly to the RemoteMissionService implementation.
    client = new RemoteClient();
    // Point the client at the service. We're assuming there is no encryption to set up.
    // client.channel = new grpc.Client(`${options.host_ip}:${options.port}`, grpc.credentials.createInsecure());
    // eslint-disable-next-line max-len
    // client.channel = channeler.create_insecure_channel(`${options.host_ip}:${options.port}`);
    client.channel = channeler.create_insecure_channel(options.host_ip, options.port);

    // Else if attempting to communicate through the robot.
  } else {
    // Register the remote mission client with the SDK instance.
    const sdk = clients.sdk.create_standard_sdk('RemoteMissionClientExample');
    sdk.register_service_client(RemoteClient, null, directory_name);

    robot = sdk.create_robot(options.hostname);
    await util.authenticate(robot);

    // Create the remote mission client.
    client = await robot.ensure_client(directory_name);
  }
  var inputs = [];
  var input_values = [];

  if (options.user_string) {
    var name = 'user-string';
    inputs = new util_pb.VariableDeclaration().setName(name).setType(util_pb.VariableDeclaration.Type.TYPE_STRING);
    // eslint-disable-next-line max-len
    input_values = new util_pb.KeyValue()
      .setKey(name)
      .setValue(new util_pb.ConstantValue().setStringValue(options.user_string));
  }
  // Use an ExitStack because we might or might not have a lease keep-alive
  // depending on command line arguments
  let lease_client, session_id;
  if (options.host_type !== 'local') {
    try {
      // eslint-disable-next-line no-undef
      lease_client = await robot.ensure_client(LeaseClient.default_service_name);
      await lease_client.acquire();

      // The rest of the code that uses the leaseClient
    } finally {
      if (lease_client) {
        // await lease_client.return_lease();
      }
    }
  }
  try {
    session_id = await client.establish_session([], inputs);
  } catch (error) {
    if (error instanceof UnimplementedError) {
      console.log('EstablishSession is unimplemented.');
      session_id = null;
    }
  }

  // Begin ticking, and tick until the server indicates something other than RUNNING.
  let response = await client.tick(session_id, [], input_values);

  while (response.getStatus() === remote_pb.TickResponse.Status.STATUS_RUNNING) {
    // Sleep(() => {
    //   response = client.tick(session_id, input_values, lease_resources);
    // }, 100);
    sleep(100);
    response = client.tick(session_id, [], input_values);
  }
  console.log(`Servicer stopped with status ${response.getStatus()}`);
  if (response.error_message) {
    console.log(`\tError message: ${response.error_message}`);
  }

  try {
    // We're done ticking for now -- stop this session.
    await client.stop(session_id);
    // We don't want to tick with this particular session every again -- tear it down.
    await client.teardown_session(session_id);
  } catch (exc) {
    if (exc instanceof client.UnimplementedError) {
      console.log('Either Stop or TeardownSession is unimplemented.');
    }
  }
}
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}
