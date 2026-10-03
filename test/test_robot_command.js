'use strict';

const assert = require('node:assert');
const test = require('node:test');

const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { DoubleValue } = require('google-protobuf/google/protobuf/wrappers_pb');
const { camelCase } = require('lodash');

const armCommandPb = require('../src/bosdyn/api/arm_command_pb');
const basicCommandPb = require('../src/bosdyn/api/basic_command_pb');
const geometryPb = require('../src/bosdyn/api/geometry_pb');
const gripperCommandPb = require('../src/bosdyn/api/gripper_command_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const mobilityCommandPb = require('../src/bosdyn/api/mobility_command_pb');
const robotCommandPb = require('../src/bosdyn/api/robot_command_pb');
const synchronizedCommandPb = require('../src/bosdyn/api/synchronized_command_pb');
const trajectoryPb = require('../src/bosdyn/api/trajectory_pb');

const {
  InternalServerError,
  LeaseUseError,
  ResponseError,
  UnsetStatusError,
} = require('../src/bosdyn-client/exceptions');
const { ODOM_FRAME_NAME, BODY_FRAME_NAME } = require('../src/bosdyn-client/frame_helpers');
const {
  EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME,
  END_TIME_EDIT_TREE,
  RobotCommandBuilder,
  _clearBehaviorFaultError,
  _editProto,
  _robotCommandError,
  _robotCommandFeedbackError,
} = require('../src/bosdyn-client/robot_command');

test('test_robot_command_error', () => {
  // Test unset header error
  const response = new robotCommandPb.RobotCommandResponse();
  assert.ok(_robotCommandError(response) instanceof UnsetStatusError);

  // Test header error
  response.setHeader(
    new headerPb.ResponseHeader().setError(
      new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR),
    ),
  );
  assert.ok(_robotCommandError(response) instanceof InternalServerError);

  // Test lease use error
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_OK);
  response.setLeaseUseResult(
    new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE),
  );
  assert.ok(_robotCommandError(response) instanceof LeaseUseError);

  // Test unset status error
  response.getLeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(_robotCommandError(response) instanceof UnsetStatusError);

  // Test status error
  response.setStatus(robotCommandPb.RobotCommandResponse.Status.STATUS_UNSUPPORTED);
  assert.ok(_robotCommandError(response) instanceof ResponseError);

  // Test OK
  response.setStatus(robotCommandPb.RobotCommandResponse.Status.STATUS_OK);
  assert.ok(_robotCommandError(response) === null);
});

test('test_robot_command_feedback_error', () => {
  // Test unset header error
  const response = new robotCommandPb.RobotCommandFeedbackResponse();
  assert.ok(_robotCommandFeedbackError(response) instanceof UnsetStatusError);

  // Test header error
  response.setHeader(
    new headerPb.ResponseHeader().setError(
      new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR),
    ),
  );
  assert.ok(_robotCommandFeedbackError(response) instanceof InternalServerError);

  // Test unset status error
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_OK);
  assert.ok(_robotCommandFeedbackError(response) instanceof UnsetStatusError);

  // Test OK unset status error via full body command route
  response.setFeedback(
    new robotCommandPb.RobotCommandFeedback().setFullBodyFeedback(
      new robotCommandPb.FullBodyCommand.Feedback().setStatus(
        basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING,
      ),
    ),
  );
  assert.ok(_robotCommandFeedbackError(response) === null);

  // Test OK unset status error via synchro command route
  response
    .getFeedback()
    .setSynchronizedFeedback(
      new synchronizedCommandPb.SynchronizedCommand.Feedback().setMobilityCommandFeedback(
        new mobilityCommandPb.MobilityCommand.Feedback().setStatus(
          basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_UNKNOWN,
        ),
      ),
    );
  assert.ok(_robotCommandFeedbackError(response) instanceof UnsetStatusError);

  // Test OK unset status error via synchro command route
  response.setFeedback(
    new robotCommandPb.RobotCommandFeedback().setFullBodyFeedback(
      new robotCommandPb.FullBodyCommand.Feedback().setStatus(
        basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_UNKNOWN,
      ),
    ),
  );
  assert.ok(_robotCommandFeedbackError(response) instanceof UnsetStatusError);

  response
    .getFeedback()
    .setSynchronizedFeedback(
      new synchronizedCommandPb.SynchronizedCommand.Feedback().setMobilityCommandFeedback(
        new mobilityCommandPb.MobilityCommand.Feedback().setStatus(
          basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING,
        ),
      ),
    );
  assert.ok(_robotCommandFeedbackError(response) === null);

  response
    .getFeedback()
    .setSynchronizedFeedback(
      new synchronizedCommandPb.SynchronizedCommand.Feedback().setMobilityCommandFeedback(
        new mobilityCommandPb.MobilityCommand.Feedback().setStatus(
          basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_COMMAND_OVERRIDDEN,
        ),
      ),
    );
  assert.ok(_robotCommandFeedbackError(response) === null);
});

test('test_behavior_fault_clear_error', () => {
  // Test unset header error
  const response = new robotCommandPb.ClearBehaviorFaultResponse();
  assert.ok(_clearBehaviorFaultError(response) instanceof UnsetStatusError);

  // Test header error
  response.setHeader(
    new headerPb.ResponseHeader().setError(
      new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR),
    ),
  );
  assert.ok(_clearBehaviorFaultError(response) instanceof InternalServerError);

  // Test lease use error
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_OK);
  response.setLeaseUseResult(
    new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE),
  );
  assert.ok(_clearBehaviorFaultError(response) instanceof LeaseUseError);

  // Test unset status error
  response.getLeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(_clearBehaviorFaultError(response) instanceof UnsetStatusError);

  // Test status error
  response.setStatus(robotCommandPb.ClearBehaviorFaultResponse.Status.STATUS_NOT_CLEARED);
  assert.ok(_clearBehaviorFaultError(response) instanceof ResponseError);

  // Test OK
  response.setStatus(robotCommandPb.ClearBehaviorFaultResponse.Status.STATUS_CLEARED);
  assert.ok(_clearBehaviorFaultError(response) === null);
});

function _testHasFullBody(command) {
  assert.ok(command instanceof robotCommandPb.RobotCommand);
  assert.ok(command.hasFullBodyCommand());
  assert.ok(!command.hasSynchronizedCommand());
}

function _testHasSynchronized(command) {
  assert.ok(command instanceof robotCommandPb.RobotCommand);
  assert.ok(command.hasSynchronizedCommand());
  assert.ok(!command.hasFullBodyCommand());
}

function _testHasMobility(command) {
  assert.ok(command instanceof synchronizedCommandPb.SynchronizedCommand.Request);
  assert.ok(command.hasMobilityCommand());
}

function _testHasArm(command) {
  assert.ok(command instanceof synchronizedCommandPb.SynchronizedCommand.Request);
  assert.ok(command.hasArmCommand());
}

function _testHasGripper(command) {
  assert.ok(command instanceof synchronizedCommandPb.SynchronizedCommand.Request);
  assert.ok(command.hasGripperCommand());
}

test('test_stop_command', () => {
  const command = RobotCommandBuilder.stopCommand();
  _testHasFullBody(command);
  assert.ok(command.getFullBodyCommand().hasStopRequest());
});

test('test_freeze_command', () => {
  const command = RobotCommandBuilder.freezeCommand();
  _testHasFullBody(command);
  assert.ok(command.getFullBodyCommand().hasFreezeRequest());
});

test('test_selfright_command', () => {
  const command = RobotCommandBuilder.selfrightCommand();
  _testHasFullBody(command);
  assert.ok(command.getFullBodyCommand().hasSelfrightRequest());
});

test('test_safe_power_off_command', () => {
  const command = RobotCommandBuilder.safePowerOffCommand();
  _testHasFullBody(command);
  assert.ok(command.getFullBodyCommand().hasSafePowerOffRequest());
});

function _checkSe2TrajCommand(command, goalX, goalY, goalHeading, frameName, nPoints) {
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  assert.ok(command.getSynchronizedCommand().getMobilityCommand().hasSe2TrajectoryRequest());
  const request = command.getSynchronizedCommand().getMobilityCommand().getSe2TrajectoryRequest();
  assert.ok(request.getTrajectory().getPointsList().length === nPoints);
  assert.ok(request.getTrajectory().getPointsList()[0].getPose().getPosition().getX() === goalX);
  assert.ok(request.getTrajectory().getPointsList()[0].getPose().getPosition().getY() === goalY);
  assert.ok(request.getTrajectory().getPointsList()[0].getPose().getAngle() === goalHeading);
  assert.ok(request.getSe2FrameName() === frameName);
}

test('test_synchro_se2_trajectory_point_command', () => {
  const goalX = 1;
  const goalY = 2;
  const goalHeading = 3;
  const frame = ODOM_FRAME_NAME;
  let command = RobotCommandBuilder.synchroSe2TrajectoryPointCommand(goalX, goalY, goalHeading, frame);
  _checkSe2TrajCommand(command, goalX, goalY, goalHeading, frame, 1);

  // with a buildOnCommand
  const armCommand = RobotCommandBuilder.armStowCommand();
  command = RobotCommandBuilder.synchroSe2TrajectoryPointCommand(goalX, goalY, goalHeading, frame, {
    buildOnCommand: armCommand,
  });
  _checkSe2TrajCommand(command, goalX, goalY, goalHeading, frame, 1);
  _testHasArm(command.getSynchronizedCommand());
});

test('test_synchro_se2_trajectory_command', () => {
  const goalX = 1;
  const goalY = 2;
  const goalHeading = 3;
  const frame = ODOM_FRAME_NAME;
  const position = new geometryPb.Vec2().setX(goalX).setY(goalY);
  const goalSe2 = new geometryPb.SE2Pose().setPosition(position).setAngle(goalHeading);

  let command = RobotCommandBuilder.synchroSe2TrajectoryCommand(goalSe2, frame);
  _checkSe2TrajCommand(command, goalX, goalY, goalHeading, frame, 1);

  // with a buildOnCommand
  const armCommand = RobotCommandBuilder.armStowCommand();
  command = RobotCommandBuilder.synchroSe2TrajectoryCommand(goalSe2, frame, { buildOnCommand: armCommand });

  _checkSe2TrajCommand(command, goalX, goalY, goalHeading, frame, 1);
  _testHasArm(command.getSynchronizedCommand());
});

test('test_synchro_velocity_command', () => {
  const vX = 1;
  const vY = 2;
  const vRot = 3;

  let command = RobotCommandBuilder.synchroVelocityCommand(vX, vY, vRot);
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  assert.ok(command.getSynchronizedCommand().getMobilityCommand().hasSe2VelocityRequest());

  const velCmd = command.getSynchronizedCommand().getMobilityCommand().getSe2VelocityRequest();

  assert.ok(velCmd.getVelocity().getLinear().getX() === vX);
  assert.ok(velCmd.getVelocity().getLinear().getY() === vY);
  assert.ok(velCmd.getVelocity().getAngular() === vRot);
  assert.ok(velCmd.getSe2FrameName() === BODY_FRAME_NAME);

  // with a buildOnCommand
  const armCommand = RobotCommandBuilder.armStowCommand();
  command = RobotCommandBuilder.synchroVelocityCommand(vX, vY, vRot, { buildOnCommand: armCommand });
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasArm(command.getSynchronizedCommand());
});

test('test_synchro_stand_command', () => {
  let command = RobotCommandBuilder.synchroStandCommand();
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  assert.ok(command.getSynchronizedCommand().getMobilityCommand().hasStandRequest());

  // with a buildOnCommand
  const armCommand = RobotCommandBuilder.armStowCommand();
  command = RobotCommandBuilder.synchroStandCommand({ buildOnCommand: armCommand });
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasArm(command.getSynchronizedCommand());
});

test('test_synchro_sit_command', () => {
  let command = RobotCommandBuilder.synchroSitCommand();
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  assert.ok(command.getSynchronizedCommand().getMobilityCommand().hasSitRequest());

  // with a buildOnCommand
  const armCommand = RobotCommandBuilder.armStowCommand();
  command = RobotCommandBuilder.synchroSitCommand({ buildOnCommand: armCommand });
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasArm(command.getSynchronizedCommand());
});

test('test_arm_stow_command', () => {
  let command = RobotCommandBuilder.armStowCommand();
  _testHasSynchronized(command);
  _testHasArm(command.getSynchronizedCommand());
  assert.ok(
    command.getSynchronizedCommand().getArmCommand().getCommandCase() ===
      armCommandPb.ArmCommand.Request.CommandCase.NAMED_ARM_POSITION_COMMAND,
  );

  // with a buildOnCommand
  const mobilityCommand = RobotCommandBuilder.synchroSitCommand();
  command = RobotCommandBuilder.armStowCommand(mobilityCommand);
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasArm(command.getSynchronizedCommand());
});

test('test_arm_ready_command', () => {
  let command = RobotCommandBuilder.armReadyCommand();
  _testHasSynchronized(command);
  _testHasArm(command.getSynchronizedCommand());
  assert.ok(
    command.getSynchronizedCommand().getArmCommand().getCommandCase() ===
      armCommandPb.ArmCommand.Request.CommandCase.NAMED_ARM_POSITION_COMMAND,
  );

  // with a buildOnCommand
  const mobilityCommand = RobotCommandBuilder.synchroSitCommand();
  command = RobotCommandBuilder.armReadyCommand(mobilityCommand);
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasArm(command.getSynchronizedCommand());
});

test('test_arm_carry_command', () => {
  let command = RobotCommandBuilder.armCarryCommand();
  _testHasSynchronized(command);
  _testHasArm(command.getSynchronizedCommand());
  assert.ok(
    command.getSynchronizedCommand().getArmCommand().getCommandCase() ===
      armCommandPb.ArmCommand.Request.CommandCase.NAMED_ARM_POSITION_COMMAND,
  );

  // with a buildOnCommand
  const mobilityCommand = RobotCommandBuilder.synchroSitCommand();
  command = RobotCommandBuilder.armCarryCommand(mobilityCommand);
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasArm(command.getSynchronizedCommand());
});

test('test_arm_pose_command', () => {
  const x = 0.75;
  const y = 0;
  const z = 0.25;
  const qW = 1;
  const qX = 0;
  const qY = 0;
  const qZ = 0;

  let command = RobotCommandBuilder.armPoseCommand(x, y, z, qW, qX, qY, qZ, BODY_FRAME_NAME);
  _testHasSynchronized(command);
  _testHasArm(command.getSynchronizedCommand());
  assert.ok(command.getSynchronizedCommand().getArmCommand().hasArmCartesianCommand());
  const armCartesianCommand = command.getSynchronizedCommand().getArmCommand().getArmCartesianCommand();
  assert.ok(armCartesianCommand.getRootFrameName() === BODY_FRAME_NAME);
  assert.ok(armCartesianCommand.getPoseTrajectoryInTask().getPointsList()[0].getPose().getPosition().getX() === x);
  assert.ok(armCartesianCommand.getPoseTrajectoryInTask().getPointsList()[0].getPose().getPosition().getY() === y);
  assert.ok(armCartesianCommand.getPoseTrajectoryInTask().getPointsList()[0].getPose().getPosition().getZ() === z);
  assert.ok(armCartesianCommand.getPoseTrajectoryInTask().getPointsList()[0].getPose().getRotation().getX() === qX);
  assert.ok(armCartesianCommand.getPoseTrajectoryInTask().getPointsList()[0].getPose().getRotation().getY() === qY);
  assert.ok(armCartesianCommand.getPoseTrajectoryInTask().getPointsList()[0].getPose().getRotation().getZ() === qZ);
  assert.ok(armCartesianCommand.getPoseTrajectoryInTask().getPointsList()[0].getPose().getRotation().getW() === qW);

  // with a buildOnCommand
  const mobilityCommand = RobotCommandBuilder.synchroSitCommand();
  command = RobotCommandBuilder.armPoseCommand(x, y, z, qW, qX, qY, qZ, BODY_FRAME_NAME, {
    buildOnCommand: mobilityCommand,
  });
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasArm(command.getSynchronizedCommand());
});

test('test_claw_gripper_open_command', () => {
  let command = RobotCommandBuilder.clawGripperOpenCommand();
  _testHasSynchronized(command);
  _testHasGripper(command.getSynchronizedCommand());
  assert.ok(
    command.getSynchronizedCommand().getGripperCommand().getCommandCase() ===
      gripperCommandPb.GripperCommand.Request.CommandCase.CLAW_GRIPPER_COMMAND,
  );

  // with a buildOnCommand
  const mobilityCommand = RobotCommandBuilder.synchroSitCommand();
  command = RobotCommandBuilder.clawGripperOpenCommand(mobilityCommand);
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasGripper(command.getSynchronizedCommand());
});

test('test_claw_gripper_close_command', () => {
  let command = RobotCommandBuilder.clawGripperCloseCommand();
  _testHasSynchronized(command);
  _testHasGripper(command.getSynchronizedCommand());
  assert.ok(
    command.getSynchronizedCommand().getGripperCommand().getCommandCase() ===
      gripperCommandPb.GripperCommand.Request.CommandCase.CLAW_GRIPPER_COMMAND,
  );

  // with a buildOnCommand
  const mobilityCommand = RobotCommandBuilder.synchroSitCommand();
  command = RobotCommandBuilder.clawGripperCloseCommand(mobilityCommand);
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasGripper(command.getSynchronizedCommand());
});

test('test_build_synchro_command', () => {
  // two synchro subcommands of the same type:
  const armCommand1 = RobotCommandBuilder.armReadyCommand();
  const armCommand2 = RobotCommandBuilder.armStowCommand();
  let command = RobotCommandBuilder.buildSynchroCommand(armCommand1, armCommand2);
  _testHasSynchronized(command);
  _testHasArm(command.getSynchronizedCommand());
  assert.ok(!command.getSynchronizedCommand().hasGripperCommand());
  assert.ok(!command.getSynchronizedCommand().hasMobilityCommand());
  let commandPosition = command.getSynchronizedCommand().getArmCommand().getNamedArmPositionCommand().getPosition();
  assert.ok(commandPosition === armCommandPb.NamedArmPositionsCommand.Positions.POSITIONS_STOW);

  // two synchro subcommands of a different type:
  const armCommand = RobotCommandBuilder.armReadyCommand();
  const mobilityCommand = RobotCommandBuilder.synchroStandCommand();
  command = RobotCommandBuilder.buildSynchroCommand(armCommand, mobilityCommand);
  _testHasSynchronized(command);
  _testHasMobility(command.getSynchronizedCommand());
  _testHasArm(command.getSynchronizedCommand());
  assert.ok(!command.getSynchronizedCommand().hasGripperCommand());
  assert.ok(command.getSynchronizedCommand().getMobilityCommand().hasStandRequest());
  commandPosition = command.getSynchronizedCommand().getArmCommand().getNamedArmPositionCommand().getPosition();
  assert.ok(commandPosition === armCommandPb.NamedArmPositionsCommand.Positions.POSITIONS_READY);

  // fullbody command is rejected
  const fullBodyCommand = RobotCommandBuilder.selfrightCommand();
  assert.throws(() => {
    command = RobotCommandBuilder.buildSynchroCommand(armCommand, fullBodyCommand);
  });
});

test('test_edit_timestamps', () => {
  const _setNewTime = (key, proto) => {
    const has = camelCase(`has-${key}`);
    if (proto[has] && !proto[has]()) {
      return;
    }

    const set = camelCase(`set-${key}`);
    proto[set](new Timestamp().setSeconds(10));
  };

  // Test ArmCartesianCommand
  let command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(
      new armCommandPb.ArmCommand.Request().setArmCartesianCommand(
        new armCommandPb.ArmCartesianCommand.Request()
          .setRootFrameName('test')
          .setPoseTrajectoryInTask(new trajectoryPb.SE3Trajectory().setReferenceTime(new Timestamp().setSeconds(25)))
          .setWrenchTrajectoryInTask(
            new trajectoryPb.WrenchTrajectory().setReferenceTime(new Timestamp().setSeconds(25)),
          ),
      ),
    ),
  );
  _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _setNewTime);
  const armCartesianCommand = command.getSynchronizedCommand().getArmCommand().getArmCartesianCommand();
  assert.ok(armCartesianCommand.getPoseTrajectoryInTask().getReferenceTime().getSeconds() === 10);
  assert.ok(armCartesianCommand.getWrenchTrajectoryInTask().getReferenceTime().getSeconds() === 10);
  assert.ok(armCartesianCommand.getRootFrameName() === 'test');

  // Test ArmJointMoveCommand
  command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(
      new armCommandPb.ArmCommand.Request().setArmJointMoveCommand(
        new armCommandPb.ArmJointMoveCommand.Request().setTrajectory(
          new armCommandPb.ArmJointTrajectory()
            .setMaximumVelocity(new DoubleValue().setValue(1))
            .setReferenceTime(new Timestamp().setSeconds(25)),
        ),
      ),
    ),
  );
  _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _setNewTime);
  const armJointMoveCommand = command.getSynchronizedCommand().getArmCommand().getArmJointMoveCommand();
  assert.ok(armJointMoveCommand.getTrajectory().getReferenceTime().getSeconds() === 10);
  assert.ok(armJointMoveCommand.getTrajectory().getMaximumVelocity().getValue() === 1);

  // Test ArmGazeCommand
  command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(
      new armCommandPb.ArmCommand.Request().setArmGazeCommand(
        new armCommandPb.GazeCommand.Request()
          .setFrame1Name('test')
          .setTargetTrajectoryInFrame1(
            new trajectoryPb.Vec3Trajectory().setReferenceTime(new Timestamp().setSeconds(25)),
          )
          .setToolTrajectoryInFrame2(new trajectoryPb.SE3Trajectory().setReferenceTime(new Timestamp().setSeconds(25))),
      ),
    ),
  );
  _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _setNewTime);
  const armGazeCommand = command.getSynchronizedCommand().getArmCommand().getArmGazeCommand();
  assert.ok(armGazeCommand.getFrame1Name() === 'test');
  assert.ok(armGazeCommand.getTargetTrajectoryInFrame1().getReferenceTime().getSeconds() === 10);
  assert.ok(armGazeCommand.getToolTrajectoryInFrame2().getReferenceTime().getSeconds() === 10);

  // Test ClawGripperCommand
  command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setGripperCommand(
      new gripperCommandPb.GripperCommand.Request().setClawGripperCommand(
        new gripperCommandPb.ClawGripperCommand.Request()
          .setMaximumTorque(new DoubleValue().setValue(10))
          .setTrajectory(new trajectoryPb.ScalarTrajectory().setReferenceTime(new Timestamp().setSeconds(25))),
      ),
    ),
  );
  _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _setNewTime);
  const clawGripperCommand = command.getSynchronizedCommand().getGripperCommand().getClawGripperCommand();
  assert.ok(clawGripperCommand.getMaximumTorque().getValue() === 10);
  assert.ok(clawGripperCommand.getTrajectory().getReferenceTime().getSeconds() === 10);

  // Tests Se2TrajectoryRequest - Trajectory
  command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      new mobilityCommandPb.MobilityCommand.Request().setSe2TrajectoryRequest(
        new basicCommandPb.SE2TrajectoryCommand.Request().setTrajectory(
          new trajectoryPb.SE2Trajectory().setReferenceTime(new Timestamp().setSeconds(25)),
        ),
      ),
    ),
  );
  _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _setNewTime);
  const se2TrajectoryRequestTrajetory = command.getSynchronizedCommand().getMobilityCommand().getSe2TrajectoryRequest();
  assert.ok(se2TrajectoryRequestTrajetory.getTrajectory().getReferenceTime().getSeconds() === 10);

  // Tests Se2TrajectoryRequest - EndTime
  command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      new mobilityCommandPb.MobilityCommand.Request().setSe2TrajectoryRequest(
        new basicCommandPb.SE2TrajectoryCommand.Request().setEndTime(new Timestamp().setSeconds(25)),
      ),
    ),
  );
  _editProto(command, END_TIME_EDIT_TREE, _setNewTime);
  const se2TrajectoryRequestEndTime = command.getSynchronizedCommand().getMobilityCommand().getSe2TrajectoryRequest();
  assert.ok(se2TrajectoryRequestEndTime.getEndTime().getSeconds() === 10);

  // Test Se2VelocityRequest
  command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      new mobilityCommandPb.MobilityCommand.Request().setSe2VelocityRequest(
        new basicCommandPb.SE2VelocityCommand.Request().setEndTime(new Timestamp().setSeconds(25)),
      ),
    ),
  );
  _editProto(command, END_TIME_EDIT_TREE, _setNewTime);
  const se2VelocityRequest = command.getSynchronizedCommand().getMobilityCommand().getSe2VelocityRequest();
  assert.ok(se2VelocityRequest.getEndTime().getSeconds() === 10);

  // Test StanceRequest
  command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setMobilityCommand(
      new mobilityCommandPb.MobilityCommand.Request().setStanceRequest(
        new basicCommandPb.StanceCommand.Request().setEndTime(new Timestamp().setSeconds(25)),
      ),
    ),
  );
  _editProto(command, END_TIME_EDIT_TREE, _setNewTime);
  const stanceRequest = command.getSynchronizedCommand().getMobilityCommand().getStanceRequest();
  assert.ok(stanceRequest.getEndTime().getSeconds() === 10);

  // Test ArmVelocityCommand
  command = new robotCommandPb.RobotCommand();
  command.setSynchronizedCommand(
    new synchronizedCommandPb.SynchronizedCommand.Request().setArmCommand(
      new armCommandPb.ArmCommand.Request().setArmVelocityCommand(
        new armCommandPb.ArmVelocityCommand.Request().setEndTime(new Timestamp().setSeconds(25)),
      ),
    ),
  );
  _editProto(command, END_TIME_EDIT_TREE, _setNewTime);
  const armVelocityCommand = command.getSynchronizedCommand().getArmCommand().getArmVelocityCommand();
  assert.ok(armVelocityCommand.getEndTime().getSeconds() === 10);
});
