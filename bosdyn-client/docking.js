'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const { BaseClient, error_factory } = require('./common');
const { ResponseError } = require('./exceptions');
const { add_lease_wallet_processors } = require('./lease');
const { CommandFailedError } = require('./robot_command');

const docking_pb = require('../bosdyn/api/docking/docking_pb');
const docking_service_grpc_pb = require('../bosdyn/api/docking/docking_service_grpc_pb');

class DockingClient extends BaseClient {
  static default_service_name = 'docking';
  static service_type = 'bosdyn.api.docking.DockingService';

  constructor() {
    super(docking_service_grpc_pb.DockingServiceClient);
  }

  update_from(other) {
    super.update_from(other);
    if (this.lease_wallet) add_lease_wallet_processors(this, this.lease_wallet);
  }

  docking_command(station_id, clock_identifier, end_time, prep_pose_behavior = null, lease = null, args) {
    const req = this._docking_command_request(lease, station_id, clock_identifier, end_time, prep_pose_behavior);
    return this.call(
      this._stub.dockingCommand,
      req,
      this._docking_id_from_response,
      _docking_command_error_from_response,
      args,
    );
  }

  docking_command_async(station_id, clock_identifier, end_time, prep_pose_behavior = null, lease = null, args) {
    const req = this._docking_command_request(lease, station_id, clock_identifier, end_time, prep_pose_behavior);
    return this.call_async(
      this._stub.dockingCommand,
      req,
      this._docking_id_from_response,
      _docking_command_error_from_response,
      args,
    );
  }

  docking_command_feedback(command_id, args) {
    const req = this._docking_command_feedback_request(command_id);
    return this.call(
      this._stub.dockingCommandFeedback,
      req,
      this._docking_status_from_response,
      _docking_feedback_error_from_response,
      args,
    );
  }

  docking_command_feedback_async(command_id, args) {
    const req = this._docking_command_feedback_request(command_id);
    return this.call_async(
      this._stub.dockingCommandFeedback,
      req,
      this._docking_status_from_response,
      _docking_feedback_error_from_response,
      args,
    );
  }

  get_docking_config(args) {
    const req = new docking_pb.GetDockingConfigRequest();
    return this.call(
      this._stub.getDockingConfig,
      req,
      this._docking_config_from_response,
      _docking_get_config_error_from_response,
      args,
    );
  }

  get_docking_config_async(args) {
    const req = new docking_pb.GetDockingConfigRequest();
    return this.call_async(
      this._stub.getDockingConfig,
      req,
      this._docking_config_from_response,
      _docking_get_config_error_from_response,
      args,
    );
  }

  get_docking_state(args) {
    const req = new docking_pb.GetDockingStateRequest();
    return this.call(
      this._stub.getDockingState,
      req,
      this._docking_state_from_response,
      _docking_get_state_error_from_response,
      args,
    );
  }

  get_docking_state_async(args) {
    const req = new docking_pb.GetDockingStateRequest();
    return this.call_async(
      this._stub.getDockingState,
      req,
      this._docking_state_from_response,
      _docking_get_state_error_from_response,
      args,
    );
  }

  _docking_command_request(lease, station_id, clock_identifier, end_time, prep_pose_behavior) {
    return new docking_pb.DockingCommandRequest()
      .setLease(lease)
      .setDockingStationId(station_id)
      .setClockIdentifier(clock_identifier)
      .setEndTime(end_time)
      .setPrepPoseBehavior(prep_pose_behavior);
  }

  _docking_command_feedback_request(command_id) {
    return new docking_pb.DockingCommandFeedbackRequest().setDockingCommandId(command_id);
  }

  _docking_id_from_response(response) {
    return response.getDockingCommandId();
  }

  _docking_status_from_response(response) {
    return response.getStatus();
  }

  _docking_config_from_response(response) {
    return response.getDockConfigs();
  }

  _docking_state_from_response(response) {
    return response.getDockState();
  }
}

const _DOCKING_COMMAND_STATUS_TO_ERROR = {
  [docking_pb.DockingCommandResponse.Status.STATUS_OK]: [null, null],
};

function _docking_command_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(docking_pb.DockingCommandResponse.Status),
    _DOCKING_COMMAND_STATUS_TO_ERROR,
  );
}

function _docking_feedback_error_from_response(response) {
  return null;
}

function _docking_get_config_error_from_response(response) {
  return null;
}

function _docking_get_state_error_from_response(response) {
  return null;
}

async function blocking_dock_robot(robot, dock_id, num_retries = 4) {
  const docking_client = await robot.ensure_client(DockingClient.default_service_name);

  let attempt_number = 0;
  let docking_success = false;

  /* eslint-disable no-await-in-loop */
  while (attempt_number < num_retries && !docking_success) {
    attempt_number += 1;
    const cmd_end_time = Date.now() + 30_000;
    const cmd_timeout = cmd_end_time + 10_000;

    const prep_pose =
      attempt_number % 2
        ? docking_pb.PrepPoseBehavior.PREP_POSE_USE_POSE
        : docking_pb.PrepPoseBehavior.PREP_POSE_SKIP_POSE;

    const time_sync = await robot.time_sync;

    const cmd_id = await docking_client.docking_command(
      dock_id,
      time_sync.endpoint.clock_identifier,
      await time_sync.robot_timestamp_from_local_secs(cmd_end_time),
      prep_pose,
    );

    const statusDocking = docking_pb.DockingCommandFeedbackResponse.Status;

    while (Date.now() < cmd_timeout) {
      const status = await docking_client.docking_command_feedback(cmd_id);
      if (status === statusDocking.STATUS_IN_PROGRESS) {
        await sleep(1_000);
      } else if (status === statusDocking.STATUS_DOCKED) {
        docking_success = true;
        break;
      } else if ([statusDocking.STATUS_MISALIGNED, statusDocking.STATUS_ERROR_COMMAND_TIMED_OUT].includes(status)) {
        break;
      } else {
        throw new CommandFailedError(`Docking Failed, status: '${statusDocking[status]}'`);
      }
    }
  }

  if (docking_success) return attempt_number - 1;

  try {
    await blocking_go_to_prep_pose(robot, dock_id);
  } catch (e) {
    // Pass
  }

  throw new CommandFailedError('Docking Failed, too many attempts');
}

async function blocking_go_to_prep_pose(robot, dock_id, timeout = 20_000) {
  const docking_client = await robot.ensure_client(DockingClient.default_service_name);

  const cmd_end_time = Date.now() + timeout;
  const cmd_timeout = cmd_end_time + 10_000;

  const time_sync = await robot.time_sync;

  const cmd_id = await docking_client.docking_command(
    dock_id,
    time_sync.endpoint.clock_identifier,
    await time_sync.robot_timestamp_from_local_secs(cmd_end_time),
    docking_pb.PrepPoseBehavior.PREP_POSE_ONLY_POSE,
  );

  /* eslint-disable no-await-in-loop */
  while (Date.now() < cmd_timeout) {
    const status = await docking_client.docking_command_feedback(cmd_id);
    if (status === docking_pb.DockingCommandFeedbackResponse.Status.STATUS_IN_PROGRESS) {
      await sleep(1_000);
    } else if (status === docking_pb.DockingCommandFeedbackResponse.Status.STATUS_AT_PREP_POSE) {
      return;
    } else {
      throw new CommandFailedError(
        `Failed to go to the prep pose, status: '${docking_pb.DockingCommandFeedbackResponse.Status[status]}'`,
      );
    }
  }
  throw new CommandFailedError('Error going to the prep pose, timeout exceeded.');
}

async function blocking_undock(robot, timeout = 20_000) {
  const docking_client = await robot.ensure_client(DockingClient.default_service_name);

  const cmd_end_time = Date.now() + timeout;
  const cmd_timeout = cmd_end_time + 10;

  const time_sync = await robot.time_sync;

  const cmd_id = await docking_client.docking_command(
    0,
    time_sync.endpoint.clock_identifier,
    await time_sync.robot_timestamp_from_local_secs(cmd_end_time),
    docking_pb.PrepPoseBehavior.PREP_POSE_UNDOCK,
  );

  /* eslint-disable no-await-in-loop */
  while (Date.now() < cmd_timeout) {
    const status = await docking_client.docking_command_feedback(cmd_id);
    if (status === docking_pb.DockingCommandFeedbackResponse.Status.STATUS_IN_PROGRESS) {
      await sleep(1_000);
    } else if (status === docking_pb.DockingCommandFeedbackResponse.Status.STATUS_AT_PREP_POSE) {
      return;
    } else {
      throw new CommandFailedError(
        `Failed to undock the robot, status: '${docking_pb.DockingCommandFeedbackResponse.Status[status]}'`,
      );
    }
  }

  throw new CommandFailedError('Error undocking the robot, timeout exceeded.');
}

module.exports = {
  DockingClient,
  blocking_dock_robot,
  blocking_go_to_prep_pose,
  blocking_undock,
};
