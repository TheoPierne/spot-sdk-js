'use strict';

const { existsSync } = require('node:fs');
const path = require('node:path');
const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const argparse = require('argparse');
const { ImageClient } = require('../../bosdyn-client/image');
const { LeaseClient } = require('../../bosdyn-client/lease');
const { RobotCommandBuilder, RobotCommandClient, blocking_stand } = require('../../bosdyn-client/robot_command');

const { add_common_arguments } = require('../../bosdyn-client/util');
const geometry = require('../../bosdyn-core/geometry');
const image_util = require('../../bosdyn-core/image_util');

const client = require('../../index');

async function hello_spot(config) {
  // Client.util.setup_logging(config.verbose)

  const sdk = client.sdk.create_standard_sdk('HelloSpotClient');
  const robot = sdk.create_robot(config.hostname);

  await robot.authenticate(config.username, config.password);

  await (await robot.time_sync).wait_for_sync();

  const is_estopped = await robot.is_estopped();

  console.assert(
    !is_estopped,
    'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
    );

  const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
  const lease = await lease_client.acquire();
  try {
    robot.logger.info('Powering on robot... This may take several seconds.');
    await robot.power_on(20_000);
    console.assert(await robot.is_powered_on(), 'Robot power on failed.');
    robot.logger.info('Robot powered on.');

    robot.logger.info('Commanding robot to stand...');
    const command_client = await robot.ensure_client(RobotCommandClient.default_service_name);
    await blocking_stand(command_client, 10_000);
    robot.logger.info('Robot standing.');
    await sleep(3_000);

    const footprint_R_body = new geometry.EulerZXY(0.4, 0.0, 0.0);
    let cmd = RobotCommandBuilder.synchro_stand_command(null, 0.0, footprint_R_body);
    await command_client.robot_command(cmd);
    robot.logger.info('Robot standing twisted.');
    await sleep(3_000);

    cmd = RobotCommandBuilder.synchro_stand_command(null, 0.1);
    await command_client.robot_command(cmd);
    robot.logger.info('Robot standing tall.');
    await sleep(3_000);

    const image_client = await robot.ensure_client(ImageClient.default_service_name);
    await image_client.list_image_sources();
    const image_response = await image_client.get_image_from_sources(['frontleft_fisheye_image']);
    await _maybe_display_image(image_response[0].getShot().getImage());

    if (config.save || config.save_path !== null) {
      await _maybe_save_image(image_response[0].getShot().getImage(), config.save_path);
    }

    const log_comment = 'HelloSpot tutorial user comment.';
    await robot.operator_comment(log_comment);
    robot.logger.info(`Added comment "${log_comment}" to robot log.`);

    await robot.power_off(false, 20_000);
    console.assert(!(await robot.is_powered_on()), 'Robot power off failed.');
    robot.logger.info('Robot safely powered off.');
  } catch (e) {
    console.log(e);
  } finally {
    await lease_client.return_lease(lease);
  }
}

async function _maybe_display_image(image, display_time = 3_000) {
  try {
    await image_util.show(image.getData());
    await sleep(display_time);
  } catch (e) {
    console.warn('Exception thrown displaying image.', e);
  }
}

async function _maybe_save_image(image, pathFile) {
  let name = 'hello-spot-img.jpg';

  if (pathFile && existsSync(pathFile)) {
    pathFile = path.join(process.cwd(), pathFile);
    name = path.join(pathFile, name);
    console.info(`Saving image to: ${name}`);
  } else {
    console.info(`Saving image to working directory as ${name}`);
  }

  try {
    await image_util.show(image.getData());
    await image_util.save(image.getData(), name);
  } catch (e) {
    console.warn('Exception thrown saving image.', e);
  }
}

async function main(args = null) {
  const parser = argparse.ArgumentParser();

  add_common_arguments(parser);

  parser.add_argument('-s', '--save', {
    action: 'store_true',
    help: 'Save the image captured by Spot to the working directory. To chose the save location, use --save_path instead.', // eslint-disable-line
  });
  parser.add_argument('--save-path', {
    default: null,
    nargs: '?',
    help: 'Save the image captured by Spot to the provided directory. Invalid path saves to working directory.',
  });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  await hello_spot(options);
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
