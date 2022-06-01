'use strict';

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const argparse = require('argparse');

const {
  get_se2_a_tform_b,
  VISION_FRAME_NAME,
  GRAV_ALIGNED_BODY_FRAME_NAME,
} = require('../../bosdyn-client/frame_helpers');
const { LeaseClient, LeaseKeepAlive } = require('../../bosdyn-client/lease');
const { SE2Pose } = require('../../bosdyn-client/math_helpers');
const { RobotCommandClient, RobotCommandBuilder, blocking_stand } = require('../../bosdyn-client/robot_command');
const { RobotStateClient } = require('../../bosdyn-client/robot_state');

const util = require('../../bosdyn-client/util');

const client = require('../../index');

async function run(config) {
  const sdk = client.sdk.create_standard_sdk('StanceClient');
  const robot = sdk.create_robot(config.hostname);
  await robot.authenticate(config.username, config.password);
  await (await robot.time_sync).wait_for_sync();

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

  const command_client = await robot.ensure_client(RobotCommandClient.default_service_name);
  const robot_state_client = await robot.ensure_client(RobotStateClient.default_service_name);
  const state = await robot_state_client.get_robot_state();

  // This example ues the current body position, but you can specify any position.
  // A common use is to specify it relative to something you know, like a fiducial.
  const vo_T_body = get_se2_a_tform_b(
    state.getKinematicState().getTransformsSnapshot(),
    VISION_FRAME_NAME,
    GRAV_ALIGNED_BODY_FRAME_NAME,
  );

  console.log(vo_T_body);

  process.exit(0);

  // Power On
  await robot.power_on();
  console.assert(await robot.is_powered_on(), 'Robot power on failed.');

  // Stand
  await blocking_stand(command_client);

  // #### Example stance offsets from body position. ####
  const x_offset = config.x_offset;
  const y_offset = config.y_offset;

  const pos_fl_rt_vision = vo_T_body.mult(new SE2Pose(x_offset, y_offset, 0));
  const pos_fr_rt_vision = vo_T_body.mult(new SE2Pose(x_offset, -y_offset, 0));
  const pos_hl_rt_vision = vo_T_body.mult(new SE2Pose(-x_offset, y_offset, 0));
  const pos_hr_rt_vision = vo_T_body.mult(new SE2Pose(-x_offset, -y_offset, 0));

  const stance_cmd = RobotCommandBuilder.stance_command(
    VISION_FRAME_NAME,
    pos_fl_rt_vision.position,
    pos_fr_rt_vision.position,
    pos_hl_rt_vision.position,
    pos_hr_rt_vision.position,
  );

  console.log('After stance adjustment, press Ctrl-C to sit Spot and turn off motors.');

  /* eslint-disable no-constant-condition, no-await-in-loop */

  while (true) {
    // Update end time
    const time = await (await robot.time_sync).robot_timestamp_from_local_secs(Date.now() + 5_000);
    // eslint-disable-next-line
    stance_cmd.getSynchronizedCommand().getMobilityCommand().getStanceRequest().setEndTime(time);
    // Send the command
    await command_client.robot_command(stance_cmd);

    await sleep(1_000);
  }
}

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);
  parser.add_argument('--x-offset', { default: 0.3, type: 'float', help: 'Offset in X for Spot to step' });
  parser.add_argument('--y-offset', { default: 0.3, type: 'float', help: 'Offset in Y for Spot to step' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  if (!(Math.abs(options.x_offset) >= 0.2 && Math.abs(options.x_offset) <= 0.5)) {
    throw new TypeError('Invalid x-offset value. Please pass a value between 0.2 and 0.5');
  }

  if (!(Math.abs(options.y_offset) >= 0.1 && Math.abs(options.y_offset) <= 0.4)) {
    throw new TypeError('Invalid y-offset value. Please pass a value between 0.1 and 0.4');
  }

  /* eslint-disable no-useless-catch */

  try {
    await run(options);
    return true;
  } catch (e) {
    throw e;
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
