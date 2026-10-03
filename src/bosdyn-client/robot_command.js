/**
 * @file For clients to the robot command service.
 */

'use strict';

const { setTimeout: sleep } = require('node:timers/promises');
const { Any } = require('google-protobuf/google/protobuf/any_pb');
const wrappersPb = require('google-protobuf/google/protobuf/wrappers_pb');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

const {
  BaseClient,
  errorFactory,
  handleCommonHeaderErrors,
  handleLeaseUseResultErrors,
  handleUnsetStatusError,
} = require('./common');
const {
  BosdynError,
  ResponseError,
  InvalidRequestError,
  UnsetStatusError,
  ValueError,
  TimedOutError,
} = require('./exceptions');
const { BODY_FRAME_NAME, ODOM_FRAME_NAME, getSe2ATformB } = require('./frame_helpers');
const { addLeaseWalletProcessors } = require('./lease');
const { SE2Pose, SE3Pose } = require('./math_helpers');
const { DefaultDict, checkOptions: _checkOptions } = require('./util');

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
const { formatFixed, nowMsec, nowSec, secondsToDuration } = require('../bosdyn-core/util');

/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./lease').Lease} Lease
 * @typedef {import('../bosdyn-core/util').RobotTimeConverter} RobotTimeConverter
 * @typedef {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} Timestamp
 */

const _CLAW_GRIPPER_OPEN_ANGLE = -1.5708;
const _CLAW_GRIPPER_CLOSED_ANGLE = 0;

// Type name of the MobilityParams packed in the google.protobuf.Any params of a mobility command.
const MOBILITY_PARAMS_TYPE_NAME = 'bosdyn.api.spot.MobilityParams';

/** General class of errors for RobotCommand service. */
class RobotCommandResponseError extends ResponseError {}
/** Client has not done timesync with robot. */
class NoTimeSyncError extends RobotCommandResponseError {}
/** The command was received after its max_duration had already passed. */
class ExpiredError extends RobotCommandResponseError {}
/** The command end time was too far in the future. */
class TooDistantError extends RobotCommandResponseError {}
/** The robot must be powered on to accept a command. */
class NotPoweredOnError extends RobotCommandResponseError {}
/** The robot may not be commanded with uncleared behavior faults. */
class BehaviorFaultError extends RobotCommandResponseError {}
/** Behavior fault could not be cleared. */
class NotClearedError extends RobotCommandResponseError {}
/** The API supports this request, but the system does not support this request. */
class UnsupportedError extends RobotCommandResponseError {}
/** Robot does not know how to handle supplied frame. */
class UnknownFrameError extends RobotCommandResponseError {}
/** The command cannot be executed while the robot is docked. */
class DockedError extends RobotCommandResponseError {}

/** Command indicated it failed in its feedback. */
// Python: robot_command.Error(bosdyn.client.exceptions.Error).
class CommandFailedError extends BosdynError {}

/**
 * Command failed, and includes the feedback response (like Python's CommandFailedErrorWithFeedback).
 */
class CommandFailedErrorWithFeedback extends CommandFailedError {
  /**
   * @param {string} message The error message.
   * @param {?robotCommandPb.RobotCommandFeedbackResponse} [feedback=null] The feedback response.
   */
  constructor(message, feedback = null) {
    super(message);
    this.feedback = feedback;
  }
}

/** Timed out waiting for SUCCESS response from robot command. */
class CommandTimedOutError extends BosdynError {}

// The options objects of the builders are checked (_checkOptions) like the keyword arguments of Python: e.g. the
// MobilityParams passed as first argument of synchroStandCommand(), or the duration passed after the frame name to
// armPoseCommand(), were silently ignored.
const _TRAJECTORY_OPTIONS = ['params', 'bodyHeight', 'locomotionHint', 'buildOnCommand'];

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
   * @param {Timestamp} timestamp Local system time
   */
  convertTimestampFromLocalToRobot(timestamp) {
    this.obj.convertTimestampFromLocalToRobot(timestamp);
  }

  /**
   * Calls RobotTimeConverter.robotTimestampFromLocalSecs().
   * @param {*} endTimeSecs Local system time, in seconds from the unix epoch.
   * @returns {Timestamp}
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
      // Recursion into the field set in the oneof named after the '@', e.g. '@param' uses
      // getParamCase() and the ParamCase enum.
      const oneofName = key.slice(1);
      const getCase = proto[camelCase(`get_${oneofName}_case`)];
      const caseEnum = proto.constructor[`${upperFirst(camelCase(oneofName))}Case`];
      if (typeof getCase !== 'function' || !caseEnum) continue;
      const whichOneof = getCase.call(proto);
      const caseName = Object.keys(caseEnum).find(name => caseEnum[name] === whichOneof);
      const correctSubtree = whichOneof !== 0 && caseName ? subtree[camelCase(caseName)] : null;
      if (!correctSubtree) continue;
      _editProto(proto[camelCase(`get_${caseName}`)](), correctSubtree, editFn);
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
   */
  get timesyncEndpoint() {
    if (!this._timesyncEndpoint) {
      throw new NoTimeSyncError(null, 'No timesync endpoint was passed to robot command client.');
    }
    return this._timesyncEndpoint;
  }

  /**
   * Issue a command to the robot asynchronously.
   * @param {robotCommandPb.RobotCommand} command Command to issue.
   * @param {number} [endTimeSecs] End time for the command in seconds.
   * @param {TimeSyncEndpoint} [timesyncEndpoint] Timesync endpoint.
   * @param {Lease} [lease] Lease object to use for the command.
   * @param {Object} [args] Options to provide for gRPC request.
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
  async robotCommand(command, endTimeSecs = null, timesyncEndpoint = null, lease = null, args) {
    const req = this._getRobotCommandRequest(lease, command);
    this._updateCommandTimestamps(req.getCommand(), endTimeSecs, timesyncEndpoint);
    return this.call(this._stub.robotCommand, req, _robotCommandValue, _robotCommandError, false, args);
  }

  /**
   * Get feedback from a previously issued command.
   * @param {?number} [robotCommandId=null] ID of the robot command to get feedback on.
   * @param {Object} [args] Options to provide for gRPC request.
   * @returns {Promise<robotCommandPb.RobotCommandFeedbackResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   */
  robotCommandFeedback(robotCommandId = null, args) {
    const req = this._getRobotCommandFeedbackRequest(robotCommandId);
    return this.call(this._stub.robotCommandFeedback, req, null, _robotCommandFeedbackError, false, args);
  }

  /**
   * Clear a behavior fault on the robot.
   * @param {string} behaviorFaultId ID of the behavior fault.
   * @param {Lease} [lease] Lease information to use in the message.
   * @param {Object} [args] Options to provide for gRPC request.
   * @returns {Promise<boolean>} Boolean whether response status is STATUS_CLEARED.
   */
  clearBehaviorFault(behaviorFaultId, lease = null, args) {
    const req = this._getClearBehaviorFaultRequest(lease, behaviorFaultId);
    return this.call(
      this._stub.clearBehaviorFault,
      req,
      _clearBehaviorFaultValue,
      _clearBehaviorFaultError,
      false,
      args,
    );
  }

  _getRobotCommandRequest(lease, command) {
    // Copy the command like Python does: the timestamps are converted in the request, so the caller's
    // command stays in local time and can be sent again.
    return new robotCommandPb.RobotCommandRequest()
      .setLease(lease)
      .setCommand(command.clone())
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

    // jspb messages have no field properties (`key in proto` is always false): use the generated
    // set/has/get methods of the field instead.
    function _setEndTime(key, proto) {
      const setter = proto[camelCase(`set_${key}`)];
      // No such field in the proto to be set to the end-time.
      if (typeof setter !== 'function') return;
      setter.call(proto, converter.robotTimestampFromLocalSecs(endTimeSecs));
    }

    function _toRobotTime(key, proto) {
      const has = proto[camelCase(`has_${key}`)];
      // No such field in proto, or field does not contain a timestamp.
      if (typeof has !== 'function' || !has.call(proto)) return;
      converter.convertTimestampFromLocalToRobot(proto[camelCase(`get_${key}`)]());
    }

    if (endTimeSecs) _editProto(command, END_TIME_EDIT_TREE, _setEndTime);

    _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _toRobotTime);

    // Commands without a mobility command (stop, freeze, arm, gripper, full body...) have no params.
    const mobilityCommand = command.getSynchronizedCommand()?.getMobilityCommand();
    if (mobilityCommand?.hasParams()) {
      const anyParams = mobilityCommand.getParams();
      const params = anyParams.unpack(spotCommandPb.MobilityParams.deserializeBinary, MOBILITY_PARAMS_TYPE_NAME);
      if (params) {
        _editProto(params, MOBILITY_PARAM_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _toRobotTime);
        anyParams.pack(params.serializeBinary(), MOBILITY_PARAMS_TYPE_NAME);
      }
    }
  }

  _getRobotCommandFeedbackRequest(robotCommandId) {
    // null: the field is not set, like Python.
    return new robotCommandPb.RobotCommandFeedbackRequest().setRobotCommandId(robotCommandId ?? 0);
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

  /**
   * Stream joint control commands to the robot.
   * @param {Iterable<robotCommandPb.JointControlStreamRequest>|AsyncIterable<robotCommandPb.JointControlStreamRequest>}
   * commandIterator The commands to stream.
   * @param {Object} [args] Options to provide for gRPC request.
   * @returns {Promise<robotCommandPb.JointControlStreamResponse>}
   */
  sendJointControlCommands(commandIterator, args) {
    // No deadline by default, like Python (the stream was cut after the 30 s of the default RPC timeout).
    return this.call(this._stub.jointControlStream, commandIterator, null, null, false, { timeout: Infinity, ...args });
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
        robotCommandPb.RobotCommandResponse.Status,
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
        robotCommandPb.ClearBehaviorFaultResponse.Status,
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
  /**
   * *******************
   * Full body commands *
   ********************
   */

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
   * @param {geometryPb.Wrench} initWrenchDirectionInFrameName
   * @param {number} forceLimit
   * @param {number} torqueLimit
   * @param {string} frameName
   * @param {?number} [tangentialSpeed=null]
   * @param {?number} [rotationalSpeed=null]
   * @param {?number} [targetLinearPosition=null]
   * @param {?number} [targetAngle=null]
   * @param {basicCommandPb.ConstrainedManipulationCommand.Request.ControlMode} [controlMode=CONTROL_MODE_VELOCITY]
   * @param {?wrappersPb.BoolValue|boolean} [resetEstimator=BoolValue(true)]
   * @returns {robotCommandPb.RobotCommand}
   * @throws {Error} No speed, both targets, or no target in position control (like Python).
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
    targetLinearPosition = null,
    targetAngle = null,
    controlMode = basicCommandPb.ConstrainedManipulationCommand.Request.ControlMode.CONTROL_MODE_VELOCITY,
    resetEstimator = new wrappersPb.BoolValue().setValue(true),
  ) {
    if (tangentialSpeed === null && rotationalSpeed === null) {
      throw new Error('Need either translational or rotational speed');
    }
    if (targetAngle && targetLinearPosition) {
      throw new Error('Both target_angle and target_linear_position were specified.');
    }
    const inPositionControl =
      controlMode === basicCommandPb.ConstrainedManipulationCommand.Request.ControlMode.CONTROL_MODE_POSITION;
    if (inPositionControl && !(targetAngle || targetLinearPosition)) {
      throw new Error('We are in position control mode, but neither target angle nor position were specified.');
    }

    if (typeof resetEstimator === 'boolean') resetEstimator = new wrappersPb.BoolValue().setValue(resetEstimator);
    // The limits are DoubleValue messages to create (getForceLimit() was undefined: the builder always threw).
    const request = new basicCommandPb.ConstrainedManipulationCommand.Request()
      .setTaskType(taskType)
      .setInitWrenchDirectionInFrameName(initWrenchDirectionInFrameName)
      .setFrameName(frameName)
      .setControlMode(controlMode)
      .setResetEstimator(resetEstimator)
      .setForceLimit(new wrappersPb.DoubleValue().setValue(forceLimit))
      .setTorqueLimit(new wrappersPb.DoubleValue().setValue(torqueLimit));
    // Each oneof keeps its last field set, in the order of the constructor of the Python message.
    if (tangentialSpeed !== null) request.setTangentialSpeed(tangentialSpeed);
    if (rotationalSpeed !== null) request.setRotationalSpeed(rotationalSpeed);
    if (targetAngle !== null) request.setTargetAngle(targetAngle);
    if (targetLinearPosition !== null) request.setTargetLinearPosition(targetLinearPosition);

    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setConstrainedManipulationRequest(request);
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  /**
   * Command to activate the joint control of the robot (the joint requests are then streamed with
   * RobotCommandStreamingClient.sendJointControlCommands()).
   * @returns {robotCommandPb.RobotCommand}
   * @static
   */
  static jointCommand() {
    // A full body command with an empty joint request, like Python (setFullBodyCommand() sent an empty command).
    const fullBodyCommand = new fullBodyCommandPb.FullBodyCommand.Request().setJointRequest(
      new basicCommandPb.JointCommand.Request(),
    );
    return new robotCommandPb.RobotCommand().setFullBodyCommand(fullBodyCommand);
  }

  /**
   * ***********************
   * Synchronized commands *
   ***********************
   */

  /**
   * @typedef {Object} TrajectoryOptions
   * @property {?spotCommandPb.MobilityParams} [params=null] Spot specific parameters for mobility commands. If not
   * set, this will be constructed using other args.
   * @property {number} [bodyHeight=0.0] Height, meters, relative to a nominal stand height.
   * @property {spotCommandPb.LocomotionHint} [locomotionHint=HINT_AUTO] Locomotion hint to use for the trajectory
   * command.
   * @property {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand (not containing a
   * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   */

  /**
   * @typedef {Object} VelocityTrajectoryOptions
   * @property {?spotCommandPb.MobilityParams} [params=null] Spot specific parameters for mobility commands. If not
   * set, this will be constructed using other args.
   * @property {number} [bodyHeight=0.0] Height, meters, relative to a nominal stand height.
   * @property {spotCommandPb.LocomotionHint} [locomotionHint=HINT_AUTO] Locomotion hint to use for the trajectory
   * command.
   * @property {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand (not containing a
   * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   * @property {string} [frameName='body'] Name of the frame of the velocity.
   */

  /**
   * @typedef {Object} StandOptions
   * @property {?spotCommandPb.MobilityParams} [params=null] Spot specific parameters for mobility commands. If not
   * set, this will be constructed using other args.
   * @property {number} [bodyHeight=0.0] Height, meters, relative to a nominal stand height.
   * @property {geometry.EulerZXY} [footprintRBody] The orientation of the body in the footprint frame (no rotation by
   * default).
   * @property {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand (not containing a
   * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
   * to the returned RobotCommand.
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
  static synchroSe2TrajectoryPointCommand(goalX, goalY, goalHeading, frameName, options) {
    const {
      params = null,
      bodyHeight = 0,
      locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
      buildOnCommand = null,
    } = _checkOptions(options, _TRAJECTORY_OPTIONS, 'synchroSe2TrajectoryPointCommand');
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
  static synchroSe2TrajectoryCommand(goalSe2, frameName, options) {
    let { params = null } = _checkOptions(options, _TRAJECTORY_OPTIONS, 'synchroSe2TrajectoryCommand');
    const {
      bodyHeight = 0.0,
      locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
      buildOnCommand = null,
    } = options ?? {};
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
   * @param {*} [params=null] Spot specific parameters for mobility commands. If not set,
   * this will be constructed using other args.
   * @param {number} [bodyHeight=0.0] Height, meters, relative to a nominal stand height.
   * @param {*} [locomotionHint=HINT_AUTO] Locomotion hint to use for the trajectory command.
   * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand (not containing a
   * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added to the
   * returned RobotCommand.
   * @returns {robotCommandPb.RobotCommand} The go-to point is converted to a non-moving world frame (odom frame).
   */
  static synchroTrajectoryCommandInBodyFrame(
    goalXRtBody,
    goalYRtBody,
    goalHeadingRtBody,
    frameTreeSnapshot,
    params = null,
    bodyHeight = 0.0,
    locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
    buildOnCommand = null,
  ) {
    const gotoRtBody = new SE2Pose(goalXRtBody, goalYRtBody, goalHeadingRtBody);
    const odomTformBody = getSe2ATformB(frameTreeSnapshot, ODOM_FRAME_NAME, BODY_FRAME_NAME);
    const odomTformGoto = odomTformBody.mult(gotoRtBody);
    // The goal as a proto, and the options as an object: the builder always threw (null options destructured, and
    // a math_helpers pose in the trajectory point).
    return RobotCommandBuilder.synchroSe2TrajectoryCommand(odomTformGoto.toProto(), ODOM_FRAME_NAME, {
      params,
      bodyHeight,
      locomotionHint,
      buildOnCommand,
    });
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
  static synchroVelocityCommand(vX, vY, vRot, options) {
    let { params = null } = _checkOptions(options, [..._TRAJECTORY_OPTIONS, 'frameName'], 'synchroVelocityCommand');
    const {
      bodyHeight = 0.0,
      locomotionHint = spotCommandPb.LocomotionHint.HINT_AUTO,
      frameName = BODY_FRAME_NAME,
      buildOnCommand = null,
    } = options ?? {};
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
   * @param {StandOptions} [options] The options of the stand
   * @returns {robotCommandPb.RobotCommand}
   */
  static synchroStandCommand(options) {
    let { params = null } = _checkOptions(
      options,
      ['params', 'bodyHeight', 'footprintRBody', 'buildOnCommand'],
      'synchroStandCommand',
    );
    const { bodyHeight = 0.0, footprintRBody = new geometry.EulerZXY(), buildOnCommand = null } = options ?? {};
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
   * @param {Object} [options]
   * @param {*} [options.params] Spot specific parameters for mobility commands.
   * @param {*} [options.buildOnCommand] Option to input a RobotCommand (not containing a fullBodyCommand). An
   * armCommand and gripperCommand from this incoming RobotCommand will be added
   * to the returned RobotCommand.
   * @returns {robotCommandPb.RobotCommand}
   */
  static synchroSitCommand(options) {
    let { params = null } = _checkOptions(options, ['params', 'buildOnCommand'], 'synchroSitCommand');
    const { buildOnCommand = null } = options ?? {};
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

  /**
   * Builds a Vec3Trajectory to tell the robot arm to gaze at a point in 3D space.
   */
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

      // The tool trajectory is an SE3Trajectory (not a Vec3Trajectory, like the target).
      const desiredPoint = new trajectoryPb.SE3TrajectoryPoint().setPose(frame2TformDesiredHand);
      gazeCmd.setToolTrajectoryInFrame2(new trajectoryPb.SE3Trajectory().setPointsList([desiredPoint]));
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

  /**
   * Builds an SE3Trajectory Point to tell robot arm to move to a pose in space relative to the frame specified.
   * Wraps it in SynchronizedCommand.
   * @param {geometryPb.SE3Pose} handPose The desired pose of the hand.
   * @param {string} frameName Name of the frame relative to which handPose is expressed.
   * @param {number} [seconds=5] Requested duration of the arm move, in seconds (the default was 5000 s).
   * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null] Optional RobotCommand (not containing a
   * fullBodyCommand): its mobilityCommand and gripperCommand are added to the returned RobotCommand.
   * @returns {robotCommandPb.RobotCommand}
   */
  static armPoseCommandFromPose(handPose, frameName, seconds = 5, buildOnCommand = null) {
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

  /**
   * Builds an SE3Trajectory Point to tell robot arm to move to a pose in space relative to the frame specified.
   * Wraps it in SynchronizedCommand.
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} qw
   * @param {number} qx
   * @param {number} qy
   * @param {number} qz
   * @param {string} frameName Name of the frame relative to which the pose is expressed.
   * @param {{seconds?: number, buildOnCommand?: ?robotCommandPb.RobotCommand}} [options] The duration of the move
   * in seconds (5 by default), and the command to build on (see armPoseCommandFromPose()).
   * @returns {robotCommandPb.RobotCommand}
   * @throws {TypeError} The options are not an object (a duration passed positionally was ignored).
   */
  static armPoseCommand(x, y, z, qw, qx, qy, qz, frameName, options) {
    const { seconds = 5, buildOnCommand = null } = _checkOptions(
      options,
      ['seconds', 'buildOnCommand'],
      'armPoseCommand',
    );
    const position = new geometryPb.Vec3().setX(x).setY(y).setZ(z);
    const rotation = new geometryPb.Quaternion().setX(qx).setY(qy).setZ(qz).setW(qw);
    const handPose = new geometryPb.SE3Pose().setPosition(position).setRotation(rotation);
    return RobotCommandBuilder.armPoseCommandFromPose(handPose, frameName, seconds, buildOnCommand);
  }

  /**
   * Builds a command to tell robot arm to exhibit a wrench. Wraps it in a SynchronizedCommand.
   */
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

  /**
   * A claw gripper command to one position, with the optional limits of Python.
   * @param {number} gripperQ The position of the gripper.
   * @param {?robotCommandPb.RobotCommand} buildOnCommand
   * @param {?number} maxAcc Maximum allowable gripper acceleration.
   * @param {?number} maxVel Maximum allowable gripper velocity.
   * @param {boolean} disableForceOnContact Whether to switch the gripper to force control on contact detection.
   * @param {?number} maxTorque Maximum torque applied if contact detected closing the gripper.
   * @returns {robotCommandPb.RobotCommand}
   * @private
   */
  static _clawGripperCommand(gripperQ, buildOnCommand, maxAcc, maxVel, disableForceOnContact, maxTorque) {
    const point = new trajectoryPb.ScalarTrajectoryPoint().setPoint(gripperQ);
    const traj = new trajectoryPb.ScalarTrajectory().setPointsList([point]);
    const clawGripperCommand = new gripperCommandPb.ClawGripperCommand.Request().setTrajectory(traj);
    if (maxAcc !== null) {
      clawGripperCommand.setMaximumOpenCloseAcceleration(new wrappersPb.DoubleValue().setValue(maxAcc));
    }
    if (maxVel !== null) clawGripperCommand.setMaximumOpenCloseVelocity(new wrappersPb.DoubleValue().setValue(maxVel));
    if (maxTorque !== null) clawGripperCommand.setMaximumTorque(new wrappersPb.DoubleValue().setValue(maxTorque));
    clawGripperCommand.setDisableForceOnContact(disableForceOnContact);
    const gripperCommand = new gripperCommandPb.GripperCommand.Request().setClawGripperCommand(clawGripperCommand);
    const synchronizedCommand = new synchronizedCommandPb.SynchronizedCommand.Request().setGripperCommand(
      gripperCommand,
    );
    const command = new robotCommandPb.RobotCommand().setSynchronizedCommand(synchronizedCommand);
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, command);
    return command;
  }

  /**
   * Builds a command to open the gripper. Wraps it in SynchronizedCommand.
   * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null]
   * @param {?number} [maxAcc=null] Maximum allowable gripper acceleration (a safe low default if unset).
   * @param {?number} [maxVel=null] Maximum allowable gripper velocity (a safe low default if unset).
   * @returns {robotCommandPb.RobotCommand}
   */
  static clawGripperOpenCommand(buildOnCommand = null, maxAcc = null, maxVel = null) {
    return RobotCommandBuilder._clawGripperCommand(
      _CLAW_GRIPPER_OPEN_ANGLE,
      buildOnCommand,
      maxAcc,
      maxVel,
      false,
      null,
    );
  }

  /**
   * Builds a command to close the gripper. Wraps it in SynchronizedCommand.
   * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null]
   * @param {?number} [maxAcc=null] Maximum allowable gripper acceleration (a safe low default if unset).
   * @param {?number} [maxVel=null] Maximum allowable gripper velocity (a safe low default if unset).
   * @param {boolean} [disableForceOnContact=false] Whether to switch the gripper to force control on contact.
   * @param {?number} [maxTorque=null] Maximum torque applied if contact detected closing the gripper (5.5 Nm if
   * unset).
   * @returns {robotCommandPb.RobotCommand}
   */
  static clawGripperCloseCommand(
    buildOnCommand = null,
    maxAcc = null,
    maxVel = null,
    disableForceOnContact = false,
    maxTorque = null,
  ) {
    return RobotCommandBuilder._clawGripperCommand(
      _CLAW_GRIPPER_CLOSED_ANGLE,
      buildOnCommand,
      maxAcc,
      maxVel,
      disableForceOnContact,
      maxTorque,
    );
  }

  /**
   * Builds a command to set the gripper using a fractional input. Wraps it in SynchronizedCommand.
   * @param {number} openFraction Percentage [0, 1] to open the gripper. 0 fully closed, 1 fully open.
   * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null]
   * @param {?number} [maxAcc=null] Maximum allowable gripper acceleration (a safe low default if unset).
   * @param {?number} [maxVel=null] Maximum allowable gripper velocity (a safe low default if unset).
   * @param {boolean} [disableForceOnContact=false] Whether to switch the gripper to force control on contact.
   * @param {?number} [maxTorque=null] Maximum torque applied if contact detected closing the gripper (5.5 Nm if
   * unset).
   * @returns {robotCommandPb.RobotCommand}
   */
  static clawGripperOpenFractionCommand(
    openFraction,
    buildOnCommand = null,
    maxAcc = null,
    maxVel = null,
    disableForceOnContact = false,
    maxTorque = null,
  ) {
    let gripperQ = 0;

    if (openFraction <= 0) {
      gripperQ = _CLAW_GRIPPER_CLOSED_ANGLE;
    } else if (openFraction >= 1) {
      gripperQ = _CLAW_GRIPPER_OPEN_ANGLE;
    } else {
      gripperQ = (_CLAW_GRIPPER_OPEN_ANGLE - _CLAW_GRIPPER_CLOSED_ANGLE) * openFraction + _CLAW_GRIPPER_CLOSED_ANGLE;
    }
    return RobotCommandBuilder._clawGripperCommand(
      gripperQ,
      buildOnCommand,
      maxAcc,
      maxVel,
      disableForceOnContact,
      maxTorque,
    );
  }

  /**
   * Builds a command to set the gripper open angle. Wraps it in SynchronizedCommand.
   * @param {number} gripperQ [-1.5708, 0] where -1.5708 is fully open and 0 is fully closed.
   * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null]
   * @param {?number} [maxAcc=null] Maximum allowable gripper acceleration (a safe low default if unset).
   * @param {?number} [maxVel=null] Maximum allowable gripper velocity (a safe low default if unset).
   * @param {boolean} [disableForceOnContact=false] Whether to switch the gripper to force control on contact.
   * @param {?number} [maxTorque=null] Maximum torque applied if contact detected closing the gripper (5.5 Nm if
   * unset).
   * @returns {robotCommandPb.RobotCommand}
   */
  static clawGripperOpenAngleCommand(
    gripperQ,
    buildOnCommand = null,
    maxAcc = null,
    maxVel = null,
    disableForceOnContact = false,
    maxTorque = null,
  ) {
    return RobotCommandBuilder._clawGripperCommand(
      gripperQ,
      buildOnCommand,
      maxAcc,
      maxVel,
      disableForceOnContact,
      maxTorque,
    );
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
   * @param {armCommandPb.TrackingMode} [trackingMode=TRACKING_MODE_DEFAULT] Optional mode for joint trajectory
   * tracking, like Python 5.2.0 (TRACKING_MODE_SLOW_PRECISE for slow trajectories that require a very high precision).
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
    trackingMode = armCommandPb.TrackingMode.TRACKING_MODE_DEFAULT,
  ) {
    // Like Python's asserts: refuse an invalid trajectory instead of logging and building it anyway.
    if (!jointPositions) throw new ValueError('Must pass in a list of joint positions');
    if (!times) throw new ValueError('Must pass in a list of times');
    if (jointPositions.length !== times.length) {
      throw new ValueError('Number of joint positions must match number of times');
    }
    if (jointVelocities !== null && jointVelocities.length !== times.length) {
      throw new ValueError('Number of joint velocities must match number of times');
    }

    const robotCmd = new robotCommandPb.RobotCommand();

    const armJointTraj = new armCommandPb.ArmJointTrajectory();
    const jointMoveCommand = new armCommandPb.ArmJointMoveCommand.Request()
      .setTrajectory(armJointTraj)
      .setTrackingMode(trackingMode);
    const armCommand = new armCommandPb.ArmCommand.Request().setArmJointMoveCommand(jointMoveCommand);
    const syncArm = new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(armCommand);

    robotCmd.setSynchronizedCommand(syncArm);

    for (const i in [...Array(times.length).keys()]) {
      const trajPoint = new armCommandPb.ArmJointTrajectoryPoint();

      const joints = jointPositions[i];
      if (joints.length !== 6) throw new ValueError('Need 6 joint positions per knot point for this helper');
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
        if (vels.length !== 6) throw new ValueError('Need 6 joint velocities per knot point for this helper');
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
      armJointTraj.setMaximumAcceleration(new wrappersPb.DoubleValue().setValue(maxAcc));
    }
    if (maxVel !== null) {
      armJointTraj.setMaximumVelocity(new wrappersPb.DoubleValue().setValue(maxVel));
    }

    if (buildOnCommand) {
      return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCmd);
    }

    return robotCmd;
  }

  /**
   * Given a set of SE3Poses, times, and optional velocities, create a synchro command containing an
   * armCartesianCommand.
   * @param {geometryPb.SE3Pose[]} se3Poses A list of length N with SE3 transforms at each knot point in our
   * trajectory.
   * @param {number[]} times A list of length N with the corresponding time_since_reference (seconds) for each of
   * our knots.
   * @param {string} rootFrameName The name of the root frame. It must be a valid frame name in the frame_tree.
   * @param {?geometryPb.SE3Pose} [wristTformTool=null] The optional tool pose to use during the move. If unset,
   * defaults to a pose slightly in front of the gripper's palm plate aligned with the wrist's orientation.
   * @param {?geometryPb.SE3Pose} [rootTformTask=null] The SE3 transform between the root and the task frame. If
   * unset, it will treat the root frame as the task frame.
   * @param {?geometryPb.SE3Velocity[]} [se3Velocities=null] An optional list of length N with SE3 velocities at
   * each knot point in our trajectory.
   * @param {?Timestamp} [refTime=null] Optional reference time for the trajectory. If unset, we'll use the current
   * robot-synchronized time.
   * @param {?number} [maxAcc=null] Optional maximum allowable linear acceleration (m/s^2).
   * @param {?number} [maxLinearVel=null] Optional maximum allowable linear velocity (m/s).
   * @param {?number} [maxAngularVel=null] Optional maximum allowable angular velocity (rad/s).
   * @param {?robotCommandPb.RobotCommand} [buildOnCommand=null] Option to input a RobotCommand for synchronous
   * commands.
   * @returns {robotCommandPb.RobotCommand}
   * @throws {ValueError} An invalid trajectory (the asserts of Python).
   */
  static armCartesianMoveHelper(
    se3Poses,
    times,
    rootFrameName,
    wristTformTool = null,
    rootTformTask = null,
    se3Velocities = null,
    refTime = null,
    maxAcc = null,
    maxLinearVel = null,
    maxAngularVel = null,
    buildOnCommand = null,
  ) {
    if (!se3Poses) throw new ValueError('Must pass in a list of SE3Poses');
    if (!times) throw new ValueError('Must pass in a list of times');
    if (se3Poses.length !== times.length) throw new ValueError('Number of poses must match number of times');
    if (se3Velocities !== null && se3Velocities.length !== times.length) {
      throw new ValueError('Number of SE3Velocities must match number of times');
    }
    const checkPose = pose => {
      if (!(pose instanceof geometryPb.SE3Pose)) throw new ValueError('All poses must be of type geometry_pb2.SE3Pose');
      return pose.clone();
    };

    const armCartesianTraj = new trajectoryPb.SE3Trajectory()
      .setPosInterpolation(trajectoryPb.PositionalInterpolation.POS_INTERP_CUBIC)
      .setAngInterpolation(trajectoryPb.AngularInterpolation.ANG_INTERP_CUBIC_EULER);
    times.forEach((pointTime, i) => {
      const trajPoint = new trajectoryPb.SE3TrajectoryPoint().setPose(checkPose(se3Poses[i]));
      if (se3Velocities !== null) {
        if (!(se3Velocities[i] instanceof geometryPb.SE3Velocity)) {
          throw new ValueError('All Velocities must be of type geometry_pb2.SE3Velocity');
        }
        trajPoint.setVelocity(se3Velocities[i].clone());
      }
      trajPoint.setTimeSinceReference(secondsToDuration(pointTime));
      armCartesianTraj.addPoints(trajPoint);
    });
    if (refTime !== null) armCartesianTraj.setReferenceTime(refTime.clone());

    const armCartesianCommand = new armCommandPb.ArmCartesianCommand.Request().setPoseTrajectoryInTask(
      armCartesianTraj,
    );
    if (maxAcc !== null) armCartesianCommand.setMaximumAcceleration(new wrappersPb.DoubleValue().setValue(maxAcc));
    if (maxLinearVel !== null) {
      armCartesianCommand.setMaxLinearVelocity(new wrappersPb.DoubleValue().setValue(maxLinearVel));
    }
    if (maxAngularVel !== null) {
      armCartesianCommand.setMaxAngularVelocity(new wrappersPb.DoubleValue().setValue(maxAngularVel));
    }
    if (wristTformTool !== null) armCartesianCommand.setWristTformTool(checkPose(wristTformTool));
    if (rootTformTask !== null) armCartesianCommand.setRootTformTask(checkPose(rootTformTask));
    // If the root frame name is invalid the command will be rejected
    armCartesianCommand.setRootFrameName(rootFrameName);

    const robotCmd = new robotCommandPb.RobotCommand().setSynchronizedCommand(
      new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(
        new armCommandPb.ArmCommand.Request().setArmCartesianCommand(armCartesianCommand),
      ),
    );
    if (buildOnCommand) return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCmd);
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
    // Like Python's asserts: refuse an invalid trajectory (console.assert only logged it, and the velocities were
    // not checked).
    if (!gripperPositions) throw new ValueError('Must pass in a list of gripper positions');
    if (!times) throw new ValueError('Must pass in a list of times');
    if (gripperPositions.length !== times.length) {
      throw new ValueError('Number of gripper positions must match number of times');
    }
    if (gripperVelocities !== null && gripperVelocities.length !== times.length) {
      throw new ValueError('Number of gripper velocities must match number of times');
    }

    // Create a claw gripper command, and set the trajectory (the builder always threw: the claw gripper command
    // and its trajectory were never created).
    const gripperTraj = new trajectoryPb.ScalarTrajectory();
    const gripperCmd = new gripperCommandPb.ClawGripperCommand.Request().setTrajectory(gripperTraj);
    const robotCmd = new robotCommandPb.RobotCommand().setSynchronizedCommand(
      new synchronizedCommandPb.SynchronizedCommand.Request().setGripperCommand(
        new gripperCommandPb.GripperCommand.Request().setClawGripperCommand(gripperCmd),
      ),
    );

    for (let i = 0; i < times.length; i++) {
      // Add a new trajectory point to our trajectory
      const trajPoint = new trajectoryPb.ScalarTrajectoryPoint().setPoint(gripperPositions[i]);
      if (gripperVelocities !== null) {
        trajPoint.setVelocity(new wrappersPb.DoubleValue().setValue(gripperVelocities[i]));
      }

      // Set our timeSinceReference for this trajectory point
      trajPoint.setTimeSinceReference(secondsToDuration(times[i]));
      gripperTraj.addPoints(trajPoint);
    }

    // Set our other optional arguments
    if (refTime !== null) {
      // Set a reference time if desired. If not, we'll automatically set the reference time
      // to be the current robot-synchronized time (the trajectory has it, like Python).
      gripperTraj.setReferenceTime(refTime);
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
    // The joint move is in an ArmCommand.Request (it was set as the arm command itself), and its trajectory has one
    // empty point (addPoints() returns the point: the point was set as the trajectory).
    const robotCmd = new robotCommandPb.RobotCommand().setSynchronizedCommand(
      new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(
        new armCommandPb.ArmCommand.Request().setArmJointMoveCommand(
          new armCommandPb.ArmJointMoveCommand.Request().setTrajectory(
            new armCommandPb.ArmJointTrajectory().setPointsList([new armCommandPb.ArmJointTrajectoryPoint()]),
          ),
        ),
      ),
    );

    if (buildOnCommand) {
      return RobotCommandBuilder.buildSynchroCommand(buildOnCommand, robotCmd);
    }
    return robotCmd;
  }

  /**
   * *********************
   * Spot mobility params *
   **********************
   */

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

  /**
   * Helper to create a BodyControlParams.BodyPose from a single desired bodyPose relative to frameName.
   * @param {string} frameName Name of the frame relative to which bodyPose is expressed.
   * @param {geometryPb.SE3Pose} bodyPose The desired pose of the body.
   * @returns {spotCommandPb.BodyControlParams.BodyPose} The desired body pose for a StandCommand.
   */
  static bodyPose(frameName, bodyPose) {
    const point = new trajectoryPb.SE3TrajectoryPoint().setPose(bodyPose);
    return new spotCommandPb.BodyControlParams.BodyPose()
      .setRootFrameName(frameName)
      .setBaseOffsetRtRoot(new trajectoryPb.SE3Trajectory().setPointsList([point]));
  }

  /**
   * Helper to create Mobility params.
   *
   * This function allows the user to enable an external force estimator, or set a vector of forces (in the body frame)
   * which override the estimator with constant external forces.
   */
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
      // The enum is under .ExternalForceIndicator (EXTERNAL_FORCE_USE_ESTIMATE returned null).
      externalForceIndicator ===
        spotCommandPb.BodyExternalForceParams.ExternalForceIndicator.EXTERNAL_FORCE_USE_ESTIMATE
    ) {
      return new spotCommandPb.BodyExternalForceParams().setExternalForceIndicator(externalForceIndicator);
    } else {
      return null;
    }
  }

  /**
   * *****************
   * Helper functions *
   ******************
   */

  static _toAny(params, typeName = MOBILITY_PARAMS_TYPE_NAME) {
    // jspb's Any.pack() fills the Any and returns nothing.
    const any = new Any();
    any.pack(params.serializeBinary(), typeName);
    return any;
  }

  /**
   * Combines multiple commands into one command. There's no intelligence here on duplicate commands.
   */
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
        // Copies, like the constructor of the Python message: the new command shared its requests with the
        // commands passed (editing one changed the others).
        if (command.getSynchronizedCommand().hasMobilityCommand()) {
          mobilityRequest = command.getSynchronizedCommand().getMobilityCommand().clone();
        }
        if (command.getSynchronizedCommand().hasArmCommand()) {
          armRequest = command.getSynchronizedCommand().getArmCommand().clone();
        }
        if (command.getSynchronizedCommand().hasGripperCommand()) {
          gripperRequest = command.getSynchronizedCommand().getGripperCommand().clone();
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
 * Throws if the full body command, or the mobility, arm or gripper command of a synchronized command, is no longer
 * processing, like blocking_command() in Python.
 * @param {number} commandId
 * @param {robotCommandPb.RobotCommandFeedbackResponse} response
 * @throws {CommandFailedErrorWithFeedback}
 * @private
 */
function _checkCommandProcessing(commandId, response) {
  const { STATUS_PROCESSING } = basicCommandPb.RobotCommandFeedbackStatus.Status;
  const feedback = response.getFeedback() ?? new robotCommandPb.RobotCommandFeedback();
  let subFeedbacks;
  if (feedback.hasFullBodyFeedback()) {
    subFeedbacks = [feedback.getFullBodyFeedback()];
  } else if (feedback.hasSynchronizedFeedback()) {
    const synchroFb = feedback.getSynchronizedFeedback();
    subFeedbacks = [
      synchroFb.getMobilityCommandFeedback(),
      synchroFb.getArmCommandFeedback(),
      synchroFb.getGripperCommandFeedback(),
    ].filter(Boolean);
  } else {
    throw new CommandFailedErrorWithFeedback(
      `Command (ID ${commandId}) has neither full body nor synchronized feedback`,
      response,
    );
  }
  for (const subFeedback of subFeedbacks) {
    if (subFeedback.getStatus() !== STATUS_PROCESSING) {
      throw new CommandFailedErrorWithFeedback(
        `Command (ID ${commandId}) no longer processing (${_feedbackStatusName(subFeedback.getStatus())})`,
        response,
      );
    }
  }
}

/**
 * Helper function which uses the RobotCommandService to execute the given command, like blocking_command() in Python
 * (it was missing: each helper had its own loop, which read an absent mobility feedback as a failure and ignored the
 * arm and gripper feedbacks).
 *
 * Blocks until checkStatusFn returns true, or throws if the command times out or fails. This helper checks the main
 * full_body/synchronized command status (RobotCommandFeedbackStatus), but the caller should check the status of the
 * specific commands (stand, stow, selfright, etc.) in the callback.
 * @param {RobotCommandClient} commandClient RobotCommand client.
 * @param {robotCommandPb.RobotCommand} command The robot command to issue to the robot.
 * @param {function(robotCommandPb.RobotCommandFeedbackResponse): boolean} checkStatusFn Returns true when the correct
 * statuses are achieved for the specific requested command, and throws CommandFailedErrorWithFeedback if an error
 * state occurs.
 * @param {?number} [endTimeSecs=null] The local end time of the command, in seconds (converted to robot time).
 * @param {number} [timeoutMsec=10_000] Timeout for the command, in milliseconds.
 * @param {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedErrorWithFeedback} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blockingCommand(
  commandClient,
  command,
  checkStatusFn,
  endTimeSecs = null,
  timeoutMsec = 10_000,
  updateFrequency = 1.0,
) {
  const startTime = nowMsec();
  const endTime = startTime + timeoutMsec;
  const updateTimeMs = 1_000 / updateFrequency;

  const commandId = await commandClient.robotCommand(command, endTimeSecs, null, null, { timeout: timeoutMsec });

  let now = nowMsec();

  while (now < endTime) {
    const rpcTimeout = Math.max(endTime - now, 1_000);
    const startCallTime = nowMsec();
    // A timed out RPC is excused: the while check bails us out if we're out of time.
    const response = await _feedbackExcusingTimeout(commandClient, commandId, rpcTimeout);
    if (response !== null) {
      // Check the high level robot command status, then the low level command specific status.
      _checkCommandProcessing(commandId, response);
      if (checkStatusFn(response)) return;
    }

    const deltaT = nowMsec() - startCallTime;
    await sleep(Math.max(Math.min(deltaT, updateTimeMs), 0.0));
    now = nowMsec();
  }

  throw new CommandTimedOutError(
    `Took longer than ${formatFixed((now - startTime) / 1_000, 1)} seconds to execute the command.`,
  );
}

/**
 * Helper function which uses the RobotCommandService to stand.
 * Blocks until robot is standing, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=10_000] Timeout for the command in milliseconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @param  {spotCommandPb.MobilityParams} [params=null] Spot specific parameters for mobility commands
 * to optionally set say body_height
 * @returns {Promise<void>}
 * @throws {CommandFailedErrorWithFeedback} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blockingStand(commandClient, timeoutMsec = 10_000, updateFrequency = 1.0, params = null) {
  // Unset sub-messages read as the default (STATUS_UNKNOWN), like Python.
  const checkStandStatus = response =>
    (response.getFeedback()?.getSynchronizedFeedback()?.getMobilityCommandFeedback()?.getStandFeedback()?.getStatus() ??
      0) === basicCommandPb.StandCommand.Feedback.Status.STATUS_IS_STANDING;

  const standCommand = RobotCommandBuilder.synchroStandCommand({ params });
  await blockingCommand(commandClient, standCommand, checkStandStatus, null, timeoutMsec, updateFrequency);
}

/**
 * Get the feedback of a command, or null if the RPC timed out: like Python, the timeout is excused and the
 * caller's deadline decides. Any other error (lease, status...) is raised.
 * @param {RobotCommandClient} commandClient RobotCommand client.
 * @param {number} commandId ID of the command.
 * @param {number} rpcTimeout RPC timeout in milliseconds.
 * @returns {Promise<?robotCommandPb.RobotCommandFeedbackResponse>}
 * @private
 */
async function _feedbackExcusingTimeout(commandClient, commandId, rpcTimeout) {
  try {
    return await commandClient.robotCommandFeedback(commandId, { timeout: rpcTimeout });
  } catch (e) {
    if (e instanceof TimedOutError) return null;
    throw e;
  }
}

/**
 * Name of a value of an enum (jspb enums map the names to the values: Status[value] is undefined).
 * @param {Object<string, number>} statuses The enum.
 * @param {number} status The value.
 * @returns {string}
 * @private
 */
function _enumName(statuses, status) {
  return Object.keys(statuses).find(name => statuses[name] === status) ?? String(status);
}

/**
 * Name of a RobotCommandFeedbackStatus value.
 * @param {number} status The status value.
 * @returns {string}
 * @private
 */
function _feedbackStatusName(status) {
  return _enumName(basicCommandPb.RobotCommandFeedbackStatus.Status, status);
}

/**
 * Helper function which uses the RobotCommandService to sit.
 * Blocks until robot is sitting, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=10_000] Timeout for the command in milliseconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedErrorWithFeedback} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blockingSit(commandClient, timeoutMsec = 10_000, updateFrequency = 1.0) {
  const checkSitStatus = response =>
    (response.getFeedback()?.getSynchronizedFeedback()?.getMobilityCommandFeedback()?.getSitFeedback()?.getStatus() ??
      0) === basicCommandPb.SitCommand.Feedback.Status.STATUS_IS_SITTING;

  const sitCommand = RobotCommandBuilder.synchroSitCommand();
  await blockingCommand(commandClient, sitCommand, checkSitStatus, null, timeoutMsec, updateFrequency);
}

/**
 * Helper function which uses the RobotCommandService to self-right.
 * Blocks until self-right has completed, or raises an exception if the command times out or fails.
 * @param  {RobotCommandClient} commandClient  RobotCommand client.
 * @param  {number} [timeoutMsec=30_000] Timeout for the command in milliseconds.
 * @param  {number} [updateFrequency=1.0] Update frequency for the command in Hz.
 * @returns {Promise<void>}
 * @throws {CommandFailedErrorWithFeedback} Command feedback from robot is not STATUS_PROCESSING.
 * @throws {CommandTimedOutError} Command took longer than provided timeout.
 */
async function blockingSelfright(commandClient, timeoutMsec = 30_000, updateFrequency = 1.0) {
  // The enum is under .Status: SelfRightCommand.Feedback.STATUS_COMPLETED is undefined.
  const checkSelfRightStatus = response =>
    (response.getFeedback()?.getFullBodyFeedback()?.getSelfrightFeedback()?.getStatus() ?? 0) ===
    basicCommandPb.SelfRightCommand.Feedback.Status.STATUS_COMPLETED;

  const selfrightCommand = RobotCommandBuilder.selfrightCommand();
  await blockingCommand(commandClient, selfrightCommand, checkSelfRightStatus, null, timeoutMsec, updateFrequency);
}

/**
 * Helper that blocks until the arm achieves a finishing state for the specific arm command.
 * This helper will block and check the feedback for ArmCartesianCommand, GazeCommand,
 * ArmJointMoveCommand, NamedArmPositionsCommand, and ArmImpedanceCommand.
 * @param  {RobotCommandClient} commandClient Robot command client, used to request feedback
 * @param  {number} cmdId Command ID returned by the robot when the arm movement command was sent.
 * @param  {?number} [timeoutMsec=null] Optional number of milliseconds after which we'll return no matter what
 * the robot's state is.
 * @returns {Promise<boolean>} true if successfully got to the end of the trajectory, false if the arm stalled or
 * the move was canceled (the arm failed to reach the goal), or at the timeout.
 */
async function blockUntilArmArrives(commandClient, cmdId, timeoutMsec = null) {
  const endTime = timeoutMsec !== null ? Date.now() + timeoutMsec : null;
  const cartesian = armCommandPb.ArmCartesianCommand.Feedback.Status;
  const gaze = armCommandPb.GazeCommand.Feedback.Status;
  const jointMove = armCommandPb.ArmJointMoveCommand.Feedback.Status;
  const named = armCommandPb.NamedArmPositionsCommand.Feedback.Status;
  const impedance = armCommandPb.ArmImpedanceCommand.Feedback.Status;

  /* eslint-disable no-unmodified-loop-condition */
  while (endTime === null || Date.now() < endTime) {
    const feedbackResp = await commandClient.robotCommandFeedback(cmdId);
    // Unset sub-messages read as the defaults, like Python: no arm feedback yet, the wait goes on (TypeError).
    const armFeedback = feedbackResp.getFeedback()?.getSynchronizedFeedback()?.getArmCommandFeedback();

    if (armFeedback?.hasArmCartesianFeedback()) {
      const status = armFeedback.getArmCartesianFeedback().getStatus();
      if (status === cartesian.STATUS_TRAJECTORY_COMPLETE) return true;
      if (status === cartesian.STATUS_TRAJECTORY_STALLED || status === cartesian.STATUS_TRAJECTORY_CANCELLED) {
        return false;
      }
    } else if (armFeedback?.hasArmGazeFeedback()) {
      const status = armFeedback.getArmGazeFeedback().getStatus();
      if (status === gaze.STATUS_TRAJECTORY_COMPLETE) return true;
      if (status === gaze.STATUS_TOOL_TRAJECTORY_STALLED) return false;
    } else if (armFeedback?.hasArmJointMoveFeedback()) {
      // A stalled joint move waited forever.
      const status = armFeedback.getArmJointMoveFeedback().getStatus();
      if (status === jointMove.STATUS_COMPLETE) return true;
      if (status === jointMove.STATUS_STALLED) return false;
    } else if (armFeedback?.hasNamedArmPositionFeedback()) {
      const status = armFeedback.getNamedArmPositionFeedback().getStatus();
      if (status === named.STATUS_COMPLETE) return true;
      if (status === named.STATUS_STALLED_HOLDING_ITEM) return false;
    } else if (armFeedback?.hasArmImpedanceFeedback()) {
      const status = armFeedback.getArmImpedanceFeedback().getStatus();
      if (status === impedance.STATUS_TRAJECTORY_COMPLETE) return true;
      if (status === impedance.STATUS_TRAJECTORY_STALLED) return false;
    }

    await sleep(100);
  }

  return false;
}

/**
 * Helper that blocks until a trajectory command reaches a desired goal state or a timeout is reached.
 * @param {RobotCommandClient} commandClient the client used to request feedback
 * @param {number} cmdId command ID returned by the robot when the trajectory command was sent
 * @param {Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.Status>} [trajectoryEndStatuses=[STATUS_STOPPED]]
 * the feedback must have a status which is included in this set of statuses to be considered successfully complete.
 * By default, this includes only the "STATUS_STOPPED" end condition (the deprecated STATUS_AT_GOAL).
 * @param {?Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.BodyMovementStatus>} [bodyMovementStatuses=null]
 * the body movement status must be one of these statuses to be considered successfully complete. By
 * default, this is null, which means any body movement status will be accepted.
 * @param {number} [feedbackIntervalSecs=0.1] The time (in seconds) to wait before each feedback request checking
 * if the trajectory is complete. Defaults to checking at 10 Hz (requests every 0.1 seconds).
 * @param {?number} [timeoutSec=null] optional number of seconds after which we'll return no matter what the robot's
 * state is.
 * @param {any} [logger=null] The logger print debug statements with. If null, no debug printouts will be sent.
 * @returns {Promise<boolean>} True if reaches STATUS_STOPPED, false otherwise.
 */
async function blockForTrajectoryCmd(
  commandClient,
  cmdId,
  trajectoryEndStatuses = [basicCommandPb.SE2TrajectoryCommand.Feedback.Status.STATUS_STOPPED],
  bodyMovementStatuses = null,
  feedbackIntervalSecs = 0.1,
  timeoutSec = null,
  logger = null,
) {
  // The durations are in seconds, like their names and Python: they were used as milliseconds (a timeout of 10 s
  // ended after 10 ms, and the documented interval of 0.1 s polled the robot without pause). Sets work too.
  const endTime = timeoutSec !== null ? nowSec() + timeoutSec : null;
  const endStatuses = new Set(trajectoryEndStatuses);
  const bodyStatuses = bodyMovementStatuses !== null ? new Set(bodyMovementStatuses) : null;

  /* eslint-disable no-unmodified-loop-condition */
  while (endTime === null || nowSec() < endTime) {
    const feedbackResp = await commandClient.robotCommandFeedback(cmdId);

    // Unset sub-messages read as the defaults, like Python (a TypeError before the first mobility feedback).
    const se2Feedback = feedbackResp
      .getFeedback()
      ?.getSynchronizedFeedback()
      ?.getMobilityCommandFeedback()
      ?.getSe2TrajectoryFeedback();
    const currentTrajectoryState = se2Feedback?.getStatus() ?? 0;
    const bodyMovementState = se2Feedback?.getBodyMovementStatus() ?? 0;

    if (logger !== null) {
      const statuses = basicCommandPb.SE2TrajectoryCommand.Feedback.Status;
      logger.info(`blockForTrajectoryCmd: ${_enumName(statuses, currentTrajectoryState)}`);
    }

    if (endStatuses.has(currentTrajectoryState)) {
      if (bodyStatuses !== null) {
        if (bodyStatuses.size > 0 && bodyStatuses.has(bodyMovementState)) {
          return true;
        }
      } else {
        return true;
      }
    }

    await sleep(feedbackIntervalSecs * 1_000);
  }

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
  DockedError,
  NotClearedError,
  UnsupportedError,
  CommandFailedError,
  CommandFailedErrorWithFeedback,
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
  blockingCommand,
  blockingStand,
  blockingSit,
  blockingSelfright,
  blockUntilArmArrives,
  blockForTrajectoryCmd,
};
