//  Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).

// Example of how to run a RemoteMissionService servicer."""
'use strict';

// Import logging

// from bosdyn.client.auth import AuthResponseError

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');
const grpc = require('@grpc/grpc-js');
const remote_pb = require('../../bosdyn/api/mission/remote_pb');
const remote_service_grpc_pb = require('../../bosdyn/api/mission/remote_service_grpc_pb');
const {
  DirectoryRegistrationClient,
  DirectoryRegistrationKeepAlive,
} = require('../../bosdyn-client/directory_registration');
// Const { Lease, LeaseClient } = require('../../bosdyn-client/lease');
// const { RobotCommandBuilder, RobotCommandClient } = require('../../bosdyn-client/robot_command');
// const { ResponseContext } = require('../../bosdyn-client/server_util');
const { ResponseContext } = require('../../bosdyn-client/server_util');
const util = require('../../bosdyn-client/util');
// From bosdyn.client.server_util import GrpcServiceRunner, ResponseContext
const { setup_logging, GrpcServiceRunner } = require('../../bosdyn-client/util');
const util_mission = require('../../bosdyn-mission/util.js');
const client = require('../../index');
const { Server } = require('@grpc/grpc-js/build/src/server');
const { RemoteClient } = require('../../bosdyn-mission/remote_client');

const DIRECTORY_NAME = 'hello-world-callback';
const AUTHORITY = 'remote-mission';
const SERVICE_TYPE = 'bosdyn.api.mission.RemoteMissionService';

// Class HelloWorldServicer {
class HelloWorldServicer extends RemoteClient {
  constructor() {
    super(remote_service_grpc_pb.RemoteMissionServiceServicer);
  }
  /* """Every tick, logs 'Hello world!'

    Shows an example of these concepts:
     - Ticking.
     - Using inputs.
    """*/

  async tick(request) {
    let response = new remote_pb.TickResponse();
    var context = new ResponseContext(response, request);
    try {
      await context.enter();
      // This.data_buffer_client = await this.robot.ensure_client(DataBufferClient.default_service_name);
      // var context = ResponseContext(response, request);
      // context.enter();
      // try {
      //   response = cloneDeep(this.request_manager.get_status_proto(request.getRequestId()));
      // } catch (e) {
      //   response.setStatus(response.STATUS_REQUEST_ID_DOES_NOT_EXIST);
      // }
      // populate_response_header(response, request);
      // return response;
      // ResponseContext(response, request);

      let name = 'World';

      // request.forEach(keyvalue => {
      //   if (keyvalue.key === 'user-string') {
      //     name = util_mission.get_value_from_constant_value_message(keyvalue.value.constant);
      //   }
      // });

      console.log('Hello %s!', name);
      await response.setStatus(remote_pb.TickResponse.Status.STATUS_SUCCESS);
    } finally {
      await context.exit();
    }
    return response;
  }

  async establishSession(request) {
    let response = new remote_pb.EstablishSessionResponse();
    var context = new ResponseContext(response, request);
    try {
      await context.enter();
      console.log('EstablishSession unimplemented!');
      response.setStatus(remote_pb.EstablishSessionResponse.Status.STATUS_OK);
    } finally {
      await context.exit();
    }
    return response;
  }
  async Stop(request) {
    let response = new remote_pb.StopResponse();
    var context = new ResponseContext(response, request);
    try {
      await context.enter();
      // ResponseContext(response, request);
      console.log('Stop unimplemented!');
      response.setStatus(remote_pb.StopResponse.Status.STATUS_OK);
    } finally {
      await context.exit();
    }
    return response;
  }
  async TeardownSession(request) {
    let response = new remote_pb.TeardownSessionResponse();
    var context = new ResponseContext(response, request);
    try {
      await context.enter();
      // ResponseContext(response, request);
      console.log('TeardownSession unimplemented!');
      response.setStatus(remote_pb.TeardownSessionResponse.Status.STATUS_OK);
    } finally {
      await context.exit();
    }
    return response;
  }
}

function run_service(port) {
  // Proto service specific function used to attach a servicer to a server.
  const add_servicer_to_server_fn = remote_service_grpc_pb.RemoteMissionServiceService;
  const service_servicer = new HelloWorldServicer();
  // const test = new remote_service_grpc_pb.RemoteMissionServiceClient('localhost:43', grpc.credentials.createInsecure());
  const test = remote_service_grpc_pb.RemoteMissionServiceClient.prototype;
  return new GrpcServiceRunner(service_servicer, add_servicer_to_server_fn, port, test);
}

if (require.main === module) {
  main();
}

async function main() {
  //  Define all arguments used by this service.
  const argparse = require('argparse');
  //  Create the top-level parser.
  const parser = argparse.ArgumentParser();
  const subparsers = parser.add_subparsers({ help: 'Select how this service will be accessed.', dest: 'host_type' });

  // # Create the parser for the "local" command.
  const local_parser = subparsers.add_parser('local', { help: 'Run this example locally.' });
  util.add_service_hosting_arguments(local_parser);

  // # Create the parser for the "robot" command.
  const robot_parser = subparsers.add_parser('robot', { help: 'Run this example with a robot in the loop.' });
  util.add_base_arguments(robot_parser);
  util.add_service_endpoint_arguments(robot_parser);

  const options = parser.parse_args();

  // # If using the example without a robot in the loop, start up the service, which can be
  // # be accessed directly at localhost:options.port.
  var service_runner;
  if (options.host_type === 'local') {
    // # Setup logging to use INFO level.
    // setup_logging();
    service_runner = await run_service(options.port);
    console.log(`${DIRECTORY_NAME} service running.\nCtrl + C to shutdown.`);
    await service_runner.run_until_interrupt();
    await process.exit(0);
  }

  // # Setup logging to use either INFO level or DEBUG level.
  // setup_logging(options.verbose);

  // # Create and authenticate a bosdyn robot object.
  const sdk = client.sdk.create_standard_sdk('HelloWorldMissionServiceSDK');
  const robot = sdk.create_robot(options.hostname);
  await util.authenticate(robot);

  service_runner = await run_service(options.port);

  // Use a keep alive to register the service with the robot directory.
  const dir_reg_client = await robot.ensure_client(DirectoryRegistrationClient.default_service_name);
  const keep_alive = new DirectoryRegistrationKeepAlive(dir_reg_client);
  keep_alive.start(DIRECTORY_NAME, SERVICE_TYPE, AUTHORITY, options.host_ip, service_runner.port);
  try {
    service_runner.run_until_interrupt();
  } finally {
    await keep_alive.shutdown();
  }
}
