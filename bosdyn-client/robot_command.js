'use strict';

const { setTimeout: sleep } = require('node:timers/promises');
const any_pb = require('google-protobuf/google/protobuf/any_pb');
const wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb');

const { BaseClient, error_factory } = require('./common');
const { ResponseError, InvalidRequestError, UnsetStatusError } = require('./exceptions');
const { BODY_FRAME_NAME, ODOM_FRAME_NAME, get_se2_a_tform_b } = require('./frame_helpers');
const { add_lease_wallet_processors } = require('./lease');
const { SE2Pose } = require('./math_helpers');
const geometry = require('../bosdyn-core/geometry');
const { seconds_to_duration } = require('../bosdyn-core/util');
const arm_command_pb = require('../bosdyn/api/arm_command_pb');
const basic_command_pb = require('../bosdyn/api/basic_command_pb');
const full_body_command_pb = require('../bosdyn/api/full_body_command_pb');
const geometry_pb = require('../bosdyn/api/geometry_pb');
const gripper_command_pb = require('../bosdyn/api/gripper_command_pb');
const mobility_command_pb = require('../bosdyn/api/mobility_command_pb');
const robot_command_pb = require('../bosdyn/api/robot_command_pb');
const robot_command_service_grpc_pb = require('../bosdyn/api/robot_command_service_grpc_pb');
const spot_command_pb = require('../bosdyn/api/spot/robot_command_pb');
const synchronized_command_pb = require('../bosdyn/api/synchronized_command_pb');
const trajectory_pb = require('../bosdyn/api/trajectory_pb');

const _CLAW_GRIPPER_OPEN_ANGLE = -1.5708;
const _CLAW_GRIPPER_CLOSED_ANGLE = 0;

class RobotCommandResponseError extends ResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'RobotCommandResponseError';
  }
}

class NoTimeSyncError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'NoTimeSyncError';
  }
}

class ExpiredError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'ExpiredError';
  }
}

class TooDistantError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'TooDistantError';
  }
}

class NotPoweredOnError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'NotPoweredOnError';
  }
}

class BehaviorFaultError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'BehaviorFaultError';
  }
}

class NotClearedError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'NotClearedError';
  }
}

class UnsupportedError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'UnsupportedError';
  }
}

class CommandFailedError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'CommandFailedError';
  }
}

class CommandTimedOutError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'CommandTimedOutError';
  }
}

class UnknownFrameError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'UnknownFrameError';
  }
}

class DockedError extends RobotCommandResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'DockedError';
  }
}

class _TimeConverter {
  constructor(parent, endpoint) {
    this._parent = parent;
    this._endpoint = endpoint;
    this._converter = null;
  }

  get obj() {
    if (!this._converter) {
      const endpoint = this._endpoint || this._parent.timesync_endpoint;
      this._converter = endpoint.get_robot_time_converter();
    }
    return this._converter;
  }

  convert_timestamp_from_local_to_robot(timestamp) {
    this.obj.convert_timestamp_from_local_to_robot(timestamp);
  }

  robot_timestamp_from_local_secs(end_time_secs) {
    return this.obj.robot_timestamp_from_local_secs(end_time_secs);
  }
}

const END_TIME_EDIT_TREE = {
  synchronized_command: {
    mobility_command: {
      '@command': {
        se2_velocity_request: {
          end_time: null,
        },
        se2_trajectory_request: {
          end_time: null,
        },
        stance_request: {
          end_time: null,
        },
      },
    },
    arm_command: {
      '@command': {
        arm_velocity_command: {
          end_time: null,
        },
      },
    },
  },
  mobility_command: {
    '@command': {
      se2_velocity_request: {
        end_time: null,
      },
      se2_trajectory_request: {
        end_time: null,
      },
      stance_request: {
        end_time: null,
      },
    },
  },
};

const EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME = {
  synchronized_command: {
    mobility_command: {
      '@command': {
        se2_trajectory_request: {
          trajectory: {
            reference_time: null,
          },
        },
      },
    },
    gripper_command: {
      '@command': {
        claw_gripper_command: {
          trajectory: {
            reference_time: null,
          },
        },
      },
    },
    arm_command: {
      '@command': {
        arm_cartesian_command: {
          pose_trajectory_in_task: {
            reference_time: null,
          },
          wrench_trajectory_in_task: {
            reference_time: null,
          },
        },
        arm_joint_move_command: {
          trajectory: {
            reference_time: null,
          },
        },
        arm_gaze_command: {
          target_trajectory_in_frame1: {
            reference_time: null,
          },
          tool_trajectory_in_frame2: {
            reference_time: null,
          },
        },
      },
    },
  },
  mobility_command: {
    '@command': {
      se2_trajectory_request: {
        trajectory: {
          reference_time: null,
        },
      },
    },
  },
};

function _edit_proto(proto, edit_tree, edit_fn) {
  const protoObject = proto.toObject();
  for (let [key, subtree] of Object.entries(edit_tree)) {
    if (key.startsWith('@')) {
      console.log('[ROBOT COMMAND] Warning test feature en cours de dev', key, subtree);
      const which_oneof = proto.getCommandCase();
      if (which_oneof === 0 || !subtree.includes(which_oneof)) return;
      _edit_proto(protoObject[which_oneof], subtree[which_oneof], edit_fn);
    } else if (subtree) {
      if (Object.hasOwn(protoObject, key)) {
        _edit_proto(protoObject[key], subtree, edit_fn);
      }
    } else {
      edit_fn(key, protoObject);
    }
  }
}

/**
 * Client for calling RobotCommand services.
 * @extends {BaseClient}
 */
class RobotCommandClient extends BaseClient {
  static default_service_name = 'robot-command';
  static service_type = 'bosdyn.api.RobotCommandService';

  constructor() {
    super(robot_command_service_grpc_pb.RobotCommandServiceClient);
    this._timesync_endpoint = null;
  }

  /**
   * Update instance from another object.
   * @param  {Object} other The object where to copy from.
   * @returns {void}
   */
  async update_from(other) {
    super.update_from(other);
    if (this.lease_wallet) add_lease_wallet_processors(this, this.lease_wallet);

    try {
      this._timesync_endpoint = (await other.time_sync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Accessor for timesync-endpoint that was grabbed via 'update_from()'.
   * @type {TimeSyncEndpoint}
   * @readonly
   */
  get timesync_endpoint() {
    if (!this._timesync_endpoint) {
      throw new NoTimeSyncError(null, 'No timesync endpoint was passed to robot command client.');
    }
    return this._timesync_endpoint;
  }

  /**
   * Issue a command to the robot asynchronously.
   * @param  {RobotCommandBuilder} command Command to issue.
   * @param  {number} [end_time_secs] End time for the command in seconds.
   * @param  {TimeSyncEndpoint} [timesync_endpoint] Timesync endpoint.
   * @param  {Lease} [lease] Lease object to use for the command.
   * @param  {Object} args Options to provide for gRPC request.
   * @returns {Promise<string>} Return the id of the command's callback.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {InvalidRequestError} Invalid request received by the robot.
   * @throws {UnsupportedError} The API supports this request, but the system does not support this request.
   * @throws {NoTimeSyncError} Client has not done timesync with robot.
   * @throws {ExpiredError} The command was received after its max_duration had already passed.
   * @throws {TooDistantError} The command end time was too far in the future.
   * @throws {NotPoweredOnError} The robot must be powered on to accept a command.
   * @throws {BehaviorFaultError} The robot is faulted and the fault must be cleared first.
   * @throws {DockedError} The command cannot be executed while the robot is docked.
   * @throws {UnknownFrameError} Robot does not know how to handle supplied frame.
   */
  robot_command(command, end_time_secs = null, timesync_endpoint = null, lease = null, args) {
    const req = this._get_robot_command_request(lease, command);
    this._update_command_timestamps(req.getCommand(), end_time_secs, timesync_endpoint);
    return this.call(this._stub.robotCommand, req, _robot_command_value, _robot_command_error, args);
  }

  /**
   * Get feedback from a previously issued command.
   * @param  {string} robot_command_id ID of the robot command to get feedback on.
   * @param  {Object} args Options to provide for gRPC request.
   * @returns {Promise<robot_command_pb.RobotCommandFeedbackResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  robot_command_feedback(robot_command_id, args) {
    const req = this._get_robot_command_feedback_request(robot_command_id);
    return this.call(this._stub.robotCommandFeedback, req, null, _robot_command_feedback_error, args);
  }

  /**
   * Clear a behavior fault on the robot.
   * @param  {string} behavior_fault_id ID of the behavior fault.
   * @param  {Lease} [lease] Lease information to use in the message.
   * @param  {Object} args Options to provide for gRPC request.
   * @returns {Promise<boolean>} Boolean whether response status is STATUS_CLEARED.
   */
  clear_behavior_fault(behavior_fault_id, lease = null, args) {
    const req = this._get_clear_behavior_fault_request(lease, behavior_fault_id);
    return this.call(
      this._stub.clearBehaviorFault,
      req,
      _clear_behavior_fault_value,
      _clear_behavior_fault_error,
      args,
    );
  }

  _get_robot_command_request(lease, command) {
    return new robot_command_pb.RobotCommandRequest()
      .setLease(lease)
      .setCommand(command)
      .setClockIdentifier(this.timesync_endpoint.clock_identifier);
  }

  _update_command_timestamps(command, end_time_secs, timesync_endpoint) {
    const converter = new _TimeConverter(this, timesync_endpoint);

    function _set_end_time(key, proto) {
      if (!(key in proto)) return;
      proto[key] = converter.robot_timestamp_from_local_secs(end_time_secs);
    }

    function _to_robot_time(key, proto) {
      if (!(key in proto)) return;
      let timestamp = proto[key];
      converter.convert_timestamp_from_local_to_robot(timestamp);
    }

    if (end_time_secs) _edit_proto(command, END_TIME_EDIT_TREE, _set_end_time);

    _edit_proto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _to_robot_time);
  }

  _get_robot_command_feedback_request(robot_command_id) {
    return new robot_command_pb.RobotCommandFeedbackRequest().setRobotCommandId(robot_command_id);
  }

  _get_clear_behavior_fault_request(lease, behavior_fault_id) {
    return new robot_command_pb.ClearBehaviorFaultRequest().setLease(lease).setBehaviorFaultId(behavior_fault_id);
  }
}

function _robot_command_value(response) {
  return response.getRobotCommandId();
}

const _ROBOT_COMMAND_STATUS_TO_ERROR = {
  [robot_command_pb.RobotCommandResponse.Status.STATUS_OK]: [null, null],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_INVALID_REQUEST]: [
    InvalidRequestError,
    'The provided request arguments are ill-formed or invalid, independent of the system state.',
  ],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_UNSUPPORTED]: [
    UnsupportedError,
    'The API supports this request, but the system does not support this request.',
  ],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_NO_TIMESYNC]: [
    NoTimeSyncError,
    'Client has not done timesync with robot.',
  ],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_EXPIRED]: [
    ExpiredError,
    'The command was received after its max_duration had already passed.',
  ],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_TOO_DISTANT]: [
    TooDistantError,
    'The command end time was too far in the future.',
  ],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_NOT_POWERED_ON]: [
    NotPoweredOnError,
    'The robot must be powered on to accept a command.',
  ],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_BEHAVIOR_FAULT]: [
    BehaviorFaultError,
    'The robot may not be commanded with uncleared behavior faults.',
  ],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_DOCKED]: [
    DockedError,
    'The command cannot be executed while the robot is docked.',
  ],
  [robot_command_pb.RobotCommandResponse.Status.STATUS_UNKNOWN_FRAME]: [
    UnknownFrameError,
    'Robot does not know how to handle supplied frame.',
  ],
};

function _robot_command_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(robot_command_pb.RobotCommandResponse.Status),
    _ROBOT_COMMAND_STATUS_TO_ERROR,
  );
}

function _robot_command_feedback_error(response) {
  const code = robot_command_pb.RobotCommandFeedbackResponse.Status.STATUS_UNKNOWN;
  /* eslint-disable */
  if (
    response.getStatus() !== code ||
    response.getFeedback().getFullBodyFeedback().getStatus() ||
    response.getFeedback().getSynchronizedFeedback().getMobilityCommandFeedback().getStatus() ||
    response.getFeedback().getSynchronizedFeedback().getArmCommandFeedback().getStatus() ||
    response.getFeedback().getSynchronizedFeedback().getGripperCommandFeedback().getStatus()
    ) {
    return null;
} else {
	return UnsetStatusError(response);
}
  /* eslint-enable */
}

function _clear_behavior_fault_value(response) {
  return response.getStatus() === robot_command_pb.ClearBehaviorFaultResponse.Status.STATUS_CLEARED;
}

const _CLEAR_BEHAVIOR_FAULT_STATUS_TO_ERROR = {
  [robot_command_pb.ClearBehaviorFaultResponse.Status.STATUS_CLEARED]: [null, null],
  [robot_command_pb.ClearBehaviorFaultResponse.Status.STATUS_NOT_CLEARED]: [
    NotClearedError,
    'Behavior fault could not be cleared.',
  ],
};

function _clear_behavior_fault_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(robot_command_pb.ClearBehaviorFaultResponse.Status),
    _CLEAR_BEHAVIOR_FAULT_STATUS_TO_ERROR,
  );
}

class RobotCommandBuilder {
  /** *******************
   * Full body commands *
   *********************/

  static stop_command() {
    const full_body_command = new full_body_command_pb.FullBodyCommand.Request().setStopRequest(
      new basic_command_pb.StopCommand.Request(),
    );
    const command = new robot_command_pb.RobotCommand().setFullBodyCommand(full_body_command);
    return command;
  }

  static freeze_command() {
    const full_body_command = new full_body_command_pb.FullBodyCommand.Request().setFreezeRequest(
      new basic_command_pb.FreezeCommand.Request(),
    );
    const command = new robot_command_pb.RobotCommand().setFullBodyCommand(full_body_command);
    return command;
  }

  static selfright_command() {
    const full_body_command = new full_body_command_pb.FullBodyCommand.Request().setSelfrightRequest(
      new basic_command_pb.SelfRightCommand.Request(),
    );
    const command = new robot_command_pb.RobotCommand().setFullBodyCommand(full_body_command);
    return command;
  }

  static battery_change_pose_command(dir_hint = 1) {
    const batteryChangePoseCommand = new basic_command_pb.BatteryChangePoseCommand.Request().setDirectionHint(dir_hint);
    const full_body_command = new full_body_command_pb.FullBodyCommand.Request().setBatteryChangePoseRequest(
      batteryChangePoseCommand,
    );
    const command = new robot_command_pb.RobotCommand().setFullBodyCommand(full_body_command);
    return command;
  }

  static safe_power_off_command() {
    const full_body_command = new full_body_command_pb.FullBodyCommand.Request().setSafePowerOffRequest(
      new basic_command_pb.SafePowerOffCommand.Request(),
    );
    const command = new robot_command_pb.RobotCommand().setFullBodyCommand(full_body_command);
    return command;
  }

  static constrained_manipulation_command(
    task_type,
    init_wrench_direction_in_frame_name,
    force_limit,
    torque_limit,
    frame_name,
    tangential_speed = null,
    rotational_speed = null,
  ) {
    const full_body_command = new full_body_command_pb.FullBodyCommand.Request();

    if (tangential_speed !== null) {
      const constrainedManipulationCommand = new basic_command_pb.ConstrainedManipulationCommand.Request()
        .setTaskType(task_type)
        .setInitWrenchDirectionInFrameName(init_wrench_direction_in_frame_name)
        .setFrameName(frame_name)
        .setTangentialSpeed(tangential_speed);

      full_body_command.setConstrainedManipulationRequest(constrainedManipulationCommand);
    } else if (rotational_speed !== null) {
      const constrainedManipulationCommand = new basic_command_pb.ConstrainedManipulationCommand.Request()
        .setTaskType(task_type)
        .setInitWrenchDirectionInFrameName(init_wrench_direction_in_frame_name)
        .setFrameName(frame_name)
        .setRotationalSpeed(rotational_speed);

      full_body_command.setConstrainedManipulationRequest(constrainedManipulationCommand);
    } else {
      throw new Error('Need either translational or rotational speed');
    }

    full_body_command.getConstrainedManipulationRequest().getForceLimit().setValue(force_limit);
    full_body_command.getConstrainedManipulationRequest().getTorqueLimit().setValue(torque_limit);
    const command = new robot_command_pb.RobotCommand().setFullBodyCommand(full_body_command);
    return command;
  }

  /** *******************************
   * Mobility commands - DEPRECATED *
   *********************************/

  static trajectory_command(
    goal_x,
    goal_y,
    goal_heading,
    frame_name,
    params = null,
    body_height = 0.0,
    locomotion_hint = spot_command_pb.LocomotionHint.HINT_AUTO,
  ) {
    if (!params) params = RobotCommandBuilder.mobility_params(body_height, undefined, locomotion_hint);
    const any_params = RobotCommandBuilder._to_any(params);
    const position = new geometry_pb.Vec2().setX(goal_x).setY(goal_y);
    const pose = new geometry_pb.SE2Pose().setPosition(position).setAngle(goal_heading);
    const point = new trajectory_pb.SE2TrajectoryPoint().setPose(pose);
    const traj = new trajectory_pb.SE2Trajectory().setPointsList([point]);
    const traj_command = new basic_command_pb.SE2TrajectoryCommand.Request()
      .setTrajectory(traj)
      .setSe2FrameName(frame_name);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setSe2TrajectoryRequest(traj_command)
      .setParams(any_params);
    const command = new robot_command_pb.RobotCommand().setMobilityCommand(mobility_command);
    return command;
  }

  static velocity_command(
    v_x,
    v_y,
    v_rot,
    params = null,
    body_height = 0.0,
    locomotion_hint = spot_command_pb.LocomotionHint.HINT_AUTO,
    frame_name = BODY_FRAME_NAME,
  ) {
    // eslint-disable-next-line
    console.warn('[ROBOT COMMAND] Mobility commands are now sent as a part of synchronized commands. Use synchro_velocity_command instead.');
    if (!params) params = RobotCommandBuilder.mobility_params(body_height, undefined, locomotion_hint);
    const any_params = RobotCommandBuilder._to_any(params);
    const linear = new geometry_pb.Vec2().setX(v_x).setY(v_y);
    const vel = new geometry_pb.SE2Velocity().setLinear(linear).setAngular(v_rot);
    const slew_rate_limit = new geometry_pb.SE2Velocity()
      .setLinear(new geometry_pb.Vec2().setX(4).setY(4))
      .setAngular(2.0);
    const vel_command = new basic_command_pb.SE2VelocityCommand.Request()
      .setVelocity(vel)
      .setSlewRateLimit(slew_rate_limit)
      .setSe2FrameName(frame_name);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setSe2VelocityRequest(vel_command)
      .setParams(any_params);
    const command = new robot_command_pb.RobotCommand().setMobilityCommand(mobility_command);
    return command;
  }

  static stand_command(params = null, body_height = 0.0, footprint_R_body = new geometry.EulerZXY()) {
    // eslint-disable-next-line
    console.warn('[ROBOT COMMAND] Mobility commands are now sent as a part of synchronized commands. Use synchro_stand_command instead.');
    if (!params) params = RobotCommandBuilder.mobility_params(body_height, footprint_R_body);
    const any_params = RobotCommandBuilder._to_any(params);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setStandRequest(new basic_command_pb.StandCommand.Request())
      .setParams(any_params);
    const command = new robot_command_pb.RobotCommand().setMobilityCommand(mobility_command);
    return command;
  }

  static sit_command(params = null) {
    // eslint-disable-next-line
    console.warn('[ROBOT COMMAND] Mobility commands are now sent as a part of synchronized commands. Use synchro_sit_command instead.');
    if (!params) params = RobotCommandBuilder.mobility_params();
    const any_params = RobotCommandBuilder._to_any(params);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setSitRequest(new basic_command_pb.SitCommand.Request())
      .setParams(any_params);
    const command = new robot_command_pb.RobotCommand().setMobilityCommand(mobility_command);
    return command;
  }

  /** ***********************
   * Synchronized commands *
   ************************/

  static synchro_se2_trajectory_point_command(
    goal_x,
    goal_y,
    goal_heading,
    frame_name,
    params = null,
    body_height = 0.0,
    locomotion_hint = spot_command_pb.LocomotionHint.HINT_AUTO,
    build_on_command = null,
  ) {
    const position = new geometry_pb.Vec2().setX(goal_x).setY(goal_y);
    const pose = new geometry_pb.SE2Pose().setPosition(position).setAngle(goal_heading);
    return RobotCommandBuilder.synchro_se2_trajectory_command(
      pose,
      frame_name,
      params,
      body_height,
      locomotion_hint,
      build_on_command,
    );
  }

  static synchro_se2_trajectory_command(
    goal_se2,
    frame_name,
    params = null,
    body_height = 0.0,
    locomotion_hint = spot_command_pb.LocomotionHint.HINT_AUTO,
    build_on_command = null,
  ) {
    if (!params) params = RobotCommandBuilder.mobility_params(body_height, undefined, locomotion_hint);
    const any_params = RobotCommandBuilder._to_any(params);
    const point = new trajectory_pb.SE2TrajectoryPoint().setPose(goal_se2);
    const traj = new trajectory_pb.SE2Trajectory().setPointsList([point]);
    const traj_command = new basic_command_pb.SE2TrajectoryCommand.Request()
      .setTrajectory(traj)
      .setSe2FrameName(frame_name);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setSe2TrajectoryRequest(traj_command)
      .setParams(any_params);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setMobilityCommand(
      mobility_command,
    );
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static synchro_trajectory_command_in_body_frame(
    goal_x_rt_body,
    goal_y_rt_body,
    goal_heading_rt_body,
    frame_tree_snapshot,
    params = null,
    body_height = 0.0,
    locomotion_hint = spot_command_pb.LocomotionHint.HINT_AUTO,
  ) {
    const goto_rt_body = new SE2Pose(goal_x_rt_body, goal_y_rt_body, goal_heading_rt_body);
    const odom_tform_body = get_se2_a_tform_b(frame_tree_snapshot, ODOM_FRAME_NAME, BODY_FRAME_NAME);
    const odom_tform_goto = odom_tform_body.mult(goto_rt_body);
    return RobotCommandBuilder.synchro_se2_trajectory_command(
      odom_tform_goto,
      ODOM_FRAME_NAME,
      params,
      body_height,
      locomotion_hint,
    );
  }

  static synchro_velocity_command(
    v_x,
    v_y,
    v_rot,
    params = null,
    body_height = 0.0,
    locomotion_hint = spot_command_pb.LocomotionHint.HINT_AUTO,
    frame_name = BODY_FRAME_NAME,
    build_on_command = null,
  ) {
    if (!params) params = RobotCommandBuilder.mobility_params(body_height, undefined, locomotion_hint);
    const any_params = RobotCommandBuilder._to_any(params);
    const linear = new geometry_pb.Vec2().setX(v_x).setY(v_y);
    const vel = new geometry_pb.SE2Velocity().setLinear(linear).setAngular(v_rot);
    const slew_rate_limit = new geometry_pb.SE2Velocity()
      .setLinear(new geometry_pb.Vec2().setX(4).setY(4))
      .setAngular(2.0);
    const vel_command = new basic_command_pb.SE2VelocityCommand.Request()
      .setVelocity(vel)
      .setSlewRateLimit(slew_rate_limit)
      .setSe2FrameName(frame_name);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setSe2VelocityRequest(vel_command)
      .setParams(any_params);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setMobilityCommand(
      mobility_command,
    );
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static synchro_stand_command(
    params = null,
    body_height = 0.0,
    footprint_R_body = new geometry.EulerZXY(),
    build_on_command = null,
  ) {
    if (!params) params = RobotCommandBuilder.mobility_params(body_height, footprint_R_body);
    const any_params = RobotCommandBuilder._to_any(params);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setStandRequest(new basic_command_pb.StandCommand.Request())
      .setParams(any_params);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setMobilityCommand(
      mobility_command,
    );
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static synchro_sit_command(params = null, build_on_command = null) {
    if (!params) params = RobotCommandBuilder.mobility_params();
    const any_params = RobotCommandBuilder._to_any(params);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setSitRequest(new basic_command_pb.SitCommand.Request())
      .setParams(any_params);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setMobilityCommand(
      mobility_command,
    );
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static stance_command(
    se2_frame_name,
    pos_fl_rt_frame,
    pos_fr_rt_frame,
    pos_hl_rt_frame,
    pos_hr_rt_frame,
    accuracy = 0.05,
    params = null,
    body_height = 0.0,
    footprint_R_body = new geometry.EulerZXY(),
    build_on_command = null,
  ) {
    if (!params) params = RobotCommandBuilder.mobility_params(body_height, footprint_R_body);
    const any_params = RobotCommandBuilder._to_any(params);

    const stance = new basic_command_pb.Stance().setSe2FrameName(se2_frame_name).setAccuracy(accuracy);

    stance
      .getFootPositionsMap()
      .set('fl', pos_fl_rt_frame)
      .set('fr', pos_fr_rt_frame)
      .set('hl', pos_hl_rt_frame)
      .set('hr', pos_hr_rt_frame);

    const stance_request = new basic_command_pb.StanceCommand.Request().setStance(stance);
    const mobility_command = new mobility_command_pb.MobilityCommand.Request()
      .setStanceRequest(stance_request)
      .setParams(any_params);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setMobilityCommand(
      mobility_command,
    );
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static follow_arm_command() {
    const mobility_command = new mobility_command_pb.MobilityCommand.Request().setFollowArmRequest(
      new basic_command_pb.FollowArmCommand.Request(),
    );
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setMobilityCommand(
      mobility_command,
    );
    const command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    return command;
  }

  static arm_stow_command(build_on_command = null) {
    return RobotCommandBuilder._arm_named_command(
      arm_command_pb.NamedArmPositionsCommand.Positions.POSITIONS_STOW,
      build_on_command,
    );
  }

  static arm_ready_command(build_on_command = null) {
    return RobotCommandBuilder._arm_named_command(
      arm_command_pb.NamedArmPositionsCommand.Positions.POSITIONS_READY,
      build_on_command,
    );
  }

  static arm_carry_command(build_on_command = null) {
    return RobotCommandBuilder._arm_named_command(
      arm_command_pb.NamedArmPositionsCommand.Positions.POSITIONS_CARRY,
      build_on_command,
    );
  }

  static _arm_named_command(position, build_on_command = null) {
    const stow_arm_position_command = new arm_command_pb.NamedArmPositionsCommand.Request().setPosition(position);
    const arm_command = new arm_command_pb.ArmCommand.Request().setNamedArmPositionCommand(stow_arm_position_command);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setArmCommand(arm_command);
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static arm_gaze_command(x, y, z, frame_name, build_on_command = null) {
    // eslint-disable-next-line
    const pos = new geometry_pb.Vec3().setX(x).setY(y).setZ(z);
    const point1 = new trajectory_pb.Vec3TrajectoryPoint().setPoint(pos);
    const traj = new trajectory_pb.Vec3Trajectory().setPointsList([point1]);
    const gaze_cmd = new arm_command_pb.GazeCommand.Request()
      .setTargetTrajectoryInFrame1(traj)
      .setFrame1Name(frame_name);
    const arm_command = new arm_command_pb.ArmCommand.Request().setArmGazeCommand(gaze_cmd);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setArmCommand(arm_command);
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static arm_pose_command(x, y, z, qw, qx, qy, qz, frame_name, seconds = 5, build_on_command = null) {
    /* eslint-disable newline-per-chained-call */
    const position = new geometry_pb.Vec3().setX(x).setY(y).setZ(z);
    const rotation = new geometry_pb.Quaternion().setX(qx).setY(qy).setZ(qz).setW(qw);
    const hand_pose = new geometry_pb.SE3Pose().setPosition(position).setRotation(rotation);
    /* eslint-enable newline-per-chained-call */

    const duration = seconds_to_duration(seconds);
    const hand_pose_traj_point = new trajectory_pb.SE3TrajectoryPoint()
      .setPose(hand_pose)
      .setTimeSinceReference(duration);
    const hand_trajectory = new trajectory_pb.SE3Trajectory().setPointsList([hand_pose_traj_point]);

    const arm_cartesian_command = new arm_command_pb.ArmCartesianCommand.Request()
      .setRootFrameName(frame_name)
      .setPoseTrajectoryInTask(hand_trajectory);
    const arm_command = new arm_command_pb.ArmCommand.Request().setArmCartesianCommand(arm_cartesian_command);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setArmCommand(arm_command);
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static arm_wrench_command(
    force_x,
    force_y,
    force_z,
    torque_x,
    torque_y,
    torque_z,
    frame_name,
    seconds = 5,
    build_on_command = null,
  ) {
    /* eslint-disable newline-per-chained-call */
    const force = new geometry_pb.Vec3().setX(force_x).setY(force_y).setZ(force_z);
    const torque = new geometry_pb.Vec3().setX(torque_x).setY(torque_y).setZ(torque_z);
    /* eslint-enable newline-per-chained-call */

    const wrench = new geometry_pb.Wrench().setForce(force).setTorque(torque);
    const duration = seconds_to_duration(seconds);
    const traj_point = new trajectory_pb.WrenchTrajectoryPoint().setWrench(wrench).setTimeSinceReference(duration);
    const trajectory = new trajectory_pb.WrenchTrajectory().setPointsList([traj_point]);

    const arm_cartesian_command = new arm_command_pb.ArmCartesianCommand.Request()
      .setRootFrameName(frame_name)
      .setWrenchTrajectoryInTask(trajectory)
      .setXAxis(arm_command_pb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setYAxis(arm_command_pb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setZAxis(arm_command_pb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setRxAxis(arm_command_pb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setRyAxis(arm_command_pb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setRzAxis(arm_command_pb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE);

    const arm_command = new arm_command_pb.ArmCommand.Request().setArmCartesianCommand(arm_cartesian_command);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setArmCommand(arm_command);
    const robot_command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, robot_command);
    return robot_command;
  }

  static claw_gripper_open_command(build_on_command = null) {
    const point = new trajectory_pb.ScalarTrajectoryPoint().setPoint(_CLAW_GRIPPER_OPEN_ANGLE);
    const traj = new trajectory_pb.ScalarTrajectory().setPointsList([point]);
    const claw_gripper_command = new gripper_command_pb.ClawGripperCommand.Request().setTrajectory(traj);
    const gripper_command = new gripper_command_pb.GripperCommand.Request().setClawGripperCommand(claw_gripper_command);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setGripperCommand(
      gripper_command,
    );
    const command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, command);
    return command;
  }

  static claw_gripper_close_command(build_on_command = null) {
    const point = new trajectory_pb.ScalarTrajectoryPoint().setPoint(_CLAW_GRIPPER_CLOSED_ANGLE);
    const traj = new trajectory_pb.ScalarTrajectory().setPointsList([point]);
    const claw_gripper_command = new gripper_command_pb.ClawGripperCommand.Request().setTrajectory(traj);
    const gripper_command = new gripper_command_pb.GripperCommand.Request().setClawGripperCommand(claw_gripper_command);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setGripperCommand(
      gripper_command,
    );
    const command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, command);
    return command;
  }

  static claw_gripper_open_fraction_command(open_fraction, build_on_command = null) {
    let gripper_q = 0;

    if (open_fraction <= 0) {
      gripper_q = _CLAW_GRIPPER_CLOSED_ANGLE;
    } else if (open_fraction >= 1) {
      gripper_q = _CLAW_GRIPPER_OPEN_ANGLE;
    } else {
      gripper_q = (_CLAW_GRIPPER_OPEN_ANGLE - _CLAW_GRIPPER_CLOSED_ANGLE) * open_fraction + _CLAW_GRIPPER_CLOSED_ANGLE;
    }

    const point = new trajectory_pb.ScalarTrajectoryPoint().setPoint(gripper_q);
    const traj = new trajectory_pb.ScalarTrajectory().setPointsList([point]);
    const claw_gripper_command = new gripper_command_pb.ClawGripperCommand.Request().setTrajectory(traj);
    const gripper_command = new gripper_command_pb.GripperCommand.Request().setClawGripperCommand(claw_gripper_command);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setGripperCommand(
      gripper_command,
    );
    const command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, command);
    return command;
  }

  static claw_gripper_open_angle_command(gripper_q, build_on_command = null) {
    const point = new trajectory_pb.ScalarTrajectoryPoint().setPoint(gripper_q);
    const traj = new trajectory_pb.ScalarTrajectory().setPointsList([point]);
    const claw_gripper_command = new gripper_command_pb.ClawGripperCommand.Request().setTrajectory(traj);
    const gripper_command = new gripper_command_pb.GripperCommand.Request().setClawGripperCommand(claw_gripper_command);
    const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request().setGripperCommand(
      gripper_command,
    );
    const command = new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, command);
    return command;
  }

  static create_arm_joint_trajectory_point(sh0, sh1, el0, el1, wr0, wr1, time_since_reference_secs = null) {
    const joint_position = new arm_command_pb.ArmJointPosition()
      .setSh0(new wrappers_pb.DoubleValue().setValue(sh0))
      .setSh1(new wrappers_pb.DoubleValue().setValue(sh1))
      .setEl0(new wrappers_pb.DoubleValue().setValue(el0))
      .setEl1(new wrappers_pb.DoubleValue().setValue(el1))
      .setWr0(new wrappers_pb.DoubleValue().setValue(wr0))
      .setWr1(new wrappers_pb.DoubleValue().setValue(wr1));

    if (time_since_reference_secs !== null) {
      return new arm_command_pb.ArmJointTrajectoryPoint()
        .setPosition(joint_position)
        .setTimeSinceReference(seconds_to_duration(time_since_reference_secs));
    } else {
      return new arm_command_pb.ArmJointTrajectoryPoint().setPosition(joint_position);
    }
  }

  static arm_joint_command(sh0, sh1, el0, el1, wr0, wr1, max_vel = null, max_accel = null, build_on_command = null) {
    const traj_point1 = RobotCommandBuilder.create_arm_joint_trajectory_point(sh0, sh1, el0, el1, wr0, wr1);
    const arm_joint_traj = new arm_command_pb.ArmJointTrajectory().setPointsList([traj_point1]);

    if (max_vel !== null) arm_joint_traj.setMaximumVelocity(new wrappers_pb.DoubleValue().setValue(max_vel));
    if (max_accel !== null) arm_joint_traj.setMaximumAcceleration(new wrappers_pb.DoubleValue().setValue(max_accel));

    const joint_move_command = new arm_command_pb.ArmJointMoveCommand.Request().setTrajectory(arm_joint_traj);
    const arm_command = new arm_command_pb.ArmCommand.Request().setArmJointMoveCommand(joint_move_command);
    const sync_arm = new synchronized_command_pb.SynchronizedCommand.Request().setArmCommand(arm_command);
    const arm_sync_robot_cmd = new robot_command_pb.RobotCommand().setSynchronizedCommand(sync_arm);
    if (build_on_command) return RobotCommandBuilder.build_synchro_command(build_on_command, arm_sync_robot_cmd);
    return arm_sync_robot_cmd;
  }

  static arm_joint_move_helper(
    joint_positions,
    times,
    joint_velocities = null,
    ref_time = null,
    max_acc = null,
    max_vel = null,
  ) {
    console.assert(joint_positions.length === times.length, 'Number of joint positions must match number of times');

    if (joint_velocities !== null) {
      console.assert(joint_velocities.length === times.length, 'Number of joint velocities must match number of times');
    }

    const robot_cmd = new robot_command_pb.RobotCommand();
    // eslint-disable-next-line
    const arm_joint_traj = robot_cmd.getSynchronizedCommand().getArmCommand().getArmJointMoveCommand().getTrajectory();

    for (const i in [...Array(times.length).keys()]) {
      const traj_point = arm_joint_traj.points.add();

      const joints = joint_positions[i];
      console.assert(joints.length === 6, 'Need 6 joint positions per knot point for this helper');
      // Note that although we're setting all 6 joint angles here, the actual
      // ArmJointTrajectory command doesn't require this. Any unset joint angles
      // will stay at the joint angle the robot is currently at
      const position = traj_point.getPosition();
      position.getSh0().setValue(joints[0]);
      position.getSh1().setValue(joints[1]);
      position.getEl0().setValue(joints[2]);
      position.getEl1().setValue(joints[3]);
      position.getWr0().setValue(joints[4]);
      position.getWr1().setValue(joints[5]);

      if (joint_velocities !== null) {
        const vels = joint_velocities[i];
        console.assert(vels.length === 6, 'Need 6 joint velocities per knot point for this helper');
        // Note that although we're setting all 6 joint velocities here, the actual
        // ArmJointTrajectory command doesn't require this. If at least 1 joint
        // velocity is specified, any unset joint velocities will be set to 0.
        // If no `velocity` is specified for this point, the robot will not constrain
        // the velocity of the trajectory at this point.
        const velocity = traj_point.getVelocity();
        velocity.getSh0().setValue(vels[0]);
        velocity.getSh1().setValue(vels[1]);
        velocity.getEl0().setValue(vels[2]);
        velocity.getEl1().setValue(vels[3]);
        velocity.getWr0().setValue(vels[4]);
        velocity.getWr1().setValue(vels[5]);
      }

      traj_point.setTimeSinceReference(seconds_to_duration(times[i]));
    }

    // Set our other optional arguments
    if (ref_time !== null) {
      arm_joint_traj.setReferenceTime(ref_time);
    }
    if (max_acc !== null) {
      arm_joint_traj.getMaximumAcceleration().setValue(max_acc);
    }
    if (max_vel !== null) {
      arm_joint_traj.getMaximumVelocity().setValue(max_vel);
    }

    return robot_cmd;
  }

  /** *********************
   * Spot mobility params *
   ***********************/

  static mobility_params(
    body_height = 0.0,
    footprint_R_body = new geometry.EulerZXY(),
    locomotion_hint = spot_command_pb.LocomotionHint.HINT_AUTO,
    stair_hint = false,
    external_force_params = null,
  ) {
    const position = new geometry_pb.Vec3().setZ(body_height);
    const rotation = footprint_R_body.to_quaternion();
    const pose = new geometry_pb.SE3Pose().setPosition(position).setRotation(rotation);
    const point = new trajectory_pb.SE3TrajectoryPoint().setPose(pose);
    const traj = new trajectory_pb.SE3Trajectory().setPointsList([point]);
    const body_control = new spot_command_pb.BodyControlParams().setBaseOffsetRtFootprint(traj);
    return new spot_command_pb.MobilityParams()
      .setBodyControl(body_control)
      .setLocomotionHint(locomotion_hint)
      .setStairHint(stair_hint)
      .setExternalForceParams(external_force_params);
  }

  static build_body_external_forces(
    external_force_indicator = spot_command_pb.BodyExternalForceParams.ExternalForceIndicator.EXTERNAL_FORCE_NONE,
    override_external_force_vec = null,
  ) {
    if (
      external_force_indicator ===
      spot_command_pb.BodyExternalForceParams.ExternalForceIndicator.EXTERNAL_FORCE_USE_OVERRIDE
    ) {
      if (override_external_force_vec === null) override_external_force_vec = [0.0, 0.0, 0.0];
      const ext_forces = new geometry_pb.Vec3()
        .setX(override_external_force_vec[0])
        .setY(override_external_force_vec[1])
        .setZ(override_external_force_vec[2]);
      return new spot_command_pb.BodyExternalForceParams()
        .setExternalForceIndicator(external_force_indicator)
        .setFrameName(BODY_FRAME_NAME)
        .setExternalForceOverride(ext_forces);
    } else if (
      external_force_indicator === spot_command_pb.BodyExternalForceParams.ExternalForceIndicator.EXTERNAL_FORCE_NONE ||
      external_force_indicator === spot_command_pb.BodyExternalForceParams.EXTERNAL_FORCE_USE_ESTIMATE
    ) {
      return new spot_command_pb.BodyExternalForceParams().setExternalForceIndicator(external_force_indicator);
    } else {
      return null;
    }
  }

  /** *****************
   * Helper functions *
   *******************/

  static _to_any(params, typeName = 'bosdyn.api.spot.MobilityParams') {
    const any_params = new any_pb.Any();
    any_params.pack(params.serializeBinary(), typeName);
    return any_params;
  }

  static build_synchro_command(...args) {
    let mobility_request = null;
    let arm_request = null;
    let gripper_request = null;

    for (const command of args) {
      if (command.hasFullBodyCommand()) {
        throw new Error('[ROBOT COMMAND] this function only takes RobotCommands containing mobility or synchro cmds');
      } else if (command.hasMobilityCommand()) {
        mobility_request = command.getMobilityCommand();
      } else if (command.hasSynchronizedCommand()) {
        if (command.getSynchronizedCommand().hasMobilityCommand()) {
          mobility_request = command.getSynchronizedCommand().getMobilityCommand();
        }
        if (command.getSynchronizedCommand().hasArmCommand()) {
          arm_request = command.getSynchronizedCommand().getArmCommand();
        }
        if (command.getSynchronizedCommand().hasGripperCommand()) {
          gripper_request = command.getSynchronizedCommand().getGripperCommand();
        }
      } else {
        console.log('[ROBOT COMMAND] skipping empty robot command');
      }
    }

    if (mobility_request || arm_request || gripper_request) {
      const synchronized_command = new synchronized_command_pb.SynchronizedCommand.Request()
        .setMobilityCommand(mobility_request)
        .setArmCommand(arm_request)
        .setGripperCommand(gripper_request);
      return new robot_command_pb.RobotCommand().setSynchronizedCommand(synchronized_command);
    } else {
      throw new Error('[ROBOT COMMAND] Nothing to build here');
    }
  }
}

/**
 * Helper function which uses the RobotCommandService to stand.
 * Blocks until robot is standing, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} command_client  RobotCommand client.
 * @param  {number} [timeout_sec=10_000] Timeout for the command in seconds.
 * @param  {number} [update_frequency=1.0] Update frequency for the command in Hz.
 * @param  {MobilityParams} [params=null] Spot specific parameters for mobility commands
 * to optionally set say body_height
 * @returns {Promise<void>}
 * @throws {CommandFailedError} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blocking_stand(command_client, timeout_sec = 10_000, update_frequency = 1.0, params = null) {
  const start_time = Date.now();
  const end_time = start_time + timeout_sec;
  const update_time = 1.0 / update_frequency;

  const stand_command = RobotCommandBuilder.synchro_stand_command(params);
  const command_id = await command_client.robot_command(stand_command, null, null, null, { timeout: timeout_sec });

  let now = Date.now();
  /* eslint-disable no-await-in-loop */
  while (now < end_time) {
    const time_until_timeout = end_time - now;
    const rpc_timeout = Math.max(time_until_timeout, 1_000);
    const start_call_time = Date.now();

    let response,
      isCatch = false;

    try {
      response = await command_client.robot_command_feedback(command_id, rpc_timeout);
    } catch (e) {
      isCatch = true;
    }

    if (!isCatch) {
      const mob_feedback = response.getFeedback().getSynchronizedFeedback().getMobilityCommandFeedback();
      const mob_status = mob_feedback.getStatus();
      const stand_status = mob_feedback.getStandFeedback().getStatus();

      if (mob_status !== basic_command_pb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING) {
        throw new CommandFailedError(
          // eslint-disable-next-line
          `Stand (ID ${command_id}) no longer processing (now ${basic_command_pb.RobotCommandFeedbackStatus.Status[mob_status]})`
        );
      }
      if (stand_status === basic_command_pb.StandCommand.Feedback.Status.STATUS_IS_STANDING) {
        return;
      }
    }

    const delta_t = Date.now() - start_call_time;
    await sleep(Math.max(Math.min(delta_t, update_time), 0.0));
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError(`Took longer than ${now - start_time} seconds to assure the robot stood.`);
}

/**
 * Helper function which uses the RobotCommandService to sit.
 * Blocks until robot is sitting, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} command_client  RobotCommand client.
 * @param  {number} [timeout_sec=10_000] Timeout for the command in seconds.
 * @param  {number} [update_frequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedError} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blocking_sit(command_client, timeout_sec = 10_000, update_frequency = 1.0) {
  const start_time = Date.now();
  const end_time = start_time + timeout_sec;
  const update_time = 1.0 / update_frequency;

  const sit_command = RobotCommandBuilder.synchro_sit_command();
  const command_id = await command_client.robot_command(sit_command, null, null, null, { timeout: timeout_sec });

  let now = Date.now();
  /* eslint-disable no-await-in-loop */
  while (now < end_time) {
    const time_until_timeout = end_time - now;
    const rpc_timeout = Math.max(time_until_timeout, 1_000);
    const start_call_time = Date.now();

    let response,
      isCatch = false;

    try {
      response = await command_client.robot_command_feedback(command_id, rpc_timeout);
    } catch (e) {
      isCatch = true;
    }

    if (!isCatch) {
      const mob_feedback = response.getFeedback().getSynchronizedFeedback().getMobilityCommandFeedback();
      const mob_status = mob_feedback.getStatus();
      const sit_status = mob_feedback.getSitFeedback().getStatus();
      if (mob_status !== basic_command_pb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING) {
        throw new CommandFailedError(
          // eslint-disable-next-line
          `Sit (ID ${command_id}) no longer processing (now ${basic_command_pb.RobotCommandFeedbackStatus.Status[mob_status]})`,
        );
      }
      if (sit_status === basic_command_pb.SitCommand.Feedback.Status.STATUS_IS_SITTING) {
        return;
      }
    }

    const delta_t = Date.now() - start_call_time;
    await sleep(Math.max(Math.min(delta_t, update_time), 0.0));
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError(`Took longer than ${now - start_time} seconds to assure the robot sat.`);
}

/**
 * Helper function which uses the RobotCommandService to self-right.
 * Blocks until self-right has completed, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} command_client  RobotCommand client.
 * @param  {number} [timeout_sec=30_000] Timeout for the command in seconds.
 * @param  {number} [update_frequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedError} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blocking_selfright(command_client, timeout_sec = 30_000, update_frequency = 1.0) {
  const start_time = Date.now();
  const end_time = start_time + timeout_sec;
  const update_time = 1.0 / update_frequency;

  const selfright_command = RobotCommandBuilder.selfright_command();
  const command_id = await command_client.robot_command(selfright_command, null, null, null, { timeout: timeout_sec });

  let now = Date.now();
  /* eslint-disable no-await-in-loop */
  while (now < end_time) {
    const time_until_timeout = end_time - now;
    const rpc_timeout = Math.max(time_until_timeout, 1_000);
    const start_call_time = Date.now();

    let response,
      isCatch = false;
    try {
      response = await command_client.robot_command_feedback(command_id, rpc_timeout);
    } catch (e) {
      isCatch = true;
    }

    if (!isCatch) {
      const full_body_feedback = response.getFeedback().getFullBodyFeedback();
      const full_body_status = full_body_feedback.getStatus();
      const selfright_status = full_body_feedback.getSelfrightFeedback().getStatus();
      if (full_body_status !== basic_command_pb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING) {
        throw new CommandFailedError(
          // eslint-disable-next-line
          `Self-right (ID ${command_id}) no longer processing (now ${basic_command_pb.RobotCommandFeedbackStatus.Status[full_body_status]})`,
        );
      }
      if (selfright_status === basic_command_pb.SelfRightCommand.Feedback.STATUS_COMPLETED) {
        return;
      }
    }

    const delta_t = Date.now() - start_call_time;
    await sleep(Math.max(Math.min(delta_t, update_time), 0.0));
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError(
    `Took longer than ${now - start_time} seconds to assure the robot completed self-right.`,
  );
}

/**
 * Helper that blocks until the arm achieves a finishing state for the specific arm command.
 * This helper will block and check the feedback for ArmCartesianCommand, GazeCommand,
 * ArmJointMoveCommand, and NamedArmPositionsCommand.
 * @param  {RobotCommandClient} command_client Robot command client, used to request feedback
 * @param  {number} cmd_id Timeout for the command in seconds.
 * @param  {number} [timeout_sec=null] optional number of seconds after which we'll return no matter what
 * the robot's state is.
 * @returns {Promise<boolean>} true if successfully got to the end of the trajectory, false if the arm stalled or
 * the move was canceled (the arm failed to reach the goal).
 * @throws {CommandFailedError} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function block_until_arm_arrives(command_client, cmd_id, timeout_sec = null) {
  let start_time, end_time, now;

  if (timeout_sec !== null) {
    start_time = Date.now();
    end_time = start_time + timeout_sec;
    now = Date.now();
  }

  /* eslint-disable no-await-in-loop, no-unmodified-loop-condition */
  while (timeout_sec === null || now < end_time) {
    const feedback_resp = await command_client.robot_command_feedback(cmd_id);

    const arm_feedback = feedback_resp.getFeedback().getSynchronizedFeedback().getArmCommandFeedback();

    if (arm_feedback.hasArmCartesianFeedback()) {
      if (
        arm_feedback.getArmCartesianFeedback().getStatus() ===
        arm_command_pb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_COMPLETE
      ) {
        return true;
      } else if (
        arm_feedback.getArmCartesianFeedback().getStatus() ===
          arm_command_pb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_STALLED ||
        arm_feedback.getArmCartesianFeedback().getStatus() ===
          arm_command_pb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_CANCELLED
      ) {
        return false;
      }
    } else if (arm_feedback.hasArmGazeFeedback()) {
      if (
        arm_feedback.getArmGazeFeedback().getStatus() ===
        arm_command_pb.GazeCommand.Feedback.Status.STATUS_TRAJECTORY_COMPLETE
      ) {
        return true;
      } else if (
        arm_feedback.getArmGazeFeedback().getStatus() ===
        arm_command_pb.GazeCommand.Feedback.Status.STATUS_TOOL_TRAJECTORY_STALLED
      ) {
        return false;
      }
    } else if (arm_feedback.hasArmJointMoveFeedback()) {
      if (
        arm_feedback.getArmJointMoveFeedback().getStatus() ===
        arm_command_pb.ArmJointMoveCommand.Feedback.Status.STATUS_COMPLETE
      ) {
        return true;
      }
    } else if (arm_feedback.hasNamedArmPositionFeedback()) {
      if (
        arm_feedback.getNamedArmPositionFeedback().getStatus() ===
        arm_command_pb.NamedArmPositionsCommand.Feedback.Status.STATUS_COMPLETE
      ) {
        return true;
      } else if (
        arm_feedback.getNamedArmPositionFeedback().getStatus() ===
        arm_command_pb.NamedArmPositionsCommand.Feedback.Status.STATUS_STALLED_HOLDING_ITEM
      ) {
        return false;
      }
    }

    await sleep(100);
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */
  return false;
}

/**
 * Helper that blocks until a trajectory command reaches a desired goal state or a timeout is reached.
 * @param {RobotCommandClient} command_client the client used to request feedback
 * @param {number} cmd_id command ID returned by the robot when the trajectory command was sent
 * @param {Array<basic_command_pb.SE2TrajectoryCommand.Feedback.Status>|Array<number>}  trajectory_end_statuses
 * the feedback must have a status which is included in this set of statuses to be considered successfully complete.
 * By default, this includes only the "STATUS_AT_GOAL" end condition.
 * @param {Array<basic_command_pb.SE2TrajectoryCommand.Feedback.BodyMovementStatus>} body_movement_statuses
 * the body movement status must be one of these statuses to be considered successfully complete. By
 * default, this is null, which means any body movement status will be accepted.
 * @param {number} feedback_interval_secs     The time (in seconds) to wait before each feedback request checking
 * if the trajectory is complete. Defaults to checking at 10 Hz (requests every 0.1 seconds || 100 milliseconds).
 * @param {number} timeout_sec optional number of seconds after which we'll return no matter what the robot's state is.
 * @param {any} logger The logger print debug statements with. If null, no debug printouts will be sent.
 * @returns {Promise<boolean>} True if reaches STATUS_AT_GOAL, false otherwise.
 */
async function block_for_trajectory_cmd(
  command_client,
  cmd_id,
  trajectory_end_statuses = [basic_command_pb.SE2TrajectoryCommand.Feedback.Status.STATUS_AT_GOAL],
  body_movement_statuses = null,
  feedback_interval_secs = 100,
  timeout_sec = null,
  logger = null,
) {
  let start_time, end_time, now;

  if (timeout_sec !== null) {
    start_time = Date.now();
    end_time = start_time + timeout_sec;
    now = Date.now();
  }

  /* eslint-disable no-await-in-loop, no-unmodified-loop-condition */
  while (timeout_sec === null || now < end_time) {
    const feedback_resp = await command_client.robot_command_feedback(cmd_id);

    const current_trajectory_state = feedback_resp
      .getFeedback()
      .getSynchronizedFeedback()
      .getMobilityCommandFeedback()
      .getSe2TrajectoryFeedback()
      .getStatus();
    const body_movement_state = feedback_resp
      .getFeedback()
      .getSynchronizedFeedback()
      .getMobilityCommandFeedback()
      .getSe2TrajectoryFeedback()
      .getBodyMovementStatus();

    if (logger !== null) {
      const current_state_str = basic_command_pb.SE2TrajectoryCommand.Feedback.Status[current_trajectory_state];
      logger.info(`block_for_trajectory_cmd: ${current_state_str}`);
    }

    if (trajectory_end_statuses.includes(current_trajectory_state)) {
      if (body_movement_statuses !== null) {
        if (body_movement_statuses.length > 0 && body_movement_statuses.includes(body_movement_state)) {
          return true;
        }
      } else {
        return true;
      }
    }

    await sleep(feedback_interval_secs);
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */

  if (logger !== null) logger.info('block_for_trajectory_cmd: timeout exceeded.');

  return false;
}

module.exports = {
  RobotCommandResponseError,
  NoTimeSyncError,
  ExpiredError,
  TooDistantError,
  NotPoweredOnError,
  BehaviorFaultError,
  NotClearedError,
  UnsupportedError,
  CommandFailedError,
  CommandTimedOutError,
  UnknownFrameError,
  RobotCommandClient,
  RobotCommandBuilder,
  _TimeConverter,
  _edit_proto,
  blocking_stand,
  blocking_sit,
  blocking_selfright,
  block_until_arm_arrives,
  block_for_trajectory_cmd,
};
