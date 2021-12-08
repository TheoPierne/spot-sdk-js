const client = require('../../index');
const {RobotCommandBuilder, RobotCommandClient, blocking_stand} = client.robot_command;
const {ImageClient} = client.image;
const {LeaseClient} = client.lease;

const {sleep} = require('../../bosdyn-core/util');
const geometry = require('../../bosdyn-core/geometry');
const image_util = require('../../bosdyn-core/image_util');
const {add_common_arguments} = require('../../bosdyn-client/util');

const path = require('path');
const {existsSync} = require('fs');
const argparse = require('argparse');

async function hello_spot(config){
	// client.util.setup_logging(config.verbose)

	const sdk = client.create_standard_sdk('HelloSpotClient');
	const robot = sdk.create_robot(config.hostname);

	await robot.authenticate(config.username, config.password);
	// robot.time_sync.wait_for_sync();

	console.assert(!robot.is_estopped(), "Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.");

	const lease_client = await robot.ensure_client(LeaseClient.default_service_name);
	const lease = await lease_client.acquire();
	try{
		with (bosdyn.client.lease.LeaseKeepAlive(lease_client)){
			robot.logger.info("Powering on robot... This may take several seconds.");
			await robot.power_on(20_000);
			console.assert(await robot.is_powered_on(), "Robot power on failed.");
			robot.logger.info("Robot powered on.");

			robot.logger.info("Commanding robot to stand...");
			const command_client = await robot.ensure_client(RobotCommandClient.default_service_name);
			await blocking_stand(command_client, 10_000);
			robot.logger.info("Robot standing.");
			await sleep(3_000);

			const footprint_R_body = new geometry.EulerZXY(0.4, 0.0, 0.0);
			let cmd = RobotCommandBuilder.synchro_stand_command(null, 0.0, footprint_R_body);
			await command_client.robot_command(cmd);
			robot.logger.info("Robot standing twisted.");
			await sleep(3_000);

			cmd = RobotCommandBuilder.synchro_stand_command(null, 0.1);
			await command_client.robot_command(cmd);
			robot.logger.info("Robot standing tall.");
			await sleep(3_000);

			const image_client = await robot.ensure_client(ImageClient.default_service_name);
			const sources = await image_client.list_image_sources();
			const image_response = await image_client.get_image_from_sources(['frontleft_fisheye_image']);
			_maybe_display_image(image_response[0].getShot().getImage());

			if(config.save || config.save_path != null){
				_maybe_save_image(image_response[0].getShot().getImage(), config.save_path);
			}

			const log_comment = "HelloSpot tutorial user comment.";
			await robot.operator_comment(log_comment);
			robot.logger.info('Added comment "%s" to robot log.', log_comment);

			await robot.power_off(false, 20_000);
			console.assert(!await robot.is_powered_on(), "Robot power off failed.");
			robot.logger.info("Robot safely powered off.");
		}
	}finally{
		lease_client.return_lease(lease);
	}

}

async function _maybe_display_image(image, display_time=3_000){
    try{
    	await image_util.show(image.getData());
        await sleep(display_time);
    }catch(e){
        console.warn("Exception thrown displaying image.", e);
    }
}


async function _maybe_save_image(image, pathFile){
    let name = "hello-spot-img.jpg";

    if(pathFile && existsSync(pathFile)){
        pathFile = path.join(process.cwd(), pathFile);
        name = path.join(pathFile, name);
        console.info(`Saving image to: ${name}`);
    }else{
        console.info(`Saving image to working directory as ${name}`);
    }

    try{
        await image_util.show(image.getData());
        await image_util.save(image.getData(), name);
    }catch(e){
        console.warn("Exception thrown saving image.", e);
    }
}

async function main(args = null){
	const parser = argparse.ArgumentParser();

    add_common_arguments(parser);

    parser.add_argument(['-s', '--save'], {action: 'store_true', help:
        'Save the image captured by Spot to the working directory. To chose the save location, use --save_path instead.'});
    parser.add_argument('--save-path', {default: null, nargs: '?', help:
        'Save the image captured by Spot to the provided directory. Invalid path saves to working directory.'});

    const options = (args == null) ? parser.parse_args() : parser.parse_args(args);

    try{
        await hello_spot(options);
        return true;
    }catch(e){
        console.error("Hello, Spot! threw an exception: ", exc)
        return false;
    }
}

if(require.main === module) {
    main();
}else{
	module.exports = main;
}