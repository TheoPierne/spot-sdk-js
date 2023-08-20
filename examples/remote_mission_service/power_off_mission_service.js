/* eslint-disable no-unused-vars */
//  Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
//  Downloading, reproducing, distributing or otherwise using the SDK Software
//  is subject to the terms and conditions of the Boston Dynamics Software
//  Development Kit License (20191101-BDSDK-SL).

// """Example of how to run a RemoteMissionService servicer."""

// import logging
'use strict';

// Import string
const grpc = require('@grpc/grpc-js');

// From bosdyn.api import basic_command_pb,
const basic_command_pb = require('../../bosdyn/api/basic_command_pb');
const header_pb = require('../../bosdyn/api/header_pb');
const remote_pb = require('../../bosdyn/api/mission/remote_pb');
const remote_service_grpc_pb = require('../../bosdyn/api/mission/remote_service_grpc_pb');
const robot_command_pb = require('../../bosdyn/api/robot_command_pb');
// Const util_mission = require('../../bosdyn/api/mission/util_pb');
// Const { AuthResponseError } = require('../../bosdyn-client/auth');
const {
  DirectoryRegistrationClient,
  DirectoryRegistrationKeepAlive,
} = require('../../bosdyn-client/directory_registration');
const { LeaseUseError } = require('../../bosdyn-client/exceptions');
// From bosdyn.client.directory_registration import (DirectoryRegistrationClient,
//   DirectoryRegistrationKeepAlive)
const { Lease, LeaseClient } = require('../../bosdyn-client/lease');
const { RobotCommandBuilder, RobotCommandClient } = require('../../bosdyn-client/robot_command');
const time_sync = require('../../bosdyn-client/time_sync');
const util = require('../../bosdyn-client/util');
// From bosdyn.client.server_util import GrpcServiceRunner, ResponseContext
const { setup_logging } = require('../../bosdyn-client/util');
const client = require('../../index');
// From bosdyn.mission import util

const DIRECTORY_NAME = 'power-off-callback';
const AUTHORITY = 'remote-mission';
const SERVICE_TYPE = 'bosdyn.api.mission.RemoteMissionService';

// class PowerOffServicer extends remote_service_grpc_pb.RemoteMissionServiceServicer {
class PowerOffServicer {
  constructor(bosdyn_sdk_robot) {
    // super();
    this.lock = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    this.bosdyn_sdk_robot = bosdyn_sdk_robot;
    this.sessions_by_id = {};
    this._used_session_ids = [];
    this.RESOURCE = 'body';
  }

  async Tick(request) {
    let response = new remote_pb.TickResponse();
    console.debug(
      'Ticked with session ID "%s" %i leases and %i inputs',
      request.session_id,
      request.leases.length,
      request.inputs.length,
    );
    try {
      await this.lock;
      await this._tick_implementation(request, response);
    } finally {
      this.lock.resolve();
    }
    return response;
  }

  async _tick_implementation(request, response) {
    if (!(request.session_id in this.sessions_by_id)) {
      console.error('Do not know about session ID "%s"', request.session_id);
      response.status = remote_pb.TickResponse.STATUS_INVALID_SESSION_ID;
      return;
    }
    let current_lease = this._sublease_or_none(request.leases, response, remote_pb.TickResponse.STATUS_MISSING_LEASES);
    if (!current_lease) {
      return;
    }
    let node_name = '<unknown>';
    for (let keyvalue of request.inputs) {
      if (keyvalue.key === 'user-string') {
        node_name = util.getValueFromConstantValueMessage(keyvalue.value.constant);
      }
    }
    console.info('Ticked by node "%s"', node_name);
    let cmd_client = this.bosdyn_sdk_robot.ensureClient(RobotCommandClient.default_service_name);
    cmd_client.lease_wallet.add(current_lease);
    let lease_client = this.bosdyn_sdk_robot.ensureClient(LeaseClient.default_service_name);
    lease_client.retainLeaseAsync(current_lease);
    await this._perform_and_monitor_power_off(cmd_client, request.session_id, response);
  }

  async _perform_and_monitor_power_off(cmd_client, session_id, response) {
    try {
      let command_future,
        feedback_future = this.sessions_by_id[session_id];
      if (!command_future) {
        command_future = cmd_client.robotCommandAsync(RobotCommandBuilder.safePowerOffCommand());
        this.sessions_by_id[session_id] = [command_future, null];
      }
      if (command_future.done) {
        // eslint-disable-next-line no-unused-vars
        let command_id = await command_future.result();
      }
      if (!feedback_future) {
        // eslint-disable-next-line no-undef
        feedback_future = cmd_client.robotCommandFeedbackAsync(command_id);
        this.sessions_by_id[session_id] = [command_future, feedback_future];
      }
      if (feedback_future.done) {
        // eslint-disable-next-line no-unused-vars
        let command_response = await feedback_future.result();
      }

      // Rest of the code logic goes here
    } catch (error) {
      if (error instanceof LeaseUseError) {
        console.error('LeaseUseError: "%s"', error.message);
        response.status = remote_pb.TickResponse.STATUS_RUNNING;
        response.lease_use_results.add().CopyFrom(error.response.lease_use_result);
        this.sessions_by_id[session_id] = [null, null];
      } else {
        console.error('Error: "%s"', error.message);
        response.error_message = error.message;
        response.status = remote_pb.TickResponse.STATUS_FAILURE;
      }
    }

    //  Shortname for the object that holds the top-level command status codes.
    const cmd_status_codes = robot_command_pb.RobotCommandFeedbackResponse;
    //  Shortname for the object that holds the SafePowerOff-specific codes.
    const safe_off_status_codes = basic_command_pb.SafePowerOffCommand.Feedback;
    //  Shortname for the recently-read SafePowerOff status code.
    // eslint-disable-next-line no-undef
    const status = command_response.feedback.full_body_feedback.safe_power_off_feedback.status;

    switch (status) {
      case safe_off_status_codes.STATUS_PROCESSING:
        response.status = remote_pb.TickResponse.STATUS_RUNNING;
        break;
      case safe_off_status_codes.STATUS_ROBOT_FROZEN:
        response.status = remote_pb.TickResponse.STATUS_PAUSED;
        break;
      case safe_off_status_codes.STATUS_SUCCESS:
        response.status = remote_pb.TickResponse.STATUS_SUCCESS;
        this.sessions_by_id[session_id] = [null, null];
        break;
      case cmd_status_codes.STATUS_CANCELLED:
        response.status = remote_pb.TickResponse.STATUS_CANCELLED;
        this.sessions_by_id[session_id] = [null, null];
        break;
      case cmd_status_codes.STATUS_FAILED:
        response.status = remote_pb.TickResponse.STATUS_FAILURE;
        this.sessions_by_id[session_id] = [null, null];
        break;
      default:
        response.status = remote_pb.TickResponse.STATUS_FAILURE;
        this.sessions_by_id[session_id] = [null, null];
        break;
    }
  }

  subleaseOrNone(leases, response, errorCode) {
    //  Look for the lease that we want.
    const matchingLeases = leases.filter(lease => lease.resource === this.RESOURCE);

    //  There should be exactly one match.
    if (matchingLeases.length === 1) {
      const providedLease = new Lease(matchingLeases[0]);
      return providedLease.createSublease();
    }
    //  If there are NO leases, that's definitely an error.
    if (!matchingLeases.length) {
      response.status = errorCode;
      response.missingLeaseResources.push(this.RESOURCE);
      return null;
    }

    //  Provided more than one lease for the resource!
    response.header.error.code = header_pb.CommonError.CODE_INVALID_REQUEST;
    response.header.error.message = `${matchingLeases.length} leases on resource ${this.RESOURCE}`;
    return null;
  }

  establishSession(request) {
    const response = new remote_pb.EstablishSessionResponse();
    console.log(`Establishing session with ${request.leases.length} leases and ${request.inputs.length} inputs`);
    this._establishSessionImplementation(request, response);
    return response;
  }
  _getUniqueRandomSessionId() {
    // """Create a random 16-character session ID that hasn't been used."""
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // MISSING
      const sessionId = Array.from({ length: 16 }, () => Math.random().toString(36).charAt(2)).join('');
      if (!this._usedSessionIds.includes(sessionId)) {
        return sessionId;
      }
    }
  }

  _establishSessionImplementation(request, response) {
    //  Get a new session ID.
    const currentLease = this._subleaseOrNone(
      request.leases,
      response,
      remote_pb.EstablishSessionResponse.STATUS_MISSING_LEASES,
    );
    if (!currentLease) {
      return;
    }
    try {
      //  We need to establish a time synchronization in order to send commands.
      this.bosdyn_sdk_robot.time_sync.wait_for_sync();
    } catch (error) {
      if (error instanceof time_sync.TimedOutError) {
        response.header.error.code = header_pb.CommonError.CODE_INTERNAL_SERVER_ERROR;
        response.header.error.message = 'Failed to time sync with robot';
        return;
      }
      throw error;
    }

    const sessionId = this._getUniqueRandomSessionId();
    //  Note: If you plan to run this servicer for a long time, you may want to bound the size of
    //  sessionsById and _usedSessionIds.
    this.sessionsById[sessionId] = [null, null];
    this._usedSessionIds.push(sessionId);
    response.session_id = sessionId;

    //  If you're using leases, you can also be sure that the client has indicated the
    //  correct lease resources in their EstablishSessionRequest. For now, assume no leases
    //  are needed, and return an OK status.
    response.status = remote_pb.EstablishSessionResponse.STATUS_OK;
  }

  stop(request) {
    const response = new remote_pb.StopResponse();
    console.log(`Stopping session "${request.session_id}"`);
    this._stopImplementation(request, response);
    return response;
  }
  _stopImplementation(request, response) {
    //  Try to cancel any extant futures, then clear them from internal state.
    const sessionId = request.session_id;
    if (!this.sessionsById[sessionId]) {
      response.status = remote_pb.StopResponse.STATUS_INVALID_SESSION_ID;
      return;
    }
    const [commandFuture, feedbackFuture] = this.sessionsById[sessionId];
    if (commandFuture) {
      commandFuture.cancel();
    }
    if (feedbackFuture) {
      feedbackFuture.cancel();
    }
    //  By resetting the session ID's state, the next Tick RPC will behave as if Tick had not been
    //  called yet. You, as an implementer, can decide what exactly happens as part of Stop().
    //  It will usually be called immediately after Tick returns a SUCCESS or FAILURE status code.
    this.sessionsById[sessionId] = [null, null];
    response.status = remote_pb.StopResponse.STATUS_OK;
  }

  async TeardownSession(request) {
    let response = new remote_pb.TeardownSessionResponse();
    console.debug('Tearing down session "%s"', request.session_id);
    try {
      await this.lock;
      await this._teardown_session_implementation(request, response);
    } finally {
      this.lock.resolve();
    }
    return response;
  }
  // eslint-disable-next-line require-await
  async _teardown_session_implementation(request, response) {
    if (request.session_id in this.sessions_by_id) {
      delete this.sessions_by_id[request.session_id];
      response.status = remote_pb.TeardownSessionResponse.STATUS_OK;
    } else {
      response.status = remote_pb.TeardownSessionResponse.STATUS_INVALID_SESSION_ID;
    }
  }
}
function run_service(bosdyn_sdk_robot, port) {
  const add_servicer_to_server_fn = remote_service_grpc_pb.RemoteMissionServiceService;
  const service_servicer = new PowerOffServicer(bosdyn_sdk_robot);
  const test = remote_service_grpc_pb.RemoteMissionServiceClient.prototype;
  return new util.GrpcServiceRunner(service_servicer, add_servicer_to_server_fn, port, test);
}

if (require.main === module) {
  main();
}

async function main() {
  //  Define all arguments used by this service.
  const argparse = require('argparse');

  //  Create the top-level parser.
  const parser = argparse.ArgumentParser();
  util.add_base_arguments(parser);
  util.add_service_endpoint_arguments(parser);
  const options = parser.parse_args();

  //  Create and authenticate a bosdyn robot object.
  const sdk = client.sdk.create_standard_sdk('PowerOffMissionServiceSDK');
  const robot = sdk.create_robot(options.hostname);
  await util.authenticate(robot);

  //  Create a service runner to start and maintain the service on background thread.
  const service_runner = await run_service(robot, options.port);

  //  Use a keep alive to register the service with the robot directory.
  const dir_reg_client = await robot.ensure_client(DirectoryRegistrationClient.default_service_name);
  const keep_alive = new DirectoryRegistrationKeepAlive(dir_reg_client);
  keep_alive.start(DIRECTORY_NAME, SERVICE_TYPE, AUTHORITY, options.host_ip, service_runner.port);

  try {
    service_runner.run_until_interrupt();
  } finally {
    await keep_alive.shutdown();
  }
}
