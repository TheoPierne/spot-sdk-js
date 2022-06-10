'use strict';

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const argparse = require('argparse');

const { GRAV_ALIGNED_BODY_FRAME_NAME, ODOM_FRAME_NAME, get_a_tform_b } = require('../../bosdyn-client/frame_helpers');
const { LeaseClient, LeaseKeepAlive } = require('../../bosdyn-client/lease');
const { SE3Pose } = require('../../bosdyn-client/math_helpers');
const {
  RobotCommandBuilder,
  RobotCommandClient,
  block_until_arm_arrives,
  blocking_stand,
} = require('../../bosdyn-client/robot_command');
const { RobotStateClient } = require('../../bosdyn-client/robot_state');
const util = require('../../bosdyn-client/util');
const arm_command_pb = require('../../bosdyn/api/arm_command_pb');
const geometry_pb = require('../../bosdyn/api/geometry_pb');
const gripper_command_pb = require('../../bosdyn/api/gripper_command_pb');
const client = require('../../index');

async function hello_arm(config) {
  const sdk = client.sdk.create_standard_sdk('HelloArmClient');
  const robot = sdk.create_robot(config.hostname);
  await robot.authenticate(config.username, config.password);
  await (await robot.time_sync).wait_for_sync();

  console.assert(await robot.has_arm(), 'Robot requires an arm to run this example.');

  // Verify the robot is not estopped and that an external application has registered and holds
  // an estop endpoint.
  console.assert(
    !(await robot.is_estopped()),
    'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
  );

  const robot_state_client = await robot.ensure_client(RobotStateClient.default_service_name);
  const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
  const lease_keep_alive = new LeaseKeepAlive(
    lease_client,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    true,
    true,
  );
  await lease_keep_alive.init();

  robot.logger.info('Powering on robot... This may take a several seconds.');
  await robot.power_on(20_000);
  console.assert(await robot.is_powered_on(), 'Robot power on failed.');
  robot.logger.info('Robot powered on.');

  robot.logger.info('Commanding robot to stand...');
  const command_client = await robot.ensure_client(RobotCommandClient.default_service_name);
  await blocking_stand(command_client, 10_000);
  robot.logger.info('Robot standing.');

  // Move the arm to a spot in front of the robot, and open the gripper.

  // Make the arm pose RobotCommand
  // Build a position to move the arm to (in meters, relative to and expressed in the gravity aligned body frame).
  const x = 0.75;
  const y = 0;
  const z = 0.25;
  const hand_ewrt_flat_body = new geometry_pb.Vec3().setX(x).setY(y).setZ(z);

  // Rotation as a quaternion
  const qw = 1;
  const qx = 0;
  const qy = 0;
  const qz = 0;
  const flat_body_Q_hand = new geometry_pb.Quaternion().setW(qw).setX(qx).setY(qy).setZ(qz);

  const flat_body_T_hand = new geometry_pb.SE3Pose().setPosition(hand_ewrt_flat_body).setRotation(flat_body_Q_hand);

  const robot_state = await robot_state_client.get_robot_state();
  const odom_T_flat_body = get_a_tform_b(
    robot_state.getKinematicState().getTransformsSnapshot(),
    ODOM_FRAME_NAME,
    GRAV_ALIGNED_BODY_FRAME_NAME,
  );

  let odom_T_hand = odom_T_flat_body.mult(SE3Pose.from_proto(flat_body_T_hand));

  // Duration in milliseconds
  const seconds = 2_000;

  let arm_command = RobotCommandBuilder.arm_pose_command(
    odom_T_hand.x,
    odom_T_hand.y,
    odom_T_hand.z,
    odom_T_hand.rot.w,
    odom_T_hand.rot.x,
    odom_T_hand.rot.y,
    odom_T_hand.rot.z,
    ODOM_FRAME_NAME,
    seconds,
  );

  // Make the open gripper RobotCommand
  let gripper_command = RobotCommandBuilder.claw_gripper_open_fraction_command(1.0);

  // Combine the arm and gripper commands into one RobotCommand
  let command = RobotCommandBuilder.build_synchro_command(gripper_command, arm_command);

  // Send the request
  let cmd_id = await command_client.robot_command(command);
  robot.logger.info('Moving arm to position 1.');

  // Wait until the arm arrives at the goal.
  await block_until_arm_arrives_with_prints(robot, command_client, cmd_id);

  // Move the arm to a different position
  hand_ewrt_flat_body.setZ(0);

  flat_body_Q_hand.setW(0.707).setX(0.707).setY(0).setZ(0);

  const flat_body_T_hand2 = new geometry_pb.SE3Pose().setPosition(hand_ewrt_flat_body).setRotation(flat_body_Q_hand);
  odom_T_hand = odom_T_flat_body.mult(SE3Pose.from_proto(flat_body_T_hand2));

  arm_command = RobotCommandBuilder.arm_pose_command(
    odom_T_hand.x,
    odom_T_hand.y,
    odom_T_hand.z,
    odom_T_hand.rot.w,
    odom_T_hand.rot.x,
    odom_T_hand.rot.y,
    odom_T_hand.rot.z,
    ODOM_FRAME_NAME,
    seconds,
  );

  // Close the gripper
  gripper_command = RobotCommandBuilder.claw_gripper_open_fraction_command(0.0);

  // Build the proto
  command = RobotCommandBuilder.build_synchro_command(gripper_command, arm_command);

  // Send the request
  cmd_id = await command_client.robot_command(command);
  robot.logger.info('Moving arm to position 2.');

  // Wait until the arm arrives at the goal.
  // Note: here we use the helper function provided by robot_command.
  await block_until_arm_arrives(command_client, cmd_id);

  robot.logger.info('Done.');

  // Power the robot off. By specifying "cut_immediately=False", a safe power off command
  // is issued to the robot. This will attempt to sit the robot before powering off.
  await robot.power_off(false, 20_000);
  console.assert(!(await robot.is_powered_on()), 'Robot power off failed.');
  robot.logger.info('Robot safely powered off.');
}

async function block_until_arm_arrives_with_prints(robot, command_client, cmd_id) {
  /* eslint-disable no-await-in-loop */
  while (true) {
    const feedback_resp = await command_client.robot_command_feedback(cmd_id);
    const armCartesianFeedback = feedback_resp
      .getFeedback()
      .getSynchronizedFeedback()
      .getArmCommandFeedback()
      .getArmCartesianFeedback();
    robot.logger.info(
      `Distance to go: ${armCartesianFeedback.getMeasuredPosDistanceToGoal()} meters, ${armCartesianFeedback.getMeasuredRotDistanceToGoal()} radians`,
    );

    if (
      armCartesianFeedback.getStatus() === arm_command_pb.ArmCartesianCommand.Feedback.Status.STATUS_TRAJECTORY_COMPLETE
    ) {
      robot.logger.info('Move complete.');
      break;
    }
    await sleep(100);
  }
}

function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  return hello_arm(options);
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
