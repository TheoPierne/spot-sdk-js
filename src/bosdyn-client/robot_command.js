'use strict';

const { setTimeout: sleep } = require('node:timers/promises');
const { Any } = require('google-protobuf/google/protobuf/any_pb');
const wrappersPb = require('google-protobuf/google/protobuf/wrappers_pb');
const camelCase = require('lodash/camelCase');

const {
  BaseClient,
  errorFactory,
  handleCommonHeaderErrors,
  handleLeaseUseResultErrors,
  handleUnsetStatusError,
} = require('./common');
const { ResponseError, InvalidRequestError, UnsetStatusError } = require('./exceptions');
const { BODY_FRAME_NAME, ODOM_FRAME_NAME, getSe2ATformB } = require('./frame_helpers');
const { addLeaseWalletProcessors } = require('./lease');
const { SE2Pose, SE3Pose } = require('./math_helpers');
const { DefaultDict } = require('./util');

const armCommandPb = require('../bosdyn/api/arm_command_pb');
const basicCommandPb = require('../bosdyn/api/basic_command_pb');
const fullBodyCommandPb = require('../bosdyn/api/full_body_command_pb');
const geometryPb = require('../bosdyn/api/geometry_pb');
const gripperCommandPb = require('../bosdyn/api/gripper_command_pb');
const mobilityCommandPb = require('../bosdyn/api/mobility_command_pb');
const payloadEstimationPb = require('../bosdyn/api/payload_estimation_pb');
const robotCommandPb = require('../bosdyn/api/robot_command_pb');
const {
  RobotCommandServiceClient,
  RobotCommandStreamingServiceClient,
} = require('../bosdyn/api/robot_command_service_grpc_pb');
const spotCommandPb = require('../bosdyn/api/spot/robot_command_pb');
const synchronizedCommandPb = require('../bosdyn/api/synchronized_command_pb');
const trajectoryPb = require('../bosdyn/api/trajectory_pb');
const geometry = require('../bosdyn-core/geometry');
const { secondsToDuration } = require('../bosdyn-core/util');

const _CLAW_GRIPPER_OPEN_ANGLE = -1.5708;
const _CLAW_GRIPPER_CLOSED_ANGLE = 0;

class RobotCommandResponseError extends ResponseError {}
class NoTimeSyncError extends RobotCommandResponseError {}
class ExpiredError extends RobotCommandResponseError {}
class TooDistantError extends RobotCommandResponseError {}
class NotPoweredOnError extends RobotCommandResponseError {}
class BehaviorFaultError extends RobotCommandResponseError {}
class NotClearedError extends RobotCommandResponseError {}
class UnsupportedError extends RobotCommandResponseError {}
class UnknownFrameError extends RobotCommandResponseError {}
class DockedError extends RobotCommandResponseError {}

class CommandFailedError extends Error {}
class CommandFailedErrorWithFeedback extends CommandFailedError {}
class CommandTimedOutError extends Error {}

/**
 * Constructs a RobotTimeConverter as necessary.
 */
class _TimeConverter {
  /**
   * @param {RobotCommandClient} parent Parent for the time sync endpoint.
   * @param {TimeSyncEndpoint} endpoint Endpoint for the time converted.
   */
  constructor(parent, endpoint) {
    /**
     * Parent for the time sync endpoint.
     * @type {RobotCommandClient}
     * @private
     */
    this._parent = parent;

    /**
     * Endpoint for the time converted.
     * @type {TimeSyncEndpoint}
     * @private
     */
    this._endpoint = endpoint;

    /**
     * @type {?RobotTimeConverter}
     * @private
     */
    this._converter = null;
  }

  /**
   * Accessor which lazily constructs the RobotTimeConverter.
   * @type {RobotTimeConverter}
   * @readonly
   */
  get obj() {
    if (!this._converter) {
      /** @type {TimeSyncEndpoint} */
      const endpoint = this._endpoint || this._parent.timesyncEndpoint;
      this._converter = endpoint.getRobotTimeConverter();
    }
    return this._converter;
  }

  /**
   * Calls RobotTimeConverter.convertTimestampFromLocalToRobot().
   * @param {timePb.Timestamp} timestamp Local system time
   */
  convertTimestampFromLocalToRobot(timestamp) {
    this.obj.convertTimestampFromLocalToRobot(timestamp);
  }

  /**
   * Calls RobotTimeConverter.robotTimestampFromLocalSecs().
   * @param {*} endTimeSecs Local system time, in seconds from the unix epoch.
   * @returns {timePb.Timestamp}
   */
  robotTimestampFromLocalSecs(endTimeSecs) {
    return this.obj.robotTimestampFromLocalSecs(endTimeSecs);
  }

  /**
   * Calls RobotTimeConverter.localSecondsFromRobotTimestamp().
   * @param {number} robotTimestamp Local system time, in seconds from the unix epoch.
   * @returns {number}
   */
  localSecondsFromRobotTimestamp(robotTimestamp) {
    return this.obj.localSecondsFromRobotTimestamp(robotTimestamp);
  }
}

/**
 * Tree of proto-fields leading to end_time fields needing to be set from end_time_secs.
 */
const END_TIME_EDIT_TREE = {
  synchronizedCommand: {
    mobilityCommand: {
      '@command': {
        se2VelocityRequest: {
          endTime: null,
        },
        se2TrajectoryRequest: {
          endTime: null,
        },
        stanceRequest: {
          endTime: null,
        },
      },
    },
    armCommand: {
      '@command': {
        armVelocityCommand: {
          endTime: null,
        },
      },
    },
  },
};

/**
 * Tree of proto fields leading to Timestamp protos which need to be converted from
 * client clock to robot clock values using timesync information from the robot.
 * Note, the "@" sign indicates a oneof field. The "null" indicates the field which
 * contains the timestamp to be updated.
 */
const EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME = {
  synchronizedCommand: {
    mobilityCommand: {
      '@command': {
        se2TrajectoryRequest: {
          trajectory: {
            referenceTime: null,
          },
        },
      },
    },
    gripperCommand: {
      '@command': {
        clawGripperCommand: {
          trajectory: {
            referenceTime: null,
          },
        },
      },
    },
    armCommand: {
      '@command': {
        armCartesianCommand: {
          poseTrajectoryInTask: {
            referenceTime: null,
          },
          wrenchTrajectoryInTask: {
            referenceTime: null,
          },
        },
        armJointMoveCommand: {
          trajectory: {
            referenceTime: null,
          },
        },
        armGazeCommand: {
          targetTrajectoryInFrame1: {
            referenceTime: null,
          },
          toolTrajectoryInFrame2: {
            referenceTime: null,
          },
        },
        armImpedanceCommand: {
          taskTformDesiredTool: {
            referenceTime: null,
          },
        },
      },
    },
  },
};

/**
 * Tree of proto fields leading to Timestamp protos which need to be converted from
 * client clock to robot clock values using timesync information from the robot.
 * Note, the "@" sign indicates a oneof field. The "null" indicates the field which
 * contains the timestamp to be updated.
 */
const MOBILITY_PARAM_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME = {
  bodyControl: {
    '@param': {
      baseOffsetRtFootprint: {
        referenceTime: null,
      },
      bodyPose: {
        baseOffsetRtRoot: {
          referenceTime: null,
        },
      },
    },
  },
};

/**
 * Recursion to update specified fields of a protobuf using a specified edit-function.
 * @param {*} proto Protobuf to edit recursively.
 * @param {*} editTree Part of the tree to edit.
 * @param {Function} editFn Edit function to execute.
 * @returns {void}
 */
function _editProto(proto, editTree, editFn) {
  for (const [key, subtree] of Object.entries(editTree)) {
    if (key.startsWith('@')) {
      const whichOneof = proto.getCommandCase();
      const keyWhichOneOf = Object.keys(proto.constructor.CommandCase).find(
        keyOf => proto.constructor.CommandCase[keyOf] === whichOneof,
      );
      const has = camelCase(`has-${keyWhichOneOf}`);
      const keyValue = camelCase(keyWhichOneOf);
      if (whichOneof === 0 || !(keyValue in subtree) || !proto[has]()) return;
      const get = camelCase(`get-${keyWhichOneOf}`);
      // console.log('GET', get, proto[get]);
      _editProto(proto[get](), subtree[camelCase(keyWhichOneOf)], editFn);
    } else if (subtree) {
      const has = camelCase(`has-${key}`);
      // console.log('HAS', has, proto[has])
      if (proto[has] && proto[has]()) {
        const get = camelCase(`get-${key}`);
        _editProto(proto[get](), subtree, editFn);
      }
    } else {
      editFn(key, proto);
    }
  }
}

/**
 * @typedef {import('./robot').Robot} Robot
 */

/**
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 */

/**
 * Client for calling RobotCommand services.
 * @extends {BaseClient<RobotCommandServiceClient>}
 */
class RobotCommandClient extends BaseClient {
  static defaultServiceName = 'robot-command';
  static serviceType = 'bosdyn.api.RobotCommandService';

  constructor() {
    super(RobotCommandServiceClient);
    this._timesyncEndpoint = null;
  }

  /**
   * Update instance from another object.
   * @param {Robot} other The object where to copy from.
   * @returns {void}
   */
  async updateFrom(other) {
    super.updateFrom(other);
    if (this.leaseWallet) addLeaseWalletProcessors(this, this.leaseWallet);

    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Accessor for timesync-endpoint that was grabbed via 'updateFrom()'.
   * @type {TimeSyncEndpoint}
   * @readonly
   */
  get timesyncEndpoint() {
    if (!this._timesyncEndpoint) {
      throw new NoTimeSyncError(null, 'No timesync endpoint was passed to robot command client.');
    }
    return this._timesyncEndpoint;
  }

  /**
   * Issue a command to the robot asynchronously.
   * @param {RobotCommandBuilder} command Command to issue.
   * @param {number} [endTimeSecs] End time for the command in seconds.
   * @param {TimeSyncEndpoint} [timesyncEndpoint] Timesync endpoint.
   * @param {Lease} [lease] Lease object to use for the command.
   * @param {Object} args Options to provide for gRPC request.
   * @returns {Promise<number>} Return the id of the command's callback.
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
  robotCommand(command, endTimeSecs = null, timesyncEndpoint = null, lease = null, args) {
    const req = this._getRobotCommandRequest(lease, command);
    this._updateCommandTimestamps(req.getCommand(), endTimeSecs, timesyncEndpoint);
    return this.call(this._stub.robotCommand, req, _robotCommandValue, _robotCommandError, false, args);
  }

  /**
   * Get feedback from a previously issued command.
   * @param {string} robotCommandId ID of the robot command to get feedback on.
   * @param {Object} args Options to provide for gRPC request.
   * @returns {Promise<robotCommandPb.RobotCommandFeedbackResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  robotCommandFeedback(robotCommandId, args) {
    const req = this._getRobotCommandFeedbackRequest(robotCommandId);
    return this.call(this._stub.robotCommandFeedback, req, null, _robotCommandFeedbackError, false, args);
  }

  /**
   * Clear a behavior fault on the robot.
   * @param {string} behaviorFaultId ID of the behavior fault.
   * @param {Lease} [lease] Lease information to use in the message.
   * @param {Object} args Options to provide for gRPC request.
   * @returns {Promise<boolean>} Boolean whether response status is STATUS_CLEARED.
   */
  clearBehaviorFault(behaviorFaultId, lease = null, args) {
    const req = this._getClearBehaviorFaultRequest(lease, behaviorFaultId);
    return this.call(this._stub.clearBehaviorFault, req, _clearBehaviorFaultValue, _clearBehaviorFaultError, false, args);
  }

  _getRobotCommandRequest(lease, command) {
    return new robotCommandPb.RobotCommandRequest()
      .setLease(lease)
      .setCommand(command)
      .setClockIdentifier(this.timesyncEndpoint.clockIdentifier);
  }

  /**
   * Set or convert fields of the command proto that need timestamps in the robot's clock.
   * @param {*} command Command message to update.
   * @param {*} endTimeSecs Command end time in seconds.
   * @param {TimeSyncEndpoint} timesyncEndpoint Timesync endpoint.
   */
  _updateCommandTimestamps(command, endTimeSecs, timesyncEndpoint) {
    const converter = new _TimeConverter(this, timesyncEndpoint);

    function _setEndTime(key, proto) {
      if (!(key in proto)) return;
      proto[key] = converter.robotTimestampFromLocalSecs(endTimeSecs);
    }

    function _toRobotTime(key, proto) {
      if (!(key in proto)) return;
      converter.convertTimestampFromLocalToRobot(proto[key]);
    }

    if (endTimeSecs) _editProto(command, END_TIME_EDIT_TREE, _setEndTime);

    _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _toRobotTime);

    if (command.getSynchronizedCommand().getMobilityCommand().hasParams()) {
      const params = command
        .getSynchronizedCommand()
        .getMobilityCommand()
        .getParams()
        .unpack(spotCommandPb.MobilityParams.deserializeBinary);
      _editProto(params, MOBILITY_PARAM_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _toRobotTime);
      command.getSynchronizedCommand().getMobilityCommand().getParams().pack(params.serializeBinary());
    }
  }

  _getRobotCommandFeedbackRequest(robotCommandId) {
    return new robotCommandPb.RobotCommandFeedbackRequest().setRobotCommandId(robotCommandId);
  }

  _getClearBehaviorFaultRequest(lease, behaviorFaultId) {
    return new robotCommandPb.ClearBehaviorFaultRequest().setLease(lease).setBehaviorFaultId(behaviorFaultId);
  }
}

/**
 * Client for calling RobotCommand services.
 * This client is in BETA and may undergo changes in future releases.
 * @extends {BaseClient<RobotCommandStreamingServiceClient>}
 */
class RobotCommandStreamingClient extends BaseClient {
  static defaultServiceName = 'robot-command-streaming';
  static serviceType = 'bosdyn.api.RobotCommandStreamingService';

  constructor() {
    super(RobotCommandStreamingServiceClient);
  }

  sendJointControlCommands(commandArray) {
    return this.call(this._stub.jointControlStream, commandArray, null, null, false, {});
  }
}

function _robotCommandValue(response) {
  return response.getRobotCommandId();
}

const _ROBOT_COMMAND_STATUS_TO_ERROR = DefaultDict(() => [RobotCommandResponseError, null]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_OK, [null, null]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_INVALID_REQUEST, [
  InvalidRequestError,
  'The provided request arguments are ill-formed or invalid, independent of the system state.',
]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_UNSUPPORTED, [
  UnsupportedError,
  'The API supports this request, but the system does not support this request.',
]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_NO_TIMESYNC, [
  NoTimeSyncError,
  'Client has not done timesync with robot.',
]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_EXPIRED, [
  ExpiredError,
  'The command was received after its max_duration had already passed.',
]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_TOO_DISTANT, [
  TooDistantError,
  'The command end time was too far in the future.',
]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_NOT_POWERED_ON, [
  NotPoweredOnError,
  'The robot must be powered on to accept a command.',
]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_BEHAVIOR_FAULT, [
  BehaviorFaultError,
  'The robot may not be commanded with uncleared behavior faults.',
]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_DOCKED, [
  DockedError,
  'The command cannot be executed while the robot is docked.',
]);
_ROBOT_COMMAND_STATUS_TO_ERROR.set(robotCommandPb.RobotCommandResponse.Status.STATUS_UNKNOWN_FRAME, [
  UnknownFrameError,
  'Robot does not know how to handle supplied frame.',
]);

const _robotCommandError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(robotCommandPb.RobotCommandResponse.Status),
        _ROBOT_COMMAND_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _robotCommandFeedbackError = handleCommonHeaderErrors(response => {
  const respFeedback = response.getFeedback();

  if (!respFeedback) {
    return new UnsetStatusError(response);
  }

  const hasValidStatus = feedback => {
    const fullBodyFeedback = feedback.getFullBodyFeedback();
    if (fullBodyFeedback && fullBodyFeedback.getStatus()) {
      return true;
    }

    const synchronizedFeedback = feedback.getSynchronizedFeedback();
    if (!synchronizedFeedback) {
      return false;
    }

    const mobilityCommandFeedback = synchronizedFeedback.getMobilityCommandFeedback();
    if (mobilityCommandFeedback && mobilityCommandFeedback.getStatus()) {
      return true;
    }

    const armCommandFeedback = synchronizedFeedback.getArmCommandFeedback();
    if (armCommandFeedback && armCommandFeedback.getStatus()) {
      return true;
    }

    const gripperCommandFeedback = synchronizedFeedback.getGripperCommandFeedback();
    if (gripperCommandFeedback && gripperCommandFeedback.getStatus()) {
      return true;
    }

    return false;
  };

  return hasValidStatus(respFeedback) ? null : new UnsetStatusError(response);
});

function _clearBehaviorFaultValue(response) {
  return response.getStatus() === robotCommandPb.ClearBehaviorFaultResponse.Status.STATUS_CLEARED;
}

const _CLEAR_BEHAVIOR_FAULT_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_CLEAR_BEHAVIOR_FAULT_STATUS_TO_ERROR.set(robotCommandPb.ClearBehaviorFaultResponse.Status.STATUS_CLEARED, [
  null,
  null,
]);
_CLEAR_BEHAVIOR_FAULT_STATUS_TO_ERROR.set(robotCommandPb.ClearBehaviorFaultResponse.Status.STATUS_NOT_CLEARED, [
  NotClearedError,
  'Behavior fault could not be cleared.',
]);

const _clearBehaviorFaultError = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(robotCommandPb.ClearBehaviorFaultResponse.Status),
        _CLEAR_BEHAVIOR_FAULT_STATUS_TO_ERROR,
      ),
    ),
  ),
);

/**
 * This class contains a set of static helper functions to build and issue robot commands.
 * This is not intended to cover every use case, but rather give developers a starting point for
 * issuing commands to the robot.The robot command proto uses several advanced protobuf techniques,
 * including the use of Any and OneOf.
 *
 * A RobotCommand is composed of one or more commands. The set of valid commands is robot /
 * hardware specific. An armless spot only accepts one command at a time. Each command may or may
 * not take a generic param object. These params are also robot / hardware dependent.
 */
class RobotCommandBuilder {
  /** *******************
   * Full body commands *
   *********************/

  /**
   * Command to stop with minimal motion. If the robot is walking, it will transition to
   * stand. If the robot is standing or sitting, it will do nothing.
   * @returns {robotCommandPb.RobotCommand}
   * @static
   */
  static stopCommand() {
    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setStopRequest(
      new basicCommandPb.StopCommand.Request(),
    );
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  /**
   * Command to freeze all joints at their current positions (no balancing control)
   * @returns {robotCommandPb.RobotCommand}
   * @static
   */
  static freezeCommand() {
    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setFreezeRequest(
      new basicCommandPb.FreezeCommand.Request(),
    );
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  /**
   * Command to get the robot in a ready, sitting position. If the robot is on its back, it
   * will attempt to flip over.
   * @returns {robotCommandPb.RobotCommand}
   * @static
   */
  static selfrightCommand() {
    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setSelfrightRequest(
      new basicCommandPb.SelfRightCommand.Request(),
    );
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  /**
   * Command that will have the robot sit down (if not already sitting) and roll onto its side
   * for easier battery access.
   * @param {number} dirHint Direction to roll over: 1-right/2-left
   * @returns {robotCommandPb.RobotCommand}
   * @static
   */
  static batteryChangePoseCommand(dirHint = 1) {
    const batteryChangePoseCommand = new basicCommandPb.BatteryChangePoseCommand.Request().setDirectionHint(dirHint);
    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setBatteryChangePoseRequest(
      batteryChangePoseCommand,
    );
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  /**
   * Command to get the robot estimate payload mass.
   * Commands robot to stand and execute a routine to estimate the mass properties of an
   * unregistered payload attached to the robot.
   * @returns {robotCommandPb.RobotCommand}
   * @static
   */
  static payloadEstimationCommand() {
    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setPayloadEstimationRequest(
      new payloadEstimationPb.PayloadEstimationCommand.Request(),
    );
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  /**
   * Command to get robot into a position where it is safe to power down, then power down. If
   * the robot has fallen, it will power down directly. If the robot is not in a safe position,
   * it will get to a safe position before powering down. The robot will not power down until it
   * is in a safe state.
   * @returns {robotCommandPb.RobotCommand}
   * @static
   */
  static safePowerOffCommand() {
    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setSafePowerOffRequest(
      new basicCommandPb.SafePowerOffCommand.Request(),
    );
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  /**
   * Command constrained manipulation.
   * @param {basicCommandPb.ConstrainedManipulationCommand.Request.TaskType} taskType The task type
   * @param {basicCommandPb.Wrench} initWrenchDirectionInFrameName
   * @param {number} forceLimit
   * @param {number} torqueLimit
   * @param {string} frameName
   * @param {?number} tangentialSpeed
   * @param {?number} rotationalSpeed
   * @returns {robotCommandPb.RobotCommand}
   * @static
   */
  static constrainedManipulationCommand(
    taskType,
    initWrenchDirectionInFrameName,
    forceLimit,
    torqueLimit,
    frameName,
    tangentialSpeed = null,
    rotationalSpeed = null,
  ) {
    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request();

    if (tangentialSpeed !== null) {
      const constrainedManipulationCommand = new basicCommandPb.ConstrainedManipulationCommand.Request()
        .setTaskType(taskType)
        .setInitWrenchDirectionInFrameName(initWrenchDirectionInFrameName)
        .setFrameName(frameName)
        .setTangentialSpeed(tangentialSpeed);

      fullBodyCommand.setConstrainedManipulationRequest(constrainedManipulationCommand);
    } else if (rotationalSpeed !== null) {
      const constrainedManipulationCommand = new basicCommandPb.ConstrainedManipulationCommand.Request()
        .setTaskType(taskType)
        .setInitWrenchDirectionInFrameName(initWrenchDirectionInFrameName)
        .setFrameName(frameName)
        .setRotationalSpeed(rotationalSpeed);

      fullBodyCommand.setConstrainedManipulationRequest(constrainedManipulationCommand);
    } else {
      throw new Error('Need either translational or rotational speed');
    }

    fullBodyCommand.getConstrainedManipulationRequest().getForceLimit().setValue(forceLimit);
    fullBodyCommand.getConstrainedManipulationRequest().getTorqueLimit().setValue(torqueLimit);
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  static jointCommand() {
    const command = new robotCommandPb.RobotCommand();
    command.setFullBodyCommand();
    return command;
  }

  /** ***********************
   * Synchronized commands *
   ************************/

  /**
   * @typedef {Object} TrajectoryOptions
   * @property {*} params Spot specific parameters for mobility commands. If not set,
   * this will be constructed using other args.
   * @property {number} bodyHeight Height, meters, relative to a nominal stand height.
   * @property {*} locomotionHint Locomotion hint to use for the trajectory command.
   * @property {*} buildOnCommand Option to input a RobotCommand (not containing a fullBodyCommand). An
   * armCommand and gripperCommand from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   */

  /**
   * @typedef {Object} VelocityTrajectoryOptions
   * @property {*} params Spot specific parameters for mobility commands. If not set,
   * this will be constructed using other args.
   * @property {number} bodyHeight Height, meters, relative to a nominal stand height.
   * @property {*} locomotionHint Locomotion hint to use for the trajectory command.
   * @property {*} buildOnCommand Option to input a RobotCommand (not containing a fullBodyCommand). An
   * armCommand and gripperCommand from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   * @param {string} frameName Name of the frame to use.
   */

  /**
   * Command robot to move to pose along a 2D plane. Pose can be specified in the world
   * (kinematic odometry) frame or the robot body frame. The arguments body_height and
   * locomotion_hint are ignored if params argument is passed.
   * A trajectory command requires an end time. End time is not set in this function, but rather
   * is set externally before call to RobotCommandService.
   * @param {number} goalX Position X coordinate.
   * @param {number} goalY Position Y coordinate.
   * @param {number} goalHeading Pose heading in radians.
   * @param {string} frameName Name of the frame to use.
   * @param {TrajectoryOptions} [options] The trajectory options
   * @returns {robotCommandPb.RobotCommand}
   */
  static synchroSe2TrajectoryPointCommand(
    goalX,
    goalY,
    goalHeading,
    frameName,
    {
      params = null,
      bodyHeight = 0,
      locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
      buildOnCommand = null,
    } = {},
  ) {
    const position = new geometryPb.Vec2().setX(goalX).setY(goalY);
    const pose = new geometryPb.SE2Pose().setPosition(position).setAngle(goalHeading);
    return RobotCommandBuilder.synchroSe2TrajectoryCommand(pose, frameName, {
      params,
      bodyHeight,
      locomotionHint,
      buildOnCommand,
    });
  }

  /**
   * Command robot to move to pose along a 2D plane. Pose can be specified in the world
   * (kinematic odometry or vision world) frames. The arguments body_height and
   * locomotion_hint are ignored if params argument is passed.
   * A trajectory command requires an end time. End time is not set in this function, but rather
   * is set externally before call to RobotCommandService.
   * @param {*} goalSe2 SE2Pose goal.
   * @param {*} frameName Name of the frame to use.
   * @param {TrajectoryOptions} [options] The trajectory options
   * @returns {robotCommandPb.RobotCommand}
   */
  static synchroSe2TrajectoryCommand(
    goalSe2,
    frameName,
    {
      params = null,
      bodyHeight = 0.0,
      locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
      buildOnCommand = null,
    } = {},
  ) {
    if (!params) params = RobotCommandBuilder.mobilityParams(bodyHeight, undefined, locomotionHint);
    const anyParams = RobotCommandBuilder._toAny(params);
    const point = new trajectoryPb.SE2TrajectoryPoint().setPose(goalSe2);
    const traj = new trajectoryPb.SE2Trajectory().setPointsList([point]);
    const trajCommand = new basicCommandPb.SE2TrajectoryCommand.Request()
      .setTrajectory(traj)
      .setSe2FrameName(frameName);
    const mobilityCommand = new mobilityCommandPb.MobilityCommand.Request()
      .setSe2TrajectoryRequest(trajCommand)
      .setParams(anyParams);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      mobilityCommand,
    );
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  /**
   * Command robot to move to pose described relative to the robots body along a 2D plane. For example,
   * a command to move forward 2 meters at the same heading will have goalXRtBody=2.0, goalYRtBody=0.0,
   * goalHeadingRtBody=0.0.
   * The arguments bodyHeight and locomotionHint are ignored if params argument is passed. A trajectory
   * command requires an end time. End time is not set in this function, but rather is set externally before
   * call to RobotCommandService.
   * @param {*} goalXRtBody Position X coordinate described relative to the body frame.
   * @param {*} goalYRtBody Position Y coordinate described relative to the body frame.
   * @param {*} goalHeadingRtBody Pose heading in radians described relative to the body frame.
   * @param {*} frameTreeSnapshot Dictionary representing the child_to_parent_edge_map describing different
   * transforms. This can be acquired using the robot state client directly, or using
   * the robot object's helper function robot.getFrameTreeSnapshot().
   * @param {*} params Spot specific parameters for mobility commands. If not set,
   * this will be constructed using other args.
   * @param {*} bodyHeight Height, meters, relative to a nominal stand height.
   * @param {*} locomotionHint Locomotion hint to use for the trajectory command.
   * @returns {robotCommandPb.RobotCommand}
   */
  static synchroTrajectoryCommandInBodyFrame(
    goalXRtBody,
    goalYRtBody,
    goalHeadingRtBody,
    frameTreeSnapshot,
    params = null,
    bodyHeight = 0.0,
    locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
  ) {
    const gotoRtBody = new SE2Pose(goalXRtBody, goalYRtBody, goalHeadingRtBody);
    const odomTformBody = getSe2ATformB(frameTreeSnapshot, ODOM_FRAME_NAME, BODY_FRAME_NAME);
    const odomTformGoto = odomTformBody.mult(gotoRtBody);
    return RobotCommandBuilder.synchroSe2TrajectoryCommand(
      odomTformGoto,
      ODOM_FRAME_NAME,
      params,
      bodyHeight,
      locomotionHint,
    );
  }

  /**
   * Command robot to move along 2D plane. Velocity should be specified in the robot body
   * frame. Other frames are currently not supported. The arguments bodyHeight and
   * locomotionHint are ignored if params argument is passed.
   * A velocity command requires an end time. End time is not set in this function, but rather
   * is set externally before call to RobotCommandService.
   * @param {*} vX Velocity in X direction.
   * @param {*} vY Velocity in Y direction.
   * @param {*} vRot Velocity heading in radians.
   * @param {VelocityTrajectoryOptions} [options] The trajectory options
   * @returns {robotCommandPb.RobotCommand}
   */
  static synchroVelocityCommand(
    vX,
    vY,
    vRot,
    {
      params = null,
      bodyHeight = 0.0,
      locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
      frameName = BODY_FRAME_NAME,
      buildOnCommand = null,
    } = {},
  ) {
    if (!params) params = RobotCommandBuilder.mobilityParams(bodyHeight, undefined, locomotionHint);
    const anyParams = RobotCommandBuilder._toAny(params);
    const linear = new geometryPb.Vec2().setX(vX).setY(vY);
    const vel = new geometryPb.SE2Velocity().setLinear(linear).setAngular(vRot);
    const slewRateLimit = new geometryPb.SE2Velocity().setLinear(new geometryPb.Vec2().setX(4).setY(4)).setAngular(2.0);
    const velCommand = new basicCommandPb.SE2VelocityCommand.Request()
      .setVelocity(vel)
      .setSlewRateLimit(slewRateLimit)
      .setSe2FrameName(frameName);
    const mobilityCommand = new mobilityCommandPb.MobilityCommand.Request()
      .setSe2VelocityRequest(velCommand)
      .setParams(anyParams);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      mobilityCommand,
    );
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  /**
   * Command robot to stand. If the robot is sitting, it will stand up. If the robot is
   * moving, it will come to a stop. Params can specify a trajectory for the body to follow
   * while standing. In the simplest case, this can be a specific position+orientation which the
   * body will hold at. The arguments bodyHeight and footprintRBody are ignored if params
   * argument is passed.
   * @param {TrajectoryOptions} [options] The trajectory options
   * @returns {robotCommandPb.RobotCommand}
   */
  static synchroStandCommand({
    params = null,
    bodyHeight = 0.0,
    footprintRBody = new geometry.EulerZXY(),
    buildOnCommand = null,
  } = {}) {
    if (!params) params = RobotCommandBuilder.mobilityParams(bodyHeight, footprintRBody);
    const anyParams = RobotCommandBuilder._toAny(params);
    const mobilityCommand = new mobilityCommandPb.MobilityCommand.Request()
      .setStandRequest(new basicCommandPb.StandCommand.Request())
      .setParams(anyParams);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      mobilityCommand,
    );
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  /**
   * Command the robot to sit.
   * @param {*} params Spot specific parameters for mobility commands.
   * @param {*} buildOnCommand Option to input a RobotCommand (not containing a fullBodyCommand). An
   * armCommand and gripperCommand from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   * @returns {robotCommandPb.RobotCommand}
   */
  static synchroSitCommand({ params = null, buildOnCommand = null } = {}) {
    if (!params) params = RobotCommandBuilder.mobilityParams();
    const anyParams = RobotCommandBuilder._toAny(params);
    const mobilityCommand = new mobilityCommandPb.MobilityCommand.Request()
      .setSitRequest(new basicCommandPb.SitCommand.Request())
      .setParams(anyParams);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      mobilityCommand,
    );
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  /**
   * Command robot to stance with the feet at specified positions.
   * This will cause the robot to reposition its feet. This is not intended to be a mobility
   * command and will reject commands where the foot position is out of reach without locomoting.
   * To stance at a far location, try using SE2TrajectoryCommand to safely put the robot at the
   * correct location first.
   * Params can specify a trajectory for the body to follow
   * while stancing. In the simplest case, this can be a specific position+orientation which the
   * body will hold at. The arguments bodyHeight and footprintRBody are ignored if params
   * argument is passed.
   * @param {string} se2FrameName The frame name which the desired foot_positions are described in.
   * @param {*} posFlRtFrame Position of front left foot in specified frame.
   * @param {*} posFrRtFrame Position of front right foot in specified frame.
   * @param {*} posHlRtFrame Position of rear left foot in specified frame.
   * @param {*} posHrRtFrame Position of rear right foot in specified frame.
   * @param {number} accuracy Required foot positional accuracy in meters
   * @param {*} params Spot specific parameters for mobility commands. If not set,
   * this will be constructed using other args.
   * @param {*} bodyHeight Height, meters, to stand at relative to a nominal stand height.
   * @param {*} footprintRBody The orientation of the body frame with respect to the
   * footprint frame (gravity aligned framed with yaw computed from the stance feet)
   * @param {*} buildOnCommand Option to input a RobotCommand (not containing a full_body_command). An
   * arm_command and gripper_command from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   * @returns {robotCommandPb.RobotCommand}
   */
  static stanceCommand(
    se2FrameName,
    posFlRtFrame,
    posFrRtFrame,
    posHlRtFrame,
    posHrRtFrame,
    accuracy = 0.05,
    params = null,
    bodyHeight = 0.0,
    footprintRBody = new geometry.EulerZXY(),
    buildOnCommand = null,
  ) {
    if (!params) params = RobotCommandBuilder.mobilityParams(bodyHeight, footprintRBody);
    const anyParams = RobotCommandBuilder._toAny(params);

    const stance = new basicCommandPb.Stance().setSe2FrameName(se2FrameName).setAccuracy(accuracy);

    stance
      .getFootPositionsMap()
      .set('fl', posFlRtFrame)
      .set('fr', posFrRtFrame)
      .set('hl', posHlRtFrame)
      .set('hr', posHrRtFrame);

    const stanceRequest = new basicCommandPb.StanceCommand.Request().setStance(stance);
    const mobilityCommand = new mobilityCommandPb.MobilityCommand.Request()
      .setStanceRequest(stanceRequest)
      .setParams(anyParams);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      mobilityCommand,
    );
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  /**
   * Command robot's body to follow the arm around.
   * @returns {robotCommandPb.RobotCommand}
   */
  static followArmCommand() {
    const mobilityCommand = new mobilityCommandPb.MobilityCommand.Request().setFollowArmRequest(
      new basicCommandPb.FollowArmCommand.Request(),
    );
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      mobilityCommand,
    );
    return new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
  }

  static armStowCommand(buildOnCommand = null) {
    return RobotCommandBuilder._armNamedCommand(
      armCommandPb.NamedArmPositionsCommand.Positions.POSITIONS_STOW,
      buildOnCommand,
    );
  }

  static armReadyCommand(buildOnCommand = null) {
    return RobotCommandBuilder._armNamedCommand(
      armCommandPb.NamedArmPositionsCommand.Positions.POSITIONS_READY,
      buildOnCommand,
    );
  }

  static armCarryCommand(buildOnCommand = null) {
    return RobotCommandBuilder._armNamedCommand(
      armCommandPb.NamedArmPositionsCommand.Positions.POSITIONS_CARRY,
      buildOnCommand,
    );
  }

  static _armNamedCommand(position, buildOnCommand = null) {
    const stowArmPositionCommand = new armCommandPb.NamedArmPositionsCommand.Request().setPosition(position);
    const armCommand = new armCommandPb.ArmCommand.Request().setNamedArmPositionCommand(stowArmPositionCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(armCommand);
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  static armGazeCommand(
    x,
    y,
    z,
    frameName,
    buildOnCommand = null,
    frame2TformDesiredHand = null,
    frame2Name = null,
    maxLinearVel = null,
    maxAngularVel = null,
    maxAccel = null,
  ) {
    const pos = new geometryPb.Vec3().setX(x).setY(y).setZ(z);
    const point1 = new trajectoryPb.Vec3TrajectoryPoint().setPoint(pos);
    const traj = new trajectoryPb.Vec3Trajectory().setPointsList([point1]);
    const gazeCmd = new armCommandPb.GazeCommand.Request().setTargetTrajectoryInFrame1(traj).setFrame1Name(frameName);

    if (frame2TformDesiredHand !== null && frame2Name !== null) {
      if (frame2TformDesiredHand instanceof SE3Pose) {
        frame2TformDesiredHand = frame2TformDesiredHand.toProto();
      }

      const desiredPoint = new trajectoryPb.SE3TrajectoryPoint().setPose(frame2TformDesiredHand);
      gazeCmd.setToolTrajectoryInFrame2(new trajectoryPb.Vec3Trajectory().setPointsList([desiredPoint]));
      gazeCmd.setFrame2Name(frame2Name);
    }

    if (maxLinearVel !== null) {
      gazeCmd.setMaxLinearVelocity(new wrappersPb.DoubleValue().setValue(maxLinearVel));
    }
    if (maxAngularVel !== null) {
      gazeCmd.setMaxAngularVelocity(new wrappersPb.DoubleValue().setValue(maxAngularVel));
    }
    if (maxAccel !== null) {
      gazeCmd.setMaximumAcceleration(new wrappersPb.DoubleValue().setValue(maxAccel));
    }

    const armCommand = new armCommandPb.ArmCommand.Request().setArmGazeCommand(gazeCmd);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(armCommand);
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  static armPoseCommandFromPose(handPose, frameName, seconds = 5_000, buildOnCommand = null) {
    const duration = secondsToDuration(seconds);
    const handPoseTrajPoint = new trajectoryPb.SE3TrajectoryPoint().setPose(handPose).setTimeSinceReference(duration);
    const handTrajectory = new trajectoryPb.SE3Trajectory().setPointsList([handPoseTrajPoint]);
    const armCartesianCommand = new armCommandPb.ArmCartesianCommand.Request()
      .setRootFrameName(frameName)
      .setPoseTrajectoryInTask(handTrajectory);
    const armCommand = new armCommandPb.ArmCommand.Request().setArmCartesianCommand(armCartesianCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(armCommand);
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) {
      return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    }
    return robotCommand;
  }

  static armPoseCommand(x, y, z, qw, qx, qy, qz, frameName, { seconds = 5, buildOnCommand = null } = {}) {
    const position = new geometryPb.Vec3().setX(x).setY(y).setZ(z);
    const rotation = new geometryPb.Quaternion().setX(qx).setY(qy).setZ(qz).setW(qw);
    const handPose = new geometryPb.SE3Pose().setPosition(position).setRotation(rotation);

    const duration = secondsToDuration(seconds);
    const handPoseTrajPoint = new trajectoryPb.SE3TrajectoryPoint().setPose(handPose).setTimeSinceReference(duration);
    const handTrajectory = new trajectoryPb.SE3Trajectory().setPointsList([handPoseTrajPoint]);

    const armCartesianCommand = new armCommandPb.ArmCartesianCommand.Request()
      .setRootFrameName(frameName)
      .setPoseTrajectoryInTask(handTrajectory);
    const armCommand = new armCommandPb.ArmCommand.Request().setArmCartesianCommand(armCartesianCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(armCommand);
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  static armWrenchCommand(
    forceX,
    forceY,
    forceZ,
    torqueX,
    torqueY,
    torqueZ,
    frameName,
    seconds = 5,
    buildOnCommand = null,
  ) {
    const force = new geometryPb.Vec3().setX(forceX).setY(forceY).setZ(forceZ);
    const torque = new geometryPb.Vec3().setX(torqueX).setY(torqueY).setZ(torqueZ);

    const wrench = new geometryPb.Wrench().setForce(force).setTorque(torque);
    const duration = secondsToDuration(seconds);
    const trajPoint = new trajectoryPb.WrenchTrajectoryPoint().setWrench(wrench).setTimeSinceReference(duration);
    const trajectory = new trajectoryPb.WrenchTrajectory().setPointsList([trajPoint]);

    const armCartesianCommand = new armCommandPb.ArmCartesianCommand.Request()
      .setRootFrameName(frameName)
      .setWrenchTrajectoryInTask(trajectory)
      .setXAxis(armCommandPb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setYAxis(armCommandPb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setZAxis(armCommandPb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setRxAxis(armCommandPb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setRyAxis(armCommandPb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE)
      .setRzAxis(armCommandPb.ArmCartesianCommand.Request.AxisMode.AXIS_MODE_FORCE);

    const armCommand = new armCommandPb.ArmCommand.Request().setArmCartesianCommand(armCartesianCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(armCommand);
    const robotCommand = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCommand);
    return robotCommand;
  }

  static clawGripperOpenCommand(buildOnCommand = null) {
    const point = new trajectoryPb.ScalarTrajectoryPoint().setPoint(_CLAW_GRIPPER_OPEN_ANGLE);
    const traj = new trajectoryPb.ScalarTrajectory().setPointsList([point]);
    const clawGripperCommand = new gripperCommandPb.ClawGripperCommand.Request().setTrajectory(traj);
    const gripperCommand = new gripperCommandPb.GripperCommand.Request().setClawGripperCommand(clawGripperCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setGripperCommand(
      gripperCommand,
    );
    const command = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, command);
    return command;
  }

  static clawGripperCloseCommand(buildOnCommand = null) {
    const point = new trajectoryPb.ScalarTrajectoryPoint().setPoint(_CLAW_GRIPPER_CLOSED_ANGLE);
    const traj = new trajectoryPb.ScalarTrajectory().setPointsList([point]);
    const clawGripperCommand = new gripperCommandPb.ClawGripperCommand.Request().setTrajectory(traj);
    const gripperCommand = new gripperCommandPb.GripperCommand.Request().setClawGripperCommand(clawGripperCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setGripperCommand(
      gripperCommand,
    );
    const command = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, command);
    return command;
  }

  static clawGripperOpenFractionCommand(openFraction, buildOnCommand = null) {
    let gripperQ = 0;

    if (openFraction <= 0) {
      gripperQ = _CLAW_GRIPPER_CLOSED_ANGLE;
    } else if (openFraction >= 1) {
      gripperQ = _CLAW_GRIPPER_OPEN_ANGLE;
    } else {
      gripperQ = (_CLAW_GRIPPER_OPEN_ANGLE - _CLAW_GRIPPER_CLOSED_ANGLE) * openFraction + _CLAW_GRIPPER_CLOSED_ANGLE;
    }

    const point = new trajectoryPb.ScalarTrajectoryPoint().setPoint(gripperQ);
    const traj = new trajectoryPb.ScalarTrajectory().setPointsList([point]);
    const clawGripperCommand = new gripperCommandPb.ClawGripperCommand.Request().setTrajectory(traj);
    const gripperCommand = new gripperCommandPb.GripperCommand.Request().setClawGripperCommand(clawGripperCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setGripperCommand(
      gripperCommand,
    );
    const command = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, command);
    return command;
  }

  static clawGripperOpenAngleCommand(gripperQ, buildOnCommand = null) {
    const point = new trajectoryPb.ScalarTrajectoryPoint().setPoint(gripperQ);
    const traj = new trajectoryPb.ScalarTrajectory().setPointsList([point]);
    const clawGripperCommand = new gripperCommandPb.ClawGripperCommand.Request().setTrajectory(traj);
    const gripperCommand = new gripperCommandPb.GripperCommand.Request().setClawGripperCommand(clawGripperCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setGripperCommand(
      gripperCommand,
    );
    const command = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, command);
    return command;
  }

  static createArmJointTrajectoryPoint(sh0, sh1, el0, el1, wr0, wr1, timeSinceReferenceSecs = null) {
    const jointPosition = new armCommandPb.ArmJointPosition()
      .setSh0(new wrappersPb.DoubleValue().setValue(sh0))
      .setSh1(new wrappersPb.DoubleValue().setValue(sh1))
      .setEl0(new wrappersPb.DoubleValue().setValue(el0))
      .setEl1(new wrappersPb.DoubleValue().setValue(el1))
      .setWr0(new wrappersPb.DoubleValue().setValue(wr0))
      .setWr1(new wrappersPb.DoubleValue().setValue(wr1));

    if (timeSinceReferenceSecs !== null) {
      return new armCommandPb.ArmJointTrajectoryPoint()
        .setPosition(jointPosition)
        .setTimeSinceReference(secondsToDuration(timeSinceReferenceSecs));
    } else {
      return new armCommandPb.ArmJointTrajectoryPoint().setPosition(jointPosition);
    }
  }

  static armJointCommand(sh0, sh1, el0, el1, wr0, wr1, maxVel = null, maxAccel = null, buildOnCommand = null) {
    const trajPoint1 = RobotCommandBuilder.createArmJointTrajectoryPoint(sh0, sh1, el0, el1, wr0, wr1);
    const armJointTraj = new armCommandPb.ArmJointTrajectory().setPointsList([trajPoint1]);

    if (maxVel !== null) armJointTraj.setMaximumVelocity(new wrappersPb.DoubleValue().setValue(maxVel));
    if (maxAccel !== null) armJointTraj.setMaximumAcceleration(new wrappersPb.DoubleValue().setValue(maxAccel));

    const jointMoveCommand = new armCommandPb.ArmJointMoveCommand.Request().setTrajectory(armJointTraj);
    const armCommand = new armCommandPb.ArmCommand.Request().setArmJointMoveCommand(jointMoveCommand);
    const syncArm = new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(armCommand);
    const armSyncRobotCmd = new robotCommandPb.RobotCommand().setSynchronizedCommand(syncArm);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, armSyncRobotCmd);
    return armSyncRobotCmd;
  }

  /**
   * Given a set of joint positions, times, and optional velocity, create a synchro command.
   * @param {*} jointPositions A list of length N with joint positions at each knot point in our
   * trajectory. Each knot joint position is represented as a list of length 6,
   * representing the 6 joint angles [sh0, sh1, el0, el1, wr0, wr1]
   * @param {*} times A list of length N with the corresponding time_since_reference for each of our knots
   * @param {*} jointVelocities Optional joint velocities at each knot. Same structure as joint_positions
   * @param {*} refTime Optional robot reference time. If unset, we'll use the current synchronized robot
   * time. Setting this is useful for getting a consistent trajectory over a long
   * period of time when many ArmJointMoveRequest commands are chained together.
   * @param {*} maxAcc Optional maximum allowable joint acceleration. Not setting this will lead to the
   * robot using a relatively safe low default. If the user is sure their joint
   * trajectory is safe and achievable, this can be set to a large value so it
   * doesn't get in the way.
   * @param {*} maxVel Optional maximum allowable joint velocity. Same thing about defaults as max_acc
   * @param {*} buildOnCommand Option to input a RobotCommand (not containing a full_body_command). An
   * arm_command and gripper_command from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   * @returns {robotCommandPb.RobotCommand}
   */
  static armJointMoveHelper(
    jointPositions,
    times,
    jointVelocities = null,
    refTime = null,
    maxAcc = null,
    maxVel = null,
    buildOnCommand = null,
  ) {
    console.assert(!jointPositions, 'Must pass in a list of joint positions');
    console.assert(jointPositions.length === times.length, 'Number of joint positions must match number of times');
    console.assert(!times, 'Must pass in a list of times');

    if (jointVelocities !== null) {
      console.assert(jointVelocities.length === times.length, 'Number of joint velocities must match number of times');
    }

    const robotCmd = new robotCommandPb.RobotCommand();
    // eslint-disable-next-line

    const armJointTraj = new armCommandPb.ArmJointTrajectory();
    const jointMoveCommand = new armCommandPb.ArmJointMoveCommand.Request().setTrajectory(armJointTraj);
    const armCommand = new armCommandPb.ArmCommand.Request().setArmJointMoveCommand(jointMoveCommand);
    const syncArm = new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(armCommand);

    robotCmd.setSynchronizedCommand(syncArm);

    for (const i in [...Array(times.length).keys()]) {
      const trajPoint = new armCommandPb.ArmJointTrajectoryPoint();

      const joints = jointPositions[i];
      console.assert(joints.length === 6, 'Need 6 joint positions per knot point for this helper');
      // Note that although we're setting all 6 joint angles here, the actual
      // ArmJointTrajectory command doesn't require this. Any unset joint angles
      // will stay at the joint angle the robot is currently at
      const position = new armCommandPb.ArmJointPosition();
      position.setSh0(new wrappersPb.DoubleValue().setValue(joints[0]));
      position.setSh1(new wrappersPb.DoubleValue().setValue(joints[1]));
      position.setEl0(new wrappersPb.DoubleValue().setValue(joints[2]));
      position.setEl1(new wrappersPb.DoubleValue().setValue(joints[3]));
      position.setWr0(new wrappersPb.DoubleValue().setValue(joints[4]));
      position.setWr1(new wrappersPb.DoubleValue().setValue(joints[5]));

      trajPoint.setPosition(position);

      if (jointVelocities !== null) {
        const vels = jointVelocities[i];
        console.assert(vels.length === 6, 'Need 6 joint velocities per knot point for this helper');
        // Note that although we're setting all 6 joint velocities here, the actual
        // ArmJointTrajectory command doesn't require this. If at least 1 joint
        // velocity is specified, any unset joint velocities will be set to 0.
        // If no `velocity` is specified for this point, the robot will not constrain
        // the velocity of the trajectory at this point.
        const velocity = new armCommandPb.ArmJointVelocity();
        velocity.setSh0(new wrappersPb.DoubleValue().setValue(vels[0]));
        velocity.setSh1(new wrappersPb.DoubleValue().setValue(vels[1]));
        velocity.setEl0(new wrappersPb.DoubleValue().setValue(vels[2]));
        velocity.setEl1(new wrappersPb.DoubleValue().setValue(vels[3]));
        velocity.setWr0(new wrappersPb.DoubleValue().setValue(vels[4]));
        velocity.setWr1(new wrappersPb.DoubleValue().setValue(vels[5]));

        trajPoint.setVelocity(velocity);
      }

      trajPoint.setTimeSinceReference(secondsToDuration(times[i]));

      armJointTraj.addPoints(trajPoint);
    }

    // Set our other optional arguments
    if (refTime !== null) {
      armJointTraj.setReferenceTime(refTime);
    }
    if (maxAcc !== null) {
      armJointTraj.getMaximumAcceleration().setValue(maxAcc);
    }
    if (maxVel !== null) {
      armJointTraj.getMaximumVelocity().setValue(maxVel);
    }

    if (buildOnCommand) {
      return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCmd);
    }

    return robotCmd;
  }

  /**
   * Given a set of gripper positions, times, and optional velocities, create a synchro command.
   * @param {*} gripperPositions A list of length N with joint positions at each knot point in our
   * trajectory.
   * @param {*} times A list of length N with the corresponding time_since_reference for each of our knots
   * @param {*} gripperVelocities Optional joint velocities at each knot. Same structure as gripper_positions.
   * @param {*} refTime Optional robot reference time. If unset, we'll use the current synchronized robot
   * time. Setting this is useful for getting a consistent trajectory over a long
   * period of time when many ClawGripperCommandRequest commands are chained together.
   * @param {*} maxAcc Optional maximum allowable gripper acceleration. Not setting this will lead to the
   * robot using a relatively safe low default. If the user is sure their gripper
   * trajectory is safe and achievable, this can be set to a large value so it
   * doesn't get in the way.
   * @param {*} maxVel Optional maximum allowable gripper velocity. Same thing about defaults as max_acc.
   * @param {*} disableForceOnContact Whether to switch the gripper to force control on contact detection.
   * @param {*} buildOnCommand Option to input a RobotCommand (not containing a full_body_command). An
   * arm_command and mobility_command from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   * @param {*} maxTorque Optional Maximum torque applied if contact detected closing the gripper. If
   * unspecified, a default value of 5.5 (Nm) will be used.
   * @returns {robotCommandPb.RobotCommand}
   */
  static clawGripperCommandHelper(
    gripperPositions,
    times,
    gripperVelocities = null,
    refTime = null,
    maxAcc = null,
    maxVel = null,
    disableForceOnContact = false,
    buildOnCommand = null,
    maxTorque = null,
  ) {
    console.assert(gripperPositions !== null, 'Must pass in a list of gripper positions');
    console.assert(times !== null, 'Must pass in a list of times');
    console.assert(gripperPositions.length === times.length, 'Number of gripper positions must match number of times');
    if (gripperPositions !== null) {
      console.assert(
        gripperPositions.length === times.length,
        'Number of gripper velocities must match number of times',
      );
    }

    // Create a claw gripper command, and set the trajectory
    const robotCmd = new robotCommandPb.RobotCommand();
    robotCmd.setSynchronizedCommand(
      new synchronizedCommandPb.SynchronizedCommand.Request().setGripperCommand(
        new gripperCommandPb.GripperCommand.Request(),
      ),
    );
    const gripperCmd = robotCmd.getSynchronizedCommand().getGripperCommand().getClawGripperCommand();
    const gripperTraj = gripperCmd.getTrajectory();

    for (let i = 0; i < times.length; i++) {
      // Add a new trajectory point to our trajectory
      const trajPoint = gripperTraj.points.add();
      trajPoint.point = gripperPositions[i];
      if (gripperVelocities !== null) {
        trajPoint.velocity.value = gripperVelocities[i];
      }

      // Set our timeSinceReference for this trajectory point
      trajPoint.setTimeSinceReference(secondsToDuration(times[i]));
    }

    // Set our other optional arguments
    if (refTime !== null) {
      // Set a reference time if desired. If not, we'll automatically set the reference time
      // to be the current robot-synchronized time
      gripperCmd.setReferenceTime(refTime);
    }
    if (maxAcc !== null) {
      // Set a maximum allowable joint acceleration if desired.
      // If unset, a safe default will be used
      gripperCmd.setMaximumOpenCloseAcceleration(new wrappersPb.DoubleValue().setValue(maxAcc));
    }
    if (maxVel !== null) {
      // Set a maximum allowable joint velocity if desired.
      // If unset, a safe default will be used
      gripperCmd.setMaximumOpenCloseVelocity(new wrappersPb.DoubleValue().setValue(maxVel));
    }
    if (maxTorque !== null) {
      // Maximum torque applied if contact detected closing the gripper.
      // If unspecified, a default value of 5.5 (Nm) will be used.
      gripperCmd.setMaximumTorque(new wrappersPb.DoubleValue().setValue(maxTorque));
    }

    gripperCmd.setDisableForceOnContact(disableForceOnContact);

    if (buildOnCommand) {
      return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCmd);
    }
    return robotCmd;
  }

  /**
   * Returns a RobotCommand with an ArmCommand that will freeze the arm's joints in place.
   * @param {robotCommandPb.RobotCommand} buildOnCommand Option to input a RobotCommand (not containing a
   * fullBodyCommand). An armCommand and mobilityCommand from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   * @returns {robotCommandPb.RobotCommand}
   */
  static armJointFreezeCommand(buildOnCommand = null) {
    const robotCmd = new robotCommandPb.RobotCommand().setSynchronizedCommand(
      new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(
        new armCommandPb.ArmJointMoveCommand.Request().setTrajectory(
          new armCommandPb.ArmJointTrajectory().addPoints(new armCommandPb.ArmJointTrajectoryPoint()),
        ),
      ),
    );

    if (buildOnCommand !== null) {
      return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCmd);
    }
    return robotCmd;
  }

  /** *********************
   * Spot mobility params *
   ***********************/

  static mobilityParams(
    bodyHeight = 0.0,
    footprintRBody = new geometry.EulerZXY(),
    locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
    stairHint = false,
    externalForceParams = null,
    stairsMode = null,
  ) {
    const position = new geometryPb.Vec3().setZ(bodyHeight);
    const rotation = footprintRBody.toQuaternion();
    const pose = new geometryPb.SE3Pose().setPosition(position).setRotation(rotation);
    const point = new trajectoryPb.SE3TrajectoryPoint().setPose(pose);
    const traj = new trajectoryPb.SE3Trajectory().setPointsList([point]);
    const body_control = new spotCommandPb.BodyControlParams().setBaseOffsetRtFootprint(traj);
    return new spotCommandPb.MobilityParams()
      .setBodyControl(body_control)
      .setLocomotionHint(locomotionHint)
      .setStairHint(stairHint)
      .setExternalForceParams(externalForceParams)
      .setStairsMode(stairsMode);
  }

  static buildBodyExternalForces(
    externalForceIndicator = spotCommandPb.BodyExternalForceParams.ExternalForceIndicator.EXTERNAL_FORCE_NONE,
    overrideExternalForceVec = null,
  ) {
    if (
      externalForceIndicator ===
      spotCommandPb.BodyExternalForceParams.ExternalForceIndicator.EXTERNAL_FORCE_USE_OVERRIDE
    ) {
      if (overrideExternalForceVec === null) overrideExternalForceVec = [0.0, 0.0, 0.0];
      const extForces = new geometryPb.Vec3()
        .setX(overrideExternalForceVec[0])
        .setY(overrideExternalForceVec[1])
        .setZ(overrideExternalForceVec[2]);
      return new spotCommandPb.BodyExternalForceParams()
        .setExternalForceIndicator(externalForceIndicator)
        .setFrameName(BODY_FRAME_NAME)
        .setExternalForceOverride(extForces);
    } else if (
      externalForceIndicator === spotCommandPb.BodyExternalForceParams.ExternalForceIndicator.EXTERNAL_FORCE_NONE ||
      externalForceIndicator === spotCommandPb.BodyExternalForceParams.EXTERNAL_FORCE_USE_ESTIMATE
    ) {
      return new spotCommandPb.BodyExternalForceParams().setExternalForceIndicator(externalForceIndicator);
    } else {
      return null;
    }
  }

  /** *****************
   * Helper functions *
   *******************/

  static _toAny(params, typeName = 'bosdyn.api.spot.MobilityParams') {
    return new Any().pack(params.serializeBinary(), typeName);
  }

  static buildSynchroCommand(...args) {
    let mobilityRequest = null;
    let armRequest = null;
    let gripperRequest = null;

    for (const command of args) {
      if (command.hasFullBodyCommand && command.hasFullBodyCommand()) {
        throw new Error('[ROBOT COMMAND] this function only takes RobotCommands containing mobility or synchro cmds');
      } else if (command.hasMobilityCommand && command.hasMobilityCommand()) {
        mobilityRequest = command.getMobilityCommand();
      } else if (command.hasSynchronizedCommand && command.hasSynchronizedCommand()) {
        if (command.getSynchronizedCommand().hasMobilityCommand()) {
          mobilityRequest = command.getSynchronizedCommand().getMobilityCommand();
        }
        if (command.getSynchronizedCommand().hasArmCommand()) {
          armRequest = command.getSynchronizedCommand().getArmCommand();
        }
        if (command.getSynchronizedCommand().hasGripperCommand()) {
          gripperRequest = command.getSynchronizedCommand().getGripperCommand();
        }
      } else {
        console.log('[ROBOT COMMAND] skipping empty robot command');
      }
    }

    if (mobilityRequest || armRequest || gripperRequest) {
      const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request()
        .setMobilityCommand(mobilityRequest)
        .setArmCommand(armRequest)
        .setGripperCommand(gripperRequest);
      return new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    } else {
      throw new Error('[ROBOT COMMAND] Nothing to build here');
    }
  }
}

/**
 * Helper function which uses the RobotCommandService to stand.
 * Blocks until robot is standing, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=10_000] Timeout for the command in seconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @param  {MobilityParams} [params=null] Spot specific parameters for mobility commands
 * to optionally set say body_height
 * @returns {Promise<void>}
 * @throws {CommandFailedError} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blockingStand(commandClient, timeoutMsec = 10_000, updateFrequency = 1.0, params = null) {
  const startTime = Date.now();
  const endTime = startTime + timeoutMsec;
  const updateTime = 1.0 / updateFrequency;

  const standCommand = RobotCommandBuilder.synchroStandCommand({ params });
  const commandId = await commandClient.robotCommand(standCommand, null, null, null, { timeout: timeoutMsec });

  let now = Date.now();
  /* eslint-disable no-await-in-loop */
  while (now < endTime) {
    const timeUntilTimeout = endTime - now;
    const rpcTimeout = Math.max(timeUntilTimeout, 1_000);
    const startCallTime = Date.now();

    let response,
      isCatch = false;

    try {
      response = await commandClient.robotCommandFeedback(commandId, { timeout: rpcTimeout });
    } catch (e) {
      isCatch = true;
    }

    if (!isCatch) {
      const mobFeedback = response.getFeedback().getSynchronizedFeedback().getMobilityCommandFeedback();
      const mobStatus = mobFeedback.getStatus();
      const standStatus = mobFeedback.getStandFeedback().getStatus();

      if (mobStatus !== basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING) {
        throw new CommandFailedError(
          // eslint-disable-next-line
          `Stand (ID ${commandId}) no longer processing (now ${basicCommandPb.RobotCommandFeedbackStatus.Status[mobStatus]})`
        );
      }
      if (standStatus === basicCommandPb.StandCommand.Feedback.Status.STATUS_IS_STANDING) {
        return;
      }
    }

    const deltaT = Date.now() - startCallTime;
    await sleep(Math.max(Math.min(deltaT, updateTime), 0.0));
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError(`Took longer than ${now - startTime} seconds to assure the robot stood.`);
}

/**
 * Helper function which uses the RobotCommandService to sit.
 * Blocks until robot is sitting, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=10_000] Timeout for the command in seconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedError} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blockingSit(commandClient, timeoutMsec = 10_000, updateFrequency = 1.0) {
  const startTime = Date.now();
  const endTime = startTime + timeoutMsec;
  const updateTime = 1.0 / updateFrequency;

  const sitCommand = RobotCommandBuilder.synchroSitCommand();
  const commandId = await commandClient.robotCommand(sitCommand, null, null, null, { timeout: timeoutMsec });

  let now = Date.now();
  /* eslint-disable no-await-in-loop */
  while (now < endTime) {
    const timeUntilTimeout = endTime - now;
    const rpcTimeout = Math.max(timeUntilTimeout, 1_000);
    const startCallTime = Date.now();

    let response,
      isCatch = false;

    try {
      response = await commandClient.robotCommandFeedback(commandId, { timeout: rpcTimeout });
    } catch (e) {
      isCatch = true;
    }

    if (!isCatch) {
      const mobFeedback = response.getFeedback().getSynchronizedFeedback().getMobilityCommandFeedback();
      const mobStatus = mobFeedback.getStatus();
      const sitStatus = mobFeedback.getSitFeedback().getStatus();
      if (mobStatus !== basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING) {
        throw new CommandFailedError(
          // eslint-disable-next-line
          `Sit (ID ${commandId}) no longer processing (now ${basicCommandPb.RobotCommandFeedbackStatus.Status[mobStatus]})`,
        );
      }
      if (sitStatus === basicCommandPb.SitCommand.Feedback.Status.STATUS_IS_SITTING) {
        return;
      }
    }

    const deltaT = Date.now() - startCallTime;
    await sleep(Math.max(Math.min(deltaT, updateTime), 0.0));
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError(`Took longer than ${now - startTime} seconds to assure the robot sat.`);
}

/**
 * Helper function which uses the RobotCommandService to self-right.
 * Blocks until self-right has completed, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=30_000] Timeout for the command in seconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedError} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blockingSelfright(commandClient, timeoutMsec = 30_000, updateFrequency = 1.0) {
  const startTime = Date.now();
  const endTime = startTime + timeoutMsec;
  const updateTime = 1.0 / updateFrequency;

  const selfrightCommand = RobotCommandBuilder.selfrightCommand();
  const commandId = await commandClient.robotCommand(selfrightCommand, null, null, null, { timeout: timeoutMsec });

  let now = Date.now();
  /* eslint-disable no-await-in-loop */
  while (now < endTime) {
    const timeUntilTimeout = endTime - now;
    const rpcTimeout = Math.max(timeUntilTimeout, 1_000);
    const startCallTime = Date.now();

    let response,
      isCatch = false;
    try {
      response = await commandClient.robotCommandFeedback(commandId, { timeout: rpcTimeout });
    } catch (e) {
      isCatch = true;
    }

    if (!isCatch) {
      const fullBodyFeedback = response.getFeedback().getFullBodyFeedback();
      const fullBodyStatus = fullBodyFeedback.getStatus();
      const selfrightStatus = fullBodyFeedback.getSelfrightFeedback().getStatus();
      if (fullBodyStatus !== basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING) {
        throw new CommandFailedError(
          // eslint-disable-next-line
          `Self-right (ID ${commandId}) no longer processing (now ${basicCommandPb.RobotCommandFeedbackStatus.Status[fullBodyStatus]})`,
        );
      }
      if (selfrightStatus === basicCommandPb.SelfRightCommand.Feedback.STATUS_COMPLETED) {
        return;
      }
    }

    const deltaT = Date.now() - startCallTime;
    await sleep(Math.max(Math.min(deltaT, updateTime), 0.0));
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */

  throw new CommandTimedOutError(
    `Took longer than ${now - startTime} seconds to assure the robot completed self-right.`,
  );
}

/**
 * Helper that blocks until the arm achieves a finishing state for the specific arm command.
 * This helper will block and check the feedback for ArmCartesianCommand, GazeCommand,
 * ArmJointMoveCommand, and NamedArmPositionsCommand.
 * @param  {RobotCommandClient} commandClient Robot command client, used to request feedback
 * @param  {number} cmdId Timeout for the command in seconds.
 * @param  {number} [timeoutMsec=null] optional number of seconds after which we'll return no matter what
 * the robot's state is.
 * @returns {Promise<boolean>} true if successfully got to the end of the trajectory, false if the arm stalled or
 * the move was canceled (the arm failed to reach the goal).
 * @throws {CommandFailedError} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blockUntilArmArrives(commandClient, cmdId, timeoutMsec = null) {
  let startTime, endTime, now;

  if (timeoutMsec !== null) {
    startTime = Date.now();
    endTime = startTime + timeoutMsec;
    now = Date.now();
  }

  /* eslint-disable no-await-in-loop, no-unmodified-loop-condition */
  while (timeoutMsec === null || now < endTime) {
    const feedbackResp = await commandClient.robotCommandFeedback(cmdId);

    const armFeedback = feedbackResp.getFeedback().getSynchronizedFeedback().getArmCommandFeedback();

    if (armFeedback.hasArmCartesianFeedback()) {
      if (
        armFeedback.getArmCartesianFeedback().getStatus() ===
        armCommandPb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_COMPLETE
      ) {
        return true;
      } else if (
        armFeedback.getArmCartesianFeedback().getStatus() ===
          armCommandPb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_STALLED ||
        armFeedback.getArmCartesianFeedback().getStatus() ===
          armCommandPb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_CANCELLED
      ) {
        return false;
      }
    } else if (armFeedback.hasArmGazeFeedback()) {
      if (
        armFeedback.getArmGazeFeedback().getStatus() ===
        armCommandPb.GazeCommand.Feedback.Status.STATUS_TRAJECTORY_COMPLETE
      ) {
        return true;
      } else if (
        armFeedback.getArmGazeFeedback().getStatus() ===
        armCommandPb.GazeCommand.Feedback.Status.STATUS_TOOL_TRAJECTORY_STALLED
      ) {
        return false;
      }
    } else if (armFeedback.hasArmJointMoveFeedback()) {
      if (
        armFeedback.getArmJointMoveFeedback().getStatus() ===
        armCommandPb.ArmJointMoveCommand.Feedback.Status.STATUS_COMPLETE
      ) {
        return true;
      }
    } else if (armFeedback.hasNamedArmPositionFeedback()) {
      if (
        armFeedback.getNamedArmPositionFeedback().getStatus() ===
        armCommandPb.NamedArmPositionsCommand.Feedback.Status.STATUS_COMPLETE
      ) {
        return true;
      } else if (
        armFeedback.getNamedArmPositionFeedback().getStatus() ===
        armCommandPb.NamedArmPositionsCommand.Feedback.Status.STATUS_STALLED_HOLDING_ITEM
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
 * @param {RobotCommandClient} commandClient the client used to request feedback
 * @param {number} cmdId command ID returned by the robot when the trajectory command was sent
 * @param {Array<basic_command_pb.SE2TrajectoryCommand.Feedback.Status>|Array<number>}  trajectoryEndStatuses
 * the feedback must have a status which is included in this set of statuses to be considered successfully complete.
 * By default, this includes only the "STATUS_AT_GOAL" end condition.
 * @param {Array<basic_command_pb.SE2TrajectoryCommand.Feedback.BodyMovementStatus>} bodyMovementStatuses
 * the body movement status must be one of these statuses to be considered successfully complete. By
 * default, this is null, which means any body movement status will be accepted.
 * @param {number} feedbackIntervalSecs The time (in seconds) to wait before each feedback request checking
 * if the trajectory is complete. Defaults to checking at 10 Hz (requests every 0.1 seconds || 100 milliseconds).
 * @param {number} timeoutSec optional number of seconds after which we'll return no matter what the robot's state is.
 * @param {any} logger The logger print debug statements with. If null, no debug printouts will be sent.
 * @returns {Promise<boolean>} True if reaches STATUS_AT_GOAL, false otherwise.
 */
async function blockForTrajectoryCmd(
  commandClient,
  cmdId,
  trajectoryEndStatuses = [basicCommandPb.SE2TrajectoryCommand.Feedback.Status.STATUS_AT_GOAL],
  bodyMovementStatuses = null,
  feedbackIntervalSecs = 100,
  timeoutSec = null,
  logger = null,
) {
  let startTime, endTime, now;

  if (timeoutSec !== null) {
    startTime = Date.now();
    endTime = startTime + timeoutSec;
    now = Date.now();
  }

  /* eslint-disable no-await-in-loop, no-unmodified-loop-condition */
  while (timeoutSec === null || now < endTime) {
    const feedbackResp = await commandClient.robotCommandFeedback(cmdId);

    const currentTrajectoryState = feedbackResp
      .getFeedback()
      .getSynchronizedFeedback()
      .getMobilityCommandFeedback()
      .getSe2TrajectoryFeedback()
      .getStatus();
    const bodyMovementState = feedbackResp
      .getFeedback()
      .getSynchronizedFeedback()
      .getMobilityCommandFeedback()
      .getSe2TrajectoryFeedback()
      .getBodyMovementStatus();

    if (logger !== null) {
      const currentStateStr = basicCommandPb.SE2TrajectoryCommand.Feedback.Status[currentTrajectoryState];
      logger.info(`blockForTrajectoryCmd: ${currentStateStr}`);
    }

    if (trajectoryEndStatuses.includes(currentTrajectoryState)) {
      if (bodyMovementStatuses !== null) {
        if (bodyMovementStatuses.length > 0 && bodyMovementStatuses.includes(bodyMovementState)) {
          return true;
        }
      } else {
        return true;
      }
    }

    await sleep(feedbackIntervalSecs);
    now = Date.now();
  }
  /* eslint-enable no-await-in-loop */

  if (logger !== null) logger.info('blockForTrajectoryCmd: timeout exceeded.');

  return false;
}

module.exports = {
  EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME,
  END_TIME_EDIT_TREE,
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
  RobotCommandStreamingClient,
  _TimeConverter,
  _clearBehaviorFaultError,
  _editProto,
  _robotCommandError,
  _robotCommandFeedbackError,
  blockingStand,
  blockingSit,
  blockingSelfright,
  blockUntilArmArrives,
  blockForTrajectoryCmd,
};
